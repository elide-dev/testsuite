import { test, expect, spyOn } from "bun:test";
import { chmodSync, mkdirSync, mkdtempSync, readdirSync, readFileSync, realpathSync, writeFileSync } from "node:fs";
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

test("ignores JSON printed by CPython tests that is not a harness record", () => {
  expect(parseCpythonLines('{"status":"ok","value":1}\n{"module":"test_re","case":"test_re.Case.test","status":"pass"}\n')).toEqual([
    expect.objectContaining({
      id: "test_re.Case.test",
      status: "pass",
    }),
  ]);
});

test("ignores CPython running records", () => {
  expect(parseCpythonLines('{"module":"test_re","case":"test_re.Case.test_slow","status":"running"}\n')).toEqual([]);
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
    skipGlobs: ["test_re.ReTests.test_look_behind_overflow"],
    threads: 1,
    settings: { manifest, timeoutMs: 5_000, elideRunArgs: ["--sandbox", "--allow-write"] },
    workspacePath: join(root, "workspace"),
  };

  const results = await collect(runCpythonCore(ctx));

  expect(results).toEqual([
    expect.objectContaining({
      id: "test_re.ReTests.test_basic",
      status: "pass",
    }),
  ]);
  const argv = readFileSync(argsLog, "utf8").trim().split("\n");
  expect(argv).toContain("run");
  expect(argv).toContain("--sandbox");
  expect(argv).toContain("--allow-write");
  expect(argv).toContain("--");
  expect(argv).toContain("--cpython-root");
  expect(argv).toContain("--skip");
  expect(argv).toContain("test_re.ReTests.test_look_behind_overflow");
  expect(argv.indexOf("--sandbox")).toBeGreaterThan(argv.indexOf("run"));
  expect(argv.indexOf("--allow-write")).toBeGreaterThan(argv.indexOf("--sandbox"));
  expect(argv.indexOf("--allow-write")).toBeLessThan(argv.indexOf("--"));
  expect(argv.indexOf("--skip")).toBeGreaterThan(argv.indexOf("--cpython-root"));
  expect(argv.indexOf("--skip")).toBeLessThan(argv.indexOf("test_re"));
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

test("runs CPython shards from writable workspace directories", async () => {
  const root = mkdtempSync(join(tmpdir(), "cpython-core-"));
  const cwdLog = join(root, "cwd.log");
  const manifest = join(root, "manifest.toml");
  const suitePath = join(root, "cpython");
  const workspacePath = join(root, "workspace");
  mkdirSync(suitePath, { recursive: true });
  writeFileSync(manifest, '[[group]]\nid = "core"\ninclude = ["test_re"]\n');
  const elidePath = writeExecutable(
    join(root, "fake-elide.sh"),
    `#!/usr/bin/env bash
set -euo pipefail
pwd > ${JSON.stringify(cwdLog)}
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
    workspacePath,
  };

  await collect(runCpythonCore(ctx));

  expect(realpathSync(readFileSync(cwdLog, "utf8").trim())).toBe(realpathSync(join(workspacePath, "shard-0")));
});

test("passes CPython progress flag and forwards progress stderr under --log", async () => {
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
printf 'progress: importing test_re\\n' >&2
sleep 0.08
printf '{"module":"test_re","case":"test_re.ReTests.test_basic","status":"running"}\\n'
sleep 0.08
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
    log: true,
    settings: { manifest, timeoutMs: 5_000, progressIntervalMs: 20 },
    workspacePath: join(root, "workspace"),
  };
  const stderr = spyOn(process.stderr, "write").mockImplementation(() => true);
  let writes = "";
  try {
    await collect(runCpythonCore(ctx));
    writes = stderr.mock.calls.map((call) => String(call[0])).join("");
  } finally {
    stderr.mockRestore();
  }

  const argv = readFileSync(argsLog, "utf8").trim().split("\n");
  expect(argv).toContain("--progress-stderr");
  expect(writes).toContain("progress: importing test_re");
  expect(writes).toContain("progress: still running CPython shard");
  expect(writes).toContain("active importing test_re");
  expect(writes).toContain("active test_re.ReTests.test_basic");
});

test("ignores stray stdout while still streaming valid CPython results", async () => {
  const root = mkdtempSync(join(tmpdir(), "cpython-core-"));
  const manifest = join(root, "manifest.toml");
  const suitePath = join(root, "cpython");
  mkdirSync(suitePath, { recursive: true });
  writeFileSync(manifest, '[[group]]\nid = "core"\ninclude = ["test_re"]\n');
  const elidePath = writeExecutable(
    join(root, "fake-elide.sh"),
    `#!/usr/bin/env bash
set -euo pipefail
printf '{"status":"ok","value":1}\\n'
printf '{"module":"test_re","case":"test_re.Case.test_one","status":"pass"}\\n'
printf '{"module":"test_re","case":"test_re.Case.test_two","status":"fail","message":"boom"}\\n'
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

  expect(results.map((result) => [result.id, result.status])).toEqual([
    ["test_re.Case.test_one", "pass"],
    ["test_re.Case.test_two", "fail"],
  ]);
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

test("times out the active CPython case instead of hanging the shard indefinitely", async () => {
  const root = mkdtempSync(join(tmpdir(), "cpython-core-"));
  const manifest = join(root, "manifest.toml");
  const suitePath = join(root, "cpython");
  mkdirSync(suitePath, { recursive: true });
  writeFileSync(manifest, '[[group]]\nid = "core"\ninclude = ["test_re"]\n');
  const elidePath = writeExecutable(
    join(root, "fake-elide.sh"),
    `#!/usr/bin/env bash
set -euo pipefail
printf '{"module":"test_re","case":"test_re.Hangs.test_forever","status":"running"}\\n'
exec sleep 5
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
    settings: { manifest, timeoutMs: 5_000, caseTimeoutMs: 50 },
    workspacePath: join(root, "workspace"),
  };

  const results = await collect(runCpythonCore(ctx));

  expect(results).toEqual([
    expect.objectContaining({
      id: "test_re.Hangs.test_forever",
      status: "error",
      message: expect.stringContaining("timed out after 50ms"),
      meta: expect.objectContaining({
        upstreamPath: "test_re",
        subtest: "test_re.Hangs.test_forever",
      }),
    }),
  ]);
});

test("shards CPython modules across worker processes", async () => {
  const root = mkdtempSync(join(tmpdir(), "cpython-core-"));
  const manifest = join(root, "manifest.toml");
  const suitePath = join(root, "cpython");
  mkdirSync(suitePath, { recursive: true });
  writeFileSync(manifest, '[[group]]\nid = "core"\ninclude = ["test_a", "test_b", "test_c"]\n');
  const elidePath = writeExecutable(
    join(root, "fake-elide.sh"),
    `#!/usr/bin/env bash
set -euo pipefail
modules=()
for arg in "$@"; do
  case "$arg" in
    test_*) modules+=("$arg") ;;
  esac
done
printf '%s\\n' "\${modules[@]}" > ${JSON.stringify(root)}/shard-$$.args
for module in "\${modules[@]}"; do
  printf '{"module":"%s","case":"%s.Case.test","status":"pass"}\\n' "$module" "$module"
done
`,
  );
  const ctx: AdapterContext = {
    elide: { semver: "test", digest: "deadbeef" },
    elidePath,
    repoRoot: resolve(import.meta.dir, "../..", ".."),
    suitePath,
    include: [],
    skipGlobs: [],
    threads: 2,
    settings: { manifest, timeoutMs: 5_000 },
    workspacePath: join(root, "workspace"),
  };

  const results = await collect(runCpythonCore(ctx));

  expect(results.map((result) => result.id).sort()).toEqual([
    "test_a.Case.test",
    "test_b.Case.test",
    "test_c.Case.test",
  ]);
  const shardLogs = readdirSync(root).filter((entry) => /^shard-\d+\.args$/.test(entry));
  expect(shardLogs).toHaveLength(2);
  const shardModules = shardLogs
    .flatMap((entry) => readFileSync(join(root, entry), "utf8").trim().split(/\n/).filter(Boolean))
    .sort();
  expect(shardModules).toEqual(["test_a", "test_b", "test_c"]);
});
