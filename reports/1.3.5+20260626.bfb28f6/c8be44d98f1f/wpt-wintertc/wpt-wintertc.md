# wpt-wintertc — `1.3.5+20260626.bfb28f6`

- Image digest: `c8be44d98f1f086fee340d19c5e6d66e4c88f5d593213d47783361b87bcaf657`
- Suite version: `1eb456f600fedad07c8cd6439796fb81db54faff`
- Ran: 2026-06-27T19:15:25.505Z → 2026-06-27T19:15:25.591Z

## Summary

![Pass-rate chart](./pass-rate.svg)

**Pass rate: 53/64 (82.81%)**

| pass | fail | error | skip | regressions | new passes |
|---:|---:|---:|---:|---:|---:|
| 53 | 10 | 1 | 0 | 0 | 0 |

## Observed cases (64)

- `encoding/textencoder-constructor-non-utf.any.js :: <file>` — error — ╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: encodings_table is not defined                               │
│                                                                             │
│ In file file:/tmp/wpt-elide-pmKzLm/case                                     │
│   ╭─                                                                        │
│   (source excerpt suppressed)                                               │
│─ Stack Trace ───────────────────────────────────────────────────────────────│
│                                                                             │
│ ╭─ [js] :module:eval                      case.js:5242:1-15                 │
│ │                                                                           │
│ · elide run /tmp/wpt-elide-pmKzLm/case.js                                   │
│                                                                             │
│─ Advice ────────────────────────────────────────────────────────────────────│
│                                                                             │
│ An error occurred while executing your code.                                │
│                                                                             │
╰─────────────────────────────────────────────────────────────────────────────╯

- `encoding/textdecoder-fatal.any.js :: Fatal flag: utf-8 - invalid code` — pass
- `encoding/textdecoder-fatal.any.js :: Fatal flag: utf-8 - ends early` — pass
- `encoding/textdecoder-fatal.any.js :: Fatal flag: utf-8 - ends early 2` — pass
- `encoding/textdecoder-fatal.any.js :: Fatal flag: utf-8 - invalid trail` — pass
- `encoding/textdecoder-fatal.any.js :: Fatal flag: utf-8 - invalid trail 2` — pass
- `encoding/textdecoder-fatal.any.js :: Fatal flag: utf-8 - invalid trail 3` — pass
- `encoding/textdecoder-fatal.any.js :: Fatal flag: utf-8 - invalid trail 4` — pass
- `encoding/textdecoder-fatal.any.js :: Fatal flag: utf-8 - invalid trail 5` — pass
- `encoding/textdecoder-fatal.any.js :: Fatal flag: utf-8 - invalid trail 6` — pass
- `encoding/textdecoder-fatal.any.js :: Fatal flag: utf-8 - > 0x10FFFF` — pass
- `encoding/textdecoder-fatal.any.js :: Fatal flag: utf-8 - obsolete lead byte` — pass
- `encoding/textdecoder-fatal.any.js :: Fatal flag: utf-8 - overlong U+0000 - 2 bytes` — pass
- `encoding/textdecoder-fatal.any.js :: Fatal flag: utf-8 - overlong U+0000 - 3 bytes` — pass
- `encoding/textdecoder-fatal.any.js :: Fatal flag: utf-8 - overlong U+0000 - 4 bytes` — pass
- `encoding/textdecoder-fatal.any.js :: Fatal flag: utf-8 - overlong U+0000 - 5 bytes` — pass
- `encoding/textdecoder-fatal.any.js :: Fatal flag: utf-8 - overlong U+0000 - 6 bytes` — pass
- `encoding/textdecoder-fatal.any.js :: Fatal flag: utf-8 - overlong U+007F - 2 bytes` — pass
- `encoding/textdecoder-fatal.any.js :: Fatal flag: utf-8 - overlong U+007F - 3 bytes` — pass
- `encoding/textdecoder-fatal.any.js :: Fatal flag: utf-8 - overlong U+007F - 4 bytes` — pass
- `encoding/textdecoder-fatal.any.js :: Fatal flag: utf-8 - overlong U+007F - 5 bytes` — pass
- `encoding/textdecoder-fatal.any.js :: Fatal flag: utf-8 - overlong U+007F - 6 bytes` — pass
- `encoding/textdecoder-fatal.any.js :: Fatal flag: utf-8 - overlong U+07FF - 3 bytes` — pass
- `encoding/textdecoder-fatal.any.js :: Fatal flag: utf-8 - overlong U+07FF - 4 bytes` — pass
- `encoding/textdecoder-fatal.any.js :: Fatal flag: utf-8 - overlong U+07FF - 5 bytes` — pass
- `encoding/textdecoder-fatal.any.js :: Fatal flag: utf-8 - overlong U+07FF - 6 bytes` — pass
- `encoding/textdecoder-fatal.any.js :: Fatal flag: utf-8 - overlong U+FFFF - 4 bytes` — pass
- `encoding/textdecoder-fatal.any.js :: Fatal flag: utf-8 - overlong U+FFFF - 5 bytes` — pass
- `encoding/textdecoder-fatal.any.js :: Fatal flag: utf-8 - overlong U+FFFF - 6 bytes` — pass
- `encoding/textdecoder-fatal.any.js :: Fatal flag: utf-8 - overlong U+10FFFF - 5 bytes` — pass
- `encoding/textdecoder-fatal.any.js :: Fatal flag: utf-8 - overlong U+10FFFF - 6 bytes` — pass
- `encoding/textdecoder-fatal.any.js :: Fatal flag: utf-8 - lead surrogate` — pass
- `encoding/textdecoder-fatal.any.js :: Fatal flag: utf-8 - trail surrogate` — pass
- `encoding/textdecoder-fatal.any.js :: Fatal flag: utf-8 - surrogate pair` — pass
- `encoding/textdecoder-fatal.any.js :: Fatal flag: utf-16le - truncated code unit` — pass
- `encoding/textdecoder-fatal.any.js :: The fatal attribute of TextDecoder` — pass
- `encoding/textdecoder-fatal.any.js :: Error seen with fatal does not prevent future decodes` — pass
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
