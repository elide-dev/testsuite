# Impact-ordered failures

## By root-cause signature

### 23 × `Error: Cannot find module <str> Require stack: - <loc> at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `Error: Cannot find module 'http2' Require stack: - /work/.harness/work/node-api/node-api-overlay/test/parallel/test-diagnostics-channel-http2-client-stream-body-multiple-buffers-and-strings.js
    at :anonymous (test-diagnostics-channel-http2-client-stream-body-multiple-buffers-and-strings.js:14:15)`
- `Error: Cannot find module 'http2' Require stack: - /work/.harness/work/node-api/node-api-overlay/test/parallel/test-diagnostics-channel-http2-client-stream-body-multiple-buffers.js
    at :anonymous (test-diagnostics-channel-http2-client-stream-body-multiple-buffers.js:14:15)
    at :program (test-d`
- `Error: Cannot find module 'http2' Require stack: - /work/.harness/work/node-api/node-api-overlay/test/parallel/test-diagnostics-channel-http2-client-stream-body-no-chunks.js
    at :anonymous (test-diagnostics-channel-http2-client-stream-body-no-chunks.js:14:15)
    at :program (test-diagnostics-cha`
- `Error: Cannot find module 'http2' Require stack: - /work/.harness/work/node-api/node-api-overlay/test/parallel/test-diagnostics-channel-http2-client-stream-body-single-buffer.js
    at :anonymous (test-diagnostics-channel-http2-client-stream-body-single-buffer.js:14:15)
    at :program (test-diagnos`
- `Error: Cannot find module 'http2' Require stack: - /work/.harness/work/node-api/node-api-overlay/test/parallel/test-diagnostics-channel-http2-client-stream-close-error.js
    at :anonymous (test-diagnostics-channel-http2-client-stream-close-error.js:13:15)
    at :program (test-diagnostics-channel-h`
example test: `test/parallel/test-diagnostics-channel-http2-client-stream-body-multiple-buffers-and-strings.js`

### 10 × `Node API test timed out`

distinct messages:
- `Node API test timed out`
example test: `test/parallel/test-async-hooks-http-parser-destroy.js`

### 4 × `AssertionError: Expected values to be strictly equal: + actual - expected + <str> - <str> at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Expected values to be strictly equal: + actual - expected  + 'undefined' - 'function'
    at :anonymous (test-eventsource.js:7:1)
    at :program (test-eventsource.js:1:1)`
- `AssertionError: Expected values to be strictly equal: + actual - expected  + '118059162071741140000 118059162071741140000 123123123' - '118_059_162_071_741_140_000 118_059_162_071_741_140_000 123_123_123'
    at :anonymous (test-util-format.js:86:3)
    at :program (test-util-format.js:1:1)`
- `AssertionError: Expected values to be strictly equal: + actual - expected  + 'X { _y: 123 }' - 'X { _y: 123, [y]: [Getter: 123] }'
    at :anonymous (test-util-inspect-getters-accessing-this.js:28:3)
    at :program (test-util-inspect-getters-accessing-this.js:1:1)`
- `AssertionError: Expected values to be strictly equal: + actual - expected  + 'undefined' - 'function'
    at :anonymous (test-vm-function-declaration.js:42:1)
    at :program (test-vm-function-declaration.js:1:1)`
example test: `test/parallel/test-eventsource.js`

### 4 × `AssertionError: Missing expected exception. at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Missing expected exception.
    at :anonymous (test-crypto-pqc-key-objects-ml-kem.js:115:5)
    at :program (test-crypto-pqc-key-objects-ml-kem.js:1:1)`
- `AssertionError: Missing expected exception.
    at :anonymous (test-crypto-pqc-keygen-ml-kem.js:76:3)
    at :program (test-crypto-pqc-keygen-ml-kem.js:1:1)`
- `AssertionError: Missing expected exception.
    at :anonymous (test-dns-setserver-when-querying.js:17:5)
    at :program (test-dns-setserver-when-querying.js:1:1)`
- `AssertionError: Missing expected exception.
    at :anonymous (test-whatwg-url-custom-parsing.js:54:3)
    at :program (test-whatwg-url-custom-parsing.js:1:1)`
example test: `test/parallel/test-crypto-pqc-key-objects-ml-kem.js`

### 3 × `Mismatched <anonymous> function calls. Expected exactly <n>, actual <n>. at Proxy.mustCall (<loc>) at Object.<anonymous> (<loc>) at <loc>`

distinct messages:
- `Mismatched <anonymous> function calls. Expected exactly 1, actual 0.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:533:10)
    at Object.<anonymous> (test-stream-readable-to-web-termination-byob.js:12:47)
    at test-stream-readable-to-web-termination-byob`
- `Mismatched <anonymous> function calls. Expected exactly 2, actual 1.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:533:10)
    at Object.<anonymous> (test-timers-timeout-to-interval.js:7:29)
    at test-timers-timeout-to-interval.js:14:4`
- `Mismatched <anonymous> function calls. Expected exactly 1, actual 75.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:533:10)
    at Object.<anonymous> (test-timers-unenroll-unref-interval.js:24:39)
    at test-timers-unenroll-unref-interval.js:50:4`
example test: `test/parallel/test-stream-readable-to-web-termination-byob.js`

### 2 × `AssertionError: Expected values to be strictly deep-equal: + actual - expected Comparison { + message: <str>, - message: <str>, name: <str> } at :anonymous (<lo`

distinct messages:
- `AssertionError: Expected values to be strictly deep-equal: + actual - expected    Comparison { +   message: '<function>:1:0 Expected eof but found }\n});\n^', -   message: "Unexpected token '}'",     name: 'SyntaxError'   }
    at :anonymous (test-vm-basic.js:149:3)
    at :program (test-vm-basic.js`
- `AssertionError: Expected values to be strictly deep-equal: + actual - expected    Comparison { +   message: "Cannot assign to read only property 'nonWritableProp' of {getSetPropReceivingFunction: accessor, getSetPropReceivingNumber: accessor, propReceivingNumber: 144, getSetPropThrowing: accessor, n`
example test: `test/parallel/test-vm-basic.js`

### 2 × `AssertionError: Expected values to be strictly equal: <n> !== <n> at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Expected values to be strictly equal:  2 !== 0
    at :anonymous (test-module-run-main-monkey-patch.js:17:1)
    at :program (test-module-run-main-monkey-patch.js:1:1)`
- `AssertionError: Expected values to be strictly equal:  0 !== 1
    at :anonymous (test-util-callbackify.js:74:5)
    at :program (test-util-callbackify.js:1:1)`
example test: `test/parallel/test-module-run-main-monkey-patch.js`

### 2 × `AssertionError: Expected values to be strictly equal: <n> !== <n> at EventEmitter.<anonymous> (<loc>) at EventEmitter._return (<loc>) at EventEmitter.emit (nati`

distinct messages:
- `AssertionError: Expected values to be strictly equal:

2 !== 0

    at EventEmitter.<anonymous> (test-require-symlink.js:80:12)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:575:12)
    at EventEmitter.emit (native)`
- `AssertionError: Expected values to be strictly equal:

0 !== 13

    at EventEmitter.<anonymous> (test-worker-data-url.js:24:44)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:575:12)
    at EventEmitter.emit (native)`
example test: `test/parallel/test-require-symlink.js`

### 2 × `Mismatched noop function calls. Expected exactly <n>, actual <n>. at Proxy.mustCall (<loc>) at Object.<anonymous> (<loc>) at <loc>`

distinct messages:
- `Mismatched noop function calls. Expected exactly 1, actual 0.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:533:10)
    at Object.<anonymous> (test-fs-watchfile.js:87:27)
    at test-fs-watchfile.js:116:4`
- `Mismatched noop function calls. Expected exactly 1, actual 0.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:533:10)
    at Object.<anonymous> (test-stream-readable-error-end.js:10:23)
    at test-stream-readable-error-end.js:17:4`
example test: `test/parallel/test-fs-watchfile.js`

### 2 × `Uncaught (in promise) AssertionError: Expected values to be strictly equal: + actual - expected + <str> - <str>`

distinct messages:
- `Uncaught (in promise) AssertionError: Expected values to be strictly equal:
+ actual - expected

+ 'Object'
- 'FileHandle'`
example test: `test/parallel/test-worker-message-port-transfer-fake-js-transferable-internal.js`

### 2 × `Uncaught (in promise) NotSupportedError: Unrecognized algorithm name`

distinct messages:
- `Uncaught (in promise) NotSupportedError: Unrecognized algorithm name`
example test: `test/parallel/test-webcrypto-sign-verify-ml-dsa.js`

### 1 × `(node:<n>) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Bu`

distinct messages:
- `(node:1127) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.
AssertionError: DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use th`
example test: `test/parallel/test-buffer-constructor-outside-node-modules.js`

### 1 × `(node:<n>) ExperimentalWarning: VM Modules is an experimental feature and might change at any time Uncaught (in promise) AssertionError: Expected values to be s`

distinct messages:
- `(node:13560) ExperimentalWarning: VM Modules is an experimental feature and might change at any time
Uncaught (in promise) AssertionError: Expected values to be strictly deep-equal:
+ actual - expected

+ [Object: null prototype] {}
- [Object: null prototype] {
-   key: 'value'
- }`
example test: `test/parallel/test-vm-module-dynamic-import.js`

### 1 × `(node:<n>) ExperimentalWarning: VM Modules is an experimental feature and might change at any time Uncaught (in promise) Error: Expected promise to be rejected `

distinct messages:
- `(node:13551) ExperimentalWarning: VM Modules is an experimental feature and might change at any time
Uncaught (in promise) Error: Expected promise to be rejected with "import failed"`
example test: `test/parallel/test-vm-module-dynamic-import-promise.js`

### 1 × `(node:<n>) ExperimentalWarning: VM Modules is an experimental feature and might change at any time Uncaught (in promise) ReferenceError: a is not defined`

distinct messages:
- `(node:12990) ExperimentalWarning: VM Modules is an experimental feature and might change at any time
Uncaught (in promise) ReferenceError: a is not defined`
example test: `test/parallel/test-util-inspect-namespace.js`

### 1 × `(node:<n>) ExperimentalWarning: VM Modules is an experimental feature and might change at any time Uncaught (in promise) ReferenceError: foo is not defined`

distinct messages:
- `(node:13535) ExperimentalWarning: VM Modules is an experimental feature and might change at any time
Uncaught (in promise) ReferenceError: foo is not defined`
example test: `test/parallel/test-vm-module-basic.js`

### 1 × `(node:<n>) ExperimentalWarning: VM Modules is an experimental feature and might change at any time Uncaught (in promise) ReferenceError: inner is not defined Un`

distinct messages:
- `(node:13527) ExperimentalWarning: VM Modules is an experimental feature and might change at any time
Uncaught (in promise) ReferenceError: inner is not defined
Uncaught (in promise) ReferenceError: inner is not defined`
example test: `test/parallel/test-vm-module-after-evaluate.js`

### 1 × `(node:<n>) ExperimentalWarning: VM Modules is an experimental feature and might change at any time Uncaught (in promise) ReferenceError: loop is not defined Unc`

distinct messages:
- `(node:13955) ExperimentalWarning: VM Modules is an experimental feature and might change at any time
Uncaught (in promise) ReferenceError: loop is not defined
Uncaught (in promise) AssertionError: Expected values to be strictly deep-equal:
+ actual - expected

  Comparison {
+   message: 'loop is no`
example test: `test/parallel/test-vm-timeout-escape-promise-module.js`

### 1 × `(node:<n>) ExperimentalWarning: VM Modules is an experimental feature and might change at any time Uncaught (in promise) TypeError: An asynchronous importModule`

distinct messages:
- `(node:13564) ExperimentalWarning: VM Modules is an experimental feature and might change at any time
Uncaught (in promise) TypeError: An asynchronous importModuleDynamically result is not supported`
example test: `test/parallel/test-vm-module-dynamic-namespace.js`

### 1 × `(node:<n>) TimeoutOverflowWarning: <n> does not fit into a <n>-bit signed integer. Timeout duration was set to <n>.`

distinct messages:
- `(node:12213) TimeoutOverflowWarning: 2147483648 does not fit into a 32-bit signed integer.
Timeout duration was set to 1.`
example test: `test/parallel/test-timers-max-duration-warning.js`

### 1 × `[process <n>]: --- stderr --- (node:<n>) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(`

distinct messages:
- `[process 1197]: --- stderr ---
(node:1197) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.

[process 1197]: --- stdout ---

[process 1197]: status = 0, signal = null
Erro`
example test: `test/parallel/test-buffer-constructor-node-modules.js`

### 1 × `[process <n>]: --- stderr --- AssertionError: Expected values to be strictly equal: <str> !== <str> at :anonymous (<loc>) at :program (<loc>) [process <n>]: ---`

distinct messages:
- `[process 15037]: --- stderr ---
AssertionError: Expected values to be strictly equal:  'elide' !== 'foo'
    at :anonymous (spawn-worker-with-copied-env.js:6:3)
    at :program (spawn-worker-with-copied-env.js:1:1)

[process 15037]: --- stdout ---

[process 15037]: status = 1, signal = null
Error: -`
example test: `test/parallel/test-worker-node-options.js`

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

### 1 × `AssertionError: before=<n> after=<n> at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: before=147128320 after=205803520
    at :anonymous (test-crypto-dh-leak.js:30:1)
    at :program (test-crypto-dh-leak.js:1:1)`
example test: `test/parallel/test-crypto-dh-leak.js`

### 1 × `AssertionError: error: unexpected argument <str> found tip: to pass <str> as a value, use <str> Usage: elide [FLAGS] [FILE] [-- SCRIPT_ARGS]… [SUBCOMMAND] For m`

distinct messages:
- `AssertionError: error: unexpected argument '--enable-source-maps' found    tip: to pass '--enable-source-maps' as a value, use '-- --enable-source-maps'  Usage: elide [FLAGS] [FILE] [-- SCRIPT_ARGS]… [SUBCOMMAND]  For more information, try '--help'.   2 !== 0
    at :anonymous (test-util-getcallsite`
example test: `test/parallel/test-util-getcallsites-sourcemap.js`

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

### 1 × `AssertionError: Expected <str> not to be reference-equal to <str>: ArrayBuffer {} at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Expected "actual" not to be reference-equal to "expected":  ArrayBuffer {}
    at :anonymous (test-crypto-subtle-cross-realm.js:27:3)
    at :program (test-crypto-subtle-cross-realm.js:1:1)`
example test: `test/parallel/test-crypto-subtle-cross-realm.js`

### 1 × `AssertionError: Expected <str> to be reference-equal to <str>: + actual - expected + Immediate { + _argv: undefined, + _destroyed: false, + _idleNext: null, + _`

distinct messages:
- `AssertionError: Expected "actual" to be reference-equal to "expected": + actual - expected  + Immediate { +   _argv: undefined, +   _destroyed: false, +   _idleNext: null, +   _idlePrev: null, +   _onImmediate: [Function: mustNotCall] - { -   type: 'Immediate'   }
    at :anonymous (test-async-hooks`
example test: `test/parallel/test-async-hooks-top-level-clearimmediate.js`

### 1 × `AssertionError: Expected <str> to be strictly unequal to: undefined at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Expected "actual" to be strictly unequal to:  undefined
    at :anonymous (test-fs-write.js:45:1)
    at :program (test-fs-write.js:1:1)`
example test: `test/parallel/test-fs-write.js`

### 1 × `AssertionError: Expected values to be strictly deep-equal: + actual - expected + Comparison {} - Comparison { - code: <str> - } at :anonymous (<loc>) at :progra`

distinct messages:
- `AssertionError: Expected values to be strictly deep-equal: + actual - expected  + Comparison {} - Comparison { -   code: 'ERR_INVALID_ARG_VALUE' - }
    at :anonymous (test-stream-readable-compose.js:160:3)
    at :program (test-stream-readable-compose.js:1:1)`
example test: `test/parallel/test-stream-readable-compose.js`

### 1 × `AssertionError: Expected values to be strictly deep-equal: + actual - expected Comparison { + code: <str> - code: <str> } at :anonymous (<loc>) at :program (<lo`

distinct messages:
- `AssertionError: Expected values to be strictly deep-equal: + actual - expected    Comparison { +   code: 'ERR_OSSL_PEM_NO_START_LINE' -   code: 'ERR_OSSL_EVP_UNSUPPORTED_ALGORITHM'   }
    at :anonymous (test-crypto-pqc-key-objects-slh-dsa.js:103:5)
    at :program (test-crypto-pqc-key-objects-slh-d`
example test: `test/parallel/test-crypto-pqc-key-objects-slh-dsa.js`

### 1 × `AssertionError: Expected values to be strictly deep-equal: + actual - expected Comparison { + code: <str>, + message: <str> + + <str> + + <str> - code: <str>, -`

distinct messages:
- `AssertionError: Expected values to be strictly deep-equal:
+ actual - expected

  Comparison {
+   code: 'ERR_ASSERTION',
+   message: 'The expression evaluated to a falsy value:\n' +
+     '\n' +
+     '  assert(usedMB < maxReservedSize)\n'
-   code: 'ERR_WORKER_OUT_OF_MEMORY',
-   message: 'Worker`
example test: `test/parallel/test-worker-resource-limits.js`

### 1 × `AssertionError: Expected values to be strictly deep-equal: + actual - expected Comparison { + message: <str> - code: <str>, - message: /The <str> argument must `

distinct messages:
- `AssertionError: Expected values to be strictly deep-equal: + actual - expected    Comparison { +   message: 'crypto.encapsulate is not a function' -   code: 'ERR_INVALID_ARG_TYPE', -   message: /The "key" argument must be of type/   }
    at :anonymous (test-crypto-encap-decap.js:19:1)
    at :progr`
example test: `test/parallel/test-crypto-encap-decap.js`

### 1 × `AssertionError: Expected values to be strictly deep-equal: + actual - expected Comparison { + message: <str> - message: <str> } at :anonymous (<loc>) at :progra`

distinct messages:
- `AssertionError: Expected values to be strictly deep-equal: + actual - expected    Comparison { +   message: 'index is too large' -   message: 'Invalid typed array length: 9007199254740992'   }
    at :anonymous (test-buffer-alloc.js:14:1)
    at :program (test-buffer-alloc.js:1:1)`
example test: `test/parallel/test-buffer-alloc.js`

### 1 × `AssertionError: Expected values to be strictly deep-equal: + actual - expected Comparison { + message: <str>, - code: <str>, - message: <str>, name: <str> } at `

distinct messages:
- `AssertionError: Expected values to be strictly deep-equal: + actual - expected    Comparison { +   message: 'function lastIndexOf() { [native code] } is not a constructor', -   code: 'ERR_INVALID_ARG_TYPE', -   message: 'The "buffer" argument must be an instance of Buffer, TypedArray, or DataView. R`
example test: `test/parallel/test-buffer-indexof.js`

### 1 × `AssertionError: Expected values to be strictly equal: + actual - expected ... Skipped lines <str> + <str> + <str> + <str> + <str> + ... <str> + + <str> + - <str`

distinct messages:
- `AssertionError: Expected values to be strictly equal: + actual - expected ... Skipped lines    'URL {\n' +     "  href: 'https://username:password@host.name:8080/path/name/?que=ry#hash',\n" +     "  origin: 'https://host.name:8080',\n" +     "  protocol: 'https:',\n" +     "  username: 'username',\n`
example test: `test/parallel/test-whatwg-url-custom-inspect.js`

### 1 × `AssertionError: Expected values to be strictly equal: + actual - expected + <str> - <str> at EventEmitter.<anonymous> (<loc>) at EventEmitter._return (<loc>) at`

distinct messages:
- `AssertionError: Expected values to be strictly equal:
+ actual - expected

+ 'undefined'
- 'number'

    at EventEmitter.<anonymous> (test-worker-cleanup-handles.js:13:12)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:575:12)
    at EventEmitter.emit`
example test: `test/parallel/test-worker-cleanup-handles.js`

### 1 × `AssertionError: Expected values to be strictly equal: + actual - expected + <str> - <str> at process.<anonymous> (<loc>) at process._return (<loc>) at process.e`

distinct messages:
- `AssertionError: Expected values to be strictly equal:
+ actual - expected

+ 'The "iterable" argument must be an instance of Iterable. Received object'
- 'error'

    at process.<anonymous> (test-stream-pipeline-uncaught.js:11:10)
    at process._return (/work/.harness/work/node-api/node-api-overlay`
example test: `test/parallel/test-stream-pipeline-uncaught.js`

### 1 × `AssertionError: Expected values to be strictly equal: + actual - expected + <str> - <str> at test (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Expected values to be strictly equal: + actual - expected  + "Error: Usage: 'elide <script>' or 'elide run <script>'; see --help" - ''
    at test (test-buffer-constructor-node-modules-paths.js:20:5)
    at :anonymous (test-buffer-constructor-node-modules-paths.js:23:1)
    at :progr`
example test: `test/parallel/test-buffer-constructor-node-modules-paths.js`

### 1 × `AssertionError: Expected values to be strictly equal: + actual - expected + <str> + + <str> + + <str> - <str> at process.<anonymous> (<loc>) at process._return `

distinct messages:
- `AssertionError: Expected values to be strictly equal:
+ actual - expected

+ 'The expression evaluated to a falsy value:\n' +
+   '\n' +
+   "  assert(a.listenerCount('error') > 0)\n"
- 'no way'

    at process.<anonymous> (test-stream-pipeline-listeners.js:8:10)
    at process._return (/work/.harne`
example test: `test/parallel/test-stream-pipeline-listeners.js`

### 1 × `AssertionError: Expected values to be strictly equal: + actual - expected + undefined - <str> at Writable.<anonymous> (<loc>) at Writable._return (<loc>) at Wri`

distinct messages:
- `AssertionError: Expected values to be strictly equal:
+ actual - expected

+ undefined
- 'first'

    at Writable.<anonymous> (test-async-local-storage-http-agent.js:39:14)
    at Writable._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:575:12)
    at Writable.emit (nativ`
example test: `test/parallel/test-async-local-storage-http-agent.js`

### 1 × `AssertionError: Expected values to be strictly equal: <str> !== <str> at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Expected values to be strictly equal:  'elide' !== 'foo'
    at :anonymous (test-process-title-cli.js:16:1)
    at :program (test-process-title-cli.js:1:1)`
example test: `test/parallel/test-process-title-cli.js`

### 1 × `AssertionError: Expected values to be strictly equal: false !== true at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Expected values to be strictly equal:  false !== true
    at :anonymous (test-stream-duplex-from.js:114:3)
    at :program (test-stream-duplex-from.js:1:1)`
example test: `test/parallel/test-stream-duplex-from.js`

### 1 × `AssertionError: Expected values to be strictly equal: null !== <str> at EventEmitter.<anonymous> (<loc>) at EventEmitter._return (<loc>) at EventEmitter.emit (n`

distinct messages:
- `AssertionError: Expected values to be strictly equal:

null !== 'SIGINT'

    at EventEmitter.<anonymous> (test-process-remove-all-signal-listeners.js:17:12)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:575:12)
    at EventEmitter.emit (native)`
example test: `test/parallel/test-process-remove-all-signal-listeners.js`

### 1 × `AssertionError: Expected values to be strictly equal: true !== false at Readable.<anonymous> (<loc>) at Readable._return (<loc>)`

distinct messages:
- `AssertionError: Expected values to be strictly equal:

true !== false

    at Readable.<anonymous> (test-stream2-readable-wrap-error.js:34:14)
    at Readable._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:575:12)`
example test: `test/parallel/test-stream2-readable-wrap-error.js`

### 1 × `AssertionError: Expected values to be strictly equal: undefined !== <str> at MessagePort.<anonymous> (<loc>) at MessagePort._return (<loc>) AssertionError: Expe`

distinct messages:
- `AssertionError: Expected values to be strictly equal:

undefined !== 'set'

    at MessagePort.<anonymous> (test-worker-process-env-shared.js:30:12)
    at MessagePort._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:575:12)
AssertionError: Expected values to be strictly e`
example test: `test/parallel/test-worker-process-env-shared.js`

### 1 × `AssertionError: flag should be in set: --perf_basic_prof false !== true at :=> (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: flag should be in set: --perf_basic_prof  false !== true
    at :=> (test-process-env-allowed-flags.js:35:5)
    at :anonymous (test-process-env-allowed-flags.js:34:3)
    at :program (test-process-env-allowed-flags.js:1:1)`
example test: `test/parallel/test-process-env-allowed-flags.js`

### 1 × `AssertionError: function should not have been called at <loc> at Readable.mustNotCall (<loc>)`

distinct messages:
- `AssertionError: function should not have been called at test-stream-readable-next-no-null.js:19
    at Readable.mustNotCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:633:12)`
example test: `test/parallel/test-stream-readable-next-no-null.js`

### 1 × `AssertionError: function should not have been called at <loc> at Readable.mustNotCall (<loc>) AssertionError: Expected values to be strictly equal: false !== tr`

distinct messages:
- `AssertionError: function should not have been called at test-stream2-basic.js:292
    at Readable.mustNotCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:633:12)
AssertionError: Expected values to be strictly equal:

false !== true

    at Readable.end (test-stream2-basic.js:`
example test: `test/parallel/test-stream2-basic.js`

### 1 × `AssertionError: function should not have been called at <loc> called with arguments: Error at Object.<anonymous> (<loc>) at <loc>, [ CallSite {}, CallSite {} ] `

distinct messages:
- `AssertionError: function should not have been called at test-util-getcallsites-preparestacktrace.js:10 called with arguments: Error     at Object.<anonymous> (test-util-getcallsites-preparestacktrace.js:12:15)     at test-util-getcallsites-preparestacktrace.js:16:4, [ CallSite {}, CallSite {} ]
    `
example test: `test/parallel/test-util-getcallsites-preparestacktrace.js`

### 1 × `AssertionError: ifError got unwanted exception: Unsupported JWK Key Type. at Object.<anonymous> (<loc>) at Object._return (<loc>) AssertionError: ifError got un`

distinct messages:
- `AssertionError: ifError got unwanted exception: Unsupported JWK Key Type.
    at Object.<anonymous> (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:538:12)
    at Object._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:575:12)
AssertionError: ifError go`
example test: `test/parallel/test-crypto-pqc-keygen-ml-dsa.js`

### 1 × `AssertionError: init <n> !== <n> at main (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: init  0 !== 1
    at main (test-async-hooks-fatal-error.js:48:7)
    at :anonymous (test-async-hooks-fatal-error.js:10:3)
    at :program (test-async-hooks-fatal-error.js:1:1)`
example test: `test/parallel/test-async-hooks-fatal-error.js`

### 1 × `AssertionError: Missing expected exception (TypeError). at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Missing expected exception (TypeError).
    at :anonymous (test-stream-readable-async-iterators.js:774:5)
    at :program (test-stream-readable-async-iterators.js:1:1)`
example test: `test/parallel/test-stream-readable-async-iterators.js`

### 1 × `AssertionError: process.execve should not have been allowed. at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: process.execve should not have been allowed.
    at :anonymous (test-process-execve-permission-fail.js:16:3)
    at :program (test-process-execve-permission-fail.js:1:1)`
example test: `test/parallel/test-process-execve-permission-fail.js`

### 1 × `AssertionError: The error is expected to be an instance of <str>. Received <str> Error message: x is not defined at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: The error is expected to be an instance of "EvalError". Received "ReferenceError"  Error message:  x is not defined
    at :anonymous (test-vm-codegen.js:29:3)
    at :program (test-vm-codegen.js:1:1)`
example test: `test/parallel/test-vm-codegen.js`

### 1 × `AssertionError: The expression evaluated to a falsy value: assert.ok(destroyedIds.has(asyncId)) at Immediate.<anonymous> (<loc>) at Immediate._return (<loc>)`

distinct messages:
- `AssertionError: The expression evaluated to a falsy value:

  assert.ok(destroyedIds.has(asyncId))

    at Immediate.<anonymous> (test-async-hooks-destroy-on-gc.js:26:45)
    at Immediate._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:575:12)`
example test: `test/parallel/test-async-hooks-destroy-on-gc.js`

### 1 × `AssertionError: The expression evaluated to a falsy value: assert(e.toString().match(/Error: Cannot find module/)) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: The expression evaluated to a falsy value:    assert(e.toString().match(/Error: Cannot find module/))
    at :anonymous (test-module-main-preserve-symlinks-fail.js:15:7)
    at :program (test-module-main-preserve-symlinks-fail.js:1:1)`
example test: `test/parallel/test-module-main-preserve-symlinks-fail.js`

### 1 × `AssertionError: The input did not match the regular expression /^\s+\^/m. Input: <str> at AssertionError.get stack (native) at Function.match (native) at Readab`

distinct messages:
- `AssertionError: The input did not match the regular expression /^\s+\^/m. Input:

'SyntaxError: rsa_cert.crt:1:4 Invalid left hand side for assignment -----BEGIN CERTIFICATE-----     ^
    at :program (<snippet>:1:1)
'

    at AssertionError.get stack (native)
    at Function.match (native)
    at R`
example test: `test/parallel/test-vm-syntax-error-stderr.js`

### 1 × `AssertionError: The input did not match the regular expression /AtomicsLoad/. Input: <str> at Object.<anonymous> (<loc>) at <loc>`

distinct messages:
- `AssertionError: The input did not match the regular expression /AtomicsLoad/. Input:

'function cwd() { [native code] }'

    at Object.<anonymous> (test-worker-process-cwd.js:35:10)
    at test-worker-process-cwd.js:69:4`
example test: `test/parallel/test-worker-process-cwd.js`

### 1 × `AssertionError: The input did not match the regular expression /Cannot delete property <str> of #<process>/. Input: <str> at :anonymous (<loc>) at :program (<lo`

distinct messages:
- `AssertionError: The input did not match the regular expression /Cannot delete property 'exitCode' of #<process>/. Input:  'TypeError: "exitCode" is not a configurable property'
    at :anonymous (test-process-exit-code-validation.js:121:3)
    at :program (test-process-exit-code-validation.js:1:1)`
example test: `test/parallel/test-process-exit-code-validation.js`

### 1 × `AssertionError: The input did not match the regular expression /Cannot find module <str>/. Input: <str> at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: The input did not match the regular expression /Cannot find module '\x66oo'/. Input:  'Error: Command failed: /work/.harness/work/node-api/node-api-overlay/test/.tmp.783/install/bin/elide'
    at :anonymous (test-module-loading-globalpaths.js:52:3)
    at :program (test-module-loadin`
example test: `test/parallel/test-module-loading-globalpaths.js`

### 1 × `AssertionError: The input did not match the regular expression /MODULE_NOT_FOUND/. Input: <str> at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: The input did not match the regular expression /MODULE_NOT_FOUND/. Input:  'Error: Command failed: /opt/elide/bin/elide'
    at :anonymous (test-module-main-fail.js:14:5)
    at :program (test-module-main-fail.js:1:1)`
example test: `test/parallel/test-module-main-fail.js`

### 1 × `AssertionError: The validation function is expected to return <str>. Received false Caught error: TypeError: notcontext.setOptions is not a function at :anonymo`

distinct messages:
- `AssertionError: The validation function is expected to return "true". Received false  Caught error:  TypeError: notcontext.setOptions is not a function
    at :anonymous (test-crypto.js:39:1)
    at :program (test-crypto.js:1:1)`
example test: `test/parallel/test-crypto.js`

### 1 × `AssertionError: Values have same structure but are not reference-equal: ArrayBuffer { [Uint8Contents]: <<n> <n> 6c 6c 6f <n> <n> 6f <n> 6c <n>>, [byteLength]: <`

distinct messages:
- `AssertionError: Values have same structure but are not reference-equal:  ArrayBuffer {   [Uint8Contents]: <68 65 6c 6c 6f 20 77 6f 72 6c 64>,   [byteLength]: 11 }
    at :anonymous (test-buffer-pool-untransferable.js:12:1)
    at :program (test-buffer-pool-untransferable.js:1:1)`
example test: `test/parallel/test-buffer-pool-untransferable.js`

### 1 × `CompileError: Invalid limits prefix (expected <n>, <n>, <n>, or <n>, got <n>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `CompileError: Invalid limits prefix (expected 0x00, 0x01, 0x04, or 0x05, got 0x03)
    at :anonymous (test-worker-message-port-wasm-threads.js:11:20)
    at :program (test-worker-message-port-wasm-threads.js:1:1)`
example test: `test/parallel/test-worker-message-port-wasm-threads.js`

### 1 × `DOMException at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `DOMException
    at :anonymous (test-worker-message-port-wasm-module.js:18:1)
    at :program (test-worker-message-port-wasm-module.js:1:1)`
example test: `test/parallel/test-worker-message-port-wasm-module.js`

### 1 × `Error: EEXIST: file already exists, open <str> at Error.get stack (native)`

distinct messages:
- `Error: EEXIST: file already exists, open '/work/.harness/work/node-api/node-api-overlay/test/.tmp.635/dummy'
    at Error.get stack (native)`
example test: `test/parallel/test-fs-stream-construct-compat-error-write.js`

### 1 × `Error: ENOENT: no such file or directory, access <str> at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `Error: ENOENT: no such file or directory, access 'test/addons/not-a-binding'
    at :anonymous (test-process-dlopen-error-message-crash.js:31:1)
    at :program (test-process-dlopen-error-message-crash.js:1:1)`
example test: `test/parallel/test-process-dlopen-error-message-crash.js`

### 1 × `Error: ENOENT: no such file or directory, mkdir <str> at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `Error: ENOENT: no such file or directory, mkdir '/work/.harness/work/node-api/node-api-overlay/test/.tmp.645/work/.harness/work/node-api/node-api-overlay/test/.tmp.645/absolute-target'
    at :anonymous (test-fs-symlink-dir.js:46:3)
    at :program (test-fs-symlink-dir.js:1:1)`
example test: `test/parallel/test-fs-symlink-dir.js`

### 1 × `Error: ENOENT: no such file or directory, open <str> at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `Error: ENOENT: no such file or directory, open '/work/.harness/work/node-api/node-api-overlay/doc/api/cli.md'
    at :anonymous (test-process-env-allowed-flags-are-documented.js:12:17)
    at :program (test-process-env-allowed-flags-are-documented.js:1:1)`
example test: `test/parallel/test-process-env-allowed-flags-are-documented.js`

### 1 × `Error: ENOENT: no such file or directory, open <str> at Error.get stack (native)`

distinct messages:
- `Error: ENOENT: no such file or directory, open '/doesnotexist'
    at Error.get stack (native)`
example test: `test/parallel/test-fs-stream-construct-compat-error-read.js`

### 1 × `Error: fail at Readable.read (<loc>)`

distinct messages:
- `Error: fail
    at Readable.read (test-stream-auto-destroy.js:89:24)`
example test: `test/parallel/test-stream-auto-destroy.js`

### 1 × `Error: fhqwhgads at :=> (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `Error: fhqwhgads
    at :=> (test-util-primordial-monkeypatching.js:10:29)
    at :anonymous (test-util-primordial-monkeypatching.js:11:20)
    at :program (test-util-primordial-monkeypatching.js:1:1)`
example test: `test/parallel/test-util-primordial-monkeypatching.js`

### 1 × `Error: Initiated Worker with invalid execArgv flags: -- at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `Error: Initiated Worker with invalid execArgv flags: --
    at :anonymous (test-process-exec-argv.js:44:19)
    at :program (test-process-exec-argv.js:1:1)`
example test: `test/parallel/test-process-exec-argv.js`

### 1 × `Error: node:worker_threads: moveMessagePortToContext is not implemented yet in Elide at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `Error: node:worker_threads: moveMessagePortToContext is not implemented yet in Elide
    at :anonymous (test-worker-message-port-move.js:12:16)
    at :program (test-worker-message-port-move.js:1:1)`
example test: `test/parallel/test-worker-message-port-move.js`

### 1 × `Error: read ECONNRESET`

distinct messages:
- `Error: read ECONNRESET`
example test: `test/parallel/test-stream-destroy.js`

### 1 × `Error: tls.createServer is not supported by this runtime at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `Error: tls.createServer is not supported by this runtime
    at :anonymous (test-diagnostics-channel-net-client-socket-tls.js:24:16)
    at :program (test-diagnostics-channel-net-client-socket-tls.js:1:1)`
example test: `test/parallel/test-diagnostics-channel-net-client-socket-tls.js`

### 1 × `Error: Unsupported JWK Key Type. at assertPublicKey (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `Error: Unsupported JWK Key Type.
    at assertPublicKey (test-crypto-pqc-key-objects-ml-dsa.js:62:17)
    at :anonymous (test-crypto-pqc-key-objects-ml-dsa.js:115:5)
    at :program (test-crypto-pqc-key-objects-ml-dsa.js:1:1)`
example test: `test/parallel/test-crypto-pqc-key-objects-ml-dsa.js`

### 1 × `Mismatched <anonymous> function calls. Expected exactly <n>, actual <n>. at mustCall (<loc>) at _expectWarning (<loc>) at <loc> at Array.forEach (native) at Pro`

distinct messages:
- `Mismatched <anonymous> function calls. Expected exactly 1, actual 0.
    at mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:533:10)
    at _expectWarning (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:752:10)
    at /work/.harness/work/node-api/node-`
example test: `test/parallel/test-fs-stat.js`

### 1 × `Mismatched <anonymous> function calls. Expected exactly <n>, actual <n>. at Proxy.mustCall (<loc>) at EventEmitter.<anonymous> (<loc>) at EventEmitter._return (`

distinct messages:
- `Mismatched <anonymous> function calls. Expected exactly 1, actual 0.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:533:10)
    at EventEmitter.<anonymous> (test-diagnostics-channel-net.js:77:28)
    at EventEmitter._return (/work/.harness/work/node-api/nod`
example test: `test/parallel/test-diagnostics-channel-net.js`

### 1 × `Mismatched <anonymous> function calls. Expected exactly <n>, actual <n>. at Proxy.mustCall (<loc>) at Object.<anonymous> (<loc>) at <loc> Mismatched <anonymous>`

distinct messages:
- `Mismatched <anonymous> function calls. Expected exactly 1, actual 0.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:533:10)
    at Object.<anonymous> (test-fs-stream-construct-compat-old-node.js:20:38)
    at test-fs-stream-construct-compat-old-node.js:99:4`
example test: `test/parallel/test-fs-stream-construct-compat-old-node.js`

### 1 × `Mismatched noop function calls. Expected exactly <n>, actual <n>. at Proxy.mustCall (<loc>) at Object.<anonymous> (<loc>) at <loc> Mismatched <anonymous> functi`

distinct messages:
- `Mismatched noop function calls. Expected exactly 1, actual 0.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:533:10)
    at Object.<anonymous> (test-async-hooks-enable-recursive.js:8:16)
    at test-async-hooks-enable-recursive.js:21:4
Mismatched <anonymous`
example test: `test/parallel/test-async-hooks-enable-recursive.js`

### 1 × `Mismatched ReadStream$open function calls. Expected exactly <n>, actual <n>. at Proxy.mustCall (<loc>) at Object.<anonymous> (<loc>) at <loc> Mismatched <anonym`

distinct messages:
- `Mismatched ReadStream$open function calls. Expected exactly 1, actual 0.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:533:10)
    at Object.<anonymous> (test-fs-stream-construct-compat-graceful-fs.js:20:38)
    at test-fs-stream-construct-compat-graceful-`
example test: `test/parallel/test-fs-stream-construct-compat-graceful-fs.js`

### 1 × `Mismatched writev function calls. Expected at least <n>, actual <n>. at Proxy.mustCallAtLeast (<loc>) at Object.<anonymous> (<loc>) at <loc>`

distinct messages:
- `Mismatched writev function calls. Expected at least 1, actual 0.
    at Proxy.mustCallAtLeast (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:545:10)
    at Object.<anonymous> (test-fs-write-stream-fs.js:28:22)
    at test-fs-write-stream-fs.js:39:4`
example test: `test/parallel/test-fs-write-stream-fs.js`

### 1 × `TAP version <n> # start <n>: Assert class destructuring behavior - diff option not ok <n> - Assert class destructuring behavior - diff option --- message: <str>`

distinct messages:
- `TAP version 13
# start 1: Assert class destructuring behavior - diff option
not ok 1 - Assert class destructuring behavior - diff option
  ---
  message: "Assert is not a constructor"
  detail: |
    	TypeError: Assert is not a constructor
    		at Object.<anonymous> (/work/.harness/work/node-api/no`
example test: `test/parallel/test-assert-class-destructuring.js`

### 1 × `TAP version <n> # start <n>: Assert constructor requires new not ok <n> - Assert constructor requires new --- message: <str> severity: <str> detail: | Assertion`

distinct messages:
- `TAP version 13
# start 1: Assert constructor requires new
not ok 1 - Assert constructor requires new
  ---
  message: "Expected values to be strictly deep-equal:\n+ actual - expected\n\n  Comparison {\n-   code: 'ERR_CONSTRUCT_CALL_REQUIRED',\n    name: 'TypeError'\n  }\n"
  severity: "ERR_ASSERTION`
example test: `test/parallel/test-assert-class.js`

### 1 × `TAP version <n> # start <n>: CJS: --experimental-package-map > basic resolution > resolves require() through package map not ok <n> - CJS: --experimental-packag`

distinct messages:
- `TAP version 13
# start 1: CJS: --experimental-package-map > basic resolution > resolves require() through package map
not ok 1 - CJS: --experimental-package-map > basic resolution > resolves require() through package map
  ---
  message: "Expected values to be strictly equal:\n+ actual - expected\n\`
example test: `test/parallel/test-require-package-map.js`

### 1 × `TAP version <n> # start <n>: deepEqual ok <n> - deepEqual # start <n>: loose deepEqual not ok <n> - loose deepEqual --- message: <str> severity: <str> detail: |`

distinct messages:
- `TAP version 13
# start 1: deepEqual
ok 1 - deepEqual
# start 2: loose deepEqual
not ok 2 - loose deepEqual
  ---
  message: "Expected values to be loosely deep-equal:\n\n[\n  null,\n  undefined,\n  undefined\n]\n\nshould loosely deep-equal\n\n[\n  null,\n  undefined,\n  null\n]"
  severity: "ERR_ASS`
example test: `test/parallel/test-assert-deep.js`

### 1 × `TAP version <n> # start <n>: ensure the assert.ok throwing similar error messages for esm and cjs files > should return code <n> for each command not ok <n> - e`

distinct messages:
- `TAP version 13
# start 1: ensure the assert.ok throwing similar error messages for esm and cjs files > should return code 1 for each command
not ok 1 - ensure the assert.ok throwing similar error messages for esm and cjs files > should return code 1 for each command
  ---
  message: "Expected values`
example test: `test/parallel/test-assert-esm-cjs-message-verify.js`

### 1 × `TAP version <n> # start <n>: process.loadEnvFile() > supports passing path ok <n> - process.loadEnvFile() > supports passing path # start <n>: process.loadEnvFi`

distinct messages:
- `TAP version 13
# start 1: process.loadEnvFile() > supports passing path
ok 1 - process.loadEnvFile() > supports passing path
# start 2: process.loadEnvFile() > supports not-passing a path
ok 2 - process.loadEnvFile() > supports not-passing a path
# start 3: process.loadEnvFile() > should throw when `
example test: `test/parallel/test-process-load-env-file.js`

### 1 × `TAP version <n> # start <n>: some basics ok <n> - some basics # start <n>: Throw message if the message is instanceof Error ok <n> - Throw message if the messag`

distinct messages:
- `TAP version 13
# start 1: some basics
ok 1 - some basics
# start 2: Throw message if the message is instanceof Error
ok 2 - Throw message if the message is instanceof Error
# start 3: Errors created in different contexts are handled as any other custom error
ok 3 - Errors created in different contex`
example test: `test/parallel/test-assert.js`

### 1 × `TAP version <n> # start <n>: validation ok <n> - validation # start <n>: performs flush not ok <n> - <loc> --- message: <str> detail: | The test run in <loc> di`

distinct messages:
- `TAP version 13
# start 1: validation
ok 1 - validation
# start 2: performs flush
not ok 2 - __elide_node_test__test__parallel__test-fs-write-stream-flush.js
  ---
  message: "The test run in __elide_node_test__test__parallel__test-fs-write-stream-flush.js did not complete"
  detail: |
    	The test `
example test: `test/parallel/test-fs-write-stream-flush.js`

### 1 × `TAP version <n> # start <n>: Web Locks diagnostics channel > emits start, grant, and end on success not ok <n> - Web Locks diagnostics channel > emits start, gr`

distinct messages:
- `TAP version 13
# start 1: Web Locks diagnostics channel > emits start, grant, and end on success
not ok 1 - Web Locks diagnostics channel > emits start, grant, and end on success
  ---
  message: "Cannot read property 'request' of undefined"
  detail: |
    	TypeError: Cannot read property 'request'`
example test: `test/parallel/test-diagnostics-channel-web-locks.js`

### 1 × `TAP version <n> # start <n>: Worker eval module typescript without input-type ok <n> - Worker eval module typescript without input-type # SKIP # start <n>: Work`

distinct messages:
- `TAP version 13
# start 1: Worker eval module typescript without input-type
ok 1 - Worker eval module typescript without input-type # SKIP
# start 2: Worker eval module typescript with --input-type=module-typescript
ok 2 - Worker eval module typescript with --input-type=module-typescript # SKIP
# sta`
example test: `test/parallel/test-worker-eval-typescript.js`

### 1 × `TypeError: Cannot read property <str> of undefined at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: Cannot read property 'length' of undefined
    at :anonymous (test-stream-pipe-same-destination-twice.js:22:22)
    at :program (test-stream-pipe-same-destination-twice.js:1:1)`
example test: `test/parallel/test-stream-pipe-same-destination-twice.js`

### 1 × `TypeError: Cannot read property <str> of undefined at Writable.<anonymous> (<loc>) at Writable._return (<loc>) at Writable.emit (native) at Duplex.push (native)`

distinct messages:
- `TypeError: Cannot read property 'set' of undefined
    at Writable.<anonymous> (test-async-local-storage-http-multiclients.js:36:9)
    at Writable._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:575:12)
    at Writable.emit (native)
    at Duplex.push (native)`
example test: `test/parallel/test-async-local-storage-http-multiclients.js`

### 1 × `TypeError: Cannot set property <str> of undefined at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: Cannot set property 'getServers' of undefined
    at :anonymous (test-dns-get-server.js:10:1)
    at :program (test-dns-get-server.js:1:1)`
example test: `test/parallel/test-dns-get-server.js`

### 1 × `TypeError: Certificate is not a constructor at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: Certificate is not a constructor
    at :anonymous (test-crypto-certificate.js:98:16)
    at :program (test-crypto-certificate.js:1:1)`
example test: `test/parallel/test-crypto-certificate.js`

### 1 × `TypeError: Detached buffer at new Uint8Array (native) at TypeError.get stack (native) Uncaught (in promise) AssertionError: Expected values to be strictly deep-`

distinct messages:
- `TypeError: Detached buffer
    at new Uint8Array (native)
    at TypeError.get stack (native)
Uncaught (in promise) AssertionError: Expected values to be strictly deep-equal:
+ actual - expected

+ Buffer(5) [Uint8Array] [
+   104,
+   101,
+   108,
+   108,
+   111
+ ]
- Buffer(0) [Uint8Array] []

`
example test: `test/parallel/test-stream-duplex.js`

### 1 × `TypeError: fs.openAsBlob is not a function at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: fs.openAsBlob is not a function
    at :anonymous (test-vfs-fs-openAsBlob.js:18:1)
    at :program (test-vfs-fs-openAsBlob.js:1:1)`
example test: `test/parallel/test-vfs-fs-openAsBlob.js`

### 1 × `TypeError: getHeapSnapshot is not a function at EventEmitter.<anonymous> (<loc>) at EventEmitter._return (<loc>) at EventEmitter.emit (native) at TypeError.get `

distinct messages:
- `TypeError: getHeapSnapshot is not a function
    at EventEmitter.<anonymous> (test-worker-exit-heapsnapshot.js:15:5)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:575:12)
    at EventEmitter.emit (native)
    at TypeError.get stack (native)`
example test: `test/parallel/test-worker-exit-heapsnapshot.js`

### 1 × `TypeError: Invalid JWK data at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: Invalid JWK data
    at :anonymous (test-crypto-pqc-encrypted-pkcs8.js:102:18)
    at :program (test-crypto-pqc-encrypted-pkcs8.js:1:1)`
example test: `test/parallel/test-crypto-pqc-encrypted-pkcs8.js`

### 1 × `TypeError: parsers.alloc is not a function at :=> (<loc>) at _return (<loc>) at test (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: parsers.alloc is not a function
    at :=> (test-async-local-storage-http-parser-leak.js:19:14)
    at _return (index.js:575:12)
    at test (test-async-local-storage-http-parser-leak.js:18:3)
    at :anonymous (test-async-local-storage-http-parser-leak.js:25:1)
    at :program (test-asyn`
example test: `test/parallel/test-async-local-storage-http-parser-leak.js`

### 1 × `TypeError: pipeline: every link must be a Readable on the left and a Writable on the right at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: pipeline: every link must be a Readable on the left and a Writable on the right
    at :anonymous (test-stream-pipeline.js:390:3)
    at :program (test-stream-pipeline.js:1:1)`
example test: `test/parallel/test-stream-pipeline.js`

### 1 × `TypeError: proxy has been revoked at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: proxy has been revoked
    at :anonymous (test-console-issue-43095.js:9:1)
    at :program (test-console-issue-43095.js:1:1)`
example test: `test/parallel/test-console-issue-43095.js`

### 1 × `TypeError: The <str> argument must be an instance of Iterable. Received object at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: The "iterable" argument must be an instance of Iterable. Received object
    at :anonymous (test-stream-compose.js:145:3)
    at :program (test-stream-compose.js:1:1)`
example test: `test/parallel/test-stream-compose.js`

### 1 × `TypeError: The <str> argument must be of type object. Received type symbol (Symbol(DONT_CONTEXTIFY)) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: The "object" argument must be of type object. Received type symbol (Symbol(DONT_CONTEXTIFY))
    at :anonymous (test-vm-context-dont-contextify.js:13:19)
    at :program (test-vm-context-dont-contextify.js:1:1)`
example test: `test/parallel/test-vm-context-dont-contextify.js`

### 1 × `TypeError: tls.Server is not a function at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: tls.Server is not a function
    at :anonymous (test-crypto-verify-failure.js:39:16)
    at :program (test-crypto-verify-failure.js:1:1)`
example test: `test/parallel/test-crypto-verify-failure.js`

### 1 × `TypeError: v8.queryObjects is not a function at <loc> at _return (<loc>) at Timeout.<anonymous> (<loc>) at TypeError.get stack (native)`

distinct messages:
- `TypeError: v8.queryObjects is not a function
    at test-async-local-storage-weak-asyncwrap-leak.js:41:25
    at _return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:575:12)
    at Timeout.<anonymous> (test-async-local-storage-weak-asyncwrap-leak.js:47:5)
    at TypeError.get `
example test: `test/parallel/test-async-local-storage-weak-asyncwrap-leak.js`

### 1 × `TypeError: X509Certificate is not a constructor at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: X509Certificate is not a constructor
    at :anonymous (test-crypto-keyobject-hidden-slots.js:183:18)
    at :program (test-crypto-keyobject-hidden-slots.js:1:1)`
example test: `test/parallel/test-crypto-keyobject-hidden-slots.js`

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

### 1 × `Uncaught (in promise) AssertionError: Expected values to be strictly deep-equal: + actual - expected + undefined - { - foo: <str> - }`

distinct messages:
- `Uncaught (in promise) AssertionError: Expected values to be strictly deep-equal:
+ actual - expected

+ undefined
- {
-   foo: 'bar'
- }`
example test: `test/parallel/test-diagnostics-channel-tracing-channel-promise-run-stores.js`

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

### 1 × `Uncaught (in promise) AssertionError: Expected values to be strictly equal: + actual - expected + undefined - Foo [EventEmitter] { - Symbol(nodejs.eventemitter.`

distinct messages:
- `Uncaught (in promise) AssertionError: Expected values to be strictly equal:
+ actual - expected

+ undefined
- Foo [EventEmitter] {
-   Symbol(nodejs.eventemitter.asyncresource): AsyncResource {
-     _asyncId: 2,
-     _destroyed: false,
-     _triggerAsyncId: 1,
-     type: 'Foo'
-   }
- }

Uncaug`
example test: `test/parallel/test-eventemitter-asyncresource.js`

### 1 × `Uncaught (in promise) AssertionError: Expected values to be strictly equal: <n> !== <n>`

distinct messages:
- `Uncaught (in promise) AssertionError: Expected values to be strictly equal:

2 !== 0`
example test: `test/parallel/test-stream-iter-readable-interop-disabled.js`

### 1 × `Uncaught (in promise) AssertionError: get %Object.prototype%.exports at <loc>`

distinct messages:
- `Uncaught (in promise) AssertionError: get %Object.prototype%.exports at test-module-prototype-mutation.js:35`
example test: `test/parallel/test-module-prototype-mutation.js`

### 1 × `Uncaught (in promise) AssertionError: Missing expected exception (Error). Uncaught (in promise) AssertionError: Missing expected exception (TypeError). Assertio`

distinct messages:
- `Uncaught (in promise) AssertionError: Missing expected exception (Error).
Uncaught (in promise) AssertionError: Missing expected exception (TypeError).
AssertionError: function should not have been called at test-fs-read-stream-file-handle.js:31
called with arguments: <Buffer 68 65 6c 6c 6f 20 77 6f`
example test: `test/parallel/test-fs-read-stream-file-handle.js`

### 1 × `Uncaught (in promise) AssertionError: The <str> validation function is expected to return <str>. Received false Caught error: AssertionError: Expected values to`

distinct messages:
- `Uncaught (in promise) AssertionError: The "bound " validation function is expected to return "true". Received false

Caught error:

AssertionError: Expected values to be strictly deep-equal:
+ actual - expected

+ null
- {
-   code: 'FOO'
- }`
example test: `test/parallel/test-assert-async.js`

### 1 × `Uncaught (in promise) AssertionError: The input did not match the regular expression /No such built-in module: node:stream\/iter/. Input: <str>`

distinct messages:
- `Uncaught (in promise) AssertionError: The input did not match the regular expression /No such built-in module: node:stream\/iter/. Input:

''`
example test: `test/parallel/test-stream-iter-disabled.js`

### 1 × `Uncaught (in promise) AssertionError: The validation function is expected to return <str>. Received false Caught error: TypeError: Module not found: <str>`

distinct messages:
- `Uncaught (in promise) AssertionError: The validation function is expected to return "true". Received false

Caught error:

TypeError: Module not found: 'does-not-exist'`
example test: `test/parallel/test-diagnostics-channel-module-import-error.js`

### 1 × `Uncaught (in promise) DataCloneError: Found invalid value in transferList Uncaught (in promise) DataCloneError: Found invalid value in transferList Uncaught (in`

distinct messages:
- `Uncaught (in promise) DataCloneError: Found invalid value in transferList
Uncaught (in promise) DataCloneError: Found invalid value in transferList
Uncaught (in promise) Error: node:worker_threads: moveMessagePortToContext is not implemented yet in Elide
Uncaught (in promise) AssertionError: Expecte`
example test: `test/parallel/test-worker-message-port-transfer-filehandle.js`

### 1 × `Uncaught (in promise) DataCloneError: function read() { [native code] } could not be cloned.`

distinct messages:
- `Uncaught (in promise) DataCloneError: function read() { [native code] } could not be cloned.`
example test: `test/parallel/test-fs-promises-file-handle-read-worker.js`

### 1 × `Uncaught (in promise) Error: node:worker_threads: moveMessagePortToContext is not implemented yet in Elide`

distinct messages:
- `Uncaught (in promise) Error: node:worker_threads: moveMessagePortToContext is not implemented yet in Elide`
example test: `test/parallel/test-crypto-key-objects-messageport.js`

### 1 × `Uncaught (in promise) NotSupportedError: Unrecognized algorithm name Uncaught (in promise) AssertionError: Expected values to be strictly deep-equal: + actual -`

distinct messages:
- `Uncaught (in promise) NotSupportedError: Unrecognized algorithm name
Uncaught (in promise) AssertionError: Expected values to be strictly deep-equal:
+ actual - expected

  Comparison {
+   message: 'Unrecognized algorithm name',
+   name: 'NotSupportedError'
-   message: 'Invalid TurboShakeParams o`
example test: `test/parallel/test-webcrypto-digest-turboshake.js`

### 1 × `Uncaught (in promise) SyntaxError: Variable <str> has already been declared`

distinct messages:
- `Uncaught (in promise) SyntaxError: Variable "__filename" has already been declared`
example test: `test/parallel/test-worker-track-unmanaged-fds.js`

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
example test: `test/parallel/test-events-once.js`

### 1 × `Uncaught (in promise) TypeError: The argument <str> must be a non-empty string. Received <str> Uncaught (in promise) TypeError: The argument <str> must be a non`

distinct messages:
- `Uncaught (in promise) TypeError: The argument 'hostname' must be a non-empty string. Received ''
Uncaught (in promise) TypeError: The argument 'hostname' must be a non-empty string. Received null
Uncaught (in promise) TypeError: The argument 'hostname' must be a non-empty string. Received undefined
`
example test: `test/parallel/test-dns.js`

### 1 × `Uncaught (in promise) TypeError: The first argument must be of type string or an instance of Buffer, ArrayBuffer, or Array or an Array-like Object. Received und`

distinct messages:
- `Uncaught (in promise) TypeError: The first argument must be of type string or an instance of Buffer, ArrayBuffer, or Array or an Array-like Object. Received undefined
Uncaught (in promise) TypeError: The first argument must be of type string or an instance of Buffer, ArrayBuffer, or Array or an Arra`
example test: `test/parallel/test-stream-consumers.js`

## By feature

| count | feature |
|---:|---|
| 25 | node:diagnostics-channel |
| 23 | node:streams |
| 23 | node:worker-threads |
| 18 | node:fs |
| 17 | node:crypto |
| 15 | node:vm |
| 10 | node:async-hooks |
| 10 | node:process |
| 9 | node:util |
| 7 | node:module-loading |
| 6 | node:assert |
| 6 | node:buffer |
| 4 | node:events |
| 3 | node:dns |
| 3 | node:timers |
| 2 | node:url |
| 1 | node:console |
