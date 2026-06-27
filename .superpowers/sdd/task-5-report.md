## Task 5 Report: Launcher, image, docs, and report wiring

### Summary

Task 5 is complete on branch `compliance-harness`.

This change wires the remaining broad-suite support into the launcher image and
runner flow for the current workload set:

1. `wpt-wintertc`
2. `cpython-core`
3. `javac-jtreg`
4. `test262`

It also closes a container-path bug found during the required Test262 smoke
verification by making the harness CLI accept an explicit registry path and by
having `bin/run` pass the mounted `/work/registry.toml` location.

### Files changed

- `README.md`
- `bin/run`
- `docker/harness.Dockerfile`
- `docker/harness.local.Dockerfile`
- `harness/src/cli.test.ts`
- `harness/src/cli.ts`
- `harness/src/expectations/compare.ts`
- `harness/src/report/render.test.ts`
- `harness/src/report/render.ts`

### What changed

#### 1. Report coverage for non-Test262 workloads

- Added a new report test in `harness/src/report/render.test.ts` for
  `wpt-wintertc` using real `compare(...)` output.
- Extended `Comparison` in `harness/src/expectations/compare.ts` with
  `observed` so report rendering can retain non-skipped test visibility.
- Updated `harness/src/report/render.ts` so non-`test262` reports include an
  `Observed cases` section, preserving visible case ids for sparse WPT /
  CPython / jtreg-style suites while keeping existing regression/new-pass
  sections intact.

#### 2. Docker image tooling

- Added Debian package installation to both harness Dockerfiles:
  - `ca-certificates`
  - `curl`
  - `default-jdk`
  - `git`
  - `jtreg7`
  - `python3`
- This satisfies the current suite requirements:
  - WPT support remains intact
  - CPython drivers can rely on `python3`
  - `javac-jtreg` can derive a real JDK home from `javaRunner`
  - jtreg is available in the container image

#### 3. Launcher suite-version handling

- Changed `bin/run` so suite version resolution only runs `git rev-parse` when
  the suite checkout actually has a `.git` directory or file.
- Sparse / copied trees now fall back cleanly to `unknown`.

#### 4. Documentation updates

- Added the broad-suite rollout order to `README.md`.
- Added example run commands for:
  - `wpt-wintertc`
  - `cpython-core`
  - `javac-jtreg`
- Added layout notes for:
  - `manifests/`
  - `suites/drivers/`

#### 5. Container registry-path fix found during verification

- The required smoke run initially failed after successful image build and
  Elide preflight because the CLI tried to load `/opt/registry.toml` while the
  launcher mounts `registry.toml` at `/work/registry.toml`.
- Fixed by:
  - adding `registryPath` to `CliOptions`
  - parsing `--registry`
  - loading the registry from `o.registryPath`
  - passing `--registry /work/registry.toml` from `bin/run`
- Added `harness/src/cli.test.ts` coverage for the explicit registry override.

### RED/GREEN evidence

#### Report test

RED:

```text
env -u NODE_EXTRA_CA_CERTS bun test harness/src/report/render.test.ts

Expected to contain: "url/a.any.js :: a"
Received report omitted the passing WPT case id
```

GREEN:

```text
env -u NODE_EXTRA_CA_CERTS bun test harness/src/report/render.test.ts
3 pass, 0 fail
```

#### Smoke verification regression found and fixed

RED:

```text
./bin/run --elide nightly --suite test262 --include 'test/language/types/boolean/**/*.js'

harness error: Error: ENOENT: no such file or directory, open '/opt/registry.toml'
```

GREEN:

```text
./bin/run --elide nightly --suite test262 --include 'test/language/types/boolean/**/*.js'

test262 @ 1.3.5+20260626.bfb28f6: 10/10 pass, 0 regressions, 0 new passes — GREEN
```

### Tests run

1. `env -u NODE_EXTRA_CA_CERTS bun test harness/src/report/render.test.ts`
   - initial RED failure reproduced
   - rerun GREEN after report fix

2. `env -u NODE_EXTRA_CA_CERTS bun test`
   - final result: `78 pass, 0 fail`

3. `env -u NODE_EXTRA_CA_CERTS bun run typecheck`
   - final result: clean `tsc --noEmit`

4. `./bin/run --elide nightly --suite test262 --include 'test/language/types/boolean/**/*.js'`
   - first run exposed registry-path failure
   - rerun after fix completed GREEN

### Results

- Bun unit tests: passing
- Typecheck: passing
- Docker harness image build: passing
- Elide image preflight in container: passing
- Test262 smoke slice: passing
- Task 5 launcher/image/docs/report wiring: complete

### Concerns

- The smoke run writes generated files under `reports/`; those verification
  artifacts were intentionally left out of the Task 5 commit to avoid mixing
  report publication churn into the implementation change.
- The added `Observed cases` section is intentionally limited to non-`test262`
  suites so the existing Test262 report shape remains stable.
