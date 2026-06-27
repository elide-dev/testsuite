# Task 2 Report: WinterTC / WPT Pure-API Adapter

## Implementation summary

Implemented the `wpt-wintertc` adapter and bridge parser in `harness/src/adapters/wpt-wintertc.ts`, registered it in `harness/src/adapters/index.ts`, and added the required sparse WPT fixture/test coverage. Added the WPT bridge runner at `suites/drivers/wpt/wintertc-runner.js`, created the initial manifest at `manifests/wintertc-wpt-2025.toml`, created the baseline expectations file at `expectations/wpt-wintertc.toml`, and registered the new workload in `registry.toml`.

## Tests and results

Focused tests run from `harness/`:

```bash
bun test src/adapters/wpt-wintertc.test.ts src/manifest.test.ts src/registry.test.ts
```

Result: passed, 6 tests / 0 failures.

Typecheck run from `harness/`:

```bash
bun run typecheck
```

Result: passed, exit code 0.

## TDD evidence

Red phase:

```bash
bun test src/adapters/wpt-wintertc.test.ts src/registry.test.ts
```

Observed failures:
- `Cannot find module './wpt-wintertc'` from `src/adapters/wpt-wintertc.test.ts`
- `loads wpt-wintertc workload from registry.toml` failed because `wpt-wintertc` was `undefined`

Green phase:
- Implemented `harness/src/adapters/wpt-wintertc.ts`
- Added registry entry and adapter registration
- Re-ran:

```bash
bun test src/adapters/wpt-wintertc.test.ts src/registry.test.ts
```

Result: passed, 4 tests / 0 failures.

Verification phase:
- Re-ran the exact focused test command from the brief
- Re-ran `bun run typecheck`

## Files changed

- `.gitmodules`
- `registry.toml`
- `expectations/wpt-wintertc.toml`
- `manifests/wintertc-wpt-2025.toml`
- `suites/drivers/wpt/wintertc-runner.js`
- `suites/wpt` (new sparse submodule)
- `harness/fixtures/wpt-wintertc.ndjson`
- `harness/src/adapters/index.ts`
- `harness/src/adapters/wpt-wintertc.ts`
- `harness/src/adapters/wpt-wintertc.test.ts`
- `harness/src/registry.test.ts`

## Self-review findings

- The adapter follows the existing harness pattern: manifest-driven selection, `runProcess()` execution, and expectation glob application via `picomatch`.
- `parseWptLine()` and `parseWptLines()` match the brief’s required IDs, statuses, and metadata shape.
- The runner emits JSONL test records compatible with the adapter parser and uses `testharness.js` with `add_completion_callback`.
- The WPT submodule sparse-checkout is configured for `resources`, `url`, and `encoding`.

## Concerns

- The initial `git submodule add --depth 1 https://github.com/web-platform-tests/wpt suites/wpt` invocation stalled after printing `Cloning into '/Users/sam/workspace/labs/testsuite/suites/wpt'...`. The repository contents were present but the submodule registration had not completed, so I re-ran `git submodule add ...` to register the existing repo, then re-materialized the new submodule cleanly with `git submodule update --init --depth 1 suites/wpt` before reapplying sparse-checkout. Final submodule state is clean.

## Review fix follow-up

Fixed the WPT expectation matching gap by teaching `filePathOf()` to strip the ` :: subtest` suffix used by WPT result ids before glob comparison, while preserving the existing Test262 scenario stripping. Added a focused regression test in `harness/src/expectations/compare.test.ts` that proves a WPT id like `url/urlsearchparams.any.js :: URLSearchParams constructor` matches a `url/**` expectation glob.

Fixed `suites/drivers/wpt/wintertc-runner.js` to preserve testharness semantics instead of collapsing every nonzero subtest status into `FAIL`. The bridge now maps `PASS -> PASS`, `FAIL -> FAIL`, `TIMEOUT` and unknown harness problems -> `ERROR`, and `NOTRUN` / `PRECONDITION_FAILED` -> `SKIP`.

Added `bin/init-wpt` as the minimal reproducible sparse-checkout artifact for the WPT submodule. It runs submodule init/update for `suites/wpt` and reapplies sparse-checkout for `resources`, `url`, and `encoding`. Added the command to `README.md` so the repository advertises the supported rehydration path.

### Verification rerun

Focused tests run from `harness/`:

```bash
bun test src/adapters/wpt-wintertc.test.ts src/manifest.test.ts src/registry.test.ts src/expectations/compare.test.ts
```

Result:

```text
bun test v1.3.14 (0d9b296a)
warn: ignoring extra certs from /workspace/elide/apps/buildless/app/base/pki/root-ecc.crt, load failed: error:10000002:SSL routines:OPENSSL_internal:system library

src/manifest.test.ts:
(pass) loads grouped manifest entries [2.88ms]
(pass) rejects absolute manifest paths [1.00ms]

src/registry.test.ts:
(pass) loads test262 workload from registry.toml [1.16ms]
(pass) loads wpt-wintertc workload from registry.toml [0.12ms]

src/expectations/compare.test.ts:
(pass) regression: expected pass, actual fail [1.08ms]
(pass) expected fail that fails is not a regression [0.05ms]
(pass) new pass: expected fail, actual pass [0.05ms]
(pass) skip glob overrides status to skip [0.04ms]
(pass) most specific glob wins [0.06ms]
(pass) WPT expectation globs match result ids without subtest suffixes [0.07ms]

src/adapters/wpt-wintertc.test.ts:
(pass) maps WPT bridge JSON lines to TestResult records [0.56ms]
(pass) ignores blank WPT lines [0.11ms]

 12 pass
 0 fail
 30 expect() calls
Ran 12 tests across 4 files. [86.00ms]
```

Typecheck run from `harness/`:

```bash
bun run typecheck
```

Result:

```text
$ tsc --noEmit
Warning: Ignoring extra certs from `/workspace/elide/apps/buildless/app/base/pki/root-ecc.crt`, load failed: error:80000002:system library::No such file or directory
```

## Task 2 re-review fix

Fixed `harness/src/expectations/ratchet.ts` to serialize ratchet ids with TOML basic-string escaping instead of raw quoted keys. This keeps WPT-style ids such as `url/a.any.js :: name "with" slash \\` valid in `.ratchet.toml` files and readable by `loadRatchet()`.

Added a regression in `harness/src/expectations/ratchet.test.ts` that writes and reloads that exact WPT-style id through the ratchet file path.

### Verification rerun

Focused tests run from `harness/`:

```bash
bun test src/expectations/ratchet.test.ts src/expectations/compare.test.ts src/adapters/wpt-wintertc.test.ts
```

Result:

```text
bun test v1.3.14 (0d9b296a)

src/expectations/ratchet.test.ts:
(pass) writeRatchet then loadRatchet round-trips exact ids [2.54ms]
(pass) writeRatchet handles WPT-style ids with quotes and backslashes [0.21ms]
(pass) ratchetCandidates = failing ids not covered by skip/[fail] globs [1.69ms]
(pass) a ratcheted failing id is expected (not a regression) [0.17ms]
(pass) a ratcheted id that now passes surfaces as a new pass [0.03ms]

src/expectations/compare.test.ts:
(pass) regression: expected pass, actual fail [0.15ms]
(pass) expected fail that fails is not a regression [0.04ms]
(pass) new pass: expected fail, actual pass [0.06ms]
(pass) skip glob overrides status to skip [0.02ms]
(pass) most specific glob wins [0.39ms]
(pass) WPT expectation globs match result ids without subtest suffixes [0.05ms]

src/adapters/wpt-wintertc.test.ts:
(pass) maps WPT bridge JSON lines to TestResult records [0.65ms]
(pass) ignores blank WPT lines [0.12ms]

 13 pass
 0 fail
 25 expect() calls
Ran 13 tests across 3 files. [85.00ms]
```

Typecheck run from `harness/`:

```bash
bun run typecheck
```

Result:

```text
$ tsc --noEmit
```
