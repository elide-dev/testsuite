# Impact-ordered failures

## By root-cause signature

### 1 × `AttributeError(<str>)`

distinct messages:
- `AttributeError("module '_asyncio' has no attribute 'Future'")`
example test: `test_builtin`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in cleanup ast.AST._fields = old_value ^^^^^^^^^^^^^^^ TypeError: cannot set <str> attribute of immutab`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_ast/test_ast.py", line 74, in cleanup
    ast.AST._fields = old_value
    ^^^^^^^^^^^^^^^
TypeError: cannot set '_fields' attribute of immutable type 'ast.AST'`
example test: `test_ast.test_ast.AST_Tests.test_AST_fields_NULL_check`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_AST_fields_NULL_check del ast.AST._fields ^^^^^^^^^^^^^^^ TypeError: cannot set <str> attribute`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_ast/test_ast.py", line 77, in test_AST_fields_NULL_check
    del ast.AST._fields
        ^^^^^^^^^^^^^^^
TypeError: cannot set '_fields' attribute of immutable type 'ast.AST'`
example test: `test_ast.test_ast.AST_Tests.test_AST_fields_NULL_check`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_broken_pipe_error proc = subprocess.Popen(cmd, ^^^^^^^^^^^^^^^^^^^^^ File <str>, line <n>, in _`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_json/test_tool.py", line 226, in test_broken_pipe_error
    proc = subprocess.Popen(cmd,
           ^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/subprocess.py", line 1026, in __init__
    self._execute_child(args`
example test: `test_json.test_tool.TestTool.test_broken_pipe_error`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_bug_40736 with self.assertRaisesRegex(TypeError, <str>): AssertionError: <str> does not match <`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_re.py", line 2405, in test_bug_40736
    with self.assertRaisesRegex(TypeError, "got 'int'"):
AssertionError: "got 'int'" does not match "object of type 'int' has no len()"`
example test: `test_re.ReTests.test_bug_40736`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_cli_file_input res, _ = script_helper.run_python_until_end(<str>, <str>, filename) ^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_ast/test_ast.py", line 2794, in test_cli_file_input
    res, _ = script_helper.run_python_until_end("-m", "ast", filename)
             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython`
example test: `test_ast.test_ast.ASTMainTests.test_cli_file_input`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_compact process = subprocess.run(args, input=input_, capture_output=True, text=True, check=True`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_json/test_tool.py", line 197, in test_compact
    process = subprocess.run(args, input=input_, capture_output=True, text=True, check=True)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`
example test: `test_json.test_tool.TestTool.test_compact`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_ensure_ascii_default infile = self._create_infile(<str>) ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ File `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_json/test_tool.py", line 213, in test_ensure_ascii_default
    infile = self._create_infile('{"key":"💩"}')
             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_json/test_tool.py", line `
example test: `test_json.test_tool.TestTool.test_ensure_ascii_default`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_exception_groups_feature_version with self.assertRaises(SyntaxError): AssertionError: SyntaxErr`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_ast/test_ast.py", line 845, in test_exception_groups_feature_version
    with self.assertRaises(SyntaxError):
AssertionError: SyntaxError not raised`
example test: `test_ast.test_ast.AST_Tests.test_exception_groups_feature_version`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_help_flag rc, out, err = assert_python_ok(<str>, <str>, <str>) ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_json/test_tool.py", line 151, in test_help_flag
    rc, out, err = assert_python_ok('-m', 'json.tool', '-h')
                   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/support/script`
example test: `test_json.test_tool.TestTool.test_help_flag`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_indent process = subprocess.run(args, input=input_, capture_output=True, text=True, check=True)`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_json/test_tool.py", line 173, in test_indent
    process = subprocess.run(args, input=input_, capture_output=True, text=True, check=True)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`
example test: `test_json.test_tool.TestTool.test_indent`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_infile_outfile infile = self._create_infile() ^^^^^^^^^^^^^^^^^^^^^ File <str>, line <n>, in _c`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_json/test_tool.py", line 125, in test_infile_outfile
    infile = self._create_infile()
             ^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_json/test_tool.py", line 97, in _create_infile
    with `
example test: `test_json.test_tool.TestTool.test_infile_outfile`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_infile_stdout infile = self._create_infile() ^^^^^^^^^^^^^^^^^^^^^ File <str>, line <n>, in _cr`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_json/test_tool.py", line 103, in test_infile_stdout
    infile = self._create_infile()
             ^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_json/test_tool.py", line 97, in _create_infile
    with o`
example test: `test_json.test_tool.TestTool.test_infile_stdout`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_jsonlines process = subprocess.run(args, input=<loc>onlines_raw, capture_output=True, text=True`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_json/test_tool.py", line 146, in test_jsonlines
    process = subprocess.run(args, input=self.jsonlines_raw, capture_output=True, text=True, check=True)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`
example test: `test_json.test_tool.TestTool.test_jsonlines`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_keep_buffer with self.assertRaises(BufferError): AssertionError: BufferError not raised`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_re.py", line 71, in test_keep_buffer
    with self.assertRaises(BufferError):
AssertionError: BufferError not raised`
example test: `test_re.ReTests.test_keep_buffer`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_literal_eval_str_int_limit with self.assertRaises(SyntaxError) as err_ctx: AssertionError: Synt`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_ast/test_ast.py", line 1301, in test_literal_eval_str_int_limit
    with self.assertRaises(SyntaxError) as err_ctx:
AssertionError: SyntaxError not raised`
example test: `test_ast.test_ast.ASTHelpers_Test.test_literal_eval_str_int_limit`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_locale_caching self.check_en_US_iso88591() File <str>, line <n>, in check_en_US_iso88591 self.a`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_re.py", line 2130, in test_locale_caching
    self.check_en_US_iso88591()
  File "/work/suites/cpython/Lib/test/test_re.py", line 2139, in check_en_US_iso88591
    self.assertTrue(re.match(b'\xc5', b'\xe5', re.L|re.I))
Ass`
example test: `test_re.ReTests.test_locale_caching`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_locale_compiled self.assertTrue(p.match(b<str>)) AssertionError: None is not true`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_re.py", line 2175, in test_locale_compiled
    self.assertTrue(p.match(b'\xe5\xe5'))
AssertionError: None is not true`
example test: `test_re.ReTests.test_locale_compiled`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_no_ensure_ascii_flag infile = self._create_infile(<str>) ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ File `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_json/test_tool.py", line 202, in test_no_ensure_ascii_flag
    infile = self._create_infile('{"key":"💩"}')
             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_json/test_tool.py", line `
example test: `test_json.test_tool.TestTool.test_no_ensure_ascii_flag`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_no_indent process = subprocess.run(args, input=input_, capture_output=True, text=True, check=Tr`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_json/test_tool.py", line 181, in test_no_indent
    process = subprocess.run(args, input=input_, capture_output=True, text=True, check=True)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`
example test: `test_json.test_tool.TestTool.test_no_indent`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_non_ascii_infile infile = self._create_infile(data) ^^^^^^^^^^^^^^^^^^^^^^^^^ File <str>, line `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_json/test_tool.py", line 117, in test_non_ascii_infile
    infile = self._create_infile(data)
             ^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_json/test_tool.py", line 97, in _create_infile`
example test: `test_json.test_tool.TestTool.test_non_ascii_infile`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_possible_set_operations with self.assertWarnsRegex(FutureWarning, <str>) as w: AssertionError: `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_re.py", line 1216, in test_possible_set_operations
    with self.assertWarnsRegex(FutureWarning, 'Possible set difference') as w:
AssertionError: FutureWarning not triggered`
example test: `test_re.ReTests.test_possible_set_operations`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_regression_gh94675 p.start() File <str>, line <n>, in start self._popen = self._Popen(self) ^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_re.py", line 2621, in test_regression_gh94675
    p.start()
  File "/work/suites/cpython/Lib/multiprocessing/process.py", line 121, in start
    self._popen = self._Popen(self)
                  ^^^^^^^^^^^^^^^^^
  File "/`
example test: `test_re.ReTests.test_regression_gh94675`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_repeat_minmax_overflow self.assertRaises(OverflowError, re.compile, r<str> % <n>**<n>) Assertio`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_re.py", line 1987, in test_repeat_minmax_overflow
    self.assertRaises(OverflowError, re.compile, r".{%d}" % 2**128)
AssertionError: OverflowError not raised by compile`
example test: `test_re.ReTests.test_repeat_minmax_overflow`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_scanstring self.assertEqual( AssertionError: Tuples differ: (<str>, <n>) != (<str>, <n>) First `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_json/test_scanstring.py", line 8, in test_scanstring
    self.assertEqual(
AssertionError: Tuples differ: ('z𝄠x', 6) != ('z𝄠x', 5)

First differing element 1:
6
5

- ('z𝄠x', 6)
?         ^

+ ('z𝄠x', 5)
?         ^`
example test: `test_json.test_scanstring.TestCScanstring.test_scanstring`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_sort_keys_flag infile = self._create_infile() ^^^^^^^^^^^^^^^^^^^^^ File <str>, line <n>, in _c`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_json/test_tool.py", line 157, in test_sort_keys_flag
    infile = self._create_infile()
             ^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_json/test_tool.py", line 97, in _create_infile
    with `
example test: `test_json.test_tool.TestTool.test_sort_keys_flag`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_source_segment_padded self.assertEqual( AssertionError: <str> != <str> def fun(self) -> None: -`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_ast/test_ast.py", line 2462, in test_source_segment_padded
    self.assertEqual(
AssertionError: '    def fun(self) -> None:\n        "ЖЖЖ' != '    def fun(self) -> None:\n        "ЖЖЖЖЖ"'
      def fun(self) -> None:
-   `
example test: `test_ast.test_ast.EndPositionTests.test_source_segment_padded`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_stdin_stdout process = subprocess.run(args, input=self.data, capture_output=True, text=True, ch`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_json/test_tool.py", line 91, in test_stdin_stdout
    process = subprocess.run(args, input=self.data, capture_output=True, text=True, check=True)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`
example test: `test_json.test_tool.TestTool.test_stdin_stdout`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_surrogates assertScan(<str>, <str>) File <str>, line <n>, in assertScan self.assertEqual(scanst`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_json/test_scanstring.py", line 98, in test_surrogates
    assertScan('"z\\ud834\udd20x12345"', 'z\ud834\udd20x12345')
  File "/work/suites/cpython/Lib/test/test_json/test_scanstring.py", line 91, in assertScan
    self.ass`
example test: `test_json.test_scanstring.TestCScanstring.test_surrogates`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_symbolic_groups_errors self.checkPatternError(b<str>, File <str>, line <n>, in checkPatternErro`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_re.py", line 287, in test_symbolic_groups_errors
    self.checkPatternError(b'(?P<\xc2\xb5>x)',
  File "/work/suites/cpython/Lib/test/test_re.py", line 50, in checkPatternError
    with self.assertRaises(re.error) as cm:
A`
example test: `test_re.ReTests.test_symbolic_groups_errors`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_tab process = subprocess.run(args, input=input_, capture_output=True, text=True, check=True) ^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_json/test_tool.py", line 189, in test_tab
    process = subprocess.run(args, input=input_, capture_output=True, text=True, check=True)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`
example test: `test_json.test_tool.TestTool.test_tab`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_writing_in_place infile = self._create_infile() ^^^^^^^^^^^^^^^^^^^^^ File <str>, line <n>, in `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_json/test_tool.py", line 136, in test_writing_in_place
    infile = self._create_infile()
             ^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_json/test_tool.py", line 97, in _create_infile
    wit`
example test: `test_json.test_tool.TestTool.test_writing_in_place`
