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
