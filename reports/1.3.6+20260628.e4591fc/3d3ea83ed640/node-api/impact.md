# Impact-ordered failures

## By root-cause signature

### 417 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: Cannot load module: <str> │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ co`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'node:test'                                   │
│                                                                             │
│ In file test/parallel/test-assert-checktag.js:3:18:       `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'node:test'                                   │
│                                                                             │
│ In file test/parallel/test-assert-if-error.js:5:18:       `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'node:test'                                   │
│                                                                             │
│ In file test/parallel/test-assert-typedarray-deepequal.js:`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'async_hooks'                                 │
│                                                                             │
│ In file test/parallel/test-async-hooks-constructor.js:7:21`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'node:test'                                   │
│                                                                             │
│ In file test/parallel/test-assert-esm-cjs-message-verify.j`
example test: `test/parallel/test-assert-checktag.js`

### 188 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │java.lang.UnsupportedOperationException: util.inspect() is not yet │ │implement`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│java.lang.UnsupportedOperationException: util.inspect() is not yet           │
│implemented                                                                  │
│                                                           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│java.lang.UnsupportedOperationException: util.inspect() is not yet           │
│implemented                                                                  │
│                                                           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│java.lang.UnsupportedOperationException: util.inspect() is not yet           │
│implemented                                                                  │
│                                                           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│java.lang.UnsupportedOperationException: util.inspect() is not yet           │
│implemented                                                                  │
│                                                           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│java.lang.UnsupportedOperationException: util.inspect() is not yet           │
│implemented                                                                  │
│                                                           `
example test: `test/parallel/test-assert-async.js`

### 111 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │SyntaxError: Variable <str> has already been declared │ │ │ │ In file <loc>: │ `

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│SyntaxError: Variable "Buffer" has already been declared                     │
│                                                                             │
│ In file test/parallel/test-buffer-alloc.js:1:1:           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│SyntaxError: Variable "Buffer" has already been declared                     │
│                                                                             │
│ In file test/parallel/test-buffer-bytelength.js:1:1:      `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│SyntaxError: Variable "Buffer" has already been declared                     │
│                                                                             │
│ In file test/parallel/test-buffer-failed-alloc-typed-array`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│SyntaxError: Variable "Buffer" has already been declared                     │
│                                                                             │
│ In file test/parallel/test-buffer-isascii.js:1:1:         `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│SyntaxError: Variable "Buffer" has already been declared                     │
│                                                                             │
│ In file test/parallel/test-buffer-isutf8.js:1:1:          `
example test: `test/parallel/test-buffer-alloc.js`

### 65 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: Cannot load module: <str> │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ │ `

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

### 40 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │java.lang.UnsupportedOperationException: util.getCallSites() is not yet │ │impl`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│java.lang.UnsupportedOperationException: util.getCallSites() is not yet      │
│implemented                                                                  │
│                                                           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│java.lang.UnsupportedOperationException: util.getCallSites() is not yet      │
│implemented                                                                  │
│                                                           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│java.lang.UnsupportedOperationException: util.getCallSites() is not yet      │
│implemented                                                                  │
│                                                           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│java.lang.UnsupportedOperationException: util.getCallSites() is not yet      │
│implemented                                                                  │
│                                                           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│java.lang.UnsupportedOperationException: util.getCallSites() is not yet      │
│implemented                                                                  │
│                                                           `
example test: `test/parallel/test-buffer-nopendingdep-map.js`

### 37 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: Got unwanted exception: {} │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: Got unwanted exception: {}                                   │
│                                                                             │
│ In file test/parallel/test-buffer-concat.js:49:3:         `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: Got unwanted exception: {}                                   │
│                                                                             │
│ In file test/parallel/test-buffer-no-negative-allocation.j`
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
example test: `test/parallel/test-buffer-concat.js`

### 34 × `╭─────────────────────────────────────────────────────────────────────────────╮ │Error: ENOTEMPTY: directory not empty, rm │ │<str> │ │ │ │ In file <loc>: │ │ ╭`

distinct messages:
- `╭─────────────────────────────────────────────────────────────────────────────╮
│Error: ENOTEMPTY: directory not empty, rm                                    │
│'/work/.harness/work/node-api/node-test/.tmp.0'                              │
│                                                           `
- `╭─────────────────────────────────────────────────────────────────────────────╮
│Error: ENOTEMPTY: directory not empty, rm                                    │
│'/work/.harness/work/node-api/node-test/.tmp.0'                              │
│                                                           `
- `╭─────────────────────────────────────────────────────────────────────────────╮
│Error: ENOTEMPTY: directory not empty, rm                                    │
│'/work/.harness/work/node-api/node-test/.tmp.0'                              │
│                                                           `
- `╭─────────────────────────────────────────────────────────────────────────────╮
│Error: ENOTEMPTY: directory not empty, rm                                    │
│'/work/.harness/work/node-api/node-test/.tmp.0'                              │
│                                                           `
- `╭─────────────────────────────────────────────────────────────────────────────╮
│Error: ENOTEMPTY: directory not empty, rm                                    │
│'/work/.harness/work/node-api/node-test/.tmp.0'                              │
│                                                           `
example test: `test/parallel/test-fs-chmod-mask.js`

### 22 × `╭─────────────────────────────────────────────────────────────────────────────╮ │Error: ENOENT: no such file or directory, rm │ │<str> │ │ │ │ In file <loc>: │ `

distinct messages:
- `╭─────────────────────────────────────────────────────────────────────────────╮
│Error: ENOENT: no such file or directory, rm                                 │
│'/work/.harness/work/node-api/node-test/.tmp.0'                              │
│                                                           `
- `╭─────────────────────────────────────────────────────────────────────────────╮
│Error: ENOENT: no such file or directory, rm                                 │
│'/work/.harness/work/node-api/node-test/.tmp.0'                              │
│                                                           `
- `╭─────────────────────────────────────────────────────────────────────────────╮
│Error: ENOENT: no such file or directory, rm                                 │
│'/work/.harness/work/node-api/node-test/.tmp.0'                              │
│                                                           `
- `╭─────────────────────────────────────────────────────────────────────────────╮
│Error: ENOENT: no such file or directory, rm                                 │
│'/work/.harness/work/node-api/node-test/.tmp.0'                              │
│                                                           `
- `╭─────────────────────────────────────────────────────────────────────────────╮
│Error: ENOENT: no such file or directory, rm                                 │
│'/work/.harness/work/node-api/node-test/.tmp.0'                              │
│                                                           `
example test: `test/parallel/test-fs-link.js`

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
│ In file test/parallel/test-fs-watch-recursive-add-file-wit`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: setTimeout is not defined                                    │
│                                                                             │
│ In file test/parallel/test-fs-watch-recursive-assert-leaks`
example test: `test/parallel/test-eventtarget-memoryleakwarning.js`

### 17 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: Cannot read property <str> of undefined │ │ │ │ In file <loc>: │ │ ╭`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot read property 'hasOwnProperty' of undefined                │
│                                                                             │
│ In file test/parallel/test-event-emitter-special-event-nam`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot read property 'prototype' of undefined                     │
│                                                                             │
│ In file test/parallel/test-fs-read-stream-patch-open.js:5:`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot read property 'prototype' of undefined                     │
│                                                                             │
│ In file test/parallel/test-fs-stream-construct-compat-grac`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot read property 'slice' of undefined                         │
│                                                                             │
│ In file test/parallel/test-module-children.js:2:18:       `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot read property 'has' of undefined                           │
│                                                                             │
│ In file test/parallel/test-process-env-allowed-flags.js:36`
example test: `test/parallel/test-event-emitter-special-event-names.js`

### 16 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: Missing expected exception │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: Missing expected exception                                   │
│                                                                             │
│ In file test/parallel/test-buffer-readint.js:17:7:        `
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
│ In file test/parallel/test-buffer-writeuint.js:21:7:      `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: Missing expected exception                                   │
│                                                                             │
│ In file test/parallel/test-dns-setservers-type-check.js:26`
example test: `test/parallel/test-buffer-readint.js`

### 14 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │java.lang.UnsupportedOperationException: process.nextTick() is not yet │ │imple`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│java.lang.UnsupportedOperationException: process.nextTick() is not yet       │
│implemented                                                                  │
│                                                           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│java.lang.UnsupportedOperationException: process.nextTick() is not yet       │
│implemented                                                                  │
│                                                           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│java.lang.UnsupportedOperationException: process.nextTick() is not yet       │
│implemented                                                                  │
│                                                           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│java.lang.UnsupportedOperationException: process.nextTick() is not yet       │
│implemented                                                                  │
│                                                           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│java.lang.UnsupportedOperationException: process.nextTick() is not yet       │
│implemented                                                                  │
│                                                           `
example test: `test/parallel/test-events-once.js`

### 13 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: Cannot load module: <str> │ │ │ │ In file test/parallel/test-diagnos`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'node:diagnostics_channel'                    │
│                                                                             │
│ In file test/parallel/test-diagnostics-channel-bounded-cha`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'async_hooks'                                 │
│                                                                             │
│ In file test/parallel/test-diagnostics-channel-tracing-cha`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'diagnostics_channel'                         │
│                                                                             │
│ In file test/parallel/test-diagnostics-channel-tracing-cha`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'diagnostics_channel'                         │
│                                                                             │
│ In file test/parallel/test-diagnostics-channel-tracing-cha`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'diagnostics_channel'                         │
│                                                                             │
│ In file test/parallel/test-diagnostics-channel-tracing-cha`
example test: `test/parallel/test-diagnostics-channel-bounded-channel-run-transform-error.js`

### 12 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: Cannot load module: <str> │ │ │ │ In file <loc>│ │ ╭─ │ │ <n> │ cons`

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
│TypeError: Cannot load module: 'diagnostics_channel'                         │
│                                                                             │
│ In file test/parallel/test-diagnostics-channel-object-chan`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'diagnostics_channel'                         │
│                                                                             │
│ In file test/parallel/test-diagnostics-channel-safe-subscr`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'diagnostics_channel'                         │
│                                                                             │
│ In file test/parallel/test-diagnostics-channel-tracing-cha`
example test: `test/parallel/test-async-hooks-enable-before-promise-resolve.js`

### 11 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: Cannot load module: <str> │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ re`

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
│TypeError: Cannot load module: 'node:test'                                   │
│                                                                             │
│ In file test/parallel/test-fs-stat-abort-test.js:4:14:    `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'vm'                                          │
│                                                                             │
│ In file test/parallel/test-vm-data-property-writable.js:5:`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'vm'                                          │
│                                                                             │
│ In file test/parallel/test-vm-ownkeys.js:4:12:            `
example test: `test/parallel/test-async-hooks-vm-gc.js`

### 9 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │java.lang.UnsupportedOperationException: path.resolve() is not yet │ │implement`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│java.lang.UnsupportedOperationException: path.resolve() is not yet           │
│implemented                                                                  │
│                                                           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│java.lang.UnsupportedOperationException: path.resolve() is not yet           │
│implemented                                                                  │
│                                                           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│java.lang.UnsupportedOperationException: path.resolve() is not yet           │
│implemented                                                                  │
│                                                           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│java.lang.UnsupportedOperationException: path.resolve() is not yet           │
│implemented                                                                  │
│                                                           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│java.lang.UnsupportedOperationException: path.resolve() is not yet           │
│implemented                                                                  │
│                                                           `
example test: `test/parallel/test-fs-existssync-false.js`

### 9 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │java.lang.UnsupportedOperationException: path.win32 is not yet implemented │ │ `

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│java.lang.UnsupportedOperationException: path.win32 is not yet implemented   │
│                                                                             │
│ In file test/parallel/test-path-isabsolute.js             `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│java.lang.UnsupportedOperationException: path.win32 is not yet implemented   │
│                                                                             │
│ In file test/parallel/test-path-glob.js                   `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│java.lang.UnsupportedOperationException: path.win32 is not yet implemented   │
│                                                                             │
│ In file test/parallel/test-path-extname.js                `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│java.lang.UnsupportedOperationException: path.win32 is not yet implemented   │
│                                                                             │
│ In file test/parallel/test-path-join.js                   `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│java.lang.UnsupportedOperationException: path.win32 is not yet implemented   │
│                                                                             │
│ In file test/parallel/test-path-normalize.js              `
example test: `test/parallel/test-path-isabsolute.js`

### 8 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: (intermediate value).on is not a function │ │ │ │ In file <loc>: │ │`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: (intermediate value).on is not a function                         │
│                                                                             │
│ In file test/parallel/test-event-emitter-num-args.js:52:1:`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: (intermediate value).on is not a function                         │
│                                                                             │
│ In file test/parallel/test-process-exit-recursive.js:29:1:`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: (intermediate value).on is not a function                         │
│                                                                             │
│ In file test/parallel/test-process-exit.js:29:1:          `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: (intermediate value).on is not a function                         │
│                                                                             │
│ In file test/parallel/test-stream-push-order.js:49:1:     `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: (intermediate value).on is not a function                         │
│                                                                             │
│ In file test/parallel/test-stream-push-strings.js:63:1:   `
example test: `test/parallel/test-event-emitter-num-args.js`

### 8 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: Cannot load module: <str> │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ te`

distinct messages:
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
│ In file test/parallel/test-stream-iter-consumers-tap.js:16`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'stream/iter'                                 │
│                                                                             │
│ In file test/parallel/test-stream-iter-readable-interop.js`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'stream/iter'                                 │
│                                                                             │
│ In file test/parallel/test-stream-iter-share-coverage.js:2`
example test: `test/parallel/test-stream-iter-broadcast-coverage.js`

### 8 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: Cannot load module: <str> │ │ │ │ In file <loc>:│ │ ╭─ │ │ <n> │ con`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'async_hooks'                                 │
│                                                                             │
│ In file test/parallel/test-async-hooks-recursive-stack-run`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'child_process'                               │
│                                                                             │
│ In file test/parallel/test-async-hooks-stack-overflow-nest`
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
example test: `test/parallel/test-async-hooks-recursive-stack-runInAsyncScope.js`

### 8 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: process.on is not a function │ │ │ │ In file <loc>: │ │ ╭─ │ │─ Stac`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: process.on is not a function                                      │
│                                                                             │
│ In file test/parallel/test-buffer-constructor-deprecation-`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: process.on is not a function                                      │
│                                                                             │
│ In file test/parallel/test-buffer-pending-deprecation.js:7`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: process.on is not a function                                      │
│                                                                             │
│ In file test/parallel/test-module-loading-deprecated.js:77`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: process.on is not a function                                      │
│                                                                             │
│ In file test/parallel/test-module-circular-dependency-warn`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: process.on is not a function                                      │
│                                                                             │
│ In file test/parallel/test-module-parent-deprecation.js:77`
example test: `test/parallel/test-buffer-constructor-deprecation-error.js`

### 8 × `Node API test timed out`

distinct messages:
- `Node API test timed out`
example test: `test/parallel/test-fs-read-stream-fd-leak.js`

### 6 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: assert is not a function │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ // `

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: assert is not a function                                          │
│                                                                             │
│ In file test/parallel/test-fs-mkdir-rmdir.js:12:1:        `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: assert is not a function                                          │
│                                                                             │
│ In file test/parallel/test-module-version.js:6:1:         `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: assert is not a function                                          │
│                                                                             │
│ In file test/parallel/test-process-config.js:34:1:        `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: assert is not a function                                          │
│                                                                             │
│ In file test/parallel/test-stream-duplex-writable-finished`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: assert is not a function                                          │
│                                                                             │
│ In file test/parallel/test-stream-readable-ended.js:10:3: `
example test: `test/parallel/test-fs-mkdir-rmdir.js`

### 5 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: <str> === <str> │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ │ │→ <n`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: 'undefined' === 'number'                                     │
│                                                                             │
│ In file test/parallel/test-buffer-constants.js:8:1:       `
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
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: 'abc' === 'abcde'                                            │
│                                                                             │
│ In file test/parallel/test-stream2-read-correct-num-bytes-`
example test: `test/parallel/test-buffer-constants.js`

### 5 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │java.lang.UnsupportedOperationException: util.promisify() is not yet │ │impleme`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│java.lang.UnsupportedOperationException: util.promisify() is not yet         │
│implemented                                                                  │
│                                                           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│java.lang.UnsupportedOperationException: util.promisify() is not yet         │
│implemented                                                                  │
│                                                           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│java.lang.UnsupportedOperationException: util.promisify() is not yet         │
│implemented                                                                  │
│                                                           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│java.lang.UnsupportedOperationException: util.promisify() is not yet         │
│implemented                                                                  │
│                                                           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│java.lang.UnsupportedOperationException: util.promisify() is not yet         │
│implemented                                                                  │
│                                                           `
example test: `test/parallel/test-async-hooks-execution-async-resource-await.js`

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
│ In file test/parallel/test-worker-message-port-jstransfera`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│SyntaxError: Variable "MessageChannel" has already been declared             │
│                                                                             │
│ In file test/parallel/test-worker-message-port-multiple-sh`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│SyntaxError: Variable "MessageChannel" has already been declared             │
│                                                                             │
│ In file test/parallel/test-worker-message-port-transfer-fa`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│SyntaxError: Variable "MessageChannel" has already been declared             │
│                                                                             │
│ In file test/parallel/test-worker-message-transfer-port-ma`
example test: `test/parallel/test-worker-message-port-jstransferable-nested-untransferable.js`

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
│ In file test/parallel/test-vm-measure-memory-lazy.js:9:12:`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'vm'                                          │
│                                                                             │
│ In file test/parallel/test-vm-measure-memory-multi-context`
example test: `test/parallel/test-process-really-exit.js`

### 5 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: Readable.from is not a function │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Readable.from is not a function                                   │
│                                                                             │
│ In file test/parallel/test-stream-forEach.js:12:18:       `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Readable.from is not a function                                   │
│                                                                             │
│ In file test/parallel/test-stream-readable-compose.js:13:1`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Readable.from is not a function                                   │
│                                                                             │
│ In file test/parallel/test-stream-readable-next-no-null.js`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Readable.from is not a function                                   │
│                                                                             │
│ In file test/parallel/test-stream-readable-from-web-termin`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Readable.from is not a function                                   │
│                                                                             │
│ In file test/parallel/test-stream-readable-to-web-terminat`
example test: `test/parallel/test-stream-forEach.js`

### 4 × `[EventLoop] external task threw: Error: ENOENT: no such file or directory, open <str> <loc>.runtime.UserScriptException: Error: ENOENT: no such file or director`

distinct messages:
- `[EventLoop] external task threw: Error: ENOENT: no such file or directory, open 'unknown'
com.oracle.truffle.js.runtime.UserScriptException: Error: ENOENT: no such file or directory, open 'unknown'`
- `[EventLoop] external task threw: Error: ENOENT: no such file or directory, open '/work/.harness/work/node-api/node-test/.tmp.0/out.txt'
com.oracle.truffle.js.runtime.UserScriptException: Error: ENOENT: no such file or directory, open '/work/.harness/work/node-api/node-test/.tmp.0/out.txt'`
example test: `test/parallel/test-fs-read-stream-double-close.js`

### 4 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │java.lang.UnsupportedOperationException: process.stdout is not yet │ │implement`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│java.lang.UnsupportedOperationException: process.stdout is not yet           │
│implemented                                                                  │
│                                                           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│java.lang.UnsupportedOperationException: process.stdout is not yet           │
│implemented                                                                  │
│                                                           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│java.lang.UnsupportedOperationException: process.stdout is not yet           │
│implemented                                                                  │
│                                                           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│java.lang.UnsupportedOperationException: process.stdout is not yet           │
│implemented                                                                  │
│                                                           `
example test: `test/parallel/test-console-clear.js`

### 4 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │SyntaxError: <loc> Invalid return statement return;│ │^ <loc> Expected eof but `

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│SyntaxError: test-crypto-encap-decap.js:16:2 Invalid return statement return;│
│^ test-crypto-encap-decap.js:17:0 Expected eof but found } } ^               │
│                                                           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│SyntaxError: test-crypto-secure-heap.js:60:2 Invalid return statement return;│
│^ test-crypto-secure-heap.js:61:0 Expected eof but found } } ^               │
│                                                           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│SyntaxError: test-fs-mkdir-mode-mask.js:11:2 Invalid return statement return;│
│^ test-fs-mkdir-mode-mask.js:12:0 Expected eof but found } } ^               │
│                                                           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│SyntaxError: test-fs-syncwritestream.js:20:2 Invalid return statement return;│
│^ test-fs-syncwritestream.js:21:0 Expected eof but found } } ^               │
│                                                           `
example test: `test/parallel/test-crypto-encap-decap.js`

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

### 4 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: assert is not a function │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ │ │`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: assert is not a function                                          │
│                                                                             │
│ In file test/parallel/test-buffer-includes.js:12:1:       `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: assert is not a function                                          │
│                                                                             │
│ In file test/parallel/test-buffer-safe-unsafe.js:14:1:    `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: assert is not a function                                          │
│                                                                             │
│ In file test/parallel/test-process-prototype.js:8:1:      `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: assert is not a function                                          │
│                                                                             │
│ In file test/parallel/test-whatwg-url-custom-searchparams.`
example test: `test/parallel/test-buffer-includes.js`

### 4 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: Constructor Readable requires <str> │ │ │ │ In file <loc>: │ │ ╭─ │ `

distinct messages:
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
example test: `test/parallel/test-stream-pipe-unpipe-streams.js`

### 4 × `╭─────────────────────────────────────────────────────────────────────────────╮ │Error: Readable.wrap() is not implemented │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n>`

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
example test: `test/parallel/test-stream2-readable-wrap-empty.js`

### 3 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: false == true │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ buffer.wr`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: false == true                                                │
│                                                                             │
│ In file test/parallel/test-buffer-writefloat.js:12:1:     `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: false == true                                                │
│                                                                             │
│ In file test/parallel/test-buffer-writeint.js:20:3:       `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: false == true                                                │
│                                                                             │
│ In file test/parallel/test-buffer-writedouble.js:12:1:    `
example test: `test/parallel/test-buffer-writefloat.js`

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
│SyntaxError: test-process-euid-egid.js:13:2 Invalid return statement return; │
│^ test-process-euid-egid.js:14:0 Expected eof but found } } ^                │
│                                                           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│SyntaxError: test-process-exit-code.js:37:4 Invalid return statement return; │
│^ test-process-exit-code.js:38:2 Expected eof but found } } ^                │
│                                                           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│SyntaxError: test-process-initgroups.js:7:2 Invalid return statement return; │
│^ test-process-initgroups.js:8:0 Expected eof but found } } ^                │
│                                                           `
example test: `test/parallel/test-process-euid-egid.js`

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

### 3 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: (intermediate value).getActiveResourcesInfo is not a function │ │ │ `

distinct messages:
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
│ In file test/parallel/test-process-getactiveresources.js:9`
example test: `test/parallel/test-process-getactiveresources-track-interval-lifetime.js`

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
│ In file test/parallel/test-stream-iter-to-readable.js:17:5`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'stream/iter'                                 │
│                                                                             │
│ In file test/parallel/test-stream-iter-writable-from.js:13`
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

### 3 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: Console is not a constructor │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Console is not a constructor                                      │
│                                                                             │
│ In file test/parallel/test-console-log-throw-primitive.js:`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Console is not a constructor                                      │
│                                                                             │
│ In file test/parallel/test-console-log-stdio-broken-dest.j`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Console is not a constructor                                      │
│                                                                             │
│ In file test/parallel/test-console-tty-colors-per-stream.j`
example test: `test/parallel/test-console-log-throw-primitive.js`

### 3 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: Creating Buffer instances is not allowed │ │ │ │ In file <loc>: │ │ `

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Creating Buffer instances is not allowed                          │
│                                                                             │
│ In file test/parallel/test-buffer-parent-property.js:11:8:`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Creating Buffer instances is not allowed                          │
│                                                                             │
│ In file test/parallel/test-buffer-slice.js:28:20:         `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Creating Buffer instances is not allowed                          │
│                                                                             │
│ In file test/parallel/test-buffer-zero-fill.js:7:14:      `
example test: `test/parallel/test-buffer-parent-property.js`

### 3 × `╭─────────────────────────────────────────────────────────────────────────────╮ │Error: ENOENT: no such file or directory, open <str> │ │ │ │ In file <loc>: │ │`

distinct messages:
- `╭─────────────────────────────────────────────────────────────────────────────╮
│Error: ENOENT: no such file or directory, open 'unknown'                     │
│                                                                             │
│ In file test/parallel/test-fs-close.js:8:12:              `
- `╭─────────────────────────────────────────────────────────────────────────────╮
│Error: ENOENT: no such file or directory, open 'unknown'                     │
│                                                                             │
│ In file test/parallel/test-fs-open.js:39:1:               `
- `╭─────────────────────────────────────────────────────────────────────────────╮
│Error: ENOENT: no such file or directory, open 'unknown'                     │
│                                                                             │
│ In file test/parallel/test-fs-readfile-zero-byte-liar.js:3`
example test: `test/parallel/test-fs-close.js`

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

### 2 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │java.lang.IllegalStateException: Cannot load module: │ │<str> │ │ │ │ In file <`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│java.lang.IllegalStateException: Cannot load module:                         │
│'/work/.harness/work/node-api/node-test/.tmp.0/index'                        │
│                                                           `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│java.lang.IllegalStateException: Cannot load module:                         │
│'/work/.harness/work/node-api/node-test/.tmp.0/中文目录'                     │
│                                                               `
example test: `test/parallel/test-module-circular-symlinks.js`

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

### 2 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │SyntaxError: <loc> Expected ; but found │ │filehandle await using filehandle = `

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│SyntaxError: test-fs-read-offset-null.js:40:14 Expected ; but found          │
│filehandle await using filehandle = await fsPromises.open(filepath, 'r'); ^  │
│test-fs-read-offset-null.js:48:14 Expected ; but found file`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│SyntaxError: test-fs-read-empty-buffer.js:32:14 Expected ; but found         │
│filehandle await using filehandle = await fsPromises.open(filepath, 'r'); ^  │
│                                                           `
example test: `test/parallel/test-fs-read-offset-null.js`

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
│ In file test/parallel/test-process-binding-util.js:6:21:  `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: (intermediate value).binding is not a function                    │
│                                                                             │
│ In file test/parallel/test-process-binding-internalbinding`
example test: `test/parallel/test-process-binding-util.js`

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

### 2 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: Cannot load module: <str> │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ by`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'stream/iter'                                 │
│                                                                             │
│ In file test/parallel/test-stream-iter-from-coverage.js:14`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'stream/iter'                                 │
│                                                                             │
│ In file test/parallel/test-stream-iter-transform-errors.js`
example test: `test/parallel/test-stream-iter-from-coverage.js`

### 2 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: Cannot load module: <str> │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ Fi`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'internal/fs/promises'                        │
│                                                                             │
│ In file test/parallel/test-fs-promises-file-handle-close-e`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'internal/fs/promises'                        │
│                                                                             │
│ In file test/parallel/test-fs-promises-file-handle-op-erro`
example test: `test/parallel/test-fs-promises-file-handle-close-errors.js`

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

### 2 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: Cannot load module: <str> │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ wo`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'node:worker_threads'                         │
│                                                                             │
│ In file test/parallel/test-worker-messaging-errors-invalid`
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'node:worker_threads'                         │
│                                                                             │
│ In file test/parallel/test-worker-messaging-errors-handler`
example test: `test/parallel/test-worker-messaging-errors-invalid.js`

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

### 2 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: Stream is not a constructor │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ `

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Stream is not a constructor                                       │
│                                                                             │
│ In file test/parallel/test-console-instance.js:29:13:     `
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Stream is not a constructor                                       │
│                                                                             │
│ In file test/parallel/test-stream-pipe-error-handling.js:2`
example test: `test/parallel/test-console-instance.js`

### 2 × `Uncaught (in promise) Error: ENOENT: no such file or directory, open <str>`

distinct messages:
- `Uncaught (in promise) Error: ENOENT: no such file or directory, open 'unknown'`
- `Uncaught (in promise) Error: ENOENT: no such file or directory, open '/work/.harness/work/node-api/node-test/.tmp.0/truncate-file.txt'`
example test: `test/parallel/test-fs-filehandle-use-after-close.js`

### 2 × `Uncaught (in promise) TypeError: Cannot load module: <str>`

distinct messages:
- `Uncaught (in promise) TypeError: Cannot load module: 'child_process'`
example test: `test/parallel/test-stream-iter-disabled.js`

### 2 × `Uncaught (in promise) TypeError: Readable.from is not a function`

distinct messages:
- `Uncaught (in promise) TypeError: Readable.from is not a function`
example test: `test/parallel/test-stream-toArray.js`

### 1 × `[EventLoop] external task threw: Unexpected values provided for JSCollectionsNormalizeNodeGen@45463d97: [[B@ea3725d], [byte[]] com.oracle.truffle.api.dsl.Unsupp`

distinct messages:
- `[EventLoop] external task threw: Unexpected values provided for JSCollectionsNormalizeNodeGen@45463d97: [[B@ea3725d], [byte[]]
com.oracle.truffle.api.dsl.UnsupportedSpecializationException: Unexpected values provided for JSCollectionsNormalizeNodeGen@45463d97: [[B@ea3725d], [byte[]]
	at com.oracle.t`
example test: `test/parallel/test-fs-read-stream-concurrent-reads.js`

### 1 × `[object Object] ╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: Cannot perform <str> on a proxy that has been revoke`

distinct messages:
- `[object Object]
╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot perform 'get' on a proxy that has been revoked             │
│                                                                             │
│ In file test/parallel/test-console-issue-4`
example test: `test/parallel/test-console-issue-43095.js`

### 1 × `/work/.harness/work/node-api/node-test/.tmp.<n> ╭─────────────────────────────────────────────────────────────────────────────╮ │Error: ENOTEMPTY: directory not`

distinct messages:
- `/work/.harness/work/node-api/node-test/.tmp.0
╭─────────────────────────────────────────────────────────────────────────────╮
│Error: ENOTEMPTY: directory not empty, rm                                    │
│'/work/.harness/work/node-api/node-test/.tmp.0'                              │
│             `
example test: `test/parallel/test-fs-writesync-crash.js`

### 1 × `# decode=true uncork=true multi=true ╭─ Script Error ──────────────────────────────────────────────────────────────╮ │java.lang.UnsupportedOperationException: u`

distinct messages:
- `# decode=true uncork=true multi=true
╭─ Script Error ──────────────────────────────────────────────────────────────╮
│java.lang.UnsupportedOperationException: util.getCallSites() is not yet      │
│implemented                                                                  │
│                      `
example test: `test/parallel/test-stream-writev.js`

### 1 × `<n>/<n>/<n>, <n><loc> PM start test ╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: Cannot read property <str> of un`

distinct messages:
- `6/28/2026, 11:56:38 PM start test
╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot read property 'prototype' of undefined                     │
│                                                                             │
│ In file test/parallel/te`
example test: `test/parallel/test-fs-stream-construct-compat-error-write.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │A context-aware API was called but no context is active │ │ │ │ In file <loc> │`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│A context-aware API was called but no context is active                      │
│                                                                             │
│ In file test/parallel/test-dns-lookupService-promises.js  `
example test: `test/parallel/test-dns-lookupService-promises.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: [] deepStrictEqual [<str>, <str>, <str>, <str>,│ │<str>, …] │ │`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: [] deepStrictEqual ['toString', 'href', 'origin', 'protocol',│
│'username', …]                                                               │
│                                                           `
example test: `test/parallel/test-whatwg-url-custom-properties.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: {} === {} │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ // Sanity che`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: {} === {}                                                    │
│                                                                             │
│ In file test/parallel/test-event-emitter-add-listeners.js:`
example test: `test/parallel/test-event-emitter-add-listeners.js`

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

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: <n> === <n> │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ │ │→ <n> │ `

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: 0 === 10                                                     │
│                                                                             │
│ In file test/parallel/test-stream2-transform.js:45:3:     `
example test: `test/parallel/test-stream2-transform.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: <n> === <n> │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ assert.deep`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: 0 === 2                                                      │
│                                                                             │
│ In file test/parallel/test-buffer-badhex.js:10:3:         `
example test: `test/parallel/test-buffer-badhex.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: <n> === <n> │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ const strea`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: 1 === 0                                                      │
│                                                                             │
│ In file test/parallel/test-stream-event-names.js:9:3:     `
example test: `test/parallel/test-stream-event-names.js`

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

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: <str>│ │=== <str> │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ resul`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: '/work/.harness/work/node-api/node-api-overlay/test/fixtures'│
│=== '眯牯⽫栮牡敮獳眯牯⽫潮敤愭楰港摯ⵥ灡⵩癯牥慬⽹整瑳是硩畴敲�'              │
│                                                                             │
│ In fi`
example test: `test/parallel/test-fs-realpath-buffer-encoding.js`

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

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: Got unwanted exception: {} │ │ │ │ In file <loc>:│ │ ╭─ │ │ <n>`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: Got unwanted exception: {}                                   │
│                                                                             │
│ In file test/parallel/test-whatwg-url-custom-searchparams-`
example test: `test/parallel/test-whatwg-url-custom-searchparams-stringifier.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: true === false │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ }); │ │→`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: true === false                                               │
│                                                                             │
│ In file test/parallel/test-stream-duplex-readable-writable`
example test: `test/parallel/test-stream-duplex-readable-writable.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: undefined !== undefined │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: undefined !== undefined                                      │
│                                                                             │
│ In file test/parallel/test-fs-write.js:45:1:              `
example test: `test/parallel/test-fs-write.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: undefined === [B@8d54430 │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> `

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: undefined === [B@8d54430                                     │
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

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: undefined === <str> │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ pro`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: undefined === 'undefined'                                    │
│                                                                             │
│ In file test/parallel/test-process-env-delete.js:8:1:     `
example test: `test/parallel/test-process-env-delete.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: undefined === false │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ fun`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: undefined === false                                          │
│                                                                             │
│ In file test/parallel/test-stream-readable-didRead.js:9:3:`
example test: `test/parallel/test-stream-readable-didRead.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │AssertionError: undefined === true │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ }); `

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│AssertionError: undefined === true                                           │
│                                                                             │
│ In file test/parallel/test-stream-duplex-end.js:11:3:     `
example test: `test/parallel/test-stream-duplex-end.js`

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

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │java.lang.UnsupportedOperationException: process.stderr is not yet │ │implement`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│java.lang.UnsupportedOperationException: process.stderr is not yet           │
│implemented                                                                  │
│                                                           `
example test: `test/parallel/test-console-table.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │java.lang.UnsupportedOperationException: process.uptime() is not yet │ │impleme`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│java.lang.UnsupportedOperationException: process.uptime() is not yet         │
│implemented                                                                  │
│                                                           `
example test: `test/parallel/test-process-uptime.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │java.lang.UnsupportedOperationException: util.format() is not yet implemented│ `

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│java.lang.UnsupportedOperationException: util.format() is not yet implemented│
│                                                                             │
│ In file test/parallel/test-util-format.js                 `
example test: `test/parallel/test-util-format.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │java.lang.UnsupportedOperationException: util.inherits() is not yet │ │implemen`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│java.lang.UnsupportedOperationException: util.inherits() is not yet          │
│implemented                                                                  │
│                                                           `
example test: `test/parallel/test-util-inherits.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │java.lang.UnsupportedOperationException: util.parseEnv() is not yet │ │implemen`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│java.lang.UnsupportedOperationException: util.parseEnv() is not yet          │
│implemented                                                                  │
│                                                           `
example test: `test/parallel/test-util-parse-env.js`

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
│ In file test/parallel/test-dns-setlocaladdress.js         `
example test: `test/parallel/test-dns-setlocaladdress.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │SyntaxError: <eval><loc> Expected an operand but found % │ │%PrepareFunctionFor`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│SyntaxError: <eval>:1:0 Expected an operand but found %                      │
│%PrepareFunctionForOptimization(Buffer.prototype.swap16) ^                   │
│                                                           `
example test: `test/parallel/test-buffer-swap-fast.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │SyntaxError: <loc> │ │Expected ; but found outer using outer = boundedChannel.w`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│SyntaxError: test-diagnostics-channel-bounded-channel-scope-nested.js:23:10  │
│Expected ; but found outer using outer = boundedChannel.withScope({ id:      │
│'outer' }); ^ test-diagnostics-channel-bounded-channel-scop`
example test: `test/parallel/test-diagnostics-channel-bounded-channel-scope-nested.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │SyntaxError: <loc> │ │Expected ; but found scope using scope = boundedChannel.w`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│SyntaxError: test-diagnostics-channel-bounded-channel-scope-error.js:26:10   │
│Expected ; but found scope using scope = boundedChannel.withScope(context); ^│
│test-diagnostics-channel-bounded-channel-scope-error.js:59:`
example test: `test/parallel/test-diagnostics-channel-bounded-channel-scope-error.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │SyntaxError: <loc> cannot delete identifier <str> in │ │strict mode delete a; ^`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│SyntaxError: test-vm-not-strict.js:11:0 cannot delete identifier "a" in      │
│strict mode delete a; ^                                                      │
│                                                           `
example test: `test/parallel/test-vm-not-strict.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │SyntaxError: <loc> Expected ; │ │but found scope using scope = channel.withStor`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│SyntaxError: test-diagnostics-channel-run-stores-scope.js:25:10 Expected ;   │
│but found scope using scope = channel.withStoreScope({ value: 'test' }); ^   │
│test-diagnostics-channel-run-stores-scope.js:25:58 Expected`
example test: `test/parallel/test-diagnostics-channel-run-stores-scope.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │SyntaxError: <loc> Expected ; but │ │found fh await using fh = await open(fileP`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│SyntaxError: test-fs-promises-file-handle-writer.js:411:16 Expected ; but    │
│found fh await using fh = await open(filePath, 'w'); ^                       │
│test-fs-promises-file-handle-writer.js:412:16 Expected ; bu`
example test: `test/parallel/test-fs-promises-file-handle-writer.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │SyntaxError: <loc> Expected ; but │ │found fileHandle await using fileHandle = `

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│SyntaxError: test-fs-promises-file-handle-readFile.js:25:14 Expected ; but   │
│found fileHandle await using fileHandle = await open(filePath, 'w+'); ^      │
│test-fs-promises-file-handle-readFile.js:47:14 Expected ; b`
example test: `test/parallel/test-fs-promises-file-handle-readFile.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │SyntaxError: <loc> Expected ; but │ │found handle await using handle = await op`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│SyntaxError: test-fs-promises-readfile-buffer-option.js:72:16 Expected ; but │
│found handle await using handle = await open(file, 'r'); ^                   │
│test-fs-promises-readfile-buffer-option.js:80:2 Expected ) `
example test: `test/parallel/test-fs-promises-readfile-buffer-option.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │SyntaxError: <loc> Expected ; but │ │found openHandle await using openHandle = `

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│SyntaxError: test-fs-promises-file-handle-dispose.js:28:16 Expected ; but    │
│found openHandle await using openHandle = await fs.open(__filename); ^       │
│test-fs-promises-file-handle-dispose.js:36:4 await is only `
example test: `test/parallel/test-fs-promises-file-handle-dispose.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │SyntaxError: <loc> Expected ; but found │ │transform await using transform = ne`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│SyntaxError: test-stream-transform-destroy.js:157:14 Expected ; but found    │
│transform await using transform = new Transform({ ^                          │
│test-stream-transform-destroy.js:158:30 Expected ; but foun`
example test: `test/parallel/test-stream-transform-destroy.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │SyntaxError: <loc> Expected ; but found │ │write await using write = new Writab`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│SyntaxError: test-stream-writable-destroy.js:504:14 Expected ; but found     │
│write await using write = new Writable({ ^                                   │
│test-stream-writable-destroy.js:505:26 Expected ; but found`
example test: `test/parallel/test-stream-writable-destroy.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │SyntaxError: <loc> Expected ; but found duplex│ │await using duplex = new Duple`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│SyntaxError: test-stream-duplex-destroy.js:290:14 Expected ; but found duplex│
│await using duplex = new Duplex({ ^ test-stream-duplex-destroy.js:291:26     │
│Expected ; but found { write(chunk, enc, cb) { cb(); }, ^  `
example test: `test/parallel/test-stream-duplex-destroy.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │SyntaxError: <loc> Expected ; but found read │ │await using read = new Readable`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│SyntaxError: test-stream-readable-dispose.js:26:14 Expected ; but found read │
│await using read = new Readable({ ^ test-stream-readable-dispose.js:27:11    │
│Expected ; but found { read() {} ^ test-stream-readable-dis`
example test: `test/parallel/test-stream-readable-dispose.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │SyntaxError: <loc> Expected ; but found│ │scope using scope = storage.withScope`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│SyntaxError: test-async-local-storage-run-scope.js:14:10 Expected ; but found│
│scope using scope = storage.withScope('test'); ^                             │
│test-async-local-storage-run-scope.js:16:2 Expected eof but`
example test: `test/parallel/test-async-local-storage-run-scope.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │SyntaxError: <loc> Expected│ │; but found scope using scope = boundedChannel.wi`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│SyntaxError: test-diagnostics-channel-bounded-channel-scope.js:25:10 Expected│
│; but found scope using scope = boundedChannel.withScope(context); ^         │
│test-diagnostics-channel-bounded-channel-scope.js:28:2 Expe`
example test: `test/parallel/test-diagnostics-channel-bounded-channel-scope.js`

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

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │SyntaxError: │ │<loc> │ │Expected ; but found scope using scope = boundedChanne`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│SyntaxError:                                                                 │
│test-diagnostics-channel-bounded-channel-scope-transform-error.js:42:8       │
│Expected ; but found scope using scope = boundedChannel.wit`
example test: `test/parallel/test-diagnostics-channel-bounded-channel-scope-transform-error.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │SyntaxError: │ │<loc> Expected ; │ │but found scope using scope = channel.withS`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│SyntaxError:                                                                 │
│test-diagnostics-channel-run-stores-scope-transform-error.js:36:8 Expected ; │
│but found scope using scope = channel.withStoreScope({ valu`
example test: `test/parallel/test-diagnostics-channel-run-stores-scope-transform-error.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │SyntaxError: Variable <str> has already been declared │ │ │ │ In file <loc>│ │ `

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│SyntaxError: Variable "MessageChannel" has already been declared             │
│                                                                             │
│ In file test/parallel/test-worker-message-port-inspect-dur`
example test: `test/parallel/test-worker-message-port-inspect-during-init-hook.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: (intermediate value).addListener is not a function │ │ │ │ In file <`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: (intermediate value).addListener is not a function                │
│                                                                             │
│ In file test/parallel/test-process-no-deprecation.js:16:1:`
example test: `test/parallel/test-process-no-deprecation.js`

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

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: (intermediate value).hrtime.bigint is not a function │ │ │ │ In file`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: (intermediate value).hrtime.bigint is not a function              │
│                                                                             │
│ In file test/parallel/test-fs-stat-bigint.js:97:21:       `
example test: `test/parallel/test-fs-stat-bigint.js`

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

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: assert is not a function │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ ass`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: assert is not a function                                          │
│                                                                             │
│ In file test/parallel/test-fs-mkdtemp.js:22:3:            `
example test: `test/parallel/test-fs-mkdtemp.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: assert is not a function │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ con`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: assert is not a function                                          │
│                                                                             │
│ In file test/parallel/test-dns-get-server.js:8:1:         `
example test: `test/parallel/test-dns-get-server.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: assert is not a function │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ fl `

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: assert is not a function                                          │
│                                                                             │
│ In file test/parallel/test-event-emitter-listeners-side-ef`
example test: `test/parallel/test-event-emitter-listeners-side-effects.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: assert is not a function │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ if `

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: assert is not a function                                          │
│                                                                             │
│ In file test/parallel/test-process-constants-noatime.js:8:`
example test: `test/parallel/test-process-constants-noatime.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: assert is not a function │ │ │ │ In file <loc>│ │ ╭─ │ │ <n> │ │ │→ `

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: assert is not a function                                          │
│                                                                             │
│ In file test/parallel/test-event-emitter-set-max-listeners`
example test: `test/parallel/test-event-emitter-set-max-listeners-side-effects.js`

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

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: callbacks.shift(...) is not a function │ │ │ │ In file <loc>: │ │ ╭─`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: callbacks.shift(...) is not a function                            │
│                                                                             │
│ In file test/parallel/test-stream-write-destroy.js:37:5:  `
example test: `test/parallel/test-stream-write-destroy.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: Cannot convert a Symbol value to a string │ │ │ │ In file <loc>: │ │`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot convert a Symbol value to a string                         │
│                                                                             │
│ In file test/parallel/test-events-list.js:16:1:           `
example test: `test/parallel/test-events-list.js`

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

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: Cannot load module: <str> │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ it`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'node:test'                                   │
│                                                                             │
│ In file test/parallel/test-process-ref-unref.js:8:5:      `
example test: `test/parallel/test-process-ref-unref.js`

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

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: Cannot load module: <str> │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ va`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot load module: 'internal/fs/utils'                           │
│                                                                             │
│ In file test/parallel/test-fs-util-validateoffsetlength.js`
example test: `test/parallel/test-fs-util-validateoffsetlength.js`

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

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: Cannot set property <str> of undefined │ │ │ │ In file <loc>: │ │ ╭─`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot set property 'compact' of undefined                        │
│                                                                             │
│ In file test/parallel/test-util-inspect-regexp.js:7:1:    `
example test: `test/parallel/test-util-inspect-regexp.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: Cannot set property │ │<str> of│ │undefined │ │ │ │ In file <loc>: │`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Cannot set property                                               │
│'/work/.harness/work/node-api/node-api-overlay/test/fixtures/semicolon.js' of│
│undefined                                                  `
example test: `test/parallel/test-require-cache.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: duplexPair is not a function │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: duplexPair is not a function                                      │
│                                                                             │
│ In file test/parallel/test-stream-duplexpair.js:8:16:     `
example test: `test/parallel/test-stream-duplexpair.js`

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

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: fs.WriteStream is not a function │ │ │ │ In file <loc>: │ │ ╭─ │ │ <`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: fs.WriteStream is not a function                                  │
│                                                                             │
│ In file test/parallel/test-fs-write-stream-change-open.js:`
example test: `test/parallel/test-fs-write-stream-change-open.js`

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

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: null is not a String │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ assert.`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: null is not a String                                              │
│                                                                             │
│ In file test/parallel/test-path-makelong.js:47:20:        `
example test: `test/parallel/test-path-makelong.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: Object{} is not iterable │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n> │ │ │`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Object{} is not iterable                                          │
│                                                                             │
│ In file test/parallel/test-buffer-iterator.js:13:1:       `
example test: `test/parallel/test-buffer-iterator.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: path must be a string, Buffer, or file: URL │ │ │ │ In file <loc>: │`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: path must be a string, Buffer, or file: URL                       │
│                                                                             │
│ In file test/parallel/test-fs-read-stream-fd.js:35:16:    `
example test: `test/parallel/test-fs-read-stream-fd.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: pathToFileURL: path must be an absolute filesystem path │ │ │ │ In f`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: pathToFileURL: path must be an absolute filesystem path           │
│                                                                             │
│ In file test/parallel/test-url-pathtofileurl.js:8:19:     `
example test: `test/parallel/test-url-pathtofileurl.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: Readable.from is not a function │ │ │ │ In file <loc>│ │ ╭─ │ │ <n> `

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: Readable.from is not a function                                   │
│                                                                             │
│ In file test/parallel/test-stream-pipe-objectmode-to-non-o`
example test: `test/parallel/test-stream-pipe-objectmode-to-non-objectmode.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: receiver is not an EventEmitter │ │ │ │ In file <loc>: │ │ ╭─ │ │ <n`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: receiver is not an EventEmitter                                   │
│                                                                             │
│ In file test/parallel/test-event-emitter-get-max-listeners`
example test: `test/parallel/test-event-emitter-get-max-listeners.js`

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: stream.Stream is not a constructor │ │ │ │ In file <loc>: │ │ ╭─ │ │`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: stream.Stream is not a constructor                                │
│                                                                             │
│ In file test/parallel/test-stream-pipe-without-listenerCou`
example test: `test/parallel/test-stream-pipe-without-listenerCount.js`

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

### 1 × `╭─────────────────────────────────────────────────────────────────────────────╮ │Error: ENOENT: no such file or directory, copyfile │ │<str> -> │ │<str> │ │ │ │`

distinct messages:
- `╭─────────────────────────────────────────────────────────────────────────────╮
│Error: ENOENT: no such file or directory, copyfile                           │
│'/work/.harness/work/node-api/node-api-overlay/test/fixtures/a.js' ->        │
│'/work/.harness/work/node-api/node-test/.tmp.0/a.js'       `
example test: `test/parallel/test-fs-fsync.js`

### 1 × `╭─────────────────────────────────────────────────────────────────────────────╮ │Error: ENOENT: no such file or directory, open │ │<str> │ │ │ │ In file <loc>: `

distinct messages:
- `╭─────────────────────────────────────────────────────────────────────────────╮
│Error: ENOENT: no such file or directory, open                               │
│'/work/.harness/work/node-api/node-test/.tmp.0/append-sync2.txt'             │
│                                                           `
example test: `test/parallel/test-fs-append-file-sync.js`

### 1 × `╭─────────────────────────────────────────────────────────────────────────────╮ │Error: ENOTEMPTY: directory not empty, rm │ │<str> │ │ │ │ In file <loc>│ │ ╭─ `

distinct messages:
- `╭─────────────────────────────────────────────────────────────────────────────╮
│Error: ENOTEMPTY: directory not empty, rm                                    │
│'/work/.harness/work/node-api/node-test/.tmp.0'                              │
│                                                           `
example test: `test/parallel/test-fs-watch-recursive-add-file-to-new-folder.js`

### 1 × `complete (<n>) flow(<n>): exit ╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: (intermediate value).on is not a func`

distinct messages:
- `complete (1)
flow(0): exit
╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: (intermediate value).on is not a function                         │
│                                                                             │
│ In file test/parallel/test-stre`
example test: `test/parallel/test-stream-readable-flow-recursion.js`

### 1 × `readStart`

distinct messages:
- `readStart`
example test: `test/parallel/test-stream2-push.js`

### 1 × `Uncaught (in promise) TypeError: from is not a function`

distinct messages:
- `Uncaught (in promise) TypeError: from is not a function`
example test: `test/parallel/test-stream-drop-take.js`

### 1 × `Uncaught (in promise) TypeError: iterator.setEncoding is not a function uncaught exception in timer callback: Error: kaboom`

distinct messages:
- `Uncaught (in promise) TypeError: iterator.setEncoding is not a function
uncaught exception in timer callback: Error: kaboom`
example test: `test/parallel/test-stream-pipeline-async-iterator.js`

### 1 × `Uncaught (in promise) TypeError: path must be a string, Buffer, or file: URL`

distinct messages:
- `Uncaught (in promise) TypeError: path must be a string, Buffer, or file: URL`
example test: `test/parallel/test-fs-promises-statfs-validate-path.js`

### 1 × `Uncaught (in promise) TypeError: receiver is not an EventEmitter`

distinct messages:
- `Uncaught (in promise) TypeError: receiver is not an EventEmitter`
example test: `test/parallel/test-eventtarget-once-twice.js`

### 1 × `uncaught exception in timer callback: Error: timed out`

distinct messages:
- `uncaught exception in timer callback: Error: timed out`
example test: `test/parallel/test-fs-watch-recursive-sync-write.js`

### 1 × `undefined`

distinct messages:
- `undefined`
example test: `test/parallel/test-stream2-unpipe-leak.js`

### 1 × `write called ╭─ Script Error ──────────────────────────────────────────────────────────────╮ │TypeError: (intermediate value).on is not a function │ │ │ │ In fi`

distinct messages:
- `write called
╭─ Script Error ──────────────────────────────────────────────────────────────╮
│TypeError: (intermediate value).on is not a function                         │
│                                                                             │
│ In file test/parallel/test-stream2-unpipe-dra`
example test: `test/parallel/test-stream2-unpipe-drain.js`

## By feature

| count | feature |
|---:|---|
| 281 | node:fs |
| 242 | node:streams |
| 134 | node:worker-threads |
| 98 | node:vm |
| 87 | node:process |
| 73 | node:crypto |
| 63 | node:timers |
| 61 | node:buffer |
| 49 | node:diagnostics-channel |
| 48 | node:async-hooks |
| 47 | node:module-loading |
| 40 | node:events |
| 37 | node:url |
| 30 | node:dns |
| 29 | node:util |
| 19 | node:console |
| 15 | node:path |
| 14 | node:assert |
