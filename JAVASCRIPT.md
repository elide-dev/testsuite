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

- [ ] Node.js JavaScript API tests for supported built-in modules.
- [ ] Node.js runtime behavior tests that do not require unsupported process,
  native-addon, inspector, or platform-specific behavior.
- [ ] Node.js module loading, CommonJS/ESM interop, timers, buffers, URL, path,
  events, assertions, and streams subsets.

Counts should be based on Node's test files first, then refined to case-level
counts where the Node test runner exposes stable subtest names.
