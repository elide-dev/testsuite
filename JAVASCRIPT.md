# JavaScript Coverage Plan

This tracks JavaScript runtime compliance coverage across multiple upstream
suites. Test262 is the first broad language suite; WPT and Node.js coverage will
be added here as separate sections as they land.

## Test262

Counts are file counts from the pinned Test262 checkout
`de8e621cdba4f40cff3cf244e6cfb8cb48746b4a`.

### Enabled

- [x] Language semantics: `test/language/**/*.js` - 23,979 files
- [x] Built-ins: `test/built-ins/**/*.js` - 23,646 files
- [x] Intl 402: `test/intl402/**/*.js` - 3,341 files
- [x] Annex B: `test/annexB/**/*.js` - 1,086 files
- [x] Staging: `test/staging/**/*.js` - 1,490 files
- [x] Harness self-tests: `test/harness/**/*.js` - 116 files

Enabled total: 53,658 unique files.

### Not Enabled Yet

- [x] No remaining Test262 `.js` files in the pinned checkout.

### Coverage Accounting

- Enabled against all Test262 JS files: 53,658 / 53,658 = 100.0%.

The current `test262` suite pass rate should be read as pass percentage within
the full Test262 JavaScript file surface. Staging and harness self-tests are
enabled even though they may need classification separately from stable
conformance failures.

## WPT JavaScript-Facing APIs

- [x] Encoding: `encoding/**/*.{any,window,worker}.js` - 40 files.
- [x] URL: `url/**/*.{any,window,worker}.js` - 28 files.
- [x] Fetch: `fetch/**/*.{any,window,worker}.js` - 245 files.
- [ ] URL, encoding, streams, timers, structured clone, WebCrypto, and other
  JavaScript-facing Web Platform API areas when added to the sparse checkout.

Counts should use WPT file/subtest discovery from the pinned WPT checkout. WPT
has a better denominator if we track both files selected by manifests and
subtests observed during a dry/listing run.

Current `wpt-wintertc` coverage is 313 / 313 = 100.0% of the
bridge-supported runnable JavaScript files in the checked-out WPT subset. Fetch
is enabled even though failures are expected, so the surface can be classified
and ratcheted. HTML documents, resource files, and helper scripts are not
standalone tests until the WPT bridge supports document/resource execution
rather than JavaScript source splicing.

## Node.js Compatibility

- [x] Assert: `test/parallel/test-assert*.js` - 14 files.
- [x] Async hooks/storage: `test/parallel/test-async-hooks*.js`,
  `test/parallel/test-async-local*.js` - 48 files.
- [x] Buffer: `test/parallel/test-buffer*.js` - 69 files.
- [x] Console: `test/parallel/test-console*.js` - 22 files.
- [x] Crypto/WebCrypto: `test/parallel/test-crypto*.js`,
  `test/parallel/test-webcrypto*.js` - 181 files.
- [x] Diagnostics channel: `test/parallel/test-diagnostics-channel*.js` - 68 files.
- [x] DNS: `test/parallel/test-dns*.js` - 30 files.
- [x] Events: `test/parallel/test-event*.js` - 44 files.
- [x] Filesystem/VFS: `test/parallel/test-fs*.js`,
  `test/parallel/test-vfs-fs*.js` - 294 files.
- [x] Module loading/CommonJS/ESM: `test/parallel/test-cjs*.js`,
  `test/parallel/test-esm*.js`, `test/parallel/test-module*.js`,
  `test/parallel/test-require*.js` - 57 files.
- [x] Path: `test/parallel/test-path*.js` - 17 files.
- [x] Process global/module: `test/parallel/test-process*.js` - 93 files.
- [x] Streams: `test/parallel/test-stream*.js` - 247 files.
- [x] Timers/next tick: `test/parallel/test-next-tick*.js`,
  `test/parallel/test-timer*.js`, `test/parallel/test-timers*.js` - 67 files.
- [x] URL/WHATWG URL: `test/parallel/test-url*.js`,
  `test/parallel/test-whatwg-url*.js` - 45 files.
- [x] Util: `test/parallel/test-util*.js` - 30 files.
- [x] VM: `test/parallel/test-vm*.js` - 98 files.
- [x] Worker threads: `test/parallel/test-worker*.js` - 139 files.
- [ ] HTTP/HTTP2/HTTPS: `test/parallel/test-http*.js`,
  `test/parallel/test-http2*.js`, `test/parallel/test-https*.js` - 740 files.
  Muted from the default manifest until `node:http` and `node:net` are
  implemented enough to avoid dominating Node API reports.
- [ ] Net: `test/parallel/test-net*.js` - 151 files. Muted from the default
  manifest until `node:net` has a real implementation.
- [ ] Node.js runtime behavior tests outside the broad API slices, including
  CLI, permissions, inspector, addon, fixture-heavy, and platform-specific
  tests.

Counts should be based on Node's test files first, then refined to case-level
counts where the Node test runner exposes stable subtest names.

Current default `node-api` coverage is 1,563 unique files across broad Node core
API surfaces. The broader tracked surface is 2,454 unique files when the muted
HTTP/HTTP2/HTTPS and Net slices are included. The default slice intentionally
includes tests expected to fail, especially filesystem, child process,
permissions, worker, native crypto, module loading, exact diagnostics, and
internal binding behavior, so failures can be classified and ratcheted in broad
compatibility reports without networking dominating the summary.
