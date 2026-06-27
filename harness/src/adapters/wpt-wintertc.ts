import { join } from "node:path";
import picomatch from "picomatch";
import type { Adapter, AdapterContext } from "./types";
import type { TestResult } from "../results/schema";
import { loadManifest } from "../manifest";
import { runProcess } from "./process";

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

async function* runWptWintertc(ctx: AdapterContext): AsyncIterable<TestResult> {
  const manifestPath = String(ctx.settings.manifest ?? "");
  if (!manifestPath) throw new Error("wpt-wintertc requires settings.manifest");
  const manifest = loadManifest(manifestPath);
  const skip = ctx.skipGlobs.map((g) => picomatch(g));
  const runner = join(ctx.repoRoot, "suites/drivers/wpt/wintertc-runner.js");

  for (const group of manifest.groups) {
    for (const rel of filterIncludedPaths(group.include, ctx.include)) {
      const result = await runProcess(
        ["node", runner, "--suite", ctx.suitePath, "--test", rel, "--category", group.id, "--elide", ctx.elidePath],
        { cwd: ctx.repoRoot, timeoutMs: Number(ctx.settings.timeoutMs ?? 60_000) },
      );
      if (result.timedOut || result.exitCode !== 0) {
        yield {
          kind: "test",
          id: `${rel} :: <file>`,
          status: "error",
          message: result.timedOut ? "WPT bridge timed out" : result.stderr || result.stdout,
          durationMs: result.durationMs,
          meta: { suite: "wpt-wintertc", upstreamPath: rel, category: group.id, runner: "wpt", subtest: "<file>" },
        };
        continue;
      }
      for (const r of parseWptLines(result.stdout)) {
        yield skip.some((m) => m(String(r.meta?.upstreamPath))) ? { ...r, status: "skip" } : r;
      }
    }
  }
}

export const wptWintertcAdapter: Adapter = {
  id: "wpt-wintertc",
  kind: "test",
  run: runWptWintertc,
};
