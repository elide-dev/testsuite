import { test, expect } from "bun:test";
import { join, resolve } from "node:path";
import { buildAdapterContext, parseArgs, REGISTRY_PATH, REPO_ROOT, WORK_DIR } from "./cli";
import { ADAPTERS } from "./adapters";
import { loadManifest } from "./manifest";
import { loadRegistry } from "./registry";
import { expandManifestIncludePaths } from "./adapters/javac-jtreg";

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
