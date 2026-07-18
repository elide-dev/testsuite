# Briefing: `test262` compat work (TC39 JavaScript conformance)

_Self-contained handoff doc. Generated 2026-07-17 from the latest committed run._

## Context

This repo (`elide-dev` conformance testsuite) runs upstream conformance suites
against pinned [Elide](https://elide.dev) builds and publishes versioned
reports. `test262` is TC39's official JavaScript conformance suite, run at
100% file coverage (53,658 files: language, built-ins, intl402, annexB,
staging, harness self-tests — see `JAVASCRIPT.md`). It runs through the stock
`test262-harness` + `eshost` with a custom eshost `elide` host.

The suite is at **99.8%** — this is polish work. The remaining failures are
few but concentrated, so a single feature closes over a third of them.

## Current state (Elide `1.4.1+20260716.b8b6531`, digest `3d3ea83ed640`)

| pass | fail | error | skip | total | pass rate (excl. skips) |
|---:|---:|---:|---:|---:|---:|
| 92,589 | 14 | 171 | 10,587 | 103,361 | **99.8%** |

Counts are test executions (a file can run in both default and strict mode).
185 failing executions total. Latest reports:

- `reports/1.4.1+20260716.b8b6531/3d3ea83ed640/test262/impact.md` — failures
  by root-cause signature; `impact.json` also has a `byFeature` rollup
- `expectations/test262.ratchet.toml` — known-failure baseline

## How to run

```bash
bun run setup                       # once: deps + submodules
# quick slice (seconds):
bun run testsuite --elide nightly --suite test262 --include 'test/built-ins/Error/prototype/stack/**/*.js' --log
# full suite (~20 min):
bun run testsuite --elide nightly --suite test262
# after fixes land in an Elide nightly, re-baseline:
bun run testsuite --elide nightly --suite test262 --ratchet
```

## Failure analysis (185 failing executions, by feature)

From `impact.json` `byFeature`:

| failing | feature | notes |
|---:|---|---|
| 70 | `error-stack-accessor` | **the** big bucket — see below |
| 18 | `dynamic-import` | assorted `import()` semantics |
| 17 | `TypedArray` | mostly immutable-ArrayBuffer-adjacent (proposal-stage) |
| 15 | `align-detached-buffer-semantics-with-web-reality` | detached-buffer edge cases |
| 11 | `BigInt` | overlaps TypedArray internals (`Set/BigInt/*-tobigint`) |
| 10 | `Proxy` | trap-order/invariant edges |
| 8 | `let` | TDZ-related, overlaps module bindings below |
| ~45 | module instantiation / TDZ | see below |

Signature view of the top clusters:

1. **`Error.prototype.stack` accessor (error-stack proposal) — 70 tests.**
   `Expected no error, got TypeError: Cannot read property ... of undefined`
   in `test/built-ins/Error/prototype/stack/*` (getter-cross-realm,
   getter-data-property-shadows, getter-error-as-prototype,
   instance-not-enumerable, …). Spec: `stack` should be an **accessor pair on
   `Error.prototype`**, not an own data property on instances. One contained
   feature; well-specified by the proposal's tests. **Do this first.**
2. **Module named-binding instantiation / TDZ — ~42 tests.**
   `test/language/module-code/instn-*` (instn-named-bndng-*, instn-iee-*,
   namespace delete-exported-uninit, …). Expected `ReferenceError` for
   accesses to uninitialized (TDZ) module bindings is not thrown; indirect
   export bindings resolve too early. Engine-level (GraalJS/Elide module
   semantics) — **medium-hard**, but it's the second-biggest bucket.
3. **Global declaration instantiation errors — ~13 tests.**
   `test/language/global-code/script-decl-*`: missing `TypeError` when
   declaring over a non-configurable global / non-extensible globalThis, and
   missing `SyntaxError` for lexical/var collisions across scripts.
4. **Source-phase imports — 4 tests** (`Module not found` for
   `source-phase-import/*`) and **ShadowRealm globalThis configurability — 2**.
5. Long tail (~50): Proxy invariants, detached-buffer semantics, BigInt
   ToBigInt coercion order, dynamic-import edge cases. Individually small.

## Ranked work items

1. **error-stack-accessor** — 70 tests, complexity **medium-low**, one
   feature. Verify with
   `--include 'test/built-ins/Error/prototype/stack/**/*.js'`.
2. **Module TDZ / binding instantiation** — ~42 tests, complexity
   **medium-hard**. Worth scoping in the engine before committing; the tests
   are all in `test/language/module-code/`.
3. **Global-code declaration instantiation** — ~13 tests, complexity
   **medium**. `CanDeclareGlobalFunction`/`CanDeclareGlobalVar` error paths.
4. **Long tail** — pick off Proxy/TypedArray/BigInt singletons
   opportunistically; not worth a dedicated project.

## Notes for the implementer

- Fixes happen in the Elide runtime (GraalJS-based); this repo pins nightlies
  and measures. `--elide nightly` picks up a fresh build.
- 10,587 skips are intentional (see `expectations/test262.toml`) and excluded
  from the pass-rate denominator.
- Some failing features are proposal-stage (immutable ArrayBuffer, source-
  phase imports). If Elide won't ship them yet, classify as `[skip]` with a
  comment rather than leaving them as permanent failures.
- After a fix lands: full run → check `changes.md` (new passes, no
  regressions) → `--ratchet` → commit reports + expectations together.
