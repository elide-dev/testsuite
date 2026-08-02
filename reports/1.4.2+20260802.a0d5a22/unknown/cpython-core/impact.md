# Impact-ordered failures

## By root-cause signature

### 10 × `Traceback (most recent call last): File <str>, line <n>, in wrapper return fxn(*args, **kwargs) ^^^^^^^^^^^^^^^^^^^^ File <str>, line <n>, in test_compile_file_`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 32, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 210, in test_compile_file_encoding_fallback
    self.asser`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 32, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 156, in test_compile_file_pathlike
    self.assertFalse(os`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 32, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 164, in test_compile_file_pathlike_ddir
    self.assertFal`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 32, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 178, in test_compile_file_pathlike_prependdir
    self.ass`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 32, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 171, in test_compile_file_pathlike_stripdir
    self.asser`
example test: `test_compileall.CompileallTestsWithSourceEpoch.test_compile_file_encoding_fallback`

### 6 × `Traceback (most recent call last): File <str>, line <n>, in wrapper return fxn(*args, **kwargs) ^^^^^^^^^^^^^^^^^^^^ File <str>, line <n>, in f script_helper.as`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 22, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 599, in f
    script_helper.assert_python_ok(*(switch +
  `
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 22, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 599, in f
    script_helper.assert_python_ok(*(switch +
  `
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 22, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 599, in f
    script_helper.assert_python_ok(*(switch +
  `
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 32, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 599, in f
    script_helper.assert_python_ok(*(switch +
  `
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 32, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 599, in f
    script_helper.assert_python_ok(*(switch +
  `
example test: `test_compileall.CommandLineTestsNoSourceEpoch.test_pep3147_paths_doubleoptimize`

### 6 × `Traceback (most recent call last): File <str>, line <n>, in wrapper return fxn(*args, **kwargs) ^^^^^^^^^^^^^^^^^^^^ File <str>, line <n>, in test_compile_dir_p`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 32, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 229, in test_compile_dir_pathlike
    self.assertFalse(os.`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 32, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 244, in test_compile_dir_pathlike_prependdir
    self.asse`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 32, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 237, in test_compile_dir_pathlike_stripdir
    self.assert`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 22, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 229, in test_compile_dir_pathlike
    self.assertFalse(os.`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 22, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 244, in test_compile_dir_pathlike_prependdir
    self.asse`
example test: `test_compileall.CompileallTestsWithSourceEpoch.test_compile_dir_pathlike`

### 4 × `Traceback (most recent call last): File <str>, line <n>, in test_free_after_iterating support.check_free_after_iterating(self, iter, self.thetype) File <str>, l`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_set.py", line 356, in test_free_after_iterating
    support.check_free_after_iterating(self, iter, self.thetype)
  File "/work/suites/cpython/Lib/test/support/__init__.py", line 1830, in check_free_after_iterating
    test`
example test: `test_set.TestFrozenSet.test_free_after_iterating`

### 4 × `Traceback (most recent call last): File <str>, line <n>, in wrapper return fxn(*args, **kwargs) ^^^^^^^^^^^^^^^^^^^^ File <str>, line <n>, in test_ignore_symlin`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 22, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 914, in test_ignore_symlink_destination
    self.assertRun`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 32, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 914, in test_ignore_symlink_destination
    self.assertRun`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 32, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 449, in test_ignore_symlink_destination
    compileall.com`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 22, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 449, in test_ignore_symlink_destination
    compileall.com`
example test: `test_compileall.CommandLineTestsNoSourceEpoch.test_ignore_symlink_destination`

### 4 × `Traceback (most recent call last): File <str>, line <n>, in wrapper return fxn(*args, **kwargs) ^^^^^^^^^^^^^^^^^^^^ File <str>, line <n>, in test_include_file_`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 22, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 783, in test_include_file_no_arg
    self.assertRunOK('-i'`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 22, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 770, in test_include_file_with_arg
    self.assertRunOK('-`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 32, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 783, in test_include_file_no_arg
    self.assertRunOK('-i'`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 32, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 770, in test_include_file_with_arg
    self.assertRunOK('-`
example test: `test_compileall.CommandLineTestsNoSourceEpoch.test_include_file_no_arg`

### 4 × `Traceback (most recent call last): File <str>, line <n>, in wrapper return fxn(*args, **kwargs) ^^^^^^^^^^^^^^^^^^^^ File <str>, line <n>, in test_multiple_opti`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 22, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 886, in test_multiple_optimization_levels
    self.assertR`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 32, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 886, in test_multiple_optimization_levels
    self.assertR`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 32, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 420, in test_multiple_optimization_levels
    compileall.c`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 22, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 420, in test_multiple_optimization_levels
    compileall.c`
example test: `test_compileall.CommandLineTestsNoSourceEpoch.test_multiple_optimization_levels`

### 4 × `Traceback (most recent call last): File <str>, line <n>, in wrapper return fxn(*args, **kwargs) ^^^^^^^^^^^^^^^^^^^^ File <str>, line <n>, in test_strip_and_pre`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 22, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 859, in test_strip_and_prepend
    self.assertRunOK("-s", `
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 32, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 859, in test_strip_and_prepend
    self.assertRunOK("-s", `
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 32, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 388, in test_strip_and_prepend
    compileall.compile_dir(`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 22, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 388, in test_strip_and_prepend
    compileall.compile_dir(`
example test: `test_compileall.CommandLineTestsNoSourceEpoch.test_strip_and_prepend`

### 4 × `Traceback (most recent call last): File <str>, line <n>, in wrapper return fxn(*args, **kwargs) ^^^^^^^^^^^^^^^^^^^^ File <str>, line <n>, in wrapper return fxn`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 22, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 22, in wrapper
    return fxn(*args, **kwargs)
           `
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 22, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 22, in wrapper
    return fxn(*args, **kwargs)
           `
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 32, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 22, in wrapper
    return fxn(*args, **kwargs)
           `
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 32, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 22, in wrapper
    return fxn(*args, **kwargs)
           `
example test: `test_compileall.CommandLineTestsNoSourceEpoch.test_force`

### 2 × `ModuleNotFoundError(<str>)`

distinct messages:
- `ModuleNotFoundError("No module named 'pyclbr'")`
- `ModuleNotFoundError("No module named 'audioop'")`
example test: `test_pyclbr`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in feed self._parser.Parse(data, isFinal) pyexpat.error: Byte <str> is not a member of the (<n>-bit) AS`

distinct messages:
- `Traceback (most recent call last):
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/xml/sax/expatreader.py", line 211, in feed
    self._parser.Parse(data, isFinal)
pyexpat.error: Byte "194" is not a member of the (7-bit) ASCII character set.

During handling of the above exception`
- `Traceback (most recent call last):
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/xml/sax/expatreader.py", line 211, in feed
    self._parser.Parse(data, isFinal)
pyexpat.error: Byte "194" is not a member of the (7-bit) ASCII character set.

During handling of the above exception`
example test: `test_sax.ParseTest.test_parseString_text`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in feed self._parser.Parse(data, isFinal) pyexpat.error: The markup in the document preceding the root `

distinct messages:
- `Traceback (most recent call last):
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/xml/sax/expatreader.py", line 211, in feed
    self._parser.Parse(data, isFinal)
pyexpat.error: The markup in the document preceding the root element must be well-formed.

During handling of the abo`
- `Traceback (most recent call last):
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/xml/sax/expatreader.py", line 211, in feed
    self._parser.Parse(data, isFinal)
pyexpat.error: The markup in the document preceding the root element must be well-formed.

During handling of the abo`
example test: `test_sax.ParseTest.test_parseString_bytes`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_attribute_name_interning self.assertIs(x_key, y_key) AssertionError: <str> is not <str>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/pickletester.py", line 3161, in test_attribute_name_interning
    self.assertIs(x_key, y_key)
AssertionError: 'bar' is not 'bar'`
example test: `test_pickle.CDumpPickle_LoadPickle.test_attribute_name_interning`

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

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_xmlgen_encoding self.assertEqual(result.getvalue(), AssertionError: b<str> != b<str>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_sax.py", line 541, in test_xmlgen_encoding
    self.assertEqual(result.getvalue(),
AssertionError: b'\xf[201 chars]n\x00\xff\xfe<\x00d\x00o\x00c\x00\xff\xfe \x00[85 chars]\x00' != b'\xf[201 chars]n\x00<\x00d\x00o\x00c\x00 `
example test: `test_sax.BytesXmlgenTest.test_xmlgen_encoding`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_xmlgen_encoding_bytes self.assertEqual(result.getvalue(), AssertionError: b<str> != b<str>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_sax.py", line 596, in test_xmlgen_encoding_bytes
    self.assertEqual(result.getvalue(),
AssertionError: b'\xf[201 chars]n\x00\xff\xfe<\x00d\x00o\x00c\x00\xff\xfe \x00[98 chars]\x00' != b'\xf[201 chars]n\x00<\x00d\x00o\x00`
example test: `test_sax.BytesXmlgenTest.test_xmlgen_encoding_bytes`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in wrapper return fxn(*args, **kwargs) ^^^^^^^^^^^^^^^^^^^^ File <str>, line <n>, in test_compile_dir_m`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 32, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 293, in test_compile_dir_maxlevels
    compileall.compile_`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 22, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 293, in test_compile_dir_maxlevels
    compileall.compile_`
example test: `test_compileall.CompileallTestsWithSourceEpoch.test_compile_dir_maxlevels`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in wrapper return fxn(*args, **kwargs) ^^^^^^^^^^^^^^^^^^^^ File <str>, line <n>, in test_compile_files`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 32, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 137, in test_compile_files
    self.assertTrue(compileall.`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 22, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 137, in test_compile_files
    self.assertTrue(compileall.`
example test: `test_compileall.CompileallTestsWithSourceEpoch.test_compile_files`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in wrapper return fxn(*args, **kwargs) ^^^^^^^^^^^^^^^^^^^^ File <str>, line <n>, in test_compile_path `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 32, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 186, in test_compile_path
    self.assertTrue(compileall.c`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 22, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 186, in test_compile_path
    self.assertTrue(compileall.c`
example test: `test_compileall.CompileallTestsWithSourceEpoch.test_compile_path`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in wrapper return fxn(*args, **kwargs) ^^^^^^^^^^^^^^^^^^^^ File <str>, line <n>, in test_compiles_as_m`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 22, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 806, in test_compiles_as_much_as_possible
    self.assertR`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 32, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 806, in test_compiles_as_much_as_possible
    self.assertR`
example test: `test_compileall.CommandLineTestsNoSourceEpoch.test_compiles_as_much_as_possible`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in wrapper return fxn(*args, **kwargs) ^^^^^^^^^^^^^^^^^^^^ File <str>, line <n>, in test_d_compile_err`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 22, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 742, in test_d_compile_error
    self.assertRegex(out, b'F`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 32, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 742, in test_d_compile_error
    self.assertRegex(out, b'F`
example test: `test_compileall.CommandLineTestsNoSourceEpoch.test_d_compile_error`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in wrapper return fxn(*args, **kwargs) ^^^^^^^^^^^^^^^^^^^^ File <str>, line <n>, in test_d_runtime_err`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 22, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 746, in test_d_runtime_error
    self.assertRunOK('-q', '-`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 32, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 746, in test_d_runtime_error
    self.assertRunOK('-q', '-`
example test: `test_compileall.CommandLineTestsNoSourceEpoch.test_d_runtime_error`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in wrapper return fxn(*args, **kwargs) ^^^^^^^^^^^^^^^^^^^^ File <str>, line <n>, in test_ddir_empty_on`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 32, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 339, in test_ddir_empty_only_one_worker
    return self._t`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 22, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 339, in test_ddir_empty_only_one_worker
    return self._t`
example test: `test_compileall.CompileallTestsWithSourceEpoch.test_ddir_empty_only_one_worker`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in wrapper return fxn(*args, **kwargs) ^^^^^^^^^^^^^^^^^^^^ File <str>, line <n>, in test_ddir_only_one`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 32, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 330, in test_ddir_only_one_worker
    return self._test_dd`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 22, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 330, in test_ddir_only_one_worker
    return self._test_dd`
example test: `test_compileall.CompileallTestsWithSourceEpoch.test_ddir_only_one_worker`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in wrapper return fxn(*args, **kwargs) ^^^^^^^^^^^^^^^^^^^^ File <str>, line <n>, in test_duplicated_le`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 22, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 1061, in test_duplicated_levels
    self.compile_dir(optim`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 32, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 1061, in test_duplicated_levels
    self.compile_dir(optim`
example test: `test_compileall.HardlinkDedupTestsNoSourceEpoch.test_duplicated_levels`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in wrapper return fxn(*args, **kwargs) ^^^^^^^^^^^^^^^^^^^^ File <str>, line <n>, in test_import self.c`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 22, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 1096, in test_import
    self.compile_dir()
  File "/work/`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 32, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 1096, in test_import
    self.compile_dir()
  File "/work/`
example test: `test_compileall.HardlinkDedupTestsNoSourceEpoch.test_import`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in wrapper return fxn(*args, **kwargs) ^^^^^^^^^^^^^^^^^^^^ File <str>, line <n>, in test_include_bad_f`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 22, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 759, in test_include_bad_file
    self.assertFalse(os.path`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 32, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 759, in test_include_bad_file
    self.assertFalse(os.path`
example test: `test_compileall.CommandLineTestsNoSourceEpoch.test_include_bad_file`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in wrapper return fxn(*args, **kwargs) ^^^^^^^^^^^^^^^^^^^^ File <str>, line <n>, in test_include_on_st`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 22, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 797, in test_include_on_stdin
    self.assertNotCompiled(f`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 32, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 797, in test_include_on_stdin
    self.assertNotCompiled(f`
example test: `test_compileall.CommandLineTestsNoSourceEpoch.test_include_on_stdin`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in wrapper return fxn(*args, **kwargs) ^^^^^^^^^^^^^^^^^^^^ File <str>, line <n>, in test_larger_than_3`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 32, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 103, in test_larger_than_32_bit_times
    self.assertTrue(`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 22, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 103, in test_larger_than_32_bit_times
    self.assertTrue(`
example test: `test_compileall.CompileallTestsWithSourceEpoch.test_larger_than_32_bit_times`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in wrapper return fxn(*args, **kwargs) ^^^^^^^^^^^^^^^^^^^^ File <str>, line <n>, in test_multiple_dirs`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 22, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 733, in test_multiple_dirs
    self.assertRunOK('-q', self`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 32, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 733, in test_multiple_dirs
    self.assertRunOK('-q', self`
example test: `test_compileall.CommandLineTestsNoSourceEpoch.test_multiple_dirs`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in wrapper return fxn(*args, **kwargs) ^^^^^^^^^^^^^^^^^^^^ File <str>, line <n>, in test_multiple_runs`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 22, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 624, in test_multiple_runs
    self.assertRunOK('-q', self`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 32, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 624, in test_multiple_runs
    self.assertRunOK('-q', self`
example test: `test_compileall.CommandLineTestsNoSourceEpoch.test_multiple_runs`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in wrapper return fxn(*args, **kwargs) ^^^^^^^^^^^^^^^^^^^^ File <str>, line <n>, in test_no_args_compi`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 22, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 558, in test_no_args_compiles_path
    self.assertRunOK(**`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 32, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 558, in test_no_args_compiles_path
    self.assertRunOK(**`
example test: `test_compileall.CommandLineTestsNoSourceEpoch.test_no_args_compiles_path`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in wrapper return fxn(*args, **kwargs) ^^^^^^^^^^^^^^^^^^^^ File <str>, line <n>, in test_no_args_respe`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 22, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 586, in test_no_args_respects_quiet_flag
    noisy = self.`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 32, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 586, in test_no_args_respects_quiet_flag
    noisy = self.`
example test: `test_compileall.CommandLineTestsNoSourceEpoch.test_no_args_respects_quiet_flag`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in wrapper return fxn(*args, **kwargs) ^^^^^^^^^^^^^^^^^^^^ File <str>, line <n>, in test_optimize comp`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 32, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 217, in test_optimize
    compileall.compile_dir(self.dire`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 22, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 217, in test_optimize
    compileall.compile_dir(self.dire`
example test: `test_compileall.CompileallTestsWithSourceEpoch.test_optimize`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in wrapper return fxn(*args, **kwargs) ^^^^^^^^^^^^^^^^^^^^ File <str>, line <n>, in test_prepend_only `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 32, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 372, in test_prepend_only
    compileall.compile_dir(path,`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 22, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 372, in test_prepend_only
    compileall.compile_dir(path,`
example test: `test_compileall.CompileallTestsWithSourceEpoch.test_prepend_only`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in wrapper return fxn(*args, **kwargs) ^^^^^^^^^^^^^^^^^^^^ File <str>, line <n>, in test_pyc_invalidat`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 22, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 819, in test_pyc_invalidation_mode
    self.assertRunOK('-`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 32, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 819, in test_pyc_invalidation_mode
    self.assertRunOK('-`
example test: `test_compileall.CommandLineTestsNoSourceEpoch.test_pyc_invalidation_mode`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in wrapper return fxn(*args, **kwargs) ^^^^^^^^^^^^^^^^^^^^ File <str>, line <n>, in test_quiet noisy =`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 22, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 711, in test_quiet
    noisy = self.assertRunOK(self.pkgdi`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 32, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 711, in test_quiet
    noisy = self.assertRunOK(self.pkgdi`
example test: `test_compileall.CommandLineTestsNoSourceEpoch.test_quiet`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in wrapper return fxn(*args, **kwargs) ^^^^^^^^^^^^^^^^^^^^ File <str>, line <n>, in test_recompilation`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 22, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 1071, in test_recompilation
    self.compile_dir()
  File `
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 32, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 1071, in test_recompilation
    self.compile_dir()
  File `
example test: `test_compileall.HardlinkDedupTestsNoSourceEpoch.test_recompilation`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in wrapper return fxn(*args, **kwargs) ^^^^^^^^^^^^^^^^^^^^ File <str>, line <n>, in test_recursion_con`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 22, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 655, in test_recursion_control
    self.assertRunOK('-q', `
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 32, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 655, in test_recursion_control
    self.assertRunOK('-q', `
example test: `test_compileall.CommandLineTestsNoSourceEpoch.test_recursion_control`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in wrapper return fxn(*args, **kwargs) ^^^^^^^^^^^^^^^^^^^^ File <str>, line <n>, in test_recursion_lim`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 22, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 674, in test_recursion_limit
    self.assertRunOK('-q', '-`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 32, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 674, in test_recursion_limit
    self.assertRunOK('-q', '-`
example test: `test_compileall.CommandLineTestsNoSourceEpoch.test_recursion_limit`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in wrapper return fxn(*args, **kwargs) ^^^^^^^^^^^^^^^^^^^^ File <str>, line <n>, in test_regexp self.a`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 22, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 724, in test_regexp
    self.assertRunOK('-q', '-x', r'ba[`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 32, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 724, in test_regexp
    self.assertRunOK('-q', '-x', r'ba[`
example test: `test_compileall.CommandLineTestsNoSourceEpoch.test_regexp`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in wrapper return fxn(*args, **kwargs) ^^^^^^^^^^^^^^^^^^^^ File <str>, line <n>, in test_silent self.a`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 22, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 720, in test_silent
    self.assertNotEqual(b'', quiet)
As`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 32, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 720, in test_silent
    self.assertNotEqual(b'', quiet)
As`
example test: `test_compileall.CommandLineTestsNoSourceEpoch.test_silent`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in wrapper return fxn(*args, **kwargs) ^^^^^^^^^^^^^^^^^^^^ File <str>, line <n>, in test_strip_only co`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 32, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 353, in test_strip_only
    compileall.compile_dir(path, q`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 22, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 353, in test_strip_only
    compileall.compile_dir(path, q`
example test: `test_compileall.CompileallTestsWithSourceEpoch.test_strip_only`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in wrapper return fxn(*args, **kwargs) ^^^^^^^^^^^^^^^^^^^^ File <str>, line <n>, in test_symlink_loop `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 22, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 705, in test_symlink_loop
    self.assertRunOK('-q', self.`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 32, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 705, in test_symlink_loop
    self.assertRunOK('-q', self.`
example test: `test_compileall.CommandLineTestsNoSourceEpoch.test_symlink_loop`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in wrapper return fxn(*args, **kwargs) ^^^^^^^^^^^^^^^^^^^^ File <str>, line <n>, in test_year_2038_mti`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 32, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 93, in test_year_2038_mtime_compilation
    self.assertTru`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 22, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 93, in test_year_2038_mtime_compilation
    self.assertTru`
example test: `test_compileall.CompileallTestsWithSourceEpoch.test_year_2038_mtime_compilation`

### 1 × `AttributeError(<str>)`

distinct messages:
- `AttributeError("'NoneType' object has no attribute 'MethInstance'")`
example test: `test_call`

### 1 × `CPython driver timed out after 60000ms while test_htmlparser.HTMLParserTestCase.test_eof_no_quadratic_complexity`

distinct messages:
- `CPython driver timed out after 60000ms while test_htmlparser.HTMLParserTestCase.test_eof_no_quadratic_complexity`
example test: `test_htmlparser.HTMLParserTestCase.test_eof_no_quadratic_complexity`

### 1 × `CPython driver timed out after 60000ms while test_math.MathTests.test_sumprod_stress`

distinct messages:
- `CPython driver timed out after 60000ms while test_math.MathTests.test_sumprod_stress`
example test: `test_math.MathTests.test_sumprod_stress`

### 1 × `CPython driver timed out after 60000ms while test_tokenize.TestRoundtrip.test_random_files`

distinct messages:
- `CPython driver timed out after 60000ms while test_tokenize.TestRoundtrip.test_random_files`
example test: `test_tokenize.TestRoundtrip.test_random_files`

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

### 1 × `ImportError(<str>)`

distinct messages:
- `ImportError("cannot import name 'ALLOW_MISSING' from 'posixpath' (/opt/elide/lib/resources/python/python-home/lib/python3.12/posixpath.py)")`
example test: `test_posixpath`

### 1 × `ipaddress.AddressValueError: At most <n> colons permitted in <str> During handling of the above exception, another exception occurred: Traceback (most recent ca`

distinct messages:
- `ipaddress.AddressValueError: At most 8 colons permitted in '0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:`
example test: `test_ipaddress.AddressTestCase_v6.test_bad_address_split_v6_too_long`

### 1 × `ModuleNotFoundError: No module named <str> During handling of the above exception, another exception occurred: Traceback (most recent call last): File <str>, li`

distinct messages:
- `ModuleNotFoundError: No module named 'foo'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_builtin.py", line 836, in test_exec_builtins_mapping_import
    self.assertRaisesRegex(ImportError, "__import`
example test: `test_builtin.BuiltinTest.test_exec_builtins_mapping_import`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in runTest raise self.failureException(self.format_failure(new.getvalue())) AssertionError: Failed doct`

distinct messages:
- `Traceback (most recent call last):
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/doctest.py", line 2257, in runTest
    raise self.failureException(self.format_failure(new.getvalue()))
AssertionError: Failed doctest test for test.test_extcall
  File "/work/suites/cpython/Lib/tes`
example test: `test_extcall`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test self.assertTrue(in_table_a1(<str>)) AssertionError: False is not true`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_stringprep.py", line 10, in test
    self.assertTrue(in_table_a1("\u0221"))
AssertionError: False is not true`
example test: `test_stringprep.StringprepTests.test`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test___builtins__ self.assertIs(self.b.__builtins__, builtins_dict) ^^^^^^^^^^^^^^^^^^^ AttributeErr`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_funcattrs.py", line 84, in test___builtins__
    self.assertIs(self.b.__builtins__, builtins_dict)
                  ^^^^^^^^^^^^^^^^^^^
AttributeError: 'function' object has no attribute '__builtins__'`
example test: `test_funcattrs.FunctionPropertiesTest.test___builtins__`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_add self.assertTrue(len(self.fs) == <n>) AssertionError: False is not true`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_weakset.py", line 229, in test_add
    self.assertTrue(len(self.fs) == 1)
AssertionError: False is not true`
example test: `test_weakset.TestWeakSet.test_add`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_annotations eq(<str>) File <str>, line <n>, in assertAnnotationEqual self.assertEqual(actual, e`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_future_stmt/test_future.py", line 255, in test_annotations
    eq("{i for i in (1, 2, 3)}")
  File "/work/suites/cpython/Lib/test/test_future_stmt/test_future.py", line 169, in assertAnnotationEqual
    self.assertEqual(ac`
example test: `test_future_stmt.test_future.AnnotationsFutureTestCase.test_annotations`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_annotations_constant_fold codes = [(i.opname, i.argval) for i in dis.get_instructions(g)] ^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_positional_only_arg.py", line 443, in test_annotations_constant_fold
    codes = [(i.opname, i.argval) for i in dis.get_instructions(g)]
                                           ^^^^^^^^^^^^^^^^^^^^^^^
  File "/opt/elide`
example test: `test_positional_only_arg.PositionalOnlyTestCase.test_annotations_constant_fold`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_assigned_attributes self.assertIs(getattr(wrapper, name), getattr(wrapped, name)) AssertionErro`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_reprlib.py", line 810, in test_assigned_attributes
    self.assertIs(getattr(wrapper, name), getattr(wrapped, name))
AssertionError: () is not ()`
example test: `test_reprlib.TestRecursiveRepr.test_assigned_attributes`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_atexit_after_shutdown rc, out, err = assert_python_ok(<str>, <str><str>/work/suites/cpython/Lib`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_threading.py", line 2129, in test_atexit_after_shutdown
    rc, out, err = assert_python_ok("-c", """if True:
                   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/support/script_helpe`
example test: `test_threading.AtexitTests.test_atexit_after_shutdown`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_attr_syntax self._run_check(<str>, [(<str>, <str>, [(<str>, <str>)])]) File <str>, line <n>, in`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_htmlparser.py", line 941, in test_attr_syntax
    self._run_check("<a foo==bar>", [('starttag', 'a', [('foo', '=bar')])])
  File "/work/suites/cpython/Lib/test/test_htmlparser.py", line 124, in _run_check
    self.fail("re`
example test: `test_htmlparser.AttributesTestCase.test_attr_syntax`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_attr_values self._run_check(<str>, File <str>, line <n>, in _run_check self.fail(<str> + Assert`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_htmlparser.py", line 960, in test_attr_values
    self._run_check("<a b=\v c=\xa0>",
  File "/work/suites/cpython/Lib/test/test_htmlparser.py", line 124, in _run_check
    self.fail("received events did not match expected `
example test: `test_htmlparser.AttributesTestCase.test_attr_values`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_badfuture3 self.check_syntax_error(cm.exception, <str>, <n>, <n>) File <str>, line <n>, in chec`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_future_stmt/test_future.py", line 58, in test_badfuture3
    self.check_syntax_error(cm.exception, "badsyntax_future3", 3, 24)
  File "/work/suites/cpython/Lib/test/test_future_stmt/test_future.py", line 25, in check_synta`
example test: `test_future_stmt.test_future.FutureTest.test_badfuture3`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_badfuture8 self.check_syntax_error(cm.exception, <str>, <n>, <n>) File <str>, line <n>, in chec`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_future_stmt/test_future.py", line 83, in test_badfuture8
    self.check_syntax_error(cm.exception, "badsyntax_future8", 3, 24)
  File "/work/suites/cpython/Lib/test/test_future_stmt/test_future.py", line 25, in check_synta`
example test: `test_future_stmt.test_future.FutureTest.test_badfuture8`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_badfuture9 self.check_syntax_error(cm.exception, <str>, <n>, <n>) File <str>, line <n>, in chec`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_future_stmt/test_future.py", line 88, in test_badfuture9
    self.check_syntax_error(cm.exception, "badsyntax_future9", 3, 39)
  File "/work/suites/cpython/Lib/test/test_future_stmt/test_future.py", line 25, in check_synta`
example test: `test_future_stmt.test_future.FutureTest.test_badfuture9`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_broken_invalid_end_tag self._run_check(html, expected) File <str>, line <n>, in _run_check self`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_htmlparser.py", line 703, in test_broken_invalid_end_tag
    self._run_check(html, expected)
  File "/work/suites/cpython/Lib/test/test_htmlparser.py", line 124, in _run_check
    self.fail("received events did not match e`
example test: `test_htmlparser.HTMLParserTestCase.test_broken_invalid_end_tag`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_Buffer self.assertIsInstance(sample(b<str>), Buffer) AssertionError: b<str> is not an instance `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_collections.py", line 1965, in test_Buffer
    self.assertIsInstance(sample(b"x"), Buffer)
AssertionError: b'x' is not an instance of <class 'collections.abc.Buffer'>`
example test: `test_collections.TestCollectionABCs.test_Buffer`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_callbacks self.assertEqual( AssertionError: <str> != <str> - あ[<<n>><<n>><<n>><<n>><<n>><<n>>] `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_codeccallbacks.py", line 260, in test_callbacks
    self.assertEqual(
AssertionError: 'あ[<92><117><51><120><120><120>]' != 'あ[<92><117><51>]xxx'
- あ[<92><117><51><120><120><120>]
+ あ[<92><117><51>]xxx`
example test: `test_codeccallbacks.CodecCallbackTest.test_callbacks`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_carloverre_multi_inherit_invalid self.fail(<str>) AssertionError: setattr through indirect base`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_descr.py", line 4436, in test_carloverre_multi_inherit_invalid
    self.fail("setattr through indirect base types should be rejected")
AssertionError: setattr through indirect base types should be rejected`
example test: `test_descr.ClassPropertiesAndMethods.test_carloverre_multi_inherit_invalid`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_cdata_section self._run_check(html, expected, collector=EventCollector(autocdata=True)) ^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_htmlparser.py", line 899, in test_cdata_section
    self._run_check(html, expected, collector=EventCollector(autocdata=True))
                                              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suite`
example test: `test_htmlparser.HTMLParserTestCase.test_cdata_section`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_class self._check_path_limitations(<str>) File <str>, line <n>, in _check_path_limitations len(`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_reprlib.py", line 713, in test_class
    self._check_path_limitations('bar')
  File "/work/suites/cpython/Lib/test/test_reprlib.py", line 674, in _check_path_limitations
    len(importlib.util.cache_from_source("x.py")) - `
example test: `test_reprlib.LongReprTest.test_class`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_comments self._run_check(html, expected) File <str>, line <n>, in _run_check self.fail(<str> + `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_htmlparser.py", line 539, in test_comments
    self._run_check(html, expected)
  File "/work/suites/cpython/Lib/test/test_htmlparser.py", line 124, in _run_check
    self.fail("received events did not match expected events`
example test: `test_htmlparser.HTMLParserTestCase.test_comments`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_custom_builder_only_end_ns self.assertEqual(builder, [ AssertionError: [(<str>, <str>), (<str>,`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_xml_etree.py", line 767, in test_custom_builder_only_end_ns
    self.assertEqual(builder, [
AssertionError: [('end-ns', ''), ('end-ns', 'p'), ('end-ns', 'a')] != [('end-ns', 'a'), ('end-ns', 'p'), ('end-ns', '')]`
example test: `test_xml_etree.ElementTreeTest.test_custom_builder_only_end_ns`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_custom_find_class self.assertEqual(loads(b<str>), (<str>, <str>)) AssertionError: <built-in fun`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/pickletester.py", line 1265, in test_custom_find_class
    self.assertEqual(loads(b'cmath\nlog\n.'), ('math', 'log'))
AssertionError: <built-in function log> != ('math', 'log')`
example test: `test_pickle.CUnpicklerTests.test_custom_find_class`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_debug_expressions_are_raw_strings self.assertEqual(f<str>, <str>\\\\N{OX}\<str>) AssertionError`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_fstring.py", line 1769, in test_debug_expressions_are_raw_strings
    self.assertEqual(f'{b"\N{OX}"=}', 'b"\\N{OX}"=b\'\\\\N{OX}\'')
AssertionError: 'b"🐂"=b\'\\\\N{OX}\'' != 'b"\\N{OX}"=b\'\\\\N{OX}\''
- b"🐂"=b'\\N{OX}'
`
example test: `test_fstring.TestCase.test_debug_expressions_are_raw_strings`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_decodehelper self.assertEqual(b<str>.decode(<str>, <str>), <str>) AssertionError: <str> != <str`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_codeccallbacks.py", line 978, in test_decodehelper
    self.assertEqual(b"\\uyyyy0".decode("raw-unicode-escape", "test.posreturn"), "<?>0")
AssertionError: '<?>\\0' != '<?>0'
- <?>\0
?    -
+ <?>0`
example test: `test_codeccallbacks.CodecCallbackTest.test_decodehelper`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_descrdoc check(FileIO.closed, <str>) # getset descriptor ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_descr.py", line 3248, in test_descrdoc
    check(FileIO.closed, "True if the file is closed") # getset descriptor
    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_descr.py",`
example test: `test_descr.ClassPropertiesAndMethods.test_descrdoc`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_directory_compiled compiled_name = py_compile.compile(script_name, doraise=True) ^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_runpy.py", line 696, in test_directory_compiled
    compiled_name = py_compile.compile(script_name, doraise=True)
                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/opt/elide/lib/resources/python/py`
example test: `test_runpy.RunPathTestCase.test_directory_compiled`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_docstring_copy2 self.assertEqual(p2.__doc__, <str>) AssertionError: <str> != <str> - doc <n> + `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_property.py", line 432, in test_docstring_copy2
    self.assertEqual(p2.__doc__, "user")
AssertionError: 'doc 2' != 'user'
- doc 2
+ user`
example test: `test_property.PropertySubclassTests.test_docstring_copy2`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_doctype self.assertEqual(parser.close(), AssertionError: None != (<str>, <str>)`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_xml_etree.py", line 3607, in test_doctype
    self.assertEqual(parser.close(),
AssertionError: None != ('html', '-//W3C//DTD XHTML 1.0 Transitio[63 chars]dtd')`
example test: `test_xml_etree.TreeBuilderTest.test_doctype`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_encoding check(<str>, <str>) File <str>, line <n>, in check self.assertEqual(ET.XML(xml).text, `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_xml_etree.py", line 1069, in test_encoding
    check("iso-8859-1", '\xbd')
  File "/work/suites/cpython/Lib/test/test_xml_etree.py", line 1066, in check
    self.assertEqual(ET.XML(xml).text, body)
AssertionError: 'Â½' != `
example test: `test_xml_etree.ElementTreeTest.test_encoding`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_encoding self.assertEqual(serialize(elem, encoding=enc), AssertionError: b<str> != b<str>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_xml_etree.py", line 3927, in test_encoding
    self.assertEqual(serialize(elem, encoding=enc),
AssertionError: b'\xf[205 chars]n\x00\xff\xfe<\x00t\x00a\x00g\x00\xff\xfe>\x00[118 chars]\x00' != b'\xf[205 chars]n\x00<\x00t\x`
example test: `test_xml_etree.IOTest.test_encoding`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_entity self.assertEqual(str(cm.exception), AssertionError: <str> != <str> - undefined entity &e`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_xml_etree.py", line 1156, in test_entity
    self.assertEqual(str(cm.exception),
AssertionError: 'undefined entity &entity;: line 1, column 18' != 'undefined entity: line 1, column 10'
- undefined entity &entity;: line 1, `
example test: `test_xml_etree.ElementTreeTest.test_entity`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_eof_in_comments self._run_check(html, expected) File <str>, line <n>, in _run_check self.fail(<`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_htmlparser.py", line 770, in test_eof_in_comments
    self._run_check(html, expected)
  File "/work/suites/cpython/Lib/test/test_htmlparser.py", line 124, in _run_check
    self.fail("received events did not match expected`
example test: `test_htmlparser.HTMLParserTestCase.test_eof_in_comments`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_eof_in_declarations self._run_check(html, expected) File <str>, line <n>, in _run_check self.fa`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_htmlparser.py", line 787, in test_eof_in_declarations
    self._run_check(html, expected)
  File "/work/suites/cpython/Lib/test/test_htmlparser.py", line 124, in _run_check
    self.fail("received events did not match expe`
example test: `test_htmlparser.HTMLParserTestCase.test_eof_in_declarations`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_error compiled = compileall.compile_dir(self.directory) ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 490, in test_error
    compiled = compileall.compile_dir(self.directory)
               ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/compile`
example test: `test_compileall.EncodingTest.test_error`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_error_position self.assertEqual(self._get_error(<str>).position, (<n>, <n>)) AssertionError: Tu`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_xml_etree.py", line 4171, in test_error_position
    self.assertEqual(self._get_error('<tag>&foo;</tag>').position, (1, 5))
AssertionError: Tuples differ: (1, 10) != (1, 5)

First differing element 1:
10
5

- (1, 10)
?    `
example test: `test_xml_etree.ParseErrorTest.test_error_position`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_exit_exception_traceback self.assertEqual( AssertionError: Lists differ: [(<str>__step_run_and_`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_contextlib.py", line 859, in test_exit_exception_traceback
    self.assertEqual(
AssertionError: Lists differ: [('te[203 chars] ('__step_run_and_handle_result', 'result = co[173 chars]xc')] != [('te[203 chars] ('__aexit__'`
example test: `test_contextlib_async.TestAsyncExitStack.test_exit_exception_traceback`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_expat_entityresolver_enabled self.assertEqual(result.getvalue(), start + AssertionError: b<str>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_sax.py", line 1038, in test_expat_entityresolver_enabled
    self.assertEqual(result.getvalue(), start +
AssertionError: b'<?xml version="1.0" encoding="iso-8859-1"?>\n<doc></doc>' != b'<?xml version="1.0" encoding="iso-88`
example test: `test_sax.ExpatReaderTest.test_expat_entityresolver_enabled`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_expat_external_dtd_enabled with self.assertRaises(URLError): ^^^^^^^^^^^^^^^^^^^^^^^^^^^ Assert`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_sax.py", line 996, in test_expat_external_dtd_enabled
    with self.assertRaises(URLError):
         ^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: URLError not raised`
example test: `test_sax.ExpatReaderTest.test_expat_external_dtd_enabled`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_expat_inpsource_character_stream self.assertEqual(result.getvalue(), xml_test_out) AssertionErr`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_sax.py", line 1181, in test_expat_inpsource_character_stream
    self.assertEqual(result.getvalue(), xml_test_out)
AssertionError: b'<?x[1536 chars]mplemented...\n</LI>\n\n\t\t</UL>\n\t\n\n\xc2\xb5\n\t\n</HTML>' != b'<?x[1`
example test: `test_sax.ExpatReaderTest.test_expat_inpsource_character_stream`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_expat_text_file self.assertEqual(result.getvalue(), xml_test_out) AssertionError: b<str> != b<s`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_sax.py", line 904, in test_expat_text_file
    self.assertEqual(result.getvalue(), xml_test_out)
AssertionError: b'<?x[1536 chars]mplemented...\n</LI>\n\n\t\t</UL>\n\t\n\n\xc2\xb5\n\t\n</HTML>' != b'<?x[1536 chars]mplement`
example test: `test_sax.ExpatReaderTest.test_expat_text_file`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_find_class unpickler.find_class(<str>, <str>) TypeError: <str> object has no attribute <str>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/pickletester.py", line 1233, in test_find_class
    unpickler.find_class('builtins', 'str.upper')
TypeError: 'NoneType' object has no attribute 'str.upper'`
example test: `test_pickle.CUnpicklerTests.test_find_class`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_flush_reparse_deferral_disabled self.assert_event_tags(parser, []) # i.e. no elements started ^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_xml_etree.py", line 1682, in test_flush_reparse_deferral_disabled
    self.assert_event_tags(parser, [])  # i.e. no elements started
    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_xml_etr`
example test: `test_xml_etree.XMLPullParserTest.test_flush_reparse_deferral_disabled`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_flush_reparse_deferral_disabled self.assertEqual(result.getvalue(), start) # i.e. no elements s`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_sax.py", line 1254, in test_flush_reparse_deferral_disabled
    self.assertEqual(result.getvalue(), start)  # i.e. no elements started
    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: b'<?xml version="1.0" en`
example test: `test_sax.ExpatReaderTest.test_flush_reparse_deferral_disabled`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_flush_reparse_deferral_enabled self.assert_event_tags(parser, []) # i.e. no elements started ^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_xml_etree.py", line 1656, in test_flush_reparse_deferral_enabled
    self.assert_event_tags(parser, [])  # i.e. no elements started
    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_xml_etre`
example test: `test_xml_etree.XMLPullParserTest.test_flush_reparse_deferral_enabled`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_flush_reparse_deferral_enabled self.assertEqual(result.getvalue(), start) # i.e. no elements st`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_sax.py", line 1230, in test_flush_reparse_deferral_enabled
    self.assertEqual(result.getvalue(), start)  # i.e. no elements started
    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: b'<?xml version="1.0" enc`
example test: `test_sax.ExpatReaderTest.test_flush_reparse_deferral_enabled`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_handlers self.assertIsNone(self.systemID) AssertionError: <str> is not None`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_sax.py", line 1493, in test_handlers
    self.assertIsNone(self.systemID)
AssertionError: '' is not None`
example test: `test_sax.LexicalHandlerTest.test_handlers`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_handlers self.parser.parse(source) File <str>, line <n>, in parse xmlreader.IncrementalParser.p`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_sax.py", line 1554, in test_handlers
    self.parser.parse(source)
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/xml/sax/expatreader.py", line 105, in parse
    xmlreader.IncrementalParser.parse(self, `
example test: `test_sax.CDATAHandlerTest.test_handlers`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_hash_nan self.assertEqual(hash(value), object.__hash__(value)) AssertionError: <n> != <n>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_float.py", line 610, in test_hash_nan
    self.assertEqual(hash(value), object.__hash__(value))
AssertionError: 0 != 2146959360`
example test: `test_float.GeneralFloatCases.test_hash_nan`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_infinity_numbers self.assertAnnotationEqual(<str>, expected=inf) File <str>, line <n>, in asser`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_future_stmt/test_future.py", line 356, in test_infinity_numbers
    self.assertAnnotationEqual("1e1000", expected=inf)
  File "/work/suites/cpython/Lib/test/test_future_stmt/test_future.py", line 169, in assertAnnotationEq`
example test: `test_future_stmt.test_future.AnnotationsFutureTestCase.test_infinity_numbers`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_instance self._check_path_limitations(<str>) File <str>, line <n>, in _check_path_limitations l`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_reprlib.py", line 724, in test_instance
    self._check_path_limitations('baz')
  File "/work/suites/cpython/Lib/test/test_reprlib.py", line 674, in _check_path_limitations
    len(importlib.util.cache_from_source("x.py"))`
example test: `test_reprlib.LongReprTest.test_instance`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_intersection self.assertEqual(len(i), len(self.items2)) AssertionError: <n> != <n>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_weakset.py", line 107, in test_intersection
    self.assertEqual(len(i), len(self.items2))
AssertionError: 3 != 2`
example test: `test_weakset.TestWeakSet.test_intersection`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_issue41287 self.assertEqual(doc, <str>, AssertionError: <str> != <str> - This is a subclass of `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_property.py", line 338, in test_issue41287
    self.assertEqual(doc, "issue 41287 is fixed",
AssertionError: 'This is a subclass of property' != 'issue 41287 is fixed'
- This is a subclass of property
+ issue 41287 is fixe`
example test: `test_property.PropertySubclassTests.test_issue41287`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_iterparse self.assertEqual(str(cm.exception), AssertionError: <str> != <str> - Content is not a`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_xml_etree.py", line 649, in test_iterparse
    self.assertEqual(str(cm.exception),
AssertionError: 'Content is not allowed in trailing section.' != 'junk after document element: line 1, column 12'
- Content is not allowed `
example test: `test_xml_etree.ElementTreeTest.test_iterparse`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_keywords_in_subclass u = subclass_with_init(<n>, newarg=<n>) ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_float.py", line 266, in test_keywords_in_subclass
    u = subclass_with_init(2.5, newarg=3)
        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
TypeError: float() got an unexpected keyword argument 'newarg'`
example test: `test_float.GeneralFloatCases.test_keywords_in_subclass`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_load_global self.assertEqual(self.loads(b<str>), <n>) ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/pickletester.py", line 1188, in test_load_global
    self.assertEqual(self.loads(b'\x80\x04cm\xc3\xb6dule\ngl\xc3\xb6bal\n.'), 42)
                     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suite`
example test: `test_pickle.CUnpicklerTests.test_load_global`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_load_stack_global self.assertEqual(self.loads(b<str>), <n>) ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/pickletester.py", line 1204, in test_load_stack_global
    self.assertEqual(self.loads(b'\x80\x04\x8c\x07m\xc3\xb6dule\x8c\x07gl\xc3\xb6bal\x93.'), 42)
                     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`
example test: `test_pickle.CUnpicklerTests.test_load_stack_global`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_method self._check_path_limitations(<str>) File <str>, line <n>, in _check_path_limitations len`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_reprlib.py", line 736, in test_method
    self._check_path_limitations('qux')
  File "/work/suites/cpython/Lib/test/test_reprlib.py", line 674, in _check_path_limitations
    len(importlib.util.cache_from_source("x.py")) -`
example test: `test_reprlib.LongReprTest.test_method`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_module self._check_path_limitations(self.pkgname) File <str>, line <n>, in _check_path_limitati`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_reprlib.py", line 686, in test_module
    self._check_path_limitations(self.pkgname)
  File "/work/suites/cpython/Lib/test/test_reprlib.py", line 674, in _check_path_limitations
    len(importlib.util.cache_from_source("x.`
example test: `test_reprlib.LongReprTest.test_module`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_mutating_decode_handler self.assertEqual(data.decode(encoding, <str>), <str>) AssertionError: <`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_codeccallbacks.py", line 1161, in test_mutating_decode_handler
    self.assertEqual(data.decode(encoding, "test.mutating"), "\u4242")
AssertionError: '䉂䉂' != '䉂'
- 䉂䉂
? -
+ 䉂`
example test: `test_codeccallbacks.CodecCallbackTest.test_mutating_decode_handler`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_mutating_decode_handler_unicode_escape check(br<str>, <str>, r<str>) File <str>, line <n>, in c`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_codeccallbacks.py", line 1184, in test_mutating_decode_handler_unicode_escape
    check(br'\x0n\z', '\u0404\n\\z', r"invalid escape sequence '\z'")
  File "/work/suites/cpython/Lib/test/test_codeccallbacks.py", line 1181, `
example test: `test_codeccallbacks.CodecCallbackTest.test_mutating_decode_handler_unicode_escape`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_nameescape self.assertEqual(sin.encode(<str>, <str>), sout) AssertionError: b<str> != b<str>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_codeccallbacks.py", line 172, in test_nameescape
    self.assertEqual(sin.encode("ascii", "namereplace"), sout)
AssertionError: b'a?????' != b'a\\N{NOT SIGN}\\N{ETHIOPIC SYLLABLE SEE}\\[50 chars]ffff'`
example test: `test_codeccallbacks.CodecCallbackTest.test_nameescape`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_new_builtins_issue_43102 self.assertEqual(new_func.__globals__[<str>], {}) AssertionError: {<st`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_collections.py", line 702, in test_new_builtins_issue_43102
    self.assertEqual(new_func.__globals__['__builtins__'], {})
AssertionError: {'__name__': 'builtins', '__doc__': None, [5785 chars]or'>} != {}
Diff is 6293 char`
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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_operator_compare_digest self._test_compare_digest(operator_compare_digest) File <str>, line <n>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_hmac.py", line 561, in test_operator_compare_digest
    self._test_compare_digest(operator_compare_digest)
  File "/work/suites/cpython/Lib/test/test_hmac.py", line 647, in _test_compare_digest
    self.assertRaises(TypeEr`
example test: `test_hmac.CompareDigestTestCase.test_operator_compare_digest`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_parse_string self.assertEqual(e.attrib[<str>], <str>) AssertionError: <str> != <str> + $£€𐅻 - `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_xml_etree.py", line 3717, in test_parse_string
    self.assertEqual(e.attrib['value'], '$\xa3\u20ac\U0001017b')
AssertionError: '$Â£â\x82¬ð\x90\x85»' != '$£€𐅻'
+ $£€𐅻
- $Â£â¬ð- »`
example test: `test_xml_etree.XMLParserTest.test_parse_string`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_possible_set_operations with self.assertWarnsRegex(FutureWarning, <str>) as w: ^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_re.py", line 1216, in test_possible_set_operations
    with self.assertWarnsRegex(FutureWarning, 'Possible set difference') as w:
         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError`
example test: `test_re.ReTests.test_possible_set_operations`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_prefer_explicit_doc self.assertEqual(PropertySub(doc=<str>).__doc__, <str>) AssertionError: <st`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_property.py", line 439, in test_prefer_explicit_doc
    self.assertEqual(PropertySub(doc="explicit doc").__doc__, "explicit doc")
AssertionError: 'This is a subclass of property' != 'explicit doc'
- This is a subclass of p`
example test: `test_property.PropertySubclassTests.test_prefer_explicit_doc`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_property_no_doc_on_getter self.assertEqual(PropertySub(NoDoc()).__doc__, None) AssertionError: `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_property.py", line 466, in test_property_no_doc_on_getter
    self.assertEqual(PropertySub(NoDoc()).__doc__, None)
AssertionError: 'This is a subclass of property' != None`
example test: `test_property.PropertySubclassTests.test_property_no_doc_on_getter`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_property_with_slots_and_doc_slot_docstring_present self.assertEqual(<str>, p.__doc__) # new in `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_property.py", line 321, in test_property_with_slots_and_doc_slot_docstring_present
    self.assertEqual("what's up", p.__doc__)  # new in 3.12: This gets set.
                                  ^^^^^^^^^
AttributeError: 'sl`
example test: `test_property.PropertySubclassTests.test_property_with_slots_and_doc_slot_docstring_present`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_property_with_slots_no_docstring p = slotted_prop(undocumented_getter) # New in <n>: no Attribu`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_property.py", line 291, in test_property_with_slots_no_docstring
    p = slotted_prop(undocumented_getter)  # New in 3.12: no AttributeError
        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: 'slotted_prop' object h`
example test: `test_property.PropertySubclassTests.test_property_with_slots_no_docstring`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_pymain_run_command self.assertSigInt([<str>, <str>], cwd=self.ham.parent) File <str>, line <n>,`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_runpy.py", line 829, in test_pymain_run_command
    self.assertSigInt(["-c", "import ham"], cwd=self.ham.parent)
  File "/work/suites/cpython/Lib/test/test_runpy.py", line 790, in assertSigInt
    self.assertTrue(proc.stde`
example test: `test_runpy.TestExit.test_pymain_run_command`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_pymain_run_command_run_module self.assertSigInt( File <str>, line <n>, in assertSigInt self.ass`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_runpy.py", line 823, in test_pymain_run_command_run_module
    self.assertSigInt(
  File "/work/suites/cpython/Lib/test/test_runpy.py", line 790, in assertSigInt
    self.assertTrue(proc.stderr.endswith("\nKeyboardInterrup`
example test: `test_runpy.TestExit.test_pymain_run_command_run_module`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_pymain_run_file self.assertSigInt([self.ham]) File <str>, line <n>, in assertSigInt self.assert`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_runpy.py", line 794, in test_pymain_run_file
    self.assertSigInt([self.ham])
  File "/work/suites/cpython/Lib/test/test_runpy.py", line 790, in assertSigInt
    self.assertTrue(proc.stderr.endswith("\nKeyboardInterrupt\n`
example test: `test_runpy.TestExit.test_pymain_run_file`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_pymain_run_file_runpy_run_module self.assertSigInt([run_module], cwd=tmp) File <str>, line <n>,`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_runpy.py", line 807, in test_pymain_run_file_runpy_run_module
    self.assertSigInt([run_module], cwd=tmp)
  File "/work/suites/cpython/Lib/test/test_runpy.py", line 790, in assertSigInt
    self.assertTrue(proc.stderr.end`
example test: `test_runpy.TestExit.test_pymain_run_file_runpy_run_module`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_pymain_run_file_runpy_run_module_as_main self.assertSigInt([run_module_as_main], cwd=tmp) File `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_runpy.py", line 820, in test_pymain_run_file_runpy_run_module_as_main
    self.assertSigInt([run_module_as_main], cwd=tmp)
  File "/work/suites/cpython/Lib/test/test_runpy.py", line 790, in assertSigInt
    self.assertTrue`
example test: `test_runpy.TestExit.test_pymain_run_file_runpy_run_module_as_main`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_pymain_run_module self.assertSigInt([<str>, ham.stem], cwd=ham.parent) File <str>, line <n>, in`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_runpy.py", line 836, in test_pymain_run_module
    self.assertSigInt(["-m", ham.stem], cwd=ham.parent)
  File "/work/suites/cpython/Lib/test/test_runpy.py", line 790, in assertSigInt
    self.assertTrue(proc.stderr.endswit`
example test: `test_runpy.TestExit.test_pymain_run_module`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_pymain_run_stdin self.assertSigInt([], input=<str>, cwd=self.ham.parent) File <str>, line <n>, `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_runpy.py", line 832, in test_pymain_run_stdin
    self.assertSigInt([], input="import ham", cwd=self.ham.parent)
  File "/work/suites/cpython/Lib/test/test_runpy.py", line 790, in assertSigInt
    self.assertTrue(proc.stde`
example test: `test_runpy.TestExit.test_pymain_run_stdin`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_recursive_repr self.assertRegex(repr(d), ^^^^^^^ RecursionError: maximum recursion depth exceed`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_defaultdict.py", line 136, in test_recursive_repr
    self.assertRegex(repr(d),
                     ^^^^^^^
RecursionError: maximum recursion depth exceeded`
example test: `test_defaultdict.TestDefaultDict.test_recursive_repr`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_reference_cycle script_helper.assert_python_ok(<str>, textwrap.dedent(r<str><str>/work/suites/c`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_structseq.py", line 214, in test_reference_cycle
    script_helper.assert_python_ok("-c", textwrap.dedent(r"""
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 166, in assert_python_ok
    return _asse`
example test: `test_structseq.StructSeqTest.test_reference_cycle`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_run_module self._check_module(depth) File <str>, line <n>, in _check_module forget(mod_name) Fi`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_runpy.py", line 436, in test_run_module
    self._check_module(depth)
  File "/work/suites/cpython/Lib/test/test_runpy.py", line 295, in _check_module
    forget(mod_name)
  File "/work/suites/cpython/Lib/test/support/impo`
example test: `test_runpy.RunModuleTestCase.test_run_module`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_run_module_alter_sys self._check_module(depth, alter_sys=True) File <str>, line <n>, in _check_`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_runpy.py", line 519, in test_run_module_alter_sys
    self._check_module(depth, alter_sys=True)
  File "/work/suites/cpython/Lib/test/test_runpy.py", line 295, in _check_module
    forget(mod_name)
  File "/work/suites/cpy`
example test: `test_runpy.RunModuleTestCase.test_run_module_alter_sys`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_run_module_in_namespace_package self._check_module(depth, namespace=True, parent_namespaces=Tru`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_runpy.py", line 441, in test_run_module_in_namespace_package
    self._check_module(depth, namespace=True, parent_namespaces=True)
  File "/work/suites/cpython/Lib/test/test_runpy.py", line 295, in _check_module
    forget`
example test: `test_runpy.RunModuleTestCase.test_run_module_in_namespace_package`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_run_name forget(mod_name) File <str>, line <n>, in forget unlink(importlib.util.cache_from_sour`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_runpy.py", line 541, in test_run_name
    forget(mod_name)
  File "/work/suites/cpython/Lib/test/support/import_helper.py", line 50, in forget
    unlink(importlib.util.cache_from_source(source, optimization=opt))
  File "`
example test: `test_runpy.RunModuleTestCase.test_run_name`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_run_namespace_package self._check_package(depth, namespace=True) File <str>, line <n>, in _chec`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_runpy.py", line 509, in test_run_namespace_package
    self._check_package(depth, namespace=True)
  File "/work/suites/cpython/Lib/test/test_runpy.py", line 336, in _check_package
    forget(mod_name)
  File "/work/suites/`
example test: `test_runpy.RunModuleTestCase.test_run_namespace_package`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_run_namespace_package_in_namespace_package self._check_package(depth, namespace=True, parent_na`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_runpy.py", line 514, in test_run_namespace_package_in_namespace_package
    self._check_package(depth, namespace=True, parent_namespaces=True)
  File "/work/suites/cpython/Lib/test/test_runpy.py", line 336, in _check_packa`
example test: `test_runpy.RunModuleTestCase.test_run_namespace_package_in_namespace_package`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_run_package self._check_package(depth) File <str>, line <n>, in _check_package forget(mod_name)`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_runpy.py", line 446, in test_run_package
    self._check_package(depth)
  File "/work/suites/cpython/Lib/test/test_runpy.py", line 336, in _check_package
    forget(mod_name)
  File "/work/suites/cpython/Lib/test/support/i`
example test: `test_runpy.RunModuleTestCase.test_run_package`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_run_package_alter_sys self._check_package(depth, alter_sys=True) File <str>, line <n>, in _chec`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_runpy.py", line 524, in test_run_package_alter_sys
    self._check_package(depth, alter_sys=True)
  File "/work/suites/cpython/Lib/test/test_runpy.py", line 336, in _check_package
    forget(mod_name)
  File "/work/suites/`
example test: `test_runpy.RunModuleTestCase.test_run_package_alter_sys`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_run_package_in_namespace_package self._check_package(depth, parent_namespaces=True) File <str>,`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_runpy.py", line 504, in test_run_package_in_namespace_package
    self._check_package(depth, parent_namespaces=True)
  File "/work/suites/cpython/Lib/test/test_runpy.py", line 336, in _check_package
    forget(mod_name)
  `
example test: `test_runpy.RunModuleTestCase.test_run_package_in_namespace_package`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_script_compiled compiled_name = py_compile.compile(script_name, doraise=True) ^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_runpy.py", line 680, in test_script_compiled
    compiled_name = py_compile.compile(script_name, doraise=True)
                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/opt/elide/lib/resources/python/pytho`
example test: `test_runpy.RunPathTestCase.test_script_compiled`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_setslice_negative_steps with self.assertRaises(ValueError): ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Asser`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_xml_etree.py", line 3868, in test_setslice_negative_steps
    with self.assertRaises(ValueError):
         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: ValueError not raised`
example test: `test_xml_etree.ElementSlicingTest.test_setslice_negative_steps`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_setslice_steps with self.assertRaises(ValueError): ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ AssertionError`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_xml_etree.py", line 3848, in test_setslice_steps
    with self.assertRaises(ValueError):
         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: ValueError not raised`
example test: `test_xml_etree.ElementSlicingTest.test_setslice_steps`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_simpleops self.assertEqual(str(cm.exception), <str>) AssertionError: <str> != <str> - list.inde`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_xml_etree.py", line 349, in test_simpleops
    self.assertEqual(str(cm.exception), 'list.remove(x): x not in list')
AssertionError: 'list.index(x): x not in list' != 'list.remove(x): x not in list'
- list.index(x): x not i`
example test: `test_xml_etree.ElementTreeTest.test_simpleops`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_source_segment_padded self.assertEqual( AssertionError: <str> != <str> def fun(self) -> None: -`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_ast/test_ast.py", line 2462, in test_source_segment_padded
    self.assertEqual(
AssertionError: '    def fun(self) -> None:\n        "ЖЖЖ' != '    def fun(self) -> None:\n        "ЖЖЖЖЖ"'
      def fun(self) -> None:
-   `
example test: `test_ast.test_ast.EndPositionTests.test_source_segment_padded`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_subclass_doctype with self.assertWarnsRegex(RuntimeWarning, <str>): ^^^^^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_xml_etree.py", line 3679, in test_subclass_doctype
    with self.assertWarnsRegex(RuntimeWarning, 'doctype'):
         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: RuntimeWarning not triggered`
example test: `test_xml_etree.XMLParserTest.test_subclass_doctype`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_symmetric_difference self.assertEqual(len(i), len(self.items) + len(self.items2)) AssertionErro`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_weakset.py", line 141, in test_symmetric_difference
    self.assertEqual(len(i), len(self.items) + len(self.items2))
AssertionError: 6 != 5`
example test: `test_weakset.TestWeakSet.test_symmetric_difference`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_syshook_no_logdir_default_format self.assertIn(<str>, out) AssertionError: <str> not found in <`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_cgitb.py", line 48, in test_syshook_no_logdir_default_format
    self.assertIn("ValueError", out)
AssertionError: 'ValueError' not found in ''`
example test: `test_cgitb.TestCgitb.test_syshook_no_logdir_default_format`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_syshook_no_logdir_text_format self.assertIn(<str>, out) AssertionError: <str> not found in <str`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_cgitb.py", line 64, in test_syshook_no_logdir_text_format
    self.assertIn("ValueError", out)
AssertionError: 'ValueError' not found in ''`
example test: `test_cgitb.TestCgitb.test_syshook_no_logdir_text_format`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_type self._check_path_limitations(<str>) File <str>, line <n>, in _check_path_limitations len(i`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_reprlib.py", line 695, in test_type
    self._check_path_limitations('foo')
  File "/work/suites/cpython/Lib/test/test_reprlib.py", line 674, in _check_path_limitations
    len(importlib.util.cache_from_source("x.py")) - l`
example test: `test_reprlib.LongReprTest.test_type`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_unicodedecodeerror self.check_exceptionobjectargs( File <str>, line <n>, in check_exceptionobje`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_codeccallbacks.py", line 362, in test_unicodedecodeerror
    self.check_exceptionobjectargs(
  File "/work/suites/cpython/Lib/test/test_codeccallbacks.py", line 309, in check_exceptionobjectargs
    self.assertRaises(TypeE`
example test: `test_codeccallbacks.CodecCallbackTest.test_unicodedecodeerror`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_unicodeencodeerror self.check_exceptionobjectargs( File <str>, line <n>, in check_exceptionobje`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_codeccallbacks.py", line 330, in test_unicodeencodeerror
    self.check_exceptionobjectargs(
  File "/work/suites/cpython/Lib/test/test_codeccallbacks.py", line 309, in check_exceptionobjectargs
    self.assertRaises(TypeE`
example test: `test_codeccallbacks.CodecCallbackTest.test_unicodeencodeerror`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_unicodetranslateerror self.check_exceptionobjectargs( File <str>, line <n>, in check_exceptiono`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_codeccallbacks.py", line 374, in test_unicodetranslateerror
    self.check_exceptionobjectargs(
  File "/work/suites/cpython/Lib/test/test_codeccallbacks.py", line 309, in check_exceptionobjectargs
    self.assertRaises(Ty`
example test: `test_codeccallbacks.CodecCallbackTest.test_unicodetranslateerror`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_uninamereplace self.assertEqual(sin.encode(<str>, <str>), sout) AssertionError: b<str> != b<str`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_codeccallbacks.py", line 145, in test_uninamereplace
    self.assertEqual(sin.encode("ascii", "test.uninamereplace"), sout)
AssertionError: b'\x1b[1mNOT SIGN\x1b[0m\x1b[1mETHIOPIC SYLLABLE SEE\x1b[0[60 chars]b[0m' != b'\x1`
example test: `test_codeccallbacks.CodecCallbackTest.test_uninamereplace`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_union self.assertEqual(len(u), len(self.items) + len(self.items2)) AssertionError: <n> != <n>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_weakset.py", line 87, in test_union
    self.assertEqual(len(u), len(self.items) + len(self.items2))
AssertionError: 6 != 5`
example test: `test_weakset.TestWeakSet.test_union`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_valid self.assertEqual(getattr(T, <str>), <n>) ^^^^^^^^^^^^^^^^^^^^ AttributeError: type object`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_unicode_identifiers.py", line 12, in test_valid
    self.assertEqual(getattr(T, "\u03bc"), 2)
                     ^^^^^^^^^^^^^^^^^^^^
AttributeError: type object 'T' has no attribute 'μ'`
example test: `test_unicode_identifiers.PEP3131Test.test_valid`

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
AssertionError: 'Z' unexpectedly found in {<weakref at 896794246; to 'UserString' at 1500479407>, <weakref at 2133917416; to`
example test: `test_weakset.TestWeakSet.test_weak_destroy_and_mutate_while_iterating`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_weak_destroy_while_iterating self.assertEqual(len(s), len(items)) AssertionError: <n> != <n>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_weakset.py", line 367, in test_weak_destroy_while_iterating
    self.assertEqual(len(s), len(items))
AssertionError: 3 != 2`
example test: `test_weakset.TestWeakSet.test_weak_destroy_while_iterating`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_weakref self.assertEqual(flag, True) AssertionError: False != True`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_xml_etree.py", line 2540, in test_weakref
    self.assertEqual(flag, True)
AssertionError: False != True`
example test: `test_xml_etree.BasicElementTest.test_weakref`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_write_to_binary_file_with_bom self.assertEqual(f.read(), AssertionError: b<str> != b<str>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_xml_etree.py", line 4053, in test_write_to_binary_file_with_bom
    self.assertEqual(f.read(),
AssertionError: b"\xf[201 chars]n\x00\xff\xfe<\x00s\x00i\x00t\x00e\x00\xff\xfe[60 chars]\x00" != b"\xf[201 chars]n\x00<\x00s\x0`
example test: `test_xml_etree.IOTest.test_write_to_binary_file_with_bom`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_write_to_user_binary_writer_with_bom self.assertEqual(raw.getvalue(), AssertionError: b<str> !=`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_xml_etree.py", line 4133, in test_write_to_user_binary_writer_with_bom
    self.assertEqual(raw.getvalue(),
AssertionError: b"\xf[200 chars]\n\x00\xff\xfe<\x00s\x00i\x00t\x00e\x00\xff\xfe \x00/\x00>\x00" != b"\xf[200 chars`
example test: `test_xml_etree.IOTest.test_write_to_user_binary_writer_with_bom`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_zipfile_compiled compiled_name = py_compile.compile(script_name, doraise=True) ^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_runpy.py", line 722, in test_zipfile_compiled
    compiled_name = py_compile.compile(script_name, doraise=True)
                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/opt/elide/lib/resources/python/pyth`
example test: `test_runpy.RunPathTestCase.test_zipfile_compiled`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in testCbrt self.assertRaises(TypeError, math.cbrt) ^^^^^^^^^ AttributeError: module <str> has no attri`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_math.py", line 390, in testCbrt
    self.assertRaises(TypeError, math.cbrt)
                                 ^^^^^^^^^
AttributeError: module 'math' has no attribute 'cbrt'`
example test: `test_math.MathTests.testCbrt`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in testCompressIPv6Address self.assertEqual(compressed, str(ipaddress.IPv6Interface( AssertionError: <s`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_ipaddress.py", line 2616, in testCompressIPv6Address
    self.assertEqual(compressed, str(ipaddress.IPv6Interface(
AssertionError: '::ffff:255.255.255.255/128' != '::ffff:ffff:ffff/128'
- ::ffff:255.255.255.255/128
+ ::fff`
example test: `test_ipaddress.IpaddrUnitTest.testCompressIPv6Address`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in testExp2 self.assertRaises(TypeError, math.exp2) ^^^^^^^^^ AttributeError: module <str> has no attri`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_math.py", line 520, in testExp2
    self.assertRaises(TypeError, math.exp2)
                                 ^^^^^^^^^
AttributeError: module 'math' has no attribute 'exp2'`
example test: `test_math.MathTests.testExp2`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in testIPv6IPv4MappedStringRepresentation self.assertEqual(str(ipv6_ipv4_addr), ipv6_ipv4_str) Assertio`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_ipaddress.py", line 1352, in testIPv6IPv4MappedStringRepresentation
    self.assertEqual(str(ipv6_ipv4_addr), ipv6_ipv4_str)
AssertionError: '::ffff:102:304' != '::ffff:1.2.3.4'
- ::ffff:102:304
?         ^ ^ ^
+ ::ffff:1.`
example test: `test_ipaddress.IpaddrUnitTest.testIPv6IPv4MappedStringRepresentation`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in testLeaks self.assertEqual(Foo.count, <n>) AssertionError: <n> != <n>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_scope.py", line 478, in testLeaks
    self.assertEqual(Foo.count, 0)
AssertionError: 100 != 0`
example test: `test_scope.ScopeTests.testLeaks`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in testNetworkV4HashCollisions self.assertNotEqual( AssertionError: <n> == <n>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_ipaddress.py", line 2779, in testNetworkV4HashCollisions
    self.assertNotEqual(
AssertionError: 1062731264 == 1062731264`
example test: `test_ipaddress.IpaddrUnitTest.testNetworkV4HashCollisions`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in testNetworkV6HashCollisions self.assertNotEqual( AssertionError: <n> == <n>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_ipaddress.py", line 2794, in testNetworkV6HashCollisions
    self.assertNotEqual(
AssertionError: 864691128455135224 == 864691128455135224`
example test: `test_ipaddress.IpaddrUnitTest.testNetworkV6HashCollisions`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in wrapper return func(*args, **kwargs) ^^^^^^^^^^^^^^^^^^^^^ File <str>, line <n>, in test_bad_getattr`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/support/__init__.py", line 1211, in wrapper
    return func(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/pickletester.py", line 2044, in test_bad_getattr
    s = self.dumps(x, proto)
 `
example test: `test_pickle.CPicklingErrorTests.test_bad_getattr`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in wrapper return fxn(*args, **kwargs) ^^^^^^^^^^^^^^^^^^^^ File <str>, line <n>, in test_magic_number `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 22, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 128, in test_magic_number
    self.recreation_check(b'\0\0`
example test: `test_compileall.CompileallTestsWithoutSourceEpoch.test_magic_number`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in wrapper return fxn(*args, **kwargs) ^^^^^^^^^^^^^^^^^^^^ File <str>, line <n>, in test_mtime self.re`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 22, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 123, in test_mtime
    self.recreation_check(struct.pack('`
example test: `test_compileall.CompileallTestsWithoutSourceEpoch.test_mtime`

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

### 1 × `TypeError: property.__set_name__() missing <n> required positional arguments: <str> and <str> During handling of the above exception, another exception occurred`

distinct messages:
- `TypeError: property.__set_name__() missing 2 required positional arguments: 'a' and 'b'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_property.py", line 229, in test_property_set_name_incorrect_args`
example test: `test_property.PropertyTests.test_property_set_name_incorrect_args`

### 1 × `TypeError: range() missing <n> required positional argument: <str> During handling of the above exception, another exception occurred: Traceback (most recent ca`

distinct messages:
- `TypeError: range() missing 1 required positional argument: 'a'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_range.py", line 95, in test_range_constructor_error_messages
    with self.assertRaisesRe`
example test: `test_range.RangeTest.test_range_constructor_error_messages`
