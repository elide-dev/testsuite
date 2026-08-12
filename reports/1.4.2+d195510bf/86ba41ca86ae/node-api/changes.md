# Changes — `1.4.2+d195510bf` → `1.4.2+d195510bf`

- From: `1.4.2+d195510bf` (`23962278869c0fa2ad0841d8f85a5fa97a31c268456a864d6cf2a34689811d7d`)
- To: `1.4.2+d195510bf` (`86ba41ca86ae3dcbcc31b001b3fec74b584b7bd9733325ada895e7f99a857765`)

| regressed | fixed | added | removed | still failing |
|---:|---:|---:|---:|---:|
| 4 | 2 | 0 | 0 | 922 |

## ❌ Regressed (4)

- `test/parallel/test-fs-read-stream-pos.js`
- `test/parallel/test-http-pause-no-dump.js`
- `test/parallel/test-http-server-write-after-end.js`
- `test/parallel/test-stream2-set-encoding.js`

## ✅ Fixed (2)

- `test/parallel/test-fs-read-zero-length.js`
- `test/parallel/test-fs-write-optional-params.js`
