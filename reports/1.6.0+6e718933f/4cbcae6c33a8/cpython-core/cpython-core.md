# cpython-core — `1.6.0+6e718933f`

- Image digest: `4cbcae6c33a8b98c3c3ba5241fc17c8e61a74ab2b92e83320d78cd0bc5181738`
- Suite version: `fd17997c3866d61e0e7bd8201b1d8f35b40a40bd`
- Ran: 2026-10-09T08:26:34.176Z → 2026-10-09T08:39:32.796Z

## Summary

![Pass-rate chart](./pass-rate.svg)

**Pass rate: 31404/34947 (89.86%)** — overall, over all tests including skipped/suppressed

**vs expectations: 34947/34947 (100.00%)** — tests at or above the baseline (only regressions count against it)

| pass | fail | error | skip | regressions | new passes |
|---:|---:|---:|---:|---:|---:|
| 31404 | 1259 | 831 | 1453 | 0 | 0 |

## Observed cases (33494)

- `test_slice.SliceTest.test_cmp` — pass
- `test_slice.SliceTest.test_constructor` — pass
- `test_slice.SliceTest.test_copy` — pass
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
- `test_range.RangeTest.test_attributes` — pass
- `test_range.RangeTest.test_comparison` — pass
- `test_range.RangeTest.test_contains` — pass
- `test_range.RangeTest.test_count` — pass
- `test_range.RangeTest.test_empty` — pass
- `test_range.RangeTest.test_exhausted_iterator_pickling` — pass
- `test_range.RangeTest.test_index` — pass
- `test_range.RangeTest.test_invalid_invocation` — pass
- `test_range.RangeTest.test_issue11845` — pass
- `test_range.RangeTest.test_iterator_invalid_setstate` — pass
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
- `test_tuple.TupleTest.test_add` — pass
- `test_tuple.TupleTest.test_bigrepeat` — pass
- `test_tuple.TupleTest.test_cmp` — pass
- `test_range.RangeTest.test_range_constructor_error_messages` — fail — TypeError: range() missing 1 required positional argument: 'a'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_range.py", line 95, in test_range_constructor_error_messages
    with self.assertRaisesRegex(
         ~~~~~~~~~~~~~~~~~~~~~~^
            TypeError,
            ^^^^^^^^^^
            "range expected at least 1 argument, got 0"
            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    ):
    ^
AssertionError: "range expected at least 1 argument, got 0" does not match "range() missing 1 required positional argument: 'a'"

- `test_tuple.TupleTest.test_constructors` — pass
- `test_tuple.TupleTest.test_contains` — pass
- `test_tuple.TupleTest.test_contains_fake` — pass
- `test_tuple.TupleTest.test_contains_order` — pass
- `test_tuple.TupleTest.test_count` — pass
- `test_tuple.TupleTest.test_getitem` — pass
- `test_tuple.TupleTest.test_getitem_error` — pass
- `test_tuple.TupleTest.test_getitemoverwriteiter` — pass
- `test_tuple.TupleTest.test_getslice` — pass
- `test_tuple.TupleTest.test_hash_optional` — pass
- `test_tuple.TupleTest.test_iadd` — pass
- `test_tuple.TupleTest.test_imul` — pass
- `test_tuple.TupleTest.test_index` — pass
- `test_tuple.TupleTest.test_iterator_pickle` — pass
- `test_tuple.TupleTest.test_keyword_args` — pass
- `test_tuple.TupleTest.test_keywords_in_subclass` — error — Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_tuple.py", line 57, in test_keywords_in_subclass
    u = subclass_with_init([1, 2], newarg=3)
TypeError: tuple() got an unexpected keyword argument 'newarg'

- `test_tuple.TupleTest.test_len` — pass
- `test_tuple.TupleTest.test_lexicographic_ordering` — pass
- `test_tuple.TupleTest.test_minmax` — pass
- `test_tuple.TupleTest.test_mul` — pass
- `test_tuple.TupleTest.test_no_comdat_folding` — pass
- `test_tuple.TupleTest.test_pickle` — pass
- `test_tuple.TupleTest.test_repeat` — pass
- `test_tuple.TupleTest.test_repr` — pass
- `test_dict.DictTest.test_bad_key` — pass
- `test_dict.DictTest.test_bool` — pass
- `test_dict.DictTest.test_clear` — pass
- `test_dict.DictTest.test_clear_at_lookup` — pass
- `test_dict.DictTest.test_clear_reentrant_cycle` — pass
- `test_dict.DictTest.test_clear_reentrant_delete` — pass
- `test_dict.DictTest.test_clear_reentrant_embedded` — pass
- `test_dict.DictTest.test_clear_reentrant_force_combined` — pass
- `test_dict.DictTest.test_constructor` — pass
- `test_list.ListTest.test_add` — pass
- `test_list.ListTest.test_append` — pass
- `test_list.ListTest.test_bigrepeat` — pass
- `test_list.ListTest.test_clear` — pass
- `test_list.ListTest.test_cmp` — pass
- `test_list.ListTest.test_constructor_exception_handling` — pass
- `test_list.ListTest.test_constructors` — pass
- `test_list.ListTest.test_contains` — pass
- `test_list.ListTest.test_contains_fake` — pass
- `test_list.ListTest.test_contains_order` — pass
- `test_tuple.TupleTest.test_repr_large` — pass
- `test_tuple.TupleTest.test_reversed_pickle` — pass
- `test_tuple.TupleTest.test_subscript` — pass
- `test_list.ListTest.test_copy` — pass
- `test_list.ListTest.test_count` — pass
- `test_list.ListTest.test_count_index_remove_crashes` — pass
- `test_list.ListTest.test_delitem` — pass
- `test_list.ListTest.test_delslice` — pass
- `test_tuple.TupleTest.test_truth` — pass
- `test_tuple.TupleTest.test_tupleresizebug` — pass
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
- `test_yield_from.TestInterestingEdgeCases.test_close_and_throw_raise_base_exception` — pass
- `test_yield_from.TestInterestingEdgeCases.test_close_and_throw_raise_exception` — pass
- `test_set.TestBasicOpsEmpty.test_copy` — pass
- `test_set.TestBasicOpsEmpty.test_empty_difference` — pass
- `test_set.TestBasicOpsEmpty.test_empty_difference_rev` — pass
- `test_set.TestBasicOpsEmpty.test_empty_intersection` — pass
- `test_set.TestBasicOpsEmpty.test_empty_isdisjoint` — pass
- `test_yield_from.TestInterestingEdgeCases.test_close_and_throw_raise_generator_exit` — pass
- `test_set.TestBasicOpsEmpty.test_empty_symmetric_difference` — pass
- `test_set.TestBasicOpsEmpty.test_empty_union` — pass
- `test_set.TestBasicOpsEmpty.test_equivalent_equality` — pass
- `test_set.TestBasicOpsEmpty.test_intersection_empty` — pass
- `test_set.TestBasicOpsEmpty.test_isdisjoint_empty` — pass
- `test_yield_from.TestInterestingEdgeCases.test_close_and_throw_raise_stop_iteration` — pass
- `test_yield_from.TestInterestingEdgeCases.test_close_and_throw_return` — pass
- `test_yield_from.TestInterestingEdgeCases.test_close_and_throw_work` — pass
- `test_yield_from.TestInterestingEdgeCases.test_close_and_throw_yield` — pass
- `test_yield_from.TestPEP380Operation.test_attempted_yield_from_loop` — pass
- `test_yield_from.TestPEP380Operation.test_attempting_to_send_to_non_generator` — pass
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
- `test_yield_from.TestPEP380Operation.test_broken_getattr_handling` — pass
- `test_yield_from.TestPEP380Operation.test_catching_exception_from_subgen_and_returning` — pass
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
- `test_list.ListTest.test_deopt_from_append_list` — pass
- `test_list.ListTest.test_empty_slice` — pass
- …and 33294 more

## Excluded (2970) — unsupported, out of scope or not applicable; in no rate

| tests | reason |
|---:|---|
| 668 | unsupported: CPython implementation detail — the test marks itself CPython-only |
| 650 | not applicable: other platform — Windows-only |
| 551 | out of scope: CPython C API — CPython C-API test suite |
| 221 | out of scope: CPython C API — CPython C-API test module |
| 191 | out of scope: CPython C accelerator — tests the C accelerator of a module that also ships a Python version |
| 136 | out of scope: CPython C accelerator — tests a CPython C accelerator module |
| 131 | unsupported: CPython implementation detail — CPython bytecode (dis); an implementation detail per the docs |
| 65 | unsupported: CPython implementation detail — CPython bytecode peephole optimizer |
| 42 | not applicable: other platform — BSD/Solaris-only selector |
| 41 | not applicable: other platform — macOS-only |
| 34 | not applicable: not provided by the harness — bigmem test; regrtest runs these only with -M |
| 31 | unsupported: CPython refcounting/GC — asserts deallocation at refcount zero (CPython refcounting) |
| 28 | not applicable: not provided by the harness — needs the PyPI tzdata package |
| 23 | out of scope: CPython C accelerator — tests CPython's _bisect C accelerator; the runtime ships the Python bisect |
| 22 | unsupported: CPython implementation detail — PEP 509 dict versions (CPython-only, via _testcapi) |
| 22 | out of scope: CPython C accelerator — CPython C-accelerator detail |
| 21 | out of scope: CPython C API — CPython datetime C API (datetime_CAPI capsule, via _testcapi) |
| 18 | not applicable: not provided by the harness — needs the third-party hypothesis package |
| 16 | not applicable: other platform — 32-bit platforms only |
| 12 | out of scope: CPython C API — CPython vectorcall C API (via _testcapi) |
| 10 | unsupported: CPython implementation detail — needs a CPython debug build |
| 8 | not applicable: other platform — case-insensitive filesystems only |
| 6 | out of scope: CPython subinterpreters — needs subinterpreters |
| 6 | not applicable: not provided by the harness — needs Tk |
| 3 | not applicable: not provided by the harness — needs the third-party numpy package |
| 1 | unsupported: CPython implementation detail — exact tuple hash values |
| 1 | unsupported: CPython refcounting/GC — weakref/refcount: exception-local object not deterministically freed under JVM GC |
| 1 | unsupported: CPython refcounting/GC — JVM finalization: object __del__ not run at refcount 0, sys.exception() sentinel never cleared |
| 1 | unsupported: CPython implementation detail — hash(str)==hash(bytes) is CPython's siphash |
| 1 | unsupported: CPython implementation detail — inspects CPython bytecode via dis |
| 1 | unsupported: CPython refcounting/GC — finalize/weakref timing: del+gc.collect does not free object under JVM GC |
| 1 | unsupported: CPython refcounting/GC — finalize timing: del does not run finalizer under JVM GC |
| 1 | unsupported: CPython refcounting/GC — finalizer ordering/timing at JVM GC differs from CPython refcount-0 ordering |
| 1 | unsupported: CPython refcounting/GC — needs gc.get_objects |
| 1 | unsupported: CPython refcounting/GC — __del__ finalization timing; not run synchronously after del+gc.collect on GraalPy |
| 1 | unsupported: CPython refcounting/GC — instance __del__ counting depends on refcount/GC finalization timing |
| 1 | unsupported: CPython implementation detail — CPython's C startup path calculation (via _testinternalcapi) |
| 1 | unsupported: CPython implementation detail — CPython opcode tables |
| 1 | unsupported: CPython implementation detail — CPython type-attribute cache internals (via _testinternalcapi) |
