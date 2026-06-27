# compliance testing

This repository runs upstream conformance test suites against pinned builds of
[Elide](https://elide.dev) and publishes per-version Markdown/JSON reports.
**Test262** (TC39's JavaScript conformance suite) is the first suite; the
harness is workload-neutral so more suites — and, later, benchmarks — slot in.

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

## Running

```bash
# Full suite against the current Elide nightly, with a live ✅/❌ test log
THREADS=8 ./bin/run --elide nightly --suite test262 --log

# A quick slice (finishes in seconds) — scope to any glob
./bin/run --elide nightly --log --include 'test/language/types/boolean/**/*.js'

# Pin a specific build: image tag, digest, or a local Elide install directory
./bin/run --elide ghcr.io/elide-dev/elide@sha256:…
./bin/run --elide /path/to/elide-install      # dir containing bin/elide + lib/
```

`--log` streams a mark per test to stderr (`✅` pass · `❌` fail · `🛑` error ·
`⊘` skip); the summary line goes to stdout. The exit code is non-zero on any
regression.

## Reports

Committed under `reports/<elide-version>/<short-digest>/`:

| file | purpose |
|---|---|
| `test262.md` | human rollup: pass-rate, regressions, new passes |
| `impact.md` / `impact.json` | failures clustered by root-cause signature, ranked by blast radius |
| `changes.md` / `changes.json` | diff vs the previous run (fixed / regressed / added / removed) |
| `summary.json` | counts + regression/new-pass ids (machine) |
| `results.json.gz` | every test's status (machine, for cross-version diffs) |

`reports/index.md` (+ `index.json`) is the top-level matrix of the latest run
per suite. Published via GitHub Pages.

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
./bin/run --elide nightly --ratchet
```

This regenerates the machine-owned `expectations/test262.ratchet.toml` (exact
test ids) from the current failures. `compare` treats a test as expected-fail if
it matches a `[fail]` glob **or** is in the ratchet set; `[skip]` always wins.

## Analysis CLI

A derived SQLite database (`.harness/results.sqlite`, gitignored) is built by
ingesting the committed `results.json.gz` files, and powers ad-hoc queries:

```bash
bun run harness/src/cli.ts db build              # (re)build the DB from committed runs
bun run harness/src/cli.ts impact [semver]       # impact-ordered failures for a run
bun run harness/src/cli.ts diff [A] [B]          # version diff (default: two most recent)
bun run harness/src/cli.ts query "SELECT …"      # read-only SQL over the results
```

The committed JSON files are the source of truth and the contract for a future
static web UI; the SQLite DB is a disposable local index.

## Layout

```
suites/test262/        Test262 (git submodule)
expectations/          baseline (test262.toml) + machine ratchet (test262.ratchet.toml)
reports/               committed per-version reports + top-level index
harness/               the Bun/TypeScript harness (src/, fixtures/, patches/)
docker/                harness images (image-ref + local install dir)
bin/run                launcher: resolve --elide → docker build → docker run
.devcontainer/         Codespaces dev environment
.github/workflows/     nightly + on-demand compliance runs, Pages publish
docs/superpowers/      design specs and implementation plans
```

## Development

```bash
cd harness
bun install            # applies the eshost `elide` host patch
bun test               # unit tests
bun run typecheck
```

Or open the repo in a GitHub Codespace / VS Code devcontainer, which provisions
Bun, Node, Docker-in-Docker, and Elide automatically.
