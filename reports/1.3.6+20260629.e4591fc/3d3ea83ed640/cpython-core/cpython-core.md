# cpython-core — `1.3.6+20260629.e4591fc`

- Image digest: `3d3ea83ed6403be11d119eb0234efa699809d81a801986659790996c18306a06`
- Suite version: `7c999be49dee7f12703e4b2e07e990544fabd40e`
- Ran: 2026-06-29T17:17:11.614Z → 2026-06-29T17:18:45.193Z

## Summary

![Pass-rate chart](./pass-rate.svg)

**Pass rate: 1795/1972 (91.02%)**

| pass | fail | error | skip | regressions | new passes |
|---:|---:|---:|---:|---:|---:|
| 1795 | 70 | 27 | 80 | 0 | 0 |

## Observed cases (1892)

- `test_list.ListTest.test_addmul` — pass
- `test_list.ListTest.test_append` — pass
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
- `test_tuple.TupleTest.test_constructors` — pass
- `test_tuple.TupleTest.test_contains` — pass
- `test_tuple.TupleTest.test_contains_fake` — pass
- `test_tuple.TupleTest.test_contains_order` — pass
- `test_tuple.TupleTest.test_count` — pass
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
- `test_class.ClassTests.testBadTypeReturned` — pass
- `test_class.ClassTests.testBinaryOps` — pass
- `test_class.ClassTests.testClassWithExtCall` — pass
- `test_class.ClassTests.testConstructorErrorMessages` — pass
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
- `test_class.ClassTests.testHasAttrString` — pass
- `test_class.ClassTests.testHashComparisonOfMethods` — pass
- `test_class.ClassTests.testHashStuff` — pass
- `test_class.ClassTests.testInit` — pass
- `test_class.ClassTests.testListAndDictOps` — pass
- `test_class.ClassTests.testMisc` — pass
- `test_class.ClassTests.testObjectAttributeAccessErrorMessages` — fail — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_class.py", line 698, in testObjectAttributeAccessErrorMessages
    with self.assertRaisesRegex(AttributeError, error_msg):
AssertionError: "'A' object has no attribute 'x'" does not match "A has no attribute 'x'"

- `test_class.ClassTests.testPredefinedAttrs` — pass
- `test_class.ClassTests.testSFBug532646` — pass
- `test_class.ClassTests.testSetattrNonStringName` — pass
- `test_class.ClassTests.testSetattrWrapperNameIntern` — pass
- `test_class.ClassTests.testTypeAttributeAccessErrorMessages` — fail — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_class.py", line 683, in testTypeAttributeAccessErrorMessages
    with self.assertRaisesRegex(AttributeError, error_msg):
AssertionError: "type object 'A' has no attribute 'x'" does not match "'A' object has no attribute 'x'"

- `test_re.ExternalTests.test_re_benchmarks` — pass
- `test_class.ClassTests.testUnaryOps` — pass
- `test_tuple.TupleTest.test_repr_large` — pass
- `test_tuple.TupleTest.test_reversed_pickle` — pass
- `test_tuple.TupleTest.test_subscript` — pass
- `test_tuple.TupleTest.test_truth` — pass
- `test_tuple.TupleTest.test_tupleresizebug` — pass
- `test_ast.test_ast.ASTHelpers_Test.test_bad_integer` — pass
- `test_ast.test_ast.ASTHelpers_Test.test_copy_location` — pass
- `test_ast.test_ast.ASTHelpers_Test.test_dump` — pass
- `test_ast.test_ast.ASTHelpers_Test.test_dump_incomplete` — pass
- `test_ast.test_ast.ASTHelpers_Test.test_dump_indent` — pass
- `test_ast.test_ast.ASTHelpers_Test.test_elif_stmt_start_position` — pass
- `test_ast.test_ast.ASTHelpers_Test.test_elif_stmt_start_position_with_else` — pass
- `test_ast.test_ast.ASTHelpers_Test.test_fix_missing_locations` — pass
- `test_ast.test_ast.ASTHelpers_Test.test_get_docstring` — pass
- `test_ast.test_ast.ASTHelpers_Test.test_get_docstring_none` — pass
- `test_patma.TestCompiler.test_refleaks` — pass
- `test_ast.test_ast.ASTHelpers_Test.test_increment_lineno` — pass
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
- `test_ast.test_ast.ASTHelpers_Test.test_increment_lineno_on_module` — pass
- `test_patma.TestPatma.test_patma_013` — pass
- `test_patma.TestPatma.test_patma_014` — pass
- `test_patma.TestPatma.test_patma_015` — pass
- `test_patma.TestPatma.test_patma_016` — pass
- `test_patma.TestPatma.test_patma_017` — pass
- `test_patma.TestPatma.test_patma_018` — pass
- `test_patma.TestPatma.test_patma_019` — pass
- `test_patma.TestPatma.test_patma_020` — pass
- `test_ast.test_ast.ASTHelpers_Test.test_iter_child_nodes` — pass
- `test_patma.TestPatma.test_patma_021` — pass
- `test_patma.TestPatma.test_patma_022` — pass
- `test_patma.TestPatma.test_patma_023` — pass
- `test_patma.TestPatma.test_patma_024` — pass
- `test_patma.TestPatma.test_patma_025` — pass
- `test_patma.TestPatma.test_patma_026` — pass
- `test_patma.TestPatma.test_patma_027` — pass
- `test_patma.TestPatma.test_patma_028` — pass
- `test_patma.TestPatma.test_patma_029` — pass
- `test_ast.test_ast.ASTHelpers_Test.test_iter_fields` — pass
- `test_patma.TestPatma.test_patma_030` — pass
- `test_patma.TestPatma.test_patma_031` — pass
- `test_patma.TestPatma.test_patma_032` — pass
- `test_patma.TestPatma.test_patma_033` — pass
- `test_patma.TestPatma.test_patma_034` — pass
- `test_patma.TestPatma.test_patma_035` — pass
- `test_patma.TestPatma.test_patma_036` — pass
- `test_patma.TestPatma.test_patma_037` — pass
- `test_patma.TestPatma.test_patma_038` — pass
- `test_patma.TestPatma.test_patma_039` — pass
- `test_patma.TestPatma.test_patma_040` — pass
- `test_patma.TestPatma.test_patma_041` — pass
- `test_patma.TestPatma.test_patma_042` — pass
- `test_patma.TestPatma.test_patma_043` — pass
- `test_patma.TestPatma.test_patma_044` — pass
- `test_patma.TestPatma.test_patma_045` — pass
- `test_patma.TestPatma.test_patma_046` — pass
- `test_patma.TestPatma.test_patma_047` — pass
- `test_patma.TestPatma.test_patma_048` — pass
- `test_patma.TestPatma.test_patma_049` — pass
- `test_patma.TestPatma.test_patma_050` — pass
- `test_patma.TestPatma.test_patma_051` — pass
- `test_patma.TestPatma.test_patma_052` — pass
- `test_ast.test_ast.ASTHelpers_Test.test_level_as_none` — pass
- `test_patma.TestPatma.test_patma_053` — pass
- `test_patma.TestPatma.test_patma_054` — pass
- `test_patma.TestPatma.test_patma_055` — pass
- `test_patma.TestPatma.test_patma_056` — pass
- `test_patma.TestPatma.test_patma_057` — pass
- `test_patma.TestPatma.test_patma_058` — pass
- `test_patma.TestPatma.test_patma_059` — pass
- `test_patma.TestPatma.test_patma_060` — pass
- `test_patma.TestPatma.test_patma_061` — pass
- `test_patma.TestPatma.test_patma_062` — pass
- `test_patma.TestPatma.test_patma_063` — pass
- `test_patma.TestPatma.test_patma_064` — pass
- `test_patma.TestPatma.test_patma_065` — pass
- `test_patma.TestPatma.test_patma_066` — pass
- `test_patma.TestPatma.test_patma_067` — pass
- `test_patma.TestPatma.test_patma_068` — pass
- `test_patma.TestPatma.test_patma_069` — pass
- `test_patma.TestPatma.test_patma_070` — pass
- `test_patma.TestPatma.test_patma_071` — pass
- `test_patma.TestPatma.test_patma_072` — pass
- `test_patma.TestPatma.test_patma_073` — pass
- `test_patma.TestPatma.test_patma_074` — pass
- `test_patma.TestPatma.test_patma_075` — pass
- `test_patma.TestPatma.test_patma_076` — pass
- `test_patma.TestPatma.test_patma_077` — pass
- `test_patma.TestPatma.test_patma_078` — pass
- `test_patma.TestPatma.test_patma_079` — pass
- `test_patma.TestPatma.test_patma_080` — pass
- `test_ast.test_ast.ASTHelpers_Test.test_literal_eval` — pass
- `test_patma.TestPatma.test_patma_081` — pass
- `test_patma.TestPatma.test_patma_082` — pass
- `test_patma.TestPatma.test_patma_083` — pass
- `test_patma.TestPatma.test_patma_084` — pass
- `test_patma.TestPatma.test_patma_085` — pass
- `test_patma.TestPatma.test_patma_086` — pass
- `test_patma.TestPatma.test_patma_087` — pass
- `test_patma.TestPatma.test_patma_088` — pass
- `test_patma.TestPatma.test_patma_089` — pass
- `test_patma.TestPatma.test_patma_090` — pass
- `test_patma.TestPatma.test_patma_091` — pass
- `test_patma.TestPatma.test_patma_092` — pass
- …and 1692 more
