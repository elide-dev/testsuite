# Impact-ordered failures

## By root-cause signature

### 34 × `Node API test timed out`

distinct messages:
- `Node API test timed out`
example test: `test/parallel/test-async-hooks-execution-async-resource-await.js`

### 8 × `AssertionError: Expected values to be strictly equal: + actual - expected + <str> - <str> at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Expected values to be strictly equal: + actual - expected  + 'undefined' - 'function'
    at :anonymous (test-eventsource.js:7:1)
    at :program (test-eventsource.js:1:1)`
- `AssertionError: Expected values to be strictly equal: + actual - expected  + '/work/.harness/work/node-api/node-api-overlay' - '/work/.harness/work/node-api/node-api-overlay/test/parallel'
    at :anonymous (test-process-chdir.js:18:1)
    at :program (test-process-chdir.js:1:1)`
- `AssertionError: Expected values to be strictly equal: + actual - expected  + 'file://host/#name/share/file.txt' - 'file://host/share/file.txt'
    at :anonymous (test-url-pathtofileurl.js:59:5)
    at :program (test-url-pathtofileurl.js:1:1)`
- `AssertionError: Expected values to be strictly equal: + actual - expected  + "URLSearchParams { 'a' => 'a', 'b' => 'b', 'b' => 'c' }" - '[Object]'
    at :anonymous (test-whatwg-url-custom-searchparams-inspect.js:12:1)
    at :program (test-whatwg-url-custom-searchparams-inspect.js:1:1)`
- `AssertionError: Expected values to be strictly equal: + actual - expected  + 'a=a&a=1&a=true&a=undefined&a=null&a=%3F&a=%3F&a=%F0%9F%98%80&a=%3F%3F&a=%5Bobject+Object%5D' - 'a=a&a=1&a=true&a=undefined&a=null&a=%EF%BF%BD&a=%EF%BF%BD&a=%F0%9F%98%80&a=%EF%BF%BD%EF%BF%BD&a=%5Bobject+Object%5D'
    at :a`
example test: `test/parallel/test-eventsource.js`

### 8 × `Mismatched <anonymous> function calls. Expected exactly <n>, actual <n>. at Proxy.mustCall (<loc>) at <loc> at <loc>`

distinct messages:
- `Mismatched <anonymous> function calls. Expected exactly 1, actual 0.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at test-diagnostics-channel-worker-threads.js:7:39
    at test-diagnostics-channel-worker-threads.js:1:1`
- `Mismatched <anonymous> function calls. Expected exactly 1, actual 0.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at test-stream-err-multiple-callback-construction.js:20:29
    at test-stream-err-multiple-callback-construction.js:1:1`
- `Mismatched <anonymous> function calls. Expected exactly 1, actual 0.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at test-stream-readable-to-web-termination-byob.js:12:47
    at test-stream-readable-to-web-termination-byob.js:1:1`
- `Mismatched <anonymous> function calls. Expected exactly 1, actual 0.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at test-stream-writable-end-cb-uncaught.js:7:40
    at test-stream-writable-end-cb-uncaught.js:1:1`
- `Mismatched <anonymous> function calls. Expected exactly 2, actual 1.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at test-timers-timeout-to-interval.js:7:29
    at test-timers-timeout-to-interval.js:1:1`
example test: `test/parallel/test-diagnostics-channel-worker-threads.js`

### 7 × `AssertionError: Missing expected exception. at :anonymous (<loc>) at :program (<loc>)`

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
    at :anonymous (test-worker-broadcastchannel.js:134:3)
    at :program (test-worker-broadcastchannel.js:1:1)`
example test: `test/parallel/test-dns-setserver-when-querying.js`

### 7 × `TypeError: Cannot load module: <str> at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: Cannot load module: 'cluster'
    at :anonymous (test-diagnostics-channel-process.js:4:17)
    at :program (test-diagnostics-channel-process.js:1:1)`
- `TypeError: Cannot load module: '/work/.harness/work/node-api/node-test/.tmp.776/index'
    at :anonymous (test-module-circular-symlinks.js:64:13)
    at :program (test-module-circular-symlinks.js:1:1)`
- `TypeError: Cannot load module: '../fixtures/packages/missing-main'
    at :anonymous (test-module-loading-deprecated.js:10:20)
    at :program (test-module-loading-deprecated.js:1:1)`
- `TypeError: Cannot load module: '/work/.harness/work/node-api/node-test/.tmp.799/app/index'
    at :anonymous (test-module-symlinked-peer-modules.js:62:1)
    at :program (test-module-symlinked-peer-modules.js:1:1)`
- `TypeError: Cannot load module: '/work/.harness/work/node-api/node-test/.tmp.807/foo.cjs'
    at :anonymous (test-require-enoent-dir.js:24:13)
    at :program (test-require-enoent-dir.js:1:1)`
example test: `test/parallel/test-diagnostics-channel-process.js`

### 6 × `AssertionError: Expected values to be strictly equal: <n> !== <n> at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Expected values to be strictly equal:  8 !== 0
    at :anonymous (test-buffer-copy-immutable.js:19:3)
    at :program (test-buffer-copy-immutable.js:1:1)`
- `AssertionError: Expected values to be strictly equal:  2 !== 0
    at :anonymous (test-module-run-main-monkey-patch.js:17:1)
    at :program (test-module-run-main-monkey-patch.js:1:1)`
- `AssertionError: Expected values to be strictly equal:  18 !== 436
    at :anonymous (test-process-umask.js:46:1)
    at :program (test-process-umask.js:1:1)`
- `AssertionError: Expected values to be strictly equal:  55 !== 10
    at :anonymous (test-stream2-transform.js:45:3)
    at :program (test-stream2-transform.js:1:1)`
- `AssertionError: Expected values to be strictly equal:  0 !== 1
    at :anonymous (test-util-callbackify.js:74:5)
    at :program (test-util-callbackify.js:1:1)`
example test: `test/parallel/test-buffer-copy-immutable.js`

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

### 5 × `AssertionError: Expected values to be strictly deep-equal: + actual - expected Comparison { code: <str>, + message: <str>, - message: <str>, name: <str> } at :=`

distinct messages:
- `AssertionError: Expected values to be strictly deep-equal: + actual - expected    Comparison {     code: 'ERR_INVALID_ARG_TYPE', +   message: 'The first argument must be of type string or an instance of Buffer, ArrayBuffer, or Array or an Array-like Object. Received type function ([Function (anonymo`
- `AssertionError: Expected values to be strictly deep-equal: + actual - expected    Comparison {     code: 'ERR_INVALID_ARG_TYPE', +   message: 'The "value" argument must be one of type number or string or an instance of Buffer or Uint8Array. Received type function ([Function (anonymous)])', -   messa`
- `AssertionError: Expected values to be strictly deep-equal: + actual - expected    Comparison {     code: 'ERR_INVALID_ARG_TYPE', +   message: 'The "value" argument must be one of type number or string or an instance of Buffer or Uint8Array. Received type function ([Function (anonymous)])', -   messa`
- `AssertionError: Expected values to be strictly deep-equal: + actual - expected    Comparison {     code: 'ERR_INVALID_ARG_TYPE', +   message: 'The "options.captureRejections" property must be of type boolean. Received type function ([Function (anonymous)])', -   message: 'The "options.captureRejecti`
- `AssertionError: Expected values to be strictly deep-equal: + actual - expected    Comparison {     code: 'ERR_INVALID_ARG_TYPE', +   message: 'The "options.recursive" property must be of type boolean. Received type function ([Function (anonymous)])', -   message: 'The "options.recursive" property mu`
example test: `test/parallel/test-buffer-from.js`

### 5 × `Uncaught (in promise) AssertionError: The input did not match the regular expression /ERR_INVALID_ARG_TYPE/. Input: <str> Uncaught (in promise) AssertionError: `

distinct messages:
- `Uncaught (in promise) AssertionError: The input did not match the regular expression /ERR_INVALID_ARG_TYPE/. Input:

'TypeError: The "fn" argument must be of type function. Received number'

Uncaught (in promise) AssertionError: The input did not match the regular expression /ERR_OUT_OF_RANGE/. Inpu`
- `Uncaught (in promise) AssertionError: The input did not match the regular expression /ERR_INVALID_ARG_TYPE/. Input:

'TypeError: The "options" argument must be of type object. Received number'

Uncaught (in promise) AssertionError: The input did not match the regular expression /ERR_INVALID_ARG_TYPE`
- `Uncaught (in promise) AssertionError: The input did not match the regular expression /ERR_INVALID_ARG_TYPE/. Input:

'TypeError: The "options.ref" argument must be of type boolean. Received type number (1)'

Uncaught (in promise) AssertionError: The input did not match the regular expression /ERR_IN`
- `Uncaught (in promise) AssertionError: The input did not match the regular expression /ERR_INVALID_ARG_TYPE/. Input:

'TypeError: The "delay" argument must be of type number. Received type string ()'

Uncaught (in promise) AssertionError: The input did not match the regular expression /ERR_INVALID_AR`
example test: `test/parallel/test-stream-forEach.js`

### 4 × `Mismatched noop function calls. Expected exactly <n>, actual <n>. at Proxy.mustCall (<loc>) at <loc> at <loc>`

distinct messages:
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
- `Mismatched noop function calls. Expected exactly 1, actual 0.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at test-stream-writable-samecb-singletick.js:15:33
    at test-stream-writable-samecb-singletick.js:1:1`
example test: `test/parallel/test-stream-pipe-needDrain.js`

### 4 × `TypeError: Cannot set property <str> of undefined at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
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
example test: `test/parallel/test-dns-get-server.js`

### 4 × `Uncaught (in promise) AssertionError: Expected values to be strictly equal: <n> !== <n>`

distinct messages:
- `Uncaught (in promise) AssertionError: Expected values to be strictly equal:

1 !== 2`
- `Uncaught (in promise) AssertionError: Expected values to be strictly equal:

2 !== 1`
- `Uncaught (in promise) AssertionError: Expected values to be strictly equal:

2 !== 0`
example test: `test/parallel/test-async-hooks-promise-triggerid.js`

### 3 × `AssertionError: Expected values to be strictly deep-equal: + actual - expected + Comparison {} - Comparison { - code: <str> - } at :anonymous (<loc>) at :progra`

distinct messages:
- `AssertionError: Expected values to be strictly deep-equal: + actual - expected  + Comparison {} - Comparison { -   code: 'MODULE_NOT_FOUND' - }
    at :anonymous (test-module-cache.js:9:1)
    at :program (test-module-cache.js:1:1)`
- `AssertionError: Expected values to be strictly deep-equal: + actual - expected  + Comparison {} - Comparison { -   code: 'MODULE_NOT_FOUND' - }
    at :anonymous (test-require-invalid-package.js:7:1)
    at :program (test-require-invalid-package.js:1:1)`
- `AssertionError: Expected values to be strictly deep-equal: + actual - expected  + Comparison {} - Comparison { -   code: 'ERR_INVALID_ARG_TYPE' - }
    at :anonymous (test-stream-end-of-streams.js:7:1)
    at :program (test-stream-end-of-streams.js:1:1)`
example test: `test/parallel/test-module-cache.js`

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

### 3 × `Mismatched <anonymous> function calls. Expected exactly <n>, actual <n>. at mustCall (<loc>) at _expectWarning (<loc>) at <loc> at Array.forEach (native) at Pro`

distinct messages:
- `Mismatched <anonymous> function calls. Expected exactly 4, actual 0.
    at mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at _expectWarning (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:750:10)
    at /work/.harness/work/node-api/node-`
- `Mismatched <anonymous> function calls. Expected exactly 1, actual 0.
    at mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at _expectWarning (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:750:10)
    at /work/.harness/work/node-api/node-`
- `Mismatched <anonymous> function calls. Expected exactly 3, actual 0.
    at mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at _expectWarning (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:750:10)
    at /work/.harness/work/node-api/node-`
example test: `test/parallel/test-eventtarget-memoryleakwarning.js`

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

### 3 × `Uncaught (in promise) TypeError: foo.linkRequests is not a function`

distinct messages:
- `Uncaught (in promise) TypeError: foo.linkRequests is not a function`
example test: `test/parallel/test-vm-module-linkmodulerequests-deep.js`

### 2 × `(node:<n>) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Bu`

distinct messages:
- `(node:1136) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.
AssertionError: DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use th`
- `(node:1409) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.`
example test: `test/parallel/test-buffer-constructor-outside-node-modules.js`

### 2 × `AssertionError: Expected <str> to be strictly unequal to: <str> at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Expected "actual" to be strictly unequal to:  'artischocko'
    at :anonymous (test-require-extensions-same-filename-as-dir-trailing-slash.js:34:1)
    at :program (test-require-extensions-same-filename-as-dir-trailing-slash.js:1:1)`
- `AssertionError: Expected "actual" to be strictly unequal to:  'artischocko'
    at :anonymous (test-require-extensions-same-filename-as-dir.js:31:1)
    at :program (test-require-extensions-same-filename-as-dir.js:1:1)`
example test: `test/parallel/test-require-extensions-same-filename-as-dir-trailing-slash.js`

### 2 × `AssertionError: Expected values to be strictly deep-equal: + actual - expected Comparison { + message: <str>, - message: <str>, name: <str> } at :anonymous (<lo`

distinct messages:
- `AssertionError: Expected values to be strictly deep-equal: + actual - expected    Comparison { +   message: 'EBADF: bad file descriptor, write', -   message: '',     name: 'Error'   }
    at :anonymous (test-fs-writesync-crash.js:40:1)
    at :program (test-fs-writesync-crash.js:1:1)`
- `AssertionError: Expected values to be strictly deep-equal: + actual - expected    Comparison { +   message: "Cannot assign to read only property 'nonWritableProp' of {getSetPropReceivingFunction: accessor, getSetPropReceivingNumber: accessor, propReceivingNumber: 144, getSetPropThrowing: accessor, n`
example test: `test/parallel/test-fs-writesync-crash.js`

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

### 2 × `AssertionError: Missing expected exception (TypeError). at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Missing expected exception (TypeError).
    at :anonymous (test-stream-readable-async-iterators.js:774:5)
    at :program (test-stream-readable-async-iterators.js:1:1)`
- `AssertionError: Missing expected exception (TypeError).
    at :anonymous (test-vm-module-errors.js:164:1)
    at :program (test-vm-module-errors.js:1:1)`
example test: `test/parallel/test-stream-readable-async-iterators.js`

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

### 2 × `TypeError: (intermediate value).gc is not a function at Immediate.<anonymous> (<loc>) at TypeError.get stack (native)`

distinct messages:
- `TypeError: (intermediate value).gc is not a function
    at Immediate.<anonymous> (test-async-hooks-disable-gc-tracking.js:17:14)
    at TypeError.get stack (native)`
- `TypeError: (intermediate value).gc is not a function
    at Immediate.<anonymous> (test-async-hooks-prevent-double-destroy.js:20:14)
    at TypeError.get stack (native)`
example test: `test/parallel/test-async-hooks-disable-gc-tracking.js`

### 2 × `TypeError: Cannot read property <str> of undefined at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: Cannot read property 'length' of undefined
    at :anonymous (test-stream-pipe-same-destination-twice.js:22:22)
    at :program (test-stream-pipe-same-destination-twice.js:1:1)`
- `TypeError: Cannot read property 'hasRef' of undefined
    at :anonymous (test-worker-hasref.js:21:20)
    at :program (test-worker-hasref.js:1:1)`
example test: `test/parallel/test-stream-pipe-same-destination-twice.js`

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

### 2 × `Uncaught (in promise) AssertionError: Missing expected rejection. Uncaught (in promise) AssertionError: Missing expected rejection.`

distinct messages:
- `Uncaught (in promise) AssertionError: Missing expected rejection.
Uncaught (in promise) AssertionError: Missing expected rejection.`
example test: `test/parallel/test-vm-dynamic-import-callback-missing-flag.js`

### 2 × `Uncaught (in promise) TypeError: The <str> argument must be of type string or an instance of Buffer, TypedArray, or DataView. Received an instance of Readable`

distinct messages:
- `Uncaught (in promise) TypeError: The "data" argument must be of type string or an instance of Buffer, TypedArray, or DataView. Received an instance of Readable`
example test: `test/parallel/test-fs-promises-file-handle-writeFile.js`

### 1 × `(node:<n>) MaxListenersExceededWarning: Possible EventEmitter memory leak detected. <n> null listeners added to [EventEmitter]. MaxListeners is <n>. Use emitter`

distinct messages:
- `(node:4116) MaxListenersExceededWarning: Possible EventEmitter memory leak detected. 2 null listeners added to [EventEmitter]. MaxListeners is 1. Use emitter.setMaxListeners() to increase limit
AssertionError: Expected values to be strictly equal:

'null' !== null

    at process.<anonymous> (test-e`
example test: `test/parallel/test-event-emitter-max-listeners-warning-for-null.js`

### 1 × `(node:<n>) TimeoutOverflowWarning: <n> does not fit into a <n>-bit signed integer. Timeout duration was set to <n>.`

distinct messages:
- `(node:11985) TimeoutOverflowWarning: 2147483648 does not fit into a 32-bit signed integer.
Timeout duration was set to 1.`
example test: `test/parallel/test-timers-max-duration-warning.js`

### 1 × `(node:<n>) Warning: test AssertionError: stderr.write must not be called at <loc> called with arguments: <str> at mustNotCall (<loc>) at Writable.write (<loc>) `

distinct messages:
- `(node:9634) Warning: test
AssertionError: stderr.write must not be called at test-process-warning.js:13
called with arguments: '(node:9634) Warning: test\n'
    at mustNotCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:631:12)
    at Writable.write (/work/.harness/work/node-`
example test: `test/parallel/test-process-warning.js`

### 1 × `[EventLoop] external task threw: Promise was rejected with reason: Error: queryAny EBADRESP dev.elide.lang.javascript.api.PromiseRejectedException: Promise was `

distinct messages:
- `[EventLoop] external task threw: Promise was rejected with reason: Error: queryAny EBADRESP
dev.elide.lang.javascript.api.PromiseRejectedException: Promise was rejected with reason: Error: queryAny EBADRESP
	at dev.elide.lang.javascript.api.JsPromiseImpl.then$lambda$2(JsPromise.kt:216)
	at dev.elide`
example test: `test/parallel/test-dns-resolveany-bad-ancount.js`

### 1 × `[process <n>]: --- stderr --- (node:<n>) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(`

distinct messages:
- `[process 1175]: --- stderr ---
(node:1175) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.

[process 1175]: --- stdout ---

[process 1175]: status = 0, signal = null
Erro`
example test: `test/parallel/test-buffer-constructor-node-modules.js`

### 1 × `[process <n>]: --- stderr --- Error: No file or script named <str> Searched: - file: /work/.harness/work/node-api/node-api-overlay/test/fixtures/spawn-worker-wi`

distinct messages:
- `[process 14945]: --- stderr ---
Error: No file or script named '/work/.harness/work/node-api/node-api-overlay/test/fixtures/spawn-worker-with-copied-env'
Searched:
  - file: /work/.harness/work/node-api/node-api-overlay/test/fixtures/spawn-worker-with-copied-env
  - elide.pkl scripts: not present
  `
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

### 1 × `AssertionError: createScript crashes at <loc> at _return (<loc>) at EventEmitter.emit (native)`

distinct messages:
- `AssertionError: createScript crashes
    at test-vm-api-handles-getter-errors.js:33:5
    at _return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)`
example test: `test/parallel/test-vm-api-handles-getter-errors.js`

### 1 × `AssertionError: error: unexpected argument <str> found Usage: elide [FLAGS] [FILE] [-- SCRIPT_ARGS]… <SUBCOMMAND> For more information, try <str>. <n> !== <n> a`

distinct messages:
- `AssertionError: error: unexpected argument '--enable-source-maps' found  Usage: elide [FLAGS] [FILE] [-- SCRIPT_ARGS]… <SUBCOMMAND>  For more information, try '--help'.   2 !== 0
    at :anonymous (test-util-getcallsites-sourcemap.js:30:3)
    at :program (test-util-getcallsites-sourcemap.js:1:1)`
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

### 1 × `AssertionError: Expected <str> to be strictly unequal to: undefined at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Expected "actual" to be strictly unequal to:  undefined
    at :anonymous (test-fs-write.js:45:1)
    at :program (test-fs-write.js:1:1)`
example test: `test/parallel/test-fs-write.js`

### 1 × `AssertionError: Expected awaitDrainWriters to be a Writable but instead got null + actual - expected + null - Writable { - _write: [Function (anonymous)] - } at`

distinct messages:
- `AssertionError: Expected awaitDrainWriters to be a Writable but instead got null + actual - expected  + null - Writable { -   _write: [Function (anonymous)] - }
    at :=> (test-stream-pipe-await-drain-manual-resume.js:30:3)
    at _return (index.js:573:12)`
example test: `test/parallel/test-stream-pipe-await-drain-manual-resume.js`

### 1 × `AssertionError: Expected error not found in: error: unexpected argument <str> found Usage: elide [FLAGS] [FILE] [-- SCRIPT_ARGS]… <SUBCOMMAND> For more informat`

distinct messages:
- `AssertionError: Expected error not found in: error: unexpected argument '--expose-internals' found  Usage: elide [FLAGS] [FILE] [-- SCRIPT_ARGS]… <SUBCOMMAND>  For more information, try '--help'.
    at :anonymous (test-worker-message-type-unknown.js:16:3)
    at :program (test-worker-message-type-u`
example test: `test/parallel/test-worker-message-type-unknown.js`

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

### 1 × `AssertionError: Expected values to be strictly deep-equal: + actual - expected Comparison { + message: <str> - message: <str> } at :anonymous (<loc>) at :progra`

distinct messages:
- `AssertionError: Expected values to be strictly deep-equal: + actual - expected    Comparison { +   message: 'index is too large' -   message: 'Invalid typed array length: 9007199254740992'   }
    at :anonymous (test-buffer-alloc.js:14:1)
    at :program (test-buffer-alloc.js:1:1)`
example test: `test/parallel/test-buffer-alloc.js`

### 1 × `AssertionError: Expected values to be strictly deep-equal: + actual - expected Comparison { + message: <str>, - code: <str>, - message: /must be of type object/`

distinct messages:
- `AssertionError: Expected values to be strictly deep-equal: + actual - expected    Comparison { +   message: 'called on non-object', -   code: 'ERR_INVALID_ARG_TYPE', -   message: /must be of type object/,     name: 'TypeError'   }
    at :=> (test-vm-context.js:85:3)
    at :anonymous (test-vm-conte`
example test: `test/parallel/test-vm-context.js`

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

### 1 × `AssertionError: Expected values to be strictly equal: + actual - expected + <n> - <n> at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: Expected values to be strictly equal: + actual - expected  + 1073741824 - 9007199254740991
    at :anonymous (test-streams-highwatermark.js:18:3)
    at :program (test-streams-highwatermark.js:1:1)`
example test: `test/parallel/test-streams-highwatermark.js`

### 1 × `AssertionError: Expected values to be strictly equal: + actual - expected + <n> - <n> at testHighWaterMarkIsMaxSafeInt (<loc>) at :anonymous (<loc>) at :program`

distinct messages:
- `AssertionError: Expected values to be strictly equal: + actual - expected  + 1073741824 - 9007199254740991
    at testHighWaterMarkIsMaxSafeInt (test-stream-iter-writable-from.js:536:3)
    at :anonymous (test-stream-iter-writable-from.js:618:1)
    at :program (test-stream-iter-writable-from.js:1:1`
example test: `test/parallel/test-stream-iter-writable-from.js`

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

### 1 × `AssertionError: Expected values to be strictly equal: <n> !== <n> at EventEmitter.<anonymous> (<loc>) at EventEmitter._return (<loc>) at EventEmitter.emit (nati`

distinct messages:
- `AssertionError: Expected values to be strictly equal:

0 !== 1

    at EventEmitter.<anonymous> (test-worker-beforeexit-throw-exit.js:25:10)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)`
example test: `test/parallel/test-worker-beforeexit-throw-exit.js`

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

### 1 × `AssertionError: Expected values to be strictly equal: <str> !== <str> at :=> (<loc>) at _return (<loc>)`

distinct messages:
- `AssertionError: Expected values to be strictly equal:  'YWJj' !== 'qw=='
    at :=> (test-stream-readable-unshift.js:65:7)
    at _return (index.js:573:12)`
example test: `test/parallel/test-stream-readable-unshift.js`

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

### 1 × `AssertionError: Expected values to be strictly equal: <str> !== <str> at PassThrough.<anonymous> (<loc>) at PassThrough._return (<loc>) Error: stream.push() aft`

distinct messages:
- `AssertionError: Expected values to be strictly equal:

'' !== 'ASD'

    at PassThrough.<anonymous> (test-stream-compose.js:139:12)
    at PassThrough._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
Error: stream.push() after EOF`
example test: `test/parallel/test-stream-compose.js`

### 1 × `AssertionError: Expected values to be strictly equal: false !== true at :=> (<loc>) at _return (<loc>)`

distinct messages:
- `AssertionError: Expected values to be strictly equal:  false !== true
    at :=> (test-stream-readable-object-multi-push-async.js:163:5)
    at _return (index.js:573:12)`
example test: `test/parallel/test-stream-readable-object-multi-push-async.js`

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

### 1 × `AssertionError: flag should be in set: --perf_basic_prof false !== true at :=> (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: flag should be in set: --perf_basic_prof  false !== true
    at :=> (test-process-env-allowed-flags.js:35:5)
    at :anonymous (test-process-env-allowed-flags.js:34:3)
    at :program (test-process-env-allowed-flags.js:1:1)`
example test: `test/parallel/test-process-env-allowed-flags.js`

### 1 × `AssertionError: function should not have been called at <loc> at mustNotCall (<loc>)`

distinct messages:
- `AssertionError: function should not have been called at test-stream-readable-next-no-null.js:19
    at mustNotCall (index.js:631:5)`
example test: `test/parallel/test-stream-readable-next-no-null.js`

### 1 × `AssertionError: function should not have been called at <loc> called with arguments: [TypeError: Module not found: <str>] at EventEmitter.mustNotCall (<loc>) at`

distinct messages:
- `AssertionError: function should not have been called at test-worker-esm-exit.js:8
called with arguments: [TypeError: Module not found: './process-exit.mjs']
    at EventEmitter.mustNotCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:631:12)
    at EventEmitter.emit (native)`
example test: `test/parallel/test-worker-esm-exit.js`

### 1 × `AssertionError: function should not have been called at <loc> called with arguments: Error at <loc> at <loc>, [ CallSite {}, CallSite {} ] at mustNotCall (<loc>`

distinct messages:
- `AssertionError: function should not have been called at test-util-getcallsites-preparestacktrace.js:10 called with arguments: Error     at test-util-getcallsites-preparestacktrace.js:12:15     at test-util-getcallsites-preparestacktrace.js:1:1, [ CallSite {}, CallSite {} ]
    at mustNotCall (index.`
example test: `test/parallel/test-util-getcallsites-preparestacktrace.js`

### 1 × `AssertionError: get %Object.prototype%.main at <loc> at mustNotCall (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: get %Object.prototype%.main at test-module-prototype-mutation.js:23
    at mustNotCall (index.js:631:5)
    at :anonymous (test-module-prototype-mutation.js:47:3)
    at :program (test-module-prototype-mutation.js:1:1)`
example test: `test/parallel/test-module-prototype-mutation.js`

### 1 × `AssertionError: init <n> !== <n> at main (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: init  0 !== 1
    at main (test-async-hooks-fatal-error.js:48:7)
    at :anonymous (test-async-hooks-fatal-error.js:10:3)
    at :program (test-async-hooks-fatal-error.js:1:1)`
example test: `test/parallel/test-async-hooks-fatal-error.js`

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

### 1 × `AssertionError: process.execve should not have been allowed. at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: process.execve should not have been allowed.
    at :anonymous (test-process-execve-permission-fail.js:16:3)
    at :program (test-process-execve-permission-fail.js:1:1)`
example test: `test/parallel/test-process-execve-permission-fail.js`

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

'worker script not found: /work/.harness/work/node-api/node-test/.tmp.1447/does-not-exist.js'

    at EventEmitter.<anonymous> (test-worker-esm-missing-main.js:14:10)
    at EventEmitter.`
example test: `test/parallel/test-worker-esm-missing-main.js`

### 1 × `AssertionError: The input did not match the regular expression /Cannot find module <str>/. Input: <str> at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `AssertionError: The input did not match the regular expression /Cannot find module '\x66oo'/. Input:  'Error: Command failed: /work/.harness/work/node-api/node-test/.tmp.783/install/bin/elide'
    at :anonymous (test-module-loading-globalpaths.js:52:3)
    at :program (test-module-loading-globalpath`
example test: `test/parallel/test-module-loading-globalpaths.js`

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

### 1 × `AssertionError: Values have same structure but are not reference-equal: ArrayBuffer { [Uint8Contents]: <<n> <n> 6c 6c 6f <n> <n> 6f <n> 6c <n>>, [byteLength]: <`

distinct messages:
- `AssertionError: Values have same structure but are not reference-equal:  ArrayBuffer {   [Uint8Contents]: <68 65 6c 6c 6f 20 77 6f 72 6c 64>,   [byteLength]: 11 }
    at :anonymous (test-buffer-pool-untransferable.js:12:1)
    at :program (test-buffer-pool-untransferable.js:1:1)`
example test: `test/parallel/test-buffer-pool-untransferable.js`

### 1 × `com.oracle.truffle.api.dsl.UnsupportedSpecializationException: Unexpected values provided for JSToObjectNodeGen.Uncached@15c8e0bb: [dev.elide.lang.javascript.no`

distinct messages:
- `com.oracle.truffle.api.dsl.UnsupportedSpecializationException: Unexpected values provided for JSToObjectNodeGen.Uncached@15c8e0bb: [dev.elide.lang.javascript.node.events.JSEventEmitter$BorrowedEmitterState@5544a263], [BorrowedEmitterState]
    at :anonymous (native)
    at :program (test-fs-stream-c`
example test: `test/parallel/test-fs-stream-construct-compat-old-node.js`

### 1 × `Error at <loc> at <loc>`

distinct messages:
- `Error
    at test-worker-exit-from-uncaught-exception.js:23:7
    at test-worker-exit-from-uncaught-exception.js:1:1`
example test: `test/parallel/test-worker-exit-from-uncaught-exception.js`

### 1 × `Error: Cannot find module <str> at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `Error: Cannot find module '../../deps/acorn/acorn/package.json'
    at :anonymous (test-process-versions.js:6:15)
    at :program (test-process-versions.js:1:1)`
example test: `test/parallel/test-process-versions.js`

### 1 × `Error: EEXIST: file already exists, open <str> at Error.get stack (native)`

distinct messages:
- `Error: EEXIST: file already exists, open '/work/.harness/work/node-api/node-test/.tmp.635/dummy'
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

### 1 × `Error: ENOENT: no such file or directory, open <str> at Error.get stack (native)`

distinct messages:
- `Error: ENOENT: no such file or directory, open '/doesnotexist'
    at Error.get stack (native)`
example test: `test/parallel/test-fs-stream-construct-compat-error-read.js`

### 1 × `Error: ENOENT: no such file or directory, scandir <str> at testSync (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `Error: ENOENT: no such file or directory, scandir '../node-test/.tmp.645/relative-path-relative-target-sync'
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

### 1 × `Error: read ECONNRESET`

distinct messages:
- `Error: read ECONNRESET`
example test: `test/parallel/test-stream-destroy.js`

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

### 1 × `Mismatched <anonymous> function calls. Expected exactly <n>, actual <n>. at Proxy.mustCall (<loc>) at EventEmitter.<anonymous> (<loc>) at EventEmitter._return (`

distinct messages:
- `Mismatched <anonymous> function calls. Expected exactly 1, actual 0.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at EventEmitter.<anonymous> (test-diagnostics-channel-net.js:77:28)
    at EventEmitter._return (/work/.harness/work/node-api/nod`
example test: `test/parallel/test-diagnostics-channel-net.js`

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
- `Mismatched noop function calls. Expected exactly 1, actual 1.
    at Proxy.mustCall (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:531:10)
    at test-async-hooks-enable-recursive.js:8:16
    at test-async-hooks-enable-recursive.js:1:1
Mismatched <anonymous> function calls. Expe`
example test: `test/parallel/test-async-hooks-enable-recursive.js`

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

### 1 × `SyntaxError: <eval><loc> Expected an operand but found % %PrepareFunctionForOptimization(Buffer.prototype.swap16) ^ at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `SyntaxError: <eval>:1:0 Expected an operand but found % %PrepareFunctionForOptimization(Buffer.prototype.swap16) ^
    at :anonymous (test-buffer-swap-fast.js:34:1)
    at :program (test-buffer-swap-fast.js:1:1)`
example test: `test/parallel/test-buffer-swap-fast.js`

### 1 × `SyntaxError: Unexpected end of JSON input at JSON.parse (native) at EventEmitter.<anonymous> (<loc>) at EventEmitter._return (<loc>) at EventEmitter.emit (nativ`

distinct messages:
- `SyntaxError: Unexpected end of JSON input
    at JSON.parse (native)
    at EventEmitter.<anonymous> (test-fs-syncwritestream.js:36:31)
    at EventEmitter._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at EventEmitter.emit (native)
    at SyntaxError.get sta`
example test: `test/parallel/test-fs-syncwritestream.js`

### 1 × `SyntaxError: Unexpected end of JSON input at JSON.parse (native) at Readable.<anonymous> (<loc>) at Readable._return (<loc>) at SyntaxError.get stack (native)`

distinct messages:
- `SyntaxError: Unexpected end of JSON input
    at JSON.parse (native)
    at Readable.<anonymous> (test-process-exec-argv.js:61:37)
    at Readable._return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at SyntaxError.get stack (native)`
example test: `test/parallel/test-process-exec-argv.js`

### 1 × `TAP version <n> # Subtest: Assert class destructuring behavior - diff option not ok <n> - Assert class destructuring behavior - diff option --- duration_ms: <n>`

distinct messages:
- `TAP version 13
# Subtest: Assert class destructuring behavior - diff option
not ok 1 - Assert class destructuring behavior - diff option
  ---
  duration_ms: 3
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
  duration_ms: 4
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
          duration_ms: 18
          failureType: 'testCodeFailure'
          err`
example test: `test/parallel/test-require-package-map.js`

### 1 × `TAP version <n> # Subtest: deepEqual ok <n> - deepEqual # Subtest: loose deepEqual not ok <n> - loose deepEqual --- duration_ms: <n> failureType: <str> error: <`

distinct messages:
- `TAP version 13
# Subtest: deepEqual
ok 1 - deepEqual
# Subtest: loose deepEqual
not ok 2 - loose deepEqual
  ---
  duration_ms: 1
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
      duration_ms: 26
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
  duration_ms: 5
  failureType: 'testCodeFailure'
  error: "Missing expected rejection (AbortErro`
example test: `test/parallel/test-fs-stat-abort-test.js`

### 1 × `TAP version <n> # Subtest: module is not instantiated yet not ok <n> - module is not instantiated yet --- duration_ms: <n> failureType: <str> error: <str> code:`

distinct messages:
- `TAP version 13
# Subtest: module is not instantiated yet
not ok 1 - module is not instantiated yet
  ---
  duration_ms: 6
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
  duration_ms: 2
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
  duration_ms: 2
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
- `TypeError: Cannot load module: '/work/.harness/work/node-api/node-test/.tmp.825/module-require-symlink/foo.js'
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
    at anonymous (<function>:3:34)
    at :anonymous (test-vm-codegen.js:14:3)
    at :program (test-vm-codegen.js:1:1)`
example test: `test/parallel/test-vm-codegen.js`

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

### 1 × `TypeError: Optional options.transfer argument must be an iterable at MessagePort.postMessage (native) at <loc> at <loc>`

distinct messages:
- `TypeError: Optional options.transfer argument must be an iterable
    at MessagePort.postMessage (native)
    at test-worker-message-port-terminate-transfer-list.js:20:9
    at test-worker-message-port-terminate-transfer-list.js:1:1`
example test: `test/parallel/test-worker-message-port-terminate-transfer-list.js`

### 1 × `TypeError: parsers.alloc is not a function at :=> (<loc>) at _return (<loc>) at test (<loc>) at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: parsers.alloc is not a function
    at :=> (test-async-local-storage-http-parser-leak.js:19:14)
    at _return (index.js:573:12)
    at test (test-async-local-storage-http-parser-leak.js:18:3)
    at :anonymous (test-async-local-storage-http-parser-leak.js:25:1)
    at :program (test-asyn`
example test: `test/parallel/test-async-local-storage-http-parser-leak.js`

### 1 × `TypeError: proxy has been revoked at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: proxy has been revoked
    at :anonymous (test-console-issue-43095.js:9:1)
    at :program (test-console-issue-43095.js:1:1)`
example test: `test/parallel/test-console-issue-43095.js`

### 1 × `TypeError: The <str> argument must be an object. Received type symbol at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: The "contextObject" argument must be an object. Received type symbol
    at :anonymous (test-vm-context-dont-contextify.js:13:19)
    at :program (test-vm-context-dont-contextify.js:1:1)`
example test: `test/parallel/test-vm-context-dont-contextify.js`

### 1 × `TypeError: URLSearchParams init must be a string, sequence of pairs, or record at :anonymous (<loc>) at :program (<loc>)`

distinct messages:
- `TypeError: URLSearchParams init must be a string, sequence of pairs, or record
    at :anonymous (test-whatwg-url-custom-searchparams-constructor.js:33:12)
    at :program (test-whatwg-url-custom-searchparams-constructor.js:1:1)`
example test: `test/parallel/test-whatwg-url-custom-searchparams-constructor.js`

### 1 × `TypeError: v8.queryObjects is not a function at <loc> at _return (<loc>) at Timeout.<anonymous> (<loc>) at TypeError.get stack (native)`

distinct messages:
- `TypeError: v8.queryObjects is not a function
    at test-async-local-storage-weak-asyncwrap-leak.js:41:25
    at _return (/work/.harness/work/node-api/node-api-overlay/test/common/index.js:573:12)
    at Timeout.<anonymous> (test-async-local-storage-weak-asyncwrap-leak.js:47:5)
    at TypeError.get `
example test: `test/parallel/test-async-local-storage-weak-asyncwrap-leak.js`

### 1 × `Uncaught (in promise) AssertionError: Expected <str> to be strictly unequal to: <n>`

distinct messages:
- `Uncaught (in promise) AssertionError: Expected "actual" to be strictly unequal to: 1`
example test: `test/parallel/test-async-hooks-enable-before-promise-resolve.js`

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

### 1 × `Uncaught (in promise) AssertionError: Expected values to be strictly equal: <n> !== undefined`

distinct messages:
- `Uncaught (in promise) AssertionError: Expected values to be strictly equal:

0 !== undefined`
example test: `test/parallel/test-worker-terminate-null-handler.js`

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

Error: ENOENT: no such file or directory, access '/work/.harness/work/node-api/node-test/.tmp.476/__this_should_not_exist'`
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
- `Uncaught (in promise) TypeError: Module not found: 'mod1'`
example test: `test/parallel/test-vm-module-dynamic-import-promise.js`

### 1 × `Uncaught (in promise) TypeError: pipeline: every link must be a Readable on the left and a Writable on the right`

distinct messages:
- `Uncaught (in promise) TypeError: pipeline: every link must be a Readable on the left and a Writable on the right`
example test: `test/parallel/test-stream3-pipeline-async-iterator.js`

### 1 × `Uncaught (in promise) TypeError: queryObjects is not a function`

distinct messages:
- `Uncaught (in promise) TypeError: queryObjects is not a function`
example test: `test/parallel/test-diagnostics-channel-memory-leak.js`

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

### 1 × `Uncaught JSException in event listener: Error: ok Uncaught JSException in event listener: Error: ok Uncaught JSException in event listener: Error: ok Uncaught J`

distinct messages:
- `Uncaught JSException in event listener: Error: ok
Uncaught JSException in event listener: Error: ok
Uncaught JSException in event listener: Error: ok
Uncaught JSException in event listener: Error: ok
Error: ok
    at process.<anonymous> (/work/.harness/work/node-api/node-api-overlay/test/common/proc`
example test: `test/parallel/test-worker-exit-code.js`

## By feature

| count | feature |
|---:|---|
| 65 | node:worker-threads |
| 58 | node:streams |
| 46 | node:vm |
| 39 | node:fs |
| 32 | node:module-loading |
| 20 | node:process |
| 16 | node:async-hooks |
| 15 | node:url |
| 14 | node:dns |
| 12 | node:buffer |
| 11 | node:diagnostics-channel |
| 10 | node:events |
| 9 | node:util |
| 7 | node:timers |
| 6 | node:assert |
| 3 | node:console |
