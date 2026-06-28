import { chmodSync, mkdirSync, mkdtempSync, readFileSync, writeFileSync } from "node:fs";
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
printf 'NODE_SKIP_FLAG_CHECK=%s\\nNODE_TEST_DIR=%s\\nNODE_TEST_SAMPLE=%s\\n' "$NODE_SKIP_FLAG_CHECK" "$NODE_TEST_DIR" "$NODE_TEST_SAMPLE" > ${JSON.stringify(envLog)}
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
    "--no-warnings",
    "test/parallel/test-path.js",
  ]);
  expect(readFileSync(envLog, "utf8")).toContain("NODE_SKIP_FLAG_CHECK=1\n");
  expect(readFileSync(envLog, "utf8")).toContain("NODE_TEST_SAMPLE=1\n");
  expect(readFileSync(envLog, "utf8")).toContain(`${workspacePath}/node-test`);
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
