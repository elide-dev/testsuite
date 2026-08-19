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

// Per-test ceilings. Node's suite contains tests that fork without bound, and the group kill below
// only fires once the timeout expires — by then a runaway can have taken the machine's RAM with it.
// `systemd-run --user --scope` gives each test its own cgroup: memory and task ceilings enforced
// continuously, plus a runtime cap that reaps the whole cgroup (descendants that called setsid
// included). Where it is unavailable — inside the harness container, on macOS — tests run uncaged
// and the container's own limits apply.
const CAGE_MEMORY_MAX = process.env.TESTSUITE_TEST_MEMORY_MAX ?? "4G";
const CAGE_TASKS_MAX = process.env.TESTSUITE_TEST_TASKS_MAX ?? "512";
const CAGE_GRACE_SEC = 5;

let cageAvailable: boolean | undefined;

function cageSupported(): boolean {
  if (cageAvailable !== undefined) return cageAvailable;
  if (process.env.TESTSUITE_NO_CGROUP === "1" || process.platform !== "linux") {
    cageAvailable = false;
    return cageAvailable;
  }
  try {
    const probe = Bun.spawnSync(
      ["systemd-run", "--user", "--scope", "-q", "--collect", "-p", "MemoryMax=64M", "--", "/bin/true"],
      { stdout: "ignore", stderr: "ignore" },
    );
    cageAvailable = probe.exitCode === 0;
  } catch {
    // No `systemd-run` on PATH at all: spawnSync throws rather than reporting an exit code.
    cageAvailable = false;
  }
  return cageAvailable;
}

function caged(argv: string[], timeoutMs: number): string[] {
  if (!cageSupported()) return argv;
  return [
    "systemd-run",
    "--user",
    "--scope",
    "-q",
    "--collect",
    "--slice=elide-testsuite.slice",
    "-p",
    `RuntimeMaxSec=${Math.max(1, Math.ceil(timeoutMs / 1000) + CAGE_GRACE_SEC)}`,
    "-p",
    `MemoryMax=${CAGE_MEMORY_MAX}`,
    "-p",
    "MemorySwapMax=0",
    "-p",
    `TasksMax=${CAGE_TASKS_MAX}`,
    "--",
    ...argv,
  ];
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
  const proc = Bun.spawn(caged(argv, options.timeoutMs), {
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
