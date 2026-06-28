# cpython-core — `1.3.5+20260628.3b80cf3`

- Image digest: `3583aceded8e8e4cab8248f08f245aa6859ce893f81e9de5c52097863c70b4cb`
- Suite version: `7c999be49dee7f12703e4b2e07e990544fabd40e`
- Ran: 2026-06-28T03:34:16.043Z → 2026-06-28T03:35:40.962Z

## Summary

![Pass-rate chart](./pass-rate.svg)

**Pass rate: 11337/13250 (85.56%)**

| pass | fail | error | skip | regressions | new passes |
|---:|---:|---:|---:|---:|---:|
| 11337 | 414 | 749 | 750 | 0 | 0 |

## Observed cases (12500)

- `test_defaultdict.TestDefaultDict.test_basic` — pass
- `test_defaultdict.TestDefaultDict.test_callable_arg` — pass
- `test_defaultdict.TestDefaultDict.test_copy` — pass
- `test_defaultdict.TestDefaultDict.test_deep_copy` — pass
- `test_defaultdict.TestDefaultDict.test_keyerror_without_factory` — pass
- `test_defaultdict.TestDefaultDict.test_missing` — pass
- `test_defaultdict.TestDefaultDict.test_pickling` — pass
- `test_yield_from.TestInterestingEdgeCases.test_close_and_throw_raise_base_exception` — pass
- `test_yield_from.TestInterestingEdgeCases.test_close_and_throw_raise_exception` — pass
- `test_yield_from.TestInterestingEdgeCases.test_close_and_throw_raise_generator_exit` — pass
- `test_yield_from.TestInterestingEdgeCases.test_close_and_throw_raise_stop_iteration` — pass
- `test_yield_from.TestInterestingEdgeCases.test_close_and_throw_return` — pass
- `test_bool.BoolTest.test_blocked` — pass
- `test_bool.BoolTest.test_bool_called_at_least_once` — pass
- `test_bool.BoolTest.test_bool_new` — pass
- `test_bool.BoolTest.test_boolean` — pass
- `test_bool.BoolTest.test_callable` — pass
- `test_bool.BoolTest.test_complex` — pass
- `test_bool.BoolTest.test_contains` — pass
- `test_bool.BoolTest.test_convert` — pass
- `test_bool.BoolTest.test_convert_to_bool` — pass
- `test_list.ListTest.test_addmul` — pass
- `test_list.ListTest.test_append` — pass
- `test_yield_from.TestInterestingEdgeCases.test_close_and_throw_work` — pass
- `test_tuple.TupleTest.test_addmul` — pass
- `test_tuple.TupleTest.test_bigrepeat` — pass
- `test_yield_from.TestInterestingEdgeCases.test_close_and_throw_yield` — pass
- `test_yield_from.TestPEP380Operation.test_attempted_yield_from_loop` — pass
- `test_yield_from.TestPEP380Operation.test_attempting_to_send_to_non_generator` — pass
- `test_bisect.TestBisectC.test_backcompatibility` — error — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_bisect.py", line 35, in setUp
    (self.module.bisect_right, [], 1, 0),
     ^^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: 'NoneType' object has no attribute 'bisect_right'

- `test_bool.BoolTest.test_fileclosed` — error — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_bool.py", line 261, in test_fileclosed
    os.remove(os_helper.TESTFN)
FileNotFoundError: [Errno 2] No such file or directory: '@test_31_tmpæ'

- `test_bool.BoolTest.test_float` — pass
- `test_bool.BoolTest.test_format` — pass
- `test_bool.BoolTest.test_from_bytes` — pass
- `test_bool.BoolTest.test_hasattr` — pass
- `test_bool.BoolTest.test_int` — pass
- `test_bool.BoolTest.test_interpreter_convert_to_bool_raises` — pass
- `test_bool.BoolTest.test_isinstance` — pass
- `test_bool.BoolTest.test_issubclass` — pass
- `test_bool.BoolTest.test_keyword_args` — pass
- `test_bisect.TestBisectC.test_insort` — error — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_bisect.py", line 35, in setUp
    (self.module.bisect_right, [], 1, 0),
     ^^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: 'NoneType' object has no attribute 'bisect_right'

- `test_bool.BoolTest.test_marshal` — pass
- `test_bool.BoolTest.test_math` — pass
- `test_bool.BoolTest.test_operator` — pass
- `test_range.RangeTest.test_attributes` — pass
- `test_tuple.TupleTest.test_constructors` — pass
- `test_tuple.TupleTest.test_contains` — pass
- `test_tuple.TupleTest.test_contains_fake` — pass
- `test_tuple.TupleTest.test_contains_order` — pass
- `test_tuple.TupleTest.test_count` — pass
- `test_slice.SliceTest.test_cmp` — pass
- `test_slice.SliceTest.test_constructor` — pass
- `test_slice.SliceTest.test_copy` — pass
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

- `test_range.RangeTest.test_comparison` — pass
- `test_range.RangeTest.test_contains` — pass
- `test_range.RangeTest.test_count` — pass
- `test_range.RangeTest.test_empty` — pass
- `test_range.RangeTest.test_exhausted_iterator_pickling` — pass
- `test_range.RangeTest.test_index` — pass
- `test_range.RangeTest.test_invalid_invocation` — pass
- `test_bisect.TestBisectC.test_lookups_with_key_function` — error — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_bisect.py", line 35, in setUp
    (self.module.bisect_right, [], 1, 0),
     ^^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: 'NoneType' object has no attribute 'bisect_right'

- `test_range.RangeTest.test_issue11845` — pass
- `test_bisect.TestBisectC.test_lt_returns_non_bool` — error — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_bisect.py", line 35, in setUp
    (self.module.bisect_right, [], 1, 0),
     ^^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: 'NoneType' object has no attribute 'bisect_right'

- `test_bisect.TestBisectC.test_lt_returns_notimplemented` — error — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_bisect.py", line 35, in setUp
    (self.module.bisect_right, [], 1, 0),
     ^^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: 'NoneType' object has no attribute 'bisect_right'

- `test_bisect.TestBisectC.test_negative_lo` — error — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_bisect.py", line 35, in setUp
    (self.module.bisect_right, [], 1, 0),
     ^^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: 'NoneType' object has no attribute 'bisect_right'

- `test_bool.BoolTest.test_pickle` — pass
- `test_bool.BoolTest.test_picklevalues` — pass
- `test_bool.BoolTest.test_real_and_imag` — pass
- `test_bool.BoolTest.test_repr` — pass
- `test_bool.BoolTest.test_sane_len` — pass
- `test_bool.BoolTest.test_str` — pass
- `test_bool.BoolTest.test_string` — pass
- `test_bool.BoolTest.test_subclass` — pass
- `test_bool.BoolTest.test_types` — pass
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
- `test_bisect.TestBisectPython.test_negative_lo` — pass
- `test_bisect.TestBisectPython.test_optionalSlicing` — pass
- `test_bisect.TestBisectPython.test_precomputed` — pass
- `test_bisect.TestBisectPython.test_random` — pass
- `test_bisect.TestDocExampleC.test_colors` — error — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_bisect.py", line 405, in test_colors
    bisect_left = self.module.bisect_left
                  ^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: 'NoneType' object has no attribute 'bisect_left'

- `test_bisect.TestDocExampleC.test_grades` — error — Traceback (most recent call last):
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

- `test_bisect.TestDocExamplePython.test_colors` — pass
- `test_bisect.TestDocExamplePython.test_grades` — pass
- `test_bisect.TestErrorHandlingC.test_arg_parsing` — error — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_bisect.py", line 380, in test_arg_parsing
    for f in (self.module.bisect_left, self.module.bisect_right,
              ^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: 'NoneType' object has no attribute 'bisect_left'

- `test_bisect.TestErrorHandlingC.test_cmp_err` — error — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_bisect.py", line 375, in test_cmp_err
    for f in (self.module.bisect_left, self.module.bisect_right,
              ^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: 'NoneType' object has no attribute 'bisect_left'

- `test_bisect.TestErrorHandlingC.test_get_only` — error — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_bisect.py", line 369, in test_get_only
    for f in (self.module.bisect_left, self.module.bisect_right,
              ^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: 'NoneType' object has no attribute 'bisect_left'

- `test_bisect.TestErrorHandlingC.test_len_only` — error — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_bisect.py", line 364, in test_len_only
    for f in (self.module.bisect_left, self.module.bisect_right,
              ^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: 'NoneType' object has no attribute 'bisect_left'

- `test_bisect.TestErrorHandlingC.test_non_sequence` — error — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_bisect.py", line 359, in test_non_sequence
    for f in (self.module.bisect_left, self.module.bisect_right,
              ^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: 'NoneType' object has no attribute 'bisect_left'

- `test_bisect.TestErrorHandlingPython.test_arg_parsing` — pass
- `test_bisect.TestErrorHandlingPython.test_cmp_err` — pass
- `test_bisect.TestErrorHandlingPython.test_get_only` — pass
- `test_bisect.TestErrorHandlingPython.test_len_only` — pass
- `test_bisect.TestErrorHandlingPython.test_non_sequence` — pass
- `test_bisect.TestInsortC.test_backcompatibility` — error — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_bisect.py", line 316, in test_backcompatibility
    self.assertEqual(self.module.insort, self.module.insort_right)
                     ^^^^^^^^^^^^^^^^^^
AttributeError: 'NoneType' object has no attribute 'insort'

- `test_bisect.TestInsortC.test_listDerived` — error — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_bisect.py", line 325, in test_listDerived
    self.module.insort_left(lst, 10)
AttributeError: 'NoneType' object has no attribute 'insort_left'

- `test_yield_from.TestPEP380Operation.test_broken_getattr_handling` — pass
- `test_yield_from.TestPEP380Operation.test_catching_exception_from_subgen_and_returning` — pass
- `test_bisect.TestInsortC.test_vsBuiltinSort` — error — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_bisect.py", line 311, in test_vsBuiltinSort
    f = self.module.insort_right
        ^^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: 'NoneType' object has no attribute 'insort_right'

- `test_bisect.TestInsortPython.test_backcompatibility` — pass
- `test_bisect.TestInsortPython.test_listDerived` — pass
- `test_bisect.TestInsortPython.test_vsBuiltinSort` — pass
- `test_class.ClassTests.testBadTypeReturned` — pass
- `test_class.ClassTests.testBinaryOps` — pass
- `test_class.ClassTests.testClassWithExtCall` — pass
- `test_class.ClassTests.testConstructorErrorMessages` — pass
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
- `test_range.RangeTest.test_iterator_pickling` — pass
- `test_range.RangeTest.test_iterator_pickling_overflowing_index` — pass
- `test_range.RangeTest.test_iterator_setstate` — pass
- `test_range.RangeTest.test_iterator_unpickle_compat` — pass
- `test_range.RangeTest.test_large_exhausted_iterator_pickling` — pass
- `test_range.RangeTest.test_large_operands` — pass
- `test_range.RangeTest.test_large_range` — pass
- `test_range.RangeTest.test_odd_bug` — pass
- `test_exception_variations.ExceptStarTestCases.test_nested` — error — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_exception_variations.py", line 425, in test_nested
    try:
NotImplementedError: try star

- `test_exception_variations.ExceptStarTestCases.test_nested_else` — error — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_exception_variations.py", line 444, in test_nested_else
    hit_inner_else = False
NotImplementedError: try star

- `test_exception_variations.ExceptStarTestCases.test_nested_else_mixed1` — fail — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_exception_variations.py", line 539, in test_nested_else_mixed1
    self.assertTrue(hit_inner_else)
AssertionError: False is not true

- `test_exception_variations.ExceptStarTestCases.test_nested_else_mixed2` — error — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_exception_variations.py", line 549, in test_nested_else_mixed2
    hit_inner_else = False
NotImplementedError: try star

- `test_exception_variations.ExceptStarTestCases.test_nested_mixed1` — fail — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_exception_variations.py", line 486, in test_nested_mixed1
    self.assertTrue(hit_inner_except)
AssertionError: False is not true

- `test_exception_variations.ExceptStarTestCases.test_nested_mixed2` — error — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_exception_variations.py", line 495, in test_nested_mixed2
    hit_inner_finally = False
NotImplementedError: try star

- `test_tuple.TupleTest.test_iterator_pickle` — pass
- `test_tuple.TupleTest.test_keyword_args` — pass
- `test_tuple.TupleTest.test_keywords_in_subclass` — error — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_tuple.py", line 57, in test_keywords_in_subclass
    u = subclass_with_init([1, 2], newarg=3)
        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
TypeError: tuple() got an unexpected keyword argument 'newarg'

- `test_tuple.TupleTest.test_len` — pass
- `test_tuple.TupleTest.test_lexicographic_ordering` — pass
- `test_tuple.TupleTest.test_minmax` — pass
- `test_tuple.TupleTest.test_no_comdat_folding` — pass
- `test_tuple.TupleTest.test_pickle` — pass
- `test_tuple.TupleTest.test_repeat` — pass
- `test_tuple.TupleTest.test_repr` — pass
- `test_slice.SliceTest.test_cycle` — pass
- `test_slice.SliceTest.test_deepcopy` — pass
- `test_slice.SliceTest.test_hash` — pass
- `test_exception_variations.ExceptStarTestCases.test_try_except` — error — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_exception_variations.py", line 363, in test_try_except
    hit_except = False
NotImplementedError: try star

- `test_exception_variations.ExceptStarTestCases.test_try_except_else` — error — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_exception_variations.py", line 384, in test_try_except_else
    hit_else = False
NotImplementedError: try star

- `test_exception_variations.ExceptStarTestCases.test_try_except_else_finally` — error — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_exception_variations.py", line 301, in test_try_except_else_finally
    hit_finally = False
NotImplementedError: try star

- `test_exception_variations.ExceptStarTestCases.test_try_except_else_finally_no_exception` — error — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_exception_variations.py", line 319, in test_try_except_else_finally_no_exception
    hit_finally = False
NotImplementedError: try star

- `test_exception_variations.ExceptStarTestCases.test_try_except_else_no_exception` — error — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_exception_variations.py", line 398, in test_try_except_else_no_exception
    hit_else = False
NotImplementedError: try star

- `test_exception_variations.ExceptStarTestCases.test_try_except_finally` — error — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_exception_variations.py", line 336, in test_try_except_finally
    hit_finally = False
NotImplementedError: try star

- `test_exception_variations.ExceptStarTestCases.test_try_except_finally_no_exception` — error — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_exception_variations.py", line 350, in test_try_except_finally_no_exception
    hit_finally = False
NotImplementedError: try star

- `test_exception_variations.ExceptStarTestCases.test_try_except_no_exception` — error — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_exception_variations.py", line 373, in test_try_except_no_exception
    hit_except = False
NotImplementedError: try star

- `test_exception_variations.ExceptStarTestCases.test_try_finally_no_exception` — pass
- `test_exception_variations.ExceptTestCases.test_nested` — pass
- `test_exception_variations.ExceptTestCases.test_nested_else` — pass
- `test_exception_variations.ExceptTestCases.test_nested_exception_in_else` — pass
- `test_exception_variations.ExceptTestCases.test_nested_exception_in_except` — pass
- `test_exception_variations.ExceptTestCases.test_nested_exception_in_finally_no_exception` — pass
- `test_exception_variations.ExceptTestCases.test_nested_exception_in_finally_with_exception` — pass
- `test_exception_variations.ExceptTestCases.test_try_except` — pass
- `test_exception_variations.ExceptTestCases.test_try_except_else` — pass
- `test_exception_variations.ExceptTestCases.test_try_except_else_finally` — pass
- `test_exception_variations.ExceptTestCases.test_try_except_else_finally_no_exception` — pass
- `test_exception_variations.ExceptTestCases.test_try_except_else_no_exception` — pass
- `test_exception_variations.ExceptTestCases.test_try_except_finally` — pass
- `test_exception_variations.ExceptTestCases.test_try_except_finally_no_exception` — pass
- `test_exception_variations.ExceptTestCases.test_try_except_no_exception` — pass
- `test_exception_variations.ExceptTestCases.test_try_finally_no_exception` — pass
- `test_range.RangeTest.test_pickling` — pass
- `test_range.RangeTest.test_range` — pass
- `test_range.RangeTest.test_range_constructor_error_messages` — fail — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_range.py", line 95, in test_range_constructor_error_messages
    with self.assertRaisesRegex(
AssertionError: "range expected at least 1 argument, got 0" does not match "range() missing 1 required positional argument: 'a'"

- `test_scope.ScopeTests.testBoundAndFree` — pass
- `test_scope.ScopeTests.testCellIsArgAndEscapes` — pass
- `test_scope.ScopeTests.testCellIsKwonlyArg` — pass
- `test_scope.ScopeTests.testCellIsLocalAndEscapes` — pass
- `test_scope.ScopeTests.testClassAndGlobal` — pass
- `test_scope.ScopeTests.testClassNamespaceOverridesClosure` — pass
- `test_scope.ScopeTests.testComplexDefinitions` — pass
- `test_scope.ScopeTests.testEvalExecFreeVars` — pass
- `test_scope.ScopeTests.testEvalFreeVars` — pass
- `test_scope.ScopeTests.testExtraNesting` — pass
- `test_scope.ScopeTests.testFreeVarInMethod` — pass
- `test_scope.ScopeTests.testFreeingCell` — pass
- `test_scope.ScopeTests.testGlobalInParallelNestedFunctions` — pass
- `test_scope.ScopeTests.testLambdas` — pass
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
- …and 12300 more
