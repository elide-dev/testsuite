# Changes — `1.4.2+d195510bf` → `1.4.2+d195510bf`

- From: `1.4.2+d195510bf` (`a775dcc1fa3c4255bea0ae7351c194507ac0530881e37395f65d30a8519fcd43`)
- To: `1.4.2+d195510bf` (`29373c30b9ca3dd7ec1865f72c2597115f1beeba8ee997f66ea13d68b45cd3f8`)

| regressed | fixed | added | removed | still failing |
|---:|---:|---:|---:|---:|
| 2 | 17 | 0 | 0 | 961 |

## ❌ Regressed (2)

- `test/parallel/test-domain-top-level-error-handler-clears-stack.js`
- `test/parallel/test-http-server-write-after-end.js`

## ✅ Fixed (17)

- `test/parallel/test-child-process-stdin.js`
- `test/parallel/test-domain-ee-implicit.js`
- `test/parallel/test-domain-from-timer.js`
- `test/parallel/test-domain-implicit-binding.js`
- `test/parallel/test-domain-implicit-fs.js`
- `test/parallel/test-domain-nexttick.js`
- `test/parallel/test-http-client-abort-destroy.js`
- `test/parallel/test-http-client-request-options.js`
- `test/parallel/test-http-client-set-timeout.js`
- `test/parallel/test-http-client-timeout.js`
- `test/parallel/test-http-header-badrequest.js`
- `test/parallel/test-http-outgoing-destroy.js`
- `test/parallel/test-http-pipeline-socket-parser-typeerror.js`
- `test/parallel/test-http-res-write-after-end.js`
- `test/parallel/test-http-server-delete-parser.js`
- `test/parallel/test-http-server-keep-alive-max-requests-null.js`
- `test/parallel/test-stream-pipe-flow-after-unpipe.js`
