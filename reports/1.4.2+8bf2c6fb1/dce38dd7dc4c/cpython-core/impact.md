# Impact-ordered failures

## By root-cause signature

### 4 × `Traceback (most recent call last): File <str>, line <n>, in test_free_after_iterating support.check_free_after_iterating(self, iter, self.thetype) File <str>, l`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_set.py", line 356, in test_free_after_iterating
    support.check_free_after_iterating(self, iter, self.thetype)
  File "/work/suites/cpython/Lib/test/support/__init__.py", line 1830, in check_free_after_iterating
    test`
example test: `test_set.TestFrozenSet.test_free_after_iterating`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in runTest raise self.failureException(self.format_failure(new.getvalue())) AssertionError: Failed doct`

distinct messages:
- `Traceback (most recent call last):
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/doctest.py", line 2257, in runTest
    raise self.failureException(self.format_failure(new.getvalue()))
AssertionError: Failed doctest test for test.test_generators.__test__.coroutine
  File "/work/`
- `Traceback (most recent call last):
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/doctest.py", line 2257, in runTest
    raise self.failureException(self.format_failure(new.getvalue()))
AssertionError: Failed doctest test for test.test_generators.__test__.refleaks
  File "/work/s`
example test: `test_generators.__test__.coroutine`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_capitalize_nonascii self.checkequal(<str>, File <str>, line <n>, in checkequal self.assertEqual`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/string_tests.py", line 1135, in test_capitalize_nonascii
    self.checkequal('\u019b\u1d00\u1d86\u0221\u1fb7',
  File "/work/suites/cpython/Lib/test/string_tests.py", line 66, in checkequal
    self.assertEqual(
AssertionError:`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/string_tests.py", line 1135, in test_capitalize_nonascii
    self.checkequal('\u019b\u1d00\u1d86\u0221\u1fb7',
  File "/work/suites/cpython/Lib/test/test_userstring.py", line 25, in checkequal
    self.assertEqual(
AssertionErr`
example test: `test_unicode.UnicodeTest.test_capitalize_nonascii`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_incrementalencoder self.assertEqual(output, self.expected) AssertionError: b<str> != b<str>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_multibytecodec.py", line 387, in test_incrementalencoder
    self.assertEqual(output, self.expected)
AssertionError: b'~{AD~{AD' != b'~{ADAD'`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_multibytecodec.py", line 387, in test_incrementalencoder
    self.assertEqual(output, self.expected)
AssertionError: b'\x1b$B@$\x1b(B\x1b$B@$\x1b(B' != b'\x1b$B@$@$'`
example test: `test_multibytecodec.TestHZStateful.test_incrementalencoder`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_incrementalencoder_final self.assertEqual(output, self.expected_reset) AssertionError: b<str> !`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_multibytecodec.py", line 397, in test_incrementalencoder_final
    self.assertEqual(output, self.expected_reset)
AssertionError: b'~{AD~{AD' != b'~{ADAD~}'`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_multibytecodec.py", line 397, in test_incrementalencoder_final
    self.assertEqual(output, self.expected_reset)
AssertionError: b'\x1b$B@$\x1b(B\x1b$B@$\x1b(B' != b'\x1b$B@$@$\x1b(B'`
example test: `test_multibytecodec.TestHZStateful.test_incrementalencoder_final`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_int_max_str_digits_is_per_interpreter self.assertEqual(support.run_in_subinterp(code), <n>, ^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_int.py", line 814, in test_int_max_str_digits_is_per_interpreter
    self.assertEqual(support.run_in_subinterp(code), 0,
                     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/support/__i`
example test: `test_int.IntStrDigitLimitsTests.test_int_max_str_digits_is_per_interpreter`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_keywords_in_subclass u = subclass_with_init([<n>, <n>], newarg=<n>) ^^^^^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_tuple.py", line 57, in test_keywords_in_subclass
    u = subclass_with_init([1, 2], newarg=3)
        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
TypeError: tuple() got an unexpected keyword argument 'newarg'`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_set.py", line 774, in test_keywords_in_subclass
    u = subclass_with_init([1, 2], newarg=3)
        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
TypeError: frozenset() got an unexpected keyword argument 'newarg'`
example test: `test_tuple.TupleTest.test_keywords_in_subclass`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_sample_with_counts sample(<str>, k=<n>, counts=[<n>, <n>, <n>]), ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_random.py", line 236, in test_sample_with_counts
    sample('abc', k=0, counts=[0, 0, 0]),
    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/random.py", line 424, i`
example test: `test_random.MersenneTwister_TestBasicOps.test_sample_with_counts`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in wrapper return fxn(*args, **kwargs) ^^^^^^^^^^^^^^^^^^^^ File <str>, line <n>, in test_absolute_path`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 32, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 79, in test_absolute_path
    self.assertFalse(os.path.exi`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 22, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 79, in test_absolute_path
    self.assertFalse(os.path.exi`
example test: `test_py_compile.PyCompileTestsWithSourceEpoch.test_absolute_path`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in wrapper return fxn(*args, **kwargs) ^^^^^^^^^^^^^^^^^^^^ File <str>, line <n>, in test_bad_coding se`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 32, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 139, in test_bad_coding
    self.assertIsNone(py_compile.c`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 22, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 139, in test_bad_coding
    self.assertIsNone(py_compile.c`
example test: `test_py_compile.PyCompileTestsWithSourceEpoch.test_bad_coding`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in wrapper return fxn(*args, **kwargs) ^^^^^^^^^^^^^^^^^^^^ File <str>, line <n>, in test_cache_path py`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 32, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 102, in test_cache_path
    py_compile.compile(self.source`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 22, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 102, in test_cache_path
    py_compile.compile(self.source`
example test: `test_py_compile.PyCompileTestsWithSourceEpoch.test_cache_path`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in wrapper return fxn(*args, **kwargs) ^^^^^^^^^^^^^^^^^^^^ File <str>, line <n>, in test_cwd self.asse`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 32, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 110, in test_cwd
    self.assertFalse(os.path.exists(self.`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 22, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 110, in test_cwd
    self.assertFalse(os.path.exists(self.`
example test: `test_py_compile.PyCompileTestsWithSourceEpoch.test_cwd`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in wrapper return fxn(*args, **kwargs) ^^^^^^^^^^^^^^^^^^^^ File <str>, line <n>, in test_invalidation_`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 32, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 182, in test_invalidation_mode
    py_compile.compile(
  F`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 22, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 182, in test_invalidation_mode
    py_compile.compile(
  F`
example test: `test_py_compile.PyCompileTestsWithSourceEpoch.test_invalidation_mode`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in wrapper return fxn(*args, **kwargs) ^^^^^^^^^^^^^^^^^^^^ File <str>, line <n>, in test_optimization_`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 32, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 179, in test_optimization_path
    self.assertIn('opt-2', `
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 22, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 179, in test_optimization_path
    self.assertIn('opt-2', `
example test: `test_py_compile.PyCompileTestsWithSourceEpoch.test_optimization_path`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in wrapper return fxn(*args, **kwargs) ^^^^^^^^^^^^^^^^^^^^ File <str>, line <n>, in test_quiet self.as`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 32, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 204, in test_quiet
    self.assertIsNone(py_compile.compil`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 22, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 204, in test_quiet
    self.assertIsNone(py_compile.compil`
example test: `test_py_compile.PyCompileTestsWithSourceEpoch.test_quiet`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in wrapper return fxn(*args, **kwargs) ^^^^^^^^^^^^^^^^^^^^ File <str>, line <n>, in test_relative_path`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 32, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 116, in test_relative_path
    self.assertFalse(os.path.ex`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 22, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 116, in test_relative_path
    self.assertFalse(os.path.ex`
example test: `test_py_compile.PyCompileTestsWithSourceEpoch.test_relative_path`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in wrapper return fxn(*args, **kwargs) ^^^^^^^^^^^^^^^^^^^^ File <str>, line <n>, in test_source_date_e`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 32, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 146, in test_source_date_epoch
    self.assertFalse(os.pat`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 22, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 146, in test_source_date_epoch
    self.assertFalse(os.pat`
example test: `test_py_compile.PyCompileTestsWithSourceEpoch.test_source_date_epoch`

### 2 × `TypeError: str.find() takes from <n> to <n> positional arguments but <n> were given During handling of the above exception, another exception occurred: Tracebac`

distinct messages:
- `TypeError: str.find() takes from 2 to 4 positional arguments but 5 were given

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/string_tests.py", line 1508, in test_find_etc_raise_correct_error_messages
    `
example test: `test_unicode.UnicodeTest.test_find_etc_raise_correct_error_messages`

### 1 × `AttributeError(<str>)`

distinct messages:
- `AttributeError("'NoneType' object has no attribute 'MethInstance'")`
example test: `test_call`

### 1 × `File <str>, line <n> [[(__x:=<n>) for _ in range(<n>)] for __x in range(<n>)] ^^^^^^ SyntaxError: assignment expression cannot rebind comprehension iteration va`

distinct messages:
- `File "<string>", line 3
    [[(__x:=2) for _ in range(2)] for __x in range(2)]
       ^^^^^^
SyntaxError: assignment expression cannot rebind comprehension iteration variable '%s'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/s`
example test: `test_named_expressions.NamedExpressionInvalidTest.test_named_expression_invalid_mangled_class_variables`

### 1 × `ModuleNotFoundError: No module named <str> During handling of the above exception, another exception occurred: Traceback (most recent call last): File <str>, li`

distinct messages:
- `ModuleNotFoundError: No module named 'foo'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_builtin.py", line 836, in test_exec_builtins_mapping_import
    self.assertRaisesRegex(ImportError, "__import`
example test: `test_builtin.BuiltinTest.test_exec_builtins_mapping_import`

### 1 × `ModuleNotFoundError(<str>)`

distinct messages:
- `ModuleNotFoundError("No module named '_testinternalcapi'")`
example test: `test_types`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in _check_error compile(code, filename, mode) File <str>, line <n> a = ( <n>, <n>, <n> SyntaxError: inv`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_syntax.py", line 2034, in _check_error
    compile(code, filename, mode)
  File "<testcase>", line 1
    a = ( 1, 2, 3
                
SyntaxError: invalid syntax. Perhaps you forgot a comma?

During handling of the above`
example test: `test_syntax.SyntaxTestCase.test_error_parenthesis`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in _check_error compile(code, filename, mode) File <str>, line <n> a = <n> \ <n> ^ SyntaxError: unexpec`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_syntax.py", line 2034, in _check_error
    compile(code, filename, mode)
  File "<testcase>", line 1
    a = 3 \ 4
            ^
SyntaxError: unexpected character after line continuation character

During handling of the a`
example test: `test_syntax.SyntaxTestCase.test_invalid_line_continuation_error_position`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in _check_error compile(code, filename, mode) File <str>, line <n> call( ^ SyntaxError: keyword argumen`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_syntax.py", line 2034, in _check_error
    compile(code, filename, mode)
  File "<testcase>", line 1
    call(
    ^
SyntaxError: keyword argument repeated: a

During handling of the above exception, another exception occu`
example test: `test_syntax.SyntaxTestCase.test_multiline_compiler_error_points_to_the_end`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in _check_error compile(code, filename, mode) File <str>, line <n> print(<str>) ^ SyntaxError: invalid`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_syntax.py", line 2034, in _check_error
    compile(code, filename, mode)
  File "<testcase>", line 1
    print("Hello")
         ^
SyntaxError: invalid syntax

During handling of the above exception, another exception occ`
example test: `test_syntax.SyntaxTestCase.test_invisible_characters`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_absolute_imports self._do_test(absolute_import_test) File <str>, line <n>, in _do_test mf.impor`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_modulefinder.py", line 363, in test_absolute_imports
    self._do_test(absolute_import_test)
  File "/work/suites/cpython/Lib/test/test_modulefinder.py", line 331, in _do_test
    mf.import_hook(import_this)
  File "/opt/e`
example test: `test_modulefinder.ModuleFinderTest.test_absolute_imports`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_add self.assertTrue(len(self.fs) == <n>) AssertionError: False is not true`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_weakset.py", line 229, in test_add
    self.assertTrue(len(self.fs) == 1)
AssertionError: False is not true`
example test: `test_weakset.TestWeakSet.test_add`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_aliases with self.assertRaises(KeyError): ^^^^^^^^^^^^^^^^^^^^^^^^^^^ AssertionError: KeyError `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_ucn.py", line 142, in test_aliases
    with self.assertRaises(KeyError):
         ^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: KeyError not raised`
example test: `test_ucn.UnicodeNamesTest.test_aliases`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_bad_syntax self.assertIn(b<str>, stderr) AssertionError: b<str> not found in b<str>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 275, in test_bad_syntax
    self.assertIn(b'SyntaxError', stderr)
AssertionError: b'SyntaxError' not found in b'TypeError: lstat: path should be string, bytes or os.PathLike, not NoneType\n    at _run_`
example test: `test_py_compile.PyCompileCLITestCase.test_bad_syntax`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_bad_syntax_with_quiet self.assertEqual(stderr, b<str>) AssertionError: b<str> != b<str>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 284, in test_bad_syntax_with_quiet
    self.assertEqual(stderr, b'')
AssertionError: b'TypeError: lstat: path should be string, [141 chars]1)\n' != b''`
example test: `test_py_compile.PyCompileCLITestCase.test_bad_syntax_with_quiet`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_barry_as_bdfl compile(code.format(<str>), <str>, <str>, File <str>, line <n> <n> <> <n> ^^ Synt`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_flufl.py", line 9, in test_barry_as_bdfl
    compile(code.format('<>'), '<BDFL test>', 'exec',
  File "<BDFL test>", line 2
    2 <> 3
      ^^
SyntaxError: invalid syntax`
example test: `test_flufl.FLUFLTests.test_barry_as_bdfl`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_barry_as_bdfl_look_ma_with_no_compiler_flags compile(code.format(<str>), <str>, <str>) File <st`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_flufl.py", line 41, in test_barry_as_bdfl_look_ma_with_no_compiler_flags
    compile(code.format('<>'), '<BDFL test>', 'exec')
  File "<BDFL test>", line 1
    from __future__ import barry_as_FLUFL;2 <> 3
                 `
example test: `test_flufl.FLUFLTests.test_barry_as_bdfl_look_ma_with_no_compiler_flags`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_batched list(batched(<str>, <n>)) # n is zero ^^^^^^^^^^^^^^^^^^^^^ TypeError: n must be at lea`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_itertools.py", line 201, in test_batched
    list(batched('ABCDEFG', 0))             # n is zero
         ^^^^^^^^^^^^^^^^^^^^^
TypeError: n must be at least one`
example test: `test_itertools.TestBasicOps.test_batched`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_bidirectional self.assertEqual(self.db.bidirectional(<str>), <str>) AssertionError: <str> != <s`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_unicodedata.py", line 155, in test_bidirectional
    self.assertEqual(self.db.bidirectional('\uFFFE'), '')
AssertionError: 'BN' != ''
- BN`
example test: `test_unicodedata.UnicodeFunctionsTest.test_bidirectional`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_Buffer self.assertIsInstance(sample(b<str>), Buffer) AssertionError: b<str> is not an instance `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_collections.py", line 1965, in test_Buffer
    self.assertIsInstance(sample(b"x"), Buffer)
AssertionError: b'x' is not an instance of <class 'collections.abc.Buffer'>`
example test: `test_collections.TestCollectionABCs.test_Buffer`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_bytecode self._do_test(bytecode_test) File <str>, line <n>, in _do_test mf.import_hook(import_t`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_modulefinder.py", line 391, in test_bytecode
    self._do_test(bytecode_test)
  File "/work/suites/cpython/Lib/test/test_modulefinder.py", line 331, in _do_test
    mf.import_hook(import_this)
  File "/opt/elide/lib/resour`
example test: `test_modulefinder.ModuleFinderTest.test_bytecode`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_carloverre_multi_inherit_invalid self.fail(<str>) AssertionError: setattr through indirect base`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_descr.py", line 4436, in test_carloverre_multi_inherit_invalid
    self.fail("setattr through indirect base types should be rejected")
AssertionError: setattr through indirect base types should be rejected`
example test: `test_descr.ClassPropertiesAndMethods.test_carloverre_multi_inherit_invalid`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_check_encoding_errors self.assertEqual(proc.rc, <n>, proc) AssertionError: <n> != <n> : _Python`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_unicode.py", line 2699, in test_check_encoding_errors
    self.assertEqual(proc.rc, 10, proc)
AssertionError: 22 != 10 : _PythonRunResult(rc=22, out=b'', err=b'')`
example test: `test_unicode.UnicodeTest.test_check_encoding_errors`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_clear_dict_in_ref_cycle self.assertEqual(destroyed, [<n>]) AssertionError: Lists differ: [] != `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_module/__init__.py", line 119, in test_clear_dict_in_ref_cycle
    self.assertEqual(destroyed, [1])
AssertionError: Lists differ: [] != [1]

Second list contains 1 additional elements.
First extra element 0:
1

- []
+ [1]
`
example test: `test_module.ModuleTests.test_clear_dict_in_ref_cycle`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_codecs_charmap self.assertEqual(str(s, encoding).encode(encoding), s) AssertionError: b<str>()*`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_unicode.py", line 2366, in test_codecs_charmap
    self.assertEqual(str(s, encoding).encode(encoding), s)
AssertionError: b'\x0[119 chars] !"#$\x15&\'()*+,-./0123456789:;<=>?@ABCDEFGHI[54 chars]\x7f' != b'\x0[119 chars] !"`
example test: `test_unicode.UnicodeTest.test_codecs_charmap`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_coding_default_utf8 self._do_test(coding_default_utf8_test) File <str>, line <n>, in _do_test m`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_modulefinder.py", line 417, in test_coding_default_utf8
    self._do_test(coding_default_utf8_test)
  File "/work/suites/cpython/Lib/test/test_modulefinder.py", line 331, in _do_test
    mf.import_hook(import_this)
  File `
example test: `test_modulefinder.ModuleFinderTest.test_coding_default_utf8`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_coding_explicit_cp1252 self._do_test(coding_explicit_cp1252_test) File <str>, line <n>, in _do_`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_modulefinder.py", line 423, in test_coding_explicit_cp1252
    self._do_test(coding_explicit_cp1252_test)
  File "/work/suites/cpython/Lib/test/test_modulefinder.py", line 331, in _do_test
    mf.import_hook(import_this)
 `
example test: `test_modulefinder.ModuleFinderTest.test_coding_explicit_cp1252`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_coding_explicit_utf8 self._do_test(coding_explicit_utf8_test) File <str>, line <n>, in _do_test`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_modulefinder.py", line 420, in test_coding_explicit_utf8
    self._do_test(coding_explicit_utf8_test)
  File "/work/suites/cpython/Lib/test/test_modulefinder.py", line 331, in _do_test
    mf.import_hook(import_this)
  Fil`
example test: `test_modulefinder.ModuleFinderTest.test_coding_explicit_utf8`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_comparison_is_literal check(<str>, <str>tuple\<str>) File <str>, line <n>, in check self.check_`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_grammar.py", line 1490, in test_comparison_is_literal
    check('x is not (1, 2)', '"is not" with \'tuple\' literal')
  File "/work/suites/cpython/Lib/test/test_grammar.py", line 1483, in check
    self.check_syntax_warnin`
example test: `test_grammar.GrammarTests.test_comparison_is_literal`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_compile self.assertEqual(rv, tuple(expected)) AssertionError: Tuples differ: (True, <str>, Fals`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_builtin.py", line 381, in test_compile
    self.assertEqual(rv, tuple(expected))
AssertionError: Tuples differ: (True, 'doc', False, False) != (False, 'doc', False, False)

First differing element 0:
True
False

- (True, '`
example test: `test_builtin.BuiltinTest.test_compile`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_compile_top_level_await co = compile(source, ^^^^^^^^^^^^^^^ File <str>, line <n> a = await asy`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_builtin.py", line 445, in test_compile_top_level_await
    co = compile(source,
         ^^^^^^^^^^^^^^^
  File "?", line 1
    a = await asyncio.sleep(0, result=1)
    ^
SyntaxError: 'await' outside function`
example test: `test_builtin.BuiltinTest.test_compile_top_level_await`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_compile_top_level_await_invalid_cases with self.assertRaises( ^^^^^^^^^^^^^^^^^^ AssertionError`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_builtin.py", line 490, in test_compile_top_level_await_invalid_cases
    with self.assertRaises(
         ^^^^^^^^^^^^^^^^^^
AssertionError: SyntaxError not raised : source=def f():  [x async for x in arange(10)]
 mode=sin`
example test: `test_builtin.BuiltinTest.test_compile_top_level_await_invalid_cases`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_copy_weakkeydict self._check_copy_weakdict(weakref.WeakKeyDictionary) File <str>, line <n>, in `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_copy.py", line 841, in test_copy_weakkeydict
    self._check_copy_weakdict(weakref.WeakKeyDictionary)
  File "/work/suites/cpython/Lib/test/test_copy.py", line 834, in _check_copy_weakdict
    self.assertEqual(len(v), 1)
A`
example test: `test_copy.TestCopy.test_copy_weakkeydict`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_copy_weakvaluedict self._check_copy_weakdict(weakref.WeakValueDictionary) File <str>, line <n>,`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_copy.py", line 844, in test_copy_weakvaluedict
    self._check_copy_weakdict(weakref.WeakValueDictionary)
  File "/work/suites/cpython/Lib/test/test_copy.py", line 834, in _check_copy_weakdict
    self.assertEqual(len(v), `
example test: `test_copy.TestCopy.test_copy_weakvaluedict`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_debug_expressions_are_raw_strings self.assertEqual(f<str>, <str>\\\\N{OX}\<str>) AssertionError`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_fstring.py", line 1769, in test_debug_expressions_are_raw_strings
    self.assertEqual(f'{b"\N{OX}"=}', 'b"\\N{OX}"=b\'\\\\N{OX}\'')
AssertionError: 'b"🐂"=b\'\\\\N{OX}\'' != 'b"\\N{OX}"=b\'\\\\N{OX}\''
- b"🐂"=b'\\N{OX}'
`
example test: `test_fstring.TestCase.test_debug_expressions_are_raw_strings`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_decimal_numeric_consistent self.assertEqual(dec, self.db.numeric(c)) ^^^^^^^^^^^^^^^^^^ Attribu`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_unicodedata.py", line 285, in test_decimal_numeric_consistent
    self.assertEqual(dec, self.db.numeric(c))
                          ^^^^^^^^^^^^^^^^^^
AttributeError: module 'unicodedata' has no attribute 'numeric'`
example test: `test_unicodedata.UnicodeMiscTest.test_decimal_numeric_consistent`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_decode_unicode decoder = codecs.getincrementaldecoder(enc)() ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_multibytecodec.py", line 270, in test_decode_unicode
    decoder = codecs.getincrementaldecoder(enc)()
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
LookupError: unknown encoding euc_jisx0213`
example test: `test_multibytecodec.Test_IncrementalDecoder.test_decode_unicode`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_decode_unicode self.assertRaises(TypeError, codecs.getdecoder(enc), <str>) ^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_multibytecodec.py", line 77, in test_decode_unicode
    self.assertRaises(TypeError, codecs.getdecoder(enc), "")
                                 ^^^^^^^^^^^^^^^^^^^^^^
LookupError: unknown encoding euc_jisx0213`
example test: `test_multibytecodec.Test_MultibyteCodec.test_decode_unicode`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_decompress_infile_outfile_error self.assertEqual(b<str>, err.strip()) AssertionError: b<str> !=`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_gzip.py", line 1039, in test_decompress_infile_outfile_error
    self.assertEqual(b"filename doesn't end in .gz: 'thisisatest.out'", err.strip())
AssertionError: b"filename doesn't end in .gz: 'thisisatest.out'" != b''`
example test: `test_gzip.TestCommandLine.test_decompress_infile_outfile_error`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_deep_split with self.assertRaises(RecursionError): ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ AssertionE`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_exception_group.py", line 442, in test_deep_split
    with self.assertRaises(RecursionError):
         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: RecursionError not raised`
example test: `test_exception_group.DeepRecursionInSplitAndSubgroup.test_deep_split`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_deep_subgroup with self.assertRaises(RecursionError): ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Asserti`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_exception_group.py", line 447, in test_deep_subgroup
    with self.assertRaises(RecursionError):
         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: RecursionError not raised`
example test: `test_exception_group.DeepRecursionInSplitAndSubgroup.test_deep_subgroup`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_deepcopy_weakkeydict self.assertEqual(len(v), <n>) AssertionError: <n> != <n>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_copy.py", line 864, in test_deepcopy_weakkeydict
    self.assertEqual(len(v), 1)
AssertionError: 2 != 1`
example test: `test_copy.TestCopy.test_deepcopy_weakkeydict`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_deepcopy_weakvaluedict self.assertEqual(len(v), <n>) AssertionError: <n> != <n>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_copy.py", line 888, in test_deepcopy_weakvaluedict
    self.assertEqual(len(v), 1)
AssertionError: 2 != 1`
example test: `test_copy.TestCopy.test_deepcopy_weakvaluedict`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_descrdoc check(FileIO.closed, <str>) # getset descriptor ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_descr.py", line 3248, in test_descrdoc
    check(FileIO.closed, "True if the file is closed") # getset descriptor
    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_descr.py",`
example test: `test_descr.ClassPropertiesAndMethods.test_descrdoc`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_digit_numeric_consistent self.assertEqual(dec, self.db.numeric(c)) ^^^^^^^^^^^^^^^^^^ Attribute`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_unicodedata.py", line 298, in test_digit_numeric_consistent
    self.assertEqual(dec, self.db.numeric(c))
                          ^^^^^^^^^^^^^^^^^^
AttributeError: module 'unicodedata' has no attribute 'numeric'`
example test: `test_unicodedata.UnicodeMiscTest.test_digit_numeric_consistent`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_doctest_main_issue4197 self.assertIn(expected.encode(<str>), out) AssertionError: b<str> not fo`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_zipimport_support.py", line 205, in test_doctest_main_issue4197
    self.assertIn(expected.encode('utf-8'), out)
AssertionError: b'File "/tmp/tmp3jofs9hb/script.py", line 2, in __main__.Test' not found in b'***************`
example test: `test_zipimport_support.ZipSupportTests.test_doctest_main_issue4197`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_east_asian_width_9_0_changes self.assertEqual(self.db.ucd_3_2_0.east_asian_width(<str>), <str>)`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_unicodedata.py", line 250, in test_east_asian_width_9_0_changes
    self.assertEqual(self.db.ucd_3_2_0.east_asian_width('\u231a'), 'N')
AssertionError: 'W' != 'N'
- W
+ N`
example test: `test_unicodedata.UnicodeFunctionsTest.test_east_asian_width_9_0_changes`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_encode self.assertEqual(self.text.encode(self.encoding), self.expected_reset) AssertionError: b`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_multibytecodec.py", line 380, in test_encode
    self.assertEqual(self.text.encode(self.encoding), self.expected_reset)
AssertionError: b'~{ADAD' != b'~{ADAD~}'`
example test: `test_multibytecodec.TestHZStateful.test_encode`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_errorcallback_custom_ignore self.assertEqual(data.encode(enc, <str>), b<str>) ^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_multibytecodec.py", line 57, in test_errorcallback_custom_ignore
    self.assertEqual(data.encode(enc, "test.ignore"), b'')
                     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
LookupError: unknown encoding euc_jisx0213`
example test: `test_multibytecodec.Test_MultibyteCodec.test_errorcallback_custom_ignore`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_errorcallback_longindex self.assertRaises(IndexError, dec, File <str>, line <n>, in assertRaise`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_multibytecodec.py", line 49, in test_errorcallback_longindex
    self.assertRaises(IndexError, dec,
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/unittest/case.py", line 778, in assertRaises
    return`
example test: `test_multibytecodec.Test_MultibyteCodec.test_errorcallback_longindex`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_eval_builtins_mapping self.assertEqual(eval(code, ns), <n>) ^^^^^^^^^^^^^^ File <str>, line <n>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_builtin.py", line 827, in test_eval_builtins_mapping
    self.assertEqual(eval(code, ns), 1)
                     ^^^^^^^^^^^^^^
  File "test", line 1, in <module>
NameError: name 'superglobal' is not defined`
example test: `test_builtin.BuiltinTest.test_eval_builtins_mapping`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_eval_builtins_mapping_reduce self.assertRaisesRegex(AttributeError, <str>, eval, code, ns) Asse`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_builtin.py", line 845, in test_eval_builtins_mapping_reduce
    self.assertRaisesRegex(AttributeError, "iter", eval, code, ns)
AssertionError: AttributeError not raised by eval`
example test: `test_builtin.BuiltinTest.test_eval_builtins_mapping_reduce`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_eval_bytes_invalid_escape self.assertEqual(w[<n>].lineno, <n>) AssertionError: <n> != <n>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_string_literals.py", line 233, in test_eval_bytes_invalid_escape
    self.assertEqual(w[0].lineno, 2)
AssertionError: 1 != 2`
example test: `test_string_literals.TestLiterals.test_eval_bytes_invalid_escape`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_eval_bytes_invalid_octal_escape self.assertEqual(w[<n>].lineno, <n>) AssertionError: <n> != <n>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_string_literals.py", line 257, in test_eval_bytes_invalid_octal_escape
    self.assertEqual(w[0].lineno, 2)
AssertionError: 1 != 2`
example test: `test_string_literals.TestLiterals.test_eval_bytes_invalid_octal_escape`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_eval_str_invalid_escape self.assertEqual(w[<n>].lineno, <n>) AssertionError: <n> != <n>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_string_literals.py", line 121, in test_eval_str_invalid_escape
    self.assertEqual(w[0].lineno, 2)
AssertionError: 1 != 2`
example test: `test_string_literals.TestLiterals.test_eval_str_invalid_escape`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_eval_str_invalid_octal_escape with self.assertWarns(SyntaxWarning): ^^^^^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_string_literals.py", line 148, in test_eval_str_invalid_octal_escape
    with self.assertWarns(SyntaxWarning):
         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: SyntaxWarning not triggered`
example test: `test_string_literals.TestLiterals.test_eval_str_invalid_octal_escape`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_exception_groups_feature_version with self.assertRaises(SyntaxError): ^^^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_ast/test_ast.py", line 845, in test_exception_groups_feature_version
    with self.assertRaises(SyntaxError):
         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: SyntaxError not raised`
example test: `test_ast.test_ast.AST_Tests.test_exception_groups_feature_version`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_exec_closure exec(three_freevars.__code__, TypeError: exec() got an unexpected keyword argument`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_builtin.py", line 885, in test_exec_closure
    exec(three_freevars.__code__,
TypeError: exec() got an unexpected keyword argument 'closure'`
example test: `test_builtin.BuiltinTest.test_exec_closure`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_exec_globals self.assertRaisesRegex(NameError, <str>, AssertionError: NameError not raised by e`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_builtin.py", line 755, in test_exec_globals
    self.assertRaisesRegex(NameError, "name 'print' is not defined",
AssertionError: NameError not raised by exec

Stdout:
Hello World!`
example test: `test_builtin.BuiltinTest.test_exec_globals`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_exec_globals_dict_subclass exec(code, {<str>: customdict({<str>: <n>})}) File <str>, line <n>, `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_builtin.py", line 818, in test_exec_globals_dict_subclass
    exec(code, {'__builtins__': customdict({'superglobal': 1})})
  File "test", line 1, in <module>
NameError: name 'superglobal' is not defined`
example test: `test_builtin.BuiltinTest.test_exec_globals_dict_subclass`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_exec_globals_error_on_get self.assertRaises(setonlyerror, exec, code, File <str>, line <n>, in `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_builtin.py", line 809, in test_exec_globals_error_on_get
    self.assertRaises(setonlyerror, exec, code,
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/unittest/case.py", line 778, in assertRaises
    r`
example test: `test_builtin.BuiltinTest.test_exec_globals_error_on_get`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_exec_globals_frozen self.assertRaises(frozendict_error, AssertionError: frozendict_error not ra`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_builtin.py", line 775, in test_exec_globals_frozen
    self.assertRaises(frozendict_error,
AssertionError: frozendict_error not raised by exec

Stdout:
2`
example test: `test_builtin.BuiltinTest.test_exec_globals_frozen`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_extended_opargs self._do_test(extended_opargs_test) File <str>, line <n>, in _do_test mf.import`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_modulefinder.py", line 414, in test_extended_opargs
    self._do_test(extended_opargs_test)
  File "/work/suites/cpython/Lib/test/test_modulefinder.py", line 331, in _do_test
    mf.import_hook(import_this)
  File "/opt/el`
example test: `test_modulefinder.ModuleFinderTest.test_extended_opargs`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_failed_import_during_compiling result = script_helper.assert_python_failure(<str>, code) ^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_unicodedata.py", line 271, in test_failed_import_during_compiling
    result = script_helper.assert_python_failure("-c", code)
             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/t`
example test: `test_unicodedata.UnicodeMiscTest.test_failed_import_during_compiling`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_file_not_exists self.assertIn(b<str>, stderr.lower()) AssertionError: b<str> not found in b<str`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 291, in test_file_not_exists
    self.assertIn(b'no such file or directory', stderr.lower())
AssertionError: b'no such file or directory' not found in b'typeerror: lstat: path should be string, bytes o`
example test: `test_py_compile.PyCompileCLITestCase.test_file_not_exists`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_file_not_exists_with_quiet self.assertEqual(stderr, b<str>) AssertionError: b<str> != b<str>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 298, in test_file_not_exists_with_quiet
    self.assertEqual(stderr, b'')
AssertionError: b'TypeError: lstat: path should be string, [141 chars]1)\n' != b''`
example test: `test_py_compile.PyCompileCLITestCase.test_file_not_exists_with_quiet`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_frame_resurrect self.assertTrue(frame) ^^^^^ UnboundLocalError: local variable <str> referenced`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_generators.py", line 66, in test_frame_resurrect
    self.assertTrue(frame)
                    ^^^^^
UnboundLocalError: local variable 'frame' referenced before assignment`
example test: `test_generators.FinalizationTest.test_frame_resurrect`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_free_after_iterating check_free_after_iterating(self, iter, SequenceClass, (<n>,)) File <str>, `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_iter.py", line 1141, in test_free_after_iterating
    check_free_after_iterating(self, iter, SequenceClass, (0,))
  File "/work/suites/cpython/Lib/test/support/__init__.py", line 1830, in check_free_after_iterating
    tes`
example test: `test_iter.TestCase.test_free_after_iterating`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_free_after_iterating support.check_free_after_iterating(self, iter, self.type2test) File <str>,`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/seq_tests.py", line 430, in test_free_after_iterating
    support.check_free_after_iterating(self, iter, self.type2test)
  File "/work/suites/cpython/Lib/test/support/__init__.py", line 1830, in check_free_after_iterating
    t`
example test: `test_userlist.UserListTest.test_free_after_iterating`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_free_after_iterating support.check_free_after_iterating(self, iter, str) File <str>, line <n>, `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_unicode.py", line 2638, in test_free_after_iterating
    support.check_free_after_iterating(self, iter, str)
  File "/work/suites/cpython/Lib/test/support/__init__.py", line 1830, in check_free_after_iterating
    test.ass`
example test: `test_unicode.UnicodeTest.test_free_after_iterating`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_g2 self.assertEqual(iso2022jp2.decode(<str>), uni) ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ UnicodeDec`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_multibytecodec.py", line 358, in test_g2
    self.assertEqual(iso2022jp2.decode('iso2022-jp-2'), uni)
                     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
UnicodeDecodeError: 'iso2022-jp-2' codec can't decode bytes in po`
example test: `test_multibytecodec.Test_ISO2022.test_g2`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_getstate_returns_expected_value buffer_state_encoder = codecs.getincrementalencoder(<str>)() ^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_multibytecodec.py", line 163, in test_getstate_returns_expected_value
    buffer_state_encoder = codecs.getincrementalencoder('euc_jis_2004')()
                           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Lookup`
example test: `test_multibytecodec.Test_IncrementalEncoder.test_getstate_returns_expected_value`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_gh129093 self.assertEqual(f<str>, <str>) AssertionError: <str> != <str> - 1True + <n>!=<n>=True`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_fstring.py", line 1889, in test_gh129093
    self.assertEqual(f'{1!=2=}', '1!=2=True')
AssertionError: '1True' != '1!=2=True'
- 1True
+ 1!=2=True
?  ++++`
example test: `test_fstring.TestCase.test_gh129093`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_handle_frame_object_in_creation thresholds = gc.get_threshold() ^^^^^^^^^^^^^^^^^^ AttributeErr`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_generators.py", line 188, in test_handle_frame_object_in_creation
    thresholds = gc.get_threshold()
                 ^^^^^^^^^^^^^^^^^^
AttributeError: module 'gc' has no attribute 'get_threshold'`
example test: `test_generators.GeneratorTest.test_handle_frame_object_in_creation`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_html_diff self.assertEqual(actual, fp.read()) AssertionError: <str> != <str>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_difflib.py", line 245, in test_html_diff
    self.assertEqual(actual, fp.read())
AssertionError: '\n<![315 chars]mily:Courier; border:medium;}\n        .diff_h[103422 chars]tml>' != '\n<![315 chars]mily: Menlo, Consolas, M`
example test: `test_difflib.TestSFpatches.test_html_diff`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_intersection self.assertEqual(len(i), len(self.items2)) AssertionError: <n> != <n>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_weakset.py", line 107, in test_intersection
    self.assertEqual(len(i), len(self.items2))
AssertionError: 3 != 2`
example test: `test_weakset.TestWeakSet.test_intersection`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_invalid_bracketed_hosts self.assertRaises(ValueError, urllib.parse.urlsplit, <str>) AssertionEr`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_urlparse.py", line 1276, in test_invalid_bracketed_hosts
    self.assertRaises(ValueError, urllib.parse.urlsplit, 'scheme://prefix.[v6a.ip]')
AssertionError: ValueError not raised by urlsplit`
example test: `test_urlparse.UrlParseTestCase.test_invalid_bracketed_hosts`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_invalid_cb_for_2bytes_seq self.assertCorrectUTF8Decoding(bytes.fromhex(seq), res, File <str>, l`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_unicode.py", line 2106, in test_invalid_cb_for_2bytes_seq
    self.assertCorrectUTF8Decoding(bytes.fromhex(seq), res,
  File "/work/suites/cpython/Lib/test/test_unicode.py", line 2039, in assertCorrectUTF8Decoding
    self`
example test: `test_unicode.UnicodeTest.test_invalid_cb_for_2bytes_seq`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_invalid_cb_for_3bytes_seq self.assertCorrectUTF8Decoding(bytes.fromhex(seq), res, File <str>, l`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_unicode.py", line 2164, in test_invalid_cb_for_3bytes_seq
    self.assertCorrectUTF8Decoding(bytes.fromhex(seq), res,
  File "/work/suites/cpython/Lib/test/test_unicode.py", line 2039, in assertCorrectUTF8Decoding
    self`
example test: `test_unicode.UnicodeTest.test_invalid_cb_for_3bytes_seq`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_invalid_cb_for_4bytes_seq self.assertCorrectUTF8Decoding(bytes.fromhex(seq), res, File <str>, l`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_unicode.py", line 2243, in test_invalid_cb_for_4bytes_seq
    self.assertCorrectUTF8Decoding(bytes.fromhex(seq), res,
  File "/work/suites/cpython/Lib/test/test_unicode.py", line 2039, in assertCorrectUTF8Decoding
    self`
example test: `test_unicode.UnicodeTest.test_invalid_cb_for_4bytes_seq`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_invalid_escape_locations_with_offset self.assertEqual(exc.offset, <n>) AssertionError: <n> != <`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_string_literals.py", line 181, in test_invalid_escape_locations_with_offset
    self.assertEqual(exc.offset, 30)
AssertionError: 1 != 30`
example test: `test_string_literals.TestLiterals.test_invalid_escape_locations_with_offset`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_invalid_start_byte self.assertCorrectUTF8Decoding(bytes([byte]), <str>, File <str>, line <n>, i`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_unicode.py", line 2058, in test_invalid_start_byte
    self.assertCorrectUTF8Decoding(bytes([byte]), '\ufffd',
  File "/work/suites/cpython/Lib/test/test_unicode.py", line 2039, in assertCorrectUTF8Decoding
    self.assert`
example test: `test_unicode.UnicodeTest.test_invalid_start_byte`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_iso2022 self.assertEqual(decoder.decode(b<str>), <str>) AssertionError: <str> != <str> - @$@ + `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_multibytecodec.py", line 259, in test_iso2022
    self.assertEqual(decoder.decode(b'@$@'), '\u4e16')
AssertionError: '@$@' != '世'
- @$@
+ 世`
example test: `test_multibytecodec.Test_IncrementalDecoder.test_iso2022`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_iso2022_jp_g0 self.assertNotIn(b<str>, <str>.encode(<str>)) ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_multibytecodec.py", line 361, in test_iso2022_jp_g0
    self.assertNotIn(b'\x0e', '\N{SOFT HYPHEN}'.encode('iso-2022-jp-2'))
                              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
UnicodeEncodeError: 'iso-`
example test: `test_multibytecodec.Test_ISO2022.test_iso2022_jp_g0`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_iter_function_concealing_reentrant_exhaustion with self.assertRaises(StopIteration): ^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_iter.py", line 375, in test_iter_function_concealing_reentrant_exhaustion
    with self.assertRaises(StopIteration):
         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: StopIteration not raised`
example test: `test_iter.TestCase.test_iter_function_concealing_reentrant_exhaustion`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_join_overflow self.assertRaises(OverflowError, <str>.join, seq) File <str>, line <n>, in assert`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_unicode.py", line 573, in test_join_overflow
    self.assertRaises(OverflowError, ''.join, seq)
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/unittest/case.py", line 778, in assertRaises
    return con`
example test: `test_unicode.UnicodeTest.test_join_overflow`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_keywords_in_subclass u = subclass_with_new([<n>, <n>], newarg=<n>) ^^^^^^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_list.py", line 72, in test_keywords_in_subclass
    u = subclass_with_new([1, 2], newarg=3)
        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
TypeError: list() got an unexpected keyword argument 'newarg'`
example test: `test_list.ListTest.test_keywords_in_subclass`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_len self.assertEqual(len(self.fs), <n>) AssertionError: <n> != <n>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_weakset.py", line 60, in test_len
    self.assertEqual(len(self.fs), 0)
AssertionError: 1 != 0`
example test: `test_weakset.TestWeakSet.test_len`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_len_cycles self.assertIn(n1, (<n>, <n>)) AssertionError: <n> not found in (<n>, <n>)`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_weakset.py", line 423, in test_len_cycles
    self.assertIn(n1, (0, 1))
AssertionError: 20 not found in (0, 1)`
example test: `test_weakset.TestWeakSet.test_len_cycles`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_len_race self.addCleanup(gc.set_threshold, *gc.get_threshold()) ^^^^^^^^^^^^^^^^ AttributeError`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_weakset.py", line 428, in test_len_race
    self.addCleanup(gc.set_threshold, *gc.get_threshold())
                    ^^^^^^^^^^^^^^^^
AttributeError: module 'gc' has no attribute 'set_threshold'`
example test: `test_weakset.TestWeakSet.test_len_race`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_linebreak_7643 self.assertEqual(len(lines), <n>, AssertionError: <n> != <n> : \u001c should be `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_unicodedata.py", line 339, in test_linebreak_7643
    self.assertEqual(len(lines), 2,
AssertionError: 1 != 2 : \u001c should be a linebreak`
example test: `test_unicodedata.UnicodeMiscTest.test_linebreak_7643`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_list_index_modifing_operand with self.assertRaises(ValueError): ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ A`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_list.py", line 254, in test_list_index_modifing_operand
    with self.assertRaises(ValueError):
         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: ValueError not raised`
example test: `test_list.ListTest.test_list_index_modifing_operand`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_list_resize_overflow with self.assertRaises((MemoryError, OverflowError)): ^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_list.py", line 107, in test_list_resize_overflow
    with self.assertRaises((MemoryError, OverflowError)):
         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: (<class 'MemoryError'>, <class 'OverflowEr`
example test: `test_list.ListTest.test_list_resize_overflow`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_literal_eval_str_int_limit with self.assertRaises(SyntaxError) as err_ctx: ^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_ast/test_ast.py", line 1301, in test_literal_eval_str_int_limit
    with self.assertRaises(SyntaxError) as err_ctx:
         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: SyntaxError not raised`
example test: `test_ast.test_ast.ASTHelpers_Test.test_literal_eval_str_int_limit`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_load_module_api self._do_test(absolute_import_test, modulefinder_class=CheckLoadModuleApi) File`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_modulefinder.py", line 435, in test_load_module_api
    self._do_test(absolute_import_test, modulefinder_class=CheckLoadModuleApi)
  File "/work/suites/cpython/Lib/test/test_modulefinder.py", line 331, in _do_test
    mf.i`
example test: `test_modulefinder.ModuleFinderTest.test_load_module_api`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_match_args self.assertEqual(time.struct_time.__match_args__, expected_args) ^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_structseq.py", line 201, in test_match_args
    self.assertEqual(time.struct_time.__match_args__, expected_args)
                     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: type object 'time.struct_time' has no at`
example test: `test_structseq.StructSeqTest.test_match_args`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_match_args_with_unnamed_fields self.assertEqual(os.stat_result.__match_args__, expected_args) ^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_structseq.py", line 207, in test_match_args_with_unnamed_fields
    self.assertEqual(os.stat_result.__match_args__, expected_args)
                     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: type object 'os.stat_res`
example test: `test_structseq.StructSeqTest.test_match_args_with_unnamed_fields`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_maybe self._do_test(maybe_test) File <str>, line <n>, in _do_test self.assertEqual(found, modul`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_modulefinder.py", line 357, in test_maybe
    self._do_test(maybe_test)
  File "/work/suites/cpython/Lib/test/test_modulefinder.py", line 346, in _do_test
    self.assertEqual(found, modules)
AssertionError: Lists differ: `
example test: `test_modulefinder.ModuleFinderTest.test_maybe`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_maybe_new self._do_test(maybe_test_new) File <str>, line <n>, in _do_test self.assertEqual(foun`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_modulefinder.py", line 360, in test_maybe_new
    self._do_test(maybe_test_new)
  File "/work/suites/cpython/Lib/test/test_modulefinder.py", line 346, in _do_test
    self.assertEqual(found, modules)
AssertionError: Lists `
example test: `test_modulefinder.ModuleFinderTest.test_maybe_new`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_method_checksum self.assertEqual(result, self.expectedchecksum) AssertionError: <str> != <str> `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_unicodedata.py", line 65, in test_method_checksum
    self.assertEqual(result, self.expectedchecksum)
AssertionError: 'ce2d810a50f0fb92d8707c2c1330ea1a45d55da1' != 'e708c31c0d51f758adf475cb7201cf80917362be'
- ce2d810a50f0f`
example test: `test_unicodedata.UnicodeMethodsTest.test_method_checksum`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_mirrored self.assertEqual(self.db.mirrored(<str>), <n>) ^^^^^^^^^^^^^^^^^^^^^^^^^^ AttributeErr`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_unicodedata.py", line 171, in test_mirrored
    self.assertEqual(self.db.mirrored('\uFFFE'), 0)
                     ^^^^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: module 'unicodedata' has no attribute 'mirrored'`
example test: `test_unicodedata.UnicodeFunctionsTest.test_mirrored`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_module_finalization_at_shutdown rc, out, err = assert_python_ok(<str>, <str>) ^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_module/__init__.py", line 299, in test_module_finalization_at_shutdown
    rc, out, err = assert_python_ok("-c", "from test.test_module import final_a")
                   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`
example test: `test_module.ModuleTests.test_module_finalization_at_shutdown`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_named_sequences_sample self.assertEqual(unicodedata.lookup(seqname), codepoints) ^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_ucn.py", line 169, in test_named_sequences_sample
    self.assertEqual(unicodedata.lookup(seqname), codepoints)
                     ^^^^^^^^^^^^^^^^^^^^^^^^^^^
KeyError: "undefined character name 'LATIN SMALL LETTER R WIT`
example test: `test_ucn.UnicodeNamesTest.test_named_sequences_sample`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_new_builtins_issue_43102 self.assertEqual(new_func.__globals__[<str>], {}) AssertionError: {<st`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_collections.py", line 702, in test_new_builtins_issue_43102
    self.assertEqual(new_func.__globals__['__builtins__'], {})
AssertionError: {'__name__': 'builtins', '__doc__': None, [5786 chars]or'>} != {}
Diff is 6294 char`
example test: `test_collections.TestNamedTuple.test_new_builtins_issue_43102`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_no_mangling_in_nested_scopes ns = run_code(<str><str>/work/suites/cpython/Lib/test/support/__in`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_type_params.py", line 810, in test_no_mangling_in_nested_scopes
    ns = run_code("""
         ^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/support/__init__.py", line 664, in run_code
    exec(textwrap.dedent(code), `
example test: `test_type_params.TypeParamsManglingTest.test_no_mangling_in_nested_scopes`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_numeric self.assertEqual(self.db.numeric(<str>,None), None) ^^^^^^^^^^^^^^^^^^^^^^^^^ Attribute`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_unicodedata.py", line 120, in test_numeric
    self.assertEqual(self.db.numeric('A',None), None)
                     ^^^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: module 'unicodedata' has no attribute 'numeric'`
example test: `test_unicodedata.UnicodeFunctionsTest.test_numeric`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_optional_isinstance_type_error with self.assertRaises(TypeError): ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_typing.py", line 1830, in test_optional_isinstance_type_error
    with self.assertRaises(TypeError):
         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: TypeError not raised`
example test: `test_typing.UnionTests.test_optional_isinstance_type_error`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_package self._do_test(package_test) File <str>, line <n>, in _do_test mf.import_hook(import_thi`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_modulefinder.py", line 354, in test_package
    self._do_test(package_test)
  File "/work/suites/cpython/Lib/test/test_modulefinder.py", line 331, in _do_test
    mf.import_hook(import_this)
  File "/opt/elide/lib/resource`
example test: `test_modulefinder.ModuleFinderTest.test_package`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_pdb_issue4201 self.assertIn(os.path.normcase(script_name.encode(<str>)), data) AssertionError: `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_zipimport_support.py", line 230, in test_pdb_issue4201
    self.assertIn(os.path.normcase(script_name.encode('utf-8')), data)
AssertionError: b'/tmp/tmpbkxa67lq/script.py' not found in b'> /work/.harness/work/cpython-core/`
example test: `test_zipimport_support.ZipSupportTests.test_pdb_issue4201`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_pickle z = pickle.dumps(c, proto) ^^^^^^^^^^^^^^^^^^^^^^ File <str>, line <n>, in _reduce_ex st`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_typing.py", line 4802, in test_pickle
    z = pickle.dumps(c, proto)
        ^^^^^^^^^^^^^^^^^^^^^^
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/copyreg.py", line 71, in _reduce_ex
    state = base(se`
example test: `test_typing.GenericTests.test_pickle`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_possible_set_operations with self.assertWarnsRegex(FutureWarning, <str>) as w: ^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_re.py", line 1216, in test_possible_set_operations
    with self.assertWarnsRegex(FutureWarning, 'Possible set difference') as w:
         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError`
example test: `test_re.ReTests.test_possible_set_operations`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_printable_repr self.assertEqual(repr(<str>), <str>) # nonprintable ^^^^^^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_unicode.py", line 2463, in test_printable_repr
    self.assertEqual(repr('\U00014000'), "'\\U00014000'")     # nonprintable
    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: "'𔀀'" != "'\\U00014000'`
example test: `test_unicode.UnicodeTest.test_printable_repr`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_protocols_pickleable z = pickle.dumps(c, proto) ^^^^^^^^^^^^^^^^^^^^^^ File <str>, line <n>, in`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_typing.py", line 3945, in test_protocols_pickleable
    z = pickle.dumps(c, proto)
        ^^^^^^^^^^^^^^^^^^^^^^
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/copyreg.py", line 71, in _reduce_ex
    s`
example test: `test_typing.ProtocolTests.test_protocols_pickleable`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_qualname self.assertEqual(type(d).__name__, n + <str>) AssertionError: <str> != <str> - getset_`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_descr.py", line 4846, in test_qualname
    self.assertEqual(type(d).__name__, n + '_descriptor')
AssertionError: 'getset_descriptor' != 'member_descriptor'
- getset_descriptor
? ^ ^^ ^
+ member_descriptor
? ^ ^^ ^`
example test: `test_descr.ClassPropertiesAndMethods.test_qualname`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_reduce_mutating_builtins_iter self.assertEqual(run_iter(<str>), (orig[<str>], (<str>,))) Assert`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_iter.py", line 300, in test_reduce_mutating_builtins_iter
    self.assertEqual(run_iter("xyz"), (orig["iter"], ("",)))
AssertionError: Tuples differ: (<built-in function iter>, ('xyz',), 0) != (<built-in function iter>, ('`
example test: `test_iter.TestCase.test_reduce_mutating_builtins_iter`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_refcycle old_garbage = gc.garbage[:] ^^^^^^^^^^ AttributeError: module <str> has no attribute <`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_generators.py", line 72, in test_refcycle
    old_garbage = gc.garbage[:]
                  ^^^^^^^^^^
AttributeError: module 'gc' has no attribute 'garbage'`
example test: `test_generators.FinalizationTest.test_refcycle`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_reference_cycle script_helper.assert_python_ok(<str>, textwrap.dedent(r<str><str>/work/suites/c`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_structseq.py", line 214, in test_reference_cycle
    script_helper.assert_python_ok("-c", textwrap.dedent(r"""
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 166, in assert_python_ok
    return _asse`
example test: `test_structseq.StructSeqTest.test_reference_cycle`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_relative_imports self._do_test(relative_import_test) File <str>, line <n>, in _do_test mf.impor`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_modulefinder.py", line 366, in test_relative_imports
    self._do_test(relative_import_test)
  File "/work/suites/cpython/Lib/test/test_modulefinder.py", line 331, in _do_test
    mf.import_hook(import_this)
  File "/opt/e`
example test: `test_modulefinder.ModuleFinderTest.test_relative_imports`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_relative_imports_2 self._do_test(relative_import_test_2) File <str>, line <n>, in _do_test self`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_modulefinder.py", line 369, in test_relative_imports_2
    self._do_test(relative_import_test_2)
  File "/work/suites/cpython/Lib/test/test_modulefinder.py", line 346, in _do_test
    self.assertEqual(found, modules)
Asser`
example test: `test_modulefinder.ModuleFinderTest.test_relative_imports_2`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_relative_imports_3 self._do_test(relative_import_test_3) File <str>, line <n>, in _do_test mf.i`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_modulefinder.py", line 372, in test_relative_imports_3
    self._do_test(relative_import_test_3)
  File "/work/suites/cpython/Lib/test/test_modulefinder.py", line 331, in _do_test
    mf.import_hook(import_this)
  File "/o`
example test: `test_modulefinder.ModuleFinderTest.test_relative_imports_3`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_replace_paths self._do_test(maybe_test, debug=<n>, File <str>, line <n>, in _do_test self.asser`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_modulefinder.py", line 397, in test_replace_paths
    self._do_test(maybe_test, debug=2,
  File "/work/suites/cpython/Lib/test/test_modulefinder.py", line 346, in _do_test
    self.assertEqual(found, modules)
AssertionErro`
example test: `test_modulefinder.ModuleFinderTest.test_replace_paths`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_same_name_as_bad self._do_test(same_name_as_bad_test) File <str>, line <n>, in _do_test self.as`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_modulefinder.py", line 381, in test_same_name_as_bad
    self._do_test(same_name_as_bad_test)
  File "/work/suites/cpython/Lib/test/test_modulefinder.py", line 346, in _do_test
    self.assertEqual(found, modules)
Assertio`
example test: `test_modulefinder.ModuleFinderTest.test_same_name_as_bad`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_Set_hash_matches_frozenset self.assertEqual(hash(fs), Set._hash(fs), msg=s) AssertionError: <n>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_collections.py", line 1842, in test_Set_hash_matches_frozenset
    self.assertEqual(hash(fs), Set._hash(fs), msg=s)
AssertionError: 133146708735736 != -1572407560 : {}`
example test: `test_collections.TestCollectionABCs.test_Set_hash_matches_frozenset`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_setdefault_atomic self.assertEqual(hashed1.eq_count + hashed2.eq_count, <n>) AssertionError: <n`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_dict.py", line 435, in test_setdefault_atomic
    self.assertEqual(hashed1.eq_count + hashed2.eq_count, 1)
AssertionError: 2 != 1`
example test: `test_dict.DictTest.test_setdefault_atomic`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_setstate_validates_input self.assertRaises(TypeError, decoder.setstate, (<str>, <n>)) Assertion`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_multibytecodec.py", line 304, in test_setstate_validates_input
    self.assertRaises(TypeError, decoder.setstate, ("invalid", 0))
AssertionError: TypeError not raised by setstate`
example test: `test_multibytecodec.Test_IncrementalDecoder.test_setstate_validates_input`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_setstate_validates_input_bytes self.assertRaises(UnicodeDecodeError, encoder.setstate, invalid_`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_multibytecodec.py", line 205, in test_setstate_validates_input_bytes
    self.assertRaises(UnicodeDecodeError, encoder.setstate, invalid_utf8)
AssertionError: UnicodeDecodeError not raised by setstate`
example test: `test_multibytecodec.Test_IncrementalEncoder.test_setstate_validates_input_bytes`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_setstate_validates_input_size self.assertRaises(UnicodeError, encoder.setstate, pending_size_ni`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_multibytecodec.py", line 196, in test_setstate_validates_input_size
    self.assertRaises(UnicodeError, encoder.setstate, pending_size_nine)
AssertionError: UnicodeError not raised by setstate`
example test: `test_multibytecodec.Test_IncrementalEncoder.test_setstate_validates_input_size`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_source_segment_padded self.assertEqual( AssertionError: <str> != <str> def fun(self) -> None: -`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_ast/test_ast.py", line 2462, in test_source_segment_padded
    self.assertEqual(
AssertionError: '    def fun(self) -> None:\n        "ЖЖЖ' != '    def fun(self) -> None:\n        "ЖЖЖЖЖ"'
      def fun(self) -> None:
-   `
example test: `test_ast.test_ast.EndPositionTests.test_source_segment_padded`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_state_methods self.assertEqual(decoder.getstate(), (b<str>, <n>)) AssertionError: Tuples differ`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_multibytecodec.py", line 299, in test_state_methods
    self.assertEqual(decoder.getstate(), (b'abc', 123456789))
AssertionError: Tuples differ: (b'abc', 0) != (b'abc', 123456789)

First differing element 1:
0
123456789

-`
example test: `test_multibytecodec.Test_IncrementalDecoder.test_state_methods`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_state_methods_with_buffer_state encoder = codecs.getincrementalencoder(<str>)() ^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_multibytecodec.py", line 127, in test_state_methods_with_buffer_state
    encoder = codecs.getincrementalencoder('euc_jis_2004')()
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
LookupError: unknown encoding eu`
example test: `test_multibytecodec.Test_IncrementalEncoder.test_state_methods_with_buffer_state`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_state_methods_with_non_buffer_state self.assertEqual(encoder.encode(<str>), b<str>) AssertionEr`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_multibytecodec.py", line 147, in test_state_methods_with_non_buffer_state
    self.assertEqual(encoder.encode('\u3042'), b'\x1b\x24\x42\x24\x22')
AssertionError: b'\x1b$B$"\x1b(B' != b'\x1b$B$"'`
example test: `test_multibytecodec.Test_IncrementalEncoder.test_state_methods_with_non_buffer_state`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_stateful encoder = codecs.getincrementalencoder(<str>)() ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_multibytecodec.py", line 100, in test_stateful
    encoder = codecs.getincrementalencoder('jisx0213')()
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
LookupError: unknown encoding jisx0213`
example test: `test_multibytecodec.Test_IncrementalEncoder.test_stateful`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_stateful_keep_buffer encoder = codecs.getincrementalencoder(<str>)() ^^^^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_multibytecodec.py", line 114, in test_stateful_keep_buffer
    encoder = codecs.getincrementalencoder('jisx0213')()
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
LookupError: unknown encoding jisx0213`
example test: `test_multibytecodec.Test_IncrementalEncoder.test_stateful_keep_buffer`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_stdin self.assertFalse(os.path.exists(self.cache_path)) ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ File <s`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 254, in test_stdin
    self.assertFalse(os.path.exists(self.cache_path))
                     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/genericp`
example test: `test_py_compile.PyCompileCLITestCase.test_stdin`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_symmetric_difference self.assertEqual(len(i), len(self.items) + len(self.items2)) AssertionErro`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_weakset.py", line 141, in test_symmetric_difference
    self.assertEqual(len(i), len(self.items) + len(self.items2))
AssertionError: 6 != 5`
example test: `test_weakset.TestWeakSet.test_symmetric_difference`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_syntax_error self._do_test(syntax_error_test) File <str>, line <n>, in _do_test self.assertEqua`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_modulefinder.py", line 378, in test_syntax_error
    self._do_test(syntax_error_test)
  File "/work/suites/cpython/Lib/test/test_modulefinder.py", line 346, in _do_test
    self.assertEqual(found, modules)
AssertionError: `
example test: `test_modulefinder.ModuleFinderTest.test_syntax_error`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_ucd_510 self.assertTrue(unicodedata.mirrored(<str>)) ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ AttributeEr`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_unicodedata.py", line 308, in test_ucd_510
    self.assertTrue(unicodedata.mirrored("\u0f3a"))
                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: module 'unicodedata' has no attribute 'mirrored'`
example test: `test_unicodedata.UnicodeMiscTest.test_ucd_510`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_union self.assertEqual(len(u), len(self.items) + len(self.items2)) AssertionError: <n> != <n>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_weakset.py", line 87, in test_union
    self.assertEqual(len(u), len(self.items) + len(self.items2))
AssertionError: 6 != 5`
example test: `test_weakset.TestWeakSet.test_union`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_union_isinstance_type_error with self.assertRaises(TypeError): ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Ass`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_typing.py", line 1813, in test_union_isinstance_type_error
    with self.assertRaises(TypeError):
         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: TypeError not raised`
example test: `test_typing.UnionTests.test_union_isinstance_type_error`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_urlsplit_normalization self.assertIn(<str>, denorm_chars) AssertionError: <str> not found in [<`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_urlparse.py", line 1398, in test_urlsplit_normalization
    self.assertIn('\u2100', denorm_chars)
AssertionError: '℀' not found in ['﹟', '﹫', '＃', '＠']`
example test: `test_urlparse.UrlParseTestCase.test_urlsplit_normalization`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_warning_notimplemented self.assertWarns(DeprecationWarning, bool, NotImplemented) AssertionErro`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_builtin.py", line 2111, in test_warning_notimplemented
    self.assertWarns(DeprecationWarning, bool, NotImplemented)
AssertionError: DeprecationWarning not triggered by bool`
example test: `test_builtin.BuiltinTest.test_warning_notimplemented`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_weak_destroy_and_mutate_while_iterating self.assertNotIn(u, s) AssertionError: <str> unexpected`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_weakset.py", line 391, in test_weak_destroy_and_mutate_while_iterating
    self.assertNotIn(u, s)
AssertionError: 'Z' unexpectedly found in {<weakref at 2064410917; to 'UserString' at 592833300>, <weakref at 1591421183; to`
example test: `test_weakset.TestWeakSet.test_weak_destroy_and_mutate_while_iterating`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_weak_destroy_while_iterating self.assertEqual(len(s), len(items)) AssertionError: <n> != <n>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_weakset.py", line 367, in test_weak_destroy_while_iterating
    self.assertEqual(len(s), len(items))
AssertionError: 3 != 2`
example test: `test_weakset.TestWeakSet.test_weak_destroy_while_iterating`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_with_files rc, stdout, stderr = self.pycompilecmd(self.source_path, self.source_path) ^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 262, in test_with_files
    rc, stdout, stderr = self.pycompilecmd(self.source_path, self.source_path)
                         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suite`
example test: `test_py_compile.PyCompileCLITestCase.test_with_files`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in testAppendChildNoQuadraticComplexity self.assertLess(end - start, <n>) AssertionError: <n> not less `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_minidom.py", line 200, in testAppendChildNoQuadraticComplexity
    self.assertLess(end - start, 4)
AssertionError: 5.433566491003148 not less than 4`
example test: `test_minidom.MinidomTest.testAppendChildNoQuadraticComplexity`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in testEncodings self.assertEqual(doc.toxml(<str>), AssertionError: b<str> != b<str>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_minidom.py", line 1190, in testEncodings
    self.assertEqual(doc.toxml('utf-16'),
AssertionError: b'\xf[195 chars]>\x00\xff\xfe<\x00f\x00o\x00o\x00\xff\xfe>\x00[47 chars]\x00' != b'\xf[195 chars]>\x00<\x00f\x00o\x00o\x00>`
example test: `test_minidom.MinidomTest.testEncodings`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in testLeaks self.assertEqual(Foo.count, <n>) AssertionError: <n> != <n>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_scope.py", line 478, in testLeaks
    self.assertEqual(Foo.count, 0)
AssertionError: 100 != 0`
example test: `test_scope.ScopeTests.testLeaks`

### 1 × `TypeError: BaseExceptionGroup.__new__() missing <n> required positional argument: <str> During handling of the above exception, another exception occurred: Trac`

distinct messages:
- `TypeError: BaseExceptionGroup.__new__() missing 1 required positional argument: 'b'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_exception_group.py", line 25, in test_bad_EG_construction__too_many_`
example test: `test_exception_group.BadConstructorArgs.test_bad_EG_construction__too_many_args`

### 1 × `TypeError: can<str>args<str>t delete BaseException.args"`

distinct messages:
- `TypeError: can't delete BaseException.args

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_exceptions.py", line 671, in test_invalid_delattr
    self.assertRaisesRegex(TE, msg, delattr, exc, 'args')
A`
example test: `test_exceptions.ExceptionTests.test_invalid_delattr`

### 1 × `TypeError: expected string or bytes-like object During handling of the above exception, another exception occurred: Traceback (most recent call last): File <str`

distinct messages:
- `TypeError: expected string or bytes-like object

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_re.py", line 2405, in test_bug_40736
    with self.assertRaisesRegex(TypeError, "got 'int'"):
         ^`
example test: `test_re.ReTests.test_bug_40736`

### 1 × `TypeError: max() missing <n> required positional argument: <str> During handling of the above exception, another exception occurred: Traceback (most recent call`

distinct messages:
- `TypeError: max() missing 1 required positional argument: 'a'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_builtin.py", line 1202, in test_max
    with self.assertRaisesRegex(
         ^^^^^^^^^^^^^`
example test: `test_builtin.BuiltinTest.test_max`

### 1 × `TypeError: min() missing <n> required positional argument: <str> During handling of the above exception, another exception occurred: Traceback (most recent call`

distinct messages:
- `TypeError: min() missing 1 required positional argument: 'a'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_builtin.py", line 1265, in test_min
    with self.assertRaisesRegex(
         ^^^^^^^^^^^^^`
example test: `test_builtin.BuiltinTest.test_min`

### 1 × `TypeError: range() missing <n> required positional argument: <str> During handling of the above exception, another exception occurred: Traceback (most recent ca`

distinct messages:
- `TypeError: range() missing 1 required positional argument: 'a'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_range.py", line 95, in test_range_constructor_error_messages
    with self.assertRaisesRe`
example test: `test_range.RangeTest.test_range_constructor_error_messages`

### 1 × `UnicodeDecodeError: <str> codec can<str>utf-<n><str>t decode bytes in position <n>-<n>: malformed input"`

distinct messages:
- `UnicodeDecodeError: 'utf-7' codec can't decode bytes in position 1-2: malformed input

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_unicode.py", line 1829, in test_codecs_utf7
    with self.assertRa`
example test: `test_unicode.UnicodeTest.test_codecs_utf7`
