# Changes — `1.4.2+ab01c86f3` → `1.4.2+ab01c86f3`

- From: `1.4.2+ab01c86f3` (`0e325e9b9da9472184aa09785d14304782c5c3364ab6e15a9710619e5fcef84a`)
- To: `1.4.2+ab01c86f3` (`1f32c8a5774da2c51365518a0556639e21c9db857c5bdffd8c6264d6ad433b7e`)

| regressed | fixed | added | removed | still failing |
|---:|---:|---:|---:|---:|
| 2 | 4 | 0 | 0 | 810 |

## ❌ Regressed (2)

- `test/parallel/test-dgram-send-empty-array.js`
- `test/parallel/test-worker-arraybuffer-zerofill.js`

## ✅ Fixed (4)

- `test/parallel/test-module-globalpaths-nodepath.js`
- `test/parallel/test-module-stat.js`
- `test/parallel/test-net-socket-tos.js`
- `test/parallel/test-net-socket-write-after-close.js`
