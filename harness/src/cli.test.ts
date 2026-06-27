import { test, expect } from "bun:test";
import { chmodSync, existsSync, mkdirSync, mkdtempSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { buildAdapterContext, main, parseArgs, REGISTRY_PATH, REPO_ROOT, runAdHocDiff, runAdHocImpact, WORK_DIR } from "./cli";
import { ADAPTERS } from "./adapters";
import { loadManifest } from "./manifest";
import { loadRegistry } from "./registry";
import { expandManifestIncludePaths } from "./adapters/javac-jtreg";
import type { Adapter } from "./adapters/types";
import type { Result, TestResult } from "./results/schema";
import { writeResults } from "./results/store";
import { openDb } from "./db/open";

test("parses run subcommand and options", () => {
  const o = parseArgs([
    "run", "test262",
    "--elide-path", "/opt/elide/bin/elide",
    "--digest", "abcd1234",
    "--threads", "8",
  ]);
  expect(o.command).toBe("run");
  expect(o.workload).toBe("test262");
  expect(o.elidePath).toBe("/opt/elide/bin/elide");
  expect(o.digest).toBe("abcd1234");
  expect(o.threads).toBe(8);
});

test("defaults threads to 1 and digest to 'local'", () => {
  const o = parseArgs(["run", "test262"]);
  expect(o.threads).toBe(1);
  expect(o.digest).toBe("local");
  expect(o.log).toBe(false);
});

test("parses the --log flag", () => {
  expect(parseArgs(["run", "test262", "--log"]).log).toBe(true);
});

test("parses an explicit registry path override", () => {
  expect(parseArgs(["run", "test262", "--registry", "/work/registry.toml"]).registryPath).toBe("/work/registry.toml");
});

test("parses an explicit repo root override", () => {
  expect(parseArgs(["run", "wpt-wintertc", "--repo-root", "/work"]).repoRoot).toBe("/work");
});

test("exports the test262 adapter", () => {
  expect(ADAPTERS.test262.id).toBe("test262");
});

test("builds suitePath from registry path, not workload id", () => {
  const o = { ...parseArgs(["run", "placeholder"]), suiteRoot: "/work/suites" };
  const ctx = buildAdapterContext(
    o,
    {
      id: "checkout-alias",
      path: "suites/test262",
      settings: { include: ["test/**/*.js"] },
    },
    { semver: "1.0.0", digest: "abc123" },
    { entries: [], ratchet: new Set() },
  );

  expect(ctx.suitePath).toBe("/work/suites/test262");
  expect(ctx.repoRoot).toBe(REPO_ROOT);
  expect(ctx.workspacePath).toBe(resolve(WORK_DIR, "checkout-alias"));
});

test("builds wpt context with repo-root manifest and all-files include", () => {
  const ctx = buildAdapterContext(
    parseArgs(["run", "wpt-wintertc"]),
    {
      id: "wpt-wintertc",
      path: "suites/wpt",
      settings: {
        include: ["**/*"],
        manifest: "manifests/wintertc-wpt-2025.toml",
      },
    },
    { semver: "1.0.0", digest: "abc123" },
    { entries: [], ratchet: new Set() },
  );

  expect(ctx.include).toEqual(["**/*"]);
  expect(ctx.settings.manifest).toBe(resolve(REPO_ROOT, "manifests/wintertc-wpt-2025.toml"));
  expect(ctx.repoRoot).toBe(REPO_ROOT);
});

test("builds container-shaped broad-suite contexts under /work", () => {
  const workloads = loadRegistry(REGISTRY_PATH);
  const options = parseArgs([
    "run",
    "placeholder",
    "--registry",
    "/work/registry.toml",
    "--suite-root",
    "/work/suites",
    "--repo-root",
    "/work",
  ]);
  const identity = { semver: "1.0.0", digest: "abc123" };
  const exp = { entries: [], ratchet: new Set<string>() };

  const wpt = buildAdapterContext(options, workloads.find((workload) => workload.id === "wpt-wintertc")!, identity, exp);
  expect(wpt.repoRoot).toBe("/work");
  expect(wpt.suitePath).toBe("/work/suites/wpt");
  expect(wpt.settings.manifest).toBe("/work/manifests/wintertc-wpt-2025.toml");
  expect(join(wpt.repoRoot, "suites/drivers/wpt/wintertc-runner.js")).toBe("/work/suites/drivers/wpt/wintertc-runner.js");

  const cpython = buildAdapterContext(options, workloads.find((workload) => workload.id === "cpython-core")!, identity, exp);
  expect(cpython.settings.manifest).toBe("/work/manifests/cpython-core.toml");
  expect(join(cpython.repoRoot, "suites/drivers/python/elide_regrtest_driver.py")).toBe(
    "/work/suites/drivers/python/elide_regrtest_driver.py",
  );

  const javac = buildAdapterContext(options, workloads.find((workload) => workload.id === "javac-jtreg")!, identity, exp);
  expect(javac.settings.manifest).toBe("/work/manifests/javac-langtools.toml");
  expect(join(javac.repoRoot, "suites/drivers/jtreg/elide-javac-wrapper.sh")).toBe(
    "/work/suites/drivers/jtreg/elide-javac-wrapper.sh",
  );
});

test("registry-derived javac-jtreg context leaves include empty and still selects manifest tests", () => {
  const workload = loadRegistry(REGISTRY_PATH).find((entry) => entry.id === "javac-jtreg");
  expect(workload).toBeDefined();

  const ctx = buildAdapterContext(
    parseArgs(["run", "javac-jtreg"]),
    workload!,
    { semver: "1.0.0", digest: "abc123" },
    { entries: [], ratchet: new Set() },
  );

  expect(ctx.include).toEqual([]);

  const manifest = loadManifest(String(ctx.settings.manifest));
  const selected = expandManifestIncludePaths(
    join(ctx.suitePath, "test/langtools"),
    manifest.groups.flatMap((group) => group.include),
    ctx.include,
  );
  expect(selected.length).toBeGreaterThan(0);
});

test("loads registry path from repo root when cwd is harness", () => {
  const cwd = process.cwd();
  process.chdir(resolve(REPO_ROOT, "harness"));
  try {
    const ws = loadRegistry(REGISTRY_PATH);
    expect(ws.find((w) => w.id === "wpt-wintertc")?.path).toBe("suites/wpt");
  } finally {
    process.chdir(cwd);
  }
});

function writeFixtureElide(root: string): string {
  const elidePath = join(root, "elide");
  writeFileSync(elidePath, "#!/usr/bin/env bash\nprintf 'Elide 1.2.3\\n'\n");
  chmodSync(elidePath, 0o755);
  return elidePath;
}

async function writeHarnessFixture(root: string, adapterId: string, workloads: string[]): Promise<void> {
  mkdirSync(join(root, "expectations"), { recursive: true });
  mkdirSync(join(root, "suites"), { recursive: true });
  await Bun.write(
    join(root, "registry.toml"),
    workloads
      .map((workload) => `[[workload]]\nid = "${workload}"\nkind = "test"\nadapter = "${adapterId}"\npath = "suites/${workload}"\n`)
      .join("\n"),
  );
  for (const workload of workloads) {
    mkdirSync(join(root, "suites", workload), { recursive: true });
    await Bun.write(join(root, "expectations", `${workload}.toml`), "");
  }
}

async function runFixtureWorkload(root: string, workload: string, adapterId: string): Promise<number> {
  return main({
    ...parseArgs([
      "run",
      workload,
      "--registry",
      join(root, "registry.toml"),
      "--repo-root",
      root,
      "--elide-path",
      join(root, "elide"),
      "--digest",
      "abcdef1234567890",
      "--suite-root",
      join(root, "suites"),
      "--reports",
      join(root, "reports"),
      "--expectations",
      join(root, "expectations"),
    ]),
    log: false,
  });
}

test("stores reports below semver, short digest, and workload to avoid collisions", async () => {
  const root = mkdtempSync(join(tmpdir(), "cli-report-path-"));
  const adapterId = "fixture-single-test";
  const adapter: Adapter = {
    id: adapterId,
    kind: "test",
    async *run(): AsyncIterable<Result> {
      yield { kind: "test", id: "case default", status: "pass" };
    },
  };
  ADAPTERS[adapterId] = adapter;
  try {
    writeFixtureElide(root);
    await writeHarnessFixture(root, adapterId, ["alpha", "beta"]);

    expect(await runFixtureWorkload(root, "alpha", adapterId)).toBe(0);
    expect(await runFixtureWorkload(root, "beta", adapterId)).toBe(0);

    expect(existsSync(join(root, "reports", "1.2.3", "abcdef123456", "alpha", "summary.json"))).toBe(true);
    expect(existsSync(join(root, "reports", "1.2.3", "abcdef123456", "beta", "summary.json"))).toBe(true);
  } finally {
    delete ADAPTERS[adapterId];
  }
});

test("treats zero emitted TestResults as a harness error before writing reports", async () => {
  const root = mkdtempSync(join(tmpdir(), "cli-zero-tests-"));
  const adapterId = "fixture-zero-tests";
  const adapter: Adapter = {
    id: adapterId,
    kind: "test",
    async *run(): AsyncIterable<Result> {
      yield { kind: "benchmark", id: "startup", metric: "time", value: 1, unit: "ms" };
    },
  };
  ADAPTERS[adapterId] = adapter;
  try {
    writeFixtureElide(root);
    await writeHarnessFixture(root, adapterId, ["empty"]);

    await expect(runFixtureWorkload(root, "empty", adapterId)).rejects.toThrow(/no test results/i);
    expect(existsSync(join(root, "reports", "1.2.3", "abcdef123456", "empty", "summary.json"))).toBe(false);
  } finally {
    delete ADAPTERS[adapterId];
  }
});

async function writeIngestedRun(
  reportsDir: string,
  workload: string,
  semver: string,
  digest: string,
  finishedAt: string,
  results: TestResult[],
): Promise<void> {
  const dir = join(reportsDir, semver, digest.slice(0, 12), workload);
  mkdirSync(dir, { recursive: true });
  const meta = {
    workload,
    kind: "test" as const,
    elide: { semver, digest },
    startedAt: finishedAt,
    finishedAt,
  };
  await writeResults(dir, meta, results);
  await Bun.write(
    join(dir, "summary.json"),
    JSON.stringify({
      meta,
      counts: { pass: results.filter((result) => result.status === "pass").length, total: results.length },
      regressions: results.filter((result) => result.status === "fail" || result.status === "error").map((result) => result.id),
      newPasses: [],
    }),
  );
}

test("ad-hoc diff uses the requested workload from ingested runs", async () => {
  const root = mkdtempSync(join(tmpdir(), "cli-adhoc-diff-"));
  const reportsDir = join(root, "reports");
  await writeIngestedRun(reportsDir, "alpha", "1.0.0", "aaaaaaaaaaaa", "2026-01-01T00:00:00.000Z", [
    { kind: "test", id: "alpha-fixed", status: "fail" },
    { kind: "test", id: "alpha-regressed", status: "pass" },
  ]);
  await writeIngestedRun(reportsDir, "alpha", "1.1.0", "bbbbbbbbbbbb", "2026-01-02T00:00:00.000Z", [
    { kind: "test", id: "alpha-fixed", status: "pass" },
    { kind: "test", id: "alpha-regressed", status: "fail" },
  ]);
  await writeIngestedRun(reportsDir, "test262", "9.9.9", "cccccccccccc", "2026-01-03T00:00:00.000Z", [
    { kind: "test", id: "test262-only", status: "fail" },
  ]);
  const db = openDb(":memory:");

  const output = await runAdHocDiff(db, reportsDir, ["alpha"]);

  expect(output).toContain("`1.0.0` → `1.1.0`");
  expect(output).toContain("alpha-fixed");
  expect(output).toContain("alpha-regressed");
  expect(output).not.toContain("test262-only");
});

test("ad-hoc impact uses the requested workload from ingested runs", async () => {
  const root = mkdtempSync(join(tmpdir(), "cli-adhoc-impact-"));
  const reportsDir = join(root, "reports");
  await writeIngestedRun(reportsDir, "beta", "2.0.0", "dddddddddddd", "2026-01-01T00:00:00.000Z", [
    { kind: "test", id: "beta-fail", status: "fail", message: "beta exploded", meta: { features: ["beta-feature"] } },
    { kind: "test", id: "beta-pass", status: "pass" },
  ]);
  await writeIngestedRun(reportsDir, "test262", "2.0.0", "eeeeeeeeeeee", "2026-01-02T00:00:00.000Z", [
    { kind: "test", id: "test262-fail", status: "fail", message: "test262 exploded" },
  ]);
  const db = openDb(":memory:");

  const output = await runAdHocImpact(db, reportsDir, ["beta", "2.0.0"]);

  expect(output).toContain("beta-fail");
  expect(output).toContain("beta-feature");
  expect(output).not.toContain("test262-fail");
});
