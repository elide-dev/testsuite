# Impact-ordered failures

## By root-cause signature

### 82 × `╭─────────────────────────────────────────────────────────────────────────────╮ │Error: node:worker_threads: new Worker() is not implemented yet in Elide │ │ │ `

distinct messages:
- `╭─────────────────────────────────────────────────────────────────────────────╮
│Error: node:worker_threads: new Worker() is not implemented yet in Elide     │
│                                                                             │
│ In file test/parallel/test-async-hooks-worker-asyncfn-term`
- `╭─────────────────────────────────────────────────────────────────────────────╮
│Error: node:worker_threads: new Worker() is not implemented yet in Elide     │
│                                                                             │
│ In file test/parallel/test-async-hooks-worker-asyncfn-term`
- `╭─────────────────────────────────────────────────────────────────────────────╮
│Error: node:worker_threads: new Worker() is not implemented yet in Elide     │
│                                                                             │
│ In file test/parallel/test-async-hooks-worker-asyncfn-term`
- `╭─────────────────────────────────────────────────────────────────────────────╮
│Error: node:worker_threads: new Worker() is not implemented yet in Elide     │
│                                                                             │
│ In file test/parallel/test-async-hooks-worker-asyncfn-term`
- `╭─────────────────────────────────────────────────────────────────────────────╮
│Error: node:worker_threads: new Worker() is not implemented yet in Elide     │
│                                                                             │
│ In file test/parallel/test-diagnostics-channel-worker-thre`
example test: `test/parallel/test-async-hooks-worker-asyncfn-terminate-1.js`

### 57 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: Cannot load module: <str> │ │ │ │ In file <loc> │ │─ Stack Trace ───`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'http'                                        │
│                                                                             │
│ In file test/parallel/test-async-hooks-execution-async-res`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'http'                                        │
│                                                                             │
│ In file test/parallel/test-async-hooks-http-parser-destroy`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'http'                                        │
│                                                                             │
│ In file test/parallel/test-async-local-storage-http-multic`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: '_http_common'                                │
│                                                                             │
│ In file test/parallel/test-async-local-storage-http-parser`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'node:http'                                   │
│                                                                             │
│ In file test/parallel/test-async-local-storage-http-agent.`
example test: `test/parallel/test-async-hooks-execution-async-resource.js`

### 50 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: Missing expected exception │ │ │ │ In file <loc> │ │─ Stack Tra`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: Missing expected exception                                   │
│                                                                             │
│ In file test/parallel/test-async-hooks-constructor.js:13:7`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: Missing expected exception                                   │
│                                                                             │
│ In file test/parallel/test-async-hooks-asyncresource-const`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: Missing expected exception                                   │
│                                                                             │
│ In file test/parallel/test-async-local-storage-bind.js:8:3`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: Missing expected exception                                   │
│                                                                             │
│ In file test/parallel/test-buffer-bytelength.js:14:3      `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: Missing expected exception                                   │
│                                                                             │
│ In file test/parallel/test-buffer-new.js:6:1              `
example test: `test/parallel/test-async-hooks-constructor.js`

### 25 × `Node API test timed out`

distinct messages:
- `Node API test timed out`
example test: `test/parallel/test-fs-promises-watch.js`

### 20 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: false == true │ │ │ │ In file <loc> │ │─ Stack Trace ──────────`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: false == true                                                │
│                                                                             │
│ In file test/parallel/test-buffer-equals.js:15:1          `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: false == true                                                │
│                                                                             │
│ In file test/parallel/test-buffer-includes.js:14:1        `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: false == true                                                │
│                                                                             │
│ In file test/parallel/test-buffer-parent-property.js:11:1 `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: false == true                                                │
│                                                                             │
│ In file test/parallel/test-buffer-safe-unsafe.js:14:1     `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: false == true                                                │
│                                                                             │
│ In file test/parallel/test-buffer-writedouble.js:12:1     `
example test: `test/parallel/test-buffer-equals.js`

### 19 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: <str> === <str> │ │ │ │ In file <loc> │ │─ Stack Trace ────────`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: 'undefined' === 'number'                                     │
│                                                                             │
│ In file test/parallel/test-buffer-constants.js:8:1        `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: '<Buffer 31 32 33 34>' === '<Buffer 31 32 ... 2 more bytes>' │
│                                                                             │
│ In file test/parallel/test-buffer-inspect.js:38:1         `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: 'abc' === ''                                                 │
│                                                                             │
│ In file test/parallel/test-buffer-tostring-range.js:10:1  `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: 'Hello 42 ' === 'Hello 42 '                                  │
│                                                                             │
│ In file test/parallel/test-console-tty-colors-per-stream.j`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: '{"a":2}' === '{ a: 2 }'                                     │
│                                                                             │
│ In file test/parallel/test-console-tty-colors.js:19:7     `
example test: `test/parallel/test-buffer-constants.js`

### 19 × `╭─────────────────────────────────────────────────────────────────────────────╮ │Error: node:child_process: spawnSync() is not implemented yet in Elide │ │ │ │ `

distinct messages:
- `╭─────────────────────────────────────────────────────────────────────────────╮
│Error: node:child_process: spawnSync() is not implemented yet in Elide       │
│                                                                             │
│ In file test/parallel/test-async-hooks-fatal-error.js:42:1`
- `╭─────────────────────────────────────────────────────────────────────────────╮
│Error: node:child_process: spawnSync() is not implemented yet in Elide       │
│                                                                             │
│ In file test/parallel/test-async-hooks-stack-overflow-nest`
- `╭─────────────────────────────────────────────────────────────────────────────╮
│Error: node:child_process: spawnSync() is not implemented yet in Elide       │
│                                                                             │
│ In file test/parallel/test-async-hooks-stack-overflow-try-`
- `╭─────────────────────────────────────────────────────────────────────────────╮
│Error: node:child_process: spawnSync() is not implemented yet in Elide       │
│                                                                             │
│ In file test/parallel/test-async-hooks-stack-overflow.js:3`
- `╭─────────────────────────────────────────────────────────────────────────────╮
│Error: node:child_process: spawnSync() is not implemented yet in Elide       │
│                                                                             │
│ In file test/parallel/test-buffer-constructor-node-modules`
example test: `test/parallel/test-async-hooks-fatal-error.js`

### 18 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: <n> === <n> │ │ │ │ In file <loc> │ │─ Stack Trace ────────────`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: 0 === 2                                                      │
│                                                                             │
│ In file test/parallel/test-buffer-badhex.js:10:3          `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: 8 === 0                                                      │
│                                                                             │
│ In file test/parallel/test-buffer-copy-immutable.js:19:3  `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: 1 === 0                                                      │
│                                                                             │
│ In file test/parallel/test-events-listener-count-with-list`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: 438 === 511                                                  │
│                                                                             │
│ In file test/parallel/test-fs-chmod-mask.js:41:5          `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: 493 === 420                                                  │
│                                                                             │
│ In file test/parallel/test-fs-mkdir-mode-mask.js:28:5     `
example test: `test/parallel/test-buffer-badhex.js`

### 14 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: Cannot read property <str> of undefined │ │ │ │ In file <loc> │ │─ S`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot read property 'triggerId' of undefined                     │
│                                                                             │
│ In file test/parallel/test-async-hooks-promise.js:28:20   `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot read property 'default' of undefined                       │
│                                                                             │
│ In file test/parallel/test-event-emitter-check-listener-le`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot read property 'prototype' of undefined                     │
│                                                                             │
│ In file test/parallel/test-event-emitter-prepend.js:30:43 `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot read property 'foo' of undefined                           │
│                                                                             │
│ In file test/parallel/test-event-emitter-remove-listeners.`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot read property 'hasOwnProperty' of undefined                │
│                                                                             │
│ In file test/parallel/test-event-emitter-special-event-nam`
example test: `test/parallel/test-async-hooks-promise.js`

### 12 × `╭─────────────────────────────────────────────────────────────────────────────╮ │Error: node:child_process: spawn() is not implemented yet in Elide │ │ │ │ In f`

distinct messages:
- `╭─────────────────────────────────────────────────────────────────────────────╮
│Error: node:child_process: spawn() is not implemented yet in Elide           │
│                                                                             │
│ In file test/parallel/test-diagnostics-channel-child-proce`
- `╭─────────────────────────────────────────────────────────────────────────────╮
│Error: node:child_process: spawn() is not implemented yet in Elide           │
│                                                                             │
│ In file test/parallel/test-fs-syncwritestream.js:29:14    `
- `╭─────────────────────────────────────────────────────────────────────────────╮
│Error: node:child_process: spawn() is not implemented yet in Elide           │
│                                                                             │
│ In file test/parallel/test-process-argv-0.js:29:17        `
- `╭─────────────────────────────────────────────────────────────────────────────╮
│Error: node:child_process: spawn() is not implemented yet in Elide           │
│                                                                             │
│ In file test/parallel/test-process-exec-argv.js:41:19     `
- `╭─────────────────────────────────────────────────────────────────────────────╮
│Error: node:child_process: spawn() is not implemented yet in Elide           │
│                                                                             │
│ In file test/parallel/test-process-external-stdio-close-sp`
example test: `test/parallel/test-diagnostics-channel-child-process.js`

### 12 × `Mismatched noop function calls. Expected exactly <n>, actual <n>. at Proxy.mustCall (<loc>) at <loc> at <loc>`

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

### 10 × `Mismatched noop function calls. Expected exactly <n>, actual <n>. at Proxy.mustCall (<loc>) at <loc> at <loc> Mismatched noop function calls. Expected exactly <`

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
    at test-stream-pipe-multiple-pipes.js:21:28
    at test-stream-pipe-multiple-pipes.js:1:1
Mismatched noop function calls. Expected exact`
- `Mismatched noop function calls. Expected exactly 1, actual 0.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at test-stream-pipe-flow.js:25:23
    at test-stream-pipe-flow.js:1:1
Mismatched noop function calls. Expected exactly 1, actual 0.
    `
example test: `test/parallel/test-async-hooks-disable-during-promise.js`

### 8 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: false === true │ │ │ │ In file <loc> │ │─ Stack Trace ─────────`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: false === true                                               │
│                                                                             │
│ In file test/parallel/test-fs-mkdir.js:134:3              `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: false === true                                               │
│                                                                             │
│ In file test/parallel/test-fs-promises.js:46:1            `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: false === true                                               │
│                                                                             │
│ In file test/parallel/test-fs-write-stream-end.js:57:5    `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: false === true                                               │
│                                                                             │
│ In file test/parallel/test-stream-construct.js:95:7       `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: false === true                                               │
│                                                                             │
│ In file test/parallel/test-stream-duplex-props.js:27:3    `
example test: `test/parallel/test-fs-mkdir.js`

### 8 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: undefined === <str> │ │ │ │ In file <loc> │ │─ Stack Trace ────`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: undefined === 'ENODATA'                                      │
│                                                                             │
│ In file test/parallel/test-dns-promises-exists.js:10:1    `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: undefined === 'undefined'                                    │
│                                                                             │
│ In file test/parallel/test-process-env-delete.js:8:1      `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: undefined === 'undefined'                                    │
│                                                                             │
│ In file test/parallel/test-process-env-deprecation.js:20:1`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: undefined === 'utf8'                                         │
│                                                                             │
│ In file test/parallel/test-stream-writable-change-default-`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: undefined === 'ERR_STREAM_DESTROYED'                         │
│                                                                             │
│ In file test/parallel/test-stream-write-destroy.js:28:9   `
example test: `test/parallel/test-dns-promises-exists.js`

### 7 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: undefined === <n> │ │ │ │ In file <loc> │ │─ Stack Trace ──────`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: undefined === 20                                             │
│                                                                             │
│ In file test/parallel/test-buffer-copy.js:120:5           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: undefined === 0                                              │
│                                                                             │
│ In file test/parallel/test-buffer-zero-fill.js:11:3       `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: undefined === 1                                              │
│                                                                             │
│ In file test/parallel/test-fs-read-stream-inherit.js:73:3 `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: undefined === 4                                              │
│                                                                             │
│ In file test/parallel/test-vm-context-property-forwarding.`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: undefined === 42                                             │
│                                                                             │
│ In file test/parallel/test-vm-global-contextual-store.js:1`
example test: `test/parallel/test-buffer-copy.js`

### 7 × `╭─────────────────────────────────────────────────────────────────────────────╮ │Error: node:child_process: exec() is not implemented yet in Elide │ │ │ │ In fi`

distinct messages:
- `╭─────────────────────────────────────────────────────────────────────────────╮
│Error: node:child_process: exec() is not implemented yet in Elide            │
│                                                                             │
│ In file test/parallel/test-fs-readfile-eof.js:30:3        `
- `╭─────────────────────────────────────────────────────────────────────────────╮
│Error: node:child_process: exec() is not implemented yet in Elide            │
│                                                                             │
│ In file test/parallel/test-fs-readfile-error.js:39:3      `
- `╭─────────────────────────────────────────────────────────────────────────────╮
│Error: node:child_process: exec() is not implemented yet in Elide            │
│                                                                             │
│ In file test/parallel/test-fs-readfile-pipe.js:46:1       `
- `╭─────────────────────────────────────────────────────────────────────────────╮
│Error: node:child_process: exec() is not implemented yet in Elide            │
│                                                                             │
│ In file test/parallel/test-fs-readfile-pipe-large.js:28:1 `
- `╭─────────────────────────────────────────────────────────────────────────────╮
│Error: node:child_process: exec() is not implemented yet in Elide            │
│                                                                             │
│ In file test/parallel/test-fs-readfilesync-pipe-large.js:2`
example test: `test/parallel/test-fs-readfile-eof.js`

### 6 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │java.lang.UnsupportedOperationException: process.chdir() is not yet │ │implemen`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│java.lang.UnsupportedOperationException: process.chdir() is not yet          │
│implemented                                                                  │
│                                                           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│java.lang.UnsupportedOperationException: process.chdir() is not yet          │
│implemented                                                                  │
│                                                           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│java.lang.UnsupportedOperationException: process.chdir() is not yet          │
│implemented                                                                  │
│                                                           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│java.lang.UnsupportedOperationException: process.chdir() is not yet          │
│implemented                                                                  │
│                                                           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│java.lang.UnsupportedOperationException: process.chdir() is not yet          │
│implemented                                                                  │
│                                                           `
example test: `test/parallel/test-fs-mkdtempDisposableSync.js`

### 6 × `Mismatched <anonymous> function calls. Expected exactly <n>, actual <n>. at Proxy.mustCall (<loc>) at <loc> at <loc>`

distinct messages:
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
- `Mismatched <anonymous> function calls. Expected exactly 2, actual 0.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at test-timers-max-duration-warning.js:12:30
    at test-timers-max-duration-warning.js:1:1`
example test: `test/parallel/test-fs-ready-event-stream.js`

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

### 5 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: Got unwanted exception: node:worker_threads: new Worker() is │ `

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: Got unwanted exception: node:worker_threads: new Worker() is │
│not implemented yet in Elide                                                 │
│                                                           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: Got unwanted exception: node:worker_threads: new Worker() is │
│not implemented yet in Elide                                                 │
│                                                           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: Got unwanted exception: node:worker_threads: new Worker() is │
│not implemented yet in Elide                                                 │
│                                                           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: Got unwanted exception: node:worker_threads: new Worker() is │
│not implemented yet in Elide                                                 │
│                                                           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: Got unwanted exception: node:worker_threads: new Worker() is │
│not implemented yet in Elide                                                 │
│                                                           `
example test: `test/parallel/test-worker-execargv-invalid.js`

### 5 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: receiver is not an EventEmitter │ │ │ │ In file <loc> │ │─ Stack Tra`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: receiver is not an EventEmitter                                   │
│                                                                             │
│ In file test/parallel/test-event-emitter-get-max-listeners`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: receiver is not an EventEmitter                                   │
│                                                                             │
│ In file test/parallel/test-event-emitter-subclass.js:31:3 `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: receiver is not an EventEmitter                                   │
│                                                                             │
│ In file test/parallel/test-fs-stream-construct-compat-old-`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: receiver is not an EventEmitter                                   │
│                                                                             │
│ In file test/parallel/test-fs-stream-construct-compat-erro`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: receiver is not an EventEmitter                                   │
│                                                                             │
│ In file test/parallel/test-fs-stream-construct-compat-grac`
example test: `test/parallel/test-event-emitter-get-max-listeners.js`

### 5 × `╭─────────────────────────────────────────────────────────────────────────────╮ │Error: ENOENT: no such file or directory, open <str> │ │ │ │ In file <loc> │ │─`

distinct messages:
- `╭─────────────────────────────────────────────────────────────────────────────╮
│Error: ENOENT: no such file or directory, open 'unknown'                     │
│                                                                             │
│ In file test/parallel/test-fs-close.js:8:12               `
- `╭─────────────────────────────────────────────────────────────────────────────╮
│Error: ENOENT: no such file or directory, open 'unknown'                     │
│                                                                             │
│ In file test/parallel/test-fs-open.js:39:1                `
- `╭─────────────────────────────────────────────────────────────────────────────╮
│Error: ENOENT: no such file or directory, open 'unknown'                     │
│                                                                             │
│ In file test/parallel/test-fs-options-immutable.js:16:1   `
- `╭─────────────────────────────────────────────────────────────────────────────╮
│Error: ENOENT: no such file or directory, open 'unknown'                     │
│                                                                             │
│ In file test/parallel/test-fs-promisified.js:12:14        `
- `╭─────────────────────────────────────────────────────────────────────────────╮
│Error: ENOENT: no such file or directory, open 'unknown'                     │
│                                                                             │
│ In file test/parallel/test-fs-readfile-zero-byte-liar.js:3`
example test: `test/parallel/test-fs-close.js`

### 5 × `Uncaught (in promise) Error: node:worker_threads: new Worker() is not implemented yet in Elide`

distinct messages:
- `Uncaught (in promise) Error: node:worker_threads: new Worker() is not implemented yet in Elide`
example test: `test/parallel/test-worker-heap-snapshot.js`

### 5 × `Uncaught (in promise) TypeError: Cannot read property <str> of undefined`

distinct messages:
- `Uncaught (in promise) TypeError: Cannot read property '1' of undefined`
- `Uncaught (in promise) TypeError: Cannot read property 'request' of undefined`
- `Uncaught (in promise) TypeError: Cannot read property 'from' of undefined`
- `Uncaught (in promise) TypeError: Cannot read property 'length' of undefined`
example test: `test/parallel/test-async-hooks-async-await.js`

### 4 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: Got unwanted exception: The <str> argument must be of type │ │s`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: Got unwanted exception: The "data" argument must be of type  │
│string or an instance of Buffer, TypedArray, or DataView. Received type      │
│string ('true')                                            `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: Got unwanted exception: The "path" argument must be of type  │
│string or an instance of Buffer or URL. Received type boolean (false)        │
│                                                           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: Got unwanted exception: The "path" argument must be of type  │
│string or an instance of Buffer or URL. Received type boolean (false)        │
│                                                           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: Got unwanted exception: The "path" argument must be of type  │
│string or an instance of Buffer or URL. Received an instance of URL          │
│                                                           `
example test: `test/parallel/test-fs-append-file-sync.js`

### 4 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: Cannot load module: │ │<str> │ │ │ │ In file <loc> │ │─ Stack Trace `

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module:                                               │
│'/work/.harness/work/node-api/node-test/.tmp.776/index'                      │
│                                                           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module:                                               │
│'/work/.harness/work/node-api/node-test/.tmp.799/app/index'                  │
│                                                           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module:                                               │
│'/work/.harness/work/node-api/node-test/.tmp.807/foo.cjs'                    │
│                                                           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module:                                               │
│'/work/.harness/work/node-api/node-test/.tmp.826/中文目录'                   │
│                                                               `
example test: `test/parallel/test-module-circular-symlinks.js`

### 4 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: Readable.toWeb is not a function │ │ │ │ In file <loc> │ │─ Stack Tr`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Readable.toWeb is not a function                                  │
│                                                                             │
│ In file test/parallel/test-stream-readable-from-web-termin`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Readable.toWeb is not a function                                  │
│                                                                             │
│ In file test/parallel/test-stream-readable-strategy-option`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Readable.toWeb is not a function                                  │
│                                                                             │
│ In file test/parallel/test-stream-readable-to-web-terminat`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Readable.toWeb is not a function                                  │
│                                                                             │
│ In file test/parallel/test-stream-readable-to-web-terminat`
example test: `test/parallel/test-stream-readable-from-web-termination.js`

### 4 × `╭─────────────────────────────────────────────────────────────────────────────╮ │Error: node:child_process: fork() is not implemented yet in Elide │ │ │ │ In fi`

distinct messages:
- `╭─────────────────────────────────────────────────────────────────────────────╮
│Error: node:child_process: fork() is not implemented yet in Elide            │
│                                                                             │
│ In file test/parallel/test-fs-write-stream-patch-open.js:1`
- `╭─────────────────────────────────────────────────────────────────────────────╮
│Error: node:child_process: fork() is not implemented yet in Elide            │
│                                                                             │
│ In file test/parallel/test-process-external-stdio-close.js`
- `╭─────────────────────────────────────────────────────────────────────────────╮
│Error: node:child_process: fork() is not implemented yet in Elide            │
│                                                                             │
│ In file test/parallel/test-process-redirect-warnings-env.j`
- `╭─────────────────────────────────────────────────────────────────────────────╮
│Error: node:child_process: fork() is not implemented yet in Elide            │
│                                                                             │
│ In file test/parallel/test-process-redirect-warnings.js:20`
example test: `test/parallel/test-fs-write-stream-patch-open.js`

### 4 × `AssertionError: function should not have been called at <loc> at Function.fail (native) at mustNotCall (<loc>)`

distinct messages:
- `AssertionError: function should not have been called at test-async-hooks-top-level-clearimmediate.js:30
    at Function.fail (native)
    at mustNotCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:631:12)`
- `AssertionError: function should not have been called at test-timers-dispose.js:7
    at Function.fail (native)
    at mustNotCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:631:12)`
- `AssertionError: function should not have been called at test-timers-immediate-unref-simple.js:13
    at Function.fail (native)
    at mustNotCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:631:12)`
- `AssertionError: function should not have been called at test-timers-immediate.js:33
    at Function.fail (native)
    at mustNotCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:631:12)`
example test: `test/parallel/test-async-hooks-top-level-clearimmediate.js`

### 4 × `Uncaught (in promise) TypeError: push is not a function`

distinct messages:
- `Uncaught (in promise) TypeError: push is not a function`
example test: `test/parallel/test-stream-iter-consumers-merge.js`

### 3 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: [<str>, <str>, Symbol(<n>), Symbol(<n>), Symbol(elide.vm.contex`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: ['a', 'b', Symbol(1), Symbol(2), Symbol(elide.vm.context)]   │
│deepStrictEqual ['a', 'b', Symbol(1), Symbol(2)]                             │
│                                                           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: ['a', 'b', Symbol(1), Symbol(2), Symbol(elide.vm.context)]   │
│deepStrictEqual ['a', 'b', Symbol(1), Symbol(2)]                             │
│                                                           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: ['a', 'b', Symbol(1), Symbol(2), Symbol(elide.vm.context)]   │
│deepStrictEqual ['a', 'b', Symbol(1), Symbol(2)]                             │
│                                                           `
example test: `test/parallel/test-vm-ownkeys.js`

### 3 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: Got unwanted exception: (intermediate value).execve is not a │ `

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: Got unwanted exception: (intermediate value).execve is not a │
│function                                                                     │
│                                                           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: Got unwanted exception: (intermediate value).execve is not a │
│function                                                                     │
│                                                           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: Got unwanted exception: (intermediate value).execve is not a │
│function                                                                     │
│                                                           `
example test: `test/parallel/test-process-execve-permission-fail.js`

### 3 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: Got unwanted exception: Cannot load module: <str> │ │ │ │ In fi`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: Got unwanted exception: Cannot load module: 'package.json'   │
│                                                                             │
│ In file test/parallel/test-require-invalid-package.js:7:1 `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: Got unwanted exception: Cannot load module: ' ab'             │
│                                                                             │
│ In file test/parallel/test-require-nul.js:8:1            `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: Got unwanted exception: Cannot load module: 'node:unknown'   │
│                                                                             │
│ In file test/parallel/test-require-node-prefix.js:15:3    `
example test: `test/parallel/test-require-invalid-package.js`

### 3 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: no error event at <loc> called │ │with arguments: Error: kaboom`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: no error event at test-stream-duplex-destroy.js:80 called    │
│with arguments: Error: kaboom at test-stream-duplex-destroy.js:65:20 at      │
│test-stream-duplex-destroy.js:1:1                          `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: no error event at test-stream-transform-destroy.js:76 called │
│with arguments: Error: kaboom at test-stream-transform-destroy.js:61:20 at   │
│test-stream-transform-destroy.js:1:1                       `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: no error event at test-stream-writable-destroy.js:87 called  │
│with arguments: Error: kaboom at test-stream-writable-destroy.js:81:20 at    │
│test-stream-writable-destroy.js:1:1                        `
example test: `test/parallel/test-stream-duplex-destroy.js`

### 3 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: true === false │ │ │ │ In file <loc> │ │─ Stack Trace ─────────`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: true === false                                               │
│                                                                             │
│ In file test/parallel/test-stream-duplex-readable-writable`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: true === false                                               │
│                                                                             │
│ In file test/parallel/test-stream-readable-needReadable.js`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: true === false                                               │
│                                                                             │
│ In file test/parallel/test-stream2-readable-wrap-error.js:`
example test: `test/parallel/test-stream-duplex-readable-writable.js`

### 3 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: undefined === false │ │ │ │ In file <loc> │ │─ Stack Trace ────`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: undefined === false                                          │
│                                                                             │
│ In file test/parallel/test-stream-readable-aborted.js:12:3`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: undefined === false                                          │
│                                                                             │
│ In file test/parallel/test-stream-readable-didRead.js:9:3 `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: undefined === false                                          │
│                                                                             │
│ In file test/parallel/test-stream-writable-aborted.js:12:3`
example test: `test/parallel/test-stream-readable-aborted.js`

### 3 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: undefined === null │ │ │ │ In file <loc> │ │─ Stack Trace ─────`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: undefined === null                                           │
│                                                                             │
│ In file test/parallel/test-module-parent-deprecation.js:14`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: undefined === null                                           │
│                                                                             │
│ In file test/parallel/test-stream-readable-destroy.js:16:3`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: undefined === null                                           │
│                                                                             │
│ In file test/parallel/test-stream2-writable.js:223:5      `
example test: `test/parallel/test-module-parent-deprecation.js`

### 3 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: undefined === true │ │ │ │ In file <loc> │ │─ Stack Trace ─────`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: undefined === true                                           │
│                                                                             │
│ In file test/parallel/test-stream-duplex-end.js:11:3      `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: undefined === true                                           │
│                                                                             │
│ In file test/parallel/test-stream-pipe-needDrain.js:18:3  `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: undefined === true                                           │
│                                                                             │
│ In file test/parallel/test-vm-property-not-on-sandbox.js:3`
example test: `test/parallel/test-stream-duplex-end.js`

### 3 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │java.lang.UnsupportedOperationException: process.getuid() is not yet │ │impleme`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│java.lang.UnsupportedOperationException: process.getuid() is not yet         │
│implemented                                                                  │
│                                                           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│java.lang.UnsupportedOperationException: process.getuid() is not yet         │
│implemented                                                                  │
│                                                           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│java.lang.UnsupportedOperationException: process.getuid() is not yet         │
│implemented                                                                  │
│                                                           `
example test: `test/parallel/test-fs-access.js`

### 3 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │ReferenceError: WebAssembly is not defined │ │ │ │ In file <loc> │ │─ Stack Tra`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: WebAssembly is not defined                                   │
│                                                                             │
│ In file test/parallel/test-vm-codegen.js:1:15             `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: WebAssembly is not defined                                   │
│                                                                             │
│ In file test/parallel/test-worker-message-port-wasm-module`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: WebAssembly is not defined                                   │
│                                                                             │
│ In file test/parallel/test-worker-message-port-wasm-thread`
example test: `test/parallel/test-vm-codegen.js`

### 3 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: (intermediate value).hasUncaughtExceptionCaptureCallback is not a │ `

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: (intermediate value).hasUncaughtExceptionCaptureCallback is not a │
│function                                                                     │
│                                                           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: (intermediate value).hasUncaughtExceptionCaptureCallback is not a │
│function                                                                     │
│                                                           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: (intermediate value).hasUncaughtExceptionCaptureCallback is not a │
│function                                                                     │
│                                                           `
example test: `test/parallel/test-process-exception-capture-should-abort-on-uncaught-setflagsfromstring.js`

### 3 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: Buffer.from: unsupported input type │ │ │ │ In file <loc> │ │─ Stack`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Buffer.from: unsupported input type                               │
│                                                                             │
│ In file test/parallel/test-buffer-from.js:29:24           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Buffer.from: unsupported input type                               │
│                                                                             │
│ In file test/parallel/test-buffer-sharedarraybuffer.js:27:`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Buffer.from: unsupported input type                               │
│                                                                             │
│ In file test/parallel/test-buffer-tojson.js:18:16         `
example test: `test/parallel/test-buffer-from.js`

### 3 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: Cannot convert a Symbol value to a string │ │ │ │ In file <loc> │ │─`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot convert a Symbol value to a string                         │
│                                                                             │
│ In file test/parallel/test-event-emitter-symbols.js:11:1  `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot convert a Symbol value to a string                         │
│                                                                             │
│ In file test/parallel/test-events-list.js:16:1            `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot convert a Symbol value to a string                         │
│                                                                             │
│ In file test/parallel/test-process-emit.js:10:1           `
example test: `test/parallel/test-event-emitter-symbols.js`

### 3 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: Cannot convert undefined or null to object: undefined │ │ │ │ In fil`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot convert undefined or null to object: undefined             │
│                                                                             │
│ In file test/parallel/test-event-emitter-listeners-side-ef`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot convert undefined or null to object: undefined             │
│                                                                             │
│ In file test/parallel/test-event-emitter-set-max-listeners`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot convert undefined or null to object: undefined             │
│                                                                             │
│ In file test/parallel/test-vm-getters.js:21:24            `
example test: `test/parallel/test-event-emitter-listeners-side-effects.js`

### 3 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: Stream is not a constructor │ │ │ │ In file <loc> │ │─ Stack Trace ─`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Stream is not a constructor                                       │
│                                                                             │
│ In file test/parallel/test-console-instance.js:29:13      `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Stream is not a constructor                                       │
│                                                                             │
│ In file test/parallel/test-stream-pipe-error-handling.js:2`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Stream is not a constructor                                       │
│                                                                             │
│ In file test/parallel/test-stream2-readable-legacy-drain.j`
example test: `test/parallel/test-console-instance.js`

### 3 × `╭─────────────────────────────────────────────────────────────────────────────╮ │Error: node:child_process: execFileSync() is not implemented yet in Elide │ │ │`

distinct messages:
- `╭─────────────────────────────────────────────────────────────────────────────╮
│Error: node:child_process: execFileSync() is not implemented yet in Elide    │
│                                                                             │
│ In file test/parallel/test-module-main-extension-lookup.js`
- `╭─────────────────────────────────────────────────────────────────────────────╮
│Error: node:child_process: execFileSync() is not implemented yet in Elide    │
│                                                                             │
│ In file test/parallel/test-module-wrap.js:9:1             `
- `╭─────────────────────────────────────────────────────────────────────────────╮
│Error: node:child_process: execFileSync() is not implemented yet in Elide    │
│                                                                             │
│ In file test/parallel/test-module-wrapper.js:9:1          `
example test: `test/parallel/test-module-main-extension-lookup.js`

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

### 3 × `AssertionError: Timer should be canceled at Function.fail (native) at timerNotCanceled (<loc>)`

distinct messages:
- `AssertionError: Timer should be canceled
    at Function.fail (native)
    at timerNotCanceled (test-timers-nan-duration-emit-once-per-process.js:9:10)`
- `AssertionError: Timer should be canceled
    at Function.fail (native)
    at timerNotCanceled (test-timers-negative-duration-warning-emit-once-per-process.js:9:10)`
- `AssertionError: Timer should be canceled
    at Function.fail (native)
    at timerNotCanceled (test-timers-not-emit-duration-zero.js:7:10)`
example test: `test/parallel/test-timers-nan-duration-emit-once-per-process.js`

### 3 × `AssertionError: undefined deepStrictEqual {foo: <str>} at Function.deepStrictEqual (native) at checkAsync (<loc>) at checkAsync (<loc>) at <loc> at <loc>`

distinct messages:
- `AssertionError: undefined deepStrictEqual {foo: 'bar'}
    at Function.deepStrictEqual (native)
    at checkAsync (test-diagnostics-channel-tracing-channel-promise-spoofed-constructor.js:26:10)
    at checkAsync (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at test-`
- `AssertionError: undefined deepStrictEqual {foo: 'bar'}
    at Function.deepStrictEqual (native)
    at checkAsync (test-diagnostics-channel-tracing-channel-promise-thenable.js:33:10)
    at checkAsync (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at test-diagnostics`
- `AssertionError: undefined deepStrictEqual {foo: 'bar'}
    at Function.deepStrictEqual (native)
    at checkAsync (test-diagnostics-channel-tracing-channel-promise.js:20:10)
    at checkAsync (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at test-diagnostics-channel-`
example test: `test/parallel/test-diagnostics-channel-tracing-channel-promise-spoofed-constructor.js`

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

### 3 × `Uncaught (in promise) AssertionError: <str> === <str>`

distinct messages:
- `Uncaught (in promise) AssertionError: 'undefined' === '[Module: null prototype] { a: <uninitialized>, b: undefined }'`
- `Uncaught (in promise) AssertionError: 'undefined' === 'object'`
example test: `test/parallel/test-util-inspect-namespace.js`

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

### 2 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │A context-aware API was called but no context is active │ │ │ │ In file <loc> │`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│A context-aware API was called but no context is active                      │
│                                                                             │
│ In file test/parallel/test-dns-lookupService-promises.js:3`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│A context-aware API was called but no context is active                      │
│                                                                             │
│ In file test/parallel/test-dns-setserver-when-querying.js:`
example test: `test/parallel/test-dns-lookupService-promises.js`

### 2 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: <n> === <n> │ │ │ │ In file test/parallel/test-process-getactiv`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: 0 === 12                                                     │
│                                                                             │
│ In file test/parallel/test-process-getactiveresources-trac`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: 0 === 100                                                    │
│                                                                             │
│ In file test/parallel/test-process-getactiveresources-trac`
example test: `test/parallel/test-process-getactiveresources-track-active-requests.js`

### 2 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: function should not have been called at │ │<loc> │ │ │ │ In fil`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: function should not have been called at                      │
│test-stream-readable-next-no-null.js:19                                      │
│                                                           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: function should not have been called at                      │
│test-stream-writable-write-writev-finish.js:135                              │
│                                                           `
example test: `test/parallel/test-stream-readable-next-no-null.js`

### 2 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: Got unwanted exception: Cannot load module: │ │<str> │ │ │ │ In`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: Got unwanted exception: Cannot load module:                  │
│'/work/.harness/work/node-api/node-test/.tmp.773/test-module-cache.json'     │
│                                                           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: Got unwanted exception: Cannot load module:                  │
│'../fixtures/es-modules/test-esm-ok.mjs'                                     │
│                                                           `
example test: `test/parallel/test-module-cache.js`

### 2 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: Got unwanted exception: Object.defineProperty called on │ │non-`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: Got unwanted exception: Object.defineProperty called on      │
│non-object                                                                   │
│                                                           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: Got unwanted exception: Object.defineProperty called on      │
│non-object                                                                   │
│                                                           `
example test: `test/parallel/test-vm-context.js`

### 2 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: Got unwanted exception: The <str> argument must be of type │ │f`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: Got unwanted exception: The "cb" argument must be of type    │
│function. Received type string ('JSUndefined')                               │
│                                                           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: Got unwanted exception: The "cb" argument must be of type    │
│function. Received type string ('JSUndefined')                               │
│                                                           `
example test: `test/parallel/test-fs-close-errors.js`

### 2 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: Got unwanted exception: undefined │ │ │ │ In file <loc> │ │─ St`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: Got unwanted exception: undefined                            │
│                                                                             │
│ In file test/parallel/test-dns-resolvens-typeerror.js:33:1`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: Got unwanted exception: undefined                            │
│                                                                             │
│ In file test/parallel/test-event-emitter-errors.js:9:1    `
example test: `test/parallel/test-dns-resolvens-typeerror.js`

### 2 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: undefined deepStrictEqual {foo: <str>} │ │ │ │ In file test/par`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: undefined deepStrictEqual {foo: 'bar'}                       │
│                                                                             │
│ In file test/parallel/test-diagnostics-channel-tracing-cha`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: undefined deepStrictEqual {foo: 'bar'}                       │
│                                                                             │
│ In file test/parallel/test-diagnostics-channel-tracing-cha`
example test: `test/parallel/test-diagnostics-channel-tracing-channel-callback-run-stores.js`

### 2 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │callback is required │ │ │ │ In file <loc> │ │─ Stack Trace ───────────────────`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│callback is required                                                         │
│                                                                             │
│ In file test/parallel/test-dns-negative-zero.js:89:1      `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│callback is required                                                         │
│                                                                             │
│ In file test/parallel/test-dns-perf_hooks.js:89:1         `
example test: `test/parallel/test-dns-negative-zero.js`

### 2 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │com.oracle.truffle.api.dsl.UnsupportedSpecializationException: Unexpected │ │va`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│com.oracle.truffle.api.dsl.UnsupportedSpecializationException: Unexpected    │
│values provided for JSToNumberNodeGen@2f3c3d37: [[B@33ec10d3], [byte[]]      │
│                                                           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│com.oracle.truffle.api.dsl.UnsupportedSpecializationException: Unexpected    │
│values provided for JSToObjectNodeGen.Uncached@77258720: [[B@74095e8c],      │
│[byte[]]                                                   `
example test: `test/parallel/test-fs-promises-writefile-typedarray.js`

### 2 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │RangeError: Maximum call stack size exceeded │ │ │ │ In file <loc> │ │─ Stack T`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│RangeError: Maximum call stack size exceeded                                 │
│                                                                             │
│ In file test/parallel/test-util-inspect-long-running.js:20`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│RangeError: Maximum call stack size exceeded                                 │
│                                                                             │
│ In file test/parallel/test-vm-global-identity.js:32:1     `
example test: `test/parallel/test-util-inspect-long-running.js`

### 2 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: (intermediate value).binding is not a function │ │ │ │ In file <loc>`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: (intermediate value).binding is not a function                    │
│                                                                             │
│ In file test/parallel/test-process-binding-internalbinding`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: (intermediate value).binding is not a function                    │
│                                                                             │
│ In file test/parallel/test-process-binding-util.js:6:21   `
example test: `test/parallel/test-process-binding-internalbinding-allowlist.js`

### 2 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: (intermediate value).execve is not a function │ │ │ │ In file <loc> `

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: (intermediate value).execve is not a function                     │
│                                                                             │
│ In file test/parallel/test-process-execve-permission-grant`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: (intermediate value).execve is not a function                     │
│                                                                             │
│ In file test/parallel/test-process-execve.js:19:3         `
example test: `test/parallel/test-process-execve-permission-granted.js`

### 2 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: argument must be a Buffer, ArrayBuffer, TypedArray, or string │ │ │ `

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: argument must be a Buffer, ArrayBuffer, TypedArray, or string     │
│                                                                             │
│ In file test/parallel/test-buffer-isascii.js:10:20        `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: argument must be a Buffer, ArrayBuffer, TypedArray, or string     │
│                                                                             │
│ In file test/parallel/test-buffer-isutf8.js:10:20         `
example test: `test/parallel/test-buffer-isascii.js`

### 2 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: event name is required │ │ │ │ In file <loc> │ │─ Stack Trace ──────`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: event name is required                                            │
│                                                                             │
│ In file test/parallel/test-event-emitter-error-monitor.js:`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: event name is required                                            │
│                                                                             │
│ In file test/parallel/test-event-emitter-listeners.js:91:2`
example test: `test/parallel/test-event-emitter-error-monitor.js`

### 2 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: getDefaultHighWaterMark is not a function │ │ │ │ In file <loc> │ │─`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: getDefaultHighWaterMark is not a function                         │
│                                                                             │
│ In file test/parallel/test-stream-set-default-hwm.js:14:23`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: getDefaultHighWaterMark is not a function                         │
│                                                                             │
│ In file test/parallel/test-stream-transform-split-highwate`
example test: `test/parallel/test-stream-set-default-hwm.js`

### 2 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: mod.linkRequests is not a function │ │ │ │ In file <loc>: │ │ ╭─ │ │`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: mod.linkRequests is not a function                                │
│                                                                             │
│ In file test/parallel/test-vm-module-evaluate-while-evalua`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: mod.linkRequests is not a function                                │
│                                                                             │
│ In file test/parallel/test-vm-module-evaluate-source-text-`
example test: `test/parallel/test-vm-module-evaluate-while-evaluating.js`

### 2 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: Object{} is not iterable │ │ │ │ In file <loc> │ │─ Stack Trace ────`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Object{} is not iterable                                          │
│                                                                             │
│ In file test/parallel/test-buffer-iterator.js:1:61        `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Object{} is not iterable                                          │
│                                                                             │
│ In file test/parallel/test-buffer-zero-fill-cli.js:12:3   `
example test: `test/parallel/test-buffer-iterator.js`

### 2 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: port1.on is not a function │ │ │ │ In file <loc>│ │─ Stack Trace ───`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: port1.on is not a function                                        │
│                                                                             │
│ In file test/parallel/test-worker-message-port-close-while`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: port1.on is not a function                                        │
│                                                                             │
│ In file test/parallel/test-worker-message-port-infinite-me`
example test: `test/parallel/test-worker-message-port-close-while-receiving.js`

### 2 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: receiver is not a Buffer │ │ │ │ In file <loc> │ │─ Stack Trace ────`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: receiver is not a Buffer                                          │
│                                                                             │
│ In file test/parallel/test-buffer-generic-methods.js:101:3`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: receiver is not a Buffer                                          │
│                                                                             │
│ In file test/parallel/test-buffer-inheritance.js:31:3     `
example test: `test/parallel/test-buffer-generic-methods.js`

### 2 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: The <str> argument must be of type string or an instance of │ │Buffe`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: The "path" argument must be of type string or an instance of      │
│Buffer or URL. Received type boolean (false)                                 │
│                                                           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: The "path" argument must be of type string or an instance of      │
│Buffer or URL. Received an instance of Uint8Array                            │
│                                                           `
example test: `test/parallel/test-fs-lchown.js`

### 2 × `╭─────────────────────────────────────────────────────────────────────────────╮ │Error: fhqwhgads │ │ │ │ In file <loc> │ │─ Stack Trace ───────────────────────`

distinct messages:
- `╭─────────────────────────────────────────────────────────────────────────────╮
│Error: fhqwhgads                                                             │
│                                                                             │
│ In file test/parallel/test-stream-writable-final-throw.js:`
- `╭─────────────────────────────────────────────────────────────────────────────╮
│Error: fhqwhgads                                                             │
│                                                                             │
│ In file test/parallel/test-util-primordial-monkeypatching.`
example test: `test/parallel/test-stream-writable-final-throw.js`

### 2 × `╭─────────────────────────────────────────────────────────────────────────────╮ │Error: node:child_process: execFile() is not implemented yet in Elide │ │ │ │ I`

distinct messages:
- `╭─────────────────────────────────────────────────────────────────────────────╮
│Error: node:child_process: execFile() is not implemented yet in Elide        │
│                                                                             │
│ In file test/parallel/test-process-uncaught-exception-moni`
- `╭─────────────────────────────────────────────────────────────────────────────╮
│Error: node:child_process: execFile() is not implemented yet in Elide        │
│                                                                             │
│ In file test/parallel/test-vm-api-handles-getter-errors.js`
example test: `test/parallel/test-process-uncaught-exception-monitor.js`

### 2 × `AssertionError: <n> === <n> at Function.strictEqual (native) at <loc> at _return (<loc>)`

distinct messages:
- `AssertionError: 0 === 1
    at Function.strictEqual (native)
    at test-process-getactiveresources-track-interval-lifetime.js:12:10
    at _return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)`
- `AssertionError: 0 === 1
    at Function.strictEqual (native)
    at test-process-getactiveresources-track-timer-lifetime.js:12:12
    at _return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)`
example test: `test/parallel/test-process-getactiveresources-track-interval-lifetime.js`

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

### 2 × `TAP version <n> # Subtest: synchronous version # Subtest: validation not ok <n> - validation --- duration_ms: <n> failureType: <str> error: <str> code: <str> ..`

distinct messages:
- `TAP version 13
# Subtest: synchronous version
    # Subtest: validation
    not ok 1 - validation
      ---
      duration_ms: 1
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
      duration_ms: 1
      failureType: 'testCodeFailure'
      error: "Missing expected exception"
      code: 'ERR_ASSERTION'
      ...
    # Subtest: performs flush
    not ok 2 - performs `
example test: `test/parallel/test-fs-append-file-flush.js`

### 2 × `TypeError: (intermediate value).gc is not a function at <loc>`

distinct messages:
- `TypeError: (intermediate value).gc is not a function
    at test-async-hooks-disable-gc-tracking.js:17:14`
- `TypeError: (intermediate value).gc is not a function
    at test-async-hooks-prevent-double-destroy.js:20:14`
example test: `test/parallel/test-async-hooks-disable-gc-tracking.js`

### 2 × `TypeError: Cannot add property <str> to non-object <n> at <loc> at _return (<loc>)`

distinct messages:
- `TypeError: Cannot add property "_repeat" to non-object 1
    at test-timers-timeout-to-interval.js:7:38
    at _return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)`
- `TypeError: Cannot add property "_onTimeout" to non-object 2
    at test-timers-unrefd-interval-still-fires.js:13:43
    at _return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)`
example test: `test/parallel/test-timers-timeout-to-interval.js`

### 2 × `Uncaught (in promise) AssertionError: <n> !== <n>`

distinct messages:
- `Uncaught (in promise) AssertionError: 1 !== 1`
example test: `test/parallel/test-async-hooks-enable-before-promise-resolve.js`

### 2 × `Uncaught (in promise) AssertionError: <n> === <n>`

distinct messages:
- `Uncaught (in promise) AssertionError: 200 === 2`
- `Uncaught (in promise) AssertionError: 2 === 1`
example test: `test/parallel/test-stream-iter-from-coverage.js`

### 2 × `Uncaught (in promise) AssertionError: <n> deepStrictEqual NaN`

distinct messages:
- `Uncaught (in promise) AssertionError: 218 deepStrictEqual NaN`
- `Uncaught (in promise) AssertionError: 3 deepStrictEqual NaN`
example test: `test/parallel/test-fs-writev-promises.js`

### 2 × `Uncaught (in promise) AssertionError: Got rejection that did not match expected: AbortError: The operation was aborted`

distinct messages:
- `Uncaught (in promise) AssertionError: Got rejection that did not match expected: AbortError: The operation was aborted`
example test: `test/parallel/test-fs-promises-file-handle-append-file.js`

### 2 × `Uncaught (in promise) Error: write: data must be a Buffer or string`

distinct messages:
- `Uncaught (in promise) Error: write: data must be a Buffer or string`
example test: `test/parallel/test-fs-promises-file-handle-write.js`

### 2 × `Uncaught (in promise) TypeError: hrtime is not a function`

distinct messages:
- `Uncaught (in promise) TypeError: hrtime is not a function`
example test: `test/parallel/test-vm-timeout-escape-promise-2.js`

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
example test: `test/parallel/test-fs-promises-file-handle-writeFile.js`

### 1 × `(node:<n>) DeprecationWarning: Something is deprecated. AssertionError: received unexpected warning at Function.fail (native) at Process.listener (<loc>) (node:`

distinct messages:
- `(node:10107) DeprecationWarning: Something is deprecated.
AssertionError: received unexpected warning
    at Function.fail (native)
    at Process.listener (test-process-no-deprecation.js:13:10)
(node:10107) DeprecationWarning: Something else is deprecated.`
example test: `test/parallel/test-process-no-deprecation.js`

### 1 × `(node:<n>) Warning: A Warning (node:<n>) CustomWarning: A Warning (node:<n>) Warning: A Warning (node:<n>) CustomWarning: A Warning (node:<n>) [CODE001] CustomW`

distinct messages:
- `(node:9453) Warning: A Warning
(node:9453) CustomWarning: A Warning
(node:9453) Warning: A Warning
(node:9453) CustomWarning: A Warning
(node:9453) [CODE001] CustomWarning: A Warning
(node:9453) CustomWarning: A Warning
(node:9453) [CODE001] CustomWarning: A Warning
(node:9453) [CODE001] CustomWarni`
example test: `test/parallel/test-process-emitwarning.js`

### 1 × `(node:<n>) Warning: test (node:<n>) DeprecationWarning: test (node:<n>) Warning: test (node:<n>) DeprecationWarning: test (node:<n>) Error: test (node:<n>) Warn`

distinct messages:
- `(node:10366) Warning: test
(node:10366) DeprecationWarning: test
(node:10366) Warning: test
(node:10366) DeprecationWarning: test
(node:10366) Error: test
(node:10366) Warning: test
AssertionError: undefined === 'foo'
    at Function.strictEqual (native)
    at Process.<anonymous> (test-process-warn`
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

### 1 × `[H[2J╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: <str> === <str> │ │ │ │ In file <loc> │ │─ Stack Trace ─`

distinct messages:
- `[H[2J╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: '' === ''                                                    │
│                                                                             │
│ In file test/parallel/test-console-clear.js:17:3   `
example test: `test/parallel/test-console-clear.js`

### 1 × `[object Object] ╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: Cannot perform <str> on a proxy that has been revoke`

distinct messages:
- `[object Object]
╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot perform 'get' on a proxy that has been revoked             │
│                                                                             │
│ In file test/parallel/test-console-issue-4`
example test: `test/parallel/test-console-issue-43095.js`

### 1 × `/work/.harness/work/node-api/node-test/.tmp.<n> ╭─ Script Error ──────────────────────────────────────────────────────────────╮ │java.nio.channels.NonWritableCh`

distinct messages:
- `/work/.harness/work/node-api/node-test/.tmp.729
╭─ Script Error ──────────────────────────────────────────────────────────────╮
│java.nio.channels.NonWritableChannelException                                │
│                                                                             │
│ In file te`
example test: `test/parallel/test-fs-writesync-crash.js`

### 1 × `# decode=true uncork=true multi=true ╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: Should not call _write at `

distinct messages:
- `# decode=true uncork=true multi=true
╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: Should not call _write at test-stream-writev.js:61 called    │
│with arguments: 'hello, ', undefined, [Function (anonymous)]                 │
│                      `
example test: `test/parallel/test-stream-writev.js`

### 1 × `# node:test: process exited before tests completed ╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: function runInNew`

distinct messages:
- `# node:test: process exited before tests completed
╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: function runInNewContext() { [native code] } is not a constructor │
│                                                                             │
│ In file`
example test: `test/parallel/test-assert-partial-deep-equal.js`

### 1 × `<n>/<n>/<n>, <n><loc> PM start test <n>/<n>/<n>, <n><loc> PM waiting for callbacks <n>/<n>/<n>, <n><loc> PM fs open() callback <n>/<n>/<n>, <n><loc> PM WriteStr`

distinct messages:
- `7/3/2026, 4:07:27 PM start test
7/3/2026, 4:07:27 PM waiting for callbacks
7/3/2026, 4:07:27 PM fs open() callback
7/3/2026, 4:07:27 PM WriteStream constructor
7/3/2026, 4:07:27 PM closed 1
Mismatched WriteStream$open function calls. Expected exactly 1, actual 0.
    at Proxy.mustCall (/work/.harnes`
example test: `test/parallel/test-fs-stream-construct-compat-error-write.js`

### 1 × `>> READ >> READ >> READ data emitted aaa pushing pushing data emitted <n> data emitted <n> data emitted <n> data emitted <n> data emitted <n> data emitted <n> d`

distinct messages:
- `>> READ
>> READ
>> READ
data emitted aaa
pushing
pushing
data emitted 0
data emitted 1
data emitted 2
data emitted 3
data emitted 4
data emitted 5
data emitted 6
data emitted 7
data emitted 8
data emitted 9
pushing
data emitted 0
data emitted 1
data emitted 2
data emitted 3
data emitted 4
data emitt`
example test: `test/parallel/test-stream-readable-object-multi-push-async.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │{} │ │ │ │ In file <loc> │ │─ Advice ──────────────────────────────────────────`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│{}                                                                           │
│                                                                             │
│ In file test/parallel/test-stream-pipe-error-unhandled.js:`
example test: `test/parallel/test-stream-pipe-error-unhandled.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │{} │ │ │ │ In file <loc> │ │─ Stack Trace ─────────────────────────────────────`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│{}                                                                           │
│                                                                             │
│ In file test/parallel/test-stream-writable-end-cb-error.js`
example test: `test/parallel/test-stream-writable-end-cb-error.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: -<n> === <n> │ │ │ │ In file <loc> │ │─ Stack Trace ───────────`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: -1 === 255                                                   │
│                                                                             │
│ In file test/parallel/test-buffer-alloc.js:23:1           `
example test: `test/parallel/test-buffer-alloc.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: [] deepStrictEqual [{name: <str>, parentFilename: │ │undefined,`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: [] deepStrictEqual [{name: 'start', parentFilename:          │
│undefined, id: 'does-not-exist'}, {name: 'error', parentFilename: undefined, │
│id: 'does-not-exist', error: Cannot load module: 'does-not-`
example test: `test/parallel/test-diagnostics-channel-module-require-error.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: [] deepStrictEqual [<str>, <str>, <str>, <str>,│ │<str>, …] │ │`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: [] deepStrictEqual ['toString', 'href', 'origin', 'protocol',│
│'username', …]                                                               │
│                                                           `
example test: `test/parallel/test-whatwg-url-custom-properties.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: [] deepStrictEqual [<str>] │ │ │ │ In file <loc> │ │─ Stack Tra`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: [] deepStrictEqual ['Timeout']                               │
│                                                                             │
│ In file test/parallel/test-process-getactiveresources.js:9`
example test: `test/parallel/test-process-getactiveresources.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: [<n>, <n>, <n>, <n>] deepStrictEqual [<n>, <n>, <n>, <n>] │ │ │`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: [120, 121, 122, 10] deepStrictEqual [0, 0, 0, 0]             │
│                                                                             │
│ In file test/parallel/test-fs-read.js:44:3                `
example test: `test/parallel/test-fs-read.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: [<str>, <str>, undefined, undefined] deepStrictEqual │ │[<str>,`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: ['outer', 'inner', undefined, undefined] deepStrictEqual     │
│['outer', 'inner', 'outer', undefined]                                       │
│                                                           `
example test: `test/parallel/test-diagnostics-channel-bounded-channel-scope-nested.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: [B@b26b94b === [B@4abd268d │ │ │ │ In file <loc> │ │─ Stack Tra`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: [B@b26b94b === [B@4abd268d                                   │
│                                                                             │
│ In file test/parallel/test-buffer-pool-untransferable.js:1`
example test: `test/parallel/test-buffer-pool-untransferable.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: {} === {} │ │ │ │ In file <loc> │ │─ Stack Trace ──────────────`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: {} === {}                                                    │
│                                                                             │
│ In file test/parallel/test-stream-readable-readable-one.js`
example test: `test/parallel/test-stream-readable-readable-one.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: {} === <str> │ │ │ │ In file <loc> │ │─ Stack Trace ───────────`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: {} === 'abc'                                                 │
│                                                                             │
│ In file test/parallel/test-stream-decoder-objectmode.js:18`
example test: `test/parallel/test-stream-decoder-objectmode.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: {} === null │ │ │ │ In file <loc> │ │─ Stack Trace ────────────`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: {} === null                                                  │
│                                                                             │
│ In file test/parallel/test-fs-constants.js:11:1           `
example test: `test/parallel/test-fs-constants.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: {} deepStrictEqual {} │ │ │ │ In file <loc> │ │─ Stack Trace ──`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: {} deepStrictEqual {}                                        │
│                                                                             │
│ In file test/parallel/test-process-features.js:24:1       `
example test: `test/parallel/test-process-features.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: {} deepStrictEqual {foo: <str>, typeofProcess: <str>} │ │ │ │ I`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: {} deepStrictEqual {foo: 'bar', typeofProcess: 'undefined'}  │
│                                                                             │
│ In file test/parallel/test-vm-basic.js:34:3               `
example test: `test/parallel/test-vm-basic.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: {a: undefined, b: undefined, c: undefined, d: undefined, e: │ │`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: {a: undefined, b: undefined, c: undefined, d: undefined, e:  │
│undefined, …} deepEqual {a: {value: 'a', writable: true, enumerable: true,   │
│configurable: true}, b: {value: 'b', writable: false, enume`
example test: `test/parallel/test-vm-global-property-interceptors.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: {protocol: null, slashes: false, auth: null, host: null, │ │por`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: {protocol: null, slashes: false, auth: null, host: null,     │
│port: null, …} === 'foo'                                                     │
│                                                           `
example test: `test/parallel/test-url-relative.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: {resultHasOwn: {onSelf: false, onSelfGetter: false, │ │onSelfIn`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: {resultHasOwn: {onSelf: false, onSelfGetter: false,          │
│onSelfIndexed: false, onOuterProto: false, onOuterProtoGetter: false, …},    │
│resultDesc: {onSelf: undefined, onSelfGetter: undefined, on`
example test: `test/parallel/test-vm-global-property-prototype.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: {type: <str>, data: null, origin: <str>, lastEventId: <str>,│ │`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: {type: 'message', data: null, origin: 'foo', lastEventId: '',│
│source: null, …} deepStrictEqual {type: 'message', data: undefined, origin:  │
│'foo', lastEventId: 'undefined', source: undefined, …}     `
example test: `test/parallel/test-worker-message-event.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: <n> === -<n> │ │ │ │ In file <loc> │ │─ Stack Trace ───────────`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: 0 === -1                                                     │
│                                                                             │
│ In file test/parallel/test-buffer-indexof.js:16:1         `
example test: `test/parallel/test-buffer-indexof.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: <n> === <n> │ │ │ │ In file <loc>│ │─ Stack Trace ─────────────`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: 2 === 1                                                      │
│                                                                             │
│ In file test/parallel/test-async-hooks-recursive-stack-run`
example test: `test/parallel/test-async-hooks-recursive-stack-runInAsyncScope.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: <n> === <n>.007199254740991E15 │ │ │ │ In file <loc> │ │─ Stack`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: 16384 === 9.007199254740991E15                               │
│                                                                             │
│ In file test/parallel/test-streams-highwatermark.js:18:3  `
example test: `test/parallel/test-streams-highwatermark.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: <n> === <n>.1945305291680097E103 │ │ │ │ In file <loc> │ │─ Sta`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: 0.0 === 1.1945305291680097E103                               │
│                                                                             │
│ In file test/parallel/test-buffer-readdouble.js:17:1      `
example test: `test/parallel/test-buffer-readdouble.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: <n> === <n>.600602988224807E-<n> │ │ │ │ In file <loc> │ │─ Sta`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: 0.0 === 4.600602988224807E-41                                │
│                                                                             │
│ In file test/parallel/test-buffer-readfloat.js:13:1       `
example test: `test/parallel/test-buffer-readfloat.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: <n> === <str> │ │ │ │ In file <loc> │ │─ Stack Trace ──────────`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: 42 === '42'                                                  │
│                                                                             │
│ In file test/parallel/test-process-env.js:49:3            `
example test: `test/parallel/test-process-env.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: <n> === NaN │ │ │ │ In file <loc> │ │─ Stack Trace ────────────`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: 218 === NaN                                                  │
│                                                                             │
│ In file test/parallel/test-fs-writev-sync.js:31:3         `
example test: `test/parallel/test-fs-writev-sync.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: <str> !== <str> │ │ │ │ In file <loc> │ │─ Stack Trace ────────`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: 'artischocko' !== 'artischocko'                              │
│                                                                             │
│ In file test/parallel/test-require-extensions-same-filenam`
example test: `test/parallel/test-require-extensions-same-filename-as-dir.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: <str> !== <str> │ │ │ │ In file test/parallel/test-require-exte`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: 'artischocko' !== 'artischocko'                              │
│                                                                             │
│ In file test/parallel/test-require-extensions-same-filenam`
example test: `test/parallel/test-require-extensions-same-filename-as-dir-trailing-slash.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: <str> === <n> │ │ │ │ In file <loc> │ │─ Stack Trace ──────────`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: '21' === 21                                                  │
│                                                                             │
│ In file test/parallel/test-url-urltooptions.js:13:1       `
example test: `test/parallel/test-url-urltooptions.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: <str> === <str>a<str>a<str>b<str>b<str>b<str>c<str> │ │ │ │ In `

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: 'URLSearchParams {}' === 'URLSearchParams { 'a' => 'a', 'b'  │
│=> 'b', 'b' => 'c' }'                                                        │
│                                                           `
example test: `test/parallel/test-whatwg-url-custom-searchparams-inspect.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: <str> === undefined │ │ │ │ In file <loc> │ │─ Stack Trace ────`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: '' === undefined                                             │
│                                                                             │
│ In file test/parallel/test-console-methods.js:47:5        `
example test: `test/parallel/test-console-methods.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: <str>│ │=== <str> │ │ │ │ In file <loc> │ │─ Stack Trace ──────`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: '/work/.harness/work/node-api/node-api-overlay/test/fixtures'│
│=== '眯牯⽫栮牡敮獳眯牯⽫潮敤愭楰港摯ⵥ灡⵩癯牥慬⽹整瑳是硩畴敲�'              │
│                                                                             │
│ In fi`
example test: `test/parallel/test-fs-realpath-buffer-encoding.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: │ │<str> === <str> │ │ │ │ In file <loc> │ │─ Stack Trace ─────`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError:                                                              │
│'/work/.harness/work/node-api/node-api-overlay/test/parallel/test-fs-realpath│
│-native.js' === 'unknown'                                  `
example test: `test/parallel/test-fs-realpath-native.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: │ │<str> === │ │<str> │ │ │ │ In file <loc> │ │─ Stack Trace ──`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError:                                                              │
│'a=a&a=1&a=true&a=undefined&a=null&a=%3F&a=%3F&a=%F0%9F%98%80&a=%3F%3F&a=%5Bo│
│bject+Object%5D' ===                                       `
example test: `test/parallel/test-whatwg-url-custom-searchparams.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: Case <n> failed: Object.keys │ │ │ │ In file <loc> │ │─ Stack T`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: Case 0 failed: Object.keys                                   │
│                                                                             │
│ In file test/parallel/test-vm-global-property-enumerator.j`
example test: `test/parallel/test-vm-global-property-enumerator.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: createWriteStream options.fs.open should throw if isn't a │ │fu`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: createWriteStream options.fs.open should throw if isn't a    │
│function                                                                     │
│                                                           `
example test: `test/parallel/test-fs-stream-fs-options.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: event.on(<str>, null) should throw the proper error │ │ │ │ In `

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: event.on('foo', null) should throw the proper error          │
│                                                                             │
│ In file test/parallel/test-event-emitter-invalid-listener.`
example test: `test/parallel/test-event-emitter-invalid-listener.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: Expected awaitDrainWriters to be a Writable but instead got │ │`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: Expected awaitDrainWriters to be a Writable but instead got  │
│null                                                                         │
│                                                           `
example test: `test/parallel/test-stream-pipe-await-drain-manual-resume.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: false == true │ │ │ │ In file <loc>│ │─ Stack Trace ───────────`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: false == true                                                │
│                                                                             │
│ In file test/parallel/test-worker-message-port-inspect-dur`
example test: `test/parallel/test-worker-message-port-inspect-during-init-hook.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: false == true │ │ │ │ In file test/parallel/test-worker-message`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: false == true                                                │
│                                                                             │
│ In file test/parallel/test-worker-message-transfer-port-ma`
example test: `test/parallel/test-worker-message-transfer-port-mark-as-untransferable.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: false === <n> │ │ │ │ In file <loc> │ │─ Stack Trace ──────────`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: false === 0                                                  │
│                                                                             │
│ In file test/parallel/test-stream-writable-properties.js:9`
example test: `test/parallel/test-stream-writable-properties.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: function should not have been called at │ │<loc> called with ar`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: function should not have been called at                      │
│test-util-getcallsites-preparestacktrace.js:10 called with arguments: Error  │
│at test-util-getcallsites-preparestacktrace.js:12:15 at    `
example test: `test/parallel/test-util-getcallsites-preparestacktrace.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: get %Object.prototype%.main at │ │<loc> │ │ │ │ In file <loc>: `

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: get %Object.prototype%.main at                               │
│test-module-prototype-mutation.js:23                                         │
│                                                           `
example test: `test/parallel/test-module-prototype-mutation.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: Got unwanted exception: _write() not implemented │ │ │ │ In fil`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: Got unwanted exception: _write() not implemented             │
│                                                                             │
│ In file test/parallel/test-stream-writable-constructor-set`
example test: `test/parallel/test-stream-writable-constructor-set-methods.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: Got unwanted exception: (intermediate │ │value).setSourceMapsEn`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: Got unwanted exception: (intermediate                        │
│value).setSourceMapsEnabled is not a function                                │
│                                                           `
example test: `test/parallel/test-process-setsourcemapsenabled.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: Got unwanted exception: (intermediate │ │value).setUncaughtExce`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: Got unwanted exception: (intermediate                        │
│value).setUncaughtExceptionCaptureCallback is not a function                 │
│                                                           `
example test: `test/parallel/test-process-exception-capture-errors.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: Got unwanted exception: (intermediate value).dlopen is not a │ `

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: Got unwanted exception: (intermediate value).dlopen is not a │
│function                                                                     │
│                                                           `
example test: `test/parallel/test-process-dlopen-error-message-crash.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: Got unwanted exception: (intermediate value).initgroups is │ │n`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: Got unwanted exception: (intermediate value).initgroups is   │
│not a function                                                               │
│                                                           `
example test: `test/parallel/test-process-initgroups.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: Got unwanted exception: (intermediate value).kill is not a │ │f`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: Got unwanted exception: (intermediate value).kill is not a   │
│function                                                                     │
│                                                           `
example test: `test/parallel/test-process-kill-pid.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: Got unwanted exception: (intermediate value).revokeObjectURL │ `

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: Got unwanted exception: (intermediate value).revokeObjectURL │
│is not a function                                                            │
│                                                           `
example test: `test/parallel/test-url-revokeobjecturl.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: Got unwanted exception: (intermediate value).seteuid is not a│ `

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: Got unwanted exception: (intermediate value).seteuid is not a│
│function                                                                     │
│                                                           `
example test: `test/parallel/test-process-euid-egid.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: Got unwanted exception: (intermediate value).setgroups is not│ `

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: Got unwanted exception: (intermediate value).setgroups is not│
│a function                                                                   │
│                                                           `
example test: `test/parallel/test-process-setgroups.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: Got unwanted exception: (intermediate value).setuid is not a │ `

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: Got unwanted exception: (intermediate value).setuid is not a │
│function                                                                     │
│                                                           `
example test: `test/parallel/test-process-uid-gid.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: Got unwanted exception: BroadcastChannel is not a constructor│ `

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: Got unwanted exception: BroadcastChannel is not a constructor│
│                                                                             │
│ In file test/parallel/test-worker-broadcastchannel.js:12:1`
example test: `test/parallel/test-worker-broadcastchannel.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: Got unwanted exception: Buffer.alloc: size must be │ │non-negat`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: Got unwanted exception: Buffer.alloc: size must be           │
│non-negative                                                                 │
│                                                           `
example test: `test/parallel/test-buffer-over-max-length.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: Got unwanted exception: Buffer.concat: list must be │ │array-li`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: Got unwanted exception: Buffer.concat: list must be          │
│array-like                                                                   │
│                                                           `
example test: `test/parallel/test-buffer-concat.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: Got unwanted exception: Callable expected │ │ │ │ In file <loc>`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: Got unwanted exception: Callable expected                    │
│                                                                             │
│ In file test/parallel/test-timers-throw-when-cb-not-functi`
example test: `test/parallel/test-timers-throw-when-cb-not-function.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: Got unwanted exception: Cannot find module: <str> │ │ │ │ In fi`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: Got unwanted exception: Cannot find module: '.'              │
│                                                                             │
│ In file test/parallel/test-require-resolve-invalid-paths.j`
example test: `test/parallel/test-require-resolve-invalid-paths.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: Got unwanted exception: Cannot load module: <str>: ../fixtures/`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: Got unwanted exception: Cannot load module: 'Unsupported     │
│.node file: ': ../fixtures/module-loading-error.node                         │
│                                                           `
example test: `test/parallel/test-module-loading-error.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: Got unwanted exception: Creating MessagePort instances is not│ `

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: Got unwanted exception: Creating MessagePort instances is not│
│allowed                                                                      │
│                                                           `
example test: `test/parallel/test-worker-message-port-constructor.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: Got unwanted exception: EBADF: bad file descriptor, fchmod │ │ `

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: Got unwanted exception: EBADF: bad file descriptor, fchmod   │
│                                                                             │
│ In file test/parallel/test-fs-fchmod.js:27:3              `
example test: `test/parallel/test-fs-fchmod.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: Got unwanted exception: EIO: i/o error, access <str> │ │ │ │ In`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: Got unwanted exception: EIO: i/o error, access 'foo bar'      │
│                                                                             │
│ In file test/parallel/test-fs-null-bytes.js:32:5         `
example test: `test/parallel/test-fs-null-bytes.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: Got unwanted exception: ENOENT: no such file or directory, │ │o`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: Got unwanted exception: ENOENT: no such file or directory,   │
│open '/work/.harness/work/node-api/node-test/.tmp.480/assert-encoding-error' │
│                                                           `
example test: `test/parallel/test-fs-assert-encoding-error.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: Got unwanted exception: ENOENT: no such file or directory, │ │r`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: Got unwanted exception: ENOENT: no such file or directory,   │
│readdir 'unknown'                                                            │
│                                                           `
example test: `test/parallel/test-fs-readdir.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: Got unwanted exception: finished: argument must be a stream │ │`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: Got unwanted exception: finished: argument must be a stream  │
│                                                                             │
│ In file test/parallel/test-stream-end-of-streams.js:7:1   `
example test: `test/parallel/test-stream-end-of-streams.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: Got unwanted exception: Module.setSourceMapsSupport is not a │ `

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: Got unwanted exception: Module.setSourceMapsSupport is not a │
│function                                                                     │
│                                                           `
example test: `test/parallel/test-module-setsourcemapssupport.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: Got unwanted exception: node:child_process: execFileSync() is│ `

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: Got unwanted exception: node:child_process: execFileSync() is│
│not implemented yet in Elide                                                 │
│                                                           `
example test: `test/parallel/test-module-loading-globalpaths.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: Got unwanted exception: null !== null │ │ │ │ In file <loc> │ │`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: Got unwanted exception: null !== null                        │
│                                                                             │
│ In file test/parallel/test-stream-writable-null.js:21:3   `
example test: `test/parallel/test-stream-writable-null.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: Got unwanted exception: Out of range: offset -<n> + width <n> │`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: Got unwanted exception: Out of range: offset -1 + width 8    │
│exceeds length 9                                                             │
│                                                           `
example test: `test/parallel/test-buffer-read.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: Got unwanted exception: Out of range: offset -<n> exceeds │ │le`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: Got unwanted exception: Out of range: offset -1 exceeds      │
│length 9                                                                     │
│                                                           `
example test: `test/parallel/test-buffer-write.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: Got unwanted exception: push is not a function │ │ │ │ In file `

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: Got unwanted exception: push is not a function               │
│                                                                             │
│ In file test/parallel/test-stream-iter-validation.js:24:1 `
example test: `test/parallel/test-stream-iter-validation.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: Got unwanted exception: Readable.toWeb is not a function │ │ │ `

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: Got unwanted exception: Readable.toWeb is not a function     │
│                                                                             │
│ In file test/parallel/test-stream-readable-to-web-byob.js:`
example test: `test/parallel/test-stream-readable-to-web-byob.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: Got unwanted exception: receiver is not an EventEmitter │ │ │ │`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: Got unwanted exception: receiver is not an EventEmitter      │
│                                                                             │
│ In file test/parallel/test-event-emitter-emit-context.js:1`
example test: `test/parallel/test-event-emitter-emit-context.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: Got unwanted exception: swap16: length must be a multiple of │ `

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: Got unwanted exception: swap16: length must be a multiple of │
│2                                                                            │
│                                                           `
example test: `test/parallel/test-buffer-swap.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: Got unwanted exception: The <str> argument must be an │ │instan`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: Got unwanted exception: The "buffer" argument must be an     │
│instance of Buffer, TypedArray, DataView, or string. Received type string    │
│('true')                                                   `
example test: `test/parallel/test-fs-buffertype-writesync.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: Got unwanted exception: The <str> argument must be of │ │type o`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: Got unwanted exception: The "pathObject" argument must be of │
│type object. Received type number                                            │
│                                                           `
example test: `test/parallel/test-path-parse-format.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: Got unwanted exception: The <str> argument must be of type │ │n`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: Got unwanted exception: The "fd" argument must be of type    │
│number. Received type string ('')                                            │
│                                                           `
example test: `test/parallel/test-fs-fchown.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: Got unwanted exception: The value of <str> is out of │ │range. `

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: Got unwanted exception: The value of "length" is out of      │
│range. It must be >= 0 && <= 0. Received 10                                  │
│                                                           `
example test: `test/parallel/test-fs-read-empty-buffer.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: Got unwanted exception: toWritable is not a function │ │ │ │ In`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: Got unwanted exception: toWritable is not a function         │
│                                                                             │
│ In file test/parallel/test-stream-iter-writable-from.js:30`
example test: `test/parallel/test-stream-iter-writable-from.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: Got unwanted exception: Unexpected string in JSON at position│ `

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: Got unwanted exception: Unexpected string in JSON at position│
│42                                                                           │
│                                                           `
example test: `test/parallel/test-require-json.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: Got unwanted exception: URLPattern is not a constructor │ │ │ │`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: Got unwanted exception: URLPattern is not a constructor      │
│                                                                             │
│ In file test/parallel/test-urlpattern.js:10:1             `
example test: `test/parallel/test-urlpattern.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: Got unwanted exception: URLPattern is not a function │ │ │ │ In`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: Got unwanted exception: URLPattern is not a function         │
│                                                                             │
│ In file test/parallel/test-urlpattern-types.js:9:1        `
example test: `test/parallel/test-urlpattern-types.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: Got unwanted exception: Value of <str> must be of type URL │ │ `

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: Got unwanted exception: Value of "this" must be of type URL  │
│                                                                             │
│ In file test/parallel/test-whatwg-url-invalidthis.js:12:3 `
example test: `test/parallel/test-whatwg-url-invalidthis.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: Missing expected exception │ │ │ │ In file <loc>:│ │─ Stack Tra`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: Missing expected exception                                   │
│                                                                             │
│ In file test/parallel/test-diagnostics-channel-object-chan`
example test: `test/parallel/test-diagnostics-channel-object-channel-pub-sub.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: Missing expected exception │ │ │ │ In file <loc>│ │─ Stack Trac`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: Missing expected exception                                   │
│                                                                             │
│ In file test/parallel/test-diagnostics-channel-tracing-cha`
example test: `test/parallel/test-diagnostics-channel-tracing-channel-args-types.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: null == true │ │ │ │ In file <loc> │ │─ Stack Trace ───────────`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: null == true                                                 │
│                                                                             │
│ In file test/parallel/test-module-main-preserve-symlinks-f`
example test: `test/parallel/test-module-main-preserve-symlinks-fail.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: path.posix.extname(<str>) expect=<str> actual=<str> │ │path.win`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: path.posix.extname("unknown") expect=".js" actual=""         │
│path.win32.extname("unknown") expect=".js" actual=""                         │
│path.win32.extname("C:unknown") expect=".js" actual=""     `
example test: `test/parallel/test-path-extname.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: Should throw DataCloneError when posting uncloneables │ │ │ │ I`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: Should throw DataCloneError when posting uncloneables        │
│                                                                             │
│ In file test/parallel/test-worker-message-mark-as-unclonea`
example test: `test/parallel/test-worker-message-mark-as-uncloneable.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: The input did not match the regular expression: /^Sat Apr <n> │`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: The input did not match the regular expression: /^Sat Apr 14 │
│2018 14:34:56 GMT\+0200 \(.+\)$/                                             │
│                                                           `
example test: `test/parallel/test-process-env-tz.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: The input did not match the regular expression: │ │/MODULE_NOT_`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: The input did not match the regular expression:              │
│/MODULE_NOT_FOUND/                                                           │
│                                                           `
example test: `test/parallel/test-module-main-fail.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: undefined !== undefined │ │ │ │ In file <loc> │ │─ Stack Trace `

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: undefined !== undefined                                      │
│                                                                             │
│ In file test/parallel/test-fs-write.js:45:1               `
example test: `test/parallel/test-fs-write.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: undefined == true │ │ │ │ In file <loc> │ │─ Stack Trace ──────`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: undefined == true                                            │
│                                                                             │
│ In file test/parallel/test-vm-preserves-property.js:20:1  `
example test: `test/parallel/test-vm-preserves-property.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: undefined === [B@39e46fdc │ │ │ │ In file <loc> │ │─ Stack Trac`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: undefined === [B@39e46fdc                                    │
│                                                                             │
│ In file test/parallel/test-buffer-arraybuffer.js:15:1     `
example test: `test/parallel/test-buffer-arraybuffer.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: undefined === {_write: {}} │ │ │ │ In file <loc> │ │─ Stack Tra`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: undefined === {_write: {}}                                   │
│                                                                             │
│ In file test/parallel/test-stream-writableState-ending.js:`
example test: `test/parallel/test-stream-writableState-ending.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: undefined === {} │ │ │ │ In file <loc> │ │─ Stack Trace ───────`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: undefined === {}                                             │
│                                                                             │
│ In file test/parallel/test-vm-global-define-property.js:46`
example test: `test/parallel/test-vm-global-define-property.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: undefined === {F_OK: <n>, R_OK: <n>, W_OK: <n>, X_OK: <n>, │ │C`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: undefined === {F_OK: 0, R_OK: 4, W_OK: 2, X_OK: 1,           │
│COPYFILE_EXCL: 1, …}                                                         │
│                                                           `
example test: `test/parallel/test-fs-promises-exists.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: undefined === <n> │ │ │ │ In file test/parallel/test-stream-wri`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: undefined === 0                                              │
│                                                                             │
│ In file test/parallel/test-stream-writableState-uncorked-b`
example test: `test/parallel/test-stream-writableState-uncorked-bufferedRequestCount.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: undefined === <str> │ │ │ │ In file test/parallel/test-diagnost`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: undefined === 'before'                                       │
│                                                                             │
│ In file test/parallel/test-diagnostics-channel-bounded-cha`
example test: `test/parallel/test-diagnostics-channel-bounded-channel-scope-error.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: undefined deepStrictEqual [<n>, <n>, <n>, <n>] │ │ │ │ In file `

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: undefined deepStrictEqual [10, 20, 30, 40]                   │
│                                                                             │
│ In file test/parallel/test-stream-iter-sharedarraybuffer.j`
example test: `test/parallel/test-stream-iter-sharedarraybuffer.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: undefined deepStrictEqual {message: {hello: <str>}} │ │ │ │ In `

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: undefined deepStrictEqual {message: {hello: 'world'}}        │
│                                                                             │
│ In file test/parallel/test-worker-message-port-receive-mes`
example test: `test/parallel/test-worker-message-port-receive-message.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: undefined deepStrictEqual {traceId: <str>} │ │ │ │ In file <loc`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: undefined deepStrictEqual {traceId: 'xyz789'}                │
│                                                                             │
│ In file test/parallel/test-diagnostics-channel-bounded-cha`
example test: `test/parallel/test-diagnostics-channel-bounded-channel-scope.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │DOMException │ │ │ │ In file <loc> │ │─ Stack Trace ───────────────────────────`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│DOMException                                                                 │
│                                                                             │
│ In file test/parallel/test-worker-message-port-arraybuffer`
example test: `test/parallel/test-worker-message-port-arraybuffer.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │DOMException │ │ │ │ In file <loc>:│ │─ Stack Trace ───────────────────────────`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│DOMException                                                                 │
│                                                                             │
│ In file test/parallel/test-worker-message-port-message-por`
example test: `test/parallel/test-worker-message-port-message-port-transferring.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │java.lang.UnsupportedOperationException: os.constants is not yet implemented │ `

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│java.lang.UnsupportedOperationException: os.constants is not yet implemented │
│                                                                             │
│ In file test/parallel/test-util-exception-with-host-port.j`
example test: `test/parallel/test-util-exception-with-host-port.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │java.lang.UnsupportedOperationException: os.totalmem() is not yet implemented│ `

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│java.lang.UnsupportedOperationException: os.totalmem() is not yet implemented│
│                                                                             │
│ In file test/parallel/test-buffer-tostring-rangeerror.js:1`
example test: `test/parallel/test-buffer-tostring-rangeerror.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │java.lang.UnsupportedOperationException: process.abort() is not yet │ │implemen`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│java.lang.UnsupportedOperationException: process.abort() is not yet          │
│implemented                                                                  │
│                                                           `
example test: `test/parallel/test-process-abort.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │java.lang.UnsupportedOperationException: process.cpuUsage() is not yet │ │imple`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│java.lang.UnsupportedOperationException: process.cpuUsage() is not yet       │
│implemented                                                                  │
│                                                           `
example test: `test/parallel/test-process-cpuUsage.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │java.lang.UnsupportedOperationException: process.memoryUsage() is not yet │ │im`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│java.lang.UnsupportedOperationException: process.memoryUsage() is not yet    │
│implemented                                                                  │
│                                                           `
example test: `test/parallel/test-worker-memory.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │java.lang.UnsupportedOperationException: process.uptime() is not yet │ │impleme`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│java.lang.UnsupportedOperationException: process.uptime() is not yet         │
│implemented                                                                  │
│                                                           `
example test: `test/parallel/test-process-uptime.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │java.lang.UnsupportedOperationException: util.callbackify() is not yet │ │imple`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│java.lang.UnsupportedOperationException: util.callbackify() is not yet       │
│implemented                                                                  │
│                                                           `
example test: `test/parallel/test-util-callbackify.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │java.lang.UnsupportedOperationException: util.debuglog() is not yet │ │implemen`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│java.lang.UnsupportedOperationException: util.debuglog() is not yet          │
│implemented                                                                  │
│                                                           `
example test: `test/parallel/test-process-exit-code.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │java.lang.UnsupportedOperationException: util.deprecate() is not yet │ │impleme`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│java.lang.UnsupportedOperationException: util.deprecate() is not yet         │
│implemented                                                                  │
│                                                           `
example test: `test/parallel/test-util-deprecate-invalid-code.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │java.lang.UnsupportedOperationException: util.format() is not yet implemented│ `

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│java.lang.UnsupportedOperationException: util.format() is not yet implemented│
│                                                                             │
│ In file test/parallel/test-util-format.js:265:1           `
example test: `test/parallel/test-util-format.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │java.lang.UnsupportedOperationException: util.inherits() is not yet │ │implemen`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│java.lang.UnsupportedOperationException: util.inherits() is not yet          │
│implemented                                                                  │
│                                                           `
example test: `test/parallel/test-util-inherits.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │java.lang.UnsupportedOperationException: util.isDeepStrictEqual() is not yet │ `

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│java.lang.UnsupportedOperationException: util.isDeepStrictEqual() is not yet │
│implemented                                                                  │
│                                                           `
example test: `test/parallel/test-util-isDeepStrictEqual.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │java.lang.UnsupportedOperationException: util.parseEnv() is not yet │ │implemen`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│java.lang.UnsupportedOperationException: util.parseEnv() is not yet          │
│implemented                                                                  │
│                                                           `
example test: `test/parallel/test-util-parse-env.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │java.lang.UnsupportedOperationException: util.stripVTControlCharacters() is │ │`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│java.lang.UnsupportedOperationException: util.stripVTControlCharacters() is  │
│not yet implemented                                                          │
│                                                           `
example test: `test/parallel/test-util-inspect-regexp.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │null │ │ │ │ In file <loc> │ │─ Stack Trace ───────────────────────────────────`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│null                                                                         │
│                                                                             │
│ In file test/parallel/test-console-log-throw-primitive.js:`
example test: `test/parallel/test-console-log-throw-primitive.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │RangeError: Buffer.allocUnsafe: size must be non-negative │ │ │ │ In file <loc>`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│RangeError: Buffer.allocUnsafe: size must be non-negative                    │
│                                                                             │
│ In file test/parallel/test-fs-write-buffer-large.js:15:9  `
example test: `test/parallel/test-fs-write-buffer-large.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │ReferenceError: b is not defined │ │ │ │ In file <loc> │ │─ Stack Trace ───────`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: b is not defined                                             │
│                                                                             │
│ In file test/parallel/test-vm-not-strict.js:6:11          `
example test: `test/parallel/test-vm-not-strict.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │ReferenceError: BroadcastChannel is not defined │ │ │ │ In file <loc> │ │─ Stac`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: BroadcastChannel is not defined                              │
│                                                                             │
│ In file test/parallel/test-worker-messaging.js:23:21      `
example test: `test/parallel/test-worker-messaging.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │ReferenceError: test is not defined │ │ │ │ In file <loc> │ │─ Stack Trace ────`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: test is not defined                                          │
│                                                                             │
│ In file test/parallel/test-vm-function-redefinition.js:1:1`
example test: `test/parallel/test-vm-function-redefinition.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │resolver.setLocalAddress is not implemented │ │ │ │ In file <loc> │ │─ Stack Tr`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│resolver.setLocalAddress is not implemented                                  │
│                                                                             │
│ In file test/parallel/test-dns-setlocaladdress.js:49:1    `
example test: `test/parallel/test-dns-setlocaladdress.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │SyntaxError: <eval><loc> Expected an operand but found % │ │%PrepareFunctionFor`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│SyntaxError: <eval>:1:0 Expected an operand but found %                      │
│%PrepareFunctionForOptimization(Buffer.prototype.swap16) ^                   │
│                                                           `
example test: `test/parallel/test-buffer-swap-fast.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: _module._nodeModulePaths is not a function │ │ │ │ In file <loc> │ │`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: _module._nodeModulePaths is not a function                        │
│                                                                             │
│ In file test/parallel/test-module-nodemodulepaths.js:123:1`
example test: `test/parallel/test-module-nodemodulepaths.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: _module._resolveLookupPaths is not a function │ │ │ │ In file <loc> `

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: _module._resolveLookupPaths is not a function                     │
│                                                                             │
│ In file test/parallel/test-module-relative-lookup.js:13:15`
example test: `test/parallel/test-module-relative-lookup.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: (intermediate value)._getActiveRequests is not a function │ │ │ │ In`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: (intermediate value)._getActiveRequests is not a function         │
│                                                                             │
│ In file test/parallel/test-process-getactiverequests.js:10`
example test: `test/parallel/test-process-getactiverequests.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: (intermediate value).availableMemory is not a function │ │ │ │ In fi`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: (intermediate value).availableMemory is not a function            │
│                                                                             │
│ In file test/parallel/test-process-available-memory.js:4:2`
example test: `test/parallel/test-process-available-memory.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: (intermediate value).constrainedMemory is not a function │ │ │ │ In `

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: (intermediate value).constrainedMemory is not a function          │
│                                                                             │
│ In file test/parallel/test-process-constrained-memory.js:5`
example test: `test/parallel/test-process-constrained-memory.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: (intermediate value).from(...).map is not a function │ │ │ │ In file`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: (intermediate value).from(...).map is not a function              │
│                                                                             │
│ In file test/parallel/test-buffer-nopendingdep-map.js:11:1`
example test: `test/parallel/test-buffer-nopendingdep-map.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: (intermediate value).hrtime.bigint is not a function │ │ │ │ In file`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: (intermediate value).hrtime.bigint is not a function              │
│                                                                             │
│ In file test/parallel/test-fs-stat-bigint.js:97:21        `
example test: `test/parallel/test-fs-stat-bigint.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: (intermediate value).of is not a function │ │ │ │ In file <loc> │ │─`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: (intermediate value).of is not a function                         │
│                                                                             │
│ In file test/parallel/test-buffer-of-no-deprecation.js:7:1`
example test: `test/parallel/test-buffer-of-no-deprecation.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: (intermediate value).threadCpuUsage is not a function │ │ │ │ In fil`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: (intermediate value).threadCpuUsage is not a function             │
│                                                                             │
│ In file test/parallel/test-process-threadCpuUsage-main-thr`
example test: `test/parallel/test-process-threadCpuUsage-main-thread.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: <this>.getSymbolValue is not a function │ │ │ │ In file <loc> │ │─ S`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: <this>.getSymbolValue is not a function                           │
│                                                                             │
│ In file test/parallel/test-vm-symbols.js:1:1              `
example test: `test/parallel/test-vm-symbols.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: a.compare is not a function │ │ │ │ In file <loc> │ │─ Stack Trace ─`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: a.compare is not a function                                       │
│                                                                             │
│ In file test/parallel/test-buffer-compare-offset.js:9:20  `
example test: `test/parallel/test-buffer-compare-offset.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: b.compare is not a function │ │ │ │ In file <loc> │ │─ Stack Trace ─`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: b.compare is not a function                                       │
│                                                                             │
│ In file test/parallel/test-buffer-compare.js:11:20        `
example test: `test/parallel/test-buffer-compare.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: boundedChannel.run is not a function │ │ │ │ In file <loc> │ │─ Stac`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: boundedChannel.run is not a function                              │
│                                                                             │
│ In file test/parallel/test-diagnostics-channel-bounded-cha`
example test: `test/parallel/test-diagnostics-channel-bounded-channel-run.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: boundedChannel.run is not a function │ │ │ │ In file test/parallel/t`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: boundedChannel.run is not a function                              │
│                                                                             │
│ In file test/parallel/test-diagnostics-channel-bounded-cha`
example test: `test/parallel/test-diagnostics-channel-bounded-channel-run-transform-error.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: BroadcastChannel is not a constructor │ │ │ │ In file <loc> │ │─ Sta`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: BroadcastChannel is not a constructor                             │
│                                                                             │
│ In file test/parallel/test-worker-broadcastchannel-wpt.js:`
example test: `test/parallel/test-worker-broadcastchannel-wpt.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: buf[((<str> + (intermediate value)) + <str>)] is not a │ │function │`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: buf[(("writeBigInt64" + (intermediate value)) + "")] is not a     │
│function                                                                     │
│                                                           `
example test: `test/parallel/test-buffer-bigint64.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: callback is not a function │ │ │ │ In file <loc> │ │─ Stack Trace ──`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: callback is not a function                                        │
│                                                                             │
│ In file test/parallel/test-stream-typedarray.js:72:3      `
example test: `test/parallel/test-stream-typedarray.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: Cannot convert a Symbol value to a string │ │ │ │ In file <loc>│ │─ `

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot convert a Symbol value to a string                         │
│                                                                             │
│ In file test/parallel/test-event-emitter-max-listeners-war`
example test: `test/parallel/test-event-emitter-max-listeners-warning-for-symbol.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: Cannot find module: <str> │ │ │ │ In file <loc> │ │─ Stack Trace ───`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot find module: 'path'                                        │
│                                                                             │
│ In file test/parallel/test-require-resolve.js:35:20       `
example test: `test/parallel/test-require-resolve.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: Cannot load module: <str> │ │ │ │ In file <loc>│ │─ Stack Trace ────`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'http'                                        │
│                                                                             │
│ In file test/parallel/test-async-hooks-execution-async-res`
example test: `test/parallel/test-async-hooks-execution-async-resource-await.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: Cannot load module: <str> │ │ │ │ In file test/parallel/test-process`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'net'                                         │
│                                                                             │
│ In file test/parallel/test-process-getactiveresources-trac`
example test: `test/parallel/test-process-getactiveresources-track-active-handles.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: Cannot load module: <str> │ │ │ │ In file test/parallel/test-timers-`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'net'                                         │
│                                                                             │
│ In file test/parallel/test-timers-socket-timeout-removes-o`
example test: `test/parallel/test-timers-socket-timeout-removes-other-socket-unref-timer.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: Cannot load script: . │ │ │ │ In file <loc>: │ │ ╭─ │ │→ <n> │ <str>`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load script: .                                             │
│                                                                             │
│ In file test/parallel/test-require-dot.js:1:18:           `
example test: `test/parallel/test-require-dot.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: Cannot read property <str> of null │ │ │ │ In file <loc> │ │─ Stack `

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot read property 'size' of null                               │
│                                                                             │
│ In file test/parallel/test-stream-pipe-await-drain.js:27:5`
example test: `test/parallel/test-stream-pipe-await-drain.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: Cannot read property <str> of undefined │ │ │ │ In file <loc>: │ │ ╭`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot read property 'slice' of undefined                         │
│                                                                             │
│ In file test/parallel/test-module-children.js:2:18:       `
example test: `test/parallel/test-module-children.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: Cannot set property <str> of undefined │ │ │ │ In file <loc> │ │─ St`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot set property '.bar' of undefined                           │
│                                                                             │
│ In file test/parallel/test-module-multi-extensions.js:20:3`
example test: `test/parallel/test-module-multi-extensions.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: Cannot set property │ │<str> of│ │undefined │ │ │ │ In file <loc> │ `

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot set property                                               │
│'/work/.harness/work/node-api/node-api-overlay/test/fixtures/semicolon.js' of│
│undefined                                                  `
example test: `test/parallel/test-require-cache.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: channel.port1.on is not a function │ │ │ │ In file <loc> │ │─ Stack `

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: channel.port1.on is not a function                                │
│                                                                             │
│ In file test/parallel/test-worker-message-channel.js:12:3 `
example test: `test/parallel/test-worker-message-channel.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: channel.withStoreScope is not a function │ │ │ │ In file <loc> │ │─ `

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: channel.withStoreScope is not a function                          │
│                                                                             │
│ In file test/parallel/test-diagnostics-channel-run-stores-`
example test: `test/parallel/test-diagnostics-channel-run-stores-scope.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: channel.withStoreScope is not a function │ │ │ │ In file test/parall`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: channel.withStoreScope is not a function                          │
│                                                                             │
│ In file test/parallel/test-diagnostics-channel-run-stores-`
example test: `test/parallel/test-diagnostics-channel-run-stores-scope-transform-error.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: compressGzipSync is not a function │ │ │ │ In file <loc> │ │─ Stack `

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: compressGzipSync is not a function                                │
│                                                                             │
│ In file test/parallel/test-stream-iter-transform-sync.js:4`
example test: `test/parallel/test-stream-iter-transform-sync.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: duplexPair is not a function │ │ │ │ In file <loc> │ │─ Stack Trace `

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: duplexPair is not a function                                      │
│                                                                             │
│ In file test/parallel/test-stream-duplexpair.js:8:16      `
example test: `test/parallel/test-stream-duplexpair.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: fromWritable is not a function │ │ │ │ In file <loc> │ │─ Stack Trac`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: fromWritable is not a function                                    │
│                                                                             │
│ In file test/parallel/test-stream-iter-from-writable-cache`
example test: `test/parallel/test-stream-iter-from-writable-cache-options.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: function Stats() { [native code] } is not a constructor │ │ │ │ In f`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: function Stats() { [native code] } is not a constructor           │
│                                                                             │
│ In file test/parallel/test-fs-watchfile.js:34:28          `
example test: `test/parallel/test-fs-watchfile.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: getMaxListeners is not a function │ │ │ │ In file <loc> │ │─ Stack T`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: getMaxListeners is not a function                                 │
│                                                                             │
│ In file test/parallel/test-events-getmaxlisteners.js:9:22 `
example test: `test/parallel/test-events-getmaxlisteners.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: immediate.hasRef is not a function │ │ │ │ In file <loc> │ │─ Stack `

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: immediate.hasRef is not a function                                │
│                                                                             │
│ In file test/parallel/test-timers-immediate-unref.js:7:20 `
example test: `test/parallel/test-timers-immediate-unref.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: m.createCachedData is not a function │ │ │ │ In file <loc> │ │─ Stac`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: m.createCachedData is not a function                              │
│                                                                             │
│ In file test/parallel/test-vm-module-cached-data.js:12:22 `
example test: `test/parallel/test-vm-module-cached-data.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: mod._initPaths is not a function │ │ │ │ In file <loc> │ │─ Stack Tr`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: mod._initPaths is not a function                                  │
│                                                                             │
│ In file test/parallel/test-module-globalpaths-nodepath.js:`
example test: `test/parallel/test-module-globalpaths-nodepath.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: Module._stat is not a function │ │ │ │ In file <loc> │ │─ Stack Trac`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Module._stat is not a function                                    │
│                                                                             │
│ In file test/parallel/test-module-stat.js:19:20           `
example test: `test/parallel/test-module-stat.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: Object.defineProperty called on non-object │ │ │ │ In file <loc> │ │`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Object.defineProperty called on non-object                        │
│                                                                             │
│ In file test/parallel/test-vm-context-dont-contextify.js:1`
example test: `test/parallel/test-vm-context-dont-contextify.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: pathToFileURL: path must be an absolute filesystem path │ │ │ │ In f`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: pathToFileURL: path must be an absolute filesystem path           │
│                                                                             │
│ In file test/parallel/test-url-pathtofileurl.js:8:19      `
example test: `test/parallel/test-url-pathtofileurl.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: pipeline: every link must be a Readable on the left and a Writable│ `

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: pipeline: every link must be a Readable on the left and a Writable│
│on the right                                                                 │
│                                                           `
example test: `test/parallel/test-stream-pipeline-uncaught.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: port1.on is not a function │ │ │ │ In file <loc> │ │─ Stack Trace ──`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: port1.on is not a function                                        │
│                                                                             │
│ In file test/parallel/test-worker-message-port-close.js:20`
example test: `test/parallel/test-worker-message-port-close.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: port1.once is not a function │ │ │ │ In file test/parallel/test-work`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: port1.once is not a function                                      │
│                                                                             │
│ In file test/parallel/test-worker-message-port-multiple-sh`
example test: `test/parallel/test-worker-message-port-multiple-sharedarraybuffers.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: port2.on is not a function │ │ │ │ In file <loc> │ │─ Stack Trace ──`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: port2.on is not a function                                        │
│                                                                             │
│ In file test/parallel/test-worker-message-port.js:14:3    `
example test: `test/parallel/test-worker-message-port.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: port2.once is not a function │ │ │ │ In file <loc> │ │─ Stack Trace `

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: port2.once is not a function                                      │
│                                                                             │
│ In file test/parallel/test-worker-message-port-transfer-du`
example test: `test/parallel/test-worker-message-port-transfer-duplicate.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: pullSync is not a function │ │ │ │ In file <loc> │ │─ Stack Trace ──`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: pullSync is not a function                                        │
│                                                                             │
│ In file test/parallel/test-stream-iter-pull-sync.js:10:26 `
example test: `test/parallel/test-stream-iter-pull-sync.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: read[(intermediate value).asyncDispose] is not a function │ │ │ │ In`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: read[(intermediate value).asyncDispose] is not a function         │
│                                                                             │
│ In file test/parallel/test-stream-readable-dispose.js:19:3`
example test: `test/parallel/test-stream-readable-dispose.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: Readable.from(...).compose is not a function │ │ │ │ In file <loc> │`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Readable.from(...).compose is not a function                      │
│                                                                             │
│ In file test/parallel/test-stream-readable-compose.js:13:1`
example test: `test/parallel/test-stream-readable-compose.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: Right-hand-side of instanceof is not an object │ │ │ │ In file <loc>`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Right-hand-side of instanceof is not an object                    │
│                                                                             │
│ In file test/parallel/test-fs-opendir.js:30:10            `
example test: `test/parallel/test-fs-opendir.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: sb.entries is not a function │ │ │ │ In file <loc> │ │─ Stack Trace `

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: sb.entries is not a function                                      │
│                                                                             │
│ In file test/parallel/test-buffer-slow.js:14:28           `
example test: `test/parallel/test-buffer-slow.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: storage.withScope is not a function │ │ │ │ In file <loc> │ │─ Stack`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: storage.withScope is not a function                               │
│                                                                             │
│ In file test/parallel/test-async-local-storage-run-scope.j`
example test: `test/parallel/test-async-local-storage-run-scope.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: stream.Stream is not a constructor │ │ │ │ In file <loc> │ │─ Stack `

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: stream.Stream is not a constructor                                │
│                                                                             │
│ In file test/parallel/test-stream-pipe-without-listenerCou`
example test: `test/parallel/test-stream-pipe-without-listenerCount.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: The <str> argument must be a number or Date. Received type string│ │`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: The "time" argument must be a number or Date. Received type string│
│('-1')                                                                       │
│                                                           `
example test: `test/parallel/test-fs-timestamp-parsing-error.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: The <str> argument must be of type function. Received type string │ `

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: The "cb" argument must be of type function. Received type string  │
│('JSUndefined')                                                              │
│                                                           `
example test: `test/parallel/test-fs-read-optional-params.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: timer.hasRef is not a function │ │ │ │ In file <loc> │ │─ Stack Trac`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: timer.hasRef is not a function                                    │
│                                                                             │
│ In file test/parallel/test-timers-unref.js:36:20          `
example test: `test/parallel/test-timers-unref.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: toReadable is not a function │ │ │ │ In file <loc> │ │─ Stack Trace `

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: toReadable is not a function                                      │
│                                                                             │
│ In file test/parallel/test-stream-iter-to-readable.js:261:`
example test: `test/parallel/test-stream-iter-to-readable.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: url.Url is not a constructor │ │ │ │ In file <loc> │ │─ Stack Trace `

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: url.Url is not a constructor                                      │
│                                                                             │
│ In file test/parallel/test-url-parse-query.js:74:34       `
example test: `test/parallel/test-url-parse-query.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: URLPattern is not a constructor │ │ │ │ In file <loc> │ │─ Stack Tra`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: URLPattern is not a constructor                                   │
│                                                                             │
│ In file test/parallel/test-urlpattern-invalidthis.js:8:17 `
example test: `test/parallel/test-urlpattern-invalidthis.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: URLSearchParams init must be a string, sequence of pairs, or │ │reco`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: URLSearchParams init must be a string, sequence of pairs, or      │
│record                                                                       │
│                                                           `
example test: `test/parallel/test-whatwg-url-custom-searchparams-constructor.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: vm.SyntheticModule is not a constructor │ │ │ │ In file <loc> │ │─ S`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: vm.SyntheticModule is not a constructor                           │
│                                                                             │
│ In file test/parallel/test-vm-module-evaluate-synthethic-m`
example test: `test/parallel/test-vm-module-evaluate-synthethic-module.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: vm.SyntheticModule is not a constructor │ │ │ │ In file <loc>│ │─ St`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: vm.SyntheticModule is not a constructor                           │
│                                                                             │
│ In file test/parallel/test-vm-module-evaluate-synthethic-m`
example test: `test/parallel/test-vm-module-evaluate-synthethic-module-rejection.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │undefined │ │ │ │ In file <loc>│ │─ Stack Trace ───────────────────────────────`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│undefined                                                                    │
│                                                                             │
│ In file test/parallel/test-event-emitter-no-error-provided`
example test: `test/parallel/test-event-emitter-no-error-provided-to-error-event.js`

### 1 × `╭─────────────────────────────────────────────────────────────────────────────╮ │Error │ │ │ │ In file <loc> │ │─ Advice ───────────────────────────────────────`

distinct messages:
- `╭─────────────────────────────────────────────────────────────────────────────╮
│Error                                                                        │
│                                                                             │
│ In file test/parallel/test-stream-writable-writable.js:419`
example test: `test/parallel/test-stream-writable-writable.js`

### 1 × `╭─────────────────────────────────────────────────────────────────────────────╮ │Error │ │ │ │ In file <loc> │ │─ Stack Trace ──────────────────────────────────`

distinct messages:
- `╭─────────────────────────────────────────────────────────────────────────────╮
│Error                                                                        │
│                                                                             │
│ In file test/parallel/test-events-uncaught-exception-stack`
example test: `test/parallel/test-events-uncaught-exception-stack.js`

### 1 × `╭─────────────────────────────────────────────────────────────────────────────╮ │Error: _write() not implemented │ │ │ │ In file <loc> │ │─ Advice ─────────────`

distinct messages:
- `╭─────────────────────────────────────────────────────────────────────────────╮
│Error: _write() not implemented                                              │
│                                                                             │
│ In file test/parallel/test-stream2-objects.js:419:1       `
example test: `test/parallel/test-stream2-objects.js`

### 1 × `╭─────────────────────────────────────────────────────────────────────────────╮ │Error: ENOENT: no such file or directory, mkdir │ │<str> │ │ │ │ In file <loc> `

distinct messages:
- `╭─────────────────────────────────────────────────────────────────────────────╮
│Error: ENOENT: no such file or directory, mkdir                              │
│'/work/.harness/work/node-api/node-test/.tmp.645/work/.harness/work/node-api/│
│node-test/.tmp.645/absolute-target'                        `
example test: `test/parallel/test-fs-symlink-dir.js`

### 1 × `╭─────────────────────────────────────────────────────────────────────────────╮ │Error: ENOENT: no such file or directory, open │ │<str> │ │ │ │ In file <loc> │`

distinct messages:
- `╭─────────────────────────────────────────────────────────────────────────────╮
│Error: ENOENT: no such file or directory, open                               │
│'/work/.harness/work/node-api/node-test/.tmp.567/testReadFileSyncAppend.txt' │
│                                                           `
example test: `test/parallel/test-fs-read-file-sync.js`

### 1 × `╭─────────────────────────────────────────────────────────────────────────────╮ │Error: ENOENT: no such file or directory, statfs <str> │ │ │ │ In file <loc> │ `

distinct messages:
- `╭─────────────────────────────────────────────────────────────────────────────╮
│Error: ENOENT: no such file or directory, statfs 'unknown'                   │
│                                                                             │
│ In file test/parallel/test-fs-statfs.js:30:21             `
example test: `test/parallel/test-fs-statfs.js`

### 1 × `╭─────────────────────────────────────────────────────────────────────────────╮ │Error: foobar │ │ │ │ In file <loc> │ │─ Advice ───────────────────────────────`

distinct messages:
- `╭─────────────────────────────────────────────────────────────────────────────╮
│Error: foobar                                                                │
│                                                                             │
│ In file test/parallel/test-console-sync-write-error.js:419`
example test: `test/parallel/test-console-sync-write-error.js`

### 1 × `╭─────────────────────────────────────────────────────────────────────────────╮ │Error: invalid: --sandbox │ │ │ │ In file <loc> │ │─ Stack Trace ──────────────`

distinct messages:
- `╭─────────────────────────────────────────────────────────────────────────────╮
│Error: invalid: --sandbox                                                    │
│                                                                             │
│ In file test/parallel/test-process-raw-debug.js:34:11     `
example test: `test/parallel/test-process-raw-debug.js`

### 1 × `╭─────────────────────────────────────────────────────────────────────────────╮ │Error: kaboom │ │ │ │ In file <loc> │ │─ Stack Trace ──────────────────────────`

distinct messages:
- `╭─────────────────────────────────────────────────────────────────────────────╮
│Error: kaboom                                                                │
│                                                                             │
│ In file test/parallel/test-stream-writable-end-cb-uncaught`
example test: `test/parallel/test-stream-writable-end-cb-uncaught.js`

### 1 × `╭─────────────────────────────────────────────────────────────────────────────╮ │Error: node:worker_threads: moveMessagePortToContext is not implemented yet │ │`

distinct messages:
- `╭─────────────────────────────────────────────────────────────────────────────╮
│Error: node:worker_threads: moveMessagePortToContext is not implemented yet  │
│in Elide                                                                     │
│                                                           `
example test: `test/parallel/test-worker-message-port-move.js`

### 1 × `╭─────────────────────────────────────────────────────────────────────────────╮ │Error: something went wrong │ │ │ │ In file <loc>│ │─ Stack Trace ─────────────`

distinct messages:
- `╭─────────────────────────────────────────────────────────────────────────────╮
│Error: something went wrong                                                  │
│                                                                             │
│ In file test/parallel/test-stream-pipe-objectmode-to-non-o`
example test: `test/parallel/test-stream-pipe-objectmode-to-non-objectmode.js`

### 1 × `╭─────────────────────────────────────────────────────────────────────────────╮ │Error: transform failed │ │ │ │ In file test/parallel/test-diagnostics-channel-`

distinct messages:
- `╭─────────────────────────────────────────────────────────────────────────────╮
│Error: transform failed                                                      │
│                                                                             │
│ In file test/parallel/test-diagnostics-channel-bounded-cha`
example test: `test/parallel/test-diagnostics-channel-bounded-channel-scope-transform-error.js`

### 1 × `AssertionError: [{}, {}] deepStrictEqual [<str>] at Function.deepStrictEqual (native) at <loc> AssertionError: [{}, {}, {}, {}] deepStrictEqual [<str>] at Funct`

distinct messages:
- `AssertionError: [{}, {}] deepStrictEqual ['ab']
    at Function.deepStrictEqual (native)
    at test-stream-readable-setEncoding-existing-buffers.js:18:12
AssertionError: [{}, {}, {}, {}] deepStrictEqual ['🎉']
    at Function.deepStrictEqual (native)
    at test-stream-readable-setEncoding-existing`
example test: `test/parallel/test-stream-readable-setEncoding-existing-buffers.js`

### 1 × `AssertionError: [<str>, <str>, <str>, <str>, <str>, …] deepStrictEqual [<str>, <str>, <str>, <str>, <str>, …] at Function.deepStrictEqual (native) at <loc>`

distinct messages:
- `AssertionError: ['_read:a', 'push:a', 'readable', 'data:a', '_read:null', …] deepStrictEqual ['_read:a', 'push:a', 'readable', 'data:a', '_read:null', …]
    at Function.deepStrictEqual (native)
    at test-stream-readable-hwm-0-no-flow-data.js:98:14`
example test: `test/parallel/test-stream-readable-hwm-0-no-flow-data.js`

### 1 × `AssertionError: [<str>, <str>] deepStrictEqual [<str>, <str>, <str>] at Function.deepStrictEqual (native) at Process.<anonymous> (<loc>)`

distinct messages:
- `AssertionError: ['bar', 'foo'] deepStrictEqual ['bar', 'foo', 'removeListener']
    at Function.deepStrictEqual (native)
    at Process.<anonymous> (test-event-emitter-remove-all-listeners.js:31:12)`
example test: `test/parallel/test-event-emitter-remove-all-listeners.js`

### 1 × `AssertionError: <n> === null at Function.strictEqual (native) at <loc> at _return (<loc>)`

distinct messages:
- `AssertionError: 2 === null
    at Function.strictEqual (native)
    at test-stream-transform-hwm0.js:23:12
    at _return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)`
example test: `test/parallel/test-stream-transform-hwm0.js`

### 1 × `AssertionError: false === true at Function.strictEqual (native) at Process.<anonymous> (<loc>) at Process._return (<loc>) AssertionError: {baz: <str>} deepStric`

distinct messages:
- `AssertionError: false === true
    at Function.strictEqual (native)
    at Process.<anonymous> (test-diagnostics-channel-bind-store.js:103:10)
    at Process._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
AssertionError: {baz: 'buz'} deepStrictEqual {foo: 'bar'}
`
example test: `test/parallel/test-diagnostics-channel-bind-store.js`

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

### 1 × `AssertionError: function should not have been called at <loc> called with arguments: <n> at Function.fail (native) at Process.mustNotCall (<loc>)`

distinct messages:
- `AssertionError: function should not have been called at test-process-execve-on-exit.js:16
called with arguments: 1
    at Function.fail (native)
    at Process.mustNotCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:631:12)`
example test: `test/parallel/test-process-execve-on-exit.js`

### 1 × `AssertionError: Got unwanted exception: <str> === <str> at Function.throws (native) at pushError (<loc>) at <loc>`

distinct messages:
- `AssertionError: Got unwanted exception: '          ' === 'asdfasdfas'
    at Function.throws (native)
    at pushError (test-stream-unshift-read-race.js:74:10)
    at test-stream-unshift-read-race.js:64:25`
example test: `test/parallel/test-stream-unshift-read-race.js`

### 1 × `AssertionError: Got unwanted exception: t is not defined at Function.throws (native) at <loc> at _return (<loc>) at Process.<anonymous> (<loc>) at Process._retu`

distinct messages:
- `AssertionError: Got unwanted exception: t is not defined
    at Function.throws (native)
    at /work/.harness/work/node-api/node-api-overlay/test/common/index.js:806:12
    at _return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at Process.<anonymous> (test-timers`
example test: `test/parallel/test-timers-unref-throw-then-ref.js`

### 1 × `AssertionError: Non-integer delay ordering should be <n>,<n>,<n>,<n>, but got <n>,<n>,<n>,<n> at Function.deepStrictEqual (native) at <loc> at _return (<loc>)`

distinct messages:
- `AssertionError: Non-integer delay ordering should be 1,2,3,4, but got 1,3,4,2
    at Function.deepStrictEqual (native)
    at test-timers-non-integer-delay.js:72:12
    at _return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)`
example test: `test/parallel/test-timers-non-integer-delay.js`

### 1 × `AssertionError: undefined == true at ok (native) at <loc> at Array.forEach (native) at <loc> at _return (<loc>)`

distinct messages:
- `AssertionError: undefined == true
    at ok (native)
    at test-timers.js:74:5
    at Array.forEach (native)
    at test-timers.js:73:10
    at _return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)`
example test: `test/parallel/test-timers.js`

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

### 1 × `AssertionError: undefined === false at Function.strictEqual (native) at <loc> at _return (<loc>)`

distinct messages:
- `AssertionError: undefined === false
    at Function.strictEqual (native)
    at test-fs-write-stream-autoclose-option.js:16:12
    at _return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)`
example test: `test/parallel/test-fs-write-stream-autoclose-option.js`

### 1 × `AssertionError: undefined === null at Function.strictEqual (native) at <loc> at _return (<loc>)`

distinct messages:
- `AssertionError: undefined === null
    at Function.strictEqual (native)
    at test-fs-read-stream-err.js:34:12
    at _return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)`
example test: `test/parallel/test-fs-read-stream-err.js`

### 1 × `AssertionError: undefined deepStrictEqual {} at Function.deepStrictEqual (native) at <loc> AssertionError: undefined deepStrictEqual {} at Function.deepStrictEq`

distinct messages:
- `AssertionError: undefined deepStrictEqual {}
    at Function.deepStrictEqual (native)
    at test-next-tick.js:50:10
AssertionError: undefined deepStrictEqual {}
    at Function.deepStrictEqual (native)
    at test-next-tick.js:58:10`
example test: `test/parallel/test-next-tick.js`

### 1 × `AssertionError: undefined deepStrictEqual {foo: <str>} at Function.deepStrictEqual (native) at checkEnd (<loc>) at checkEnd (<loc>) at <loc> at <loc> AssertionE`

distinct messages:
- `AssertionError: undefined deepStrictEqual {foo: 'bar'}
    at Function.deepStrictEqual (native)
    at checkEnd (test-diagnostics-channel-tracing-channel-promise-non-thenable.js:20:10)
    at checkEnd (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at test-diagnostics`
example test: `test/parallel/test-diagnostics-channel-tracing-channel-promise-non-thenable.js`

### 1 × `default: <n> ╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: <str> === <str> │ │ │ │ In file <loc> │ │─ Stack T`

distinct messages:
- `default: 1
╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: '' === 'default: 1 '                                         │
│                                                                             │
│ In file test/parallel/test-console-count.js:13:`
example test: `test/parallel/test-console-count.js`

### 1 × `Error at Process.<anonymous> (<loc>) at Process._return (<loc>)`

distinct messages:
- `Error
    at Process.<anonymous> (test-process-beforeexit-throw-exit.js:15:9)
    at Process._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)`
example test: `test/parallel/test-process-beforeexit-throw-exit.js`

### 1 × `Error: foobar Error: foobar Error: foobar`

distinct messages:
- `Error: foobar
Error: foobar
Error: foobar`
example test: `test/parallel/test-console-async-write-error.js`

### 1 × `Error: setImmediate Err at <loc>`

distinct messages:
- `Error: setImmediate Err
    at test-timers-immediate-queue-throw.js:53:9`
example test: `test/parallel/test-timers-immediate-queue-throw.js`

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
    at test-console.js:1:1`
example test: `test/parallel/test-console.js`

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

### 1 × `Mismatched <anonymous> function calls. Expected exactly <n>, actual <n>. at Proxy.mustCall (<loc>) at Writable.<anonymous> (<loc>) at Writable._return (<loc>)`

distinct messages:
- `Mismatched <anonymous> function calls. Expected exactly 1, actual 0.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at Writable.<anonymous> (test-stream-writable-end-multiple.js:17:23)
    at Writable._return (/work/.harness/work/node-api/node-a`
example test: `test/parallel/test-stream-writable-end-multiple.js`

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

### 1 × `More of level <n>`

distinct messages:
- `More of level 3`
example test: `test/parallel/test-console-group.js`

### 1 × `node-api test exited with code <n>`

distinct messages:
- `node-api test exited with code 100`
example test: `test/parallel/test-process-exit-code-validation.js`

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

### 1 × `readable <n>`

distinct messages:
- `readable 16384`
example test: `test/parallel/test-stream2-read-sync-stack.js`

### 1 × `ReferenceError: err3 is not defined at Domain.err2 (<loc>) at err (<loc>)`

distinct messages:
- `ReferenceError: err3 is not defined
    at Domain.err2 (test-timers-reset-process-domain-on-throw.js:25:5)
    at err (test-timers-reset-process-domain-on-throw.js:21:5)`
example test: `test/parallel/test-timers-reset-process-domain-on-throw.js`

### 1 × `ReferenceError: interval is not defined at <loc> at _return (<loc>)`

distinct messages:
- `ReferenceError: interval is not defined
    at test-timers-unenroll-unref-interval.js:7:18
    at _return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)`
example test: `test/parallel/test-timers-unenroll-unref-interval.js`

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

### 1 × `TAP version <n> # Subtest: (node:timers/promises) is equal to (node:timers).promises not ok <n> - (node:timers/promises) is equal to (node:timers).promises --- `

distinct messages:
- `TAP version 13
# Subtest: (node:timers/promises) is equal to (node:timers).promises
not ok 1 - (node:timers/promises) is equal to (node:timers).promises
  ---
  duration_ms: 2
  failureType: 'testCodeFailure'
  error: "{setTimeout: {}, setImmediate: {}, setInterval: {}, scheduler: {wait: {}, yield: `
example test: `test/parallel/test-timers-promises.js`

### 1 × `TAP version <n> # Subtest: [object Object] not ok <n> - [object Object] --- duration_ms: <n> failureType: <str> error: <str> code: <str> ... <n>..<n> # tests <n`

distinct messages:
- `TAP version 13
# Subtest: [object Object]
not ok 1 - [object Object]
  ---
  duration_ms: 25
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

### 1 × `TAP version <n> # Subtest: Allocating uninitialized ArrayBuffers ... # Subtest: ...should not affect zero-fill in other threads not ok <n> - ...should not affec`

distinct messages:
- `TAP version 13
# Subtest: Allocating uninitialized ArrayBuffers ...
    # Subtest: ...should not affect zero-fill in other threads
    not ok 1 - ...should not affect zero-fill in other threads
      ---
      duration_ms: 1
      failureType: 'testCodeFailure'
      error: "node:worker_threads: new`
example test: `test/parallel/test-worker-arraybuffer-zerofill.js`

### 1 × `TAP version <n> # Subtest: Assert class destructuring behavior - diff option not ok <n> - Assert class destructuring behavior - diff option --- duration_ms: <n>`

distinct messages:
- `TAP version 13
# Subtest: Assert class destructuring behavior - diff option
not ok 1 - Assert class destructuring behavior - diff option
  ---
  duration_ms: 4
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
          duration_ms: 1
          failureType: 'testCodeFailure'
          erro`
example test: `test/parallel/test-require-package-map.js`

### 1 × `TAP version <n> # Subtest: deepEqual not ok <n> - deepEqual --- duration_ms: <n> failureType: <str> error: <str> code: <str> ... # Subtest: loose deepEqual not `

distinct messages:
- `TAP version 13
# Subtest: deepEqual
not ok 1 - deepEqual
  ---
  duration_ms: 2
  failureType: 'testCodeFailure'
  error: "Got unwanted exception: [120, 121, 122, 10] deepStrictEqual {}"
  code: 'ERR_ASSERTION'
  ...
# Subtest: loose deepEqual
not ok 2 - loose deepEqual
  ---
  duration_ms: 4
  fail`
example test: `test/parallel/test-assert-deep.js`

### 1 × `TAP version <n> # Subtest: equalArrayPairs # Subtest: not ok <n> - --- duration_ms: <n> failureType: <str> error: <str> code: <str> ... # Subtest: not ok <n> - `

distinct messages:
- `TAP version 13
# Subtest: equalArrayPairs
    # Subtest: 
    not ok 1 - 
      ---
      duration_ms: 80
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
# duration_ms 3`
example test: `test/parallel/test-url-format-invalid-input.js`

### 1 × `TAP version <n> # Subtest: fs.stat should throw AbortError when called with an already aborted AbortSignal not ok <n> - fs.stat should throw AbortError when cal`

distinct messages:
- `TAP version 13
# Subtest: fs.stat should throw AbortError when called with an already aborted AbortSignal
not ok 1 - fs.stat should throw AbortError when called with an already aborted AbortSignal
  ---
  duration_ms: 31
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
  duration_ms: 3
  failureType: 'testCodeFailure'
  error: "Missing expected exception"
  code: 'ERR_ASSERTION'
  ...
# Subtest: Handle undefined causes
not ok 2 - Handle undefined causes
  ---
  duration_ms: 2
  fail`
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
  duration_ms: 1
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
  duration_ms: 4
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
  duration_ms: 3
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
      duration_ms: 1
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
  duration_ms: 2
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
  duration_ms: 2
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

### 1 × `TypeError: (intermediate value).gc is not a function at <loc> at _return (<loc>)`

distinct messages:
- `TypeError: (intermediate value).gc is not a function
    at test-async-hooks-destroy-on-gc.js:25:14
    at _return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)`
example test: `test/parallel/test-async-hooks-destroy-on-gc.js`

### 1 × `TypeError: (intermediate value)(...).unref is not a function at <loc>`

distinct messages:
- `TypeError: (intermediate value)(...).unref is not a function
    at test-timers-immediate-unref-nested-once.js:8:38`
example test: `test/parallel/test-timers-immediate-unref-nested-once.js`

### 1 × `TypeError: (intermediate value)(...).unref is not a function at Process.<anonymous> (<loc>) at Process._return (<loc>)`

distinct messages:
- `TypeError: (intermediate value)(...).unref is not a function
    at Process.<anonymous> (test-timers-unrefed-in-beforeexit.js:6:39)
    at Process._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)`
example test: `test/parallel/test-timers-unrefed-in-beforeexit.js`

### 1 × `TypeError: Cannot read property <str> of undefined at onImmediate (<loc>) at onImmediate (<loc>) TypeError: Cannot read property <str> of undefined at onImmedia`

distinct messages:
- `TypeError: Cannot read property 'get' of undefined
    at onImmediate (test-timers-clearImmediate-als.js:21:21)
    at onImmediate (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
TypeError: Cannot read property 'get' of undefined
    at onImmediate (test-timers-clearImmed`
example test: `test/parallel/test-timers-clearImmediate-als.js`

### 1 × `TypeError: The <str> argument must be a number or Date. Received type string (<str>) at getExpectedMtime (<loc>) at runTests (<loc>) at runTests (<loc>)`

distinct messages:
- `TypeError: The "time" argument must be a number or Date. Received type string ('-1')
    at getExpectedMtime (test-fs-utimes.js:75:13)
    at runTests (test-fs-utimes.js:106:31)
    at runTests (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)`
example test: `test/parallel/test-fs-utimes.js`

### 1 × `TypeError: timer.refresh is not a function at <loc> at _return (<loc>)`

distinct messages:
- `TypeError: timer.refresh is not a function
    at test-timers-refresh-in-callback.js:12:11
    at _return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)`
example test: `test/parallel/test-timers-refresh-in-callback.js`

### 1 × `Uncaught (in promise) AssertionError: [] deepStrictEqual [<str>]`

distinct messages:
- `Uncaught (in promise) AssertionError: [] deepStrictEqual ['foo']`
example test: `test/parallel/test-vm-module-link.js`

### 1 × `Uncaught (in promise) AssertionError: <n> === <n> Uncaught (in promise) Error: stream.push() after EOF`

distinct messages:
- `Uncaught (in promise) AssertionError: 0 === 5
Uncaught (in promise) Error: stream.push() after EOF`
example test: `test/parallel/test-stream-flatMap.js`

### 1 × `Uncaught (in promise) AssertionError: <n> === undefined`

distinct messages:
- `Uncaught (in promise) AssertionError: 1 === undefined`
example test: `test/parallel/test-async-hooks-promise-triggerid.js`

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
Uncaught (in promise) AssertionError: Got rejection that did not match expected: Object{}`
example test: `test/parallel/test-timers-promises-scheduler.js`

### 1 × `Uncaught (in promise) AssertionError: Got rejection that did not match expected: TypeError: decompressGzip is not a function`

distinct messages:
- `Uncaught (in promise) AssertionError: Got rejection that did not match expected: TypeError: decompressGzip is not a function`
example test: `test/parallel/test-stream-iter-transform-errors.js`

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
Uncaught (in promise) AssertionError: 2 === 1`
example test: `test/parallel/test-stream-iter-from-async.js`

### 1 × `Uncaught (in promise) AssertionError: undefined deepStrictEqual {foo: <str>}`

distinct messages:
- `Uncaught (in promise) AssertionError: undefined deepStrictEqual {foo: 'bar'}`
example test: `test/parallel/test-diagnostics-channel-tracing-channel-promise-run-stores.js`

### 1 × `Uncaught (in promise) AssertionError: undefined deepStrictEqual <n>`

distinct messages:
- `Uncaught (in promise) AssertionError: undefined deepStrictEqual 4`
example test: `test/parallel/test-fs-readv-promisify.js`

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

### 1 × `Uncaught (in promise) Error: node:worker_threads: new Worker() is not implemented yet in Elide Uncaught (in promise) Error: node:worker_threads: new Worker() is`

distinct messages:
- `Uncaught (in promise) Error: node:worker_threads: new Worker() is not implemented yet in Elide
Uncaught (in promise) Error: node:worker_threads: new Worker() is not implemented yet in Elide`
example test: `test/parallel/test-worker-heapdump-failure.js`

### 1 × `Uncaught (in promise) Error: node:worker_threads: new Worker() is not implemented yet in Elide Uncaught (in promise) TypeError: The <str> argument must be of ty`

distinct messages:
- `Uncaught (in promise) Error: node:worker_threads: new Worker() is not implemented yet in Elide
Uncaught (in promise) TypeError: The "path" argument must be of type string or an instance of Buffer or URL. Received null`
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

### 1 × `Uncaught (in promise) SyntaxError: <eval><loc> Expected an operand but found import import foo from <str>; ^`

distinct messages:
- `Uncaught (in promise) SyntaxError: <eval>:2:8 Expected an operand but found import
        import foo from "./foo.js";
        ^`
example test: `test/parallel/test-vm-module-link-shared-deps.js`

### 1 × `Uncaught (in promise) TypeError: arrayBufferSync is not a function`

distinct messages:
- `Uncaught (in promise) TypeError: arrayBufferSync is not a function`
example test: `test/parallel/test-stream-iter-consumers-bytes.js`

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

### 1 × `Uncaught (in promise) TypeError: not a constructor Uncaught (in promise) TypeError: not a constructor Uncaught (in promise) TypeError: not a constructor`

distinct messages:
- `Uncaught (in promise) TypeError: not a constructor
Uncaught (in promise) TypeError: not a constructor
Uncaught (in promise) TypeError: not a constructor`
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

### 1 × `Uncaught (in promise) TypeError: shareSync is not a function Uncaught (in promise) TypeError: shareSync is not a function`

distinct messages:
- `Uncaught (in promise) TypeError: shareSync is not a function
Uncaught (in promise) TypeError: shareSync is not a function`
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
Uncaught (in promise) TypeError: tap is not a function`
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

### 1 × `Uncaught (in promise) TypeError: The <str> argument must be of type string or an instance of Buffer or URL. Received undefined`

distinct messages:
- `Uncaught (in promise) TypeError: The "path" argument must be of type string or an instance of Buffer or URL. Received undefined`
example test: `test/parallel/test-fs-promises-statfs-validate-path.js`

### 1 × `Uncaught (in promise) TypeError: transform is not a function`

distinct messages:
- `Uncaught (in promise) TypeError: transform is not a function`
example test: `test/parallel/test-stream-iter-pull-async.js`

### 1 × `Uncaught JSException in event listener: AssertionError: <str> === <str> Uncaught (in promise) TypeError: The <str> argument must be of type string or an instanc`

distinct messages:
- `Uncaught JSException in event listener: AssertionError: 'Error' === 'AbortError'
Uncaught (in promise) TypeError: The "path" argument must be of type string or an instance of Buffer or URL. Received null
Uncaught (in promise) TypeError: The "path" argument must be of type string or an instance of Bu`
example test: `test/parallel/test-fs-read-stream-file-handle.js`

### 1 × `util.stripVTControlCharacters() is not yet implemented`

distinct messages:
- `util.stripVTControlCharacters() is not yet implemented`
example test: `test/parallel/test-util-stripvtcontrolcharacters.js`

### 1 × `Validating readFile on file /work/.harness/work/node-api/node-test/.tmp.<n>/.removeme-fs-readfile-<n>-1K.txt of length <n> Validating readFile on file /work/.ha`

distinct messages:
- `Validating readFile on file /work/.harness/work/node-api/node-test/.tmp.608/.removeme-fs-readfile-6256-1K.txt of length 1024
Validating readFile on file /work/.harness/work/node-api/node-test/.tmp.608/.removeme-fs-readfile-6256-64K.txt of length 65536
Validating readFile on file /work/.harness/work/`
example test: `test/parallel/test-fs-readfile.js`

## By feature

| count | feature |
|---:|---|
| 185 | node:streams |
| 133 | node:fs |
| 125 | node:worker-threads |
| 75 | node:vm |
| 73 | node:process |
| 56 | node:buffer |
| 46 | node:module-loading |
| 39 | node:diagnostics-channel |
| 36 | node:timers |
| 35 | node:async-hooks |
| 31 | node:events |
| 25 | node:url |
| 20 | node:dns |
| 18 | node:util |
| 15 | node:console |
| 13 | node:assert |
| 7 | node:path |
