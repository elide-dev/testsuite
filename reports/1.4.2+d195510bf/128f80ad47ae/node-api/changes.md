# Changes — `1.4.2+d195510bf` → `1.4.2+d195510bf`

- From: `1.4.2+d195510bf` (`51cb50d09b99fbd552ddd9e8bec3ca06666bb2fbf42788b39043a5dd06f182da`)
- To: `1.4.2+d195510bf` (`128f80ad47ae277497862c069681c338f36037dd8b838171024a76ca82f4bacd`)

| regressed | fixed | added | removed | still failing |
|---:|---:|---:|---:|---:|
| 0 | 9 | 0 | 0 | 851 |

## ✅ Fixed (9)

- `test/parallel/test-dgram-send-empty-array.js`
- `test/parallel/test-http-keep-alive-max-requests.js`
- `test/parallel/test-http-keep-alive-pipeline-max-requests.js`
- `test/parallel/test-http-many-ended-pipelines.js`
- `test/parallel/test-http-outgoing-buffer.js`
- `test/parallel/test-http-outgoing-writableFinished.js`
- `test/parallel/test-http-server-write-after-end.js`
- `test/parallel/test-net-server-close-before-ipc-response.js`
- `test/parallel/test-stream2-httpclient-response-end.js`
