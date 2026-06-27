# compliance testing

This repository runs upstream conformance test suites against pinned builds of
[Elide](https://elide.dev) and publishes per-version Markdown/JSON reports.
**Test262** (TC39's JavaScript conformance suite) is the first suite; the
harness is workload-neutral so more suites — and, later, benchmarks — slot in.

Next suites are added in this order:

1. `wpt-wintertc` - a sparse Web Platform Tests subset for WinterTC / ECMA-429 pure in-process APIs.
2. `cpython-core` - CPython 3.12 pure-core language and standard-library tests.
3. `javac-jtreg` - broad OpenJDK langtools javac coverage through jtreg, compiling with Elide and initially running generated programs with a regular JDK. Annotation processing and modules are intentionally excluded from the default manifest for now.

Tracking: [Compliance Testing meta (WHIPLASH#1172)](https://github.com/elide-dev/WHIPLASH/issues/1172),
[Test262 (WHIPLASH#1173)](https://github.com/elide-dev/WHIPLASH/issues/1173).

## How it works

A Bun/TypeScript harness drives each suite through its best native runner and
normalizes the results. Test262 runs via the stock `test262-harness` + `eshost`
using a **custom eshost `elide` host** (installed through a Bun patch). Each run
executes inside a combined Docker image (a pinned Elide + Node + Bun), so every
`elide run` is a fast local subprocess. Results are compared against a
checked-in **expectations baseline** — a run is green iff there are no
regressions.

> **Note:** Elide's binary requires **glibc ≥ 2.39**, so the harness image is
> built `FROM node:25-trixie`. See WHIPLASH#1186.

## Prerequisites

- Docker (the runner pulls/builds the Elide image)
- For local development without Docker: Bun (`harness/` is a Bun project)
- The Test262 submodule: `git submodule update --init --depth 1`
- The WPT submodule slice used by `wpt-wintertc`: `./bin/init-wpt`
- The CPython 3.12 submodule for `cpython-core`: `git submodule update --init --depth 1 --recommend-shallow suites/cpython`
- The OpenJDK langtools slice for `javac-jtreg`:
  `git submodule update --init --depth 1 --recommend-shallow --filter=blob:none suites/openjdk && git -C suites/openjdk sparse-checkout init --cone && git -C suites/openjdk sparse-checkout set test/langtools/tools/javac test/lib test/jtreg-ext`

## Running

```bash
# Full suite against the current Elide nightly, with a live ✅/❌ test log
THREADS=8 bun run testsuite --elide nightly --suite test262 --log

# A quick slice (finishes in seconds) — scope to any glob
bun run testsuite --elide nightly --log --include 'test/language/types/boolean/**/*.js'

# Current broad-suite smoke commands. These may be RED until expectations are
# ratcheted, but they should emit upstream case/subtest results instead of
# runner setup failures.
bun run testsuite --elide nightly --suite wpt-wintertc --include 'url/urlsearchparams-constructor.any.js' --log
bun run testsuite --elide nightly --suite cpython-core --include 'test_json' --log
bun run testsuite --elide nightly --suite javac-jtreg --include 'tools/javac/IllDefinedOrderOfInit.java' --log

# Broader slices after the smoke path is stable.
bun run testsuite --elide nightly --suite wpt-wintertc --threads 8 --log
bun run testsuite --elide nightly --suite cpython-core --threads 8 --log
bun run testsuite --elide nightly --suite javac-jtreg --threads 4 --log

# Run every registered suite after building the harness image once.
bun run testsuite --elide nightly --all-suites --threads 8 --log

# Run a subset with a comma-separated suite list.
bun run testsuite --elide nightly --suite wpt-wintertc,cpython-core --threads 8 --log

# Run multiple selected suites at once. --threads is per suite; --suite-workers
# controls how many suite containers run concurrently.
bun run testsuite --elide nightly --all-suites --suite-workers 2 --threads 4 --log

# Update reports plus the generated README compatibility summary.
bun run testsuite --elide nightly --all-suites --suite-workers 2 --threads 4 --log --update-summaries

# Pin a specific build: image tag, digest, or a local Elide install directory
bun run testsuite --elide ghcr.io/elide-dev/elide@sha256:…
bun run testsuite --elide /path/to/elide-install      # dir containing bin/elide + lib/
```

`./bin/run ...` remains as a direct executable alias for the same Bun/TypeScript
launcher.

`--threads N` controls parallelism inside each suite adapter: Test262 forwards it
to `test262-harness`, `wpt-wintertc` runs multiple WPT files at once,
`cpython-core` splits selected modules across worker processes, and
`javac-jtreg` forwards it to jtreg's native `-concurrency:N`. `--suite-workers N`
runs multiple selected suites concurrently after a single image build; keep this
lower than your CPU count because each suite may also use `--threads`.

`--log` streams one normalized mark per completed test to stderr (`✅` pass ·
`❌` fail · `🛑` error · `⊘` skip); the summary line goes to stdout. Add
`--verbose` to also mirror raw runner stdout/stderr, which is useful for
debugging harness behavior. Failure messages are persisted in reports either
way; console printing can be controlled with `--failure-output show|hide` or the
aliases `--show-failure-output` / `--hide-failure-output`. The exit code is
non-zero on any regression.

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
this README from the latest report index. This is intended for mainline bot runs:
run all suites, commit the changed `reports/`, `expectations/*.ratchet.toml` if
ratcheting, and README summary content, then push.

## Expectations & the ratchet

`expectations/test262.toml` is the hand-curated baseline:

```toml
[skip]   # excluded from the run, with a reason
"test/intl402/**" = "Intl 402 not supported yet"
[fail]   # expected failures (link an issue)
"test/built-ins/RegExp/property-escapes/**" = "partial (WHIPLASH#…)"
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

## Layout

```
suites/test262/        Test262 (git submodule)
manifests/             curated suite slices for WPT, CPython, and jtreg
suites/drivers/        small bridge/wrapper programs used by external suites
expectations/          workload baselines + machine ratchets
reports/               committed per-version reports + top-level index
harness/               the Bun/TypeScript harness (src/, fixtures/, patches/)
docker/                harness images (image-ref + local install dir)
bin/run.ts             Bun/TypeScript launcher: resolve --elide → docker build → docker run
bin/run                executable alias for bin/run.ts
.devcontainer/         Codespaces dev environment
.github/workflows/     nightly + on-demand compliance runs, Pages publish
docs/superpowers/      design specs and implementation plans
```

## Development

```bash
bun install            # installs root TypeScript/Bun types for bin/run.ts
bun run typecheck      # type-check the host launcher
cd harness
bun install            # applies the eshost `elide` host patch
bun test               # unit tests
bun run typecheck
```

Or open the repo in a GitHub Codespace / VS Code devcontainer, which provisions
Bun, Node, Docker-in-Docker, and Elide automatically.
