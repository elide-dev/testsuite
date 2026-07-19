import { join } from "node:path";
import picomatch from "picomatch";
import type { Adapter, AdapterContext } from "./types";
import type { TestResult } from "../results/schema";
import { loadManifest } from "../manifest";
import { runProcess } from "./process";
import { runTaskPool } from "./pool";
import { type WptServer, startWptServer } from "./wpt-server";

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

function progressEnabled(ctx: AdapterContext): boolean {
  return Boolean(ctx.log || ctx.verbose);
}

function startProgress(ctx: AdapterContext, label: string): () => void {
  if (!progressEnabled(ctx)) return () => {};
  const started = performance.now();
  process.stderr.write(`${ctx.logPrefix ?? ""}progress: start ${label}\n`);
  const interval = setInterval(() => {
    const seconds = Math.round((performance.now() - started) / 1000);
    process.stderr.write(`${ctx.logPrefix ?? ""}progress: still running ${label} (${seconds}s)\n`);
  }, Number(ctx.settings.progressIntervalMs ?? 10_000));
  return () => clearInterval(interval);
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
  let r: WptBridgeRecord;
  try {
    r = JSON.parse(s) as WptBridgeRecord;
  } catch {
    return null;
  }
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
  serverEnv?: Record<string, string>,
): Promise<TestResult[]> {
  const stopProgress = startProgress(ctx, task.rel);
  let result;
  try {
    result = await runProcess(
      ["node", runner, "--suite", ctx.suitePath, "--test", task.rel, "--category", task.category, "--elide", ctx.elidePath],
      { cwd: ctx.repoRoot, timeoutMs: Number(ctx.settings.timeoutMs ?? 60_000), env: serverEnv },
    );
  } finally {
    stopProgress();
  }
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

  // The fetch tests resolve relative URLs against the document location and fetch WPT resources /
  // handlers; they need a real WPT server. Start one only when fetch tasks are in scope, and never
  // let a server failure sink the encoding/url tests — those run serverless.
  const needsServer = tasks.some((t) => t.category === "fetch" || t.rel.startsWith("fetch/"));
  let server: WptServer | undefined;
  if (needsServer) {
    try {
      server = await startWptServer(ctx.suitePath, {
        readyTimeoutMs: Number(ctx.settings.serverReadyTimeoutMs ?? 30_000),
        log: (m) => {
          if (progressEnabled(ctx)) process.stderr.write(`${ctx.logPrefix ?? ""}${m}\n`);
        },
      });
    } catch (err) {
      process.stderr.write(
        `${ctx.logPrefix ?? ""}wpt-server: failed to start; fetch tests will error (${err instanceof Error ? err.message : String(err)})\n`,
      );
    }
  }
  const serverEnv = server ? { WPT_SERVER_ORIGIN: server.origin } : undefined;

  try {
    yield* runTaskPool(tasks, ctx.threads, (task) => runWptTask(ctx, runner, skip, task, serverEnv));
  } finally {
    server?.stop();
  }
}

export const wptWintertcAdapter: Adapter = {
  id: "wpt-wintertc",
  kind: "test",
  run: runWptWintertc,
};
