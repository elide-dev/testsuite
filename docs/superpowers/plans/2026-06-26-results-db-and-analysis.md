# Results Database & Analysis Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a ratchet baseline, cross-version diff, a derived SQLite results database, and impact-ordered failure clustering to the compliance harness — keeping a committed JSON contract so a static web UI is possible later.

**Architecture:** Per-run artifacts (impact/changes, both `.md` + `.json`) are generated at run time from in-memory results and the previous run's committed `results.json.gz` — no DB needed, so it works inside the Docker run. A separate derived SQLite DB (`.harness/results.sqlite`, gitignored, `bun:sqlite`) is built from committed `results.json.gz` and powers ad-hoc `diff`/`impact`/`query` CLIs. Pure functions (signature, impact, diff) are shared by both paths.

**Tech Stack:** Bun + TypeScript, `bun:sqlite` (built-in, no new dep), `smol-toml`, `picomatch`, `zod`.

## Global Constraints

- Bun/TypeScript; Bun runs `.ts` directly; tests use `bun:test`. Work in `harness/` (run `bun test` / `bun run typecheck` there).
- No new dependencies — `bun:sqlite` is built-in.
- Derived SQLite at `.harness/results.sqlite` (gitignored); committed `results.json.gz` is the source of truth. No migrations: `db build` drops and recreates the schema.
- Ratchet file `expectations/<suite>.ratchet.toml` is machine-owned, regenerated wholesale, holds exact test ids (with scenario suffix). Expected-fail = in ratchet id-set OR matches a `[fail]` glob; `[skip]` wins over both.
- Result statuses: `pass | fail | skip | error`. Test id format: `"<suite-relative path> <scenario>"` where scenario ∈ {`default`, `strict mode`}.
- Every analysis emits both a committed `.json` (machine/UI) and `.md` (human) form.
- Commit after every task. Work on branch `compliance-harness` (continues the prior phase).

---

## File Structure

```
harness/src/
  analyze/
    signature.ts            # Task 1 — normalizeSignature (pure)
    impact.ts               # Task 5 — computeImpact + renderImpactMd (pure)
    diff.ts                 # Task 4 — diffRuns + render + run-file helpers (pure/fs)
  db/
    schema.ts               # Task 2 — DDL + reset
    open.ts                 # Task 2 — openDb
    ingest.ts               # Task 2 — ingestRun, ingestAll
  expectations/
    ratchet.ts              # Task 6 — read/write ratchet, ratchetCandidates
    load.ts                 # Task 6 (modify) — Expectations.ratchet
    compare.ts              # Task 6 (modify) — ratchet-aware; export filePathOf
  report/index.ts           # Task 7 (modify) — emit reports/index.json
  cli.ts                    # Tasks 3-7 (modify) — subcommands, run artifacts, --ratchet
.gitignore                  # Task 2 (modify) — .harness/
```

---

## Task 1: Failure signature normalizer

**Files:**
- Create: `harness/src/analyze/signature.ts`, `harness/src/analyze/signature.test.ts`

**Interfaces:**
- Produces: `normalizeSignature(message: string | undefined): string`

- [ ] **Step 1: Write the failing test `harness/src/analyze/signature.test.ts`**

```ts
import { test, expect } from "bun:test";
import { normalizeSignature } from "./signature";

test("collapses identifier-specific ReferenceErrors to one signature", () => {
  const a = normalizeSignature("ReferenceError: print is not defined");
  const b = normalizeSignature("ReferenceError: $262 is not defined");
  // identifiers are not quoted here, so they remain distinct words; the
  // scrubbing targets quoted/located/numeric variance, not bare identifiers.
  expect(a).toBe("ReferenceError: print is not defined");
  expect(b).toBe("ReferenceError: $262 is not defined");
});

test("scrubs quoted strings, locations, and numbers", () => {
  expect(normalizeSignature(`TypeError: Cannot load module: 'vm'`)).toBe(
    "TypeError: Cannot load module: <str>",
  );
  expect(normalizeSignature("SyntaxError: foo.js:12:5 unexpected token")).toBe(
    "SyntaxError: <loc> unexpected token",
  );
  expect(normalizeSignature("Test262Error: expected 3 but got 42")).toBe(
    "Test262Error: expected <n> but got <n>",
  );
});

test("handles missing message", () => {
  expect(normalizeSignature(undefined)).toBe("(no message)");
  expect(normalizeSignature("")).toBe("(no message)");
});

test("collapses whitespace and truncates", () => {
  const long = "Error: " + "x".repeat(300);
  expect(normalizeSignature(long).length).toBeLessThanOrEqual(160);
  expect(normalizeSignature("Error:   a\n\tb")).toBe("Error: a b");
});
```

- [ ] **Step 2: Run it — expect FAIL**

Run: `cd harness && bun test src/analyze/signature.test.ts`
Expected: FAIL (module not found).

- [ ] **Step 3: Write `harness/src/analyze/signature.ts`**

```ts
// Normalize a failure message into a cluster key, scrubbing variable content
// so failures sharing a root cause collapse to one signature.
export function normalizeSignature(message: string | undefined): string {
  if (!message || message.trim() === "") return "(no message)";
  let s = message;
  // file:line:col or :line:col → <loc>; bare *.js paths → <loc>
  s = s.replace(/[\w./-]*\.js(:\d+)?(:\d+)?/g, "<loc>");
  s = s.replace(/:\d+:\d+/g, "<loc>");
  // quoted runs → <str>
  s = s.replace(/'[^']*'|"[^"]*"|`[^`]*`/g, "<str>");
  // standalone numbers (int/float/hex) → <n>
  s = s.replace(/\b0x[0-9a-fA-F]+\b|\b\d+(\.\d+)?\b/g, "<n>");
  // collapse whitespace
  s = s.replace(/\s+/g, " ").trim();
  return s.length > 160 ? s.slice(0, 160) : s;
}
```

- [ ] **Step 4: Run the test — expect PASS**

Run: `cd harness && bun test src/analyze/signature.test.ts`
Expected: PASS (4 tests).

- [ ] **Step 5: Commit**

```bash
git add harness/src/analyze/signature.ts harness/src/analyze/signature.test.ts
git commit -m "feat: failure signature normalizer for impact clustering"
```

---

## Task 2: SQLite schema, open, ingest

**Files:**
- Create: `harness/src/db/schema.ts`, `harness/src/db/open.ts`, `harness/src/db/ingest.ts`, `harness/src/db/ingest.test.ts`
- Modify: `.gitignore` (add `.harness/`)

**Interfaces:**
- Consumes: `StoredRun` from `../results/store` (`{ meta: RunMeta, results: Result[] }`); `normalizeSignature` from `../analyze/signature`.
- Produces:
  - `applySchema(db: Database): void` (CREATE IF NOT EXISTS), `resetDb(db: Database): void` (drop + create)
  - `openDb(path: string): Database`
  - `ingestRun(db: Database, run: StoredRun): number` (returns run id)
  - `ingestAll(db: Database, reportsDir: string, opts?: { force?: boolean }): Promise<number>` (returns runs ingested)

- [ ] **Step 1: Add `.harness/` to `.gitignore`**

Append a line `.harness/` to the repo-root `.gitignore`.

- [ ] **Step 2: Write `harness/src/db/schema.ts`**

```ts
import type { Database } from "bun:sqlite";

export const SCHEMA = `
CREATE TABLE IF NOT EXISTS runs (
  id            INTEGER PRIMARY KEY,
  workload      TEXT NOT NULL,
  semver        TEXT NOT NULL,
  digest        TEXT NOT NULL,
  suite_version TEXT,
  started_at    TEXT,
  finished_at   TEXT,
  UNIQUE (workload, semver, digest)
);
CREATE TABLE IF NOT EXISTS results (
  run_id    INTEGER NOT NULL REFERENCES runs(id) ON DELETE CASCADE,
  test_id   TEXT NOT NULL,
  status    TEXT NOT NULL,
  message   TEXT,
  signature TEXT,
  features  TEXT
);
CREATE INDEX IF NOT EXISTS ix_results_run_status ON results(run_id, status);
CREATE INDEX IF NOT EXISTS ix_results_signature  ON results(signature);
CREATE INDEX IF NOT EXISTS ix_results_run_test   ON results(run_id, test_id);
`;

export function applySchema(db: Database): void {
  db.exec("PRAGMA foreign_keys = ON;");
  db.exec(SCHEMA);
}

export function resetDb(db: Database): void {
  db.exec("PRAGMA foreign_keys = ON;");
  db.exec("DROP TABLE IF EXISTS results; DROP TABLE IF EXISTS runs;");
  db.exec(SCHEMA);
}
```

- [ ] **Step 3: Write `harness/src/db/open.ts`**

```ts
import { Database } from "bun:sqlite";
import { mkdirSync } from "node:fs";
import { dirname } from "node:path";
import { applySchema } from "./schema";

export function openDb(path: string): Database {
  if (path !== ":memory:") mkdirSync(dirname(path), { recursive: true });
  const db = new Database(path, { create: true });
  applySchema(db);
  return db;
}
```

- [ ] **Step 4: Write the failing test `harness/src/db/ingest.test.ts`**

```ts
import { test, expect } from "bun:test";
import { Database } from "bun:sqlite";
import { applySchema } from "./schema";
import { ingestRun } from "./ingest";
import type { StoredRun } from "../results/store";

function mkDb(): Database {
  const db = new Database(":memory:");
  applySchema(db);
  return db;
}

const run: StoredRun = {
  meta: {
    workload: "test262",
    kind: "test",
    elide: { semver: "1.3.5", digest: "abcd1234" },
    startedAt: "2026-06-26T00:00:00Z",
    finishedAt: "2026-06-26T00:01:00Z",
  },
  results: [
    { kind: "test", id: "test/a.js default", status: "pass" },
    { kind: "test", id: "test/b.js default", status: "fail", message: "TypeError: Cannot load module: 'vm'", meta: { features: ["modules"] } },
  ],
};

test("ingests a run and its results with signature + features", () => {
  const db = mkDb();
  const id = ingestRun(db, run);
  const runRow = db.query("SELECT * FROM runs WHERE id = ?").get(id) as any;
  expect(runRow.workload).toBe("test262");
  const fail = db.query("SELECT * FROM results WHERE status = 'fail'").get() as any;
  expect(fail.test_id).toBe("test/b.js default");
  expect(fail.signature).toBe("TypeError: Cannot load module: <str>");
  expect(fail.features).toBe("modules");
  const pass = db.query("SELECT signature FROM results WHERE status = 'pass'").get() as any;
  expect(pass.signature).toBeNull();
});

test("re-ingesting the same run id replaces, not duplicates", () => {
  const db = mkDb();
  ingestRun(db, run);
  ingestRun(db, run);
  expect((db.query("SELECT COUNT(*) c FROM runs").get() as any).c).toBe(1);
  expect((db.query("SELECT COUNT(*) c FROM results").get() as any).c).toBe(2);
});
```

- [ ] **Step 5: Run it — expect FAIL**

Run: `cd harness && bun test src/db/ingest.test.ts`
Expected: FAIL (module `./ingest` not found).

- [ ] **Step 6: Write `harness/src/db/ingest.ts`**

```ts
import type { Database } from "bun:sqlite";
import { readdirSync, existsSync } from "node:fs";
import { join } from "node:path";
import { normalizeSignature } from "../analyze/signature";
import { readResults, type StoredRun } from "../results/store";

export function ingestRun(db: Database, run: StoredRun): number {
  const tx = db.transaction((r: StoredRun) => {
    db.query(
      "DELETE FROM runs WHERE workload = ? AND semver = ? AND digest = ?",
    ).run(r.meta.workload, r.meta.elide.semver, r.meta.elide.digest);
    const info = db
      .query(
        `INSERT INTO runs (workload, semver, digest, suite_version, started_at, finished_at)
         VALUES (?, ?, ?, ?, ?, ?)`,
      )
      .run(
        r.meta.workload,
        r.meta.elide.semver,
        r.meta.elide.digest,
        r.meta.suiteVersion ?? null,
        r.meta.startedAt,
        r.meta.finishedAt,
      );
    const runId = Number(info.lastInsertRowid);
    const ins = db.query(
      `INSERT INTO results (run_id, test_id, status, message, signature, features)
       VALUES (?, ?, ?, ?, ?, ?)`,
    );
    for (const res of r.results) {
      if (res.kind !== "test") continue;
      const failing = res.status === "fail" || res.status === "error";
      const sig = failing ? normalizeSignature(res.message) : null;
      const features = ((res.meta?.features as string[]) ?? []).join(",") || null;
      ins.run(runId, res.id, res.status, res.message ?? null, sig, features);
    }
    return runId;
  });
  return tx(run);
}

// Ingest every committed run under reportsDir/<semver>/<short-digest>/<workload>/results.json.gz.
// Idempotent: skips runs already present (by workload/semver/digest) unless force.
export async function ingestAll(
  db: Database,
  reportsDir: string,
  opts: { force?: boolean } = {},
): Promise<number> {
  if (!existsSync(reportsDir)) return 0;
  let n = 0;
  for (const semver of readdirSync(reportsDir)) {
    const verDir = join(reportsDir, semver);
    let digests: string[] = [];
    try { digests = readdirSync(verDir); } catch { continue; }
    for (const digest of digests) {
      const dir = join(verDir, digest);
      if (!existsSync(join(dir, "results.json.gz"))) continue;
      const stored = await readResults(dir);
      if (!opts.force) {
        const present = db
          .query("SELECT 1 FROM runs WHERE workload = ? AND semver = ? AND digest = ?")
          .get(stored.meta.workload, stored.meta.elide.semver, stored.meta.elide.digest);
        if (present) continue;
      }
      ingestRun(db, stored);
      n++;
    }
  }
  return n;
}
```

- [ ] **Step 7: Run the tests — expect PASS**

Run: `cd harness && bun test src/db/ingest.test.ts`
Expected: PASS (2 tests).

- [ ] **Step 8: Typecheck + commit**

```bash
cd harness && bun run typecheck
git add harness/src/db .gitignore
git commit -m "feat: derived sqlite results db (schema, open, ingest)"
```

---

## Task 3: `db build` subcommand + CLI dispatch refactor

**Files:**
- Modify: `harness/src/cli.ts`

**Interfaces:**
- Consumes: `openDb`, `resetDb` (`./db/open`, `./db/schema`), `ingestAll` (`./db/ingest`).
- Produces: a CLI dispatcher routing `run | db build` (and reserves `diff | impact | query` added in later tasks); constant `DB_PATH`.

- [ ] **Step 1: Add the DB path constant and `dbBuild` function to `harness/src/cli.ts`**

Add after the `MARK` constant (around line 54):

```ts
import { openDb } from "./db/open";
import { resetDb } from "./db/schema";
import { ingestAll } from "./db/ingest";

const DB_PATH = resolve(".harness/results.sqlite");

export async function dbBuild(reportsDir = resolve("reports")): Promise<number> {
  const db = openDb(DB_PATH);
  resetDb(db);
  const n = await ingestAll(db, reportsDir, { force: true });
  console.log(`db build: ingested ${n} run(s) into ${DB_PATH}`);
  return 0;
}
```

(Place the three `import` lines with the other imports at the top.)

- [ ] **Step 2: Replace the `import.meta.main` dispatch block (lines 117-124)**

```ts
if (import.meta.main) {
  const argv = Bun.argv.slice(2);
  const command = argv[0];
  let code = 0;
  switch (command) {
    case "run":
      code = await main(parseArgs(argv));
      break;
    case "db":
      if (argv[1] !== "build") {
        console.error("usage: cli.ts db build");
        code = 2;
      } else {
        code = await dbBuild();
      }
      break;
    default:
      console.error("usage: cli.ts <run|db build|diff|impact|query> …");
      code = 2;
  }
  process.exit(code);
}
```

- [ ] **Step 3: Verify existing unit tests still pass + typecheck**

Run: `cd harness && bun test && bun run typecheck`
Expected: all existing tests pass (parseArgs unaffected), typecheck clean.

- [ ] **Step 4: Manually verify `db build` runs against an empty reports dir**

Run: `cd harness && bun run src/cli.ts db build`
Expected: prints `db build: ingested 0 run(s) into …/.harness/results.sqlite`; creates `.harness/results.sqlite`. (Then `rm -rf ../.harness` to clean.)

- [ ] **Step 5: Commit**

```bash
git add harness/src/cli.ts
git commit -m "feat: cli subcommand dispatch + db build"
```

---

## Task 4: Version diff (pure + DB + per-run `changes.{md,json}`)

**Files:**
- Create: `harness/src/analyze/diff.ts`, `harness/src/analyze/diff.test.ts`
- Modify: `harness/src/cli.ts`

**Interfaces:**
- Consumes: `StoredRun`/`readResults` (`../results/store`), `Database` (`bun:sqlite`).
- Produces:
  - types `RunRef = { semver: string; digest: string }`, `RunResults = { ref: RunRef; statuses: Map<string,string> }`, `DiffResult = { from: RunRef; to: RunRef; fixed: string[]; regressed: string[]; added: number; removed: number; stillFailing: number }`
  - `diffRuns(a: RunResults, b: RunResults): DiffResult` (pure)
  - `renderDiffMd(d: DiffResult): string`
  - `toRunResults(run: StoredRun): RunResults`
  - `findPreviousRunDir(reportsDir: string, workload: string, current: RunRef): Promise<string | null>`

- [ ] **Step 1: Write the failing test `harness/src/analyze/diff.test.ts`**

```ts
import { test, expect } from "bun:test";
import { diffRuns, renderDiffMd, type RunResults } from "./diff";

const a: RunResults = {
  ref: { semver: "1.0.0", digest: "aaa" },
  statuses: new Map([
    ["x default", "pass"],
    ["y default", "fail"],
    ["z default", "fail"],
    ["gone default", "pass"],
  ]),
};
const b: RunResults = {
  ref: { semver: "1.1.0", digest: "bbb" },
  statuses: new Map([
    ["x default", "fail"], // regressed
    ["y default", "pass"], // fixed
    ["z default", "error"], // still failing
    ["new default", "pass"], // added
  ]),
};

test("buckets fixed/regressed/added/removed/stillFailing", () => {
  const d = diffRuns(a, b);
  expect(d.regressed).toEqual(["x default"]);
  expect(d.fixed).toEqual(["y default"]);
  expect(d.stillFailing).toBe(1); // z
  expect(d.added).toBe(1); // new
  expect(d.removed).toBe(1); // gone
});

test("renders markdown with the version refs and counts", () => {
  const md = renderDiffMd(diffRuns(a, b));
  expect(md).toContain("1.0.0");
  expect(md).toContain("1.1.0");
  expect(md).toContain("Regressed (1)");
  expect(md).toContain("Fixed (1)");
});
```

- [ ] **Step 2: Run it — expect FAIL**

Run: `cd harness && bun test src/analyze/diff.test.ts`

- [ ] **Step 3: Write `harness/src/analyze/diff.ts`**

```ts
import { readdirSync, existsSync } from "node:fs";
import { join } from "node:path";
import type { Database } from "bun:sqlite";
import { readResults, type StoredRun } from "../results/store";

export interface RunRef { semver: string; digest: string }
export interface RunResults { ref: RunRef; statuses: Map<string, string> }
export interface DiffResult {
  from: RunRef;
  to: RunRef;
  fixed: string[];
  regressed: string[];
  added: number;
  removed: number;
  stillFailing: number;
}

const isFail = (s: string | undefined): boolean => s === "fail" || s === "error";

export function diffRuns(a: RunResults, b: RunResults): DiffResult {
  const d: DiffResult = {
    from: a.ref, to: b.ref,
    fixed: [], regressed: [], added: 0, removed: 0, stillFailing: 0,
  };
  for (const [id, bs] of b.statuses) {
    const as = a.statuses.get(id);
    if (as === undefined) { d.added++; continue; }
    if (isFail(as) && bs === "pass") d.fixed.push(id);
    else if (as === "pass" && isFail(bs)) d.regressed.push(id);
    else if (isFail(as) && isFail(bs)) d.stillFailing++;
  }
  for (const id of a.statuses.keys()) if (!b.statuses.has(id)) d.removed++;
  d.fixed.sort();
  d.regressed.sort();
  return d;
}

export function renderDiffMd(d: DiffResult): string {
  const lines: string[] = [];
  lines.push(`# Changes — \`${d.from.semver}\` → \`${d.to.semver}\``, "");
  lines.push(`- From: \`${d.from.semver}\` (\`${d.from.digest}\`)`);
  lines.push(`- To: \`${d.to.semver}\` (\`${d.to.digest}\`)`, "");
  lines.push(`| regressed | fixed | added | removed | still failing |`);
  lines.push(`|---:|---:|---:|---:|---:|`);
  lines.push(`| ${d.regressed.length} | ${d.fixed.length} | ${d.added} | ${d.removed} | ${d.stillFailing} |`, "");
  if (d.regressed.length) {
    lines.push(`## ❌ Regressed (${d.regressed.length})`, "");
    for (const id of d.regressed.slice(0, 200)) lines.push(`- \`${id}\``);
    if (d.regressed.length > 200) lines.push(`- …and ${d.regressed.length - 200} more`);
    lines.push("");
  }
  if (d.fixed.length) {
    lines.push(`## ✅ Fixed (${d.fixed.length})`, "");
    for (const id of d.fixed.slice(0, 200)) lines.push(`- \`${id}\``);
    if (d.fixed.length > 200) lines.push(`- …and ${d.fixed.length - 200} more`);
    lines.push("");
  }
  return lines.join("\n");
}

export function toRunResults(run: StoredRun): RunResults {
  const statuses = new Map<string, string>();
  for (const r of run.results) if (r.kind === "test") statuses.set(r.id, r.status);
  return { ref: { semver: run.meta.elide.semver, digest: run.meta.elide.digest }, statuses };
}

// Find the most recent OTHER run dir for this workload (by finished_at), or null.
export async function findPreviousRunDir(
  reportsDir: string,
  workload: string,
  current: RunRef,
): Promise<string | null> {
  if (!existsSync(reportsDir)) return null;
  let best: { dir: string; finishedAt: string } | null = null;
  for (const semver of readdirSync(reportsDir)) {
    const verDir = join(reportsDir, semver);
    let digests: string[] = [];
    try { digests = readdirSync(verDir); } catch { continue; }
    for (const digest of digests) {
      const dir = join(verDir, digest);
      const sp = join(dir, "summary.json");
      if (!existsSync(sp)) continue;
      const s = JSON.parse(await Bun.file(sp).text());
      if (s.meta.workload !== workload) continue;
      if (s.meta.elide.semver === current.semver && digest.startsWith(current.digest.slice(0, 12))) continue;
      const finishedAt = s.meta.finishedAt as string;
      if (!best || finishedAt > best.finishedAt) best = { dir, finishedAt };
    }
  }
  return best?.dir ?? null;
}

// Load a run's per-test statuses from the DB by run id.
export function loadRunResultsFromDb(db: Database, runId: number, ref: RunRef): RunResults {
  const rows = db.query("SELECT test_id, status FROM results WHERE run_id = ?").all(runId) as
    { test_id: string; status: string }[];
  const statuses = new Map<string, string>();
  for (const row of rows) statuses.set(row.test_id, row.status);
  return { ref, statuses };
}
```

- [ ] **Step 4: Run the test — expect PASS**

Run: `cd harness && bun test src/analyze/diff.test.ts`
Expected: PASS (2 tests).

- [ ] **Step 5: Emit `changes.{md,json}` at run time. Modify `harness/src/cli.ts` `main`** — after the `rebuildTopIndex` write (line 107), add:

```ts
  // Per-version changelog vs the previous run of this workload.
  const prevDir = await findPreviousRunDir(o.reportsDir, wl.id, identity);
  if (prevDir) {
    const prev = toRunResults(await readResults(prevDir));
    const diff = diffRuns(prev, toRunResults({ meta, results }));
    await Bun.write(join(outDir, "changes.json"), JSON.stringify(diff, null, 2));
    await Bun.write(join(outDir, "changes.md"), renderDiffMd(diff));
  }
```

Add imports at the top of `cli.ts`:
```ts
import { readResults } from "./results/store";
import { diffRuns, renderDiffMd, toRunResults, findPreviousRunDir } from "./analyze/diff";
```
(Note: `writeResults` is already imported from `./results/store`; extend that import to also include `readResults`.)

- [ ] **Step 6: Add the `diff` subcommand. In the `import.meta.main` switch, add a case before `default`:**

```ts
    case "diff": {
      const reportsDir = resolve("reports");
      const db = openDb(DB_PATH);
      await ingestAll(db, reportsDir);
      const workload = "test262";
      const rows = db
        .query(`SELECT id, semver, digest FROM runs WHERE workload = ? ORDER BY finished_at DESC`)
        .all(workload) as { id: number; semver: string; digest: string }[];
      const pick = (ref?: string) =>
        ref ? rows.find((r) => r.semver === ref || `${r.semver}/${r.digest}` === ref) : undefined;
      const b = pick(argv[1]) ?? rows[0];
      const a = pick(argv[2]) ?? rows[1];
      if (!a || !b) { console.error("need two runs to diff (run `db build` first)"); code = 2; break; }
      const ra = loadRunResultsFromDb(db, a.id, { semver: a.semver, digest: a.digest });
      const rb = loadRunResultsFromDb(db, b.id, { semver: b.semver, digest: b.digest });
      console.log(renderDiffMd(diffRuns(ra, rb)));
      break;
    }
```
Extend the diff import to include `loadRunResultsFromDb`.

- [ ] **Step 7: Verify whole suite + typecheck**

Run: `cd harness && bun test && bun run typecheck`
Expected: all green.

- [ ] **Step 8: Commit**

```bash
git add harness/src/analyze/diff.ts harness/src/analyze/diff.test.ts harness/src/cli.ts
git commit -m "feat: version diff (pure + db + per-run changes.{md,json})"
```

---

## Task 5: Impact analysis (pure + per-run `impact.{md,json}` + `impact` subcommand)

**Files:**
- Create: `harness/src/analyze/impact.ts`, `harness/src/analyze/impact.test.ts`
- Modify: `harness/src/cli.ts`

**Interfaces:**
- Consumes: `normalizeSignature` (`./signature`), `Database` (`bun:sqlite`).
- Produces:
  - types `FailRow = { id: string; status: string; message?: string; features: string[] }`, `ImpactCluster = { signature: string; count: number; exampleIds: string[] }`, `FeatureCount = { feature: string; count: number }`, `Impact = { bySignature: ImpactCluster[]; byFeature: FeatureCount[] }`
  - `computeImpact(rows: FailRow[]): Impact` (pure)
  - `renderImpactMd(i: Impact): string`

- [ ] **Step 1: Write the failing test `harness/src/analyze/impact.test.ts`**

```ts
import { test, expect } from "bun:test";
import { computeImpact, renderImpactMd, type FailRow } from "./impact";

const rows: FailRow[] = [
  { id: "a default", status: "fail", message: "TypeError: Cannot load module: 'vm'", features: ["modules"] },
  { id: "b default", status: "fail", message: "TypeError: Cannot load module: 'fs'", features: ["modules"] },
  { id: "c default", status: "error", message: "ReferenceError: print is not defined", features: [] },
  { id: "d default", status: "pass", message: "", features: [] }, // ignored (not failing)
];

test("clusters by normalized signature, ranked by blast radius", () => {
  const imp = computeImpact(rows);
  expect(imp.bySignature[0].signature).toBe("TypeError: Cannot load module: <str>");
  expect(imp.bySignature[0].count).toBe(2);
  expect(imp.bySignature[0].exampleIds).toEqual(["a default", "b default"]);
  expect(imp.bySignature[1].count).toBe(1);
});

test("rolls up by feature, ignoring non-failing rows", () => {
  const imp = computeImpact(rows);
  expect(imp.byFeature).toEqual([{ feature: "modules", count: 2 }]);
});

test("markdown is impact-ordered", () => {
  const md = renderImpactMd(computeImpact(rows));
  expect(md.indexOf("Cannot load module")).toBeLessThan(md.indexOf("print is not defined"));
});
```

- [ ] **Step 2: Run it — expect FAIL**

Run: `cd harness && bun test src/analyze/impact.test.ts`

- [ ] **Step 3: Write `harness/src/analyze/impact.ts`**

```ts
import { normalizeSignature } from "./signature";

export interface FailRow { id: string; status: string; message?: string; features: string[] }
export interface ImpactCluster { signature: string; count: number; exampleIds: string[] }
export interface FeatureCount { feature: string; count: number }
export interface Impact { bySignature: ImpactCluster[]; byFeature: FeatureCount[] }

const isFail = (s: string): boolean => s === "fail" || s === "error";

export function computeImpact(rows: FailRow[]): Impact {
  const sig = new Map<string, ImpactCluster>();
  const feat = new Map<string, number>();
  for (const r of rows) {
    if (!isFail(r.status)) continue;
    const key = normalizeSignature(r.message);
    let cl = sig.get(key);
    if (!cl) { cl = { signature: key, count: 0, exampleIds: [] }; sig.set(key, cl); }
    cl.count++;
    if (cl.exampleIds.length < 5) cl.exampleIds.push(r.id);
    for (const f of r.features) feat.set(f, (feat.get(f) ?? 0) + 1);
  }
  const bySignature = [...sig.values()].sort((a, b) => b.count - a.count || a.signature.localeCompare(b.signature));
  const byFeature = [...feat.entries()]
    .map(([feature, count]) => ({ feature, count }))
    .sort((a, b) => b.count - a.count || a.feature.localeCompare(b.feature));
  return { bySignature, byFeature };
}

export function renderImpactMd(i: Impact): string {
  const lines: string[] = ["# Impact-ordered failures", ""];
  if (!i.bySignature.length) { lines.push("_No failures._", ""); return lines.join("\n"); }
  lines.push("## By root-cause signature", "", "| count | signature | example |", "|---:|---|---|");
  for (const c of i.bySignature) {
    lines.push(`| ${c.count} | ${c.signature.replace(/\|/g, "\\|")} | \`${c.exampleIds[0] ?? ""}\` |`);
  }
  lines.push("");
  if (i.byFeature.length) {
    lines.push("## By feature", "", "| count | feature |", "|---:|---|");
    for (const f of i.byFeature) lines.push(`| ${f.count} | ${f.feature} |`);
    lines.push("");
  }
  return lines.join("\n");
}
```

- [ ] **Step 4: Run the test — expect PASS**

Run: `cd harness && bun test src/analyze/impact.test.ts`
Expected: PASS (3 tests).

- [ ] **Step 5: Emit `impact.{md,json}` at run time. In `harness/src/cli.ts` `main`, after the `changes` block from Task 4, add:**

```ts
  // Impact-ordered failure clustering for this run.
  const failRows = tests
    .filter((t) => t.status === "fail" || t.status === "error")
    .map((t) => ({
      id: t.id,
      status: t.status,
      message: t.message,
      features: (t.meta?.features as string[]) ?? [],
    }));
  const impact = computeImpact(failRows);
  await Bun.write(join(outDir, "impact.json"), JSON.stringify(impact, null, 2));
  await Bun.write(join(outDir, "impact.md"), renderImpactMd(impact));
```

Add import at the top of `cli.ts`:
```ts
import { computeImpact, renderImpactMd } from "./analyze/impact";
```

- [ ] **Step 6: Add the `impact` subcommand. In the `import.meta.main` switch, add a case before `default`:**

```ts
    case "impact": {
      const db = openDb(DB_PATH);
      await ingestAll(db, resolve("reports"));
      const where = argv[1]
        ? "WHERE workload = 'test262' AND semver = ?" + (argv[2] ? " AND digest LIKE ?||'%'" : "")
        : "WHERE workload = 'test262'";
      const params = argv[1] ? (argv[2] ? [argv[1], argv[2]] : [argv[1]]) : [];
      const run = db
        .query(`SELECT id FROM runs ${where} ORDER BY finished_at DESC LIMIT 1`)
        .get(...params) as { id: number } | undefined;
      if (!run) { console.error("no matching run (run `db build` first)"); code = 2; break; }
      const rows = db
        .query("SELECT test_id, status, message, features FROM results WHERE run_id = ? AND status IN ('fail','error')")
        .all(run.id) as { test_id: string; status: string; message: string | null; features: string | null }[];
      const failRows = rows.map((r) => ({
        id: r.test_id, status: r.status,
        message: r.message ?? undefined,
        features: r.features ? r.features.split(",") : [],
      }));
      console.log(renderImpactMd(computeImpact(failRows)));
      break;
    }
```

- [ ] **Step 7: Verify whole suite + typecheck**

Run: `cd harness && bun test && bun run typecheck`
Expected: all green.

- [ ] **Step 8: Commit**

```bash
git add harness/src/analyze/impact.ts harness/src/analyze/impact.test.ts harness/src/cli.ts
git commit -m "feat: impact-ordered failure clustering (pure + per-run impact.{md,json} + cli)"
```

---

## Task 6: Ratchet

**Files:**
- Create: `harness/src/expectations/ratchet.ts`, `harness/src/expectations/ratchet.test.ts`
- Modify: `harness/src/expectations/load.ts`, `harness/src/expectations/compare.ts`, `harness/src/cli.ts`

**Interfaces:**
- Consumes: `Expectations` (`./load`), `expectedFor` + `filePathOf` (`./compare`), `TestResult` (`../results/schema`).
- Produces:
  - `ratchetPath(expectationsDir: string, suite: string): string`
  - `loadRatchet(path: string): Set<string>`
  - `writeRatchet(path: string, ids: string[], header: string): void`
  - `ratchetCandidates(tests: TestResult[], exp: Expectations): string[]`
  - `load.ts`: `Expectations` gains `ratchet: Set<string>`; `loadExpectations` merges the sibling ratchet file.
  - `compare.ts`: `compare` is ratchet-aware; `filePathOf` is exported.

- [ ] **Step 1: Export `filePathOf` from `harness/src/expectations/compare.ts`**

Change line 12 from `function filePathOf` to `export function filePathOf`.

- [ ] **Step 2: Make `compare` ratchet-aware. Replace the loop body's `expected` handling (lines 45-49) in `compare.ts`:**

```ts
    const globExpected = expectedForEntries(entries, filePathOf(r.id));
    if (globExpected === "skip") {
      c.counts.skip++;
      continue;
    }
    const expected: ExpectedStatus =
      globExpected === "fail" || exp.ratchet.has(r.id) ? "fail" : "pass";
```
(The rest of the loop — the `if (r.status === "pass") … else …` block — is unchanged and now reads this `expected`.)

- [ ] **Step 3: Add `ratchet` to `Expectations` and load the sibling file. Modify `harness/src/expectations/load.ts`:**

In `parseExpectations`, change the return to `return { entries, ratchet: new Set<string>() };` and update the interface:
```ts
export interface Expectations {
  entries: ExpectationEntry[];
  ratchet: Set<string>;
}
```
Replace `loadExpectations`:
```ts
export function loadExpectations(path: string): Expectations {
  const exp = parseExpectations(readFileSync(path, "utf8"));
  const ratchetFile = path.replace(/\.toml$/, ".ratchet.toml");
  if (existsSync(ratchetFile)) {
    const raw = parse(readFileSync(ratchetFile, "utf8")) as { fail?: Record<string, string> };
    for (const id of Object.keys(raw.fail ?? {})) exp.ratchet.add(id);
  }
  return exp;
}
```
Add `existsSync` to the `node:fs` import.

- [ ] **Step 4: Write the failing test `harness/src/expectations/ratchet.test.ts`**

```ts
import { test, expect } from "bun:test";
import { mkdtempSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { writeRatchet, loadRatchet, ratchetCandidates } from "./ratchet";
import { parseExpectations } from "./load";
import { compare } from "./compare";
import type { TestResult } from "../results/schema";

const mk = (id: string, status: TestResult["status"]): TestResult => ({ kind: "test", id, status });

test("writeRatchet then loadRatchet round-trips exact ids", () => {
  const dir = mkdtempSync(join(tmpdir(), "ratchet-"));
  const p = join(dir, "test262.ratchet.toml");
  writeRatchet(p, ["test/a.js default", "test/b.js strict mode"], "# header");
  const set = loadRatchet(p);
  expect(set.has("test/a.js default")).toBe(true);
  expect(set.has("test/b.js strict mode")).toBe(true);
});

test("ratchetCandidates = failing ids not covered by skip/[fail] globs", () => {
  const exp = parseExpectations(`
[skip]
"test/skipme/**" = "x"
[fail]
"test/known/**" = "y"
`);
  const tests = [
    mk("test/new/a.js default", "fail"), // candidate
    mk("test/known/b.js default", "fail"), // covered by [fail]
    mk("test/skipme/c.js default", "fail"), // covered by skip
    mk("test/ok/d.js default", "pass"), // passing
  ];
  expect(ratchetCandidates(tests, exp)).toEqual(["test/new/a.js default"]);
});

test("a ratcheted failing id is expected (not a regression)", () => {
  const exp = parseExpectations("");
  exp.ratchet.add("test/new/a.js default");
  const c = compare([mk("test/new/a.js default", "fail")], exp);
  expect(c.regressions).toHaveLength(0);
  expect(c.counts.fail).toBe(1);
});

test("a ratcheted id that now passes surfaces as a new pass", () => {
  const exp = parseExpectations("");
  exp.ratchet.add("test/new/a.js default");
  const c = compare([mk("test/new/a.js default", "pass")], exp);
  expect(c.newPasses.map((r) => r.id)).toEqual(["test/new/a.js default"]);
});
```

- [ ] **Step 5: Run it — expect FAIL**

Run: `cd harness && bun test src/expectations/ratchet.test.ts`

- [ ] **Step 6: Write `harness/src/expectations/ratchet.ts`**

```ts
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { parse } from "smol-toml";
import type { Expectations } from "./load";
import { expectedFor, filePathOf } from "./compare";
import type { TestResult } from "../results/schema";

export function ratchetPath(expectationsDir: string, suite: string): string {
  return join(expectationsDir, `${suite}.ratchet.toml`);
}

export function loadRatchet(path: string): Set<string> {
  if (!existsSync(path)) return new Set();
  const raw = parse(readFileSync(path, "utf8")) as { fail?: Record<string, string> };
  return new Set(Object.keys(raw.fail ?? {}));
}

// Failing test ids not already covered by hand-curated [skip]/[fail] globs.
export function ratchetCandidates(tests: TestResult[], exp: Expectations): string[] {
  const out: string[] = [];
  for (const t of tests) {
    if (t.status !== "fail" && t.status !== "error") continue;
    if (expectedFor(exp, filePathOf(t.id)) === "pass") out.push(t.id);
  }
  return out.sort();
}

export function writeRatchet(path: string, ids: string[], header: string): void {
  const lines = [header, "", "[fail]"];
  // smol-toml quotes are double-quotes; ids contain no double-quotes in test262.
  for (const id of [...ids].sort()) lines.push(`"${id}" = ""`);
  writeFileSync(path, lines.join("\n") + "\n", "utf8");
}
```

- [ ] **Step 7: Run the tests — expect PASS**

Run: `cd harness && bun test src/expectations/ratchet.test.ts && bun test src/expectations/compare.test.ts`
Expected: ratchet tests pass; the existing compare tests still pass (ratchet defaults empty).

- [ ] **Step 8: Wire `--ratchet` into the CLI. In `harness/src/cli.ts`:**

Add to `CliOptions`: `ratchet: boolean;` and in `parseArgs` add `ratchet: rest.includes("--ratchet"),`.

In `main`, immediately after `const cmp = compare(tests, exp);` (line 90), add:

```ts
  let comparison = cmp;
  if (o.ratchet) {
    const ids = ratchetCandidates(tests, exp);
    const header =
      `# AUTO-GENERATED by \`run --ratchet\`. Do not edit by hand.\n` +
      `# Generated for elide ${identity.semver} (sha ${identity.digest.slice(0, 12)}) on ${finishedAt}.`;
    writeRatchet(ratchetPath(o.expectationsDir, wl.id), ids, header);
    for (const id of ids) exp.ratchet.add(id);
    comparison = compare(tests, exp); // re-evaluate: ratcheted fails are now expected
  }
```
Then replace every remaining use of `cmp` in `main` (the `writeSummaryJson`, `renderSuiteReport`, `renderRunIndex`, the green check, and the summary log — lines 104-114) with `comparison`.

Add imports at the top of `cli.ts`:
```ts
import { ratchetCandidates, writeRatchet, ratchetPath } from "./expectations/ratchet";
```

- [ ] **Step 9: Verify whole suite + typecheck**

Run: `cd harness && bun test && bun run typecheck`
Expected: all green.

- [ ] **Step 10: Commit**

```bash
git add harness/src/expectations/ratchet.ts harness/src/expectations/ratchet.test.ts \
        harness/src/expectations/load.ts harness/src/expectations/compare.ts harness/src/cli.ts
git commit -m "feat: ratchet baseline (machine-owned ratchet file, --ratchet, ratchet-aware compare)"
```

---

## Task 7: `reports/index.json` + `query` subcommand

**Files:**
- Modify: `harness/src/report/index.ts`, `harness/src/cli.ts`
- Create: `harness/src/report/index.test.ts`

**Interfaces:**
- Consumes: existing `rebuildTopIndex` machinery in `report/index.ts`.
- Produces: `buildIndexJson(reportsDir: string): Promise<object>` (the machine index); a `query` subcommand.

- [ ] **Step 1: Write the failing test `harness/src/report/index.test.ts`**

```ts
import { test, expect } from "bun:test";
import { mkdtempSync, mkdirSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { buildIndexJson } from "./index";

test("buildIndexJson lists each run with counts and paths", async () => {
  const root = mkdtempSync(join(tmpdir(), "idx-"));
  const dir = join(root, "1.3.5", "abcd1234ef56");
  mkdirSync(dir, { recursive: true });
  await Bun.write(join(dir, "summary.json"), JSON.stringify({
    meta: { workload: "test262", elide: { semver: "1.3.5", digest: "abcd1234ef56" }, finishedAt: "2026-06-26T00:00:00Z" },
    counts: { pass: 90, fail: 10, skip: 0, error: 0, total: 100 },
    regressions: [], newPasses: [],
  }));
  const idx = await buildIndexJson(root) as any;
  expect(idx.runs).toHaveLength(1);
  expect(idx.runs[0]).toMatchObject({
    workload: "test262", semver: "1.3.5", digest: "abcd1234ef56",
    pass: 90, total: 100, regressions: 0,
    reportDir: "1.3.5/abcd1234ef56",
  });
});
```

- [ ] **Step 2: Run it — expect FAIL**

Run: `cd harness && bun test src/report/index.test.ts`

- [ ] **Step 3: Add `buildIndexJson` to `harness/src/report/index.ts`**

```ts
export interface IndexEntry {
  workload: string; semver: string; digest: string;
  pass: number; total: number; regressions: number;
  finishedAt: string; reportDir: string;
}

export async function buildIndexJson(reportsDir: string): Promise<{ runs: IndexEntry[] }> {
  const runs: IndexEntry[] = [];
  if (existsSync(reportsDir)) {
    for (const semver of readdirSync(reportsDir)) {
      const verDir = join(reportsDir, semver);
      let digests: string[] = [];
      try { digests = readdirSync(verDir); } catch { continue; }
      for (const digest of digests) {
        const sp = join(verDir, digest, "summary.json");
        if (!existsSync(sp)) continue;
        const s = JSON.parse(await Bun.file(sp).text());
        runs.push({
          workload: s.meta.workload,
          semver: s.meta.elide.semver,
          digest,
          pass: s.counts.pass,
          total: s.counts.total,
          regressions: s.regressions.length,
          finishedAt: s.meta.finishedAt,
          reportDir: `${semver}/${digest}`,
        });
      }
    }
  }
  runs.sort((a, b) => b.finishedAt.localeCompare(a.finishedAt));
  return { runs };
}
```
(`readdirSync`, `existsSync`, `join` are already imported in this file.)

- [ ] **Step 4: Run the test — expect PASS**

Run: `cd harness && bun test src/report/index.test.ts`
Expected: PASS.

- [ ] **Step 5: Emit `index.json` from `run`. In `harness/src/cli.ts` `main`, right after the `rebuildTopIndex` write (line 107), add:**

```ts
  await Bun.write(join(o.reportsDir, "index.json"), JSON.stringify(await buildIndexJson(o.reportsDir), null, 2));
```
Extend the `./report/index` import to include `buildIndexJson`.

- [ ] **Step 6: Add the read-only `query` subcommand. In the `import.meta.main` switch, add before `default`:**

```ts
    case "query": {
      const sql = argv[1] ?? "";
      if (!/^\s*(select|with)\b/i.test(sql)) {
        console.error("query: only read-only SELECT/WITH statements are allowed");
        code = 2; break;
      }
      const db = openDb(DB_PATH);
      await ingestAll(db, resolve("reports"));
      console.log(JSON.stringify(db.query(sql).all(), null, 2));
      break;
    }
```

- [ ] **Step 7: Verify whole suite + typecheck**

Run: `cd harness && bun test && bun run typecheck`
Expected: all green.

- [ ] **Step 8: Commit**

```bash
git add harness/src/report/index.ts harness/src/report/index.test.ts harness/src/cli.ts
git commit -m "feat: reports/index.json (web-ui contract) + read-only query subcommand"
```

---

## Self-Review

**Spec coverage:**
- §2 two data planes → Tasks 2 (sqlite, gitignored), 4/5 (per-run json/md from committed files), 7 (index.json). ✓
- §3 decisions → ratchet file (T6), derived db (T2), committed json contract (T4/5/7), signature impact (T1/5), no migrations (T2 `resetDb`). ✓
- §4 schema → T2 verbatim. ✓
- §5 ratchet → T6 (separate file, merge in load, ratchet-aware compare, `--ratchet`, exact ids, auto-tighten via new-pass). ✓
- §6 impact → T1 signature + T5 cluster/rank/feature + impact.{md,json} + `impact` cmd. ✓
- §7 diff → T4 buckets + defaults to latest two + per-run changes.{md,json} + `diff` cmd. ✓
- §8 web-ui readiness → committed json contract (T4/5/7); `site/` is a doc-level reservation (no code this phase). ✓
- §9 module layout → matches Tasks 1-7. ✓
- §10 CLI surface → run/db build/diff/impact/query all implemented (T3/4/5/7). ✓
- §11 build sequence → Tasks ordered identically. ✓
- §12 testing → pure unit tests (T1,4,5,6,7), `:memory:` ingest (T2), compare ratchet tests (T6). ✓

**Placeholder scan:** No TBD/TODO. The ratchet file body uses `""` reasons by design (machine-owned). All code steps show complete code. ✓

**Type consistency:** `Expectations` gains `ratchet: Set<string>` in T6 and every constructor (`parseExpectations`) is updated; `compare` reads `exp.ratchet`. `filePathOf` exported in T6 and consumed by `ratchet.ts`. `RunResults`/`RunRef`/`DiffResult` (T4) and `FailRow`/`Impact` (T5) are used consistently in their CLI cases. `StoredRun` shape (`{meta:{workload,kind,elide:{semver,digest},…}, results}`) matches `results/store.ts` and `results/schema.ts`. DB column names (`run_id,test_id,status,message,signature,features`) consistent across schema/ingest/diff/impact queries. ✓

**One ordering note for the implementer:** Tasks 4, 5, 7 each append a block to the same region of `main` (after `rebuildTopIndex`). Apply them in task order; each new block goes after the previous one. The `--ratchet` change (T6) sets `comparison`, which T4/T5 blocks must read for failure data — but T4/T5 derive failures from `tests` (raw results), not `comparison`, so order between T6 and T4/T5 does not matter.
