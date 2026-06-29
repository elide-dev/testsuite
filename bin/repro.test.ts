import { existsSync, mkdtempSync, readFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { expect, test } from "bun:test";

test("node-api repro packages include a Node baseline command", async () => {
  const out = mkdtempSync(join(tmpdir(), "repro-"));
  const proc = Bun.spawn([
    process.execPath,
    "./bin/repro.ts",
    "--suite",
    "node-api",
    "--case",
    "test/parallel/test-buffer-bytelength.js",
    "--name",
    "node-api-cjs-scope",
    "--out",
    out,
  ], {
    cwd: import.meta.dir + "/..",
    stdout: "pipe",
    stderr: "pipe",
  });

  expect(await proc.exited).toBe(0);
  const baseline = readFileSync(join(out, "node-api-cjs-scope", "baseline.sh"), "utf8");
  expect(baseline).toContain("NODE_BIN");
  expect(baseline).toContain("test/parallel/test-buffer-bytelength.js");
  expect(baseline).toContain("type\":\"commonjs");
  expect(existsSync(join(out, "node-api-cjs-scope.zip"))).toBe(true);
});
