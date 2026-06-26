# Elide Compliance Harness Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Run Test262 against a pinned Elide build inside a Docker image, compare results to a checked-in expectations baseline, and emit committed Markdown reports — with a workload-neutral core that leaves room for more suites and future benchmarks.

**Architecture:** A Bun/TypeScript CLI orchestrates per-suite *adapters* that emit a normalized result stream. The Test262 adapter shells out to the stock `test262-harness` driving a **custom eshost `elide` host** (verified feasible by spike). Results are compared against `expectations/test262.toml`; reports are written under `reports/<semver>/<digest>/`. A combined Docker image (pinned Elide + Node + Bun + harness) makes each `elide run` a fast local subprocess.

**Tech Stack:** Bun, TypeScript, `test262-harness` + `eshost` (Node), `smol-toml`, `picomatch`, `zod`, Docker, GitHub Actions.

## Global Constraints

- Harness language: **Bun/TypeScript**. Bun runs `.ts` directly — no build step. Tests use `bun:test`.
- `test262-harness` and `eshost` are **Node** tools — the harness image ships **both** Node 22 and Bun. Our CLI runs under Bun; `test262-harness` runs under Node.
- The custom eshost host is installed into `eshost` via **Bun's native patch mechanism** (`patchedDependencies` in `package.json`), patch file under `harness/patches/`.
- eshost auto-discovers host types by scanning `eshost/lib/agents/*.js`; the host is named **`elide`** → files `eshost/lib/agents/elide.js` and `eshost/runtimes/elide.js`.
- Elide CLI: entrypoint `/opt/elide/bin/elide`; run a file with `elide run --quiet <file>`; version via `elide --version` (first token like `1.3.5+20260626.bfb28f6`). Errors print a **box to stdout** (stderr empty); exit code non-zero on throw.
- Elide image: `ghcr.io/elide-dev/elide` (tag `nightly`); Elide installed at `/opt/elide`.
- Reports keyed `reports/<semver>/<short-digest>/` (short-digest = first 12 hex chars of the image/binary sha256).
- Result statuses: `pass | fail | skip | error`. A run is green **iff zero regressions**.
- Commit after every task. Work on branch `compliance-harness`.

---

## File Structure

```
suites/test262/                     # git submodule (tc39/test262) — Task 1
registry.toml                       # workload registry — Task 1
expectations/test262.toml           # baseline — Task 4 (seeded Task 12)
harness/
  package.json tsconfig.json bun.lockb
  patches/eshost@*.patch            # Task 5
  fixtures/test262/                 # spike fixtures + sample harness json — Tasks 5,6
  src/
    cli.ts                          # Task 8
    registry.ts                     # Task 1
    elide.ts                        # Task 3
    results/schema.ts               # Task 2
    results/store.ts                # Task 2
    expectations/load.ts            # Task 4
    expectations/compare.ts         # Task 4
    adapters/types.ts               # Task 2
    adapters/test262.ts             # Task 6
    eshost-elide/agent.elide.js     # Task 5 (source of the patch)
    eshost-elide/runtime.elide.js   # Task 5 (source of the patch)
    report/render.ts                # Task 7
    report/index.ts                 # Task 7
docker/harness.Dockerfile           # Task 9
docker/harness.local.Dockerfile     # Task 9
bin/run                             # Task 9
.devcontainer/devcontainer.json     # Task 10
.devcontainer/Dockerfile            # Task 10
.github/workflows/compliance.yml    # Task 11
```

---

## Task 1: Repo scaffolding, Test262 submodule, harness package

**Files:**
- Create: `.gitignore`, `registry.toml`, `harness/package.json`, `harness/tsconfig.json`, `harness/src/registry.ts`, `harness/src/registry.test.ts`
- Submodule: `suites/test262`

**Interfaces:**
- Produces: `loadRegistry(path: string): Workload[]`, types `Workload`, `WorkloadKind`.

- [ ] **Step 1: Add the Test262 submodule**

```bash
cd /Users/sam/workspace/labs/testsuite
git submodule add https://github.com/tc39/test262.git suites/test262
git -C suites/test262 checkout main
```
Expected: `.gitmodules` created, `suites/test262/test/` populated, `suites/test262/package.json` present.

- [ ] **Step 2: Write `.gitignore`**

```
node_modules/
*.log
.DS_Store
harness/.bun/
```

- [ ] **Step 3: Write `harness/package.json`**

```json
{
  "name": "elide-compliance-harness",
  "private": true,
  "type": "module",
  "scripts": {
    "test": "bun test",
    "typecheck": "tsc --noEmit"
  },
  "dependencies": {
    "test262-harness": "^11.0.0",
    "smol-toml": "^1.3.1",
    "picomatch": "^4.0.2",
    "zod": "^3.23.8"
  },
  "devDependencies": {
    "typescript": "^5.5.0",
    "@types/picomatch": "^3.0.1"
  }
}
```

- [ ] **Step 4: Write `harness/tsconfig.json`**

```json
{
  "compilerOptions": {
    "target": "ESNext",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "types": ["bun-types"],
    "strict": true,
    "noEmit": true,
    "skipLibCheck": true,
    "allowJs": true
  },
  "include": ["src"]
}
```

- [ ] **Step 5: Install deps**

Run: `cd harness && bun install`
Expected: `bun.lockb` created, `node_modules/test262-harness` present.

- [ ] **Step 6: Write the failing test `harness/src/registry.test.ts`**

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
```

- [ ] **Step 7: Run it — expect FAIL** (module `./registry` not found)

Run: `cd harness && bun test src/registry.test.ts`

- [ ] **Step 8: Write `registry.toml`**

```toml
# Registry of workloads run by the harness. kind = "test" | "benchmark".
[[workload]]
id = "test262"
kind = "test"
adapter = "test262"
path = "suites/test262"

  [workload.settings]
  # Globs (relative to path) to execute. Skip globs live in expectations/.
  include = ["test/language/**/*.js", "test/built-ins/**/*.js"]
```

- [ ] **Step 9: Write `harness/src/registry.ts`**

```ts
import { readFileSync } from "node:fs";
import { parse } from "smol-toml";

export type WorkloadKind = "test" | "benchmark";

export interface Workload {
  id: string;
  kind: WorkloadKind;
  adapter: string;
  path: string;
  settings: Record<string, unknown>;
}

export function loadRegistry(path: string): Workload[] {
  const raw = parse(readFileSync(path, "utf8")) as {
    workload?: Array<Record<string, unknown>>;
  };
  return (raw.workload ?? []).map((w) => ({
    id: String(w.id),
    kind: w.kind as WorkloadKind,
    adapter: String(w.adapter),
    path: String(w.path),
    settings: (w.settings as Record<string, unknown>) ?? {},
  }));
}
```

- [ ] **Step 10: Run the test — expect PASS**

Run: `cd harness && bun test src/registry.test.ts`

- [ ] **Step 11: Commit**

```bash
git add .gitmodules suites/test262 .gitignore registry.toml harness/
git commit -m "feat: scaffold harness package + test262 submodule + workload registry"
```

---

## Task 2: Normalized result schema, adapter interface, results store

**Files:**
- Create: `harness/src/results/schema.ts`, `harness/src/adapters/types.ts`, `harness/src/results/store.ts`, `harness/src/results/store.test.ts`

**Interfaces:**
- Produces: types `TestStatus`, `TestResult`, `BenchResult`, `Result`, `ElideIdentity`, `RunMeta`; `Adapter`, `AdapterContext`; `writeResults(dir, meta, results)`, `readResults(dir)`.
- Consumes: `WorkloadKind` from `../registry`.

- [ ] **Step 1: Write `harness/src/results/schema.ts`**

```ts
import type { WorkloadKind } from "../registry";

export type TestStatus = "pass" | "fail" | "skip" | "error";

export interface ElideIdentity {
  semver: string;
  digest: string; // sha256 hex (no algo prefix)
}

export interface RunMeta {
  workload: string;
  kind: WorkloadKind;
  elide: ElideIdentity;
  startedAt: string;
  finishedAt: string;
  suiteVersion?: string; // submodule commit
}

export interface TestResult {
  kind: "test";
  id: string; // e.g. "language/types/number/foo.js default"
  status: TestStatus;
  message?: string;
  durationMs?: number;
  meta?: Record<string, unknown>; // features, flags, chapter
}

export interface BenchResult {
  kind: "benchmark";
  id: string;
  metric: string;
  value: number;
  unit: string;
  variance?: number;
  samples?: number;
}

export type Result = TestResult | BenchResult;

export function isTest(r: Result): r is TestResult {
  return r.kind === "test";
}
```

- [ ] **Step 2: Write `harness/src/adapters/types.ts`**

```ts
import type { ElideIdentity, Result } from "../results/schema";
import type { WorkloadKind } from "../registry";

export interface AdapterContext {
  elide: ElideIdentity;
  elidePath: string; // path to elide binary inside the container
  suitePath: string; // absolute path to the suite root (e.g. /work/suites/test262)
  include: string[]; // globs relative to suitePath, from registry
  skipGlobs: string[]; // file-path globs to exclude, from expectations [skip]
  threads: number;
}

export interface Adapter {
  id: string;
  kind: WorkloadKind;
  run(ctx: AdapterContext): AsyncIterable<Result>;
}
```

- [ ] **Step 3: Write the failing test `harness/src/results/store.test.ts`**

```ts
import { test, expect } from "bun:test";
import { mkdtempSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { writeResults, readResults } from "./store";
import type { RunMeta, TestResult } from "./schema";

const meta: RunMeta = {
  workload: "test262",
  kind: "test",
  elide: { semver: "1.3.5", digest: "abcd1234ef56" },
  startedAt: "2026-06-26T00:00:00Z",
  finishedAt: "2026-06-26T00:01:00Z",
};

test("round-trips results through gzip", async () => {
  const dir = mkdtempSync(join(tmpdir(), "store-"));
  const results: TestResult[] = [
    { kind: "test", id: "a.js default", status: "pass" },
    { kind: "test", id: "b.js strict mode", status: "fail", message: "boom" },
  ];
  await writeResults(dir, meta, results);
  const back = await readResults(dir);
  expect(back.meta.workload).toBe("test262");
  expect(back.results).toHaveLength(2);
  expect(back.results[1]).toMatchObject({ id: "b.js strict mode", status: "fail" });
});
```

- [ ] **Step 4: Run it — expect FAIL**

Run: `cd harness && bun test src/results/store.test.ts`

- [ ] **Step 5: Write `harness/src/results/store.ts`**

```ts
import { join } from "node:path";
import type { Result, RunMeta } from "./schema";

export interface StoredRun {
  meta: RunMeta;
  results: Result[];
}

export async function writeResults(
  dir: string,
  meta: RunMeta,
  results: Result[],
): Promise<void> {
  const payload: StoredRun = { meta, results };
  const json = JSON.stringify(payload);
  const gz = Bun.gzipSync(new TextEncoder().encode(json));
  await Bun.write(join(dir, "results.json.gz"), gz);
}

export async function readResults(dir: string): Promise<StoredRun> {
  const gz = await Bun.file(join(dir, "results.json.gz")).arrayBuffer();
  const json = new TextDecoder().decode(Bun.gunzipSync(new Uint8Array(gz)));
  return JSON.parse(json) as StoredRun;
}
```

- [ ] **Step 6: Run the test — expect PASS**

Run: `cd harness && bun test src/results/store.test.ts`

- [ ] **Step 7: Commit**

```bash
git add harness/src/results harness/src/adapters
git commit -m "feat: normalized result schema, adapter interface, gzip results store"
```

---

## Task 3: Elide identity (version parsing)

**Files:**
- Create: `harness/src/elide.ts`, `harness/src/elide.test.ts`

**Interfaces:**
- Produces: `parseElideVersion(stdout: string): string`, `resolveIdentity(elidePath: string, digest: string): Promise<ElideIdentity>`.
- Consumes: `ElideIdentity` from `./results/schema`.

- [ ] **Step 1: Write the failing test `harness/src/elide.test.ts`**

```ts
import { test, expect } from "bun:test";
import { parseElideVersion } from "./elide";

test("parses semver from elide --version output", () => {
  expect(parseElideVersion("1.3.5+20260626.bfb28f6\n")).toBe("1.3.5+20260626.bfb28f6");
});

test("parses semver when wrapped in extra text", () => {
  expect(parseElideVersion("Elide v1.3.5+abc (something)\n")).toBe("1.3.5+abc");
});

test("falls back to 'unknown' when no version present", () => {
  expect(parseElideVersion("no version here")).toBe("unknown");
});
```

- [ ] **Step 2: Run it — expect FAIL**

Run: `cd harness && bun test src/elide.test.ts`

- [ ] **Step 3: Write `harness/src/elide.ts`**

```ts
import type { ElideIdentity } from "./results/schema";

const SEMVER_RE = /\d+\.\d+\.\d+(?:[-+][0-9A-Za-z.+-]+)?/;

export function parseElideVersion(stdout: string): string {
  const m = stdout.match(SEMVER_RE);
  return m ? m[0] : "unknown";
}

export async function resolveIdentity(
  elidePath: string,
  digest: string,
): Promise<ElideIdentity> {
  const proc = Bun.spawn([elidePath, "--version"], {
    stdout: "pipe",
    stderr: "pipe",
  });
  const out = await new Response(proc.stdout).text();
  await proc.exited;
  return { semver: parseElideVersion(out), digest };
}
```

- [ ] **Step 4: Run the test — expect PASS**

Run: `cd harness && bun test src/elide.test.ts`

- [ ] **Step 5: Commit**

```bash
git add harness/src/elide.ts harness/src/elide.test.ts
git commit -m "feat: elide version parsing + identity resolution"
```

---

## Task 4: Expectations baseline (load + compare)

**Files:**
- Create: `harness/src/expectations/load.ts`, `harness/src/expectations/compare.ts`, `harness/src/expectations/compare.test.ts`, `expectations/test262.toml` (empty baseline)

**Interfaces:**
- Produces: `loadExpectations(path)`, `expectedFor(exp, filePath)`, `skipGlobs(exp)`, `compare(results, exp)`; types `ExpectedStatus`, `Expectations`, `Comparison`.
- Consumes: `TestResult` from `../results/schema`.

- [ ] **Step 1: Write empty `expectations/test262.toml`**

```toml
# Test262 expectations baseline. A run is green iff there are no regressions.
# [skip] entries are excluded from execution. [fail] entries are expected failures.
# Keys are picomatch globs over the test file path (no scenario suffix).
[skip]

[fail]
```

- [ ] **Step 2: Write the failing test `harness/src/expectations/compare.test.ts`**

```ts
import { test, expect } from "bun:test";
import { parseExpectations } from "./load";
import { compare } from "./compare";
import type { TestResult } from "../results/schema";

const toml = `
[skip]
"intl402/**" = "Intl unsupported"
[fail]
"language/expressions/tail/**" = "no PTC"
`;
const exp = parseExpectations(toml);

const mk = (id: string, status: TestResult["status"]): TestResult => ({
  kind: "test",
  id,
  status,
});

test("regression: expected pass, actual fail", () => {
  const c = compare([mk("language/foo.js default", "fail")], exp);
  expect(c.regressions.map((r) => r.id)).toEqual(["language/foo.js default"]);
  expect(c.counts.fail).toBe(1);
});

test("expected fail that fails is not a regression", () => {
  const c = compare([mk("language/expressions/tail/a.js default", "fail")], exp);
  expect(c.regressions).toHaveLength(0);
  expect(c.counts.fail).toBe(1);
});

test("new pass: expected fail, actual pass", () => {
  const c = compare([mk("language/expressions/tail/a.js default", "pass")], exp);
  expect(c.newPasses.map((r) => r.id)).toEqual(["language/expressions/tail/a.js default"]);
  expect(c.counts.pass).toBe(1);
});

test("skip glob overrides status to skip", () => {
  const c = compare([mk("intl402/x.js default", "fail")], exp);
  expect(c.regressions).toHaveLength(0);
  expect(c.counts.skip).toBe(1);
});

test("most specific glob wins", () => {
  const exp2 = parseExpectations(`
[fail]
"built-ins/**" = "broad"
"built-ins/Array/specific.js" = "narrow"
`);
  // narrow entry is the longer glob -> still a [fail]; passing => new pass
  const c = compare([mk("built-ins/Array/specific.js default", "pass")], exp2);
  expect(c.newPasses).toHaveLength(1);
});
```

- [ ] **Step 3: Run it — expect FAIL**

Run: `cd harness && bun test src/expectations/compare.test.ts`

- [ ] **Step 4: Write `harness/src/expectations/load.ts`**

```ts
import { readFileSync } from "node:fs";
import { parse } from "smol-toml";

export type ExpectedStatus = "pass" | "fail" | "skip";

export interface ExpectationEntry {
  glob: string;
  expected: ExpectedStatus;
  reason: string;
}

export interface Expectations {
  entries: ExpectationEntry[];
}

export function parseExpectations(toml: string): Expectations {
  const raw = parse(toml) as {
    skip?: Record<string, string>;
    fail?: Record<string, string>;
  };
  const entries: ExpectationEntry[] = [];
  for (const [glob, reason] of Object.entries(raw.skip ?? {})) {
    entries.push({ glob, expected: "skip", reason });
  }
  for (const [glob, reason] of Object.entries(raw.fail ?? {})) {
    entries.push({ glob, expected: "fail", reason });
  }
  return { entries };
}

export function loadExpectations(path: string): Expectations {
  return parseExpectations(readFileSync(path, "utf8"));
}

export function skipGlobs(exp: Expectations): string[] {
  return exp.entries.filter((e) => e.expected === "skip").map((e) => e.glob);
}
```

- [ ] **Step 5: Write `harness/src/expectations/compare.ts`**

```ts
import picomatch from "picomatch";
import type { Expectations, ExpectationEntry, ExpectedStatus } from "./load";
import type { TestResult } from "../results/schema";

export interface Comparison {
  regressions: TestResult[]; // expected pass, actual fail/error
  newPasses: TestResult[]; // expected fail, actual pass
  counts: { pass: number; fail: number; skip: number; error: number; total: number };
}

// Strip the scenario suffix (" default" / " strict mode") to get the file path.
function filePathOf(id: string): string {
  return id.replace(/ (default|strict mode)$/, "");
}

interface CompiledEntry extends ExpectationEntry {
  isMatch: (p: string) => boolean;
}

function compile(exp: Expectations): CompiledEntry[] {
  return exp.entries
    .map((e) => ({ ...e, isMatch: picomatch(e.glob) }))
    // most specific (longest glob string) first
    .sort((a, b) => b.glob.length - a.glob.length);
}

function expectedFor(entries: CompiledEntry[], filePath: string): ExpectedStatus {
  for (const e of entries) if (e.isMatch(filePath)) return e.expected;
  return "pass";
}

export function compare(results: TestResult[], exp: Expectations): Comparison {
  const entries = compile(exp);
  const c: Comparison = {
    regressions: [],
    newPasses: [],
    counts: { pass: 0, fail: 0, skip: 0, error: 0, total: 0 },
  };
  for (const r of results) {
    c.counts.total++;
    const expected = expectedFor(entries, filePathOf(r.id));
    if (expected === "skip") {
      c.counts.skip++;
      continue;
    }
    if (r.status === "pass") {
      c.counts.pass++;
      if (expected === "fail") c.newPasses.push(r);
    } else {
      // fail or error
      if (r.status === "error") c.counts.error++;
      else c.counts.fail++;
      if (expected !== "fail") c.regressions.push(r);
    }
  }
  return c;
}
```

- [ ] **Step 6: Run the test — expect PASS**

Run: `cd harness && bun test src/expectations/compare.test.ts`

- [ ] **Step 7: Commit**

```bash
git add harness/src/expectations expectations/test262.toml
git commit -m "feat: expectations baseline load + compare (regressions/new-passes)"
```

---

## Task 5: Custom eshost `elide` host (the spike, productionized)

**Files:**
- Create: `harness/src/eshost-elide/runtime.elide.js`, `harness/src/eshost-elide/agent.elide.js`, `harness/fixtures/test262/{package.json,harness/sta.js,harness/assert.js,test/pass.js,test/neg.js}`, `harness/patches/` (generated), `harness/scripts/install-elide-host.sh`
- Modify: `harness/package.json` (add `patchedDependencies`)

**Interfaces:**
- Produces: an eshost host type `elide` usable via `test262-harness --host-type elide --host-path <elide>`.

This task requires Docker + the Elide nightly image (`ghcr.io/elide-dev/elide:nightly`). It is verified by running two fixtures end-to-end.

- [ ] **Step 1: Write `harness/src/eshost-elide/runtime.elide.js`**

This file becomes `eshost/runtimes/elide.js`. eshost minifies it and substitutes `$SOURCE`.

```js
// eshost runtime for the Elide host. Prepended to every compiled test.
// Provides print() (Elide lacks it) and a minimal $262.
if (typeof globalThis.print !== "function") {
  globalThis.print = function () {
    console.log(Array.prototype.join.call(arguments, " "));
  };
}
var $262 = {
  global: globalThis,
  destroy: function () {},
  evalScript: function (code) {
    try {
      (0, eval)(code);
      return { type: "normal", value: undefined };
    } catch (e) {
      return { type: "throw", value: e };
    }
  },
  getGlobal: function (name) {
    return this.global[name];
  },
  setGlobal: function (name, value) {
    this.global[name] = value;
  },
  IsHTMLDDA: function () {
    return {};
  },
  source: $SOURCE,
  createRealm: function () {
    throw new Test262Error("$262.createRealm not supported by the Elide host");
  },
  detachArrayBuffer: function () {
    throw new Test262Error("$262.detachArrayBuffer not supported by the Elide host");
  },
  gc: function () {
    throw new Test262Error("$262.gc not supported by the Elide host");
  },
};
```

- [ ] **Step 2: Write `harness/src/eshost-elide/agent.elide.js`**

This file becomes `eshost/lib/agents/elide.js`. It extends `ConsoleAgent`, invokes `elide run --quiet <file>`, and de-boxes Elide's stdout error into a parseable `stderr`.

```js
"use strict";
const fs = require("fs");
const runtimePath = require("../runtime-path");
const ConsoleAgent = require("../ConsoleAgent");

// Box-drawing chars Elide uses to frame errors on stdout.
const BOX = /[─-╿]/;
// "SyntaxError: ...", "ReferenceError: ...", "Error: ..." after de-boxing.
const ERR = /^([A-Za-z][A-Za-z0-9]*Error)(?::\s*([\s\S]*?))?$/m;

class ElideAgent extends ConsoleAgent {
  constructor(options) {
    super(options);
    // hostPath is the elide binary; produce `elide run --quiet <file>`.
    this.args.unshift("run", "--quiet");
  }

  // Elide prints errors as a box on stdout; eshost expects errors on stderr.
  normalizeResult(result) {
    if (!BOX.test(result.stdout)) return result;
    const kept = [];
    const deboxed = [];
    for (const line of result.stdout.split(/\r?\n/)) {
      if (BOX.test(line)) {
        const s = line.replace(/[─-╿]/g, " ").trim();
        if (s) deboxed.push(s);
      } else {
        kept.push(line);
      }
    }
    const joined = deboxed.join("\n");
    const m = joined.match(ERR);
    result.stderr = m ? (m[2] ? `${m[1]}: ${m[2]}` : m[1]) : joined;
    result.stdout = kept.join("\n");
    return result;
  }

  parseError(str) {
    const m = str.match(ERR);
    if (!m) return null;
    return { name: m[1], message: (m[2] || "").trim(), stack: [] };
  }
}

ElideAgent.runtime = fs.readFileSync(runtimePath.for("elide"), "utf8");
module.exports = ElideAgent;
```

- [ ] **Step 3: Create the install script `harness/scripts/install-elide-host.sh`**

Copies the host files into the installed eshost package. Used to author the Bun patch and as a fallback.

```bash
#!/usr/bin/env bash
set -euo pipefail
here="$(cd "$(dirname "$0")/.." && pwd)"
eshost="$here/node_modules/eshost"
cp "$here/src/eshost-elide/agent.elide.js" "$eshost/lib/agents/elide.js"
cp "$here/src/eshost-elide/runtime.elide.js" "$eshost/runtimes/elide.js"
echo "Installed elide host into $eshost"
```

- [ ] **Step 4: Author a Bun patch so the host persists across installs**

```bash
cd harness
chmod +x scripts/install-elide-host.sh
bun patch eshost                 # makes node_modules/eshost editable, prints the temp path
./scripts/install-elide-host.sh  # copy our two files into the editable copy
bun patch --commit node_modules/eshost   # writes harness/patches/eshost@<ver>.patch + updates package.json
```
Expected: `harness/patches/eshost@*.patch` exists and `package.json` gains a `patchedDependencies` entry for eshost.

- [ ] **Step 5: Verify the patch reapplies cleanly**

```bash
cd harness && rm -rf node_modules && bun install
test -f node_modules/eshost/lib/agents/elide.js && echo "HOST PRESENT"
```
Expected: prints `HOST PRESENT`.

- [ ] **Step 6: Create the two fixtures + minimal test262 dir**

```bash
mkdir -p harness/fixtures/test262/harness harness/fixtures/test262/test
echo '{"name":"test262","version":"0.0.1"}' > harness/fixtures/test262/package.json
curl -fsSL https://raw.githubusercontent.com/tc39/test262/main/harness/sta.js \
  -o harness/fixtures/test262/harness/sta.js
curl -fsSL https://raw.githubusercontent.com/tc39/test262/main/harness/assert.js \
  -o harness/fixtures/test262/harness/assert.js
cat > harness/fixtures/test262/test/pass.js <<'EOF'
/*---
description: basic arithmetic passes
---*/
assert.sameValue(1 + 1, 2, "addition");
EOF
cat > harness/fixtures/test262/test/neg.js <<'EOF'
/*---
description: must be a syntax error
negative:
  phase: parse
  type: SyntaxError
---*/
var var var;
EOF
```

- [ ] **Step 7: Verify both fixtures resolve correctly through the real harness**

This runs `test262-harness` (Node) with `--host-type elide`, pointing `--host-path` at a wrapper that execs Elide in the nightly container. Create the wrapper:

```bash
cat > harness/fixtures/elide-host.sh <<'EOF'
#!/usr/bin/env bash
# eshost calls: <hostPath> run --quiet <file>. Mount the file's dir, run in container.
file="${@: -1}"; dir="$(cd "$(dirname "$file")" && pwd)"; base="$(basename "$file")"
exec docker run --rm -v "$dir":/w -w /w --entrypoint /opt/elide/bin/elide \
  ghcr.io/elide-dev/elide:nightly run --quiet "/w/$base"
EOF
chmod +x harness/fixtures/elide-host.sh
```

Run:
```bash
cd harness
node node_modules/.bin/test262-harness --host-type elide \
  --host-path "$PWD/fixtures/elide-host.sh" \
  --test262-dir "$PWD/fixtures/test262" --reporter json --timeout 120000 \
  "$PWD/fixtures/test262/test/pass.js" "$PWD/fixtures/test262/test/neg.js" \
  | jq -c '.[] | {id: (.file+" "+.scenario), pass: .result.pass}'
```
Expected: every line shows `"pass": true` (the passing test passes; the negative SyntaxError test is correctly recognized as a pass by test262 semantics).

> Note: the wrapper strips the leading `run --quiet` that the agent adds because it calls Elide itself — for the fixture check that is fine. The *production* host (in the image) points `--host-path` directly at `/opt/elide/bin/elide`, and the agent's `args.unshift("run","--quiet")` supplies them. Re-confirm in Task 9's integration step.

- [ ] **Step 8: Commit**

```bash
git add harness/src/eshost-elide harness/scripts harness/patches harness/package.json \
        harness/bun.lockb harness/fixtures
git commit -m "feat: custom eshost 'elide' host (print shim + box de-boxing) verified on fixtures"
```

---

## Task 6: Test262 adapter

**Files:**
- Create: `harness/src/adapters/test262.ts`, `harness/src/adapters/test262.test.ts`, `harness/fixtures/test262-report.json`

**Interfaces:**
- Produces: `mapRecords(records): TestResult[]` (pure, tested), `test262Adapter: Adapter` (integration).
- Consumes: `Adapter`, `AdapterContext` from `./types`; `TestResult` from `../results/schema`; `picomatch`.

- [ ] **Step 1: Capture a small real reporter sample into `harness/fixtures/test262-report.json`**

```json
[
  { "file": "test/built-ins/Array/length.js", "scenario": "default",
    "attrs": { "features": ["Array"], "flags": {} },
    "result": { "pass": true, "message": "" } },
  { "file": "test/language/types/x.js", "scenario": "strict mode",
    "attrs": { "features": [], "flags": {} },
    "result": { "pass": false, "message": "Test262Error: nope" } }
]
```

- [ ] **Step 2: Write the failing test `harness/src/adapters/test262.test.ts`**

```ts
import { test, expect } from "bun:test";
import { mapRecords } from "./test262";

const records = JSON.parse(
  await Bun.file(`${import.meta.dir}/../../fixtures/test262-report.json`).text(),
);

test("maps reporter records to normalized TestResults", () => {
  const out = mapRecords(records);
  expect(out).toHaveLength(2);
  expect(out[0]).toMatchObject({
    kind: "test",
    id: "test/built-ins/Array/length.js default",
    status: "pass",
  });
  expect(out[1]).toMatchObject({
    id: "test/language/types/x.js strict mode",
    status: "fail",
    message: "Test262Error: nope",
  });
  expect(out[0].meta).toMatchObject({ features: ["Array"] });
});
```

- [ ] **Step 3: Run it — expect FAIL**

Run: `cd harness && bun test src/adapters/test262.test.ts`

- [ ] **Step 4: Write `harness/src/adapters/test262.ts`**

```ts
import { z } from "zod";
import picomatch from "picomatch";
import type { Adapter, AdapterContext } from "./types";
import type { Result, TestResult } from "../results/schema";

const RecordZ = z.object({
  file: z.string(),
  scenario: z.string(),
  result: z.object({ pass: z.boolean(), message: z.string().optional() }),
  attrs: z
    .object({ features: z.array(z.string()).optional(), flags: z.record(z.any()).optional() })
    .optional(),
});
type Record = z.infer<typeof RecordZ>;

export function mapRecords(records: unknown[]): TestResult[] {
  return records.map((raw) => {
    const r = RecordZ.parse(raw) as Record;
    return {
      kind: "test",
      id: `${r.file} ${r.scenario}`,
      status: r.result.pass ? "pass" : "fail",
      message: r.result.message || undefined,
      meta: {
        features: r.attrs?.features ?? [],
        flags: r.attrs?.flags ?? {},
        chapter: r.file.split("/").slice(1, 3).join("/"),
      },
    };
  });
}

async function* runTest262(ctx: AdapterContext): AsyncIterable<Result> {
  const skip = ctx.skipGlobs.map((g) => picomatch(g));
  const globs = ctx.include.map((g) => `${ctx.suitePath}/${g}`);
  const args = [
    `${import.meta.dir}/../../node_modules/.bin/test262-harness`,
    "--host-type", "elide",
    "--host-path", ctx.elidePath,
    "--test262-dir", ctx.suitePath,
    "--reporter", "json",
    "--reporter-keys", "file,scenario,result,attrs",
    "--threads", String(ctx.threads),
    "--timeout", "60000",
    ...globs,
  ];
  const proc = Bun.spawn(["node", ...args], { stdout: "pipe", stderr: "inherit" });
  const out = await new Response(proc.stdout).text();
  await proc.exited;
  const records = JSON.parse(out) as unknown[];
  for (const r of mapRecords(records)) {
    const path = r.id.replace(/ (default|strict mode)$/, "");
    const rel = path.startsWith(ctx.suitePath) ? path.slice(ctx.suitePath.length + 1) : path;
    if (skip.some((m) => m(rel))) {
      yield { ...r, status: "skip" };
    } else {
      yield r;
    }
  }
}

export const test262Adapter: Adapter = {
  id: "test262",
  kind: "test",
  run: runTest262,
};
```

- [ ] **Step 5: Run the test — expect PASS**

Run: `cd harness && bun test src/adapters/test262.test.ts`

- [ ] **Step 6: Commit**

```bash
git add harness/src/adapters/test262.ts harness/src/adapters/test262.test.ts harness/fixtures/test262-report.json
git commit -m "feat: test262 adapter (reporter json -> normalized results)"
```

---

## Task 7: Reports (per-run Markdown + summary.json + top-level index)

**Files:**
- Create: `harness/src/report/render.ts`, `harness/src/report/index.ts`, `harness/src/report/render.test.ts`

**Interfaces:**
- Produces: `renderSuiteReport(meta, comparison)`, `renderRunIndex(meta, comparison)`, `writeSummaryJson(dir, meta, comparison)`, `renderTopIndex(runs)`; type `RunSummary`.
- Consumes: `RunMeta` from `../results/schema`, `Comparison` from `../expectations/compare`.

- [ ] **Step 1: Write the failing test `harness/src/report/render.test.ts`**

```ts
import { test, expect } from "bun:test";
import { renderSuiteReport, renderTopIndex } from "./render";
import type { RunMeta } from "../results/schema";
import type { Comparison } from "../expectations/compare";

const meta: RunMeta = {
  workload: "test262",
  kind: "test",
  elide: { semver: "1.3.5+abc", digest: "abcd1234ef56" },
  startedAt: "2026-06-26T00:00:00Z",
  finishedAt: "2026-06-26T00:05:00Z",
};
const cmp: Comparison = {
  regressions: [{ kind: "test", id: "language/r.js default", status: "fail", message: "x" }],
  newPasses: [{ kind: "test", id: "built-ins/n.js default", status: "pass" }],
  counts: { pass: 90, fail: 5, skip: 5, error: 0, total: 100 },
};

test("suite report includes pass rate, regressions, new passes", () => {
  const md = renderSuiteReport(meta, cmp);
  expect(md).toContain("test262");
  expect(md).toContain("1.3.5+abc");
  expect(md).toContain("90/100");
  expect(md).toContain("language/r.js default");
  expect(md).toContain("built-ins/n.js default");
});

test("top index renders a version matrix with a checkmark when no regressions", () => {
  const md = renderTopIndex([
    { workload: "test262", semver: "1.3.5", digest: "abcd12", passRate: 1, regressions: 0 },
  ]);
  expect(md).toContain("test262");
  expect(md).toContain("✅");
});
```

- [ ] **Step 2: Run it — expect FAIL**

Run: `cd harness && bun test src/report/render.test.ts`

- [ ] **Step 3: Write `harness/src/report/render.ts`**

```ts
import type { RunMeta } from "../results/schema";
import type { Comparison } from "../expectations/compare";

export interface RunSummary {
  workload: string;
  semver: string;
  digest: string; // short
  passRate: number; // 0..1
  regressions: number;
}

export function renderSuiteReport(meta: RunMeta, c: Comparison): string {
  const { pass, total } = c.counts;
  const rate = total ? ((pass / total) * 100).toFixed(2) : "0.00";
  const lines: string[] = [];
  lines.push(`# ${meta.workload} — \`${meta.elide.semver}\``, "");
  lines.push(`- Image digest: \`${meta.elide.digest}\``);
  lines.push(`- Suite version: \`${meta.suiteVersion ?? "unknown"}\``);
  lines.push(`- Ran: ${meta.startedAt} → ${meta.finishedAt}`, "");
  lines.push(`## Summary`, "");
  lines.push(`**Pass rate: ${pass}/${total} (${rate}%)**`, "");
  lines.push(`| pass | fail | error | skip | regressions | new passes |`);
  lines.push(`|---:|---:|---:|---:|---:|---:|`);
  lines.push(
    `| ${pass} | ${c.counts.fail} | ${c.counts.error} | ${c.counts.skip} | ${c.regressions.length} | ${c.newPasses.length} |`,
    "",
  );
  if (c.regressions.length) {
    lines.push(`## ❌ Regressions (${c.regressions.length})`, "");
    for (const r of c.regressions.slice(0, 200))
      lines.push(`- \`${r.id}\` — ${r.message ?? ""}`);
    if (c.regressions.length > 200) lines.push(`- …and ${c.regressions.length - 200} more`);
    lines.push("");
  }
  if (c.newPasses.length) {
    lines.push(`## 🟢 New passes (${c.newPasses.length}) — consider advancing the baseline`, "");
    for (const r of c.newPasses.slice(0, 200)) lines.push(`- \`${r.id}\``);
    if (c.newPasses.length > 200) lines.push(`- …and ${c.newPasses.length - 200} more`);
    lines.push("");
  }
  return lines.join("\n");
}

export function renderRunIndex(meta: RunMeta, c: Comparison): string {
  const status = c.regressions.length === 0 ? "✅ green" : `❌ ${c.regressions.length} regressions`;
  return [
    `# Compliance run — \`${meta.elide.semver}\` (\`${meta.elide.digest}\`)`,
    "",
    `Status: **${status}**`,
    "",
    `- [${meta.workload}](./${meta.workload}.md)`,
    "",
  ].join("\n");
}

export function renderTopIndex(runs: RunSummary[]): string {
  const lines: string[] = ["# Elide compliance reports", "", "| Suite | Version | Digest | Pass rate | Status |", "|---|---|---|---:|:--:|"];
  for (const r of runs) {
    const mark = r.regressions === 0 ? "✅" : "❌";
    const pct = (r.passRate * 100).toFixed(1);
    lines.push(
      `| ${r.workload} | \`${r.semver}\` | \`${r.digest}\` | ${pct}% | ${mark} |`,
    );
  }
  lines.push("");
  return lines.join("\n");
}
```

- [ ] **Step 4: Write `harness/src/report/index.ts`** (summary.json + top-index aggregation)

```ts
import { join } from "node:path";
import { readdirSync, existsSync } from "node:fs";
import type { RunMeta } from "../results/schema";
import type { Comparison } from "../expectations/compare";
import { renderTopIndex, type RunSummary } from "./render";

export async function writeSummaryJson(dir: string, meta: RunMeta, c: Comparison): Promise<void> {
  const summary = {
    meta,
    counts: c.counts,
    regressions: c.regressions.map((r) => r.id),
    newPasses: c.newPasses.map((r) => r.id),
  };
  await Bun.write(join(dir, "summary.json"), JSON.stringify(summary, null, 2));
}

// Walk reports/<semver>/<digest>/summary.json, keep the newest run per workload.
export async function rebuildTopIndex(reportsDir: string): Promise<string> {
  const latest = new Map<string, RunSummary & { finishedAt: string }>();
  if (existsSync(reportsDir)) {
    for (const semver of readdirSync(reportsDir)) {
      const verDir = join(reportsDir, semver);
      let digests: string[] = [];
      try { digests = readdirSync(verDir); } catch { continue; }
      for (const digest of digests) {
        const sp = join(verDir, digest, "summary.json");
        if (!existsSync(sp)) continue;
        const s = JSON.parse(await Bun.file(sp).text());
        const total = s.counts.total || 1;
        const cur: RunSummary & { finishedAt: string } = {
          workload: s.meta.workload,
          semver: s.meta.elide.semver,
          digest: digest.slice(0, 12),
          passRate: s.counts.pass / total,
          regressions: s.regressions.length,
          finishedAt: s.meta.finishedAt,
        };
        const prev = latest.get(s.meta.workload);
        if (!prev || cur.finishedAt > prev.finishedAt) latest.set(s.meta.workload, cur);
      }
    }
  }
  return renderTopIndex([...latest.values()]);
}
```

- [ ] **Step 5: Run the test — expect PASS**

Run: `cd harness && bun test src/report/render.test.ts`

- [ ] **Step 6: Commit**

```bash
git add harness/src/report
git commit -m "feat: markdown reports, summary.json, top-level index/matrix"
```

---

## Task 8: CLI wiring

**Files:**
- Create: `harness/src/cli.ts`, `harness/src/cli.test.ts`

**Interfaces:**
- Produces: `parseArgs(argv): CliOptions`, `main(opts): Promise<number>`; CLI entry `bun run src/cli.ts run <workload> [--elide-path …] [--digest …] [--suite-root …] [--reports …] [--expectations …] [--threads N]`.
- Consumes: everything from Tasks 1–7.

- [ ] **Step 1: Write the failing test `harness/src/cli.test.ts`**

```ts
import { test, expect } from "bun:test";
import { parseArgs } from "./cli";

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
});
```

- [ ] **Step 2: Run it — expect FAIL**

Run: `cd harness && bun test src/cli.test.ts`

- [ ] **Step 3: Write `harness/src/cli.ts`**

```ts
import { join, resolve } from "node:path";
import { mkdirSync } from "node:fs";
import { loadRegistry } from "./registry";
import { resolveIdentity } from "./elide";
import { loadExpectations, skipGlobs } from "./expectations/load";
import { compare } from "./expectations/compare";
import { writeResults } from "./results/store";
import { test262Adapter } from "./adapters/test262";
import type { Adapter } from "./adapters/types";
import type { Result, RunMeta, TestResult } from "./results/schema";
import { renderSuiteReport, renderRunIndex } from "./report/render";
import { writeSummaryJson, rebuildTopIndex } from "./report/index";

export interface CliOptions {
  command: string;
  workload: string;
  elidePath: string;
  digest: string;
  suiteRoot: string;
  reportsDir: string;
  expectationsDir: string;
  threads: number;
}

const ADAPTERS: Record<string, Adapter> = { test262: test262Adapter };

export function parseArgs(argv: string[]): CliOptions {
  const [command, workload, ...rest] = argv;
  const get = (flag: string, dflt: string): string => {
    const i = rest.indexOf(flag);
    return i >= 0 ? rest[i + 1] : dflt;
  };
  return {
    command,
    workload,
    elidePath: get("--elide-path", "/opt/elide/bin/elide"),
    digest: get("--digest", "local"),
    suiteRoot: get("--suite-root", resolve("suites")),
    reportsDir: get("--reports", resolve("reports")),
    expectationsDir: get("--expectations", resolve("expectations")),
    threads: parseInt(get("--threads", "1"), 10),
  };
}

export async function main(o: CliOptions): Promise<number> {
  const registry = loadRegistry(resolve("registry.toml"));
  const wl = registry.find((w) => w.id === o.workload);
  if (!wl) throw new Error(`unknown workload: ${o.workload}`);
  const adapter = ADAPTERS[wl.adapter];
  if (!adapter) throw new Error(`no adapter for: ${wl.adapter}`);

  const identity = await resolveIdentity(o.elidePath, o.digest);
  const exp = loadExpectations(join(o.expectationsDir, `${wl.id}.toml`));
  const startedAt = new Date().toISOString();

  const ctx = {
    elide: identity,
    elidePath: o.elidePath,
    suitePath: join(o.suiteRoot, wl.id.replace(/^.*\//, "")),
    include: (wl.settings.include as string[]) ?? ["test/**/*.js"],
    skipGlobs: skipGlobs(exp),
    threads: o.threads,
  };

  const results: Result[] = [];
  for await (const r of adapter.run(ctx)) results.push(r);
  const finishedAt = new Date().toISOString();

  const tests = results.filter((r): r is TestResult => r.kind === "test");
  const cmp = compare(tests, exp);

  const meta: RunMeta = {
    workload: wl.id,
    kind: wl.kind,
    elide: identity,
    startedAt,
    finishedAt,
  };

  const shortDigest = identity.digest.slice(0, 12) || "local";
  const outDir = join(o.reportsDir, identity.semver, shortDigest);
  mkdirSync(outDir, { recursive: true });
  await writeResults(outDir, meta, results);
  await writeSummaryJson(outDir, meta, cmp);
  await Bun.write(join(outDir, `${wl.id}.md`), renderSuiteReport(meta, cmp));
  await Bun.write(join(outDir, "index.md"), renderRunIndex(meta, cmp));
  await Bun.write(join(o.reportsDir, "index.md"), await rebuildTopIndex(o.reportsDir));

  const green = cmp.regressions.length === 0;
  console.log(
    `${wl.id} @ ${identity.semver}: ${cmp.counts.pass}/${cmp.counts.total} pass, ` +
      `${cmp.regressions.length} regressions, ${cmp.newPasses.length} new passes — ${green ? "GREEN" : "RED"}`,
  );
  return green ? 0 : 1;
}

if (import.meta.main) {
  const o = parseArgs(Bun.argv.slice(2));
  if (o.command !== "run") {
    console.error("usage: cli.ts run <workload> [options]");
    process.exit(2);
  }
  process.exit(await main(o));
}
```

- [ ] **Step 4: Run the unit test — expect PASS**

Run: `cd harness && bun test src/cli.test.ts`

- [ ] **Step 5: Typecheck the whole package**

Run: `cd harness && bun run typecheck`
Expected: no errors.

- [ ] **Step 6: Commit**

```bash
git add harness/src/cli.ts harness/src/cli.test.ts
git commit -m "feat: CLI wiring (registry -> adapter -> compare -> reports, exit code)"
```

---

## Task 9: Harness Docker image + `bin/run` launcher

**Files:**
- Create: `docker/harness.Dockerfile`, `docker/harness.local.Dockerfile`, `bin/run`

**Interfaces:**
- Produces: `bin/run --elide <tag|digest|binary> --suite <id> [--threads N]` — builds the image and runs the CLI with data dirs mounted.

- [ ] **Step 1: Write `docker/harness.Dockerfile`** (image-ref mode: tag or digest)

```dockerfile
# syntax=docker/dockerfile:1
ARG ELIDE_REF=ghcr.io/elide-dev/elide:nightly
FROM ${ELIDE_REF} AS elide

FROM node:22-bookworm
RUN npm install -g bun@1
COPY --from=elide /opt/elide /opt/elide
ENV PATH=/opt/elide/bin:$PATH

WORKDIR /opt/harness
COPY harness/package.json harness/bun.lockb ./
COPY harness/patches ./patches
RUN bun install --frozen-lockfile
COPY harness/ ./

WORKDIR /work
ENTRYPOINT ["bun", "run", "/opt/harness/src/cli.ts"]
```

- [ ] **Step 2: Write `docker/harness.local.Dockerfile`** (local-binary mode)

```dockerfile
# syntax=docker/dockerfile:1
# Build context must contain ./elide-bin/elide (staged by bin/run).
FROM node:22-bookworm
RUN npm install -g bun@1
COPY elide-bin/elide /opt/elide/bin/elide
RUN chmod +x /opt/elide/bin/elide
ENV PATH=/opt/elide/bin:$PATH

WORKDIR /opt/harness
COPY harness/package.json harness/bun.lockb ./
COPY harness/patches ./patches
RUN bun install --frozen-lockfile
COPY harness/ ./

WORKDIR /work
ENTRYPOINT ["bun", "run", "/opt/harness/src/cli.ts"]
```

- [ ] **Step 3: Write `bin/run`**

```bash
#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
ROOT="$PWD"

ELIDE_REF="ghcr.io/elide-dev/elide:nightly"
SUITE="test262"
THREADS="${THREADS:-1}"
while [[ $# -gt 0 ]]; do
  case "$1" in
    --elide) ELIDE_REF="$2"; shift 2;;
    --suite) SUITE="$2"; shift 2;;
    --threads) THREADS="$2"; shift 2;;
    *) echo "unknown arg: $1" >&2; exit 2;;
  esac
done

IMG="elide-harness:$(echo "$ELIDE_REF" | tr '/:@' '___')"
DIGEST="local"

if [[ -f "$ELIDE_REF" ]]; then
  # local binary mode
  rm -rf .elide-bin && mkdir -p .elide-bin
  cp "$ELIDE_REF" .elide-bin/elide
  DIGEST="$(shasum -a 256 .elide-bin/elide | cut -d' ' -f1)"
  docker build -f docker/harness.local.Dockerfile -t "$IMG" .
  rm -rf .elide-bin
else
  # tag or digest mode
  docker build -f docker/harness.Dockerfile --build-arg "ELIDE_REF=$ELIDE_REF" -t "$IMG" .
  DIGEST="$(docker inspect --format '{{index .RepoDigests 0}}' "$ELIDE_REF" 2>/dev/null | sed 's/.*@sha256://')"
  [[ -z "$DIGEST" ]] && DIGEST="$(echo "$ELIDE_REF" | sed 's/.*@sha256://')"
fi

mkdir -p "$ROOT/reports"
docker run --rm \
  -v "$ROOT/suites:/work/suites:ro" \
  -v "$ROOT/expectations:/work/expectations:ro" \
  -v "$ROOT/reports:/work/reports" \
  -v "$ROOT/registry.toml:/work/registry.toml:ro" \
  "$IMG" \
  run "$SUITE" \
  --elide-path /opt/elide/bin/elide \
  --digest "$DIGEST" \
  --suite-root /work/suites \
  --reports /work/reports \
  --expectations /work/expectations \
  --threads "$THREADS"
```

- [ ] **Step 4: Build the image**

Run: `chmod +x bin/run && docker build -f docker/harness.Dockerfile -t elide-harness:test .`
Expected: build succeeds; image has Node, Bun, and `/opt/elide/bin/elide`.

- [ ] **Step 5: Smoke test the host inside the image on the fixtures**

Run:
```bash
docker run --rm -w /opt/harness elide-harness:test \
  bash -lc 'node node_modules/.bin/test262-harness --host-type elide \
    --host-path /opt/elide/bin/elide --test262-dir fixtures/test262 \
    --reporter json --reporter-keys file,scenario,result \
    fixtures/test262/test/pass.js fixtures/test262/test/neg.js \
    | (command -v jq >/dev/null && jq -c ".[]|{id:(.file+\" \"+.scenario),pass:.result.pass}" || cat)'
```
Expected: both records show `"pass": true`. This confirms the production host (`--host-path /opt/elide/bin/elide`, agent supplies `run --quiet`) works.

- [ ] **Step 6: End-to-end run on a small slice**

Temporarily narrow `registry.toml` `include` to a small dir (e.g. `["test/language/types/boolean/**/*.js"]`), then:
Run: `THREADS=4 ./bin/run --elide nightly --suite test262`
Expected: prints a summary line, creates `reports/<semver>/<digest>/{index.md,test262.md,summary.json,results.json.gz}` and `reports/index.md`. Restore `include` afterward.

- [ ] **Step 7: Commit**

```bash
git add docker bin/run
git commit -m "feat: harness docker image (image-ref + local-binary) and bin/run launcher"
```

---

## Task 10: Devcontainer (Codespaces-ready)

**Files:**
- Create: `.devcontainer/devcontainer.json`, `.devcontainer/Dockerfile`

- [ ] **Step 1: Write `.devcontainer/Dockerfile`**

```dockerfile
FROM mcr.microsoft.com/devcontainers/base:bookworm
RUN npm install -g bun@1 || true
# Elide (latest; dev only — pinned runs go through the harness image)
RUN curl -fsSL https://elide.sh | bash -s - --install-dir /usr/local/elide \
 && ln -sf /usr/local/elide/elide /usr/local/bin/elide || true
```

- [ ] **Step 2: Write `.devcontainer/devcontainer.json`**

```json
{
  "name": "elide-compliance-harness",
  "build": { "dockerfile": "Dockerfile" },
  "features": {
    "ghcr.io/devcontainers/features/docker-in-docker:2": {},
    "ghcr.io/devcontainers/features/node:1": { "version": "22" },
    "ghcr.io/devcontainers/features/github-cli:1": {}
  },
  "postCreateCommand": "git submodule update --init --depth 1 && cd harness && bun install",
  "customizations": {
    "vscode": {
      "extensions": ["oven.bun-vscode", "tamasfe.even-better-toml"]
    }
  }
}
```

- [ ] **Step 3: Verify JSON is well-formed**

Run: `python3 -c "import json,sys; json.load(open('.devcontainer/devcontainer.json'))" && echo OK`
Expected: `OK`.

- [ ] **Step 4: Commit**

```bash
git add .devcontainer
git commit -m "feat: devcontainer for Codespaces (bun, node, docker-in-docker, elide)"
```

---

## Task 11: CI workflow + GitHub Pages

**Files:**
- Create: `.github/workflows/compliance.yml`

- [ ] **Step 1: Write `.github/workflows/compliance.yml`**

```yaml
name: compliance
on:
  workflow_dispatch:
    inputs:
      elide_ref:
        description: "Elide image tag, digest (ghcr.io/...@sha256:...), or 'nightly'"
        default: "nightly"
      suite:
        description: "Workload id"
        default: "test262"
  schedule:
    - cron: "0 7 * * *" # nightly 07:00 UTC

permissions:
  contents: write

jobs:
  run:
    runs-on: [self-hosted, linux]
    steps:
      - uses: actions/checkout@v4
        with: { submodules: recursive }
      - name: Run suite
        run: ./bin/run --elide "${{ inputs.elide_ref || 'nightly' }}" --suite "${{ inputs.suite || 'test262' }}"
        env: { THREADS: "8" }
      - name: Upload full results
        if: always()
        uses: actions/upload-artifact@v4
        with:
          name: results
          path: reports/**/results.json.gz
      - name: Commit reports
        if: always()
        run: |
          git config user.name "elide-ci"
          git config user.email "ci@elide.dev"
          git add reports
          git commit -m "ci: compliance report ${{ inputs.elide_ref || 'nightly' }}" || echo "no changes"
          git push || echo "push skipped"

  pages:
    needs: run
    if: always()
    runs-on: ubuntu-latest
    permissions: { pages: write, id-token: write }
    environment: { name: github-pages }
    steps:
      - uses: actions/checkout@v4
      - uses: actions/configure-pages@v5
      - uses: actions/upload-pages-artifact@v3
        with: { path: reports }
      - uses: actions/deploy-pages@v4
```

- [ ] **Step 2: Lint the YAML**

Run: `python3 -c "import yaml; yaml.safe_load(open('.github/workflows/compliance.yml'))" && echo OK`
Expected: `OK`.

- [ ] **Step 3: Commit**

```bash
git add .github/workflows/compliance.yml
git commit -m "ci: compliance workflow (dispatch + nightly) with reports commit + Pages"
```

---

## Task 12: First full nightly run + seed the baseline

**Files:**
- Modify: `expectations/test262.toml` (seed from observed results)

This is an operational task; it produces the initial committed report and baseline.

- [ ] **Step 1: Run the full Test262 suite against nightly**

Run: `THREADS=8 ./bin/run --elide nightly --suite test262`
Expected: completes; prints a summary; writes a report. Note the runtime — tune `THREADS` if needed.

- [ ] **Step 2: Inspect regressions and crashy areas**

Run: `cat reports/*/*/test262.md | head -80`
Identify large failing/error clusters (e.g. `intl402/**`, `built-ins/Atomics/**`, realm-dependent tests).

- [ ] **Step 3: Seed `expectations/test262.toml`**

Move whole-feature unsupported areas into `[skip]` with reasons; move individual known failures into `[fail]` with reasons (link Elide issues where filed). Re-run and confirm the run is GREEN (zero regressions). Example:

```toml
[skip]
"intl402/**" = "Intl 402 not supported yet"
"built-ins/Atomics/**" = "SharedArrayBuffer/agents unsupported"
"**/*FIXTURE.js" = "fixture support files, not tests"

[fail]
"built-ins/RegExp/property-escapes/**" = "partial Unicode property escapes (elide-dev/elide#TODO)"
```

- [ ] **Step 4: Commit the baseline + first report**

```bash
git add expectations/test262.toml reports
git commit -m "chore: seed test262 baseline + first nightly report"
```

- [ ] **Step 5: File the upstream Elide issues from spec §13**

Open issues for: native `print()`, scriptable errors-to-stderr mode, and `$262`/Realm + Atomics host hooks. Reference the skipped areas from Step 3. (Tracking only — no code change here.)

---

## Self-Review

**Spec coverage:**
- §3 decisions → Tasks 1–11 implement each (driver T5/T6, Bun T1, packaging T9, version pin T9, expectations T4, report detail T2/T7, workload-neutral core T2). ✓
- §4 layout → produced across tasks; matches. ✓
- §5 execution model → T9 (image + bin/run); refinement noted below. ✓
- §6 version pinning (tag/digest/binary) → T9 `bin/run`. ✓
- §7 custom host → T5 (verified on fixtures), production confirm T9 step 5. ✓
- §8 schema → T2. ✓
- §9 expectations → T4. ✓
- §10 reports → T7 + T8 wiring. ✓
- §11 devcontainer → T10. ✓
- §12 CI/Pages → T11. ✓
- §13 upstream asks → T12 step 5. ✓
- §15 baseline seeding risk → T12. ✓

**Deliberate refinement vs spec §5:** the spec described bind-mounting the whole repo. To avoid `node_modules` shadowing, the image **bakes** `harness/` (code + deps) and bind-mounts only the data dirs (`suites/`, `expectations/`, `reports/`, `registry.toml`). Fast local iteration is covered by the devcontainer (run `bun` directly against dev Elide). Behavior is identical; this is strictly more robust.

**Placeholder scan:** no TBD/TODO logic. `elide-dev/elide#TODO` and `#NNN` appear only inside illustrative baseline reasons (Task 12 / spec), which are filled when real issues are filed. ✓

**Type consistency:** `ElideIdentity{semver,digest}`, `TestResult{kind,id,status,message,meta}`, `Comparison{regressions,newPasses,counts}`, `AdapterContext{elide,elidePath,suitePath,include,skipGlobs,threads}`, `RunSummary{workload,semver,digest,passRate,regressions}` are used consistently across Tasks 2–8. `parseExpectations`/`loadExpectations`/`skipGlobs`/`compare` names match across T4 and T8. ✓
