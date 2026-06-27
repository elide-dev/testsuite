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

export async function runProcess(argv: string[], options: ProcessRunOptions): Promise<ProcessRunResult> {
  const started = performance.now();
  const proc = Bun.spawn(argv, {
    cwd: options.cwd,
    env: { ...process.env, ...options.env },
    stdout: "pipe",
    stderr: "pipe",
  });

  let timedOut = false;
  const timer = setTimeout(() => {
    timedOut = true;
    proc.kill("SIGKILL");
  }, options.timeoutMs);

  const cap = options.maxOutputBytes ?? 1_000_000;
  const [stdout, stderr] = await Promise.all([
    readCapped(proc.stdout as ReadableStream<Uint8Array>, cap, options.onStdoutLine),
    readCapped(proc.stderr as ReadableStream<Uint8Array>, cap, options.onStderrLine),
  ]);
  const exitCode = await proc.exited;
  clearTimeout(timer);

  return {
    command: argv,
    exitCode,
    stdout,
    stderr,
    durationMs: Math.round(performance.now() - started),
    timedOut,
  };
}
