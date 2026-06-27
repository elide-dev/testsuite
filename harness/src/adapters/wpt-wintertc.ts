import { join } from "node:path";
import picomatch from "picomatch";
import type { Adapter, AdapterContext } from "./types";
import type { TestResult } from "../results/schema";
import { loadManifest } from "../manifest";
import { runProcess } from "./process";
import { runTaskPool } from "./pool";

interface WptBridgeRecord {
  path: string;
  subtest?: string;
  status: "PASS" | "FAIL" | "ERROR" | "SKIP";
  message?: string;
  durationMs?: number;
  category?: string;
}

const STATUS: Record<WptBridgeRecord["status"], TestResult["status"]> = {
  PASS: "pass",
  FAIL: "fail",
  ERROR: "error",
  SKIP: "skip",
};

interface WptTask {
  category: string;
  rel: string;
}

function compileIncludeFilters(globs: string[]): Array<(path: string) => boolean> {
  return globs.map((glob) => picomatch(glob));
}

export function filterIncludedPaths(paths: string[], includeGlobs: string[]): string[] {
  if (!includeGlobs.length) return paths;
  const matchers = compileIncludeFilters(includeGlobs);
  return paths.filter((path) => matchers.some((match) => match(path)));
}

export function parseWptLine(line: string): TestResult | null {
  const s = line.trim();
  if (!s) return null;
  const r = JSON.parse(s) as WptBridgeRecord;
  const subtest = r.subtest ?? "<file>";
  return {
    kind: "test",
    id: `${r.path} :: ${subtest}`,
    status: STATUS[r.status],
    message: r.message,
    durationMs: r.durationMs,
    meta: {
      suite: "wpt-wintertc",
      upstreamPath: r.path,
      category: r.category ?? r.path.split("/")[0],
      runner: "wpt",
      subtest,
    },
  };
}

export function parseWptLines(text: string): TestResult[] {
  return text.split(/\r?\n/).map(parseWptLine).filter((r): r is TestResult => r !== null);
}

async function runWptTask(
  ctx: AdapterContext,
  runner: string,
  skip: Array<(path: string) => boolean>,
  task: WptTask,
): Promise<TestResult[]> {
  const result = await runProcess(
    ["node", runner, "--suite", ctx.suitePath, "--test", task.rel, "--category", task.category, "--elide", ctx.elidePath],
    { cwd: ctx.repoRoot, timeoutMs: Number(ctx.settings.timeoutMs ?? 60_000) },
  );
  if (result.timedOut || result.exitCode !== 0) {
    return [{
      kind: "test",
      id: `${task.rel} :: <file>`,
      status: "error",
      message: result.timedOut ? "WPT bridge timed out" : result.stderr || result.stdout,
      durationMs: result.durationMs,
      meta: { suite: "wpt-wintertc", upstreamPath: task.rel, category: task.category, runner: "wpt", subtest: "<file>" },
    }];
  }
  return parseWptLines(result.stdout).map((r) => {
    return skip.some((m) => m(String(r.meta?.upstreamPath))) ? { ...r, status: "skip" } : r;
  });
}

export async function* runWptWintertc(ctx: AdapterContext): AsyncIterable<TestResult> {
  const manifestPath = String(ctx.settings.manifest ?? "");
  if (!manifestPath) throw new Error("wpt-wintertc requires settings.manifest");
  const manifest = loadManifest(manifestPath);
  const skip = ctx.skipGlobs.map((g) => picomatch(g));
  const runner = join(ctx.repoRoot, "suites/drivers/wpt/wintertc-runner.js");
  const tasks = manifest.groups.flatMap((group) => {
    return filterIncludedPaths(group.include, ctx.include).map((rel) => ({ category: group.id, rel }));
  });

  yield* runTaskPool(tasks, ctx.threads, (task) => runWptTask(ctx, runner, skip, task));
}

export const wptWintertcAdapter: Adapter = {
  id: "wpt-wintertc",
  kind: "test",
  run: runWptWintertc,
};
