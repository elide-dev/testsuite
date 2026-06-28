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

Enabled total: 47,625 unique files.

### Not Enabled Yet

- [ ] Intl 402: `test/intl402/**/*.js` - 3,341 files
- [ ] Annex B: `test/annexB/**/*.js` - 1,086 files
- [ ] Staging: `test/staging/**/*.js` - 1,490 files
- [ ] Harness self-tests: `test/harness/**/*.js` - 116 files

### Coverage Accounting

- Enabled against all Test262 JS files: 47,625 / 53,658 = 88.8%.
- Enabled against stable conformance areas, excluding staging and harness
  self-tests: 47,625 / 52,052 = 91.5%.

The current `test262` suite pass rate should be read as pass percentage within
the enabled language and built-ins surface. Intl, Annex B, staging, and harness
self-tests are not part of the default suite yet.

## WPT JavaScript-Facing APIs

- [ ] WinterTC/WPT pure APIs beyond the current `wpt-wintertc` smoke slice.
- [ ] Fetch-related WPT coverage once the fetch runtime surface is ready.
- [ ] URL, encoding, streams, timers, structured clone, WebCrypto, and other
  JavaScript-facing Web Platform API areas as they become relevant to Elide.

Counts should use WPT file/subtest discovery from the pinned WPT checkout. WPT
has a better denominator if we track both files selected by manifests and
subtests observed during a dry/listing run.

## Node.js Compatibility

- [ ] Node.js JavaScript API tests for supported built-in modules.
- [ ] Node.js runtime behavior tests that do not require unsupported process,
  native-addon, inspector, or platform-specific behavior.
- [ ] Node.js module loading, CommonJS/ESM interop, timers, buffers, URL, path,
  events, assertions, and streams subsets.

Counts should be based on Node's test files first, then refined to case-level
counts where the Node test runner exposes stable subtest names.
