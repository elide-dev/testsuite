import { join } from "node:path";
import picomatch from "picomatch";
import type { Adapter, AdapterContext } from "./types";
import type { TestResult } from "../results/schema";
import { loadManifest } from "../manifest";
import { shardItems, mergeAsyncIterables } from "./pool";

interface CpythonRecord {
  module: string;
  case: string;
  status: TestResult["status"] | "running";
  message?: string;
  durationMs?: number;
}

const CPYTHON_STATUSES = new Set(["pass", "fail", "skip", "error", "running"]);

function parseCpythonRecord(line: string): CpythonRecord | null {
  const s = line.trim();
  if (!s) return null;
  try {
    const parsed = JSON.parse(s) as Partial<CpythonRecord>;
    if (typeof parsed.module !== "string" || parsed.module.length === 0) return null;
    if (typeof parsed.status !== "string" || !CPYTHON_STATUSES.has(parsed.status)) return null;
    if (parsed.case !== undefined && typeof parsed.case !== "string") return null;
    if (parsed.message !== undefined && typeof parsed.message !== "string") parsed.message = String(parsed.message);
    return parsed as CpythonRecord;
  } catch {
    return null;
  }
}

export function parseCpythonLine(line: string): TestResult | null {
  const r = parseCpythonRecord(line);
  if (!r) return null;
  if (r.status === "running") return null;
  const id = r.case || r.module;
  if (!id) return null;
  return {
    kind: "test",
    id,
    status: r.status,
    message: r.message,
    durationMs: r.durationMs,
    meta: {
      suite: "cpython-core",
      upstreamPath: r.module,
      category: r.module,
      runner: "regrtest",
      subtest: r.case || r.module,
    },
  };
}

export function parseCpythonLines(text: string): TestResult[] {
  return text.split(/\r?\n/).map(parseCpythonLine).filter((r): r is TestResult => r !== null);
}

export function remapCpythonSkip(result: TestResult, skipGlobs: Array<(value: string) => boolean>): TestResult {
  const upstreamPath = String(result.meta?.upstreamPath ?? "");
  const caseId = String(result.id);
  return skipGlobs.some((match) => match(upstreamPath) || match(caseId)) ? { ...result, status: "skip" } : result;
}

export function filterIncludedModules(modules: string[], includeGlobs: string[]): string[] {
  if (!includeGlobs.length) return modules;
  const matchers = includeGlobs.map((glob) => picomatch(glob));
  return modules.filter((module) => matchers.some((match) => match(module)));
}

function progressEnabled(ctx: AdapterContext): boolean {
  return Boolean(ctx.log || ctx.verbose);
}

function configuredElideRunArgs(ctx: AdapterContext): string[] {
  const raw = ctx.settings.elideRunArgs;
  if (raw === undefined) return [];
  if (!Array.isArray(raw)) throw new Error("cpython-core settings.elideRunArgs must be an array");
  return raw.map(String).filter(Boolean);
}

function startProgress(ctx: AdapterContext, label: string, currentActivity: () => string | undefined): () => void {
  if (!progressEnabled(ctx)) return () => {};
  const started = performance.now();
  process.stderr.write(`${ctx.logPrefix ?? ""}progress: start ${label}\n`);
  const interval = setInterval(() => {
    const seconds = Math.round((performance.now() - started) / 1000);
    const current = currentActivity();
    const suffix = current ? `; active ${current}` : "";
    process.stderr.write(`${ctx.logPrefix ?? ""}progress: still running ${label}${suffix} (${seconds}s)\n`);
  }, Number(ctx.settings.progressIntervalMs ?? 10_000));
  return () => clearInterval(interval);
}

function runnerErrorResult(message: string, durationMs = 0): TestResult {
  return {
    kind: "test",
    id: "cpython-core::<runner>",
    status: "error",
    message,
    durationMs,
    meta: {
      suite: "cpython-core",
      upstreamPath: "<runner>",
      category: "runner",
      runner: "regrtest",
      subtest: "<runner>",
    },
  };
}

function moduleFromActivity(activity: string): string {
  const phase = activity.match(/^(?:importing|loading|filtering|running) (test_[^\s]+)$/);
  if (phase) return phase[1]!;
  return activity.split(".")[0] ?? "<runner>";
}

function idFromActivity(activity: string): string {
  const phase = activity.match(/^(importing|loading|filtering|running) (test_[^\s]+)$/);
  if (phase) return `${phase[2]}::<${phase[1]}>`;
  return activity;
}

function activityTimeoutResult(activity: string, durationMs: number, timeoutMs: number): TestResult {
  const module = moduleFromActivity(activity);
  const id = idFromActivity(activity);
  return {
    kind: "test",
    id,
    status: "error",
    message: `CPython driver timed out after ${timeoutMs}ms while ${activity}`,
    durationMs,
    meta: {
      suite: "cpython-core",
      upstreamPath: module,
      category: module,
      runner: "regrtest",
      subtest: id,
    },
  };
}

async function readCappedText(
  stream: ReadableStream<Uint8Array>,
  cap: number,
  onLine?: (line: string) => void,
): Promise<string> {
  const decoder = new TextDecoder();
  let output = "";
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
    if (output.length < cap) output += text.slice(0, cap - output.length);
  }
  const rest = decoder.decode();
  if (rest) emitLines(rest);
  emitLines("", true);
  if (output.length < cap) output += rest.slice(0, cap - output.length);
  return output;
}

async function* runCpythonShard(
  ctx: AdapterContext,
  driver: string,
  modules: string[],
  driverSkipArgs: string[],
  skip: Array<(value: string) => boolean>,
  timeoutMs: number,
): AsyncIterable<TestResult> {
  const started = performance.now();
  const progress = progressEnabled(ctx);
  const elideRunArgs = configuredElideRunArgs(ctx);
  const proc = Bun.spawn([
    ctx.elidePath,
    "run",
    ...elideRunArgs,
    driver,
    "--",
    "--cpython-root",
    ctx.suitePath,
    ...(progress ? ["--progress-stderr"] : []),
    ...driverSkipArgs,
    ...modules,
  ], {
    cwd: ctx.repoRoot,
    env: process.env,
    stdout: "pipe",
    stderr: "pipe",
  });
  let activeCase: string | undefined;
  let activeSince = performance.now();
  const setActiveCase = (activity: string | undefined): void => {
    if (activity === activeCase) return;
    activeCase = activity;
    activeSince = performance.now();
  };
  const stopProgress = startProgress(
    ctx,
    `CPython shard: ${modules.slice(0, 4).join(", ")}${modules.length > 4 ? ", ..." : ""}`,
    () => activeCase,
  );
  const stderr = readCappedText(proc.stderr as ReadableStream<Uint8Array>, 1_000_000, progress
    ? (line) => {
        if (line.startsWith("progress: ")) {
          const activity = line.slice("progress: ".length);
          setActiveCase(activity.startsWith("done ") ? undefined : activity);
          process.stderr.write(`${ctx.logPrefix ?? ""}${line}\n`);
          return;
        }
        if (ctx.verbose) process.stderr.write(`${ctx.logPrefix ?? ""}${line}\n`);
      }
    : undefined);

  let timedOut = false;
  let timedOutActivity: string | undefined;
  const caseTimeoutMs = Number(ctx.settings.caseTimeoutMs ?? 60_000);
  const timer = setTimeout(() => {
    timedOut = true;
    proc.kill("SIGKILL");
  }, timeoutMs);
  const caseTimer = setInterval(() => {
    if (!activeCase) return;
    if (performance.now() - activeSince < caseTimeoutMs) return;
    timedOut = true;
    timedOutActivity = activeCase;
    proc.kill("SIGKILL");
  }, Math.min(1_000, Math.max(100, caseTimeoutMs / 10)));

  let parsedCount = 0;
  let stdout = "";
  let pending = "";
  const decoder = new TextDecoder();
  const emitLine = function* (line: string): Iterable<TestResult> {
    const record = parseCpythonRecord(line);
    if (record?.status === "running") {
      setActiveCase(record.case || record.module);
      return;
    }
    const parsed = record ? parseCpythonLine(line) : null;
    if (!parsed) return;
    if (activeCase === parsed.id) setActiveCase(undefined);
    parsedCount++;
    yield remapCpythonSkip(parsed, skip);
  };

  for await (const chunk of proc.stdout as ReadableStream<Uint8Array>) {
    const text = decoder.decode(chunk, { stream: true });
    if (stdout.length < 1_000_000) stdout += text.slice(0, 1_000_000 - stdout.length);
    pending += text;
    let newline = pending.search(/\r?\n/);
    while (newline >= 0) {
      const line = pending.slice(0, newline);
      pending = pending.slice(pending[newline] === "\r" && pending[newline + 1] === "\n" ? newline + 2 : newline + 1);
      yield* emitLine(line);
      newline = pending.search(/\r?\n/);
    }
  }
  const rest = decoder.decode();
  if (rest) {
    if (stdout.length < 1_000_000) stdout += rest.slice(0, 1_000_000 - stdout.length);
    pending += rest;
  }
  if (pending.trim()) yield* emitLine(pending);

  const [exitCode, stderrText] = await Promise.all([proc.exited, stderr]);
  clearTimeout(timer);
  clearInterval(caseTimer);
  stopProgress();
  const durationMs = Math.round(performance.now() - started);
  if (timedOut) {
    if (timedOutActivity) {
      yield activityTimeoutResult(timedOutActivity, durationMs, caseTimeoutMs);
      return;
    }
    yield runnerErrorResult("CPython driver timed out", durationMs);
    return;
  }
  if (exitCode !== 0 && parsedCount === 0) {
    yield runnerErrorResult(stderrText || stdout, durationMs);
  }
}

export async function* runCpythonCore(ctx: AdapterContext): AsyncIterable<TestResult> {
  const manifestPath = String(ctx.settings.manifest ?? "");
  if (!manifestPath) throw new Error("cpython-core requires settings.manifest");
  const manifest = loadManifest(manifestPath);
  const modules = filterIncludedModules(manifest.groups.flatMap((g) => g.include), ctx.include);
  const skip = ctx.skipGlobs.map((g) => picomatch(g));
  const driverSkipArgs = ctx.skipGlobs.flatMap((glob) => ["--skip", glob]);
  const driver = join(ctx.repoRoot, "suites/drivers/python/elide_regrtest_driver.py");
  if (modules.length === 0) {
    yield runnerErrorResult("cpython-core selected no modules");
    return;
  }

  const timeoutMs = Number(ctx.settings.timeoutMs ?? 120_000);
  const shards = shardItems(modules, ctx.threads);
  yield* mergeAsyncIterables(
    shards.map((shard) => runCpythonShard(ctx, driver, shard, driverSkipArgs, skip, timeoutMs)),
  );
}

export const cpythonCoreAdapter: Adapter = {
  id: "cpython-core",
  kind: "test",
  run: runCpythonCore,
};
