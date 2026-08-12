# Changes — `1.4.2+ab01c86f3` → `1.4.2+ab01c86f3`

- From: `1.4.2+ab01c86f3` (`0e5ba9d1f3fedb0236783f791e1a6262b92744d458fe259b599d806968a6abbc`)
- To: `1.4.2+ab01c86f3` (`664309ac7237bfe135203f294593d2725f869658a4120070ebb77902abe432a4`)

| regressed | fixed | added | removed | still failing |
|---:|---:|---:|---:|---:|
| 2 | 12 | 0 | 0 | 813 |

## ❌ Regressed (2)

- `test/parallel/test-async-local-storage-isolation.js`
- `test/parallel/test-dgram-send-empty-array.js`

## ✅ Fixed (12)

- `test/parallel/test-async-local-storage-http-multiclients.js`
- `test/parallel/test-buffer-tostring-range.js`
- `test/parallel/test-http-client-timeout-agent.js`
- `test/parallel/test-http-nodelay.js`
- `test/parallel/test-process-emitwarning.js`
- `test/parallel/test-querystring-escape.js`
- `test/parallel/test-querystring-maxKeys-non-finite.js`
- `test/parallel/test-timers-clearImmediate-als.js`
- `test/parallel/test-worker-message-port-drain.js`
- `test/parallel/test-worker-no-stdin-stdout-interaction.js`
- `test/parallel/test-worker-stdio-flush-inflight.js`
- `test/parallel/test-worker-stdio-flush.js`
