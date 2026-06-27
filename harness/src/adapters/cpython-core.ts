import { join } from "node:path";
import picomatch from "picomatch";
import type { Adapter, AdapterContext } from "./types";
import type { TestResult } from "../results/schema";
import { loadManifest } from "../manifest";
import { runProcess } from "./process";

interface CpythonRecord {
  module: string;
  case: string;
  status: TestResult["status"];
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

export async function* runCpythonCore(ctx: AdapterContext): AsyncIterable<TestResult> {
  const manifestPath = String(ctx.settings.manifest ?? "");
  if (!manifestPath) throw new Error("cpython-core requires settings.manifest");
  const manifest = loadManifest(manifestPath);
  const modules = filterIncludedModules(manifest.groups.flatMap((g) => g.include), ctx.include);
  const skip = ctx.skipGlobs.map((g) => picomatch(g));
  const driver = join(ctx.repoRoot, "suites/drivers/python/elide_regrtest_driver.py");
  if (modules.length === 0) {
    yield {
      kind: "test",
      id: "cpython-core::<runner>",
      status: "error",
      message: "cpython-core selected no modules",
      meta: {
        suite: "cpython-core",
        upstreamPath: "<runner>",
        category: "runner",
        runner: "regrtest",
        subtest: "<runner>",
      },
    };
    return;
  }
  const result = await runProcess(
    [ctx.elidePath, "run", driver, "--", "--cpython-root", ctx.suitePath, ...modules],
    { cwd: ctx.repoRoot, timeoutMs: Number(ctx.settings.timeoutMs ?? 120_000) },
  );

  if (result.timedOut) {
    yield {
      kind: "test",
      id: "cpython-core::<runner>",
      status: "error",
      message: "CPython driver timed out",
      durationMs: result.durationMs,
      meta: {
        suite: "cpython-core",
        upstreamPath: "<runner>",
        category: "runner",
        runner: "regrtest",
        subtest: "<runner>",
      },
    };
    return;
  }

  const parsed = parseCpythonLines(result.stdout);
  if (result.exitCode !== 0 && parsed.length === 0) {
    yield {
      kind: "test",
      id: "cpython-core::<runner>",
      status: "error",
      message: result.stderr || result.stdout,
      durationMs: result.durationMs,
      meta: {
        suite: "cpython-core",
        upstreamPath: "<runner>",
        category: "runner",
        runner: "regrtest",
        subtest: "<runner>",
      },
    };
    return;
  }

  for (const r of parsed) yield remapCpythonSkip(r, skip);
}

export const cpythonCoreAdapter: Adapter = {
  id: "cpython-core",
  kind: "test",
  run: runCpythonCore,
};
