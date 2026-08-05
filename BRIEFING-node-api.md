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

## Failure classification (1423 accepted failures, snapshot at `1.4.2+c928728a8`)

Signatures were taken from a diagnostic run with the per-test timeout cut to 10s
(a hang carries no cause), normalized (paths, numbers, addresses stripped), then
grouped. 563 distinct signatures reduce to these classes:

| Verdict | Tests | Signatures |
|---|---:|---:|
| behaviour mismatch | 607 | 254 |
| our defect: hang until timeout | 319 | 1 |
| absent API | 149 | 115 |
| not applicable: Node internals | 81 | 6 |
| our defect: over-strict validation | 55 | 35 |
| our defect: missing object or property | 45 | 34 |
| one-off, needs reading | 45 | 45 |
| error raised by the test itself | 37 | 26 |
| our defect: swallowed handler exception | 26 | 20 |
| our defect: CLI argument parsing | 22 | 11 |
| spec divergence | 18 | 7 |
| our defect: module resolution | 12 | 5 |
| our defect: engine context | 4 | 1 |
| not applicable: V8 test intrinsics | 3 | 3 |

Reading the classes:

- **absent API** and **not applicable** entries carry a per-test reason in
  `expectations/node-api.toml`; everything else sits in the ratchet, which holds
  no reasons because a run rewrites it.
- **hang until timeout** is one signature because the harness reports every hang
  identically; the causes underneath differ per area (http, cluster, dgram).
- **swallowed handler exception** used to hide failures entirely: an exception in
  a socket/child event handler was logged and the process still exited zero, so
  affected tests counted as passes. Routed to `uncaughtException` in the http,
  net, tls, dgram and child_process bridges; the measured pass rate dropped
  accordingly and is now honest.
- **over-strict validation** means Elide throws where Node accepts (duck-typed
  streams, path arguments); the message quoted in the signature is ours, not
  Node's.

### Where the behaviour mismatches sit

The 607-test mismatch class by subsystem (representatives in brackets):

| Subsystem | Tests | Representative |
|---|---:|---|
| stream | 98 | test-stream-iter-consumers-text.js |
| http | 72 | test-http-agent-maxtotalsockets.js |
| fs | 63 | test-fs-internal-assertencoding.js |
| worker_threads | 41 | test-worker-message-port-transfer-closed.js |
| process | 37 | test-process-config.js |
| buffer | 32 | test-buffer-bigint64.js |
| diagnostics_channel | 32 | test-diagnostics-channel-pub-sub.js |
| vm | 30 | test-vm-is-context.js |
| net | 29 | test-net-better-error-messages-path.js |
| child_process | 24 | test-child-process-advanced-serialization.js |
| whatwg url | 23 | test-whatwg-url-custom-searchparams-append.js |
| zlib | 22 | test-zlib-brotli-dictionary.js |
| async_hooks | 21 | test-async-hooks-constructor.js |
| timers | 20 | test-timers-promises-scheduler.js |

Mismatches do not share a single cause the way the hang class does: each
subsystem needs its representative read, the divergence reproduced in a small
script, and the runtime fixed. Working from the top of this table maximizes
tests-per-fix.
