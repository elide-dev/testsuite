# cpython-core — `1.3.5+20260628.3b80cf3`

- Image digest: `3583aceded8e8e4cab8248f08f245aa6859ce893f81e9de5c52097863c70b4cb`
- Suite version: `7c999be49dee7f12703e4b2e07e990544fabd40e`
- Ran: 2026-06-28T04:24:59.551Z → 2026-06-28T04:26:23.786Z

## Summary

![Pass-rate chart](./pass-rate.svg)

**Pass rate: 2207/2545 (86.72%)**

| pass | fail | error | skip | regressions | new passes |
|---:|---:|---:|---:|---:|---:|
| 2207 | 104 | 105 | 129 | 0 | 0 |

## Observed cases (2416)

- `test_list.ListTest.test_addmul` — pass
- `test_list.ListTest.test_append` — pass
- `test_bool.BoolTest.test_blocked` — pass
- `test_bool.BoolTest.test_bool_called_at_least_once` — pass
- `test_bool.BoolTest.test_bool_new` — pass
- `test_bool.BoolTest.test_boolean` — pass
- `test_bool.BoolTest.test_callable` — pass
- `test_bool.BoolTest.test_complex` — pass
- `test_bool.BoolTest.test_contains` — pass
- `test_bool.BoolTest.test_convert` — pass
- `test_bool.BoolTest.test_convert_to_bool` — pass
- `test_dict.DictTest.test_bad_key` — pass
- `test_dict.DictTest.test_bool` — pass
- `test_dict.DictTest.test_clear` — pass
- `test_dict.DictTest.test_constructor` — pass
- `test_bool.BoolTest.test_fileclosed` — error — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_bool.py", line 261, in test_fileclosed
    os.remove(os_helper.TESTFN)
FileNotFoundError: [Errno 2] No such file or directory: '@test_29_tmpæ'

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
- `test_tuple.TupleTest.test_addmul` — pass
- `test_tuple.TupleTest.test_bigrepeat` — pass
- `test_tuple.TupleTest.test_constructors` — pass
- `test_tuple.TupleTest.test_contains` — pass
- `test_tuple.TupleTest.test_contains_fake` — pass
- `test_tuple.TupleTest.test_contains_order` — pass
- `test_tuple.TupleTest.test_count` — pass
- `test_dict.DictTest.test_container_iterator` — pass
- `test_dict.DictTest.test_contains` — pass
- `test_dict.DictTest.test_copy` — pass
- `test_dict.DictTest.test_copy_fuzz` — pass
- `test_dict.DictTest.test_copy_maintains_tracking` — pass
- `test_dict.DictTest.test_copy_noncompact` — pass
- `test_dict.DictTest.test_dict_contain_use_after_free` — pass
- `test_dict.DictTest.test_dict_copy_order` — pass
- `test_dict.DictTest.test_dictitems_contains_use_after_free` — pass
- `test_dict.DictTest.test_dictview_mixed_set_operations` — pass
- `test_dict.DictTest.test_dictview_set_operations_on_items` — pass
- `test_dict.DictTest.test_dictview_set_operations_on_keys` — pass
- `test_dict.DictTest.test_empty_presized_dict_in_freelist` — pass
- `test_dict.DictTest.test_eq` — pass
- `test_dict.DictTest.test_equal_operator_modifying_operand` — pass
- `test_dict.DictTest.test_errors_in_view_containment_check` — pass
- `test_tuple.TupleTest.test_free_after_iterating` — fail — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/seq_tests.py", line 430, in test_free_after_iterating
    support.check_free_after_iterating(self, iter, self.type2test)
  File "/work/suites/cpython/Lib/test/support/__init__.py", line 1830, in check_free_after_iterating
    test.assertTrue(done)
AssertionError: False is not true

- `test_tuple.TupleTest.test_getitem` — pass
- `test_dict.DictTest.test_free_after_iterating` — fail — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_dict.py", line 1285, in test_free_after_iterating
    support.check_free_after_iterating(self, iter, dict)
  File "/work/suites/cpython/Lib/test/support/__init__.py", line 1830, in check_free_after_iterating
    test.assertTrue(done)
AssertionError: False is not true

- `test_tuple.TupleTest.test_getitem_error` — pass
- `test_dict.DictTest.test_fromkeys` — pass
- `test_dict.DictTest.test_fromkeys_operator_modifying_dict_operand` — pass
- `test_dict.DictTest.test_fromkeys_operator_modifying_set_operand` — pass
- `test_dict.DictTest.test_get` — pass
- `test_dict.DictTest.test_getitem` — pass
- `test_dict.DictTest.test_init_use_after_free` — pass
- `test_dict.DictTest.test_instance_dict_getattr_str_subclass` — pass
- `test_dict.DictTest.test_invalid_keyword_arguments` — pass
- `test_dict.DictTest.test_itemiterator_pickling` — pass
- `test_tuple.TupleTest.test_getitemoverwriteiter` — pass
- `test_tuple.TupleTest.test_getslice` — pass
- `test_dict.DictTest.test_items` — pass
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
- `test_dict.DictTest.test_items_symmetric_difference` — pass
- `test_dict.DictTest.test_iterator_pickling` — pass
- `test_dict.DictTest.test_keys` — pass
- `test_dict.DictTest.test_keys_contained` — pass
- `test_dict.DictTest.test_len` — pass
- `test_dict.DictTest.test_literal_constructor` — pass
- `test_dict.DictTest.test_merge_and_mutate` — pass
- `test_dict.DictTest.test_merge_operator` — pass
- `test_dict.DictTest.test_missing` — pass
- `test_dict.DictTest.test_mutating_iteration` — pass
- `test_dict.DictTest.test_mutating_iteration_delete` — fail — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_dict.py", line 530, in test_mutating_iteration_delete
    with self.assertRaises(RuntimeError):
AssertionError: RuntimeError not raised

- `test_dict.DictTest.test_mutating_iteration_delete_over_items` — fail — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_dict.py", line 548, in test_mutating_iteration_delete_over_items
    with self.assertRaises(RuntimeError):
AssertionError: RuntimeError not raised

- `test_dict.DictTest.test_mutating_iteration_delete_over_values` — fail — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_dict.py", line 539, in test_mutating_iteration_delete_over_values
    with self.assertRaises(RuntimeError):
AssertionError: RuntimeError not raised

- `test_dict.DictTest.test_mutating_lookup` — pass
- `test_dict.DictTest.test_object_set_item_single_instance_non_str_key` — pass
- `test_dict.DictTest.test_oob_indexing_dictiter_iternextitem` — fail — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_dict.py", line 1396, in test_oob_indexing_dictiter_iternextitem
    self.assertRaises(RuntimeError, iter_and_mutate)
AssertionError: RuntimeError not raised by iter_and_mutate

- `test_dict.DictTest.test_pop` — pass
- `test_re.ExternalTests.test_re_benchmarks` — pass
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
- `test_ast.test_ast.ASTHelpers_Test.test_increment_lineno` — pass
- `test_ast.test_ast.ASTHelpers_Test.test_increment_lineno_on_module` — pass
- `test_ast.test_ast.ASTHelpers_Test.test_iter_child_nodes` — pass
- `test_ast.test_ast.ASTHelpers_Test.test_iter_fields` — pass
- `test_ast.test_ast.ASTHelpers_Test.test_level_as_none` — pass
- `test_ast.test_ast.ASTHelpers_Test.test_literal_eval` — pass
- `test_ast.test_ast.ASTHelpers_Test.test_literal_eval_complex` — pass
- `test_ast.test_ast.ASTHelpers_Test.test_literal_eval_malformed_dict_nodes` — pass
- `test_ast.test_ast.ASTHelpers_Test.test_literal_eval_malformed_lineno` — pass
- `test_dict.DictTest.test_popitem` — pass
- `test_ast.test_ast.ASTHelpers_Test.test_literal_eval_str_int_limit` — fail — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_ast/test_ast.py", line 1301, in test_literal_eval_str_int_limit
    with self.assertRaises(SyntaxError) as err_ctx:
AssertionError: SyntaxError not raised

- `test_dict.DictTest.test_reentrant_insertion` — pass
- `test_dict.DictTest.test_repr` — pass
- `test_ast.test_ast.ASTHelpers_Test.test_literal_eval_syntax_errors` — pass
- `test_ast.test_ast.ASTHelpers_Test.test_literal_eval_trailing_ws` — pass
- `test_ast.test_ast.ASTHelpers_Test.test_multi_line_docstring_col_offset_and_lineno_issue16806` — pass
- `test_ast.test_ast.ASTHelpers_Test.test_parse` — pass
- `test_dict.DictTest.test_repr_deep` — pass
- `test_dict.DictTest.test_resize1` — pass
- `test_dict.DictTest.test_resize2` — pass
- `test_dict.DictTest.test_reverse_iterator_for_empty_dict` — pass
- `test_dict.DictTest.test_reverse_iterator_for_shared_shared_dicts` — pass
- `test_dict.DictTest.test_reversed` — pass
- `test_dict.DictTest.test_reverseitemiterator_pickling` — pass
- `test_dict.DictTest.test_reverseiterator_pickling` — pass
- `test_dict.DictTest.test_reversevaluesiterator_pickling` — pass
- `test_dict.DictTest.test_setdefault` — pass
- `test_dict.DictTest.test_setdefault_atomic` — fail — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_dict.py", line 435, in test_setdefault_atomic
    self.assertEqual(hashed1.eq_count + hashed2.eq_count, 1)
AssertionError: 2 != 1

- `test_dict.DictTest.test_setitem_atomic_at_resize` — pass
- `test_dict.DictTest.test_store_evilattr` — pass
- `test_dict.DictTest.test_str_nonstr` — pass
- `test_dict.DictTest.test_string_keys_can_track_values` — pass
- `test_dict.DictTest.test_tuple_keyerror` — pass
- `test_dict.DictTest.test_update` — pass
- `test_dict.DictTest.test_values` — pass
- `test_dict.DictTest.test_valuesiterator_pickling` — pass
- `test_dict.DictTest.test_views_mapping` — pass
- `test_descr.AAAPTypesLongInitTest.test_pytype_long_ready` — pass
- `test_descr.ClassPropertiesAndMethods.test_abstractmethods` — pass
- `test_dict.GeneralMappingTests.test_bool` — pass
- `test_dict.GeneralMappingTests.test_constructor` — pass
- `test_dict.GeneralMappingTests.test_get` — pass
- `test_dict.GeneralMappingTests.test_getitem` — pass
- `test_dict.GeneralMappingTests.test_items` — pass
- `test_descr.ClassPropertiesAndMethods.test_altmro` — pass
- `test_dict.GeneralMappingTests.test_keys` — pass
- `test_dict.GeneralMappingTests.test_len` — pass
- `test_descr.ClassPropertiesAndMethods.test_assign_slice` — pass
- `test_dict.GeneralMappingTests.test_pop` — pass
- `test_dict.GeneralMappingTests.test_popitem` — pass
- `test_descr.ClassPropertiesAndMethods.test_attr_raise_through_property` — pass
- `test_dict.GeneralMappingTests.test_read` — pass
- `test_dict.GeneralMappingTests.test_setdefault` — pass
- `test_dict.GeneralMappingTests.test_update` — pass
- `test_dict.GeneralMappingTests.test_values` — pass
- `test_dict.GeneralMappingTests.test_write` — pass
- `test_dict.SubclassMappingTests.test_bool` — pass
- `test_ast.test_ast.ASTHelpers_Test.test_parse_in_error` — pass
- `test_dict.SubclassMappingTests.test_constructor` — pass
- `test_dict.SubclassMappingTests.test_get` — pass
- `test_dict.SubclassMappingTests.test_getitem` — pass
- `test_dict.SubclassMappingTests.test_items` — pass
- `test_dict.SubclassMappingTests.test_keys` — pass
- `test_dict.SubclassMappingTests.test_len` — pass
- `test_dict.SubclassMappingTests.test_pop` — pass
- `test_dict.SubclassMappingTests.test_popitem` — pass
- `test_dict.SubclassMappingTests.test_read` — pass
- `test_dict.SubclassMappingTests.test_setdefault` — pass
- `test_dict.SubclassMappingTests.test_update` — pass
- `test_dict.SubclassMappingTests.test_values` — pass
- `test_dict.SubclassMappingTests.test_write` — pass
- `test_descr.ClassPropertiesAndMethods.test_basic_inheritance` — pass
- `test_descr.ClassPropertiesAndMethods.test_binary_operator_override` — pass
- `test_descr.ClassPropertiesAndMethods.test_bound_method_repr` — pass
- `test_descr.ClassPropertiesAndMethods.test_bpo25750` — pass
- `test_descr.ClassPropertiesAndMethods.test_buffer_inheritance` — pass
- …and 2216 more
