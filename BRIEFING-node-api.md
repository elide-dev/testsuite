# Briefing: `node-api` compat work (Node.js core test suite)

_Self-contained handoff doc. Generated 2026-08-19 from the latest committed run._

## Context

This repo (`elide-dev` conformance testsuite) runs upstream conformance suites
against pinned [Elide](https://elide.dev) builds and publishes versioned
reports. The `node-api` suite runs a slice of Node.js core's `test/parallel/` JS
tests, grouped per subsystem in `manifests/node-api.toml` (assert, async_hooks,
buffer, child_process, cluster, dgram, dns, domain, events, fs, http, module,
net, path, process, stream, timers, tls, vm, worker, zlib and more). Tests run
against a checked-in `common/` overlay (`node-api-overlay`), so
`require('../common')` works without full Node internals.

Counts are whole test *files*: one Node test file = one result.

## Current state (Elide `1.4.4+405f52319`, digest `217673cb0474`)

| pass | fail | error | skip | total | pass rate (excl. skips) |
|---:|---:|---:|---:|---:|---:|
| 1,542 | 510 | 81 | 938 | 3,071 | **72.3%** |

Progression of measured runs: 25.4% (sparse slice, July) → 50.4% → 60.1% →
65.0% → 72.3%. The denominator excluding skips is 2,133.

The run is RED: 18 tests the ratchet expected to pass do not — 11 functional
failures and 7 timeouts. The ratchet was deliberately left at its previous
contents, so those 18 stay visible as regressions rather than being absorbed
into the baseline. They are the first thing to work on, ahead of any new
subsystem; the largest cluster is http/net timeouts, and the functional half is
led by `test-stream-pipeline-duplex`, `test-stream-pipe-flow-after-unpipe` and
two `diagnostics-channel` cases. The comparison run was measured on Elide 1.4.2,
so part of the delta belongs to upstream changes rather than to compat work.

Latest reports:

- `reports/1.4.4+405f52319/217673cb0474/node-api/impact.md` — failures ordered
  by root-cause signature, largest first (read the top ~40 sections)
- `.../node-api/impact.json` — machine-readable (`bySignature`)
- `.../node-api/changes.md` — diff against the previous run
- `expectations/node-api.ratchet.toml` — known-failure baseline (857 entries)
- `expectations/node-api.toml` — static skips with a reason per test (500
  entries)

## How to run

```bash
bun run setup                       # once: deps + submodules + sparse checkouts
# smoke:
bun run testsuite --elide nightly --suite node-api --include 'test/parallel/test-path.js' --log
# a target group:
bun run testsuite --elide nightly --suite node-api --include 'test/parallel/test-buffer*.js' --log
# full suite (~30-35 min, plus ~5 min to rebuild the harness image):
bun run testsuite --elide nightly --suite node-api
# after fixes land, re-baseline:
bun run testsuite --elide nightly --suite node-api --ratchet
```

Point `--elide` at a local install dir to measure an unreleased build; the
staged copy dereferences symlinks, so `dist/current` works.

Each test runs with `-XX:MaxHeapSize=4g` (see `registry.toml`). The suite
contains cases whose only brake is stream backpressure
(`test-zlib-brotli-16GB.js` decompresses 16 GB); without a bound such a case
grows until the host runs out of memory instead of failing.

## What is skipped and why

Of the 938 skips, `expectations/node-api.toml` carries a per-test reason:

- **`cluster`** (83 tests) — the module ships and works, but its tests are out of
  project scope for now. One glob covers the group so the decision is visible
  and reversible.
- **`node:vfs`** (37 tests) — an experimental Node subsystem not implemented in
  Elide.
- **Node-internal modules** — tests that `require('internal/...')` directly
  (`internal/assert/myers_diff`, `internal/child_process`, `internal/async_hooks`,
  `internal/fs/promises`, `internal/test/binding`, …). They test Node's private
  surface, not public API behaviour.

Everything else that fails sits in the ratchet, which holds no reasons because a
run rewrites it.

## Failure map (591 failing files: 510 fail + 81 error)

By subsystem, largest first, with the hang subset broken out:

| Subsystem | Failing | of which hangs |
|---|---:|---:|
| http | 79 | 26 |
| worker_threads | 64 | 14 |
| stream | 51 | 0 |
| vm | 48 | 4 |
| fs | 39 | 6 |
| child_process | 30 | 7 |
| net | 25 | 7 |
| process | 20 | 0 |
| async_hooks | 19 | 2 |
| module | 17 | 0 |
| require | 15 | 0 |
| dns | 14 | 7 |
| zlib | 14 | 1 |
| buffer | 12 | 0 |

Largest root-cause signatures in the latest run:

| Tests | Signature |
|---:|---|
| 81 | `Node API test timed out` |
| 16 | `Mismatched <anonymous> function calls` (`mustCall` count) |
| 23 | `AssertionError: Expected values to be strictly equal` (numeric and string) |
| 7 | `Mismatched noop function calls` |
| 6 | `AssertionError: Expected values to be strictly deep-equal` |
| 6 | `AssertionError: Missing expected exception` |
| 6 | `AssertionError: input did not match /ERR_INVALID_ARG_TYPE/` |

## Ranked work items

0. **The 18 regressions.** Tests the ratchet expects to pass and this run does
   not: 7 timeouts, clustered in http/net, and 11 functional failures led by
   `test-stream-pipeline-duplex` (`TypeError: Cannot read property 'code' of
   undefined`), `test-stream-pipe-flow-after-unpipe` (20 calls expected, 2 seen)
   and two `diagnostics-channel` cases. Re-run them individually first: the
   harness reports a flake and a real regression identically.
1. **Hangs — 81 files, one visible signature, several causes.** The harness
   reports every hang identically, so the causes must be separated by area:
   `http` (26), `worker_threads` (14), `child_process` (7), `net` (7), `dns` (7),
   `fs` (6), `vm` (4). Highest density in the suite; each area is a coherent
   mini-project. http overtook worker_threads since the last run and is now the
   largest single block.
2. **`mustCall` count mismatches — ~23 files across two signatures.** These point
   at event ordering and async scheduling: a callback Node fires and Elide does
   not, or fires at a different time. Read one per subsystem before generalizing.
3. **Error-shape assertions — ~12 files.** Deep-equal and regexp failures where
   the comparison differs only by `code`/`message` on the thrown error. Cheap per
   file once the expected code is known.
4. **`vm` — 48 files.** Real contextified objects; the cluster is large and
   coherent enough to justify runtime work rather than per-test patching.
5. **`stream` — 51 files, no hangs.** Diffuse; mostly event ordering and
   backpressure, overlapping with item 2.
6. **`process` — 20 files, no hangs.** Assorted platform surface (active-resource
   tracking, env semantics); low complexity each.
7. **`module`/`require` — 32 files between them.** Resolution order and absent
   public modules; classify as static skips only when a module is genuinely out
   of scope, otherwise implement.

## Notes for the implementer

- Fixes happen in the Elide runtime repo; this repo pins builds and measures.
- One file = one result here, so "N files" = N report-visible wins.
- The `common/` overlay lives in the harness work dir
  (`.harness/work/node-api/node-api-overlay/test/common/index.js`); `mustCall`
  mismatch stack traces point there, not at a runtime bug in itself.
- A timeout reaps the whole process group: Node's suite spawns children that
  outlive the test and hold its stdout open. A descendant that opened its own
  session still escapes, so the harness drops the pipes after a two-second
  grace.
- Zero exit status is not a pass: a skip exits zero too. Distinguish them when
  triaging by hand.
- Between full runs, guard against regressions with a local subset of
  previously-passing tests (~500 files, ~10 min) rather than re-running the
  suite.
- After a fix lands: full run → check `changes.md` (new passes, no regressions)
  → `--ratchet` → commit reports and expectations together.
