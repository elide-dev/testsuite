# Impact-ordered failures

## By root-cause signature

### 356 × `promise_test: Unhandled rejection with value: object <str>`

distinct messages:
- `promise_test: Unhandled rejection with value: object "TypeError: self[streamClass.name] is not a constructor"`
- `promise_test: Unhandled rejection with value: object "ReferenceError: readableStreamFromArray is not defined"`
- `promise_test: Unhandled rejection with value: object "ReferenceError: TextDecoderStream is not defined"`
- `promise_test: Unhandled rejection with value: object "ReferenceError: document is not defined"`
- `promise_test: Unhandled rejection with value: object "ReferenceError: caches is not defined"`
example test: `encoding/streams/backpressure.any.js :: write() should not complete until read relieves backpressure for TextDecoderStream`

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
- `Request constructor: failed to parse URL '...'`
- `Request constructor: failed to parse URL '/'`
- `Request constructor: failed to parse URL './'`
example test: `fetch/api/request/request-consume.any.js :: Consume String request's body as text`

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
│ In file ../tmp/wpt-elide-k5n57b/case.js:5262:18:          `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: get_host_info is not defined                                 │
│                                                                             │
│ In file ../tmp/wpt-elide-zutxja/case.js:5252:5:           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: get_host_info is not defined                                 │
│                                                                             │
│ In file ../tmp/wpt-elide-aRuBYU/case.js:5254:17:          `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: get_host_info is not defined                                 │
│                                                                             │
│ In file ../tmp/wpt-elide-uh19YT/case.js:5248:5:           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: get_host_info is not defined                                 │
│                                                                             │
│ In file ../tmp/wpt-elide-taUIeX/case.js:5243:19:          `
example test: `fetch/api/abort/general.any.js :: <file>`

### 25 × `TextDecoderStream is not defined`

distinct messages:
- `TextDecoderStream is not defined`
example test: `encoding/streams/decode-attributes.any.js :: encoding attribute should have correct value for 'unicode-1-1-utf-8'`

### 24 × `Invalid URL port`

distinct messages:
- `Invalid URL port`
example test: `url/url-setters-stripping.any.js :: Setting port with leading U+0009 (https:)`

### 17 × `URL.createObjectURL is not a function`

distinct messages:
- `URL.createObjectURL is not a function`
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
│ In file ../tmp/wpt-elide-nczxhI/case.js:5277:1:           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: run_tests is not defined                                     │
│                                                                             │
│ In file ../tmp/wpt-elide-XYthax/case.js:5304:1:           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: run_tests is not defined                                     │
│                                                                             │
│ In file ../tmp/wpt-elide-wBN6AS/case.js:5263:1:           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: run_tests is not defined                                     │
│                                                                             │
│ In file ../tmp/wpt-elide-ZqU5f3/case.js:5289:1:           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: run_tests is not defined                                     │
│                                                                             │
│ In file ../tmp/wpt-elide-ZNJ2D2/case.js:5275:1:           `
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
│ In file ../tmp/wpt-elide-5NIB2x/case.js:5261:13:          `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: RESOURCES_DIR is not defined                                 │
│                                                                             │
│ In file ../tmp/wpt-elide-x0adNf/case.js:5253:18:          `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: RESOURCES_DIR is not defined                                 │
│                                                                             │
│ In file ../tmp/wpt-elide-EVq9Bo/case.js:5271:13:          `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: RESOURCES_DIR is not defined                                 │
│                                                                             │
│ In file ../tmp/wpt-elide-u50XRM/case.js:5281:11:          `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: RESOURCES_DIR is not defined                                 │
│                                                                             │
│ In file ../tmp/wpt-elide-JYTNc4/case.js:5275:13:          `
example test: `fetch/api/basic/mode-no-cors.sub.any.js :: <file>`

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
│ In file ../tmp/wpt-elide-r9tmY5/case.js:5275:14:          `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: dirname is not defined                                       │
│                                                                             │
│ In file ../tmp/wpt-elide-4BmqUr/case.js:5241:52:          `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: dirname is not defined                                       │
│                                                                             │
│ In file ../tmp/wpt-elide-1fET8S/case.js:5280:50:          `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: dirname is not defined                                       │
│                                                                             │
│ In file ../tmp/wpt-elide-S7ZAsv/case.js:5244:52:          `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: dirname is not defined                                       │
│                                                                             │
│ In file ../tmp/wpt-elide-w7xwhl/case.js:5268:17:          `
example test: `fetch/api/basic/integrity.sub.any.js :: <file>`

### 6 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │ReferenceError: parallelPromiseTest is not defined │ │ │ │ In file <loc>: │ │ (`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: parallelPromiseTest is not defined                           │
│                                                                             │
│ In file ../tmp/wpt-elide-6mGPuD/case.js:5248:1:           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: parallelPromiseTest is not defined                           │
│                                                                             │
│ In file ../tmp/wpt-elide-l1xt7P/case.js:5244:1:           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: parallelPromiseTest is not defined                           │
│                                                                             │
│ In file ../tmp/wpt-elide-RbI2xX/case.js:5256:1:           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: parallelPromiseTest is not defined                           │
│                                                                             │
│ In file ../tmp/wpt-elide-fJku94/case.js:5245:1:           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: parallelPromiseTest is not defined                           │
│                                                                             │
│ In file ../tmp/wpt-elide-wj0vSQ/case.js:5253:1:           `
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
│ In file ../tmp/wpt-elide-XNFi0I/case.js:5242:1:           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: encodings_table is not defined                               │
│                                                                             │
│ In file ../tmp/wpt-elide-OxV8R3/case.js:5244:1:           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: encodings_table is not defined                               │
│                                                                             │
│ In file ../tmp/wpt-elide-DOoU1R/case.js:5245:27:          `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: encodings_table is not defined                               │
│                                                                             │
│ In file ../tmp/wpt-elide-sVjV51/case.js:5244:1:           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: encodings_table is not defined                               │
│                                                                             │
│ In file ../tmp/wpt-elide-0N12Pc/case.js:5242:1:           `
example test: `encoding/api-replacement-encodings.any.js :: <file>`

### 5 × `assert_array_equals: expected property <n> to be <str> but got <str> (expected array [<str>, <str>] got [<str>, <str>])`

distinct messages:
- `assert_array_equals: expected property 0 to be "\ufffdx" but got "?x" (expected array ["\ufffdx", "3"] got ["?x", "1"])`
- `assert_array_equals: expected property 0 to be "x\ufffd" but got "x?" (expected array ["x\ufffd", "3"] got ["x?", "1"])`
- `assert_array_equals: expected property 0 to be "a\0b" but got "a" (expected array ["a\0b", "42"] got ["a", "42"])`
- `assert_array_equals: expected property 0 to be "﻿test" but got "test" (expected array ["﻿test", "﻿"] got ["test", "﻿"])`
example test: `url/urlsearchparams-constructor.any.js :: Construct with 2 unpaired surrogates (no trailing)`

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
│ In file ../tmp/wpt-elide-eB7slC/case.js:5400:20:          `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: http_content is not defined                                  │
│                                                                             │
│ In file ../tmp/wpt-elide-no9Z9b/case.js:5308:12:          `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: http_content is not defined                                  │
│                                                                             │
│ In file ../tmp/wpt-elide-oJnemn/case.js:5252:12:          `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: http_content is not defined                                  │
│                                                                             │
│ In file ../tmp/wpt-elide-5V1FLj/case.js:5319:24:          `
example test: `fetch/http-cache/cc-request.any.js :: <file>`

### 4 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: Cannot read property <str> of undefined │ │ │ │ In file <loc>: │ │ (`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot read property 'href' of undefined                          │
│                                                                             │
│ In file ../tmp/wpt-elide-HXG570/case.js:5259:30:          `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot read property 'isWorker' of undefined                      │
│                                                                             │
│ In file ../tmp/wpt-elide-3vAjjm/case.js:5250:8:           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot read property 'isWorker' of undefined                      │
│                                                                             │
│ In file ../tmp/wpt-elide-39tkbY/case.js:5272:8:           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot read property 'isWindow' of undefined                      │
│                                                                             │
│ In file ../tmp/wpt-elide-x4aLB9/case.js:5246:4:           `
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
│ In file ../tmp/wpt-elide-nGkfVa/case.js:5243:1:           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: expected_block is not defined                                │
│                                                                             │
│ In file ../tmp/wpt-elide-WnIna0/case.js:5243:1:           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: expected_block is not defined                                │
│                                                                             │
│ In file ../tmp/wpt-elide-X9Qd0g/case.js:5243:1:           `
example test: `fetch/orb/tentative/known-mime-type.sub.any.js :: <file>`

### 3 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │ReferenceError: idl_test is not defined │ │ │ │ In file <loc>: │ │ (source exce`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: idl_test is not defined                                      │
│                                                                             │
│ In file ../tmp/wpt-elide-pfg7XV/case.js:5243:1:           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: idl_test is not defined                                      │
│                                                                             │
│ In file ../tmp/wpt-elide-CIYCxE/case.js:5244:1:           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: idl_test is not defined                                      │
│                                                                             │
│ In file ../tmp/wpt-elide-uw76Qm/case.js:5243:1:           `
example test: `encoding/idlharness.any.js :: <file>`

### 3 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │ReferenceError: subsetTestByKey is not defined │ │ │ │ In file <loc>: │ │ (sour`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: subsetTestByKey is not defined                               │
│                                                                             │
│ In file ../tmp/wpt-elide-qs40y4/case.js:5260:1:           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: subsetTestByKey is not defined                               │
│                                                                             │
│ In file ../tmp/wpt-elide-QQTbVZ/case.js:5267:1:           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: subsetTestByKey is not defined                               │
│                                                                             │
│ In file ../tmp/wpt-elide-47bnPp/case.js:5263:1:           `
example test: `fetch/local-network-access/navigate.tentative.https.window.js :: <file>`

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
│ In file ../tmp/wpt-elide-P998cy/case.js:5244:1:           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: expected_allow_fetch is not defined                          │
│                                                                             │
│ In file ../tmp/wpt-elide-IlMPZQ/case.js:5243:1:           `
example test: `fetch/orb/tentative/content-range.sub.any.js :: <file>`

### 2 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │ReferenceError: location is not defined │ │ │ │ In file <loc>: │ │ (source exce`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: location is not defined                                      │
│                                                                             │
│ In file ../tmp/wpt-elide-uulb26/case.js:5242:14:          `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: location is not defined                                      │
│                                                                             │
│ In file ../tmp/wpt-elide-xShxXL/case.js:5264:13:          `
example test: `fetch/api/redirect/redirect-back-to-original-origin.any.js :: <file>`

### 2 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │ReferenceError: subsetTest is not defined │ │ │ │ In file <loc>: │ │ (source ex`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: subsetTest is not defined                                    │
│                                                                             │
│ In file ../tmp/wpt-elide-kEIpCW/case.js:5264:3:           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: subsetTest is not defined                                    │
│                                                                             │
│ In file ../tmp/wpt-elide-EgjORg/case.js:5293:13:          `
example test: `encoding/api-invalid-label.any.js :: <file>`

### 2 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: Request constructor: failed to parse URL <str> │ │ │ │ In file <loc>`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Request constructor: failed to parse URL ''                       │
│                                                                             │
│ In file ../tmp/wpt-elide-ISPOEp/case.js:5247:22:          `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Request constructor: failed to parse URL ''                       │
│                                                                             │
│ In file ../tmp/wpt-elide-b1khEe/case.js:5242:15:          `
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
example test: `encoding/streams/encode-bad-chunks.any.js :: a chunk that cannot be converted to a string should error the streams`

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
│ In file ../tmp/wpt-elide-9l8WeQ/case.js:5244:34:          `
example test: `fetch/api/request/request-error.any.js :: <file>`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │ReferenceError: BeaconDataType is not defined │ │ │ │ In file <loc>: │ │ (sourc`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: BeaconDataType is not defined                                │
│                                                                             │
│ In file ../tmp/wpt-elide-PDRtJR/case.js:5246:24:          `
example test: `fetch/fetch-later/quota/small-payload.https.window.js :: <file>`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │ReferenceError: createBuffer is not defined │ │ │ │ In file <loc>: │ │ (source `

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: createBuffer is not defined                                  │
│                                                                             │
│ In file ../tmp/wpt-elide-TlW0zo/case.js:5248:37:          `
example test: `encoding/streams/decode-utf8.any.js :: <file>`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │ReferenceError: decode_test is not defined │ │ │ │ In file <loc>: │ │ (source e`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: decode_test is not defined                                   │
│                                                                             │
│ In file ../tmp/wpt-elide-3aLIP2/case.js:5244:3:           `
example test: `encoding/unsupported-encodings.any.js :: <file>`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │ReferenceError: forbiddenMethod is not defined │ │ │ │ In file <loc>: │ │ (sour`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: forbiddenMethod is not defined                               │
│                                                                             │
│ In file ../tmp/wpt-elide-Lt4Ou1/case.js:5265:6:           `
example test: `fetch/api/headers/headers-forbidden-override.any.js :: <file>`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │ReferenceError: idx is not defined │ │ │ │ In file <loc>: │ │ (source excerpt s`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: idx is not defined                                           │
│                                                                             │
│ In file ../tmp/wpt-elide-6kv3Z2/case.js:5244:6:           `
example test: `fetch/api/request/request-init-priority.any.js :: <file>`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │ReferenceError: importScripts is not defined │ │ │ │ In file <loc>: │ │ (source`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: importScripts is not defined                                 │
│                                                                             │
│ In file ../tmp/wpt-elide-cMDfJs/case.js:5239:1:           `
example test: `fetch/fetch-later/basic.https.worker.js :: <file>`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │ReferenceError: now is not defined │ │ │ │ In file <loc>: │ │ (source excerpt s`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: now is not defined                                           │
│                                                                             │
│ In file ../tmp/wpt-elide-igEwuK/case.js:5251:49:          `
example test: `fetch/api/request/request-cache-default-conditional.any.js :: <file>`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │ReferenceError: QUOTA_PER_ORIGIN is not defined │ │ │ │ In file <loc>: │ │ (sou`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: QUOTA_PER_ORIGIN is not defined                              │
│                                                                             │
│ In file ../tmp/wpt-elide-XBVyhC/case.js:5245:37:          `
example test: `fetch/fetch-later/quota/oversized-payload.https.window.js :: <file>`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │ReferenceError: ranges is not defined │ │ │ │ In file <loc>: │ │ (source excerp`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: ranges is not defined                                        │
│                                                                             │
│ In file ../tmp/wpt-elide-P6l6T6/case.js:5328:21:          `
example test: `encoding/legacy-mb-schinese/gb18030/gb18030-decoder.any.js :: <file>`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │ReferenceError: requestForbiddenHeaders is not defined │ │ │ │ In file <loc>: │`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: requestForbiddenHeaders is not defined                       │
│                                                                             │
│ In file ../tmp/wpt-elide-639TN8/case.js:5257:1:           `
example test: `fetch/api/basic/request-forbidden-headers.any.js :: <file>`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │ReferenceError: stringToArray is not defined │ │ │ │ In file <loc>: │ │ (source`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: stringToArray is not defined                                 │
│                                                                             │
│ In file ../tmp/wpt-elide-dacBY8/case.js:5245:23:          `
example test: `fetch/api/basic/text-utf8.any.js :: <file>`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │ReferenceError: window is not defined │ │ │ │ In file <loc>: │ │ (source excerp`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: window is not defined                                        │
│                                                                             │
│ In file ../tmp/wpt-elide-iytp50/case.js:5368:1:           `
example test: `encoding/streams/realms.window.js :: <file>`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: URL.createObjectURL is not a function │ │ │ │ In file <loc>: │ │ (so`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: URL.createObjectURL is not a function                             │
│                                                                             │
│ In file ../tmp/wpt-elide-AVOvqY/case.js:5257:20:          `
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
