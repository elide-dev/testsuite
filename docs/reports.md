# Reports, expectations and analysis

## Reports

Committed under `reports/<elide-version>/<short-digest>/<workload>/`:

| file | purpose |
|---|---|
| `<workload>.md` | human rollup: pass-rate, regressions, new passes |
| `impact.md` / `impact.json` | failures clustered by root-cause signature, ranked by blast radius |
| `changes.md` / `changes.json` | diff vs the previous run (fixed / regressed / added / removed) |
| `summary.json` | counts + regression/new-pass ids (machine) |
| `results.json.gz` | every test's status (machine, for cross-version diffs) |
| `pass-rate.svg` | static pass/fail/error/skip chart for the run |

`reports/index.md` (+ `index.json` + `pass-rate.svg`) is the top-level matrix
of the latest run per suite. Machine-readable index entries point at the
workload-scoped report directory. Published via GitHub Pages.

Passing `--update-summaries` also refreshes the generated compatibility block in
the README from the latest report index. This is intended for mainline bot runs:
run all suites, commit the changed `reports/`, `expectations/*.ratchet.toml` if
ratcheting, and README summary content, then push.

## Why tests are skipped

Skips never inflate the headline numbers: a skipped test still counts as a
non-pass in _Pass rate_. Every skip lives in `expectations/<suite>.toml` with a
written reason, and almost all of them are tests that can't run meaningfully
outside stock Node, CPython, or a browser. They are not Elide bugs hidden from
the results. Ordinary failures are ratcheted (tracked under `[fail]`), not
skipped.

**node-api** (115 entries)

| Reason | Entries |
|---|---:|
| Imports Node's private `internal/*` modules (needs `--expose-internals`) | 40 |
| Uses `node:vfs`, an experimental Node subsystem | 37 |
| Requires `internal/test/binding` (Node's C++ bindings) | 36 |
| Hangs: `test-vm-sigint*` children spin forever without vm `breakOnSigint` | 2 |

Two thirds of these skips test Node's own implementation, not its public API.

**wpt-wintertc** (22 entries, ~125 of 313 manifest files)

| Reason | Files |
|---|---:|
| `.https.` tests: the wptserve sidecar is plain HTTP on loopback, with no WPT-CA trust | 61 |
| Browser-only `.window.js` (`fetch/fetch-later/**` plus 19 files with zero headless passes) | ~58 |
| `.h2.` tests: the server runs with `--no-h2` | 3 |

Only tests that are structurally unreachable are skipped. A file with any
passing subtest stays in and is scored. Cross-origin fetch subtests are
ratcheted, not skipped.

**cpython-core** (~82 entries, some globbing whole test classes)

| Reason | Entries |
|---|---:|
| Filesystem-backed tests (pathlib, ntpath probes, hashlib file digests), deferred until sandboxed file I/O | ~17 |
| Pathological stress tests that hang or run too long (string-search complexity, context-cycle, recursion) | 15 |
| CPython implementation details (exact hash values, tuple identity reuse, `gc.get_objects`, `dis`, locale) | ~13 |
| Refcount-0 `__del__` / weakref finalization timing (the JVM GC is non-deterministic) | 12 |
| Spawns a child interpreter (`assert_python_ok`/`_failure`) | 7 |
| Same-size dict mutation during iteration, buffer-export locking, error-message wording | 8 |

## Expectations & the ratchet

`expectations/test262.toml` is the hand-curated baseline:

```toml
[skip]   # excluded from the run, with a reason
"test/intl402/**" = "Intl 402 not supported yet"
[fail]   # expected failures (link an issue)
"test/built-ins/RegExp/property-escapes/**" = "partial (…)"
```

A run is **green iff actual matches expected**: new failures are **regressions**
(red, fail CI); tests that newly pass are surfaced as **new passes** (advance the
baseline). To accept the current failure set as the baseline (so only *new*
breakage fails CI):

```bash
bun run testsuite --elide nightly --ratchet
```

This regenerates the machine-owned `expectations/<workload>.ratchet.toml`
(exact test ids) from the current failures. `compare` treats a test as
expected-fail if it matches a `[fail]` glob **or** is in the ratchet set;
`[skip]` always wins.

## Analysis CLI

A derived SQLite database (`.harness/results.sqlite`, gitignored) is built by
ingesting the committed `results.json.gz` files, and powers ad-hoc queries:

```bash
bun run harness/src/cli.ts db build              # (re)build the DB from committed runs
bun run harness/src/cli.ts impact <workload> [semver] [digest]  # impact-ordered failures for a run
bun run harness/src/cli.ts diff <workload> [A] [B]              # version diff (default: two most recent)
bun run harness/src/cli.ts query "SELECT …"      # read-only SQL over the results
```

The committed JSON files are the source of truth and the contract for a future
static web UI; the SQLite DB is a disposable local index.

