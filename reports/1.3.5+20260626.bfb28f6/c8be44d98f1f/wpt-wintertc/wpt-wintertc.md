# wpt-wintertc — `1.3.5+20260626.bfb28f6`

- Image digest: `c8be44d98f1f086fee340d19c5e6d66e4c88f5d593213d47783361b87bcaf657`
- Suite version: `1eb456f600fedad07c8cd6439796fb81db54faff`
- Ran: 2026-06-27T15:34:41.304Z → 2026-06-27T15:34:41.384Z

## Summary

**Pass rate: 17/27 (62.96%)**

| pass | fail | error | skip | regressions | new passes |
|---:|---:|---:|---:|---:|---:|
| 17 | 10 | 0 | 0 | 10 | 0 |

## Observed cases (27)

- `url/urlsearchparams-constructor.any.js :: Basic URLSearchParams construction` — fail — assert_equals: expected "a=b" but got ""
- `url/urlsearchparams-constructor.any.js :: URLSearchParams constructor, no arguments` — pass
- `url/urlsearchparams-constructor.any.js :: URLSearchParams constructor, remove leading "?"` — pass
- `url/urlsearchparams-constructor.any.js :: URLSearchParams constructor, DOMException as argument` — fail — assert_throws_js: Constructing a URLSearchParams from DOMException.prototype should throw due to branding checks function "() => new URLSearchParams(DOMException.prototype)" did not throw
- `url/urlsearchparams-constructor.any.js :: URLSearchParams constructor, empty string as argument` — pass
- `url/urlsearchparams-constructor.any.js :: URLSearchParams constructor, {} as argument` — pass
- `url/urlsearchparams-constructor.any.js :: URLSearchParams constructor, string.` — pass
- `url/urlsearchparams-constructor.any.js :: URLSearchParams constructor, object.` — fail — assert_equals: expected (string) "b" but got (object) null
- `url/urlsearchparams-constructor.any.js :: URLSearchParams constructor, FormData.` — fail — assert_equals: expected (string) "b" but got (object) null
- `url/urlsearchparams-constructor.any.js :: Parse +` — pass
- `url/urlsearchparams-constructor.any.js :: Parse encoded +` — pass
- `url/urlsearchparams-constructor.any.js :: Parse space` — pass
- `url/urlsearchparams-constructor.any.js :: Parse %20` — pass
- `url/urlsearchparams-constructor.any.js :: Parse \0` — fail — assert_equals: expected "b\0c" but got "b"
- `url/urlsearchparams-constructor.any.js :: Parse %00` — fail — assert_equals: expected (string) "b\0c" but got (object) null
- `url/urlsearchparams-constructor.any.js :: Parse ⎄` — pass
- `url/urlsearchparams-constructor.any.js :: Parse %e2%8e%84` — pass
- `url/urlsearchparams-constructor.any.js :: Parse 💩` — pass
- `url/urlsearchparams-constructor.any.js :: Parse %f0%9f%92%a9` — pass
- `url/urlsearchparams-constructor.any.js :: Constructor with sequence of sequences of strings` — pass
- `url/urlsearchparams-constructor.any.js :: Construct with object with +` — pass
- `url/urlsearchparams-constructor.any.js :: Construct with object with two keys` — pass
- `url/urlsearchparams-constructor.any.js :: Construct with array with two keys` — pass
- `url/urlsearchparams-constructor.any.js :: Construct with 2 unpaired surrogates (no trailing)` — fail — assert_array_equals: expected property 0 to be "\ufffdx" but got "?x" (expected array ["\ufffdx", "3"] got ["?x", "1"])
- `url/urlsearchparams-constructor.any.js :: Construct with 3 unpaired surrogates (no leading)` — fail — assert_array_equals: expected property 0 to be "x\ufffd" but got "x?" (expected array ["x\ufffd", "3"] got ["x?", "1"])
- `url/urlsearchparams-constructor.any.js :: Construct with object with NULL, non-ASCII, and surrogate keys` — fail — assert_array_equals: expected property 0 to be "a\0b" but got "a" (expected array ["a\0b", "42"] got ["a", "42"])
- `url/urlsearchparams-constructor.any.js :: Custom [Symbol.iterator]` — fail — assert_equals: expected (string) "b" but got (object) null

## ❌ Regressions (10)

- `url/urlsearchparams-constructor.any.js :: Basic URLSearchParams construction` — assert_equals: expected "a=b" but got ""
- `url/urlsearchparams-constructor.any.js :: URLSearchParams constructor, DOMException as argument` — assert_throws_js: Constructing a URLSearchParams from DOMException.prototype should throw due to branding checks function "() => new URLSearchParams(DOMException.prototype)" did not throw
- `url/urlsearchparams-constructor.any.js :: URLSearchParams constructor, object.` — assert_equals: expected (string) "b" but got (object) null
- `url/urlsearchparams-constructor.any.js :: URLSearchParams constructor, FormData.` — assert_equals: expected (string) "b" but got (object) null
- `url/urlsearchparams-constructor.any.js :: Parse \0` — assert_equals: expected "b\0c" but got "b"
- `url/urlsearchparams-constructor.any.js :: Parse %00` — assert_equals: expected (string) "b\0c" but got (object) null
- `url/urlsearchparams-constructor.any.js :: Construct with 2 unpaired surrogates (no trailing)` — assert_array_equals: expected property 0 to be "\ufffdx" but got "?x" (expected array ["\ufffdx", "3"] got ["?x", "1"])
- `url/urlsearchparams-constructor.any.js :: Construct with 3 unpaired surrogates (no leading)` — assert_array_equals: expected property 0 to be "x\ufffd" but got "x?" (expected array ["x\ufffd", "3"] got ["x?", "1"])
- `url/urlsearchparams-constructor.any.js :: Construct with object with NULL, non-ASCII, and surrogate keys` — assert_array_equals: expected property 0 to be "a\0b" but got "a" (expected array ["a\0b", "42"] got ["a", "42"])
- `url/urlsearchparams-constructor.any.js :: Custom [Symbol.iterator]` — assert_equals: expected (string) "b" but got (object) null
