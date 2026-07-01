# Impact-ordered failures

## By root-cause signature

### 20 × `SystemError(<str>)`

distinct messages:
- `SystemError('NFIUnsatisfiedLinkError: Dynamic loading not supported')`
- `SystemError("Option python.IsolateNativeModules is set to 'false' and a second GraalPy context attempted to load a native module '_testcapi' from path '/opt/elide/lib/resources/python/python-home/lib/graalpy25.0/modules/_testcapi.graalpy250-312-native-x86_64-linux.so'. At least one context in this p`
- `SystemError("Option python.IsolateNativeModules is set to 'false' and a second GraalPy context attempted to load a native module '_cpython_unicodedata' from path '/opt/elide/lib/resources/python/python-home/lib/graalpy25.0/modules/_cpython_unicodedata.graalpy250-312-native-x86_64-linux.so'. At least`
- `SystemError("Option python.IsolateNativeModules is set to 'false' and a second GraalPy context attempted to load a native module 'pyexpat' from path '/opt/elide/lib/resources/python/python-home/lib/graalpy25.0/modules/pyexpat.graalpy250-312-native-x86_64-linux.so'. At least one context in this proce`
- `SystemError("Option python.IsolateNativeModules is set to 'false' and a second GraalPy context attempted to load a native module 'termios' from path '/opt/elide/lib/resources/python/python-home/lib/graalpy25.0/modules/termios.graalpy250-312-native-x86_64-linux.so'. At least one context in this proce`
example test: `test_descr`

### 13 × `Traceback (most recent call last): File <str>, line <n>, in setUp (self.module.bisect_right, [], <n>, <n>), ^^^^^^^^^^^^^^^^^^^^^^^^ AttributeError: <str> objec`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_bisect.py", line 35, in setUp
    (self.module.bisect_right, [], 1, 0),
     ^^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: 'NoneType' object has no attribute 'bisect_right'`
example test: `test_bisect.TestBisectC.test_backcompatibility`

### 13 × `Traceback (most recent call last): File <str>, line <n>, in test_buffer self.assertRaises(BufferError, a.append, a[<n>]) AssertionError: BufferError not raised `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_array.py", line 1070, in test_buffer
    self.assertRaises(BufferError, a.append, a[0])
AssertionError: BufferError not raised by append`
example test: `test_array.ByteTest.test_buffer`

### 13 × `Traceback (most recent call last): File <str>, line <n>, in test_free_after_iterating support.check_free_after_iterating(self, iter, array.array, File <str>, li`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_array.py", line 1156, in test_free_after_iterating
    support.check_free_after_iterating(self, iter, array.array,
  File "/work/suites/cpython/Lib/test/support/__init__.py", line 1830, in check_free_after_iterating
    te`
example test: `test_array.ByteTest.test_free_after_iterating`

### 13 × `Traceback (most recent call last): File <str>, line <n>, in test_reverse_iterator_picking d = pickle.dumps((itorig, orig), proto) ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_array.py", line 366, in test_reverse_iterator_picking
    d = pickle.dumps((itorig, orig), proto)
        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/copyreg.py", `
example test: `test_array.ByteTest.test_reverse_iterator_picking`

### 13 × `Traceback (most recent call last): File <str>, line <n>, in test_weakref p = weakref.proxy(s) ^^^^^^^^^^^^^^^^ TypeError: cannot create weak reference to <str> `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_array.py", line 1098, in test_weakref
    p = weakref.proxy(s)
        ^^^^^^^^^^^^^^^^
TypeError: cannot create weak reference to 'array.array' object`
example test: `test_array.ByteTest.test_weakref`

### 12 × `Traceback (most recent call last): File <str>, line <n>, in test_initialize_with_unicode self.assertIn(<str>, str(cm.exception)) AssertionError: <str> not found`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_array.py", line 1144, in test_initialize_with_unicode
    self.assertIn("cannot use a unicode array", str(cm.exception))
AssertionError: 'cannot use a unicode array' not found in "'str' object cannot be interpreted as an i`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_array.py", line 1144, in test_initialize_with_unicode
    self.assertIn("cannot use a unicode array", str(cm.exception))
AssertionError: 'cannot use a unicode array' not found in 'must be real number, not str'`
example test: `test_array.ByteTest.test_initialize_with_unicode`

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

### 9 × `ModuleNotFoundError(<str>)`

distinct messages:
- `ModuleNotFoundError("No module named '_testinternalcapi'")`
- `ModuleNotFoundError("No module named '_symtable'")`
- `ModuleNotFoundError("No module named 'pyclbr'")`
- `ModuleNotFoundError("No module named 'audioop'")`
example test: `test_dis`

### 8 × `Traceback (most recent call last): File <str>, line <n>, in runTest raise self.failureException(self.format_failure(new.getvalue())) AssertionError: Failed doct`

distinct messages:
- `Traceback (most recent call last):
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/doctest.py", line 2257, in runTest
    raise self.failureException(self.format_failure(new.getvalue()))
AssertionError: Failed doctest test for test.test_genexps.__test__.doctests
  File "/work/suit`
- `Traceback (most recent call last):
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/doctest.py", line 2257, in runTest
    raise self.failureException(self.format_failure(new.getvalue()))
AssertionError: Failed doctest test for test.test_unpack_ex.__test__.doctests
  File "/work/su`
- `Traceback (most recent call last):
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/doctest.py", line 2257, in runTest
    raise self.failureException(self.format_failure(new.getvalue()))
AssertionError: Failed doctest test for test.test_doctest.test_doctest.SampleClass.a_classmeth`
- `Traceback (most recent call last):
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/doctest.py", line 2257, in runTest
    raise self.failureException(self.format_failure(new.getvalue()))
AssertionError: Failed doctest test for test.test_doctest.test_doctest.test_CLI
  File "/work/`
- `Traceback (most recent call last):
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/doctest.py", line 2257, in runTest
    raise self.failureException(self.format_failure(new.getvalue()))
AssertionError: Failed doctest test for test.test_doctest.test_doctest.test_DocTestFinder.non_`
example test: `test_genexps.__test__.doctests`

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

### 3 × `Traceback (most recent call last): File <str>, line <n>, in test_free_after_iterating support.check_free_after_iterating(self, iter, self.type2test) File <str>,`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/seq_tests.py", line 430, in test_free_after_iterating
    support.check_free_after_iterating(self, iter, self.type2test)
  File "/work/suites/cpython/Lib/test/support/__init__.py", line 1830, in check_free_after_iterating
    t`
example test: `test_tuple.TupleTest.test_free_after_iterating`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in tearDown os.rmdir(self.dir) OSError: [Errno <n>] Directory not empty: <str>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_tempfile.py", line 896, in tearDown
    os.rmdir(self.dir)
OSError: [Errno 39] Directory not empty: '/tmp/tmpvy5upvt_'`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_tempfile.py", line 896, in tearDown
    os.rmdir(self.dir)
OSError: [Errno 39] Directory not empty: '/tmp/tmpkbl4kyt4'`
example test: `test_tempfile.TestMktemp.test_basic`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_int_max_str_digits_is_per_interpreter self.assertEqual(support.run_in_subinterp(code), <n>, ^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_int.py", line 814, in test_int_max_str_digits_is_per_interpreter
    self.assertEqual(support.run_in_subinterp(code), 0,
                     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/support/__i`
example test: `test_int.IntStrDigitLimitsTests.test_int_max_str_digits_is_per_interpreter`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_select_interrupt_exc with self.assertRaises(InterruptSelect): AssertionError: InterruptSelect n`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_selectors.py", line 444, in test_select_interrupt_exc
    with self.assertRaises(InterruptSelect):
AssertionError: InterruptSelect not raised`
example test: `test_selectors.DefaultSelectorTestCase.test_select_interrupt_exc`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_select_read_write self.assertTrue(seen_read) AssertionError: False is not true`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_selectors.py", line 308, in test_select_read_write
    self.assertTrue(seen_read)
AssertionError: False is not true`
example test: `test_selectors.DefaultSelectorTestCase.test_select_read_write`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_strcoll self.assertRaises(ValueError, locale.strcoll, <str>, <str>) AssertionError: ValueError `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_locale.py", line 327, in test_strcoll
    self.assertRaises(ValueError, locale.strcoll, 'a\0', 'a')
AssertionError: ValueError not raised by _strcoll`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_locale.py", line 327, in test_strcoll
    self.assertRaises(ValueError, locale.strcoll, 'a\0', 'a')
AssertionError: ValueError not raised by _strcoll

Stdout:
testing with 'en_US.UTF-8'...`
example test: `test_locale.TestCollation.test_strcoll`

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
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 757, in test_include_bad_file
    self.assertRegex(out, b'`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 32, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 757, in test_include_bad_file
    self.assertRegex(out, b'`
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

### 2 × `Traceback (most recent call last): File <str>, line <n>, in wrapper return fxn(*args, **kwargs) ^^^^^^^^^^^^^^^^^^^^ File <str>, line <n>, in test_invalid_arg_p`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 22, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 812, in test_invalid_arg_produces_message
    out = self.a`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 32, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 812, in test_invalid_arg_produces_message
    out = self.a`
example test: `test_compileall.CommandLineTestsNoSourceEpoch.test_invalid_arg_produces_message`

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

### 2 × `Traceback (most recent call last): File <str>, line <n>, in wrapper return fxn(*args, **kwargs) ^^^^^^^^^^^^^^^^^^^^ File <str>, line <n>, in test_legacy_paths `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 22, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 614, in test_legacy_paths
    self.assertRunOK('-b', '-q',`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 32, in wrapper
    return fxn(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 614, in test_legacy_paths
    self.assertRunOK('-b', '-q',`
example test: `test_compileall.CommandLineTestsNoSourceEpoch.test_legacy_paths`

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

### 1 × `CPython driver timed out after 60000ms while test_htmlparser.HTMLParserTestCase.test_eof_no_quadratic_complexity`

distinct messages:
- `CPython driver timed out after 60000ms while test_htmlparser.HTMLParserTestCase.test_eof_no_quadratic_complexity`
example test: `test_htmlparser.HTMLParserTestCase.test_eof_no_quadratic_complexity`

### 1 × `CPython driver timed out after 60000ms while test_json.test_recursion.TestCRecursion.test_endless_recursion`

distinct messages:
- `CPython driver timed out after 60000ms while test_json.test_recursion.TestCRecursion.test_endless_recursion`
example test: `test_json.test_recursion.TestCRecursion.test_endless_recursion`

### 1 × `ImportError(<str>)`

distinct messages:
- `ImportError("cannot import name 'ALLOW_MISSING' from 'posixpath' (/opt/elide/lib/resources/python/python-home/lib/python3.12/posixpath.py)")`
example test: `test_posixpath`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in cleanup ast.AST._fields = old_value ^^^^^^^^^^^^^^^ TypeError: cannot set <str> attribute of immutab`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_ast/test_ast.py", line 74, in cleanup
    ast.AST._fields = old_value
    ^^^^^^^^^^^^^^^
TypeError: cannot set '_fields' attribute of immutable type 'ast.AST'`
example test: `test_ast.test_ast.AST_Tests.test_AST_fields_NULL_check`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in inner return func(*args, **kwds) ^^^^^^^^^^^^^^^^^^^ File <str>, line <n>, in test_TimeRE_recreation`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/support/__init__.py", line 1000, in inner
    return func(*args, **kwds)
           ^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_strptime.py", line 864, in test_TimeRE_recreation_timezone
    tm = _strptime._s`
example test: `test_strptime.CacheTests.test_TimeRE_recreation_timezone`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test___builtins__ self.assertIs(self.b.__builtins__, builtins_dict) ^^^^^^^^^^^^^^^^^^^ AttributeErr`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_funcattrs.py", line 84, in test___builtins__
    self.assertIs(self.b.__builtins__, builtins_dict)
                  ^^^^^^^^^^^^^^^^^^^
AttributeError: 'function' object has no attribute '__builtins__'`
example test: `test_funcattrs.FunctionPropertiesTest.test___builtins__`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_3611 self.assertEqual(ZeroDivisionError, cm.unraisable.exc_type) ^^^^^^^^^^^^^^^^^^^^^^ Attribu`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_raise.py", line 484, in test_3611
    self.assertEqual(ZeroDivisionError, cm.unraisable.exc_type)
                                        ^^^^^^^^^^^^^^^^^^^^^^
AttributeError: 'NoneType' object has no attribute 'exc_type'`
example test: `test_raise.TestContext.test_3611`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_add self.assertTrue(len(self.fs) == <n>) AssertionError: False is not true`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_weakset.py", line 229, in test_add
    self.assertTrue(len(self.fs) == 1)
AssertionError: False is not true`
example test: `test_weakset.TestWeakSet.test_add`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_all_freed self.assertIsNone(wr_callback()) AssertionError: <function FinalizeTestCase.test_all_`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_weakref.py", line 2108, in test_all_freed
    self.assertIsNone(wr_callback())
AssertionError: <function FinalizeTestCase.test_all_freed.<locals>.callback at 0x32edc62e> is not None`
example test: `test_weakref.FinalizeTestCase.test_all_freed`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_anext_await_raises result = self.loop.run_until_complete(do_test()) ^^^^^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_asyncgen.py", line 799, in test_anext_await_raises
    result = self.loop.run_until_complete(do_test())
             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/opt/elide/lib/resources/python/python-home/lib/python3.1`
example test: `test_asyncgen.AsyncGenAsyncioTest.test_anext_await_raises`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_anext_bad_await result = self.loop.run_until_complete(bad_awaitable()) ^^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_asyncgen.py", line 751, in test_anext_bad_await
    result = self.loop.run_until_complete(bad_awaitable())
             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/opt/elide/lib/resources/python/python-home/lib/`
example test: `test_asyncgen.AsyncGenAsyncioTest.test_anext_bad_await`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_arg_parsing for f in (self.module.bisect_left, self.module.bisect_right, ^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_bisect.py", line 380, in test_arg_parsing
    for f in (self.module.bisect_left, self.module.bisect_right,
              ^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: 'NoneType' object has no attribute 'bisect_left'`
example test: `test_bisect.TestErrorHandlingC.test_arg_parsing`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_array_is_sequence self.assertIsInstance(array.array(<str>), collections.abc.MutableSequence) As`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_array.py", line 35, in test_array_is_sequence
    self.assertIsInstance(array.array("B"), collections.abc.MutableSequence)
AssertionError: array('B') is not an instance of <class 'collections.abc.MutableSequence'>`
example test: `test_array.MiscTest.test_array_is_sequence`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_assigned_attributes self.assertIs(getattr(wrapper, name), getattr(wrapped, name)) AssertionErro`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_reprlib.py", line 810, in test_assigned_attributes
    self.assertIs(getattr(wrapper, name), getattr(wrapped, name))
AssertionError: () is not ()`
example test: `test_reprlib.TestRecursiveRepr.test_assigned_attributes`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_AST_fields_NULL_check del ast.AST._fields ^^^^^^^^^^^^^^^ TypeError: cannot set <str> attribute`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_ast/test_ast.py", line 77, in test_AST_fields_NULL_check
    del ast.AST._fields
        ^^^^^^^^^^^^^^^
TypeError: cannot set '_fields' attribute of immutable type 'ast.AST'`
example test: `test_ast.test_ast.AST_Tests.test_AST_fields_NULL_check`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_async_gen_3_arg_deprecation_warning with self.assertWarns(DeprecationWarning): AssertionError: `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_asyncgen.py", line 542, in test_async_gen_3_arg_deprecation_warning
    with self.assertWarns(DeprecationWarning):
AssertionError: DeprecationWarning not triggered`
example test: `test_asyncgen.AsyncGenTest.test_async_gen_3_arg_deprecation_warning`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_async_gen_api_01 self.assertEqual(g.__name__, <str>) ^^^^^^^^^^ AttributeError: <str> object ha`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_asyncgen.py", line 555, in test_async_gen_api_01
    self.assertEqual(g.__name__, 'gen')
                     ^^^^^^^^^^
AttributeError: 'async_generator' object has no attribute '__name__'. Did you mean: '__ne__'?`
example test: `test_asyncgen.AsyncGenTest.test_async_gen_api_01`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_async_gen_asend_throw_concurrent_with_send with self.assertRaisesRegex(RuntimeError, AssertionE`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_asyncgen.py", line 422, in test_async_gen_asend_throw_concurrent_with_send
    with self.assertRaisesRegex(RuntimeError,
AssertionError: RuntimeError not raised`
example test: `test_asyncgen.AsyncGenTest.test_async_gen_asend_throw_concurrent_with_send`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_async_gen_asend_throw_concurrent_with_throw with self.assertRaisesRegex(RuntimeError, Assertion`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_asyncgen.py", line 493, in test_async_gen_asend_throw_concurrent_with_throw
    with self.assertRaisesRegex(RuntimeError,
AssertionError: RuntimeError not raised`
example test: `test_asyncgen.AsyncGenTest.test_async_gen_asend_throw_concurrent_with_throw`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_async_gen_asyncio_aclose_06 with self.assertRaisesRegex( AssertionError: <str> does not match <`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_asyncgen.py", line 1178, in test_async_gen_asyncio_aclose_06
    with self.assertRaisesRegex(
AssertionError: "async generator ignored GeneratorExit" does not match "await wasn't used with future"`
example test: `test_asyncgen.AsyncGenAsyncioTest.test_async_gen_asyncio_aclose_06`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_async_gen_asyncio_aclose_07 self.loop.run_until_complete(run()) File <str>, line <n>, in run_un`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_asyncgen.py", line 1203, in test_async_gen_asyncio_aclose_07
    self.loop.run_until_complete(run())
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/asyncio/base_events.py", line 686, in run_until_comple`
example test: `test_asyncgen.AsyncGenAsyncioTest.test_async_gen_asyncio_aclose_07`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_async_gen_asyncio_aclose_08 self.loop.run_until_complete(run()) File <str>, line <n>, in run_un`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_asyncgen.py", line 1230, in test_async_gen_asyncio_aclose_08
    self.loop.run_until_complete(run())
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/asyncio/base_events.py", line 686, in run_until_comple`
example test: `test_asyncgen.AsyncGenAsyncioTest.test_async_gen_asyncio_aclose_08`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_async_gen_asyncio_aclose_12 self.loop.run_until_complete(run()) File <str>, line <n>, in run_un`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_asyncgen.py", line 1358, in test_async_gen_asyncio_aclose_12
    self.loop.run_until_complete(run())
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/asyncio/base_events.py", line 686, in run_until_comple`
example test: `test_asyncgen.AsyncGenAsyncioTest.test_async_gen_asyncio_aclose_12`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_async_gen_asyncio_anext_tuple_no_exceptions self.loop.run_until_complete(run()) File <str>, lin`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_asyncgen.py", line 1118, in test_async_gen_asyncio_anext_tuple_no_exceptions
    self.loop.run_until_complete(run())
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/asyncio/base_events.py", line 686, in `
example test: `test_asyncgen.AsyncGenAsyncioTest.test_async_gen_asyncio_anext_tuple_no_exceptions`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_async_gen_asyncio_gc_aclose_09 self.assertEqual(DONE, <n>) AssertionError: <n> != <n>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_asyncgen.py", line 1262, in test_async_gen_asyncio_gc_aclose_09
    self.assertEqual(DONE, 1)
AssertionError: 0 != 1`
example test: `test_asyncgen.AsyncGenAsyncioTest.test_async_gen_asyncio_gc_aclose_09`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_async_gen_asyncio_shutdown_exception_02 message, = messages ^^^^^^^^ ValueError: not enough val`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_asyncgen.py", line 1748, in test_async_gen_asyncio_shutdown_exception_02
    message, = messages
    ^^^^^^^^
ValueError: not enough values to unpack (expected 1, got 0)`
example test: `test_asyncgen.AsyncGenAsyncioTest.test_async_gen_asyncio_shutdown_exception_02`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_async_gen_athrow_throw_concurrent_with_send with self.assertRaisesRegex(RuntimeError, Assertion`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_asyncgen.py", line 455, in test_async_gen_athrow_throw_concurrent_with_send
    with self.assertRaisesRegex(RuntimeError,
AssertionError: RuntimeError not raised`
example test: `test_asyncgen.AsyncGenTest.test_async_gen_athrow_throw_concurrent_with_send`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_async_gen_athrow_throw_concurrent_with_throw with self.assertRaisesRegex(RuntimeError, Assertio`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_asyncgen.py", line 530, in test_async_gen_athrow_throw_concurrent_with_throw
    with self.assertRaisesRegex(RuntimeError,
AssertionError: RuntimeError not raised`
example test: `test_asyncgen.AsyncGenTest.test_async_gen_athrow_throw_concurrent_with_throw`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_async_gen_exception_06 with self.assertRaisesRegex(RuntimeError, AssertionError: <str> does not`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_asyncgen.py", line 265, in test_async_gen_exception_06
    with self.assertRaisesRegex(RuntimeError,
AssertionError: "async generator.*StopIteration" does not match "generator raised StopIteration"`
example test: `test_asyncgen.AsyncGenTest.test_async_gen_exception_06`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_async_gen_exception_10 with self.assertRaisesRegex(TypeError, AssertionError: <str> does not ma`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_asyncgen.py", line 345, in test_async_gen_exception_10
    with self.assertRaisesRegex(TypeError,
AssertionError: "non-None value .* async generator" does not match "can't send non-None value to a just-started generator"`
example test: `test_asyncgen.AsyncGenTest.test_async_gen_exception_10`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_async_gen_expression_02 res = self.loop.run_until_complete(run()) ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_asyncgen.py", line 1783, in test_async_gen_expression_02
    res = self.loop.run_until_complete(run())
          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/asynci`
example test: `test_asyncgen.AsyncGenAsyncioTest.test_async_gen_expression_02`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_async_gen_throw_custom_same_aclose_coro_twice nxt.throw(MyException) File <str>, line <n>, in a`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_asyncgen.py", line 1879, in test_async_gen_throw_custom_same_aclose_coro_twice
    nxt.throw(MyException)
  File "/work/suites/cpython/Lib/test/test_asyncgen.py", line 1862, in async_iterate
    async def async_iterate():
`
example test: `test_asyncgen.AsyncGenAsyncioTest.test_async_gen_throw_custom_same_aclose_coro_twice`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_async_gen_throw_custom_same_athrow_coro_twice nxt.throw(MyException) File <str>, line <n>, in a`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_asyncgen.py", line 1899, in test_async_gen_throw_custom_same_athrow_coro_twice
    nxt.throw(MyException)
  File "/work/suites/cpython/Lib/test/test_asyncgen.py", line 1882, in async_iterate
    async def async_iterate():
`
example test: `test_asyncgen.AsyncGenAsyncioTest.test_async_gen_throw_custom_same_athrow_coro_twice`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_async_gen_throw_same_aclose_coro_twice nxt.throw(GeneratorExit) StopIteration`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_asyncgen.py", line 1859, in test_async_gen_throw_same_aclose_coro_twice
    nxt.throw(GeneratorExit)
StopIteration`
example test: `test_asyncgen.AsyncGenAsyncioTest.test_async_gen_throw_same_aclose_coro_twice`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_atexit rc, out, err = script_helper.assert_python_ok(<str>, prog) ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_weakref.py", line 2135, in test_atexit
    rc, out, err = script_helper.assert_python_ok('-c', prog)
                   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/support/script_helper`
example test: `test_weakref.FinalizeTestCase.test_atexit`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_atexit_after_shutdown rc, out, err = assert_python_ok(<str>, <str><str>/work/suites/cpython/Lib`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_threading.py", line 2129, in test_atexit_after_shutdown
    rc, out, err = assert_python_ok("-c", """if True:
                   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/support/script_helpe`
example test: `test_threading.AtexitTests.test_atexit_after_shutdown`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_attr_matches self.assertEqual(self.stdcompleter.attr_matches(<str>), expected) AssertionError: `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_rlcompleter.py", line 59, in test_attr_matches
    self.assertEqual(self.stdcompleter.attr_matches('None.'), expected)
AssertionError: Lists differ: ['Non[63 chars]ir__()', 'None.__doc__', 'None.__eq__(', 'None[365 chars]_`
example test: `test_rlcompleter.TestRlcompleter.test_attr_matches`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_backcompatibility self.assertEqual(self.module.insort, self.module.insort_right) ^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_bisect.py", line 316, in test_backcompatibility
    self.assertEqual(self.module.insort, self.module.insort_right)
                     ^^^^^^^^^^^^^^^^^^
AttributeError: 'NoneType' object has no attribute 'insort'`
example test: `test_bisect.TestInsortC.test_backcompatibility`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_bad_address_split_v6_too_long assertBadSplit(long_addr) File <str>, line <n>, in assertBadSplit`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_ipaddress.py", line 400, in test_bad_address_split_v6_too_long
    assertBadSplit(long_addr)
  File "/work/suites/cpython/Lib/test/test_ipaddress.py", line 395, in assertBadSplit
    with self.assertAddressError(msg, re.es`
example test: `test_ipaddress.AddressTestCase_v6.test_bad_address_split_v6_too_long`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_bad_constructor self.assertRaises(ValueError, array.array, <str>) File <str>, line <n>, in asse`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_array.py", line 42, in test_bad_constructor
    self.assertRaises(ValueError, array.array, 'x')
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/unittest/case.py", line 778, in assertRaises
    return con`
example test: `test_array.MiscTest.test_bad_constructor`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_bad_encoding self.assertEqual(os.listdir(dir), []) AssertionError: Lists differ: [<str>] != [] `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_tempfile.py", line 1589, in test_bad_encoding
    self.assertEqual(os.listdir(dir), [])
AssertionError: Lists differ: ['6839599246571231328.tmp'] != []

First list contains 1 additional elements.
First extra element 0:
'68`
example test: `test_tempfile.TestTemporaryFile.test_bad_encoding`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_basic sd = SAX2DOMTestHelper(fin, xml.sax.make_parser(), ^^^^^^^^^^^^^^^^^^^^^ File <str>, line`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_pulldom.py", line 304, in test_basic
    sd = SAX2DOMTestHelper(fin, xml.sax.make_parser(),
                                ^^^^^^^^^^^^^^^^^^^^^
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/xml/sax/_`
example test: `test_pulldom.SAX2DOMTestCase.test_basic`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_basic self.assertRaises(MemoryError, list, range(sys.maxsize // <n>)) AssertionError: MemoryErr`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_list.py", line 38, in test_basic
    self.assertRaises(MemoryError, list, range(sys.maxsize // 2))
AssertionError: MemoryError not raised by list`
example test: `test_list.ListTest.test_basic`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_bidirectional self.assertEqual(self.db.bidirectional(<str>), <str>) AssertionError: <str> != <s`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_unicodedata.py", line 155, in test_bidirectional
    self.assertEqual(self.db.bidirectional('\uFFFE'), '')
AssertionError: 'BN' != ''
- BN`
example test: `test_unicodedata.UnicodeFunctionsTest.test_bidirectional`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_broken_invalid_end_tag self._run_check(html, expected) File <str>, line <n>, in _run_check self`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_htmlparser.py", line 703, in test_broken_invalid_end_tag
    self._run_check(html, expected)
  File "/work/suites/cpython/Lib/test/test_htmlparser.py", line 124, in _run_check
    self.fail("received events did not match e`
example test: `test_htmlparser.HTMLParserTestCase.test_broken_invalid_end_tag`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_bug_1704793 self.assertEqual(self.db.lookup(<str>), <str>) ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_unicodedata.py", line 303, in test_bug_1704793
    self.assertEqual(self.db.lookup("GOTHIC LETTER FAIHU"), '\U00010346')
                     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
SystemError: Option python.IsolateNativeMo`
example test: `test_unicodedata.UnicodeMiscTest.test_bug_1704793`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_bug_40736 with self.assertRaisesRegex(TypeError, <str>): AssertionError: <str> does not match <`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_re.py", line 2405, in test_bug_40736
    with self.assertRaisesRegex(TypeError, "got 'int'"):
AssertionError: "got 'int'" does not match "object of type 'int' has no len()"`
example test: `test_re.ReTests.test_bug_40736`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_build self.check_build(<str>) File <str>, line <n>, in check_build with support.setup_venv_with`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_cppext/__init__.py", line 31, in test_build
    self.check_build('_testcppext')
  File "/work/suites/cpython/Lib/test/test_cppext/__init__.py", line 54, in check_build
    with support.setup_venv_with_pip_setuptools_wheel(`
example test: `test_cppext.TestCPPExt.test_build`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_build_cpp03 self.check_build(<str>, std=<str>) File <str>, line <n>, in check_build with suppor`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_cppext/__init__.py", line 34, in test_build_cpp03
    self.check_build('_testcpp03ext', std='c++03')
  File "/work/suites/cpython/Lib/test/test_cppext/__init__.py", line 54, in check_build
    with support.setup_venv_with_`
example test: `test_cppext.TestCPPExt.test_build_cpp03`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_build_cpp11 self.check_build(<str>, std=<str>) File <str>, line <n>, in check_build with suppor`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_cppext/__init__.py", line 38, in test_build_cpp11
    self.check_build('_testcpp11ext', std='c++11')
  File "/work/suites/cpython/Lib/test/test_cppext/__init__.py", line 54, in check_build
    with support.setup_venv_with_`
example test: `test_cppext.TestCPPExt.test_build_cpp11`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_build_limited self.check_build(<str>, limited=True) File <str>, line <n>, in check_build with s`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_cppext/__init__.py", line 47, in test_build_limited
    self.check_build('_testcppext_limited', limited=True)
  File "/work/suites/cpython/Lib/test/test_cppext/__init__.py", line 54, in check_build
    with support.setup_v`
example test: `test_cppext.TestCPPExt.test_build_limited`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_cdata_section self._run_check(html, expected, collector=EventCollector(autocdata=True)) ^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_htmlparser.py", line 899, in test_cdata_section
    self._run_check(html, expected, collector=EventCollector(autocdata=True))
                                              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suite`
example test: `test_htmlparser.HTMLParserTestCase.test_cdata_section`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_choose_directory os.rmdir(dir) OSError: [Errno <n>] Directory not empty: <str>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_tempfile.py", line 443, in test_choose_directory
    os.rmdir(dir)
OSError: [Errno 39] Directory not empty: '/tmp/tmp0d4_firk'`
example test: `test_tempfile.TestMkstempInner.test_choose_directory`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_class self._check_path_limitations(<str>) File <str>, line <n>, in _check_path_limitations len(`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_reprlib.py", line 713, in test_class
    self._check_path_limitations('bar')
  File "/work/suites/cpython/Lib/test/test_reprlib.py", line 674, in _check_path_limitations
    len(importlib.util.cache_from_source("x.py")) - `
example test: `test_reprlib.LongReprTest.test_class`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_class_property self.assertEqual(A.__doc__, <str>) AssertionError: <bound method ? of <class <st`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_property.py", line 212, in test_class_property
    self.assertEqual(A.__doc__, "A doc for 'A'")
AssertionError: <bound method ? of <class 'test.test_prop[47 chars].A'>> != "A doc for 'A'"`
example test: `test_property.PropertyTests.test_class_property`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_class_property_override self.assertEqual(A.__doc__, <str>) AssertionError: <bound method ? of <`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_property.py", line 223, in test_class_property_override
    self.assertEqual(A.__doc__, 'Second')
AssertionError: <bound method ? of <class 'test.test_prop[56 chars].A'>> != 'Second'`
example test: `test_property.PropertyTests.test_class_property_override`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_cli_file_input self.assertEqual(res.err, b<str>) AssertionError: b<str> != b<str>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_ast/test_ast.py", line 2796, in test_cli_file_input
    self.assertEqual(res.err, b"")
AssertionError: b"error: unexpected argument '-m' found\n\[146 chars]'.\n" != b''`
example test: `test_ast.test_ast.ASTMainTests.test_cli_file_input`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_cmp_err for f in (self.module.bisect_left, self.module.bisect_right, ^^^^^^^^^^^^^^^^^^^^^^^ At`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_bisect.py", line 375, in test_cmp_err
    for f in (self.module.bisect_left, self.module.bisect_right,
              ^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: 'NoneType' object has no attribute 'bisect_left'`
example test: `test_bisect.TestErrorHandlingC.test_cmp_err`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_cmp_to_signature self.assertEqual(str(Signature.from_callable(self.cmp_to_key)), AssertionError`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_functools.py", line 968, in test_cmp_to_signature
    self.assertEqual(str(Signature.from_callable(self.cmp_to_key)),
AssertionError: '(mycmp, /)' != '(mycmp)'
- (mycmp, /)
?       ---
+ (mycmp)`
example test: `test_functools.TestCmpToKeyC.test_cmp_to_signature`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_colors bisect_left = self.module.bisect_left ^^^^^^^^^^^^^^^^^^^^^^^ AttributeError: <str> obje`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_bisect.py", line 405, in test_colors
    bisect_left = self.module.bisect_left
                  ^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: 'NoneType' object has no attribute 'bisect_left'`
example test: `test_bisect.TestDocExampleC.test_colors`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_combining self.assertEqual(self.db.combining(<str>), <n>) ^^^^^^^^^^^^^^^^^^^^^^^^^^^ SystemErr`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_unicodedata.py", line 180, in test_combining
    self.assertEqual(self.db.combining('\uFFFE'), 0)
                     ^^^^^^^^^^^^^^^^^^^^^^^^^^^
SystemError: Option python.IsolateNativeModules is set to 'false' and a sec`
example test: `test_unicodedata.UnicodeFunctionsTest.test_combining`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_comments self._run_check(html, expected) File <str>, line <n>, in _run_check self.fail(<str> + `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_htmlparser.py", line 539, in test_comments
    self._run_check(html, expected)
  File "/work/suites/cpython/Lib/test/test_htmlparser.py", line 124, in _run_check
    self.fail("received events did not match expected events`
example test: `test_htmlparser.HTMLParserTestCase.test_comments`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_comparison_is_literal check(<str>, <str>tuple\<str>) File <str>, line <n>, in check self.check_`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_grammar.py", line 1490, in test_comparison_is_literal
    check('x is not (1, 2)', '"is not" with \'tuple\' literal')
  File "/work/suites/cpython/Lib/test/test_grammar.py", line 1483, in check
    self.check_syntax_warnin`
example test: `test_grammar.GrammarTests.test_comparison_is_literal`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_compile self.assertTrue(found, <str> % AssertionError: None is not true : Matching failed on <s`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_strptime.py", line 173, in test_compile
    self.assertTrue(found, "Matching failed on '%s' using '%s' regex" %
AssertionError: None is not true : Matching failed on '%G' using '(?P<G>\d\d\d\d)' regex`
example test: `test_strptime.TimeRETests.test_compile`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_day_of_week_calculation result = _strptime._strptime_time(time.strftime(format_string, self.tim`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_strptime.py", line 692, in test_day_of_week_calculation
    result = _strptime._strptime_time(time.strftime(format_string, self.time_tuple),
             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`
example test: `test_strptime.CalculationTests.test_day_of_week_calculation`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_debug_expressions_are_raw_strings self.assertEqual(f<str>, <str>\\\\N{OX}\<str>) AssertionError`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_fstring.py", line 1769, in test_debug_expressions_are_raw_strings
    self.assertEqual(f'{b"\N{OX}"=}', 'b"\\N{OX}"=b\'\\\\N{OX}\'')
AssertionError: 'b"🐂"=b\'\\\\N{OX}\'' != 'b"\\N{OX}"=b\'\\\\N{OX}\''
- b"🐂"=b'\\N{OX}'
`
example test: `test_fstring.TestCase.test_debug_expressions_are_raw_strings`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_decimal self.assertEqual(self.db.decimal(<str>,None), None) ^^^^^^^^^^^^^^^^^^^^^^^^^ Attribute`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_unicodedata.py", line 133, in test_decimal
    self.assertEqual(self.db.decimal('A',None), None)
                     ^^^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: module '_cpython_unicodedata' does not have 'decimal' attribut`
example test: `test_unicodedata.UnicodeFunctionsTest.test_decimal`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_decimal_numeric_consistent dec = self.db.decimal(c, -<n>) ^^^^^^^^^^^^^^^^^^^^^^ AttributeError`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_unicodedata.py", line 283, in test_decimal_numeric_consistent
    dec = self.db.decimal(c, -1)
          ^^^^^^^^^^^^^^^^^^^^^^
AttributeError: module '_cpython_unicodedata' does not have 'decimal' attribute`
example test: `test_unicodedata.UnicodeMiscTest.test_decimal_numeric_consistent`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_decode output = self.get_output(<str>, os_helper.TESTFN) ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_base64.py", line 787, in test_decode
    output = self.get_output('-d', os_helper.TESTFN)
             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_base64.py", line 770, in get_output
`
example test: `test_base64.TestMain.test_decode`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_decomposition self.assertEqual(self.db.decomposition(<str>),<str>) ^^^^^^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_unicodedata.py", line 164, in test_decomposition
    self.assertEqual(self.db.decomposition('\uFFFE'),'')
                     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: module '_cpython_unicodedata' does not have 'de`
example test: `test_unicodedata.UnicodeFunctionsTest.test_decomposition`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_del_by_finalizer os.rmdir(dir) OSError: [Errno <n>] Directory not empty: <str>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_tempfile.py", line 1128, in test_del_by_finalizer
    os.rmdir(dir)
OSError: [Errno 39] Directory not empty: '/tmp/tmpodefu726'`
example test: `test_tempfile.TestNamedTemporaryFile.test_del_by_finalizer`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_del_on_close os.rmdir(dir) OSError: [Errno <n>] Directory not empty: <str>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_tempfile.py", line 1232, in test_del_on_close
    os.rmdir(dir)
OSError: [Errno 39] Directory not empty: '/tmp/tmp7wbnd38c'`
example test: `test_tempfile.TestSpooledTemporaryFile.test_del_on_close`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_devices st_mode, modestr = self.get_mode(os.devnull, lstat=False) ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_stat.py", line 202, in test_devices
    st_mode, modestr = self.get_mode(os.devnull, lstat=False)
                       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_stat.py", line 96, `
example test: `test_stat.TestFilemodeCStat.test_devices`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_digit self.assertEqual(self.db.digit(<str>, None), None) ^^^^^^^^^^^^^^^^^^^^^^^^ AttributeErro`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_unicodedata.py", line 108, in test_digit
    self.assertEqual(self.db.digit('A', None), None)
                     ^^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: module '_cpython_unicodedata' does not have 'digit' attribute`
example test: `test_unicodedata.UnicodeFunctionsTest.test_digit`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_digit_numeric_consistent dec = self.db.digit(c, -<n>) ^^^^^^^^^^^^^^^^^^^^ AttributeError: modu`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_unicodedata.py", line 296, in test_digit_numeric_consistent
    dec = self.db.digit(c, -1)
          ^^^^^^^^^^^^^^^^^^^^
AttributeError: module '_cpython_unicodedata' does not have 'digit' attribute`
example test: `test_unicodedata.UnicodeMiscTest.test_digit_numeric_consistent`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_directory st_mode, modestr = self.get_mode() ^^^^^^^^^^^^^^^ File <str>, line <n>, in get_mode `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_stat.py", line 166, in test_directory
    st_mode, modestr = self.get_mode()
                       ^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_stat.py", line 96, in get_mode
    modestr = self.statmod.filem`
example test: `test_stat.TestFilemodeCStat.test_directory`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_doctest_main_issue4197 self.assertIn(expected.encode(<str>), out) AssertionError: b<str> not fo`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_zipimport_support.py", line 205, in test_doctest_main_issue4197
    self.assertIn(expected.encode('utf-8'), out)
AssertionError: b'File "/tmp/tmp_q5lzec2/script.py", line 2, in __main__.Test' not found in b'***************`
example test: `test_zipimport_support.ZipSupportTests.test_doctest_main_issue4197`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_double_coding_line self.check_script_output(src, br<str>) File <str>, line <n>, in check_script`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_source_encoding.py", line 206, in test_double_coding_line
    self.check_script_output(src, br"'\xc3\u20ac'")
  File "/work/suites/cpython/Lib/test/test_source_encoding.py", line 337, in check_script_output
    self.assert`
example test: `test_source_encoding.FileSourceEncodingTest.test_double_coding_line`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_double_coding_same_line self.check_script_output(src, br<str>) File <str>, line <n>, in check_s`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_source_encoding.py", line 211, in test_double_coding_same_line
    self.check_script_output(src, br"'\xc3\u20ac'")
  File "/work/suites/cpython/Lib/test/test_source_encoding.py", line 337, in check_script_output
    self.a`
example test: `test_source_encoding.FileSourceEncodingTest.test_double_coding_same_line`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_east_asian_width eaw = self.db.east_asian_width ^^^^^^^^^^^^^^^^^^^^^^^^ SystemError: Option py`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_unicodedata.py", line 219, in test_east_asian_width
    eaw = self.db.east_asian_width
          ^^^^^^^^^^^^^^^^^^^^^^^^
SystemError: Option python.IsolateNativeModules is set to 'false' and a second GraalPy context attem`
example test: `test_unicodedata.UnicodeFunctionsTest.test_east_asian_width`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_east_asian_width_9_0_changes self.assertEqual(self.db.ucd_3_2_0.east_asian_width(<str>), <str>)`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_unicodedata.py", line 250, in test_east_asian_width_9_0_changes
    self.assertEqual(self.db.ucd_3_2_0.east_asian_width('\u231a'), 'N')
                     ^^^^^^^^^^^^^^^^^
SystemError: Option python.IsolateNativeModules`
example test: `test_unicodedata.UnicodeFunctionsTest.test_east_asian_width_9_0_changes`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_east_asian_width_unassigned eaw = self.db.east_asian_width ^^^^^^^^^^^^^^^^^^^^^^^^ SystemError`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_unicodedata.py", line 233, in test_east_asian_width_unassigned
    eaw = self.db.east_asian_width
          ^^^^^^^^^^^^^^^^^^^^^^^^
SystemError: Option python.IsolateNativeModules is set to 'false' and a second GraalPy co`
example test: `test_unicodedata.UnicodeFunctionsTest.test_east_asian_width_unassigned`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_empty_namespace_package import_helper.forget(pkg_name) File <str>, line <n>, in forget unlink(i`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_doctest/test_doctest.py", line 789, in test_empty_namespace_package
    import_helper.forget(pkg_name)
  File "/work/suites/cpython/Lib/test/support/import_helper.py", line 50, in forget
    unlink(importlib.util.cache_fro`
example test: `test_doctest.test_doctest.TestDocTestFinder.test_empty_namespace_package`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_encode_file output = self.get_output(<str>, os_helper.TESTFN) ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_base64.py", line 775, in test_encode_file
    output = self.get_output('-e', os_helper.TESTFN)
             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_base64.py", line 770, in get_ou`
example test: `test_base64.TestMain.test_encode_file`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_encode_from_stdin self.assertEqual(out.rstrip(), b<str>) AssertionError: b<str> != b<str>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_base64.py", line 781, in test_encode_from_stdin
    self.assertEqual(out.rstrip(), b'Yf9iCg==')
AssertionError: b"error: unexpected argument '-m' found\n\[144 chars]lp'." != b'Yf9iCg=='`
example test: `test_base64.TestMain.test_encode_from_stdin`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_env_var self.assertEqual(out, <str>) AssertionError: <str> != <str> - <n> + <n>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_utf8_mode.py", line 72, in test_env_var
    self.assertEqual(out, '1')
AssertionError: '0' != '1'
- 0
+ 1`
example test: `test_utf8_mode.UTF8ModeTests.test_env_var`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_EOFS_with_file self.assertEqual(err[-<n>:], [ AssertionError: Lists differ: [] != [<str>, <str>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_eof.py", line 54, in test_EOFS_with_file
    self.assertEqual(err[-3:], [
AssertionError: Lists differ: [] != ["    ä = '''thîs is ", '        ^', 'Synt[68 chars] 3)']

Second list contains 3 additional elements.
First ext`
example test: `test_eof.EOFTestCase.test_EOFS_with_file`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_error compiled = compileall.compile_dir(self.directory) ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_compileall.py", line 490, in test_error
    compiled = compileall.compile_dir(self.directory)
               ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/compile`
example test: `test_compileall.EncodingTest.test_error`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_error_from_string self.assertTrue(c.exception.args[<n>].startswith(expected), AssertionError: F`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_source_encoding.py", line 148, in test_error_from_string
    self.assertTrue(c.exception.args[0].startswith(expected),
AssertionError: False is not true : (unicode error) 'ascii' codec can't decode byte 0xe2 in position 16`
example test: `test_source_encoding.MiscSourceEncodingTest.test_error_from_string`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_error_parenthesis self._check_error(f<str>, f<str>) File <str>, line <n>, in _check_error self.`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_syntax.py", line 2376, in test_error_parenthesis
    self._check_error(f"a = {paren} 1, 2, 3\nb=3", f"\\{paren}' was never closed")
  File "/work/suites/cpython/Lib/test/test_syntax.py", line 2040, in _check_error
    self`
example test: `test_syntax.SyntaxTestCase.test_error_parenthesis`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_exception_groups_feature_version with self.assertRaises(SyntaxError): AssertionError: SyntaxErr`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_ast/test_ast.py", line 845, in test_exception_groups_feature_version
    with self.assertRaises(SyntaxError):
AssertionError: SyntaxError not raised`
example test: `test_ast.test_ast.AST_Tests.test_exception_groups_feature_version`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_exit_exception_chaining self.assertIsInstance(exc.__context__, KeyError) AssertionError: ZeroDi`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_contextlib.py", line 935, in test_exit_exception_chaining
    self.assertIsInstance(exc.__context__, KeyError)
AssertionError: ZeroDivisionError('division by zero') is not an instance of <class 'KeyError'>`
example test: `test_contextlib_async.TestAsyncExitStack.test_exit_exception_chaining`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_exit_exception_traceback self.assertEqual( AssertionError: Lists differ: [(<str>__step_run_and_`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_contextlib.py", line 859, in test_exit_exception_traceback
    self.assertEqual(
AssertionError: Lists differ: [('te[203 chars] ('__step_run_and_handle_result', 'result = co[173 chars]xc')] != [('te[203 chars] ('__aexit__'`
example test: `test_contextlib_async.TestAsyncExitStack.test_exit_exception_traceback`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_exit_exception_with_correct_context self.assertIs(exc.__context__.__context__, exc2) AssertionE`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_contextlib.py", line 1033, in test_exit_exception_with_correct_context
    self.assertIs(exc.__context__.__context__, exc2)
AssertionError: Exception(1) is not Exception(2)`
example test: `test_contextlib_async.TestAsyncExitStack.test_exit_exception_with_correct_context`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_expandItem items = pulldom.parseString(SMALL_SAMPLE) ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ File <st`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_pulldom.py", line 107, in test_expandItem
    items = pulldom.parseString(SMALL_SAMPLE)
            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/xml/dom/pulldom.py", `
example test: `test_pulldom.PullDOMTestCase.test_expandItem`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_external_ges_default parser = pulldom.parseString(SMALL_SAMPLE) ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_pulldom.py", line 164, in test_external_ges_default
    parser = pulldom.parseString(SMALL_SAMPLE)
             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/xml/dom/p`
example test: `test_pulldom.PullDOMTestCase.test_external_ges_default`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_failed_import_during_compiling result = script_helper.assert_python_failure(<str>, code) ^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_unicodedata.py", line 271, in test_failed_import_during_compiling
    result = script_helper.assert_python_failure("-c", code)
             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/t`
example test: `test_unicodedata.UnicodeMiscTest.test_failed_import_during_compiling`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_file_parse_error_multiline self.assertIn(b<str>, stderr) AssertionError: b<str> not found in b<`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_source_encoding.py", line 160, in test_file_parse_error_multiline
    self.assertIn(b"Non-UTF-8 code starting with '\\xb1'", stderr)
AssertionError: b"Non-UTF-8 code starting with '\\xb1'" not found in b'error: failed to o`
example test: `test_source_encoding.MiscSourceEncodingTest.test_file_parse_error_multiline`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_filename_in_syntaxerror self.assertIn(file_path.encode(<str>, <str>), stderr) AssertionError: b`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_fstring.py", line 1619, in test_filename_in_syntaxerror
    self.assertIn(file_path.encode("ascii", "backslashreplace"), stderr)
AssertionError: b'/work/.harness/work/cpython-core/shard-3/tempcwd/t.py' not found in b''`
example test: `test_fstring.TestCase.test_filename_in_syntaxerror`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_finalize self.assertEqual(f(), None) AssertionError: <n> != None`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_weakref.py", line 2022, in test_finalize
    self.assertEqual(f(), None)
AssertionError: 199 != None`
example test: `test_weakref.FinalizeTestCase.test_finalize`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_first_coding_line self.check_script_output(src, br<str>) File <str>, line <n>, in check_script_`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_source_encoding.py", line 185, in test_first_coding_line
    self.check_script_output(src, br"'\xc3\u20ac'")
  File "/work/suites/cpython/Lib/test/test_source_encoding.py", line 337, in check_script_output
    self.assertE`
example test: `test_source_encoding.FileSourceEncodingTest.test_first_coding_line`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_first_non_utf8_coding_line self.check_script_output(src, br<str>) File <str>, line <n>, in chec`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_source_encoding.py", line 216, in test_first_non_utf8_coding_line
    self.check_script_output(src, br"'\xc3\u20ac'")
  File "/work/suites/cpython/Lib/test/test_source_encoding.py", line 337, in check_script_output
    sel`
example test: `test_source_encoding.FileSourceEncodingTest.test_first_non_utf8_coding_line`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_free_after_iterating check_free_after_iterating(self, iter, SequenceClass, (<n>,)) File <str>, `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_iter.py", line 1141, in test_free_after_iterating
    check_free_after_iterating(self, iter, SequenceClass, (0,))
  File "/work/suites/cpython/Lib/test/support/__init__.py", line 1830, in check_free_after_iterating
    tes`
example test: `test_iter.TestCase.test_free_after_iterating`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_free_after_iterating support.check_free_after_iterating(self, iter, dict) File <str>, line <n>,`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_dict.py", line 1285, in test_free_after_iterating
    support.check_free_after_iterating(self, iter, dict)
  File "/work/suites/cpython/Lib/test/support/__init__.py", line 1830, in check_free_after_iterating
    test.asser`
example test: `test_dict.DictTest.test_free_after_iterating`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_get_only for f in (self.module.bisect_left, self.module.bisect_right, ^^^^^^^^^^^^^^^^^^^^^^^ A`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_bisect.py", line 369, in test_get_only
    for f in (self.module.bisect_left, self.module.bisect_right,
              ^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: 'NoneType' object has no attribute 'bisect_left'`
example test: `test_bisect.TestErrorHandlingC.test_get_only`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_grades result = [grade(score) for score in [<n>, <n>, <n>, <n>, <n>, <n>, <n>]] ^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_bisect.py", line 398, in test_grades
    result = [grade(score) for score in [33, 99, 77, 70, 89, 90, 100]]
             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_`
example test: `test_bisect.TestDocExampleC.test_grades`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_gregorian_calculation result = _strptime._strptime_time(time.strftime(format_string, self.time_`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_strptime.py", line 677, in test_gregorian_calculation
    result = _strptime._strptime_time(time.strftime(format_string, self.time_tuple),
             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`
example test: `test_strptime.CalculationTests.test_gregorian_calculation`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_has_no_name os.rmdir(dir) OSError: [Errno <n>] Directory not empty: <str>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_tempfile.py", line 1550, in test_has_no_name
    os.rmdir(dir)
OSError: [Errno 39] Directory not empty: '/tmp/tmph2ccfuxw'`
example test: `test_tempfile.TestTemporaryFile.test_has_no_name`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_hash_exact check_one_exact((), <n>, <n>) File <str>, line <n>, in check_one_exact self.fail(msg`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_tuple.py", line 115, in test_hash_exact
    check_one_exact((), 750394483, 5740354900026072187)
  File "/work/suites/cpython/Lib/test/test_tuple.py", line 113, in check_one_exact
    self.fail(msg)
AssertionError: FAIL has`
example test: `test_tuple.TupleTest.test_hash_exact`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_indentation_error self.assertEqual(output.splitlines()[<n>:], [ AssertionError: Lists differ: [`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_code_module.py", line 88, in test_indentation_error
    self.assertEqual(output.splitlines()[1:], [
AssertionError: Lists differ: ['  F[19 chars]ne 1', '    1', '    ^', 'IndentationError: unexpected indent'] != ['  F[19 c`
example test: `test_code_module.TestInteractiveConsole.test_indentation_error`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_invalid_bracketed_hosts self.assertRaises(ValueError, urllib.parse.urlsplit, <str>) AssertionEr`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_urlparse.py", line 1276, in test_invalid_bracketed_hosts
    self.assertRaises(ValueError, urllib.parse.urlsplit, 'scheme://prefix.[v6a.ip]')
AssertionError: ValueError not raised by urlsplit`
example test: `test_urlparse.UrlParseTestCase.test_invalid_bracketed_hosts`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_invalid_formats with self.assertRaises(TypeError): AssertionError: TypeError not raised`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_fractions.py", line 1501, in test_invalid_formats
    with self.assertRaises(TypeError):
AssertionError: TypeError not raised`
example test: `test_fractions.FractionTest.test_invalid_formats`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_invalid_line_continuation_error_position self._check_error(r<str>, File <str>, line <n>, in _ch`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_syntax.py", line 2353, in test_invalid_line_continuation_error_position
    self._check_error(r"a = 3 \ 4",
  File "/work/suites/cpython/Lib/test/test_syntax.py", line 2045, in _check_error
    self.assertEqual(err.offset,`
example test: `test_syntax.SyntaxTestCase.test_invalid_line_continuation_error_position`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_invalid_utf8 check(byte) File <str>, line <n>, in check self.assertIn(b<str>, stderr) Assertion`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_source_encoding.py", line 294, in test_invalid_utf8
    check(byte)
  File "/work/suites/cpython/Lib/test/test_source_encoding.py", line 279, in check
    self.assertIn(b"Non-UTF-8 code starting with", stderr)
AssertionErr`
example test: `test_source_encoding.UTF8ValidatorTest.test_invalid_utf8`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_invisible_characters self._check_error(<str>, <str>) File <str>, line <n>, in _check_error self`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_syntax.py", line 2404, in test_invisible_characters
    self._check_error('print\x17("Hello")', "invalid non-printable character")
  File "/work/suites/cpython/Lib/test/test_syntax.py", line 2040, in _check_error
    self.`
example test: `test_syntax.SyntaxTestCase.test_invisible_characters`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_issue41287 self.assertEqual(doc, <str>, AssertionError: <str> != <str> - This is a subclass of `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_property.py", line 338, in test_issue41287
    self.assertEqual(doc, "issue 41287 is fixed",
AssertionError: 'This is a subclass of property' != 'issue 41287 is fixed'
- This is a subclass of property
+ issue 41287 is fixe`
example test: `test_property.PropertySubclassTests.test_issue41287`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_iter_function_concealing_reentrant_exhaustion with self.assertRaises(StopIteration): AssertionE`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_iter.py", line 375, in test_iter_function_concealing_reentrant_exhaustion
    with self.assertRaises(StopIteration):
AssertionError: StopIteration not raised`
example test: `test_iter.TestCase.test_iter_function_concealing_reentrant_exhaustion`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_julian_calculation result = _strptime._strptime_time(time.strftime(format_string, self.time_tup`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_strptime.py", line 667, in test_julian_calculation
    result = _strptime._strptime_time(time.strftime(format_string, self.time_tuple),
             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 `
example test: `test_strptime.CalculationTests.test_julian_calculation`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_jump_threading for inst in dis.get_instructions(f): ^^^^^^^^^^^^^^^^^^^^^^^ File <str>, line <n`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_patma.py", line 3102, in test_jump_threading
    for inst in dis.get_instructions(f):
                ^^^^^^^^^^^^^^^^^^^^^^^
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/dis.py", line 356, in get_ins`
example test: `test_patma.TestSourceLocations.test_jump_threading`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_keep_buffer with self.assertRaises(BufferError): AssertionError: BufferError not raised`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_re.py", line 71, in test_keep_buffer
    with self.assertRaises(BufferError):
AssertionError: BufferError not raised`
example test: `test_re.ReTests.test_keep_buffer`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_keywords_in_subclass u = subclass_with_init([<n>, <n>], newarg=<n>) ^^^^^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_tuple.py", line 57, in test_keywords_in_subclass
    u = subclass_with_init([1, 2], newarg=3)
        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
TypeError: tuple() got an unexpected keyword argument 'newarg'`
example test: `test_tuple.TupleTest.test_keywords_in_subclass`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_len_only for f in (self.module.bisect_left, self.module.bisect_right, ^^^^^^^^^^^^^^^^^^^^^^^ A`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_bisect.py", line 364, in test_len_only
    for f in (self.module.bisect_left, self.module.bisect_right,
              ^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: 'NoneType' object has no attribute 'bisect_left'`
example test: `test_bisect.TestErrorHandlingC.test_len_only`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_link st_mode, modestr = self.get_mode() ^^^^^^^^^^^^^^^ File <str>, line <n>, in get_mode modes`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_stat.py", line 180, in test_link
    st_mode, modestr = self.get_mode()
                       ^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_stat.py", line 96, in get_mode
    modestr = self.statmod.filemode(s`
example test: `test_stat.TestFilemodeCStat.test_link`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_list_index_modifing_operand with self.assertRaises(ValueError): AssertionError: ValueError not `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_list.py", line 254, in test_list_index_modifing_operand
    with self.assertRaises(ValueError):
AssertionError: ValueError not raised`
example test: `test_list.ListTest.test_list_index_modifing_operand`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_list_resize_overflow with self.assertRaises((MemoryError, OverflowError)): AssertionError: (<cl`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_list.py", line 107, in test_list_resize_overflow
    with self.assertRaises((MemoryError, OverflowError)):
AssertionError: (<class 'MemoryError'>, <class 'OverflowError'>) not raised`
example test: `test_list.ListTest.test_list_resize_overflow`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_listDerived self.module.insort_left(lst, <n>) AttributeError: <str> object has no attribute <st`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_bisect.py", line 325, in test_listDerived
    self.module.insort_left(lst, 10)
AttributeError: 'NoneType' object has no attribute 'insort_left'`
example test: `test_bisect.TestInsortC.test_listDerived`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_match_args self.assertEqual(time.struct_time.__match_args__, expected_args) ^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_structseq.py", line 201, in test_match_args
    self.assertEqual(time.struct_time.__match_args__, expected_args)
                     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: 'time.struct_time' object has no attribu`
example test: `test_structseq.StructSeqTest.test_match_args`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_match_args_with_unnamed_fields self.assertEqual(os.stat_result.__match_args__, expected_args) ^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_structseq.py", line 207, in test_match_args_with_unnamed_fields
    self.assertEqual(os.stat_result.__match_args__, expected_args)
                     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: 'os.stat_result' object `
example test: `test_structseq.StructSeqTest.test_match_args_with_unnamed_fields`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_method self._check_path_limitations(<str>) File <str>, line <n>, in _check_path_limitations len`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_reprlib.py", line 736, in test_method
    self._check_path_limitations('qux')
  File "/work/suites/cpython/Lib/test/test_reprlib.py", line 674, in _check_path_limitations
    len(importlib.util.cache_from_source("x.py")) -`
example test: `test_reprlib.LongReprTest.test_method`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_method_checksum self.assertEqual(result, self.expectedchecksum) AssertionError: <str> != <str> `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_unicodedata.py", line 65, in test_method_checksum
    self.assertEqual(result, self.expectedchecksum)
AssertionError: '76a666077baf55387180309ef3d55423d266dfea' != 'e708c31c0d51f758adf475cb7201cf80917362be'
- 76a666077baf5`
example test: `test_unicodedata.UnicodeMethodsTest.test_method_checksum`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_mirrored self.assertEqual(self.db.mirrored(<str>), <n>) ^^^^^^^^^^^^^^^^^^^^^^^^^^ AttributeErr`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_unicodedata.py", line 171, in test_mirrored
    self.assertEqual(self.db.mirrored('\uFFFE'), 0)
                     ^^^^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: module '_cpython_unicodedata' does not have 'mirrored' attribu`
example test: `test_unicodedata.UnicodeFunctionsTest.test_mirrored`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_mode self.assertEqual(mode, expected) AssertionError: <n> != <n>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_tempfile.py", line 797, in test_mode
    self.assertEqual(mode, expected)
AssertionError: 493 != 448`
example test: `test_tempfile.TestMkdtemp.test_mode`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_mode st_mode, modestr = self.get_mode() ^^^^^^^^^^^^^^^ File <str>, line <n>, in get_mode modes`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_stat.py", line 122, in test_mode
    st_mode, modestr = self.get_mode()
                       ^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_stat.py", line 96, in get_mode
    modestr = self.statmod.filemode(s`
example test: `test_stat.TestFilemodeCStat.test_mode`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_module self._check_path_limitations(self.pkgname) File <str>, line <n>, in _check_path_limitati`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_reprlib.py", line 686, in test_module
    self._check_path_limitations(self.pkgname)
  File "/work/suites/cpython/Lib/test/test_reprlib.py", line 674, in _check_path_limitations
    len(importlib.util.cache_from_source("x.`
example test: `test_reprlib.LongReprTest.test_module`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_module_attributes modvalue = getattr(self.statmod, key) ^^^^^^^^^^^^^^^^^^^^^^^^^^ AttributeErr`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_stat.py", line 223, in test_module_attributes
    modvalue = getattr(self.statmod, key)
               ^^^^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: 'NoneType' object has no attribute 'ST_MODE'`
example test: `test_stat.TestFilemodeCStat.test_module_attributes`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_module_finalization_at_shutdown rc, out, err = assert_python_ok(<str>, <str>) ^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_module/__init__.py", line 299, in test_module_finalization_at_shutdown
    rc, out, err = assert_python_ok("-c", "from test.test_module import final_a")
                   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`
example test: `test_module.ModuleTests.test_module_finalization_at_shutdown`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_multiline_compiler_error_points_to_the_end self._check_error( File <str>, line <n>, in _check_e`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_syntax.py", line 2426, in test_multiline_compiler_error_points_to_the_end
    self._check_error(
  File "/work/suites/cpython/Lib/test/test_syntax.py", line 2043, in _check_error
    self.assertEqual(err.lineno, lineno)
As`
example test: `test_syntax.SyntaxTestCase.test_multiline_compiler_error_points_to_the_end`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_mutating_iteration_delete with self.assertRaises(RuntimeError): AssertionError: RuntimeError no`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_dict.py", line 530, in test_mutating_iteration_delete
    with self.assertRaises(RuntimeError):
AssertionError: RuntimeError not raised`
example test: `test_dict.DictTest.test_mutating_iteration_delete`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_mutating_iteration_delete_over_items with self.assertRaises(RuntimeError): AssertionError: Runt`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_dict.py", line 548, in test_mutating_iteration_delete_over_items
    with self.assertRaises(RuntimeError):
AssertionError: RuntimeError not raised`
example test: `test_dict.DictTest.test_mutating_iteration_delete_over_items`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_mutating_iteration_delete_over_values with self.assertRaises(RuntimeError): AssertionError: Run`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_dict.py", line 539, in test_mutating_iteration_delete_over_values
    with self.assertRaises(RuntimeError):
AssertionError: RuntimeError not raised`
example test: `test_dict.DictTest.test_mutating_iteration_delete_over_values`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_name_inverse_lookup self.assertEqual(self.db.lookup(looked_name), char) ^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_unicodedata.py", line 105, in test_name_inverse_lookup
    self.assertEqual(self.db.lookup(looked_name), char)
                     ^^^^^^^^^^^^^^^^^^^^^^^^^^^
SystemError: Option python.IsolateNativeModules is set to 'fal`
example test: `test_unicodedata.UnicodeFunctionsTest.test_name_inverse_lookup`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_named_expression_invalid_mangled_class_variables with self.assertRaisesRegex(SyntaxError, Asser`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_named_expressions.py", line 373, in test_named_expression_invalid_mangled_class_variables
    with self.assertRaisesRegex(SyntaxError,
AssertionError: "assignment expression cannot rebind comprehension iteration variable '`
example test: `test_named_expressions.NamedExpressionInvalidTest.test_named_expression_invalid_mangled_class_variables`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_no_mangling_in_nested_scopes ns = run_code(<str><str>/work/suites/cpython/Lib/test/support/__in`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_type_params.py", line 810, in test_no_mangling_in_nested_scopes
    ns = run_code("""
         ^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/support/__init__.py", line 664, in run_code
    exec(textwrap.dedent(code), `
example test: `test_type_params.TypeParamsManglingTest.test_no_mangling_in_nested_scopes`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_non_sequence for f in (self.module.bisect_left, self.module.bisect_right, ^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_bisect.py", line 359, in test_non_sequence
    for f in (self.module.bisect_left, self.module.bisect_right,
              ^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: 'NoneType' object has no attribute 'bisect_left'`
example test: `test_bisect.TestErrorHandlingC.test_non_sequence`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_numeric self.assertEqual(self.db.numeric(<str>,None), None) ^^^^^^^^^^^^^^^^^^^^^^^^^ Attribute`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_unicodedata.py", line 120, in test_numeric
    self.assertEqual(self.db.numeric('A',None), None)
                     ^^^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: module '_cpython_unicodedata' does not have 'numeric' attribut`
example test: `test_unicodedata.UnicodeFunctionsTest.test_numeric`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_oob_indexing_dictiter_iternextitem self.assertRaises(RuntimeError, iter_and_mutate) AssertionEr`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_dict.py", line 1396, in test_oob_indexing_dictiter_iternextitem
    self.assertRaises(RuntimeError, iter_and_mutate)
AssertionError: RuntimeError not raised by iter_and_mutate`
example test: `test_dict.DictTest.test_oob_indexing_dictiter_iternextitem`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_operator_compare_digest self._test_compare_digest(operator_compare_digest) File <str>, line <n>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_hmac.py", line 561, in test_operator_compare_digest
    self._test_compare_digest(operator_compare_digest)
  File "/work/suites/cpython/Lib/test/test_hmac.py", line 647, in _test_compare_digest
    self.assertRaises(TypeEr`
example test: `test_hmac.CompareDigestTestCase.test_operator_compare_digest`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_optim_level out = self.get_output(<str>, <str>, <str>, <str>, code) ^^^^^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_utf8_mode.py", line 245, in test_optim_level
    out = self.get_output('-X', 'utf8', '-O', '-c', code)
          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_utf8_mode.py", lin`
example test: `test_utf8_mode.UTF8ModeTests.test_optim_level`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_order self.assertFalse(f2.alive) AssertionError: True is not false`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_weakref.py", line 2080, in test_order
    self.assertFalse(f2.alive)
AssertionError: True is not false`
example test: `test_weakref.FinalizeTestCase.test_order`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_parse handler = pulldom.parse(tstfile) ^^^^^^^^^^^^^^^^^^^^^^ File <str>, line <n>, in parse pa`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_pulldom.py", line 35, in test_parse
    handler = pulldom.parse(tstfile)
              ^^^^^^^^^^^^^^^^^^^^^^
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/xml/dom/pulldom.py", line 326, in parse
    p`
example test: `test_pulldom.PullDOMTestCase.test_parse`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_parse_semantics items = pulldom.parseString(SMALL_SAMPLE) ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Fil`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_pulldom.py", line 46, in test_parse_semantics
    items = pulldom.parseString(SMALL_SAMPLE)
            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/xml/dom/pulldom.p`
example test: `test_pulldom.PullDOMTestCase.test_parse_semantics`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_pdb_issue4201 self.assertIn(os.path.normcase(script_name.encode(<str>)), data) AssertionError: `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_zipimport_support.py", line 230, in test_pdb_issue4201
    self.assertIn(os.path.normcase(script_name.encode('utf-8')), data)
AssertionError: b'/tmp/tmp1cu8lhy_/script.py' not found in b'> /work/.harness/work/cpython-core/`
example test: `test_zipimport_support.ZipSupportTests.test_pdb_issue4201`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_possible_set_operations with self.assertWarnsRegex(FutureWarning, <str>) as w: AssertionError: `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_re.py", line 1216, in test_possible_set_operations
    with self.assertWarnsRegex(FutureWarning, 'Possible set difference') as w:
AssertionError: FutureWarning not triggered`
example test: `test_re.ReTests.test_possible_set_operations`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_prefer_explicit_doc self.assertEqual(PropertySub(doc=<str>).__doc__, <str>) AssertionError: <st`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_property.py", line 439, in test_prefer_explicit_doc
    self.assertEqual(PropertySub(doc="explicit doc").__doc__, "explicit doc")
AssertionError: 'This is a subclass of property' != 'explicit doc'
- This is a subclass of p`
example test: `test_property.PropertySubclassTests.test_prefer_explicit_doc`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_preferred_extension check_extensions() File <str>, line <n>, in check_extensions self.assertEqu`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_mimetypes.py", line 228, in test_preferred_extension
    check_extensions()
  File "/work/suites/cpython/Lib/test/test_mimetypes.py", line 224, in check_extensions
    self.assertEqual(mimetypes.guess_extension('text/x-rst`
example test: `test_mimetypes.MimeTypesTestCase.test_preferred_extension`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_prints_usage_with_help_flag output = self.get_output(<str>) ^^^^^^^^^^^^^^^^^^^^^ File <str>, l`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_base64.py", line 791, in test_prints_usage_with_help_flag
    output = self.get_output('-h')
             ^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_base64.py", line 770, in get_output
    return scri`
example test: `test_base64.TestMain.test_prints_usage_with_help_flag`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_prints_usage_with_invalid_flag self.assertIn(b<str>, output) AssertionError: b<str> not found i`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_base64.py", line 797, in test_prints_usage_with_invalid_flag
    self.assertIn(b'usage: ', output)
AssertionError: b'usage: ' not found in b"error: unexpected argument '-m' found\n\n  tip: to pass '-m' as a value, use '-- `
example test: `test_base64.TestMain.test_prints_usage_with_invalid_flag`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_property_no_doc_on_getter self.assertEqual(PropertySub(NoDoc()).__doc__, None) AssertionError: `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_property.py", line 466, in test_property_no_doc_on_getter
    self.assertEqual(PropertySub(NoDoc()).__doc__, None)
AssertionError: 'This is a subclass of property' != None`
example test: `test_property.PropertySubclassTests.test_property_no_doc_on_getter`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_property_set_name_incorrect_args with self.assertRaisesRegex( AssertionError: <str> does not ma`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_property.py", line 229, in test_property_set_name_incorrect_args
    with self.assertRaisesRegex(
AssertionError: "^__set_name__\(\) takes 2 positional arguments but 0 were given$" does not match "property.__set_name__() m`
example test: `test_property.PropertyTests.test_property_set_name_incorrect_args`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_range_constructor_error_messages with self.assertRaisesRegex( AssertionError: <str> does not ma`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_range.py", line 95, in test_range_constructor_error_messages
    with self.assertRaisesRegex(
AssertionError: "range expected at least 1 argument, got 0" does not match "range() missing 1 required positional argument: 'a'"`
example test: `test_range.RangeTest.test_range_constructor_error_messages`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_recursive_repr self.assertRegex(repr(d), ^^^^^^^ RecursionError: maximum recursion depth exceed`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_defaultdict.py", line 136, in test_recursive_repr
    self.assertRegex(repr(d),
                     ^^^^^^^
RecursionError: maximum recursion depth exceeded`
example test: `test_defaultdict.TestDefaultDict.test_recursive_repr`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_reduce_mutating_builtins_iter self.assertEqual(run_iter(<str>), (orig[<str>], (<str>,))) Assert`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_iter.py", line 300, in test_reduce_mutating_builtins_iter
    self.assertEqual(run_iter("xyz"), (orig["iter"], ("",)))
AssertionError: Tuples differ: (<built-in function iter>, ('xyz',), 0) != (<built-in function iter>, ('`
example test: `test_iter.TestCase.test_reduce_mutating_builtins_iter`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_samefile_on_link self._test_samefile_on_link_func(os.link) File <str>, line <n>, in _test_samef`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_genericpath.py", line 264, in test_samefile_on_link
    self._test_samefile_on_link_func(os.link)
  File "/work/suites/cpython/Lib/test/test_genericpath.py", line 250, in _test_samefile_on_link_func
    func(test_fn1, test`
example test: `test_genericpath.TestGenericTest.test_samefile_on_link`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_samestat_on_link self._test_samestat_on_link_func(os.link) File <str>, line <n>, in _test_sames`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_genericpath.py", line 307, in test_samestat_on_link
    self._test_samestat_on_link_func(os.link)
  File "/work/suites/cpython/Lib/test/test_genericpath.py", line 291, in _test_samestat_on_link_func
    func(test_fn1, test`
example test: `test_genericpath.TestGenericTest.test_samestat_on_link`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_script_compiled compiled_name = py_compile.compile(script_name, doraise=True) ^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_runpy.py", line 680, in test_script_compiled
    compiled_name = py_compile.compile(script_name, doraise=True)
                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/opt/elide/lib/resources/python/pytho`
example test: `test_runpy.RunPathTestCase.test_script_compiled`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_scriptdecode self.assertEqual(cout.splitlines(), p.splitlines()) AssertionError: Lists differ: `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_quopri.py", line 210, in test_scriptdecode
    self.assertEqual(cout.splitlines(), p.splitlines())
AssertionError: Lists differ: [] != ["Here's a bunch of special ", '', '¡¢£¤¥¦[160 chars]un!']

Second list contains 15 add`
example test: `test_quopri.QuopriTestCase.test_scriptdecode`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_scriptencode assert len(cout)==len(e) AssertionError`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_quopri.py", line 196, in test_scriptencode
    assert len(cout)==len(e)
AssertionError`
example test: `test_quopri.QuopriTestCase.test_scriptencode`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_second_coding_line self.check_script_output(src, br<str>) File <str>, line <n>, in check_script`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_source_encoding.py", line 191, in test_second_coding_line
    self.check_script_output(src, br"'\xc3\u20ac'")
  File "/work/suites/cpython/Lib/test/test_source_encoding.py", line 337, in check_script_output
    self.assert`
example test: `test_source_encoding.FileSourceEncodingTest.test_second_coding_line`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_second_non_utf8_coding_line self.check_script_output(src, br<str>) File <str>, line <n>, in che`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_source_encoding.py", line 222, in test_second_non_utf8_coding_line
    self.check_script_output(src, br"'\xc3\u20ac'")
  File "/work/suites/cpython/Lib/test/test_source_encoding.py", line 337, in check_script_output
    se`
example test: `test_source_encoding.FileSourceEncodingTest.test_second_non_utf8_coding_line`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_set_config import_helper.import_module(<str>) File <str>, line <n>, in import_module return imp`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_embed.py", line 1748, in test_set_config
    import_helper.import_module('_testcapi')
  File "/work/suites/cpython/Lib/test/support/import_helper.py", line 78, in import_module
    return importlib.import_module(name)
    `
example test: `test_embed.SetConfigTests.test_set_config`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_setdefault_atomic self.assertEqual(hashed1.eq_count + hashed2.eq_count, <n>) AssertionError: <n`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_dict.py", line 435, in test_setdefault_atomic
    self.assertEqual(hashed1.eq_count + hashed2.eq_count, 1)
AssertionError: 2 != 1`
example test: `test_dict.DictTest.test_setdefault_atomic`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_source_segment_padded self.assertEqual( AssertionError: <str> != <str> def fun(self) -> None: -`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_ast/test_ast.py", line 2462, in test_source_segment_padded
    self.assertEqual(
AssertionError: '    def fun(self) -> None:\n        "ЖЖЖ' != '    def fun(self) -> None:\n        "ЖЖЖЖЖ"'
      def fun(self) -> None:
-   `
example test: `test_ast.test_ast.EndPositionTests.test_source_segment_padded`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_stdio self.assertEqual(out.splitlines(), AssertionError: Lists differ: [<str>, <str>] != [<str>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_utf8_mode.py", line 141, in test_stdio
    self.assertEqual(out.splitlines(),
AssertionError: Lists differ: ['stdin: utf-8/surrogateescape', 'stdout: utf-8/su[44 chars]ace'] != ['stdin: iso8859-1/strict', 'stdout: iso8859-`
example test: `test_utf8_mode.UTF8ModeTests.test_stdio`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_strxfrm self.assertRaises(ValueError, locale.strxfrm, <str>) AssertionError: ValueError not rai`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_locale.py", line 333, in test_strxfrm
    self.assertRaises(ValueError, locale.strxfrm, 'a\0')
AssertionError: ValueError not raised by _strxfrm`
example test: `test_locale.TestCollation.test_strxfrm`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_symmetric_difference self.assertEqual(len(i), len(self.items) + len(self.items2)) AssertionErro`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_weakset.py", line 141, in test_symmetric_difference
    self.assertEqual(len(i), len(self.items) + len(self.items2))
AssertionError: 6 != 5`
example test: `test_weakset.TestWeakSet.test_symmetric_difference`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_syntax_warning_infinite_recursion_in_file self.assertEqual(len(stderr.strip().splitlines()), <n`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_fstring.py", line 1884, in test_syntax_warning_infinite_recursion_in_file
    self.assertEqual(len(stderr.strip().splitlines()), 2)
AssertionError: 1 != 2`
example test: `test_fstring.TestCase.test_syntax_warning_infinite_recursion_in_file`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_sysexcepthook_indentation_error self.assertEqual(traceback.format_exception(self.sysmod.last_ex`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_code_module.py", line 171, in test_sysexcepthook_indentation_error
    self.assertEqual(traceback.format_exception(self.sysmod.last_exc), [
AssertionError: Lists differ: ['  F[27 chars] '    1\n', '    ^\n', 'IndentationEr`
example test: `test_code_module.TestInteractiveConsole.test_sysexcepthook_indentation_error`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_syshook_no_logdir_default_format self.assertIn(<str>, out) AssertionError: <str> not found in <`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_cgitb.py", line 50, in test_syshook_no_logdir_default_format
    self.assertIn("<strong>&lt;module&gt;</strong>", out)
AssertionError: '<strong>&lt;module&gt;</strong>' not found in "╭─ Script Error ───────────────────────`
example test: `test_cgitb.TestCgitb.test_syshook_no_logdir_default_format`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_timezone strp_output = _strptime._strptime_time(<str>, <str>) ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_strptime.py", line 440, in test_timezone
    strp_output = _strptime._strptime_time("UTC", "%Z")
                  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/_s`
example test: `test_strptime.StrptimeTests.test_timezone`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_tokenizer_fstring_warning_in_first_line retcode, stdout, stderr = script_helper.assert_python_o`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_source_encoding.py", line 169, in test_tokenizer_fstring_warning_in_first_line
    retcode, stdout, stderr = script_helper.assert_python_ok(TESTFN)
                              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  Fil`
example test: `test_source_encoding.MiscSourceEncodingTest.test_tokenizer_fstring_warning_in_first_line`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_truncate_with_size_parameter self.assertEqual(os.fstat(f.fileno()).st_size, <n>) AssertionError`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_tempfile.py", line 1521, in test_truncate_with_size_parameter
    self.assertEqual(os.fstat(f.fileno()).st_size, 20)
AssertionError: 8 != 20`
example test: `test_tempfile.TestSpooledTemporaryFile.test_truncate_with_size_parameter`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_try_star def test_try_star(self): NotImplementedError: try star`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_grammar.py", line 1414, in test_try_star
    def test_try_star(self):
NotImplementedError: try star`
example test: `test_grammar.GrammarTests.test_try_star`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_type self._check_path_limitations(<str>) File <str>, line <n>, in _check_path_limitations len(i`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_reprlib.py", line 695, in test_type
    self._check_path_limitations('foo')
  File "/work/suites/cpython/Lib/test/test_reprlib.py", line 674, in _check_path_limitations
    len(importlib.util.cache_from_source("x.py")) - l`
example test: `test_reprlib.LongReprTest.test_type`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_ucd_510 self.assertTrue(unicodedata.mirrored(<str>)) ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ AttributeEr`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_unicodedata.py", line 308, in test_ucd_510
    self.assertTrue(unicodedata.mirrored("\u0f3a"))
                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: module '_cpython_unicodedata' does not have 'mirrored' attri`
example test: `test_unicodedata.UnicodeMiscTest.test_ucd_510`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_unicode_error self.assertTrue(output.startswith(<str>), output) AssertionError: False is not tr`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_code_module.py", line 104, in test_unicode_error
    self.assertTrue(output.startswith('UnicodeEncodeError: '), output)
AssertionError: False is not true : 
now exiting InteractiveConsole...


Stdout:
<MagicMock name='stdo`
example test: `test_code_module.TestInteractiveConsole.test_unicode_error`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_union self.assertEqual(len(u), len(self.items) + len(self.items2)) AssertionError: <n> != <n>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_weakset.py", line 87, in test_union
    self.assertEqual(len(u), len(self.items) + len(self.items2))
AssertionError: 6 != 5`
example test: `test_weakset.TestWeakSet.test_union`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_urlsplit_normalization denorm_chars = [ ^ File <str>, line <n>, in <listcomp> if unicodedata.de`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_urlparse.py", line 1391, in test_urlsplit_normalization
    denorm_chars = [
                   ^
  File "/work/suites/cpython/Lib/test/test_urlparse.py", line 1393, in <listcomp>
    if unicodedata.decomposition(c)
      `
example test: `test_urlparse.UrlParseTestCase.test_urlsplit_normalization`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_valid self.assertEqual(getattr(T, <str>), <n>) ^^^^^^^^^^^^^^^^^^^^ AttributeError: <str> objec`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_unicode_identifiers.py", line 12, in test_valid
    self.assertEqual(getattr(T, "\u03bc"), 2)
                     ^^^^^^^^^^^^^^^^^^^^
AttributeError: 'T' object has no attribute 'μ'`
example test: `test_unicode_identifiers.PEP3131Test.test_valid`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_vsBuiltinSort f = self.module.insort_left ^^^^^^^^^^^^^^^^^^^^^^^ AttributeError: <str> object `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_bisect.py", line 309, in test_vsBuiltinSort
    f = self.module.insort_left
        ^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: 'NoneType' object has no attribute 'insort_left'`
example test: `test_bisect.TestInsortC.test_vsBuiltinSort`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_warnings_on_cleanup with warnings_helper.check_warnings((<str>, File <str>, line <n>, in __exit`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_tempfile.py", line 1968, in test_warnings_on_cleanup
    with warnings_helper.check_warnings(('Implicitly',
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/contextlib.py", line 144, in __exit__
    next(`
example test: `test_tempfile.TestTemporaryDirectory.test_warnings_on_cleanup`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_weak_destroy_and_mutate_while_iterating self.assertNotIn(u, s) AssertionError: <str> unexpected`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_weakset.py", line 391, in test_weak_destroy_and_mutate_while_iterating
    self.assertNotIn(u, s)
AssertionError: 'Z' unexpectedly found in {<weakref at 749517136; to 'UserString' at 909612958>, <weakref at 1853469890; to `
example test: `test_weakset.TestWeakSet.test_weak_destroy_and_mutate_while_iterating`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_weak_destroy_while_iterating self.assertEqual(len(s), len(items)) AssertionError: <n> != <n>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_weakset.py", line 367, in test_weak_destroy_while_iterating
    self.assertEqual(len(s), len(items))
AssertionError: 3 != 2`
example test: `test_weakset.TestWeakSet.test_weak_destroy_while_iterating`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_weakref p = weakref.proxy(d) ^^^^^^^^^^^^^^^^ TypeError: cannot create weak reference to <str> `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_deque.py", line 866, in test_weakref
    p = weakref.proxy(d)
        ^^^^^^^^^^^^^^^^
TypeError: cannot create weak reference to 'collections.deque' object`
example test: `test_deque.TestSubclass.test_weakref`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_weekday self.roundtrip(<str>, <n>) File <str>, line <n>, in roundtrip strp_output = _strptime._`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_strptime.py", line 371, in test_weekday
    self.roundtrip('%u', 6)
  File "/work/suites/cpython/Lib/test/test_strptime.py", line 304, in roundtrip
    strp_output = _strptime._strptime_time(strf_output, fmt)
             `
example test: `test_strptime.StrptimeTests.test_weekday`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_writelines_rollover f.writelines(it()) File <str>, line <n>, in writelines rv = file.writelines`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_tempfile.py", line 1301, in test_writelines_rollover
    f.writelines(it())
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/tempfile.py", line 853, in writelines
    rv = file.writelines(iterable)
      `
example test: `test_tempfile.TestSpooledTemporaryFile.test_writelines_rollover`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_xoption self.assertEqual(out, <str>) AssertionError: <str> != <str> - <n> + <n>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_utf8_mode.py", line 52, in test_xoption
    self.assertEqual(out, '1')
AssertionError: '0' != '1'
- 0
+ 1`
example test: `test_utf8_mode.UTF8ModeTests.test_xoption`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in testDel self.assertEqual([<str>], x) AssertionError: Lists differ: [<str>] != [] First list contains`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_class.py", line 472, in testDel
    self.assertEqual(["crab people, crab people"], x)
AssertionError: Lists differ: ['crab people, crab people'] != []

First list contains 1 additional elements.
First extra element 0:
'cra`
example test: `test_class.ClassTests.testDel`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in testExp2 self.assertRaises(TypeError, math.exp2) ^^^^^^^^^ AttributeError: module <str> has no attri`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_math.py", line 520, in testExp2
    self.assertRaises(TypeError, math.exp2)
                                 ^^^^^^^^^
AttributeError: module 'math' has no attribute 'exp2'`
example test: `test_math.MathTests.testExp2`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in testHasAttrString _testcapi = import_helper.import_module(<str>) ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_class.py", line 451, in testHasAttrString
    _testcapi = import_helper.import_module('_testcapi')
                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/support/import_helper.py", l`
example test: `test_class.ClassTests.testHasAttrString`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in testObjectAttributeAccessErrorMessages with self.assertRaisesRegex(AttributeError, error_msg): Asser`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_class.py", line 698, in testObjectAttributeAccessErrorMessages
    with self.assertRaisesRegex(AttributeError, error_msg):
AssertionError: "'A' object has no attribute 'x'" does not match "A has no attribute 'x'"`
example test: `test_class.ClassTests.testObjectAttributeAccessErrorMessages`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in testTypeAttributeAccessErrorMessages with self.assertRaisesRegex(AttributeError, error_msg): Asserti`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_class.py", line 683, in testTypeAttributeAccessErrorMessages
    with self.assertRaisesRegex(AttributeError, error_msg):
AssertionError: "type object 'A' has no attribute 'x'" does not match "'A' object has no attribute 'x`
example test: `test_class.ClassTests.testTypeAttributeAccessErrorMessages`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in wrapper asyncio.run(coro) File <str>, line <n>, in run return runner.run(main) ^^^^^^^^^^^^^^^^ File`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_contextlib_async.py", line 19, in wrapper
    asyncio.run(coro)
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/asyncio/runners.py", line 194, in run
    return runner.run(main)
           ^^^^^^^^^^^^^^`
example test: `test_contextlib_async.TestAsyncExitStack.test_async_exit_exception_chaining`

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
