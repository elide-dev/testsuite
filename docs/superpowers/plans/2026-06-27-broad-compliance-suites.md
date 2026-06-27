# Broad Compliance Suites Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add first-class WinterTC/WPT, CPython 3.12 pure-core, and javac/jtreg workloads to the existing Elide compliance harness.

**Architecture:** Keep one explicit adapter per suite and add small shared harness primitives for process execution, manifest loading, workspace paths, and adapter registration. All new suites emit the existing `TestResult` shape so expectations, ratchet, diff, impact, and reports continue to work unchanged.

**Tech Stack:** Bun, TypeScript, `bun:test`, `smol-toml`, `picomatch`, WPT `testharness.js`, CPython 3.12 `test`/`unittest`, OpenJDK `jtreg`.

## Global Constraints

- Suite order: WinterTC / WPT subset first, CPython pure-core subset second, OpenJDK langtools / javac via jtreg third.
- Optimize runtime API compliance and embedded compiler compliance before benchmarks.
- WPT source is a sparse checkout for selected API directories plus WPT harness resources.
- WinterTC starts with pure in-process APIs; fetch-related tests are the next WPT slice.
- CPython pins to Python 3.12.
- CPython uses case-level ids when feasible; module-level ids are allowed only for the first smoke spike.
- OpenJDK uses a shallow upstream checkout.
- jtreg covers compile/diagnostics and tests that run compiled programs.
- jtreg's Java execution command is configurable: use a regular JDK initially, preserve an Elide drop-in path.
- Do not claim Java SE certification; jtreg langtools is public regression/compiler coverage, not TCK/JCK.
- Keep Test262 behavior green after each task.

---

## File Structure

- `harness/src/adapters/index.ts` exports the adapter map used by the CLI.
- `harness/src/adapters/process.ts` owns generic subprocess execution, timeouts, output caps, and duration measurement.
- `harness/src/manifest.ts` parses suite manifest TOML files and validates stable relative paths.
- `harness/src/adapters/wpt-wintertc.ts` maps WPT bridge JSON lines into `TestResult`.
- `harness/src/adapters/cpython-core.ts` maps CPython driver JSON lines into `TestResult`.
- `harness/src/adapters/javac-jtreg.ts` maps jtreg result files/summaries into `TestResult`.
- `suites/drivers/wpt/wintertc-runner.js` is the runtime-side WPT testharness bridge.
- `suites/drivers/python/elide_regrtest_driver.py` emits structured JSON lines from selected CPython tests.
- `suites/drivers/jtreg/elide-javac-wrapper.sh` and `suites/drivers/jtreg/java-runner-wrapper.sh` provide configurable compiler/run commands for jtreg.
- `manifests/*.toml`, `expectations/*.toml`, and `registry.toml` define suite inclusion and baselines.
- `docker/harness.Dockerfile`, `docker/harness.local.Dockerfile`, and `bin/run` expose required host tools and suite version resolution.

---

### Task 1: Shared Harness Plumbing

**Files:**
- Create: `harness/src/adapters/index.ts`
- Create: `harness/src/adapters/process.ts`
- Create: `harness/src/adapters/process.test.ts`
- Create: `harness/src/manifest.ts`
- Create: `harness/src/manifest.test.ts`
- Modify: `harness/src/adapters/types.ts`
- Modify: `harness/src/cli.ts`
- Modify: `harness/src/cli.test.ts`
- Modify: `harness/src/registry.test.ts`

**Interfaces:**
- Produces: `runProcess(argv: string[], options: ProcessRunOptions): Promise<ProcessRunResult>`
- Produces: `loadManifest(path: string): SuiteManifest`
- Produces: `ADAPTERS: Record<string, Adapter>`
- Updates: `AdapterContext.settings: Record<string, unknown>`
- Updates: `AdapterContext.workspacePath: string`

- [ ] **Step 1: Write manifest loader tests**

Create `harness/src/manifest.test.ts`:

```ts
import { mkdtempSync, writeFileSync } from "node:fs";
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
```

- [ ] **Step 2: Implement manifest loader**

Create `harness/src/manifest.ts`:

```ts
import { readFileSync } from "node:fs";
import { parse } from "smol-toml";

export interface ManifestGroup {
  id: string;
  include: string[];
  tags: string[];
  reason?: string;
}

export interface SuiteManifest {
  groups: ManifestGroup[];
}

function assertRelativePath(path: string): void {
  if (path.startsWith("/") || path.includes("..")) {
    throw new Error(`manifest include must be relative: ${path}`);
  }
}

export function loadManifest(path: string): SuiteManifest {
  const raw = parse(readFileSync(path, "utf8")) as {
    group?: Array<{ id?: unknown; include?: unknown; tags?: unknown; reason?: unknown }>;
  };
  const groups = (raw.group ?? []).map((g) => {
    const id = String(g.id ?? "");
    if (!id) throw new Error("manifest group requires id");
    const include = Array.isArray(g.include) ? g.include.map(String) : [];
    if (!include.length) throw new Error(`manifest group ${id} requires include`);
    for (const p of include) assertRelativePath(p);
    return {
      id,
      include,
      tags: Array.isArray(g.tags) ? g.tags.map(String) : [],
      reason: g.reason === undefined ? undefined : String(g.reason),
    };
  });
  return { groups };
}
```

- [ ] **Step 3: Write process runner tests**

Create `harness/src/adapters/process.test.ts`:

```ts
import { test, expect } from "bun:test";
import { runProcess } from "./process";

test("captures stdout, stderr, exit code, and duration", async () => {
  const r = await runProcess(
    [process.execPath, "-e", "console.log('out'); console.error('err')"],
    { cwd: process.cwd(), timeoutMs: 5000 },
  );
  expect(r.exitCode).toBe(0);
  expect(r.stdout.trim()).toBe("out");
  expect(r.stderr.trim()).toBe("err");
  expect(r.durationMs).toBeGreaterThanOrEqual(0);
  expect(r.timedOut).toBe(false);
});

test("marks timeout and kills process", async () => {
  const r = await runProcess(
    [process.execPath, "-e", "setTimeout(() => {}, 10000)"],
    { cwd: process.cwd(), timeoutMs: 20 },
  );
  expect(r.timedOut).toBe(true);
  expect(r.exitCode).not.toBe(0);
});
```

- [ ] **Step 4: Implement process runner**

Create `harness/src/adapters/process.ts`:

```ts
export interface ProcessRunOptions {
  cwd: string;
  env?: Record<string, string | undefined>;
  timeoutMs: number;
  maxOutputBytes?: number;
}

export interface ProcessRunResult {
  command: string[];
  exitCode: number;
  signal?: string;
  stdout: string;
  stderr: string;
  durationMs: number;
  timedOut: boolean;
}

async function readCapped(stream: ReadableStream<Uint8Array>, cap: number): Promise<string> {
  const chunks: Uint8Array[] = [];
  let total = 0;
  for await (const chunk of stream) {
    const remaining = Math.max(0, cap - total);
    if (remaining > 0) chunks.push(chunk.slice(0, remaining));
    total += chunk.byteLength;
  }
  const merged = new Uint8Array(chunks.reduce((n, c) => n + c.byteLength, 0));
  let offset = 0;
  for (const chunk of chunks) {
    merged.set(chunk, offset);
    offset += chunk.byteLength;
  }
  return new TextDecoder().decode(merged);
}

export async function runProcess(argv: string[], options: ProcessRunOptions): Promise<ProcessRunResult> {
  const started = performance.now();
  const proc = Bun.spawn(argv, {
    cwd: options.cwd,
    env: { ...process.env, ...options.env },
    stdout: "pipe",
    stderr: "pipe",
  });

  let timedOut = false;
  const timer = setTimeout(() => {
    timedOut = true;
    proc.kill("SIGKILL");
  }, options.timeoutMs);

  const cap = options.maxOutputBytes ?? 1_000_000;
  const [stdout, stderr] = await Promise.all([
    readCapped(proc.stdout as ReadableStream<Uint8Array>, cap),
    readCapped(proc.stderr as ReadableStream<Uint8Array>, cap),
  ]);
  const exitCode = await proc.exited;
  clearTimeout(timer);

  return {
    command: argv,
    exitCode,
    stdout,
    stderr,
    durationMs: Math.round(performance.now() - started),
    timedOut,
  };
}
```

- [ ] **Step 5: Extend adapter context and move adapter registry**

Modify `harness/src/adapters/types.ts`:

```ts
import type { ElideIdentity, Result } from "../results/schema";
import type { WorkloadKind } from "../registry";

export interface AdapterContext {
  elide: ElideIdentity;
  elidePath: string;
  suitePath: string;
  include: string[];
  skipGlobs: string[];
  threads: number;
  settings: Record<string, unknown>;
  workspacePath: string;
}

export interface Adapter {
  id: string;
  kind: WorkloadKind;
  run(ctx: AdapterContext): AsyncIterable<Result>;
}
```

Create `harness/src/adapters/index.ts`:

```ts
import type { Adapter } from "./types";
import { test262Adapter } from "./test262";

export const ADAPTERS: Record<string, Adapter> = {
  test262: test262Adapter,
};
```

Modify `harness/src/cli.ts` imports and adapter lookup:

```ts
import { mkdirSync } from "node:fs";
import { join, resolve } from "node:path";
import { ADAPTERS } from "./adapters";
```

Remove the local `const ADAPTERS: Record<string, Adapter> = { test262: test262Adapter };` and remove unused imports for `test262Adapter` and `Adapter`.

When building `ctx`, include:

```ts
const workspacePath = resolve(".harness/work", wl.id);
mkdirSync(workspacePath, { recursive: true });

const ctx = {
  elide: identity,
  elidePath: o.elidePath,
  suitePath: join(o.suiteRoot, wl.id.replace(/^.*\//, "")),
  include: o.include
    ? o.include.split(",").map((s) => s.trim()).filter(Boolean)
    : (wl.settings.include as string[]) ?? ["test/**/*.js"],
  skipGlobs: skipGlobs(exp),
  threads: o.threads,
  settings: wl.settings,
  workspacePath,
};
```

- [ ] **Step 6: Update CLI tests for workspace/settings behavior**

Modify `harness/src/cli.test.ts`:

```ts
import { test, expect } from "bun:test";
import { parseArgs } from "./cli";
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
```

- [ ] **Step 7: Run focused tests**

Run:

```bash
cd harness
bun test src/manifest.test.ts src/adapters/process.test.ts src/cli.test.ts src/adapters/test262.test.ts
bun run typecheck
```

Expected: all tests pass and typecheck exits 0.

- [ ] **Step 8: Commit**

```bash
git add harness/src/adapters/index.ts harness/src/adapters/process.ts harness/src/adapters/process.test.ts harness/src/manifest.ts harness/src/manifest.test.ts harness/src/adapters/types.ts harness/src/cli.ts harness/src/cli.test.ts harness/src/registry.test.ts
git commit -m "feat(harness): add shared suite adapter plumbing"
```

---

### Task 2: WinterTC / WPT Pure-API Adapter

**Files:**
- Create: `harness/src/adapters/wpt-wintertc.ts`
- Create: `harness/src/adapters/wpt-wintertc.test.ts`
- Create: `harness/fixtures/wpt-wintertc.ndjson`
- Create: `suites/drivers/wpt/wintertc-runner.js`
- Create: `manifests/wintertc-wpt-2025.toml`
- Create: `expectations/wpt-wintertc.toml`
- Modify: `harness/src/adapters/index.ts`
- Modify: `registry.toml`
- Modify: `harness/src/registry.test.ts`

**Interfaces:**
- Consumes: `runProcess()`, `loadManifest()`, `AdapterContext.settings.manifest`
- Produces: `wptWintertcAdapter: Adapter`
- Produces: `parseWptLine(line: string): TestResult | null`

- [ ] **Step 1: Add WPT fixture and adapter mapping tests**

Create `harness/fixtures/wpt-wintertc.ndjson`:

```jsonl
{"path":"url/urlsearchparams.any.js","subtest":"URLSearchParams constructor","status":"PASS","durationMs":12,"category":"url"}
{"path":"encoding/textdecoder.any.js","subtest":"fatal flag","status":"FAIL","message":"assert_equals: expected true got false","durationMs":8,"category":"encoding"}
{"path":"streams/readable-streams/general.any.js","subtest":"setup","status":"ERROR","message":"ReferenceError: ReadableStream is not defined","durationMs":2,"category":"streams"}
{"path":"timers/timeout.any.js","subtest":"nested timeout","status":"SKIP","message":"structural skip","durationMs":0,"category":"timers"}
```

Create `harness/src/adapters/wpt-wintertc.test.ts`:

```ts
import { test, expect } from "bun:test";
import { parseWptLine, parseWptLines } from "./wpt-wintertc";

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
```

- [ ] **Step 2: Implement WPT adapter parser and runner**

Create `harness/src/adapters/wpt-wintertc.ts`:

```ts
import { join, resolve } from "node:path";
import picomatch from "picomatch";
import type { Adapter, AdapterContext } from "./types";
import type { TestResult } from "../results/schema";
import { loadManifest } from "../manifest";
import { runProcess } from "./process";

interface WptBridgeRecord {
  path: string;
  subtest?: string;
  status: "PASS" | "FAIL" | "ERROR" | "SKIP";
  message?: string;
  durationMs?: number;
  category?: string;
}

const STATUS: Record<WptBridgeRecord["status"], TestResult["status"]> = {
  PASS: "pass",
  FAIL: "fail",
  ERROR: "error",
  SKIP: "skip",
};

export function parseWptLine(line: string): TestResult | null {
  const s = line.trim();
  if (!s) return null;
  const r = JSON.parse(s) as WptBridgeRecord;
  const subtest = r.subtest ?? "<file>";
  return {
    kind: "test",
    id: `${r.path} :: ${subtest}`,
    status: STATUS[r.status],
    message: r.message,
    durationMs: r.durationMs,
    meta: {
      suite: "wpt-wintertc",
      upstreamPath: r.path,
      category: r.category ?? r.path.split("/")[0],
      runner: "wpt",
      subtest,
    },
  };
}

export function parseWptLines(text: string): TestResult[] {
  return text.split(/\r?\n/).map(parseWptLine).filter((r): r is TestResult => r !== null);
}

async function* runWptWintertc(ctx: AdapterContext): AsyncIterable<TestResult> {
  const manifestPath = String(ctx.settings.manifest ?? "");
  if (!manifestPath) throw new Error("wpt-wintertc requires settings.manifest");
  const manifest = loadManifest(resolve(manifestPath));
  const skip = ctx.skipGlobs.map((g) => picomatch(g));
  const runner = join(process.cwd(), "suites/drivers/wpt/wintertc-runner.js");

  for (const group of manifest.groups) {
    for (const rel of group.include) {
      const result = await runProcess(
        ["node", runner, "--suite", ctx.suitePath, "--test", rel, "--category", group.id, "--elide", ctx.elidePath],
        { cwd: process.cwd(), timeoutMs: Number(ctx.settings.timeoutMs ?? 60_000) },
      );
      if (result.timedOut || result.exitCode !== 0) {
        yield {
          kind: "test",
          id: `${rel} :: <file>`,
          status: "error",
          message: result.timedOut ? "WPT bridge timed out" : result.stderr || result.stdout,
          durationMs: result.durationMs,
          meta: { suite: "wpt-wintertc", upstreamPath: rel, category: group.id, runner: "wpt", subtest: "<file>" },
        };
        continue;
      }
      for (const r of parseWptLines(result.stdout)) {
        yield skip.some((m) => m(String(r.meta?.upstreamPath))) ? { ...r, status: "skip" } : r;
      }
    }
  }
}

export const wptWintertcAdapter: Adapter = {
  id: "wpt-wintertc",
  kind: "test",
  run: runWptWintertc,
};
```

- [ ] **Step 3: Add WPT runner bridge**

Create `suites/drivers/wpt/wintertc-runner.js`:

```js
#!/usr/bin/env node
import { mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { spawnSync } from "node:child_process";

function arg(name, fallback = "") {
  const i = process.argv.indexOf(name);
  return i >= 0 ? process.argv[i + 1] : fallback;
}

const suite = arg("--suite");
const test = arg("--test");
const category = arg("--category", test.split("/")[0]);
const elide = arg("--elide", "/opt/elide/bin/elide");
if (!suite || !test) {
  console.error("usage: wintertc-runner.js --suite <wpt> --test <path> --category <id> --elide <path>");
  process.exit(2);
}

const harness = readFileSync(join(suite, "resources/testharness.js"), "utf8");
const source = readFileSync(join(suite, test), "utf8");
const out = join(mkdtempSync(join(tmpdir(), "wpt-elide-")), "case.js");

writeFileSync(out, `
${harness}
setup({ explicit_done: true });
add_completion_callback((tests) => {
  for (const t of tests) {
    const rec = {
      path: ${JSON.stringify(test)},
      subtest: t.name,
      status: t.status === 0 ? "PASS" : "FAIL",
      message: t.message || undefined,
      category: ${JSON.stringify(category)}
    };
    console.log(JSON.stringify(rec));
  }
});
${source}
done();
`);

const child = spawnSync(elide, ["run", "--quiet", out], { encoding: "utf8" });
if (child.stdout) process.stdout.write(child.stdout);
if (child.stderr) process.stderr.write(child.stderr);
process.exit(child.status ?? 1);
```

- [ ] **Step 4: Register WPT workload and baseline files**

Modify `harness/src/adapters/index.ts`:

```ts
import type { Adapter } from "./types";
import { test262Adapter } from "./test262";
import { wptWintertcAdapter } from "./wpt-wintertc";

export const ADAPTERS: Record<string, Adapter> = {
  test262: test262Adapter,
  "wpt-wintertc": wptWintertcAdapter,
};
```

Append to `registry.toml`:

```toml

[[workload]]
id = "wpt-wintertc"
kind = "test"
adapter = "wpt-wintertc"
path = "suites/wpt"

  [workload.settings]
  manifest = "manifests/wintertc-wpt-2025.toml"
  timeoutMs = 60000
```

Create `manifests/wintertc-wpt-2025.toml`:

```toml
# Initial pure in-process WinterTC API slice. Fetch-related APIs are added after
# the WPT bridge is stable.

[[group]]
id = "url"
include = ["url/urlsearchparams.any.js"]
tags = ["wintertc", "pure-api"]

[[group]]
id = "encoding"
include = ["encoding/textdecoder.any.js", "encoding/textencoder.any.js"]
tags = ["wintertc", "pure-api"]
```

Create `expectations/wpt-wintertc.toml`:

```toml
# WinterTC / WPT expectations baseline.
# Keys are picomatch globs over WPT-relative test paths, without the subtest suffix.

[skip]

[fail]
```

Modify `harness/src/registry.test.ts`:

```ts
import { test, expect } from "bun:test";
import { loadRegistry } from "./registry";

test("loads test262 workload from registry.toml", () => {
  const ws = loadRegistry(`${import.meta.dir}/../../registry.toml`);
  const t262 = ws.find((w) => w.id === "test262");
  expect(t262).toBeDefined();
  expect(t262!.kind).toBe("test");
  expect(t262!.adapter).toBe("test262");
  expect(t262!.path).toBe("suites/test262");
});

test("loads wpt-wintertc workload from registry.toml", () => {
  const ws = loadRegistry(`${import.meta.dir}/../../registry.toml`);
  const wpt = ws.find((w) => w.id === "wpt-wintertc");
  expect(wpt).toBeDefined();
  expect(wpt!.kind).toBe("test");
  expect(wpt!.adapter).toBe("wpt-wintertc");
  expect(wpt!.path).toBe("suites/wpt");
  expect(wpt!.settings.manifest).toBe("manifests/wintertc-wpt-2025.toml");
});
```

- [ ] **Step 5: Add sparse WPT checkout instructions**

Run:

```bash
git submodule add --depth 1 https://github.com/web-platform-tests/wpt suites/wpt
git -C suites/wpt sparse-checkout init --cone
git -C suites/wpt sparse-checkout set resources url encoding
```

Expected: `.gitmodules` contains `suites/wpt`; `suites/wpt/resources/testharness.js` exists.

- [ ] **Step 6: Run focused tests**

Run:

```bash
cd harness
bun test src/adapters/wpt-wintertc.test.ts src/manifest.test.ts src/registry.test.ts
bun run typecheck
```

Expected: tests pass and typecheck exits 0.

- [ ] **Step 7: Commit**

```bash
git add .gitmodules suites/wpt registry.toml expectations/wpt-wintertc.toml manifests/wintertc-wpt-2025.toml suites/drivers/wpt/wintertc-runner.js harness/fixtures/wpt-wintertc.ndjson harness/src/adapters/wpt-wintertc.ts harness/src/adapters/wpt-wintertc.test.ts harness/src/adapters/index.ts harness/src/registry.test.ts
git commit -m "feat(wpt): add WinterTC pure API suite"
```

---

### Task 3: CPython 3.12 Pure-Core Adapter

**Files:**
- Create: `harness/src/adapters/cpython-core.ts`
- Create: `harness/src/adapters/cpython-core.test.ts`
- Create: `harness/fixtures/cpython-core.ndjson`
- Create: `suites/drivers/python/elide_regrtest_driver.py`
- Create: `manifests/cpython-core.toml`
- Create: `expectations/cpython-core.toml`
- Modify: `harness/src/adapters/index.ts`
- Modify: `registry.toml`
- Modify: `harness/src/registry.test.ts`

**Interfaces:**
- Consumes: `runProcess()`, `loadManifest()`, `AdapterContext.settings.manifest`
- Produces: `cpythonCoreAdapter: Adapter`
- Produces: `parseCpythonLine(line: string): TestResult | null`

- [ ] **Step 1: Add CPython fixture and parser tests**

Create `harness/fixtures/cpython-core.ndjson`:

```jsonl
{"module":"test_re","case":"test_re.ReTests.test_basic_re_sub","status":"pass","durationMs":4}
{"module":"test_json","case":"test_json.TestDecode.test_failures","status":"fail","message":"AssertionError: bad decode","durationMs":7}
{"module":"test_ast","case":"test_ast.AST_Tests.test_snippets","status":"error","message":"RuntimeError: compiler crashed","durationMs":3}
{"module":"test_decimal","case":"test_decimal","status":"skip","message":"resource disabled","durationMs":0}
```

Create `harness/src/adapters/cpython-core.test.ts`:

```ts
import { test, expect } from "bun:test";
import { parseCpythonLines } from "./cpython-core";

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
```

- [ ] **Step 2: Implement CPython adapter**

Create `harness/src/adapters/cpython-core.ts`:

```ts
import { join, resolve } from "node:path";
import picomatch from "picomatch";
import type { Adapter, AdapterContext } from "./types";
import type { TestResult } from "../results/schema";
import { loadManifest } from "../manifest";
import { runProcess } from "./process";

interface CpythonRecord {
  module: string;
  case: string;
  status: TestResult["status"];
  message?: string;
  durationMs?: number;
}

export function parseCpythonLine(line: string): TestResult | null {
  const s = line.trim();
  if (!s) return null;
  const r = JSON.parse(s) as CpythonRecord;
  return {
    kind: "test",
    id: r.case || r.module,
    status: r.status,
    message: r.message,
    durationMs: r.durationMs,
    meta: {
      suite: "cpython-core",
      upstreamPath: r.module,
      category: r.module,
      runner: "regrtest",
      subtest: r.case || r.module,
    },
  };
}

export function parseCpythonLines(text: string): TestResult[] {
  return text.split(/\r?\n/).map(parseCpythonLine).filter((r): r is TestResult => r !== null);
}

async function* runCpythonCore(ctx: AdapterContext): AsyncIterable<TestResult> {
  const manifestPath = String(ctx.settings.manifest ?? "");
  if (!manifestPath) throw new Error("cpython-core requires settings.manifest");
  const manifest = loadManifest(resolve(manifestPath));
  const modules = manifest.groups.flatMap((g) => g.include);
  const skip = ctx.skipGlobs.map((g) => picomatch(g));
  const driver = join(process.cwd(), "suites/drivers/python/elide_regrtest_driver.py");
  const result = await runProcess(
    [ctx.elidePath, "run", driver, "--cpython-root", ctx.suitePath, ...modules],
    { cwd: process.cwd(), timeoutMs: Number(ctx.settings.timeoutMs ?? 120_000) },
  );

  if (result.timedOut || result.exitCode !== 0) {
    yield {
      kind: "test",
      id: "cpython-core::<runner>",
      status: "error",
      message: result.timedOut ? "CPython driver timed out" : result.stderr || result.stdout,
      durationMs: result.durationMs,
      meta: { suite: "cpython-core", upstreamPath: "<runner>", category: "runner", runner: "regrtest", subtest: "<runner>" },
    };
    return;
  }

  for (const r of parseCpythonLines(result.stdout)) {
    yield skip.some((m) => m(String(r.meta?.upstreamPath))) ? { ...r, status: "skip" } : r;
  }
}

export const cpythonCoreAdapter: Adapter = {
  id: "cpython-core",
  kind: "test",
  run: runCpythonCore,
};
```

- [ ] **Step 3: Add CPython JSON driver**

Create `suites/drivers/python/elide_regrtest_driver.py`:

```python
import argparse
import importlib
import json
import sys
import time
import unittest


def emit(record):
    print(json.dumps(record, sort_keys=True), flush=True)


class JsonResult(unittest.TextTestResult):
    def _case_id(self, test):
        return test.id() if hasattr(test, "id") else str(test)

    def addSuccess(self, test):
        super().addSuccess(test)
        emit({"module": test.__class__.__module__, "case": self._case_id(test), "status": "pass"})

    def addFailure(self, test, err):
        super().addFailure(test, err)
        emit({"module": test.__class__.__module__, "case": self._case_id(test), "status": "fail", "message": self._exc_info_to_string(err, test)})

    def addError(self, test, err):
        super().addError(test, err)
        emit({"module": test.__class__.__module__, "case": self._case_id(test), "status": "error", "message": self._exc_info_to_string(err, test)})

    def addSkip(self, test, reason):
        super().addSkip(test, reason)
        emit({"module": test.__class__.__module__, "case": self._case_id(test), "status": "skip", "message": reason})


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--cpython-root", required=True)
    parser.add_argument("modules", nargs="+")
    args = parser.parse_args()
    sys.path.insert(0, args.cpython_root + "/Lib")

    ok = True
    for module_name in args.modules:
        started = time.monotonic()
        try:
            module = importlib.import_module("test." + module_name)
            suite = unittest.defaultTestLoader.loadTestsFromModule(module)
            result = unittest.TextTestRunner(stream=sys.stderr, resultclass=JsonResult, verbosity=0).run(suite)
            ok = ok and result.wasSuccessful()
        except unittest.SkipTest as exc:
            emit({"module": module_name, "case": module_name, "status": "skip", "message": str(exc), "durationMs": int((time.monotonic() - started) * 1000)})
        except BaseException as exc:
            ok = False
            emit({"module": module_name, "case": module_name, "status": "error", "message": repr(exc), "durationMs": int((time.monotonic() - started) * 1000)})
    return 0 if ok else 1


if __name__ == "__main__":
    raise SystemExit(main())
```

- [ ] **Step 4: Register CPython workload and baseline files**

Modify `harness/src/adapters/index.ts`:

```ts
import type { Adapter } from "./types";
import { test262Adapter } from "./test262";
import { wptWintertcAdapter } from "./wpt-wintertc";
import { cpythonCoreAdapter } from "./cpython-core";

export const ADAPTERS: Record<string, Adapter> = {
  test262: test262Adapter,
  "wpt-wintertc": wptWintertcAdapter,
  "cpython-core": cpythonCoreAdapter,
};
```

Append to `registry.toml`:

```toml

[[workload]]
id = "cpython-core"
kind = "test"
adapter = "cpython-core"
path = "suites/cpython"

  [workload.settings]
  manifest = "manifests/cpython-core.toml"
  timeoutMs = 120000
```

Create `manifests/cpython-core.toml`:

```toml
# CPython 3.12 pure-core smoke slice.

[[group]]
id = "core"
include = ["test_builtin", "test_re", "test_json", "test_ast"]
tags = ["python312", "pure-core"]
```

Create `expectations/cpython-core.toml`:

```toml
# CPython 3.12 pure-core expectations baseline.
# Keys are picomatch globs over CPython module names or unittest case ids.

[skip]

[fail]
```

Add a `registry.test.ts` case:

```ts
test("loads cpython-core workload from registry.toml", () => {
  const ws = loadRegistry(`${import.meta.dir}/../../registry.toml`);
  const py = ws.find((w) => w.id === "cpython-core");
  expect(py).toBeDefined();
  expect(py!.kind).toBe("test");
  expect(py!.adapter).toBe("cpython-core");
  expect(py!.path).toBe("suites/cpython");
  expect(py!.settings.manifest).toBe("manifests/cpython-core.toml");
});
```

- [ ] **Step 5: Add CPython 3.12 source**

Run:

```bash
git submodule add --depth 1 --branch 3.12 https://github.com/python/cpython suites/cpython
```

Expected: `suites/cpython/Lib/test` exists.

- [ ] **Step 6: Run focused tests**

Run:

```bash
cd harness
bun test src/adapters/cpython-core.test.ts src/manifest.test.ts src/registry.test.ts
bun run typecheck
```

Expected: tests pass and typecheck exits 0.

- [ ] **Step 7: Commit**

```bash
git add .gitmodules suites/cpython registry.toml expectations/cpython-core.toml manifests/cpython-core.toml suites/drivers/python/elide_regrtest_driver.py harness/fixtures/cpython-core.ndjson harness/src/adapters/cpython-core.ts harness/src/adapters/cpython-core.test.ts harness/src/adapters/index.ts harness/src/registry.test.ts
git commit -m "feat(python): add CPython 3.12 pure core suite"
```

---

### Task 4: javac / jtreg Adapter

**Files:**
- Create: `harness/src/adapters/javac-jtreg.ts`
- Create: `harness/src/adapters/javac-jtreg.test.ts`
- Create: `harness/fixtures/jtreg/JTreport/text/summary.txt`
- Create: `suites/drivers/jtreg/elide-javac-wrapper.sh`
- Create: `suites/drivers/jtreg/java-runner-wrapper.sh`
- Create: `manifests/javac-langtools.toml`
- Create: `expectations/javac-jtreg.toml`
- Modify: `harness/src/adapters/index.ts`
- Modify: `registry.toml`
- Modify: `harness/src/registry.test.ts`

**Interfaces:**
- Consumes: `runProcess()`, `loadManifest()`, `AdapterContext.settings.manifest`
- Produces: `javacJtregAdapter: Adapter`
- Produces: `parseJtregSummary(text: string): TestResult[]`

- [ ] **Step 1: Add jtreg fixture and parser tests**

Create `harness/fixtures/jtreg/JTreport/text/summary.txt`:

```text
Passed: tools/javac/diags/ExamplePass.java
Failed: tools/javac/generics/ExampleFail.java
Error: tools/javac/patterns/ExampleError.java
Not run: tools/javac/modules/ExampleSkip.java
```

Create `harness/src/adapters/javac-jtreg.test.ts`:

```ts
import { test, expect } from "bun:test";
import { parseJtregSummary } from "./javac-jtreg";

const summary = await Bun.file(`${import.meta.dir}/../../fixtures/jtreg/JTreport/text/summary.txt`).text();

test("maps jtreg summary lines to TestResult records", () => {
  const out = parseJtregSummary(summary);
  expect(out).toHaveLength(4);
  expect(out[0]).toMatchObject({
    kind: "test",
    id: "tools/javac/diags/ExamplePass.java",
    status: "pass",
    meta: {
      suite: "javac-jtreg",
      upstreamPath: "tools/javac/diags/ExamplePass.java",
      category: "tools/javac/diags",
      runner: "jtreg",
      subtest: "tools/javac/diags/ExamplePass.java",
    },
  });
  expect(out[1].status).toBe("fail");
  expect(out[2].status).toBe("error");
  expect(out[3].status).toBe("skip");
});
```

- [ ] **Step 2: Implement jtreg adapter**

Create `harness/src/adapters/javac-jtreg.ts`:

```ts
import { existsSync, readFileSync } from "node:fs";
import { join, resolve } from "node:path";
import picomatch from "picomatch";
import type { Adapter, AdapterContext } from "./types";
import type { TestResult } from "../results/schema";
import { loadManifest } from "../manifest";
import { runProcess } from "./process";

const STATUS: Record<string, TestResult["status"]> = {
  Passed: "pass",
  Failed: "fail",
  Error: "error",
  "Not run": "skip",
};

function categoryOf(path: string): string {
  return path.split("/").slice(0, 3).join("/");
}

export function parseJtregSummary(text: string): TestResult[] {
  const results: TestResult[] = [];
  for (const line of text.split(/\r?\n/)) {
    const m = /^(Passed|Failed|Error|Not run):\s+(.+)$/.exec(line.trim());
    if (!m) continue;
    const path = m[2];
    results.push({
      kind: "test",
      id: path,
      status: STATUS[m[1]],
      meta: {
        suite: "javac-jtreg",
        upstreamPath: path,
        category: categoryOf(path),
        runner: "jtreg",
        subtest: path,
      },
    });
  }
  return results;
}

async function* runJavacJtreg(ctx: AdapterContext): AsyncIterable<TestResult> {
  const manifestPath = String(ctx.settings.manifest ?? "");
  if (!manifestPath) throw new Error("javac-jtreg requires settings.manifest");
  const manifest = loadManifest(resolve(manifestPath));
  const tests = manifest.groups.flatMap((g) => g.include);
  const skip = ctx.skipGlobs.map((g) => picomatch(g));
  const workDir = join(ctx.workspacePath, "JTwork");
  const reportDir = join(ctx.workspacePath, "JTreport");
  const javacWrapper = join(process.cwd(), "suites/drivers/jtreg/elide-javac-wrapper.sh");
  const javaWrapper = join(process.cwd(), "suites/drivers/jtreg/java-runner-wrapper.sh");
  const jtreg = String(ctx.settings.jtregPath ?? "jtreg");

  const args = [
    jtreg,
    "-verbose:summary",
    "-retain:fail,error",
    `-w:${workDir}`,
    `-r:${reportDir}`,
    `-javacoption:-J-Delide.javac.wrapper=${javacWrapper}`,
    `-javaoption:-Delide.java.wrapper=${javaWrapper}`,
    ...tests.map((t) => join(ctx.suitePath, "test/langtools", t)),
  ];
  const result = await runProcess(args, {
    cwd: ctx.suitePath,
    timeoutMs: Number(ctx.settings.timeoutMs ?? 300_000),
    env: {
      ELIDE_JAVAC: ctx.elidePath,
      JTREG_JAVA: String(ctx.settings.javaRunner ?? "java"),
    },
  });

  const summaryPath = join(reportDir, "text/summary.txt");
  if (!existsSync(summaryPath)) {
    yield {
      kind: "test",
      id: "javac-jtreg::<runner>",
      status: "error",
      message: result.timedOut ? "jtreg timed out" : result.stderr || result.stdout,
      durationMs: result.durationMs,
      meta: { suite: "javac-jtreg", upstreamPath: "<runner>", category: "runner", runner: "jtreg", subtest: "<runner>" },
    };
    return;
  }

  for (const r of parseJtregSummary(readFileSync(summaryPath, "utf8"))) {
    yield skip.some((m) => m(String(r.meta?.upstreamPath))) ? { ...r, status: "skip" } : r;
  }
}

export const javacJtregAdapter: Adapter = {
  id: "javac-jtreg",
  kind: "test",
  run: runJavacJtreg,
};
```

- [ ] **Step 3: Add configurable compiler and runner wrappers**

Create `suites/drivers/jtreg/elide-javac-wrapper.sh`:

```bash
#!/usr/bin/env bash
set -euo pipefail
exec "${ELIDE_JAVAC:-/opt/elide/bin/elide}" java compile "$@"
```

Create `suites/drivers/jtreg/java-runner-wrapper.sh`:

```bash
#!/usr/bin/env bash
set -euo pipefail
exec "${JTREG_JAVA:-java}" "$@"
```

Run:

```bash
chmod +x suites/drivers/jtreg/elide-javac-wrapper.sh suites/drivers/jtreg/java-runner-wrapper.sh
```

Expected: both wrapper files are executable.

- [ ] **Step 4: Register jtreg workload and baseline files**

Modify `harness/src/adapters/index.ts`:

```ts
import type { Adapter } from "./types";
import { test262Adapter } from "./test262";
import { wptWintertcAdapter } from "./wpt-wintertc";
import { cpythonCoreAdapter } from "./cpython-core";
import { javacJtregAdapter } from "./javac-jtreg";

export const ADAPTERS: Record<string, Adapter> = {
  test262: test262Adapter,
  "wpt-wintertc": wptWintertcAdapter,
  "cpython-core": cpythonCoreAdapter,
  "javac-jtreg": javacJtregAdapter,
};
```

Append to `registry.toml`:

```toml

[[workload]]
id = "javac-jtreg"
kind = "test"
adapter = "javac-jtreg"
path = "suites/openjdk"

  [workload.settings]
  manifest = "manifests/javac-langtools.toml"
  timeoutMs = 300000
  jtregPath = "jtreg"
  javaRunner = "java"
```

Create `manifests/javac-langtools.toml`:

```toml
# Initial javac langtools slice. Paths are relative to OpenJDK test/langtools.

[[group]]
id = "javac-diags"
include = ["tools/javac/diags"]
tags = ["javac", "diagnostics"]
```

Create `expectations/javac-jtreg.toml`:

```toml
# javac / jtreg expectations baseline.
# Keys are picomatch globs over jtreg test paths such as tools/javac/diags/**.

[skip]

[fail]
```

Add a `registry.test.ts` case:

```ts
test("loads javac-jtreg workload from registry.toml", () => {
  const ws = loadRegistry(`${import.meta.dir}/../../registry.toml`);
  const javac = ws.find((w) => w.id === "javac-jtreg");
  expect(javac).toBeDefined();
  expect(javac!.kind).toBe("test");
  expect(javac!.adapter).toBe("javac-jtreg");
  expect(javac!.path).toBe("suites/openjdk");
  expect(javac!.settings.manifest).toBe("manifests/javac-langtools.toml");
  expect(javac!.settings.javaRunner).toBe("java");
});
```

- [ ] **Step 5: Add shallow OpenJDK source**

Run:

```bash
git submodule add --depth 1 https://github.com/openjdk/jdk suites/openjdk
```

Expected: `suites/openjdk/test/langtools/tools/javac` exists.

- [ ] **Step 6: Run focused tests**

Run:

```bash
cd harness
bun test src/adapters/javac-jtreg.test.ts src/manifest.test.ts src/registry.test.ts
bun run typecheck
```

Expected: tests pass and typecheck exits 0.

- [ ] **Step 7: Commit**

```bash
git add .gitmodules suites/openjdk registry.toml expectations/javac-jtreg.toml manifests/javac-langtools.toml suites/drivers/jtreg/elide-javac-wrapper.sh suites/drivers/jtreg/java-runner-wrapper.sh harness/fixtures/jtreg/JTreport/text/summary.txt harness/src/adapters/javac-jtreg.ts harness/src/adapters/javac-jtreg.test.ts harness/src/adapters/index.ts harness/src/registry.test.ts
git commit -m "feat(java): add javac jtreg suite"
```

---

### Task 5: Launcher, Image, and Documentation Wiring

**Files:**
- Modify: `bin/run`
- Modify: `docker/harness.Dockerfile`
- Modify: `docker/harness.local.Dockerfile`
- Modify: `README.md`
- Modify: `harness/src/report/render.ts`
- Test: `harness/src/report/render.test.ts`

**Interfaces:**
- Consumes: `registry.toml` workloads and suite paths.
- Produces: Docker images with host tools for WPT, CPython driver setup, and jtreg.
- Produces: `bin/run` suite-version resolution for sparse WPT, CPython, and OpenJDK checkouts.

- [ ] **Step 1: Update report test for category metadata stability**

Modify `harness/src/report/render.test.ts` by adding a test:

```ts
import { test, expect } from "bun:test";
import { renderSuiteReport } from "./render";
import type { RunMeta, TestResult } from "../results/schema";
import { compare } from "../expectations/compare";

test("renders non-test262 suite reports with normalized counts", () => {
  const meta: RunMeta = {
    workload: "wpt-wintertc",
    kind: "test",
    elide: { semver: "1.0.0", digest: "abc123" },
    startedAt: "2026-06-27T00:00:00.000Z",
    finishedAt: "2026-06-27T00:01:00.000Z",
    suiteVersion: "wpt-sparse",
  };
  const tests: TestResult[] = [
    { kind: "test", id: "url/a.any.js :: a", status: "pass", meta: { category: "url" } },
    { kind: "test", id: "encoding/b.any.js :: b", status: "fail", message: "bad", meta: { category: "encoding" } },
  ];
  const md = renderSuiteReport(meta, compare(tests, { entries: [], ratchet: new Set() }));
  expect(md).toContain("# wpt-wintertc");
  expect(md).toContain("Pass rate: 1/2");
  expect(md).toContain("url/a.any.js :: a");
});
```

If `render.test.ts` already imports these names, merge imports instead of duplicating them.

- [ ] **Step 2: Update Dockerfiles with host tools**

Modify `docker/harness.Dockerfile` and `docker/harness.local.Dockerfile` package install sections to include:

```dockerfile
RUN apt-get update \
 && apt-get install -y --no-install-recommends \
      ca-certificates \
      curl \
      default-jdk \
      git \
      jtreg7 \
      python3 \
 && rm -rf /var/lib/apt/lists/*
```

Expected: `docker build` can find `python3`, `java`, and `jtreg` from Debian packages.

- [ ] **Step 3: Update `bin/run` suite version handling**

Modify the `SUITE_VERSION` block in `bin/run`:

```bash
SUITE_VERSION="$(git -C "$ROOT/suites/$SUITE" rev-parse HEAD 2>/dev/null || echo unknown)"
```

Replace it with:

```bash
if [[ -d "$ROOT/suites/$SUITE/.git" || -f "$ROOT/suites/$SUITE/.git" ]]; then
  SUITE_VERSION="$(git -C "$ROOT/suites/$SUITE" rev-parse HEAD 2>/dev/null || echo unknown)"
else
  SUITE_VERSION="unknown"
fi
```

Keep the existing docker mounts unchanged. The sparse WPT checkout, CPython source, and OpenJDK checkout all live under `suites/`, so `-v "$ROOT/suites:/work/suites:ro"` continues to work.

- [ ] **Step 4: Update README suite documentation**

Modify `README.md` sections:

Add to the introduction after the Test262 paragraph:

```md
Next suites are added in this order:

1. `wpt-wintertc` - a sparse Web Platform Tests subset for WinterTC / ECMA-429 pure in-process APIs.
2. `cpython-core` - CPython 3.12 pure-core language and standard-library tests.
3. `javac-jtreg` - OpenJDK langtools javac tests through jtreg, compiling with Elide and initially running generated programs with a regular JDK.
```

Add to Running:

```bash
./bin/run --elide nightly --suite wpt-wintertc --threads 8
./bin/run --elide nightly --suite cpython-core --threads 8
./bin/run --elide nightly --suite javac-jtreg --threads 4
```

Add to Layout:

```text
manifests/              curated suite slices for WPT, CPython, and jtreg
suites/drivers/         small bridge/wrapper programs used by external suites
```

- [ ] **Step 5: Run full harness verification**

Run:

```bash
cd harness
bun test
bun run typecheck
```

Expected: all unit tests pass and typecheck exits 0.

Run a Test262 smoke slice to ensure Task 1 did not regress existing behavior:

```bash
./bin/run --elide nightly --suite test262 --include 'test/language/types/boolean/**/*.js'
```

Expected: harness completes and writes a report. Exit code may be 0 or 1 depending on current expectations, but it must not exit 2 with a harness/setup error.

- [ ] **Step 6: Commit**

```bash
git add bin/run docker/harness.Dockerfile docker/harness.local.Dockerfile README.md harness/src/report/render.ts harness/src/report/render.test.ts
git commit -m "chore: wire broad suite tooling into runner image"
```

---

## Self-Review

- Spec coverage: Task 1 covers shared plumbing; Task 2 covers sparse WPT and pure WinterTC APIs before fetch; Task 3 covers CPython 3.12 with case-level ids; Task 4 covers shallow OpenJDK jtreg with configurable javac/java; Task 5 covers image, launcher, and docs.
- Red-flag scan: no marker tokens or unspecified implementation steps remain; each task has exact files, commands, and expected results.
- Type consistency: adapters use `Adapter`, `AdapterContext`, `TestResult`, `runProcess`, and `loadManifest` consistently across tasks.
