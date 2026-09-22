import { readdir } from "node:fs/promises";
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

/**
 * A pipe read in progress. `cancel` releases the reader so a leaked
 * grandchild holding the write end can never wedge the caller.
 */
interface CappedRead {
  done: Promise<string>;
  cancel: () => void;
}

function readCapped(
  stream: ReadableStream<Uint8Array>,
  cap: number,
  onLine?: (line: string) => void,
): CappedRead {
  const reader = stream.getReader();
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

  const done = (async () => {
    for (;;) {
      const { done: finished, value } = await reader.read();
      if (finished) break;
      const text = decoder.decode(value, { stream: true });
      emitLines(text);
      const remaining = Math.max(0, cap - total);
      if (remaining > 0) output += text.slice(0, remaining);
      total += value.byteLength;
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
  })();

  return { done, cancel: () => void reader.cancel().catch(() => {}) };
}

/**
 * How long to keep draining the pipes after the direct child has exited.
 * Only reached when something still holds the write end open.
 */
const DRAIN_GRACE_MS = 2_000;

export async function runProcess(argv: string[], options: ProcessRunOptions): Promise<ProcessRunResult> {
  const started = performance.now();
  const proc = Bun.spawn(argv, {
    cwd: options.cwd,
    env: { ...process.env, ...options.env },
    stdout: "pipe",
    stderr: "pipe",
    // Give the child its own process group (setsid) so a timeout can kill the
    // whole tree. Suite tests routinely spawn helpers of their own, and killing
    // just the direct child leaves those spinning.
    detached: true,
  });

  // Negative pid signals the process group created by `detached`, so helpers the
  // child spawned die with it. Falls back to the bare child if the group is gone.
  const killTree = (): void => {
    try {
      process.kill(-proc.pid, "SIGKILL");
    } catch {
      proc.kill("SIGKILL");
    }
  };

  let timedOut = false;
  const timer = setTimeout(() => {
    timedOut = true;
    killTree();
  }, options.timeoutMs);

  const cap = options.maxOutputBytes ?? 1_000_000;
  const stdout = readCapped(proc.stdout as ReadableStream<Uint8Array>, cap, options.onStdoutLine);
  const stderr = readCapped(proc.stderr as ReadableStream<Uint8Array>, cap, options.onStderrLine);

  const exitCode = await proc.exited;
  clearTimeout(timer);

  // The direct child is gone, but a grandchild that inherited the pipes keeps
  // their write ends open, so the readers may never see EOF. Drain briefly, then
  // kill the group and cancel the readers: a leaked helper must not wedge the
  // run past its timeout.
  const reads = Promise.all([stdout.done, stderr.done]);
  let graceTimer: ReturnType<typeof setTimeout> | undefined;
  const drained = await Promise.race([
    reads.then(() => true),
    new Promise<boolean>((resolve) => {
      graceTimer = setTimeout(() => resolve(false), DRAIN_GRACE_MS);
    }),
  ]);
  if (graceTimer) clearTimeout(graceTimer);
  if (!drained) {
    killTree();
    stdout.cancel();
    stderr.cancel();
  }
  const [outText, errText] = await reads;

  return {
    command: argv,
    exitCode,
    stdout: outText,
    stderr: errText,
    durationMs: Math.round(performance.now() - started),
    timedOut,
  };
}

/** A process still alive after the run that spawned it finished. */
export interface Survivor {
  pid: number;
  command: string;
}

/**
 * The live members of a process group. Read from `/proc` on Linux so that counting survivors
 * never itself needs a fork — the one thing that is known to be unavailable when a run has
 * exhausted its process limit. Other platforms pay for a `ps`.
 */
export async function processGroupMembers(pgid: number): Promise<Survivor[]> {
  const survivors: Survivor[] = [];
  if (process.platform === "linux") {
    let entries: string[];
    try {
      entries = await readdir("/proc");
    } catch {
      return [];
    }
    for (const entry of entries) {
      if (!/^\d+$/.test(entry) || Number(entry) === process.pid) continue;
      try {
        const stat = await Bun.file(`/proc/${entry}/stat`).text();
        // `comm` is parenthesized and may contain spaces, so fields are counted from the last
        // `)`: state, ppid, pgrp.
        if (Number(stat.slice(stat.lastIndexOf(")") + 2).split(" ")[2]) !== pgid) continue;
        const cmdline = await Bun.file(`/proc/${entry}/cmdline`).text();
        survivors.push({ pid: Number(entry), command: cmdline.replaceAll("\0", " ").trim() });
      } catch {
        // It exited while being read, which is the outcome we were after anyway.
      }
    }
    return survivors;
  }
  const ps = Bun.spawn(["ps", "-A", "-o", "pgid=,pid=,command="], { stdout: "pipe", stderr: "ignore" });
  const text = await new Response(ps.stdout).text();
  await ps.exited;
  for (const line of text.split("\n")) {
    const match = /^\s*(\d+)\s+(\d+)\s+(.*)$/.exec(line);
    if (!match || Number(match[1]) !== pgid) continue;
    const pid = Number(match[2]);
    if (pid !== process.pid) survivors.push({ pid, command: match[3]!.trim() });
  }
  return survivors;
}

/**
 * Kill whatever a finished run left behind in its process group and report what was there.
 *
 * jtreg's `-othervm` JVMs fork servers and helpers of their own; those grandchildren outlive a
 * test that timed out, and enough of them starve the next area of processes an hour later. Once
 * the group's leader has exited nothing in it is legitimate, so the group is signalled whole.
 * The survivors are returned rather than merely counted: the command line is what identifies
 * the test that leaked, which is what a fix needs.
 */
export async function reapProcessGroup(pgid: number, graceMs = 2_000): Promise<Survivor[]> {
  const survivors = await processGroupMembers(pgid);
  if (!survivors.length) return [];
  const signal = (name: "SIGTERM" | "SIGKILL") => {
    try {
      // Negative pid addresses the group. The leader has already exited, so its pid could in
      // principle have been reused; reaping immediately after the wait keeps that window shut.
      process.kill(-pgid, name);
    } catch {
      // Already gone between listing and signalling.
    }
  };
  signal("SIGTERM");
  const deadline = Date.now() + graceMs;
  while (Date.now() < deadline) {
    await Bun.sleep(100);
    if (!(await processGroupMembers(pgid)).length) return survivors;
  }
  signal("SIGKILL");
  return survivors;
}
