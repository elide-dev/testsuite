# Impact-ordered failures

## By root-cause signature

### 64 × `Expected no error, got TypeError: Cannot read property <str> of undefined`

distinct messages:
- `Expected no error, got TypeError: Cannot read property 'get' of undefined`
- `Expected no error, got TypeError: Cannot read property 'set' of undefined`
example test: `test/built-ins/Error/prototype/stack/getter-cross-realm.js default`

### 12 × `Expected a ReferenceError to be thrown but no exception was thrown at all`

distinct messages:
- `Expected a ReferenceError to be thrown but no exception was thrown at all`
example test: `test/language/module-code/instn-named-bndng-dflt-star.js strict mode`

### 12 × `Expected no error, got ReferenceError: results is not defined`

distinct messages:
- `Expected no error, got ReferenceError: results is not defined`
example test: `test/language/module-code/instn-iee-bndng-cls.js strict mode`

### 8 × `binding is created but not initialized Expected a ReferenceError to be thrown but no exception was thrown at all`

distinct messages:
- `binding is created but not initialized Expected a ReferenceError to be thrown but no exception was thrown at all`
example test: `test/language/module-code/instn-named-bndng-cls.js default`

### 6 × `Expected a TypeError to be thrown but no exception was thrown at all`

distinct messages:
- `Expected a TypeError to be thrown but no exception was thrown at all`
example test: `test/language/global-code/script-decl-func-err-non-extensible.js strict mode`

### 4 × `binding is initialized to <str> prior to module evaulation Expected SameValue(«<n>», «undefined») to be true`

distinct messages:
- `binding is initialized to ʼundefinedʼ prior to module evaulation Expected SameValue(«23», «undefined») to be true`
example test: `test/language/module-code/instn-named-bndng-trlng-comma.js strict mode`

### 4 × `Expected a TypeError to be thrown but no exception was thrown at all (Testing with BigInt64Array and makeImmutableArrayBuffer.)`

distinct messages:
- `Expected a TypeError to be thrown but no exception was thrown at all (Testing with BigInt64Array and makeImmutableArrayBuffer.)`
example test: `test/built-ins/TypedArrayConstructors/internals/Set/BigInt/null-tobigint.js default`

### 4 × `Expected no error, got TypeError: Module not found: <str>`

distinct messages:
- `Expected no error, got TypeError: Module not found: '<module source>'`
example test: `test/language/module-code/source-phase-import/reexport-source-binding-named-import.js strict mode`

### 3 × `Expected a SyntaxError to be thrown but no exception was thrown at all`

distinct messages:
- `Expected a SyntaxError to be thrown but no exception was thrown at all`
example test: `test/language/global-code/script-decl-lex-restricted-global.js strict mode`

### 2 × `<str> binding Expected a SyntaxError to be thrown but no exception was thrown at all`

distinct messages:
- `ʼletʼ binding Expected a SyntaxError to be thrown but no exception was thrown at all`
example test: `test/language/global-code/script-decl-lex-lex.js strict mode`

### 2 × `<str> on <str> binding Expected a SyntaxError to be thrown but no exception was thrown at all`

distinct messages:
- `ʼvarʼ on ʼletʼ binding Expected a SyntaxError to be thrown but no exception was thrown at all`
example test: `test/language/global-code/script-decl-var-collision.js default`

### 2 × `All globalThis properties must be configurable Expected SameValue(«<str>», «<str>») to be true`

distinct messages:
- `All globalThis properties must be configurable Expected SameValue(«"__dirname, __filename, module, exports"», «""») to be true`
example test: `test/built-ins/ShadowRealm/prototype/evaluate/globalthis-config-only-properties.js strict mode`

### 2 × `Binding is created but not initialized. Expected a ReferenceError to be thrown but no exception was thrown at all`

distinct messages:
- `Binding is created but not initialized. Expected a ReferenceError to be thrown but no exception was thrown at all`
example test: `test/language/module-code/instn-named-bndng-dflt-cls.js strict mode`

### 2 × `binding unmodified: local1 Expected a ReferenceError to be thrown but no exception was thrown at all`

distinct messages:
- `binding unmodified: local1 Expected a ReferenceError to be thrown but no exception was thrown at all`
example test: `test/language/module-code/namespace/internals/delete-exported-uninit.js strict mode`

### 2 × `en-US-u-nu-hanidec: display all time units in <n>-digit Expected SameValue(«false», «true») to be true`

distinct messages:
- `en-US-u-nu-hanidec: display all time units in 2-digit Expected SameValue(«false», «true») to be true`
example test: `test/intl402/DateTimeFormat/prototype/format/numbering-system.js default`

### 2 × `Error: getOwnPropertyNames does not include <str> Expected SameValue(«<n>», «-<n>») to be true`

distinct messages:
- `Error: getOwnPropertyNames does not include "stack" Expected SameValue(«1», «-1») to be true`
example test: `test/built-ins/Error/prototype/stack/instance-not-enumerable.js default`

### 2 × `Error: hasOwnProperty(<str>) is false Expected SameValue(«true», «false») to be true`

distinct messages:
- `Error: hasOwnProperty("stack") is false Expected SameValue(«true», «false») to be true`
example test: `test/built-ins/Error/prototype/stack/instance-no-own-stack.js default`

### 2 × `Error.prototype.stack getter should be a function Expected SameValue(«<str>», «<str>») to be true`

distinct messages:
- `Error.prototype.stack getter should be a function Expected SameValue(«"undefined"», «"function"») to be true`
example test: `test/built-ins/Error/prototype/stack/prop-desc.js default`

### 2 × `Expected a ReferenceError but got a Test262Error`

distinct messages:
- `Expected a ReferenceError but got a Test262Error`
example test: `test/language/module-code/namespace/internals/enumerate-binding-uninit.js strict mode`

### 2 × `Expected a ReferenceError but got a TypeError`

distinct messages:
- `Expected a ReferenceError but got a TypeError`
example test: `test/language/module-code/namespace/internals/super-access-to-tdz-binding.js default`

### 2 × `Expected no error, got ReferenceError: assert is not defined`

distinct messages:
- `Expected no error, got ReferenceError: assert is not defined`
example test: `test/language/module-code/ambiguous-export-bindings/namespace-unambiguous-if-export-star-as-from-and-import-star-as-and-export.js strict mode`

### 2 × `Expected no error, got TypeError: <str> is not a configurable property`

distinct messages:
- `Expected no error, got TypeError: "default" is not a configurable property`
example test: `test/language/expressions/dynamic-import/namespace/await-ns-delete-non-exported-strict.js strict mode`

### 2 × `Expected no error, got TypeError: Immutable buffer (Testing with Float64Array and makeImmutableArrayBuffer.)`

distinct messages:
- `Expected no error, got TypeError: Immutable buffer (Testing with Float64Array and makeImmutableArrayBuffer.)`
example test: `test/built-ins/TypedArray/prototype/slice/speciesctor-return-same-buffer-with-offset.js strict mode`

### 2 × `Expected SameValue(«false», «true») to be true (Testing with BigInt64Array and makeImmutableArrayBuffer.)`

distinct messages:
- `Expected SameValue(«false», «true») to be true (Testing with BigInt64Array and makeImmutableArrayBuffer.)`
example test: `test/built-ins/TypedArrayConstructors/internals/GetOwnProperty/BigInt/index-prop-desc.js default`

### 2 × `Expected SameValue(«false», «true») to be true (Testing with Float64Array and makeImmutableArrayBuffer.)`

distinct messages:
- `Expected SameValue(«false», «true») to be true (Testing with Float64Array and makeImmutableArrayBuffer.)`
example test: `test/built-ins/TypedArrayConstructors/internals/GetOwnProperty/index-prop-desc.js strict mode`

### 2 × `global property initially unset Expected SameValue(«<n>», «undefined») to be true`

distinct messages:
- `global property initially unset Expected SameValue(«262», «undefined») to be true`
example test: `test/language/module-code/eval-self-once.js default`

### 2 × `hasOwnProperty: local1 Expected a ReferenceError to be thrown but no exception was thrown at all`

distinct messages:
- `hasOwnProperty: local1 Expected a ReferenceError to be thrown but no exception was thrown at all`
example test: `test/language/module-code/namespace/internals/get-own-property-str-found-uninit.js strict mode`

### 2 × `islamic-civil eras (Anno Hegirae,Anno Hegirae) should be unique Expected SameValue(«<n>», «<n>») to be true`

distinct messages:
- `islamic-civil eras (Anno Hegirae,Anno Hegirae) should be unique Expected SameValue(«1», «2») to be true`
example test: `test/intl402/DateTimeFormat/prototype/formatToParts/era.js default`

### 2 × `java.lang.IllegalStateException: Recursive update at :anonymous (native) at :program (<loc>)`

distinct messages:
- `java.lang.IllegalStateException: Recursive update
    at :anonymous (native)
    at :program (eval-self-once-script.js:281:3)`
- `java.lang.IllegalStateException: Recursive update
    at :anonymous (native)
    at :program (eval-self-once-script.js:282:3)`
example test: `test/language/expressions/dynamic-import/eval-self-once-script.js default`

### 2 × `name descriptor value should be [Symbol.asyncIterator]; name value should be [Symbol.asyncIterator]`

distinct messages:
- `name descriptor value should be [Symbol.asyncIterator]; name value should be [Symbol.asyncIterator]`
example test: `test/built-ins/AsyncIteratorPrototype/Symbol.asyncIterator/name.js default`

### 2 × `non-continental timezone Etc/GMT+<n> is not supported`

distinct messages:
- `non-continental timezone Etc/GMT+1 is not supported`
example test: `test/intl402/Intl/supportedValuesOf/timeZones-include-non-continental.js default`

### 2 × `self is not initialized yet Expected a ReferenceError to be thrown but no exception was thrown at all`

distinct messages:
- `self is not initialized yet Expected a ReferenceError to be thrown but no exception was thrown at all`
example test: `test/language/module-code/top-level-await/module-self-import-async-resolution-ticks.js strict mode`

### 2 × `Test timed out`

distinct messages:
- `Test timed out`
example test: `test/built-ins/Object/defineProperty/15.2.3.6-4-116.js default`

### 2 × `Test262Error: delete: default`

distinct messages:
- `Test262Error: delete: default`
example test: `test/language/expressions/dynamic-import/namespace/await-ns-delete-non-exported-no-strict.js default`

### 2 × `Test262Error: Expected SameValue(«<str>», «<str>») to be true`

distinct messages:
- `Test262Error: Expected SameValue(«"B"», «"A"») to be true`
example test: `test/language/module-code/verify-dfs.js strict mode`

### 2 × `Test262Error: Expected SameValue(«true», «false») to be true`

distinct messages:
- `Test262Error: Expected SameValue(«true», «false») to be true`
example test: `test/language/expressions/dynamic-import/namespace/default-property-not-set-own.js default`

### 2 × `Test262Error: f Expected SameValue(«null», «<str>») to be true`

distinct messages:
- `Test262Error: f Expected SameValue(«null», «"foo"») to be true`
example test: `test/language/expressions/dynamic-import/for-await-resolution-and-error-agen-yield.js default`

### 2 × `Test262Error: global property was defined and incremented only once Expected SameValue(«<n>», «<n>») to be true`

distinct messages:
- `Test262Error: global property was defined and incremented only once Expected SameValue(«2», «1») to be true`
example test: `test/language/expressions/dynamic-import/eval-self-once-module.js strict mode`

### 2 × `Test262Error: The import should reject (second import) Expected a Error to be thrown asynchronously but no exception was thrown at all`

distinct messages:
- `Test262Error: The import should reject (second import) Expected a Error to be thrown asynchronously but no exception was thrown at all`
example test: `test/language/expressions/dynamic-import/import-errored-module.js strict mode`

### 2 × `Test262Error: updated value, direct binding Expected SameValue(«<n>», «<n>») to be true`

distinct messages:
- `Test262Error: updated value, direct binding Expected SameValue(«0», «1») to be true`
example test: `test/language/expressions/dynamic-import/imported-self-update.js default`

### 2 × `variable Expected a SyntaxError to be thrown but no exception was thrown at all`

distinct messages:
- `variable Expected a SyntaxError to be thrown but no exception was thrown at all`
example test: `test/language/global-code/script-decl-lex-var.js default`

### 2 × `writable, non-enumerable data property Expected a TypeError to be thrown but no exception was thrown at all`

distinct messages:
- `writable, non-enumerable data property Expected a TypeError to be thrown but no exception was thrown at all`
example test: `test/language/global-code/script-decl-func-err-non-configurable.js default`

### 1 × `<str> throws Test262Error Expected a Test262Error but got a TypeError (Testing with BigInt64Array and makeImmutableArrayBuffer.)`

distinct messages:
- `ʼsample["0"] = objʼ throws Test262Error Expected a Test262Error but got a TypeError (Testing with BigInt64Array and makeImmutableArrayBuffer.)`
example test: `test/built-ins/TypedArrayConstructors/internals/Set/BigInt/tonumber-value-throws.js strict mode`

### 1 × `<str> throws Test262Error Expected a Test262Error to be thrown but no exception was thrown at all (Testing with BigInt64Array and makeImmutableArrayBuffer.)`

distinct messages:
- `ʼsample["0"] = objʼ throws Test262Error Expected a Test262Error to be thrown but no exception was thrown at all (Testing with BigInt64Array and makeImmutableArrayBuffer.)`
example test: `test/built-ins/TypedArrayConstructors/internals/Set/BigInt/tonumber-value-throws.js default`

### 1 × `Expected a SyntaxError but got a TypeError (Testing with BigInt64Array and makeImmutableArrayBuffer.)`

distinct messages:
- `Expected a SyntaxError but got a TypeError (Testing with BigInt64Array and makeImmutableArrayBuffer.)`
example test: `test/built-ins/TypedArrayConstructors/internals/Set/BigInt/string-nan-tobigint.js strict mode`

### 1 × `Expected a SyntaxError to be thrown but no exception was thrown at all (Testing with BigInt64Array and makeImmutableArrayBuffer.)`

distinct messages:
- `Expected a SyntaxError to be thrown but no exception was thrown at all (Testing with BigInt64Array and makeImmutableArrayBuffer.)`
example test: `test/built-ins/TypedArrayConstructors/internals/Set/BigInt/string-nan-tobigint.js default`

### 1 × `Expected a Test262Error but got a TypeError (Testing with Float64Array and makeImmutableArrayBuffer.)`

distinct messages:
- `Expected a Test262Error but got a TypeError (Testing with Float64Array and makeImmutableArrayBuffer.)`
example test: `test/built-ins/TypedArrayConstructors/internals/Set/tonumber-value-throws.js strict mode`

### 1 × `Expected a Test262Error to be thrown but no exception was thrown at all (Testing with Float64Array and makeImmutableArrayBuffer.)`

distinct messages:
- `Expected a Test262Error to be thrown but no exception was thrown at all (Testing with Float64Array and makeImmutableArrayBuffer.)`
example test: `test/built-ins/TypedArrayConstructors/internals/Set/tonumber-value-throws.js default`

### 1 × `Expected a TypeError to be thrown but no exception was thrown at all (Testing with Float64Array and makeImmutableArrayBuffer.)`

distinct messages:
- `Expected a TypeError to be thrown but no exception was thrown at all (Testing with Float64Array and makeImmutableArrayBuffer.)`
example test: `test/built-ins/TypedArrayConstructors/internals/Set/bigint-tonumber.js default`

### 1 × `Expected SameValue(«<str>», «<str>») to be true`

distinct messages:
- `Expected SameValue(«"function arguments() {}"», «"[object Arguments]"») to be true`
example test: `test/annexB/language/function-code/block-decl-func-skip-arguments.js default`

## By feature

| count | feature |
|---:|---|
| 70 | error-stack-accessor |
| 18 | dynamic-import |
| 17 | TypedArray |
| 15 | align-detached-buffer-semantics-with-web-reality |
| 11 | BigInt |
| 10 | Proxy |
| 8 | let |
| 6 | Reflect |
| 6 | Reflect.construct |
| 4 | __proto__ |
| 4 | async-iteration |
| 4 | cross-realm |
| 4 | source-phase-imports |
| 4 | source-phase-imports-module-source |
| 2 | Array.prototype.includes |
| 2 | class |
| 2 | export-star-as-namespace-from-module |
| 2 | generators |
| 2 | import-defer |
| 2 | Intl-enumeration |
| 2 | Intl.Era-monthcode |
| 2 | ShadowRealm |
| 2 | Symbol.asyncIterator |
| 2 | Symbol.species |
| 2 | top-level-await |
| 1 | Symbol |
