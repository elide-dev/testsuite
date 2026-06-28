# cpython-core — `1.3.5+20260628.3b80cf3`

- Image digest: `3583aceded8e8e4cab8248f08f245aa6859ce893f81e9de5c52097863c70b4cb`
- Suite version: `7c999be49dee7f12703e4b2e07e990544fabd40e`
- Ran: 2026-06-28T05:54:45.969Z → 2026-06-28T05:56:31.805Z

## Summary

![Pass-rate chart](./pass-rate.svg)

**Pass rate: 11193/12964 (86.34%)**

| pass | fail | error | skip | regressions | new passes |
|---:|---:|---:|---:|---:|---:|
| 11193 | 454 | 591 | 726 | 0 | 0 |

## Observed cases (12238)

- `test_defaultdict.TestDefaultDict.test_basic` — pass
- `test_defaultdict.TestDefaultDict.test_callable_arg` — pass
- `test_defaultdict.TestDefaultDict.test_copy` — pass
- `test_defaultdict.TestDefaultDict.test_deep_copy` — pass
- `test_defaultdict.TestDefaultDict.test_keyerror_without_factory` — pass
- `test_defaultdict.TestDefaultDict.test_missing` — pass
- `test_defaultdict.TestDefaultDict.test_pickling` — pass
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
- `test_slice.SliceTest.test_cmp` — pass
- `test_slice.SliceTest.test_constructor` — pass
- `test_slice.SliceTest.test_copy` — pass
- `test_operator.CCOperatorPickleTestCase.test_attrgetter` — pass
- `test_operator.CCOperatorPickleTestCase.test_itemgetter` — pass
- `test_yield_from.TestInterestingEdgeCases.test_close_and_throw_raise_base_exception` — pass
- `test_yield_from.TestInterestingEdgeCases.test_close_and_throw_raise_exception` — pass
- `test_yield_from.TestInterestingEdgeCases.test_close_and_throw_raise_generator_exit` — pass
- `test_yield_from.TestInterestingEdgeCases.test_close_and_throw_raise_stop_iteration` — pass
- `test_yield_from.TestInterestingEdgeCases.test_close_and_throw_return` — pass
- `test_yield_from.TestInterestingEdgeCases.test_close_and_throw_work` — pass
- `test_operator.CCOperatorPickleTestCase.test_methodcaller` — pass
- `test_operator.COperatorTestCase.test___all__` — pass
- `test_operator.COperatorTestCase.test_abs` — pass
- `test_operator.COperatorTestCase.test_add` — pass
- `test_operator.COperatorTestCase.test_attrgetter` — pass
- `test_operator.COperatorTestCase.test_bitwise_and` — pass
- `test_operator.COperatorTestCase.test_bitwise_or` — pass
- `test_operator.COperatorTestCase.test_bitwise_xor` — pass
- `test_operator.COperatorTestCase.test_call` — pass
- `test_operator.COperatorTestCase.test_concat` — pass
- `test_operator.COperatorTestCase.test_contains` — pass
- `test_operator.COperatorTestCase.test_countOf` — pass
- `test_operator.COperatorTestCase.test_delitem` — pass
- `test_operator.COperatorTestCase.test_dunder_is_original` — pass
- `test_operator.COperatorTestCase.test_eq` — pass
- `test_operator.COperatorTestCase.test_floordiv` — pass
- `test_operator.COperatorTestCase.test_ge` — pass
- `test_operator.COperatorTestCase.test_getitem` — pass
- `test_operator.COperatorTestCase.test_gt` — pass
- `test_yield_from.TestInterestingEdgeCases.test_close_and_throw_yield` — pass
- `test_yield_from.TestPEP380Operation.test_attempted_yield_from_loop` — pass
- `test_yield_from.TestPEP380Operation.test_attempting_to_send_to_non_generator` — pass
- `test_yield_from.TestPEP380Operation.test_broken_getattr_handling` — pass
- `test_yield_from.TestPEP380Operation.test_catching_exception_from_subgen_and_returning` — pass
- `test_operator.COperatorTestCase.test_iconcat_without_getitem` — pass
- `test_operator.COperatorTestCase.test_index` — pass
- `test_operator.COperatorTestCase.test_indexOf` — pass
- `test_operator.COperatorTestCase.test_inplace` — pass
- `test_operator.COperatorTestCase.test_invert` — pass
- `test_operator.COperatorTestCase.test_is` — pass
- `test_operator.COperatorTestCase.test_is_not` — pass
- `test_operator.COperatorTestCase.test_itemgetter` — pass
- `test_operator.COperatorTestCase.test_le` — pass
- `test_operator.COperatorTestCase.test_length_hint` — pass
- `test_operator.COperatorTestCase.test_lshift` — pass
- `test_operator.COperatorTestCase.test_lt` — pass
- `test_operator.COperatorTestCase.test_matmul` — pass
- `test_operator.COperatorTestCase.test_methodcaller` — pass
- `test_tuple.TupleTest.test_addmul` — pass
- `test_tuple.TupleTest.test_bigrepeat` — pass
- `test_operator.COperatorTestCase.test_mod` — pass
- `test_operator.COperatorTestCase.test_mul` — pass
- `test_operator.COperatorTestCase.test_ne` — pass
- `test_operator.COperatorTestCase.test_neg` — pass
- `test_operator.COperatorTestCase.test_not_` — pass
- `test_operator.COperatorTestCase.test_pos` — pass
- `test_operator.COperatorTestCase.test_pow` — pass
- `test_operator.COperatorTestCase.test_rshift` — pass
- `test_operator.COperatorTestCase.test_setitem` — pass
- `test_operator.COperatorTestCase.test_sub` — pass
- `test_operator.COperatorTestCase.test_truediv` — pass
- `test_operator.COperatorTestCase.test_truth` — pass
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
- `test_tuple.TupleTest.test_constructors` — pass
- `test_tuple.TupleTest.test_contains` — pass
- `test_tuple.TupleTest.test_contains_fake` — pass
- `test_tuple.TupleTest.test_contains_order` — pass
- `test_tuple.TupleTest.test_count` — pass
- `test_operator.CPyOperatorPickleTestCase.test_attrgetter` — pass
- `test_operator.CPyOperatorPickleTestCase.test_itemgetter` — pass
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
- `test_defaultdict.TestDefaultDict.test_recursive_repr` — error — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_defaultdict.py", line 136, in test_recursive_repr
    self.assertRegex(repr(d),
                     ^^^^^^^
RecursionError: maximum recursion depth exceeded

- `test_defaultdict.TestDefaultDict.test_repr` — pass
- `test_defaultdict.TestDefaultDict.test_shallow_copy` — pass
- `test_defaultdict.TestDefaultDict.test_union` — pass
- `test_range.RangeTest.test_range_constructor_error_messages` — fail — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_range.py", line 95, in test_range_constructor_error_messages
    with self.assertRaisesRegex(
AssertionError: "range expected at least 1 argument, got 0" does not match "range() missing 1 required positional argument: 'a'"

- `test_operator.CPyOperatorPickleTestCase.test_methodcaller` — pass
- `test_operator.PyCOperatorPickleTestCase.test_attrgetter` — pass
- `test_operator.PyCOperatorPickleTestCase.test_itemgetter` — pass
- `test_operator.PyCOperatorPickleTestCase.test_methodcaller` — pass
- `test_patma.TestCompiler.test_refleaks` — pass
- `test_operator.PyOperatorTestCase.test___all__` — pass
- `test_operator.PyOperatorTestCase.test_abs` — pass
- `test_operator.PyOperatorTestCase.test_add` — pass
- `test_patma.TestInheritance.test_late_registration_mapping` — pass
- `test_patma.TestInheritance.test_late_registration_sequence` — pass
- `test_patma.TestInheritance.test_multiple_inheritance_mapping` — pass
- `test_patma.TestInheritance.test_multiple_inheritance_sequence` — pass
- `test_patma.TestPatma.test_patma_000` — pass
- `test_patma.TestPatma.test_patma_001` — pass
- `test_patma.TestPatma.test_patma_002` — pass
- `test_patma.TestPatma.test_patma_003` — pass
- `test_patma.TestPatma.test_patma_004` — pass
- `test_patma.TestPatma.test_patma_005` — pass
- `test_patma.TestPatma.test_patma_006` — pass
- `test_patma.TestPatma.test_patma_007` — pass
- `test_patma.TestPatma.test_patma_008` — pass
- `test_patma.TestPatma.test_patma_009` — pass
- `test_patma.TestPatma.test_patma_010` — pass
- `test_patma.TestPatma.test_patma_011` — pass
- `test_patma.TestPatma.test_patma_012` — pass
- `test_patma.TestPatma.test_patma_013` — pass
- `test_patma.TestPatma.test_patma_014` — pass
- `test_patma.TestPatma.test_patma_015` — pass
- `test_patma.TestPatma.test_patma_016` — pass
- `test_patma.TestPatma.test_patma_017` — pass
- `test_patma.TestPatma.test_patma_018` — pass
- `test_patma.TestPatma.test_patma_019` — pass
- `test_patma.TestPatma.test_patma_020` — pass
- `test_patma.TestPatma.test_patma_021` — pass
- `test_patma.TestPatma.test_patma_022` — pass
- `test_slice.SliceTest.test_cycle` — pass
- `test_slice.SliceTest.test_deepcopy` — pass
- `test_slice.SliceTest.test_hash` — pass
- `test_generators.ExceptionTest.test_except_gen_except` — pass
- `test_generators.ExceptionTest.test_except_next` — pass
- `test_generators.ExceptionTest.test_except_throw` — pass
- `test_generators.ExceptionTest.test_except_throw_bad_exception` — pass
- `test_generators.ExceptionTest.test_except_throw_exception_context` — pass
- `test_generators.ExceptionTest.test_gen_3_arg_deprecation_warning` — pass
- `test_generators.ExceptionTest.test_nested_gen_except_loop` — pass
- `test_generators.ExceptionTest.test_return_stopiteration` — pass
- `test_generators.ExceptionTest.test_return_tuple` — pass
- `test_generators.ExceptionTest.test_stopiteration_error` — pass
- `test_generators.ExceptionTest.test_tutorial_stopiteration` — pass
- `test_operator.PyOperatorTestCase.test_attrgetter` — pass
- `test_operator.PyOperatorTestCase.test_bitwise_and` — pass
- `test_operator.PyOperatorTestCase.test_bitwise_or` — pass
- `test_operator.PyOperatorTestCase.test_bitwise_xor` — pass
- `test_operator.PyOperatorTestCase.test_call` — pass
- `test_operator.PyOperatorTestCase.test_concat` — pass
- `test_operator.PyOperatorTestCase.test_contains` — pass
- `test_operator.PyOperatorTestCase.test_countOf` — pass
- `test_operator.PyOperatorTestCase.test_delitem` — pass
- `test_operator.PyOperatorTestCase.test_dunder_is_original` — pass
- `test_operator.PyOperatorTestCase.test_eq` — pass
- `test_operator.PyOperatorTestCase.test_floordiv` — pass
- `test_operator.PyOperatorTestCase.test_ge` — pass
- `test_operator.PyOperatorTestCase.test_getitem` — pass
- `test_operator.PyOperatorTestCase.test_gt` — pass
- `test_patma.TestPatma.test_patma_023` — pass
- `test_patma.TestPatma.test_patma_024` — pass
- …and 12038 more
