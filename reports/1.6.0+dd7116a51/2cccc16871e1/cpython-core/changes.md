# Changes — `1.4.99+8b374d579` → `1.6.0+dd7116a51`

- From: `1.4.99+8b374d579` (`4094eb2fb1ff122e2707260d4bea151c43278a01e4d16e2ac400c66de8cdff77`)
- To: `1.6.0+dd7116a51` (`2cccc16871e167acc63a9ed16dea7832c0b60ad31a2604564619df92b18da30e`)

| regressed | fixed | added | removed | still failing |
|---:|---:|---:|---:|---:|
| 1 | 7 | 1552 | 2957 | 41 |

## ❌ Regressed (1)

- `test_json.test_recursion.TestPyRecursion.test_highly_nested_objects_encoding`

## ✅ Fixed (7)

- `test_builtin.BuiltinTest.test_compile`
- `test_difflib.TestSFpatches.test_html_diff`
- `test_fstring.TestCase.test_debug_expressions_are_raw_strings`
- `test_itertools.TestBasicOps.test_batched`
- `test_list.ListTest.test_list_resize_overflow`
- `test_urlparse.UrlParseTestCase.test_invalid_bracketed_hosts`
- `test_urlparse.UrlParseTestCase.test_urlsplit_normalization`
