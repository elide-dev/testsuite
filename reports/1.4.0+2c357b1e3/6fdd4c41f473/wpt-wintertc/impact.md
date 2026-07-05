# Impact-ordered failures

## By root-cause signature

### 1399 × `promise_test: Unhandled rejection with value: object <str>`

distinct messages:
- `promise_test: Unhandled rejection with value: object "TypeError: Failed to parse URL: /interfaces/encoding.idl"`
- `promise_test: Unhandled rejection with value: object "ReferenceError: XMLHttpRequest is not defined"`
- `promise_test: Unhandled rejection with value: object "RangeError: TextDecoder: encoding ISO-8859-14 not available on this JVM"`
- `promise_test: Unhandled rejection with value: object "TypeError: Cannot read property 'appendChild' of undefined"`
- `promise_test: Unhandled rejection with value: object "ReferenceError: caches is not defined"`
example test: `encoding/idlharness.any.js :: idl_test setup`

### 524 × `TextDecoder: encoding ISO-<n>-<n> not available on this JVM`

distinct messages:
- `TextDecoder: encoding ISO-8859-10 not available on this JVM`
- `TextDecoder: encoding ISO-8859-14 not available on this JVM`
example test: `encoding/textdecoder-labels.any.js :: csisolatin6 => ISO-8859-10`

### 324 × `assert_equals: expected <str> but got <str>`

distinct messages:
- `assert_equals: expected "\ufffd$" but got "\ufffd"`
- `assert_equals: expected "\ufffd$P" but got "\ufffd"`
- `assert_equals: expected "\ufffdP" but got "P"`
- `assert_equals: expected "\r\ufffd\ufffd\x10" but got "\r\x10"`
- `assert_equals: expected "\ufffdﾐ" but got "\ufffd(IP"`
example test: `encoding/iso-2022-jp-decoder.any.js :: iso-2022-jp decoder: Error ESC`

### 262 × `TextDecoder: encoding macintosh not available on this JVM`

distinct messages:
- `TextDecoder: encoding macintosh not available on this JVM`
example test: `encoding/textdecoder-labels.any.js :: csmacintosh => macintosh`

### 226 × `TextDecoder: encoding ISO-<n>-<n>-I not available on this JVM`

distinct messages:
- `TextDecoder: encoding ISO-8859-8-I not available on this JVM`
example test: `encoding/textdecoder-labels.any.js :: csiso88598i => ISO-8859-8-I`

### 84 × `assert_equals: expected <n> but got <n>`

distinct messages:
- `assert_equals: expected 7743 but got 59335`
- `assert_equals: expected 505 but got 59336`
- `assert_equals: expected 12350 but got 59367`
- `assert_equals: expected 12272 but got 59368`
- `assert_equals: expected 12273 but got 59369`
example test: `encoding/legacy-mb-schinese/gbk/gbk-decoder.any.js :: gbk pointer: 7533`

### 80 × `assert_equals: property expected <str> but got <str>`

distinct messages:
- `assert_equals: property expected "https:" but got "http:"`
- `assert_equals: property expected "%00test" but got ""`
- `assert_equals: property expected "te%00st" but got "te"`
- `assert_equals: property expected "test%00" but got "test"`
- `assert_equals: property expected "host:8000" but got "te:8000"`
example test: `url/url-setters-stripping.any.js :: Setting protocol with U+0000 before inserted colon (https:)`

### 71 × `sabConstructor is not a constructor`

distinct messages:
- `sabConstructor is not a constructor`
example test: `encoding/encodeInto.any.js :: encodeInto() into SharedArrayBuffer with Hi and destination length 0, offset 0, filler 0`

### 68 × `TextDecoder: decoding error (fatal mode): UNMAPPABLE[<n>]`

distinct messages:
- `TextDecoder: decoding error (fatal mode): UNMAPPABLE[1]`
example test: `encoding/textdecoder-fatal-single-byte.any.js :: Not throw: windows-874 has a pointer 129`

### 51 × `Cannot read property <str> of undefined`

distinct messages:
- `Cannot read property 'appendChild' of undefined`
- `Cannot read property 'append' of undefined`
- `Cannot read property 'features' of undefined`
example test: `encoding/single-byte-decoder.window.js :: IBM866: 866 (document.characterSet and document.inputEncoding)`

### 47 × `assert_throws_js: function <str> threw object <str> (<str>) expected instance of function <str> (<str>)`

distinct messages:
- `assert_throws_js: function "function() {
                    new TextDecoder(t.encoding, {fatal: true}).decode(new Uint8Array([i]));
                }" threw object "RangeError: TextDecoder: encoding ISO-8859-8-I not available on this JVM" ("RangeError") expected instance of function "function TypeE`
- `assert_throws_js: function "() => fetchLater()" threw object "ReferenceError: fetchLater is not defined" ("ReferenceError") expected instance of function "function TypeError() { [native code] }" ("TypeError")`
- `assert_throws_js: function "() => fetchLater('http://example.com')" threw object "ReferenceError: fetchLater is not defined" ("ReferenceError") expected instance of function "function TypeError() { [native code] }" ("TypeError")`
- `assert_throws_js: function "() => fetchLater('file://tmp')" threw object "ReferenceError: fetchLater is not defined" ("ReferenceError") expected instance of function "function TypeError() { [native code] }" ("TypeError")`
- `assert_throws_js: function "() => fetchLater('ftp://example.com')" threw object "ReferenceError: fetchLater is not defined" ("ReferenceError") expected instance of function "function TypeError() { [native code] }" ("TypeError")`
example test: `encoding/textdecoder-fatal-single-byte.any.js :: Throw due to fatal flag: ISO-8859-8-I doesn't have a pointer 161`

### 37 × `XMLHttpRequest is not defined`

distinct messages:
- `XMLHttpRequest is not defined`
example test: `encoding/single-byte-decoder.window.js :: IBM866: 866 (XMLHttpRequest)`

### 29 × `fetchLater is not defined`

distinct messages:
- `fetchLater is not defined`
example test: `fetch/fetch-later/basic.https.window.js :: fetchLater() with same-origin (https) URL does not throw.`

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

### 13 × `window is not defined`

distinct messages:
- `window is not defined`
example test: `fetch/fetch-later/non-secure.window.js :: fetchLater() is not supported in non-secure context.`

### 11 × `assert_throws_js: function <str><str> did not throw`

distinct messages:
- `assert_throws_js: function "() => new TextEncoder().encodeInto("", viewInstance)" did not throw`
example test: `encoding/encodeInto.any.js :: Invalid encodeInto() destination: Int8Array, backed by: ArrayBuffer`

### 10 × `assert_equals: <n> -> <n> expected <str> but got <str>`

distinct messages:
- `assert_equals: 174 -> 1118 expected "ў" but got "╝"`
- `assert_equals: 129 -> 129 expected "" but got "\ufffd"`
- `assert_equals: 152 -> 152 expected "" but got "\ufffd"`
example test: `encoding/textdecoder-mistakes.any.js :: selected single-byte: koi8-u`

### 10 × `assert_throws_js: function <str> did not throw`

distinct messages:
- `assert_throws_js: function "() => fatal.decode(u(...a, ...a))" did not throw`
- `assert_throws_js: function "() => new TextDecoder(label)" did not throw`
- `assert_throws_js: function "function() { var h = new Headers(proxy); }" did not throw`
- `assert_throws_js: function "() => new Response(stream)" did not throw`
- `assert_throws_js: function "function () {
          response.body.getReader();
        }" did not throw`
example test: `encoding/textdecoder-mistakes.any.js :: Concatenating two ISO-2022-JP outputs is not always valid`

### 9 × `assert_unreached: Should have rejected: undefined Reached unreachable code`

distinct messages:
- `assert_unreached: Should have rejected: undefined Reached unreachable code`
example test: `fetch/api/abort/request.any.js :: Calling arrayBuffer() on an aborted consumed nonempty request`

### 9 × `test_feature_availability is not defined`

distinct messages:
- `test_feature_availability is not defined`
example test: `fetch/fetch-later/permissions-policy/deferred-fetch-allowed-by-permissions-policy-attribute.https.window.js :: Permissions policy "deferred-fetch" can be enabled in the same-origin iframe using allow="deferred-fetch" attribute.`

### 7 × `assert_throws_quotaexceedederror: function <str> threw object <str> that is not a correct QuotaExceededError: property <str> is equal to undefined, expected <n>`

distinct messages:
- `assert_throws_quotaexceedederror: function "() => {
    fetchLater(requestUrl, {
      activateAfter: 0,
      method: 'POST',
      body: generatePayload(
          getRemainingQuota(QUOTA_PER_ORIGIN, requestUrl, headers) + 1,
          dataType),
      referrer: '',
    });
  }" threw object "Refe`
- `assert_throws_quotaexceedederror: function "() => {
      fetchLater('/', {
        activateAfter: 0,
        method: 'POST',
        body: makeBeaconData(
            generatePayload(OVERSIZED_REQUEST_BODY_SIZE), dataType),
        referrer: '',
      });
      // It is difficult to compute the exa`
example test: `fetch/fetch-later/quota/max-payload.https.window.js :: fetchLater() rejects max+1 payload in a POST request body of String.`

### 7 × `Request constructor: failed to parse URL <str>`

distinct messages:
- `Request constructor: failed to parse URL 'http://{{host}}:{{ports[http][1]}}/fetch/api/cors/../resource...'`
example test: `fetch/api/cors/cors-filtering.sub.any.js :: CORS filter on Age header, header is exposed`

### 6 × `RemoteContextHelper is not defined`

distinct messages:
- `RemoteContextHelper is not defined`
example test: `fetch/fetch-later/activate-after.https.window.js :: fetchLater() sends out based on activateAfter, even if document is in BFCache.`

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

### 4 × `assert_equals: BOM should be stripped expected <str> but got <str>`

distinct messages:
- `assert_equals: BOM should be stripped expected "abc" but got "﻿abc"`
example test: `encoding/streams/decode-ignore-bom.any.js :: ignoreBOM should work for encoding utf-8, split at character 1`

### 4 × `promise_test: Unhandled rejection with value: object <str>start<str>`

distinct messages:
- `promise_test: Unhandled rejection with value: object "TypeError: underlying source/sink/transformer member "start" must be a function or undefined"`
example test: `fetch/api/basic/stream-safe-creation.any.js :: Object.prototype.start accessor returning invalid value should not affect stream creation by 'request'`

### 4 × `TextDecoder: encoding x-mac-cyrillic not available on this JVM`

distinct messages:
- `TextDecoder: encoding x-mac-cyrillic not available on this JVM`
example test: `encoding/textdecoder-labels.any.js :: x-mac-cyrillic => x-mac-cyrillic`

### 3 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │SyntaxError: <loc> Expected ident but found { <str>: │ │{{ports[http][<n>]}}, ^`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│SyntaxError: case.js:5303:17 Expected ident but found { "loopback":          │
│{{ports[http][0]}}, ^ case.js:5303:33 Expected eof but found } "loopback":   │
│{{ports[http][0]}}, ^                                      `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│SyntaxError: case.js:8089:17 Expected ident but found { "loopback":          │
│{{ports[http][0]}}, ^ case.js:8089:33 Expected eof but found } "loopback":   │
│{{ports[http][0]}}, ^                                      `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│SyntaxError: case.js:5303:17 Expected ident but found { "loopback":          │
│{{ports[http][0]}}, ^ case.js:5303:33 Expected eof but found } "loopback":   │
│{{ports[http][0]}}, ^                                      `
example test: `fetch/local-network-access/navigate.tentative.window.js :: <file>`

### 3 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: meta.setAttribute is not a function │ │ │ │ In file <loc>: │ │ (sour`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: meta.setAttribute is not a function                               │
│                                                                             │
│ In file ../tmp/wpt-elide-dj82Iz/case.js:5873:1:           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: meta.setAttribute is not a function                               │
│                                                                             │
│ In file ../tmp/wpt-elide-ABzTDf/case.js:5875:1:           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: meta.setAttribute is not a function                               │
│                                                                             │
│ In file ../tmp/wpt-elide-vomR3H/case.js:5873:1:           `
example test: `fetch/fetch-later/policies/csp-allowed.https.window.js :: <file>`

### 3 × `assert_array_equals: lengths differ, expected array [<str>, object <str>, <str>, object <str>] length <n>, got [<str>, object <str>, <str>] length <n>`

distinct messages:
- `assert_array_equals: lengths differ, expected array ["get", object "[object Object]", "a", object "[object Object]"] length 4, got ["getOwnPropertyDescriptor", object "[object Object]", "c"] length 3`
- `assert_array_equals: lengths differ, expected array ["get", object "[object Object]", "c", object "[object Object]"] length 4, got ["getOwnPropertyDescriptor", object "[object Object]", "e"] length 3`
example test: `fetch/api/headers/headers-record.any.js :: Correct operation ordering with two properties`

### 3 × `assert_throws_js: function <str>...<str> did not throw`

distinct messages:
- `assert_throws_js: function "() => new Request("...", { method, body, duplex })" did not throw`
example test: `fetch/api/request/request-init-stream.any.js :: Constructing a Request with a stream on which getReader() is called`

### 3 × `assert_true: enumerable expected true got false`

distinct messages:
- `assert_true: enumerable expected true got false`
example test: `fetch/api/headers/headers-basic.any.js :: Check keys method`

### 3 × `TextDecoder: unsupported encoding label: x-user-defined`

distinct messages:
- `TextDecoder: unsupported encoding label: x-user-defined`
example test: `encoding/textdecoder-labels.any.js :: x-user-defined => x-user-defined`

### 2 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │ReferenceError: window is not defined │ │ │ │ In file <loc>: │ │ (source excerp`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: window is not defined                                        │
│                                                                             │
│ In file ../tmp/wpt-elide-kwjAgH/case.js:5388:1:           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: window is not defined                                        │
│                                                                             │
│ In file ../tmp/wpt-elide-kabVbu/case.js:5337:5:           `
example test: `encoding/streams/realms.window.js :: <file>`

### 2 × `assert_equals: Resolved value should be empty expected <n> but got <n>`

distinct messages:
- `assert_equals: Resolved value should be empty expected 0 but got 62`
example test: `fetch/api/request/request-consume-empty.any.js :: Consume empty FormData request body as text`

### 2 × `assert_false: expected false got true`

distinct messages:
- `assert_false: expected false got true`
example test: `fetch/api/request/request-error.any.js :: Request should not get its content-type from the init request if init headers are provided`

### 2 × `assert_true: bodyUsed is true when request is disturbed expected true got false`

distinct messages:
- `assert_true: bodyUsed is true when request is disturbed expected true got false`
example test: `fetch/api/request/request-disturbed.any.js :: Input request used for creating new request became disturbed`

### 2 × `assert_true: bodyUsed should be true expected true got false`

distinct messages:
- `assert_true: bodyUsed should be true expected true got false`
example test: `fetch/api/response/response-stream-disturbed-by-pipe.any.js :: using pipeTo on Response body should disturb it synchronously`

### 2 × `assert_unreached: Should have rejected: write should reject Reached unreachable code`

distinct messages:
- `assert_unreached: Should have rejected: write should reject Reached unreachable code`
example test: `encoding/streams/decode-bad-chunks.any.js :: chunk of type undefined should error the stream`

### 2 × `promise_rejects_exactly: CustomTestError should propagate function <str> threw object <str> but we expected it to throw object <str>`

distinct messages:
- `promise_rejects_exactly: CustomTestError should propagate function "function() { throw e; }" threw object "TypeError: Body.formData: Content-Type must be application/x-www-form-urlencoded or multipart/form-data (no Content-Type set)" but we expected it to throw object "Error: Start error"`
- `promise_rejects_exactly: CustomTestError should propagate function "function() { throw e; }" threw object "TypeError: Body.formData: Content-Type must be application/x-www-form-urlencoded or multipart/form-data (no Content-Type set)" but we expected it to throw object "Error: Pull error"`
example test: `fetch/api/response/response-error-from-stream.any.js :: ReadableStream start() Error propagates to Response.formData() Promise`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │java.lang.IllegalStateException: Current state = CODING_END, new state = │ │COD`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│java.lang.IllegalStateException: Current state = CODING_END, new state =     │
│CODING                                                                       │
│                                                           `
example test: `encoding/textdecoder-fatal-streaming.any.js :: <file>`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │ReferenceError: importScripts is not defined │ │ │ │ In file <loc>: │ │ (source`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: importScripts is not defined                                 │
│                                                                             │
│ In file ../tmp/wpt-elide-fHZDS8/case.js:5259:1:           `
example test: `fetch/fetch-later/basic.https.worker.js :: <file>`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: (intermediate value).createObjectURL is not a function │ │ │ │ In fi`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: (intermediate value).createObjectURL is not a function            │
│                                                                             │
│ In file ../tmp/wpt-elide-uEvO7b/case.js:5398:20:          `
example test: `fetch/api/basic/scheme-blob.sub.any.js :: <file>`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: sabConstructor is not a constructor │ │ │ │ In file <loc>: │ │ (sour`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: sabConstructor is not a constructor                               │
│                                                                             │
│ In file ../tmp/wpt-elide-NnlnTM/case.js:5302:14:          `
example test: `encoding/streams/decode-utf8.any.js :: <file>`

### 1 × `assert_array_equals: lengths differ, expected array [] length <n>, got [<str>] length <n>`

distinct messages:
- `assert_array_equals: lengths differ, expected array [] length 0, got ["foo=bar"] length 1`
example test: `fetch/api/headers/header-setcookie.any.js :: Set-Cookie is a forbidden response header`

### 1 × `assert_equals: <n>,<n> expected <str> but got <str>`

distinct messages:
- `assert_equals: 129,48 expected "\ufffd" but got "\ufffd0"`
example test: `encoding/textdecoder-mistakes.any.js :: gbk decoder is gb18030 decoder`

### 1 × `assert_equals: chunk should match expected expected <str> but got <str>`

distinct messages:
- `assert_equals: chunk should match expected expected "ABC\ufffdABC" but got "ABC\ufffdBC"`
example test: `encoding/streams/decode-non-utf8.any.js :: TextDecoderStream should be able to decode ISO-2022-JP`

### 1 × `assert_equals: expected (object) null but got (string) <str>`

distinct messages:
- `assert_equals: expected (object) null but got (string) "potato"`
example test: `fetch/api/request/request-headers.any.js :: Check that no-cors request constructor is filtering headers provided as part of request parameter`

### 1 × `assert_equals: expected true but got false`

distinct messages:
- `assert_equals: expected true but got false`
example test: `url/url-statics-canparse.any.js :: URL.canParse(undefined, aaa:/b)`

### 1 × `assert_false: readable should not be closed expected false got true`

distinct messages:
- `assert_false: readable should not be closed expected false got true`
example test: `encoding/streams/decode-non-utf8.any.js :: TextDecoderStream should be able to decode invalid sequences in ISO-2022-JP`

### 1 × `assert_not_equals: Cloned request has different signal got disallowed value object <str>`

distinct messages:
- `assert_not_equals: Cloned request has different signal got disallowed value object "[object AbortSignal]"`
example test: `fetch/api/abort/general.any.js :: Signal state is cloned`

### 1 × `assert_throws_dom: function <str> threw object <str> that is not a DOMException AbortError: property <str> is equal to undefined, expected <n>`

distinct messages:
- `assert_throws_dom: function "() => fetchLater('/', {signal: controller.signal})" threw object "ReferenceError: fetchLater is not defined" that is not a DOMException AbortError: property "code" is equal to undefined, expected 20`
example test: `fetch/fetch-later/basic.https.window.js :: fetchLater() throws AbortError when its initial abort signal is aborted.`

### 1 × `assert_throws_dom: function <str> threw object <str> that is not a DOMException DataCloneError: property <str> is equal to undefined, expected <n>`

distinct messages:
- `assert_throws_dom: function "() => self.structuredClone(new URLSearchParams())" threw object "TypeError: (intermediate value).structuredClone is not a function" that is not a DOMException DataCloneError: property "code" is equal to undefined, expected 25`
example test: `url/historical.any.js :: URLSearchParams: no structured serialize/deserialize support`

### 1 × `assert_throws_dom: function <str>about:blank<str> threw object <str> that is not a DOMException DataCloneError: property <str> is equal to undefined, expected <`

distinct messages:
- `assert_throws_dom: function "() => self.structuredClone(new URL("about:blank"))" threw object "TypeError: (intermediate value).structuredClone is not a function" that is not a DOMException DataCloneError: property "code" is equal to undefined, expected 25`
example test: `url/historical.any.js :: URL: no structured serialize/deserialize support`

### 1 × `assert_throws_js: A get request may not have body. function <str> did not throw`

distinct messages:
- `assert_throws_js: A get request may not have body. function "function() { new Request(req, {method: 'GET'}); }" did not throw`
example test: `fetch/api/request/request-disturbed.any.js :: Request construction failure should not set "bodyUsed"`

### 1 × `assert_throws_js: a new Request() must throw a TypeError if RequestInit<str>invalid'}); }" did not throw`

distinct messages:
- `assert_throws_js: a new Request() must throw a TypeError if RequestInit's priority is an invalid value function "() => {
    new Request("", {priority: 'invalid'});
  }" did not throw`
example test: `fetch/api/request/request-init-priority.any.js :: new Request() throws a TypeError if any of RequestInit's members' values are invalid`

### 1 × `assert_throws_js: Constructing a URLSearchParams from DOMException.prototype should throw due to branding checks function <str> did not throw`

distinct messages:
- `assert_throws_js: Constructing a URLSearchParams from DOMException.prototype should throw due to branding checks function "() => new URLSearchParams(DOMException.prototype)" did not throw`
example test: `url/urlsearchparams-constructor.any.js :: URLSearchParams constructor, DOMException as argument`

### 1 × `assert_throws_js: Expect TypeError exception function <str> did not throw`

distinct messages:
- `assert_throws_js: Expect TypeError exception function "() => new Request(...args)" did not throw`
example test: `fetch/api/request/request-error.any.js :: RequestInit's mode is no-cors and method is not simple`

### 1 × `assert_true: Body has been used expected true got false`

distinct messages:
- `assert_true: Body has been used expected true got false`
example test: `fetch/api/abort/general.any.js :: Request is still 'used' if signal is aborted before fetching`

### 1 × `assert_true: Cancel called sync expected true got false`

distinct messages:
- `assert_true: Cancel called sync expected true got false`
example test: `fetch/api/abort/general.any.js :: Readable stream synchronously cancels with AbortError if aborted before reading`

### 1 × `assert_true: request has isHistoryNavigation attribute expected true got false`

distinct messages:
- `assert_true: request has isHistoryNavigation attribute expected true got false`
example test: `fetch/api/request/request-structure.any.js :: Check isHistoryNavigation attribute`

### 1 × `assert_true: request has isReloadNavigation attribute expected true got false`

distinct messages:
- `assert_true: request has isReloadNavigation attribute expected true got false`
example test: `fetch/api/request/request-structure.any.js :: Check isReloadNavigation attribute`

### 1 × `assert_true: textStream exists on Response.prototype expected true got false`

distinct messages:
- `assert_true: textStream exists on Response.prototype expected true got false`
example test: `fetch/api/body/textstream.any.js :: textStream method existence`

### 1 × `assert_unreached: Should have rejected: readable should be errored Reached unreachable code`

distinct messages:
- `assert_unreached: Should have rejected: readable should be errored Reached unreachable code`
example test: `encoding/streams/decode-non-utf8.any.js :: TextDecoderStream should be able to reject invalid sequences in ISO-2022-JP`

### 1 × `Body: init is not a supported BodyInit (Blob / BufferSource / FormData / URLSearchParams / USVString / ReadableStream expected)`

distinct messages:
- `Body: init is not a supported BodyInit (Blob / BufferSource / FormData / URLSearchParams / USVString / ReadableStream expected)`
example test: `fetch/api/request/request-init-002.any.js :: Initialize Request's body with "hi!", text/plain;charset=UTF-8`

### 1 × `Cannot read property <str> of null`

distinct messages:
- `Cannot read property 'href' of null`
example test: `url/url-statics-parse.any.js :: URL.parse(undefined, aaa:/b)`

### 1 × `Headers.append requires the <str> argument`

distinct messages:
- `Headers.append requires the 'value' argument`
example test: `fetch/api/headers/headers-basic.any.js :: Check append method`

### 1 × `Headers.set requires the <str> argument`

distinct messages:
- `Headers.set requires the 'value' argument`
example test: `fetch/api/headers/headers-basic.any.js :: Check set method`

### 1 × `iframe.addEventListener is not a function`

distinct messages:
- `iframe.addEventListener is not a function`
example test: `fetch/fetch-later/iframe.https.window.js :: A blank iframe can trigger fetchLater.`

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

### 1 × `promise_rejects_dom: function <str> threw object <str> that is not a DOMException AbortError: property <str> is equal to undefined, expected <n>`

distinct messages:
- `promise_rejects_dom: function "function() { throw e; }" threw object "TypeError: Failed to parse URL: ../resources/data.json" that is not a DOMException AbortError: property "code" is equal to undefined, expected 20`
example test: `fetch/api/abort/general.any.js :: Aborting rejects with AbortError`

### 1 × `promise_rejects_exactly: fetch() should reject with abort reason function <str> threw object <str> but we expected it to throw object <str>`

distinct messages:
- `promise_rejects_exactly: fetch() should reject with abort reason function "function() { throw e; }" threw object "TypeError: Failed to parse URL: ../resources/data.json" but we expected it to throw object "error1: error1"`
example test: `fetch/api/abort/general.any.js :: Aborting rejects with abort reason`

### 1 × `promise_test: Unhandled rejection with value: <str>`

distinct messages:
- `promise_test: Unhandled rejection with value: "failed load with range header bytes=0-10"`
example test: `fetch/range/general.any.js :: Cross Origin Fetch with safe range header`

### 1 × `Request constructor: copying a streaming body from an input Request is not yet supported`

distinct messages:
- `Request constructor: copying a streaming body from an input Request is not yet supported`
example test: `fetch/api/request/request-init-stream.any.js :: It is OK to omit duplex when init.body is not given and input.body is given.`

### 1 × `TextDecoder: unsupported encoding label: unicode11utf8`

distinct messages:
- `TextDecoder: unsupported encoding label: unicode11utf8`
example test: `encoding/textdecoder-labels.any.js :: unicode11utf8 => UTF-8`

### 1 × `TextDecoder: unsupported encoding label: unicode20utf8`

distinct messages:
- `TextDecoder: unsupported encoding label: unicode20utf8`
example test: `encoding/textdecoder-labels.any.js :: unicode20utf8 => UTF-8`

### 1 × `TextDecoder: unsupported encoding label: x-unicode20utf8`

distinct messages:
- `TextDecoder: unsupported encoding label: x-unicode20utf8`
example test: `encoding/textdecoder-labels.any.js :: x-unicode20utf8 => UTF-8`

### 1 × `TextDecoder.decode: input must be a BufferSource (ArrayBuffer or TypedArray)`

distinct messages:
- `TextDecoder.decode: input must be a BufferSource (ArrayBuffer or TypedArray)`
example test: `encoding/textdecoder-arguments.any.js :: TextDecoder decode() with array buffer detached during arg conversion`

### 1 × `value of type Direct is not yet supported by structured clone`

distinct messages:
- `value of type Direct is not yet supported by structured clone`
example test: `encoding/encodeInto.any.js :: encodeInto() and a detached output buffer`
