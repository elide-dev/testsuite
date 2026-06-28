import { existsSync, mkdirSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import picomatch from "picomatch";
import type { Adapter, AdapterContext } from "./types";
import type { TestResult } from "../results/schema";
import { loadManifest } from "../manifest";
import { runProcess, type ProcessRunResult } from "./process";
import { runTaskPool } from "./pool";

interface NodeApiTask {
  category: string;
  rel: string;
}

interface NodeTestMetadata {
  flags: string[];
  env: Record<string, string>;
}

function collectFiles(rootPath: string, relativePath = ""): string[] {
  const files: string[] = [];
  for (const entry of readdirSync(rootPath, { withFileTypes: true })) {
    const rel = relativePath ? `${relativePath}/${entry.name}` : entry.name;
    const full = join(rootPath, entry.name);
    if (entry.isDirectory()) {
      files.push(...collectFiles(full, rel));
      continue;
    }
    if (entry.isFile()) files.push(rel);
  }
  return files;
}

export function expandNodeApiManifestPaths(suitePath: string, manifestPaths: string[], includeGlobs: string[]): string[] {
  const allFiles = collectFiles(suitePath);
  const selected = new Set<string>();
  for (const manifestPath of manifestPaths) {
    if (existsSync(join(suitePath, manifestPath)) && statSync(join(suitePath, manifestPath)).isFile()) {
      selected.add(manifestPath);
      continue;
    }
    const match = picomatch(manifestPath);
    for (const file of allFiles) {
      if (match(file)) selected.add(file);
    }
  }

  const paths = [...selected].sort();
  if (!includeGlobs.length) return paths;
  const include = includeGlobs.map((glob) => picomatch(glob));
  return paths.filter((path) => include.some((match) => match(path)));
}

function configuredElideRunArgs(ctx: AdapterContext): string[] {
  const raw = ctx.settings.elideRunArgs;
  if (raw === undefined) return [];
  if (!Array.isArray(raw)) throw new Error("node-api settings.elideRunArgs must be an array");
  return raw.map(String).filter(Boolean);
}

function parseKeyValueEnv(value: string): [string, string] | null {
  const eq = value.indexOf("=");
  if (eq <= 0) return null;
  return [value.slice(0, eq), value.slice(eq + 1)];
}

export function readNodeTestMetadata(source: string): NodeTestMetadata {
  const metadata: NodeTestMetadata = { flags: [], env: {} };
  const head = source.slice(0, 1500);
  for (const line of head.split(/\r?\n/)) {
    const flags = /^\/\/\s+Flags:\s+(.+)$/.exec(line);
    if (flags) {
      metadata.flags.push(...flags[1]!.split(/\s+/).filter(Boolean));
      continue;
    }
    const env = /^\/\/\s+Env:\s+(.+)$/.exec(line);
    if (!env) continue;
    for (const item of env[1]!.split(/\s+/).filter(Boolean)) {
      const parsed = parseKeyValueEnv(item);
      if (parsed) metadata.env[parsed[0]] = parsed[1];
    }
  }
  return metadata;
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

function resultStatus(result: ProcessRunResult): TestResult["status"] {
  if (result.timedOut) return "error";
  if (/^1\.\.0 # Skipped:/m.test(result.stdout)) return "skip";
  return result.exitCode === 0 ? "pass" : "fail";
}

function resultMessage(result: ProcessRunResult): string | undefined {
  if (result.timedOut) return "Node API test timed out";
  if (result.exitCode === 0) return undefined;
  return (result.stderr || result.stdout).trim() || `node-api test exited with code ${result.exitCode}`;
}

async function runNodeApiTask(
  ctx: AdapterContext,
  skip: Array<(path: string) => boolean>,
  task: NodeApiTask,
): Promise<TestResult[]> {
  const source = readFileSync(join(ctx.suitePath, task.rel), "utf8");
  const metadata = readNodeTestMetadata(source);
  const workspaceTestDir = join(ctx.workspacePath, "node-test");
  mkdirSync(workspaceTestDir, { recursive: true });
  const stopProgress = startProgress(ctx, task.rel);
  let result: ProcessRunResult;
  try {
    result = await runProcess([
      ctx.elidePath,
      "run",
      ...configuredElideRunArgs(ctx),
      ...metadata.flags,
      task.rel,
    ], {
      cwd: ctx.suitePath,
      timeoutMs: Number(ctx.settings.timeoutMs ?? 60_000),
      env: {
        ...metadata.env,
        NODE_SKIP_FLAG_CHECK: "1",
        NODE_TEST_DIR: workspaceTestDir,
      },
      onStdoutLine: ctx.verbose ? (line) => process.stderr.write(`${ctx.logPrefix ?? ""}[node-api:stdout] ${line}\n`) : undefined,
      onStderrLine: ctx.verbose ? (line) => process.stderr.write(`${ctx.logPrefix ?? ""}[node-api:stderr] ${line}\n`) : undefined,
    });
  } finally {
    stopProgress();
  }

  const status = skip.some((match) => match(task.rel)) ? "skip" : resultStatus(result);
  return [{
    kind: "test",
    id: task.rel,
    status,
    message: resultMessage(result),
    durationMs: result.durationMs,
    meta: {
      suite: "node-api",
      upstreamPath: task.rel,
      category: task.category,
      runner: "node-core",
      subtest: task.rel,
      features: [`node:${task.category}`],
    },
  }];
}

export async function* runNodeApi(ctx: AdapterContext): AsyncIterable<TestResult> {
  const manifestPath = String(ctx.settings.manifest ?? "");
  if (!manifestPath) throw new Error("node-api requires settings.manifest");
  const manifest = loadManifest(manifestPath);
  const skip = ctx.skipGlobs.map((glob) => picomatch(glob));
  const tasks = manifest.groups.flatMap((group) => {
    return expandNodeApiManifestPaths(ctx.suitePath, group.include, ctx.include).map((rel) => ({
      category: group.id,
      rel,
    }));
  });

  yield* runTaskPool(tasks, ctx.threads, (task) => runNodeApiTask(ctx, skip, task));
}

export const nodeApiAdapter: Adapter = {
  id: "node-api",
  kind: "test",
  run: runNodeApi,
};
