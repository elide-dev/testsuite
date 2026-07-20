# cpython-core — `1.4.1+d089fc65d`

- Image digest: `4efe10f815d4882fa5cd90770eeee30c944862746a80f75406e33536d101e2fc`
- Suite version: `7c999be49dee7f12703e4b2e07e990544fabd40e`
- Ran: 2026-07-15T00:40:12.077Z → 2026-07-15T00:42:56.763Z

## Summary

![Pass-rate chart](./pass-rate.svg)

**Pass rate: 6237/6851 (94.87%)**

| pass | fail | error | skip | regressions | new passes |
|---:|---:|---:|---:|---:|---:|
| 6237 | 245 | 92 | 277 | 0 | 36 |

## Observed cases (6574)

- `test_class.ClassTests.testBadTypeReturned` — pass
- `test_class.ClassTests.testBinaryOps` — pass
- `test_class.ClassTests.testClassWithExtCall` — pass
- `test_class.ClassTests.testConstructorErrorMessages` — pass
- `test_slice.SliceTest.test_cmp` — pass
- `test_slice.SliceTest.test_constructor` — pass
- `test_slice.SliceTest.test_copy` — pass
- `test_class.ClassTests.testDel` — fail — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_class.py", line 472, in testDel
    self.assertEqual(["crab people, crab people"], x)
AssertionError: Lists differ: ['crab people, crab people'] != []

First list contains 1 additional elements.
First extra element 0:
'crab people, crab people'

- ['crab people, crab people']
+ []

- `test_class.ClassTests.testForExceptionsRaisedInInstanceGetattr2` — pass
- `test_class.ClassTests.testGetSetAndDel` — pass
- `test_tuple.TupleTest.test_addmul` — pass
- `test_tuple.TupleTest.test_bigrepeat` — pass
- `test_bool.BoolTest.test_blocked` — pass
- `test_bool.BoolTest.test_bool_called_at_least_once` — pass
- `test_bool.BoolTest.test_bool_new` — pass
- `test_bool.BoolTest.test_boolean` — pass
- `test_bool.BoolTest.test_callable` — pass
- `test_bool.BoolTest.test_complex` — pass
- `test_bool.BoolTest.test_contains` — pass
- `test_bool.BoolTest.test_convert` — pass
- `test_bool.BoolTest.test_convert_to_bool` — pass
- `test_bool.BoolTest.test_fileclosed` — pass
- `test_bool.BoolTest.test_float` — pass
- `test_bool.BoolTest.test_format` — pass
- `test_bool.BoolTest.test_from_bytes` — pass
- `test_bool.BoolTest.test_hasattr` — pass
- `test_bool.BoolTest.test_int` — pass
- `test_bool.BoolTest.test_interpreter_convert_to_bool_raises` — pass
- `test_bool.BoolTest.test_isinstance` — pass
- `test_bool.BoolTest.test_issubclass` — pass
- `test_bool.BoolTest.test_keyword_args` — pass
- `test_bool.BoolTest.test_marshal` — pass
- `test_bool.BoolTest.test_math` — pass
- `test_bool.BoolTest.test_operator` — pass
- `test_bool.BoolTest.test_pickle` — pass
- `test_bool.BoolTest.test_picklevalues` — pass
- `test_bool.BoolTest.test_real_and_imag` — pass
- `test_bool.BoolTest.test_repr` — pass
- `test_bool.BoolTest.test_sane_len` — pass
- `test_bool.BoolTest.test_str` — pass
- `test_bool.BoolTest.test_string` — pass
- `test_bool.BoolTest.test_subclass` — pass
- `test_bool.BoolTest.test_types` — pass
- `test_tuple.TupleTest.test_constructors` — pass
- `test_tuple.TupleTest.test_contains` — pass
- `test_tuple.TupleTest.test_contains_fake` — pass
- `test_tuple.TupleTest.test_contains_order` — pass
- `test_tuple.TupleTest.test_count` — pass
- `test_range.RangeTest.test_attributes` — pass
- `test_range.RangeTest.test_comparison` — pass
- `test_range.RangeTest.test_contains` — pass
- `test_range.RangeTest.test_count` — pass
- `test_range.RangeTest.test_empty` — pass
- `test_list.ListTest.test_addmul` — pass
- `test_range.RangeTest.test_exhausted_iterator_pickling` — pass
- `test_list.ListTest.test_append` — pass
- `test_range.RangeTest.test_index` — pass
- `test_range.RangeTest.test_invalid_invocation` — pass
- `test_range.RangeTest.test_issue11845` — pass
- `test_range.RangeTest.test_iterator_pickling` — pass
- `test_range.RangeTest.test_iterator_pickling_overflowing_index` — pass
- `test_range.RangeTest.test_iterator_setstate` — pass
- `test_class.ClassTests.testHasAttrString` — pass
- `test_range.RangeTest.test_iterator_unpickle_compat` — pass
- `test_range.RangeTest.test_large_exhausted_iterator_pickling` — pass
- `test_range.RangeTest.test_large_operands` — pass
- `test_range.RangeTest.test_large_range` — pass
- `test_range.RangeTest.test_odd_bug` — pass
- `test_class.ClassTests.testHashComparisonOfMethods` — pass
- `test_class.ClassTests.testHashStuff` — pass
- `test_class.ClassTests.testInit` — pass
- `test_class.ClassTests.testListAndDictOps` — pass
- `test_class.ClassTests.testMisc` — pass
- `test_class.ClassTests.testObjectAttributeAccessErrorMessages` — fail — AttributeError: A has no attribute 'x'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_class.py", line 698, in testObjectAttributeAccessErrorMessages
    with self.assertRaisesRegex(AttributeError, error_msg):
         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: "'A' object has no attribute 'x'" does not match "A has no attribute 'x'"

- `test_range.RangeTest.test_pickling` — pass
- `test_range.RangeTest.test_range` — pass
- `test_range.RangeTest.test_range_constructor_error_messages` — fail — TypeError: range() missing 1 required positional argument: 'a'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_range.py", line 95, in test_range_constructor_error_messages
    with self.assertRaisesRegex(
         ^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: "range expected at least 1 argument, got 0" does not match "range() missing 1 required positional argument: 'a'"

- `test_class.ClassTests.testPredefinedAttrs` — pass
- `test_class.ClassTests.testSFBug532646` — pass
- `test_class.ClassTests.testSetattrNonStringName` — pass
- `test_class.ClassTests.testSetattrWrapperNameIntern` — pass
- `test_class.ClassTests.testTypeAttributeAccessErrorMessages` — fail — AttributeError: type has no attribute 'x'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_class.py", line 685, in testTypeAttributeAccessErrorMessages
    with self.assertRaisesRegex(AttributeError, error_msg):
         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: "type object 'A' has no attribute 'x'" does not match "type has no attribute 'x'"

- `test_class.ClassTests.testUnaryOps` — pass
- `test_slice.SliceTest.test_cycle` — pass
- `test_slice.SliceTest.test_deepcopy` — pass
- `test_slice.SliceTest.test_hash` — pass
- `test_dict.DictTest.test_bad_key` — pass
- `test_dict.DictTest.test_bool` — pass
- `test_dict.DictTest.test_clear` — pass
- `test_dict.DictTest.test_constructor` — pass
- `test_set.TestBasicOpsBytes.test_copy` — pass
- `test_set.TestBasicOpsBytes.test_empty_difference` — pass
- `test_set.TestBasicOpsBytes.test_empty_difference_rev` — pass
- `test_set.TestBasicOpsBytes.test_empty_intersection` — pass
- `test_set.TestBasicOpsBytes.test_empty_isdisjoint` — pass
- `test_set.TestBasicOpsBytes.test_empty_symmetric_difference` — pass
- `test_set.TestBasicOpsBytes.test_empty_union` — pass
- `test_set.TestBasicOpsBytes.test_equivalent_equality` — pass
- `test_set.TestBasicOpsBytes.test_intersection_empty` — pass
- `test_set.TestBasicOpsBytes.test_isdisjoint_empty` — pass
- `test_set.TestBasicOpsBytes.test_issue_37219` — pass
- `test_set.TestBasicOpsBytes.test_iteration` — pass
- `test_set.TestBasicOpsBytes.test_length` — pass
- `test_set.TestBasicOpsBytes.test_pickling` — pass
- `test_set.TestBasicOpsBytes.test_repr` — pass
- `test_set.TestBasicOpsBytes.test_self_difference` — pass
- `test_set.TestBasicOpsBytes.test_self_equality` — pass
- `test_set.TestBasicOpsBytes.test_self_intersection` — pass
- `test_set.TestBasicOpsBytes.test_self_isdisjoint` — pass
- `test_set.TestBasicOpsBytes.test_self_symmetric_difference` — pass
- `test_set.TestBasicOpsBytes.test_self_union` — pass
- `test_set.TestBasicOpsBytes.test_union_empty` — pass
- `test_set.TestBasicOpsEmpty.test_copy` — pass
- `test_set.TestBasicOpsEmpty.test_empty_difference` — pass
- `test_set.TestBasicOpsEmpty.test_empty_difference_rev` — pass
- `test_set.TestBasicOpsEmpty.test_empty_intersection` — pass
- `test_set.TestBasicOpsEmpty.test_empty_isdisjoint` — pass
- `test_set.TestBasicOpsEmpty.test_empty_symmetric_difference` — pass
- `test_set.TestBasicOpsEmpty.test_empty_union` — pass
- `test_set.TestBasicOpsEmpty.test_equivalent_equality` — pass
- `test_set.TestBasicOpsEmpty.test_intersection_empty` — pass
- `test_set.TestBasicOpsEmpty.test_isdisjoint_empty` — pass
- `test_set.TestBasicOpsEmpty.test_issue_37219` — pass
- `test_set.TestBasicOpsEmpty.test_iteration` — pass
- `test_set.TestBasicOpsEmpty.test_length` — pass
- `test_set.TestBasicOpsEmpty.test_pickling` — pass
- `test_set.TestBasicOpsEmpty.test_repr` — pass
- `test_set.TestBasicOpsEmpty.test_self_difference` — pass
- `test_set.TestBasicOpsEmpty.test_self_equality` — pass
- `test_set.TestBasicOpsEmpty.test_self_intersection` — pass
- `test_set.TestBasicOpsEmpty.test_self_isdisjoint` — pass
- `test_set.TestBasicOpsEmpty.test_self_symmetric_difference` — pass
- `test_set.TestBasicOpsEmpty.test_self_union` — pass
- `test_set.TestBasicOpsEmpty.test_union_empty` — pass
- `test_set.TestBasicOpsMixedStringBytes.test_copy` — pass
- `test_set.TestBasicOpsMixedStringBytes.test_empty_difference` — pass
- `test_set.TestBasicOpsMixedStringBytes.test_empty_difference_rev` — pass
- `test_set.TestBasicOpsMixedStringBytes.test_empty_intersection` — pass
- `test_set.TestBasicOpsMixedStringBytes.test_empty_isdisjoint` — pass
- `test_set.TestBasicOpsMixedStringBytes.test_empty_symmetric_difference` — pass
- `test_set.TestBasicOpsMixedStringBytes.test_empty_union` — pass
- `test_set.TestBasicOpsMixedStringBytes.test_equivalent_equality` — pass
- `test_set.TestBasicOpsMixedStringBytes.test_intersection_empty` — pass
- `test_set.TestBasicOpsMixedStringBytes.test_isdisjoint_empty` — pass
- `test_set.TestBasicOpsMixedStringBytes.test_issue_37219` — pass
- `test_set.TestBasicOpsMixedStringBytes.test_iteration` — pass
- `test_set.TestBasicOpsMixedStringBytes.test_length` — pass
- `test_set.TestBasicOpsMixedStringBytes.test_pickling` — pass
- `test_set.TestBasicOpsMixedStringBytes.test_repr` — pass
- `test_set.TestBasicOpsMixedStringBytes.test_self_difference` — pass
- `test_set.TestBasicOpsMixedStringBytes.test_self_equality` — pass
- `test_set.TestBasicOpsMixedStringBytes.test_self_intersection` — pass
- `test_set.TestBasicOpsMixedStringBytes.test_self_isdisjoint` — pass
- `test_set.TestBasicOpsMixedStringBytes.test_self_symmetric_difference` — pass
- `test_set.TestBasicOpsMixedStringBytes.test_self_union` — pass
- `test_set.TestBasicOpsMixedStringBytes.test_union_empty` — pass
- `test_set.TestBasicOpsSingleton.test_copy` — pass
- `test_set.TestBasicOpsSingleton.test_empty_difference` — pass
- `test_set.TestBasicOpsSingleton.test_empty_difference_rev` — pass
- `test_set.TestBasicOpsSingleton.test_empty_intersection` — pass
- `test_set.TestBasicOpsSingleton.test_empty_isdisjoint` — pass
- `test_set.TestBasicOpsSingleton.test_empty_symmetric_difference` — pass
- `test_set.TestBasicOpsSingleton.test_empty_union` — pass
- `test_set.TestBasicOpsSingleton.test_equivalent_equality` — pass
- `test_set.TestBasicOpsSingleton.test_in` — pass
- `test_set.TestBasicOpsSingleton.test_intersection_empty` — pass
- `test_set.TestBasicOpsSingleton.test_isdisjoint_empty` — pass
- `test_set.TestBasicOpsSingleton.test_issue_37219` — pass
- `test_set.TestBasicOpsSingleton.test_iteration` — pass
- `test_set.TestBasicOpsSingleton.test_length` — pass
- `test_set.TestBasicOpsSingleton.test_not_in` — pass
- `test_set.TestBasicOpsSingleton.test_pickling` — pass
- `test_set.TestBasicOpsSingleton.test_repr` — pass
- `test_set.TestBasicOpsSingleton.test_self_difference` — pass
- `test_set.TestBasicOpsSingleton.test_self_equality` — pass
- `test_set.TestBasicOpsSingleton.test_self_intersection` — pass
- `test_set.TestBasicOpsSingleton.test_self_isdisjoint` — pass
- `test_set.TestBasicOpsSingleton.test_self_symmetric_difference` — pass
- `test_set.TestBasicOpsSingleton.test_self_union` — pass
- `test_set.TestBasicOpsSingleton.test_union_empty` — pass
- `test_set.TestBasicOpsString.test_copy` — pass
- `test_set.TestBasicOpsString.test_empty_difference` — pass
- `test_set.TestBasicOpsString.test_empty_difference_rev` — pass
- `test_set.TestBasicOpsString.test_empty_intersection` — pass
- `test_set.TestBasicOpsString.test_empty_isdisjoint` — pass
- `test_set.TestBasicOpsString.test_empty_symmetric_difference` — pass
- `test_tuple.TupleTest.test_free_after_iterating` — fail — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/seq_tests.py", line 430, in test_free_after_iterating
    support.check_free_after_iterating(self, iter, self.type2test)
  File "/work/suites/cpython/Lib/test/support/__init__.py", line 1830, in check_free_after_iterating
    test.assertTrue(done)
AssertionError: False is not true

- `test_tuple.TupleTest.test_getitem` — pass
- `test_tuple.TupleTest.test_getitem_error` — pass
- `test_tuple.TupleTest.test_getitemoverwriteiter` — pass
- `test_tuple.TupleTest.test_getslice` — pass
- `test_tuple.TupleTest.test_hash_exact` — fail — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_tuple.py", line 115, in test_hash_exact
    check_one_exact((), 750394483, 5740354900026072187)
  File "/work/suites/cpython/Lib/test/test_tuple.py", line 113, in check_one_exact
    self.fail(msg)
AssertionError: FAIL hash(()) == 3527539 != 5740354900026072187

- `test_tuple.TupleTest.test_hash_optional` — pass
- `test_tuple.TupleTest.test_iadd` — pass
- `test_tuple.TupleTest.test_imul` — pass
- `test_set.TestBasicOpsString.test_empty_union` — pass
- `test_set.TestBasicOpsString.test_equivalent_equality` — pass
- `test_set.TestBasicOpsString.test_intersection_empty` — pass
- `test_set.TestBasicOpsString.test_isdisjoint_empty` — pass
- `test_set.TestBasicOpsString.test_issue_37219` — pass
- …and 6374 more

## 🟢 New passes (36) — consider advancing the baseline

- `test_json.test_decode.TestCDecode.test_string_with_utf8_bom`
- `test_json.test_decode.TestPyDecode.test_string_with_utf8_bom`
- `test_unicode.UnicodeTest.test_codecs_idna`
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
- `test_inspect.test_inspect.TestGetsourceInteractive.test_getclasses_interactive`
- `test_calendar.CommandLineTestCase.test_help`
- `test_calendar.CommandLineTestCase.test_html_output_current_year`
- `test_calendar.CommandLineTestCase.test_html_output_year_css`
- `test_calendar.CommandLineTestCase.test_html_output_year_encoding`
- `test_calendar.CommandLineTestCase.test_illegal_arguments`
- `test_calendar.CommandLineTestCase.test_option_encoding`
- `test_calendar.CommandLineTestCase.test_option_lines`
- `test_calendar.CommandLineTestCase.test_option_locale`
- `test_calendar.CommandLineTestCase.test_option_months`
- `test_calendar.CommandLineTestCase.test_option_spacing`
- `test_calendar.CommandLineTestCase.test_option_type`
- `test_calendar.CommandLineTestCase.test_option_width`
- `test_calendar.CommandLineTestCase.test_output_month`
- `test_gzip.TestCommandLine.test_compress_fast_best_are_exclusive`
- `test_gzip.TestCommandLine.test_decompress_cannot_have_flags_compression`
- `test_gzip.TestCommandLine.test_decompress_infile_outfile`
- `test_gzip.TestCommandLine.test_decompress_stdin_stdout`
