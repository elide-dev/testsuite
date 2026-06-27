import { test, expect } from "bun:test";
import { resolve } from "node:path";
import { buildAdapterContext, parseArgs, REPO_ROOT } from "./cli";
import { ADAPTERS } from "./adapters";

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
  expect(ctx.workspacePath).toBe(resolve(".harness/work/checkout-alias"));
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
