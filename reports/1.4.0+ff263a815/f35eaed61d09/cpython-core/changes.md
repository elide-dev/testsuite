# Changes — `1.3.6+20260629.e4591fc` → `1.4.0+ff263a815`

- From: `1.3.6+20260629.e4591fc` (`3d3ea83ed6403be11d119eb0234efa699809d81a801986659790996c18306a06`)
- To: `1.4.0+ff263a815` (`f35eaed61d0963346bde39f3f37cf41a7f51268a1e875dc3e5cdee7123d9ee3d`)

| regressed | fixed | added | removed | still failing |
|---:|---:|---:|---:|---:|
| 5 | 1 | 5098 | 218 | 78 |

## ❌ Regressed (5)

- `test_json.test_decode.TestCDecode.test_string_with_utf8_bom`
- `test_json.test_decode.TestPyDecode.test_string_with_utf8_bom`
- `test_json.test_unicode.TestCUnicode.test_bytes_decode`
- `test_json.test_unicode.TestPyUnicode.test_bytes_decode`
- `test_list.ListTest.test_list_resize_overflow`

## ✅ Fixed (1)

- `test_json.test_scanstring.TestCScanstring.test_scanstring`
