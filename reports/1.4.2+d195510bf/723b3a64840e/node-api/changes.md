# Changes — `1.4.2+d195510bf` → `1.4.2+d195510bf`

- From: `1.4.2+d195510bf` (`fb5c015432d45dafd529e62a478118464ca7afe1b23da58523479c27e0f910a8`)
- To: `1.4.2+d195510bf` (`723b3a64840e9bc8bc6ea7b7bdcebd1607fe7f8776c40c0e921237145c053c22`)

| regressed | fixed | added | removed | still failing |
|---:|---:|---:|---:|---:|
| 4 | 23 | 0 | 0 | 948 |

## ❌ Regressed (4)

- `test/parallel/test-http-many-ended-pipelines.js`
- `test/parallel/test-http-pipeline-socket-parser-typeerror.js`
- `test/parallel/test-http-raw-headers.js`
- `test/parallel/test-url-format-invalid-input.js`

## ✅ Fixed (23)

- `test/parallel/test-async-local-storage-contexts.js`
- `test/parallel/test-child-process-no-deprecation.js`
- `test/parallel/test-domain-vm-promise-isolation.js`
- `test/parallel/test-fs-lchown.js`
- `test/parallel/test-fs-promises-file-handle-sync.js`
- `test/parallel/test-fs-watch-recursive-assert-leaks.js`
- `test/parallel/test-http-keep-alive-max-requests.js`
- `test/parallel/test-http-server-optimize-empty-requests.js`
- `test/parallel/test-http-url.parse-auth.js`
- `test/parallel/test-module-isBuiltin.js`
- `test/parallel/test-module-relative-lookup.js`
- `test/parallel/test-performance-resourcetimingbufferfull.js`
- `test/parallel/test-performance-resourcetimingbuffersize.js`
- `test/parallel/test-process-no-deprecation.js`
- `test/parallel/test-process-release.js`
- `test/parallel/test-url-fileurltopath.js`
- `test/parallel/test-url-format-whatwg.js`
- `test/parallel/test-url-invalid-file-url-path-input.js`
- `test/parallel/test-urlpattern-invalidthis.js`
- `test/parallel/test-v8-collect-gc-profile.js`
- `test/parallel/test-vm-script-after-evaluate.js`
- `test/parallel/test-whatwg-url-custom-properties.js`
- `test/parallel/test-worker-messaging-errors-invalid.js`
