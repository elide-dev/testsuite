# cpython-core — `1.3.5+20260628.3b80cf3`

- Image digest: `3583aceded8e8e4cab8248f08f245aa6859ce893f81e9de5c52097863c70b4cb`
- Suite version: `7c999be49dee7f12703e4b2e07e990544fabd40e`
- Ran: 2026-06-28T03:25:04.500Z → 2026-06-28T03:26:28.872Z

## Summary

![Pass-rate chart](./pass-rate.svg)

**Pass rate: 10490/11960 (87.71%)**

| pass | fail | error | skip | regressions | new passes |
|---:|---:|---:|---:|---:|---:|
| 10490 | 355 | 498 | 617 | 0 | 0 |

## Observed cases (11343)

- `test_tuple.TupleTest.test_addmul` — pass
- `test_tuple.TupleTest.test_bigrepeat` — pass
- `test_tuple.TupleTest.test_constructors` — pass
- `test_tuple.TupleTest.test_contains` — pass
- `test_tuple.TupleTest.test_contains_fake` — pass
- `test_tuple.TupleTest.test_contains_order` — pass
- `test_tuple.TupleTest.test_count` — pass
- `test_heapq.TestErrorHandlingPython.test_arg_parsing` — pass
- `test_heapq.TestErrorHandlingPython.test_cmp_err` — pass
- `test_heapq.TestErrorHandlingPython.test_comparison_operator_modifiying_heap` — pass
- `test_heapq.TestErrorHandlingPython.test_comparison_operator_modifiying_heap_two_heaps` — pass
- `test_heapq.TestErrorHandlingPython.test_heappop_mutating_heap` — pass
- `test_heapq.TestErrorHandlingPython.test_heappush_mutating_heap` — pass
- `test_class.ClassTests.testBadTypeReturned` — pass
- `test_class.ClassTests.testBinaryOps` — pass
- `test_class.ClassTests.testClassWithExtCall` — pass
- `test_class.ClassTests.testConstructorErrorMessages` — pass
- `test_heapq.TestErrorHandlingPython.test_iterable_args` — pass
- `test_heapq.TestErrorHandlingPython.test_len_only` — pass
- `test_heapq.TestErrorHandlingPython.test_non_sequence` — pass
- `test_heapq.TestHeapPython.test_comparison_operator` — pass
- `test_heapq.TestHeapPython.test_empty_merges` — pass
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

- `test_tuple.TupleTest.test_len` — pass
- `test_tuple.TupleTest.test_lexicographic_ordering` — pass
- `test_tuple.TupleTest.test_minmax` — pass
- `test_tuple.TupleTest.test_no_comdat_folding` — pass
- `test_tuple.TupleTest.test_pickle` — pass
- `test_tuple.TupleTest.test_repeat` — pass
- `test_tuple.TupleTest.test_repr` — pass
- `test_call.FastCallTests.test_fastcall_clearing_dict` — pass
- `test_metaclass.__test__.doctests` — pass
- `test_heapq.TestHeapPython.test_heapify` — pass
- `test_heapq.TestHeapPython.test_heappop_max` — pass
- `test_heapq.TestHeapPython.test_heappushpop` — pass
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
- `test_heapq.TestHeapPython.test_heapsort` — pass
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
- `test_operator.CCOperatorPickleTestCase.test_attrgetter` — pass
- `test_operator.CCOperatorPickleTestCase.test_itemgetter` — pass
- `test_heapq.TestHeapPython.test_merge` — pass
- `test_heapq.TestHeapPython.test_merge_does_not_suppress_index_error` — pass
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
- `test_operator.CPyOperatorPickleTestCase.test_attrgetter` — pass
- `test_operator.CPyOperatorPickleTestCase.test_itemgetter` — pass
- `test_operator.CPyOperatorPickleTestCase.test_methodcaller` — pass
- `test_operator.PyCOperatorPickleTestCase.test_attrgetter` — pass
- `test_operator.PyCOperatorPickleTestCase.test_itemgetter` — pass
- `test_baseexception.ExceptionClassTests.test_builtins_new_style` — pass
- `test_baseexception.ExceptionClassTests.test_inheritance` — pass
- `test_baseexception.ExceptionClassTests.test_interface_multi_arg` — pass
- `test_baseexception.ExceptionClassTests.test_interface_no_arg` — pass
- `test_baseexception.ExceptionClassTests.test_interface_single_arg` — pass
- `test_operator.PyCOperatorPickleTestCase.test_methodcaller` — pass
- `test_operator.PyOperatorTestCase.test___all__` — pass
- `test_operator.PyOperatorTestCase.test_abs` — pass
- `test_operator.PyOperatorTestCase.test_add` — pass
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
- `test_operator.PyOperatorTestCase.test_iconcat_without_getitem` — pass
- `test_operator.PyOperatorTestCase.test_index` — pass
- `test_operator.PyOperatorTestCase.test_indexOf` — pass
- `test_operator.PyOperatorTestCase.test_inplace` — pass
- `test_operator.PyOperatorTestCase.test_invert` — pass
- `test_operator.PyOperatorTestCase.test_is` — pass
- `test_operator.PyOperatorTestCase.test_is_not` — pass
- `test_baseexception.ExceptionClassTests.test_setstate_refcount_no_crash` — pass
- `test_baseexception.UsageTests.test_catch_BaseException_instance` — pass
- `test_baseexception.UsageTests.test_catch_non_BaseException` — pass
- `test_baseexception.UsageTests.test_catch_string` — pass
- `test_baseexception.UsageTests.test_raise_new_style_non_exception` — pass
- `test_baseexception.UsageTests.test_raise_string` — pass
- `test_operator.PyOperatorTestCase.test_itemgetter` — pass
- `test_operator.PyOperatorTestCase.test_le` — pass
- `test_operator.PyOperatorTestCase.test_length_hint` — pass
- `test_operator.PyOperatorTestCase.test_lshift` — pass
- `test_operator.PyOperatorTestCase.test_lt` — pass
- `test_operator.PyOperatorTestCase.test_matmul` — pass
- `test_operator.PyOperatorTestCase.test_methodcaller` — pass
- `test_operator.PyOperatorTestCase.test_mod` — pass
- `test_operator.PyOperatorTestCase.test_mul` — pass
- `test_operator.PyOperatorTestCase.test_ne` — pass
- `test_operator.PyOperatorTestCase.test_neg` — pass
- `test_operator.PyOperatorTestCase.test_not_` — pass
- `test_operator.PyOperatorTestCase.test_pos` — pass
- `test_operator.PyOperatorTestCase.test_pow` — pass
- `test_operator.PyOperatorTestCase.test_rshift` — pass
- `test_operator.PyOperatorTestCase.test_setitem` — pass
- `test_operator.PyOperatorTestCase.test_sub` — pass
- `test_operator.PyOperatorTestCase.test_truediv` — pass
- `test_operator.PyOperatorTestCase.test_truth` — pass
- `test_tuple.TupleTest.test_repr_large` — pass
- `test_tuple.TupleTest.test_reversed_pickle` — pass
- `test_tuple.TupleTest.test_subscript` — pass
- `test_tuple.TupleTest.test_truth` — pass
- `test_tuple.TupleTest.test_tupleresizebug` — pass
- `test_operator.PyPyOperatorPickleTestCase.test_attrgetter` — pass
- `test_operator.PyPyOperatorPickleTestCase.test_itemgetter` — pass
- `test_operator.PyPyOperatorPickleTestCase.test_methodcaller` — pass
- `test_call.FunctionCalls.test_frames_are_popped_after_failed_calls` — pass
- `test_call.FunctionCalls.test_kwargs_order` — pass
- `test_call.TestCallingConventions.test_fastcall` — pass
- `test_call.TestCallingConventions.test_fastcall_error_kw` — fail — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 361, in test_fastcall_error_kw
    self.assertRaisesRegex(
AssertionError: "meth_fastcall\(\) takes no keyword arguments" does not match "meth_fastcall() got an unexpected keyword argument 'k'"

- `test_call.TestCallingConventions.test_fastcall_ext` — pass
- `test_call.TestCallingConventions.test_fastcall_keywords` — pass
- `test_call.TestCallingConventions.test_fastcall_keywords_ext` — pass
- `test_call.TestCallingConventions.test_noargs` — pass
- `test_call.TestCallingConventions.test_noargs_error_arg` — fail — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 325, in test_noargs_error_arg
    self.assertRaisesRegex(
AssertionError: "meth_noargs\(\) takes no arguments \(1 given\)" does not match "meth_noargs() takes 0 positional arguments but 1 was given"

- `test_call.TestCallingConventions.test_noargs_error_arg2` — fail — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 331, in test_noargs_error_arg2
    self.assertRaisesRegex(
AssertionError: "meth_noargs\(\) takes no arguments \(2 given\)" does not match "meth_noargs() takes 0 positional arguments but 2 were given"

- `test_call.TestCallingConventions.test_noargs_error_ext` — fail — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 337, in test_noargs_error_ext
    self.assertRaisesRegex(
AssertionError: "meth_noargs\(\) takes no arguments \(3 given\)" does not match "meth_noargs() takes 0 positional arguments but 3 were given"

- `test_call.TestCallingConventions.test_noargs_error_kw` — fail — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 343, in test_noargs_error_kw
    self.assertRaisesRegex(
AssertionError: "meth_noargs\(\) takes no keyword arguments" does not match "meth_noargs() got an unexpected keyword argument 'k'"

- `test_call.TestCallingConventions.test_noargs_ext` — pass
- `test_call.TestCallingConventions.test_o` — pass
- `test_call.TestCallingConventions.test_o_error_arg_kw` — fail — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 313, in test_o_error_arg_kw
    self.assertRaisesRegex(
AssertionError: "meth_o\(\) takes no keyword arguments" does not match "meth_o() got an unexpected keyword argument 'k'"

- `test_call.TestCallingConventions.test_o_error_ext` — fail — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 301, in test_o_error_ext
    self.assertRaisesRegex(
AssertionError: "meth_o\(\) takes exactly one argument \(3 given\)" does not match "meth_o() takes 1 positional argument but 3 were given"

- `test_call.TestCallingConventions.test_o_error_kw` — fail — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 307, in test_o_error_kw
    self.assertRaisesRegex(
AssertionError: "meth_o\(\) takes no keyword arguments" does not match "meth_o() got an unexpected keyword argument 'k'"

- …and 11143 more
