import { test, expect, spyOn } from "bun:test";
import { mkdirSync, mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import type { AdapterContext } from "./types";
import { filterIncludedPaths, isFetchTask, parseWptLine, parseWptLines, runWptWintertc } from "./wpt-wintertc";

const fixture = await Bun.file(`${import.meta.dir}/../../fixtures/wpt-wintertc.ndjson`).text();

test("maps WPT bridge JSON lines to TestResult records", () => {
  const out = parseWptLines(fixture);
  expect(out).toHaveLength(4);
  expect(out[0]).toMatchObject({
    kind: "test",
    id: "url/urlsearchparams.any.js :: URLSearchParams constructor",
    status: "pass",
    durationMs: 12,
    meta: {
      suite: "wpt-wintertc",
      upstreamPath: "url/urlsearchparams.any.js",
      category: "url",
      runner: "wpt",
      subtest: "URLSearchParams constructor",
    },
  });
  expect(out[1]).toMatchObject({
    id: "encoding/textdecoder.any.js :: fatal flag",
    status: "fail",
    message: "assert_equals: expected true got false",
  });
  expect(out[2].status).toBe("error");
  expect(out[3].status).toBe("skip");
});

test("ignores blank WPT lines", () => {
  expect(parseWptLine("")).toBeNull();
});

test("ignores non-JSON WPT output lines", () => {
  expect(parseWptLines("╭─ Script Error ─╮\n{\"path\":\"url/a.any.js\",\"subtest\":\"file\",\"status\":\"PASS\"}\n")).toEqual([
    expect.objectContaining({
      id: "url/a.any.js :: file",
      status: "pass",
    }),
  ]);
});

test("filters manifest paths by include globs", () => {
  expect(
    filterIncludedPaths(
      ["url/urlsearchparams.any.js", "encoding/textdecoder.any.js", "streams/readable-streams/general.any.js"],
      ["encoding/**", "streams/**"],
    ),
  ).toEqual(["encoding/textdecoder.any.js", "streams/readable-streams/general.any.js"]);
});

test("WPT bridge rejects missing --test values with usage", () => {
  const runner = join(import.meta.dir, "../../..", "suites/drivers/wpt/wintertc-runner.js");
  const proc = Bun.spawnSync([process.execPath, runner, "--suite", "/tmp/wpt", "--test", "--category", "url"], {
    stdout: "pipe",
    stderr: "pipe",
  });

  expect(proc.exitCode).toBe(2);
  expect(new TextDecoder().decode(proc.stderr)).toContain("usage: wintertc-runner.js");
});

test("META parser extracts script directives from the leading comment block", async () => {
  const runner = await import("../../../suites/drivers/wpt/wintertc-runner.js");
  const source = [
    "// META: global=window,worker",
    "// META: script=/common/utils.js",
    "// META: script=../resources/utils.js",
    "",
    "// plain comment",
    "test(() => {}, 'x');",
    "// META: script=ignored-after-code.js",
  ].join("\n");
  expect(runner.parseMetaScripts(source)).toEqual(["/common/utils.js", "../resources/utils.js"]);
  expect(runner.parseMetaScripts("test(() => {}, 'x');")).toEqual([]);
});

test("META scripts resolve absolute paths against the suite root and relative against the test dir", async () => {
  const runner = await import("../../../suites/drivers/wpt/wintertc-runner.js");
  expect(runner.resolveMetaScript("/suite", "fetch/api/basic/a.any.js", "/common/utils.js")).toEqual({
    path: "/suite/common/utils.js",
    key: "/common/utils.js",
  });
  expect(runner.resolveMetaScript("/suite", "fetch/api/basic/a.any.js", "../resources/utils.js")).toEqual({
    path: "/suite/fetch/api/resources/utils.js",
    key: "/fetch/api/resources/utils.js",
  });
  expect(runner.resolveMetaScript("/suite", "encoding/a.any.js", "resources/encodings.js")).toEqual({
    path: "/suite/encoding/resources/encodings.js",
    key: "/encoding/resources/encodings.js",
  });
});

test("META preamble inlines existing scripts, shims virtual ones, and marks missing ones", async () => {
  const runner = await import("../../../suites/drivers/wpt/wintertc-runner.js");
  const suite = mkdtempSync(join(tmpdir(), "wpt-meta-"));
  mkdirSync(join(suite, "fetch/api/resources"), { recursive: true });
  writeFileSync(join(suite, "fetch/api/resources/utils.js"), "var RESOURCES_DIR = '../resources/';\n");
  const source = [
    "// META: script=../resources/utils.js",
    "// META: script=/common/sab.js",
    "// META: script=/no/such/helper.js",
    "test(() => {}, 'x');",
  ].join("\n");
  const preamble = runner.buildMetaPreamble(suite, "fetch/api/basic/a.any.js", source);
  expect(preamble).toContain("var RESOURCES_DIR");
  expect(preamble).toContain("const createBuffer");
  expect(preamble).toContain("missing META script /no/such/helper.js");
});

test("buildEnvPreamble roots location at WPT_SERVER_ORIGIN when set, else the synthetic origin", async () => {
  const runner = await import("../../../suites/drivers/wpt/wintertc-runner.js");
  const prev = process.env.WPT_SERVER_ORIGIN;
  try {
    process.env.WPT_SERVER_ORIGIN = "http://127.0.0.1:8123";
    const withServer = runner.buildEnvPreamble("fetch/api/basic/a.any.js");
    expect(withServer).toContain('"origin":"http://127.0.0.1:8123"');
    expect(withServer).toContain('"href":"http://127.0.0.1:8123/fetch/api/basic/"');
    expect(withServer).toContain('"host":"127.0.0.1:8123"');
    expect(withServer).toContain('"port":"8123"');

    delete process.env.WPT_SERVER_ORIGIN;
    const noServer = runner.buildEnvPreamble("fetch/api/basic/a.any.js");
    expect(noServer).toContain('"origin":"http://web-platform.test"');
    expect(noServer).not.toContain("127.0.0.1");
  } finally {
    if (prev === undefined) delete process.env.WPT_SERVER_ORIGIN;
    else process.env.WPT_SERVER_ORIGIN = prev;
  }
});

function collect<T>(items: AsyncIterable<T>): Promise<T[]> {
  return Array.fromAsync(items);
}

test("runs selected WPT files through the worker pool", async () => {
  const root = mkdtempSync(join(tmpdir(), "wpt-wintertc-"));
  const manifest = join(root, "manifest.toml");
  const suitePath = join(root, "wpt");
  const runnerDir = join(root, "suites/drivers/wpt");
  const runnerLog = join(root, "runner.log");
  mkdirSync(suitePath, { recursive: true });
  mkdirSync(runnerDir, { recursive: true });
  writeFileSync(
    manifest,
    [
      '[[group]]',
      'id = "url"',
      'include = ["url/a.any.js", "url/b.any.js", "encoding/c.any.js"]',
      "",
    ].join("\n"),
  );
  writeFileSync(
    join(runnerDir, "wintertc-runner.js"),
    `const fs = require("node:fs");
function arg(name) {
  const index = process.argv.indexOf(name);
  return index >= 0 ? process.argv[index + 1] : "";
}
const test = arg("--test");
const category = arg("--category");
fs.appendFileSync(${JSON.stringify(runnerLog)}, test + "\\n");
console.log(JSON.stringify({ path: test, subtest: "file", status: "PASS", category }));
`,
  );
  const ctx: AdapterContext = {
    elide: { semver: "test", digest: "deadbeef" },
    elidePath: "/fake/elide",
    repoRoot: root,
    suitePath,
    include: ["url/**"],
    skipGlobs: [],
    threads: 2,
    settings: { manifest, timeoutMs: 5_000 },
    workspacePath: join(root, "workspace"),
  };

  const results = await collect(runWptWintertc(ctx));

  expect(results.map((result) => result.id).sort()).toEqual([
    "url/a.any.js :: file",
    "url/b.any.js :: file",
  ]);
  expect(readFileSync(runnerLog, "utf8").trim().split(/\n/).sort()).toEqual(["url/a.any.js", "url/b.any.js"]);
});

test("emits WPT progress lines while files are running under --log", async () => {
  const root = mkdtempSync(join(tmpdir(), "wpt-wintertc-"));
  const manifest = join(root, "manifest.toml");
  const suitePath = join(root, "wpt");
  const runnerDir = join(root, "suites/drivers/wpt");
  mkdirSync(suitePath, { recursive: true });
  mkdirSync(runnerDir, { recursive: true });
  writeFileSync(manifest, '[[group]]\nid = "url"\ninclude = ["url/a.any.js"]\n');
  writeFileSync(
    join(runnerDir, "wintertc-runner.js"),
    `function arg(name) {
  const index = process.argv.indexOf(name);
  return index >= 0 ? process.argv[index + 1] : "";
}
const test = arg("--test");
setTimeout(() => {
  console.log(JSON.stringify({ path: test, subtest: "file", status: "PASS", category: "url" }));
}, 80);
`,
  );
  const ctx: AdapterContext = {
    elide: { semver: "test", digest: "deadbeef" },
    elidePath: "/fake/elide",
    repoRoot: root,
    suitePath,
    include: [],
    skipGlobs: [],
    threads: 1,
    log: true,
    settings: { manifest, timeoutMs: 5_000, progressIntervalMs: 20 },
    workspacePath: join(root, "workspace"),
  };
  const stderr = spyOn(process.stderr, "write").mockImplementation(() => true);
  let writes = "";
  try {
    await collect(runWptWintertc(ctx));
    writes = stderr.mock.calls.map((call) => String(call[0])).join("");
  } finally {
    stderr.mockRestore();
  }

  expect(writes).toContain("progress: start url/a.any.js");
  expect(writes).toContain("progress: still running url/a.any.js");
});

test("isFetchTask gates the server on fetch/ paths only", () => {
  expect(isFetchTask({ category: "fetch", rel: "fetch/api/basic/a.any.js" })).toBe(true);
  expect(isFetchTask({ category: "url", rel: "url/a.any.js" })).toBe(false);
  expect(isFetchTask({ category: "encoding", rel: "encoding/textdecoder.any.js" })).toBe(false);
});

test("a failed server fails fetch tasks explicitly but leaves serverless tasks running", async () => {
  const root = mkdtempSync(join(tmpdir(), "wpt-wintertc-"));
  const manifest = join(root, "manifest.toml");
  const suitePath = join(root, "wpt"); // no ./wpt entrypoint -> startWptServer fails fast
  const runnerDir = join(root, "suites/drivers/wpt");
  mkdirSync(suitePath, { recursive: true });
  mkdirSync(runnerDir, { recursive: true });
  writeFileSync(
    manifest,
    ['[[group]]', 'id = "fetch"', 'include = ["fetch/api/basic/a.any.js"]', "", '[[group]]', 'id = "url"', 'include = ["url/b.any.js"]', ""].join("\n"),
  );
  writeFileSync(
    join(runnerDir, "wintertc-runner.js"),
    `function arg(name) { const i = process.argv.indexOf(name); return i >= 0 ? process.argv[i + 1] : ""; }
console.log(JSON.stringify({ path: arg("--test"), subtest: "file", status: "PASS", category: arg("--category") }));
`,
  );
  const ctx: AdapterContext = {
    elide: { semver: "test", digest: "deadbeef" },
    elidePath: "/fake/elide",
    repoRoot: root,
    suitePath,
    include: [],
    skipGlobs: [],
    threads: 2,
    settings: { manifest, timeoutMs: 5_000, serverReadyTimeoutMs: 500 },
    workspacePath: join(root, "workspace"),
  };
  const stderr = spyOn(process.stderr, "write").mockImplementation(() => true);
  let results;
  try {
    results = await collect(runWptWintertc(ctx));
  } finally {
    stderr.mockRestore();
  }
  const byId = new Map(results.map((r) => [r.id, r]));
  // Serverless url task ran normally through the fake runner.
  expect(byId.get("url/b.any.js :: file")?.status).toBe("pass");
  // Fetch task is an explicit, attributed error — not a silent pass and not an opaque runner failure.
  const fetchResult = byId.get("fetch/api/basic/a.any.js :: <file>");
  expect(fetchResult?.status).toBe("error");
  expect(fetchResult?.message).toContain("wpt-server unavailable");
});
