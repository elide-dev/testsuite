# Changes — `1.4.2+d195510bf` → `1.4.2+d195510bf`

- From: `1.4.2+d195510bf` (`0a8d58d7a4de3d143905697ab31258ddaa3d52919d63ec9d43ed6e97ed8b59c6`)
- To: `1.4.2+d195510bf` (`5d9d925b2b09f4a9c939ec971427f0a067a9892b6f9435c4e05263d95fa8a072`)

| regressed | fixed | added | removed | still failing |
|---:|---:|---:|---:|---:|
| 3 | 26 | 0 | 0 | 893 |

## ❌ Regressed (3)

- `test/parallel/test-dns-negative-zero.js`
- `test/parallel/test-http-keep-alive-pipeline-max-requests.js`
- `test/parallel/test-stream2-set-encoding.js`

## ✅ Fixed (26)

- `test/parallel/test-fs-read-stream-patch-open.js`
- `test/parallel/test-fs-write-stream-patch-open.js`
- `test/parallel/test-http-automatic-headers.js`
- `test/parallel/test-http-client-error-rawbytes.js`
- `test/parallel/test-http-client-reject-chunked-with-content-length.js`
- `test/parallel/test-http-client-reject-cr-no-lf.js`
- `test/parallel/test-http-host-header-ipv6-fail.js`
- `test/parallel/test-http-incoming-message-connection-setter.js`
- `test/parallel/test-http-incoming-message-options.js`
- `test/parallel/test-http-invalid-te.js`
- `test/parallel/test-http-invalidheaderfield.js`
- `test/parallel/test-http-max-headers-count.js`
- `test/parallel/test-http-missing-header-separator-cr.js`
- `test/parallel/test-http-missing-header-separator-lf.js`
- `test/parallel/test-http-rawheaders-limit.js`
- `test/parallel/test-http-request-join-authorization-headers.js`
- `test/parallel/test-http-server-client-error.js`
- `test/parallel/test-http-server-reject-chunked-with-content-length.js`
- `test/parallel/test-http-server-reject-cr-no-lf.js`
- `test/parallel/test-http-set-cookies.js`
- `test/parallel/test-http-socket-error-listeners.js`
- `test/parallel/test-http-write-head-2.js`
- `test/parallel/test-http-write-head-after-set-header.js`
- `test/parallel/test-stream-drop-take.js`
- `test/parallel/test-stream-readable-dispose.js`
- `test/parallel/test-stream-toArray.js`
