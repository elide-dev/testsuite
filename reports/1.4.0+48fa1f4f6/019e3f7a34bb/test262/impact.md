# Impact-ordered failures

## By root-cause signature

### 445 × `Expected no error, got SyntaxError: <loc> Expected an operand but found export`

distinct messages:
- `Expected no error, got SyntaxError: instn-star-id-name.js:238:0 Expected an operand but found export`
- `Expected no error, got SyntaxError: instn-star-id-name.js:239:0 Expected an operand but found export`
- `Expected no error, got SyntaxError: await-import-evaluation_FIXTURE.js:7:0 Expected an operand but found export`
- `Expected no error, got SyntaxError: custom-tostring_FIXTURE.js:4:0 Expected an operand but found export`
- `Expected no error, got SyntaxError: eval-export-dflt-cls-anon.js:267:0 Expected an operand but found export`
example test: `test/language/module-code/instn-star-id-name.js default`

### 132 × `Expected no error, got SyntaxError: <loc> Expected an operand but found export export`

distinct messages:
- `Expected no error, got SyntaxError: dep_FIXTURE.js:4:0 Expected an operand but found export export`
example test: `test/language/import/import-defer/deferred-namespace-object/exotic-object-behavior.js default`

### 114 × `Error: $262.detachArrayBuffer not supported by the Elide host (Testing with Float64Array and makePassthrough.) In file <loc> (source excerpt suppressed) Stack T`

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host (Testing with
Float64Array and makePassthrough.)
In file ../../../tmp/0y42poOUCSHZGWcb5OOT/f-1783042295725-27-dp44j8.m9dw8.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042295725-27-dp44j8.m9d`
- `Error: $262.detachArrayBuffer not supported by the Elide host (Testing with
Float64Array and makePassthrough.)
In file ../../../tmp/qJaPKOB4f4gghotKTrBr/f-1783042295720-27-1z07jxs.qn0w.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042295720-27-1z07jxs.qn`
- `Error: $262.detachArrayBuffer not supported by the Elide host (Testing with
Float64Array and makePassthrough.)
In file ../../../tmp/hTOOosumwEHK0StV9C29/f-1783042296022-27-1wfijmm.k759.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042296022-27-1wfijmm.k7`
- `Error: $262.detachArrayBuffer not supported by the Elide host (Testing with
Float64Array and makePassthrough.)
In file ../../../tmp/qJaPKOB4f4gghotKTrBr/f-1783042296024-27-8e7mia.incyy.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042296024-27-8e7mia.inc`
- `Error: $262.detachArrayBuffer not supported by the Elide host (Testing with
Float64Array and makePassthrough.)
In file ../../../tmp/7o3Dll5PNwWGTbDBGxPG/f-1783042296359-27-1makko2.3jna.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042296359-27-1makko2.3j`
example test: `test/built-ins/TypedArray/prototype/Symbol.toStringTag/detached-buffer.js strict mode`

### 110 × `Error: $262.detachArrayBuffer not supported by the Elide host (Testing with BigInt64Array and makePassthrough.) In file <loc> (source excerpt suppressed) Stack `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host (Testing with
BigInt64Array and makePassthrough.)
In file ../../../tmp/0y42poOUCSHZGWcb5OOT/f-1783042306260-27-16qfo02.kimc.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042306260-27-16qfo02.k`
- `Error: $262.detachArrayBuffer not supported by the Elide host (Testing with
BigInt64Array and makePassthrough.)
In file ../../../tmp/J1OexIgqSkiwMqrj75aj/f-1783042306256-27-147uszo.03bg.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042306256-27-147uszo.0`
- `Error: $262.detachArrayBuffer not supported by the Elide host (Testing with
BigInt64Array and makePassthrough.)
In file ../../../tmp/7o3Dll5PNwWGTbDBGxPG/f-1783042474121-27-3cdpa8.jgwbq.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042474121-27-3cdpa8.jg`
- `Error: $262.detachArrayBuffer not supported by the Elide host (Testing with
BigInt64Array and makePassthrough.)
In file ../../../tmp/J1OexIgqSkiwMqrj75aj/f-1783042474118-27-1fws7t8.k7kj.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042474118-27-1fws7t8.k`
- `Error: $262.detachArrayBuffer not supported by the Elide host (Testing with
BigInt64Array and makePassthrough.)
In file ../../../tmp/6VDeeDx968HdVk60WPQF/f-1783042474223-27-1gk70dd.zqca.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042474223-27-1gk70dd.z`
example test: `test/built-ins/TypedArrayConstructors/ctors-bigint/buffer-arg/detachedbuffer.js strict mode`

### 110 × `Expected no error, got TypeError: Cannot read property <str> of undefined`

distinct messages:
- `Expected no error, got TypeError: Cannot read property 'constructor' of undefined`
- `Expected no error, got TypeError: Cannot read property 'next' of undefined`
- `Expected no error, got TypeError: Cannot read property 'return' of undefined`
- `Expected no error, got TypeError: Cannot read property 'throw' of undefined`
- `Expected no error, got TypeError: Cannot read property 'call' of undefined`
example test: `test/built-ins/GeneratorPrototype/constructor.js default`

### 96 × `Test262Error: Expected SameValue(«<str>», «<str>») to be true`

distinct messages:
- `Test262Error: Expected SameValue(«"Error"», «"URIError"») to be true`
- `Test262Error: Expected SameValue(«"TypeError"», «"SyntaxError"») to be true`
example test: `test/language/expressions/dynamic-import/catch/nested-arrow-import-catch-eval-rqstd-abrupt-urierror.js strict mode`

### 86 × `Expected no error, got SyntaxError: <loc> Expected an operand but`

distinct messages:
- `Expected no error, got SyntaxError: eval-export-dflt-cls-named.js:243:0 Expected an operand but`
- `Expected no error, got SyntaxError: eval-export-dflt-cls-named.js:242:0 Expected an operand but`
- `Expected no error, got SyntaxError: eval-export-dflt-cls-name-meth.js:243:0 Expected an operand but`
- `Expected no error, got SyntaxError: eval-export-dflt-cls-name-meth.js:242:0 Expected an operand but`
- `Expected no error, got SyntaxError: eval-export-dflt-expr-cls-anon.js:241:0 Expected an operand but`
example test: `test/language/module-code/eval-export-dflt-cls-named.js strict mode`

### 84 × `No global <str> binding Expected SameValue(«true»,`

distinct messages:
- `No global 'arguments' binding Expected SameValue(«true»,`
example test: `test/language/eval-code/direct/func-decl-a-following-parameter-is-named-arguments-declare-arguments.js default`

### 82 × `Uncaught (in promise) TypeError: Module not found: <str>`

distinct messages:
- `Uncaught (in promise) TypeError: Module not found: './dynamic-import-module_FIXTURE.js'`
- `Uncaught (in promise) TypeError: Module not found: './empty_FIXTURE.js'`
- `Uncaught (in promise) TypeError: Module not found: '<module source>'`
example test: `test/language/expressions/dynamic-import/returns-promise.js default`

### 68 × `Expected no error, got SyntaxError: <loc> Expected an operand but found`

distinct messages:
- `Expected no error, got SyntaxError: eval-export-dflt-cls-anon.js:242:0 Expected an operand but found`
- `Expected no error, got SyntaxError: eval-export-dflt-cls-anon.js:243:0 Expected an operand but found`
- `Expected no error, got SyntaxError: eval-export-dflt-expr-in.js:237:0 Expected an operand but found`
- `Expected no error, got SyntaxError: eval-export-dflt-expr-in.js:238:0 Expected an operand but found`
- `Expected no error, got SyntaxError: eval-rqstd-once_FIXTURE.js:4:0 Expected an operand but found`
example test: `test/language/module-code/eval-export-dflt-cls-anon.js default`

### 44 × `Expected no error, got TypeError: Module not found: <str>`

distinct messages:
- `Expected no error, got TypeError: Module not found: './text-empty_FIXTURE'`
- `Expected no error, got TypeError: Module not found: './text-string_FIXTURE'`
- `Expected no error, got TypeError: Module not found: './bytes-from-empty_FIXTURE.bin'`
- `Expected no error, got TypeError: Module not found: './text-via-namespace_FIXTURE'`
- `Expected no error, got TypeError: Module not found: './bytes-from-txt_FIXTURE.txt'`
example test: `test/language/import/import-attributes/text-empty.js default`

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
example test: `test/built-ins/Promise/allSettledKeyed/arg-is-function.js strict mode`

### 30 × `Expected no error, got SyntaxError: <loc> Expected an operand but found import`

distinct messages:
- `Expected no error, got SyntaxError: eval-self-once.js:254:0 Expected an operand but found import`
- `Expected no error, got SyntaxError: eval-self-once.js:255:0 Expected an operand but found import`
- `Expected no error, got SyntaxError: instn-star-binding.js:245:0 Expected an operand but found import`
- `Expected no error, got SyntaxError: instn-star-binding.js:244:0 Expected an operand but found import`
- `Expected no error, got SyntaxError: verify-dfs-a_FIXTURE.js:4:0 Expected an operand but found import`
example test: `test/language/module-code/eval-self-once.js default`

### 30 × `Uncaught (in promise) {message: <str>}`

distinct messages:
- `Uncaught (in promise) {message: ""}`
example test: `test/built-ins/Promise/all/capability-resolve-throws-no-close.js default`

### 26 × `Expected no error, got SyntaxError: <loc> Expected an`

distinct messages:
- `Expected no error, got SyntaxError: eval-gtbndng-indirect-trlng-comma_FIXTURE.js:4:0 Expected an`
- `Expected no error, got SyntaxError: eval-gtbndng-indirect-update-dflt_FIXTURE.js:4:0 Expected an`
- `Expected no error, got SyntaxError: eval-gtbndng-indirect-update-as_FIXTURE.js:5:0 Expected an`
- `Expected no error, got SyntaxError: instn-star-props-dflt-skip-star-named_FIXTURE.js:4:0 Expected an`
- `Expected no error, got SyntaxError: namespace-export-star-as-from-1_FIXTURE.js:4:0 Expected an`
example test: `test/language/module-code/eval-gtbndng-indirect-trlng-comma.js default`

### 26 × `Expected no error, got TypeError: JSON packages not supported.`

distinct messages:
- `Expected no error, got TypeError: JSON packages not supported.`
example test: `test/language/import/import-attributes/json-extensibility-object.js default`

### 26 × `Uncaught (in promise) TypeError: Cannot convert object to primitive value`

distinct messages:
- `Uncaught (in promise) TypeError: Cannot convert object to primitive value`
example test: `test/language/expressions/dynamic-import/catch/nested-arrow-import-catch-eval-script-code-target.js strict mode`

### 23 × `Error: $262.detachArrayBuffer not supported by the Elide host (Testing with BigInt64Array and makePassthrough.) In file <loc>: (source excerpt suppressed) Stack`

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host (Testing with
BigInt64Array and makePassthrough.)
In file ../../../tmp/LBscudCSq1vFX7P6ipyC/f-1783042474327-27-zk4yut.fza1.js:
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042474327-27-zk4yut.fz`
- `Error: $262.detachArrayBuffer not supported by the Elide host (Testing with
BigInt64Array and makePassthrough.)
In file ../../../tmp/C5P3vBG632jHBGNCXrtz/f-1783042474640-27-qz1ovw.6b2k.js:
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042474640-27-qz1ovw.6b`
- `Error: $262.detachArrayBuffer not supported by the Elide host (Testing with
BigInt64Array and makePassthrough.)
In file ../../../tmp/qH4j7LVPF4kNUXvjyjzL/f-1783042474979-27-ueoqsm.qk1c.js:
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042474979-27-ueoqsm.qk`
- `Error: $262.detachArrayBuffer not supported by the Elide host (Testing with
BigInt64Array and makePassthrough.)
In file ../../../tmp/qJaPKOB4f4gghotKTrBr/f-1783042474982-27-ootr7u.qfs9.js:
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042474982-27-ootr7u.qf`
- `Error: $262.detachArrayBuffer not supported by the Elide host (Testing with
BigInt64Array and makePassthrough.)
In file ../../../tmp/C5P3vBG632jHBGNCXrtz/f-1783042475181-27-1d9nxmy.gu6.js:
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042475181-27-1d9nxmy.g`
example test: `test/built-ins/TypedArray/prototype/copyWithin/BigInt/detached-buffer.js default`

### 22 × `Expected no error, got SyntaxError: <loc> Expected an operand`

distinct messages:
- `Expected no error, got SyntaxError: eval-export-dflt-expr-cls-name-meth.js:243:0 Expected an operand`
- `Expected no error, got SyntaxError: eval-export-dflt-expr-cls-name-meth.js:244:0 Expected an operand`
- `Expected no error, got SyntaxError: eval-gtbndng-indirect-update_FIXTURE.js:5:0 Expected an operand`
- `Expected no error, got SyntaxError: export-expname-binding-index_FIXTURE.js:6:0 Expected an operand`
- `Expected no error, got SyntaxError: export-expname-from-binding-string.js:232:0 Expected an operand`
example test: `test/language/module-code/eval-export-dflt-expr-cls-name-meth.js default`

### 21 × `Error: $262.detachArrayBuffer not supported by the Elide host (Testing with Float64Array and makePassthrough.) In file <loc>: (source excerpt suppressed) Stack `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host (Testing with
Float64Array and makePassthrough.)
In file ../../../tmp/7o3Dll5PNwWGTbDBGxPG/f-1783042296666-27-mg8ei8.av7j.js:
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042296666-27-mg8ei8.av7`
- `Error: $262.detachArrayBuffer not supported by the Elide host (Testing with
Float64Array and makePassthrough.)
In file ../../../tmp/C5P3vBG632jHBGNCXrtz/f-1783042297160-27-vgk55a.jo13.js:
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042297160-27-vgk55a.jo1`
- `Error: $262.detachArrayBuffer not supported by the Elide host (Testing with
Float64Array and makePassthrough.)
In file ../../../tmp/qH4j7LVPF4kNUXvjyjzL/f-1783042298752-27-l8eniq.9c28.js:
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042298752-27-l8eniq.9c2`
- `Error: $262.detachArrayBuffer not supported by the Elide host (Testing with
Float64Array and makePassthrough.)
In file ../../../tmp/j15nCMoGHUiPJahp9tTh/f-1783042299178-27-jjoqk8.cin6.js:
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042299178-27-jjoqk8.cin`
- `Error: $262.detachArrayBuffer not supported by the Elide host (Testing with
Float64Array and makePassthrough.)
In file ../../../tmp/LBscudCSq1vFX7P6ipyC/f-1783042299466-27-kusl37.b16v.js:
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042299466-27-kusl37.b16`
example test: `test/built-ins/TypedArray/prototype/entries/detached-buffer.js default`

### 20 × `Expected no error, got TypeError: Cannot convert undefined or null to object: undefined`

distinct messages:
- `Expected no error, got TypeError: Cannot convert undefined or null to object: undefined`
example test: `test/built-ins/GeneratorPrototype/next/property-descriptor.js strict mode`

### 20 × `Expected no error, got TypeError: Constructor EventTarget requires <str>`

distinct messages:
- `Expected no error, got TypeError: Constructor EventTarget requires 'new'`
example test: `test/built-ins/GeneratorFunction/instance-construct-throws.js default`

### 20 × `Uncaught (in promise) TypeError: Invalid module specifier: <str>`

distinct messages:
- `Uncaught (in promise) TypeError: Invalid module specifier: ''`
example test: `test/language/expressions/dynamic-import/syntax/valid/nested-block-empty-str-is-valid-assign-expr.js default`

### 20 × `Uncaught (in promise) TypeError: Module not found: <str> Uncaught (in promise) TypeError: Module not found: <str>`

distinct messages:
- `Uncaught (in promise) TypeError: Module not found: '[object Promise]'
Uncaught (in promise) TypeError: Module not found: '[object Promise]'`
example test: `test/language/expressions/dynamic-import/syntax/valid/nested-block-labeled-nested-imports.js strict mode`

### 19 × `Expected a TypeError to be thrown but no exception was thrown`

distinct messages:
- `Expected a TypeError to be thrown but no exception was thrown`
example test: `test/built-ins/GeneratorFunction/instance-restricted-properties.js default`

### 16 × `<str> throws TypeError Expected a TypeError but got`

distinct messages:
- `ʼsample.slice()ʼ throws TypeError Expected a TypeError but got`
example test: `test/built-ins/TypedArray/prototype/slice/detached-buffer-custom-ctor-other-targettype.js default`

### 16 × `Expected SameValue(«<str>», «<str>») to be true`

distinct messages:
- `Expected SameValue(«"undefined"», «"function"») to be true`
example test: `test/built-ins/AbstractModuleSource/name.js default`

### 12 × `Expected a TypeError but got a Error (Testing with Float64Array`

distinct messages:
- `Expected a TypeError but got a Error (Testing with Float64Array`
example test: `test/built-ins/ArrayIteratorPrototype/next/detach-typedarray-in-progress.js default`

### 12 × `Expected SameValue(«[object Object]», «null») to be true`

distinct messages:
- `Expected SameValue(«[object Object]», «null») to be true`
example test: `test/annexB/built-ins/String/prototype/match/custom-matcher-emulates-undefined.js default`

### 10 × `Expected a TypeError but got a Error (Testing with`

distinct messages:
- `Expected a TypeError but got a Error (Testing with`
example test: `test/built-ins/TypedArrayConstructors/ctors-bigint/buffer-arg/byteoffset-to-number-detachbuffer.js strict mode`

### 10 × `Expected no error, got SyntaxError: <loc> await is only valid in`

distinct messages:
- `Expected no error, got SyntaxError: module-import-resolution_FIXTURE.js:4:0 await is only valid in`
- `Expected no error, got SyntaxError: module-import-unwrapped_FIXTURE.js:4:0 await is only valid in`
example test: `test/language/module-code/top-level-await/await-dynamic-import-resolution.js default`

### 10 × `Expected no error, got SyntaxError: <loc> Expected`

distinct messages:
- `Expected no error, got SyntaxError: instn-star-props-dflt-skip-star-as-named_FIXTURE.js:4:0 Expected`
- `Expected no error, got SyntaxError: instn-star-iee-multi-cycle-same-name-a_FIXTURE.js:4:0 Expected`
- `Expected no error, got SyntaxError: instn-star-iee-single-cycle-same-name-a_FIXTURE.js:4:0 Expected`
- `Expected no error, got SyntaxError: instn-star-props-dflt-keep-local-named_FIXTURE.js:5:0 Expected`
- `Expected no error, got SyntaxError: pending-async-dep-from-cycle_cycle-root_FIXTURE.js:4:0 Expected`
example test: `test/language/module-code/instn-star-as-props-dflt-skip.js default`

### 8 × `Error: $262.detachArrayBuffer not supported by the Elide host (Testing with Float64Array and makeArrayBuffer.) In file <loc> (source excerpt suppressed) Stack T`

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host (Testing with
Float64Array and makeArrayBuffer.)
In file ../../../tmp/qH4j7LVPF4kNUXvjyjzL/f-1783042295935-27-1g7j81q.ars8.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042295935-27-1g7j81q.ar`
- `Error: $262.detachArrayBuffer not supported by the Elide host (Testing with
Float64Array and makeArrayBuffer.)
In file ../../../tmp/LBscudCSq1vFX7P6ipyC/f-1783042295933-27-v9ocvh.5taeq.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042295933-27-v9ocvh.5ta`
- `Error: $262.detachArrayBuffer not supported by the Elide host (Testing with
Float64Array and makeArrayBuffer.)
In file ../../../tmp/b109I3WwGYiitho3Z7CS/f-1783042296145-27-1phlx2u.l3ge.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042296145-27-1phlx2u.l3`
- `Error: $262.detachArrayBuffer not supported by the Elide host (Testing with
Float64Array and makeArrayBuffer.)
In file ../../../tmp/6VDeeDx968HdVk60WPQF/f-1783042296143-27-1g52mbu.2jx2.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042296143-27-1g52mbu.2j`
- `Error: $262.detachArrayBuffer not supported by the Elide host (Testing with
Float64Array and makeArrayBuffer.)
In file ../../../tmp/LBscudCSq1vFX7P6ipyC/f-1783042303310-27-57jrnm.fdluu.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042303310-27-57jrnm.fdl`
example test: `test/built-ins/TypedArray/prototype/buffer/detached-buffer.js strict mode`

### 8 × `Expected a TypeError but got a Error`

distinct messages:
- `Expected a TypeError but got a Error`
example test: `test/built-ins/DataView/custom-proto-access-detaches-buffer.js default`

### 8 × `Expected no error, got SyntaxError: <loc>`

distinct messages:
- `Expected no error, got SyntaxError: instn-star-props-dflt-keep-indirect-reexport_FIXTURE.js:4:0`
- `Expected no error, got SyntaxError: import-and-export-propagates-binding_export-from_FIXTURE.js:4:0`
- `Expected no error, got SyntaxError: namespace-import-source-and-export-reexport_FIXTURE.js:4:0`
- `Expected no error, got SyntaxError: unobservable-global-async-evaluation-count-reset-setup_FIXTURE.js:4:0`
example test: `test/language/module-code/instn-star-props-dflt-keep-indirect.js strict mode`

### 8 × `Expected no error, got SyntaxError: <loc> Expected an operand but found import import`

distinct messages:
- `Expected no error, got SyntaxError: instn-once.js:241:0 Expected an operand but found import import`
- `Expected no error, got SyntaxError: instn-once.js:240:0 Expected an operand but found import import`
- `Expected no error, got SyntaxError: text-self.js:223:0 Expected an operand but found import import`
- `Expected no error, got SyntaxError: text-self.js:224:0 Expected an operand but found import import`
- `Expected no error, got SyntaxError: dep-1_FIXTURE.js:4:0 Expected an operand but found import import`
example test: `test/language/module-code/instn-once.js strict mode`

### 8 × `Expected true but got false`

distinct messages:
- `Expected true but got false`
example test: `test/built-ins/Promise/allKeyed/extensible.js default`

### 6 × `Conforms to NativeFunction Syntax: <str>`

distinct messages:
- `Conforms to NativeFunction Syntax: "[object EventTarget]"`
example test: `test/built-ins/Function/prototype/toString/generator-function-expression.js default`

### 6 × `Expected no error, got ReferenceError: unresolved is not defined`

distinct messages:
- `Expected no error, got ReferenceError: unresolved is not defined`
example test: `test/annexB/language/expressions/conditional/emulates-undefined.js strict mode`

### 6 × `Expected SameValue(«[object Generator]», «undefined») to be`

distinct messages:
- `Expected SameValue(«[object Generator]», «undefined») to be`
example test: `test/language/expressions/generators/default-proto.js default`

### 6 × `should throw TypeError as array is detached Expected a`

distinct messages:
- `should throw TypeError as array is detached Expected a`
example test: `test/built-ins/TypedArray/prototype/copyWithin/coerced-values-end-detached-prototype.js strict mode`

### 6 × `Uncaught (in promise) Error`

distinct messages:
- `Uncaught (in promise) Error`
example test: `test/built-ins/Promise/allSettled/invoke-resolve-error-close.js default`

### 6 × `Uncaught (in promise) undefined`

distinct messages:
- `Uncaught (in promise) undefined`
example test: `test/built-ins/Promise/reject/ctx-ctor.js strict mode`

### 4 × `[object Object]`

distinct messages:
- `[object Object]`
example test: `test/language/expressions/dynamic-import/catch/nested-async-gen-await-eval-script-code-target.js strict mode`

### 4 × `asyncTest called without async flag`

distinct messages:
- `asyncTest called without async flag`
example test: `test/language/import/import-defer/errors/module-throws/defer-import-after-evaluation.js strict mode`

### 4 × `brandNew descriptor should not be configurable`

distinct messages:
- `brandNew descriptor should not be configurable`
example test: `test/language/global-code/script-decl-func.js strict mode`

### 4 × `executor not called at all Expected SameValue(«<str>», «<str>») to`

distinct messages:
- `executor not called at all Expected SameValue(«""», «"a"») to`
example test: `test/built-ins/Promise/allKeyed/capability-executor-not-callable.js strict mode`

### 4 × `Expected a SyntaxError to be thrown but no exception was thrown`

distinct messages:
- `Expected a SyntaxError to be thrown but no exception was thrown`
example test: `test/language/global-code/script-decl-lex-restricted-global.js default`

### 4 × `Expected a Test262Error but got a TypeError`

distinct messages:
- `Expected a Test262Error but got a TypeError`
example test: `test/built-ins/Promise/allKeyed/ctx-ctor-throws.js default`

### 4 × `Expected no error, got TypeError: Object is not disposable`

distinct messages:
- `Expected no error, got TypeError: Object is not disposable`
example test: `test/language/statements/await-using/fn-name-gen.js default`

### 4 × `Expected SameValue(«[object Object]», «function () { [native`

distinct messages:
- `Expected SameValue(«[object Object]», «function () { [native`
example test: `test/language/expressions/generators/prototype-relation-to-function.js strict mode`

### 4 × `Expected SameValue(«false», «true») to be true (Testing with`

distinct messages:
- `Expected SameValue(«false», «true») to be true (Testing with`
example test: `test/built-ins/TypedArrayConstructors/internals/GetOwnProperty/index-prop-desc.js default`

### 4 × `Expected SameValue(«function () { return {}; }», «<n>») to be`

distinct messages:
- `Expected SameValue(«function () { return {}; }», «2») to be`
example test: `test/annexB/language/expressions/logical-assignment/emulates-undefined-or.js default`

### 4 × `Expected test to throw error of type SyntaxError, got TypeError: JSON packages not supported.`

distinct messages:
- `Expected test to throw error of type SyntaxError, got TypeError: JSON packages not supported.`
example test: `test/language/import/import-attributes/json-invalid.js strict mode`

### 4 × `Expected test to throw error of type TypeError, got SyntaxError: <loc> Expected an operand`

distinct messages:
- `Expected test to throw error of type TypeError, got SyntaxError: module-import-rejection-body_FIXTURE.js:4:0 Expected an operand`
example test: `test/language/module-code/top-level-await/await-dynamic-import-rejection.js strict mode`

### 4 × `isConstructor invoked with a non-function value`

distinct messages:
- `isConstructor invoked with a non-function value`
example test: `test/built-ins/Promise/allKeyed/not-a-constructor.js strict mode`

### 4 × `Test262Error: BigInt Expected a TypeError to be thrown asynchronously but the function threw synchronously`

distinct messages:
- `Test262Error: BigInt Expected a TypeError to be thrown asynchronously but the function threw synchronously`
example test: `test/built-ins/Promise/allKeyed/arg-not-object-reject-bigint.js default`

### 4 × `Test262Error: Expected a TypeError to be thrown asynchronously but the function threw synchronously`

distinct messages:
- `Test262Error: Expected a TypeError to be thrown asynchronously but the function threw synchronously`
example test: `test/built-ins/Promise/allKeyed/resolve-not-callable-reject-with-typeerror.js default`

### 4 × `Test262Error: undefined Expected a TypeError to be thrown asynchronously but the function threw synchronously`

distinct messages:
- `Test262Error: undefined Expected a TypeError to be thrown asynchronously but the function threw synchronously`
example test: `test/built-ins/Promise/allKeyed/arg-not-object-reject.js default`

### 4 × `Uncaught (in promise) AggregateError`

distinct messages:
- `Uncaught (in promise) AggregateError`
example test: `test/built-ins/Promise/any/ctx-ctor.js strict mode`

### 3 × `Error: $262.detachArrayBuffer not supported by the Elide host (Testing with BigInt64Array and makeArrayBuffer.) In file <loc> (source excerpt suppressed) Stack `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host (Testing with
BigInt64Array and makeArrayBuffer.)
In file ../../../tmp/j15nCMoGHUiPJahp9tTh/f-1783042474208-27-12ybgik.r6es.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042474208-27-12ybgik.r`
- `Error: $262.detachArrayBuffer not supported by the Elide host (Testing with
BigInt64Array and makeArrayBuffer.)
In file ../../../tmp/LBscudCSq1vFX7P6ipyC/f-1783042474210-27-1hnwh2w.yp4m.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042474210-27-1hnwh2w.y`
- `Error: $262.detachArrayBuffer not supported by the Elide host (Testing with
BigInt64Array and makeArrayBuffer.)
In file ../../../tmp/0y42poOUCSHZGWcb5OOT/f-1783042474264-27-1bp4brc.3ool.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042474264-27-1bp4brc.3`
example test: `test/built-ins/TypedArray/prototype/buffer/BigInt/detached-buffer.js default`

### 3 × `Error: $262.detachArrayBuffer not supported by the Elide host (Testing with BigInt64Array and makePassthrough.) In file ../../../tmp/J1OexIgqSkiwMqrj75aj/f-<n>-`

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host (Testing with
BigInt64Array and makePassthrough.)
In file ../../../tmp/J1OexIgqSkiwMqrj75aj/f-1783042475196-27-1qt5xa.u1uyzi.j
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042475196-27-1qt5xa.u1`
- `Error: $262.detachArrayBuffer not supported by the Elide host (Testing with
BigInt64Array and makePassthrough.)
In file ../../../tmp/J1OexIgqSkiwMqrj75aj/f-1783042479021-27-1sei207.n6nyg.j
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042479021-27-1sei207.n`
- `Error: $262.detachArrayBuffer not supported by the Elide host (Testing with
BigInt64Array and makePassthrough.)
In file ../../../tmp/J1OexIgqSkiwMqrj75aj/f-1783042479305-27-1gjup01.93ppf.j
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042479305-27-1gjup01.9`
example test: `test/built-ins/TypedArray/prototype/find/BigInt/detached-buffer.js strict mode`

### 3 × `Expected no error, got ReferenceError: test262let is not defined`

distinct messages:
- `Expected no error, got ReferenceError: test262let is not defined`
example test: `test/language/global-code/script-decl-lex-deletion.js default`

### 3 × `Expected SameValue(«<str>», «"[object`

distinct messages:
- `Expected SameValue(«"function arguments() {}"», «"[object`
- `Expected SameValue(«"[object EventTarget]"», «"[object`
example test: `test/annexB/language/function-code/block-decl-func-skip-arguments.js default`

### 2 × `!= with <str> Expected SameValue(«true», «false») to be`

distinct messages:
- `!= with ʼundefinedʼ Expected SameValue(«true», «false») to be`
example test: `test/annexB/language/expressions/does-not-equals/emulates-undefined.js strict mode`

### 2 × `<str> binding Expected a SyntaxError to be thrown but no`

distinct messages:
- `ʼletʼ binding Expected a SyntaxError to be thrown but no`
example test: `test/language/global-code/script-decl-lex-lex.js default`

### 2 × `<str> on <str> binding Expected a SyntaxError to be thrown but`

distinct messages:
- `ʼvarʼ on ʼletʼ binding Expected a SyntaxError to be thrown but`
example test: `test/language/global-code/script-decl-var-collision.js strict mode`

### 2 × `<str> throws Test262Error Expected a Test262Error`

distinct messages:
- `ʼsample["0"] = objʼ throws Test262Error Expected a Test262Error`
example test: `test/built-ins/TypedArrayConstructors/internals/Set/BigInt/tonumber-value-throws.js default`

### 2 × `== with <str>`

distinct messages:
- `== with ʼundefinedʼ`
example test: `test/annexB/language/expressions/equals/emulates-undefined.js default`

### 2 × `=== <str>`

distinct messages:
- `=== "undefined"`
example test: `test/annexB/language/expressions/typeof/emulates-undefined.js default`

### 2 × `All globalThis properties must be configurable Expected`

distinct messages:
- `All globalThis properties must be configurable Expected`
example test: `test/built-ins/ShadowRealm/prototype/evaluate/globalthis-config-only-properties.js strict mode`

### 2 × `allKeyed should be an own property`

distinct messages:
- `allKeyed should be an own property`
example test: `test/built-ins/Promise/allKeyed/prop-desc.js default`

### 2 × `allSettledKeyed should be an own property`

distinct messages:
- `allSettledKeyed should be an own property`
example test: `test/built-ins/Promise/allSettledKeyed/prop-desc.js default`

### 2 × `Conforms to NativeFunction Syntax: <str> (* /*`

distinct messages:
- `Conforms to NativeFunction Syntax: "[object EventTarget]" (* /*`
example test: `test/built-ins/Function/prototype/toString/generator-method.js default`

### 2 × `constructor descriptor should not be writable`

distinct messages:
- `constructor descriptor should not be writable`
example test: `test/built-ins/GeneratorFunction/prototype/constructor.js default`

### 2 × `Detachment when coercing end should throw TypeError Expected a`

distinct messages:
- `Detachment when coercing end should throw TypeError Expected a`
example test: `test/built-ins/TypedArray/prototype/fill/coerced-end-detach.js strict mode`

### 2 × `Detachment when coercing start should throw TypeError Expected`

distinct messages:
- `Detachment when coercing start should throw TypeError Expected`
example test: `test/built-ins/TypedArray/prototype/fill/coerced-start-detach.js strict mode`

### 2 × `Detachment when coercing value should throw TypeError Expected`

distinct messages:
- `Detachment when coercing value should throw TypeError Expected`
example test: `test/built-ins/TypedArray/prototype/fill/coerced-value-detach.js default`

### 2 × `Error: $262.detachArrayBuffer not supported by the Elide host (Testing with BigInt64Array and makePassthrough.) In file ../../../tmp/6VDeeDx968HdVk60WPQF/f-<n>-`

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host (Testing with
BigInt64Array and makePassthrough.)
In file ../../../tmp/6VDeeDx968HdVk60WPQF/f-1783042478543-27-18ibuol.qtc5h.j
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042478543-27-18ibuol.q`
- `Error: $262.detachArrayBuffer not supported by the Elide host (Testing with
BigInt64Array and makePassthrough.)
In file ../../../tmp/6VDeeDx968HdVk60WPQF/f-1783042479129-27-1ezv3b6.rjqag.j
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042479129-27-1ezv3b6.r`
example test: `test/built-ins/TypedArrayConstructors/internals/DefineOwnProperty/BigInt/detached-buffer-throws.js default`

### 2 × `Error: $262.detachArrayBuffer not supported by the Elide host (Testing with BigInt64Array and makePassthrough.) In file ../../../tmp/LBscudCSq1vFX7P6ipyC/f-<n>-`

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host (Testing with
BigInt64Array and makePassthrough.)
In file ../../../tmp/LBscudCSq1vFX7P6ipyC/f-1783042476281-27-12luwy6.rqlch.j
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042476281-27-12luwy6.r`
- `Error: $262.detachArrayBuffer not supported by the Elide host (Testing with
BigInt64Array and makePassthrough.)
In file ../../../tmp/LBscudCSq1vFX7P6ipyC/f-1783042478931-27-1uqsb7x.88puj.j
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042478931-27-1uqsb7x.8`
example test: `test/built-ins/TypedArray/prototype/length/BigInt/detached-buffer.js default`

### 2 × `Error: $262.detachArrayBuffer not supported by the Elide host (Testing with BigInt64Array and makePassthrough.) In file ../../../tmp/qH4j7LVPF4kNUXvjyjzL/f-<n>-`

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host (Testing with
BigInt64Array and makePassthrough.)
In file ../../../tmp/qH4j7LVPF4kNUXvjyjzL/f-1783042478545-27-1ywtb71.3lp9l.j
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042478545-27-1ywtb71.3`
- `Error: $262.detachArrayBuffer not supported by the Elide host (Testing with
BigInt64Array and makePassthrough.)
In file ../../../tmp/qH4j7LVPF4kNUXvjyjzL/f-1783042479127-27-1qxs8u3.ml9tl.j
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042479127-27-1qxs8u3.m`
example test: `test/built-ins/TypedArrayConstructors/internals/DefineOwnProperty/BigInt/detached-buffer-throws.js strict mode`

### 2 × `Error: $262.detachArrayBuffer not supported by the Elide host (Testing with Float64Array and makePassthrough.) In file ../../../tmp/0tGETYiHwgNWKpDLR3IZ/f-<n>-<`

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host (Testing with
Float64Array and makePassthrough.)
In file ../../../tmp/0tGETYiHwgNWKpDLR3IZ/f-1783042298527-27-10snlz6.zjcgg.j
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042298527-27-10snlz6.zj`
- `Error: $262.detachArrayBuffer not supported by the Elide host (Testing with
Float64Array and makePassthrough.)
In file ../../../tmp/0tGETYiHwgNWKpDLR3IZ/f-1783042307638-27-1o0cvug.3so8l.j
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042307638-27-1o0cvug.3s`
example test: `test/built-ins/TypedArray/prototype/findLast/predicate-may-detach-buffer.js strict mode`

### 2 × `Error: $262.detachArrayBuffer not supported by the Elide host (Testing with Float64Array and makePassthrough.) In file ../../../tmp/b109I3WwGYiitho3Z7CS/f-<n>-<`

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host (Testing with
Float64Array and makePassthrough.)
In file ../../../tmp/b109I3WwGYiitho3Z7CS/f-1783042298524-27-1ev6zkk.umngl.j
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042298524-27-1ev6zkk.um`
- `Error: $262.detachArrayBuffer not supported by the Elide host (Testing with
Float64Array and makePassthrough.)
In file ../../../tmp/b109I3WwGYiitho3Z7CS/f-1783042307677-27-13s962h.xix2l.j
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042307677-27-13s962h.xi`
example test: `test/built-ins/TypedArray/prototype/findLast/predicate-may-detach-buffer.js default`

### 2 × `Error: $262.detachArrayBuffer not supported by the Elide host (Testing with Float64Array and makePassthrough.) In file ../../../tmp/J1OexIgqSkiwMqrj75aj/f-<n>-<`

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host (Testing with
Float64Array and makePassthrough.)
In file ../../../tmp/J1OexIgqSkiwMqrj75aj/f-1783042299163-27-1iwaisn.u4ohi.j
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042299163-27-1iwaisn.u4`
- `Error: $262.detachArrayBuffer not supported by the Elide host (Testing with
Float64Array and makePassthrough.)
In file ../../../tmp/J1OexIgqSkiwMqrj75aj/f-1783042307791-27-1vpnipa.ih67i.j
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042307791-27-1vpnipa.ih`
example test: `test/built-ins/TypedArray/prototype/includes/detached-buffer-during-fromIndex-returns-false-for-zero.js strict mode`

### 2 × `Error: $262.detachArrayBuffer not supported by the Elide host (Testing with Float64Array and makePassthrough.) In file ../../../tmp/LBscudCSq1vFX7P6ipyC/f-<n>-<`

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host (Testing with
Float64Array and makePassthrough.)
In file ../../../tmp/LBscudCSq1vFX7P6ipyC/f-1783042304130-27-1hwrybg.1wupg.j
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042304130-27-1hwrybg.1w`
- `Error: $262.detachArrayBuffer not supported by the Elide host (Testing with
Float64Array and makePassthrough.)
In file ../../../tmp/LBscudCSq1vFX7P6ipyC/f-1783042308442-27-13sj9ff.63jai.j
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042308442-27-13sj9ff.63`
example test: `test/built-ins/TypedArray/prototype/toString/detached-buffer.js strict mode`

### 2 × `Error: $262.detachArrayBuffer not supported by the Elide host (Testing with Float64Array and makePassthrough.) In file ../../../tmp/qH4j7LVPF4kNUXvjyjzL/f-<n>-<`

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host (Testing with
Float64Array and makePassthrough.)
In file ../../../tmp/qH4j7LVPF4kNUXvjyjzL/f-1783042297937-27-1e8x946.0y2nf.j
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042297937-27-1e8x946.0y`
- `Error: $262.detachArrayBuffer not supported by the Elide host (Testing with
Float64Array and makePassthrough.)
In file ../../../tmp/qH4j7LVPF4kNUXvjyjzL/f-1783042307803-27-1nm4rz1.6dooj.j
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042307803-27-1nm4rz1.6d`
example test: `test/built-ins/TypedArray/prototype/find/detached-buffer.js default`

### 2 × `Error: $262.detachArrayBuffer not supported by the Elide host (Testing with Float64Array and makePassthrough.) In file ../../../tmp/qJaPKOB4f4gghotKTrBr/f-<n>-<`

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host (Testing with
Float64Array and makePassthrough.)
In file ../../../tmp/qJaPKOB4f4gghotKTrBr/f-1783042299022-27-1d8xuoy.njn5f.j
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042299022-27-1d8xuoy.nj`
- `Error: $262.detachArrayBuffer not supported by the Elide host (Testing with
Float64Array and makePassthrough.)
In file ../../../tmp/qJaPKOB4f4gghotKTrBr/f-1783042300083-27-1yvgfzy.l40wk.j
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042300083-27-1yvgfzy.l4`
example test: `test/built-ins/TypedArray/prototype/forEach/detached-buffer.js default`

### 2 × `Error: getOwnPropertyNames does not include <str> Expected`

distinct messages:
- `Error: getOwnPropertyNames does not include "stack" Expected`
example test: `test/built-ins/Error/prototype/stack/instance-not-enumerable.js default`

### 2 × `Error: hasOwnProperty(<str>) is false Expected`

distinct messages:
- `Error: hasOwnProperty("stack") is false Expected`
example test: `test/built-ins/Error/prototype/stack/instance-no-own-stack.js default`

### 2 × `Error.prototype.stack getter should be a function Expected`

distinct messages:
- `Error.prototype.stack getter should be a function Expected`
example test: `test/built-ins/Error/prototype/stack/prop-desc.js default`

### 2 × `EventTarget Call argument Expected a SyntaxError but got a`

distinct messages:
- `EventTarget Call argument Expected a SyntaxError but got a`
example test: `test/language/comments/hashbang/function-constructor.js default`

### 2 × `Expected no error, got Error: $262.createRealm not supported by the Elide host`

distinct messages:
- `Expected no error, got Error: $262.createRealm not supported by the Elide host`
example test: `test/harness/asyncHelpers-throwsAsync-same-realm.js default`

### 2 × `Expected no error, got SyntaxError: <loc> await is only valid in async`

distinct messages:
- `Expected no error, got SyntaxError: async-module-tla_FIXTURE.js:5:0 await is only valid in async`
example test: `test/language/module-code/top-level-await/async-module-does-not-block-sibling-modules.js strict mode`

### 2 × `Expected no error, got SyntaxError: <loc> await is only valid in async functions and the top level bodies of modules`

distinct messages:
- `Expected no error, got SyntaxError: module-import-resolution_FIXTURE.js:4:0 await is only valid in async functions and the top level bodies of modules`
example test: `test/language/module-code/top-level-await/dynamic-import-resolution.js default`

### 2 × `Expected no error, got SyntaxError: <loc> Expected ; but found { invalid {`

distinct messages:
- `Expected no error, got SyntaxError: text-javascript_FIXTURE.js:4:8 Expected ; but found { invalid {`
example test: `test/language/import/import-attributes/text-javascript.js default`

### 2 × `Expected no error, got SyntaxError: <loc> Expected an operand but found import import * as ns`

distinct messages:
- `Expected no error, got SyntaxError: set.js:225:0 Expected an operand but found import import * as ns`
- `Expected no error, got SyntaxError: set.js:226:0 Expected an operand but found import import * as ns`
example test: `test/language/module-code/namespace/internals/set.js default`

### 2 × `Expected no error, got TypeError: (intermediate value).bind is not a function`

distinct messages:
- `Expected no error, got TypeError: (intermediate value).bind is not a function`
example test: `test/language/statements/class/subclass/superclass-generator-function.js strict mode`

### 2 × `Expected no error, got TypeError: <str> is not a configurable property`

distinct messages:
- `Expected no error, got TypeError: "default" is not a configurable property`
example test: `test/language/expressions/dynamic-import/namespace/await-ns-delete-non-exported-strict.js strict mode`

### 2 × `Expected no error, got TypeError: Cannot redefine property: prototype`

distinct messages:
- `Expected no error, got TypeError: Cannot redefine property: prototype`
example test: `test/annexB/language/statements/class/subclass/superclass-emulates-undefined.js strict mode`

### 2 × `Expected no error, got TypeError: g is not a function`

distinct messages:
- `Expected no error, got TypeError: g is not a function`
example test: `test/built-ins/GeneratorFunction/invoked-as-constructor-no-arguments.js strict mode`

### 2 × `Expected no error, got TypeError: gfn is not a function`

distinct messages:
- `Expected no error, got TypeError: gfn is not a function`
example test: `test/language/statements/class/subclass/builtin-objects/GeneratorFunction/regular-subclassing.js strict mode`

### 2 × `Expected no error, got TypeError: Immutable buffer (Testing with Float64Array and`

distinct messages:
- `Expected no error, got TypeError: Immutable buffer (Testing with Float64Array and`
example test: `test/built-ins/TypedArray/prototype/slice/speciesctor-return-same-buffer-with-offset.js default`

### 2 × `Expected no error, got TypeError: SyntaxError: <loc> Expected an operand but found export`

distinct messages:
- `Expected no error, got TypeError: SyntaxError: import-value_FIXTURE.js:4:0 Expected an operand but found export`
example test: `test/built-ins/ShadowRealm/prototype/importValue/import-value.js default`

### 2 × `Expected SameValue(«<str>», «<str>») to`

distinct messages:
- `Expected SameValue(«"EventTarget"», «"GeneratorFunction"») to`
example test: `test/built-ins/GeneratorFunction/prototype/Symbol.toStringTag.js default`

### 2 × `Expected SameValue(«undefined», «[object Generator]») to be`

distinct messages:
- `Expected SameValue(«undefined», «[object Generator]») to be`
example test: `test/built-ins/GeneratorFunction/prototype/prototype.js default`

### 2 × `Expected test to throw error of type RangeError, got SyntaxError: <loc> Expected an operand`

distinct messages:
- `Expected test to throw error of type RangeError, got SyntaxError: module-import-rejection-tick_FIXTURE.js:4:0 Expected an operand`
example test: `test/language/module-code/top-level-await/module-import-rejection-tick.js strict mode`

### 2 × `Expected test to throw error of type SyntaxError, but did not throw error`

distinct messages:
- `Expected test to throw error of type SyntaxError, but did not throw error`
example test: `test/language/module-code/instn-named-err-not-found-dflt.js strict mode`

### 2 × `Expected test to throw error of type TypeError, got SyntaxError: <loc> Expected an operand but`

distinct messages:
- `Expected test to throw error of type TypeError, got SyntaxError: module-import-rejection_FIXTURE.js:4:0 Expected an operand but`
example test: `test/language/module-code/top-level-await/module-import-rejection.js strict mode`

### 2 × `generator function proxy Expected SameValue(«"[object`

distinct messages:
- `generator function proxy Expected SameValue(«"[object`
example test: `test/built-ins/Object/prototype/toString/proxy-function.js default`

### 2 × `import.meta in GeneratorBody Expected a SyntaxError but got a`

distinct messages:
- `import.meta in GeneratorBody Expected a SyntaxError but got a`
example test: `test/language/expressions/import.meta/syntax/goal-generator-params-or-body.js default`

### 2 × `length descriptor value should be <n>; length value should be <n>`

distinct messages:
- `length descriptor value should be 1; length value should be 1`
example test: `test/built-ins/GeneratorFunction/length.js default`

### 2 × `length should be an own property`

distinct messages:
- `length should be an own property`
example test: `test/language/statements/class/subclass/builtin-objects/GeneratorFunction/instance-length.js default`

### 2 × `Must verify non-detachment before final bounds check Expected a`

distinct messages:
- `Must verify non-detachment before final bounds check Expected a`
example test: `test/built-ins/ArrayBuffer/prototype/sliceToImmutable/this-shrinks.js default`

### 2 × `name descriptor value should be [Symbol.asyncIterator]; name`

distinct messages:
- `name descriptor value should be [Symbol.asyncIterator]; name`
example test: `test/built-ins/AsyncIteratorPrototype/Symbol.asyncIterator/name.js default`

### 2 × `name descriptor value should be GeneratorFunction; name value`

distinct messages:
- `name descriptor value should be GeneratorFunction; name value`
example test: `test/built-ins/GeneratorFunction/name.js default`

### 2 × `name should be an own property`

distinct messages:
- `name should be an own property`
example test: `test/language/statements/class/subclass/builtin-objects/GeneratorFunction/instance-name.js default`

### 2 × `RegExp.$1 getter throws for subclass receiver Expected a`

distinct messages:
- `RegExp.$1 getter throws for subclass receiver Expected a`
example test: `test/annexB/built-ins/RegExp/legacy-accessors/index/this-subclass-constructor.js strict mode`

### 2 × `RegExp.input getter throws for subclass receiver Expected a`

distinct messages:
- `RegExp.input getter throws for subclass receiver Expected a`
example test: `test/annexB/built-ins/RegExp/legacy-accessors/input/this-subclass-constructor.js default`

### 2 × `RegExp.lastMatch getter throws for subclass receiver Expected a`

distinct messages:
- `RegExp.lastMatch getter throws for subclass receiver Expected a`
example test: `test/annexB/built-ins/RegExp/legacy-accessors/lastMatch/this-subclass-constructor.js default`

### 2 × `RegExp.lastParen getter throws for subclass receiver Expected a`

distinct messages:
- `RegExp.lastParen getter throws for subclass receiver Expected a`
example test: `test/annexB/built-ins/RegExp/legacy-accessors/lastParen/this-subclass-constructor.js strict mode`

### 2 × `RegExp.leftContext getter throws for subclass receiver Expected`

distinct messages:
- `RegExp.leftContext getter throws for subclass receiver Expected`
example test: `test/annexB/built-ins/RegExp/legacy-accessors/leftContext/this-subclass-constructor.js default`

### 2 × `RegExp.rightContext getter throws for subclass receiver`

distinct messages:
- `RegExp.rightContext getter throws for subclass receiver`
example test: `test/annexB/built-ins/RegExp/legacy-accessors/rightContext/this-subclass-constructor.js strict mode`

### 2 × `Script Error java.lang.IllegalStateException: Recursive update In file <loc> Stack Trace [js] :anonymous <unknown> · elide run <loc> Advice An error occurred wh`

distinct messages:
- `Script Error
java.lang.IllegalStateException: Recursive update
In file ../../../tmp/j15nCMoGHUiPJahp9tTh/eval-self-once-script.js:1779:1
Stack Trace
[js] :anonymous                                             <unknown>
· elide run /tmp/j15nCMoGHUiPJahp9tTh/eval-self-once-script.js
Advice
An error oc`
- `Script Error
java.lang.IllegalStateException: Recursive update
In file ../../../tmp/C5P3vBG632jHBGNCXrtz/eval-self-once-script.js:1779:1
Stack Trace
[js] :anonymous                                             <unknown>
· elide run /tmp/C5P3vBG632jHBGNCXrtz/eval-self-once-script.js
Advice
An error oc`
example test: `test/language/expressions/dynamic-import/eval-self-once-script.js default`

### 2 × `Test timed out`

distinct messages:
- `Test timed out`
example test: `test/built-ins/Object/defineProperty/15.2.3.6-4-116.js default`

### 2 × `Test262Error: Actual [] and expected [<n>, <n>] should have the same contents.`

distinct messages:
- `Test262Error: Actual [] and expected [42, 39] should have the same contents.`
example test: `test/language/expressions/dynamic-import/for-await-resolution-and-error.js default`

### 2 × `Test262Error: delete: default`

distinct messages:
- `Test262Error: delete: default`
example test: `test/language/expressions/dynamic-import/namespace/await-ns-delete-non-exported-no-strict.js default`

### 2 × `Test262Error: Expected SameValue(«true», «false») to be true`

distinct messages:
- `Test262Error: Expected SameValue(«true», «false») to be true`
example test: `test/language/expressions/dynamic-import/namespace/default-property-not-set-own.js default`

### 2 × `Test262Error: Expected true but got false`

distinct messages:
- `Test262Error: Expected true but got false`
example test: `test/language/module-code/top-level-await/dynamic-import-rejection.js default`

### 2 × `Test262Error: The import should reject (second import) Expected a Error to be thrown asynchronously but no exception was thrown at all`

distinct messages:
- `Test262Error: The import should reject (second import) Expected a Error to be thrown asynchronously but no exception was thrown at all`
example test: `test/language/expressions/dynamic-import/import-errored-module.js default`

### 2 × `Uncaught (in promise) <n>`

distinct messages:
- `Uncaught (in promise) 1`
example test: `test/built-ins/Promise/all/invoke-resolve-get-once-multiple-calls.js default`

### 2 × `Uncaught (in promise) ReferenceError: err is not defined`

distinct messages:
- `Uncaught (in promise) ReferenceError: err is not defined`
example test: `test/built-ins/Promise/race/invoke-resolve-error-close.js default`

### 2 × `Uncaught (in promise) SyntaxError: <loc> Expected an operand but found export export let x = <n>; ^`

distinct messages:
- `Uncaught (in promise) SyntaxError: dynamic-import-of-waiting-module_FIXTURE.js:6:0 Expected an operand but found export
export let x = 1;
^`
example test: `test/language/module-code/top-level-await/dynamic-import-of-waiting-module.js strict mode`

### 2 × `Uncaught (in promise) SyntaxError: <loc> Expected an operand but found export export var x = <n>; ^ Uncaught (in promise) SyntaxError: <loc> Expected an operand`

distinct messages:
- `Uncaught (in promise) SyntaxError: dynamic-import-module_FIXTURE.js:4:0 Expected an operand but found export
export var x = 1;
^
Uncaught (in promise) SyntaxError: dynamic-import-module_FIXTURE.js:4:0 Expected an operand but found export
export var x = 1;
^`
example test: `test/language/expressions/dynamic-import/always-create-new-promise.js default`

### 2 × `Uncaught (in promise) TypeError: cannot create promise: executor not callable`

distinct messages:
- `Uncaught (in promise) TypeError: cannot create promise: executor not callable`
example test: `test/language/statements/async-function/evaluation-body.js default`

### 2 × `Uncaught (in promise) TypeError: Invalid module specifier: <str> Uncaught (in promise) TypeError: Invalid module specifier: <str> Uncaught (in promise) TypeErro`

distinct messages:
- `Uncaught (in promise) TypeError: Invalid module specifier: ''
Uncaught (in promise) TypeError: Invalid module specifier: ''
Uncaught (in promise) TypeError: Invalid module specifier: ''`
example test: `test/language/expressions/dynamic-import/syntax/valid/new-covered-expression-is-valid.js default`

### 2 × `Uncaught (in promise) TypeError: Module not found: <str> Uncaught (in promise) TypeError: Module not found: <str> Uncaught (in promise) TypeError: Module not fo`

distinct messages:
- `Uncaught (in promise) TypeError: Module not found: 'true'
Uncaught (in promise) TypeError: Module not found: 'undefined'
Uncaught (in promise) TypeError: Module not found: 'object'
Uncaught (in promise) TypeError: Module not found: 'NaN'
Uncaught (in promise) TypeError: Module not found: 'NaN'
Uncau`
example test: `test/language/expressions/dynamic-import/assignment-expression/unary-expr.js strict mode`

### 2 × `Uncaught (in promise) TypeError: null is not an Object`

distinct messages:
- `Uncaught (in promise) TypeError: null is not an Object`
example test: `test/built-ins/Promise/resolve/arg-uniq-ctor.js default`

### 2 × `unreachable`

distinct messages:
- `unreachable`
example test: `test/annexB/language/statements/if/emulated-undefined.js default`

### 2 × `variable Expected a SyntaxError to be thrown but no exception`

distinct messages:
- `variable Expected a SyntaxError to be thrown but no exception`
example test: `test/language/global-code/script-decl-lex-var.js strict mode`

### 2 × `writable, non-enumerable data property Expected a TypeError to`

distinct messages:
- `writable, non-enumerable data property Expected a TypeError to`
example test: `test/language/global-code/script-decl-func-err-non-configurable.js strict mode`

### 1 × `Error In file ../../../tmp/b109I3WwGYiitho3Z7CS/third-party-evaluation-after-defer Advice An error occurred while executing your code.`

distinct messages:
- `Error
In file ../../../tmp/b109I3WwGYiitho3Z7CS/third-party-evaluation-after-defer
Advice
An error occurred while executing your code.`
example test: `test/language/import/import-defer/errors/module-throws/third-party-evaluation-after-defer-import.js strict mode`

### 1 × `Error In file ../../../tmp/hTOOosumwEHK0StV9C29/third-party-evaluation-after-defer Advice An error occurred while executing your code.`

distinct messages:
- `Error
In file ../../../tmp/hTOOosumwEHK0StV9C29/third-party-evaluation-after-defer
Advice
An error occurred while executing your code.`
example test: `test/language/import/import-defer/errors/module-throws/third-party-evaluation-after-defer-import.js default`

### 1 × `Error In file ../../../tmp/J1OexIgqSkiwMqrj75aj/trigger-evaluation.mjs<loc> Advice An error occurred while executing your code.`

distinct messages:
- `Error
In file ../../../tmp/J1OexIgqSkiwMqrj75aj/trigger-evaluation.mjs:419:1
Advice
An error occurred while executing your code.`
example test: `test/language/import/import-defer/errors/module-throws/trigger-evaluation.js default`

### 1 × `Error In file ../../../tmp/LBscudCSq1vFX7P6ipyC/trigger-evaluation.mjs<loc> Advice An error occurred while executing your code.`

distinct messages:
- `Error
In file ../../../tmp/LBscudCSq1vFX7P6ipyC/trigger-evaluation.mjs:419:1
Advice
An error occurred while executing your code.`
example test: `test/language/import/import-defer/errors/module-throws/trigger-evaluation.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file ../../../tmp/0tGETYiHwgNWKpDLR3IZ/f-<n>-<n>-11jg0l.kxewhj.j (source excerpt suppressed) Stack Tr`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/0tGETYiHwgNWKpDLR3IZ/f-1783042478523-27-11jg0l.kxewhj.j
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042478523-27-11jg0l.kxe
· elide run /tmp/0tGETYiHwgNWKpDLR3IZ/f-17830
Advice
A`
example test: `test/built-ins/TypedArrayConstructors/internals/DefineOwnProperty/BigInt/detached-buffer-throws-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file ../../../tmp/0tGETYiHwgNWKpDLR3IZ/f-<n>-<n>-1kcqk0p.2smti.j (source excerpt suppressed) Stack Tr`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/0tGETYiHwgNWKpDLR3IZ/f-1783042306813-27-1kcqk0p.2smti.j
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042306813-27-1kcqk0p.2s
· elide run /tmp/0tGETYiHwgNWKpDLR3IZ/f-17830
Advice
A`
example test: `test/built-ins/TypedArrayConstructors/ctors-bigint/object-arg/proto-from-ctor-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file ../../../tmp/0tGETYiHwgNWKpDLR3IZ/f-<n>-<n>-1m8iz2a.zitgh.j (source excerpt suppressed) Stack Tr`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/0tGETYiHwgNWKpDLR3IZ/f-1783042210627-27-1m8iz2a.zitgh.j
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042210627-27-1m8iz2a.zi
· elide run /tmp/0tGETYiHwgNWKpDLR3IZ/f-17830
Advice
A`
example test: `test/built-ins/Function/internals/Construct/derived-return-val-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file ../../../tmp/0tGETYiHwgNWKpDLR3IZ/f-<n>-<n>-1ngnkac.cl4dj.j (source excerpt suppressed) Stack Tr`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/0tGETYiHwgNWKpDLR3IZ/f-1783042102573-27-1ngnkac.cl4dj.j
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042102573-27-1ngnkac.cl
· elide run /tmp/0tGETYiHwgNWKpDLR3IZ/f-17830
Advice
A`
example test: `test/language/expressions/new/non-ctor-err-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file ../../../tmp/0y42poOUCSHZGWcb5OOT/f-<n>-<n>-1gkqk1d.npbyj.j (source excerpt suppressed) Stack Tr`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/0y42poOUCSHZGWcb5OOT/f-1783042066283-27-1gkqk1d.npbyj.j
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042066283-27-1gkqk1d.np
· elide run /tmp/0y42poOUCSHZGWcb5OOT/f-17830
Advice
A`
example test: `test/built-ins/Symbol/hasInstance/cross-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file ../../../tmp/0y42poOUCSHZGWcb5OOT/f-<n>-<n>-1sntwa6.t6fng.j (source excerpt suppressed) Stack Tr`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/0y42poOUCSHZGWcb5OOT/f-1783042269427-27-1sntwa6.t6fng.j
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042269427-27-1sntwa6.t6
· elide run /tmp/0y42poOUCSHZGWcb5OOT/f-17830
Advice
A`
example test: `test/built-ins/RegExp/prototype/ignoreCase/cross-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file ../../../tmp/0y42poOUCSHZGWcb5OOT/f-<n>-<n>-1uxqnii.dx6xf.j (source excerpt suppressed) Stack Tr`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/0y42poOUCSHZGWcb5OOT/f-1783041792972-27-1uxqnii.dx6xf.j
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783041792972-27-1uxqnii.dx
· elide run /tmp/0y42poOUCSHZGWcb5OOT/f-17830
Advice
A`
example test: `test/built-ins/RegExp/proto-from-ctor-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file ../../../tmp/0y42poOUCSHZGWcb5OOT/f-<n>-<n>-1vvt6y3.wlkfg.j (source excerpt suppressed) Stack Tr`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/0y42poOUCSHZGWcb5OOT/f-1783042044086-27-1vvt6y3.wlkfg.j
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042044086-27-1vvt6y3.wl
· elide run /tmp/0y42poOUCSHZGWcb5OOT/f-17830
Advice
A`
example test: `test/built-ins/Proxy/apply/null-handler-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file ../../../tmp/6VDeeDx968HdVk60WPQF/f-<n>-<n>-1u57rlq.urgwf.j (source excerpt suppressed) Stack Tr`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/6VDeeDx968HdVk60WPQF/f-1783042086133-27-1u57rlq.urgwf.j
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042086133-27-1u57rlq.ur
[js] :anonymous                            f-178304208`
example test: `test/language/expressions/call/eval-realm-indirect.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file ../../../tmp/6VDeeDx968HdVk60WPQF/f-<n>-<n>-1uj2ius.uamtf.j (source excerpt suppressed) Stack Tr`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/6VDeeDx968HdVk60WPQF/f-1783042066291-27-1uj2ius.uamtf.j
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042066291-27-1uj2ius.ua
· elide run /tmp/6VDeeDx968HdVk60WPQF/f-17830
Advice
A`
example test: `test/built-ins/Symbol/isConcatSpreadable/cross-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file ../../../tmp/7o3Dll5PNwWGTbDBGxPG/f-<n>-<n>-102yje2.7fgok.j (source excerpt suppressed) Stack Tr`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/7o3Dll5PNwWGTbDBGxPG/f-1783041777746-27-102yje2.7fgok.j
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783041777746-27-102yje2.7f
· elide run /tmp/7o3Dll5PNwWGTbDBGxPG/f-17830
Advice
A`
example test: `test/built-ins/Promise/proto-from-ctor-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file ../../../tmp/7o3Dll5PNwWGTbDBGxPG/f-<n>-<n>-112x7qp.wduyl.j (source excerpt suppressed) Stack Tr`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/7o3Dll5PNwWGTbDBGxPG/f-1783041799297-27-112x7qp.wduyl.j
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783041799297-27-112x7qp.wd
· elide run /tmp/7o3Dll5PNwWGTbDBGxPG/f-17830
Advice
A`
example test: `test/built-ins/String/proto-from-ctor-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file ../../../tmp/7o3Dll5PNwWGTbDBGxPG/f-<n>-<n>-18xw5jk.cysdj.j (source excerpt suppressed) Stack Tr`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/7o3Dll5PNwWGTbDBGxPG/f-1783042047428-27-18xw5jk.cysdj.j
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042047428-27-18xw5jk.cy
· elide run /tmp/7o3Dll5PNwWGTbDBGxPG/f-17830
Advice
A`
example test: `test/built-ins/Proxy/getOwnPropertyDescriptor/result-type-is-not-object-nor-undefined-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file ../../../tmp/7o3Dll5PNwWGTbDBGxPG/f-<n>-<n>-1ez87l.xtmdfk.j (source excerpt suppressed) Stack Tr`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/7o3Dll5PNwWGTbDBGxPG/f-1783042044702-27-1ez87l.xtmdfk.j
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042044702-27-1ez87l.xtm
· elide run /tmp/7o3Dll5PNwWGTbDBGxPG/f-17830
Advice
A`
example test: `test/built-ins/Proxy/construct/return-not-object-throws-null-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file ../../../tmp/b109I3WwGYiitho3Z7CS/f-<n>-<n>-18oxzlx.z2azk.j (source excerpt suppressed) Stack Tr`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/b109I3WwGYiitho3Z7CS/f-1783042147284-27-18oxzlx.z2azk.j
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042147284-27-18oxzlx.z2
· elide run /tmp/b109I3WwGYiitho3Z7CS/f-17830
Advice
A`
example test: `test/language/types/reference/get-value-prop-base-primitive-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file ../../../tmp/C5P3vBG632jHBGNCXrtz/f-<n>-<n>-10nkm6m.w4rwi.j (source excerpt suppressed) Stack Tr`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/C5P3vBG632jHBGNCXrtz/f-1783042210602-27-10nkm6m.w4rwi.j
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042210602-27-10nkm6m.w4
· elide run /tmp/C5P3vBG632jHBGNCXrtz/f-17830
Advice
A`
example test: `test/built-ins/Function/internals/Construct/base-ctor-revoked-proxy-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file ../../../tmp/C5P3vBG632jHBGNCXrtz/f-<n>-<n>-124sh0h.7sxfg.j (source excerpt suppressed) Stack Tr`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/C5P3vBG632jHBGNCXrtz/f-1783042065907-27-124sh0h.7sxfg.j
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042065907-27-124sh0h.7s
· elide run /tmp/C5P3vBG632jHBGNCXrtz/f-17830
Advice
A`
example test: `test/built-ins/Symbol/asyncDispose/cross-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file ../../../tmp/C5P3vBG632jHBGNCXrtz/f-<n>-<n>-136xbpe.foj7l.j (source excerpt suppressed) Stack Tr`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/C5P3vBG632jHBGNCXrtz/f-1783041776982-27-136xbpe.foj7l.j
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783041776982-27-136xbpe.fo
· elide run /tmp/C5P3vBG632jHBGNCXrtz/f-17830
Advice
A`
example test: `test/built-ins/Object/proto-from-ctor-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file ../../../tmp/C5P3vBG632jHBGNCXrtz/f-<n>-<n>-1t6odip.f9mal.j (source excerpt suppressed) Stack Tr`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/C5P3vBG632jHBGNCXrtz/f-1783042066434-27-1t6odip.f9mal.j
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042066434-27-1t6odip.f9
· elide run /tmp/C5P3vBG632jHBGNCXrtz/f-17830
Advice
A`
example test: `test/built-ins/Symbol/iterator/cross-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file ../../../tmp/hTOOosumwEHK0StV9C29/f-<n>-<n>-14sfgb5.wzw3l.j (source excerpt suppressed) Stack Tr`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/hTOOosumwEHK0StV9C29/f-1783042438588-27-14sfgb5.wzw3l.j
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042438588-27-14sfgb5.wz
· elide run /tmp/hTOOosumwEHK0StV9C29/f-17830
Advice
A`
example test: `test/annexB/built-ins/RegExp/prototype/compile/this-cross-realm-instance.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file ../../../tmp/hTOOosumwEHK0StV9C29/f-<n>-<n>-1gfmjw3.12osk.j (source excerpt suppressed) Stack Tr`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/hTOOosumwEHK0StV9C29/f-1783042044209-27-1gfmjw3.12osk.j
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042044209-27-1gfmjw3.12
· elide run /tmp/hTOOosumwEHK0StV9C29/f-17830
Advice
A`
example test: `test/built-ins/Proxy/apply/trap-is-not-callable-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file ../../../tmp/hTOOosumwEHK0StV9C29/f-<n>-<n>-1jfxotw.3wujh.j (source excerpt suppressed) Stack Tr`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/hTOOosumwEHK0StV9C29/f-1783042210651-27-1jfxotw.3wujh.j
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042210651-27-1jfxotw.3w
· elide run /tmp/hTOOosumwEHK0StV9C29/f-17830
Advice
A`
example test: `test/built-ins/Function/internals/Construct/derived-this-uninitialized-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file ../../../tmp/hTOOosumwEHK0StV9C29/f-<n>-<n>-1q33anb.t1q8l.j (source excerpt suppressed) Stack Tr`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/hTOOosumwEHK0StV9C29/f-1783041757891-27-1q33anb.t1q8l.j
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783041757891-27-1q33anb.t1
· elide run /tmp/hTOOosumwEHK0StV9C29/f-17830
Advice
A`
example test: `test/built-ins/AsyncGeneratorFunction/proto-from-ctor-realm-prototype.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file ../../../tmp/j15nCMoGHUiPJahp9tTh/f-<n>-<n>-10o3zg.mn0zck.j (source excerpt suppressed) Stack Tr`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/j15nCMoGHUiPJahp9tTh/f-1783042044849-27-10o3zg.mn0zck.j
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042044849-27-10o3zg.mn0
· elide run /tmp/j15nCMoGHUiPJahp9tTh/f-17830
Advice
A`
example test: `test/built-ins/Proxy/construct/return-not-object-throws-string-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file ../../../tmp/j15nCMoGHUiPJahp9tTh/f-<n>-<n>-114fepw.1hkdi.j (source excerpt suppressed) Stack Tr`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/j15nCMoGHUiPJahp9tTh/f-1783041899163-27-114fepw.1hkdi.j
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783041899163-27-114fepw.1h
· elide run /tmp/j15nCMoGHUiPJahp9tTh/f-17830
Advice
A`
example test: `test/built-ins/Array/from/proto-from-ctor-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file ../../../tmp/j15nCMoGHUiPJahp9tTh/f-<n>-<n>-15e9c84.2f26h.j (source excerpt suppressed) Stack Tr`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/j15nCMoGHUiPJahp9tTh/f-1783042212062-27-15e9c84.2f26h.j
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042212062-27-15e9c84.2f
· elide run /tmp/j15nCMoGHUiPJahp9tTh/f-17830
Advice
A`
example test: `test/built-ins/Function/prototype/bind/proto-from-ctor-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file ../../../tmp/j15nCMoGHUiPJahp9tTh/f-<n>-<n>-177aztq.jzqag.j (source excerpt suppressed) Stack Tr`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/j15nCMoGHUiPJahp9tTh/f-1783041765152-27-177aztq.jzqag.j
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783041765152-27-177aztq.jz
· elide run /tmp/j15nCMoGHUiPJahp9tTh/f-17830
Advice
A`
example test: `test/built-ins/Error/proto-from-ctor-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file ../../../tmp/j15nCMoGHUiPJahp9tTh/f-<n>-<n>-1f8fftl.2jp0g.j (source excerpt suppressed) Stack Tr`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/j15nCMoGHUiPJahp9tTh/f-1783041942143-27-1f8fftl.2jp0g.j
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783041942143-27-1f8fftl.2j
· elide run /tmp/j15nCMoGHUiPJahp9tTh/f-17830
Advice
A`
example test: `test/built-ins/NativeErrors/EvalError/proto-from-ctor-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file ../../../tmp/j15nCMoGHUiPJahp9tTh/f-<n>-<n>-1h6olg5.0v6pl.j (source excerpt suppressed) Stack Tr`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/j15nCMoGHUiPJahp9tTh/f-1783042438290-27-1h6olg5.0v6pl.j
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042438290-27-1h6olg5.0v
· elide run /tmp/j15nCMoGHUiPJahp9tTh/f-17830
Advice
A`
example test: `test/annexB/built-ins/RegExp/legacy-accessors/lastParen/this-cross-realm-constructor.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file ../../../tmp/j15nCMoGHUiPJahp9tTh/f-<n>-<n>-1ralmo2.s3y9m.j (source excerpt suppressed) Stack Tr`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/j15nCMoGHUiPJahp9tTh/f-1783042270793-27-1ralmo2.s3y9m.j
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042270793-27-1ralmo2.s3
· elide run /tmp/j15nCMoGHUiPJahp9tTh/f-17830
Advice
A`
example test: `test/built-ins/RegExp/prototype/unicodeSets/cross-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file ../../../tmp/j15nCMoGHUiPJahp9tTh/f-<n>-<n>-1tnjnsh.88ouh.j (source excerpt suppressed) Stack Tr`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/j15nCMoGHUiPJahp9tTh/f-1783042066531-27-1tnjnsh.88ouh.j
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042066531-27-1tnjnsh.88
· elide run /tmp/j15nCMoGHUiPJahp9tTh/f-17830
Advice
A`
example test: `test/built-ins/Symbol/replace/cross-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file ../../../tmp/J1OexIgqSkiwMqrj75aj/f-<n>-<n>-122t5rz.r3hni.j (source excerpt suppressed) Stack Tr`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/J1OexIgqSkiwMqrj75aj/f-1783042045684-27-122t5rz.r3hni.j
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042045684-27-122t5rz.r3
· elide run /tmp/J1OexIgqSkiwMqrj75aj/f-17830
Advice
A`
example test: `test/built-ins/Proxy/defineProperty/targetdesc-undefined-not-configurable-descriptor-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file ../../../tmp/J1OexIgqSkiwMqrj75aj/f-<n>-<n>-1242rg6.k3gti.j (source excerpt suppressed) Stack Tr`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/J1OexIgqSkiwMqrj75aj/f-1783041755162-27-1242rg6.k3gti.j
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783041755162-27-1242rg6.k3
· elide run /tmp/J1OexIgqSkiwMqrj75aj/f-17830
Advice
A`
example test: `test/built-ins/Array/proto-from-ctor-realm-zero.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file ../../../tmp/J1OexIgqSkiwMqrj75aj/f-<n>-<n>-1jimrfl.r0x4k.j (source excerpt suppressed) Stack Tr`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/J1OexIgqSkiwMqrj75aj/f-1783042045343-27-1jimrfl.r0x4k.j
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042045343-27-1jimrfl.r0
· elide run /tmp/J1OexIgqSkiwMqrj75aj/f-17830
Advice
A`
example test: `test/built-ins/Proxy/defineProperty/null-handler-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file ../../../tmp/J1OexIgqSkiwMqrj75aj/f-<n>-<n>-1sgtcft.oubyh.j (source excerpt suppressed) Stack Tr`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/J1OexIgqSkiwMqrj75aj/f-1783042082684-27-1sgtcft.oubyh.j
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042082684-27-1sgtcft.ou
· elide run /tmp/J1OexIgqSkiwMqrj75aj/f-17830
Advice
A`
example test: `test/language/expressions/async-generator/eval-body-proto-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file ../../../tmp/LBscudCSq1vFX7P6ipyC/f-<n>-<n>-1ih8f61.3zi2k.j (source excerpt suppressed) Stack Tr`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/LBscudCSq1vFX7P6ipyC/f-1783042045504-27-1ih8f61.3zi2k.j
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042045504-27-1ih8f61.3z
· elide run /tmp/LBscudCSq1vFX7P6ipyC/f-17830
Advice
A`
example test: `test/built-ins/Proxy/defineProperty/targetdesc-not-compatible-descriptor-not-configurable-target-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file ../../../tmp/LBscudCSq1vFX7P6ipyC/f-<n>-<n>-1rky7n1.iu7ul.j (source excerpt suppressed) Stack Tr`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/LBscudCSq1vFX7P6ipyC/f-1783042109534-27-1rky7n1.iu7ul.j
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042109534-27-1rky7n1.iu
· elide run /tmp/LBscudCSq1vFX7P6ipyC/f-17830
Advice
A`
example test: `test/language/expressions/super/realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file ../../../tmp/qJaPKOB4f4gghotKTrBr/f-<n>-<n>-10ivfv7.hu6ni.j (source excerpt suppressed) Stack Tr`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/qJaPKOB4f4gghotKTrBr/f-1783042307664-27-10ivfv7.hu6ni.j
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042307664-27-10ivfv7.hu
· elide run /tmp/qJaPKOB4f4gghotKTrBr/f-17830
Advice
A`
example test: `test/built-ins/TypedArrayConstructors/internals/Delete/detached-buffer-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file ../../../tmp/qJaPKOB4f4gghotKTrBr/f-<n>-<n>-1375hmn.72jah.j (source excerpt suppressed) Stack Tr`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/qJaPKOB4f4gghotKTrBr/f-1783042049804-27-1375hmn.72jah.j
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042049804-27-1375hmn.72
· elide run /tmp/qJaPKOB4f4gghotKTrBr/f-17830
Advice
A`
example test: `test/built-ins/Proxy/ownKeys/return-not-list-object-throws-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file ../../../tmp/qJaPKOB4f4gghotKTrBr/f-<n>-<n>-13ca26.ou7iag.j (source excerpt suppressed) Stack Tr`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/qJaPKOB4f4gghotKTrBr/f-1783041774140-27-13ca26.ou7iag.j
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783041774140-27-13ca26.ou7
· elide run /tmp/qJaPKOB4f4gghotKTrBr/f-17830
Advice
A`
example test: `test/built-ins/Number/proto-from-ctor-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file ../../../tmp/qJaPKOB4f4gghotKTrBr/f-<n>-<n>-1bb4u3q.xgj5i.j (source excerpt suppressed) Stack Tr`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/qJaPKOB4f4gghotKTrBr/f-1783042066438-27-1bb4u3q.xgj5i.j
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042066438-27-1bb4u3q.xg
· elide run /tmp/qJaPKOB4f4gghotKTrBr/f-17830
Advice
A`
example test: `test/built-ins/Symbol/iterator/cross-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file ../../../tmp/qJaPKOB4f4gghotKTrBr/f-<n>-<n>-1dlsg2x.4v8aj.j (source excerpt suppressed) Stack Tr`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/qJaPKOB4f4gghotKTrBr/f-1783042276121-27-1dlsg2x.4v8aj.j
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042276121-27-1dlsg2x.4v
· elide run /tmp/qJaPKOB4f4gghotKTrBr/f-17830
Advice
A`
example test: `test/built-ins/ShadowRealm/prototype/evaluate/wrapped-function-throws-typeerror-from-caller-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file ../../../tmp/qJaPKOB4f4gghotKTrBr/f-<n>-<n>-1fhb0lp.ungqk.j (source excerpt suppressed) Stack Tr`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/qJaPKOB4f4gghotKTrBr/f-1783041942165-27-1fhb0lp.ungqk.j
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783041942165-27-1fhb0lp.un
· elide run /tmp/qJaPKOB4f4gghotKTrBr/f-17830
Advice
A`
example test: `test/built-ins/NativeErrors/EvalError/proto-from-ctor-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file ../../../tmp/qJaPKOB4f4gghotKTrBr/f-<n>-<n>-1nfyd7g.atklg.j (source excerpt suppressed) Stack Tr`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/qJaPKOB4f4gghotKTrBr/f-1783041763855-27-1nfyd7g.atklg.j
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783041763855-27-1nfyd7g.at
· elide run /tmp/qJaPKOB4f4gghotKTrBr/f-17830
Advice
A`
example test: `test/built-ins/Date/proto-from-ctor-realm-one.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file ../../../tmp/UlmBLoztYqXQV6JJ9uTR/f-<n>-<n>-18ufynd.rhojg.j (source excerpt suppressed) Stack Tr`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/UlmBLoztYqXQV6JJ9uTR/f-1783042045031-27-18ufynd.rhojg.j
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042045031-27-18ufynd.rh
· elide run /tmp/UlmBLoztYqXQV6JJ9uTR/f-17830
Advice
A`
example test: `test/built-ins/Proxy/construct/trap-is-not-callable-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file ../../../tmp/UlmBLoztYqXQV6JJ9uTR/f-<n>-<n>-1mv9t3b.h3e3j.j (source excerpt suppressed) Stack Tr`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/UlmBLoztYqXQV6JJ9uTR/f-1783042211907-27-1mv9t3b.h3e3j.j
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042211907-27-1mv9t3b.h3
· elide run /tmp/UlmBLoztYqXQV6JJ9uTR/f-17830
Advice
A`
example test: `test/built-ins/Function/prototype/bind/get-fn-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file ../../../tmp/UlmBLoztYqXQV6JJ9uTR/f-<n>-<n>-1vkwa2b.osjdg.j (source excerpt suppressed) Stack Tr`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/UlmBLoztYqXQV6JJ9uTR/f-1783041769929-27-1vkwa2b.osjdg.j
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783041769929-27-1vkwa2b.os
· elide run /tmp/UlmBLoztYqXQV6JJ9uTR/f-17830
Advice
A`
example test: `test/built-ins/GeneratorFunction/proto-from-ctor-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file ../../../tmp/UlmBLoztYqXQV6JJ9uTR/f-<n>-<n>-1x8ed0.2qqh4h.j (source excerpt suppressed) Stack Tr`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/UlmBLoztYqXQV6JJ9uTR/f-1783042210590-27-1x8ed0.2qqh4h.j
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042210590-27-1x8ed0.2qq
· elide run /tmp/UlmBLoztYqXQV6JJ9uTR/f-17830
Advice
A`
example test: `test/built-ins/Function/internals/Call/class-ctor-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1001upp.<n> · elide run`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/UlmBLoztYqXQV6JJ9uTR/f-1783042438288-27-1001upp.874f.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042438288-27-1001upp.87
· elide run /tmp/UlmBLoztYqXQV6JJ9uTR/f-17830
Advice
A`
example test: `test/annexB/built-ins/RegExp/legacy-accessors/lastParen/this-cross-realm-constructor.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-10594c6.<n> · elide run`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/UlmBLoztYqXQV6JJ9uTR/f-1783042066511-27-10594c6.82p7.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042066511-27-10594c6.82
· elide run /tmp/UlmBLoztYqXQV6JJ9uTR/f-17830
Advice
A`
example test: `test/built-ins/Symbol/matchAll/cross-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-10e16ki.af [js] createA`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/j15nCMoGHUiPJahp9tTh/f-1783042088957-27-10e16ki.afm1.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042088957-27-10e16ki.af
[js] createAndInstantiateClass             f-178304208`
example test: `test/language/expressions/class/private-method-brand-check-multiple-evaluations-of-class-realm-function-ctor.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-10fpugt.c3 · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/7o3Dll5PNwWGTbDBGxPG/f-1783042046467-27-10fpugt.c3zv.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042046467-27-10fpugt.c3
· elide run /tmp/7o3Dll5PNwWGTbDBGxPG/f-17830
Advice
A`
example test: `test/built-ins/Proxy/deleteProperty/trap-is-not-callable-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-10rmsde.xv · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/7o3Dll5PNwWGTbDBGxPG/f-1783041779431-27-10rmsde.xvit.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783041779431-27-10rmsde.xv
· elide run /tmp/7o3Dll5PNwWGTbDBGxPG/f-17830
Advice
A`
example test: `test/built-ins/Proxy/get-fn-realm-recursive.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-10vj6uq.gr · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/qH4j7LVPF4kNUXvjyjzL/f-1783042269628-27-10vj6uq.groz.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042269628-27-10vj6uq.gr
· elide run /tmp/qH4j7LVPF4kNUXvjyjzL/f-17830
Advice
A`
example test: `test/built-ins/RegExp/prototype/source/cross-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1117l7y.m9 · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/0tGETYiHwgNWKpDLR3IZ/f-1783042193119-27-1117l7y.m9pf.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042193119-27-1117l7y.m9
· elide run /tmp/0tGETYiHwgNWKpDLR3IZ/f-17830
Advice
A`
example test: `test/built-ins/Array/prototype/splice/create-proto-from-ctor-realm-non-array.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-11ez8xt.ei · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/J1OexIgqSkiwMqrj75aj/f-1783041903703-27-11ez8xt.eite.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783041903703-27-11ez8xt.ei
· elide run /tmp/J1OexIgqSkiwMqrj75aj/f-17830
Advice
A`
example test: `test/built-ins/Array/length/define-own-prop-length-overflow-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-11gmnix.da · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/qH4j7LVPF4kNUXvjyjzL/f-1783042066606-27-11gmnix.dald.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042066606-27-11gmnix.da
· elide run /tmp/qH4j7LVPF4kNUXvjyjzL/f-17830
Advice
A`
example test: `test/built-ins/Symbol/species/cross-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-11h6ha0.s5 · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/b109I3WwGYiitho3Z7CS/f-1783041769902-27-11h6ha0.s57p.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783041769902-27-11h6ha0.s5
· elide run /tmp/b109I3WwGYiitho3Z7CS/f-17830
Advice
A`
example test: `test/built-ins/GeneratorFunction/proto-from-ctor-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-11t5o2u.k1 · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/hTOOosumwEHK0StV9C29/f-1783041761278-27-11t5o2u.k1xf.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783041761278-27-11t5o2u.k1
· elide run /tmp/hTOOosumwEHK0StV9C29/f-17830
Advice
A`
example test: `test/built-ins/DataView/proto-from-ctor-realm-sab.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-11vvkkg.<n> · elide run`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/hTOOosumwEHK0StV9C29/f-1783042269731-27-11vvkkg.07nf.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042269731-27-11vvkkg.07
· elide run /tmp/hTOOosumwEHK0StV9C29/f-17830
Advice
A`
example test: `test/built-ins/RegExp/prototype/sticky/cross-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-120y2jg.4j · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/UlmBLoztYqXQV6JJ9uTR/f-1783042050066-27-120y2jg.4j95.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042050066-27-120y2jg.4j
· elide run /tmp/UlmBLoztYqXQV6JJ9uTR/f-17830
Advice
A`
example test: `test/built-ins/Proxy/ownKeys/trap-is-not-callable-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1267z3g.aw · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/0tGETYiHwgNWKpDLR3IZ/f-1783042044853-27-1267z3g.aw2n.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042044853-27-1267z3g.aw
· elide run /tmp/0tGETYiHwgNWKpDLR3IZ/f-17830
Advice
A`
example test: `test/built-ins/Proxy/construct/return-not-object-throws-string-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-12qendf.r7 · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/j15nCMoGHUiPJahp9tTh/f-1783042199066-27-12qendf.r7s3.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042199066-27-12qendf.r7
· elide run /tmp/j15nCMoGHUiPJahp9tTh/f-17830
Advice
A`
example test: `test/built-ins/BigInt/prototype/valueOf/cross-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-12ujexn.8j · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/C5P3vBG632jHBGNCXrtz/f-1783041921351-27-12ujexn.8j8f.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783041921351-27-12ujexn.8j
· elide run /tmp/C5P3vBG632jHBGNCXrtz/f-17830
Advice
A`
example test: `test/built-ins/Error/isError/non-error-objects-other-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-136ba96.0c · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/b109I3WwGYiitho3Z7CS/f-1783041759565-27-136ba96.0cof.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783041759565-27-136ba96.0c
· elide run /tmp/b109I3WwGYiitho3Z7CS/f-17830
Advice
A`
example test: `test/built-ins/Boolean/proto-from-ctor-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-13nviro.r1 · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/qH4j7LVPF4kNUXvjyjzL/f-1783041903951-27-13nviro.r1cf.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783041903951-27-13nviro.r1
· elide run /tmp/qH4j7LVPF4kNUXvjyjzL/f-17830
Advice
A`
example test: `test/built-ins/Array/of/proto-from-ctor-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-13v8su3.oh · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/0y42poOUCSHZGWcb5OOT/f-1783042066739-27-13v8su3.ohdx.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042066739-27-13v8su3.oh
· elide run /tmp/0y42poOUCSHZGWcb5OOT/f-17830
Advice
A`
example test: `test/built-ins/Symbol/unscopables/cross-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-14fub6r.hk · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/J1OexIgqSkiwMqrj75aj/f-1783041769183-27-14fub6r.hk4x.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783041769183-27-14fub6r.hk
· elide run /tmp/J1OexIgqSkiwMqrj75aj/f-17830
Advice
A`
example test: `test/built-ins/Function/call-bind-this-realm-value.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-14truqv.j1 · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/J1OexIgqSkiwMqrj75aj/f-1783041765496-27-14truqv.j111.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783041765496-27-14truqv.j1
· elide run /tmp/J1OexIgqSkiwMqrj75aj/f-17830
Advice
A`
example test: `test/built-ins/FinalizationRegistry/proto-from-ctor-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-153veyy.jl · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/LBscudCSq1vFX7P6ipyC/f-1783041774145-27-153veyy.jlf1.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783041774145-27-153veyy.jl
· elide run /tmp/LBscudCSq1vFX7P6ipyC/f-17830
Advice
A`
example test: `test/built-ins/Number/proto-from-ctor-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-15ctz4k.a9 · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/qJaPKOB4f4gghotKTrBr/f-1783042049235-27-15ctz4k.a971.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042049235-27-15ctz4k.a9
· elide run /tmp/qJaPKOB4f4gghotKTrBr/f-17830
Advice
A`
example test: `test/built-ins/Proxy/isExtensible/trap-is-not-callable-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-15g5182.n3 · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/0y42poOUCSHZGWcb5OOT/f-1783042167921-27-15g5182.n325.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042167921-27-15g5182.n3
· elide run /tmp/0y42poOUCSHZGWcb5OOT/f-17830
Advice
A`
example test: `test/built-ins/Array/prototype/concat/create-proto-from-ctor-realm-array.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-15pmxz.bn1 · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/qH4j7LVPF4kNUXvjyjzL/f-1783041769397-27-15pmxz.bn1u5.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783041769397-27-15pmxz.bn1
· elide run /tmp/qH4j7LVPF4kNUXvjyjzL/f-17830
Advice
A`
example test: `test/built-ins/Function/proto-from-ctor-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-15xgap3.cr · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/6VDeeDx968HdVk60WPQF/f-1783042109674-27-15xgap3.cr36.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042109674-27-15xgap3.cr
· elide run /tmp/6VDeeDx968HdVk60WPQF/f-17830
Advice
A`
example test: `test/language/expressions/tagged-template/cache-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-16gmfuy.<n> · elide run`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/b109I3WwGYiitho3Z7CS/f-1783042045204-27-16gmfuy.42rd.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042045204-27-16gmfuy.42
· elide run /tmp/b109I3WwGYiitho3Z7CS/f-17830
Advice
A`
example test: `test/built-ins/Proxy/construct/trap-is-undefined-proto-from-newtarget-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-16hhyeu.lr · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/6VDeeDx968HdVk60WPQF/f-1783042269426-27-16hhyeu.lrtz.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042269426-27-16hhyeu.lr
· elide run /tmp/6VDeeDx968HdVk60WPQF/f-17830
Advice
A`
example test: `test/built-ins/RegExp/prototype/ignoreCase/cross-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-16tglqf.5e · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/qJaPKOB4f4gghotKTrBr/f-1783042066737-27-16tglqf.5ej1.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042066737-27-16tglqf.5e
· elide run /tmp/qJaPKOB4f4gghotKTrBr/f-17830
Advice
A`
example test: `test/built-ins/Symbol/unscopables/cross-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-171a8za.7g · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/qH4j7LVPF4kNUXvjyjzL/f-1783041801760-27-171a8za.7g5l.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783041801760-27-171a8za.7g
· elide run /tmp/qH4j7LVPF4kNUXvjyjzL/f-17830
Advice
A`
example test: `test/built-ins/WeakRef/proto-from-ctor-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-17gtplm.1a · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/hTOOosumwEHK0StV9C29/f-1783042269258-27-17gtplm.1alr.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042269258-27-17gtplm.1a
· elide run /tmp/hTOOosumwEHK0StV9C29/f-17830
Advice
A`
example test: `test/built-ins/RegExp/prototype/global/cross-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-17u084h.2o · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/C5P3vBG632jHBGNCXrtz/f-1783042438367-27-17u084h.2of3.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042438367-27-17u084h.2o
· elide run /tmp/C5P3vBG632jHBGNCXrtz/f-17830
Advice
A`
example test: `test/annexB/built-ins/RegExp/legacy-accessors/rightContext/this-cross-realm-constructor.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-188w13t.dk · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/C5P3vBG632jHBGNCXrtz/f-1783042189632-27-188w13t.dkq8.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042189632-27-188w13t.dk
· elide run /tmp/C5P3vBG632jHBGNCXrtz/f-17830
Advice
A`
example test: `test/built-ins/Array/prototype/slice/create-proto-from-ctor-realm-non-array.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-18grky7.3n · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/7o3Dll5PNwWGTbDBGxPG/f-1783042066430-27-18grky7.3nhx.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042066430-27-18grky7.3n
· elide run /tmp/7o3Dll5PNwWGTbDBGxPG/f-17830
Advice
A`
example test: `test/built-ins/Symbol/keyFor/cross-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-18vk0bd.ix · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/J1OexIgqSkiwMqrj75aj/f-1783042193117-27-18vk0bd.ixut.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042193117-27-18vk0bd.ix
· elide run /tmp/J1OexIgqSkiwMqrj75aj/f-17830
Advice
A`
example test: `test/built-ins/Array/prototype/splice/create-proto-from-ctor-realm-non-array.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-191sw8t.j2 · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/qJaPKOB4f4gghotKTrBr/f-1783041755110-27-191sw8t.j2t9.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783041755110-27-191sw8t.j2
· elide run /tmp/qJaPKOB4f4gghotKTrBr/f-17830
Advice
A`
example test: `test/built-ins/Array/proto-from-ctor-realm-one.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1936sbk.5d · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/qJaPKOB4f4gghotKTrBr/f-1783041931148-27-1936sbk.5dr5.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783041931148-27-1936sbk.5d
· elide run /tmp/qJaPKOB4f4gghotKTrBr/f-17830
Advice
A`
example test: `test/built-ins/JSON/stringify/replacer-array-proxy-revoked-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-19bb577.<n> · elide run`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/LBscudCSq1vFX7P6ipyC/f-1783042173460-27-19bb577.34x1.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042173460-27-19bb577.34
· elide run /tmp/LBscudCSq1vFX7P6ipyC/f-17830
Advice
A`
example test: `test/built-ins/Array/prototype/filter/create-proto-from-ctor-realm-non-array.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-19i8w3h.vc · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/7o3Dll5PNwWGTbDBGxPG/f-1783042046242-27-19i8w3h.vclh.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042046242-27-19i8w3h.vc
· elide run /tmp/7o3Dll5PNwWGTbDBGxPG/f-17830
Advice
A`
example test: `test/built-ins/Proxy/defineProperty/targetdesc-not-compatible-descriptor-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-19mdurm.pb · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/b109I3WwGYiitho3Z7CS/f-1783042183130-27-19mdurm.pbz6.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042183130-27-19mdurm.pb
· elide run /tmp/b109I3WwGYiitho3Z7CS/f-17830
Advice
A`
example test: `test/built-ins/Array/prototype/map/create-proto-from-ctor-realm-non-array.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-19r78v5.oc · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/hTOOosumwEHK0StV9C29/f-1783042048811-27-19r78v5.oc8z.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042048811-27-19r78v5.oc
· elide run /tmp/hTOOosumwEHK0StV9C29/f-17830
Advice
A`
example test: `test/built-ins/Proxy/has/trap-is-not-callable-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-19wn7da.c7 · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/b109I3WwGYiitho3Z7CS/f-1783042048786-27-19wn7da.c7a6.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042048786-27-19wn7da.c7
· elide run /tmp/b109I3WwGYiitho3Z7CS/f-17830
Advice
A`
example test: `test/built-ins/Proxy/has/trap-is-not-callable-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1a50wcu.hn · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/b109I3WwGYiitho3Z7CS/f-1783042189628-27-1a50wcu.hnzt.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042189628-27-1a50wcu.hn
· elide run /tmp/b109I3WwGYiitho3Z7CS/f-17830
Advice
A`
example test: `test/built-ins/Array/prototype/slice/create-proto-from-ctor-realm-array.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1aqo2n.i5o · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/LBscudCSq1vFX7P6ipyC/f-1783041765503-27-1aqo2n.i5o7i.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783041765503-27-1aqo2n.i5o
· elide run /tmp/LBscudCSq1vFX7P6ipyC/f-17830
Advice
A`
example test: `test/built-ins/FinalizationRegistry/proto-from-ctor-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1aqzxie.0d · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/j15nCMoGHUiPJahp9tTh/f-1783042045027-27-1aqzxie.0dmh.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042045027-27-1aqzxie.0d
· elide run /tmp/j15nCMoGHUiPJahp9tTh/f-17830
Advice
A`
example test: `test/built-ins/Proxy/construct/trap-is-not-callable-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1b5neym.yl · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/7o3Dll5PNwWGTbDBGxPG/f-1783042478528-27-1b5neym.yll4.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042478528-27-1b5neym.yl
· elide run /tmp/7o3Dll5PNwWGTbDBGxPG/f-17830
Advice
A`
example test: `test/built-ins/TypedArrayConstructors/internals/DefineOwnProperty/BigInt/detached-buffer-throws-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1b94kdi.h4 · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/b109I3WwGYiitho3Z7CS/f-1783042066673-27-1b94kdi.h4tk.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042066673-27-1b94kdi.h4
· elide run /tmp/b109I3WwGYiitho3Z7CS/f-17830
Advice
A`
example test: `test/built-ins/Symbol/toPrimitive/cross-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1bbnaxt.5k · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/LBscudCSq1vFX7P6ipyC/f-1783042305478-27-1bbnaxt.5kkg.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042305478-27-1bbnaxt.5k
· elide run /tmp/LBscudCSq1vFX7P6ipyC/f-17830
Advice
A`
example test: `test/built-ins/TypedArrayConstructors/ctors/length-arg/proto-from-ctor-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1bde54c.wc · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/qJaPKOB4f4gghotKTrBr/f-1783041921252-27-1bde54c.wcxk.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783041921252-27-1bde54c.wc
· elide run /tmp/qJaPKOB4f4gghotKTrBr/f-17830
Advice
A`
example test: `test/built-ins/Error/isError/errors-other-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1c0ypvv.hh · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/J1OexIgqSkiwMqrj75aj/f-1783042270423-27-1c0ypvv.hhm9.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042270423-27-1c0ypvv.hh
· elide run /tmp/J1OexIgqSkiwMqrj75aj/f-17830
Advice
A`
example test: `test/built-ins/RegExp/prototype/unicode/cross-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1cdnrv3.7z · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/0y42poOUCSHZGWcb5OOT/f-1783042045873-27-1cdnrv3.7zgq.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042045873-27-1cdnrv3.7z
· elide run /tmp/0y42poOUCSHZGWcb5OOT/f-17830
Advice
A`
example test: `test/built-ins/Proxy/defineProperty/trap-is-not-callable-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1cdqpjk.io · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/6VDeeDx968HdVk60WPQF/f-1783042147298-27-1cdqpjk.iosx.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042147298-27-1cdqpjk.io
· elide run /tmp/6VDeeDx968HdVk60WPQF/f-17830
Advice
A`
example test: `test/language/types/reference/put-value-prop-base-primitive-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1cn6b7w.<n> · elide run`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/J1OexIgqSkiwMqrj75aj/f-1783041769387-27-1cn6b7w.580z.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783041769387-27-1cn6b7w.58
· elide run /tmp/J1OexIgqSkiwMqrj75aj/f-17830
Advice
A`
example test: `test/built-ins/Function/proto-from-ctor-realm-prototype.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1cokdja.2w [js] createA`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/C5P3vBG632jHBGNCXrtz/f-1783042088905-27-1cokdja.2wpn.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042088905-27-1cokdja.2w
[js] createAndInstantiateClass             f-178304208`
example test: `test/language/expressions/class/private-method-brand-check-multiple-evaluations-of-class-realm-function-ctor.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1ctpl3m.lx · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/6VDeeDx968HdVk60WPQF/f-1783042167927-27-1ctpl3m.lx8b.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042167927-27-1ctpl3m.lx
· elide run /tmp/6VDeeDx968HdVk60WPQF/f-17830
Advice
A`
example test: `test/built-ins/Array/prototype/concat/create-proto-from-ctor-realm-non-array.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1e2tsan.gi · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/j15nCMoGHUiPJahp9tTh/f-1783042045199-27-1e2tsan.gipc.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042045199-27-1e2tsan.gi
· elide run /tmp/j15nCMoGHUiPJahp9tTh/f-17830
Advice
A`
example test: `test/built-ins/Proxy/construct/trap-is-undefined-proto-from-newtarget-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1egur51.kn · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/0y42poOUCSHZGWcb5OOT/f-1783042211891-27-1egur51.kn68.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042211891-27-1egur51.kn
· elide run /tmp/0y42poOUCSHZGWcb5OOT/f-17830
Advice
A`
example test: `test/built-ins/Function/prototype/bind/get-fn-realm-recursive.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1f8rr8s.5v · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/6VDeeDx968HdVk60WPQF/f-1783042478781-27-1f8rr8s.5vlz.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042478781-27-1f8rr8s.5v
· elide run /tmp/6VDeeDx968HdVk60WPQF/f-17830
Advice
A`
example test: `test/built-ins/TypedArrayConstructors/internals/Delete/BigInt/detached-buffer-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1fevmgj.1n · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/qJaPKOB4f4gghotKTrBr/f-1783041943289-27-1fevmgj.1nev.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783041943289-27-1fevmgj.1n
· elide run /tmp/qJaPKOB4f4gghotKTrBr/f-17830
Advice
A`
example test: `test/built-ins/NativeErrors/TypeError/proto-from-ctor-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1g8rtum.p4 · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/qH4j7LVPF4kNUXvjyjzL/f-1783042051687-27-1g8rtum.p4lw.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042051687-27-1g8rtum.p4
· elide run /tmp/qH4j7LVPF4kNUXvjyjzL/f-17830
Advice
A`
example test: `test/built-ins/Proxy/revocable/tco-fn-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1gqzj22.p2 [js] createA`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/b109I3WwGYiitho3Z7CS/f-1783042088981-27-1gqzj22.p2im.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042088981-27-1gqzj22.p2
[js] createAndInstantiateClass             f-178304208`
example test: `test/language/expressions/class/private-setter-brand-check-multiple-evaluations-of-class-realm-function-ctor.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1gssha0.zj · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/qJaPKOB4f4gghotKTrBr/f-1783041942996-27-1gssha0.zj7p.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783041942996-27-1gssha0.zj
· elide run /tmp/qJaPKOB4f4gghotKTrBr/f-17830
Advice
A`
example test: `test/built-ins/NativeErrors/SyntaxError/proto-from-ctor-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1h5owc6.r3 · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/6VDeeDx968HdVk60WPQF/f-1783042045558-27-1h5owc6.r3w2.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042045558-27-1h5owc6.r3
· elide run /tmp/6VDeeDx968HdVk60WPQF/f-17830
Advice
A`
example test: `test/built-ins/Proxy/defineProperty/targetdesc-not-compatible-descriptor-not-configurable-target-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1h5t37.jqh · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/7o3Dll5PNwWGTbDBGxPG/f-1783042212064-27-1h5t37.jqh04.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042212064-27-1h5t37.jqh
· elide run /tmp/7o3Dll5PNwWGTbDBGxPG/f-17830
Advice
A`
example test: `test/built-ins/Function/prototype/bind/proto-from-ctor-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1ho22mw.fs · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/qH4j7LVPF4kNUXvjyjzL/f-1783042269550-27-1ho22mw.fs39.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042269550-27-1ho22mw.fs
· elide run /tmp/qH4j7LVPF4kNUXvjyjzL/f-17830
Advice
A`
example test: `test/built-ins/RegExp/prototype/multiline/cross-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1hppsgn.1a · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/hTOOosumwEHK0StV9C29/f-1783041943479-27-1hppsgn.1agv.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783041943479-27-1hppsgn.1a
· elide run /tmp/hTOOosumwEHK0StV9C29/f-17830
Advice
A`
example test: `test/built-ins/NativeErrors/URIError/proto-from-ctor-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1hwij5l.1p · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/6VDeeDx968HdVk60WPQF/f-1783042276103-27-1hwij5l.1ptx.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042276103-27-1hwij5l.1p
· elide run /tmp/6VDeeDx968HdVk60WPQF/f-17830
Advice
A`
example test: `test/built-ins/ShadowRealm/prototype/evaluate/wrapped-function-proto-from-caller-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1imp92r.6g · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/qH4j7LVPF4kNUXvjyjzL/f-1783041755137-27-1imp92r.6gjh.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783041755137-27-1imp92r.6g
· elide run /tmp/qH4j7LVPF4kNUXvjyjzL/f-17830
Advice
A`
example test: `test/built-ins/Array/proto-from-ctor-realm-one.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1jbrqqv.b9 · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/j15nCMoGHUiPJahp9tTh/f-1783042478778-27-1jbrqqv.b92x.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042478778-27-1jbrqqv.b9
· elide run /tmp/j15nCMoGHUiPJahp9tTh/f-17830
Advice
A`
example test: `test/built-ins/TypedArrayConstructors/internals/Delete/BigInt/detached-buffer-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1jow214.6h · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/j15nCMoGHUiPJahp9tTh/f-1783041764579-27-1jow214.6hqe.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783041764579-27-1jow214.6h
· elide run /tmp/j15nCMoGHUiPJahp9tTh/f-17830
Advice
A`
example test: `test/built-ins/DisposableStack/proto-from-ctor-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1jvaqq.y31 · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/b109I3WwGYiitho3Z7CS/f-1783042044669-27-1jvaqq.y312e.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042044669-27-1jvaqq.y31
· elide run /tmp/b109I3WwGYiitho3Z7CS/f-17830
Advice
A`
example test: `test/built-ins/Proxy/construct/return-not-object-throws-boolean-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1jywk19.c2 · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/LBscudCSq1vFX7P6ipyC/f-1783041779405-27-1jywk19.c21h.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783041779405-27-1jywk19.c2
· elide run /tmp/LBscudCSq1vFX7P6ipyC/f-17830
Advice
A`
example test: `test/built-ins/Proxy/get-fn-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1k1iozc.kc · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/0y42poOUCSHZGWcb5OOT/f-1783042045196-27-1k1iozc.kccz.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042045196-27-1k1iozc.kc
· elide run /tmp/0y42poOUCSHZGWcb5OOT/f-17830
Advice
A`
example test: `test/built-ins/Proxy/construct/trap-is-undefined-proto-from-cross-realm-newtarget.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1k6m3mw.z0 · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/UlmBLoztYqXQV6JJ9uTR/f-1783042305557-27-1k6m3mw.z0qq.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042305557-27-1k6m3mw.z0
· elide run /tmp/UlmBLoztYqXQV6JJ9uTR/f-17830
Advice
A`
example test: `test/built-ins/TypedArrayConstructors/ctors/no-args/proto-from-ctor-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1kbp582.gy · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/0tGETYiHwgNWKpDLR3IZ/f-1783042306637-27-1kbp582.gykc.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042306637-27-1kbp582.gy
· elide run /tmp/0tGETYiHwgNWKpDLR3IZ/f-17830
Advice
A`
example test: `test/built-ins/TypedArrayConstructors/ctors-bigint/no-args/proto-from-ctor-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1kehanz.2l · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/LBscudCSq1vFX7P6ipyC/f-1783042050451-27-1kehanz.2lgt.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042050451-27-1kehanz.2l
· elide run /tmp/LBscudCSq1vFX7P6ipyC/f-17830
Advice
A`
example test: `test/built-ins/Proxy/preventExtensions/trap-is-not-callable-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1l3hvgw.vl · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/b109I3WwGYiitho3Z7CS/f-1783042044857-27-1l3hvgw.vlu1.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042044857-27-1l3hvgw.vl
· elide run /tmp/b109I3WwGYiitho3Z7CS/f-17830
Advice
A`
example test: `test/built-ins/Proxy/construct/return-not-object-throws-symbol-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1lr5k9m.ed · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/qH4j7LVPF4kNUXvjyjzL/f-1783041921256-27-1lr5k9m.ediq.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783041921256-27-1lr5k9m.ed
· elide run /tmp/qH4j7LVPF4kNUXvjyjzL/f-17830
Advice
A`
example test: `test/built-ins/Error/isError/errors-other-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1ltpx8z.si · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/UlmBLoztYqXQV6JJ9uTR/f-1783041763983-27-1ltpx8z.sik5.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783041763983-27-1ltpx8z.si
· elide run /tmp/UlmBLoztYqXQV6JJ9uTR/f-17830
Advice
A`
example test: `test/built-ins/Date/proto-from-ctor-realm-zero.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1m7yx35.<n> · elide run`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/qH4j7LVPF4kNUXvjyjzL/f-1783042066678-27-1m7yx35.60ft.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042066678-27-1m7yx35.60
· elide run /tmp/qH4j7LVPF4kNUXvjyjzL/f-17830
Advice
A`
example test: `test/built-ins/Symbol/toStringTag/cross-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1m8m56r.zo · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/0tGETYiHwgNWKpDLR3IZ/f-1783042047040-27-1m8m56r.zopt.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042047040-27-1m8m56r.zo
· elide run /tmp/0tGETYiHwgNWKpDLR3IZ/f-17830
Advice
A`
example test: `test/built-ins/Proxy/get/trap-is-not-callable-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1mk6h1.1y0 · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/0y42poOUCSHZGWcb5OOT/f-1783042438319-27-1mk6h1.1y0zz.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042438319-27-1mk6h1.1y0
· elide run /tmp/0y42poOUCSHZGWcb5OOT/f-17830
Advice
A`
example test: `test/annexB/built-ins/RegExp/legacy-accessors/leftContext/this-cross-realm-constructor.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1msldif.fj · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/LBscudCSq1vFX7P6ipyC/f-1783041776978-27-1msldif.fjoq.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783041776978-27-1msldif.fj
· elide run /tmp/LBscudCSq1vFX7P6ipyC/f-17830
Advice
A`
example test: `test/built-ins/Object/proto-from-ctor-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1mydyqc.ur · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/0tGETYiHwgNWKpDLR3IZ/f-1783041802482-27-1mydyqc.urvv.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783041802482-27-1mydyqc.ur
· elide run /tmp/0tGETYiHwgNWKpDLR3IZ/f-17830
Advice
A`
example test: `test/built-ins/WeakSet/proto-from-ctor-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1nb6wom.d2 · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/6VDeeDx968HdVk60WPQF/f-1783041770302-27-1nb6wom.d27a.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783041770302-27-1nb6wom.d2
· elide run /tmp/6VDeeDx968HdVk60WPQF/f-17830
Advice
A`
example test: `test/built-ins/Iterator/proto-from-ctor-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1ne4q01.9c · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/LBscudCSq1vFX7P6ipyC/f-1783041942475-27-1ne4q01.9c5h.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783041942475-27-1ne4q01.9c
· elide run /tmp/LBscudCSq1vFX7P6ipyC/f-17830
Advice
A`
example test: `test/built-ins/NativeErrors/RangeError/proto-from-ctor-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1netowh.v0 · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/UlmBLoztYqXQV6JJ9uTR/f-1783042276042-27-1netowh.v0yg.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042276042-27-1netowh.v0
· elide run /tmp/UlmBLoztYqXQV6JJ9uTR/f-17830
Advice
A`
example test: `test/built-ins/ShadowRealm/prototype/evaluate/throws-error-from-ctor-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1nfdll7.fg · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/0y42poOUCSHZGWcb5OOT/f-1783041755968-27-1nfdll7.fgr6.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783041755968-27-1nfdll7.fg
· elide run /tmp/0y42poOUCSHZGWcb5OOT/f-17830
Advice
A`
example test: `test/built-ins/ArrayBuffer/proto-from-ctor-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1niuoe0.nu · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/0y42poOUCSHZGWcb5OOT/f-1783042066588-27-1niuoe0.nuyy.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042066588-27-1niuoe0.nu
· elide run /tmp/0y42poOUCSHZGWcb5OOT/f-17830
Advice
A`
example test: `test/built-ins/Symbol/search/cross-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1nwpg22.8y · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/hTOOosumwEHK0StV9C29/f-1783042269321-27-1nwpg22.8yad.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042269321-27-1nwpg22.8y
· elide run /tmp/hTOOosumwEHK0StV9C29/f-17830
Advice
A`
example test: `test/built-ins/RegExp/prototype/hasIndices/cross-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1o9k91l.7s · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/qJaPKOB4f4gghotKTrBr/f-1783042308260-27-1o9k91l.7s4n.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042308260-27-1o9k91l.7s
· elide run /tmp/qJaPKOB4f4gghotKTrBr/f-17830
Advice
A`
example test: `test/built-ins/TypedArrayConstructors/internals/Set/detached-buffer-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1oi9tz.rfg · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/hTOOosumwEHK0StV9C29/f-1783042479310-27-1oi9tz.rfgxt.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042479310-27-1oi9tz.rfg
· elide run /tmp/hTOOosumwEHK0StV9C29/f-17830
Advice
A`
example test: `test/built-ins/TypedArrayConstructors/internals/Set/BigInt/detached-buffer-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1ojp2h.mo2 · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/0y42poOUCSHZGWcb5OOT/f-1783042267931-27-1ojp2h.mo2ra.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042267931-27-1ojp2h.mo2
· elide run /tmp/0y42poOUCSHZGWcb5OOT/f-17830
Advice
A`
example test: `test/built-ins/RegExp/prototype/Symbol.split/splitter-proto-from-ctor-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1pcvqno.lw · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/qJaPKOB4f4gghotKTrBr/f-1783042065951-27-1pcvqno.lwzi.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042065951-27-1pcvqno.lw
· elide run /tmp/qJaPKOB4f4gghotKTrBr/f-17830
Advice
A`
example test: `test/built-ins/Symbol/asyncIterator/cross-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1pff6cv.si · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/qH4j7LVPF4kNUXvjyjzL/f-1783041757927-27-1pff6cv.siog.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783041757927-27-1pff6cv.si
· elide run /tmp/qH4j7LVPF4kNUXvjyjzL/f-17830
Advice
A`
example test: `test/built-ins/AsyncGeneratorFunction/proto-from-ctor-realm-prototype.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1proaze.9l · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/J1OexIgqSkiwMqrj75aj/f-1783041921345-27-1proaze.9lq8.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783041921345-27-1proaze.9l
· elide run /tmp/J1OexIgqSkiwMqrj75aj/f-17830
Advice
A`
example test: `test/built-ins/Error/isError/non-error-objects-other-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1q0dz78.je · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/hTOOosumwEHK0StV9C29/f-1783041755155-27-1q0dz78.je9s.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783041755155-27-1q0dz78.je
· elide run /tmp/hTOOosumwEHK0StV9C29/f-17830
Advice
A`
example test: `test/built-ins/Array/proto-from-ctor-realm-two.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1q1i8b8.<n> · elide run`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/0tGETYiHwgNWKpDLR3IZ/f-1783042269552-27-1q1i8b8.47y7.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042269552-27-1q1i8b8.47
· elide run /tmp/0tGETYiHwgNWKpDLR3IZ/f-17830
Advice
A`
example test: `test/built-ins/RegExp/prototype/multiline/cross-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1qlf1er.<n> · elide run`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/qJaPKOB4f4gghotKTrBr/f-1783042306398-27-1qlf1er.95yv.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042306398-27-1qlf1er.95
· elide run /tmp/qJaPKOB4f4gghotKTrBr/f-17830
Advice
A`
example test: `test/built-ins/TypedArrayConstructors/ctors-bigint/buffer-arg/proto-from-ctor-realm-sab.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1qoex8o.nb · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/LBscudCSq1vFX7P6ipyC/f-1783042065957-27-1qoex8o.nbdn.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042065957-27-1qoex8o.nb
· elide run /tmp/LBscudCSq1vFX7P6ipyC/f-17830
Advice
A`
example test: `test/built-ins/Symbol/asyncIterator/cross-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1qqxd5b.8m · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/C5P3vBG632jHBGNCXrtz/f-1783041764595-27-1qqxd5b.8mhg.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783041764595-27-1qqxd5b.8m
· elide run /tmp/C5P3vBG632jHBGNCXrtz/f-17830
Advice
A`
example test: `test/built-ins/DisposableStack/proto-from-ctor-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1qud6te.<n> · elide run`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/J1OexIgqSkiwMqrj75aj/f-1783041759554-27-1qud6te.82ru.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783041759554-27-1qud6te.82
· elide run /tmp/J1OexIgqSkiwMqrj75aj/f-17830
Advice
A`
example test: `test/built-ins/Boolean/proto-from-ctor-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1rferlq.1l · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/0y42poOUCSHZGWcb5OOT/f-1783042307018-27-1rferlq.1l3z.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042307018-27-1rferlq.1l
· elide run /tmp/0y42poOUCSHZGWcb5OOT/f-17830
Advice
A`
example test: `test/built-ins/TypedArrayConstructors/ctors-bigint/typedarray-arg/proto-from-ctor-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1rkyijx.fu · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/hTOOosumwEHK0StV9C29/f-1783041769177-27-1rkyijx.fu9k.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783041769177-27-1rkyijx.fu
· elide run /tmp/hTOOosumwEHK0StV9C29/f-17830
Advice
A`
example test: `test/built-ins/Function/call-bind-this-realm-undef.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1rpwmou.k3 · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/0tGETYiHwgNWKpDLR3IZ/f-1783041769171-27-1rpwmou.k3v3.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783041769171-27-1rpwmou.k3
· elide run /tmp/0tGETYiHwgNWKpDLR3IZ/f-17830
Advice
A`
example test: `test/built-ins/Function/call-bind-this-realm-undef.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1rpx0sa.fz · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/0tGETYiHwgNWKpDLR3IZ/f-1783041799775-27-1rpx0sa.fzb3.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783041799775-27-1rpx0sa.fz
· elide run /tmp/0tGETYiHwgNWKpDLR3IZ/f-17830
Advice
A`
example test: `test/built-ins/SuppressedError/proto-from-ctor-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1s2ge88.hu · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/6VDeeDx968HdVk60WPQF/f-1783042305887-27-1s2ge88.huvq.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042305887-27-1s2ge88.hu
· elide run /tmp/6VDeeDx968HdVk60WPQF/f-17830
Advice
A`
example test: `test/built-ins/TypedArrayConstructors/ctors/typedarray-arg/proto-from-ctor-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1sickej.oz · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/6VDeeDx968HdVk60WPQF/f-1783042066675-27-1sickej.ozj8.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042066675-27-1sickej.oz
· elide run /tmp/6VDeeDx968HdVk60WPQF/f-17830
Advice
A`
example test: `test/built-ins/Symbol/toPrimitive/cross-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1sozma.got · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/hTOOosumwEHK0StV9C29/f-1783041931143-27-1sozma.got7u.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783041931143-27-1sozma.got
· elide run /tmp/hTOOosumwEHK0StV9C29/f-17830
Advice
A`
example test: `test/built-ins/JSON/stringify/replacer-array-proxy-revoked-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1sygvav.g8 · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/j15nCMoGHUiPJahp9tTh/f-1783042276114-27-1sygvav.g8xw.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042276114-27-1sygvav.g8
· elide run /tmp/j15nCMoGHUiPJahp9tTh/f-17830
Advice
A`
example test: `test/built-ins/ShadowRealm/prototype/evaluate/wrapped-function-proto-from-caller-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1tiv0wr.ze · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/7o3Dll5PNwWGTbDBGxPG/f-1783042306400-27-1tiv0wr.zeg8.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042306400-27-1tiv0wr.ze
· elide run /tmp/7o3Dll5PNwWGTbDBGxPG/f-17830
Advice
A`
example test: `test/built-ins/TypedArrayConstructors/ctors-bigint/buffer-arg/proto-from-ctor-realm-sab.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1tlz6qf.qz · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/LBscudCSq1vFX7P6ipyC/f-1783041800213-27-1tlz6qf.qz3g.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783041800213-27-1tlz6qf.qz
· elide run /tmp/LBscudCSq1vFX7P6ipyC/f-17830
Advice
A`
example test: `test/built-ins/ThrowTypeError/distinct-cross-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1tqbd9r.zy · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/UlmBLoztYqXQV6JJ9uTR/f-1783041755159-27-1tqbd9r.zyjs.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783041755159-27-1tqbd9r.zy
· elide run /tmp/UlmBLoztYqXQV6JJ9uTR/f-17830
Advice
A`
example test: `test/built-ins/Array/proto-from-ctor-realm-two.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1ttixsz.sn · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/LBscudCSq1vFX7P6ipyC/f-1783042044524-27-1ttixsz.snho.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042044524-27-1ttixsz.sn
· elide run /tmp/LBscudCSq1vFX7P6ipyC/f-17830
Advice
A`
example test: `test/built-ins/Proxy/construct/null-handler-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1u6ig8i.1y · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/0tGETYiHwgNWKpDLR3IZ/f-1783042045191-27-1u6ig8i.1yoe.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042045191-27-1u6ig8i.1y
· elide run /tmp/0tGETYiHwgNWKpDLR3IZ/f-17830
Advice
A`
example test: `test/built-ins/Proxy/construct/trap-is-undefined-proto-from-cross-realm-newtarget.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1ubrun9.yr · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/UlmBLoztYqXQV6JJ9uTR/f-1783041799321-27-1ubrun9.yr9x.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783041799321-27-1ubrun9.yr
· elide run /tmp/UlmBLoztYqXQV6JJ9uTR/f-17830
Advice
A`
example test: `test/built-ins/String/proto-from-ctor-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1ulsagz.lc · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/C5P3vBG632jHBGNCXrtz/f-1783042438177-27-1ulsagz.lcpm.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042438177-27-1ulsagz.lc
· elide run /tmp/C5P3vBG632jHBGNCXrtz/f-17830
Advice
A`
example test: `test/annexB/built-ins/RegExp/legacy-accessors/index/this-cross-realm-constructor.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1unxgin.r5 · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/6VDeeDx968HdVk60WPQF/f-1783042479018-27-1unxgin.r5i7.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042479018-27-1unxgin.r5
· elide run /tmp/6VDeeDx968HdVk60WPQF/f-17830
Advice
A`
example test: `test/built-ins/TypedArrayConstructors/internals/GetOwnProperty/BigInt/detached-buffer-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1uqhi00.lq · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/LBscudCSq1vFX7P6ipyC/f-1783042044715-27-1uqhi00.lqa1.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042044715-27-1uqhi00.lq
· elide run /tmp/LBscudCSq1vFX7P6ipyC/f-17830
Advice
A`
example test: `test/built-ins/Proxy/construct/return-not-object-throws-null-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1usmokc.8y · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/0y42poOUCSHZGWcb5OOT/f-1783042044474-27-1usmokc.8y9d.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042044474-27-1usmokc.8y
· elide run /tmp/0y42poOUCSHZGWcb5OOT/f-17830
Advice
A`
example test: `test/built-ins/Proxy/construct/arguments-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1v7j7ib.0o · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/C5P3vBG632jHBGNCXrtz/f-1783042269622-27-1v7j7ib.0orr.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042269622-27-1v7j7ib.0o
· elide run /tmp/C5P3vBG632jHBGNCXrtz/f-17830
Advice
A`
example test: `test/built-ins/RegExp/prototype/source/cross-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1vfnbn3.<n> · elide run`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/hTOOosumwEHK0StV9C29/f-1783041942467-27-1vfnbn3.732j.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783041942467-27-1vfnbn3.73
· elide run /tmp/hTOOosumwEHK0StV9C29/f-17830
Advice
A`
example test: `test/built-ins/NativeErrors/RangeError/proto-from-ctor-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1vlwdah.wn · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/j15nCMoGHUiPJahp9tTh/f-1783042147287-27-1vlwdah.wnl7.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042147287-27-1vlwdah.wn
· elide run /tmp/j15nCMoGHUiPJahp9tTh/f-17830
Advice
A`
example test: `test/language/types/reference/get-value-prop-base-primitive-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1vn2z6h.yw · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/qH4j7LVPF4kNUXvjyjzL/f-1783042045479-27-1vn2z6h.ywg9.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042045479-27-1vn2z6h.yw
· elide run /tmp/qH4j7LVPF4kNUXvjyjzL/f-17830
Advice
A`
example test: `test/built-ins/Proxy/defineProperty/targetdesc-configurable-desc-not-configurable-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1vox6rb.pt · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/LBscudCSq1vFX7P6ipyC/f-1783042049838-27-1vox6rb.ptc5.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042049838-27-1vox6rb.pt
· elide run /tmp/LBscudCSq1vFX7P6ipyC/f-17830
Advice
A`
example test: `test/built-ins/Proxy/ownKeys/return-not-list-object-throws-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1vs8z7f.rf · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/LBscudCSq1vFX7P6ipyC/f-1783042066509-27-1vs8z7f.rfvh.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042066509-27-1vs8z7f.rf
· elide run /tmp/LBscudCSq1vFX7P6ipyC/f-17830
Advice
A`
example test: `test/built-ins/Symbol/matchAll/cross-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1vt6zo2.kk · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/6VDeeDx968HdVk60WPQF/f-1783042045313-27-1vt6zo2.kkr9.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042045313-27-1vt6zo2.kk
· elide run /tmp/6VDeeDx968HdVk60WPQF/f-17830
Advice
A`
example test: `test/built-ins/Proxy/defineProperty/desc-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1vyt6d4.if · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/qJaPKOB4f4gghotKTrBr/f-1783042044674-27-1vyt6d4.if5g.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042044674-27-1vyt6d4.if
· elide run /tmp/qJaPKOB4f4gghotKTrBr/f-17830
Advice
A`
example test: `test/built-ins/Proxy/construct/return-not-object-throws-boolean-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1vzbjub.y9 · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/j15nCMoGHUiPJahp9tTh/f-1783042189630-27-1vzbjub.y91k.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042189630-27-1vzbjub.y9
· elide run /tmp/j15nCMoGHUiPJahp9tTh/f-17830
Advice
A`
example test: `test/built-ins/Array/prototype/slice/create-proto-from-ctor-realm-non-array.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1vzwqi5.xj · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/qJaPKOB4f4gghotKTrBr/f-1783042045482-27-1vzwqi5.xjox.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042045482-27-1vzwqi5.xj
· elide run /tmp/qJaPKOB4f4gghotKTrBr/f-17830
Advice
A`
example test: `test/built-ins/Proxy/defineProperty/targetdesc-configurable-desc-not-configurable-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1w0lcyb.h0 · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/b109I3WwGYiitho3Z7CS/f-1783042052125-27-1w0lcyb.h0dz.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042052125-27-1w0lcyb.h0
· elide run /tmp/b109I3WwGYiitho3Z7CS/f-17830
Advice
A`
example test: `test/built-ins/Proxy/setPrototypeOf/trap-is-not-callable-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1w28kmp.yj · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/b109I3WwGYiitho3Z7CS/f-1783042267930-27-1w28kmp.yjbs.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042267930-27-1w28kmp.yj
· elide run /tmp/b109I3WwGYiitho3Z7CS/f-17830
Advice
A`
example test: `test/built-ins/RegExp/prototype/Symbol.split/splitter-proto-from-ctor-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1w469k0.p7 · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/qJaPKOB4f4gghotKTrBr/f-1783042438220-27-1w469k0.p7tx.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042438220-27-1w469k0.p7
· elide run /tmp/qJaPKOB4f4gghotKTrBr/f-17830
Advice
A`
example test: `test/annexB/built-ins/RegExp/legacy-accessors/input/this-cross-realm-constructor.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1wkdj06.8f · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/6VDeeDx968HdVk60WPQF/f-1783042438222-27-1wkdj06.8f3z.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042438222-27-1wkdj06.8f
· elide run /tmp/6VDeeDx968HdVk60WPQF/f-17830
Advice
A`
example test: `test/annexB/built-ins/RegExp/legacy-accessors/input/this-cross-realm-constructor.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1xd73zr.cr · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/j15nCMoGHUiPJahp9tTh/f-1783042478890-27-1xd73zr.crsi.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042478890-27-1xd73zr.cr
· elide run /tmp/j15nCMoGHUiPJahp9tTh/f-17830
Advice
A`
example test: `test/built-ins/TypedArrayConstructors/internals/Get/BigInt/detached-buffer-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1xq6vsv.kc · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/b109I3WwGYiitho3Z7CS/f-1783042045443-27-1xq6vsv.kcq1.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042045443-27-1xq6vsv.kc
· elide run /tmp/b109I3WwGYiitho3Z7CS/f-17830
Advice
A`
example test: `test/built-ins/Proxy/defineProperty/null-handler-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1y37xwm.vo · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/hTOOosumwEHK0StV9C29/f-1783042066008-27-1y37xwm.voqq.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042066008-27-1y37xwm.vo
· elide run /tmp/hTOOosumwEHK0StV9C29/f-17830
Advice
A`
example test: `test/built-ins/Symbol/dispose/cross-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1ybc7vp.ga · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/0tGETYiHwgNWKpDLR3IZ/f-1783042052104-27-1ybc7vp.gain.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042052104-27-1ybc7vp.ga
· elide run /tmp/0tGETYiHwgNWKpDLR3IZ/f-17830
Advice
A`
example test: `test/built-ins/Proxy/setPrototypeOf/trap-is-not-callable-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1yehd1i.ic · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/qH4j7LVPF4kNUXvjyjzL/f-1783042066177-27-1yehd1i.icc2.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042066177-27-1yehd1i.ic
· elide run /tmp/qH4j7LVPF4kNUXvjyjzL/f-17830
Advice
A`
example test: `test/built-ins/Symbol/for/cross-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1yvbr78.0f · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/LBscudCSq1vFX7P6ipyC/f-1783042308262-27-1yvbr78.0fxp.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042308262-27-1yvbr78.0f
· elide run /tmp/LBscudCSq1vFX7P6ipyC/f-17830
Advice
A`
example test: `test/built-ins/TypedArrayConstructors/internals/Set/detached-buffer-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-21xalo.34w · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/UlmBLoztYqXQV6JJ9uTR/f-1783041757381-27-21xalo.34wlu.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783041757381-27-21xalo.34w
· elide run /tmp/UlmBLoztYqXQV6JJ9uTR/f-17830
Advice
A`
example test: `test/built-ins/AsyncFunction/proto-from-ctor-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-2ho1mu.3tz · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/6VDeeDx968HdVk60WPQF/f-1783042066452-27-2ho1mu.3tzs4.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042066452-27-2ho1mu.3tz
· elide run /tmp/6VDeeDx968HdVk60WPQF/f-17830
Advice
A`
example test: `test/built-ins/Symbol/match/cross-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-2o1k0e.aim · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/qH4j7LVPF4kNUXvjyjzL/f-1783042478900-27-2o1k0e.aimb1.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042478900-27-2o1k0e.aim
· elide run /tmp/qH4j7LVPF4kNUXvjyjzL/f-17830
Advice
A`
example test: `test/built-ins/TypedArrayConstructors/internals/Get/BigInt/detached-buffer-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-2woa9u.3bw · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/C5P3vBG632jHBGNCXrtz/f-1783041761262-27-2woa9u.3bwih.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783041761262-27-2woa9u.3bw
· elide run /tmp/C5P3vBG632jHBGNCXrtz/f-17830
Advice
A`
example test: `test/built-ins/DataView/proto-from-ctor-realm-sab.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-2z685w.rhs · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/b109I3WwGYiitho3Z7CS/f-1783041779390-27-2z685w.rhsd7.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783041779390-27-2z685w.rhs
· elide run /tmp/b109I3WwGYiitho3Z7CS/f-17830
Advice
A`
example test: `test/built-ins/Proxy/get-fn-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-30n57l.vsu · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/UlmBLoztYqXQV6JJ9uTR/f-1783042066590-27-30n57l.vsucn.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042066590-27-30n57l.vsu
· elide run /tmp/UlmBLoztYqXQV6JJ9uTR/f-17830
Advice
A`
example test: `test/built-ins/Symbol/search/cross-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-38rcxb.i55 · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/0tGETYiHwgNWKpDLR3IZ/f-1783042270791-27-38rcxb.i55mr.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042270791-27-38rcxb.i55
· elide run /tmp/0tGETYiHwgNWKpDLR3IZ/f-17830
Advice
A`
example test: `test/built-ins/RegExp/prototype/unicodeSets/cross-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-39oax4.qkg · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/0y42poOUCSHZGWcb5OOT/f-1783042211139-27-39oax4.qkga3.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042211139-27-39oax4.qkg
· elide run /tmp/0y42poOUCSHZGWcb5OOT/f-17830
Advice
A`
example test: `test/built-ins/Function/prototype/apply/this-not-callable-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-3aoyqs.52z · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/hTOOosumwEHK0StV9C29/f-1783042044926-27-3aoyqs.52z5v.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042044926-27-3aoyqs.52z
· elide run /tmp/hTOOosumwEHK0StV9C29/f-17830
Advice
A`
example test: `test/built-ins/Proxy/construct/return-not-object-throws-undefined-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-3cmknk.x9j · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/7o3Dll5PNwWGTbDBGxPG/f-1783042045323-27-3cmknk.x9jra.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042045323-27-3cmknk.x9j
· elide run /tmp/7o3Dll5PNwWGTbDBGxPG/f-17830
Advice
A`
example test: `test/built-ins/Proxy/defineProperty/desc-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-3ud2nc.6nw · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/J1OexIgqSkiwMqrj75aj/f-1783041769898-27-3ud2nc.6nwca.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783041769898-27-3ud2nc.6nw
· elide run /tmp/J1OexIgqSkiwMqrj75aj/f-17830
Advice
A`
example test: `test/built-ins/GeneratorFunction/proto-from-ctor-realm-prototype.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-3uys6e.awn · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/j15nCMoGHUiPJahp9tTh/f-1783042268134-27-3uys6e.awnod.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042268134-27-3uys6e.awn
· elide run /tmp/j15nCMoGHUiPJahp9tTh/f-17830
Advice
A`
example test: `test/built-ins/RegExp/prototype/dotAll/cross-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-3x0yl4.fiy · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/6VDeeDx968HdVk60WPQF/f-1783041769881-27-3x0yl4.fiyvh.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783041769881-27-3x0yl4.fiy
· elide run /tmp/6VDeeDx968HdVk60WPQF/f-17830
Advice
A`
example test: `test/built-ins/GeneratorFunction/proto-from-ctor-realm-prototype.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-495gsp.bio · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/LBscudCSq1vFX7P6ipyC/f-1783041769426-27-495gsp.biom6.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783041769426-27-495gsp.bio
· elide run /tmp/LBscudCSq1vFX7P6ipyC/f-17830
Advice
A`
example test: `test/built-ins/Function/proto-from-ctor-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-4fk585.vfm · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/LBscudCSq1vFX7P6ipyC/f-1783042305287-27-4fk585.vfmlc.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042305287-27-4fk585.vfm
· elide run /tmp/LBscudCSq1vFX7P6ipyC/f-17830
Advice
A`
example test: `test/built-ins/TypedArrayConstructors/ctors/buffer-arg/proto-from-ctor-realm-sab.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-4i6dzc.ywj · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/UlmBLoztYqXQV6JJ9uTR/f-1783042307015-27-4i6dzc.ywjyc.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042307015-27-4i6dzc.ywj
· elide run /tmp/UlmBLoztYqXQV6JJ9uTR/f-17830
Advice
A`
example test: `test/built-ins/TypedArrayConstructors/ctors-bigint/typedarray-arg/proto-from-ctor-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-4jlofc.rab · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/6VDeeDx968HdVk60WPQF/f-1783042088989-27-4jlofc.rabb3.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042088989-27-4jlofc.rab
· elide run /tmp/6VDeeDx968HdVk60WPQF/f-17830
Advice
A`
example test: `test/language/expressions/class/private-setter-brand-check-multiple-evaluations-of-class-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-57k9lr.cei · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/0tGETYiHwgNWKpDLR3IZ/f-1783042307937-27-57k9lr.ceiub.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042307937-27-57k9lr.cei
· elide run /tmp/0tGETYiHwgNWKpDLR3IZ/f-17830
Advice
A`
example test: `test/built-ins/TypedArrayConstructors/internals/GetOwnProperty/detached-buffer-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-59i29x.c9r · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/0y42poOUCSHZGWcb5OOT/f-1783041756551-27-59i29x.c9rlr.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783041756551-27-59i29x.c9r
· elide run /tmp/0y42poOUCSHZGWcb5OOT/f-17830
Advice
A`
example test: `test/built-ins/AsyncDisposableStack/proto-from-ctor-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-5cat6h.9i1 · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/b109I3WwGYiitho3Z7CS/f-1783041800203-27-5cat6h.9i176.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783041800203-27-5cat6h.9i1
· elide run /tmp/b109I3WwGYiitho3Z7CS/f-17830
Advice
A`
example test: `test/built-ins/ThrowTypeError/distinct-cross-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-5g9n94.owx · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/hTOOosumwEHK0StV9C29/f-1783042066662-27-5g9n94.owxoo.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042066662-27-5g9n94.owx
· elide run /tmp/hTOOosumwEHK0StV9C29/f-17830
Advice
A`
example test: `test/built-ins/Symbol/split/cross-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-5ijtmy.gun · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/j15nCMoGHUiPJahp9tTh/f-1783042066297-27-5ijtmy.guncd.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042066297-27-5ijtmy.gun
· elide run /tmp/j15nCMoGHUiPJahp9tTh/f-17830
Advice
A`
example test: `test/built-ins/Symbol/isConcatSpreadable/cross-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-5ir460.ihr · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/qJaPKOB4f4gghotKTrBr/f-1783042438585-27-5ir460.ihr15.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042438585-27-5ir460.ihr
· elide run /tmp/qJaPKOB4f4gghotKTrBr/f-17830
Advice
A`
example test: `test/annexB/built-ins/RegExp/prototype/compile/this-cross-realm-instance.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-5jsp54.g9m · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/qJaPKOB4f4gghotKTrBr/f-1783041795242-27-5jsp54.g9m8t.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783041795242-27-5jsp54.g9m
· elide run /tmp/qJaPKOB4f4gghotKTrBr/f-17830
Advice
A`
example test: `test/built-ins/Set/proto-from-ctor-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-5p9lsq.sjd · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/j15nCMoGHUiPJahp9tTh/f-1783042307939-27-5p9lsq.sjd7c.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042307939-27-5p9lsq.sjd
· elide run /tmp/j15nCMoGHUiPJahp9tTh/f-17830
Advice
A`
example test: `test/built-ins/TypedArrayConstructors/internals/GetOwnProperty/detached-buffer-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-5qeo2g.lxl · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/qJaPKOB4f4gghotKTrBr/f-1783041757378-27-5qeo2g.lxly7.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783041757378-27-5qeo2g.lxl
· elide run /tmp/qJaPKOB4f4gghotKTrBr/f-17830
Advice
A`
example test: `test/built-ins/AsyncFunction/proto-from-ctor-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-60pq7x.p91 · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/qH4j7LVPF4kNUXvjyjzL/f-1783042044199-27-60pq7x.p910r.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042044199-27-60pq7x.p91
· elide run /tmp/qH4j7LVPF4kNUXvjyjzL/f-17830
Advice
A`
example test: `test/built-ins/Proxy/apply/trap-is-not-callable-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-62150l.jk3 · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/0tGETYiHwgNWKpDLR3IZ/f-1783041801402-27-62150l.jk3l7.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783041801402-27-62150l.jk3
· elide run /tmp/0tGETYiHwgNWKpDLR3IZ/f-17830
Advice
A`
example test: `test/built-ins/WeakMap/proto-from-ctor-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-62kz6y.4a0 · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/0y42poOUCSHZGWcb5OOT/f-1783041796496-27-62kz6y.4a0ty.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783041796496-27-62kz6y.4a0
· elide run /tmp/0y42poOUCSHZGWcb5OOT/f-17830
Advice
A`
example test: `test/built-ins/SharedArrayBuffer/proto-from-ctor-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-6b6ysl.5na · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/0y42poOUCSHZGWcb5OOT/f-1783041763845-27-6b6ysl.5naod.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783041763845-27-6b6ysl.5na
· elide run /tmp/0y42poOUCSHZGWcb5OOT/f-17830
Advice
A`
example test: `test/built-ins/Date/proto-from-ctor-realm-one.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-6hjs5z.vmk · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/6VDeeDx968HdVk60WPQF/f-1783041942730-27-6hjs5z.vmkp3.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783041942730-27-6hjs5z.vmk
· elide run /tmp/6VDeeDx968HdVk60WPQF/f-17830
Advice
A`
example test: `test/built-ins/NativeErrors/ReferenceError/proto-from-ctor-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-6junky.hhm · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/0tGETYiHwgNWKpDLR3IZ/f-1783041796466-27-6junky.hhmmr.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783041796466-27-6junky.hhm
· elide run /tmp/0tGETYiHwgNWKpDLR3IZ/f-17830
Advice
A`
example test: `test/built-ins/SharedArrayBuffer/proto-from-ctor-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-6oj5bn.ull · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/j15nCMoGHUiPJahp9tTh/f-1783042045869-27-6oj5bn.ullhg.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042045869-27-6oj5bn.ull
· elide run /tmp/j15nCMoGHUiPJahp9tTh/f-17830
Advice
A`
example test: `test/built-ins/Proxy/defineProperty/trap-is-not-callable-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-6quuqb.j49 · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/0tGETYiHwgNWKpDLR3IZ/f-1783042045725-27-6quuqb.j49l9.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042045725-27-6quuqb.j49
· elide run /tmp/0tGETYiHwgNWKpDLR3IZ/f-17830
Advice
A`
example test: `test/built-ins/Proxy/defineProperty/targetdesc-undefined-target-is-not-extensible-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-6r0z43.g0h · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/hTOOosumwEHK0StV9C29/f-1783041769378-27-6r0z43.g0hga.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783041769378-27-6r0z43.g0h
· elide run /tmp/hTOOosumwEHK0StV9C29/f-17830
Advice
A`
example test: `test/built-ins/Function/proto-from-ctor-realm-prototype.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-70f46n.8uz · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/qH4j7LVPF4kNUXvjyjzL/f-1783042210629-27-70f46n.8uzoo.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042210629-27-70f46n.8uz
· elide run /tmp/qH4j7LVPF4kNUXvjyjzL/f-17830
Advice
A`
example test: `test/built-ins/Function/internals/Construct/derived-return-val-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-78zbul.ypa · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/0y42poOUCSHZGWcb5OOT/f-1783042044862-27-78zbul.ypau5.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042044862-27-78zbul.ypa
· elide run /tmp/0y42poOUCSHZGWcb5OOT/f-17830
Advice
A`
example test: `test/built-ins/Proxy/construct/return-not-object-throws-symbol-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-7lpx0s.fvy · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/C5P3vBG632jHBGNCXrtz/f-1783041746795-27-7lpx0s.fvys2.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783041746795-27-7lpx0s.fvy
· elide run /tmp/C5P3vBG632jHBGNCXrtz/f-17830
Advice
A`
example test: `test/harness/assert-throws-same-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-81x6nm.frc · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/J1OexIgqSkiwMqrj75aj/f-1783042046225-27-81x6nm.frcrq.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042046225-27-81x6nm.frc
· elide run /tmp/J1OexIgqSkiwMqrj75aj/f-17830
Advice
A`
example test: `test/built-ins/Proxy/defineProperty/targetdesc-not-compatible-descriptor-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-88phgd.ns8 · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/LBscudCSq1vFX7P6ipyC/f-1783042306811-27-88phgd.ns8is.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042306811-27-88phgd.ns8
· elide run /tmp/LBscudCSq1vFX7P6ipyC/f-17830
Advice
A`
example test: `test/built-ins/TypedArrayConstructors/ctors-bigint/object-arg/proto-from-ctor-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-8ameag.gb4 · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/j15nCMoGHUiPJahp9tTh/f-1783041763996-27-8ameag.gb4df.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783041763996-27-8ameag.gb4
· elide run /tmp/j15nCMoGHUiPJahp9tTh/f-17830
Advice
A`
example test: `test/built-ins/Date/proto-from-ctor-realm-zero.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-8bdxoa.gvp · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/0tGETYiHwgNWKpDLR3IZ/f-1783042047435-27-8bdxoa.gvpvj.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042047435-27-8bdxoa.gvp
· elide run /tmp/0tGETYiHwgNWKpDLR3IZ/f-17830
Advice
A`
example test: `test/built-ins/Proxy/getOwnPropertyDescriptor/result-type-is-not-object-nor-undefined-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-8i6f36.0hh · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/hTOOosumwEHK0StV9C29/f-1783042089126-27-8i6f36.0hhhk.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042089126-27-8i6f36.0hh
· elide run /tmp/hTOOosumwEHK0StV9C29/f-17830
Advice
A`
example test: `test/language/expressions/class/private-static-method-brand-check-multiple-evaluations-of-class-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-8nzfff.sdo · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/j15nCMoGHUiPJahp9tTh/f-1783042051635-27-8nzfff.sdoft.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042051635-27-8nzfff.sdo
· elide run /tmp/j15nCMoGHUiPJahp9tTh/f-17830
Advice
A`
example test: `test/built-ins/Proxy/set/trap-is-not-callable-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-8sfba8.ddb · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/0tGETYiHwgNWKpDLR3IZ/f-1783042438323-27-8sfba8.ddbbk.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042438323-27-8sfba8.ddb
· elide run /tmp/0tGETYiHwgNWKpDLR3IZ/f-17830
Advice
A`
example test: `test/annexB/built-ins/RegExp/legacy-accessors/leftContext/this-cross-realm-constructor.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-9p7hpl.fkd · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/LBscudCSq1vFX7P6ipyC/f-1783042211903-27-9p7hpl.fkd5i.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042211903-27-9p7hpl.fkd
· elide run /tmp/LBscudCSq1vFX7P6ipyC/f-17830
Advice
A`
example test: `test/built-ins/Function/prototype/bind/get-fn-realm-recursive.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-9v0tmf.o4i · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/0tGETYiHwgNWKpDLR3IZ/f-1783041943276-27-9v0tmf.o4idj.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783041943276-27-9v0tmf.o4i
· elide run /tmp/0tGETYiHwgNWKpDLR3IZ/f-17830
Advice
A`
example test: `test/built-ins/NativeErrors/TypeError/proto-from-ctor-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-a8us9t.wz7 · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/j15nCMoGHUiPJahp9tTh/f-1783041769187-27-a8us9t.wz7s7.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783041769187-27-a8us9t.wz7
· elide run /tmp/j15nCMoGHUiPJahp9tTh/f-17830
Advice
A`
example test: `test/built-ins/Function/call-bind-this-realm-value.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-almw7z.dyb · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/J1OexIgqSkiwMqrj75aj/f-1783041763957-27-almw7z.dybm9.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783041763957-27-almw7z.dyb
· elide run /tmp/J1OexIgqSkiwMqrj75aj/f-17830
Advice
A`
example test: `test/built-ins/Date/proto-from-ctor-realm-two.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-avqnym.yih · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/C5P3vBG632jHBGNCXrtz/f-1783041943501-27-avqnym.yih5r.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783041943501-27-avqnym.yih
· elide run /tmp/C5P3vBG632jHBGNCXrtz/f-17830
Advice
A`
example test: `test/built-ins/NativeErrors/URIError/proto-from-ctor-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-bf4361.9dc · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/C5P3vBG632jHBGNCXrtz/f-1783041755963-27-bf4361.9dcap.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783041755963-27-bf4361.9dc
· elide run /tmp/C5P3vBG632jHBGNCXrtz/f-17830
Advice
A`
example test: `test/built-ins/ArrayBuffer/proto-from-ctor-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-bltgwt.s1f · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/qJaPKOB4f4gghotKTrBr/f-1783041802385-27-bltgwt.s1fap.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783041802385-27-bltgwt.s1f
· elide run /tmp/qJaPKOB4f4gghotKTrBr/f-17830
Advice
A`
example test: `test/built-ins/WeakSet/proto-from-ctor-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-bpvdp5.x22 · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/UlmBLoztYqXQV6JJ9uTR/f-1783042308040-27-bpvdp5.x22kd.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042308040-27-bpvdp5.x22
· elide run /tmp/UlmBLoztYqXQV6JJ9uTR/f-17830
Advice
A`
example test: `test/built-ins/TypedArrayConstructors/internals/HasProperty/detached-buffer-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-bzxd0s.5kv · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/qH4j7LVPF4kNUXvjyjzL/f-1783042173442-27-bzxd0s.5kvaf.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042173442-27-bzxd0s.5kv
· elide run /tmp/qH4j7LVPF4kNUXvjyjzL/f-17830
Advice
A`
example test: `test/built-ins/Array/prototype/filter/create-proto-from-ctor-realm-array.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-c7g60d.n8k · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/J1OexIgqSkiwMqrj75aj/f-1783042167930-27-c7g60d.n8k7n.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042167930-27-c7g60d.n8k
· elide run /tmp/J1OexIgqSkiwMqrj75aj/f-17830
Advice
A`
example test: `test/built-ins/Array/prototype/concat/create-proto-from-ctor-realm-non-array.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-canxii.fgj · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/hTOOosumwEHK0StV9C29/f-1783042047016-27-canxii.fgjpj.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042047016-27-canxii.fgj
· elide run /tmp/hTOOosumwEHK0StV9C29/f-17830
Advice
A`
example test: `test/built-ins/Proxy/get/trap-is-not-callable-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-d5upn2.mo4 · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/J1OexIgqSkiwMqrj75aj/f-1783042044779-27-d5upn2.mo4qk.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042044779-27-d5upn2.mo4
· elide run /tmp/J1OexIgqSkiwMqrj75aj/f-17830
Advice
A`
example test: `test/built-ins/Proxy/construct/return-not-object-throws-number-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-dl6rnx.0ln · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/UlmBLoztYqXQV6JJ9uTR/f-1783042066664-27-dl6rnx.0lneu.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042066664-27-dl6rnx.0ln
· elide run /tmp/UlmBLoztYqXQV6JJ9uTR/f-17830
Advice
A`
example test: `test/built-ins/Symbol/split/cross-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-dld47s.xyz · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/b109I3WwGYiitho3Z7CS/f-1783042305892-27-dld47s.xyz99.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042305892-27-dld47s.xyz
· elide run /tmp/b109I3WwGYiitho3Z7CS/f-17830
Advice
A`
example test: `test/built-ins/TypedArrayConstructors/ctors/typedarray-arg/proto-from-ctor-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-doysf0.2ie · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/6VDeeDx968HdVk60WPQF/f-1783042284844-27-doysf0.2iek5.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042284844-27-doysf0.2ie
· elide run /tmp/6VDeeDx968HdVk60WPQF/f-17830
Advice
A`
example test: `test/built-ins/String/prototype/toString/non-generic-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-dtc4o2.u9f · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/C5P3vBG632jHBGNCXrtz/f-1783042286918-27-dtc4o2.u9foh.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042286918-27-dtc4o2.u9f
· elide run /tmp/C5P3vBG632jHBGNCXrtz/f-17830
Advice
A`
example test: `test/built-ins/String/prototype/valueOf/non-generic-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-dvvg22.wyn · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/qJaPKOB4f4gghotKTrBr/f-1783042193115-27-dvvg22.wynjd.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042193115-27-dvvg22.wyn
· elide run /tmp/qJaPKOB4f4gghotKTrBr/f-17830
Advice
A`
example test: `test/built-ins/Array/prototype/splice/create-proto-from-ctor-realm-array.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-e45tvv.9rc · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/6VDeeDx968HdVk60WPQF/f-1783042050075-27-e45tvv.9rcr7.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042050075-27-e45tvv.9rc
· elide run /tmp/6VDeeDx968HdVk60WPQF/f-17830
Advice
A`
example test: `test/built-ins/Proxy/ownKeys/trap-is-not-callable-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-eftxlh.v93 · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/C5P3vBG632jHBGNCXrtz/f-1783042109673-27-eftxlh.v9366.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042109673-27-eftxlh.v93
· elide run /tmp/C5P3vBG632jHBGNCXrtz/f-17830
Advice
A`
example test: `test/language/expressions/tagged-template/cache-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-esbxgm.nwm · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/UlmBLoztYqXQV6JJ9uTR/f-1783042088881-27-esbxgm.nwmmt.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042088881-27-esbxgm.nwm
· elide run /tmp/UlmBLoztYqXQV6JJ9uTR/f-17830
Advice
A`
example test: `test/language/expressions/class/private-getter-brand-check-multiple-evaluations-of-class-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-eu8oxc.qw2 · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/LBscudCSq1vFX7P6ipyC/f-1783042183118-27-eu8oxc.qw2jv.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042183118-27-eu8oxc.qw2
· elide run /tmp/LBscudCSq1vFX7P6ipyC/f-17830
Advice
A`
example test: `test/built-ins/Array/prototype/map/create-proto-from-ctor-realm-non-array.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-eucn9y.rrh · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/UlmBLoztYqXQV6JJ9uTR/f-1783042049223-27-eucn9y.rrhil.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042049223-27-eucn9y.rrh
· elide run /tmp/UlmBLoztYqXQV6JJ9uTR/f-17830
Advice
A`
example test: `test/built-ins/Proxy/isExtensible/trap-is-not-callable-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-g2nrf7.dw6 · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/hTOOosumwEHK0StV9C29/f-1783042286916-27-g2nrf7.dw69j.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042286916-27-g2nrf7.dw6
· elide run /tmp/hTOOosumwEHK0StV9C29/f-17830
Advice
A`
example test: `test/built-ins/String/prototype/valueOf/non-generic-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-gk959o.szg · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/0y42poOUCSHZGWcb5OOT/f-1783041771300-27-gk959o.szgvo.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783041771300-27-gk959o.szg
· elide run /tmp/0y42poOUCSHZGWcb5OOT/f-17830
Advice
A`
example test: `test/built-ins/Map/proto-from-ctor-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-gpq3rm.7vo · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/qH4j7LVPF4kNUXvjyjzL/f-1783042044774-27-gpq3rm.7vonh.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042044774-27-gpq3rm.7vo
· elide run /tmp/qH4j7LVPF4kNUXvjyjzL/f-17830
Advice
A`
example test: `test/built-ins/Proxy/construct/return-not-object-throws-number-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-gptx7u.zul · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/b109I3WwGYiitho3Z7CS/f-1783041903948-27-gptx7u.zultq.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783041903948-27-gptx7u.zul
· elide run /tmp/b109I3WwGYiitho3Z7CS/f-17830
Advice
A`
example test: `test/built-ins/Array/of/proto-from-ctor-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-guolhk.p95 · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/UlmBLoztYqXQV6JJ9uTR/f-1783041777750-27-guolhk.p95xr.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783041777750-27-guolhk.p95
· elide run /tmp/UlmBLoztYqXQV6JJ9uTR/f-17830
Advice
A`
example test: `test/built-ins/Promise/proto-from-ctor-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-gx7hjz.pjv · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/C5P3vBG632jHBGNCXrtz/f-1783042268138-27-gx7hjz.pjvzu.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042268138-27-gx7hjz.pjv
· elide run /tmp/C5P3vBG632jHBGNCXrtz/f-17830
Advice
A`
example test: `test/built-ins/RegExp/prototype/dotAll/cross-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-hc9gv7.2p3 · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/qJaPKOB4f4gghotKTrBr/f-1783042089069-27-hc9gv7.2p32q.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042089069-27-hc9gv7.2p3
· elide run /tmp/qJaPKOB4f4gghotKTrBr/f-17830
Advice
A`
example test: `test/language/expressions/class/private-static-getter-multiple-evaluations-of-class-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-hcfluz.szv · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/7o3Dll5PNwWGTbDBGxPG/f-1783042082682-27-hcfluz.szvsa.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042082682-27-hcfluz.szv
· elide run /tmp/7o3Dll5PNwWGTbDBGxPG/f-17830
Advice
A`
example test: `test/language/expressions/async-generator/eval-body-proto-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-hjjh1c.gtz · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/6VDeeDx968HdVk60WPQF/f-1783041763860-27-hjjh1c.gtz46.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783041763860-27-hjjh1c.gtz
· elide run /tmp/6VDeeDx968HdVk60WPQF/f-17830
Advice
A`
example test: `test/built-ins/Date/proto-from-ctor-realm-two.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-i4attl.blp · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/0y42poOUCSHZGWcb5OOT/f-1783042048112-27-i4attl.blpel.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042048112-27-i4attl.blp
· elide run /tmp/0y42poOUCSHZGWcb5OOT/f-17830
Advice
A`
example test: `test/built-ins/Proxy/getPrototypeOf/trap-is-not-callable-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-i9683l.lme · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/b109I3WwGYiitho3Z7CS/f-1783042066455-27-i9683l.lmeqm.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042066455-27-i9683l.lme
· elide run /tmp/b109I3WwGYiitho3Z7CS/f-17830
Advice
A`
example test: `test/built-ins/Symbol/match/cross-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-iaiek8.oe5 · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/J1OexIgqSkiwMqrj75aj/f-1783042044567-27-iaiek8.oe5h8.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042044567-27-iaiek8.oe5
· elide run /tmp/J1OexIgqSkiwMqrj75aj/f-17830
Advice
A`
example test: `test/built-ins/Proxy/construct/null-handler-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-inzm3m.nl6 · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/7o3Dll5PNwWGTbDBGxPG/f-1783042306635-27-inzm3m.nl6gh.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042306635-27-inzm3m.nl6
· elide run /tmp/7o3Dll5PNwWGTbDBGxPG/f-17830
Advice
A`
example test: `test/built-ins/TypedArrayConstructors/ctors-bigint/no-args/proto-from-ctor-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-ip40th.j8v · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/J1OexIgqSkiwMqrj75aj/f-1783042438370-27-ip40th.j8v2e.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042438370-27-ip40th.j8v
· elide run /tmp/J1OexIgqSkiwMqrj75aj/f-17830
Advice
A`
example test: `test/annexB/built-ins/RegExp/legacy-accessors/rightContext/this-cross-realm-constructor.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-ip9u34.xw7 · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/qH4j7LVPF4kNUXvjyjzL/f-1783041753481-27-ip9u34.xw7p8.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783041753481-27-ip9u34.xw7
· elide run /tmp/qH4j7LVPF4kNUXvjyjzL/f-17830
Advice
A`
example test: `test/built-ins/AggregateError/proto-from-ctor-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-ise6sh.jmt · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/0y42poOUCSHZGWcb5OOT/f-1783041931894-27-ise6sh.jmtjl.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783041931894-27-ise6sh.jmt
· elide run /tmp/0y42poOUCSHZGWcb5OOT/f-17830
Advice
A`
example test: `test/built-ins/JSON/stringify/value-bigint-cross-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-jdt3vl.tzc · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/hTOOosumwEHK0StV9C29/f-1783042305748-27-jdt3vl.tzcai.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042305748-27-jdt3vl.tzc
· elide run /tmp/hTOOosumwEHK0StV9C29/f-17830
Advice
A`
example test: `test/built-ins/TypedArrayConstructors/ctors/object-arg/proto-from-ctor-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-k04qot.g0t · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/7o3Dll5PNwWGTbDBGxPG/f-1783042269266-27-k04qot.g0tqd.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042269266-27-k04qot.g0t
· elide run /tmp/7o3Dll5PNwWGTbDBGxPG/f-17830
Advice
A`
example test: `test/built-ins/RegExp/prototype/global/cross-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-kl3yl9.1x0 · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/qJaPKOB4f4gghotKTrBr/f-1783042189608-27-kl3yl9.1x0qi.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042189608-27-kl3yl9.1x0
· elide run /tmp/qJaPKOB4f4gghotKTrBr/f-17830
Advice
A`
example test: `test/built-ins/Array/prototype/slice/create-proto-from-ctor-realm-array.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-ktnv57.4i7 · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/hTOOosumwEHK0StV9C29/f-1783042479020-27-ktnv57.4i7wc.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042479020-27-ktnv57.4i7
· elide run /tmp/hTOOosumwEHK0StV9C29/f-17830
Advice
A`
example test: `test/built-ins/TypedArrayConstructors/internals/GetOwnProperty/BigInt/detached-buffer-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-kykda9.4b4 · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/J1OexIgqSkiwMqrj75aj/f-1783042438255-27-kykda9.4b4cc.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042438255-27-kykda9.4b4
· elide run /tmp/J1OexIgqSkiwMqrj75aj/f-17830
Advice
A`
example test: `test/annexB/built-ins/RegExp/legacy-accessors/lastMatch/this-cross-realm-constructor.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-l2hqvu.esl · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/b109I3WwGYiitho3Z7CS/f-1783041753490-27-l2hqvu.eslfb.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783041753490-27-l2hqvu.esl
· elide run /tmp/b109I3WwGYiitho3Z7CS/f-17830
Advice
A`
example test: `test/built-ins/AggregateError/proto-from-ctor-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-l2m5tx.lxt · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/b109I3WwGYiitho3Z7CS/f-1783042047656-27-l2m5tx.lxt5p.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042047656-27-l2m5tx.lxt
· elide run /tmp/b109I3WwGYiitho3Z7CS/f-17830
Advice
A`
example test: `test/built-ins/Proxy/getOwnPropertyDescriptor/trap-is-not-callable-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-l4bpdt.lho · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/C5P3vBG632jHBGNCXrtz/f-1783042057825-27-l4bpdt.lhonq.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042057825-27-l4bpdt.lho
· elide run /tmp/C5P3vBG632jHBGNCXrtz/f-17830
Advice
A`
example test: `test/built-ins/RegExp/escape/cross-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-lmfeho.h24 · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/C5P3vBG632jHBGNCXrtz/f-1783042270421-27-lmfeho.h24na.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042270421-27-lmfeho.h24
· elide run /tmp/C5P3vBG632jHBGNCXrtz/f-17830
Advice
A`
example test: `test/built-ins/RegExp/prototype/unicode/cross-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-ls3k2g.jiw · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/C5P3vBG632jHBGNCXrtz/f-1783041755176-27-ls3k2g.jiwjg.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783041755176-27-ls3k2g.jiw
· elide run /tmp/C5P3vBG632jHBGNCXrtz/f-17830
Advice
A`
example test: `test/built-ins/Array/proto-from-ctor-realm-zero.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-lswy72.snz · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/LBscudCSq1vFX7P6ipyC/f-1783042089150-27-lswy72.snzla.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042089150-27-lswy72.snz
· elide run /tmp/LBscudCSq1vFX7P6ipyC/f-17830
Advice
A`
example test: `test/language/expressions/class/private-static-setter-multiple-evaluations-of-class-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-m5j9r9.3wf · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/0y42poOUCSHZGWcb5OOT/f-1783042075319-27-m5j9r9.3wf3o.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042075319-27-m5j9r9.3wf
· elide run /tmp/0y42poOUCSHZGWcb5OOT/f-17830
Advice
A`
example test: `test/language/eval-code/indirect/realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-m9vqt1.90e · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/6VDeeDx968HdVk60WPQF/f-1783042306556-27-m9vqt1.90ete.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042306556-27-m9vqt1.90e
· elide run /tmp/6VDeeDx968HdVk60WPQF/f-17830
Advice
A`
example test: `test/built-ins/TypedArrayConstructors/ctors-bigint/length-arg/proto-from-ctor-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-mbfeq2.cdi · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/J1OexIgqSkiwMqrj75aj/f-1783042210592-27-mbfeq2.cdiif.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042210592-27-mbfeq2.cdi
· elide run /tmp/J1OexIgqSkiwMqrj75aj/f-17830
Advice
A`
example test: `test/built-ins/Function/internals/Call/class-ctor-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-mupjf7.sok · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/LBscudCSq1vFX7P6ipyC/f-1783042306570-27-mupjf7.sok0j.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042306570-27-mupjf7.sok
· elide run /tmp/LBscudCSq1vFX7P6ipyC/f-17830
Advice
A`
example test: `test/built-ins/TypedArrayConstructors/ctors-bigint/length-arg/proto-from-ctor-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-nbt0ng.tnj · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/b109I3WwGYiitho3Z7CS/f-1783041801425-27-nbt0ng.tnj19.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783041801425-27-nbt0ng.tnj
· elide run /tmp/b109I3WwGYiitho3Z7CS/f-17830
Advice
A`
example test: `test/built-ins/WeakMap/proto-from-ctor-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-o3sgcu.djs · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/J1OexIgqSkiwMqrj75aj/f-1783041799771-27-o3sgcu.djsrf.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783041799771-27-o3sgcu.djs
· elide run /tmp/J1OexIgqSkiwMqrj75aj/f-17830
Advice
A`
example test: `test/built-ins/SuppressedError/proto-from-ctor-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-ooftpm.l8d · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/0y42poOUCSHZGWcb5OOT/f-1783042438252-27-ooftpm.l8ddb.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042438252-27-ooftpm.l8d
· elide run /tmp/0y42poOUCSHZGWcb5OOT/f-17830
Advice
A`
example test: `test/annexB/built-ins/RegExp/legacy-accessors/lastMatch/this-cross-realm-constructor.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-otgzsm.dhc · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/b109I3WwGYiitho3Z7CS/f-1783041943002-27-otgzsm.dhclg.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783041943002-27-otgzsm.dhc
· elide run /tmp/b109I3WwGYiitho3Z7CS/f-17830
Advice
A`
example test: `test/built-ins/NativeErrors/SyntaxError/proto-from-ctor-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-owajkx.nln · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/hTOOosumwEHK0StV9C29/f-1783042307666-27-owajkx.nlnod.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042307666-27-owajkx.nln
· elide run /tmp/hTOOosumwEHK0StV9C29/f-17830
Advice
A`
example test: `test/built-ins/TypedArrayConstructors/internals/Delete/detached-buffer-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-pmpc4y.0sq · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/j15nCMoGHUiPJahp9tTh/f-1783042066608-27-pmpc4y.0sqzm.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042066608-27-pmpc4y.0sq
· elide run /tmp/j15nCMoGHUiPJahp9tTh/f-17830
Advice
A`
example test: `test/built-ins/Symbol/species/cross-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-pq4asw.uxr · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/LBscudCSq1vFX7P6ipyC/f-1783042044930-27-pq4asw.uxr6f.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042044930-27-pq4asw.uxr
· elide run /tmp/LBscudCSq1vFX7P6ipyC/f-17830
Advice
A`
example test: `test/built-ins/Proxy/construct/return-not-object-throws-undefined-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-q0xsn2.igm · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/0tGETYiHwgNWKpDLR3IZ/f-1783041779425-27-q0xsn2.igmap.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783041779425-27-q0xsn2.igm
· elide run /tmp/0tGETYiHwgNWKpDLR3IZ/f-17830
Advice
A`
example test: `test/built-ins/Proxy/get-fn-realm-recursive.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-q5tyzd.l9f · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/hTOOosumwEHK0StV9C29/f-1783042065890-27-q5tyzd.l9fsh.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042065890-27-q5tyzd.l9f
· elide run /tmp/hTOOosumwEHK0StV9C29/f-17830
Advice
A`
example test: `test/built-ins/Symbol/asyncDispose/cross-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-qmh5r6.mr · elide run /`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/qH4j7LVPF4kNUXvjyjzL/f-1783042193113-27-qmh5r6.mrb.js:1
(source excerpt suppressed)
Stack Trace
[js] createRealm                            f-1783042193113-27-qmh5r6.mr
· elide run /tmp/qH4j7LVPF4kNUXvjyjzL/f-178304
Advice
`
example test: `test/built-ins/Array/prototype/splice/create-proto-from-ctor-realm-array.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-r3c96k.32g · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/J1OexIgqSkiwMqrj75aj/f-1783042096859-27-r3c96k.32gxh.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042096859-27-r3c96k.32g
· elide run /tmp/J1OexIgqSkiwMqrj75aj/f-17830
Advice
A`
example test: `test/language/expressions/generators/eval-body-proto-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-r6ckqj.qmu · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/7o3Dll5PNwWGTbDBGxPG/f-1783042210649-27-r6ckqj.qmull.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042210649-27-r6ckqj.qmu
· elide run /tmp/7o3Dll5PNwWGTbDBGxPG/f-17830
Advice
A`
example test: `test/built-ins/Function/internals/Construct/derived-this-uninitialized-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-rn81tq.h4e · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/qH4j7LVPF4kNUXvjyjzL/f-1783042050442-27-rn81tq.h4e1t.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042050442-27-rn81tq.h4e
· elide run /tmp/qH4j7LVPF4kNUXvjyjzL/f-17830
Advice
A`
example test: `test/built-ins/Proxy/preventExtensions/trap-is-not-callable-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-rnlstb.zlh · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/C5P3vBG632jHBGNCXrtz/f-1783042211141-27-rnlstb.zlhut.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042211141-27-rnlstb.zlh
· elide run /tmp/C5P3vBG632jHBGNCXrtz/f-17830
Advice
A`
example test: `test/built-ins/Function/prototype/apply/this-not-callable-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-rways9.e3p · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/UlmBLoztYqXQV6JJ9uTR/f-1783041942737-27-rways9.e3pbq.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783041942737-27-rways9.e3p
· elide run /tmp/UlmBLoztYqXQV6JJ9uTR/f-17830
Advice
A`
example test: `test/built-ins/NativeErrors/ReferenceError/proto-from-ctor-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-rwjjo0.e7u · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/b109I3WwGYiitho3Z7CS/f-1783042307799-27-rwjjo0.e7uje.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042307799-27-rwjjo0.e7u
· elide run /tmp/b109I3WwGYiitho3Z7CS/f-17830
Advice
A`
example test: `test/built-ins/TypedArrayConstructors/internals/Get/detached-buffer-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-s24s2t.bez · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/qJaPKOB4f4gghotKTrBr/f-1783041801763-27-s24s2t.bez1j.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783041801763-27-s24s2t.bez
· elide run /tmp/qJaPKOB4f4gghotKTrBr/f-17830
Advice
A`
example test: `test/built-ins/WeakRef/proto-from-ctor-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-s7senf.7qz · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/hTOOosumwEHK0StV9C29/f-1783042305291-27-s7senf.7qztf.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042305291-27-s7senf.7qz
· elide run /tmp/hTOOosumwEHK0StV9C29/f-17830
Advice
A`
example test: `test/built-ins/TypedArrayConstructors/ctors/buffer-arg/proto-from-ctor-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-t33ynh.ri3 · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/hTOOosumwEHK0StV9C29/f-1783041746772-27-t33ynh.ri31n.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783041746772-27-t33ynh.ri3
· elide run /tmp/hTOOosumwEHK0StV9C29/f-17830
Advice
A`
example test: `test/harness/assert-throws-same-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-t7teu.ugoq · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/0y42poOUCSHZGWcb5OOT/f-1783041770306-27-t7teu.ugoq9b.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783041770306-27-t7teu.ugoq
· elide run /tmp/0y42poOUCSHZGWcb5OOT/f-17830
Advice
A`
example test: `test/built-ins/Iterator/proto-from-ctor-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-tkj9ld.7lg · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/j15nCMoGHUiPJahp9tTh/f-1783042057841-27-tkj9ld.7lg1b.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042057841-27-tkj9ld.7lg
· elide run /tmp/j15nCMoGHUiPJahp9tTh/f-17830
Advice
A`
example test: `test/built-ins/RegExp/escape/cross-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-tptc8o.gyi · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/J1OexIgqSkiwMqrj75aj/f-1783042305475-27-tptc8o.gyisf.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042305475-27-tptc8o.gyi
· elide run /tmp/J1OexIgqSkiwMqrj75aj/f-17830
Advice
A`
example test: `test/built-ins/TypedArrayConstructors/ctors/length-arg/proto-from-ctor-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-txg4ve.5ar · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/LBscudCSq1vFX7P6ipyC/f-1783042211074-27-txg4ve.5arp9.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042211074-27-txg4ve.5ar
· elide run /tmp/LBscudCSq1vFX7P6ipyC/f-17830
Advice
A`
example test: `test/built-ins/Function/prototype/apply/argarray-not-object-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-u4ou3q.i4w · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/qJaPKOB4f4gghotKTrBr/f-1783042066577-27-u4ou3q.i4wed.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042066577-27-u4ou3q.i4w
· elide run /tmp/qJaPKOB4f4gghotKTrBr/f-17830
Advice
A`
example test: `test/built-ins/Symbol/replace/cross-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-u7wgh8.rvs · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/LBscudCSq1vFX7P6ipyC/f-1783042045750-27-u7wgh8.rvsza.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042045750-27-u7wgh8.rvs
· elide run /tmp/LBscudCSq1vFX7P6ipyC/f-17830
Advice
A`
example test: `test/built-ins/Proxy/defineProperty/targetdesc-undefined-target-is-not-extensible-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-u7xzsa.t51 · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/UlmBLoztYqXQV6JJ9uTR/f-1783042269310-27-u7xzsa.t51a7.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042269310-27-u7xzsa.t51
· elide run /tmp/UlmBLoztYqXQV6JJ9uTR/f-17830
Advice
A`
example test: `test/built-ins/RegExp/prototype/hasIndices/cross-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-u9ap5i.zh4 · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/b109I3WwGYiitho3Z7CS/f-1783042096857-27-u9ap5i.zh4p8.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042096857-27-u9ap5i.zh4
· elide run /tmp/b109I3WwGYiitho3Z7CS/f-17830
Advice
A`
example test: `test/language/expressions/generators/eval-body-proto-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-uaotv1.o1h · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/b109I3WwGYiitho3Z7CS/f-1783041931903-27-uaotv1.o1h0a.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783041931903-27-uaotv1.o1h
· elide run /tmp/b109I3WwGYiitho3Z7CS/f-17830
Advice
A`
example test: `test/built-ins/JSON/stringify/value-bigint-cross-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-uibx6w.h3j · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/6VDeeDx968HdVk60WPQF/f-1783041771295-27-uibx6w.h3j4j.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783041771295-27-uibx6w.h3j
· elide run /tmp/6VDeeDx968HdVk60WPQF/f-17830
Advice
A`
example test: `test/built-ins/Map/proto-from-ctor-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-va2xb3.mb2 · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/UlmBLoztYqXQV6JJ9uTR/f-1783042102560-27-va2xb3.mb2mo.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042102560-27-va2xb3.mb2
· elide run /tmp/UlmBLoztYqXQV6JJ9uTR/f-17830
Advice
A`
example test: `test/language/expressions/new/non-ctor-err-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-vgygwy.96y · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/0tGETYiHwgNWKpDLR3IZ/f-1783042051627-27-vgygwy.96yns.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042051627-27-vgygwy.96y
· elide run /tmp/0tGETYiHwgNWKpDLR3IZ/f-17830
Advice
A`
example test: `test/built-ins/Proxy/set/trap-is-not-callable-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-vm32d8.h6o · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/0y42poOUCSHZGWcb5OOT/f-1783042088961-27-vm32d8.h6oir.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042088961-27-vm32d8.h6o
· elide run /tmp/0y42poOUCSHZGWcb5OOT/f-17830
Advice
A`
example test: `test/language/expressions/class/private-method-brand-check-multiple-evaluations-of-class-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-vsony9.tkt · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/UlmBLoztYqXQV6JJ9uTR/f-1783042066432-27-vsony9.tktxb.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042066432-27-vsony9.tkt
· elide run /tmp/UlmBLoztYqXQV6JJ9uTR/f-17830
Advice
A`
example test: `test/built-ins/Symbol/keyFor/cross-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-vzw03h.2zk · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/LBscudCSq1vFX7P6ipyC/f-1783042066181-27-vzw03h.2zkgg.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042066181-27-vzw03h.2zk
· elide run /tmp/LBscudCSq1vFX7P6ipyC/f-17830
Advice
A`
example test: `test/built-ins/Symbol/for/cross-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-w64ad1.1th · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/hTOOosumwEHK0StV9C29/f-1783042043952-27-w64ad1.1th7q.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042043952-27-w64ad1.1th
· elide run /tmp/hTOOosumwEHK0StV9C29/f-17830
Advice
A`
example test: `test/built-ins/Proxy/apply/arguments-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-wob75r.1b9 · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/J1OexIgqSkiwMqrj75aj/f-1783041757878-27-wob75r.1b9ri.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783041757878-27-wob75r.1b9
· elide run /tmp/J1OexIgqSkiwMqrj75aj/f-17830
Advice
A`
example test: `test/built-ins/AsyncGeneratorFunction/proto-from-ctor-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-wogzlu.p2j · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/J1OexIgqSkiwMqrj75aj/f-1783042479131-27-wogzlu.p2jja.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042479131-27-wogzlu.p2j
· elide run /tmp/J1OexIgqSkiwMqrj75aj/f-17830
Advice
A`
example test: `test/built-ins/TypedArrayConstructors/internals/HasProperty/BigInt/detached-buffer-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-x3wdpx.h61 · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/J1OexIgqSkiwMqrj75aj/f-1783042043947-27-x3wdpx.h611s.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042043947-27-x3wdpx.h61
· elide run /tmp/J1OexIgqSkiwMqrj75aj/f-17830
Advice
A`
example test: `test/built-ins/Proxy/apply/arguments-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-xdy32d.6vy · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/j15nCMoGHUiPJahp9tTh/f-1783042044090-27-xdy32d.6vyhn.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042044090-27-xdy32d.6vy
· elide run /tmp/j15nCMoGHUiPJahp9tTh/f-17830
Advice
A`
example test: `test/built-ins/Proxy/apply/null-handler-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-xome68.0m9 · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/j15nCMoGHUiPJahp9tTh/f-1783041757855-27-xome68.0m94j.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783041757855-27-xome68.0m9
· elide run /tmp/j15nCMoGHUiPJahp9tTh/f-17830
Advice
A`
example test: `test/built-ins/AsyncGeneratorFunction/proto-from-ctor-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-xx5pqh.6ud · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/0tGETYiHwgNWKpDLR3IZ/f-1783042066003-27-xx5pqh.6udij.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042066003-27-xx5pqh.6ud
· elide run /tmp/0tGETYiHwgNWKpDLR3IZ/f-17830
Advice
A`
example test: `test/built-ins/Symbol/dispose/cross-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-y5b2lj.swp · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/j15nCMoGHUiPJahp9tTh/f-1783041795235-27-y5b2lj.swpkg.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783041795235-27-y5b2lj.swp
· elide run /tmp/j15nCMoGHUiPJahp9tTh/f-17830
Advice
A`
example test: `test/built-ins/Set/proto-from-ctor-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-yjbv0d.mcy · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/0tGETYiHwgNWKpDLR3IZ/f-1783042173463-27-yjbv0d.mcyon.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042173463-27-yjbv0d.mcy
· elide run /tmp/0tGETYiHwgNWKpDLR3IZ/f-17830
Advice
A`
example test: `test/built-ins/Array/prototype/filter/create-proto-from-ctor-realm-non-array.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-yjj1w4.rv7 · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/b109I3WwGYiitho3Z7CS/f-1783042308038-27-yjj1w4.rv7qf.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042308038-27-yjj1w4.rv7
· elide run /tmp/b109I3WwGYiitho3Z7CS/f-17830
Advice
A`
example test: `test/built-ins/TypedArrayConstructors/internals/HasProperty/detached-buffer-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-zbtmvk.tn9 · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/J1OexIgqSkiwMqrj75aj/f-1783042305289-27-zbtmvk.tn95n.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042305289-27-zbtmvk.tn9
· elide run /tmp/J1OexIgqSkiwMqrj75aj/f-17830
Advice
A`
example test: `test/built-ins/TypedArrayConstructors/ctors/buffer-arg/proto-from-ctor-realm-sab.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-zkyf2j.kq8 · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/hTOOosumwEHK0StV9C29/f-1783042305555-27-zkyf2j.kq8oe.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042305555-27-zkyf2j.kq8
· elide run /tmp/hTOOosumwEHK0StV9C29/f-17830
Advice
A`
example test: `test/built-ins/TypedArrayConstructors/ctors/no-args/proto-from-ctor-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-zrvflq.9g5 · elide run `

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/b109I3WwGYiitho3Z7CS/f-1783041761325-27-zrvflq.9g53l.js
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783041761325-27-zrvflq.9g5
· elide run /tmp/b109I3WwGYiitho3Z7CS/f-17830
Advice
A`
example test: `test/built-ins/DataView/proto-from-ctor-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc>: (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-16aj76r.sh · elide run`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/C5P3vBG632jHBGNCXrtz/f-1783042199064-27-16aj76r.sh8.js:
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042199064-27-16aj76r.sh
· elide run /tmp/C5P3vBG632jHBGNCXrtz/f-17830
Advice
A`
example test: `test/built-ins/BigInt/prototype/valueOf/cross-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc>: (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1fjdqt4.3y · elide run`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/j15nCMoGHUiPJahp9tTh/f-1783042066676-27-1fjdqt4.3y2.js:
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042066676-27-1fjdqt4.3y
· elide run /tmp/j15nCMoGHUiPJahp9tTh/f-17830
Advice
A`
example test: `test/built-ins/Symbol/toStringTag/cross-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc>: (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1ne1bjd.f1 · elide run`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/UlmBLoztYqXQV6JJ9uTR/f-1783041761282-27-1ne1bjd.f1u.js:
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783041761282-27-1ne1bjd.f1
· elide run /tmp/UlmBLoztYqXQV6JJ9uTR/f-17830
Advice
A`
example test: `test/built-ins/DataView/proto-from-ctor-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc>: (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-1vsd03d.hq · elide run`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/qJaPKOB4f4gghotKTrBr/f-1783041792968-27-1vsd03d.hqt.js:
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783041792968-27-1vsd03d.hq
· elide run /tmp/qJaPKOB4f4gghotKTrBr/f-17830
Advice
A`
example test: `test/built-ins/RegExp/proto-from-ctor-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc>: (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-5mxuqh.dxl · elide run`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/6VDeeDx968HdVk60WPQF/f-1783041765156-27-5mxuqh.dxlq.js:
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783041765156-27-5mxuqh.dxl
· elide run /tmp/6VDeeDx968HdVk60WPQF/f-17830
Advice
A`
example test: `test/built-ins/Error/proto-from-ctor-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc>: (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-937lze.xr3 · elide run`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/0tGETYiHwgNWKpDLR3IZ/f-1783042306396-27-937lze.xr3d.js:
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042306396-27-937lze.xr3
· elide run /tmp/0tGETYiHwgNWKpDLR3IZ/f-17830
Advice
A`
example test: `test/built-ins/TypedArrayConstructors/ctors-bigint/buffer-arg/proto-from-ctor-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc>: (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-a7kvk6.mqp · elide run`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/6VDeeDx968HdVk60WPQF/f-1783042276040-27-a7kvk6.mqpc.js:
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042276040-27-a7kvk6.mqp
· elide run /tmp/6VDeeDx968HdVk60WPQF/f-17830
Advice
A`
example test: `test/built-ins/ShadowRealm/prototype/evaluate/throws-error-from-ctor-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc>: (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-ada5qz.f52 · elide run`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/LBscudCSq1vFX7P6ipyC/f-1783042210598-27-ada5qz.f52k.js:
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042210598-27-ada5qz.f52
· elide run /tmp/LBscudCSq1vFX7P6ipyC/f-17830
Advice
A`
example test: `test/built-ins/Function/internals/Construct/base-ctor-revoked-proxy-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc>: (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-bfun58.90f · elide run`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/qJaPKOB4f4gghotKTrBr/f-1783042269733-27-bfun58.90fv.js:
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042269733-27-bfun58.90f
· elide run /tmp/qJaPKOB4f4gghotKTrBr/f-17830
Advice
A`
example test: `test/built-ins/RegExp/prototype/sticky/cross-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc>: (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-dg84lx.lof · elide run`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/0y42poOUCSHZGWcb5OOT/f-1783042306380-27-dg84lx.lofw.js:
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042306380-27-dg84lx.lof
· elide run /tmp/0y42poOUCSHZGWcb5OOT/f-17830
Advice
A`
example test: `test/built-ins/TypedArrayConstructors/ctors-bigint/buffer-arg/proto-from-ctor-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc>: (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-dyqdco.vld · elide run`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/C5P3vBG632jHBGNCXrtz/f-1783042167924-27-dyqdco.vld5.js:
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042167924-27-dyqdco.vld
· elide run /tmp/C5P3vBG632jHBGNCXrtz/f-17830
Advice
A`
example test: `test/built-ins/Array/prototype/concat/create-proto-from-ctor-realm-array.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc>: (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-fpvdc5.j7b · elide run`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/j15nCMoGHUiPJahp9tTh/f-1783042305293-27-fpvdc5.j7b5.js:
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042305293-27-fpvdc5.j7b
· elide run /tmp/j15nCMoGHUiPJahp9tTh/f-17830
Advice
A`
example test: `test/built-ins/TypedArrayConstructors/ctors/buffer-arg/proto-from-ctor-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc>: (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-h3z189.v4f · elide run`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/6VDeeDx968HdVk60WPQF/f-1783041899156-27-h3z189.v4fd.js:
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783041899156-27-h3z189.v4f
· elide run /tmp/6VDeeDx968HdVk60WPQF/f-17830
Advice
A`
example test: `test/built-ins/Array/from/proto-from-ctor-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc>: (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-iimq9m.0rc · elide run`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/hTOOosumwEHK0StV9C29/f-1783042048100-27-iimq9m.0rcw.js:
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042048100-27-iimq9m.0rc
· elide run /tmp/hTOOosumwEHK0StV9C29/f-17830
Advice
A`
example test: `test/built-ins/Proxy/getPrototypeOf/trap-is-not-callable-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc>: (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-js4ez4.66t · elide run`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/7o3Dll5PNwWGTbDBGxPG/f-1783042479309-27-js4ez4.66tt.js:
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042479309-27-js4ez4.66t
· elide run /tmp/7o3Dll5PNwWGTbDBGxPG/f-17830
Advice
A`
example test: `test/built-ins/TypedArrayConstructors/internals/Set/BigInt/detached-buffer-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc>: (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-jsphjf.nxb · elide run`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/j15nCMoGHUiPJahp9tTh/f-1783042479133-27-jsphjf.nxbv.js:
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042479133-27-jsphjf.nxb
· elide run /tmp/j15nCMoGHUiPJahp9tTh/f-17830
Advice
A`
example test: `test/built-ins/TypedArrayConstructors/internals/HasProperty/BigInt/detached-buffer-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc>: (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-kvojpx.2xv · elide run`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/C5P3vBG632jHBGNCXrtz/f-1783042276123-27-kvojpx.2xvh.js:
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042276123-27-kvojpx.2xv
· elide run /tmp/C5P3vBG632jHBGNCXrtz/f-17830
Advice
A`
example test: `test/built-ins/ShadowRealm/prototype/evaluate/wrapped-function-throws-typeerror-from-caller-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc>: (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-l4epou.7xl · elide run`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/J1OexIgqSkiwMqrj75aj/f-1783042307415-27-l4epou.7xln.js:
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042307415-27-l4epou.7xl
· elide run /tmp/J1OexIgqSkiwMqrj75aj/f-17830
Advice
A`
example test: `test/built-ins/TypedArrayConstructors/internals/DefineOwnProperty/detached-buffer-throws-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc>: (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-lzx0uu.zbx · elide run`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/7o3Dll5PNwWGTbDBGxPG/f-1783042089046-27-lzx0uu.zbx4.js:
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042089046-27-lzx0uu.zbx
· elide run /tmp/7o3Dll5PNwWGTbDBGxPG/f-17830
Advice
A`
example test: `test/language/expressions/class/private-static-field-multiple-evaluations-of-class-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc>: (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-m0by0h.31n · elide run`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/J1OexIgqSkiwMqrj75aj/f-1783042183083-27-m0by0h.31ny.js:
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042183083-27-m0by0h.31n
· elide run /tmp/J1OexIgqSkiwMqrj75aj/f-17830
Advice
A`
example test: `test/built-ins/Array/prototype/map/create-proto-from-ctor-realm-array.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc>: (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-n5efyw.qf8 [js] create`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/0tGETYiHwgNWKpDLR3IZ/f-1783042088879-27-n5efyw.qf81.js:
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042088879-27-n5efyw.qf8
[js] createAndInstantiateClass             f-178304208`
example test: `test/language/expressions/class/private-getter-brand-check-multiple-evaluations-of-class-realm-function-ctor.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc>: (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-nqmgqk.2rf · elide run`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/UlmBLoztYqXQV6JJ9uTR/f-1783042305745-27-nqmgqk.2rfa.js:
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042305745-27-nqmgqk.2rf
· elide run /tmp/UlmBLoztYqXQV6JJ9uTR/f-17830
Advice
A`
example test: `test/built-ins/TypedArrayConstructors/ctors/object-arg/proto-from-ctor-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc>: (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-of71xa.60g · elide run`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/0tGETYiHwgNWKpDLR3IZ/f-1783042044480-27-of71xa.60g9.js:
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042044480-27-of71xa.60g
· elide run /tmp/0tGETYiHwgNWKpDLR3IZ/f-17830
Advice
A`
example test: `test/built-ins/Proxy/construct/arguments-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc>: (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-pdf6ua.csr · elide run`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/J1OexIgqSkiwMqrj75aj/f-1783042284855-27-pdf6ua.csrw.js:
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042284855-27-pdf6ua.csr
· elide run /tmp/J1OexIgqSkiwMqrj75aj/f-17830
Advice
A`
example test: `test/built-ins/String/prototype/toString/non-generic-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc>: (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-pz3e84.n9y [js] create`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/qJaPKOB4f4gghotKTrBr/f-1783042088988-27-pz3e84.n9y4.js:
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042088988-27-pz3e84.n9y
[js] createAndInstantiateClass             f-178304208`
example test: `test/language/expressions/class/private-setter-brand-check-multiple-evaluations-of-class-realm-function-ctor.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc>: (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-qxzblo.bi0 · elide run`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/qJaPKOB4f4gghotKTrBr/f-1783042307418-27-qxzblo.bi0i.js:
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042307418-27-qxzblo.bi0
· elide run /tmp/qJaPKOB4f4gghotKTrBr/f-17830
Advice
A`
example test: `test/built-ins/TypedArrayConstructors/internals/DefineOwnProperty/detached-buffer-throws-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc>: (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-rjs3rb.<n> · elide run`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/J1OexIgqSkiwMqrj75aj/f-1783042046473-27-rjs3rb.9096.js:
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042046473-27-rjs3rb.909
· elide run /tmp/J1OexIgqSkiwMqrj75aj/f-17830
Advice
A`
example test: `test/built-ins/Proxy/deleteProperty/trap-is-not-callable-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc>: (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-sfvdss.4qb · elide run`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/UlmBLoztYqXQV6JJ9uTR/f-1783042438175-27-sfvdss.4qbt.js:
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042438175-27-sfvdss.4qb
· elide run /tmp/UlmBLoztYqXQV6JJ9uTR/f-17830
Advice
A`
example test: `test/annexB/built-ins/RegExp/legacy-accessors/index/this-cross-realm-constructor.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc>: (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-u68zyb.vf1 · elide run`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/qJaPKOB4f4gghotKTrBr/f-1783042183085-27-u68zyb.vf1b.js:
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042183085-27-u68zyb.vf1
· elide run /tmp/qJaPKOB4f4gghotKTrBr/f-17830
Advice
A`
example test: `test/built-ins/Array/prototype/map/create-proto-from-ctor-realm-array.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc>: (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-uvda57.rid · elide run`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/7o3Dll5PNwWGTbDBGxPG/f-1783042147296-27-uvda57.ridm.js:
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042147296-27-uvda57.rid
· elide run /tmp/7o3Dll5PNwWGTbDBGxPG/f-17830
Advice
A`
example test: `test/language/types/reference/put-value-prop-base-primitive-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc>: (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-vmxc0a.pfb · elide run`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/qJaPKOB4f4gghotKTrBr/f-1783042211909-27-vmxc0a.pfba.js:
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042211909-27-vmxc0a.pfb
· elide run /tmp/qJaPKOB4f4gghotKTrBr/f-17830
Advice
A`
example test: `test/built-ins/Function/prototype/bind/get-fn-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc>: (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-vmztnl.9sc · elide run`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/C5P3vBG632jHBGNCXrtz/f-1783042109536-27-vmztnl.9scg.js:
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042109536-27-vmztnl.9sc
· elide run /tmp/C5P3vBG632jHBGNCXrtz/f-17830
Advice
A`
example test: `test/language/expressions/super/realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc>: (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-vof0q7.bt2 · elide run`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/C5P3vBG632jHBGNCXrtz/f-1783042307797-27-vof0q7.bt2u.js:
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042307797-27-vof0q7.bt2
· elide run /tmp/C5P3vBG632jHBGNCXrtz/f-17830
Advice
A`
example test: `test/built-ins/TypedArrayConstructors/internals/Get/detached-buffer-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc>: (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-wg3nas.u1t [js] create`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/LBscudCSq1vFX7P6ipyC/f-1783042088875-27-wg3nas.u1t6.js:
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042088875-27-wg3nas.u1t
[js] createAndInstantiateClass             f-178304208`
example test: `test/language/expressions/class/private-getter-brand-check-multiple-evaluations-of-class-realm-function-ctor.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc>: (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-wkpp9t.ial · elide run`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/j15nCMoGHUiPJahp9tTh/f-1783042047651-27-wkpp9t.ialx.js:
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042047651-27-wkpp9t.ial
· elide run /tmp/j15nCMoGHUiPJahp9tTh/f-17830
Advice
A`
example test: `test/built-ins/Proxy/getOwnPropertyDescriptor/trap-is-not-callable-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc>: (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-xgx3lb.hix · elide run`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/qH4j7LVPF4kNUXvjyjzL/f-1783042045690-27-xgx3lb.hixk.js:
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042045690-27-xgx3lb.hix
· elide run /tmp/qH4j7LVPF4kNUXvjyjzL/f-17830
Advice
A`
example test: `test/built-ins/Proxy/defineProperty/targetdesc-undefined-not-configurable-descriptor-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc>: (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-xs5e5f.0hh · elide run`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/J1OexIgqSkiwMqrj75aj/f-1783041756569-27-xs5e5f.0hh4.js:
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783041756569-27-xs5e5f.0hh
· elide run /tmp/J1OexIgqSkiwMqrj75aj/f-17830
Advice
A`
example test: `test/built-ins/AsyncDisposableStack/proto-from-ctor-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc>: (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-xsdha.yyra · elide run`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/0y42poOUCSHZGWcb5OOT/f-1783042211068-27-xsdha.yyrad.js:
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042211068-27-xsdha.yyra
· elide run /tmp/0y42poOUCSHZGWcb5OOT/f-17830
Advice
A`
example test: `test/built-ins/Function/prototype/apply/argarray-not-object-realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc>: (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-yuen2k.hz1 · elide run`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/0tGETYiHwgNWKpDLR3IZ/f-1783042066285-27-yuen2k.hz14.js:
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042066285-27-yuen2k.hz1
· elide run /tmp/0tGETYiHwgNWKpDLR3IZ/f-17830
Advice
A`
example test: `test/built-ins/Symbol/hasInstance/cross-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc>: (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-yzzaan.b98 · elide run`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/qJaPKOB4f4gghotKTrBr/f-1783042075311-27-yzzaan.b98l.js:
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042075311-27-yzzaan.b98
· elide run /tmp/qJaPKOB4f4gghotKTrBr/f-17830
Advice
A`
example test: `test/language/eval-code/indirect/realm.js default`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc>: (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-zj9jwk.v4m · elide run`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/7o3Dll5PNwWGTbDBGxPG/f-1783041903710-27-zj9jwk.v4m6.js:
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783041903710-27-zj9jwk.v4m
· elide run /tmp/7o3Dll5PNwWGTbDBGxPG/f-17830
Advice
A`
example test: `test/built-ins/Array/length/define-own-prop-length-overflow-realm.js strict mode`

### 1 × `Error: $262.createRealm not supported by the Elide host In file <loc>: (source excerpt suppressed) Stack Trace [js] createRealm f-<n>-<n>-zwj039.da1 · elide run`

distinct messages:
- `Error: $262.createRealm not supported by the Elide host
In file ../../../tmp/6VDeeDx968HdVk60WPQF/f-1783042173445-27-zwj039.da1y.js:
(source excerpt suppressed)
Stack Trace
[js] createRealm                           f-1783042173445-27-zwj039.da1
· elide run /tmp/6VDeeDx968HdVk60WPQF/f-17830
Advice
A`
example test: `test/built-ins/Array/prototype/filter/create-proto-from-ctor-realm-array.js strict mode`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host (Testing with BigInt64Array and makeArrayBuffer.) In file ../../../tmp/qH4j7LVPF4kNUXvjyjzL/f-<n>-`

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host (Testing with
BigInt64Array and makeArrayBuffer.)
In file ../../../tmp/qH4j7LVPF4kNUXvjyjzL/f-1783042474266-27-184334q.pj2vg.j
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042474266-27-184334q.p`
example test: `test/built-ins/TypedArray/prototype/byteOffset/BigInt/detached-buffer.js strict mode`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host (Testing with BigInt64Array and makePassthrough.) In file ../../../tmp/0y42poOUCSHZGWcb5OOT/f-<n>-`

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host (Testing with
BigInt64Array and makePassthrough.)
In file ../../../tmp/0y42poOUCSHZGWcb5OOT/f-1783042476181-27-1cwslgq.87o6l.j
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042476181-27-1cwslgq.8`
example test: `test/built-ins/TypedArray/prototype/lastIndexOf/BigInt/detached-buffer.js default`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host (Testing with BigInt64Array and makePassthrough.) In file ../../../tmp/C5P3vBG632jHBGNCXrtz/f-<n>-`

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host (Testing with
BigInt64Array and makePassthrough.)
In file ../../../tmp/C5P3vBG632jHBGNCXrtz/f-1783042474218-27-19uxyt3.hqqqh.j
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042474218-27-19uxyt3.h`
example test: `test/built-ins/TypedArray/prototype/byteLength/BigInt/detached-buffer.js default`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host (Testing with BigInt64Array and makePassthrough.) In file ../../../tmp/qJaPKOB4f4gghotKTrBr/f-<n>-`

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host (Testing with
BigInt64Array and makePassthrough.)
In file ../../../tmp/qJaPKOB4f4gghotKTrBr/f-1783042477521-27-1nsn6f.i7vjih.j
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042477521-27-1nsn6f.i7`
example test: `test/built-ins/TypedArray/prototype/slice/BigInt/detached-buffer.js default`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host (Testing with Float64Array and makeArrayBuffer.) In file ../../../tmp/qJaPKOB4f4gghotKTrBr/f-<n>-<`

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host (Testing with
Float64Array and makeArrayBuffer.)
In file ../../../tmp/qJaPKOB4f4gghotKTrBr/f-1783042303314-27-1fvs11u.qqfsf.j
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042303314-27-1fvs11u.qq`
example test: `test/built-ins/TypedArray/prototype/subarray/byteoffset-with-detached-buffer.js strict mode`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host (Testing with Float64Array and makeArrayBuffer.) In file ../../../tmp/UlmBLoztYqXQV6JJ9uTR/f-<n>-<`

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host (Testing with
Float64Array and makeArrayBuffer.)
In file ../../../tmp/UlmBLoztYqXQV6JJ9uTR/f-1783042304112-27-1407gj1.35rli.j
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042304112-27-1407gj1.35`
example test: `test/built-ins/TypedArray/prototype/toSorted/this-value-invalid.js default`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host (Testing with Float64Array and makePassthrough.) In file ../../../tmp/0y42poOUCSHZGWcb5OOT/f-<n>-<`

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host (Testing with
Float64Array and makePassthrough.)
In file ../../../tmp/0y42poOUCSHZGWcb5OOT/f-1783042303738-27-1wdko62.x8x1k.j
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042303738-27-1wdko62.x8`
example test: `test/built-ins/TypedArray/prototype/toLocaleString/detached-buffer.js strict mode`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host (Testing with Float64Array and makePassthrough.) In file ../../../tmp/6VDeeDx968HdVk60WPQF/f-<n>-<`

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host (Testing with
Float64Array and makePassthrough.)
In file ../../../tmp/6VDeeDx968HdVk60WPQF/f-1783042300573-27-1uflj0i.hl35e.j
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042300573-27-1uflj0i.hl`
example test: `test/built-ins/TypedArray/prototype/map/detached-buffer.js strict mode`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host (Testing with Float64Array and makePassthrough.) In file ../../../tmp/7o3Dll5PNwWGTbDBGxPG/f-<n>-<`

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host (Testing with
Float64Array and makePassthrough.)
In file ../../../tmp/7o3Dll5PNwWGTbDBGxPG/f-1783042300081-27-1on91vm.h9uyl.j
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042300081-27-1on91vm.h9`
example test: `test/built-ins/TypedArray/prototype/lastIndexOf/detached-buffer-during-fromIndex-returns-minus-one-for-zero.js default`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host (Testing with Float64Array and makePassthrough.) In file ../../../tmp/C5P3vBG632jHBGNCXrtz/f-<n>-<`

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host (Testing with
Float64Array and makePassthrough.)
In file ../../../tmp/C5P3vBG632jHBGNCXrtz/f-1783042297598-27-1011fl2.go4gf.j
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042297598-27-1011fl2.go`
example test: `test/built-ins/TypedArray/prototype/filter/detached-buffer.js strict mode`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host (Testing with Float64Array and makePassthrough.) In file ../../../tmp/hTOOosumwEHK0StV9C29/f-<n>-<`

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host (Testing with
Float64Array and makePassthrough.)
In file ../../../tmp/hTOOosumwEHK0StV9C29/f-1783042308253-27-197lprd.b630j.j
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042308253-27-197lprd.b6`
example test: `test/built-ins/TypedArrayConstructors/internals/Set/detached-buffer-key-is-symbol.js default`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host (Testing with Float64Array and makePassthrough.) In file ../../../tmp/j15nCMoGHUiPJahp9tTh/f-<n>-<`

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host (Testing with
Float64Array and makePassthrough.)
In file ../../../tmp/j15nCMoGHUiPJahp9tTh/f-1783042297512-27-1sslc4n.6zp1i.j
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042297512-27-1sslc4n.6z`
example test: `test/built-ins/TypedArray/prototype/filter/callbackfn-detachbuffer.js strict mode`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file ../../../tmp/0tGETYiHwgNWKpDLR3IZ/f-<n>-<n>-1fpx8x0.5xhyh.j (source excerpt suppressed) St`

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/0tGETYiHwgNWKpDLR3IZ/f-1783042068730-27-1fpx8x0.5xhyh.j
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042068730-27-1fpx8x0.5x
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/TypedArray/from/from-typedarray-mapper-detaches-result.js strict mode`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file ../../../tmp/0y42poOUCSHZGWcb5OOT/f-<n>-<n>-1t6wm1w.pq16f.j (source excerpt suppressed) St`

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/0y42poOUCSHZGWcb5OOT/f-1783042199598-27-1t6wm1w.pq16f.j
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042199598-27-1t6wm1w.pq
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/byteOffset/detached-buffer.js strict mode`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file ../../../tmp/7o3Dll5PNwWGTbDBGxPG/f-<n>-<n>-13ojv0g.1qdpl.j (source excerpt suppressed) St`

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/7o3Dll5PNwWGTbDBGxPG/f-1783042200388-27-13ojv0g.1qdpl.j
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042200388-27-13ojv0g.1q
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/getFloat32/detached-buffer-before-outofrange-byteoffset.js strict mode`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file ../../../tmp/7o3Dll5PNwWGTbDBGxPG/f-<n>-<n>-1bdo8vb.u0zuj.j (source excerpt suppressed) St`

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/7o3Dll5PNwWGTbDBGxPG/f-1783042196165-27-1bdo8vb.u0zuj.j
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042196165-27-1bdo8vb.u0
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/ArrayBuffer/prototype/sliceToImmutable/modify-source-after-return.js default`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file ../../../tmp/b109I3WwGYiitho3Z7CS/f-<n>-<n>-109jcdk.u3z8h.j (source excerpt suppressed) St`

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/b109I3WwGYiitho3Z7CS/f-1783042201629-27-109jcdk.u3z8h.j
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042201629-27-109jcdk.u3
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/getUint32/detached-buffer-after-toindex-byteoffset.js strict mode`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file ../../../tmp/J1OexIgqSkiwMqrj75aj/f-<n>-<n>-130rlqf.izzlf.j (source excerpt suppressed) St`

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/J1OexIgqSkiwMqrj75aj/f-1783042195291-27-130rlqf.izzlf.j
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042195291-27-130rlqf.iz
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/ArrayBuffer/prototype/maxByteLength/detached-buffer.js strict mode`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file ../../../tmp/J1OexIgqSkiwMqrj75aj/f-<n>-<n>-137vszm.59o8g.j (source excerpt suppressed) St`

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/J1OexIgqSkiwMqrj75aj/f-1783042204123-27-137vszm.59o8g.j
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042204123-27-137vszm.59
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/setUint8/detached-buffer.js default`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file ../../../tmp/J1OexIgqSkiwMqrj75aj/f-<n>-<n>-1jlbdgb.7yl0i.j (source excerpt suppressed) St`

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/J1OexIgqSkiwMqrj75aj/f-1783042068676-27-1jlbdgb.7yl0i.j
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042068676-27-1jlbdgb.7y
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/TypedArray/from/from-array-mapper-detaches-result.js default`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file ../../../tmp/J1OexIgqSkiwMqrj75aj/f-<n>-<n>-1ukrwc9.orakf.j (source excerpt suppressed) St`

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/J1OexIgqSkiwMqrj75aj/f-1783042199734-27-1ukrwc9.orakf.j
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042199734-27-1ukrwc9.or
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/getBigInt64/detached-buffer-after-toindex-byteoffset.js strict mode`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file ../../../tmp/LBscudCSq1vFX7P6ipyC/f-<n>-<n>-15cjb1p.k4pqj.j (source excerpt suppressed) St`

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/LBscudCSq1vFX7P6ipyC/f-1783042201631-27-15cjb1p.k4pqj.j
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042201631-27-15cjb1p.k4
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/getUint32/detached-buffer-before-outofrange-byteoffset.js default`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file ../../../tmp/LBscudCSq1vFX7P6ipyC/f-<n>-<n>-1kp1dc4.zorzl.j (source excerpt suppressed) St`

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/LBscudCSq1vFX7P6ipyC/f-1783042203666-27-1kp1dc4.zorzl.j
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042203666-27-1kp1dc4.zo
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/setUint16/detached-buffer-before-outofrange-byteoffset.js strict mode`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file ../../../tmp/LBscudCSq1vFX7P6ipyC/f-<n>-<n>-1lae7qv.j8hrg.j (source excerpt suppressed) St`

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/LBscudCSq1vFX7P6ipyC/f-1783042201012-27-1lae7qv.j8hrg.j
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042201012-27-1lae7qv.j8
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/getInt32/detached-buffer-after-toindex-byteoffset.js strict mode`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file ../../../tmp/UlmBLoztYqXQV6JJ9uTR/f-<n>-<n>-16a2gj2.1v6xf.j (source excerpt suppressed) St`

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/UlmBLoztYqXQV6JJ9uTR/f-1783042200147-27-16a2gj2.1v6xf.j
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042200147-27-16a2gj2.1v
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/getFloat16/detached-buffer-before-outofrange-byteoffset.js default`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file ../../../tmp/UlmBLoztYqXQV6JJ9uTR/f-<n>-<n>-1qpifl8.t9snk.j (source excerpt suppressed) St`

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/UlmBLoztYqXQV6JJ9uTR/f-1783042203152-27-1qpifl8.t9snk.j
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042203152-27-1qpifl8.t9
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/setInt32/detached-buffer-after-number-value.js default`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-115my39.6k `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/6VDeeDx968HdVk60WPQF/f-1783042201787-27-115my39.6koj.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042201787-27-115my39.6k
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/getUint8/detached-buffer-after-toindex-byteoffset.js default`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-119uyzk.<n>`

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/LBscudCSq1vFX7P6ipyC/f-1783041760647-27-119uyzk.84b4.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783041760647-27-119uyzk.84
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/detached-buffer.js default`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-11budic.9h `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/6VDeeDx968HdVk60WPQF/f-1783042199741-27-11budic.9hs1.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042199741-27-11budic.9h
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/getBigInt64/detached-buffer.js default`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-11e0beh.n7 `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/0tGETYiHwgNWKpDLR3IZ/f-1783042204103-27-11e0beh.n7v5.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042204103-27-11e0beh.n7
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/setUint8/detached-buffer-after-number-value.js strict mode`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-11elrfe.ci `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/b109I3WwGYiitho3Z7CS/f-1783042201032-27-11elrfe.ci33.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042201032-27-11elrfe.ci
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/getInt32/detached-buffer.js strict mode`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-11iq873.k8 `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/b109I3WwGYiitho3Z7CS/f-1783042199717-27-11iq873.k83q.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042199717-27-11iq873.k8
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/getBigInt64/detached-buffer-after-toindex-byteoffset.js default`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-13ccef6.6w `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/j15nCMoGHUiPJahp9tTh/f-1783042199938-27-13ccef6.6w7d.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042199938-27-13ccef6.6w
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/getBigUint64/detached-buffer-before-outofrange-byteoffset.js strict mode`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-13gwz4n.rc `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/0tGETYiHwgNWKpDLR3IZ/f-1783042199743-27-13gwz4n.rcn7.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042199743-27-13gwz4n.rc
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/getBigInt64/detached-buffer.js strict mode`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-13q3yxc.wm `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/j15nCMoGHUiPJahp9tTh/f-1783042200380-27-13q3yxc.wmu8.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042200380-27-13q3yxc.wm
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/getFloat32/detached-buffer-after-toindex-byteoffset.js strict mode`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-13zfowd.ia `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/C5P3vBG632jHBGNCXrtz/f-1783042196959-27-13zfowd.ia6b.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042196959-27-13zfowd.ia
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/ArrayBuffer/prototype/transferToImmutable/this-is-not-detachable.js strict mode`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-1400npg.m6 `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/0y42poOUCSHZGWcb5OOT/f-1783042203192-27-1400npg.m6n5.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042203192-27-1400npg.m6
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/setInt32/detached-buffer.js default`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-14q6lb0.fm `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/qJaPKOB4f4gghotKTrBr/f-1783042200610-27-14q6lb0.fmlj.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042200610-27-14q6lb0.fm
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/getFloat64/detached-buffer-after-toindex-byteoffset.js strict mode`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-14ws1ju.qf `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/qH4j7LVPF4kNUXvjyjzL/f-1783042204109-27-14ws1ju.qfcb.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042204109-27-14ws1ju.qf
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/setUint8/detached-buffer-before-outofrange-byteoffset.js default`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-15j4mbo.3r `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/qJaPKOB4f4gghotKTrBr/f-1783042202934-27-15j4mbo.3rj6.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042202934-27-15j4mbo.3r
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/setInt16/detached-buffer-before-outofrange-byteoffset.js default`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-16l9omx.kn `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/0tGETYiHwgNWKpDLR3IZ/f-1783042203881-27-16l9omx.knqj.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042203881-27-16l9omx.kn
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/setUint32/detached-buffer-after-toindex-byteoffset.js default`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-173oers.v1 `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/qJaPKOB4f4gghotKTrBr/f-1783042195273-27-173oers.v1ew.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042195273-27-173oers.v1
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/ArrayBuffer/prototype/immutable/return-immutable.js default`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-17bkbht.uf `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/UlmBLoztYqXQV6JJ9uTR/f-1783042202254-27-17bkbht.ufvh.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042202254-27-17bkbht.uf
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/setFloat16/detached-buffer.js default`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-17glef0.7k `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/qJaPKOB4f4gghotKTrBr/f-1783042199476-27-17glef0.7koo.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042199476-27-17glef0.7k
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/byteLength/instance-has-detached-buffer.js strict mode`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-17keenr.st `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/0tGETYiHwgNWKpDLR3IZ/f-1783042199917-27-17keenr.styf.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042199917-27-17keenr.st
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/getBigUint64/detached-buffer-after-toindex-byteoffset.js default`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-18i3vqg.df `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/qJaPKOB4f4gghotKTrBr/f-1783042202462-27-18i3vqg.dfk1.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042202462-27-18i3vqg.df
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/setFloat32/detached-buffer-after-toindex-byteoffset.js strict mode`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-18m5u4l.gu `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/LBscudCSq1vFX7P6ipyC/f-1783042202931-27-18m5u4l.guvj.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042202931-27-18m5u4l.gu
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/setInt16/detached-buffer-after-toindex-byteoffset.js strict mode`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-18nrwdg.qo `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/LBscudCSq1vFX7P6ipyC/f-1783042068720-27-18nrwdg.qo3n.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042068720-27-18nrwdg.qo
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/TypedArray/from/from-typedarray-into-itself-mapper-detaches-result.js strict mode`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-19d0gtr.g4 `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/0y42poOUCSHZGWcb5OOT/f-1783041760659-27-19d0gtr.g4ls.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783041760659-27-19d0gtr.g4
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/detached-buffer.js strict mode`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-19ft8bm.2n `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/qJaPKOB4f4gghotKTrBr/f-1783042203437-27-19ft8bm.2nbs.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042203437-27-19ft8bm.2n
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/setInt8/detached-buffer-after-toindex-byteoffset.js default`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-1a88oa.q5o `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/qH4j7LVPF4kNUXvjyjzL/f-1783042196167-27-1a88oa.q5orp.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042196167-27-1a88oa.q5o
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/ArrayBuffer/prototype/sliceToImmutable/modify-source-after-return.js strict mode`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-1aacioa.hy `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/6VDeeDx968HdVk60WPQF/f-1783042203655-27-1aacioa.hybz.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042203655-27-1aacioa.hy
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/setUint16/detached-buffer-after-toindex-byteoffset.js strict mode`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-1aiia65.of `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/qH4j7LVPF4kNUXvjyjzL/f-1783042200396-27-1aiia65.of9u.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042200396-27-1aiia65.of
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/getFloat32/detached-buffer.js strict mode`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-1b0llxn.i3 `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/UlmBLoztYqXQV6JJ9uTR/f-1783042200612-27-1b0llxn.i37d.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042200612-27-1b0llxn.i3
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/getFloat64/detached-buffer-before-outofrange-byteoffset.js default`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-1b5sajd.i2 `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/qJaPKOB4f4gghotKTrBr/f-1783042201452-27-1b5sajd.i2pu.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042201452-27-1b5sajd.i2
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/getUint16/detached-buffer-before-outofrange-byteoffset.js strict mode`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-1b8sfk9.cm `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/J1OexIgqSkiwMqrj75aj/f-1783042200153-27-1b8sfk9.cmhb.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042200153-27-1b8sfk9.cm
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/getFloat16/detached-buffer.js default`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-1c4t6vw.2x `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/UlmBLoztYqXQV6JJ9uTR/f-1783042202484-27-1c4t6vw.2x2b.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042202484-27-1c4t6vw.2x
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/setFloat32/detached-buffer-before-outofrange-byteoffset.js strict mode`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-1ccuclw.e4 `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/qH4j7LVPF4kNUXvjyjzL/f-1783042203181-27-1ccuclw.e4ye.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042203181-27-1ccuclw.e4
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/setInt32/detached-buffer-after-toindex-byteoffset.js strict mode`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-1cesdad.nr `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/LBscudCSq1vFX7P6ipyC/f-1783042204105-27-1cesdad.nrqb.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042204105-27-1cesdad.nr
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/setUint8/detached-buffer-after-toindex-byteoffset.js default`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-1d26j5a.l0 `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/LBscudCSq1vFX7P6ipyC/f-1783042203413-27-1d26j5a.l0o5.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042203413-27-1d26j5a.l0
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/setInt8/detached-buffer-after-number-value.js default`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-1de5r25.3a `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/b109I3WwGYiitho3Z7CS/f-1783042199360-27-1de5r25.3aif.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042199360-27-1de5r25.3a
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/buffer/detached-buffer.js default`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-1dn9kmv.hv `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/qH4j7LVPF4kNUXvjyjzL/f-1783042201029-27-1dn9kmv.hv1d.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042201029-27-1dn9kmv.hv
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/getInt32/detached-buffer.js default`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-1e07e52.u0 `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/7o3Dll5PNwWGTbDBGxPG/f-1783042195695-27-1e07e52.u07w.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042195695-27-1e07e52.u0
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/ArrayBuffer/prototype/resize/this-is-detached.js default`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-1e61172.e5 `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/7o3Dll5PNwWGTbDBGxPG/f-1783042201654-27-1e61172.e53p.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042201654-27-1e61172.e5
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/getUint32/detached-buffer.js strict mode`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-1e7bpdg.ig `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/J1OexIgqSkiwMqrj75aj/f-1783042202929-27-1e7bpdg.ign3.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042202929-27-1e7bpdg.ig
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/setInt16/detached-buffer-after-toindex-byteoffset.js default`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-1ehozuo.3g `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/J1OexIgqSkiwMqrj75aj/f-1783042201472-27-1ehozuo.3g5v.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042201472-27-1ehozuo.3g
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/getUint16/detached-buffer.js strict mode`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-1emcsf2.3j `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/b109I3WwGYiitho3Z7CS/f-1783042195289-27-1emcsf2.3jcm.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042195289-27-1emcsf2.3j
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/ArrayBuffer/prototype/maxByteLength/detached-buffer.js default`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-1eyr2sa.3m `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/7o3Dll5PNwWGTbDBGxPG/f-1783042201468-27-1eyr2sa.3mka.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042201468-27-1eyr2sa.3m
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/getUint16/detached-buffer.js default`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-1g79oig.<n>`

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/qJaPKOB4f4gghotKTrBr/f-1783042201633-27-1g79oig.60fq.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042201633-27-1g79oig.60
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/getUint32/detached-buffer-before-outofrange-byteoffset.js strict mode`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-1g8gehq.eg `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/qJaPKOB4f4gghotKTrBr/f-1783042199363-27-1g8gehq.eg39.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042199363-27-1g8gehq.eg
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/buffer/detached-buffer.js strict mode`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-1gm10k.b7c `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/0y42poOUCSHZGWcb5OOT/f-1783042195136-27-1gm10k.b7cqe.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042195136-27-1gm10k.b7c
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/ArrayBuffer/prototype/detached/detached-buffer.js default`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-1gz0gms.tk `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/LBscudCSq1vFX7P6ipyC/f-1783042201979-27-1gz0gms.tk0n.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042201979-27-1gz0gms.tk
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/setBigInt64/detached-buffer-after-toindex-byteoffset.js strict mode`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-1h1m6fe.6c `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/6VDeeDx968HdVk60WPQF/f-1783042200615-27-1h1m6fe.6crb.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042200615-27-1h1m6fe.6c
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/getFloat64/detached-buffer-before-outofrange-byteoffset.js strict mode`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-1h9uut4.mt `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/6VDeeDx968HdVk60WPQF/f-1783042203883-27-1h9uut4.mtgx.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042203883-27-1h9uut4.mt
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/setUint32/detached-buffer-after-toindex-byteoffset.js strict mode`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-1i0804d.jq `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/C5P3vBG632jHBGNCXrtz/f-1783042200151-27-1i0804d.jquo.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042200151-27-1i0804d.jq
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/getFloat16/detached-buffer-before-outofrange-byteoffset.js strict mode`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-1j47j7m.ym `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/7o3Dll5PNwWGTbDBGxPG/f-1783042199934-27-1j47j7m.ymog.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042199934-27-1j47j7m.ym
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/getBigUint64/detached-buffer-after-toindex-byteoffset.js strict mode`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-1j5clbl.7n `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/0y42poOUCSHZGWcb5OOT/f-1783042195697-27-1j5clbl.7n9j.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042195697-27-1j5clbl.7n
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/ArrayBuffer/prototype/resize/this-is-detached.js strict mode`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-1jry00c.wi `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/0tGETYiHwgNWKpDLR3IZ/f-1783042199461-27-1jry00c.wi8b.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042199461-27-1jry00c.wi
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/byteLength/detached-buffer.js default`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-1jscr2u.h7 `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/LBscudCSq1vFX7P6ipyC/f-1783042203898-27-1jscr2u.h7yl.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042203898-27-1jscr2u.h7
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/setUint32/detached-buffer-before-outofrange-byteoffset.js strict mode`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-1lhtkvs.fa `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/C5P3vBG632jHBGNCXrtz/f-1783042202722-27-1lhtkvs.faly.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042202722-27-1lhtkvs.fa
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/setFloat64/detached-buffer.js strict mode`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-1lmoum6.1t `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/qJaPKOB4f4gghotKTrBr/f-1783042200145-27-1lmoum6.1tdv.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042200145-27-1lmoum6.1t
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/getFloat16/detached-buffer-after-toindex-byteoffset.js strict mode`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-1m2sw9y.3l `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/0y42poOUCSHZGWcb5OOT/f-1783042202946-27-1m2sw9y.3l4u.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042202946-27-1m2sw9y.3l
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/setInt16/detached-buffer.js strict mode`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-1nbqx68.jq `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/j15nCMoGHUiPJahp9tTh/f-1783042201006-27-1nbqx68.jqwf.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042201006-27-1nbqx68.jq
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/getInt32/detached-buffer-after-toindex-byteoffset.js default`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-1nmzmz1.pl `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/LBscudCSq1vFX7P6ipyC/f-1783042200394-27-1nmzmz1.plfz.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042200394-27-1nmzmz1.pl
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/getFloat32/detached-buffer.js default`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-1nptvks.zp `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/0tGETYiHwgNWKpDLR3IZ/f-1783042201808-27-1nptvks.zpx1.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042201808-27-1nptvks.zp
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/getUint8/detached-buffer.js default`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-1p76h7a.ma `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/C5P3vBG632jHBGNCXrtz/f-1783042200617-27-1p76h7a.mabj.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042200617-27-1p76h7a.ma
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/getFloat64/detached-buffer.js default`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-1psrdbt.8g `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/C5P3vBG632jHBGNCXrtz/f-1783042204111-27-1psrdbt.8g1j.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042204111-27-1psrdbt.8g
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/setUint8/detached-buffer-before-outofrange-byteoffset.js strict mode`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-1q2a1dm.0m `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/0y42poOUCSHZGWcb5OOT/f-1783042200386-27-1q2a1dm.0mvd.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042200386-27-1q2a1dm.0m
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/getFloat32/detached-buffer-before-outofrange-byteoffset.js default`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-1qdmftd.h8 `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/7o3Dll5PNwWGTbDBGxPG/f-1783042199471-27-1qdmftd.h8jq.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042199471-27-1qdmftd.h8
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/byteLength/instance-has-detached-buffer.js default`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-1r60t9u.pd `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/qJaPKOB4f4gghotKTrBr/f-1783042199739-27-1r60t9u.pdtm.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042199739-27-1r60t9u.pd
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/getBigInt64/detached-buffer-before-outofrange-byteoffset.js strict mode`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-1r74j4l.vr `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/qH4j7LVPF4kNUXvjyjzL/f-1783042199596-27-1r74j4l.vrb8.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042199596-27-1r74j4l.vr
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/byteOffset/detached-buffer.js default`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-1s34fih.na `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/LBscudCSq1vFX7P6ipyC/f-1783042201458-27-1s34fih.na1q.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042201458-27-1s34fih.na
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/getUint16/detached-buffer-after-toindex-byteoffset.js default`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-1s9akvn.<n>`

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/0tGETYiHwgNWKpDLR3IZ/f-1783042203461-27-1s9akvn.04xf.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042203461-27-1s9akvn.04
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/setInt8/detached-buffer.js strict mode`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-1szm59r.b4 `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/j15nCMoGHUiPJahp9tTh/f-1783042201299-27-1szm59r.b407.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042201299-27-1szm59r.b4
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/getInt8/detached-buffer.js default`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-1thcjye.y8 `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/J1OexIgqSkiwMqrj75aj/f-1783042200375-27-1thcjye.y8q1.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042200375-27-1thcjye.y8
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/getFloat32/detached-buffer-after-toindex-byteoffset.js default`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-1trm9gd.<n>`

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/b109I3WwGYiitho3Z7CS/f-1783042309270-27-1trm9gd.215v.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042309270-27-1trm9gd.21
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/Uint8Array/prototype/setFromHex/detached-buffer.js default`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-1tubjc5.mm `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/C5P3vBG632jHBGNCXrtz/f-1783042068684-27-1tubjc5.mm51.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042068684-27-1tubjc5.mm
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/TypedArray/from/from-array-mapper-detaches-result.js strict mode`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-1ubhprc.7y `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/j15nCMoGHUiPJahp9tTh/f-1783042203418-27-1ubhprc.7ygu.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042203418-27-1ubhprc.7y
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/setInt8/detached-buffer-before-outofrange-byteoffset.js default`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-1uj0aet.qa `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/j15nCMoGHUiPJahp9tTh/f-1783042202252-27-1uj0aet.qa3i.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042202252-27-1uj0aet.qa
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/setFloat16/detached-buffer-before-outofrange-byteoffset.js strict mode`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-1utcm4s.yh `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/0y42poOUCSHZGWcb5OOT/f-1783042199946-27-1utcm4s.yhw4.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042199946-27-1utcm4s.yh
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/getBigUint64/detached-buffer.js strict mode`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-1v73d.npms `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/0tGETYiHwgNWKpDLR3IZ/f-1783042200834-27-1v73d.npmskv.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042200834-27-1v73d.npms
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/getInt16/detached-buffer.js strict mode`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-1wa64yk.i5 `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/7o3Dll5PNwWGTbDBGxPG/f-1783042202925-27-1wa64yk.i5uf.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042202925-27-1wa64yk.i5
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/setInt16/detached-buffer-after-number-value.js strict mode`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-1wcwldk.<n>`

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/UlmBLoztYqXQV6JJ9uTR/f-1783042196289-27-1wcwldk.13t6.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042196289-27-1wcwldk.13
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/ArrayBuffer/prototype/sliceToImmutable/this-is-not-detached.js strict mode`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-1wq0zow.4k `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/qJaPKOB4f4gghotKTrBr/f-1783042203186-27-1wq0zow.4k5o.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042203186-27-1wq0zow.4k
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/setInt32/detached-buffer-before-outofrange-byteoffset.js strict mode`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-1xnrauq.ei `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/7o3Dll5PNwWGTbDBGxPG/f-1783042068718-27-1xnrauq.eijb.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042068718-27-1xnrauq.ei
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/TypedArray/from/from-typedarray-into-itself-mapper-detaches-result.js default`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-1xyuejq.k0 `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/qJaPKOB4f4gghotKTrBr/f-1783042202238-27-1xyuejq.k0ks.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042202238-27-1xyuejq.k0
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/setFloat16/detached-buffer-after-toindex-byteoffset.js default`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-1ykvctw.ad `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/0y42poOUCSHZGWcb5OOT/f-1783042200822-27-1ykvctw.adwh.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042200822-27-1ykvctw.ad
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/getInt16/detached-buffer-after-toindex-byteoffset.js strict mode`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-1yubw19.w7 `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/qH4j7LVPF4kNUXvjyjzL/f-1783042202944-27-1yubw19.w7oa.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042202944-27-1yubw19.w7
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/setInt16/detached-buffer.js default`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-1yw90fm.d8 `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/0y42poOUCSHZGWcb5OOT/f-1783042203672-27-1yw90fm.d8us.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042203672-27-1yw90fm.d8
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/setUint16/detached-buffer.js default`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-23vg0s.s0n `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/UlmBLoztYqXQV6JJ9uTR/f-1783042203875-27-23vg0s.s0nwt.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042203875-27-23vg0s.s0n
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/setUint32/detached-buffer-after-number-value.js default`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-2nh3v9.e86 `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/0tGETYiHwgNWKpDLR3IZ/f-1783042200621-27-2nh3v9.e861g.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042200621-27-2nh3v9.e86
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/getFloat64/detached-buffer.js strict mode`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-2p8wop.nw3 `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/J1OexIgqSkiwMqrj75aj/f-1783042202458-27-2p8wop.nw3qu.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042202458-27-2p8wop.nw3
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/setFloat32/detached-buffer-after-number-value.js strict mode`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-2qhnjv.cc4 `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/UlmBLoztYqXQV6JJ9uTR/f-1783042309123-27-2qhnjv.cc4vm.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042309123-27-2qhnjv.cc4
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/Uint8Array/prototype/setFromBase64/detached-buffer.js default`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-315v2h.3yz `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/UlmBLoztYqXQV6JJ9uTR/f-1783042204095-27-315v2h.3yzc7.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042204095-27-315v2h.3yz
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/setUint8/detached-buffer-after-number-value.js default`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-355i13.j3g `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/b109I3WwGYiitho3Z7CS/f-1783042201449-27-355i13.j3g2h.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042201449-27-355i13.j3g
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/getUint16/detached-buffer-before-outofrange-byteoffset.js default`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-36m9jz.5iq `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/qH4j7LVPF4kNUXvjyjzL/f-1783042203657-27-36m9jz.5iqmi.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042203657-27-36m9jz.5iq
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/setUint16/detached-buffer-before-outofrange-byteoffset.js default`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-3gfum8.69j `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/qJaPKOB4f4gghotKTrBr/f-1783042204130-27-3gfum8.69jui.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042204130-27-3gfum8.69j
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/setUint8/detached-buffer.js strict mode`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-40kga5.qja `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/C5P3vBG632jHBGNCXrtz/f-1783042203184-27-40kga5.qjaus.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042203184-27-40kga5.qja
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/setInt32/detached-buffer-before-outofrange-byteoffset.js default`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-4b5hob.ncr `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/b109I3WwGYiitho3Z7CS/f-1783042203459-27-4b5hob.ncro6.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042203459-27-4b5hob.ncr
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/setInt8/detached-buffer.js default`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-4tl5mu.18h `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/6VDeeDx968HdVk60WPQF/f-1783042202255-27-4tl5mu.18h7f.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042202255-27-4tl5mu.18h
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/setFloat16/detached-buffer.js strict mode`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-4vmwi7.z1o `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/0tGETYiHwgNWKpDLR3IZ/f-1783042203153-27-4vmwi7.z1obf.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042203153-27-4vmwi7.z1o
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/setInt32/detached-buffer-after-number-value.js strict mode`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-5o422x.w4r `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/0tGETYiHwgNWKpDLR3IZ/f-1783042309125-27-5o422x.w4ru3.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042309125-27-5o422x.w4r
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/Uint8Array/prototype/setFromBase64/detached-buffer.js strict mode`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-5oryex.l3z `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/UlmBLoztYqXQV6JJ9uTR/f-1783042199737-27-5oryex.l3z1a.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042199737-27-5oryex.l3z
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/getBigInt64/detached-buffer-before-outofrange-byteoffset.js default`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-5sk1i.265f `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/C5P3vBG632jHBGNCXrtz/f-1783042202480-27-5sk1i.265f19.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042202480-27-5sk1i.265f
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/setFloat32/detached-buffer-before-outofrange-byteoffset.js default`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-7cdryf.yrl `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/qH4j7LVPF4kNUXvjyjzL/f-1783042202460-27-7cdryf.yrlop.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042202460-27-7cdryf.yrl
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/setFloat32/detached-buffer-after-toindex-byteoffset.js default`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-7nvrk3.hsd `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/0y42poOUCSHZGWcb5OOT/f-1783042196955-27-7nvrk3.hsd4u.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042196955-27-7nvrk3.hsd
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/ArrayBuffer/prototype/transferToImmutable/this-is-not-detachable.js default`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-7x8mdw.uly `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/6VDeeDx968HdVk60WPQF/f-1783042202939-27-7x8mdw.ulyp6.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042202939-27-7x8mdw.uly
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/setInt16/detached-buffer-before-outofrange-byteoffset.js strict mode`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-8lhgdl.ix7 `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/7o3Dll5PNwWGTbDBGxPG/f-1783042200602-27-8lhgdl.ix765.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042200602-27-8lhgdl.ix7
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/getFloat64/detached-buffer-after-toindex-byteoffset.js default`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-9qelat.<n> `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/6VDeeDx968HdVk60WPQF/f-1783042203194-27-9qelat.8796s.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042203194-27-9qelat.879
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/setInt32/detached-buffer.js strict mode`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-a0pxyo.ktm `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/qJaPKOB4f4gghotKTrBr/f-1783042203675-27-a0pxyo.ktm7r.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042203675-27-a0pxyo.ktm
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/setUint16/detached-buffer.js strict mode`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-b4692q.1v0 `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/6VDeeDx968HdVk60WPQF/f-1783042202488-27-b4692q.1v015.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042202488-27-b4692q.1v0
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/setFloat32/detached-buffer.js strict mode`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-crf93l.fbi `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/J1OexIgqSkiwMqrj75aj/f-1783042200829-27-crf93l.fbi25.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042200829-27-crf93l.fbi
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/getInt16/detached-buffer.js default`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-cv6uq7.y1t `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/0tGETYiHwgNWKpDLR3IZ/f-1783042201635-27-cv6uq7.y1t3t.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042201635-27-cv6uq7.y1t
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/getUint32/detached-buffer.js default`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-dmwzp0.jbu `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/6VDeeDx968HdVk60WPQF/f-1783042200158-27-dmwzp0.jbugc.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042200158-27-dmwzp0.jbu
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/getFloat16/detached-buffer.js strict mode`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-dqnu3r.myg `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/qH4j7LVPF4kNUXvjyjzL/f-1783042201810-27-dqnu3r.mygig.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042201810-27-dqnu3r.myg
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/getUint8/detached-buffer.js strict mode`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-f4kb5e.<n> `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/qH4j7LVPF4kNUXvjyjzL/f-1783042201272-27-f4kb5e.5957o.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042201272-27-f4kb5e.595
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/getInt8/detached-buffer-after-toindex-byteoffset.js default`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-fp1suo.c0s `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/0tGETYiHwgNWKpDLR3IZ/f-1783042201016-27-fp1suo.c0ssn.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042201016-27-fp1suo.c0s
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/getInt32/detached-buffer-before-outofrange-byteoffset.js strict mode`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-h39vtl.2k3 `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/UlmBLoztYqXQV6JJ9uTR/f-1783042201297-27-h39vtl.2k3rg.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042201297-27-h39vtl.2k3
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/getInt8/detached-buffer-before-outofrange-byteoffset.js strict mode`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-h5v4rq.pg3 `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/UlmBLoztYqXQV6JJ9uTR/f-1783042201465-27-h5v4rq.pg3hh.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042201465-27-h5v4rq.pg3
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/getUint16/detached-buffer-after-toindex-byteoffset.js strict mode`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-h6jx9d.0u5 `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/0y42poOUCSHZGWcb5OOT/f-1783042202486-27-h6jx9d.0u5ra.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042202486-27-h6jx9d.0u5
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/setFloat32/detached-buffer.js default`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-hcpiee.yos `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/qH4j7LVPF4kNUXvjyjzL/f-1783042202225-27-hcpiee.yosxf.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042202225-27-hcpiee.yos
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/setFloat16/detached-buffer-after-number-value.js default`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-hpds8j.q6p `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/qJaPKOB4f4gghotKTrBr/f-1783042195131-27-hpds8j.q6pvm.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042195131-27-hpds8j.q6p
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/ArrayBuffer/prototype/detached/detached-buffer-resizable.js default`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-hwj5u7.60p `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/LBscudCSq1vFX7P6ipyC/f-1783042201293-27-hwj5u7.60p0r.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042201293-27-hwj5u7.60p
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/getInt8/detached-buffer-before-outofrange-byteoffset.js default`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-iao5b5.eed `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/qH4j7LVPF4kNUXvjyjzL/f-1783042201626-27-iao5b5.eedlq.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042201626-27-iao5b5.eed
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/getUint32/detached-buffer-after-toindex-byteoffset.js default`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-iw1l9q.hwz `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/qH4j7LVPF4kNUXvjyjzL/f-1783042195275-27-iw1l9q.hwzbl.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042195275-27-iw1l9q.hwz
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/ArrayBuffer/prototype/immutable/return-immutable.js strict mode`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-j8yeu4.uli `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/0y42poOUCSHZGWcb5OOT/f-1783042195007-27-j8yeu4.ulioj.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042195007-27-j8yeu4.uli
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/ArrayBuffer/prototype/byteLength/detached-buffer.js strict mode`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-jvj4o2.dvq `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/b109I3WwGYiitho3Z7CS/f-1783042203903-27-jvj4o2.dvq7a.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042203903-27-jvj4o2.dvq
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/setUint32/detached-buffer.js strict mode`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-k8r5ha.hqf `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/qJaPKOB4f4gghotKTrBr/f-1783042202694-27-k8r5ha.hqfgf.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042202694-27-k8r5ha.hqf
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/setFloat64/detached-buffer-after-number-value.js strict mode`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-mb3u3w.c4o `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/7o3Dll5PNwWGTbDBGxPG/f-1783042202229-27-mb3u3w.c4oxj.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042202229-27-mb3u3w.c4o
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/setFloat16/detached-buffer-after-number-value.js strict mode`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-mjpxg6.u8g `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/J1OexIgqSkiwMqrj75aj/f-1783042201014-27-mjpxg6.u8gon.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042201014-27-mjpxg6.u8g
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/getInt32/detached-buffer-before-outofrange-byteoffset.js default`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-mvremk.n0b `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/0tGETYiHwgNWKpDLR3IZ/f-1783042309478-27-mvremk.n0boe.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042309478-27-mvremk.n0b
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/Uint8Array/prototype/toHex/detached-buffer.js default`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-n6ir98.rz7 `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/J1OexIgqSkiwMqrj75aj/f-1783042195138-27-n6ir98.rz7uo.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042195138-27-n6ir98.rz7
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/ArrayBuffer/prototype/detached/detached-buffer.js strict mode`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-n9jefw.qz4 `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/b109I3WwGYiitho3Z7CS/f-1783042202705-27-n9jefw.qz4gb.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042202705-27-n9jefw.qz4
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/setFloat64/detached-buffer-before-outofrange-byteoffset.js default`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-peej67.eth `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/j15nCMoGHUiPJahp9tTh/f-1783042201961-27-peej67.ethsm.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042201961-27-peej67.eth
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/setBigInt64/detached-buffer-after-toindex-byteoffset.js default`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-pjny0o.z3x `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/6VDeeDx968HdVk60WPQF/f-1783042202716-27-pjny0o.z3xgc.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042202716-27-pjny0o.z3x
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/setFloat64/detached-buffer-before-outofrange-byteoffset.js strict mode`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-q3loth.q78 `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/C5P3vBG632jHBGNCXrtz/f-1783042202243-27-q3loth.q78sd.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042202243-27-q3loth.q78
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/setFloat16/detached-buffer-after-toindex-byteoffset.js strict mode`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-r5zf6l.rxs `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/j15nCMoGHUiPJahp9tTh/f-1783042199469-27-r5zf6l.rxsq7.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042199469-27-r5zf6l.rxs
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/byteLength/detached-buffer.js strict mode`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-r9ltzx.qe5 `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/0tGETYiHwgNWKpDLR3IZ/f-1783042196834-27-r9ltzx.qe5za.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042196834-27-r9ltzx.qe5
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/ArrayBuffer/prototype/transferToFixedLength/this-is-detached.js strict mode`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-rjgn0x.6x5 `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/7o3Dll5PNwWGTbDBGxPG/f-1783042196287-27-rjgn0x.6x5qm.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042196287-27-rjgn0x.6x5
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/ArrayBuffer/prototype/sliceToImmutable/this-is-not-detached.js default`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-rsselc.vxx `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/qJaPKOB4f4gghotKTrBr/f-1783042201993-27-rsselc.vxxah.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042201993-27-rsselc.vxx
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/setBigInt64/detached-buffer.js strict mode`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-sfwl4a.z8z `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/UlmBLoztYqXQV6JJ9uTR/f-1783042309480-27-sfwl4a.z8z5b.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042309480-27-sfwl4a.z8z
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/Uint8Array/prototype/toHex/detached-buffer.js strict mode`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-tqjp24.k5b `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/j15nCMoGHUiPJahp9tTh/f-1783042195133-27-tqjp24.k5bun.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042195133-27-tqjp24.k5b
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/ArrayBuffer/prototype/detached/detached-buffer-resizable.js strict mode`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-u1nu5t.nvl `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/UlmBLoztYqXQV6JJ9uTR/f-1783042196556-27-u1nu5t.nvl1a.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042196556-27-u1nu5t.nvl
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/ArrayBuffer/prototype/transfer/this-is-detached.js strict mode`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-w1raf0.a0p `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/qH4j7LVPF4kNUXvjyjzL/f-1783042195421-27-w1raf0.a0puh.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042195421-27-w1raf0.a0p
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/ArrayBuffer/prototype/resizable/detached-buffer.js default`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-ww4773.t04 `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/qH4j7LVPF4kNUXvjyjzL/f-1783042201988-27-ww4773.t04cm.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042201988-27-ww4773.t04
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/setBigInt64/detached-buffer-before-outofrange-byteoffset.js strict mode`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-xiacbe.mde `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/0tGETYiHwgNWKpDLR3IZ/f-1783042195005-27-xiacbe.mde19.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042195005-27-xiacbe.mde
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/ArrayBuffer/prototype/byteLength/detached-buffer.js default`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-xnf2kz.yfd `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/UlmBLoztYqXQV6JJ9uTR/f-1783042201800-27-xnf2kz.yfdjn.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042201800-27-xnf2kz.yfd
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/getUint8/detached-buffer-after-toindex-byteoffset.js strict mode`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-xptzeg.6h0 `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/LBscudCSq1vFX7P6ipyC/f-1783042200827-27-xptzeg.6h0sm.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042200827-27-xptzeg.6h0
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/getInt16/detached-buffer-before-outofrange-byteoffset.js strict mode`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-ycq84y.gy6 `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/J1OexIgqSkiwMqrj75aj/f-1783042202691-27-ycq84y.gy6pj.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042202691-27-ycq84y.gy6
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/setFloat64/detached-buffer-after-number-value.js default`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-yjxfpa.32i `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/6VDeeDx968HdVk60WPQF/f-1783042201960-27-yjxfpa.32i8q.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042201960-27-yjxfpa.32i
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/setBigInt64/detached-buffer-after-bigint-value.js strict mode`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-yritwq.jyh `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/0tGETYiHwgNWKpDLR3IZ/f-1783042201991-27-yritwq.jyhu9.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042201991-27-yritwq.jyh
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/setBigInt64/detached-buffer.js default`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc> (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-zh59v4.5xc `

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/qJaPKOB4f4gghotKTrBr/f-1783042309272-27-zh59v4.5xcqa.js
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042309272-27-zh59v4.5xc
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/Uint8Array/prototype/setFromHex/detached-buffer.js strict mode`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc>: (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-1<n>.e8e [`

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/C5P3vBG632jHBGNCXrtz/f-1783042203885-27-10x039.e8et.js:
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042203885-27-10x039.e8e
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/setUint32/detached-buffer-before-outofrange-byteoffset.js default`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc>: (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-12xavg0.<n`

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/qH4j7LVPF4kNUXvjyjzL/f-1783042203416-27-12xavg0.682.js:
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042203416-27-12xavg0.68
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/setInt8/detached-buffer-after-number-value.js strict mode`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc>: (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-1o42ucf.<n`

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/J1OexIgqSkiwMqrj75aj/f-1783042201301-27-1o42ucf.247.js:
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042201301-27-1o42ucf.24
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/getInt8/detached-buffer.js strict mode`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc>: (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-67jb2k.wpe`

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/J1OexIgqSkiwMqrj75aj/f-1783042203177-27-67jb2k.wpeh.js:
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042203177-27-67jb2k.wpe
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/setInt32/detached-buffer-after-toindex-byteoffset.js default`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc>: (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-7id8yv.gh4`

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/6VDeeDx968HdVk60WPQF/f-1783042196832-27-7id8yv.gh4b.js:
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042196832-27-7id8yv.gh4
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/ArrayBuffer/prototype/transferToFixedLength/this-is-detached.js default`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc>: (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-93z8pg.vrn`

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/C5P3vBG632jHBGNCXrtz/f-1783042203644-27-93z8pg.vrn2.js:
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042203644-27-93z8pg.vrn
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/setUint16/detached-buffer-after-number-value.js strict mode`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc>: (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-dji3v8.2u9`

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/7o3Dll5PNwWGTbDBGxPG/f-1783042203642-27-dji3v8.2u93.js:
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042203642-27-dji3v8.2u9
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/setUint16/detached-buffer-after-number-value.js default`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc>: (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-gqd2t5.fzv`

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/j15nCMoGHUiPJahp9tTh/f-1783042200825-27-gqd2t5.fzvh.js:
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042200825-27-gqd2t5.fzv
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/getInt16/detached-buffer-before-outofrange-byteoffset.js default`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc>: (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-h8ew2y.9by`

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/qJaPKOB4f4gghotKTrBr/f-1783042203901-27-h8ew2y.9by7.js:
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042203901-27-h8ew2y.9by
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/setUint32/detached-buffer.js default`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc>: (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-i4gy9j.voh`

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/LBscudCSq1vFX7P6ipyC/f-1783042200129-27-i4gy9j.vohv.js:
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042200129-27-i4gy9j.voh
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/getFloat16/detached-buffer-after-toindex-byteoffset.js default`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc>: (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-iigzom.9yn`

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/UlmBLoztYqXQV6JJ9uTR/f-1783042203647-27-iigzom.9ynt.js:
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042203647-27-iigzom.9yn
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/setUint16/detached-buffer-after-toindex-byteoffset.js default`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc>: (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-kl327n.3d7`

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/7o3Dll5PNwWGTbDBGxPG/f-1783042202696-27-kl327n.3d7l.js:
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042202696-27-kl327n.3d7
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/setFloat64/detached-buffer-after-toindex-byteoffset.js default`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc>: (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-l2rti9.opb`

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/LBscudCSq1vFX7P6ipyC/f-1783042199937-27-l2rti9.opbf.js:
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042199937-27-l2rti9.opb
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/getBigUint64/detached-buffer-before-outofrange-byteoffset.js default`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc>: (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-lcuzx1.jf6`

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/b109I3WwGYiitho3Z7CS/f-1783042201812-27-lcuzx1.jf6r.js:
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042201812-27-lcuzx1.jf6
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/getUint8/detached-buffer-before-outofrange-byteoffset.js default`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc>: (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-mhzzm3.5hw`

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/qJaPKOB4f4gghotKTrBr/f-1783042201274-27-mhzzm3.5hwy.js:
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042201274-27-mhzzm3.5hw
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/getInt8/detached-buffer-after-toindex-byteoffset.js strict mode`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc>: (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-mpfoxf.ujb`

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/6VDeeDx968HdVk60WPQF/f-1783042204107-27-mpfoxf.ujbz.js:
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042204107-27-mpfoxf.ujb
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/setUint8/detached-buffer-after-toindex-byteoffset.js strict mode`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc>: (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-pb2zep.5kg`

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/b109I3WwGYiitho3Z7CS/f-1783042202923-27-pb2zep.5kgh.js:
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042202923-27-pb2zep.5kg
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/setInt16/detached-buffer-after-number-value.js default`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc>: (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-qp2fn0.tf9`

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/C5P3vBG632jHBGNCXrtz/f-1783042201958-27-qp2fn0.tf9d.js:
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042201958-27-qp2fn0.tf9
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/setBigInt64/detached-buffer-after-bigint-value.js default`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc>: (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-ra33gk.5uk`

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/qH4j7LVPF4kNUXvjyjzL/f-1783042203877-27-ra33gk.5uka.js:
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042203877-27-ra33gk.5uk
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/setUint32/detached-buffer-after-number-value.js strict mode`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc>: (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-rgi14w.30o`

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/7o3Dll5PNwWGTbDBGxPG/f-1783042201830-27-rgi14w.30oi.js:
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042201830-27-rgi14w.30o
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/getUint8/detached-buffer-before-outofrange-byteoffset.js strict mode`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc>: (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-t0kkwf.orf`

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/qH4j7LVPF4kNUXvjyjzL/f-1783042202719-27-t0kkwf.orfr.js:
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042202719-27-t0kkwf.orf
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/setFloat64/detached-buffer.js default`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc>: (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-tu4zo4.egq`

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/LBscudCSq1vFX7P6ipyC/f-1783042202250-27-tu4zo4.egqm.js:
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042202250-27-tu4zo4.egq
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/setFloat16/detached-buffer-before-outofrange-byteoffset.js default`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc>: (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-u4frpu.qxy`

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/UlmBLoztYqXQV6JJ9uTR/f-1783042068728-27-u4frpu.qxy9.js:
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042068728-27-u4frpu.qxy
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/TypedArray/from/from-typedarray-mapper-detaches-result.js default`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc>: (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-uus7ct.80g`

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/J1OexIgqSkiwMqrj75aj/f-1783042196553-27-uus7ct.80g9.js:
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042196553-27-uus7ct.80g
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/ArrayBuffer/prototype/transfer/this-is-detached.js default`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc>: (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-v9m05p.9cz`

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/LBscudCSq1vFX7P6ipyC/f-1783042202455-27-v9m05p.9czr.js:
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042202455-27-v9m05p.9cz
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/setFloat32/detached-buffer-after-number-value.js default`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc>: (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-vdxra6.<n>`

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/J1OexIgqSkiwMqrj75aj/f-1783042203448-27-vdxra6.5827.js:
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042203448-27-vdxra6.582
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/setInt8/detached-buffer-after-toindex-byteoffset.js strict mode`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc>: (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-w8vh7y.wlt`

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/LBscudCSq1vFX7P6ipyC/f-1783042202699-27-w8vh7y.wltw.js:
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042202699-27-w8vh7y.wlt
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/setFloat64/detached-buffer-after-toindex-byteoffset.js strict mode`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc>: (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-xklh1a.irm`

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/qH4j7LVPF4kNUXvjyjzL/f-1783042199943-27-xklh1a.irmd.js:
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042199943-27-xklh1a.irm
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/getBigUint64/detached-buffer.js default`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc>: (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-yhhl4v.1cz`

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/0y42poOUCSHZGWcb5OOT/f-1783042203430-27-yhhl4v.1czn.js:
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042203430-27-yhhl4v.1cz
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/setInt8/detached-buffer-before-outofrange-byteoffset.js strict mode`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc>: (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-z09700.i9z`

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/6VDeeDx968HdVk60WPQF/f-1783042200811-27-z09700.i9zh.js:
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042200811-27-z09700.i9z
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/getInt16/detached-buffer-after-toindex-byteoffset.js default`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc>: (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-z8t8ol.t68`

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/UlmBLoztYqXQV6JJ9uTR/f-1783042201982-27-z8t8ol.t68g.js:
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042201982-27-z8t8ol.t68
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/DataView/prototype/setBigInt64/detached-buffer-before-outofrange-byteoffset.js default`

### 1 × `Error: $262.detachArrayBuffer not supported by the Elide host In file <loc>: (source excerpt suppressed) Stack Trace [js] detachArrayBuffer f-<n>-<n>-zeiiah.2ud`

distinct messages:
- `Error: $262.detachArrayBuffer not supported by the Elide host
In file ../../../tmp/C5P3vBG632jHBGNCXrtz/f-1783042195423-27-zeiiah.2udw.js:
(source excerpt suppressed)
Stack Trace
[js] detachArrayBuffer                     f-1783042195423-27-zeiiah.2ud
[js] $DETACHBUFFER                         f-178`
example test: `test/built-ins/ArrayBuffer/prototype/resizable/detached-buffer.js strict mode`

### 1 × `Expected a SyntaxError but got a TypeError (Testing with`

distinct messages:
- `Expected a SyntaxError but got a TypeError (Testing with`
example test: `test/built-ins/TypedArrayConstructors/internals/Set/BigInt/string-nan-tobigint.js strict mode`

### 1 × `Expected a Test262Error but got a TypeError (Testing with`

distinct messages:
- `Expected a Test262Error but got a TypeError (Testing with`
example test: `test/built-ins/TypedArrayConstructors/internals/Set/tonumber-value-throws.js strict mode`

### 1 × `Expected a Test262Error to be thrown but no exception was`

distinct messages:
- `Expected a Test262Error to be thrown but no exception was`
example test: `test/built-ins/TypedArrayConstructors/internals/Set/tonumber-value-throws.js default`

### 1 × `Expected no error, got ReferenceError: test262Fn is not defined`

distinct messages:
- `Expected no error, got ReferenceError: test262Fn is not defined`
example test: `test/annexB/language/eval-code/direct/script-decl-lex-no-collision.js strict mode`

### 1 × `Expected no error, got ReferenceError: test262Var is not defined`

distinct messages:
- `Expected no error, got ReferenceError: test262Var is not defined`
example test: `test/language/global-code/script-decl-lex-var-declared-via-eval.js strict mode`

### 1 × `Expected SameValue(«function test262Fn() {}», «<n>») to be true`

distinct messages:
- `Expected SameValue(«function test262Fn() {}», «1») to be true`
example test: `test/annexB/language/eval-code/direct/script-decl-lex-no-collision.js default`

### 1 × `Expected SameValue(«undefined», «<n>») to be true`

distinct messages:
- `Expected SameValue(«undefined», «1») to be true`
example test: `test/language/global-code/script-decl-lex-var-declared-via-eval.js default`

### 1 × `Script Error java.lang.IllegalStateException: Recursive update In file ../../../tmp/7o3Dll5PNwWGTbDBGxPG/eval-self-once-module.mjs<loc> Stack Trace [js] :anonym`

distinct messages:
- `Script Error
java.lang.IllegalStateException: Recursive update
In file ../../../tmp/7o3Dll5PNwWGTbDBGxPG/eval-self-once-module.mjs:1779:1
Stack Trace
[js] :anonymous                                              <unknown>
· elide run /tmp/7o3Dll5PNwWGTbDBGxPG/eval-self-once-module.mjs
Advice
An error`
example test: `test/language/expressions/dynamic-import/eval-self-once-module.js strict mode`

### 1 × `Script Error java.lang.IllegalStateException: Recursive update In file ../../../tmp/hTOOosumwEHK0StV9C29/eval-self-once-module.mjs<loc> Stack Trace [js] :anonym`

distinct messages:
- `Script Error
java.lang.IllegalStateException: Recursive update
In file ../../../tmp/hTOOosumwEHK0StV9C29/eval-self-once-module.mjs:1779:1
Stack Trace
[js] :anonymous                                              <unknown>
· elide run /tmp/hTOOosumwEHK0StV9C29/eval-self-once-module.mjs
Advice
An error`
example test: `test/language/expressions/dynamic-import/eval-self-once-module.js default`

## By feature

| count | feature |
|---:|---|
| 713 | dynamic-import |
| 441 | TypedArray |
| 372 | cross-realm |
| 238 | import-defer |
| 230 | BigInt |
| 226 | Reflect |
| 159 | align-detached-buffer-semantics-with-web-reality |
| 126 | source-phase-imports |
| 122 | await-dictionary |
| 119 | Symbol |
| 109 | Proxy |
| 108 | generators |
| 70 | error-stack-accessor |
| 67 | import-attributes |
| 62 | Symbol.toStringTag |
| 60 | top-level-await |
| 52 | async-iteration |
| 50 | legacy-regexp |
| 50 | Symbol.iterator |
| 50 | Symbol.species |
| 46 | source-phase-imports-module-source |
| 41 | class |
| 40 | IsHTMLDDA |
| 35 | tail-call-optimization |
| 30 | export-star-as-namespace-from-module |
| 26 | ArrayBuffer |
| 26 | json-modules |
| 22 | immutable-arraybuffer |
| 20 | DataView |
| 18 | arbitrary-module-namespace-names |
| 16 | array-find-from-last |
| 16 | arrow-function |
| 16 | let |
| 16 | Reflect.construct |
| 14 | explicit-resource-management |
| 14 | Float16Array |
| 12 | import-text |
| 12 | Promise.allSettled |
| 12 | resizable-arraybuffer |
| 10 | import-bytes |
| 10 | ShadowRealm |
| 9 | class-methods-private |
| 8 | arraybuffer-transfer |
| 8 | async-functions |
| 8 | SharedArrayBuffer |
| 8 | Symbol.split |
| 8 | uint8array-base64 |
| 6 | globalThis |
| 6 | new.target |
| 6 | promise-with-resolvers |
| 6 | Symbol.replace |
| 4 | __proto__ |
| 4 | change-array-by-copy |
| 4 | Error.isError |
| 4 | import.meta |
| 4 | logical-assignment-operators |
| 4 | Promise.any |
| 4 | Symbol.asyncIterator |
| 4 | Symbol.match |
| 4 | Symbol.matchAll |
| 4 | Symbol.search |
| 3 | class-static-methods-private |
| 2 | AggregateError |
| 2 | Array.prototype.includes |
| 2 | coalesce-expression |
| 2 | FinalizationRegistry |
| 2 | hashbang |
| 2 | iterator-helpers |
| 2 | nonextensible-applies-to-private |
| 2 | optional-chaining |
| 2 | Promise.prototype.finally |
| 2 | Reflect.set |
| 2 | regexp-dotall |
| 2 | regexp-match-indices |
| 2 | regexp-v-flag |
| 2 | RegExp.escape |
| 2 | String.prototype.matchAll |
| 2 | String.prototype.replaceAll |
| 2 | Symbol.hasInstance |
| 2 | Symbol.isConcatSpreadable |
| 2 | Symbol.unscopables |
| 2 | WeakRef |
| 1 | class-static-fields-private |
