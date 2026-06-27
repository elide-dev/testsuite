# cpython-core — `1.3.5+20260626.bfb28f6`

- Image digest: `c8be44d98f1f086fee340d19c5e6d66e4c88f5d593213d47783361b87bcaf657`
- Suite version: `7c999be49dee7f12703e4b2e07e990544fabd40e`
- Ran: 2026-06-27T19:00:54.989Z → 2026-06-27T19:01:31.950Z

## Summary

![Pass-rate chart](./pass-rate.svg)

**Pass rate: 458/1017 (45.03%)**

| pass | fail | error | skip | regressions | new passes |
|---:|---:|---:|---:|---:|---:|
| 458 | 12 | 20 | 527 | 0 | 0 |

## Observed cases (490)

- `test_re.ExternalTests.test_re_benchmarks` — pass
- `test_builtin` — error — AttributeError("module '_asyncio' has no attribute 'Future'")
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
- `test_ast.test_ast.ASTHelpers_Test.test_literal_eval_str_int_limit` — fail — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_ast/test_ast.py", line 1301, in test_literal_eval_str_int_limit
    with self.assertRaises(SyntaxError) as err_ctx:
AssertionError: SyntaxError not raised

- `test_ast.test_ast.ASTHelpers_Test.test_literal_eval_syntax_errors` — pass
- `test_ast.test_ast.ASTHelpers_Test.test_literal_eval_trailing_ws` — pass
- `test_ast.test_ast.ASTHelpers_Test.test_multi_line_docstring_col_offset_and_lineno_issue16806` — pass
- `test_ast.test_ast.ASTHelpers_Test.test_parse` — pass
- `test_ast.test_ast.ASTHelpers_Test.test_parse_in_error` — pass
- `test_ast.test_ast.ASTHelpers_Test.test_recursion_direct` — pass
- `test_ast.test_ast.ASTHelpers_Test.test_recursion_indirect` — pass
- `test_ast.test_ast.ASTHelpers_Test.test_starred_expr_end_position_within_call` — pass
- `test_ast.test_ast.ASTMainTests.test_cli_file_input` — error — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_ast/test_ast.py", line 2794, in test_cli_file_input
    res, _ = script_helper.run_python_until_end("-m", "ast", filename)
             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 96, in run_python_until_end
    env_required = interpreter_requires_environment()
                   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 52, in interpreter_requires_environment
    subprocess.check_call([sys.executable, '-E',
  File "/work/suites/cpython/Lib/subprocess.py", line 408, in check_call
    retcode = call(*popenargs, **kwargs)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/subprocess.py", line 389, in call
    with Popen(*popenargs, **kwargs) as p:
         ^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/subprocess.py", line 1026, in __init__
    self._execute_child(args, executable, preexec_fn, close_fds,
  File "/work/suites/cpython/Lib/subprocess.py", line 1885, in _execute_child
    self.pid = _fork_exec(
               ^^^^^^^^^^^
PermissionError: [Errno 1] Operation not permitted

- `test_ast.test_ast.ASTValidatorTests.test_assert` — pass
- `test_ast.test_ast.ASTValidatorTests.test_assign` — pass
- `test_ast.test_ast.ASTValidatorTests.test_attribute` — pass
- `test_ast.test_ast.ASTValidatorTests.test_augassign` — pass
- `test_ast.test_ast.ASTValidatorTests.test_boolop` — pass
- `test_ast.test_ast.ASTValidatorTests.test_call` — pass
- `test_ast.test_ast.ASTValidatorTests.test_classdef` — pass
- `test_ast.test_ast.ASTValidatorTests.test_compare` — pass
- `test_ast.test_ast.ASTValidatorTests.test_delete` — pass
- `test_ast.test_ast.ASTValidatorTests.test_dict` — pass
- `test_ast.test_ast.ASTValidatorTests.test_dictcomp` — pass
- `test_ast.test_ast.ASTValidatorTests.test_expr` — pass
- `test_ast.test_ast.ASTValidatorTests.test_for` — pass
- `test_ast.test_ast.ASTValidatorTests.test_funcdef` — pass
- `test_ast.test_ast.ASTValidatorTests.test_funcdef_pattern_matching` — pass
- `test_ast.test_ast.ASTValidatorTests.test_generatorexp` — pass
- `test_ast.test_ast.ASTValidatorTests.test_global` — pass
- `test_ast.test_ast.ASTValidatorTests.test_if` — pass
- `test_ast.test_ast.ASTValidatorTests.test_ifexp` — pass
- `test_ast.test_ast.ASTValidatorTests.test_import` — pass
- `test_ast.test_ast.ASTValidatorTests.test_importfrom` — pass
- `test_ast.test_ast.ASTValidatorTests.test_lambda` — pass
- `test_ast.test_ast.ASTValidatorTests.test_list` — pass
- `test_ast.test_ast.ASTValidatorTests.test_listcomp` — pass
- `test_ast.test_ast.ASTValidatorTests.test_match_validation_pattern` — pass
- `test_ast.test_ast.ASTValidatorTests.test_module` — pass
- `test_ast.test_ast.ASTValidatorTests.test_nameconstant` — pass
- `test_ast.test_ast.ASTValidatorTests.test_nonlocal` — pass
- `test_ast.test_ast.ASTValidatorTests.test_num` — pass
- `test_ast.test_ast.ASTValidatorTests.test_raise` — pass
- `test_ast.test_ast.ASTValidatorTests.test_set` — pass
- `test_ast.test_ast.ASTValidatorTests.test_setcomp` — pass
- `test_ast.test_ast.ASTValidatorTests.test_starred` — pass
- `test_re.ExternalTests.test_re_tests` — pass
- `test_re.ImplementationTest.test_deprecated_modules` — pass
- `test_re.ImplementationTest.test_overlap_table` — pass
- `test_re.ImplementationTest.test_signedness` — pass
- `test_re.PatternReprTests.test_bytes` — pass
- `test_re.PatternReprTests.test_flags_repr` — pass
- `test_re.PatternReprTests.test_inline_flags` — pass
- `test_re.PatternReprTests.test_locale` — pass
- `test_re.PatternReprTests.test_long_pattern` — pass
- `test_re.PatternReprTests.test_multiple_flags` — pass
- `test_re.PatternReprTests.test_quotes` — pass
- `test_re.PatternReprTests.test_single_flag` — pass
- `test_re.PatternReprTests.test_unicode_flag` — pass
- `test_re.PatternReprTests.test_unknown_flags` — pass
- `test_re.PatternReprTests.test_without_flags` — pass
- `test_re.ReTests.test_ASSERT_NOT_mark_bug` — pass
- `test_re.ReTests.test_MARK_PUSH_macro_bug` — pass
- `test_re.ReTests.test_MIN_REPEAT_ONE_mark_bug` — pass
- `test_re.ReTests.test_MIN_UNTIL_mark_bug` — pass
- `test_re.ReTests.test_REPEAT_ONE_mark_bug` — pass
- `test_re.ReTests.test_anyall` — pass
- `test_re.ReTests.test_ascii_and_unicode_flag` — pass
- `test_re.ReTests.test_atomic_grouping` — pass
- `test_re.ReTests.test_backref_group_name_in_exception` — pass
- `test_re.ReTests.test_basic_re_sub` — pass
- `test_re.ReTests.test_big_codesize` — pass
- `test_re.ReTests.test_bigcharset` — pass
- `test_re.ReTests.test_branching` — pass
- `test_re.ReTests.test_bug_113254` — pass
- `test_re.ReTests.test_bug_114660` — pass
- `test_re.ReTests.test_bug_117612` — pass
- `test_re.ReTests.test_bug_1661` — pass
- `test_re.ReTests.test_bug_16688` — pass
- `test_re.ReTests.test_bug_20998` — pass
- `test_re.ReTests.test_bug_2537` — pass
- `test_re.ReTests.test_bug_29444` — pass
- `test_re.ReTests.test_bug_34294` — pass
- `test_re.ReTests.test_bug_3629` — pass
- `test_re.ReTests.test_bug_40736` — fail — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_re.py", line 2405, in test_bug_40736
    with self.assertRaisesRegex(TypeError, "got 'int'"):
AssertionError: "got 'int'" does not match "object of type 'int' has no len()"

- `test_re.ReTests.test_bug_418626` — pass
- `test_re.ReTests.test_bug_448951` — pass
- `test_re.ReTests.test_bug_449000` — pass
- `test_re.ReTests.test_bug_449964` — pass
- `test_re.ReTests.test_bug_527371` — pass
- `test_re.ReTests.test_bug_581080` — pass
- `test_re.ReTests.test_bug_612074` — pass
- `test_re.ReTests.test_bug_6509` — pass
- `test_re.ReTests.test_bug_6561` — pass
- `test_re.ReTests.test_bug_725106` — pass
- `test_re.ReTests.test_bug_725149` — pass
- `test_re.ReTests.test_bug_764548` — pass
- `test_re.ReTests.test_bug_817234` — pass
- `test_re.ReTests.test_bug_926075` — pass
- `test_re.ReTests.test_bug_931848` — pass
- `test_re.ReTests.test_bug_gh101955` — pass
- `test_re.ReTests.test_bug_gh106052` — pass
- `test_re.ReTests.test_bug_gh91616` — pass
- `test_re.ReTests.test_bytes_str_mixing` — pass
- `test_re.ReTests.test_category` — pass
- `test_re.ReTests.test_character_set_any` — pass
- `test_re.ReTests.test_character_set_errors` — pass
- `test_re.ReTests.test_character_set_none` — pass
- `test_re.ReTests.test_comments` — pass
- `test_re.ReTests.test_compile` — pass
- `test_re.ReTests.test_constants` — pass
- `test_re.ReTests.test_copying` — pass
- `test_re.ReTests.test_dollar_matches_twice` — pass
- `test_re.ReTests.test_empty_array` — pass
- `test_re.ReTests.test_enum` — pass
- `test_re.ReTests.test_error` — pass
- `test_re.ReTests.test_expand` — pass
- `test_re.ReTests.test_fail` — pass
- `test_re.ReTests.test_findall_atomic_grouping` — pass
- `test_re.ReTests.test_findall_possessive_quantifiers` — pass
- `test_re.ReTests.test_finditer` — pass
- `test_re.ReTests.test_flags` — pass
- `test_re.ReTests.test_fullmatch_atomic_grouping` — pass
- `test_re.ReTests.test_fullmatch_possessive_quantifiers` — pass
- `test_re.ReTests.test_getattr` — pass
- `test_re.ReTests.test_group` — pass
- `test_re.ReTests.test_group_name_in_exception` — pass
- `test_re.ReTests.test_groupdict` — pass
- `test_re.ReTests.test_ignore_case` — pass
- `test_re.ReTests.test_ignore_case_range` — pass
- `test_re.ReTests.test_ignore_case_set` — pass
- `test_re.ReTests.test_ignore_spaces` — pass
- `test_re.ReTests.test_inline_flags` — pass
- `test_re.ReTests.test_issue17998` — pass
- `test_re.ReTests.test_keep_buffer` — fail — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_re.py", line 71, in test_keep_buffer
    with self.assertRaises(BufferError):
AssertionError: BufferError not raised

- `test_re.ReTests.test_keyword_parameters` — pass
- `test_re.ReTests.test_large_search` — pass
- `test_re.ReTests.test_large_subn` — pass
- `test_re.ReTests.test_locale_caching` — fail — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_re.py", line 2130, in test_locale_caching
    self.check_en_US_iso88591()
  File "/work/suites/cpython/Lib/test/test_re.py", line 2139, in check_en_US_iso88591
    self.assertTrue(re.match(b'\xc5', b'\xe5', re.L|re.I))
AssertionError: None is not true

- `test_re.ReTests.test_locale_compiled` — fail — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_re.py", line 2175, in test_locale_compiled
    self.assertTrue(p.match(b'\xe5\xe5'))
AssertionError: None is not true

- `test_re.ReTests.test_locale_flag` — pass
- `json` — pass
- `json.encoder.JSONEncoder.encode` — pass
- `test_json.TestPyTest.test_pyjson` — pass
- `test_json.TestCTest.test_cjson` — pass
- `json` — pass
- `json.encoder.JSONEncoder.encode` — pass
- `test_re.ReTests.test_lookahead` — pass
- `test_json.TestPyTest.test_pyjson` — pass
- `test_json.TestCTest.test_cjson` — pass
- `test_json.test_decode.TestCDecode.test_bytes` — pass
- `test_re.ReTests.test_lookbehind` — pass
- `test_json.test_decode.TestCDecode.test_constant_invalid_case` — pass
- `test_json.test_decode.TestCDecode.test_decimal` — pass
- `test_json.test_decode.TestCDecode.test_decoder_optimizations` — pass
- `test_json.test_decode.TestCDecode.test_empty_objects` — pass
- `test_json.test_decode.TestCDecode.test_extra_data` — pass
- `test_re.ReTests.test_match_getitem` — pass
- `test_json.test_decode.TestCDecode.test_float` — pass
- `test_json.test_decode.TestCDecode.test_invalid_escape` — pass
- `test_json.test_decode.TestCDecode.test_invalid_input_type` — pass
- `test_json.test_decode.TestCDecode.test_keys_reuse` — pass
- `test_re.ReTests.test_match_repr` — pass
- `test_json.test_decode.TestCDecode.test_limit_int` — pass
- `test_json.test_decode.TestCDecode.test_negative_index` — pass
- `test_json.test_decode.TestCDecode.test_nonascii_digits_rejected` — pass
- `test_re.ReTests.test_misc_errors` — pass
- `test_json.test_decode.TestCDecode.test_object_pairs_hook` — pass
- `test_json.test_decode.TestCDecode.test_parse_constant` — pass
- `test_json.test_decode.TestCDecode.test_string_with_utf8_bom` — pass
- `test_json.test_decode.TestPyDecode.test_bytes` — pass
- `test_json.test_decode.TestPyDecode.test_constant_invalid_case` — pass
- `test_json.test_decode.TestPyDecode.test_decimal` — pass
- `test_json.test_decode.TestPyDecode.test_decoder_optimizations` — pass
- `test_json.test_decode.TestPyDecode.test_empty_objects` — pass
- `test_json.test_decode.TestPyDecode.test_extra_data` — pass
- `test_json.test_decode.TestPyDecode.test_float` — pass
- `test_json.test_decode.TestPyDecode.test_invalid_escape` — pass
- `test_json.test_decode.TestPyDecode.test_invalid_input_type` — pass
- `test_json.test_decode.TestPyDecode.test_keys_reuse` — pass
- `test_json.test_decode.TestPyDecode.test_limit_int` — pass
- `test_json.test_decode.TestPyDecode.test_negative_index` — pass
- …and 290 more
