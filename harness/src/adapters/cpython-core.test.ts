import { test, expect } from "bun:test";
import { chmodSync, mkdirSync, mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import picomatch from "picomatch";
import type { AdapterContext } from "./types";
import { filterIncludedModules, parseCpythonLines, remapCpythonSkip, runCpythonCore } from "./cpython-core";

const fixture = await Bun.file(`${import.meta.dir}/../../fixtures/cpython-core.ndjson`).text();

test("maps CPython driver JSON lines to TestResult records", () => {
  const out = parseCpythonLines(fixture);
  expect(out).toHaveLength(4);
  expect(out[0]).toMatchObject({
    kind: "test",
    id: "test_re.ReTests.test_basic_re_sub",
    status: "pass",
    meta: {
      suite: "cpython-core",
      upstreamPath: "test_re",
      category: "test_re",
      runner: "regrtest",
      subtest: "test_re.ReTests.test_basic_re_sub",
    },
  });
  expect(out[1]).toMatchObject({
    id: "test_json.TestDecode.test_failures",
    status: "fail",
    message: "AssertionError: bad decode",
  });
  expect(out[2].status).toBe("error");
  expect(out[3].status).toBe("skip");
});

test("ignores non-JSON CPython output lines", () => {
  expect(parseCpythonLines("╭─ Script Error ─╮\n{\"module\":\"test_re\",\"case\":\"test_re.Case.test\",\"status\":\"pass\"}\n")).toEqual([
    expect.objectContaining({
      id: "test_re.Case.test",
      status: "pass",
    }),
  ]);
});

test("maps CPython running records to progress skips", () => {
  expect(parseCpythonLines('{"module":"test_re","case":"test_re.Case.test_slow","status":"running"}\n')).toEqual([
    expect.objectContaining({
      id: "test_re.Case.test_slow",
      status: "skip",
      message: "running",
    }),
  ]);
});

test("remaps CPython skips from either module names or case ids", () => {
  const out = parseCpythonLines(fixture);
  const moduleSkip = remapCpythonSkip(out[0], [picomatch("test_re")]);
  const caseSkip = remapCpythonSkip(out[1], [picomatch("test_json.TestDecode.test_failures")]);

  expect(moduleSkip.status).toBe("skip");
  expect(caseSkip.status).toBe("skip");
});

test("filters CPython modules by include globs", () => {
  expect(filterIncludedModules(["test_builtin", "test_re", "test_json", "test_ast"], ["test_re", "test_j*"])).toEqual([
    "test_re",
    "test_json",
  ]);
});

function collect<T>(items: AsyncIterable<T>): Promise<T[]> {
  return Array.fromAsync(items);
}

function writeExecutable(path: string, body: string): string {
  writeFileSync(path, body);
  chmodSync(path, 0o755);
  return path;
}

test("passes CPython driver arguments after the elide run separator", async () => {
  const root = mkdtempSync(join(tmpdir(), "cpython-core-"));
  const argsLog = join(root, "elide.args");
  const manifest = join(root, "manifest.toml");
  const suitePath = join(root, "cpython");
  mkdirSync(suitePath, { recursive: true });
  writeFileSync(manifest, '[[group]]\nid = "core"\ninclude = ["test_re"]\n');
  const elidePath = writeExecutable(
    join(root, "fake-elide.sh"),
    `#!/usr/bin/env bash
set -euo pipefail
printf '%s\n' "$@" > ${JSON.stringify(argsLog)}
printf '{"module":"test_re","case":"test_re.ReTests.test_basic","status":"pass"}\\n'
`,
  );
  const ctx: AdapterContext = {
    elide: { semver: "test", digest: "deadbeef" },
    elidePath,
    repoRoot: resolve(import.meta.dir, "../..", ".."),
    suitePath,
    include: [],
    skipGlobs: [],
    threads: 1,
    settings: { manifest, timeoutMs: 5_000 },
    workspacePath: join(root, "workspace"),
  };

  const results = await collect(runCpythonCore(ctx));

  expect(results).toEqual([
    expect.objectContaining({
      id: "test_re.ReTests.test_basic",
      status: "pass",
    }),
  ]);
  expect(readFileSync(argsLog, "utf8")).toContain("run\n");
  expect(readFileSync(argsLog, "utf8")).toContain("--\n--cpython-root\n");
});

test("passes only included CPython modules to the driver", async () => {
  const root = mkdtempSync(join(tmpdir(), "cpython-core-"));
  const argsLog = join(root, "elide.args");
  const manifest = join(root, "manifest.toml");
  const suitePath = join(root, "cpython");
  mkdirSync(suitePath, { recursive: true });
  writeFileSync(manifest, '[[group]]\nid = "core"\ninclude = ["test_re", "test_json"]\n');
  const elidePath = writeExecutable(
    join(root, "fake-elide.sh"),
    `#!/usr/bin/env bash
set -euo pipefail
printf '%s\n' "$@" > ${JSON.stringify(argsLog)}
printf '{"module":"test_re","case":"test_re.ReTests.test_basic","status":"pass"}\\n'
`,
  );
  const ctx: AdapterContext = {
    elide: { semver: "test", digest: "deadbeef" },
    elidePath,
    repoRoot: resolve(import.meta.dir, "../..", ".."),
    suitePath,
    include: ["test_re"],
    skipGlobs: [],
    threads: 1,
    settings: { manifest, timeoutMs: 5_000 },
    workspacePath: join(root, "workspace"),
  };

  await collect(runCpythonCore(ctx));

  const args = readFileSync(argsLog, "utf8");
  expect(args).toContain("test_re\n");
  expect(args).not.toContain("test_json\n");
});

test("streams CPython results before the driver exits", async () => {
  const root = mkdtempSync(join(tmpdir(), "cpython-core-"));
  const manifest = join(root, "manifest.toml");
  const suitePath = join(root, "cpython");
  const continueFile = join(root, "continue");
  mkdirSync(suitePath, { recursive: true });
  writeFileSync(manifest, '[[group]]\nid = "core"\ninclude = ["test_re"]\n');
  const elidePath = writeExecutable(
    join(root, "fake-elide.sh"),
    `#!/usr/bin/env bash
set -euo pipefail
printf '{"module":"test_re","case":"test_re.Streaming.test_first","status":"pass"}\\n'
while [[ ! -f ${JSON.stringify(continueFile)} ]]; do sleep 0.05; done
printf '{"module":"test_re","case":"test_re.Streaming.test_second","status":"pass"}\\n'
`,
  );
  const ctx: AdapterContext = {
    elide: { semver: "test", digest: "deadbeef" },
    elidePath,
    repoRoot: resolve(import.meta.dir, "../..", ".."),
    suitePath,
    include: [],
    skipGlobs: [],
    threads: 1,
    settings: { manifest, timeoutMs: 5_000 },
    workspacePath: join(root, "workspace"),
  };

  const iterator = runCpythonCore(ctx)[Symbol.asyncIterator]();
  await expect(iterator.next()).resolves.toMatchObject({
    value: expect.objectContaining({
      id: "test_re.Streaming.test_first",
      status: "pass",
    }),
    done: false,
  });

  writeFileSync(continueFile, "");

  await expect(iterator.next()).resolves.toMatchObject({
    value: expect.objectContaining({
      id: "test_re.Streaming.test_second",
      status: "pass",
    }),
    done: false,
  });
  await expect(iterator.next()).resolves.toEqual({ value: undefined, done: true });
});
