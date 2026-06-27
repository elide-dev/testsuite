# Impact-ordered failures

## By root-cause signature

### 4 × `assert_equals: expected (string) <str> but got (object) null`

distinct messages:
- `assert_equals: expected (string) "b" but got (object) null`
- `assert_equals: expected (string) "b\0c" but got (object) null`
example test: `url/urlsearchparams-constructor.any.js :: URLSearchParams constructor, object.`

### 3 × `assert_array_equals: expected property <n> to be <str> but got <str> (expected array [<str>, <str>] got [<str>, <str>])`

distinct messages:
- `assert_array_equals: expected property 0 to be "\ufffdx" but got "?x" (expected array ["\ufffdx", "3"] got ["?x", "1"])`
- `assert_array_equals: expected property 0 to be "x\ufffd" but got "x?" (expected array ["x\ufffd", "3"] got ["x?", "1"])`
- `assert_array_equals: expected property 0 to be "a\0b" but got "a" (expected array ["a\0b", "42"] got ["a", "42"])`
example test: `url/urlsearchparams-constructor.any.js :: Construct with 2 unpaired surrogates (no trailing)`

### 2 × `assert_equals: expected <str> but got <str>`

distinct messages:
- `assert_equals: expected "a=b" but got ""`
- `assert_equals: expected "b\0c" but got "b"`
example test: `url/urlsearchparams-constructor.any.js :: Basic URLSearchParams construction`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │ReferenceError: encodings_table is not defined │ │ │ │ In file file:/tmp/wpt-el`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: encodings_table is not defined                               │
│                                                                             │
│ In file file:/tmp/wpt-elide-pmKzLm/case                   `
example test: `encoding/textencoder-constructor-non-utf.any.js :: <file>`

### 1 × `assert_throws_js: Constructing a URLSearchParams from DOMException.prototype should throw due to branding checks function <str> did not throw`

distinct messages:
- `assert_throws_js: Constructing a URLSearchParams from DOMException.prototype should throw due to branding checks function "() => new URLSearchParams(DOMException.prototype)" did not throw`
example test: `url/urlsearchparams-constructor.any.js :: URLSearchParams constructor, DOMException as argument`
