# Changes — `1.4.2+d195510bf` → `1.4.2+d195510bf`

- From: `1.4.2+d195510bf` (`207a6956e0fc641e661f1feb936b7e7aa4ed799d9e481f72756785bc18766e34`)
- To: `1.4.2+d195510bf` (`ef1d789ee7adebd2f0c909c3724d2a06221b28dd51e1834a0014c9db1d46e240`)

| regressed | fixed | added | removed | still failing |
|---:|---:|---:|---:|---:|
| 3 | 12 | 0 | 0 | 868 |

## ❌ Regressed (3)

- `test/parallel/test-dns-perf_hooks.js`
- `test/parallel/test-zlib-failed-init.js`
- `test/parallel/test-zlib-zero-windowBits.js`

## ✅ Fixed (12)

- `test/parallel/test-stream2-set-encoding.js`
- `test/parallel/test-worker-arraybuffer-zerofill.js`
- `test/parallel/test-zlib-brotli-kmaxlength-rangeerror.js`
- `test/parallel/test-zlib-convenience-methods.js`
- `test/parallel/test-zlib-crc32.js`
- `test/parallel/test-zlib-deflate-constructors.js`
- `test/parallel/test-zlib-destroy.js`
- `test/parallel/test-zlib-invalid-input.js`
- `test/parallel/test-zlib-kmaxlength-rangeerror.js`
- `test/parallel/test-zlib-maxOutputLength.js`
- `test/parallel/test-zlib-sync-no-event.js`
- `test/parallel/test-zlib-zstd-kmaxlength-rangeerror.js`
