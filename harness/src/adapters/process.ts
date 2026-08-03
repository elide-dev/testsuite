export interface ProcessRunOptions {
  cwd: string;
  env?: Record<string, string | undefined>;
  timeoutMs: number;
  maxOutputBytes?: number;
  onStdoutLine?: (line: string) => void;
  onStderrLine?: (line: string) => void;
}

export interface ProcessRunResult {
  command: string[];
  exitCode: number;
  signal?: string;
  stdout: string;
  stderr: string;
  durationMs: number;
  timedOut: boolean;
}

async function readCapped(
  stream: ReadableStream<Uint8Array>,
  cap: number,
  onLine?: (line: string) => void,
  sink?: { text: string },
): Promise<string> {
  const decoder = new TextDecoder();
  let output = "";
  let total = 0;
  let pending = "";
  const emitLines = (text: string, flush = false): void => {
    if (!onLine) return;
    pending += text;
    let newline = pending.search(/\r?\n/);
    while (newline >= 0) {
      const line = pending.slice(0, newline);
      pending = pending.slice(pending[newline] === "\r" && pending[newline + 1] === "\n" ? newline + 2 : newline + 1);
      onLine(line);
      newline = pending.search(/\r?\n/);
    }
    if (flush && pending) {
      onLine(pending);
      pending = "";
    }
  };

  for await (const chunk of stream) {
    const text = decoder.decode(chunk, { stream: true });
    emitLines(text);
    const remaining = Math.max(0, cap - total);
    if (remaining > 0) output += text.slice(0, remaining);
    total += chunk.byteLength;
    if (sink) sink.text = output;
  }
  const rest = decoder.decode();
  if (rest) {
    emitLines(rest);
    const remaining = Math.max(0, cap - total);
    if (remaining > 0) output += rest.slice(0, remaining);
    total += new TextEncoder().encode(rest).byteLength;
  }
  emitLines("", true);
  return output;
}

// Grace between reaping the process group and dropping the pipes. A descendant that
// opened its own session escapes the group kill and keeps the inherited pipes open,
// which would stall the read for as long as it lives.
const PIPE_GIVEUP_MS = 2_000;

export async function runProcess(argv: string[], options: ProcessRunOptions): Promise<ProcessRunResult> {
  const started = performance.now();
  // Own process group, so a timeout reaps the whole tree. Node's core suite spawns
  // children that outlive the test process and hold its stdout open; killing the
  // entry process alone leaves them running and the read below never ends.
  const proc = Bun.spawn(argv, {
    cwd: options.cwd,
    env: { ...process.env, ...options.env },
    stdout: "pipe",
    stderr: "pipe",
    detached: true,
  });
  const stdoutStream = proc.stdout as ReadableStream<Uint8Array>;
  const stderrStream = proc.stderr as ReadableStream<Uint8Array>;

  let timedOut = false;
  let abandonPipes: () => void = () => {};
  const abandoned = new Promise<void>((resolve) => {
    abandonPipes = resolve;
  });
  let giveUpTimer: ReturnType<typeof setTimeout> | undefined;
  const timer = setTimeout(() => {
    timedOut = true;
    try {
      process.kill(-proc.pid, "SIGKILL");
    } catch {
      proc.kill("SIGKILL");
    }
    giveUpTimer = setTimeout(abandonPipes, PIPE_GIVEUP_MS);
  }, options.timeoutMs);

  const cap = options.maxOutputBytes ?? 1_000_000;
  const outSink = { text: "" };
  const errSink = { text: "" };
  const captured = Promise.all([
    readCapped(stdoutStream, cap, options.onStdoutLine, outSink),
    readCapped(stderrStream, cap, options.onStderrLine, errSink),
  ]);
  // Whole-read give-up rather than a cancel: Bun's subprocess pipes reject an
  // explicit reader, so the pending read is left behind with what it collected.
  const complete = await Promise.race([captured, abandoned.then(() => undefined)]);
  const [stdout, stderr] = complete ?? [outSink.text, errSink.text];
  const exitCode = await proc.exited;
  clearTimeout(timer);
  if (giveUpTimer) clearTimeout(giveUpTimer);

  return {
    command: argv,
    exitCode,
    stdout,
    stderr,
    durationMs: Math.round(performance.now() - started),
    timedOut,
  };
}
