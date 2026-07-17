# Changes — `1.4.0+fe8ca1ef6` → `1.4.1+20260716.b8b6531`

- From: `1.4.0+fe8ca1ef6` (`eae94dd2ac6f3adf30aecc22462c04fe9de1896efbdbfc7cc1454397bf062a34`)
- To: `1.4.1+20260716.b8b6531` (`3d3ea83ed6403be11d119eb0234efa699809d81a801986659790996c18306a06`)

| regressed | fixed | added | removed | still failing |
|---:|---:|---:|---:|---:|
| 0 | 18 | 195 | 5180 | 65 |

## ✅ Fixed (18)

- `test_json.test_decode.TestCDecode.test_string_with_utf8_bom`
- `test_json.test_decode.TestPyDecode.test_string_with_utf8_bom`
- `test_json.test_tool.TestTool.test_compact`
- `test_json.test_tool.TestTool.test_ensure_ascii_default`
- `test_json.test_tool.TestTool.test_help_flag`
- `test_json.test_tool.TestTool.test_indent`
- `test_json.test_tool.TestTool.test_infile_outfile`
- `test_json.test_tool.TestTool.test_infile_stdout`
- `test_json.test_tool.TestTool.test_jsonlines`
- `test_json.test_tool.TestTool.test_no_ensure_ascii_flag`
- `test_json.test_tool.TestTool.test_no_indent`
- `test_json.test_tool.TestTool.test_non_ascii_infile`
- `test_json.test_tool.TestTool.test_sort_keys_flag`
- `test_json.test_tool.TestTool.test_tab`
- `test_json.test_tool.TestTool.test_writing_in_place`
- `test_json.test_unicode.TestCUnicode.test_bytes_decode`
- `test_json.test_unicode.TestPyUnicode.test_bytes_decode`
- `test_list.ListTest.test_list_resize_overflow`
