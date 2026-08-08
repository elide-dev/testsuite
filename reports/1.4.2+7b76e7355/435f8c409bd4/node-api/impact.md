# Impact-ordered failures

## By root-cause signature

### 94 × `Node API test timed out`

distinct messages:
- `Node API test timed out`
example test: `test/parallel/test-async-hooks-execution-async-resource-await.js`

### 33 × `AssertionError: Missing expected exception. at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Missing expected exception.
    at :anonymous (test-buffer-set-inspect-max-bytes.js:11:3)
    at :program (test-buffer-set-inspect-max-bytes.js:1:1)`
- `AssertionError: Missing expected exception.
    at :anonymous (test-child-process-advanced-serialization.js:10:5)
    at :program (test-child-process-advanced-serialization.js:1:1)`
- `AssertionError: Missing expected exception.
    at :anonymous (test-child-process-fork-stdio-string-variant.js:16:1)
    at :program (test-child-process-fork-stdio-string-variant.js:1:1)`
- `AssertionError: Missing expected exception.
    at :anonymous (test-child-process-stdio.js:69:1)
    at :program (test-child-process-stdio.js:1:1)`
- `AssertionError: Missing expected exception.
    at :anonymous (test-console-table.js:26:1)
    at :program (test-console-table.js:1:1)`
example test: `test/parallel/test-buffer-set-inspect-max-bytes.js`

### 26 × `Mismatched <anonymous> function calls. Expected exactly <n>, actual <n>. at Proxy.mustCall (<loc>) at <loc> at <loc>`

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
    at test-domain-fs-enoent-stream.js:12:22
    at test-domain-fs-enoent-stream.js:1:1`
- `Mismatched <anonymous> function calls. Expected exactly 1, actual 0.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at test-domain-implicit-binding.js:14:24
    at test-domain-implicit-binding.js:1:1`
- `Mismatched <anonymous> function calls. Expected exactly 1, actual 0.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at test-domain-implicit-fs.js:33:22
    at test-domain-implicit-fs.js:1:1`
example test: `test/parallel/test-child-process-internal.js`

### 24 × `AssertionError: <n> === <n> at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: 8 === 0
    at :anonymous (test-buffer-copy-immutable.js:19:3)
    at :program (test-buffer-copy-immutable.js:1:1)`
- `AssertionError: 10 === 101
    at :anonymous (test-events-getmaxlisteners.js:18:3)
    at :program (test-events-getmaxlisteners.js:1:1)`
- `AssertionError: 1 === 2
    at :anonymous (test-fs-realpath-pipe.js:38:3)
    at :program (test-fs-realpath-pipe.js:1:1)`
- `AssertionError: 0 === 10
    at :anonymous (test-http-max-header-size.js:11:1)
    at :program (test-http-max-header-size.js:1:1)`
- `AssertionError: 60000 === 20000
    at :anonymous (test-http-server-timeouts-validation.js:35:3)
    at :program (test-http-server-timeouts-validation.js:1:1)`
example test: `test/parallel/test-buffer-copy-immutable.js`

### 22 × `AssertionError: <str> === <str> at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: '<Buffer 31 32 33 34>' === '<Buffer 31 32 ... 2 more bytes>'
    at :anonymous (test-buffer-inspect.js:38:1)
    at :program (test-buffer-inspect.js:1:1)`
- `AssertionError: 'abc' === ''
    at :anonymous (test-buffer-tostring-range.js:10:1)
    at :program (test-buffer-tostring-range.js:1:1)`
- `AssertionError: '/opt/elide/bin/elide' === 'withArgv0'
    at :anonymous (test-child-process-spawn-argv0.js:18:1)
    at :program (test-child-process-spawn-argv0.js:1:1)`
- `AssertionError: '' === 'default: 1 '
    at :anonymous (test-console-count.js:13:1)
    at :program (test-console-count.js:1:1)`
- `AssertionError: 'Hello 42 ' === 'Hello [33m42[39m '
    at :anonymous (test-console-tty-colors-per-stream.js:22:1)
    at :program (test-console-tty-colors-per-stream.js:1:1)`
example test: `test/parallel/test-buffer-inspect.js`

### 19 × `AssertionError: false == true at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: false == true
    at :anonymous (test-buffer-includes.js:32:1)
    at :program (test-buffer-includes.js:1:1)`
- `AssertionError: false == true
    at :anonymous (test-console-instance.js:41:1)
    at :program (test-console-instance.js:1:1)`
- `AssertionError: false == true
    at :anonymous (test-diagnostics-channel-tracing-channel-promise-thenable.js:54:1)
    at :program (test-diagnostics-channel-tracing-channel-promise-thenable.js:1:1)`
- `AssertionError: false == true
    at :anonymous (test-diagnostics-channel-tracing-channel-promise-spoofed-constructor.js:50:1)
    at :program (test-diagnostics-channel-tracing-channel-promise-spoofed-constructor.js:1:1)`
- `AssertionError: false == true
    at :anonymous (test-dns-get-server.js:8:1)
    at :program (test-dns-get-server.js:1:1)`
example test: `test/parallel/test-buffer-includes.js`

### 14 × `Mismatched noop function calls. Expected exactly <n>, actual <n>. at Proxy.mustCall (<loc>) at <loc> at <loc>`

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
    at test-diagnostics-channel-tracing-channel-promise-error.js:36:15
    at test-diagnostics-channel-tracing-channel-promise-error.js:1:1`
- `Mismatched noop function calls. Expected exactly 1, actual 0.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at test-dns-lookupService-promises.js:19:15
    at test-dns-lookupService-promises.js:1:1`
- `Mismatched noop function calls. Expected exactly 1, actual 2.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at test-event-emitter-once.js:48:20
    at test-event-emitter-once.js:1:1`
example test: `test/parallel/test-async-hooks-enable-disable.js`

### 12 × `TypeError: Cannot read property <str> of undefined at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: Cannot read property 'triggerId' of undefined
    at :anonymous (test-async-hooks-promise.js:28:20)
    at :program (test-async-hooks-promise.js:1:1)`
- `TypeError: Cannot read property 'default' of undefined
    at :anonymous (test-event-emitter-check-listener-leaks.js:35:28)
    at :program (test-event-emitter-check-listener-leaks.js:1:1)`
- `TypeError: Cannot read property 'foo' of undefined
    at :anonymous (test-event-emitter-remove-listeners.js:163:22)
    at :program (test-event-emitter-remove-listeners.js:1:1)`
- `TypeError: Cannot read property 'hasOwnProperty' of undefined
    at :anonymous (test-event-emitter-special-event-names.js:12:20)
    at :program (test-event-emitter-special-event-names.js:1:1)`
- `TypeError: Cannot read property 'finally' of undefined
    at :anonymous (test-perf-hooks-timerify-basic.js:25:1)
    at :program (test-perf-hooks-timerify-basic.js:1:1)`
example test: `test/parallel/test-async-hooks-promise.js`

### 11 × `TypeError: Cannot load module: <str> at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: Cannot load module: 'internal/test/binding'
    at :anonymous (test-fs-access.js:17:29)
    at :program (test-fs-access.js:1:1)`
- `TypeError: Cannot load module: 'internal/js_stream_socket'
    at :anonymous (test-http-agent-domain-reused-gc.js:40:24)
    at :program (test-http-agent-domain-reused-gc.js:1:1)`
- `TypeError: Cannot load module: '/work/.harness/work/node-api/node-api-overlay/tools/icu/icu_versions.json'
    at :anonymous (test-icu-minimum-version.js:13:37)
    at :program (test-icu-minimum-version.js:1:1)`
- `TypeError: Cannot load module: '/work/.harness/work/node-api/node-test/.tmp.1925/index'
    at :anonymous (test-module-circular-symlinks.js:64:13)
    at :program (test-module-circular-symlinks.js:1:1)`
- `TypeError: Cannot load module: '../fixtures/packages/missing-main'
    at :anonymous (test-module-loading-deprecated.js:10:20)
    at :program (test-module-loading-deprecated.js:1:1)`
example test: `test/parallel/test-fs-access.js`

### 9 × `Mismatched <anonymous> function calls. Expected exactly <n>, actual <n>. at Proxy.mustCall (<loc>) at EventEmitter.<anonymous> (<loc>) at EventEmitter._return (`

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
- `Mismatched <anonymous> function calls. Expected exactly 1, actual 0.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at EventEmitter.<anonymous> (test-http-server-headers-null-proto.js:38:26)
    at EventEmitter._return (/work/.harness/work/node-`
- `Mismatched <anonymous> function calls. Expected exactly 1, actual 0.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at EventEmitter.<anonymous> (test-http-no-read-no-dump.js:14:26)
    at EventEmitter._return (/work/.harness/work/node-api/node-a`
example test: `test/parallel/test-diagnostics-channel-net.js`

### 8 × `(node:<n>) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Bu`

distinct messages:
- `(node:761) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.
AssertionError: 5 === 4
    at :=> (test-buffer-alloc.js:293:5)
    at :anonymous (test-buffer-alloc.js:273:1)
`
- `(node:873) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.
AssertionError: 2 === 3
    at :anonymous (test-buffer-bytelength.js:101:1)
    at :program (test-buffer-bytele`
- `(node:1098) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.
AssertionError: DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use th`
- `(node:1314) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.
AssertionError: Missing expected exception.
    at :anonymous (test-buffer-new.js:6:1)
    at :program (test-b`
- `(node:1363) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.
TypeError: The first argument must be of type string or an instance of Buffer, ArrayBuffer, or Array or an Arr`
example test: `test/parallel/test-buffer-alloc.js`

### 8 × `Mismatched <anonymous> function calls. Expected exactly <n>, actual <n>. at Proxy.mustCall (<loc>) at <loc> at <loc> Mismatched <anonymous> function calls. Expe`

distinct messages:
- `Mismatched <anonymous> function calls. Expected exactly 1, actual 0.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at test-dns-perf_hooks.js:24:43
    at test-dns-perf_hooks.js:1:1
Mismatched <anonymous> function calls. Expected exactly 1, actu`
- `Mismatched <anonymous> function calls. Expected exactly 1, actual 0.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at test-http-parser-multiple-execute.js:27:30
    at test-http-parser-multiple-execute.js:1:1
Mismatched <anonymous> function cal`
- `Mismatched <anonymous> function calls. Expected exactly 3, actual 1.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at test-stream-readable-emittedReadable.js:14:32
    at test-stream-readable-emittedReadable.js:1:1
Mismatched <anonymous> functi`
- `Mismatched <anonymous> function calls. Expected exactly 1, actual 0.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at test-stream-readable-emit-readable-short-stream.js:20:19
    at test-stream-readable-emit-readable-short-stream.js:1:1
Mismatc`
- `Mismatched <anonymous> function calls. Expected exactly 1, actual 0.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at test-stream-readable-event.js:40:21
    at test-stream-readable-event.js:1:1
Mismatched <anonymous> function calls. Expected e`
example test: `test/parallel/test-dns-perf_hooks.js`

### 7 × `AssertionError: function should not have been called at <loc> called with arguments: IncomingMessage { socket: <ref *<n>> Socket { _handle: {}, _allowHalfOpen: `

distinct messages:
- `AssertionError: function should not have been called at test-http-double-content-length.js:10
called with arguments: IncomingMessage {
  socket: <ref *1> Socket {
    _handle: {},
    _allowHalfOpen: true,
    connecting: false,
    _connected: true,
    _readableEnded: false,
    _writableFinished:`
- `AssertionError: function should not have been called at test-http-highwatermark.js:11
called with arguments: IncomingMessage {
  socket: <ref *1> Socket {
    _handle: {},
    _allowHalfOpen: true,
    connecting: false,
    _connected: true,
    _readableEnded: false,
    _writableFinished: false,
`
- `AssertionError: function should not have been called at test-http-invalid-te.js:27
called with arguments: IncomingMessage {
  socket: <ref *1> Socket {
    _handle: {},
    _allowHalfOpen: true,
    connecting: false,
    _connected: true,
    _readableEnded: false,
    _writableFinished: false,
   `
- `AssertionError: function should not have been called at test-http-missing-header-separator-cr.js:44
called with arguments: IncomingMessage {
  socket: <ref *1> Socket {
    _handle: {},
    _allowHalfOpen: true,
    connecting: false,
    _connected: true,
    _readableEnded: false,
    _writableFin`
- `AssertionError: function should not have been called at test-http-missing-header-separator-lf.js:44
called with arguments: IncomingMessage {
  socket: <ref *1> Socket {
    _handle: {},
    _allowHalfOpen: true,
    connecting: false,
    _connected: true,
    _readableEnded: false,
    _writableFin`
example test: `test/parallel/test-http-double-content-length.js`

### 7 × `AssertionError: Missing expected exception. at :=> (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Missing expected exception.
    at :=> (test-async-local-storage-bind.js:8:3)
    at :anonymous (test-async-local-storage-bind.js:7:1)
    at :program (test-async-local-storage-bind.js:1:1)`
- `AssertionError: Missing expected exception.
    at :=> (test-dgram-custom-lookup.js:39:5)
    at :anonymous (test-dgram-custom-lookup.js:38:3)
    at :program (test-dgram-custom-lookup.js:1:1)`
- `AssertionError: Missing expected exception.
    at :=> (test-dns-resolver-max-timeout.js:20:3)
    at :anonymous (test-dns-resolver-max-timeout.js:8:1)
    at :program (test-dns-resolver-max-timeout.js:1:1)`
- `AssertionError: Missing expected exception.
    at :=> (test-event-capture-rejections.js:15:5)
    at :anonymous (test-event-capture-rejections.js:14:3)
    at :program (test-event-capture-rejections.js:1:1)`
- `AssertionError: Missing expected exception.
    at :=> (test-http-server.js:33:3)
    at :anonymous (test-http-server.js:32:1)
    at :program (test-http-server.js:1:1)`
example test: `test/parallel/test-async-local-storage-bind.js`

### 6 × `AssertionError: <str> === <str> at Function.strictEqual (native) at EventEmitter.<anonymous> (<loc>) at EventEmitter._return (<loc>) at EventEmitter.emit (nativ`

distinct messages:
- `AssertionError: 'ENOTDIR' === 'ENOENT'
    at Function.strictEqual (native)
    at EventEmitter.<anonymous> (test-child-process-cwd.js:73:14)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)
    at AssertionErro`
- `AssertionError: '' === 'buzz'
    at Function.strictEqual (native)
    at EventEmitter.<anonymous> (test-child-process-spawn-shell.js:69:10)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)
    at AssertionError`
- `AssertionError: 'foo:1234' === 'foo:1234:80'
    at Function.strictEqual (native)
    at EventEmitter.<anonymous> (test-http-host-header-ipv6-fail.js:30:10)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)
    a`
- `AssertionError: '1' === '1, 2'
    at Function.strictEqual (native)
    at EventEmitter.<anonymous> (test-http-request-join-authorization-headers.js:11:12)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)
    at`
- `AssertionError: 'ERR_HTTP_INVALID_HEADER_VALUE' === 'ERR_INVALID_ARG_VALUE'
    at Function.strictEqual (native)
    at EventEmitter.<anonymous> (test-http-write-head-2.js:49:14)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitt`
example test: `test/parallel/test-child-process-cwd.js`

### 6 × `AssertionError: Got unwanted exception: undefined at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Got unwanted exception: undefined
    at :anonymous (test-event-emitter-emit-context.js:12:3)
    at :program (test-event-emitter-emit-context.js:1:1)`
- `AssertionError: Got unwanted exception: undefined
    at :anonymous (test-event-emitter-error-monitor.js:17:1)
    at :program (test-event-emitter-error-monitor.js:1:1)`
- `AssertionError: Got unwanted exception: undefined
    at :anonymous (test-event-emitter-errors.js:9:1)
    at :program (test-event-emitter-errors.js:1:1)`
- `AssertionError: Got unwanted exception: undefined
    at :anonymous (test-global-domexception.js:9:1)
    at :program (test-global-domexception.js:1:1)`
- `AssertionError: Got unwanted exception: undefined
    at :anonymous (test-worker-invalid-workerdata.js:10:1)
    at :program (test-worker-invalid-workerdata.js:1:1)`
example test: `test/parallel/test-event-emitter-emit-context.js`

### 6 × `AssertionError: undefined === <n> at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: undefined === 1
    at :anonymous (test-fs-read-stream-inherit.js:73:3)
    at :program (test-fs-read-stream-inherit.js:1:1)`
- `AssertionError: undefined === 1500
    at :anonymous (test-http-agent-keep-alive-timeout-buffer.js:10:3)
    at :program (test-http-agent-keep-alive-timeout-buffer.js:1:1)`
- `AssertionError: undefined === 50
    at :anonymous (test-readline-interface-escapecodetimeout.js:24:3)
    at :program (test-readline-interface-escapecodetimeout.js:1:1)`
- `AssertionError: undefined === 0
    at :anonymous (test-stream-writableState-uncorked-bufferedRequestCount.js:21:1)
    at :program (test-stream-writableState-uncorked-bufferedRequestCount.js:1:1)`
- `AssertionError: undefined === 4
    at :anonymous (test-vm-context-property-forwarding.js:33:1)
    at :program (test-vm-context-property-forwarding.js:1:1)`
example test: `test/parallel/test-fs-read-stream-inherit.js`

### 6 × `AssertionError: undefined === <str> at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: undefined === 'before'
    at :anonymous (test-diagnostics-channel-bounded-channel-scope-error.js:65:3)
    at :program (test-diagnostics-channel-bounded-channel-scope-error.js:1:1)`
- `AssertionError: undefined === 'ENODATA'
    at :anonymous (test-dns-promises-exists.js:10:1)
    at :program (test-dns-promises-exists.js:1:1)`
- `AssertionError: undefined === 'fhqwhgads'
    at :anonymous (test-http-incoming-message-connection-setter.js:18:1)
    at :program (test-http-incoming-message-connection-setter.js:1:1)`
- `AssertionError: undefined === 'undefined'
    at :anonymous (test-process-env-delete.js:8:1)
    at :program (test-process-env-delete.js:1:1)`
- `AssertionError: undefined === 'undefined'
    at :anonymous (test-process-env-deprecation.js:20:1)
    at :program (test-process-env-deprecation.js:1:1)`
example test: `test/parallel/test-diagnostics-channel-bounded-channel-scope-error.js`

### 6 × `DOMException at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `DOMException
    at :anonymous (test-process-env.js:114:15)
    at :program (test-process-env.js:1:1)`
- `DOMException
    at :anonymous (test-worker-broadcastchannel.js:117:3)
    at :program (test-worker-broadcastchannel.js:1:1)`
- `DOMException
    at :anonymous (test-worker-message-channel.js:17:3)
    at :program (test-worker-message-channel.js:1:1)`
- `DOMException
    at :anonymous (test-worker-message-port-arraybuffer.js:14:3)
    at :program (test-worker-message-port-arraybuffer.js:1:1)`
- `DOMException
    at :anonymous (test-worker-message-port-message-port-transferring.js:13:3)
    at :program (test-worker-message-port-message-port-transferring.js:1:1)`
example test: `test/parallel/test-process-env.js`

### 6 × `Mismatched noop function calls. Expected exactly <n>, actual <n>. at Proxy.mustCall (<loc>) at <loc> at <loc> Mismatched noop function calls. Expected exactly <`

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
- `Mismatched noop function calls. Expected exactly 1, actual 0.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at test-vm-dynamic-import-callback-missing-flag.js:19:16
    at test-vm-dynamic-import-callback-missing-flag.js:1:1
Mismatched noop func`
- `Mismatched noop function calls. Expected exactly 1, actual 0.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at test-vm-no-dynamic-import-callback.js:13:16
    at test-vm-no-dynamic-import-callback.js:1:1
Mismatched noop function calls. Expected`
example test: `test/parallel/test-async-hooks-disable-during-promise.js`

### 6 × `Uncaught (in promise) TypeError: Cannot read property <str> of undefined`

distinct messages:
- `Uncaught (in promise) TypeError: Cannot read property '1' of undefined`
- `Uncaught (in promise) TypeError: Cannot read property 'request' of undefined`
- `Uncaught (in promise) TypeError: Cannot read property 'high' of undefined`
- `Uncaught (in promise) TypeError: Cannot read property 'Symbol(Symbol.iterator)' of undefined`
- `Uncaught (in promise) TypeError: Cannot read property 'from' of undefined`
example test: `test/parallel/test-async-hooks-async-await.js`

### 5 × `AssertionError: false === true at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: false === true
    at :anonymous (test-file.js:27:5)
    at :program (test-file.js:1:1)`
- `AssertionError: false === true
    at :anonymous (test-fs-mkdir.js:134:3)
    at :program (test-fs-mkdir.js:1:1)`
- `AssertionError: false === true
    at :anonymous (test-fs-promises.js:46:1)
    at :program (test-fs-promises.js:1:1)`
- `AssertionError: false === true
    at :anonymous (test-stream-duplex-from.js:114:3)
    at :program (test-stream-duplex-from.js:1:1)`
- `AssertionError: false === true
    at :anonymous (test-stream-writable-end-cb-error.js:73:3)
    at :program (test-stream-writable-end-cb-error.js:1:1)`
example test: `test/parallel/test-file.js`

### 5 × `AssertionError: Got unwanted exception: Cannot load module: <str> at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Got unwanted exception: Cannot load module: '/work/.harness/work/node-api/node-test/.tmp.1922/test-module-cache.json'
    at :anonymous (test-module-cache.js:9:1)
    at :program (test-module-cache.js:1:1)`
- `AssertionError: Got unwanted exception: Cannot load module: 'package.json'
    at :anonymous (test-require-invalid-package.js:7:1)
    at :program (test-require-invalid-package.js:1:1)`
- `AssertionError: Got unwanted exception: Cannot load module: ' ab'
    at :anonymous (test-require-nul.js:8:1)
    at :program (test-require-nul.js:1:1)`
- `AssertionError: Got unwanted exception: Cannot load module: 'node:unknown'
    at :anonymous (test-require-node-prefix.js:15:3)
    at :program (test-require-node-prefix.js:1:1)`
- `AssertionError: Got unwanted exception: Cannot load module: '../fixtures/es-modules/test-esm-ok.mjs'
    at :anonymous (test-require-mjs.js:10:1)
    at :program (test-require-mjs.js:1:1)`
example test: `test/parallel/test-module-cache.js`

### 5 × `Mismatched <anonymous> function calls. Expected exactly <n>, actual <n>. at mustCall (<loc>) at _expectWarning (<loc>) at Proxy.expectWarning (<loc>) at <loc> a`

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

### 4 × `AssertionError: {} === {} at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: {} === {}
    at :anonymous (test-buffer-arraybuffer.js:16:1)
    at :program (test-buffer-arraybuffer.js:1:1)`
- `AssertionError: {} === {}
    at :anonymous (test-buffer-pool-untransferable.js:12:1)
    at :program (test-buffer-pool-untransferable.js:1:1)`
- `AssertionError: {} === {}
    at :anonymous (test-stream-promises.js:17:1)
    at :program (test-stream-promises.js:1:1)`
- `AssertionError: {} === {}
    at :anonymous (test-btoa-atob.js:9:1)
    at :program (test-btoa-atob.js:1:1)`
example test: `test/parallel/test-buffer-arraybuffer.js`

### 4 × `AssertionError: undefined === <n> at Function.strictEqual (native) at Object.messageSent (<loc>) at Object.<anonymous> (<loc>) at Object._return (<loc>) at Asse`

distinct messages:
- `AssertionError: undefined === 236
    at Function.strictEqual (native)
    at Object.messageSent (test-dgram-connect-send-callback-buffer-length.js:15:10)
    at Object.<anonymous> (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:538:17)
    at Object._return (/work/.harness/work/`
- `AssertionError: undefined === 236
    at Function.strictEqual (native)
    at Object.messageSent (test-dgram-send-callback-buffer-length-empty-address.js:15:10)
    at Object.<anonymous> (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:538:17)
    at Object._return (/work/.harness`
- `AssertionError: undefined === 236
    at Function.strictEqual (native)
    at Object.messageSent (test-dgram-send-callback-buffer-length.js:36:10)
    at Object.<anonymous> (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:538:17)
    at Object._return (/work/.harness/work/node-api`
- `AssertionError: undefined === 512
    at Function.strictEqual (native)
    at Object.messageSent (test-dgram-send-callback-multi-buffer-empty-address.js:10:10)
    at Object.<anonymous> (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:538:17)
    at Object._return (/work/.harness/`
example test: `test/parallel/test-dgram-connect-send-callback-buffer-length.js`

### 4 × `AssertionError: undefined === <str> at Function.strictEqual (native) at EventEmitter.<anonymous> (<loc>) at EventEmitter._return (<loc>) at EventEmitter.emit (n`

distinct messages:
- `AssertionError: undefined === '/blah/fadfa'
    at Function.strictEqual (native)
    at EventEmitter.<anonymous> (test-net-better-error-messages-listen-path.js:9:10)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (nati`
- `AssertionError: undefined === '1.1.1.1'
    at Function.strictEqual (native)
    at EventEmitter.<anonymous> (test-net-better-error-messages-listen.js:9:10)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)
    a`
- `AssertionError: undefined === '6::::0'
    at Function.strictEqual (native)
    at EventEmitter.<anonymous> (test-net-listen-invalid-port.js:17:10)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)
    at Asserti`
- `AssertionError: undefined === 'ERR_WORKER_UNSERIALIZABLE_ERROR'
    at Function.strictEqual (native)
    at EventEmitter.<anonymous> (test-worker-message-not-serializable.js:23:10)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmi`
example test: `test/parallel/test-net-better-error-messages-listen-path.js`

### 4 × `TypeError: Cannot read property <str> of null at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: Cannot read property 'on' of null
    at :anonymous (test-worker-message-port-drain.js:25:5)
    at :program (test-worker-message-port-drain.js:1:1)`
- `TypeError: Cannot read property 'on' of null
    at :anonymous (test-worker-no-stdin-stdout-interaction.js:13:3)
    at :program (test-worker-no-stdin-stdout-interaction.js:1:1)`
- `TypeError: Cannot read property 'setEncoding' of null
    at :anonymous (test-worker-stdio-flush-inflight.js:11:3)
    at :program (test-worker-stdio-flush-inflight.js:1:1)`
- `TypeError: Cannot read property 'setEncoding' of null
    at :anonymous (test-worker-stdio-flush.js:11:3)
    at :program (test-worker-stdio-flush.js:1:1)`
example test: `test/parallel/test-worker-message-port-drain.js`

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

### 4 × `Uncaught (in promise) AssertionError: <str> === <str>`

distinct messages:
- `Uncaught (in promise) AssertionError: 'undefined' === '[Module: null prototype] { a: <uninitialized>, b: undefined }'`
- `Uncaught (in promise) AssertionError: 'undefined' === 'object'`
- `Uncaught (in promise) AssertionError: 'Object' === 'FileHandle'`
example test: `test/parallel/test-util-inspect-namespace.js`

### 4 × `Uncaught (in promise) TypeError: push is not a function`

distinct messages:
- `Uncaught (in promise) TypeError: push is not a function`
example test: `test/parallel/test-stream-iter-consumers-merge.js`

### 3 × `AssertionError: <n> === <n> at :anonymous (<loc>) at _return (<loc>)`

distinct messages:
- `AssertionError: 24576 === 8192
    at :anonymous (test-stream-readable-infinite-read.js:24:3)
    at _return (index.js:573:12)`
- `AssertionError: 3 === 2
    at :anonymous (test-stream-transform-final-sync.js:102:3)
    at _return (index.js:573:12)`
- `AssertionError: 3 === 2
    at :anonymous (test-stream-transform-final.js:104:3)
    at _return (index.js:573:12)`
example test: `test/parallel/test-stream-readable-infinite-read.js`

### 3 × `AssertionError: <n> === <n> at Function.strictEqual (native) at EventEmitter.<anonymous> (<loc>) at EventEmitter._return (<loc>) at EventEmitter.emit (native) a`

distinct messages:
- `AssertionError: 1 === 0
    at Function.strictEqual (native)
    at EventEmitter.<anonymous> (test-fs-write-stream-patch-open.js:18:12)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)
    at AssertionError.get `
- `AssertionError: 102 === 50
    at Function.strictEqual (native)
    at EventEmitter.<anonymous> (test-http-max-headers-count.js:47:10)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)
    at Duplex.push (native)`
- `AssertionError: 0 === 1
    at Function.strictEqual (native)
    at EventEmitter.<anonymous> (test-worker-beforeexit-throw-exit.js:25:10)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)
    at AssertionError.ge`
example test: `test/parallel/test-fs-write-stream-patch-open.js`

### 3 × `AssertionError: <n> === <n> at test (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: 438 === 511
    at test (test-fs-chmod-mask.js:41:5)
    at :anonymous (test-fs-chmod-mask.js:88:1)
    at :program (test-fs-chmod-mask.js:1:1)`
- `AssertionError: 493 === 420
    at test (test-fs-mkdir-mode-mask.js:28:5)
    at :anonymous (test-fs-mkdir-mode-mask.js:39:1)
    at :program (test-fs-mkdir-mode-mask.js:1:1)`
- `AssertionError: 18 === 436
    at test (test-process-umask-mask.js:27:3)
    at :anonymous (test-process-umask-mask.js:32:1)
    at :program (test-process-umask-mask.js:1:1)`
example test: `test/parallel/test-fs-chmod-mask.js`

### 3 × `AssertionError: <str> === <str> at :=> (<loc>) at _return (<loc>)`

distinct messages:
- `AssertionError: '{"a":2}' === '{ a: 2 }'
    at :=> (test-console-tty-colors.js:19:7)
    at _return (index.js:573:12)`
- `AssertionError: '��bar' === '☃bar'
    at :=> (test-readline-reopen.js:39:5)
    at _return (index.js:573:12)`
- `AssertionError: '' === '0123456789012345678901234567890123456789'
    at :=> (test-zlib-premature-end.js:28:7)
    at _return (index.js:573:12)`
example test: `test/parallel/test-console-tty-colors.js`

### 3 × `AssertionError: false === true at :=> (<loc>) at _return (<loc>)`

distinct messages:
- `AssertionError: false === true
    at :=> (test-fs-write-stream-end.js:57:5)
    at _return (index.js:573:12)`
- `AssertionError: false === true
    at :=> (test-stream-readable-object-multi-push-async.js:163:5)
    at _return (index.js:573:12)`
- `AssertionError: false === true
    at :=> (test-stream-writable-finished.js:92:7)
    at _return (index.js:573:12)`
example test: `test/parallel/test-fs-write-stream-end.js`

### 3 × `AssertionError: function should not have been called at <loc> at Function.fail (native) at EventEmitter.mustNotCall (<loc>) at EventEmitter.emit (native) at Ass`

distinct messages:
- `AssertionError: function should not have been called at test-net-listen-close-server-callback-is-not-function.js:9
    at Function.fail (native)
    at EventEmitter.mustNotCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:631:12)
    at EventEmitter.emit (native)
    at Assert`
- `AssertionError: function should not have been called at test-net-listen-close-server.js:27
    at Function.fail (native)
    at EventEmitter.mustNotCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:631:12)
    at EventEmitter.emit (native)
    at AssertionError.get stack (nati`
- `AssertionError: function should not have been called at test-net-server-close-before-calling-lookup-callback.js:7
    at Function.fail (native)
    at EventEmitter.mustNotCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:631:12)
    at EventEmitter.emit (native)
    at Asserti`
example test: `test/parallel/test-net-listen-close-server-callback-is-not-function.js`

### 3 × `AssertionError: Got unwanted exception: (intermediate value).execve is not a function at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Got unwanted exception: (intermediate value).execve is not a function
    at :anonymous (test-process-execve-permission-fail.js:18:3)
    at :program (test-process-execve-permission-fail.js:1:1)`
- `AssertionError: Got unwanted exception: (intermediate value).execve is not a function
    at :anonymous (test-process-execve-throws.js:13:1)
    at :program (test-process-execve-throws.js:1:1)`
- `AssertionError: Got unwanted exception: (intermediate value).execve is not a function
    at :anonymous (test-process-execve-validation.js:14:5)
    at :program (test-process-execve-validation.js:1:1)`
example test: `test/parallel/test-process-execve-permission-fail.js`

### 3 × `AssertionError: Got unwanted exception: Header name must be a valid HTTP token [<str>] at Function.throws (native) at EventEmitter.<anonymous> (<loc>) at EventE`

distinct messages:
- `AssertionError: Got unwanted exception: Header name must be a valid HTTP token ["testing 123"]
    at Function.throws (native)
    at EventEmitter.<anonymous> (test-http-invalidheaderfield.js:24:10)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:1`
- `AssertionError: Got unwanted exception: Header name must be a valid HTTP token ["undefined"]
    at Function.throws (native)
    at EventEmitter.<anonymous> (test-http-mutable-headers.js:54:14)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
  `
- `AssertionError: Got unwanted exception: Header name must be a valid HTTP token ["3840"]
    at Function.throws (native)
    at EventEmitter.<anonymous> (test-http-write-head.js:35:10)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at Event`
example test: `test/parallel/test-http-invalidheaderfield.js`

### 3 × `AssertionError: no error event at <loc> called with arguments: Error: kaboom at <loc> at <loc> at mustNotCall (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: no error event at test-stream-duplex-destroy.js:80 called with arguments: Error: kaboom     at test-stream-duplex-destroy.js:65:20     at test-stream-duplex-destroy.js:1:1
    at mustNotCall (index.js:631:5)
    at :anonymous (test-stream-duplex-destroy.js:83:3)
    at :program (test`
- `AssertionError: no error event at test-stream-transform-destroy.js:76 called with arguments: Error: kaboom     at test-stream-transform-destroy.js:61:20     at test-stream-transform-destroy.js:1:1
    at mustNotCall (index.js:631:5)
    at :anonymous (test-stream-transform-destroy.js:78:3)
    at :p`
- `AssertionError: no error event at test-stream-writable-destroy.js:87 called with arguments: Error: kaboom     at test-stream-writable-destroy.js:81:20     at test-stream-writable-destroy.js:1:1
    at mustNotCall (index.js:631:5)
    at :anonymous (test-stream-writable-destroy.js:89:3)
    at :progr`
example test: `test/parallel/test-stream-duplex-destroy.js`

### 3 × `AssertionError: true === false at Function.strictEqual (native) at <loc> at _return (<loc>) at Duplex.write (native) at Duplex.<anonymous> (<loc>) at Duplex._re`

distinct messages:
- `AssertionError: true === false
    at Function.strictEqual (native)
    at /work/.harness/work/node-api/node-api-overlay/test/common/index.js:804:12
    at _return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at Duplex.write (native)
    at Duplex.<anonymous> (test`
- `AssertionError: true === false
    at Function.strictEqual (native)
    at /work/.harness/work/node-api/node-api-overlay/test/common/index.js:804:12
    at _return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at Duplex.write (native)
    at Duplex.<anonymous> (test`
- `AssertionError: true === false
    at Function.strictEqual (native)
    at /work/.harness/work/node-api/node-api-overlay/test/common/index.js:804:12
    at _return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at Duplex.write (native)
    at Duplex.<anonymous> (test`
example test: `test/parallel/test-net-connect-reset-after-destroy.js`

### 3 × `AssertionError: undefined === <n> at Function.strictEqual (native) at Object.<anonymous> (<loc>) at Object._return (<loc>) at AssertionError.get stack (native)`

distinct messages:
- `AssertionError: undefined === 10
    at Function.strictEqual (native)
    at Object.<anonymous> (test-dgram-bytes-length.js:36:12)
    at Object._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at AssertionError.get stack (native)`
- `AssertionError: undefined === 512
    at Function.strictEqual (native)
    at Object.<anonymous> (test-dgram-connect-send-callback-multi-buffer.js:10:10)
    at Object._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at AssertionError.get stack (native)`
- `AssertionError: undefined === 512
    at Function.strictEqual (native)
    at Object.<anonymous> (test-dgram-send-callback-multi-buffer.js:10:10)
    at Object._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at AssertionError.get stack (native)`
example test: `test/parallel/test-dgram-bytes-length.js`

### 3 × `AssertionError: undefined === <n> at Function.strictEqual (native) at Object.<anonymous> (<loc>) at Object.<anonymous> (<loc>) at Object._return (<loc>) at Asse`

distinct messages:
- `AssertionError: undefined === 256
    at Function.strictEqual (native)
    at Object.<anonymous> (test-dgram-connect-send-callback-buffer.js:12:10)
    at Object.<anonymous> (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:538:17)
    at Object._return (/work/.harness/work/node-ap`
- `AssertionError: undefined === 256
    at Function.strictEqual (native)
    at Object.<anonymous> (test-dgram-send-callback-buffer-empty-address.js:12:10)
    at Object.<anonymous> (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:538:17)
    at Object._return (/work/.harness/work/n`
- `AssertionError: undefined === 256
    at Function.strictEqual (native)
    at Object.<anonymous> (test-dgram-send-callback-buffer.js:12:10)
    at Object.<anonymous> (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:538:17)
    at Object._return (/work/.harness/work/node-api/node-a`
example test: `test/parallel/test-dgram-connect-send-callback-buffer.js`

### 3 × `AssertionError: undefined === false at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: undefined === false
    at :anonymous (test-http-outgoing-destroyed.js:11:3)
    at :program (test-http-outgoing-destroyed.js:1:1)`
- `AssertionError: undefined === false
    at :anonymous (test-stream-readable-aborted.js:12:3)
    at :program (test-stream-readable-aborted.js:1:1)`
- `AssertionError: undefined === false
    at :anonymous (test-stream-writable-aborted.js:12:3)
    at :program (test-stream-writable-aborted.js:1:1)`
example test: `test/parallel/test-http-outgoing-destroyed.js`

### 3 × `AssertionError: undefined === true at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: undefined === true
    at :anonymous (test-stream-duplex-end.js:11:3)
    at :program (test-stream-duplex-end.js:1:1)`
- `AssertionError: undefined === true
    at :anonymous (test-stream-pipe-needDrain.js:18:3)
    at :program (test-stream-pipe-needDrain.js:1:1)`
- `AssertionError: undefined === true
    at :anonymous (test-vm-property-not-on-sandbox.js:37:1)
    at :program (test-vm-property-not-on-sandbox.js:1:1)`
example test: `test/parallel/test-stream-duplex-end.js`

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

### 3 × `Mismatched <anonymous> function calls. Expected at least <n>, actual <n>. at Proxy.mustCallAtLeast (<loc>) at <loc> at <loc>`

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
example test: `test/parallel/test-http-perf_hooks.js`

### 3 × `Mismatched <anonymous> function calls. Expected exactly <n>, actual <n>. at mustCall (<loc>) at Proxy.expectsError (<loc>) at <loc> at <loc> Mismatched <anonymo`

distinct messages:
- `Mismatched <anonymous> function calls. Expected exactly 1, actual 0.
    at mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at Proxy.expectsError (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:796:10)
    at test-net-connect-reset.js:9:10`
- `Mismatched <anonymous> function calls. Expected exactly 1, actual 0.
    at mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at Proxy.expectsError (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:796:10)
    at test-readline-input-onerror.js`
- `Mismatched <anonymous> function calls. Expected exactly 1, actual 0.
    at mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at Proxy.expectsError (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:796:10)
    at test-stream-writable-write-cb-`
example test: `test/parallel/test-net-connect-reset.js`

### 3 × `TypeError: <this>.buf.subarray is not a function`

distinct messages:
- `TypeError: <this>.buf.subarray is not a function`
example test: `test/parallel/test-http-header-overflow.js`

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

### 3 × `TypeError: pipe: destination must be a Writable at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: pipe: destination must be a Writable
    at :anonymous (test-stream-auto-destroy.js:97:3)
    at :program (test-stream-auto-destroy.js:1:1)`
- `TypeError: pipe: destination must be a Writable
    at :anonymous (test-stream2-readable-legacy-drain.js:55:1)
    at :program (test-stream2-readable-legacy-drain.js:1:1)`
- `TypeError: pipe: destination must be a Writable
    at :anonymous (test-worker-stdio.js:31:3)
    at :program (test-worker-stdio.js:1:1)`
example test: `test/parallel/test-stream-auto-destroy.js`

### 3 × `Uncaught (in promise) TypeError: broadcast is not a function`

distinct messages:
- `Uncaught (in promise) TypeError: broadcast is not a function`
example test: `test/parallel/test-stream-iter-broadcast-backpressure.js`

### 3 × `Uncaught (in promise) TypeError: compressGzip is not a function`

distinct messages:
- `Uncaught (in promise) TypeError: compressGzip is not a function`
example test: `test/parallel/test-stream-iter-transform-compat.js`

### 3 × `Uncaught (in promise) TypeError: foo.linkRequests is not a function`

distinct messages:
- `Uncaught (in promise) TypeError: foo.linkRequests is not a function`
example test: `test/parallel/test-vm-module-linkmodulerequests-circular.js`

### 2 × `[ [ SegfaultHandler caught a segfault in thread <n> ] ] siginfo: si_signo: <n>, si_code: <n>, si_addr: <n> (heapBase - <n>) General purpose register values: RAX`

distinct messages:
- `[ [ SegfaultHandler caught a segfault in thread 0x00007b35b8000cc0 ] ]
siginfo: si_signo: 11, si_code: 1, si_addr: 0x000072220c31d750 (heapBase - 9975796213936)

General purpose register values:
  RAX 0x0000000000000000 
  RBX 0x00007b35ce879078 points into the stack for thread 0x00007b35b8000cc0
  `
- `[ [ SegfaultHandler caught a segfault in thread 0x000077fc58000cc0 ] ]
siginfo: si_signo: 11, si_code: 1, si_addr: 0x000072220c31d360 (heapBase - 6430837583008)

General purpose register values:
  RAX 0x0000000000000000 
  RBX 0x000077fc6f5da448 points into the stack for thread 0x000077fc58000cc0
  `
example test: `test/parallel/test-os-process-priority.js`

### 2 × `<n> null undefined false Function string Symbol(foo)`

distinct messages:
- `42
null
undefined
false
Function
string
Symbol(foo)`
example test: `test/parallel/test-domain-error-types.js`

### 2 × `AssertionError: [] deepStrictEqual [<str>] at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: [] deepStrictEqual ['Timeout']
    at :anonymous (test-process-getactiveresources.js:9:1)
    at :program (test-process-getactiveresources.js:1:1)`
- `AssertionError: [] deepStrictEqual ['WORKER']
    at :anonymous (test-worker-messageport-hasref.js:33:1)
    at :program (test-worker-messageport-hasref.js:1:1)`
example test: `test/parallel/test-process-getactiveresources.js`

### 2 × `AssertionError: [<str>, <str>, <str>, <str>, <str>, …] deepStrictEqual [<str>, <str>, <str>, <str>, <str>, …] at Function.deepStrictEqual (native) at EventEmitt`

distinct messages:
- `AssertionError: ['HOST', '127.0.0.1:45729', 'test', 'value', 'foo', …] deepStrictEqual ['test', 'value', 'HOST', '127.0.0.1:45729', 'foo', …]
    at Function.deepStrictEqual (native)
    at EventEmitter.server (test-http-dont-set-default-headers-with-set-header.js:8:10)
    at EventEmitter._return (`
- `AssertionError: ['host', '127.0.0.1:45123', 'foo', 'bar', 'test', …] deepStrictEqual ['host', '127.0.0.1:45123', 'foo', 'bar', 'test', …]
    at Function.deepStrictEqual (native)
    at EventEmitter.server (test-http-dont-set-default-headers.js:8:10)
    at EventEmitter._return (/work/.harness/work/`
example test: `test/parallel/test-http-dont-set-default-headers-with-set-header.js`

### 2 × `AssertionError: { _handle: {}, _allowHalfOpen: true, connecting: false, _connected: true, _readableEnded: false, … } === null at Function.strictEqual (native) a`

distinct messages:
- `AssertionError: { _handle: {}, _allowHalfOpen: true, connecting: false, _connected: true, _readableEnded: false, … } === null
    at Function.strictEqual (native)
    at EventEmitter.<anonymous> (test-http-outgoing-drain-writable-length.js:29:10)
    at EventEmitter._return (/work/.harness/work/node`
- `AssertionError: { _handle: {}, _allowHalfOpen: true, connecting: false, _connected: true, _readableEnded: false, … } === null
    at Function.strictEqual (native)
    at EventEmitter.<anonymous> (test-http-pipeline-outgoing-destroy.js:25:12)
    at EventEmitter._return (/work/.harness/work/node-api/`
example test: `test/parallel/test-http-outgoing-drain-writable-length.js`

### 2 × `AssertionError: {} !== {} at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: {} !== {}
    at :anonymous (test-vm-harmony-symbols.js:31:1)
    at :program (test-vm-harmony-symbols.js:1:1)`
- `AssertionError: {} !== {}
    at :anonymous (test-vm-proxies.js:12:1)
    at :program (test-vm-proxies.js:1:1)`
example test: `test/parallel/test-vm-harmony-symbols.js`

### 2 × `AssertionError: {} deepStrictEqual {} at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: {} deepStrictEqual {}
    at :anonymous (test-process-features.js:24:1)
    at :program (test-process-features.js:1:1)`
- `AssertionError: {} deepStrictEqual {}
    at :anonymous (test-global.js:71:3)
    at :program (test-global.js:1:1)`
example test: `test/parallel/test-process-features.js`

### 2 × `AssertionError: <n> === <n> at Function.strictEqual (native) at EventEmitter.onChildExited (<loc>) at EventEmitter.onChildExited (<loc>) at EventEmitter.emit (n`

distinct messages:
- `AssertionError: 2 === 0
    at Function.strictEqual (native)
    at EventEmitter.onChildExited (test-domain-with-abort-on-uncaught-exception.js:124:18)
    at EventEmitter.onChildExited (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)
    `
- `AssertionError: 1 === 7
    at Function.strictEqual (native)
    at EventEmitter.onChildExited (test-domain-top-level-error-handler-throw.js:46:14)
    at EventEmitter.onChildExited (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)
    at A`
example test: `test/parallel/test-domain-with-abort-on-uncaught-exception.js`

### 2 × `AssertionError: <n> === <n> at Function.strictEqual (native) at Immediate.<anonymous> (<loc>) at Immediate._return (<loc>) at AssertionError.get stack (native)`

distinct messages:
- `AssertionError: 0 === 2
    at Function.strictEqual (native)
    at Immediate.<anonymous> (test-stream-forEach.js:109:12)
    at Immediate._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at AssertionError.get stack (native)`
- `AssertionError: 1 === 0
    at Function.strictEqual (native)
    at Immediate.<anonymous> (test-stream-unpipe-event.js:60:12)
    at Immediate._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at AssertionError.get stack (native)`
example test: `test/parallel/test-stream-forEach.js`

### 2 × `AssertionError: <n> === <n> at Function.strictEqual (native) at Timeout.<anonymous> (<loc>) at Timeout._return (<loc>) at AssertionError.get stack (native) Asse`

distinct messages:
- `AssertionError: 0 === 1
    at Function.strictEqual (native)
    at Timeout.<anonymous> (test-process-getactiveresources-track-interval-lifetime.js:12:10)
    at Timeout._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at AssertionError.get stack (native)
Asser`
- `AssertionError: 0 === 1
    at Function.strictEqual (native)
    at Timeout.<anonymous> (test-process-getactiveresources-track-timer-lifetime.js:12:12)
    at Timeout._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at AssertionError.get stack (native)
Assertio`
example test: `test/parallel/test-process-getactiveresources-track-interval-lifetime.js`

### 2 × `AssertionError: <n> === <n> at Function.strictEqual (native) at Writable.<anonymous> (<loc>) at Writable._return (<loc>) at Writable.emit (native) at Duplex.pus`

distinct messages:
- `AssertionError: 16384 === 1024
    at Function.strictEqual (native)
    at Writable.<anonymous> (test-http-incoming-message-options.js:18:12)
    at Writable._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at Writable.emit (native)
    at Duplex.push (native)`
- `AssertionError: 2 === 1
    at Function.strictEqual (native)
    at Writable.<anonymous> (test-http-upgrade-binary.js:24:12)
    at Writable._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at Writable.emit (native)
    at Duplex.push (native)`
example test: `test/parallel/test-http-incoming-message-options.js`

### 2 × `AssertionError: <str> !== <str> at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: 'artischocko' !== 'artischocko'
    at :anonymous (test-require-extensions-same-filename-as-dir-trailing-slash.js:34:1)
    at :program (test-require-extensions-same-filename-as-dir-trailing-slash.js:1:1)`
- `AssertionError: 'artischocko' !== 'artischocko'
    at :anonymous (test-require-extensions-same-filename-as-dir.js:31:1)
    at :program (test-require-extensions-same-filename-as-dir.js:1:1)`
example test: `test/parallel/test-require-extensions-same-filename-as-dir-trailing-slash.js`

### 2 × `AssertionError: <str> === <str> at :=> (<loc>) at runTests (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: '' === 'TimeoutNaNWarning'
    at :=> (test-timers-nan-duration-warning.js:35:7)
    at runTests (test-timers-nan-duration-warning.js:24:5)
    at :anonymous (test-timers-nan-duration-warning.js:67:1)
    at :program (test-timers-nan-duration-warning.js:1:1)`
- `AssertionError: '' === 'TimeoutNegativeWarning'
    at :=> (test-timers-negative-duration-warning.js:35:7)
    at runTests (test-timers-negative-duration-warning.js:24:5)
    at :anonymous (test-timers-negative-duration-warning.js:67:1)
    at :program (test-timers-negative-duration-warning.js:1:1)`
example test: `test/parallel/test-timers-nan-duration-warning.js`

### 2 × `AssertionError: <str> === <str> at Function.strictEqual (native) at Duplex.<anonymous> (<loc>) at Duplex._return (<loc>) at AssertionError.get stack (native)`

distinct messages:
- `AssertionError: 'EPIPE' === 'ECONNRESET'
    at Function.strictEqual (native)
    at Duplex.<anonymous> (test-http-many-ended-pipelines.js:52:12)
    at Duplex._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at AssertionError.get stack (native)`
- `AssertionError: 'HTTP/1.1 101 Web Socket Protocol Handshake
Upgrade: WebSocket
Connection: Upgrade

Connection: Upgrade

12345678901234567890' === 'HTTP/1.1 101 Web Socket Protocol Handshake
Upgrade: WebSocket
Connection: Upgrade

12345678901234567890'
    at Function.strictEqual (native)
`
example test: `test/parallel/test-http-many-ended-pipelines.js`

### 2 × `AssertionError: <str> === <str> at w._write (<loc>) at _return (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: 'utf8' === 'buffer'
    at w._write (test-stream3-cork-end.js:25:3)
    at _return (index.js:573:12)
    at :anonymous (test-stream3-cork-end.js:53:1)
    at :program (test-stream3-cork-end.js:1:1)`
- `AssertionError: 'utf8' === 'buffer'
    at w._write (test-stream3-cork-uncork.js:23:3)
    at _return (index.js:573:12)
    at :anonymous (test-stream3-cork-uncork.js:51:1)
    at :program (test-stream3-cork-uncork.js:1:1)`
example test: `test/parallel/test-stream3-cork-end.js`

### 2 × `AssertionError: false == true at :=> (<loc>) at _return (<loc>)`

distinct messages:
- `AssertionError: false == true
    at :=> (test-stream-duplex-readable-end.js:30:3)
    at _return (index.js:573:12)`
- `AssertionError: false == true
    at :=> (test-stream-pipeline-listeners.js:70:3)
    at _return (index.js:573:12)`
example test: `test/parallel/test-stream-duplex-readable-end.js`

### 2 × `AssertionError: false === true at Function.strictEqual (native) at Duplex.errOrEnd (<loc>) at Duplex._return (<loc>) at AssertionError.get stack (native)`

distinct messages:
- `AssertionError: false === true
    at Function.strictEqual (native)
    at Duplex.errOrEnd (test-http-server-headers-timeout-keepalive.js:81:12)
    at Duplex._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at AssertionError.get stack (native)`
- `AssertionError: false === true
    at Function.strictEqual (native)
    at Duplex.errOrEnd (test-http-server-request-timeout-keepalive.js:79:12)
    at Duplex._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at AssertionError.get stack (native)`
example test: `test/parallel/test-http-server-headers-timeout-keepalive.js`

### 2 × `AssertionError: false === true at Function.strictEqual (native) at EventEmitter.<anonymous> (<loc>) at EventEmitter._return (<loc>) at EventEmitter.emit (native`

distinct messages:
- `AssertionError: false === true
    at Function.strictEqual (native)
    at EventEmitter.<anonymous> (test-http-outgoing-finish-writable.js:39:10)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)
    at Assertion`
- `AssertionError: false === true
    at Function.strictEqual (native)
    at EventEmitter.<anonymous> (test-net-server-drop-connections.js:25:10)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)
    at AssertionEr`
example test: `test/parallel/test-http-outgoing-finish-writable.js`

### 2 × `AssertionError: function should not have been called at <loc> at Function.fail (native) at Duplex.mustNotCall (<loc>) at Duplex.emit (native) at AssertionError.`

distinct messages:
- `AssertionError: function should not have been called at test-net-client-bind-twice.js:18
    at Function.fail (native)
    at Duplex.mustNotCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:631:12)
    at Duplex.emit (native)
    at AssertionError.get stack (native)
AssertionE`
- `AssertionError: function should not have been called at test-net-listen-ipv6only.js:25
    at Function.fail (native)
    at Duplex.mustNotCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:631:12)
    at Duplex.emit (native)
    at AssertionError.get stack (native)`
example test: `test/parallel/test-net-client-bind-twice.js`

### 2 × `AssertionError: function should not have been called at <loc> at Function.fail (native) at Immediate.mustNotCall (<loc>) at AssertionError.get stack (native)`

distinct messages:
- `AssertionError: function should not have been called at test-timers-immediate.js:33
    at Function.fail (native)
    at Immediate.mustNotCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:631:12)
    at AssertionError.get stack (native)`
- `AssertionError: function should not have been called at test-timers-immediate-unref.js:33
    at Function.fail (native)
    at Immediate.mustNotCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:631:12)
    at AssertionError.get stack (native)`
example test: `test/parallel/test-timers-immediate.js`

### 2 × `AssertionError: function should not have been called at <loc> at Function.fail (native) at Immediate.mustNotCall (<loc>) at AssertionError.get stack (native) As`

distinct messages:
- `AssertionError: function should not have been called at test-async-hooks-top-level-clearimmediate.js:30
    at Function.fail (native)
    at Immediate.mustNotCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:631:12)
    at AssertionError.get stack (native)
AssertionError: { _i`
- `AssertionError: function should not have been called at test-timers-setimmediate-infinite-loop.js:17
    at Function.fail (native)
    at Immediate.mustNotCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:631:12)
    at AssertionError.get stack (native)
AssertionError: functio`
example test: `test/parallel/test-async-hooks-top-level-clearimmediate.js`

### 2 × `AssertionError: function should not have been called at <loc> at mustNotCall (<loc>)`

distinct messages:
- `AssertionError: function should not have been called at test-stream-readable-next-no-null.js:19
    at mustNotCall (index.js:631:5)`
- `AssertionError: function should not have been called at test-stream-writable-write-writev-finish.js:135
    at mustNotCall (index.js:631:5)`
example test: `test/parallel/test-stream-readable-next-no-null.js`

### 2 × `AssertionError: function should not have been called at <loc> called with arguments: { result: undefined }, <str> at Function.fail (native) at mustNotCall (<loc`

distinct messages:
- `AssertionError: function should not have been called at test-diagnostics-channel-tracing-channel-callback-early-exit.js:11
called with arguments: { result: undefined }, 'tracing:test:asyncStart'
    at Function.fail (native)
    at mustNotCall (/work/.harness/work/node-api/node-api-overlay/test/comm`
- `AssertionError: function should not have been called at test-diagnostics-channel-tracing-channel-sync-early-exit.js:10
called with arguments: { result: undefined }, 'tracing:test:end'
    at Function.fail (native)
    at mustNotCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js`
example test: `test/parallel/test-diagnostics-channel-tracing-channel-callback-early-exit.js`

### 2 × `AssertionError: function should not have been called at <loc> called with arguments: IncomingMessage { socket: Socket { _handle: {}, _allowHalfOpen: false, conn`

distinct messages:
- `AssertionError: function should not have been called at test-http-client-reject-chunked-with-content-length.js:20
called with arguments: IncomingMessage {
  socket: Socket {
    _handle: {},
    _allowHalfOpen: false,
    connecting: false,
    _connected: true,
    _readableEnded: false,
    _writa`
- `AssertionError: function should not have been called at test-http-client-reject-cr-no-lf.js:19
called with arguments: IncomingMessage {
  socket: Socket {
    _handle: {},
    _allowHalfOpen: false,
    connecting: false,
    _connected: true,
    _readableEnded: false,
    _writableFinished: false,`
example test: `test/parallel/test-http-client-reject-chunked-with-content-length.js`

### 2 × `AssertionError: Got unwanted exception: argument must be a Buffer, ArrayBuffer, TypedArray, or string at :=> (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Got unwanted exception: argument must be a Buffer, ArrayBuffer, TypedArray, or string
    at :=> (test-buffer-isascii.js:24:3)
    at :anonymous (test-buffer-isascii.js:14:1)
    at :program (test-buffer-isascii.js:1:1)`
- `AssertionError: Got unwanted exception: argument must be a Buffer, ArrayBuffer, TypedArray, or string
    at :=> (test-buffer-isutf8.js:68:3)
    at :anonymous (test-buffer-isutf8.js:61:1)
    at :program (test-buffer-isutf8.js:1:1)`
example test: `test/parallel/test-buffer-isascii.js`

### 2 × `AssertionError: Got unwanted exception: TextDecoder: decoding error (fatal mode): MALFORMED[<n>] at :=> (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Got unwanted exception: TextDecoder: decoding error (fatal mode): MALFORMED[1]
    at :=> (test-whatwg-encoding-custom-fatal-streaming.js:19:5)
    at :anonymous (test-whatwg-encoding-custom-fatal-streaming.js:13:3)
    at :program (test-whatwg-encoding-custom-fatal-streaming.js:1:1)`
- `AssertionError: Got unwanted exception: TextDecoder: decoding error (fatal mode): MALFORMED[1]
    at :=> (test-whatwg-encoding-custom-textdecoder-fatal.js:75:3)
    at :anonymous (test-whatwg-encoding-custom-textdecoder-fatal.js:74:1)
    at :program (test-whatwg-encoding-custom-textdecoder-fatal.j`
example test: `test/parallel/test-whatwg-encoding-custom-fatal-streaming.js`

### 2 × `AssertionError: Got unwanted exception: The input must be a Buffer, TypedArray, DataView, ArrayBuffer, or string at :=> (<loc>) at :anonymous (<loc>) at :progra`

distinct messages:
- `AssertionError: Got unwanted exception: The input must be a Buffer, TypedArray, DataView, ArrayBuffer, or string
    at :=> (test-zlib-crc32.js:206:3)
    at :anonymous (test-zlib-crc32.js:205:1)
    at :program (test-zlib-crc32.js:1:1)`
- `AssertionError: Got unwanted exception: The input must be a Buffer, TypedArray, DataView, ArrayBuffer, or string
    at :=> (test-zlib-not-string-or-buffer.js:20:3)
    at :anonymous (test-zlib-not-string-or-buffer.js:10:1)
    at :program (test-zlib-not-string-or-buffer.js:1:1)`
example test: `test/parallel/test-zlib-crc32.js`

### 2 × `AssertionError: Missing expected exception. at Function.throws (native) at EventEmitter.<anonymous> (<loc>) at EventEmitter._return (<loc>) at EventEmitter.emit`

distinct messages:
- `AssertionError: Missing expected exception.
    at Function.throws (native)
    at EventEmitter.<anonymous> (test-http-content-length-mismatch.js:12:12)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)
    at Du`
- `AssertionError: Missing expected exception.
    at Function.throws (native)
    at EventEmitter.<anonymous> (test-http-head-throw-on-response-body-write.js:54:12)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)`
example test: `test/parallel/test-http-content-length-mismatch.js`

### 2 × `AssertionError: Test should have aborted but instead exited with exit code <n> and signal null at ok (native) at EventEmitter.onExit (<loc>) at EventEmitter.emi`

distinct messages:
- `AssertionError: Test should have aborted but instead exited with exit code 0 and signal null
    at ok (native)
    at EventEmitter.onExit (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:365:5)
    at EventEmitter.emit (native)
    at AssertionError.get stack (native)`
example test: `test/parallel/test-domain-no-error-handler-abort-on-uncaught-5.js`

### 2 × `AssertionError: The input did not match the regular expression: /Keep-Alive: timeout=<n>\r\n/m at Function.match (native) at assertResponse (<loc>) at Duplex.<a`

distinct messages:
- `AssertionError: The input did not match the regular expression: /Keep-Alive: timeout=65\r\n/m
    at Function.match (native)
    at assertResponse (test-http-server-keep-alive-defaults.js:12:10)
    at Duplex.<anonymous> (test-http-server-keep-alive-defaults.js:67:7)
    at Duplex.push (native)
    `
- `AssertionError: The input did not match the regular expression: /Keep-Alive: timeout=65\r\n/m
    at Function.match (native)
    at assertResponse (test-http-server-keep-alive-max-requests-null.js:12:10)
    at Duplex.<anonymous> (test-http-server-keep-alive-max-requests-null.js:66:7)
    at Duplex.`
example test: `test/parallel/test-http-server-keep-alive-defaults.js`

### 2 × `AssertionError: The input did not match the regular expression: /Promise { undefined }/ at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: The input did not match the regular expression: /Promise { undefined }/
    at :anonymous (test-vm-module-evaluate-synthethic-module.js:21:3)
    at :program (test-vm-module-evaluate-synthethic-module.js:1:1)`
- `AssertionError: The input did not match the regular expression: /Promise { undefined }/
    at :anonymous (test-vm-module-evaluate-synthethic-module-rejection.js:29:1)
    at :program (test-vm-module-evaluate-synthethic-module-rejection.js:1:1)`
example test: `test/parallel/test-vm-module-evaluate-synthethic-module.js`

### 2 × `AssertionError: undefined === { members: [] } at :=> (<loc>) at _return (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: undefined === { members: [] }
    at :=> (test-domain-async-resource-domain-removed.js:23:3)
    at _return (index.js:573:12)
    at :anonymous (test-domain-async-resource-domain-removed.js:15:1)
    at :program (test-domain-async-resource-domain-removed.js:1:1)`
- `AssertionError: undefined === { members: [] }
    at :=> (test-domain-emit-error-handler-stack.js:77:3)
    at _return (index.js:573:12)
    at :anonymous (test-domain-emit-error-handler-stack.js:75:1)
    at :program (test-domain-emit-error-handler-stack.js:1:1)`
example test: `test/parallel/test-domain-async-resource-domain-removed.js`

### 2 × `AssertionError: undefined === <n> at Function.strictEqual (native) at EventEmitter.<anonymous> (<loc>) at EventEmitter._return (<loc>) at EventEmitter.emit (nat`

distinct messages:
- `AssertionError: undefined === 1
    at Function.strictEqual (native)
    at EventEmitter.<anonymous> (test-http-server-client-error.js:15:10)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)
    at Duplex.push (`
- `AssertionError: undefined === 1
    at Function.strictEqual (native)
    at EventEmitter.<anonymous> (test-net-buffersize.js:48:12)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)
    at AssertionError.get stac`
example test: `test/parallel/test-http-server-client-error.js`

### 2 × `AssertionError: undefined === null at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: undefined === null
    at :anonymous (test-stream-readable-destroy.js:16:3)
    at :program (test-stream-readable-destroy.js:1:1)`
- `AssertionError: undefined === null
    at :anonymous (test-zlib-destroy.js:14:3)
    at :program (test-zlib-destroy.js:1:1)`
example test: `test/parallel/test-stream-readable-destroy.js`

### 2 × `AssertionError: undefined === true at Function.strictEqual (native) at EventEmitter.<anonymous> (<loc>) at EventEmitter._return (<loc>) at EventEmitter.emit (na`

distinct messages:
- `AssertionError: undefined === true
    at Function.strictEqual (native)
    at EventEmitter.<anonymous> (test-http-nodelay.js:22:10)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)
    at AssertionError.get sta`
- `AssertionError: undefined === true
    at Function.strictEqual (native)
    at EventEmitter.<anonymous> (test-net-socket-connecting.js:20:10)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)
    at AssertionErro`
example test: `test/parallel/test-http-nodelay.js`

### 2 × `Error: foobar`

distinct messages:
- `Error: foobar`
example test: `test/parallel/test-console-sync-write-error.js`

### 2 × `Error: native decompress_finish rejected the input as malformed at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `Error: native decompress_finish rejected the input as malformed
    at :anonymous (test-zlib-from-concatenated-gzip.js:21:20)
    at :program (test-zlib-from-concatenated-gzip.js:1:1)`
- `Error: native decompress_finish rejected the input as malformed
    at :anonymous (test-zlib-from-gzip-with-trailing-garbage.js:15:20)
    at :program (test-zlib-from-gzip-with-trailing-garbage.js:1:1)`
example test: `test/parallel/test-zlib-from-concatenated-gzip.js`

### 2 × `Error: Socket is closed`

distinct messages:
- `Error: Socket is closed`
example test: `test/parallel/test-net-autoselectfamily-default.js`

### 2 × `Error: transform failed at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `Error: transform failed
    at :anonymous (test-diagnostics-channel-bounded-channel-run-transform-error.js:14:24)
    at :program (test-diagnostics-channel-bounded-channel-run-transform-error.js:1:1)`
- `Error: transform failed
    at :anonymous (test-diagnostics-channel-bounded-channel-scope-transform-error.js:14:24)
    at :program (test-diagnostics-channel-bounded-channel-scope-transform-error.js:1:1)`
example test: `test/parallel/test-diagnostics-channel-bounded-channel-run-transform-error.js`

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

### 2 × `Mismatched <anonymous> function calls. Expected exactly <n>, actual <n>. at Proxy.mustCall (<loc>) at <loc> at <loc> Mismatched noop function calls. Expected ex`

distinct messages:
- `Mismatched <anonymous> function calls. Expected exactly 2, actual 1.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at test-http-generic-streams.js:34:43
    at test-http-generic-streams.js:1:1
Mismatched noop function calls. Expected exactly 1,`
- `Mismatched <anonymous> function calls. Expected exactly 1, actual 0.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at test-stream-toArray.js:71:18
    at test-stream-toArray.js:1:1
Mismatched noop function calls. Expected exactly 1, actual 0.
 `
example test: `test/parallel/test-http-generic-streams.js`

### 2 × `Mismatched ReadStream$open function calls. Expected exactly <n>, actual <n>. at Proxy.mustCall (<loc>) at <loc> at <loc> Mismatched <anonymous> function calls. `

distinct messages:
- `Mismatched ReadStream$open function calls. Expected exactly 1, actual 0.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at test-fs-stream-construct-compat-error-read.js:19:38
    at test-fs-stream-construct-compat-error-read.js:1:1
Mismatched <a`
- `Mismatched ReadStream$open function calls. Expected exactly 1, actual 0.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at test-fs-stream-construct-compat-graceful-fs.js:20:38
    at test-fs-stream-construct-compat-graceful-fs.js:1:1
Mismatched `
example test: `test/parallel/test-fs-stream-construct-compat-error-read.js`

### 2 × `RangeError: <str> is outside of buffer bounds at EventEmitter.<anonymous> (<loc>) at EventEmitter._return (<loc>) at EventEmitter.emit (native) AssertionError: `

distinct messages:
- `RangeError: "offset" is outside of buffer bounds
    at EventEmitter.<anonymous> (test-dgram-send-default-host.js:33:12)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)
AssertionError: ['hello', 'xxxxxxxxxxxxxx`
- `RangeError: "offset" is outside of buffer bounds
    at EventEmitter.<anonymous> (test-dgram-udp6-send-default-host.js:36:12)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)
AssertionError: ['hello', 'xxxxxxxxx`
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
      duration_ms: 3
      failureType: 'testCodeFailure'
      error: "0 === 1"
      code: 'ERR_ASSERTION'
      ...
    # Subtest: do`
- `TAP version 13
# Subtest: synchronous version
    # Subtest: validation
    ok 1 - validation
    # Subtest: performs flush
    not ok 2 - performs flush
      ---
      duration_ms: 4
      failureType: 'testCodeFailure'
      error: "0 === 1"
      code: 'ERR_ASSERTION'
      ...
    # Subtest: do`
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

### 2 × `TypeError: (intermediate value).of is not a function at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: (intermediate value).of is not a function
    at :anonymous (test-buffer-of-no-deprecation.js:7:1)
    at :program (test-buffer-of-no-deprecation.js:1:1)`
- `TypeError: (intermediate value).of is not a function
    at :anonymous (test-string-decoder-end.js:42:17)
    at :program (test-string-decoder-end.js:1:1)`
example test: `test/parallel/test-buffer-of-no-deprecation.js`

### 2 × `TypeError: Cannot convert undefined or null to object: undefined at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: Cannot convert undefined or null to object: undefined
    at :anonymous (test-event-emitter-listeners-side-effects.js:36:24)
    at :program (test-event-emitter-listeners-side-effects.js:1:1)`
- `TypeError: Cannot convert undefined or null to object: undefined
    at :anonymous (test-event-emitter-set-max-listeners-side-effects.js:30:24)
    at :program (test-event-emitter-set-max-listeners-side-effects.js:1:1)`
example test: `test/parallel/test-event-emitter-listeners-side-effects.js`

### 2 × `TypeError: Cannot find module: <str> at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: Cannot find module: 'path'
    at :anonymous (test-require-resolve.js:35:20)
    at :program (test-require-resolve.js:1:1)`
- `TypeError: Cannot find module: '.'
    at :anonymous (test-require-resolve-opts-paths-relative.js:17:10)
    at :program (test-require-resolve-opts-paths-relative.js:1:1)`
example test: `test/parallel/test-require-resolve.js`

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

### 2 × `TypeError: Cannot read property <str> of undefined at Readable.<anonymous> (<loc>) at Readable._return (<loc>) at TypeError.get stack (native)`

distinct messages:
- `TypeError: Cannot read property 'length' of undefined
    at Readable.<anonymous> (test-http-keep-alive-close-on-header.js:83:26)
    at Readable._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at TypeError.get stack (native)`
- `TypeError: Cannot read property 'length' of undefined
    at Readable.<anonymous> (test-http-keep-alive.js:61:26)
    at Readable._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at TypeError.get stack (native)`
example test: `test/parallel/test-http-keep-alive-close-on-header.js`

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

### 2 × `TypeError: Cannot set property <str> of undefined at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: Cannot set property '.bar' of undefined
    at :anonymous (test-module-multi-extensions.js:20:3)
    at :program (test-module-multi-extensions.js:1:1)`
- `TypeError: Cannot set property '/work/.harness/work/node-api/node-api-overlay/test/fixtures/semicolon.js' of undefined
    at :anonymous (test-require-cache.js:31:3)
    at :program (test-require-cache.js:1:1)`
example test: `test/parallel/test-module-multi-extensions.js`

### 2 × `TypeError: channel.withStoreScope is not a function at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: channel.withStoreScope is not a function
    at :anonymous (test-diagnostics-channel-run-stores-scope.js:25:19)
    at :program (test-diagnostics-channel-run-stores-scope.js:1:1)`
- `TypeError: channel.withStoreScope is not a function
    at :anonymous (test-diagnostics-channel-run-stores-scope-transform-error.js:36:17)
    at :program (test-diagnostics-channel-run-stores-scope-transform-error.js:1:1)`
example test: `test/parallel/test-diagnostics-channel-run-stores-scope.js`

### 2 × `TypeError: Class constructors cannot be invoked without <str> at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: Class constructors cannot be invoked without 'new'
    at :anonymous (test-zlib-deflate-constructors.js:9:11)
    at :program (test-zlib-deflate-constructors.js:1:1)`
- `TypeError: Class constructors cannot be invoked without 'new'
    at :anonymous (test-zlib-invalid-input.js:38:3)
    at :program (test-zlib-invalid-input.js:1:1)`
example test: `test/parallel/test-zlib-deflate-constructors.js`

### 2 × `TypeError: compose: every adjacent pair must be Readable on the left and Writable on the right at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: compose: every adjacent pair must be Readable on the left and Writable on the right
    at :anonymous (test-stream-readable-compose.js:13:18)
    at :program (test-stream-readable-compose.js:1:1)`
- `TypeError: compose: every adjacent pair must be Readable on the left and Writable on the right
    at :anonymous (test-webstreams-compose.js:22:13)
    at :program (test-webstreams-compose.js:1:1)`
example test: `test/parallel/test-stream-readable-compose.js`

### 2 × `TypeError: finished: argument must be a stream at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: finished: argument must be a stream
    at :anonymous (test-webstreams-abort-controller.js:36:3)
    at :program (test-webstreams-abort-controller.js:1:1)`
- `TypeError: finished: argument must be a stream
    at :anonymous (test-webstreams-finished.js:16:3)
    at :program (test-webstreams-finished.js:1:1)`
example test: `test/parallel/test-webstreams-abort-controller.js`

### 2 × `TypeError: GCProfiler is not a constructor at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: GCProfiler is not a constructor
    at :anonymous (test-v8-collect-gc-profile-using.js:8:20)
    at :program (test-v8-collect-gc-profile-using.js:1:1)`
- `TypeError: GCProfiler is not a constructor
    at :anonymous (test-v8-collect-gc-profile-exit-before-stop.js:7:20)
    at :program (test-v8-collect-gc-profile-exit-before-stop.js:1:1)`
example test: `test/parallel/test-v8-collect-gc-profile-using.js`

### 2 × `TypeError: mod.linkRequests is not a function at :program (<loc>)`

distinct messages:
- `TypeError: mod.linkRequests is not a function
    at :program (test-vm-module-evaluate-source-text-module.js:24:3)`
- `TypeError: mod.linkRequests is not a function
    at :program (test-vm-module-evaluate-while-evaluating.js:22:3)`
example test: `test/parallel/test-vm-module-evaluate-source-text-module.js`

### 2 × `TypeError: req.addTrailers is not a function at EventEmitter.<anonymous> (<loc>) at EventEmitter._return (<loc>) at EventEmitter.emit (native) at TypeError.get `

distinct messages:
- `TypeError: req.addTrailers is not a function
    at EventEmitter.<anonymous> (test-http-multiple-headers.js:166:7)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)
    at TypeError.get stack (native)`
- `TypeError: req.addTrailers is not a function
    at EventEmitter.<anonymous> (test-http-raw-headers.js:78:7)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)
    at TypeError.get stack (native)`
example test: `test/parallel/test-http-multiple-headers.js`

### 2 × `TypeError: The <str> argument must be of type number. Received undefined at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: The "err" argument must be of type number. Received undefined
    at :anonymous (test-child-process-spawnsync.js:40:20)
    at :program (test-child-process-spawnsync.js:1:1)`
- `TypeError: The "err" argument must be of type number. Received undefined
    at :anonymous (test-child-process-spawnsync-timeout.js:52:24)
    at :program (test-child-process-spawnsync-timeout.js:1:1)`
example test: `test/parallel/test-child-process-spawnsync.js`

### 2 × `TypeError: The <str> argument must be of type string or an instance of Buffer or URL. Received type boolean (false) at :=> (<loc>) at :anonymous (<loc>) at :pro`

distinct messages:
- `TypeError: The "path" argument must be of type string or an instance of Buffer or URL. Received type boolean (false)
    at :=> (test-fs-lchown.js:16:3)
    at :anonymous (test-fs-lchown.js:11:1)
    at :program (test-fs-lchown.js:1:1)`
- `TypeError: The "path" argument must be of type string or an instance of Buffer or URL. Received type boolean (false)
    at :=> (test-fs-open.js:92:5)
    at :anonymous (test-fs-open.js:76:1)
    at :program (test-fs-open.js:1:1)`
example test: `test/parallel/test-fs-lchown.js`

### 2 × `TypeError: The URL must be of scheme file at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: The URL must be of scheme file
    at :anonymous (test-worker-data-url.js:7:1)
    at :program (test-worker-data-url.js:1:1)`
- `TypeError: The URL must be of scheme file
    at :anonymous (test-worker-process-exit-async-module.js:8:11)
    at :program (test-worker-process-exit-async-module.js:1:1)`
example test: `test/parallel/test-worker-data-url.js`

### 2 × `Uncaught (in promise) AssertionError: <n> !== <n>`

distinct messages:
- `Uncaught (in promise) AssertionError: 1 !== 1`
example test: `test/parallel/test-async-hooks-enable-before-promise-resolve.js`

### 2 × `Uncaught (in promise) AssertionError: <n> === <n>`

distinct messages:
- `Uncaught (in promise) AssertionError: 200 === 2`
- `Uncaught (in promise) AssertionError: 2 === 1`
example test: `test/parallel/test-stream-iter-from-coverage.js`

### 2 × `Uncaught (in promise) AssertionError: <n> === undefined`

distinct messages:
- `Uncaught (in promise) AssertionError: 1 === undefined`
- `Uncaught (in promise) AssertionError: 0 === undefined`
example test: `test/parallel/test-async-hooks-promise-triggerid.js`

### 2 × `Uncaught (in promise) AssertionError: false == true`

distinct messages:
- `Uncaught (in promise) AssertionError: false == true`
example test: `test/parallel/test-fs-promises-mkdtempDisposable.js`

### 2 × `Uncaught (in promise) AssertionError: Got rejection that did not match expected: AbortError: The operation was aborted`

distinct messages:
- `Uncaught (in promise) AssertionError: Got rejection that did not match expected: AbortError: The operation was aborted`
example test: `test/parallel/test-fs-promises-file-handle-append-file.js`

### 2 × `Uncaught (in promise) AssertionError: Missing expected rejection`

distinct messages:
- `Uncaught (in promise) AssertionError: Missing expected rejection`
example test: `test/parallel/test-filehandle-close.js`

### 2 × `Uncaught (in promise) Error: write: data must be a Buffer or string`

distinct messages:
- `Uncaught (in promise) Error: write: data must be a Buffer or string`
example test: `test/parallel/test-fs-promises-file-handle-write.js`

### 2 × `Uncaught (in promise) TypeError: pipeTo is not a function`

distinct messages:
- `Uncaught (in promise) TypeError: pipeTo is not a function`
example test: `test/parallel/test-stream-iter-pipeto-writev.js`

### 2 × `Uncaught (in promise) TypeError: pipeToSync is not a function`

distinct messages:
- `Uncaught (in promise) TypeError: pipeToSync is not a function`
example test: `test/parallel/test-stream-iter-pipeto-edge.js`

### 1 × `(debug: start undefined (debug: pos undefined (debug: bytesWritten <n> (debug: start undefined (debug: pos undefined (debug: file data abcdefghijklmnopqrstuvwxy`

distinct messages:
- `(debug: start          undefined
    (debug: pos            undefined
    (debug: bytesWritten   26
    (debug: start          undefined
    (debug: pos            undefined
    (debug: file data    abcdefghijklmnopqrstuvwxyz
    (debug: expected     abcdefghijklmnopqrstuvwxyz
    (debug: start     `
example test: `test/parallel/test-file-write-stream3.js`

### 1 × `(node:<n>) DeprecationWarning: Something is deprecated. AssertionError: received unexpected warning at Function.fail (native) at Process.listener (<loc>) at Ass`

distinct messages:
- `(node:36030) DeprecationWarning: Something is deprecated.
AssertionError: received unexpected warning
    at Function.fail (native)
    at Process.listener (test-process-no-deprecation.js:13:10)
    at AssertionError.get stack (native)
(node:36030) DeprecationWarning: Something else is deprecated.`
example test: `test/parallel/test-process-no-deprecation.js`

### 1 × `(node:<n>) Warning: A Warning (node:<n>) CustomWarning: A Warning (node:<n>) Warning: A Warning (node:<n>) CustomWarning: A Warning (node:<n>) [CODE001] CustomW`

distinct messages:
- `(node:35341) Warning: A Warning
(node:35341) CustomWarning: A Warning
(node:35341) Warning: A Warning
(node:35341) CustomWarning: A Warning
(node:35341) [CODE001] CustomWarning: A Warning
(node:35341) CustomWarning: A Warning
(node:35341) [CODE001] CustomWarning: A Warning
(node:35341) [CODE001] Cus`
example test: `test/parallel/test-process-emitwarning.js`

### 1 × `(node:<n>) Warning: test (node:<n>) DeprecationWarning: test (node:<n>) Warning: test (node:<n>) DeprecationWarning: test (node:<n>) Error: test (node:<n>) Warn`

distinct messages:
- `(node:36288) Warning: test
(node:36288) DeprecationWarning: test
(node:36288) Warning: test
(node:36288) DeprecationWarning: test
(node:36288) Error: test
(node:36288) Warning: test
AssertionError: undefined === 'foo'
    at Function.strictEqual (native)
    at Process.<anonymous> (test-process-warn`
example test: `test/parallel/test-process-warning.js`

### 1 × `(node) MaxListenersExceededWarning: Possible EventEmitter memory leak detected. <n> error listeners added. Use emitter.setMaxListeners() to increase limit. (nod`

distinct messages:
- `(node) MaxListenersExceededWarning: Possible EventEmitter memory leak detected. 11 error listeners added. Use emitter.setMaxListeners() to increase limit.
(node) MaxListenersExceededWarning: Possible EventEmitter memory leak detected. 12 error listeners added. Use emitter.setMaxListeners() to increa`
example test: `test/parallel/test-stream-pipe-cleanup.js`

### 1 × `(node) MaxListenersExceededWarning: Possible EventEmitter memory leak detected. <n> event-type listeners added. Use emitter.setMaxListeners() to increase limit.`

distinct messages:
- `(node) MaxListenersExceededWarning: Possible EventEmitter memory leak detected. 2 event-type listeners added. Use emitter.setMaxListeners() to increase limit.
(node) MaxListenersExceededWarning: Possible EventEmitter memory leak detected. 3 event-type listeners added. Use emitter.setMaxListeners() t`
example test: `test/parallel/test-event-emitter-max-listeners-warning.js`

### 1 × `(node) MaxListenersExceededWarning: Possible EventEmitter memory leak detected. <n> null listeners added. Use emitter.setMaxListeners() to increase limit.`

distinct messages:
- `(node) MaxListenersExceededWarning: Possible EventEmitter memory leak detected. 2 null listeners added. Use emitter.setMaxListeners() to increase limit.`
example test: `test/parallel/test-event-emitter-max-listeners-warning-for-null.js`

### 1 × `(node) MaxListenersExceededWarning: Possible EventEmitter memory leak detected. <n>  sym:<n> listeners added. Use emitter.setMaxListeners() to increase limit.`

distinct messages:
- `(node) MaxListenersExceededWarning: Possible EventEmitter memory leak detected. 2  sym:2 listeners added. Use emitter.setMaxListeners() to increase limit.`
example test: `test/parallel/test-event-emitter-max-listeners-warning-for-symbol.js`

### 1 × `[process <n>]: --- stderr --- (node:<n>) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(`

distinct messages:
- `[process 1256]: --- stderr ---
(node:1256) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.

[process 1256]: --- stdout ---

[process 1256]: status = 0, signal = null
Erro`
example test: `test/parallel/test-buffer-constructor-node-modules.js`

### 1 × `[process <n>]: --- stderr --- Error: Source is not a file or is not readable: /work/.harness/work/node-api/node-api-overlay/test/fixtures/spawn-worker-with-copi`

distinct messages:
- `[process 42686]: --- stderr ---
Error: Source is not a file or is not readable: /work/.harness/work/node-api/node-api-overlay/test/fixtures/spawn-worker-with-copied-env; see --help

[process 42686]: --- stdout ---

[process 42686]: status = 1, signal = null
Error: - process terminated with status 1,`
example test: `test/parallel/test-worker-node-options.js`

### 1 × `{}`

distinct messages:
- `{}`
example test: `test/parallel/test-stream-pipe-error-unhandled.js`

### 1 × `<n>: asdfasdfas <n>: 1234dfasdf <n>: 1234asdfas <n>: 1234dfasdf <n>: 1234asdfas <n>: 1234dfasdf <n>: 1234asdfas <n>: 1234dfasdf <n>: 1234asdfas <n>: 1234dfasdf `

distinct messages:
- `0: asdfasdfas
1: 1234dfasdf
2: 1234asdfas
3: 1234dfasdf
4: 1234asdfas
5: 1234dfasdf
6: 1234asdfas
7: 1234dfasdf
8: 1234asdfas
9: 1234dfasdf
a: 1234asdfas
b: 1234dfasdf
c: 1234asdfas
d: 1234dfasdf
e: 1234asdfas
f: 1234dfasdf
g: 1234asdfa
h: 1234
AssertionError: Got unwanted exception: undefined
    a`
example test: `test/parallel/test-stream-unshift-read-race.js`

### 1 × `<n>/<n>/<n>, <n><loc> PM start test <n>/<n>/<n>, <n><loc> PM waiting for callbacks <n>/<n>/<n>, <n><loc> PM fs open() callback <n>/<n>/<n>, <n><loc> PM WriteStr`

distinct messages:
- `8/8/2026, 12:58:25 PM start test
8/8/2026, 12:58:25 PM waiting for callbacks
8/8/2026, 12:58:25 PM fs open() callback
8/8/2026, 12:58:25 PM WriteStream constructor
8/8/2026, 12:58:25 PM closed 3
Mismatched WriteStream$open function calls. Expected exactly 1, actual 0.
    at Proxy.mustCall (/work/.h`
example test: `test/parallel/test-fs-stream-construct-compat-error-write.js`

### 1 × `> CLIENT SENDING REQUEST {expectClose: true, data: <str>} < SERVER SENDING RESPONSE {headers: {Connection: <str>}, chunks: [<str>]} > CLIENT ONDATA <n> <str> > `

distinct messages:
- `> CLIENT SENDING REQUEST {expectClose: true, data: "POST / HTTP/1.0\r\nConnection: keep-alive\r\n\r\n"}
<  SERVER SENDING RESPONSE {headers: {Connection: "keep-alive"}, chunks: ["OK"]}
 > CLIENT ONDATA 82 "HTTP/1.1 200 OK\r\nConnection: keep-alive\r\nDate: Sat, 08 Aug 2026 12:58:30 GMT\r\n\r\nOK"
 >`
example test: `test/parallel/test-http-1.0-keep-alive.js`

### 1 × `AssertionError at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError
    at :anonymous (test-http-debug.js:13:1)
    at :program (test-http-debug.js:1:1)`
example test: `test/parallel/test-http-debug.js`

### 1 × `AssertionError: -<n> === <n> at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: -1 === 6
    at :anonymous (test-buffer-indexof.js:34:1)
    at :program (test-buffer-indexof.js:1:1)`
example test: `test/parallel/test-buffer-indexof.js`

### 1 × `AssertionError: () => { res.writeHead(<n>, { <str>: <str> }); res.end(); } at <loc> at Function.fail (native) at Readable.mustNotCall (<loc>) at AssertionError.`

distinct messages:
- `AssertionError: () => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end();
  } at test-http-transfer-encoding-repeated-chunked.js:25
    at Function.fail (native)
    at Readable.mustNotCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:631:12)
    at Asse`
example test: `test/parallel/test-http-transfer-encoding-repeated-chunked.js`

### 1 × `AssertionError: (req, res) => { res.end(); } at <loc> called with arguments: IncomingMessage { socket: <ref *<n>> Socket { _handle: {}, _allowHalfOpen: true, co`

distinct messages:
- `AssertionError: (req, res) => {
    res.end();
  } at test-http-transfer-encoding-smuggling.js:27
called with arguments: IncomingMessage {
  socket: <ref *1> Socket {
    _handle: {},
    _allowHalfOpen: true,
    connecting: false,
    _connected: true,
    _readableEnded: false,
    _writableFinis`
example test: `test/parallel/test-http-transfer-encoding-smuggling.js`

### 1 × `AssertionError: (req, res) => { res.writeHead(<n>); res.end(); } at <loc> called with arguments: IncomingMessage { socket: <ref *<n>> Socket { _handle: {}, _all`

distinct messages:
- `AssertionError: (req, res) => {
    res.writeHead(200);
    res.end();
  } at test-http-request-host-header.js:7
called with arguments: IncomingMessage {
  socket: <ref *1> Socket {
    _handle: {},
    _allowHalfOpen: true,
    connecting: false,
    _connected: true,
    _readableEnded: false,
   `
example test: `test/parallel/test-http-request-host-header.js`

### 1 × `AssertionError: [[<n>], [<n>]] deepStrictEqual [<str>] at Function.deepStrictEqual (native) at <loc> at AssertionError.get stack (native) AssertionError: [[<n>]`

distinct messages:
- `AssertionError: [[97], [98]] deepStrictEqual ['ab']
    at Function.deepStrictEqual (native)
    at test-stream-readable-setEncoding-existing-buffers.js:18:12
    at AssertionError.get stack (native)
AssertionError: [[240], [159], [142], [137]] deepStrictEqual ['🎉']
    at Function.deepStrictEqual `
example test: `test/parallel/test-stream-readable-setEncoding-existing-buffers.js`

### 1 × `AssertionError: [] deepStrictEqual [{ ctrl: false, meta: false, shift: false, name: <str>, sequence: <str> }, { ctrl: false, meta: false, shift: false, name: <s`

distinct messages:
- `AssertionError: [] deepStrictEqual [{ ctrl: false, meta: false, shift: false, name: 'i', sequence: 'i' }, { ctrl: false, meta: false, shift: false, name: 'o', sequence: 'o' }, { ctrl: false, meta: false, shift: false, name: undefined, sequence: '.' }, { ctrl: false, meta: false, shift: true, name: '`
example test: `test/parallel/test-readline-keys.js`

### 1 × `AssertionError: [] deepStrictEqual [{ name: <str>, parentFilename: <str>, id: <str> }, { name: <str>, parentFilename: <str>, id: <str>, error: Cannot load modul`

distinct messages:
- `AssertionError: [] deepStrictEqual [{ name: 'start', parentFilename: '/work/.harness/work/node-api/node-api-overlay/test/parallel/test-diagnostics-channel-module-require-error.js', id: 'does-not-exist' }, { name: 'error', parentFilename: '/work/.harness/work/node-api/node-api-overlay/test/parallel/t`
example test: `test/parallel/test-diagnostics-channel-module-require-error.js`

### 1 × `AssertionError: [] deepStrictEqual [{ name: <str>, parentFilename: <str>, id: <str> }, { name: <str>, parentFilename: <str>, id: <str>, result: { METHODS: [<str`

distinct messages:
- `AssertionError: [] deepStrictEqual [{ name: 'start', parentFilename: '/work/.harness/work/node-api/node-api-overlay/test/parallel/test-diagnostics-channel-module-require.js', id: 'http' }, { name: 'end', parentFilename: '/work/.harness/work/node-api/node-api-overlay/test/parallel/test-diagnostics-ch`
example test: `test/parallel/test-diagnostics-channel-module-require.js`

### 1 × `AssertionError: [] deepStrictEqual [<n>, <n>, <n>, <n>, <n>, …] at verifyBufOutput (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: [] deepStrictEqual [116, 104, 105, 115, 32, …]
    at verifyBufOutput (test-child-process-spawnsync-input.js:51:3)
    at :anonymous (test-child-process-spawnsync-input.js:71:1)
    at :program (test-child-process-spawnsync-input.js:1:1)`
example test: `test/parallel/test-child-process-spawnsync-input.js`

### 1 × `AssertionError: [] deepStrictEqual [<str>, <str>, <str>, <str>, <str>, …] at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: [] deepStrictEqual ['toString', 'href', 'origin', 'protocol', 'username', …]
    at :anonymous (test-whatwg-url-custom-properties.js:27:1)
    at :program (test-whatwg-url-custom-properties.js:1:1)`
example test: `test/parallel/test-whatwg-url-custom-properties.js`

### 1 × `AssertionError: [] deepStrictEqual [<str>, <str>, <str>] at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: [] deepStrictEqual ['f', 'o', 'o']
    at :anonymous (test-readline-emit-keypress-events.js:30:3)
    at :program (test-readline-emit-keypress-events.js:1:1)`
example test: `test/parallel/test-readline-emit-keypress-events.js`

### 1 × `AssertionError: [{ type: <str>, store: undefined }, { type: <str>, store: { traceId: <str> } }, { type: <str>, store: undefined }] deepStrictEqual [{ type: <str`

distinct messages:
- `AssertionError: [{ type: 'start', store: undefined }, { type: 'inside', store: { traceId: 'abc123' } }, { type: 'end', store: undefined }] deepStrictEqual [{ type: 'start', store: { traceId: 'abc123' } }, { type: 'inside', store: { traceId: 'abc123' } }, { type: 'end', store: { traceId: 'abc123' } }`
example test: `test/parallel/test-diagnostics-channel-bounded-channel-run.js`

### 1 × `AssertionError: [<n>, <n>, <n>, <n>, <n>, …] === [<n>, <n>, <n>, <n>, <n>] at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: [0, 0, 0, 0, 0, …] === [0, 0, 0, 0, 0]
    at :anonymous (test-stream-readable-readable-one.js:18:5)
    at :program (test-stream-readable-readable-one.js:1:1)`
example test: `test/parallel/test-stream-readable-readable-one.js`

### 1 × `AssertionError: [<n>, <n>, <n>, <n>, <n>, …] === <str> at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: [97, 0, 98, 0, 99, …] === 'abc'
    at :anonymous (test-stream-decoder-objectmode.js:18:1)
    at :program (test-stream-decoder-objectmode.js:1:1)`
example test: `test/parallel/test-stream-decoder-objectmode.js`

### 1 × `AssertionError: [<str>, {}] deepStrictEqual [Symbol(symbol), {}] at :=> (<loc>) at _return (<loc>) at :anonymous (<loc>) at :program (<loc>) AssertionError: [<s`

distinct messages:
- `AssertionError: [' sym:2', {}] deepStrictEqual [Symbol(symbol), {}]
    at :=> (test-event-emitter-remove-all-listeners.js:119:5)
    at _return (index.js:573:12)
    at :anonymous (test-event-emitter-remove-all-listeners.js:122:3)
    at :program (test-event-emitter-remove-all-listeners.js:1:1)
Ass`
example test: `test/parallel/test-event-emitter-remove-all-listeners.js`

### 1 × `AssertionError: [<str>, <str>, <str>, <str>, <str>, …] deepStrictEqual [<str>, <str>, <str>, <str>, <str>, …] at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: ['does_zap_garbage', 'external_memory', 'heap_size_limit', 'malloced_memory', 'number_of_detached_contexts', …] deepStrictEqual ['does_zap_garbage', 'external_memory', 'heap_size_limit', 'malloced_memory', 'number_of_detached_contexts', …]
    at :anonymous (test-v8-stats.js:23:1)
  `
example test: `test/parallel/test-v8-stats.js`

### 1 × `AssertionError: [<str>, <str>, <str>, <str>, <str>, …] deepStrictEqual [<str>, <str>, <str>, <str>, <str>, …] at Function.deepStrictEqual (native) at <loc> at A`

distinct messages:
- `AssertionError: ['_read:a', 'push:a', 'readable', 'data:a', '_read:null', …] deepStrictEqual ['_read:a', 'push:a', 'readable', 'data:a', '_read:null', …]
    at Function.deepStrictEqual (native)
    at test-stream-readable-hwm-0-no-flow-data.js:98:14
    at AssertionError.get stack (native)`
example test: `test/parallel/test-stream-readable-hwm-0-no-flow-data.js`

### 1 × `AssertionError: [<str>, <str>, <str>, <str>, <str>, …] deepStrictEqual [<str>, <str>] at Function.deepStrictEqual (native) at EventEmitter.server (<loc>) at Eve`

distinct messages:
- `AssertionError: ['Host', '127.0.0.1:44267', 'Content-Length', '0', 'Connection', …] deepStrictEqual ['Host', '127.0.0.1:44267']
    at Function.deepStrictEqual (native)
    at EventEmitter.server (test-http-dont-set-default-headers-with-setHost.js:8:10)
    at EventEmitter._return (/work/.harness/wo`
example test: `test/parallel/test-http-dont-set-default-headers-with-setHost.js`

### 1 × `AssertionError: [<str>, <str>, <str>, <str>] deepStrictEqual [<str>, <str>, <str>, <str>] at Function.deepStrictEqual (native) at Writable.<anonymous> (<loc>) a`

distinct messages:
- `AssertionError: ['array-val', '2', 'Date', 'Sat, 08 Aug 2026 12:59:22 GMT'] deepStrictEqual ['array-val', '1', 'array-val', '2']
    at Function.deepStrictEqual (native)
    at Writable.<anonymous> (test-http-write-head-after-set-header.js:27:12)
    at Writable._return (/work/.harness/work/node-api`
example test: `test/parallel/test-http-write-head-after-set-header.js`

### 1 × `AssertionError: [<str>, <str>, <str>] deepStrictEqual [<str>, <str>, <str>, <str>, <str>, …] at :=> (<loc>) at _return (<loc>)`

distinct messages:
- `AssertionError: ['012', '345 67', '89 ABC DEF'] deepStrictEqual ['012', '345', '67', '89', 'ABC', …]
    at :=> (test-readline-line-separators.js:17:3)
    at _return (index.js:573:12)`
example test: `test/parallel/test-readline-line-separators.js`

### 1 × `AssertionError: [<str>, <str>, <str>] deepStrictEqual [<str>, <str>, <str>, <str>] at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: ['console', 'x', 'f'] deepStrictEqual ['console', 'x', 'f', 'g']
    at :anonymous (test-vm-global-define-property.js:47:1)
    at :program (test-vm-global-define-property.js:1:1)`
example test: `test/parallel/test-vm-global-define-property.js`

### 1 × `AssertionError: [<str>, <str>, <str>] deepStrictEqual [<str>] at Function.deepStrictEqual (native) at Writable.<anonymous> (<loc>) at Writable._return (<loc>) a`

distinct messages:
- `AssertionError: ['Cookie: foo=bar', 'Cookie: bar=baz', 'Cookie: baz=quux'] deepStrictEqual ['Cookie: foo=bar; bar=baz; baz=quux']
    at Function.deepStrictEqual (native)
    at Writable.<anonymous> (test-http.js:77:12)
    at Writable._return (/work/.harness/work/node-api/node-api-overlay/test/comm`
example test: `test/parallel/test-http.js`

### 1 × `AssertionError: [<str>, <str>, undefined, undefined] deepStrictEqual [<str>, <str>, <str>, undefined] at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: ['outer', 'inner', undefined, undefined] deepStrictEqual ['outer', 'inner', 'outer', undefined]
    at :anonymous (test-diagnostics-channel-bounded-channel-scope-nested.js:75:3)
    at :program (test-diagnostics-channel-bounded-channel-scope-nested.js:1:1)`
example test: `test/parallel/test-diagnostics-channel-bounded-channel-scope-nested.js`

### 1 × `AssertionError: [<str>, Symbol(s)] deepStrictEqual [<str>, <str>] at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: ['foo', Symbol(s)] deepStrictEqual ['foo', ' sym:2']
    at :anonymous (test-events-list.js:17:1)
    at :program (test-events-list.js:1:1)`
example test: `test/parallel/test-events-list.js`

### 1 × `AssertionError: [<str>] deepStrictEqual [<str>, <str>, <str>] at Function.deepStrictEqual (native) at Immediate.<anonymous> (<loc>) at Immediate._return (<loc>)`

distinct messages:
- `AssertionError: ['then'] deepStrictEqual ['before', 'then', 'after']
    at Function.deepStrictEqual (native)
    at Immediate.<anonymous> (test-async-wrap-promise-after-enabled.js:36:10)
    at Immediate._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at Asse`
example test: `test/parallel/test-async-wrap-promise-after-enabled.js`

### 1 × `AssertionError: [<str>] deepStrictEqual [<str>, <str>] at Function.deepStrictEqual (native) at Writable.<anonymous> (<loc>) at Writable._return (<loc>) at Writa`

distinct messages:
- `AssertionError: ['B'] deepStrictEqual ['A', 'B']
    at Function.deepStrictEqual (native)
    at Writable.<anonymous> (test-http-set-cookies.js:65:12)
    at Writable._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at Writable.emit (native)
    at Duplex.push `
example test: `test/parallel/test-http-set-cookies.js`

### 1 × `AssertionError: [object Writable] does not inherit from CustomWritable at CustomWritable (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: [object Writable] does not inherit from CustomWritable
    at CustomWritable (test-stream-inheritance.js:36:3)
    at :anonymous (test-stream-inheritance.js:49:1)
    at :program (test-stream-inheritance.js:1:1)`
example test: `test/parallel/test-stream-inheritance.js`

### 1 × `AssertionError: [Object: null prototype] {} misses the <str> property at Function.ok (native) at Readable.<anonymous> (<loc>) at Readable._return (<loc>) at Ass`

distinct messages:
- `AssertionError: [Object: null prototype] {} misses the 'x-foo' property
    at Function.ok (native)
    at Readable.<anonymous> (test-http-set-trailers.js:86:14)
    at Readable._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at AssertionError.get stack (nativ`
example test: `test/parallel/test-http-set-trailers.js`

### 1 × `AssertionError: { _handle: {}, _allowHalfOpen: false, connecting: false, _connected: true, _readableEnded: false, … } === { _handle: {}, _allowHalfOpen: false, `

distinct messages:
- `AssertionError: { _handle: {}, _allowHalfOpen: false, connecting: false, _connected: true, _readableEnded: false, … } === { _handle: {}, _allowHalfOpen: false, connecting: false, _connected: true, _readableEnded: false, … }
    at Function.strictEqual (native)
    at Writable.<anonymous> (test-http-`
example test: `test/parallel/test-http-agent-timeout.js`

### 1 × `AssertionError: { BASIC: <str>, AFTER_LINE: <str>, A: <str>, B: <str>, EMPTY: <str>, … } deepStrictEqual { A: <str>, B: <str>, AFTER_LINE: <str>, BACKTICKS: <st`

distinct messages:
- `AssertionError: { BASIC: 'basic', AFTER_LINE: 'after_line', A: 'B=C', B: 'C=D', EMPTY: '', … } deepStrictEqual { A: 'B=C', B: 'C=D', AFTER_LINE: 'after_line', BACKTICKS: 'backticks', BACKTICKS_INSIDE_DOUBLE: 'ʼbackticksʼ work inside double quotes', … }
    at :anonymous (test-util-parse-env.js:62:3)`
example test: `test/parallel/test-util-parse-env.js`

### 1 × `AssertionError: { keep-alive: <str>, date: <str>, transfer-encoding: <str>, connection: <str> } deepStrictEqual { connection: <str>, transfer-encoding: <str>, k`

distinct messages:
- `AssertionError: { keep-alive: 'timeout=1', date: 'Sat, 08 Aug 2026 12:59:06 GMT', transfer-encoding: 'chunked', connection: 'keep-alive' } deepStrictEqual { connection: 'keep-alive', transfer-encoding: 'chunked', keep-alive: 'timeout=1' }
    at Function.deepStrictEqual (native)
    at Writable.<ano`
example test: `test/parallel/test-http-content-length.js`

### 1 × `AssertionError: { protocol: null, slashes: false, auth: null, host: null, port: null, … } === <str> at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: { protocol: null, slashes: false, auth: null, host: null, port: null, … } === 'foo'
    at :anonymous (test-url-relative.js:8:1)
    at :program (test-url-relative.js:1:1)`
example test: `test/parallel/test-url-relative.js`

### 1 × `AssertionError: { resultHasOwn: { onSelf: true, onSelfGetter: true, onSelfIndexed: true, onOuterProto: false, onOuterProtoGetter: false, … }, resultDesc: { onSe`

distinct messages:
- `AssertionError: { resultHasOwn: { onSelf: true, onSelfGetter: true, onSelfIndexed: true, onOuterProto: false, onOuterProtoGetter: false, … }, resultDesc: { onSelf: { value: 'onSelf', writable: true, enumerable: true, configurable: true }, onSelfGetter: { get: {}, set: undefined, enumerable: false, c`
example test: `test/parallel/test-vm-global-property-prototype.js`

### 1 × `AssertionError: { state: <str> } deepStrictEqual { state: <str> } at Function.deepStrictEqual (native) at Readable.<anonymous> (<loc>) at Readable._return (<loc`

distinct messages:
- `AssertionError: { state: '/9' } deepStrictEqual { state: '/0' }
    at Function.deepStrictEqual (native)
    at Readable.<anonymous> (test-async-hooks-execution-async-resource.js:39:14)
    at Readable._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at Asserti`
example test: `test/parallel/test-async-hooks-execution-async-resource.js`

### 1 × `AssertionError: { type: <str>, data: null, origin: <str>, lastEventId: <str>, source: null, … } deepStrictEqual { type: <str>, data: undefined, origin: <str>, l`

distinct messages:
- `AssertionError: { type: 'message', data: null, origin: 'foo', lastEventId: '', source: null, … } deepStrictEqual { type: 'message', data: undefined, origin: 'foo', lastEventId: 'undefined', source: undefined, … }
    at :anonymous (test-worker-message-event.js:54:5)
    at :program (test-worker-mess`
example test: `test/parallel/test-worker-message-event.js`

### 1 × `AssertionError: { typeofProcess: <str> } deepStrictEqual { foo: <str>, typeofProcess: <str> } at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: { typeofProcess: 'object' } deepStrictEqual { foo: 'bar', typeofProcess: 'undefined' }
    at :anonymous (test-vm-basic.js:34:3)
    at :program (test-vm-basic.js:1:1)`
example test: `test/parallel/test-vm-basic.js`

### 1 × `AssertionError: {} === null at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: {} === null
    at :anonymous (test-fs-constants.js:11:1)
    at :program (test-fs-constants.js:1:1)`
example test: `test/parallel/test-fs-constants.js`

### 1 × `AssertionError: {} === undefined at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: {} === undefined
    at :anonymous (test-buffer-writeuint.js:228:3)
    at :program (test-buffer-writeuint.js:1:1)`
example test: `test/parallel/test-buffer-writeuint.js`

### 1 × `AssertionError: /a/ failed at expectColored (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: /a/ failed
    at expectColored (test-util-inspect-regexp.js:18:5)
    at :anonymous (test-util-inspect-regexp.js:112:3)
    at :program (test-util-inspect-regexp.js:1:1)`
example test: `test/parallel/test-util-inspect-regexp.js`

### 1 × `AssertionError: <n> !== <n> at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: 3511430202 !== 3511430202
    at :anonymous (test-v8-version-tag.js:19:1)
    at :program (test-v8-version-tag.js:1:1)`
example test: `test/parallel/test-v8-version-tag.js`

### 1 × `AssertionError: <n> !== <n> at Function.notStrictEqual (native) at <loc> at AssertionError.get stack (native)`

distinct messages:
- `AssertionError: 0 !== 0
    at Function.notStrictEqual (native)
    at test-async-wrap-trigger-id.js:16:12
    at AssertionError.get stack (native)`
example test: `test/parallel/test-async-wrap-trigger-id.js`

### 1 × `AssertionError: <n> !== <n> at Function.notStrictEqual (native) at EventEmitter.<anonymous> (<loc>) at EventEmitter._return (<loc>) at EventEmitter.emit (native`

distinct messages:
- `AssertionError: 0 !== 0
    at Function.notStrictEqual (native)
    at EventEmitter.<anonymous> (test-net-server-listen-path.js:67:16)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)
    at AssertionError.get s`
example test: `test/parallel/test-net-server-listen-path.js`

### 1 × `AssertionError: <n> === -<n> at Function.strictEqual (native) at EventEmitter.<anonymous> (<loc>) at EventEmitter._return (<loc>) at EventEmitter.emit (native) `

distinct messages:
- `AssertionError: 1 === -1
    at Function.strictEqual (native)
    at EventEmitter.<anonymous> (test-worker-safe-getters.js:27:12)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)
    at AssertionError.get stack `
example test: `test/parallel/test-worker-safe-getters.js`

### 1 × `AssertionError: <n> === <n> at :=> (<loc>) at _return (<loc>) at recurse (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: 2 === 1
    at :=> (test-async-hooks-recursive-stack-runInAsyncScope.js:11:5)
    at _return (index.js:573:12)
    at recurse (test-async-hooks-recursive-stack-runInAsyncScope.js:10:3)
    at :anonymous (test-async-hooks-recursive-stack-runInAsyncScope.js:20:1)
    at :program (test-`
example test: `test/parallel/test-async-hooks-recursive-stack-runInAsyncScope.js`

### 1 × `AssertionError: <n> === <n> at Function.strictEqual (native) at <loc> at _return (<loc>) at AssertionError.get stack (native)`

distinct messages:
- `AssertionError: 1 === 3
    at Function.strictEqual (native)
    at test-http-client-timeout-option-listeners.js:27:12
    at _return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at AssertionError.get stack (native)`
example test: `test/parallel/test-http-client-timeout-option-listeners.js`

### 1 × `AssertionError: <n> === <n> at Function.strictEqual (native) at checkAll (<loc>) at clientConnected (<loc>) at Duplex.connected (<loc>) at Duplex.emit (native) `

distinct messages:
- `AssertionError: 0 === 15
    at Function.strictEqual (native)
    at checkAll (test-process-getactiveresources-track-active-handles.js:33:10)
    at clientConnected (test-process-getactiveresources-track-active-handles.js:28:5)
    at Duplex.connected (test-process-getactiveresources-track-active-ha`
example test: `test/parallel/test-process-getactiveresources-track-active-handles.js`

### 1 × `AssertionError: <n> === <n> at Function.strictEqual (native) at Duplex.<anonymous> (<loc>) at Duplex._return (<loc>) at Duplex.push (native) at AssertionError.g`

distinct messages:
- `AssertionError: 4.0 === 0
    at Function.strictEqual (native)
    at Duplex.<anonymous> (test-net-server-pause-on-connect.js:53:12)
    at Duplex._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at Duplex.push (native)
    at AssertionError.get stack (native)
`
example test: `test/parallel/test-net-server-pause-on-connect.js`

### 1 × `AssertionError: <n> === <n> at Function.strictEqual (native) at EventEmitter.server (<loc>) at EventEmitter._return (<loc>) at EventEmitter.emit (native) at Dup`

distinct messages:
- `AssertionError: 3 === 8
    at Function.strictEqual (native)
    at EventEmitter.server (test-http-outgoing-properties.js:27:12)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)
    at Duplex.push (native)`
example test: `test/parallel/test-http-outgoing-properties.js`

### 1 × `AssertionError: <n> === <n> at Function.strictEqual (native) at Timeout.<anonymous> (<loc>) at Timeout._return (<loc>) at AssertionError.get stack (native)`

distinct messages:
- `AssertionError: 2 === 1
    at Function.strictEqual (native)
    at Timeout.<anonymous> (test-http-client-timeout-option.js:35:12)
    at Timeout._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at AssertionError.get stack (native)`
example test: `test/parallel/test-http-client-timeout-option.js`

### 1 × `AssertionError: <n> === <n> at Function.strictEqual (native) at Writable.<anonymous> (<loc>) at Writable._return (<loc>) at Writable.emit (native)`

distinct messages:
- `AssertionError: 1 === 0
    at Function.strictEqual (native)
    at Writable.<anonymous> (test-http-client-parse-error.js:46:14)
    at Writable._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at Writable.emit (native)`
example test: `test/parallel/test-http-client-parse-error.js`

### 1 × `AssertionError: <n> === <n> at Function.strictEqual (native) at Writable.<anonymous> (<loc>) at Writable._return (<loc>) at Writable.emit (native) at Readable.<`

distinct messages:
- `AssertionError: 1026 === 1024
    at Function.strictEqual (native)
    at Writable.<anonymous> (test-http-abort-stream-end.js:53:50)
    at Writable._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at Writable.emit (native)
    at Readable.<anonymous> (test-htt`
example test: `test/parallel/test-http-abort-stream-end.js`

### 1 × `AssertionError: <n> === <n> at testFromSyncString (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: 5 === 1
    at testFromSyncString (test-stream-iter-from-sync.js:16:3)
    at :anonymous (test-stream-iter-from-sync.js:219:3)
    at :program (test-stream-iter-from-sync.js:1:1)`
example test: `test/parallel/test-stream-iter-from-sync.js`

### 1 × `AssertionError: <n> === <n> at testTransform (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: 16384 === 666
    at testTransform (test-stream-transform-split-highwatermark.js:11:3)
    at :anonymous (test-stream-transform-split-highwatermark.js:16:1)
    at :program (test-stream-transform-split-highwatermark.js:1:1)`
example test: `test/parallel/test-stream-transform-split-highwatermark.js`

### 1 × `AssertionError: <n> === <n>.007199254740991E15 at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: 16384 === 9.007199254740991E15
    at :anonymous (test-streams-highwatermark.js:18:3)
    at :program (test-streams-highwatermark.js:1:1)`
example test: `test/parallel/test-streams-highwatermark.js`

### 1 × `AssertionError: <n> === <n>.223372036854776E18 at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: 0 === 9.223372036854776E18
    at :anonymous (test-perf-hooks-histogram.js:17:3)
    at :program (test-perf-hooks-histogram.js:1:1)`
example test: `test/parallel/test-perf-hooks-histogram.js`

### 1 × `AssertionError: <n> === null at Function.strictEqual (native) at Immediate.<anonymous> (<loc>) at Immediate._return (<loc>) at AssertionError.get stack (native)`

distinct messages:
- `AssertionError: 2 === null
    at Function.strictEqual (native)
    at Immediate.<anonymous> (test-stream-transform-hwm0.js:23:12)
    at Immediate._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at AssertionError.get stack (native)`
example test: `test/parallel/test-stream-transform-hwm0.js`

### 1 × `AssertionError: <n> === undefined at Function.strictEqual (native) at Duplex.<anonymous> (<loc>) at Duplex._return (<loc>) at Duplex.emit (native) at AssertionE`

distinct messages:
- `AssertionError: 0 === undefined
    at Function.strictEqual (native)
    at Duplex.<anonymous> (test-net-dns-error.js:40:10)
    at Duplex._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at Duplex.emit (native)
    at AssertionError.get stack (native)`
example test: `test/parallel/test-net-dns-error.js`

### 1 × `AssertionError: <n> === undefined at Function.strictEqual (native) at Object.<anonymous> (<loc>) at Object._return (<loc>) at <loc> at AssertionError.get stack `

distinct messages:
- `AssertionError: 3.0 === undefined
    at Function.strictEqual (native)
    at Object.<anonymous> (test-fs-read-stream-err.js:40:10)
    at Object._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at test-fs-read-stream-err.js:52:7
    at AssertionError.get stack`
example test: `test/parallel/test-fs-read-stream-err.js`

### 1 × `AssertionError: <n>, <n>, at :=> (<loc>) at _return (<loc>)`

distinct messages:
- `AssertionError: 3, 1,
    at :=> (test-zlib-zero-byte.js:44:5)
    at _return (index.js:573:12)`
example test: `test/parallel/test-zlib-zero-byte.js`

### 1 × `AssertionError: <str> === <str> at doTest (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: '' === '[1;1H[0J'
    at doTest (test-console-clear.js:17:3)
    at :anonymous (test-console-clear.js:22:3)
    at :program (test-console-clear.js:1:1)`
example test: `test/parallel/test-console-clear.js`

### 1 × `AssertionError: <str> === <str> at Function.strictEqual (native) at <loc> at _return (<loc>) at EventEmitter.emit (native) at AssertionError.get stack (native) `

distinct messages:
- `AssertionError: 'Command failed' === 'Command failed: /opt/elide/bin/elide /work/.harness/work/node-api/node-api-overlay/test/fixtures/exit.js 42'
    at Function.strictEqual (native)
    at test-child-process-execfile.js:27:14
    at _return (/work/.harness/work/node-api/node-api-overlay/test/commo`
example test: `test/parallel/test-child-process-execfile.js`

### 1 × `AssertionError: <str> === <str> at Function.strictEqual (native) at check (<loc>) at EventEmitter.server (<loc>) at EventEmitter.emit (native) at Duplex.push (n`

distinct messages:
- `AssertionError: 'Basic dXNlcjpwYXNzJTNB' === 'Basic dXNlcjpwYXNzOg=='
    at Function.strictEqual (native)
    at check (test-http-url.parse-auth.js:30:10)
    at EventEmitter.server (test-http-url.parse-auth.js:35:3)
    at EventEmitter.emit (native)
    at Duplex.push (native)`
example test: `test/parallel/test-http-url.parse-auth.js`

### 1 × `AssertionError: <str> === <str> at Function.strictEqual (native) at done (<loc>) at done (<loc>) at Writable.onUpgrade (<loc>) at Writable.emit (native) at Dupl`

distinct messages:
- `AssertionError: 'upgrade' === 'regular'
    at Function.strictEqual (native)
    at done (test-http-upgrade-advertise.js:23:12)
    at done (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at Writable.onUpgrade (test-http-upgrade-advertise.js:45:7)
    at Writable.emit`
example test: `test/parallel/test-http-upgrade-advertise.js`

### 1 × `AssertionError: <str> === <str> at Function.strictEqual (native) at Duplex.<anonymous> (<loc>) at Duplex._return (<loc>) at AssertionError.get stack (native) As`

distinct messages:
- `AssertionError: 'HTTP/1.1 200 OK
Content-Type: text/plain
Date: Sat, 08 Aug 2026 12:59:01 GMT
Transfer-Encoding: chunked
Connection: keep-alive
Keep-Alive: timeout=5

3
bye
' === 'HTTP/1.1 413 Payload Too Large
Connection: close

'
    at Function.strictEqual (native)
    at Duplex.<anon`
example test: `test/parallel/test-http-chunk-extensions-limit.js`

### 1 × `AssertionError: <str> === <str> at Function.strictEqual (native) at Duplex.<anonymous> (<loc>) at Duplex._return (<loc>) at Duplex.destroy (native) at Assertion`

distinct messages:
- `AssertionError: 'EADDRINUSE' === 'EACCES'
    at Function.strictEqual (native)
    at Duplex.<anonymous> (test-net-pipe-connect-errors.js:94:14)
    at Duplex._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at Duplex.destroy (native)
    at AssertionError.get `
example test: `test/parallel/test-net-pipe-connect-errors.js`

### 1 × `AssertionError: <str> === <str> at Function.strictEqual (native) at Duplex.<anonymous> (<loc>) at Duplex._return (<loc>) at Duplex.push (native) at Duplex.write`

distinct messages:
- `AssertionError: 'GET / HTTP/1.1
Expect: 100-continue
Host: localhost
Connection: close

' === 'GET / HTTP/1.1
Expect: 100-continue
Host: localhost:80
Connection: close

'
    at Function.strictEqual (native)
    at Duplex.<anonymous> (test-http-sync-write-error-during-continue.js:15:12)
  `
example test: `test/parallel/test-http-sync-write-error-during-continue.js`

### 1 × `AssertionError: <str> === <str> at Function.strictEqual (native) at Object.cb (<loc>) at Object.cb (<loc>) at AssertionError.get stack (native)`

distinct messages:
- `AssertionError: 'EIO' === 'EMSGSIZE'
    at Function.strictEqual (native)
    at Object.cb (test-dgram-msgsize.js:34:10)
    at Object.cb (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at AssertionError.get stack (native)`
example test: `test/parallel/test-dgram-msgsize.js`

### 1 × `AssertionError: <str> === <str> at Function.strictEqual (native) at Process.onUncaught (<loc>) at Process.onUncaught (<loc>) at AssertionError.get stack (native`

distinct messages:
- `AssertionError: 'undefined === null' === 'Destroy test'
    at Function.strictEqual (native)
    at Process.onUncaught (test-http-client-incomingmessage-destroy.js:13:10)
    at Process.onUncaught (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at AssertionError.get s`
example test: `test/parallel/test-http-client-incomingmessage-destroy.js`

### 1 × `AssertionError: <str> === <str> at Function.strictEqual (native) at Readable.<anonymous> (<loc>) at Readable._return (<loc>) at AssertionError.get stack (native`

distinct messages:
- `AssertionError: 'TypeError: (intermediate value)._rawDebug is not a function
    at child (test-process-raw-debug.js:69:3)
    at :anonymous (test-process-raw-debug.js:30:12)
    at :program (test-process-raw-debug.js:1:1)
' === 'I can still debug!
'
    at Function.strictEqual (native)
    at Reada`
example test: `test/parallel/test-process-raw-debug.js`

### 1 × `AssertionError: <str> === <str> at Function.strictEqual (native) at Readable.<anonymous> (<loc>) at Readable._return (<loc>) at Readable.push (native) at Assert`

distinct messages:
- `AssertionError: 'object' === 'string'
    at Function.strictEqual (native)
    at Readable.<anonymous> (test-child-process-exec-stdout-stderr-data-string.js:12:10)
    at Readable._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at Readable.push (native)
    at`
example test: `test/parallel/test-child-process-exec-stdout-stderr-data-string.js`

### 1 × `AssertionError: <str> === <str> at Function.strictEqual (native) at Writable.<anonymous> (<loc>) at Writable._return (<loc>) at Writable.emit (native) at Duplex`

distinct messages:
- `AssertionError: 'close' === 'keep-alive'
    at Function.strictEqual (native)
    at Writable.<anonymous> (test-http-automatic-headers.js:26:12)
    at Writable._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at Writable.emit (native)
    at Duplex.push (nativ`
example test: `test/parallel/test-http-automatic-headers.js`

### 1 × `AssertionError: <str> === <str> at testFunctionExists (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: 'undefined' === 'function'
    at testFunctionExists (test-stream-iter-writable-interop.js:23:3)
    at :anonymous (test-stream-iter-writable-interop.js:630:1)
    at :program (test-stream-iter-writable-interop.js:1:1)`
example test: `test/parallel/test-stream-iter-writable-interop.js`

### 1 × `AssertionError: <str> === <str> at testProtocolExists (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: 'undefined' === 'function'
    at testProtocolExists (test-stream-iter-readable-interop.js:24:3)
    at :anonymous (test-stream-iter-readable-interop.js:609:1)
    at :program (test-stream-iter-readable-interop.js:1:1)`
example test: `test/parallel/test-stream-iter-readable-interop.js`

### 1 × `AssertionError: <str> === <str>a<str>a<str>b<str>b<str>b<str>c<str> at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: 'URLSearchParams {}' === 'URLSearchParams { 'a' => 'a', 'b' => 'b', 'b' => 'c' }'
    at :anonymous (test-whatwg-url-custom-searchparams-inspect.js:10:1)
    at :program (test-whatwg-url-custom-searchparams-inspect.js:1:1)`
example test: `test/parallel/test-whatwg-url-custom-searchparams-inspect.js`

### 1 × `AssertionError: <str> === <str>https://username:password@host.name:<n>/path/name/?que=ry#hash<str>https://host.name:<n><str>https:<str>username<str>password<str`

distinct messages:
- `AssertionError: 'URL {}' === 'URL {   href: 'https://username:password@host.name:8080/path/name/?que=ry#hash',   origin: 'https://host.name:8080',   protocol: 'https:',   username: 'username',   password: 'password',   host: 'host.name:8080',   hostname: 'host.name',   port: '8080',   pathname: '/pa`
example test: `test/parallel/test-whatwg-url-custom-inspect.js`

### 1 × `AssertionError: <str> === undefined at assertEqualName (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: '' === undefined
    at assertEqualName (test-console-methods.js:47:5)
    at :anonymous (test-console-methods.js:57:3)
    at :program (test-console-methods.js:1:1)`
example test: `test/parallel/test-console-methods.js`

### 1 × `AssertionError: <str> === undefined at Function.strictEqual (native) at EventEmitter.<anonymous> (<loc>) at EventEmitter._return (<loc>) at EventEmitter.emit (n`

distinct messages:
- `AssertionError: 'Error: Error: fhqwhgads' === undefined
    at Function.strictEqual (native)
    at EventEmitter.<anonymous> (test-worker-error-stack-getter-throws.js:19:10)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.em`
example test: `test/parallel/test-worker-error-stack-getter-throws.js`

### 1 × `AssertionError: <str> object is present but v8_enable_i18n_support is true. Is this test out of date? at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: "Intl" object is present but v8_enable_i18n_support is true. Is this test out of date?
    at :anonymous (test-intl.js:60:3)
    at :program (test-intl.js:1:1)`
example test: `test/parallel/test-intl.js`

### 1 × `AssertionError: <str>::<n>:<n><str> === <str> at Function.strictEqual (native) at Duplex.<anonymous> (<loc>) at Duplex._return (<loc>) at Duplex.destroy (native`

distinct messages:
- `AssertionError: 'ECONNREFUSED: connection refused, tcp-connect '::1:45677' (errno=111)' === 'connect ECONNREFUSED ::1:45677'
    at Function.strictEqual (native)
    at Duplex.<anonymous> (test-net-autoselectfamily-commandline-option.js:35:16)
    at Duplex._return (/work/.harness/work/node-api/node`
example test: `test/parallel/test-net-autoselectfamily-commandline-option.js`

### 1 × `AssertionError: <str><n>.<n>:<n><str> === <str> at Function.strictEqual (native) at EventEmitter.<anonymous> (<loc>) at EventEmitter._return (<loc>) at EventEmi`

distinct messages:
- `AssertionError: 'EADDRINUSE: address already in use, udp-bind '1.1.1.1:0' (errno=98)' === 'bind EADDRNOTAVAIL 1.1.1.1'
    at Function.strictEqual (native)
    at EventEmitter.<anonymous> (test-dgram-error-message-address.js:34:10)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-o`
example test: `test/parallel/test-dgram-error-message-address.js`

### 1 × `AssertionError: <str>elide <script><str>elide run <script><str> === <str> at test (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: 'Error: Usage: 'elide <script>' or 'elide run <script>'; see --help' === ''
    at test (test-buffer-constructor-node-modules-paths.js:20:5)
    at :anonymous (test-buffer-constructor-node-modules-paths.js:23:1)
    at :program (test-buffer-constructor-node-modules-paths.js:1:1)`
example test: `test/parallel/test-buffer-constructor-node-modules-paths.js`

### 1 × `AssertionError: AssertionError: [] deepStrictEqual [<str>] TypeError: Cannot read property <str> of null at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: AssertionError: [] deepStrictEqual ['--trace-warnings']
TypeError: Cannot read property 'on' of null
    at :anonymous (test-worker-execargv.js:16:3)
    at :program (test-worker-execargv.js:1:1)`
example test: `test/parallel/test-worker-execargv.js`

### 1 × `AssertionError: AssertionError: {} deepStrictEqual { maxOldGenerationSizeMb: <n>, maxYoungGenerationSizeMb: <n>, codeRangeSizeMb: <n>, stackSizeMb: <n> } Assert`

distinct messages:
- `AssertionError: AssertionError: {} deepStrictEqual { maxOldGenerationSizeMb: 16, maxYoungGenerationSizeMb: 4, codeRangeSizeMb: 16, stackSizeMb: 1 }
AssertionError: {} deepStrictEqual { maxOldGenerationSizeMb: 16, maxYoungGenerationSizeMb: 4, codeRangeSizeMb: 16, stackSizeMb: 1 }
    at :anonymous (t`
example test: `test/parallel/test-worker-resource-limits.js`

### 1 × `AssertionError: AssertionError: Got unwanted exception: (intermediate value).execve is not a function`

distinct messages:
- `AssertionError: AssertionError: Got unwanted exception: (intermediate value).execve is not a function`
example test: `test/parallel/test-process-execve-worker-threads.js`

### 1 × `AssertionError: AssertionError: Missing expected exception. AssertionError: Missing expected exception. at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: AssertionError: Missing expected exception.
AssertionError: Missing expected exception.
    at :anonymous (test-worker-execargv-invalid.js:17:3)
    at :program (test-worker-execargv-invalid.js:1:1)`
example test: `test/parallel/test-worker-execargv-invalid.js`

### 1 × `AssertionError: AssertionError: NaN === NaN`

distinct messages:
- `AssertionError: AssertionError: NaN === NaN`
example test: `test/parallel/test-worker-unsupported-things.js`

### 1 × `AssertionError: AssertionError: The input did not match the regular expression: /AtomicsLoad/`

distinct messages:
- `AssertionError: AssertionError: The input did not match the regular expression: /AtomicsLoad/`
example test: `test/parallel/test-worker-process-cwd.js`

### 1 × `AssertionError: AssertionError: undefined === <str> AssertionError: undefined === <str> at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: AssertionError: undefined === 'test-worker-thread-name'
AssertionError: undefined === 'test-worker-thread-name'
    at :anonymous (test-worker-thread-name.js:13:3)
    at :program (test-worker-thread-name.js:1:1)`
example test: `test/parallel/test-worker-thread-name.js`

### 1 × `AssertionError: bufferSize: undefined at Function.ok (native) at EventEmitter.<anonymous> (<loc>) at EventEmitter._return (<loc>) at EventEmitter.emit (native) `

distinct messages:
- `AssertionError: bufferSize: undefined
    at Function.ok (native)
    at EventEmitter.<anonymous> (test-net-throttle.js:46:10)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)
    at AssertionError.get stack (na`
example test: `test/parallel/test-net-throttle.js`

### 1 × `AssertionError: Client allowed multiple content-length headers. at Function.fail (native) at Writable.<anonymous> (<loc>) at Writable.emit (native) at Duplex.pu`

distinct messages:
- `AssertionError: Client allowed multiple content-length headers.
    at Function.fail (native)
    at Writable.<anonymous> (test-http-response-multi-content-length.js:14:22)
    at Writable.emit (native)
    at Duplex.push (native)
AssertionError: Client allowed multiple content-length headers.
    a`
example test: `test/parallel/test-http-response-multi-content-length.js`

### 1 × `AssertionError: createScript crashes at ok (native) at <loc> at _return (<loc>) at EventEmitter.emit (native) at AssertionError.get stack (native) AssertionErro`

distinct messages:
- `AssertionError: createScript crashes
    at ok (native)
    at test-vm-api-handles-getter-errors.js:33:5
    at _return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)
    at AssertionError.get stack (native)
AssertionError: createScript `
example test: `test/parallel/test-vm-api-handles-getter-errors.js`

### 1 × `AssertionError: createWriteStream options.fs.open should throw if isn't a function at :=> (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: createWriteStream options.fs.open should throw if isn't a function
    at :=> (test-fs-stream-fs-options.js:26:5)
    at :anonymous (test-fs-stream-fs-options.js:19:3)
    at :program (test-fs-stream-fs-options.js:1:1)`
example test: `test/parallel/test-fs-stream-fs-options.js`

### 1 × `AssertionError: EIO: i/o error, tcp-bind <str> (errno=<n>) at Function.ok (native) at EventEmitter.<anonymous> (<loc>) at EventEmitter._return (<loc>) at EventE`

distinct messages:
- `AssertionError: EIO: i/o error, tcp-bind '/work/.harness/work/node-api/node-test/.tmp.2064/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`
example test: `test/parallel/test-net-pipe-with-long-path.js`

### 1 × `AssertionError: error: unexpected argument <str> found tip: to pass <str> as a value, use <str> Usage: elide [OPTIONS] [FILE] [-- <SCRIPT_ARGS>...] [COMMAND] Fo`

distinct messages:
- `AssertionError: error: unexpected argument '--enable-source-maps' found    tip: to pass '--enable-source-maps' as a value, use '-- --enable-source-maps'  Usage: elide [OPTIONS] [FILE] [-- <SCRIPT_ARGS>...] [COMMAND]  For more information, try '--help'.
    at :anonymous (test-util-getcallsites-sourc`
example test: `test/parallel/test-util-getcallsites-sourcemap.js`

### 1 × `AssertionError: EXIT CODE: <n>, STDERR: error: unexpected argument <str> found tip: to pass <str> as a value, use <str> Usage: elide [OPTIONS] [FILE] [-- <SCRIP`

distinct messages:
- `AssertionError: EXIT CODE: 2, STDERR: error: unexpected argument '--unhandled-rejections' found    tip: to pass '--unhandled-rejections' as a value, use '-- --unhandled-rejections'  Usage: elide [OPTIONS] [FILE] [-- <SCRIPT_ARGS>...] [COMMAND]  For more information, try '--help'.
    at :anonymous (`
example test: `test/parallel/test-async-wrap-pop-id-during-load.js`

### 1 × `AssertionError: Expected after-GC delta <n> to be less than <n> % of before-GC delta <n> at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Expected after-GC delta 0 to be less than 5 % of before-GC delta 0
    at :anonymous (test-zlib-unused-weak.js:17:1)
    at :program (test-zlib-unused-weak.js:1:1)`
example test: `test/parallel/test-zlib-unused-weak.js`

### 1 × `AssertionError: Expected awaitDrainWriters to be a Writable but instead got null at :=> (<loc>) at _return (<loc>)`

distinct messages:
- `AssertionError: Expected awaitDrainWriters to be a Writable but instead got null
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

### 1 × `AssertionError: expected to exit at <loc> at Function.fail (native) at Timeout.mustNotCall (<loc>) at AssertionError.get stack (native)`

distinct messages:
- `AssertionError: expected to exit at test-net-connect-paused-connection.js:32
    at Function.fail (native)
    at Timeout.mustNotCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:631:12)
    at AssertionError.get stack (native)`
example test: `test/parallel/test-net-connect-paused-connection.js`

### 1 × `AssertionError: false == true at :=> (<loc>) at _return (<loc>) at _write (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: false == true
    at :=> (test-stream-writable-decoded-encoding.js:42:5)
    at _return (index.js:573:12)
    at _write (test-stream-writable-decoded-encoding.js:35:5)
    at :anonymous (test-stream-writable-decoded-encoding.js:46:3)
    at :program (test-stream-writable-decoded-enco`
example test: `test/parallel/test-stream-writable-decoded-encoding.js`

### 1 × `AssertionError: false == true at :=> (<loc>) at _return (<loc>) at :=> (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: false == true
    at :=> (test-stream-typedarray.js:15:7)
    at _return (index.js:573:12)
    at :=> (test-stream-typedarray.js:23:26)
    at :anonymous (test-stream-typedarray.js:23:3)
    at :program (test-stream-typedarray.js:1:1)`
example test: `test/parallel/test-stream-typedarray.js`

### 1 × `AssertionError: false == true at :=> (<loc>) at _return (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: false == true
    at :=> (test-stream-uint8array.js:17:7)
    at _return (index.js:573:12)
    at :anonymous (test-stream-uint8array.js:28:3)
    at :program (test-stream-uint8array.js:1:1)`
example test: `test/parallel/test-stream-uint8array.js`

### 1 × `AssertionError: false == true at :=> (<loc>) at verifyStatFsObject (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: false == true
    at :=> (test-fs-statfs.js:12:5)
    at verifyStatFsObject (test-fs-statfs.js:9:3)
    at :anonymous (test-fs-statfs.js:31:3)
    at :program (test-fs-statfs.js:1:1)`
example test: `test/parallel/test-fs-statfs.js`

### 1 × `AssertionError: false == true at Function.ok (native) at Duplex.check (<loc>) at Duplex.check (<loc>) at Duplex.destroy (native) at AssertionError.get stack (na`

distinct messages:
- `AssertionError: false == true
    at Function.ok (native)
    at Duplex.check (test-net-blocklist.js:11:10)
    at Duplex.check (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at Duplex.destroy (native)
    at AssertionError.get stack (native)
AssertionError: false ==`
example test: `test/parallel/test-net-blocklist.js`

### 1 × `AssertionError: false == true at Function.ok (native) at EventEmitter.<anonymous> (<loc>) at EventEmitter._return (<loc>) at EventEmitter.emit (native) at Duple`

distinct messages:
- `AssertionError: false == true
    at Function.ok (native)
    at EventEmitter.<anonymous> (test-http-request-signal.js:10:12)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)
    at Duplex.push (native)
TypeErro`
example test: `test/parallel/test-http-request-signal.js`

### 1 × `AssertionError: false == true at ok (native) at checkRaise (<loc>) at Duplex.<anonymous> (<loc>) at Duplex._return (<loc>) at Duplex.push (native) at AssertionE`

distinct messages:
- `AssertionError: false == true
    at ok (native)
    at checkRaise (test-net-bytes-read.js:18:5)
    at Duplex.<anonymous> (test-net-bytes-read.js:23:5)
    at Duplex._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at Duplex.push (native)
    at AssertionError`
example test: `test/parallel/test-net-bytes-read.js`

### 1 × `AssertionError: false == true at ok (native) at EventEmitter.<anonymous> (<loc>) at EventEmitter._return (<loc>) at EventEmitter.emit (native) at AssertionError`

distinct messages:
- `AssertionError: false == true
    at ok (native)
    at EventEmitter.<anonymous> (test-http-client-override-global-agent.js:17:3)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)
    at AssertionError.get stack `
example test: `test/parallel/test-http-client-override-global-agent.js`

### 1 × `AssertionError: false == true at ok (native) at EventEmitter.httpServer (<loc>) at EventEmitter._return (<loc>) at EventEmitter.emit (native) at Duplex.push (na`

distinct messages:
- `AssertionError: false == true
    at ok (native)
    at EventEmitter.httpServer (test-http-byteswritten.js:48:3)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)
    at Duplex.push (native)`
example test: `test/parallel/test-http-byteswritten.js`

### 1 × `AssertionError: false === true at :=> (<loc>) at _return (<loc>) at expectError (<loc>) at test (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: false === true
    at :=> (test-stream-writable-write-error.js:18:7)
    at _return (index.js:573:12)
    at expectError (test-stream-writable-write-error.js:17:5)
    at test (test-stream-writable-write-error.js:37:5)
    at :anonymous (test-stream-writable-write-error.js:82:1)
    `
example test: `test/parallel/test-stream-writable-write-error.js`

### 1 × `AssertionError: false === true at Function.strictEqual (native) at <loc> at _return (<loc>)`

distinct messages:
- `AssertionError: false === true
    at Function.strictEqual (native)
    at test-http-outgoing-finished.js:19:12
    at _return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)`
example test: `test/parallel/test-http-outgoing-finished.js`

### 1 × `AssertionError: false === true at Function.strictEqual (native) at Duplex.<anonymous> (<loc>) at Duplex._return (<loc>) at AssertionError.get stack (native)`

distinct messages:
- `AssertionError: false === true
    at Function.strictEqual (native)
    at Duplex.<anonymous> (test-net-writable.js:12:12)
    at Duplex._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at AssertionError.get stack (native)`
example test: `test/parallel/test-net-writable.js`

### 1 × `AssertionError: false === true at Function.strictEqual (native) at Immediate.<anonymous> (<loc>) at Immediate._return (<loc>) at AssertionError.get stack (nativ`

distinct messages:
- `AssertionError: false === true
    at Function.strictEqual (native)
    at Immediate.<anonymous> (test-net-connect-memleak.js:54:12)
    at Immediate._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at AssertionError.get stack (native)`
example test: `test/parallel/test-net-connect-memleak.js`

### 1 × `AssertionError: false === true at Function.strictEqual (native) at Process.<anonymous> (<loc>) at Process._return (<loc>) at AssertionError.get stack (native) A`

distinct messages:
- `AssertionError: false === true
    at Function.strictEqual (native)
    at Process.<anonymous> (test-diagnostics-channel-bind-store.js:103:10)
    at Process._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at AssertionError.get stack (native)
AssertionError: {`
example test: `test/parallel/test-diagnostics-channel-bind-store.js`

### 1 × `AssertionError: false === true at Function.strictEqual (native) at Writable.<anonymous> (<loc>) at Writable._return (<loc>) at AssertionError.get stack (native)`

distinct messages:
- `AssertionError: false === true
    at Function.strictEqual (native)
    at Writable.<anonymous> (test-http-remove-header-stays-removed.js:44:12)
    at Writable._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at AssertionError.get stack (native)
AssertionError`
example test: `test/parallel/test-http-remove-header-stays-removed.js`

### 1 × `AssertionError: false === true at testMethod (<loc>) at :=> (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: false === true
    at testMethod (test-whatwg-url-properties.js:98:3)
    at :=> (test-whatwg-url-properties.js:11:3)
    at :anonymous (test-whatwg-url-properties.js:6:1)
    at :program (test-whatwg-url-properties.js:1:1)`
example test: `test/parallel/test-whatwg-url-properties.js`

### 1 × `AssertionError: function onUncaught(error) {} at <loc> called with arguments: <str>, <str> at Function.fail (native) at Process.mustNotCall (<loc>) at Assertion`

distinct messages:
- `AssertionError: function onUncaught(error) {} at test-http-server-incomingmessage-destroy.js:13
called with arguments: 'Error: Destroy test', 'uncaughtException'
    at Function.fail (native)
    at Process.mustNotCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:631:12)
    a`
example test: `test/parallel/test-http-server-incomingmessage-destroy.js`

### 1 × `AssertionError: function should not have been called at <loc> at Function.fail (native) at Readable.mustNotCall (<loc>) at AssertionError.get stack (native)`

distinct messages:
- `AssertionError: function should not have been called at test-http-dummy-characters-smuggling.js:48
    at Function.fail (native)
    at Readable.mustNotCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:631:12)
    at AssertionError.get stack (native)`
example test: `test/parallel/test-http-dummy-characters-smuggling.js`

### 1 × `AssertionError: function should not have been called at <loc> at Function.fail (native) at Timeout.mustNotCall (<loc>) at AssertionError.get stack (native)`

distinct messages:
- `AssertionError: function should not have been called at test-timers-to-primitive.js:26
    at Function.fail (native)
    at Timeout.mustNotCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:631:12)
    at AssertionError.get stack (native)`
example test: `test/parallel/test-timers-to-primitive.js`

### 1 × `AssertionError: function should not have been called at <loc> called with arguments: { foo: <str>, error: AssertionError: function should not have been called a`

distinct messages:
- `AssertionError: function should not have been called at test-diagnostics-channel-tracing-channel-callback.js:28
called with arguments: {
  foo: 'bar',
  error: AssertionError: function should not have been called at test-diagnostics-channel-tracing-channel-callback.js:42
called with arguments: 1, 2,`
example test: `test/parallel/test-diagnostics-channel-tracing-channel-callback.js`

### 1 × `AssertionError: function should not have been called at <loc> called with arguments: { result: [Function (anonymous)] }, <str> at Function.fail (native) at must`

distinct messages:
- `AssertionError: function should not have been called at test-diagnostics-channel-tracing-channel-promise-early-exit.js:11
called with arguments: { result: [Function (anonymous)] }, 'tracing:test:asyncStart'
    at Function.fail (native)
    at mustNotCall (/work/.harness/work/node-api/node-api-overl`
example test: `test/parallel/test-diagnostics-channel-tracing-channel-promise-early-exit.js`

### 1 × `AssertionError: function should not have been called at <loc> called with arguments: <Buffer <n> <n> <n> <n> <n> <n> <n> 6f <n> 3a <n> <n> <n> 6e <n> <n> <n> 6d`

distinct messages:
- `AssertionError: function should not have been called at test-child-process-ipc.js:38
called with arguments: <Buffer 54 79 70 65 45 72 72 6f 72 3a 20 28 69 6e 74 65 72 6d 65 64 69 61 74 65 20 76 61 6c 75 65 29 2e 6f 70 65 6e 53 74 64 69 6e 20 69 73 20 6e 6f 74 20 61 ... 10 more bytes>
    at Function`
example test: `test/parallel/test-child-process-ipc.js`

### 1 × `AssertionError: function should not have been called at <loc> called with arguments: <Buffer <n> <n> 6c 6c 6f <n> <n> 6f <n> 6c <n>> at Function.fail (native) a`

distinct messages:
- `AssertionError: function should not have been called at test-net-onread-static-buffer.js:26
called with arguments: <Buffer 68 65 6c 6c 6f 20 77 6f 72 6c 64>
    at Function.fail (native)
    at Duplex.mustNotCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:631:12)
    at Dupl`
example test: `test/parallel/test-net-onread-static-buffer.js`

### 1 × `AssertionError: function should not have been called at <loc> called with arguments: <Buffer <n> 6e 6f <n> <n> 3a> at Function.fail (native) at Readable.mustNot`

distinct messages:
- `AssertionError: function should not have been called at test-child-process-no-deprecation.js:14
called with arguments: <Buffer 28 6e 6f 64 65 3a>
    at Function.fail (native)
    at Readable.mustNotCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:631:12)
    at Readable.push`
example test: `test/parallel/test-child-process-no-deprecation.js`

### 1 × `AssertionError: function should not have been called at <loc> called with arguments: Error at <loc> at <loc>, [ CallSite {}, CallSite {} ] at mustNotCall (<loc>`

distinct messages:
- `AssertionError: function should not have been called at test-util-getcallsites-preparestacktrace.js:10 called with arguments: Error     at test-util-getcallsites-preparestacktrace.js:12:15     at test-util-getcallsites-preparestacktrace.js:1:1, [ CallSite {}, CallSite {} ]
    at mustNotCall (index.`
example test: `test/parallel/test-util-getcallsites-preparestacktrace.js`

### 1 × `AssertionError: function should not have been called at <loc> called with arguments: Error: an error at Timeout.<anonymous> (<loc>) at Function.fail (native) at`

distinct messages:
- `AssertionError: function should not have been called at test-dgram-bind-socket-close-before-lookup.js:16
called with arguments: Error: an error
    at Timeout.<anonymous> (test-dgram-bind-socket-close-before-lookup.js:11:7)
    at Function.fail (native)
    at EventEmitter.mustNotCall (/work/.harnes`
example test: `test/parallel/test-dgram-bind-socket-close-before-lookup.js`

### 1 × `AssertionError: function should not have been called at <loc> called with arguments: Error: Command failed at EventEmitter.emit (native) { code: <n>, signal: nu`

distinct messages:
- `AssertionError: function should not have been called at test-child-process-reject-null-bytes.js:110
called with arguments: Error: Command failed
    at EventEmitter.emit (native) {
  code: 1,
  signal: null
}, '', "Error: Usage: 'elide <script>' or 'elide run <script>'; see --help\n"
    at Function`
example test: `test/parallel/test-child-process-reject-null-bytes.js`

### 1 × `AssertionError: function should not have been called at <loc> called with arguments: Error: EADDRINUSE: address already in use, udp-bind <str> (errno=<n>) { cod`

distinct messages:
- `AssertionError: function should not have been called at test-dgram-ipv6only.js:32
called with arguments: Error: EADDRINUSE: address already in use, udp-bind '0.0.0.0:59952' (errno=98) {
  code: 'EADDRINUSE',
  errno: 98,
  syscall: 'bind'
}
    at Function.fail (native)
    at EventEmitter.mustNotCa`
example test: `test/parallel/test-dgram-ipv6only.js`

### 1 × `AssertionError: function should not have been called at <loc> called with arguments: Error: foobar at <loc> at <loc> at mustNotCall (<loc>) at :anonymous (<loc>`

distinct messages:
- `AssertionError: function should not have been called at test-domain-intercept.js:10 called with arguments: Error: foobar     at test-domain-intercept.js:21:9     at test-domain-intercept.js:1:1
    at mustNotCall (index.js:631:5)
    at :anonymous (test-domain-intercept.js:21:3)
    at :program (tes`
example test: `test/parallel/test-domain-intercept.js`

### 1 × `AssertionError: function should not have been called at <loc> called with arguments: Error: write after end at Error.get stack (native) at <loc> at Array.map (n`

distinct messages:
- `AssertionError: function should not have been called at test-http-server-write-end-after-end.js:9
called with arguments: Error: write after end
    at Error.get stack (native)
    at /work/.harness/work/node-api/node-api-overlay/test/common/index.js:630:53
    at Array.map (native)
    at Writable.m`
example test: `test/parallel/test-http-server-write-end-after-end.js`

### 1 × `AssertionError: function should not have been called at <loc> called with arguments: IncomingMessage { socket: Socket { _handle: {}, _allowHalfOpen: true, conne`

distinct messages:
- `AssertionError: function should not have been called at test-http-upgrade-server-callback.js:66
called with arguments: IncomingMessage {
  socket: Socket {
    _handle: {},
    _allowHalfOpen: true,
    connecting: false,
    _connected: true,
    _readableEnded: false,
    _writableFinished: false,`
example test: `test/parallel/test-http-upgrade-server-callback.js`

### 1 × `AssertionError: function should not have been called at <loc> called with arguments: null at Function.fail (native) at Object.mustNotCall (<loc>) at AssertionEr`

distinct messages:
- `AssertionError: function should not have been called at test-dgram-oob-buffer.js:36
called with arguments: null
    at Function.fail (native)
    at Object.mustNotCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:631:12)
    at AssertionError.get stack (native)
AssertionError:`
example test: `test/parallel/test-dgram-oob-buffer.js`

### 1 × `AssertionError: function should not have been called at <loc> called with arguments: Socket { _handle: {}, _allowHalfOpen: false, connecting: false, _connected:`

distinct messages:
- `AssertionError: function should not have been called at test-net-server-blocklist.js:8
called with arguments: Socket {
  _handle: {},
  _allowHalfOpen: false,
  connecting: false,
  _connected: true,
  _readableEnded: false,
  _writableFinished: false,
  _endCalled: false,
  _pendingWrites: [],
  _h`
example test: `test/parallel/test-net-server-blocklist.js`

### 1 × `AssertionError: function should not have been called at <loc> called with arguments: true at Function.fail (native) at Object.mustNotCall (<loc>) at EventEmitte`

distinct messages:
- `AssertionError: function should not have been called at test-net-server-nodelay.js:9
called with arguments: true
    at Function.fail (native)
    at Object.mustNotCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:631:12)
    at EventEmitter.<anonymous> (test-net-server-nodela`
example test: `test/parallel/test-net-server-nodelay.js`

### 1 × `AssertionError: function should not have been called at <loc> called with arguments: TypeError: Module not found: <str> { name: <str> } at Function.fail (native`

distinct messages:
- `AssertionError: function should not have been called at test-worker-esm-exit.js:8
called with arguments: TypeError: Module not found: './process-exit.mjs' { name: 'TypeError' }
    at Function.fail (native)
    at EventEmitter.mustNotCall (/work/.harness/work/node-api/node-api-overlay/test/common/in`
example test: `test/parallel/test-worker-esm-exit.js`

### 1 × `AssertionError: function should not have been called at <loc> called with arguments: TypeError: The input must be a Buffer, TypedArray, DataView, ArrayBuffer, o`

distinct messages:
- `AssertionError: function should not have been called at test-zlib-object-write.js:8 called with arguments: TypeError: The input must be a Buffer, TypedArray, DataView, ArrayBuffer, or string     at Transform.write (native)     at test-zlib-object-write.js:10:10     at Function.throws (native)     at`
example test: `test/parallel/test-zlib-object-write.js`

### 1 × `AssertionError: get %Object.prototype%.main at <loc> at mustNotCall (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: get %Object.prototype%.main at test-module-prototype-mutation.js:23
    at mustNotCall (index.js:631:5)
    at :anonymous (test-module-prototype-mutation.js:47:3)
    at :program (test-module-prototype-mutation.js:1:1)`
example test: `test/parallel/test-module-prototype-mutation.js`

### 1 × `AssertionError: Got unwanted exception: _write() not implemented at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Got unwanted exception: _write() not implemented
    at :anonymous (test-stream-writable-constructor-set-methods.js:10:1)
    at :program (test-stream-writable-constructor-set-methods.js:1:1)`
example test: `test/parallel/test-stream-writable-constructor-set-methods.js`

### 1 × `AssertionError: Got unwanted exception: (intermediate value).dlopen is not a function at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Got unwanted exception: (intermediate value).dlopen is not a function
    at :anonymous (test-process-dlopen-error-message-crash.js:15:1)
    at :program (test-process-dlopen-error-message-crash.js:1:1)`
example test: `test/parallel/test-process-dlopen-error-message-crash.js`

### 1 × `AssertionError: Got unwanted exception: (intermediate value).initgroups is not a function at :=> (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Got unwanted exception: (intermediate value).initgroups is not a function
    at :=> (test-process-initgroups.js:17:3)
    at :anonymous (test-process-initgroups.js:16:1)
    at :program (test-process-initgroups.js:1:1)`
example test: `test/parallel/test-process-initgroups.js`

### 1 × `AssertionError: Got unwanted exception: (intermediate value).kill is not a function at :=> (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Got unwanted exception: (intermediate value).kill is not a function
    at :=> (test-process-kill-pid.js:42:3)
    at :anonymous (test-process-kill-pid.js:41:1)
    at :program (test-process-kill-pid.js:1:1)`
example test: `test/parallel/test-process-kill-pid.js`

### 1 × `AssertionError: Got unwanted exception: (intermediate value).seteuid is not a function at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Got unwanted exception: (intermediate value).seteuid is not a function
    at :anonymous (test-process-euid-egid.js:20:1)
    at :program (test-process-euid-egid.js:1:1)`
example test: `test/parallel/test-process-euid-egid.js`

### 1 × `AssertionError: Got unwanted exception: (intermediate value).setgroups is not a function at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Got unwanted exception: (intermediate value).setgroups is not a function
    at :anonymous (test-process-setgroups.js:15:1)
    at :program (test-process-setgroups.js:1:1)`
example test: `test/parallel/test-process-setgroups.js`

### 1 × `AssertionError: Got unwanted exception: (intermediate value).setSourceMapsEnabled is not a function at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Got unwanted exception: (intermediate value).setSourceMapsEnabled is not a function
    at :anonymous (test-process-setsourcemapsenabled.js:13:3)
    at :program (test-process-setsourcemapsenabled.js:1:1)`
example test: `test/parallel/test-process-setsourcemapsenabled.js`

### 1 × `AssertionError: Got unwanted exception: (intermediate value).setuid is not a function at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Got unwanted exception: (intermediate value).setuid is not a function
    at :anonymous (test-process-uid-gid.js:41:1)
    at :program (test-process-uid-gid.js:1:1)`
example test: `test/parallel/test-process-uid-gid.js`

### 1 × `AssertionError: Got unwanted exception: <n> is not a String at :=> (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Got unwanted exception: 1 is not a String
    at :=> (test-v8-flag-type-check.js:7:3)
    at :anonymous (test-v8-flag-type-check.js:6:1)
    at :program (test-v8-flag-type-check.js:1:1)`
example test: `test/parallel/test-v8-flag-type-check.js`

### 1 × `AssertionError: Got unwanted exception: agent.addRequest is not a function at Function.throws (native) at <loc> at Array.forEach (native) at EventEmitter.<anony`

distinct messages:
- `AssertionError: Got unwanted exception: agent.addRequest is not a function
    at Function.throws (native)
    at test-http-client-reject-unexpected-agent.js:50:12
    at Array.forEach (native)
    at EventEmitter.<anonymous> (test-http-client-reject-unexpected-agent.js:49:23)
    at EventEmitter._r`
example test: `test/parallel/test-http-client-reject-unexpected-agent.js`

### 1 × `AssertionError: Got unwanted exception: Array buffer allocation failed at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Got unwanted exception: Array buffer allocation failed
    at :anonymous (test-buffer-slow.js:52:1)
    at :program (test-buffer-slow.js:1:1)`
example test: `test/parallel/test-buffer-slow.js`

### 1 × `AssertionError: Got unwanted exception: Cannot find module: <str> at :=> (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Got unwanted exception: Cannot find module: '.'
    at :=> (test-require-resolve-invalid-paths.js:10:5)
    at :anonymous (test-require-resolve-invalid-paths.js:9:3)
    at :program (test-require-resolve-invalid-paths.js:1:1)`
example test: `test/parallel/test-require-resolve-invalid-paths.js`

### 1 × `AssertionError: Got unwanted exception: Cannot load module: <str>: ../fixtures/module-loading-error.node at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Got unwanted exception: Cannot load module: 'Unsupported .node file: ': ../fixtures/module-loading-error.node
    at :anonymous (test-module-loading-error.js:58:1)
    at :program (test-module-loading-error.js:1:1)`
example test: `test/parallel/test-module-loading-error.js`

### 1 × `AssertionError: Got unwanted exception: Cannot read property <str> of undefined at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Got unwanted exception: Cannot read property 'reset' of undefined
    at :anonymous (test-zlib-reset-during-write.js:18:3)
    at :program (test-zlib-reset-during-write.js:1:1)`
example test: `test/parallel/test-zlib-reset-during-write.js`

### 1 × `AssertionError: Got unwanted exception: Class constructors cannot be invoked without <str> at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Got unwanted exception: Class constructors cannot be invoked without 'new'
    at :anonymous (test-zlib-invalid-arg-value-brotli-compress.js:18:1)
    at :program (test-zlib-invalid-arg-value-brotli-compress.js:1:1)`
example test: `test/parallel/test-zlib-invalid-arg-value-brotli-compress.js`

### 1 × `AssertionError: Got unwanted exception: Command failed: /work/.harness/work/node-api/node-test/.tmp.<n>/install/bin/elide at :anonymous (<loc>) at :program (<lo`

distinct messages:
- `AssertionError: Got unwanted exception: Command failed: /work/.harness/work/node-api/node-test/.tmp.1932/install/bin/elide
    at :anonymous (test-module-loading-globalpaths.js:52:3)
    at :program (test-module-loading-globalpaths.js:1:1)`
example test: `test/parallel/test-module-loading-globalpaths.js`

### 1 × `AssertionError: Got unwanted exception: Creating MessagePort instances is not allowed at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Got unwanted exception: Creating MessagePort instances is not allowed
    at :anonymous (test-worker-message-port-constructor.js:14:1)
    at :program (test-worker-message-port-constructor.js:1:1)`
example test: `test/parallel/test-worker-message-port-constructor.js`

### 1 × `AssertionError: Got unwanted exception: Creating PerformanceEntry instances is not allowed at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Got unwanted exception: Creating PerformanceEntry instances is not allowed
    at :anonymous (test-perf-hooks-resourcetiming.js:15:1)
    at :program (test-perf-hooks-resourcetiming.js:1:1)`
example test: `test/parallel/test-perf-hooks-resourcetiming.js`

### 1 × `AssertionError: Got unwanted exception: EBADF: bad file descriptor, fchmod at :=> (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Got unwanted exception: EBADF: bad file descriptor, fchmod
    at :=> (test-fs-fchmod.js:27:3)
    at :anonymous (test-fs-fchmod.js:22:1)
    at :program (test-fs-fchmod.js:1:1)`
example test: `test/parallel/test-fs-fchmod.js`

### 1 × `AssertionError: Got unwanted exception: EBADF: bad file descriptor, udp-addMembership <str> (errno=<n>) at Function.throws (native) at EventEmitter.<anonymous> `

distinct messages:
- `AssertionError: Got unwanted exception: EBADF: bad file descriptor, udp-addMembership '1' (errno=9)
    at Function.throws (native)
    at EventEmitter.<anonymous> (test-dgram-membership.js:14:12)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)`
example test: `test/parallel/test-dgram-membership.js`

### 1 × `AssertionError: Got unwanted exception: ECONNRESET: connection reset by peer, tcp-read <str> (errno=<n>) at Function.throws (native) at Duplex.<anonymous> (<loc`

distinct messages:
- `AssertionError: Got unwanted exception: ECONNRESET: connection reset by peer, tcp-read '3' (errno=104)
    at Function.throws (native)
    at Duplex.<anonymous> (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:806:12)
    at Duplex._return (/work/.harness/work/node-api/node-api-ov`
example test: `test/parallel/test-net-connect-reset-until-connected.js`

### 1 × `AssertionError: Got unwanted exception: ENOENT: network error, tcp-connect <str> (errno=<n>) at Function.throws (native) at Duplex.<anonymous> (<loc>) at Duplex`

distinct messages:
- `AssertionError: Got unwanted exception: ENOENT: network error, tcp-connect '/tmp/fadagagsdfgsdf' (errno=2)
    at Function.throws (native)
    at Duplex.<anonymous> (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:806:12)
    at Duplex._return (/work/.harness/work/node-api/node-ap`
example test: `test/parallel/test-net-better-error-messages-path.js`

### 1 × `AssertionError: Got unwanted exception: ENOENT: no such file or directory, access <str> at check (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Got unwanted exception: ENOENT: no such file or directory, access '/C:/foo'
    at check (test-fs-null-bytes.js:32:5)
    at :anonymous (test-fs-null-bytes.js:89:1)
    at :program (test-fs-null-bytes.js:1:1)`
example test: `test/parallel/test-fs-null-bytes.js`

### 1 × `AssertionError: Got unwanted exception: ENOENT: no such file or directory, chdir <str> -> <str> at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Got unwanted exception: ENOENT: no such file or directory, chdir '/work/.harness/work/node-api/node-api-overlay' -> 'does-not-exist'
    at :anonymous (test-process-chdir-errormessage.js:11:1)
    at :program (test-process-chdir-errormessage.js:1:1)`
example test: `test/parallel/test-process-chdir-errormessage.js`

### 1 × `AssertionError: Got unwanted exception: ENOENT: no such file or directory, open <str> at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Got unwanted exception: ENOENT: no such file or directory, open '/work/.harness/work/node-api/node-test/.tmp.818/assert-encoding-error'
    at :anonymous (test-fs-assert-encoding-error.js:18:1)
    at :program (test-fs-assert-encoding-error.js:1:1)`
example test: `test/parallel/test-fs-assert-encoding-error.js`

### 1 × `AssertionError: Got unwanted exception: ENOENT: no such file or directory, unlink <str> at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Got unwanted exception: ENOENT: no such file or directory, unlink 'nonexistent'
    at :anonymous (test-fs-rmdir-recursive-error.js:19:1)
    at :program (test-fs-rmdir-recursive-error.js:1:1)`
example test: `test/parallel/test-fs-rmdir-recursive-error.js`

### 1 × `AssertionError: Got unwanted exception: finished: argument must be a stream at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Got unwanted exception: finished: argument must be a stream
    at :anonymous (test-stream-end-of-streams.js:7:1)
    at :program (test-stream-end-of-streams.js:1:1)`
example test: `test/parallel/test-stream-end-of-streams.js`

### 1 × `AssertionError: Got unwanted exception: fs.Dir is not a constructor at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Got unwanted exception: fs.Dir is not a constructor
    at :anonymous (test-fs-read.js:69:1)
    at :program (test-fs-read.js:1:1)`
example test: `test/parallel/test-fs-read.js`

### 1 × `AssertionError: Got unwanted exception: Header name must be a valid HTTP token [<str>] at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Got unwanted exception: Header name must be a valid HTTP token ["undefined"]
    at :anonymous (test-http-outgoing-proto.js:16:1)
    at :program (test-http-outgoing-proto.js:1:1)`
example test: `test/parallel/test-http-outgoing-proto.js`

### 1 × `AssertionError: Got unwanted exception: Invalid URL at :=> (<loc>) at :=> (<loc>) at test (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Got unwanted exception: Invalid URL
    at :=> (test-http-invalid-urls.js:23:7)
    at :=> (test-http-invalid-urls.js:18:5)
    at test (test-http-invalid-urls.js:17:3)
    at :anonymous (test-http-invalid-urls.js:31:1)
    at :program (test-http-invalid-urls.js:1:1)`
example test: `test/parallel/test-http-invalid-urls.js`

### 1 × `AssertionError: Got unwanted exception: Invalid URL at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Got unwanted exception: Invalid URL
    at :anonymous (test-whatwg-url-custom-parsing.js:54:3)
    at :program (test-whatwg-url-custom-parsing.js:1:1)`
example test: `test/parallel/test-whatwg-url-custom-parsing.js`

### 1 × `AssertionError: Got unwanted exception: isStringOneByteRepresentation is not a function at :=> (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Got unwanted exception: isStringOneByteRepresentation is not a function
    at :=> (test-v8-string-is-one-byte-representation.js:16:3)
    at :anonymous (test-v8-string-is-one-byte-representation.js:6:1)
    at :program (test-v8-string-is-one-byte-representation.js:1:1)`
example test: `test/parallel/test-v8-string-is-one-byte-representation.js`

### 1 × `AssertionError: Got unwanted exception: Module.setSourceMapsSupport is not a function at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Got unwanted exception: Module.setSourceMapsSupport is not a function
    at :anonymous (test-module-setsourcemapssupport.js:18:5)
    at :program (test-module-setsourcemapssupport.js:1:1)`
example test: `test/parallel/test-module-setsourcemapssupport.js`

### 1 × `AssertionError: Got unwanted exception: node:worker_threads: moveMessagePortToContext is not implemented yet in Elide at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Got unwanted exception: node:worker_threads: moveMessagePortToContext is not implemented yet in Elide
    at :anonymous (test-worker-message-port-close.js:37:3)
    at :program (test-worker-message-port-close.js:1:1)`
example test: `test/parallel/test-worker-message-port-close.js`

### 1 × `AssertionError: Got unwanted exception: options.port should be >= <n> and < <n>. Received type number (-<n>). at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Got unwanted exception: options.port should be >= 0 and < 65536. Received type number (-1).
    at :anonymous (test-net-server-listen-options.js:41:5)
    at :program (test-net-server-listen-options.js:1:1)`
example test: `test/parallel/test-net-server-listen-options.js`

### 1 × `AssertionError: Got unwanted exception: pipeline: at least a source and a destination are required at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Got unwanted exception: pipeline: at least a source and a destination are required
    at :anonymous (test-stream-pipeline.js:63:3)
    at :program (test-stream-pipeline.js:1:1)`
example test: `test/parallel/test-stream-pipeline.js`

### 1 × `AssertionError: Got unwanted exception: process.abort() is not implemented at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Got unwanted exception: process.abort() is not implemented
    at :anonymous (test-process-abort.js:14:1)
    at :program (test-process-abort.js:1:1)`
example test: `test/parallel/test-process-abort.js`

### 1 × `AssertionError: Got unwanted exception: push is not a function at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Got unwanted exception: push is not a function
    at :anonymous (test-stream-iter-validation.js:24:1)
    at :program (test-stream-iter-validation.js:1:1)`
example test: `test/parallel/test-stream-iter-validation.js`

### 1 × `AssertionError: Got unwanted exception: RangeError: Maximum call stack size exceeded at Function.throws (native) at EventEmitter.<anonymous> (<loc>) at EventEmi`

distinct messages:
- `AssertionError: Got unwanted exception: RangeError: Maximum call stack size exceeded
    at Function.throws (native)
    at EventEmitter.<anonymous> (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:806:12)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/`
example test: `test/parallel/test-worker-stack-overflow.js`

### 1 × `AssertionError: Got unwanted exception: receiver is not a Buffer at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Got unwanted exception: receiver is not a Buffer
    at :anonymous (test-buffer-copy.js:133:1)
    at :program (test-buffer-copy.js:1:1)`
example test: `test/parallel/test-buffer-copy.js`

### 1 × `AssertionError: Got unwanted exception: res.setHeaders is not a function at Function.throws (native) at EventEmitter.<anonymous> (<loc>) at EventEmitter._return`

distinct messages:
- `AssertionError: Got unwanted exception: res.setHeaders is not a function
    at Function.throws (native)
    at EventEmitter.<anonymous> (test-http-response-setheaders.js:10:12)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitte`
example test: `test/parallel/test-http-response-setheaders.js`

### 1 × `AssertionError: Got unwanted exception: res.writeEarlyHints is not a function at Function.throws (native) at EventEmitter.<anonymous> (<loc>) at EventEmitter._r`

distinct messages:
- `AssertionError: Got unwanted exception: res.writeEarlyHints is not a function
    at Function.throws (native)
    at EventEmitter.<anonymous> (test-http-early-hints-invalid-argument.js:12:12)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    `
example test: `test/parallel/test-http-early-hints-invalid-argument.js`

### 1 × `AssertionError: Got unwanted exception: Server is not running at Function.throws (native) at <loc> at _return (<loc>) at AssertionError.get stack (native)`

distinct messages:
- `AssertionError: Got unwanted exception: Server is not running
    at Function.throws (native)
    at /work/.harness/work/node-api/node-api-overlay/test/common/index.js:806:12
    at _return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at AssertionError.get stack (n`
example test: `test/parallel/test-http-unix-socket.js`

### 1 × `AssertionError: Got unwanted exception: setMulticastInterface EINVAL at Function.throws (native) at EventEmitter.<anonymous> (<loc>) at EventEmitter._return (<l`

distinct messages:
- `AssertionError: Got unwanted exception: setMulticastInterface EINVAL
    at Function.throws (native)
    at EventEmitter.<anonymous> (test-dgram-multicast-set-interface.js:56:12)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitt`
example test: `test/parallel/test-dgram-multicast-set-interface.js`

### 1 × `AssertionError: Got unwanted exception: sig.addEventListener is not a function at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Got unwanted exception: sig.addEventListener is not a function
    at :anonymous (test-dgram-close-signal.js:9:3)
    at :program (test-dgram-close-signal.js:1:1)`
example test: `test/parallel/test-dgram-close-signal.js`

### 1 × `AssertionError: Got unwanted exception: swap16: length must be a multiple of <n> at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Got unwanted exception: swap16: length must be a multiple of 2
    at :anonymous (test-buffer-swap.js:42:3)
    at :program (test-buffer-swap.js:1:1)`
example test: `test/parallel/test-buffer-swap.js`

### 1 × `AssertionError: Got unwanted exception: TextDecoder: decoding error (fatal mode): MALFORMED[<n>] at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Got unwanted exception: TextDecoder: decoding error (fatal mode): MALFORMED[2]
    at :anonymous (test-whatwg-encoding-custom-textdecoder-utf16-surrogates.js:47:3)
    at :program (test-whatwg-encoding-custom-textdecoder-utf16-surrogates.js:1:1)`
example test: `test/parallel/test-whatwg-encoding-custom-textdecoder-utf16-surrogates.js`

### 1 × `AssertionError: Got unwanted exception: TextDecoder: unsupported encoding label:  utf-<n> at :=> (<loc>) at :=> (<loc>) at :anonymous (<loc>) at :program (<loc>`

distinct messages:
- `AssertionError: Got unwanted exception: TextDecoder: unsupported encoding label:  utf-8
    at :=> (test-whatwg-encoding-custom-textdecoder-api-invalid-label.js:26:5)
    at :=> (test-whatwg-encoding-custom-textdecoder-api-invalid-label.js:25:3)
    at :anonymous (test-whatwg-encoding-custom-textdec`
example test: `test/parallel/test-whatwg-encoding-custom-textdecoder-api-invalid-label.js`

### 1 × `AssertionError: Got unwanted exception: TextDecoder.decode: input must be a BufferSource (ArrayBuffer or TypedArray) at :=> (<loc>) at :anonymous (<loc>) at :pr`

distinct messages:
- `AssertionError: Got unwanted exception: TextDecoder.decode: input must be a BufferSource (ArrayBuffer or TypedArray)
    at :=> (test-whatwg-encoding-custom-textdecoder-invalid-arg.js:12:5)
    at :anonymous (test-whatwg-encoding-custom-textdecoder-invalid-arg.js:11:3)
    at :program (test-whatwg-e`
example test: `test/parallel/test-whatwg-encoding-custom-textdecoder-invalid-arg.js`

### 1 × `AssertionError: Got unwanted exception: The <str> argument must be an instance of Buffer or Uint8Array. at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Got unwanted exception: The "source" argument must be an instance of Buffer or Uint8Array.
    at :anonymous (test-icu-transcode.js:44:1)
    at :program (test-icu-transcode.js:1:1)`
example test: `test/parallel/test-icu-transcode.js`

### 1 × `AssertionError: Got unwanted exception: The <str> argument must be an instance of Buffer or Uint8Array. Received type number (<n>) at :=> (<loc>) at :anonymous `

distinct messages:
- `AssertionError: Got unwanted exception: The "list[0]" argument must be an instance of Buffer or Uint8Array. Received type number (104)
    at :=> (test-buffer-concat.js:49:3)
    at :anonymous (test-buffer-concat.js:48:1)
    at :program (test-buffer-concat.js:1:1)`
example test: `test/parallel/test-buffer-concat.js`

### 1 × `AssertionError: Got unwanted exception: The <str> argument must be an instance of Buffer or Uint8Array. Received type string (<str>) at :anonymous (<loc>) at :p`

distinct messages:
- `AssertionError: Got unwanted exception: The "b" argument must be an instance of Buffer or Uint8Array. Received type string ('abc')
    at :anonymous (test-buffer-compare.js:31:1)
    at :program (test-buffer-compare.js:1:1)`
example test: `test/parallel/test-buffer-compare.js`

### 1 × `AssertionError: Got unwanted exception: The <str> argument must be of type function. Received number at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Got unwanted exception: The "fn" argument must be of type function. Received number
    at :anonymous (test-process-exception-capture-errors.js:5:1)
    at :program (test-process-exception-capture-errors.js:1:1)`
example test: `test/parallel/test-process-exception-capture-errors.js`

### 1 × `AssertionError: Got unwanted exception: The <str> argument must be of type function. Received undefined at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Got unwanted exception: The "cb" argument must be of type function. Received undefined
    at :anonymous (test-fs-read-type.js:13:1)
    at :program (test-fs-read-type.js:1:1)`
example test: `test/parallel/test-fs-read-type.js`

### 1 × `AssertionError: Got unwanted exception: The <str> argument must be of type function. Received undefined at testUid (<loc>) at :=> (<loc>) at :anonymous (<loc>) `

distinct messages:
- `AssertionError: Got unwanted exception: The "cb" argument must be of type function. Received undefined
    at testUid (test-fs-fchown.js:13:3)
    at :=> (test-fs-fchown.js:29:3)
    at :anonymous (test-fs-fchown.js:22:1)
    at :program (test-fs-fchown.js:1:1)`
example test: `test/parallel/test-fs-fchown.js`

### 1 × `AssertionError: Got unwanted exception: The <str> argument must be of type object. Received Received undefined at :=> (<loc>) at :anonymous (<loc>) at :program `

distinct messages:
- `AssertionError: Got unwanted exception: The "options" argument must be of type object. Received Received undefined
    at :=> (test-child-process-constructor.js:13:5)
    at :anonymous (test-child-process-constructor.js:12:3)
    at :program (test-child-process-constructor.js:1:1)`
example test: `test/parallel/test-child-process-constructor.js`

### 1 × `AssertionError: Got unwanted exception: The <str> argument must be of type object. Received type number at :=> (<loc>) at checkFormat (<loc>) at :anonymous (<lo`

distinct messages:
- `AssertionError: Got unwanted exception: The "pathObject" argument must be of type object. Received type number
    at :=> (test-path-parse-format.js:215:5)
    at checkFormat (test-path-parse-format.js:214:3)
    at :anonymous (test-path-parse-format.js:119:1)
    at :program (test-path-parse-format`
example test: `test/parallel/test-path-parse-format.js`

### 1 × `AssertionError: Got unwanted exception: The <str> argument must be of type Object. Received undefined at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Got unwanted exception: The "superCtor.prototype" argument must be of type Object. Received undefined
    at :anonymous (test-util-inherits.js:86:1)
    at :program (test-util-inherits.js:1:1)`
example test: `test/parallel/test-util-inherits.js`

### 1 × `AssertionError: Got unwanted exception: The <str> argument must be of type string or an instance of Buffer or URL. Received an instance of URL at :anonymous (<l`

distinct messages:
- `AssertionError: Got unwanted exception: The "path" argument must be of type string or an instance of Buffer or URL. Received an instance of URL
    at :anonymous (test-fs-whatwg-url.js:24:1)
    at :program (test-fs-whatwg-url.js:1:1)`
example test: `test/parallel/test-fs-whatwg-url.js`

### 1 × `AssertionError: Got unwanted exception: The <str> argument must be of type string or an instance of Buffer or URL. Received type boolean (false) at :=> (<loc>) `

distinct messages:
- `AssertionError: Got unwanted exception: The "path" argument must be of type string or an instance of Buffer or URL. Received type boolean (false)
    at :=> (test-fs-rename-type-check.js:10:3)
    at :anonymous (test-fs-rename-type-check.js:7:1)
    at :program (test-fs-rename-type-check.js:1:1)`
example test: `test/parallel/test-fs-rename-type-check.js`

### 1 × `AssertionError: Got unwanted exception: The <str> argument must be of type string or an instance of Buffer, TypedArray, or DataView. Received undefined at :anon`

distinct messages:
- `AssertionError: Got unwanted exception: The "buffer" argument must be of type string or an instance of Buffer, TypedArray, or DataView. Received undefined
    at :anonymous (test-dgram-sendto.js:13:1)
    at :program (test-dgram-sendto.js:1:1)`
example test: `test/parallel/test-dgram-sendto.js`

### 1 × `AssertionError: Got unwanted exception: The <str> argument must be of type string or an instance of URL. Received boolean at :=> (<loc>) at :anonymous (<loc>) a`

distinct messages:
- `AssertionError: Got unwanted exception: The "filename" argument must be of type string or an instance of URL. Received boolean
    at :=> (test-worker-type-check.js:18:5)
    at :anonymous (test-worker-type-check.js:8:3)
    at :program (test-worker-type-check.js:1:1)`
example test: `test/parallel/test-worker-type-check.js`

### 1 × `AssertionError: Got unwanted exception: The <str> property must be of type number. Received type string at Function.throws (native) at EventEmitter.<anonymous> `

distinct messages:
- `AssertionError: Got unwanted exception: The "ttl" property must be of type number. Received type string
    at Function.throws (native)
    at EventEmitter.<anonymous> (test-dgram-setTTL.js:12:10)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)`
example test: `test/parallel/test-dgram-setTTL.js`

### 1 × `AssertionError: Got unwanted exception: The <str> property must be of type object, undefined, null, or worker_threads.SHARE_ENV. at :anonymous (<loc>) at :progr`

distinct messages:
- `AssertionError: Got unwanted exception: The "options.env" property must be of type object, undefined, null, or worker_threads.SHARE_ENV.
    at :anonymous (test-worker-process-env.js:26:3)
    at :program (test-worker-process-env.js:1:1)`
example test: `test/parallel/test-worker-process-env.js`

### 1 × `AssertionError: Got unwanted exception: The first argument must be of type string or an instance of Buffer, ArrayBuffer, or Array or an Array-like Object. Recei`

distinct messages:
- `AssertionError: Got unwanted exception: The first argument must be of type string or an instance of Buffer, ArrayBuffer, or Array or an Array-like Object. Received an instance of Object
    at :=> (test-buffer-from.js:59:3)
    at :anonymous (test-buffer-from.js:37:1)
    at :program (test-buffer-fr`
example test: `test/parallel/test-buffer-from.js`

### 1 × `AssertionError: Got unwanted exception: The value of <str> is out of range. It must be <= <str>. Received <n> at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Got unwanted exception: The value of "start" is out of range. It must be <= "end". Received 10
    at :anonymous (test-fs-read-stream.js:155:1)
    at :program (test-fs-read-stream.js:1:1)`
example test: `test/parallel/test-fs-read-stream.js`

### 1 × `AssertionError: Got unwanted exception: The value of <str> is out of range. It must be >= <n> && <= <n>. Received <n> at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Got unwanted exception: The value of "length" is out of range. It must be >= 0 && <= 0. Received 10
    at :anonymous (test-fs-read-empty-buffer.js:13:1)
    at :program (test-fs-read-empty-buffer.js:1:1)`
example test: `test/parallel/test-fs-read-empty-buffer.js`

### 1 × `AssertionError: Got unwanted exception: The value of <str> is out of range. It must be >= <n> and <= <n>. Received -<n> at :=> (<loc>) at :anonymous (<loc>) at `

distinct messages:
- `AssertionError: Got unwanted exception: The value of "offset" is out of range. It must be >= 0 and <= 9. Received -1
    at :=> (test-buffer-write.js:7:3)
    at :anonymous (test-buffer-write.js:6:1)
    at :program (test-buffer-write.js:1:1)`
example test: `test/parallel/test-buffer-write.js`

### 1 × `AssertionError: Got unwanted exception: The value of <str> is out of range. It must be >= <n> and <= <n>. Received <n> at Function.throws (native) at EventEmitt`

distinct messages:
- `AssertionError: Got unwanted exception: The value of "ttl" is out of range. It must be >= 0 and <= 255. Received 1000
    at Function.throws (native)
    at EventEmitter.<anonymous> (test-dgram-multicast-setTTL.js:34:10)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test`
example test: `test/parallel/test-dgram-multicast-setTTL.js`

### 1 × `AssertionError: Got unwanted exception: toWritable is not a function at testInvalidWriterThrows (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Got unwanted exception: toWritable is not a function
    at testInvalidWriterThrows (test-stream-iter-writable-from.js:303:3)
    at :anonymous (test-stream-iter-writable-from.js:616:1)
    at :program (test-stream-iter-writable-from.js:1:1)`
example test: `test/parallel/test-stream-iter-writable-from.js`

### 1 × `AssertionError: Got unwanted exception: Unexpected string in JSON at position <n> at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Got unwanted exception: Unexpected string in JSON at position 42
    at :anonymous (test-require-json.js:27:1)
    at :program (test-require-json.js:1:1)`
example test: `test/parallel/test-require-json.js`

### 1 × `AssertionError: Got unwanted exception: Unknown encoding: <n> at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Got unwanted exception: Unknown encoding: 1
    at :anonymous (test-buffer-tostring.js:32:3)
    at :program (test-buffer-tostring.js:1:1)`
example test: `test/parallel/test-buffer-tostring.js`

### 1 × `AssertionError: Got unwanted exception: URLPattern is not a constructor at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Got unwanted exception: URLPattern is not a constructor
    at :anonymous (test-urlpattern.js:10:1)
    at :program (test-urlpattern.js:1:1)`
example test: `test/parallel/test-urlpattern.js`

### 1 × `AssertionError: Got unwanted exception: URLPattern is not a function at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Got unwanted exception: URLPattern is not a function
    at :anonymous (test-urlpattern-types.js:9:1)
    at :program (test-urlpattern-types.js:1:1)`
example test: `test/parallel/test-urlpattern-types.js`

### 1 × `AssertionError: Got unwanted exception: v8.queryObjects is not a function at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Got unwanted exception: v8.queryObjects is not a function
    at :anonymous (test-v8-query-objects.js:21:5)
    at :program (test-v8-query-objects.js:1:1)`
example test: `test/parallel/test-v8-query-objects.js`

### 1 × `AssertionError: Got unwanted exception: v8.startHeapProfile is not a function at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Got unwanted exception: v8.startHeapProfile is not a function
    at :anonymous (test-v8-heap-profile.js:7:1)
    at :program (test-v8-heap-profile.js:1:1)`
example test: `test/parallel/test-v8-heap-profile.js`

### 1 × `AssertionError: Got unwanted exception: Value of <str> must be of type URL at :=> (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Got unwanted exception: Value of "this" must be of type URL
    at :=> (test-whatwg-url-invalidthis.js:12:3)
    at :anonymous (test-whatwg-url-invalidthis.js:8:1)
    at :program (test-whatwg-url-invalidthis.js:1:1)`
example test: `test/parallel/test-whatwg-url-invalidthis.js`

### 1 × `AssertionError: HTTP/<n> <n> ok Content-Length: <n> should not Keep-Alive at Function.strictEqual (native) at Writable.<anonymous> (<loc>) at Writable._return (`

distinct messages:
- `AssertionError: HTTP/1.0 200 ok
Content-Length: 0

 should not Keep-Alive
    at Function.strictEqual (native)
    at Writable.<anonymous> (test-http-should-keep-alive.js:60:14)
    at Writable._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at Writable.emi`
example test: `test/parallel/test-http-should-keep-alive.js`

### 1 × `AssertionError: init at main (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: init
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

### 1 × `AssertionError: maxBuffer should error at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: maxBuffer should error
    at :anonymous (test-child-process-spawnsync-maxbuf.js:22:3)
    at :program (test-child-process-spawnsync-maxbuf.js:1:1)`
example test: `test/parallel/test-child-process-spawnsync-maxbuf.js`

### 1 × `AssertionError: Missing expected exception. at :=> (<loc>) at :anonymous (<loc>) at _return (<loc>)`

distinct messages:
- `AssertionError: Missing expected exception.
    at :=> (test-zlib-truncated.js:40:5)
    at :anonymous (index.js:538:14)
    at _return (index.js:573:12)`
example test: `test/parallel/test-zlib-truncated.js`

### 1 × `AssertionError: Missing expected exception. at Function.throws (native) at <loc> at Array.forEach (native) at EventEmitter.<anonymous> (<loc>) at EventEmitter._`

distinct messages:
- `AssertionError: Missing expected exception.
    at Function.throws (native)
    at test-dgram-send-address-types.js:43:12
    at Array.forEach (native)
    at EventEmitter.<anonymous> (test-dgram-send-address-types.js:36:5)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/t`
example test: `test/parallel/test-dgram-send-address-types.js`

### 1 × `AssertionError: Missing expected exception. at Function.throws (native) at Duplex.<anonymous> (<loc>) at Duplex._return (<loc>) at Duplex.push (native) at Asser`

distinct messages:
- `AssertionError: Missing expected exception.
    at Function.throws (native)
    at Duplex.<anonymous> (test-child-process-disconnect.js:96:18)
    at Duplex._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at Duplex.push (native)
    at AssertionError.get stack`
example test: `test/parallel/test-child-process-disconnect.js`

### 1 × `AssertionError: Missing expected exception. at testSingle (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Missing expected exception.
    at testSingle (test-worker-message-port-transfer-closed.js:17:3)
    at :anonymous (test-worker-message-port-transfer-closed.js:48:1)
    at :program (test-worker-message-port-transfer-closed.js:1:1)`
example test: `test/parallel/test-worker-message-port-transfer-closed.js`

### 1 × `AssertionError: Non-integer delay ordering should be <n>,<n>,<n>,<n>, but got <n>,<n>,<n>,<n> at Function.deepStrictEqual (native) at Timeout.<anonymous> (<loc>`

distinct messages:
- `AssertionError: Non-integer delay ordering should be 1,2,3,4, but got 1,3,4,2
    at Function.deepStrictEqual (native)
    at Timeout.<anonymous> (test-timers-non-integer-delay.js:72:12)
    at Timeout._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at Asserti`
example test: `test/parallel/test-timers-non-integer-delay.js`

### 1 × `AssertionError: null == true at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: null == true
    at :anonymous (test-module-main-preserve-symlinks-fail.js:15:7)
    at :program (test-module-main-preserve-symlinks-fail.js:1:1)`
example test: `test/parallel/test-module-main-preserve-symlinks-fail.js`

### 1 × `AssertionError: null === <n> at Function.strictEqual (native) at EventEmitter.<anonymous> (<loc>) at EventEmitter._return (<loc>) at EventEmitter.emit (native) `

distinct messages:
- `AssertionError: null === 0
    at Function.strictEqual (native)
    at EventEmitter.<anonymous> (test-child-process-kill.js:71:10)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)
    at AssertionError.get stack`
example test: `test/parallel/test-child-process-kill.js`

### 1 × `AssertionError: null === <str> at Function.strictEqual (native) at EventEmitter.<anonymous> (<loc>) at EventEmitter._return (<loc>) at EventEmitter.emit (native`

distinct messages:
- `AssertionError: null === 'SIGINT'
    at Function.strictEqual (native)
    at EventEmitter.<anonymous> (test-process-remove-all-signal-listeners.js:17:12)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)
    at `
example test: `test/parallel/test-process-remove-all-signal-listeners.js`

### 1 × `AssertionError: null === This stream turned into bacon. at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: null === This stream turned into bacon.
    at :anonymous (test-stream-pipe-error-handling.js:58:3)
    at :program (test-stream-pipe-error-handling.js:1:1)`
example test: `test/parallel/test-stream-pipe-error-handling.js`

### 1 × `AssertionError: rawHeaders.length (<n>) exceeds limit (<n>) at Function.ok (native) at EventEmitter.<anonymous> (<loc>) at EventEmitter._return (<loc>) at Event`

distinct messages:
- `AssertionError: rawHeaders.length (132) exceeds limit (100)
    at Function.ok (native)
    at EventEmitter.<anonymous> (test-http-rawheaders-limit.js:9:10)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)
    a`
example test: `test/parallel/test-http-rawheaders-limit.js`

### 1 × `AssertionError: Should get engine Gzip after gzip string with info option. at :=> (<loc>) at _return (<loc>)`

distinct messages:
- `AssertionError: Should get engine Gzip after gzip string with info option.
    at :=> (test-zlib-convenience-methods.js:77:7)
    at _return (index.js:573:12)`
example test: `test/parallel/test-zlib-convenience-methods.js`

### 1 × `AssertionError: Should not call _write at <loc> called with arguments: <str>, <str>, [Function (anonymous)] at mustNotCall (<loc>) at test (<loc>) at run (<loc>`

distinct messages:
- `AssertionError: Should not call _write at test-stream-writev.js:61 called with arguments: 'hello, ', 'ascii', [Function (anonymous)]
    at mustNotCall (index.js:631:5)
    at test (test-stream-writev.js:110:5)
    at run (test-stream-writev.js:42:5)
    at :anonymous (test-stream-writev.js:37:1)
  `
example test: `test/parallel/test-stream-writev.js`

### 1 × `AssertionError: Should throw DataCloneError when posting uncloneables at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Should throw DataCloneError when posting uncloneables
    at :anonymous (test-worker-message-mark-as-uncloneable.js:15:3)
    at :program (test-worker-message-mark-as-uncloneable.js:1:1)`
example test: `test/parallel/test-worker-message-mark-as-uncloneable.js`

### 1 × `AssertionError: stderr output must include proper uncaughtException handler<str>s message at ok (native) at onTestDone (<loc>) at onTestDone (<loc>) at EventEmi`

distinct messages:
- `AssertionError: stderr output must include proper uncaughtException handler's error's message
    at ok (native)
    at onTestDone (test-domain-throw-error-then-throw-from-uncaught-exception-handler.js:59:7)
    at onTestDone (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12`
example test: `test/parallel/test-domain-throw-error-then-throw-from-uncaught-exception-handler.js`

### 1 × `AssertionError: Test index <n> failed: Error: Command failed: ulimit -c <n> && <str> --abort-on-uncaught-exception <str> child ${ESCAPED_2} at :anonymous (<loc>`

distinct messages:
- `AssertionError: Test index 0 failed: Error: Command failed: ulimit -c 0 && "${ESCAPED_0}" --abort-on-uncaught-exception "${ESCAPED_1}" child ${ESCAPED_2}
    at :anonymous (test-domain-abort-on-uncaught.js:215:7)
    at :anonymous (test-domain-abort-on-uncaught.js:204:3)
    at :program (test-domain`
example test: `test/parallel/test-domain-abort-on-uncaught.js`

### 1 × `AssertionError: The input did not match the regular expression: /^<n>|<n>$/ at Function.match (native) at Object.<anonymous> (<loc>) at Object._return (<loc>) a`

distinct messages:
- `AssertionError: The input did not match the regular expression: /^2|3$/
    at Function.match (native)
    at Object.<anonymous> (test-net-server-keepalive.js:13:12)
    at Object._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.<anonymous> (tes`
example test: `test/parallel/test-net-server-keepalive.js`

### 1 × `AssertionError: The input did not match the regular expression: /^Error: foo$/ at Function.match (native) at EventEmitter.<anonymous> (<loc>) at EventEmitter._r`

distinct messages:
- `AssertionError: The input did not match the regular expression: /^Error: foo$/
    at Function.match (native)
    at EventEmitter.<anonymous> (test-worker-uncaught-exception.js:13:12)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at Event`
example test: `test/parallel/test-worker-uncaught-exception.js`

### 1 × `AssertionError: The input did not match the regular expression: /^Parse Error/ at Function.match (native) at EventEmitter.<anonymous> (<loc>) at EventEmitter._r`

distinct messages:
- `AssertionError: The input did not match the regular expression: /^Parse Error/
    at Function.match (native)
    at EventEmitter.<anonymous> (test-http-parser-finish-error.js:14:10)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventE`
example test: `test/parallel/test-http-parser-finish-error.js`

### 1 × `AssertionError: The input did not match the regular expression: /^Sat Apr <n> <n> <n><loc> GMT\+<n> \(.+\)$/ at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: The input did not match the regular expression: /^Sat Apr 14 2018 14:34:56 GMT\+0200 \(.+\)$/
    at :anonymous (test-process-env-tz.js:32:1)
    at :program (test-process-env-tz.js:1:1)`
example test: `test/parallel/test-process-env-tz.js`

### 1 × `AssertionError: The input did not match the regular expression: /BEGIN CERT/ at Function.match (native) at Readable.<anonymous> (<loc>) at Readable._return (<lo`

distinct messages:
- `AssertionError: The input did not match the regular expression: /BEGIN CERT/
    at Function.match (native)
    at Readable.<anonymous> (test-vm-syntax-error-stderr.js:22:10)
    at Readable._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at AssertionError.get`
example test: `test/parallel/test-vm-syntax-error-stderr.js`

### 1 × `AssertionError: The input did not match the regular expression: /Cannot find module .+<loc>/ at Function.match (native) at EventEmitter.<anonymous> (<loc>) at E`

distinct messages:
- `AssertionError: The input did not match the regular expression: /Cannot find module .+does-not-exist.js/
    at Function.match (native)
    at EventEmitter.<anonymous> (test-worker-esm-missing-main.js:14:10)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index`
example test: `test/parallel/test-worker-esm-missing-main.js`

### 1 × `AssertionError: The input did not match the regular expression: /EISDIR/ at Function.match (native) at <loc> at _return (<loc>) at <loc> at _return (<loc>) at E`

distinct messages:
- `AssertionError: The input did not match the regular expression: /EISDIR/
    at Function.match (native)
    at test-fs-readfile-error.js:48:10
    at _return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at test-fs-readfile-error.js:43:5
    at _return (/work/.harne`
example test: `test/parallel/test-fs-readfile-error.js`

### 1 × `AssertionError: The input did not match the regular expression: /expected-filename/ at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: The input did not match the regular expression: /expected-filename/
    at :anonymous (test-vm-context.js:60:3)
    at :program (test-vm-context.js:1:1)`
example test: `test/parallel/test-vm-context.js`

### 1 × `AssertionError: The input did not match the regular expression: /Keep-Alive: timeout=<n>, max=<n>\r\n/m at Function.match (native) at assertResponse (<loc>) at `

distinct messages:
- `AssertionError: The input did not match the regular expression: /Keep-Alive: timeout=65, max=3\r\n/m
    at Function.match (native)
    at assertResponse (test-http-keep-alive-max-requests.js:17:12)
    at Duplex.<anonymous> (test-http-keep-alive-max-requests.js:69:9)
    at Duplex.push (native)
   `
example test: `test/parallel/test-http-keep-alive-max-requests.js`

### 1 × `AssertionError: The input did not match the regular expression: /MODULE_NOT_FOUND/ at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: The input did not match the regular expression: /MODULE_NOT_FOUND/
    at :anonymous (test-module-main-fail.js:14:5)
    at :program (test-module-main-fail.js:1:1)`
example test: `test/parallel/test-module-main-fail.js`

### 1 × `AssertionError: The input did not match the regular expression: /process\.std\b/ at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: The input did not match the regular expression: /process\.std\b/
    at :anonymous (test-readline-undefined-columns.js:43:1)
    at :program (test-readline-undefined-columns.js:1:1)`
example test: `test/parallel/test-readline-undefined-columns.js`

### 1 × `AssertionError: true === false at :=> (<loc>) at _return (<loc>) at :=> (<loc>) at _return (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: true === false
    at :=> (test-stream-pipe-unpipe-streams.js:47:5)
    at _return (index.js:573:12)
    at :=> (test-stream-pipe-unpipe-streams.js:76:9)
    at _return (index.js:573:12)
    at :anonymous (test-stream-pipe-unpipe-streams.js:84:3)
    at :program (test-stream-pipe-unp`
example test: `test/parallel/test-stream-pipe-unpipe-streams.js`

### 1 × `AssertionError: true === false at :=> (<loc>) at _return (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: true === false
    at :=> (test-stream2-readable-wrap-error.js:34:7)
    at _return (index.js:573:12)
    at :anonymous (test-stream2-readable-wrap-error.js:36:3)
    at :program (test-stream2-readable-wrap-error.js:1:1)`
example test: `test/parallel/test-stream2-readable-wrap-error.js`

### 1 × `AssertionError: true === false at :anonymous (<loc>) at _return (<loc>)`

distinct messages:
- `AssertionError: true === false
    at :anonymous (test-stream-readable-needReadable.js:69:3)
    at _return (index.js:573:12)`
example test: `test/parallel/test-stream-readable-needReadable.js`

### 1 × `AssertionError: true === false at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: true === false
    at :anonymous (test-stream-duplex-readable-writable.js:11:3)
    at :program (test-stream-duplex-readable-writable.js:1:1)`
example test: `test/parallel/test-stream-duplex-readable-writable.js`

### 1 × `AssertionError: true === false at notUtilIsDeepStrict (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: true === false
    at notUtilIsDeepStrict (test-util-isDeepStrictEqual.js:17:3)
    at :anonymous (test-util-isDeepStrictEqual.js:25:3)
    at :program (test-util-isDeepStrictEqual.js:1:1)`
example test: `test/parallel/test-util-isDeepStrictEqual.js`

### 1 × `AssertionError: TypeError: Cannot read property <str> of undefined at :anonymous (<loc>) at :program (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: TypeError: Cannot read property 'uvMetricsInfo' of undefined     at :anonymous (test-nodetiming-uvmetricsinfo.js:17:16)     at :program (test-nodetiming-uvmetricsinfo.js:1:1)
    at :anonymous (test-performance-nodetiming-uvmetricsinfo.js:23:3)
    at :program (test-performance-nodet`
example test: `test/parallel/test-performance-nodetiming-uvmetricsinfo.js`

### 1 × `AssertionError: undefined !== undefined at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: undefined !== undefined
    at :anonymous (test-fs-write.js:45:1)
    at :program (test-fs-write.js:1:1)`
example test: `test/parallel/test-fs-write.js`

### 1 × `AssertionError: undefined !== undefined at Function.notStrictEqual (native) at Domain.<anonymous> (<loc>) at Domain._return (<loc>) at EventEmitter.server (<loc`

distinct messages:
- `AssertionError: undefined !== undefined
    at Function.notStrictEqual (native)
    at Domain.<anonymous> (test-domain-http-server.js:57:12)
    at Domain._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.server (test-domain-http-server.js:51:7)
`
example test: `test/parallel/test-domain-http-server.js`

### 1 × `AssertionError: undefined == true at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: undefined == true
    at :anonymous (test-stream-duplex.js:33:1)
    at :program (test-stream-duplex.js:1:1)`
example test: `test/parallel/test-stream-duplex.js`

### 1 × `AssertionError: undefined == true at ok (native) at <loc> at Array.forEach (native) at Timeout.<anonymous> (<loc>) at Timeout._return (<loc>) at AssertionError.`

distinct messages:
- `AssertionError: undefined == true
    at ok (native)
    at test-timers.js:74:5
    at Array.forEach (native)
    at Timeout.<anonymous> (test-timers.js:73:10)
    at Timeout._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at AssertionError.get stack (native)`
example test: `test/parallel/test-timers.js`

### 1 × `AssertionError: undefined === { _handle: {}, _allowHalfOpen: true, _pauseOnConnect: false, listening: true, maxConnections: Infinity, … } at Function.strictEqua`

distinct messages:
- `AssertionError: undefined === { _handle: {}, _allowHalfOpen: true, _pauseOnConnect: false, listening: true, maxConnections: Infinity, … }
    at Function.strictEqual (native)
    at EventEmitter.onSocket (test-net-pingpong.js:39:12)
    at EventEmitter.onSocket (/work/.harness/work/node-api/node-api`
example test: `test/parallel/test-net-pingpong.js`

### 1 × `AssertionError: undefined === { _out: [[[<n>, <n>, <n>, <n>, <n>, …], undefined], [[<n>, <n>, <n>, <n>], {}]], _flushedToSocket: false, _headers: { host: [<str>`

distinct messages:
- `AssertionError: undefined === { _out: [[[67, 79, 78, 78, 69, …], undefined], [[72, 101, 97, 100], {}]], _flushedToSocket: false, _headers: { host: ['Host', 'localhost:34383'] }, _headerSent: true, _header: 'CONNECT google.com:443 HTTP/1.1
Host: localhost:34383
Connection: close

', … }
    at Fu`
example test: `test/parallel/test-http-connect.js`

### 1 × `AssertionError: undefined === { _out: [], _flushedToSocket: true, _headers: { host: [<str>, <str>] }, _headerSent: true, _header: <str>, … } at Function.strictE`

distinct messages:
- `AssertionError: undefined === { _out: [], _flushedToSocket: true, _headers: { host: ['Host', 'localhost:34841'] }, _headerSent: true, _header: 'GET / HTTP/1.1
Host: localhost:34841
Connection: keep-alive

', … }
    at Function.strictEqual (native)
    at Writable.<anonymous> (test-http-agent-re`
example test: `test/parallel/test-http-agent-remove.js`

### 1 × `AssertionError: undefined === { F_OK: <n>, R_OK: <n>, W_OK: <n>, X_OK: <n>, COPYFILE_EXCL: <n>, … } at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: undefined === { F_OK: 0, R_OK: 4, W_OK: 2, X_OK: 1, COPYFILE_EXCL: 1, … }
    at :anonymous (test-fs-promises-exists.js:9:1)
    at :program (test-fs-promises-exists.js:1:1)`
example test: `test/parallel/test-fs-promises-exists.js`

### 1 × `AssertionError: undefined === { members: [] } at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: undefined === { members: [] }
    at :anonymous (test-domain-add-remove.js:14:1)
    at :program (test-domain-add-remove.js:1:1)`
example test: `test/parallel/test-domain-add-remove.js`

### 1 × `AssertionError: undefined === {} at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: undefined === {}
    at :anonymous (test-messageport-hasref.js:19:1)
    at :program (test-messageport-hasref.js:1:1)`
example test: `test/parallel/test-messageport-hasref.js`

### 1 × `AssertionError: undefined === <n> at Function.strictEqual (native) at Object.<anonymous> (<loc>) at Object._return (<loc>) at Duplex.<anonymous> (<loc>) at Dupl`

distinct messages:
- `AssertionError: undefined === 5
    at Function.strictEqual (native)
    at Object.<anonymous> (test-net-keepalive-interval-count.js:23:20)
    at Object._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at Duplex.<anonymous> (test-net-keepalive-interval-count.j`
example test: `test/parallel/test-net-keepalive-interval-count.js`

### 1 × `AssertionError: undefined === <n> at Function.strictEqual (native) at Object.<anonymous> (<loc>) at Object.<anonymous> (<loc>) at Object._return (<loc>) at Obje`

distinct messages:
- `AssertionError: undefined === 512
    at Function.strictEqual (native)
    at Object.<anonymous> (test-dgram-connect-send-multi-buffer-copy.js:10:10)
    at Object.<anonymous> (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:538:17)
    at Object._return (/work/.harness/work/node-`
example test: `test/parallel/test-dgram-connect-send-multi-buffer-copy.js`

### 1 × `AssertionError: undefined === <n> at Function.strictEqual (native) at Object.onMessage (<loc>) at Object._return (<loc>) at AssertionError.get stack (native)`

distinct messages:
- `AssertionError: undefined === 512
    at Function.strictEqual (native)
    at Object.onMessage (test-dgram-send-multi-buffer-copy.js:10:10)
    at Object._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at AssertionError.get stack (native)`
example test: `test/parallel/test-dgram-send-multi-buffer-copy.js`

### 1 × `AssertionError: undefined === <n> at Function.strictEqual (native) at Timeout.<anonymous> (<loc>) at Timeout._return (<loc>) at AssertionError.get stack (native`

distinct messages:
- `AssertionError: undefined === 3
    at Function.strictEqual (native)
    at Timeout.<anonymous> (test-vm-context-async-script.js:33:10)
    at Timeout._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at AssertionError.get stack (native)`
example test: `test/parallel/test-vm-context-async-script.js`

### 1 × `AssertionError: undefined === <n> at Function.strictEqual (native) at Writable.<anonymous> (<loc>) at Writable._return (<loc>) at Writable.emit (native) at Asse`

distinct messages:
- `AssertionError: undefined === 1
    at Function.strictEqual (native)
    at Writable.<anonymous> (test-http-upgrade-agent.js:65:12)
    at Writable._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at Writable.emit (native)
    at AssertionError.get stack (nativ`
example test: `test/parallel/test-http-upgrade-agent.js`

### 1 × `AssertionError: undefined === <str> at :=> (<loc>) at _return (<loc>) at :=> (<loc>) at _return (<loc>)`

distinct messages:
- `AssertionError: undefined === 'ERR_STREAM_DESTROYED'
    at :=> (test-zlib-write-after-close.js:33:5)
    at _return (index.js:573:12)
    at :=> (test-zlib-write-after-close.js:32:3)
    at _return (index.js:573:12)`
example test: `test/parallel/test-zlib-write-after-close.js`

### 1 × `AssertionError: undefined === <str> at :=> (<loc>) at _return (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: undefined === 'ERR_STREAM_DESTROYED'
    at :=> (test-http-outgoing-destroy.js:14:5)
    at _return (index.js:573:12)
    at :anonymous (test-http-outgoing-destroy.js:13:3)
    at :program (test-http-outgoing-destroy.js:1:1)`
example test: `test/parallel/test-http-outgoing-destroy.js`

### 1 × `AssertionError: undefined === <str> at checkSourceMapUrl (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: undefined === 'sourcemap.json'
    at checkSourceMapUrl (test-vm-source-map-url.js:9:3)
    at :anonymous (test-vm-source-map-url.js:24:1)
    at :program (test-vm-source-map-url.js:1:1)`
example test: `test/parallel/test-vm-source-map-url.js`

### 1 × `AssertionError: undefined === <str> at Function.strictEqual (native) at Writable.<anonymous> (<loc>) at Writable._return (<loc>) at Writable.emit (native) at Du`

distinct messages:
- `AssertionError: undefined === 'first'
    at Function.strictEqual (native)
    at Writable.<anonymous> (test-async-local-storage-http-agent.js:39:14)
    at Writable._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at Writable.emit (native)
    at Duplex.push (`
example test: `test/parallel/test-async-local-storage-http-agent.js`

### 1 × `AssertionError: undefined === <str> at onWrite (<loc>)`

distinct messages:
- `AssertionError: undefined === 'ERR_STREAM_DESTROYED'
    at onWrite (test-stream-write-destroy.js:28:9)`
example test: `test/parallel/test-stream-write-destroy.js`

### 1 × `AssertionError: undefined === false at Function.strictEqual (native) at <loc> at _return (<loc>) at AssertionError.get stack (native) AssertionError: Missing ex`

distinct messages:
- `AssertionError: undefined === false
    at Function.strictEqual (native)
    at test-fs-write-stream-autoclose-option.js:16:12
    at _return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at AssertionError.get stack (native)
AssertionError: Missing expected exceptio`
example test: `test/parallel/test-fs-write-stream-autoclose-option.js`

### 1 × `AssertionError: undefined === false at Function.strictEqual (native) at EventEmitter.<anonymous> (<loc>) at EventEmitter._return (<loc>) at EventEmitter.emit (n`

distinct messages:
- `AssertionError: undefined === false
    at Function.strictEqual (native)
    at EventEmitter.<anonymous> (test-net-allow-half-open.js:12:12)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)
    at AssertionError`
example test: `test/parallel/test-net-allow-half-open.js`

### 1 × `AssertionError: undefined === null at :anonymous (<loc>) at _return (<loc>)`

distinct messages:
- `AssertionError: undefined === null
    at :anonymous (test-stream2-writable.js:223:5)
    at _return (index.js:573:12)`
example test: `test/parallel/test-stream2-writable.js`

### 1 × `AssertionError: undefined === null at Function.strictEqual (native) at <loc> at _return (<loc>) at AssertionError.get stack (native)`

distinct messages:
- `AssertionError: undefined === null
    at Function.strictEqual (native)
    at test-http-agent-free-socket-data-guard.js:50:14
    at _return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at AssertionError.get stack (native)`
example test: `test/parallel/test-http-agent-free-socket-data-guard.js`

### 1 × `AssertionError: undefined === null at Function.strictEqual (native) at EventEmitter.<anonymous> (<loc>) at EventEmitter._return (<loc>) at EventEmitter.emit (na`

distinct messages:
- `AssertionError: undefined === null
    at Function.strictEqual (native)
    at EventEmitter.<anonymous> (test-http-parser-freed-before-upgrade.js:10:10)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)
    at Du`
example test: `test/parallel/test-http-parser-freed-before-upgrade.js`

### 1 × `AssertionError: undefined deepStrictEqual [<n>, <n>, <n>, <n>] at testFromSyncSAB (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: undefined deepStrictEqual [10, 20, 30, 40]
    at testFromSyncSAB (test-stream-iter-sharedarraybuffer.js:33:3)
    at :anonymous (test-stream-iter-sharedarraybuffer.js:182:3)
    at :program (test-stream-iter-sharedarraybuffer.js:1:1)`
example test: `test/parallel/test-stream-iter-sharedarraybuffer.js`

### 1 × `AssertionError: undefined deepStrictEqual { foo: <str> } at Function.deepStrictEqual (native) at checkEnd (<loc>) at checkEnd (<loc>) at <loc> at <loc> Assertio`

distinct messages:
- `AssertionError: undefined deepStrictEqual { foo: 'bar' }
    at Function.deepStrictEqual (native)
    at checkEnd (test-diagnostics-channel-tracing-channel-promise-non-thenable.js:20:10)
    at checkEnd (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at test-diagnosti`
example test: `test/parallel/test-diagnostics-channel-tracing-channel-promise-non-thenable.js`

### 1 × `AssertionError: undefined deepStrictEqual { traceId: <str> } at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: undefined deepStrictEqual { traceId: 'xyz789' }
    at :anonymous (test-diagnostics-channel-bounded-channel-scope.js:135:3)
    at :program (test-diagnostics-channel-bounded-channel-scope.js:1:1)`
example test: `test/parallel/test-diagnostics-channel-bounded-channel-scope.js`

### 1 × `AssertionError: undefined deepStrictEqual {} at Function.deepStrictEqual (native) at <loc> at AssertionError.get stack (native) AssertionError: undefined deepSt`

distinct messages:
- `AssertionError: undefined deepStrictEqual {}
    at Function.deepStrictEqual (native)
    at test-next-tick.js:50:10
    at AssertionError.get stack (native)
AssertionError: undefined deepStrictEqual {}
    at Function.deepStrictEqual (native)
    at test-next-tick.js:58:10
    at AssertionError.get`
example test: `test/parallel/test-next-tick.js`

### 1 × `AssertionError: Unexpected stack shape (domain._stack = undefined) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Unexpected stack shape (domain._stack = undefined)
    at :anonymous (test-domain-safe-exit.js:35:1)
    at :program (test-domain-safe-exit.js:1:1)`
example test: `test/parallel/test-domain-safe-exit.js`

### 1 × `AssertionError: unexpectedly got response from server at Function.fail (native) at Writable.<anonymous> (<loc>) at Writable.emit (native) at Duplex.push (native`

distinct messages:
- `AssertionError: unexpectedly got response from server
    at Function.fail (native)
    at Writable.<anonymous> (test-http-localaddress-bind-error.js:47:12)
    at Writable.emit (native)
    at Duplex.push (native)`
example test: `test/parallel/test-http-localaddress-bind-error.js`

### 1 × `AssertionError: userInfo crashes at ok (native) at <loc> at _return (<loc>) at EventEmitter.emit (native) at AssertionError.get stack (native)`

distinct messages:
- `AssertionError: userInfo crashes
    at ok (native)
    at test-os-userinfo-handles-getter-errors.js:17:3
    at _return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)
    at AssertionError.get stack (native)`
example test: `test/parallel/test-os-userinfo-handles-getter-errors.js`

### 1 × `AssertionError: wrong exit for <n>-changeCodeInsideExit expected:<n> but got:<n> at Function.strictEqual (native) at EventEmitter.<anonymous> (<loc>) at EventEm`

distinct messages:
- `AssertionError: wrong exit for 4-changeCodeInsideExit
expected:99 but got:95
    at Function.strictEqual (native)
    at EventEmitter.<anonymous> (test-process-exit-code.js:50:14)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmit`
example test: `test/parallel/test-process-exit-code.js`

### 1 × `AssertionError: zlib.constants.Z_OK should be immutable at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: zlib.constants.Z_OK should be immutable
    at :anonymous (test-zlib-const.js:13:1)
    at :program (test-zlib-const.js:1:1)`
example test: `test/parallel/test-zlib-const.js`

### 1 × `Client sending request... Server sending informational message #<n>... TypeError: res.writeInformation is not a function at EventEmitter.<anonymous> (<loc>) at `

distinct messages:
- `Client sending request...
Server sending informational message #1...
TypeError: res.writeInformation is not a function
    at EventEmitter.<anonymous> (test-http-information-headers.js:12:7)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    a`
example test: `test/parallel/test-http-information-headers.js`

### 1 × `com.oracle.truffle.api.dsl.UnsupportedSpecializationException: Unexpected values provided for JSToObjectNodeGen.Uncached@7169534b: [[B@34a52f2e], [byte[]] at :=`

distinct messages:
- `com.oracle.truffle.api.dsl.UnsupportedSpecializationException: Unexpected values provided for JSToObjectNodeGen.Uncached@7169534b: [[B@34a52f2e], [byte[]]
    at :=> (native)
    at _return (index.js:573:12)`
example test: `test/parallel/test-stream-readable-unshift.js`

### 1 × `com.oracle.truffle.api.dsl.UnsupportedSpecializationException: Unexpected values provided for JSToObjectNodeGen.Uncached@7169534b: [dev.elide.lang.javascript.no`

distinct messages:
- `com.oracle.truffle.api.dsl.UnsupportedSpecializationException: Unexpected values provided for JSToObjectNodeGen.Uncached@7169534b: [dev.elide.lang.javascript.node.events.JSEventEmitter$BorrowedEmitterState@55d83c2], [BorrowedEmitterState]
    at :anonymous (native)
    at :program (test-fs-stream-co`
example test: `test/parallel/test-fs-stream-construct-compat-old-node.js`

### 1 × `Could not allocate an unaligned heap chunk because the heap address space is exhausted. Consider re-building the image with compressed references disabled (<str`

distinct messages:
- `Could not allocate an unaligned heap chunk because the heap address space is exhausted. Consider re-building the image with compressed references disabled ('-H:-UseCompressedReferences').
Unhandled exception: java.lang.OutOfMemoryError: Could not allocate an aligned heap chunk because the heap addre`
example test: `test/parallel/test-http-pipeline-flood.js`

### 1 × `Error at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `Error
    at :anonymous (test-events-uncaught-exception-stack.js:16:1)
    at :program (test-events-uncaught-exception-stack.js:1:1)`
example test: `test/parallel/test-events-uncaught-exception-stack.js`

### 1 × `Error at Process.<anonymous> (<loc>) at Process._return (<loc>)`

distinct messages:
- `Error
    at Process.<anonymous> (test-process-beforeexit-throw-exit.js:15:9)
    at Process._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)`
example test: `test/parallel/test-process-beforeexit-throw-exit.js`

### 1 × `Error: _write() not implemented`

distinct messages:
- `Error: _write() not implemented`
example test: `test/parallel/test-stream2-objects.js`

### 1 × `Error: boom at :anonymous (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `Error: boom
    at :anonymous (test-domain-stack-empty-in-process-uncaughtexception.js:24:9)
    at :anonymous (test-domain-stack-empty-in-process-uncaughtexception.js:23:1)
    at :program (test-domain-stack-empty-in-process-uncaughtexception.js:1:1)`
example test: `test/parallel/test-domain-stack-empty-in-process-uncaughtexception.js`

### 1 × `Error: died at :anonymous (<loc>) at :anonymous (<loc>) at :anonymous (<loc>) at :anonymous (<loc>) at :anonymous (<loc>) at :program (<loc>) TypeError: Cannot `

distinct messages:
- `Error: died
    at :anonymous (test-domain-nested.js:39:15)
    at :anonymous (test-domain-nested.js:36:7)
    at :anonymous (test-domain-nested.js:35:5)
    at :anonymous (test-domain-nested.js:34:3)
    at :anonymous (test-domain-nested.js:33:1)
    at :program (test-domain-nested.js:1:1)
TypeErro`
example test: `test/parallel/test-domain-nested.js`

### 1 × `Error: EACCES, spawn <str>`

distinct messages:
- `Error: EACCES, spawn '/work/.harness/work/node-api/node-test/.tmp.183/node-copy.exe'`
example test: `test/parallel/test-child-process-fork-exec-path.js`

### 1 × `Error: ECONNREFUSED: connection refused, tcp-connect <str> (errno=<n>) AssertionError: createConnectionWithCb() at syncFailToConnect (<loc>) at :anonymous (<loc`

distinct messages:
- `Error: ECONNREFUSED: connection refused, tcp-connect '0:0:0:0:0:0:0:1:0' (errno=111)
AssertionError: createConnectionWithCb()
    at syncFailToConnect (test-net-connect-options-port.js:142:7)
    at :anonymous (test-net-connect-options-port.js:49:3)
    at :program (test-net-connect-options-port.js:`
example test: `test/parallel/test-net-connect-options-port.js`

### 1 × `Error: ECONNREFUSED: connection refused, tcp-connect <str> (errno=<n>) AssertionError: http request should throw when passing invalid insecureHTTPParser at :ano`

distinct messages:
- `Error: ECONNREFUSED: connection refused, tcp-connect '0:0:0:0:0:0:0:1:80' (errno=111)
AssertionError: http request should throw when passing invalid insecureHTTPParser
    at :anonymous (test-http-client-insecure-http-parser-error.js:8:3)
    at :program (test-http-client-insecure-http-parser-error.`
example test: `test/parallel/test-http-client-insecure-http-parser-error.js`

### 1 × `Error: EINVAL: invalid argument, truncate <str> at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `Error: EINVAL: invalid argument, truncate '/work/.harness/work/node-api/node-test/.tmp.991/truncate-file-1.txt'
    at :anonymous (test-fs-truncate.js:281:3)
    at :program (test-fs-truncate.js:1:1)`
example test: `test/parallel/test-fs-truncate.js`

### 1 × `Error: EIO, spawn <str> AssertionError: Missing expected exception. at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `Error: EIO, spawn 'echo'
AssertionError: Missing expected exception.
    at :anonymous (test-child-process-uid-gid.js:11:3)
    at :program (test-child-process-uid-gid.js:1:1)`
example test: `test/parallel/test-child-process-uid-gid.js`

### 1 × `Error: EIO: i/o error, write at :anonymous (<loc>) at :program (<loc>) AssertionError: false == true at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `Error: EIO: i/o error, write
    at :anonymous (test-fs-write-sigxfsz.js:20:3)
    at :program (test-fs-write-sigxfsz.js:1:1)

AssertionError: false == true
    at :anonymous (test-fs-write-sigxfsz.js:28:3)
    at :program (test-fs-write-sigxfsz.js:1:1)`
example test: `test/parallel/test-fs-write-sigxfsz.js`

### 1 × `Error: ENOENT, spawn <str> AssertionError: Missing expected exception. at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `Error: ENOENT, spawn ''
AssertionError: Missing expected exception.
    at :anonymous (test-child-process-spawn-typeerror.js:55:1)
    at :program (test-child-process-spawn-typeerror.js:1:1)`
example test: `test/parallel/test-child-process-spawn-typeerror.js`

### 1 × `Error: ENOENT, spawn <str> AssertionError: null === { _read: {} } at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `Error: ENOENT, spawn 'foo123'
AssertionError: null === { _read: {} }
    at :anonymous (test-child-process-spawn-error.js:41:1)
    at :program (test-child-process-spawn-error.js:1:1)`
example test: `test/parallel/test-child-process-spawn-error.js`

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

### 1 × `Error: EPIPE: broken pipe, tcp-write <str> (errno=<n>)`

distinct messages:
- `Error: EPIPE: broken pipe, tcp-write '2' (errno=32)`
example test: `test/parallel/test-http-keep-alive-pipeline-max-requests.js`

### 1 × `Error: Error`

distinct messages:
- `Error: Error`
example test: `test/parallel/test-worker-exit-from-uncaught-exception.js`

### 1 × `Error: Error from domain at :=> (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `Error: Error from domain
    at :=> (test-domain-top-level-error-handler-clears-stack.js:30:9)
    at :anonymous (test-domain-top-level-error-handler-clears-stack.js:29:1)
    at :program (test-domain-top-level-error-handler-clears-stack.js:1:1)`
example test: `test/parallel/test-domain-top-level-error-handler-clears-stack.js`

### 1 × `Error: error from foo at foo (<loc>) Error: error from foo at foo (<loc>) Error: error from foo at foo (<loc>) Error: error from foo at foo (<loc>) Error: error`

distinct messages:
- `Error: error from foo
    at foo (test-domain-stack.js:39:9)
Error: error from foo
    at foo (test-domain-stack.js:39:9)
Error: error from foo
    at foo (test-domain-stack.js:39:9)
Error: error from foo
    at foo (test-domain-stack.js:39:9)
Error: error from foo
    at foo (test-domain-stack.js:3`
example test: `test/parallel/test-domain-stack.js`

### 1 × `Error: Error: uncaught`

distinct messages:
- `Error: Error: uncaught`
example test: `test/parallel/test-worker-nested-uncaught.js`

### 1 × `Error: Expected ERR_IP_BLOCKED but got ECONNREFUSED at Writable.<anonymous> (<loc>) at Writable._return (<loc>) at Writable.emit (native) at Duplex.destroy (nat`

distinct messages:
- `Error: Expected ERR_IP_BLOCKED but got ECONNREFUSED
    at Writable.<anonymous> (test-http-request-lookup-error-catchable.js:43:11)
    at Writable._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at Writable.emit (native)
    at Duplex.destroy (native)`
example test: `test/parallel/test-http-request-lookup-error-catchable.js`

### 1 × `Error: FAIL at Timeout.<anonymous> (<loc>)`

distinct messages:
- `Error: FAIL
    at Timeout.<anonymous> (test-domain-timers-uncaught-exception.js:13:28)`
example test: `test/parallel/test-domain-timers-uncaught-exception.js`

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

### 1 × `Error: foo at Immediate.<anonymous> (<loc>)`

distinct messages:
- `Error: foo
    at Immediate.<anonymous> (test-worker-uncaught-exception-async.js:34:11)`
example test: `test/parallel/test-worker-uncaught-exception-async.js`

### 1 × `Error: foobar at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `Error: foobar
    at :anonymous (test-domain-ee.js:20:1)
    at :program (test-domain-ee.js:1:1)`
example test: `test/parallel/test-domain-ee.js`

### 1 × `Error: foobar at <loc> at _return (<loc>)`

distinct messages:
- `Error: foobar
    at test-domain-nexttick.js:19:11
    at _return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)`
example test: `test/parallel/test-domain-nexttick.js`

### 1 × `Error: foobar at Timeout.<anonymous> (<loc>)`

distinct messages:
- `Error: foobar
    at Timeout.<anonymous> (test-domain-bind-timeout.js:17:33)`
example test: `test/parallel/test-domain-bind-timeout.js`

### 1 × `Error: foobar at Timeout.<anonymous> (<loc>) at Timeout._return (<loc>)`

distinct messages:
- `Error: foobar
    at Timeout.<anonymous> (test-domain-timer.js:21:11)
    at Timeout._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)`
example test: `test/parallel/test-domain-timer.js`

### 1 × `Error: handled by domain1 at throw1 (<loc>) at :anonymous (<loc>) at inner (<loc>) at :anonymous (<loc>) at outer (<loc>) at :anonymous (<loc>) at :program (<lo`

distinct messages:
- `Error: handled by domain1
    at throw1 (test-domain-nested-throw.js:51:9)
    at :anonymous (test-domain-nested-throw.js:72:5)
    at inner (test-domain-nested-throw.js:71:3)
    at :anonymous (test-domain-nested-throw.js:88:5)
    at outer (test-domain-nested-throw.js:87:3)
    at :anonymous (test`
example test: `test/parallel/test-domain-nested-throw.js`

### 1 × `Error: Immediate Error at Immediate.<anonymous> (<loc>) Error: Timeout UNREFd at Timeout.<anonymous> (<loc>) Error: Timeout UNREFd at Timeout.t (<loc>)`

distinct messages:
- `Error: Immediate Error
    at Immediate.<anonymous> (test-domain-timers.js:54:11)
Error: Timeout UNREFd
    at Timeout.<anonymous> (test-domain-timers.js:36:11)
Error: Timeout UNREFd
    at Timeout.t (test-domain-timers.js:41:11)`
example test: `test/parallel/test-domain-timers.js`

### 1 × `Error: Invalid header line`

distinct messages:
- `Error: Invalid header line`
example test: `test/parallel/test-http-multi-line-headers.js`

### 1 × `Error: Listen method has been called more than once without closing.`

distinct messages:
- `Error: Listen method has been called more than once without closing.`
example test: `test/parallel/test-http-agent.js`

### 1 × `Error: Listen method has been called more than once without closing. at EventEmitter.<anonymous> (<loc>) at EventEmitter._return (<loc>) at EventEmitter.emit (n`

distinct messages:
- `Error: Listen method has been called more than once without closing.
    at EventEmitter.<anonymous> (test-net-server-call-listen-multiple-times.js:45:12)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)`
example test: `test/parallel/test-net-server-call-listen-multiple-times.js`

### 1 × `Error: node:worker_threads: moveMessagePortToContext is not implemented yet in Elide at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `Error: node:worker_threads: moveMessagePortToContext is not implemented yet in Elide
    at :anonymous (test-worker-message-port-move.js:12:16)
    at :program (test-worker-message-port-move.js:1:1)`
example test: `test/parallel/test-worker-message-port-move.js`

### 1 × `Error: oops at :=> (<loc>) at :=> (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `Error: oops
    at :=> (test-domain-thrown-error-handler-stack.js:42:11)
    at :=> (test-domain-thrown-error-handler-stack.js:41:3)
    at :anonymous (test-domain-thrown-error-handler-stack.js:40:1)
    at :program (test-domain-thrown-error-handler-stack.js:1:1)`
example test: `test/parallel/test-domain-thrown-error-handler-stack.js`

### 1 × `Error: original error at :=> (<loc>) at :=> (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `Error: original error
    at :=> (test-domain-error-handler-throw-no-recursion.js:43:5)
    at :=> (test-domain-error-handler-throw-no-recursion.js:33:3)
    at :anonymous (test-domain-error-handler-throw-no-recursion.js:32:1)
    at :program (test-domain-error-handler-throw-no-recursion.js:1:1)`
example test: `test/parallel/test-domain-error-handler-throw-no-recursion.js`

### 1 × `Error: process.stdout construction failed: TypeError: <this>.buf.subarray is not a function at Process.get stdout (native) at Object.log (native) at Writable.<a`

distinct messages:
- `Error: process.stdout construction failed: TypeError: <this>.buf.subarray is not a function
    at Process.get stdout (native)
    at Object.log (native)
    at Writable.<anonymous> (test-http-client-read-in-error.js:39:11)
    at Writable.emit (native)
    at Duplex.emit (native)
    at EventEmitte`
example test: `test/parallel/test-http-client-read-in-error.js`

### 1 × `Error: setImmediate Err at Immediate.<anonymous> (<loc>)`

distinct messages:
- `Error: setImmediate Err
    at Immediate.<anonymous> (test-timers-immediate-queue-throw.js:53:9)`
example test: `test/parallel/test-timers-immediate-queue-throw.js`

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

### 1 × `Error: Socket is closed Error: Socket is closed`

distinct messages:
- `Error: Socket is closed
Error: Socket is closed`
example test: `test/parallel/test-http-autoselectfamily.js`

### 1 × `Error: Socket is closed Error: Socket is closed AssertionError: undefined deepStrictEqual [<str>, <str>] at Function.deepStrictEqual (native) at Duplex.<anonymo`

distinct messages:
- `Error: Socket is closed
Error: Socket is closed
AssertionError: undefined deepStrictEqual ['::1:10', '127.0.0.1:10']
    at Function.deepStrictEqual (native)
    at Duplex.<anonymous> (test-net-autoselectfamily.js:172:12)
    at Duplex._return (/work/.harness/work/node-api/node-api-overlay/test/comm`
example test: `test/parallel/test-net-autoselectfamily.js`

### 1 × `Error: something went wrong at transform (<loc>)`

distinct messages:
- `Error: something went wrong
    at transform (test-stream-pipe-objectmode-to-non-objectmode.js:40:13)`
example test: `test/parallel/test-stream-pipe-objectmode-to-non-objectmode.js`

### 1 × `Error: this kills domain B, not A at <loc>`

distinct messages:
- `Error: this kills domain B, not A
    at test-domain-multi.js:61:11`
example test: `test/parallel/test-domain-multi.js`

### 1 × `Error: this should never be executed at EventEmitter.<anonymous> (<loc>) at EventEmitter.emit (native) at Duplex.push (native) AssertionError: <n> === <n> at Fu`

distinct messages:
- `Error: this should never be executed
    at EventEmitter.<anonymous> (test-http-expect-handling.js:13:9)
    at EventEmitter.emit (native)
    at Duplex.push (native)
AssertionError: 0 === 2
    at Function.strictEqual (native)
    at Process.<anonymous> (test-http-expect-handling.js:54:10)
    at A`
example test: `test/parallel/test-http-expect-handling.js`

### 1 × `error: unexpected argument <str> found tip: to pass <str> as a value, use <str> Usage: elide [OPTIONS] [FILE] [-- <SCRIPT_ARGS>...] [COMMAND] For more informati`

distinct messages:
- `error: unexpected argument '--expose-internals' found

  tip: to pass '--expose-internals' as a value, use '-- --expose-internals'

Usage: elide [OPTIONS] [FILE] [-- <SCRIPT_ARGS>...] [COMMAND]

For more information, try '--help'.
TypeError: Cannot read property 'close' of null
    at EventEmitter.<`
example test: `test/parallel/test-child-process-recv-handle.js`

### 1 × `fhqwhgads`

distinct messages:
- `fhqwhgads`
example test: `test/parallel/test-console-stdio-setters.js`

### 1 × `first write first cb second write second cb error handler AssertionError: undefined === null at Function.strictEqual (native) at Writable.<anonymous> (<loc>) at`

distinct messages:
- `first write
first cb
second write
second cb
error handler
AssertionError: undefined === null
    at Function.strictEqual (native)
    at Writable.<anonymous> (test-fs-write-stream-err.js:66:10)
    at Writable._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at`
example test: `test/parallel/test-fs-write-stream-err.js`

### 1 × `foo foo bar foo bar hop {slashes: <str>} {foo: <str>, Symbol(nodejs.util.inspect.custom): () => <str>} foo foo bar foo bar hop {slashes: <str>} {foo: <str>, Sym`

distinct messages:
- `foo
foo bar
foo bar hop
{slashes: "\\\\"}
{foo: "bar", Symbol(nodejs.util.inspect.custom): () => 'inspect'}
foo
foo bar
foo bar hop
{slashes: "\\\\"}
{foo: "bar", Symbol(nodejs.util.inspect.custom): () => 'inspect'}
Trace: This is a %j %d [object Object] 10 foo
    at test-console.js:1:1
TypeError: `
example test: `test/parallel/test-console.js`

### 1 × `In URL: Setting <https://github.com/>.username = <str> Unpaired low surrogate <n>: AssertionError: <str> === <str> at :anonymous (<loc>) at test (<loc>) at :ano`

distinct messages:
- `In URL: Setting <https://github.com/>.username = "?" Unpaired low surrogate 1:
AssertionError: 'https://%3F@github.com/' === 'https://%EF%BF%BD@github.com/'
    at :anonymous (test-whatwg-url-custom-setters.js:35:11)
    at test (wpt.js:158:7)
    at :anonymous (test-whatwg-url-custom-setters.js:31:`
example test: `test/parallel/test-whatwg-url-custom-setters.js`

### 1 × `java.lang.IllegalArgumentException: Last unit does not have enough valid bits at produce (<loc>) at testProduceConsume (<loc>) at :anonymous (<loc>) at :program`

distinct messages:
- `java.lang.IllegalArgumentException: Last unit does not have enough valid bits
    at produce (test-vm-cached-data.js:35:10)
    at testProduceConsume (test-vm-cached-data.js:41:16)
    at :anonymous (test-vm-cached-data.js:52:1)
    at :program (test-vm-cached-data.js:1:1)`
example test: `test/parallel/test-vm-cached-data.js`

### 1 × `java.lang.IllegalArgumentException: Unknown language or instrument id dev.elide.runtime, known ids: DAPOutputProviderInstrument, OutputProviderInstrument, TypeP`

distinct messages:
- `java.lang.IllegalArgumentException: Unknown language or instrument id dev.elide.runtime, known ids: DAPOutputProviderInstrument, OutputProviderInstrument, TypeProfileInstrument, agentscript, coverage, cpusampler, cputracer, dap, debugger, elide-watch, engine, graal, heapmonitor, insight, inspect, in`
example test: `test/parallel/test-performance-measure-detail.js`

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

### 1 × `Mismatched <anonymous> function calls. Expected exactly <n>, actual <n>. at mustCall (<loc>) at Proxy.expectsError (<loc>) at <loc> at <loc>`

distinct messages:
- `Mismatched <anonymous> function calls. Expected exactly 1, actual 0.
    at mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at Proxy.expectsError (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:796:10)
    at test-stream-transform-callback`
example test: `test/parallel/test-stream-transform-callback-twice.js`

### 1 × `Mismatched <anonymous> function calls. Expected exactly <n>, actual <n>. at mustCall (<loc>) at Proxy.expectsError (<loc>) at <loc> at <loc> Mismatched noop fun`

distinct messages:
- `Mismatched <anonymous> function calls. Expected exactly 1, actual 0.
    at mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at Proxy.expectsError (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:796:10)
    at test-stream-readable-with-unim`
example test: `test/parallel/test-stream-readable-with-unimplemented-_read.js`

### 1 × `Mismatched <anonymous> function calls. Expected exactly <n>, actual <n>. at mustCall (<loc>) at Proxy.expectsError (<loc>) at EventEmitter.<anonymous> (<loc>) a`

distinct messages:
- `Mismatched <anonymous> function calls. Expected exactly 1, actual 0.
    at mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at Proxy.expectsError (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:796:10)
    at EventEmitter.<anonymous> (test`
example test: `test/parallel/test-net-write-cb-on-destroy-before-connect.js`

### 1 × `Mismatched <anonymous> function calls. Expected exactly <n>, actual <n>. at mustCall (<loc>) at Proxy.expectsError (<loc>) at testPushArg (<loc>) at <loc> at <l`

distinct messages:
- `Mismatched <anonymous> function calls. Expected exactly 1, actual 0.
    at mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at Proxy.expectsError (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:796:10)
    at testPushArg (test-stream-reada`
example test: `test/parallel/test-stream-readable-invalid-chunk.js`

### 1 × `Mismatched <anonymous> function calls. Expected exactly <n>, actual <n>. at mustCall (<loc>) at Proxy.expectsError (<loc>) at Writable.<anonymous> (<loc>) at Wr`

distinct messages:
- `Mismatched <anonymous> function calls. Expected exactly 1, actual 0.
    at mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at Proxy.expectsError (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:796:10)
    at Writable.<anonymous> (test-htt`
example test: `test/parallel/test-http-client-spurious-aborted.js`

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

### 1 × `Mismatched <anonymous> function calls. Expected exactly <n>, actual <n>. at Proxy.mustCall (<loc>) at Duplex.<anonymous> (<loc>) at Duplex._return (<loc>) at Du`

distinct messages:
- `Mismatched <anonymous> function calls. Expected exactly 1, actual 0.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at Duplex.<anonymous> (test-http-server-close-idle.js:48:27)
    at Duplex._return (/work/.harness/work/node-api/node-api-overlay`
example test: `test/parallel/test-http-server-close-idle.js`

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

### 1 × `Mismatched <anonymous> function calls. Expected exactly <n>, actual <n>. at Proxy.mustCall (<loc>) at track (<loc>) at <loc> at <loc> Mismatched <anonymous> fun`

distinct messages:
- `Mismatched <anonymous> function calls. Expected exactly 1, actual 0.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at track (test-diagnostics-channel-module-import-error.js:12:17)
    at test-diagnostics-channel-module-import-error.js:24:26
   `
example test: `test/parallel/test-diagnostics-channel-module-import-error.js`

### 1 × `Mismatched <anonymous> function calls. Expected exactly <n>, actual <n>. at Proxy.mustCall (<loc>) at Writable.<anonymous> (<loc>) at Writable._return (<loc>) M`

distinct messages:
- `Mismatched <anonymous> function calls. Expected exactly 1, actual 0.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at Writable.<anonymous> (test-fs-write-stream-double-close.js:27:20)
    at Writable._return (/work/.harness/work/node-api/node-a`
example test: `test/parallel/test-fs-write-stream-double-close.js`

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

### 1 × `Mismatched pause function calls. Expected exactly <n>, actual <n>. at Proxy.mustCall (<loc>) at <loc> at <loc>`

distinct messages:
- `Mismatched pause function calls. Expected exactly 1, actual 0.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at test-tty-stdin-pipe.js:34:19
    at test-tty-stdin-pipe.js:1:1`
example test: `test/parallel/test-tty-stdin-pipe.js`

### 1 × `Mismatched requestCallback function calls. Expected exactly <n>, actual <n>. at Proxy.mustCall (<loc>) at <loc> at <loc>`

distinct messages:
- `Mismatched requestCallback function calls. Expected exactly 1, actual 0.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at test-http-client-readable.js:62:11
    at test-http-client-readable.js:1:1`
example test: `test/parallel/test-http-client-readable.js`

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

### 1 × `More of level <n> AssertionError: <str> === <str> at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `More of level 3
AssertionError: 'This is the outer level  Level 2  Level 3 Back to level 2 Back to the outer level Still at the outer level ' === 'This is the outer level   Level 2     Level 3   Back to level 2 Back to the outer level Still at the outer level '
    at :anonymous (test-console-group.`
example test: `test/parallel/test-console-group.js`

### 1 × `null at write (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `null
    at write (test-console-log-throw-primitive.js:8:5)
    at :anonymous (test-console-log-throw-primitive.js:14:1)
    at :program (test-console-log-throw-primitive.js:1:1)`
example test: `test/parallel/test-console-log-throw-primitive.js`

### 1 × `push #<n> >> readable > read(<n>) push #<n> < undefined (<n> remain) << after read() undefined true <n> push #<n> >> readable > read(<n>) < undefined (<n> remai`

distinct messages:
- `push #1
>> readable
  > read(100)
   push #2
  < undefined (40 remain)
<< after read() undefined true 40
   push #3
>> readable
  > read(100)
  < undefined (60 remain)
<< after read() undefined false 60
>> readable
  > read(100)
  < undefined (60 remain)
<< after read() undefined false 60
   push #4`
example test: `test/parallel/test-stream2-large-read-stall.js`

### 1 × `RangeError: Maximum call stack size exceeded at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `RangeError: Maximum call stack size exceeded
    at :anonymous (test-util-inspect-long-running.js:20:1)
    at :program (test-util-inspect-long-running.js:1:1)`
example test: `test/parallel/test-util-inspect-long-running.js`

### 1 × `RangeError: The value of <str> is out of range. It must be >= <n> && <= <n>. Received <n> at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `RangeError: The value of "flags" is out of range. It must be >= 0 && <= 4294967295. Received 4294967296
    at :anonymous (test-file-validate-mode-flag.js:34:16)
    at :program (test-file-validate-mode-flag.js:1:1)`
example test: `test/parallel/test-file-validate-mode-flag.js`

### 1 × `RangeError: The value of <str> is out of range. It must be >= <n> and <= <n>. Received <n> at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `RangeError: The value of "targetStart" is out of range. It must be >= 0 and <= 10. Received 255
    at :anonymous (test-buffer-compare-offset.js:70:20)
    at :program (test-buffer-compare-offset.js:1:1)`
example test: `test/parallel/test-buffer-compare-offset.js`

### 1 × `readable <n>`

distinct messages:
- `readable 16384`
example test: `test/parallel/test-stream2-read-sync-stack.js`

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

### 1 × `ReferenceError: err3 is not defined at Domain.err2 (<loc>) at Timeout.err (<loc>) at ReferenceError.get stack (native)`

distinct messages:
- `ReferenceError: err3 is not defined
    at Domain.err2 (test-timers-reset-process-domain-on-throw.js:25:5)
    at Timeout.err (test-timers-reset-process-domain-on-throw.js:21:5)
    at ReferenceError.get stack (native)`
example test: `test/parallel/test-timers-reset-process-domain-on-throw.js`

### 1 × `ReferenceError: reader is not defined at :=> (<loc>) at _return (<loc>)`

distinct messages:
- `ReferenceError: reader is not defined
    at :=> (test-stream-readable-to-web-termination-byob.js:9:39)
    at _return (index.js:573:12)`
example test: `test/parallel/test-stream-readable-to-web-termination-byob.js`

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

### 1 × `SERVER: got connection connection closed AssertionError: {} === null at Function.strictEqual (native) at Duplex.<anonymous> (<loc>) at Duplex._return (<loc>)`

distinct messages:
- `SERVER: got connection
connection closed
AssertionError: {} === null
    at Function.strictEqual (native)
    at Duplex.<anonymous> (test-net-after-close.js:37:12)
    at Duplex._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)`
example test: `test/parallel/test-net-after-close.js`

### 1 × `string {key: /value/} (<n>)[<n>, <n>, <n>] string {key: /value/} (<n>)[<n>, <n>, <n>] AssertionError: false == true at Function.ok (native) at <loc> at _return `

distinct messages:
- `string {key: /value/} (3)[1, 2, 3]
string {key: /value/} (3)[1, 2, 3]
AssertionError: false == true
    at Function.ok (native)
    at test-console-diagnostics-channels.js:69:12
    at _return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at Writable.write (/work/.h`
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

### 1 × `SyntaxError: Unexpected end of JSON input at JSON.parse (native) at Readable.<anonymous> (<loc>) at Readable._return (<loc>) at SyntaxError.get stack (native) T`

distinct messages:
- `SyntaxError: Unexpected end of JSON input
    at JSON.parse (native)
    at Readable.<anonymous> (test-process-exec-argv.js:61:37)
    at Readable._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at SyntaxError.get stack (native)
TypeError: Cannot read property`
example test: `test/parallel/test-process-exec-argv.js`

### 1 × `SyntaxError: Unexpected token H in JSON at position <n> at JSON.parse (native) at Readable.<anonymous> (<loc>) at Readable._return (<loc>) at SyntaxError.get st`

distinct messages:
- `SyntaxError: Unexpected token H in JSON at position 0
    at JSON.parse (native)
    at Readable.<anonymous> (test-http-client-leaky-with-double-response.js:31:25)
    at Readable._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at SyntaxError.get stack (native`
example test: `test/parallel/test-http-client-leaky-with-double-response.js`

### 1 × `TAP version <n> # Subtest: [object Object] not ok <n> - [object Object] --- duration_ms: <n> failureType: <str> error: <str> code: <str> ... <n>..<n> # tests <n`

distinct messages:
- `TAP version 13
# Subtest: [object Object]
not ok 1 - [object Object]
  ---
  duration_ms: 39
  failureType: 'testCodeFailure'
  error: "Date(2016-01-01T00:00:00.000Z) notDeepEqual {}"
  code: 'ERR_ASSERTION'
  ...
1..1
# tests 1
# suites 0
# pass 0
# fail 1
# cancelled 0
# skipped 0
# todo 0
# durat`
example test: `test/parallel/test-assert-checktag.js`

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
  duration_ms: 2
  failureType: 'testCodeFailure'
  error: "Got unwanted exception: Assert is not a function"
  code: 'ERR_ASSERTION'
  ...
# Subtest: Assert class non strict
not ok 2 - Assert `
example test: `test/parallel/test-assert-class.js`

### 1 × `TAP version <n> # Subtest: CJS: --experimental-package-map # Subtest: basic resolution # Subtest: resolves require() through package map not ok <n> - resolves r`

distinct messages:
- `TAP version 13
# Subtest: CJS: --experimental-package-map
    # Subtest: basic resolution
        # Subtest: resolves require() through package map
        not ok 1 - resolves require() through package map
          ---
          duration_ms: 104
          failureType: 'testCodeFailure'
          er`
example test: `test/parallel/test-require-package-map.js`

### 1 × `TAP version <n> # Subtest: deepEqual not ok <n> - deepEqual --- duration_ms: <n> failureType: <str> error: <str> code: <str> ... # Subtest: loose deepEqual not `

distinct messages:
- `TAP version 13
# Subtest: deepEqual
not ok 1 - deepEqual
  ---
  duration_ms: 1
  failureType: 'testCodeFailure'
  error: "Missing expected exception."
  code: 'ERR_ASSERTION'
  ...
# Subtest: loose deepEqual
not ok 2 - loose deepEqual
  ---
  duration_ms: 2
  failureType: 'testCodeFailure'
  error:`
example test: `test/parallel/test-assert-deep.js`

### 1 × `TAP version <n> # Subtest: ensure the assert.ok throwing similar error messages for esm and cjs files # Subtest: should return code <n> for each command not ok `

distinct messages:
- `TAP version 13
# Subtest: ensure the assert.ok throwing similar error messages for esm and cjs files
    # Subtest: should return code 1 for each command
    not ok 1 - should return code 1 for each command
      ---
      duration_ms: 83
      failureType: 'testCodeFailure'
      error: "2 === 1"
 `
example test: `test/parallel/test-assert-esm-cjs-message-verify.js`

### 1 × `TAP version <n> # Subtest: equalArrayPairs # Subtest: not ok <n> - --- duration_ms: <n> failureType: <str> error: <str> code: <str> ... # Subtest: not ok <n> - `

distinct messages:
- `TAP version 13
# Subtest: equalArrayPairs
    # Subtest: 
    not ok 1 - 
      ---
      duration_ms: 101
      failureType: 'testCodeFailure'
      error: "assert.partialDeepStrictEqual is not a function"
      code: 'ERR_TEST_FAILURE'
      ...
    # Subtest: 
    not ok 2 - 
      ---
      dura`
example test: `test/parallel/test-assert-typedarray-deepequal.js`

### 1 × `TAP version <n> # Subtest: format invalid input not ok <n> - format invalid input --- duration_ms: <n> failureType: <str> error: <str> code: <str> ... <n>..<n> `

distinct messages:
- `TAP version 13
# Subtest: format invalid input
not ok 1 - format invalid input
  ---
  duration_ms: 2
  failureType: 'testCodeFailure'
  error: "Missing expected exception."
  code: 'ERR_ASSERTION'
  ...
1..1
# tests 1
# suites 0
# pass 0
# fail 1
# cancelled 0
# skipped 0
# todo 0
# duration_ms 5`
example test: `test/parallel/test-url-format-invalid-input.js`

### 1 × `TAP version <n> # Subtest: format slightly wonky content to a valid URL not ok <n> - format slightly wonky content to a valid URL --- duration_ms: <n> failureTy`

distinct messages:
- `TAP version 13
# Subtest: format slightly wonky content to a valid URL
not ok 1 - format slightly wonky content to a valid URL
  ---
  duration_ms: 2
  failureType: 'testCodeFailure'
  error: "wonky format(http://example.com?) == http://example.com/?\nactual:"
  code: 'ERR_ASSERTION'
  ...
1..1
# te`
example test: `test/parallel/test-url-format.js`

### 1 × `TAP version <n> # Subtest: fs.stat should throw AbortError when called with an already aborted AbortSignal not ok <n> - fs.stat should throw AbortError when cal`

distinct messages:
- `TAP version 13
# Subtest: fs.stat should throw AbortError when called with an already aborted AbortSignal
not ok 1 - fs.stat should throw AbortError when called with an already aborted AbortSignal
  ---
  duration_ms: 3
  failureType: 'testCodeFailure'
  error: "Missing expected rejection"
  code: '`
example test: `test/parallel/test-fs-stat-abort-test.js`

### 1 × `TAP version <n> # Subtest: Handle error causes not ok <n> - Handle error causes --- duration_ms: <n> failureType: <str> error: <str> code: <str> ... # Subtest: `

distinct messages:
- `TAP version 13
# Subtest: Handle error causes
not ok 1 - Handle error causes
  ---
  duration_ms: 4
  failureType: 'testCodeFailure'
  error: "Missing expected exception."
  code: 'ERR_ASSERTION'
  ...
# Subtest: Handle undefined causes
not ok 2 - Handle undefined causes
  ---
  duration_ms: 0
  fai`
example test: `test/parallel/test-assert-deep-with-error.js`

### 1 × `TAP version <n> # Subtest: invalid arguments not ok <n> - invalid arguments --- duration_ms: <n> failureType: <str> error: <str> code: <str> ... # Subtest: inpu`

distinct messages:
- `TAP version 13
# Subtest: invalid arguments
not ok 1 - invalid arguments
  ---
  duration_ms: 2
  failureType: 'testCodeFailure'
  error: "Got unwanted exception: fileURLToPath: input is not a valid URL"
  code: 'ERR_ASSERTION'
  ...
# Subtest: input must be a file URL
not ok 2 - input must be a fil`
example test: `test/parallel/test-url-fileurltopath.js`

### 1 × `TAP version <n> # Subtest: module is not instantiated yet not ok <n> - module is not instantiated yet --- duration_ms: <n> failureType: <str> error: <str> code:`

distinct messages:
- `TAP version 13
# Subtest: module is not instantiated yet
not ok 1 - module is not instantiated yet
  ---
  duration_ms: 2
  failureType: 'testCodeFailure'
  error: "Got unwanted exception: foo.hasAsyncGraph is not a function"
  code: 'ERR_ASSERTION'
  ...
# Subtest: simple module with top-level awai`
example test: `test/parallel/test-vm-module-hasasyncgraph.js`

### 1 × `TAP version <n> # Subtest: No args ok <n> - No args # Subtest: One arg = message ok <n> - One arg = message # Subtest: One arg = Error not ok <n> - One arg = Er`

distinct messages:
- `TAP version 13
# Subtest: No args
ok 1 - No args
# Subtest: One arg = message
ok 2 - One arg = message
# Subtest: One arg = Error
not ok 3 - One arg = Error
  ---
  duration_ms: 1
  failureType: 'testCodeFailure'
  error: "Got unwanted exception: undefined"
  code: 'ERR_ASSERTION'
  ...
# Subtest: O`
example test: `test/parallel/test-assert-fail.js`

### 1 × `TAP version <n> # Subtest: process.loadEnvFile() # Subtest: supports passing path not ok <n> - supports passing path --- duration_ms: <n> failureType: <str> err`

distinct messages:
- `TAP version 13
# Subtest: process.loadEnvFile()
    # Subtest: supports passing path
    not ok 1 - supports passing path
      ---
      duration_ms: 57
      failureType: 'testCodeFailure'
      error: "'TypeError: (intermediate value).loadEnvFile is not a function\n    at :program (<snippet>:1:1)`
example test: `test/parallel/test-process-load-env-file.js`

### 1 × `TAP version <n> # Subtest: process.ref/unref work as expected # Subtest: refs... not ok <n> - refs... --- duration_ms: <n> failureType: <str> error: <str> code:`

distinct messages:
- `TAP version 13
# Subtest: process.ref/unref work as expected
    # Subtest: refs...
    not ok 1 - refs...
      ---
      duration_ms: 0
      failureType: 'testCodeFailure'
      error: "(intermediate value).ref is not a function"
      code: 'ERR_TEST_FAILURE'
      ...
    1..1
not ok 1 - proces`
example test: `test/parallel/test-process-ref-unref.js`

### 1 × `TAP version <n> # Subtest: should format ok <n> - should format # Subtest: handle invalid arguments not ok <n> - handle invalid arguments --- duration_ms: <n> f`

distinct messages:
- `TAP version 13
# Subtest: should format
ok 1 - should format
# Subtest: handle invalid arguments
not ok 2 - handle invalid arguments
  ---
  duration_ms: 1
  failureType: 'testCodeFailure'
  error: "Missing expected exception."
  code: 'ERR_ASSERTION'
  ...
# Subtest: any falsy value other than unde`
example test: `test/parallel/test-url-format-whatwg.js`

### 1 × `TAP version <n> # Subtest: should parse and format not ok <n> - should parse and format --- duration_ms: <n> failureType: <str> error: <str> code: <str> ... # S`

distinct messages:
- `TAP version 13
# Subtest: should parse and format
not ok 1 - should parse and format
  ---
  duration_ms: 2
  failureType: 'testCodeFailure'
  error: "url.Url is not a constructor"
  code: 'ERR_TEST_FAILURE'
  ...
# Subtest: parse result should equal new url.Url()
not ok 2 - parse result should equa`
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
not ok 3 - Errors created in different co`
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

### 1 × `TAP version <n> # Subtest: Test that assert.ifError has the correct stack trace of both stacks ok <n> - Test that assert.ifError has the correct stack trace of `

distinct messages:
- `TAP version 13
# Subtest: Test that assert.ifError has the correct stack trace of both stacks
ok 1 - Test that assert.ifError has the correct stack trace of both stacks
# Subtest: General ifError tests
not ok 2 - General ifError tests
  ---
  duration_ms: 9
  failureType: 'testCodeFailure'
  error: `
example test: `test/parallel/test-assert-if-error.js`

### 1 × `TAP version <n> # Subtest: util.stripVTControlCharacters not ok <n> - util.stripVTControlCharacters --- duration_ms: <n> failureType: <str> error: <str> code: <`

distinct messages:
- `TAP version 13
# Subtest: util.stripVTControlCharacters
not ok 1 - util.stripVTControlCharacters
  ---
  duration_ms: 7
  failureType: 'testCodeFailure'
  error: "'ailto:no-replay@mail.com\u001b\\mail;;\u001b\\' === 'mail'"
  code: 'ERR_ASSERTION'
  ...
1..1
# tests 1
# suites 0
# pass 0
# fail 1
# `
example test: `test/parallel/test-util-stripvtcontrolcharacters.js`

### 1 × `TAP version <n> # Subtest: util.styleText hex color support # Subtest: valid <n>-digit hex colors # Subtest: should parse #ffcc00 as RGB(<n>, <n>, <n>) not ok <`

distinct messages:
- `TAP version 13
# Subtest: util.styleText hex color support
    # Subtest: valid 6-digit hex colors
        # Subtest: should parse #ffcc00 as RGB(255, 204, 0)
        not ok 1 - should parse #ffcc00 as RGB(255, 204, 0)
          ---
          duration_ms: 5
          failureType: 'testCodeFailure'
 `
example test: `test/parallel/test-util-styletext-hex.js`

### 1 × `TAP version <n> # Subtest: validation not ok <n> - validation --- duration_ms: <n> failureType: <str> error: <str> code: <str> ... # Subtest: performs flush ok `

distinct messages:
- `TAP version 13
# Subtest: validation
not ok 1 - validation
  ---
  duration_ms: 2
  failureType: 'testCodeFailure'
  error: "Missing expected exception."
  code: 'ERR_ASSERTION'
  ...
# Subtest: performs flush
ok 2 - performs flush
# Subtest: does not perform flush
ok 3 - does not perform flush
# Su`
example test: `test/parallel/test-fs-write-stream-flush.js`

### 1 × `TAP version <n> # Subtest: Verify that asserting in the very first line produces the expected result not ok <n> - Verify that asserting in the very first line p`

distinct messages:
- `TAP version 13
# Subtest: Verify that asserting in the very first line produces the expected result
not ok 1 - Verify that asserting in the very first line produces the expected result
  ---
  duration_ms: 5
  failureType: 'testCodeFailure'
  error: "Got unwanted exception: '' == true"
  code: 'ERR_`
example test: `test/parallel/test-assert-first-line.js`

### 1 × `TAP version <n> # Subtest: Verify that signals constant is immutable not ok <n> - Verify that signals constant is immutable --- duration_ms: <n> failureType: <s`

distinct messages:
- `TAP version 13
# Subtest: Verify that signals constant is immutable
not ok 1 - Verify that signals constant is immutable
  ---
  duration_ms: 1
  failureType: 'testCodeFailure'
  error: "Missing expected exception."
  code: 'ERR_ASSERTION'
  ...
1..1
# tests 1
# suites 0
# pass 0
# fail 1
# cancelle`
example test: `test/parallel/test-os-constants-signals.js`

### 1 × `TAP version <n> # Subtest: Worker eval module typescript without input-type ok <n> - Worker eval module typescript without input-type # SKIP # Subtest: Worker e`

distinct messages:
- `TAP version 13
# Subtest: Worker eval module typescript without input-type
ok 1 - Worker eval module typescript without input-type # SKIP
# Subtest: Worker eval module typescript with --input-type=module-typescript
ok 2 - Worker eval module typescript with --input-type=module-typescript # SKIP
# Sub`
example test: `test/parallel/test-worker-eval-typescript.js`

### 1 × `TAP version <n> # Subtest: zlib flush not ok <n> - zlib flush --- duration_ms: <n> failureType: <str> error: <str> code: <str> ... <n>..<n> # tests <n> # suites`

distinct messages:
- `TAP version 13
# Subtest: zlib flush
not ok 1 - zlib flush
  ---
  duration_ms: 3
  failureType: 'testCodeFailure'
  error: "deflater.flush is not a function"
  code: 'ERR_TEST_FAILURE'
  ...
1..1
# tests 1
# suites 0
# pass 0
# fail 1
# cancelled 0
# skipped 0
# todo 0
# duration_ms 7`
example test: `test/parallel/test-zlib-flush.js`

### 1 × `Trace: in nexttick false AssertionError: undefined === { members: [] } at Function.strictEqual (native) at <loc> at AssertionError.get stack (native)`

distinct messages:
- `Trace: in nexttick false

AssertionError: undefined === { members: [] }
    at Function.strictEqual (native)
    at test-domain-from-timer.js:36:14
    at AssertionError.get stack (native)`
example test: `test/parallel/test-domain-from-timer.js`

### 1 × `TypeError: _module._nodeModulePaths is not a function at :=> (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: _module._nodeModulePaths is not a function
    at :=> (test-module-nodemodulepaths.js:123:17)
    at :anonymous (test-module-nodemodulepaths.js:122:1)
    at :program (test-module-nodemodulepaths.js:1:1)`
example test: `test/parallel/test-module-nodemodulepaths.js`

### 1 × `TypeError: _module._resolveLookupPaths is not a function at testFirstInPath (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: _module._resolveLookupPaths is not a function
    at testFirstInPath (test-module-relative-lookup.js:13:15)
    at :anonymous (test-module-relative-lookup.js:21:1)
    at :program (test-module-relative-lookup.js:1:1)`
example test: `test/parallel/test-module-relative-lookup.js`

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

### 1 × `TypeError: (intermediate value).availableMemory is not a function at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: (intermediate value).availableMemory is not a function
    at :anonymous (test-process-available-memory.js:4:25)
    at :program (test-process-available-memory.js:1:1)`
example test: `test/parallel/test-process-available-memory.js`

### 1 × `TypeError: (intermediate value).constrainedMemory is not a function at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: (intermediate value).constrainedMemory is not a function
    at :anonymous (test-process-constrained-memory.js:5:27)
    at :program (test-process-constrained-memory.js:1:1)`
example test: `test/parallel/test-process-constrained-memory.js`

### 1 × `TypeError: (intermediate value).execve is not a function at :anonymous (<loc>) at :program (<loc>) AssertionError: function should not have been called at <loc>`

distinct messages:
- `TypeError: (intermediate value).execve is not a function
    at :anonymous (test-process-execve-on-exit.js:17:3)
    at :program (test-process-execve-on-exit.js:1:1)
AssertionError: function should not have been called at test-process-execve-on-exit.js:16
called with arguments: 1
    at Function.fai`
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

### 1 × `TypeError: Cannot convert undefined or null to object: undefined at Function.getPrototypeOf (native) at EventEmitter.<anonymous> (<loc>) at EventEmitter._return`

distinct messages:
- `TypeError: Cannot convert undefined or null to object: undefined
    at Function.getPrototypeOf (native)
    at EventEmitter.<anonymous> (test-http-headers-distinct-proto.js:13:29)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmi`
example test: `test/parallel/test-http-headers-distinct-proto.js`

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

### 1 × `TypeError: Cannot read property <str> of undefined at :=> (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: Cannot read property 'has' of undefined
    at :=> (test-process-env-allowed-flags.js:36:7)
    at :anonymous (test-process-env-allowed-flags.js:34:3)
    at :program (test-process-env-allowed-flags.js:1:1)`
example test: `test/parallel/test-process-env-allowed-flags.js`

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

### 1 × `TypeError: Cannot read property <str> of undefined at deflater.flush (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: Cannot read property 'call' of undefined
    at deflater.flush (test-zlib-flush-drain.js:22:3)
    at :anonymous (test-zlib-flush-drain.js:34:1)
    at :program (test-zlib-flush-drain.js:1:1)`
example test: `test/parallel/test-zlib-flush-drain.js`

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

### 1 × `TypeError: Cannot read property <str> of undefined at names (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: Cannot read property 'map' of undefined
    at names (test-domain-enter-exit.js:30:10)
    at :anonymous (test-domain-enter-exit.js:44:41)
    at :program (test-domain-enter-exit.js:1:1)`
example test: `test/parallel/test-domain-enter-exit.js`

### 1 × `TypeError: Cannot read property <str> of undefined at Readable.<anonymous> (<loc>) at TypeError.get stack (native) TypeError: Cannot read property <str> of unde`

distinct messages:
- `TypeError: Cannot read property 'id' of undefined
    at Readable.<anonymous> (test-http-client-timeout-agent.js:56:28)
    at TypeError.get stack (native)
TypeError: Cannot read property 'id' of undefined
    at Readable.<anonymous> (test-http-client-timeout-agent.js:56:28)
    at TypeError.get sta`
example test: `test/parallel/test-http-client-timeout-agent.js`

### 1 × `TypeError: Cannot set property <str> of undefined at EventEmitter.<anonymous> (<loc>) at EventEmitter._return (<loc>) at EventEmitter.emit (native) at Duplex.pu`

distinct messages:
- `TypeError: Cannot set property 'free' of undefined
    at EventEmitter.<anonymous> (test-http-server-connection-list-when-close.js:19:5)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)
    at Duplex.push (nativ`
example test: `test/parallel/test-http-server-connection-list-when-close.js`

### 1 × `TypeError: cb is not a function at agent.createSocket (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: cb is not a function
    at agent.createSocket (test-http-agent-close.js:9:3)
    at :anonymous (test-http-agent-close.js:12:13)
    at :program (test-http-agent-close.js:1:1)`
example test: `test/parallel/test-http-agent-close.js`

### 1 × `TypeError: cb is not a function at Immediate.<anonymous> (<loc>) at TypeError.get stack (native)`

distinct messages:
- `TypeError: cb is not a function
    at Immediate.<anonymous> (test-http-createConnection.js:66:5)
    at TypeError.get stack (native)`
example test: `test/parallel/test-http-createConnection.js`

### 1 × `TypeError: Class constructors cannot be invoked without <str> at NotInitialized (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: Class constructors cannot be invoked without 'new'
    at NotInitialized (test-zlib-deflate-raw-inherits.js:11:3)
    at :anonymous (test-zlib-deflate-raw-inherits.js:17:14)
    at :program (test-zlib-deflate-raw-inherits.js:1:1)`
example test: `test/parallel/test-zlib-deflate-raw-inherits.js`

### 1 × `TypeError: client._handle.close is not a function at Duplex.<anonymous> (<loc>) at Duplex._return (<loc>) at Duplex.emit (native) at TypeError.get stack (native`

distinct messages:
- `TypeError: client._handle.close is not a function
    at Duplex.<anonymous> (test-net-socket-write-after-close.js:37:22)
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

### 1 × `TypeError: compress.flush is not a function at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: compress.flush is not a function
    at :anonymous (test-zlib-flush-write-sync-interleaved.js:20:3)
    at :program (test-zlib-flush-write-sync-interleaved.js:1:1)`
example test: `test/parallel/test-zlib-flush-write-sync-interleaved.js`

### 1 × `TypeError: compress.flush is not a function at :anonymous (<loc>) TypeError: Cannot read property <str> of undefined at Process.<anonymous> (<loc>) at TypeError`

distinct messages:
- `TypeError: compress.flush is not a function
    at :anonymous (test-zlib-zstd-flush.js:16:3)
TypeError: Cannot read property 'toString' of undefined
    at Process.<anonymous> (test-zlib-zstd-flush.js:26:26)
    at TypeError.get stack (native)`
example test: `test/parallel/test-zlib-zstd-flush.js`

### 1 × `TypeError: compressGzipSync is not a function at testGzipRoundTrip (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: compressGzipSync is not a function
    at testGzipRoundTrip (test-stream-iter-transform-sync.js:41:35)
    at :anonymous (test-stream-iter-transform-sync.js:211:1)
    at :program (test-stream-iter-transform-sync.js:1:1)`
example test: `test/parallel/test-stream-iter-transform-sync.js`

### 1 × `TypeError: Constructor EventEmitter requires <str> at MyEE (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: Constructor EventEmitter requires 'new'
    at MyEE (test-event-emitter-subclass.js:34:3)
    at :anonymous (test-event-emitter-subclass.js:37:14)
    at :program (test-event-emitter-subclass.js:1:1)`
example test: `test/parallel/test-event-emitter-subclass.js`

### 1 × `TypeError: deflate.flush is not a function at deflateResetDictionaryTest (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: deflate.flush is not a function
    at deflateResetDictionaryTest (test-zlib-dictionary.js:103:3)
    at :anonymous (test-zlib-dictionary.js:172:3)
    at :program (test-zlib-dictionary.js:1:1)`
example test: `test/parallel/test-zlib-dictionary.js`

### 1 × `TypeError: deflater.flush is not a function at :anonymous (<loc>) AssertionError: undefined deepStrictEqual [<n>, <n>, <n>, <n>, <n>, …] at Function.deepStrictE`

distinct messages:
- `TypeError: deflater.flush is not a function
    at :anonymous (test-zlib-brotli-flush.js:16:3)
AssertionError: undefined deepStrictEqual [139, 7, 128, 255, 216, …]
    at Function.deepStrictEqual (native)
    at Process.<anonymous> (test-zlib-brotli-flush.js:26:10)
    at AssertionError.get stack (n`
example test: `test/parallel/test-zlib-brotli-flush.js`

### 1 × `TypeError: destroy is not a function at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: destroy is not a function
    at :anonymous (test-stream-destroy.js:14:3)
    at :program (test-stream-destroy.js:1:1)`
example test: `test/parallel/test-stream-destroy.js`

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

### 1 × `TypeError: event name is required at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: event name is required
    at :anonymous (test-event-emitter-listeners.js:91:26)
    at :program (test-event-emitter-listeners.js:1:1)`
example test: `test/parallel/test-event-emitter-listeners.js`

### 1 × `TypeError: eventLoopUtilization is not a function at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: eventLoopUtilization is not a function
    at :anonymous (test-perf-hooks-eventlooputilization.js:16:13)
    at :program (test-perf-hooks-eventlooputilization.js:1:1)`
example test: `test/parallel/test-perf-hooks-eventlooputilization.js`

### 1 × `TypeError: fromWritable is not a function at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: fromWritable is not a function
    at :anonymous (test-stream-iter-from-writable-cache-options.js:12:3)
    at :program (test-stream-iter-from-writable-cache-options.js:1:1)`
example test: `test/parallel/test-stream-iter-from-writable-cache-options.js`

### 1 × `TypeError: function C() { [native code] } is not a constructor at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: function C() { [native code] } is not a constructor
    at :anonymous (test-perf-hooks-timerify-return-value.js:21:11)
    at :program (test-perf-hooks-timerify-return-value.js:1:1)`
example test: `test/parallel/test-perf-hooks-timerify-return-value.js`

### 1 × `TypeError: function N() { [native code] } is not a constructor at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: function N() { [native code] } is not a constructor
    at :anonymous (test-perf-hooks-timerify-constructor.js:27:1)
    at :program (test-perf-hooks-timerify-constructor.js:1:1)`
example test: `test/parallel/test-perf-hooks-timerify-constructor.js`

### 1 × `TypeError: function runInNewContext() { [native code] } is not a constructor at :=> (<loc>) at :=> (<loc>) at :=> (<loc>) at :anonymous (<loc>) at :program (<lo`

distinct messages:
- `TypeError: function runInNewContext() { [native code] } is not a constructor
    at :=> (test-assert-partial-deep-equal.js:320:19)
    at :=> (test-assert-partial-deep-equal.js:42:5)
    at :=> (test-assert-partial-deep-equal.js:41:3)
    at :anonymous (test-assert-partial-deep-equal.js:40:1)
    at`
example test: `test/parallel/test-assert-partial-deep-equal.js`

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

### 1 × `TypeError: gzip.flush is not a function at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: gzip.flush is not a function
    at :anonymous (test-zlib-write-after-flush.js:49:3)
    at :program (test-zlib-write-after-flush.js:1:1)`
example test: `test/parallel/test-zlib-write-after-flush.js`

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

### 1 × `TypeError: null is not a String at :=> (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: null is not a String
    at :=> (test-querystring.js:213:9)
    at :anonymous (test-querystring.js:212:1)
    at :program (test-querystring.js:1:1)`
example test: `test/parallel/test-querystring.js`

### 1 × `TypeError: pathToFileURL: path must be an absolute filesystem path at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: pathToFileURL: path must be an absolute filesystem path
    at :anonymous (test-url-pathtofileurl.js:8:19)
    at :program (test-url-pathtofileurl.js:1:1)`
example test: `test/parallel/test-url-pathtofileurl.js`

### 1 × `TypeError: performance.mark: name is required at :=> (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: performance.mark: name is required
    at :=> (test-perf-hooks-usertiming.js:35:13)
    at :anonymous (test-perf-hooks-usertiming.js:34:1)
    at :program (test-perf-hooks-usertiming.js:1:1)`
example test: `test/parallel/test-perf-hooks-usertiming.js`

### 1 × `TypeError: pipeline: every link must be a Readable on the left and a Writable on the right at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: pipeline: every link must be a Readable on the left and a Writable on the right
    at :anonymous (test-webstreams-pipeline.js:24:3)
    at :program (test-webstreams-pipeline.js:1:1)`
example test: `test/parallel/test-webstreams-pipeline.js`

### 1 × `TypeError: pullSync is not a function at testPullSyncIdentity (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: pullSync is not a function
    at testPullSyncIdentity (test-stream-iter-pull-sync.js:10:26)
    at :anonymous (test-stream-iter-pull-sync.js:179:3)
    at :program (test-stream-iter-pull-sync.js:1:1)`
example test: `test/parallel/test-stream-iter-pull-sync.js`

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

### 1 × `TypeError: req.clearTimeout is not a function at Writable.<anonymous> (<loc>) at Writable._return (<loc>) at Writable.emit (native) at Duplex.push (native)`

distinct messages:
- `TypeError: req.clearTimeout is not a function
    at Writable.<anonymous> (test-http-timeout-overflow.js:39:9)
    at Writable._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at Writable.emit (native)
    at Duplex.push (native)`
example test: `test/parallel/test-http-timeout-overflow.js`

### 1 × `TypeError: req.clearTimeout is not a function at Writable.req (<loc>) at Writable.emit (native) at Duplex.push (native)`

distinct messages:
- `TypeError: req.clearTimeout is not a function
    at Writable.req (test-http-timeout.js:49:13)
    at Writable.emit (native)
    at Duplex.push (native)`
example test: `test/parallel/test-http-timeout.js`

### 1 × `TypeError: req.getUserAgent is not a function at EventEmitter.server (<loc>) at EventEmitter._return (<loc>) at EventEmitter.emit (native) at Duplex.push (nativ`

distinct messages:
- `TypeError: req.getUserAgent is not a function
    at EventEmitter.server (test-http-server-options-incoming-message.js:22:26)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)
    at Duplex.push (native)`
example test: `test/parallel/test-http-server-options-incoming-message.js`

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

### 1 × `TypeError: res.status is not a function at EventEmitter.server (<loc>) at EventEmitter._return (<loc>) at EventEmitter.emit (native) at Duplex.push (native)`

distinct messages:
- `TypeError: res.status is not a function
    at EventEmitter.server (test-http-server-options-server-response.js:22:7)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)
    at Duplex.push (native)`
example test: `test/parallel/test-http-server-options-server-response.js`

### 1 × `TypeError: res.writeEarlyHints is not a function at EventEmitter.<anonymous> (<loc>) at EventEmitter._return (<loc>) at EventEmitter.emit (native) at Duplex.pus`

distinct messages:
- `TypeError: res.writeEarlyHints is not a function
    at EventEmitter.<anonymous> (test-http-early-hints.js:14:9)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)
    at Duplex.push (native)
TypeError: res.writeE`
example test: `test/parallel/test-http-early-hints.js`

### 1 × `TypeError: res.writeInformation is not a function at EventEmitter.<anonymous> (<loc>) at EventEmitter._return (<loc>) at EventEmitter.emit (native) at Duplex.pu`

distinct messages:
- `TypeError: res.writeInformation is not a function
    at EventEmitter.<anonymous> (test-http-write-information.js:10:9)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)
    at Duplex.push (native)
TypeError: res`
example test: `test/parallel/test-http-write-information.js`

### 1 × `TypeError: res.writeProcessing is not a function at EventEmitter.<anonymous> (<loc>) at EventEmitter.emit (native) at Duplex.push (native)`

distinct messages:
- `TypeError: res.writeProcessing is not a function
    at EventEmitter.<anonymous> (test-http-information-processing.js:13:9)
    at EventEmitter.emit (native)
    at Duplex.push (native)`
example test: `test/parallel/test-http-information-processing.js`

### 1 × `TypeError: Right-hand-side of instanceof is not an object at assertDir (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: Right-hand-side of instanceof is not an object
    at assertDir (test-fs-opendir.js:30:10)
    at :anonymous (test-fs-opendir.js:63:3)
    at :program (test-fs-opendir.js:1:1)`
example test: `test/parallel/test-fs-opendir.js`

### 1 × `TypeError: rl.getCursorPos is not a function at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: rl.getCursorPos is not a function
    at :anonymous (test-readline-position.js:35:24)
    at :program (test-readline-position.js:1:1)`
example test: `test/parallel/test-readline-position.js`

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

### 1 × `TypeError: storage.withScope is not a function at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: storage.withScope is not a function
    at :anonymous (test-async-local-storage-run-scope.js:14:19)
    at :program (test-async-local-storage-run-scope.js:1:1)`
example test: `test/parallel/test-async-local-storage-run-scope.js`

### 1 × `TypeError: The <str> argument must be an Array at :=> (<loc>) at _return (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: The "args" argument must be an Array
    at :=> (test-child-process-spawnsync-args.js:36:37)
    at _return (index.js:573:12)
    at :anonymous (test-child-process-spawnsync-args.js:35:17)
    at :program (test-child-process-spawnsync-args.js:1:1)`
example test: `test/parallel/test-child-process-spawnsync-args.js`

### 1 × `TypeError: The <str> argument must be an instance of Buffer or Uint8Array. Received an instance of Object at :=> (<loc>) at _return (<loc>)`

distinct messages:
- `TypeError: The "list[0]" argument must be an instance of Buffer or Uint8Array. Received an instance of Object
    at :=> (test-zlib-unzip-one-byte-chunks.js:19:22)
    at _return (index.js:573:12)`
example test: `test/parallel/test-zlib-unzip-one-byte-chunks.js`

### 1 × `TypeError: The <str> argument must be an instance of Iterable. Received object at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: The "iterable" argument must be an instance of Iterable. Received object
    at :anonymous (test-stream-pipeline-uncaught.js:18:1)
    at :program (test-stream-pipeline-uncaught.js:1:1)`
example test: `test/parallel/test-stream-pipeline-uncaught.js`

### 1 × `TypeError: The <str> argument must be an object. Received type symbol at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: The "contextObject" argument must be an object. Received type symbol
    at :anonymous (test-vm-context-dont-contextify.js:13:19)
    at :program (test-vm-context-dont-contextify.js:1:1)`
example test: `test/parallel/test-vm-context-dont-contextify.js`

### 1 × `TypeError: The argument <str> must be one of: <n>, <n>, <n>. Received <n> at :anonymous (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: The argument 'family' must be one of: 0, 4, 6. Received 0
    at :anonymous (dns-error.js:21:11)
    at :anonymous (test-dns-negative-zero.js:7:1)
    at :program (test-dns-negative-zero.js:1:1)`
example test: `test/parallel/test-dns-negative-zero.js`

### 1 × `TypeError: The first argument must be of type string or an instance of Buffer, ArrayBuffer, or Array or an Array-like Object. Received an instance of Object at `

distinct messages:
- `TypeError: The first argument must be of type string or an instance of Buffer, ArrayBuffer, or Array or an Array-like Object. Received an instance of Object
    at :anonymous (test-buffer-sharedarraybuffer.js:27:1)
    at :program (test-buffer-sharedarraybuffer.js:1:1)`
example test: `test/parallel/test-buffer-sharedarraybuffer.js`

### 1 × `TypeError: This handle type cannot be sent at Duplex.s (<loc>) at Duplex.emit (native)`

distinct messages:
- `TypeError: This handle type cannot be sent
    at Duplex.s (test-child-process-fork-closed-channel-segfault.js:46:16)
    at Duplex.emit (native)`
example test: `test/parallel/test-child-process-fork-closed-channel-segfault.js`

### 1 × `TypeError: This handle type cannot be sent at EventEmitter.<anonymous> (<loc>) at EventEmitter._return (<loc>) at EventEmitter.emit (native) AssertionError: <st`

distinct messages:
- `TypeError: This handle type cannot be sent
    at EventEmitter.<anonymous> (test-child-process-send-keep-open.js:35:11)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)
AssertionError: '' === 'childparent'
    a`
example test: `test/parallel/test-child-process-send-keep-open.js`

### 1 × `TypeError: This handle type cannot be sent at EventEmitter.<anonymous> (<loc>) at EventEmitter._return (<loc>) at EventEmitter.emit (native) TypeError: This han`

distinct messages:
- `TypeError: This handle type cannot be sent
    at EventEmitter.<anonymous> (test-child-process-fork-getconnections.js:71:11)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)
TypeError: This handle type cannot be`
example test: `test/parallel/test-child-process-fork-getconnections.js`

### 1 × `TypeError: This handle type cannot be sent at EventEmitter.<anonymous> (<loc>) at EventEmitter.emit (native) AssertionError: false == true at ok (native) at Pro`

distinct messages:
- `TypeError: This handle type cannot be sent
    at EventEmitter.<anonymous> (test-child-process-fork-dgram.js:68:11)
    at EventEmitter.emit (native)
AssertionError: false == true
    at ok (native)
    at Process.<anonymous> (test-child-process-fork-dgram.js:104:5)
    at AssertionError.get stack (`
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

### 1 × `TypeError: toReadable is not a function at testNotObjectMode (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: toReadable is not a function
    at testNotObjectMode (test-stream-iter-to-readable.js:261:20)
    at :anonymous (test-stream-iter-to-readable.js:604:1)
    at :program (test-stream-iter-to-readable.js:1:1)`
example test: `test/parallel/test-stream-iter-to-readable.js`

### 1 × `TypeError: TypeError: (intermediate value)._fatalException is not a function`

distinct messages:
- `TypeError: TypeError: (intermediate value)._fatalException is not a function`
example test: `test/parallel/test-worker-non-fatal-uncaught-exception.js`

### 1 × `TypeError: url.Url is not a constructor at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: url.Url is not a constructor
    at :anonymous (test-url-parse-query.js:74:34)
    at :program (test-url-parse-query.js:1:1)`
example test: `test/parallel/test-url-parse-query.js`

### 1 × `TypeError: URLPattern is not a constructor at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: URLPattern is not a constructor
    at :anonymous (test-urlpattern-invalidthis.js:8:17)
    at :program (test-urlpattern-invalidthis.js:1:1)`
example test: `test/parallel/test-urlpattern-invalidthis.js`

### 1 × `TypeError: URLSearchParams init must be a string, sequence of pairs, or record at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: URLSearchParams init must be a string, sequence of pairs, or record
    at :anonymous (test-whatwg-url-custom-searchparams-constructor.js:33:12)
    at :program (test-whatwg-url-custom-searchparams-constructor.js:1:1)`
example test: `test/parallel/test-whatwg-url-custom-searchparams-constructor.js`

### 1 × `TypeError: util._exceptionWithHostPort is not a function at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: util._exceptionWithHostPort is not a function
    at :anonymous (test-util-exception-with-host-port.js:13:13)
    at :program (test-util-exception-with-host-port.js:1:1)`
example test: `test/parallel/test-util-exception-with-host-port.js`

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

### 1 × `TypeError: zipper.flush is not a function at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: zipper.flush is not a function
    at :anonymous (test-zlib-flush-drain-longblock.js:16:1)
    at :program (test-zlib-flush-drain-longblock.js:1:1)`
example test: `test/parallel/test-zlib-flush-drain-longblock.js`

### 1 × `Uncaught (in promise) AssertionError: [] deepStrictEqual [{ name: <str>, parentURL: <str>, url: <str> }, { name: <str>, parentURL: <str>, url: <str> }, { name: `

distinct messages:
- `Uncaught (in promise) AssertionError: [] deepStrictEqual [{ name: 'start', parentURL: 'file:///work/.harness/work/node-api/node-api-overlay/test/parallel/test-diagnostics-channel-module-import.js', url: 'http' }, { name: 'end', parentURL: 'file:///work/.harness/work/node-api/node-api-overlay/test/pa`
example test: `test/parallel/test-diagnostics-channel-module-import.js`

### 1 × `Uncaught (in promise) AssertionError: [] deepStrictEqual [<str>]`

distinct messages:
- `Uncaught (in promise) AssertionError: [] deepStrictEqual ['foo']`
example test: `test/parallel/test-vm-module-link.js`

### 1 × `Uncaught (in promise) AssertionError: [<n>] deepStrictEqual [] Uncaught (in promise) AssertionError: {} deepStrictEqual {} Uncaught (in promise) AssertionError:`

distinct messages:
- `Uncaught (in promise) AssertionError: [2] deepStrictEqual []
Uncaught (in promise) AssertionError: {} deepStrictEqual {}
Uncaught (in promise) AssertionError: {} deepStrictEqual {}
AssertionError: Got unwanted exception: Cannot read property 'runInAsyncScope' of undefined
    at :anonymous (test-eve`
example test: `test/parallel/test-eventemitter-asyncresource.js`

### 1 × `Uncaught (in promise) AssertionError: <n> === -<n>`

distinct messages:
- `Uncaught (in promise) AssertionError: 3 === -1`
example test: `test/parallel/test-fs-filehandle-use-after-close.js`

### 1 × `Uncaught (in promise) AssertionError: <n> === -<n> Uncaught (in promise) TypeError: dh[(intermediate value).asyncDispose] is not a function`

distinct messages:
- `Uncaught (in promise) AssertionError: 4 === -1
Uncaught (in promise) TypeError: dh[(intermediate value).asyncDispose] is not a function`
example test: `test/parallel/test-fs-promises-file-handle-dispose.js`

### 1 × `Uncaught (in promise) AssertionError: <n> === <n> Uncaught (in promise) AssertionError: [<n>, <n>, <n>, <n>, <n>, …] deepStrictEqual [<n>, <n>, <n>, <n>, <n>, …`

distinct messages:
- `Uncaught (in promise) AssertionError: 0 === 5
Uncaught (in promise) AssertionError: [1, 1, 2, 2, 3, …] deepStrictEqual [1, 1, 2, 2, 3, …]
AssertionError: Got unwanted exception: flatMap: fn must be a function
    at :anonymous (test-stream-flatMap.js:112:3)
    at :program (test-stream-flatMap.js:1:`
example test: `test/parallel/test-stream-flatMap.js`

### 1 × `Uncaught (in promise) AssertionError: <n> === <n> Uncaught (in promise) AssertionError: <n> === <n> Uncaught (in promise) AssertionError: <n> === <n> Uncaught (`

distinct messages:
- `Uncaught (in promise) AssertionError: 0 === 42
Uncaught (in promise) AssertionError: 13 === 42
Uncaught (in promise) AssertionError: 42 === 0
Uncaught (in promise) AssertionError: 42 === 13`
example test: `test/parallel/test-zlib-zstd-pledged-src-size.js`

### 1 × `Uncaught (in promise) AssertionError: <n> deepStrictEqual NaN`

distinct messages:
- `Uncaught (in promise) AssertionError: 3 deepStrictEqual NaN`
example test: `test/parallel/test-stream-reduce.js`

### 1 × `Uncaught (in promise) AssertionError: <str> === <str> AssertionError: Missing expected exception. at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `Uncaught (in promise) AssertionError: 'undefined' === 'object'
AssertionError: Missing expected exception.
    at :anonymous (test-vm-measure-memory.js:26:3)
    at :program (test-vm-measure-memory.js:1:1)`
example test: `test/parallel/test-vm-measure-memory.js`

### 1 × `Uncaught (in promise) AssertionError: <str> === undefined`

distinct messages:
- `Uncaught (in promise) AssertionError: 'inside then' === undefined`
example test: `test/parallel/test-async-local-storage-enter-with.js`

### 1 × `Uncaught (in promise) AssertionError: Got rejection that did not match expected: AssertionError: Failed`

distinct messages:
- `Uncaught (in promise) AssertionError: Got rejection that did not match expected: AssertionError: Failed`
example test: `test/parallel/test-assert-async.js`

### 1 × `Uncaught (in promise) AssertionError: Got rejection that did not match expected: node:worker_threads: postMessageToThread is not implemented yet in Elide TypeEr`

distinct messages:
- `Uncaught (in promise) AssertionError: Got rejection that did not match expected: node:worker_threads: postMessageToThread is not implemented yet in Elide
TypeError: TypeError: Cannot execute on non-shared array.`
example test: `test/parallel/test-worker-messaging-errors-timeout.js`

### 1 × `Uncaught (in promise) AssertionError: Got rejection that did not match expected: Object{} Uncaught (in promise) AssertionError: Got rejection that did not match`

distinct messages:
- `Uncaught (in promise) AssertionError: Got rejection that did not match expected: Object{}
Uncaught (in promise) AssertionError: Got rejection that did not match expected: Object{}
AssertionError: Missing expected exception.
    at :anonymous (test-timers-promises-scheduler.js:49:1)
    at :program (`
example test: `test/parallel/test-timers-promises-scheduler.js`

### 1 × `Uncaught (in promise) AssertionError: Got rejection that did not match expected: RangeError: TextDecoder: unsupported encoding label: not-a-real-encoding`

distinct messages:
- `Uncaught (in promise) AssertionError: Got rejection that did not match expected: RangeError: TextDecoder: unsupported encoding label: not-a-real-encoding`
example test: `test/parallel/test-stream-iter-consumers-text.js`

### 1 × `Uncaught (in promise) AssertionError: Got rejection that did not match expected: TypeError: decompressGzip is not a function`

distinct messages:
- `Uncaught (in promise) AssertionError: Got rejection that did not match expected: TypeError: decompressGzip is not a function`
example test: `test/parallel/test-stream-iter-transform-errors.js`

### 1 × `Uncaught (in promise) AssertionError: Got rejection that did not match expected: TypeError: DecompressionStream: trailing junk past end-of-stream`

distinct messages:
- `Uncaught (in promise) AssertionError: Got rejection that did not match expected: TypeError: DecompressionStream: trailing junk past end-of-stream`
example test: `test/parallel/test-zlib-type-error.js`

### 1 × `Uncaught (in promise) AssertionError: Got rejection that did not match expected: TypeError: The stream is closed`

distinct messages:
- `Uncaught (in promise) AssertionError: Got rejection that did not match expected: TypeError: The stream is closed`
example test: `test/parallel/test-whatwg-writablestream-close.js`

### 1 × `Uncaught (in promise) AssertionError: Got unwanted exception: RangeError: Maximum call stack size exceeded`

distinct messages:
- `Uncaught (in promise) AssertionError: Got unwanted exception: RangeError: Maximum call stack size exceeded`
example test: `test/parallel/test-worker-stack-overflow-stack-size.js`

### 1 × `Uncaught (in promise) AssertionError: Got unwanted exception: undefined Uncaught (in promise) Object{} Uncaught (in promise) Error: node:worker_threads: moveMes`

distinct messages:
- `Uncaught (in promise) AssertionError: Got unwanted exception: undefined
Uncaught (in promise) Object{}
Uncaught (in promise) Error: node:worker_threads: moveMessagePortToContext is not implemented yet in Elide
Uncaught (in promise) AssertionError: Got unwanted exception: undefined
Uncaught (in promi`
example test: `test/parallel/test-worker-message-port-transfer-filehandle.js`

### 1 × `Uncaught (in promise) AssertionError: Missing expected exception.`

distinct messages:
- `Uncaught (in promise) AssertionError: Missing expected exception.`
example test: `test/parallel/test-fs-write-optional-params.js`

### 1 × `Uncaught (in promise) AssertionError: Missing expected exception. Uncaught (in promise) AssertionError: Missing expected exception. Uncaught (in promise) Assert`

distinct messages:
- `Uncaught (in promise) AssertionError: Missing expected exception.
Uncaught (in promise) AssertionError: Missing expected exception.
Uncaught (in promise) AssertionError: Got unwanted exception: undefined
[EventLoop] external task threw: com.oracle.truffle.js.runtime.builtins.JSDataViewObject cannot `
example test: `test/parallel/test-filehandle-readablestream.js`

### 1 × `Uncaught (in promise) AssertionError: Missing expected exception. Uncaught (in promise) AssertionError: Missing expected exception. Uncaught JSException in even`

distinct messages:
- `Uncaught (in promise) AssertionError: Missing expected exception.
Uncaught (in promise) AssertionError: Missing expected exception.
Uncaught JSException in event listener: AssertionError: 'Error' === 'AbortError'`
example test: `test/parallel/test-fs-read-stream-file-handle.js`

### 1 × `Uncaught (in promise) AssertionError: The input did not match the regular expression: /ERR_STREAM_ITER_MISSING_FLAG/`

distinct messages:
- `Uncaught (in promise) AssertionError: The input did not match the regular expression: /ERR_STREAM_ITER_MISSING_FLAG/`
example test: `test/parallel/test-stream-iter-readable-interop-disabled.js`

### 1 × `Uncaught (in promise) AssertionError: The input did not match the regular expression: /No such built-in module: node:stream\/iter/`

distinct messages:
- `Uncaught (in promise) AssertionError: The input did not match the regular expression: /No such built-in module: node:stream\/iter/`
example test: `test/parallel/test-stream-iter-disabled.js`

### 1 × `Uncaught (in promise) AssertionError: undefined == true`

distinct messages:
- `Uncaught (in promise) AssertionError: undefined == true`
example test: `test/parallel/test-stream-iter-namespace.js`

### 1 × `Uncaught (in promise) AssertionError: undefined === <str>`

distinct messages:
- `Uncaught (in promise) AssertionError: undefined === 'ERR_VM_DYNAMIC_IMPORT_CALLBACK_MISSING'`
example test: `test/parallel/test-vm-module-dynamic-import.js`

### 1 × `Uncaught (in promise) AssertionError: undefined deepStrictEqual [<n>, <n>, <n>, <n>, <n>, …] Uncaught (in promise) AssertionError: <n> deepStrictEqual [<n>, <n>`

distinct messages:
- `Uncaught (in promise) AssertionError: undefined deepStrictEqual [97, 115, 121, 110, 99, …]
Uncaught (in promise) AssertionError: 10 deepStrictEqual [10, 20]
Uncaught (in promise) AssertionError: 'h' deepStrictEqual [104, 101, 108, 108, 111, …]
Uncaught (in promise) AssertionError: 2 === 1
AssertionE`
example test: `test/parallel/test-stream-iter-from-async.js`

### 1 × `Uncaught (in promise) AssertionError: undefined deepStrictEqual { foo: <str> }`

distinct messages:
- `Uncaught (in promise) AssertionError: undefined deepStrictEqual { foo: 'bar' }`
example test: `test/parallel/test-diagnostics-channel-tracing-channel-promise-run-stores.js`

### 1 × `Uncaught (in promise) Error: boom Uncaught (in promise) TypeError: Cannot read property <str> of null`

distinct messages:
- `Uncaught (in promise) Error: boom
Uncaught (in promise) TypeError: Cannot read property 'signal' of null`
example test: `test/parallel/test-events-once.js`

### 1 × `Uncaught (in promise) Error: Command failed AssertionError: false == true at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `Uncaught (in promise) Error: Command failed
AssertionError: false == true
    at :anonymous (test-child-process-promisified.js:13:3)
    at :program (test-child-process-promisified.js:1:1)`
example test: `test/parallel/test-child-process-promisified.js`

### 1 × `Uncaught (in promise) Error: Command failed AssertionError: Missing expected exception. at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `Uncaught (in promise) Error: Command failed
AssertionError: Missing expected exception.
    at :anonymous (test-child-process-execFile-promisified-abortController.js:44:3)
    at :program (test-child-process-execFile-promisified-abortController.js:1:1)`
example test: `test/parallel/test-child-process-execFile-promisified-abortController.js`

### 1 × `Uncaught (in promise) Error: escaped timeout at <n> milliseconds! AssertionError: Got unwanted exception: escaped timeout at <n> milliseconds! at :anonymous (<l`

distinct messages:
- `Uncaught (in promise) Error: escaped timeout at 2007 milliseconds!
AssertionError: Got unwanted exception: escaped timeout at 2001 milliseconds!
    at :anonymous (test-vm-timeout-escape-promise.js:27:1)
    at :program (test-vm-timeout-escape-promise.js:1:1)`
example test: `test/parallel/test-vm-timeout-escape-promise.js`

### 1 × `Uncaught (in promise) Error: escaped timeout at <n> milliseconds! AssertionError: Missing expected exception. at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `Uncaught (in promise) Error: escaped timeout at 2001 milliseconds!
AssertionError: Missing expected exception.
    at :anonymous (test-vm-timeout-escape-promise-2.js:26:1)
    at :program (test-vm-timeout-escape-promise-2.js:1:1)`
example test: `test/parallel/test-vm-timeout-escape-promise-2.js`

### 1 × `Uncaught (in promise) Error: foo Uncaught (in promise) AssertionError: undefined === { members: [] } Uncaught (in promise) AssertionError: undefined === { membe`

distinct messages:
- `Uncaught (in promise) Error: foo
Uncaught (in promise) AssertionError: undefined === { members: [] }
Uncaught (in promise) AssertionError: undefined === { members: [] }
Uncaught (in promise) AssertionError: undefined === { members: [] }
Uncaught (in promise) AssertionError: undefined === { members: `
example test: `test/parallel/test-domain-promise.js`

### 1 × `Uncaught (in promise) Error: kaboom Uncaught (in promise) Error: kaboom Uncaught (in promise) Error: kaboom Uncaught (in promise) Error: kaboom`

distinct messages:
- `Uncaught (in promise) Error: kaboom
Uncaught (in promise) Error: kaboom
Uncaught (in promise) Error: kaboom
Uncaught (in promise) Error: kaboom`
example test: `test/parallel/test-stream-catch-rejections.js`

### 1 × `Uncaught (in promise) Error: native decompress_finish rejected the input as malformed`

distinct messages:
- `Uncaught (in promise) Error: native decompress_finish rejected the input as malformed`
example test: `test/parallel/test-zlib-reject-garbage-after-end.js`

### 1 × `Uncaught (in promise) Error: node:worker_threads: postMessageToThread is not implemented yet in Elide`

distinct messages:
- `Uncaught (in promise) Error: node:worker_threads: postMessageToThread is not implemented yet in Elide`
example test: `test/parallel/test-worker-messaging.js`

### 1 × `Uncaught (in promise) Error: Test minor gc event failed`

distinct messages:
- `Uncaught (in promise) Error: Test minor gc event failed`
example test: `test/parallel/test-performance-gc-minor-ms.js`

### 1 × `Uncaught (in promise) Object{} Uncaught (in promise) AssertionError: Got unwanted exception: undefined`

distinct messages:
- `Uncaught (in promise) Object{}
Uncaught (in promise) AssertionError: Got unwanted exception: undefined`
example test: `test/parallel/test-fs-promises-file-handle-read-worker.js`

### 1 × `Uncaught (in promise) ReferenceError: inner is not defined Uncaught (in promise) ReferenceError: inner is not defined`

distinct messages:
- `Uncaught (in promise) ReferenceError: inner is not defined
Uncaught (in promise) ReferenceError: inner is not defined`
example test: `test/parallel/test-vm-module-after-evaluate.js`

### 1 × `Uncaught (in promise) ReferenceError: loop is not defined`

distinct messages:
- `Uncaught (in promise) ReferenceError: loop is not defined`
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

### 1 × `Uncaught (in promise) SyntaxError: SyntaxError: Variable <str> has already been declared`

distinct messages:
- `Uncaught (in promise) SyntaxError: SyntaxError: Variable "__filename" has already been declared`
example test: `test/parallel/test-worker-track-unmanaged-fds.js`

### 1 × `Uncaught (in promise) true`

distinct messages:
- `Uncaught (in promise) true`
example test: `test/parallel/test-fs-promisified.js`

### 1 × `Uncaught (in promise) TypeError: arrayBufferSync is not a function`

distinct messages:
- `Uncaught (in promise) TypeError: arrayBufferSync is not a function`
example test: `test/parallel/test-stream-iter-consumers-bytes.js`

### 1 × `Uncaught (in promise) TypeError: Cannot read property <str> of undefined AssertionError: <n> === <n> at Function.strictEqual (native) at Immediate.<anonymous> (`

distinct messages:
- `Uncaught (in promise) TypeError: Cannot read property 'signal' of undefined
AssertionError: 0 === 2
    at Function.strictEqual (native)
    at Immediate.<anonymous> (test-stream-filter.js:137:12)
    at Immediate._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
  `
example test: `test/parallel/test-stream-filter.js`

### 1 × `Uncaught (in promise) TypeError: Cannot read property <str> of undefined AssertionError: Got unwanted exception: Cannot read property <str> of undefined at test`

distinct messages:
- `Uncaught (in promise) TypeError: Cannot read property 'from' of undefined
AssertionError: Got unwanted exception: Cannot read property 'from' of undefined
    at testShareFromRejectsNonStreamable (test-stream-iter-share-from.js:30:3)
    at :anonymous (test-stream-iter-share-from.js:231:3)
    at :p`
example test: `test/parallel/test-stream-iter-share-from.js`

### 1 × `Uncaught (in promise) TypeError: Cannot read property <str> of undefined AssertionError: Got unwanted exception: map: fn must be a function at :anonymous (<loc>`

distinct messages:
- `Uncaught (in promise) TypeError: Cannot read property 'signal' of undefined
AssertionError: Got unwanted exception: map: fn must be a function
    at :anonymous (test-stream-map.js:346:3)
    at :program (test-stream-map.js:1:1)`
example test: `test/parallel/test-stream-map.js`

### 1 × `Uncaught (in promise) TypeError: Cannot read property <str> of undefined Uncaught (in promise) TypeError: Cannot read property <str> of undefined Uncaught (in p`

distinct messages:
- `Uncaught (in promise) TypeError: Cannot read property 'from' of undefined
Uncaught (in promise) TypeError: Cannot read property 'from' of undefined
Uncaught (in promise) TypeError: Cannot read property 'from' of undefined
Uncaught (in promise) TypeError: Cannot read property 'from' of undefined
Unca`
example test: `test/parallel/test-stream-iter-broadcast-from.js`

### 1 × `Uncaught (in promise) TypeError: CompressionStream: chunk is not a BufferSource Uncaught (in promise) AssertionError: Got rejection that did not match expected:`

distinct messages:
- `Uncaught (in promise) TypeError: CompressionStream: chunk is not a BufferSource
Uncaught (in promise) AssertionError: Got rejection that did not match expected: TypeError: CompressionStream: chunk is not a BufferSource
Uncaught (in promise) TypeError: DecompressionStream: chunk is not a BufferSource`
example test: `test/parallel/test-webstreams-compression-bad-chunks.js`

### 1 × `Uncaught (in promise) TypeError: duplex is not a function`

distinct messages:
- `Uncaught (in promise) TypeError: duplex is not a function`
example test: `test/parallel/test-stream-iter-duplex.js`

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

### 1 × `Uncaught (in promise) TypeError: GCProfiler is not a constructor TypeError: TypeError: (intermediate value).gc is not a function`

distinct messages:
- `Uncaught (in promise) TypeError: GCProfiler is not a constructor
TypeError: TypeError: (intermediate value).gc is not a function`
example test: `test/parallel/test-v8-collect-gc-profile-in-worker.js`

### 1 × `Uncaught (in promise) TypeError: inflate.flush is not a function`

distinct messages:
- `Uncaught (in promise) TypeError: inflate.flush is not a function`
example test: `test/parallel/test-zlib-write-after-end.js`

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

### 1 × `Uncaught (in promise) TypeError: share is not a function`

distinct messages:
- `Uncaught (in promise) TypeError: share is not a function`
example test: `test/parallel/test-stream-iter-share-async.js`

### 1 × `Uncaught (in promise) TypeError: shareSync is not a function Uncaught (in promise) TypeError: shareSync is not a function TypeError: shareSync is not a function`

distinct messages:
- `Uncaught (in promise) TypeError: shareSync is not a function
Uncaught (in promise) TypeError: shareSync is not a function
TypeError: shareSync is not a function
    at testShareSyncCancel (test-stream-iter-share-sync.js:47:18)
    at :anonymous (test-stream-iter-share-sync.js:157:3)
    at :program `
example test: `test/parallel/test-stream-iter-share-sync.js`

### 1 × `Uncaught (in promise) TypeError: tapSync is not a function Uncaught (in promise) TypeError: tap is not a function Uncaught (in promise) TypeError: push is not a`

distinct messages:
- `Uncaught (in promise) TypeError: tapSync is not a function
Uncaught (in promise) TypeError: tap is not a function
Uncaught (in promise) TypeError: push is not a function
Uncaught (in promise) TypeError: tap is not a function
TypeError: tapSync is not a function
    at testTapSyncErrorPropagation (te`
example test: `test/parallel/test-stream-iter-consumers-tap.js`

### 1 × `Uncaught (in promise) TypeError: The <str> argument must be of type string or an instance of Buffer or URL. Received an instance of Object`

distinct messages:
- `Uncaught (in promise) TypeError: The "path" argument must be of type string or an instance of Buffer or URL. Received an instance of Object`
example test: `test/parallel/test-fs-promises-file-handle-writeFile.js`

### 1 × `Uncaught (in promise) TypeError: The <str> argument must be of type string or an instance of Buffer or URL. Received undefined`

distinct messages:
- `Uncaught (in promise) TypeError: The "path" argument must be of type string or an instance of Buffer or URL. Received undefined`
example test: `test/parallel/test-fs-promises-statfs-validate-path.js`

### 1 × `Uncaught (in promise) TypeError: The <str> argument must be of type string or an instance of Buffer, TypedArray, or DataView. Received type string (<str>) Uncau`

distinct messages:
- `Uncaught (in promise) TypeError: The "data" argument must be of type string or an instance of Buffer, TypedArray, or DataView. Received type string ('false')
Uncaught (in promise) TypeError: The "data" argument must be of type string or an instance of Buffer, TypedArray, or DataView. Received type s`
example test: `test/parallel/test-fs-append-file.js`

### 1 × `Uncaught (in promise) TypeError: transform is not a function`

distinct messages:
- `Uncaught (in promise) TypeError: transform is not a function`
example test: `test/parallel/test-stream-iter-pull-async.js`

### 1 × `Uncaught JSException in event listener: AssertionError: <str> === <str> AssertionError: Got unwanted exception: The <str> argument must be of type number. Recei`

distinct messages:
- `Uncaught JSException in event listener: AssertionError: 'undefined' === 'number'
AssertionError: Got unwanted exception: The "fd" argument must be of type number. Received null
    at Function.throws (native)
    at EventEmitter.<anonymous> (test-worker-cleanup-handles.js:22:12)
    at EventEmitter.`
example test: `test/parallel/test-worker-cleanup-handles.js`

### 1 × `Uncaught JSException in event listener: AssertionError: function should not have been called at <loc> called with arguments: { hello: <str> } AssertionError: un`

distinct messages:
- `Uncaught JSException in event listener: AssertionError: function should not have been called at test-worker-message-port-receive-message.js:22
called with arguments: { hello: 'world' }
AssertionError: undefined deepStrictEqual { message: { hello: 'world' } }
    at :anonymous (test-worker-message-po`
example test: `test/parallel/test-worker-message-port-receive-message.js`

### 1 × `Uncaught JSException in event listener: AssertionError: function should not have been called at <loc> called with arguments: <str> TypeError: TypeError: (interm`

distinct messages:
- `Uncaught JSException in event listener: AssertionError: function should not have been called at test-worker-message-port-terminate-transfer-list.js:11
called with arguments: 'UNREACHABLE'
TypeError: TypeError: (intermediate value).kill is not a function`
example test: `test/parallel/test-worker-message-port-terminate-transfer-list.js`

### 1 × `Uncaught JSException in event listener: RangeError: Maximum call stack size exceeded Uncaught JSException in event listener: RangeError: Maximum call stack size`

distinct messages:
- `Uncaught JSException in event listener: RangeError: Maximum call stack size exceeded
Uncaught JSException in event listener: RangeError: Maximum call stack size exceeded
Uncaught JSException in event listener: RangeError: Maximum call stack size exceeded
Uncaught IndexOutOfBoundsException in event l`
example test: `test/parallel/test-whatwg-events-add-event-listener-options-signal.js`

### 1 × `Uncaught JSException in event listener: TypeError: Cannot read property <str> of undefined Uncaught JSException in event listener: AssertionError: undefined ===`

distinct messages:
- `Uncaught JSException in event listener: TypeError: Cannot read property 'name' of undefined
Uncaught JSException in event listener: AssertionError: undefined === 'boom'
TypeError: Cannot read property 'name' of undefined
    at EventEmitter.<anonymous> (test-child-process-spawn-controller.js:103:24)`
example test: `test/parallel/test-child-process-spawn-controller.js`

### 1 × `undefined at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `undefined
    at :anonymous (test-event-emitter-no-error-provided-to-error-event.js:35:3)
    at :program (test-event-emitter-no-error-provided-to-error-event.js:1:1)`
example test: `test/parallel/test-event-emitter-no-error-provided-to-error-event.js`

## By feature

| count | feature |
|---:|---|
| 177 | node:http |
| 160 | node:streams |
| 95 | node:fs |
| 85 | node:worker-threads |
| 63 | node:process |
| 62 | node:net |
| 59 | node:vm |
| 52 | node:child-process |
| 44 | node:zlib |
| 43 | node:module-loading |
| 36 | node:dgram |
| 36 | node:domain |
| 34 | node:buffer |
| 28 | node:async-hooks |
| 27 | node:diagnostics-channel |
| 25 | node:events |
| 25 | node:url |
| 23 | node:web-globals |
| 20 | node:timers |
| 18 | node:dns |
| 17 | node:util |
| 16 | node:readline |
| 14 | node:console |
| 14 | node:perf-hooks |
| 13 | node:assert |
| 13 | node:v8 |
| 4 | node:os |
| 3 | node:intl |
| 3 | node:querystring |
| 2 | node:path |
| 1 | node:tty |
