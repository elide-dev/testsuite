# Impact-ordered failures

## By root-cause signature

### 588 × `promise_test: Unhandled rejection with value: object <str>`

distinct messages:
- `promise_test: Unhandled rejection with value: object "Error fetching /interfaces/encoding.idl."`
- `promise_test: Unhandled rejection with value: object "TypeError: Failed to fetch: subresource-integrity mismatch (sha512 expected D6yns0qxG0E7+TwkevZ4Jt5t7Iy3ugmAajG/dlf6Pado1JqTyneKXICDiqFIkLMRExgtvg8PlxbKTkYfRejSOg, got D6yns0qxG0E7+TwkevZ4Jt5t7Iy3ugmAajG/dlf6Pado1JqTyneKXICDiqFIkLMRExgtvg8PlxbKTk`
- `promise_test: Unhandled rejection with value: object "TypeError: Failed to parse URL: http://{{host}}:{{ports[http][1]}}/fetch/api/basic/../resources/top.txt?pipe=header(Access-Control-Allow-Origin,*) (base http://127.0.0.1:41695/fetch/api/basic/)"`
- `promise_test: Unhandled rejection with value: object "TypeError: Failed to parse URL: https://{{host}}:{{ports[https][0]}}/fetch/api/basic/../resources/top.txt (base http://127.0.0.1:41695/fetch/api/basic/)"`
- `promise_test: Unhandled rejection with value: object "TypeError: Failed to parse URL: http://{{host}}:{{ports[http][0]}}/fetch/api/resources/top.txt?pipe=header(x-is-filtered,value) (base http://127.0.0.1:41695/fetch/api/basic/)"`
example test: `encoding/idlharness.any.js :: idl_test setup`

### 116 × `assert_equals: Response's type is basic expected <str> but got <str>`

distinct messages:
- `assert_equals: Response's type is basic expected "basic" but got "default"`
example test: `fetch/api/basic/accept-header.any.js :: Request through fetch should have 'accept' header with value '*/*'`

### 71 × `sabConstructor is not a constructor`

distinct messages:
- `sabConstructor is not a constructor`
example test: `encoding/encodeInto.any.js :: encodeInto() into SharedArrayBuffer with Hi and destination length 0, offset 0, filler 0`

### 63 × `assert_equals: Check referrer header expected (string) <str> but got (object) null`

distinct messages:
- `assert_equals: Check referrer header expected (string) "http://127.0.0.1:41695/fetch/api/redirect/" but got (object) null`
- `assert_equals: Check referrer header expected (string) "http://127.0.0.1:41695/" but got (object) null`
example test: `fetch/api/redirect/redirect-referrer.any.js :: Same origin redirection, empty init, unsafe-url redirect header `

### 53 × `assert_less_than: Response <n> does not come from cache expected a number less than <n> but got <n>`

distinct messages:
- `assert_less_than: Response 2 does not come from cache expected a number less than 2 but got 2`
- `assert_less_than: Response 3 does not come from cache expected a number less than 3 but got 3`
example test: `fetch/http-cache/partial.any.js :: HTTP cache stores partial content and reuses it`

### 42 × `assert_throws_js: function <str> did not throw`

distinct messages:
- `assert_throws_js: function "function() { var h = new Headers(proxy); }" did not throw`
- `assert_throws_js: function "() => new Response(stream)" did not throw`
- `assert_throws_js: function "function () {
          response.body.getReader();
        }" did not throw`
- `assert_throws_js: function "() => new URL(ʼhttps://${idnaTest.input}/xʼ)" did not throw`
- `assert_throws_js: function "function() {
          new URL(expected.input, base);
        }" did not throw`
example test: `fetch/api/headers/headers-record.any.js :: Basic operation with Symbol keys`

### 36 × `Invalid URL`

distinct messages:
- `Invalid URL`
example test: `url/IdnaTestV2.any.js :: ToASCII("a्‌b")`

### 35 × `assert_equals: Response's status is <n> expected <n> but got <n>`

distinct messages:
- `assert_equals: Response's status is 0 expected 0 but got 301`
- `assert_equals: Response's status is 0 expected 0 but got 302`
- `assert_equals: Response's status is 0 expected 0 but got 303`
- `assert_equals: Response's status is 0 expected 0 but got 307`
- `assert_equals: Response's status is 0 expected 0 but got 308`
example test: `fetch/api/redirect/redirect-mode.any.js :: same-origin redirect 301 in manual redirect and cors mode`

### 31 × `assert_unreached: XHR should not fail Reached unreachable code`

distinct messages:
- `assert_unreached: XHR should not fail Reached unreachable code`
example test: `fetch/api/headers/header-values.any.js :: XMLHttpRequest with all valid values`

### 23 × `assert_equals: expected <n> but got <n>`

distinct messages:
- `assert_equals: expected 5 but got 6`
- `assert_equals: expected 4 but got 5`
- `assert_equals: expected 9 but got 8`
- `assert_equals: expected 1 but got 2`
- `assert_equals: expected 2 but got 4`
example test: `fetch/api/headers/headers-record.any.js :: Correct operation ordering with two properties one of which has an invalid name`

### 17 × `assert_unreached: Should have rejected: undefined Reached unreachable code`

distinct messages:
- `assert_unreached: Should have rejected: undefined Reached unreachable code`
example test: `fetch/api/abort/request.any.js :: Calling arrayBuffer() on an aborted consumed nonempty request`

### 14 × `assert_equals: Response's type basic expected <str> but got <str>`

distinct messages:
- `assert_equals: Response's type basic expected "basic" but got "default"`
example test: `fetch/api/redirect/redirect-method.any.js :: Redirect 301 with GET`

### 14 × `assert_not_equals: Buffer of cloned response stream is a clone of the original buffer got disallowed value object <str>`

distinct messages:
- `assert_not_equals: Buffer of cloned response stream is a clone of the original buffer got disallowed value object "0,0,0,0,0,0,0,0,0,0,0,0,0,0,0"`
- `assert_not_equals: Buffer of cloned response stream is a clone of the original buffer got disallowed value object "0,0"`
- `assert_not_equals: Buffer of cloned response stream is a clone of the original buffer got disallowed value object "0,0,0,0"`
- `assert_not_equals: Buffer of cloned response stream is a clone of the original buffer got disallowed value object "[object ArrayBuffer]"`
- `assert_not_equals: Buffer of cloned response stream is a clone of the original buffer got disallowed value object "0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0"`
example test: `fetch/api/response/response-clone.any.js :: Check response clone use structureClone for teed ReadableStreams (Int8Arraychunk)`

### 12 × `assert_equals: expected <str> but got <str>`

distinct messages:
- `assert_equals: expected "0" but got "42"`
- `assert_equals: expected "0, 0" but got "42"`
- `assert_equals: expected "ok. Request was sent 2 times. 2 connections were created." but got "ok. Request was sent 1 times. 1 connections were created."`
- `assert_equals: expected "mytext/plain" but got "Mytext/Plain"`
- `assert_equals: expected "opaqueredirect" but got "default"`
example test: `fetch/api/basic/header-value-combining.any.js :: response.headers.get('content-length') expects 0`

### 11 × `assert_throws_js: function <str><str> did not throw`

distinct messages:
- `assert_throws_js: function "() => new TextEncoder().encodeInto("", viewInstance)" did not throw`
example test: `encoding/encodeInto.any.js :: Invalid encodeInto() destination: Int8Array, backed by: ArrayBuffer`

### 10 × `assert_array_equals: expected property <n> to be <str> but got <str> (expected array [<str>, <str>] got [<str>, <str>])`

distinct messages:
- `assert_array_equals: expected property 0 to be "arrayBuffer-reject" but got "next-microtask" (expected array ["arrayBuffer-reject", "next-microtask"] got ["next-microtask", "arrayBuffer-reject"])`
- `assert_array_equals: expected property 0 to be "blob-reject" but got "next-microtask" (expected array ["blob-reject", "next-microtask"] got ["next-microtask", "blob-reject"])`
- `assert_array_equals: expected property 0 to be "bytes-reject" but got "next-microtask" (expected array ["bytes-reject", "next-microtask"] got ["next-microtask", "bytes-reject"])`
- `assert_array_equals: expected property 0 to be "json-reject" but got "next-microtask" (expected array ["json-reject", "next-microtask"] got ["next-microtask", "json-reject"])`
- `assert_array_equals: expected property 0 to be "text-reject" but got "next-microtask" (expected array ["text-reject", "next-microtask"] got ["next-microtask", "text-reject"])`
example test: `fetch/api/abort/general.any.js :: response.arrayBuffer() rejects if already aborted`

### 10 × `promise_rejects_js: function <str> threw object <str> (<str>) expected instance of function <str> (<str>)`

distinct messages:
- `promise_rejects_js: function "function() { throw e; }" threw object "AbortError: The operation was aborted" ("AbortError") expected instance of function "function TypeError() { [native code] }" ("TypeError")`
example test: `fetch/api/abort/general.any.js :: TypeError from request constructor takes priority - RequestInit's window is not null`

### 8 × `assert_equals: Response <n> status is <n>, not <n> expected <n> but got <n>`

distinct messages:
- `assert_equals: Response 2 status is 999, not 200 expected 200 but got 999`
- `assert_equals: Response 1 status is 200, not 504 expected 504 but got 200`
example test: `fetch/http-cache/304-update.any.js :: HTTP cache updates returned headers from a Last-Modified 304`

### 7 × `assert_equals: expected (string) <str> but got (object) null`

distinct messages:
- `assert_equals: expected (string) "304" but got (object) null`
- `assert_equals: expected (string) ", " but got (object) null`
- `assert_equals: expected (string) "1, 2, 3" but got (object) null`
- `assert_equals: expected (string) ", \v\f, 1, , , 2" but got (object) null`
- `assert_equals: expected (string) "1, 2, 3, 4" but got (object) null`
example test: `fetch/api/basic/conditional-get.any.js :: Testing conditional GET with ETags`

### 7 × `Request constructor: failed to parse URL <str>`

distinct messages:
- `Request constructor: failed to parse URL 'http://{{host}}:{{ports[http][1]}}/fetch/api/cors/../resource...'`
example test: `fetch/api/cors/cors-filtering.sub.any.js :: CORS filter on Age header, header is exposed`

### 5 × `assert_equals: Response is opaque expected <str> but got <str>`

distinct messages:
- `assert_equals: Response is opaque expected "opaque" but got "default"`
example test: `fetch/api/redirect/redirect-mode.any.js :: cross-origin redirect 301 in follow redirect and no-cors mode`

### 4 × `assert_equals: response type is basic expected <str> but got <str>`

distinct messages:
- `assert_equals: response type is basic expected "basic" but got "default"`
example test: `fetch/api/basic/mode-same-origin.any.js :: Fetch ../resources/top.txt with same-origin mode`

### 3 × `assert_array_equals: lengths differ, expected array [<str>, object <str>, <str>, object <str>] length <n>, got [<str>, object <str>, <str>] length <n>`

distinct messages:
- `assert_array_equals: lengths differ, expected array ["get", object "[object Object]", "a", object "[object Object]"] length 4, got ["getOwnPropertyDescriptor", object "[object Object]", "c"] length 3`
- `assert_array_equals: lengths differ, expected array ["get", object "[object Object]", "c", object "[object Object]"] length 4, got ["getOwnPropertyDescriptor", object "[object Object]", "e"] length 3`
example test: `fetch/api/headers/headers-record.any.js :: Correct operation ordering with two properties`

### 3 × `assert_equals: Request's referrer is correct expected (string) <str> but got (object) null`

distinct messages:
- `assert_equals: Request's referrer is correct expected (string) "http://127.0.0.1:41695/fetch/api/basic/" but got (object) null`
- `assert_equals: Request's referrer is correct expected (string) "http://127.0.0.1:41695/" but got (object) null`
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

### 3 × `promise_rejects_dom: function <str> threw object <str> that is not a DOMException AbortError: property <str> is equal to undefined, expected <n>`

distinct messages:
- `promise_rejects_dom: function "function() { throw e; }" threw object "TypeError: Body.formData: Content-Type must be application/x-www-form-urlencoded or multipart/form-data (got 'application/json')" that is not a DOMException AbortError: property "code" is equal to undefined, expected 20`
- `promise_rejects_dom: function "function() { throw e; }" threw object "TypeError: Body has already been consumed" that is not a DOMException AbortError: property "code" is equal to undefined, expected 20`
- `promise_rejects_dom: function "function() { throw e; }" threw object "TypeError: Body.formData: Content-Type must be application/x-www-form-urlencoded or multipart/form-data (got 'text/plain')" that is not a DOMException AbortError: property "code" is equal to undefined, expected 20`
example test: `fetch/api/abort/general.any.js :: response.formData() rejects if already aborted`

### 3 × `SyntaxError: <loc> Expected ident but found { <str>: {{ports[http][<n>]}}, ^ <loc> Expected eof but found } <str>: {{ports[http][<n>]}}, ^`

distinct messages:
- `SyntaxError: case.js:8371:17 Expected ident but found {     "loopback": {{ports[http][0]}},                  ^ case.js:8371:33 Expected eof but found }     "loopback": {{ports[http][0]}},                                  ^`
- `SyntaxError: case.js:5585:17 Expected ident but found {     "loopback": {{ports[http][0]}},                  ^ case.js:5585:33 Expected eof but found }     "loopback": {{ports[http][0]}},                                  ^`
example test: `fetch/local-network-access/iframe.tentative.https.window.js :: <file>`

### 3 × `TypeError: meta.setAttribute is not a function at :program (<loc>)`

distinct messages:
- `TypeError: meta.setAttribute is not a function
    at :program (case.js:5877:1)`
- `TypeError: meta.setAttribute is not a function
    at :program (case.js:5879:1)`
example test: `fetch/fetch-later/policies/csp-allowed.https.window.js :: <file>`

### 2 × `assert_equals: request <n> header cache-control value is <str>, not <str> expected (string) <str> but got (undefined) undefined`

distinct messages:
- `assert_equals: request 1 header cache-control value is "undefined", not "max-age=0" expected (string) "max-age=0" but got (undefined) undefined`
- `assert_equals: request 1 header cache-control value is "undefined", not "no-cache" expected (string) "no-cache" but got (undefined) undefined`
example test: `fetch/http-cache/cache-mode.any.js :: Fetch sends Cache-Control: max-age=0 when cache mode is no-cache`

### 2 × `assert_equals: Resolved value should be empty expected <n> but got <n>`

distinct messages:
- `assert_equals: Resolved value should be empty expected 0 but got 62`
example test: `fetch/api/request/request-consume-empty.any.js :: Consume empty FormData request body as text`

### 2 × `assert_equals: Response <n> header Server-Request-Count is <str>, not <str> expected <str> but got <str>`

distinct messages:
- `assert_equals: Response 2 header Server-Request-Count is "2", not "1" expected "1" but got "2"`
example test: `fetch/http-cache/credentials.tentative.any.js :: same-origin: 2xAnonymous, 2xCredentialled, 1xAnonymous`

### 2 × `assert_false: expected false got true`

distinct messages:
- `assert_false: expected false got true`
example test: `fetch/api/request/request-error.any.js :: Request should not get its content-type from the init request if init headers are provided`

### 2 × `assert_regexp_match: expected object <str> but got <str>error\<str>code\<str>message\<str><n>\<str>`

distinct messages:
- `assert_regexp_match: expected object "/THIS-is-A-test: 1, 2/" but got "{\"error\": {\"code\": 404, \"message\": \"404\"}}"`
- `assert_regexp_match: expected object "/THIS-IS-A-TEST: 1, 2/" but got "{\"error\": {\"code\": 404, \"message\": \"404\"}}"`
example test: `fetch/api/basic/request-headers-case.any.js :: Multiple headers with the same name, different case (THIS-is-A-test first)`

### 2 × `assert_true: bodyUsed should be true expected true got false`

distinct messages:
- `assert_true: bodyUsed should be true expected true got false`
example test: `fetch/api/response/response-stream-disturbed-by-pipe.any.js :: using pipeTo on Response body should disturb it synchronously`

### 2 × `assert_true: fetch should have been an error expected true got false`

distinct messages:
- `assert_true: fetch should have been an error expected true got false`
example test: `fetch/api/request/request-cache-only-if-cached.any.js :: RequestCache "only-if-cached" mode checks the cache for previously cached content and does not go to the network if a cached response is not found with Etag and fresh response`

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

### 1 × `assert_equals: Expect identity accept-encoding if range header is <str> expected <str> but got <str>`

distinct messages:
- `assert_equals: Expect identity accept-encoding if range header is "bytes=0-10" expected "identity" but got ""`
example test: `fetch/range/general.any.js :: Fetch with range header will be sent with Accept-Encoding: identity`

### 1 × `assert_equals: expected (object) null but got (string) <str>`

distinct messages:
- `assert_equals: expected (object) null but got (string) "potato"`
example test: `fetch/api/request/request-headers.any.js :: Check that no-cors request constructor is filtering headers provided as part of request parameter`

### 1 × `assert_equals: href expected <str> but got <str>`

distinct messages:
- `assert_equals: href expected "http://example.com/%EF%BF%BD%F0%90%9F%BE%EF%BF%BD%EF%B7%90%EF%B7%8F%EF%B7%AF%EF%B7%B0%EF%BF%BE%EF%BF%BF?%EF%BF%BD%F0%90%9F%BE%EF%BF%BD%EF%B7%90%EF%B7%8F%EF%B7%AF%EF%B7%B0%EF%BF%BE%EF%BF%BF" but got "http://example.com/?%F0%90%9F%BE?%EF%B7%90%EF%B7%8F%EF%B7%AF%EF%B7%B0%E`
example test: `url/url-constructor.any.js :: Parsing: <http://example.com/U+d800𐟾U+dfff﷐﷏﷯ﷰ￾￿?U+d800𐟾U+dfff﷐﷏﷯ﷰ￾￿> without base`

### 1 × `assert_equals: request <n> header range value is <str>, not <str> expected (string) <str> but got (undefined) undefined`

distinct messages:
- `assert_equals: request 2 header range value is "undefined", not "bytes=5-" expected (string) "bytes=5-" but got (undefined) undefined`
example test: `fetch/http-cache/partial.any.js :: HTTP cache stores partial content and completes it`

### 1 × `assert_equals: request's referer should be: http://<n>.<n>:<n>/fetch/api/basic/ expected (string) <str> but got (object) null`

distinct messages:
- `assert_equals: request's referer should be: http://127.0.0.1:41695/fetch/api/basic/ expected (string) "http://127.0.0.1:41695/fetch/api/basic/" but got (object) null`
example test: `fetch/api/basic/request-referrer.any.js :: about:client referrer`

### 1 × `assert_equals: request's referer should be: http://<n>.<n>:<n>/fetch/api/basic/foo expected (string) <str> but got (object) null`

distinct messages:
- `assert_equals: request's referer should be: http://127.0.0.1:41695/fetch/api/basic/foo expected (string) "http://127.0.0.1:41695/fetch/api/basic/foo" but got (object) null`
example test: `fetch/api/basic/request-referrer.any.js :: url referrer`

### 1 × `assert_equals: searchParams expected <str> but got <str>`

distinct messages:
- `assert_equals: searchParams expected "%3Fa=b&c=d" but got "a=b&c=d"`
example test: `url/url-constructor.any.js :: Parsing: <??a=b&c=d> against <http://example.org/foo/bar>`

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

### 1 × `assert_throws_js: Constructing a URLSearchParams from DOMException.prototype should throw due to branding checks function <str> did not throw`

distinct messages:
- `assert_throws_js: Constructing a URLSearchParams from DOMException.prototype should throw due to branding checks function "() => new URLSearchParams(DOMException.prototype)" did not throw`
example test: `url/urlsearchparams-constructor.any.js :: URLSearchParams constructor, DOMException as argument`

### 1 × `assert_throws_js: Expect TypeError exception function <str> did not throw`

distinct messages:
- `assert_throws_js: Expect TypeError exception function "() => new Request(...args)" did not throw`
example test: `fetch/api/request/request-error.any.js :: RequestInit's mode is no-cors and method is not simple`

### 1 × `assert_throws_js: function <str>name<str>value<str> did not throw`

distinct messages:
- `assert_throws_js: function "() => { response.headers.append("name", "value"); }" did not throw`
example test: `fetch/api/response/response-headers-guard.any.js :: Ensure response headers are immutable`

### 1 × `assert_true: Body has been used expected true got false`

distinct messages:
- `assert_true: Body has been used expected true got false`
example test: `fetch/api/abort/general.any.js :: Request is still 'used' if signal is aborted before fetching`

### 1 × `assert_true: bodyUsed is true when request is disturbed expected true got false`

distinct messages:
- `assert_true: bodyUsed is true when request is disturbed expected true got false`
example test: `fetch/api/request/request-disturbed.any.js :: Input request used for creating new request became disturbed even if body is not used`

### 1 × `assert_true: Cancel called sync expected true got false`

distinct messages:
- `assert_true: Cancel called sync expected true got false`
example test: `fetch/api/abort/general.any.js :: Readable stream synchronously cancels with AbortError if aborted before reading`

### 1 × `assert_true: http://<n>.<n>:<n>/fetch/api/resources/top.txt?%C3%A2%C2%<n>%C2%<n> ends with top.txt?%E2%<n>%<n> expected true got false`

distinct messages:
- `assert_true: http://127.0.0.1:41695/fetch/api/resources/top.txt?%C3%A2%C2%98%C2%83 ends with top.txt?%E2%98%83 expected true got false`
example test: `fetch/api/redirect/redirect-location-escape.tentative.any.js :: Redirect to unescaped UTF-8`

### 1 × `assert_true: http://<n>.<n>:<n>/fetch/api/resources/top.txt?%C3%A2%C2%<n>%C2%<n>%e2%<n>%<n> ends with top.txt?%E2%<n>%<n>%e2%<n>%<n> expected true got false`

distinct messages:
- `assert_true: http://127.0.0.1:41695/fetch/api/resources/top.txt?%C3%A2%C2%98%C2%83%e2%98%83 ends with top.txt?%E2%98%83%e2%98%83 expected true got false`
example test: `fetch/api/redirect/redirect-location-escape.tentative.any.js :: Redirect to escaped and unescaped UTF-8`

### 1 × `assert_true: http://<n>.<n>:<n>/fetch/api/resources/top.txt?%C3%BF ends with top.txt?%FF expected true got false`

distinct messages:
- `assert_true: http://127.0.0.1:41695/fetch/api/resources/top.txt?%C3%BF ends with top.txt?%FF expected true got false`
example test: `fetch/api/redirect/redirect-location-escape.tentative.any.js :: Redirect to invalid UTF-8`

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

### 1 × `TypeError: Invalid URL at :program (<loc>)`

distinct messages:
- `TypeError: Invalid URL
    at :program (case.js:5317:3)`
example test: `fetch/api/redirect/redirect-back-to-original-origin.any.js :: <file>`

### 1 × `TypeError: sabConstructor is not a constructor at :=> (<loc>) at :=> (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: sabConstructor is not a constructor
    at :=> (case.js:5302:14)
    at :=> (case.js:5318:37)
    at :program (case.js:5315:1)`
example test: `encoding/streams/decode-utf8.any.js :: <file>`
