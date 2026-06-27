# Task 4 Report: javac / jtreg Adapter

## Implementation summary

- Added `harness/src/adapters/javac-jtreg.ts` with:
  - `parseJtregSummary(text: string): TestResult[]`
  - `javacJtregAdapter: Adapter`
  - jtreg runner execution via `runProcess()`
  - manifest loading from `AdapterContext.settings.manifest`
  - repo-root wrapper path resolution via `ctx.repoRoot`
  - skip-glob remapping against parsed jtreg results
  - runner-level error result when `JTreport/text/summary.txt` is missing
- Added parser fixture and test coverage in:
  - `harness/fixtures/jtreg/JTreport/text/summary.txt`
  - `harness/src/adapters/javac-jtreg.test.ts`
- Added jtreg driver wrappers:
  - `suites/drivers/jtreg/elide-javac-wrapper.sh`
  - `suites/drivers/jtreg/java-runner-wrapper.sh`
- Registered the workload and baseline files:
  - `manifests/javac-langtools.toml`
  - `expectations/javac-jtreg.toml`
  - `harness/src/adapters/index.ts`
  - `registry.toml`
  - `harness/src/registry.test.ts`
- Added shallow OpenJDK submodule at `suites/openjdk`.

## TDD evidence

### Red

Command:

```bash
bun test harness/src/adapters/javac-jtreg.test.ts harness/src/registry.test.ts
```

Observed failures:

- `expect(received).toBeDefined()` failed in `harness/src/registry.test.ts` because `javac-jtreg` was not yet in `registry.toml`
- `Cannot find module './javac-jtreg'` from `harness/src/adapters/javac-jtreg.test.ts`

### Green

Command:

```bash
chmod +x suites/drivers/jtreg/elide-javac-wrapper.sh suites/drivers/jtreg/java-runner-wrapper.sh
bun test harness/src/adapters/javac-jtreg.test.ts harness/src/registry.test.ts
```

Result:

- `5 pass`
- `0 fail`

## Focused verification

Commands:

```bash
cd harness
bun test src/adapters/javac-jtreg.test.ts src/manifest.test.ts src/registry.test.ts
bun run typecheck
```

Results:

- `bun test`: `7 pass`, `0 fail`
- `bun run typecheck`: exit code `0`
- Both commands emitted an environment-specific extra-cert warning but completed successfully.

## OpenJDK submodule

Command:

```bash
git submodule add --depth 1 https://github.com/openjdk/jdk suites/openjdk
```

Result:

- Submodule added successfully
- Verified `suites/openjdk/test/langtools/tools/javac` exists

## Files changed

- `.gitmodules`
- `registry.toml`
- `expectations/javac-jtreg.toml`
- `manifests/javac-langtools.toml`
- `harness/fixtures/jtreg/JTreport/text/summary.txt`
- `harness/src/adapters/index.ts`
- `harness/src/adapters/javac-jtreg.ts`
- `harness/src/adapters/javac-jtreg.test.ts`
- `harness/src/registry.test.ts`
- `suites/drivers/jtreg/elide-javac-wrapper.sh`
- `suites/drivers/jtreg/java-runner-wrapper.sh`
- `suites/openjdk` (submodule)

## Self-review findings

- No functional issues found in the implemented scope after focused test and typecheck verification.
- I intentionally used `ctx.repoRoot` for wrapper script resolution in the adapter so wrapper lookup follows the existing repo-root handling pattern used by other adapters.
- Current automated coverage is limited to parser behavior and registry wiring; there is not yet an integration test around `runJavacJtreg()` process execution or summary-missing behavior.

## Concerns

- Focused tests and typecheck passed, but the environment prints an extra-cert warning during Bun/TypeScript invocation.
- There is still no end-to-end jtreg execution test in harness coverage; runtime validation depends on having `jtreg`, `java`, and the OpenJDK suite available in the target environment.

## Task 4 review fixes

- Fixed the jtreg adapter to create a fresh per-run wrapper JDK under `ctx.workspacePath/jtreg-run-*` and pass it to jtreg with `-jdk:<path>`, so jtreg now executes wrapper `bin/javac` and `bin/java` instead of only receiving unused JVM properties.
- The generated wrapper JDK delegates to the existing repo wrapper scripts, with `javac` ultimately invoking `${ELIDE_JAVAC:-/opt/elide/bin/elide} javac -- "$@"` and `java` remaining configurable via `ctx.settings.javaRunner` through `JTREG_JAVA`.
- Fixed stale-result handling by isolating `JTwork` and `JTreport` inside the fresh per-run directory; summary parsing now only inspects the current run.
- Added focused adapter tests that execute against temp fake `jtreg`, `elide`, and `java` scripts to verify `-jdk:` usage, fresh run directories, wrapper delegation, and the missing-summary/stale-summary guard.
- Added `shallow = true` to the `suites/openjdk` entry in `.gitmodules`.

### Verification after fixes

Commands:

```bash
cd harness
bun test src/adapters/javac-jtreg.test.ts src/manifest.test.ts src/registry.test.ts
bun run typecheck
```

Results:

- `bun test`: `10 pass`, `0 fail`
- `bun run typecheck`: exit code `0`
- Both commands still emit the existing environment-specific extra-cert warning but complete successfully.

## Task 4 second fix

- Reworked `harness/src/adapters/javac-jtreg.ts` so the per-run wrapper JDK is built from a real JDK home instead of a synthetic `bin/`-only tree.
- Added `resolveJdkHome()` with `settings.jdkHome` first and `JAVA_HOME` fallback, and fail-fast runner errors when no usable real JDK home is configured.
- Preserved the real JDK layout by symlinking top-level entries and non-overridden `bin/*` tools into the wrapper JDK, while still replacing only `bin/java` and `bin/javac` with repo wrapper scripts.
- Added include filtering for jtreg manifest entries using the same glob semantics already used by the WPT adapter.
- Extended adapter tests to cover wrapper JDK preservation/symlinking, filtered manifest forwarding, and missing `jdkHome` handling.

### Verification after second fix

Commands:

```bash
cd harness
bun test src/adapters/javac-jtreg.test.ts src/manifest.test.ts src/registry.test.ts
bun run typecheck
```

Results:

- `bun test`: `13 pass`, `0 fail`
- `bun run typecheck`: exit code `0`
- Both commands emitted the same environment-specific extra-cert warning and otherwise completed successfully.

### Controller verification after second fix

Commands:

```bash
cd harness
bun test src/adapters/javac-jtreg.test.ts src/manifest.test.ts src/registry.test.ts
bun run typecheck
bun test src/adapters/test262.test.ts src/cli.test.ts src/registry.test.ts
bun test
```

Results:

- Focused javac/manifest/registry tests: `13 pass`, `0 fail`
- Typecheck: exit code `0`
- Test262 adapter/CLI/registry tests: `12 pass`, `0 fail`
- Full harness suite: `59 pass`, `0 fail`
- Commands emitted the same environment-specific extra-cert warning and otherwise completed successfully.

## Task 4 third fix

- Expanded `manifests/javac-langtools.toml` beyond the diagnostics directory by adding a small execution-oriented OpenJDK slice: `tools/javac/launcher/BasicSourceLauncherTests.java`.
- Updated `harness/src/adapters/javac-jtreg.ts` so `settings.jdkHome` still wins, but absent that the adapter now derives `java.home` by running the configured `javaRunner` with `-XshowSettings:properties -version` and parsing the reported property before falling back to `JAVA_HOME`.
- Made include filtering directory-aware so a manifest directory entry such as `tools/javac/diags` is retained when `--include` targets descendant files like `tools/javac/diags/Example*.java`.
- Clarified the default registry behavior in `registry.toml`: `javaRunner` is the primary discovery path for the real JDK home and `JAVA_HOME` is compatibility fallback only.
- Extended tests to cover the manifest smoke slice, directory-entry include forwarding, explicit-vs-derived JDK home resolution, and fallback/error cases around `javaRunner` discovery.

### Verification after third fix

Commands:

```bash
cd harness
bun test src/adapters/javac-jtreg.test.ts src/manifest.test.ts src/registry.test.ts
bun run typecheck
bun test src/adapters/test262.test.ts src/cli.test.ts src/registry.test.ts
```

Results:

- Focused javac/manifest/registry tests: `18 pass`, `0 fail`
- Typecheck: exit code `0`
- Cheap cross-check (`test262` adapter + CLI + registry): `12 pass`, `0 fail`
- Controller full harness suite: `64 pass`, `0 fail`
- Commands emitted the same environment-specific extra-cert warning and otherwise completed successfully.

## Task 4 fourth fix

- Replaced the source-launcher smoke slice in `manifests/javac-langtools.toml` with a true langtools compile-then-run test: `tools/javac/IllDefinedOrderOfInit.java`, which locally carries `@compile IllDefinedOrderOfInit.java` and `@run main IllDefinedOrderOfInit`.
- Updated `harness/src/manifest.test.ts` so the manifest regression check now requires that compile-then-run slice instead of launcher-only coverage.
- Reworked `harness/src/adapters/javac-jtreg.ts` to resolve the real JDK home and effective `JTREG_JAVA` together via `resolveJavaExecution()`: explicit `jdkHome` preserves configured `javaRunner`, successful `javaRunner` discovery preserves that runner, and `JAVA_HOME` fallback now exports `${resolvedJdkHome}/bin/java`.
- Tightened file-granular `--include` handling for directory manifest entries by expanding matching descendant `.java` files under `test/langtools` only when include globs are present, while preserving raw directory entries when include globs are empty.
- Extended `harness/src/adapters/javac-jtreg.test.ts` to cover directory-entry narrowing, effective runner selection, and the `JTREG_JAVA` environment passed into jtreg for explicit, discovered, and fallback runner cases.

### Verification after fourth fix

Commands:

```bash
cd harness
bun test src/adapters/javac-jtreg.test.ts src/manifest.test.ts src/registry.test.ts
bun run typecheck
```

Results:

- Focused javac/manifest/registry tests: `24 pass`, `0 fail`
- Typecheck: exit code `0`
- Test262 adapter/CLI/registry tests: `12 pass`, `0 fail`
- Controller full harness suite: `70 pass`, `0 fail`
- Commands emitted the same environment-specific extra-cert warning and otherwise completed successfully.

## Task 4 fifth fix

- Updated `harness/src/adapters/javac-jtreg.ts` so `runJavacJtreg()` returns immediately when manifest/include filtering selects zero tests, matching the existing empty-workload behavior instead of spawning `jtreg` with no test operands.
- Tightened `validateJdkHome()` to reject partial JDK/JRE layouts before wrapper construction unless `bin/java`, `bin/javac`, and `bin/jar` all exist under the resolved home.
- Extended `harness/src/adapters/javac-jtreg.test.ts` with:
  - a non-matching `ctx.include` case proving `runJavacJtreg()` returns `[]` and never invokes the fake `jtreg` runner
  - explicit `jdkHome` validation failure for missing `bin/javac`
  - `JAVA_HOME` fallback validation failure for missing `bin/jar`

## Task 4 seventh fix

- Updated `harness/src/adapters/javac-jtreg.ts` to preserve parsed jtreg summary results while also surfacing infrastructure failure when the jtreg process exits non-zero or times out after producing a summary.
- Centralized runner-level error construction so both the existing no-summary path and the new partial-summary failure path emit the same `javac-jtreg::<runner>` error shape, including duration and runner metadata.
- Extended `harness/src/adapters/javac-jtreg.test.ts` with regressions for:
  - non-zero jtreg exit after writing a summary, which must now yield both the parsed per-test result and a runner-level error
  - summary-reported failed tests with process exit `0`, which must remain per-test-only with no extra runner error

### Verification after seventh fix

Commands:

```bash
cd harness
env -u NODE_EXTRA_CA_CERTS bun test src/adapters/javac-jtreg.test.ts src/manifest.test.ts src/registry.test.ts
env -u NODE_EXTRA_CA_CERTS bun run typecheck
env -u NODE_EXTRA_CA_CERTS bun test src/adapters/test262.test.ts src/cli.test.ts src/registry.test.ts
env -u NODE_EXTRA_CA_CERTS bun test
```

Results:

- Focused javac/manifest/registry tests: `30 pass`, `0 fail`
- Typecheck: exit code `0`
- Cheap cross-check (`test262` adapter + CLI + registry): `13 pass`, `0 fail`
- Full harness suite: `76 pass`, `0 fail`
- All commands completed without the prior extra-cert warning when run under `env -u NODE_EXTRA_CA_CERTS`.

### Verification after fifth fix

Commands:

```bash
cd harness
bun test src/adapters/javac-jtreg.test.ts src/manifest.test.ts src/registry.test.ts
bun run typecheck
bun test src/adapters/test262.test.ts src/cli.test.ts src/registry.test.ts
bun test
```

Results:

- Focused javac/manifest/registry tests: `27 pass`, `0 fail`
- Typecheck: exit code `0`
- Cheap cross-check (`test262` adapter + CLI + registry): `12 pass`, `0 fail`
- Full harness suite: `73 pass`, `0 fail`
- Commands emitted the same environment-specific extra-cert warning and otherwise completed successfully.

## Task 4 sixth fix

- Reordered `registry.toml` to satisfy the binding-required suite order consumed by `loadRegistry()`: `wpt-wintertc`, `cpython-core`, `javac-jtreg`, then `test262`.
- Added an explicit registry order assertion in `harness/src/registry.test.ts` so future edits cannot silently break that requirement while keeping the existing per-workload coverage intact.
- Identified the extra-cert warning source as an exported empty `NODE_EXTRA_CA_CERTS` environment variable and re-ran verification with that variable unset, without changing production code.

### Clean-env verification after sixth fix

Command form used to suppress the warning cleanly:

```bash
cd harness
env -u NODE_EXTRA_CA_CERTS bun test src/adapters/javac-jtreg.test.ts src/manifest.test.ts src/registry.test.ts
env -u NODE_EXTRA_CA_CERTS bun run typecheck
env -u NODE_EXTRA_CA_CERTS bun test src/adapters/test262.test.ts src/cli.test.ts src/registry.test.ts
env -u NODE_EXTRA_CA_CERTS bun test
```

Results:

- Focused javac/manifest/registry tests: `28 pass`, `0 fail`
- Typecheck: exit code `0`
- Cheap cross-check (`test262` adapter + CLI + registry): `13 pass`, `0 fail`
- Full harness suite: `74 pass`, `0 fail`
- Output was warning-free with `NODE_EXTRA_CA_CERTS` unset.
