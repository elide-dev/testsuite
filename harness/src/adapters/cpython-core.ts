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

function parseCpythonRecord(line: string): CpythonRecord | null {
  const s = line.trim();
  if (!s) return null;
  try {
    return JSON.parse(s) as CpythonRecord;
  } catch {
    return null;
  }
}

export function parseCpythonLine(line: string): TestResult | null {
  const r = parseCpythonRecord(line);
  if (!r) return null;
  if (r.status === "running") return null;
  return {
    kind: "test",
    id: r.case || r.module,
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
  const proc = Bun.spawn([
    ctx.elidePath,
    "run",
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
  const stopProgress = startProgress(
    ctx,
    `CPython shard: ${modules.slice(0, 4).join(", ")}${modules.length > 4 ? ", ..." : ""}`,
    () => activeCase,
  );
  const stderr = readCappedText(proc.stderr as ReadableStream<Uint8Array>, 1_000_000, progress
    ? (line) => {
        if (line.startsWith("progress: ") || ctx.verbose) process.stderr.write(`${ctx.logPrefix ?? ""}${line}\n`);
      }
    : undefined);

  let timedOut = false;
  const timer = setTimeout(() => {
    timedOut = true;
    proc.kill("SIGKILL");
  }, timeoutMs);

  let parsedCount = 0;
  let stdout = "";
  let pending = "";
  const decoder = new TextDecoder();
  const emitLine = function* (line: string): Iterable<TestResult> {
    const record = parseCpythonRecord(line);
    if (record?.status === "running") {
      activeCase = record.case || record.module;
      return;
    }
    const parsed = record ? parseCpythonLine(line) : null;
    if (!parsed) return;
    if (activeCase === parsed.id) activeCase = undefined;
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
  stopProgress();
  const durationMs = Math.round(performance.now() - started);
  if (timedOut) {
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
