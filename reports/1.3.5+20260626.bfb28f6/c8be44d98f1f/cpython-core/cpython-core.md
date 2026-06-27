# cpython-core — `1.3.5+20260626.bfb28f6`

- Image digest: `c8be44d98f1f086fee340d19c5e6d66e4c88f5d593213d47783361b87bcaf657`
- Suite version: `7c999be49dee7f12703e4b2e07e990544fabd40e`
- Ran: 2026-06-27T15:34:49.977Z → 2026-06-27T15:35:13.808Z

## Summary

**Pass rate: 162/182 (89.01%)**

| pass | fail | error | skip | regressions | new passes |
|---:|---:|---:|---:|---:|---:|
| 162 | 2 | 17 | 1 | 19 | 0 |

## Observed cases (181)

- `json` — pass
- `json.encoder.JSONEncoder.encode` — pass
- `test_json.TestPyTest.test_pyjson` — pass
- `test_json.TestCTest.test_cjson` — pass
- `json` — pass
- `json.encoder.JSONEncoder.encode` — pass
- `test_json.TestPyTest.test_pyjson` — pass
- `test_json.TestCTest.test_cjson` — pass
- `test_json.test_decode.TestCDecode.test_bytes` — pass
- `test_json.test_decode.TestCDecode.test_constant_invalid_case` — pass
- `test_json.test_decode.TestCDecode.test_decimal` — pass
- `test_json.test_decode.TestCDecode.test_decoder_optimizations` — pass
- `test_json.test_decode.TestCDecode.test_empty_objects` — pass
- `test_json.test_decode.TestCDecode.test_extra_data` — pass
- `test_json.test_decode.TestCDecode.test_float` — pass
- `test_json.test_decode.TestCDecode.test_invalid_escape` — pass
- `test_json.test_decode.TestCDecode.test_invalid_input_type` — pass
- `test_json.test_decode.TestCDecode.test_keys_reuse` — pass
- `test_json.test_decode.TestCDecode.test_limit_int` — pass
- `test_json.test_decode.TestCDecode.test_negative_index` — pass
- `test_json.test_decode.TestCDecode.test_nonascii_digits_rejected` — pass
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
- `test_json.test_decode.TestPyDecode.test_nonascii_digits_rejected` — pass
- `test_json.test_decode.TestPyDecode.test_object_pairs_hook` — pass
- `test_json.test_decode.TestPyDecode.test_parse_constant` — pass
- `test_json.test_decode.TestPyDecode.test_string_with_utf8_bom` — pass
- `test_json.test_default.TestCDefault.test_default` — pass
- `test_json.test_default.TestCDefault.test_ordereddict` — pass
- `test_json.test_default.TestPyDefault.test_default` — pass
- `test_json.test_default.TestPyDefault.test_ordereddict` — pass
- `test_json.test_dump.TestCDump.test_dump` — pass
- `test_json.test_dump.TestCDump.test_dump_skipkeys` — pass
- `test_json.test_dump.TestCDump.test_dumps` — pass
- `test_json.test_dump.TestCDump.test_encode_evil_dict` — pass
- `test_json.test_dump.TestCDump.test_encode_mutated` — pass
- `test_json.test_dump.TestCDump.test_encode_truefalse` — pass
- `test_json.test_dump.TestCDump.test_large_list` — pass
- `test_json.test_dump.TestPyDump.test_dump` — pass
- `test_json.test_dump.TestPyDump.test_dump_skipkeys` — pass
- `test_json.test_dump.TestPyDump.test_dumps` — pass
- `test_json.test_dump.TestPyDump.test_encode_evil_dict` — pass
- `test_json.test_dump.TestPyDump.test_encode_mutated` — pass
- `test_json.test_dump.TestPyDump.test_encode_truefalse` — pass
- `test_json.test_encode_basestring_ascii.TestCEncodeBasestringAscii.test_encode_basestring_ascii` — pass
- `test_json.test_encode_basestring_ascii.TestCEncodeBasestringAscii.test_ordered_dict` — pass
- `test_json.test_encode_basestring_ascii.TestCEncodeBasestringAscii.test_sorted_dict` — pass
- `test_json.test_encode_basestring_ascii.TestPyEncodeBasestringAscii.test_encode_basestring_ascii` — pass
- `test_json.test_encode_basestring_ascii.TestPyEncodeBasestringAscii.test_ordered_dict` — pass
- `test_json.test_encode_basestring_ascii.TestPyEncodeBasestringAscii.test_sorted_dict` — pass
- `test_json.test_enum.TestCEnum.test_dict_keys` — pass
- `test_json.test_enum.TestCEnum.test_dict_values` — pass
- `test_json.test_enum.TestCEnum.test_floats` — pass
- `test_json.test_enum.TestCEnum.test_ints` — pass
- `test_json.test_enum.TestCEnum.test_list` — pass
- `test_json.test_enum.TestCEnum.test_weird_floats` — pass
- `test_json.test_enum.TestPyEnum.test_dict_keys` — pass
- `test_json.test_enum.TestPyEnum.test_dict_values` — pass
- `test_json.test_enum.TestPyEnum.test_floats` — pass
- `test_json.test_enum.TestPyEnum.test_ints` — pass
- `test_json.test_enum.TestPyEnum.test_list` — pass
- `test_json.test_enum.TestPyEnum.test_weird_floats` — pass
- `test_json.test_fail.TestCFail.test_extra_data` — pass
- `test_json.test_fail.TestCFail.test_failures` — pass
- `test_json.test_fail.TestCFail.test_linecol` — pass
- `test_json.test_fail.TestCFail.test_non_string_keys_dict` — pass
- `test_json.test_fail.TestCFail.test_not_serializable` — pass
- `test_json.test_fail.TestCFail.test_truncated_input` — pass
- `test_json.test_fail.TestCFail.test_unexpected_data` — pass
- `test_json.test_fail.TestPyFail.test_extra_data` — pass
- `test_json.test_fail.TestPyFail.test_failures` — pass
- `test_json.test_fail.TestPyFail.test_linecol` — pass
- `test_json.test_fail.TestPyFail.test_non_string_keys_dict` — pass
- `test_json.test_fail.TestPyFail.test_not_serializable` — pass
- `test_json.test_fail.TestPyFail.test_truncated_input` — pass
- `test_json.test_fail.TestPyFail.test_unexpected_data` — pass
- `test_json.test_float.TestCFloat.test_allow_nan` — pass
- `test_json.test_float.TestCFloat.test_floats` — pass
- `test_json.test_float.TestCFloat.test_ints` — pass
- `test_json.test_float.TestCFloat.test_out_of_range` — pass
- `test_json.test_float.TestPyFloat.test_allow_nan` — pass
- `test_json.test_float.TestPyFloat.test_floats` — pass
- `test_json.test_float.TestPyFloat.test_ints` — pass
- `test_json.test_float.TestPyFloat.test_out_of_range` — pass
- `test_json.test_indent.TestCIndent.test_indent` — pass
- `test_json.test_indent.TestCIndent.test_indent0` — pass
- `test_json.test_indent.TestPyIndent.test_indent` — pass
- `test_json.test_indent.TestPyIndent.test_indent0` — pass
- `test_json.test_pass1.TestCPass1.test_parse` — pass
- `test_json.test_pass1.TestPyPass1.test_parse` — pass
- `test_json.test_pass2.TestCPass2.test_parse` — pass
- `test_json.test_pass2.TestPyPass2.test_parse` — pass
- `test_json.test_pass3.TestCPass3.test_parse` — pass
- `test_json.test_pass3.TestPyPass3.test_parse` — pass
- `test_json.test_recursion.TestCRecursion.test_defaultrecursion` — pass
- `test_json.test_recursion.TestCRecursion.test_dictrecursion` — pass
- `test_json.test_recursion.TestCRecursion.test_endless_recursion` — pass
- `test_json.test_recursion.TestCRecursion.test_highly_nested_objects_decoding` — pass
- `test_json.test_recursion.TestCRecursion.test_highly_nested_objects_encoding` — pass
- `test_json.test_recursion.TestCRecursion.test_listrecursion` — pass
- `test_json.test_recursion.TestPyRecursion.test_defaultrecursion` — pass
- `test_json.test_recursion.TestPyRecursion.test_dictrecursion` — pass
- `test_json.test_recursion.TestPyRecursion.test_endless_recursion` — pass
- `test_json.test_recursion.TestPyRecursion.test_highly_nested_objects_decoding` — pass
- `test_json.test_recursion.TestPyRecursion.test_highly_nested_objects_encoding` — pass
- `test_json.test_recursion.TestPyRecursion.test_listrecursion` — pass
- `test_json.test_scanstring.TestCScanstring.test_bad_escapes` — pass
- `test_json.test_scanstring.TestCScanstring.test_overflow` — pass
- `test_json.test_scanstring.TestCScanstring.test_scanstring` — fail — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_json/test_scanstring.py", line 8, in test_scanstring
    self.assertEqual(
AssertionError: Tuples differ: ('z𝄠x', 6) != ('z𝄠x', 5)

First differing element 1:
6
5

- ('z𝄠x', 6)
?         ^

+ ('z𝄠x', 5)
?         ^


- `test_json.test_scanstring.TestCScanstring.test_surrogates` — fail — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_json/test_scanstring.py", line 98, in test_surrogates
    assertScan('"z\\ud834\udd20x12345"', 'z\ud834\udd20x12345')
  File "/work/suites/cpython/Lib/test/test_json/test_scanstring.py", line 91, in assertScan
    self.assertEqual(scanstring(given, 1, True),
AssertionError: Tuples differ: ('z𝄠x12345', 16) != ('z\ud834\udd20x12345', 16)

First differing element 0:
'z𝄠x12345'
'z\ud834\udd20x12345'

- ('z𝄠x12345', 16)
+ ('z\ud834\udd20x12345', 16)

- `test_json.test_scanstring.TestPyScanstring.test_bad_escapes` — pass
- `test_json.test_scanstring.TestPyScanstring.test_overflow` — pass
- `test_json.test_scanstring.TestPyScanstring.test_scanstring` — pass
- `test_json.test_scanstring.TestPyScanstring.test_surrogates` — pass
- `test_json.test_separators.TestCSeparators.test_illegal_separators` — pass
- `test_json.test_separators.TestCSeparators.test_separators` — pass
- `test_json.test_separators.TestPySeparators.test_illegal_separators` — pass
- `test_json.test_separators.TestPySeparators.test_separators` — pass
- `test_json.test_speedups.TestDecode.test_bad_bool_args` — pass
- `test_json.test_speedups.TestDecode.test_make_scanner` — pass
- `test_json.test_speedups.TestEncode.test_bad_bool_args` — pass
- `test_json.test_speedups.TestEncode.test_bad_markers_argument_to_encoder` — pass
- `test_json.test_speedups.TestEncode.test_bad_str_encoder` — pass
- `test_json.test_speedups.TestEncode.test_make_encoder` — pass
- `test_json.test_speedups.TestEncode.test_unsortable_keys` — pass
- `test_json.test_speedups.TestSpeedups.test_encode_basestring_ascii` — pass
- `test_json.test_speedups.TestSpeedups.test_scanstring` — pass
- `test_json.test_tool.TestTool.test_broken_pipe_error` — error — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_json/test_tool.py", line 226, in test_broken_pipe_error
    proc = subprocess.Popen(cmd,
           ^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/subprocess.py", line 1026, in __init__
    self._execute_child(args, executable, preexec_fn, close_fds,
  File "/work/suites/cpython/Lib/subprocess.py", line 1885, in _execute_child
    self.pid = _fork_exec(
               ^^^^^^^^^^^
PermissionError: [Errno 1] Operation not permitted

- `test_json.test_tool.TestTool.test_compact` — error — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_json/test_tool.py", line 197, in test_compact
    process = subprocess.run(args, input=input_, capture_output=True, text=True, check=True)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/subprocess.py", line 548, in run
    with Popen(*popenargs, **kwargs) as process:
         ^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/subprocess.py", line 1026, in __init__
    self._execute_child(args, executable, preexec_fn, close_fds,
  File "/work/suites/cpython/Lib/subprocess.py", line 1885, in _execute_child
    self.pid = _fork_exec(
               ^^^^^^^^^^^
PermissionError: [Errno 1] Operation not permitted

- `test_json.test_tool.TestTool.test_ensure_ascii_default` — error — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_json/test_tool.py", line 216, in test_ensure_ascii_default
    assert_python_ok('-m', 'json.tool', infile, outfile)
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 166, in assert_python_ok
    return _assert_python(True, *args, **env_vars)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 149, in _assert_python
    res, cmd_line = run_python_until_end(*args, **env_vars)
                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
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

- `test_json.test_tool.TestTool.test_ensure_ascii_default` — error — FileNotFoundError: [Errno 2] No such file or directory: '@test_26_tmpæ.out'

- `test_json.test_tool.TestTool.test_help_flag` — error — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_json/test_tool.py", line 151, in test_help_flag
    rc, out, err = assert_python_ok('-m', 'json.tool', '-h')
                   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 166, in assert_python_ok
    return _assert_python(True, *args, **env_vars)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 149, in _assert_python
    res, cmd_line = run_python_until_end(*args, **env_vars)
                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
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

- `test_json.test_tool.TestTool.test_indent` — error — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_json/test_tool.py", line 173, in test_indent
    process = subprocess.run(args, input=input_, capture_output=True, text=True, check=True)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/subprocess.py", line 548, in run
    with Popen(*popenargs, **kwargs) as process:
         ^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/subprocess.py", line 1026, in __init__
    self._execute_child(args, executable, preexec_fn, close_fds,
  File "/work/suites/cpython/Lib/subprocess.py", line 1885, in _execute_child
    self.pid = _fork_exec(
               ^^^^^^^^^^^
PermissionError: [Errno 1] Operation not permitted

- `test_json.test_tool.TestTool.test_infile_outfile` — error — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_json/test_tool.py", line 127, in test_infile_outfile
    rc, out, err = assert_python_ok('-m', 'json.tool', infile, outfile)
                   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 166, in assert_python_ok
    return _assert_python(True, *args, **env_vars)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 149, in _assert_python
    res, cmd_line = run_python_until_end(*args, **env_vars)
                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
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

- `test_json.test_tool.TestTool.test_infile_stdout` — error — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_json/test_tool.py", line 104, in test_infile_stdout
    rc, out, err = assert_python_ok('-m', 'json.tool', infile)
                   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 166, in assert_python_ok
    return _assert_python(True, *args, **env_vars)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 149, in _assert_python
    res, cmd_line = run_python_until_end(*args, **env_vars)
                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
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

- `test_json.test_tool.TestTool.test_jsonlines` — error — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_json/test_tool.py", line 146, in test_jsonlines
    process = subprocess.run(args, input=self.jsonlines_raw, capture_output=True, text=True, check=True)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/subprocess.py", line 548, in run
    with Popen(*popenargs, **kwargs) as process:
         ^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/subprocess.py", line 1026, in __init__
    self._execute_child(args, executable, preexec_fn, close_fds,
  File "/work/suites/cpython/Lib/subprocess.py", line 1885, in _execute_child
    self.pid = _fork_exec(
               ^^^^^^^^^^^
PermissionError: [Errno 1] Operation not permitted

- `test_json.test_tool.TestTool.test_no_ensure_ascii_flag` — error — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_json/test_tool.py", line 205, in test_no_ensure_ascii_flag
    assert_python_ok('-m', 'json.tool', '--no-ensure-ascii', infile, outfile)
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 166, in assert_python_ok
    return _assert_python(True, *args, **env_vars)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 149, in _assert_python
    res, cmd_line = run_python_until_end(*args, **env_vars)
                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
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

- `test_json.test_tool.TestTool.test_no_ensure_ascii_flag` — error — FileNotFoundError: [Errno 2] No such file or directory: '@test_26_tmpæ.out'

- `test_json.test_tool.TestTool.test_no_indent` — error — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_json/test_tool.py", line 181, in test_no_indent
    process = subprocess.run(args, input=input_, capture_output=True, text=True, check=True)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/subprocess.py", line 548, in run
    with Popen(*popenargs, **kwargs) as process:
         ^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/subprocess.py", line 1026, in __init__
    self._execute_child(args, executable, preexec_fn, close_fds,
  File "/work/suites/cpython/Lib/subprocess.py", line 1885, in _execute_child
    self.pid = _fork_exec(
               ^^^^^^^^^^^
PermissionError: [Errno 1] Operation not permitted

- `test_json.test_tool.TestTool.test_non_ascii_infile` — error — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_json/test_tool.py", line 118, in test_non_ascii_infile
    rc, out, err = assert_python_ok('-m', 'json.tool', infile)
                   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 166, in assert_python_ok
    return _assert_python(True, *args, **env_vars)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 149, in _assert_python
    res, cmd_line = run_python_until_end(*args, **env_vars)
                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
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

- `test_json.test_tool.TestTool.test_sort_keys_flag` — error — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_json/test_tool.py", line 158, in test_sort_keys_flag
    rc, out, err = assert_python_ok('-m', 'json.tool', '--sort-keys', infile)
                   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 166, in assert_python_ok
    return _assert_python(True, *args, **env_vars)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 149, in _assert_python
    res, cmd_line = run_python_until_end(*args, **env_vars)
                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
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

- `test_json.test_tool.TestTool.test_stdin_stdout` — error — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_json/test_tool.py", line 91, in test_stdin_stdout
    process = subprocess.run(args, input=self.data, capture_output=True, text=True, check=True)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/subprocess.py", line 548, in run
    with Popen(*popenargs, **kwargs) as process:
         ^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/subprocess.py", line 1026, in __init__
    self._execute_child(args, executable, preexec_fn, close_fds,
  File "/work/suites/cpython/Lib/subprocess.py", line 1885, in _execute_child
    self.pid = _fork_exec(
               ^^^^^^^^^^^
PermissionError: [Errno 1] Operation not permitted

- `test_json.test_tool.TestTool.test_tab` — error — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_json/test_tool.py", line 189, in test_tab
    process = subprocess.run(args, input=input_, capture_output=True, text=True, check=True)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/subprocess.py", line 548, in run
    with Popen(*popenargs, **kwargs) as process:
         ^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/subprocess.py", line 1026, in __init__
    self._execute_child(args, executable, preexec_fn, close_fds,
  File "/work/suites/cpython/Lib/subprocess.py", line 1885, in _execute_child
    self.pid = _fork_exec(
               ^^^^^^^^^^^
PermissionError: [Errno 1] Operation not permitted

- `test_json.test_tool.TestTool.test_writing_in_place` — error — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_json/test_tool.py", line 137, in test_writing_in_place
    rc, out, err = assert_python_ok('-m', 'json.tool', infile, infile)
                   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 166, in assert_python_ok
    return _assert_python(True, *args, **env_vars)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 149, in _assert_python
    res, cmd_line = run_python_until_end(*args, **env_vars)
                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
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

- `test_json.test_unicode.TestCUnicode.test_big_unicode_decode` — pass
- `test_json.test_unicode.TestCUnicode.test_big_unicode_encode` — pass
- `test_json.test_unicode.TestCUnicode.test_bytes_decode` — pass
- `test_json.test_unicode.TestCUnicode.test_bytes_encode` — pass
- `test_json.test_unicode.TestCUnicode.test_encoding3` — pass
- `test_json.test_unicode.TestCUnicode.test_encoding4` — pass
- `test_json.test_unicode.TestCUnicode.test_encoding5` — pass
- `test_json.test_unicode.TestCUnicode.test_encoding6` — pass
- `test_json.test_unicode.TestCUnicode.test_encoding7` — pass
- `test_json.test_unicode.TestCUnicode.test_object_pairs_hook_with_unicode` — pass
- `test_json.test_unicode.TestCUnicode.test_unicode_decode` — pass
- `test_json.test_unicode.TestCUnicode.test_unicode_preservation` — pass
- `test_json.test_unicode.TestPyUnicode.test_big_unicode_decode` — pass
- `test_json.test_unicode.TestPyUnicode.test_big_unicode_encode` — pass
- `test_json.test_unicode.TestPyUnicode.test_bytes_decode` — pass
- `test_json.test_unicode.TestPyUnicode.test_bytes_encode` — pass
- `test_json.test_unicode.TestPyUnicode.test_encoding3` — pass
- `test_json.test_unicode.TestPyUnicode.test_encoding4` — pass
- `test_json.test_unicode.TestPyUnicode.test_encoding5` — pass
- `test_json.test_unicode.TestPyUnicode.test_encoding6` — pass
- `test_json.test_unicode.TestPyUnicode.test_encoding7` — pass
- `test_json.test_unicode.TestPyUnicode.test_object_pairs_hook_with_unicode` — pass
- `test_json.test_unicode.TestPyUnicode.test_unicode_decode` — pass
- `test_json.test_unicode.TestPyUnicode.test_unicode_preservation` — pass

## ❌ Regressions (19)

- `test_json.test_scanstring.TestCScanstring.test_scanstring` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_json/test_scanstring.py", line 8, in test_scanstring
    self.assertEqual(
AssertionError: Tuples differ: ('z𝄠x', 6) != ('z𝄠x', 5)

First differing element 1:
6
5

- ('z𝄠x', 6)
?         ^

+ ('z𝄠x', 5)
?         ^


- `test_json.test_scanstring.TestCScanstring.test_surrogates` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_json/test_scanstring.py", line 98, in test_surrogates
    assertScan('"z\\ud834\udd20x12345"', 'z\ud834\udd20x12345')
  File "/work/suites/cpython/Lib/test/test_json/test_scanstring.py", line 91, in assertScan
    self.assertEqual(scanstring(given, 1, True),
AssertionError: Tuples differ: ('z𝄠x12345', 16) != ('z\ud834\udd20x12345', 16)

First differing element 0:
'z𝄠x12345'
'z\ud834\udd20x12345'

- ('z𝄠x12345', 16)
+ ('z\ud834\udd20x12345', 16)

- `test_json.test_tool.TestTool.test_broken_pipe_error` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_json/test_tool.py", line 226, in test_broken_pipe_error
    proc = subprocess.Popen(cmd,
           ^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/subprocess.py", line 1026, in __init__
    self._execute_child(args, executable, preexec_fn, close_fds,
  File "/work/suites/cpython/Lib/subprocess.py", line 1885, in _execute_child
    self.pid = _fork_exec(
               ^^^^^^^^^^^
PermissionError: [Errno 1] Operation not permitted

- `test_json.test_tool.TestTool.test_compact` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_json/test_tool.py", line 197, in test_compact
    process = subprocess.run(args, input=input_, capture_output=True, text=True, check=True)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/subprocess.py", line 548, in run
    with Popen(*popenargs, **kwargs) as process:
         ^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/subprocess.py", line 1026, in __init__
    self._execute_child(args, executable, preexec_fn, close_fds,
  File "/work/suites/cpython/Lib/subprocess.py", line 1885, in _execute_child
    self.pid = _fork_exec(
               ^^^^^^^^^^^
PermissionError: [Errno 1] Operation not permitted

- `test_json.test_tool.TestTool.test_ensure_ascii_default` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_json/test_tool.py", line 216, in test_ensure_ascii_default
    assert_python_ok('-m', 'json.tool', infile, outfile)
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 166, in assert_python_ok
    return _assert_python(True, *args, **env_vars)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 149, in _assert_python
    res, cmd_line = run_python_until_end(*args, **env_vars)
                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
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

- `test_json.test_tool.TestTool.test_ensure_ascii_default` — FileNotFoundError: [Errno 2] No such file or directory: '@test_26_tmpæ.out'

- `test_json.test_tool.TestTool.test_help_flag` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_json/test_tool.py", line 151, in test_help_flag
    rc, out, err = assert_python_ok('-m', 'json.tool', '-h')
                   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 166, in assert_python_ok
    return _assert_python(True, *args, **env_vars)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 149, in _assert_python
    res, cmd_line = run_python_until_end(*args, **env_vars)
                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
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

- `test_json.test_tool.TestTool.test_indent` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_json/test_tool.py", line 173, in test_indent
    process = subprocess.run(args, input=input_, capture_output=True, text=True, check=True)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/subprocess.py", line 548, in run
    with Popen(*popenargs, **kwargs) as process:
         ^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/subprocess.py", line 1026, in __init__
    self._execute_child(args, executable, preexec_fn, close_fds,
  File "/work/suites/cpython/Lib/subprocess.py", line 1885, in _execute_child
    self.pid = _fork_exec(
               ^^^^^^^^^^^
PermissionError: [Errno 1] Operation not permitted

- `test_json.test_tool.TestTool.test_infile_outfile` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_json/test_tool.py", line 127, in test_infile_outfile
    rc, out, err = assert_python_ok('-m', 'json.tool', infile, outfile)
                   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 166, in assert_python_ok
    return _assert_python(True, *args, **env_vars)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 149, in _assert_python
    res, cmd_line = run_python_until_end(*args, **env_vars)
                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
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

- `test_json.test_tool.TestTool.test_infile_stdout` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_json/test_tool.py", line 104, in test_infile_stdout
    rc, out, err = assert_python_ok('-m', 'json.tool', infile)
                   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 166, in assert_python_ok
    return _assert_python(True, *args, **env_vars)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 149, in _assert_python
    res, cmd_line = run_python_until_end(*args, **env_vars)
                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
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

- `test_json.test_tool.TestTool.test_jsonlines` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_json/test_tool.py", line 146, in test_jsonlines
    process = subprocess.run(args, input=self.jsonlines_raw, capture_output=True, text=True, check=True)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/subprocess.py", line 548, in run
    with Popen(*popenargs, **kwargs) as process:
         ^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/subprocess.py", line 1026, in __init__
    self._execute_child(args, executable, preexec_fn, close_fds,
  File "/work/suites/cpython/Lib/subprocess.py", line 1885, in _execute_child
    self.pid = _fork_exec(
               ^^^^^^^^^^^
PermissionError: [Errno 1] Operation not permitted

- `test_json.test_tool.TestTool.test_no_ensure_ascii_flag` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_json/test_tool.py", line 205, in test_no_ensure_ascii_flag
    assert_python_ok('-m', 'json.tool', '--no-ensure-ascii', infile, outfile)
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 166, in assert_python_ok
    return _assert_python(True, *args, **env_vars)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 149, in _assert_python
    res, cmd_line = run_python_until_end(*args, **env_vars)
                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
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

- `test_json.test_tool.TestTool.test_no_ensure_ascii_flag` — FileNotFoundError: [Errno 2] No such file or directory: '@test_26_tmpæ.out'

- `test_json.test_tool.TestTool.test_no_indent` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_json/test_tool.py", line 181, in test_no_indent
    process = subprocess.run(args, input=input_, capture_output=True, text=True, check=True)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/subprocess.py", line 548, in run
    with Popen(*popenargs, **kwargs) as process:
         ^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/subprocess.py", line 1026, in __init__
    self._execute_child(args, executable, preexec_fn, close_fds,
  File "/work/suites/cpython/Lib/subprocess.py", line 1885, in _execute_child
    self.pid = _fork_exec(
               ^^^^^^^^^^^
PermissionError: [Errno 1] Operation not permitted

- `test_json.test_tool.TestTool.test_non_ascii_infile` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_json/test_tool.py", line 118, in test_non_ascii_infile
    rc, out, err = assert_python_ok('-m', 'json.tool', infile)
                   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 166, in assert_python_ok
    return _assert_python(True, *args, **env_vars)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 149, in _assert_python
    res, cmd_line = run_python_until_end(*args, **env_vars)
                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
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

- `test_json.test_tool.TestTool.test_sort_keys_flag` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_json/test_tool.py", line 158, in test_sort_keys_flag
    rc, out, err = assert_python_ok('-m', 'json.tool', '--sort-keys', infile)
                   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 166, in assert_python_ok
    return _assert_python(True, *args, **env_vars)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 149, in _assert_python
    res, cmd_line = run_python_until_end(*args, **env_vars)
                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
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

- `test_json.test_tool.TestTool.test_stdin_stdout` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_json/test_tool.py", line 91, in test_stdin_stdout
    process = subprocess.run(args, input=self.data, capture_output=True, text=True, check=True)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/subprocess.py", line 548, in run
    with Popen(*popenargs, **kwargs) as process:
         ^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/subprocess.py", line 1026, in __init__
    self._execute_child(args, executable, preexec_fn, close_fds,
  File "/work/suites/cpython/Lib/subprocess.py", line 1885, in _execute_child
    self.pid = _fork_exec(
               ^^^^^^^^^^^
PermissionError: [Errno 1] Operation not permitted

- `test_json.test_tool.TestTool.test_tab` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_json/test_tool.py", line 189, in test_tab
    process = subprocess.run(args, input=input_, capture_output=True, text=True, check=True)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/subprocess.py", line 548, in run
    with Popen(*popenargs, **kwargs) as process:
         ^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/subprocess.py", line 1026, in __init__
    self._execute_child(args, executable, preexec_fn, close_fds,
  File "/work/suites/cpython/Lib/subprocess.py", line 1885, in _execute_child
    self.pid = _fork_exec(
               ^^^^^^^^^^^
PermissionError: [Errno 1] Operation not permitted

- `test_json.test_tool.TestTool.test_writing_in_place` — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_json/test_tool.py", line 137, in test_writing_in_place
    rc, out, err = assert_python_ok('-m', 'json.tool', infile, infile)
                   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 166, in assert_python_ok
    return _assert_python(True, *args, **env_vars)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 149, in _assert_python
    res, cmd_line = run_python_until_end(*args, **env_vars)
                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
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

