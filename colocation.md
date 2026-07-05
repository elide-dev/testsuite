# Test262 module fixtures are not colocated with the temp module

## Problem

The eshost `elide` host materializes each test into a temp file to run it (see
`harness/src/eshost-elide/agent.elide.js`, installed into
`node_modules/eshost/lib/agents/elide.js` by the `postinstall`
`harness/scripts/install-elide-host.sh`). For **module** tests (`flags: [module]`)
it copies the compiled test to a sibling `.mjs` so Elide parses it as an ES module.

Many Test262 module tests import sibling fixture files with relative specifiers,
e.g. `import './instn-resolve-err-syntax-2_FIXTURE.js'` or the various
`instn-*`, `dynamic-import`, and `eval-*` module fixtures. The temp module is
written to eshost's temp directory, but the referenced `_FIXTURE.js` (and other
imported module) files are **not** copied there. So the relative import resolves
to a nonexistent path in the temp dir and fails with "module not found" instead
of the test's expected resolution/link error.

## Impact

~61 `test/language/module-code/**` negative tests (mostly `negative: { phase:
resolution }`, e.g. `instn-resolve-err-syntax-*`, `instn-named-err-*`,
`instn-star-err-*`, `instn-iee-err-*`) cannot reach their real resolution error,
so they fail even though the runtime handles them correctly.

## Not the runtime

The Elide side is already fixed (branch `chore/update-graalvm-25.1.x`):
- module-resolution failures now surface as catchable guest `TypeError`s instead
  of leaking a host `java.lang.IllegalStateException`;
- the `escapesCwd` guard no longer false-positives on a script requiring its own
  siblings when run from outside cwd.

With those in place, the remaining blocker is purely that the fixtures are not
colocated with the temp module.

## Suggested fix (harness)

In the `elide` host's module path (the `.mjs` materialization in
`agent.elide.js`), make relative fixture imports resolvable. Options, simplest
first:

1. **Run the temp module from the test's original directory** — write the `.mjs`
   copy alongside the original `.js` test (same dir) rather than in eshost's temp
   dir, so `./*_FIXTURE.js` and sibling module imports resolve against the real
   Test262 tree. Clean up the copy afterward.
2. **Copy referenced fixtures** — scan the compiled source for relative
   `import`/`export ... from` specifiers and copy each referenced file (and its
   transitive imports) next to the temp `.mjs`.

Option 1 is less code and covers transitive imports for free; verify it doesn't
collide with Test262's own file naming or the harness include-injection.

## Verify

```
bun run testsuite --elide <installdir> --suite test262 \
  --include 'test/language/module-code/instn-resolve-err-syntax-1.js' --log --failure-output show
# then the broader slice:
bun run testsuite --elide <installdir> --suite test262 --include 'test/language/module-code/**' --log
```
Expect the `phase: resolution` negatives to reach their expected `SyntaxError`
rather than "module not found".
