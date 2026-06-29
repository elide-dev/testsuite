import { cpSync, existsSync, mkdirSync, readdirSync, readFileSync, rmSync, statSync, writeFileSync } from "node:fs";
import { dirname, join, relative, sep } from "node:path";
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

function copyIntoOverlay(suitePath: string, overlayPath: string, rel: string): void {
  const src = join(suitePath, rel);
  if (!existsSync(src)) return;
  const dest = join(overlayPath, rel);
  mkdirSync(dirname(dest), { recursive: true });
  cpSync(src, dest, { recursive: true, force: true });
}

function shimRequirePath(fromFile: string, shimFile: string): string {
  let rel = relative(dirname(fromFile), shimFile).split(sep).join("/");
  if (!rel.startsWith(".")) rel = `./${rel}`;
  return rel;
}

function patchCommonShimImports(file: string, commonPath: string): void {
  let source = readFileSync(file, "utf8");
  const netShim = shimRequirePath(file, join(commonPath, "_elide_shims/net.js"));
  const workerShim = shimRequirePath(file, join(commonPath, "_elide_shims/worker_threads.js"));
  source = source
    .replaceAll("require('net')", `require('${netShim}')`)
    .replaceAll('require("net")', `require("${netShim}")`)
    .replaceAll("require('node:net')", `require('${netShim}')`)
    .replaceAll('require("node:net")', `require("${netShim}")`)
    .replaceAll("require('worker_threads')", `require('${workerShim}')`)
    .replaceAll('require("worker_threads")', `require("${workerShim}")`)
    .replaceAll("require('node:worker_threads')", `require('${workerShim}')`)
    .replaceAll('require("node:worker_threads")', `require("${workerShim}")`);
  writeFileSync(file, source);
}

function patchCommonTree(commonPath: string, relativePath = ""): void {
  for (const entry of readdirSync(join(commonPath, relativePath), { withFileTypes: true })) {
    if (entry.name === "_elide_shims") continue;
    const rel = relativePath ? `${relativePath}/${entry.name}` : entry.name;
    const full = join(commonPath, rel);
    if (entry.isDirectory()) {
      patchCommonTree(commonPath, rel);
      continue;
    }
    if (entry.isFile() && /\.(cjs|js|mjs)$/.test(entry.name)) patchCommonShimImports(full, commonPath);
  }
}

function writeNodeCommonShims(commonPath: string): void {
  const shimsPath = join(commonPath, "_elide_shims");
  mkdirSync(shimsPath, { recursive: true });
  writeFileSync(join(shimsPath, "net.js"), `'use strict';

let defaultAutoSelectFamilyAttemptTimeout = 500;

function unsupported(name) {
  return function unsupportedNetShim() {
    throw new Error(\`node-api net shim does not implement net.\${name}\`);
  };
}

function isIPv4(value) {
  if (typeof value !== 'string') return false;
  const parts = value.split('.');
  return parts.length === 4 && parts.every((part) => /^\\d+$/.test(part) && Number(part) >= 0 && Number(part) <= 255);
}

function isIPv6(value) {
  return typeof value === 'string' && value.includes(':');
}

class Socket {
  constructor() {
    throw new Error('node-api net shim does not implement net.Socket');
  }
}

class Server {
  constructor() {
    throw new Error('node-api net shim does not implement net.Server');
  }
}

module.exports = {
  Socket,
  Server,
  createConnection: unsupported('createConnection'),
  connect: unsupported('connect'),
  createServer: unsupported('createServer'),
  getDefaultAutoSelectFamilyAttemptTimeout() {
    return defaultAutoSelectFamilyAttemptTimeout;
  },
  isIP(value) {
    if (isIPv4(value)) return 4;
    if (isIPv6(value)) return 6;
    return 0;
  },
  isIPv4,
  isIPv6,
  setDefaultAutoSelectFamilyAttemptTimeout(value) {
    defaultAutoSelectFamilyAttemptTimeout = Number(value);
  },
};
`);
  writeFileSync(join(shimsPath, "worker_threads.js"), `'use strict';

class Worker {
  constructor() {
    throw new Error('node-api worker_threads shim does not implement Worker');
  }
}

class MessageChannel {
  constructor() {
    throw new Error('node-api worker_threads shim does not implement MessageChannel');
  }
}

class MessagePort {
  constructor() {
    throw new Error('node-api worker_threads shim does not implement MessagePort');
  }
}

module.exports = {
  BroadcastChannel: globalThis.BroadcastChannel,
  MessageChannel,
  MessagePort,
  SHARE_ENV: Symbol.for('node-api.worker_threads.SHARE_ENV'),
  Worker,
  getEnvironmentData() {
    return undefined;
  },
  isMainThread: true,
  markAsUntransferable() {},
  moveMessagePortToContext() {
    throw new Error('node-api worker_threads shim does not implement moveMessagePortToContext');
  },
  parentPort: null,
  receiveMessageOnPort() {
    return undefined;
  },
  resourceLimits: {},
  setEnvironmentData() {},
  threadId: 0,
  workerData: null,
};
`);
}

function writeNodeCommonHelperShims(commonPath: string): void {
  writeFileSync(join(commonPath, "tmpdir.js"), `'use strict';

const fs = require('fs');
const { pathToFileURL } = require('url');

function trimTrailingSlash(value) {
  return String(value).replace(/\\/+$/, '');
}

function joinPath(...parts) {
  const joined = parts.filter((part) => part !== '').map(String).join('/');
  return joined.replace(/\\/+/g, '/');
}

const testRoot = trimTrailingSlash(process.env.NODE_TEST_DIR || '.');
const tmpdirName = '.tmp.' + (process.env.TEST_SERIAL_ID || process.env.TEST_THREAD_ID || '0');
let tmpPath = joinPath(testRoot, tmpdirName);

function refresh() {
  fs.rmSync(tmpPath, { recursive: true, force: true });
  fs.mkdirSync(tmpPath, { recursive: true });
}

module.exports = {
  fileURL(...paths) {
    return pathToFileURL(joinPath(tmpPath, ...paths));
  },
  hasEnoughSpace() {
    return true;
  },
  refresh,
  resolve(...paths) {
    return joinPath(tmpPath, ...paths);
  },
  get path() {
    return tmpPath;
  },
  set path(newPath) {
    tmpPath = trimTrailingSlash(newPath);
  },
};
`);
}

function patchCommonIndexPreamble(commonPath: string): void {
  const indexPath = join(commonPath, "index.js");
  if (!existsSync(indexPath)) return;
  const source = readFileSync(indexPath, "utf8").replaceAll("process.umask(0o022);", "void 0; /* elide node-api overlay: process.umask is unavailable. */");
  writeFileSync(indexPath, `'use strict';

const __elideNodeApiProcess = globalThis.process ??= {};
__elideNodeApiProcess.config ??= {};
__elideNodeApiProcess.env ??= {};
__elideNodeApiProcess.config.variables ??= {};
__elideNodeApiProcess.config.target_defaults ??= {};
__elideNodeApiProcess.config.variables.v8_enable_i18n_support ??= 0;
__elideNodeApiProcess.config.variables.v8_enable_temporal_support ??= 0;
__elideNodeApiProcess.config.variables.asan ??= 0;
__elideNodeApiProcess.config.variables.node_shared ??= false;
__elideNodeApiProcess.config.variables.node_use_ffi ??= false;
__elideNodeApiProcess.config.target_defaults.default_configuration ??= 'Release';
__elideNodeApiProcess.features ??= {};
__elideNodeApiProcess.features.debug ??= false;
__elideNodeApiProcess.features.inspector ??= false;
__elideNodeApiProcess.features.dtls ??= false;
__elideNodeApiProcess.features.quic ??= false;
__elideNodeApiProcess.versions ??= {};
globalThis.global ??= globalThis;
globalThis.AbortController ??= class AbortController {};
globalThis.atob ??= function atob() {
  throw new Error('node-api common shim does not implement atob');
};
globalThis.btoa ??= function btoa() {
  throw new Error('node-api common shim does not implement btoa');
};
globalThis.clearImmediate ??= function clearImmediate() {};
globalThis.setImmediate ??= function setImmediate(fn, ...args) {
  return setTimeout(fn, 0, ...args);
};
globalThis.queueMicrotask ??= function queueMicrotask(fn) {
  return Promise.resolve().then(fn);
};
globalThis.structuredClone ??= function structuredClone(value) {
  return value;
};
globalThis.fetch ??= function fetch() {
  return Promise.reject(new Error('node-api common shim does not implement fetch'));
};
function __elideNodeApiInstallUmaskShim() {
  Object.defineProperty(__elideNodeApiProcess, 'umask', {
    configurable: true,
    enumerable: true,
    value: function umask() {
      return 0o022;
    },
    writable: true,
  });
}
function __elideNodeApiInstallCwdShim() {
  Object.defineProperty(__elideNodeApiProcess, 'cwd', {
    configurable: true,
    enumerable: true,
    value: function cwd() {
      return __elideNodeApiProcess.env.NODE_API_OVERLAY_CWD || '.';
    },
    writable: true,
  });
}
__elideNodeApiInstallUmaskShim();
__elideNodeApiInstallCwdShim();

${source.replace(/^'use strict';\s*/, "")}`);
}

export function prepareNodeApiOverlay(ctx: AdapterContext, tasks: NodeApiTask[]): string {
  const overlayPath = join(ctx.workspacePath, "node-api-overlay");
  rmSync(overlayPath, { recursive: true, force: true });
  mkdirSync(overlayPath, { recursive: true });

  copyIntoOverlay(ctx.suitePath, overlayPath, "test/common");
  copyIntoOverlay(ctx.suitePath, overlayPath, "test/fixtures");
  for (const task of tasks) copyIntoOverlay(ctx.suitePath, overlayPath, task.rel);

  const commonPath = join(overlayPath, "test/common");
  if (existsSync(commonPath)) {
    writeNodeCommonShims(commonPath);
    writeNodeCommonHelperShims(commonPath);
    patchCommonIndexPreamble(commonPath);
    patchCommonTree(commonPath);
  }

  return overlayPath;
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
  index: number,
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
      task.rel,
      "--",
      ...metadata.flags,
    ], {
      cwd: ctx.suitePath,
      timeoutMs: Number(ctx.settings.timeoutMs ?? 60_000),
      env: {
        ...metadata.env,
        NODE_TEST_KNOWN_GLOBALS: "0",
        NODE_SKIP_FLAG_CHECK: "1",
        NODE_API_OVERLAY_CWD: ctx.suitePath,
        NODE_TEST_DIR: workspaceTestDir,
        // The common/tmpdir.js shim derives its scratch directory from
        // TEST_SERIAL_ID || TEST_THREAD_ID. Give every task a distinct id so
        // concurrent tasks never share `.tmp.0` and race each other's
        // refresh() (rmSync/mkdirSync), which produced ENOTEMPTY/ENOENT churn.
        TEST_SERIAL_ID: String(index),
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
  const runtimeCtx = { ...ctx, suitePath: prepareNodeApiOverlay(ctx, tasks) };

  yield* runTaskPool(tasks, ctx.threads, (task, index) => runNodeApiTask(runtimeCtx, skip, task, index));
}

export const nodeApiAdapter: Adapter = {
  id: "node-api",
  kind: "test",
  run: runNodeApi,
};
