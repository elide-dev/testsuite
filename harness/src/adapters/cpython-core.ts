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

export function parseCpythonLine(line: string): TestResult | null {
  const s = line.trim();
  if (!s) return null;
  let r: CpythonRecord;
  try {
    r = JSON.parse(s) as CpythonRecord;
  } catch {
    return null;
  }
  return {
    kind: "test",
    id: r.case || r.module,
    status: r.status === "running" ? "skip" : r.status,
    message: r.status === "running" ? "running" : r.message,
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

async function readCappedText(stream: ReadableStream<Uint8Array>, cap: number): Promise<string> {
  const decoder = new TextDecoder();
  let output = "";
  for await (const chunk of stream) {
    const text = decoder.decode(chunk, { stream: true });
    if (output.length < cap) output += text.slice(0, cap - output.length);
  }
  const rest = decoder.decode();
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
  const proc = Bun.spawn([ctx.elidePath, "run", driver, "--", "--cpython-root", ctx.suitePath, ...driverSkipArgs, ...modules], {
    cwd: ctx.repoRoot,
    env: process.env,
    stdout: "pipe",
    stderr: "pipe",
  });
  const stderr = readCappedText(proc.stderr as ReadableStream<Uint8Array>, 1_000_000);

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
    const parsed = parseCpythonLine(line);
    if (!parsed) return;
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
