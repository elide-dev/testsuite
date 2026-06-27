# Results Database & Analysis — Design

**Date:** 2026-06-26
**Status:** Approved design, pending spec review
**Author:** Sam Gammon (with Claude)
**Builds on:** `2026-06-26-compliance-harness-design.md` (the harness this extends)

## 1. Purpose

Four interlocking enhancements to the compliance harness, as one coherent phase:

1. **Ratchet** — a `run --ratchet` flag that accepts the current run's failures as a machine-owned baseline, so only *new* failures break CI.
2. **Version diff** — detect what changed between two Elide versions (fixed / regressed / added / removed).
3. **Local results database** — a SQLite store of all result sets, queryable for analysis and (someday) a web UI.
4. **Impact-ordered failure summary** — cluster failures by root-cause signature so a single underlying bug that breaks many tests is fixed first.

## 2. Architecture: two data planes

The committed `results.json.gz` per run remains the source of truth. Two derived planes sit on top:

- **Local analysis plane** — `.harness/results.sqlite` (gitignored, derived via Bun's built-in `bun:sqlite`). Built by ingesting committed `results.json.gz` files. Powers the `diff` / `impact` / `query` CLIs. Fast, expressive, disposable, rebuildable anywhere.
- **Published plane (the web-UI contract)** — committed static files a future Bun-built static bundle can `fetch()` with no server:
  - per run (in `reports/<semver>/<short-digest>/<workload>/`): `results.json.gz`, `summary.json`, **`impact.json`**, **`changes.json`**, plus human `<workload>.md`, `impact.md`, `changes.md`.
  - top level: `reports/index.md` **+ `reports/index.json`** (machine index of every revision → suites → counts/pass-rate/paths) — the entry point a static UI loads.

Every analysis (impact, diff) emits **both** a committed `.json` (machine/UI) and `.md` (human) form. The SQLite DB is never the web UI's data source; it is derived from the same committed JSON, so the planes cannot drift.

```
reports/<ver>/<digest>/<workload>/results.json.gz
                                                ← committed source of truth
   │  ingest (run auto-ingests itself; `db build` rebuilds all)
   ▼
.harness/results.sqlite (gitignored)          ← local analysis engine
   │
   ├─ diff   → reports/<ver>/<digest>/<workload>/changes.{md,json}   (+ `harness diff`)
   ├─ impact → reports/<ver>/<digest>/<workload>/impact.{md,json}    (+ `harness impact`)
   └─ query  → ad-hoc SQL (`harness query`)

reports/index.{md,json}                        ← committed; static-UI entry point
site/                                          ← reserved for future Bun static bundle
```

## 3. Decisions (with rationale)

| Decision | Choice | Why |
|---|---|---|
| Ratchet storage | **Separate machine-owned `expectations/test262.ratchet.toml`** | Never clobbers hand-curated `[skip]`/`[fail]` reasons + issue links; regenerated wholesale. |
| Expected-fail rule | matches `[fail]` glob **OR** is in the ratchet set | Curated and ratcheted failures both suppress regressions. |
| SQLite storage | **Derived, gitignored, rebuildable** | Keeps git free of large binary churn (~94k rows/run); `results.json.gz` stays truth. |
| Web-UI data source | **Committed JSON/gz, not the DB** | Static hosting (Pages) cannot query SQLite serverlessly. |
| Impact grouping | **Normalized error signature** (primary), **feature tag** (secondary) | Surfaces single-root-cause blast radius; spec-area rollup as a second view. |
| Migrations | **None** | Single schema; `db build` drops and rebuilds. |
| Web UI | **Not built now**; not precluded | YAGNI; the JSON contract + reserved `site/` keep the door open. |

## 4. SQLite schema

```sql
CREATE TABLE runs (
  id           INTEGER PRIMARY KEY,
  workload     TEXT NOT NULL,
  semver       TEXT NOT NULL,
  digest       TEXT NOT NULL,
  suite_version TEXT,
  started_at   TEXT,
  finished_at  TEXT,
  UNIQUE (workload, semver, digest)
);
CREATE TABLE results (
  run_id    INTEGER NOT NULL REFERENCES runs(id) ON DELETE CASCADE,
  test_id   TEXT NOT NULL,
  status    TEXT NOT NULL,            -- pass | fail | skip | error
  message   TEXT,
  signature TEXT,                     -- normalized failure signature (null for pass/skip)
  features  TEXT                      -- comma-joined Test262 features
);
CREATE INDEX ix_results_run_status ON results(run_id, status);
CREATE INDEX ix_results_signature  ON results(signature);
CREATE INDEX ix_results_run_test   ON results(run_id, test_id);
```

A run is identified by `(workload, semver, digest)`; re-ingest **replaces** that workload/version/digest run while other workloads sharing the same Elide version and digest remain distinct on disk. `signature` and `features` are computed at ingest so queries stay cheap. `db build` drops and recreates the schema, then ingests every committed `results.json.gz`.

## 5. Ratchet

`run --ratchet`: after `compare()`, write every test whose actual status is `fail`/`error` **and** that is not already covered by `[skip]`/`[fail]` to `expectations/test262.ratchet.toml`, regenerated wholesale:

```toml
# AUTO-GENERATED by `run --ratchet`. Do not edit by hand; hand-curated
# expectations with reasons live in test262.toml. Regenerated wholesale.
# Generated for elide 1.3.5+… (sha c8be44d9…) on <ISO timestamp>.
[fail]
"test/language/types/object/S8.6.1_A1.js default" = ""
...
```

`loadExpectations(suite)` loads `test262.toml` and, if present, `test262.ratchet.toml`, merging entries. The ratchet entries are **exact test ids** (including scenario), not globs — `compare()` already strips the scenario suffix before glob matching, so ratchet entries are matched as exact ids via a fast set lookup before the glob scan. A test is **expected-fail** if it is in the ratchet id-set OR matches a `[fail]` glob; **skip** still wins over both.

Tightening is automatic: when a ratcheted test starts passing, it shows up as a **new pass** in the next run (the existing `compare()` bucket), prompting a re-ratchet that drops it.

## 6. Impact analysis

`analyze/signature.ts` — `normalizeSignature(name, message): string`:

1. Start from `"<ErrorName>: <message>"` (for our adapter, errors already arrive as `Name: message`; for Test262Error assertions the message is the assertion text).
2. Scrub variable content, in order:
   - quoted runs (`'…'`, `"…"`, `` `…` ``) → `<str>`
   - file refs (`…/x.js`, `file:line:col`, `:line:col`) → `<loc>`
   - standalone integers/hex/floats → `<n>`
3. Collapse whitespace; trim; truncate to 160 chars.

`analyze/impact.ts` — over a run's `fail`/`error` results, group by signature, count, and rank descending (the **blast radius**). Secondary rollup groups by each `features` tag. Emits:
- `impact.json`: `{ bySignature: [{signature, count, exampleIds:[…≤5]}], byFeature: [{feature, count}] }`
- `impact.md`: impact-ordered list + feature table.
- `harness impact [semver] [digest]`: prints the same (defaults to the latest run).

## 7. Version diff

`analyze/diff.ts` — `diffRuns(runA, runB)` queries both runs from the DB and buckets every test id:

- **fixed**: fail/error in A → pass in B
- **regressed**: pass in A → fail/error in B
- **added**: absent in A → present in B
- **removed**: present in A → absent in B
- **stillFailing**: fail/error in both

`harness diff [A] [B]` accepts version refs (`semver` or `semver/digest`); with no args it diffs the two most recent runs of the workload. Each `run` also writes, into its own report dir, `changes.{md,json}` comparing against the immediately-previous run of the same workload (the per-version changelog). Diff output forms:
- `changes.json`: `{ from:{semver,digest}, to:{semver,digest}, fixed:[ids], regressed:[ids], added:n, removed:n, stillFailing:n }`
- `changes.md`: human summary with counts and the regressed/fixed id lists (capped, full set in JSON).

## 8. Web-UI readiness (not built now)

- `site/` is reserved as the output dir for a future Bun-built static bundle (`Bun.build`), served from Pages alongside `reports/`.
- The committed JSON contract (§2) is the stable interface that bundle will consume; nothing in this phase needs a server.
- The CI `pages` job continues to publish `reports/`; a later phase adds `site/`.

## 9. Module layout

```
harness/src/
  db/
    open.ts        # open/create the sqlite, apply schema
    schema.ts      # DDL constant + drop/create
    ingest.ts      # StoredRun -> DB (upsert run, replace results); ingestAll(reportsDir)
  analyze/
    signature.ts   # normalizeSignature (pure)
    impact.ts      # cluster + rank (pure over results); render md/json
    diff.ts        # bucket two runs (pure over two result sets); render md/json
  expectations/
    ratchet.ts     # read/write expectations/<suite>.ratchet.toml
    load.ts        # (modified) merge ratchet ids into Expectations
    compare.ts     # (modified) expected-fail = ratchet id-set OR [fail] glob
  report/
    index.ts       # (modified) also emit reports/index.json
  cli.ts           # (modified) subcommands: run [--ratchet] | db build | diff | impact | query
```

`compare()` gains a ratchet id-set parameter (or `Expectations` carries it); pure analysis functions (`normalizeSignature`, impact clustering, diff bucketing) are unit-tested without a DB. `db/ingest.ts` and queries get a `:memory:` sqlite test. Everything else is additive.

## 10. CLI surface

```
bun run src/cli.ts run <workload> [--ratchet] [--log] [--include …] …   # run + auto-ingest
bun run src/cli.ts db build                                              # rebuild sqlite from committed runs
bun run src/cli.ts impact [semver] [digest]                              # impact-ordered failures
bun run src/cli.ts diff [A] [B]                                          # version diff (default: latest two)
bun run src/cli.ts query "<sql>"                                         # raw read-only SQL escape hatch
```

`run` auto-ingests its own just-finished result into the DB (idempotent upsert), so the DB is current without a manual `db build`; `db build` is the full rebuild / bootstrap.

## 11. Build sequence (for the plan)

1. `signature.ts` (pure) + tests.
2. `db/{schema,open,ingest}.ts` + `:memory:` ingest test.
3. Wire `run` to auto-ingest; add `db build` (ingest all committed runs).
4. `analyze/diff.ts` + `changes.{md,json}` from `run`; `diff` subcommand.
5. `analyze/impact.ts` + `impact.{md,json}` from `run`; `impact` subcommand.
6. Ratchet: `ratchet.ts`, `load.ts`/`compare.ts` changes, `run --ratchet`.
7. `reports/index.json` emission; `query` subcommand.

## 12. Testing

- Pure units (`normalizeSignature`, impact clustering, diff bucketing, ratchet read/write, index.json shape) → `bun:test`, no DB.
- DB ingest/query → `:memory:` sqlite fixtures.
- `compare()` ratchet behavior → extend existing compare tests (ratcheted id is expected-fail; skip still wins; passing ratcheted id → new pass).
- Integration (small slice through `run` → ingest → `diff`/`impact`) reuses the Docker e2e path; verified on a bounded `--include` slice.

## 13. Non-goals (YAGNI)

- No web UI implementation (only the data contract + reserved `site/`).
- No migrations framework (single schema; `db build` drops/recreates).
- No server/daemon; no cross-workload analytics; no historical charts.
- Signature normalization is heuristic for ordering, not a canonical taxonomy.
