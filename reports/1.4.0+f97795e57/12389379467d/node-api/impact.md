# Impact-ordered failures

## By root-cause signature

### 400 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: Cannot load module: <str> │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ co`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'async_hooks'                                 │
│                                                                             │
│ In file test/parallel/test-async-hooks-constructor.js:7:21`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'vm'                                          │
│                                                                             │
│ In file test/parallel/test-async-local-storage-contexts.js`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'async_hooks'                                 │
│                                                                             │
│ In file test/parallel/test-async-hooks-enable-recursive.js`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'async_hooks'                                 │
│                                                                             │
│ In file test/parallel/test-async-hooks-enable-during-promi`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'async_hooks'                                 │
│                                                                             │
│ In file test/parallel/test-async-hooks-enable-disable-enab`
example test: `test/parallel/test-async-hooks-constructor.js`

### 111 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │SyntaxError: Variable <str> has already been declared │ │ │ │ In file <loc>: │ `

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│SyntaxError: Variable "Buffer" has already been declared                     │
│                                                                             │
│ In file test/parallel/test-buffer-failed-alloc-typed-array`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│SyntaxError: Variable "MessageChannel" has already been declared             │
│                                                                             │
│ In file test/parallel/test-buffer-pool-untransferable.js:1`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│SyntaxError: Variable "Buffer" has already been declared                     │
│                                                                             │
│ In file test/parallel/test-buffer-bytelength.js:1:1:      `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│SyntaxError: Variable "Buffer" has already been declared                     │
│                                                                             │
│ In file test/parallel/test-buffer-isascii.js:1:1:         `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│SyntaxError: Variable "Buffer" has already been declared                     │
│                                                                             │
│ In file test/parallel/test-buffer-isutf8.js:1:1:          `
example test: `test/parallel/test-buffer-failed-alloc-typed-arrays.js`

### 65 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: Got unwanted exception: {} │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: Got unwanted exception: {}                                   │
│                                                                             │
│ In file test/parallel/test-buffer-concat.js:49:3:         `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: Got unwanted exception: {}                                   │
│                                                                             │
│ In file test/parallel/test-buffer-new.js:6:1:             `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: Got unwanted exception: {}                                   │
│                                                                             │
│ In file test/parallel/test-buffer-over-max-length.js:14:1:`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: Got unwanted exception: {}                                   │
│                                                                             │
│ In file test/parallel/test-buffer-read.js:10:3:           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: Got unwanted exception: {}                                   │
│                                                                             │
│ In file test/parallel/test-buffer-no-negative-allocation.j`
example test: `test/parallel/test-buffer-concat.js`

### 63 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: Cannot load module: <str> │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ │ `

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'internal/assert/myers_diff'                  │
│                                                                             │
│ In file test/parallel/test-assert-myers-diff.js:7:23:     `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'internal/test/binding'                       │
│                                                                             │
│ In file test/parallel/test-buffer-write-fast.js:7:29:     `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'diagnostics_channel'                         │
│                                                                             │
│ In file test/parallel/test-console-diagnostics-channels.js`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'worker_threads'                              │
│                                                                             │
│ In file test/parallel/test-console.js:34:26:              `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'diagnostics_channel'                         │
│                                                                             │
│ In file test/parallel/test-diagnostics-channel-memory-leak`
example test: `test/parallel/test-assert-myers-diff.js`

### 43 × `Fatal error (java.lang.UnsupportedOperationException): process.exit() is not yet implemented java.lang.UnsupportedOperationException: process.exit() is not yet `

distinct messages:
- `Fatal error (java.lang.UnsupportedOperationException): process.exit() is not yet implemented
java.lang.UnsupportedOperationException: process.exit() is not yet implemented
	at dev.elide.lang.javascript.globals.ProcessGlobal.notImplemented(ProcessGlobal.java:596)
	at dev.elide.lang.javascript.globals`
- `Fatal error (java.lang.UnsupportedOperationException): process.exit() is not yet implemented
java.lang.UnsupportedOperationException: process.exit() is not yet implemented
	at dev.elide.lang.javascript.globals.ProcessGlobal.notImplemented(ProcessGlobal.java:596)
	at dev.elide.lang.javascript.globals`
- `Fatal error (java.lang.UnsupportedOperationException): process.exit() is not yet implemented
java.lang.UnsupportedOperationException: process.exit() is not yet implemented
	at dev.elide.lang.javascript.globals.ProcessGlobal.notImplemented(ProcessGlobal.java:596)
	at dev.elide.lang.javascript.globals`
- `Fatal error (java.lang.UnsupportedOperationException): process.exit() is not yet implemented
java.lang.UnsupportedOperationException: process.exit() is not yet implemented
	at dev.elide.lang.javascript.globals.ProcessGlobal.notImplemented(ProcessGlobal.java:596)
	at dev.elide.lang.javascript.globals`
- `Fatal error (java.lang.UnsupportedOperationException): process.exit() is not yet implemented
java.lang.UnsupportedOperationException: process.exit() is not yet implemented
	at dev.elide.lang.javascript.globals.ProcessGlobal.notImplemented(ProcessGlobal.java:596)
	at dev.elide.lang.javascript.globals`
example test: `test/parallel/test-event-emitter-once.js`

### 29 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: Cannot read property <str> of undefined │ │ │ │ In file <loc>: │ │ ╭`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot read property 'prototype' of undefined                     │
│                                                                             │
│ In file test/parallel/test-event-emitter-prepend.js:30:43:`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot read property 'default' of undefined                       │
│                                                                             │
│ In file test/parallel/test-event-emitter-check-listener-le`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot read property 'hasOwnProperty' of undefined                │
│                                                                             │
│ In file test/parallel/test-event-emitter-special-event-nam`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot read property 'foo' of undefined                           │
│                                                                             │
│ In file test/parallel/test-event-emitter-remove-listeners.`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot read property 'prototype' of undefined                     │
│                                                                             │
│ In file test/parallel/test-fs-read-stream-patch-open.js:5:`
example test: `test/parallel/test-event-emitter-prepend.js`

### 27 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: Missing expected exception │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: Missing expected exception                                   │
│                                                                             │
│ In file test/parallel/test-buffer-tostring.js:32:3:       `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: Missing expected exception                                   │
│                                                                             │
│ In file test/parallel/test-buffer-set-inspect-max-bytes.js`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: Missing expected exception                                   │
│                                                                             │
│ In file test/parallel/test-buffer-readuint.js:17:7:       `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: Missing expected exception                                   │
│                                                                             │
│ In file test/parallel/test-buffer-readint.js:17:7:        `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: Missing expected exception                                   │
│                                                                             │
│ In file test/parallel/test-buffer-writeuint.js:21:7:      `
example test: `test/parallel/test-buffer-tostring.js`

### 17 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │ReferenceError: setTimeout is not defined │ │ │ │ In file <loc>: │ │ ╭─ │ │─ St`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: setTimeout is not defined                                    │
│                                                                             │
│ In file test/parallel/test-eventtarget-memoryleakwarning.j`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: setTimeout is not defined                                    │
│                                                                             │
│ In file test/parallel/test-fs-promises-watch-iterator.js:4`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: setTimeout is not defined                                    │
│                                                                             │
│ In file test/parallel/test-fs-promises-watch.js:404:3:    `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: setTimeout is not defined                                    │
│                                                                             │
│ In file test/parallel/test-fs-watch-recursive-assert-leaks`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: setTimeout is not defined                                    │
│                                                                             │
│ In file test/parallel/test-fs-watch-recursive-add-file-wit`
example test: `test/parallel/test-eventtarget-memoryleakwarning.js`

### 17 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: Cannot load module: <str> │ │ │ │ In file test/parallel/test-diagnos`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'node:diagnostics_channel'                    │
│                                                                             │
│ In file test/parallel/test-diagnostics-channel-bounded-cha`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'diagnostics_channel'                         │
│                                                                             │
│ In file test/parallel/test-diagnostics-channel-tracing-cha`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'node:diagnostics_channel'                    │
│                                                                             │
│ In file test/parallel/test-diagnostics-channel-bounded-cha`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'node:diagnostics_channel'                    │
│                                                                             │
│ In file test/parallel/test-diagnostics-channel-run-stores-`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'node:diagnostics_channel'                    │
│                                                                             │
│ In file test/parallel/test-diagnostics-channel-bounded-cha`
example test: `test/parallel/test-diagnostics-channel-bounded-channel-run-transform-error.js`

### 14 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: Cannot load module: <str> │ │ │ │ In file <loc>│ │ ╭─ │ │ <n> │ cons`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'async_hooks'                                 │
│                                                                             │
│ In file test/parallel/test-async-hooks-enable-before-promi`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'async_hooks'                                 │
│                                                                             │
│ In file test/parallel/test-async-hooks-correctly-switch-pr`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'async_hooks'                                 │
│                                                                             │
│ In file test/parallel/test-async-hooks-execution-async-res`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'node:diagnostics_channel'                    │
│                                                                             │
│ In file test/parallel/test-diagnostics-channel-bounded-cha`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'diagnostics_channel'                         │
│                                                                             │
│ In file test/parallel/test-diagnostics-channel-safe-subscr`
example test: `test/parallel/test-async-hooks-enable-before-promise-resolve.js`

### 10 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: Cannot load module: <str> │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ re`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'async_hooks'                                 │
│                                                                             │
│ In file test/parallel/test-async-hooks-vm-gc.js:5:20:     `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'internal/util/debuglog'                      │
│                                                                             │
│ In file test/parallel/test-console-formatTime.js:4:24:    `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'vm'                                          │
│                                                                             │
│ In file test/parallel/test-vm-data-property-writable.js:5:`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'vm'                                          │
│                                                                             │
│ In file test/parallel/test-vm-proxy-failure-CP.js:3:12:   `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'vm'                                          │
│                                                                             │
│ In file test/parallel/test-vm-parse-abort-on-uncaught-exce`
example test: `test/parallel/test-async-hooks-vm-gc.js`

### 9 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: Console is not a constructor │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Console is not a constructor                                      │
│                                                                             │
│ In file test/parallel/test-console-async-write-error.js:13`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Console is not a constructor                                      │
│                                                                             │
│ In file test/parallel/test-console-tty-colors-per-stream.j`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Console is not a constructor                                      │
│                                                                             │
│ In file test/parallel/test-console-log-throw-primitive.js:`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Console is not a constructor                                      │
│                                                                             │
│ In file test/parallel/test-console-table.js:10:17:        `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Console is not a constructor                                      │
│                                                                             │
│ In file test/parallel/test-console-sync-write-error.js:14:`
example test: `test/parallel/test-console-async-write-error.js`

### 9 × `Node API test timed out`

distinct messages:
- `Node API test timed out`
example test: `test/parallel/test-fs-read-stream-fd-leak.js`

### 8 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: Cannot load module: <str> │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ te`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'stream/iter'                                 │
│                                                                             │
│ In file test/parallel/test-stream-iter-consumers-tap.js:16`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'stream/iter'                                 │
│                                                                             │
│ In file test/parallel/test-stream-iter-broadcast-coverage.`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'stream/iter'                                 │
│                                                                             │
│ In file test/parallel/test-stream-iter-consumers-text.js:1`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'stream/iter'                                 │
│                                                                             │
│ In file test/parallel/test-stream-iter-share-coverage.js:2`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'stream/iter'                                 │
│                                                                             │
│ In file test/parallel/test-stream-iter-transform-coverage.`
example test: `test/parallel/test-stream-iter-consumers-tap.js`

### 8 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: Cannot load module: <str> │ │ │ │ In file <loc>:│ │ ╭─ │ │ <n> │ con`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'child_process'                               │
│                                                                             │
│ In file test/parallel/test-async-hooks-stack-overflow-nest`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'async_hooks'                                 │
│                                                                             │
│ In file test/parallel/test-async-hooks-recursive-stack-run`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'diagnostics_channel'                         │
│                                                                             │
│ In file test/parallel/test-diagnostics-channel-gc-maintain`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'diagnostics_channel'                         │
│                                                                             │
│ In file test/parallel/test-diagnostics-channel-module-requ`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'diagnostics_channel'                         │
│                                                                             │
│ In file test/parallel/test-diagnostics-channel-tracing-cha`
example test: `test/parallel/test-async-hooks-stack-overflow-nested-async.js`

### 7 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: <str> === <str> │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ │ │→ <n`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: 'undefined' === 'number'                                     │
│                                                                             │
│ In file test/parallel/test-buffer-constants.js:8:1:       `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: '<Buffer 31 32 33 34>' === '<Buffer 31 32 ... 2 more bytes>' │
│                                                                             │
│ In file test/parallel/test-buffer-inspect.js:38:1:        `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: 'undefined' === 'function'                                   │
│                                                                             │
│ In file test/parallel/test-eventsource.js:7:1:            `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: 'unknown' === 'test-path-basename.js'                        │
│                                                                             │
│ In file test/parallel/test-path-basename.js:6:1:          `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: '.' === 'test/parallel'                                      │
│                                                                             │
│ In file test/parallel/test-path-dirname.js:6:1:           `
example test: `test/parallel/test-buffer-constants.js`

### 7 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: Readable.from is not a function │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Readable.from is not a function                                   │
│                                                                             │
│ In file test/parallel/test-fs-promises-file-handle-writeFi`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Readable.from is not a function                                   │
│                                                                             │
│ In file test/parallel/test-fs-promises-writefile.js:18:16:`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Readable.from is not a function                                   │
│                                                                             │
│ In file test/parallel/test-stream-forEach.js:12:18:       `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Readable.from is not a function                                   │
│                                                                             │
│ In file test/parallel/test-stream-readable-from-web-termin`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Readable.from is not a function                                   │
│                                                                             │
│ In file test/parallel/test-stream-readable-next-no-null.js`
example test: `test/parallel/test-fs-promises-file-handle-writeFile.js`

### 6 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: function should not have been called at │ │<loc> │ │ │ │ In fil`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: function should not have been called at                      │
│test-stream-readable-error-end.js:9                                          │
│                                                           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: function should not have been called at                      │
│test-stream-readable-readable.js:17                                          │
│                                                           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: function should not have been called at                      │
│test-stream-writable-final-destroy.js:19                                     │
│                                                           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: function should not have been called at                      │
│test-stream-writable-finish-destroyed.js:40                                  │
│                                                           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: function should not have been called at                      │
│test-stream-writable-write-writev-finish.js:135                              │
│                                                           `
example test: `test/parallel/test-stream-readable-error-end.js`

### 5 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │SyntaxError: <loc> Invalid return statement return; ^ │ │<loc> Expected eof but`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│SyntaxError: test-fs-readfile-eof.js:15:2 Invalid return statement return; ^ │
│test-fs-readfile-eof.js:16:0 Expected eof but found } } else if              │
│(process.argv[2] === childType[1]) { ^                     `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│SyntaxError: test-process-env.js:35:2 Invalid return statement return; ^     │
│test-process-env.js:36:0 Expected eof but found } } ^                        │
│                                                           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│SyntaxError: test-process-uid-gid.js:34:2 Invalid return statement return; ^ │
│test-process-uid-gid.js:35:0 Expected eof but found } } ^                    │
│                                                           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│SyntaxError: test-vm-sigint.js:33:2 Invalid return statement return; ^       │
│test-vm-sigint.js:34:0 Expected eof but found } } ^                          │
│                                                           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│SyntaxError: test-worker-debug.js:31:2 Invalid return statement return; ^    │
│test-worker-debug.js:32:0 Expected eof but found } } ^                       │
│                                                           `
example test: `test/parallel/test-fs-readfile-eof.js`

### 5 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │SyntaxError: Variable <str> has already been declared │ │ │ │ In file test/para`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│SyntaxError: Variable "MessageChannel" has already been declared             │
│                                                                             │
│ In file test/parallel/test-worker-message-port-multiple-sh`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│SyntaxError: Variable "MessageChannel" has already been declared             │
│                                                                             │
│ In file test/parallel/test-worker-message-port-jstransfera`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│SyntaxError: Variable "MessageChannel" has already been declared             │
│                                                                             │
│ In file test/parallel/test-worker-message-port-transfer-fa`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│SyntaxError: Variable "MessageChannel" has already been declared             │
│                                                                             │
│ In file test/parallel/test-worker-message-transfer-port-ma`
example test: `test/parallel/test-worker-message-port-multiple-sharedarraybuffers.js`

### 5 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: (intermediate value).getActiveResourcesInfo is not a function │ │ │ `

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: (intermediate value).getActiveResourcesInfo is not a function     │
│                                                                             │
│ In file test/parallel/test-process-getactiveresources.js:9`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: (intermediate value).getActiveResourcesInfo is not a function     │
│                                                                             │
│ In file test/parallel/test-process-getactiveresources-trac`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: (intermediate value).getActiveResourcesInfo is not a function     │
│                                                                             │
│ In file test/parallel/test-process-getactiveresources-trac`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: (intermediate value).getActiveResourcesInfo is not a function     │
│                                                                             │
│ In file test/parallel/test-process-getactiveresources-trac`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: (intermediate value).getActiveResourcesInfo is not a function     │
│                                                                             │
│ In file test/parallel/test-process-getactiveresources-trac`
example test: `test/parallel/test-process-getactiveresources.js`

### 5 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: Cannot load module: <str> │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ } `

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'child_process'                               │
│                                                                             │
│ In file test/parallel/test-process-really-exit.js:13:25:  `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'child_process'                               │
│                                                                             │
│ In file test/parallel/test-stream-pipeline-process.js:15:1`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'stream/promises'                             │
│                                                                             │
│ In file test/parallel/test-stream-pipeline.js:14:19:      `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'vm'                                          │
│                                                                             │
│ In file test/parallel/test-vm-measure-memory-multi-context`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'vm'                                          │
│                                                                             │
│ In file test/parallel/test-vm-measure-memory-lazy.js:9:12:`
example test: `test/parallel/test-process-really-exit.js`

### 5 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: Constructor Readable requires <str> │ │ │ │ In file <loc>: │ │ ╭─ │ `

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Constructor Readable requires 'new'                               │
│                                                                             │
│ In file test/parallel/test-stream-pipe-manual-resume.js:11`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Constructor Readable requires 'new'                               │
│                                                                             │
│ In file test/parallel/test-stream-pipe-unpipe-streams.js:7`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Constructor Readable requires 'new'                               │
│                                                                             │
│ In file test/parallel/test-stream-unshift-read-race.js:35:`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Constructor Readable requires 'new'                               │
│                                                                             │
│ In file test/parallel/test-stream2-decode-partial.js:11:18`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Constructor Readable requires 'new'                               │
│                                                                             │
│ In file test/parallel/test-streams-highwatermark.js:17:20:`
example test: `test/parallel/test-stream-pipe-manual-resume.js`

### 5 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: Creating Buffer instances is not allowed │ │ │ │ In file <loc>: │ │ `

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Creating Buffer instances is not allowed                          │
│                                                                             │
│ In file test/parallel/test-buffer-constructor-deprecation-`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Creating Buffer instances is not allowed                          │
│                                                                             │
│ In file test/parallel/test-buffer-pending-deprecation.js:1`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Creating Buffer instances is not allowed                          │
│                                                                             │
│ In file test/parallel/test-buffer-parent-property.js:11:8:`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Creating Buffer instances is not allowed                          │
│                                                                             │
│ In file test/parallel/test-buffer-zero-fill.js:7:14:      `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Creating Buffer instances is not allowed                          │
│                                                                             │
│ In file test/parallel/test-buffer-slice.js:28:20:         `
example test: `test/parallel/test-buffer-constructor-deprecation-error.js`

### 5 × `╭─────────────────────────────────────────────────────────────────────────────╮ │Error: ENOENT: no such file or directory, open <str> │ │ │ │ In file <loc>: │ │`

distinct messages:
- `╭─────────────────────────────────────────────────────────────────────────────╮
│Error: ENOENT: no such file or directory, open 'unknown'                     │
│                                                                             │
│ In file test/parallel/test-fs-close.js:8:12:              `
- `╭─────────────────────────────────────────────────────────────────────────────╮
│Error: ENOENT: no such file or directory, open 'unknown'                     │
│                                                                             │
│ In file test/parallel/test-fs-options-immutable.js:16:1:  `
- `╭─────────────────────────────────────────────────────────────────────────────╮
│Error: ENOENT: no such file or directory, open 'unknown'                     │
│                                                                             │
│ In file test/parallel/test-fs-promisified.js:12:14:       `
- `╭─────────────────────────────────────────────────────────────────────────────╮
│Error: ENOENT: no such file or directory, open 'unknown'                     │
│                                                                             │
│ In file test/parallel/test-fs-open.js:39:1:               `
- `╭─────────────────────────────────────────────────────────────────────────────╮
│Error: ENOENT: no such file or directory, open 'unknown'                     │
│                                                                             │
│ In file test/parallel/test-fs-readfile-zero-byte-liar.js:3`
example test: `test/parallel/test-fs-close.js`

### 5 × `╭─────────────────────────────────────────────────────────────────────────────╮ │Error: Readable.wrap() is not implemented │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n>`

distinct messages:
- `╭─────────────────────────────────────────────────────────────────────────────╮
│Error: Readable.wrap() is not implemented                                    │
│                                                                             │
│ In file test/parallel/test-stream2-readable-wrap-empty.js:`
- `╭─────────────────────────────────────────────────────────────────────────────╮
│Error: Readable.wrap() is not implemented                                    │
│                                                                             │
│ In file test/parallel/test-stream2-readable-wrap-proxy-met`
- `╭─────────────────────────────────────────────────────────────────────────────╮
│Error: Readable.wrap() is not implemented                                    │
│                                                                             │
│ In file test/parallel/test-stream2-readable-wrap-error.js:`
- `╭─────────────────────────────────────────────────────────────────────────────╮
│Error: Readable.wrap() is not implemented                                    │
│                                                                             │
│ In file test/parallel/test-stream2-readable-wrap.js:32:25:`
- `╭─────────────────────────────────────────────────────────────────────────────╮
│Error: Readable.wrap() is not implemented                                    │
│                                                                             │
│ In file test/parallel/test-stream2-readable-wrap-destroy.j`
example test: `test/parallel/test-stream2-readable-wrap-empty.js`

### 5 × `Uncaught (in promise) TypeError: path must be a string, Buffer, or file: URL Fatal error (java.lang.UnsupportedOperationException): process.exit() is not yet im`

distinct messages:
- `Uncaught (in promise) TypeError: path must be a string, Buffer, or file: URL
Fatal error (java.lang.UnsupportedOperationException): process.exit() is not yet implemented
java.lang.UnsupportedOperationException: process.exit() is not yet implemented
	at dev.elide.lang.javascript.globals.ProcessGlobal`
- `Uncaught (in promise) TypeError: path must be a string, Buffer, or file: URL
Fatal error (java.lang.UnsupportedOperationException): process.exit() is not yet implemented
java.lang.UnsupportedOperationException: process.exit() is not yet implemented
	at dev.elide.lang.javascript.globals.ProcessGlobal`
- `Uncaught (in promise) TypeError: path must be a string, Buffer, or file: URL
Fatal error (java.lang.UnsupportedOperationException): process.exit() is not yet implemented
java.lang.UnsupportedOperationException: process.exit() is not yet implemented
	at dev.elide.lang.javascript.globals.ProcessGlobal`
- `Uncaught (in promise) TypeError: path must be a string, Buffer, or file: URL
Fatal error (java.lang.UnsupportedOperationException): process.exit() is not yet implemented
java.lang.UnsupportedOperationException: process.exit() is not yet implemented
	at dev.elide.lang.javascript.globals.ProcessGlobal`
- `Uncaught (in promise) TypeError: path must be a string, Buffer, or file: URL
Fatal error (java.lang.UnsupportedOperationException): process.exit() is not yet implemented
java.lang.UnsupportedOperationException: process.exit() is not yet implemented
	at dev.elide.lang.javascript.globals.ProcessGlobal`
example test: `test/parallel/test-fs-promises-file-handle-readFile.js`

### 4 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │SyntaxError: <loc> Invalid return statement return;│ │^ <loc> Expected eof but `

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│SyntaxError: test-crypto-secure-heap.js:60:2 Invalid return statement return;│
│^ test-crypto-secure-heap.js:61:0 Expected eof but found } } ^               │
│                                                           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│SyntaxError: test-crypto-encap-decap.js:16:2 Invalid return statement return;│
│^ test-crypto-encap-decap.js:17:0 Expected eof but found } } ^               │
│                                                           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│SyntaxError: test-fs-mkdir-mode-mask.js:11:2 Invalid return statement return;│
│^ test-fs-mkdir-mode-mask.js:12:0 Expected eof but found } } ^               │
│                                                           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│SyntaxError: test-fs-syncwritestream.js:20:2 Invalid return statement return;│
│^ test-fs-syncwritestream.js:21:0 Expected eof but found } } ^               │
│                                                           `
example test: `test/parallel/test-crypto-secure-heap.js`

### 4 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │SyntaxError: Variable <str> has already been declared │ │ │ │ In file <loc>:│ │`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│SyntaxError: Variable "MessageChannel" has already been declared             │
│                                                                             │
│ In file test/parallel/test-worker-message-port-close-while`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│SyntaxError: Variable "MessageChannel" has already been declared             │
│                                                                             │
│ In file test/parallel/test-worker-message-port-infinite-me`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│SyntaxError: Variable "MessageChannel" has already been declared             │
│                                                                             │
│ In file test/parallel/test-worker-message-port-message-por`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│SyntaxError: Variable "MessageChannel" has already been declared             │
│                                                                             │
│ In file test/parallel/test-worker-message-port-terminate-t`
example test: `test/parallel/test-worker-message-port-close-while-receiving.js`

### 4 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: Cannot load module: │ │<str> │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module:                                               │
│'/work/.harness/work/node-api/node-test/.tmp.776/index'                      │
│                                                           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module:                                               │
│'/work/.harness/work/node-api/node-test/.tmp.807/foo.cjs'                    │
│                                                           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module:                                               │
│'/work/.harness/work/node-api/node-test/.tmp.799/app/index'                  │
│                                                           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module:                                               │
│'/work/.harness/work/node-api/node-test/.tmp.826/中文目录'                   │
│                                                               `
example test: `test/parallel/test-module-circular-symlinks.js`

### 4 × `AssertionError: function should not have been called at <loc> at Function.fail (native) at mustNotCall (<loc>)`

distinct messages:
- `AssertionError: function should not have been called at test-timers-immediate.js:33
    at Function.fail (native)
    at mustNotCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:631:12)`
- `AssertionError: function should not have been called at test-timers-dispose.js:7
    at Function.fail (native)
    at mustNotCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:631:12)`
- `AssertionError: function should not have been called at test-timers-destroyed.js:10
    at Function.fail (native)
    at mustNotCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:631:12)`
- `AssertionError: function should not have been called at test-timers-to-primitive.js:7
    at Function.fail (native)
    at mustNotCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:631:12)`
example test: `test/parallel/test-timers-immediate.js`

### 3 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: <n> === <n> │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ │ │→ <n> │ `

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: 8 === 0                                                      │
│                                                                             │
│ In file test/parallel/test-buffer-copy-immutable.js:19:3: `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: 16383 === 0                                                  │
│                                                                             │
│ In file test/parallel/test-stream-writable-write-cb-error.`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: 0 === 10                                                     │
│                                                                             │
│ In file test/parallel/test-stream2-transform.js:45:3:     `
example test: `test/parallel/test-buffer-copy-immutable.js`

### 3 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: false == true │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ buffer.wr`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: false == true                                                │
│                                                                             │
│ In file test/parallel/test-buffer-writeint.js:20:3:       `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: false == true                                                │
│                                                                             │
│ In file test/parallel/test-buffer-writefloat.js:12:1:     `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: false == true                                                │
│                                                                             │
│ In file test/parallel/test-buffer-writedouble.js:12:1:    `
example test: `test/parallel/test-buffer-writeint.js`

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

### 3 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │SyntaxError: <loc> Invalid return │ │statement return; ^ <loc> Expected│ │eof b`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│SyntaxError: test-process-remove-all-signal-listeners.js:20:2 Invalid return │
│statement return; ^ test-process-remove-all-signal-listeners.js:21:0 Expected│
│eof but found } } ^                                        `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│SyntaxError: test-worker-exit-from-uncaught-exception.js:16:2 Invalid return │
│statement return; ^ test-worker-exit-from-uncaught-exception.js:17:0 Expected│
│eof but found } } ^                                        `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│SyntaxError: test-worker-non-fatal-uncaught-exception.js:16:2 Invalid return │
│statement return; ^ test-worker-non-fatal-uncaught-exception.js:17:0 Expected│
│eof but found } } ^                                        `
example test: `test/parallel/test-process-remove-all-signal-listeners.js`

### 3 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │SyntaxError: <loc> Invalid return statement return; ^│ │<loc> Expected eof but `

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│SyntaxError: test-fs-readfile-pipe.js:37:2 Invalid return statement return; ^│
│test-fs-readfile-pipe.js:38:0 Expected eof but found } } ^                   │
│                                                           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│SyntaxError: test-process-setgroups.js:8:2 Invalid return statement return; ^│
│test-process-setgroups.js:9:0 Expected eof but found } } ^                   │
│                                                           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│SyntaxError: test-worker-exit-code.js:22:4 Invalid return statement return; ^│
│test-worker-exit-code.js:23:2 Expected eof but found } } ^                   │
│                                                           `
example test: `test/parallel/test-fs-readfile-pipe.js`

### 3 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │SyntaxError: <loc> Invalid return statement return; │ │^ <loc> Expected eof but`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│SyntaxError: test-process-exit-code.js:37:4 Invalid return statement return; │
│^ test-process-exit-code.js:38:2 Expected eof but found } } ^                │
│                                                           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│SyntaxError: test-process-euid-egid.js:13:2 Invalid return statement return; │
│^ test-process-euid-egid.js:14:0 Expected eof but found } } ^                │
│                                                           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│SyntaxError: test-process-initgroups.js:7:2 Invalid return statement return; │
│^ test-process-initgroups.js:8:0 Expected eof but found } } ^                │
│                                                           `
example test: `test/parallel/test-process-exit-code.js`

### 3 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │SyntaxError: <loc> Invalid return statement│ │return; ^ <loc> Expected eof but `

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│SyntaxError: test-fs-readfilesync-pipe-large.js:14:2 Invalid return statement│
│return; ^ test-fs-readfilesync-pipe-large.js:15:0 Expected eof but found } } │
│^                                                          `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│SyntaxError: test-fs-write-stream-patch-open.js:21:2 Invalid return statement│
│return; ^ test-fs-write-stream-patch-open.js:22:0 Expected eof but found } } │
│^                                                          `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│SyntaxError: test-vm-sigint-existing-handler.js:71:2 Invalid return statement│
│return; ^ test-vm-sigint-existing-handler.js:72:0 Expected eof but found } } │
│^                                                          `
example test: `test/parallel/test-fs-readfilesync-pipe-large.js`

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
example test: `test/parallel/test-process-exception-capture-should-abort-on-uncaught.js`

### 3 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: Cannot convert a Symbol value to a string │ │ │ │ In file <loc>: │ │`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot convert a Symbol value to a string                         │
│                                                                             │
│ In file test/parallel/test-event-emitter-symbols.js:11:1: `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot convert a Symbol value to a string                         │
│                                                                             │
│ In file test/parallel/test-events-list.js:16:1:           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot convert a Symbol value to a string                         │
│                                                                             │
│ In file test/parallel/test-process-emit.js:10:1:          `
example test: `test/parallel/test-event-emitter-symbols.js`

### 3 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: Cannot load module: <str> │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ <s`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'timers/promises'                             │
│                                                                             │
│ In file test/parallel/test-async-local-storage-http-parser`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'timers/promises'                             │
│                                                                             │
│ In file test/parallel/test-fs-existssync-memleak-longpath.`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'node:stream/promises'                        │
│                                                                             │
│ In file test/parallel/test-stream3-pipeline-async-iterator`
example test: `test/parallel/test-async-local-storage-http-parser-leak.js`

### 3 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: Cannot load module: <str> │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ th`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'worker_threads'                              │
│                                                                             │
│ In file test/parallel/test-worker-event.js:8:5:           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'worker_threads'                              │
│                                                                             │
│ In file test/parallel/test-worker-environmentdata.js:10:5:`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'worker_threads'                              │
│                                                                             │
│ In file test/parallel/test-worker-message-port-drain.js:15`
example test: `test/parallel/test-worker-event.js`

### 3 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: Cannot load module: <str> │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ to`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'stream/iter'                                 │
│                                                                             │
│ In file test/parallel/test-stream-iter-consumers-merge.js:`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'stream/iter'                                 │
│                                                                             │
│ In file test/parallel/test-stream-iter-writable-from.js:13`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'stream/iter'                                 │
│                                                                             │
│ In file test/parallel/test-stream-iter-to-readable.js:17:5`
example test: `test/parallel/test-stream-iter-consumers-merge.js`

### 3 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: Cannot load module: <str> │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ Wo`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'worker_threads'                              │
│                                                                             │
│ In file test/parallel/test-worker-cpu-usage.js:7:5:       `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'node:worker_threads'                         │
│                                                                             │
│ In file test/parallel/test-worker-messaging-errors-timeout`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'node:worker_threads'                         │
│                                                                             │
│ In file test/parallel/test-worker-messaging.js:11:5:      `
example test: `test/parallel/test-worker-cpu-usage.js`

### 3 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: Stream is not a constructor │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ `

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Stream is not a constructor                                       │
│                                                                             │
│ In file test/parallel/test-console-instance.js:29:13:     `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Stream is not a constructor                                       │
│                                                                             │
│ In file test/parallel/test-stream-pipe-error-handling.js:2`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Stream is not a constructor                                       │
│                                                                             │
│ In file test/parallel/test-stream2-readable-legacy-drain.j`
example test: `test/parallel/test-console-instance.js`

### 3 × `AssertionError: Timer should be canceled at Function.fail (native) at timerNotCanceled (<loc>)`

distinct messages:
- `AssertionError: Timer should be canceled
    at Function.fail (native)
    at timerNotCanceled (test-timers-not-emit-duration-zero.js:7:10)`
- `AssertionError: Timer should be canceled
    at Function.fail (native)
    at timerNotCanceled (test-timers-negative-duration-warning-emit-once-per-process.js:9:10)`
- `AssertionError: Timer should be canceled
    at Function.fail (native)
    at timerNotCanceled (test-timers-nan-duration-emit-once-per-process.js:9:10)`
example test: `test/parallel/test-timers-not-emit-duration-zero.js`

### 3 × `AssertionError: undefined === null at Function.strictEqual (native) at <loc> at _return (<loc>)`

distinct messages:
- `AssertionError: undefined === null
    at Function.strictEqual (native)
    at test-fs-read-stream-err.js:34:12
    at _return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)`
- `AssertionError: undefined === null
    at Function.strictEqual (native)
    at test-stream-pipe-after-end.js:64:10
    at _return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)`
- `AssertionError: undefined === null
    at Function.strictEqual (native)
    at test-stream-transform-hwm0.js:23:12
    at _return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)`
example test: `test/parallel/test-fs-read-stream-err.js`

### 2 × `[EventLoop] external task threw: Error: ENOENT: no such file or directory, open <str> <loc>.runtime.UserScriptException: Error: ENOENT: no such file or director`

distinct messages:
- `[EventLoop] external task threw: Error: ENOENT: no such file or directory, open 'unknown'
com.oracle.truffle.js.runtime.UserScriptException: Error: ENOENT: no such file or directory, open 'unknown'
Fatal error (java.lang.UnsupportedOperationException): process.exit() is not yet implemented
java.lang`
- `[EventLoop] external task threw: Error: ENOENT: no such file or directory, open 'unknown'
com.oracle.truffle.js.runtime.UserScriptException: Error: ENOENT: no such file or directory, open 'unknown'
Fatal error (java.lang.UnsupportedOperationException): process.exit() is not yet implemented
java.lang`
example test: `test/parallel/test-fs-ready-event-stream.js`

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

### 2 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: false == true │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ │ │→ <n> `

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: false == true                                                │
│                                                                             │
│ In file test/parallel/test-buffer-safe-unsafe.js:14:1:    `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: false == true                                                │
│                                                                             │
│ In file test/parallel/test-stream-pipeline-listeners.js:25`
example test: `test/parallel/test-buffer-safe-unsafe.js`

### 2 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: false == true │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ assert.ok`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: false == true                                                │
│                                                                             │
│ In file test/parallel/test-buffer-equals.js:15:1:         `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: false == true                                                │
│                                                                             │
│ In file test/parallel/test-stream-inheritance.js:18:1:    `
example test: `test/parallel/test-buffer-equals.js`

### 2 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: function should not have been called at │ │<loc> called with ar`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: function should not have been called at                      │
│test-stream-readable-resume-hwm.js:9 called with arguments: 100              │
│                                                           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: function should not have been called at                      │
│test-util-getcallsites-preparestacktrace.js:10 called with arguments: Error  │
│at test-util-getcallsites-preparestacktrace.js:12:15, [ Cal`
example test: `test/parallel/test-stream-readable-resume-hwm.js`

### 2 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: Got unwanted exception: {code: <str>, errno: -<n>, syscall: │ │`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: Got unwanted exception: {code: 'EIO', errno: -5, syscall:    │
│'access', path: 'foo bar'}                                                    │
│                                                          `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: Got unwanted exception: {code: 'ENOENT', errno: -2, syscall: │
│'readdir', path: 'unknown'}                                                  │
│                                                           `
example test: `test/parallel/test-fs-null-bytes.js`

### 2 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: Got unwanted exception: undefined │ │ │ │ In file <loc>: │ │ ╭─`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: Got unwanted exception: undefined                            │
│                                                                             │
│ In file test/parallel/test-dns-resolvens-typeerror.js:33:1`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: Got unwanted exception: undefined                            │
│                                                                             │
│ In file test/parallel/test-event-emitter-errors.js:9:1:   `
example test: `test/parallel/test-dns-resolvens-typeerror.js`

### 2 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: no error event at <loc> called │ │with arguments: Error: kaboom`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: no error event at test-stream-duplex-destroy.js:80 called    │
│with arguments: Error: kaboom at test-stream-duplex-destroy.js:65:20         │
│                                                           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: no error event at test-stream-transform-destroy.js:76 called │
│with arguments: Error: kaboom at test-stream-transform-destroy.js:61:20      │
│                                                           `
example test: `test/parallel/test-stream-duplex-destroy.js`

### 2 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: undefined === <str> │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ // `

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: undefined === 'buffer'                                       │
│                                                                             │
│ In file test/parallel/test-stream3-cork-end.js:25:3:      `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: undefined === 'buffer'                                       │
│                                                                             │
│ In file test/parallel/test-stream3-cork-uncork.js:23:3:   `
example test: `test/parallel/test-stream3-cork-end.js`

### 2 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: undefined === <str> │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ pro`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: undefined === 'undefined'                                    │
│                                                                             │
│ In file test/parallel/test-process-env-deprecation.js:20:1`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: undefined === 'undefined'                                    │
│                                                                             │
│ In file test/parallel/test-process-env-delete.js:8:1:     `
example test: `test/parallel/test-process-env-deprecation.js`

### 2 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: undefined === false │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ });`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: undefined === false                                          │
│                                                                             │
│ In file test/parallel/test-stream-readable-aborted.js:12:3`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: undefined === false                                          │
│                                                                             │
│ In file test/parallel/test-stream-writable-aborted.js:12:3`
example test: `test/parallel/test-stream-readable-aborted.js`

### 2 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: undefined === null │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ │ │→`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: undefined === null                                           │
│                                                                             │
│ In file test/parallel/test-module-parent-deprecation.js:14`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: undefined === null                                           │
│                                                                             │
│ In file test/parallel/test-stream-readable-hwm-0-no-flow-d`
example test: `test/parallel/test-module-parent-deprecation.js`

### 2 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │ReferenceError: process is not defined │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ `

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: process is not defined                                       │
│                                                                             │
│ In file test/parallel/test-fs-opendir.js:15:36:           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: process is not defined                                       │
│                                                                             │
│ In file test/parallel/test-require-symlink.js:15:36:      `
example test: `test/parallel/test-fs-opendir.js`

### 2 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │SyntaxError: <loc> Invalid return statement │ │return; ^ <loc> Expected eof but`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│SyntaxError: test-fs-readfile-pipe-large.js:16:2 Invalid return statement    │
│return; ^ test-fs-readfile-pipe-large.js:17:0 Expected eof but found } } ^   │
│                                                           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│SyntaxError: test-worker-resource-limits.js:32:2 Invalid return statement    │
│return; ^ test-worker-resource-limits.js:33:0 Expected eof but found } } ^   │
│                                                           `
example test: `test/parallel/test-fs-readfile-pipe-large.js`

### 2 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: (intermediate value).binding is not a function │ │ │ │ In file <loc>`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: (intermediate value).binding is not a function                    │
│                                                                             │
│ In file test/parallel/test-process-binding-internalbinding`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: (intermediate value).binding is not a function                    │
│                                                                             │
│ In file test/parallel/test-process-binding-util.js:6:21:  `
example test: `test/parallel/test-process-binding-internalbinding-allowlist.js`

### 2 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: Buffer.from: unsupported input type │ │ │ │ In file <loc>: │ │ ╭─ │ `

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Buffer.from: unsupported input type                               │
│                                                                             │
│ In file test/parallel/test-buffer-sharedarraybuffer.js:27:`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Buffer.from: unsupported input type                               │
│                                                                             │
│ In file test/parallel/test-buffer-tojson.js:18:16:        `
example test: `test/parallel/test-buffer-sharedarraybuffer.js`

### 2 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: Cannot convert undefined or null to object: undefined │ │ │ │ In fil`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot convert undefined or null to object: undefined             │
│                                                                             │
│ In file test/parallel/test-event-emitter-set-max-listeners`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot convert undefined or null to object: undefined             │
│                                                                             │
│ In file test/parallel/test-event-emitter-listeners-side-ef`
example test: `test/parallel/test-event-emitter-set-max-listeners-side-effects.js`

### 2 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: Cannot load module: <str> │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ by`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'stream/iter'                                 │
│                                                                             │
│ In file test/parallel/test-stream-iter-transform-errors.js`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'stream/iter'                                 │
│                                                                             │
│ In file test/parallel/test-stream-iter-from-coverage.js:14`
example test: `test/parallel/test-stream-iter-transform-errors.js`

### 2 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: Cannot load module: <str> │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ Fi`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'internal/fs/promises'                        │
│                                                                             │
│ In file test/parallel/test-fs-promises-file-handle-op-erro`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'internal/fs/promises'                        │
│                                                                             │
│ In file test/parallel/test-fs-promises-file-handle-close-e`
example test: `test/parallel/test-fs-promises-file-handle-op-errors.js`

### 2 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: Cannot load module: <str> │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ pu`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'stream/iter'                                 │
│                                                                             │
│ In file test/parallel/test-fs-promises-file-handle-pullsyn`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'stream/iter'                                 │
│                                                                             │
│ In file test/parallel/test-stream-iter-sharedarraybuffer.j`
example test: `test/parallel/test-fs-promises-file-handle-pullsync.js`

### 2 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: Cannot load module: <str> │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ va`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'internal/fs/utils'                           │
│                                                                             │
│ In file test/parallel/test-fs-util-validateoffsetlength.js`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'vm'                                          │
│                                                                             │
│ In file test/parallel/test-vm-not-strict.js:7:10:         `
example test: `test/parallel/test-fs-util-validateoffsetlength.js`

### 2 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: Cannot load module: <str> │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ wo`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'node:worker_threads'                         │
│                                                                             │
│ In file test/parallel/test-worker-messaging-errors-handler`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'node:worker_threads'                         │
│                                                                             │
│ In file test/parallel/test-worker-messaging-errors-invalid`
example test: `test/parallel/test-worker-messaging-errors-handler.js`

### 2 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: Cannot load module: <str> │ │ │ │ In file <loc>:│ │ ╭─ │ │ <n> │ │ │`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'node:child_process'                          │
│                                                                             │
│ In file test/parallel/test-fs-watch-ignore-recursive-glob-`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'worker_threads'                              │
│                                                                             │
│ In file test/parallel/test-worker-load-file-with-extension`
example test: `test/parallel/test-fs-watch-ignore-recursive-glob-subdirectories.js`

### 2 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: fs.WriteStream is not a function │ │ │ │ In file <loc>: │ │ ╭─ │ │ <`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: fs.WriteStream is not a function                                  │
│                                                                             │
│ In file test/parallel/test-fs-write-stream-change-open.js:`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: fs.WriteStream is not a function                                  │
│                                                                             │
│ In file test/parallel/test-fs-write-stream.js:34:18:      `
example test: `test/parallel/test-fs-write-stream-change-open.js`

### 2 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: getDefaultHighWaterMark is not a function │ │ │ │ In file <loc>: │ │`

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

### 2 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: path must be a string, Buffer, or file: URL │ │ │ │ In file <loc>: │`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: path must be a string, Buffer, or file: URL                       │
│                                                                             │
│ In file test/parallel/test-fs-mkdtemp.js:89:21:           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: path must be a string, Buffer, or file: URL                       │
│                                                                             │
│ In file test/parallel/test-fs-read-stream-fd.js:35:16:    `
example test: `test/parallel/test-fs-mkdtemp.js`

### 2 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: receiver is not a Buffer │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ │ │`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: receiver is not a Buffer                                          │
│                                                                             │
│ In file test/parallel/test-buffer-inheritance.js:31:3:    `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: receiver is not a Buffer                                          │
│                                                                             │
│ In file test/parallel/test-buffer-generic-methods.js:101:3`
example test: `test/parallel/test-buffer-inheritance.js`

### 2 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: receiver is not an EventEmitter │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: receiver is not an EventEmitter                                   │
│                                                                             │
│ In file test/parallel/test-event-emitter-get-max-listeners`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: receiver is not an EventEmitter                                   │
│                                                                             │
│ In file test/parallel/test-event-emitter-subclass.js:31:3:`
example test: `test/parallel/test-event-emitter-get-max-listeners.js`

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

### 2 × `TypeError: Cannot add property <str> to non-object <n> at <loc> at _return (<loc>)`

distinct messages:
- `TypeError: Cannot add property "_repeat" to non-object 1
    at test-timers-timeout-to-interval.js:7:38
    at _return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)`
- `TypeError: Cannot add property "_onTimeout" to non-object 2
    at test-timers-unrefd-interval-still-fires.js:13:43
    at _return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)`
example test: `test/parallel/test-timers-timeout-to-interval.js`

### 2 × `Uncaught (in promise) Error: write: data must be a Buffer or string Fatal error (java.lang.UnsupportedOperationException): process.exit() is not yet implemented`

distinct messages:
- `Uncaught (in promise) Error: write: data must be a Buffer or string
Fatal error (java.lang.UnsupportedOperationException): process.exit() is not yet implemented
java.lang.UnsupportedOperationException: process.exit() is not yet implemented
	at dev.elide.lang.javascript.globals.ProcessGlobal.notImple`
- `Uncaught (in promise) Error: write: data must be a Buffer or string
Fatal error (java.lang.UnsupportedOperationException): process.exit() is not yet implemented
java.lang.UnsupportedOperationException: process.exit() is not yet implemented
	at dev.elide.lang.javascript.globals.ProcessGlobal.notImple`
example test: `test/parallel/test-fs-promises-file-handle-write.js`

### 2 × `Uncaught (in promise) TypeError: Cannot load module: <str> Fatal error (java.lang.UnsupportedOperationException): process.exit() is not yet implemented java.lan`

distinct messages:
- `Uncaught (in promise) TypeError: Cannot load module: 'child_process'
Fatal error (java.lang.UnsupportedOperationException): process.exit() is not yet implemented
java.lang.UnsupportedOperationException: process.exit() is not yet implemented
	at dev.elide.lang.javascript.globals.ProcessGlobal.notImpl`
- `Uncaught (in promise) TypeError: Cannot load module: 'child_process'
Fatal error (java.lang.UnsupportedOperationException): process.exit() is not yet implemented
java.lang.UnsupportedOperationException: process.exit() is not yet implemented
	at dev.elide.lang.javascript.globals.ProcessGlobal.notImpl`
example test: `test/parallel/test-stream-iter-disabled.js`

### 2 × `Uncaught (in promise) TypeError: Readable.from is not a function Uncaught (in promise) TypeError: Readable.from is not a function Uncaught (in promise) TypeErro`

distinct messages:
- `Uncaught (in promise) TypeError: Readable.from is not a function
Uncaught (in promise) TypeError: Readable.from is not a function
Uncaught (in promise) TypeError: Readable.from is not a function`
example test: `test/parallel/test-stream-toArray.js`

### 1 × `(node:<n>) DeprecationWarning: Something is deprecated. AssertionError: received unexpected warning at Function.fail (native) at Process.listener (<loc>) (node:`

distinct messages:
- `(node:12180) DeprecationWarning: Something is deprecated.
AssertionError: received unexpected warning
    at Function.fail (native)
    at Process.listener (test-process-no-deprecation.js:13:10)
(node:12180) DeprecationWarning: Something else is deprecated.`
example test: `test/parallel/test-process-no-deprecation.js`

### 1 × `(node:<n>) Warning: A Warning (node:<n>) CustomWarning: A Warning (node:<n>) Warning: A Warning (node:<n>) CustomWarning: A Warning (node:<n>) [CODE001] CustomW`

distinct messages:
- `(node:11437) Warning: A Warning
(node:11437) CustomWarning: A Warning
(node:11437) Warning: A Warning
(node:11437) CustomWarning: A Warning
(node:11437) [CODE001] CustomWarning: A Warning
(node:11437) CustomWarning: A Warning
(node:11437) [CODE001] CustomWarning: A Warning
(node:11437) [CODE001] Cus`
example test: `test/parallel/test-process-emitwarning.js`

### 1 × `(node:<n>) Warning: test (node:<n>) DeprecationWarning: test (node:<n>) Warning: test (node:<n>) DeprecationWarning: test (node:<n>) Error: test (node:<n>) Warn`

distinct messages:
- `(node:12434) Warning: test
(node:12434) DeprecationWarning: test
(node:12434) Warning: test
(node:12434) DeprecationWarning: test
(node:12434) Error: test
(node:12434) Warning: test
AssertionError: undefined === 'foo'
    at Function.strictEqual (native)
    at Process.<anonymous> (test-process-warn`
example test: `test/parallel/test-process-warning.js`

### 1 × `(node) MaxListenersExceededWarning: Possible EventEmitter memory leak detected. <n> event-type listeners added. Use emitter.setMaxListeners() to increase limit.`

distinct messages:
- `(node) MaxListenersExceededWarning: Possible EventEmitter memory leak detected. 2 event-type listeners added. Use emitter.setMaxListeners() to increase limit.
(node) MaxListenersExceededWarning: Possible EventEmitter memory leak detected. 3 event-type listeners added. Use emitter.setMaxListeners() t`
example test: `test/parallel/test-event-emitter-max-listeners-warning.js`

### 1 × `(node) MaxListenersExceededWarning: Possible EventEmitter memory leak detected. <n> null listeners added. Use emitter.setMaxListeners() to increase limit. Fatal`

distinct messages:
- `(node) MaxListenersExceededWarning: Possible EventEmitter memory leak detected. 2 null listeners added. Use emitter.setMaxListeners() to increase limit.
Fatal error (java.lang.UnsupportedOperationException): process.exit() is not yet implemented
java.lang.UnsupportedOperationException: process.exit(`
example test: `test/parallel/test-event-emitter-max-listeners-warning-for-null.js`

### 1 × `[EventLoop] external task threw: AssertionError: {code: <str>, errno: -<n>, syscall: <str>, path: <str>} === {} <loc>.runtime.JSException: AssertionError: {code`

distinct messages:
- `[EventLoop] external task threw: AssertionError: {code: 'ENOENT', errno: -2, syscall: 'open', path: 'unknown'} === {}
com.oracle.truffle.js.runtime.JSException: AssertionError: {code: 'ENOENT', errno: -2, syscall: 'open', path: 'unknown'} === {}
[EventLoop] external task threw: AssertionError: {code`
example test: `test/parallel/test-fs-stream-destroy-emit-error.js`

### 1 × `[EventLoop] external task threw: AssertionError: <n> === <n> <loc>.runtime.JSException: AssertionError: <n> === <n> [EventLoop] external task threw: TypeError: `

distinct messages:
- `[EventLoop] external task threw: AssertionError: 0 === 1
com.oracle.truffle.js.runtime.JSException: AssertionError: 0 === 1
[EventLoop] external task threw: TypeError: done is not a function
com.oracle.truffle.js.runtime.JSException: TypeError: done is not a function`
example test: `test/parallel/test-fs-write-stream-flush.js`

### 1 × `[EventLoop] external task threw: Unexpected values provided for JSCollectionsNormalizeNodeGen@79f9c3de: [[B@3c5efa08], [byte[]] com.oracle.truffle.api.dsl.Unsup`

distinct messages:
- `[EventLoop] external task threw: Unexpected values provided for JSCollectionsNormalizeNodeGen@79f9c3de: [[B@3c5efa08], [byte[]]
com.oracle.truffle.api.dsl.UnsupportedSpecializationException: Unexpected values provided for JSCollectionsNormalizeNodeGen@79f9c3de: [[B@3c5efa08], [byte[]]
	at com.oracle`
example test: `test/parallel/test-fs-read-stream-concurrent-reads.js`

### 1 × `[H[2J╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: <str> === <str> │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ `

distinct messages:
- `[H[2J╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: '' === ''                                                    │
│                                                                             │
│ In file test/parallel/test-console-clear.js:17:3:  `
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

### 1 × `<n>/<n>/<n>, <n><loc> PM start test ╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: Cannot read property <str> of un`

distinct messages:
- `7/2/2026, 10:21:12 PM start test
╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot read property 'prototype' of undefined                     │
│                                                                             │
│ In file test/parallel/tes`
example test: `test/parallel/test-fs-stream-construct-compat-error-write.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │{} │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ assert.strictEqual(w.writableEnded, `

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│{}                                                                           │
│                                                                             │
│ In file test/parallel/test-stream-writable-end-cb-error.js`
example test: `test/parallel/test-stream-writable-end-cb-error.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │{} │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ r._read = function(size) { │ │→ <n> `

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│{}                                                                           │
│                                                                             │
│ In file test/parallel/test-stream2-finish-pipe-error.js:9:`
example test: `test/parallel/test-stream2-finish-pipe-error.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │{} │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ read() { │ │→ <n> │ this.push(<str>)`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│{}                                                                           │
│                                                                             │
│ In file test/parallel/test-stream-pipe-error-unhandled.js:`
example test: `test/parallel/test-stream-pipe-error-unhandled.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: [] deepStrictEqual [<str>, <str>, <str>, <str>,│ │<str>, …] │ │`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: [] deepStrictEqual ['toString', 'href', 'origin', 'protocol',│
│'username', …]                                                               │
│                                                           `
example test: `test/parallel/test-whatwg-url-custom-properties.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: {} === <str> │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ // Without`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: {} === 'abc'                                                 │
│                                                                             │
│ In file test/parallel/test-stream-decoder-objectmode.js:18`
example test: `test/parallel/test-stream-decoder-objectmode.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: {} === null │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ // Check nu`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: {} === null                                                  │
│                                                                             │
│ In file test/parallel/test-fs-constants.js:11:1:          `
example test: `test/parallel/test-fs-constants.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: {} deepStrictEqual {} │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ │`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: {} deepStrictEqual {}                                        │
│                                                                             │
│ In file test/parallel/test-process-features.js:24:1:      `
example test: `test/parallel/test-process-features.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: {protocol: null, slashes: false, auth: null, host: null, │ │por`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: {protocol: null, slashes: false, auth: null, host: null,     │
│port: null, …} === 'foo'                                                     │
│                                                           `
example test: `test/parallel/test-url-relative.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: {type: <str>, data: null, origin: <str>, lastEventId: <str>,│ │`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: {type: 'message', data: null, origin: 'foo', lastEventId: '',│
│source: null, …} deepStrictEqual {type: 'message', data: undefined, origin:  │
│'foo', lastEventId: 'undefined', source: undefined, …}     `
example test: `test/parallel/test-worker-message-event.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: {value: {}, writable: false, enumerable: false, configurable:│ `

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: {value: {}, writable: false, enumerable: false, configurable:│
│false} deepStrictEqual {value: {}, writable: true, configurable: true,       │
│enumerable: false}                                         `
example test: `test/parallel/test-whatwg-url-custom-global.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: <n> === -<n> │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ assert.str`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: 0 === -1                                                     │
│                                                                             │
│ In file test/parallel/test-buffer-indexof.js:16:1:        `
example test: `test/parallel/test-buffer-indexof.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: <n> === <n> │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ assert.deep`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: 0 === 2                                                      │
│                                                                             │
│ In file test/parallel/test-buffer-badhex.js:10:3:         `
example test: `test/parallel/test-buffer-badhex.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: <n> === <n> │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ assert.stri`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: 1 === 0                                                      │
│                                                                             │
│ In file test/parallel/test-events-listener-count-with-list`
example test: `test/parallel/test-events-listener-count-with-listener.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: <n> === <n> │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ const strea`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: 1 === 0                                                      │
│                                                                             │
│ In file test/parallel/test-stream-event-names.js:9:3:     `
example test: `test/parallel/test-stream-event-names.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: <n> === <n> │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ dst.on(<str`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: 4 === 3                                                      │
│                                                                             │
│ In file test/parallel/test-stream-duplex-readable-end.js:2`
example test: `test/parallel/test-stream-duplex-readable-end.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: <n> === <n> │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ fs.chmodSyn`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: 438 === 511                                                  │
│                                                                             │
│ In file test/parallel/test-fs-chmod-mask.js:41:5:         `
example test: `test/parallel/test-fs-chmod-mask.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: <n> === <n> │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ r[method](c`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: 0 === 12                                                     │
│                                                                             │
│ In file test/parallel/test-stream-readable-add-chunk-durin`
example test: `test/parallel/test-stream-readable-add-chunk-during-data.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: <n> === <n>.1945305291680097E103 │ │ │ │ In file <loc>: │ │ ╭─ `

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: 0.0 === 1.1945305291680097E103                               │
│                                                                             │
│ In file test/parallel/test-buffer-readdouble.js:17:1:     `
example test: `test/parallel/test-buffer-readdouble.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: <n> === <n>.600602988224807E-<n> │ │ │ │ In file <loc>: │ │ ╭─ `

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: 0.0 === 4.600602988224807E-41                                │
│                                                                             │
│ In file test/parallel/test-buffer-readfloat.js:13:1:      `
example test: `test/parallel/test-buffer-readfloat.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: <str> !== <str> │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ │ │→ <n`

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

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: <str> === <n> │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ assert.st`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: '21' === 21                                                  │
│                                                                             │
│ In file test/parallel/test-url-urltooptions.js:13:1:      `
example test: `test/parallel/test-url-urltooptions.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: <str> === <str> │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ // titl`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: 'elide' === 'foo'                                            │
│                                                                             │
│ In file test/parallel/test-process-title-cli.js:16:1:     `
example test: `test/parallel/test-process-title-cli.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: <str> === <str> │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ assert.`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: 'abc' === ''                                                 │
│                                                                             │
│ In file test/parallel/test-buffer-tostring-range.js:10:1: `
example test: `test/parallel/test-buffer-tostring-range.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: <str> === <str>a<str>a<str>b<str>b<str>b<str>c<str> │ │ │ │ In `

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: 'URLSearchParams {}' === 'URLSearchParams { 'a' => 'a', 'b'  │
│=> 'b', 'b' => 'c' }'                                                        │
│                                                           `
example test: `test/parallel/test-whatwg-url-custom-searchparams-inspect.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: <str>│ │=== <str> │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ resul`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: '/work/.harness/work/node-api/node-api-overlay/test/fixtures'│
│=== '眯牯⽫栮牡敮獳眯牯⽫潮敤愭楰港摯ⵥ灡⵩癯牥慬⽹整瑳是硩畴敲�'              │
│                                                                             │
│ In fi`
example test: `test/parallel/test-fs-realpath-buffer-encoding.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: │ │<str> === │ │<str> │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ │`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError:                                                              │
│'a=a&a=1&a=true&a=undefined&a=null&a=%3F&a=%3F&a=%F0%9F%98%80&a=%3F%3F&a=%5Bo│
│bject+Object%5D' ===                                       `
example test: `test/parallel/test-whatwg-url-custom-searchparams.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: createWriteStream options.fs.open should throw if isn<str>ERR_I`

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

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: false == true │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ // check `

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: false == true                                                │
│                                                                             │
│ In file test/parallel/test-module-version.js:6:1:         `
example test: `test/parallel/test-module-version.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: false == true │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ // Should`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: false == true                                                │
│                                                                             │
│ In file test/parallel/test-stream-big-push.js:58:1:       `
example test: `test/parallel/test-stream-big-push.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: false == true │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ assert(!b`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: false == true                                                │
│                                                                             │
│ In file test/parallel/test-buffer-includes.js:14:1:       `
example test: `test/parallel/test-buffer-includes.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: false == true │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ const res`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: false == true                                                │
│                                                                             │
│ In file test/parallel/test-dns-get-server.js:8:1:         `
example test: `test/parallel/test-dns-get-server.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: false == true │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ readable.`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: false == true                                                │
│                                                                             │
│ In file test/parallel/test-stream-readable-unshift.js:14:5`
example test: `test/parallel/test-stream-readable-unshift.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: false == true │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ write: co`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: false == true                                                │
│                                                                             │
│ In file test/parallel/test-stream-uint8array.js:55:7:     `
example test: `test/parallel/test-stream-uint8array.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: false === <n> │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ const w =`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: false === 0                                                  │
│                                                                             │
│ In file test/parallel/test-stream-writable-properties.js:9`
example test: `test/parallel/test-stream-writable-properties.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: false === true │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ // fs.pr`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: false === true                                               │
│                                                                             │
│ In file test/parallel/test-fs-promises.js:46:1:           `
example test: `test/parallel/test-fs-promises.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: false === true │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ │ │→ <n>`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: false === true                                               │
│                                                                             │
│ In file test/parallel/test-stream-duplex-props.js:27:3:   `
example test: `test/parallel/test-stream-duplex-props.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: false === true │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ final: c`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: false === true                                               │
│                                                                             │
│ In file test/parallel/test-stream-writable-finished.js:92:`
example test: `test/parallel/test-stream-writable-finished.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: false === true │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ s.on(<st`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: false === true                                               │
│                                                                             │
│ In file test/parallel/test-stream-construct.js:95:7:      `
example test: `test/parallel/test-stream-construct.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: false === true │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ stream.o`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: false === true                                               │
│                                                                             │
│ In file test/parallel/test-fs-write-stream-end.js:57:5:   `
example test: `test/parallel/test-fs-write-stream-end.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: false === true │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ w.write(`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: false === true                                               │
│                                                                             │
│ In file test/parallel/test-stream-writable-write-error.js:`
example test: `test/parallel/test-stream-writable-write-error.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: Got unwanted exception: {} │ │ │ │ In file <loc>:│ │ ╭─ │ │ <n>`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: Got unwanted exception: {}                                   │
│                                                                             │
│ In file test/parallel/test-whatwg-url-custom-searchparams-`
example test: `test/parallel/test-whatwg-url-custom-searchparams-stringifier.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: null !== null │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ // eslint`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: null !== null                                                │
│                                                                             │
│ In file test/parallel/test-stream-writable-null.js:13:5:  `
example test: `test/parallel/test-stream-writable-null.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: path.posix.extname(<str>) expect=<str> actual=<str> │ │path.win`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: path.posix.extname("unknown") expect=".js" actual=""         │
│path.win32.extname("unknown") expect=".js" actual=""                         │
│path.win32.extname("C:unknown") expect=".js" actual=""     `
example test: `test/parallel/test-path-extname.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: true === false │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ }); │ │→`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: true === false                                               │
│                                                                             │
│ In file test/parallel/test-stream-duplex-readable-writable`
example test: `test/parallel/test-stream-duplex-readable-writable.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: true === false │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ readable`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: true === false                                               │
│                                                                             │
│ In file test/parallel/test-stream-readable-ended.js:23:5: `
example test: `test/parallel/test-stream-readable-ended.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: undefined !== undefined │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: undefined !== undefined                                      │
│                                                                             │
│ In file test/parallel/test-fs-write.js:45:1:              `
example test: `test/parallel/test-fs-write.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: undefined === [B@3f3684ab │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n>`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: undefined === [B@3f3684ab                                    │
│                                                                             │
│ In file test/parallel/test-buffer-arraybuffer.js:15:1:    `
example test: `test/parallel/test-buffer-arraybuffer.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: undefined === {_read: {}, unpipe: {}} │ │ │ │ In file <loc>: │ `

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: undefined === {_read: {}, unpipe: {}}                        │
│                                                                             │
│ In file test/parallel/test-stream2-pipe-error-handling.js:`
example test: `test/parallel/test-stream2-pipe-error-handling.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: undefined === {F_OK: <n>, R_OK: <n>, W_OK: <n>, X_OK: <n>, │ │C`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: undefined === {F_OK: 0, R_OK: 4, W_OK: 2, X_OK: 1,           │
│COPYFILE_EXCL: 1, …}                                                         │
│                                                           `
example test: `test/parallel/test-fs-promises-exists.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: undefined === <n> │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ for (`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: undefined === 20                                             │
│                                                                             │
│ In file test/parallel/test-buffer-copy.js:120:5:          `
example test: `test/parallel/test-buffer-copy.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: undefined === <str> │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ │ │`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: undefined === 'ENODATA'                                      │
│                                                                             │
│ In file test/parallel/test-dns-promises-exists.js:10:1:   `
example test: `test/parallel/test-dns-promises-exists.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: undefined === <str> │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ ass`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: undefined === 'utf8'                                         │
│                                                                             │
│ In file test/parallel/test-stream-writable-decoded-encodin`
example test: `test/parallel/test-stream-writable-decoded-encoding.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: undefined === <str> │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ con`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: undefined === 'ascii'                                        │
│                                                                             │
│ In file test/parallel/test-stream-writable-change-default-`
example test: `test/parallel/test-stream-writable-change-default-encoding.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: undefined === false │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ fun`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: undefined === false                                          │
│                                                                             │
│ In file test/parallel/test-stream-readable-didRead.js:9:3:`
example test: `test/parallel/test-stream-readable-didRead.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: undefined === null │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ asse`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: undefined === null                                           │
│                                                                             │
│ In file test/parallel/test-stream2-objects.js:63:3:       `
example test: `test/parallel/test-stream2-objects.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: undefined === null │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ read`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: undefined === null                                           │
│                                                                             │
│ In file test/parallel/test-stream-readable-destroy.js:16:3`
example test: `test/parallel/test-stream-readable-destroy.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: undefined === null │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ tw.e`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: undefined === null                                           │
│                                                                             │
│ In file test/parallel/test-stream2-writable.js:223:5:     `
example test: `test/parallel/test-stream2-writable.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: undefined === true │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ }); `

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: undefined === true                                           │
│                                                                             │
│ In file test/parallel/test-stream-duplex-end.js:11:3:     `
example test: `test/parallel/test-stream-duplex-end.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: undefined === true │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ │ │→`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: undefined === true                                           │
│                                                                             │
│ In file test/parallel/test-stream-pipe-needDrain.js:18:3: `
example test: `test/parallel/test-stream-pipe-needDrain.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │callback is required │ │ │ │ In file <loc> │ │─ Stack Trace ───────────────────`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│callback is required                                                         │
│                                                                             │
│ In file test/parallel/test-dns-negative-zero.js:89:1      `
example test: `test/parallel/test-dns-negative-zero.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │com.oracle.truffle.api.dsl.UnsupportedSpecializationException: Unexpected │ │va`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│com.oracle.truffle.api.dsl.UnsupportedSpecializationException: Unexpected    │
│values provided for JSToNumberNodeGen@5a415981: [[B@62a0cf0d], [byte[]]      │
│                                                           `
example test: `test/parallel/test-fs-promises-writefile-typedarray.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │java.lang.UnsupportedOperationException: os.constants is not yet implemented │ `

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│java.lang.UnsupportedOperationException: os.constants is not yet implemented │
│                                                                             │
│ In file test/parallel/test-util-exception-with-host-port.j`
example test: `test/parallel/test-util-exception-with-host-port.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │java.lang.UnsupportedOperationException: process.cpuUsage() is not yet │ │imple`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│java.lang.UnsupportedOperationException: process.cpuUsage() is not yet       │
│implemented                                                                  │
│                                                           `
example test: `test/parallel/test-process-cpuUsage.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │java.lang.UnsupportedOperationException: process.uptime() is not yet │ │impleme`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│java.lang.UnsupportedOperationException: process.uptime() is not yet         │
│implemented                                                                  │
│                                                           `
example test: `test/parallel/test-process-uptime.js`

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

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │null │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ // This is a private API, but it i`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│null                                                                         │
│                                                                             │
│ In file test/parallel/test-fs-read-stream-double-close.js:`
example test: `test/parallel/test-fs-read-stream-double-close.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │null │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ write(data, enc, cb) { │ │→ <n> │ `

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│null                                                                         │
│                                                                             │
│ In file test/parallel/test-stream-auto-destroy.js:34:7:   `
example test: `test/parallel/test-stream-auto-destroy.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │RangeError: Buffer.allocUnsafe: size must be non-negative │ │ │ │ In file <loc>`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│RangeError: Buffer.allocUnsafe: size must be non-negative                    │
│                                                                             │
│ In file test/parallel/test-fs-write-buffer-large.js:15:9: `
example test: `test/parallel/test-fs-write-buffer-large.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │RangeError: Maximum call stack size exceeded │ │ │ │ In file <loc>: │ │ ╭─ │ │ `

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│RangeError: Maximum call stack size exceeded                                 │
│                                                                             │
│ In file test/parallel/test-util-inspect-long-running.js:20`
example test: `test/parallel/test-util-inspect-long-running.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │ReferenceError: setInterval is not defined │ │ │ │ In file <loc>: │ │ ╭─ │ │─ S`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: setInterval is not defined                                   │
│                                                                             │
│ In file test/parallel/test-timers-interval-promisified.js:`
example test: `test/parallel/test-timers-interval-promisified.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │ReferenceError: setTimeout is not defined │ │ │ │ In file test/parallel/test-di`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: setTimeout is not defined                                    │
│                                                                             │
│ In file test/parallel/test-diagnostics-channel-tracing-cha`
example test: `test/parallel/test-diagnostics-channel-tracing-channel-promise-run-stores.js`

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

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │SyntaxError: <loc> Invalid │ │return statement return new Worker(__filename); ^`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│SyntaxError: test-worker-terminate-http2-respond-with-file.js:14:2 Invalid   │
│return statement return new Worker(__filename); ^                            │
│test-worker-terminate-http2-respond-with-file.js:15:0 Expec`
example test: `test/parallel/test-worker-terminate-http2-respond-with-file.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │SyntaxError: <loc> Invalid return │ │statement if (name === <str> || name === <`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│SyntaxError: test-event-emitter-method-names.js:32:65 Invalid return         │
│statement if (name === 'constructor' || name === 'on' || name === 'off')     │
│return; ^ test-event-emitter-method-names.js:33:37 Invalid `
example test: `test/parallel/test-event-emitter-method-names.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │SyntaxError: <loc> Invalid return │ │statement return new Worker(__filename); ^`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│SyntaxError: test-worker-dns-terminate-during-query.js:10:2 Invalid return   │
│statement return new Worker(__filename); ^                                   │
│test-worker-dns-terminate-during-query.js:11:0 Expected eof`
example test: `test/parallel/test-worker-dns-terminate-during-query.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │SyntaxError: <loc> Invalid return │ │statement return parentPort.once(<str>, ({`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│SyntaxError: test-crypto-key-objects-messageport.js:36:2 Invalid return      │
│statement return parentPort.once('message', ({ key }) => { ^                 │
│test-crypto-key-objects-messageport.js:36:44 Expected ; but`
example test: `test/parallel/test-crypto-key-objects-messageport.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │SyntaxError: <loc> Invalid return │ │statement return parentPort.once(<str>, co`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│SyntaxError: test-webcrypto-cryptokey-workers.js:33:2 Invalid return         │
│statement return parentPort.once('message', common.mustCall((key) => { ^     │
│test-webcrypto-cryptokey-workers.js:36:2 Expected eof but f`
example test: `test/parallel/test-webcrypto-cryptokey-workers.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │SyntaxError: <loc> Invalid return │ │statement return process.exit(<n>); ^ │ │<`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│SyntaxError: test-process-exit-code-validation.js:135:4 Invalid return       │
│statement return process.exit(100); ^                                        │
│test-process-exit-code-validation.js:136:2 Expected eof but`
example test: `test/parallel/test-process-exit-code-validation.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │SyntaxError: <loc> Invalid return │ │statement return; ^ <loc> Expected eof but`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│SyntaxError: test-worker-terminate-source-map.js:22:2 Invalid return         │
│statement return; ^ test-worker-terminate-source-map.js:23:0 Expected eof but│
│found } } ^                                                `
example test: `test/parallel/test-worker-terminate-source-map.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │SyntaxError: <loc> Invalid return statement return │ │child(); ^ <loc> Expected`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│SyntaxError: test-process-raw-debug.js:30:4 Invalid return statement return  │
│child(); ^ test-process-raw-debug.js:31:2 Expected an operand but found case │
│case undefined: ^ test-process-raw-debug.js:32:4 Invalid re`
example test: `test/parallel/test-process-raw-debug.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │SyntaxError: Variable <str> has already been declared │ │ │ │ In file <loc>│ │ `

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│SyntaxError: Variable "MessageChannel" has already been declared             │
│                                                                             │
│ In file test/parallel/test-worker-message-port-inspect-dur`
example test: `test/parallel/test-worker-message-port-inspect-during-init-hook.js`

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
│ In file test/parallel/test-fs-stat-bigint.js:97:21:       `
example test: `test/parallel/test-fs-stat-bigint.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: (intermediate value).of is not a function │ │ │ │ In file <loc>: │ │`

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

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: a.compare is not a function │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ `

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: a.compare is not a function                                       │
│                                                                             │
│ In file test/parallel/test-buffer-compare-offset.js:9:20: `
example test: `test/parallel/test-buffer-compare-offset.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: b.compare is not a function │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ `

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: b.compare is not a function                                       │
│                                                                             │
│ In file test/parallel/test-buffer-compare.js:11:20:       `
example test: `test/parallel/test-buffer-compare.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: buf[((<str> + (intermediate value)) + <str>)] is not a │ │function │`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: buf[(("writeBigInt64" + (intermediate value)) + "")] is not a     │
│function                                                                     │
│                                                           `
example test: `test/parallel/test-buffer-bigint64.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: callback is not a function │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ w`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: callback is not a function                                        │
│                                                                             │
│ In file test/parallel/test-stream-typedarray.js:72:3:     `
example test: `test/parallel/test-stream-typedarray.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: callback must be a function │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ `

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: callback must be a function                                       │
│                                                                             │
│ In file test/parallel/test-fs-read-optional-params.js:16:3`
example test: `test/parallel/test-fs-read-optional-params.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: callbacks.shift(...) is not a function │ │ │ │ In file <loc>: │ │ ╭─`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: callbacks.shift(...) is not a function                            │
│                                                                             │
│ In file test/parallel/test-stream-write-destroy.js:37:5:  `
example test: `test/parallel/test-stream-write-destroy.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: Cannot convert a Symbol value to a string │ │ │ │ In file <loc>│ │ ╭`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot convert a Symbol value to a string                         │
│                                                                             │
│ In file test/parallel/test-event-emitter-max-listeners-war`
example test: `test/parallel/test-event-emitter-max-listeners-warning-for-symbol.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: Cannot load module: <str> │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ //`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: '../../deps/acorn/acorn/package.json'         │
│                                                                             │
│ In file test/parallel/test-process-versions.js:6:15:      `
example test: `test/parallel/test-process-versions.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: Cannot load module: <str> │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ ad`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'internal/streams/add-abort-signal'           │
│                                                                             │
│ In file test/parallel/test-stream-add-abort-signal.js:9:5:`
example test: `test/parallel/test-stream-add-abort-signal.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: Cannot load module: <str> │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ ar`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'stream/iter'                                 │
│                                                                             │
│ In file test/parallel/test-stream-iter-consumers-bytes.js:`
example test: `test/parallel/test-stream-iter-consumers-bytes.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: Cannot load module: <str> │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ Br`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'worker_threads'                              │
│                                                                             │
│ In file test/parallel/test-worker-broadcastchannel-wpt.js:`
example test: `test/parallel/test-worker-broadcastchannel-wpt.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: Cannot load module: <str> │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ ex`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'async_hooks'                                 │
│                                                                             │
│ In file test/parallel/test-eventemitter-asyncresource.js:8`
example test: `test/parallel/test-eventemitter-asyncresource.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: Cannot load module: <str> │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ fi`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'stream/promises'                             │
│                                                                             │
│ In file test/parallel/test-stream-promises.js:10:5:       `
example test: `test/parallel/test-stream-promises.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: Cannot load module: <str> │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ fr`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'stream/iter'                                 │
│                                                                             │
│ In file test/parallel/test-stream-iter-transform-output.js`
example test: `test/parallel/test-stream-iter-transform-output.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: Cannot load module: <str> │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ kE`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'internal/event_target'                       │
│                                                                             │
│ In file test/parallel/test-events-on-async-iterator.js:10:`
example test: `test/parallel/test-events-on-async-iterator.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: Cannot load module: <str> │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ kW`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'internal/event_target'                       │
│                                                                             │
│ In file test/parallel/test-eventtarget.js:8:5:            `
example test: `test/parallel/test-eventtarget.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: Cannot load module: <str> │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ on`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'stream/iter'                                 │
│                                                                             │
│ In file test/parallel/test-stream-iter-writable-interop.js`
example test: `test/parallel/test-stream-iter-writable-interop.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: Cannot load module: <str> │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ pi`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'stream/iter'                                 │
│                                                                             │
│ In file test/parallel/test-fs-promises-file-handle-writer.`
example test: `test/parallel/test-fs-promises-file-handle-writer.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: Cannot load module: <str> │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ So`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'node:vm'                                     │
│                                                                             │
│ In file test/parallel/test-vm-module-modulerequests.js:9:5`
example test: `test/parallel/test-vm-module-modulerequests.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: Cannot load module: <str> │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ ta`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'stream/iter'                                 │
│                                                                             │
│ In file test/parallel/test-stream-iter-validation.js:13:5:`
example test: `test/parallel/test-stream-iter-validation.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: Cannot load module: <str> │ │ │ │ In file <loc>: │ │ ╭─ │ │─ Stack T`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'child_process'                               │
│                                                                             │
│ In file test/parallel/test-url-parse-deprecation.js:935:21`
example test: `test/parallel/test-url-parse-deprecation.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: Cannot load module: <str> │ │ │ │ In file <loc>:│ │ ╭─ │ │ <n> │ // `

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'internal/test/binding'                       │
│                                                                             │
│ In file test/parallel/test-stream-base-prototype-accessors`
example test: `test/parallel/test-stream-base-prototype-accessors-enumerability.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: Cannot load module: <str> │ │ │ │ In file <loc>:│ │ ╭─ │ │ <n> │ Fil`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'internal/fs/promises'                        │
│                                                                             │
│ In file test/parallel/test-fs-promises-file-handle-aggrega`
example test: `test/parallel/test-fs-promises-file-handle-aggregate-errors.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: Cannot load module: <str> │ │ │ │ In file <loc>│ │ ╭─ │ │ <n> │ requ`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'diagnostics_channel'                         │
│                                                                             │
│ In file test/parallel/test-diagnostics-channel-tracing-cha`
example test: `test/parallel/test-diagnostics-channel-tracing-channel-args-types.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: Cannot load module: <str> │ │ │ │ In file test/parallel/test-async-h`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'async_hooks'                                 │
│                                                                             │
│ In file test/parallel/test-async-hooks-run-in-async-scope-`
example test: `test/parallel/test-async-hooks-run-in-async-scope-caught-exception.js`

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

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: Cannot read property <str> of undefined │ │ │ │ In file <loc>:│ │ ╭─`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot read property 'awaitDrainWriters' of undefined             │
│                                                                             │
│ In file test/parallel/test-stream-pipe-await-drain-push-wh`
example test: `test/parallel/test-stream-pipe-await-drain-push-while-write.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: Cannot read property <str> of undefined │ │ │ │ In file test/paralle`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot read property 'corked' of undefined                        │
│                                                                             │
│ In file test/parallel/test-stream-writableState-uncorked-b`
example test: `test/parallel/test-stream-writableState-uncorked-bufferedRequestCount.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: Cannot set property │ │<str> of│ │undefined │ │ │ │ In file <loc>: │`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot set property                                               │
│'/work/.harness/work/node-api/node-api-overlay/test/fixtures/semicolon.js' of│
│undefined                                                  `
example test: `test/parallel/test-require-cache.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: Constructor Writable requires <str> │ │ │ │ In file <loc>: │ │ ╭─ │ `

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Constructor Writable requires 'new'                               │
│                                                                             │
│ In file test/parallel/test-stream-backpressure.js:33:12:  `
example test: `test/parallel/test-stream-backpressure.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: duplexPair is not a function │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: duplexPair is not a function                                      │
│                                                                             │
│ In file test/parallel/test-stream-duplexpair.js:8:16:     `
example test: `test/parallel/test-stream-duplexpair.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: event name is required │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ │ │→ `

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: event name is required                                            │
│                                                                             │
│ In file test/parallel/test-event-emitter-error-monitor.js:`
example test: `test/parallel/test-event-emitter-error-monitor.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: event name is required │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ const`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: event name is required                                            │
│                                                                             │
│ In file test/parallel/test-event-emitter-listeners.js:91:2`
example test: `test/parallel/test-event-emitter-listeners.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: fs._toUnixTimestamp is not a function │ │ │ │ In file <loc>: │ │ ╭─ `

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: fs._toUnixTimestamp is not a function                             │
│                                                                             │
│ In file test/parallel/test-fs-utimes.js:75:10:            `
example test: `test/parallel/test-fs-utimes.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: fs.ReadStream is not a function │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: fs.ReadStream is not a function                                   │
│                                                                             │
│ In file test/parallel/test-fs-read-stream-inherit.js:15:16`
example test: `test/parallel/test-fs-read-stream-inherit.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: fs.readv is not a function │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ │`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: fs.readv is not a function                                        │
│                                                                             │
│ In file test/parallel/test-fs-readv.js:45:3:              `
example test: `test/parallel/test-fs-readv.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: fs.readvSync is not a function │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n>`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: fs.readvSync is not a function                                    │
│                                                                             │
│ In file test/parallel/test-fs-readv-sync.js:33:14:        `
example test: `test/parallel/test-fs-readv-sync.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: fs.realpathSync.native is not a function │ │ │ │ In file <loc>: │ │ `

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: fs.realpathSync.native is not a function                          │
│                                                                             │
│ In file test/parallel/test-fs-realpath-native.js:9:3:     `
example test: `test/parallel/test-fs-realpath-native.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: fs.writev is not a function │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ `

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: fs.writev is not a function                                       │
│                                                                             │
│ In file test/parallel/test-fs-writev.js:35:3:             `
example test: `test/parallel/test-fs-writev.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: fs.writevSync is not a function │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: fs.writevSync is not a function                                   │
│                                                                             │
│ In file test/parallel/test-fs-writev-sync.js:27:17:       `
example test: `test/parallel/test-fs-writev-sync.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: getMaxListeners is not a function │ │ │ │ In file <loc>: │ │ ╭─ │ │ `

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: getMaxListeners is not a function                                 │
│                                                                             │
│ In file test/parallel/test-events-getmaxlisteners.js:9:22:`
example test: `test/parallel/test-events-getmaxlisteners.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: immediate.hasRef is not a function │ │ │ │ In file <loc>: │ │ ╭─ │ │`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: immediate.hasRef is not a function                                │
│                                                                             │
│ In file test/parallel/test-timers-immediate-unref.js:7:20:`
example test: `test/parallel/test-timers-immediate-unref.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: Object{} is not iterable │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ │ │`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Object{} is not iterable                                          │
│                                                                             │
│ In file test/parallel/test-buffer-iterator.js:13:1:       `
example test: `test/parallel/test-buffer-iterator.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: pathToFileURL: path must be an absolute filesystem path │ │ │ │ In f`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: pathToFileURL: path must be an absolute filesystem path           │
│                                                                             │
│ In file test/parallel/test-url-pathtofileurl.js:8:19:     `
example test: `test/parallel/test-url-pathtofileurl.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: pipeline: every link must be a Readable on the left and a Writable│ `

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: pipeline: every link must be a Readable on the left and a Writable│
│on the right                                                                 │
│                                                           `
example test: `test/parallel/test-stream-pipeline-uncaught.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: read: buffer must be a Buffer or TypedArray │ │ │ │ In file <loc>: │`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: read: buffer must be a Buffer or TypedArray                       │
│                                                                             │
│ In file test/parallel/test-fs-read.js:33:3:               `
example test: `test/parallel/test-fs-read.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: read[(intermediate value).asyncDispose] is not a function │ │ │ │ In`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: read[(intermediate value).asyncDispose] is not a function         │
│                                                                             │
│ In file test/parallel/test-stream-readable-dispose.js:19:3`
example test: `test/parallel/test-stream-readable-dispose.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: Readable.from is not a function │ │ │ │ In file <loc>│ │ ╭─ │ │ <n> `

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Readable.from is not a function                                   │
│                                                                             │
│ In file test/parallel/test-stream-pipe-objectmode-to-non-o`
example test: `test/parallel/test-stream-pipe-objectmode-to-non-objectmode.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: Readable.toWeb is not a function │ │ │ │ In file <loc>: │ │ ╭─ │ │ <`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Readable.toWeb is not a function                                  │
│                                                                             │
│ In file test/parallel/test-stream-readable-strategy-option`
example test: `test/parallel/test-stream-readable-strategy-option.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: stream.Stream is not a constructor │ │ │ │ In file <loc>: │ │ ╭─ │ │`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: stream.Stream is not a constructor                                │
│                                                                             │
│ In file test/parallel/test-stream-pipe-without-listenerCou`
example test: `test/parallel/test-stream-pipe-without-listenerCount.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: The <str> argument must be of type function. Received │ │undefined │`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: The "original" argument must be of type function. Received        │
│undefined                                                                    │
│                                                           `
example test: `test/parallel/test-fs-readv-promisify.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: timer.hasRef is not a function │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n>`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: timer.hasRef is not a function                                    │
│                                                                             │
│ In file test/parallel/test-timers-unref.js:36:20:         `
example test: `test/parallel/test-timers-unref.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: url.Url is not a constructor │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: url.Url is not a constructor                                      │
│                                                                             │
│ In file test/parallel/test-url-parse-query.js:74:34:      `
example test: `test/parallel/test-url-parse-query.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: URLSearchParams init must be a string, sequence of pairs, or │ │reco`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: URLSearchParams init must be a string, sequence of pairs, or      │
│record                                                                       │
│                                                           `
example test: `test/parallel/test-whatwg-url-custom-searchparams-constructor.js`

### 1 × `╭─────────────────────────────────────────────────────────────────────────────╮ │Error │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ │ │→ <n> │ new EventEmitter().emi`

distinct messages:
- `╭─────────────────────────────────────────────────────────────────────────────╮
│Error                                                                        │
│                                                                             │
│ In file test/parallel/test-events-uncaught-exception-stack`
example test: `test/parallel/test-events-uncaught-exception-stack.js`

### 1 × `╭─────────────────────────────────────────────────────────────────────────────╮ │Error │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ write: common.mustCall((chunk, en`

distinct messages:
- `╭─────────────────────────────────────────────────────────────────────────────╮
│Error                                                                        │
│                                                                             │
│ In file test/parallel/test-stream-writable-writable.js:19:`
example test: `test/parallel/test-stream-writable-writable.js`

### 1 × `╭─────────────────────────────────────────────────────────────────────────────╮ │Error: ENOENT: no such file or directory, mkdir │ │<str> │ │ │ │ In file <loc>:`

distinct messages:
- `╭─────────────────────────────────────────────────────────────────────────────╮
│Error: ENOENT: no such file or directory, mkdir                              │
│'/work/.harness/work/node-api/node-test/.tmp.645/work/.harness/work/node-api/│
│node-test/.tmp.645/absolute-target'                        `
example test: `test/parallel/test-fs-symlink-dir.js`

### 1 × `╭─────────────────────────────────────────────────────────────────────────────╮ │Error: ENOENT: no such file or directory, open │ │<str> │ │ │ │ In file <loc>: `

distinct messages:
- `╭─────────────────────────────────────────────────────────────────────────────╮
│Error: ENOENT: no such file or directory, open                               │
│'/work/.harness/work/node-api/node-test/.tmp.567/testReadFileSyncAppend.txt' │
│                                                           `
example test: `test/parallel/test-fs-read-file-sync.js`

### 1 × `╭─────────────────────────────────────────────────────────────────────────────╮ │Error: ENOENT: no such file or directory, statfs <str> │ │ │ │ In file <loc>: │`

distinct messages:
- `╭─────────────────────────────────────────────────────────────────────────────╮
│Error: ENOENT: no such file or directory, statfs 'unknown'                   │
│                                                                             │
│ In file test/parallel/test-fs-statfs.js:30:21:            `
example test: `test/parallel/test-fs-statfs.js`

### 1 × `╭─────────────────────────────────────────────────────────────────────────────╮ │Error: fhqwhgads │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ _final(callback) { │ │`

distinct messages:
- `╭─────────────────────────────────────────────────────────────────────────────╮
│Error: fhqwhgads                                                             │
│                                                                             │
│ In file test/parallel/test-stream-writable-final-throw.js:`
example test: `test/parallel/test-stream-writable-final-throw.js`

### 1 × `╭─────────────────────────────────────────────────────────────────────────────╮ │Error: fhqwhgads │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ │ │→ <n> │ Object.keys`

distinct messages:
- `╭─────────────────────────────────────────────────────────────────────────────╮
│Error: fhqwhgads                                                             │
│                                                                             │
│ In file test/parallel/test-util-primordial-monkeypatching.`
example test: `test/parallel/test-util-primordial-monkeypatching.js`

### 1 × `╭─────────────────────────────────────────────────────────────────────────────╮ │Error: kaboom │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ writable._final = (cb) =>`

distinct messages:
- `╭─────────────────────────────────────────────────────────────────────────────╮
│Error: kaboom                                                                │
│                                                                             │
│ In file test/parallel/test-stream-writable-end-cb-uncaught`
example test: `test/parallel/test-stream-writable-end-cb-uncaught.js`

### 1 × `AssertionError: [] deepStrictEqual [<str>] at Function.deepStrictEqual (native) at <loc> AssertionError: [] deepStrictEqual [<str>] at Function.deepStrictEqual `

distinct messages:
- `AssertionError: [] deepStrictEqual ['ab']
    at Function.deepStrictEqual (native)
    at test-stream-readable-setEncoding-existing-buffers.js:18:12
AssertionError: [] deepStrictEqual ['🎉']
    at Function.deepStrictEqual (native)
    at test-stream-readable-setEncoding-existing-buffers.js:37:12
As`
example test: `test/parallel/test-stream-readable-setEncoding-existing-buffers.js`

### 1 × `AssertionError: [<str>, <str>] deepStrictEqual [<str>, <str>, <str>] at Function.deepStrictEqual (native) at Process.<anonymous> (<loc>)`

distinct messages:
- `AssertionError: ['bar', 'foo'] deepStrictEqual ['bar', 'foo', 'removeListener']
    at Function.deepStrictEqual (native)
    at Process.<anonymous> (test-event-emitter-remove-all-listeners.js:31:12)`
example test: `test/parallel/test-event-emitter-remove-all-listeners.js`

### 1 × `AssertionError: {Operators: {}, onunhandledrejection: null, onrejectionhandled: null, structuredClone: {}} deepStrictEqual {} at Function.deepStrictEqual (nativ`

distinct messages:
- `AssertionError: {Operators: {}, onunhandledrejection: null, onrejectionhandled: null, structuredClone: {}} deepStrictEqual {}
    at Function.deepStrictEqual (native)
    at test-next-tick.js:50:10
AssertionError: {Operators: {}, onunhandledrejection: null, onrejectionhandled: null, structuredClone:`
example test: `test/parallel/test-next-tick.js`

### 1 × `AssertionError: <str> === <str> at Function.strictEqual (native) at Readable.<anonymous> (<loc>) at Readable._return (<loc>) at Readable.push (native) at <loc>`

distinct messages:
- `AssertionError: '' === 'MQ=='
    at Function.strictEqual (native)
    at Readable.<anonymous> (test-stream2-base64-single-char-read-end.js:48:10)
    at Readable._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at Readable.push (native)
    at test-stream2-bas`
example test: `test/parallel/test-stream2-base64-single-char-read-end.js`

### 1 × `AssertionError: function should not have been called at <loc> at Function.fail (native) at mustNotCall (<loc>) AssertionError: function should not have been cal`

distinct messages:
- `AssertionError: function should not have been called at test-timers-setimmediate-infinite-loop.js:17
    at Function.fail (native)
    at mustNotCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:631:12)
AssertionError: function should not have been called at test-timers-setimm`
example test: `test/parallel/test-timers-setimmediate-infinite-loop.js`

### 1 × `AssertionError: function should not have been called at <loc> at Function.fail (native) at Writable.mustNotCall (<loc>)`

distinct messages:
- `AssertionError: function should not have been called at test-stream-write-drain.js:14
    at Function.fail (native)
    at Writable.mustNotCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:631:12)`
example test: `test/parallel/test-stream-write-drain.js`

### 1 × `AssertionError: Got unwanted exception: {} at Function.throws (native) at <loc> at _return (<loc>) at Process.<anonymous> (<loc>) at Process._return (<loc>)`

distinct messages:
- `AssertionError: Got unwanted exception: {}
    at Function.throws (native)
    at /work/.harness/work/node-api/node-api-overlay/test/common/index.js:806:12
    at _return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at Process.<anonymous> (test-timers-unref-throw-t`
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

### 1 × `AssertionError: undefined === null at Function.strictEqual (native) at <loc>`

distinct messages:
- `AssertionError: undefined === null
    at Function.strictEqual (native)
    at test-stream-readable-hwm-0.js:27:10`
example test: `test/parallel/test-stream-readable-hwm-0.js`

### 1 × `AssertionError: undefined === true at Function.strictEqual (native) at Process.<anonymous> (<loc>)`

distinct messages:
- `AssertionError: undefined === true
    at Function.strictEqual (native)
    at Process.<anonymous> (test-next-tick-when-exiting.js:7:10)`
example test: `test/parallel/test-next-tick-when-exiting.js`

### 1 × `default: <n> ╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: <str> === <str> │ │ │ │ In file <loc>: │ │ ╭─ │ │ `

distinct messages:
- `default: 1
╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: '' === 'default: 1 '                                         │
│                                                                             │
│ In file test/parallel/test-console-count.js:13:`
example test: `test/parallel/test-console-count.js`

### 1 × `fhqwhgads Fatal error (java.lang.UnsupportedOperationException): process.exit() is not yet implemented java.lang.UnsupportedOperationException: process.exit() i`

distinct messages:
- `fhqwhgads
Fatal error (java.lang.UnsupportedOperationException): process.exit() is not yet implemented
java.lang.UnsupportedOperationException: process.exit() is not yet implemented
	at dev.elide.lang.javascript.globals.ProcessGlobal.notImplemented(ProcessGlobal.java:596)
	at dev.elide.lang.javascri`
example test: `test/parallel/test-console-stdio-setters.js`

### 1 × `first cb [EventLoop] external task threw: AssertionError: undefined === {} <loc>.runtime.JSException: AssertionError: undefined === {} second cb Fatal error (ja`

distinct messages:
- `first cb
[EventLoop] external task threw: AssertionError: undefined === {}
com.oracle.truffle.js.runtime.JSException: AssertionError: undefined === {}
second cb
Fatal error (java.lang.UnsupportedOperationException): process.exit() is not yet implemented
java.lang.UnsupportedOperationException: proce`
example test: `test/parallel/test-fs-write-stream-err.js`

### 1 × `null`

distinct messages:
- `null`
example test: `test/parallel/test-stream2-finish-pipe.js`

### 1 × `readStart data <n> data <n> data <n> data <n>`

distinct messages:
- `readStart
data 1
data 2
data 3
data 4`
example test: `test/parallel/test-stream2-push.js`

### 1 × `ReferenceError: interval is not defined at <loc> at _return (<loc>)`

distinct messages:
- `ReferenceError: interval is not defined
    at test-timers-unenroll-unref-interval.js:7:18
    at _return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)`
example test: `test/parallel/test-timers-unenroll-unref-interval.js`

### 1 × `TAP version <n> # Subtest: [object Object] not ok <n> - [object Object] --- duration_ms: <n> failureType: <str> error: <str> code: <str> ... <n>..<n> # tests <n`

distinct messages:
- `TAP version 13
# Subtest: [object Object]
not ok 1 - [object Object]
  ---
  duration_ms: 15
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
  error: "Got unwanted exception: {}"
  code: 'ERR_ASSERTION'
  ...
# Subtest: Assert class non strict
not ok 2 - Assert class non strict
  ---`
example test: `test/parallel/test-assert-class.js`

### 1 × `TAP version <n> # Subtest: deepEqual not ok <n> - deepEqual --- duration_ms: <n> failureType: <str> error: <str> code: <str> ... # Subtest: loose deepEqual not `

distinct messages:
- `TAP version 13
# Subtest: deepEqual
not ok 1 - deepEqual
  ---
  duration_ms: 0
  failureType: 'testCodeFailure'
  error: "Got unwanted exception: {actual: [120, 121, 122, 10], expected: {}, operator: 'deepStrictEqual'}"
  code: 'ERR_ASSERTION'
  ...
# Subtest: loose deepEqual
not ok 2 - loose deepE`
example test: `test/parallel/test-assert-deep.js`

### 1 × `TAP version <n> # Subtest: equalArrayPairs # Subtest: not ok <n> - --- duration_ms: <n> failureType: <str> error: <str> code: <str> ... # Subtest: not ok <n> - `

distinct messages:
- `TAP version 13
# Subtest: equalArrayPairs
    # Subtest: 
    not ok 1 - 
      ---
      duration_ms: 24
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
  duration_ms: 1
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
# duration_ms 2`
example test: `test/parallel/test-url-format-invalid-input.js`

### 1 × `TAP version <n> # Subtest: fs.stat should throw AbortError when called with an already aborted AbortSignal not ok <n> - fs.stat should throw AbortError when cal`

distinct messages:
- `TAP version 13
# Subtest: fs.stat should throw AbortError when called with an already aborted AbortSignal
not ok 1 - fs.stat should throw AbortError when called with an already aborted AbortSignal
  ---
  duration_ms: 2
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
  duration_ms: 1
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
  duration_ms: 0
  failureType: 'testCodeFailure'
  error: "Got unwanted exception: {}"
  code: 'ERR_ASSERTION'
  ...
# Subtest: input must be a file URL
not ok 2 - input must be a file URL
  ---
  duration_ms: 0
  failur`
example test: `test/parallel/test-url-fileurltopath.js`

### 1 × `TAP version <n> # Subtest: No args not ok <n> - No args --- duration_ms: <n> failureType: <str> error: <str> code: <str> ... # Subtest: One arg = message not ok`

distinct messages:
- `TAP version 13
# Subtest: No args
not ok 1 - No args
  ---
  duration_ms: 1
  failureType: 'testCodeFailure'
  error: "Got unwanted exception: {actual: undefined, expected: undefined, operator: 'fail'}"
  code: 'ERR_ASSERTION'
  ...
# Subtest: One arg = message
not ok 2 - One arg = message
  ---
  d`
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

### 1 × `TAP version <n> # Subtest: Test that assert.ifError has the correct stack trace of both stacks not ok <n> - Test that assert.ifError has the correct stack trace`

distinct messages:
- `TAP version 13
# Subtest: Test that assert.ifError has the correct stack trace of both stacks
not ok 1 - Test that assert.ifError has the correct stack trace of both stacks
  ---
  duration_ms: 1
  failureType: 'testCodeFailure'
  error: "'ifError got unwanted exception: {}' === 'ifError got unwante`
example test: `test/parallel/test-assert-if-error.js`

### 1 × `TAP version <n> # Subtest: Verify that asserting in the very first line produces the expected result not ok <n> - Verify that asserting in the very first line p`

distinct messages:
- `TAP version 13
# Subtest: Verify that asserting in the very first line produces the expected result
not ok 1 - Verify that asserting in the very first line produces the expected result
  ---
  duration_ms: 1
  failureType: 'testCodeFailure'
  error: "Got unwanted exception: {actual: '', expected: tr`
example test: `test/parallel/test-assert-first-line.js`

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

### 1 × `TypeError: Cannot read property <str> of undefined at <loc> at _return (<loc>)`

distinct messages:
- `TypeError: Cannot read property 'reading' of undefined
    at test-stream-readable-event.js:42:13
    at _return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)`
example test: `test/parallel/test-stream-readable-event.js`

### 1 × `TypeError: Cannot read property <str> of undefined at <loc> at _return (<loc>) TypeError: Cannot read property <str> of undefined at <loc> at _return (<loc>) Ty`

distinct messages:
- `TypeError: Cannot read property 'pipes' of undefined
    at test-stream-unpipe-event.js:26:24
    at _return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
TypeError: Cannot read property 'pipes' of undefined
    at test-stream-unpipe-event.js:37:24
    at _return (/work`
example test: `test/parallel/test-stream-unpipe-event.js`

### 1 × `TypeError: timer.refresh is not a function at <loc> at _return (<loc>)`

distinct messages:
- `TypeError: timer.refresh is not a function
    at test-timers-refresh-in-callback.js:12:11
    at _return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)`
example test: `test/parallel/test-timers-refresh-in-callback.js`

### 1 × `Uncaught (in promise) AssertionError: {} === {} Error: kaboom`

distinct messages:
- `Uncaught (in promise) AssertionError: {} === {}
Error: kaboom`
example test: `test/parallel/test-stream-pipeline-async-iterator.js`

### 1 × `Uncaught (in promise) AssertionError: <n> deepStrictEqual NaN Fatal error (java.lang.UnsupportedOperationException): process.exit() is not yet implemented java.`

distinct messages:
- `Uncaught (in promise) AssertionError: 218 deepStrictEqual NaN
Fatal error (java.lang.UnsupportedOperationException): process.exit() is not yet implemented
java.lang.UnsupportedOperationException: process.exit() is not yet implemented
	at dev.elide.lang.javascript.globals.ProcessGlobal.notImplemented`
example test: `test/parallel/test-fs-writev-promises.js`

### 1 × `Uncaught (in promise) AssertionError: Got rejection that did not match expected: AbortError: The operation was aborted Fatal error (java.lang.UnsupportedOperati`

distinct messages:
- `Uncaught (in promise) AssertionError: Got rejection that did not match expected: AbortError: The operation was aborted
Fatal error (java.lang.UnsupportedOperationException): process.exit() is not yet implemented
java.lang.UnsupportedOperationException: process.exit() is not yet implemented
	at dev.e`
example test: `test/parallel/test-fs-promises-file-handle-append-file.js`

### 1 × `Uncaught (in promise) AssertionError: Got rejection that did not match expected: AssertionError: Failed Fatal error (java.lang.UnsupportedOperationException): p`

distinct messages:
- `Uncaught (in promise) AssertionError: Got rejection that did not match expected: AssertionError: Failed
Fatal error (java.lang.UnsupportedOperationException): process.exit() is not yet implemented
java.lang.UnsupportedOperationException: process.exit() is not yet implemented
	at dev.elide.lang.javas`
example test: `test/parallel/test-assert-async.js`

### 1 × `Uncaught (in promise) AssertionError: Got unwanted exception: {} Fatal error (java.lang.UnsupportedOperationException): process.exit() is not yet implemented ja`

distinct messages:
- `Uncaught (in promise) AssertionError: Got unwanted exception: {}
Fatal error (java.lang.UnsupportedOperationException): process.exit() is not yet implemented
java.lang.UnsupportedOperationException: process.exit() is not yet implemented
	at dev.elide.lang.javascript.globals.ProcessGlobal.notImplemen`
example test: `test/parallel/test-fs-write-optional-params.js`

### 1 × `Uncaught (in promise) AssertionError: Got unwanted exception: {} Uncaught (in promise) AssertionError: Got unwanted exception: {} Uncaught (in promise) Assertio`

distinct messages:
- `Uncaught (in promise) AssertionError: Got unwanted exception: {}
Uncaught (in promise) AssertionError: Got unwanted exception: {}
Uncaught (in promise) AssertionError: Got unwanted exception: {}
Uncaught (in promise) AssertionError: Got unwanted exception: {}
Uncaught (in promise) AssertionError: Go`
example test: `test/parallel/test-fs-append-file.js`

### 1 × `Uncaught (in promise) AssertionError: undefined === <n> Uncaught (in promise) AssertionError: undefined === <n> Uncaught (in promise) AssertionError: undefined `

distinct messages:
- `Uncaught (in promise) AssertionError: undefined === 120
Uncaught (in promise) AssertionError: undefined === 120
Uncaught (in promise) AssertionError: undefined === 120
Fatal error (java.lang.UnsupportedOperationException): process.exit() is not yet implemented
java.lang.UnsupportedOperationException`
example test: `test/parallel/test-fs-read-offset-null.js`

### 1 × `Uncaught (in promise) Error: boom Uncaught (in promise) TypeError: Cannot read property <str> of null Fatal error (java.lang.UnsupportedOperationException): pro`

distinct messages:
- `Uncaught (in promise) Error: boom
Uncaught (in promise) TypeError: Cannot read property 'signal' of null
Fatal error (java.lang.UnsupportedOperationException): process.exit() is not yet implemented
java.lang.UnsupportedOperationException: process.exit() is not yet implemented
	at dev.elide.lang.java`
example test: `test/parallel/test-events-once.js`

### 1 × `Uncaught (in promise) Error: ENOENT: no such file or directory, open <str> Fatal error (java.lang.UnsupportedOperationException): process.exit() is not yet impl`

distinct messages:
- `Uncaught (in promise) Error: ENOENT: no such file or directory, open 'unknown'
Fatal error (java.lang.UnsupportedOperationException): process.exit() is not yet implemented
java.lang.UnsupportedOperationException: process.exit() is not yet implemented
	at dev.elide.lang.javascript.globals.ProcessGlob`
example test: `test/parallel/test-fs-filehandle-use-after-close.js`

### 1 × `Uncaught (in promise) Error: ENOENT: no such file or directory, open <str> Uncaught (in promise) Error: ENOENT: no such file or directory, open <str> Fatal erro`

distinct messages:
- `Uncaught (in promise) Error: ENOENT: no such file or directory, open 'unknown'
Uncaught (in promise) Error: ENOENT: no such file or directory, open 'unknown'
Fatal error (java.lang.UnsupportedOperationException): process.exit() is not yet implemented
java.lang.UnsupportedOperationException: process.`
example test: `test/parallel/test-fs-promises-file-handle-dispose.js`

### 1 × `Uncaught (in promise) Error: kaboom Fatal error (java.lang.UnsupportedOperationException): process.exit() is not yet implemented java.lang.UnsupportedOperationE`

distinct messages:
- `Uncaught (in promise) Error: kaboom
Fatal error (java.lang.UnsupportedOperationException): process.exit() is not yet implemented
java.lang.UnsupportedOperationException: process.exit() is not yet implemented
	at dev.elide.lang.javascript.globals.ProcessGlobal.notImplemented(ProcessGlobal.java:596)
	`
example test: `test/parallel/test-stream-catch-rejections.js`

### 1 × `Uncaught (in promise) TypeError: Cannot load module: <str>`

distinct messages:
- `Uncaught (in promise) TypeError: Cannot load module: 'child_process'`
example test: `test/parallel/test-assert-esm-cjs-message-verify.js`

### 1 × `Uncaught (in promise) TypeError: from is not a function Uncaught (in promise) TypeError: from is not a function Uncaught (in promise) TypeError: from is not a f`

distinct messages:
- `Uncaught (in promise) TypeError: from is not a function
Uncaught (in promise) TypeError: from is not a function
Uncaught (in promise) TypeError: from is not a function`
example test: `test/parallel/test-stream-drop-take.js`

### 1 × `Uncaught (in promise) TypeError: path must be a string, Buffer, or file: URL Uncaught (in promise) TypeError: path must be a string, Buffer, or file: URL Uncaug`

distinct messages:
- `Uncaught (in promise) TypeError: path must be a string, Buffer, or file: URL
Uncaught (in promise) TypeError: path must be a string, Buffer, or file: URL
Uncaught (in promise) TypeError: path must be a string, Buffer, or file: URL
Uncaught (in promise) TypeError: path must be a string, Buffer, or fi`
example test: `test/parallel/test-fs-read-stream-file-handle.js`

### 1 × `Uncaught (in promise) TypeError: pipeline: every link must be a Readable on the left and a Writable on the right Fatal error (java.lang.UnsupportedOperationExce`

distinct messages:
- `Uncaught (in promise) TypeError: pipeline: every link must be a Readable on the left and a Writable on the right
Fatal error (java.lang.UnsupportedOperationException): process.exit() is not yet implemented
java.lang.UnsupportedOperationException: process.exit() is not yet implemented
	at dev.elide.l`
example test: `test/parallel/test-stream-pipeline-with-empty-string.js`

### 1 × `Uncaught (in promise) TypeError: read: buffer must be a Buffer or TypedArray Uncaught (in promise) TypeError: Cannot read property <str> of undefined Fatal erro`

distinct messages:
- `Uncaught (in promise) TypeError: read: buffer must be a Buffer or TypedArray
Uncaught (in promise) TypeError: Cannot read property 'byteLength' of undefined
Fatal error (java.lang.UnsupportedOperationException): process.exit() is not yet implemented
java.lang.UnsupportedOperationException: process.e`
example test: `test/parallel/test-fs-read-promises-optional-params.js`

### 1 × `Uncaught (in promise) TypeError: receiver is not an EventEmitter Fatal error (java.lang.UnsupportedOperationException): process.exit() is not yet implemented ja`

distinct messages:
- `Uncaught (in promise) TypeError: receiver is not an EventEmitter
Fatal error (java.lang.UnsupportedOperationException): process.exit() is not yet implemented
java.lang.UnsupportedOperationException: process.exit() is not yet implemented
	at dev.elide.lang.javascript.globals.ProcessGlobal.notImplemen`
example test: `test/parallel/test-eventtarget-once-twice.js`

### 1 × `util.stripVTControlCharacters() is not yet implemented`

distinct messages:
- `util.stripVTControlCharacters() is not yet implemented`
example test: `test/parallel/test-util-stripvtcontrolcharacters.js`

### 1 × `Validating readFile on file /work/.harness/work/node-api/node-test/.tmp.<n>/.removeme-fs-readfile-<n>-1K.txt of length <n> Validating readFile on file /work/.ha`

distinct messages:
- `Validating readFile on file /work/.harness/work/node-api/node-test/.tmp.608/.removeme-fs-readfile-8067-1K.txt of length 1024
Validating readFile on file /work/.harness/work/node-api/node-test/.tmp.608/.removeme-fs-readfile-8067-64K.txt of length 65536
Validating readFile on file /work/.harness/work/`
example test: `test/parallel/test-fs-readfile.js`

## By feature

| count | feature |
|---:|---|
| 225 | node:fs |
| 221 | node:streams |
| 134 | node:worker-threads |
| 98 | node:vm |
| 82 | node:process |
| 73 | node:crypto |
| 61 | node:buffer |
| 49 | node:diagnostics-channel |
| 48 | node:async-hooks |
| 48 | node:timers |
| 46 | node:module-loading |
| 37 | node:events |
| 33 | node:url |
| 30 | node:dns |
| 28 | node:util |
| 18 | node:console |
| 14 | node:assert |
| 7 | node:path |
