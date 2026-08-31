# Impact-ordered failures

## By root-cause signature

### 23 × `Expected SameValue(«<str>», «<str>») to be true`

distinct messages:
- `Expected SameValue(«"function arguments() {}"», «"[object Arguments]"») to be true`
- `Expected SameValue(«"h12"», «"h11"») to be true`
- `Expected SameValue(«"988M"», «"9.9億"») to be true`
- `Expected SameValue(«"988M"», «"9.9억"») to be true`
- `Expected SameValue(«"($987.00)"», «"(US$987.00)"») to be true`
example test: `test/annexB/language/function-code/block-decl-func-skip-arguments.js default`

### 6 × `formatToParts(<n>, second): length Expected SameValue(«<n>», «<n>») to be true`

distinct messages:
- `formatToParts(1000, second): length Expected SameValue(«5», «3») to be true`
example test: `test/intl402/RelativeTimeFormat/prototype/formatToParts/pl-pl-style-long.js default`

### 4 × `Compact short: <n>: length Expected SameValue(«<n>», «<n>») to be true`

distinct messages:
- `Compact short: 987654321: length Expected SameValue(«2», «4») to be true`
example test: `test/intl402/NumberFormat/prototype/formatToParts/notation-compact-ja-JP.js default`

### 4 × `Expected a TypeError to be thrown but no exception was thrown at all (Testing with BigInt64Array and makeImmutableArrayBuffer.)`

distinct messages:
- `Expected a TypeError to be thrown but no exception was thrown at all (Testing with BigInt64Array and makeImmutableArrayBuffer.)`
example test: `test/built-ins/TypedArrayConstructors/internals/Set/BigInt/null-tobigint.js default`

### 4 × `Expected no error, got TypeError: Module not found: <str>`

distinct messages:
- `Expected no error, got TypeError: Module not found: '<module source>'`
example test: `test/language/module-code/source-phase-import/reexport-source-binding-named-import.js strict mode`

### 4 × `java.lang.IllegalArgumentException: No rule set named %spellout-cardinal-financial at :program (<loc>)`

distinct messages:
- `java.lang.IllegalArgumentException: No rule set named %spellout-cardinal-financial
    at :program (f-1788219519900-19-9ttnjq.xm1ed.js:3030:13)`
- `java.lang.IllegalArgumentException: No rule set named %spellout-cardinal-financial
    at :program (f-1788219519897-19-191w71m.2rfsk.js:3029:13)`
- `java.lang.IllegalArgumentException: No rule set named %spellout-cardinal-financial
    at :program (f-1788219519880-19-1jd202c.senx.js:3029:13)`
- `java.lang.IllegalArgumentException: No rule set named %spellout-cardinal-financial
    at :program (f-1788219519884-19-9otbik.q4qeb.js:3030:13)`
example test: `test/intl402/Intl/supportedValuesOf/numberingSystems-accepted-by-RelativeTimeFormat.js strict mode`

### 4 × `negative: parts[<n>].value Expected SameValue(«<str>», «<str>») to be true`

distinct messages:
- `negative: parts[1].value Expected SameValue(«"$"», «"US$"») to be true`
example test: `test/intl402/NumberFormat/prototype/formatToParts/signDisplay-currency-ko-KR.js default`

### 4 × `undefined: length Expected SameValue(«<n>», «<n>») to be true`

distinct messages:
- `undefined: length Expected SameValue(«4», «6») to be true`
- `undefined: length Expected SameValue(«4», «3») to be true`
example test: `test/intl402/NumberFormat/prototype/formatToParts/unit-ja-JP.js default`

### 2 × `All globalThis properties must be configurable Expected SameValue(«<str>», «<str>») to be true`

distinct messages:
- `All globalThis properties must be configurable Expected SameValue(«"__dirname, __filename, module, exports"», «""») to be true`
example test: `test/built-ins/ShadowRealm/prototype/evaluate/globalthis-config-only-properties.js strict mode`

### 2 × `en-US-u-nu-hanidec: display all time units in <n>-digit Expected SameValue(«false», «true») to be true`

distinct messages:
- `en-US-u-nu-hanidec: display all time units in 2-digit Expected SameValue(«false», «true») to be true`
example test: `test/intl402/DateTimeFormat/prototype/format/numbering-system.js default`

### 2 × `Expected no error, got ReferenceError: assert is not defined`

distinct messages:
- `Expected no error, got ReferenceError: assert is not defined`
example test: `test/language/module-code/ambiguous-export-bindings/namespace-unambiguous-if-export-star-as-from-and-import-star-as-and-export.js default`

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

### 2 × `islamic-civil eras (Anno Hegirae,Anno Hegirae) should be unique Expected SameValue(«<n>», «<n>») to be true`

distinct messages:
- `islamic-civil eras (Anno Hegirae,Anno Hegirae) should be unique Expected SameValue(«1», «2») to be true`
example test: `test/intl402/DateTimeFormat/prototype/formatToParts/era.js strict mode`

### 2 × `java.lang.IllegalStateException: Recursive update at :anonymous (native) at :program (<loc>)`

distinct messages:
- `java.lang.IllegalStateException: Recursive update
    at :anonymous (native)
    at :program (eval-self-once-script.js:282:3)`
- `java.lang.IllegalStateException: Recursive update
    at :anonymous (native)
    at :program (eval-self-once-script.js:281:3)`
example test: `test/language/expressions/dynamic-import/eval-self-once-script.js strict mode`

### 2 × `java.util.MissingResourceException: Can't find resource for bundle /org/graalvm/shadowed/com/ibm/icu/impl/data/icudata/brkitr/en_US.res, key extensions at :anon`

distinct messages:
- `java.util.MissingResourceException: Can't find resource for bundle /org/graalvm/shadowed/com/ibm/icu/impl/data/icudata/brkitr/en_US.res, key extensions
    at :anonymous (f-1788219931338-19-1q42lw1.cpdkk.js:265:20)
    at :program (f-1788219931338-19-1q42lw1.cpdkk.js:262:1)`
- `java.util.MissingResourceException: Can't find resource for bundle /org/graalvm/shadowed/com/ibm/icu/impl/data/icudata/brkitr/en_US.res, key extensions
    at :anonymous (f-1788219931336-19-u5zhbm.jx5sb.js:264:20)
    at :program (f-1788219931336-19-u5zhbm.jx5sb.js:261:1)`
example test: `test/intl402/Segmenter/prototype/segment/containing/word-iswordlike.js strict mode`

### 2 × `java.util.MissingResourceException: Can't find resource for bundle /org/graalvm/shadowed/com/ibm/icu/impl/data/icudata/brkitr/en_US.res, key extensions at :prog`

distinct messages:
- `java.util.MissingResourceException: Can't find resource for bundle /org/graalvm/shadowed/com/ibm/icu/impl/data/icudata/brkitr/en_US.res, key extensions
    at :program (f-1788219763321-19-13kgc7t.e9j1.js:255:3)`
- `java.util.MissingResourceException: Can't find resource for bundle /org/graalvm/shadowed/com/ibm/icu/impl/data/icudata/brkitr/en_US.res, key extensions
    at :program (f-1788219763323-19-11by3wk.ez3y.js:256:3)`
example test: `test/intl402/Segmenter/prototype/segment/segment-word-iterable.js default`

### 2 × `max date should include day <n> in Arabic-Indic digits, got: <n>-<n>-<n>`

distinct messages:
- `max date should include day 13 in Arabic-Indic digits, got: 275760-09-13`
example test: `test/intl402/DateTimeFormat/prototype/format/temporal-objects-no-time-clip-non-latin-numerals.js default`

### 2 × `name descriptor value should be [Symbol.asyncIterator]; name value should be [Symbol.asyncIterator]`

distinct messages:
- `name descriptor value should be [Symbol.asyncIterator]; name value should be [Symbol.asyncIterator]`
example test: `test/built-ins/AsyncIteratorPrototype/Symbol.asyncIterator/name.js strict mode`

### 2 × `non-continental timezone Etc/GMT+<n> is not supported`

distinct messages:
- `non-continental timezone Etc/GMT+1 is not supported`
example test: `test/intl402/Intl/supportedValuesOf/timeZones-include-non-continental.js default`

### 2 × `Test timed out`

distinct messages:
- `Test timed out`
example test: `test/built-ins/Object/defineProperty/15.2.3.6-4-116.js default`

### 2 × `Test262Error: delete: default`

distinct messages:
- `Test262Error: delete: default`
example test: `test/language/expressions/dynamic-import/namespace/await-ns-delete-non-exported-no-strict.js default`

### 2 × `Test262Error: Expected SameValue(«true», «false») to be true`

distinct messages:
- `Test262Error: Expected SameValue(«true», «false») to be true`
example test: `test/language/expressions/dynamic-import/namespace/default-property-not-set-own.js strict mode`

### 2 × `Test262Error: f Expected SameValue(«null», «<str>») to be true`

distinct messages:
- `Test262Error: f Expected SameValue(«null», «"foo"») to be true`
example test: `test/language/expressions/dynamic-import/for-await-resolution-and-error-agen-yield.js default`

### 2 × `Test262Error: The import should reject (second import) Expected a Error to be thrown asynchronously but no exception was thrown at all`

distinct messages:
- `Test262Error: The import should reject (second import) Expected a Error to be thrown asynchronously but no exception was thrown at all`
example test: `test/language/expressions/dynamic-import/import-errored-module.js default`

### 2 × `Thai default ignorePunctuation to true Expected SameValue(«false», «true») to be true`

distinct messages:
- `Thai default ignorePunctuation to true Expected SameValue(«false», «true») to be true`
example test: `test/intl402/Collator/prototype/resolvedOptions/ignorePunctuation-default.js default`

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

## By feature

| count | feature |
|---:|---|
| 20 | Intl.NumberFormat-unified |
| 17 | TypedArray |
| 15 | align-detached-buffer-semantics-with-web-reality |
| 14 | Intl.RelativeTimeFormat |
| 12 | dynamic-import |
| 11 | BigInt |
| 6 | Array.prototype.includes |
| 6 | Intl-enumeration |
| 6 | Intl.NumberFormat-v3 |
| 4 | async-iteration |
| 4 | Intl.Segmenter |
| 4 | source-phase-imports |
| 4 | source-phase-imports-module-source |
| 2 | Intl.Era-monthcode |
| 2 | ShadowRealm |
| 2 | Symbol.asyncIterator |
| 2 | Symbol.species |
| 2 | Temporal |
| 1 | Symbol |
