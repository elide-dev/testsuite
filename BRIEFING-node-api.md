# Briefing: `node-api` compat work (Node.js core test suite)

_Self-contained handoff doc. Generated 2026-07-17 from the latest committed run._

## Context

This repo (`elide-dev` conformance testsuite) runs upstream conformance suites
against pinned [Elide](https://elide.dev) builds and publishes versioned
reports. The `node-api` suite runs a sparse slice of Node.js core's
`test/parallel/` JS tests (assert, async_hooks, buffer, console, dns, events,
fs, module/require, path, process, stream, timers, vm, worker groups — see
`manifests/node-api.toml`). Tests run against a checked-in `common/` overlay
(`node-api-overlay`), so `require('../common')` works without full Node
internals.

This is the lowest-scoring suite (25.4%) and was, until today, hidden from the
README summary table. It is now visible; the goal is to make the number honest
and then move it.

## Current state (Elide `1.4.1+20260716.b8b6531`, digest `3d3ea83ed640`)

| pass | fail | error | skip | total | pass rate (excl. skips) |
|---:|---:|---:|---:|---:|---:|
| 309 | 875 | 34 | 345 | 1,563 | **25.4%** |

Counts are whole test *files* (one Node test file = one result). Latest reports:

- `reports/1.4.1+20260716.b8b6531/3d3ea83ed640/node-api/impact.md` — 481
  root-cause signatures, largest first (4,800 lines; read the top 100)
- `.../node-api/impact.json` — machine-readable (`bySignature`)
- `expectations/node-api.ratchet.toml` — known-failure baseline

## How to run

```bash
bun run setup                       # once: deps + submodules + sparse checkouts
# smoke:
bun run testsuite --elide nightly --suite node-api --include 'test/parallel/test-path.js' --log
# a target group:
bun run testsuite --elide nightly --suite node-api --include 'test/parallel/test-buffer*.js' --log
# full suite (~6 min):
bun run testsuite --elide nightly --suite node-api
# after fixes land in an Elide nightly, re-baseline:
bun run testsuite --elide nightly --suite node-api --ratchet
```

## Failure analysis (909 failing files)

### Systemic root causes (fix once, unblock many)

1. **`__filename` / `process.argv[1]` is the literal string `"unknown"`** —
   **~49 files directly**, likely more indirectly. Symptoms across several
   signatures:
   - `The worker script or module filename ... Received "unknown"` (31+2+1+1)
   - `ENOENT: no such file or directory, open 'unknown'` (6+3+1+1) — tests
     that re-open `__filename`
   Elide isn't propagating the entry-script path to `process.argv`/module
   metadata when launched by the harness. Almost certainly ONE runtime fix.
   **Best effort/reward ratio in the entire cross-suite triage.**
2. **`node:child_process` unimplemented** — **~39 files direct**:
   `spawnSync()` (14), `spawn()` (10+3), `exec()` (5), `fork()` (4),
   `execFileSync()` (3). Also implicated in some of the 34 timeouts and in
   cpython-core failures (subprocess-based tests) — cross-suite leverage.
   High complexity; treat as a project, not a quick win.
3. **`node:http` (+ `_http_common`) missing** — 64 files fail at
   `Cannot load module: 'http'`. Very large surface; park unless http is
   already on Elide's roadmap. Alternatively add these to `[skip]` with a
   comment to make the pass rate reflect reachable tests.
4. **Timeouts** — 34 files (`Node API test timed out`), e.g.
   `test-fs-promises-watch.js`. Mostly fs.watch / event-loop-keepalive
   related; diagnose a couple before assuming one cause.

### Module-level clusters (each a coherent mini-project)

- **buffer** (~80 files): assorted semantic gaps — `buffer.constants`
  undefined, `Buffer.from` on SharedArrayBuffer/objects with `valueOf`
  (`unsupported input type`, 3), `buf.copy` return value undefined (8),
  inspect truncation format (20-bucket), negative-allocation / range checks
  missing (`Missing expected exception`, part of 36+7+4).
- **events / EventEmitter** (~25): symbol event names
  (`Cannot convert a Symbol value to a string`, 4), `receiver is not an
  EventEmitter` when using prototype-less receivers (4),
  `listeners side-effects` (`Cannot convert undefined or null to object`, 3),
  listener-count semantics.
- **streams** (~90): `Readable.toWeb` missing (4), `Stream is not a
  constructor` from `require('stream')` shape (3), many
  `mustCall` count mismatches (13+10+9+6...) pointing at async scheduling /
  destroy/finish event-ordering divergences.
- **process** (~40): `process.chdir()` (5) and `process.getuid()` (3) throw
  `UnsupportedOperationException`, `execve` missing (3+2),
  `hasUncaughtExceptionCaptureCallback` missing (3),
  `getactiveresources` tracking (2+2+...), env delete semantics.
- **vm** (~15): internal `Symbol(elide.vm.context)` leaks into
  `Object.getOwnPropertyNames`/`ownKeys` of contextified objects (3 —
  trivial fix: filter the internal symbol), `defineProperty called on
  non-object` on context args (2), property forwarding.
- **timers** (~10): `timeout.refresh()` missing (3), timer cancellation
  warnings (3), active-resource tracking.
- **worker_threads** (~10 beyond the argv issue): structured-clone
  `DOMException` on SharedArrayBuffer/MessagePort transfer (4).

## Ranked work items

1. **argv/`__filename` "unknown" fix** — ~49+ files, complexity **low**. Do
   this first; re-run to see the true shape of worker/fs failures behind it.
2. **vm internal-symbol filter** — 3 files, complexity **trivial**. Good
   warm-up in the same session as (1).
3. **buffer semantics sweep** — ~40–80 files, complexity **medium**, highly
   parallelizable (each signature is independent). Run
   `--include 'test/parallel/test-buffer*.js' --log` and burn down.
4. **process misc (`chdir`, `getuid`, capture-callback, refresh)** — ~15
   files, complexity **low-medium** each.
5. **events/EventEmitter conformance** — ~25 files, complexity **medium**.
6. **child_process `spawn`/`spawnSync`** — ~39 files + cross-suite
   (cpython-core) leverage, complexity **high**. Schedule as its own project.
7. **streams event-ordering** — large but diffuse; recommend AFTER (1) and
   (3), since many stream tests also touch buffer/process gaps.
8. **`node:http`** — 64 files; park or skip-classify for now.

## Notes for the implementer

- Fixes happen in the Elide runtime repo; this repo pins nightlies and
  measures (`--elide nightly` picks up a fresh build).
- One file = one result here, so "N files" = N report-visible wins.
- The `common/` overlay lives in the harness work dir
  (`.harness/work/node-api/node-api-overlay/test/common/index.js`); `mustCall`
  mismatch stack traces point there, not at a runtime bug in itself.
- After a fix lands: full run → check `changes.md` (new passes, no
  regressions) → `--ratchet` → commit reports + expectations together.
