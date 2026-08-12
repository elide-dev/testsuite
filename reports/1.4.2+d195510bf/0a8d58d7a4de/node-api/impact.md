# Impact-ordered failures

## By root-cause signature

### 75 × `Node API test timed out`

distinct messages:
- `Node API test timed out`
example test: `test/parallel/test-async-hooks-execution-async-resource-await.js`

### 20 × `AssertionError: Expected values to be strictly equal: <n> !== <n> at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Expected values to be strictly equal:  2 !== 3
    at :anonymous (test-buffer-bytelength.js:101:1)
    at :program (test-buffer-bytelength.js:1:1)`
- `AssertionError: Expected values to be strictly equal:  8 !== 0
    at :anonymous (test-buffer-copy-immutable.js:19:3)
    at :program (test-buffer-copy-immutable.js:1:1)`
- `AssertionError: Expected values to be strictly equal:  1 !== 0
    at :anonymous (test-buffer-write.js:78:3)
    at :program (test-buffer-write.js:1:1)`
- `AssertionError: Expected values to be strictly equal:  1 !== 2
    at :anonymous (test-fs-realpath-pipe.js:38:3)
    at :program (test-fs-realpath-pipe.js:1:1)`
- `AssertionError: Expected values to be strictly equal:  0 !== 10
    at :anonymous (test-http-max-header-size.js:11:1)
    at :program (test-http-max-header-size.js:1:1)`
example test: `test/parallel/test-buffer-bytelength.js`

### 16 × `AssertionError: Expected values to be strictly equal: + actual - expected + <str> - <str> at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Expected values to be strictly equal: + actual - expected  + '/opt/elide/bin/elide' - 'withArgv0'
    at :anonymous (test-child-process-spawn-argv0.js:18:1)
    at :program (test-child-process-spawn-argv0.js:1:1)`
- `AssertionError: Expected values to be strictly equal: + actual - expected  + 'Hello 42\n' - 'Hello [33m42[39m\n'
    at :anonymous (test-console-tty-colors-per-stream.js:22:1)
    at :program (test-console-tty-colors-per-stream.js:1:1)`
- `AssertionError: Expected values to be strictly equal: + actual - expected  + 'undefined' - 'function'
    at :anonymous (test-eventsource.js:7:1)
    at :program (test-eventsource.js:1:1)`
- `AssertionError: Expected values to be strictly equal: + actual - expected  + '/work/.harness/work/node-api/node-api-overlay/test/fixtures' - '眯牯⽫栮牡敮獳眯牯⽫潮敤愭楰港摯ⵥ灡⵩癯牥慬⽹整瑳是硩畴敲�'
    at :anonymous (test-fs-realpath-buffer-encoding.js:25:3)
    at :program (test-fs-realpath-buffer-encoding.js:1:1)`
- `AssertionError: Expected values to be strictly equal: + actual - expected  + 'localhost::' - 'localhost:8080:127.0.0.1'
    at :anonymous (test-http-addrequest-localaddress.js:22:1)
    at :program (test-http-addrequest-localaddress.js:1:1)`
example test: `test/parallel/test-child-process-spawn-argv0.js`

### 16 × `Mismatched <anonymous> function calls. Expected exactly <n>, actual <n>. at Proxy.mustCall (<loc>) at <loc> at <loc>`

distinct messages:
- `Mismatched <anonymous> function calls. Expected exactly 1, actual 0.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at test-child-process-internal.js:46:40
    at test-child-process-internal.js:1:1`
- `Mismatched <anonymous> function calls. Expected exactly 1, actual 0.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at test-diagnostics-channel-worker-threads.js:7:39
    at test-diagnostics-channel-worker-threads.js:1:1`
- `Mismatched <anonymous> function calls. Expected exactly 1, actual 0.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at test-fs-options-immutable.js:67:57
    at test-fs-options-immutable.js:1:1`
- `Mismatched <anonymous> function calls. Expected exactly 2, actual 0.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at test-http-outgoing-message-inheritance.js:21:17
    at test-http-outgoing-message-inheritance.js:1:1`
- `Mismatched <anonymous> function calls. Expected exactly 1, actual 2.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at test-http-parser-freed-during-execute.js:9:36
    at test-http-parser-freed-during-execute.js:1:1`
example test: `test/parallel/test-child-process-internal.js`

### 12 × `AssertionError: Missing expected exception. at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Missing expected exception.
    at :anonymous (test-buffer-concat.js:76:1)
    at :program (test-buffer-concat.js:1:1)`
- `AssertionError: Missing expected exception.
    at :anonymous (test-child-process-advanced-serialization.js:10:5)
    at :program (test-child-process-advanced-serialization.js:1:1)`
- `AssertionError: Missing expected exception.
    at :anonymous (test-child-process-uid-gid.js:11:3)
    at :program (test-child-process-uid-gid.js:1:1)`
- `AssertionError: Missing expected exception.
    at :anonymous (test-dns-setserver-when-querying.js:17:5)
    at :program (test-dns-setserver-when-querying.js:1:1)`
- `AssertionError: Missing expected exception.
    at :anonymous (test-fs-copyfile-respect-permissions.js:43:3)
    at :program (test-fs-copyfile-respect-permissions.js:1:1)`
example test: `test/parallel/test-buffer-concat.js`

### 10 × `TypeError: Cannot load module: <str> at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: Cannot load module: 'internal/test/binding'
    at :anonymous (test-fs-access.js:17:29)
    at :program (test-fs-access.js:1:1)`
- `TypeError: Cannot load module: 'internal/js_stream_socket'
    at :anonymous (test-http-agent-domain-reused-gc.js:40:24)
    at :program (test-http-agent-domain-reused-gc.js:1:1)`
- `TypeError: Cannot load module: '/work/.harness/work/node-api/node-test/.tmp.1922/test-module-cache.json'
    at :anonymous (test-module-cache.js:16:17)
    at :program (test-module-cache.js:1:1)`
- `TypeError: Cannot load module: '/work/.harness/work/node-api/node-test/.tmp.1925/index'
    at :anonymous (test-module-circular-symlinks.js:64:13)
    at :program (test-module-circular-symlinks.js:1:1)`
- `TypeError: Cannot load module: '../fixtures/packages/missing-main'
    at :anonymous (test-module-loading-deprecated.js:10:20)
    at :program (test-module-loading-deprecated.js:1:1)`
example test: `test/parallel/test-fs-access.js`

### 9 × `AssertionError: Missing expected exception (TypeError). at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Missing expected exception (TypeError).
    at :anonymous (test-child-process-execFile-promisified-abortController.js:44:3)
    at :program (test-child-process-execFile-promisified-abortController.js:1:1)`
- `AssertionError: Missing expected exception (TypeError).
    at :anonymous (test-child-process-reject-null-bytes.js:130:1)
    at :program (test-child-process-reject-null-bytes.js:1:1)`
- `AssertionError: Missing expected exception (TypeError).
    at :anonymous (test-child-process-spawn-typeerror.js:72:1)
    at :program (test-child-process-spawn-typeerror.js:1:1)`
- `AssertionError: Missing expected exception (TypeError).
    at :anonymous (test-console-count.js:60:1)
    at :program (test-console-count.js:1:1)`
- `AssertionError: Missing expected exception (TypeError).
    at :anonymous (test-net-server-listen-options-signal.js:9:3)
    at :program (test-net-server-listen-options-signal.js:1:1)`
example test: `test/parallel/test-child-process-execFile-promisified-abortController.js`

### 9 × `TypeError: Cannot read property <str> of undefined at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: Cannot read property 'triggerId' of undefined
    at :anonymous (test-async-hooks-promise.js:28:20)
    at :program (test-async-hooks-promise.js:1:1)`
- `TypeError: Cannot read property 'aborted' of undefined
    at :anonymous (test-http-request-signal.js:28:22)
    at :program (test-http-request-signal.js:1:1)`
- `TypeError: Cannot read property 'finally' of undefined
    at :anonymous (test-perf-hooks-timerify-basic.js:25:1)
    at :program (test-perf-hooks-timerify-basic.js:1:1)`
- `TypeError: Cannot read property 'name' of undefined
    at :anonymous (test-performance-nodetiming.js:9:20)
    at :program (test-performance-nodetiming.js:1:1)`
- `TypeError: Cannot read property 'on' of undefined
    at :anonymous (test-stream-compose.js:17:3)
    at :program (test-stream-compose.js:1:1)`
example test: `test/parallel/test-async-hooks-promise.js`

### 8 × `Mismatched noop function calls. Expected exactly <n>, actual <n>. at Proxy.mustCall (<loc>) at <loc> at <loc>`

distinct messages:
- `Mismatched noop function calls. Expected exactly 1, actual 0.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at test-async-hooks-enable-disable.js:7:16
    at test-async-hooks-enable-disable.js:1:1`
- `Mismatched noop function calls. Expected exactly 1, actual 0.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at test-child-process-destroy.js:7:29
    at test-child-process-destroy.js:1:1`
- `Mismatched noop function calls. Expected exactly 1, actual 0.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at test-dns-lookupService-promises.js:19:15
    at test-dns-lookupService-promises.js:1:1`
- `Mismatched noop function calls. Expected exactly 1, actual 0.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at test-readline-async-iterators-destroy.js:89:57
    at test-readline-async-iterators-destroy.js:1:1`
- `Mismatched noop function calls. Expected exactly 1, actual 0.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at test-readline-async-iterators.js:145:16
    at test-readline-async-iterators.js:1:1`
example test: `test/parallel/test-async-hooks-enable-disable.js`

### 7 × `AssertionError: Expected values to be strictly deep-equal: + actual - expected Comparison { + message: <str>, - code: <str>, - message: <str>, name: <str> } at `

distinct messages:
- `AssertionError: Expected values to be strictly deep-equal:
+ actual - expected

  Comparison {
+   message: 'agent.addRequest is not a function',
-   code: 'ERR_INVALID_ARG_TYPE',
-   message: 'The "options.agent" property must be one of Agent-like Object, undefined, or false. Received type boolean `
- `AssertionError: Expected values to be strictly deep-equal: + actual - expected    Comparison { +   message: '(intermediate value).execve is not a function', -   code: 'ERR_INVALID_ARG_TYPE', -   message: 'The "execPath" argument must be of type string. Received type number (123)',     name: 'TypeErr`
- `AssertionError: Expected values to be strictly deep-equal: + actual - expected    Comparison { +   message: '(intermediate value).initgroups is not a function', -   code: 'ERR_INVALID_ARG_TYPE', -   message: 'The "user" argument must be one of type number or string. Received undefined',     name: 'T`
- `AssertionError: Expected values to be strictly deep-equal: + actual - expected    Comparison { +   message: '(intermediate value).kill is not a function', -   code: 'ERR_INVALID_ARG_TYPE', -   message: ʼThe "pid" argument must be of type number. Received type string ('SIGTERM')ʼ,     name: 'TypeErro`
- `AssertionError: Expected values to be strictly deep-equal: + actual - expected    Comparison { +   message: '(intermediate value).setgroups is not a function', -   code: 'ERR_INVALID_ARG_TYPE', -   message: 'The "groups" argument must be an instance of Array. Received undefined',     name: 'TypeErro`
example test: `test/parallel/test-http-client-reject-unexpected-agent.js`

### 7 × `AssertionError: Expected values to be strictly deep-equal: + actual - expected Comparison { code: <str>, + message: <str>, - message: <str>, name: <str> } at :a`

distinct messages:
- `AssertionError: Expected values to be strictly deep-equal: + actual - expected    Comparison {     code: 'ERR_INVALID_ARG_TYPE', +   message: 'The "target" argument must be an instance of Buffer or Uint8Array.', -   message: ʼThe "target" argument must be an instance of Buffer or Uint8Array. Receive`
- `AssertionError: Expected values to be strictly deep-equal: + actual - expected    Comparison {     code: 'ERR_UNHANDLED_ERROR', +   message: 'Unhandled error. (Accepts a string)', -   message: "Unhandled error. ('Accepts a string')",     name: 'Error'   }
    at :anonymous (test-event-emitter-errors`
- `AssertionError: Expected values to be strictly deep-equal: + actual - expected    Comparison {     code: 'ERR_OUT_OF_RANGE', +   message: 'The value of "start" is out of range. It must be <= "end". Received 10', -   message: 'The value of "start" is out of range. It must be <= "end" (here: 2). Recei`
- `AssertionError: Expected values to be strictly deep-equal: + actual - expected    Comparison {     code: 'ERR_INVALID_ARG_TYPE', +   message: 'The "source" argument must be an instance of Buffer or Uint8Array.', -   message: 'The "source" argument must be an instance of Buffer or Uint8Array. Receive`
- `AssertionError: Expected values to be strictly deep-equal: + actual - expected    Comparison {     code: 'ERR_INVALID_ARG_TYPE', +   message: 'The "fn" argument must be of type function. Received number', -   message: 'The "fn" argument must be of type function or null. Received type number (42)',  `
example test: `test/parallel/test-buffer-compare.js`

### 7 × `AssertionError: function should not have been called at <loc> called with arguments: IncomingMessage [Readable] { socket: <ref *<n>> Socket [Duplex] { _handle: `

distinct messages:
- `AssertionError: function should not have been called at test-http-double-content-length.js:10
called with arguments: IncomingMessage [Readable] {
  socket: <ref *1> Socket [Duplex] {
    _handle: {},
    _allowHalfOpen: true,
    connecting: false,
    _connected: true,
    _readableEnded: false,
  `
- `AssertionError: function should not have been called at test-http-highwatermark.js:11
called with arguments: IncomingMessage [Readable] {
  socket: <ref *1> Socket [Duplex] {
    _handle: {},
    _allowHalfOpen: true,
    connecting: false,
    _connected: true,
    _readableEnded: false,
    _writa`
- `AssertionError: function should not have been called at test-http-invalid-te.js:27
called with arguments: IncomingMessage [Readable] {
  socket: <ref *1> Socket [Duplex] {
    _handle: {},
    _allowHalfOpen: true,
    connecting: false,
    _connected: true,
    _readableEnded: false,
    _writable`
- `AssertionError: function should not have been called at test-http-missing-header-separator-cr.js:44
called with arguments: IncomingMessage [Readable] {
  socket: <ref *1> Socket [Duplex] {
    _handle: {},
    _allowHalfOpen: true,
    connecting: false,
    _connected: true,
    _readableEnded: fal`
- `AssertionError: function should not have been called at test-http-missing-header-separator-lf.js:44
called with arguments: IncomingMessage [Readable] {
  socket: <ref *1> Socket [Duplex] {
    _handle: {},
    _allowHalfOpen: true,
    connecting: false,
    _connected: true,
    _readableEnded: fal`
example test: `test/parallel/test-http-double-content-length.js`

### 7 × `TypeError: Cannot read property <str> of null at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: Cannot read property 'setEncoding' of null
    at :anonymous (test-process-exec-argv.js:55:7)
    at :program (test-process-exec-argv.js:1:1)`
- `TypeError: Cannot read property 'on' of null
    at :anonymous (test-worker-execargv.js:16:3)
    at :program (test-worker-execargv.js:1:1)`
- `TypeError: Cannot read property 'on' of null
    at :anonymous (test-worker-message-port-drain.js:25:5)
    at :program (test-worker-message-port-drain.js:1:1)`
- `TypeError: Cannot read property 'on' of null
    at :anonymous (test-worker-no-stdin-stdout-interaction.js:13:3)
    at :program (test-worker-no-stdin-stdout-interaction.js:1:1)`
- `TypeError: Cannot read property 'setEncoding' of null
    at :anonymous (test-worker-stdio-flush-inflight.js:11:3)
    at :program (test-worker-stdio-flush-inflight.js:1:1)`
example test: `test/parallel/test-process-exec-argv.js`

### 6 × `AssertionError: Expected values to be strictly deep-equal: + actual - expected + Comparison {} - Comparison { - code: <str> - } at :anonymous (<loc>) at :progra`

distinct messages:
- `AssertionError: Expected values to be strictly deep-equal: + actual - expected  + Comparison {} - Comparison { -   code: 'ERR_MISSING_ARGS' - }
    at :anonymous (test-fs-read.js:69:1)
    at :program (test-fs-read.js:1:1)`
- `AssertionError: Expected values to be strictly deep-equal: + actual - expected  + Comparison {} - Comparison { -   code: 'MODULE_NOT_FOUND' - }
    at :anonymous (test-require-invalid-package.js:7:1)
    at :program (test-require-invalid-package.js:1:1)`
- `AssertionError: Expected values to be strictly deep-equal: + actual - expected  + Comparison {} - Comparison { -   code: 'ERR_ILLEGAL_CONSTRUCTOR' - }
    at :anonymous (test-perf-hooks-resourcetiming.js:15:1)
    at :program (test-perf-hooks-resourcetiming.js:1:1)`
- `AssertionError: Expected values to be strictly deep-equal: + actual - expected  + Comparison {} - Comparison { -   code: 'ERR_INVALID_ARG_TYPE' - }
    at :anonymous (test-stream-end-of-streams.js:7:1)
    at :program (test-stream-end-of-streams.js:1:1)`
- `AssertionError: Expected values to be strictly deep-equal: + actual - expected  + Comparison {} - Comparison { -   code: 'ERR_INVALID_ARG_TYPE' - }
    at :anonymous (test-v8-heap-profile.js:7:1)
    at :program (test-v8-heap-profile.js:1:1)`
example test: `test/parallel/test-fs-read.js`

### 6 × `Mismatched <anonymous> function calls. Expected exactly <n>, actual <n>. at mustCall (<loc>) at _expectWarning (<loc>) at Proxy.expectWarning (<loc>) at <loc> a`

distinct messages:
- `Mismatched <anonymous> function calls. Expected exactly 1, actual 0.
    at mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at _expectWarning (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:750:10)
    at Proxy.expectWarning (/work/.harnes`
- `Mismatched <anonymous> function calls. Expected exactly 1, actual 0.
    at mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at _expectWarning (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:750:10)
    at Proxy.expectWarning (/work/.harnes`
- `Mismatched <anonymous> function calls. Expected exactly 1, actual 0.
    at mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at _expectWarning (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:750:10)
    at Proxy.expectWarning (/work/.harnes`
- `Mismatched <anonymous> function calls. Expected exactly 1, actual 0.
    at mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at _expectWarning (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:750:10)
    at Proxy.expectWarning (/work/.harnes`
- `Mismatched <anonymous> function calls. Expected exactly 1, actual 0.
    at mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at _expectWarning (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:750:10)
    at Proxy.expectWarning (/work/.harnes`
example test: `test/parallel/test-fs-exists.js`

### 6 × `Mismatched <anonymous> function calls. Expected exactly <n>, actual <n>. at Proxy.mustCall (<loc>) at EventEmitter.<anonymous> (<loc>) at EventEmitter._return (`

distinct messages:
- `Mismatched <anonymous> function calls. Expected exactly 1, actual 0.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at EventEmitter.<anonymous> (test-diagnostics-channel-net.js:77:28)
    at EventEmitter._return (/work/.harness/work/node-api/nod`
- `Mismatched <anonymous> function calls. Expected exactly 1, actual 2.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at EventEmitter.<anonymous> (test-http-client-timeout-event.js:48:28)
    at EventEmitter._return (/work/.harness/work/node-api/n`
- `Mismatched <anonymous> function calls. Expected exactly 3, actual 0.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at EventEmitter.<anonymous> (test-http-keepalive-override.js:21:34)
    at EventEmitter._return (/work/.harness/work/node-api/nod`
- `Mismatched <anonymous> function calls. Expected exactly 5, actual 3.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at EventEmitter.<anonymous> (test-http-response-cork.js:9:29)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-`
- `Mismatched <anonymous> function calls. Expected exactly 1, actual 0.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at EventEmitter.<anonymous> (test-net-connect-keepalive.js:23:44)
    at EventEmitter._return (/work/.harness/work/node-api/node-`
example test: `test/parallel/test-diagnostics-channel-net.js`

### 4 × `AssertionError: Expected values to be strictly deep-equal: + actual - expected Comparison { - code: <str>, name: <str> } at :anonymous (<loc>) at :program (<loc`

distinct messages:
- `AssertionError: Expected values to be strictly deep-equal: + actual - expected    Comparison { -   code: 'ERR_INVALID_ARG_TYPE',     name: 'TypeError'   }
    at :anonymous (test-buffer-copy.js:133:1)
    at :program (test-buffer-copy.js:1:1)`
- `AssertionError: Expected values to be strictly deep-equal: + actual - expected    Comparison { -   code: 'ERR_INVALID_ARG_TYPE',     name: 'TypeError'   }
    at :anonymous (test-dgram-close-signal.js:9:3)
    at :program (test-dgram-close-signal.js:1:1)`
- `AssertionError: Expected values to be strictly deep-equal: + actual - expected    Comparison { -   code: 'ERR_CONSTRUCT_CALL_REQUIRED',     name: 'TypeError'   }
    at :anonymous (test-urlpattern-types.js:9:1)
    at :program (test-urlpattern-types.js:1:1)`
- `AssertionError: Expected values to be strictly deep-equal: + actual - expected    Comparison { -   code: 'ERR_ENCODING_INVALID_ENCODED_DATA',     name: 'TypeError'   }
    at :anonymous (test-whatwg-encoding-custom-textdecoder-utf16-surrogates.js:47:3)
    at :program (test-whatwg-encoding-custom-te`
example test: `test/parallel/test-buffer-copy.js`

### 4 × `AssertionError: Expected values to be strictly equal: + actual - expected + <str> - <str> at EventEmitter.<anonymous> (<loc>) at EventEmitter._return (<loc>) at`

distinct messages:
- `AssertionError: Expected values to be strictly equal:
+ actual - expected

+ "EADDRINUSE: address already in use, udp-bind '1.1.1.1:0' (errno=98)"
- 'bind EADDRNOTAVAIL 1.1.1.1'

    at EventEmitter.<anonymous> (test-dgram-error-message-address.js:34:10)
    at EventEmitter._return (/work/.harness/w`
- `AssertionError: Expected values to be strictly equal:
+ actual - expected

+ 'foo:1234'
- 'foo:1234:80'

    at EventEmitter.<anonymous> (test-http-host-header-ipv6-fail.js:30:10)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmit`
- `AssertionError: Expected values to be strictly equal:
+ actual - expected

+ 'ERR_HTTP_INVALID_HEADER_VALUE'
- 'ERR_INVALID_ARG_VALUE'

    at EventEmitter.<anonymous> (test-http-write-head-2.js:49:14)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:57`
- `AssertionError: Expected values to be strictly equal:
+ actual - expected

+ 'ArrayBuffer'
- 'SharedArrayBuffer'

    at EventEmitter.<anonymous> (test-worker-sharedarraybuffer-from-worker-thread.js:23:12)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.j`
example test: `test/parallel/test-dgram-error-message-address.js`

### 4 × `AssertionError: Expected values to be strictly equal: + actual - expected + undefined - <str> at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Expected values to be strictly equal: + actual - expected  + undefined - 'ENODATA'
    at :anonymous (test-dns-promises-exists.js:10:1)
    at :program (test-dns-promises-exists.js:1:1)`
- `AssertionError: Expected values to be strictly equal: + actual - expected  + undefined - 'fhqwhgads'
    at :anonymous (test-http-incoming-message-connection-setter.js:18:1)
    at :program (test-http-incoming-message-connection-setter.js:1:1)`
- `AssertionError: Expected values to be strictly equal: + actual - expected  + undefined - 'utf8'
    at :anonymous (test-string-decoder.js:35:1)
    at :program (test-string-decoder.js:1:1)`
- `AssertionError: Expected values to be strictly equal: + actual - expected  + undefined - 'test-worker-thread-name'
    at :anonymous (test-worker-thread-name.js:13:3)
    at :program (test-worker-thread-name.js:1:1)`
example test: `test/parallel/test-dns-promises-exists.js`

### 4 × `AssertionError: Expected values to be strictly equal: + actual - expected + undefined - true at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Expected values to be strictly equal: + actual - expected  + undefined - true
    at :anonymous (test-domain-ee.js:27:3)
    at :program (test-domain-ee.js:1:1)`
- `AssertionError: Expected values to be strictly equal: + actual - expected  + undefined - true
    at :anonymous (test-stream-duplex-end.js:11:3)
    at :program (test-stream-duplex-end.js:1:1)`
- `AssertionError: Expected values to be strictly equal: + actual - expected  + undefined - true
    at :anonymous (test-stream-pipe-needDrain.js:18:3)
    at :program (test-stream-pipe-needDrain.js:1:1)`
- `AssertionError: Expected values to be strictly equal: + actual - expected  + undefined - true
    at :anonymous (test-vm-property-not-on-sandbox.js:37:1)
    at :program (test-vm-property-not-on-sandbox.js:1:1)`
example test: `test/parallel/test-domain-ee.js`

### 4 × `AssertionError: Expected values to be strictly equal: <n> !== <n> at EventEmitter.<anonymous> (<loc>) at EventEmitter._return (<loc>) at EventEmitter.emit (nati`

distinct messages:
- `AssertionError: Expected values to be strictly equal:

1 !== 0

    at EventEmitter.<anonymous> (test-child-process-fork-stdio-string-variant.js:29:53)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)
Error: Sou`
- `AssertionError: Expected values to be strictly equal:

1 !== 0

    at EventEmitter.<anonymous> (test-fs-write-stream-patch-open.js:18:12)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)`
- `AssertionError: Expected values to be strictly equal:

102 !== 50

    at EventEmitter.<anonymous> (test-http-max-headers-count.js:47:10)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)
    at Duplex.push (nati`
- `AssertionError: Expected values to be strictly equal:

0 !== 1

    at EventEmitter.<anonymous> (test-worker-beforeexit-throw-exit.js:25:10)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)`
example test: `test/parallel/test-child-process-fork-stdio-string-variant.js`

### 4 × `AssertionError: Expected values to be strictly equal: false !== true at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Expected values to be strictly equal:  false !== true
    at :anonymous (test-file.js:27:5)
    at :program (test-file.js:1:1)`
- `AssertionError: Expected values to be strictly equal:  false !== true
    at :anonymous (test-fs-mkdir.js:134:3)
    at :program (test-fs-mkdir.js:1:1)`
- `AssertionError: Expected values to be strictly equal:  false !== true
    at :anonymous (test-stream-duplex-from.js:114:3)
    at :program (test-stream-duplex-from.js:1:1)`
- `AssertionError: Expected values to be strictly equal:  false !== true
    at :anonymous (test-stream-writable-end-cb-error.js:73:3)
    at :program (test-stream-writable-end-cb-error.js:1:1)`
example test: `test/parallel/test-file.js`

### 4 × `Error: ENOENT: no such file or directory, open <str>`

distinct messages:
- `Error: ENOENT: no such file or directory, open 'stream for nonexistent file'`
- `Error: ENOENT: no such file or directory, open 'asd'`
- `Error: ENOENT: no such file or directory, open '/doesnotexist'`
- `Error: ENOENT: no such file or directory, open '/work/.harness/work/node-api/node-api-overlay/test/parallel/file.txt'`
example test: `test/parallel/test-domain-fs-enoent-stream.js`

### 4 × `Mismatched <anonymous> function calls. Expected at least <n>, actual <n>. at Proxy.mustCallAtLeast (<loc>) at <loc> at <loc>`

distinct messages:
- `Mismatched <anonymous> function calls. Expected at least 1, actual 0.
    at Proxy.mustCallAtLeast (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:543:10)
    at test-http-perf_hooks.js:9:44
    at test-http-perf_hooks.js:1:1`
- `Mismatched <anonymous> function calls. Expected at least 1, actual 0.
    at Proxy.mustCallAtLeast (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:543:10)
    at test-net-perf_hooks.js:14:44
    at test-net-perf_hooks.js:1:1`
- `Mismatched <anonymous> function calls. Expected at least 1, actual 0.
    at Proxy.mustCallAtLeast (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:543:10)
    at test-performance-gc.js:30:46
    at test-performance-gc.js:1:1`
- `Mismatched <anonymous> function calls. Expected at least 2, actual 1.
    at Proxy.mustCallAtLeast (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:543:10)
    at test-zlib-flush-drain-longblock.js:19:28
    at test-zlib-flush-drain-longblock.js:1:1`
example test: `test/parallel/test-http-perf_hooks.js`

### 4 × `TypeError: Cannot set property <str> of undefined at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: Cannot set property 'readStart' of undefined
    at :anonymous (test-child-process-pipe-dataflow.js:43:3)
    at :program (test-child-process-pipe-dataflow.js:1:1)`
- `TypeError: Cannot set property '.bar' of undefined
    at :anonymous (test-module-multi-extensions.js:20:3)
    at :program (test-module-multi-extensions.js:1:1)`
- `TypeError: Cannot set property '/work/.harness/work/node-api/node-api-overlay/test/fixtures/semicolon.js' of undefined
    at :anonymous (test-require-cache.js:31:3)
    at :program (test-require-cache.js:1:1)`
- `TypeError: Cannot set property 'fs' of undefined
    at :anonymous (test-require-node-prefix.js:36:3)
    at :program (test-require-node-prefix.js:1:1)`
example test: `test/parallel/test-child-process-pipe-dataflow.js`

### 4 × `TypeError: This handle type cannot be sent at EventEmitter.<anonymous> (<loc>) at EventEmitter._return (<loc>) at EventEmitter.emit (native)`

distinct messages:
- `TypeError: This handle type cannot be sent
    at EventEmitter.<anonymous> (test-child-process-fork-net-server.js:116:13)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)`
- `TypeError: This handle type cannot be sent
    at EventEmitter.<anonymous> (test-child-process-fork-net-socket.js:65:13)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)`
- `TypeError: This handle type cannot be sent
    at EventEmitter.<anonymous> (test-child-process-send-returns-boolean.js:36:19)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)`
- `TypeError: This handle type cannot be sent
    at EventEmitter.<anonymous> (test-net-listen-handle-in-cluster-1.js:14:14)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)`
example test: `test/parallel/test-child-process-fork-net-server.js`

### 4 × `Uncaught (in promise) AssertionError: Expected values to be strictly equal: + actual - expected + <str> - <str>`

distinct messages:
- `Uncaught (in promise) AssertionError: Expected values to be strictly equal:
+ actual - expected

+ 'undefined'
- '[Module: null prototype] { a: <uninitialized>, b: undefined }'`
- `Uncaught (in promise) AssertionError: Expected values to be strictly equal:
+ actual - expected

+ 'undefined'
- 'object'`
- `Uncaught (in promise) AssertionError: Expected values to be strictly equal:
+ actual - expected

+ 'Object'
- 'FileHandle'`
example test: `test/parallel/test-util-inspect-namespace.js`

### 3 × `AssertionError: Expected values to be strictly deep-equal: + actual - expected Comparison { - code: <str>, name: <str> } at :=> (<loc>) at :anonymous (<loc>) at`

distinct messages:
- `AssertionError: Expected values to be strictly deep-equal: + actual - expected    Comparison { -   code: 'ERR_INVALID_ARG_TYPE',     name: 'TypeError'   }
    at :=> (test-require-resolve-invalid-paths.js:10:5)
    at :anonymous (test-require-resolve-invalid-paths.js:9:3)
    at :program (test-requi`
- `AssertionError: Expected values to be strictly deep-equal: + actual - expected    Comparison { -   code: 'ERR_ENCODING_INVALID_ENCODED_DATA',     name: 'TypeError'   }
    at :=> (test-whatwg-encoding-custom-textdecoder-fatal.js:75:3)
    at :anonymous (test-whatwg-encoding-custom-textdecoder-fatal.`
- `AssertionError: Expected values to be strictly deep-equal: + actual - expected    Comparison { -   code: 'ERR_INVALID_ARG_TYPE',     name: 'TypeError'   }
    at :=> (test-whatwg-encoding-custom-textdecoder-invalid-arg.js:12:5)
    at :anonymous (test-whatwg-encoding-custom-textdecoder-invalid-arg.j`
example test: `test/parallel/test-require-resolve-invalid-paths.js`

### 3 × `AssertionError: Expected values to be strictly equal: <str> !== <str> at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Expected values to be strictly equal:  'abc' !== ''
    at :anonymous (test-buffer-tostring-range.js:10:1)
    at :program (test-buffer-tostring-range.js:1:1)`
- `AssertionError: Expected values to be strictly equal:  '/tmp' !== '/tmpdir'
    at :anonymous (test-os.js:61:3)
    at :program (test-os.js:1:1)`
- `AssertionError: Expected values to be strictly equal:  'elide' !== 'foo'
    at :anonymous (test-process-title-cli.js:16:1)
    at :program (test-process-title-cli.js:1:1)`
example test: `test/parallel/test-buffer-tostring-range.js`

### 3 × `AssertionError: Expected values to be strictly equal: false !== true at :=> (<loc>) at _return (<loc>)`

distinct messages:
- `AssertionError: Expected values to be strictly equal:  false !== true
    at :=> (test-fs-write-stream-end.js:57:5)
    at _return (index.js:573:12)`
- `AssertionError: Expected values to be strictly equal:  false !== true
    at :=> (test-stream-readable-object-multi-push-async.js:163:5)
    at _return (index.js:573:12)`
- `AssertionError: Expected values to be strictly equal:  false !== true
    at :=> (test-stream-writable-finished.js:92:7)
    at _return (index.js:573:12)`
example test: `test/parallel/test-fs-write-stream-end.js`

### 3 × `AssertionError: Expected values to be strictly equal: undefined !== <n> at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Expected values to be strictly equal:  undefined !== 1
    at :anonymous (test-fs-read-stream-inherit.js:73:3)
    at :program (test-fs-read-stream-inherit.js:1:1)`
- `AssertionError: Expected values to be strictly equal:  undefined !== 4
    at :anonymous (test-vm-context-property-forwarding.js:33:1)
    at :program (test-vm-context-property-forwarding.js:1:1)`
- `AssertionError: Expected values to be strictly equal:  undefined !== 42
    at :anonymous (test-vm-global-contextual-store.js:15:1)
    at :program (test-vm-global-contextual-store.js:1:1)`
example test: `test/parallel/test-fs-read-stream-inherit.js`

### 3 × `AssertionError: function should not have been called at <loc> at EventEmitter.mustNotCall (<loc>) at EventEmitter.emit (native)`

distinct messages:
- `AssertionError: function should not have been called at test-net-listen-close-server-callback-is-not-function.js:9
    at EventEmitter.mustNotCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:631:12)
    at EventEmitter.emit (native)`
- `AssertionError: function should not have been called at test-net-listen-close-server.js:27
    at EventEmitter.mustNotCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:631:12)
    at EventEmitter.emit (native)`
- `AssertionError: function should not have been called at test-net-server-close-before-calling-lookup-callback.js:7
    at EventEmitter.mustNotCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:631:12)
    at EventEmitter.emit (native)`
example test: `test/parallel/test-net-listen-close-server-callback-is-not-function.js`

### 3 × `AssertionError: function should not have been called at <loc> called with arguments: IncomingMessage [Readable] { socket: Socket [Duplex] { _handle: {}, _allowH`

distinct messages:
- `AssertionError: function should not have been called at test-http-client-reject-chunked-with-content-length.js:20
called with arguments: IncomingMessage [Readable] {
  socket: Socket [Duplex] {
    _handle: {},
    _allowHalfOpen: false,
    connecting: false,
    _connected: true,
    _readableEnde`
- `AssertionError: function should not have been called at test-http-client-reject-cr-no-lf.js:19
called with arguments: IncomingMessage [Readable] {
  socket: Socket [Duplex] {
    _handle: {},
    _allowHalfOpen: false,
    connecting: false,
    _connected: true,
    _readableEnded: false,
    _writ`
- `AssertionError: function should not have been called at test-http-upgrade-server-callback.js:66
called with arguments: IncomingMessage [Readable] {
  socket: Socket [Duplex] {
    _handle: {},
    _allowHalfOpen: true,
    connecting: false,
    _connected: true,
    _readableEnded: false,
    _writ`
example test: `test/parallel/test-http-client-reject-chunked-with-content-length.js`

### 3 × `AssertionError: The input did not match the regular expression /ERR_INVALID_ARG_TYPE/. Input: <str> at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: The input did not match the regular expression /ERR_INVALID_ARG_TYPE/. Input:  'TypeError: Module.setSourceMapsSupport is not a function'
    at :anonymous (test-module-setsourcemapssupport.js:18:5)
    at :program (test-module-setsourcemapssupport.js:1:1)`
- `AssertionError: The input did not match the regular expression /ERR_INVALID_ARG_TYPE/. Input:  'TypeError: (intermediate value).setSourceMapsEnabled is not a function'
    at :anonymous (test-process-setsourcemapsenabled.js:13:3)
    at :program (test-process-setsourcemapsenabled.js:1:1)`
- `AssertionError: The input did not match the regular expression /ERR_INVALID_ARG_TYPE/. Input:  'TypeError: The "streams" argument must be specified'
    at :anonymous (test-stream-pipeline.js:69:3)
    at :program (test-stream-pipeline.js:1:1)`
example test: `test/parallel/test-module-setsourcemapssupport.js`

### 3 × `Error: Command failed: /opt/elide/bin/elide at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `Error: Command failed: /opt/elide/bin/elide
    at :anonymous (test-module-main-extension-lookup.js:9:1)
    at :program (test-module-main-extension-lookup.js:1:1)`
- `Error: Command failed: /opt/elide/bin/elide
    at :anonymous (test-module-wrap.js:9:1)
    at :program (test-module-wrap.js:1:1)`
- `Error: Command failed: /opt/elide/bin/elide
    at :anonymous (test-module-wrapper.js:9:1)
    at :program (test-module-wrapper.js:1:1)`
example test: `test/parallel/test-module-main-extension-lookup.js`

### 3 × `Error: Connection closed before message completed AssertionError: Expected values to be strictly deep-equal: + actual - expected Comparison { + code: <str> - co`

distinct messages:
- `Error: Connection closed before message completed
AssertionError: Expected values to be strictly deep-equal:
+ actual - expected

  Comparison {
+   code: 'ERR_STREAM_PREMATURE_CLOSE'
-   code: 'ECONNRESET'
  }

    at Readable.<anonymous> (/work/.harness/work/node-api/node-api-overlay/test/common/i`
example test: `test/parallel/test-http-abort-client.js`

### 3 × `Error: foo at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `Error: foo
    at :anonymous (test-process-exception-capture-should-abort-on-uncaught-setflagsfromstring.js:13:7)
    at :program (test-process-exception-capture-should-abort-on-uncaught-setflagsfromstring.js:1:1)`
- `Error: foo
    at :anonymous (test-process-exception-capture-should-abort-on-uncaught.js:12:7)
    at :program (test-process-exception-capture-should-abort-on-uncaught.js:1:1)`
- `Error: foo
    at :anonymous (test-process-exception-capture.js:13:7)
    at :program (test-process-exception-capture.js:1:1)`
example test: `test/parallel/test-process-exception-capture-should-abort-on-uncaught-setflagsfromstring.js`

### 3 × `Error: read ECONNRESET`

distinct messages:
- `Error: read ECONNRESET`
example test: `test/parallel/test-net-connect-abort-controller.js`

### 3 × `Mismatched <anonymous> function calls. Expected exactly <n>, actual <n>. at Proxy.mustCall (<loc>) at <loc> at <loc> Mismatched <anonymous> function calls. Expe`

distinct messages:
- `Mismatched <anonymous> function calls. Expected exactly 1, actual 0.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at test-dns-perf_hooks.js:24:43
    at test-dns-perf_hooks.js:1:1
Mismatched <anonymous> function calls. Expected exactly 1, actu`
- `Mismatched <anonymous> function calls. Expected exactly 1, actual 0.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at test-event-emitter-remove-listeners.js:134:34
    at test-event-emitter-remove-listeners.js:1:1
Mismatched <anonymous> functio`
- `Mismatched <anonymous> function calls. Expected exactly 1, actual 2.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at test-stream-readable-emit-readable-short-stream.js:50:27
    at test-stream-readable-emit-readable-short-stream.js:1:1
Mismatc`
example test: `test/parallel/test-dns-perf_hooks.js`

### 3 × `Mismatched noop function calls. Expected exactly <n>, actual <n>. at Proxy.mustCall (<loc>) at <loc> at <loc> Mismatched noop function calls. Expected exactly <`

distinct messages:
- `Mismatched noop function calls. Expected exactly 2, actual 0.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at test-async-hooks-disable-during-promise.js:11:16
    at test-async-hooks-disable-during-promise.js:1:1
Mismatched noop function calls`
- `Mismatched noop function calls. Expected exactly 1, actual 0.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at test-stream-pipe-flow.js:25:23
    at test-stream-pipe-flow.js:1:1
Mismatched noop function calls. Expected exactly 1, actual 0.
    `
- `Mismatched noop function calls. Expected exactly 1, actual 0.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at test-stream2-readable-wrap-destroy.js:14:21
    at test-stream2-readable-wrap-destroy.js:1:1
Mismatched noop function calls. Expected`
example test: `test/parallel/test-async-hooks-disable-during-promise.js`

### 3 × `TypeError: Cannot read property <str> of undefined at Readable.<anonymous> (<loc>) at Readable._return (<loc>) at TypeError.get stack (native)`

distinct messages:
- `TypeError: Cannot read property 'length' of undefined
    at Readable.<anonymous> (test-http-keep-alive-close-on-header.js:83:26)
    at Readable._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at TypeError.get stack (native)`
- `TypeError: Cannot read property 'length' of undefined
    at Readable.<anonymous> (test-http-keep-alive.js:61:26)
    at Readable._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at TypeError.get stack (native)`
- `TypeError: Cannot read property 'incoming' of undefined
    at Readable.<anonymous> (test-http-server-keepalive-end.js:14:24)
    at Readable._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at TypeError.get stack (native)`
example test: `test/parallel/test-http-keep-alive-close-on-header.js`

### 3 × `TypeError: Cannot set property kMaxLength of [object Object] which has only a getter at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: Cannot set property kMaxLength of [object Object] which has only a getter
    at :anonymous (test-zlib-brotli-kmaxlength-rangeerror.js:14:1)
    at :program (test-zlib-brotli-kmaxlength-rangeerror.js:1:1)`
- `TypeError: Cannot set property kMaxLength of [object Object] which has only a getter
    at :anonymous (test-zlib-kmaxlength-rangeerror.js:14:1)
    at :program (test-zlib-kmaxlength-rangeerror.js:1:1)`
- `TypeError: Cannot set property kMaxLength of [object Object] which has only a getter
    at :anonymous (test-zlib-zstd-kmaxlength-rangeerror.js:14:1)
    at :program (test-zlib-zstd-kmaxlength-rangeerror.js:1:1)`
example test: `test/parallel/test-zlib-brotli-kmaxlength-rangeerror.js`

### 3 × `Uncaught (in promise) AssertionError: Expected <str> to be strictly unequal to: <n>`

distinct messages:
- `Uncaught (in promise) AssertionError: Expected "actual" to be strictly unequal to: 1`
- `Uncaught (in promise) AssertionError: Expected "actual" to be strictly unequal to: 0`
example test: `test/parallel/test-async-hooks-enable-before-promise-resolve.js`

### 3 × `Uncaught (in promise) AssertionError: Missing expected rejection. Uncaught (in promise) AssertionError: Missing expected rejection.`

distinct messages:
- `Uncaught (in promise) AssertionError: Missing expected rejection.
Uncaught (in promise) AssertionError: Missing expected rejection.`
example test: `test/parallel/test-stream-toArray.js`

### 3 × `Uncaught (in promise) TypeError: Cannot read property <str> of undefined`

distinct messages:
- `Uncaught (in promise) TypeError: Cannot read property '1' of undefined`
- `Uncaught (in promise) TypeError: Cannot read property 'request' of undefined`
- `Uncaught (in promise) TypeError: Cannot read property 'high' of undefined`
example test: `test/parallel/test-async-hooks-async-await.js`

### 3 × `Uncaught (in promise) TypeError: foo.linkRequests is not a function`

distinct messages:
- `Uncaught (in promise) TypeError: foo.linkRequests is not a function`
example test: `test/parallel/test-vm-module-linkmodulerequests-circular.js`

### 2 × `(node:<n>) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Bu`

distinct messages:
- `(node:1270) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.
AssertionError: DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use th`
- `(node:1518) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.`
example test: `test/parallel/test-buffer-constructor-outside-node-modules.js`

### 2 × `[ [ SegfaultHandler caught a segfault in thread <n> ] ] siginfo: si_signo: <n>, si_code: <n>, si_addr: <n> (heapBase + <n>) General purpose register values: RAX`

distinct messages:
- `[ [ SegfaultHandler caught a segfault in thread 0x000076ebb4000cc0 ] ]
siginfo: si_signo: 11, si_code: 1, si_addr: 0x000078132a11d750 (heapBase + 1273291462480)

General purpose register values:
  RAX 0x0000000000000000 
  RBX 0x000076ebcb349038 points into the stack for thread 0x000076ebb4000cc0
  `
- `[ [ SegfaultHandler caught a segfault in thread 0x0000763da0000cc0 ] ]
siginfo: si_signo: 11, si_code: 1, si_addr: 0x000078132a11d360 (heapBase + 2020951315296)

General purpose register values:
  RAX 0x0000000000000000 
  RBX 0x0000763db731a448 points into the stack for thread 0x0000763da0000cc0
  `
example test: `test/parallel/test-os-process-priority.js`

### 2 × `<n> null undefined false Function Symbol(foo)`

distinct messages:
- `42
null
undefined
false
Function
Symbol(foo)`
example test: `test/parallel/test-domain-error-types.js`

### 2 × `AssertionError: Expected <str> to be strictly unequal to: <str> at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Expected "actual" to be strictly unequal to:  'artischocko'
    at :anonymous (test-require-extensions-same-filename-as-dir-trailing-slash.js:34:1)
    at :program (test-require-extensions-same-filename-as-dir-trailing-slash.js:1:1)`
- `AssertionError: Expected "actual" to be strictly unequal to:  'artischocko'
    at :anonymous (test-require-extensions-same-filename-as-dir.js:31:1)
    at :program (test-require-extensions-same-filename-as-dir.js:1:1)`
example test: `test/parallel/test-require-extensions-same-filename-as-dir-trailing-slash.js`

### 2 × `AssertionError: Expected values to be strictly deep-equal: + actual - expected Comparison { + code: <str> - code: <str> } at :anonymous (<loc>) at :program (<lo`

distinct messages:
- `AssertionError: Expected values to be strictly deep-equal: + actual - expected    Comparison { +   code: 'ERR_INVALID_ARG_TYPE' -   code: 'ERR_INVALID_ARG_VALUE'   }
    at :anonymous (test-fs-fchmod.js:30:1)
    at :program (test-fs-fchmod.js:1:1)`
- `AssertionError: Expected values to be strictly deep-equal: + actual - expected    Comparison { +   code: 'ENOENT' -   code: 'ERR_INVALID_ARG_VALUE'   }
    at :anonymous (test-fs-rmdir-recursive-error.js:19:1)
    at :program (test-fs-rmdir-recursive-error.js:1:1)`
example test: `test/parallel/test-fs-fchmod.js`

### 2 × `AssertionError: Expected values to be strictly deep-equal: + actual - expected Comparison { + code: <str>, + message: <str> - code: <str>, - message: <str> } at`

distinct messages:
- `AssertionError: Expected values to be strictly deep-equal: + actual - expected    Comparison { +   code: 'ERR_OUT_OF_RANGE', +   message: 'The value of "length" is out of range. It must be <= 0. Received 1' -   code: 'ERR_INVALID_ARG_VALUE', -   message: "The argument 'buffer' is empty and cannot be`
- `AssertionError: Expected values to be strictly deep-equal: + actual - expected    Comparison { +   code: 'ERR_METHOD_NOT_IMPLEMENTED', +   message: 'node:worker_threads: moveMessagePortToContext is not implemented yet in Elide' -   code: 'ERR_CLOSED_MESSAGE_PORT', -   message: 'Cannot send data on c`
example test: `test/parallel/test-fs-read-empty-buffer.js`

### 2 × `AssertionError: Expected values to be strictly deep-equal: + actual - expected Comparison { + code: <str>, + message: <str>, + name: <str> - code: <str>, - mess`

distinct messages:
- `AssertionError: Expected values to be strictly deep-equal: + actual - expected    Comparison { +   code: 'EHOSTUNREACH', +   message: "EHOSTUNREACH: no route to host, udp-addMembership 'undefined' (errno=113)", +   name: 'Error' -   code: 'ERR_MISSING_ARGS', -   message: /^The "multicastAddress" arg`
- `AssertionError: Expected values to be strictly deep-equal:
+ actual - expected

  Comparison {
+   code: 'ERR_BUFFER_OUT_OF_BOUNDS',
+   message: '"offset" is outside of buffer bounds',
+   name: 'RangeError'
-   code: 'ERR_INVALID_ARG_TYPE',
-   message: 'The "address" argument must be of type stri`
example test: `test/parallel/test-dgram-membership.js`

### 2 × `AssertionError: Expected values to be strictly deep-equal: + actual - expected Comparison { + message: <str> - code: <str>, - message: <str> } at :anonymous (<l`

distinct messages:
- `AssertionError: Expected values to be strictly deep-equal: + actual - expected    Comparison { +   message: '(intermediate value).seteuid is not a function' -   code: 'ERR_INVALID_ARG_TYPE', -   message: 'The "id" argument must be one of type number or string. Received an instance of Object'   }
   `
- `AssertionError: Expected values to be strictly deep-equal: + actual - expected    Comparison { +   message: '(intermediate value).setuid is not a function' -   code: 'ERR_INVALID_ARG_TYPE', -   message: 'The "id" argument must be one of type number or string. Received an instance of Object'   }
    `
example test: `test/parallel/test-process-euid-egid.js`

### 2 × `AssertionError: Expected values to be strictly deep-equal: + actual - expected Comparison { + message: <str> - message: <str> } at :anonymous (<loc>) at :progra`

distinct messages:
- `AssertionError: Expected values to be strictly deep-equal: + actual - expected    Comparison { +   message: 'index is too large' -   message: 'Invalid typed array length: 9007199254740992'   }
    at :anonymous (test-buffer-alloc.js:14:1)
    at :program (test-buffer-alloc.js:1:1)`
- `AssertionError: Expected values to be strictly deep-equal: + actual - expected    Comparison { +   message: "Cannot read property 'reset' of undefined" -   message: 'Cannot reset zlib stream while a write is in progress'   }
    at :anonymous (test-zlib-reset-during-write.js:18:3)
    at :program (t`
example test: `test/parallel/test-buffer-alloc.js`

### 2 × `AssertionError: Expected values to be strictly deep-equal: + actual - expected Comparison { + message: <str>, - message: <str>, name: <str> } at :anonymous (<lo`

distinct messages:
- `AssertionError: Expected values to be strictly deep-equal: + actual - expected    Comparison { +   message: 'EBADF: bad file descriptor, write', -   message: '',     name: 'Error'   }
    at :anonymous (test-fs-writesync-crash.js:40:1)
    at :program (test-fs-writesync-crash.js:1:1)`
- `AssertionError: Expected values to be strictly deep-equal: + actual - expected    Comparison { +   message: "Cannot assign to read only property 'nonWritableProp' of {getSetPropReceivingFunction: accessor, getSetPropReceivingNumber: accessor, propReceivingNumber: 144, getSetPropThrowing: accessor, n`
example test: `test/parallel/test-fs-writesync-crash.js`

### 2 × `AssertionError: Expected values to be strictly deep-equal: + actual - expected Comparison { code: <str>, message: <str>, + name: <str> - name: <str> } at EventE`

distinct messages:
- `AssertionError: Expected values to be strictly deep-equal:
+ actual - expected

  Comparison {
    code: 'ERR_INVALID_HTTP_TOKEN',
    message: 'Header name must be a valid HTTP token ["undefined"]',
+   name: 'Error'
-   name: 'TypeError'
  }

    at EventEmitter.<anonymous> (test-http-mutable-head`
- `AssertionError: Expected values to be strictly deep-equal:
+ actual - expected

  Comparison {
    code: 'ERR_INVALID_HTTP_TOKEN',
    message: 'Header name must be a valid HTTP token ["3840"]',
+   name: 'Error'
-   name: 'TypeError'
  }

    at EventEmitter.<anonymous> (test-http-write-head.js:35:`
example test: `test/parallel/test-http-mutable-headers.js`

### 2 × `AssertionError: Expected values to be strictly equal: + actual - expected + <ref *<n>> Socket [Duplex] { + _allowHalfOpen: true, + _closed: false, + _connected:`

distinct messages:
- `AssertionError: Expected values to be strictly equal:
+ actual - expected

+ <ref *1> Socket [Duplex] {
+   _allowHalfOpen: true,
+   _closed: false,
+   _connected: true,
+   _endCalled: false,
+   _hadError: false,
+   _handle: {},
+   _httpActive: true,
+   _httpMessage: <ref *2> ServerResponse [`
- `AssertionError: Expected values to be strictly equal:
+ actual - expected

+ <ref *1> Socket [Duplex] {
+   _allowHalfOpen: true,
+   _closed: false,
+   _connected: true,
+   _endCalled: false,
+   _hadError: false,
+   _handle: {},
+   _httpActive: true,
+   _httpMessage: <ref *2> ServerResponse [`
example test: `test/parallel/test-http-outgoing-drain-writable-length.js`

### 2 × `AssertionError: Expected values to be strictly equal: + actual - expected + <str> - <str> at :=> (<loc>) at _return (<loc>) at :anonymous (<loc>) at :program (<`

distinct messages:
- `AssertionError: Expected values to be strictly equal: + actual - expected  + 'Error: Command failed' - 'Error: Command failed: /opt/elide/bin/elide'
    at :=> (test-child-process-execfile.js:39:5)
    at _return (index.js:573:12)
    at :anonymous (test-child-process-execfile.js:50:3)
    at :progr`
- `AssertionError: Expected values to be strictly equal: + actual - expected  + 'Expected values to be strictly equal:\n\n2 !== 1\n' - 'from d2 error handler'
    at :=> (test-domain-error-handler-throw-no-recursion.js:18:3)
    at _return (index.js:573:12)
    at :anonymous (test-domain-error-handler-`
example test: `test/parallel/test-child-process-execfile.js`

### 2 × `AssertionError: Expected values to be strictly equal: + actual - expected + <str> - <str> at Duplex.<anonymous> (<loc>) at Duplex._return (<loc>)`

distinct messages:
- `AssertionError: Expected values to be strictly equal:
+ actual - expected

+ 'EPIPE'
- 'ECONNRESET'

    at Duplex.<anonymous> (test-http-many-ended-pipelines.js:52:12)
    at Duplex._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)`
- `AssertionError: Expected values to be strictly equal:
+ actual - expected

+ 'EADDRINUSE'
- 'EACCES'

    at Duplex.<anonymous> (test-net-pipe-connect-errors.js:94:14)
    at Duplex._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)`
example test: `test/parallel/test-http-many-ended-pipelines.js`

### 2 × `AssertionError: Expected values to be strictly equal: + actual - expected + undefined - true at EventEmitter.<anonymous> (<loc>) at EventEmitter._return (<loc>)`

distinct messages:
- `AssertionError: Expected values to be strictly equal:
+ actual - expected

+ undefined
- true

    at EventEmitter.<anonymous> (test-http-nodelay.js:22:10)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)`
- `AssertionError: Expected values to be strictly equal:
+ actual - expected

+ undefined
- true

    at EventEmitter.<anonymous> (test-net-socket-connecting.js:20:10)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (nativ`
example test: `test/parallel/test-http-nodelay.js`

### 2 × `AssertionError: Expected values to be strictly equal: <n> !== <n> at EventEmitter.onChildExited (<loc>) at EventEmitter.onChildExited (<loc>) at EventEmitter.em`

distinct messages:
- `AssertionError: Expected values to be strictly equal:

1 !== 7

    at EventEmitter.onChildExited (test-domain-top-level-error-handler-throw.js:46:14)
    at EventEmitter.onChildExited (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)`
- `AssertionError: Expected values to be strictly equal:

2 !== 0

    at EventEmitter.onChildExited (test-domain-with-abort-on-uncaught-exception.js:124:18)
    at EventEmitter.onChildExited (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)
A`
example test: `test/parallel/test-domain-top-level-error-handler-throw.js`

### 2 × `AssertionError: Expected values to be strictly equal: <n> !== <n> at Immediate.<anonymous> (<loc>) at Immediate._return (<loc>)`

distinct messages:
- `AssertionError: Expected values to be strictly equal:

1 !== 0

    at Immediate.<anonymous> (test-process-getactiveresources-track-timer-lifetime.js:32:12)
    at Immediate._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)`
- `AssertionError: Expected values to be strictly equal:

1 !== 0

    at Immediate.<anonymous> (test-stream-unpipe-event.js:60:12)
    at Immediate._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)`
example test: `test/parallel/test-process-getactiveresources-track-timer-lifetime.js`

### 2 × `AssertionError: Expected values to be strictly equal: <n> !== <n> at Transform.<anonymous> (<loc>) at Transform._return (<loc>) at <loc>`

distinct messages:
- `AssertionError: Expected values to be strictly equal:

14 !== 15

    at Transform.<anonymous> (test-stream-transform-final-sync.js:93:10)
    at Transform._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at test-stream-transform-final-sync.js:86:7`
- `AssertionError: Expected values to be strictly equal:

14 !== 15

    at Transform.<anonymous> (test-stream-transform-final.js:95:10)
    at Transform._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at test-stream-transform-final.js:88:7`
example test: `test/parallel/test-stream-transform-final-sync.js`

### 2 × `AssertionError: Expected values to be strictly equal: <str> !== <str> at EventEmitter.<anonymous> (<loc>) at EventEmitter._return (<loc>) at EventEmitter.emit (`

distinct messages:
- `AssertionError: Expected values to be strictly equal:

'' !== 'buzz'

    at EventEmitter.<anonymous> (test-child-process-spawn-shell.js:69:10)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)`
- `AssertionError: Expected values to be strictly equal:

'1' !== '1, 2'

    at EventEmitter.<anonymous> (test-http-request-join-authorization-headers.js:11:12)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)
   `
example test: `test/parallel/test-child-process-spawn-shell.js`

### 2 × `AssertionError: Expected values to be strictly equal: false !== true at Duplex.errOrEnd (<loc>) at Duplex._return (<loc>)`

distinct messages:
- `AssertionError: Expected values to be strictly equal:

false !== true

    at Duplex.errOrEnd (test-http-server-headers-timeout-keepalive.js:81:12)
    at Duplex._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)`
- `AssertionError: Expected values to be strictly equal:

false !== true

    at Duplex.errOrEnd (test-http-server-request-timeout-keepalive.js:79:12)
    at Duplex._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)`
example test: `test/parallel/test-http-server-headers-timeout-keepalive.js`

### 2 × `AssertionError: Expected values to be strictly equal: false !== true at EventEmitter.<anonymous> (<loc>) at EventEmitter._return (<loc>) at EventEmitter.emit (n`

distinct messages:
- `AssertionError: Expected values to be strictly equal:

false !== true

    at EventEmitter.<anonymous> (test-http-outgoing-finish-writable.js:39:10)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)
AssertionErro`
- `AssertionError: Expected values to be strictly equal:

false !== true

    at EventEmitter.<anonymous> (test-net-server-drop-connections.js:25:10)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)
AssertionError:`
example test: `test/parallel/test-http-outgoing-finish-writable.js`

### 2 × `AssertionError: Expected values to be strictly equal: true !== false at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Expected values to be strictly equal:  true !== false
    at :anonymous (test-stream-duplex-readable-writable.js:11:3)
    at :program (test-stream-duplex-readable-writable.js:1:1)`
- `AssertionError: Expected values to be strictly equal:  true !== false
    at :anonymous (test-stream-readable-aborted.js:65:3)
    at :program (test-stream-readable-aborted.js:1:1)`
example test: `test/parallel/test-stream-duplex-readable-writable.js`

### 2 × `AssertionError: Expected values to be strictly equal: undefined !== <n> at EventEmitter.<anonymous> (<loc>) at EventEmitter._return (<loc>) at EventEmitter.emit`

distinct messages:
- `AssertionError: Expected values to be strictly equal:

undefined !== 1

    at EventEmitter.<anonymous> (test-http-server-client-error.js:15:10)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)
    at Duplex.pus`
- `AssertionError: Expected values to be strictly equal:

undefined !== 1

    at EventEmitter.<anonymous> (test-net-buffersize.js:48:12)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)`
example test: `test/parallel/test-http-server-client-error.js`

### 2 × `AssertionError: function should not have been called at <loc> at mustNotCall (<loc>)`

distinct messages:
- `AssertionError: function should not have been called at test-stream-readable-next-no-null.js:19
    at mustNotCall (index.js:631:5)`
- `AssertionError: function should not have been called at test-stream-writable-write-writev-finish.js:135
    at mustNotCall (index.js:631:5)`
example test: `test/parallel/test-stream-readable-next-no-null.js`

### 2 × `AssertionError: function should not have been called at <loc> called with arguments: Error: write after end at Immediate.<anonymous> (<loc>) at Immediate._retur`

distinct messages:
- `AssertionError: function should not have been called at test-http-server-write-after-end.js:11
called with arguments: Error: write after end
    at Immediate.<anonymous> (test-http-server-write-after-end.js:17:9)
    at Immediate._return (/work/.harness/work/node-api/node-api-overlay/test/common/ind`
- `AssertionError: function should not have been called at test-http-server-write-end-after-end.js:9
called with arguments: Error: write after end
    at Immediate.<anonymous> (test-http-server-write-end-after-end.js:15:9)
    at Immediate._return (/work/.harness/work/node-api/node-api-overlay/test/com`
example test: `test/parallel/test-http-server-write-after-end.js`

### 2 × `AssertionError: Missing expected exception (RangeError). at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Missing expected exception (RangeError).
    at :anonymous (test-buffer-arraybuffer.js:142:3)
    at :program (test-buffer-arraybuffer.js:1:1)`
- `AssertionError: Missing expected exception (RangeError).
    at :anonymous (test-zlib.js:32:1)
    at :program (test-zlib.js:1:1)`
example test: `test/parallel/test-buffer-arraybuffer.js`

### 2 × `AssertionError: Missing expected exception (TypeError). at :=> (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Missing expected exception (TypeError).
    at :=> (test-dgram-custom-lookup.js:39:5)
    at :anonymous (test-dgram-custom-lookup.js:38:3)
    at :program (test-dgram-custom-lookup.js:1:1)`
- `AssertionError: Missing expected exception (TypeError).
    at :=> (test-process-emitwarning.js:77:3)
    at :anonymous (test-process-emitwarning.js:61:1)
    at :program (test-process-emitwarning.js:1:1)`
example test: `test/parallel/test-dgram-custom-lookup.js`

### 2 × `AssertionError: Test should have aborted but instead exited with exit code <n> and signal null at EventEmitter.onExit (<loc>) at EventEmitter.emit (native)`

distinct messages:
- `AssertionError: Test should have aborted but instead exited with exit code 0 and signal null
    at EventEmitter.onExit (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:365:5)
    at EventEmitter.emit (native)`
example test: `test/parallel/test-domain-no-error-handler-abort-on-uncaught-5.js`

### 2 × `AssertionError: The input did not match the regular expression /Promise { undefined }/. Input: <str> at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: The input did not match the regular expression /Promise { undefined }/. Input:  'Promise { <pending> }'
    at :anonymous (test-vm-module-evaluate-synthethic-module-rejection.js:29:1)
    at :program (test-vm-module-evaluate-synthethic-module-rejection.js:1:1)`
- `AssertionError: The input did not match the regular expression /Promise { undefined }/. Input:  'Promise { <pending> }'
    at :anonymous (test-vm-module-evaluate-synthethic-module.js:21:3)
    at :program (test-vm-module-evaluate-synthethic-module.js:1:1)`
example test: `test/parallel/test-vm-module-evaluate-synthethic-module-rejection.js`

### 2 × `DOMException at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `DOMException
    at :anonymous (test-process-env.js:114:15)
    at :program (test-process-env.js:1:1)`
- `DOMException
    at :anonymous (test-worker-message-port-message-port-transferring.js:13:3)
    at :program (test-worker-message-port-message-port-transferring.js:1:1)`
example test: `test/parallel/test-process-env.js`

### 2 × `Error: Cannot find module <str> at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `Error: Cannot find module '/work/.harness/work/node-api/node-api-overlay/tools/icu/icu_versions.json'
    at :anonymous (test-icu-minimum-version.js:13:37)
    at :program (test-icu-minimum-version.js:1:1)`
- `Error: Cannot find module '../../deps/acorn/acorn/package.json'
    at :anonymous (test-process-versions.js:6:15)
    at :program (test-process-versions.js:1:1)`
example test: `test/parallel/test-icu-minimum-version.js`

### 2 × `Error: native decompress_finish rejected the input as malformed at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `Error: native decompress_finish rejected the input as malformed
    at :anonymous (test-zlib-from-concatenated-gzip.js:21:20)
    at :program (test-zlib-from-concatenated-gzip.js:1:1)`
- `Error: native decompress_finish rejected the input as malformed
    at :anonymous (test-zlib-from-gzip-with-trailing-garbage.js:15:20)
    at :program (test-zlib-from-gzip-with-trailing-garbage.js:1:1)`
example test: `test/parallel/test-zlib-from-concatenated-gzip.js`

### 2 × `java.lang.IllegalArgumentException: Unknown language or instrument id dev.elide.runtime, known ids: DAPOutputProviderInstrument, OutputProviderInstrument, TypeP`

distinct messages:
- `java.lang.IllegalArgumentException: Unknown language or instrument id dev.elide.runtime, known ids: DAPOutputProviderInstrument, OutputProviderInstrument, TypeProfileInstrument, agentscript, coverage, cpusampler, cputracer, dap, debugger, elide-watch, engine, graal, heapmonitor, insight, inspect, in`
example test: `test/parallel/test-perf-hooks-timerify-constructor.js`

### 2 × `Mismatched <anonymous> function calls. Expected exactly <n>, actual <n>. at mustCall (<loc>) at _expectWarning (<loc>) at <loc> at Array.forEach (native) at Pro`

distinct messages:
- `Mismatched <anonymous> function calls. Expected exactly 1, actual 0.
    at mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at _expectWarning (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:750:10)
    at /work/.harness/work/node-api/node-`
- `Mismatched <anonymous> function calls. Expected exactly 3, actual 0.
    at mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at _expectWarning (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:750:10)
    at /work/.harness/work/node-api/node-`
example test: `test/parallel/test-fs-stat.js`

### 2 × `RangeError: <str> is outside of buffer bounds at EventEmitter.<anonymous> (<loc>) at EventEmitter._return (<loc>) at EventEmitter.emit (native) AssertionError: `

distinct messages:
- `RangeError: "offset" is outside of buffer bounds
    at EventEmitter.<anonymous> (test-dgram-send-default-host.js:33:12)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)
AssertionError: Expected values to be str`
- `RangeError: "offset" is outside of buffer bounds
    at EventEmitter.<anonymous> (test-dgram-udp6-send-default-host.js:36:12)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)
AssertionError: Expected values to b`
example test: `test/parallel/test-dgram-send-default-host.js`

### 2 × `ReferenceError: WebAssembly is not defined at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `ReferenceError: WebAssembly is not defined
    at :anonymous (test-worker-message-port-wasm-module.js:7:24)
    at :program (test-worker-message-port-wasm-module.js:1:1)`
- `ReferenceError: WebAssembly is not defined
    at :anonymous (test-worker-message-port-wasm-threads.js:11:24)
    at :program (test-worker-message-port-wasm-threads.js:1:1)`
example test: `test/parallel/test-worker-message-port-wasm-module.js`

### 2 × `SyntaxError: Unexpected end of JSON input at JSON.parse (native) at EventEmitter.<anonymous> (<loc>) at EventEmitter._return (<loc>) at EventEmitter.emit (nativ`

distinct messages:
- `SyntaxError: Unexpected end of JSON input
    at JSON.parse (native)
    at EventEmitter.<anonymous> (test-child-process-fork-exec-argv.js:47:33)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)
    at SyntaxErr`
- `SyntaxError: Unexpected end of JSON input
    at JSON.parse (native)
    at EventEmitter.<anonymous> (test-fs-syncwritestream.js:36:31)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)
    at SyntaxError.get sta`
example test: `test/parallel/test-child-process-fork-exec-argv.js`

### 2 × `TAP version <n> # Subtest: synchronous version # Subtest: validation ok <n> - validation # Subtest: performs flush not ok <n> - performs flush --- duration_ms: `

distinct messages:
- `TAP version 13
# Subtest: synchronous version
    # Subtest: validation
    ok 1 - validation
    # Subtest: performs flush
    not ok 2 - performs flush
      ---
      duration_ms: 28
      failureType: 'testCodeFailure'
      error: "Expected values to be strictly equal:\n\n0 !== 1\n"
      code:`
- `TAP version 13
# Subtest: synchronous version
    # Subtest: validation
    ok 1 - validation
    # Subtest: performs flush
    not ok 2 - performs flush
      ---
      duration_ms: 7
      failureType: 'testCodeFailure'
      error: "Expected values to be strictly equal:\n\n0 !== 1\n"
      code: `
example test: `test/parallel/test-fs-append-file-flush.js`

### 2 × `TypeError: (intermediate value).binding is not a function at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: (intermediate value).binding is not a function
    at :anonymous (test-process-binding-internalbinding-allowlist.js:9:8)
    at :program (test-process-binding-internalbinding-allowlist.js:1:1)`
- `TypeError: (intermediate value).binding is not a function
    at :anonymous (test-process-binding-util.js:6:21)
    at :program (test-process-binding-util.js:1:1)`
example test: `test/parallel/test-process-binding-internalbinding-allowlist.js`

### 2 × `TypeError: (intermediate value).execve is not a function at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: (intermediate value).execve is not a function
    at :anonymous (test-process-execve-permission-granted.js:18:3)
    at :program (test-process-execve-permission-granted.js:1:1)`
- `TypeError: (intermediate value).execve is not a function
    at :anonymous (test-process-execve.js:19:3)
    at :program (test-process-execve.js:1:1)`
example test: `test/parallel/test-process-execve-permission-granted.js`

### 2 × `TypeError: (intermediate value).gc is not a function at Immediate.<anonymous> (<loc>) at TypeError.get stack (native)`

distinct messages:
- `TypeError: (intermediate value).gc is not a function
    at Immediate.<anonymous> (test-async-hooks-disable-gc-tracking.js:17:14)
    at TypeError.get stack (native)`
- `TypeError: (intermediate value).gc is not a function
    at Immediate.<anonymous> (test-async-hooks-prevent-double-destroy.js:20:14)
    at TypeError.get stack (native)`
example test: `test/parallel/test-async-hooks-disable-gc-tracking.js`

### 2 × `TypeError: Cannot construct a BYOB reader for a stream that is not a byte stream at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: Cannot construct a BYOB reader for a stream that is not a byte stream
    at :anonymous (test-stream-readable-to-web-byob.js:35:16)
    at :program (test-stream-readable-to-web-byob.js:1:1)`
- `TypeError: Cannot construct a BYOB reader for a stream that is not a byte stream
    at :anonymous (test-stream-readable-to-web-termination-byob.js:11:18)
    at :program (test-stream-readable-to-web-termination-byob.js:1:1)`
example test: `test/parallel/test-stream-readable-to-web-byob.js`

### 2 × `TypeError: Cannot find module: <str> at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: Cannot find module: '.'
    at :anonymous (test-require-resolve-opts-paths-relative.js:17:10)
    at :program (test-require-resolve-opts-paths-relative.js:1:1)`
- `TypeError: Cannot find module: 'path'
    at :anonymous (test-require-resolve.js:35:20)
    at :program (test-require-resolve.js:1:1)`
example test: `test/parallel/test-require-resolve-opts-paths-relative.js`

### 2 × `TypeError: Cannot read property <str> of null at <loc> at _return (<loc>) at EventEmitter.emit (native) at TypeError.get stack (native)`

distinct messages:
- `TypeError: Cannot read property 'killed' of null
    at test-child-process-exec-timeout-expire.js:31:22
    at _return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)
    at TypeError.get stack (native)`
- `TypeError: Cannot read property 'killed' of null
    at test-child-process-exec-timeout-kill.js:32:22
    at _return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)
    at TypeError.get stack (native)`
example test: `test/parallel/test-child-process-exec-timeout-expire.js`

### 2 × `TypeError: Cannot read property <str> of undefined at Duplex.<anonymous> (<loc>) at Duplex._return (<loc>) at Duplex.emit (native) at TypeError.get stack (nativ`

distinct messages:
- `TypeError: Cannot read property 'getReport' of undefined
    at Duplex.<anonymous> (test-http-agent-reuse-drained-socket-only.js:66:19)
    at Duplex._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at Duplex.emit (native)
    at TypeError.get stack (native)`
- `TypeError: Cannot read property 'destroy' of undefined
    at Duplex.<anonymous> (test-http-set-timeout-server.js:63:7)
    at Duplex._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at Duplex.emit (native)
    at TypeError.get stack (native)`
example test: `test/parallel/test-http-agent-reuse-drained-socket-only.js`

### 2 × `TypeError: Cannot read property <str> of undefined at EventEmitter.<anonymous> (<loc>) at EventEmitter._return (<loc>) at EventEmitter.emit (native) at Duplex.p`

distinct messages:
- `TypeError: Cannot read property '_events' of undefined
    at EventEmitter.<anonymous> (test-http-req-close-robust-from-tampering.js:10:3)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)
    at Duplex.push (nat`
- `TypeError: Cannot read property 'toString' of undefined
    at EventEmitter.<anonymous> (test-http-socket-error-listeners.js:24:24)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)
    at Duplex.push (native)`
example test: `test/parallel/test-http-req-close-robust-from-tampering.js`

### 2 × `TypeError: Cannot read property <str> of undefined at Writable.<anonymous> (<loc>) at Writable._return (<loc>) at Writable.emit (native) at Duplex.push (native)`

distinct messages:
- `TypeError: Cannot read property 'set' of undefined
    at Writable.<anonymous> (test-async-local-storage-http-multiclients.js:36:9)
    at Writable._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at Writable.emit (native)
    at Duplex.push (native)
TypeError:`
- `TypeError: Cannot read property 'length' of undefined
    at Writable.<anonymous> (test-http-agent-maxsockets-respected.js:50:18)
    at Writable._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at Writable.emit (native)
    at Duplex.push (native)`
example test: `test/parallel/test-async-local-storage-http-multiclients.js`

### 2 × `TypeError: compose: every adjacent pair must be Readable on the left and Writable on the right at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: compose: every adjacent pair must be Readable on the left and Writable on the right
    at :anonymous (test-stream-readable-compose.js:13:18)
    at :program (test-stream-readable-compose.js:1:1)`
- `TypeError: compose: every adjacent pair must be Readable on the left and Writable on the right
    at :anonymous (test-webstreams-compose.js:22:13)
    at :program (test-webstreams-compose.js:1:1)`
example test: `test/parallel/test-stream-readable-compose.js`

### 2 × `TypeError: GCProfiler is not a constructor at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: GCProfiler is not a constructor
    at :anonymous (test-v8-collect-gc-profile-exit-before-stop.js:7:20)
    at :program (test-v8-collect-gc-profile-exit-before-stop.js:1:1)`
- `TypeError: GCProfiler is not a constructor
    at :anonymous (test-v8-collect-gc-profile-using.js:8:20)
    at :program (test-v8-collect-gc-profile-using.js:1:1)`
example test: `test/parallel/test-v8-collect-gc-profile-exit-before-stop.js`

### 2 × `TypeError: mod.linkRequests is not a function at :program (<loc>)`

distinct messages:
- `TypeError: mod.linkRequests is not a function
    at :program (test-vm-module-evaluate-source-text-module.js:24:3)`
- `TypeError: mod.linkRequests is not a function
    at :program (test-vm-module-evaluate-while-evaluating.js:22:3)`
example test: `test/parallel/test-vm-module-evaluate-source-text-module.js`

### 2 × `TypeError: The <str> argument must be of type number. Received undefined at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: The "err" argument must be of type number. Received undefined
    at :anonymous (test-child-process-spawnsync-timeout.js:52:24)
    at :program (test-child-process-spawnsync-timeout.js:1:1)`
- `TypeError: The "err" argument must be of type number. Received undefined
    at :anonymous (test-child-process-spawnsync.js:40:20)
    at :program (test-child-process-spawnsync.js:1:1)`
example test: `test/parallel/test-child-process-spawnsync-timeout.js`

### 2 × `TypeError: The URL must be of scheme file at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: The URL must be of scheme file
    at :anonymous (test-worker-data-url.js:7:1)
    at :program (test-worker-data-url.js:1:1)`
- `TypeError: The URL must be of scheme file
    at :anonymous (test-worker-process-exit-async-module.js:8:11)
    at :program (test-worker-process-exit-async-module.js:1:1)`
example test: `test/parallel/test-worker-data-url.js`

### 2 × `Uncaught (in promise) AssertionError: Expected values to be strictly deep-equal: + actual - expected Comparison { + name: <str> - name: <str> } Uncaught (in pro`

distinct messages:
- `Uncaught (in promise) AssertionError: Expected values to be strictly deep-equal:
+ actual - expected

  Comparison {
+   name: 'AssertionError'
-   name: 'AbortError'
  }

Uncaught (in promise) AssertionError: Expected values to be strictly deep-equal:
+ actual - expected

  Comparison {
+   name: '`
- `Uncaught (in promise) AssertionError: Expected values to be strictly deep-equal:
+ actual - expected

  Comparison {
+   name: 'TypeError'
-   name: 'AbortError'
  }

Uncaught (in promise) AssertionError: Missing expected rejection.
Uncaught (in promise) AssertionError: Missing expected rejection.
A`
example test: `test/parallel/test-stream-flatMap.js`

### 2 × `Uncaught (in promise) AssertionError: Expected values to be strictly equal: <n> !== undefined`

distinct messages:
- `Uncaught (in promise) AssertionError: Expected values to be strictly equal:

1 !== undefined`
- `Uncaught (in promise) AssertionError: Expected values to be strictly equal:

0 !== undefined`
example test: `test/parallel/test-async-hooks-promise-triggerid.js`

### 2 × `Uncaught (in promise) AssertionError: Missing expected rejection.`

distinct messages:
- `Uncaught (in promise) AssertionError: Missing expected rejection.`
example test: `test/parallel/test-filehandle-close.js`

### 1 × `(node:<n>) MaxListenersExceededWarning: Possible EventEmitter memory leak detected. <n> close listeners added to [Socket]. MaxListeners is <n>. Use emitter.setM`

distinct messages:
- `(node:78339) MaxListenersExceededWarning: Possible EventEmitter memory leak detected. 11 close listeners added to [Socket]. MaxListeners is 10. Use emitter.setMaxListeners() to increase limit
[EventLoop] external task threw: Could not allocate an unaligned heap chunk because the heap address space i`
example test: `test/parallel/test-http-pipeline-flood.js`

### 1 × `(node:<n>) TimeoutOverflowWarning: <n> does not fit into a <n>-bit signed integer. Timeout duration was set to <n>.`

distinct messages:
- `(node:108694) TimeoutOverflowWarning: 2147483648 does not fit into a 32-bit signed integer.
Timeout duration was set to 1.`
example test: `test/parallel/test-timers-max-duration-warning.js`

### 1 × `(node:<n>) TimeoutOverflowWarning: <n> does not fit into a <n>-bit signed integer. Timeout duration was set to <n>. AssertionError: The expression evaluated to `

distinct messages:
- `(node:86998) TimeoutOverflowWarning: 1099511627776 does not fit into a 32-bit signed integer.
Timeout duration was set to 1.
AssertionError: The expression evaluated to a falsy value:

  assert(warning.stack.includes(__filename))

    at process.<anonymous> (test-http-timeout-client-warning.js:10:3)`
example test: `test/parallel/test-http-timeout-client-warning.js`

### 1 × `(node:<n>) Warning: test AssertionError: stderr.write must not be called at <loc> called with arguments: <str> at mustNotCall (<loc>) at Writable.write (<loc>) `

distinct messages:
- `(node:104685) Warning: test
AssertionError: stderr.write must not be called at test-process-warning.js:13
called with arguments: '(node:104685) Warning: test\n'
    at mustNotCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:631:12)
    at Writable.write (/work/.harness/work/n`
example test: `test/parallel/test-process-warning.js`

### 1 × `(node:<n>) Warning: tracePromise was called with the function <str>, which returned a non-thenable. AssertionError: Expected values to be strictly deep-equal: +`

distinct messages:
- `(node:39422) Warning: tracePromise was called with the function '<anonymous>', which returned a non-thenable.
AssertionError: Expected values to be strictly deep-equal:
+ actual - expected

+ undefined
- {
-   foo: 'bar'
- }

    at checkEnd (test-diagnostics-channel-tracing-channel-promise-non-then`
example test: `test/parallel/test-diagnostics-channel-tracing-channel-promise-non-thenable.js`

### 1 × `[process <n>]: --- stderr --- (node:<n>) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(`

distinct messages:
- `[process 1259]: --- stderr ---
(node:1259) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.

[process 1259]: --- stdout ---

[process 1259]: status = 0, signal = null
Erro`
example test: `test/parallel/test-buffer-constructor-node-modules.js`

### 1 × `[process <n>]: --- stderr --- Error: Source is not a file or is not readable: /work/.harness/work/node-api/node-api-overlay/test/fixtures/spawn-worker-with-copi`

distinct messages:
- `[process 127857]: --- stderr ---
Error: Source is not a file or is not readable: /work/.harness/work/node-api/node-api-overlay/test/fixtures/spawn-worker-with-copied-env; see --help

[process 127857]: --- stdout ---

[process 127857]: status = 1, signal = null
Error: - process terminated with status`
example test: `test/parallel/test-worker-node-options.js`

### 1 × `{<str>:<str>}`

distinct messages:
- `{"code":"ERR_SERVER_ALREADY_LISTEN"}`
example test: `test/parallel/test-http-agent.js`

### 1 × `> CLIENT SENDING REQUEST {<str>:true,<str>:<str>} < SERVER SENDING RESPONSE {<str>:{<str>:<str>},<str>:[<str>]} > CLIENT ONDATA <n> <str> > CLIENT CLOSE > CLIEN`

distinct messages:
- `> CLIENT SENDING REQUEST {"expectClose":true,"data":"POST / HTTP/1.0\r\nConnection: keep-alive\r\n\r\n"}
<  SERVER SENDING RESPONSE {"headers":{"Connection":"keep-alive"},"chunks":["OK"]}
 > CLIENT ONDATA 82 "HTTP/1.1 200 OK\r\nConnection: keep-alive\r\nDate: Tue, 11 Aug 2026 02:02:32 GMT\r\n\r\nOK"`
example test: `test/parallel/test-http-1.0-keep-alive.js`

### 1 × `AssertionError at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError
    at :anonymous (test-http-debug.js:13:1)
    at :program (test-http-debug.js:1:1)`
example test: `test/parallel/test-http-debug.js`

### 1 × `AssertionError: () => { res.writeHead(<n>, { <str>: <str> }); res.end(); } at <loc> at Readable.mustNotCall (<loc>)`

distinct messages:
- `AssertionError: () => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end();
  } at test-http-transfer-encoding-repeated-chunked.js:25
    at Readable.mustNotCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:631:12)`
example test: `test/parallel/test-http-transfer-encoding-repeated-chunked.js`

### 1 × `AssertionError: (req, res) => { res.end(); } at <loc> called with arguments: IncomingMessage [Readable] { socket: <ref *<n>> Socket [Duplex] { _handle: {}, _all`

distinct messages:
- `AssertionError: (req, res) => {
    res.end();
  } at test-http-transfer-encoding-smuggling.js:27
called with arguments: IncomingMessage [Readable] {
  socket: <ref *1> Socket [Duplex] {
    _handle: {},
    _allowHalfOpen: true,
    connecting: false,
    _connected: true,
    _readableEnded: false`
example test: `test/parallel/test-http-transfer-encoding-smuggling.js`

### 1 × `AssertionError: (req, res) => { res.writeHead(<n>); res.end(); } at <loc> called with arguments: IncomingMessage [Readable] { socket: <ref *<n>> Socket [Duplex]`

distinct messages:
- `AssertionError: (req, res) => {
    res.writeHead(200);
    res.end();
  } at test-http-request-host-header.js:7
called with arguments: IncomingMessage [Readable] {
  socket: <ref *1> Socket [Duplex] {
    _handle: {},
    _allowHalfOpen: true,
    connecting: false,
    _connected: true,
    _reada`
example test: `test/parallel/test-http-request-host-header.js`

### 1 × `AssertionError: [object Writable] does not inherit from CustomWritable at CustomWritable (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: [object Writable] does not inherit from CustomWritable
    at CustomWritable (test-stream-inheritance.js:36:3)
    at :anonymous (test-stream-inheritance.js:49:1)
    at :program (test-stream-inheritance.js:1:1)`
example test: `test/parallel/test-stream-inheritance.js`

### 1 × `AssertionError: { resultHasOwn: { onSelf: true, onSelfGetter: true, onSelfIndexed: true, onOuterProto: false, onOuterProtoGetter: false, … }, resultDesc: { onSe`

distinct messages:
- `AssertionError: { resultHasOwn: { onSelf: true, onSelfGetter: true, onSelfIndexed: true, onOuterProto: false, onOuterProtoGetter: false, … }, resultDesc: { onSelf: { value: 'onSelf', writable: true, enumerable: true, configurable: true }, onSelfGetter: { get: {}, set: undefined, enumerable: false, c`
example test: `test/parallel/test-vm-global-property-prototype.js`

### 1 × `AssertionError: /a/ failed + actual - expected + <str> - <str> at expectColored (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: /a/ failed + actual - expected  + '/a/' - '[32m/[39m[33ma[39m[32m/[39m'
    at expectColored (test-util-inspect-regexp.js:18:5)
    at :anonymous (test-util-inspect-regexp.js:112:3)
    at :program (test-util-inspect-regexp.js:1:1)`
example test: `test/parallel/test-util-inspect-regexp.js`

### 1 × `AssertionError: <n>, <n>, BrotliCompress <n> !== <n> at :=> (<loc>) at _return (<loc>)`

distinct messages:
- `AssertionError: 3, 1, BrotliCompress  3 !== 1
    at :=> (test-zlib-zero-byte.js:44:5)
    at _return (index.js:573:12)`
example test: `test/parallel/test-zlib-zero-byte.js`

### 1 × `AssertionError: <str> object is present but v8_enable_i18n_support is true. Is this test out of date? true !== <n> at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: "Intl" object is present but v8_enable_i18n_support is true. Is this test out of date?  true !== 1
    at :anonymous (test-intl.js:60:3)
    at :program (test-intl.js:1:1)`
example test: `test/parallel/test-intl.js`

### 1 × `AssertionError: bufferSize: undefined at EventEmitter.<anonymous> (<loc>) at EventEmitter._return (<loc>) at EventEmitter.emit (native) AssertionError: Expected`

distinct messages:
- `AssertionError: bufferSize: undefined
    at EventEmitter.<anonymous> (test-net-throttle.js:46:10)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)
AssertionError: Expected values to be strictly equal:

1024 !==`
example test: `test/parallel/test-net-throttle.js`

### 1 × `AssertionError: Client allowed multiple content-length headers. at Writable.<anonymous> (<loc>) at Writable.emit (native) at Duplex.push (native) AssertionError`

distinct messages:
- `AssertionError: Client allowed multiple content-length headers.
    at Writable.<anonymous> (test-http-response-multi-content-length.js:14:22)
    at Writable.emit (native)
    at Duplex.push (native)
AssertionError: Client allowed multiple content-length headers.
    at Writable.<anonymous> (test-h`
example test: `test/parallel/test-http-response-multi-content-length.js`

### 1 × `AssertionError: createScript crashes at <loc> at _return (<loc>) at EventEmitter.emit (native) AssertionError: createScript crashes at <loc> at _return (<loc>) `

distinct messages:
- `AssertionError: createScript crashes
    at test-vm-api-handles-getter-errors.js:33:5
    at _return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)
AssertionError: createScript crashes
    at test-vm-api-handles-getter-errors.js:33:5
   `
example test: `test/parallel/test-vm-api-handles-getter-errors.js`

### 1 × `AssertionError: error: unexpected argument <str> found tip: to pass <str> as a value, use <str> Usage: elide [OPTIONS] [FILE] [-- <SCRIPT_ARGS>...] [COMMAND] Fo`

distinct messages:
- `AssertionError: error: unexpected argument '--enable-source-maps' found    tip: to pass '--enable-source-maps' as a value, use '-- --enable-source-maps'  Usage: elide [OPTIONS] [FILE] [-- <SCRIPT_ARGS>...] [COMMAND]  For more information, try '--help'.   2 !== 0
    at :anonymous (test-util-getcalls`
example test: `test/parallel/test-util-getcallsites-sourcemap.js`

### 1 × `AssertionError: EXIT CODE: <n>, STDERR: error: unexpected argument <str> found tip: to pass <str> as a value, use <str> Usage: elide [OPTIONS] [FILE] [-- <SCRIP`

distinct messages:
- `AssertionError: EXIT CODE: 2, STDERR: error: unexpected argument '--unhandled-rejections' found    tip: to pass '--unhandled-rejections' as a value, use '-- --unhandled-rejections'  Usage: elide [OPTIONS] [FILE] [-- <SCRIPT_ARGS>...] [COMMAND]  For more information, try '--help'.   2 !== 0
    at :a`
example test: `test/parallel/test-async-wrap-pop-id-during-load.js`

### 1 × `AssertionError: Expected <str> not to be reference-equal to <str>: [Function: Proxy] at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Expected "actual" not to be reference-equal to "expected":  [Function: Proxy]
    at :anonymous (test-vm-proxies.js:12:1)
    at :program (test-vm-proxies.js:1:1)`
example test: `test/parallel/test-vm-proxies.js`

### 1 × `AssertionError: Expected <str> not to be reference-equal to <str>: [Function: Symbol] at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Expected "actual" not to be reference-equal to "expected":  [Function: Symbol]
    at :anonymous (test-vm-harmony-symbols.js:31:1)
    at :program (test-vm-harmony-symbols.js:1:1)`
example test: `test/parallel/test-vm-harmony-symbols.js`

### 1 × `AssertionError: Expected <str> to be reference-equal to <str>: + actual - expected + [Function: _final] - [Function (anonymous)] at :anonymous (<loc>) at :progr`

distinct messages:
- `AssertionError: Expected "actual" to be reference-equal to "expected": + actual - expected  + [Function: _final] - [Function (anonymous)]
    at :anonymous (test-stream-transform-constructor-set-methods.js:40:1)
    at :program (test-stream-transform-constructor-set-methods.js:1:1)`
example test: `test/parallel/test-stream-transform-constructor-set-methods.js`

### 1 × `AssertionError: Expected <str> to be reference-equal to <str>: + actual - expected Socket [Duplex] { _allowHalfOpen: false, _closed: false, _connected: true, _e`

distinct messages:
- `AssertionError: Expected "actual" to be reference-equal to "expected":
+ actual - expected

  Socket [Duplex] {
    _allowHalfOpen: false,
    _closed: false,
    _connected: true,
    _endCalled: false,
    _hadError: false,
    _handle: {},
+   _idleTimer: Timeout {
+     _destroyed: false,
+     `
example test: `test/parallel/test-http-agent-timeout.js`

### 1 × `AssertionError: Expected <str> to be strictly unequal to: <n> at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Expected "actual" to be strictly unequal to:  3511430202
    at :anonymous (test-v8-version-tag.js:19:1)
    at :program (test-v8-version-tag.js:1:1)`
example test: `test/parallel/test-v8-version-tag.js`

### 1 × `AssertionError: Expected <str> to be strictly unequal to: <n> at <loc>`

distinct messages:
- `AssertionError: Expected "actual" to be strictly unequal to: 0
    at test-async-wrap-trigger-id.js:16:12`
example test: `test/parallel/test-async-wrap-trigger-id.js`

### 1 × `AssertionError: Expected <str> to be strictly unequal to: <n> at EventEmitter.<anonymous> (<loc>) at EventEmitter._return (<loc>) at EventEmitter.emit (native) `

distinct messages:
- `AssertionError: Expected "actual" to be strictly unequal to: 0
    at EventEmitter.<anonymous> (test-net-server-listen-path.js:67:16)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)
AssertionError: The input di`
example test: `test/parallel/test-net-server-listen-path.js`

### 1 × `AssertionError: Expected <str> to be strictly unequal to: undefined at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Expected "actual" to be strictly unequal to:  undefined
    at :anonymous (test-fs-write.js:45:1)
    at :program (test-fs-write.js:1:1)`
example test: `test/parallel/test-fs-write.js`

### 1 × `AssertionError: Expected after-GC delta <n> to be less than <n> % of before-GC delta <n> at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Expected after-GC delta 0 to be less than 5 % of before-GC delta 0
    at :anonymous (test-zlib-unused-weak.js:17:1)
    at :program (test-zlib-unused-weak.js:1:1)`
example test: `test/parallel/test-zlib-unused-weak.js`

### 1 × `AssertionError: Expected awaitDrainWriters to be a Writable but instead got null + actual - expected + null - Writable { - _write: [Function (anonymous)] - } at`

distinct messages:
- `AssertionError: Expected awaitDrainWriters to be a Writable but instead got null + actual - expected  + null - Writable { -   _write: [Function (anonymous)] - }
    at :=> (test-stream-pipe-await-drain-manual-resume.js:30:3)
    at _return (index.js:573:12)`
example test: `test/parallel/test-stream-pipe-await-drain-manual-resume.js`

### 1 × `AssertionError: Expected error not found in: error: unexpected argument <str> found tip: to pass <str> as a value, use <str> Usage: elide [OPTIONS] [FILE] [-- <`

distinct messages:
- `AssertionError: Expected error not found in: error: unexpected argument '--expose-internals' found    tip: to pass '--expose-internals' as a value, use '-- --expose-internals'  Usage: elide [OPTIONS] [FILE] [-- <SCRIPT_ARGS>...] [COMMAND]  For more information, try '--help'.
    at :anonymous (test-`
example test: `test/parallel/test-worker-message-type-unknown.js`

### 1 × `AssertionError: Expected one argument, got [ null, <Buffer <n> <n> <n> <n> <n> <n> <n> <n> <n> <n> <n> <n> <n> <n> <n> <n> <n> <n> <n> <n> <n> <n> <n> <n> <n> <`

distinct messages:
- `AssertionError: Expected one argument, got [   null,   <Buffer 61 61 61 61 61 61 61 61 61 61 61 61 61 61 61 61 61 61 61 61 61 61 61 61 61 61 61 61 61 61 61 61 61 61 61 61 61 61 61 61 61 61 61 61 61 61 61 61 61 61 ... 78 more bytes> ]
    at :=> (index.js:800:7)
    at _return (index.js:573:12)`
example test: `test/parallel/test-zlib-maxOutputLength.js`

### 1 × `AssertionError: expected to exit at <loc> at Timeout.mustNotCall (<loc>)`

distinct messages:
- `AssertionError: expected to exit at test-net-connect-paused-connection.js:32
    at Timeout.mustNotCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:631:12)`
example test: `test/parallel/test-net-connect-paused-connection.js`

### 1 × `AssertionError: Expected values to be strictly deep-equal: + actual - expected ... Skipped lines [ <str>, <str>, <str>, <str>, ... <str>, - <str> ] at <loc>`

distinct messages:
- `AssertionError: Expected values to be strictly deep-equal:
+ actual - expected
... Skipped lines

  [
    '_read:a',
    'push:a',
    'readable',
    'data:a',
...
    'readable',
-   'end'
  ]

    at test-stream-readable-hwm-0-no-flow-data.js:98:14`
example test: `test/parallel/test-stream-readable-hwm-0-no-flow-data.js`

### 1 × `AssertionError: Expected values to be strictly deep-equal: + actual - expected ... Skipped lines [ <str>, <str>, <str>, <str>, ... <str>, - <str>, <str>, <str>,`

distinct messages:
- `AssertionError: Expected values to be strictly deep-equal: + actual - expected ... Skipped lines    [     'does_zap_garbage',     'external_memory',     'heap_size_limit',     'malloced_memory', ...     'peak_malloced_memory', -   'total_allocated_bytes',     'total_available_size',     'total_globa`
example test: `test/parallel/test-v8-stats.js`

### 1 × `AssertionError: Expected values to be strictly deep-equal: + actual - expected ... Skipped lines [ <str>, <str>, <str>, <str>, ... <str>, + <str>, + <str>, + <s`

distinct messages:
- `AssertionError: Expected values to be strictly deep-equal:
+ actual - expected
... Skipped lines

  [
    'host',
    '127.0.0.1:33707',
    'foo',
    'bar',
...
    'baz',
+   'Connection',
+   'keep-alive',
+   'Content-Length',
+   '0'
  ]

    at EventEmitter.server (test-http-dont-set-default-`
example test: `test/parallel/test-http-dont-set-default-headers.js`

### 1 × `AssertionError: Expected values to be strictly deep-equal: + actual - expected ... Skipped lines [ <str>, <str>, <str>, <str>, ... <str>, + <str>, + <str>, <str`

distinct messages:
- `AssertionError: Expected values to be strictly deep-equal:
+ actual - expected
... Skipped lines

  [
    'X-Res-a',
    'AAA',
    'X-Res-a',
    'BBB',
...
    'JJJ; KKK; LLL',
+   'Date',
+   'Tue, 11 Aug 2026 02:04:41 GMT',
    'Transfer-Encoding',
    'chunked'
  ]

    at Writable.<anonymous> `
example test: `test/parallel/test-http-multiple-headers.js`

### 1 × `AssertionError: Expected values to be strictly deep-equal: + actual - expected ... Skipped lines [Object: null prototype] { A: <str>, AFTER_LINE: <str>, B: <str`

distinct messages:
- `AssertionError: Expected values to be strictly deep-equal: + actual - expected ... Skipped lines    [Object: null prototype] {     A: 'B=C',     AFTER_LINE: 'after_line',     B: 'C=D',     BACKTICKS: 'backticks', ...     EQUAL_SIGNS: 'equals==', +   EXPAND_NEWLINES: 'expand\\nnew\\nlines', -   EXPAN`
example test: `test/parallel/test-util-parse-env.js`

### 1 × `AssertionError: Expected values to be strictly deep-equal: + actual - expected [ - <str>, <str> ] at Writable.<anonymous> (<loc>) at Writable._return (<loc>) at`

distinct messages:
- `AssertionError: Expected values to be strictly deep-equal:
+ actual - expected

  [
-   'A',
    'B'
  ]

    at Writable.<anonymous> (test-http-set-cookies.js:65:12)
    at Writable._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at Writable.emit (native)
   `
example test: `test/parallel/test-http-set-cookies.js`

### 1 × `AssertionError: Expected values to be strictly deep-equal: + actual - expected [ - <str>, <str>, - <str> ] at Immediate.<anonymous> (<loc>) at Immediate._return`

distinct messages:
- `AssertionError: Expected values to be strictly deep-equal:
+ actual - expected

  [
-   'before',
    'then',
-   'after'
  ]

    at Immediate.<anonymous> (test-async-wrap-promise-after-enabled.js:36:10)
    at Immediate._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:57`
example test: `test/parallel/test-async-wrap-promise-after-enabled.js`

### 1 × `AssertionError: Expected values to be strictly deep-equal: + actual - expected [ + <str>, - Symbol(symbol), [Function: mustNotCall] ] at :=> (<loc>) at _return `

distinct messages:
- `AssertionError: Expected values to be strictly deep-equal: + actual - expected    [ +   ' sym:2', -   Symbol(symbol),     [Function: mustNotCall]   ]
    at :=> (test-event-emitter-remove-all-listeners.js:119:5)
    at _return (index.js:573:12)
    at :anonymous (test-event-emitter-remove-all-listen`
example test: `test/parallel/test-event-emitter-remove-all-listeners.js`

### 1 × `AssertionError: Expected values to be strictly deep-equal: + actual - expected [ + <str>, + <str>, + <str> - <str> ] at Writable.<anonymous> (<loc>) at Writable`

distinct messages:
- `AssertionError: Expected values to be strictly deep-equal:
+ actual - expected

  [
+   'Cookie: foo=bar',
+   'Cookie: bar=baz',
+   'Cookie: baz=quux'
-   'Cookie: foo=bar; bar=baz; baz=quux'
  ]

    at Writable.<anonymous> (test-http.js:77:12)
    at Writable._return (/work/.harness/work/node-ap`
example test: `test/parallel/test-http.js`

### 1 × `AssertionError: Expected values to be strictly deep-equal: + actual - expected [ + <str>, + <str>, <str>, <str>, - <str>, - <str>, <str>, <str>, <str>, <str>, <`

distinct messages:
- `AssertionError: Expected values to be strictly deep-equal:
+ actual - expected

  [
+   'HOST',
+   '127.0.0.1:35049',
    'test',
    'value',
-   'HOST',
-   '127.0.0.1:35049',
    'foo',
    'bar',
    'foo',
    'baz',
    'connection',
    'close',
+   'Content-Length',
+   '0'
  ]

    at Even`
example test: `test/parallel/test-http-dont-set-default-headers-with-set-header.js`

### 1 × `AssertionError: Expected values to be strictly deep-equal: + actual - expected [ + Buffer(<n>) [Uint8Array] [ + <n> + ], + Buffer(<n>) [Uint8Array] [ + <n> + ] `

distinct messages:
- `AssertionError: Expected values to be strictly deep-equal:
+ actual - expected

  [
+   Buffer(1) [Uint8Array] [
+     97
+   ],
+   Buffer(1) [Uint8Array] [
+     98
+   ]
-   'ab'
  ]

    at test-stream-readable-setEncoding-existing-buffers.js:18:12
AssertionError: Expected values to be strictly `
example test: `test/parallel/test-stream-readable-setEncoding-existing-buffers.js`

### 1 × `AssertionError: Expected values to be strictly deep-equal: + actual - expected [ <str>, - <str>, - <str>, <str>, + <str>, + <str> ] at Writable.<anonymous> (<lo`

distinct messages:
- `AssertionError: Expected values to be strictly deep-equal:
+ actual - expected

  [
    'array-val',
-   '1',
-   'array-val',
    '2',
+   'Date',
+   'Tue, 11 Aug 2026 02:07:02 GMT'
  ]

    at Writable.<anonymous> (test-http-write-head-after-set-header.js:27:12)
    at Writable._return (/work/.ha`
example test: `test/parallel/test-http-write-head-after-set-header.js`

### 1 × `AssertionError: Expected values to be strictly deep-equal: + actual - expected [ <str>, + Symbol(s) - <str> ] at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Expected values to be strictly deep-equal: + actual - expected    [     'foo', +   Symbol(s) -   ' sym:2'   ]
    at :anonymous (test-events-list.js:17:1)
    at :program (test-events-list.js:1:1)`
example test: `test/parallel/test-events-list.js`

### 1 × `AssertionError: Expected values to be strictly deep-equal: + actual - expected [ <str>, <str>, + <str>, + <str>, + <str>, + <str> ] at EventEmitter.server (<loc`

distinct messages:
- `AssertionError: Expected values to be strictly deep-equal:
+ actual - expected

  [
    'Host',
    '127.0.0.1:38791',
+   'Connection',
+   'keep-alive',
+   'Content-Length',
+   '0'
  ]

    at EventEmitter.server (test-http-dont-set-default-headers-with-setHost.js:8:10)
    at EventEmitter._retu`
example test: `test/parallel/test-http-dont-set-default-headers-with-setHost.js`

### 1 × `AssertionError: Expected values to be strictly deep-equal: + actual - expected [ <str>, <str>, <str>, - <str> ] at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Expected values to be strictly deep-equal: + actual - expected    [     'console',     'x',     'f', -   'g'   ]
    at :anonymous (test-vm-global-define-property.js:47:1)
    at :program (test-vm-global-define-property.js:1:1)`
example test: `test/parallel/test-vm-global-define-property.js`

### 1 × `AssertionError: Expected values to be strictly deep-equal: + actual - expected [Object: null prototype] { <str>: <str>, <str>: <str>, connection: <str>, + date:`

distinct messages:
- `AssertionError: Expected values to be strictly deep-equal:
+ actual - expected

  [Object: null prototype] {
    'keep-alive': 'timeout=1',
    'transfer-encoding': 'chunked',
    connection: 'keep-alive',
+   date: 'Tue, 11 Aug 2026 02:04:16 GMT'
  }

    at Writable.<anonymous> (test-http-content-`
example test: `test/parallel/test-http-content-length.js`

### 1 × `AssertionError: Expected values to be strictly deep-equal: + actual - expected { + state: <str> - state: <str> } at Readable.<anonymous> (<loc>) at Readable._re`

distinct messages:
- `AssertionError: Expected values to be strictly deep-equal:
+ actual - expected

  {
+   state: '/9'
-   state: '/0'
  }

    at Readable.<anonymous> (test-async-hooks-execution-async-resource.js:39:14)
    at Readable._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12`
example test: `test/parallel/test-async-hooks-execution-async-resource.js`

### 1 × `AssertionError: Expected values to be strictly deep-equal: + actual - expected { + typeofProcess: <str> - foo: <str>, - typeofProcess: <str> } at :anonymous (<l`

distinct messages:
- `AssertionError: Expected values to be strictly deep-equal: + actual - expected    { +   typeofProcess: 'object' -   foo: 'bar', -   typeofProcess: 'undefined'   }
    at :anonymous (test-vm-basic.js:34:3)
    at :program (test-vm-basic.js:1:1)`
example test: `test/parallel/test-vm-basic.js`

### 1 × `AssertionError: Expected values to be strictly deep-equal: + actual - expected + [] - [ - { - id: <str>, - name: <str>, - parentFilename: <str> - }, - { - error`

distinct messages:
- `AssertionError: Expected values to be strictly deep-equal: + actual - expected  + [] - [ -   { -     id: 'does-not-exist', -     name: 'start', -     parentFilename: '/work/.harness/work/node-api/node-api-overlay/test/parallel/test-diagnostics-channel-module-require-error.js' -   }, -   { -     erro`
example test: `test/parallel/test-diagnostics-channel-module-require-error.js`

### 1 × `AssertionError: Expected values to be strictly deep-equal: + actual - expected + [] - [ - { - id: <str>, - name: <str>, - parentFilename: <str> - }, - { - id: <`

distinct messages:
- `AssertionError: Expected values to be strictly deep-equal: + actual - expected  + [] - [ -   { -     id: 'http', -     name: 'start', -     parentFilename: '/work/.harness/work/node-api/node-api-overlay/test/parallel/test-diagnostics-channel-module-require.js' -   }, -   { -     id: 'http', -     na`
example test: `test/parallel/test-diagnostics-channel-module-require.js`

### 1 × `AssertionError: Expected values to be strictly deep-equal: + actual - expected + [] - [ - <str> - ] at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Expected values to be strictly deep-equal: + actual - expected  + [] - [ -   'WORKER' - ]
    at :anonymous (test-worker-messageport-hasref.js:33:1)
    at :program (test-worker-messageport-hasref.js:1:1)`
example test: `test/parallel/test-worker-messageport-hasref.js`

### 1 × `AssertionError: Expected values to be strictly deep-equal: + actual - expected + {} - { - codeRangeSizeMb: <n>, - maxOldGenerationSizeMb: <n>, - maxYoungGenerat`

distinct messages:
- `AssertionError: Expected values to be strictly deep-equal: + actual - expected  + {} - { -   codeRangeSizeMb: 16, -   maxOldGenerationSizeMb: 16, -   maxYoungGenerationSizeMb: 4, -   stackSizeMb: 1 - }
    at :anonymous (test-worker-resource-limits.js:22:3)
    at :program (test-worker-resource-limi`
example test: `test/parallel/test-worker-resource-limits.js`

### 1 × `AssertionError: Expected values to be strictly deep-equal: + actual - expected + Buffer(<n>) [Uint8Array] [] - Buffer(<n>) [Uint8Array] [ - <n>, - <n>, - <n>, -`

distinct messages:
- `AssertionError: Expected values to be strictly deep-equal: + actual - expected  + Buffer(0) [Uint8Array] [] - Buffer(15) [Uint8Array] [ -   116, -   104, -   105, -   115, -   32, -   105, -   115, -   32, -   115, -   116, -   100, -   111, -   117, -   116, -   10 - ]
    at verifyBufOutput (test-`
example test: `test/parallel/test-child-process-spawnsync-input.js`

### 1 × `AssertionError: Expected values to be strictly deep-equal: + actual - expected + Comparison {} - Comparison { - code: <str>, - permission: <str>, - resource: <s`

distinct messages:
- `AssertionError: Expected values to be strictly deep-equal: + actual - expected  + Comparison {} - Comparison { -   code: 'ERR_ACCESS_DENIED', -   permission: 'ChildProcess', -   resource: '/opt/elide/bin/elide' - }
    at :anonymous (test-process-execve-permission-fail.js:18:3)
    at :program (test`
example test: `test/parallel/test-process-execve-permission-fail.js`

### 1 × `AssertionError: Expected values to be strictly deep-equal: + actual - expected + Set(<n>) {} - Set(<n>) { - <str>, - <str>, - <str>, - <str>, - <str>, - <str>, `

distinct messages:
- `AssertionError: Expected values to be strictly deep-equal: + actual - expected  + Set(0) {} - Set(16) { -   'atob', -   'btoa', -   'clearImmediate', -   'clearInterval', -   'clearTimeout', -   'crypto', -   'fetch', -   'global', -   'navigator', -   'performance', -   'queueMicrotask', -   'sessi`
example test: `test/parallel/test-global.js`

### 1 × `AssertionError: Expected values to be strictly deep-equal: + actual - expected + undefined - [ - <str>, - <str> - ] at Duplex.<anonymous> (<loc>) at Duplex._ret`

distinct messages:
- `AssertionError: Expected values to be strictly deep-equal:
+ actual - expected

+ undefined
- [
-   '::1:10',
-   '127.0.0.1:10'
- ]

    at Duplex.<anonymous> (test-net-autoselectfamily.js:172:12)
    at Duplex._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
Erro`
example test: `test/parallel/test-net-autoselectfamily.js`

### 1 × `AssertionError: Expected values to be strictly deep-equal: + actual - expected Comparison { - code: <str>, name: <str> }`

distinct messages:
- `AssertionError: Expected values to be strictly deep-equal:
+ actual - expected

  Comparison {
-   code: 'ERR_WORKER_UNSUPPORTED_OPERATION',
    name: 'TypeError'
  }`
example test: `test/parallel/test-process-execve-worker-threads.js`

### 1 × `AssertionError: Expected values to be strictly deep-equal: + actual - expected Comparison { - code: <str>, name: <str> } at :=> (<loc>) at _return (<loc>) at :a`

distinct messages:
- `AssertionError: Expected values to be strictly deep-equal: + actual - expected    Comparison { -   code: 'ERR_INVALID_ARG_TYPE',     name: 'TypeError'   }
    at :=> (test-zlib-invalid-input.js:47:3)
    at _return (index.js:573:12)
    at :anonymous (test-zlib-invalid-input.js:46:1)
    at :program`
example test: `test/parallel/test-zlib-invalid-input.js`

### 1 × `AssertionError: Expected values to be strictly deep-equal: + actual - expected Comparison { - code: <str>, name: <str> } at :=> (<loc>) at :=> (<loc>) at :anony`

distinct messages:
- `AssertionError: Expected values to be strictly deep-equal: + actual - expected    Comparison { -   code: 'ERR_ENCODING_NOT_SUPPORTED',     name: 'RangeError'   }
    at :=> (test-whatwg-encoding-custom-textdecoder-api-invalid-label.js:26:5)
    at :=> (test-whatwg-encoding-custom-textdecoder-api-inv`
example test: `test/parallel/test-whatwg-encoding-custom-textdecoder-api-invalid-label.js`

### 1 × `AssertionError: Expected values to be strictly deep-equal: + actual - expected Comparison { - code: <str>, name: <str> } at :=> (<loc>) at :=> (<loc>) at test (`

distinct messages:
- `AssertionError: Expected values to be strictly deep-equal: + actual - expected    Comparison { -   code: 'ERR_INVALID_URL',     name: 'TypeError'   }
    at :=> (test-http-invalid-urls.js:23:7)
    at :=> (test-http-invalid-urls.js:18:5)
    at test (test-http-invalid-urls.js:17:3)
    at :anonymous`
example test: `test/parallel/test-http-invalid-urls.js`

### 1 × `AssertionError: Expected values to be strictly deep-equal: + actual - expected Comparison { + code: <str>, - code: <str>, name: <str> } at :anonymous (<loc>) at`

distinct messages:
- `AssertionError: Expected values to be strictly deep-equal: + actual - expected    Comparison { +   code: 'ERR_INVALID_ARG_TYPE', -   code: 'ERR_INVALID_URL_SCHEME',     name: 'TypeError'   }
    at :anonymous (test-fs-whatwg-url.js:24:1)
    at :program (test-fs-whatwg-url.js:1:1)`
example test: `test/parallel/test-fs-whatwg-url.js`

### 1 × `AssertionError: Expected values to be strictly deep-equal: + actual - expected Comparison { + code: <str>, + name: <str> - code: <str>, - name: <str> } at check`

distinct messages:
- `AssertionError: Expected values to be strictly deep-equal: + actual - expected    Comparison { +   code: 'ENOENT', +   name: 'Error' -   code: 'ERR_INVALID_ARG_VALUE', -   name: 'TypeError'   }
    at check (test-fs-null-bytes.js:32:5)
    at :anonymous (test-fs-null-bytes.js:89:1)
    at :program (`
example test: `test/parallel/test-fs-null-bytes.js`

### 1 × `AssertionError: Expected values to be strictly deep-equal: + actual - expected Comparison { + message: <str> - code: <str>, - message: /dynamic import\(\) which`

distinct messages:
- `AssertionError: Expected values to be strictly deep-equal: + actual - expected    Comparison { +   message: "Cannot load module: '../fixtures/es-modules/test-esm-ok.mjs'" -   code: 'ERR_REQUIRE_ESM', -   message: /dynamic import\(\) which is available in all CommonJS modules/   }
    at :anonymous (`
example test: `test/parallel/test-require-mjs.js`

### 1 × `AssertionError: Expected values to be strictly deep-equal: + actual - expected Comparison { + message: <str> - message: /Object that needs transfer was found/ }`

distinct messages:
- `AssertionError: Expected values to be strictly deep-equal: + actual - expected    Comparison { +   message: 'value of type MessageChannelInstance is not yet supported by structured clone' -   message: /Object that needs transfer was found/   }
    at :anonymous (test-worker-broadcastchannel.js:134:3`
example test: `test/parallel/test-worker-broadcastchannel.js`

### 1 × `AssertionError: Expected values to be strictly deep-equal: + actual - expected Comparison { + message: <str>, - message: /test[/\\]fixtures[/\\]invalid\<loc>on:`

distinct messages:
- `AssertionError: Expected values to be strictly deep-equal: + actual - expected    Comparison { +   message: 'Unexpected string in JSON at position 42', -   message: /test[/\\]fixtures[/\\]invalid\.json: /,     name: 'SyntaxError'   }
    at :anonymous (test-require-json.js:27:1)
    at :program (tes`
example test: `test/parallel/test-require-json.js`

### 1 × `AssertionError: Expected values to be strictly deep-equal: + actual - expected Comparison { code: <str>, - dest: <str>, message: <str>, name: <str>, - path: <st`

distinct messages:
- `AssertionError: Expected values to be strictly deep-equal: + actual - expected    Comparison {     code: 'ENOENT', -   dest: 'does-not-exist',     message: "ENOENT: no such file or directory, chdir '/work/.harness/work/node-api/node-api-overlay' -> 'does-not-exist'",     name: 'Error', -   path: '/w`
example test: `test/parallel/test-process-chdir-errormessage.js`

### 1 × `AssertionError: Expected values to be strictly deep-equal: + actual - expected Comparison { code: <str>, + message: <str>, - message: /fd|uid|gid/, name: <str> `

distinct messages:
- `AssertionError: Expected values to be strictly deep-equal: + actual - expected    Comparison {     code: 'ERR_INVALID_ARG_TYPE', +   message: 'The "cb" argument must be of type function. Received undefined', -   message: /fd|uid|gid/,     name: 'TypeError'   }
    at testUid (test-fs-fchown.js:13:3)`
example test: `test/parallel/test-fs-fchown.js`

### 1 × `AssertionError: Expected values to be strictly deep-equal: + actual - expected Comparison { code: <str>, + message: <str>, - message: <str>, name: <str> } at :=`

distinct messages:
- `AssertionError: Expected values to be strictly deep-equal: + actual - expected    Comparison {     code: 'ERR_INVALID_ARG_TYPE', +   message: 'The first argument must be of type string or an instance of Buffer, ArrayBuffer, or Array or an Array-like Object. Received an instance of Object', -   messa`
example test: `test/parallel/test-buffer-from.js`

### 1 × `AssertionError: Expected values to be strictly deep-equal: + actual - expected Comparison { code: <str>, + message: <str>, - message: <str>, name: <str> } at <l`

distinct messages:
- `AssertionError: Expected values to be strictly deep-equal:
+ actual - expected

  Comparison {
    code: 'ERR_SERVER_NOT_RUNNING',
+   message: 'Server is not running',
-   message: 'Server is not running.',
    name: 'Error'
  }

    at /work/.harness/work/node-api/node-api-overlay/test/common/inde`
example test: `test/parallel/test-http-unix-socket.js`

### 1 × `AssertionError: Expected values to be strictly deep-equal: + actual - expected Comparison { code: <str>, + message: <str>, - message: <str>, name: <str> } at Ev`

distinct messages:
- `AssertionError: Expected values to be strictly deep-equal:
+ actual - expected

  Comparison {
    code: 'ERR_INVALID_ARG_TYPE',
+   message: 'The "ttl" property must be of type number. Received type string',
-   message: ʼThe "ttl" argument must be of type number. Received type string ('foo')ʼ,
   `
example test: `test/parallel/test-dgram-setTTL.js`

### 1 × `AssertionError: Expected values to be strictly deep-equal: + actual - expected Comparison { code: <str>, + message: <str>, - message: <str>, name: <str> } at ru`

distinct messages:
- `AssertionError: Expected values to be strictly deep-equal:
+ actual - expected

  Comparison {
    code: 'ERR_OUT_OF_RANGE',
+   message: 'The value of "start" is out of range. It must be >= 0 and an integer. Received -5',
-   message: 'The value of "start" is out of range. It must be >= 0 && <= 900`
example test: `test/parallel/test-file-write-stream3.js`

### 1 × `AssertionError: Expected values to be strictly deep-equal: + actual - expected Comparison { code: <str>, + message: <str>, + name: <str> - message: <str>, - nam`

distinct messages:
- `AssertionError: Expected values to be strictly deep-equal: + actual - expected    Comparison {     code: 'ERR_INVALID_ARG_TYPE', +   message: 'The "options" argument must be of type object. Received Received undefined', +   name: 'Error' -   message: 'The "options" argument must be of type object. R`
example test: `test/parallel/test-child-process-constructor.js`

### 1 × `AssertionError: Expected values to be strictly deep-equal: + actual - expected Comparison { code: <str>, message: <str>, + name: <str> - name: <str> } at :anony`

distinct messages:
- `AssertionError: Expected values to be strictly deep-equal: + actual - expected    Comparison {     code: 'ERR_INVALID_HTTP_TOKEN',     message: 'Header name must be a valid HTTP token ["undefined"]', +   name: 'Error' -   name: 'TypeError'   }
    at :anonymous (test-http-outgoing-proto.js:16:1)
   `
example test: `test/parallel/test-http-outgoing-proto.js`

### 1 × `AssertionError: Expected values to be strictly deep-equal: + actual - expected TypeError { - code: <str>, constructor: [Function: TypeError] } at :anonymous (<l`

distinct messages:
- `AssertionError: Expected values to be strictly deep-equal: + actual - expected    TypeError { -   code: 'ERR_CONSTRUCT_CALL_INVALID',     constructor: [Function: TypeError]   }
    at :anonymous (test-worker-message-port-constructor.js:14:1)
    at :program (test-worker-message-port-constructor.js:1`
example test: `test/parallel/test-worker-message-port-constructor.js`

### 1 × `AssertionError: Expected values to be strictly deep-equal: null !== <str> at :=> (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Expected values to be strictly deep-equal:  null !== '#frag'
    at :=> (test-url-parse-query.js:87:7)
    at :anonymous (test-url-parse-query.js:83:3)
    at :program (test-url-parse-query.js:1:1)`
example test: `test/parallel/test-url-parse-query.js`

### 1 × `AssertionError: Expected values to be strictly deep-equal: undefined !== {} at <loc> AssertionError: Expected values to be strictly deep-equal: undefined !== {}`

distinct messages:
- `AssertionError: Expected values to be strictly deep-equal:

undefined !== {}

    at test-next-tick.js:50:10
AssertionError: Expected values to be strictly deep-equal:

undefined !== {}

    at test-next-tick.js:58:10`
example test: `test/parallel/test-next-tick.js`

### 1 × `AssertionError: Expected values to be strictly equal: -<n> !== <n> at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Expected values to be strictly equal:  -1 !== 1
    at :anonymous (test-buffer-indexof.js:89:1)
    at :program (test-buffer-indexof.js:1:1)`
example test: `test/parallel/test-buffer-indexof.js`

### 1 × `AssertionError: Expected values to be strictly equal: {} !== null at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Expected values to be strictly equal:  {} !== null
    at :anonymous (test-fs-constants.js:11:1)
    at :program (test-fs-constants.js:1:1)`
example test: `test/parallel/test-fs-constants.js`

### 1 × `AssertionError: Expected values to be strictly equal: + actual - expected ... Skipped lines <str> + <str> + <str> + <str> + <str> + ... <str> + + <str> + - <str`

distinct messages:
- `AssertionError: Expected values to be strictly equal: + actual - expected ... Skipped lines    'URL {\n' +     "  href: 'https://username:password@host.name:8080/path/name/?que=ry#hash',\n" +     "  origin: 'https://host.name:8080',\n" +     "  protocol: 'https:',\n" +     "  username: 'username',\n`
example test: `test/parallel/test-whatwg-url-custom-inspect.js`

### 1 × `AssertionError: Expected values to be strictly equal: + actual - expected + [Function: writeUInt8] - undefined at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Expected values to be strictly equal: + actual - expected  + [Function: writeUInt8] - undefined
    at :anonymous (test-buffer-writeuint.js:228:3)
    at :program (test-buffer-writeuint.js:1:1)`
example test: `test/parallel/test-buffer-writeuint.js`

### 1 × `AssertionError: Expected values to be strictly equal: + actual - expected + <n> - <n> at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Expected values to be strictly equal: + actual - expected  + 0 - 9223372036854776000
    at :anonymous (test-perf-hooks-histogram.js:17:3)
    at :program (test-perf-hooks-histogram.js:1:1)`
example test: `test/parallel/test-perf-hooks-histogram.js`

### 1 × `AssertionError: Expected values to be strictly equal: + actual - expected + <str> - <str> + - <str> + - <str> + - <str> + - <str> at Duplex.<anonymous> (<loc>) `

distinct messages:
- `AssertionError: Expected values to be strictly equal:
+ actual - expected

+ 'GET / HTTP/1.1\r\nExpect: 100-continue\r\nHost: localhost\r\nConnection: close\r\n\r\n'
- 'GET / HTTP/1.1\r\n' +
-   'Expect: 100-continue\r\n' +
-   'Host: localhost:80\r\n' +
-   'Connection: close\r\n' +
-   '\r\n'

   `
example test: `test/parallel/test-http-sync-write-error-during-continue.js`

### 1 × `AssertionError: Expected values to be strictly equal: + actual - expected + <str> - <str> at :=> (<loc>) at _return (<loc>)`

distinct messages:
- `AssertionError: Expected values to be strictly equal: + actual - expected  + '["foo"]' - "[ 'foo' ]"
    at :=> (test-console-tty-colors.js:19:7)
    at _return (index.js:573:12)`
example test: `test/parallel/test-console-tty-colors.js`

### 1 × `AssertionError: Expected values to be strictly equal: + actual - expected + <str> - <str> at :=> (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Expected values to be strictly equal: + actual - expected  + 'f=false&t=true' - 'f=&t='
    at :=> (test-querystring.js:273:3)
    at :anonymous (test-querystring.js:272:1)
    at :program (test-querystring.js:1:1)`
example test: `test/parallel/test-querystring.js`

### 1 × `AssertionError: Expected values to be strictly equal: + actual - expected + <str> - <str> at done (<loc>) at done (<loc>) at Writable.onUpgrade (<loc>) at Writa`

distinct messages:
- `AssertionError: Expected values to be strictly equal:
+ actual - expected

+ 'upgrade'
- 'regular'

    at done (test-http-upgrade-advertise.js:23:12)
    at done (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at Writable.onUpgrade (test-http-upgrade-advertise.js:45:`
example test: `test/parallel/test-http-upgrade-advertise.js`

### 1 × `AssertionError: Expected values to be strictly equal: + actual - expected + <str> - <str> at process.onUncaught (<loc>) at process.onUncaught (<loc>) AssertionE`

distinct messages:
- `AssertionError: Expected values to be strictly equal:
+ actual - expected

+ 'Expected values to be strictly equal:\n\ntrue !== false\n'
- 'Destroy test'

    at process.onUncaught (test-http-client-incomingmessage-destroy.js:13:10)
    at process.onUncaught (/work/.harness/work/node-api/node-api-ov`
example test: `test/parallel/test-http-client-incomingmessage-destroy.js`

### 1 × `AssertionError: Expected values to be strictly equal: + actual - expected + <str> - <str> at test (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Expected values to be strictly equal: + actual - expected  + "Error: Usage: 'elide <script>' or 'elide run <script>'; see --help" - ''
    at test (test-buffer-constructor-node-modules-paths.js:20:5)
    at :anonymous (test-buffer-constructor-node-modules-paths.js:23:1)
    at :progr`
example test: `test/parallel/test-buffer-constructor-node-modules-paths.js`

### 1 × `AssertionError: Expected values to be strictly equal: + actual - expected + <str> - <str> at testMethod (<loc>) at :=> (<loc>) at :anonymous (<loc>) at :program`

distinct messages:
- `AssertionError: Expected values to be strictly equal: + actual - expected  + 'inspectUrl' - '[nodejs.util.inspect.custom]'
    at testMethod (test-whatwg-url-properties.js:102:3)
    at :=> (test-whatwg-url-properties.js:11:3)
    at :anonymous (test-whatwg-url-properties.js:6:1)
    at :program (te`
example test: `test/parallel/test-whatwg-url-properties.js`

### 1 × `AssertionError: Expected values to be strictly equal: + actual - expected + <str> - <str> at Writable.<anonymous> (<loc>) at Writable._return (<loc>) at Writabl`

distinct messages:
- `AssertionError: Expected values to be strictly equal:
+ actual - expected

+ 'close'
- 'keep-alive'

    at Writable.<anonymous> (test-http-automatic-headers.js:26:12)
    at Writable._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at Writable.emit (native)
  `
example test: `test/parallel/test-http-automatic-headers.js`

### 1 × `AssertionError: Expected values to be strictly equal: + actual - expected + <str> - undefined at EventEmitter.<anonymous> (<loc>) at EventEmitter._return (<loc>`

distinct messages:
- `AssertionError: Expected values to be strictly equal:
+ actual - expected

+ 'Error: fhqwhgads'
- undefined

    at EventEmitter.<anonymous> (test-worker-error-stack-getter-throws.js:19:10)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at`
example test: `test/parallel/test-worker-error-stack-getter-throws.js`

### 1 × `AssertionError: Expected values to be strictly equal: + actual - expected + <str> + + <str> + + <str> + + <str> - <str> at Readable.<anonymous> (<loc>) at Reada`

distinct messages:
- `AssertionError: Expected values to be strictly equal:
+ actual - expected

+ 'TypeError: (intermediate value)._rawDebug is not a function\n' +
+   '    at child (test-process-raw-debug.js:69:3)\n' +
+   '    at :anonymous (test-process-raw-debug.js:30:12)\n' +
+   '    at :program (test-process-raw-`
example test: `test/parallel/test-process-raw-debug.js`

### 1 × `AssertionError: Expected values to be strictly equal: + actual - expected + <str> + + <str> + + <str> + + <str> + + <str> + + <str> + + <str> + + <str> + + <str`

distinct messages:
- `AssertionError: Expected values to be strictly equal:
+ actual - expected

+ 'HTTP/1.1 200 OK\r\n' +
+   'Content-Type: text/plain\r\n' +
+   'Date: Tue, 11 Aug 2026 02:03:09 GMT\r\n' +
+   'Connection: keep-alive\r\n' +
+   'Keep-Alive: timeout=65\r\n' +
+   'Transfer-Encoding: chunked\r\n' +
+   '`
example test: `test/parallel/test-http-chunk-extensions-limit.js`

### 1 × `AssertionError: Expected values to be strictly equal: + actual - expected + Buffer(<n>) [Uint8Array] [ + <n>, + <n>, + <n>, + <n>, + <n>, + <n> + ] - <str> at :`

distinct messages:
- `AssertionError: Expected values to be strictly equal: + actual - expected  + Buffer(6) [Uint8Array] [ +   97, +   0, +   98, +   0, +   99, +   0 + ] - 'abc'
    at :anonymous (test-stream-decoder-objectmode.js:18:1)
    at :program (test-stream-decoder-objectmode.js:1:1)`
example test: `test/parallel/test-stream-decoder-objectmode.js`

### 1 × `AssertionError: Expected values to be strictly equal: + actual - expected + Immediate { + _argv: [], + _destroyed: false, + _idleNext: null, + _idlePrev: null, `

distinct messages:
- `AssertionError: Expected values to be strictly equal: + actual - expected  + Immediate { +   _argv: [], +   _destroyed: false, +   _idleNext: null, +   _idlePrev: null, +   _onImmediate: [Function: mustNotCall] + } - undefined
    at :anonymous (test-async-hooks-top-level-clearimmediate.js:31:1)
   `
example test: `test/parallel/test-async-hooks-top-level-clearimmediate.js`

### 1 × `AssertionError: Expected values to be strictly equal: + actual - expected + null - Error: test destroy - at <loc> - at <loc> at :anonymous (<loc>) at :program (`

distinct messages:
- `AssertionError: Expected values to be strictly equal: + actual - expected  + null - Error: test destroy -     at test-http-outgoing-destroyed.js:23:15 -     at test-http-outgoing-destroyed.js:1:1
    at :anonymous (test-http-outgoing-destroyed.js:29:3)
    at :program (test-http-outgoing-destroyed.j`
example test: `test/parallel/test-http-outgoing-destroyed.js`

### 1 × `AssertionError: Expected values to be strictly equal: + actual - expected + null - undefined at EventEmitter.handleDomainError (<loc>) at EventEmitter.emit (nat`

distinct messages:
- `AssertionError: Expected values to be strictly equal:
+ actual - expected

+ null
- undefined

    at EventEmitter.handleDomainError (test-timers-reset-process-domain-on-throw.js:32:12)
    at EventEmitter.emit (native)
    at Timeout.err (test-timers-reset-process-domain-on-throw.js:21:5)`
example test: `test/parallel/test-timers-reset-process-domain-on-throw.js`

### 1 × `AssertionError: Expected values to be strictly equal: + actual - expected + undefined - [Function: mustNotCall] at :=> (<loc>) at _return (<loc>) at :anonymous `

distinct messages:
- `AssertionError: Expected values to be strictly equal: + actual - expected  + undefined - [Function: mustNotCall]
    at :=> (test-domain-intercept.js:16:5)
    at _return (index.js:573:12)
    at :anonymous (test-domain-intercept.js:21:3)
    at :program (test-domain-intercept.js:1:1)`
example test: `test/parallel/test-domain-intercept.js`

### 1 × `AssertionError: Expected values to be strictly equal: + actual - expected + undefined - <n> at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Expected values to be strictly equal: + actual - expected  + undefined - 1500
    at :anonymous (test-http-agent-keep-alive-timeout-buffer.js:10:3)
    at :program (test-http-agent-keep-alive-timeout-buffer.js:1:1)`
example test: `test/parallel/test-http-agent-keep-alive-timeout-buffer.js`

### 1 × `AssertionError: Expected values to be strictly equal: + actual - expected + undefined - <ref *<n>> IncomingMessage [Readable] { - _consuming: false, - _dumped: `

distinct messages:
- `AssertionError: Expected values to be strictly equal:
+ actual - expected

+ undefined
- <ref *2> IncomingMessage [Readable] {
-   _consuming: false,
-   _dumped: false,
-   _keepAlive: true,
-   aborted: false,
-   complete: false,
-   connection: <ref *1> Socket [Duplex] {
-     _allowHalfOpen: tr`
example test: `test/parallel/test-http-server.js`

### 1 × `AssertionError: Expected values to be strictly equal: + actual - expected + undefined - <str> at checkSourceMapUrl (<loc>) at :anonymous (<loc>) at :program (<l`

distinct messages:
- `AssertionError: Expected values to be strictly equal: + actual - expected  + undefined - 'sourcemap.json'
    at checkSourceMapUrl (test-vm-source-map-url.js:9:3)
    at :anonymous (test-vm-source-map-url.js:24:1)
    at :program (test-vm-source-map-url.js:1:1)`
example test: `test/parallel/test-vm-source-map-url.js`

### 1 × `AssertionError: Expected values to be strictly equal: + actual - expected + undefined - <str> at EventEmitter.<anonymous> (<loc>) at EventEmitter._return (<loc>`

distinct messages:
- `AssertionError: Expected values to be strictly equal:
+ actual - expected

+ undefined
- 'ERR_WORKER_UNSERIALIZABLE_ERROR'

    at EventEmitter.<anonymous> (test-worker-message-not-serializable.js:23:10)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:`
example test: `test/parallel/test-worker-message-not-serializable.js`

### 1 × `AssertionError: Expected values to be strictly equal: + actual - expected + undefined - <str> at Writable.<anonymous> (<loc>) at Writable._return (<loc>) at Wri`

distinct messages:
- `AssertionError: Expected values to be strictly equal:
+ actual - expected

+ undefined
- 'first'

    at Writable.<anonymous> (test-async-local-storage-http-agent.js:39:14)
    at Writable._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at Writable.emit (nativ`
example test: `test/parallel/test-async-local-storage-http-agent.js`

### 1 × `AssertionError: Expected values to be strictly equal: + actual - expected + undefined - ClientRequest [Writable] { - _bodyForbidden: false, - _endCalled: true, `

distinct messages:
- `AssertionError: Expected values to be strictly equal:
+ actual - expected

+ undefined
- ClientRequest [Writable] {
-   _bodyForbidden: false,
-   _endCalled: true,
-   _ended: false,
-   _ending: false,
-   _flushedToSocket: false,
-   _hadWrite: true,
-   _handlers: {
-     onClose: [Function: onC`
example test: `test/parallel/test-http-connect.js`

### 1 × `AssertionError: Expected values to be strictly equal: + actual - expected + undefined - ClientRequest [Writable] { - _bodyForbidden: true, - _coalesceScheduled:`

distinct messages:
- `AssertionError: Expected values to be strictly equal:
+ actual - expected

+ undefined
- ClientRequest [Writable] {
-   _bodyForbidden: true,
-   _coalesceScheduled: false,
-   _coalesced: null,
-   _endCalled: true,
-   _ended: false,
-   _ending: false,
-   _flushedToSocket: true,
-   _hadWrite: f`
example test: `test/parallel/test-http-agent-remove.js`

### 1 × `AssertionError: Expected values to be strictly equal: + actual - expected + undefined - false at EventEmitter.<anonymous> (<loc>) at EventEmitter._return (<loc>`

distinct messages:
- `AssertionError: Expected values to be strictly equal:
+ actual - expected

+ undefined
- false

    at EventEmitter.<anonymous> (test-net-allow-half-open.js:12:12)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native`
example test: `test/parallel/test-net-allow-half-open.js`

### 1 × `AssertionError: Expected values to be strictly equal: + actual - expected + undefined - false at globalSetting (<loc>)`

distinct messages:
- `AssertionError: Expected values to be strictly equal:
+ actual - expected

+ undefined
- false

    at globalSetting (test-event-capture-rejections.js:90:10)`
example test: `test/parallel/test-event-capture-rejections.js`

### 1 × `AssertionError: Expected values to be strictly equal: + actual - expected + undefined - MessagePort {} at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Expected values to be strictly equal: + actual - expected  + undefined - MessagePort {}
    at :anonymous (test-messageport-hasref.js:19:1)
    at :program (test-messageport-hasref.js:1:1)`
example test: `test/parallel/test-messageport-hasref.js`

### 1 × `AssertionError: Expected values to be strictly equal: + actual - expected + undefined - null at :anonymous (<loc>) at _return (<loc>)`

distinct messages:
- `AssertionError: Expected values to be strictly equal: + actual - expected  + undefined - null
    at :anonymous (test-stream2-writable.js:223:5)
    at _return (index.js:573:12)`
example test: `test/parallel/test-stream2-writable.js`

### 1 × `AssertionError: Expected values to be strictly equal: + actual - expected + undefined - null at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Expected values to be strictly equal: + actual - expected  + undefined - null
    at :anonymous (test-zlib-destroy.js:14:3)
    at :program (test-zlib-destroy.js:1:1)`
example test: `test/parallel/test-zlib-destroy.js`

### 1 × `AssertionError: Expected values to be strictly equal: + actual - expected + undefined - null at <loc> at _return (<loc>)`

distinct messages:
- `AssertionError: Expected values to be strictly equal:
+ actual - expected

+ undefined
- null

    at test-http-agent-free-socket-data-guard.js:50:14
    at _return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)`
example test: `test/parallel/test-http-agent-free-socket-data-guard.js`

### 1 × `AssertionError: Expected values to be strictly equal: + actual - expected + undefined - null at EventEmitter.<anonymous> (<loc>) at EventEmitter._return (<loc>)`

distinct messages:
- `AssertionError: Expected values to be strictly equal:
+ actual - expected

+ undefined
- null

    at EventEmitter.<anonymous> (test-http-parser-freed-before-upgrade.js:10:10)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.`
example test: `test/parallel/test-http-parser-freed-before-upgrade.js`

### 1 × `AssertionError: Expected values to be strictly equal: + actual - expected + undefined - Readable { - _read: [Function (anonymous)], - unpipe: [Function (anonymo`

distinct messages:
- `AssertionError: Expected values to be strictly equal: + actual - expected  + undefined - Readable { -   _read: [Function (anonymous)], -   unpipe: [Function (anonymous)] - }
    at :anonymous (test-stream2-pipe-error-handling.js:63:3)
    at :program (test-stream2-pipe-error-handling.js:1:1)`
example test: `test/parallel/test-stream2-pipe-error-handling.js`

### 1 × `AssertionError: Expected values to be strictly equal: + actual - expected + undefined - Server [EventEmitter] { - _allowHalfOpen: true, - _connectionKey: <str>,`

distinct messages:
- `AssertionError: Expected values to be strictly equal:
+ actual - expected

+ undefined
- Server [EventEmitter] {
-   _allowHalfOpen: true,
-   _connectionKey: '../node-test/.tmp.2062/node-test.98489.sock',
-   _connections: 1,
-   _handle: {},
-   _pauseOnConnect: false,
-   listening: true,
-   max`
example test: `test/parallel/test-net-pingpong.js`

### 1 × `AssertionError: Expected values to be strictly equal: + actual - expected + Url { + auth: null, + hash: null, + host: null, + hostname: null, + href: <str>, + p`

distinct messages:
- `AssertionError: Expected values to be strictly equal: + actual - expected  + Url { +   auth: null, +   hash: null, +   host: null, +   hostname: null, +   href: 'foo', +   path: 'foo', +   pathname: 'foo', +   port: null, +   protocol: null, +   query: null, +   search: null, +   slashes: null + } -`
example test: `test/parallel/test-url-relative.js`

### 1 × `AssertionError: Expected values to be strictly equal: + actual - expected <str> + <str> + <str> + <str> + + <str> + + <str> + <str> at Duplex.<anonymous> (<loc>`

distinct messages:
- `AssertionError: Expected values to be strictly equal:
+ actual - expected

  'HTTP/1.1 101 Web Socket Protocol Handshake\r\n' +
    'Upgrade: WebSocket\r\n' +
    'Connection: Upgrade\r\n' +
    '\r\n' +
+   'Connection: Upgrade\r\n' +
+   '\r\n' +
    '12345678901234567890'

    at Duplex.<anonymou`
example test: `test/parallel/test-http-server-request-timeout-upgrade.js`

### 1 × `AssertionError: Expected values to be strictly equal: <n> !== -<n> at EventEmitter.<anonymous> (<loc>) at EventEmitter._return (<loc>) at EventEmitter.emit (nat`

distinct messages:
- `AssertionError: Expected values to be strictly equal:

1 !== -1

    at EventEmitter.<anonymous> (test-worker-safe-getters.js:27:12)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)`
example test: `test/parallel/test-worker-safe-getters.js`

### 1 × `AssertionError: Expected values to be strictly equal: <n> !== <n> at :=> (<loc>) at _return (<loc>) at recurse (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Expected values to be strictly equal:  2 !== 1
    at :=> (test-async-hooks-recursive-stack-runInAsyncScope.js:11:5)
    at _return (index.js:573:12)
    at recurse (test-async-hooks-recursive-stack-runInAsyncScope.js:10:3)
    at :anonymous (test-async-hooks-recursive-stack-runInAsy`
example test: `test/parallel/test-async-hooks-recursive-stack-runInAsyncScope.js`

### 1 × `AssertionError: Expected values to be strictly equal: <n> !== <n> at :anonymous (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Expected values to be strictly equal:  6 !== 0
    at :anonymous (test-readline.js:82:5)
    at :anonymous (test-readline.js:80:3)
    at :program (test-readline.js:1:1)`
example test: `test/parallel/test-readline.js`

### 1 × `AssertionError: Expected values to be strictly equal: <n> !== <n> at <loc> at _return (<loc>)`

distinct messages:
- `AssertionError: Expected values to be strictly equal:

1 !== 3

    at test-http-client-timeout-option-listeners.js:27:12
    at _return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)`
example test: `test/parallel/test-http-client-timeout-option-listeners.js`

### 1 × `AssertionError: Expected values to be strictly equal: <n> !== <n> at checkAll (<loc>) at clientConnected (<loc>) at Duplex.connected (<loc>) at Duplex.emit (nat`

distinct messages:
- `AssertionError: Expected values to be strictly equal:

0 !== 16

    at checkAll (test-process-getactiveresources-track-active-handles.js:33:10)
    at clientConnected (test-process-getactiveresources-track-active-handles.js:28:5)
    at Duplex.connected (test-process-getactiveresources-track-active`
example test: `test/parallel/test-process-getactiveresources-track-active-handles.js`

### 1 × `AssertionError: Expected values to be strictly equal: <n> !== <n> at Duplex.<anonymous> (<loc>) at Duplex._return (<loc>) at Duplex.push (native) AssertionError`

distinct messages:
- `AssertionError: Expected values to be strictly equal:

4 !== 0

    at Duplex.<anonymous> (test-net-server-pause-on-connect.js:53:12)
    at Duplex._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at Duplex.push (native)
AssertionError: Expected values to be st`
example test: `test/parallel/test-net-server-pause-on-connect.js`

### 1 × `AssertionError: Expected values to be strictly equal: <n> !== <n> at EventEmitter.server (<loc>) at EventEmitter._return (<loc>) at EventEmitter.emit (native) a`

distinct messages:
- `AssertionError: Expected values to be strictly equal:

3 !== 8

    at EventEmitter.server (test-http-outgoing-properties.js:27:12)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)
    at Duplex.push (native)`
example test: `test/parallel/test-http-outgoing-properties.js`

### 1 × `AssertionError: Expected values to be strictly equal: <n> !== <n> at test (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Expected values to be strictly equal:  18 !== 436
    at test (test-process-umask-mask.js:27:3)
    at :anonymous (test-process-umask-mask.js:32:1)
    at :program (test-process-umask-mask.js:1:1)`
example test: `test/parallel/test-process-umask-mask.js`

### 1 × `AssertionError: Expected values to be strictly equal: <n> !== <n> at Timeout.<anonymous> (<loc>) at Timeout._return (<loc>)`

distinct messages:
- `AssertionError: Expected values to be strictly equal:

2 !== 1

    at Timeout.<anonymous> (test-http-client-timeout-option.js:35:12)
    at Timeout._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)`
example test: `test/parallel/test-http-client-timeout-option.js`

### 1 × `AssertionError: Expected values to be strictly equal: <n> !== <n> at Writable.<anonymous> (<loc>) at Writable._return (<loc>) at Writable.emit (native)`

distinct messages:
- `AssertionError: Expected values to be strictly equal:

1 !== 0

    at Writable.<anonymous> (test-http-client-parse-error.js:46:14)
    at Writable._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at Writable.emit (native)`
example test: `test/parallel/test-http-client-parse-error.js`

### 1 × `AssertionError: Expected values to be strictly equal: <n> !== <n> at Writable.<anonymous> (<loc>) at Writable._return (<loc>) at Writable.emit (native) at Duple`

distinct messages:
- `AssertionError: Expected values to be strictly equal:

65536 !== 1024

    at Writable.<anonymous> (test-http-incoming-message-options.js:18:12)
    at Writable._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at Writable.emit (native)
    at Duplex.push (nativ`
example test: `test/parallel/test-http-incoming-message-options.js`

### 1 × `AssertionError: Expected values to be strictly equal: <n> !== <n> at Writable.<anonymous> (<loc>) at Writable._return (<loc>) at Writable.emit (native) at Reada`

distinct messages:
- `AssertionError: Expected values to be strictly equal:

1026 !== 1024

    at Writable.<anonymous> (test-http-abort-stream-end.js:53:50)
    at Writable._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at Writable.emit (native)
    at Readable.<anonymous> (test-`
example test: `test/parallel/test-http-abort-stream-end.js`

### 1 × `AssertionError: Expected values to be strictly equal: <n> !== <n> at Writable.<anonymous> (<loc>) at Writable.<anonymous> (<loc>) at Writable._return (<loc>) Ty`

distinct messages:
- `AssertionError: Expected values to be strictly equal:

0 !== 1

    at Writable.<anonymous> (test-fs-write-stream-flush.js:33:14)
    at Writable.<anonymous> (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:538:17)
    at Writable._return (/work/.harness/work/node-api/node-api-ove`
example test: `test/parallel/test-fs-write-stream-flush.js`

### 1 × `AssertionError: Expected values to be strictly equal: <n> !== null at Immediate.<anonymous> (<loc>) at Immediate._return (<loc>)`

distinct messages:
- `AssertionError: Expected values to be strictly equal:

2 !== null

    at Immediate.<anonymous> (test-stream-transform-hwm0.js:23:12)
    at Immediate._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)`
example test: `test/parallel/test-stream-transform-hwm0.js`

### 1 × `AssertionError: Expected values to be strictly equal: <n> !== undefined at Duplex.<anonymous> (<loc>) at Duplex._return (<loc>) at Duplex.emit (native)`

distinct messages:
- `AssertionError: Expected values to be strictly equal:

0 !== undefined

    at Duplex.<anonymous> (test-net-dns-error.js:40:10)
    at Duplex._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at Duplex.emit (native)`
example test: `test/parallel/test-net-dns-error.js`

### 1 × `AssertionError: Expected values to be strictly equal: <n> !== undefined at Object.<anonymous> (<loc>) at Object._return (<loc>) AssertionError: Expected values `

distinct messages:
- `AssertionError: Expected values to be strictly equal:

3 !== undefined

    at Object.<anonymous> (test-fs-read-stream-err.js:40:10)
    at Object._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
AssertionError: Expected values to be strictly equal:
+ actual - expe`
example test: `test/parallel/test-fs-read-stream-err.js`

### 1 × `AssertionError: Expected values to be strictly equal: <str> !== <str> at :=> (<loc>) at _return (<loc>)`

distinct messages:
- `AssertionError: Expected values to be strictly equal:  'YWJj' !== 'qw=='
    at :=> (test-stream-readable-unshift.js:65:7)
    at _return (index.js:573:12)`
example test: `test/parallel/test-stream-readable-unshift.js`

### 1 × `AssertionError: Expected values to be strictly equal: <str> !== <str> at :=> (<loc>) at _return (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Expected values to be strictly equal:  '��bar' !== '☃bar'
    at :=> (test-readline-reopen.js:39:5)
    at _return (index.js:573:12)
    at :anonymous (test-readline-reopen.js:24:1)
    at :program (test-readline-reopen.js:1:1)`
example test: `test/parallel/test-readline-reopen.js`

### 1 × `AssertionError: Expected values to be strictly equal: <str> !== <str> at Object.cb (<loc>) at Object.cb (<loc>)`

distinct messages:
- `AssertionError: Expected values to be strictly equal:

'EIO' !== 'EMSGSIZE'

    at Object.cb (test-dgram-msgsize.js:34:10)
    at Object.cb (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)`
example test: `test/parallel/test-dgram-msgsize.js`

### 1 × `AssertionError: Expected values to be strictly equal: <str> !== <str> at Readable.<anonymous> (<loc>) at Readable._return (<loc>) at Readable.push (native)`

distinct messages:
- `AssertionError: Expected values to be strictly equal:

'object' !== 'string'

    at Readable.<anonymous> (test-child-process-exec-stdout-stderr-data-string.js:12:10)
    at Readable._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at Readable.push (native)`
example test: `test/parallel/test-child-process-exec-stdout-stderr-data-string.js`

### 1 × `AssertionError: Expected values to be strictly equal: <str> !== <str> at testEnd (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Expected values to be strictly equal:  '�a' !== 'a'
    at testEnd (test-string-decoder-end.js:127:3)
    at :anonymous (test-string-decoder-end.js:50:1)
    at :program (test-string-decoder-end.js:1:1)`
example test: `test/parallel/test-string-decoder-end.js`

### 1 × `AssertionError: Expected values to be strictly equal: <str> !== undefined at assertEqualName (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Expected values to be strictly equal:  '' !== undefined
    at assertEqualName (test-console-methods.js:47:5)
    at :anonymous (test-console-methods.js:57:3)
    at :program (test-console-methods.js:1:1)`
example test: `test/parallel/test-console-methods.js`

### 1 × `AssertionError: Expected values to be strictly equal: false !== true at <loc> at _return (<loc>)`

distinct messages:
- `AssertionError: Expected values to be strictly equal:

false !== true

    at test-http-outgoing-finished.js:19:12
    at _return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)`
example test: `test/parallel/test-http-outgoing-finished.js`

### 1 × `AssertionError: Expected values to be strictly equal: false !== true at Duplex.<anonymous> (<loc>) at Duplex._return (<loc>)`

distinct messages:
- `AssertionError: Expected values to be strictly equal:

false !== true

    at Duplex.<anonymous> (test-net-writable.js:12:12)
    at Duplex._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)`
example test: `test/parallel/test-net-writable.js`

### 1 × `AssertionError: Expected values to be strictly equal: false !== true at Immediate.<anonymous> (<loc>) at Immediate._return (<loc>)`

distinct messages:
- `AssertionError: Expected values to be strictly equal:

false !== true

    at Immediate.<anonymous> (test-net-connect-memleak.js:54:12)
    at Immediate._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)`
example test: `test/parallel/test-net-connect-memleak.js`

### 1 × `AssertionError: Expected values to be strictly equal: false !== true at Writable.<anonymous> (<loc>) at Writable._return (<loc>)`

distinct messages:
- `AssertionError: Expected values to be strictly equal:

false !== true

    at Writable.<anonymous> (test-http-outgoing-writableFinished.js:28:14)
    at Writable._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)`
example test: `test/parallel/test-http-outgoing-writableFinished.js`

### 1 × `AssertionError: Expected values to be strictly equal: false !== true at Writable.<anonymous> (<loc>) at Writable._return (<loc>) AssertionError: Expected values`

distinct messages:
- `AssertionError: Expected values to be strictly equal:

false !== true

    at Writable.<anonymous> (test-http-remove-header-stays-removed.js:44:12)
    at Writable._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
AssertionError: Expected values to be strictly deep-`
example test: `test/parallel/test-http-remove-header-stays-removed.js`

### 1 × `AssertionError: Expected values to be strictly equal: null !== <n> at EventEmitter.<anonymous> (<loc>) at EventEmitter._return (<loc>) at EventEmitter.emit (nat`

distinct messages:
- `AssertionError: Expected values to be strictly equal:

null !== 0

    at EventEmitter.<anonymous> (test-child-process-kill.js:71:10)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)`
example test: `test/parallel/test-child-process-kill.js`

### 1 × `AssertionError: Expected values to be strictly equal: null !== <str> at EventEmitter.<anonymous> (<loc>) at EventEmitter._return (<loc>) at EventEmitter.emit (n`

distinct messages:
- `AssertionError: Expected values to be strictly equal:

null !== 'SIGINT'

    at EventEmitter.<anonymous> (test-process-remove-all-signal-listeners.js:17:12)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)`
example test: `test/parallel/test-process-remove-all-signal-listeners.js`

### 1 × `AssertionError: Expected values to be strictly equal: true !== false at :=> (<loc>) at _return (<loc>) at :=> (<loc>) at _return (<loc>) at :anonymous (<loc>) a`

distinct messages:
- `AssertionError: Expected values to be strictly equal:  true !== false
    at :=> (test-stream-pipe-unpipe-streams.js:47:5)
    at _return (index.js:573:12)
    at :=> (test-stream-pipe-unpipe-streams.js:76:9)
    at _return (index.js:573:12)
    at :anonymous (test-stream-pipe-unpipe-streams.js:84:3`
example test: `test/parallel/test-stream-pipe-unpipe-streams.js`

### 1 × `AssertionError: Expected values to be strictly equal: true !== false at :anonymous (<loc>) at _return (<loc>)`

distinct messages:
- `AssertionError: Expected values to be strictly equal:  true !== false
    at :anonymous (test-stream-readable-needReadable.js:69:3)
    at _return (index.js:573:12)`
example test: `test/parallel/test-stream-readable-needReadable.js`

### 1 × `AssertionError: Expected values to be strictly equal: true !== false at EventEmitter.<anonymous> (<loc>) at EventEmitter._return (<loc>) at EventEmitter.emit (n`

distinct messages:
- `AssertionError: Expected values to be strictly equal:

true !== false

    at EventEmitter.<anonymous> (test-domain-timer.js:13:10)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)`
example test: `test/parallel/test-domain-timer.js`

### 1 × `AssertionError: Expected values to be strictly equal: true !== false at notUtilIsDeepStrict (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Expected values to be strictly equal:  true !== false
    at notUtilIsDeepStrict (test-util-isDeepStrictEqual.js:17:3)
    at :anonymous (test-util-isDeepStrictEqual.js:25:3)
    at :program (test-util-isDeepStrictEqual.js:1:1)`
example test: `test/parallel/test-util-isDeepStrictEqual.js`

### 1 × `AssertionError: Expected values to be strictly equal: true !== false at Readable.<anonymous> (<loc>) at Readable._return (<loc>)`

distinct messages:
- `AssertionError: Expected values to be strictly equal:

true !== false

    at Readable.<anonymous> (test-stream2-readable-wrap-error.js:34:14)
    at Readable._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)`
example test: `test/parallel/test-stream2-readable-wrap-error.js`

### 1 × `AssertionError: Expected values to be strictly equal: undefined !== <n> at :=> (<loc>) at _return (<loc>)`

distinct messages:
- `AssertionError: Expected values to be strictly equal:  undefined !== 20
    at :=> (test-zlib-premature-end.js:29:7)
    at _return (index.js:573:12)`
example test: `test/parallel/test-zlib-premature-end.js`

### 1 × `AssertionError: Expected values to be strictly equal: undefined !== <n> at Object.<anonymous> (<loc>) at Object._return (<loc>) at Duplex.<anonymous> (<loc>) at`

distinct messages:
- `AssertionError: Expected values to be strictly equal:

undefined !== 5

    at Object.<anonymous> (test-net-keepalive-interval-count.js:23:20)
    at Object._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at Duplex.<anonymous> (test-net-keepalive-interval-coun`
example test: `test/parallel/test-net-keepalive-interval-count.js`

### 1 × `AssertionError: Expected values to be strictly equal: undefined !== <n> at Timeout.<anonymous> (<loc>) at Timeout._return (<loc>)`

distinct messages:
- `AssertionError: Expected values to be strictly equal:

undefined !== 3

    at Timeout.<anonymous> (test-vm-context-async-script.js:33:10)
    at Timeout._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)`
example test: `test/parallel/test-vm-context-async-script.js`

### 1 × `AssertionError: Expected values to be strictly equal: undefined !== <n> at Writable.<anonymous> (<loc>) at Writable._return (<loc>) at Writable.emit (native)`

distinct messages:
- `AssertionError: Expected values to be strictly equal:

undefined !== 1

    at Writable.<anonymous> (test-http-upgrade-agent.js:65:12)
    at Writable._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at Writable.emit (native)`
example test: `test/parallel/test-http-upgrade-agent.js`

### 1 × `AssertionError: Expected values to be strictly equal: undefined !== <str> at process.<anonymous> (<loc>) at process._return (<loc>)`

distinct messages:
- `AssertionError: Expected values to be strictly equal:

undefined !== 'asd'

    at process.<anonymous> (test-stream-pipe-error-unhandled.js:7:10)
    at process._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)`
example test: `test/parallel/test-stream-pipe-error-unhandled.js`

### 1 × `AssertionError: flag should be in set: --perf_basic_prof false !== true at :=> (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: flag should be in set: --perf_basic_prof  false !== true
    at :=> (test-process-env-allowed-flags.js:35:5)
    at :anonymous (test-process-env-allowed-flags.js:34:3)
    at :program (test-process-env-allowed-flags.js:1:1)`
example test: `test/parallel/test-process-env-allowed-flags.js`

### 1 × `AssertionError: function onUncaught(error) {} at <loc> called with arguments: <str>, <str> at process.mustNotCall (<loc>)`

distinct messages:
- `AssertionError: function onUncaught(error) {} at test-http-server-incomingmessage-destroy.js:13
called with arguments: 'Error: Destroy test', 'uncaughtException'
    at process.mustNotCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:631:12)`
example test: `test/parallel/test-http-server-incomingmessage-destroy.js`

### 1 × `AssertionError: function should not have been called at <loc> at Duplex.mustNotCall (<loc>) at Duplex.emit (native)`

distinct messages:
- `AssertionError: function should not have been called at test-net-listen-ipv6only.js:25
    at Duplex.mustNotCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:631:12)
    at Duplex.emit (native)`
example test: `test/parallel/test-net-listen-ipv6only.js`

### 1 × `AssertionError: function should not have been called at <loc> at Duplex.mustNotCall (<loc>) at Duplex.emit (native) AssertionError: function should not have bee`

distinct messages:
- `AssertionError: function should not have been called at test-net-client-bind-twice.js:18
    at Duplex.mustNotCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:631:12)
    at Duplex.emit (native)
AssertionError: function should not have been called at test-net-client-bind-twic`
example test: `test/parallel/test-net-client-bind-twice.js`

### 1 × `AssertionError: function should not have been called at <loc> at Readable.mustNotCall (<loc>)`

distinct messages:
- `AssertionError: function should not have been called at test-http-dummy-characters-smuggling.js:48
    at Readable.mustNotCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:631:12)`
example test: `test/parallel/test-http-dummy-characters-smuggling.js`

### 1 × `AssertionError: function should not have been called at <loc> called with arguments: [Error: EADDRINUSE: address already in use, udp-bind <str> (errno=<n>)] { c`

distinct messages:
- `AssertionError: function should not have been called at test-dgram-ipv6only.js:32
called with arguments: [Error: EADDRINUSE: address already in use, udp-bind '0.0.0.0:56874' (errno=98)] {
  code: 'EADDRINUSE',
  errno: 98,
  syscall: 'bind'
}
    at EventEmitter.mustNotCall (/work/.harness/work/node`
example test: `test/parallel/test-dgram-ipv6only.js`

### 1 × `AssertionError: function should not have been called at <loc> called with arguments: [Error: Header overflow] { code: <str> }, <ref *<n>> DuplexSide [Duplex] { `

distinct messages:
- `AssertionError: function should not have been called at test-http-max-header-size-per-stream.js:58 called with arguments: [Error: Header overflow] { code: 'HPE_HEADER_OVERFLOW' }, <ref *1> DuplexSide [Duplex] {   server: Server [EventEmitter] {     _handle: null,     _allowHalfOpen: true,     _pause`
example test: `test/parallel/test-http-max-header-size-per-stream.js`

### 1 × `AssertionError: function should not have been called at <loc> called with arguments: [TypeError: Module not found: <str>] at EventEmitter.mustNotCall (<loc>) at`

distinct messages:
- `AssertionError: function should not have been called at test-worker-esm-exit.js:8
called with arguments: [TypeError: Module not found: './process-exit.mjs']
    at EventEmitter.mustNotCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:631:12)
    at EventEmitter.emit (native)`
example test: `test/parallel/test-worker-esm-exit.js`

### 1 × `AssertionError: function should not have been called at <loc> called with arguments: { result: [Function (anonymous)] }, <str> at mustNotCall (<loc>) AssertionE`

distinct messages:
- `AssertionError: function should not have been called at test-diagnostics-channel-tracing-channel-promise-early-exit.js:11
called with arguments: { result: [Function (anonymous)] }, 'tracing:test:asyncStart'
    at mustNotCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:631:12`
example test: `test/parallel/test-diagnostics-channel-tracing-channel-promise-early-exit.js`

### 1 × `AssertionError: function should not have been called at <loc> called with arguments: { result: undefined }, <str> at mustNotCall (<loc>)`

distinct messages:
- `AssertionError: function should not have been called at test-diagnostics-channel-tracing-channel-callback-early-exit.js:11
called with arguments: { result: undefined }, 'tracing:test:asyncStart'
    at mustNotCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:631:12)`
example test: `test/parallel/test-diagnostics-channel-tracing-channel-callback-early-exit.js`

### 1 × `AssertionError: function should not have been called at <loc> called with arguments: <Buffer <n> <n> <n> <n> <n> <n> <n> 6f <n> 3a <n> <n> <n> 6e <n> <n> <n> 6d`

distinct messages:
- `AssertionError: function should not have been called at test-child-process-ipc.js:38
called with arguments: <Buffer 54 79 70 65 45 72 72 6f 72 3a 20 28 69 6e 74 65 72 6d 65 64 69 61 74 65 20 76 61 6c 75 65 29 2e 6f 70 65 6e 53 74 64 69 6e 20 69 73 20 6e 6f 74 20 61 ... 74 more bytes>
    at Readable`
example test: `test/parallel/test-child-process-ipc.js`

### 1 × `AssertionError: function should not have been called at <loc> called with arguments: <Buffer <n> <n> 6c 6c 6f <n> <n> 6f <n> 6c <n>> at Duplex.mustNotCall (<loc`

distinct messages:
- `AssertionError: function should not have been called at test-net-onread-static-buffer.js:26
called with arguments: <Buffer 68 65 6c 6c 6f 20 77 6f 72 6c 64>
    at Duplex.mustNotCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:631:12)
    at Duplex.push (native)
AssertionErro`
example test: `test/parallel/test-net-onread-static-buffer.js`

### 1 × `AssertionError: function should not have been called at <loc> called with arguments: Error at <loc> at <loc>, [ CallSite {}, CallSite {} ] at mustNotCall (<loc>`

distinct messages:
- `AssertionError: function should not have been called at test-util-getcallsites-preparestacktrace.js:10 called with arguments: Error     at test-util-getcallsites-preparestacktrace.js:12:15     at test-util-getcallsites-preparestacktrace.js:1:1, [ CallSite {}, CallSite {} ]
    at mustNotCall (index.`
example test: `test/parallel/test-util-getcallsites-preparestacktrace.js`

### 1 × `AssertionError: function should not have been called at <loc> called with arguments: Error: an error at Timeout.<anonymous> (<loc>) at AssertionError.get stack `

distinct messages:
- `AssertionError: function should not have been called at test-dgram-bind-socket-close-before-lookup.js:16
called with arguments: Error: an error
    at Timeout.<anonymous> (test-dgram-bind-socket-close-before-lookup.js:11:7)
    at AssertionError.get stack (native)
    at Function.fail (native)
    a`
example test: `test/parallel/test-dgram-bind-socket-close-before-lookup.js`

### 1 × `AssertionError: function should not have been called at <loc> called with arguments: Error: native decompress_update rejected the input as malformed at <loc> at`

distinct messages:
- `AssertionError: function should not have been called at test-zlib-unzip-one-byte-chunks.js:16
called with arguments: Error: native decompress_update rejected the input as malformed
    at test-zlib-unzip-one-byte-chunks.js:27:9
    at test-zlib-unzip-one-byte-chunks.js:1:1 {
  code: 'Z_DATA_ERROR',
`
example test: `test/parallel/test-zlib-unzip-one-byte-chunks.js`

### 1 × `AssertionError: function should not have been called at <loc> called with arguments: IncomingMessage [Readable] { socket: <ref *<n>> DuplexSide [Duplex] { serve`

distinct messages:
- `AssertionError: function should not have been called at test-http-insecure-parser-per-stream.js:74 called with arguments: IncomingMessage [Readable] {   socket: <ref *1> DuplexSide [Duplex] {     server: Server [EventEmitter] {       _handle: null,       _allowHalfOpen: true,       _pauseOnConnect: `
example test: `test/parallel/test-http-insecure-parser-per-stream.js`

### 1 × `AssertionError: function should not have been called at <loc> called with arguments: null, <n> at Object.mustNotCall (<loc>) AssertionError: function should not`

distinct messages:
- `AssertionError: function should not have been called at test-dgram-oob-buffer.js:36
called with arguments: null, 0
    at Object.mustNotCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:631:12)
AssertionError: function should not have been called at test-dgram-oob-buffer.js:37`
example test: `test/parallel/test-dgram-oob-buffer.js`

### 1 × `AssertionError: function should not have been called at <loc> called with arguments: Socket [Duplex] { _handle: {}, _allowHalfOpen: false, connecting: false, _c`

distinct messages:
- `AssertionError: function should not have been called at test-net-server-blocklist.js:8
called with arguments: Socket [Duplex] {
  _handle: {},
  _allowHalfOpen: false,
  connecting: false,
  _connected: true,
  _readableEnded: false,
  _writableFinished: false,
  _endCalled: false,
  _pendingWrites:`
example test: `test/parallel/test-net-server-blocklist.js`

### 1 × `AssertionError: function should not have been called at <loc> called with arguments: true at Object.mustNotCall (<loc>) at EventEmitter.<anonymous> (<loc>) at E`

distinct messages:
- `AssertionError: function should not have been called at test-net-server-nodelay.js:9
called with arguments: true
    at Object.mustNotCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:631:12)
    at EventEmitter.<anonymous> (test-net-server-nodelay.js:10:10)
    at EventEmitte`
example test: `test/parallel/test-net-server-nodelay.js`

### 1 × `AssertionError: get %Object.prototype%.main at <loc> at mustNotCall (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: get %Object.prototype%.main at test-module-prototype-mutation.js:23
    at mustNotCall (index.js:631:5)
    at :anonymous (test-module-prototype-mutation.js:47:3)
    at :program (test-module-prototype-mutation.js:1:1)`
example test: `test/parallel/test-module-prototype-mutation.js`

### 1 × `AssertionError: HTTP/<n> <n> ok Content-Length: <n> should not Keep-Alive true !== false at Writable.<anonymous> (<loc>) at Writable._return (<loc>) at Writable`

distinct messages:
- `AssertionError: HTTP/1.0 200 ok
Content-Length: 0

 should not Keep-Alive

true !== false

    at Writable.<anonymous> (test-http-should-keep-alive.js:60:14)
    at Writable._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at Writable.emit (native)
    at Du`
example test: `test/parallel/test-http-should-keep-alive.js`

### 1 × `AssertionError: init <n> !== <n> at main (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: init  0 !== 1
    at main (test-async-hooks-fatal-error.js:48:7)
    at :anonymous (test-async-hooks-fatal-error.js:10:3)
    at :program (test-async-hooks-fatal-error.js:1:1)`
example test: `test/parallel/test-async-hooks-fatal-error.js`

### 1 × `AssertionError: isFile is not a safe integer, difference should < <n>. Number version function isFile() { [native code] }, BigInt version function isFile() { [n`

distinct messages:
- `AssertionError: isFile is not a safe integer, difference should < 1. Number version function isFile() { [native code] }, BigInt version function isFile() { [native code] }n
    at verifyStats (test-fs-stat-bigint.js:88:7)
    at runSyncTest (test-fs-stat-bigint.js:102:3)
    at :anonymous (test-fs-s`
example test: `test/parallel/test-fs-stat-bigint.js`

### 1 × `AssertionError: listen EIO /work/.harness/work/node-api/node-test/.tmp.<n>/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`

distinct messages:
- `AssertionError: listen EIO /work/.harness/work/node-api/node-test/.tmp.2064/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`
example test: `test/parallel/test-net-pipe-with-long-path.js`

### 1 × `AssertionError: maxBuffer should error at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: maxBuffer should error
    at :anonymous (test-child-process-spawnsync-maxbuf.js:22:3)
    at :program (test-child-process-spawnsync-maxbuf.js:1:1)`
example test: `test/parallel/test-child-process-spawnsync-maxbuf.js`

### 1 × `AssertionError: Missing expected exception (DataCloneError): Should throw DataCloneError when posting uncloneables at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Missing expected exception (DataCloneError): Should throw DataCloneError when posting uncloneables
    at :anonymous (test-worker-message-mark-as-uncloneable.js:15:3)
    at :program (test-worker-message-mark-as-uncloneable.js:1:1)`
example test: `test/parallel/test-worker-message-mark-as-uncloneable.js`

### 1 × `AssertionError: Missing expected exception (Error). at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Missing expected exception (Error).
    at :anonymous (test-child-process-fork-stdio.js:22:3)
    at :program (test-child-process-fork-stdio.js:1:1)`
example test: `test/parallel/test-child-process-fork-stdio.js`

### 1 × `AssertionError: Missing expected exception (Error). at test (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Missing expected exception (Error).
    at test (test-buffer-tostring-rangeerror.js:37:3)
    at :anonymous (test-buffer-tostring-rangeerror.js:40:1)
    at :program (test-buffer-tostring-rangeerror.js:1:1)`
example test: `test/parallel/test-buffer-tostring-rangeerror.js`

### 1 × `AssertionError: Missing expected exception (RangeError). at checkArgs (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Missing expected exception (RangeError).
    at checkArgs (test-dgram-send-bad-arguments.js:122:5)
    at :anonymous (test-dgram-send-bad-arguments.js:151:1)
    at :program (test-dgram-send-bad-arguments.js:1:1)`
example test: `test/parallel/test-dgram-send-bad-arguments.js`

### 1 × `AssertionError: Missing expected exception (TypeError). at assertErrors (<loc>) at :=> (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Missing expected exception (TypeError).
    at assertErrors (test-vm-options-validation.js:68:5)
    at :=> (test-vm-options-validation.js:82:5)
    at :anonymous (test-vm-options-validation.js:81:3)
    at :program (test-vm-options-validation.js:1:1)`
example test: `test/parallel/test-vm-options-validation.js`

### 1 × `AssertionError: Missing expected exception (URIError). at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Missing expected exception (URIError).
    at :anonymous (test-fileurltopathbuffer.js:54:1)
    at :program (test-fileurltopathbuffer.js:1:1)`
example test: `test/parallel/test-fileurltopathbuffer.js`

### 1 × `AssertionError: Missing expected exception: http request should throw when passing invalid insecureHTTPParser at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Missing expected exception: http request should throw when passing invalid insecureHTTPParser
    at :anonymous (test-http-client-insecure-http-parser-error.js:8:3)
    at :program (test-http-client-insecure-http-parser-error.js:1:1)`
example test: `test/parallel/test-http-client-insecure-http-parser-error.js`

### 1 × `AssertionError: Missing expected exception: pathToFileURL(<str>) should throw ERR_INVALID_URL at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Missing expected exception: pathToFileURL('\\exa mple\share\file.txt') should throw ERR_INVALID_URL
    at :anonymous (test-url-pathtofileurl.js:34:5)
    at :program (test-url-pathtofileurl.js:1:1)`
example test: `test/parallel/test-url-pathtofileurl.js`

### 1 × `AssertionError: Missing expected exception.`

distinct messages:
- `AssertionError: Missing expected exception.`
example test: `test/parallel/test-worker-unsupported-things.js`

### 1 × `AssertionError: Missing expected exception. at :=> (<loc>) at _return (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Missing expected exception.
    at :=> (test-domain-async-resource-domain-removed.js:27:3)
    at _return (index.js:573:12)
    at :anonymous (test-domain-async-resource-domain-removed.js:15:1)
    at :program (test-domain-async-resource-domain-removed.js:1:1)`
example test: `test/parallel/test-domain-async-resource-domain-removed.js`

### 1 × `AssertionError: Missing expected exception. at :=> (<loc>) at :anonymous (<loc>) at _return (<loc>)`

distinct messages:
- `AssertionError: Missing expected exception.
    at :=> (test-zlib-truncated.js:40:5)
    at :anonymous (index.js:538:14)
    at _return (index.js:573:12)`
example test: `test/parallel/test-zlib-truncated.js`

### 1 × `AssertionError: Missing expected exception. at :=> (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Missing expected exception.
    at :=> (test-zlib-crc32.js:210:3)
    at :anonymous (test-zlib-crc32.js:209:1)
    at :program (test-zlib-crc32.js:1:1)`
example test: `test/parallel/test-zlib-crc32.js`

### 1 × `AssertionError: Missing expected exception. at Duplex.<anonymous> (<loc>) at Duplex._return (<loc>) at Duplex.push (native)`

distinct messages:
- `AssertionError: Missing expected exception.
    at Duplex.<anonymous> (test-child-process-disconnect.js:96:18)
    at Duplex._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at Duplex.push (native)`
example test: `test/parallel/test-child-process-disconnect.js`

### 1 × `AssertionError: Missing expected exception. at EventEmitter.<anonymous> (<loc>) at EventEmitter._return (<loc>) at EventEmitter.emit (native) AssertionError: Mi`

distinct messages:
- `AssertionError: Missing expected exception.
    at EventEmitter.<anonymous> (test-dgram-multicast-set-interface.js:70:12)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)
AssertionError: Missing expected excepti`
example test: `test/parallel/test-dgram-multicast-set-interface.js`

### 1 × `AssertionError: Missing expected exception. at EventEmitter.<anonymous> (<loc>) at EventEmitter._return (<loc>) at EventEmitter.emit (native) at Duplex.push (na`

distinct messages:
- `AssertionError: Missing expected exception.
    at EventEmitter.<anonymous> (test-http-content-length-mismatch.js:59:12)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)
    at Duplex.push (native)`
example test: `test/parallel/test-http-content-length-mismatch.js`

### 1 × `AssertionError: Non-integer delay ordering should be <n>,<n>,<n>,<n>, but got <n>,<n>,<n>,<n> + actual - expected [ <n>, - <n>, <n>, <n>, + <n> ] at Timeout.<an`

distinct messages:
- `AssertionError: Non-integer delay ordering should be 1,2,3,4, but got 1,3,4,2
+ actual - expected

  [
    1,
-   2,
    3,
    4,
+   2
  ]

    at Timeout.<anonymous> (test-timers-non-integer-delay.js:72:12)
    at Timeout._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js`
example test: `test/parallel/test-timers-non-integer-delay.js`

### 1 × `AssertionError: rawHeaders.length (<n>) exceeds limit (<n>) at EventEmitter.<anonymous> (<loc>) at EventEmitter._return (<loc>) at EventEmitter.emit (native) at`

distinct messages:
- `AssertionError: rawHeaders.length (132) exceeds limit (100)
    at EventEmitter.<anonymous> (test-http-rawheaders-limit.js:9:10)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)
    at Duplex.push (native)`
example test: `test/parallel/test-http-rawheaders-limit.js`

### 1 × `AssertionError: Should get engine Gzip after gzip string with info option. at :=> (<loc>) at _return (<loc>)`

distinct messages:
- `AssertionError: Should get engine Gzip after gzip string with info option.
    at :=> (test-zlib-convenience-methods.js:77:7)
    at _return (index.js:573:12)`
example test: `test/parallel/test-zlib-convenience-methods.js`

### 1 × `AssertionError: stderr output must include proper uncaughtException handler<str>s message at onTestDone (<loc>) at onTestDone (<loc>) at EventEmitter.emit (nati`

distinct messages:
- `AssertionError: stderr output must include proper uncaughtException handler's error's message
    at onTestDone (test-domain-throw-error-then-throw-from-uncaught-exception-handler.js:59:7)
    at onTestDone (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitt`
example test: `test/parallel/test-domain-throw-error-then-throw-from-uncaught-exception-handler.js`

### 1 × `AssertionError: Test index <n> failed: Error: Command failed: ulimit -c <n> && <str> --abort-on-uncaught-exception <str> child ${ESCAPED_2} at :anonymous (<loc>`

distinct messages:
- `AssertionError: Test index 6 failed: Error: Command failed: ulimit -c 0 && "${ESCAPED_0}" --abort-on-uncaught-exception "${ESCAPED_1}" child ${ESCAPED_2}
    at :anonymous (test-domain-abort-on-uncaught.js:215:7)
    at :anonymous (test-domain-abort-on-uncaught.js:204:3)
    at :program (test-domain`
example test: `test/parallel/test-domain-abort-on-uncaught.js`

### 1 × `AssertionError: The error is expected to be an instance of <str>. Received <str> Error message: process.abort() is not implemented at :anonymous (<loc>) at :pro`

distinct messages:
- `AssertionError: The error is expected to be an instance of "TypeError". Received "Error"  Error message:  process.abort() is not implemented
    at :anonymous (test-process-abort.js:14:1)
    at :program (test-process-abort.js:1:1)`
example test: `test/parallel/test-process-abort.js`

### 1 × `AssertionError: The expression evaluated to a falsy value: assert.ok( at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: The expression evaluated to a falsy value:    assert.ok(
    at :anonymous (test-buffer-includes.js:263:5)
    at :program (test-buffer-includes.js:1:1)`
example test: `test/parallel/test-buffer-includes.js`

### 1 × `AssertionError: The expression evaluated to a falsy value: assert.ok(e._events.default.warned) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: The expression evaluated to a falsy value:    assert.ok(e._events.default.warned)
    at :anonymous (test-event-emitter-check-listener-leaks.js:37:3)
    at :program (test-event-emitter-check-listener-leaks.js:1:1)`
example test: `test/parallel/test-event-emitter-check-listener-leaks.js`

### 1 × `AssertionError: The expression evaluated to a falsy value: assert.ok(globalThis.console instanceof Console) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: The expression evaluated to a falsy value:    assert.ok(globalThis.console instanceof Console)
    at :anonymous (test-console-instance.js:41:1)
    at :program (test-console-instance.js:1:1)`
example test: `test/parallel/test-console-instance.js`

### 1 × `AssertionError: The expression evaluated to a falsy value: assert.ok(isMarkedAsUntransferable(ab)) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: The expression evaluated to a falsy value:    assert.ok(isMarkedAsUntransferable(ab))
    at :anonymous (test-worker-message-transfer-port-mark-as-untransferable.js:10:3)
    at :program (test-worker-message-transfer-port-mark-as-untransferable.js:1:1)`
example test: `test/parallel/test-worker-message-transfer-port-mark-as-untransferable.js`

### 1 × `AssertionError: The expression evaluated to a falsy value: assert.ok(r.external > <n>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: The expression evaluated to a falsy value:    assert.ok(r.external > 0)
    at :anonymous (test-memory-usage.js:36:1)
    at :program (test-memory-usage.js:1:1)`
example test: `test/parallel/test-memory-usage.js`

### 1 × `AssertionError: The expression evaluated to a falsy value: assert.ok(supportsPassive) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: The expression evaluated to a falsy value:    assert.ok(supportsPassive)
    at :anonymous (test-whatwg-events-add-event-listener-options-passive.js:25:3)
    at :program (test-whatwg-events-add-event-listener-options-passive.js:1:1)`
example test: `test/parallel/test-whatwg-events-add-event-listener-options-passive.js`

### 1 × `AssertionError: The expression evaluated to a falsy value: assert(!fs.existsSync(fullSecondPath)) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: The expression evaluated to a falsy value:    assert(!fs.existsSync(fullSecondPath))
    at :anonymous (test-fs-mkdtempDisposableSync.js:60:3)
    at :program (test-fs-mkdtempDisposableSync.js:1:1)`
example test: `test/parallel/test-fs-mkdtempDisposableSync.js`

### 1 × `AssertionError: The expression evaluated to a falsy value: assert(builtinModules.includes(<str>)) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: The expression evaluated to a falsy value:    assert(builtinModules.includes('sys'))
    at :anonymous (test-module-builtin.js:8:1)
    at :program (test-module-builtin.js:1:1)`
example test: `test/parallel/test-module-builtin.js`

### 1 × `AssertionError: The expression evaluated to a falsy value: assert(cachedData instanceof Buffer) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: The expression evaluated to a falsy value:    assert(cachedData instanceof Buffer)
    at :anonymous (test-vm-createcacheddata.js:12:1)
    at :program (test-vm-createcacheddata.js:1:1)`
example test: `test/parallel/test-vm-createcacheddata.js`

### 1 × `AssertionError: The expression evaluated to a falsy value: assert(e.listenerCount(<str>) > <n>) at :=> (<loc>) at _return (<loc>)`

distinct messages:
- `AssertionError: The expression evaluated to a falsy value:    assert(e.listenerCount('error') > 0)
    at :=> (test-stream-pipeline-listeners.js:70:3)
    at _return (index.js:573:12)`
example test: `test/parallel/test-stream-pipeline-listeners.js`

### 1 × `AssertionError: The expression evaluated to a falsy value: assert(e.toString().match(/Error: Cannot find module/)) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: The expression evaluated to a falsy value:    assert(e.toString().match(/Error: Cannot find module/))
    at :anonymous (test-module-main-preserve-symlinks-fail.js:15:7)
    at :program (test-module-main-preserve-symlinks-fail.js:1:1)`
example test: `test/parallel/test-module-main-preserve-symlinks-fail.js`

### 1 × `AssertionError: The expression evaluated to a falsy value: assert(existing.length > <n>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: The expression evaluated to a falsy value:    assert(existing.length > 0)
    at :anonymous (test-dns.js:32:1)
    at :program (test-dns.js:1:1)`
example test: `test/parallel/test-dns.js`

### 1 × `AssertionError: The expression evaluated to a falsy value: assert(inspection.includes(<str>)) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: The expression evaluated to a falsy value:    assert(inspection.includes('refed: false'))
    at :anonymous (test-worker-message-port-inspect-during-init-hook.js:22:1)
    at :program (test-worker-message-port-inspect-during-init-hook.js:1:1)`
example test: `test/parallel/test-worker-message-port-inspect-during-init-hook.js`

### 1 × `AssertionError: The expression evaluated to a falsy value: assert(msg.outputSize >= highwatermark) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: The expression evaluated to a falsy value:    assert(msg.outputSize >= highwatermark)
    at :anonymous (test-http-outgoing-buffer.js:18:1)
    at :program (test-http-outgoing-buffer.js:1:1)`
example test: `test/parallel/test-http-outgoing-buffer.js`

### 1 × `AssertionError: The expression evaluated to a falsy value: assert(name in agent.sockets) at EventEmitter.<anonymous> (<loc>) at EventEmitter._return (<loc>) at `

distinct messages:
- `AssertionError: The expression evaluated to a falsy value:

  assert(name in agent.sockets)

    at EventEmitter.<anonymous> (test-http-client-override-global-agent.js:17:3)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.em`
example test: `test/parallel/test-http-client-override-global-agent.js`

### 1 × `AssertionError: The expression evaluated to a falsy value: assert(promise.child instanceof child_process.ChildProcess) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: The expression evaluated to a falsy value:    assert(promise.child instanceof child_process.ChildProcess)
    at :anonymous (test-child-process-promisified.js:13:3)
    at :program (test-child-process-promisified.js:1:1)`
example test: `test/parallel/test-child-process-promisified.js`

### 1 × `AssertionError: The expression evaluated to a falsy value: assert(rawModeCalled) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: The expression evaluated to a falsy value:    assert(rawModeCalled)
    at :anonymous (test-readline-set-raw-mode.js:53:1)
    at :program (test-readline-set-raw-mode.js:1:1)`
example test: `test/parallel/test-readline-set-raw-mode.js`

### 1 × `AssertionError: The expression evaluated to a falsy value: assert(res.connection.bytesWritten > <n>) at EventEmitter.httpServer (<loc>) at EventEmitter._return `

distinct messages:
- `AssertionError: The expression evaluated to a falsy value:

  assert(res.connection.bytesWritten > 0)

    at EventEmitter.httpServer (test-http-byteswritten.js:48:3)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (nat`
example test: `test/parallel/test-http-byteswritten.js`

### 1 × `AssertionError: The expression evaluated to a falsy value: assert(resolver.getServers().length > <n>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: The expression evaluated to a falsy value:    assert(resolver.getServers().length > 0)
    at :anonymous (test-dns-get-server.js:8:1)
    at :program (test-dns-get-server.js:1:1)`
example test: `test/parallel/test-dns-get-server.js`

### 1 × `AssertionError: The expression evaluated to a falsy value: assert(result instanceof ResolvedThenable) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: The expression evaluated to a falsy value:    assert(result instanceof ResolvedThenable)
    at :anonymous (test-diagnostics-channel-tracing-channel-promise-thenable.js:54:1)
    at :program (test-diagnostics-channel-tracing-channel-promise-thenable.js:1:1)`
example test: `test/parallel/test-diagnostics-channel-tracing-channel-promise-thenable.js`

### 1 × `AssertionError: The expression evaluated to a falsy value: assert(result instanceof SpoofedPromise) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: The expression evaluated to a falsy value:    assert(result instanceof SpoofedPromise)
    at :anonymous (test-diagnostics-channel-tracing-channel-promise-spoofed-constructor.js:50:1)
    at :program (test-diagnostics-channel-tracing-channel-promise-spoofed-constructor.js:1:1)`
example test: `test/parallel/test-diagnostics-channel-tracing-channel-promise-spoofed-constructor.js`

### 1 × `AssertionError: The expression evaluated to a falsy value: assert(script.cachedDataRejected) at testRejectInvalid (<loc>) at :anonymous (<loc>) at :program (<lo`

distinct messages:
- `AssertionError: The expression evaluated to a falsy value:    assert(script.cachedDataRejected)
    at testRejectInvalid (test-vm-cached-data.js:70:3)
    at :anonymous (test-vm-cached-data.js:73:1)
    at :program (test-vm-cached-data.js:1:1)`
example test: `test/parallel/test-vm-cached-data.js`

### 1 × `AssertionError: The expression evaluated to a falsy value: assert(stream.allowHalfOpen) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: The expression evaluated to a falsy value:    assert(stream.allowHalfOpen)
    at :anonymous (test-stream-duplex.js:33:1)
    at :program (test-stream-duplex.js:1:1)`
example test: `test/parallel/test-stream-duplex.js`

### 1 × `AssertionError: The expression evaluated to a falsy value: assert(value > prev) at checkRaise (<loc>) at Duplex.<anonymous> (<loc>) at Duplex._return (<loc>) at`

distinct messages:
- `AssertionError: The expression evaluated to a falsy value:

  assert(value > prev)

    at checkRaise (test-net-bytes-read.js:18:5)
    at Duplex.<anonymous> (test-net-bytes-read.js:23:5)
    at Duplex._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at Duplex.`
example test: `test/parallel/test-net-bytes-read.js`

### 1 × `AssertionError: The input did not match the regular expression /^<n>|<n>$/. Input: <str> at Object.<anonymous> (<loc>) at Object._return (<loc>) at EventEmitter`

distinct messages:
- `AssertionError: The input did not match the regular expression /^2|3$/. Input:

'undefined'

    at Object.<anonymous> (test-net-server-keepalive.js:13:12)
    at Object._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.<anonymous> (test-net-serv`
example test: `test/parallel/test-net-server-keepalive.js`

### 1 × `AssertionError: The input did not match the regular expression /^Error: setMulticastTTL EINVAL$/. Input: <str> at EventEmitter.<anonymous> (<loc>) at EventEmitt`

distinct messages:
- `AssertionError: The input did not match the regular expression /^Error: setMulticastTTL EINVAL$/. Input:

'RangeError: The value of "ttl" is out of range. It must be >= 0 and <= 255. Received 1000'

    at EventEmitter.<anonymous> (test-dgram-multicast-setTTL.js:34:10)
    at EventEmitter._return (/`
example test: `test/parallel/test-dgram-multicast-setTTL.js`

### 1 × `AssertionError: The input did not match the regular expression /^Parse Error/. Input: <str> at EventEmitter.<anonymous> (<loc>) at EventEmitter._return (<loc>) `

distinct messages:
- `AssertionError: The input did not match the regular expression /^Parse Error/. Input:

'Connection closed before message completed'

    at EventEmitter.<anonymous> (test-http-parser-finish-error.js:14:10)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.j`
example test: `test/parallel/test-http-parser-finish-error.js`

### 1 × `AssertionError: The input did not match the regular expression /^Sat Apr <n> <n> <n><loc> GMT\+<n> \(.+\)$/. Input: <str> at :anonymous (<loc>) at :program (<lo`

distinct messages:
- `AssertionError: The input did not match the regular expression /^Sat Apr 14 2018 14:34:56 GMT\+0200 \(.+\)$/. Input:  'Sat Apr 14 2018 12:34:56 GMT+0000 (GMT+0)'
    at :anonymous (test-process-env-tz.js:32:1)
    at :program (test-process-env-tz.js:1:1)`
example test: `test/parallel/test-process-env-tz.js`

### 1 × `AssertionError: The input did not match the regular expression /AtomicsLoad/. Input: <str>.<str>`

distinct messages:
- `AssertionError: The input did not match the regular expression /AtomicsLoad/. Input:

'function cwd() {
      return __elideNodeApiProcess.env.NODE_API_OVERLAY_CWD || '.';
    }'`
example test: `test/parallel/test-worker-process-cwd.js`

### 1 × `AssertionError: The input did not match the regular expression /BEGIN CERT/. Input: <str>-e<str> at AssertionError.get stack (native) at Function.match (native)`

distinct messages:
- `AssertionError: The input did not match the regular expression /BEGIN CERT/. Input:

'TypeError: Cannot load module: '-e'
    at :program (<snippet>:1:1)
'

    at AssertionError.get stack (native)
    at Function.match (native)
    at Readable.<anonymous> (test-vm-syntax-error-stderr.js:22:10)
    `
example test: `test/parallel/test-vm-syntax-error-stderr.js`

### 1 × `AssertionError: The input did not match the regular expression /Cannot find module .+<loc>/. Input: <str> at EventEmitter.<anonymous> (<loc>) at EventEmitter._r`

distinct messages:
- `AssertionError: The input did not match the regular expression /Cannot find module .+does-not-exist.js/. Input:

'worker script not found: /work/.harness/work/node-api/node-test/.tmp.2891/does-not-exist.js'

    at EventEmitter.<anonymous> (test-worker-esm-missing-main.js:14:10)
    at EventEmitter.`
example test: `test/parallel/test-worker-esm-missing-main.js`

### 1 × `AssertionError: The input did not match the regular expression /Cannot find module <str>/. Input: <str> at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: The input did not match the regular expression /Cannot find module '\x66oo'/. Input:  'Error: Command failed: /work/.harness/work/node-api/node-test/.tmp.1932/install/bin/elide'
    at :anonymous (test-module-loading-globalpaths.js:52:3)
    at :program (test-module-loading-globalpat`
example test: `test/parallel/test-module-loading-globalpaths.js`

### 1 × `AssertionError: The input did not match the regular expression /EISDIR/. Input: <str>/<str> at AssertionError.get stack (native) at Function.match (native) at <`

distinct messages:
- `AssertionError: The input did not match the regular expression /EISDIR/. Input:

'Error: EIO: i/o error, open '/'
    at :anonymous (test-fs-readfile-error.js:22:1)
    at :program (test-fs-readfile-error.js:1:1)
'

    at AssertionError.get stack (native)
    at Function.match (native)
    at test-`
example test: `test/parallel/test-fs-readfile-error.js`

### 1 × `AssertionError: The input did not match the regular expression /expected-filename/. Input: <str> at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: The input did not match the regular expression /expected-filename/. Input:  'Error     at Object.<anonymous> (<eval>:1:7)     at Object.anonymous (<function>:3:84)     at test-vm-context.js:57:6     at test-vm-context.js:1:1'
    at :anonymous (test-vm-context.js:60:3)
    at :progra`
example test: `test/parallel/test-vm-context.js`

### 1 × `AssertionError: The input did not match the regular expression /Missing dictionary/. Input: <str> at Transform.<anonymous> (<loc>) at Transform._return (<loc>) `

distinct messages:
- `AssertionError: The input did not match the regular expression /Missing dictionary/. Input:

'native decompress_update rejected the input as malformed'

    at Transform.<anonymous> (test-zlib-dictionary-fail.js:34:12)
    at Transform._return (/work/.harness/work/node-api/node-api-overlay/test/comm`
example test: `test/parallel/test-zlib-dictionary-fail.js`

### 1 × `AssertionError: The input did not match the regular expression /MODULE_NOT_FOUND/. Input: <str> at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: The input did not match the regular expression /MODULE_NOT_FOUND/. Input:  'Error: Command failed: /opt/elide/bin/elide'
    at :anonymous (test-module-main-fail.js:14:5)
    at :program (test-module-main-fail.js:1:1)`
example test: `test/parallel/test-module-main-fail.js`

### 1 × `AssertionError: The input did not match the regular expression /process\.std\b/. Input: <str> at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: The input did not match the regular expression /process\.std\b/. Input:  ''
    at :anonymous (test-readline-undefined-columns.js:43:1)
    at :program (test-readline-undefined-columns.js:1:1)`
example test: `test/parallel/test-readline-undefined-columns.js`

### 1 × `AssertionError: The input did not match the regular expression /Received type bigint \(2n\)$/. Input: <str> at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: The input did not match the regular expression /Received type bigint \(2n\)$/. Input:  'TypeError: The "code" argument must be of type number. Received type bigint (2)'
    at :anonymous (test-process-exit-code-validation.js:114:5)
    at :program (test-process-exit-code-validation.j`
example test: `test/parallel/test-process-exit-code-validation.js`

### 1 × `AssertionError: The input did not match the regular expression /The <str> argument must be of type string/. Input: <str> at :=> (<loc>) at :anonymous (<loc>) at`

distinct messages:
- `AssertionError: The input did not match the regular expression /The "content" argument must be of type string/. Input:  'TypeError: isStringOneByteRepresentation is not a function'
    at :=> (test-v8-string-is-one-byte-representation.js:16:3)
    at :anonymous (test-v8-string-is-one-byte-representa`
example test: `test/parallel/test-v8-string-is-one-byte-representation.js`

### 1 × `AssertionError: The input did not match the regular expression /The URL must be of scheme file/. Input: <str>undefined<str>number<str> at :anonymous (<loc>) at `

distinct messages:
- `AssertionError: The input did not match the regular expression /The URL must be of scheme file/. Input:  'AssertionError: Expected values to be strictly equal: + actual - expected  + 'undefined' - 'number' '
    at :anonymous (test-child-process-cwd.js:78:3)
    at :program (test-child-process-cwd.j`
example test: `test/parallel/test-child-process-cwd.js`

### 1 × `AssertionError: The validation function is expected to return <str>. Received false Caught error: TypeError: (intermediate value).dlopen is not a function at :a`

distinct messages:
- `AssertionError: The validation function is expected to return "true". Received false  Caught error:  TypeError: (intermediate value).dlopen is not a function
    at :anonymous (test-process-dlopen-error-message-crash.js:15:1)
    at :program (test-process-dlopen-error-message-crash.js:1:1)`
example test: `test/parallel/test-process-dlopen-error-message-crash.js`

### 1 × `AssertionError: The validation function is expected to return <str>. Received false Caught error: TypeError: (intermediate value).execve is not a function at :a`

distinct messages:
- `AssertionError: The validation function is expected to return "true". Received false  Caught error:  TypeError: (intermediate value).execve is not a function
    at :anonymous (test-process-execve-throws.js:13:1)
    at :program (test-process-execve-throws.js:1:1)`
example test: `test/parallel/test-process-execve-throws.js`

### 1 × `AssertionError: The validation function is expected to return <str>. Received false Caught error: TypeError: Cannot load module: <str>: ../fixtures/module-loadi`

distinct messages:
- `AssertionError: The validation function is expected to return "true". Received false  Caught error:  TypeError: Cannot load module: 'Unsupported .node file: ': ../fixtures/module-loading-error.node
    at :anonymous (test-module-loading-error.js:58:1)
    at :program (test-module-loading-error.js:1:`
example test: `test/parallel/test-module-loading-error.js`

### 1 × `AssertionError: The validation function is expected to return <str>. Received false Caught error: TypeError: Invalid URL at :anonymous (<loc>) at :program (<loc`

distinct messages:
- `AssertionError: The validation function is expected to return "true". Received false  Caught error:  TypeError: Invalid URL
    at :anonymous (test-whatwg-url-custom-parsing.js:54:3)
    at :program (test-whatwg-url-custom-parsing.js:1:1)`
example test: `test/parallel/test-whatwg-url-custom-parsing.js`

### 1 × `AssertionError: The validation function is expected to return <str>. Received undefined Caught error: Error: Header name must be a valid HTTP token [<str>] at E`

distinct messages:
- `AssertionError: The validation function is expected to return "true". Received undefined

Caught error:

Error: Header name must be a valid HTTP token ["testing 123"]
    at EventEmitter.<anonymous> (test-http-invalidheaderfield.js:24:10)
    at EventEmitter._return (/work/.harness/work/node-api/nod`
example test: `test/parallel/test-http-invalidheaderfield.js`

### 1 × `AssertionError: TypeError: Cannot read property <str> of undefined at :anonymous (<loc>) at :program (<loc>) <n> !== <n> at :anonymous (<loc>) at :program (<loc`

distinct messages:
- `AssertionError: TypeError: Cannot read property 'uvMetricsInfo' of undefined     at :anonymous (test-nodetiming-uvmetricsinfo.js:17:16)     at :program (test-nodetiming-uvmetricsinfo.js:1:1)   1 !== 0
    at :anonymous (test-performance-nodetiming-uvmetricsinfo.js:23:3)
    at :program (test-perform`
example test: `test/parallel/test-performance-nodetiming-uvmetricsinfo.js`

### 1 × `AssertionError: unexpectedly got response from server at Writable.<anonymous> (<loc>) at Writable.emit (native) at Duplex.push (native)`

distinct messages:
- `AssertionError: unexpectedly got response from server
    at Writable.<anonymous> (test-http-localaddress-bind-error.js:47:12)
    at Writable.emit (native)
    at Duplex.push (native)`
example test: `test/parallel/test-http-localaddress-bind-error.js`

### 1 × `AssertionError: userInfo crashes at <loc> at _return (<loc>) at EventEmitter.emit (native)`

distinct messages:
- `AssertionError: userInfo crashes
    at test-os-userinfo-handles-getter-errors.js:17:3
    at _return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)`
example test: `test/parallel/test-os-userinfo-handles-getter-errors.js`

### 1 × `AssertionError: Values have same structure but are not reference-equal: [Function: atob] at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Values have same structure but are not reference-equal:  [Function: atob]
    at :anonymous (test-btoa-atob.js:9:1)
    at :program (test-btoa-atob.js:1:1)`
example test: `test/parallel/test-btoa-atob.js`

### 1 × `AssertionError: Values have same structure but are not reference-equal: [Function: pipeline] at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Values have same structure but are not reference-equal:  [Function: pipeline]
    at :anonymous (test-stream-promises.js:17:1)
    at :program (test-stream-promises.js:1:1)`
example test: `test/parallel/test-stream-promises.js`

### 1 × `AssertionError: Values have same structure but are not reference-equal: ArrayBuffer { [Uint8Contents]: <<n> <n> 6c 6c 6f <n> <n> 6f <n> 6c <n>>, [byteLength]: <`

distinct messages:
- `AssertionError: Values have same structure but are not reference-equal:  ArrayBuffer {   [Uint8Contents]: <68 65 6c 6c 6f 20 77 6f 72 6c 64>,   [byteLength]: 11 }
    at :anonymous (test-buffer-pool-untransferable.js:12:1)
    at :program (test-buffer-pool-untransferable.js:1:1)`
example test: `test/parallel/test-buffer-pool-untransferable.js`

### 1 × `AssertionError: wrong exit for <n>-changeCodeInUncaughtHandler expected:<n> but got:<n> <n> !== <n> at EventEmitter.<anonymous> (<loc>) at EventEmitter._return `

distinct messages:
- `AssertionError: wrong exit for 6-changeCodeInUncaughtHandler
expected:97 but got:1

1 !== 97

    at EventEmitter.<anonymous> (test-process-exit-code.js:50:14)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)`
example test: `test/parallel/test-process-exit-code.js`

### 1 × `com.oracle.truffle.api.dsl.UnsupportedSpecializationException: Unexpected values provided for JSToObjectNodeGen.Uncached@d8186b6: [dev.elide.lang.javascript.nod`

distinct messages:
- `com.oracle.truffle.api.dsl.UnsupportedSpecializationException: Unexpected values provided for JSToObjectNodeGen.Uncached@d8186b6: [dev.elide.lang.javascript.node.events.JSEventEmitter$BorrowedEmitterState@128a7f68], [BorrowedEmitterState]
    at :anonymous (native)
    at :program (test-fs-stream-co`
example test: `test/parallel/test-fs-stream-construct-compat-old-node.js`

### 1 × `domains stack length should be <n> but is <n>`

distinct messages:
- `domains stack length should be 1 but is 0`
example test: `test/parallel/test-domain-thrown-error-handler-stack.js`

### 1 × `Error`

distinct messages:
- `Error`
example test: `test/parallel/test-worker-exit-from-uncaught-exception.js`

### 1 × `Error at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `Error
    at :anonymous (test-events-uncaught-exception-stack.js:16:1)
    at :program (test-events-uncaught-exception-stack.js:1:1)`
example test: `test/parallel/test-events-uncaught-exception-stack.js`

### 1 × `Error at process.<anonymous> (<loc>) at process._return (<loc>)`

distinct messages:
- `Error
    at process.<anonymous> (test-process-beforeexit-throw-exit.js:15:9)
    at process._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)`
example test: `test/parallel/test-process-beforeexit-throw-exit.js`

### 1 × `Error: boom at :anonymous (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `Error: boom
    at :anonymous (test-domain-stack-empty-in-process-uncaughtexception.js:24:9)
    at :anonymous (test-domain-stack-empty-in-process-uncaughtexception.js:23:1)
    at :program (test-domain-stack-empty-in-process-uncaughtexception.js:1:1)`
example test: `test/parallel/test-domain-stack-empty-in-process-uncaughtexception.js`

### 1 × `Error: connect ECONNREFUSED ::<n>:<n>`

distinct messages:
- `Error: connect ECONNREFUSED ::1:46749`
example test: `test/parallel/test-net-autoselectfamily-default.js`

### 1 × `Error: connect ECONNREFUSED <n>.<n>:<n> Error: connect ECONNREFUSED <n>.<n>:<n> Error: connect ECONNREFUSED <n>.<n>:<n> Error: connect ECONNREFUSED <n>.<n>:<n>`

distinct messages:
- `Error: connect ECONNREFUSED 127.0.0.1:9999
Error: connect ECONNREFUSED 127.0.0.1:9999
Error: connect ECONNREFUSED 127.0.0.1:9999
Error: connect ECONNREFUSED 127.0.0.1:9999`
example test: `test/parallel/test-net-blocklist.js`

### 1 × `Error: EEXIST: file already exists, open <str>`

distinct messages:
- `Error: EEXIST: file already exists, open '/work/.harness/work/node-api/node-test/.tmp.973/dummy'`
example test: `test/parallel/test-fs-stream-construct-compat-error-write.js`

### 1 × `Error: EINVAL: invalid argument, truncate <str> at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `Error: EINVAL: invalid argument, truncate '/work/.harness/work/node-api/node-test/.tmp.991/truncate-file-1.txt'
    at :anonymous (test-fs-truncate.js:281:3)
    at :program (test-fs-truncate.js:1:1)`
example test: `test/parallel/test-fs-truncate.js`

### 1 × `Error: EIO: i/o error, write at :anonymous (<loc>) at :program (<loc>) AssertionError: The expression evaluated to a falsy value: assert(ok) at :anonymous (<loc`

distinct messages:
- `Error: EIO: i/o error, write
    at :anonymous (test-fs-write-sigxfsz.js:20:3)
    at :program (test-fs-write-sigxfsz.js:1:1)

AssertionError: The expression evaluated to a falsy value:    assert(ok)
    at :anonymous (test-fs-write-sigxfsz.js:28:3)
    at :program (test-fs-write-sigxfsz.js:1:1)`
example test: `test/parallel/test-fs-write-sigxfsz.js`

### 1 × `Error: ENOENT: no such file or directory, open <str> at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `Error: ENOENT: no such file or directory, open '/work/.harness/work/node-api/node-test/.tmp.905/testReadFileSyncAppend.txt'
    at :anonymous (test-fs-read-file-sync.js:56:21)
    at :program (test-fs-read-file-sync.js:1:1)`
example test: `test/parallel/test-fs-read-file-sync.js`

### 1 × `Error: ENOENT: no such file or directory, readdir <str> at testSync (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `Error: ENOENT: no such file or directory, readdir '../node-test/.tmp.983/relative-path-relative-target-sync'
    at testSync (test-fs-symlink-dir.js:31:3)
    at :anonymous (test-fs-symlink-dir.js:48:5)
    at :program (test-fs-symlink-dir.js:1:1)`
example test: `test/parallel/test-fs-symlink-dir.js`

### 1 × `Error: ENOSYS: function not implemented, lchmod <str> at test (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `Error: ENOSYS: function not implemented, lchmod '/work/.harness/work/node-api/node-test/.tmp.821/lchmodSync-src-str'
    at test (test-fs-chmod-mask.js:83:5)
    at :anonymous (test-fs-chmod-mask.js:88:1)
    at :program (test-fs-chmod-mask.js:1:1)`
example test: `test/parallel/test-fs-chmod-mask.js`

### 1 × `Error: Expected ERR_IP_BLOCKED but got ECONNREFUSED at Writable.<anonymous> (<loc>) at Writable._return (<loc>) at Writable.emit (native)`

distinct messages:
- `Error: Expected ERR_IP_BLOCKED but got ECONNREFUSED
    at Writable.<anonymous> (test-http-request-lookup-error-catchable.js:43:11)
    at Writable._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at Writable.emit (native)`
example test: `test/parallel/test-http-request-lookup-error-catchable.js`

### 1 × `Error: fail at read (<loc>)`

distinct messages:
- `Error: fail
    at read (test-stream-auto-destroy.js:103:7)`
example test: `test/parallel/test-stream-auto-destroy.js`

### 1 × `Error: fhqwhgads at _final (<loc>)`

distinct messages:
- `Error: fhqwhgads
    at _final (test-stream-writable-final-throw.js:11:13)`
example test: `test/parallel/test-stream-writable-final-throw.js`

### 1 × `Error: fhqwhgads at :=> (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `Error: fhqwhgads
    at :=> (test-util-primordial-monkeypatching.js:10:29)
    at :anonymous (test-util-primordial-monkeypatching.js:11:20)
    at :program (test-util-primordial-monkeypatching.js:1:1)`
example test: `test/parallel/test-util-primordial-monkeypatching.js`

### 1 × `Error: Invalid header line`

distinct messages:
- `Error: Invalid header line`
example test: `test/parallel/test-http-multi-line-headers.js`

### 1 × `Error: Listen method has been called more than once without closing. at EventEmitter.<anonymous> (<loc>) at EventEmitter._return (<loc>) at EventEmitter.emit (n`

distinct messages:
- `Error: Listen method has been called more than once without closing.
    at EventEmitter.<anonymous> (test-net-server-call-listen-multiple-times.js:45:12)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)`
example test: `test/parallel/test-net-server-call-listen-multiple-times.js`

### 1 × `Error: MyError at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `Error: MyError
    at :anonymous (test-process-uncaught-exception-monitor.js:45:16)
    at :program (test-process-uncaught-exception-monitor.js:1:1)`
example test: `test/parallel/test-process-uncaught-exception-monitor.js`

### 1 × `Error: node:worker_threads: moveMessagePortToContext is not implemented yet in Elide at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `Error: node:worker_threads: moveMessagePortToContext is not implemented yet in Elide
    at :anonymous (test-worker-message-port-move.js:12:16)
    at :program (test-worker-message-port-move.js:1:1)`
example test: `test/parallel/test-worker-message-port-move.js`

### 1 × `Error: should be caught by domain`

distinct messages:
- `Error: should be caught by domain`
example test: `test/parallel/test-http-client-response-domain.js`

### 1 × `Error: Socket is already bound at EventEmitter.<anonymous> (<loc>) at EventEmitter._return (<loc>) at EventEmitter.emit (native)`

distinct messages:
- `Error: Socket is already bound
    at EventEmitter.<anonymous> (test-dgram-bind-error-repeat.js:20:17)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)`
example test: `test/parallel/test-dgram-bind-error-repeat.js`

### 1 × `Error: this should be handled`

distinct messages:
- `Error: this should be handled`
example test: `test/parallel/test-stream-pipe-error-handling.js`

### 1 × `Error: this should never be executed at EventEmitter.<anonymous> (<loc>) at EventEmitter.emit (native) at Duplex.push (native) AssertionError: Expected values t`

distinct messages:
- `Error: this should never be executed
    at EventEmitter.<anonymous> (test-http-expect-handling.js:13:9)
    at EventEmitter.emit (native)
    at Duplex.push (native)
AssertionError: Expected values to be strictly equal:

0 !== 2

    at process.<anonymous> (test-http-expect-handling.js:54:10)`
example test: `test/parallel/test-http-expect-handling.js`

### 1 × `Error: uncaught`

distinct messages:
- `Error: uncaught`
example test: `test/parallel/test-worker-nested-uncaught.js`

### 1 × `error: unexpected argument <str> found tip: to pass <str> as a value, use <str> Usage: elide [OPTIONS] [FILE] [-- <SCRIPT_ARGS>...] [COMMAND] For more informati`

distinct messages:
- `error: unexpected argument '--expose-internals' found

  tip: to pass '--expose-internals' as a value, use '-- --expose-internals'

Usage: elide [OPTIONS] [FILE] [-- <SCRIPT_ARGS>...] [COMMAND]

For more information, try '--help'.
TypeError: Cannot read property 'close' of null
    at EventEmitter.<`
example test: `test/parallel/test-child-process-recv-handle.js`

### 1 × `Error: Unhandled error. ({code: <str>, message: <str>, name: <str>}) at Writable.emit (native) at Error.get stack (native)`

distinct messages:
- `Error: Unhandled error. ({code: "ETIMEOUT", message: "queryANY ETIMEOUT example.org", name: "Error"})
    at Writable.emit (native)
    at Error.get stack (native)`
example test: `test/parallel/test-http-autoselectfamily.js`

### 1 × `Error: write after end`

distinct messages:
- `Error: write after end`
example test: `test/parallel/test-stream2-finish-pipe-error.js`

### 1 × `expected domains stack length of <n>, but instead is <n>`

distinct messages:
- `expected domains stack length of 0, but instead is 1`
example test: `test/parallel/test-domain-emit-error-handler-stack.js`

### 1 × `fhqwhgads`

distinct messages:
- `fhqwhgads`
example test: `test/parallel/test-console-stdio-setters.js`

### 1 × `first write first cb second write second cb error handler AssertionError: Expected values to be strictly equal: + actual - expected + undefined - null at Writab`

distinct messages:
- `first write
first cb
second write
second cb
error handler
AssertionError: Expected values to be strictly equal:
+ actual - expected

+ undefined
- null

    at Writable.<anonymous> (test-fs-write-stream-err.js:66:10)
    at Writable._return (/work/.harness/work/node-api/node-api-overlay/test/common/`
example test: `test/parallel/test-fs-write-stream-err.js`

### 1 × `foo foo bar foo bar hop {<str>:<str>} {<str>:<str>} foo foo bar foo bar hop {<str>:<str>} {<str>:<str>} Trace: This is a %j %d [object Object] <n> foo at <loc> `

distinct messages:
- `foo
foo bar
foo bar hop
{"slashes":"\\\\"}
{"foo":"bar"}
foo
foo bar
foo bar hop
{"slashes":"\\\\"}
{"foo":"bar"}
Trace: This is a %j %d [object Object] 10 foo
    at test-console.js:1:1
TypeError: Cannot read property 'get' of undefined
    at :anonymous (test-console.js:181:14)
    at :program (te`
example test: `test/parallel/test-console.js`

### 1 × `In URL: Setting <https://github.com/>.username = <str> Unpaired low surrogate <n>: AssertionError: Expected values to be strictly equal: + actual - expected + <`

distinct messages:
- `In URL: Setting <https://github.com/>.username = "?" Unpaired low surrogate 1:
AssertionError: Expected values to be strictly equal: + actual - expected  + 'https://%3F@github.com/' - 'https://%EF%BF%BD@github.com/'
    at :anonymous (test-whatwg-url-custom-setters.js:35:11)
    at test (wpt.js:158:`
example test: `test/parallel/test-whatwg-url-custom-setters.js`

### 1 × `Mismatched <anonymous> function calls. Expected at least <n>, actual <n>. at Proxy.mustCallAtLeast (<loc>) at <loc> at <loc> Mismatched <anonymous> function cal`

distinct messages:
- `Mismatched <anonymous> function calls. Expected at least 2, actual 0.
    at Proxy.mustCallAtLeast (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:543:10)
    at test-async-hooks-close-during-destroy.js:14:16
    at test-async-hooks-close-during-destroy.js:1:1
Mismatched <anonymo`
example test: `test/parallel/test-async-hooks-close-during-destroy.js`

### 1 × `Mismatched <anonymous> function calls. Expected exactly <n>, actual <n>. at mustCall (<loc>) at _expectWarning (<loc>) at Proxy.expectWarning (<loc>) at expectE`

distinct messages:
- `Mismatched <anonymous> function calls. Expected exactly 1, actual 0.
    at mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at _expectWarning (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:750:10)
    at Proxy.expectWarning (/work/.harnes`
example test: `test/parallel/test-vm-measure-memory-lazy.js`

### 1 × `Mismatched <anonymous> function calls. Expected exactly <n>, actual <n>. at mustCall (<loc>) at EventEmitter.server (<loc>) at EventEmitter._return (<loc>) at E`

distinct messages:
- `Mismatched <anonymous> function calls. Expected exactly 1, actual 0.
    at mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at EventEmitter.server (test-http-dump-req-when-res-ends.js:17:20)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-o`
example test: `test/parallel/test-http-dump-req-when-res-ends.js`

### 1 × `Mismatched <anonymous> function calls. Expected exactly <n>, actual <n>. at mustCall (<loc>) at expectsError (<loc>) at EventEmitter.<anonymous> (<loc>) at Even`

distinct messages:
- `Mismatched <anonymous> function calls. Expected exactly 1, actual 0.
    at mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at expectsError (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:796:10)
    at EventEmitter.<anonymous> (test-http-`
example test: `test/parallel/test-http-header-overflow.js`

### 1 × `Mismatched <anonymous> function calls. Expected exactly <n>, actual <n>. at mustCall (<loc>) at Proxy.expectsError (<loc>) at <loc> at <loc> Mismatched <anonymo`

distinct messages:
- `Mismatched <anonymous> function calls. Expected exactly 1, actual 0.
    at mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at Proxy.expectsError (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:796:10)
    at test-net-connect-reset.js:9:10`
example test: `test/parallel/test-net-connect-reset.js`

### 1 × `Mismatched <anonymous> function calls. Expected exactly <n>, actual <n>. at mustCall (<loc>) at Proxy.expectsError (<loc>) at <loc> at <loc> Mismatched noop fun`

distinct messages:
- `Mismatched <anonymous> function calls. Expected exactly 1, actual 0.
    at mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at Proxy.expectsError (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:796:10)
    at test-stream-readable-with-unim`
example test: `test/parallel/test-stream-readable-with-unimplemented-_read.js`

### 1 × `Mismatched <anonymous> function calls. Expected exactly <n>, actual <n>. at mustCall (<loc>) at Proxy.mustSucceed (<loc>) at <loc> at <loc> at _return (<loc>) M`

distinct messages:
- `Mismatched <anonymous> function calls. Expected exactly 1, actual 0.
    at mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at Proxy.mustSucceed (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:535:10)
    at test-fs-write-buffer.js:51:23
 `
example test: `test/parallel/test-fs-write-buffer.js`

### 1 × `Mismatched <anonymous> function calls. Expected exactly <n>, actual <n>. at Proxy.mustCall (<loc>) at <loc> at _return (<loc>) at <loc> at <loc> Mismatched <ano`

distinct messages:
- `Mismatched <anonymous> function calls. Expected exactly 1, actual 0.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at test-net-socket-setnodelay.js:9:62
    at _return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
`
example test: `test/parallel/test-net-socket-setnodelay.js`

### 1 × `Mismatched <anonymous> function calls. Expected exactly <n>, actual <n>. at Proxy.mustCall (<loc>) at <loc> at _return (<loc>) at Duplex.<anonymous> (<loc>) at `

distinct messages:
- `Mismatched <anonymous> function calls. Expected exactly 1, actual 2.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at test-http-keep-alive-max-requests.js:102:32
    at _return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js`
example test: `test/parallel/test-http-keep-alive-max-requests.js`

### 1 × `Mismatched <anonymous> function calls. Expected exactly <n>, actual <n>. at Proxy.mustCall (<loc>) at <loc> at <loc> Mismatched noop function calls. Expected ex`

distinct messages:
- `Mismatched <anonymous> function calls. Expected exactly 2, actual 1.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at test-http-generic-streams.js:34:43
    at test-http-generic-streams.js:1:1
Mismatched noop function calls. Expected exactly 1,`
example test: `test/parallel/test-http-generic-streams.js`

### 1 × `Mismatched <anonymous> function calls. Expected exactly <n>, actual <n>. at Proxy.mustCall (<loc>) at Duplex.<anonymous> (<loc>) at Duplex._return (<loc>) at Du`

distinct messages:
- `Mismatched <anonymous> function calls. Expected exactly 1, actual 0.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at Duplex.<anonymous> (test-http-server-close-idle.js:48:27)
    at Duplex._return (/work/.harness/work/node-api/node-api-overlay`
example test: `test/parallel/test-http-server-close-idle.js`

### 1 × `Mismatched <anonymous> function calls. Expected exactly <n>, actual <n>. at Proxy.mustCall (<loc>) at expectError (<loc>) at test (<loc>) at <loc> at <loc> Mism`

distinct messages:
- `Mismatched <anonymous> function calls. Expected exactly 1, actual 0.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at expectError (test-stream-writable-write-error.js:23:26)
    at test (test-stream-writable-write-error.js:37:5)
    at test-str`
example test: `test/parallel/test-stream-writable-write-error.js`

### 1 × `Mismatched <anonymous> function calls. Expected exactly <n>, actual <n>. at Proxy.mustCall (<loc>) at new Countdown (<loc>) at <loc> at <loc> Mismatched <anonym`

distinct messages:
- `Mismatched <anonymous> function calls. Expected exactly 1, actual 0.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at new Countdown (/work/.harness/work/node-api/node-api-overlay/test/common/countdown.js:13:30)
    at test-http-server-connectio`
example test: `test/parallel/test-http-server-connections-checking-leak.js`

### 1 × `Mismatched <anonymous> function calls. Expected exactly <n>, actual <n>. at Proxy.mustCall (<loc>) at test2 (<loc>) at <loc> at <loc> Mismatched <anonymous> fun`

distinct messages:
- `Mismatched <anonymous> function calls. Expected exactly 1, actual 0.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at test2 (test-fs-stream-double-close.js:44:28)
    at test-fs-stream-double-close.js:30:1
    at test-fs-stream-double-close.js:`
example test: `test/parallel/test-fs-stream-double-close.js`

### 1 × `Mismatched <anonymous> function calls. Expected exactly <n>, actual <n>. at Proxy.mustCall (<loc>) at Writable.<anonymous> (<loc>) at Writable._return (<loc>) M`

distinct messages:
- `Mismatched <anonymous> function calls. Expected exactly 1, actual 0.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at Writable.<anonymous> (test-fs-write-stream-double-close.js:27:20)
    at Writable._return (/work/.harness/work/node-api/node-a`
example test: `test/parallel/test-fs-write-stream-double-close.js`

### 1 × `Mismatched endCallback function calls. Expected exactly <n>, actual <n>. at Proxy.mustCall (<loc>) at Writable.requestCallback (<loc>) at Writable.requestCallba`

distinct messages:
- `Mismatched endCallback function calls. Expected exactly 1, actual 0.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at Writable.requestCallback (test-http-client-readable.js:67:24)
    at Writable.requestCallback (/work/.harness/work/node-api/no`
example test: `test/parallel/test-http-client-readable.js`

### 1 × `Mismatched noop function calls. Expected exactly <n>, actual <n>. at Proxy.mustCall (<loc>) at <loc>`

distinct messages:
- `Mismatched noop function calls. Expected exactly 1, actual 0.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at test-fs-write-stream-file-handle.js:12:29`
example test: `test/parallel/test-fs-write-stream-file-handle.js`

### 1 × `Mismatched noop function calls. Expected exactly <n>, actual <n>. at Proxy.mustCall (<loc>) at <loc> at _return (<loc>) Mismatched noop function calls. Expected`

distinct messages:
- `Mismatched noop function calls. Expected exactly 1, actual 0.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at test-async-hooks-enable-during-promise.js:7:18
    at _return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573`
example test: `test/parallel/test-async-hooks-enable-during-promise.js`

### 1 × `Mismatched noop function calls. Expected exactly <n>, actual <n>. at Proxy.mustCall (<loc>) at <loc> at <loc> Mismatched <anonymous> function calls. Expected at`

distinct messages:
- `Mismatched noop function calls. Expected exactly 1, actual 0.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at test-zlib-invalid-input-memory.js:11:21
    at test-zlib-invalid-input-memory.js:1:1
Mismatched <anonymous> function calls. Expected `
example test: `test/parallel/test-zlib-invalid-input-memory.js`

### 1 × `Mismatched noop function calls. Expected exactly <n>, actual <n>. at Proxy.mustCall (<loc>) at <loc> at <loc> Mismatched <anonymous> function calls. Expected ex`

distinct messages:
- `Mismatched noop function calls. Expected exactly 1, actual 0.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at test-async-hooks-enable-recursive.js:8:16
    at test-async-hooks-enable-recursive.js:1:1
Mismatched <anonymous> function calls. Expe`
example test: `test/parallel/test-async-hooks-enable-recursive.js`

### 1 × `Mismatched noop function calls. Expected exactly <n>, actual <n>. at Proxy.mustCall (<loc>) at EventEmitter.<anonymous> (<loc>) at EventEmitter._return (<loc>) `

distinct messages:
- `Mismatched noop function calls. Expected exactly 3, actual 0.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at EventEmitter.<anonymous> (test-http-agent-destroyed-socket.js:34:27)
    at EventEmitter._return (/work/.harness/work/node-api/node-a`
example test: `test/parallel/test-http-agent-destroyed-socket.js`

### 1 × `Mismatched onMessage function calls. Expected exactly <n>, actual <n>. at Proxy.mustCall (<loc>) at <loc> at <loc>`

distinct messages:
- `Mismatched onMessage function calls. Expected exactly 1, actual 2.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at test-dgram-send-empty-array.js:12:29
    at test-dgram-send-empty-array.js:1:1`
example test: `test/parallel/test-dgram-send-empty-array.js`

### 1 × `Mismatched pause function calls. Expected exactly <n>, actual <n>. at Proxy.mustCall (<loc>) at <loc> at <loc>`

distinct messages:
- `Mismatched pause function calls. Expected exactly 1, actual 0.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at test-tty-stdin-pipe.js:34:19
    at test-tty-stdin-pipe.js:1:1`
example test: `test/parallel/test-tty-stdin-pipe.js`

### 1 × `Mismatched ReadStream$open function calls. Expected exactly <n>, actual <n>. at Proxy.mustCall (<loc>) at <loc> at <loc> Mismatched <anonymous> function calls. `

distinct messages:
- `Mismatched ReadStream$open function calls. Expected exactly 1, actual 0.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at test-fs-stream-construct-compat-graceful-fs.js:20:38
    at test-fs-stream-construct-compat-graceful-fs.js:1:1
Mismatched `
example test: `test/parallel/test-fs-stream-construct-compat-graceful-fs.js`

### 1 × `Mismatched tryRepeatedTimer function calls. Expected exactly <n>, actual <n>. at Proxy.mustCall (<loc>) at EventEmitter.<anonymous> (<loc>) at EventEmitter._ret`

distinct messages:
- `Mismatched tryRepeatedTimer function calls. Expected exactly 1, actual 0.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at EventEmitter.<anonymous> (test-process-beforeexit.js:45:41)
    at EventEmitter._return (/work/.harness/work/node-api/nod`
example test: `test/parallel/test-process-beforeexit.js`

### 1 × `Mismatched writev function calls. Expected at least <n>, actual <n>. at Proxy.mustCallAtLeast (<loc>) at <loc> at <loc>`

distinct messages:
- `Mismatched writev function calls. Expected at least 1, actual 0.
    at Proxy.mustCallAtLeast (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:543:10)
    at test-fs-write-stream-fs.js:28:22
    at test-fs-write-stream-fs.js:1:1`
example test: `test/parallel/test-fs-write-stream-fs.js`

### 1 × `More of level <n> AssertionError: Expected values to be strictly equal: + actual - expected <str> + + <str> + + <str> + + <str> + + <str> + + <str> + - <str> + `

distinct messages:
- `More of level 3
AssertionError: Expected values to be strictly equal: + actual - expected    'This is the outer level\n' + +   '\n' + +   'Level 2\n' + +   '\n' + +   'Level 3\n' + +   'Back to level 2\n' + -   '  Level 2\n' + -   '    Level 3\n' + -   '  Back to level 2\n' +     'Back to the outer `
example test: `test/parallel/test-console-group.js`

### 1 × `RangeError: Maximum call stack size exceeded at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `RangeError: Maximum call stack size exceeded
    at :anonymous (test-util-inspect-long-running.js:20:1)
    at :program (test-util-inspect-long-running.js:1:1)`
example test: `test/parallel/test-util-inspect-long-running.js`

### 1 × `RangeError: The value of <str> is out of range. It must be >= <n> and <= <n>. Received <n> at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `RangeError: The value of "targetStart" is out of range. It must be >= 0 and <= 10. Received 255
    at :anonymous (test-buffer-compare-offset.js:70:20)
    at :program (test-buffer-compare-offset.js:1:1)`
example test: `test/parallel/test-buffer-compare-offset.js`

### 1 × `readable event readable event end event Mismatched <anonymous> function calls. Expected exactly <n>, actual <n>. at Proxy.mustCall (<loc>) at Writable.<anonymou`

distinct messages:
- `readable event
readable event
end event
Mismatched <anonymous> function calls. Expected exactly 1, actual 2.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at Writable.<anonymous> (test-stream2-httpclient-response-end.js:12:31)
    at Writable._`
example test: `test/parallel/test-stream2-httpclient-response-end.js`

### 1 × `ReferenceError: b is not defined at :program (<eval><loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `ReferenceError: b is not defined
    at :program (<eval>:6:11)
    at :anonymous (test-vm-not-strict.js:14:13)
    at :program (test-vm-not-strict.js:1:1)`
example test: `test/parallel/test-vm-not-strict.js`

### 1 × `ReferenceError: test is not defined at :program (<eval><loc>) at anonymous (<function><loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `ReferenceError: test is not defined
    at :program (<eval>:1:1)
    at anonymous (<function>:3:84)
    at :anonymous (test-vm-function-redefinition.js:10:16)
    at :program (test-vm-function-redefinition.js:1:1)`
example test: `test/parallel/test-vm-function-redefinition.js`

### 1 × `ReferenceError: WebAssembly is not defined at :program (<eval><loc>) at anonymous (<function><loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `ReferenceError: WebAssembly is not defined
    at :program (<eval>:1:15)
    at anonymous (<function>:3:84)
    at :anonymous (test-vm-codegen.js:14:3)
    at :program (test-vm-codegen.js:1:1)`
example test: `test/parallel/test-vm-codegen.js`

### 1 × `ReferenceError: WebSocket is not defined at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `ReferenceError: WebSocket is not defined
    at :anonymous (test-http-import-websocket.js:12:39)
    at :program (test-http-import-websocket.js:1:1)`
example test: `test/parallel/test-http-import-websocket.js`

### 1 × `Required array size too large`

distinct messages:
- `Required array size too large`
example test: `test/parallel/test-fs-readfile.js`

### 1 × `resolver.setLocalAddress is not implemented at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `resolver.setLocalAddress is not implemented
    at :anonymous (test-dns-setlocaladdress.js:11:3)
    at :program (test-dns-setlocaladdress.js:1:1)`
example test: `test/parallel/test-dns-setlocaladdress.js`

### 1 × `SERVER: got connection connection closed AssertionError: Expected values to be strictly equal: {} !== null at Duplex.<anonymous> (<loc>) at Duplex._return (<loc`

distinct messages:
- `SERVER: got connection
connection closed
AssertionError: Expected values to be strictly equal:

{} !== null

    at Duplex.<anonymous> (test-net-after-close.js:37:12)
    at Duplex._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)`
example test: `test/parallel/test-net-after-close.js`

### 1 × `string {<str>:{}} [<n>,<n>,<n>] string {<str>:{}} [<n>,<n>,<n>] AssertionError: The expression evaluated to a falsy value: assert.ok(intercepted) at <loc> at _r`

distinct messages:
- `string {"key":{}} [1,2,3]
string {"key":{}} [1,2,3]
AssertionError: The expression evaluated to a falsy value:

  assert.ok(intercepted)

    at test-console-diagnostics-channels.js:69:12
    at _return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at Writable.write`
example test: `test/parallel/test-console-diagnostics-channels.js`

### 1 × `SyntaxError: <eval><loc> Expected an operand but found % %IsSmi(<n>) ^ at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `SyntaxError: <eval>:1:0 Expected an operand but found % %IsSmi(42) ^
    at :anonymous (test-v8-flags.js:11:8)
    at :program (test-v8-flags.js:1:1)`
example test: `test/parallel/test-v8-flags.js`

### 1 × `SyntaxError: <eval><loc> Expected an operand but found % %PrepareFunctionForOptimization(Buffer.prototype.swap16) ^ at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `SyntaxError: <eval>:1:0 Expected an operand but found % %PrepareFunctionForOptimization(Buffer.prototype.swap16) ^
    at :anonymous (test-buffer-swap-fast.js:34:1)
    at :program (test-buffer-swap-fast.js:1:1)`
example test: `test/parallel/test-buffer-swap-fast.js`

### 1 × `SyntaxError: Unexpected token A in JSON at position <n> at JSON.parse (native) at Readable.<anonymous> (<loc>) at SyntaxError.get stack (native) SyntaxError: Un`

distinct messages:
- `SyntaxError: Unexpected token A in JSON at position 0
    at JSON.parse (native)
    at Readable.<anonymous> (test-domain-http-server.js:107:18)
    at SyntaxError.get stack (native)
SyntaxError: Unexpected token T in JSON at position 0
    at JSON.parse (native)
    at Readable.<anonymous> (test-do`
example test: `test/parallel/test-domain-http-server.js`

### 1 × `TAP version <n> # Subtest: Assert class destructuring behavior - diff option not ok <n> - Assert class destructuring behavior - diff option --- duration_ms: <n>`

distinct messages:
- `TAP version 13
# Subtest: Assert class destructuring behavior - diff option
not ok 1 - Assert class destructuring behavior - diff option
  ---
  duration_ms: 2
  failureType: 'testCodeFailure'
  error: "Assert is not a constructor"
  code: 'ERR_TEST_FAILURE'
  ...
# Subtest: Assert class destructuri`
example test: `test/parallel/test-assert-class-destructuring.js`

### 1 × `TAP version <n> # Subtest: Assert constructor requires new not ok <n> - Assert constructor requires new --- duration_ms: <n> failureType: <str> error: <str> cod`

distinct messages:
- `TAP version 13
# Subtest: Assert constructor requires new
not ok 1 - Assert constructor requires new
  ---
  duration_ms: 11
  failureType: 'testCodeFailure'
  error: "Expected values to be strictly deep-equal:\n+ actual - expected\n\n  Comparison {\n-   code: 'ERR_CONSTRUCT_CALL_REQUIRED',\n    nam`
example test: `test/parallel/test-assert-class.js`

### 1 × `TAP version <n> # Subtest: CJS: --experimental-package-map # Subtest: basic resolution # Subtest: resolves require() through package map not ok <n> - resolves r`

distinct messages:
- `TAP version 13
# Subtest: CJS: --experimental-package-map
    # Subtest: basic resolution
        # Subtest: resolves require() through package map
        not ok 1 - resolves require() through package map
          ---
          duration_ms: 133
          failureType: 'testCodeFailure'
          er`
example test: `test/parallel/test-require-package-map.js`

### 1 × `TAP version <n> # Subtest: DecompressionStream deflate emits TypeError on trailing data ok <n> - DecompressionStream deflate emits TypeError on trailing data # `

distinct messages:
- `TAP version 13
# Subtest: DecompressionStream deflate emits TypeError on trailing data
ok 1 - DecompressionStream deflate emits TypeError on trailing data
# Subtest: DecompressionStream gzip emits TypeError on trailing data
ok 2 - DecompressionStream gzip emits TypeError on trailing data
# Subtest: `
example test: `test/parallel/test-zlib-type-error.js`

### 1 × `TAP version <n> # Subtest: deepEqual ok <n> - deepEqual # Subtest: loose deepEqual ok <n> - loose deepEqual # Subtest: date ok <n> - date # Subtest: regexp ok <`

distinct messages:
- `TAP version 13
# Subtest: deepEqual
ok 1 - deepEqual
# Subtest: loose deepEqual
ok 2 - loose deepEqual
# Subtest: date
ok 3 - date
# Subtest: regexp
ok 4 - regexp
# Subtest: deepEqual should pass for these weird cases
ok 5 - deepEqual should pass for these weird cases
# Subtest: es6 Maps and Sets
ok`
example test: `test/parallel/test-assert-deep.js`

### 1 × `TAP version <n> # Subtest: ensure the assert.ok throwing similar error messages for esm and cjs files # Subtest: should return code <n> for each command not ok `

distinct messages:
- `TAP version 13
# Subtest: ensure the assert.ok throwing similar error messages for esm and cjs files
    # Subtest: should return code 1 for each command
    not ok 1 - should return code 1 for each command
      ---
      duration_ms: 71
      failureType: 'testCodeFailure'
      error: "Expected v`
example test: `test/parallel/test-assert-esm-cjs-message-verify.js`

### 1 × `TAP version <n> # Subtest: format slightly wonky content to a valid URL not ok <n> - format slightly wonky content to a valid URL --- duration_ms: <n> failureTy`

distinct messages:
- `TAP version 13
# Subtest: format slightly wonky content to a valid URL
not ok 1 - format slightly wonky content to a valid URL
  ---
  duration_ms: 3
  failureType: 'testCodeFailure'
  error: "wonky format(http://google.com\" onload=\"alert(42)/) == http://google.com/%22%20onload=%22alert(42)/\nactu`
example test: `test/parallel/test-url-format.js`

### 1 × `TAP version <n> # Subtest: fs.stat should throw AbortError when called with an already aborted AbortSignal not ok <n> - fs.stat should throw AbortError when cal`

distinct messages:
- `TAP version 13
# Subtest: fs.stat should throw AbortError when called with an already aborted AbortSignal
not ok 1 - fs.stat should throw AbortError when called with an already aborted AbortSignal
  ---
  duration_ms: 3
  failureType: 'testCodeFailure'
  error: "Missing expected rejection (AbortErro`
example test: `test/parallel/test-fs-stat-abort-test.js`

### 1 × `TAP version <n> # Subtest: module is not instantiated yet not ok <n> - module is not instantiated yet --- duration_ms: <n> failureType: <str> error: <str> code:`

distinct messages:
- `TAP version 13
# Subtest: module is not instantiated yet
not ok 1 - module is not instantiated yet
  ---
  duration_ms: 8
  failureType: 'testCodeFailure'
  error: "Expected values to be strictly deep-equal:\n+ actual - expected\n\n+ Comparison {}\n- Comparison {\n-   code: 'ERR_VM_MODULE_STATUS'\n-`
example test: `test/parallel/test-vm-module-hasasyncgraph.js`

### 1 × `TAP version <n> # Subtest: process.loadEnvFile() # Subtest: supports passing path not ok <n> - supports passing path --- duration_ms: <n> failureType: <str> err`

distinct messages:
- `TAP version 13
# Subtest: process.loadEnvFile()
    # Subtest: supports passing path
    not ok 1 - supports passing path
      ---
      duration_ms: 124
      failureType: 'testCodeFailure'
      error: "Expected values to be strictly equal:\n+ actual - expected\n\n+ 'TypeError: (intermediate valu`
example test: `test/parallel/test-process-load-env-file.js`

### 1 × `TAP version <n> # Subtest: process.ref/unref work as expected # Subtest: refs... not ok <n> - refs... --- duration_ms: <n> failureType: <str> error: <str> code:`

distinct messages:
- `TAP version 13
# Subtest: process.ref/unref work as expected
    # Subtest: refs...
    not ok 1 - refs...
      ---
      duration_ms: 1
      failureType: 'testCodeFailure'
      error: "(intermediate value).ref is not a function"
      code: 'ERR_TEST_FAILURE'
      ...
    1..1
not ok 1 - proces`
example test: `test/parallel/test-process-ref-unref.js`

### 1 × `TAP version <n> # Subtest: should parse and format not ok <n> - should parse and format --- duration_ms: <n> failureType: <str> error: <str> code: <str> ... # S`

distinct messages:
- `TAP version 13
# Subtest: should parse and format
not ok 1 - should parse and format
  ---
  duration_ms: 9
  failureType: 'testCodeFailure'
  error: "expected Url {\n  protocol: null,\n  slashes: null,\n  auth: null,\n  host: null,\n  port: null,\n  hostname: null,\n  hash: null,\n  search: null,\n`
example test: `test/parallel/test-url-parse-format.js`

### 1 × `TAP version <n> # Subtest: simple module not ok <n> - simple module --- duration_ms: <n> failureType: <str> error: <str> code: <str> ... # Subtest: linkRequests`

distinct messages:
- `TAP version 13
# Subtest: simple module
not ok 1 - simple module
  ---
  duration_ms: 2
  failureType: 'testCodeFailure'
  error: "foo.linkRequests is not a function"
  code: 'ERR_TEST_FAILURE'
  ...
# Subtest: linkRequests can not be skipped
not ok 2 - linkRequests can not be skipped
  ---
  durati`
example test: `test/parallel/test-vm-module-instantiate.js`

### 1 × `TAP version <n> # Subtest: simple module not ok <n> - simple module --- duration_ms: <n> failureType: <str> error: <str> code: <str> ... # Subtest: simple modul`

distinct messages:
- `TAP version 13
# Subtest: simple module
not ok 1 - simple module
  ---
  duration_ms: 1
  failureType: 'testCodeFailure'
  error: "foo.hasTopLevelAwait is not a function"
  code: 'ERR_TEST_FAILURE'
  ...
# Subtest: simple module with top-level await
not ok 2 - simple module with top-level await
  --`
example test: `test/parallel/test-vm-module-hastoplevelawait.js`

### 1 × `TAP version <n> # Subtest: some basics ok <n> - some basics # Subtest: Throw message if the message is instanceof Error ok <n> - Throw message if the message is`

distinct messages:
- `TAP version 13
# Subtest: some basics
ok 1 - some basics
# Subtest: Throw message if the message is instanceof Error
ok 2 - Throw message if the message is instanceof Error
# Subtest: Errors created in different contexts are handled as any other custom error
ok 3 - Errors created in different contex`
example test: `test/parallel/test-assert.js`

### 1 × `TAP version <n> # Subtest: SourceTextModule.moduleRequests should return module requests not ok <n> - SourceTextModule.moduleRequests should return module reque`

distinct messages:
- `TAP version 13
# Subtest: SourceTextModule.moduleRequests should return module requests
not ok 1 - SourceTextModule.moduleRequests should return module requests
  ---
  duration_ms: 1
  failureType: 'testCodeFailure'
  error: "Cannot read property 'length' of undefined"
  code: 'ERR_TEST_FAILURE'
  `
example test: `test/parallel/test-vm-module-modulerequests.js`

### 1 × `TAP version <n> # Subtest: Worker eval module typescript without input-type ok <n> - Worker eval module typescript without input-type # SKIP # Subtest: Worker e`

distinct messages:
- `TAP version 13
# Subtest: Worker eval module typescript without input-type
ok 1 - Worker eval module typescript without input-type # SKIP
# Subtest: Worker eval module typescript with --input-type=module-typescript
ok 2 - Worker eval module typescript with --input-type=module-typescript # SKIP
# Sub`
example test: `test/parallel/test-worker-eval-typescript.js`

### 1 × `TypeError: (intermediate value)._fatalException is not a function`

distinct messages:
- `TypeError: (intermediate value)._fatalException is not a function`
example test: `test/parallel/test-worker-non-fatal-uncaught-exception.js`

### 1 × `TypeError: (intermediate value)._getActiveHandles is not a function at checkAll (<loc>) at clientConnected (<loc>) at Duplex.connected (<loc>) at Duplex.emit (n`

distinct messages:
- `TypeError: (intermediate value)._getActiveHandles is not a function
    at checkAll (test-process-getactivehandles.js:33:27)
    at clientConnected (test-process-getactivehandles.js:28:5)
    at Duplex.connected (test-process-getactivehandles.js:19:5)
    at Duplex.emit (native)
    at TypeError.get`
example test: `test/parallel/test-process-getactivehandles.js`

### 1 × `TypeError: (intermediate value)._getActiveRequests is not a function at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: (intermediate value)._getActiveRequests is not a function
    at :anonymous (test-process-getactiverequests.js:10:20)
    at :program (test-process-getactiverequests.js:1:1)`
example test: `test/parallel/test-process-getactiverequests.js`

### 1 × `TypeError: (intermediate value).execve is not a function at :anonymous (<loc>) at :program (<loc>) AssertionError: function should not have been called at <loc>`

distinct messages:
- `TypeError: (intermediate value).execve is not a function
    at :anonymous (test-process-execve-on-exit.js:17:3)
    at :program (test-process-execve-on-exit.js:1:1)
AssertionError: function should not have been called at test-process-execve-on-exit.js:16
called with arguments: 1
    at process.must`
example test: `test/parallel/test-process-execve-on-exit.js`

### 1 × `TypeError: (intermediate value).execve is not a function at EventEmitter.<anonymous> (<loc>) at EventEmitter._return (<loc>) at EventEmitter.emit (native) at Ty`

distinct messages:
- `TypeError: (intermediate value).execve is not a function
    at EventEmitter.<anonymous> (test-process-execve-socket.js:35:15)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)
    at TypeError.get stack (native)`
example test: `test/parallel/test-process-execve-socket.js`

### 1 × `TypeError: (intermediate value).gc is not a function at Immediate.<anonymous> (<loc>) at Immediate._return (<loc>) at TypeError.get stack (native)`

distinct messages:
- `TypeError: (intermediate value).gc is not a function
    at Immediate.<anonymous> (test-async-hooks-destroy-on-gc.js:25:14)
    at Immediate._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at TypeError.get stack (native)`
example test: `test/parallel/test-async-hooks-destroy-on-gc.js`

### 1 × `TypeError: (intermediate value).kill is not a function at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: (intermediate value).kill is not a function
    at :anonymous (test-process-kill-null.js:29:11)
    at :program (test-process-kill-null.js:1:1)`
example test: `test/parallel/test-process-kill-null.js`

### 1 × `TypeError: (intermediate value).threadCpuUsage is not a function at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: (intermediate value).threadCpuUsage is not a function
    at :anonymous (test-process-threadCpuUsage-main-thread.js:21:18)
    at :program (test-process-threadCpuUsage-main-thread.js:1:1)`
example test: `test/parallel/test-process-threadCpuUsage-main-thread.js`

### 1 × `TypeError: ArrayBuffer expected at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: ArrayBuffer expected
    at :anonymous (test-stream-consumers.js:27:3)
    at :program (test-stream-consumers.js:1:1)`
example test: `test/parallel/test-stream-consumers.js`

### 1 × `TypeError: Cannot convert undefined or null to object: null`

distinct messages:
- `TypeError: Cannot convert undefined or null to object: null`
example test: `test/parallel/test-net-write-cb-on-destroy-before-connect.js`

### 1 × `TypeError: Cannot load module: <str> at test (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: Cannot load module: '/work/.harness/work/node-api/node-test/.tmp.1974/module-require-symlink/foo.js'
    at test (test-require-symlink.js:72:21)
    at :anonymous (test-require-symlink.js:65:1)
    at :program (test-require-symlink.js:1:1)`
example test: `test/parallel/test-require-symlink.js`

### 1 × `TypeError: Cannot load script: . at :anonymous (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: Cannot load script: .
    at :anonymous (dot.js:1:18)
    at :anonymous (test-require-dot.js:7:11)
    at :program (test-require-dot.js:1:1)`
example test: `test/parallel/test-require-dot.js`

### 1 × `TypeError: Cannot perform <str> on a proxy that has been revoked at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: Cannot perform 'get' on a proxy that has been revoked
    at :anonymous (test-console-issue-43095.js:10:1)
    at :program (test-console-issue-43095.js:1:1)`
example test: `test/parallel/test-console-issue-43095.js`

### 1 × `TypeError: Cannot read property <str> of null at :=> (<loc>) at _return (<loc>) at writer1._write (<loc>) at _return (<loc>)`

distinct messages:
- `TypeError: Cannot read property 'size' of null
    at :=> (test-stream-pipe-await-drain.js:27:5)
    at _return (index.js:573:12)
    at writer1._write (test-stream-pipe-await-drain.js:21:3)
    at _return (index.js:573:12)`
example test: `test/parallel/test-stream-pipe-await-drain.js`

### 1 × `TypeError: Cannot read property <str> of null at EventEmitter.<anonymous> (<loc>) at EventEmitter._return (<loc>) at EventEmitter.emit (native) at TypeError.get`

distinct messages:
- `TypeError: Cannot read property 'read' of null
    at EventEmitter.<anonymous> (test-worker-stdio-from-preload-module.js:18:24)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)
    at TypeError.get stack (native`
example test: `test/parallel/test-worker-stdio-from-preload-module.js`

### 1 × `TypeError: Cannot read property <str> of null at EventEmitter.<anonymous> (<loc>) at EventEmitter.emit (native) at Duplex.push (native)`

distinct messages:
- `TypeError: Cannot read property 'lang' of null
    at EventEmitter.<anonymous> (test-http-response-splitting.js:39:19)
    at EventEmitter.emit (native)
    at Duplex.push (native)`
example test: `test/parallel/test-http-response-splitting.js`

### 1 × `TypeError: Cannot read property <str> of undefined at :=> (<loc>) at _return (<loc>)`

distinct messages:
- `TypeError: Cannot read property 'code' of undefined
    at :=> (test-stream-writable-destroy.js:338:26)
    at _return (index.js:573:12)`
example test: `test/parallel/test-stream-writable-destroy.js`

### 1 × `TypeError: Cannot read property <str> of undefined at :anonymous (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: Cannot read property 'slice' of undefined
    at :anonymous (b.js:2:18)
    at :anonymous (test-module-children.js:9:11)
    at :program (test-module-children.js:1:1)`
example test: `test/parallel/test-module-children.js`

### 1 × `TypeError: Cannot read property <str> of undefined at child (<loc>) at _return (<loc>) at EventEmitter.emit (native) at TypeError.get stack (native) TypeError: `

distinct messages:
- `TypeError: Cannot read property 'includes' of undefined
    at child (test-child-process-exec-error.js:30:12)
    at _return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)
    at TypeError.get stack (native)
TypeError: Cannot read proper`
example test: `test/parallel/test-child-process-exec-error.js`

### 1 × `TypeError: Cannot read property <str> of undefined at EventEmitter.<anonymous> (<loc>) at EventEmitter._return (<loc>) at EventEmitter.emit (native)`

distinct messages:
- `TypeError: Cannot read property 'toString' of undefined
    at EventEmitter.<anonymous> (test-http-server-multiple-client-error.js:31:22)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)`
example test: `test/parallel/test-http-server-multiple-client-error.js`

### 1 × `TypeError: Cannot read property <str> of undefined at EventEmitter.<anonymous> (<loc>) at EventEmitter._return (<loc>) at EventEmitter.emit (native) at TypeErro`

distinct messages:
- `TypeError: Cannot read property 'code' of undefined
    at EventEmitter.<anonymous> (test-dgram-blocklist.js:13:15)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)
    at TypeError.get stack (native)`
example test: `test/parallel/test-dgram-blocklist.js`

### 1 × `TypeError: Cannot read property <str> of undefined at Immediate.onImmediate (<loc>) at Immediate.onImmediate (<loc>) at TypeError.get stack (native) TypeError: `

distinct messages:
- `TypeError: Cannot read property 'get' of undefined
    at Immediate.onImmediate (test-timers-clearImmediate-als.js:21:21)
    at Immediate.onImmediate (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at TypeError.get stack (native)
TypeError: Cannot read property 'get'`
example test: `test/parallel/test-timers-clearImmediate-als.js`

### 1 × `TypeError: Cannot read property <str> of undefined at Readable.<anonymous> (<loc>) at TypeError.get stack (native) TypeError: Cannot read property <str> of unde`

distinct messages:
- `TypeError: Cannot read property 'id' of undefined
    at Readable.<anonymous> (test-http-client-timeout-agent.js:56:28)
    at TypeError.get stack (native)
TypeError: Cannot read property 'id' of undefined
    at Readable.<anonymous> (test-http-client-timeout-agent.js:56:28)
    at TypeError.get sta`
example test: `test/parallel/test-http-client-timeout-agent.js`

### 1 × `TypeError: Cannot read property <str> of undefined at test (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: Cannot read property 'split' of undefined
    at test (test-console-table.js:21:5)
    at :anonymous (test-console-table.js:30:1)
    at :program (test-console-table.js:1:1)`
example test: `test/parallel/test-console-table.js`

### 1 × `TypeError: Cannot read property <str> of undefined at Writable.<anonymous> (<loc>) at Writable._return (<loc>) at Writable.emit (native) at TypeError.get stack `

distinct messages:
- `TypeError: Cannot read property 'length' of undefined
    at Writable.<anonymous> (test-http-destroyed-socket-write2.js:73:24)
    at Writable._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at Writable.emit (native)
    at TypeError.get stack (native)`
example test: `test/parallel/test-http-destroyed-socket-write2.js`

### 1 × `TypeError: Cannot set property <str> of undefined at EventEmitter.<anonymous> (<loc>) at EventEmitter._return (<loc>) at EventEmitter.emit (native) at Duplex.pu`

distinct messages:
- `TypeError: Cannot set property 'free' of undefined
    at EventEmitter.<anonymous> (test-http-server-connection-list-when-close.js:19:5)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)
    at Duplex.push (nativ`
example test: `test/parallel/test-http-server-connection-list-when-close.js`

### 1 × `TypeError: cb is not a function at Immediate.<anonymous> (<loc>) at TypeError.get stack (native)`

distinct messages:
- `TypeError: cb is not a function
    at Immediate.<anonymous> (test-http-createConnection.js:66:5)
    at TypeError.get stack (native)`
example test: `test/parallel/test-http-createConnection.js`

### 1 × `TypeError: client._handle.close is not a function at Duplex.<anonymous> (<loc>) at Duplex._return (<loc>) at Duplex.emit (native) at TypeError.get stack (native`

distinct messages:
- `TypeError: client._handle.close is not a function
    at Duplex.<anonymous> (test-net-socket-write-after-close.js:17:22)
    at Duplex._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at Duplex.emit (native)
    at TypeError.get stack (native)
TypeError: client`
example test: `test/parallel/test-net-socket-write-after-close.js`

### 1 × `TypeError: client.setTypeOfService is not a function at EventEmitter.<anonymous> (<loc>) at EventEmitter._return (<loc>) at EventEmitter.emit (native) at TypeEr`

distinct messages:
- `TypeError: client.setTypeOfService is not a function
    at EventEmitter.<anonymous> (test-net-socket-tos.js:19:12)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)
    at TypeError.get stack (native)`
example test: `test/parallel/test-net-socket-tos.js`

### 1 × `TypeError: Constructor EventEmitter requires <str> at MyEE (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: Constructor EventEmitter requires 'new'
    at MyEE (test-event-emitter-subclass.js:34:3)
    at :anonymous (test-event-emitter-subclass.js:37:14)
    at :program (test-event-emitter-subclass.js:1:1)`
example test: `test/parallel/test-event-emitter-subclass.js`

### 1 × `TypeError: done is not a function at EventEmitter.<anonymous> (<loc>) at EventEmitter._return (<loc>) at EventEmitter.emit (native) at TypeError.get stack (nati`

distinct messages:
- `TypeError: done is not a function
    at EventEmitter.<anonymous> (test-fs-readdir-recursive.js:16:5)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)
    at TypeError.get stack (native)`
example test: `test/parallel/test-fs-readdir-recursive.js`

### 1 × `TypeError: Duplex.fromWeb is not a function at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: Duplex.fromWeb is not a function
    at :anonymous (test-webstreams-duplex-fromweb-writev-unhandled-rejection.js:21:18)
    at :program (test-webstreams-duplex-fromweb-writev-unhandled-rejection.js:1:1)`
example test: `test/parallel/test-webstreams-duplex-fromweb-writev-unhandled-rejection.js`

### 1 × `TypeError: duplex[(intermediate value).asyncDispose] is not a function at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: duplex[(intermediate value).asyncDispose] is not a function
    at :anonymous (test-stream-duplex-destroy.js:285:3)
    at :program (test-stream-duplex-destroy.js:1:1)`
example test: `test/parallel/test-stream-duplex-destroy.js`

### 1 × `TypeError: eventLoopUtilization is not a function at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: eventLoopUtilization is not a function
    at :anonymous (test-perf-hooks-eventlooputilization.js:16:13)
    at :program (test-perf-hooks-eventlooputilization.js:1:1)`
example test: `test/parallel/test-perf-hooks-eventlooputilization.js`

### 1 × `TypeError: finished: argument must be a stream at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: finished: argument must be a stream
    at :anonymous (test-webstreams-finished.js:16:3)
    at :program (test-webstreams-finished.js:1:1)`
example test: `test/parallel/test-webstreams-finished.js`

### 1 × `TypeError: function Stats() { [native code] } is not a constructor at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: function Stats() { [native code] } is not a constructor
    at :anonymous (test-fs-watchfile.js:34:28)
    at :program (test-fs-watchfile.js:1:1)`
example test: `test/parallel/test-fs-watchfile.js`

### 1 × `TypeError: getHeapSnapshot is not a function at EventEmitter.<anonymous> (<loc>) at EventEmitter._return (<loc>) at EventEmitter.emit (native) at TypeError.get `

distinct messages:
- `TypeError: getHeapSnapshot is not a function
    at EventEmitter.<anonymous> (test-worker-exit-heapsnapshot.js:15:5)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)
    at TypeError.get stack (native)`
example test: `test/parallel/test-worker-exit-heapsnapshot.js`

### 1 × `TypeError: incomingMessage._addHeaderLine is not a function at checkDest (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: incomingMessage._addHeaderLine is not a function
    at checkDest (test-http-incoming-matchKnownFields.js:13:3)
    at :anonymous (test-http-incoming-matchKnownFields.js:17:1)
    at :program (test-http-incoming-matchKnownFields.js:1:1)`
example test: `test/parallel/test-http-incoming-matchKnownFields.js`

### 1 × `TypeError: m.createCachedData is not a function at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: m.createCachedData is not a function
    at :anonymous (test-vm-module-cached-data.js:12:22)
    at :program (test-vm-module-cached-data.js:1:1)`
example test: `test/parallel/test-vm-module-cached-data.js`

### 1 × `TypeError: mod._initPaths is not a function at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: mod._initPaths is not a function
    at :anonymous (test-module-globalpaths-nodepath.js:40:1)
    at :program (test-module-globalpaths-nodepath.js:1:1)`
example test: `test/parallel/test-module-globalpaths-nodepath.js`

### 1 × `TypeError: Module._stat is not a function at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: Module._stat is not a function
    at :anonymous (test-module-stat.js:19:20)
    at :program (test-module-stat.js:1:1)`
example test: `test/parallel/test-module-stat.js`

### 1 × `TypeError: net.BoundSocket is not a constructor at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: net.BoundSocket is not a constructor
    at :anonymous (test-net-boundsocket.js:9:17)
    at :program (test-net-boundsocket.js:1:1)`
example test: `test/parallel/test-net-boundsocket.js`

### 1 × `TypeError: Optional options.transfer argument must be an iterable`

distinct messages:
- `TypeError: Optional options.transfer argument must be an iterable`
example test: `test/parallel/test-worker-message-port-terminate-transfer-list.js`

### 1 × `TypeError: pipe: destination must be a Writable at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: pipe: destination must be a Writable
    at :anonymous (test-zlib-deflate-raw-inherits.js:26:1)
    at :program (test-zlib-deflate-raw-inherits.js:1:1)`
example test: `test/parallel/test-zlib-deflate-raw-inherits.js`

### 1 × `TypeError: pipeline: every link must be a Readable on the left and a Writable on the right at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: pipeline: every link must be a Readable on the left and a Writable on the right
    at :anonymous (test-webstreams-pipeline.js:24:3)
    at :program (test-webstreams-pipeline.js:1:1)`
example test: `test/parallel/test-webstreams-pipeline.js`

### 1 × `TypeError: read[(intermediate value).asyncDispose] is not a function at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: read[(intermediate value).asyncDispose] is not a function
    at :anonymous (test-stream-readable-dispose.js:19:3)
    at :program (test-stream-readable-dispose.js:1:1)`
example test: `test/parallel/test-stream-readable-dispose.js`

### 1 × `TypeError: receiver is not a Buffer at isMethod (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: receiver is not a Buffer
    at isMethod (test-buffer-generic-methods.js:101:37)
    at :anonymous (test-buffer-generic-methods.js:109:6)
    at :program (test-buffer-generic-methods.js:1:1)`
example test: `test/parallel/test-buffer-generic-methods.js`

### 1 × `TypeError: res._send is not a function at EventEmitter.handler (<loc>) at EventEmitter.emit (native) at Duplex.push (native) TypeError: res._send is not a funct`

distinct messages:
- `TypeError: res._send is not a function
    at EventEmitter.handler (test-http-1.0.js:94:31)
    at EventEmitter.emit (native)
    at Duplex.push (native)
TypeError: res._send is not a function
    at EventEmitter.handler (test-http-1.0.js:130:31)
    at EventEmitter.emit (native)
    at Duplex.push `
example test: `test/parallel/test-http-1.0.js`

### 1 × `TypeError: Right-hand-side of instanceof is not an object at assertDir (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: Right-hand-side of instanceof is not an object
    at assertDir (test-fs-opendir.js:30:10)
    at :anonymous (test-fs-opendir.js:63:3)
    at :program (test-fs-opendir.js:1:1)`
example test: `test/parallel/test-fs-opendir.js`

### 1 × `TypeError: sock.bindSync is not a function at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: sock.bindSync is not a function
    at :anonymous (test-dgram-bind-sync.js:10:16)
    at :program (test-dgram-bind-sync.js:1:1)`
example test: `test/parallel/test-dgram-bind-sync.js`

### 1 × `TypeError: sock.connectSync is not a function at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: sock.connectSync is not a function
    at :anonymous (test-dgram-connect-sync.js:11:3)
    at :program (test-dgram-connect-sync.js:1:1)`
example test: `test/parallel/test-dgram-connect-sync.js`

### 1 × `TypeError: The <str> argument must be an Array at :=> (<loc>) at _return (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: The "args" argument must be an Array
    at :=> (test-child-process-spawnsync-args.js:36:37)
    at _return (index.js:573:12)
    at :anonymous (test-child-process-spawnsync-args.js:35:17)
    at :program (test-child-process-spawnsync-args.js:1:1)`
example test: `test/parallel/test-child-process-spawnsync-args.js`

### 1 × `TypeError: The <str> argument must be an instance of Iterable. Received object at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: The "iterable" argument must be an instance of Iterable. Received object
    at :anonymous (test-stream-pipeline-uncaught.js:18:1)
    at :program (test-stream-pipeline-uncaught.js:1:1)`
example test: `test/parallel/test-stream-pipeline-uncaught.js`

### 1 × `TypeError: The <str> argument must be an instance of Stream. Received object at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: The "stream" argument must be an instance of Stream. Received object
    at :anonymous (test-webstreams-abort-controller.js:34:3)
    at :program (test-webstreams-abort-controller.js:1:1)`
example test: `test/parallel/test-webstreams-abort-controller.js`

### 1 × `TypeError: The <str> argument must be an object. Received type symbol at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: The "contextObject" argument must be an object. Received type symbol
    at :anonymous (test-vm-context-dont-contextify.js:13:19)
    at :program (test-vm-context-dont-contextify.js:1:1)`
example test: `test/parallel/test-vm-context-dont-contextify.js`

### 1 × `TypeError: The <str> argument must be one of type string or function. Received (<n>)[<n>, <n>, <n>, <n>, <n>, <n>, <n>, <n>, <n>, <n>, <n>, <n>, <n>, <n>, <n>, `

distinct messages:
- `TypeError: The "message" argument must be one of type string or function. Received (22)[5193, 5193, 5193, 5193, 5193, 5193, 5193, 5193, 5193, 5193, 5193, 5193, 5193, 5193, 5193, 5193, 5193, 5193, 5193, 5193, ...]
    at :anonymous (test-zlib-zstd.js:30:3)
    at :program (test-zlib-zstd.js:1:1)`
example test: `test/parallel/test-zlib-zstd.js`

### 1 × `TypeError: The <str> argument must be one of type string or function. Received (<n>)[<n>, <n>, <n>, <n>, <n>, <n>, <n>, <n>, <n>, <n>, <n>, <n>] at :anonymous (`

distinct messages:
- `TypeError: The "message" argument must be one of type string or function. Received (12)[4842, 4842, 4842, 4842, 4842, 4842, 4842, 4842, 4842, 4842, 4842, 4842]
    at :anonymous (test-zlib-brotli.js:30:3)
    at :program (test-zlib-brotli.js:1:1)`
example test: `test/parallel/test-zlib-brotli.js`

### 1 × `TypeError: The argument <str> must have the property <str> or <str>. Received {} at :=> (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: The argument 'options' must have the property "port" or "path". Received {}
    at :=> (test-net-server-listen-options.js:22:17)
    at :anonymous (test-net-server-listen-options.js:38:5)
    at :program (test-net-server-listen-options.js:1:1)`
example test: `test/parallel/test-net-server-listen-options.js`

### 1 × `TypeError: The first argument must be of type string or an instance of Buffer, ArrayBuffer, or Array or an Array-like Object. Received undefined at :anonymous (`

distinct messages:
- `TypeError: The first argument must be of type string or an instance of Buffer, ArrayBuffer, or Array or an Array-like Object. Received undefined
    at :anonymous (test-buffer-parent-property.js:14:8)
    at :program (test-buffer-parent-property.js:1:1)`
example test: `test/parallel/test-buffer-parent-property.js`

### 1 × `TypeError: This handle type cannot be sent at Duplex.s (<loc>) at Duplex.emit (native)`

distinct messages:
- `TypeError: This handle type cannot be sent
    at Duplex.s (test-child-process-fork-closed-channel-segfault.js:46:16)
    at Duplex.emit (native)`
example test: `test/parallel/test-child-process-fork-closed-channel-segfault.js`

### 1 × `TypeError: This handle type cannot be sent at EventEmitter.<anonymous> (<loc>) at EventEmitter._return (<loc>) at EventEmitter.emit (native) AssertionError: Exp`

distinct messages:
- `TypeError: This handle type cannot be sent
    at EventEmitter.<anonymous> (test-child-process-send-keep-open.js:35:11)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)
AssertionError: Expected values to be stri`
example test: `test/parallel/test-child-process-send-keep-open.js`

### 1 × `TypeError: This handle type cannot be sent at EventEmitter.<anonymous> (<loc>) at EventEmitter._return (<loc>) at EventEmitter.emit (native) TypeError: This han`

distinct messages:
- `TypeError: This handle type cannot be sent
    at EventEmitter.<anonymous> (test-child-process-fork-getconnections.js:71:11)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)
TypeError: This handle type cannot be`
example test: `test/parallel/test-child-process-fork-getconnections.js`

### 1 × `TypeError: This handle type cannot be sent at EventEmitter.<anonymous> (<loc>) at EventEmitter.emit (native) AssertionError: The expression evaluated to a falsy`

distinct messages:
- `TypeError: This handle type cannot be sent
    at EventEmitter.<anonymous> (test-child-process-fork-dgram.js:68:11)
    at EventEmitter.emit (native)
AssertionError: The expression evaluated to a falsy value:

  assert(parentGotMessage)

    at process.<anonymous> (test-child-process-fork-dgram.js:1`
example test: `test/parallel/test-child-process-fork-dgram.js`

### 1 × `TypeError: This handle type cannot be sent at EventEmitter.<anonymous> (<loc>) at EventEmitter.emit (native) TypeError: This handle type cannot be sent at Event`

distinct messages:
- `TypeError: This handle type cannot be sent
    at EventEmitter.<anonymous> (test-child-process-fork-net.js:103:16)
    at EventEmitter.emit (native)
TypeError: This handle type cannot be sent
    at EventEmitter.<anonymous> (test-child-process-fork-net.js:103:16)
    at EventEmitter.emit (native)
Ty`
example test: `test/parallel/test-child-process-fork-net.js`

### 1 × `TypeError: transform[(intermediate value).asyncDispose] is not a function at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: transform[(intermediate value).asyncDispose] is not a function
    at :anonymous (test-stream-transform-destroy.js:153:3)
    at :program (test-stream-transform-destroy.js:1:1)`
example test: `test/parallel/test-stream-transform-destroy.js`

### 1 × `TypeError: URLSearchParams init must be a string, sequence of pairs, or record at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: URLSearchParams init must be a string, sequence of pairs, or record
    at :anonymous (test-whatwg-url-custom-searchparams-constructor.js:33:12)
    at :program (test-whatwg-url-custom-searchparams-constructor.js:1:1)`
example test: `test/parallel/test-whatwg-url-custom-searchparams-constructor.js`

### 1 × `TypeError: v8.getHeapSnapshot is not a function at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: v8.getHeapSnapshot is not a function
    at :anonymous (test-v8-getheapsnapshot-twice.js:8:1)
    at :program (test-v8-getheapsnapshot-twice.js:1:1)`
example test: `test/parallel/test-v8-getheapsnapshot-twice.js`

### 1 × `TypeError: v8.startCpuProfile is not a function at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: v8.startCpuProfile is not a function
    at :anonymous (test-v8-cpu-profile.js:8:18)
    at :program (test-v8-cpu-profile.js:1:1)`
example test: `test/parallel/test-v8-cpu-profile.js`

### 1 × `TypeError: zipper._processChunk is not a function at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: zipper._processChunk is not a function
    at :anonymous (test-zlib-sync-no-event.js:12:16)
    at :program (test-zlib-sync-no-event.js:1:1)`
example test: `test/parallel/test-zlib-sync-no-event.js`

### 1 × `Uncaught (in promise) AssertionError: Expected <str> to be reference-equal to <str>: + actual - expected + [AssertionError: Expected values to be strictly equal`

distinct messages:
- `Uncaught (in promise) AssertionError: Expected "actual" to be reference-equal to "expected":
+ actual - expected

+ [AssertionError: Expected values to be strictly equal:
+ + actual - expected
+ 
+ + 'hello'
+ - 'helloworld'
+ ] {
+   actual: 'hello',
+   expected: 'helloworld',
+   generatedMessage`
example test: `test/parallel/test-stream-pipeline-async-iterator.js`

### 1 × `Uncaught (in promise) AssertionError: Expected values to be strictly deep-equal: + actual - expected + [ + <n> + ] - [] Uncaught (in promise) AssertionError: Ex`

distinct messages:
- `Uncaught (in promise) AssertionError: Expected values to be strictly deep-equal:
+ actual - expected

+ [
+   2
+ ]
- []

Uncaught (in promise) AssertionError: Expected values to be strictly deep-equal:
+ actual - expected

+ Set(0) {}
- Set(1) {
-   [
-     {
-       name: 'init',
-       resource:`
example test: `test/parallel/test-eventemitter-asyncresource.js`

### 1 × `Uncaught (in promise) AssertionError: Expected values to be strictly deep-equal: + actual - expected + [] - [ - { - name: <str>, - parentURL: <str>, - url: <str`

distinct messages:
- `Uncaught (in promise) AssertionError: Expected values to be strictly deep-equal:
+ actual - expected

+ []
- [
-   {
-     name: 'start',
-     parentURL: 'file:///work/.harness/work/node-api/node-api-overlay/test/parallel/test-diagnostics-channel-module-import.js',
-     url: 'http'
-   },
-   {
- `
example test: `test/parallel/test-diagnostics-channel-module-import.js`

### 1 × `Uncaught (in promise) AssertionError: Expected values to be strictly deep-equal: + actual - expected + [] - [ - <str> - ]`

distinct messages:
- `Uncaught (in promise) AssertionError: Expected values to be strictly deep-equal:
+ actual - expected

+ []
- [
-   'foo'
- ]`
example test: `test/parallel/test-vm-module-link.js`

### 1 × `Uncaught (in promise) AssertionError: Expected values to be strictly deep-equal: + actual - expected + undefined - { - foo: <str> - }`

distinct messages:
- `Uncaught (in promise) AssertionError: Expected values to be strictly deep-equal:
+ actual - expected

+ undefined
- {
-   foo: 'bar'
- }`
example test: `test/parallel/test-diagnostics-channel-tracing-channel-promise-run-stores.js`

### 1 × `Uncaught (in promise) AssertionError: Expected values to be strictly deep-equal: + actual - expected Comparison { - cause: [DOMException [AbortError]: This oper`

distinct messages:
- `Uncaught (in promise) AssertionError: Expected values to be strictly deep-equal:
+ actual - expected

  Comparison {
-   cause: [DOMException [AbortError]: This operation was aborted],
    name: 'AbortError'
  }

Uncaught (in promise) AssertionError: Expected values to be strictly deep-equal:
+ actu`
example test: `test/parallel/test-child-process-exec-abortcontroller-promisified.js`

### 1 × `Uncaught (in promise) AssertionError: Expected values to be strictly deep-equal: + actual - expected Comparison { - code: <str>, name: <str> } Uncaught (in prom`

distinct messages:
- `Uncaught (in promise) AssertionError: Expected values to be strictly deep-equal:
+ actual - expected

  Comparison {
-   code: 'ERR_INVALID_STATE',
    name: 'TypeError'
  }

Uncaught (in promise) AssertionError: Expected values to be strictly deep-equal:
+ actual - expected

  Comparison {
-   code`
example test: `test/parallel/test-whatwg-readablebytestream-bad-buffers-and-views.js`

### 1 × `Uncaught (in promise) AssertionError: Expected values to be strictly deep-equal: + actual - expected Comparison { + code: <n>, - code: <str>, message: <str> } U`

distinct messages:
- `Uncaught (in promise) AssertionError: Expected values to be strictly deep-equal:
+ actual - expected

  Comparison {
+   code: 20,
-   code: 'ABORT_ERR',
    message: 'The operation was aborted'
  }

Uncaught (in promise) AssertionError: Expected values to be strictly deep-equal:
+ actual - expected`
example test: `test/parallel/test-timers-promises-scheduler.js`

### 1 × `Uncaught (in promise) AssertionError: Expected values to be strictly deep-equal: + actual - expected Comparison { + code: <str>, - code: <str>, name: <str> }`

distinct messages:
- `Uncaught (in promise) AssertionError: Expected values to be strictly deep-equal:
+ actual - expected

  Comparison {
+   code: 'Z_DATA_ERROR',
-   code: 'ERR__ERROR_FORMAT_PADDING_2',
    name: 'Error'
  }`
example test: `test/parallel/test-stream-iter-transform-errors.js`

### 1 × `Uncaught (in promise) AssertionError: Expected values to be strictly deep-equal: + actual - expected Comparison { + name: <str> - name: <str> }`

distinct messages:
- `Uncaught (in promise) AssertionError: Expected values to be strictly deep-equal:
+ actual - expected

  Comparison {
+   name: 'TypeError'
-   name: 'AbortError'
  }`
example test: `test/parallel/test-fs-promises-file-handle-writeFile.js`

### 1 × `Uncaught (in promise) AssertionError: Expected values to be strictly deep-equal: + actual - expected Comparison { + name: <str> - name: <str> } AssertionError: `

distinct messages:
- `Uncaught (in promise) AssertionError: Expected values to be strictly deep-equal:
+ actual - expected

  Comparison {
+   name: 'TypeError'
-   name: 'AbortError'
  }

AssertionError: Expected values to be strictly equal:

1 !== 2

    at Immediate.<anonymous> (test-stream-filter.js:137:12)
    at Im`
example test: `test/parallel/test-stream-filter.js`

### 1 × `Uncaught (in promise) AssertionError: Expected values to be strictly deep-equal: + actual - expected Comparison { code: <str>, message: <str>, name: <str>, + st`

distinct messages:
- `Uncaught (in promise) AssertionError: Expected values to be strictly deep-equal:
+ actual - expected

  Comparison {
    code: 'ENOENT',
    message: "ENOENT: no such file or directory, access 'this file does not exist'",
    name: 'Error',
+   stack: "Error: ENOENT: no such file or directory, acces`
example test: `test/parallel/test-fs-promises.js`

### 1 × `Uncaught (in promise) AssertionError: Expected values to be strictly equal: + actual - expected + <str> - <str> AssertionError: Missing expected exception. at :`

distinct messages:
- `Uncaught (in promise) AssertionError: Expected values to be strictly equal:
+ actual - expected

+ 'undefined'
- 'object'

AssertionError: Missing expected exception.
    at :anonymous (test-vm-measure-memory.js:26:3)
    at :program (test-vm-measure-memory.js:1:1)`
example test: `test/parallel/test-vm-measure-memory.js`

### 1 × `Uncaught (in promise) AssertionError: Expected values to be strictly equal: + actual - expected + <str> - undefined`

distinct messages:
- `Uncaught (in promise) AssertionError: Expected values to be strictly equal:
+ actual - expected

+ 'inside then'
- undefined`
example test: `test/parallel/test-async-local-storage-enter-with.js`

### 1 × `Uncaught (in promise) AssertionError: Expected values to be strictly equal: + actual - expected + undefined - <str>`

distinct messages:
- `Uncaught (in promise) AssertionError: Expected values to be strictly equal:
+ actual - expected

+ undefined
- 'ERR_VM_DYNAMIC_IMPORT_CALLBACK_MISSING'`
example test: `test/parallel/test-vm-module-dynamic-import.js`

### 1 × `Uncaught (in promise) AssertionError: Expected values to be strictly equal: <n> !== -<n>`

distinct messages:
- `Uncaught (in promise) AssertionError: Expected values to be strictly equal:

3 !== -1`
example test: `test/parallel/test-fs-filehandle-use-after-close.js`

### 1 × `Uncaught (in promise) AssertionError: Expected values to be strictly equal: <n> !== -<n> Uncaught (in promise) TypeError: dh[(intermediate value).asyncDispose] `

distinct messages:
- `Uncaught (in promise) AssertionError: Expected values to be strictly equal:

4 !== -1

Uncaught (in promise) TypeError: dh[(intermediate value).asyncDispose] is not a function`
example test: `test/parallel/test-fs-promises-file-handle-dispose.js`

### 1 × `Uncaught (in promise) AssertionError: Expected values to be strictly equal: <n> !== <n>`

distinct messages:
- `Uncaught (in promise) AssertionError: Expected values to be strictly equal:

2 !== 1`
example test: `test/parallel/test-vm-module-reevaluate.js`

### 1 × `Uncaught (in promise) AssertionError: Expected values to be strictly equal: <n> !== <n> Uncaught (in promise) AssertionError: Expected values to be strictly equ`

distinct messages:
- `Uncaught (in promise) AssertionError: Expected values to be strictly equal:

0 !== 42

Uncaught (in promise) AssertionError: Expected values to be strictly equal:

13 !== 42

Uncaught (in promise) AssertionError: Expected values to be strictly equal:

42 !== 0

Uncaught (in promise) AssertionError: `
example test: `test/parallel/test-zlib-zstd-pledged-src-size.js`

### 1 × `Uncaught (in promise) AssertionError: Missing expected exception (Error). Uncaught (in promise) AssertionError: Missing expected exception (TypeError). Assertio`

distinct messages:
- `Uncaught (in promise) AssertionError: Missing expected exception (Error).
Uncaught (in promise) AssertionError: Missing expected exception (TypeError).
AssertionError: Expected values to be strictly equal:
+ actual - expected

+ 'Error'
- 'AbortError'

    at Readable.<anonymous> (test-fs-read-strea`
example test: `test/parallel/test-fs-read-stream-file-handle.js`

### 1 × `Uncaught (in promise) AssertionError: Missing expected exception. Uncaught (in promise) AssertionError: Missing expected exception. [EventLoop] external task th`

distinct messages:
- `Uncaught (in promise) AssertionError: Missing expected exception.
Uncaught (in promise) AssertionError: Missing expected exception.
[EventLoop] external task threw: com.oracle.truffle.js.runtime.builtins.JSDataViewObject cannot be cast to com.oracle.truffle.js.runtime.builtins.JSTypedArrayObject
jav`
example test: `test/parallel/test-filehandle-readablestream.js`

### 1 × `Uncaught (in promise) AssertionError: Missing expected rejection (AbortError).`

distinct messages:
- `Uncaught (in promise) AssertionError: Missing expected rejection (AbortError).`
example test: `test/parallel/test-fs-promises-file-handle-readFile.js`

### 1 × `Uncaught (in promise) AssertionError: Missing expected rejection. TypeError: The <str> argument must be of type string or an instance of Buffer, TypedArray, or `

distinct messages:
- `Uncaught (in promise) AssertionError: Missing expected rejection.
TypeError: The "chunk" argument must be of type string or an instance of Buffer, TypedArray, or DataView. Received an instance of Object`
example test: `test/parallel/test-stream-pipe-objectmode-to-non-objectmode.js`

### 1 × `Uncaught (in promise) AssertionError: The <str> validation function is expected to return <str>. Received false Caught error: AssertionError: Got rejection that`

distinct messages:
- `Uncaught (in promise) AssertionError: The "bound " validation function is expected to return "true". Received false

Caught error:

AssertionError: Got rejection that did not match expected: null`
example test: `test/parallel/test-assert-async.js`

### 1 × `Uncaught (in promise) AssertionError: The expression evaluated to a falsy value: assert(!fs.existsSync(fullSecondPath))`

distinct messages:
- `Uncaught (in promise) AssertionError: The expression evaluated to a falsy value:

  assert(!fs.existsSync(fullSecondPath))`
example test: `test/parallel/test-fs-promises-mkdtempDisposable.js`

### 1 × `Uncaught (in promise) AssertionError: The input did not match the regular expression /Cannot find module/. Input: <str>`

distinct messages:
- `Uncaught (in promise) AssertionError: The input did not match the regular expression /Cannot find module/. Input:

''`
example test: `test/parallel/test-stream-iter-disabled.js`

### 1 × `Uncaught (in promise) AssertionError: The validation function is expected to return <str>. Received false Caught error: TypeError: Module not found: <str>`

distinct messages:
- `Uncaught (in promise) AssertionError: The validation function is expected to return "true". Received false

Caught error:

TypeError: Module not found: 'does-not-exist'`
example test: `test/parallel/test-diagnostics-channel-module-import-error.js`

### 1 × `Uncaught (in promise) AssertionError: w1stack = <n>, w2stack = <n> are too far apart`

distinct messages:
- `Uncaught (in promise) AssertionError: w1stack = 0, w2stack = 0 are too far apart`
example test: `test/parallel/test-worker-stack-overflow-stack-size.js`

### 1 × `Uncaught (in promise) Error: boom Uncaught (in promise) TypeError: Cannot read property <str> of null`

distinct messages:
- `Uncaught (in promise) Error: boom
Uncaught (in promise) TypeError: Cannot read property 'signal' of null`
example test: `test/parallel/test-events-once.js`

### 1 × `Uncaught (in promise) Error: escaped timeout at <n> milliseconds! AssertionError: Expected values to be strictly deep-equal: + actual - expected Comparison { + `

distinct messages:
- `Uncaught (in promise) Error: escaped timeout at 2000 milliseconds!
AssertionError: Expected values to be strictly deep-equal: + actual - expected    Comparison { +   message: 'escaped timeout at 2001 milliseconds!' -   code: 'ERR_SCRIPT_EXECUTION_TIMEOUT', -   message: 'Script execution timed out af`
example test: `test/parallel/test-vm-timeout-escape-promise.js`

### 1 × `Uncaught (in promise) Error: escaped timeout at <n> milliseconds! AssertionError: Missing expected exception. at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `Uncaught (in promise) Error: escaped timeout at 2000 milliseconds!
AssertionError: Missing expected exception.
    at :anonymous (test-vm-timeout-escape-promise-2.js:26:1)
    at :program (test-vm-timeout-escape-promise-2.js:1:1)`
example test: `test/parallel/test-vm-timeout-escape-promise-2.js`

### 1 × `Uncaught (in promise) Error: foo Uncaught (in promise) AssertionError: Expected values to be strictly equal: + actual - expected + null - Domain [EventEmitter] `

distinct messages:
- `Uncaught (in promise) Error: foo
Uncaught (in promise) AssertionError: Expected values to be strictly equal:
+ actual - expected

+ null
- Domain [EventEmitter] {
-   _disposed: false,
-   members: []
- }

Uncaught (in promise) AssertionError: Expected values to be strictly equal:
+ actual - expecte`
example test: `test/parallel/test-domain-promise.js`

### 1 × `Uncaught (in promise) Error: native decompress_finish rejected the input as malformed`

distinct messages:
- `Uncaught (in promise) Error: native decompress_finish rejected the input as malformed`
example test: `test/parallel/test-zlib-reject-garbage-after-end.js`

### 1 × `Uncaught (in promise) Error: node:worker_threads: postMessageToThread is not implemented yet in Elide`

distinct messages:
- `Uncaught (in promise) Error: node:worker_threads: postMessageToThread is not implemented yet in Elide`
example test: `test/parallel/test-worker-messaging.js`

### 1 × `Uncaught (in promise) Error: node:worker_threads: postMessageToThread is not implemented yet in Elide TypeError: Cannot execute on non-shared array.`

distinct messages:
- `Uncaught (in promise) Error: node:worker_threads: postMessageToThread is not implemented yet in Elide
TypeError: Cannot execute on non-shared array.`
example test: `test/parallel/test-worker-messaging-errors-timeout.js`

### 1 × `Uncaught (in promise) Error: Test minor gc event failed`

distinct messages:
- `Uncaught (in promise) Error: Test minor gc event failed`
example test: `test/parallel/test-performance-gc-minor-ms.js`

### 1 × `Uncaught (in promise) Object{}`

distinct messages:
- `Uncaught (in promise) Object{}`
example test: `test/parallel/test-fs-promises-file-handle-read-worker.js`

### 1 × `Uncaught (in promise) Object{} Uncaught (in promise) Object{} Uncaught (in promise) Error: node:worker_threads: moveMessagePortToContext is not implemented yet `

distinct messages:
- `Uncaught (in promise) Object{}
Uncaught (in promise) Object{}
Uncaught (in promise) Error: node:worker_threads: moveMessagePortToContext is not implemented yet in Elide
Uncaught (in promise) AssertionError: Expected values to be strictly deep-equal:
+ actual - expected

  Comparison {
+   message: '`
example test: `test/parallel/test-worker-message-port-transfer-filehandle.js`

### 1 × `Uncaught (in promise) ReferenceError: inner is not defined Uncaught (in promise) ReferenceError: inner is not defined`

distinct messages:
- `Uncaught (in promise) ReferenceError: inner is not defined
Uncaught (in promise) ReferenceError: inner is not defined`
example test: `test/parallel/test-vm-module-after-evaluate.js`

### 1 × `Uncaught (in promise) ReferenceError: loop is not defined Uncaught (in promise) AssertionError: Expected values to be strictly deep-equal: + actual - expected C`

distinct messages:
- `Uncaught (in promise) ReferenceError: loop is not defined
Uncaught (in promise) AssertionError: Expected values to be strictly deep-equal:
+ actual - expected

  Comparison {
+   message: 'loop is not defined'
-   code: 'ERR_SCRIPT_EXECUTION_TIMEOUT',
-   message: 'Script execution timed out after 5`
example test: `test/parallel/test-vm-timeout-escape-promise-module.js`

### 1 × `Uncaught (in promise) SyntaxError: <eval><loc> Cannot use import.meta outside a module globalThis.importMeta = import.meta; ^`

distinct messages:
- `Uncaught (in promise) SyntaxError: <eval>:1:24 Cannot use import.meta outside a module
globalThis.importMeta = import.meta;
                        ^`
example test: `test/parallel/test-vm-module-import-meta.js`

### 1 × `Uncaught (in promise) SyntaxError: <eval><loc> Expected an operand but found import import { x } from <str>; ^`

distinct messages:
- `Uncaught (in promise) SyntaxError: <eval>:2:4 Expected an operand but found import
    import { x } from 'synthetic';
    ^`
example test: `test/parallel/test-vm-module-synthetic.js`

### 1 × `Uncaught (in promise) SyntaxError: <eval><loc> Expected an operand but found import import foo from <str>; ^`

distinct messages:
- `Uncaught (in promise) SyntaxError: <eval>:2:8 Expected an operand but found import
        import foo from "./foo.js";
        ^`
example test: `test/parallel/test-vm-module-link-shared-deps.js`

### 1 × `Uncaught (in promise) SyntaxError: Variable <str> has already been declared`

distinct messages:
- `Uncaught (in promise) SyntaxError: Variable "__filename" has already been declared`
example test: `test/parallel/test-worker-track-unmanaged-fds.js`

### 1 × `Uncaught (in promise) true`

distinct messages:
- `Uncaught (in promise) true`
example test: `test/parallel/test-fs-promisified.js`

### 1 × `Uncaught (in promise) TypeError: CompressionStream: chunk is not a BufferSource Uncaught (in promise) AssertionError: Expected values to be strictly deep-equal:`

distinct messages:
- `Uncaught (in promise) TypeError: CompressionStream: chunk is not a BufferSource
Uncaught (in promise) AssertionError: Expected values to be strictly deep-equal:
+ actual - expected

  Comparison {
-   code: 'ERR_INVALID_ARG_TYPE',
    name: 'TypeError'
  }

Uncaught (in promise) AssertionError: Expe`
example test: `test/parallel/test-webstreams-compression-bad-chunks.js`

### 1 × `Uncaught (in promise) TypeError: fh.pull is not a function`

distinct messages:
- `Uncaught (in promise) TypeError: fh.pull is not a function`
example test: `test/parallel/test-fs-promises-file-handle-pull.js`

### 1 × `Uncaught (in promise) TypeError: fh.pullSync is not a function`

distinct messages:
- `Uncaught (in promise) TypeError: fh.pullSync is not a function`
example test: `test/parallel/test-fs-promises-file-handle-pullsync.js`

### 1 × `Uncaught (in promise) TypeError: fh.writer is not a function`

distinct messages:
- `Uncaught (in promise) TypeError: fh.writer is not a function`
example test: `test/parallel/test-fs-promises-file-handle-writer.js`

### 1 × `Uncaught (in promise) TypeError: flags must be a string or number`

distinct messages:
- `Uncaught (in promise) TypeError: flags must be a string or number`
example test: `test/parallel/test-fs-promises-writefile.js`

### 1 × `Uncaught (in promise) TypeError: GCProfiler is not a constructor TypeError: (intermediate value).gc is not a function`

distinct messages:
- `Uncaught (in promise) TypeError: GCProfiler is not a constructor
TypeError: (intermediate value).gc is not a function`
example test: `test/parallel/test-v8-collect-gc-profile-in-worker.js`

### 1 × `Uncaught (in promise) TypeError: Invalid module specifier: <str>`

distinct messages:
- `Uncaught (in promise) TypeError: Invalid module specifier: ''`
example test: `test/parallel/test-vm-module-dynamic-namespace.js`

### 1 × `Uncaught (in promise) TypeError: Module not found: <str>`

distinct messages:
- `Uncaught (in promise) TypeError: Module not found: 'mod1'`
example test: `test/parallel/test-vm-module-dynamic-import-promise.js`

### 1 × `Uncaught (in promise) TypeError: openAsBlob is not a function Uncaught (in promise) TypeError: openAsBlob is not a function Uncaught (in promise) TypeError: ope`

distinct messages:
- `Uncaught (in promise) TypeError: openAsBlob is not a function
Uncaught (in promise) TypeError: openAsBlob is not a function
Uncaught (in promise) TypeError: openAsBlob is not a function
Uncaught (in promise) TypeError: openAsBlob is not a function
Uncaught (in promise) TypeError: openAsBlob is not a`
example test: `test/parallel/test-blob-file-backed.js`

### 1 × `Uncaught (in promise) TypeError: pipeline: every link must be a Readable on the left and a Writable on the right`

distinct messages:
- `Uncaught (in promise) TypeError: pipeline: every link must be a Readable on the left and a Writable on the right`
example test: `test/parallel/test-stream3-pipeline-async-iterator.js`

### 1 × `Uncaught (in promise) TypeError: queryObjects is not a function`

distinct messages:
- `Uncaught (in promise) TypeError: queryObjects is not a function`
example test: `test/parallel/test-diagnostics-channel-memory-leak.js`

### 1 × `Uncaught (in promise) TypeError: receiver is not an EventEmitter`

distinct messages:
- `Uncaught (in promise) TypeError: receiver is not an EventEmitter`
example test: `test/parallel/test-eventtarget-once-twice.js`

### 1 × `Uncaught (in promise) TypeError: The <str> argument must be of type function. Received number Uncaught (in promise) TypeError: The <str> argument must be of typ`

distinct messages:
- `Uncaught (in promise) TypeError: The "fn" argument must be of type function. Received number
Uncaught (in promise) TypeError: The "fn" argument must be of type function. Received string
Uncaught (in promise) AssertionError: Missing expected rejection.
Uncaught (in promise) AssertionError: Missing ex`
example test: `test/parallel/test-stream-reduce.js`

### 1 × `Uncaught (in promise) TypeError: The <str> argument must be of type number. Received type string (<str>) Uncaught (in promise) AssertionError: Missing expected `

distinct messages:
- `Uncaught (in promise) TypeError: The "number" argument must be of type number. Received type string ('cat')
Uncaught (in promise) AssertionError: Missing expected rejection (AbortError).
Uncaught (in promise) AssertionError: Missing expected rejection (AbortError).
Uncaught (in promise) AssertionErr`
example test: `test/parallel/test-stream-drop-take.js`

### 1 × `Uncaught (in promise) TypeError: The <str> argument must be of type string or an instance of Buffer or URL. Received an instance of Object`

distinct messages:
- `Uncaught (in promise) TypeError: The "path" argument must be of type string or an instance of Buffer or URL. Received an instance of Object`
example test: `test/parallel/test-fs-append-file.js`

### 1 × `Uncaught (in promise) TypeError: The <str> argument must be of type string or an instance of Buffer, TypedArray, or DataView. Received an instance of ArrayBuffe`

distinct messages:
- `Uncaught (in promise) TypeError: The "chunk" argument must be of type string or an instance of Buffer, TypedArray, or DataView. Received an instance of ArrayBuffer`
example test: `test/parallel/test-webstreams-adapters-writable-buffer-sources.js`

### 1 × `Uncaught (in promise) TypeError: The <str> argument must be of type string or an instance of Buffer, TypedArray, or DataView. Received type number (<n>) Uncaugh`

distinct messages:
- `Uncaught (in promise) TypeError: The "chunk" argument must be of type string or an instance of Buffer, TypedArray, or DataView. Received type number (2)
Uncaught (in promise) TypeError: The "chunk" argument must be of type string or an instance of Buffer, TypedArray, or DataView. Received type numbe`
example test: `test/parallel/test-stream-map.js`

### 1 × `Uncaught JSException in event listener: AssertionError: Expected values to be strictly equal: + actual - expected + <str> - <str> AssertionError: Expected value`

distinct messages:
- `Uncaught JSException in event listener: AssertionError: Expected values to be strictly equal:
+ actual - expected

+ 'undefined'
- 'number'

AssertionError: Expected values to be strictly deep-equal:
+ actual - expected

  Comparison {
+   code: 'ERR_INVALID_ARG_TYPE'
-   code: 'EBADF'
  }

    at E`
example test: `test/parallel/test-worker-cleanup-handles.js`

### 1 × `Uncaught JSException in event listener: AssertionError: function should not have been called at <loc> called with arguments: { hello: <str> } AssertionError: Ex`

distinct messages:
- `Uncaught JSException in event listener: AssertionError: function should not have been called at test-worker-message-port-receive-message.js:22
called with arguments: { hello: 'world' }
AssertionError: Expected values to be strictly deep-equal: + actual - expected  + undefined - { -   message: { -   `
example test: `test/parallel/test-worker-message-port-receive-message.js`

### 1 × `Uncaught JSException in event listener: AssertionError: Missing expected exception. AssertionError: The validation function is expected to return <str>. Receive`

distinct messages:
- `Uncaught JSException in event listener: AssertionError: Missing expected exception.
AssertionError: The validation function is expected to return "true". Received false  Caught error:  DataCloneError: An ArrayBuffer could not be cloned because it was detached
    at testSingle (test-worker-message-p`
example test: `test/parallel/test-worker-message-port-transfer-closed.js`

### 1 × `Uncaught JSException in event listener: RangeError: Maximum call stack size exceeded Uncaught JSException in event listener: RangeError: Maximum call stack size`

distinct messages:
- `Uncaught JSException in event listener: RangeError: Maximum call stack size exceeded
Uncaught JSException in event listener: RangeError: Maximum call stack size exceeded
Uncaught JSException in event listener: RangeError: Maximum call stack size exceeded
Uncaught IndexOutOfBoundsException in event l`
example test: `test/parallel/test-whatwg-events-add-event-listener-options-signal.js`

### 1 × `Uncaught JSException in event listener: TypeError: Cannot read property <str> of undefined Uncaught JSException in event listener: AssertionError: Expected valu`

distinct messages:
- `Uncaught JSException in event listener: TypeError: Cannot read property 'name' of undefined
Uncaught JSException in event listener: AssertionError: Expected values to be strictly equal:
+ actual - expected

+ undefined
- 'boom'

TypeError: Cannot read property 'name' of undefined
    at EventEmitter`
example test: `test/parallel/test-child-process-spawn-controller.js`

## By feature

| count | feature |
|---:|---|
| 148 | node:http |
| 83 | node:streams |
| 77 | node:fs |
| 73 | node:worker-threads |
| 60 | node:vm |
| 54 | node:process |
| 50 | node:net |
| 47 | node:child-process |
| 38 | node:module-loading |
| 31 | node:zlib |
| 26 | node:async-hooks |
| 24 | node:dgram |
| 23 | node:buffer |
| 21 | node:domain |
| 21 | node:web-globals |
| 17 | node:dns |
| 16 | node:url |
| 14 | node:diagnostics-channel |
| 13 | node:v8 |
| 12 | node:events |
| 12 | node:perf-hooks |
| 12 | node:util |
| 11 | node:console |
| 11 | node:readline |
| 8 | node:timers |
| 6 | node:assert |
| 3 | node:intl |
| 3 | node:os |
| 3 | node:querystring |
| 1 | node:path |
| 1 | node:tty |
