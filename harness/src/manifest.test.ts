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

test("javac langtools smoke manifest includes a true compile-then-run slice", () => {
  const manifest = loadManifest(`${import.meta.dir}/../../manifests/javac-langtools.toml`);
  const include = manifest.groups.flatMap((group) => group.include);

  expect(include).toContain("tools/javac/diags");
  expect(include).toContain("tools/javac/IllDefinedOrderOfInit.java");
});

test("wintertc WPT manifest includes checked-out paths when the suite exists", () => {
  const suiteRoot = `${import.meta.dir}/../../suites/wpt`;
  if (!existsSync(suiteRoot)) return;

  const manifest = loadManifest(`${import.meta.dir}/../../manifests/wintertc-wpt-2025.toml`);
  for (const path of manifest.groups.flatMap((group) => group.include)) {
    expect(existsSync(join(suiteRoot, path))).toBe(true);
  }
});
