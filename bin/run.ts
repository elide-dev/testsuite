#!/usr/bin/env bun
// Launcher: resolve --elide -> build the harness image -> run selected suites.
// Exit codes: 0 = GREEN; 1 = regressions; 2 = harness/setup/infra error.

import { $ } from "bun";
import { createHash, randomUUID } from "node:crypto";
import { chmodSync, cpSync, existsSync, mkdirSync, rmSync, statSync, openSync, closeSync, readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

interface Options {
  elideRef: string;
  suites: string[];
  allSuites: boolean;
  threads: string;
  platform: string;
  log: boolean;
  verbose: boolean;
  include?: string;
  ratchet: boolean;
  updateSummaries: boolean;
  failureOutput: "show" | "hide";
}

interface WorkloadInfo {
  id: string;
  path?: string;
}

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const DEFAULT_ELIDE_REF = "ghcr.io/elide-dev/elide:nightly";
const RUN_LABEL_KEY = "elide.testsuite.run";
const RUN_ID = `${Date.now()}-${process.pid}-${randomUUID()}`;
const RUN_LABEL = `${RUN_LABEL_KEY}=${RUN_ID}`;
const CONTAINER_PATH = [
  "/opt/jtreg/bin",
  "/opt/graalvm-jdk-25.0.3/bin",
  "/opt/elide/bin",
  "/usr/local/sbin",
  "/usr/local/bin",
  "/usr/sbin",
  "/usr/bin",
  "/sbin",
  "/bin",
].join(":");
let activeProcess: ReturnType<typeof Bun.spawn> | undefined;
let handlingSignal = false;

function log(message: string): void {
  process.stderr.write(`[bin/run] ${message}\n`);
}

function usageError(message: string): never {
  log(message);
  process.exit(2);
}

function cleanupContainersSync(): void {
  const listed = Bun.spawnSync(["docker", "ps", "-aq", "--filter", `label=${RUN_LABEL}`], {
    stdout: "pipe",
    stderr: "pipe",
  });
  const ids = new TextDecoder().decode(listed.stdout).trim().split(/\s+/).filter(Boolean);
  if (ids.length === 0) return;
  log(`cleaning up ${ids.length} running container(s) for interrupted run`);
  Bun.spawnSync(["docker", "rm", "-f", ...ids], {
    stdout: "ignore",
    stderr: "ignore",
  });
}

function interrupt(signal: NodeJS.Signals): never {
  if (handlingSignal) process.exit(130);
  handlingSignal = true;
  log(`received ${signal}; stopping active command and cleaning up containers`);
  try {
    activeProcess?.kill("SIGINT");
  } catch {
    // Best effort: labelled containers are forcibly removed below.
  }
  cleanupContainersSync();
  process.exit(signal === "SIGTERM" ? 143 : 130);
}

process.on("SIGINT", () => interrupt("SIGINT"));
process.on("SIGTERM", () => interrupt("SIGTERM"));

function parseArgs(argv: string[]): Options {
  const options: Options = {
    elideRef: DEFAULT_ELIDE_REF,
    suites: [],
    allSuites: false,
    threads: process.env.THREADS || "1",
    platform: process.env.PLATFORM || "",
    log: false,
    verbose: false,
    ratchet: false,
    updateSummaries: false,
    failureOutput: "show",
  };

  for (let i = 0; i < argv.length;) {
    const arg = argv[i++];
    const value = (flag: string): string => {
      const next = argv[i++];
      if (!next) usageError(`${flag} requires a value`);
      return next;
    };
    switch (arg) {
      case "--elide":
        options.elideRef = value(arg);
        break;
      case "--suite":
        options.suites.push(...value(arg).split(",").map((suite) => suite.trim()).filter(Boolean));
        break;
      case "--all-suites":
        options.allSuites = true;
        break;
      case "--threads":
        options.threads = value(arg);
        break;
      case "--platform":
        options.platform = value(arg);
        break;
      case "--log":
        options.log = true;
        break;
      case "--verbose":
        options.verbose = true;
        break;
      case "--failure-output": {
        const mode = value(arg);
        if (mode !== "show" && mode !== "hide") usageError("--failure-output must be 'show' or 'hide'");
        options.failureOutput = mode;
        break;
      }
      case "--show-failure-output":
        options.failureOutput = "show";
        break;
      case "--hide-failure-output":
        options.failureOutput = "hide";
        break;
      case "--include":
        options.include = value(arg);
        break;
      case "--ratchet":
        options.ratchet = true;
        break;
      case "--update-summaries":
        options.updateSummaries = true;
        break;
      default:
        usageError(`unknown arg: ${arg}`);
    }
  }

  return options;
}

function platformArgs(platform: string): string[] {
  return platform ? ["--platform", platform] : [];
}

function userArgs(uid: string, gid: string): string[] {
  return ["--user", `${uid}:${gid}`, "-e", "HOME=/work/.harness", "-e", `PATH=${CONTAINER_PATH}`];
}

async function run(args: string[], opts: { cwd?: string; env?: NodeJS.ProcessEnv } = {}): Promise<number> {
  const proc = Bun.spawn(args, {
    cwd: opts.cwd ?? ROOT,
    env: opts.env ?? process.env,
    stdin: "inherit",
    stdout: "inherit",
    stderr: "inherit",
  });
  activeProcess = proc;
  try {
    return await proc.exited;
  } finally {
    if (activeProcess === proc) activeProcess = undefined;
  }
}

async function capture(args: string[], opts: { cwd?: string; env?: NodeJS.ProcessEnv } = {}): Promise<{
  exitCode: number;
  stdout: string;
  stderr: string;
}> {
  const proc = Bun.spawn(args, {
    cwd: opts.cwd ?? ROOT,
    env: opts.env ?? process.env,
    stdout: "pipe",
    stderr: "pipe",
  });
  activeProcess = proc;
  try {
    const [stdout, stderr, exitCode] = await Promise.all([
      new Response(proc.stdout).text(),
      new Response(proc.stderr).text(),
      proc.exited,
    ]);
    return { exitCode, stdout, stderr };
  } finally {
    if (activeProcess === proc) activeProcess = undefined;
  }
}

async function requireDocker(): Promise<void> {
  const result = await capture(["docker", "--version"]);
  if (result.exitCode !== 0) usageError("docker not found on PATH");
}

function dockerImageName(elideRef: string): string {
  return `elide-harness:${elideRef.replaceAll(/[/:@]/g, "_")}`;
}

function isLocalInstallDir(path: string): boolean {
  return existsSync(path) && statSync(path).isDirectory() && existsSync(resolve(path, "bin/elide"));
}

function sha256File(path: string): string {
  return createHash("sha256").update(readFileSync(path)).digest("hex");
}

async function buildHarnessImage(options: Options, image: string, plat: string[]): Promise<string> {
  const { elideRef } = options;
  if (isLocalInstallDir(elideRef)) {
    log("mode: local install dir");
    rmSync(resolve(ROOT, ".elide-install"), { recursive: true, force: true });
    cpSync(elideRef, resolve(ROOT, ".elide-install"), { recursive: true });
    const digest = sha256File(resolve(ROOT, ".elide-install/bin/elide"));
    log(`building image ${image} (local install dir)...`);
    const rc = await run(["docker", "build", ...plat, "-f", "docker/harness.local.Dockerfile", "-t", image, "."]);
    rmSync(resolve(ROOT, ".elide-install"), { recursive: true, force: true });
    if (rc !== 0) {
      log("docker build FAILED");
      process.exit(2);
    }
    return digest;
  }

  if (existsSync(elideRef)) {
    usageError(`error: --elide local path must be an Elide install directory (with bin/elide and lib/), not a bare file: ${elideRef}`);
  }

  const fullRef = !elideRef.includes("/") && !elideRef.includes("@")
    ? `ghcr.io/elide-dev/elide:${elideRef}`
    : elideRef;
  log(`building image ${image} (FROM ${fullRef})...`);
  const rc = await run([
    "docker",
    "build",
    ...plat,
    "-f",
    "docker/harness.Dockerfile",
    "--build-arg",
    `ELIDE_REF=${fullRef}`,
    "-t",
    image,
    ".",
  ]);
  if (rc !== 0) {
    log(`docker build FAILED (FROM ${fullRef}). On amd64 confirm the ref has a linux/amd64 manifest: docker manifest inspect ${fullRef}`);
    process.exit(2);
  }

  const repoDigest = await capture(["docker", "inspect", "--format", "{{index .RepoDigests 0}}", fullRef]);
  const digestMatch = repoDigest.stdout.match(/@sha256:([0-9a-f]{12,})/);
  if (digestMatch?.[1]) return digestMatch[1];

  const imageId = await capture(["docker", "inspect", "--format", "{{.Id}}", fullRef]);
  const idMatch = imageId.stdout.match(/^sha256:([0-9a-f]{12,})/m);
  return idMatch?.[1] ?? "unknown";
}

async function preflight(image: string, plat: string[], user: string[]): Promise<void> {
  log("preflight: elide --version");
  const result = await capture([
    "docker",
    "run",
    "--rm",
    "--label",
    RUN_LABEL,
    ...plat,
    ...user,
    "--entrypoint",
    "/opt/elide/bin/elide",
    image,
    "--version",
  ]);
  if (result.exitCode !== 0) {
    log(`PREFLIGHT FAILED (exit ${result.exitCode}): elide could not run inside the image:`);
    for (const line of `${result.stdout}${result.stderr}`.split(/\r?\n/).filter(Boolean)) {
      process.stderr.write(`[elide] ${line}\n`);
    }
    log(`if this is an arch issue, retry with: PLATFORM=linux/amd64 ./bin/run ...`);
    process.exit(2);
  }
  log(`preflight ok: elide ${result.stdout.trim().split(/\r?\n/)[0] ?? ""}`);
}

function parseRegistry(registryPath: string): WorkloadInfo[] {
  const text = readFileSync(registryPath, "utf8");
  const workloads: WorkloadInfo[] = [];
  let current: WorkloadInfo | undefined;
  for (const line of text.split(/\r?\n/)) {
    if (/^\s*\[\[workload\]\]\s*$/.test(line)) {
      if (current?.id) workloads.push(current);
      current = { id: "" };
      continue;
    }
    if (!current) continue;
    const id = line.match(/^\s*id\s*=\s*"([^"]+)"/)?.[1];
    if (id) current.id = id;
    const path = line.match(/^\s*path\s*=\s*"([^"]+)"/)?.[1];
    if (path) current.path = path;
  }
  if (current?.id) workloads.push(current);
  return workloads;
}

async function suiteVersion(workload: WorkloadInfo): Promise<string> {
  if (!workload.path) return "unknown";
  const checkout = resolve(ROOT, workload.path);
  if (!existsSync(resolve(checkout, ".git"))) return "unknown";
  const result = await capture(["git", "-C", checkout, "rev-parse", "HEAD"]);
  return result.exitCode === 0 ? result.stdout.trim() : "unknown";
}

async function fixHostOwnership(image: string, plat: string[], uid: string, gid: string): Promise<void> {
  await run([
    "docker",
    "run",
    "--rm",
    "--label",
    RUN_LABEL,
    ...plat,
    "--entrypoint",
    "chown",
    "-v",
    `${ROOT}/reports:/target/reports`,
    "-v",
    `${ROOT}/expectations:/target/expectations`,
    "-v",
    `${ROOT}/.harness:/target/.harness`,
    "-v",
    `${ROOT}/README.md:/target/README.md`,
    image,
    "-R",
    `${uid}:${gid}`,
    "/target/reports",
    "/target/expectations",
    "/target/.harness",
    "/target/README.md",
  ]);
}

async function main(): Promise<number> {
  process.chdir(ROOT);
  const options = parseArgs(Bun.argv.slice(2));
  const plat = platformArgs(options.platform);
  const hostUid = (await $`id -u`.text()).trim();
  const hostGid = (await $`id -g`.text()).trim();
  const user = userArgs(hostUid, hostGid);

  await requireDocker();

  const image = dockerImageName(options.elideRef);
  log(`elide ref: ${options.elideRef}   threads: ${options.threads}   platform: ${options.platform || "<native>"}`);
  const digest = await buildHarnessImage(options, image, plat);
  log(`image built. resolved digest: ${digest}`);
  await preflight(image, plat, user);

  const registryPath = resolve(ROOT, "registry.toml");
  const workloads = parseRegistry(registryPath);
  const suites = options.allSuites && options.suites.length === 0
    ? workloads.map((workload) => workload.id)
    : options.suites.length ? options.suites : ["test262"];

  mkdirSync(resolve(ROOT, "reports"), { recursive: true });
  mkdirSync(resolve(ROOT, "expectations"), { recursive: true });
  mkdirSync(resolve(ROOT, ".harness"), { recursive: true });
  closeSync(openSync(resolve(ROOT, "README.md"), "a"));

  await fixHostOwnership(image, plat, hostUid, hostGid);

  let overall = 0;
  const expMode = options.ratchet ? "rw" : "ro";
  const readmeMode = options.updateSummaries ? "rw" : "ro";

  for (const suite of suites) {
    const workload = workloads.find((entry) => entry.id === suite) ?? { id: suite };
    const version = await suiteVersion(workload);
    log(`running suite '${suite}' (suite version ${version.slice(0, 12)})...`);
    const args = [
      "docker",
      "run",
      "--rm",
      "--label",
      RUN_LABEL,
      ...plat,
      ...user,
      "-v",
      `${ROOT}/suites:/work/suites:ro`,
      "-v",
      `${ROOT}/manifests:/work/manifests:ro`,
      "-v",
      `${ROOT}/expectations:/work/expectations:${expMode}`,
      "-v",
      `${ROOT}/reports:/work/reports`,
      "-v",
      `${ROOT}/.harness:/work/.harness`,
      "-v",
      `${ROOT}/README.md:/work/README.md:${readmeMode}`,
      "-v",
      `${ROOT}/registry.toml:/work/registry.toml:ro`,
      image,
      "run",
      suite,
      "--registry",
      "/work/registry.toml",
      "--repo-root",
      "/work",
      "--elide-path",
      "/opt/elide/bin/elide",
      "--digest",
      digest,
      "--suite-root",
      "/work/suites",
      "--reports",
      "/work/reports",
      "--expectations",
      "/work/expectations",
      "--threads",
      options.threads,
      "--suite-version",
      version,
      ...(options.log ? ["--log"] : []),
      ...(options.verbose ? ["--verbose"] : []),
      ...(options.include ? ["--include", options.include] : []),
      ...(options.ratchet ? ["--ratchet"] : []),
      ...(options.updateSummaries ? ["--update-summaries"] : []),
      "--failure-output",
      options.failureOutput,
    ];
    const rc = await run(args);
    switch (rc) {
      case 0:
        log(`DONE: ${suite} GREEN (no regressions). reports/ updated.`);
        break;
      case 1:
        log(`DONE: ${suite} RED — regressions found (see the summary above and reports/).`);
        break;
      case 2:
        log(`harness ERROR for ${suite} (exit 2): the run did not complete; see the error above.`);
        break;
      default:
        log(`docker run for ${suite} exited with code ${rc} (infra/interrupt).`);
    }
    if (rc === 2 || rc > 2) overall = 2;
    else if (rc === 1 && overall === 0) overall = 1;
  }

  await fixHostOwnership(image, plat, hostUid, hostGid);

  if (overall === 0) log("DONE: all selected suites GREEN.");
  if (overall === 1) log("DONE: selected suites completed with regressions. exit 1.");
  if (overall === 2) log("DONE: one or more selected suites had a harness/infra error. exit 2.");
  return overall;
}

try {
  process.exit(await main());
} catch (err) {
  log(`ERROR: unexpected failure: ${err instanceof Error ? (err.stack ?? err.message) : String(err)}`);
  process.exit(2);
}
