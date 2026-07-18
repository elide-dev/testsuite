# Briefing: `cpython-core` compat work (CPython 3.12 test suite)

_Self-contained handoff doc. Generated 2026-07-17 from the latest committed run._

## Context

This repo (`elide-dev` conformance testsuite) runs upstream conformance suites
against pinned [Elide](https://elide.dev) builds and publishes versioned
reports. `cpython-core` runs CPython 3.12's top-level `Lib/test/test_*`
modules against Elide's Python runtime (GraalPy-based). Coverage is 438
modules (see `PYTHON.md` and `manifests/cpython-core.toml`): language/object
model, containers, numbers, text/codecs, data formats, import machinery, and
an exploratory full-suite remainder.

The suite is at **95.9%** with a *pure long tail* — 72 failing cases spread
across 70 distinct root-cause signatures. There is no single big win here;
this is classification and burn-down work, well suited to parallel sub-agents
working one test module at a time.

## Current state (Elide `1.4.1+20260716.b8b6531`, digest `3d3ea83ed640`)

| pass | fail | error | skip | total | pass rate (excl. skips) |
|---:|---:|---:|---:|---:|---:|
| 1,690 | 57 | 15 | 103 | 1,865 | **95.9%** |

Counts are unittest cases/classes as reported by the CPython runner. Latest
reports:

- `reports/1.4.1+20260716.b8b6531/3d3ea83ed640/cpython-core/impact.md`
- `expectations/cpython-core.ratchet.toml` — known-failure baseline

## How to run

```bash
bun run setup                       # once: deps + submodules
# smoke:
bun run testsuite --elide nightly --suite cpython-core --include 'test_json' --log
# one module under investigation:
bun run testsuite --elide nightly --suite cpython-core --include 'test_builtin' --log
# full suite (~90s):
bun run testsuite --elide nightly --suite cpython-core
# after fixes land in an Elide nightly, re-baseline:
bun run testsuite --elide nightly --suite cpython-core --ratchet
```

## Failure analysis (72 failing cases)

Rollup by test module (from impact.json example ids):

| failing | module | flavor of failures |
|---:|---|---|
| 17 | `test_builtin` | exec/eval builtins mapping, iterator misbehavior edge cases, shutdown cleanup, subprocess-based cases |
| 6 | `test_descr` | descriptor protocol edges (e.g. Carlo Verre hackcheck multi-inherit) |
| 6 | `test_dict` | dict internals/ordering edge cases |
| 5 | `test_ast` | `ast.AST._fields` NULL-check / attribute deletion behavior |
| 5 | `test_re` | regex engine divergences |
| 4 | `test_exceptions` | exception context/`__context__` details (e.g. test_3114) |
| 4 | `test_weakref` | finalize-at-shutdown, `test_atexit` (subprocess-based) |
| 4 | `test_fstring` | f-string parse/format edges |
| 4 | `test_list` | MemoryError on huge ranges, free-after-iterating |
| 3 each | `test_tuple`, `test_class` | attribute-error message formats, free-after-iterating |
| ~11 | singletons | `test_json.test_tool` (subprocess), `test_math`, `test_extcall`, `test_genexps`, `test_functools`, `test_patma`, … |

Recurring cross-cutting themes worth knowing before diving in:

1. **Subprocess-dependent cases** (`script_helper.assert_python_ok`,
   `test_json.test_tool` piping, `test_weakref.test_atexit`): blocked on
   Elide's `child_process`/subprocess support — the same gap tracked in the
   `node-api` briefing. These are *platform limitations* today; consider
   classifying them as skips with a comment instead of failures.
2. **Attribute-error message format tests** (`test_class`, `test_descr`):
   CPython 3.12 asserts on suggestion-rich error messages ("Did you mean:
   ..."). Cheap wins if Elide's error messages can match; otherwise skip-
   classify as implementation detail.
3. **GC/refcount-semantics tests** (`free_after_iterating`, weakref
   finalization order, MemoryError on `list(range(2**63))`): often
   fundamentally different on a JVM runtime. Classify rather than chase.
4. **Genuine runtime defects** (`test_re`, `test_fstring`, `test_ast`,
   `test_builtin` non-subprocess cases): real fixes, one module at a time.

## Recommended workflow (parallelizable)

This suite is ideal for a fan-out: one agent per test module, each tasked to

1. run `--include '<module>' --log` and reproduce,
2. classify each failure: **(a)** Elide defect / **(b)** platform limitation
   (subprocess, GC semantics, native details) / **(c)** harness gap,
3. for (a): produce a minimal Python repro + pointer into the Elide runtime;
   for (b): propose a `[skip]` entry with a one-line justification;
   for (c): file against this repo.

Start with `test_builtin` (17), `test_descr`/`test_dict` (12), then
`test_ast`/`test_re` (10).

## Notes for the implementer

- Runtime fixes happen in the Elide repo (GraalPy-based Python engine); this
  repo pins nightlies and measures.
- 103 skips are already classified in `expectations/cpython-core.toml` and
  excluded from the denominator; keep skip entries commented.
- The pass rate is already 95.9% — the value here is *classification honesty*
  (separating defects from platform limits) more than raw number movement.
- After a fix lands: full run → check `changes.md` → `--ratchet` → commit.
