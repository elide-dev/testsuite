# Impact-ordered failures

## By root-cause signature

### 1114 × `promise_test: Unhandled rejection with value: object <str>`

distinct messages:
- `promise_test: Unhandled rejection with value: object "Error fetching /interfaces/streams.idl."`
- `promise_test: Unhandled rejection with value: object "ReferenceError: garbageCollect is not defined"`
- `promise_test: Unhandled rejection with value: object "TypeError: Cannot read property 'appendChild' of undefined"`
- `promise_test: Unhandled rejection with value: object "Error: Cannot load script: /fetch/api/resources/keepalive-worker.js?param=http://127.0.0.1:41481/fetch/api/resources/stash-put.py?key=55fb601e-6830-403f-8116-85bc1b52a44e&value=on&frame_origin=http://127.0.0.1:41481"`
- `promise_test: Unhandled rejection with value: object "TypeError: Failed to parse URL: http://{{host}}:{{ports[http][0]}}/fetch/api/resources/top.txt?pipe=header(x-is-filtered,value) (base http://127.0.0.1:41481/fetch/api/basic/)"`
example test: `encoding/idlharness.any.js :: idl_test setup`

### 71 × `sabConstructor is not a constructor`

distinct messages:
- `sabConstructor is not a constructor`
example test: `encoding/encodeInto.any.js :: encodeInto() into SharedArrayBuffer with Hi and destination length 0, offset 0, filler 0`

### 52 × `assert_equals: Response's type is basic expected <str> but got <str>`

distinct messages:
- `assert_equals: Response's type is basic expected "basic" but got "default"`
example test: `fetch/api/basic/accept-header.any.js :: Request through fetch should have 'accept' header with value '*/*'`

### 31 × `assert_unreached: XHR should not fail Reached unreachable code`

distinct messages:
- `assert_unreached: XHR should not fail Reached unreachable code`
example test: `fetch/api/headers/header-values.any.js :: XMLHttpRequest with all valid values`

### 18 × `assert_unreached: Should have rejected: undefined Reached unreachable code`

distinct messages:
- `assert_unreached: Should have rejected: undefined Reached unreachable code`
example test: `fetch/api/abort/request.any.js :: Calling arrayBuffer() on an aborted consumed nonempty request`

### 14 × `assert_not_equals: Buffer of cloned response stream is a clone of the original buffer got disallowed value object <str>`

distinct messages:
- `assert_not_equals: Buffer of cloned response stream is a clone of the original buffer got disallowed value object "0,0,0,0,0,0,0,0,0,0,0,0,0,0,0"`
- `assert_not_equals: Buffer of cloned response stream is a clone of the original buffer got disallowed value object "0,0"`
- `assert_not_equals: Buffer of cloned response stream is a clone of the original buffer got disallowed value object "0,0,0,0"`
- `assert_not_equals: Buffer of cloned response stream is a clone of the original buffer got disallowed value object "[object ArrayBuffer]"`
- `assert_not_equals: Buffer of cloned response stream is a clone of the original buffer got disallowed value object "0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0"`
example test: `fetch/api/response/response-clone.any.js :: Check response clone use structureClone for teed ReadableStreams (Int8Arraychunk)`

### 11 × `assert_throws_js: function <str><str> did not throw`

distinct messages:
- `assert_throws_js: function "() => new TextEncoder().encodeInto("", viewInstance)" did not throw`
example test: `encoding/encodeInto.any.js :: Invalid encodeInto() destination: Int8Array, backed by: ArrayBuffer`

### 10 × `assert_equals: expected (string) <str> but got (object) null`

distinct messages:
- `assert_equals: expected (string) "304" but got (object) null`
- `assert_equals: expected (string) ", " but got (object) null`
- `assert_equals: expected (string) "1, 2, 3" but got (object) null`
- `assert_equals: expected (string) ", \v\f, 1, , , 2" but got (object) null`
- `assert_equals: expected (string) "1, 2, 3, 4" but got (object) null`
example test: `fetch/api/basic/conditional-get.any.js :: Testing conditional GET with ETags`

### 10 × `assert_equals: expected <str> but got <str>`

distinct messages:
- `assert_equals: expected "0" but got "42"`
- `assert_equals: expected "0, 0" but got "42"`
- `assert_equals: expected "ok. Request was sent 2 times. 2 connections were created." but got "ok. Request was sent 1 times. 1 connections were created."`
- `assert_equals: expected "mytext/plain" but got "Mytext/Plain"`
- `assert_equals: expected "%3Fa=b&c=d" but got "a=b&c=d"`
example test: `fetch/api/basic/header-value-combining.any.js :: response.headers.get('content-length') expects 0`

### 10 × `promise_rejects_js: function <str> threw object <str> (<str>) expected instance of function <str> (<str>)`

distinct messages:
- `promise_rejects_js: function "function() { throw e; }" threw object "AbortError: The operation was aborted" ("AbortError") expected instance of function "function TypeError() { [native code] }" ("TypeError")`
example test: `fetch/api/abort/general.any.js :: TypeError from request constructor takes priority - RequestInit's window is not null`

### 8 × `assert_throws_js: function <str> did not throw`

distinct messages:
- `assert_throws_js: function "function() { var h = new Headers(proxy); }" did not throw`
- `assert_throws_js: function "() => new Response(stream)" did not throw`
- `assert_throws_js: function "function () {
          response.body.getReader();
        }" did not throw`
example test: `fetch/api/headers/headers-record.any.js :: Basic operation with Symbol keys`

### 7 × `Request constructor: failed to parse URL <str>`

distinct messages:
- `Request constructor: failed to parse URL 'http://{{host}}:{{ports[http][1]}}/fetch/api/cors/../resource...'`
example test: `fetch/api/cors/cors-filtering.sub.any.js :: CORS filter on Age header, header is exposed`

### 5 × `assert_array_equals: expected property <n> to be <str> but got <str> (expected array [<str>, <str>] got [<str>, <str>])`

distinct messages:
- `assert_array_equals: expected property 0 to be "\ufffdx" but got "?x" (expected array ["\ufffdx", "3"] got ["?x", "1"])`
- `assert_array_equals: expected property 0 to be "x\ufffd" but got "x?" (expected array ["x\ufffd", "3"] got ["x?", "1"])`
- `assert_array_equals: expected property 0 to be "a\0b" but got "a" (expected array ["a\0b", "42"] got ["a", "42"])`
- `assert_array_equals: expected property 0 to be "﻿test" but got "test" (expected array ["﻿test", "﻿"] got ["test", "﻿"])`
example test: `url/urlsearchparams-constructor.any.js :: Construct with 2 unpaired surrogates (no trailing)`

### 5 × `promise_test: Unhandled rejection with value: object <str>start<str>`

distinct messages:
- `promise_test: Unhandled rejection with value: object "TypeError: underlying source/sink/transformer member "start" must be a function or undefined"`
example test: `fetch/api/basic/stream-safe-creation.any.js :: Object.prototype.start accessor returning invalid value should not affect stream creation by 'fetch'`

### 4 × `assert_equals: response type is basic expected <str> but got <str>`

distinct messages:
- `assert_equals: response type is basic expected "basic" but got "default"`
example test: `fetch/api/basic/mode-same-origin.any.js :: Fetch ../resources/top.txt with same-origin mode`

### 4 × `assert_equals: the body should be null expected null but got object <str>`

distinct messages:
- `assert_equals: the body should be null expected null but got object "[object ReadableStream]"`
example test: `fetch/api/basic/response-null-body.any.js :: Response.body is null for responses with status=205 (method=GET)`

### 3 × `assert_array_equals: lengths differ, expected array [<str>, object <str>, <str>, object <str>] length <n>, got [<str>, object <str>, <str>] length <n>`

distinct messages:
- `assert_array_equals: lengths differ, expected array ["get", object "[object Object]", "a", object "[object Object]"] length 4, got ["getOwnPropertyDescriptor", object "[object Object]", "c"] length 3`
- `assert_array_equals: lengths differ, expected array ["get", object "[object Object]", "c", object "[object Object]"] length 4, got ["getOwnPropertyDescriptor", object "[object Object]", "e"] length 3`
example test: `fetch/api/headers/headers-record.any.js :: Correct operation ordering with two properties`

### 3 × `assert_equals: expected <n> but got <n>`

distinct messages:
- `assert_equals: expected 5 but got 6`
- `assert_equals: expected 4 but got 5`
- `assert_equals: expected 9 but got 8`
example test: `fetch/api/headers/headers-record.any.js :: Correct operation ordering with two properties one of which has an invalid name`

### 3 × `assert_equals: Request's referrer is correct expected (string) <str> but got (object) null`

distinct messages:
- `assert_equals: Request's referrer is correct expected (string) "http://127.0.0.1:41481/fetch/api/basic/" but got (object) null`
- `assert_equals: Request's referrer is correct expected (string) "http://127.0.0.1:41481/" but got (object) null`
example test: `fetch/api/basic/referrer.any.js :: origin-when-cross-origin policy on a same-origin URL`

### 3 × `assert_throws_dom: function <str>value-test<str> did not throw`

distinct messages:
- `assert_throws_dom: function "() => xhr.setRequestHeader("value-test", val)" did not throw`
example test: `fetch/api/headers/header-values.any.js :: XMLHttpRequest with value x%00x needs to throw`

### 3 × `assert_throws_js: function <str>...<str> did not throw`

distinct messages:
- `assert_throws_js: function "() => new Request("...", { method, body, duplex })" did not throw`
example test: `fetch/api/request/request-init-stream.any.js :: Constructing a Request with a stream on which getReader() is called`

### 3 × `assert_true: enumerable expected true got false`

distinct messages:
- `assert_true: enumerable expected true got false`
example test: `fetch/api/headers/headers-basic.any.js :: Check keys method`

### 3 × `SyntaxError: <loc> Expected ident but found { <str>: {{ports[http][<n>]}}, ^ <loc> Expected eof but found } <str>: {{ports[http][<n>]}}, ^`

distinct messages:
- `SyntaxError: case.js:8089:17 Expected ident but found {     "loopback": {{ports[http][0]}},                  ^ case.js:8089:33 Expected eof but found }     "loopback": {{ports[http][0]}},                                  ^`
- `SyntaxError: case.js:5303:17 Expected ident but found {     "loopback": {{ports[http][0]}},                  ^ case.js:5303:33 Expected eof but found }     "loopback": {{ports[http][0]}},                                  ^`
example test: `fetch/local-network-access/iframe.tentative.https.window.js :: <file>`

### 3 × `TypeError: meta.setAttribute is not a function at :program (<loc>)`

distinct messages:
- `TypeError: meta.setAttribute is not a function
    at :program (case.js:5875:1)`
- `TypeError: meta.setAttribute is not a function
    at :program (case.js:5877:1)`
example test: `fetch/fetch-later/policies/csp-allowed.https.window.js :: <file>`

### 2 × `assert_equals: Resolved value should be empty expected <n> but got <n>`

distinct messages:
- `assert_equals: Resolved value should be empty expected 0 but got 62`
example test: `fetch/api/request/request-consume-empty.any.js :: Consume empty FormData request body as text`

### 2 × `assert_false: expected false got true`

distinct messages:
- `assert_false: expected false got true`
example test: `fetch/api/request/request-error.any.js :: Request should not get its content-type from the init request if init headers are provided`

### 2 × `assert_regexp_match: expected object <str> but got <str>error\<str>code\<str>message\<str><n>\<str>`

distinct messages:
- `assert_regexp_match: expected object "/THIS-is-A-test: 1, 2/" but got "{\"error\": {\"code\": 404, \"message\": \"404\"}}"`
- `assert_regexp_match: expected object "/THIS-IS-A-TEST: 1, 2/" but got "{\"error\": {\"code\": 404, \"message\": \"404\"}}"`
example test: `fetch/api/basic/request-headers-case.any.js :: Multiple headers with the same name, different case (THIS-is-A-test first)`

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

### 2 × `Cannot read property <str> of undefined`

distinct messages:
- `Cannot read property 'appendChild' of undefined`
example test: `encoding/single-byte-decoder.window.js :: IBM866: 866 (document.characterSet and document.inputEncoding)`

### 2 × `promise_rejects_exactly: CustomTestError should propagate function <str> threw object <str> but we expected it to throw object <str>`

distinct messages:
- `promise_rejects_exactly: CustomTestError should propagate function "function() { throw e; }" threw object "TypeError: Body.formData: Content-Type must be application/x-www-form-urlencoded or multipart/form-data (no Content-Type set)" but we expected it to throw object "Error: Start error"`
- `promise_rejects_exactly: CustomTestError should propagate function "function() { throw e; }" threw object "TypeError: Body.formData: Content-Type must be application/x-www-form-urlencoded or multipart/form-data (no Content-Type set)" but we expected it to throw object "Error: Pull error"`
example test: `fetch/api/response/response-error-from-stream.any.js :: ReadableStream start() Error propagates to Response.formData() Promise`

### 2 × `Test timed out`

distinct messages:
- `Test timed out`
example test: `encoding/single-byte-decoder.window.js :: IBM866: 866 (XMLHttpRequest)`

### 1 × `assert_array_equals: lengths differ, expected array [] length <n>, got [<str>] length <n>`

distinct messages:
- `assert_array_equals: lengths differ, expected array [] length 0, got ["foo=bar"] length 1`
example test: `fetch/api/headers/header-setcookie.any.js :: Set-Cookie is a forbidden response header`

### 1 × `assert_equals: expected (object) null but got (string) <str>`

distinct messages:
- `assert_equals: expected (object) null but got (string) "potato"`
example test: `fetch/api/request/request-headers.any.js :: Check that no-cors request constructor is filtering headers provided as part of request parameter`

### 1 × `assert_equals: Fetch<str>s status is <n> expected <n> but got <n>`

distinct messages:
- `assert_equals: Fetch's response's status is 200 expected 200 but got 404`
example test: `fetch/api/cors/cors-basic.any.js :: Cross domain different protocol [cors mode]`

### 1 × `assert_equals: Opaque filter: status is <n> expected <n> but got <n>`

distinct messages:
- `assert_equals: Opaque filter: status is 0 expected 0 but got 404`
example test: `fetch/api/cors/cors-basic.any.js :: Cross domain different protocol [no-cors mode]`

### 1 × `assert_equals: request's referer should be: http://<n>.<n>:<n>/fetch/api/basic/ expected (string) <str> but got (object) null`

distinct messages:
- `assert_equals: request's referer should be: http://127.0.0.1:41481/fetch/api/basic/ expected (string) "http://127.0.0.1:41481/fetch/api/basic/" but got (object) null`
example test: `fetch/api/basic/request-referrer.any.js :: about:client referrer`

### 1 × `assert_equals: request's referer should be: http://<n>.<n>:<n>/fetch/api/basic/foo expected (string) <str> but got (object) null`

distinct messages:
- `assert_equals: request's referer should be: http://127.0.0.1:41481/fetch/api/basic/foo expected (string) "http://127.0.0.1:41481/fetch/api/basic/foo" but got (object) null`
example test: `fetch/api/basic/request-referrer.any.js :: url referrer`

### 1 × `assert_not_equals: Cloned request has different signal got disallowed value object <str>`

distinct messages:
- `assert_not_equals: Cloned request has different signal got disallowed value object "[object AbortSignal]"`
example test: `fetch/api/abort/general.any.js :: Signal state is cloned`

### 1 × `assert_throws_dom: function <str>val1<str> did not throw`

distinct messages:
- `assert_throws_dom: function "() => xhr.setRequestHeader("val1", val1)" did not throw`
example test: `fetch/api/headers/header-values-normalize.any.js :: XMLHttpRequest with value %00`

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

### 1 × `assert_true: Retrieve body progressively expected true got false`

distinct messages:
- `assert_true: Retrieve body progressively expected true got false`
example test: `fetch/api/basic/stream-response.any.js :: Stream response's body when content-type is present`

### 1 × `assert_true: textStream exists on Response.prototype expected true got false`

distinct messages:
- `assert_true: textStream exists on Response.prototype expected true got false`
example test: `fetch/api/body/textstream.any.js :: textStream method existence`

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

### 1 × `promise_rejects_dom: function <str> threw object <str> that is not a DOMException AbortError: property <str> is equal to undefined, expected <n>`

distinct messages:
- `promise_rejects_dom: function "function() { throw e; }" threw object "TypeError: Body.formData: Content-Type must be application/x-www-form-urlencoded or multipart/form-data (got 'application/json')" that is not a DOMException AbortError: property "code" is equal to undefined, expected 20`
example test: `fetch/api/abort/general.any.js :: response.formData() rejects if already aborted`

### 1 × `ReferenceError: importScripts is not defined at :program (<loc>)`

distinct messages:
- `ReferenceError: importScripts is not defined
    at :program (case.js:5259:1)`
example test: `fetch/fetch-later/basic.https.worker.js :: <file>`

### 1 × `ReferenceError: window is not defined at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `ReferenceError: window is not defined
    at :anonymous (case.js:5337:5)
    at :program (case.js:5259:1)`
example test: `fetch/fetch-later/send-on-deactivate-with-background-sync.https.window.js :: <file>`

### 1 × `ReferenceError: window is not defined at :program (<loc>)`

distinct messages:
- `ReferenceError: window is not defined
    at :program (case.js:5388:1)`
example test: `encoding/streams/realms.window.js :: <file>`

### 1 × `Request constructor: copying a streaming body from an input Request is not yet supported`

distinct messages:
- `Request constructor: copying a streaming body from an input Request is not yet supported`
example test: `fetch/api/request/request-init-stream.any.js :: It is OK to omit duplex when init.body is not given and input.body is given.`

### 1 × `TypeError: Invalid URL at :program (<loc>)`

distinct messages:
- `TypeError: Invalid URL
    at :program (case.js:5315:3)`
example test: `fetch/api/redirect/redirect-back-to-original-origin.any.js :: <file>`

### 1 × `TypeError: sabConstructor is not a constructor at :=> (<loc>) at :=> (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: sabConstructor is not a constructor
    at :=> (case.js:5302:14)
    at :=> (case.js:5318:37)
    at :program (case.js:5315:1)`
example test: `encoding/streams/decode-utf8.any.js :: <file>`
