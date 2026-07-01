# cpython-core — `1.3.6+20260701.7e20640`

- Image digest: `unknown`
- Suite version: `7c999be49dee7f12703e4b2e07e990544fabd40e`
- Ran: 2026-07-01T11:22:23.898Z → 2026-07-01T11:24:21.392Z

## Summary

![Pass-rate chart](./pass-rate.svg)

**Pass rate: 4702/5572 (90.65%)**

| pass | fail | error | skip | regressions | new passes |
|---:|---:|---:|---:|---:|---:|
| 4702 | 253 | 232 | 385 | 447 | 0 |

## Observed cases (5187)

- `test_tuple.TupleTest.test_addmul` — pass
- `test_tuple.TupleTest.test_bigrepeat` — pass
- `test_tuple.TupleTest.test_constructors` — pass
- `test_tuple.TupleTest.test_contains` — pass
- `test_tuple.TupleTest.test_contains_fake` — pass
- `test_tuple.TupleTest.test_contains_order` — pass
- `test_tuple.TupleTest.test_count` — pass
- `test_slice.SliceTest.test_cmp` — pass
- `test_slice.SliceTest.test_constructor` — pass
- `test_slice.SliceTest.test_copy` — pass
- `test_list.ListTest.test_addmul` — pass
- `test_list.ListTest.test_append` — pass
- `test_range.RangeTest.test_attributes` — pass
- `test_range.RangeTest.test_comparison` — pass
- `test_range.RangeTest.test_contains` — pass
- `test_range.RangeTest.test_count` — pass
- `test_range.RangeTest.test_empty` — pass
- `test_range.RangeTest.test_exhausted_iterator_pickling` — pass
- `test_range.RangeTest.test_index` — pass
- `test_range.RangeTest.test_invalid_invocation` — pass
- `test_range.RangeTest.test_issue11845` — pass
- `test_class.ClassTests.testBadTypeReturned` — pass
- `test_class.ClassTests.testBinaryOps` — pass
- `test_class.ClassTests.testClassWithExtCall` — pass
- `test_class.ClassTests.testConstructorErrorMessages` — pass
- `test_slice.SliceTest.test_cycle` — pass
- `test_slice.SliceTest.test_deepcopy` — pass
- `test_slice.SliceTest.test_hash` — pass
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
- `test_tuple.TupleTest.test_index` — pass
- `test_tuple.TupleTest.test_iterator_pickle` — pass
- `test_tuple.TupleTest.test_keyword_args` — pass
- `test_tuple.TupleTest.test_keywords_in_subclass` — error — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_tuple.py", line 57, in test_keywords_in_subclass
    u = subclass_with_init([1, 2], newarg=3)
        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
TypeError: tuple() got an unexpected keyword argument 'newarg'

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
- `test_range.RangeTest.test_iterator_pickling` — pass
- `test_range.RangeTest.test_iterator_pickling_overflowing_index` — pass
- `test_range.RangeTest.test_iterator_setstate` — pass
- `test_range.RangeTest.test_iterator_unpickle_compat` — pass
- `test_range.RangeTest.test_large_exhausted_iterator_pickling` — pass
- `test_range.RangeTest.test_large_operands` — pass
- `test_range.RangeTest.test_large_range` — pass
- `test_range.RangeTest.test_odd_bug` — pass
- `test_range.RangeTest.test_pickling` — pass
- `test_range.RangeTest.test_range` — pass
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
- `test_tuple.TupleTest.test_len` — pass
- `test_tuple.TupleTest.test_lexicographic_ordering` — pass
- `test_tuple.TupleTest.test_minmax` — pass
- `test_tuple.TupleTest.test_no_comdat_folding` — pass
- `test_tuple.TupleTest.test_pickle` — pass
- `test_tuple.TupleTest.test_repeat` — pass
- `test_tuple.TupleTest.test_repr` — pass
- `test_bool.BoolTest.test_math` — pass
- `test_bool.BoolTest.test_operator` — pass
- `test_bool.BoolTest.test_pickle` — pass
- `test_bool.BoolTest.test_picklevalues` — pass
- `test_bool.BoolTest.test_real_and_imag` — pass
- `test_bool.BoolTest.test_repr` — pass
- `test_bool.BoolTest.test_sane_len` — pass
- `test_bool.BoolTest.test_str` — pass
- `test_bool.BoolTest.test_string` — pass
- `test_range.RangeTest.test_range_constructor_error_messages` — fail — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_range.py", line 95, in test_range_constructor_error_messages
    with self.assertRaisesRegex(
AssertionError: "range expected at least 1 argument, got 0" does not match "range() missing 1 required positional argument: 'a'"

- `test_bool.BoolTest.test_subclass` — pass
- `test_bool.BoolTest.test_types` — pass
- `test_descr` — error — SystemError('NFIUnsatisfiedLinkError: Dynamic loading not supported')
- `test_tuple.TupleTest.test_repr_large` — pass
- `test_tuple.TupleTest.test_reversed_pickle` — pass
- `test_tuple.TupleTest.test_subscript` — pass
- `test_tuple.TupleTest.test_truth` — pass
- `test_tuple.TupleTest.test_tupleresizebug` — pass
- `test_call` — error — SystemError('NFIUnsatisfiedLinkError: Dynamic loading not supported')
- `test_bisect.TestBisectC.test_backcompatibility` — error — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_bisect.py", line 35, in setUp
    (self.module.bisect_right, [], 1, 0),
     ^^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: 'NoneType' object has no attribute 'bisect_right'

- `test_class.ClassTests.testHasAttrString` — error — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_class.py", line 451, in testHasAttrString
    _testcapi = import_helper.import_module('_testcapi')
                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/support/import_helper.py", line 78, in import_module
    return importlib.import_module(name)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/importlib/__init__.py", line 90, in import_module
    return _bootstrap._gcd_import(name[level:], package, level)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
SystemError: NFIUnsatisfiedLinkError: Dynamic loading not supported

- `test_class.ClassTests.testHashComparisonOfMethods` — pass
- `test_bisect.TestBisectC.test_insort` — error — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_bisect.py", line 35, in setUp
    (self.module.bisect_right, [], 1, 0),
     ^^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: 'NoneType' object has no attribute 'bisect_right'

- `test_class.ClassTests.testHashStuff` — pass
- `test_class.ClassTests.testInit` — pass
- `test_bisect.TestBisectC.test_insort_keynotNone` — error — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_bisect.py", line 35, in setUp
    (self.module.bisect_right, [], 1, 0),
     ^^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: 'NoneType' object has no attribute 'bisect_right'

- `test_bisect.TestBisectC.test_keyword_args` — error — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_bisect.py", line 35, in setUp
    (self.module.bisect_right, [], 1, 0),
     ^^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: 'NoneType' object has no attribute 'bisect_right'

- `test_bisect.TestBisectC.test_large_pyrange` — error — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_bisect.py", line 35, in setUp
    (self.module.bisect_right, [], 1, 0),
     ^^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: 'NoneType' object has no attribute 'bisect_right'

- `test_bisect.TestBisectC.test_large_range` — error — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_bisect.py", line 35, in setUp
    (self.module.bisect_right, [], 1, 0),
     ^^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: 'NoneType' object has no attribute 'bisect_right'

- `test_slice.SliceTest.test_indices` — pass
- `test_slice.SliceTest.test_members` — pass
- `test_bisect.TestBisectC.test_lookups_with_key_function` — error — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_bisect.py", line 35, in setUp
    (self.module.bisect_right, [], 1, 0),
     ^^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: 'NoneType' object has no attribute 'bisect_right'

- `test_slice.SliceTest.test_pickle` — pass
- `test_slice.SliceTest.test_repr` — pass
- `test_slice.SliceTest.test_setslice_without_getslice` — pass
- `test_bisect.TestBisectC.test_lt_returns_non_bool` — error — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_bisect.py", line 35, in setUp
    (self.module.bisect_right, [], 1, 0),
     ^^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: 'NoneType' object has no attribute 'bisect_right'

- `test_class.ClassTests.testListAndDictOps` — pass
- `test_class.ClassTests.testMisc` — pass
- `test_class.ClassTests.testObjectAttributeAccessErrorMessages` — fail — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_class.py", line 698, in testObjectAttributeAccessErrorMessages
    with self.assertRaisesRegex(AttributeError, error_msg):
AssertionError: "'A' object has no attribute 'x'" does not match "A has no attribute 'x'"

- `test_bisect.TestBisectC.test_lt_returns_notimplemented` — error — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_bisect.py", line 35, in setUp
    (self.module.bisect_right, [], 1, 0),
     ^^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: 'NoneType' object has no attribute 'bisect_right'

- `test_class.ClassTests.testPredefinedAttrs` — pass
- `test_class.ClassTests.testSFBug532646` — pass
- `test_class.ClassTests.testSetattrNonStringName` — pass
- `test_class.ClassTests.testSetattrWrapperNameIntern` — pass
- `test_class.ClassTests.testTypeAttributeAccessErrorMessages` — fail — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_class.py", line 683, in testTypeAttributeAccessErrorMessages
    with self.assertRaisesRegex(AttributeError, error_msg):
AssertionError: "type object 'A' has no attribute 'x'" does not match "'A' object has no attribute 'x'"

- `test_class.ClassTests.testUnaryOps` — pass
- `test_bisect.TestBisectC.test_negative_lo` — error — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_bisect.py", line 35, in setUp
    (self.module.bisect_right, [], 1, 0),
     ^^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: 'NoneType' object has no attribute 'bisect_right'

- `test_bisect.TestBisectC.test_optionalSlicing` — error — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_bisect.py", line 35, in setUp
    (self.module.bisect_right, [], 1, 0),
     ^^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: 'NoneType' object has no attribute 'bisect_right'

- `test_bisect.TestBisectC.test_precomputed` — error — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_bisect.py", line 35, in setUp
    (self.module.bisect_right, [], 1, 0),
     ^^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: 'NoneType' object has no attribute 'bisect_right'

- `test_metaclass.__test__.doctests` — pass
- `test_dict.DictTest.test_bad_key` — pass
- `test_dict.DictTest.test_bool` — pass
- `test_dict.DictTest.test_clear` — pass
- `test_dict.DictTest.test_constructor` — pass
- `test_bisect.TestBisectC.test_random` — error — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_bisect.py", line 35, in setUp
    (self.module.bisect_right, [], 1, 0),
     ^^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: 'NoneType' object has no attribute 'bisect_right'

- `test_bisect.TestBisectPython.test_backcompatibility` — pass
- `test_bisect.TestBisectPython.test_insort` — pass
- `test_bisect.TestBisectPython.test_insort_keynotNone` — pass
- `test_bisect.TestBisectPython.test_keyword_args` — pass
- `test_bisect.TestBisectPython.test_large_pyrange` — pass
- `test_bisect.TestBisectPython.test_large_range` — pass
- `test_bisect.TestBisectPython.test_lookups_with_key_function` — pass
- `test_bisect.TestBisectPython.test_lt_returns_non_bool` — pass
- `test_bisect.TestBisectPython.test_lt_returns_notimplemented` — pass
- `test_re.ExternalTests.test_re_benchmarks` — pass
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
- `test_bisect.TestBisectPython.test_negative_lo` — pass
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
- `test_bisect.TestBisectPython.test_optionalSlicing` — pass
- `test_bisect.TestBisectPython.test_precomputed` — pass
- `test_bisect.TestBisectPython.test_random` — pass
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
- …and 4987 more

## ❌ Regressions (447)

- `test_descr` — SystemError('NFIUnsatisfiedLinkError: Dynamic loading not supported')
- `test_call` — SystemError('NFIUnsatisfiedLinkError: Dynamic loading not supported')
- `test_bisect.TestBisectC.test_backcompatibility` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_bisect.py", line 35, in setUp
    (self.module.bisect_right, [], 1, 0),
     ^^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: 'NoneType' object has no attribute 'bisect_right'

- `test_class.ClassTests.testHasAttrString` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_class.py", line 451, in testHasAttrString
    _testcapi = import_helper.import_module('_testcapi')
                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/support/import_helper.py", line 78, in import_module
    return importlib.import_module(name)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/importlib/__init__.py", line 90, in import_module
    return _bootstrap._gcd_import(name[level:], package, level)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
SystemError: NFIUnsatisfiedLinkError: Dynamic loading not supported

- `test_bisect.TestBisectC.test_insort` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_bisect.py", line 35, in setUp
    (self.module.bisect_right, [], 1, 0),
     ^^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: 'NoneType' object has no attribute 'bisect_right'

- `test_bisect.TestBisectC.test_insort_keynotNone` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_bisect.py", line 35, in setUp
    (self.module.bisect_right, [], 1, 0),
     ^^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: 'NoneType' object has no attribute 'bisect_right'

- `test_bisect.TestBisectC.test_keyword_args` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_bisect.py", line 35, in setUp
    (self.module.bisect_right, [], 1, 0),
     ^^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: 'NoneType' object has no attribute 'bisect_right'

- `test_bisect.TestBisectC.test_large_pyrange` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_bisect.py", line 35, in setUp
    (self.module.bisect_right, [], 1, 0),
     ^^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: 'NoneType' object has no attribute 'bisect_right'

- `test_bisect.TestBisectC.test_large_range` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_bisect.py", line 35, in setUp
    (self.module.bisect_right, [], 1, 0),
     ^^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: 'NoneType' object has no attribute 'bisect_right'

- `test_bisect.TestBisectC.test_lookups_with_key_function` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_bisect.py", line 35, in setUp
    (self.module.bisect_right, [], 1, 0),
     ^^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: 'NoneType' object has no attribute 'bisect_right'

- `test_bisect.TestBisectC.test_lt_returns_non_bool` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_bisect.py", line 35, in setUp
    (self.module.bisect_right, [], 1, 0),
     ^^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: 'NoneType' object has no attribute 'bisect_right'

- `test_bisect.TestBisectC.test_lt_returns_notimplemented` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_bisect.py", line 35, in setUp
    (self.module.bisect_right, [], 1, 0),
     ^^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: 'NoneType' object has no attribute 'bisect_right'

- `test_bisect.TestBisectC.test_negative_lo` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_bisect.py", line 35, in setUp
    (self.module.bisect_right, [], 1, 0),
     ^^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: 'NoneType' object has no attribute 'bisect_right'

- `test_bisect.TestBisectC.test_optionalSlicing` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_bisect.py", line 35, in setUp
    (self.module.bisect_right, [], 1, 0),
     ^^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: 'NoneType' object has no attribute 'bisect_right'

- `test_bisect.TestBisectC.test_precomputed` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_bisect.py", line 35, in setUp
    (self.module.bisect_right, [], 1, 0),
     ^^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: 'NoneType' object has no attribute 'bisect_right'

- `test_bisect.TestBisectC.test_random` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_bisect.py", line 35, in setUp
    (self.module.bisect_right, [], 1, 0),
     ^^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: 'NoneType' object has no attribute 'bisect_right'

- `test_bisect.TestDocExampleC.test_colors` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_bisect.py", line 405, in test_colors
    bisect_left = self.module.bisect_left
                  ^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: 'NoneType' object has no attribute 'bisect_left'

- `test_bisect.TestDocExampleC.test_grades` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_bisect.py", line 398, in test_grades
    result = [grade(score) for score in [33, 99, 77, 70, 89, 90, 100]]
             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_bisect.py", line 398, in <listcomp>
    result = [grade(score) for score in [33, 99, 77, 70, 89, 90, 100]]
              ^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_bisect.py", line 395, in grade
    i = self.module.bisect(breakpoints, score)
        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: 'NoneType' object has no attribute 'bisect'

- `test_bisect.TestErrorHandlingC.test_arg_parsing` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_bisect.py", line 380, in test_arg_parsing
    for f in (self.module.bisect_left, self.module.bisect_right,
              ^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: 'NoneType' object has no attribute 'bisect_left'

- `test_bisect.TestErrorHandlingC.test_cmp_err` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_bisect.py", line 375, in test_cmp_err
    for f in (self.module.bisect_left, self.module.bisect_right,
              ^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: 'NoneType' object has no attribute 'bisect_left'

- `test_bisect.TestErrorHandlingC.test_get_only` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_bisect.py", line 369, in test_get_only
    for f in (self.module.bisect_left, self.module.bisect_right,
              ^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: 'NoneType' object has no attribute 'bisect_left'

- `test_bisect.TestErrorHandlingC.test_len_only` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_bisect.py", line 364, in test_len_only
    for f in (self.module.bisect_left, self.module.bisect_right,
              ^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: 'NoneType' object has no attribute 'bisect_left'

- `test_bisect.TestErrorHandlingC.test_non_sequence` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_bisect.py", line 359, in test_non_sequence
    for f in (self.module.bisect_left, self.module.bisect_right,
              ^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: 'NoneType' object has no attribute 'bisect_left'

- `test_bisect.TestInsortC.test_backcompatibility` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_bisect.py", line 316, in test_backcompatibility
    self.assertEqual(self.module.insort, self.module.insort_right)
                     ^^^^^^^^^^^^^^^^^^
AttributeError: 'NoneType' object has no attribute 'insort'

- `test_bisect.TestInsortC.test_listDerived` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_bisect.py", line 325, in test_listDerived
    self.module.insort_left(lst, 10)
AttributeError: 'NoneType' object has no attribute 'insort_left'

- `test_bisect.TestInsortC.test_vsBuiltinSort` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_bisect.py", line 309, in test_vsBuiltinSort
    f = self.module.insort_left
        ^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: 'NoneType' object has no attribute 'insort_left'

- `test_bytes` — SystemError('NFIUnsatisfiedLinkError: Dynamic loading not supported')
- `test_dict.DictTest.test_free_after_iterating` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_dict.py", line 1285, in test_free_after_iterating
    support.check_free_after_iterating(self, iter, dict)
  File "/work/suites/cpython/Lib/test/support/__init__.py", line 1830, in check_free_after_iterating
    test.assertTrue(done)
AssertionError: False is not true

- `test_scope.ScopeTests.testLeaks` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_scope.py", line 478, in testLeaks
    self.assertEqual(Foo.count, 0)
AssertionError: 100 != 0

- `test_dict.DictTest.test_mutating_iteration_delete` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_dict.py", line 530, in test_mutating_iteration_delete
    with self.assertRaises(RuntimeError):
AssertionError: RuntimeError not raised

- `test_dict.DictTest.test_mutating_iteration_delete_over_items` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_dict.py", line 548, in test_mutating_iteration_delete_over_items
    with self.assertRaises(RuntimeError):
AssertionError: RuntimeError not raised

- `test_dict.DictTest.test_mutating_iteration_delete_over_values` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_dict.py", line 539, in test_mutating_iteration_delete_over_values
    with self.assertRaises(RuntimeError):
AssertionError: RuntimeError not raised

- `test_dict.DictTest.test_oob_indexing_dictiter_iternextitem` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_dict.py", line 1396, in test_oob_indexing_dictiter_iternextitem
    self.assertRaises(RuntimeError, iter_and_mutate)
AssertionError: RuntimeError not raised by iter_and_mutate

- `test_builtin` — SystemError('NFIUnsatisfiedLinkError: Dynamic loading not supported')
- `test_dict.DictTest.test_setdefault_atomic` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_dict.py", line 435, in test_setdefault_atomic
    self.assertEqual(hashed1.eq_count + hashed2.eq_count, 1)
AssertionError: 2 != 1

- `test_weakset.TestWeakSet.test_add` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_weakset.py", line 229, in test_add
    self.assertTrue(len(self.fs) == 1)
AssertionError: False is not true

- `test_exceptions` — SystemError("Option python.IsolateNativeModules is set to 'false' and a second GraalPy context attempted to load a native module '_testcapi' from path '/opt/elide/lib/resources/python/python-home/lib/graalpy25.0/modules/_testcapi.graalpy250-312-native-x86_64-linux.so'. At least one context in this process runs with 'IsolateNativeModules' set to false. Depending on the order of context creation, this means some contexts in the process cannot use native module.")
- `test_fractions.FractionTest.test_invalid_formats` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_fractions.py", line 1501, in test_invalid_formats
    with self.assertRaises(TypeError):
AssertionError: TypeError not raised

- `test_syntax.SyntaxTestCase.test_error_parenthesis` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_syntax.py", line 2376, in test_error_parenthesis
    self._check_error(f"a = {paren} 1, 2, 3\nb=3", f"\\{paren}' was never closed")
  File "/work/suites/cpython/Lib/test/test_syntax.py", line 2040, in _check_error
    self.fail("SyntaxError did not contain %r" % (errtext,))
AssertionError: SyntaxError did not contain "\\(' was never closed"

- `test_syntax.SyntaxTestCase.test_invalid_line_continuation_error_position` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_syntax.py", line 2353, in test_invalid_line_continuation_error_position
    self._check_error(r"a = 3 \ 4",
  File "/work/suites/cpython/Lib/test/test_syntax.py", line 2045, in _check_error
    self.assertEqual(err.offset, offset)
AssertionError: 9 != 8

- `test_syntax.SyntaxTestCase.test_invisible_characters` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_syntax.py", line 2404, in test_invisible_characters
    self._check_error('print\x17("Hello")', "invalid non-printable character")
  File "/work/suites/cpython/Lib/test/test_syntax.py", line 2040, in _check_error
    self.fail("SyntaxError did not contain %r" % (errtext,))
AssertionError: SyntaxError did not contain 'invalid non-printable character'

- `test_syntax.SyntaxTestCase.test_multiline_compiler_error_points_to_the_end` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_syntax.py", line 2426, in test_multiline_compiler_error_points_to_the_end
    self._check_error(
  File "/work/suites/cpython/Lib/test/test_syntax.py", line 2043, in _check_error
    self.assertEqual(err.lineno, lineno)
AssertionError: 1 != 3

- `test_weakset.TestWeakSet.test_intersection` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_weakset.py", line 107, in test_intersection
    self.assertEqual(len(i), len(self.items2))
AssertionError: 3 != 2

- `test_weakset.TestWeakSet.test_len` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_weakset.py", line 60, in test_len
    self.assertEqual(len(self.fs), 0)
AssertionError: 1 != 0

- `test_array.ByteTest.test_buffer` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_array.py", line 1070, in test_buffer
    self.assertRaises(BufferError, a.append, a[0])
AssertionError: BufferError not raised by append

- `test_eof.EOFTestCase.test_EOFS_with_file` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_eof.py", line 54, in test_EOFS_with_file
    self.assertEqual(err[-3:], [
AssertionError: Lists differ: [] != ["    ä = '''thîs is ", '        ^', 'Synt[68 chars] 3)']

Second list contains 3 additional elements.
First extra element 0:
"    ä = '''thîs is "

- []
+ ["    ä = '''thîs is ",
+  '        ^',
+  'SyntaxError: unterminated triple-quoted string literal (detected at line 3)']

- `test_eof` — SystemError("Option python.IsolateNativeModules is set to 'false' and a second GraalPy context attempted to load a native module '_cpython_unicodedata' from path '/opt/elide/lib/resources/python/python-home/lib/graalpy25.0/modules/_cpython_unicodedata.graalpy250-312-native-x86_64-linux.so'. At least one context in this process runs with 'IsolateNativeModules' set to false. Depending on the order of context creation, this means some contexts in the process cannot use native module.")
- `test_weakset.TestWeakSet.test_len_cycles` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_weakset.py", line 423, in test_len_cycles
    self.assertIn(n1, (0, 1))
AssertionError: 20 not found in (0, 1)

- `test_weakset.TestWeakSet.test_len_race` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_weakset.py", line 428, in test_len_race
    self.addCleanup(gc.set_threshold, *gc.get_threshold())
                    ^^^^^^^^^^^^^^^^
AttributeError: module 'gc' has no attribute 'set_threshold'

- `test_decimal` — SystemError("Option python.IsolateNativeModules is set to 'false' and a second GraalPy context attempted to load a native module '_testcapi' from path '/opt/elide/lib/resources/python/python-home/lib/graalpy25.0/modules/_testcapi.graalpy250-312-native-x86_64-linux.so'. At least one context in this process runs with 'IsolateNativeModules' set to false. Depending on the order of context creation, this means some contexts in the process cannot use native module.")
- `test_weakset.TestWeakSet.test_symmetric_difference` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_weakset.py", line 141, in test_symmetric_difference
    self.assertEqual(len(i), len(self.items) + len(self.items2))
AssertionError: 6 != 5

- `test_weakset.TestWeakSet.test_union` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_weakset.py", line 87, in test_union
    self.assertEqual(len(u), len(self.items) + len(self.items2))
AssertionError: 6 != 5

- `test_weakset.TestWeakSet.test_weak_destroy_and_mutate_while_iterating` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_weakset.py", line 391, in test_weak_destroy_and_mutate_while_iterating
    self.assertNotIn(u, s)
AssertionError: 'Z' unexpectedly found in {<weakref at 749517136; to 'UserString' at 909612958>, <weakref at 1853469890; to 'UserString' at 1116598007>, <weakref at 1286706230; to 'UserString' at 937415095>, <weakref at 795940152; to 'UserString' at 1175761890>, <weakref at 1705538305; to 'UserString' at 860433618>, <weakref at 500948600; to 'UserString' at 945499672>, <weakref at 1039668060; to 'UserString' at 718782616>, <weakref at 1833983834; to 'UserString' at 1509574004>, <weakref at 1311034689; to 'UserString' at 1161251321>, <weakref at 235990740; to 'UserString' at 56788272>, <weakref at 2129608161; to 'UserString' at 837141501>, <weakref at 339392358; to 'UserString' at 1441700165>, <weakref at 2131606558; to 'UserString' at 475126725>, <weakref at 1622152364; to 'UserString' at 112826777>, <weakref at 290025833; to 'UserString' at 1736536758>, <weakref at 313955300; to 'UserString' at 193294515>, <weakref at 1623926932; to 'UserString' at 1473380534>, <weakref at 1201301682; to 'UserString' at 793940072>, <weakref at 1632637887; to 'UserString' at 1189768074>, <weakref at 1086301075; to 'UserString' at 1973405501>, <weakref at 1119967617; to 'UserString' at 1529332894>, <weakref at 196650611; to 'UserString' at 1683793503>, <weakref at 1545001743; to 'UserString' at 1786069435>, <weakref at 1476489060; to 'UserString' at 581893660>, <weakref at 1567395108; to 'UserString' at 1136207977>, <weakref at 1440117723; to 'UserString' at 1279174694>, <weakref at 2145205975; to 'UserString' at 889954383>, <weakref at 262894806; to 'UserString' at 274317269>, <weakref at 561344323; to 'UserString' at 938999573>, <weakref at 2122463923; to 'UserString' at 759107462>, <weakref at 820874803; to 'UserString' at 2075257387>, <weakref at 174143931; to 'UserString' at 1436283997>, <weakref at 1643584013; to 'UserString' at 1936399280>, <weakref at 188692585; to 'UserString' at 1981246827>, <weakref at 330175710; to 'UserString' at 2116189256>, <weakref at 516445980; to 'UserString' at 1390655409>, <weakref at 751600564; to 'UserString' at 278198537>, <weakref at 1967446099; to 'UserString' at 438799746>, <weakref at 247523763; to 'UserString' at 1643139939>, <weakref at 1815614098; to 'UserString' at 1802760747>, <weakref at 1707916332; to 'UserString' at 984951068>, <weakref at 632832561; to 'UserString' at 1243289600>, <weakref at 835222947; to 'UserString' at 1872693434>, <weakref at 1456237170; to 'UserString' at 963532618>, <weakref at 1791105098; to 'UserString' at 1583966670>, <weakref at 1369621795; to 'UserString' at 2094554955>, <weakref at 1363202476; to 'UserString' at 254530803>, <weakref at 1449586277; to 'UserString' at 1732901527>, <weakref at 1601312858; to 'UserString' at 341817039>, <weakref at 393044376; to 'UserString' at 952486543>, <weakref at 128410068; to 'UserString' at 1088122273>, <weakref at 1540069544; to 'UserString' at 1999011276>}

- `test_array.ByteTest.test_free_after_iterating` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_array.py", line 1156, in test_free_after_iterating
    support.check_free_after_iterating(self, iter, array.array,
  File "/work/suites/cpython/Lib/test/support/__init__.py", line 1830, in check_free_after_iterating
    test.assertTrue(done)
AssertionError: False is not true

- `test_array.ByteTest.test_initialize_with_unicode` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_array.py", line 1144, in test_initialize_with_unicode
    self.assertIn("cannot use a unicode array", str(cm.exception))
AssertionError: 'cannot use a unicode array' not found in "'str' object cannot be interpreted as an integer"

- `test_array.ByteTest.test_reverse_iterator_picking` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_array.py", line 366, in test_reverse_iterator_picking
    d = pickle.dumps((itorig, orig), proto)
        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/copyreg.py", line 70, in _reduce_ex
    raise TypeError(f"cannot pickle {cls.__name__!r} object")
TypeError: cannot pickle 'array' object

- `test_weakset.TestWeakSet.test_weak_destroy_while_iterating` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_weakset.py", line 367, in test_weak_destroy_while_iterating
    self.assertEqual(len(s), len(items))
AssertionError: 3 != 2

- `test_array.ByteTest.test_weakref` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_array.py", line 1098, in test_weakref
    p = weakref.proxy(s)
        ^^^^^^^^^^^^^^^^
TypeError: cannot create weak reference to 'array.array' object

- `test_array.DoubleTest.test_buffer` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_array.py", line 1070, in test_buffer
    self.assertRaises(BufferError, a.append, a[0])
AssertionError: BufferError not raised by append

- `test_csv` — SystemError("Option python.IsolateNativeModules is set to 'false' and a second GraalPy context attempted to load a native module '_testcapi' from path '/opt/elide/lib/resources/python/python-home/lib/graalpy25.0/modules/_testcapi.graalpy250-312-native-x86_64-linux.so'. At least one context in this process runs with 'IsolateNativeModules' set to false. Depending on the order of context creation, this means some contexts in the process cannot use native module.")
- `test_grammar.GrammarTests.test_comparison_is_literal` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_grammar.py", line 1490, in test_comparison_is_literal
    check('x is not (1, 2)', '"is not" with \'tuple\' literal')
  File "/work/suites/cpython/Lib/test/test_grammar.py", line 1483, in check
    self.check_syntax_warning(test, msg)
  File "/work/suites/cpython/Lib/test/support/warnings_helper.py", line 23, in check_syntax_warning
    testcase.assertEqual(len(warns), 1, warns)
AssertionError: 0 != 1 : []

- `test_urlparse.UrlParseTestCase.test_invalid_bracketed_hosts` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_urlparse.py", line 1276, in test_invalid_bracketed_hosts
    self.assertRaises(ValueError, urllib.parse.urlsplit, 'scheme://prefix.[v6a.ip]')
AssertionError: ValueError not raised by urlsplit

- `test_grammar.GrammarTests.test_try_star` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_grammar.py", line 1414, in test_try_star
    def test_try_star(self):
NotImplementedError: try star

- `test_property.PropertySubclassTests.test_docstring_copy2` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_property.py", line 432, in test_docstring_copy2
    self.assertEqual(p2.__doc__, "user")
AssertionError: 'doc 2' != 'user'
- doc 2
+ user


- `test_property.PropertySubclassTests.test_issue41287` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_property.py", line 338, in test_issue41287
    self.assertEqual(doc, "issue 41287 is fixed",
AssertionError: 'This is a subclass of property' != 'issue 41287 is fixed'
- This is a subclass of property
+ issue 41287 is fixed
 : Subclasses of `property` ignores `doc` constructor argument

- `test_property.PropertySubclassTests.test_prefer_explicit_doc` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_property.py", line 439, in test_prefer_explicit_doc
    self.assertEqual(PropertySub(doc="explicit doc").__doc__, "explicit doc")
AssertionError: 'This is a subclass of property' != 'explicit doc'
- This is a subclass of property
+ explicit doc


- `test_property.PropertySubclassTests.test_property_no_doc_on_getter` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_property.py", line 466, in test_property_no_doc_on_getter
    self.assertEqual(PropertySub(NoDoc()).__doc__, None)
AssertionError: 'This is a subclass of property' != None

- `test_property.PropertySubclassTests.test_property_with_slots_and_doc_slot_docstring_present` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_property.py", line 321, in test_property_with_slots_and_doc_slot_docstring_present
    self.assertEqual("what's up", p.__doc__)  # new in 3.12: This gets set.
                                  ^^^^^^^^^
AttributeError: 'slotted_prop' object has no attribute '__doc__'

- `test_property.PropertySubclassTests.test_property_with_slots_no_docstring` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_property.py", line 291, in test_property_with_slots_no_docstring
    p = slotted_prop(undocumented_getter)  # New in 3.12: no AttributeError
        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: 'slotted_prop' object has no attribute '__doc__'

- `test_property.PropertyTests.test_class_property` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_property.py", line 212, in test_class_property
    self.assertEqual(A.__doc__, "A doc for 'A'")
AssertionError: <bound method ? of <class 'test.test_prop[47 chars].A'>> != "A doc for 'A'"

- `test_property.PropertyTests.test_class_property_override` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_property.py", line 223, in test_class_property_override
    self.assertEqual(A.__doc__, 'Second')
AssertionError: <bound method ? of <class 'test.test_prop[56 chars].A'>> != 'Second'

- `test_property.PropertyTests.test_property_set_name_incorrect_args` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_property.py", line 229, in test_property_set_name_incorrect_args
    with self.assertRaisesRegex(
AssertionError: "^__set_name__\(\) takes 2 positional arguments but 0 were given$" does not match "property.__set_name__() missing 2 required positional arguments: 'a' and 'b'"

- `test_float` — SystemError('NFIUnsatisfiedLinkError: Dynamic loading not supported')
- `test_dict_version` — SystemError("Option python.IsolateNativeModules is set to 'false' and a second GraalPy context attempted to load a native module '_testcapi' from path '/opt/elide/lib/resources/python/python-home/lib/graalpy25.0/modules/_testcapi.graalpy250-312-native-x86_64-linux.so'. At least one context in this process runs with 'IsolateNativeModules' set to false. Depending on the order of context creation, this means some contexts in the process cannot use native module.")
- `test_funcattrs.FunctionPropertiesTest.test___builtins__` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_funcattrs.py", line 84, in test___builtins__
    self.assertIs(self.b.__builtins__, builtins_dict)
                  ^^^^^^^^^^^^^^^^^^^
AttributeError: 'function' object has no attribute '__builtins__'

- `test_array.DoubleTest.test_free_after_iterating` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_array.py", line 1156, in test_free_after_iterating
    support.check_free_after_iterating(self, iter, array.array,
  File "/work/suites/cpython/Lib/test/support/__init__.py", line 1830, in check_free_after_iterating
    test.assertTrue(done)
AssertionError: False is not true

- `test_named_expressions.NamedExpressionInvalidTest.test_named_expression_invalid_mangled_class_variables` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_named_expressions.py", line 373, in test_named_expression_invalid_mangled_class_variables
    with self.assertRaisesRegex(SyntaxError,
AssertionError: "assignment expression cannot rebind comprehension iteration variable '__x'" does not match "assignment expression cannot rebind comprehension iteration variable '%s' (<string>, line 3)"

- `test_raise.TestContext.test_3611` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_raise.py", line 484, in test_3611
    self.assertEqual(ZeroDivisionError, cm.unraisable.exc_type)
                                        ^^^^^^^^^^^^^^^^^^^^^^
AttributeError: 'NoneType' object has no attribute 'exc_type'

- `test_array.DoubleTest.test_initialize_with_unicode` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_array.py", line 1144, in test_initialize_with_unicode
    self.assertIn("cannot use a unicode array", str(cm.exception))
AssertionError: 'cannot use a unicode array' not found in 'must be real number, not str'

- `test_array.DoubleTest.test_reverse_iterator_picking` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_array.py", line 366, in test_reverse_iterator_picking
    d = pickle.dumps((itorig, orig), proto)
        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/copyreg.py", line 70, in _reduce_ex
    raise TypeError(f"cannot pickle {cls.__name__!r} object")
TypeError: cannot pickle 'array' object

- `test_array.DoubleTest.test_weakref` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_array.py", line 1098, in test_weakref
    p = weakref.proxy(s)
        ^^^^^^^^^^^^^^^^
TypeError: cannot create weak reference to 'array.array' object

- `test_array.FloatTest.test_buffer` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_array.py", line 1070, in test_buffer
    self.assertRaises(BufferError, a.append, a[0])
AssertionError: BufferError not raised by append

- `test_urlparse.UrlParseTestCase.test_urlsplit_normalization` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_urlparse.py", line 1391, in test_urlsplit_normalization
    denorm_chars = [
                   ^
  File "/work/suites/cpython/Lib/test/test_urlparse.py", line 1393, in <listcomp>
    if unicodedata.decomposition(c)
       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: module '_cpython_unicodedata' does not have 'decomposition' attribute

- `test_dis` — ModuleNotFoundError("No module named '_testinternalcapi'")
- `test_stringprep` — SystemError("Option python.IsolateNativeModules is set to 'false' and a second GraalPy context attempted to load a native module '_cpython_unicodedata' from path '/opt/elide/lib/resources/python/python-home/lib/graalpy25.0/modules/_cpython_unicodedata.graalpy250-312-native-x86_64-linux.so'. At least one context in this process runs with 'IsolateNativeModules' set to false. Depending on the order of context creation, this means some contexts in the process cannot use native module.")
- `test_pulldom.PullDOMTestCase.test_expandItem` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_pulldom.py", line 107, in test_expandItem
    items = pulldom.parseString(SMALL_SAMPLE)
            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/xml/dom/pulldom.py", line 335, in parseString
    parser = xml.sax.make_parser()
             ^^^^^^^^^^^^^^^^^^^^^
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/xml/sax/__init__.py", line 76, in make_parser
    return _create_parser(parser_name)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/xml/sax/__init__.py", line 93, in _create_parser
    drv_module = __import__(parser_name,{},{},['create_parser'])
                 ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/xml/sax/expatreader.py", line 16, in <module>
    from xml.parsers import expat
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/xml/parsers/expat.py", line 4, in <module>
    from pyexpat import *
SystemError: Option python.IsolateNativeModules is set to 'false' and a second GraalPy context attempted to load a native module 'pyexpat' from path '/opt/elide/lib/resources/python/python-home/lib/graalpy25.0/modules/pyexpat.graalpy250-312-native-x86_64-linux.so'. At least one context in this process runs with 'IsolateNativeModules' set to false. Depending on the order of context creation, this means some contexts in the process cannot use native module.

- `test_pulldom.PullDOMTestCase.test_external_ges_default` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_pulldom.py", line 164, in test_external_ges_default
    parser = pulldom.parseString(SMALL_SAMPLE)
             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/xml/dom/pulldom.py", line 335, in parseString
    parser = xml.sax.make_parser()
             ^^^^^^^^^^^^^^^^^^^^^
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/xml/sax/__init__.py", line 76, in make_parser
    return _create_parser(parser_name)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/xml/sax/__init__.py", line 93, in _create_parser
    drv_module = __import__(parser_name,{},{},['create_parser'])
                 ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/xml/sax/expatreader.py", line 16, in <module>
    from xml.parsers import expat
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/xml/parsers/expat.py", line 4, in <module>
    from pyexpat import *
SystemError: Option python.IsolateNativeModules is set to 'false' and a second GraalPy context attempted to load a native module 'pyexpat' from path '/opt/elide/lib/resources/python/python-home/lib/graalpy25.0/modules/pyexpat.graalpy250-312-native-x86_64-linux.so'. At least one context in this process runs with 'IsolateNativeModules' set to false. Depending on the order of context creation, this means some contexts in the process cannot use native module.

- `test_pulldom.PullDOMTestCase.test_parse` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_pulldom.py", line 35, in test_parse
    handler = pulldom.parse(tstfile)
              ^^^^^^^^^^^^^^^^^^^^^^
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/xml/dom/pulldom.py", line 326, in parse
    parser = xml.sax.make_parser()
             ^^^^^^^^^^^^^^^^^^^^^
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/xml/sax/__init__.py", line 76, in make_parser
    return _create_parser(parser_name)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/xml/sax/__init__.py", line 93, in _create_parser
    drv_module = __import__(parser_name,{},{},['create_parser'])
                 ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/xml/sax/expatreader.py", line 16, in <module>
    from xml.parsers import expat
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/xml/parsers/expat.py", line 4, in <module>
    from pyexpat import *
SystemError: Option python.IsolateNativeModules is set to 'false' and a second GraalPy context attempted to load a native module 'pyexpat' from path '/opt/elide/lib/resources/python/python-home/lib/graalpy25.0/modules/pyexpat.graalpy250-312-native-x86_64-linux.so'. At least one context in this process runs with 'IsolateNativeModules' set to false. Depending on the order of context creation, this means some contexts in the process cannot use native module.

- `test_pulldom.PullDOMTestCase.test_parse_semantics` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_pulldom.py", line 46, in test_parse_semantics
    items = pulldom.parseString(SMALL_SAMPLE)
            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/xml/dom/pulldom.py", line 335, in parseString
    parser = xml.sax.make_parser()
             ^^^^^^^^^^^^^^^^^^^^^
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/xml/sax/__init__.py", line 76, in make_parser
    return _create_parser(parser_name)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/xml/sax/__init__.py", line 93, in _create_parser
    drv_module = __import__(parser_name,{},{},['create_parser'])
                 ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/xml/sax/expatreader.py", line 16, in <module>
    from xml.parsers import expat
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/xml/parsers/expat.py", line 4, in <module>
    from pyexpat import *
SystemError: Option python.IsolateNativeModules is set to 'false' and a second GraalPy context attempted to load a native module 'pyexpat' from path '/opt/elide/lib/resources/python/python-home/lib/graalpy25.0/modules/pyexpat.graalpy250-312-native-x86_64-linux.so'. At least one context in this process runs with 'IsolateNativeModules' set to false. Depending on the order of context creation, this means some contexts in the process cannot use native module.

- `test_pulldom.SAX2DOMTestCase.test_basic` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_pulldom.py", line 304, in test_basic
    sd = SAX2DOMTestHelper(fin, xml.sax.make_parser(),
                                ^^^^^^^^^^^^^^^^^^^^^
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/xml/sax/__init__.py", line 76, in make_parser
    return _create_parser(parser_name)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/xml/sax/__init__.py", line 93, in _create_parser
    drv_module = __import__(parser_name,{},{},['create_parser'])
                 ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/xml/sax/expatreader.py", line 16, in <module>
    from xml.parsers import expat
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/xml/parsers/expat.py", line 4, in <module>
    from pyexpat import *
SystemError: Option python.IsolateNativeModules is set to 'false' and a second GraalPy context attempted to load a native module 'pyexpat' from path '/opt/elide/lib/resources/python/python-home/lib/graalpy25.0/modules/pyexpat.graalpy250-312-native-x86_64-linux.so'. At least one context in this process runs with 'IsolateNativeModules' set to false. Depending on the order of context creation, this means some contexts in the process cannot use native module.

- `test_symtable` — ModuleNotFoundError("No module named '_symtable'")
- `test_array.FloatTest.test_free_after_iterating` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_array.py", line 1156, in test_free_after_iterating
    support.check_free_after_iterating(self, iter, array.array,
  File "/work/suites/cpython/Lib/test/support/__init__.py", line 1830, in check_free_after_iterating
    test.assertTrue(done)
AssertionError: False is not true

- `test_array.FloatTest.test_initialize_with_unicode` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_array.py", line 1144, in test_initialize_with_unicode
    self.assertIn("cannot use a unicode array", str(cm.exception))
AssertionError: 'cannot use a unicode array' not found in 'must be real number, not str'

- `test_array.FloatTest.test_reverse_iterator_picking` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_array.py", line 366, in test_reverse_iterator_picking
    d = pickle.dumps((itorig, orig), proto)
        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/copyreg.py", line 70, in _reduce_ex
    raise TypeError(f"cannot pickle {cls.__name__!r} object")
TypeError: cannot pickle 'array' object

- `test_array.FloatTest.test_weakref` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_array.py", line 1098, in test_weakref
    p = weakref.proxy(s)
        ^^^^^^^^^^^^^^^^
TypeError: cannot create weak reference to 'array.array' object

- `test_array.IntTest.test_buffer` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_array.py", line 1070, in test_buffer
    self.assertRaises(BufferError, a.append, a[0])
AssertionError: BufferError not raised by append

- `test_sax` — SystemError('NFIUnsatisfiedLinkError: Dynamic loading not supported')
- `test_runpy.RunModuleTestCase.test_run_module` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_runpy.py", line 436, in test_run_module
    self._check_module(depth)
  File "/work/suites/cpython/Lib/test/test_runpy.py", line 295, in _check_module
    forget(mod_name)
  File "/work/suites/cpython/Lib/test/support/import_helper.py", line 50, in forget
    unlink(importlib.util.cache_from_source(source, optimization=opt))
  File "/work/suites/cpython/Lib/test/support/os_helper.py", line 328, in unlink
    _unlink(filename)
TypeError: unlink: path should be string, bytes or os.PathLike, not NoneType

- `test_positional_only_arg.PositionalOnlyTestCase.test_annotations_constant_fold` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_positional_only_arg.py", line 443, in test_annotations_constant_fold
    codes = [(i.opname, i.argval) for i in dis.get_instructions(g)]
                                           ^^^^^^^^^^^^^^^^^^^^^^^
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/dis.py", line 356, in get_instructions
    raise NotImplementedError("dis module is not supported on GraalPy")
NotImplementedError: dis module is not supported on GraalPy

- `test_runpy.RunModuleTestCase.test_run_module_alter_sys` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_runpy.py", line 519, in test_run_module_alter_sys
    self._check_module(depth, alter_sys=True)
  File "/work/suites/cpython/Lib/test/test_runpy.py", line 295, in _check_module
    forget(mod_name)
  File "/work/suites/cpython/Lib/test/support/import_helper.py", line 50, in forget
    unlink(importlib.util.cache_from_source(source, optimization=opt))
  File "/work/suites/cpython/Lib/test/support/os_helper.py", line 328, in unlink
    _unlink(filename)
TypeError: unlink: path should be string, bytes or os.PathLike, not NoneType

- `test_pyclbr` — ModuleNotFoundError("No module named 'pyclbr'")
- `test_runpy.RunModuleTestCase.test_run_module_in_namespace_package` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_runpy.py", line 441, in test_run_module_in_namespace_package
    self._check_module(depth, namespace=True, parent_namespaces=True)
  File "/work/suites/cpython/Lib/test/test_runpy.py", line 295, in _check_module
    forget(mod_name)
  File "/work/suites/cpython/Lib/test/support/import_helper.py", line 50, in forget
    unlink(importlib.util.cache_from_source(source, optimization=opt))
  File "/work/suites/cpython/Lib/test/support/os_helper.py", line 328, in unlink
    _unlink(filename)
TypeError: unlink: path should be string, bytes or os.PathLike, not NoneType

- `test_runpy.RunModuleTestCase.test_run_name` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_runpy.py", line 541, in test_run_name
    forget(mod_name)
  File "/work/suites/cpython/Lib/test/support/import_helper.py", line 50, in forget
    unlink(importlib.util.cache_from_source(source, optimization=opt))
  File "/work/suites/cpython/Lib/test/support/os_helper.py", line 328, in unlink
    _unlink(filename)
TypeError: unlink: path should be string, bytes or os.PathLike, not NoneType

- `test_runpy.RunModuleTestCase.test_run_namespace_package` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_runpy.py", line 509, in test_run_namespace_package
    self._check_package(depth, namespace=True)
  File "/work/suites/cpython/Lib/test/test_runpy.py", line 336, in _check_package
    forget(mod_name)
  File "/work/suites/cpython/Lib/test/support/import_helper.py", line 50, in forget
    unlink(importlib.util.cache_from_source(source, optimization=opt))
  File "/work/suites/cpython/Lib/test/support/os_helper.py", line 328, in unlink
    _unlink(filename)
TypeError: unlink: path should be string, bytes or os.PathLike, not NoneType

- `test_runpy.RunModuleTestCase.test_run_namespace_package_in_namespace_package` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_runpy.py", line 514, in test_run_namespace_package_in_namespace_package
    self._check_package(depth, namespace=True, parent_namespaces=True)
  File "/work/suites/cpython/Lib/test/test_runpy.py", line 336, in _check_package
    forget(mod_name)
  File "/work/suites/cpython/Lib/test/support/import_helper.py", line 50, in forget
    unlink(importlib.util.cache_from_source(source, optimization=opt))
  File "/work/suites/cpython/Lib/test/support/os_helper.py", line 328, in unlink
    _unlink(filename)
TypeError: unlink: path should be string, bytes or os.PathLike, not NoneType

- `test_runpy.RunModuleTestCase.test_run_package` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_runpy.py", line 446, in test_run_package
    self._check_package(depth)
  File "/work/suites/cpython/Lib/test/test_runpy.py", line 336, in _check_package
    forget(mod_name)
  File "/work/suites/cpython/Lib/test/support/import_helper.py", line 50, in forget
    unlink(importlib.util.cache_from_source(source, optimization=opt))
  File "/work/suites/cpython/Lib/test/support/os_helper.py", line 328, in unlink
    _unlink(filename)
TypeError: unlink: path should be string, bytes or os.PathLike, not NoneType

- `test_runpy.RunModuleTestCase.test_run_package_alter_sys` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_runpy.py", line 524, in test_run_package_alter_sys
    self._check_package(depth, alter_sys=True)
  File "/work/suites/cpython/Lib/test/test_runpy.py", line 336, in _check_package
    forget(mod_name)
  File "/work/suites/cpython/Lib/test/support/import_helper.py", line 50, in forget
    unlink(importlib.util.cache_from_source(source, optimization=opt))
  File "/work/suites/cpython/Lib/test/support/os_helper.py", line 328, in unlink
    _unlink(filename)
TypeError: unlink: path should be string, bytes or os.PathLike, not NoneType

- `test_runpy.RunModuleTestCase.test_run_package_in_namespace_package` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_runpy.py", line 504, in test_run_package_in_namespace_package
    self._check_package(depth, parent_namespaces=True)
  File "/work/suites/cpython/Lib/test/test_runpy.py", line 336, in _check_package
    forget(mod_name)
  File "/work/suites/cpython/Lib/test/support/import_helper.py", line 50, in forget
    unlink(importlib.util.cache_from_source(source, optimization=opt))
  File "/work/suites/cpython/Lib/test/support/os_helper.py", line 328, in unlink
    _unlink(filename)
TypeError: unlink: path should be string, bytes or os.PathLike, not NoneType

- `test_unicode_identifiers.PEP3131Test.test_valid` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_unicode_identifiers.py", line 12, in test_valid
    self.assertEqual(getattr(T, "\u03bc"), 2)
                     ^^^^^^^^^^^^^^^^^^^^
AttributeError: 'T' object has no attribute 'μ'

- `test_runpy.RunPathTestCase.test_directory_compiled` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_runpy.py", line 696, in test_directory_compiled
    compiled_name = py_compile.compile(script_name, doraise=True)
                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/py_compile.py", line 133, in compile
    if os.path.islink(cfile):
       ^^^^^^^^^^^^^^^^^^^^^
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/genericpath.py", line 54, in islink
    st = os.lstat(path)
         ^^^^^^^^^^^^^^
TypeError: lstat: path should be string, bytes or os.PathLike, not NoneType

- `test_array.IntTest.test_free_after_iterating` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_array.py", line 1156, in test_free_after_iterating
    support.check_free_after_iterating(self, iter, array.array,
  File "/work/suites/cpython/Lib/test/support/__init__.py", line 1830, in check_free_after_iterating
    test.assertTrue(done)
AssertionError: False is not true

- `test_array.IntTest.test_initialize_with_unicode` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_array.py", line 1144, in test_initialize_with_unicode
    self.assertIn("cannot use a unicode array", str(cm.exception))
AssertionError: 'cannot use a unicode array' not found in "'str' object cannot be interpreted as an integer"

- `test_array.IntTest.test_reverse_iterator_picking` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_array.py", line 366, in test_reverse_iterator_picking
    d = pickle.dumps((itorig, orig), proto)
        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/copyreg.py", line 70, in _reduce_ex
    raise TypeError(f"cannot pickle {cls.__name__!r} object")
TypeError: cannot pickle 'array' object

- `test_array.IntTest.test_weakref` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_array.py", line 1098, in test_weakref
    p = weakref.proxy(s)
        ^^^^^^^^^^^^^^^^
TypeError: cannot create weak reference to 'array.array' object

- `test_array.LongLongTest.test_buffer` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_array.py", line 1070, in test_buffer
    self.assertRaises(BufferError, a.append, a[0])
AssertionError: BufferError not raised by append

- `test_quopri.QuopriTestCase.test_scriptdecode` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_quopri.py", line 210, in test_scriptdecode
    self.assertEqual(cout.splitlines(), p.splitlines())
AssertionError: Lists differ: [] != ["Here's a bunch of special ", '', '¡¢£¤¥¦[160 chars]un!']

Second list contains 15 additional elements.
First extra element 0:
"Here's a bunch of special "

- []
+ ["Here's a bunch of special ",
+  '',
+  '¡¢£¤¥¦§¨©',
+  'ª«¬\xad®¯°±²³',
+  '´µ¶·¸¹º»¼½¾',
+  '¿ÀÁÂÃÄÅÆ',
+  'ÇÈÉÊËÌÍÎÏ',
+  'ÐÑÒÓÔÕÖ×',
+  'ØÙÚÛÜÝÞß',
+  'àáâãäåæç',
+  'èéêëìíîï',
+  'ðñòóôõö÷',
+  'øùúûüýþÿ',
+  '',
+  'characters... have fun!']

- `test_quopri.QuopriTestCase.test_scriptencode` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_quopri.py", line 196, in test_scriptencode
    assert len(cout)==len(e)
AssertionError

- `test_structseq.StructSeqTest.test_match_args` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_structseq.py", line 201, in test_match_args
    self.assertEqual(time.struct_time.__match_args__, expected_args)
                     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: 'time.struct_time' object has no attribute '__match_args__'. Did you mean: '__getnewargs__'?

- `test_structseq.StructSeqTest.test_match_args_with_unnamed_fields` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_structseq.py", line 207, in test_match_args_with_unnamed_fields
    self.assertEqual(os.stat_result.__match_args__, expected_args)
                     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: 'os.stat_result' object has no attribute '__match_args__'. Did you mean: '__getnewargs__'?

- `test_xml_etree` — SystemError("Option python.IsolateNativeModules is set to 'false' and a second GraalPy context attempted to load a native module 'pyexpat' from path '/opt/elide/lib/resources/python/python-home/lib/graalpy25.0/modules/pyexpat.graalpy250-312-native-x86_64-linux.so'. At least one context in this process runs with 'IsolateNativeModules' set to false. Depending on the order of context creation, this means some contexts in the process cannot use native module.")
- `test_structseq.StructSeqTest.test_reference_cycle` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_structseq.py", line 214, in test_reference_cycle
    script_helper.assert_python_ok("-c", textwrap.dedent(r"""
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 166, in assert_python_ok
    return _assert_python(True, *args, **env_vars)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 151, in _assert_python
    res.fail(cmd_line)
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 76, in fail
    raise AssertionError("Process return code is %d\n"
AssertionError: Process return code is 1
command line: ['/opt/elide/bin/elide', '-X', 'faulthandler', '-c', '\nimport time\nt = time.gmtime()\ntype(t).refcyle = t\n']

stdout:
---
������ Script Error ���������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������
���TypeError: cannot set 'refcyle' attribute of immutable type                  ���
���'time.struct_time'                                                           ���
���                                                                             ���
��� In snippet <python>                                                         ���
������ Stack Trace ������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������
���                                                                             ���
��� ������ [py] <module>    <unknown>                                               ���
��� ���                                                                           ���
��� �� elide                                                                     ���
��� import time                                                                 ���
��� t = time.gmtime()                                                           ���
��� type(t).refcyle = t                                                         ���
���                                                                             ���
���                                                                             ���
������ Advice ���������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������
���                                                                             ���
��� An error occurred while executing your code.                                ���
���                                                                             ���
���������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������
---

stderr:
---

---

- `test_posixpath` — ImportError("cannot import name 'ALLOW_MISSING' from 'posixpath' (/opt/elide/lib/resources/python/python-home/lib/python3.12/posixpath.py)")
- `test_aifc` — ModuleNotFoundError("No module named 'audioop'")
- `test_array.LongLongTest.test_free_after_iterating` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_array.py", line 1156, in test_free_after_iterating
    support.check_free_after_iterating(self, iter, array.array,
  File "/work/suites/cpython/Lib/test/support/__init__.py", line 1830, in check_free_after_iterating
    test.assertTrue(done)
AssertionError: False is not true

- `test_array.LongLongTest.test_initialize_with_unicode` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_array.py", line 1144, in test_initialize_with_unicode
    self.assertIn("cannot use a unicode array", str(cm.exception))
AssertionError: 'cannot use a unicode array' not found in "'str' object cannot be interpreted as an integer"

- `test_array.LongLongTest.test_reverse_iterator_picking` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_array.py", line 366, in test_reverse_iterator_picking
    d = pickle.dumps((itorig, orig), proto)
        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/copyreg.py", line 70, in _reduce_ex
    raise TypeError(f"cannot pickle {cls.__name__!r} object")
TypeError: cannot pickle 'array' object

- `test_array.LongLongTest.test_weakref` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_array.py", line 1098, in test_weakref
    p = weakref.proxy(s)
        ^^^^^^^^^^^^^^^^
TypeError: cannot create weak reference to 'array.array' object

- `test_array.LongTest.test_buffer` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_array.py", line 1070, in test_buffer
    self.assertRaises(BufferError, a.append, a[0])
AssertionError: BufferError not raised by append

- `test_userlist.UserListTest.test_free_after_iterating` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/seq_tests.py", line 430, in test_free_after_iterating
    support.check_free_after_iterating(self, iter, self.type2test)
  File "/work/suites/cpython/Lib/test/support/__init__.py", line 1830, in check_free_after_iterating
    test.assertTrue(done)
AssertionError: False is not true

- `test_stat.TestFilemodeCStat.test_devices` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_stat.py", line 202, in test_devices
    st_mode, modestr = self.get_mode(os.devnull, lstat=False)
                       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_stat.py", line 96, in get_mode
    modestr = self.statmod.filemode(st_mode)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: 'NoneType' object has no attribute 'filemode'

- `test_stat.TestFilemodeCStat.test_directory` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_stat.py", line 166, in test_directory
    st_mode, modestr = self.get_mode()
                       ^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_stat.py", line 96, in get_mode
    modestr = self.statmod.filemode(st_mode)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: 'NoneType' object has no attribute 'filemode'

- `test_stat.TestFilemodeCStat.test_link` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_stat.py", line 180, in test_link
    st_mode, modestr = self.get_mode()
                       ^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_stat.py", line 96, in get_mode
    modestr = self.statmod.filemode(st_mode)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: 'NoneType' object has no attribute 'filemode'

- `test_stat.TestFilemodeCStat.test_mode` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_stat.py", line 122, in test_mode
    st_mode, modestr = self.get_mode()
                       ^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_stat.py", line 96, in get_mode
    modestr = self.statmod.filemode(st_mode)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: 'NoneType' object has no attribute 'filemode'

- `test_stat.TestFilemodeCStat.test_module_attributes` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_stat.py", line 223, in test_module_attributes
    modvalue = getattr(self.statmod, key)
               ^^^^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: 'NoneType' object has no attribute 'ST_MODE'

- `test_array.LongTest.test_free_after_iterating` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_array.py", line 1156, in test_free_after_iterating
    support.check_free_after_iterating(self, iter, array.array,
  File "/work/suites/cpython/Lib/test/support/__init__.py", line 1830, in check_free_after_iterating
    test.assertTrue(done)
AssertionError: False is not true

- `test_tempfile.TestMkdtemp.test_mode` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_tempfile.py", line 797, in test_mode
    self.assertEqual(mode, expected)
AssertionError: 493 != 448

- `test_array.LongTest.test_initialize_with_unicode` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_array.py", line 1144, in test_initialize_with_unicode
    self.assertIn("cannot use a unicode array", str(cm.exception))
AssertionError: 'cannot use a unicode array' not found in "'str' object cannot be interpreted as an integer"

- `test_array.LongTest.test_reverse_iterator_picking` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_array.py", line 366, in test_reverse_iterator_picking
    d = pickle.dumps((itorig, orig), proto)
        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/copyreg.py", line 70, in _reduce_ex
    raise TypeError(f"cannot pickle {cls.__name__!r} object")
TypeError: cannot pickle 'array' object

- `test_array.LongTest.test_weakref` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_array.py", line 1098, in test_weakref
    p = weakref.proxy(s)
        ^^^^^^^^^^^^^^^^
TypeError: cannot create weak reference to 'array.array' object

- `test_array.MiscTest.test_array_is_sequence` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_array.py", line 35, in test_array_is_sequence
    self.assertIsInstance(array.array("B"), collections.abc.MutableSequence)
AssertionError: array('B') is not an instance of <class 'collections.abc.MutableSequence'>

- `test_array.MiscTest.test_bad_constructor` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_array.py", line 42, in test_bad_constructor
    self.assertRaises(ValueError, array.array, 'x')
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/unittest/case.py", line 778, in assertRaises
    return context.handle('assertRaises', args, kwargs)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/unittest/case.py", line 238, in handle
    callable_obj(*args, **kwargs)
TypeError: 'NoneType' object is not iterable

- `test_array.ShortTest.test_buffer` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_array.py", line 1070, in test_buffer
    self.assertRaises(BufferError, a.append, a[0])
AssertionError: BufferError not raised by append

- `test_compileall.CommandLineTestsNoSourceEpoch.test_compiles_as_much_as_possible` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 22, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 806, in test_compiles_as_much_as_possible
    self.assertRegex(out, b'rror')
AssertionError: Regex didn't match: b'rror' not found in b''

- `test_compileall.CommandLineTestsNoSourceEpoch.test_d_compile_error` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 22, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 742, in test_d_compile_error
    self.assertRegex(out, b'File "dinsdale')
AssertionError: Regex didn't match: b'File "dinsdale' not found in b''

- `test_compileall.CommandLineTestsNoSourceEpoch.test_d_runtime_error` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 22, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 746, in test_d_runtime_error
    self.assertRunOK('-q', '-d', 'dinsdale', self.pkgdir)
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 534, in assertRunOK
    rc, out, err = script_helper.assert_python_ok(
                   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 166, in assert_python_ok
    return _assert_python(True, *args, **env_vars)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 151, in _assert_python
    res.fail(cmd_line)
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 76, in fail
    raise AssertionError("Process return code is %d\n"
AssertionError: Process return code is 2
command line: ['/opt/elide/bin/elide', '-X', 'faulthandler', '-O', '-S', '-m', 'compileall', '-q', '-d', 'dinsdale', '/tmp/tmphivldvwx/foo']

stdout:
---

---

stderr:
---
error: unexpected argument '-O' found

  tip: to pass '-O' as a value, use '-- -O'

Usage: elide [OPTIONS] [FILE] [-- <SCRIPT_ARGS>...] [COMMAND]

For more information, try '--help'.
---

- `test_tempfile.TestMkstempInner.test_choose_directory` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_tempfile.py", line 443, in test_choose_directory
    os.rmdir(dir)
OSError: [Errno 39] Directory not empty: '/tmp/tmp0d4_firk'

- `test_compileall.CommandLineTestsNoSourceEpoch.test_force` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 22, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 22, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 636, in test_force
    self.assertRunOK('-q', self.pkgdir)
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 534, in assertRunOK
    rc, out, err = script_helper.assert_python_ok(
                   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 166, in assert_python_ok
    return _assert_python(True, *args, **env_vars)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 151, in _assert_python
    res.fail(cmd_line)
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 76, in fail
    raise AssertionError("Process return code is %d\n"
AssertionError: Process return code is 2
command line: ['/opt/elide/bin/elide', '-X', 'faulthandler', '-O', '-S', '-m', 'compileall', '-q', '/tmp/tmphy2o4y_g/foo']

stdout:
---

---

stderr:
---
error: unexpected argument '-O' found

  tip: to pass '-O' as a value, use '-- -O'

Usage: elide [OPTIONS] [FILE] [-- <SCRIPT_ARGS>...] [COMMAND]

For more information, try '--help'.
---

- `test_tempfile.TestMktemp.test_basic` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_tempfile.py", line 896, in tearDown
    os.rmdir(self.dir)
OSError: [Errno 39] Directory not empty: '/tmp/tmpvy5upvt_'

- `test_array.ShortTest.test_free_after_iterating` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_array.py", line 1156, in test_free_after_iterating
    support.check_free_after_iterating(self, iter, array.array,
  File "/work/suites/cpython/Lib/test/support/__init__.py", line 1830, in check_free_after_iterating
    test.assertTrue(done)
AssertionError: False is not true

- `test_compileall.CommandLineTestsNoSourceEpoch.test_ignore_symlink_destination` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 22, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 914, in test_ignore_symlink_destination
    self.assertRunOK(symlinks_path, "-e", allowed_path)
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 534, in assertRunOK
    rc, out, err = script_helper.assert_python_ok(
                   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 166, in assert_python_ok
    return _assert_python(True, *args, **env_vars)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 151, in _assert_python
    res.fail(cmd_line)
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 76, in fail
    raise AssertionError("Process return code is %d\n"
AssertionError: Process return code is 2
command line: ['/opt/elide/bin/elide', '-X', 'faulthandler', '-O', '-S', '-m', 'compileall', '/tmp/tmpbv7tuvgg/test/dir/symlinks', '-e', '/tmp/tmpbv7tuvgg/test/dir/allowed']

stdout:
---

---

stderr:
---
error: unexpected argument '-O' found

  tip: to pass '-O' as a value, use '-- -O'

Usage: elide [OPTIONS] [FILE] [-- <SCRIPT_ARGS>...] [COMMAND]

For more information, try '--help'.
---

- `test_array.ShortTest.test_initialize_with_unicode` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_array.py", line 1144, in test_initialize_with_unicode
    self.assertIn("cannot use a unicode array", str(cm.exception))
AssertionError: 'cannot use a unicode array' not found in "'str' object cannot be interpreted as an integer"

- `test_array.ShortTest.test_reverse_iterator_picking` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_array.py", line 366, in test_reverse_iterator_picking
    d = pickle.dumps((itorig, orig), proto)
        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/copyreg.py", line 70, in _reduce_ex
    raise TypeError(f"cannot pickle {cls.__name__!r} object")
TypeError: cannot pickle 'array' object

- `test_array.ShortTest.test_weakref` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_array.py", line 1098, in test_weakref
    p = weakref.proxy(s)
        ^^^^^^^^^^^^^^^^
TypeError: cannot create weak reference to 'array.array' object

- `test_array.UnicodeTest.test_buffer` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_array.py", line 1070, in test_buffer
    self.assertRaises(BufferError, a.append, a[0])
AssertionError: BufferError not raised by append

- `test_compileall.CommandLineTestsNoSourceEpoch.test_include_bad_file` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 22, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 757, in test_include_bad_file
    self.assertRegex(out, b'rror.*nosuchfile')
AssertionError: Regex didn't match: b'rror.*nosuchfile' not found in b''

- `test_compileall.CommandLineTestsNoSourceEpoch.test_include_file_no_arg` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 22, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 783, in test_include_file_no_arg
    self.assertRunOK('-i', os.path.join(self.directory, 'l1'))
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 534, in assertRunOK
    rc, out, err = script_helper.assert_python_ok(
                   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 166, in assert_python_ok
    return _assert_python(True, *args, **env_vars)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 151, in _assert_python
    res.fail(cmd_line)
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 76, in fail
    raise AssertionError("Process return code is %d\n"
AssertionError: Process return code is 2
command line: ['/opt/elide/bin/elide', '-X', 'faulthandler', '-O', '-S', '-m', 'compileall', '-i', '/tmp/tmpnz4y862i/l1']

stdout:
---

---

stderr:
---
error: unexpected argument '-O' found

  tip: to pass '-O' as a value, use '-- -O'

Usage: elide [OPTIONS] [FILE] [-- <SCRIPT_ARGS>...] [COMMAND]

For more information, try '--help'.
---

- `test_compileall.CommandLineTestsNoSourceEpoch.test_include_file_with_arg` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 22, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 770, in test_include_file_with_arg
    self.assertRunOK('-i', os.path.join(self.directory, 'l1'), f4)
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 534, in assertRunOK
    rc, out, err = script_helper.assert_python_ok(
                   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 166, in assert_python_ok
    return _assert_python(True, *args, **env_vars)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 151, in _assert_python
    res.fail(cmd_line)
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 76, in fail
    raise AssertionError("Process return code is %d\n"
AssertionError: Process return code is 2
command line: ['/opt/elide/bin/elide', '-X', 'faulthandler', '-O', '-S', '-m', 'compileall', '-i', '/tmp/tmp4u19dw7z/l1', '/tmp/tmp4u19dw7z/foo/f4.py']

stdout:
---

---

stderr:
---
error: unexpected argument '-O' found

  tip: to pass '-O' as a value, use '-- -O'

Usage: elide [OPTIONS] [FILE] [-- <SCRIPT_ARGS>...] [COMMAND]

For more information, try '--help'.
---

- `test_compileall.CommandLineTestsNoSourceEpoch.test_include_on_stdin` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 22, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 797, in test_include_on_stdin
    self.assertNotCompiled(f1)
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 552, in assertNotCompiled
    self.assertFalse(os.path.exists(path))
                     ^^^^^^^^^^^^^^^^^^^^
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/genericpath.py", line 19, in exists
    os.stat(path)
TypeError: stat: path should be string, bytes, os.PathLike or integer, not NoneType

- `test_tempfile.TestMktemp.test_many` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_tempfile.py", line 896, in tearDown
    os.rmdir(self.dir)
OSError: [Errno 39] Directory not empty: '/tmp/tmpkbl4kyt4'

- `test_cgitb.TestCgitb.test_syshook_no_logdir_default_format` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_cgitb.py", line 50, in test_syshook_no_logdir_default_format
    self.assertIn("<strong>&lt;module&gt;</strong>", out)
AssertionError: '<strong>&lt;module&gt;</strong>' not found in "╭─ Script Error ──────────────────────────────────────────────────────────────╮\n│ValueError: Hello World                                                      │\n│                                                                             │\n│ In snippet <python>                                                         │\n│─ Stack Trace ───────────────────────────────────────────────────────────────│\n│                                                                             │\n│ ╭─ [py] <module>                                                 <python>:1 │\n│ │                                                                           │\n│ · elide import cgitb; cgitb.enable(logdir='/tmp/tmp8rw2wfmo'); r            │\n│                                                                             │\n│─ Advice ────────────────────────────────────────────────────────────────────│\n│                                                                             │\n│ An error occurred while executing your code.                                │\n│                                                                             │\n╰─────────────────────────────────────────────────────────────────────────────╯\n"

- `test_compileall.CommandLineTestsNoSourceEpoch.test_invalid_arg_produces_message` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 22, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 812, in test_invalid_arg_produces_message
    out = self.assertRunOK('badfilename')
          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 534, in assertRunOK
    rc, out, err = script_helper.assert_python_ok(
                   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 166, in assert_python_ok
    return _assert_python(True, *args, **env_vars)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 151, in _assert_python
    res.fail(cmd_line)
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 76, in fail
    raise AssertionError("Process return code is %d\n"
AssertionError: Process return code is 2
command line: ['/opt/elide/bin/elide', '-X', 'faulthandler', '-O', '-S', '-m', 'compileall', 'badfilename']

stdout:
---

---

stderr:
---
error: unexpected argument '-O' found

  tip: to pass '-O' as a value, use '-- -O'

Usage: elide [OPTIONS] [FILE] [-- <SCRIPT_ARGS>...] [COMMAND]

For more information, try '--help'.
---

- `test_compileall.CommandLineTestsNoSourceEpoch.test_legacy_paths` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 22, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 614, in test_legacy_paths
    self.assertRunOK('-b', '-q', self.pkgdir)
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 534, in assertRunOK
    rc, out, err = script_helper.assert_python_ok(
                   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 166, in assert_python_ok
    return _assert_python(True, *args, **env_vars)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 151, in _assert_python
    res.fail(cmd_line)
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 76, in fail
    raise AssertionError("Process return code is %d\n"
AssertionError: Process return code is 2
command line: ['/opt/elide/bin/elide', '-X', 'faulthandler', '-O', '-S', '-m', 'compileall', '-b', '-q', '/tmp/tmpni187pbj/foo']

stdout:
---

---

stderr:
---
error: unexpected argument '-O' found

  tip: to pass '-O' as a value, use '-- -O'

Usage: elide [OPTIONS] [FILE] [-- <SCRIPT_ARGS>...] [COMMAND]

For more information, try '--help'.
---

- `test_compileall.CommandLineTestsNoSourceEpoch.test_multiple_dirs` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 22, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 733, in test_multiple_dirs
    self.assertRunOK('-q', self.pkgdir, pkgdir2)
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 534, in assertRunOK
    rc, out, err = script_helper.assert_python_ok(
                   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 166, in assert_python_ok
    return _assert_python(True, *args, **env_vars)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 151, in _assert_python
    res.fail(cmd_line)
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 76, in fail
    raise AssertionError("Process return code is %d\n"
AssertionError: Process return code is 2
command line: ['/opt/elide/bin/elide', '-X', 'faulthandler', '-O', '-S', '-m', 'compileall', '-q', '/tmp/tmpqevq4d03/foo', '/tmp/tmpqevq4d03/foo2']

stdout:
---

---

stderr:
---
error: unexpected argument '-O' found

  tip: to pass '-O' as a value, use '-- -O'

Usage: elide [OPTIONS] [FILE] [-- <SCRIPT_ARGS>...] [COMMAND]

For more information, try '--help'.
---

- `test_compileall.CommandLineTestsNoSourceEpoch.test_multiple_optimization_levels` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 22, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 886, in test_multiple_optimization_levels
    self.assertRunOK(path, *("-o" + str(n) for n in opt_combination))
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 534, in assertRunOK
    rc, out, err = script_helper.assert_python_ok(
                   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 166, in assert_python_ok
    return _assert_python(True, *args, **env_vars)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 151, in _assert_python
    res.fail(cmd_line)
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 76, in fail
    raise AssertionError("Process return code is %d\n"
AssertionError: Process return code is 2
command line: ['/opt/elide/bin/elide', '-X', 'faulthandler', '-O', '-S', '-m', 'compileall', '/tmp/tmpk6dsmnf2/optimizations', '-o0', '-o1']

stdout:
---

---

stderr:
---
error: unexpected argument '-O' found

  tip: to pass '-O' as a value, use '-- -O'

Usage: elide [OPTIONS] [FILE] [-- <SCRIPT_ARGS>...] [COMMAND]

For more information, try '--help'.
---

- `test_compileall.CommandLineTestsNoSourceEpoch.test_multiple_runs` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 22, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 624, in test_multiple_runs
    self.assertRunOK('-q', self.pkgdir)
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 534, in assertRunOK
    rc, out, err = script_helper.assert_python_ok(
                   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 166, in assert_python_ok
    return _assert_python(True, *args, **env_vars)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 151, in _assert_python
    res.fail(cmd_line)
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 76, in fail
    raise AssertionError("Process return code is %d\n"
AssertionError: Process return code is 2
command line: ['/opt/elide/bin/elide', '-X', 'faulthandler', '-O', '-S', '-m', 'compileall', '-q', '/tmp/tmpumyccyti/foo']

stdout:
---

---

stderr:
---
error: unexpected argument '-O' found

  tip: to pass '-O' as a value, use '-- -O'

Usage: elide [OPTIONS] [FILE] [-- <SCRIPT_ARGS>...] [COMMAND]

For more information, try '--help'.
---

- `test_array.UnicodeTest.test_free_after_iterating` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_array.py", line 1156, in test_free_after_iterating
    support.check_free_after_iterating(self, iter, array.array,
  File "/work/suites/cpython/Lib/test/support/__init__.py", line 1830, in check_free_after_iterating
    test.assertTrue(done)
AssertionError: False is not true

- `test_compileall.CommandLineTestsNoSourceEpoch.test_no_args_compiles_path` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 22, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 558, in test_no_args_compiles_path
    self.assertRunOK(**env)
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 534, in assertRunOK
    rc, out, err = script_helper.assert_python_ok(
                   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 166, in assert_python_ok
    return _assert_python(True, *args, **env_vars)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 151, in _assert_python
    res.fail(cmd_line)
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 76, in fail
    raise AssertionError("Process return code is %d\n"
AssertionError: Process return code is 2
command line: ['/opt/elide/bin/elide', '-X', 'faulthandler', '-O', '-S', '-m', 'compileall']

stdout:
---

---

stderr:
---
error: unexpected argument '-O' found

  tip: to pass '-O' as a value, use '-- -O'

Usage: elide [OPTIONS] [FILE] [-- <SCRIPT_ARGS>...] [COMMAND]

For more information, try '--help'.
---

- `test_tempfile.TestNamedTemporaryFile.test_del_by_finalizer` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_tempfile.py", line 1128, in test_del_by_finalizer
    os.rmdir(dir)
OSError: [Errno 39] Directory not empty: '/tmp/tmpodefu726'

- `test_compileall.CommandLineTestsNoSourceEpoch.test_no_args_respects_force_flag` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 22, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 22, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 568, in test_no_args_respects_force_flag
    self.assertRunOK(**env)
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 534, in assertRunOK
    rc, out, err = script_helper.assert_python_ok(
                   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 166, in assert_python_ok
    return _assert_python(True, *args, **env_vars)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 151, in _assert_python
    res.fail(cmd_line)
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 76, in fail
    raise AssertionError("Process return code is %d\n"
AssertionError: Process return code is 2
command line: ['/opt/elide/bin/elide', '-X', 'faulthandler', '-O', '-S', '-m', 'compileall']

stdout:
---

---

stderr:
---
error: unexpected argument '-O' found

  tip: to pass '-O' as a value, use '-- -O'

Usage: elide [OPTIONS] [FILE] [-- <SCRIPT_ARGS>...] [COMMAND]

For more information, try '--help'.
---

- `test_array.UnicodeTest.test_reverse_iterator_picking` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_array.py", line 366, in test_reverse_iterator_picking
    d = pickle.dumps((itorig, orig), proto)
        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/copyreg.py", line 70, in _reduce_ex
    raise TypeError(f"cannot pickle {cls.__name__!r} object")
TypeError: cannot pickle 'array' object

- `test_array.UnicodeTest.test_weakref` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_array.py", line 1098, in test_weakref
    p = weakref.proxy(s)
        ^^^^^^^^^^^^^^^^
TypeError: cannot create weak reference to 'array.array' object

- `test_compileall.CommandLineTestsNoSourceEpoch.test_no_args_respects_quiet_flag` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 22, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 586, in test_no_args_respects_quiet_flag
    noisy = self.assertRunOK(**env)
            ^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 534, in assertRunOK
    rc, out, err = script_helper.assert_python_ok(
                   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 166, in assert_python_ok
    return _assert_python(True, *args, **env_vars)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 151, in _assert_python
    res.fail(cmd_line)
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 76, in fail
    raise AssertionError("Process return code is %d\n"
AssertionError: Process return code is 2
command line: ['/opt/elide/bin/elide', '-X', 'faulthandler', '-O', '-S', '-m', 'compileall']

stdout:
---

---

stderr:
---
error: unexpected argument '-O' found

  tip: to pass '-O' as a value, use '-- -O'

Usage: elide [OPTIONS] [FILE] [-- <SCRIPT_ARGS>...] [COMMAND]

For more information, try '--help'.
---

- `test_array.UnsignedByteTest.test_buffer` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_array.py", line 1070, in test_buffer
    self.assertRaises(BufferError, a.append, a[0])
AssertionError: BufferError not raised by append

- `test_compileall.CommandLineTestsNoSourceEpoch.test_pep3147_paths_doubleoptimize` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 22, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 599, in f
    script_helper.assert_python_ok(*(switch +
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 166, in assert_python_ok
    return _assert_python(True, *args, **env_vars)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 151, in _assert_python
    res.fail(cmd_line)
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 76, in fail
    raise AssertionError("Process return code is %d\n"
AssertionError: Process return code is 2
command line: ['/opt/elide/bin/elide', '-X', 'faulthandler', '-OO', '-m', 'compileall', '-q', '/tmp/tmpsdand9n6/foo']

stdout:
---

---

stderr:
---
error: unexpected argument '-O' found

  tip: to pass '-O' as a value, use '-- -O'

Usage: elide [OPTIONS] [FILE] [-- <SCRIPT_ARGS>...] [COMMAND]

For more information, try '--help'.
---

- `test_tempfile.TestSpooledTemporaryFile.test_del_on_close` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_tempfile.py", line 1232, in test_del_on_close
    os.rmdir(dir)
OSError: [Errno 39] Directory not empty: '/tmp/tmp7wbnd38c'

- `test_tempfile.TestSpooledTemporaryFile.test_truncate_with_size_parameter` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_tempfile.py", line 1521, in test_truncate_with_size_parameter
    self.assertEqual(os.fstat(f.fileno()).st_size, 20)
AssertionError: 8 != 20

- `test_tempfile.TestSpooledTemporaryFile.test_writelines_rollover` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_tempfile.py", line 1301, in test_writelines_rollover
    f.writelines(it())
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/tempfile.py", line 853, in writelines
    rv = file.writelines(iterable)
         ^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_tempfile.py", line 1299, in it
    self.assertTrue(f._rolled)
AssertionError: False is not true

- `test_compileall.CommandLineTestsNoSourceEpoch.test_pep3147_paths_normal` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 22, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 599, in f
    script_helper.assert_python_ok(*(switch +
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 166, in assert_python_ok
    return _assert_python(True, *args, **env_vars)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 151, in _assert_python
    res.fail(cmd_line)
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 76, in fail
    raise AssertionError("Process return code is %d\n"
AssertionError: Process return code is 2
command line: ['/opt/elide/bin/elide', '-X', 'faulthandler', '-m', 'compileall', '-q', '/tmp/tmpa1dvgvbd/foo']

stdout:
---

---

stderr:
---
error: unexpected argument '-m' found

  tip: to pass '-m' as a value, use '-- -m'

Usage: elide [OPTIONS] [FILE] [-- <SCRIPT_ARGS>...] [COMMAND]

For more information, try '--help'.
---

- `test_compileall.CommandLineTestsNoSourceEpoch.test_pep3147_paths_optimize` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 22, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 599, in f
    script_helper.assert_python_ok(*(switch +
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 166, in assert_python_ok
    return _assert_python(True, *args, **env_vars)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 151, in _assert_python
    res.fail(cmd_line)
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 76, in fail
    raise AssertionError("Process return code is %d\n"
AssertionError: Process return code is 2
command line: ['/opt/elide/bin/elide', '-X', 'faulthandler', '-O', '-m', 'compileall', '-q', '/tmp/tmpf3ctreep/foo']

stdout:
---

---

stderr:
---
error: unexpected argument '-O' found

  tip: to pass '-O' as a value, use '-- -O'

Usage: elide [OPTIONS] [FILE] [-- <SCRIPT_ARGS>...] [COMMAND]

For more information, try '--help'.
---

- `test_compileall.CommandLineTestsNoSourceEpoch.test_pyc_invalidation_mode` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 22, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 819, in test_pyc_invalidation_mode
    self.assertRunOK('--invalidation-mode=checked-hash', self.pkgdir)
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 534, in assertRunOK
    rc, out, err = script_helper.assert_python_ok(
                   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 166, in assert_python_ok
    return _assert_python(True, *args, **env_vars)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 151, in _assert_python
    res.fail(cmd_line)
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 76, in fail
    raise AssertionError("Process return code is %d\n"
AssertionError: Process return code is 2
command line: ['/opt/elide/bin/elide', '-X', 'faulthandler', '-O', '-S', '-m', 'compileall', '--invalidation-mode=checked-hash', '/tmp/tmpbmnslz51/foo']

stdout:
---

---

stderr:
---
error: unexpected argument '-O' found

  tip: to pass '-O' as a value, use '-- -O'

Usage: elide [OPTIONS] [FILE] [-- <SCRIPT_ARGS>...] [COMMAND]

For more information, try '--help'.
---

- `test_compileall.CommandLineTestsNoSourceEpoch.test_quiet` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 22, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 711, in test_quiet
    noisy = self.assertRunOK(self.pkgdir)
            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 534, in assertRunOK
    rc, out, err = script_helper.assert_python_ok(
                   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 166, in assert_python_ok
    return _assert_python(True, *args, **env_vars)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 151, in _assert_python
    res.fail(cmd_line)
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 76, in fail
    raise AssertionError("Process return code is %d\n"
AssertionError: Process return code is 2
command line: ['/opt/elide/bin/elide', '-X', 'faulthandler', '-O', '-S', '-m', 'compileall', '/tmp/tmpk7f4oa2i/foo']

stdout:
---

---

stderr:
---
error: unexpected argument '-O' found

  tip: to pass '-O' as a value, use '-- -O'

Usage: elide [OPTIONS] [FILE] [-- <SCRIPT_ARGS>...] [COMMAND]

For more information, try '--help'.
---

- `test_list.ListTest.test_list_resize_overflow` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_list.py", line 107, in test_list_resize_overflow
    with self.assertRaises((MemoryError, OverflowError)):
AssertionError: (<class 'MemoryError'>, <class 'OverflowError'>) not raised

- `test_compileall.CommandLineTestsNoSourceEpoch.test_recursion_control` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 22, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 655, in test_recursion_control
    self.assertRunOK('-q', '-l', self.pkgdir)
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 534, in assertRunOK
    rc, out, err = script_helper.assert_python_ok(
                   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 166, in assert_python_ok
    return _assert_python(True, *args, **env_vars)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 151, in _assert_python
    res.fail(cmd_line)
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 76, in fail
    raise AssertionError("Process return code is %d\n"
AssertionError: Process return code is 2
command line: ['/opt/elide/bin/elide', '-X', 'faulthandler', '-O', '-S', '-m', 'compileall', '-q', '-l', '/tmp/tmpwpzpqn2d/foo']

stdout:
---

---

stderr:
---
error: unexpected argument '-O' found

  tip: to pass '-O' as a value, use '-- -O'

Usage: elide [OPTIONS] [FILE] [-- <SCRIPT_ARGS>...] [COMMAND]

For more information, try '--help'.
---

- `test_compileall.CommandLineTestsNoSourceEpoch.test_recursion_limit` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 22, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 674, in test_recursion_limit
    self.assertRunOK('-q', '-r 0', self.pkgdir)
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 534, in assertRunOK
    rc, out, err = script_helper.assert_python_ok(
                   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 166, in assert_python_ok
    return _assert_python(True, *args, **env_vars)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 151, in _assert_python
    res.fail(cmd_line)
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 76, in fail
    raise AssertionError("Process return code is %d\n"
AssertionError: Process return code is 2
command line: ['/opt/elide/bin/elide', '-X', 'faulthandler', '-O', '-S', '-m', 'compileall', '-q', '-r 0', '/tmp/tmpm4dl0912/foo']

stdout:
---

---

stderr:
---
error: unexpected argument '-O' found

  tip: to pass '-O' as a value, use '-- -O'

Usage: elide [OPTIONS] [FILE] [-- <SCRIPT_ARGS>...] [COMMAND]

For more information, try '--help'.
---

- `test_compileall.CommandLineTestsNoSourceEpoch.test_regexp` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 22, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 724, in test_regexp
    self.assertRunOK('-q', '-x', r'ba[^\\/]*$', self.pkgdir)
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 534, in assertRunOK
    rc, out, err = script_helper.assert_python_ok(
                   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 166, in assert_python_ok
    return _assert_python(True, *args, **env_vars)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 151, in _assert_python
    res.fail(cmd_line)
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 76, in fail
    raise AssertionError("Process return code is %d\n"
AssertionError: Process return code is 2
command line: ['/opt/elide/bin/elide', '-X', 'faulthandler', '-O', '-S', '-m', 'compileall', '-q', '-x', 'ba[^\\\\/]*$', '/tmp/tmpua_v9l91/foo']

stdout:
---

---

stderr:
---
error: unexpected argument '-O' found

  tip: to pass '-O' as a value, use '-- -O'

Usage: elide [OPTIONS] [FILE] [-- <SCRIPT_ARGS>...] [COMMAND]

For more information, try '--help'.
---

- `test_array.UnsignedByteTest.test_free_after_iterating` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_array.py", line 1156, in test_free_after_iterating
    support.check_free_after_iterating(self, iter, array.array,
  File "/work/suites/cpython/Lib/test/support/__init__.py", line 1830, in check_free_after_iterating
    test.assertTrue(done)
AssertionError: False is not true

- `test_array.UnsignedByteTest.test_initialize_with_unicode` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_array.py", line 1144, in test_initialize_with_unicode
    self.assertIn("cannot use a unicode array", str(cm.exception))
AssertionError: 'cannot use a unicode array' not found in "'str' object cannot be interpreted as an integer"

- `test_array.UnsignedByteTest.test_reverse_iterator_picking` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_array.py", line 366, in test_reverse_iterator_picking
    d = pickle.dumps((itorig, orig), proto)
        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/copyreg.py", line 70, in _reduce_ex
    raise TypeError(f"cannot pickle {cls.__name__!r} object")
TypeError: cannot pickle 'array' object

- `test_array.UnsignedByteTest.test_weakref` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_array.py", line 1098, in test_weakref
    p = weakref.proxy(s)
        ^^^^^^^^^^^^^^^^
TypeError: cannot create weak reference to 'array.array' object

- `test_array.UnsignedIntTest.test_buffer` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_array.py", line 1070, in test_buffer
    self.assertRaises(BufferError, a.append, a[0])
AssertionError: BufferError not raised by append

- `test_compileall.CommandLineTestsNoSourceEpoch.test_silent` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 22, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 720, in test_silent
    self.assertNotEqual(b'', quiet)
AssertionError: b'' == b''

- `test_compileall.CommandLineTestsNoSourceEpoch.test_strip_and_prepend` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 22, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 859, in test_strip_and_prepend
    self.assertRunOK("-s", stripdir, "-p", prependdir, path)
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 534, in assertRunOK
    rc, out, err = script_helper.assert_python_ok(
                   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 166, in assert_python_ok
    return _assert_python(True, *args, **env_vars)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 151, in _assert_python
    res.fail(cmd_line)
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 76, in fail
    raise AssertionError("Process return code is %d\n"
AssertionError: Process return code is 2
command line: ['/opt/elide/bin/elide', '-X', 'faulthandler', '-O', '-S', '-m', 'compileall', '-s', '/tmp/tmpm7wm30mq/test/build', '-p', '/foo', '/tmp/tmpm7wm30mq/test/build/real/path']

stdout:
---

---

stderr:
---
error: unexpected argument '-O' found

  tip: to pass '-O' as a value, use '-- -O'

Usage: elide [OPTIONS] [FILE] [-- <SCRIPT_ARGS>...] [COMMAND]

For more information, try '--help'.
---

- `test_compileall.CommandLineTestsNoSourceEpoch.test_symlink_loop` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 22, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 705, in test_symlink_loop
    self.assertRunOK('-q', self.pkgdir)
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 534, in assertRunOK
    rc, out, err = script_helper.assert_python_ok(
                   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 166, in assert_python_ok
    return _assert_python(True, *args, **env_vars)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 151, in _assert_python
    res.fail(cmd_line)
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 76, in fail
    raise AssertionError("Process return code is %d\n"
AssertionError: Process return code is 2
command line: ['/opt/elide/bin/elide', '-X', 'faulthandler', '-O', '-S', '-m', 'compileall', '-q', '/tmp/tmptsen9ax7/foo']

stdout:
---

---

stderr:
---
error: unexpected argument '-O' found

  tip: to pass '-O' as a value, use '-- -O'

Usage: elide [OPTIONS] [FILE] [-- <SCRIPT_ARGS>...] [COMMAND]

For more information, try '--help'.
---

- `test_compileall.CommandLineTestsWithSourceEpoch.test_compiles_as_much_as_possible` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 32, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 806, in test_compiles_as_much_as_possible
    self.assertRegex(out, b'rror')
AssertionError: Regex didn't match: b'rror' not found in b''

- `test_compileall.CommandLineTestsWithSourceEpoch.test_d_compile_error` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 32, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 742, in test_d_compile_error
    self.assertRegex(out, b'File "dinsdale')
AssertionError: Regex didn't match: b'File "dinsdale' not found in b''

- `test_compileall.CommandLineTestsWithSourceEpoch.test_d_runtime_error` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 32, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 746, in test_d_runtime_error
    self.assertRunOK('-q', '-d', 'dinsdale', self.pkgdir)
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 534, in assertRunOK
    rc, out, err = script_helper.assert_python_ok(
                   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 166, in assert_python_ok
    return _assert_python(True, *args, **env_vars)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 151, in _assert_python
    res.fail(cmd_line)
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 76, in fail
    raise AssertionError("Process return code is %d\n"
AssertionError: Process return code is 2
command line: ['/opt/elide/bin/elide', '-X', 'faulthandler', '-O', '-S', '-m', 'compileall', '-q', '-d', 'dinsdale', '/tmp/tmpn_yp32cs/foo']

stdout:
---

---

stderr:
---
error: unexpected argument '-O' found

  tip: to pass '-O' as a value, use '-- -O'

Usage: elide [OPTIONS] [FILE] [-- <SCRIPT_ARGS>...] [COMMAND]

For more information, try '--help'.
---

- `test_compileall.CommandLineTestsWithSourceEpoch.test_force` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 32, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 22, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 636, in test_force
    self.assertRunOK('-q', self.pkgdir)
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 534, in assertRunOK
    rc, out, err = script_helper.assert_python_ok(
                   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 166, in assert_python_ok
    return _assert_python(True, *args, **env_vars)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 151, in _assert_python
    res.fail(cmd_line)
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 76, in fail
    raise AssertionError("Process return code is %d\n"
AssertionError: Process return code is 2
command line: ['/opt/elide/bin/elide', '-X', 'faulthandler', '-O', '-S', '-m', 'compileall', '-q', '/tmp/tmpmty3fqdo/foo']

stdout:
---

---

stderr:
---
error: unexpected argument '-O' found

  tip: to pass '-O' as a value, use '-- -O'

Usage: elide [OPTIONS] [FILE] [-- <SCRIPT_ARGS>...] [COMMAND]

For more information, try '--help'.
---

- `test_array.UnsignedIntTest.test_free_after_iterating` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_array.py", line 1156, in test_free_after_iterating
    support.check_free_after_iterating(self, iter, array.array,
  File "/work/suites/cpython/Lib/test/support/__init__.py", line 1830, in check_free_after_iterating
    test.assertTrue(done)
AssertionError: False is not true

- `test_array.UnsignedIntTest.test_initialize_with_unicode` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_array.py", line 1144, in test_initialize_with_unicode
    self.assertIn("cannot use a unicode array", str(cm.exception))
AssertionError: 'cannot use a unicode array' not found in "'str' object cannot be interpreted as an integer"

- `test_compileall.CommandLineTestsWithSourceEpoch.test_ignore_symlink_destination` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 32, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 914, in test_ignore_symlink_destination
    self.assertRunOK(symlinks_path, "-e", allowed_path)
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 534, in assertRunOK
    rc, out, err = script_helper.assert_python_ok(
                   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 166, in assert_python_ok
    return _assert_python(True, *args, **env_vars)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 151, in _assert_python
    res.fail(cmd_line)
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 76, in fail
    raise AssertionError("Process return code is %d\n"
AssertionError: Process return code is 2
command line: ['/opt/elide/bin/elide', '-X', 'faulthandler', '-O', '-S', '-m', 'compileall', '/tmp/tmp9khyh2dx/test/dir/symlinks', '-e', '/tmp/tmp9khyh2dx/test/dir/allowed']

stdout:
---

---

stderr:
---
error: unexpected argument '-O' found

  tip: to pass '-O' as a value, use '-- -O'

Usage: elide [OPTIONS] [FILE] [-- <SCRIPT_ARGS>...] [COMMAND]

For more information, try '--help'.
---

- …and 247 more
