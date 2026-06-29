import { existsSync, mkdtempSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";
import { test, expect } from "bun:test";
import { loadManifest } from "./manifest";

test("loads grouped manifest entries", () => {
  const dir = mkdtempSync(join(tmpdir(), "manifest-"));
  const file = join(dir, "suite.toml");
  writeFileSync(
    file,
    `
[[group]]
id = "url"
include = ["url/urlsearchparams.any.js"]
tags = ["wintertc", "url"]

[[group]]
id = "encoding"
include = ["encoding/textdecoder.any.js"]
reason = "pure API"
`,
  );

  expect(loadManifest(file)).toEqual({
    groups: [
      {
        id: "url",
        include: ["url/urlsearchparams.any.js"],
        tags: ["wintertc", "url"],
        reason: undefined,
      },
      {
        id: "encoding",
        include: ["encoding/textdecoder.any.js"],
        tags: [],
        reason: "pure API",
      },
    ],
  });
});

test("rejects absolute manifest paths", () => {
  const dir = mkdtempSync(join(tmpdir(), "manifest-"));
  const file = join(dir, "suite.toml");
  writeFileSync(file, `[[group]]\nid = "bad"\ninclude = ["/abs/test.js"]\n`);
  expect(() => loadManifest(file)).toThrow("manifest include must be relative: /abs/test.js");
});

test("javac langtools manifest enables the full tools/javac tree", () => {
  const manifest = loadManifest(`${import.meta.dir}/../../manifests/javac-langtools.toml`);
  const include = manifest.groups.flatMap((group) => group.include);

  expect(manifest.groups.map((group) => group.id)).toEqual(["javac-all"]);
  expect(include).toEqual(["tools/javac"]);
});

test("cpython manifest entries exist in the checked-out CPython suite", () => {
  const suiteRoot = `${import.meta.dir}/../../suites/cpython`;
  if (!existsSync(suiteRoot)) return;

  const manifest = loadManifest(`${import.meta.dir}/../../manifests/cpython-core.toml`);
  const groups = new Map(manifest.groups.map((group) => [group.id, group.include]));

  expect(groups.get("language-object-model")).toContain("test_compile");
  expect(groups.get("containers-algorithms")).toContain("test_itertools");
  expect(groups.get("numbers")).toContain("test_decimal");

  for (const module of manifest.groups.flatMap((group) => group.include)) {
    const file = join(suiteRoot, "Lib/test", `${module}.py`);
    const directory = join(suiteRoot, "Lib/test", module);
    expect(existsSync(file) || existsSync(directory)).toBe(true);
  }
});

test("wintertc WPT manifest includes checked-out paths when the suite exists", () => {
  const suiteRoot = `${import.meta.dir}/../../suites/wpt`;
  if (!existsSync(suiteRoot)) return;

  const manifest = loadManifest(`${import.meta.dir}/../../manifests/wintertc-wpt-2025.toml`);
  for (const path of manifest.groups.flatMap((group) => group.include)) {
    expect(existsSync(join(suiteRoot, path))).toBe(true);
  }
});

test("node-api manifest selects broad Node API surfaces", () => {
  const manifest = loadManifest(`${import.meta.dir}/../../manifests/node-api.toml`);
  const groups = new Map(manifest.groups.map((group) => [group.id, group.include]));

  expect(manifest.groups.map((group) => group.id)).toEqual([
    "assert",
    "async-hooks",
    "buffer",
    "console",
    "crypto",
    "diagnostics-channel",
    "dns",
    "events",
    "fs",
    "module-loading",
    "path",
    "process",
    "streams",
    "timers",
    "url",
    "util",
    "vm",
    "worker-threads",
  ]);
  expect(groups.get("assert")).toEqual(["test/parallel/test-assert*.js"]);
  expect(groups.get("buffer")).toEqual(["test/parallel/test-buffer*.js"]);
  expect(groups.get("fs")).toEqual(["test/parallel/test-fs*.js", "test/parallel/test-vfs-fs*.js"]);
  expect(groups.get("path")).toEqual(["test/parallel/test-path*.js"]);
  expect(groups.get("process")).toEqual(["test/parallel/test-process*.js"]);
  expect(groups.get("streams")).toEqual(["test/parallel/test-stream*.js"]);
  expect(groups.get("url")).toEqual(["test/parallel/test-url*.js", "test/parallel/test-whatwg-url*.js"]);
});
