# Task 3 Report: CPython 3.12 Pure-Core Adapter

## Status

BLOCKED during Step 5 (`git submodule add`).

## Implementation Summary

Completed before the block:

- Added CPython fixture data at `harness/fixtures/cpython-core.ndjson`.
- Added parser test at `harness/src/adapters/cpython-core.test.ts`.
- Implemented `parseCpythonLine`, `parseCpythonLines`, and `cpythonCoreAdapter` in `harness/src/adapters/cpython-core.ts`.
- Added CPython JSON driver at `suites/drivers/python/elide_regrtest_driver.py`.
- Registered the adapter in `harness/src/adapters/index.ts`.
- Added `cpython-core` manifest and expectations baseline.
- Added the `cpython-core` workload entry to `registry.toml`.
- Added registry coverage in `harness/src/registry.test.ts`.

Not completed because of the block:

- Step 5 submodule add did not succeed.
- Step 6 focused test bundle and `bun run typecheck` were not run after the block point.
- Step 7 commit was not created.

## TDD Evidence

### Red 1

Added:

- `harness/fixtures/cpython-core.ndjson`
- `harness/src/adapters/cpython-core.test.ts`

Ran:

```bash
cd harness
bun test src/adapters/cpython-core.test.ts
```

Observed failure:

```text
error: Cannot find module './cpython-core' from '/Users/sam/workspace/labs/testsuite/harness/src/adapters/cpython-core.test.ts'
```

### Green 1

Implemented:

- `harness/src/adapters/cpython-core.ts`

Re-ran:

```bash
cd harness
bun test src/adapters/cpython-core.test.ts
```

Result: passed.

### Red 2

Added registry test in `harness/src/registry.test.ts`.

Ran:

```bash
cd harness
bun test src/registry.test.ts
```

Observed failure:

```text
error: expect(received).toBeDefined()
Received: undefined
```

### Green 2

Implemented:

- `suites/drivers/python/elide_regrtest_driver.py`
- `manifests/cpython-core.toml`
- `expectations/cpython-core.toml`
- `harness/src/adapters/index.ts`
- `registry.toml`

Re-ran:

```bash
cd harness
bun test src/registry.test.ts
bun test src/adapters/cpython-core.test.ts
```

Result: both passed.

## Tests and Results

Passed before block:

- `cd harness && bun test src/adapters/cpython-core.test.ts`
- `cd harness && bun test src/registry.test.ts`

Not run because task was blocked at the required Step 5 gate:

- `cd harness && bun test src/adapters/cpython-core.test.ts src/manifest.test.ts src/registry.test.ts`
- `cd harness && bun run typecheck`

## Blocking Command and Output

Command run exactly as specified:

```bash
git submodule add --depth 1 --branch 3.12 https://github.com/python/cpython suites/cpython
```

Terminal output ended with:

```text
fatal: 'origin/3.12' is not a commit and a branch '3.12' cannot be created from it
fatal: unable to checkout submodule 'suites/cpython'
```

Additional state after the failure:

- `suites/cpython/Lib/test` does not exist.
- `.gitmodules` was not updated with a `suites/cpython` entry.
- A partial `suites/cpython/` directory remains in the worktree.

## Files Changed

- `harness/fixtures/cpython-core.ndjson`
- `harness/src/adapters/cpython-core.test.ts`
- `harness/src/adapters/cpython-core.ts`
- `harness/src/adapters/index.ts`
- `harness/src/registry.test.ts`
- `manifests/cpython-core.toml`
- `expectations/cpython-core.toml`
- `registry.toml`
- `suites/drivers/python/elide_regrtest_driver.py`
- `suites/cpython/` (partial submodule directory left by failed add)

## Self-Review Findings

- The adapter follows the existing harness pattern and uses `ctx.repoRoot` for driver lookup and process `cwd`, matching the repo-root normalization approach already used for WPT.
- The parser shape, manifest values, workload id, and timeout values match the task brief.
- `runCpythonCore()` consumes all manifest includes across groups, then applies expectation skip globs over `meta.upstreamPath`, consistent with the other adapters.
- No further code review issues found before the block.

## Concerns

- The required submodule add command is currently invalid against the upstream remote because `origin/3.12` was not resolvable.
- Because Step 5 blocked, I did not proceed to the final focused test bundle, typecheck, commit, or post-commit self-review cycle.

---

## Continuation Update - 2026-06-26

Status remains `BLOCKED`.

### Additional implementation adjustment

- Updated `harness/src/adapters/cpython-core.ts` so a non-timeout CPython driver exit does not collapse parsed per-test results into a synthetic runner error. The adapter now:
  - still emits a runner error on timeout, and
  - emits a runner error on nonzero exit only when the driver produced no parseable JSON records.

Reason: CPython test failures naturally produce a nonzero driver exit, and the harness should preserve individual failing/error test records in that case.

### Step 5 retry attempts

Retried the required submodule add with the two allowed URL forms after cleaning `suites/cpython` and `.git/modules/suites/cpython` before each attempt.

Attempt 1:

```bash
git submodule add --depth 1 --branch 3.12 https://github.com/python/cpython suites/cpython
```

Output:

```text
Cloning into '/Users/sam/workspace/labs/testsuite/suites/cpython'...
fatal: 'origin/3.12' is not a commit and a branch '3.12' cannot be created from it
fatal: unable to checkout submodule 'suites/cpython'
```

Attempt 2:

```bash
git submodule add --depth 1 --branch 3.12 https://github.com/python/cpython.git suites/cpython
```

Output:

```text
Cloning into '/Users/sam/workspace/labs/testsuite/suites/cpython'...
fatal: 'origin/3.12' is not a commit and a branch '3.12' cannot be created from it
fatal: unable to checkout submodule 'suites/cpython'
```

### Final state at stop point

- `suites/cpython/Lib/test` is still missing.
- `.gitmodules` still has no `suites/cpython` entry.
- `suites/cpython/` exists as a partial directory after the failed checkout.
- Focused tests, `bun run typecheck`, and commit creation were not run because the task instruction required stopping once both submodule add attempts failed.

---

## Completion Update - 2026-06-26

Status: `DONE`

### Submodule verification

Verified the manual submodule repair instead of re-running `git submodule add`:

- `suites/cpython` exists.
- `suites/cpython/Lib/test` exists.
- `.gitmodules` contains `submodule "suites/cpython"` with `branch = 3.12`.
- `git status --short` shows the `suites/cpython` gitlink staged for commit.

### Focused verification

Ran exactly:

```bash
cd harness && bun test src/adapters/cpython-core.test.ts src/manifest.test.ts src/registry.test.ts
cd harness && bun run typecheck
```

Observed:

- Focused test bundle passed: `6 pass, 0 fail`.
- Typecheck passed: `tsc --noEmit` exited 0.

---

## Fix Update - 2026-06-26

Adjusted CPython skip remapping so expectation globs can match either:

- the upstream module name stored in `meta.upstreamPath`, or
- the emitted CPython result id / unittest case id.

Implementation details:

- Added `remapCpythonSkip()` in `harness/src/adapters/cpython-core.ts`.
- Updated the adapter loop to use that helper instead of matching only `meta.upstreamPath`.
- Added focused coverage in `harness/src/adapters/cpython-core.test.ts` for both module-based and case-id-based skip globs.

Verification:

```bash
cd harness && bun test src/adapters/cpython-core.test.ts src/manifest.test.ts src/registry.test.ts
cd harness && bun run typecheck
```

Result:

- `7 pass, 0 fail`
- `tsc --noEmit` exited 0

### Final self-review

- The adapter registration, workload id, suite path, manifest path, and timeout match the Task 3 brief.
- `harness/src/adapters/cpython-core.ts` follows the existing adapter shape used by `wpt-wintertc`: repo-root driver lookup, manifest-driven selection, `runProcess()` execution, and skip-glob remapping.
- The nonzero-exit handling preserves parsed per-test failures and only synthesizes a runner error when the driver exits nonzero without producing parseable JSON, which is the correct harness behavior for a failing CPython run.
- The Python driver emits structured JSON records for pass, fail, error, and skip outcomes and returns a nonzero exit when any module run is unsuccessful.

### Commit

Created commit:

```text
feat(python): add CPython 3.12 pure core suite
```

---

## Re-Review Fix - 2026-06-26

Fixed the driver-side id normalization issue called out in re-review.

### Change made

- Updated `suites/drivers/python/elide_regrtest_driver.py` so emitted unittest `module` and `case` values strip a leading `test.` package prefix before JSON emission.
- Kept module-level `SkipTest` / driver-level error emission on the bare module argument, unchanged.
- Added `suites/drivers/python/test_elide_regrtest_driver.py` to verify both:
  - `normalize_unittest_id()` strips the prefix, and
  - `JsonResult` emits normalized module and case ids for a representative unittest result.

### Verification

Ran:

```bash
python3 suites/drivers/python/test_elide_regrtest_driver.py
cd harness && bun test src/adapters/cpython-core.test.ts src/manifest.test.ts src/registry.test.ts
cd harness && bun run typecheck
```

Results:

- Python driver test passed: `2 tests, 0 failures`
- Bun test bundle passed: `7 pass, 0 fail`
- Typecheck passed: `tsc --noEmit` exited 0
