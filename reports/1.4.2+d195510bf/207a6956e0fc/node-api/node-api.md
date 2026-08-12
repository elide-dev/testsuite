# node-api — `1.4.2+d195510bf`

- Image digest: `207a6956e0fc641e661f1feb936b7e7aa4ed799d9e481f72756785bc18766e34`
- Suite version: `ed33ae74ad100a38df41edf56f6935c78821e779`
- Ran: 2026-08-11T06:29:22.948Z → 2026-08-11T06:59:52.964Z

## Summary

![Pass-rate chart](./pass-rate.svg)

**Pass rate: 1253/3071 (58.74%)**

| pass | fail | error | skip | regressions | new passes |
|---:|---:|---:|---:|---:|---:|
| 1253 | 805 | 75 | 938 | 5 | 275 |

## Observed cases (2133)

- `test/parallel/test-assert-class-destructuring.js` — fail — TAP version 13
# Subtest: Assert class destructuring behavior - diff option
not ok 1 - Assert class destructuring behavior - diff option
  ---
  duration_ms: 1
  failureType: 'testCodeFailure'
  error: "Assert is not a constructor"
  code: 'ERR_TEST_FAILURE'
  ...
# Subtest: Assert class destructuring behavior - strict option
not ok 2 - Assert class destructuring behavior - strict option
  ---
  duration_ms: 0
  failureType: 'testCodeFailure'
  error: "Assert is not a constructor"
  code: 'ERR_TEST_FAILURE'
  ...
# Subtest: Assert class destructuring behavior - comprehensive methods
not ok 3 - Assert class destructuring behavior - comprehensive methods
  ---
  duration_ms: 1
  failureType: 'testCodeFailure'
  error: "Assert is not a constructor"
  code: 'ERR_TEST_FAILURE'
  ...
1..3
# tests 3
# suites 0
# pass 0
# fail 3
# cancelled 0
# skipped 0
# todo 0
# duration_ms 9
- `test/parallel/test-assert-class.js` — fail — TAP version 13
# Subtest: Assert constructor requires new
not ok 1 - Assert constructor requires new
  ---
  duration_ms: 5
  failureType: 'testCodeFailure'
  error: "Expected values to be strictly deep-equal:\n+ actual - expected\n\n  Comparison {\n-   code: 'ERR_CONSTRUCT_CALL_REQUIRED',\n    name: 'TypeError'\n  }\n"
  code: 'ERR_ASSERTION'
  ...
# Subtest: Assert class non strict
not ok 2 - Assert class non strict
  ---
  duration_ms: 0
  failureType: 'testCodeFailure'
  error: "Assert is not a constructor"
  code: 'ERR_TEST_FAILURE'
  ...
# Subtest: Assert class strict
not ok 3 - Assert class strict
  ---
  duration_ms: 1
  failureType: 'testCodeFailure'
  error: "Assert is not a constructor"
  code: 'ERR_TEST_FAILURE'
  ...
# Subtest: Assert class with invalid diff option
not ok 4 - Assert class with invalid diff option
  ---
  duration_ms: 1
  failureType: 'testCodeFailure'
  error: "Expected values to be strictly deep-equal:\n+ actual - expected\n\n  Comparison {\n+   message: 'Assert is not a constructor',\n-   code: 'ERR_INVALID_ARG_VALUE',\n-   message: \"The property 'options.diff' must be one of: 'simple', 'full'. Received 'invalid'\",\n    name: 'TypeError'\n  }\n"
  code: 'ERR_ASSERTION'
  ...
# Subtest: Assert class non strict with full diff
not ok 5 - Assert class non strict with full diff
  ---
  duration_ms: 1
  failureType: 'testCodeFailure'
  error: "Assert is not a constructor"
  code: 'ERR_TEST_FAILURE'
  ...
# Subtest: Assert class non strict with simple diff
not ok 6 - Assert class non strict with simple diff
  ---
  duration_ms: 1
  failureType: 'testCodeFailure'
  error: "Assert is not a constructor"
  code: 'ERR_TEST_FAILURE'
  ...
# Subtest: Assert class strict with skipPrototype
not ok 7 - Assert class strict with skipPrototype
  ---
  duration_ms: 0
  failureType: 'testCodeFailure'
  error: "Assert is not a constructor"
  code: 'ERR_TEST_FAILURE'
  ...
# Subtest: Assert class non strict with skipPrototype
not ok 8 - Assert class non strict with skipPrototype
  ---
  duration_ms: 1
  failureType: 'testCodeFailure'
  error: "Assert is not a constructor"
  code: 'ERR_TEST_FAILURE'
  ...
# Subtest: Assert class skipPrototype with complex objects
not ok 9 - Assert class skipPrototype with complex objects
  ---
  duration_ms: 0
  failureType: 'testCodeFailure'
  error: "Assert is not a constructor"
  code: 'ERR_TEST_FAILURE'
  ...
# Subtest: Assert class skipPrototype with arrays and special objects
not ok 10 - Assert class skipPrototype with arrays and special objects
  ---
  duration_ms: 0
  failureType: 'testCodeFailure'
  error: "Assert is not a constructor"
  code: 'ERR_TEST_FAILURE'
  ...
# Subtest: Assert class skipPrototype with notDeepStrictEqual
not ok 11 - Assert class skipPrototype with notDeepStrictEqual
  ---
  duration_ms: 1
  failureType: 'testCodeFailure'
  error: "Assert is not a constructor"
  code: 'ERR_TEST_FAILURE'
  ...
# Subtest: Assert class skipPrototype with mixed types
not ok 12 - Assert class skipPrototype with mixed types
  ---
  duration_ms: 0
  failureType: 'testCodeFailure'
  error: "Assert is not a constructor"
  code: 'ERR_TEST_FAILURE'
  ...
1..12
# tests 12
# suites 0
# pass 0
# fail 12
# cancelled 0
# skipped 0
# todo 0
# duration_ms 17
- `test/parallel/test-assert-async.js` — fail — Uncaught (in promise) AssertionError: The "bound " validation function is expected to return "true". Received false

Caught error:

AssertionError: Got rejection that did not match expected: null
- `test/parallel/test-assert-checktag.js` — pass
- `test/parallel/test-assert-deep-with-error.js` — pass
- `test/parallel/test-assert-fail.js` — pass
- `test/parallel/test-assert-esm-cjs-message-verify.js` — fail — TAP version 13
# Subtest: ensure the assert.ok throwing similar error messages for esm and cjs files
    # Subtest: should return code 1 for each command
    not ok 1 - should return code 1 for each command
      ---
      duration_ms: 89
      failureType: 'testCodeFailure'
      error: "Expected values to be strictly equal:\n\n2 !== 1\n"
      code: 'ERR_ASSERTION'
      ...
    1..1
not ok 1 - ensure the assert.ok throwing similar error messages for esm and cjs files
  ---
  duration_ms: 91
  failureType: 'subtestsFailed'
  error: "1 subtest failed"
  code: 'ERR_TEST_FAILURE'
  ...
1..1
# tests 1
# suites 1
# pass 0
# fail 1
# cancelled 0
# skipped 0
# todo 0
# duration_ms 95
- `test/parallel/test-assert-first-line.js` — pass
- `test/parallel/test-assert-if-error.js` — pass
- `test/parallel/test-assert-deep.js` — fail — TAP version 13
# Subtest: deepEqual
ok 1 - deepEqual
# Subtest: loose deepEqual
ok 2 - loose deepEqual
# Subtest: date
ok 3 - date
# Subtest: regexp
ok 4 - regexp
# Subtest: deepEqual should pass for these weird cases
ok 5 - deepEqual should pass for these weird cases
# Subtest: es6 Maps and Sets
ok 6 - es6 Maps and Sets
# Subtest: GH-6416. Make sure circular refs do not throw
ok 7 - GH-6416. Make sure circular refs do not throw
# Subtest: GH-14441. Circular structures should be consistent
ok 8 - GH-14441. Circular structures should be consistent
# Subtest: deepStrictEqual handles shared expected array elements after cycle detection
ok 9 - deepStrictEqual handles shared expected array elements after cycle detection
# Subtest: deepStrictEqual handles cross-root aliases after cycle detection
ok 10 - deepStrictEqual handles cross-root aliases after cycle detection
# Subtest: Ensure reflexivity of deepEqual with `arguments` objects.
ok 11 - Ensure reflexivity of deepEqual with `arguments` objects.
# Subtest: More checking that arguments objects are handled correctly
ok 12 - More checking that arguments objects are handled correctly
# Subtest: Handle sparse arrays
ok 13 - Handle sparse arrays
# Subtest: Handle sets and maps with mixed keys
ok 14 - Handle sets and maps with mixed keys
# Subtest: Handle different error messages
ok 15 - Handle different error messages
# Subtest: Handle NaN
ok 16 - Handle NaN
# Subtest: Handle boxed primitives
ok 17 - Handle boxed primitives
# Subtest: Minus zero
ok 18 - Minus zero
# Subtest: Handle symbols (enumerable only)
ok 19 - Handle symbols (enumerable only)
# Subtest: Additional tests
ok 20 - Additional tests
# Subtest: Having the same number of owned properties && the same set of keys
ok 21 - Having the same number of owned properties && the same set of keys
# Subtest: Having an identical prototype property
ok 22 - Having an identical prototype property
# Subtest: Primitives
ok 23 - Primitives
# Subtest: Additional tests
ok 24 - Additional tests
# Subtest: Having the same number of owned properties && the same set of keys
ok 25 - Having the same number of owned properties && the same set of keys
# Subtest: Prototype check
ok 26 - Prototype check
# Subtest: Check extra properties on errors
ok 27 - Check extra properties on errors
# Subtest: Check proxies
not ok 28 - Check proxies
  ---
  duration_ms: 3
  failureType: 'testCodeFailure'
  error: "Expected values to be strictly deep-equal:\n+ actual - expected\n\n  Comparison {\n    message: 'Expected values to be strictly deep-equal:\\n' +\n      '+ actual - expected\\n' +\n      '\\n' +\n+     '  [\\n' +\n-     '+ Proxy([\\n' +\n-     '- [\\n' +\n      '    1,\\n' +\n      '    2,\\n' +\n-     '+ ])\\n' +\n      '-   3\\n' +\n+     '  ]\\n'\n-     '- ]\\n'\n  }\n"
  code: 'ERR_ASSERTION'
  ...
# Subtest: Strict equal with identical objects that are not identical by reference and longer than 50 elements
ok 29 - Strict equal with identical objects that are not identical by reference and longer than 50 elements
# Subtest: Basic valueOf check
ok 30 - Basic valueOf check
# Subtest: Basic array out of bounds check
ok 31 - Basic array out of bounds check
# Subtest: Verify that manipulating the `getTime()` function has no impact on the time verification.
ok 32 - Verify that manipulating the `getTime()` function has no impact on the time verification.
# Subtest: Verify that an array and the equivalent fake array object are correctly compared
ok 33 - Verify that an array and the equivalent fake array object are correctly compared
# Subtest: Verify that extra keys will be tested for when using fake arrays
ok 34 - Verify that extra keys will be tested for when using fake arrays
# Subtest: Verify that changed tags will still check for the error message
ok 35 - Verify that changed tags will still check for the error message
# Subtest: Check for non-native errors
ok 36 - Check for non-native errors
# Subtest: Check for Errors with cause property
ok 37 - Check for Errors with cause property
# Subtest: Check for AggregateError
ok 38 - Check for AggregateError
# Subtest: Verify that `valueOf` is not called for boxed primitives
ok 39 - Verify that `valueOf` is not called for boxed primitives
# Subtest: Check getters
ok 40 - Check getters
# Subtest: Verify object types being identical on both sides
ok 41 - Verify object types being identical on both sides
# Subtest: Verify commutativity
ok 42 - Verify commutativity
# Subtest: Crypto
ok 43 - Crypto # SKIP
# Subtest: Comparing two identical WeakMap instances
ok 44 - Comparing two identical WeakMap instances
# Subtest: Comparing two different WeakMap instances
ok 45 - Comparing two different WeakMap instances
# Subtest: Comparing two identical WeakSet instances
ok 46 - Comparing two identical WeakSet instances
# Subtest: Comparing two different WeakSet instances
ok 47 - Comparing two different WeakSet instances
# Subtest: Comparing two arrays nested inside object, with overlapping elements
ok 48 - Comparing two arrays nested inside object, with overlapping elements
# Subtest: Comparing two arrays nested inside object, with overlapping elements, swapping keys
ok 49 - Comparing two arrays nested inside object, with overlapping elements, swapping keys
# Subtest: Detects differences in deeply nested arrays instead of seeing a new object
ok 50 - Detects differences in deeply nested arrays instead of seeing a new object
# Subtest: URLs
ok 51 - URLs
# Subtest: Own property constructor properties should check against the original prototype
ok 52 - Own property constructor properties should check against the original prototype
# Subtest: Inherited null prototype without own constructor properties should check the correct prototype
ok 53 - Inherited null prototype without own constructor properties should check the correct prototype
# Subtest: Promises should fail deepEqual
ok 54 - Promises should fail deepEqual
1..54
# tests 54
# suites 0
# pass 52
# fail 1
# cancelled 0
# skipped 1
# todo 0
# duration_ms 652
- `test/parallel/test-assert.js` — fail — TAP version 13
# Subtest: some basics
ok 1 - some basics
# Subtest: Throw message if the message is instanceof Error
ok 2 - Throw message if the message is instanceof Error
# Subtest: Errors created in different contexts are handled as any other custom error
ok 3 - Errors created in different contexts are handled as any other custom error
# Subtest: assert.throws()
not ok 4 - assert.throws()
  ---
  duration_ms: 7
  failureType: 'testCodeFailure'
  error: "The expression evaluated to a falsy value:\n\n  assert.ok(e instanceof TypeError)\n"
  code: 'ERR_ASSERTION'
  ...
# Subtest: Check messages from assert.throws()
ok 5 - Check messages from assert.throws()
# Subtest: Test assertion messages
ok 6 - Test assertion messages
# Subtest: Custom errors
ok 7 - Custom errors
# Subtest: Verify that throws() and doesNotThrow() throw on non-functions
ok 8 - Verify that throws() and doesNotThrow() throw on non-functions
# Subtest: https://github.com/nodejs/node/issues/3275
ok 9 - https://github.com/nodejs/node/issues/3275
# Subtest: Long values should be truncated for display
ok 10 - Long values should be truncated for display
# Subtest: Output that extends beyond 10 lines should also be truncated for display
ok 11 - Output that extends beyond 10 lines should also be truncated for display
# Subtest: Bad args to AssertionError constructor should throw TypeError.
ok 12 - Bad args to AssertionError constructor should throw TypeError.
# Subtest: NaN is handled correctly
ok 13 - NaN is handled correctly
# Subtest: Test strict assert
not ok 14 - Test strict assert
  ---
  duration_ms: 1
  failureType: 'testCodeFailure'
  error: "Expected values to be strictly equal:\n\n20 !== 22\n"
  code: 'ERR_ASSERTION'
  ...
# Subtest: Additional asserts
FOO
not ok 15 - Additional asserts
  ---
  duration_ms: 9
  failureType: 'testCodeFailure'
  error: "Expected values to be strictly deep-equal:\n+ actual - expected\n\n  Comparison {\n+   code: 'ERR_ASSERTION',\n+   message: 'Missing expected exception.'\n-   code: 'ERR_INVALID_ARG_TYPE',\n-   message: 'The \"error\" argument must be of type function or an instance of Error, RegExp, or Object. Received type number (1)'\n  }\n"
  code: 'ERR_ASSERTION'
  ...
# Subtest: Throws accepts objects
not ok 16 - Throws accepts objects
  ---
  duration_ms: 5
  failureType: 'testCodeFailure'
  error: "Expected values to be strictly deep-equal:\n+ actual - expected\n\n  AssertionError {\n    code: 'ERR_ASSERTION',\n    constructor: [Function: AssertionError],\n+   message: 'Got unwanted exception: foobar\\nActual message: \"\"'\n-   message: 'foobar'\n  }\n"
  code: 'ERR_ASSERTION'
  ...
# Subtest: Additional assert
not ok 17 - Additional assert
  ---
  duration_ms: 6
  failureType: 'testCodeFailure'
  error: "Expected values to be strictly deep-equal:\n+ actual - expected\n\n  Comparison {\n+   message: 'null is not an Object'\n-   actual: null,\n-   expected: {\n-     message: 'foo'\n-   },\n-   generatedMessage: true,\n-   message: 'Expected values to be strictly deep-equal:\\n' +\n-     '+ actual - expected\\n' +\n-     '\\n' +\n-     '+ null\\n' +\n-     '- {\\n' +\n-     \"-   message: 'foo'\\n\" +\n-     '- }\\n',\n-   operator: 'throws'\n  }\n"
  code: 'ERR_ASSERTION'
  ...
# Subtest: assert/strict exists
ok 18 - assert/strict exists
# Subtest: Printf-like format strings as error message
ok 19 - Printf-like format strings as error message
# Subtest: Functions as error message
ok 20 - Functions as error message
# Subtest: Ambiguous error messages fail
ok 21 - Ambiguous error messages fail
# Subtest: Faulty message functions
ok 22 - Faulty message functions
# Subtest: Functions as error message
ok 23 - Functions as error message
1..23
# tests 23
# suites 0
# pass 18
# fail 5
# cancelled 0
# skipped 0
# todo 0
# duration_ms 88
- `test/parallel/test-assert-partial-deep-equal.js` — pass
- `test/parallel/test-async-hooks-async-await.js` — fail — Uncaught (in promise) TypeError: Cannot read property '1' of undefined
- `test/parallel/test-async-hooks-asyncresource-constructor.js` — pass
- `test/parallel/test-async-hooks-close-during-destroy.js` — fail — Mismatched <anonymous> function calls. Expected at least 2, actual 0.
    at Proxy.mustCallAtLeast (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:543:10)
    at test-async-hooks-close-during-destroy.js:14:16
    at test-async-hooks-close-during-destroy.js:1:1
Mismatched <anonymous> function calls. Expected at least 2, actual 0.
    at Proxy.mustCallAtLeast (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:543:10)
    at test-async-hooks-close-during-destroy.js:18:19
    at test-async-hooks-close-during-destroy.js:1:1
- `test/parallel/test-async-hooks-constructor.js` — pass
- `test/parallel/test-async-hooks-correctly-switch-promise-hook.js` — pass
- `test/parallel/test-async-hooks-destroy-on-gc.js` — fail — TypeError: (intermediate value).gc is not a function
    at Immediate.<anonymous> (test-async-hooks-destroy-on-gc.js:25:14)
    at Immediate._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at TypeError.get stack (native)
- `test/parallel/test-async-hooks-disable-during-promise.js` — fail — Mismatched noop function calls. Expected exactly 2, actual 0.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at test-async-hooks-disable-during-promise.js:11:16
    at test-async-hooks-disable-during-promise.js:1:1
Mismatched noop function calls. Expected exactly 1, actual 0.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at test-async-hooks-disable-during-promise.js:12:18
    at test-async-hooks-disable-during-promise.js:1:1
- `test/parallel/test-async-hooks-disable-gc-tracking.js` — fail — TypeError: (intermediate value).gc is not a function
    at Immediate.<anonymous> (test-async-hooks-disable-gc-tracking.js:17:14)
    at TypeError.get stack (native)
- `test/parallel/test-async-hooks-enable-before-promise-resolve.js` — fail — Uncaught (in promise) AssertionError: Expected "actual" to be strictly unequal to: 1
- `test/parallel/test-async-hooks-enable-disable-enable.js` — fail — Uncaught (in promise) AssertionError: Expected "actual" to be strictly unequal to: 1
- `test/parallel/test-async-hooks-enable-disable.js` — fail — Mismatched noop function calls. Expected exactly 1, actual 0.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at test-async-hooks-enable-disable.js:7:16
    at test-async-hooks-enable-disable.js:1:1
- `test/parallel/test-async-hooks-enable-during-promise.js` — fail — Mismatched noop function calls. Expected exactly 1, actual 0.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at test-async-hooks-enable-during-promise.js:7:18
    at _return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
Mismatched noop function calls. Expected at least 1, actual 0.
    at Proxy.mustCallAtLeast (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:543:10)
    at test-async-hooks-enable-during-promise.js:8:20
    at _return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
Mismatched noop function calls. Expected at least 2, actual 0.
    at Proxy.mustCallAtLeast (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:543:10)
    at test-async-hooks-enable-during-promise.js:9:19
    at _return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
- `test/parallel/test-async-hooks-enable-recursive.js` — fail — Mismatched noop function calls. Expected exactly 1, actual 0.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at test-async-hooks-enable-recursive.js:8:16
    at test-async-hooks-enable-recursive.js:1:1
Mismatched <anonymous> function calls. Expected exactly 2, actual 0.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at test-async-hooks-enable-recursive.js:12:16
    at test-async-hooks-enable-recursive.js:1:1
- `test/parallel/test-async-hooks-execution-async-resource.js` — fail — AssertionError: Expected values to be strictly deep-equal:
+ actual - expected

  {
+   state: '/9'
-   state: '/0'
  }

    at Readable.<anonymous> (test-async-hooks-execution-async-resource.js:39:14)
    at Readable._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
AssertionError: Expected values to be strictly deep-equal:
+ actual - expected

  {
+   state: '/9'
-   state: '/1'
  }

    at Readable.<anonymous> (test-async-hooks-execution-async-resource.js:39:14)
    at Readable._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
AssertionError: Expected values to be strictly deep-equal:
+ actual - expected

  {
+   state: '/9'
-   state: '/2'
  }

    at Readable.<anonymous> (test-async-hooks-execution-async-resource.js:39:14)
    at Readable._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
AssertionError: Expected values to be strictly deep-equal:
+ actual - expected

  {
+   state: '/9'
-   state: '/3'
  }

    at Readable.<anonymous> (test-async-hooks-execution-async-resource.js:39:14)
    at Readable._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
AssertionError: Expected values to be strictly deep-equal:
+ actual - expected

  {
+   state: '/9'
-   state: '/4'
  }

    at Readable.<anonymous> (test-async-hooks-execution-async-resource.js:39:14)
    at Readable._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
AssertionError: Expected values to be strictly deep-equal:
+ actual - expected

  {
+   state: '/9'
-   state: '/5'
  }

    at Readable.<anonymous> (test-async-hooks-execution-async-resource.js:39:14)
    at Readable._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
AssertionError: Expected values to be strictly deep-equal:
+ actual - expected

  {
+   state: '/9'
-   state: '/6'
  }

    at Readable.<anonymous> (test-async-hooks-execution-async-resource.js:39:14)
    at Readable._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
AssertionError: Expected values to be strictly deep-equal:
+ actual - expected

  {
+   state: '/9'
-   state: '/8'
  }

    at Readable.<anonymous> (test-async-hooks-execution-async-resource.js:39:14)
    at Readable._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
AssertionError: Expected values to be strictly deep-equal:
+ actual - expected

  {
+   state: '/9'
-   state: '/7'
  }

    at Readable.<anonymous> (test-async-hooks-execution-async-resource.js:39:14)
    at Readable._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
- `test/parallel/test-async-hooks-fatal-error.js` — fail — AssertionError: init  0 !== 1
    at main (test-async-hooks-fatal-error.js:48:7)
    at :anonymous (test-async-hooks-fatal-error.js:10:3)
    at :program (test-async-hooks-fatal-error.js:1:1)
- `test/parallel/test-async-hooks-prevent-double-destroy.js` — fail — TypeError: (intermediate value).gc is not a function
    at Immediate.<anonymous> (test-async-hooks-prevent-double-destroy.js:20:14)
    at TypeError.get stack (native)
- `test/parallel/test-async-hooks-promise-enable-disable.js` — pass
- `test/parallel/test-async-hooks-promise-triggerid.js` — fail — Uncaught (in promise) AssertionError: Expected values to be strictly equal:

1 !== undefined
- `test/parallel/test-async-hooks-promise.js` — fail — TypeError: Cannot read property 'triggerId' of undefined
    at :anonymous (test-async-hooks-promise.js:28:20)
    at :program (test-async-hooks-promise.js:1:1)
- `test/parallel/test-async-hooks-recursive-stack-runInAsyncScope.js` — fail — AssertionError: Expected values to be strictly equal:  2 !== 1
    at :=> (test-async-hooks-recursive-stack-runInAsyncScope.js:11:5)
    at _return (index.js:573:12)
    at recurse (test-async-hooks-recursive-stack-runInAsyncScope.js:10:3)
    at :anonymous (test-async-hooks-recursive-stack-runInAsyncScope.js:20:1)
    at :program (test-async-hooks-recursive-stack-runInAsyncScope.js:1:1)
- `test/parallel/test-async-hooks-run-in-async-scope-caught-exception.js` — pass
- `test/parallel/test-async-hooks-run-in-async-scope-this-arg.js` — pass
- `test/parallel/test-async-hooks-stack-overflow-nested-async.js` — pass
- `test/parallel/test-async-hooks-stack-overflow-try-catch.js` — pass
- `test/parallel/test-async-hooks-stack-overflow.js` — pass
- `test/parallel/test-async-hooks-top-level-clearimmediate.js` — fail — AssertionError: Expected values to be strictly equal: + actual - expected  + Immediate { +   _argv: [], +   _destroyed: false, +   _idleNext: null, +   _idlePrev: null, +   _onImmediate: [Function: mustNotCall] + } - undefined
    at :anonymous (test-async-hooks-top-level-clearimmediate.js:31:1)
    at :program (test-async-hooks-top-level-clearimmediate.js:1:1)
- `test/parallel/test-async-hooks-vm-gc.js` — pass
- `test/parallel/test-assert-typedarray-deepequal.js` — pass
- `test/parallel/test-async-hooks-worker-asyncfn-terminate-1.js` — pass
- `test/parallel/test-async-hooks-worker-asyncfn-terminate-3.js` — pass
- `test/parallel/test-async-hooks-worker-asyncfn-terminate-2.js` — pass
- `test/parallel/test-async-local-storage-bind.js` — pass
- `test/parallel/test-async-hooks-worker-asyncfn-terminate-4.js` — pass
- `test/parallel/test-async-local-storage-contexts.js` — pass
- `test/parallel/test-async-local-storage-deep-stack.js` — pass
- `test/parallel/test-async-local-storage-exit-does-not-leak.js` — pass
- `test/parallel/test-async-local-storage-enter-with.js` — fail — Uncaught (in promise) AssertionError: Expected values to be strictly equal:
+ actual - expected

+ 'inside then'
- undefined
- `test/parallel/test-async-local-storage-http-agent.js` — fail — AssertionError: Expected values to be strictly equal:
+ actual - expected

+ undefined
- 'first'

    at Writable.<anonymous> (test-async-local-storage-http-agent.js:39:14)
    at Writable._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at Writable.emit (native)
    at Duplex.push (native)
- `test/parallel/test-async-local-storage-isolation.js` — pass
- `test/parallel/test-async-local-storage-run-scope.js` — pass
- `test/parallel/test-async-local-storage-http-multiclients.js` — fail — TypeError: Cannot read property 'set' of undefined
    at Writable.<anonymous> (test-async-local-storage-http-multiclients.js:36:9)
    at Writable._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at Writable.emit (native)
    at Duplex.push (native)
TypeError: Cannot read property 'set' of undefined
    at Writable.<anonymous> (test-async-local-storage-http-multiclients.js:36:9)
    at Writable._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at Writable.emit (native)
    at Duplex.push (native)
TypeError: Cannot read property 'set' of undefined
    at Writable.<anonymous> (test-async-local-storage-http-multiclients.js:36:9)
    at Writable._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at Writable.emit (native)
    at Duplex.push (native)
TypeError: Cannot read property 'set' of undefined
    at Writable.<anonymous> (test-async-local-storage-http-multiclients.js:36:9)
    at Writable._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at Writable.emit (native)
    at Duplex.push (native)
TypeError: Cannot read property 'set' of undefined
    at Writable.<anonymous> (test-async-local-storage-http-multiclients.js:36:9)
    at Writable._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at Writable.emit (native)
    at Duplex.push (native)
TypeError: Cannot read property 'set' of undefined
    at Writable.<anonymous> (test-async-local-storage-http-multiclients.js:36:9)
    at Writable._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at Writable.emit (native)
    at Duplex.push (native)
TypeError: Cannot read property 'set' of undefined
    at Writable.<anonymous> (test-async-local-storage-http-multiclients.js:36:9)
    at Writable._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at Writable.emit (native)
    at Duplex.push (native)
TypeError: Cannot read property 'set' of undefined
    at Writable.<anonymous> (test-async-local-storage-http-multiclients.js:36:9)
    at Writable._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at Writable.emit (native)
    at Duplex.push (native)
TypeError: Cannot read property 'set' of undefined
    at Writable.<anonymous> (test-async-local-storage-http-multiclients.js:36:9)
    at Writable._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at Writable.emit (native)
    at Duplex.push (native)
TypeError: Cannot read property 'set' of undefined
    at Writable.<anonymous> (test-async-local-storage-http-multiclients.js:36:9)
    at Writable._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at Writable.emit (native)
    at Duplex.push (native)
- `test/parallel/test-async-local-storage-snapshot.js` — pass
- `test/parallel/test-async-wrap-constructor.js` — pass
- `test/parallel/test-async-wrap-pop-id-during-load.js` — fail — AssertionError: EXIT CODE: 2, STDERR: error: unexpected argument '--unhandled-rejections' found    tip: to pass '--unhandled-rejections' as a value, use '-- --unhandled-rejections'  Usage: elide [OPTIONS] [FILE] [-- <SCRIPT_ARGS>...] [COMMAND]  For more information, try '--help'.   2 !== 0
    at :anonymous (test-async-wrap-pop-id-during-load.js:21:1)
    at :program (test-async-wrap-pop-id-during-load.js:1:1)
- `test/parallel/test-async-wrap-promise-after-enabled.js` — fail — AssertionError: Expected values to be strictly deep-equal:
+ actual - expected

  [
-   'before',
    'then',
-   'after'
  ]

    at Immediate.<anonymous> (test-async-wrap-promise-after-enabled.js:36:10)
    at Immediate._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
- `test/parallel/test-async-wrap-trigger-id.js` — fail — AssertionError: Expected "actual" to be strictly unequal to: 0
    at test-async-wrap-trigger-id.js:16:12
- `test/parallel/test-buffer-alloc.js` — fail — AssertionError: Expected values to be strictly deep-equal: + actual - expected    Comparison { +   message: 'index is too large' -   message: 'Invalid typed array length: 9007199254740992'   }
    at :anonymous (test-buffer-alloc.js:14:1)
    at :program (test-buffer-alloc.js:1:1)
- `test/parallel/test-buffer-arraybuffer.js` — fail — AssertionError: Missing expected exception (RangeError).
    at :anonymous (test-buffer-arraybuffer.js:142:3)
    at :program (test-buffer-arraybuffer.js:1:1)
- `test/parallel/test-buffer-ascii.js` — pass
- `test/parallel/test-buffer-badhex.js` — pass
- `test/parallel/test-buffer-bigint64.js` — pass
- `test/parallel/test-buffer-bytelength.js` — pass
- `test/parallel/test-buffer-compare-offset.js` — fail — AssertionError: Expected values to be strictly deep-equal: + actual - expected    Comparison {     code: 'ERR_INVALID_ARG_TYPE', +   message: 'The "target" argument must be an instance of Buffer or Uint8Array. Received type undefined (undefined)', -   message: 'The "target" argument must be an instance of Buffer or Uint8Array. Received undefined',     name: 'TypeError'   }
    at :anonymous (test-buffer-compare-offset.js:89:1)
    at :program (test-buffer-compare-offset.js:1:1)
- `test/parallel/test-buffer-compare.js` — pass
- `test/parallel/test-buffer-concat.js` — fail — AssertionError: Expected values to be strictly deep-equal: + actual - expected  + Buffer(100) [Uint8Array] [ +   0, +   0, +   0, +   0, +   0, +   0, +   0, +   0, +   0, +   0, +   0, +   0, +   0, +   0, +   0, +   0, +   0, +   0, +   0, +   0, +   0, +   0, +   0, +   0, +   0, +   0, +   0, +   0, +   0, +   0, +   0, +   0, +   0, +   0, +   0, +   0, +   0, +   0, +   0, +   0, +   0, +   0, +   0, +   0, +   0, +   0, +   0, +   0, +   0, +   0, +   0, +   0, +   0, +   0, +   0, +   0, +   0, +   0, +   0, +   0, +   0, +   0, +   0, +   0, +   0, +   0, +   0, +   0, +   0, +   0, +   0, +   0, +   0, +   0, +   0, +   0, +   0, +   0, +   0, +   0, +   0, +   0, +   0, +   0, +   0, +   0, +   0, +   0, +   0, +   0, +   0, +   0, +   0, +   0, +   0, +   0, +   0, +   0, +   0, +   0 + ] - Buffer(0) [Uint8Array] []
    at :anonymous (test-buffer-concat.js:108:1)
    at :program (test-buffer-concat.js:1:1)
- `test/parallel/test-buffer-constants.js` — pass
- `test/parallel/test-buffer-constructor-deprecation-error.js` — pass
- `test/parallel/test-buffer-constructor-node-modules-paths.js` — fail — AssertionError: Expected values to be strictly equal: + actual - expected  + "Error: Usage: 'elide <script>' or 'elide run <script>'; see --help" - ''
    at test (test-buffer-constructor-node-modules-paths.js:20:5)
    at :anonymous (test-buffer-constructor-node-modules-paths.js:23:1)
    at :program (test-buffer-constructor-node-modules-paths.js:1:1)
- `test/parallel/test-buffer-constructor-node-modules.js` — fail — [process 1257]: --- stderr ---
(node:1257) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.

[process 1257]: --- stdout ---

[process 1257]: status = 0, signal = null
Error: - stderr did not match ''
    at logAndThrow (child_process.js:111:5)
    at expectSyncExit (child_process.js:135:5)
    at spawnSyncAndAssert (child_process.js:155:10)
    at :anonymous (test-buffer-constructor-node-modules.js:10:1)
    at :program (test-buffer-constructor-node-modules.js:1:1)
- `test/parallel/test-buffer-constructor-outside-node-modules.js` — fail — (node:1268) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.
AssertionError: DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.
    at process.<anonymous> (test-buffer-constructor-outside-node-modules.js:18:10)
    at process._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at AssertionError.get stack (native)
    at ok (native)
    at process.<anonymous> (test-buffer-constructor-outside-node-modules.js:18:3)
    at process._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
- `test/parallel/test-buffer-copy-immutable.js` — fail — AssertionError: Expected values to be strictly equal:  8 !== 0
    at :anonymous (test-buffer-copy-immutable.js:19:3)
    at :program (test-buffer-copy-immutable.js:1:1)
- `test/parallel/test-buffer-copy.js` — fail — AssertionError: Expected values to be strictly deep-equal: + actual - expected    Comparison { -   code: 'ERR_INVALID_ARG_TYPE',     name: 'TypeError'   }
    at :anonymous (test-buffer-copy.js:133:1)
    at :program (test-buffer-copy.js:1:1)
- `test/parallel/test-buffer-equals.js` — pass
- `test/parallel/test-buffer-failed-alloc-typed-arrays.js` — pass
- `test/parallel/test-buffer-fakes.js` — pass
- `test/parallel/test-buffer-from.js` — pass
- `test/parallel/test-buffer-generic-methods.js` — fail — AssertionError: Expected values to be strictly deep-equal: + actual - expected  + [ +   'asciiSlice', +   'base64Slice', +   'base64urlSlice', +   'latin1Slice', +   'hexSlice', +   'ucs2Slice', +   'utf8Slice', +   'asciiWrite', +   'base64Write', +   'base64urlWrite', +   'latin1Write', +   'hexWrite', +   'ucs2Write', +   'utf8Write', +   'inspect', +   'toLocaleString', +   Symbol(nodejs.util.inspect.custom) + ] - []
    at :anonymous (test-buffer-generic-methods.js:116:1)
    at :program (test-buffer-generic-methods.js:1:1)
- `test/parallel/test-buffer-includes.js` — fail — AssertionError: The expression evaluated to a falsy value:    assert.ok(
    at :anonymous (test-buffer-includes.js:263:5)
    at :program (test-buffer-includes.js:1:1)
- `test/parallel/test-buffer-indexof.js` — fail — AssertionError: Missing expected exception.
    at :anonymous (test-buffer-indexof.js:90:1)
    at :program (test-buffer-indexof.js:1:1)
- `test/parallel/test-buffer-inheritance.js` — pass
- `test/parallel/test-buffer-inspect.js` — pass
- `test/parallel/test-buffer-isascii.js` — pass
- `test/parallel/test-buffer-isencoding.js` — pass
- `test/parallel/test-buffer-isutf8.js` — pass
- `test/parallel/test-buffer-iterator.js` — pass
- `test/parallel/test-buffer-new.js` — pass
- `test/parallel/test-buffer-no-negative-allocation.js` — pass
- `test/parallel/test-buffer-nopendingdep-map.js` — pass
- `test/parallel/test-buffer-of-no-deprecation.js` — pass
- `test/parallel/test-buffer-over-max-length.js` — pass
- `test/parallel/test-buffer-parent-property.js` — fail — TypeError: The first argument must be of type string or an instance of Buffer, ArrayBuffer, or Array or an Array-like Object. Received undefined
    at :anonymous (test-buffer-parent-property.js:14:8)
    at :program (test-buffer-parent-property.js:1:1)
- `test/parallel/test-buffer-pending-deprecation.js` — pass
- `test/parallel/test-buffer-pool-untransferable.js` — fail — AssertionError: Values have same structure but are not reference-equal:  ArrayBuffer {   [Uint8Contents]: <68 65 6c 6c 6f 20 77 6f 72 6c 64>,   [byteLength]: 11 }
    at :anonymous (test-buffer-pool-untransferable.js:12:1)
    at :program (test-buffer-pool-untransferable.js:1:1)
- `test/parallel/test-buffer-prototype-inspect.js` — pass
- `test/parallel/test-buffer-read.js` — pass
- `test/parallel/test-buffer-readdouble.js` — pass
- `test/parallel/test-buffer-readfloat.js` — pass
- `test/parallel/test-buffer-readint.js` — pass
- `test/parallel/test-buffer-readuint.js` — pass
- `test/parallel/test-buffer-resizable.js` — fail — (node:1518) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.
- `test/parallel/test-buffer-safe-unsafe.js` — pass
- `test/parallel/test-buffer-set-inspect-max-bytes.js` — pass
- `test/parallel/test-buffer-sharedarraybuffer.js` — pass
- `test/parallel/test-buffer-slice.js` — pass
- `test/parallel/test-buffer-slow.js` — pass
- `test/parallel/test-buffer-swap-fast.js` — fail — SyntaxError: <eval>:1:0 Expected an operand but found % %PrepareFunctionForOptimization(Buffer.prototype.swap16) ^
    at :anonymous (test-buffer-swap-fast.js:34:1)
    at :program (test-buffer-swap-fast.js:1:1)
- `test/parallel/test-buffer-swap.js` — pass
- `test/parallel/test-buffer-tojson.js` — pass
- `test/parallel/test-buffer-tostring-range.js` — fail — AssertionError: Missing expected exception (TypeError).
    at :anonymous (test-buffer-tostring-range.js:127:1)
    at :program (test-buffer-tostring-range.js:1:1)
- `test/parallel/test-buffer-tostring-rangeerror.js` — fail — AssertionError: Missing expected exception (Error).
    at test (test-buffer-tostring-rangeerror.js:37:3)
    at :anonymous (test-buffer-tostring-rangeerror.js:40:1)
    at :program (test-buffer-tostring-rangeerror.js:1:1)
- `test/parallel/test-buffer-tostring.js` — pass
- `test/parallel/test-buffer-write.js` — fail — AssertionError: Expected values to be strictly equal:  1 !== 0
    at :anonymous (test-buffer-write.js:78:3)
    at :program (test-buffer-write.js:1:1)
- `test/parallel/test-buffer-writedouble.js` — pass
- `test/parallel/test-buffer-writefloat.js` — pass
- `test/parallel/test-buffer-writeint.js` — pass
- `test/parallel/test-buffer-writeuint.js` — pass
- `test/parallel/test-buffer-zero-fill-cli.js` — pass
- `test/parallel/test-buffer-zero-fill-reset.js` — pass
- `test/parallel/test-buffer-zero-fill.js` — pass
- `test/parallel/test-stringbytes-external.js` — pass
- `test/parallel/test-async-hooks-execution-async-resource-await.js` — error — Node API test timed out
- `test/parallel/test-child-process-advanced-serialization-splitted-length-field.js` — pass
- `test/parallel/test-async-hooks-http-parser-destroy.js` — error — Node API test timed out
- `test/parallel/test-child-process-advanced-serialization.js` — fail — AssertionError: Missing expected exception.
    at :anonymous (test-child-process-advanced-serialization.js:10:5)
    at :program (test-child-process-advanced-serialization.js:1:1)
- `test/parallel/test-child-process-constructor.js` — fail — AssertionError: Expected values to be strictly deep-equal: + actual - expected    Comparison {     code: 'ERR_INVALID_ARG_TYPE', +   message: 'The "options" argument must be of type object. Received Received undefined', +   name: 'Error' -   message: 'The "options" argument must be of type object. Received undefined', -   name: 'TypeError'   }
    at :=> (test-child-process-constructor.js:13:5)
    at :anonymous (test-child-process-constructor.js:12:3)
    at :program (test-child-process-constructor.js:1:1)
- `test/parallel/test-child-process-can-write-to-stdout.js` — pass
- `test/parallel/test-child-process-cwd.js` — fail — AssertionError: The input did not match the regular expression /The URL must be of scheme file/. Input:  'AssertionError: Expected values to be strictly equal: + actual - expected  + 'undefined' - 'number' '
    at :anonymous (test-child-process-cwd.js:78:3)
    at :program (test-child-process-cwd.js:1:1)
- `test/parallel/test-child-process-default-options.js` — pass
- `test/parallel/test-child-process-destroy.js` — fail — Mismatched noop function calls. Expected exactly 1, actual 0.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at test-child-process-destroy.js:7:29
    at test-child-process-destroy.js:1:1
- `test/parallel/test-child-process-detached.js` — pass
- `test/parallel/test-child-process-dgram-reuseport.js` — pass
- `test/parallel/test-child-process-double-pipe.js` — pass
- `test/parallel/test-child-process-disconnect.js` — fail — AssertionError: Missing expected exception.
    at Duplex.<anonymous> (test-child-process-disconnect.js:96:18)
    at Duplex._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at Duplex.push (native)
Error: read ECONNRESET
- `test/parallel/test-child-process-env.js` — pass
- `test/parallel/test-child-process-exec-abortcontroller-promisified.js` — fail — Uncaught (in promise) AssertionError: Expected values to be strictly deep-equal:
+ actual - expected

  Comparison {
-   cause: [DOMException [AbortError]: This operation was aborted],
    name: 'AbortError'
  }

Uncaught (in promise) AssertionError: Expected values to be strictly deep-equal:
+ actual - expected

  Comparison {
-   cause: Error: boom
-       at test-child-process-exec-abortcontroller-promisified.js:30:15
-       at test-child-process-exec-abortcontroller-promisified.js:1:1,
    name: 'AbortError'
  }

Uncaught (in promise) AssertionError: Expected values to be strictly deep-equal:
+ actual - expected

  Comparison {
-   cause: 'boom',
    name: 'AbortError'
  }

AssertionError: Missing expected exception (TypeError).
    at :anonymous (test-child-process-exec-abortcontroller-promisified.js:53:3)
    at :program (test-child-process-exec-abortcontroller-promisified.js:1:1)
- `test/parallel/test-child-process-exec-cwd.js` — pass
- `test/parallel/test-child-process-exec-env.js` — pass
- `test/parallel/test-child-process-exec-error.js` — fail — TypeError: Cannot read property 'includes' of undefined
    at child (test-child-process-exec-error.js:30:12)
    at _return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)
    at TypeError.get stack (native)
TypeError: Cannot read property 'includes' of undefined
    at child (test-child-process-exec-error.js:30:12)
    at _return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)
    at TypeError.get stack (native)
- `test/parallel/test-child-process-exec-encoding.js` — pass
- `test/parallel/test-child-process-exec-maxbuf.js` — pass
- `test/parallel/test-child-process-exec-std-encoding.js` — pass
- `test/parallel/test-child-process-exec-stdout-stderr-data-string.js` — fail — AssertionError: Expected values to be strictly equal:

'object' !== 'string'

    at Readable.<anonymous> (test-child-process-exec-stdout-stderr-data-string.js:12:10)
    at Readable._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at Readable.push (native)
- `test/parallel/test-async-local-storage-weak-asyncwrap-leak.js` — error — Node API test timed out
- `test/parallel/test-child-process-exec-timeout-not-expired.js` — pass
- `test/parallel/test-child-process-execFile-promisified-abortController.js` — fail — AssertionError: Missing expected exception (TypeError).
    at :anonymous (test-child-process-execFile-promisified-abortController.js:44:3)
    at :program (test-child-process-execFile-promisified-abortController.js:1:1)
- `test/parallel/test-child-process-execfile-maxbuf.js` — pass
- `test/parallel/test-child-process-execfile.js` — fail — AssertionError: Expected values to be strictly equal: + actual - expected  + 'Error: Command failed' - 'Error: Command failed: /opt/elide/bin/elide'
    at :=> (test-child-process-execfile.js:39:5)
    at _return (index.js:573:12)
    at :anonymous (test-child-process-execfile.js:50:3)
    at :program (test-child-process-execfile.js:1:1)
- `test/parallel/test-child-process-execfilesync-maxbuf.js` — pass
- `test/parallel/test-child-process-execsync-maxbuf.js` — pass
- `test/parallel/test-child-process-exit-code.js` — pass
- `test/parallel/test-child-process-flush-stdio.js` — pass
- `test/parallel/test-child-process-exec-timeout-expire.js` — fail — TypeError: Cannot read property 'killed' of null
    at test-child-process-exec-timeout-expire.js:31:22
    at _return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)
    at TypeError.get stack (native)
- `test/parallel/test-child-process-exec-timeout-kill.js` — fail — TypeError: Cannot read property 'killed' of null
    at test-child-process-exec-timeout-kill.js:32:22
    at _return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)
    at TypeError.get stack (native)
- `test/parallel/test-child-process-fork-advanced-header-serialization.js` — pass
- `test/parallel/test-child-process-fork-args.js` — pass
- `test/parallel/test-child-process-fork-and-spawn.js` — pass
- `test/parallel/test-child-process-fork-close.js` — pass
- `test/parallel/test-child-process-fork-closed-channel-segfault.js` — fail — TypeError: This handle type cannot be sent
    at Duplex.s (test-child-process-fork-closed-channel-segfault.js:46:16)
    at Duplex.emit (native)
- `test/parallel/test-child-process-fork-detached.js` — pass
- `test/parallel/test-child-process-fork-exec-argv.js` — fail — SyntaxError: Unexpected end of JSON input
    at JSON.parse (native)
    at EventEmitter.<anonymous> (test-child-process-fork-exec-argv.js:47:33)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)
    at SyntaxError.get stack (native)
- `test/parallel/test-child-process-fork-dgram.js` — fail — TypeError: This handle type cannot be sent
    at EventEmitter.<anonymous> (test-child-process-fork-dgram.js:68:11)
    at EventEmitter.emit (native)
AssertionError: The expression evaluated to a falsy value:

  assert(parentGotMessage)

    at process.<anonymous> (test-child-process-fork-dgram.js:104:5)
- `test/parallel/test-child-process-fork-getconnections.js` — fail — TypeError: This handle type cannot be sent
    at EventEmitter.<anonymous> (test-child-process-fork-getconnections.js:71:11)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)
TypeError: This handle type cannot be sent
    at EventEmitter.<anonymous> (test-child-process-fork-getconnections.js:71:11)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)
TypeError: This handle type cannot be sent
    at EventEmitter.<anonymous> (test-child-process-fork-getconnections.js:71:11)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)
TypeError: This handle type cannot be sent
    at EventEmitter.<anonymous> (test-child-process-fork-getconnections.js:71:11)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)
TypeError: This handle type cannot be sent
    at EventEmitter.<anonymous> (test-child-process-fork-getconnections.js:71:11)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)
TypeError: This handle type cannot be sent
    at EventEmitter.<anonymous> (test-child-process-fork-getconnections.js:71:11)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)
TypeError: This handle type cannot be sent
    at EventEmitter.<anonymous> (test-child-process-fork-getconnections.js:71:11)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)
TypeError: This handle type cannot be sent
    at EventEmitter.<anonymous> (test-child-process-fork-getconnections.js:71:11)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)
TypeError: This handle type cannot be sent
    at EventEmitter.<anonymous> (test-child-process-fork-getconnections.js:71:11)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)
TypeError: This handle type cannot be sent
    at EventEmitter.<anonymous> (test-child-process-fork-getconnections.js:71:11)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)
TypeError: This handle type cannot be sent
    at EventEmitter.<anonymous> (test-child-process-fork-getconnections.js:71:11)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)
TypeError: This handle type cannot be sent
    at EventEmitter.<anonymous> (test-child-process-fork-getconnections.js:71:11)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)
- `test/parallel/test-child-process-fork-exec-path.js` — pass
- `test/parallel/test-child-process-fork-net-server.js` — fail — TypeError: This handle type cannot be sent
    at EventEmitter.<anonymous> (test-child-process-fork-net-server.js:116:13)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)
- `test/parallel/test-child-process-fork-net-socket.js` — fail — TypeError: This handle type cannot be sent
    at EventEmitter.<anonymous> (test-child-process-fork-net-socket.js:65:13)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)
- `test/parallel/test-child-process-fork-net.js` — fail — TypeError: This handle type cannot be sent
    at EventEmitter.<anonymous> (test-child-process-fork-net.js:103:16)
    at EventEmitter.emit (native)
TypeError: This handle type cannot be sent
    at EventEmitter.<anonymous> (test-child-process-fork-net.js:103:16)
    at EventEmitter.emit (native)
TypeError: This handle type cannot be sent
    at EventEmitter.<anonymous> (test-child-process-fork-net.js:103:16)
    at EventEmitter.emit (native)
TypeError: This handle type cannot be sent
    at EventEmitter.<anonymous> (test-child-process-fork-net.js:103:16)
    at EventEmitter.emit (native)
TypeError: This handle type cannot be sent
    at EventEmitter.<anonymous> (test-child-process-fork-net.js:103:16)
    at EventEmitter.emit (native)
TypeError: This handle type cannot be sent
    at EventEmitter.<anonymous> (test-child-process-fork-net.js:103:16)
    at EventEmitter.emit (native)
TypeError: This handle type cannot be sent
    at EventEmitter.<anonymous> (test-child-process-fork-net.js:103:16)
    at EventEmitter.emit (native)
TypeError: This handle type cannot be sent
    at EventEmitter.<anonymous> (test-child-process-fork-net.js:103:16)
    at EventEmitter.emit (native)
TypeError: This handle type cannot be sent
    at EventEmitter.<anonymous> (test-child-process-fork-net.js:103:16)
    at EventEmitter.emit (native)
TypeError: This handle type cannot be sent
    at EventEmitter.<anonymous> (test-child-process-fork-net.js:103:16)
    at EventEmitter.emit (native)
TypeError: This handle type cannot be sent
    at EventEmitter.<anonymous> (test-child-process-fork-net.js:103:16)
    at EventEmitter.emit (native)
TypeError: This handle type cannot be sent
    at EventEmitter.<anonymous> (test-child-process-fork-net.js:103:16)
    at EventEmitter.emit (native)
TypeError: Cannot read property 'length' of undefined
    at process.<anonymous> (test-child-process-fork-net.js:184:24)
    at TypeError.get stack (native)
- `test/parallel/test-child-process-fork-no-shell.js` — pass
- `test/parallel/test-child-process-fork-ref.js` — pass
- `test/parallel/test-child-process-fork-ref2.js` — pass
- `test/parallel/test-child-process-fork-stdio-string-variant.js` — fail — AssertionError: Expected values to be strictly equal:

1 !== 0

    at EventEmitter.<anonymous> (test-child-process-fork-stdio-string-variant.js:29:53)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)
Error: Source is not a file or is not readable: /work/.harness/work/node-api/node-api-overlay/test/fixtures/child-process-spawn-node; see --help
- `test/parallel/test-child-process-fork-stdio.js` — fail — AssertionError: Missing expected exception (Error).
    at :anonymous (test-child-process-fork-stdio.js:22:3)
    at :program (test-child-process-fork-stdio.js:1:1)
- `test/parallel/test-child-process-fork.js` — pass
- `test/parallel/test-child-process-fork3.js` — pass
- `test/parallel/test-child-process-internal.js` — fail — Mismatched <anonymous> function calls. Expected exactly 1, actual 0.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at test-child-process-internal.js:46:40
    at test-child-process-internal.js:1:1
- `test/parallel/test-child-process-ipc-next-tick.js` — pass
- `test/parallel/test-child-process-ipc.js` — fail — AssertionError: function should not have been called at test-child-process-ipc.js:38
called with arguments: <Buffer 54 79 70 65 45 72 72 6f 72 3a 20 28 69 6e 74 65 72 6d 65 64 69 61 74 65 20 76 61 6c 75 65 29 2e 6f 70 65 6e 53 74 64 69 6e 20 69 73 20 6e 6f 74 20 61 ... 10 more bytes>
    at Readable.mustNotCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:631:12)
    at Readable.push (native)
AssertionError: function should not have been called at test-child-process-ipc.js:38
called with arguments: <Buffer 20 20 20 20 61 74 20 3a 61 6e 6f 6e 79 6d 6f 75 73 20 28 65 63 68 6f 2e 6a 73 3a 32 37 3a 31 33 29 0a>
    at Readable.mustNotCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:631:12)
    at Readable.push (native)
AssertionError: function should not have been called at test-child-process-ipc.js:38
called with arguments: <Buffer 20 20 20 20 61 74 20 3a 70 72 6f 67 72 61 6d 20 28 65 63 68 6f 2e 6a 73 3a 31 3a 31 29 0a>
    at Readable.mustNotCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:631:12)
    at Readable.push (native)
- `test/parallel/test-child-process-kill.js` — fail — AssertionError: Expected values to be strictly equal:

null !== 0

    at EventEmitter.<anonymous> (test-child-process-kill.js:71:10)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)
- `test/parallel/test-child-process-no-deprecation.js` — pass
- `test/parallel/test-child-process-pipe-dataflow.js` — fail — TypeError: Cannot set property 'readStart' of undefined
    at :anonymous (test-child-process-pipe-dataflow.js:43:3)
    at :program (test-child-process-pipe-dataflow.js:1:1)
- `test/parallel/test-child-process-promisified.js` — fail — AssertionError: The expression evaluated to a falsy value:    assert(promise.child instanceof child_process.ChildProcess)
    at :anonymous (test-child-process-promisified.js:13:3)
    at :program (test-child-process-promisified.js:1:1)
- `test/parallel/test-child-process-recv-handle.js` — fail — error: unexpected argument '--expose-internals' found

  tip: to pass '--expose-internals' as a value, use '-- --expose-internals'

Usage: elide [OPTIONS] [FILE] [-- <SCRIPT_ARGS>...] [COMMAND]

For more information, try '--help'.
TypeError: Cannot read property 'close' of null
    at EventEmitter.<anonymous> (test-child-process-recv-handle.js:46:5)
    at EventEmitter.emit (native)
    at TypeError.get stack (native)
- `test/parallel/test-child-process-reject-null-bytes.js` — fail — AssertionError: Missing expected exception (TypeError).
    at :anonymous (test-child-process-reject-null-bytes.js:130:1)
    at :program (test-child-process-reject-null-bytes.js:1:1)
- `test/parallel/test-child-process-send-after-close.js` — pass
- `test/parallel/test-child-process-send-cb.js` — pass
- `test/parallel/test-child-process-advanced-serialization-largebuffer.js` — error — Node API test timed out
- `test/parallel/test-child-process-send-keep-open.js` — fail — TypeError: This handle type cannot be sent
    at EventEmitter.<anonymous> (test-child-process-send-keep-open.js:35:11)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)
AssertionError: Expected values to be strictly equal:

'' !== 'childparent'

    at process.<anonymous> (test-child-process-send-keep-open.js:15:12)
- `test/parallel/test-child-process-send-returns-boolean.js` — fail — TypeError: This handle type cannot be sent
    at EventEmitter.<anonymous> (test-child-process-send-returns-boolean.js:36:19)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)
- `test/parallel/test-child-process-send-type-error.js` — pass
- `test/parallel/test-child-process-send-utf8.js` — pass
- `test/parallel/test-child-process-set-blocking.js` — pass
- `test/parallel/test-child-process-silent.js` — pass
- `test/parallel/test-child-process-spawn-argv0.js` — fail — AssertionError: Expected values to be strictly equal: + actual - expected  + '/opt/elide/bin/elide' - 'withArgv0'
    at :anonymous (test-child-process-spawn-argv0.js:18:1)
    at :program (test-child-process-spawn-argv0.js:1:1)
- `test/parallel/test-child-process-spawn-controller.js` — fail — Uncaught JSException in event listener: TypeError: Cannot read property 'name' of undefined
Uncaught JSException in event listener: AssertionError: Expected values to be strictly equal:
+ actual - expected

+ undefined
- 'boom'

TypeError: Cannot read property 'name' of undefined
    at EventEmitter.<anonymous> (test-child-process-spawn-controller.js:103:24)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)
    at TypeError.get stack (native)
AssertionError: Expected values to be strictly equal:
+ actual - expected

+ undefined
- 'boom'

    at EventEmitter.<anonymous> (test-child-process-spawn-controller.js:120:12)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)
- `test/parallel/test-child-process-spawn-error.js` — pass
- `test/parallel/test-child-process-spawn-event.js` — pass
- `test/parallel/test-child-process-spawn-shell.js` — fail — AssertionError: Expected values to be strictly equal:

'' !== 'buzz'

    at EventEmitter.<anonymous> (test-child-process-spawn-shell.js:69:10)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)
- `test/parallel/test-child-process-fork-abort-signal.js` — error — Node API test timed out
- `test/parallel/test-child-process-spawn-typeerror.js` — fail — AssertionError: Missing expected exception (TypeError).
    at :anonymous (test-child-process-spawn-typeerror.js:72:1)
    at :program (test-child-process-spawn-typeerror.js:1:1)
- …and 1933 more

## ❌ Regressions (5)

- `test/parallel/test-dgram-send-empty-array.js` — Mismatched onMessage function calls. Expected exactly 1, actual 2.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at test-dgram-send-empty-array.js:12:29
    at test-dgram-send-empty-array.js:1:1
- `test/parallel/test-http-keep-alive-pipeline-max-requests.js` — Error: write EPIPE
- `test/parallel/test-http-outgoing-writableFinished.js` — AssertionError: Expected values to be strictly equal:

true !== false

    at EventEmitter.<anonymous> (test-http-outgoing-writableFinished.js:31:10)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)
- `test/parallel/test-http-server-write-after-end.js` — AssertionError: function should not have been called at test-http-server-write-after-end.js:11
called with arguments: Error: write after end
    at Immediate.<anonymous> (test-http-server-write-after-end.js:17:9)
    at Immediate._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12) {
  code: 'ERR_STREAM_WRITE_AFTER_END'
}
    at AssertionError.get stack (native)
    at Function.fail (native)
    at Writable.mustNotCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:631:12)
    at Writable.emit (native)
- `test/parallel/test-net-server-close-before-ipc-response.js` — Node API test timed out

## 🟢 New passes (275) — consider advancing the baseline

- `test/parallel/test-assert-partial-deep-equal.js`
- `test/parallel/test-assert-typedarray-deepequal.js`
- `test/parallel/test-async-local-storage-run-scope.js`
- `test/parallel/test-buffer-bytelength.js`
- `test/parallel/test-buffer-compare.js`
- `test/parallel/test-buffer-from.js`
- `test/parallel/test-buffer-isascii.js`
- `test/parallel/test-buffer-isutf8.js`
- `test/parallel/test-buffer-new.js`
- `test/parallel/test-buffer-of-no-deprecation.js`
- `test/parallel/test-buffer-over-max-length.js`
- `test/parallel/test-buffer-sharedarraybuffer.js`
- `test/parallel/test-buffer-slow.js`
- `test/parallel/test-buffer-writeuint.js`
- `test/parallel/test-child-process-default-options.js`
- `test/parallel/test-child-process-double-pipe.js`
- `test/parallel/test-child-process-env.js`
- `test/parallel/test-child-process-exec-env.js`
- `test/parallel/test-child-process-fork-ref2.js`
- `test/parallel/test-child-process-fork.js`
- `test/parallel/test-child-process-no-deprecation.js`
- `test/parallel/test-child-process-spawnsync-validation-errors.js`
- `test/parallel/test-child-process-stdin.js`
- `test/parallel/test-child-process-stdio-big-write-end.js`
- `test/parallel/test-child-process-stdio.js`
- `test/parallel/test-console-clear.js`
- `test/parallel/test-diagnostics-channel-bounded-channel-run-transform-error.js`
- `test/parallel/test-diagnostics-channel-bounded-channel-run.js`
- `test/parallel/test-diagnostics-channel-run-stores-scope-transform-error.js`
- `test/parallel/test-diagnostics-channel-run-stores-scope.js`
- `test/parallel/test-diagnostics-channel-tracing-channel-args-types.js`
- `test/parallel/test-diagnostics-channel-tracing-channel-callback.js`
- `test/parallel/test-diagnostics-channel-tracing-channel-sync-early-exit.js`
- `test/parallel/test-dgram-bytes-length.js`
- `test/parallel/test-dgram-connect-send-callback-buffer-length.js`
- `test/parallel/test-dgram-connect-send-callback-buffer.js`
- `test/parallel/test-dgram-connect-send-callback-multi-buffer.js`
- `test/parallel/test-dgram-connect-send-multi-buffer-copy.js`
- `test/parallel/test-dgram-send-callback-buffer-empty-address.js`
- `test/parallel/test-dgram-send-callback-buffer-length-empty-address.js`
- `test/parallel/test-dgram-send-callback-buffer-length.js`
- `test/parallel/test-dgram-send-callback-buffer.js`
- `test/parallel/test-dgram-send-callback-multi-buffer-empty-address.js`
- `test/parallel/test-dgram-send-callback-multi-buffer.js`
- `test/parallel/test-dgram-send-multi-buffer-copy.js`
- `test/parallel/test-dgram-sendto.js`
- `test/parallel/test-dns-perf_hooks.js`
- `test/parallel/test-domain-add-remove.js`
- `test/parallel/test-domain-async-resource-domain-removed.js`
- `test/parallel/test-domain-bind-timeout.js`
- `test/parallel/test-domain-ee-implicit.js`
- `test/parallel/test-domain-enter-exit.js`
- `test/parallel/test-domain-from-timer.js`
- `test/parallel/test-domain-fs-enoent-stream.js`
- `test/parallel/test-domain-implicit-binding.js`
- `test/parallel/test-domain-intercept.js`
- `test/parallel/test-domain-implicit-fs.js`
- `test/parallel/test-domain-load-after-set-uncaught-exception-capture.js`
- `test/parallel/test-domain-nested-throw.js`
- `test/parallel/test-domain-nested.js`
- `test/parallel/test-domain-nexttick.js`
- `test/parallel/test-domain-safe-exit.js`
- `test/parallel/test-domain-set-uncaught-exception-capture-after-load.js`
- `test/parallel/test-domain-stack.js`
- `test/parallel/test-domain-thrown-error-handler-stack.js`
- `test/parallel/test-domain-timer.js`
- `test/parallel/test-domain-timers-uncaught-exception.js`
- `test/parallel/test-domain-timers.js`
- `test/parallel/test-domain-top-level-error-handler-clears-stack.js`
- `test/parallel/test-event-emitter-listeners.js`
- `test/parallel/test-event-emitter-no-error-provided-to-error-event.js`
- `test/parallel/test-event-emitter-once.js`
- `test/parallel/test-events-list.js`
- `test/parallel/test-fs-mkdir-recursive-eaccess.js`
- `test/parallel/test-fs-promises-file-handle-write.js`
- `test/parallel/test-fs-read-stream-patch-open.js`
- `test/parallel/test-fs-statfs.js`
- `test/parallel/test-fs-stream-fs-options.js`
- `test/parallel/test-fs-utimes.js`
- `test/parallel/test-fs-write-file-buffer.js`
- `test/parallel/test-fs-write-file-sync.js`
- `test/parallel/test-fs-write-optional-params.js`
- `test/parallel/test-fs-write-stream-patch-open.js`
- `test/parallel/test-http-agent-close.js`
- `test/parallel/test-http-automatic-headers.js`
- `test/parallel/test-http-client-error-rawbytes.js`
- `test/parallel/test-http-client-read-in-error.js`
- `test/parallel/test-http-client-reject-chunked-with-content-length.js`
- `test/parallel/test-http-client-reject-cr-no-lf.js`
- `test/parallel/test-http-client-request-options.js`
- `test/parallel/test-http-early-hints-invalid-argument.js`
- `test/parallel/test-http-early-hints.js`
- `test/parallel/test-http-head-throw-on-response-body-write.js`
- `test/parallel/test-http-header-badrequest.js`
- `test/parallel/test-http-host-header-ipv6-fail.js`
- `test/parallel/test-http-incoming-message-connection-setter.js`
- `test/parallel/test-http-incoming-message-options.js`
- `test/parallel/test-http-information-processing.js`
- `test/parallel/test-http-invalid-te.js`
- `test/parallel/test-http-invalidheaderfield.js`
- `test/parallel/test-http-keep-alive-drop-requests.js`
- `test/parallel/test-http-max-headers-count.js`
- `test/parallel/test-http-missing-header-separator-cr.js`
- `test/parallel/test-http-missing-header-separator-lf.js`
- `test/parallel/test-http-outgoing-end-multiple.js`
- `test/parallel/test-http-outgoing-message-write-callback.js`
- `test/parallel/test-http-outgoing-settimeout.js`
- `test/parallel/test-http-outgoing-message-capture-rejection.js`
- `test/parallel/test-http-pipeline-socket-parser-typeerror.js`
- `test/parallel/test-http-rawheaders-limit.js`
- `test/parallel/test-http-request-join-authorization-headers.js`
- `test/parallel/test-http-res-write-after-end.js`
- `test/parallel/test-http-response-close.js`
- `test/parallel/test-http-server-client-error.js`
- `test/parallel/test-http-server-delete-parser.js`
- `test/parallel/test-http-server-headers-null-proto.js`
- `test/parallel/test-http-server-reject-chunked-with-content-length.js`
- `test/parallel/test-http-server-reject-cr-no-lf.js`
- `test/parallel/test-http-set-cookies.js`
- `test/parallel/test-http-socket-error-listeners.js`
- `test/parallel/test-http-url.parse-auth.js`
- `test/parallel/test-http-write-head-2.js`
- `test/parallel/test-http-write-head-after-set-header.js`
- `test/parallel/test-http-zero-length-write.js`
- `test/parallel/test-module-create-require.js`
- `test/parallel/test-module-isBuiltin.js`
- `test/parallel/test-module-nodemodulepaths.js`
- `test/parallel/test-module-relative-lookup.js`
- `test/parallel/test-require-nul.js`
- `test/parallel/test-net-autoselectfamily-commandline-option.js`
- `test/parallel/test-net-better-error-messages-listen-path.js`
- `test/parallel/test-net-better-error-messages-listen.js`
- `test/parallel/test-net-better-error-messages-path.js`
- `test/parallel/test-net-buffersize.js`
- `test/parallel/test-net-connect-reset-until-connected.js`
- `test/parallel/test-net-connect-options-port.js`
- `test/parallel/test-net-listen-close-server.js`
- `test/parallel/test-net-listen-close-server-callback-is-not-function.js`
- `test/parallel/test-net-listen-invalid-port.js`
- `test/parallel/test-net-server-close-before-calling-lookup-callback.js`
- `test/parallel/test-net-server-options.js`
- `test/parallel/test-net-socket-connecting.js`
- `test/parallel/test-net-socket-constructor.js`
- `test/parallel/test-os-constants-signals.js`
- `test/parallel/test-path-parse-format.js`
- `test/parallel/test-perf-hooks-timerify-error.js`
- `test/parallel/test-perf-hooks-timerify-invalid-args.js`
- `test/parallel/test-perf-hooks-timerify-return-value.js`
- `test/parallel/test-performance-function-async.js`
- `test/parallel/test-net-throttle.js`
- `test/parallel/test-memory-usage-emfile.js`
- `test/parallel/test-process-available-memory.js`
- `test/parallel/test-process-constrained-memory.js`
- `test/parallel/test-process-features.js`
- `test/parallel/test-process-getactiveresources-track-interval-lifetime.js`
- `test/parallel/test-process-getactiveresources-track-multiple-timers.js`
- `test/parallel/test-process-getactiveresources.js`
- `test/parallel/test-process-no-deprecation.js`
- `test/parallel/test-process-release.js`
- `test/parallel/test-process-uptime.js`
- `test/parallel/test-readline-interface-escapecodetimeout.js`
- `test/parallel/test-readline-line-separators.js`
- `test/parallel/test-readline-position.js`
- `test/parallel/test-stream-catch-rejections.js`
- `test/parallel/test-stream-drop-take.js`
- `test/parallel/test-stream-duplexpair.js`
- `test/parallel/test-stream-iter-broadcast-backpressure.js`
- `test/parallel/test-stream-iter-broadcast-coverage.js`
- `test/parallel/test-stream-iter-broadcast-basic.js`
- `test/parallel/test-stream-iter-consumers-bytes.js`
- `test/parallel/test-stream-iter-consumers-tap.js`
- `test/parallel/test-stream-iter-consumers-merge.js`
- `test/parallel/test-stream-iter-duplex.js`
- `test/parallel/test-stream-iter-from-writable-cache-options.js`
- `test/parallel/test-stream-iter-pipeto-edge.js`
- `test/parallel/test-stream-iter-pipeto-writev.js`
- `test/parallel/test-stream-iter-pipeto.js`
- `test/parallel/test-stream-iter-pull-async.js`
- `test/parallel/test-stream-iter-pull-sync.js`
- `test/parallel/test-stream-iter-push-backpressure.js`
- `test/parallel/test-stream-iter-push-basic.js`
- `test/parallel/test-stream-iter-push-writer.js`
- `test/parallel/test-stream-iter-pipeto-signal.js`
- `test/parallel/test-stream-iter-share-async.js`
- `test/parallel/test-stream-iter-share-sync.js`
- `test/parallel/test-stream-iter-to-readable.js`
- `test/parallel/test-stream-iter-transform-compat.js`
- `test/parallel/test-stream-iter-transform-coverage.js`
- `test/parallel/test-stream-iter-validation.js`
- `test/parallel/test-stream-iter-writable-from.js`
- `test/parallel/test-stream-iter-transform-roundtrip.js`
- `test/parallel/test-stream-iter-transform-sync.js`
- `test/parallel/test-stream-pipe-without-listenerCount.js`
- `test/parallel/test-stream-readable-default-encoding.js`
- `test/parallel/test-stream-readable-destroy.js`
- `test/parallel/test-stream-readable-dispose.js`
- `test/parallel/test-stream-readable-emittedReadable.js`
- `test/parallel/test-stream-readable-from-web-termination.js`
- `test/parallel/test-stream-readable-strategy-option.js`
- `test/parallel/test-stream-readable-to-web-termination.js`
- …and 75 more
