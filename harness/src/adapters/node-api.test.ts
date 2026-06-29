import { chmodSync, mkdirSync, mkdtempSync, readFileSync, realpathSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { expect, test } from "bun:test";
import type { AdapterContext } from "./types";
import { expandNodeApiManifestPaths, readNodeTestMetadata, runNodeApi } from "./node-api";

function collect<T>(items: AsyncIterable<T>): Promise<T[]> {
  return Array.fromAsync(items);
}

function writeExecutable(path: string, body: string): string {
  writeFileSync(path, body);
  chmodSync(path, 0o755);
  return path;
}

test("reads Node test flags and env metadata", () => {
  expect(readNodeTestMetadata("// Flags: --no-warnings --title=foo\n// Env: A=1 B=two\n")).toEqual({
    flags: ["--no-warnings", "--title=foo"],
    env: { A: "1", B: "two" },
  });
});

test("expands Node API manifest globs and include filters", () => {
  const root = mkdtempSync(join(tmpdir(), "node-api-"));
  mkdirSync(join(root, "test/parallel"), { recursive: true });
  writeFileSync(join(root, "test/parallel/test-path.js"), "");
  writeFileSync(join(root, "test/parallel/test-path-join.js"), "");
  writeFileSync(join(root, "test/parallel/test-process-env.js"), "");

  expect(expandNodeApiManifestPaths(root, ["test/parallel/test-path*.js"], [])).toEqual([
    "test/parallel/test-path-join.js",
    "test/parallel/test-path.js",
  ]);
  expect(expandNodeApiManifestPaths(root, ["test/parallel/test-*.js"], ["**/test-process*.js"])).toEqual([
    "test/parallel/test-process-env.js",
  ]);
});

test("runs selected Node API files through Elide", async () => {
  const root = mkdtempSync(join(tmpdir(), "node-api-"));
  const suitePath = join(root, "node");
  const workspacePath = join(root, "workspace");
  const manifest = join(root, "node-api.toml");
  const argsLog = join(root, "args.log");
  const envLog = join(root, "env.log");
  mkdirSync(join(suitePath, "test/parallel"), { recursive: true });
  mkdirSync(workspacePath, { recursive: true });
  writeFileSync(
    join(suitePath, "test/parallel/test-path.js"),
    "// Flags: --no-warnings\n// Env: NODE_TEST_SAMPLE=1\nconsole.log('ok')\n",
  );
  writeFileSync(manifest, '[[group]]\nid = "path"\ninclude = ["test/parallel/test-path*.js"]\n');
  const elidePath = writeExecutable(
    join(root, "fake-elide.sh"),
    `#!/usr/bin/env bash
set -euo pipefail
printf '%s\\n' "$@" > ${JSON.stringify(argsLog)}
printf 'NODE_TEST_KNOWN_GLOBALS=%s\\nNODE_SKIP_FLAG_CHECK=%s\\nNODE_API_OVERLAY_CWD=%s\\nNODE_TEST_DIR=%s\\nNODE_TEST_SAMPLE=%s\\n' "$NODE_TEST_KNOWN_GLOBALS" "$NODE_SKIP_FLAG_CHECK" "$NODE_API_OVERLAY_CWD" "$NODE_TEST_DIR" "$NODE_TEST_SAMPLE" > ${JSON.stringify(envLog)}
`,
  );
  const ctx: AdapterContext = {
    elide: { semver: "test", digest: "deadbeef" },
    elidePath,
    repoRoot: root,
    suitePath,
    include: [],
    skipGlobs: [],
    threads: 1,
    settings: { manifest, timeoutMs: 5_000, elideRunArgs: ["--sandbox", "--allow-read", "--allow-write"] },
    workspacePath,
  };

  const results = await collect(runNodeApi(ctx));

  expect(results).toEqual([
    expect.objectContaining({
      id: "test/parallel/test-path.js",
      status: "pass",
      meta: expect.objectContaining({
        suite: "node-api",
        category: "path",
        features: ["node:path"],
      }),
    }),
  ]);
  expect(readFileSync(argsLog, "utf8").trim().split(/\n/)).toEqual([
    "run",
    "--sandbox",
    "--allow-read",
    "--allow-write",
    "test/parallel/test-path.js",
    "--",
    "--no-warnings",
  ]);
  expect(readFileSync(envLog, "utf8")).toContain("NODE_SKIP_FLAG_CHECK=1\n");
  expect(readFileSync(envLog, "utf8")).toContain("NODE_TEST_KNOWN_GLOBALS=0\n");
  expect(readFileSync(envLog, "utf8")).toContain("NODE_API_OVERLAY_CWD=");
  expect(readFileSync(envLog, "utf8")).toContain("NODE_TEST_SAMPLE=1\n");
  expect(readFileSync(envLog, "utf8")).toContain(`${workspacePath}/node-test`);
});

test("runs Node API files from an overlay with common shims", async () => {
  const root = mkdtempSync(join(tmpdir(), "node-api-"));
  const suitePath = join(root, "node");
  const workspacePath = join(root, "workspace");
  const manifest = join(root, "node-api.toml");
  const cwdLog = join(root, "cwd.log");
  mkdirSync(join(suitePath, "test/common"), { recursive: true });
  mkdirSync(join(suitePath, "test/parallel"), { recursive: true });
  mkdirSync(workspacePath, { recursive: true });
  writeFileSync(
    join(suitePath, "test/common/index.js"),
    [
      "const net = require('net');",
      "const workerThreads = require('worker_threads');",
      "const nodeWorkerThreads = require('node:worker_threads');",
      "const hasIntl = process.config.variables.v8_enable_i18n_support;",
      "module.exports = { net, workerThreads, nodeWorkerThreads };",
      "",
    ].join("\n"),
  );
  writeFileSync(join(suitePath, "test/common/tmpdir.js"), "const childProcess = require('child_process');\nmodule.exports = {}\n");
  writeFileSync(join(suitePath, "test/parallel/test-path.js"), "require('../common')\n");
  writeFileSync(manifest, '[[group]]\nid = "path"\ninclude = ["test/parallel/test-path.js"]\n');
  const elidePath = writeExecutable(
    join(root, "fake-elide.sh"),
    `#!/usr/bin/env bash
set -euo pipefail
pwd > ${JSON.stringify(cwdLog)}
test -f test/common/_elide_shims/net.js
test -f test/common/_elide_shims/worker_threads.js
grep -q "_elide_shims/net.js" test/common/index.js
grep -q "_elide_shims/worker_threads.js" test/common/index.js
grep -q "__elideNodeApiProcess.config.variables ??=" test/common/index.js
grep -q "__elideNodeApiInstallUmaskShim" test/common/index.js
grep -q "__elideNodeApiInstallCwdShim" test/common/index.js
grep -q "globalThis.structuredClone ??=" test/common/index.js
! grep -q "process.umask(0o022)" test/common/index.js
! grep -q "child_process" test/common/tmpdir.js
`,
  );
  const ctx: AdapterContext = {
    elide: { semver: "test", digest: "deadbeef" },
    elidePath,
    repoRoot: root,
    suitePath,
    include: [],
    skipGlobs: [],
    threads: 1,
    settings: { manifest, timeoutMs: 5_000 },
    workspacePath,
  };

  const results = await collect(runNodeApi(ctx));

  expect(results[0]).toMatchObject({
    id: "test/parallel/test-path.js",
    status: "pass",
  });
  expect(realpathSync(readFileSync(cwdLog, "utf8").trim())).toBe(realpathSync(join(workspacePath, "node-api-overlay")));
  expect(readFileSync(join(suitePath, "test/common/index.js"), "utf8")).toContain("require('net')");
});

test("gives each task a unique tmpdir identity so parallel runs do not collide", async () => {
  const root = mkdtempSync(join(tmpdir(), "node-api-"));
  const suitePath = join(root, "node");
  const workspacePath = join(root, "workspace");
  const manifest = join(root, "node-api.toml");
  const idLog = join(root, "ids.log");
  mkdirSync(join(suitePath, "test/parallel"), { recursive: true });
  mkdirSync(workspacePath, { recursive: true });
  for (const name of ["test-fs-a", "test-fs-b", "test-fs-c", "test-fs-d"]) {
    writeFileSync(join(suitePath, `test/parallel/${name}.js`), "console.log('ok')\n");
  }
  writeFileSync(manifest, '[[group]]\nid = "fs"\ninclude = ["test/parallel/test-fs*.js"]\n');
  // The tmpdir shim derives its directory from TEST_SERIAL_ID || TEST_THREAD_ID || '0'.
  // Record whichever identity the harness provides so we can assert per-task uniqueness.
  const elidePath = writeExecutable(
    join(root, "fake-elide.sh"),
    `#!/usr/bin/env bash
set -euo pipefail
printf '%s\\n' "\${TEST_SERIAL_ID:-\${TEST_THREAD_ID:-MISSING}}" >> ${JSON.stringify(idLog)}
`,
  );
  const ctx: AdapterContext = {
    elide: { semver: "test", digest: "deadbeef" },
    elidePath,
    repoRoot: root,
    suitePath,
    include: [],
    skipGlobs: [],
    threads: 4,
    settings: { manifest, timeoutMs: 5_000 },
    workspacePath,
  };

  await collect(runNodeApi(ctx));

  const ids = readFileSync(idLog, "utf8").trim().split(/\n/);
  expect(ids).toHaveLength(4);
  expect(ids).not.toContain("MISSING");
  expect(new Set(ids).size).toBe(4);
});

test("maps Node common skip output to skip", async () => {
  const root = mkdtempSync(join(tmpdir(), "node-api-"));
  const suitePath = join(root, "node");
  const workspacePath = join(root, "workspace");
  const manifest = join(root, "node-api.toml");
  mkdirSync(join(suitePath, "test/parallel"), { recursive: true });
  mkdirSync(workspacePath, { recursive: true });
  writeFileSync(join(suitePath, "test/parallel/test-process.js"), "");
  writeFileSync(manifest, '[[group]]\nid = "process"\ninclude = ["test/parallel/test-process*.js"]\n');
  const elidePath = writeExecutable(
    join(root, "fake-elide.sh"),
    "#!/usr/bin/env bash\nprintf '1..0 # Skipped: unavailable\\n'\n",
  );
  const ctx: AdapterContext = {
    elide: { semver: "test", digest: "deadbeef" },
    elidePath,
    repoRoot: root,
    suitePath,
    include: [],
    skipGlobs: [],
    threads: 1,
    settings: { manifest, timeoutMs: 5_000 },
    workspacePath,
  };

  const results = await collect(runNodeApi(ctx));

  expect(results[0]).toMatchObject({
    id: "test/parallel/test-process.js",
    status: "skip",
  });
});
