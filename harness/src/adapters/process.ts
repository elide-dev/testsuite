export interface ProcessRunOptions {
  cwd: string;
  env?: Record<string, string | undefined>;
  timeoutMs: number;
  maxOutputBytes?: number;
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

async function readCapped(stream: ReadableStream<Uint8Array>, cap: number): Promise<string> {
  const chunks: Uint8Array[] = [];
  let total = 0;
  for await (const chunk of stream) {
    const remaining = Math.max(0, cap - total);
    if (remaining > 0) chunks.push(chunk.slice(0, remaining));
    total += chunk.byteLength;
  }
  const merged = new Uint8Array(chunks.reduce((n, c) => n + c.byteLength, 0));
  let offset = 0;
  for (const chunk of chunks) {
    merged.set(chunk, offset);
    offset += chunk.byteLength;
  }
  return new TextDecoder().decode(merged);
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
    readCapped(proc.stdout as ReadableStream<Uint8Array>, cap),
    readCapped(proc.stderr as ReadableStream<Uint8Array>, cap),
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
