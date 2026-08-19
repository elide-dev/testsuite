# Impact-ordered failures

## By root-cause signature

### 81 × `Node API test timed out`

distinct messages:
- `Node API test timed out`
example test: `test/parallel/test-async-hooks-execution-async-resource-await.js`

### 16 × `Mismatched <anonymous> function calls. Expected exactly <n>, actual <n>. at Proxy.mustCall (<loc>) at <loc> at <loc>`

distinct messages:
- `Mismatched <anonymous> function calls. Expected exactly 1, actual 0.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at test-diagnostics-channel-tracing-channel-promise-unhandled.js:13:41
    at test-diagnostics-channel-tracing-channel-promise-un`
- `Mismatched <anonymous> function calls. Expected exactly 1, actual 0.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at test-diagnostics-channel-worker-threads.js:7:39
    at test-diagnostics-channel-worker-threads.js:1:1`
- `Mismatched <anonymous> function calls. Expected exactly 1, actual 0.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at test-dgram-custom-lookup.js:24:23
    at test-dgram-custom-lookup.js:1:1`
- `Mismatched <anonymous> function calls. Expected exactly 2, actual 1.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at test-http-outgoing-message-inheritance.js:21:17
    at test-http-outgoing-message-inheritance.js:1:1`
- `Mismatched <anonymous> function calls. Expected exactly 1, actual 2.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at test-http-parser-freed-during-execute.js:9:36
    at test-http-parser-freed-during-execute.js:1:1`
example test: `test/parallel/test-diagnostics-channel-tracing-channel-promise-unhandled.js`

### 12 × `AssertionError: Expected values to be strictly equal: + actual - expected + <str> - <str> at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Expected values to be strictly equal: + actual - expected  + '/opt/elide/bin/elide' - 'withArgv0'
    at :anonymous (test-child-process-spawn-argv0.js:18:1)
    at :program (test-child-process-spawn-argv0.js:1:1)`
- `AssertionError: Expected values to be strictly equal: + actual - expected  + 'undefined' - 'function'
    at :anonymous (test-eventsource.js:7:1)
    at :program (test-eventsource.js:1:1)`
- `AssertionError: Expected values to be strictly equal: + actual - expected  + 'localhost::' - 'localhost:8080:127.0.0.1'
    at :anonymous (test-http-addrequest-localaddress.js:22:1)
    at :program (test-http-addrequest-localaddress.js:1:1)`
- `AssertionError: Expected values to be strictly equal: + actual - expected  + '/home/node' - '/work/.harness'
    at :anonymous (test-os.js:213:3)
    at :program (test-os.js:1:1)`
- `AssertionError: Expected values to be strictly equal: + actual - expected  + '/work/.harness/work/node-api/node-api-overlay' - '/work/.harness/work/node-api/node-api-overlay/test/parallel'
    at :anonymous (test-process-chdir.js:18:1)
    at :program (test-process-chdir.js:1:1)`
example test: `test/parallel/test-child-process-spawn-argv0.js`

### 11 × `AssertionError: Expected values to be strictly equal: <n> !== <n> at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Expected values to be strictly equal:  8 !== 0
    at :anonymous (test-buffer-copy-immutable.js:19:3)
    at :program (test-buffer-copy-immutable.js:1:1)`
- `AssertionError: Expected values to be strictly equal:  0 !== 10
    at :anonymous (test-http-max-header-size.js:11:1)
    at :program (test-http-max-header-size.js:1:1)`
- `AssertionError: Expected values to be strictly equal:  2 !== 0
    at :anonymous (test-module-run-main-monkey-patch.js:17:1)
    at :program (test-module-run-main-monkey-patch.js:1:1)`
- `AssertionError: Expected values to be strictly equal:  2500 !== 615
    at :anonymous (test-net-autoselectfamily-attempt-timeout-cli-option.js:10:1)
    at :program (test-net-autoselectfamily-attempt-timeout-cli-option.js:1:1)`
- `AssertionError: Expected values to be strictly equal:  0 !== 1
    at :anonymous (test-perf-hooks-timerify-multiple-wrapping.js:17:1)
    at :program (test-perf-hooks-timerify-multiple-wrapping.js:1:1)`
example test: `test/parallel/test-buffer-copy-immutable.js`

### 7 × `Mismatched noop function calls. Expected exactly <n>, actual <n>. at Proxy.mustCall (<loc>) at <loc> at <loc>`

distinct messages:
- `Mismatched noop function calls. Expected exactly 1, actual 0.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at test-child-process-destroy.js:7:29
    at test-child-process-destroy.js:1:1`
- `Mismatched noop function calls. Expected exactly 1, actual 0.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at test-readline-async-iterators-destroy.js:89:57
    at test-readline-async-iterators-destroy.js:1:1`
- `Mismatched noop function calls. Expected exactly 2, actual 1.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at test-stream-pipe-needDrain.js:27:24
    at test-stream-pipe-needDrain.js:1:1`
- `Mismatched noop function calls. Expected exactly 1, actual 0.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at test-stream-readable-error-end.js:10:23
    at test-stream-readable-error-end.js:1:1`
- `Mismatched noop function calls. Expected exactly 1, actual 0.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at test-stream-transform-destroy.js:119:30
    at test-stream-transform-destroy.js:1:1`
example test: `test/parallel/test-child-process-destroy.js`

### 6 × `AssertionError: Expected values to be strictly deep-equal: + actual - expected + Comparison {} - Comparison { - code: <str> - } at :anonymous (<loc>) at :progra`

distinct messages:
- `AssertionError: Expected values to be strictly deep-equal: + actual - expected  + Comparison {} - Comparison { -   code: 'MODULE_NOT_FOUND' - }
    at :anonymous (test-module-cache.js:9:1)
    at :program (test-module-cache.js:1:1)`
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
example test: `test/parallel/test-module-cache.js`

### 6 × `AssertionError: Missing expected exception. at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Missing expected exception.
    at :anonymous (test-dns-setserver-when-querying.js:17:5)
    at :program (test-dns-setserver-when-querying.js:1:1)`
- `AssertionError: Missing expected exception.
    at :anonymous (test-fs-rmdir-recursive-error.js:11:1)
    at :program (test-fs-rmdir-recursive-error.js:1:1)`
- `AssertionError: Missing expected exception.
    at :anonymous (test-require-exceptions.js:34:1)
    at :program (test-require-exceptions.js:1:1)`
- `AssertionError: Missing expected exception.
    at :anonymous (test-whatwg-url-custom-parsing.js:54:3)
    at :program (test-whatwg-url-custom-parsing.js:1:1)`
- `AssertionError: Missing expected exception.
    at :anonymous (test-worker-message-port.js:112:3)
    at :program (test-worker-message-port.js:1:1)`
example test: `test/parallel/test-dns-setserver-when-querying.js`

### 6 × `AssertionError: The input did not match the regular expression /ERR_INVALID_ARG_TYPE/. Input: <str> at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: The input did not match the regular expression /ERR_INVALID_ARG_TYPE/. Input:  'TypeError: The "channel" argument must be one of type string or symbol. Received null'
    at :anonymous (test-diagnostics-channel-symbol-named.js:25:3)
    at :program (test-diagnostics-channel-symbol-na`
- `AssertionError: The input did not match the regular expression /ERR_INVALID_ARG_TYPE/. Input:  'TypeError: Module.setSourceMapsSupport is not a function'
    at :anonymous (test-module-setsourcemapssupport.js:18:5)
    at :program (test-module-setsourcemapssupport.js:1:1)`
- `AssertionError: The input did not match the regular expression /ERR_INVALID_ARG_TYPE/. Input:  'TypeError: (intermediate value).setSourceMapsEnabled is not a function'
    at :anonymous (test-process-setsourcemapsenabled.js:13:3)
    at :program (test-process-setsourcemapsenabled.js:1:1)`
- `AssertionError: The input did not match the regular expression /ERR_INVALID_ARG_TYPE/. Input:  'TypeError: The "fn" argument must be of type function. Received number'
    at :anonymous (test-stream-filter.js:158:3)
    at :program (test-stream-filter.js:1:1)`
- `AssertionError: The input did not match the regular expression /ERR_INVALID_ARG_TYPE/. Input:  'TypeError: The "fn" argument must be of type function. Received number'
    at :anonymous (test-stream-flatMap.js:112:3)
    at :program (test-stream-flatMap.js:1:1)`
example test: `test/parallel/test-diagnostics-channel-symbol-named.js`

### 6 × `TypeError: Cannot load module: <str> at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: Cannot load module: 'internal/js_stream_socket'
    at :anonymous (test-http-agent-domain-reused-gc.js:40:24)
    at :program (test-http-agent-domain-reused-gc.js:1:1)`
- `TypeError: Cannot load module: '/work/.harness/work/node-api/node-test/.tmp.1925/index'
    at :anonymous (test-module-circular-symlinks.js:64:13)
    at :program (test-module-circular-symlinks.js:1:1)`
- `TypeError: Cannot load module: '../fixtures/packages/missing-main'
    at :anonymous (test-module-loading-deprecated.js:10:20)
    at :program (test-module-loading-deprecated.js:1:1)`
- `TypeError: Cannot load module: '/work/.harness/work/node-api/node-test/.tmp.1948/app/index'
    at :anonymous (test-module-symlinked-peer-modules.js:62:1)
    at :program (test-module-symlinked-peer-modules.js:1:1)`
- `TypeError: Cannot load module: '/work/.harness/work/node-api/node-test/.tmp.1956/foo.cjs'
    at :anonymous (test-require-enoent-dir.js:24:13)
    at :program (test-require-enoent-dir.js:1:1)`
example test: `test/parallel/test-http-agent-domain-reused-gc.js`

### 6 × `TypeError: Cannot read property <str> of undefined at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: Cannot read property 'write' of undefined
    at :anonymous (test-child-process-fork-stdio.js:53:3)
    at :program (test-child-process-fork-stdio.js:1:1)`
- `TypeError: Cannot read property 'finally' of undefined
    at :anonymous (test-perf-hooks-timerify-basic.js:25:1)
    at :program (test-perf-hooks-timerify-basic.js:1:1)`
- `TypeError: Cannot read property 'record' of undefined
    at :anonymous (test-perf-hooks-timerify-return-value.js:10:20)
    at :program (test-perf-hooks-timerify-return-value.js:1:1)`
- `TypeError: Cannot read property 'length' of undefined
    at :anonymous (test-stream-pipe-same-destination-twice.js:22:22)
    at :program (test-stream-pipe-same-destination-twice.js:1:1)`
- `TypeError: Cannot read property 'isBuildingSnapshot' of undefined
    at :anonymous (test-v8-startup-snapshot-api.js:7:3)
    at :program (test-v8-startup-snapshot-api.js:1:1)`
example test: `test/parallel/test-child-process-fork-stdio.js`

### 5 × `AssertionError: Expected values to be strictly deep-equal: + actual - expected Comparison { code: <str>, + message: <str>, - message: <str>, name: <str> } at :=`

distinct messages:
- `AssertionError: Expected values to be strictly deep-equal: + actual - expected    Comparison {     code: 'ERR_INVALID_ARG_TYPE', +   message: 'The first argument must be of type string or an instance of Buffer, ArrayBuffer, or Array or an Array-like Object. Received type function ([Function (anonymo`
- `AssertionError: Expected values to be strictly deep-equal: + actual - expected    Comparison {     code: 'ERR_INVALID_ARG_TYPE', +   message: 'The "value" argument must be one of type number or string or an instance of Buffer or Uint8Array. Received type function ([Function (anonymous)])', -   messa`
- `AssertionError: Expected values to be strictly deep-equal: + actual - expected    Comparison {     code: 'ERR_INVALID_ARG_TYPE', +   message: 'The "value" argument must be one of type number or string or an instance of Buffer or Uint8Array. Received type function ([Function (anonymous)])', -   messa`
- `AssertionError: Expected values to be strictly deep-equal: + actual - expected    Comparison {     code: 'ERR_INVALID_ARG_TYPE', +   message: 'The "options.captureRejections" property must be of type boolean. Received type function ([Function (anonymous)])', -   message: 'The "options.captureRejecti`
- `AssertionError: Expected values to be strictly deep-equal: + actual - expected    Comparison {     code: 'ERR_INVALID_ARG_TYPE', +   message: 'The "options.recursive" property must be of type boolean. Received type function ([Function (anonymous)])', -   message: 'The "options.recursive" property mu`
example test: `test/parallel/test-buffer-from.js`

### 5 × `Mismatched <anonymous> function calls. Expected at least <n>, actual <n>. at Proxy.mustCallAtLeast (<loc>) at <loc> at <loc>`

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
- `Mismatched <anonymous> function calls. Expected at least 20, actual 2.
    at Proxy.mustCallAtLeast (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:543:10)
    at test-stream-pipe-flow-after-unpipe.js:11:16
    at test-stream-pipe-flow-after-unpipe.js:1:1`
- `Mismatched <anonymous> function calls. Expected at least 2, actual 1.
    at Proxy.mustCallAtLeast (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:543:10)
    at test-zlib-flush-drain-longblock.js:19:28
    at test-zlib-flush-drain-longblock.js:1:1`
example test: `test/parallel/test-http-perf_hooks.js`

### 5 × `TypeError: Cannot set property <str> of undefined at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: Cannot set property 'readStart' of undefined
    at :anonymous (test-child-process-pipe-dataflow.js:43:3)
    at :program (test-child-process-pipe-dataflow.js:1:1)`
- `TypeError: Cannot set property 'getServers' of undefined
    at :anonymous (test-dns-get-server.js:10:1)
    at :program (test-dns-get-server.js:1:1)`
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

### 5 × `TypeError: This handle type cannot be sent at EventEmitter.<anonymous> (<loc>) at EventEmitter._return (<loc>) at EventEmitter.emit (native)`

distinct messages:
- `TypeError: This handle type cannot be sent
    at EventEmitter.<anonymous> (test-child-process-fork-getconnections.js:71:11)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)`
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
example test: `test/parallel/test-child-process-fork-getconnections.js`

### 3 × `AssertionError: Expected values to be strictly equal: + actual - expected + <n> - <n> at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Expected values to be strictly equal: + actual - expected  + 0 - 9223372036854776000
    at :anonymous (test-perf-hooks-histogram.js:17:3)
    at :program (test-perf-hooks-histogram.js:1:1)`
- `AssertionError: Expected values to be strictly equal: + actual - expected  + 1787163659835 - 0
    at :anonymous (test-performance-nodetiming.js:12:1)
    at :program (test-performance-nodetiming.js:1:1)`
- `AssertionError: Expected values to be strictly equal: + actual - expected  + 1073741824 - 9007199254740991
    at :anonymous (test-streams-highwatermark.js:18:3)
    at :program (test-streams-highwatermark.js:1:1)`
example test: `test/parallel/test-perf-hooks-histogram.js`

### 3 × `AssertionError: Expected values to be strictly equal: <n> !== <n> at EventEmitter.<anonymous> (<loc>) at EventEmitter._return (<loc>) at EventEmitter.emit (nati`

distinct messages:
- `AssertionError: Expected values to be strictly equal:

1 !== 0

    at EventEmitter.<anonymous> (test-child-process-fork-stdio-string-variant.js:29:53)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)
Error: Sou`
- `AssertionError: Expected values to be strictly equal:

6 !== 0

    at EventEmitter.<anonymous> (test-http-connect.js:34:10)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)
    at Duplex.push (native)`
- `AssertionError: Expected values to be strictly equal:

0 !== 1

    at EventEmitter.<anonymous> (test-worker-beforeexit-throw-exit.js:25:10)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)`
example test: `test/parallel/test-child-process-fork-stdio-string-variant.js`

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

### 3 × `Error: read ECONNRESET`

distinct messages:
- `Error: read ECONNRESET`
example test: `test/parallel/test-net-connect-abort-controller.js`

### 3 × `Mismatched <anonymous> function calls. Expected exactly <n>, actual <n>. at mustCall (<loc>) at _expectWarning (<loc>) at Proxy.expectWarning (<loc>) at <loc> a`

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
example test: `test/parallel/test-process-env-deprecation.js`

### 3 × `Mismatched <anonymous> function calls. Expected exactly <n>, actual <n>. at Proxy.mustCall (<loc>) at EventEmitter.<anonymous> (<loc>) at EventEmitter._return (`

distinct messages:
- `Mismatched <anonymous> function calls. Expected exactly 1, actual 0.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at EventEmitter.<anonymous> (test-diagnostics-channel-net.js:77:28)
    at EventEmitter._return (/work/.harness/work/node-api/nod`
- `Mismatched <anonymous> function calls. Expected exactly 5, actual 1.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at EventEmitter.<anonymous> (test-http-response-cork.js:9:29)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-`
- `Mismatched <anonymous> function calls. Expected exactly 1, actual 0.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at EventEmitter.<anonymous> (test-http-server-multiple-client-error.js:34:41)
    at EventEmitter._return (/work/.harness/work/no`
example test: `test/parallel/test-diagnostics-channel-net.js`

### 3 × `Uncaught (in promise) AssertionError: Expected values to be strictly equal: + actual - expected + <str> - <str>`

distinct messages:
- `Uncaught (in promise) AssertionError: Expected values to be strictly equal:
+ actual - expected

+ 'undefined'
- '[Module: null prototype] { a: <uninitialized>, b: undefined }'`
- `Uncaught (in promise) AssertionError: Expected values to be strictly equal:
+ actual - expected

+ 'Object'
- 'FileHandle'`
example test: `test/parallel/test-util-inspect-namespace.js`

### 3 × `Uncaught (in promise) AssertionError: Expected values to be strictly equal: <n> !== <n>`

distinct messages:
- `Uncaught (in promise) AssertionError: Expected values to be strictly equal:

1 !== 2`
- `Uncaught (in promise) AssertionError: Expected values to be strictly equal:

2 !== 1`
example test: `test/parallel/test-async-hooks-promise-triggerid.js`

### 3 × `Uncaught (in promise) AssertionError: The input did not match the regular expression /ERR_INVALID_ARG_TYPE/. Input: <str> Uncaught (in promise) AssertionError: `

distinct messages:
- `Uncaught (in promise) AssertionError: The input did not match the regular expression /ERR_INVALID_ARG_TYPE/. Input:

'TypeError: The "fn" argument must be of type function. Received number'

Uncaught (in promise) AssertionError: The input did not match the regular expression /ERR_OUT_OF_RANGE/. Inpu`
- `Uncaught (in promise) AssertionError: The input did not match the regular expression /ERR_INVALID_ARG_TYPE/. Input:

'TypeError: The "options" argument must be of type object. Received number'

Uncaught (in promise) AssertionError: The input did not match the regular expression /ERR_INVALID_ARG_TYPE`
example test: `test/parallel/test-stream-forEach.js`

### 3 × `Uncaught (in promise) TypeError: foo.linkRequests is not a function`

distinct messages:
- `Uncaught (in promise) TypeError: foo.linkRequests is not a function`
example test: `test/parallel/test-vm-module-linkmodulerequests-circular.js`

### 2 × `(node:<n>) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Bu`

distinct messages:
- `(node:1288) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.
AssertionError: DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use th`
- `(node:1534) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.`
example test: `test/parallel/test-buffer-constructor-outside-node-modules.js`

### 2 × `AssertionError: Expected <str> to be strictly unequal to: <str> at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Expected "actual" to be strictly unequal to:  'artischocko'
    at :anonymous (test-require-extensions-same-filename-as-dir.js:31:1)
    at :program (test-require-extensions-same-filename-as-dir.js:1:1)`
- `AssertionError: Expected "actual" to be strictly unequal to:  'artischocko'
    at :anonymous (test-require-extensions-same-filename-as-dir-trailing-slash.js:34:1)
    at :program (test-require-extensions-same-filename-as-dir-trailing-slash.js:1:1)`
example test: `test/parallel/test-require-extensions-same-filename-as-dir.js`

### 2 × `AssertionError: Expected values to be strictly deep-equal: + actual - expected Comparison { + message: <str> - message: <str> } at :anonymous (<loc>) at :progra`

distinct messages:
- `AssertionError: Expected values to be strictly deep-equal: + actual - expected    Comparison { +   message: 'index is too large' -   message: 'Invalid typed array length: 9007199254740992'   }
    at :anonymous (test-buffer-alloc.js:14:1)
    at :program (test-buffer-alloc.js:1:1)`
- `AssertionError: Expected values to be strictly deep-equal: + actual - expected    Comparison { +   message: 'stream._handle.reset is not a function' -   message: 'Cannot reset zlib stream while a write is in progress'   }
    at :anonymous (test-zlib-reset-during-write.js:18:3)
    at :program (test`
example test: `test/parallel/test-buffer-alloc.js`

### 2 × `AssertionError: Expected values to be strictly deep-equal: + actual - expected Comparison { + message: <str>, - message: <str>, name: <str> } at :anonymous (<lo`

distinct messages:
- `AssertionError: Expected values to be strictly deep-equal: + actual - expected    Comparison { +   message: 'EBADF: bad file descriptor, write', -   message: '',     name: 'Error'   }
    at :anonymous (test-fs-writesync-crash.js:40:1)
    at :program (test-fs-writesync-crash.js:1:1)`
- `AssertionError: Expected values to be strictly deep-equal: + actual - expected    Comparison { +   message: "Cannot assign to read only property 'nonWritableProp' of {getSetPropReceivingFunction: accessor, getSetPropReceivingNumber: accessor, propReceivingNumber: 144, getSetPropThrowing: accessor, n`
example test: `test/parallel/test-fs-writesync-crash.js`

### 2 × `AssertionError: Expected values to be strictly equal: + actual - expected + <str> - <str> at Duplex.<anonymous> (<loc>) at Duplex._return (<loc>)`

distinct messages:
- `AssertionError: Expected values to be strictly equal:
+ actual - expected

+ 'HTTP/1.1 400 Bad Request'
- 'HTTP/1.1 200 OK'

    at Duplex.<anonymous> (test-http-insecure-parser.js:33:12)
    at Duplex._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)`
- `AssertionError: Expected values to be strictly equal:
+ actual - expected

+ 'EADDRINUSE'
- 'EACCES'

    at Duplex.<anonymous> (test-net-pipe-connect-errors.js:94:14)
    at Duplex._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)`
example test: `test/parallel/test-http-insecure-parser.js`

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
    at EventEmitter.emit (native)`
example test: `test/parallel/test-domain-top-level-error-handler-throw.js`

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

### 2 × `AssertionError: Expected values to be strictly equal: <n> !== <n> at Writable.<anonymous> (<loc>) at Writable._return (<loc>) at Writable.emit (native) at Duple`

distinct messages:
- `AssertionError: Expected values to be strictly equal:

2 !== 1

    at Writable.<anonymous> (test-http-client-parse-error.js:47:14)
    at Writable._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at Writable.emit (native)
    at Duplex.push (native)`
- `AssertionError: Expected values to be strictly equal:

1 !== 0

    at Writable.<anonymous> (test-http-upgrade-agent.js:69:12)
    at Writable._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at Writable.emit (native)
    at Duplex.push (native)`
example test: `test/parallel/test-http-client-parse-error.js`

### 2 × `AssertionError: Expected values to be strictly equal: <str> !== <str> at :=> (<loc>) at _return (<loc>)`

distinct messages:
- `AssertionError: Expected values to be strictly equal:  '' !== 'あ'
    at :=> (test-readline-promises-tab-complete.js:79:11)
    at _return (index.js:573:12)`
- `AssertionError: Expected values to be strictly equal:  'YWJj' !== 'qw=='
    at :=> (test-stream-readable-unshift.js:65:7)
    at _return (index.js:573:12)`
example test: `test/parallel/test-readline-promises-tab-complete.js`

### 2 × `AssertionError: Expected values to be strictly equal: <str> !== <str> at PassThrough.<anonymous> (<loc>) at PassThrough._return (<loc>) Error: stream.push() aft`

distinct messages:
- `AssertionError: Expected values to be strictly equal:

'' !== 'ASD'

    at PassThrough.<anonymous> (test-stream-compose.js:139:12)
    at PassThrough._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
Error: stream.push() after EOF`
- `AssertionError: Expected values to be strictly equal:

'' !== 'ASD'

    at PassThrough.<anonymous> (test-webstreams-compose.js:263:12)
    at PassThrough._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
Error: stream.push() after EOF`
example test: `test/parallel/test-stream-compose.js`

### 2 × `AssertionError: Expected values to be strictly equal: false !== true at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Expected values to be strictly equal:  false !== true
    at :anonymous (test-file.js:27:5)
    at :program (test-file.js:1:1)`
- `AssertionError: Expected values to be strictly equal:  false !== true
    at :anonymous (test-stream-duplex-from.js:114:3)
    at :program (test-stream-duplex-from.js:1:1)`
example test: `test/parallel/test-file.js`

### 2 × `AssertionError: function should not have been called at <loc> at Duplex.mustNotCall (<loc>) at Duplex.emit (native)`

distinct messages:
- `AssertionError: function should not have been called at test-net-client-bind-twice.js:18
    at Duplex.mustNotCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:631:12)
    at Duplex.emit (native)`
- `AssertionError: function should not have been called at test-net-listen-ipv6only.js:25
    at Duplex.mustNotCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:631:12)
    at Duplex.emit (native)`
example test: `test/parallel/test-net-client-bind-twice.js`

### 2 × `AssertionError: Missing expected exception (TypeError). at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Missing expected exception (TypeError).
    at :anonymous (test-stream-readable-async-iterators.js:774:5)
    at :program (test-stream-readable-async-iterators.js:1:1)`
- `AssertionError: Missing expected exception (TypeError).
    at :anonymous (test-vm-module-errors.js:164:1)
    at :program (test-vm-module-errors.js:1:1)`
example test: `test/parallel/test-stream-readable-async-iterators.js`

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

### 2 × `Error: ENOENT: no such file or directory, open <str> at Error.get stack (native)`

distinct messages:
- `Error: ENOENT: no such file or directory, open '/doesnotexist'
    at Error.get stack (native)`
- `Error: ENOENT: no such file or directory, open '/work/.harness/work/node-api/node-api-overlay/test/parallel/file.txt'
    at Error.get stack (native)`
example test: `test/parallel/test-fs-stream-construct-compat-error-read.js`

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

### 2 × `Mismatched <anonymous> function calls. Expected exactly <n>, actual <n>. at Proxy.mustCall (<loc>) at <loc> at <loc> Mismatched <anonymous> function calls. Expe`

distinct messages:
- `Mismatched <anonymous> function calls. Expected exactly 1, actual 0.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at test-event-emitter-remove-listeners.js:134:34
    at test-event-emitter-remove-listeners.js:1:1
Mismatched <anonymous> functio`
- `Mismatched <anonymous> function calls. Expected exactly 3, actual 1.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at test-stream-readable-emittedReadable.js:14:32
    at test-stream-readable-emittedReadable.js:1:1
Mismatched <anonymous> functi`
example test: `test/parallel/test-event-emitter-remove-listeners.js`

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

### 2 × `TypeError: (intermediate value).gc is not a function at Immediate.<anonymous> (<loc>) at TypeError.get stack (native)`

distinct messages:
- `TypeError: (intermediate value).gc is not a function
    at Immediate.<anonymous> (test-async-hooks-disable-gc-tracking.js:17:14)
    at TypeError.get stack (native)`
- `TypeError: (intermediate value).gc is not a function
    at Immediate.<anonymous> (test-async-hooks-prevent-double-destroy.js:20:14)
    at TypeError.get stack (native)`
example test: `test/parallel/test-async-hooks-disable-gc-tracking.js`

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

### 2 × `TypeError: The URL must be of scheme file at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: The URL must be of scheme file
    at :anonymous (test-worker-data-url.js:7:1)
    at :program (test-worker-data-url.js:1:1)`
- `TypeError: The URL must be of scheme file
    at :anonymous (test-worker-process-exit-async-module.js:8:11)
    at :program (test-worker-process-exit-async-module.js:1:1)`
example test: `test/parallel/test-worker-data-url.js`

### 2 × `Uncaught (in promise) AssertionError: Expected <str> to be strictly unequal to: <n>`

distinct messages:
- `Uncaught (in promise) AssertionError: Expected "actual" to be strictly unequal to: 1`
- `Uncaught (in promise) AssertionError: Expected "actual" to be strictly unequal to: 0`
example test: `test/parallel/test-async-hooks-enable-before-promise-resolve.js`

### 2 × `Uncaught (in promise) AssertionError: Missing expected rejection. Uncaught (in promise) AssertionError: Missing expected rejection.`

distinct messages:
- `Uncaught (in promise) AssertionError: Missing expected rejection.
Uncaught (in promise) AssertionError: Missing expected rejection.`
example test: `test/parallel/test-vm-dynamic-import-callback-missing-flag.js`

### 2 × `Uncaught (in promise) TypeError: The <str> argument must be of type string or an instance of Buffer, TypedArray, or DataView. Received an instance of Readable`

distinct messages:
- `Uncaught (in promise) TypeError: The "data" argument must be of type string or an instance of Buffer, TypedArray, or DataView. Received an instance of Readable`
example test: `test/parallel/test-fs-promises-file-handle-writeFile.js`

### 1 × `(node:<n>) [DEP0190] DeprecationWarning: Passing args to a child process with shell option true can lead to security vulnerabilities, as the arguments are not e`

distinct messages:
- `(node:4019) [DEP0190] DeprecationWarning: Passing args to a child process with shell option true can lead to security vulnerabilities, as the arguments are not escaped, only concatenated.
AssertionError: Expected values to be strictly equal:

'' !== 'buzz'

    at EventEmitter.<anonymous> (test-chil`
example test: `test/parallel/test-child-process-spawn-shell.js`

### 1 × `(node:<n>) MaxListenersExceededWarning: Possible EventEmitter memory leak detected. <n> close listeners added to [Socket]. MaxListeners is <n>. Use emitter.setM`

distinct messages:
- `(node:20669) MaxListenersExceededWarning: Possible EventEmitter memory leak detected. 11 close listeners added to [Socket]. MaxListeners is 10. Use emitter.setMaxListeners() to increase limit
Fatal error: java.lang.OutOfMemoryError: Could not allocate an aligned heap chunk because the heap address s`
example test: `test/parallel/test-http-pipeline-flood.js`

### 1 × `(node:<n>) MaxListenersExceededWarning: Possible EventEmitter memory leak detected. <n> null listeners added to [EventEmitter]. MaxListeners is <n>. Use emitter`

distinct messages:
- `(node:11943) MaxListenersExceededWarning: Possible EventEmitter memory leak detected. 2 null listeners added to [EventEmitter]. MaxListeners is 1. Use emitter.setMaxListeners() to increase limit
AssertionError: Expected values to be strictly equal:

'null' !== null

    at process.<anonymous> (test-`
example test: `test/parallel/test-event-emitter-max-listeners-warning-for-null.js`

### 1 × `(node:<n>) TimeoutOverflowWarning: <n> does not fit into a <n>-bit signed integer. Timeout duration was set to <n>.`

distinct messages:
- `(node:34634) TimeoutOverflowWarning: 2147483648 does not fit into a 32-bit signed integer.
Timeout duration was set to 1.`
example test: `test/parallel/test-timers-max-duration-warning.js`

### 1 × `(node:<n>) TimeoutOverflowWarning: <n> does not fit into a <n>-bit signed integer. Timeout duration was set to <n>. AssertionError: The expression evaluated to `

distinct messages:
- `(node:22650) TimeoutOverflowWarning: 1099511627776 does not fit into a 32-bit signed integer.
Timeout duration was set to 1.
AssertionError: The expression evaluated to a falsy value:

  assert(warning.stack.includes(__filename))

    at process.<anonymous> (test-http-timeout-client-warning.js:10:3)`
example test: `test/parallel/test-http-timeout-client-warning.js`

### 1 × `(node:<n>) Warning: test AssertionError: stderr.write must not be called at <loc> called with arguments: <str> at mustNotCall (<loc>) at Writable.write (<loc>) `

distinct messages:
- `(node:32013) Warning: test
AssertionError: stderr.write must not be called at test-process-warning.js:13
called with arguments: '(node:32013) Warning: test\n'
    at mustNotCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:631:12)
    at Writable.write (/work/.harness/work/nod`
example test: `test/parallel/test-process-warning.js`

### 1 × `[EventLoop] external task threw: Promise was rejected with reason: Error: queryAny EBADRESP dev.elide.lang.javascript.api.PromiseRejectedException: Promise was `

distinct messages:
- `[EventLoop] external task threw: Promise was rejected with reason: Error: queryAny EBADRESP
dev.elide.lang.javascript.api.PromiseRejectedException: Promise was rejected with reason: Error: queryAny EBADRESP
	at dev.elide.lang.javascript.api.JsPromiseImpl.then$lambda$2(JsPromise.kt:224)
	at dev.elide`
example test: `test/parallel/test-dns-resolveany-bad-ancount.js`

### 1 × `[process <n>]: --- stderr --- (node:<n>) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(`

distinct messages:
- `[process 1277]: --- stderr ---
(node:1277) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.

[process 1277]: --- stdout ---

[process 1277]: status = 0, signal = null
Erro`
example test: `test/parallel/test-buffer-constructor-node-modules.js`

### 1 × `[process <n>]: --- stderr --- Error: Source is not a file or is not readable: /work/.harness/work/node-api/node-api-overlay/test/fixtures/spawn-worker-with-copi`

distinct messages:
- `[process 38537]: --- stderr ---
Error: Source is not a file or is not readable: /work/.harness/work/node-api/node-api-overlay/test/fixtures/spawn-worker-with-copied-env; see --help

[process 38537]: --- stdout ---

[process 38537]: status = 1, signal = null
Error: - process terminated with status 1,`
example test: `test/parallel/test-worker-node-options.js`

### 1 × `> CLIENT SENDING REQUEST { expectClose: true, data: <str> } < SERVER SENDING RESPONSE { headers: { Connection: <str> }, chunks: [ <str> ] } > CLIENT ONDATA <n> `

distinct messages:
- `> CLIENT SENDING REQUEST {
  expectClose: true,
  data: 'POST / HTTP/1.0\r\nConnection: keep-alive\r\n\r\n'
}
<  SERVER SENDING RESPONSE { headers: { Connection: 'keep-alive' }, chunks: [ 'OK' ] }
 > CLIENT ONDATA 82 "HTTP/1.1 200 OK\r\nConnection: keep-alive\r\nDate: Wed, 19 Aug 2026 18:11:55 GMT\r`
example test: `test/parallel/test-http-1.0-keep-alive.js`

### 1 × `AssertionError at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError
    at :anonymous (test-http-debug.js:13:1)
    at :program (test-http-debug.js:1:1)`
example test: `test/parallel/test-http-debug.js`

### 1 × `AssertionError: (<n>)[<n>, <n>, <n>, <n>, <n>, <n>, <n>, <n>, <n>, <n>, <n>, <n>, <n>, <n>, <n>, <n>, <n>, <n>, <n>, <n>, ...] at :anonymous (<loc>) at :program`

distinct messages:
- `AssertionError: (22)[5193, 5193, 5193, 5193, 5193, 5193, 5193, 5193, 5193, 5193, 5193, 5193, 5193, 5193, 5193, 5193, 5193, 5193, 5193, 5193, ...]
    at :anonymous (test-zlib-zstd.js:30:3)
    at :program (test-zlib-zstd.js:1:1)`
example test: `test/parallel/test-zlib-zstd.js`

### 1 × `AssertionError: (<n>)[<n>, <n>, <n>, <n>, <n>, <n>, <n>, <n>, <n>, <n>, <n>, <n>] at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: (12)[4842, 4842, 4842, 4842, 4842, 4842, 4842, 4842, 4842, 4842, 4842, 4842]
    at :anonymous (test-zlib-brotli.js:30:3)
    at :program (test-zlib-brotli.js:1:1)`
example test: `test/parallel/test-zlib-brotli.js`

### 1 × `AssertionError: (req, res) => { res.writeHead(<n>); res.end(); } at <loc> called with arguments: <ref *<n>> IncomingMessage [Readable] { socket: <ref *<n>> Sock`

distinct messages:
- `AssertionError: (req, res) => {
    res.writeHead(200);
    res.end();
  } at test-http-request-host-header.js:7
called with arguments: <ref *1> IncomingMessage [Readable] {
  socket: <ref *2> Socket [Duplex] {
    _handle: {},
    _allowHalfOpen: true,
    _noDelay: true,
    connecting: false,
   `
example test: `test/parallel/test-http-request-host-header.js`

### 1 × `AssertionError: { resultHasOwn: { onSelf: true, onSelfGetter: true, onSelfIndexed: true, onOuterProto: false, onOuterProtoGetter: false, … }, resultDesc: { onSe`

distinct messages:
- `AssertionError: { resultHasOwn: { onSelf: true, onSelfGetter: true, onSelfIndexed: true, onOuterProto: false, onOuterProtoGetter: false, … }, resultDesc: { onSelf: { value: 'onSelf', writable: true, enumerable: true, configurable: true }, onSelfGetter: { get: {}, set: undefined, enumerable: false, c`
example test: `test/parallel/test-vm-global-property-prototype.js`

### 1 × `AssertionError: /a/ failed + actual - expected + <str> - <str> at expectColored (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: /a/ failed + actual - expected  + '/a/' - '\x1b[32m/\x1b[39m\x1b[33ma\x1b[39m\x1b[32m/\x1b[39m'
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

### 1 × `AssertionError: <str> fired with writableLength=<n> <n> !== <n> at Writable.<anonymous> (<loc>) at Writable._return (<loc>)`

distinct messages:
- `AssertionError: 'drain' fired with writableLength=65726

65726 !== 0

    at Writable.<anonymous> (test-http-outgoing-drain-writable-length.js:40:12)
    at Writable._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)`
example test: `test/parallel/test-http-outgoing-drain-writable-length.js`

### 1 × `AssertionError: <str> object is present but v8_enable_i18n_support is true. Is this test out of date? true !== <n> at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: "Intl" object is present but v8_enable_i18n_support is true. Is this test out of date?  true !== 1
    at :anonymous (test-intl.js:60:3)
    at :program (test-intl.js:1:1)`
example test: `test/parallel/test-intl.js`

### 1 × `AssertionError: createScript crashes at <loc> at _return (<loc>) at EventEmitter.emit (native)`

distinct messages:
- `AssertionError: createScript crashes
    at test-vm-api-handles-getter-errors.js:33:5
    at _return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)`
example test: `test/parallel/test-vm-api-handles-getter-errors.js`

### 1 × `AssertionError: Domains stack should be empty in uncaughtException handler but the value of process.domain is null + actual - expected + null - undefined at pro`

distinct messages:
- `AssertionError: Domains stack should be empty in uncaughtException handler but the value of process.domain is null
+ actual - expected

+ null
- undefined

    at process.onUncaught (test-domain-stack-empty-in-process-uncaughtexception.js:10:10)
    at process.onUncaught (/work/.harness/work/node-ap`
example test: `test/parallel/test-domain-stack-empty-in-process-uncaughtexception.js`

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

### 1 × `AssertionError: Expected <str> to be reference-equal to <str>: + actual - expected + Buffer(<n>) [Uint8Array] [ - Buffer(<n>) [Uint8Array] [ <n>, <n>, <n>, <n>,`

distinct messages:
- `AssertionError: Expected "actual" to be reference-equal to "expected": + actual - expected  + Buffer(15) [Uint8Array] [ - Buffer(5) [Uint8Array] [     0,     0,     0,     0,     0, +   0, +   0, +   0, +   0, +   0, +   0, +   0, +   0, +   0, +   0   ]
    at :anonymous (test-stream-readable-reada`
example test: `test/parallel/test-stream-readable-readable-one.js`

### 1 × `AssertionError: Expected <str> to be reference-equal to <str>: + actual - expected + Immediate { + _argv: [], + _destroyed: false, + _idleNext: null, + _idlePre`

distinct messages:
- `AssertionError: Expected "actual" to be reference-equal to "expected": + actual - expected  + Immediate { +   _argv: [], +   _destroyed: false, +   _idleNext: null, +   _idlePrev: null, +   _onImmediate: [Function: mustNotCall] - { -   type: 'Immediate'   }
    at :anonymous (test-async-hooks-top-le`
example test: `test/parallel/test-async-hooks-top-level-clearimmediate.js`

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

### 1 × `AssertionError: Expected values to be strictly deep-equal: + actual - expected [ + <str>, + <str>, <str>, - <str>, - <str> ] at :anonymous (<loc>) at :program (`

distinct messages:
- `AssertionError: Expected values to be strictly deep-equal: + actual - expected    [ +   'foo', +   'data',     'error', -   'data', -   'foo'   ]
    at :anonymous (test-stream-event-names.js:17:3)
    at :program (test-stream-event-names.js:1:1)`
example test: `test/parallel/test-stream-event-names.js`

### 1 × `AssertionError: Expected values to be strictly deep-equal: + actual - expected [ <n>, <n>, <n>, + <n>, + <n>, + <n> ] at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Expected values to be strictly deep-equal: + actual - expected    [     65,     66,     67, +   68, +   69, +   70   ]
    at :anonymous (test-stream-uint8array.js:87:3)
    at :program (test-stream-uint8array.js:1:1)`
example test: `test/parallel/test-stream-uint8array.js`

### 1 × `AssertionError: Expected values to be strictly deep-equal: + actual - expected [ <n>, <n>, <n>, <n>, + <n>, + <n>, + <n>, + <n>, + <n>, + <n>, + <n>, + <n> ] at`

distinct messages:
- `AssertionError: Expected values to be strictly deep-equal: + actual - expected    [     65,     66,     67,     68, +   65, +   66, +   67, +   68, +   65, +   66, +   67, +   68   ]
    at :anonymous (test-stream-typedarray.js:90:3)
    at :program (test-stream-typedarray.js:1:1)`
example test: `test/parallel/test-stream-typedarray.js`

### 1 × `AssertionError: Expected values to be strictly deep-equal: + actual - expected [ <str>, <str>, + undefined - <str> ] at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Expected values to be strictly deep-equal: + actual - expected    [     'direct',     'this', +   undefined -   'new'   ]
    at :anonymous (test-vm-not-strict.js:34:1)
    at :program (test-vm-not-strict.js:1:1)`
example test: `test/parallel/test-vm-not-strict.js`

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
    at Duplex._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)`
example test: `test/parallel/test-net-autoselectfamily.js`

### 1 × `AssertionError: Expected values to be strictly deep-equal: + actual - expected Comparison { - code: <str>, name: <str> } at :anonymous (<loc>) at :program (<loc`

distinct messages:
- `AssertionError: Expected values to be strictly deep-equal: + actual - expected    Comparison { -   code: 'ERR_CONSTRUCT_CALL_REQUIRED',     name: 'TypeError'   }
    at :anonymous (test-urlpattern-types.js:9:1)
    at :program (test-urlpattern-types.js:1:1)`
example test: `test/parallel/test-urlpattern-types.js`

### 1 × `AssertionError: Expected values to be strictly deep-equal: + actual - expected Comparison { + code: <str>, + name: <str> - code: <str>, - name: <str> } at :anon`

distinct messages:
- `AssertionError: Expected values to be strictly deep-equal: + actual - expected    Comparison { +   code: 'ERR_FS_INVALID_SYMLINK_TYPE', +   name: 'Error' -   code: 'ERR_INVALID_ARG_VALUE', -   name: 'TypeError'   }
    at :anonymous (test-fs-symlink.js:82:1)
    at :program (test-fs-symlink.js:1:1)`
example test: `test/parallel/test-fs-symlink.js`

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

### 1 × `AssertionError: Expected values to be strictly deep-equal: + actual - expected Comparison { + message: <str>, - code: <str>, - message: /must be of type object/`

distinct messages:
- `AssertionError: Expected values to be strictly deep-equal: + actual - expected    Comparison { +   message: 'called on non-object', -   code: 'ERR_INVALID_ARG_TYPE', -   message: /must be of type object/,     name: 'TypeError'   }
    at :=> (test-vm-context.js:85:3)
    at :anonymous (test-vm-conte`
example test: `test/parallel/test-vm-context.js`

### 1 × `AssertionError: Expected values to be strictly deep-equal: + actual - expected Comparison { + message: <str>, - code: <str>, - message: <str>, name: <str> } at `

distinct messages:
- `AssertionError: Expected values to be strictly deep-equal:
+ actual - expected

  Comparison {
+   message: 'agent.addRequest is not a function',
-   code: 'ERR_INVALID_ARG_TYPE',
-   message: 'The "options.agent" property must be one of Agent-like Object, undefined, or false. Received type boolean `
example test: `test/parallel/test-http-client-reject-unexpected-agent.js`

### 1 × `AssertionError: Expected values to be strictly deep-equal: + actual - expected Comparison { + message: <str>, - message: /test[/\\]fixtures[/\\]invalid\<loc>on:`

distinct messages:
- `AssertionError: Expected values to be strictly deep-equal: + actual - expected    Comparison { +   message: 'Unexpected string in JSON at position 42', -   message: /test[/\\]fixtures[/\\]invalid\.json: /,     name: 'SyntaxError'   }
    at :anonymous (test-require-json.js:27:1)
    at :program (tes`
example test: `test/parallel/test-require-json.js`

### 1 × `AssertionError: Expected values to be strictly deep-equal: + actual - expected Comparison { code: <str>, + message: <str> - message: <str> } at :anonymous (<loc`

distinct messages:
- `AssertionError: Expected values to be strictly deep-equal: + actual - expected    Comparison {     code: 'ERR_INVALID_ARG_VALUE', +   message: "The argument 'buffer' is empty and cannot be written. Received an instance of Uint8Array" -   message: "The argument 'buffer' is empty and cannot be written`
example test: `test/parallel/test-fs-read-empty-buffer.js`

### 1 × `AssertionError: Expected values to be strictly deep-equal: + actual - expected Comparison { code: <str>, + message: <str>, - message: <str>, name: <str> } at :a`

distinct messages:
- `AssertionError: Expected values to be strictly deep-equal: + actual - expected    Comparison {     code: 'ERR_INVALID_ARG_TYPE', +   message: 'The "path" argument must be of type string or an instance of Buffer or URL. Received type function ([Function (anonymous)])', -   message: 'The "path" argume`
example test: `test/parallel/test-fs-readfile-error.js`

### 1 × `AssertionError: Expected values to be strictly deep-equal: + actual - expected Comparison { code: <str>, + message: <str>, - message: <str>, name: <str> } at ru`

distinct messages:
- `AssertionError: Expected values to be strictly deep-equal:
+ actual - expected

  Comparison {
    code: 'ERR_OUT_OF_RANGE',
+   message: 'The value of "start" is out of range. It must be >= 0 and an integer. Received -5',
-   message: 'The value of "start" is out of range. It must be >= 0 && <= 900`
example test: `test/parallel/test-file-write-stream3.js`

### 1 × `AssertionError: Expected values to be strictly deep-equal: + actual - expected Comparison { code: <str>, + name: <str> - name: <str> } at test (<loc>) at :anony`

distinct messages:
- `AssertionError: Expected values to be strictly deep-equal: + actual - expected    Comparison {     code: 'ERR_STRING_TOO_LONG', +   name: 'RangeError' -   name: 'Error'   }
    at test (test-buffer-tostring-rangeerror.js:37:3)
    at :anonymous (test-buffer-tostring-rangeerror.js:40:1)
    at :progr`
example test: `test/parallel/test-buffer-tostring-rangeerror.js`

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

### 1 × `AssertionError: Expected values to be strictly equal: + actual - expected ... Skipped lines <str> + <str> + <str> + <str> + <str> + ... <str> + + <str> + - <str`

distinct messages:
- `AssertionError: Expected values to be strictly equal: + actual - expected ... Skipped lines    'URL {\n' +     "  href: 'https://username:password@host.name:8080/path/name/?que=ry#hash',\n" +     "  origin: 'https://host.name:8080',\n" +     "  protocol: 'https:',\n" +     "  username: 'username',\n`
example test: `test/parallel/test-whatwg-url-custom-inspect.js`

### 1 × `AssertionError: Expected values to be strictly equal: + actual - expected + <n> - <n> at testHighWaterMarkIsMaxSafeInt (<loc>) at :anonymous (<loc>) at :program`

distinct messages:
- `AssertionError: Expected values to be strictly equal: + actual - expected  + 1073741824 - 9007199254740991
    at testHighWaterMarkIsMaxSafeInt (test-stream-iter-writable-from.js:536:3)
    at :anonymous (test-stream-iter-writable-from.js:618:1)
    at :program (test-stream-iter-writable-from.js:1:1`
example test: `test/parallel/test-stream-iter-writable-from.js`

### 1 × `AssertionError: Expected values to be strictly equal: + actual - expected + <ref *<n>> HTTPParser { + _chunkLength: <n>, + _connectionClose: false, + _connectio`

distinct messages:
- `AssertionError: Expected values to be strictly equal:
+ actual - expected

+ <ref *2> HTTPParser {
+   _chunkLength: 82,
+   _connectionClose: false,
+   _connectionKeepAlive: false,
+   _connectionUpgrade: true,
+   _current: IncomingMessage [Readable] {
+     _consuming: false,
+     _dumped: fals`
example test: `test/parallel/test-http-parser-freed-before-upgrade.js`

### 1 × `AssertionError: Expected values to be strictly equal: + actual - expected + <str> - <str>`

distinct messages:
- `AssertionError: Expected values to be strictly equal:
+ actual - expected

+ 'ERR_STREAM_DESTROYED'
- 'ERR_STREAM_WRITE_AFTER_END'`
example test: `test/parallel/test-stream-writable-end-cb-error.js`

### 1 × `AssertionError: Expected values to be strictly equal: + actual - expected + <str> - <str> at EventEmitter.<anonymous> (<loc>) at EventEmitter._return (<loc>) at`

distinct messages:
- `AssertionError: Expected values to be strictly equal:
+ actual - expected

+ 'ArrayBuffer'
- 'SharedArrayBuffer'

    at EventEmitter.<anonymous> (test-worker-sharedarraybuffer-from-worker-thread.js:23:12)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.j`
example test: `test/parallel/test-worker-sharedarraybuffer-from-worker-thread.js`

### 1 × `AssertionError: Expected values to be strictly equal: + actual - expected + <str> - <str> at process.<anonymous> (<loc>) at process._return (<loc>) at process.e`

distinct messages:
- `AssertionError: Expected values to be strictly equal:
+ actual - expected

+ 'The "iterable" argument must be an instance of Iterable. Received object'
- 'error'

    at process.<anonymous> (test-stream-pipeline-uncaught.js:11:10)
    at process._return (/work/.harness/work/node-api/node-api-overlay`
example test: `test/parallel/test-stream-pipeline-uncaught.js`

### 1 × `AssertionError: Expected values to be strictly equal: + actual - expected + <str> - <str> at process.onUncaught (<loc>) at process.onUncaught (<loc>)`

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

### 1 × `AssertionError: Expected values to be strictly equal: + actual - expected + <str> + + <str> + + <str> - <str> at process.<anonymous> (<loc>) at process._return `

distinct messages:
- `AssertionError: Expected values to be strictly equal:
+ actual - expected

+ 'The expression evaluated to a falsy value:\n' +
+   '\n' +
+   "  assert(e.listenerCount('error') > 0)\n"
- 'no way'

    at process.<anonymous> (test-stream-pipeline-listeners.js:8:10)
    at process._return (/work/.harne`
example test: `test/parallel/test-stream-pipeline-listeners.js`

### 1 × `AssertionError: Expected values to be strictly equal: + actual - expected + <str> + + <str> + + <str> + + <str> + + <str> - <str> at :=> (<loc>) at _return (<lo`

distinct messages:
- `AssertionError: Expected values to be strictly equal: + actual - expected  + 'Expected values to be strictly equal:\n' + +   '+ actual - expected\n' + +   '\n' + +   "+ 'Expected values to be strictly equal:\\n\\n2 !== 1\\n'\n" + +   "- 'from d2 error handler'\n" - 'from d2 error handler'
    at :=>`
example test: `test/parallel/test-domain-error-handler-throw-no-recursion.js`

### 1 × `AssertionError: Expected values to be strictly equal: + actual - expected + <str> + + <str> + + <str> + + <str> + + <str> + + <str> + + <str> + + <str> + + <str`

distinct messages:
- `AssertionError: Expected values to be strictly equal:
+ actual - expected

+ 'HTTP/1.1 200 OK\r\n' +
+   'Content-Type: text/plain\r\n' +
+   'Date: Wed, 19 Aug 2026 18:12:49 GMT\r\n' +
+   'Connection: keep-alive\r\n' +
+   'Keep-Alive: timeout=65\r\n' +
+   'Transfer-Encoding: chunked\r\n' +
+   '`
example test: `test/parallel/test-http-chunk-extensions-limit.js`

### 1 × `AssertionError: Expected values to be strictly equal: + actual - expected + null - <ref *<n>> IncomingMessage [Readable] { - _consuming: false, - _dumped: true,`

distinct messages:
- `AssertionError: Expected values to be strictly equal:
+ actual - expected

+ null
- <ref *2> IncomingMessage [Readable] {
-   _consuming: false,
-   _dumped: true,
-   _keepAlive: true,
-   aborted: false,
-   complete: true,
-   headers: [Object: null prototype] {
-     'content-length': '11',
-   `
example test: `test/parallel/test-http-server-keepalive-end.js`

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
-   headers: [Object: null prototype] {
-     host: 'example.com'
-`
example test: `test/parallel/test-http-server.js`

### 1 × `AssertionError: Expected values to be strictly equal: + actual - expected + undefined - <str> at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Expected values to be strictly equal: + actual - expected  + undefined - 'ENODATA'
    at :anonymous (test-dns-promises-exists.js:10:1)
    at :program (test-dns-promises-exists.js:1:1)`
example test: `test/parallel/test-dns-promises-exists.js`

### 1 × `AssertionError: Expected values to be strictly equal: + actual - expected + undefined - <str> at <loc> at <loc>`

distinct messages:
- `AssertionError: Expected values to be strictly equal:
+ actual - expected

+ undefined
- 'test-worker-thread-name'

    at test-worker-thread-name.js:10:10
    at test-worker-thread-name.js:1:1`
example test: `test/parallel/test-worker-thread-name.js`

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

### 1 × `AssertionError: Expected values to be strictly equal: + actual - expected + undefined - Readable { - _read: [Function (anonymous)], - unpipe: [Function (anonymo`

distinct messages:
- `AssertionError: Expected values to be strictly equal: + actual - expected  + undefined - Readable { -   _read: [Function (anonymous)], -   unpipe: [Function (anonymous)] - }
    at :anonymous (test-stream2-pipe-error-handling.js:63:3)
    at :program (test-stream2-pipe-error-handling.js:1:1)`
example test: `test/parallel/test-stream2-pipe-error-handling.js`

### 1 × `AssertionError: Expected values to be strictly equal: + actual - expected + Url { + auth: null, + hash: null, + host: null, + hostname: null, + href: <str>, + p`

distinct messages:
- `AssertionError: Expected values to be strictly equal: + actual - expected  + Url { +   auth: null, +   hash: null, +   host: null, +   hostname: null, +   href: 'foo', +   path: 'foo', +   pathname: 'foo', +   port: null, +   protocol: null, +   query: null, +   search: null, +   slashes: null + } -`
example test: `test/parallel/test-url-relative.js`

### 1 × `AssertionError: Expected values to be strictly equal: + actual - expected <str> + <str> + <str> + <str> + + <str> + + <str> + + <str> + <str> at Duplex.<anonymo`

distinct messages:
- `AssertionError: Expected values to be strictly equal:
+ actual - expected

  'HTTP/1.1 101 Web Socket Protocol Handshake\r\n' +
    'Upgrade: WebSocket\r\n' +
    'Connection: Upgrade\r\n' +
    '\r\n' +
+   'Upgrade: WebSocket\r\n' +
+   'Connection: Upgrade\r\n' +
+   '\r\n' +
    '123456789012345`
example test: `test/parallel/test-http-server-request-timeout-upgrade.js`

### 1 × `AssertionError: Expected values to be strictly equal: <n> !== -<n> at EventEmitter.<anonymous> (<loc>) at EventEmitter._return (<loc>) at EventEmitter.emit (nat`

distinct messages:
- `AssertionError: Expected values to be strictly equal:

1 !== -1

    at EventEmitter.<anonymous> (test-worker-safe-getters.js:27:12)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)`
example test: `test/parallel/test-worker-safe-getters.js`

### 1 × `AssertionError: Expected values to be strictly equal: <n> !== <n> at :anonymous (<loc>) at _return (<loc>)`

distinct messages:
- `AssertionError: Expected values to be strictly equal:  24576 !== 8192
    at :anonymous (test-stream-readable-infinite-read.js:24:3)
    at _return (index.js:573:12)`
example test: `test/parallel/test-stream-readable-infinite-read.js`

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

2 !== 3

    at test-http-client-timeout-option-listeners.js:27:12
    at _return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)`
example test: `test/parallel/test-http-client-timeout-option-listeners.js`

### 1 × `AssertionError: Expected values to be strictly equal: <n> !== <n> at Duplex.<anonymous> (<loc>) at Duplex._return (<loc>) at Duplex.push (native) AssertionError`

distinct messages:
- `AssertionError: Expected values to be strictly equal:

4 !== 0

    at Duplex.<anonymous> (test-net-server-pause-on-connect.js:53:12)
    at Duplex._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at Duplex.push (native)
AssertionError: Expected values to be st`
example test: `test/parallel/test-net-server-pause-on-connect.js`

### 1 × `AssertionError: Expected values to be strictly equal: <n> !== <n> at test (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Expected values to be strictly equal:  18 !== 436
    at test (test-process-umask-mask.js:27:3)
    at :anonymous (test-process-umask-mask.js:32:1)
    at :program (test-process-umask-mask.js:1:1)`
example test: `test/parallel/test-process-umask-mask.js`

### 1 × `AssertionError: Expected values to be strictly equal: <n> !== <n> at Writable.<anonymous> (<loc>) at Writable.<anonymous> (<loc>) at Writable._return (<loc>)`

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

### 1 × `AssertionError: Expected values to be strictly equal: <n> !== null at Writable.<anonymous> (<loc>) at Writable._return (<loc>)`

distinct messages:
- `AssertionError: Expected values to be strictly equal:

3 !== null

    at Writable.<anonymous> (test-fs-write-stream-autoclose-option.js:30:14)
    at Writable._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)`
example test: `test/parallel/test-fs-write-stream-autoclose-option.js`

### 1 × `AssertionError: Expected values to be strictly equal: <str> !== <str> at :=> (<loc>) at _return (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Expected values to be strictly equal:  '��bar' !== '☃bar'
    at :=> (test-readline-reopen.js:39:5)
    at _return (index.js:573:12)
    at :anonymous (test-readline-reopen.js:24:1)
    at :program (test-readline-reopen.js:1:1)`
example test: `test/parallel/test-readline-reopen.js`

### 1 × `AssertionError: Expected values to be strictly equal: <str> !== <str> at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Expected values to be strictly equal:  'elide' !== 'foo'
    at :anonymous (test-process-title-cli.js:16:1)
    at :program (test-process-title-cli.js:1:1)`
example test: `test/parallel/test-process-title-cli.js`

### 1 × `AssertionError: Expected values to be strictly equal: <str> !== <str> at EventEmitter.<anonymous> (<loc>) at EventEmitter._return (<loc>) at EventEmitter.emit (`

distinct messages:
- `AssertionError: Expected values to be strictly equal:

'B\n' !== 'A\nB\n'

    at EventEmitter.<anonymous> (test-worker-stdio-from-preload-module.js:18:12)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)`
example test: `test/parallel/test-worker-stdio-from-preload-module.js`

### 1 × `AssertionError: Expected values to be strictly equal: false !== true at :=> (<loc>) at _return (<loc>)`

distinct messages:
- `AssertionError: Expected values to be strictly equal:  false !== true
    at :=> (test-stream-readable-object-multi-push-async.js:163:5)
    at _return (index.js:573:12)`
example test: `test/parallel/test-stream-readable-object-multi-push-async.js`

### 1 × `AssertionError: Expected values to be strictly equal: false !== true at <loc> at _return (<loc>)`

distinct messages:
- `AssertionError: Expected values to be strictly equal:

false !== true

    at test-http-outgoing-finished.js:19:12
    at _return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)`
example test: `test/parallel/test-http-outgoing-finished.js`

### 1 × `AssertionError: Expected values to be strictly equal: false !== true at Immediate.<anonymous> (<loc>) at Immediate._return (<loc>)`

distinct messages:
- `AssertionError: Expected values to be strictly equal:

false !== true

    at Immediate.<anonymous> (test-net-connect-memleak.js:54:12)
    at Immediate._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)`
example test: `test/parallel/test-net-connect-memleak.js`

### 1 × `AssertionError: Expected values to be strictly equal: false !== true at Writable.<anonymous> (<loc>) at Writable._return (<loc>) at Writable.emit (native)`

distinct messages:
- `AssertionError: Expected values to be strictly equal:

false !== true

    at Writable.<anonymous> (test-http-writable-true-after-close.js:16:12)
    at Writable._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at Writable.emit (native)`
example test: `test/parallel/test-http-writable-true-after-close.js`

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

### 1 × `AssertionError: Expected values to be strictly equal: true !== false at :anonymous (<loc>) at _return (<loc>)`

distinct messages:
- `AssertionError: Expected values to be strictly equal:  true !== false
    at :anonymous (test-stream-readable-needReadable.js:69:3)
    at _return (index.js:573:12)`
example test: `test/parallel/test-stream-readable-needReadable.js`

### 1 × `AssertionError: Expected values to be strictly equal: true !== false at Readable.<anonymous> (<loc>) at Readable._return (<loc>)`

distinct messages:
- `AssertionError: Expected values to be strictly equal:

true !== false

    at Readable.<anonymous> (test-stream2-readable-wrap-error.js:34:14)
    at Readable._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)`
example test: `test/parallel/test-stream2-readable-wrap-error.js`

### 1 × `AssertionError: Expected values to be strictly equal: undefined !== <n> at :=> (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Expected values to be strictly equal:  undefined !== 100
    at :=> (test-readline-promises-interface.js:57:3)
    at :anonymous (test-readline-promises-interface.js:49:1)
    at :program (test-readline-promises-interface.js:1:1)`
example test: `test/parallel/test-readline-promises-interface.js`

### 1 × `AssertionError: Expected values to be strictly equal: undefined !== <str> at :=> (<loc>) at _return (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Expected values to be strictly equal:  undefined !== 'asd'
    at :=> (test-webstreams-finished.js:35:5)
    at _return (index.js:573:12)
    at :anonymous (test-webstreams-finished.js:34:3)
    at :program (test-webstreams-finished.js:1:1)`
example test: `test/parallel/test-webstreams-finished.js`

### 1 × `AssertionError: flag should be in set: --perf_basic_prof false !== true at :=> (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: flag should be in set: --perf_basic_prof  false !== true
    at :=> (test-process-env-allowed-flags.js:35:5)
    at :anonymous (test-process-env-allowed-flags.js:34:3)
    at :program (test-process-env-allowed-flags.js:1:1)`
example test: `test/parallel/test-process-env-allowed-flags.js`

### 1 × `AssertionError: function onUncaught(error) {} at <loc> called with arguments: Error: Destroy test at EventEmitter.<anonymous> (<loc>) at EventEmitter._return (<`

distinct messages:
- `AssertionError: function onUncaught(error) {} at test-http-server-incomingmessage-destroy.js:13
called with arguments: Error: Destroy test
    at EventEmitter.<anonymous> (test-http-server-incomingmessage-destroy.js:8:15)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/tes`
example test: `test/parallel/test-http-server-incomingmessage-destroy.js`

### 1 × `AssertionError: function should not have been called at <loc> at mustNotCall (<loc>)`

distinct messages:
- `AssertionError: function should not have been called at test-stream-readable-next-no-null.js:19
    at mustNotCall (index.js:631:5)`
example test: `test/parallel/test-stream-readable-next-no-null.js`

### 1 × `AssertionError: function should not have been called at <loc> called with arguments: [Error: bind EADDRINUSE <n>.<n>:<n>] { code: <str>, errno: <n>, syscall: <s`

distinct messages:
- `AssertionError: function should not have been called at test-dgram-ipv6only.js:32
called with arguments: [Error: bind EADDRINUSE 0.0.0.0:50483] {
  code: 'EADDRINUSE',
  errno: 98,
  syscall: 'bind',
  address: '0.0.0.0',
  port: 50483
}
    at EventEmitter.mustNotCall (/work/.harness/work/node-api/`
example test: `test/parallel/test-dgram-ipv6only.js`

### 1 × `AssertionError: function should not have been called at <loc> called with arguments: [Error: Parse Error: Header overflow] { code: <str>, reason: <str>, bytesPa`

distinct messages:
- `AssertionError: function should not have been called at test-http-max-header-size-per-stream.js:58 called with arguments: [Error: Parse Error: Header overflow] {   code: 'HPE_HEADER_OVERFLOW',   reason: 'Header overflow',   bytesParsed: 35,   rawPacket: <Buffer 47 45 54 20 2f 20 48 54 54 50 2f 31 2e`
example test: `test/parallel/test-http-max-header-size-per-stream.js`

### 1 × `AssertionError: function should not have been called at <loc> called with arguments: [TypeError: Module not found: <str>] at EventEmitter.mustNotCall (<loc>) at`

distinct messages:
- `AssertionError: function should not have been called at test-worker-esm-exit.js:8
called with arguments: [TypeError: Module not found: './process-exit.mjs']
    at EventEmitter.mustNotCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:631:12)
    at EventEmitter.emit (native)`
example test: `test/parallel/test-worker-esm-exit.js`

### 1 × `AssertionError: function should not have been called at <loc> called with arguments: <Buffer <n> <n> <n> <n> <n> <n> <n> 6f <n> 3a <n> <n> <n> 6e <n> <n> <n> 6d`

distinct messages:
- `AssertionError: function should not have been called at test-child-process-ipc.js:38
called with arguments: <Buffer 54 79 70 65 45 72 72 6f 72 3a 20 28 69 6e 74 65 72 6d 65 64 69 61 74 65 20 76 61 6c 75 65 29 2e 6f 70 65 6e 53 74 64 69 6e 20 69 73 20 6e 6f 74 20 61 ... 74 more bytes>
    at Readable`
example test: `test/parallel/test-child-process-ipc.js`

### 1 × `AssertionError: function should not have been called at <loc> called with arguments: <ref *<n>> IncomingMessage [Readable] { socket: <ref *<n>> Socket [Duplex] `

distinct messages:
- `AssertionError: function should not have been called at test-http-upgrade-server-callback.js:110
called with arguments: <ref *1> IncomingMessage [Readable] {
  socket: <ref *2> Socket [Duplex] {
    _handle: {},
    _allowHalfOpen: true,
    _noDelay: true,
    connecting: false,
    _connected: tru`
example test: `test/parallel/test-http-upgrade-server-callback.js`

### 1 × `AssertionError: function should not have been called at <loc> called with arguments: <ref *<n>> Socket [Duplex] { _handle: null, _allowHalfOpen: true, _noDelay:`

distinct messages:
- `AssertionError: function should not have been called at test-http-set-timeout-server.js:100
called with arguments: <ref *1> Socket [Duplex] {
  _handle: null,
  _allowHalfOpen: true,
  _noDelay: true,
  connecting: false,
  _connected: true,
  _readableEnded: false,
  _writableFinished: false,
  _en`
example test: `test/parallel/test-http-set-timeout-server.js`

### 1 × `AssertionError: function should not have been called at <loc> called with arguments: Error at <loc> at <loc>, [ CallSite {}, CallSite {} ] at mustNotCall (<loc>`

distinct messages:
- `AssertionError: function should not have been called at test-util-getcallsites-preparestacktrace.js:10 called with arguments: Error     at test-util-getcallsites-preparestacktrace.js:12:15     at test-util-getcallsites-preparestacktrace.js:1:1, [ CallSite {}, CallSite {} ]
    at mustNotCall (index.`
example test: `test/parallel/test-util-getcallsites-preparestacktrace.js`

### 1 × `AssertionError: function should not have been called at <loc> called with arguments: null, <n> at Object.mustNotCall (<loc>)`

distinct messages:
- `AssertionError: function should not have been called at test-dgram-oob-buffer.js:36
called with arguments: null, 0
    at Object.mustNotCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:631:12)`
example test: `test/parallel/test-dgram-oob-buffer.js`

### 1 × `AssertionError: get %Object.prototype%.main at <loc> at mustNotCall (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: get %Object.prototype%.main at test-module-prototype-mutation.js:23
    at mustNotCall (index.js:631:5)
    at :anonymous (test-module-prototype-mutation.js:47:3)
    at :program (test-module-prototype-mutation.js:1:1)`
example test: `test/parallel/test-module-prototype-mutation.js`

### 1 × `AssertionError: got data after abort at Readable.<anonymous> (<loc>) at Readable._return (<loc>)`

distinct messages:
- `AssertionError: got data after abort
    at Readable.<anonymous> (test-http-abort-stream-end.js:45:7)
    at Readable._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)`
example test: `test/parallel/test-http-abort-stream-end.js`

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

### 1 × `AssertionError: listen EIO: unknown error /work/.harness/work/node-api/node-test/.tmp.<n>/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`

distinct messages:
- `AssertionError: listen EIO: unknown error /work/.harness/work/node-api/node-test/.tmp.2064/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`
example test: `test/parallel/test-net-pipe-with-long-path.js`

### 1 × `AssertionError: Missing expected exception (DataCloneError): Should throw DataCloneError when posting uncloneables at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Missing expected exception (DataCloneError): Should throw DataCloneError when posting uncloneables
    at :anonymous (test-worker-message-mark-as-uncloneable.js:15:3)
    at :program (test-worker-message-mark-as-uncloneable.js:1:1)`
example test: `test/parallel/test-worker-message-mark-as-uncloneable.js`

### 1 × `AssertionError: Missing expected exception (Error). at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Missing expected exception (Error).
    at :anonymous (test-worker-execargv-invalid.js:30:3)
    at :program (test-worker-execargv-invalid.js:1:1)`
example test: `test/parallel/test-worker-execargv-invalid.js`

### 1 × `AssertionError: Missing expected exception (URIError). at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Missing expected exception (URIError).
    at :anonymous (test-querystring.js:295:1)
    at :program (test-querystring.js:1:1)`
example test: `test/parallel/test-querystring.js`

### 1 × `AssertionError: Missing expected exception: parsing http://fail⁇fail.com/ at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Missing expected exception: parsing http://fail⁇fail.com/
    at :anonymous (test-url-parse-invalid-input.js:68:5)
    at :program (test-url-parse-invalid-input.js:1:1)`
example test: `test/parallel/test-url-parse-invalid-input.js`

### 1 × `AssertionError: Missing expected exception. at <loc> at <loc>`

distinct messages:
- `AssertionError: Missing expected exception.
    at test-worker-unsupported-things.js:31:12
    at test-worker-unsupported-things.js:1:1`
example test: `test/parallel/test-worker-unsupported-things.js`

### 1 × `AssertionError: Missing expected exception. at Duplex.<anonymous> (<loc>) at Duplex._return (<loc>) at Duplex.push (native)`

distinct messages:
- `AssertionError: Missing expected exception.
    at Duplex.<anonymous> (test-child-process-disconnect.js:96:18)
    at Duplex._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at Duplex.push (native)`
example test: `test/parallel/test-child-process-disconnect.js`

### 1 × `AssertionError: process should have aborted, but did not at onTestDone (<loc>) at onTestDone (<loc>) at EventEmitter.emit (native)`

distinct messages:
- `AssertionError: process should have aborted, but did not
    at onTestDone (test-domain-throw-error-then-throw-from-uncaught-exception-handler.js:79:5)
    at onTestDone (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)`
example test: `test/parallel/test-domain-throw-error-then-throw-from-uncaught-exception-handler.js`

### 1 × `AssertionError: process.execve should not have been allowed. at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: process.execve should not have been allowed.
    at :anonymous (test-process-execve-permission-fail.js:16:3)
    at :program (test-process-execve-permission-fail.js:1:1)`
example test: `test/parallel/test-process-execve-permission-fail.js`

### 1 × `AssertionError: Test index <n> failed: Error: Command failed: ulimit -c <n> && <str> --abort-on-uncaught-exception <str> child ${ESCAPED_2} at :anonymous (<loc>`

distinct messages:
- `AssertionError: Test index 6 failed: Error: Command failed: ulimit -c 0 && "${ESCAPED_0}" --abort-on-uncaught-exception "${ESCAPED_1}" child ${ESCAPED_2}
    at :anonymous (test-domain-abort-on-uncaught.js:215:7)
    at :anonymous (test-domain-abort-on-uncaught.js:204:3)
    at :program (test-domain`
example test: `test/parallel/test-domain-abort-on-uncaught.js`

### 1 × `AssertionError: The <str> validation function is expected to return <str>. Received false Caught error: TypeError: The <str> argument must be of type object. Re`

distinct messages:
- `AssertionError: The "checkErr" validation function is expected to return "true". Received false  Caught error:  TypeError: The "options" argument must be of type object. Received type string (test-boom-error)
    at :anonymous (test-vm-basic.js:94:3)
    at :program (test-vm-basic.js:1:1)`
example test: `test/parallel/test-vm-basic.js`

### 1 × `AssertionError: The error is expected to be an instance of <str>. Received <str> Error message: process.abort() is not implemented at :anonymous (<loc>) at :pro`

distinct messages:
- `AssertionError: The error is expected to be an instance of "TypeError". Received "Error"  Error message:  process.abort() is not implemented
    at :anonymous (test-process-abort.js:14:1)
    at :program (test-process-abort.js:1:1)`
example test: `test/parallel/test-process-abort.js`

### 1 × `AssertionError: The expression evaluated to a falsy value: assert.ok(e._events.default.warned) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: The expression evaluated to a falsy value:    assert.ok(e._events.default.warned)
    at :anonymous (test-event-emitter-check-listener-leaks.js:37:3)
    at :program (test-event-emitter-check-listener-leaks.js:1:1)`
example test: `test/parallel/test-event-emitter-check-listener-leaks.js`

### 1 × `AssertionError: The expression evaluated to a falsy value: assert.ok(isMarkedAsUntransferable(ab)) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: The expression evaluated to a falsy value:    assert.ok(isMarkedAsUntransferable(ab))
    at :anonymous (test-worker-message-transfer-port-mark-as-untransferable.js:10:3)
    at :program (test-worker-message-transfer-port-mark-as-untransferable.js:1:1)`
example test: `test/parallel/test-worker-message-transfer-port-mark-as-untransferable.js`

### 1 × `AssertionError: The expression evaluated to a falsy value: assert.ok(Object.hasOwn(statfs, k)) at :=> (<loc>) at verifyStatFsObject (<loc>) at :anonymous (<loc>`

distinct messages:
- `AssertionError: The expression evaluated to a falsy value:    assert.ok(Object.hasOwn(statfs, k))
    at :=> (test-fs-statfs.js:12:5)
    at verifyStatFsObject (test-fs-statfs.js:9:3)
    at :anonymous (test-fs-statfs.js:31:3)
    at :program (test-fs-statfs.js:1:1)`
example test: `test/parallel/test-fs-statfs.js`

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

### 1 × `AssertionError: The expression evaluated to a falsy value: assert.ok(typeof JSON.parse(JSON.stringify(nodeTiming))[p] === at :anonymous (<loc>) at :program (<lo`

distinct messages:
- `AssertionError: The expression evaluated to a falsy value:    assert.ok(typeof JSON.parse(JSON.stringify(nodeTiming))[p] ===
    at :anonymous (test-perf-hooks-eventlooputilization.js:32:3)
    at :program (test-perf-hooks-eventlooputilization.js:1:1)`
example test: `test/parallel/test-perf-hooks-eventlooputilization.js`

### 1 × `AssertionError: The expression evaluated to a falsy value: assert(!agent.requests[key]) at Duplex.<anonymous> (<loc>) at Duplex._return (<loc>)`

distinct messages:
- `AssertionError: The expression evaluated to a falsy value:

  assert(!agent.requests[key])

    at Duplex.<anonymous> (test-http-agent-destroyed-socket.js:53:9)
    at Duplex._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)`
example test: `test/parallel/test-http-agent-destroyed-socket.js`

### 1 × `AssertionError: The expression evaluated to a falsy value: assert(cachedData instanceof Buffer) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: The expression evaluated to a falsy value:    assert(cachedData instanceof Buffer)
    at :anonymous (test-vm-createcacheddata.js:12:1)
    at :program (test-vm-createcacheddata.js:1:1)`
example test: `test/parallel/test-vm-createcacheddata.js`

### 1 × `AssertionError: The expression evaluated to a falsy value: assert(e.toString().match(/Error: Cannot find module/)) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: The expression evaluated to a falsy value:    assert(e.toString().match(/Error: Cannot find module/))
    at :anonymous (test-module-main-preserve-symlinks-fail.js:15:7)
    at :program (test-module-main-preserve-symlinks-fail.js:1:1)`
example test: `test/parallel/test-module-main-preserve-symlinks-fail.js`

### 1 × `AssertionError: The expression evaluated to a falsy value: assert(inspection.includes(<str>)) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: The expression evaluated to a falsy value:    assert(inspection.includes('refed: false'))
    at :anonymous (test-worker-message-port-inspect-during-init-hook.js:22:1)
    at :program (test-worker-message-port-inspect-during-init-hook.js:1:1)`
example test: `test/parallel/test-worker-message-port-inspect-during-init-hook.js`

### 1 × `AssertionError: The expression evaluated to a falsy value: assert(name in agent.sockets) at EventEmitter.<anonymous> (<loc>) at EventEmitter._return (<loc>) at `

distinct messages:
- `AssertionError: The expression evaluated to a falsy value:

  assert(name in agent.sockets)

    at EventEmitter.<anonymous> (test-http-client-override-global-agent.js:17:3)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.em`
example test: `test/parallel/test-http-client-override-global-agent.js`

### 1 × `AssertionError: The input did not match the regular expression /^<n>|<n>$/. Input: <str> at Object.<anonymous> (<loc>) at Object._return (<loc>) at EventEmitter`

distinct messages:
- `AssertionError: The input did not match the regular expression /^2|3$/. Input:

'1'

    at Object.<anonymous> (test-net-server-keepalive.js:13:12)
    at Object._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.<anonymous> (test-net-server-keepa`
example test: `test/parallel/test-net-server-keepalive.js`

### 1 × `AssertionError: The input did not match the regular expression /^Parse Error/. Input: <str> at EventEmitter.<anonymous> (<loc>) at EventEmitter._return (<loc>) `

distinct messages:
- `AssertionError: The input did not match the regular expression /^Parse Error/. Input:

'Connection closed before message completed'

    at EventEmitter.<anonymous> (test-http-parser-finish-error.js:14:10)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.j`
example test: `test/parallel/test-http-parser-finish-error.js`

### 1 × `AssertionError: The input did not match the regular expression /^ReferenceError: foo is not defined$/. Input: <str>bar<str> at :anonymous (<loc>) at :program (<`

distinct messages:
- `AssertionError: The input did not match the regular expression /^ReferenceError: foo is not defined$/. Input:  'TypeError: Cannot set property 'bar' of undefined'
    at :anonymous (test-vm-new-script-new-context.js:46:3)
    at :program (test-vm-new-script-new-context.js:1:1)`
example test: `test/parallel/test-vm-new-script-new-context.js`

### 1 × `AssertionError: The input did not match the regular expression /^Sat Apr <n> <n> <n><loc> GMT\+<n> \(.+\)$/. Input: <str> at :anonymous (<loc>) at :program (<lo`

distinct messages:
- `AssertionError: The input did not match the regular expression /^Sat Apr 14 2018 14:34:56 GMT\+0200 \(.+\)$/. Input:  'Sat Apr 14 2018 12:34:56 GMT+0000 (GMT+0)'
    at :anonymous (test-process-env-tz.js:32:1)
    at :program (test-process-env-tz.js:1:1)`
example test: `test/parallel/test-process-env-tz.js`

### 1 × `AssertionError: The input did not match the regular expression /AtomicsLoad/. Input: <str>.<str> at <loc> at <loc>`

distinct messages:
- `AssertionError: The input did not match the regular expression /AtomicsLoad/. Input:

'function cwd() {
      return __elideNodeApiProcess.env.NODE_API_OVERLAY_CWD || '.';
    }'

    at test-worker-process-cwd.js:35:10
    at test-worker-process-cwd.js:1:1`
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

### 1 × `AssertionError: The input did not match the regular expression /Cannot delete property <str> of #<process>/. Input: <str> at :anonymous (<loc>) at :program (<lo`

distinct messages:
- `AssertionError: The input did not match the regular expression /Cannot delete property 'exitCode' of #<process>/. Input:  'TypeError: "exitCode" is not a configurable property'
    at :anonymous (test-process-exit-code-validation.js:121:3)
    at :program (test-process-exit-code-validation.js:1:1)`
example test: `test/parallel/test-process-exit-code-validation.js`

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

### 1 × `AssertionError: The input did not match the regular expression /ERR_INVALID_ARG_TYPE/. Input: <str>badValue<str> at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: The input did not match the regular expression /ERR_INVALID_ARG_TYPE/. Input:  'TypeError: The "options.timeout" property must be of type number. Received type string ('badValue')'
    at :anonymous (test-child-process-spawn-timeout-kill-signal.js:29:3)
    at :program (test-child-pr`
example test: `test/parallel/test-child-process-spawn-timeout-kill-signal.js`

### 1 × `AssertionError: The input did not match the regular expression /ERR_MISSING_ARGS/. Input: <str> at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: The input did not match the regular expression /ERR_MISSING_ARGS/. Input:  'TypeError: The "streams" argument must be specified'
    at :anonymous (test-stream-pipeline.js:63:3)
    at :program (test-stream-pipeline.js:1:1)`
example test: `test/parallel/test-stream-pipeline.js`

### 1 × `AssertionError: The input did not match the regular expression /ERR_OUT_OF_RANGE/. Input: <str> at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: The input did not match the regular expression /ERR_OUT_OF_RANGE/. Input:  'RangeError: The value of "number" is out of range. It must be >= 0. Received -1'
    at :anonymous (test-stream-drop-take.js:116:5)
    at :program (test-stream-drop-take.js:1:1)`
example test: `test/parallel/test-stream-drop-take.js`

### 1 × `AssertionError: The input did not match the regular expression /ERR_OUT_OF_RANGE|ERR_INVALID_ARG_TYPE/i. Input: <str> at :=> (<loc>) at :anonymous (<loc>) at :p`

distinct messages:
- `AssertionError: The input did not match the regular expression /ERR_OUT_OF_RANGE|ERR_INVALID_ARG_TYPE/i. Input:  'RangeError: The value of "options.maxTimeout" is out of range. It must be an integer. Received -1'
    at :=> (test-dns-resolver-max-timeout.js:20:3)
    at :anonymous (test-dns-resolver`
example test: `test/parallel/test-dns-resolver-max-timeout.js`

### 1 × `AssertionError: The input did not match the regular expression /MODULE_NOT_FOUND/. Input: <str> at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: The input did not match the regular expression /MODULE_NOT_FOUND/. Input:  'Error: Command failed: /opt/elide/bin/elide'
    at :anonymous (test-module-main-fail.js:14:5)
    at :program (test-module-main-fail.js:1:1)`
example test: `test/parallel/test-module-main-fail.js`

### 1 × `AssertionError: The input did not match the regular expression /The <str> argument must be of type string/. Input: <str> at :=> (<loc>) at :anonymous (<loc>) at`

distinct messages:
- `AssertionError: The input did not match the regular expression /The "content" argument must be of type string/. Input:  'TypeError: isStringOneByteRepresentation is not a function'
    at :=> (test-v8-string-is-one-byte-representation.js:16:3)
    at :anonymous (test-v8-string-is-one-byte-representa`
example test: `test/parallel/test-v8-string-is-one-byte-representation.js`

### 1 × `AssertionError: The input did not match the regular expression /TypeError \[ERR_INVALID_ARG_TYPE\]: The <str> argument must be of type function/. Input: <str> a`

distinct messages:
- `AssertionError: The input did not match the regular expression /TypeError \[ERR_INVALID_ARG_TYPE\]: The "callback" argument must be of type function/. Input:  'TypeError: The "cb" argument must be of type function. Received undefined'
    at :anonymous (test-fs-opendir.js:111:1)
    at :program (tes`
example test: `test/parallel/test-fs-opendir.js`

### 1 × `AssertionError: The validation function is expected to return <str>. Received false Caught error: TypeError: (intermediate value).dlopen is not a function at :a`

distinct messages:
- `AssertionError: The validation function is expected to return "true". Received false  Caught error:  TypeError: (intermediate value).dlopen is not a function
    at :anonymous (test-process-dlopen-error-message-crash.js:15:1)
    at :program (test-process-dlopen-error-message-crash.js:1:1)`
example test: `test/parallel/test-process-dlopen-error-message-crash.js`

### 1 × `AssertionError: The validation function is expected to return <str>. Received false Caught error: TypeError: Cannot load module: <str>: ../fixtures/module-loadi`

distinct messages:
- `AssertionError: The validation function is expected to return "true". Received false  Caught error:  TypeError: Cannot load module: 'Unsupported .node file: ': ../fixtures/module-loading-error.node
    at :anonymous (test-module-loading-error.js:58:1)
    at :program (test-module-loading-error.js:1:`
example test: `test/parallel/test-module-loading-error.js`

### 1 × `AssertionError: The validation function is expected to return <str>. Received false Caught error: TypeError: The <str> argument must be of type object. Received`

distinct messages:
- `AssertionError: The validation function is expected to return "true". Received false  Caught error:  TypeError: The "options" argument must be of type object. Received type string (test_file.vm)
    at :anonymous (test-vm-run-in-new-context.js:80:3)
    at :program (test-vm-run-in-new-context.js:1:1`
example test: `test/parallel/test-vm-run-in-new-context.js`

### 1 × `AssertionError: TypeError: Cannot read property <str> of undefined at :anonymous (<loc>) at :program (<loc>) <n> !== <n> at :anonymous (<loc>) at :program (<loc`

distinct messages:
- `AssertionError: TypeError: Cannot read property 'loopCount' of undefined     at :anonymous (test-nodetiming-uvmetricsinfo.js:18:22)     at :program (test-nodetiming-uvmetricsinfo.js:1:1)   1 !== 0
    at :anonymous (test-performance-nodetiming-uvmetricsinfo.js:23:3)
    at :program (test-performance`
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

### 1 × `AssertionError: Values have same structure but are not reference-equal: ArrayBuffer { [Uint8Contents]: <<n> <n> 6c 6c 6f <n> <n> 6f <n> 6c <n>>, [byteLength]: <`

distinct messages:
- `AssertionError: Values have same structure but are not reference-equal:  ArrayBuffer {   [Uint8Contents]: <68 65 6c 6c 6f 20 77 6f 72 6c 64>,   [byteLength]: 11 }
    at :anonymous (test-buffer-pool-untransferable.js:12:1)
    at :program (test-buffer-pool-untransferable.js:1:1)`
example test: `test/parallel/test-buffer-pool-untransferable.js`

### 1 × `com.oracle.truffle.api.dsl.UnsupportedSpecializationException: Unexpected values provided for JSToObjectNodeGen.Uncached@76ffc494: [dev.elide.lang.javascript.no`

distinct messages:
- `com.oracle.truffle.api.dsl.UnsupportedSpecializationException: Unexpected values provided for JSToObjectNodeGen.Uncached@76ffc494: [dev.elide.lang.javascript.node.events.JSEventEmitter$BorrowedEmitterState@47fcd2a0], [BorrowedEmitterState]
    at :anonymous (native)
    at :program (test-fs-stream-c`
example test: `test/parallel/test-fs-stream-construct-compat-old-node.js`

### 1 × `Error at <loc> at <loc>`

distinct messages:
- `Error
    at test-worker-exit-from-uncaught-exception.js:23:7
    at test-worker-exit-from-uncaught-exception.js:1:1`
example test: `test/parallel/test-worker-exit-from-uncaught-exception.js`

### 1 × `Error: connect ECONNREFUSED ::<n>:<n>`

distinct messages:
- `Error: connect ECONNREFUSED ::1:41105`
example test: `test/parallel/test-net-autoselectfamily-default.js`

### 1 × `Error: connect ECONNREFUSED <n><loc><loc><loc><loc>`

distinct messages:
- `Error: connect ECONNREFUSED 0:0:0:0:0:0:0:1:36853`
example test: `test/parallel/test-http-autoselectfamily.js`

### 1 × `Error: EEXIST: file already exists, open <str> at Error.get stack (native)`

distinct messages:
- `Error: EEXIST: file already exists, open '/work/.harness/work/node-api/node-test/.tmp.973/dummy'
    at Error.get stack (native)`
example test: `test/parallel/test-fs-stream-construct-compat-error-write.js`

### 1 × `Error: EIO: i/o error, read at Error.get stack (native) AssertionError: The expression evaluated to a falsy value: assert(!file.closed) at process.<anonymous> (`

distinct messages:
- `Error: EIO: i/o error, read
    at Error.get stack (native)
AssertionError: The expression evaluated to a falsy value:

  assert(!file.closed)

    at process.<anonymous> (test-fs-read-stream.js:261:5)`
example test: `test/parallel/test-fs-read-stream.js`

### 1 × `Error: EIO: i/o error, write at :anonymous (<loc>) at :program (<loc>) AssertionError: The expression evaluated to a falsy value: assert(ok) at :anonymous (<loc`

distinct messages:
- `Error: EIO: i/o error, write
    at :anonymous (test-fs-write-sigxfsz.js:20:3)
    at :program (test-fs-write-sigxfsz.js:1:1)

AssertionError: The expression evaluated to a falsy value:    assert(ok)
    at :anonymous (test-fs-write-sigxfsz.js:28:3)
    at :program (test-fs-write-sigxfsz.js:1:1)`
example test: `test/parallel/test-fs-write-sigxfsz.js`

### 1 × `Error: ENOENT: no such file or directory, scandir <str> at testSync (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `Error: ENOENT: no such file or directory, scandir '../node-test/.tmp.983/relative-path-relative-target-sync'
    at testSync (test-fs-symlink-dir.js:31:3)
    at :anonymous (test-fs-symlink-dir.js:48:5)
    at :program (test-fs-symlink-dir.js:1:1)`
example test: `test/parallel/test-fs-symlink-dir.js`

### 1 × `Error: fail at read (<loc>)`

distinct messages:
- `Error: fail
    at read (test-stream-auto-destroy.js:103:7)`
example test: `test/parallel/test-stream-auto-destroy.js`

### 1 × `Error: fhqwhgads at :=> (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `Error: fhqwhgads
    at :=> (test-util-primordial-monkeypatching.js:10:29)
    at :anonymous (test-util-primordial-monkeypatching.js:11:20)
    at :program (test-util-primordial-monkeypatching.js:1:1)`
example test: `test/parallel/test-util-primordial-monkeypatching.js`

### 1 × `Error: node:worker_threads: moveMessagePortToContext is not implemented yet in Elide at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `Error: node:worker_threads: moveMessagePortToContext is not implemented yet in Elide
    at :anonymous (test-worker-message-port-move.js:12:16)
    at :program (test-worker-message-port-move.js:1:1)`
example test: `test/parallel/test-worker-message-port-move.js`

### 1 × `Error: should be caught by domain at Readable.<anonymous> (<loc>)`

distinct messages:
- `Error: should be caught by domain
    at Readable.<anonymous> (test-http-client-response-domain.js:59:25)`
example test: `test/parallel/test-http-client-response-domain.js`

### 1 × `Error: socket hang up`

distinct messages:
- `Error: socket hang up`
example test: `test/parallel/test-http-generic-streams.js`

### 1 × `error: unexpected argument <str> found tip: to pass <str> as a value, use <str> Usage: elide [OPTIONS] [FILE] [-- <SCRIPT_ARGS>...] [COMMAND] For more informati`

distinct messages:
- `error: unexpected argument '--expose-internals' found

  tip: to pass '--expose-internals' as a value, use '-- --expose-internals'

Usage: elide [OPTIONS] [FILE] [-- <SCRIPT_ARGS>...] [COMMAND]

For more information, try '--help'.
TypeError: Cannot read property 'close' of null
    at EventEmitter.<`
example test: `test/parallel/test-child-process-recv-handle.js`

### 1 × `expected domains stack length of <n>, but instead is <n>`

distinct messages:
- `expected domains stack length of 0, but instead is 1`
example test: `test/parallel/test-domain-emit-error-handler-stack.js`

### 1 × `Fatal error (java.lang.OutOfMemoryError): Could not allocate an unaligned heap chunk because the heap address space is exhausted. Consider re-building the image`

distinct messages:
- `Fatal error (java.lang.OutOfMemoryError): Could not allocate an unaligned heap chunk because the heap address space is exhausted. Consider re-building the image with compressed references disabled ('-H:-UseCompressedReferences').
java.lang.OutOfMemoryError: Could not allocate an unaligned heap chunk`
example test: `test/parallel/test-zlib-params.js`

### 1 × `fhqwhgads`

distinct messages:
- `fhqwhgads`
example test: `test/parallel/test-console-stdio-setters.js`

### 1 × `foo foo bar foo bar hop { slashes: <str> } inspect foo foo bar foo bar hop { slashes: <str> } inspect Trace: This is a {<str>:<str>} <n> foo at <loc> at <loc> A`

distinct messages:
- `foo
foo bar
foo bar hop
{ slashes: '\\\\' }
inspect
foo
foo bar
foo bar hop
{ slashes: '\\\\' }
inspect
Trace: This is a {"formatted":"trace"} 10 foo
    at test-console.js:148:9
    at test-console.js:1:1
Assertion failed: console.assert should not throw
Assertion failed
AssertionError: Expected va`
example test: `test/parallel/test-console.js`

### 1 × `In URL: Setting <https://github.com/>.username = <str> Unpaired low surrogate <n>: AssertionError: Expected values to be strictly equal: + actual - expected + <`

distinct messages:
- `In URL: Setting <https://github.com/>.username = "?" Unpaired low surrogate 1:
AssertionError: Expected values to be strictly equal: + actual - expected  + 'https://%3F@github.com/' - 'https://%EF%BF%BD@github.com/'
    at :anonymous (test-whatwg-url-custom-setters.js:35:11)
    at test (wpt.js:158:`
example test: `test/parallel/test-whatwg-url-custom-setters.js`

### 1 × `java.lang.IllegalArgumentException: Last unit does not have enough valid bits at produce (<loc>) at testProduceConsume (<loc>) at :anonymous (<loc>) at :program`

distinct messages:
- `java.lang.IllegalArgumentException: Last unit does not have enough valid bits
    at produce (test-vm-cached-data.js:35:10)
    at testProduceConsume (test-vm-cached-data.js:41:16)
    at :anonymous (test-vm-cached-data.js:52:1)
    at :program (test-vm-cached-data.js:1:1)`
example test: `test/parallel/test-vm-cached-data.js`

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

### 1 × `Mismatched <anonymous> function calls. Expected exactly <n>, actual <n>. at Proxy.mustCall (<loc>) at Duplex.<anonymous> (<loc>) at Duplex._return (<loc>) at Du`

distinct messages:
- `Mismatched <anonymous> function calls. Expected exactly 1, actual 0.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at Duplex.<anonymous> (test-http-server-close-idle.js:48:27)
    at Duplex._return (/work/.harness/work/node-api/node-api-overlay`
example test: `test/parallel/test-http-server-close-idle.js`

### 1 × `Mismatched <anonymous> function calls. Expected exactly <n>, actual <n>. at Proxy.mustCall (<loc>) at testCwd (<loc>) at <loc> at <loc>`

distinct messages:
- `Mismatched <anonymous> function calls. Expected exactly 1, actual 0.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at testCwd (test-child-process-cwd.js:54:28)
    at test-child-process-cwd.js:71:3
    at test-child-process-cwd.js:1:1`
example test: `test/parallel/test-child-process-cwd.js`

### 1 × `Mismatched endCallback function calls. Expected exactly <n>, actual <n>. at Proxy.mustCall (<loc>) at Writable.requestCallback (<loc>) at Writable.requestCallba`

distinct messages:
- `Mismatched endCallback function calls. Expected exactly 1, actual 0.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at Writable.requestCallback (test-http-client-readable.js:67:24)
    at Writable.requestCallback (/work/.harness/work/node-api/no`
example test: `test/parallel/test-http-client-readable.js`

### 1 × `Mismatched listener function calls. Expected exactly <n>, actual <n>. at Proxy.mustCall (<loc>) at expect (<loc>) at <loc> at <loc>`

distinct messages:
- `Mismatched listener function calls. Expected exactly 3, actual 2.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at expect (test-event-emitter-remove-all-listeners.js:36:17)
    at test-event-emitter-remove-all-listeners.js:71:27
    at test-eve`
example test: `test/parallel/test-event-emitter-remove-all-listeners.js`

### 1 × `Mismatched noop function calls. Expected at least <n>, actual <n>. at Proxy.mustCallAtLeast (<loc>) at <loc> at _return (<loc>)`

distinct messages:
- `Mismatched noop function calls. Expected at least 2, actual 1.
    at Proxy.mustCallAtLeast (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:543:10)
    at test-async-hooks-enable-during-promise.js:9:19
    at _return (/work/.harness/work/node-api/node-api-overlay/test/common/inde`
example test: `test/parallel/test-async-hooks-enable-during-promise.js`

### 1 × `Mismatched noop function calls. Expected exactly <n>, actual <n>. at Proxy.mustCall (<loc>) at <loc>`

distinct messages:
- `Mismatched noop function calls. Expected exactly 1, actual 0.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at test-fs-write-stream-file-handle.js:12:29`
example test: `test/parallel/test-fs-write-stream-file-handle.js`

### 1 × `Mismatched noop function calls. Expected exactly <n>, actual <n>. at Proxy.mustCall (<loc>) at <loc> at <loc> Mismatched <anonymous> function calls. Expected ex`

distinct messages:
- `Mismatched noop function calls. Expected exactly 1, actual 0.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at test-async-hooks-enable-recursive.js:8:16
    at test-async-hooks-enable-recursive.js:1:1
Mismatched <anonymous> function calls. Expe`
example test: `test/parallel/test-async-hooks-enable-recursive.js`

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

### 1 × `RangeError: Maximum call stack size exceeded at _mustCallInner (<loc>) at mustCall (<loc>) at recurse (<loc>) at :=> (<loc>) at _return (<loc>) at recurse (<loc`

distinct messages:
- `RangeError: Maximum call stack size exceeded
    at _mustCallInner (index.js:562:12)
    at mustCall (index.js:531:10)
    at recurse (test-async-hooks-recursive-stack-runInAsyncScope.js:10:21)
    at :=> (test-async-hooks-recursive-stack-runInAsyncScope.js:14:7)
    at _return (index.js:573:12)
   `
example test: `test/parallel/test-async-hooks-recursive-stack-runInAsyncScope.js`

### 1 × `RangeError: Maximum call stack size exceeded at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `RangeError: Maximum call stack size exceeded
    at :anonymous (test-util-inspect-long-running.js:20:1)
    at :program (test-util-inspect-long-running.js:1:1)`
example test: `test/parallel/test-util-inspect-long-running.js`

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

### 1 × `SyntaxError: Unexpected end of JSON input at JSON.parse (native) at Readable.<anonymous> (<loc>) at Readable._return (<loc>) at SyntaxError.get stack (native)`

distinct messages:
- `SyntaxError: Unexpected end of JSON input
    at JSON.parse (native)
    at Readable.<anonymous> (test-process-exec-argv.js:61:37)
    at Readable._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at SyntaxError.get stack (native)`
example test: `test/parallel/test-process-exec-argv.js`

### 1 × `SyntaxError: Unexpected token A in JSON at position <n> at JSON.parse (native) at Readable.<anonymous> (<loc>) at SyntaxError.get stack (native) AssertionError:`

distinct messages:
- `SyntaxError: Unexpected token A in JSON at position 0
    at JSON.parse (native)
    at Readable.<anonymous> (test-domain-http-server.js:107:18)
    at SyntaxError.get stack (native)
AssertionError: Expected values to be strictly equal:

0 !== 2

    at process.<anonymous> (test-domain-http-server.j`
example test: `test/parallel/test-domain-http-server.js`

### 1 × `TAP version <n> # Subtest: Assert class destructuring behavior - diff option not ok <n> - Assert class destructuring behavior - diff option --- duration_ms: <n>`

distinct messages:
- `TAP version 13
# Subtest: Assert class destructuring behavior - diff option
not ok 1 - Assert class destructuring behavior - diff option
  ---
  duration_ms: 1
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
  duration_ms: 3
  failureType: 'testCodeFailure'
  error: "Expected values to be strictly deep-equal:\n+ actual - expected\n\n  Comparison {\n-   code: 'ERR_CONSTRUCT_CALL_REQUIRED',\n    name`
example test: `test/parallel/test-assert-class.js`

### 1 × `TAP version <n> # Subtest: CJS: --experimental-package-map # Subtest: basic resolution # Subtest: resolves require() through package map not ok <n> - resolves r`

distinct messages:
- `TAP version 13
# Subtest: CJS: --experimental-package-map
    # Subtest: basic resolution
        # Subtest: resolves require() through package map
        not ok 1 - resolves require() through package map
          ---
          duration_ms: 71
          failureType: 'testCodeFailure'
          err`
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

### 1 × `TAP version <n> # Subtest: deepEqual ok <n> - deepEqual # Subtest: loose deepEqual not ok <n> - loose deepEqual --- duration_ms: <n> failureType: <str> error: <`

distinct messages:
- `TAP version 13
# Subtest: deepEqual
ok 1 - deepEqual
# Subtest: loose deepEqual
not ok 2 - loose deepEqual
  ---
  duration_ms: 0
  failureType: 'testCodeFailure'
  error: "Expected values to be loosely deep-equal:\n\n[\n  null,\n  undefined,\n  undefined\n]\n\nshould loosely deep-equal\n\n[\n  null`
example test: `test/parallel/test-assert-deep.js`

### 1 × `TAP version <n> # Subtest: ensure the assert.ok throwing similar error messages for esm and cjs files # Subtest: should return code <n> for each command not ok `

distinct messages:
- `TAP version 13
# Subtest: ensure the assert.ok throwing similar error messages for esm and cjs files
    # Subtest: should return code 1 for each command
    not ok 1 - should return code 1 for each command
      ---
      duration_ms: 46
      failureType: 'testCodeFailure'
      error: "Expected v`
example test: `test/parallel/test-assert-esm-cjs-message-verify.js`

### 1 × `TAP version <n> # Subtest: format slightly wonky content to a valid URL not ok <n> - format slightly wonky content to a valid URL --- duration_ms: <n> failureTy`

distinct messages:
- `TAP version 13
# Subtest: format slightly wonky content to a valid URL
not ok 1 - format slightly wonky content to a valid URL
  ---
  duration_ms: 4
  failureType: 'testCodeFailure'
  error: "wonky format(http://google.com\" onload=\"alert(42)/) == http://google.com/%22%20onload=%22alert(42)/\nactu`
example test: `test/parallel/test-url-format.js`

### 1 × `TAP version <n> # Subtest: fs.stat should throw AbortError when called with an already aborted AbortSignal not ok <n> - fs.stat should throw AbortError when cal`

distinct messages:
- `TAP version 13
# Subtest: fs.stat should throw AbortError when called with an already aborted AbortSignal
not ok 1 - fs.stat should throw AbortError when called with an already aborted AbortSignal
  ---
  duration_ms: 2
  failureType: 'testCodeFailure'
  error: "Missing expected rejection (AbortErro`
example test: `test/parallel/test-fs-stat-abort-test.js`

### 1 × `TAP version <n> # Subtest: module is not instantiated yet not ok <n> - module is not instantiated yet --- duration_ms: <n> failureType: <str> error: <str> code:`

distinct messages:
- `TAP version 13
# Subtest: module is not instantiated yet
not ok 1 - module is not instantiated yet
  ---
  duration_ms: 3
  failureType: 'testCodeFailure'
  error: "Expected values to be strictly deep-equal:\n+ actual - expected\n\n+ Comparison {}\n- Comparison {\n-   code: 'ERR_VM_MODULE_STATUS'\n-`
example test: `test/parallel/test-vm-module-hasasyncgraph.js`

### 1 × `TAP version <n> # Subtest: process.loadEnvFile() # Subtest: supports passing path ok <n> - supports passing path # Subtest: supports not-passing a path ok <n> -`

distinct messages:
- `TAP version 13
# Subtest: process.loadEnvFile()
    # Subtest: supports passing path
    ok 1 - supports passing path
    # Subtest: supports not-passing a path
    ok 2 - supports not-passing a path
    # Subtest: should throw when file does not exist
    ok 3 - should throw when file does not exis`
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

### 1 × `TAP version <n> # Subtest: rejectGarbageAfterEnd rejects trailing input for inflate ok <n> - rejectGarbageAfterEnd rejects trailing input for inflate # Subtest:`

distinct messages:
- `TAP version 13
# Subtest: rejectGarbageAfterEnd rejects trailing input for inflate
ok 1 - rejectGarbageAfterEnd rejects trailing input for inflate
# Subtest: rejectGarbageAfterEnd rejects trailing input for inflateRaw
ok 2 - rejectGarbageAfterEnd rejects trailing input for inflateRaw
# Subtest: reje`
example test: `test/parallel/test-zlib-reject-garbage-after-end.js`

### 1 × `TAP version <n> # Subtest: should parse and format not ok <n> - should parse and format --- duration_ms: <n> failureType: <str> error: <str> code: <str> ... # S`

distinct messages:
- `TAP version 13
# Subtest: should parse and format
not ok 1 - should parse and format
  ---
  duration_ms: 7
  failureType: 'testCodeFailure'
  error: "expected Url {\n  protocol: null,\n  slashes: null,\n  auth: null,\n  host: null,\n  port: null,\n  hostname: null,\n  hash: null,\n  search: null,\n`
example test: `test/parallel/test-url-parse-format.js`

### 1 × `TAP version <n> # Subtest: simple module not ok <n> - simple module --- duration_ms: <n> failureType: <str> error: <str> code: <str> ... # Subtest: linkRequests`

distinct messages:
- `TAP version 13
# Subtest: simple module
not ok 1 - simple module
  ---
  duration_ms: 1
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

### 1 × `TypeError: (intermediate value).gc is not a function at Immediate.<anonymous> (<loc>) at Immediate._return (<loc>) at TypeError.get stack (native)`

distinct messages:
- `TypeError: (intermediate value).gc is not a function
    at Immediate.<anonymous> (test-async-hooks-destroy-on-gc.js:25:14)
    at Immediate._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at TypeError.get stack (native)`
example test: `test/parallel/test-async-hooks-destroy-on-gc.js`

### 1 × `TypeError: Cannot find module: <str> at :anonymous (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: Cannot find module: 'bar'
    at :anonymous (require-resolve.js:11:3)
    at :anonymous (test-require-resolve.js:38:1)
    at :program (test-require-resolve.js:1:1)`
example test: `test/parallel/test-require-resolve.js`

### 1 × `TypeError: Cannot find module: <str> at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: Cannot find module: '.'
    at :anonymous (test-require-resolve-opts-paths-relative.js:17:10)
    at :program (test-require-resolve-opts-paths-relative.js:1:1)`
example test: `test/parallel/test-require-resolve-opts-paths-relative.js`

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

### 1 × `TypeError: Cannot read property <str> of null at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: Cannot read property 'on' of null
    at :anonymous (test-worker-stdio.js:31:3)
    at :program (test-worker-stdio.js:1:1)`
example test: `test/parallel/test-worker-stdio.js`

### 1 × `TypeError: Cannot read property <str> of null at EventEmitter.<anonymous> (<loc>) at EventEmitter.emit (native) at Duplex.push (native)`

distinct messages:
- `TypeError: Cannot read property 'lang' of null
    at EventEmitter.<anonymous> (test-http-response-splitting.js:39:19)
    at EventEmitter.emit (native)
    at Duplex.push (native)`
example test: `test/parallel/test-http-response-splitting.js`

### 1 × `TypeError: Cannot read property <str> of undefined at :anonymous (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: Cannot read property 'slice' of undefined
    at :anonymous (b.js:2:18)
    at :anonymous (test-module-children.js:9:11)
    at :program (test-module-children.js:1:1)`
example test: `test/parallel/test-module-children.js`

### 1 × `TypeError: Cannot read property <str> of undefined at :program (<eval><loc>) at anonymous (<function><loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: Cannot read property 'Module' of undefined
    at :program (<eval>:1:15)
    at anonymous (<function>:3:38)
    at :anonymous (test-vm-codegen.js:14:3)
    at :program (test-vm-codegen.js:1:1)`
example test: `test/parallel/test-vm-codegen.js`

### 1 × `TypeError: Cannot read property <str> of undefined at <loc> at _return (<loc>) at TypeError.get stack (native)`

distinct messages:
- `TypeError: Cannot read property 'code' of undefined
    at test-stream-pipeline-duplex.js:16:22
    at _return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at TypeError.get stack (native)`
example test: `test/parallel/test-stream-pipeline-duplex.js`

### 1 × `TypeError: Cannot read property <str> of undefined at Duplex.<anonymous> (<loc>) at Duplex._return (<loc>) at Duplex.emit (native) at TypeError.get stack (nativ`

distinct messages:
- `TypeError: Cannot read property 'getReport' of undefined
    at Duplex.<anonymous> (test-http-agent-reuse-drained-socket-only.js:66:19)
    at Duplex._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at Duplex.emit (native)
    at TypeError.get stack (native)`
example test: `test/parallel/test-http-agent-reuse-drained-socket-only.js`

### 1 × `TypeError: Cannot read property <str> of undefined at EventEmitter.<anonymous> (<loc>) at EventEmitter._return (<loc>) at EventEmitter.emit (native) at Duplex.p`

distinct messages:
- `TypeError: Cannot read property '_events' of undefined
    at EventEmitter.<anonymous> (test-http-req-close-robust-from-tampering.js:10:3)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)
    at Duplex.push (nat`
example test: `test/parallel/test-http-req-close-robust-from-tampering.js`

### 1 × `TypeError: Cannot read property <str> of undefined at Writable.<anonymous> (<loc>) at Writable._return (<loc>) at Writable.emit (native) at Duplex.push (native)`

distinct messages:
- `TypeError: Cannot read property 'set' of undefined
    at Writable.<anonymous> (test-async-local-storage-http-multiclients.js:36:9)
    at Writable._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at Writable.emit (native)
    at Duplex.push (native)`
example test: `test/parallel/test-async-local-storage-http-multiclients.js`

### 1 × `TypeError: Constructor EventEmitter requires <str> at MyEE (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: Constructor EventEmitter requires 'new'
    at MyEE (test-event-emitter-subclass.js:34:3)
    at :anonymous (test-event-emitter-subclass.js:37:14)
    at :program (test-event-emitter-subclass.js:1:1)`
example test: `test/parallel/test-event-emitter-subclass.js`

### 1 × `TypeError: function allocUnsafeSlow() { [native code] } is not a constructor at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: function allocUnsafeSlow() { [native code] } is not a constructor
    at :anonymous (test-icu-transcode.js:89:20)
    at :program (test-icu-transcode.js:1:1)`
example test: `test/parallel/test-icu-transcode.js`

### 1 × `TypeError: getHeapSnapshot is not a function at EventEmitter.<anonymous> (<loc>) at EventEmitter._return (<loc>) at EventEmitter.emit (native) at TypeError.get `

distinct messages:
- `TypeError: getHeapSnapshot is not a function
    at EventEmitter.<anonymous> (test-worker-exit-heapsnapshot.js:15:5)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)
    at TypeError.get stack (native)`
example test: `test/parallel/test-worker-exit-heapsnapshot.js`

### 1 × `TypeError: m.createCachedData is not a function at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: m.createCachedData is not a function
    at :anonymous (test-vm-module-cached-data.js:12:22)
    at :program (test-vm-module-cached-data.js:1:1)`
example test: `test/parallel/test-vm-module-cached-data.js`

### 1 × `TypeError: net.BoundSocket is not a constructor at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: net.BoundSocket is not a constructor
    at :anonymous (test-net-boundsocket.js:9:17)
    at :program (test-net-boundsocket.js:1:1)`
example test: `test/parallel/test-net-boundsocket.js`

### 1 × `TypeError: Optional options.transfer argument must be an iterable at MessagePort.postMessage (native) at <loc> at <loc>`

distinct messages:
- `TypeError: Optional options.transfer argument must be an iterable
    at MessagePort.postMessage (native)
    at test-worker-message-port-terminate-transfer-list.js:20:9
    at test-worker-message-port-terminate-transfer-list.js:1:1`
example test: `test/parallel/test-worker-message-port-terminate-transfer-list.js`

### 1 × `TypeError: pipe: destination must be a Writable at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: pipe: destination must be a Writable
    at :anonymous (test-zlib-deflate-raw-inherits.js:26:1)
    at :program (test-zlib-deflate-raw-inherits.js:1:1)`
example test: `test/parallel/test-zlib-deflate-raw-inherits.js`

### 1 × `TypeError: proxy has been revoked at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: proxy has been revoked
    at :anonymous (test-console-issue-43095.js:9:1)
    at :program (test-console-issue-43095.js:1:1)`
example test: `test/parallel/test-console-issue-43095.js`

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

### 1 × `TypeError: This handle type cannot be sent at EventEmitter.<anonymous> (<loc>) at EventEmitter.emit (native) AssertionError: The expression evaluated to a falsy`

distinct messages:
- `TypeError: This handle type cannot be sent
    at EventEmitter.<anonymous> (test-child-process-fork-dgram.js:68:11)
    at EventEmitter.emit (native)
AssertionError: The expression evaluated to a falsy value:

  assert(parentGotMessage)

    at process.<anonymous> (test-child-process-fork-dgram.js:1`
example test: `test/parallel/test-child-process-fork-dgram.js`

### 1 × `TypeError: This handle type cannot be sent at EventEmitter.<anonymous> (<loc>) at EventEmitter.emit (native) TypeError: Cannot read property <str> of undefined `

distinct messages:
- `TypeError: This handle type cannot be sent
    at EventEmitter.<anonymous> (test-child-process-fork-net.js:103:16)
    at EventEmitter.emit (native)
TypeError: Cannot read property 'length' of undefined
    at process.<anonymous> (test-child-process-fork-net.js:184:24)
    at TypeError.get stack (na`
example test: `test/parallel/test-child-process-fork-net.js`

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

### 1 × `TypeError: v8.queryObjects is not a function at <loc> at _return (<loc>) at Timeout.<anonymous> (<loc>) at TypeError.get stack (native)`

distinct messages:
- `TypeError: v8.queryObjects is not a function
    at test-async-local-storage-weak-asyncwrap-leak.js:41:25
    at _return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at Timeout.<anonymous> (test-async-local-storage-weak-asyncwrap-leak.js:47:5)
    at TypeError.get `
example test: `test/parallel/test-async-local-storage-weak-asyncwrap-leak.js`

### 1 × `TypeError: v8.startCpuProfile is not a function at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: v8.startCpuProfile is not a function
    at :anonymous (test-v8-cpu-profile.js:8:18)
    at :program (test-v8-cpu-profile.js:1:1)`
example test: `test/parallel/test-v8-cpu-profile.js`

### 1 × `Uncaught (in promise) AssertionError: Expected values to be strictly deep-equal: + actual - expected [ + Buffer(<n>) [Uint8Array] [ + <n>, + <n>, + <n>, + <n>, `

distinct messages:
- `Uncaught (in promise) AssertionError: Expected values to be strictly deep-equal:
+ actual - expected

  [
+   Buffer(5) [Uint8Array] [
+     104,
+     101,
+     108,
+     108,
+     111
+   ],
+   Buffer(5) [Uint8Array] [
+     119,
+     111,
+     114,
+     108,
+     100
+   ]
-   'hello',
- `
example test: `test/parallel/test-webstreams-pipeline.js`

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

### 1 × `Uncaught (in promise) AssertionError: Expected values to be strictly deep-equal: + actual - expected + Buffer(<n>) [Uint8Array] [ + <n>, + <n>, + <n>, + <n>, + `

distinct messages:
- `Uncaught (in promise) AssertionError: Expected values to be strictly deep-equal:
+ actual - expected

+ Buffer(5) [Uint8Array] [
+   104,
+   101,
+   108,
+   108,
+   111
+ ]
- Buffer(0) [Uint8Array] []

TypeError: Detached buffer`
example test: `test/parallel/test-stream-duplex.js`

### 1 × `Uncaught (in promise) AssertionError: Expected values to be strictly deep-equal: + actual - expected + undefined - { - foo: <str> - }`

distinct messages:
- `Uncaught (in promise) AssertionError: Expected values to be strictly deep-equal:
+ actual - expected

+ undefined
- {
-   foo: 'bar'
- }`
example test: `test/parallel/test-diagnostics-channel-tracing-channel-promise-run-stores.js`

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

### 1 × `Uncaught (in promise) AssertionError: Expected values to be strictly deep-equal: + actual - expected Comparison { + code: <str> - code: /^(?:ENOTFOUND|EAI_AGAIN`

distinct messages:
- `Uncaught (in promise) AssertionError: Expected values to be strictly deep-equal:
+ actual - expected

  Comparison {
+   code: 'ENODATA'
-   code: /^(?:ENOTFOUND|EAI_AGAIN)$/
  }`
example test: `test/parallel/test-dns-lookupService-promises.js`

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

### 1 × `Uncaught (in promise) AssertionError: Expected values to be strictly equal: + actual - expected + undefined - Foo [EventEmitter] { - [Symbol(nodejs.eventemitter`

distinct messages:
- `Uncaught (in promise) AssertionError: Expected values to be strictly equal:
+ actual - expected

+ undefined
- Foo [EventEmitter] {
-   [Symbol(nodejs.eventemitter.asyncresource)]: AsyncResource {
-     _asyncId: 2,
-     _destroyed: false,
-     _frame: undefined,
-     _triggerAsyncId: 1,
-     ty`
example test: `test/parallel/test-eventemitter-asyncresource.js`

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

### 1 × `Uncaught (in promise) AssertionError: Expected values to be strictly equal: <n> !== undefined`

distinct messages:
- `Uncaught (in promise) AssertionError: Expected values to be strictly equal:

0 !== undefined`
example test: `test/parallel/test-worker-terminate-null-handler.js`

### 1 × `Uncaught (in promise) AssertionError: Expected values to be strictly equal: false !== true`

distinct messages:
- `Uncaught (in promise) AssertionError: Expected values to be strictly equal:

false !== true`
example test: `test/parallel/test-readline-async-iterators-backpressure.js`

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

### 1 × `Uncaught (in promise) AssertionError: Missing expected rejection (AbortError). Error: stream.push() after EOF`

distinct messages:
- `Uncaught (in promise) AssertionError: Missing expected rejection (AbortError).
Error: stream.push() after EOF`
example test: `test/parallel/test-stream-readable-compose.js`

### 1 × `Uncaught (in promise) AssertionError: Missing expected rejection.`

distinct messages:
- `Uncaught (in promise) AssertionError: Missing expected rejection.`
example test: `test/parallel/test-filehandle-close.js`

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

### 1 × `Uncaught (in promise) AssertionError: The input did not match the regular expression /No such built-in module: node:stream\/iter/. Input: <str>`

distinct messages:
- `Uncaught (in promise) AssertionError: The input did not match the regular expression /No such built-in module: node:stream\/iter/. Input:

''`
example test: `test/parallel/test-stream-iter-disabled.js`

### 1 × `Uncaught (in promise) AssertionError: The validation function is expected to return <str>. Received false Caught error: Error: ENOENT: no such file or directory`

distinct messages:
- `Uncaught (in promise) AssertionError: The validation function is expected to return "true". Received false

Caught error:

Error: ENOENT: no such file or directory, access '/work/.harness/work/node-api/node-test/.tmp.814/__this_should_not_exist'`
example test: `test/parallel/test-fs-access.js`

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

### 1 × `Uncaught (in promise) Error: Command failed: <str> -p <n> Error: Usage: <str> or <str>; see --help Uncaught (in promise) Error: Command failed: /opt/elide/bin/e`

distinct messages:
- `Uncaught (in promise) Error: Command failed: "${ESCAPED_0}" -p 42
Error: Usage: 'elide <script>' or 'elide run <script>'; see --help

Uncaught (in promise) Error: Command failed: /opt/elide/bin/elide -p 42
Error: Usage: 'elide <script>' or 'elide run <script>'; see --help`
example test: `test/parallel/test-child-process-promisified.js`

### 1 × `Uncaught (in promise) Error: escaped timeout at <n> milliseconds! AssertionError: Expected values to be strictly deep-equal: + actual - expected Comparison { + `

distinct messages:
- `Uncaught (in promise) Error: escaped timeout at 2000 milliseconds!
AssertionError: Expected values to be strictly deep-equal: + actual - expected    Comparison { +   message: 'escaped timeout at 2000 milliseconds!' -   code: 'ERR_SCRIPT_EXECUTION_TIMEOUT', -   message: 'Script execution timed out af`
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

### 1 × `Uncaught (in promise) Error: node:worker_threads: postMessageToThread is not implemented yet in Elide`

distinct messages:
- `Uncaught (in promise) Error: node:worker_threads: postMessageToThread is not implemented yet in Elide`
example test: `test/parallel/test-worker-messaging.js`

### 1 × `Uncaught (in promise) Error: node:worker_threads: postMessageToThread is not implemented yet in Elide TypeError: Cannot execute on non-shared array. at Atomics.`

distinct messages:
- `Uncaught (in promise) Error: node:worker_threads: postMessageToThread is not implemented yet in Elide
TypeError: Cannot execute on non-shared array.
    at Atomics.wait (native)
    at test-worker-messaging-errors-timeout.js:37:11
    at test-worker-messaging-errors-timeout.js:1:1`
example test: `test/parallel/test-worker-messaging-errors-timeout.js`

### 1 × `Uncaught (in promise) Error: Test minor gc event failed`

distinct messages:
- `Uncaught (in promise) Error: Test minor gc event failed`
example test: `test/parallel/test-performance-gc-minor-ms.js`

### 1 × `Uncaught (in promise) Error: The FileHandle is closed or a stream was already created Uncaught (in promise) AssertionError: Missing expected exception. Uncaught`

distinct messages:
- `Uncaught (in promise) Error: The FileHandle is closed or a stream was already created
Uncaught (in promise) AssertionError: Missing expected exception.
Uncaught (in promise) Error: The FileHandle is closed or a stream was already created
Uncaught (in promise) AssertionError: Missing expected excepti`
example test: `test/parallel/test-filehandle-readablestream.js`

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

### 1 × `Uncaught (in promise) SyntaxError: <loc> Expected an operand but found import import foo from <str>; ^ <loc> Expected an operand but found import import shared `

distinct messages:
- `Uncaught (in promise) SyntaxError: ./index.js:2:8 Expected an operand but found import
        import foo from "./foo.js";
        ^
./index.js:3:8 Expected an operand but found import
        import shared from "./shared.js";
        ^
./index.js:4:8 Expected an operand but found export
        exp`
example test: `test/parallel/test-vm-module-link-shared-deps.js`

### 1 × `Uncaught (in promise) SyntaxError: Variable <str> has already been declared`

distinct messages:
- `Uncaught (in promise) SyntaxError: Variable "__filename" has already been declared`
example test: `test/parallel/test-worker-track-unmanaged-fds.js`

### 1 × `Uncaught (in promise) SyntaxError: vm:module(<n>)<loc> Cannot use import.meta outside a module globalThis.importMeta = import.meta; ^`

distinct messages:
- `Uncaught (in promise) SyntaxError: vm:module(0):1:24 Cannot use import.meta outside a module
globalThis.importMeta = import.meta;
                        ^`
example test: `test/parallel/test-vm-module-import-meta.js`

### 1 × `Uncaught (in promise) SyntaxError: vm:module(<n>)<loc> Expected an operand but found import import { x } from <str>; ^ vm:module(<n>)<loc> Expected ; but found `

distinct messages:
- `Uncaught (in promise) SyntaxError: vm:module(0):2:4 Expected an operand but found import
    import { x } from 'synthetic';
    ^
vm:module(0):2:23 Expected ; but found synthetic
    import { x } from 'synthetic';
                       ^
vm:module(0):4:4 Expected an operand but found export
    exp`
example test: `test/parallel/test-vm-module-synthetic.js`

### 1 × `Uncaught (in promise) TypeError: Cannot read property <str> of undefined`

distinct messages:
- `Uncaught (in promise) TypeError: Cannot read property 'request' of undefined`
example test: `test/parallel/test-diagnostics-channel-web-locks.js`

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

### 1 × `Uncaught (in promise) TypeError: GCProfiler is not a constructor TypeError: (intermediate value).gc is not a function at <loc> at <loc>`

distinct messages:
- `Uncaught (in promise) TypeError: GCProfiler is not a constructor
TypeError: (intermediate value).gc is not a function
    at test-v8-collect-gc-profile-in-worker.js:15:3
    at test-v8-collect-gc-profile-in-worker.js:1:1`
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

### 1 × `Uncaught (in promise) TypeError: The <str> argument must be of type string or an instance of Buffer, TypedArray, or DataView. Received an instance of ArrayBuffe`

distinct messages:
- `Uncaught (in promise) TypeError: The "chunk" argument must be of type string or an instance of Buffer, TypedArray, or DataView. Received an instance of ArrayBuffer`
example test: `test/parallel/test-webstreams-adapters-writable-buffer-sources.js`

### 1 × `Uncaught (in promise) TypeError: The first argument must be of type string or an instance of Buffer, ArrayBuffer, or Array or an Array-like Object. Received und`

distinct messages:
- `Uncaught (in promise) TypeError: The first argument must be of type string or an instance of Buffer, ArrayBuffer, or Array or an Array-like Object. Received undefined
Uncaught (in promise) TypeError: The first argument must be of type string or an instance of Buffer, ArrayBuffer, or Array or an Arra`
example test: `test/parallel/test-stream-consumers.js`

### 1 × `Uncaught JSException in event listener: AssertionError: Expected values to be strictly deep-equal: + actual - expected + [] - [ - <str> - ] AssertionError: Expe`

distinct messages:
- `Uncaught JSException in event listener: AssertionError: Expected values to be strictly deep-equal:
+ actual - expected

+ []
- [
-   '--trace-warnings'
- ]

AssertionError: Expected values to be strictly deep-equal:
+ actual - expected

+ []
- [
-   '--trace-warnings'
- ]

    at test-worker-execarg`
example test: `test/parallel/test-worker-execargv.js`

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

### 1 × `Uncaught JSException in event listener: Error: ok Error: ok at process.<anonymous> (<loc>) at MessagePort.start (native) at <loc> at <loc> AssertionError: wrong`

distinct messages:
- `Uncaught JSException in event listener: Error: ok
Error: ok
    at process.<anonymous> (/work/.harness/work/node-api/node-api-overlay/test/common/process-exit-code-cases.js:118:13)
    at MessagePort.start (native)
    at test-worker-exit-code.js:24:14
    at test-worker-exit-code.js:1:1
AssertionEr`
example test: `test/parallel/test-worker-exit-code.js`

### 1 × `Uncaught JSException in event listener: RangeError: Maximum call stack size exceeded Uncaught IndexOutOfBoundsException in event listener: <no message> Uncaught`

distinct messages:
- `Uncaught JSException in event listener: RangeError: Maximum call stack size exceeded
Uncaught IndexOutOfBoundsException in event listener: <no message>
Uncaught JSException in event listener: RangeError: Maximum call stack size exceeded
Uncaught IndexOutOfBoundsException in event listener: <no messa`
example test: `test/parallel/test-whatwg-events-add-event-listener-options-signal.js`

### 1 × `URIError: URI malformed at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `URIError: URI malformed
    at :anonymous (test-querystring-escape.js:13:20)
    at :program (test-querystring-escape.js:1:1)`
example test: `test/parallel/test-querystring-escape.js`

## By feature

| count | feature |
|---:|---|
| 79 | node:http |
| 64 | node:worker-threads |
| 59 | node:streams |
| 48 | node:vm |
| 43 | node:fs |
| 32 | node:module-loading |
| 30 | node:child-process |
| 25 | node:net |
| 21 | node:process |
| 19 | node:async-hooks |
| 15 | node:url |
| 14 | node:dns |
| 14 | node:web-globals |
| 14 | node:zlib |
| 13 | node:perf-hooks |
| 12 | node:buffer |
| 12 | node:domain |
| 12 | node:v8 |
| 11 | node:diagnostics-channel |
| 9 | node:events |
| 9 | node:util |
| 8 | node:readline |
| 6 | node:assert |
| 6 | node:dgram |
| 5 | node:timers |
| 3 | node:console |
| 3 | node:intl |
| 2 | node:os |
| 2 | node:querystring |
| 1 | node:tty |
