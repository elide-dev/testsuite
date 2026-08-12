# Changes — `1.4.2+d195510bf` → `1.4.2+d195510bf`

- From: `1.4.2+d195510bf` (`52d9d93a01de03183c4f3c945e7a3727fc433f5dd718169dca9a7804029296de`)
- To: `1.4.2+d195510bf` (`a775dcc1fa3c4255bea0ae7351c194507ac0530881e37395f65d30a8519fcd43`)

| regressed | fixed | added | removed | still failing |
|---:|---:|---:|---:|---:|
| 6 | 15 | 0 | 0 | 972 |

## ❌ Regressed (6)

- `test/parallel/test-http-client-abort-destroy.js`
- `test/parallel/test-http-client-set-timeout.js`
- `test/parallel/test-http-client-timeout.js`
- `test/parallel/test-http-outgoing-destroy.js`
- `test/parallel/test-http-server-keep-alive-max-requests-null.js`
- `test/parallel/test-stream-pipe-flow-after-unpipe.js`

## ✅ Fixed (15)

- `test/parallel/test-http-response-close.js`
- `test/parallel/test-stream2-finish-pipe.js`
- `test/parallel/test-stream2-unpipe-drain.js`
- `test/parallel/test-stream2-unpipe-leak.js`
- `test/parallel/test-worker-message-channel.js`
- `test/parallel/test-worker-message-event.js`
- `test/parallel/test-worker-message-port-arraybuffer.js`
- `test/parallel/test-worker-message-port-multiple-sharedarraybuffers.js`
- `test/parallel/test-worker-message-port-transfer-duplicate.js`
- `test/parallel/test-worker-message-port-transfer-self.js`
- `test/parallel/test-worker-process-env.js`
- `test/parallel/test-worker-stack-overflow.js`
- `test/parallel/test-worker-type-check.js`
- `test/parallel/test-worker-uncaught-exception-async.js`
- `test/parallel/test-worker-uncaught-exception.js`
