# Impact-ordered failures

## By root-cause signature

### 84 × `No global <str> binding Expected SameValue(«true»,`

distinct messages:
- `No global 'arguments' binding Expected SameValue(«true»,`
example test: `test/language/eval-code/direct/func-decl-a-following-parameter-is-named-arguments-declare-arguments-and-assign.js default`

### 36 × `Expected no error, got TypeError: (intermediate value).allKeyed is not a function`

distinct messages:
- `Expected no error, got TypeError: (intermediate value).allKeyed is not a function`
example test: `test/built-ins/Promise/allKeyed/arg-is-function.js default`

### 34 × `Expected no error, got RangeError: Maximum call stack size exceeded`

distinct messages:
- `Expected no error, got RangeError: Maximum call stack size exceeded`
example test: `test/language/expressions/tco-pos.js strict mode`

### 34 × `Expected no error, got TypeError: (intermediate value).allSettledKeyed is not a function`

distinct messages:
- `Expected no error, got TypeError: (intermediate value).allSettledKeyed is not a function`
example test: `test/built-ins/Promise/allSettledKeyed/arg-is-function.js default`

### 30 × `Uncaught (in promise) {message: <str>}`

distinct messages:
- `Uncaught (in promise) {message: ""}`
example test: `test/built-ins/Promise/all/capability-resolve-throws-no-close.js default`

### 22 × `Expected no error, got TypeError: Cannot read property <str> of undefined`

distinct messages:
- `Expected no error, got TypeError: Cannot read property 'constructor' of undefined`
- `Expected no error, got TypeError: Cannot read property 'next' of undefined`
- `Expected no error, got TypeError: Cannot read property 'return' of undefined`
- `Expected no error, got TypeError: Cannot read property 'throw' of undefined`
- `Expected no error, got TypeError: Cannot read property 'call' of undefined`
example test: `test/built-ins/GeneratorPrototype/constructor.js default`

### 22 × `Expected no error, got TypeError: JSON packages not supported.`

distinct messages:
- `Expected no error, got TypeError: JSON packages not supported.`
example test: `test/language/import/import-attributes/json-extensibility-array.js default`

### 18 × `Expected no error, got TypeError: Cannot convert undefined or null to object: undefined`

distinct messages:
- `Expected no error, got TypeError: Cannot convert undefined or null to object: undefined`
example test: `test/built-ins/GeneratorPrototype/next/property-descriptor.js strict mode`

### 18 × `Expected no error, got TypeError: Constructor EventTarget requires <str>`

distinct messages:
- `Expected no error, got TypeError: Constructor EventTarget requires 'new'`
example test: `test/built-ins/GeneratorFunction/has-instance.js default`

### 18 × `Expected no error, got TypeError: Module not found: <str>`

distinct messages:
- `Expected no error, got TypeError: Module not found: './text-empty_FIXTURE'`
- `Expected no error, got TypeError: Module not found: './bytes-from-empty_FIXTURE.bin'`
- `Expected no error, got TypeError: Module not found: './text-string_FIXTURE'`
- `Expected no error, got TypeError: Module not found: './bytes-from-txt_FIXTURE.txt'`
- `Expected no error, got TypeError: Module not found: './bytes-from-png_FIXTURE.png'`
example test: `test/language/import/import-attributes/text-empty.js default`

### 18 × `Expected SameValue(«<str>», «<str>») to be true`

distinct messages:
- `Expected SameValue(«"undefined"», «"function"») to be true`
- `Expected SameValue(«"123579468"», «"123456789"») to be true`
example test: `test/built-ins/AbstractModuleSource/name.js default`

### 12 × `Expected no error, got ReferenceError: results is not defined`

distinct messages:
- `Expected no error, got ReferenceError: results is not defined`
example test: `test/language/module-code/instn-iee-bndng-cls.js default`

### 8 × `binding is created but not initialized Expected a`

distinct messages:
- `binding is created but not initialized Expected a`
example test: `test/language/module-code/instn-named-bndng-const.js strict mode`

### 8 × `Expected a TypeError to be thrown but no exception was thrown`

distinct messages:
- `Expected a TypeError to be thrown but no exception was thrown`
example test: `test/built-ins/GeneratorFunction/instance-restricted-properties.js default`

### 6 × `Expected true but got false`

distinct messages:
- `Expected true but got false`
example test: `test/built-ins/Promise/allKeyed/extensible.js default`

### 4 × `binding is initialized to <str> prior to module`

distinct messages:
- `binding is initialized to ʼundefinedʼ prior to module`
example test: `test/language/module-code/instn-named-bndng-trlng-comma.js strict mode`

### 4 × `brandNew descriptor should not be configurable`

distinct messages:
- `brandNew descriptor should not be configurable`
example test: `test/language/global-code/script-decl-func.js default`

### 4 × `executor not called at all Expected SameValue(«<str>», «<str>») to`

distinct messages:
- `executor not called at all Expected SameValue(«""», «"a"») to`
example test: `test/built-ins/Promise/allKeyed/capability-executor-not-callable.js default`

### 4 × `Expected a ReferenceError to be thrown but no exception was`

distinct messages:
- `Expected a ReferenceError to be thrown but no exception was`
example test: `test/language/module-code/instn-named-bndng-dflt-star.js default`

### 4 × `Expected a Test262Error but got a TypeError`

distinct messages:
- `Expected a Test262Error but got a TypeError`
example test: `test/built-ins/Promise/allKeyed/ctx-ctor-throws.js default`

### 4 × `Expected no error, got SyntaxError: <loc> await is only valid in async`

distinct messages:
- `Expected no error, got SyntaxError: async-module-tla_FIXTURE.js:5:0 await is only valid in async`
- `Expected no error, got SyntaxError: dfs-invariant-async_FIXTURE.js:3:0 await is only valid in async`
example test: `test/language/module-code/top-level-await/async-module-does-not-block-sibling-modules.js strict mode`

### 4 × `Expected no error, got TypeError: Object is not disposable`

distinct messages:
- `Expected no error, got TypeError: Object is not disposable`
example test: `test/language/statements/await-using/fn-name-gen.js default`

### 4 × `Expected SameValue(«[object Generator]», «undefined») to be`

distinct messages:
- `Expected SameValue(«[object Generator]», «undefined») to be`
example test: `test/language/expressions/generators/default-proto.js default`

### 4 × `Expected SameValue(«[object Object]», «function () { [native`

distinct messages:
- `Expected SameValue(«[object Object]», «function () { [native`
example test: `test/language/expressions/generators/prototype-relation-to-function.js default`

### 4 × `Expected test to throw error of type SyntaxError, got TypeError: JSON packages not supported.`

distinct messages:
- `Expected test to throw error of type SyntaxError, got TypeError: JSON packages not supported.`
example test: `test/language/import/import-attributes/json-invalid.js default`

### 4 × `isConstructor invoked with a non-function value`

distinct messages:
- `isConstructor invoked with a non-function value`
example test: `test/built-ins/Promise/allKeyed/not-a-constructor.js default`

### 4 × `Test262Error: BigInt Expected a TypeError to be thrown asynchronously but the function threw synchronously`

distinct messages:
- `Test262Error: BigInt Expected a TypeError to be thrown asynchronously but the function threw synchronously`
example test: `test/built-ins/Promise/allKeyed/arg-not-object-reject-bigint.js default`

### 4 × `Test262Error: Expected a TypeError to be thrown asynchronously but the function threw synchronously`

distinct messages:
- `Test262Error: Expected a TypeError to be thrown asynchronously but the function threw synchronously`
example test: `test/built-ins/Promise/allKeyed/resolve-not-callable-reject-with-typeerror.js strict mode`

### 4 × `Test262Error: undefined Expected a TypeError to be thrown asynchronously but the function threw synchronously`

distinct messages:
- `Test262Error: undefined Expected a TypeError to be thrown asynchronously but the function threw synchronously`
example test: `test/built-ins/Promise/allKeyed/arg-not-object-reject.js default`

### 4 × `Uncaught (in promise) AggregateError`

distinct messages:
- `Uncaught (in promise) AggregateError`
example test: `test/built-ins/Promise/any/ctx-ctor.js default`

### 4 × `Uncaught (in promise) undefined`

distinct messages:
- `Uncaught (in promise) undefined`
example test: `test/built-ins/Promise/reject/ctx-ctor.js default`

### 3 × `Expected a SyntaxError to be thrown but no exception was thrown`

distinct messages:
- `Expected a SyntaxError to be thrown but no exception was thrown`
example test: `test/language/global-code/script-decl-lex-restricted-global.js strict mode`

### 3 × `Expected no error, got ReferenceError: test262let is not defined`

distinct messages:
- `Expected no error, got ReferenceError: test262let is not defined`
example test: `test/language/global-code/script-decl-lex-deletion.js default`

### 2 × `<str> binding Expected a SyntaxError to be thrown but no`

distinct messages:
- `ʼletʼ binding Expected a SyntaxError to be thrown but no`
example test: `test/language/global-code/script-decl-lex-lex.js default`

### 2 × `<str> on <str> binding Expected a SyntaxError to be thrown but`

distinct messages:
- `ʼvarʼ on ʼletʼ binding Expected a SyntaxError to be thrown but`
example test: `test/language/global-code/script-decl-var-collision.js default`

### 2 × `allKeyed should be an own property`

distinct messages:
- `allKeyed should be an own property`
example test: `test/built-ins/Promise/allKeyed/prop-desc.js strict mode`

### 2 × `allSettledKeyed should be an own property`

distinct messages:
- `allSettledKeyed should be an own property`
example test: `test/built-ins/Promise/allSettledKeyed/prop-desc.js default`

### 2 × `Binding is created but not initialized. Expected a`

distinct messages:
- `Binding is created but not initialized. Expected a`
example test: `test/language/module-code/instn-named-bndng-dflt-cls.js strict mode`

### 2 × `constructor descriptor should not be writable`

distinct messages:
- `constructor descriptor should not be writable`
example test: `test/built-ins/GeneratorFunction/prototype/constructor.js default`

### 2 × `EventTarget Call argument Expected a SyntaxError but got a`

distinct messages:
- `EventTarget Call argument Expected a SyntaxError but got a`
example test: `test/language/comments/hashbang/function-constructor.js default`

### 2 × `Expected a TypeError but got a Error`

distinct messages:
- `Expected a TypeError but got a Error`
example test: `test/built-ins/DataView/custom-proto-access-detaches-buffer.js default`

### 2 × `Expected a TypeError but got a Error (Testing with Float64Array`

distinct messages:
- `Expected a TypeError but got a Error (Testing with Float64Array`
example test: `test/built-ins/ArrayIteratorPrototype/next/detach-typedarray-in-progress.js strict mode`

### 2 × `Expected no error, got Error: $262.createRealm not supported by the Elide host`

distinct messages:
- `Expected no error, got Error: $262.createRealm not supported by the Elide host`
example test: `test/harness/asyncHelpers-throwsAsync-same-realm.js strict mode`

### 2 × `Expected no error, got ReferenceError: assert is not defined`

distinct messages:
- `Expected no error, got ReferenceError: assert is not defined`
example test: `test/language/module-code/ambiguous-export-bindings/namespace-unambiguous-if-export-star-as-from-and-import-star-as-and-export.js default`

### 2 × `Expected no error, got SyntaxError: <loc> await is only valid in async functions and`

distinct messages:
- `Expected no error, got SyntaxError: tla_FIXTURE.js:4:0 await is only valid in async functions and`
example test: `test/language/module-code/top-level-await/module-graphs-does-not-hang.js default`

### 2 × `Expected no error, got SyntaxError: <loc> await is only valid in async functions and the top level bodies of modules`

distinct messages:
- `Expected no error, got SyntaxError: unobservable-global-async-evaluation-count-reset-c_FIXTURE.js:4:0 await is only valid in async functions and the top level bodies of modules`
example test: `test/language/module-code/top-level-await/unobservable-global-async-evaluation-count-reset.js default`

### 2 × `Expected no error, got SyntaxError: <loc> Expected ; but found { invalid {`

distinct messages:
- `Expected no error, got SyntaxError: text-javascript_FIXTURE.js:4:8 Expected ; but found { invalid {`
example test: `test/language/import/import-attributes/text-javascript.js default`

### 2 × `Expected no error, got SyntaxError: The requested module <str> does not provide an export`

distinct messages:
- `Expected no error, got SyntaxError: The requested module './text-self.js' does not provide an export`
example test: `test/language/import/import-attributes/text-self.js default`

### 2 × `Expected no error, got TypeError: g is not a function`

distinct messages:
- `Expected no error, got TypeError: g is not a function`
example test: `test/built-ins/GeneratorFunction/invoked-as-constructor-no-arguments.js strict mode`

### 2 × `Expected SameValue(«<str>», «<str>») to`

distinct messages:
- `Expected SameValue(«"EventTarget"», «"GeneratorFunction"») to`
example test: `test/built-ins/GeneratorFunction/prototype/Symbol.toStringTag.js default`

### 2 × `Expected SameValue(«undefined», «[object Generator]») to be`

distinct messages:
- `Expected SameValue(«undefined», «[object Generator]») to be`
example test: `test/built-ins/GeneratorFunction/prototype/prototype.js default`

### 2 × `Expected test to throw error of type SyntaxError, but did not throw error`

distinct messages:
- `Expected test to throw error of type SyntaxError, but did not throw error`
example test: `test/language/module-code/instn-named-err-not-found-dflt.js default`

### 2 × `global property initially unset Expected SameValue(«<n>»,`

distinct messages:
- `global property initially unset Expected SameValue(«262»,`
example test: `test/language/module-code/eval-self-once.js default`

### 2 × `length descriptor value should be <n>; length value should be <n>`

distinct messages:
- `length descriptor value should be 1; length value should be 1`
example test: `test/built-ins/GeneratorFunction/length.js default`

### 2 × `name descriptor value should be [Symbol.asyncIterator]; name`

distinct messages:
- `name descriptor value should be [Symbol.asyncIterator]; name`
example test: `test/built-ins/AsyncIteratorPrototype/Symbol.asyncIterator/name.js default`

### 2 × `name descriptor value should be GeneratorFunction; name value`

distinct messages:
- `name descriptor value should be GeneratorFunction; name value`
example test: `test/built-ins/GeneratorFunction/name.js default`

### 2 × `Script Error java.lang.IllegalStateException: Recursive update In file <loc> Stack Trace [js] :anonymous <unknown> · elide run <loc> Advice An error occurred wh`

distinct messages:
- `Script Error
java.lang.IllegalStateException: Recursive update
In file ../../../tmp/loNk4H2UkAtPGSQt0Uua/eval-self-once-script.js:1779:1
Stack Trace
[js] :anonymous                                             <unknown>
· elide run /tmp/loNk4H2UkAtPGSQt0Uua/eval-self-once-script.js
Advice
An error oc`
- `Script Error
java.lang.IllegalStateException: Recursive update
In file ../../../tmp/z2t4O6TkNfABviDZKJNB/eval-self-once-script.js:1779:1
Stack Trace
[js] :anonymous                                             <unknown>
· elide run /tmp/z2t4O6TkNfABviDZKJNB/eval-self-once-script.js
Advice
An error oc`
example test: `test/language/expressions/dynamic-import/eval-self-once-script.js default`

### 2 × `self is not initialized yet Expected a ReferenceError to be`

distinct messages:
- `self is not initialized yet Expected a ReferenceError to be`
example test: `test/language/module-code/top-level-await/module-self-import-async-resolution-ticks.js default`

### 2 × `Test timed out`

distinct messages:
- `Test timed out`
example test: `test/built-ins/Object/defineProperty/15.2.3.6-4-116.js default`

### 2 × `Test262Error: Expected SameValue(«<str>», «<str>») to be true`

distinct messages:
- `Test262Error: Expected SameValue(«"B"», «"A"») to be true`
example test: `test/language/module-code/verify-dfs.js default`

### 2 × `Test262Error: f Expected SameValue(«null», «<str>») to be true`

distinct messages:
- `Test262Error: f Expected SameValue(«null», «"foo"») to be true`
example test: `test/language/expressions/dynamic-import/for-await-resolution-and-error-agen-yield.js strict mode`

### 2 × `Test262Error: The import should reject (second import) Expected a Error to be thrown asynchronously but no exception was thrown at all`

distinct messages:
- `Test262Error: The import should reject (second import) Expected a Error to be thrown asynchronously but no exception was thrown at all`
example test: `test/language/expressions/dynamic-import/import-errored-module.js default`

### 2 × `Test262Error: updated value, direct binding Expected SameValue(«<n>», «<n>») to be true`

distinct messages:
- `Test262Error: updated value, direct binding Expected SameValue(«0», «1») to be true`
example test: `test/language/expressions/dynamic-import/imported-self-update.js default`

### 2 × `Uncaught (in promise) <n>`

distinct messages:
- `Uncaught (in promise) 1`
example test: `test/built-ins/Promise/all/invoke-resolve-get-once-multiple-calls.js default`

### 2 × `Uncaught (in promise) Error`

distinct messages:
- `Uncaught (in promise) Error`
example test: `test/built-ins/Promise/allSettled/invoke-resolve-error-close.js strict mode`

### 2 × `Uncaught (in promise) ReferenceError: err is not defined`

distinct messages:
- `Uncaught (in promise) ReferenceError: err is not defined`
example test: `test/built-ins/Promise/race/invoke-resolve-error-close.js strict mode`

### 2 × `Uncaught (in promise) TypeError: cannot create promise: executor not callable`

distinct messages:
- `Uncaught (in promise) TypeError: cannot create promise: executor not callable`
example test: `test/language/statements/async-function/evaluation-body.js default`

### 2 × `Uncaught (in promise) TypeError: Module not found: <str>`

distinct messages:
- `Uncaught (in promise) TypeError: Module not found: './dynamic-import-module_FIXTURE.js'`
example test: `test/language/expressions/dynamic-import/returns-promise.js default`

### 2 × `Uncaught (in promise) TypeError: null is not an Object`

distinct messages:
- `Uncaught (in promise) TypeError: null is not an Object`
example test: `test/built-ins/Promise/resolve/arg-uniq-ctor.js strict mode`

### 2 × `variable Expected a SyntaxError to be thrown but no exception`

distinct messages:
- `variable Expected a SyntaxError to be thrown but no exception`
example test: `test/language/global-code/script-decl-lex-var.js default`

### 2 × `writable, non-enumerable data property Expected a TypeError to`

distinct messages:
- `writable, non-enumerable data property Expected a TypeError to`
example test: `test/language/global-code/script-decl-func-err-non-configurable.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file ../../../tmp/5KlzlRcfjFQsnilFAVvT/f-<n>-<n>-1it6719.zxlgh.j (source excerpt suppressed) Stack Tr`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/5KlzlRcfjFQsnilFAVvT/f-1783053124856-24-1it6719.zxlgh.j
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053124856-24-1it6719.zx
· elide run /tmp/5KlzlRcfjFQsnilFAVvT/f-17830
Advice
A`
example test: `test/built-ins/Proxy/getOwnPropertyDescriptor/result-type-is-not-object-nor-undefined-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file ../../../tmp/5KlzlRcfjFQsnilFAVvT/f-<n>-<n>-1nqf7qb.scurf.j (source excerpt suppressed) Stack Tr`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/5KlzlRcfjFQsnilFAVvT/f-1783053122593-24-1nqf7qb.scurf.j
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053122593-24-1nqf7qb.sc
· elide run /tmp/5KlzlRcfjFQsnilFAVvT/f-17830
Advice
A`
example test: `test/built-ins/Proxy/construct/return-not-object-throws-string-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file ../../../tmp/5KlzlRcfjFQsnilFAVvT/f-<n>-<n>-1uyghyw.oml9k.j (source excerpt suppressed) Stack Tr`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/5KlzlRcfjFQsnilFAVvT/f-1783053173521-24-1uyghyw.oml9k.j
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053173521-24-1uyghyw.om
· elide run /tmp/5KlzlRcfjFQsnilFAVvT/f-17830
Advice
A`
example test: `test/language/expressions/class/private-setter-brand-check-multiple-evaluations-of-class-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file ../../../tmp/86A2saDwubshge6uCobt/f-<n>-<n>-10dd1e.4gumbi.j (source excerpt suppressed) Stack Tr`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/86A2saDwubshge6uCobt/f-1783053147236-24-10dd1e.4gumbi.j
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053147236-24-10dd1e.4gu
· elide run /tmp/86A2saDwubshge6uCobt/f-17830
Advice
A`
example test: `test/built-ins/Symbol/hasInstance/cross-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file ../../../tmp/86A2saDwubshge6uCobt/f-<n>-<n>-1v84cwp.2pgmh.j (source excerpt suppressed) Stack Tr`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/86A2saDwubshge6uCobt/f-1783052848451-24-1v84cwp.2pgmh.j
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783052848451-24-1v84cwp.2p
· elide run /tmp/86A2saDwubshge6uCobt/f-17830
Advice
A`
example test: `test/built-ins/Boolean/proto-from-ctor-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file ../../../tmp/86A2saDwubshge6uCobt/f-<n>-<n>-1vsrir4.k9d4j.j (source excerpt suppressed) Stack Tr`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/86A2saDwubshge6uCobt/f-1783052843770-24-1vsrir4.k9d4j.j
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783052843770-24-1vsrir4.k9
· elide run /tmp/86A2saDwubshge6uCobt/f-17830
Advice
A`
example test: `test/built-ins/Array/proto-from-ctor-realm-one.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file ../../../tmp/BBNpRXko784UqD29wHHc/f-<n>-<n>-15g8tkk.6rnek.j (source excerpt suppressed) Stack Tr`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/BBNpRXko784UqD29wHHc/f-1783053010610-24-15g8tkk.6rnek.j
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053010610-24-15g8tkk.6r
· elide run /tmp/BBNpRXko784UqD29wHHc/f-17830
Advice
A`
example test: `test/built-ins/Error/isError/errors-other-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file ../../../tmp/BBNpRXko784UqD29wHHc/f-<n>-<n>-1g1mtyu.t05dh.j (source excerpt suppressed) Stack Tr`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/BBNpRXko784UqD29wHHc/f-1783052888878-24-1g1mtyu.t05dh.j
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783052888878-24-1g1mtyu.t0
· elide run /tmp/BBNpRXko784UqD29wHHc/f-17830
Advice
A`
example test: `test/built-ins/WeakMap/proto-from-ctor-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file ../../../tmp/BBNpRXko784UqD29wHHc/f-<n>-<n>-1mcsidq.duqjf.j (source excerpt suppressed) Stack Tr`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/BBNpRXko784UqD29wHHc/f-1783052845311-24-1mcsidq.duqjf.j
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783052845311-24-1mcsidq.du
· elide run /tmp/BBNpRXko784UqD29wHHc/f-17830
Advice
A`
example test: `test/built-ins/AsyncDisposableStack/proto-from-ctor-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file ../../../tmp/BBNpRXko784UqD29wHHc/f-<n>-<n>-1u0m0i.h6oaqg.j (source excerpt suppressed) Stack Tr`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/BBNpRXko784UqD29wHHc/f-1783052846242-24-1u0m0i.h6oaqg.j
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783052846242-24-1u0m0i.h6o
· elide run /tmp/BBNpRXko784UqD29wHHc/f-17830
Advice
A`
example test: `test/built-ins/AsyncFunction/proto-from-ctor-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file ../../../tmp/BEABSxBrwrGPGjk8eJt8/f-<n>-<n>-197zajg.8ki0k.j (source excerpt suppressed) Stack Tr`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/BEABSxBrwrGPGjk8eJt8/f-1783052862664-24-197zajg.8ki0k.j
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783052862664-24-197zajg.8k
· elide run /tmp/BEABSxBrwrGPGjk8eJt8/f-17830
Advice
A`
example test: `test/built-ins/Number/proto-from-ctor-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file ../../../tmp/BEABSxBrwrGPGjk8eJt8/f-<n>-<n>-1iz7hwl.l0zii.j (source excerpt suppressed) Stack Tr`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/BEABSxBrwrGPGjk8eJt8/f-1783053031063-24-1iz7hwl.l0zii.j
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053031063-24-1iz7hwl.l0
· elide run /tmp/BEABSxBrwrGPGjk8eJt8/f-17830
Advice
A`
example test: `test/built-ins/NativeErrors/URIError/proto-from-ctor-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file ../../../tmp/jbgzMwVp5oP2hxgP1Yd9/f-<n>-<n>-1ak3yaj.zl4dg.j (source excerpt suppressed) Stack Tr`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/jbgzMwVp5oP2hxgP1Yd9/f-1783052889183-24-1ak3yaj.zl4dg.j
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783052889183-24-1ak3yaj.zl
· elide run /tmp/jbgzMwVp5oP2hxgP1Yd9/f-17830
Advice
A`
example test: `test/built-ins/WeakRef/proto-from-ctor-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file ../../../tmp/jbgzMwVp5oP2hxgP1Yd9/f-<n>-<n>-1ua3075.muoqk.j (source excerpt suppressed) Stack Tr`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/jbgzMwVp5oP2hxgP1Yd9/f-1783052857997-24-1ua3075.muoqk.j
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783052857997-24-1ua3075.mu
· elide run /tmp/jbgzMwVp5oP2hxgP1Yd9/f-17830
Advice
A`
example test: `test/built-ins/Function/call-bind-this-realm-undef.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file ../../../tmp/jLjU4khk1SBc5rWbTAAr/f-<n>-<n>-1hscyfd.lkajj.j (source excerpt suppressed) Stack Tr`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/jLjU4khk1SBc5rWbTAAr/f-1783052846237-24-1hscyfd.lkajj.j
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783052846237-24-1hscyfd.lk
· elide run /tmp/jLjU4khk1SBc5rWbTAAr/f-17830
Advice
A`
example test: `test/built-ins/AsyncFunction/proto-from-ctor-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file ../../../tmp/jLjU4khk1SBc5rWbTAAr/f-<n>-<n>-1jw5c30.uee4i.j (source excerpt suppressed) Stack Tr`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/jLjU4khk1SBc5rWbTAAr/f-1783052843793-24-1jw5c30.uee4i.j
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783052843793-24-1jw5c30.ue
· elide run /tmp/jLjU4khk1SBc5rWbTAAr/f-17830
Advice
A`
example test: `test/built-ins/Array/proto-from-ctor-realm-two.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file ../../../tmp/jLjU4khk1SBc5rWbTAAr/f-<n>-<n>-1uduy2w.zu8fl.j (source excerpt suppressed) Stack Tr`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/jLjU4khk1SBc5rWbTAAr/f-1783053127220-24-1uduy2w.zu8fl.j
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053127220-24-1uduy2w.zu
· elide run /tmp/jLjU4khk1SBc5rWbTAAr/f-17830
Advice
A`
example test: `test/built-ins/Proxy/ownKeys/return-not-list-object-throws-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file ../../../tmp/jLjU4khk1SBc5rWbTAAr/f-<n>-<n>-1xdwj2v.b9qjh.j (source excerpt suppressed) Stack Tr`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/jLjU4khk1SBc5rWbTAAr/f-1783053148199-24-1xdwj2v.b9qjh.j
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053148199-24-1xdwj2v.b9
· elide run /tmp/jLjU4khk1SBc5rWbTAAr/f-17830
Advice
A`
example test: `test/built-ins/Symbol/unscopables/cross-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file ../../../tmp/jYsj7Mn1vwfAMdjEQ9Ys/f-<n>-<n>-13r24.qertrsb.j (source excerpt suppressed) Stack Tr`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/jYsj7Mn1vwfAMdjEQ9Ys/f-1783053129767-24-13r24.qertrsb.j
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053129767-24-13r24.qert
· elide run /tmp/jYsj7Mn1vwfAMdjEQ9Ys/f-17830
Advice
A`
example test: `test/built-ins/Proxy/setPrototypeOf/trap-is-not-callable-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file ../../../tmp/jYsj7Mn1vwfAMdjEQ9Ys/f-<n>-<n>-1qbd6z4.hwm9g.j (source excerpt suppressed) Stack Tr`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/jYsj7Mn1vwfAMdjEQ9Ys/f-1783053173519-24-1qbd6z4.hwm9g.j
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053173519-24-1qbd6z4.hw
[js] createAndInstantiateClass             f-178305317`
example test: `test/language/expressions/class/private-setter-brand-check-multiple-evaluations-of-class-realm-function-ctor.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file ../../../tmp/jYsj7Mn1vwfAMdjEQ9Ys/f-<n>-<n>-1utkwap.ip3hh.j (source excerpt suppressed) Stack Tr`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/jYsj7Mn1vwfAMdjEQ9Ys/f-1783052852825-24-1utkwap.ip3hh.j
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783052852825-24-1utkwap.ip
· elide run /tmp/jYsj7Mn1vwfAMdjEQ9Ys/f-17830
Advice
A`
example test: `test/built-ins/Date/proto-from-ctor-realm-one.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file ../../../tmp/jYsj7Mn1vwfAMdjEQ9Ys/f-<n>-<n>-1wg1pa1.y8jyh.j (source excerpt suppressed) Stack Tr`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/jYsj7Mn1vwfAMdjEQ9Ys/f-1783052858150-24-1wg1pa1.y8jyh.j
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783052858150-24-1wg1pa1.y8
· elide run /tmp/jYsj7Mn1vwfAMdjEQ9Ys/f-17830
Advice
A`
example test: `test/built-ins/Function/proto-from-ctor-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file ../../../tmp/lUI3TOaIoCQcA9hy1cdt/f-<n>-<n>-10no4sw.k233i.j (source excerpt suppressed) Stack Tr`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/lUI3TOaIoCQcA9hy1cdt/f-1783053122976-24-10no4sw.k233i.j
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053122976-24-10no4sw.k2
· elide run /tmp/lUI3TOaIoCQcA9hy1cdt/f-17830
Advice
A`
example test: `test/built-ins/Proxy/construct/trap-is-undefined-proto-from-newtarget-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file ../../../tmp/lUI3TOaIoCQcA9hy1cdt/f-<n>-<n>-11v15xe.d8bfg.j (source excerpt suppressed) Stack Tr`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/lUI3TOaIoCQcA9hy1cdt/f-1783053147216-24-11v15xe.d8bfg.j
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053147216-24-11v15xe.d8
· elide run /tmp/lUI3TOaIoCQcA9hy1cdt/f-17830
Advice
A`
example test: `test/built-ins/Symbol/hasInstance/cross-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file ../../../tmp/lUI3TOaIoCQcA9hy1cdt/f-<n>-<n>-14z2dmx.iej4g.j (source excerpt suppressed) Stack Tr`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/lUI3TOaIoCQcA9hy1cdt/f-1783053122467-24-14z2dmx.iej4g.j
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053122467-24-14z2dmx.ie
· elide run /tmp/lUI3TOaIoCQcA9hy1cdt/f-17830
Advice
A`
example test: `test/built-ins/Proxy/construct/return-not-object-throws-null-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file ../../../tmp/lUI3TOaIoCQcA9hy1cdt/f-<n>-<n>-1ebz3nj.p37zh.j (source excerpt suppressed) Stack Tr`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/lUI3TOaIoCQcA9hy1cdt/f-1783053121896-24-1ebz3nj.p37zh.j
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053121896-24-1ebz3nj.p3
· elide run /tmp/lUI3TOaIoCQcA9hy1cdt/f-17830
Advice
A`
example test: `test/built-ins/Proxy/apply/arguments-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file ../../../tmp/lUI3TOaIoCQcA9hy1cdt/f-<n>-<n>-1itmq6a.o20bh.j (source excerpt suppressed) Stack Tr`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/lUI3TOaIoCQcA9hy1cdt/f-1783052858157-24-1itmq6a.o20bh.j
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783052858157-24-1itmq6a.o2
· elide run /tmp/lUI3TOaIoCQcA9hy1cdt/f-17830
Advice
A`
example test: `test/built-ins/Function/proto-from-ctor-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file ../../../tmp/u5t4l1hWe8msCY5yjIPn/f-<n>-<n>-1uj0l7v.aw8sk.j (source excerpt suppressed) Stack Tr`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/u5t4l1hWe8msCY5yjIPn/f-1783053123356-24-1uj0l7v.aw8sk.j
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053123356-24-1uj0l7v.aw
· elide run /tmp/u5t4l1hWe8msCY5yjIPn/f-17830
Advice
A`
example test: `test/built-ins/Proxy/defineProperty/targetdesc-not-compatible-descriptor-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-<n>.fha0 · elide run /t`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/BBNpRXko784UqD29wHHc/f-1783053229026-24-15143.fha06t.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053229026-24-15143.fha0
· elide run /tmp/BBNpRXko784UqD29wHHc/f-17830
Advice
A`
example test: `test/language/types/reference/get-value-prop-base-primitive-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-104mk4u.eg · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/jLjU4khk1SBc5rWbTAAr/f-1783052858546-24-104mk4u.egpj.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783052858546-24-104mk4u.eg
· elide run /tmp/jLjU4khk1SBc5rWbTAAr/f-17830
Advice
A`
example test: `test/built-ins/GeneratorFunction/proto-from-ctor-realm-prototype.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-10k2khf.<n> · elide run`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/z2t4O6TkNfABviDZKJNB/f-1783053030879-24-10k2khf.14g4.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053030879-24-10k2khf.14
· elide run /tmp/z2t4O6TkNfABviDZKJNB/f-17830
Advice
A`
example test: `test/built-ins/NativeErrors/TypeError/proto-from-ctor-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-11dwd32.ut · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/lUI3TOaIoCQcA9hy1cdt/f-1783053127831-24-11dwd32.utdp.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053127831-24-11dwd32.ut
· elide run /tmp/lUI3TOaIoCQcA9hy1cdt/f-17830
Advice
A`
example test: `test/built-ins/Proxy/preventExtensions/trap-is-not-callable-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-11erba1.ih · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/86A2saDwubshge6uCobt/f-1783052884128-24-11erba1.ihz9.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783052884128-24-11erba1.ih
· elide run /tmp/86A2saDwubshge6uCobt/f-17830
Advice
A`
example test: `test/built-ins/SharedArrayBuffer/proto-from-ctor-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-11mpq5q.v4 · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/jbgzMwVp5oP2hxgP1Yd9/f-1783053122094-24-11mpq5q.v4bo.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053122094-24-11mpq5q.v4
· elide run /tmp/jbgzMwVp5oP2hxgP1Yd9/f-17830
Advice
A`
example test: `test/built-ins/Proxy/apply/trap-is-not-callable-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-11pcu3f.lh · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/jYsj7Mn1vwfAMdjEQ9Ys/f-1783053148205-24-11pcu3f.lh7f.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053148205-24-11pcu3f.lh
· elide run /tmp/jYsj7Mn1vwfAMdjEQ9Ys/f-17830
Advice
A`
example test: `test/built-ins/Symbol/unscopables/cross-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-11vjbzl.<n> · elide run`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/DqppJCgAc0sA3et5zVqL/f-1783053186861-24-11vjbzl.309l.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053186861-24-11vjbzl.30
· elide run /tmp/DqppJCgAc0sA3et5zVqL/f-17830
Advice
A`
example test: `test/language/expressions/new/non-ctor-err-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-11xp1ia.rq · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/CcpbmQeOhbM6kSfuqpXQ/f-1783053122372-24-11xp1ia.rqtk.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053122372-24-11xp1ia.rq
· elide run /tmp/CcpbmQeOhbM6kSfuqpXQ/f-17830
Advice
A`
example test: `test/built-ins/Proxy/construct/null-handler-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-11yhhxn.7k · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/jLjU4khk1SBc5rWbTAAr/f-1783053147266-24-11yhhxn.7khh.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053147266-24-11yhhxn.7k
· elide run /tmp/jLjU4khk1SBc5rWbTAAr/f-17830
Advice
A`
example test: `test/built-ins/Symbol/isConcatSpreadable/cross-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-12r4oi.oty · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/5KlzlRcfjFQsnilFAVvT/f-1783053121964-24-12r4oi.otyt5.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053121964-24-12r4oi.oty
· elide run /tmp/5KlzlRcfjFQsnilFAVvT/f-17830
Advice
A`
example test: `test/built-ins/Proxy/apply/null-handler-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-134isr6.jq · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/jYsj7Mn1vwfAMdjEQ9Ys/f-1783053167802-24-134isr6.jqdk.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053167802-24-134isr6.jq
· elide run /tmp/jYsj7Mn1vwfAMdjEQ9Ys/f-17830
Advice
A`
example test: `test/language/expressions/async-generator/eval-body-proto-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-136vqsn.1o · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/z2t4O6TkNfABviDZKJNB/f-1783053148153-24-136vqsn.1o34.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053148153-24-136vqsn.1o
· elide run /tmp/z2t4O6TkNfABviDZKJNB/f-17830
Advice
A`
example test: `test/built-ins/Symbol/toStringTag/cross-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-13cc3mk.5b · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/jYsj7Mn1vwfAMdjEQ9Ys/f-1783052886758-24-13cc3mk.5bwd.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783052886758-24-13cc3mk.5b
· elide run /tmp/jYsj7Mn1vwfAMdjEQ9Ys/f-17830
Advice
A`
example test: `test/built-ins/String/proto-from-ctor-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-13ew8lg.h7 · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/z2t4O6TkNfABviDZKJNB/f-1783053125142-24-13ew8lg.h7pc.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053125142-24-13ew8lg.h7
· elide run /tmp/z2t4O6TkNfABviDZKJNB/f-17830
Advice
A`
example test: `test/built-ins/Proxy/getOwnPropertyDescriptor/trap-is-not-callable-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-13snvr.d52 [js] :anonym`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/u5t4l1hWe8msCY5yjIPn/f-1783053170976-24-13snvr.d525w.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053170976-24-13snvr.d52
[js] :anonymous                            f-178305317`
example test: `test/language/expressions/call/eval-realm-indirect.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-13wb39m.bf · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/BEABSxBrwrGPGjk8eJt8/f-1783053135553-24-13wb39m.bf2k.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053135553-24-13wb39m.bf
· elide run /tmp/BEABSxBrwrGPGjk8eJt8/f-17830
Advice
A`
example test: `test/built-ins/RegExp/escape/cross-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-148n3ja.oo · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/86A2saDwubshge6uCobt/f-1783052865459-24-148n3ja.ooke.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783052865459-24-148n3ja.oo
· elide run /tmp/86A2saDwubshge6uCobt/f-17830
Advice
A`
example test: `test/built-ins/Object/proto-from-ctor-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-14iopj2.vz · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/DqppJCgAc0sA3et5zVqL/f-1783053030203-24-14iopj2.vzzg.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053030203-24-14iopj2.vz
· elide run /tmp/DqppJCgAc0sA3et5zVqL/f-17830
Advice
A`
example test: `test/built-ins/NativeErrors/RangeError/proto-from-ctor-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-14qfepy.p6 · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/BEABSxBrwrGPGjk8eJt8/f-1783053030384-24-14qfepy.p6wb.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053030384-24-14qfepy.p6
· elide run /tmp/BEABSxBrwrGPGjk8eJt8/f-17830
Advice
A`
example test: `test/built-ins/NativeErrors/ReferenceError/proto-from-ctor-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-14s4535.h7 · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/86A2saDwubshge6uCobt/f-1783053146892-24-14s4535.h7vx.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053146892-24-14s4535.h7
· elide run /tmp/86A2saDwubshge6uCobt/f-17830
Advice
A`
example test: `test/built-ins/Symbol/asyncIterator/cross-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-155b8jm.c5 · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/u5t4l1hWe8msCY5yjIPn/f-1783052858556-24-155b8jm.c5ay.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783052858556-24-155b8jm.c5
· elide run /tmp/u5t4l1hWe8msCY5yjIPn/f-17830
Advice
A`
example test: `test/built-ins/GeneratorFunction/proto-from-ctor-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-157uanj.mh · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/jYsj7Mn1vwfAMdjEQ9Ys/f-1783052858001-24-157uanj.mhy2.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783052858001-24-157uanj.mh
· elide run /tmp/jYsj7Mn1vwfAMdjEQ9Ys/f-17830
Advice
A`
example test: `test/built-ins/Function/call-bind-this-realm-value.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-15c6kc4.tg · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/jYsj7Mn1vwfAMdjEQ9Ys/f-1783052854430-24-15c6kc4.tgp4.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783052854430-24-15c6kc4.tg
· elide run /tmp/jYsj7Mn1vwfAMdjEQ9Ys/f-17830
Advice
A`
example test: `test/built-ins/FinalizationRegistry/proto-from-ctor-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1619cxz.5d · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/5KlzlRcfjFQsnilFAVvT/f-1783053123505-24-1619cxz.5dcy.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053123505-24-1619cxz.5d
· elide run /tmp/5KlzlRcfjFQsnilFAVvT/f-17830
Advice
A`
example test: `test/built-ins/Proxy/defineProperty/targetdesc-undefined-target-is-not-extensible-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-16cq8yr.8q · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/jYsj7Mn1vwfAMdjEQ9Ys/f-1783053122597-24-16cq8yr.8q5z.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053122597-24-16cq8yr.8q
· elide run /tmp/jYsj7Mn1vwfAMdjEQ9Ys/f-17830
Advice
A`
example test: `test/built-ins/Proxy/construct/return-not-object-throws-string-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-16zliaj.xw · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/loNk4H2UkAtPGSQt0Uua/f-1783053148044-24-16zliaj.xw8h.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053148044-24-16zliaj.xw
· elide run /tmp/loNk4H2UkAtPGSQt0Uua/f-17830
Advice
A`
example test: `test/built-ins/Symbol/toPrimitive/cross-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-174q0j2.e3 · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/jbgzMwVp5oP2hxgP1Yd9/f-1783053173429-24-174q0j2.e34h.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053173429-24-174q0j2.e3
· elide run /tmp/jbgzMwVp5oP2hxgP1Yd9/f-17830
Advice
A`
example test: `test/language/expressions/class/private-getter-brand-check-multiple-evaluations-of-class-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-17wfkf4.qm · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/DqppJCgAc0sA3et5zVqL/f-1783053147773-24-17wfkf4.qmp8.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053147773-24-17wfkf4.qm
· elide run /tmp/DqppJCgAc0sA3et5zVqL/f-17830
Advice
A`
example test: `test/built-ins/Symbol/replace/cross-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-17wq8qd.3n · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/jYsj7Mn1vwfAMdjEQ9Ys/f-1783052865467-24-17wq8qd.3nmi.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783052865467-24-17wq8qd.3n
· elide run /tmp/jYsj7Mn1vwfAMdjEQ9Ys/f-17830
Advice
A`
example test: `test/built-ins/Object/proto-from-ctor-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-18kkpoe.jx · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/BEABSxBrwrGPGjk8eJt8/f-1783053125552-24-18kkpoe.jxqt.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053125552-24-18kkpoe.jx
· elide run /tmp/BEABSxBrwrGPGjk8eJt8/f-17830
Advice
A`
example test: `test/built-ins/Proxy/getPrototypeOf/trap-is-not-callable-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-19rv7a7.tu · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/u5t4l1hWe8msCY5yjIPn/f-1783053129198-24-19rv7a7.tu9d.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053129198-24-19rv7a7.tu
· elide run /tmp/u5t4l1hWe8msCY5yjIPn/f-17830
Advice
A`
example test: `test/built-ins/Proxy/set/trap-is-not-callable-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1a2sdxd.2k · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/u5t4l1hWe8msCY5yjIPn/f-1783053127428-24-1a2sdxd.2kc2.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053127428-24-1a2sdxd.2k
· elide run /tmp/u5t4l1hWe8msCY5yjIPn/f-17830
Advice
A`
example test: `test/built-ins/Proxy/ownKeys/trap-is-not-callable-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1a5ihsv.vb · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/jbgzMwVp5oP2hxgP1Yd9/f-1783053127804-24-1a5ihsv.vbjt.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053127804-24-1a5ihsv.vb
· elide run /tmp/jbgzMwVp5oP2hxgP1Yd9/f-17830
Advice
A`
example test: `test/built-ins/Proxy/preventExtensions/trap-is-not-callable-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1ag98xj.1l · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/u5t4l1hWe8msCY5yjIPn/f-1783053124521-24-1ag98xj.1l3t.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053124521-24-1ag98xj.1l
· elide run /tmp/u5t4l1hWe8msCY5yjIPn/f-17830
Advice
A`
example test: `test/built-ins/Proxy/get/trap-is-not-callable-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1alacey.cx · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/5KlzlRcfjFQsnilFAVvT/f-1783052849962-24-1alacey.cx4c.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783052849962-24-1alacey.cx
· elide run /tmp/5KlzlRcfjFQsnilFAVvT/f-17830
Advice
A`
example test: `test/built-ins/DataView/proto-from-ctor-realm-sab.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1aofvhm.uj · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/u5t4l1hWe8msCY5yjIPn/f-1783052882940-24-1aofvhm.ujd4.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783052882940-24-1aofvhm.uj
· elide run /tmp/u5t4l1hWe8msCY5yjIPn/f-17830
Advice
A`
example test: `test/built-ins/Set/proto-from-ctor-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1atdd7v.8p · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/loNk4H2UkAtPGSQt0Uua/f-1783052889902-24-1atdd7v.8pgl.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783052889902-24-1atdd7v.8p
· elide run /tmp/loNk4H2UkAtPGSQt0Uua/f-17830
Advice
A`
example test: `test/built-ins/WeakSet/proto-from-ctor-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1ccmyf9.hu · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/jYsj7Mn1vwfAMdjEQ9Ys/f-1783053147801-24-1ccmyf9.husz.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053147801-24-1ccmyf9.hu
· elide run /tmp/jYsj7Mn1vwfAMdjEQ9Ys/f-17830
Advice
A`
example test: `test/built-ins/Symbol/search/cross-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1d1vhjx.mq · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/86A2saDwubshge6uCobt/f-1783052850013-24-1d1vhjx.mq9b.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783052850013-24-1d1vhjx.mq
· elide run /tmp/86A2saDwubshge6uCobt/f-17830
Advice
A`
example test: `test/built-ins/DataView/proto-from-ctor-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1dw4fkl.jj · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/z2t4O6TkNfABviDZKJNB/f-1783053129202-24-1dw4fkl.jjjl.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053129202-24-1dw4fkl.jj
· elide run /tmp/z2t4O6TkNfABviDZKJNB/f-17830
Advice
A`
example test: `test/built-ins/Proxy/set/trap-is-not-callable-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1eee84a.n0 · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/jYsj7Mn1vwfAMdjEQ9Ys/f-1783053229049-24-1eee84a.n0zz.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053229049-24-1eee84a.n0
· elide run /tmp/jYsj7Mn1vwfAMdjEQ9Ys/f-17830
Advice
A`
example test: `test/language/types/reference/put-value-prop-base-primitive-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1eo2p9w.uv · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/DqppJCgAc0sA3et5zVqL/f-1783053160769-24-1eo2p9w.uv0l.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053160769-24-1eo2p9w.uv
· elide run /tmp/DqppJCgAc0sA3et5zVqL/f-17830
Advice
A`
example test: `test/language/eval-code/indirect/realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1eppo6n.<n> · elide run`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/u5t4l1hWe8msCY5yjIPn/f-1783053010716-24-1eppo6n.56k8.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053010716-24-1eppo6n.56
· elide run /tmp/u5t4l1hWe8msCY5yjIPn/f-17830
Advice
A`
example test: `test/built-ins/Error/isError/non-error-objects-other-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1f4jiyz.qo · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/BBNpRXko784UqD29wHHc/f-1783053194282-24-1f4jiyz.qoju.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053194282-24-1f4jiyz.qo
· elide run /tmp/BBNpRXko784UqD29wHHc/f-17830
Advice
A`
example test: `test/language/expressions/tagged-template/cache-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1f9qz9u.ri · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/86A2saDwubshge6uCobt/f-1783053148158-24-1f9qz9u.ricl.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053148158-24-1f9qz9u.ri
· elide run /tmp/86A2saDwubshge6uCobt/f-17830
Advice
A`
example test: `test/built-ins/Symbol/toStringTag/cross-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1fonfyc.5y · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/86A2saDwubshge6uCobt/f-1783053147053-24-1fonfyc.5y0r.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053147053-24-1fonfyc.5y
· elide run /tmp/86A2saDwubshge6uCobt/f-17830
Advice
A`
example test: `test/built-ins/Symbol/for/cross-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1fvegeu.yr · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/loNk4H2UkAtPGSQt0Uua/f-1783053123248-24-1fvegeu.yr3r.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053123248-24-1fvegeu.yr
· elide run /tmp/loNk4H2UkAtPGSQt0Uua/f-17830
Advice
A`
example test: `test/built-ins/Proxy/defineProperty/targetdesc-configurable-desc-not-configurable-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1g0s0ah.wc · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/loNk4H2UkAtPGSQt0Uua/f-1783053123121-24-1g0s0ah.wchs.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053123121-24-1g0s0ah.wc
· elide run /tmp/loNk4H2UkAtPGSQt0Uua/f-17830
Advice
A`
example test: `test/built-ins/Proxy/defineProperty/null-handler-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1g1ww6j.ro · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/jYsj7Mn1vwfAMdjEQ9Ys/f-1783052842172-24-1g1ww6j.robo.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783052842172-24-1g1ww6j.ro
· elide run /tmp/jYsj7Mn1vwfAMdjEQ9Ys/f-17830
Advice
A`
example test: `test/built-ins/AggregateError/proto-from-ctor-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1gknxsf.8e · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/86A2saDwubshge6uCobt/f-1783053030389-24-1gknxsf.8ens.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053030389-24-1gknxsf.8e
· elide run /tmp/86A2saDwubshge6uCobt/f-17830
Advice
A`
example test: `test/built-ins/NativeErrors/ReferenceError/proto-from-ctor-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1hbx3oq.vw · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/jYsj7Mn1vwfAMdjEQ9Ys/f-1783052867666-24-1hbx3oq.vwmp.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783052867666-24-1hbx3oq.vw
· elide run /tmp/jYsj7Mn1vwfAMdjEQ9Ys/f-17830
Advice
A`
example test: `test/built-ins/Proxy/get-fn-realm-recursive.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1hkeqnp.qe · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/DqppJCgAc0sA3et5zVqL/f-1783052858168-24-1hkeqnp.qele.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783052858168-24-1hkeqnp.qe
· elide run /tmp/DqppJCgAc0sA3et5zVqL/f-17830
Advice
A`
example test: `test/built-ins/Function/proto-from-ctor-realm-prototype.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1i1iubb.0d · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/u5t4l1hWe8msCY5yjIPn/f-1783053123521-24-1i1iubb.0d66.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053123521-24-1i1iubb.0d
· elide run /tmp/u5t4l1hWe8msCY5yjIPn/f-17830
Advice
A`
example test: `test/built-ins/Proxy/defineProperty/trap-is-not-callable-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1ia6nje.<n> · elide run`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/u5t4l1hWe8msCY5yjIPn/f-1783052836517-24-1ia6nje.25ll.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783052836517-24-1ia6nje.25
· elide run /tmp/u5t4l1hWe8msCY5yjIPn/f-17830
Advice
A`
example test: `test/harness/assert-throws-same-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1j9dopq.7m · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/z2t4O6TkNfABviDZKJNB/f-1783053127210-24-1j9dopq.7mqy.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053127210-24-1j9dopq.7m
· elide run /tmp/z2t4O6TkNfABviDZKJNB/f-17830
Advice
A`
example test: `test/built-ins/Proxy/ownKeys/return-not-list-object-throws-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1k2gr5o.5s · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/lUI3TOaIoCQcA9hy1cdt/f-1783052852858-24-1k2gr5o.5s0u.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783052852858-24-1k2gr5o.5s
· elide run /tmp/lUI3TOaIoCQcA9hy1cdt/f-17830
Advice
A`
example test: `test/built-ins/Date/proto-from-ctor-realm-two.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1k3s34j.9z · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/z2t4O6TkNfABviDZKJNB/f-1783052854078-24-1k3s34j.9zu2.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783052854078-24-1k3s34j.9z
· elide run /tmp/z2t4O6TkNfABviDZKJNB/f-17830
Advice
A`
example test: `test/built-ins/Error/proto-from-ctor-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1kfud26.di · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/lUI3TOaIoCQcA9hy1cdt/f-1783053146876-24-1kfud26.difg.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053146876-24-1kfud26.di
· elide run /tmp/lUI3TOaIoCQcA9hy1cdt/f-17830
Advice
A`
example test: `test/built-ins/Symbol/asyncIterator/cross-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1ki9b0f.oy · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/u5t4l1hWe8msCY5yjIPn/f-1783052852808-24-1ki9b0f.oyyq.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783052852808-24-1ki9b0f.oy
· elide run /tmp/u5t4l1hWe8msCY5yjIPn/f-17830
Advice
A`
example test: `test/built-ins/Date/proto-from-ctor-realm-one.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1kr4dqx.e1 · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/jbgzMwVp5oP2hxgP1Yd9/f-1783053122543-24-1kr4dqx.e17r.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053122543-24-1kr4dqx.e1
· elide run /tmp/jbgzMwVp5oP2hxgP1Yd9/f-17830
Advice
A`
example test: `test/built-ins/Proxy/construct/return-not-object-throws-number-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1kx64u2.<n> · elide run`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/u5t4l1hWe8msCY5yjIPn/f-1783053122972-24-1kx64u2.800b.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053122972-24-1kx64u2.80
· elide run /tmp/u5t4l1hWe8msCY5yjIPn/f-17830
Advice
A`
example test: `test/built-ins/Proxy/construct/trap-is-undefined-proto-from-cross-realm-newtarget.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1l7xto1.ez · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/loNk4H2UkAtPGSQt0Uua/f-1783053173487-24-1l7xto1.ezjw.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053173487-24-1l7xto1.ez
· elide run /tmp/loNk4H2UkAtPGSQt0Uua/f-17830
Advice
A`
example test: `test/language/expressions/class/private-method-brand-check-multiple-evaluations-of-class-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1liy79p.wx · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/BEABSxBrwrGPGjk8eJt8/f-1783053123109-24-1liy79p.wxgk.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053123109-24-1liy79p.wx
· elide run /tmp/BEABSxBrwrGPGjk8eJt8/f-17830
Advice
A`
example test: `test/built-ins/Proxy/defineProperty/desc-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1lzxsn3.nm · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/jbgzMwVp5oP2hxgP1Yd9/f-1783052858978-24-1lzxsn3.nm4p.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783052858978-24-1lzxsn3.nm
· elide run /tmp/jbgzMwVp5oP2hxgP1Yd9/f-17830
Advice
A`
example test: `test/built-ins/Iterator/proto-from-ctor-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1m0tbmq.ba · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/lUI3TOaIoCQcA9hy1cdt/f-1783052843845-24-1m0tbmq.ba96.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783052843845-24-1m0tbmq.ba
· elide run /tmp/lUI3TOaIoCQcA9hy1cdt/f-17830
Advice
A`
example test: `test/built-ins/Array/proto-from-ctor-realm-two.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1mixev7.2g · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/DqppJCgAc0sA3et5zVqL/f-1783052844837-24-1mixev7.2gt3.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783052844837-24-1mixev7.2g
· elide run /tmp/DqppJCgAc0sA3et5zVqL/f-17830
Advice
A`
example test: `test/built-ins/ArrayBuffer/proto-from-ctor-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1mvdoxm.is · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/5KlzlRcfjFQsnilFAVvT/f-1783052854425-24-1mvdoxm.is8i.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783052854425-24-1mvdoxm.is
· elide run /tmp/5KlzlRcfjFQsnilFAVvT/f-17830
Advice
A`
example test: `test/built-ins/FinalizationRegistry/proto-from-ctor-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1nippel.c0 · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/86A2saDwubshge6uCobt/f-1783052889909-24-1nippel.c0xx.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783052889909-24-1nippel.c0
· elide run /tmp/86A2saDwubshge6uCobt/f-17830
Advice
A`
example test: `test/built-ins/WeakSet/proto-from-ctor-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1nleyad.rv · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/86A2saDwubshge6uCobt/f-1783053019876-24-1nleyad.rvr2.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053019876-24-1nleyad.rv
· elide run /tmp/86A2saDwubshge6uCobt/f-17830
Advice
A`
example test: `test/built-ins/JSON/stringify/replacer-array-proxy-revoked-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1np4okn.hg · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/86A2saDwubshge6uCobt/f-1783053135549-24-1np4okn.hgc4.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053135549-24-1np4okn.hg
· elide run /tmp/86A2saDwubshge6uCobt/f-17830
Advice
A`
example test: `test/built-ins/RegExp/escape/cross-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1nudud2.8r · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/u5t4l1hWe8msCY5yjIPn/f-1783053173628-24-1nudud2.8r8i.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053173628-24-1nudud2.8r
· elide run /tmp/u5t4l1hWe8msCY5yjIPn/f-17830
Advice
A`
example test: `test/language/expressions/class/private-static-method-brand-check-multiple-evaluations-of-class-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1nvvw77.<n> · elide run`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/lUI3TOaIoCQcA9hy1cdt/f-1783052995894-24-1nvvw77.87mg.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783052995894-24-1nvvw77.87
· elide run /tmp/lUI3TOaIoCQcA9hy1cdt/f-17830
Advice
A`
example test: `test/built-ins/Array/of/proto-from-ctor-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1ouhpvz.<n> · elide run`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/u5t4l1hWe8msCY5yjIPn/f-1783052887335-24-1ouhpvz.59be.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783052887335-24-1ouhpvz.59
· elide run /tmp/u5t4l1hWe8msCY5yjIPn/f-17830
Advice
A`
example test: `test/built-ins/SuppressedError/proto-from-ctor-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1pz8kn8.o1 · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/DqppJCgAc0sA3et5zVqL/f-1783052887692-24-1pz8kn8.o10i.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783052887692-24-1pz8kn8.o1
· elide run /tmp/DqppJCgAc0sA3et5zVqL/f-17830
Advice
A`
example test: `test/built-ins/ThrowTypeError/distinct-cross-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1q1l0nd.ji · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/5KlzlRcfjFQsnilFAVvT/f-1783052882936-24-1q1l0nd.ji7u.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783052882936-24-1q1l0nd.ji
· elide run /tmp/5KlzlRcfjFQsnilFAVvT/f-17830
Advice
A`
example test: `test/built-ins/Set/proto-from-ctor-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1r4xkpi.dy · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/DqppJCgAc0sA3et5zVqL/f-1783052854081-24-1r4xkpi.dyii.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783052854081-24-1r4xkpi.dy
· elide run /tmp/DqppJCgAc0sA3et5zVqL/f-17830
Advice
A`
example test: `test/built-ins/Error/proto-from-ctor-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1roz09q.ez · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/DqppJCgAc0sA3et5zVqL/f-1783053147967-24-1roz09q.ezkr.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053147967-24-1roz09q.ez
· elide run /tmp/DqppJCgAc0sA3et5zVqL/f-17830
Advice
A`
example test: `test/built-ins/Symbol/species/cross-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1svhhbo.<n> · elide run`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/5KlzlRcfjFQsnilFAVvT/f-1783053186875-24-1svhhbo.89rk.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053186875-24-1svhhbo.89
· elide run /tmp/5KlzlRcfjFQsnilFAVvT/f-17830
Advice
A`
example test: `test/language/expressions/new/non-ctor-err-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1t3yle.5mq · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/lUI3TOaIoCQcA9hy1cdt/f-1783053124852-24-1t3yle.5mq8c.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053124852-24-1t3yle.5mq
· elide run /tmp/lUI3TOaIoCQcA9hy1cdt/f-17830
Advice
A`
example test: `test/built-ins/Proxy/getOwnPropertyDescriptor/result-type-is-not-object-nor-undefined-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1tcyvwd.9j · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/lUI3TOaIoCQcA9hy1cdt/f-1783053019846-24-1tcyvwd.9jib.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053019846-24-1tcyvwd.9j
· elide run /tmp/lUI3TOaIoCQcA9hy1cdt/f-17830
Advice
A`
example test: `test/built-ins/JSON/stringify/replacer-array-proxy-revoked-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1u1w8ds.wa · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/5KlzlRcfjFQsnilFAVvT/f-1783053194270-24-1u1w8ds.wajt.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053194270-24-1u1w8ds.wa
· elide run /tmp/5KlzlRcfjFQsnilFAVvT/f-17830
Advice
A`
example test: `test/language/expressions/tagged-template/cache-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1ucxj40.2j · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/jLjU4khk1SBc5rWbTAAr/f-1783053229051-24-1ucxj40.2jht.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053229051-24-1ucxj40.2j
· elide run /tmp/jLjU4khk1SBc5rWbTAAr/f-17830
Advice
A`
example test: `test/language/types/reference/put-value-prop-base-primitive-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1ugdds4.wt · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/jbgzMwVp5oP2hxgP1Yd9/f-1783053125149-24-1ugdds4.wtsh.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053125149-24-1ugdds4.wt
· elide run /tmp/jbgzMwVp5oP2hxgP1Yd9/f-17830
Advice
A`
example test: `test/built-ins/Proxy/getOwnPropertyDescriptor/trap-is-not-callable-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1uzr74b.m1 · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/BEABSxBrwrGPGjk8eJt8/f-1783052887338-24-1uzr74b.m13k.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783052887338-24-1uzr74b.m1
· elide run /tmp/BEABSxBrwrGPGjk8eJt8/f-17830
Advice
A`
example test: `test/built-ins/SuppressedError/proto-from-ctor-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1vafq.2u9f · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/z2t4O6TkNfABviDZKJNB/f-1783053124074-24-1vafq.2u9fvo.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053124074-24-1vafq.2u9f
· elide run /tmp/z2t4O6TkNfABviDZKJNB/f-17830
Advice
A`
example test: `test/built-ins/Proxy/deleteProperty/trap-is-not-callable-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1wn3vao.g0 · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/lUI3TOaIoCQcA9hy1cdt/f-1783053127436-24-1wn3vao.g07f.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053127436-24-1wn3vao.g0
· elide run /tmp/lUI3TOaIoCQcA9hy1cdt/f-17830
Advice
A`
example test: `test/built-ins/Proxy/ownKeys/trap-is-not-callable-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1x123sn.zj · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/jbgzMwVp5oP2hxgP1Yd9/f-1783053030574-24-1x123sn.zjgr.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053030574-24-1x123sn.zj
· elide run /tmp/jbgzMwVp5oP2hxgP1Yd9/f-17830
Advice
A`
example test: `test/built-ins/NativeErrors/SyntaxError/proto-from-ctor-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1xhulr5.bm · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/BEABSxBrwrGPGjk8eJt8/f-1783052853465-24-1xhulr5.bmzf.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783052853465-24-1xhulr5.bm
· elide run /tmp/BEABSxBrwrGPGjk8eJt8/f-17830
Advice
A`
example test: `test/built-ins/DisposableStack/proto-from-ctor-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1xydgrr.cp · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/u5t4l1hWe8msCY5yjIPn/f-1783053122554-24-1xydgrr.cphp.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053122554-24-1xydgrr.cp
· elide run /tmp/u5t4l1hWe8msCY5yjIPn/f-17830
Advice
A`
example test: `test/built-ins/Proxy/construct/return-not-object-throws-number-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1y7gtue.uu · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/BBNpRXko784UqD29wHHc/f-1783052859949-24-1y7gtue.uud5.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783052859949-24-1y7gtue.uu
· elide run /tmp/BBNpRXko784UqD29wHHc/f-17830
Advice
A`
example test: `test/built-ins/Map/proto-from-ctor-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1ybn0c.r9m · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/BBNpRXko784UqD29wHHc/f-1783052992292-24-1ybn0c.r9m59.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783052992292-24-1ybn0c.r9m
· elide run /tmp/BBNpRXko784UqD29wHHc/f-17830
Advice
A`
example test: `test/built-ins/Array/from/proto-from-ctor-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1yql67c.gy · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/DqppJCgAc0sA3et5zVqL/f-1783053146915-24-1yql67c.gyru.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053146915-24-1yql67c.gy
· elide run /tmp/DqppJCgAc0sA3et5zVqL/f-17830
Advice
A`
example test: `test/built-ins/Symbol/dispose/cross-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1yx4yq.ulj · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/jbgzMwVp5oP2hxgP1Yd9/f-1783053126299-24-1yx4yq.ulja5.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053126299-24-1yx4yq.ulj
· elide run /tmp/jbgzMwVp5oP2hxgP1Yd9/f-17830
Advice
A`
example test: `test/built-ins/Proxy/has/trap-is-not-callable-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-2320gc.evk · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/jLjU4khk1SBc5rWbTAAr/f-1783052852840-24-2320gc.evk2u.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783052852840-24-2320gc.evk
· elide run /tmp/jLjU4khk1SBc5rWbTAAr/f-17830
Advice
A`
example test: `test/built-ins/Date/proto-from-ctor-realm-zero.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-27ggby.6gd · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/5KlzlRcfjFQsnilFAVvT/f-1783052843880-24-27ggby.6gd22.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783052843880-24-27ggby.6gd
· elide run /tmp/5KlzlRcfjFQsnilFAVvT/f-17830
Advice
A`
example test: `test/built-ins/Array/proto-from-ctor-realm-zero.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-2ai4ds.6om · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/lUI3TOaIoCQcA9hy1cdt/f-1783053122656-24-2ai4ds.6omnq.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053122656-24-2ai4ds.6om
· elide run /tmp/lUI3TOaIoCQcA9hy1cdt/f-17830
Advice
A`
example test: `test/built-ins/Proxy/construct/return-not-object-throws-symbol-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-2cozee.udr · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/BBNpRXko784UqD29wHHc/f-1783053194168-24-2cozee.udrut.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053194168-24-2cozee.udr
· elide run /tmp/BBNpRXko784UqD29wHHc/f-17830
Advice
A`
example test: `test/language/expressions/super/realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-2fosuy.bm3 · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/jYsj7Mn1vwfAMdjEQ9Ys/f-1783052843781-24-2fosuy.bm30q.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783052843781-24-2fosuy.bm3
· elide run /tmp/jYsj7Mn1vwfAMdjEQ9Ys/f-17830
Advice
A`
example test: `test/built-ins/Array/proto-from-ctor-realm-one.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-2fp1ta.t3m · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/BEABSxBrwrGPGjk8eJt8/f-1783053029938-24-2fp1ta.t3mrd.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053029938-24-2fp1ta.t3m
· elide run /tmp/BEABSxBrwrGPGjk8eJt8/f-17830
Advice
A`
example test: `test/built-ins/NativeErrors/EvalError/proto-from-ctor-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-2jdo86.hbp · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/jLjU4khk1SBc5rWbTAAr/f-1783053122667-24-2jdo86.hbptb.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053122667-24-2jdo86.hbp
· elide run /tmp/jLjU4khk1SBc5rWbTAAr/f-17830
Advice
A`
example test: `test/built-ins/Proxy/construct/return-not-object-throws-symbol-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-2le80o.wnd · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/jbgzMwVp5oP2hxgP1Yd9/f-1783053121959-24-2le80o.wnde3.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053121959-24-2le80o.wnd
· elide run /tmp/jbgzMwVp5oP2hxgP1Yd9/f-17830
Advice
A`
example test: `test/built-ins/Proxy/apply/null-handler-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-2mzvwi.3wb · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/jbgzMwVp5oP2hxgP1Yd9/f-1783053031067-24-2mzvwi.3wbkb.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053031067-24-2mzvwi.3wb
· elide run /tmp/jbgzMwVp5oP2hxgP1Yd9/f-17830
Advice
A`
example test: `test/built-ins/NativeErrors/URIError/proto-from-ctor-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-36qxch.jma · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/BEABSxBrwrGPGjk8eJt8/f-1783053173618-24-36qxch.jmaet.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053173618-24-36qxch.jma
· elide run /tmp/BEABSxBrwrGPGjk8eJt8/f-17830
Advice
A`
example test: `test/language/expressions/class/private-static-getter-multiple-evaluations-of-class-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-3kju14.p2j · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/jLjU4khk1SBc5rWbTAAr/f-1783053147437-24-3kju14.p2juh.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053147437-24-3kju14.p2j
· elide run /tmp/jLjU4khk1SBc5rWbTAAr/f-17830
Advice
A`
example test: `test/built-ins/Symbol/keyFor/cross-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-4i0a11.fhd · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/DqppJCgAc0sA3et5zVqL/f-1783052866141-24-4i0a11.fhdvk.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783052866141-24-4i0a11.fhd
· elide run /tmp/DqppJCgAc0sA3et5zVqL/f-17830
Advice
A`
example test: `test/built-ins/Promise/proto-from-ctor-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-4la0c0.<n> · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/lUI3TOaIoCQcA9hy1cdt/f-1783053122335-24-4la0c0.699yw.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053122335-24-4la0c0.699
· elide run /tmp/lUI3TOaIoCQcA9hy1cdt/f-17830
Advice
A`
example test: `test/built-ins/Proxy/construct/null-handler-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-4vj1t.5l0k · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/u5t4l1hWe8msCY5yjIPn/f-1783052843865-24-4vj1t.5l0k8a.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783052843865-24-4vj1t.5l0k
· elide run /tmp/u5t4l1hWe8msCY5yjIPn/f-17830
Advice
A`
example test: `test/built-ins/Array/proto-from-ctor-realm-zero.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-4vv6mi.jb5 · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/z2t4O6TkNfABviDZKJNB/f-1783053123369-24-4vv6mi.jb5c4.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053123369-24-4vv6mi.jb5
· elide run /tmp/z2t4O6TkNfABviDZKJNB/f-17830
Advice
A`
example test: `test/built-ins/Proxy/defineProperty/targetdesc-undefined-not-configurable-descriptor-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-58o4es.4pn · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/jbgzMwVp5oP2hxgP1Yd9/f-1783052852830-24-58o4es.4pnqe.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783052852830-24-58o4es.4pn
· elide run /tmp/jbgzMwVp5oP2hxgP1Yd9/f-17830
Advice
A`
example test: `test/built-ins/Date/proto-from-ctor-realm-zero.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-5kflfy.a27 · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/loNk4H2UkAtPGSQt0Uua/f-1783052888862-24-5kflfy.a27oo.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783052888862-24-5kflfy.a27
· elide run /tmp/loNk4H2UkAtPGSQt0Uua/f-17830
Advice
A`
example test: `test/built-ins/WeakMap/proto-from-ctor-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-5lolr4.vh0 · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/z2t4O6TkNfABviDZKJNB/f-1783053122734-24-5lolr4.vh05r.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053122734-24-5lolr4.vh0
· elide run /tmp/z2t4O6TkNfABviDZKJNB/f-17830
Advice
A`
example test: `test/built-ins/Proxy/construct/return-not-object-throws-undefined-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-5z8esc.llw · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/5KlzlRcfjFQsnilFAVvT/f-1783053126305-24-5z8esc.llwka.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053126305-24-5z8esc.llw
· elide run /tmp/5KlzlRcfjFQsnilFAVvT/f-17830
Advice
A`
example test: `test/built-ins/Proxy/has/trap-is-not-callable-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-6jao1i.l51 · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/jLjU4khk1SBc5rWbTAAr/f-1783053122089-24-6jao1i.l51x9.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053122089-24-6jao1i.l51
· elide run /tmp/jLjU4khk1SBc5rWbTAAr/f-17830
Advice
A`
example test: `test/built-ins/Proxy/apply/trap-is-not-callable-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-6racn4.u3h · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/jLjU4khk1SBc5rWbTAAr/f-1783053173665-24-6racn4.u3h4k.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053173665-24-6racn4.u3h
· elide run /tmp/jLjU4khk1SBc5rWbTAAr/f-17830
Advice
A`
example test: `test/language/expressions/class/private-static-setter-multiple-evaluations-of-class-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-6rr7fq.53p · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/DqppJCgAc0sA3et5zVqL/f-1783052849966-24-6rr7fq.53py5.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783052849966-24-6rr7fq.53p
· elide run /tmp/DqppJCgAc0sA3et5zVqL/f-17830
Advice
A`
example test: `test/built-ins/DataView/proto-from-ctor-realm-sab.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-6s9e67.3p3 · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/86A2saDwubshge6uCobt/f-1783053122727-24-6s9e67.3p3ts.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053122727-24-6s9e67.3p3
· elide run /tmp/86A2saDwubshge6uCobt/f-17830
Advice
A`
example test: `test/built-ins/Proxy/construct/return-not-object-throws-undefined-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-6zfn4m.08g · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/lUI3TOaIoCQcA9hy1cdt/f-1783053123285-24-6zfn4m.08gt6.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053123285-24-6zfn4m.08g
· elide run /tmp/lUI3TOaIoCQcA9hy1cdt/f-17830
Advice
A`
example test: `test/built-ins/Proxy/defineProperty/targetdesc-not-compatible-descriptor-not-configurable-target-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-71myso.jjj · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/jYsj7Mn1vwfAMdjEQ9Ys/f-1783053123397-24-71myso.jjj4d.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053123397-24-71myso.jjj
· elide run /tmp/jYsj7Mn1vwfAMdjEQ9Ys/f-17830
Advice
A`
example test: `test/built-ins/Proxy/defineProperty/targetdesc-undefined-not-configurable-descriptor-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-74lkq8.szi · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/z2t4O6TkNfABviDZKJNB/f-1783052853471-24-74lkq8.szivr.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783052853471-24-74lkq8.szi
· elide run /tmp/z2t4O6TkNfABviDZKJNB/f-17830
Advice
A`
example test: `test/built-ins/DisposableStack/proto-from-ctor-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-7d3dyc.hze · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/BEABSxBrwrGPGjk8eJt8/f-1783053122442-24-7d3dyc.hze9j.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053122442-24-7d3dyc.hze
· elide run /tmp/BEABSxBrwrGPGjk8eJt8/f-17830
Advice
A`
example test: `test/built-ins/Proxy/construct/return-not-object-throws-boolean-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-7ftq9g.n5e · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/CcpbmQeOhbM6kSfuqpXQ/f-1783053122796-24-7ftq9g.n5epf.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053122796-24-7ftq9g.n5e
· elide run /tmp/CcpbmQeOhbM6kSfuqpXQ/f-17830
Advice
A`
example test: `test/built-ins/Proxy/construct/trap-is-not-callable-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-7gtfjt.qoq · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/jYsj7Mn1vwfAMdjEQ9Ys/f-1783053194173-24-7gtfjt.qoq9x.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053194173-24-7gtfjt.qoq
· elide run /tmp/jYsj7Mn1vwfAMdjEQ9Ys/f-17830
Advice
A`
example test: `test/language/expressions/super/realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-7i89h3.w1r · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/jLjU4khk1SBc5rWbTAAr/f-1783053010633-24-7i89h3.w1rw4.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053010633-24-7i89h3.w1r
· elide run /tmp/jLjU4khk1SBc5rWbTAAr/f-17830
Advice
A`
example test: `test/built-ins/Error/isError/errors-other-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-7vfuvx.h1i · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/CcpbmQeOhbM6kSfuqpXQ/f-1783052884096-24-7vfuvx.h1i6e.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783052884096-24-7vfuvx.h1i
· elide run /tmp/CcpbmQeOhbM6kSfuqpXQ/f-17830
Advice
A`
example test: `test/built-ins/SharedArrayBuffer/proto-from-ctor-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-7vg9se.sh8 · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/5KlzlRcfjFQsnilFAVvT/f-1783052887699-24-7vg9se.sh85t.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783052887699-24-7vg9se.sh8
· elide run /tmp/5KlzlRcfjFQsnilFAVvT/f-17830
Advice
A`
example test: `test/built-ins/ThrowTypeError/distinct-cross-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-8ig4ui.eih · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/BBNpRXko784UqD29wHHc/f-1783052836497-24-8ig4ui.eihsk.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783052836497-24-8ig4ui.eih
· elide run /tmp/BBNpRXko784UqD29wHHc/f-17830
Advice
A`
example test: `test/harness/assert-throws-same-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-a74rtm.bup · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/5KlzlRcfjFQsnilFAVvT/f-1783052889241-24-a74rtm.bupwk.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783052889241-24-a74rtm.bup
· elide run /tmp/5KlzlRcfjFQsnilFAVvT/f-17830
Advice
A`
example test: `test/built-ins/WeakRef/proto-from-ctor-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-akp0em.mlu · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/jYsj7Mn1vwfAMdjEQ9Ys/f-1783053122449-24-akp0em.mludm.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053122449-24-akp0em.mlu
· elide run /tmp/jYsj7Mn1vwfAMdjEQ9Ys/f-17830
Advice
A`
example test: `test/built-ins/Proxy/construct/return-not-object-throws-boolean-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-avmoli.to7 · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/lUI3TOaIoCQcA9hy1cdt/f-1783052996076-24-avmoli.to77t.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783052996076-24-avmoli.to7
· elide run /tmp/lUI3TOaIoCQcA9hy1cdt/f-17830
Advice
A`
example test: `test/built-ins/Array/length/define-own-prop-length-overflow-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-bd6lpt.th4 · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/loNk4H2UkAtPGSQt0Uua/f-1783053122464-24-bd6lpt.th4zw.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053122464-24-bd6lpt.th4
· elide run /tmp/loNk4H2UkAtPGSQt0Uua/f-17830
Advice
A`
example test: `test/built-ins/Proxy/construct/return-not-object-throws-null-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-bj6gl9.ma5 · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/CcpbmQeOhbM6kSfuqpXQ/f-1783052848457-24-bj6gl9.ma5nq.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783052848457-24-bj6gl9.ma5
· elide run /tmp/CcpbmQeOhbM6kSfuqpXQ/f-17830
Advice
A`
example test: `test/built-ins/Boolean/proto-from-ctor-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-c8xto5.q65 · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/jbgzMwVp5oP2hxgP1Yd9/f-1783052858572-24-c8xto5.q650d.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783052858572-24-c8xto5.q65
· elide run /tmp/jbgzMwVp5oP2hxgP1Yd9/f-17830
Advice
A`
example test: `test/built-ins/GeneratorFunction/proto-from-ctor-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-c9qt0z.ed5 · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/jLjU4khk1SBc5rWbTAAr/f-1783053020517-24-c9qt0z.ed5kr.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053020517-24-c9qt0z.ed5
· elide run /tmp/jLjU4khk1SBc5rWbTAAr/f-17830
Advice
A`
example test: `test/built-ins/JSON/stringify/value-bigint-cross-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-comf8r.o8i · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/CcpbmQeOhbM6kSfuqpXQ/f-1783053125548-24-comf8r.o8iel.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053125548-24-comf8r.o8i
· elide run /tmp/CcpbmQeOhbM6kSfuqpXQ/f-17830
Advice
A`
example test: `test/built-ins/Proxy/getPrototypeOf/trap-is-not-callable-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-cxz6je.e62 · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/86A2saDwubshge6uCobt/f-1783053123352-24-cxz6je.e62ie.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053123352-24-cxz6je.e62
· elide run /tmp/86A2saDwubshge6uCobt/f-17830
Advice
A`
example test: `test/built-ins/Proxy/defineProperty/targetdesc-not-compatible-descriptor-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-cyspgf.7ox · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/BEABSxBrwrGPGjk8eJt8/f-1783053123515-24-cyspgf.7ox5l.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053123515-24-cyspgf.7ox
· elide run /tmp/BEABSxBrwrGPGjk8eJt8/f-17830
Advice
A`
example test: `test/built-ins/Proxy/defineProperty/trap-is-not-callable-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-d7qvzg.u84 · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/lUI3TOaIoCQcA9hy1cdt/f-1783053147822-24-d7qvzg.u84dr.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053147822-24-d7qvzg.u84
· elide run /tmp/lUI3TOaIoCQcA9hy1cdt/f-17830
Advice
A`
example test: `test/built-ins/Symbol/search/cross-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-dfndss.3bo [js] createA`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/BBNpRXko784UqD29wHHc/f-1783053173486-24-dfndss.3bolc.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053173486-24-dfndss.3bo
[js] createAndInstantiateClass             f-178305317`
example test: `test/language/expressions/class/private-method-brand-check-multiple-evaluations-of-class-realm-function-ctor.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-e76qmf.x69 · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/CcpbmQeOhbM6kSfuqpXQ/f-1783053147962-24-e76qmf.x690v.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053147962-24-e76qmf.x69
· elide run /tmp/CcpbmQeOhbM6kSfuqpXQ/f-17830
Advice
A`
example test: `test/built-ins/Symbol/species/cross-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-efnvy9.dab · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/lUI3TOaIoCQcA9hy1cdt/f-1783053123128-24-efnvy9.dab4r.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053123128-24-efnvy9.dab
· elide run /tmp/lUI3TOaIoCQcA9hy1cdt/f-17830
Advice
A`
example test: `test/built-ins/Proxy/defineProperty/null-handler-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-feh7xu.8jt · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/jYsj7Mn1vwfAMdjEQ9Ys/f-1783052858543-24-feh7xu.8jtcc.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783052858543-24-feh7xu.8jt
· elide run /tmp/jYsj7Mn1vwfAMdjEQ9Ys/f-17830
Advice
A`
example test: `test/built-ins/GeneratorFunction/proto-from-ctor-realm-prototype.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-gc27ub.adt · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/jYsj7Mn1vwfAMdjEQ9Ys/f-1783053123238-24-gc27ub.adtj8.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053123238-24-gc27ub.adt
· elide run /tmp/jYsj7Mn1vwfAMdjEQ9Ys/f-17830
Advice
A`
example test: `test/built-ins/Proxy/defineProperty/targetdesc-configurable-desc-not-configurable-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-gd105e.o5i · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/jLjU4khk1SBc5rWbTAAr/f-1783053124524-24-gd105e.o5ii7.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053124524-24-gd105e.o5i
· elide run /tmp/jLjU4khk1SBc5rWbTAAr/f-17830
Advice
A`
example test: `test/built-ins/Proxy/get/trap-is-not-callable-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-ge3nfn.6qn [js] createA`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/DqppJCgAc0sA3et5zVqL/f-1783053173443-24-ge3nfn.6qndw.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053173443-24-ge3nfn.6qn
[js] createAndInstantiateClass             f-178305317`
example test: `test/language/expressions/class/private-getter-brand-check-multiple-evaluations-of-class-realm-function-ctor.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-heyzh8.yyx · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/BEABSxBrwrGPGjk8eJt8/f-1783052858165-24-heyzh8.yyx87.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783052858165-24-heyzh8.yyx
· elide run /tmp/BEABSxBrwrGPGjk8eJt8/f-17830
Advice
A`
example test: `test/built-ins/Function/proto-from-ctor-realm-prototype.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-i728a8.5xp · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/CcpbmQeOhbM6kSfuqpXQ/f-1783053029941-24-i728a8.5xpzm.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053029941-24-i728a8.5xp
· elide run /tmp/CcpbmQeOhbM6kSfuqpXQ/f-17830
Advice
A`
example test: `test/built-ins/NativeErrors/EvalError/proto-from-ctor-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-i7e0d5.g14 · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/jbgzMwVp5oP2hxgP1Yd9/f-1783053126666-24-i7e0d5.g14bl.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053126666-24-i7e0d5.g14
· elide run /tmp/jbgzMwVp5oP2hxgP1Yd9/f-17830
Advice
A`
example test: `test/built-ins/Proxy/isExtensible/trap-is-not-callable-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-ic1q4e.p13 · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/jbgzMwVp5oP2hxgP1Yd9/f-1783053147573-24-ic1q4e.p132r.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053147573-24-ic1q4e.p13
· elide run /tmp/jbgzMwVp5oP2hxgP1Yd9/f-17830
Advice
A`
example test: `test/built-ins/Symbol/match/cross-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-if6ojw.xbg · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/BEABSxBrwrGPGjk8eJt8/f-1783053124024-24-if6ojw.xbg3o.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053124024-24-if6ojw.xbg
· elide run /tmp/BEABSxBrwrGPGjk8eJt8/f-17830
Advice
A`
example test: `test/built-ins/Proxy/deleteProperty/trap-is-not-callable-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-j9cgho.21x · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/jbgzMwVp5oP2hxgP1Yd9/f-1783052886764-24-j9cgho.21xuh.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783052886764-24-j9cgho.21x
· elide run /tmp/jbgzMwVp5oP2hxgP1Yd9/f-17830
Advice
A`
example test: `test/built-ins/String/proto-from-ctor-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-jj9iw5.rvy [js] createA`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/86A2saDwubshge6uCobt/f-1783053173484-24-jj9iw5.rvyzj.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053173484-24-jj9iw5.rvy
[js] createAndInstantiateClass             f-178305317`
example test: `test/language/expressions/class/private-method-brand-check-multiple-evaluations-of-class-realm-function-ctor.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-jme67r.0jx · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/BEABSxBrwrGPGjk8eJt8/f-1783053146920-24-jme67r.0jxvk.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053146920-24-jme67r.0jx
· elide run /tmp/BEABSxBrwrGPGjk8eJt8/f-17830
Advice
A`
example test: `test/built-ins/Symbol/dispose/cross-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-kcm6qb.wr0 · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/jLjU4khk1SBc5rWbTAAr/f-1783053123277-24-kcm6qb.wr0dt.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053123277-24-kcm6qb.wr0
· elide run /tmp/jLjU4khk1SBc5rWbTAAr/f-17830
Advice
A`
example test: `test/built-ins/Proxy/defineProperty/targetdesc-not-compatible-descriptor-not-configurable-target-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-l1sae3.jzh · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/jLjU4khk1SBc5rWbTAAr/f-1783053147655-24-l1sae3.jzhsi.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053147655-24-l1sae3.jzh
· elide run /tmp/jLjU4khk1SBc5rWbTAAr/f-17830
Advice
A`
example test: `test/built-ins/Symbol/matchAll/cross-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-m407ml.qq2 · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/u5t4l1hWe8msCY5yjIPn/f-1783052850022-24-m407ml.qq2qb.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783052850022-24-m407ml.qq2
· elide run /tmp/u5t4l1hWe8msCY5yjIPn/f-17830
Advice
A`
example test: `test/built-ins/DataView/proto-from-ctor-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-nsm41f.m33 · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/u5t4l1hWe8msCY5yjIPn/f-1783052867701-24-nsm41f.m33km.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783052867701-24-nsm41f.m33
· elide run /tmp/u5t4l1hWe8msCY5yjIPn/f-17830
Advice
A`
example test: `test/built-ins/Proxy/get-fn-realm-recursive.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-o183hi.ql8 · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/jLjU4khk1SBc5rWbTAAr/f-1783053147992-24-o183hi.ql85m.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053147992-24-o183hi.ql8
· elide run /tmp/jLjU4khk1SBc5rWbTAAr/f-17830
Advice
A`
example test: `test/built-ins/Symbol/split/cross-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-onis6q.bs7 · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/loNk4H2UkAtPGSQt0Uua/f-1783053229028-24-onis6q.bs7yi.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053229028-24-onis6q.bs7
· elide run /tmp/loNk4H2UkAtPGSQt0Uua/f-17830
Advice
A`
example test: `test/language/types/reference/get-value-prop-base-primitive-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-oo5llh.4c6 · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/lUI3TOaIoCQcA9hy1cdt/f-1783053147998-24-oo5llh.4c63h.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053147998-24-oo5llh.4c6
· elide run /tmp/lUI3TOaIoCQcA9hy1cdt/f-17830
Advice
A`
example test: `test/built-ins/Symbol/split/cross-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-pygmc2.nt2 · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/86A2saDwubshge6uCobt/f-1783052845305-24-pygmc2.nt2qf.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783052845305-24-pygmc2.nt2
· elide run /tmp/86A2saDwubshge6uCobt/f-17830
Advice
A`
example test: `test/built-ins/AsyncDisposableStack/proto-from-ctor-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-qsewck.aea · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/jLjU4khk1SBc5rWbTAAr/f-1783053030822-24-qsewck.aeamb.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053030822-24-qsewck.aea
· elide run /tmp/jLjU4khk1SBc5rWbTAAr/f-17830
Advice
A`
example test: `test/built-ins/NativeErrors/TypeError/proto-from-ctor-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-r1a244.mf2 · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/BEABSxBrwrGPGjk8eJt8/f-1783053147282-24-r1a244.mf2pc.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053147282-24-r1a244.mf2
· elide run /tmp/BEABSxBrwrGPGjk8eJt8/f-17830
Advice
A`
example test: `test/built-ins/Symbol/iterator/cross-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-rqojjh.m75 · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/DqppJCgAc0sA3et5zVqL/f-1783052995907-24-rqojjh.m75hr.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783052995907-24-rqojjh.m75
· elide run /tmp/DqppJCgAc0sA3et5zVqL/f-17830
Advice
A`
example test: `test/built-ins/Array/of/proto-from-ctor-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-rtk54h.3by · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/BEABSxBrwrGPGjk8eJt8/f-1783053173565-24-rtk54h.3byjd.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053173565-24-rtk54h.3by
· elide run /tmp/BEABSxBrwrGPGjk8eJt8/f-17830
Advice
A`
example test: `test/language/expressions/class/private-static-field-multiple-evaluations-of-class-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-s9kd5a.c49 · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/z2t4O6TkNfABviDZKJNB/f-1783053146798-24-s9kd5a.c49vb.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053146798-24-s9kd5a.c49
· elide run /tmp/z2t4O6TkNfABviDZKJNB/f-17830
Advice
A`
example test: `test/built-ins/Symbol/asyncDispose/cross-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-tfhv2g.fc1 [js] createA`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/CcpbmQeOhbM6kSfuqpXQ/f-1783053173518-24-tfhv2g.fc1zr.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053173518-24-tfhv2g.fc1
[js] createAndInstantiateClass             f-178305317`
example test: `test/language/expressions/class/private-setter-brand-check-multiple-evaluations-of-class-realm-function-ctor.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-tyqtky.6gz · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/z2t4O6TkNfABviDZKJNB/f-1783053181198-24-tyqtky.6gz4k.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053181198-24-tyqtky.6gz
· elide run /tmp/z2t4O6TkNfABviDZKJNB/f-17830
Advice
A`
example test: `test/language/expressions/generators/eval-body-proto-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-u07krq.eif · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/z2t4O6TkNfABviDZKJNB/f-1783053147568-24-u07krq.eif8g.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053147568-24-u07krq.eif
· elide run /tmp/z2t4O6TkNfABviDZKJNB/f-17830
Advice
A`
example test: `test/built-ins/Symbol/match/cross-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-uav9xb.k21 · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/jbgzMwVp5oP2hxgP1Yd9/f-1783052866136-24-uav9xb.k21s9.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783052866136-24-uav9xb.k21
· elide run /tmp/jbgzMwVp5oP2hxgP1Yd9/f-17830
Advice
A`
example test: `test/built-ins/Promise/proto-from-ctor-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-ucl25r.3i6 · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/DqppJCgAc0sA3et5zVqL/f-1783052858005-24-ucl25r.3i6t9.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783052858005-24-ucl25r.3i6
· elide run /tmp/DqppJCgAc0sA3et5zVqL/f-17830
Advice
A`
example test: `test/built-ins/Function/call-bind-this-realm-value.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-vudoia.3dh · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/u5t4l1hWe8msCY5yjIPn/f-1783053122263-24-vudoia.3dhos.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053122263-24-vudoia.3dh
· elide run /tmp/u5t4l1hWe8msCY5yjIPn/f-17830
Advice
A`
example test: `test/built-ins/Proxy/construct/arguments-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-wnc0b0.kky · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/BBNpRXko784UqD29wHHc/f-1783053010720-24-wnc0b0.kkysp.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053010720-24-wnc0b0.kky
· elide run /tmp/BBNpRXko784UqD29wHHc/f-17830
Advice
A`
example test: `test/built-ins/Error/isError/non-error-objects-other-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-x7nq3q.h9v · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/jYsj7Mn1vwfAMdjEQ9Ys/f-1783053147445-24-x7nq3q.h9vw8.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053147445-24-x7nq3q.h9v
· elide run /tmp/jYsj7Mn1vwfAMdjEQ9Ys/f-17830
Advice
A`
example test: `test/built-ins/Symbol/keyFor/cross-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-xarxa7.gif · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/z2t4O6TkNfABviDZKJNB/f-1783053020512-24-xarxa7.gif9p.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053020512-24-xarxa7.gif
· elide run /tmp/z2t4O6TkNfABviDZKJNB/f-17830
Advice
A`
example test: `test/built-ins/JSON/stringify/value-bigint-cross-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-xymdb0.ylq · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/loNk4H2UkAtPGSQt0Uua/f-1783053122801-24-xymdb0.ylqdq.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053122801-24-xymdb0.ylq
· elide run /tmp/loNk4H2UkAtPGSQt0Uua/f-17830
Advice
A`
example test: `test/built-ins/Proxy/construct/trap-is-not-callable-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-ydi7qx.bfh · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/z2t4O6TkNfABviDZKJNB/f-1783052846805-24-ydi7qx.bfhhh.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783052846805-24-ydi7qx.bfh
· elide run /tmp/z2t4O6TkNfABviDZKJNB/f-17830
Advice
A`
example test: `test/built-ins/AsyncGeneratorFunction/proto-from-ctor-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-z5vsnh.hys · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/u5t4l1hWe8msCY5yjIPn/f-1783053030213-24-z5vsnh.hysa8.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053030213-24-z5vsnh.hys
· elide run /tmp/u5t4l1hWe8msCY5yjIPn/f-17830
Advice
A`
example test: `test/built-ins/NativeErrors/RangeError/proto-from-ctor-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-zfop1q.bfu · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/lUI3TOaIoCQcA9hy1cdt/f-1783053128489-24-zfop1q.bfunm.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053128489-24-zfop1q.bfu
· elide run /tmp/lUI3TOaIoCQcA9hy1cdt/f-17830
Advice
A`
example test: `test/built-ins/Proxy/revocable/tco-fn-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-zg9mep.4jp · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/CcpbmQeOhbM6kSfuqpXQ/f-1783053147262-24-zg9mep.4jpui.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053147262-24-zg9mep.4jp
· elide run /tmp/CcpbmQeOhbM6kSfuqpXQ/f-17830
Advice
A`
example test: `test/built-ins/Symbol/isConcatSpreadable/cross-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-zgik96.cwt · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/5KlzlRcfjFQsnilFAVvT/f-1783052992295-24-zgik96.cwtw9.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783052992295-24-zgik96.cwt
· elide run /tmp/5KlzlRcfjFQsnilFAVvT/f-17830
Advice
A`
example test: `test/built-ins/Array/from/proto-from-ctor-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-zhqxl4.iah · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/jLjU4khk1SBc5rWbTAAr/f-1783053146793-24-zhqxl4.iahij.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053146793-24-zhqxl4.iah
· elide run /tmp/jLjU4khk1SBc5rWbTAAr/f-17830
Advice
A`
example test: `test/built-ins/Symbol/asyncDispose/cross-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc>: (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-10c9u4v.qz · elide run`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/jbgzMwVp5oP2hxgP1Yd9/f-1783053147763-24-10c9u4v.qz2.js:
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053147763-24-10c9u4v.qz
· elide run /tmp/jbgzMwVp5oP2hxgP1Yd9/f-17830
Advice
A`
example test: `test/built-ins/Symbol/replace/cross-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc>: (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-2c84n1.7o4 · elide run`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/loNk4H2UkAtPGSQt0Uua/f-1783052846761-24-2c84n1.7o42.js:
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783052846761-24-2c84n1.7o4
· elide run /tmp/loNk4H2UkAtPGSQt0Uua/f-17830
Advice
A`
example test: `test/built-ins/AsyncGeneratorFunction/proto-from-ctor-realm-prototype.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc>: (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-4ufjvz.add [js] create`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/BEABSxBrwrGPGjk8eJt8/f-1783053173431-24-4ufjvz.addh.js:
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053173431-24-4ufjvz.add
[js] createAndInstantiateClass             f-178305317`
example test: `test/language/expressions/class/private-getter-brand-check-multiple-evaluations-of-class-realm-function-ctor.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc>: (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-92w9b1.eft · elide run`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/5KlzlRcfjFQsnilFAVvT/f-1783053030579-24-92w9b1.eftz.js:
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053030579-24-92w9b1.eft
· elide run /tmp/5KlzlRcfjFQsnilFAVvT/f-17830
Advice
A`
example test: `test/built-ins/NativeErrors/SyntaxError/proto-from-ctor-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc>: (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-a15kq9.6kw · elide run`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/BEABSxBrwrGPGjk8eJt8/f-1783052996106-24-a15kq9.6kwb.js:
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783052996106-24-a15kq9.6kw
· elide run /tmp/BEABSxBrwrGPGjk8eJt8/f-17830
Advice
A`
example test: `test/built-ins/Array/length/define-own-prop-length-overflow-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc>: (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-d7xqz9.qvj · elide run`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/BBNpRXko784UqD29wHHc/f-1783052846791-24-d7xqz9.qvjj.js:
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783052846791-24-d7xqz9.qvj
· elide run /tmp/BBNpRXko784UqD29wHHc/f-17830
Advice
A`
example test: `test/built-ins/AsyncGeneratorFunction/proto-from-ctor-realm-prototype.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc>: (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-fjww0e.b0b · elide run`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/u5t4l1hWe8msCY5yjIPn/f-1783052858965-24-fjww0e.b0bh.js:
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783052858965-24-fjww0e.b0b
· elide run /tmp/u5t4l1hWe8msCY5yjIPn/f-17830
Advice
A`
example test: `test/built-ins/Iterator/proto-from-ctor-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc>: (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-gmrpbc.1dl · elide run`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/jYsj7Mn1vwfAMdjEQ9Ys/f-1783052844833-24-gmrpbc.1dl2.js:
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783052844833-24-gmrpbc.1dl
· elide run /tmp/jYsj7Mn1vwfAMdjEQ9Ys/f-17830
Advice
A`
example test: `test/built-ins/ArrayBuffer/proto-from-ctor-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc>: (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-ins1tr.92u · elide run`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/lUI3TOaIoCQcA9hy1cdt/f-1783053126669-24-ins1tr.92u8.js:
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053126669-24-ins1tr.92u
· elide run /tmp/lUI3TOaIoCQcA9hy1cdt/f-17830
Advice
A`
example test: `test/built-ins/Proxy/isExtensible/trap-is-not-callable-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc>: (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-jlveit.zic · elide run`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/jYsj7Mn1vwfAMdjEQ9Ys/f-1783052880629-24-jlveit.zics.js:
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783052880629-24-jlveit.zic
· elide run /tmp/jYsj7Mn1vwfAMdjEQ9Ys/f-17830
Advice
A`
example test: `test/built-ins/RegExp/proto-from-ctor-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc>: (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-k2pg1v.hqe · elide run`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/jYsj7Mn1vwfAMdjEQ9Ys/f-1783053123097-24-k2pg1v.hqem.js:
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053123097-24-k2pg1v.hqe
· elide run /tmp/jYsj7Mn1vwfAMdjEQ9Ys/f-17830
Advice
A`
example test: `test/built-ins/Proxy/defineProperty/desc-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc>: (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-lab9de.vzx · elide run`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/jLjU4khk1SBc5rWbTAAr/f-1783052846811-24-lab9de.vzxj.js:
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783052846811-24-lab9de.vzx
· elide run /tmp/jLjU4khk1SBc5rWbTAAr/f-17830
Advice
A`
example test: `test/built-ins/AsyncGeneratorFunction/proto-from-ctor-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc>: (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-legpg1.d3u · elide run`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/lUI3TOaIoCQcA9hy1cdt/f-1783052857975-24-legpg1.d3us.js:
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783052857975-24-legpg1.d3u
· elide run /tmp/lUI3TOaIoCQcA9hy1cdt/f-17830
Advice
A`
example test: `test/built-ins/Function/call-bind-this-realm-undef.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc>: (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-mj4vl.npnp · elide run`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/5KlzlRcfjFQsnilFAVvT/f-1783053147067-24-mj4vl.npnpf.js:
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053147067-24-mj4vl.npnp
· elide run /tmp/5KlzlRcfjFQsnilFAVvT/f-17830
Advice
A`
example test: `test/built-ins/Symbol/for/cross-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc>: (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-n7nsq2.6th · elide run`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/DqppJCgAc0sA3et5zVqL/f-1783052842180-24-n7nsq2.6th7.js:
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783052842180-24-n7nsq2.6th
· elide run /tmp/DqppJCgAc0sA3et5zVqL/f-17830
Advice
A`
example test: `test/built-ins/AggregateError/proto-from-ctor-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc>: (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-nq1y81.xjs · elide run`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/lUI3TOaIoCQcA9hy1cdt/f-1783052867712-24-nq1y81.xjs3.js:
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783052867712-24-nq1y81.xjs
· elide run /tmp/lUI3TOaIoCQcA9hy1cdt/f-17830
Advice
A`
example test: `test/built-ins/Proxy/get-fn-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc>: (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-nz2uje.eiu · elide run`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/lUI3TOaIoCQcA9hy1cdt/f-1783052859898-24-nz2uje.eiue.js:
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783052859898-24-nz2uje.eiu
· elide run /tmp/lUI3TOaIoCQcA9hy1cdt/f-17830
Advice
A`
example test: `test/built-ins/Map/proto-from-ctor-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc>: (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-o3r2vc.zkk · elide run`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/jbgzMwVp5oP2hxgP1Yd9/f-1783053123464-24-o3r2vc.zkks.js:
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053123464-24-o3r2vc.zkk
· elide run /tmp/jbgzMwVp5oP2hxgP1Yd9/f-17830
Advice
A`
example test: `test/built-ins/Proxy/defineProperty/targetdesc-undefined-target-is-not-extensible-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc>: (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-pq8kge.fqq · elide run`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/DqppJCgAc0sA3et5zVqL/f-1783053129760-24-pq8kge.fqqa.js:
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053129760-24-pq8kge.fqq
· elide run /tmp/DqppJCgAc0sA3et5zVqL/f-17830
Advice
A`
example test: `test/built-ins/Proxy/setPrototypeOf/trap-is-not-callable-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc>: (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-qh2izt.p1u · elide run`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/z2t4O6TkNfABviDZKJNB/f-1783053122266-24-qh2izt.p1uf.js:
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053122266-24-qh2izt.p1u
· elide run /tmp/z2t4O6TkNfABviDZKJNB/f-17830
Advice
A`
example test: `test/built-ins/Proxy/construct/arguments-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc>: (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-rty8tb.b13 · elide run`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/BBNpRXko784UqD29wHHc/f-1783053148106-24-rty8tb.b13a.js:
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053148106-24-rty8tb.b13
· elide run /tmp/BBNpRXko784UqD29wHHc/f-17830
Advice
A`
example test: `test/built-ins/Symbol/toPrimitive/cross-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc>: (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-s2jdfv.tep · elide run`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/jbgzMwVp5oP2hxgP1Yd9/f-1783052867723-24-s2jdfv.tept.js:
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783052867723-24-s2jdfv.tep
· elide run /tmp/jbgzMwVp5oP2hxgP1Yd9/f-17830
Advice
A`
example test: `test/built-ins/Proxy/get-fn-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc>: (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-sfnmxj.0gi · elide run`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/u5t4l1hWe8msCY5yjIPn/f-1783053181211-24-sfnmxj.0gil.js:
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053181211-24-sfnmxj.0gi
· elide run /tmp/u5t4l1hWe8msCY5yjIPn/f-17830
Advice
A`
example test: `test/language/expressions/generators/eval-body-proto-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc>: (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-ulzv9l.1as · elide run`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/BBNpRXko784UqD29wHHc/f-1783053160779-24-ulzv9l.1asv.js:
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053160779-24-ulzv9l.1as
· elide run /tmp/BBNpRXko784UqD29wHHc/f-17830
Advice
A`
example test: `test/language/eval-code/indirect/realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc>: (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-v2wcsr.sd9 · elide run`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/CcpbmQeOhbM6kSfuqpXQ/f-1783052852844-24-v2wcsr.sd9x.js:
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783052852844-24-v2wcsr.sd9
· elide run /tmp/CcpbmQeOhbM6kSfuqpXQ/f-17830
Advice
A`
example test: `test/built-ins/Date/proto-from-ctor-realm-two.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc>: (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-v4e6ib.<n> · elide run`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/jLjU4khk1SBc5rWbTAAr/f-1783053122979-24-v4e6ib.536f.js:
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053122979-24-v4e6ib.536
· elide run /tmp/jLjU4khk1SBc5rWbTAAr/f-17830
Advice
A`
example test: `test/built-ins/Proxy/construct/trap-is-undefined-proto-from-newtarget-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc>: (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-vva032.y0v · elide run`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/5KlzlRcfjFQsnilFAVvT/f-1783053147609-24-vva032.y0vp.js:
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053147609-24-vva032.y0v
· elide run /tmp/5KlzlRcfjFQsnilFAVvT/f-17830
Advice
A`
example test: `test/built-ins/Symbol/matchAll/cross-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc>: (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-xihtyr.s1i · elide run`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/86A2saDwubshge6uCobt/f-1783053121843-24-xihtyr.s1i3.js:
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053121843-24-xihtyr.s1i
· elide run /tmp/86A2saDwubshge6uCobt/f-17830
Advice
A`
example test: `test/built-ins/Proxy/apply/arguments-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc>: (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-xoarb1.tsh · elide run`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/lUI3TOaIoCQcA9hy1cdt/f-1783053147311-24-xoarb1.tshu.js:
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053147311-24-xoarb1.tsh
· elide run /tmp/lUI3TOaIoCQcA9hy1cdt/f-17830
Advice
A`
example test: `test/built-ins/Symbol/iterator/cross-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc>: (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-y470h8.g1k · elide run`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/BEABSxBrwrGPGjk8eJt8/f-1783053122956-24-y470h8.g1kh.js:
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053122956-24-y470h8.g1k
· elide run /tmp/BEABSxBrwrGPGjk8eJt8/f-17830
Advice
A`
example test: `test/built-ins/Proxy/construct/trap-is-undefined-proto-from-cross-realm-newtarget.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc>: (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-zcd3oy.v7b · elide run`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/jYsj7Mn1vwfAMdjEQ9Ys/f-1783052862654-24-zcd3oy.v7bd.js:
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783052862654-24-zcd3oy.v7b
· elide run /tmp/jYsj7Mn1vwfAMdjEQ9Ys/f-17830
Advice
A`
example test: `test/built-ins/Number/proto-from-ctor-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc>: (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-zyzsha.s4w · elide run`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/jLjU4khk1SBc5rWbTAAr/f-1783052880633-24-zyzsha.s4wx.js:
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783052880633-24-zyzsha.s4w
· elide run /tmp/jLjU4khk1SBc5rWbTAAr/f-17830
Advice
A`
example test: `test/built-ins/RegExp/proto-from-ctor-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc>8ji.j (source excerpt suppressed) Stack Trace [js] createRealm <loc> · elide run /tmp/BEABS`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/BEABSxBrwrGPGjk8eJt8/f-1783053167798-24-11wrbum.js8ji.j
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783053167798-24-11wrbum.js
· elide run /tmp/BEABSxBrwrGPGjk8eJt8/f-17830
Advice
A`
example test: `test/language/expressions/async-generator/eval-body-proto-realm.js default`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file ../../../tmp/BBNpRXko784UqD29wHHc/f-<n>-<n>-1y8a553.2y6ef.j (source excerpt suppressed) St`

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/BBNpRXko784UqD29wHHc/f-1783052849277-24-1y8a553.2y6ef.j
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783052849277-24-1y8a553.2y
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/detached-buffer.js default`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-19hq9xs.dg `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/loNk4H2UkAtPGSQt0Uua/f-1783053153132-24-19hq9xs.dg0f.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783053153132-24-19hq9xs.dg
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/TypedArray/from/from-typedarray-into-itself-mapper-detaches-result.js strict mode`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-1tfhhgi.vf `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/BEABSxBrwrGPGjk8eJt8/f-1783053153123-24-1tfhhgi.vfqq.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783053153123-24-1tfhhgi.vf
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/TypedArray/from/from-typedarray-into-itself-mapper-detaches-result.js default`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-43nebz.iyx `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/loNk4H2UkAtPGSQt0Uua/f-1783053152901-24-43nebz.iyxv3.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783053152901-24-43nebz.iyx
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/TypedArray/from/from-array-mapper-detaches-result.js default`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-d4vznb.awc `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/u5t4l1hWe8msCY5yjIPn/f-1783052849304-24-d4vznb.awchi.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783052849304-24-d4vznb.awc
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/detached-buffer.js strict mode`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-unzfym.rl1 `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/u5t4l1hWe8msCY5yjIPn/f-1783053152953-24-unzfym.rl1rk.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783053152953-24-unzfym.rl1
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/TypedArray/from/from-array-mapper-detaches-result.js strict mode`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-xp5e1t.lwi `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/lUI3TOaIoCQcA9hy1cdt/f-1783053152968-24-xp5e1t.lwiu7.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783053152968-24-xp5e1t.lwi
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/TypedArray/from/from-typedarray-mapper-detaches-result.js default`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc>: (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-106y95c.xq`

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/jLjU4khk1SBc5rWbTAAr/f-1783053152971-24-106y95c.xq5.js:
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783053152971-24-106y95c.xq
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/TypedArray/from/from-typedarray-mapper-detaches-result.js strict mode`

### 1 × `Expected no error, got ReferenceError: test262Var is not defined`

distinct messages:
- `Expected no error, got ReferenceError: test262Var is not defined`
example test: `test/language/global-code/script-decl-lex-var-declared-via-eval.js strict mode`

### 1 × `Expected SameValue(«<str>», «"[object`

distinct messages:
- `Expected SameValue(«"function arguments() {}"», «"[object`
example test: `test/annexB/language/function-code/block-decl-func-skip-arguments.js default`

### 1 × `Expected SameValue(«undefined», «<n>») to be true`

distinct messages:
- `Expected SameValue(«undefined», «1») to be true`
example test: `test/language/global-code/script-decl-lex-var-declared-via-eval.js default`

### 1 × `Script Error java.lang.IllegalStateException: Recursive update In file ../../../tmp/DqppJCgAc0sA3et5zVqL/eval-self-once-module.mjs<loc> Stack Trace [js] :anonym`

distinct messages:
- `Script Error
java.lang.IllegalStateException: Recursive update
In file ../../../tmp/DqppJCgAc0sA3et5zVqL/eval-self-once-module.mjs:1779:1
Stack Trace
[js] :anonymous                                              <unknown>
· elide run /tmp/DqppJCgAc0sA3et5zVqL/eval-self-once-module.mjs
Advice
An error`
example test: `test/language/expressions/dynamic-import/eval-self-once-module.js default`

### 1 × `Script Error java.lang.IllegalStateException: Recursive update In file ../../../tmp/jLjU4khk1SBc5rWbTAAr/eval-self-once-module.mjs<loc> Stack Trace [js] :anonym`

distinct messages:
- `Script Error
java.lang.IllegalStateException: Recursive update
In file ../../../tmp/jLjU4khk1SBc5rWbTAAr/eval-self-once-module.mjs:1779:1
Stack Trace
[js] :anonymous                                              <unknown>
· elide run /tmp/jLjU4khk1SBc5rWbTAAr/eval-self-once-module.mjs
Advice
An error`
example test: `test/language/expressions/dynamic-import/eval-self-once-module.js strict mode`

## By feature

| count | feature |
|---:|---|
| 240 | cross-realm |
| 122 | await-dictionary |
| 104 | Reflect |
| 85 | Proxy |
| 74 | generators |
| 56 | Symbol |
| 44 | import-attributes |
| 36 | Symbol.iterator |
| 35 | tail-call-optimization |
| 24 | json-modules |
| 22 | source-phase-imports |
| 18 | dynamic-import |
| 17 | class |
| 14 | explicit-resource-management |
| 12 | Promise.allSettled |
| 10 | async-iteration |
| 10 | immutable-arraybuffer |
| 10 | import-bytes |
| 10 | import-text |
| 10 | Reflect.construct |
| 10 | top-level-await |
| 9 | class-methods-private |
| 8 | TypedArray |
| 6 | BigInt |
| 6 | source-phase-imports-module-source |
| 4 | arrow-function |
| 4 | Error.isError |
| 4 | export-star-as-namespace-from-module |
| 4 | globalThis |
| 4 | new.target |
| 4 | Promise.any |
| 4 | SharedArrayBuffer |
| 4 | Symbol.asyncIterator |
| 4 | Symbol.split |
| 4 | Symbol.toStringTag |
| 3 | class-static-methods-private |
| 2 | AggregateError |
| 2 | async-functions |
| 2 | coalesce-expression |
| 2 | FinalizationRegistry |
| 2 | hashbang |
| 2 | iterator-helpers |
| 2 | optional-chaining |
| 2 | promise-with-resolvers |
| 2 | RegExp.escape |
| 2 | Symbol.hasInstance |
| 2 | Symbol.isConcatSpreadable |
| 2 | Symbol.match |
| 2 | Symbol.matchAll |
| 2 | Symbol.replace |
| 2 | Symbol.search |
| 2 | Symbol.species |
| 2 | Symbol.unscopables |
| 2 | WeakRef |
| 1 | class-static-fields-private |
