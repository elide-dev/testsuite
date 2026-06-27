import { test, expect, spyOn } from "bun:test";
import { mkdirSync, mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import type { AdapterContext } from "./types";
import { filterIncludedPaths, parseWptLine, parseWptLines, runWptWintertc } from "./wpt-wintertc";

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

test("filters manifest paths by include globs", () => {
  expect(
    filterIncludedPaths(
      ["url/urlsearchparams.any.js", "encoding/textdecoder.any.js", "streams/readable-streams/general.any.js"],
      ["encoding/**", "streams/**"],
    ),
  ).toEqual(["encoding/textdecoder.any.js", "streams/readable-streams/general.any.js"]);
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
