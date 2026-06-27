Implementation summary

- Added shared adapter export plumbing in `harness/src/adapters/index.ts` and switched the CLI to import `ADAPTERS` from there.
- Added `harness/src/adapters/process.ts` with `runProcess(argv, options)` plus focused tests covering stdout/stderr capture and timeout handling.
- Added `harness/src/manifest.ts` with `loadManifest(path)` plus focused tests covering grouped manifest parsing and rejection of absolute include paths.
- Extended `AdapterContext` with `settings` and `workspacePath`, and updated CLI context construction to create `.harness/work/<workload>` and pass registry settings through unchanged.
- Extended tests to verify the shared adapter export and that registry workload settings are preserved for the existing `test262` workload.

Tests and results

- RED: `cd harness && bun test src/manifest.test.ts src/adapters/process.test.ts src/cli.test.ts`
  - Result: failed as expected with module resolution errors for `./manifest`, `./process`, and `./adapters`.
- GREEN: `cd harness && bun test src/manifest.test.ts src/adapters/process.test.ts src/cli.test.ts src/adapters/test262.test.ts src/registry.test.ts`
  - Result: `10 pass, 0 fail`.
- Verification: `cd harness && bun run typecheck`
  - Result: exit 0.

TDD evidence (RED/GREEN)

- RED
  - Added new tests in `harness/src/manifest.test.ts` and `harness/src/adapters/process.test.ts`.
  - Extended `harness/src/cli.test.ts` to assert the shared adapter export before implementation existed.
  - Ran the focused test command and observed the expected missing-module failures.
- GREEN
  - Implemented the minimal manifest loader, process runner, shared adapter index, and adapter-context/CLI plumbing.
  - Re-ran the focused suite and confirmed all targeted tests passed.
  - Re-ran typecheck after the final registry assertion update and confirmed exit 0.

Files changed

- `harness/src/adapters/index.ts`
- `harness/src/adapters/process.ts`
- `harness/src/adapters/process.test.ts`
- `harness/src/manifest.ts`
- `harness/src/manifest.test.ts`
- `harness/src/adapters/types.ts`
- `harness/src/cli.ts`
- `harness/src/cli.test.ts`
- `harness/src/registry.test.ts`

Self-review findings

- Verified the new exports and interfaces match the brief’s required names and shapes.
- Verified the CLI still preserves existing `test262` behavior while adding `settings` and `workspacePath`.
- Verified focused tests and typecheck with fresh command output before preparing the commit.

Concerns

- `assertRelativePath()` follows the brief exactly and rejects any include containing `..`, which is stricter than only rejecting directory traversal segments.

Post-review fix

- Corrected `harness/src/cli.ts` so adapter context `suitePath` is derived from the registry workload path, not the workload id.
- Kept `workspacePath` keyed to the workload id so local work directories remain stable.
- Added a focused regression test in `harness/src/cli.test.ts` that builds a context with a workload id that differs from its registry path and asserts the adapter receives the suite path from `wl.path`.

Verification for this fix

- `cd harness && bun test src/cli.test.ts src/registry.test.ts src/adapters/test262.test.ts`
  - `7 pass, 0 fail`
- `cd harness && bun run typecheck`
  - exit 0
