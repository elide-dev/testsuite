# Briefing: `javac-jtreg` compat work (OpenJDK langtools javac suite)

_Self-contained handoff doc. Generated 2026-07-17 from the latest committed run._

## Context

This repo (`elide-dev` conformance testsuite) runs upstream conformance suites
against pinned [Elide](https://elide.dev) builds and publishes versioned
reports. `javac-jtreg` runs the full OpenJDK langtools `tools/javac` tree
(5,554 jtreg `.java` test files, 100% coverage — see `JAVAC.md` and
`manifests/javac-langtools.toml`) through jtreg, compiling with **Elide's
embedded javac** and running generated programs with a regular JDK.

The suite is at **98.7%** with only 47 failures. This is precision work:
most failures sit in one opaque bucket that needs classification before
fixing, so step one is diagnosis, not patching.

## Current state (Elide `1.4.1+20260716.b8b6531`, digest `3d3ea83ed640`)

| pass | fail | error | skip | total | pass rate (excl. skips) |
|---:|---:|---:|---:|---:|---:|
| 3,655 | 45 | 2 | 232 | 3,934 | **98.7%** |

Counts are jtreg test executions. Latest reports:

- `reports/1.4.1+20260716.b8b6531/3d3ea83ed640/javac-jtreg/impact.md`
- `expectations/javac-jtreg.ratchet.toml` — known-failure baseline
- Note: `tools/javac/processing` failures are muted/skipped per earlier triage
  (annotation processing), and 232 skips are classified in
  `expectations/javac-jtreg.toml`.

## How to run

```bash
bun run setup                       # once: deps + submodules + sparse checkout
# smoke:
bun run testsuite --elide nightly --suite javac-jtreg --include 'tools/javac/IllDefinedOrderOfInit.java' --log
# one failing test with full output:
bun run testsuite --elide nightly --suite javac-jtreg --include 'tools/javac/T6411379.java' --log --show-failure-output
# full suite (~12 min):
bun run testsuite --elide nightly --suite javac-jtreg
# after fixes land in an Elide nightly, re-baseline:
bun run testsuite --elide nightly --suite javac-jtreg --ratchet
```

## Failure analysis (47 failing executions, 11 signatures)

| count | signature | examples |
|---:|---|---|
| 36 | `Compilation failed: Compilation failed` (opaque — needs classification) | `tools/javac/MethodParameters/ClassReaderTest/ClassReaderTest.java`, `T6411379`, `T6423583`, `T6458749`, `T6855236` |
| 2 | test timed out | `tools/javac/file/zip/T6836682.java` |
| 6 | output does not match reference `.out` file | `T8181464/LambdaInAnnotationsCausesNPETest{1,2,3}`, `T8171332/Processor`, `7129225/TestImportStar`, `annotations/neg/8171322/TypeVariableAsAnnotationTest`, `typeAnnotations/failures/TypeVariableMissingTA` |
| 1 | wrong compiler output line count | `tools/javac/newlines/NewLineTest.java` |
| 1 | toolbox javac task rc != 0 | `tools/javac/platform/PlatformProviderTest.java` |
| 1 | AssertionError in test main | (see impact.md) |

Reading of the buckets:

1. **The 36-test "Compilation failed" bucket is heterogeneous** — the summary
   line carries no diagnostic. First task: re-run each with
   `--show-failure-output --log` and bucket the actual javac diagnostics.
   Expect a mix of: missing `-parameters`/ClassReader metadata handling
   (`MethodParameters/*`), old regression tests exercising unusual compiler
   options, and genuine Elide-javac divergences from stock javac.
2. **Reference-file diffs (6)** are usually *diagnostic formatting*
   divergences (error message wording/position), clustered around annotation
   processing and lambda-in-annotation error recovery. Compare Elide's output
   with the `.out` golden files; these can be quick fixes if the embedded
   javac is just a version step behind the pinned OpenJDK checkout.
3. **Timeouts (2)** are zip-file-handling tests (`file/zip/T6836682`) — check
   whether they hang in Elide's filesystem layer or just exceed the limit.

## Recommended workflow

1. **Classification pass first** (an agent can do this mechanically): for each
   of the 36 opaque failures, run with `--show-failure-output`, capture the
   real diagnostic, and produce a table: test → actual error → suspected
   cause (Elide javac defect / test needs specific JDK feature / harness gap).
2. Group the classified failures and hand coherent groups to the compiler
   team: `MethodParameters/*` is likely one fix; annotation-related reference
   diffs likely another.
3. Skip-classify anything that depends on javac internals Elide intentionally
   diverges from (document in `expectations/javac-jtreg.toml`).

## Notes for the implementer

- Compiler fixes happen in Elide's embedded javac (Elide repo); this repo
  pins nightlies and measures.
- At 98.7% with 47 failures, expectations-honesty matters more than raw rate:
  every remaining failure should end up either fixed or annotated-skip with a
  reason.
- After a fix lands: full run → check `changes.md` (new passes, no
  regressions) → `--ratchet` → commit reports + expectations together.
