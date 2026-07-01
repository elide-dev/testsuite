# Impact-ordered failures

## By root-cause signature

### 356 × `promise_test: Unhandled rejection with value: object <str>`

distinct messages:
- `promise_test: Unhandled rejection with value: object "ReferenceError: readableStreamFromArray is not defined"`
- `promise_test: Unhandled rejection with value: object "ReferenceError: TextDecoderStream is not defined"`
- `promise_test: Unhandled rejection with value: object "TypeError: (intermediate value)[streamClass.name] is not a constructor"`
- `promise_test: Unhandled rejection with value: object "ReferenceError: document is not defined"`
- `promise_test: Unhandled rejection with value: object "ReferenceError: caches is not defined"`
example test: `encoding/streams/decode-incomplete-input.any.js :: incomplete input with error mode "replacement" should end with a replacement character`

### 171 × `document is not defined`

distinct messages:
- `document is not defined`
example test: `encoding/unsupported-labels.window.js :: 437 is not supported by the Encoding Standard`

### 142 × `createBuffer is not defined`

distinct messages:
- `createBuffer is not defined`
example test: `encoding/encodeInto.any.js :: encodeInto() into ArrayBuffer with Hi and destination length 0, offset 0, filler 0`

### 138 × `Request constructor: failed to parse URL <str>`

distinct messages:
- `Request constructor: failed to parse URL ''`
- `Request constructor: failed to parse URL '/'`
- `Request constructor: failed to parse URL '...'`
- `Request constructor: failed to parse URL './'`
example test: `fetch/api/request/request-init-002.any.js :: Initialize Request with headers values`

### 84 × `assert_equals: expected <n> but got <n>`

distinct messages:
- `assert_equals: expected 7743 but got 59335`
- `assert_equals: expected 505 but got 59336`
- `assert_equals: expected 12350 but got 59367`
- `assert_equals: expected 12272 but got 59368`
- `assert_equals: expected 12273 but got 59369`
example test: `encoding/legacy-mb-schinese/gbk/gbk-decoder.any.js :: gbk pointer: 7533`

### 83 × `location is not defined`

distinct messages:
- `location is not defined`
example test: `fetch/api/request/request-bad-port.any.js :: Request on bad port 0 should throw TypeError.`

### 80 × `assert_equals: property expected <str> but got <str>`

distinct messages:
- `assert_equals: property expected "https:" but got "http:"`
- `assert_equals: property expected "%00test" but got ""`
- `assert_equals: property expected "te%00st" but got "te"`
- `assert_equals: property expected "test%00" but got "test"`
- `assert_equals: property expected "host:8000" but got "te:8000"`
example test: `url/url-setters-stripping.any.js :: Setting protocol with U+0000 before inserted colon (https:)`

### 61 × `assert_equals: expected <str> but got <str>`

distinct messages:
- `assert_equals: expected "\ufffd$" but got "\ufffd"`
- `assert_equals: expected "\ufffd$P" but got "\ufffd"`
- `assert_equals: expected "\ufffdP" but got "P"`
- `assert_equals: expected "\r\ufffd\ufffd\x10" but got "\r\x10"`
- `assert_equals: expected "\ufffdﾐ" but got "\ufffd(IP"`
example test: `encoding/iso-2022-jp-decoder.any.js :: iso-2022-jp decoder: Error ESC`

### 58 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │ReferenceError: get_host_info is not defined │ │ │ │ In file <loc>: │ │ (source`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: get_host_info is not defined                                 │
│                                                                             │
│ In file ../tmp/wpt-elide-qS41CO/case.js:5262:18:          `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: get_host_info is not defined                                 │
│                                                                             │
│ In file ../tmp/wpt-elide-szOFXj/case.js:5252:5:           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: get_host_info is not defined                                 │
│                                                                             │
│ In file ../tmp/wpt-elide-lxCpVJ/case.js:5254:17:          `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: get_host_info is not defined                                 │
│                                                                             │
│ In file ../tmp/wpt-elide-MBzSLu/case.js:5243:19:          `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: get_host_info is not defined                                 │
│                                                                             │
│ In file ../tmp/wpt-elide-w39PSR/case.js:5284:13:          `
example test: `fetch/api/abort/general.any.js :: <file>`

### 25 × `TextDecoderStream is not defined`

distinct messages:
- `TextDecoderStream is not defined`
example test: `encoding/streams/decode-attributes.any.js :: encoding attribute should have correct value for 'unicode-1-1-utf-8'`

### 24 × `Invalid URL port`

distinct messages:
- `Invalid URL port`
example test: `url/url-setters-stripping.any.js :: Setting port with leading U+0009 (https:)`

### 17 × `(intermediate value).createObjectURL is not a function`

distinct messages:
- `(intermediate value).createObjectURL is not a function`
example test: `fetch/range/blob.any.js :: Blob range with no value`

### 14 × `assert_not_equals: Buffer of cloned response stream is a clone of the original buffer got disallowed value object <str>`

distinct messages:
- `assert_not_equals: Buffer of cloned response stream is a clone of the original buffer got disallowed value object "0,0,0,0,0,0,0,0,0,0,0,0,0,0,0"`
- `assert_not_equals: Buffer of cloned response stream is a clone of the original buffer got disallowed value object "0,0"`
- `assert_not_equals: Buffer of cloned response stream is a clone of the original buffer got disallowed value object "0,0,0,0"`
- `assert_not_equals: Buffer of cloned response stream is a clone of the original buffer got disallowed value object "[object ArrayBuffer]"`
- `assert_not_equals: Buffer of cloned response stream is a clone of the original buffer got disallowed value object "0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0"`
example test: `fetch/api/response/response-clone.any.js :: Check response clone use structureClone for teed ReadableStreams (Int8Arraychunk)`

### 13 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │ReferenceError: run_tests is not defined │ │ │ │ In file <loc>: │ │ (source exc`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: run_tests is not defined                                     │
│                                                                             │
│ In file ../tmp/wpt-elide-Vg6mLT/case.js:5277:1:           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: run_tests is not defined                                     │
│                                                                             │
│ In file ../tmp/wpt-elide-B8OB0D/case.js:5305:1:           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: run_tests is not defined                                     │
│                                                                             │
│ In file ../tmp/wpt-elide-KqhJhO/case.js:5289:1:           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: run_tests is not defined                                     │
│                                                                             │
│ In file ../tmp/wpt-elide-De0UkT/case.js:5304:1:           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: run_tests is not defined                                     │
│                                                                             │
│ In file ../tmp/wpt-elide-b33pAm/case.js:5275:1:           `
example test: `fetch/api/request/request-cache-default.any.js :: <file>`

### 13 × `validateStreamFromString is not defined`

distinct messages:
- `validateStreamFromString is not defined`
example test: `fetch/api/response/response-clone.any.js :: Check original response's body after cloning`

### 12 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │ReferenceError: RESOURCES_DIR is not defined │ │ │ │ In file <loc>: │ │ (source`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: RESOURCES_DIR is not defined                                 │
│                                                                             │
│ In file ../tmp/wpt-elide-oTkHxT/case.js:5253:18:          `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: RESOURCES_DIR is not defined                                 │
│                                                                             │
│ In file ../tmp/wpt-elide-vrUmpO/case.js:5261:13:          `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: RESOURCES_DIR is not defined                                 │
│                                                                             │
│ In file ../tmp/wpt-elide-9Z82uM/case.js:5271:13:          `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: RESOURCES_DIR is not defined                                 │
│                                                                             │
│ In file ../tmp/wpt-elide-QyOu0i/case.js:5281:11:          `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: RESOURCES_DIR is not defined                                 │
│                                                                             │
│ In file ../tmp/wpt-elide-XekZy8/case.js:5275:13:          `
example test: `fetch/api/basic/referrer.any.js :: <file>`

### 11 × `assert_throws_js: function <str> threw object <str> (<str>) expected instance of function <str> (<str>)`

distinct messages:
- `assert_throws_js: function "() => fetchLater()" threw object "ReferenceError: fetchLater is not defined" ("ReferenceError") expected instance of function "function TypeError() { [native code] }" ("TypeError")`
- `assert_throws_js: function "() => fetchLater('http://example.com')" threw object "ReferenceError: fetchLater is not defined" ("ReferenceError") expected instance of function "function TypeError() { [native code] }" ("TypeError")`
- `assert_throws_js: function "() => fetchLater('file://tmp')" threw object "ReferenceError: fetchLater is not defined" ("ReferenceError") expected instance of function "function TypeError() { [native code] }" ("TypeError")`
- `assert_throws_js: function "() => fetchLater('ftp://example.com')" threw object "ReferenceError: fetchLater is not defined" ("ReferenceError") expected instance of function "function TypeError() { [native code] }" ("TypeError")`
- `assert_throws_js: function "() => fetchLater('ssh://example.com')" threw object "ReferenceError: fetchLater is not defined" ("ReferenceError") expected instance of function "function TypeError() { [native code] }" ("TypeError")`
example test: `fetch/fetch-later/basic.https.window.js :: fetchLater() cannot be called without request.`

### 11 × `fetchLater is not defined`

distinct messages:
- `fetchLater is not defined`
example test: `fetch/fetch-later/basic.https.window.js :: fetchLater() with same-origin (https) URL does not throw.`

### 11 × `validate_expectations_custom_url is not defined`

distinct messages:
- `validate_expectations_custom_url is not defined`
example test: `fetch/metadata/fetch-preflight.https.sub.any.js :: Same-site fetch with preflight`

### 10 × `assert_equals: <n> -> <n> expected <str> but got <str>`

distinct messages:
- `assert_equals: 174 -> 1118 expected "ў" but got "╝"`
- `assert_equals: 129 -> 129 expected "" but got "\ufffd"`
- `assert_equals: 152 -> 152 expected "" but got "\ufffd"`
example test: `encoding/textdecoder-mistakes.any.js :: selected single-byte: koi8-u`

### 9 × `RESOURCES_DIR is not defined`

distinct messages:
- `RESOURCES_DIR is not defined`
example test: `fetch/api/basic/accept-header.any.js :: Request through fetch should have 'accept' header with value '*/*'`

### 7 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │ReferenceError: dirname is not defined │ │ │ │ In file <loc>: │ │ (source excer`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: dirname is not defined                                       │
│                                                                             │
│ In file ../tmp/wpt-elide-MVEsQh/case.js:5275:14:          `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: dirname is not defined                                       │
│                                                                             │
│ In file ../tmp/wpt-elide-PTdOMa/case.js:5241:52:          `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: dirname is not defined                                       │
│                                                                             │
│ In file ../tmp/wpt-elide-kysWaJ/case.js:5244:52:          `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: dirname is not defined                                       │
│                                                                             │
│ In file ../tmp/wpt-elide-wi9tHN/case.js:5280:50:          `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: dirname is not defined                                       │
│                                                                             │
│ In file ../tmp/wpt-elide-azlr8x/case.js:5263:17:          `
example test: `fetch/api/basic/integrity.sub.any.js :: <file>`

### 6 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │ReferenceError: parallelPromiseTest is not defined │ │ │ │ In file <loc>: │ │ (`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: parallelPromiseTest is not defined                           │
│                                                                             │
│ In file ../tmp/wpt-elide-bzszEX/case.js:5248:1:           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: parallelPromiseTest is not defined                           │
│                                                                             │
│ In file ../tmp/wpt-elide-kLsl0c/case.js:5256:1:           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: parallelPromiseTest is not defined                           │
│                                                                             │
│ In file ../tmp/wpt-elide-UccOX0/case.js:5244:1:           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: parallelPromiseTest is not defined                           │
│                                                                             │
│ In file ../tmp/wpt-elide-QkaVbN/case.js:5253:1:           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: parallelPromiseTest is not defined                           │
│                                                                             │
│ In file ../tmp/wpt-elide-dawVIG/case.js:5245:1:           `
example test: `fetch/fetch-later/activate-after.https.window.js :: <file>`

### 6 × `assert_throws_js: function <str> did not throw`

distinct messages:
- `assert_throws_js: function "() => fatal.decode(u(...a, ...a))" did not throw`
- `assert_throws_js: function "() => new TextDecoder(label)" did not throw`
- `assert_throws_js: function "function() { var h = new Headers(proxy); }" did not throw`
- `assert_throws_js: function "() => new Response(stream)" did not throw`
example test: `encoding/textdecoder-mistakes.any.js :: Concatenating two ISO-2022-JP outputs is not always valid`

### 5 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │ReferenceError: encodings_table is not defined │ │ │ │ In file <loc>: │ │ (sour`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: encodings_table is not defined                               │
│                                                                             │
│ In file ../tmp/wpt-elide-2weIum/case.js:5244:1:           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: encodings_table is not defined                               │
│                                                                             │
│ In file ../tmp/wpt-elide-AhzqvU/case.js:5245:27:          `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: encodings_table is not defined                               │
│                                                                             │
│ In file ../tmp/wpt-elide-zxO4t0/case.js:5242:1:           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: encodings_table is not defined                               │
│                                                                             │
│ In file ../tmp/wpt-elide-WBqf1v/case.js:5244:1:           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: encodings_table is not defined                               │
│                                                                             │
│ In file ../tmp/wpt-elide-GY7jsE/case.js:5242:1:           `
example test: `encoding/replacement-encodings.any.js :: <file>`

### 5 × `assert_array_equals: expected property <n> to be <str> but got <str> (expected array [<str>, <str>] got [<str>, <str>])`

distinct messages:
- `assert_array_equals: expected property 0 to be "﻿test" but got "test" (expected array ["﻿test", "﻿"] got ["test", "﻿"])`
- `assert_array_equals: expected property 0 to be "\ufffdx" but got "?x" (expected array ["\ufffdx", "3"] got ["?x", "1"])`
- `assert_array_equals: expected property 0 to be "x\ufffd" but got "x?" (expected array ["x\ufffd", "3"] got ["x?", "1"])`
- `assert_array_equals: expected property 0 to be "a\0b" but got "a" (expected array ["a\0b", "42"] got ["a", "42"])`
example test: `url/urlencoded-parser.any.js :: request.formData() with input: ﻿test=﻿`

### 5 × `assert_equals: expected (string) <str> but got (object) null`

distinct messages:
- `assert_equals: expected (string) "test" but got (object) null`
- `assert_equals: expected (string) "b" but got (object) null`
- `assert_equals: expected (string) "b\0c" but got (object) null`
example test: `fetch/api/headers/headers-basic.any.js :: Create headers with existing headers with custom iterator`

### 4 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │ReferenceError: http_content is not defined │ │ │ │ In file <loc>: │ │ (source `

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: http_content is not defined                                  │
│                                                                             │
│ In file ../tmp/wpt-elide-0rPgIE/case.js:5400:20:          `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: http_content is not defined                                  │
│                                                                             │
│ In file ../tmp/wpt-elide-EfRogL/case.js:5319:24:          `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: http_content is not defined                                  │
│                                                                             │
│ In file ../tmp/wpt-elide-QQy1e3/case.js:5308:12:          `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: http_content is not defined                                  │
│                                                                             │
│ In file ../tmp/wpt-elide-67kX20/case.js:5252:12:          `
example test: `fetch/http-cache/cc-request.any.js :: <file>`

### 4 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: Cannot read property <str> of undefined │ │ │ │ In file <loc>: │ │ (`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot read property 'href' of undefined                          │
│                                                                             │
│ In file ../tmp/wpt-elide-lll626/case.js:5259:30:          `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot read property 'isWorker' of undefined                      │
│                                                                             │
│ In file ../tmp/wpt-elide-8A7Cy0/case.js:5250:8:           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot read property 'isWorker' of undefined                      │
│                                                                             │
│ In file ../tmp/wpt-elide-77T05c/case.js:5272:8:           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot read property 'isWindow' of undefined                      │
│                                                                             │
│ In file ../tmp/wpt-elide-c2bi3c/case.js:5246:4:           `
example test: `fetch/api/basic/request-referrer.any.js :: <file>`

### 4 × `assert_throws_js: the constructor should throw function <str> threw object <str> (<str>) expected instance of function <str> (<str>)`

distinct messages:
- `assert_throws_js: the constructor should throw function "() => new TextDecoderStream('')" threw object "ReferenceError: TextDecoderStream is not defined" ("ReferenceError") expected instance of function "function RangeError() { [native code] }" ("RangeError")`
- `assert_throws_js: the constructor should throw function "() => new TextDecoderStream({
    toString() { return {}; }
  })" threw object "ReferenceError: TextDecoderStream is not defined" ("ReferenceError") expected instance of function "function TypeError() { [native code] }" ("TypeError")`
- `assert_throws_js: the constructor should throw function "() => new TextDecoderStream('utf-8', {
                     get fatal() { throw new Error(); }
                   })" threw object "ReferenceError: TextDecoderStream is not defined" ("ReferenceError") expected instance of function "function Er`
- `assert_throws_js: the constructor should throw function "() => new TextDecoderStream('utf-8', {
                     get ignoreBOM() { throw new Error(); }
                   })" threw object "ReferenceError: TextDecoderStream is not defined" ("ReferenceError") expected instance of function "functio`
example test: `encoding/streams/decode-attributes.any.js :: constructing with an invalid encoding should throw`

### 3 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │ReferenceError: expected_block is not defined │ │ │ │ In file <loc>: │ │ (sourc`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: expected_block is not defined                                │
│                                                                             │
│ In file ../tmp/wpt-elide-GyBi1N/case.js:5243:1:           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: expected_block is not defined                                │
│                                                                             │
│ In file ../tmp/wpt-elide-XZrI7A/case.js:5243:1:           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: expected_block is not defined                                │
│                                                                             │
│ In file ../tmp/wpt-elide-ODtbre/case.js:5243:1:           `
example test: `fetch/orb/tentative/nosniff.sub.any.js :: <file>`

### 3 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │ReferenceError: idl_test is not defined │ │ │ │ In file <loc>: │ │ (source exce`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: idl_test is not defined                                      │
│                                                                             │
│ In file ../tmp/wpt-elide-7rinxV/case.js:5243:1:           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: idl_test is not defined                                      │
│                                                                             │
│ In file ../tmp/wpt-elide-GElpxg/case.js:5244:1:           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: idl_test is not defined                                      │
│                                                                             │
│ In file ../tmp/wpt-elide-sglHLx/case.js:5243:1:           `
example test: `encoding/idlharness.any.js :: <file>`

### 3 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │ReferenceError: subsetTestByKey is not defined │ │ │ │ In file <loc>: │ │ (sour`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: subsetTestByKey is not defined                               │
│                                                                             │
│ In file ../tmp/wpt-elide-zuuglk/case.js:5263:1:           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: subsetTestByKey is not defined                               │
│                                                                             │
│ In file ../tmp/wpt-elide-YiAeem/case.js:5260:1:           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: subsetTestByKey is not defined                               │
│                                                                             │
│ In file ../tmp/wpt-elide-pdS759/case.js:5267:1:           `
example test: `fetch/local-network-access/navigate.tentative.window.js :: <file>`

### 3 × `assert_array_equals: lengths differ, expected array [<str>, object <str>, <str>, object <str>] length <n>, got [<str>, object <str>, <str>] length <n>`

distinct messages:
- `assert_array_equals: lengths differ, expected array ["get", object "[object Object]", "a", object "[object Object]"] length 4, got ["getOwnPropertyDescriptor", object "[object Object]", "c"] length 3`
- `assert_array_equals: lengths differ, expected array ["get", object "[object Object]", "c", object "[object Object]"] length 4, got ["getOwnPropertyDescriptor", object "[object Object]", "e"] length 3`
example test: `fetch/api/headers/headers-record.any.js :: Correct operation ordering with two properties`

### 3 × `assert_true: enumerable expected true got false`

distinct messages:
- `assert_true: enumerable expected true got false`
example test: `fetch/api/headers/headers-basic.any.js :: Check keys method`

### 2 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │ReferenceError: expected_allow_fetch is not defined │ │ │ │ In file <loc>: │ │ `

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: expected_allow_fetch is not defined                          │
│                                                                             │
│ In file ../tmp/wpt-elide-7rvhfM/case.js:5243:1:           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: expected_allow_fetch is not defined                          │
│                                                                             │
│ In file ../tmp/wpt-elide-dTZUzl/case.js:5244:1:           `
example test: `fetch/orb/tentative/unknown-mime-type.sub.any.js :: <file>`

### 2 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │ReferenceError: location is not defined │ │ │ │ In file <loc>: │ │ (source exce`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: location is not defined                                      │
│                                                                             │
│ In file ../tmp/wpt-elide-iScxuW/case.js:5242:14:          `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: location is not defined                                      │
│                                                                             │
│ In file ../tmp/wpt-elide-73zlwJ/case.js:5264:13:          `
example test: `fetch/api/redirect/redirect-back-to-original-origin.any.js :: <file>`

### 2 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │ReferenceError: subsetTest is not defined │ │ │ │ In file <loc>: │ │ (source ex`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: subsetTest is not defined                                    │
│                                                                             │
│ In file ../tmp/wpt-elide-4SvuWd/case.js:5264:3:           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: subsetTest is not defined                                    │
│                                                                             │
│ In file ../tmp/wpt-elide-4Kg3da/case.js:5293:13:          `
example test: `encoding/api-invalid-label.any.js :: <file>`

### 2 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: Request constructor: failed to parse URL <str> │ │ │ │ In file <loc>`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Request constructor: failed to parse URL ''                       │
│                                                                             │
│ In file ../tmp/wpt-elide-uC9CeO/case.js:5247:22:          `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Request constructor: failed to parse URL ''                       │
│                                                                             │
│ In file ../tmp/wpt-elide-8X3i2V/case.js:5242:15:          `
example test: `fetch/api/request/request-disturbed.any.js :: <file>`

### 2 × `assert_throws_js: function <str><str> threw object <str> (<str>) expected instance of function <str> (<str>)`

distinct messages:
- `assert_throws_js: function "() => new TextEncoder().encodeInto("", createBuffer(arrayBufferOrSharedArrayBuffer, 10))" threw object "ReferenceError: createBuffer is not defined" ("ReferenceError") expected instance of function "function TypeError() { [native code] }" ("TypeError")`
example test: `encoding/encodeInto.any.js :: Invalid encodeInto() destination: ArrayBuffer`

### 2 × `assert_true: bodyUsed should be true expected true got false`

distinct messages:
- `assert_true: bodyUsed should be true expected true got false`
example test: `fetch/api/response/response-stream-disturbed-by-pipe.any.js :: using pipeTo on Response body should disturb it synchronously`

### 2 × `promise_rejects_exactly: CustomTestError should propagate function <str> threw object <str> but we expected it to throw object <str>`

distinct messages:
- `promise_rejects_exactly: CustomTestError should propagate function "function() { throw e; }" threw object "TypeError: Body.formData: Content-Type must be application/x-www-form-urlencoded or multipart/form-data (no Content-Type set)" but we expected it to throw object "Error: Start error"`
- `promise_rejects_exactly: CustomTestError should propagate function "function() { throw e; }" threw object "TypeError: Body.formData: Content-Type must be application/x-www-form-urlencoded or multipart/form-data (no Content-Type set)" but we expected it to throw object "Error: Pull error"`
example test: `fetch/api/response/response-error-from-stream.any.js :: ReadableStream start() Error propagates to Response.formData() Promise`

### 2 × `promise_test: Unhandled rejection with value: object <str>start<str>`

distinct messages:
- `promise_test: Unhandled rejection with value: object "TypeError: underlying source/sink/transformer member "start" must be a function or undefined"`
example test: `fetch/api/basic/stream-safe-creation.any.js :: Object.prototype.start accessor returning invalid value should not affect stream creation by 'response'`

### 2 × `TextDecoder: encoding ISO-<n>-<n>-I not available on this JVM`

distinct messages:
- `TextDecoder: encoding ISO-8859-8-I not available on this JVM`
example test: `encoding/textdecoder-mistakes.any.js :: iso-8859-8-i decodes bytes the same way as iso-8859-8`

### 2 × `TextEncoderStream is not defined`

distinct messages:
- `TextEncoderStream is not defined`
example test: `encoding/streams/readable-writable-properties.any.js :: TextEncoderStream readable and writable properties must pass brand checks`

### 2 × `validateStreamFromPartialString is not defined`

distinct messages:
- `validateStreamFromPartialString is not defined`
example test: `fetch/api/response/response-consume-stream.any.js :: Read form data response's body as readableStream with mode=undefined`

### 2 × `XMLHttpRequest is not defined`

distinct messages:
- `XMLHttpRequest is not defined`
example test: `fetch/content-length/api-and-duplicate-headers.any.js :: XMLHttpRequest and duplicate Content-Length/Content-Type headers`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │java.lang.IllegalStateException: Current state = CODING_END, new state = │ │COD`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│java.lang.IllegalStateException: Current state = CODING_END, new state =     │
│CODING                                                                       │
│                                                           `
example test: `encoding/textdecoder-fatal-streaming.any.js :: <file>`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │ReferenceError: badRequestArgTests is not defined │ │ │ │ In file <loc>: │ │ (s`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: badRequestArgTests is not defined                            │
│                                                                             │
│ In file ../tmp/wpt-elide-M6auZj/case.js:5244:34:          `
example test: `fetch/api/request/request-error.any.js :: <file>`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │ReferenceError: BeaconDataType is not defined │ │ │ │ In file <loc>: │ │ (sourc`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: BeaconDataType is not defined                                │
│                                                                             │
│ In file ../tmp/wpt-elide-bAUdGa/case.js:5246:24:          `
example test: `fetch/fetch-later/quota/small-payload.https.window.js :: <file>`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │ReferenceError: createBuffer is not defined │ │ │ │ In file <loc>: │ │ (source `

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: createBuffer is not defined                                  │
│                                                                             │
│ In file ../tmp/wpt-elide-vClezy/case.js:5248:37:          `
example test: `encoding/streams/decode-utf8.any.js :: <file>`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │ReferenceError: decode_test is not defined │ │ │ │ In file <loc>: │ │ (source e`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: decode_test is not defined                                   │
│                                                                             │
│ In file ../tmp/wpt-elide-3poaNi/case.js:5244:3:           `
example test: `encoding/unsupported-encodings.any.js :: <file>`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │ReferenceError: forbiddenMethod is not defined │ │ │ │ In file <loc>: │ │ (sour`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: forbiddenMethod is not defined                               │
│                                                                             │
│ In file ../tmp/wpt-elide-oApoCk/case.js:5265:6:           `
example test: `fetch/api/headers/headers-forbidden-override.any.js :: <file>`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │ReferenceError: idx is not defined │ │ │ │ In file <loc>: │ │ (source excerpt s`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: idx is not defined                                           │
│                                                                             │
│ In file ../tmp/wpt-elide-Ca8inh/case.js:5244:6:           `
example test: `fetch/api/request/request-init-priority.any.js :: <file>`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │ReferenceError: importScripts is not defined │ │ │ │ In file <loc>: │ │ (source`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: importScripts is not defined                                 │
│                                                                             │
│ In file ../tmp/wpt-elide-LktvTz/case.js:5239:1:           `
example test: `fetch/fetch-later/basic.https.worker.js :: <file>`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │ReferenceError: now is not defined │ │ │ │ In file <loc>: │ │ (source excerpt s`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: now is not defined                                           │
│                                                                             │
│ In file ../tmp/wpt-elide-CAi0KY/case.js:5251:49:          `
example test: `fetch/api/request/request-cache-default-conditional.any.js :: <file>`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │ReferenceError: QUOTA_PER_ORIGIN is not defined │ │ │ │ In file <loc>: │ │ (sou`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: QUOTA_PER_ORIGIN is not defined                              │
│                                                                             │
│ In file ../tmp/wpt-elide-EuR593/case.js:5245:37:          `
example test: `fetch/fetch-later/quota/oversized-payload.https.window.js :: <file>`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │ReferenceError: ranges is not defined │ │ │ │ In file <loc>: │ │ (source excerp`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: ranges is not defined                                        │
│                                                                             │
│ In file ../tmp/wpt-elide-gKNgXw/case.js:5328:21:          `
example test: `encoding/legacy-mb-schinese/gb18030/gb18030-decoder.any.js :: <file>`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │ReferenceError: requestForbiddenHeaders is not defined │ │ │ │ In file <loc>: │`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: requestForbiddenHeaders is not defined                       │
│                                                                             │
│ In file ../tmp/wpt-elide-WhjgkT/case.js:5257:1:           `
example test: `fetch/api/basic/request-forbidden-headers.any.js :: <file>`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │ReferenceError: stringToArray is not defined │ │ │ │ In file <loc>: │ │ (source`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: stringToArray is not defined                                 │
│                                                                             │
│ In file ../tmp/wpt-elide-rrxsQb/case.js:5245:23:          `
example test: `fetch/api/basic/text-utf8.any.js :: <file>`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │ReferenceError: window is not defined │ │ │ │ In file <loc>: │ │ (source excerp`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: window is not defined                                        │
│                                                                             │
│ In file ../tmp/wpt-elide-f2fNgf/case.js:5368:1:           `
example test: `encoding/streams/realms.window.js :: <file>`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: (intermediate value).createObjectURL is not a function │ │ │ │ In fi`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: (intermediate value).createObjectURL is not a function            │
│                                                                             │
│ In file ../tmp/wpt-elide-NRaVVk/case.js:5257:20:          `
example test: `fetch/api/basic/scheme-blob.sub.any.js :: <file>`

### 1 × `assert_array_equals: lengths differ, expected array [] length <n>, got [<str>] length <n>`

distinct messages:
- `assert_array_equals: lengths differ, expected array [] length 0, got ["foo=bar"] length 1`
example test: `fetch/api/headers/header-setcookie.any.js :: Set-Cookie is a forbidden response header`

### 1 × `assert_equals: <n>,<n> expected <str> but got <str>`

distinct messages:
- `assert_equals: 129,48 expected "\ufffd" but got "\ufffd0"`
example test: `encoding/textdecoder-mistakes.any.js :: gbk decoder is gb18030 decoder`

### 1 × `assert_equals: expected true but got false`

distinct messages:
- `assert_equals: expected true but got false`
example test: `url/url-statics-canparse.any.js :: URL.canParse(undefined, aaa:/b)`

### 1 × `assert_equals: Resolved value should be empty expected <n> but got <n>`

distinct messages:
- `assert_equals: Resolved value should be empty expected 0 but got 62`
example test: `fetch/api/response/response-consume-empty.any.js :: Consume empty FormData response body as text`

### 1 × `assert_throws_dom: function <str> threw object <str> that is not a DOMException AbortError: property <str> is equal to undefined, expected <n>`

distinct messages:
- `assert_throws_dom: function "() => fetchLater('/', {signal: controller.signal})" threw object "ReferenceError: fetchLater is not defined" that is not a DOMException AbortError: property "code" is equal to undefined, expected 20`
example test: `fetch/fetch-later/basic.https.window.js :: fetchLater() throws AbortError when its initial abort signal is aborted.`

### 1 × `assert_throws_js: Constructing a URLSearchParams from DOMException.prototype should throw due to branding checks function <str> did not throw`

distinct messages:
- `assert_throws_js: Constructing a URLSearchParams from DOMException.prototype should throw due to branding checks function "() => new URLSearchParams(DOMException.prototype)" did not throw`
example test: `url/urlsearchparams-constructor.any.js :: URLSearchParams constructor, DOMException as argument`

### 1 × `assert_true: textStream exists on Response.prototype expected true got false`

distinct messages:
- `assert_true: textStream exists on Response.prototype expected true got false`
example test: `fetch/api/body/textstream.any.js :: textStream method existence`

### 1 × `Cannot read property <str> of null`

distinct messages:
- `Cannot read property 'href' of null`
example test: `url/url-statics-parse.any.js :: URL.parse(undefined, aaa:/b)`

### 1 × `get_host_info is not defined`

distinct messages:
- `get_host_info is not defined`
example test: `fetch/cross-origin-resource-policy/scheme-restriction.any.js :: Cross-Origin-Resource-Policy: same-site blocks retrieving HTTPS from HTTP`

### 1 × `Headers.append requires the <str> argument`

distinct messages:
- `Headers.append requires the 'value' argument`
example test: `fetch/api/headers/headers-basic.any.js :: Check append method`

### 1 × `Headers.set requires the <str> argument`

distinct messages:
- `Headers.set requires the 'value' argument`
example test: `fetch/api/headers/headers-basic.any.js :: Check set method`

### 1 × `Image is not defined`

distinct messages:
- `Image is not defined`
example test: `fetch/cross-origin-resource-policy/scheme-restriction.https.window.js :: Cross-Origin-Resource-Policy does not block Mixed Content <img>`

### 1 × `Invalid URL hostname`

distinct messages:
- `Invalid URL hostname`
example test: `url/url-setters-stripping.any.js :: Setting hostname with leading U+0000 (https:)`

### 1 × `MediaSource is not defined`

distinct messages:
- `MediaSource is not defined`
example test: `fetch/api/basic/mediasource.window.js :: Cannot fetch blob: URL from a MediaSource`

### 1 × `Response.redirect: failed to parse URL <str>`

distinct messages:
- `Response.redirect: failed to parse URL '/'`
example test: `fetch/api/response/response-consume-stream.any.js :: Getting a redirect Response stream`

### 1 × `TextDecoder: encoding macintosh not available on this JVM`

distinct messages:
- `TextDecoder: encoding macintosh not available on this JVM`
example test: `encoding/textdecoder-mistakes.any.js :: selected single-byte: macintosh`

### 1 × `TextDecoder: encoding x-mac-cyrillic not available on this JVM`

distinct messages:
- `TextDecoder: encoding x-mac-cyrillic not available on this JVM`
example test: `encoding/textdecoder-mistakes.any.js :: selected single-byte: x-mac-cyrillic`

### 1 × `TextDecoder: unsupported encoding label: x-user-defined`

distinct messages:
- `TextDecoder: unsupported encoding label: x-user-defined`
example test: `encoding/textdecoder-mistakes.any.js :: specific: x-user-defined`

### 1 × `TextDecoder.decode: input must be a BufferSource (ArrayBuffer or TypedArray)`

distinct messages:
- `TextDecoder.decode: input must be a BufferSource (ArrayBuffer or TypedArray)`
example test: `encoding/textdecoder-arguments.any.js :: TextDecoder decode() with array buffer detached during arg conversion`

### 1 × `token is not defined`

distinct messages:
- `token is not defined`
example test: `fetch/api/basic/conditional-get.any.js :: Testing conditional GET with ETags`

### 1 × `value of type Direct is not yet supported by structured clone`

distinct messages:
- `value of type Direct is not yet supported by structured clone`
example test: `encoding/encodeInto.any.js :: encodeInto() and a detached output buffer`

### 1 × `window is not defined`

distinct messages:
- `window is not defined`
example test: `fetch/fetch-later/non-secure.window.js :: fetchLater() is not supported in non-secure context.`
