# Running the suites

## Prerequisites

- Docker (the runner pulls/builds the Elide image)
- Bun
- Suite submodules and Bun dependencies prepared with one command:
  `bun run setup`

`bun run setup` installs root and harness dependencies, initializes the upstream
suite submodules, and applies the sparse checkouts used by WPT and OpenJDK. To
only prepare submodules, run `bun run setup:suites`. To check that already
prepared submodules are populated correctly, run `bun run setup:suites --check`.

## Commands

```bash
# Full suite against the current Elide nightly, with a live ✅/❌ test log
bun run testsuite --elide nightly --suite test262 --log

# A quick slice (finishes in seconds) — scope to any glob
bun run testsuite --elide nightly --log --include 'test/language/types/boolean/**/*.js'

# Targeted tests by name, across suites: --filter '[<suite>:]<pattern>' (repeatable).
# Patterns are case-insensitive globs matched against ANY PART of the test's
# path / id, so `*time*` hits Date/getTime in test262, test_datetime in cpython
# and test-timers.js in node. A suite prefix scopes the pattern (and selects
# that suite when no --suite is given); no prefix = every selected suite.
bun run testsuite --elide nightly --log --filter 'cpython-core:*time*'
bun run testsuite --elide nightly --log --filter 'cpython-core:test_ast.*literal_eval*'   # single cases
bun run testsuite --elide nightly --log --filter 'test262:*Temporal*' --filter 'node-api:*buffer*'
bun run testsuite --elide nightly --log --all-suites --filter '*url*'

# Current broad-suite smoke commands. These may be RED until expectations are
# ratcheted, but they should emit upstream case/subtest results instead of
# runner setup failures.
bun run testsuite --elide nightly --suite wpt-wintertc --include 'url/urlsearchparams-constructor.any.js' --log
bun run testsuite --elide nightly --suite cpython-core --include 'test_json' --log
bun run testsuite --elide nightly --suite javac-jtreg --include 'tools/javac/IllDefinedOrderOfInit.java' --log
bun run testsuite --elide nightly --suite node-api --include 'test/parallel/test-path.js' --log

# Broader slices after the smoke path is stable.
bun run testsuite --elide nightly --suite wpt-wintertc --threads 8 --log
bun run testsuite --elide nightly --suite cpython-core --threads 8 --log
bun run testsuite --elide nightly --suite javac-jtreg --threads 4 --log

# Run every registered suite after building the harness image once.
bun run testsuite --elide nightly --all-suites --log

# Prepare selected suite submodules first, then run. Useful in fresh clones or CI.
bun run testsuite:ready --elide nightly --all-suites --log

# Run a subset with a comma-separated suite list.
bun run testsuite --elide nightly --suite wpt-wintertc,cpython-core --log

# Run multiple selected suites at once. --threads is per suite; --suite-workers
# controls how many suite containers run concurrently.
bun run testsuite --elide nightly --all-suites --suite-workers 2 --threads 4 --log

# Update reports plus the generated README compatibility summary.
bun run testsuite --elide nightly --all-suites --log --update-summaries

# Pin a specific build: image tag, digest, or a local Elide install directory
bun run testsuite --elide ghcr.io/elide-dev/elide@sha256:…
bun run testsuite --elide /path/to/elide-install      # dir containing bin/elide + lib/
```

`./bin/run ...` remains as a direct executable alias for the same Bun/TypeScript
launcher.

By default, the launcher builds a total concurrency budget of
`available CPUs * 2`. It then runs up to that many suite workers, capped by the
number of selected suites, and divides the remaining budget into per-suite
threads. `--threads N` overrides the per-suite adapter thread count: Test262
forwards it to `test262-harness`, `wpt-wintertc` runs multiple WPT files at once,
`cpython-core` splits selected modules across worker processes, and
`javac-jtreg` forwards it to jtreg's native `-concurrency:N`. `--suite-workers N`
overrides how many suite containers run concurrently. `CONCURRENCY_MULTIPLIER`
or `--concurrency-multiplier N` can change the default multiplier from `2`.

`--timeout-scale N` (or `TIMEOUT_SCALE`) multiplies every registry time limit
(`timeoutMs`, `caseTimeoutMs`): per test, per CPython case and per CPython shard.
Pass it for a non-release Elide build, which runs far slower than a release build
and would otherwise hit limits sized for release.

`--log` streams one normalized mark per completed test to stderr (`✅` pass ·
`❌` fail · `🛑` error · `⊘` skip); the summary line goes to stdout. Add
`--verbose` to also mirror raw runner stdout/stderr, which is useful for
debugging harness behavior. Failure messages are persisted in reports either
way; console printing can be controlled with `--failure-output show|hide` or the
aliases `--show-failure-output` / `--hide-failure-output`. The exit code is
non-zero on any regression.

## Targeted runs: `--filter`

`--filter '[<suite>:]<pattern>'` narrows whatever the registry, manifest and
`--include` already select. Repeat the flag for several patterns (they OR
together; the value is not comma-split, so `{a,b}` alternation works). The
prefix is taken as a suite only when it is exactly a registry workload id, so
ids containing `:` still work as bare patterns.

Patterns are globs (`*`, `**`, `?`, `{a,b}`, `[abc]`) matched
case-insensitively against any part of the selectable unit's id; a path glob
such as `test/built-ins/Date/**` still behaves as a prefix. What gets matched:

| suite          | matched against                                   | example id                                   |
| -------------- | ------------------------------------------------- | -------------------------------------------- |
| `test262`      | suite-relative file path                          | `test/built-ins/Date/now/name.js`            |
| `node-api`     | suite-relative file path                          | `test/parallel/test-timers.js`               |
| `wpt-wintertc` | suite-relative file path (whole file, all subtests) | `encoding/encodeInto.any.js`               |
| `javac-jtreg`  | langtools-relative test path                      | `tools/javac/T6411379.java`                  |
| `jdk-jtreg`    | test/jdk-relative test path (`--target bali`)     | `java/util/Date/Bug4326.java`                |
| `cpython-core` | module name, then each case id inside the driver  | `test_time`, `test_ast.test_ast.AST_Tests.test_dump` |

Each suite logs `filter ...: selected N of M` so a typo shows up as `0 of M`
before anything runs. A filtered run is a scoped selection like `--include`:
the summary flags the pass-rate delta as `selection changed`, and `--ratchet`
merges rather than rewrites the baseline.

## Bali runtime target

This repository also supports Bali as a Docker-based Linux AMD64 target. Elide remains the default.

```sh
bun run testsuite --target bali --suite jdk-jtreg --bali-home /path/to/linux-amd64/bali
```

See [Bali setup and expectations](BALI.md) and [Bali compatibility history](reports/bali/index.md).
The runtime suite (`test/jdk`) is separate from Elide's compiler suite (`javac-jtreg`).
Runner coverage, verified passes, reference issues, and unsupported files remain separate.

