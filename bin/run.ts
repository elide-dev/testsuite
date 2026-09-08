#!/usr/bin/env bun
// Launcher: resolve --elide -> build the harness image -> run selected suites.
// Exit codes: 0 = GREEN; 1 = regressions; 2 = harness/setup/infra error.

import { $ } from "bun";
import { createHash, randomUUID } from "node:crypto";
import {
  chmodSync,
  cpSync,
  existsSync,
  mkdirSync,
  rmSync,
  statSync,
  openSync,
  closeSync,
  readFileSync,
  writeFileSync,
  unlinkSync,
  readdirSync,
} from "node:fs";
import { availableParallelism } from "node:os";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { classifySuiteStatus } from "./suite-status";
import {
  ROOT,
  RUN_LABEL,
  assertWritableMountSources,
  capture,
  fixHostOwnership,
  log,
  platformArgs,
  requireDocker,
  run,
  runWithHeartbeat,
  sha256File,
  usageError,
  userArgs,
} from "./docker";

interface Options {
  elideRef: string;
  suites: string[];
  allSuites: boolean;
  threads?: number;
  suiteWorkers?: number;
  concurrencyMultiplier: number;
  platform: string;
  log: boolean;
  verbose: boolean;
  include?: string;
  ratchet: boolean;
  updateSummaries: boolean;
  prepareSuites: boolean;
  repairOwnership: boolean;
  failureOutput: "show" | "hide";
}

interface WorkloadInfo {
  id: string;
  path?: string;
  target?: string;
}

interface SuiteRunSummary {
  meta: {
    workload: string;
    finishedAt: string;
    elide: { semver: string; digest: string };
    suiteVersion?: string;
  };
  counts: { pass: number; fail: number; skip: number; error: number; total: number };
  regressions: string[];
  newPasses: string[];
}

interface SuiteChanges {
  fixed: string[];
  regressed: string[];
  added: number;
  removed: number;
  stillFailing: number;
}

interface SuiteSummaryRow {
  suite: string;
  rc: number;
  current?: SuiteRunSummary;
  previous?: SuiteRunSummary;
  changes?: SuiteChanges;
}

const DEFAULT_ELIDE_REF = "ghcr.io/elide-dev/elide:nightly";
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

const COLOR = process.stderr.isTTY && !process.env.NO_COLOR;
const ansi = {
  green: (s: string) => COLOR ? `\x1b[32m${s}\x1b[0m` : s,
  red: (s: string) => COLOR ? `\x1b[31m${s}\x1b[0m` : s,
  yellow: (s: string) => COLOR ? `\x1b[33m${s}\x1b[0m` : s,
  cyan: (s: string) => COLOR ? `\x1b[36m${s}\x1b[0m` : s,
  dim: (s: string) => COLOR ? `\x1b[2m${s}\x1b[0m` : s,
  bold: (s: string) => COLOR ? `\x1b[1m${s}\x1b[0m` : s,
};

function parsePositiveInt(value: string | undefined, name: string): number | undefined {
  if (value === undefined || value === "") return undefined;
  const parsed = Number.parseInt(value, 10);
  if (!Number.isFinite(parsed) || parsed < 1) usageError(`${name} must be a positive integer`);
  return parsed;
}

function cpuCount(): number {
  try {
    return Math.max(1, availableParallelism());
  } catch {
    return 1;
  }
}

interface ConcurrencyPlan {
  cpuCount: number;
  totalBudget: number;
  suiteWorkers: number;
  threads: number;
}

function planConcurrency(options: Options, suiteCount: number): ConcurrencyPlan {
  const cpus = cpuCount();
  const totalBudget = Math.max(1, cpus * options.concurrencyMultiplier);
  const suiteWorkers = Math.max(1, Math.min(options.suiteWorkers ?? totalBudget, Math.max(1, suiteCount)));
  const threads = options.threads ?? Math.max(1, Math.ceil(totalBudget / suiteWorkers));
  return { cpuCount: cpus, totalBudget, suiteWorkers, threads };
}

function parseArgs(argv: string[]): Options {
  const options: Options = {
    elideRef: DEFAULT_ELIDE_REF,
    suites: [],
    allSuites: false,
    threads: parsePositiveInt(process.env.THREADS, "THREADS"),
    suiteWorkers: parsePositiveInt(process.env.SUITE_WORKERS, "SUITE_WORKERS"),
    concurrencyMultiplier: parsePositiveInt(process.env.CONCURRENCY_MULTIPLIER, "CONCURRENCY_MULTIPLIER") ?? 2,
    platform: process.env.PLATFORM || "",
    log: false,
    verbose: false,
    ratchet: false,
    updateSummaries: false,
    prepareSuites: process.env.PREPARE_SUITES === "1",
    repairOwnership: process.env.REPAIR_OWNERSHIP === "1",
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
        options.threads = parsePositiveInt(value(arg), arg);
        break;
      case "--suite-workers":
        options.suiteWorkers = parsePositiveInt(value(arg), arg);
        break;
      case "--concurrency-multiplier":
        options.concurrencyMultiplier = parsePositiveInt(value(arg), arg) ?? 2;
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
      case "--prepare-suites":
        options.prepareSuites = true;
        break;
      case "--repair-ownership":
        options.repairOwnership = true;
        break;
      default:
        usageError(`unknown arg: ${arg}`);
    }
  }

  return options;
}

function dockerImageName(elideRef: string): string {
  return `elide-harness:${elideRef.replaceAll(/[/:@]/g, "_")}`;
}

function isLocalInstallDir(path: string): boolean {
  return existsSync(path) && statSync(path).isDirectory() && existsSync(resolve(path, "bin/elide"));
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
    const target = line.match(/^\s*target\s*=\s*"([^"]+)"/)?.[1];
    if (target) current.target = target;
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

function walkSummaryPaths(root: string): string[] {
  if (!existsSync(root)) return [];
  const out: string[] = [];
  const visit = (dir: string): void => {
    let entries;
    try {
      entries = readdirSync(dir, { withFileTypes: true });
    } catch {
      return;
    }
    for (const entry of entries) {
      const path = resolve(dir, entry.name);
      if (entry.isDirectory()) visit(path);
      else if (entry.isFile() && entry.name === "summary.json") out.push(path);
    }
  };
  visit(root);
  return out;
}

function readJsonFile<T>(path: string): T | undefined {
  try {
    return JSON.parse(readFileSync(path, "utf8")) as T;
  } catch {
    return undefined;
  }
}

function summaryDirFromPath(summaryPath: string): string {
  return dirname(summaryPath);
}

function loadSuiteSummaryRows(suites: string[], suiteExitCodes: number[], digest: string): SuiteSummaryRow[] {
  const summaries = walkSummaryPaths(resolve(ROOT, "reports"))
    .map((summaryPath) => ({ summaryPath, summary: readJsonFile<SuiteRunSummary>(summaryPath) }))
    .filter((entry): entry is { summaryPath: string; summary: SuiteRunSummary } => Boolean(entry.summary?.meta?.workload));

  return suites.map((suite, index) => {
    const matching = summaries
      .filter(({ summary }) => summary.meta.workload === suite)
      .sort((a, b) => b.summary.meta.finishedAt.localeCompare(a.summary.meta.finishedAt));
    const current = matching.find(({ summary }) => summary.meta.elide.digest === digest);
    const previous = matching.find(({ summary }) => {
      if (!current) return false;
      if (summary.meta.finishedAt >= current.summary.meta.finishedAt) return false;
      if (summary.meta.elide.semver === current.summary.meta.elide.semver &&
          summary.meta.elide.digest.slice(0, 12) === current.summary.meta.elide.digest.slice(0, 12)) {
        return false;
      }
      return true;
    });
    const changes = current ? readJsonFile<SuiteChanges>(resolve(summaryDirFromPath(current.summaryPath), "changes.json")) : undefined;
    return {
      suite,
      rc: suiteExitCodes[index] ?? 2,
      current: current?.summary,
      previous: previous?.summary,
      changes,
    };
  });
}

// Pass rate over scored (non-skipped) tests; muted areas are excluded from the denominator.
function scoredTotal(counts: { pass: number; fail: number; error: number }): number {
  return counts.pass + counts.fail + counts.error;
}

function passRate(summary: SuiteRunSummary | undefined): number | undefined {
  if (!summary) return undefined;
  const denom = scoredTotal(summary.counts);
  return denom === 0 ? undefined : summary.counts.pass / denom;
}

function formatPercent(value: number | undefined): string {
  return value === undefined ? "n/a" : `${(value * 100).toFixed(1)}%`;
}

function formatDelta(current: SuiteRunSummary | undefined, previous: SuiteRunSummary | undefined): string {
  const cur = passRate(current);
  const prev = passRate(previous);
  if (cur === undefined || prev === undefined) return ansi.dim("n/a");
  // A pass-rate delta between different selections (a scoped --include run vs
  // a full run) is meaningless — flag it instead of reporting a fake swing.
  const curTotal = current ? scoredTotal(current.counts) : 0;
  const prevTotal = previous ? scoredTotal(previous.counts) : 0;
  if (prevTotal && Math.abs(curTotal - prevTotal) / prevTotal > 0.1) {
    return ansi.dim("selection changed");
  }
  const delta = (cur - prev) * 100;
  if (Math.abs(delta) < 0.05) return ansi.dim("→ 0.0pp");
  return delta > 0 ? ansi.green(`↗ +${delta.toFixed(1)}pp`) : ansi.red(`↘ ${delta.toFixed(1)}pp`);
}

const STATUS_LABEL: Record<string, (s: string) => string> = {
  ERROR: (s) => ansi.red(`🛑 ${s}`),
  REGRESSED: (s) => ansi.red(`🔴 ${s}`),
  GAINED: (s) => ansi.cyan(`🔵 ${s}`),
  IMPROVED: (s) => ansi.green(`🟢 ${s}`),
  RED: (s) => ansi.yellow(`🟡 ${s}`),
  GREEN: (s) => ansi.green(`🟢 ${s}`),
};

function statusLabel(row: SuiteSummaryRow): string {
  const status = classifySuiteStatus({
    rc: row.rc,
    hasCurrent: !!row.current,
    expRegressions: row.current?.regressions.length ?? 0,
    driftRegressed: row.changes?.regressed.length ?? 0,
    added: row.changes?.added ?? 0,
    fixed: row.changes?.fixed.length ?? 0,
    hasChanges: !!row.changes,
  });
  return STATUS_LABEL[status](status);
}

function changesLabel(row: SuiteSummaryRow): string {
  const parts: string[] = [];
  const expRegressions = row.current?.regressions.length ?? 0;
  if (row.current?.newPasses.length) parts.push(ansi.green(`✨ ${row.current.newPasses.length} new passes`));
  if (row.changes) {
    // Drift (vs previous run) is authoritative; expectation-regressions overlap
    // it, so only the non-drift remainder is shown, as "need ratchet".
    const driftRegressed = row.changes.regressed.length;
    if (row.changes.added > 0) parts.push(ansi.cyan(`🆕 ${row.changes.added} added`));
    if (row.changes.fixed.length) parts.push(ansi.green(`✅ ${row.changes.fixed.length} fixed`));
    if (driftRegressed) parts.push(ansi.red(`❌ ${driftRegressed} regressed`));
    const unratcheted = Math.max(0, expRegressions - driftRegressed);
    if (unratcheted > 0) parts.push(ansi.yellow(`⚠ ${unratcheted} need ratchet`));
    if (!parts.length) parts.push(ansi.dim("no status drift"));
  } else {
    if (expRegressions) parts.push(ansi.red(`🚨 ${expRegressions} regressions`));
    if (!parts.length) parts.push(ansi.dim("baseline n/a"));
  }
  return parts.join(", ");
}

// Display width: Bun.stringWidth handles ANSI escapes AND double-width
// glyphs (emoji), which .length miscounts — that's what broke the box borders.
function visibleWidth(value: string): number {
  return Bun.stringWidth(value);
}

function padVisible(value: string, width: number): string {
  return value + " ".repeat(Math.max(0, width - visibleWidth(value)));
}

function renderFinalSuiteSummary(rows: SuiteSummaryRow[]): void {
  const headers = ["Suite", "Status", "Pass rate", "Δ", "Pass/Total", "Fail", "Err", "Skip", "Changes"];
  const body = rows.map((row) => {
    const counts = row.current?.counts;
    return [
      row.suite,
      statusLabel(row),
      formatPercent(passRate(row.current)),
      formatDelta(row.current, row.previous),
      counts ? `${counts.pass}/${counts.total}` : "n/a",
      counts ? String(counts.fail) : "n/a",
      counts ? String(counts.error) : "n/a",
      counts ? String(counts.skip) : "n/a",
      changesLabel(row),
    ];
  });
  const widths = headers.map((header, i) => Math.max(header.length, ...body.map((row) => visibleWidth(row[i]))));
  const line = (cells: string[]): string => `│ ${cells.map((cell, i) => padVisible(cell, widths[i])).join(" │ ")} │`;
  const sep = `├${widths.map((width) => "─".repeat(width + 2)).join("┼")}┤`;
  const top = `┌${widths.map((width) => "─".repeat(width + 2)).join("┬")}┐`;
  const bottom = `└${widths.map((width) => "─".repeat(width + 2)).join("┴")}┘`;
  const totalPass = rows.reduce((sum, row) => sum + (row.current?.counts.pass ?? 0), 0);
  const totalTests = rows.reduce((sum, row) => sum + (row.current ? scoredTotal(row.current.counts) : 0), 0);
  const totalExpRegressions = rows.reduce((sum, row) => sum + (row.current?.regressions.length ?? 0), 0);
  const totalDriftRegressed = rows.reduce((sum, row) => sum + (row.changes?.regressed.length ?? 0), 0);
  const totalAdded = rows.reduce((sum, row) => sum + (row.changes?.added ?? 0), 0);
  const hasDrift = rows.some((row) => row.changes);
  const totalNewPasses = rows.reduce((sum, row) => sum + (row.current?.newPasses.length ?? 0), 0);
  const errored = rows.filter((row) => row.rc === 2 || row.rc > 2 || !row.current).length;
  const needRatchet = Math.max(0, totalExpRegressions - totalDriftRegressed);
  const headline = errored
    ? ansi.red(`🛑 ${errored} suite${errored === 1 ? "" : "s"} had harness errors`)
    : totalDriftRegressed
      ? ansi.red(`🔴 ${totalDriftRegressed} regression${totalDriftRegressed === 1 ? "" : "s"} across selected suites`)
      : hasDrift && totalExpRegressions
        ? totalAdded >= totalExpRegressions
          ? ansi.cyan(`🔵 coverage gained: ${totalAdded} tests added, ${needRatchet} need ratchet`)
          : ansi.yellow(`🟡 ${needRatchet} unratcheted failure${needRatchet === 1 ? "" : "s"} (no drift regressions)`)
        : totalExpRegressions
          ? ansi.red(`🔴 ${totalExpRegressions} regression${totalExpRegressions === 1 ? "" : "s"} across selected suites`)
          : ansi.green("🟢 No regressions across selected suites");

  process.stderr.write("\n");
  process.stderr.write(`${ansi.bold("Compliance Summary")} ${headline}\n`);
  process.stderr.write(`${ansi.dim(`Selected suites: ${rows.length} · Aggregate pass rate: ${formatPercent(totalTests ? totalPass / totalTests : undefined)} · New passes: ${totalNewPasses}`)}\n`);
  process.stderr.write(`${top}\n`);
  process.stderr.write(`${line(headers.map((header) => ansi.bold(header)))}\n`);
  process.stderr.write(`${sep}\n`);
  for (const row of body) process.stderr.write(`${line(row)}\n`);
  process.stderr.write(`${bottom}\n\n`);
}

async function main(argv = Bun.argv.slice(2)): Promise<number> {
  process.chdir(ROOT);
  const options = parseArgs(argv);
  const plat = platformArgs(options.platform);
  const hostUid = (await $`id -u`.text()).trim();
  const hostGid = (await $`id -g`.text()).trim();
  const user = userArgs(hostUid, hostGid, CONTAINER_PATH);
  const registryPath = resolve(ROOT, "registry.toml");
  const workloads = parseRegistry(registryPath);
  // Workloads for other runtimes (registry `target`) are run through `--target <name>`.
  const suites = options.allSuites && options.suites.length === 0
    ? workloads.filter((workload) => (workload.target ?? "elide") === "elide").map((workload) => workload.id)
    : options.suites.length ? options.suites : ["test262"];
  for (const suite of suites) {
    const target = workloads.find((workload) => workload.id === suite)?.target;
    if (target && target !== "elide") usageError(`suite '${suite}' targets ${target}; run it with --target ${target}`);
  }

  if (options.prepareSuites) {
    const rc = await runWithHeartbeat(
      ["bun", "./bin/setup.ts", "--skip-install", "--suite", suites.join(",")],
      `preparing suite submodules for ${suites.join(", ")}`,
    );
    if (rc !== 0) return 2;
  }

  await requireDocker();

  const image = dockerImageName(options.elideRef);
  log(`elide ref: ${options.elideRef}   platform: ${options.platform || "<native>"}`);
  const digest = await buildHarnessImage(options, image, plat);
  log(`image built. resolved digest: ${digest}`);
  await preflight(image, plat, user);

  const concurrency = planConcurrency(options, suites.length);
  log(
    `concurrency: cpus=${concurrency.cpuCount} multiplier=${options.concurrencyMultiplier} budget=${concurrency.totalBudget} ` +
      `suite-workers=${concurrency.suiteWorkers}${options.suiteWorkers ? "" : " (default)"} ` +
      `threads=${concurrency.threads}${options.threads ? "" : " (default)"}`,
  );

  mkdirSync(resolve(ROOT, "reports"), { recursive: true });
  mkdirSync(resolve(ROOT, "expectations"), { recursive: true });
  mkdirSync(resolve(ROOT, ".harness"), { recursive: true });
  if (!existsSync(resolve(ROOT, "README.md"))) closeSync(openSync(resolve(ROOT, "README.md"), "a"));

  if (options.repairOwnership) {
    await fixHostOwnership(image, plat, hostUid, hostGid, "repairing writable mount ownership before suite runs", [
      "reports",
      "expectations",
      ".harness",
      "README.md",
    ]);
  } else {
    assertWritableMountSources(["reports", "expectations", ".harness"], ["README.md"]);
  }

  const expMode = options.ratchet ? "rw" : "ro";
  const readmeMode = options.updateSummaries ? "rw" : "ro";

  const runSuite = async (suite: string): Promise<number> => {
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
      String(concurrency.threads),
      "--suite-version",
      version,
      "--log-prefix",
      `[${suite}] `,
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
    return rc;
  };

  const suiteWorkerCount = concurrency.suiteWorkers;
  if (suiteWorkerCount > 1) log(`running ${suites.length} suite(s) with ${suiteWorkerCount} suite workers`);
  const suiteExitCodes = new Array<number>(suites.length).fill(0);
  let nextSuite = 0;
  await Promise.all(
    Array.from({ length: suiteWorkerCount }, async () => {
      for (;;) {
        const index = nextSuite++;
        if (index >= suites.length) return;
        suiteExitCodes[index] = await runSuite(suites[index]);
      }
    }),
  );

  let overall = 0;
  for (const rc of suiteExitCodes) {
    if (rc === 2 || rc > 2) overall = 2;
    else if (rc === 1 && overall === 0) overall = 1;
  }

  renderFinalSuiteSummary(loadSuiteSummaryRows(suites, suiteExitCodes, digest));

  if (overall === 0) log("DONE: all selected suites GREEN.");
  if (overall === 1) log("DONE: selected suites completed with regressions. exit 1.");
  if (overall === 2) log("DONE: one or more selected suites had a harness/infra error. exit 2.");
  return overall;
}

try {
  const argv = Bun.argv.slice(2);
  const targetIndex = argv.indexOf("--target");
  const target = targetIndex < 0 ? "elide" : argv[targetIndex + 1];
  if (targetIndex >= 0) argv.splice(targetIndex, 2);
  if (target === "bali") {
    const executionIndex = argv.indexOf("--execution");
    const execution = executionIndex < 0 ? "docker" : argv[executionIndex + 1];
    if (executionIndex >= 0) argv.splice(executionIndex, 2);
    const baliSuites = parseRegistry(resolve(ROOT, "registry.toml"))
      .filter((workload) => workload.target === "bali")
      .map((workload) => workload.id);
    if (argv.includes("--help")) {
      console.log(
        `usage: bun run testsuite --target bali --bali-home <linux-amd64 distribution> [--ratchet] [--suite ${baliSuites.join("|")}] [--execution docker|native]\n` +
          "Docker (default) runs linux/amd64 with the reference JDK fixed in the image. --execution native runs on this host, " +
          "using JAVA_HOME or --reference-home as the reference JDK. Results go to reports/bali/ and are checked against expectations/<suite>.toml like Elide suites.",
      );
    } else if (execution === "docker") {
      const { runBaliDocker } = await import("./bali-docker");
      process.exitCode = await runBaliDocker(argv, ROOT, RUN_LABEL, run, baliSuites);
    } else if (execution === "native") {
      const { runBaliNative } = await import("./bali-docker");
      process.exitCode = await runBaliNative(argv, ROOT, baliSuites);
    } else throw new Error(`Unknown execution environment: ${execution}`);
  } else if (target === "elide") {
    process.exit(await main(argv));
  } else throw new Error(`Unknown target: ${target}`);
} catch (err) {
  log(`ERROR: unexpected failure: ${err instanceof Error ? (err.stack ?? err.message) : String(err)}`);
  process.exit(2);
}
