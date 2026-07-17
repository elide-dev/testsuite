# Impact-ordered failures

## By root-cause signature

### 64 × `TypeError: Cannot load module: <str> at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: Cannot load module: 'http'
    at :anonymous (test-async-hooks-execution-async-resource-await.js:7:31)
    at :program (test-async-hooks-execution-async-resource-await.js:1:1)`
- `TypeError: Cannot load module: 'http'
    at :anonymous (test-async-hooks-execution-async-resource.js:6:31)
    at :program (test-async-hooks-execution-async-resource.js:1:1)`
- `TypeError: Cannot load module: 'http'
    at :anonymous (test-async-hooks-http-parser-destroy.js:5:14)
    at :program (test-async-hooks-http-parser-destroy.js:1:1)`
- `TypeError: Cannot load module: 'node:http'
    at :anonymous (test-async-local-storage-http-agent.js:5:14)
    at :program (test-async-local-storage-http-agent.js:1:1)`
- `TypeError: Cannot load module: '_http_common'
    at :anonymous (test-async-local-storage-http-parser-leak.js:8:45)
    at :program (test-async-local-storage-http-parser-leak.js:1:1)`
example test: `test/parallel/test-async-hooks-execution-async-resource-await.js`

### 36 × `AssertionError: Missing expected exception at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Missing expected exception
    at :anonymous (test-async-hooks-asyncresource-constructor.js:15:1)
    at :program (test-async-hooks-asyncresource-constructor.js:1:1)`
- `AssertionError: Missing expected exception
    at :anonymous (test-buffer-new.js:6:1)
    at :program (test-buffer-new.js:1:1)`
- `AssertionError: Missing expected exception
    at :anonymous (test-buffer-no-negative-allocation.js:13:1)
    at :program (test-buffer-no-negative-allocation.js:1:1)`
- `AssertionError: Missing expected exception
    at :anonymous (test-buffer-set-inspect-max-bytes.js:11:3)
    at :program (test-buffer-set-inspect-max-bytes.js:1:1)`
- `AssertionError: Missing expected exception
    at :anonymous (test-buffer-tostring.js:32:3)
    at :program (test-buffer-tostring.js:1:1)`
example test: `test/parallel/test-async-hooks-asyncresource-constructor.js`

### 34 × `Node API test timed out`

distinct messages:
- `Node API test timed out`
example test: `test/parallel/test-fs-promises-watch.js`

### 31 × `TypeError: The worker script or module filename must be an absolute path or a relative path starting with <str> or <str>. Received <str>. at :anonymous (<loc>) `

distinct messages:
- `TypeError: The worker script or module filename must be an absolute path or a relative path starting with './' or '../'. Received "unknown".
    at :anonymous (test-process-execve-worker-threads.js:12:3)
    at :program (test-process-execve-worker-threads.js:1:1)`
- `TypeError: The worker script or module filename must be an absolute path or a relative path starting with './' or '../'. Received "unknown".
    at :anonymous (test-worker-console-listeners.js:10:20)
    at :program (test-worker-console-listeners.js:1:1)`
- `TypeError: The worker script or module filename must be an absolute path or a relative path starting with './' or '../'. Received "unknown".
    at :anonymous (test-worker-exit-heapsnapshot.js:11:18)
    at :program (test-worker-exit-heapsnapshot.js:1:1)`
- `TypeError: The worker script or module filename must be an absolute path or a relative path starting with './' or '../'. Received "unknown".
    at :anonymous (test-worker-exit-from-uncaught-exception.js:12:13)
    at :program (test-worker-exit-from-uncaught-exception.js:1:1)`
- `TypeError: The worker script or module filename must be an absolute path or a relative path starting with './' or '../'. Received "unknown".
    at :anonymous (test-worker-fs-stat-watcher.js:12:18)
    at :program (test-worker-fs-stat-watcher.js:1:1)`
example test: `test/parallel/test-process-execve-worker-threads.js`

### 20 × `AssertionError: <str> === <str> at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: 'undefined' === 'number'
    at :anonymous (test-buffer-constants.js:8:1)
    at :program (test-buffer-constants.js:1:1)`
- `AssertionError: '<Buffer 31 32 33 34>' === '<Buffer 31 32 ... 2 more bytes>'
    at :anonymous (test-buffer-inspect.js:38:1)
    at :program (test-buffer-inspect.js:1:1)`
- `AssertionError: 'abc' === ''
    at :anonymous (test-buffer-tostring-range.js:10:1)
    at :program (test-buffer-tostring-range.js:1:1)`
- `AssertionError: '' === 'default: 1 '
    at :anonymous (test-console-count.js:13:1)
    at :program (test-console-count.js:1:1)`
- `AssertionError: 'Hello 42 ' === 'Hello [33m42[39m '
    at :anonymous (test-console-tty-colors-per-stream.js:22:1)
    at :program (test-console-tty-colors-per-stream.js:1:1)`
example test: `test/parallel/test-buffer-constants.js`

### 17 × `AssertionError: false == true at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: false == true
    at :anonymous (test-buffer-equals.js:15:1)
    at :program (test-buffer-equals.js:1:1)`
- `AssertionError: false == true
    at :anonymous (test-buffer-includes.js:14:1)
    at :program (test-buffer-includes.js:1:1)`
- `AssertionError: false == true
    at :anonymous (test-buffer-parent-property.js:11:1)
    at :program (test-buffer-parent-property.js:1:1)`
- `AssertionError: false == true
    at :anonymous (test-buffer-safe-unsafe.js:14:1)
    at :program (test-buffer-safe-unsafe.js:1:1)`
- `AssertionError: false == true
    at :anonymous (test-buffer-writefloat.js:12:1)
    at :program (test-buffer-writefloat.js:1:1)`
example test: `test/parallel/test-buffer-equals.js`

### 14 × `AssertionError: <n> === <n> at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: 0 === 2
    at :anonymous (test-buffer-badhex.js:10:3)
    at :program (test-buffer-badhex.js:1:1)`
- `AssertionError: 8 === 0
    at :anonymous (test-buffer-copy-immutable.js:19:3)
    at :program (test-buffer-copy-immutable.js:1:1)`
- `AssertionError: 1 === 0
    at :anonymous (test-events-listener-count-with-listener.js:19:1)
    at :program (test-events-listener-count-with-listener.js:1:1)`
- `AssertionError: 0 === 12
    at :anonymous (test-process-getactiveresources-track-active-requests.js:11:1)
    at :program (test-process-getactiveresources-track-active-requests.js:1:1)`
- `AssertionError: 0 === 100
    at :anonymous (test-process-getactiveresources-track-multiple-timers.js:12:1)
    at :program (test-process-getactiveresources-track-multiple-timers.js:1:1)`
example test: `test/parallel/test-buffer-badhex.js`

### 14 × `Error: node:child_process: spawnSync() is not implemented yet in Elide at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `Error: node:child_process: spawnSync() is not implemented yet in Elide
    at :anonymous (test-async-hooks-stack-overflow-nested-async.js:67:18)
    at :program (test-async-hooks-stack-overflow-nested-async.js:1:1)`
- `Error: node:child_process: spawnSync() is not implemented yet in Elide
    at :anonymous (test-async-hooks-stack-overflow-try-catch.js:36:18)
    at :program (test-async-hooks-stack-overflow-try-catch.js:1:1)`
- `Error: node:child_process: spawnSync() is not implemented yet in Elide
    at :anonymous (test-async-hooks-stack-overflow.js:35:18)
    at :program (test-async-hooks-stack-overflow.js:1:1)`
- `Error: node:child_process: spawnSync() is not implemented yet in Elide
    at :anonymous (test-fs-realpath-pipe.js:31:17)
    at :program (test-fs-realpath-pipe.js:1:1)`
- `Error: node:child_process: spawnSync() is not implemented yet in Elide
    at :anonymous (test-fs-utimes-y2K38.js:16:23)
    at :program (test-fs-utimes-y2K38.js:1:1)`
example test: `test/parallel/test-async-hooks-stack-overflow-nested-async.js`

### 14 × `TypeError: Cannot read property <str> of undefined at :anonymous (<loc>) at :program (<loc>)`

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
- `TypeError: Cannot read property 'prototype' of undefined
    at :anonymous (test-event-emitter-prepend.js:30:43)
    at :program (test-event-emitter-prepend.js:1:1)`
- `TypeError: Cannot read property 'hasOwnProperty' of undefined
    at :anonymous (test-event-emitter-special-event-names.js:12:20)
    at :program (test-event-emitter-special-event-names.js:1:1)`
example test: `test/parallel/test-async-hooks-promise.js`

### 13 × `Mismatched noop function calls. Expected exactly <n>, actual <n>. at Proxy.mustCall (<loc>) at <loc> at <loc>`

distinct messages:
- `Mismatched noop function calls. Expected exactly 1, actual 0.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at test-async-hooks-enable-disable.js:7:16
    at test-async-hooks-enable-disable.js:1:1`
- `Mismatched noop function calls. Expected exactly 1, actual 0.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at test-diagnostics-channel-tracing-channel-promise-error.js:36:15
    at test-diagnostics-channel-tracing-channel-promise-error.js:1:1`
- `Mismatched noop function calls. Expected exactly 1, actual 2.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at test-event-emitter-once.js:48:20
    at test-event-emitter-once.js:1:1`
- `Mismatched noop function calls. Expected exactly 1, actual 0.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at test-fs-promises-mkdtempDisposable.js:97:18
    at test-fs-promises-mkdtempDisposable.js:1:1`
- `Mismatched noop function calls. Expected exactly 1, actual 0.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at test-fs-read-stream-patch-open.js:5:39
    at test-fs-read-stream-patch-open.js:1:1`
example test: `test/parallel/test-async-hooks-enable-disable.js`

### 10 × `Error: node:child_process: spawn() is not implemented yet in Elide at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `Error: node:child_process: spawn() is not implemented yet in Elide
    at :anonymous (test-fs-syncwritestream.js:29:14)
    at :program (test-fs-syncwritestream.js:1:1)`
- `Error: node:child_process: spawn() is not implemented yet in Elide
    at :anonymous (test-process-argv-0.js:29:17)
    at :program (test-process-argv-0.js:1:1)`
- `Error: node:child_process: spawn() is not implemented yet in Elide
    at :anonymous (test-process-exec-argv.js:41:19)
    at :program (test-process-exec-argv.js:1:1)`
- `Error: node:child_process: spawn() is not implemented yet in Elide
    at :anonymous (test-process-external-stdio-close-spawn.js:20:17)
    at :program (test-process-external-stdio-close-spawn.js:1:1)`
- `Error: node:child_process: spawn() is not implemented yet in Elide
    at :anonymous (test-process-kill-null.js:27:13)
    at :program (test-process-kill-null.js:1:1)`
example test: `test/parallel/test-fs-syncwritestream.js`

### 10 × `Mismatched <anonymous> function calls. Expected exactly <n>, actual <n>. at Proxy.mustCall (<loc>) at <loc> at <loc>`

distinct messages:
- `Mismatched <anonymous> function calls. Expected exactly 1, actual 0.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at test-diagnostics-channel-worker-threads.js:7:39
    at test-diagnostics-channel-worker-threads.js:1:1`
- `Mismatched <anonymous> function calls. Expected exactly 1, actual 0.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at test-fs-ready-event-stream.js:9:31
    at test-fs-ready-event-stream.js:1:1`
- `Mismatched <anonymous> function calls. Expected exactly 1, actual 0.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at test-stream-err-multiple-callback-construction.js:20:29
    at test-stream-err-multiple-callback-construction.js:1:1`
- `Mismatched <anonymous> function calls. Expected exactly 1, actual 0.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at test-stream-pipeline-queued-end-in-destroy.js:30:35
    at test-stream-pipeline-queued-end-in-destroy.js:1:1`
- `Mismatched <anonymous> function calls. Expected exactly 1, actual 0.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at test-stream-transform-flush-data.js:26:21
    at test-stream-transform-flush-data.js:1:1`
example test: `test/parallel/test-diagnostics-channel-worker-threads.js`

### 9 × `Mismatched noop function calls. Expected exactly <n>, actual <n>. at Proxy.mustCall (<loc>) at <loc> at <loc> Mismatched noop function calls. Expected exactly <`

distinct messages:
- `Mismatched noop function calls. Expected exactly 2, actual 0.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at test-async-hooks-disable-during-promise.js:11:16
    at test-async-hooks-disable-during-promise.js:1:1
Mismatched noop function calls`
- `Mismatched noop function calls. Expected exactly 1, actual 0.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at test-fs-stream-destroy-emit-error.js:11:29
    at test-fs-stream-destroy-emit-error.js:1:1
Mismatched noop function calls. Expected e`
- `Mismatched noop function calls. Expected exactly 1, actual 2.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at test-stream-error-once.js:7:31
    at test-stream-error-once.js:1:1
Mismatched noop function calls. Expected exactly 1, actual 2.
   `
- `Mismatched noop function calls. Expected exactly 1, actual 0.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at test-stream-pipe-flow.js:25:23
    at test-stream-pipe-flow.js:1:1
Mismatched noop function calls. Expected exactly 1, actual 0.
    `
- `Mismatched noop function calls. Expected exactly 1, actual 0.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at test-stream-pipe-multiple-pipes.js:21:28
    at test-stream-pipe-multiple-pipes.js:1:1
Mismatched noop function calls. Expected exact`
example test: `test/parallel/test-async-hooks-disable-during-promise.js`

### 8 × `AssertionError: undefined === <n> at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: undefined === 20
    at :anonymous (test-buffer-copy.js:120:5)
    at :program (test-buffer-copy.js:1:1)`
- `AssertionError: undefined === 0
    at :anonymous (test-buffer-zero-fill.js:11:3)
    at :program (test-buffer-zero-fill.js:1:1)`
- `AssertionError: undefined === 1
    at :anonymous (test-fs-read-stream-inherit.js:73:3)
    at :program (test-fs-read-stream-inherit.js:1:1)`
- `AssertionError: undefined === 0
    at :anonymous (test-stream-writableState-uncorked-bufferedRequestCount.js:21:1)
    at :program (test-stream-writableState-uncorked-bufferedRequestCount.js:1:1)`
- `AssertionError: undefined === 4
    at :anonymous (test-vm-context-property-forwarding.js:33:1)
    at :program (test-vm-context-property-forwarding.js:1:1)`
example test: `test/parallel/test-buffer-copy.js`

### 7 × `AssertionError: Missing expected exception at :=> (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Missing expected exception
    at :=> (test-async-local-storage-bind.js:8:3)
    at :anonymous (test-async-local-storage-bind.js:7:1)
    at :program (test-async-local-storage-bind.js:1:1)`
- `AssertionError: Missing expected exception
    at :=> (test-buffer-bytelength.js:14:3)
    at :anonymous (test-buffer-bytelength.js:8:1)
    at :program (test-buffer-bytelength.js:1:1)`
- `AssertionError: Missing expected exception
    at :=> (test-dns-setservers-type-check.js:26:5)
    at :anonymous (test-dns-setservers-type-check.js:11:3)
    at :program (test-dns-setservers-type-check.js:1:1)`
- `AssertionError: Missing expected exception
    at :=> (test-event-capture-rejections.js:15:5)
    at :anonymous (test-event-capture-rejections.js:14:3)
    at :program (test-event-capture-rejections.js:1:1)`
- `AssertionError: Missing expected exception
    at :=> (test-fs-chown-type-check.js:25:3)
    at :anonymous (test-fs-chown-type-check.js:24:1)
    at :program (test-fs-chown-type-check.js:1:1)`
example test: `test/parallel/test-async-local-storage-bind.js`

### 6 × `Error: ENOENT: no such file or directory, open <str> at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `Error: ENOENT: no such file or directory, open 'unknown'
    at :anonymous (test-fs-close.js:8:12)
    at :program (test-fs-close.js:1:1)`
- `Error: ENOENT: no such file or directory, open 'unknown'
    at :anonymous (test-fs-open.js:39:1)
    at :program (test-fs-open.js:1:1)`
- `Error: ENOENT: no such file or directory, open 'unknown'
    at :anonymous (test-fs-options-immutable.js:16:1)
    at :program (test-fs-options-immutable.js:1:1)`
- `Error: ENOENT: no such file or directory, open 'unknown'
    at :anonymous (test-fs-promisified.js:12:14)
    at :program (test-fs-promisified.js:1:1)`
- `Error: ENOENT: no such file or directory, open '/work/.harness/work/node-api/node-test/.tmp.567/testReadFileSyncAppend.txt'
    at :anonymous (test-fs-read-file-sync.js:56:21)
    at :program (test-fs-read-file-sync.js:1:1)`
example test: `test/parallel/test-fs-close.js`

### 6 × `Mismatched <anonymous> function calls. Expected exactly <n>, actual <n>. at Proxy.mustCall (<loc>) at <loc> at <loc> Mismatched <anonymous> function calls. Expe`

distinct messages:
- `Mismatched <anonymous> function calls. Expected exactly 1, actual 0.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at test-buffer-constructor-outside-node-modules.js:17:39
    at test-buffer-constructor-outside-node-modules.js:1:1
Mismatched <a`
- `Mismatched <anonymous> function calls. Expected exactly 1, actual 0.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at test-stream-once-readable-pipe.js:32:25
    at test-stream-once-readable-pipe.js:1:1
Mismatched <anonymous> function calls. Ex`
- `Mismatched <anonymous> function calls. Expected exactly 1, actual 0.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at test-stream-readable-emit-readable-short-stream.js:20:19
    at test-stream-readable-emit-readable-short-stream.js:1:1
Mismatc`
- `Mismatched <anonymous> function calls. Expected exactly 3, actual 1.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at test-stream-readable-emittedReadable.js:14:32
    at test-stream-readable-emittedReadable.js:1:1
Mismatched <anonymous> functi`
- `Mismatched <anonymous> function calls. Expected exactly 1, actual 0.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at test-stream-readable-event.js:40:21
    at test-stream-readable-event.js:1:1
Mismatched <anonymous> function calls. Expected e`
example test: `test/parallel/test-buffer-constructor-outside-node-modules.js`

### 5 × `AssertionError: Got unwanted exception: Cannot load module: <str> at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Got unwanted exception: Cannot load module: '/work/.harness/work/node-api/node-test/.tmp.773/test-module-cache.json'
    at :anonymous (test-module-cache.js:9:1)
    at :program (test-module-cache.js:1:1)`
- `AssertionError: Got unwanted exception: Cannot load module: 'package.json'
    at :anonymous (test-require-invalid-package.js:7:1)
    at :program (test-require-invalid-package.js:1:1)`
- `AssertionError: Got unwanted exception: Cannot load module: '../fixtures/es-modules/test-esm-ok.mjs'
    at :anonymous (test-require-mjs.js:10:1)
    at :program (test-require-mjs.js:1:1)`
- `AssertionError: Got unwanted exception: Cannot load module: 'node:unknown'
    at :anonymous (test-require-node-prefix.js:15:3)
    at :program (test-require-node-prefix.js:1:1)`
- `AssertionError: Got unwanted exception: Cannot load module: ' ab'
    at :anonymous (test-require-nul.js:8:1)
    at :program (test-require-nul.js:1:1)`
example test: `test/parallel/test-module-cache.js`

### 5 × `Error: node:child_process: exec() is not implemented yet in Elide at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `Error: node:child_process: exec() is not implemented yet in Elide
    at :anonymous (test-fs-readfile-pipe-large.js:28:1)
    at :program (test-fs-readfile-pipe-large.js:1:1)`
- `Error: node:child_process: exec() is not implemented yet in Elide
    at :anonymous (test-fs-readfile-pipe.js:46:1)
    at :program (test-fs-readfile-pipe.js:1:1)`
- `Error: node:child_process: exec() is not implemented yet in Elide
    at :anonymous (test-fs-readfilesync-pipe-large.js:26:1)
    at :program (test-fs-readfilesync-pipe-large.js:1:1)`
- `Error: node:child_process: exec() is not implemented yet in Elide
    at :anonymous (test-stream-pipeline-process.js:16:3)
    at :program (test-stream-pipeline-process.js:1:1)`
- `Error: node:child_process: exec() is not implemented yet in Elide
    at :anonymous (test-worker-init-failure.js:50:14)
    at :program (test-worker-init-failure.js:1:1)`
example test: `test/parallel/test-fs-readfile-pipe-large.js`

### 5 × `java.lang.UnsupportedOperationException: process.chdir() is not yet implemented at :anonymous (native) at :program (<loc>)`

distinct messages:
- `java.lang.UnsupportedOperationException: process.chdir() is not yet implemented
    at :anonymous (native)
    at :program (test-fs-mkdtempDisposableSync.js:1:1)`
- `java.lang.UnsupportedOperationException: process.chdir() is not yet implemented
    at :anonymous (native)
    at :program (test-require-resolve-opts-paths-relative.js:1:1)`
- `java.lang.UnsupportedOperationException: process.chdir() is not yet implemented
    at :anonymous (native)
    at :program (test-require-symlink.js:1:1)`
- `java.lang.UnsupportedOperationException: process.chdir() is not yet implemented
    at :anonymous (native)
    at :program (test-process-chdir.js:1:1)`
- `java.lang.UnsupportedOperationException: process.chdir() is not yet implemented
    at :anonymous (native)
    at :program (test-worker-process-cwd.js:1:1)`
example test: `test/parallel/test-fs-mkdtempDisposableSync.js`

### 4 × `AssertionError: Got unwanted exception: undefined at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Got unwanted exception: undefined
    at :anonymous (test-dns-resolvens-typeerror.js:33:1)
    at :program (test-dns-resolvens-typeerror.js:1:1)`
- `AssertionError: Got unwanted exception: undefined
    at :anonymous (test-event-emitter-errors.js:9:1)
    at :program (test-event-emitter-errors.js:1:1)`
- `AssertionError: Got unwanted exception: undefined
    at :anonymous (test-worker-invalid-workerdata.js:10:1)
    at :program (test-worker-invalid-workerdata.js:1:1)`
- `AssertionError: Got unwanted exception: undefined
    at :anonymous (test-worker-message-port-transfer-duplicate.js:14:3)
    at :program (test-worker-message-port-transfer-duplicate.js:1:1)`
example test: `test/parallel/test-dns-resolvens-typeerror.js`

### 4 × `AssertionError: Missing expected exception at :=> (<loc>) at :=> (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Missing expected exception
    at :=> (test-async-hooks-constructor.js:13:7)
    at :=> (test-async-hooks-constructor.js:12:5)
    at :anonymous (test-async-hooks-constructor.js:10:1)
    at :program (test-async-hooks-constructor.js:1:1)`
- `AssertionError: Missing expected exception
    at :=> (test-buffer-readuint.js:17:7)
    at :=> (test-buffer-readuint.js:16:5)
    at :anonymous (test-buffer-readuint.js:10:3)
    at :program (test-buffer-readuint.js:1:1)`
- `AssertionError: Missing expected exception
    at :=> (test-buffer-readint.js:17:7)
    at :=> (test-buffer-readint.js:16:5)
    at :anonymous (test-buffer-readint.js:10:3)
    at :program (test-buffer-readint.js:1:1)`
- `AssertionError: Missing expected exception
    at :=> (test-buffer-writeuint.js:21:7)
    at :=> (test-buffer-writeuint.js:20:5)
    at :anonymous (test-buffer-writeuint.js:14:3)
    at :program (test-buffer-writeuint.js:1:1)`
example test: `test/parallel/test-async-hooks-constructor.js`

### 4 × `AssertionError: undefined === <str> at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: undefined === 'before'
    at :anonymous (test-diagnostics-channel-bounded-channel-scope-error.js:65:3)
    at :program (test-diagnostics-channel-bounded-channel-scope-error.js:1:1)`
- `AssertionError: undefined === 'ENODATA'
    at :anonymous (test-dns-promises-exists.js:10:1)
    at :program (test-dns-promises-exists.js:1:1)`
- `AssertionError: undefined === 'undefined'
    at :anonymous (test-process-env-delete.js:8:1)
    at :program (test-process-env-delete.js:1:1)`
- `AssertionError: undefined === 'undefined'
    at :anonymous (test-process-env-deprecation.js:20:1)
    at :program (test-process-env-deprecation.js:1:1)`
example test: `test/parallel/test-diagnostics-channel-bounded-channel-scope-error.js`

### 4 × `DOMException at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `DOMException
    at :anonymous (test-worker-message-channel.js:17:3)
    at :program (test-worker-message-channel.js:1:1)`
- `DOMException
    at :anonymous (test-worker-message-port-arraybuffer.js:14:3)
    at :program (test-worker-message-port-arraybuffer.js:1:1)`
- `DOMException
    at :anonymous (test-worker-message-port-message-port-transferring.js:13:3)
    at :program (test-worker-message-port-message-port-transferring.js:1:1)`
- `DOMException
    at :anonymous (test-worker-message-port-multiple-sharedarraybuffers.js:17:1)
    at :program (test-worker-message-port-multiple-sharedarraybuffers.js:1:1)`
example test: `test/parallel/test-worker-message-channel.js`

### 4 × `Error: node:child_process: fork() is not implemented yet in Elide at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `Error: node:child_process: fork() is not implemented yet in Elide
    at :anonymous (test-fs-write-stream-patch-open.js:16:17)
    at :program (test-fs-write-stream-patch-open.js:1:1)`
- `Error: node:child_process: fork() is not implemented yet in Elide
    at :anonymous (test-process-external-stdio-close.js:17:17)
    at :program (test-process-external-stdio-close.js:1:1)`
- `Error: node:child_process: fork() is not implemented yet in Elide
    at :anonymous (test-process-redirect-warnings-env.js:20:1)
    at :program (test-process-redirect-warnings-env.js:1:1)`
- `Error: node:child_process: fork() is not implemented yet in Elide
    at :anonymous (test-process-redirect-warnings.js:20:1)
    at :program (test-process-redirect-warnings.js:1:1)`
example test: `test/parallel/test-fs-write-stream-patch-open.js`

### 4 × `TypeError: Cannot convert a Symbol value to a string at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: Cannot convert a Symbol value to a string
    at :anonymous (test-event-emitter-max-listeners-warning-for-symbol.js:24:1)
    at :program (test-event-emitter-max-listeners-warning-for-symbol.js:1:1)`
- `TypeError: Cannot convert a Symbol value to a string
    at :anonymous (test-event-emitter-symbols.js:11:1)
    at :program (test-event-emitter-symbols.js:1:1)`
- `TypeError: Cannot convert a Symbol value to a string
    at :anonymous (test-events-list.js:16:1)
    at :program (test-events-list.js:1:1)`
- `TypeError: Cannot convert a Symbol value to a string
    at :anonymous (test-process-emit.js:10:1)
    at :program (test-process-emit.js:1:1)`
example test: `test/parallel/test-event-emitter-max-listeners-warning-for-symbol.js`

### 4 × `TypeError: Readable.toWeb is not a function at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: Readable.toWeb is not a function
    at :anonymous (test-stream-readable-from-web-termination.js:8:36)
    at :program (test-stream-readable-from-web-termination.js:1:1)`
- `TypeError: Readable.toWeb is not a function
    at :anonymous (test-stream-readable-strategy-option.js:20:26)
    at :program (test-stream-readable-strategy-option.js:1:1)`
- `TypeError: Readable.toWeb is not a function
    at :anonymous (test-stream-readable-to-web-termination-byob.js:11:18)
    at :program (test-stream-readable-to-web-termination-byob.js:1:1)`
- `TypeError: Readable.toWeb is not a function
    at :anonymous (test-stream-readable-to-web-termination.js:12:18)
    at :program (test-stream-readable-to-web-termination.js:1:1)`
example test: `test/parallel/test-stream-readable-from-web-termination.js`

### 4 × `TypeError: receiver is not an EventEmitter at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: receiver is not an EventEmitter
    at :anonymous (test-event-emitter-get-max-listeners.js:18:1)
    at :program (test-event-emitter-get-max-listeners.js:1:1)`
- `TypeError: receiver is not an EventEmitter
    at :anonymous (test-fs-stream-construct-compat-error-read.js:26:13)
    at :program (test-fs-stream-construct-compat-error-read.js:1:1)`
- `TypeError: receiver is not an EventEmitter
    at :anonymous (test-fs-stream-construct-compat-graceful-fs.js:36:13)
    at :program (test-fs-stream-construct-compat-graceful-fs.js:1:1)`
- `TypeError: receiver is not an EventEmitter
    at :anonymous (test-fs-stream-construct-compat-old-node.js:38:13)
    at :program (test-fs-stream-construct-compat-old-node.js:1:1)`
example test: `test/parallel/test-event-emitter-get-max-listeners.js`

### 4 × `Uncaught (in promise) TypeError: Cannot read property <str> of undefined`

distinct messages:
- `Uncaught (in promise) TypeError: Cannot read property '1' of undefined`
- `Uncaught (in promise) TypeError: Cannot read property 'request' of undefined`
- `Uncaught (in promise) TypeError: Cannot read property 'from' of undefined`
- `Uncaught (in promise) TypeError: Cannot read property 'length' of undefined`
example test: `test/parallel/test-async-hooks-async-await.js`

### 4 × `Uncaught (in promise) TypeError: push is not a function`

distinct messages:
- `Uncaught (in promise) TypeError: push is not a function`
example test: `test/parallel/test-stream-iter-consumers-merge.js`

### 3 × `AssertionError: [<str>, <str>, Symbol(<n>), Symbol(<n>), Symbol(elide.vm.context)] deepStrictEqual [<str>, <str>, Symbol(<n>), Symbol(<n>)] at :anonymous (<loc>`

distinct messages:
- `AssertionError: ['a', 'b', Symbol(1), Symbol(2), Symbol(elide.vm.context)] deepStrictEqual ['a', 'b', Symbol(1), Symbol(2)]
    at :anonymous (test-vm-ownpropertynames.js:18:1)
    at :program (test-vm-ownpropertynames.js:1:1)`
- `AssertionError: ['a', 'b', Symbol(1), Symbol(2), Symbol(elide.vm.context)] deepStrictEqual ['a', 'b', Symbol(1), Symbol(2)]
    at :anonymous (test-vm-ownkeys.js:18:1)
    at :program (test-vm-ownkeys.js:1:1)`
- `AssertionError: ['a', 'b', Symbol(1), Symbol(2), Symbol(elide.vm.context)] deepStrictEqual ['a', 'b', Symbol(1), Symbol(2)]
    at :anonymous (test-vm-ownpropertysymbols.js:18:1)
    at :program (test-vm-ownpropertysymbols.js:1:1)`
example test: `test/parallel/test-vm-ownpropertynames.js`

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

### 3 × `AssertionError: false == true at :=> (<loc>) at _return (<loc>)`

distinct messages:
- `AssertionError: false == true
    at :=> (test-stream-auto-destroy.js:50:5)
    at _return (index.js:573:12)`
- `AssertionError: false == true
    at :=> (test-stream-duplex-readable-end.js:30:3)
    at _return (index.js:573:12)`
- `AssertionError: false == true
    at :=> (test-stream-pipeline-listeners.js:25:3)
    at _return (index.js:573:12)`
example test: `test/parallel/test-stream-auto-destroy.js`

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

### 3 × `AssertionError: false === true at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: false === true
    at :anonymous (test-fs-mkdir.js:134:3)
    at :program (test-fs-mkdir.js:1:1)`
- `AssertionError: false === true
    at :anonymous (test-fs-promises.js:46:1)
    at :program (test-fs-promises.js:1:1)`
- `AssertionError: false === true
    at :anonymous (test-stream-duplex-props.js:27:3)
    at :program (test-stream-duplex-props.js:1:1)`
example test: `test/parallel/test-fs-mkdir.js`

### 3 × `AssertionError: function should not have been called at <loc> at Function.fail (native) at mustNotCall (<loc>) AssertionError: function should not have been cal`

distinct messages:
- `AssertionError: function should not have been called at test-timers-destroyed.js:10
    at Function.fail (native)
    at mustNotCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:631:12)
AssertionError: function should not have been called at test-timers-destroyed.js:12
    at `
- `AssertionError: function should not have been called at test-timers-setimmediate-infinite-loop.js:17
    at Function.fail (native)
    at mustNotCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:631:12)
AssertionError: function should not have been called at test-timers-setimm`
- `AssertionError: function should not have been called at test-timers-to-primitive.js:7
    at Function.fail (native)
    at mustNotCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:631:12)
AssertionError: function should not have been called at test-timers-to-primitive.js:8
   `
example test: `test/parallel/test-timers-destroyed.js`

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

### 3 × `AssertionError: Timer should be canceled at Function.fail (native) at timerNotCanceled (<loc>) TypeError: timeout.refresh is not a function at :anonymous (<loc>`

distinct messages:
- `AssertionError: Timer should be canceled
    at Function.fail (native)
    at timerNotCanceled (test-timers-nan-duration-emit-once-per-process.js:9:10)
TypeError: timeout.refresh is not a function
    at :anonymous (test-timers-nan-duration-emit-once-per-process.js:37:3)
    at :program (test-timers`
- `AssertionError: Timer should be canceled
    at Function.fail (native)
    at timerNotCanceled (test-timers-negative-duration-warning-emit-once-per-process.js:9:10)
TypeError: timeout.refresh is not a function
    at :anonymous (test-timers-negative-duration-warning-emit-once-per-process.js:37:3)
  `
- `AssertionError: Timer should be canceled
    at Function.fail (native)
    at timerNotCanceled (test-timers-not-emit-duration-zero.js:7:10)
TypeError: timeout.refresh is not a function
    at :anonymous (test-timers-not-emit-duration-zero.js:29:3)
    at :program (test-timers-not-emit-duration-zero.`
example test: `test/parallel/test-timers-nan-duration-emit-once-per-process.js`

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

### 3 × `Error: node:child_process: execFileSync() is not implemented yet in Elide at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `Error: node:child_process: execFileSync() is not implemented yet in Elide
    at :anonymous (test-module-main-extension-lookup.js:8:1)
    at :program (test-module-main-extension-lookup.js:1:1)`
- `Error: node:child_process: execFileSync() is not implemented yet in Elide
    at :anonymous (test-module-wrap.js:9:1)
    at :program (test-module-wrap.js:1:1)`
- `Error: node:child_process: execFileSync() is not implemented yet in Elide
    at :anonymous (test-module-wrapper.js:9:1)
    at :program (test-module-wrapper.js:1:1)`
example test: `test/parallel/test-module-main-extension-lookup.js`

### 3 × `java.lang.UnsupportedOperationException: process.getuid() is not yet implemented at :anonymous (native) at :program (<loc>)`

distinct messages:
- `java.lang.UnsupportedOperationException: process.getuid() is not yet implemented
    at :anonymous (native)
    at :program (test-fs-access.js:1:1)`
- `java.lang.UnsupportedOperationException: process.getuid() is not yet implemented
    at :anonymous (native)
    at :program (test-fs-copyfile-respect-permissions.js:1:1)`
- `java.lang.UnsupportedOperationException: process.getuid() is not yet implemented
    at :anonymous (native)
    at :program (test-fs-mkdir-recursive-eaccess.js:1:1)`
example test: `test/parallel/test-fs-access.js`

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
example test: `test/parallel/test-buffer-constructor-deprecation-error.js`

### 3 × `TypeError: (intermediate value).hasUncaughtExceptionCaptureCallback is not a function at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: (intermediate value).hasUncaughtExceptionCaptureCallback is not a function
    at :anonymous (test-process-exception-capture-should-abort-on-uncaught-setflagsfromstring.js:6:20)
    at :program (test-process-exception-capture-should-abort-on-uncaught-setflagsfromstring.js:1:1)`
- `TypeError: (intermediate value).hasUncaughtExceptionCaptureCallback is not a function
    at :anonymous (test-process-exception-capture-should-abort-on-uncaught.js:6:20)
    at :program (test-process-exception-capture-should-abort-on-uncaught.js:1:1)`
- `TypeError: (intermediate value).hasUncaughtExceptionCaptureCallback is not a function
    at :anonymous (test-process-exception-capture.js:6:20)
    at :program (test-process-exception-capture.js:1:1)`
example test: `test/parallel/test-process-exception-capture-should-abort-on-uncaught-setflagsfromstring.js`

### 3 × `TypeError: Buffer.from: unsupported input type at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: Buffer.from: unsupported input type
    at :anonymous (test-buffer-from.js:29:24)
    at :program (test-buffer-from.js:1:1)`
- `TypeError: Buffer.from: unsupported input type
    at :anonymous (test-buffer-sharedarraybuffer.js:27:1)
    at :program (test-buffer-sharedarraybuffer.js:1:1)`
- `TypeError: Buffer.from: unsupported input type
    at :anonymous (test-buffer-tojson.js:18:16)
    at :program (test-buffer-tojson.js:1:1)`
example test: `test/parallel/test-buffer-from.js`

### 3 × `TypeError: Cannot convert undefined or null to object: undefined at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: Cannot convert undefined or null to object: undefined
    at :anonymous (test-event-emitter-listeners-side-effects.js:36:24)
    at :program (test-event-emitter-listeners-side-effects.js:1:1)`
- `TypeError: Cannot convert undefined or null to object: undefined
    at :anonymous (test-event-emitter-set-max-listeners-side-effects.js:30:24)
    at :program (test-event-emitter-set-max-listeners-side-effects.js:1:1)`
- `TypeError: Cannot convert undefined or null to object: undefined
    at :anonymous (test-vm-getters.js:21:24)
    at :program (test-vm-getters.js:1:1)`
example test: `test/parallel/test-event-emitter-listeners-side-effects.js`

### 3 × `TypeError: Stream is not a constructor at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: Stream is not a constructor
    at :anonymous (test-console-instance.js:29:13)
    at :program (test-console-instance.js:1:1)`
- `TypeError: Stream is not a constructor
    at :anonymous (test-stream-pipe-error-handling.js:28:18)
    at :program (test-stream-pipe-error-handling.js:1:1)`
- `TypeError: Stream is not a constructor
    at :anonymous (test-stream2-readable-legacy-drain.js:38:11)
    at :program (test-stream2-readable-legacy-drain.js:1:1)`
example test: `test/parallel/test-console-instance.js`

### 3 × `Uncaught (in promise) Error: ENOENT: no such file or directory, open <str>`

distinct messages:
- `Uncaught (in promise) Error: ENOENT: no such file or directory, open 'unknown'`
example test: `test/parallel/test-fs-filehandle-use-after-close.js`

### 3 × `Uncaught (in promise) Error: node:child_process: spawn() is not implemented yet in Elide`

distinct messages:
- `Uncaught (in promise) Error: node:child_process: spawn() is not implemented yet in Elide`
example test: `test/parallel/test-assert-esm-cjs-message-verify.js`

### 3 × `Uncaught (in promise) TypeError: broadcast is not a function`

distinct messages:
- `Uncaught (in promise) TypeError: broadcast is not a function`
example test: `test/parallel/test-stream-iter-broadcast-backpressure.js`

### 3 × `Uncaught (in promise) TypeError: foo.linkRequests is not a function`

distinct messages:
- `Uncaught (in promise) TypeError: foo.linkRequests is not a function`
example test: `test/parallel/test-vm-module-linkmodulerequests-circular.js`

### 3 × `Uncaught (in promise) TypeError: The <str> argument must be of type string or an instance of Buffer or URL. Received null`

distinct messages:
- `Uncaught (in promise) TypeError: The "path" argument must be of type string or an instance of Buffer or URL. Received null`
example test: `test/parallel/test-fs-promises-file-handle-read.js`

### 2 × `A context-aware API was called but no context is active at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `A context-aware API was called but no context is active
    at :anonymous (test-dns-lookupService-promises.js:8:1)
    at :program (test-dns-lookupService-promises.js:1:1)`
- `A context-aware API was called but no context is active
    at :anonymous (test-dns-setserver-when-querying.js:15:5)
    at :program (test-dns-setserver-when-querying.js:1:1)`
example test: `test/parallel/test-dns-lookupService-promises.js`

### 2 × `AssertionError: [] deepStrictEqual [<str>] at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: [] deepStrictEqual ['Timeout']
    at :anonymous (test-process-getactiveresources.js:9:1)
    at :program (test-process-getactiveresources.js:1:1)`
- `AssertionError: [] deepStrictEqual ['WORKER']
    at :anonymous (test-worker-messageport-hasref.js:33:1)
    at :program (test-worker-messageport-hasref.js:1:1)`
example test: `test/parallel/test-process-getactiveresources.js`

### 2 × `AssertionError: <n> === <n> at Function.strictEqual (native) at <loc> at _return (<loc>) AssertionError: <n> === <n> at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: 0 === 1
    at Function.strictEqual (native)
    at test-process-getactiveresources-track-interval-lifetime.js:12:10
    at _return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
AssertionError: 0 === 1
    at :anonymous (test-process-getactiveresources-t`
- `AssertionError: 0 === 1
    at Function.strictEqual (native)
    at test-process-getactiveresources-track-timer-lifetime.js:12:12
    at _return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
AssertionError: 0 === 1
    at :anonymous (test-process-getactiveresources-trac`
example test: `test/parallel/test-process-getactiveresources-track-interval-lifetime.js`

### 2 × `AssertionError: <str> !== <str> at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: 'artischocko' !== 'artischocko'
    at :anonymous (test-require-extensions-same-filename-as-dir-trailing-slash.js:34:1)
    at :program (test-require-extensions-same-filename-as-dir-trailing-slash.js:1:1)`
- `AssertionError: 'artischocko' !== 'artischocko'
    at :anonymous (test-require-extensions-same-filename-as-dir.js:31:1)
    at :program (test-require-extensions-same-filename-as-dir.js:1:1)`
example test: `test/parallel/test-require-extensions-same-filename-as-dir-trailing-slash.js`

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

### 2 × `AssertionError: Got unwanted exception: Object.defineProperty called on non-object at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Got unwanted exception: Object.defineProperty called on non-object
    at :anonymous (test-vm-context.js:46:1)
    at :program (test-vm-context.js:1:1)`
- `AssertionError: Got unwanted exception: Object.defineProperty called on non-object
    at :anonymous (test-vm-create-context-arg.js:27:1)
    at :program (test-vm-create-context-arg.js:1:1)`
example test: `test/parallel/test-vm-context.js`

### 2 × `AssertionError: Got unwanted exception: The <str> argument must be of type string or an instance of Buffer or URL. Received type boolean (false) at :=> (<loc>) `

distinct messages:
- `AssertionError: Got unwanted exception: The "path" argument must be of type string or an instance of Buffer or URL. Received type boolean (false)
    at :=> (test-fs-rename-type-check.js:10:3)
    at :anonymous (test-fs-rename-type-check.js:7:1)
    at :program (test-fs-rename-type-check.js:1:1)`
- `AssertionError: Got unwanted exception: The "path" argument must be of type string or an instance of Buffer or URL. Received type boolean (false)
    at :=> (test-fs-symlink.js:71:3)
    at :anonymous (test-fs-symlink.js:65:1)
    at :program (test-fs-symlink.js:1:1)`
example test: `test/parallel/test-fs-rename-type-check.js`

### 2 × `AssertionError: Got unwanted exception: The worker script or module filename must be an absolute path or a relative path starting with <str> or <str>. Received `

distinct messages:
- `AssertionError: Got unwanted exception: The worker script or module filename must be an absolute path or a relative path starting with './' or '../'. Received "unknown".
    at :anonymous (test-worker-execargv-invalid.js:17:3)
    at :program (test-worker-execargv-invalid.js:1:1)`
- `AssertionError: Got unwanted exception: The worker script or module filename must be an absolute path or a relative path starting with './' or '../'. Received "unknown".
    at :anonymous (test-worker-process-argv.js:7:3)
    at :program (test-worker-process-argv.js:1:1)`
example test: `test/parallel/test-worker-execargv-invalid.js`

### 2 × `AssertionError: undefined === <str> at w._write (<loc>) at _return (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: undefined === 'buffer'
    at w._write (test-stream3-cork-end.js:25:3)
    at _return (index.js:573:12)
    at :anonymous (test-stream3-cork-end.js:53:1)
    at :program (test-stream3-cork-end.js:1:1)`
- `AssertionError: undefined === 'buffer'
    at w._write (test-stream3-cork-uncork.js:23:3)
    at _return (index.js:573:12)
    at :anonymous (test-stream3-cork-uncork.js:51:1)
    at :program (test-stream3-cork-uncork.js:1:1)`
example test: `test/parallel/test-stream3-cork-end.js`

### 2 × `AssertionError: undefined === false at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: undefined === false
    at :anonymous (test-stream-readable-aborted.js:12:3)
    at :program (test-stream-readable-aborted.js:1:1)`
- `AssertionError: undefined === false
    at :anonymous (test-stream-writable-aborted.js:12:3)
    at :program (test-stream-writable-aborted.js:1:1)`
example test: `test/parallel/test-stream-readable-aborted.js`

### 2 × `AssertionError: undefined === null at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: undefined === null
    at :anonymous (test-module-parent-deprecation.js:14:1)
    at :program (test-module-parent-deprecation.js:1:1)`
- `AssertionError: undefined === null
    at :anonymous (test-stream-readable-destroy.js:16:3)
    at :program (test-stream-readable-destroy.js:1:1)`
example test: `test/parallel/test-module-parent-deprecation.js`

### 2 × `AssertionError: undefined deepStrictEqual {foo: <str>} at :=> (<loc>) at _return (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: undefined deepStrictEqual {foo: 'bar'}
    at :=> (test-diagnostics-channel-tracing-channel-callback-run-stores.js:24:3)
    at _return (index.js:573:12)
    at :anonymous (test-diagnostics-channel-tracing-channel-callback-run-stores.js:23:1)
    at :program (test-diagnostics-channel`
- `AssertionError: undefined deepStrictEqual {foo: 'bar'}
    at :=> (test-diagnostics-channel-tracing-channel-sync-run-stores.js:19:3)
    at _return (index.js:573:12)
    at :anonymous (test-diagnostics-channel-tracing-channel-sync-run-stores.js:18:1)
    at :program (test-diagnostics-channel-tracing`
example test: `test/parallel/test-diagnostics-channel-tracing-channel-callback-run-stores.js`

### 2 × `AssertionError: undefined deepStrictEqual {foo: <str>} at Function.deepStrictEqual (native) at checkAsync (<loc>) at checkAsync (<loc>) at <loc> at <loc> Assert`

distinct messages:
- `AssertionError: undefined deepStrictEqual {foo: 'bar'}
    at Function.deepStrictEqual (native)
    at checkAsync (test-diagnostics-channel-tracing-channel-promise-thenable.js:33:10)
    at checkAsync (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at test-diagnostics`
- `AssertionError: undefined deepStrictEqual {foo: 'bar'}
    at Function.deepStrictEqual (native)
    at checkAsync (test-diagnostics-channel-tracing-channel-promise-spoofed-constructor.js:26:10)
    at checkAsync (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at test-`
example test: `test/parallel/test-diagnostics-channel-tracing-channel-promise-thenable.js`

### 2 × `callback is required at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `callback is required
    at :anonymous (test-dns-negative-zero.js:7:1)
    at :program (test-dns-negative-zero.js:1:1)`
- `callback is required
    at :anonymous (test-dns-perf_hooks.js:23:1)
    at :program (test-dns-perf_hooks.js:1:1)`
example test: `test/parallel/test-dns-negative-zero.js`

### 2 × `Error: node:child_process: exec() is not implemented yet in Elide at test (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `Error: node:child_process: exec() is not implemented yet in Elide
    at test (test-fs-readfile-eof.js:30:3)
    at :anonymous (test-fs-readfile-eof.js:43:1)
    at :program (test-fs-readfile-eof.js:1:1)`
- `Error: node:child_process: exec() is not implemented yet in Elide
    at test (test-fs-readfile-error.js:39:3)
    at :anonymous (test-fs-readfile-error.js:47:1)
    at :program (test-fs-readfile-error.js:1:1)`
example test: `test/parallel/test-fs-readfile-eof.js`

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

### 2 × `node-api test exited with code <n>`

distinct messages:
- `node-api test exited with code 100`
- `node-api test exited with code 137`
example test: `test/parallel/test-process-exit-code-validation.js`

### 2 × `ReferenceError: WebAssembly is not defined at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `ReferenceError: WebAssembly is not defined
    at :anonymous (test-worker-message-port-wasm-threads.js:11:24)
    at :program (test-worker-message-port-wasm-threads.js:1:1)`
- `ReferenceError: WebAssembly is not defined
    at :anonymous (test-worker-message-port-wasm-module.js:7:24)
    at :program (test-worker-message-port-wasm-module.js:1:1)`
example test: `test/parallel/test-worker-message-port-wasm-threads.js`

### 2 × `TAP version <n> # Subtest: synchronous version # Subtest: validation not ok <n> - validation --- duration_ms: <n> failureType: <str> error: <str> code: <str> ..`

distinct messages:
- `TAP version 13
# Subtest: synchronous version
    # Subtest: validation
    not ok 1 - validation
      ---
      duration_ms: 4
      failureType: 'testCodeFailure'
      error: "Missing expected exception"
      code: 'ERR_ASSERTION'
      ...
    # Subtest: performs flush
    not ok 2 - performs `
- `TAP version 13
# Subtest: synchronous version
    # Subtest: validation
    not ok 1 - validation
      ---
      duration_ms: 3
      failureType: 'testCodeFailure'
      error: "Missing expected exception"
      code: 'ERR_ASSERTION'
      ...
    # Subtest: performs flush
    not ok 2 - performs `
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

### 2 × `TypeError: (intermediate value).gc is not a function at <loc>`

distinct messages:
- `TypeError: (intermediate value).gc is not a function
    at test-async-hooks-disable-gc-tracking.js:17:14`
- `TypeError: (intermediate value).gc is not a function
    at test-async-hooks-prevent-double-destroy.js:20:14`
example test: `test/parallel/test-async-hooks-disable-gc-tracking.js`

### 2 × `TypeError: argument must be a Buffer, ArrayBuffer, TypedArray, or string at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: argument must be a Buffer, ArrayBuffer, TypedArray, or string
    at :anonymous (test-buffer-isutf8.js:10:20)
    at :program (test-buffer-isutf8.js:1:1)`
- `TypeError: argument must be a Buffer, ArrayBuffer, TypedArray, or string
    at :anonymous (test-buffer-isascii.js:10:20)
    at :program (test-buffer-isascii.js:1:1)`
example test: `test/parallel/test-buffer-isutf8.js`

### 2 × `TypeError: boundedChannel.run is not a function at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: boundedChannel.run is not a function
    at :anonymous (test-diagnostics-channel-bounded-channel-run-transform-error.js:39:16)
    at :program (test-diagnostics-channel-bounded-channel-run-transform-error.js:1:1)`
- `TypeError: boundedChannel.run is not a function
    at :anonymous (test-diagnostics-channel-bounded-channel-run.js:22:18)
    at :program (test-diagnostics-channel-bounded-channel-run.js:1:1)`
example test: `test/parallel/test-diagnostics-channel-bounded-channel-run-transform-error.js`

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

### 2 × `TypeError: event name is required at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: event name is required
    at :anonymous (test-event-emitter-error-monitor.js:9:1)
    at :program (test-event-emitter-error-monitor.js:1:1)`
- `TypeError: event name is required
    at :anonymous (test-event-emitter-listeners.js:91:26)
    at :program (test-event-emitter-listeners.js:1:1)`
example test: `test/parallel/test-event-emitter-error-monitor.js`

### 2 × `TypeError: getDefaultHighWaterMark is not a function at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: getDefaultHighWaterMark is not a function
    at :anonymous (test-stream-set-default-hwm.js:14:23)
    at :program (test-stream-set-default-hwm.js:1:1)`
- `TypeError: getDefaultHighWaterMark is not a function
    at :anonymous (test-stream-transform-split-highwatermark.js:7:17)
    at :program (test-stream-transform-split-highwatermark.js:1:1)`
example test: `test/parallel/test-stream-set-default-hwm.js`

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

### 2 × `TypeError: The worker script extension must be <str>, <str>, or <str>. Received <str> at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: The worker script extension must be ".js", ".mjs", or ".cjs". Received "../node-api-overlay/unknown"
    at :anonymous (test-worker-relative-path-double-dot.js:10:13)
    at :program (test-worker-relative-path-double-dot.js:1:1)`
- `TypeError: The worker script extension must be ".js", ".mjs", or ".cjs". Received "./unknown"
    at :anonymous (test-worker-relative-path.js:8:13)
    at :program (test-worker-relative-path.js:1:1)`
example test: `test/parallel/test-worker-relative-path-double-dot.js`

### 2 × `TypeError: vm.SyntheticModule is not a constructor at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: vm.SyntheticModule is not a constructor
    at :anonymous (test-vm-module-evaluate-synthethic-module-rejection.js:24:13)
    at :program (test-vm-module-evaluate-synthethic-module-rejection.js:1:1)`
- `TypeError: vm.SyntheticModule is not a constructor
    at :anonymous (test-vm-module-evaluate-synthethic-module.js:17:15)
    at :program (test-vm-module-evaluate-synthethic-module.js:1:1)`
example test: `test/parallel/test-vm-module-evaluate-synthethic-module-rejection.js`

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

### 2 × `Uncaught (in promise) AssertionError: <n> deepStrictEqual NaN`

distinct messages:
- `Uncaught (in promise) AssertionError: 218 deepStrictEqual NaN`
- `Uncaught (in promise) AssertionError: 3 deepStrictEqual NaN`
example test: `test/parallel/test-fs-writev-promises.js`

### 2 × `Uncaught (in promise) AssertionError: <str> === <str>`

distinct messages:
- `Uncaught (in promise) AssertionError: 'undefined' === '[Module: null prototype] { a: <uninitialized>, b: undefined }'`
- `Uncaught (in promise) AssertionError: 'undefined' === 'object'`
example test: `test/parallel/test-util-inspect-namespace.js`

### 2 × `Uncaught (in promise) AssertionError: Got rejection that did not match expected: AbortError: The operation was aborted`

distinct messages:
- `Uncaught (in promise) AssertionError: Got rejection that did not match expected: AbortError: The operation was aborted`
example test: `test/parallel/test-fs-promises-file-handle-append-file.js`

### 2 × `Uncaught (in promise) Error: write: data must be a Buffer or string`

distinct messages:
- `Uncaught (in promise) Error: write: data must be a Buffer or string`
example test: `test/parallel/test-fs-promises-file-handle-write.js`

### 2 × `Uncaught (in promise) TypeError: pipeline: every link must be a Readable on the left and a Writable on the right`

distinct messages:
- `Uncaught (in promise) TypeError: pipeline: every link must be a Readable on the left and a Writable on the right`
example test: `test/parallel/test-stream-pipeline-with-empty-string.js`

### 2 × `Uncaught (in promise) TypeError: pipeTo is not a function`

distinct messages:
- `Uncaught (in promise) TypeError: pipeTo is not a function`
example test: `test/parallel/test-stream-iter-pipeto-writev.js`

### 2 × `Uncaught (in promise) TypeError: pipeToSync is not a function`

distinct messages:
- `Uncaught (in promise) TypeError: pipeToSync is not a function`
example test: `test/parallel/test-stream-iter-pipeto-edge.js`

### 2 × `Uncaught (in promise) TypeError: The <str> argument must be of type string or an instance of Buffer or URL. Received an instance of Object`

distinct messages:
- `Uncaught (in promise) TypeError: The "path" argument must be of type string or an instance of Buffer or URL. Received an instance of Object`
example test: `test/parallel/test-fs-promises-file-handle-readFile.js`

### 1 × `(node:<n>) DeprecationWarning: Something is deprecated. AssertionError: received unexpected warning at Function.fail (native) at Process.listener (<loc>) (node:`

distinct messages:
- `(node:7052) DeprecationWarning: Something is deprecated.
AssertionError: received unexpected warning
    at Function.fail (native)
    at Process.listener (test-process-no-deprecation.js:13:10)
(node:7052) DeprecationWarning: Something else is deprecated.`
example test: `test/parallel/test-process-no-deprecation.js`

### 1 × `(node:<n>) Warning: A Warning (node:<n>) CustomWarning: A Warning (node:<n>) Warning: A Warning (node:<n>) CustomWarning: A Warning (node:<n>) [CODE001] CustomW`

distinct messages:
- `(node:6679) Warning: A Warning
(node:6679) CustomWarning: A Warning
(node:6679) Warning: A Warning
(node:6679) CustomWarning: A Warning
(node:6679) [CODE001] CustomWarning: A Warning
(node:6679) CustomWarning: A Warning
(node:6679) [CODE001] CustomWarning: A Warning
(node:6679) [CODE001] CustomWarni`
example test: `test/parallel/test-process-emitwarning.js`

### 1 × `(node:<n>) Warning: test (node:<n>) DeprecationWarning: test (node:<n>) Warning: test (node:<n>) DeprecationWarning: test (node:<n>) Error: test (node:<n>) Warn`

distinct messages:
- `(node:7205) Warning: test
(node:7205) DeprecationWarning: test
(node:7205) Warning: test
(node:7205) DeprecationWarning: test
(node:7205) Error: test
(node:7205) Warning: test
AssertionError: undefined === 'foo'
    at Function.strictEqual (native)
    at Process.<anonymous> (test-process-warning.js`
example test: `test/parallel/test-process-warning.js`

### 1 × `(node) MaxListenersExceededWarning: Possible EventEmitter memory leak detected. <n> event-type listeners added. Use emitter.setMaxListeners() to increase limit.`

distinct messages:
- `(node) MaxListenersExceededWarning: Possible EventEmitter memory leak detected. 2 event-type listeners added. Use emitter.setMaxListeners() to increase limit.
(node) MaxListenersExceededWarning: Possible EventEmitter memory leak detected. 3 event-type listeners added. Use emitter.setMaxListeners() t`
example test: `test/parallel/test-event-emitter-max-listeners-warning.js`

### 1 × `(node) MaxListenersExceededWarning: Possible EventEmitter memory leak detected. <n> null listeners added. Use emitter.setMaxListeners() to increase limit.`

distinct messages:
- `(node) MaxListenersExceededWarning: Possible EventEmitter memory leak detected. 2 null listeners added. Use emitter.setMaxListeners() to increase limit.`
example test: `test/parallel/test-event-emitter-max-listeners-warning-for-null.js`

### 1 × `[EventLoop] external task threw: AssertionError: <str> === <str> <loc>.runtime.JSException: AssertionError: <str> === <str>`

distinct messages:
- `[EventLoop] external task threw: AssertionError: 'rename' === 'change'
com.oracle.truffle.js.runtime.JSException: AssertionError: 'rename' === 'change'`
example test: `test/parallel/test-fs-watch.js`

### 1 × `{}`

distinct messages:
- `{}`
example test: `test/parallel/test-stream-pipe-error-unhandled.js`

### 1 × `<n>/<n>/<n>, <n><loc> PM start test <n>/<n>/<n>, <n><loc> PM waiting for callbacks <n>/<n>/<n>, <n><loc> PM fs open() callback <n>/<n>/<n>, <n><loc> PM WriteStr`

distinct messages:
- `7/17/2026, 8:47:28 PM start test
7/17/2026, 8:47:28 PM waiting for callbacks
7/17/2026, 8:47:28 PM fs open() callback
7/17/2026, 8:47:28 PM WriteStream constructor
7/17/2026, 8:47:28 PM closed 1
Mismatched WriteStream$open function calls. Expected exactly 1, actual 0.
    at Proxy.mustCall (/work/.h`
example test: `test/parallel/test-fs-stream-construct-compat-error-write.js`

### 1 × `AssertionError: -<n> === <n> at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: -1 === 255
    at :anonymous (test-buffer-alloc.js:23:1)
    at :program (test-buffer-alloc.js:1:1)`
example test: `test/parallel/test-buffer-alloc.js`

### 1 × `AssertionError: [] deepStrictEqual [{name: <str>, parentFilename: undefined, id: <str>}, {name: <str>, parentFilename: undefined, id: <str>, error: Cannot load `

distinct messages:
- `AssertionError: [] deepStrictEqual [{name: 'start', parentFilename: undefined, id: 'does-not-exist'}, {name: 'error', parentFilename: undefined, id: 'does-not-exist', error: Cannot load module: 'does-not-exist'}, {name: 'end', parentFilename: undefined, id: 'does-not-exist', error: Cannot load modul`
example test: `test/parallel/test-diagnostics-channel-module-require-error.js`

### 1 × `AssertionError: [] deepStrictEqual [<str>, <str>, <str>, <str>, <str>, …] at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: [] deepStrictEqual ['toString', 'href', 'origin', 'protocol', 'username', …]
    at :anonymous (test-whatwg-url-custom-properties.js:27:1)
    at :program (test-whatwg-url-custom-properties.js:1:1)`
example test: `test/parallel/test-whatwg-url-custom-properties.js`

### 1 × `AssertionError: [{}, {}] deepStrictEqual [<str>] at Function.deepStrictEqual (native) at <loc> AssertionError: [{}, {}, {}, {}] deepStrictEqual [<str>] at Funct`

distinct messages:
- `AssertionError: [{}, {}] deepStrictEqual ['ab']
    at Function.deepStrictEqual (native)
    at test-stream-readable-setEncoding-existing-buffers.js:18:12
AssertionError: [{}, {}, {}, {}] deepStrictEqual ['🎉']
    at Function.deepStrictEqual (native)
    at test-stream-readable-setEncoding-existing`
example test: `test/parallel/test-stream-readable-setEncoding-existing-buffers.js`

### 1 × `AssertionError: [<n>, <n>, <n>, <n>] deepStrictEqual [<n>, <n>, <n>, <n>] at test (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: [120, 121, 122, 10] deepStrictEqual [0, 0, 0, 0]
    at test (test-fs-read.js:44:3)
    at :anonymous (test-fs-read.js:52:1)
    at :program (test-fs-read.js:1:1)`
example test: `test/parallel/test-fs-read.js`

### 1 × `AssertionError: [<str>, <str>, <str>, <str>, <str>, …] deepStrictEqual [<str>, <str>, <str>, <str>, <str>, …] at Function.deepStrictEqual (native) at <loc>`

distinct messages:
- `AssertionError: ['_read:a', 'push:a', 'readable', 'data:a', '_read:null', …] deepStrictEqual ['_read:a', 'push:a', 'readable', 'data:a', '_read:null', …]
    at Function.deepStrictEqual (native)
    at test-stream-readable-hwm-0-no-flow-data.js:98:14`
example test: `test/parallel/test-stream-readable-hwm-0-no-flow-data.js`

### 1 × `AssertionError: [<str>, <str>, undefined, undefined] deepStrictEqual [<str>, <str>, <str>, undefined] at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: ['outer', 'inner', undefined, undefined] deepStrictEqual ['outer', 'inner', 'outer', undefined]
    at :anonymous (test-diagnostics-channel-bounded-channel-scope-nested.js:75:3)
    at :program (test-diagnostics-channel-bounded-channel-scope-nested.js:1:1)`
example test: `test/parallel/test-diagnostics-channel-bounded-channel-scope-nested.js`

### 1 × `AssertionError: [B@559c8aaa === [B@7a32816e at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: [B@559c8aaa === [B@7a32816e
    at :anonymous (test-buffer-pool-untransferable.js:12:1)
    at :program (test-buffer-pool-untransferable.js:1:1)`
example test: `test/parallel/test-buffer-pool-untransferable.js`

### 1 × `AssertionError: {} === {} at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: {} === {}
    at :anonymous (test-stream-readable-readable-one.js:18:5)
    at :program (test-stream-readable-readable-one.js:1:1)`
example test: `test/parallel/test-stream-readable-readable-one.js`

### 1 × `AssertionError: {} === <str> at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: {} === 'abc'
    at :anonymous (test-stream-decoder-objectmode.js:18:1)
    at :program (test-stream-decoder-objectmode.js:1:1)`
example test: `test/parallel/test-stream-decoder-objectmode.js`

### 1 × `AssertionError: {} === null at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: {} === null
    at :anonymous (test-fs-constants.js:11:1)
    at :program (test-fs-constants.js:1:1)`
example test: `test/parallel/test-fs-constants.js`

### 1 × `AssertionError: {} deepStrictEqual {} at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: {} deepStrictEqual {}
    at :anonymous (test-process-features.js:24:1)
    at :program (test-process-features.js:1:1)`
example test: `test/parallel/test-process-features.js`

### 1 × `AssertionError: {} deepStrictEqual {foo: <str>, typeofProcess: <str>} at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: {} deepStrictEqual {foo: 'bar', typeofProcess: 'undefined'}
    at :anonymous (test-vm-basic.js:34:3)
    at :program (test-vm-basic.js:1:1)`
example test: `test/parallel/test-vm-basic.js`

### 1 × `AssertionError: {a: undefined, b: undefined, c: undefined, d: undefined, e: undefined, …} deepEqual {a: {value: <str>, writable: true, enumerable: true, configu`

distinct messages:
- `AssertionError: {a: undefined, b: undefined, c: undefined, d: undefined, e: undefined, …} deepEqual {a: {value: 'a', writable: true, enumerable: true, configurable: true}, b: {value: 'b', writable: false, enumerable: false, configurable: false}, c: {value: 'c', writable: true, enumerable: true, conf`
example test: `test/parallel/test-vm-global-property-interceptors.js`

### 1 × `AssertionError: {protocol: null, slashes: false, auth: null, host: null, port: null, …} === <str> at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: {protocol: null, slashes: false, auth: null, host: null, port: null, …} === 'foo'
    at :anonymous (test-url-relative.js:8:1)
    at :program (test-url-relative.js:1:1)`
example test: `test/parallel/test-url-relative.js`

### 1 × `AssertionError: {resultHasOwn: {onSelf: false, onSelfGetter: false, onSelfIndexed: false, onOuterProto: false, onOuterProtoGetter: false, …}, resultDesc: {onSel`

distinct messages:
- `AssertionError: {resultHasOwn: {onSelf: false, onSelfGetter: false, onSelfIndexed: false, onOuterProto: false, onOuterProtoGetter: false, …}, resultDesc: {onSelf: undefined, onSelfGetter: undefined, onSelfIndexed: undefined, onOuterProto: undefined, onOuterProtoGetter: undefined, …}, resultIn: {onSe`
example test: `test/parallel/test-vm-global-property-prototype.js`

### 1 × `AssertionError: {type: <str>, data: null, origin: <str>, lastEventId: <str>, source: null, …} deepStrictEqual {type: <str>, data: undefined, origin: <str>, last`

distinct messages:
- `AssertionError: {type: 'message', data: null, origin: 'foo', lastEventId: '', source: null, …} deepStrictEqual {type: 'message', data: undefined, origin: 'foo', lastEventId: 'undefined', source: undefined, …}
    at :anonymous (test-worker-message-event.js:54:5)
    at :program (test-worker-message-`
example test: `test/parallel/test-worker-message-event.js`

### 1 × `AssertionError: <n> === -<n> at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: 0 === -1
    at :anonymous (test-buffer-indexof.js:16:1)
    at :program (test-buffer-indexof.js:1:1)`
example test: `test/parallel/test-buffer-indexof.js`

### 1 × `AssertionError: <n> === <n> at :=> (<loc>) at _return (<loc>) at recurse (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: 2 === 1
    at :=> (test-async-hooks-recursive-stack-runInAsyncScope.js:11:5)
    at _return (index.js:573:12)
    at recurse (test-async-hooks-recursive-stack-runInAsyncScope.js:10:3)
    at :anonymous (test-async-hooks-recursive-stack-runInAsyncScope.js:20:1)
    at :program (test-`
example test: `test/parallel/test-async-hooks-recursive-stack-runInAsyncScope.js`

### 1 × `AssertionError: <n> === <n> at Function.strictEqual (native) at <loc> at _return (<loc>)`

distinct messages:
- `AssertionError: 1 === 0
    at Function.strictEqual (native)
    at test-stream-unpipe-event.js:60:12
    at _return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)`
example test: `test/parallel/test-stream-unpipe-event.js`

### 1 × `AssertionError: <n> === <n> at Function.strictEqual (native) at EventEmitter.<anonymous> (<loc>) at EventEmitter._return (<loc>) at EventEmitter.emit (native)`

distinct messages:
- `AssertionError: 0 === 1
    at Function.strictEqual (native)
    at EventEmitter.<anonymous> (test-worker-beforeexit-throw-exit.js:25:10)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)`
example test: `test/parallel/test-worker-beforeexit-throw-exit.js`

### 1 × `AssertionError: <n> === <n> at testFromSyncString (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: 5 === 1
    at testFromSyncString (test-stream-iter-from-sync.js:16:3)
    at :anonymous (test-stream-iter-from-sync.js:219:3)
    at :program (test-stream-iter-from-sync.js:1:1)`
example test: `test/parallel/test-stream-iter-from-sync.js`

### 1 × `AssertionError: <n> === <n>.007199254740991E15 at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: 16384 === 9.007199254740991E15
    at :anonymous (test-streams-highwatermark.js:18:3)
    at :program (test-streams-highwatermark.js:1:1)`
example test: `test/parallel/test-streams-highwatermark.js`

### 1 × `AssertionError: <n> === <n>.1945305291680097E103 at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: 0.0 === 1.1945305291680097E103
    at :anonymous (test-buffer-readdouble.js:17:1)
    at :program (test-buffer-readdouble.js:1:1)`
example test: `test/parallel/test-buffer-readdouble.js`

### 1 × `AssertionError: <n> === <n>.600602988224807E-<n> at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: 0.0 === 4.600602988224807E-41
    at :anonymous (test-buffer-readfloat.js:13:1)
    at :program (test-buffer-readfloat.js:1:1)`
example test: `test/parallel/test-buffer-readfloat.js`

### 1 × `AssertionError: <n> === <str> at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: 42 === '42'
    at :anonymous (test-process-env.js:49:3)
    at :program (test-process-env.js:1:1)`
example test: `test/parallel/test-process-env.js`

### 1 × `AssertionError: <n> === NaN at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: 218 === NaN
    at :anonymous (test-fs-writev-sync.js:31:3)
    at :program (test-fs-writev-sync.js:1:1)`
example test: `test/parallel/test-fs-writev-sync.js`

### 1 × `AssertionError: <n> === null at Function.strictEqual (native) at <loc> at _return (<loc>)`

distinct messages:
- `AssertionError: 2 === null
    at Function.strictEqual (native)
    at test-stream-transform-hwm0.js:23:12
    at _return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)`
example test: `test/parallel/test-stream-transform-hwm0.js`

### 1 × `AssertionError: <str> === <n> at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: '21' === 21
    at :anonymous (test-url-urltooptions.js:13:1)
    at :program (test-url-urltooptions.js:1:1)`
example test: `test/parallel/test-url-urltooptions.js`

### 1 × `AssertionError: <str> === <str> at :=> (<loc>) at _return (<loc>)`

distinct messages:
- `AssertionError: '{"a":2}' === '{ a: 2 }'
    at :=> (test-console-tty-colors.js:19:7)
    at _return (index.js:573:12)`
example test: `test/parallel/test-console-tty-colors.js`

### 1 × `AssertionError: <str> === <str> at doTest (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: '' === '[1;1H[0J'
    at doTest (test-console-clear.js:17:3)
    at :anonymous (test-console-clear.js:22:3)
    at :program (test-console-clear.js:1:1)`
example test: `test/parallel/test-console-clear.js`

### 1 × `AssertionError: <str> === <str> at Function.strictEqual (native) at EventEmitter.<anonymous> (<loc>) at EventEmitter._return (<loc>) at EventEmitter.emit (nativ`

distinct messages:
- `AssertionError: 'ArrayBuffer' === 'SharedArrayBuffer'
    at Function.strictEqual (native)
    at EventEmitter.<anonymous> (test-worker-sharedarraybuffer-from-worker-thread.js:23:12)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventE`
example test: `test/parallel/test-worker-sharedarraybuffer-from-worker-thread.js`

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

### 1 × `AssertionError: Case <n> failed: Object.keys at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Case 0 failed: Object.keys
    at :anonymous (test-vm-global-property-enumerator.js:90:3)
    at :program (test-vm-global-property-enumerator.js:1:1)`
example test: `test/parallel/test-vm-global-property-enumerator.js`

### 1 × `AssertionError: createWriteStream options.fs.open should throw if isn't a function at :=> (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: createWriteStream options.fs.open should throw if isn't a function
    at :=> (test-fs-stream-fs-options.js:26:5)
    at :anonymous (test-fs-stream-fs-options.js:19:3)
    at :program (test-fs-stream-fs-options.js:1:1)`
example test: `test/parallel/test-fs-stream-fs-options.js`

### 1 × `AssertionError: event.on(<str>, null) should throw the proper error at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: event.on('foo', null) should throw the proper error
    at :anonymous (test-event-emitter-invalid-listener.js:11:3)
    at :program (test-event-emitter-invalid-listener.js:1:1)`
example test: `test/parallel/test-event-emitter-invalid-listener.js`

### 1 × `AssertionError: Expected awaitDrainWriters to be a Writable but instead got null at :=> (<loc>) at _return (<loc>)`

distinct messages:
- `AssertionError: Expected awaitDrainWriters to be a Writable but instead got null
    at :=> (test-stream-pipe-await-drain-manual-resume.js:30:3)
    at _return (index.js:573:12)`
example test: `test/parallel/test-stream-pipe-await-drain-manual-resume.js`

### 1 × `AssertionError: false == true at :=> (<loc>) at _return (<loc>) at _write (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: false == true
    at :=> (test-stream-writable-decoded-encoding.js:42:5)
    at _return (index.js:573:12)
    at _write (test-stream-writable-decoded-encoding.js:35:5)
    at :anonymous (test-stream-writable-decoded-encoding.js:46:3)
    at :program (test-stream-writable-decoded-enco`
example test: `test/parallel/test-stream-writable-decoded-encoding.js`

### 1 × `AssertionError: false == true at :=> (<loc>) at _return (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: false == true
    at :=> (test-stream-uint8array.js:17:7)
    at _return (index.js:573:12)
    at :anonymous (test-stream-uint8array.js:28:3)
    at :program (test-stream-uint8array.js:1:1)`
example test: `test/parallel/test-stream-uint8array.js`

### 1 × `AssertionError: false === <n> at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: false === 0
    at :anonymous (test-stream-writable-properties.js:9:3)
    at :program (test-stream-writable-properties.js:1:1)`
example test: `test/parallel/test-stream-writable-properties.js`

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

### 1 × `AssertionError: false === true at :=> (<loc>) at _return (<loc>) at testDestroy (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: false === true
    at :=> (test-stream-construct.js:95:7)
    at _return (index.js:573:12)
    at testDestroy (test-stream-construct.js:97:5)
    at :anonymous (test-stream-construct.js:168:1)
    at :program (test-stream-construct.js:1:1)`
example test: `test/parallel/test-stream-construct.js`

### 1 × `AssertionError: false === true at Function.strictEqual (native) at Process.<anonymous> (<loc>) at Process._return (<loc>) AssertionError: {baz: <str>} deepStric`

distinct messages:
- `AssertionError: false === true
    at Function.strictEqual (native)
    at Process.<anonymous> (test-diagnostics-channel-bind-store.js:103:10)
    at Process._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
AssertionError: {baz: 'buz'} deepStrictEqual {foo: 'bar'}
`
example test: `test/parallel/test-diagnostics-channel-bind-store.js`

### 1 × `AssertionError: false === true at testMethod (<loc>) at :=> (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: false === true
    at testMethod (test-whatwg-url-properties.js:98:3)
    at :=> (test-whatwg-url-properties.js:11:3)
    at :anonymous (test-whatwg-url-properties.js:6:1)
    at :program (test-whatwg-url-properties.js:1:1)`
example test: `test/parallel/test-whatwg-url-properties.js`

### 1 × `AssertionError: function should not have been called at <loc> at Function.fail (native) at mustNotCall (<loc>)`

distinct messages:
- `AssertionError: function should not have been called at test-timers-immediate.js:33
    at Function.fail (native)
    at mustNotCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:631:12)`
example test: `test/parallel/test-timers-immediate.js`

### 1 × `AssertionError: function should not have been called at <loc> at Function.fail (native) at mustNotCall (<loc>) AssertionError: <n> === undefined at :anonymous (`

distinct messages:
- `AssertionError: function should not have been called at test-async-hooks-top-level-clearimmediate.js:30
    at Function.fail (native)
    at mustNotCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:631:12)
AssertionError: 1.0 === undefined
    at :anonymous (test-async-hooks-t`
example test: `test/parallel/test-async-hooks-top-level-clearimmediate.js`

### 1 × `AssertionError: function should not have been called at <loc> at Function.fail (native) at mustNotCall (<loc>) TypeError: (intermediate value)(...).unref is not`

distinct messages:
- `AssertionError: function should not have been called at test-timers-immediate-unref-simple.js:13
    at Function.fail (native)
    at mustNotCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:631:12)
TypeError: (intermediate value)(...).unref is not a function
    at :anonymous`
example test: `test/parallel/test-timers-immediate-unref-simple.js`

### 1 × `AssertionError: function should not have been called at <loc> at Function.fail (native) at mustNotCall (<loc>) TypeError: timer[(intermediate value).dispose] is`

distinct messages:
- `AssertionError: function should not have been called at test-timers-dispose.js:7
    at Function.fail (native)
    at mustNotCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:631:12)
TypeError: timer[(intermediate value).dispose] is not a function
    at :anonymous (test-timer`
example test: `test/parallel/test-timers-dispose.js`

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
- `AssertionError: function should not have been called at test-diagnostics-channel-tracing-channel-promise-early-exit.js:12
called with arguments: { result: [Function (anonymous)] }, 'tracing:test:asyncEnd'
    at Function.fail (native)
    at mustNotCall (/work/.harness/work/node-api/node-api-overlay`
example test: `test/parallel/test-diagnostics-channel-tracing-channel-promise-early-exit.js`

### 1 × `AssertionError: function should not have been called at <loc> called with arguments: Error at <loc> at <loc>, [ CallSite {}, CallSite {} ] at mustNotCall (<loc>`

distinct messages:
- `AssertionError: function should not have been called at test-util-getcallsites-preparestacktrace.js:10 called with arguments: Error     at test-util-getcallsites-preparestacktrace.js:12:15     at test-util-getcallsites-preparestacktrace.js:1:1, [ CallSite {}, CallSite {} ]
    at mustNotCall (index.`
example test: `test/parallel/test-util-getcallsites-preparestacktrace.js`

### 1 × `AssertionError: function should not have been called at <loc> called with arguments: TypeError: Module not found: <str> { name: <str> } at Function.fail (native`

distinct messages:
- `AssertionError: function should not have been called at test-worker-esm-exit.js:8
called with arguments: TypeError: Module not found: './process-exit.mjs' { name: 'TypeError' }
    at Function.fail (native)
    at EventEmitter.mustNotCall (/work/.harness/work/node-api/node-api-overlay/test/common/in`
example test: `test/parallel/test-worker-esm-exit.js`

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

### 1 × `AssertionError: Got unwanted exception: (intermediate value).revokeObjectURL is not a function at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Got unwanted exception: (intermediate value).revokeObjectURL is not a function
    at :anonymous (test-url-revokeobjecturl.js:9:1)
    at :program (test-url-revokeobjecturl.js:1:1)`
example test: `test/parallel/test-url-revokeobjecturl.js`

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

### 1 × `AssertionError: Got unwanted exception: (intermediate value).setUncaughtExceptionCaptureCallback is not a function at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Got unwanted exception: (intermediate value).setUncaughtExceptionCaptureCallback is not a function
    at :anonymous (test-process-exception-capture-errors.js:5:1)
    at :program (test-process-exception-capture-errors.js:1:1)`
example test: `test/parallel/test-process-exception-capture-errors.js`

### 1 × `AssertionError: Got unwanted exception: <str> === <str> at Function.throws (native) at pushError (<loc>) at <loc>`

distinct messages:
- `AssertionError: Got unwanted exception: '          ' === 'asdfasdfas'
    at Function.throws (native)
    at pushError (test-stream-unshift-read-race.js:74:10)
    at test-stream-unshift-read-race.js:64:25`
example test: `test/parallel/test-stream-unshift-read-race.js`

### 1 × `AssertionError: Got unwanted exception: BroadcastChannel is not a constructor at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Got unwanted exception: BroadcastChannel is not a constructor
    at :anonymous (test-worker-broadcastchannel.js:12:1)
    at :program (test-worker-broadcastchannel.js:1:1)`
example test: `test/parallel/test-worker-broadcastchannel.js`

### 1 × `AssertionError: Got unwanted exception: Buffer.alloc: size must be non-negative at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Got unwanted exception: Buffer.alloc: size must be non-negative
    at :anonymous (test-buffer-over-max-length.js:14:1)
    at :program (test-buffer-over-max-length.js:1:1)`
example test: `test/parallel/test-buffer-over-max-length.js`

### 1 × `AssertionError: Got unwanted exception: Buffer.concat: list must be array-like at :=> (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Got unwanted exception: Buffer.concat: list must be array-like
    at :=> (test-buffer-concat.js:49:3)
    at :anonymous (test-buffer-concat.js:48:1)
    at :program (test-buffer-concat.js:1:1)`
example test: `test/parallel/test-buffer-concat.js`

### 1 × `AssertionError: Got unwanted exception: Callable expected at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Got unwanted exception: Callable expected
    at :anonymous (test-timers-throw-when-cb-not-function.js:16:1)
    at :program (test-timers-throw-when-cb-not-function.js:1:1)`
example test: `test/parallel/test-timers-throw-when-cb-not-function.js`

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

### 1 × `AssertionError: Got unwanted exception: Creating MessagePort instances is not allowed at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Got unwanted exception: Creating MessagePort instances is not allowed
    at :anonymous (test-worker-message-port-constructor.js:14:1)
    at :program (test-worker-message-port-constructor.js:1:1)`
example test: `test/parallel/test-worker-message-port-constructor.js`

### 1 × `AssertionError: Got unwanted exception: EBADF: bad file descriptor, fchmod at :=> (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Got unwanted exception: EBADF: bad file descriptor, fchmod
    at :=> (test-fs-fchmod.js:27:3)
    at :anonymous (test-fs-fchmod.js:22:1)
    at :program (test-fs-fchmod.js:1:1)`
example test: `test/parallel/test-fs-fchmod.js`

### 1 × `AssertionError: Got unwanted exception: EIO: i/o error, access <str> at check (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Got unwanted exception: EIO: i/o error, access 'foo bar'
    at check (test-fs-null-bytes.js:32:5)
    at :anonymous (test-fs-null-bytes.js:54:1)
    at :program (test-fs-null-bytes.js:1:1)`
example test: `test/parallel/test-fs-null-bytes.js`

### 1 × `AssertionError: Got unwanted exception: ENOENT: no such file or directory, open <str> at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Got unwanted exception: ENOENT: no such file or directory, open '/work/.harness/work/node-api/node-test/.tmp.480/assert-encoding-error'
    at :anonymous (test-fs-assert-encoding-error.js:18:1)
    at :program (test-fs-assert-encoding-error.js:1:1)`
example test: `test/parallel/test-fs-assert-encoding-error.js`

### 1 × `AssertionError: Got unwanted exception: ENOENT: no such file or directory, readdir <str> at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Got unwanted exception: ENOENT: no such file or directory, readdir 'unknown'
    at :anonymous (test-fs-readdir.js:30:1)
    at :program (test-fs-readdir.js:1:1)`
example test: `test/parallel/test-fs-readdir.js`

### 1 × `AssertionError: Got unwanted exception: finished: argument must be a stream at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Got unwanted exception: finished: argument must be a stream
    at :anonymous (test-stream-end-of-streams.js:7:1)
    at :program (test-stream-end-of-streams.js:1:1)`
example test: `test/parallel/test-stream-end-of-streams.js`

### 1 × `AssertionError: Got unwanted exception: Module.setSourceMapsSupport is not a function at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Got unwanted exception: Module.setSourceMapsSupport is not a function
    at :anonymous (test-module-setsourcemapssupport.js:18:5)
    at :program (test-module-setsourcemapssupport.js:1:1)`
example test: `test/parallel/test-module-setsourcemapssupport.js`

### 1 × `AssertionError: Got unwanted exception: node:child_process: execFileSync() is not implemented yet in Elide at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Got unwanted exception: node:child_process: execFileSync() is not implemented yet in Elide
    at :anonymous (test-module-loading-globalpaths.js:52:3)
    at :program (test-module-loading-globalpaths.js:1:1)`
example test: `test/parallel/test-module-loading-globalpaths.js`

### 1 × `AssertionError: Got unwanted exception: node:worker_threads: moveMessagePortToContext is not implemented yet in Elide at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Got unwanted exception: node:worker_threads: moveMessagePortToContext is not implemented yet in Elide
    at :anonymous (test-worker-message-port-close.js:37:3)
    at :program (test-worker-message-port-close.js:1:1)`
example test: `test/parallel/test-worker-message-port-close.js`

### 1 × `AssertionError: Got unwanted exception: null !== null at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Got unwanted exception: null !== null
    at :anonymous (test-stream-writable-null.js:21:3)
    at :program (test-stream-writable-null.js:1:1)`
example test: `test/parallel/test-stream-writable-null.js`

### 1 × `AssertionError: Got unwanted exception: Out of range: offset -<n> + width <n> exceeds length <n> at read (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Got unwanted exception: Out of range: offset -1 + width 8 exceeds length 9
    at read (test-buffer-read.js:10:3)
    at :anonymous (test-buffer-read.js:17:1)
    at :program (test-buffer-read.js:1:1)`
example test: `test/parallel/test-buffer-read.js`

### 1 × `AssertionError: Got unwanted exception: Out of range: offset -<n> exceeds length <n> at :=> (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Got unwanted exception: Out of range: offset -1 exceeds length 9
    at :=> (test-buffer-write.js:7:3)
    at :anonymous (test-buffer-write.js:6:1)
    at :program (test-buffer-write.js:1:1)`
example test: `test/parallel/test-buffer-write.js`

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

### 1 × `AssertionError: Got unwanted exception: Readable.toWeb is not a function at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Got unwanted exception: Readable.toWeb is not a function
    at :anonymous (test-stream-readable-to-web-byob.js:24:1)
    at :program (test-stream-readable-to-web-byob.js:1:1)`
example test: `test/parallel/test-stream-readable-to-web-byob.js`

### 1 × `AssertionError: Got unwanted exception: receiver is not an EventEmitter at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Got unwanted exception: receiver is not an EventEmitter
    at :anonymous (test-event-emitter-emit-context.js:12:3)
    at :program (test-event-emitter-emit-context.js:1:1)`
example test: `test/parallel/test-event-emitter-emit-context.js`

### 1 × `AssertionError: Got unwanted exception: swap16: length must be a multiple of <n> at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Got unwanted exception: swap16: length must be a multiple of 2
    at :anonymous (test-buffer-swap.js:42:3)
    at :program (test-buffer-swap.js:1:1)`
example test: `test/parallel/test-buffer-swap.js`

### 1 × `AssertionError: Got unwanted exception: t is not defined at Function.throws (native) at <loc> at _return (<loc>) at Process.<anonymous> (<loc>) at Process._retu`

distinct messages:
- `AssertionError: Got unwanted exception: t is not defined
    at Function.throws (native)
    at /work/.harness/work/node-api/node-api-overlay/test/common/index.js:806:12
    at _return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at Process.<anonymous> (test-timers`
example test: `test/parallel/test-timers-unref-throw-then-ref.js`

### 1 × `AssertionError: Got unwanted exception: The <str> argument must be an instance of Buffer, TypedArray, DataView, or string. Received type string (<str>) at :=> (`

distinct messages:
- `AssertionError: Got unwanted exception: The "buffer" argument must be an instance of Buffer, TypedArray, DataView, or string. Received type string ('true')
    at :=> (test-fs-buffertype-writesync.js:12:3)
    at :anonymous (test-fs-buffertype-writesync.js:9:1)
    at :program (test-fs-buffertype-wr`
example test: `test/parallel/test-fs-buffertype-writesync.js`

### 1 × `AssertionError: Got unwanted exception: The <str> argument must be of type function. Received type string (<str>) at :=> (<loc>) at :anonymous (<loc>) at :progr`

distinct messages:
- `AssertionError: Got unwanted exception: The "cb" argument must be of type function. Received type string ('JSUndefined')
    at :=> (test-fs-close-errors.js:17:3)
    at :anonymous (test-fs-close-errors.js:10:1)
    at :program (test-fs-close-errors.js:1:1)`
example test: `test/parallel/test-fs-close-errors.js`

### 1 × `AssertionError: Got unwanted exception: The <str> argument must be of type function. Received type string (<str>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Got unwanted exception: The "cb" argument must be of type function. Received type string ('JSUndefined')
    at :anonymous (test-fs-read-type.js:13:1)
    at :program (test-fs-read-type.js:1:1)`
example test: `test/parallel/test-fs-read-type.js`

### 1 × `AssertionError: Got unwanted exception: The <str> argument must be of type number. Received type string (<str>) at testFd (<loc>) at :=> (<loc>) at :anonymous (`

distinct messages:
- `AssertionError: Got unwanted exception: The "fd" argument must be of type number. Received type string ('')
    at testFd (test-fs-fchown.js:8:3)
    at :=> (test-fs-fchown.js:28:3)
    at :anonymous (test-fs-fchown.js:22:1)
    at :program (test-fs-fchown.js:1:1)`
example test: `test/parallel/test-fs-fchown.js`

### 1 × `AssertionError: Got unwanted exception: The <str> argument must be of type object. Received type number at :=> (<loc>) at checkFormat (<loc>) at :anonymous (<lo`

distinct messages:
- `AssertionError: Got unwanted exception: The "pathObject" argument must be of type object. Received type number
    at :=> (test-path-parse-format.js:215:5)
    at checkFormat (test-path-parse-format.js:214:3)
    at :anonymous (test-path-parse-format.js:119:1)
    at :program (test-path-parse-format`
example test: `test/parallel/test-path-parse-format.js`

### 1 × `AssertionError: Got unwanted exception: The <str> argument must be of type string or an instance of Buffer or URL. Received an instance of URL at :anonymous (<l`

distinct messages:
- `AssertionError: Got unwanted exception: The "path" argument must be of type string or an instance of Buffer or URL. Received an instance of URL
    at :anonymous (test-fs-whatwg-url.js:24:1)
    at :program (test-fs-whatwg-url.js:1:1)`
example test: `test/parallel/test-fs-whatwg-url.js`

### 1 × `AssertionError: Got unwanted exception: The <str> argument must be of type string or an instance of Buffer, TypedArray, or DataView. Received type string (<str>`

distinct messages:
- `AssertionError: Got unwanted exception: The "data" argument must be of type string or an instance of Buffer, TypedArray, or DataView. Received type string ('true')
    at :=> (test-fs-append-file-sync.js:73:3)
    at :anonymous (test-fs-append-file-sync.js:70:1)
    at :program (test-fs-append-file-`
example test: `test/parallel/test-fs-append-file-sync.js`

### 1 × `AssertionError: Got unwanted exception: The <str> argument must be of type string or an instance of URL. Received boolean at :=> (<loc>) at :anonymous (<loc>) a`

distinct messages:
- `AssertionError: Got unwanted exception: The "filename" argument must be of type string or an instance of URL. Received boolean
    at :=> (test-worker-type-check.js:18:5)
    at :anonymous (test-worker-type-check.js:8:3)
    at :program (test-worker-type-check.js:1:1)`
example test: `test/parallel/test-worker-type-check.js`

### 1 × `AssertionError: Got unwanted exception: The value of <str> is out of range. It must be >= <n> && <= <n>. Received <n> at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Got unwanted exception: The value of "length" is out of range. It must be >= 0 && <= 0. Received 10
    at :anonymous (test-fs-read-empty-buffer.js:13:1)
    at :program (test-fs-read-empty-buffer.js:1:1)`
example test: `test/parallel/test-fs-read-empty-buffer.js`

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

### 1 × `AssertionError: Got unwanted exception: Value of <str> must be of type URL at :=> (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Got unwanted exception: Value of "this" must be of type URL
    at :=> (test-whatwg-url-invalidthis.js:12:3)
    at :anonymous (test-whatwg-url-invalidthis.js:8:1)
    at :program (test-whatwg-url-invalidthis.js:1:1)`
example test: `test/parallel/test-whatwg-url-invalidthis.js`

### 1 × `AssertionError: Missing expected exception at :=> (<loc>) at _return (<loc>) at :=> (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Missing expected exception
    at :=> (test-fs-read-stream-throw-type-error.js:18:3)
    at _return (index.js:573:12)
    at :=> (test-fs-read-stream-throw-type-error.js:34:3)
    at :anonymous (test-fs-read-stream-throw-type-error.js:33:1)
    at :program (test-fs-read-stream-throw-`
example test: `test/parallel/test-fs-read-stream-throw-type-error.js`

### 1 × `AssertionError: Missing expected exception at :=> (<loc>) at _return (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Missing expected exception
    at :=> (test-fs-write-stream-throw-type-error.js:18:3)
    at _return (index.js:573:12)
    at :anonymous (test-fs-write-stream-throw-type-error.js:28:1)
    at :program (test-fs-write-stream-throw-type-error.js:1:1)`
example test: `test/parallel/test-fs-write-stream-throw-type-error.js`

### 1 × `AssertionError: Missing expected exception at runTest (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Missing expected exception
    at runTest (test-fs-readSync-optional-params.js:16:7)
    at :anonymous (test-fs-readSync-optional-params.js:72:3)
    at :program (test-fs-readSync-optional-params.js:1:1)`
example test: `test/parallel/test-fs-readSync-optional-params.js`

### 1 × `AssertionError: Missing expected exception at testInvalid (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Missing expected exception
    at testInvalid (test-fs-write-sync-optional-params.js:24:5)
    at :anonymous (test-fs-write-sync-optional-params.js:81:3)
    at :program (test-fs-write-sync-optional-params.js:1:1)`
example test: `test/parallel/test-fs-write-sync-optional-params.js`

### 1 × `AssertionError: Missing expected exception at testSingle (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Missing expected exception
    at testSingle (test-worker-message-port-transfer-closed.js:17:3)
    at :anonymous (test-worker-message-port-transfer-closed.js:48:1)
    at :program (test-worker-message-port-transfer-closed.js:1:1)`
example test: `test/parallel/test-worker-message-port-transfer-closed.js`

### 1 × `AssertionError: Missing expected exception at testWriteType (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Missing expected exception
    at testWriteType (test-stream-writable-invalid-chunk.js:14:5)
    at :anonymous (test-stream-writable-invalid-chunk.js:22:1)
    at :program (test-stream-writable-invalid-chunk.js:1:1)`
example test: `test/parallel/test-stream-writable-invalid-chunk.js`

### 1 × `AssertionError: Non-integer delay ordering should be <n>,<n>,<n>,<n>, but got <n>,<n>,<n>,<n> at Function.deepStrictEqual (native) at <loc> at _return (<loc>)`

distinct messages:
- `AssertionError: Non-integer delay ordering should be 1,2,3,4, but got 1,3,4,2
    at Function.deepStrictEqual (native)
    at test-timers-non-integer-delay.js:72:12
    at _return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)`
example test: `test/parallel/test-timers-non-integer-delay.js`

### 1 × `AssertionError: null == true at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: null == true
    at :anonymous (test-module-main-preserve-symlinks-fail.js:15:7)
    at :program (test-module-main-preserve-symlinks-fail.js:1:1)`
example test: `test/parallel/test-module-main-preserve-symlinks-fail.js`

### 1 × `AssertionError: path.posix.extname(<str>) expect=<str> actual=<str> path.win32.extname(<str>) expect=<str> actual=<str> path.win32.extname(<str>) expect=<str> a`

distinct messages:
- `AssertionError:  path.posix.extname("unknown")   expect=".js"   actual="" path.win32.extname("unknown")   expect=".js"   actual="" path.win32.extname("C:unknown")   expect=".js"   actual=""
    at :anonymous (test-path-extname.js:80:1)
    at :program (test-path-extname.js:1:1)`
example test: `test/parallel/test-path-extname.js`

### 1 × `AssertionError: Should not call _write at <loc> called with arguments: <str>, undefined, [Function (anonymous)] at mustNotCall (<loc>) at test (<loc>) at run (<`

distinct messages:
- `AssertionError: Should not call _write at test-stream-writev.js:61 called with arguments: 'hello, ', undefined, [Function (anonymous)]
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

### 1 × `AssertionError: The input did not match the regular expression: /^Sat Apr <n> <n> <n><loc> GMT\+<n> \(.+\)$/ at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: The input did not match the regular expression: /^Sat Apr 14 2018 14:34:56 GMT\+0200 \(.+\)$/
    at :anonymous (test-process-env-tz.js:32:1)
    at :program (test-process-env-tz.js:1:1)`
example test: `test/parallel/test-process-env-tz.js`

### 1 × `AssertionError: The input did not match the regular expression: /Cannot find module .+<loc>/ at Function.match (native) at EventEmitter.<anonymous> (<loc>) at E`

distinct messages:
- `AssertionError: The input did not match the regular expression: /Cannot find module .+does-not-exist.js/
    at Function.match (native)
    at EventEmitter.<anonymous> (test-worker-esm-missing-main.js:14:10)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index`
example test: `test/parallel/test-worker-esm-missing-main.js`

### 1 × `AssertionError: The input did not match the regular expression: /MODULE_NOT_FOUND/ at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: The input did not match the regular expression: /MODULE_NOT_FOUND/
    at :anonymous (test-module-main-fail.js:14:5)
    at :program (test-module-main-fail.js:1:1)`
example test: `test/parallel/test-module-main-fail.js`

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

### 1 × `AssertionError: undefined !== undefined at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: undefined !== undefined
    at :anonymous (test-fs-write.js:45:1)
    at :program (test-fs-write.js:1:1)`
example test: `test/parallel/test-fs-write.js`

### 1 × `AssertionError: undefined == true at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: undefined == true
    at :anonymous (test-vm-preserves-property.js:20:1)
    at :program (test-vm-preserves-property.js:1:1)`
example test: `test/parallel/test-vm-preserves-property.js`

### 1 × `AssertionError: undefined == true at ok (native) at <loc> at Array.forEach (native) at <loc> at _return (<loc>)`

distinct messages:
- `AssertionError: undefined == true
    at ok (native)
    at test-timers.js:74:5
    at Array.forEach (native)
    at test-timers.js:73:10
    at _return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)`
example test: `test/parallel/test-timers.js`

### 1 × `AssertionError: undefined === [B@53fb546e at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: undefined === [B@53fb546e
    at :anonymous (test-buffer-arraybuffer.js:15:1)
    at :program (test-buffer-arraybuffer.js:1:1)`
example test: `test/parallel/test-buffer-arraybuffer.js`

### 1 × `AssertionError: undefined === {_write: {}} at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: undefined === {_write: {}}
    at :anonymous (test-stream-writableState-ending.js:33:1)
    at :program (test-stream-writableState-ending.js:1:1)`
example test: `test/parallel/test-stream-writableState-ending.js`

### 1 × `AssertionError: undefined === {} at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: undefined === {}
    at :anonymous (test-vm-global-define-property.js:46:1)
    at :program (test-vm-global-define-property.js:1:1)`
example test: `test/parallel/test-vm-global-define-property.js`

### 1 × `AssertionError: undefined === {F_OK: <n>, R_OK: <n>, W_OK: <n>, X_OK: <n>, COPYFILE_EXCL: <n>, …} at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: undefined === {F_OK: 0, R_OK: 4, W_OK: 2, X_OK: 1, COPYFILE_EXCL: 1, …}
    at :anonymous (test-fs-promises-exists.js:9:1)
    at :program (test-fs-promises-exists.js:1:1)`
example test: `test/parallel/test-fs-promises-exists.js`

### 1 × `AssertionError: undefined === <n> at Function.strictEqual (native) at <loc> at _return (<loc>)`

distinct messages:
- `AssertionError: undefined === 3
    at Function.strictEqual (native)
    at test-vm-context-async-script.js:33:10
    at _return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)`
example test: `test/parallel/test-vm-context-async-script.js`

### 1 × `AssertionError: undefined === <n> at Function.strictEqual (native) at immediateHandler (<loc>) at _return (<loc>) AssertionError: undefined === <n> at Function.`

distinct messages:
- `AssertionError: undefined === 1.0
    at Function.strictEqual (native)
    at immediateHandler (test-timers-this.js:27:10)
    at _return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
AssertionError: undefined === 2.0
    at Function.strictEqual (native)
    at immediat`
example test: `test/parallel/test-timers-this.js`

### 1 × `AssertionError: undefined === <str> at :=> (<loc>) at _return (<loc>) at _write (<loc>) at defaultCondingIsUtf8 (<loc>) at :anonymous (<loc>) at :program (<loc>`

distinct messages:
- `AssertionError: undefined === 'utf8'
    at :=> (test-stream-writable-change-default-encoding.js:42:5)
    at _return (index.js:573:12)
    at _write (test-stream-writable-change-default-encoding.js:35:5)
    at defaultCondingIsUtf8 (test-stream-writable-change-default-encoding.js:44:3)
    at :anon`
example test: `test/parallel/test-stream-writable-change-default-encoding.js`

### 1 × `AssertionError: undefined === <str> at :=> (<loc>) at _return (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: undefined === 'ERR_STREAM_WRITE_AFTER_END'
    at :=> (test-stream-writable-end-cb-error.js:61:5)
    at _return (index.js:573:12)
    at :anonymous (test-stream-writable-end-cb-error.js:70:3)
    at :program (test-stream-writable-end-cb-error.js:1:1)`
example test: `test/parallel/test-stream-writable-end-cb-error.js`

### 1 × `AssertionError: undefined === <str> at checkSourceMapUrl (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: undefined === 'sourcemap.json'
    at checkSourceMapUrl (test-vm-source-map-url.js:9:3)
    at :anonymous (test-vm-source-map-url.js:24:1)
    at :program (test-vm-source-map-url.js:1:1)`
example test: `test/parallel/test-vm-source-map-url.js`

### 1 × `AssertionError: undefined === <str> at Function.strictEqual (native) at EventEmitter.<anonymous> (<loc>) at EventEmitter._return (<loc>) at EventEmitter.emit (n`

distinct messages:
- `AssertionError: undefined === 'ERR_WORKER_UNSERIALIZABLE_ERROR'
    at Function.strictEqual (native)
    at EventEmitter.<anonymous> (test-worker-message-not-serializable.js:23:10)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmi`
example test: `test/parallel/test-worker-message-not-serializable.js`

### 1 × `AssertionError: undefined === <str> at onWrite (<loc>)`

distinct messages:
- `AssertionError: undefined === 'ERR_STREAM_DESTROYED'
    at onWrite (test-stream-write-destroy.js:28:9)`
example test: `test/parallel/test-stream-write-destroy.js`

### 1 × `AssertionError: undefined === false at check (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: undefined === false
    at check (test-stream-readable-didRead.js:9:3)
    at :anonymous (test-stream-readable-didRead.js:47:3)
    at :program (test-stream-readable-didRead.js:1:1)`
example test: `test/parallel/test-stream-readable-didRead.js`

### 1 × `AssertionError: undefined === false at Function.strictEqual (native) at <loc> at _return (<loc>) AssertionError: Missing expected exception at :anonymous (<loc>`

distinct messages:
- `AssertionError: undefined === false
    at Function.strictEqual (native)
    at test-fs-write-stream-autoclose-option.js:16:12
    at _return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
AssertionError: Missing expected exception
    at :anonymous (test-fs-write-stream`
example test: `test/parallel/test-fs-write-stream-autoclose-option.js`

### 1 × `AssertionError: undefined === null at :anonymous (<loc>) at _return (<loc>)`

distinct messages:
- `AssertionError: undefined === null
    at :anonymous (test-stream2-writable.js:223:5)
    at _return (index.js:573:12)`
example test: `test/parallel/test-stream2-writable.js`

### 1 × `AssertionError: undefined === null at Function.strictEqual (native) at <loc> at _return (<loc>)`

distinct messages:
- `AssertionError: undefined === null
    at Function.strictEqual (native)
    at test-fs-read-stream-err.js:34:12
    at _return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)`
example test: `test/parallel/test-fs-read-stream-err.js`

### 1 × `AssertionError: undefined deepStrictEqual [<n>, <n>, <n>, <n>] at testFromSyncSAB (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: undefined deepStrictEqual [10, 20, 30, 40]
    at testFromSyncSAB (test-stream-iter-sharedarraybuffer.js:33:3)
    at :anonymous (test-stream-iter-sharedarraybuffer.js:182:3)
    at :program (test-stream-iter-sharedarraybuffer.js:1:1)`
example test: `test/parallel/test-stream-iter-sharedarraybuffer.js`

### 1 × `AssertionError: undefined deepStrictEqual {} at Function.deepStrictEqual (native) at <loc> AssertionError: undefined deepStrictEqual {} at Function.deepStrictEq`

distinct messages:
- `AssertionError: undefined deepStrictEqual {}
    at Function.deepStrictEqual (native)
    at test-next-tick.js:50:10
AssertionError: undefined deepStrictEqual {}
    at Function.deepStrictEqual (native)
    at test-next-tick.js:58:10`
example test: `test/parallel/test-next-tick.js`

### 1 × `AssertionError: undefined deepStrictEqual {foo: <str>} at Function.deepStrictEqual (native) at checkAsync (<loc>) at checkAsync (<loc>) at <loc> at <loc>`

distinct messages:
- `AssertionError: undefined deepStrictEqual {foo: 'bar'}
    at Function.deepStrictEqual (native)
    at checkAsync (test-diagnostics-channel-tracing-channel-promise.js:20:10)
    at checkAsync (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at test-diagnostics-channel-`
example test: `test/parallel/test-diagnostics-channel-tracing-channel-promise.js`

### 1 × `AssertionError: undefined deepStrictEqual {foo: <str>} at Function.deepStrictEqual (native) at checkEnd (<loc>) at checkEnd (<loc>) at <loc> at <loc> AssertionE`

distinct messages:
- `AssertionError: undefined deepStrictEqual {foo: 'bar'}
    at Function.deepStrictEqual (native)
    at checkEnd (test-diagnostics-channel-tracing-channel-promise-non-thenable.js:20:10)
    at checkEnd (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at test-diagnostics`
example test: `test/parallel/test-diagnostics-channel-tracing-channel-promise-non-thenable.js`

### 1 × `AssertionError: undefined deepStrictEqual {traceId: <str>} at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: undefined deepStrictEqual {traceId: 'xyz789'}
    at :anonymous (test-diagnostics-channel-bounded-channel-scope.js:135:3)
    at :program (test-diagnostics-channel-bounded-channel-scope.js:1:1)`
example test: `test/parallel/test-diagnostics-channel-bounded-channel-scope.js`

### 1 × `com.oracle.truffle.api.dsl.UnsupportedSpecializationException: Unexpected values provided for JSToNumberNodeGen@37b564ce: [[B@38da17ea], [byte[]] at :=> (<loc>)`

distinct messages:
- `com.oracle.truffle.api.dsl.UnsupportedSpecializationException: Unexpected values provided for JSToNumberNodeGen@37b564ce: [[B@38da17ea], [byte[]]
    at :=> (test-fs-promises-writefile-typedarray.js:19:19)
    at :=> (test-fs-promises-writefile-typedarray.js:17:1)
    at :anonymous (test-fs-promises`
example test: `test/parallel/test-fs-promises-writefile-typedarray.js`

### 1 × `com.oracle.truffle.api.dsl.UnsupportedSpecializationException: Unexpected values provided for JSToObjectNodeGen.Uncached@b5ac4f1: [[B@7387009a], [byte[]] at :=>`

distinct messages:
- `com.oracle.truffle.api.dsl.UnsupportedSpecializationException: Unexpected values provided for JSToObjectNodeGen.Uncached@b5ac4f1: [[B@7387009a], [byte[]]
    at :=> (native)
    at _return (index.js:573:12)`
example test: `test/parallel/test-stream-readable-unshift.js`

### 1 × `Error`

distinct messages:
- `Error`
example test: `test/parallel/test-stream-writable-writable.js`

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

### 1 × `Error: callback is required`

distinct messages:
- `Error: callback is required`
example test: `test/parallel/test-worker-dns-terminate.js`

### 1 × `Error: ENOENT: no such file or directory, mkdir <str> at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `Error: ENOENT: no such file or directory, mkdir '/work/.harness/work/node-api/node-test/.tmp.645/work/.harness/work/node-api/node-test/.tmp.645/absolute-target'
    at :anonymous (test-fs-symlink-dir.js:46:3)
    at :program (test-fs-symlink-dir.js:1:1)`
example test: `test/parallel/test-fs-symlink-dir.js`

### 1 × `Error: ENOENT: no such file or directory, statfs <str> at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `Error: ENOENT: no such file or directory, statfs 'unknown'
    at :anonymous (test-fs-statfs.js:30:21)
    at :program (test-fs-statfs.js:1:1)`
example test: `test/parallel/test-fs-statfs.js`

### 1 × `Error: Error: uncaught`

distinct messages:
- `Error: Error: uncaught`
example test: `test/parallel/test-worker-nested-uncaught.js`

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

### 1 × `Error: foobar`

distinct messages:
- `Error: foobar`
example test: `test/parallel/test-console-sync-write-error.js`

### 1 × `Error: foobar Error: foobar Error: foobar`

distinct messages:
- `Error: foobar
Error: foobar
Error: foobar`
example test: `test/parallel/test-console-async-write-error.js`

### 1 × `Error: invalid: --sandbox at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `Error: invalid: --sandbox
    at :anonymous (test-process-raw-debug.js:34:11)
    at :program (test-process-raw-debug.js:1:1)`
example test: `test/parallel/test-process-raw-debug.js`

### 1 × `Error: node:child_process: execFile() is not implemented yet in Elide at :=> (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `Error: node:child_process: execFile() is not implemented yet in Elide
    at :=> (test-vm-api-handles-getter-errors.js:32:3)
    at :anonymous (test-vm-api-handles-getter-errors.js:30:1)
    at :program (test-vm-api-handles-getter-errors.js:1:1)`
example test: `test/parallel/test-vm-api-handles-getter-errors.js`

### 1 × `Error: node:child_process: execFile() is not implemented yet in Elide at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `Error: node:child_process: execFile() is not implemented yet in Elide
    at :anonymous (test-process-uncaught-exception-monitor.js:11:3)
    at :program (test-process-uncaught-exception-monitor.js:1:1)`
example test: `test/parallel/test-process-uncaught-exception-monitor.js`

### 1 × `Error: node:child_process: spawn() is not implemented yet in Elide at :=> (<loc>) at _return (<loc>) at testDiagnosticChannel (<loc>) at :=> (<loc>) at _return `

distinct messages:
- `Error: node:child_process: spawn() is not implemented yet in Elide
    at :=> (test-diagnostics-channel-child-process.js:37:21)
    at _return (index.js:573:12)
    at testDiagnosticChannel (test-diagnostics-channel-child-process.js:15:3)
    at :=> (test-diagnostics-channel-child-process.js:24:3)
 `
example test: `test/parallel/test-diagnostics-channel-child-process.js`

### 1 × `Error: node:child_process: spawn() is not implemented yet in Elide at spawnPromisified (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `Error: node:child_process: spawn() is not implemented yet in Elide
    at spawnPromisified (index.js:939:17)
    at :anonymous (test-url-parse-deprecation.js:17:1)
    at :program (test-url-parse-deprecation.js:1:1)`
example test: `test/parallel/test-url-parse-deprecation.js`

### 1 × `Error: node:child_process: spawnSync() is not implemented yet in Elide at expectSyncExit (<loc>) at spawnSyncAndAssert (<loc>) at :anonymous (<loc>) at :program`

distinct messages:
- `Error: node:child_process: spawnSync() is not implemented yet in Elide
    at expectSyncExit (child_process.js:70:17)
    at spawnSyncAndAssert (child_process.js:155:10)
    at :anonymous (test-buffer-constructor-node-modules.js:10:1)
    at :program (test-buffer-constructor-node-modules.js:1:1)`
example test: `test/parallel/test-buffer-constructor-node-modules.js`

### 1 × `Error: node:child_process: spawnSync() is not implemented yet in Elide at expectSyncExit (<loc>) at spawnSyncAndExitWithoutError (<loc>) at :anonymous (<loc>) a`

distinct messages:
- `Error: node:child_process: spawnSync() is not implemented yet in Elide
    at expectSyncExit (child_process.js:70:17)
    at spawnSyncAndExitWithoutError (child_process.js:147:10)
    at :anonymous (test-worker-node-options.js:14:1)
    at :program (test-worker-node-options.js:1:1)`
example test: `test/parallel/test-worker-node-options.js`

### 1 × `Error: node:child_process: spawnSync() is not implemented yet in Elide at main (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `Error: node:child_process: spawnSync() is not implemented yet in Elide
    at main (test-async-hooks-fatal-error.js:42:18)
    at :anonymous (test-async-hooks-fatal-error.js:10:3)
    at :program (test-async-hooks-fatal-error.js:1:1)`
example test: `test/parallel/test-async-hooks-fatal-error.js`

### 1 × `Error: node:child_process: spawnSync() is not implemented yet in Elide at produce (<loc>) at testProduceConsume (<loc>) at :anonymous (<loc>) at :program (<loc>`

distinct messages:
- `Error: node:child_process: spawnSync() is not implemented yet in Elide
    at produce (test-vm-cached-data.js:14:15)
    at testProduceConsume (test-vm-cached-data.js:41:16)
    at :anonymous (test-vm-cached-data.js:52:1)
    at :program (test-vm-cached-data.js:1:1)`
example test: `test/parallel/test-vm-cached-data.js`

### 1 × `Error: node:child_process: spawnSync() is not implemented yet in Elide at test (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `Error: node:child_process: spawnSync() is not implemented yet in Elide
    at test (test-buffer-constructor-node-modules-paths.js:11:22)
    at :anonymous (test-buffer-constructor-node-modules-paths.js:23:1)
    at :program (test-buffer-constructor-node-modules-paths.js:1:1)`
example test: `test/parallel/test-buffer-constructor-node-modules-paths.js`

### 1 × `Error: node:worker_threads: moveMessagePortToContext is not implemented yet in Elide at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `Error: node:worker_threads: moveMessagePortToContext is not implemented yet in Elide
    at :anonymous (test-worker-message-port-move.js:12:16)
    at :program (test-worker-message-port-move.js:1:1)`
example test: `test/parallel/test-worker-message-port-move.js`

### 1 × `Error: setImmediate Err at <loc>`

distinct messages:
- `Error: setImmediate Err
    at test-timers-immediate-queue-throw.js:53:9`
example test: `test/parallel/test-timers-immediate-queue-throw.js`

### 1 × `Error: something went wrong at transform (<loc>)`

distinct messages:
- `Error: something went wrong
    at transform (test-stream-pipe-objectmode-to-non-objectmode.js:40:13)`
example test: `test/parallel/test-stream-pipe-objectmode-to-non-objectmode.js`

### 1 × `Error: transform failed at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `Error: transform failed
    at :anonymous (test-diagnostics-channel-bounded-channel-scope-transform-error.js:14:24)
    at :program (test-diagnostics-channel-bounded-channel-scope-transform-error.js:1:1)`
example test: `test/parallel/test-diagnostics-channel-bounded-channel-scope-transform-error.js`

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

### 1 × `java.lang.UnsupportedOperationException: os.constants is not yet implemented at :anonymous (native) at :program (<loc>)`

distinct messages:
- `java.lang.UnsupportedOperationException: os.constants is not yet implemented
    at :anonymous (native)
    at :program (test-util-exception-with-host-port.js:1:1)`
example test: `test/parallel/test-util-exception-with-host-port.js`

### 1 × `java.lang.UnsupportedOperationException: os.totalmem() is not yet implemented at get enoughTestMem (native) at get (<loc>) at :anonymous (<loc>) at :program (<l`

distinct messages:
- `java.lang.UnsupportedOperationException: os.totalmem() is not yet implemented
    at get enoughTestMem (native)
    at get (index.js:1181:12)
    at :anonymous (test-buffer-tostring-rangeerror.js:9:6)
    at :program (test-buffer-tostring-rangeerror.js:1:1)`
example test: `test/parallel/test-buffer-tostring-rangeerror.js`

### 1 × `java.lang.UnsupportedOperationException: process.abort() is not yet implemented at :=> (native) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `java.lang.UnsupportedOperationException: process.abort() is not yet implemented
    at :=> (native)
    at :anonymous (test-process-abort.js:14:1)
    at :program (test-process-abort.js:1:1)`
example test: `test/parallel/test-process-abort.js`

### 1 × `java.lang.UnsupportedOperationException: process.chdir() is not yet implemented at :=> (native) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `java.lang.UnsupportedOperationException: process.chdir() is not yet implemented
    at :=> (native)
    at :anonymous (test-process-chdir-errormessage.js:11:1)
    at :program (test-process-chdir-errormessage.js:1:1)`
example test: `test/parallel/test-process-chdir-errormessage.js`

### 1 × `java.lang.UnsupportedOperationException: process.cpuUsage() is not yet implemented at :anonymous (native) at :program (<loc>)`

distinct messages:
- `java.lang.UnsupportedOperationException: process.cpuUsage() is not yet implemented
    at :anonymous (native)
    at :program (test-process-cpuUsage.js:1:1)`
example test: `test/parallel/test-process-cpuUsage.js`

### 1 × `java.lang.UnsupportedOperationException: process.memoryUsage() is not yet implemented at :anonymous (native) at :program (<loc>)`

distinct messages:
- `java.lang.UnsupportedOperationException: process.memoryUsage() is not yet implemented
    at :anonymous (native)
    at :program (test-worker-memory.js:1:1)`
example test: `test/parallel/test-worker-memory.js`

### 1 × `java.lang.UnsupportedOperationException: process.uptime() is not yet implemented at :anonymous (native) at :program (<loc>)`

distinct messages:
- `java.lang.UnsupportedOperationException: process.uptime() is not yet implemented
    at :anonymous (native)
    at :program (test-process-uptime.js:1:1)`
example test: `test/parallel/test-process-uptime.js`

### 1 × `java.lang.UnsupportedOperationException: util.callbackify() is not yet implemented at :anonymous (native) at :program (<loc>)`

distinct messages:
- `java.lang.UnsupportedOperationException: util.callbackify() is not yet implemented
    at :anonymous (native)
    at :program (test-util-callbackify.js:1:1)`
example test: `test/parallel/test-util-callbackify.js`

### 1 × `java.lang.UnsupportedOperationException: util.debuglog() is not yet implemented at :anonymous (native) at :program (<loc>)`

distinct messages:
- `java.lang.UnsupportedOperationException: util.debuglog() is not yet implemented
    at :anonymous (native)
    at :program (test-process-exit-code.js:1:1)`
example test: `test/parallel/test-process-exit-code.js`

### 1 × `java.lang.UnsupportedOperationException: util.deprecate() is not yet implemented at :=> (native) at :=> (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `java.lang.UnsupportedOperationException: util.deprecate() is not yet implemented
    at :=> (native)
    at :=> (test-util-deprecate-invalid-code.js:8:3)
    at :anonymous (test-util-deprecate-invalid-code.js:7:1)
    at :program (test-util-deprecate-invalid-code.js:1:1)`
example test: `test/parallel/test-util-deprecate-invalid-code.js`

### 1 × `java.lang.UnsupportedOperationException: util.format() is not yet implemented at :anonymous (native) at :program (<loc>)`

distinct messages:
- `java.lang.UnsupportedOperationException: util.format() is not yet implemented
    at :anonymous (native)
    at :program (test-util-format.js:1:1)`
example test: `test/parallel/test-util-format.js`

### 1 × `java.lang.UnsupportedOperationException: util.inherits() is not yet implemented at :anonymous (native) at :program (<loc>)`

distinct messages:
- `java.lang.UnsupportedOperationException: util.inherits() is not yet implemented
    at :anonymous (native)
    at :program (test-util-inherits.js:1:1)`
example test: `test/parallel/test-util-inherits.js`

### 1 × `java.lang.UnsupportedOperationException: util.isDeepStrictEqual() is not yet implemented at notUtilIsDeepStrict (native) at :anonymous (<loc>) at :program (<loc`

distinct messages:
- `java.lang.UnsupportedOperationException: util.isDeepStrictEqual() is not yet implemented
    at notUtilIsDeepStrict (native)
    at :anonymous (test-util-isDeepStrictEqual.js:25:3)
    at :program (test-util-isDeepStrictEqual.js:1:1)`
example test: `test/parallel/test-util-isDeepStrictEqual.js`

### 1 × `java.lang.UnsupportedOperationException: util.parseEnv() is not yet implemented at :anonymous (native) at :program (<loc>)`

distinct messages:
- `java.lang.UnsupportedOperationException: util.parseEnv() is not yet implemented
    at :anonymous (native)
    at :program (test-util-parse-env.js:1:1)`
example test: `test/parallel/test-util-parse-env.js`

### 1 × `java.lang.UnsupportedOperationException: util.stripVTControlCharacters() is not yet implemented at expectColored (native) at :anonymous (<loc>) at :program (<lo`

distinct messages:
- `java.lang.UnsupportedOperationException: util.stripVTControlCharacters() is not yet implemented
    at expectColored (native)
    at :anonymous (test-util-inspect-regexp.js:112:3)
    at :program (test-util-inspect-regexp.js:1:1)`
example test: `test/parallel/test-util-inspect-regexp.js`

### 1 × `java.nio.channels.NonWritableChannelException at :=> (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `java.nio.channels.NonWritableChannelException
    at :=> (test-fs-writesync-crash.js:40:21)
    at :anonymous (test-fs-writesync-crash.js:40:1)
    at :program (test-fs-writesync-crash.js:1:1)`
example test: `test/parallel/test-fs-writesync-crash.js`

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

### 1 × `Mismatched <anonymous> function calls. Expected exactly <n>, actual <n>. at mustCall (<loc>) at Proxy.expectsError (<loc>) at <loc> at <loc>`

distinct messages:
- `Mismatched <anonymous> function calls. Expected exactly 1, actual 0.
    at mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at Proxy.expectsError (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:796:10)
    at test-stream-transform-callback`
example test: `test/parallel/test-stream-transform-callback-twice.js`

### 1 × `Mismatched <anonymous> function calls. Expected exactly <n>, actual <n>. at mustCall (<loc>) at Proxy.expectsError (<loc>) at <loc> at <loc> Mismatched <anonymo`

distinct messages:
- `Mismatched <anonymous> function calls. Expected exactly 1, actual 0.
    at mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at Proxy.expectsError (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:796:10)
    at test-stream-writable-write-cb-`
example test: `test/parallel/test-stream-writable-write-cb-twice.js`

### 1 × `Mismatched <anonymous> function calls. Expected exactly <n>, actual <n>. at mustCall (<loc>) at Proxy.expectsError (<loc>) at <loc> at <loc> Mismatched noop fun`

distinct messages:
- `Mismatched <anonymous> function calls. Expected exactly 1, actual 0.
    at mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at Proxy.expectsError (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:796:10)
    at test-stream-readable-with-unim`
example test: `test/parallel/test-stream-readable-with-unimplemented-_read.js`

### 1 × `Mismatched <anonymous> function calls. Expected exactly <n>, actual <n>. at mustCall (<loc>) at Proxy.expectsError (<loc>) at testPushArg (<loc>) at <loc> at <l`

distinct messages:
- `Mismatched <anonymous> function calls. Expected exactly 1, actual 0.
    at mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at Proxy.expectsError (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:796:10)
    at testPushArg (test-stream-reada`
example test: `test/parallel/test-stream-readable-invalid-chunk.js`

### 1 × `Mismatched <anonymous> function calls. Expected exactly <n>, actual <n>. at mustCall (<loc>) at Proxy.mustSucceed (<loc>) at <loc> at <loc> at _return (<loc>) M`

distinct messages:
- `Mismatched <anonymous> function calls. Expected exactly 1, actual 0.
    at mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at Proxy.mustSucceed (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:535:10)
    at test-fs-write-buffer.js:51:23
 `
example test: `test/parallel/test-fs-write-buffer.js`

### 1 × `Mismatched <anonymous> function calls. Expected exactly <n>, actual <n>. at Proxy.mustCall (<loc>) at <loc> at <loc> Mismatched noop function calls. Expected ex`

distinct messages:
- `Mismatched <anonymous> function calls. Expected exactly 1, actual 0.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at test-stream-toArray.js:71:18
    at test-stream-toArray.js:1:1
Mismatched noop function calls. Expected exactly 1, actual 0.
 `
example test: `test/parallel/test-stream-toArray.js`

### 1 × `Mismatched <anonymous> function calls. Expected exactly <n>, actual <n>. at Proxy.mustCall (<loc>) at startRead (<loc>) at <loc> at <loc> Mismatched <anonymous>`

distinct messages:
- `Mismatched <anonymous> function calls. Expected exactly 1, actual 0.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at startRead (test-fs-read-stream-concurrent-reads.js:30:23)
    at test-fs-read-stream-concurrent-reads.js:47:3
    at test-fs-r`
example test: `test/parallel/test-fs-read-stream-concurrent-reads.js`

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
    at test-stream-readable-data.js:17:30`
example test: `test/parallel/test-stream-readable-data.js`

### 1 × `Mismatched noop function calls. Expected exactly <n>, actual <n>. at Proxy.mustCall (<loc>) at <loc> at _return (<loc>)`

distinct messages:
- `Mismatched noop function calls. Expected exactly 1, actual 0.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at test-stream-pipe-after-end.js:67:25
    at _return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)`
example test: `test/parallel/test-stream-pipe-after-end.js`

### 1 × `Mismatched noop function calls. Expected exactly <n>, actual <n>. at Proxy.mustCall (<loc>) at <loc> at _return (<loc>) Mismatched noop function calls. Expected`

distinct messages:
- `Mismatched noop function calls. Expected exactly 1, actual 0.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at test-async-hooks-enable-during-promise.js:7:18
    at _return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573`
example test: `test/parallel/test-async-hooks-enable-during-promise.js`

### 1 × `Mismatched noop function calls. Expected exactly <n>, actual <n>. at Proxy.mustCall (<loc>) at <loc> at <loc> Mismatched <anonymous> function calls. Expected ex`

distinct messages:
- `Mismatched noop function calls. Expected exactly 1, actual 0.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at test-async-hooks-enable-recursive.js:8:16
    at test-async-hooks-enable-recursive.js:1:1
Mismatched <anonymous> function calls. Expe`
example test: `test/parallel/test-async-hooks-enable-recursive.js`

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

### 1 × `RangeError: Buffer.allocUnsafe: size must be non-negative at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `RangeError: Buffer.allocUnsafe: size must be non-negative
    at :anonymous (test-fs-write-buffer-large.js:15:9)
    at :program (test-fs-write-buffer-large.js:1:1)`
example test: `test/parallel/test-fs-write-buffer-large.js`

### 1 × `RangeError: Maximum call stack size exceeded at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `RangeError: Maximum call stack size exceeded
    at :anonymous (test-vm-global-identity.js:32:1)
    at :program (test-vm-global-identity.js:1:1)`
example test: `test/parallel/test-vm-global-identity.js`

### 1 × `readable <n>`

distinct messages:
- `readable 16384`
example test: `test/parallel/test-stream2-read-sync-stack.js`

### 1 × `ReferenceError: b is not defined at :program (<eval><loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `ReferenceError: b is not defined
    at :program (<eval>:6:11)
    at :anonymous (test-vm-not-strict.js:14:13)
    at :program (test-vm-not-strict.js:1:1)`
example test: `test/parallel/test-vm-not-strict.js`

### 1 × `ReferenceError: BroadcastChannel is not defined at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `ReferenceError: BroadcastChannel is not defined
    at :anonymous (test-worker-messaging.js:23:21)
    at :program (test-worker-messaging.js:1:1)`
example test: `test/parallel/test-worker-messaging.js`

### 1 × `ReferenceError: err3 is not defined at Domain.err2 (<loc>) at err (<loc>)`

distinct messages:
- `ReferenceError: err3 is not defined
    at Domain.err2 (test-timers-reset-process-domain-on-throw.js:25:5)
    at err (test-timers-reset-process-domain-on-throw.js:21:5)`
example test: `test/parallel/test-timers-reset-process-domain-on-throw.js`

### 1 × `ReferenceError: interval is not defined at <loc> at _return (<loc>) TypeError: (intermediate value)(...).unref is not a function at :anonymous (<loc>) at :progr`

distinct messages:
- `ReferenceError: interval is not defined
    at test-timers-unenroll-unref-interval.js:7:18
    at _return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
TypeError: (intermediate value)(...).unref is not a function
    at :anonymous (test-timers-unenroll-unref-interval.js`
example test: `test/parallel/test-timers-unenroll-unref-interval.js`

### 1 × `ReferenceError: test is not defined at :program (<eval><loc>) at anonymous (<function><loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `ReferenceError: test is not defined
    at :program (<eval>:1:1)
    at anonymous (<function>:3:38)
    at :anonymous (test-vm-function-redefinition.js:10:16)
    at :program (test-vm-function-redefinition.js:1:1)`
example test: `test/parallel/test-vm-function-redefinition.js`

### 1 × `ReferenceError: WebAssembly is not defined at :program (<eval><loc>) at anonymous (<function><loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `ReferenceError: WebAssembly is not defined
    at :program (<eval>:1:15)
    at anonymous (<function>:3:38)
    at :anonymous (test-vm-codegen.js:14:3)
    at :program (test-vm-codegen.js:1:1)`
example test: `test/parallel/test-vm-codegen.js`

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

### 1 × `SyntaxError: <eval><loc> Expected an operand but found % %PrepareFunctionForOptimization(Buffer.prototype.swap16) ^ at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `SyntaxError: <eval>:1:0 Expected an operand but found % %PrepareFunctionForOptimization(Buffer.prototype.swap16) ^
    at :anonymous (test-buffer-swap-fast.js:34:1)
    at :program (test-buffer-swap-fast.js:1:1)`
example test: `test/parallel/test-buffer-swap-fast.js`

### 1 × `TAP version <n> # Subtest: (node:timers/promises) is equal to (node:timers).promises not ok <n> - (node:timers/promises) is equal to (node:timers).promises --- `

distinct messages:
- `TAP version 13
# Subtest: (node:timers/promises) is equal to (node:timers).promises
not ok 1 - (node:timers/promises) is equal to (node:timers).promises
  ---
  duration_ms: 6
  failureType: 'testCodeFailure'
  error: "{setTimeout: {}, setImmediate: {}, setInterval: {}, scheduler: {wait: {}, yield: `
example test: `test/parallel/test-timers-promises.js`

### 1 × `TAP version <n> # Subtest: [object Object] not ok <n> - [object Object] --- duration_ms: <n> failureType: <str> error: <str> code: <str> ... <n>..<n> # tests <n`

distinct messages:
- `TAP version 13
# Subtest: [object Object]
not ok 1 - [object Object]
  ---
  duration_ms: 20
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
  duration_ms: 1
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
          duration_ms: 0
          failureType: 'testCodeFailure'
          erro`
example test: `test/parallel/test-require-package-map.js`

### 1 × `TAP version <n> # Subtest: deepEqual not ok <n> - deepEqual --- duration_ms: <n> failureType: <str> error: <str> code: <str> ... # Subtest: loose deepEqual not `

distinct messages:
- `TAP version 13
# Subtest: deepEqual
not ok 1 - deepEqual
  ---
  duration_ms: 1
  failureType: 'testCodeFailure'
  error: "Got unwanted exception: [120, 121, 122, 10] deepStrictEqual {}"
  code: 'ERR_ASSERTION'
  ...
# Subtest: loose deepEqual
not ok 2 - loose deepEqual
  ---
  duration_ms: 2
  fail`
example test: `test/parallel/test-assert-deep.js`

### 1 × `TAP version <n> # Subtest: equalArrayPairs # Subtest: not ok <n> - --- duration_ms: <n> failureType: <str> error: <str> code: <str> ... # Subtest: not ok <n> - `

distinct messages:
- `TAP version 13
# Subtest: equalArrayPairs
    # Subtest: 
    not ok 1 - 
      ---
      duration_ms: 39
      failureType: 'testCodeFailure'
      error: "assert.partialDeepStrictEqual is not a function"
      code: 'ERR_TEST_FAILURE'
      ...
    # Subtest: 
    not ok 2 - 
      ---
      durat`
example test: `test/parallel/test-assert-typedarray-deepequal.js`

### 1 × `TAP version <n> # Subtest: format invalid input not ok <n> - format invalid input --- duration_ms: <n> failureType: <str> error: <str> code: <str> ... <n>..<n> `

distinct messages:
- `TAP version 13
# Subtest: format invalid input
not ok 1 - format invalid input
  ---
  duration_ms: 2
  failureType: 'testCodeFailure'
  error: "Missing expected exception"
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
# duration_ms 4`
example test: `test/parallel/test-url-format-invalid-input.js`

### 1 × `TAP version <n> # Subtest: fs.stat should throw AbortError when called with an already aborted AbortSignal not ok <n> - fs.stat should throw AbortError when cal`

distinct messages:
- `TAP version 13
# Subtest: fs.stat should throw AbortError when called with an already aborted AbortSignal
not ok 1 - fs.stat should throw AbortError when called with an already aborted AbortSignal
  ---
  duration_ms: 14
  failureType: 'testCodeFailure'
  error: "Missing expected rejection"
  code: `
example test: `test/parallel/test-fs-stat-abort-test.js`

### 1 × `TAP version <n> # Subtest: Handle error causes not ok <n> - Handle error causes --- duration_ms: <n> failureType: <str> error: <str> code: <str> ... # Subtest: `

distinct messages:
- `TAP version 13
# Subtest: Handle error causes
not ok 1 - Handle error causes
  ---
  duration_ms: 4
  failureType: 'testCodeFailure'
  error: "Missing expected exception"
  code: 'ERR_ASSERTION'
  ...
# Subtest: Handle undefined causes
not ok 2 - Handle undefined causes
  ---
  duration_ms: 0
  fail`
example test: `test/parallel/test-assert-deep-with-error.js`

### 1 × `TAP version <n> # Subtest: invalid arguments not ok <n> - invalid arguments --- duration_ms: <n> failureType: <str> error: <str> code: <str> ... # Subtest: inpu`

distinct messages:
- `TAP version 13
# Subtest: invalid arguments
not ok 1 - invalid arguments
  ---
  duration_ms: 10
  failureType: 'testCodeFailure'
  error: "Got unwanted exception: fileURLToPath: input is not a valid URL"
  code: 'ERR_ASSERTION'
  ...
# Subtest: input must be a file URL
not ok 2 - input must be a fi`
example test: `test/parallel/test-url-fileurltopath.js`

### 1 × `TAP version <n> # Subtest: module is not instantiated yet not ok <n> - module is not instantiated yet --- duration_ms: <n> failureType: <str> error: <str> code:`

distinct messages:
- `TAP version 13
# Subtest: module is not instantiated yet
not ok 1 - module is not instantiated yet
  ---
  duration_ms: 6
  failureType: 'testCodeFailure'
  error: "Got unwanted exception: foo.hasAsyncGraph is not a function"
  code: 'ERR_ASSERTION'
  ...
# Subtest: simple module with top-level awai`
example test: `test/parallel/test-vm-module-hasasyncgraph.js`

### 1 × `TAP version <n> # Subtest: No args not ok <n> - No args --- duration_ms: <n> failureType: <str> error: <str> code: <str> ... # Subtest: One arg = message not ok`

distinct messages:
- `TAP version 13
# Subtest: No args
not ok 1 - No args
  ---
  duration_ms: 2
  failureType: 'testCodeFailure'
  error: "Got unwanted exception: Failed"
  code: 'ERR_ASSERTION'
  ...
# Subtest: One arg = message
not ok 2 - One arg = message
  ---
  duration_ms: 1
  failureType: 'testCodeFailure'
  err`
example test: `test/parallel/test-assert-fail.js`

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
  duration_ms: 5
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

### 1 × `TAP version <n> # Subtest: Test that assert.ifError has the correct stack trace of both stacks not ok <n> - Test that assert.ifError has the correct stack trace`

distinct messages:
- `TAP version 13
# Subtest: Test that assert.ifError has the correct stack trace of both stacks
not ok 1 - Test that assert.ifError has the correct stack trace of both stacks
  ---
  duration_ms: 1
  failureType: 'testCodeFailure'
  error: "undefined === null"
  code: 'ERR_ASSERTION'
  ...
# Subtest: `
example test: `test/parallel/test-assert-if-error.js`

### 1 × `TAP version <n> # Subtest: Using resizable ArrayBuffer with Buffer... # Subtest: works as expected not ok <n> - works as expected --- duration_ms: <n> failureTy`

distinct messages:
- `TAP version 13
# Subtest: Using resizable ArrayBuffer with Buffer...
    # Subtest: works as expected
    not ok 1 - works as expected
      ---
      duration_ms: 0
      failureType: 'testCodeFailure'
      error: "undefined === 9"
      code: 'ERR_ASSERTION'
      ...
    # Subtest: works with th`
example test: `test/parallel/test-buffer-resizable.js`

### 1 × `TAP version <n> # Subtest: validation not ok <n> - validation --- duration_ms: <n> failureType: <str> error: <str> code: <str> ... # Subtest: performs flush ok `

distinct messages:
- `TAP version 13
# Subtest: validation
not ok 1 - validation
  ---
  duration_ms: 1
  failureType: 'testCodeFailure'
  error: "Missing expected exception"
  code: 'ERR_ASSERTION'
  ...
# Subtest: performs flush
ok 2 - performs flush
# Subtest: does not perform flush
ok 3 - does not perform flush
# Sub`
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

### 1 × `TAP version <n> # Subtest: Worker eval module typescript without input-type ok <n> - Worker eval module typescript without input-type # SKIP # Subtest: Worker e`

distinct messages:
- `TAP version 13
# Subtest: Worker eval module typescript without input-type
ok 1 - Worker eval module typescript without input-type # SKIP
# Subtest: Worker eval module typescript with --input-type=module-typescript
ok 2 - Worker eval module typescript with --input-type=module-typescript # SKIP
# Sub`
example test: `test/parallel/test-worker-eval-typescript.js`

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

### 1 × `TypeError: (intermediate value).from(...).map is not a function at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: (intermediate value).from(...).map is not a function
    at :anonymous (test-buffer-nopendingdep-map.js:11:1)
    at :program (test-buffer-nopendingdep-map.js:1:1)`
example test: `test/parallel/test-buffer-nopendingdep-map.js`

### 1 × `TypeError: (intermediate value).gc is not a function at <loc> at _return (<loc>)`

distinct messages:
- `TypeError: (intermediate value).gc is not a function
    at test-async-hooks-destroy-on-gc.js:25:14
    at _return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)`
example test: `test/parallel/test-async-hooks-destroy-on-gc.js`

### 1 × `TypeError: (intermediate value).hrtime.bigint is not a function at runSyncTest (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: (intermediate value).hrtime.bigint is not a function
    at runSyncTest (test-fs-stat-bigint.js:97:21)
    at :anonymous (test-fs-stat-bigint.js:107:3)
    at :program (test-fs-stat-bigint.js:1:1)`
example test: `test/parallel/test-fs-stat-bigint.js`

### 1 × `TypeError: (intermediate value).of is not a function at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: (intermediate value).of is not a function
    at :anonymous (test-buffer-of-no-deprecation.js:7:1)
    at :program (test-buffer-of-no-deprecation.js:1:1)`
example test: `test/parallel/test-buffer-of-no-deprecation.js`

### 1 × `TypeError: (intermediate value).threadCpuUsage is not a function at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: (intermediate value).threadCpuUsage is not a function
    at :anonymous (test-process-threadCpuUsage-main-thread.js:21:18)
    at :program (test-process-threadCpuUsage-main-thread.js:1:1)`
example test: `test/parallel/test-process-threadCpuUsage-main-thread.js`

### 1 × `TypeError: (intermediate value)(...).unref is not a function at <loc>`

distinct messages:
- `TypeError: (intermediate value)(...).unref is not a function
    at test-timers-immediate-unref-nested-once.js:8:38`
example test: `test/parallel/test-timers-immediate-unref-nested-once.js`

### 1 × `TypeError: (intermediate value)(...).unref is not a function at EventEmitter.<anonymous> (<loc>) at EventEmitter.emit (native)`

distinct messages:
- `TypeError: (intermediate value)(...).unref is not a function
    at EventEmitter.<anonymous> (test-worker-arraybuffer-zerofill.js:28:66)
    at EventEmitter.emit (native)`
example test: `test/parallel/test-worker-arraybuffer-zerofill.js`

### 1 × `TypeError: (intermediate value)(...).unref is not a function at Process.<anonymous> (<loc>) at Process._return (<loc>)`

distinct messages:
- `TypeError: (intermediate value)(...).unref is not a function
    at Process.<anonymous> (test-timers-unrefed-in-beforeexit.js:6:39)
    at Process._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)`
example test: `test/parallel/test-timers-unrefed-in-beforeexit.js`

### 1 × `TypeError: <this>.getSymbolValue is not a function at :program (<eval><loc>) at anonymous (<function><loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: <this>.getSymbolValue is not a function
    at :program (<eval>:1:1)
    at anonymous (<function>:3:38)
    at :anonymous (test-vm-symbols.js:23:20)
    at :program (test-vm-symbols.js:1:1)`
example test: `test/parallel/test-vm-symbols.js`

### 1 × `TypeError: a.compare is not a function at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: a.compare is not a function
    at :anonymous (test-buffer-compare-offset.js:9:20)
    at :program (test-buffer-compare-offset.js:1:1)`
example test: `test/parallel/test-buffer-compare-offset.js`

### 1 × `TypeError: b.compare is not a function at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: b.compare is not a function
    at :anonymous (test-buffer-compare.js:11:20)
    at :program (test-buffer-compare.js:1:1)`
example test: `test/parallel/test-buffer-compare.js`

### 1 × `TypeError: BroadcastChannel is not a constructor at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: BroadcastChannel is not a constructor
    at :anonymous (test-worker-broadcastchannel-wpt.js:10:14)
    at :program (test-worker-broadcastchannel-wpt.js:1:1)`
example test: `test/parallel/test-worker-broadcastchannel-wpt.js`

### 1 × `TypeError: buf[((<str> + (intermediate value)) + <str>)] is not a function at :anonymous (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: buf[(("writeBigInt64" + (intermediate value)) + "")] is not a function
    at :anonymous (test-buffer-bigint64.js:10:3)
    at :anonymous (test-buffer-bigint64.js:7:1)
    at :program (test-buffer-bigint64.js:1:1)`
example test: `test/parallel/test-buffer-bigint64.js`

### 1 × `TypeError: callback is not a function at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: callback is not a function
    at :anonymous (test-stream-typedarray.js:72:3)
    at :program (test-stream-typedarray.js:1:1)`
example test: `test/parallel/test-stream-typedarray.js`

### 1 × `TypeError: Cannot add property <str> to non-object <n> at <loc> at _return (<loc>)`

distinct messages:
- `TypeError: Cannot add property "_repeat" to non-object 1
    at test-timers-timeout-to-interval.js:7:38
    at _return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)`
example test: `test/parallel/test-timers-timeout-to-interval.js`

### 1 × `TypeError: Cannot add property <str> to non-object <n> at <loc> at _return (<loc>) TypeError: timer.unref is not a function at :anonymous (<loc>) at :program (<`

distinct messages:
- `TypeError: Cannot add property "_onTimeout" to non-object 2
    at test-timers-unrefd-interval-still-fires.js:13:43
    at _return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
TypeError: timer.unref is not a function
    at :anonymous (test-timers-unrefd-interval-still`
example test: `test/parallel/test-timers-unrefd-interval-still-fires.js`

### 1 × `TypeError: Cannot convert a Symbol value to a string at :anonymous (<loc>) at :program (<loc>) AssertionError: [<str>, <str>] deepStrictEqual [<str>, <str>, <st`

distinct messages:
- `TypeError: Cannot convert a Symbol value to a string
    at :anonymous (test-event-emitter-remove-all-listeners.js:116:3)
    at :program (test-event-emitter-remove-all-listeners.js:1:1)
AssertionError: ['bar', 'foo'] deepStrictEqual ['bar', 'foo', 'removeListener']
    at Function.deepStrictEqual (`
example test: `test/parallel/test-event-emitter-remove-all-listeners.js`

### 1 × `TypeError: Cannot find module: <str> at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: Cannot find module: 'path'
    at :anonymous (test-require-resolve.js:35:20)
    at :program (test-require-resolve.js:1:1)`
example test: `test/parallel/test-require-resolve.js`

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

### 1 × `TypeError: Cannot read property <str> of null at EventEmitter.<anonymous> (<loc>) at EventEmitter._return (<loc>) at EventEmitter.emit (native)`

distinct messages:
- `TypeError: Cannot read property 'read' of null
    at EventEmitter.<anonymous> (test-worker-stdio-from-preload-module.js:18:24)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)`
example test: `test/parallel/test-worker-stdio-from-preload-module.js`

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

### 1 × `TypeError: Cannot read property <str> of undefined at onImmediate (<loc>) at onImmediate (<loc>) TypeError: Cannot read property <str> of undefined at onImmedia`

distinct messages:
- `TypeError: Cannot read property 'get' of undefined
    at onImmediate (test-timers-clearImmediate-als.js:21:21)
    at onImmediate (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
TypeError: Cannot read property 'get' of undefined
    at onImmediate (test-timers-clearImmed`
example test: `test/parallel/test-timers-clearImmediate-als.js`

### 1 × `TypeError: compressGzipSync is not a function at testGzipRoundTrip (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: compressGzipSync is not a function
    at testGzipRoundTrip (test-stream-iter-transform-sync.js:41:35)
    at :anonymous (test-stream-iter-transform-sync.js:211:1)
    at :program (test-stream-iter-transform-sync.js:1:1)`
example test: `test/parallel/test-stream-iter-transform-sync.js`

### 1 × `TypeError: duplexPair is not a function at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: duplexPair is not a function
    at :anonymous (test-stream-duplexpair.js:8:16)
    at :program (test-stream-duplexpair.js:1:1)`
example test: `test/parallel/test-stream-duplexpair.js`

### 1 × `TypeError: fromWritable is not a function at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: fromWritable is not a function
    at :anonymous (test-stream-iter-from-writable-cache-options.js:12:3)
    at :program (test-stream-iter-from-writable-cache-options.js:1:1)`
example test: `test/parallel/test-stream-iter-from-writable-cache-options.js`

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

### 1 × `TypeError: getMaxListeners is not a function at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: getMaxListeners is not a function
    at :anonymous (test-events-getmaxlisteners.js:9:22)
    at :program (test-events-getmaxlisteners.js:1:1)`
example test: `test/parallel/test-events-getmaxlisteners.js`

### 1 × `TypeError: immediate.hasRef is not a function at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: immediate.hasRef is not a function
    at :anonymous (test-timers-immediate-unref.js:7:20)
    at :program (test-timers-immediate-unref.js:1:1)`
example test: `test/parallel/test-timers-immediate-unref.js`

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

### 1 × `TypeError: Object.defineProperty called on non-object at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: Object.defineProperty called on non-object
    at :anonymous (test-vm-context-dont-contextify.js:13:19)
    at :program (test-vm-context-dont-contextify.js:1:1)`
example test: `test/parallel/test-vm-context-dont-contextify.js`

### 1 × `TypeError: Object{} is not iterable at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: Object{} is not iterable
    at :anonymous (test-buffer-iterator.js:1:61)
    at :program (test-buffer-iterator.js:1:1)`
example test: `test/parallel/test-buffer-iterator.js`

### 1 × `TypeError: Object{} is not iterable at isZeroFilled (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: Object{} is not iterable
    at isZeroFilled (test-buffer-zero-fill-cli.js:12:3)
    at :anonymous (test-buffer-zero-fill-cli.js:21:10)
    at :program (test-buffer-zero-fill-cli.js:1:1)`
example test: `test/parallel/test-buffer-zero-fill-cli.js`

### 1 × `TypeError: pathToFileURL: path must be an absolute filesystem path at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: pathToFileURL: path must be an absolute filesystem path
    at :anonymous (test-url-pathtofileurl.js:8:19)
    at :program (test-url-pathtofileurl.js:1:1)`
example test: `test/parallel/test-url-pathtofileurl.js`

### 1 × `TypeError: pipeline: every link must be a Readable on the left and a Writable on the right at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: pipeline: every link must be a Readable on the left and a Writable on the right
    at :anonymous (test-stream-pipeline-uncaught.js:18:1)
    at :program (test-stream-pipeline-uncaught.js:1:1)`
example test: `test/parallel/test-stream-pipeline-uncaught.js`

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

### 1 × `TypeError: Readable.from(...).compose is not a function at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: Readable.from(...).compose is not a function
    at :anonymous (test-stream-readable-compose.js:13:18)
    at :program (test-stream-readable-compose.js:1:1)`
example test: `test/parallel/test-stream-readable-compose.js`

### 1 × `TypeError: receiver is not a Buffer at :anonymous (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: receiver is not a Buffer
    at :anonymous (test-buffer-inheritance.js:31:3)
    at :anonymous (test-buffer-inheritance.js:25:1)
    at :program (test-buffer-inheritance.js:1:1)`
example test: `test/parallel/test-buffer-inheritance.js`

### 1 × `TypeError: receiver is not a Buffer at isMethod (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: receiver is not a Buffer
    at isMethod (test-buffer-generic-methods.js:101:37)
    at :anonymous (test-buffer-generic-methods.js:109:6)
    at :program (test-buffer-generic-methods.js:1:1)`
example test: `test/parallel/test-buffer-generic-methods.js`

### 1 × `TypeError: receiver is not an EventEmitter at MyEE (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: receiver is not an EventEmitter
    at MyEE (test-event-emitter-subclass.js:31:3)
    at :anonymous (test-event-emitter-subclass.js:37:14)
    at :program (test-event-emitter-subclass.js:1:1)`
example test: `test/parallel/test-event-emitter-subclass.js`

### 1 × `TypeError: Right-hand-side of instanceof is not an object at assertDir (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: Right-hand-side of instanceof is not an object
    at assertDir (test-fs-opendir.js:30:10)
    at :anonymous (test-fs-opendir.js:63:3)
    at :program (test-fs-opendir.js:1:1)`
example test: `test/parallel/test-fs-opendir.js`

### 1 × `TypeError: sb.entries is not a function at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: sb.entries is not a function
    at :anonymous (test-buffer-slow.js:14:28)
    at :program (test-buffer-slow.js:1:1)`
example test: `test/parallel/test-buffer-slow.js`

### 1 × `TypeError: storage.withScope is not a function at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: storage.withScope is not a function
    at :anonymous (test-async-local-storage-run-scope.js:14:19)
    at :program (test-async-local-storage-run-scope.js:1:1)`
example test: `test/parallel/test-async-local-storage-run-scope.js`

### 1 × `TypeError: stream.Stream is not a constructor at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: stream.Stream is not a constructor
    at :anonymous (test-stream-pipe-without-listenerCount.js:5:11)
    at :program (test-stream-pipe-without-listenerCount.js:1:1)`
example test: `test/parallel/test-stream-pipe-without-listenerCount.js`

### 1 × `TypeError: The <str> argument must be a number or Date. Received type string (<str>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: The "time" argument must be a number or Date. Received type string ('-1')
    at :anonymous (test-fs-timestamp-parsing-error.js:28:3)
    at :program (test-fs-timestamp-parsing-error.js:1:1)`
example test: `test/parallel/test-fs-timestamp-parsing-error.js`

### 1 × `TypeError: The <str> argument must be a number or Date. Received type string (<str>) at getExpectedMtime (<loc>) at runTests (<loc>) at runTests (<loc>) Asserti`

distinct messages:
- `TypeError: The "time" argument must be a number or Date. Received type string ('-1')
    at getExpectedMtime (test-fs-utimes.js:75:13)
    at runTests (test-fs-utimes.js:106:31)
    at runTests (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
AssertionError: Missing expect`
example test: `test/parallel/test-fs-utimes.js`

### 1 × `TypeError: The <str> argument must be of type function. Received type string (<str>) at testValid (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: The "cb" argument must be of type function. Received type string ('JSUndefined')
    at testValid (test-fs-read-optional-params.js:16:3)
    at :anonymous (test-fs-read-optional-params.js:31:1)
    at :program (test-fs-read-optional-params.js:1:1)`
example test: `test/parallel/test-fs-read-optional-params.js`

### 1 × `TypeError: The <str> argument must be of type string or an instance of Buffer or URL. Received an instance of Uint8Array at :anonymous (<loc>) at :program (<loc`

distinct messages:
- `TypeError: The "path" argument must be of type string or an instance of Buffer or URL. Received an instance of Uint8Array
    at :anonymous (test-fs-mkdtemp.js:89:21)
    at :program (test-fs-mkdtemp.js:1:1)`
example test: `test/parallel/test-fs-mkdtemp.js`

### 1 × `TypeError: The <str> argument must be of type string or an instance of Buffer or URL. Received type boolean (false) at :=> (<loc>) at :anonymous (<loc>) at :pro`

distinct messages:
- `TypeError: The "path" argument must be of type string or an instance of Buffer or URL. Received type boolean (false)
    at :=> (test-fs-lchown.js:16:3)
    at :anonymous (test-fs-lchown.js:11:1)
    at :program (test-fs-lchown.js:1:1)`
example test: `test/parallel/test-fs-lchown.js`

### 1 × `TypeError: The worker script or module filename must be an absolute path or a relative path starting with <str> or <str>. Received <str>. at :=> (<loc>) at _ret`

distinct messages:
- `TypeError: The worker script or module filename must be an absolute path or a relative path starting with './' or '../'. Received "unknown".
    at :=> (test-worker-exit-code.js:29:15)
    at _return (index.js:573:12)
    at :=> (test-worker-exit-code.js:45:32)
    at parent (test-worker-exit-code.j`
example test: `test/parallel/test-worker-exit-code.js`

### 1 × `TypeError: timer.hasRef is not a function at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: timer.hasRef is not a function
    at :anonymous (test-timers-unref.js:36:20)
    at :program (test-timers-unref.js:1:1)`
example test: `test/parallel/test-timers-unref.js`

### 1 × `TypeError: timer.refresh is not a function at <loc> at _return (<loc>)`

distinct messages:
- `TypeError: timer.refresh is not a function
    at test-timers-refresh-in-callback.js:12:11
    at _return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)`
example test: `test/parallel/test-timers-refresh-in-callback.js`

### 1 × `TypeError: toReadable is not a function at testNotObjectMode (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: toReadable is not a function
    at testNotObjectMode (test-stream-iter-to-readable.js:261:20)
    at :anonymous (test-stream-iter-to-readable.js:604:1)
    at :program (test-stream-iter-to-readable.js:1:1)`
example test: `test/parallel/test-stream-iter-to-readable.js`

### 1 × `TypeError: TypeError: Cannot load module: <str>`

distinct messages:
- `TypeError: TypeError: Cannot load module: 'net'`
example test: `test/parallel/test-worker-cleanexit-with-moduleload.js`

### 1 × `TypeError: TypeError: Cannot load module: <str> AssertionError: Missing expected exception at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: TypeError: Cannot load module: 'internal/options'
AssertionError: Missing expected exception
    at :anonymous (test-worker-cli-options.js:29:1)
    at :program (test-worker-cli-options.js:1:1)`
example test: `test/parallel/test-worker-cli-options.js`

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

### 1 × `Uncaught (in promise) AssertionError: [] deepStrictEqual [<str>]`

distinct messages:
- `Uncaught (in promise) AssertionError: [] deepStrictEqual ['foo']`
example test: `test/parallel/test-vm-module-link.js`

### 1 × `Uncaught (in promise) AssertionError: <n> === <n> Uncaught (in promise) Error: stream.push() after EOF AssertionError: Got unwanted exception: flatMap: fn must `

distinct messages:
- `Uncaught (in promise) AssertionError: 0 === 5
Uncaught (in promise) Error: stream.push() after EOF
AssertionError: Got unwanted exception: flatMap: fn must be a function
    at :anonymous (test-stream-flatMap.js:112:3)
    at :program (test-stream-flatMap.js:1:1)`
example test: `test/parallel/test-stream-flatMap.js`

### 1 × `Uncaught (in promise) AssertionError: <str> === <str> AssertionError: Missing expected exception at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `Uncaught (in promise) AssertionError: 'undefined' === 'object'
AssertionError: Missing expected exception
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

### 1 × `Uncaught (in promise) AssertionError: Got rejection that did not match expected: Object{} Uncaught (in promise) AssertionError: Got rejection that did not match`

distinct messages:
- `Uncaught (in promise) AssertionError: Got rejection that did not match expected: Object{}
Uncaught (in promise) AssertionError: Got rejection that did not match expected: Object{}
AssertionError: Missing expected exception
    at :anonymous (test-timers-promises-scheduler.js:49:1)
    at :program (t`
example test: `test/parallel/test-timers-promises-scheduler.js`

### 1 × `Uncaught (in promise) AssertionError: Got rejection that did not match expected: TypeError: decompressGzip is not a function`

distinct messages:
- `Uncaught (in promise) AssertionError: Got rejection that did not match expected: TypeError: decompressGzip is not a function`
example test: `test/parallel/test-stream-iter-transform-errors.js`

### 1 × `Uncaught (in promise) AssertionError: Got unwanted exception: RangeError: Maximum call stack size exceeded`

distinct messages:
- `Uncaught (in promise) AssertionError: Got unwanted exception: RangeError: Maximum call stack size exceeded`
example test: `test/parallel/test-worker-stack-overflow-stack-size.js`

### 1 × `Uncaught (in promise) AssertionError: Got unwanted exception: The <str> argument must be of type function. Received type string (<str>)`

distinct messages:
- `Uncaught (in promise) AssertionError: Got unwanted exception: The "cb" argument must be of type function. Received type string ('JSUndefined')`
example test: `test/parallel/test-fs-write-optional-params.js`

### 1 × `Uncaught (in promise) AssertionError: Got unwanted exception: The <str> argument must be of type string or an instance of Buffer, TypedArray, or DataView. Recei`

distinct messages:
- `Uncaught (in promise) AssertionError: Got unwanted exception: The "data" argument must be of type string or an instance of Buffer, TypedArray, or DataView. Received type string ('false')
Uncaught (in promise) AssertionError: Got unwanted exception: The "data" argument must be of type string or an in`
example test: `test/parallel/test-fs-append-file.js`

### 1 × `Uncaught (in promise) AssertionError: iterator.setEncoding is not a function === kaboom Error: kaboom`

distinct messages:
- `Uncaught (in promise) AssertionError: iterator.setEncoding is not a function === kaboom
Error: kaboom`
example test: `test/parallel/test-stream-pipeline-async-iterator.js`

### 1 × `Uncaught (in promise) AssertionError: length mismatch: <n> !== <n>`

distinct messages:
- `Uncaught (in promise) AssertionError: length mismatch: 6 !== 3`
example test: `test/parallel/test-stream-iter-cross-realm.js`

### 1 × `Uncaught (in promise) AssertionError: undefined == true`

distinct messages:
- `Uncaught (in promise) AssertionError: undefined == true`
example test: `test/parallel/test-stream-iter-namespace.js`

### 1 × `Uncaught (in promise) AssertionError: undefined === <n> Uncaught (in promise) AssertionError: undefined === <n> Uncaught (in promise) AssertionError: undefined `

distinct messages:
- `Uncaught (in promise) AssertionError: undefined === 120
Uncaught (in promise) AssertionError: undefined === 120
Uncaught (in promise) AssertionError: undefined === 120`
example test: `test/parallel/test-fs-read-offset-null.js`

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

### 1 × `Uncaught (in promise) AssertionError: undefined deepStrictEqual {foo: <str>}`

distinct messages:
- `Uncaught (in promise) AssertionError: undefined deepStrictEqual {foo: 'bar'}`
example test: `test/parallel/test-diagnostics-channel-tracing-channel-promise-run-stores.js`

### 1 × `Uncaught (in promise) AssertionError: undefined deepStrictEqual <n>`

distinct messages:
- `Uncaught (in promise) AssertionError: undefined deepStrictEqual 4`
example test: `test/parallel/test-fs-readv-promisify.js`

### 1 × `Uncaught (in promise) AssertionError: unexpected events for prefix-sibling entries: [{<str>:<str>,<str>:<str>}]`

distinct messages:
- `Uncaught (in promise) AssertionError: unexpected events for prefix-sibling entries: [{"eventType":"rename","filename":"foo_"}]`
example test: `test/parallel/test-fs-watch-recursive-prefix-sibling.js`

### 1 × `Uncaught (in promise) Error: boom Uncaught (in promise) TypeError: Cannot read property <str> of null`

distinct messages:
- `Uncaught (in promise) Error: boom
Uncaught (in promise) TypeError: Cannot read property 'signal' of null`
example test: `test/parallel/test-events-once.js`

### 1 × `Uncaught (in promise) Error: ENOENT: no such file or directory, open <str> Uncaught (in promise) Error: ENOENT: no such file or directory, open <str>`

distinct messages:
- `Uncaught (in promise) Error: ENOENT: no such file or directory, open 'unknown'
Uncaught (in promise) Error: ENOENT: no such file or directory, open 'unknown'`
example test: `test/parallel/test-fs-promises-file-handle-dispose.js`

### 1 × `Uncaught (in promise) Error: ENOENT: no such file or directory, open <str> Uncaught (in promise) Error: ENOENT: no such file or directory, open <str> Uncaught (`

distinct messages:
- `Uncaught (in promise) Error: ENOENT: no such file or directory, open 'unknown'
Uncaught (in promise) Error: ENOENT: no such file or directory, open 'unknown'
Uncaught (in promise) Error: ENOENT: no such file or directory, open 'unknown'
Uncaught (in promise) Error: ENOENT: no such file or directory,`
example test: `test/parallel/test-worker-message-port-transfer-filehandle.js`

### 1 × `Uncaught (in promise) Error: kaboom Uncaught (in promise) Error: kaboom Uncaught (in promise) Error: kaboom Uncaught (in promise) Error: kaboom`

distinct messages:
- `Uncaught (in promise) Error: kaboom
Uncaught (in promise) Error: kaboom
Uncaught (in promise) Error: kaboom
Uncaught (in promise) Error: kaboom`
example test: `test/parallel/test-stream-catch-rejections.js`

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

### 1 × `Uncaught (in promise) TypeError: arrayBufferSync is not a function`

distinct messages:
- `Uncaught (in promise) TypeError: arrayBufferSync is not a function`
example test: `test/parallel/test-stream-iter-consumers-bytes.js`

### 1 × `Uncaught (in promise) TypeError: Cannot read property <str> of undefined AssertionError: Got unwanted exception: Cannot read property <str> of undefined at test`

distinct messages:
- `Uncaught (in promise) TypeError: Cannot read property 'from' of undefined
AssertionError: Got unwanted exception: Cannot read property 'from' of undefined
    at testShareFromRejectsNonStreamable (test-stream-iter-share-from.js:30:3)
    at :anonymous (test-stream-iter-share-from.js:231:3)
    at :p`
example test: `test/parallel/test-stream-iter-share-from.js`

### 1 × `Uncaught (in promise) TypeError: Cannot read property <str> of undefined Uncaught (in promise) TypeError: Cannot read property <str> of undefined Uncaught (in p`

distinct messages:
- `Uncaught (in promise) TypeError: Cannot read property 'from' of undefined
Uncaught (in promise) TypeError: Cannot read property 'from' of undefined
Uncaught (in promise) TypeError: Cannot read property 'from' of undefined
Uncaught (in promise) TypeError: Cannot read property 'from' of undefined
Unca`
example test: `test/parallel/test-stream-iter-broadcast-from.js`

### 1 × `Uncaught (in promise) TypeError: compressGzip is not a function`

distinct messages:
- `Uncaught (in promise) TypeError: compressGzip is not a function`
example test: `test/parallel/test-stream-iter-transform-roundtrip.js`

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

### 1 × `Uncaught (in promise) TypeError: hrtime is not a function AssertionError: Got unwanted exception: hrtime is not a function at :anonymous (<loc>) at :program (<l`

distinct messages:
- `Uncaught (in promise) TypeError: hrtime is not a function
AssertionError: Got unwanted exception: hrtime is not a function
    at :anonymous (test-vm-timeout-escape-promise.js:27:1)
    at :program (test-vm-timeout-escape-promise.js:1:1)`
example test: `test/parallel/test-vm-timeout-escape-promise.js`

### 1 × `Uncaught (in promise) TypeError: hrtime is not a function AssertionError: Missing expected exception at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `Uncaught (in promise) TypeError: hrtime is not a function
AssertionError: Missing expected exception
    at :anonymous (test-vm-timeout-escape-promise-2.js:26:1)
    at :program (test-vm-timeout-escape-promise-2.js:1:1)`
example test: `test/parallel/test-vm-timeout-escape-promise-2.js`

### 1 × `Uncaught (in promise) TypeError: Invalid module specifier: <str>`

distinct messages:
- `Uncaught (in promise) TypeError: Invalid module specifier: ''`
example test: `test/parallel/test-vm-module-dynamic-namespace.js`

### 1 × `Uncaught (in promise) TypeError: Module not found: <str>`

distinct messages:
- `Uncaught (in promise) TypeError: Module not found: 'http'`
example test: `test/parallel/test-diagnostics-channel-module-import.js`

### 1 × `Uncaught (in promise) TypeError: Module not found: <str> Uncaught (in promise) TypeError: Module not found: <str> Uncaught (in promise) TypeError: The <str> arg`

distinct messages:
- `Uncaught (in promise) TypeError: Module not found: 'mod1'
Uncaught (in promise) TypeError: Module not found: 'mod1'
Uncaught (in promise) TypeError: The "asyncFn" argument must be a Promise or async function`
example test: `test/parallel/test-vm-module-dynamic-import-promise.js`

### 1 × `Uncaught (in promise) TypeError: not a constructor Uncaught (in promise) TypeError: not a constructor Uncaught (in promise) TypeError: not a constructor Asserti`

distinct messages:
- `Uncaught (in promise) TypeError: not a constructor
Uncaught (in promise) TypeError: not a constructor
Uncaught (in promise) TypeError: not a constructor
AssertionError: Got unwanted exception: Cannot read property 'prototype' of undefined
    at :anonymous (test-eventemitter-asyncresource.js:131:1)
`
example test: `test/parallel/test-eventemitter-asyncresource.js`

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

### 1 × `Uncaught (in promise) TypeError: SyntheticModule is not a constructor`

distinct messages:
- `Uncaught (in promise) TypeError: SyntheticModule is not a constructor`
example test: `test/parallel/test-vm-module-synthetic.js`

### 1 × `Uncaught (in promise) TypeError: tapSync is not a function Uncaught (in promise) TypeError: tap is not a function Uncaught (in promise) TypeError: push is not a`

distinct messages:
- `Uncaught (in promise) TypeError: tapSync is not a function
Uncaught (in promise) TypeError: tap is not a function
Uncaught (in promise) TypeError: push is not a function
Uncaught (in promise) TypeError: tap is not a function
TypeError: tapSync is not a function
    at testTapSyncErrorPropagation (te`
example test: `test/parallel/test-stream-iter-consumers-tap.js`

### 1 × `Uncaught (in promise) TypeError: TextDecoder.decode: input must be a BufferSource (ArrayBuffer or TypedArray) Uncaught (in promise) TypeError: TextDecoder.decod`

distinct messages:
- `Uncaught (in promise) TypeError: TextDecoder.decode: input must be a BufferSource (ArrayBuffer or TypedArray)
Uncaught (in promise) TypeError: TextDecoder.decode: input must be a BufferSource (ArrayBuffer or TypedArray)
Uncaught (in promise) AssertionError: ' �' === '€'
Uncaught (in promise) TypeErr`
example test: `test/parallel/test-stream-iter-consumers-text.js`

### 1 × `Uncaught (in promise) TypeError: The <str> argument must be an instance of Buffer, TypedArray, or DataView. Received type string (<str>) Uncaught (in promise) T`

distinct messages:
- `Uncaught (in promise) TypeError: The "buffer" argument must be an instance of Buffer, TypedArray, or DataView. Received type string ('com.oracle.truffle.js.run...')
Uncaught (in promise) TypeError: Cannot read property 'byteLength' of undefined`
example test: `test/parallel/test-fs-read-promises-optional-params.js`

### 1 × `Uncaught (in promise) TypeError: The <str> argument must be of type string or an instance of Buffer or URL. Received null Uncaught (in promise) TypeError: The <`

distinct messages:
- `Uncaught (in promise) TypeError: The "path" argument must be of type string or an instance of Buffer or URL. Received null
Uncaught (in promise) TypeError: The "path" argument must be of type string or an instance of Buffer or URL. Received null
Uncaught (in promise) TypeError: The "path" argument m`
example test: `test/parallel/test-fs-read-stream-file-handle.js`

### 1 × `Uncaught (in promise) TypeError: The <str> argument must be of type string or an instance of Buffer or URL. Received undefined`

distinct messages:
- `Uncaught (in promise) TypeError: The "path" argument must be of type string or an instance of Buffer or URL. Received undefined`
example test: `test/parallel/test-fs-promises-statfs-validate-path.js`

### 1 × `Uncaught (in promise) TypeError: The worker script or module filename must be an absolute path or a relative path starting with <str> or <str>. Received <str>. `

distinct messages:
- `Uncaught (in promise) TypeError: The worker script or module filename must be an absolute path or a relative path starting with './' or '../'. Received "unknown".
Uncaught (in promise) TypeError: The "path" argument must be of type string or an instance of Buffer or URL. Received null`
example test: `test/parallel/test-fs-promises-file-handle-read-worker.js`

### 1 × `Uncaught (in promise) TypeError: transform is not a function`

distinct messages:
- `Uncaught (in promise) TypeError: transform is not a function`
example test: `test/parallel/test-stream-iter-pull-async.js`

### 1 × `Uncaught JSException in event listener: AssertionError: function should not have been called at <loc> called with arguments: { hello: <str> } AssertionError: un`

distinct messages:
- `Uncaught JSException in event listener: AssertionError: function should not have been called at test-worker-message-port-receive-message.js:22
called with arguments: { hello: 'world' }
AssertionError: undefined deepStrictEqual {message: {hello: 'world'}}
    at :anonymous (test-worker-message-port-r`
example test: `test/parallel/test-worker-message-port-receive-message.js`

### 1 × `undefined at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `undefined
    at :anonymous (test-event-emitter-no-error-provided-to-error-event.js:35:3)
    at :program (test-event-emitter-no-error-provided-to-error-event.js:1:1)`
example test: `test/parallel/test-event-emitter-no-error-provided-to-error-event.js`

### 1 × `util.stripVTControlCharacters() is not yet implemented`

distinct messages:
- `util.stripVTControlCharacters() is not yet implemented`
example test: `test/parallel/test-util-stripvtcontrolcharacters.js`

## By feature

| count | feature |
|---:|---|
| 184 | node:streams |
| 135 | node:fs |
| 105 | node:worker-threads |
| 75 | node:vm |
| 73 | node:process |
| 56 | node:buffer |
| 46 | node:module-loading |
| 39 | node:diagnostics-channel |
| 36 | node:timers |
| 31 | node:async-hooks |
| 31 | node:events |
| 25 | node:url |
| 20 | node:dns |
| 18 | node:util |
| 15 | node:console |
| 13 | node:assert |
| 7 | node:path |
