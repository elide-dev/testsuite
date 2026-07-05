# Impact-ordered failures

## By root-cause signature

### 6 × `TypeError: MethClass.meth_noargs() takes <n> positional argument but <n> were given During handling of the above exception, another exception occurred: Tracebac`

distinct messages:
- `TypeError: MethClass.meth_noargs() takes 1 positional argument but 2 were given

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 325, in test_noargs_error_arg
    self.assertRaisesRegex(`
- `TypeError: MethClass.meth_noargs() takes 1 positional argument but 3 were given

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 331, in test_noargs_error_arg2
    self.assertRaisesRegex`
- `TypeError: MethClass.meth_noargs() takes 1 positional argument but 4 were given

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 337, in test_noargs_error_ext
    self.assertRaisesRegex(`
example test: `test_call.TestCallingConventionsClass.test_noargs_error_arg`

### 4 × `Traceback (most recent call last): File <str>, line <n>, in run return self._loop.run_until_complete(task) ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ File <str>, line `

distinct messages:
- `Traceback (most recent call last):
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/asyncio/runners.py", line 118, in run
    return self._loop.run_until_complete(task)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12`
- `Traceback (most recent call last):
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/asyncio/runners.py", line 118, in run
    return self._loop.run_until_complete(task)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12`
- `Traceback (most recent call last):
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/asyncio/runners.py", line 118, in run
    return self._loop.run_until_complete(task)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12`
- `Traceback (most recent call last):
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/asyncio/runners.py", line 118, in run
    return self._loop.run_until_complete(task)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12`
example test: `test_inspect.test_inspect.TestGetAsyncGenState.test_closed_after_exhaustion`

### 4 × `Traceback (most recent call last): File <str>, line <n>, in test_free_after_iterating support.check_free_after_iterating(self, iter, self.thetype) File <str>, l`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_set.py", line 356, in test_free_after_iterating
    support.check_free_after_iterating(self, iter, self.thetype)
  File "/work/suites/cpython/Lib/test/support/__init__.py", line 1830, in check_free_after_iterating
    test`
example test: `test_set.TestFrozenSet.test_free_after_iterating`

### 4 × `TypeError: MethClass.meth_o() got an unexpected keyword argument <str> During handling of the above exception, another exception occurred: Traceback (most recen`

distinct messages:
- `TypeError: MethClass.meth_o() got an unexpected keyword argument 'k'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 313, in test_o_error_arg_kw
    self.assertRaisesRegex(
AssertionErr`
- `TypeError: MethClass.meth_o() got an unexpected keyword argument 'k'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 307, in test_o_error_kw
    self.assertRaisesRegex(
AssertionError: `
example test: `test_call.TestCallingConventionsClass.test_o_error_arg_kw`

### 4 × `TypeError: MethClass.meth_o() takes <n> positional arguments but <n> were given During handling of the above exception, another exception occurred: Traceback (m`

distinct messages:
- `TypeError: MethClass.meth_o() takes 2 positional arguments but 4 were given

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 301, in test_o_error_ext
    self.assertRaisesRegex(
Assertio`
- `TypeError: MethClass.meth_o() takes 2 positional arguments but 3 were given

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 295, in test_o_error_two_args
    self.assertRaisesRegex(
Ass`
example test: `test_call.TestCallingConventionsClass.test_o_error_ext`

### 3 × `Traceback (most recent call last): File <str>, line <n>, in test_check_encoding_errors self.assertEqual(proc.rc, <n>, proc) AssertionError: <n> != <n> : _Python`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_bytes.py", line 381, in test_check_encoding_errors
    self.assertEqual(proc.rc, 10, proc)
AssertionError: 22 != 10 : _PythonRunResult(rc=22, out=b'', err=b'')`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_unicode.py", line 2699, in test_check_encoding_errors
    self.assertEqual(proc.rc, 10, proc)
AssertionError: 22 != 10 : _PythonRunResult(rc=22, out=b'', err=b'')`
example test: `test_bytes.ByteArrayTest.test_check_encoding_errors`

### 3 × `Traceback (most recent call last): File <str>, line <n>, in test_free_after_iterating support.check_free_after_iterating(self, iter, self.type2test) File <str>,`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/seq_tests.py", line 430, in test_free_after_iterating
    support.check_free_after_iterating(self, iter, self.type2test)
  File "/work/suites/cpython/Lib/test/support/__init__.py", line 1830, in check_free_after_iterating
    t`
example test: `test_tuple.TupleTest.test_free_after_iterating`

### 3 × `TypeError: MethInstance.meth_noargs() takes <n> positional argument but <n> were given During handling of the above exception, another exception occurred: Trace`

distinct messages:
- `TypeError: MethInstance.meth_noargs() takes 1 positional argument but 2 were given

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 325, in test_noargs_error_arg
    self.assertRaisesReg`
- `TypeError: MethInstance.meth_noargs() takes 1 positional argument but 3 were given

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 331, in test_noargs_error_arg2
    self.assertRaisesRe`
- `TypeError: MethInstance.meth_noargs() takes 1 positional argument but 4 were given

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 337, in test_noargs_error_ext
    self.assertRaisesReg`
example test: `test_call.TestCallingConventionsInstance.test_noargs_error_arg`

### 3 × `TypeError: MethStatic.meth_noargs() takes <n> positional argument but <n> were given During handling of the above exception, another exception occurred: Traceba`

distinct messages:
- `TypeError: MethStatic.meth_noargs() takes 1 positional argument but 2 were given

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 325, in test_noargs_error_arg
    self.assertRaisesRegex`
- `TypeError: MethStatic.meth_noargs() takes 1 positional argument but 3 were given

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 331, in test_noargs_error_arg2
    self.assertRaisesRege`
- `TypeError: MethStatic.meth_noargs() takes 1 positional argument but 4 were given

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 337, in test_noargs_error_ext
    self.assertRaisesRegex`
example test: `test_call.TestCallingConventionsStatic.test_noargs_error_arg`

### 2 × `FileNotFoundError: [Errno <n>] No such file or directory: <str>`

distinct messages:
- `FileNotFoundError: [Errno 2] No such file or directory: '@test_29_tmpæ.out'`
example test: `test_json.test_tool.TestTool.test_ensure_ascii_default`

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

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_bytes_decode self.assertEqual(self.loads(bom + encoded), data) ^^^^^^^^^^^^^^^^^^^^^^^^^ File <`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_json/test_unicode.py", line 70, in test_bytes_decode
    self.assertEqual(self.loads(bom + encoded), data)
                     ^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/j`
example test: `test_json.test_unicode.TestCUnicode.test_bytes_decode`

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

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_errors self.assertEqualException(f, <str>) File <str>, line <n>, in assertEqualException self.a`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_inspect/test_inspect.py", line 2051, in test_errors
    self.assertEqualException(f, '1, c=3, a=2')
  File "/work/suites/cpython/Lib/test/test_inspect/test_inspect.py", line 1917, in assertEqualException
    self.assertEqu`
example test: `test_inspect.test_inspect.TestGetcallargsFunctions.test_errors`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_free_after_iterating test.support.check_free_after_iterating(self, iter, self.type2test) File <`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_bytes.py", line 991, in test_free_after_iterating
    test.support.check_free_after_iterating(self, iter, self.type2test)
  File "/work/suites/cpython/Lib/test/support/__init__.py", line 1830, in check_free_after_iterating`
example test: `test_bytes.ByteArrayTest.test_free_after_iterating`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_highly_nested_subclass self.assertEqual(deleted, list(reversed(range(<n>)))) AssertionError: Li`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_ordered_dict.py", line 519, in test_highly_nested_subclass
    self.assertEqual(deleted, list(reversed(range(100))))
AssertionError: Lists differ: [] != [99, 98, 97, 96, 95, 94, 93, 92, 91, 90, 8[343 chars]1, 0]

Second li`
example test: `test_ordered_dict.CPythonBuiltinDictTests.test_highly_nested_subclass`

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

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_string_with_utf8_bom bom_json = <str>.encode(<str>).decode(<str>) ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_json/test_decode.py", line 109, in test_string_with_utf8_bom
    bom_json = "[1,2,3]".encode('utf-8-sig').decode('utf-8')
               ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
LookupError: unknown encoding utf-8-sig`
example test: `test_json.test_decode.TestCDecode.test_string_with_utf8_bom`

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

### 2 × `TypeError: %i format: a real number is required, not complex During handling of the above exception, another exception occurred: Traceback (most recent call las`

distinct messages:
- `TypeError: %i format: a real number is required, not complex

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_bytes.py", line 769, in test_mod
    with self.assertRaisesRegex(TypeError, msg):
         `
example test: `test_bytes.ByteArrayTest.test_mod`

### 2 × `TypeError: meth_noargs() takes <n> positional arguments but <n> were given During handling of the above exception, another exception occurred: Traceback (most r`

distinct messages:
- `TypeError: meth_noargs() takes 0 positional arguments but 2 were given

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 331, in test_noargs_error_arg2
    self.assertRaisesRegex(
Asserti`
- `TypeError: meth_noargs() takes 0 positional arguments but 3 were given

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 337, in test_noargs_error_ext
    self.assertRaisesRegex(
Assertio`
example test: `test_call.TestCallingConventions.test_noargs_error_arg2`

### 2 × `TypeError: meth_o() got an unexpected keyword argument <str> During handling of the above exception, another exception occurred: Traceback (most recent call las`

distinct messages:
- `TypeError: meth_o() got an unexpected keyword argument 'k'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 313, in test_o_error_arg_kw
    self.assertRaisesRegex(
AssertionError: "meth_`
- `TypeError: meth_o() got an unexpected keyword argument 'k'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 307, in test_o_error_kw
    self.assertRaisesRegex(
AssertionError: "meth_o\(\`
example test: `test_call.TestCallingConventions.test_o_error_arg_kw`

### 2 × `TypeError: meth_o() takes <n> positional argument but <n> were given During handling of the above exception, another exception occurred: Traceback (most recent `

distinct messages:
- `TypeError: meth_o() takes 1 positional argument but 3 were given

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 301, in test_o_error_ext
    self.assertRaisesRegex(
AssertionError: "me`
- `TypeError: meth_o() takes 1 positional argument but 2 were given

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 295, in test_o_error_two_args
    self.assertRaisesRegex(
AssertionError`
example test: `test_call.TestCallingConventions.test_o_error_ext`

### 2 × `TypeError: MethClass.meth_fastcall() got an unexpected keyword argument <str> During handling of the above exception, another exception occurred: Traceback (mos`

distinct messages:
- `TypeError: MethClass.meth_fastcall() got an unexpected keyword argument 'k'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 361, in test_fastcall_error_kw
    self.assertRaisesRegex(
As`
example test: `test_call.TestCallingConventionsClass.test_fastcall_error_kw`

### 2 × `TypeError: MethClass.meth_noargs() got an unexpected keyword argument <str> During handling of the above exception, another exception occurred: Traceback (most `

distinct messages:
- `TypeError: MethClass.meth_noargs() got an unexpected keyword argument 'k'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 343, in test_noargs_error_kw
    self.assertRaisesRegex(
Assert`
example test: `test_call.TestCallingConventionsClass.test_noargs_error_kw`

### 2 × `TypeError: MethClass.meth_o() missing <n> required positional argument: <str> During handling of the above exception, another exception occurred: Traceback (mos`

distinct messages:
- `TypeError: MethClass.meth_o() missing 1 required positional argument: 'arg'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 291, in test_o_error_no_arg
    self.assertRaisesRegex(TypeEr`
example test: `test_call.TestCallingConventionsClass.test_o_error_no_arg`

### 2 × `TypeError: MethClass.meth_varargs() got an unexpected keyword argument <str> During handling of the above exception, another exception occurred: Traceback (most`

distinct messages:
- `TypeError: MethClass.meth_varargs() got an unexpected keyword argument 'k'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 267, in test_varargs_error_kw
    self.assertRaisesRegex(
Asse`
example test: `test_call.TestCallingConventionsClass.test_varargs_error_kw`

### 2 × `TypeError: MethInstance.meth_o() got an unexpected keyword argument <str> During handling of the above exception, another exception occurred: Traceback (most re`

distinct messages:
- `TypeError: MethInstance.meth_o() got an unexpected keyword argument 'k'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 313, in test_o_error_arg_kw
    self.assertRaisesRegex(
Assertion`
- `TypeError: MethInstance.meth_o() got an unexpected keyword argument 'k'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 307, in test_o_error_kw
    self.assertRaisesRegex(
AssertionErro`
example test: `test_call.TestCallingConventionsInstance.test_o_error_arg_kw`

### 2 × `TypeError: MethInstance.meth_o() takes <n> positional arguments but <n> were given During handling of the above exception, another exception occurred: Traceback`

distinct messages:
- `TypeError: MethInstance.meth_o() takes 2 positional arguments but 4 were given

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 301, in test_o_error_ext
    self.assertRaisesRegex(
Asser`
- `TypeError: MethInstance.meth_o() takes 2 positional arguments but 3 were given

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 295, in test_o_error_two_args
    self.assertRaisesRegex(
`
example test: `test_call.TestCallingConventionsInstance.test_o_error_ext`

### 2 × `TypeError: MethStatic.meth_o() got an unexpected keyword argument <str> During handling of the above exception, another exception occurred: Traceback (most rece`

distinct messages:
- `TypeError: MethStatic.meth_o() got an unexpected keyword argument 'k'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 313, in test_o_error_arg_kw
    self.assertRaisesRegex(
AssertionEr`
- `TypeError: MethStatic.meth_o() got an unexpected keyword argument 'k'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 307, in test_o_error_kw
    self.assertRaisesRegex(
AssertionError:`
example test: `test_call.TestCallingConventionsStatic.test_o_error_arg_kw`

### 2 × `TypeError: MethStatic.meth_o() takes <n> positional arguments but <n> were given During handling of the above exception, another exception occurred: Traceback (`

distinct messages:
- `TypeError: MethStatic.meth_o() takes 2 positional arguments but 4 were given

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 301, in test_o_error_ext
    self.assertRaisesRegex(
Asserti`
- `TypeError: MethStatic.meth_o() takes 2 positional arguments but 3 were given

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 295, in test_o_error_two_args
    self.assertRaisesRegex(
As`
example test: `test_call.TestCallingConventionsStatic.test_o_error_ext`

### 2 × `TypeError: str.find() takes from <n> to <n> positional arguments but <n> were given During handling of the above exception, another exception occurred: Tracebac`

distinct messages:
- `TypeError: str.find() takes from 2 to 4 positional arguments but 5 were given

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/string_tests.py", line 1508, in test_find_etc_raise_correct_error_messages
    `
example test: `test_unicode.UnicodeTest.test_find_etc_raise_correct_error_messages`

### 1 × `AttributeError: A has no attribute <str> During handling of the above exception, another exception occurred: Traceback (most recent call last): File <str>, line`

distinct messages:
- `AttributeError: A has no attribute 'x'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_class.py", line 698, in testObjectAttributeAccessErrorMessages
    with self.assertRaisesRegex(AttributeError, er`
example test: `test_class.ClassTests.testObjectAttributeAccessErrorMessages`

### 1 × `AttributeError: type has no attribute <str> During handling of the above exception, another exception occurred: Traceback (most recent call last): File <str>, l`

distinct messages:
- `AttributeError: type has no attribute 'x'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_class.py", line 685, in testTypeAttributeAccessErrorMessages
    with self.assertRaisesRegex(AttributeError, e`
example test: `test_class.ClassTests.testTypeAttributeAccessErrorMessages`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in call return func(*ba.args, **ba.kwargs) ^^^^^^^^^^^^^^^^^^^^^^^^^^^ TypeError: TestSignatureBind.tes`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_inspect/test_inspect.py", line 4706, in call
    return func(*ba.args, **ba.kwargs)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^
TypeError: TestSignatureBind.test_signature_bind_positional_only.<locals>.test() missing 2 required`
example test: `test_inspect.test_inspect.TestSignatureBind.test_signature_bind_positional_only`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in cleanup ast.AST._fields = old_value ^^^^^^^^^^^^^^^ TypeError: cannot set <str> attribute of immutab`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_ast/test_ast.py", line 74, in cleanup
    ast.AST._fields = old_value
    ^^^^^^^^^^^^^^^
TypeError: cannot set '_fields' attribute of immutable type 'ast.AST'`
example test: `test_ast.test_ast.AST_Tests.test_AST_fields_NULL_check`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_3114 self.assertIsNone(e) AssertionError: () is not None`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_exceptions.py", line 1100, in test_3114
    self.assertIsNone(e)
AssertionError: () is not None`
example test: `test_exceptions.ExceptionTests.test_3114`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_all_freed self.assertIsNone(wr_callback()) AssertionError: <function FinalizeTestCase.test_all_`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_weakref.py", line 2108, in test_all_freed
    self.assertIsNone(wr_callback())
AssertionError: <function FinalizeTestCase.test_all_freed.<locals>.callback at 0x114cb2a3> is not None`
example test: `test_weakref.FinalizeTestCase.test_all_freed`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_AST_fields_NULL_check del ast.AST._fields ^^^^^^^^^^^^^^^ TypeError: cannot set <str> attribute`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_ast/test_ast.py", line 77, in test_AST_fields_NULL_check
    del ast.AST._fields
        ^^^^^^^^^^^^^^^
TypeError: cannot set '_fields' attribute of immutable type 'ast.AST'`
example test: `test_ast.test_ast.AST_Tests.test_AST_fields_NULL_check`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_atexit rc, out, err = script_helper.assert_python_ok(<str>, prog) ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_weakref.py", line 2135, in test_atexit
    rc, out, err = script_helper.assert_python_ok('-c', prog)
                   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/support/script_helper`
example test: `test_weakref.FinalizeTestCase.test_atexit`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_attribute_same_name_as_global_var self.assertEqual(inspect.getclosurevars(f), expected) Asserti`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_inspect/test_inspect.py", line 1815, in test_attribute_same_name_as_global_var
    self.assertEqual(inspect.getclosurevars(f), expected)
AssertionError: Closu[199 chars]={'print': <built-in function print>}, unbound=set())`
example test: `test_inspect.test_inspect.TestGetClosureVars.test_attribute_same_name_as_global_var`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_bad_syntax self.assertEqual(stdout, b<str>) AssertionError: b<str> != b<str>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 274, in test_bad_syntax
    self.assertEqual(stdout, b'')
AssertionError: b'\xe2\x95\xad\xe2\x94\x80 Script Error \xe[4668 chars]af\n' != b''`
example test: `test_py_compile.PyCompileCLITestCase.test_bad_syntax`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_bad_syntax_with_quiet self.assertEqual(stdout, b<str>) AssertionError: b<str> != b<str>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 283, in test_bad_syntax_with_quiet
    self.assertEqual(stdout, b'')
AssertionError: b'\xe2\x95\xad\xe2\x94\x80 Script Error \xe[4668 chars]af\n' != b''`
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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_base_class_have_text_signature self.assertEqual(text_signature, <str>) AssertionError: None != `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_inspect/test_inspect.py", line 5211, in test_base_class_have_text_signature
    self.assertEqual(text_signature, '(raw, buffer_size=DEFAULT_BUFFER_SIZE)')
AssertionError: None != '(raw, buffer_size=DEFAULT_BUFFER_SIZE)'`
example test: `test_inspect.test_inspect.TestSignatureDefinitions.test_base_class_have_text_signature`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_basic self.assertRaises(MemoryError, list, range(sys.maxsize // <n>)) AssertionError: MemoryErr`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_list.py", line 38, in test_basic
    self.assertRaises(MemoryError, list, range(sys.maxsize // 2))
AssertionError: MemoryError not raised by list`
example test: `test_list.ListTest.test_basic`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_broken_pipe_error self.assertEqual(proc.returncode, errno.EPIPE) AssertionError: <n> != <n>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_json/test_tool.py", line 232, in test_broken_pipe_error
    self.assertEqual(proc.returncode, errno.EPIPE)
AssertionError: 0 != 32`
example test: `test_json.test_tool.TestTool.test_broken_pipe_error`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_Buffer self.assertIsInstance(sample(b<str>), Buffer) AssertionError: b<str> is not an instance `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_collections.py", line 1965, in test_Buffer
    self.assertIsInstance(sample(b"x"), Buffer)
AssertionError: b'x' is not an instance of <class 'collections.abc.Buffer'>`
example test: `test_collections.TestCollectionABCs.test_Buffer`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_bytearray_join_with_misbehaving_iterator self.assertRaises(BufferError, array.join, iterator())`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_builtin.py", line 2086, in test_bytearray_join_with_misbehaving_iterator
    self.assertRaises(BufferError, array.join, iterator())
AssertionError: BufferError not raised by join`
example test: `test_builtin.BuiltinTest.test_bytearray_join_with_misbehaving_iterator`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_cleanup self.assertEqual([<str>, <str>], out.decode().splitlines()) AssertionError: Lists diffe`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_builtin.py", line 2467, in test_cleanup
    self.assertEqual(["before", "after"], out.decode().splitlines())
AssertionError: Lists differ: ['before', 'after'] != []

First list contains 2 additional elements.
First extra e`
example test: `test_builtin.ShutdownTest.test_cleanup`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_codecs_charmap self.assertEqual(str(s, encoding).encode(encoding), s) AssertionError: b<str>()*`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_unicode.py", line 2366, in test_codecs_charmap
    self.assertEqual(str(s, encoding).encode(encoding), s)
AssertionError: b'\x0[119 chars] !"#$\x15&\'()*+,-./0123456789:;<=>?@ABCDEFGHI[54 chars]\x7f' != b'\x0[119 chars] !"`
example test: `test_unicode.UnicodeTest.test_codecs_charmap`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_codecs_idna self.assertEqual(<str>.encode(<str>), b<str>) ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Look`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_unicode.py", line 2248, in test_codecs_idna
    self.assertEqual("www.python.org.".encode("idna"), b"www.python.org.")
                     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
LookupError: unknown encoding idna`
example test: `test_unicode.UnicodeTest.test_codecs_idna`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_compact process = subprocess.run(args, input=input_, capture_output=True, text=True, check=True`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_json/test_tool.py", line 197, in test_compact
    process = subprocess.run(args, input=input_, capture_output=True, text=True, check=True)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`
example test: `test_json.test_tool.TestTool.test_compact`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_compress_fast_best_are_exclusive self.assertIn(b<str>, err) AssertionError: b<str> not found in`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_gzip.py", line 1089, in test_compress_fast_best_are_exclusive
    self.assertIn(b"error: argument --best: not allowed with argument --fast", err)
AssertionError: b'error: argument --best: not allowed with argument --fast' `
example test: `test_gzip.TestCommandLine.test_compress_fast_best_are_exclusive`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_created self.assertEqual(self._asyncgenstate(), inspect.AGEN_CREATED) ^^^^^^^^^^^^^^^^^^^^^ Fil`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_inspect/test_inspect.py", line 2648, in test_created
    self.assertEqual(self._asyncgenstate(), inspect.AGEN_CREATED)
                     ^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_inspect/test_insp`
example test: `test_inspect.test_inspect.TestGetAsyncGenState.test_created`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_custom_builder_only_end_ns self.assertEqual(builder, [ AssertionError: [(<str>, <str>), (<str>,`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_xml_etree.py", line 767, in test_custom_builder_only_end_ns
    self.assertEqual(builder, [
AssertionError: [('end-ns', ''), ('end-ns', 'p'), ('end-ns', 'a')] != [('end-ns', 'a'), ('end-ns', 'p'), ('end-ns', '')]`
example test: `test_xml_etree.ElementTreeTest.test_custom_builder_only_end_ns`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_cycle_through_dict for o in gc.get_objects(): ^^^^^^^^^^^^^^^^ AttributeError: module <str> has`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_descr.py", line 4894, in test_cycle_through_dict
    for o in gc.get_objects():
             ^^^^^^^^^^^^^^^^
AttributeError: module 'gc' has no attribute 'get_objects'`
example test: `test_descr.ClassPropertiesAndMethods.test_cycle_through_dict`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_decompress_cannot_have_flags_compression self.assertIn(b<str>, err) AssertionError: b<str> not `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_gzip.py", line 1094, in test_decompress_cannot_have_flags_compression
    self.assertIn(b'error: argument -d/--decompress: not allowed with argument --fast', err)
AssertionError: b'error: argument -d/--decompress: not allo`
example test: `test_gzip.TestCommandLine.test_decompress_cannot_have_flags_compression`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_decompress_infile_outfile_error self.assertEqual(b<str>, err.strip()) AssertionError: b<str> !=`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_gzip.py", line 1039, in test_decompress_infile_outfile_error
    self.assertEqual(b"filename doesn't end in .gz: 'thisisatest.out'", err.strip())
AssertionError: b"filename doesn't end in .gz: 'thisisatest.out'" != b"error`
example test: `test_gzip.TestCommandLine.test_decompress_infile_outfile_error`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_decompress_stdin_stdout self.assertEqual(err, b<str>) AssertionError: b<str> != b<str>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_gzip.py", line 1017, in test_decompress_stdin_stdout
    self.assertEqual(err, b'')
AssertionError: b"error: unexpected argument '-d' found\n\[146 chars]'.\n" != b''`
example test: `test_gzip.TestCommandLine.test_decompress_stdin_stdout`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_delete_hook self.assertEqual(log, [<n>]) AssertionError: Lists differ: [] != [<n>] Second list `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_descr.py", line 3632, in test_delete_hook
    self.assertEqual(log, [1])
AssertionError: Lists differ: [] != [1]

Second list contains 1 additional elements.
First extra element 0:
1

- []
+ [1]
?  +`
example test: `test_descr.ClassPropertiesAndMethods.test_delete_hook`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_descrdoc check(FileIO.closed, <str>) # getset descriptor ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_descr.py", line 3248, in test_descrdoc
    check(FileIO.closed, "True if the file is closed") # getset descriptor
    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_descr.py",`
example test: `test_descr.ClassPropertiesAndMethods.test_descrdoc`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_details rc, out, err = assert_python_ok(*args, <str>, <str>, ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_inspect/test_inspect.py", line 5334, in test_details
    rc, out, err = assert_python_ok(*args, '-m', 'inspect',
                   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/support/scr`
example test: `test_inspect.test_inspect.TestMain.test_details`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_dict_clear self.assertNotIn(<str>, repr(od)) ^^^^^^^^ KeyError: <str>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_ordered_dict.py", line 640, in test_dict_clear
    self.assertNotIn('NULL', repr(od))
                             ^^^^^^^^
KeyError: 'spam'`
example test: `test_ordered_dict.CPythonOrderedDictSubclassTests.test_dict_clear`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_digit_numeric_consistent self.assertEqual(dec, self.db.numeric(c)) ^^^^^^^^^^^^^^^^^^ Attribute`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_unicodedata.py", line 298, in test_digit_numeric_consistent
    self.assertEqual(dec, self.db.numeric(c))
                          ^^^^^^^^^^^^^^^^^^
AttributeError: module 'unicodedata' has no attribute 'numeric'`
example test: `test_unicodedata.UnicodeMiscTest.test_digit_numeric_consistent`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_directory_compiled compiled_name = py_compile.compile(script_name, doraise=True) ^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_runpy.py", line 696, in test_directory_compiled
    compiled_name = py_compile.compile(script_name, doraise=True)
                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/opt/elide/lib/resources/python/py`
example test: `test_runpy.RunPathTestCase.test_directory_compiled`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_doctest_main_issue4197 self.assertIn(expected.encode(<str>), out) AssertionError: b<str> not fo`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_zipimport_support.py", line 205, in test_doctest_main_issue4197
    self.assertIn(expected.encode('utf-8'), out)
AssertionError: b'File "/tmp/tmpa56t3q4i/script.py", line 2, in __main__.Test' not found in b'***************`
example test: `test_zipimport_support.ZipSupportTests.test_doctest_main_issue4197`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_doctype self.assertEqual(parser.close(), AssertionError: None != (<str>, <str>)`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_xml_etree.py", line 3607, in test_doctype
    self.assertEqual(parser.close(),
AssertionError: None != ('html', '-//W3C//DTD XHTML 1.0 Transitio[63 chars]dtd')`
example test: `test_xml_etree.TreeBuilderTest.test_doctype`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_east_asian_width_9_0_changes self.assertEqual(self.db.ucd_3_2_0.east_asian_width(<str>), <str>)`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_unicodedata.py", line 250, in test_east_asian_width_9_0_changes
    self.assertEqual(self.db.ucd_3_2_0.east_asian_width('\u231a'), 'N')
AssertionError: 'W' != 'N'
- W
+ N`
example test: `test_unicodedata.UnicodeFunctionsTest.test_east_asian_width_9_0_changes`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_ensure_ascii_default assert_python_ok(<str>, <str>, infile, outfile) File <str>, line <n>, in a`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_json/test_tool.py", line 216, in test_ensure_ascii_default
    assert_python_ok('-m', 'json.tool', infile, outfile)
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 166, in assert_python_ok
    return `
example test: `test_json.test_tool.TestTool.test_ensure_ascii_default`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_entity self.assertEqual(str(cm.exception), AssertionError: <str> != <str> - undefined entity &e`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_xml_etree.py", line 1156, in test_entity
    self.assertEqual(str(cm.exception),
AssertionError: 'undefined entity &entity;: line 1, column 18' != 'undefined entity: line 1, column 10'
- undefined entity &entity;: line 1, `
example test: `test_xml_etree.ElementTreeTest.test_entity`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_errors self.assertEqualException(f, <str>) File <str>, line <n>, in assertEqualException return`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_inspect/test_inspect.py", line 2051, in test_errors
    self.assertEqualException(f, '1, c=3, a=2')
  File "/work/suites/cpython/Lib/test/test_inspect/test_inspect.py", line 2118, in assertEqualException
    return super(T`
example test: `test_inspect.test_inspect.TestGetcallargsUnboundMethods.test_errors`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_file_not_exists self.assertEqual(rc, <n>) AssertionError: <n> != <n>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 289, in test_file_not_exists
    self.assertEqual(rc, 1)
AssertionError: 2 != 1`
example test: `test_py_compile.PyCompileCLITestCase.test_file_not_exists`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_file_not_exists_with_quiet self.assertEqual(rc, <n>) AssertionError: <n> != <n>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 296, in test_file_not_exists_with_quiet
    self.assertEqual(rc, 1)
AssertionError: 2 != 1`
example test: `test_py_compile.PyCompileCLITestCase.test_file_not_exists_with_quiet`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_filename_in_syntaxerror self.assertIn(file_path.encode(<str>, <str>), stderr) AssertionError: b`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_fstring.py", line 1619, in test_filename_in_syntaxerror
    self.assertIn(file_path.encode("ascii", "backslashreplace"), stderr)
AssertionError: b'/work/.harness/work/cpython-core/shard-6/tempcwd/t.py' not found in b''`
example test: `test_fstring.TestCase.test_filename_in_syntaxerror`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_finalize self.assertEqual(f(), None) AssertionError: <n> != None`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_weakref.py", line 2022, in test_finalize
    self.assertEqual(f(), None)
AssertionError: 199 != None`
example test: `test_weakref.FinalizeTestCase.test_finalize`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_flush_reparse_deferral_disabled self.assert_event_tags(parser, []) # i.e. no elements started ^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_xml_etree.py", line 1682, in test_flush_reparse_deferral_disabled
    self.assert_event_tags(parser, [])  # i.e. no elements started
    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_xml_etr`
example test: `test_xml_etree.XMLPullParserTest.test_flush_reparse_deferral_disabled`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_flush_reparse_deferral_enabled self.assert_event_tags(parser, []) # i.e. no elements started ^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_xml_etree.py", line 1656, in test_flush_reparse_deferral_enabled
    self.assert_event_tags(parser, [])  # i.e. no elements started
    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_xml_etre`
example test: `test_xml_etree.XMLPullParserTest.test_flush_reparse_deferral_enabled`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_free_after_iterating support.check_free_after_iterating(self, iter, dict) File <str>, line <n>,`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_dict.py", line 1285, in test_free_after_iterating
    support.check_free_after_iterating(self, iter, dict)
  File "/work/suites/cpython/Lib/test/support/__init__.py", line 1830, in check_free_after_iterating
    test.asser`
example test: `test_dict.DictTest.test_free_after_iterating`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_free_after_iterating support.check_free_after_iterating(self, iter, self.OrderedDict) File <str`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_ordered_dict.py", line 684, in test_free_after_iterating
    support.check_free_after_iterating(self, iter, self.OrderedDict)
  File "/work/suites/cpython/Lib/test/support/__init__.py", line 1830, in check_free_after_itera`
example test: `test_ordered_dict.CPythonOrderedDictSubclassTests.test_free_after_iterating`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_free_after_iterating support.check_free_after_iterating(self, iter, str) File <str>, line <n>, `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_unicode.py", line 2638, in test_free_after_iterating
    support.check_free_after_iterating(self, iter, str)
  File "/work/suites/cpython/Lib/test/support/__init__.py", line 1830, in check_free_after_iterating
    test.ass`
example test: `test_unicode.UnicodeTest.test_free_after_iterating`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_from_format self.assertEqual(PyBytes_FromFormat(b<str>, c_int(<n>)), AssertionError: b<str> != `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_bytes.py", line 1146, in test_from_format
    self.assertEqual(PyBytes_FromFormat(b'c=%c', c_int(255)),
AssertionError: b'c=\xc3\xbf' != b'c=\xff'`
example test: `test_bytes.BytesTest.test_from_format`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_getclasses_interactive self.assertIn(b<str>, stderr) AssertionError: b<str> not found in b<str>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_inspect/test_inspect.py", line 763, in test_getclasses_interactive
    self.assertIn(b'OSError: source code not available', stderr)
AssertionError: b'OSError: source code not available' not found in b''`
example test: `test_inspect.test_inspect.TestGetsourceInteractive.test_getclasses_interactive`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_getdoc self.assertEqual(inspect.getdoc(SlotUser.power), AssertionError: None != <str>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_inspect/test_inspect.py", line 598, in test_getdoc
    self.assertEqual(inspect.getdoc(SlotUser.power),
AssertionError: None != 'measured in kilowatts'`
example test: `test_inspect.test_inspect.TestRetrievingSourceCode.test_getdoc`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_getfile_class_without_module inspect.getfile(C) File <str>, line <n>, in getfile raise TypeErro`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_inspect/test_inspect.py", line 713, in test_getfile_class_without_module
    inspect.getfile(C)
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/inspect.py", line 924, in getfile
    raise TypeError('{!r}`
example test: `test_inspect.test_inspect.TestRetrievingSourceCode.test_getfile_class_without_module`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_getfullargspec_builtin_methods self.assertFullArgSpecEquals(_pickle.Pickler(io.BytesIO()).dump,`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_inspect/test_inspect.py", line 1110, in test_getfullargspec_builtin_methods
    self.assertFullArgSpecEquals(_pickle.Pickler(io.BytesIO()).dump, ['self', 'obj'])
  File "/work/suites/cpython/Lib/test/test_inspect/test_insp`
example test: `test_inspect.test_inspect.TestClassesAndFunctions.test_getfullargspec_builtin_methods`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_hash self.assertEqual(hash(<str>), hash(b<str>)) AssertionError: <n> != <n>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_builtin.py", line 1015, in test_hash
    self.assertEqual(hash('spam'), hash(b'spam'))
AssertionError: 3536713 != 4460234`
example test: `test_builtin.BuiltinTest.test_hash`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_hash_exact check_one_exact((), <n>, <n>) File <str>, line <n>, in check_one_exact self.fail(msg`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_tuple.py", line 115, in test_hash_exact
    check_one_exact((), 750394483, 5740354900026072187)
  File "/work/suites/cpython/Lib/test/test_tuple.py", line 113, in check_one_exact
    self.fail(msg)
AssertionError: FAIL has`
example test: `test_tuple.TupleTest.test_hash_exact`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_help self.assertIn(b<str>, stdout) AssertionError: b<str> not found in b<str>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_calendar.py", line 866, in test_help
    self.assertIn(b'usage:', stdout)
AssertionError: b'usage:' not found in b"  ______     __         __     _____     ______\n /\\  ___\\   /\\ \\       /\\ \\   /\\  __-.  /\\  ___\\\`
example test: `test_calendar.CommandLineTestCase.test_help`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_help_flag self.assertTrue(out.startswith(b<str>)) AssertionError: False is not true`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_json/test_tool.py", line 153, in test_help_flag
    self.assertTrue(out.startswith(b'usage: '))
AssertionError: False is not true`
example test: `test_json.test_tool.TestTool.test_help_flag`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_html_diff self.assertEqual(actual, fp.read()) AssertionError: <str> != <str>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_difflib.py", line 245, in test_html_diff
    self.assertEqual(actual, fp.read())
AssertionError: '\n<![315 chars]mily:Courier; border:medium;}\n        .diff_h[103422 chars]tml>' != '\n<![315 chars]mily: Menlo, Consolas, M`
example test: `test_difflib.TestSFpatches.test_html_diff`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_html_output_current_year stdout = self.run_ok(<str>, <str>) ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ File `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_calendar.py", line 955, in test_html_output_current_year
    stdout = self.run_ok('--type', 'html')
             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_calendar.py", line 857, in run_ok
  `
example test: `test_calendar.CommandLineTestCase.test_html_output_current_year`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_html_output_year_css self.assertFailure(<str>, <str>, <str>) File <str>, line <n>, in assertFai`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_calendar.py", line 968, in test_html_output_year_css
    self.assertFailure('-t', 'html', '-c')
  File "/work/suites/cpython/Lib/test/test_calendar.py", line 861, in assertFailure
    self.assertIn(b'usage:', stderr)
Asser`
example test: `test_calendar.CommandLineTestCase.test_html_output_year_css`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_html_output_year_encoding stdout = self.run_ok(<str>, <str>, <str>, <str>, <str>) ^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_calendar.py", line 963, in test_html_output_year_encoding
    stdout = self.run_ok('-t', 'html', '--encoding', 'ascii', '2004')
             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpy`
example test: `test_calendar.CommandLineTestCase.test_html_output_year_encoding`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_illegal_arguments self.assertFailure(<str>) File <str>, line <n>, in assertFailure self.assertI`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_calendar.py", line 871, in test_illegal_arguments
    self.assertFailure('-z')
  File "/work/suites/cpython/Lib/test/test_calendar.py", line 861, in assertFailure
    self.assertIn(b'usage:', stderr)
AssertionError: b'usag`
example test: `test_calendar.CommandLineTestCase.test_illegal_arguments`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_indent process = subprocess.run(args, input=input_, capture_output=True, text=True, check=True)`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_json/test_tool.py", line 173, in test_indent
    process = subprocess.run(args, input=input_, capture_output=True, text=True, check=True)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`
example test: `test_json.test_tool.TestTool.test_indent`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_infile_outfile rc, out, err = assert_python_ok(<str>, <str>, infile, outfile) ^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_json/test_tool.py", line 127, in test_infile_outfile
    rc, out, err = assert_python_ok('-m', 'json.tool', infile, outfile)
                   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpyt`
example test: `test_json.test_tool.TestTool.test_infile_outfile`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_infile_stdout rc, out, err = assert_python_ok(<str>, <str>, infile) ^^^^^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_json/test_tool.py", line 104, in test_infile_stdout
    rc, out, err = assert_python_ok('-m', 'json.tool', infile)
                   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/suppor`
example test: `test_json.test_tool.TestTool.test_infile_stdout`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_input_no_stdout_fileno lines = self.run_child(child, b<str>) ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ F`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_builtin.py", line 2386, in test_input_no_stdout_fileno
    lines = self.run_child(child, b"quux\r")
            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_builtin.py", line 2259, in run_chi`
example test: `test_builtin.PtyTests.test_input_no_stdout_fileno`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_issue119004_change_linked_list_by_clear self.check_runtime_error_issue119004(dict1, dict2) File`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_ordered_dict.py", line 841, in test_issue119004_change_linked_list_by_clear
    self.check_runtime_error_issue119004(dict1, dict2)
  File "/work/suites/cpython/Lib/test/test_ordered_dict.py", line 806, in check_runtime_err`
example test: `test_ordered_dict.CPythonOrderedDictSubclassTests.test_issue119004_change_linked_list_by_clear`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_issue119004_change_linked_list_by_delete_key self.check_runtime_error_issue119004(dict1, dict2)`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_ordered_dict.py", line 855, in test_issue119004_change_linked_list_by_delete_key
    self.check_runtime_error_issue119004(dict1, dict2)
  File "/work/suites/cpython/Lib/test/test_ordered_dict.py", line 806, in check_runtim`
example test: `test_ordered_dict.CPythonOrderedDictSubclassTests.test_issue119004_change_linked_list_by_delete_key`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_issue119004_change_size_by_clear self.check_runtime_error_issue119004(dict1, dict2) File <str>,`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_ordered_dict.py", line 815, in test_issue119004_change_size_by_clear
    self.check_runtime_error_issue119004(dict1, dict2)
  File "/work/suites/cpython/Lib/test/test_ordered_dict.py", line 806, in check_runtime_error_issu`
example test: `test_ordered_dict.CPythonOrderedDictSubclassTests.test_issue119004_change_size_by_clear`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_issue119004_change_size_by_delete_key self.check_runtime_error_issue119004(dict1, dict2) File <`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_ordered_dict.py", line 828, in test_issue119004_change_size_by_delete_key
    self.check_runtime_error_issue119004(dict1, dict2)
  File "/work/suites/cpython/Lib/test/test_ordered_dict.py", line 806, in check_runtime_error`
example test: `test_ordered_dict.CPythonOrderedDictSubclassTests.test_issue119004_change_size_by_delete_key`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_iter_function_concealing_reentrant_exhaustion with self.assertRaises(StopIteration): ^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_iter.py", line 375, in test_iter_function_concealing_reentrant_exhaustion
    with self.assertRaises(StopIteration):
         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: StopIteration not raised`
example test: `test_iter.TestCase.test_iter_function_concealing_reentrant_exhaustion`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_iterparse self.assertEqual(str(cm.exception), AssertionError: <str> != <str> - Content is not a`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_xml_etree.py", line 649, in test_iterparse
    self.assertEqual(str(cm.exception),
AssertionError: 'Content is not allowed in trailing section.' != 'junk after document element: line 1, column 12'
- Content is not allowed `
example test: `test_xml_etree.ElementTreeTest.test_iterparse`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_join_overflow self.assertRaises(OverflowError, <str>.join, seq) File <str>, line <n>, in assert`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_unicode.py", line 573, in test_join_overflow
    self.assertRaises(OverflowError, ''.join, seq)
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/unittest/case.py", line 778, in assertRaises
    return con`
example test: `test_unicode.UnicodeTest.test_join_overflow`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_jsonlines process = subprocess.run(args, input=<loc>onlines_raw, capture_output=True, text=True`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_json/test_tool.py", line 146, in test_jsonlines
    process = subprocess.run(args, input=self.jsonlines_raw, capture_output=True, text=True, check=True)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`
example test: `test_json.test_tool.TestTool.test_jsonlines`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_jump_threading for inst in dis.get_instructions(f): ^^^^^^^^^^^^^^^^^^^^^^^ File <str>, line <n`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_patma.py", line 3102, in test_jump_threading
    for inst in dis.get_instructions(f):
                ^^^^^^^^^^^^^^^^^^^^^^^
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/dis.py", line 356, in get_ins`
example test: `test_patma.TestSourceLocations.test_jump_threading`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_keep_buffer with self.assertRaises(BufferError): ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ AssertionError:`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_re.py", line 71, in test_keep_buffer
    with self.assertRaises(BufferError):
         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: BufferError not raised`
example test: `test_re.ReTests.test_keep_buffer`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_memory_error_in_subinterp rc, _, err = script_helper.assert_python_ok(<str>, code) ^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_exceptions.py", line 1826, in test_memory_error_in_subinterp
    rc, _, err = script_helper.assert_python_ok("-c", code)
                 ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/sup`
example test: `test_exceptions.ExceptionTests.test_memory_error_in_subinterp`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_method_checksum self.assertEqual(result, self.expectedchecksum) AssertionError: <str> != <str> `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_unicodedata.py", line 65, in test_method_checksum
    self.assertEqual(result, self.expectedchecksum)
AssertionError: 'ce2d810a50f0fb92d8707c2c1330ea1a45d55da1' != 'e708c31c0d51f758adf475cb7201cf80917362be'
- ce2d810a50f0f`
example test: `test_unicodedata.UnicodeMethodsTest.test_method_checksum`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_method_descriptor_flag self.assertTrue(_testcapi.MethodDescriptorBase.__flags__ & Py_TPFLAGS_ME`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 630, in test_method_descriptor_flag
    self.assertTrue(_testcapi.MethodDescriptorBase.__flags__ & Py_TPFLAGS_METHOD_DESCRIPTOR)
                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: module '_te`
example test: `test_call.TestPEP590.test_method_descriptor_flag`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_mutating_iteration_delete with self.assertRaises(RuntimeError): ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_dict.py", line 530, in test_mutating_iteration_delete
    with self.assertRaises(RuntimeError):
         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: RuntimeError not raised`
example test: `test_dict.DictTest.test_mutating_iteration_delete`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_mutating_iteration_delete_over_items with self.assertRaises(RuntimeError): ^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_dict.py", line 548, in test_mutating_iteration_delete_over_items
    with self.assertRaises(RuntimeError):
         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: RuntimeError not raised`
example test: `test_dict.DictTest.test_mutating_iteration_delete_over_items`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_mutating_iteration_delete_over_values with self.assertRaises(RuntimeError): ^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_dict.py", line 539, in test_mutating_iteration_delete_over_values
    with self.assertRaises(RuntimeError):
         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: RuntimeError not raised`
example test: `test_dict.DictTest.test_mutating_iteration_delete_over_values`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_no_ensure_ascii_flag assert_python_ok(<str>, <str>, <str>, infile, outfile) File <str>, line <n`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_json/test_tool.py", line 205, in test_no_ensure_ascii_flag
    assert_python_ok('-m', 'json.tool', '--no-ensure-ascii', infile, outfile)
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 166, in assert_`
example test: `test_json.test_tool.TestTool.test_no_ensure_ascii_flag`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_no_indent process = subprocess.run(args, input=input_, capture_output=True, text=True, check=Tr`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_json/test_tool.py", line 181, in test_no_indent
    process = subprocess.run(args, input=input_, capture_output=True, text=True, check=True)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`
example test: `test_json.test_tool.TestTool.test_no_indent`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_no_mangling_in_nested_scopes ns = run_code(<str><str>/work/suites/cpython/Lib/test/support/__in`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_type_params.py", line 810, in test_no_mangling_in_nested_scopes
    ns = run_code("""
         ^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/support/__init__.py", line 664, in run_code
    exec(textwrap.dedent(code), `
example test: `test_type_params.TypeParamsManglingTest.test_no_mangling_in_nested_scopes`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_non_ascii_infile rc, out, err = assert_python_ok(<str>, <str>, infile) ^^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_json/test_tool.py", line 118, in test_non_ascii_infile
    rc, out, err = assert_python_ok('-m', 'json.tool', infile)
                   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/sup`
example test: `test_json.test_tool.TestTool.test_non_ascii_infile`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_numeric self.assertEqual(self.db.numeric(<str>,None), None) ^^^^^^^^^^^^^^^^^^^^^^^^^ Attribute`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_unicodedata.py", line 120, in test_numeric
    self.assertEqual(self.db.numeric('A',None), None)
                     ^^^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: module 'unicodedata' has no attribute 'numeric'`
example test: `test_unicodedata.UnicodeFunctionsTest.test_numeric`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_oob_indexing_dictiter_iternextitem self.assertRaises(RuntimeError, iter_and_mutate) AssertionEr`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_dict.py", line 1396, in test_oob_indexing_dictiter_iternextitem
    self.assertRaises(RuntimeError, iter_and_mutate)
AssertionError: RuntimeError not raised by iter_and_mutate`
example test: `test_dict.DictTest.test_oob_indexing_dictiter_iternextitem`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_option_encoding self.assertFailure(<str>) File <str>, line <n>, in assertFailure self.assertIn(`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_calendar.py", line 892, in test_option_encoding
    self.assertFailure('-e')
  File "/work/suites/cpython/Lib/test/test_calendar.py", line 861, in assertFailure
    self.assertIn(b'usage:', stderr)
AssertionError: b'usage:`
example test: `test_calendar.CommandLineTestCase.test_option_encoding`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_option_lines self.assertFailure(<str>) File <str>, line <n>, in assertFailure self.assertIn(b<s`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_calendar.py", line 924, in test_option_lines
    self.assertFailure('-l')
  File "/work/suites/cpython/Lib/test/test_calendar.py", line 861, in assertFailure
    self.assertIn(b'usage:', stderr)
AssertionError: b'usage:' n`
example test: `test_calendar.CommandLineTestCase.test_option_lines`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_option_locale self.assertFailure(<str>) File <str>, line <n>, in assertFailure self.assertIn(b<`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_calendar.py", line 898, in test_option_locale
    self.assertFailure('-L')
  File "/work/suites/cpython/Lib/test/test_calendar.py", line 861, in assertFailure
    self.assertIn(b'usage:', stderr)
AssertionError: b'usage:' `
example test: `test_calendar.CommandLineTestCase.test_option_locale`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_option_months self.assertFailure(<str>) File <str>, line <n>, in assertFailure self.assertIn(b<`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_calendar.py", line 938, in test_option_months
    self.assertFailure('-m')
  File "/work/suites/cpython/Lib/test/test_calendar.py", line 861, in assertFailure
    self.assertIn(b'usage:', stderr)
AssertionError: b'usage:' `
example test: `test_calendar.CommandLineTestCase.test_option_months`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_option_spacing self.assertFailure(<str>) File <str>, line <n>, in assertFailure self.assertIn(b`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_calendar.py", line 931, in test_option_spacing
    self.assertFailure('-s')
  File "/work/suites/cpython/Lib/test/test_calendar.py", line 861, in assertFailure
    self.assertIn(b'usage:', stderr)
AssertionError: b'usage:'`
example test: `test_calendar.CommandLineTestCase.test_option_spacing`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_option_type self.assertFailure(<str>) File <str>, line <n>, in assertFailure self.assertIn(b<st`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_calendar.py", line 945, in test_option_type
    self.assertFailure('-t')
  File "/work/suites/cpython/Lib/test/test_calendar.py", line 861, in assertFailure
    self.assertIn(b'usage:', stderr)
AssertionError: b'usage:' no`
example test: `test_calendar.CommandLineTestCase.test_option_type`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_option_width self.assertFailure(<str>) File <str>, line <n>, in assertFailure self.assertIn(b<s`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_calendar.py", line 917, in test_option_width
    self.assertFailure('-w')
  File "/work/suites/cpython/Lib/test/test_calendar.py", line 861, in assertFailure
    self.assertIn(b'usage:', stderr)
AssertionError: b'usage:' n`
example test: `test_calendar.CommandLineTestCase.test_option_width`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_optional_isinstance_type_error with self.assertRaises(TypeError): ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_typing.py", line 1830, in test_optional_isinstance_type_error
    with self.assertRaises(TypeError):
         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: TypeError not raised`
example test: `test_typing.UnionTests.test_optional_isinstance_type_error`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_order self.assertFalse(f2.alive) AssertionError: True is not false`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_weakref.py", line 2080, in test_order
    self.assertFalse(f2.alive)
AssertionError: True is not false`
example test: `test_weakref.FinalizeTestCase.test_order`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_output_htmlcalendar_encoding_default self.check_htmlcalendar_encoding(None, sys.getdefaultencod`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_calendar.py", line 419, in test_output_htmlcalendar_encoding_default
    self.check_htmlcalendar_encoding(None, sys.getdefaultencoding())
  File "/work/suites/cpython/Lib/test/test_calendar.py", line 387, in check_htmlcale`
example test: `test_calendar.OutputTestCase.test_output_htmlcalendar_encoding_default`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_output_month stdout = self.run_ok(<str>, <str>) ^^^^^^^^^^^^^^^^^^^^^^^^ File <str>, line <n>, `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_calendar.py", line 888, in test_output_month
    stdout = self.run_ok('2004', '1')
             ^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_calendar.py", line 857, in run_ok
    return assert_python`
example test: `test_calendar.CommandLineTestCase.test_output_month`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_package self._do_test(package_test) File <str>, line <n>, in _do_test mf.import_hook(import_thi`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_modulefinder.py", line 354, in test_package
    self._do_test(package_test)
  File "/work/suites/cpython/Lib/test/test_modulefinder.py", line 331, in _do_test
    mf.import_hook(import_this)
  File "/opt/elide/lib/resource`
example test: `test_modulefinder.ModuleFinderTest.test_package`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_parse_string self.assertEqual(e.attrib[<str>], <str>) AssertionError: <str> != <str> + $£€𐅻 - `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_xml_etree.py", line 3717, in test_parse_string
    self.assertEqual(e.attrib['value'], '$\xa3\u20ac\U0001017b')
AssertionError: '$Â£â\x82¬ð\x90\x85»' != '$£€𐅻'
+ $£€𐅻
- $Â£â¬ð- »`
example test: `test_xml_etree.XMLParserTest.test_parse_string`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_pdb_issue4201 self.assertIn(os.path.normcase(script_name.encode(<str>)), data) AssertionError: `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_zipimport_support.py", line 230, in test_pdb_issue4201
    self.assertIn(os.path.normcase(script_name.encode('utf-8')), data)
AssertionError: b'/tmp/tmpk6dr91lf/script.py' not found in b'> /work/.harness/work/cpython-core/`
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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_repeat_id_preserving self.assertEqual(id(a), id(a * <n>)) AssertionError: <n> != <n>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_bytes.py", line 1272, in test_repeat_id_preserving
    self.assertEqual(id(a), id(a * 1))
AssertionError: 1607 != 1615`
example test: `test_bytes.BytesTest.test_repeat_id_preserving`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_replace_paths self._do_test(maybe_test, debug=<n>, File <str>, line <n>, in _do_test self.asser`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_modulefinder.py", line 397, in test_replace_paths
    self._do_test(maybe_test, debug=2,
  File "/work/suites/cpython/Lib/test/test_modulefinder.py", line 346, in _do_test
    self.assertEqual(found, modules)
AssertionErro`
example test: `test_modulefinder.ModuleFinderTest.test_replace_paths`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_resize_forbidden self.assertRaises(BufferError, resize, <n>) AssertionError: BufferError not ra`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_bytes.py", line 1739, in test_resize_forbidden
    self.assertRaises(BufferError, resize, 11)
AssertionError: BufferError not raised by resize`
example test: `test_bytes.ByteArrayTest.test_resize_forbidden`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_same_name_as_bad self._do_test(same_name_as_bad_test) File <str>, line <n>, in _do_test self.as`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_modulefinder.py", line 381, in test_same_name_as_bad
    self._do_test(same_name_as_bad_test)
  File "/work/suites/cpython/Lib/test/test_modulefinder.py", line 346, in _do_test
    self.assertEqual(found, modules)
Assertio`
example test: `test_modulefinder.ModuleFinderTest.test_same_name_as_bad`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_setvectorcall from _testcapi import function_setvectorcall ImportError: cannot import name <str`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 799, in test_setvectorcall
    from _testcapi import function_setvectorcall
ImportError: cannot import name 'function_setvectorcall' from '_testcapi' (/opt/elide/lib/resources/python/python-home/lib/graalpy2`
example test: `test_call.TestPEP590.test_setvectorcall`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_setvectorcall_load_attr_specialization_deopt from _testcapi import function_setvectorcall Impor`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 826, in test_setvectorcall_load_attr_specialization_deopt
    from _testcapi import function_setvectorcall
ImportError: cannot import name 'function_setvectorcall' from '_testcapi' (/opt/elide/lib/resources/`
example test: `test_call.TestPEP590.test_setvectorcall_load_attr_specialization_deopt`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_setvectorcall_load_attr_specialization_skip from _testcapi import function_setvectorcall Import`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 810, in test_setvectorcall_load_attr_specialization_skip
    from _testcapi import function_setvectorcall
ImportError: cannot import name 'function_setvectorcall' from '_testcapi' (/opt/elide/lib/resources/p`
example test: `test_call.TestPEP590.test_setvectorcall_load_attr_specialization_skip`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_simpleops self.assertEqual(str(cm.exception), <str>) AssertionError: <str> != <str> - list.inde`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_xml_etree.py", line 349, in test_simpleops
    self.assertEqual(str(cm.exception), 'list.remove(x): x not in list')
AssertionError: 'list.index(x): x not in list' != 'list.remove(x): x not in list'
- list.index(x): x not i`
example test: `test_xml_etree.ElementTreeTest.test_simpleops`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_slots self.assertEqual(Counted.counter, <n>) AssertionError: <n> != <n>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_descr.py", line 1246, in test_slots
    self.assertEqual(Counted.counter, 0)
AssertionError: 3 != 0`
example test: `test_descr.ClassPropertiesAndMethods.test_slots`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_sort_keys_flag rc, out, err = assert_python_ok(<str>, <str>, <str>, infile) ^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_json/test_tool.py", line 158, in test_sort_keys_flag
    rc, out, err = assert_python_ok('-m', 'json.tool', '--sort-keys', infile)
                   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work`
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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_stdin self.assertFalse(os.path.exists(self.cache_path)) ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ File <s`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 254, in test_stdin
    self.assertFalse(os.path.exists(self.cache_path))
                     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/genericp`
example test: `test_py_compile.PyCompileCLITestCase.test_stdin`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_subclass_doctype with self.assertWarnsRegex(RuntimeWarning, <str>): ^^^^^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_xml_etree.py", line 3679, in test_subclass_doctype
    with self.assertWarnsRegex(RuntimeWarning, 'doctype'):
         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: RuntimeWarning not triggered`
example test: `test_xml_etree.XMLParserTest.test_subclass_doctype`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_surrogates assertScan(<str>, <str>) File <str>, line <n>, in assertScan self.assertEqual(scanst`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_json/test_scanstring.py", line 94, in test_surrogates
    assertScan('"z\\ud834\\u0079x"', 'z\ud834yx')
  File "/work/suites/cpython/Lib/test/test_json/test_scanstring.py", line 91, in assertScan
    self.assertEqual(scans`
example test: `test_json.test_scanstring.TestCScanstring.test_surrogates`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_syntax_warning_infinite_recursion_in_file self.assertEqual(len(stderr.strip().splitlines()), <n`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_fstring.py", line 1884, in test_syntax_warning_infinite_recursion_in_file
    self.assertEqual(len(stderr.strip().splitlines()), 2)
AssertionError: 1 != 2`
example test: `test_fstring.TestCase.test_syntax_warning_infinite_recursion_in_file`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_tab process = subprocess.run(args, input=input_, capture_output=True, text=True, check=True) ^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_json/test_tool.py", line 189, in test_tab
    process = subprocess.run(args, input=input_, capture_output=True, text=True, check=True)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`
example test: `test_json.test_tool.TestTool.test_tab`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_ucd_510 self.assertTrue(unicodedata.mirrored(<str>)) ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ AttributeEr`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_unicodedata.py", line 308, in test_ucd_510
    self.assertTrue(unicodedata.mirrored("\u0f3a"))
                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: module 'unicodedata' has no attribute 'mirrored'`
example test: `test_unicodedata.UnicodeMiscTest.test_ucd_510`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_unexpected_end_of_data self.assertCorrectUTF8Decoding(bytes.fromhex(seq), <str>, File <str>, li`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_unicode.py", line 2084, in test_unexpected_end_of_data
    self.assertCorrectUTF8Decoding(bytes.fromhex(seq), '\ufffd',
  File "/work/suites/cpython/Lib/test/test_unicode.py", line 2039, in assertCorrectUTF8Decoding
    se`
example test: `test_unicode.UnicodeTest.test_unexpected_end_of_data`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_vectorcall (_testcapi.MethodDescriptorBase(), (<n>,), {}, True), ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 738, in test_vectorcall
    (_testcapi.MethodDescriptorBase(), (0,), {}, True),
     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: module '_testcapi' has no attribute 'MethodDescriptorBase'`
example test: `test_call.TestPEP590.test_vectorcall`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_vectorcall_flag self.assertTrue(_testcapi.MethodDescriptorBase.__flags__ & Py_TPFLAGS_HAVE_VECT`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 640, in test_vectorcall_flag
    self.assertTrue(_testcapi.MethodDescriptorBase.__flags__ & Py_TPFLAGS_HAVE_VECTORCALL)
                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: module '_testcapi' h`
example test: `test_call.TestPEP590.test_vectorcall_flag`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_vectorcall_override f = _testcapi.MethodDescriptorNopGet() ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ A`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 667, in test_vectorcall_override
    f = _testcapi.MethodDescriptorNopGet()
        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: module '_testcapi' has no attribute 'MethodDescriptorNopGet'`
example test: `test_call.TestPEP590.test_vectorcall_override`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_vectorcall_override_on_mutable_class TestType = _testcapi.make_vectorcall_class() ^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 672, in test_vectorcall_override_on_mutable_class
    TestType = _testcapi.make_vectorcall_class()
               ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: module '_testcapi' has no attribute 'make_v`
example test: `test_call.TestPEP590.test_vectorcall_override_on_mutable_class`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_vectorcall_override_with_subclass SuperType = _testcapi.make_vectorcall_class() ^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 682, in test_vectorcall_override_with_subclass
    SuperType = _testcapi.make_vectorcall_class()
                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: module '_testcapi' has no attribute 'make_ve`
example test: `test_call.TestPEP590.test_vectorcall_override_with_subclass`

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
AssertionError: 'Z' unexpectedly found in {<weakref at 1655756575; to 'UserString' at 916494957>, <weakref at 1775442168; to`
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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_with_files rc, stdout, stderr = self.pycompilecmd(self.source_path, self.source_path) ^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_py_compile.py", line 262, in test_with_files
    rc, stdout, stderr = self.pycompilecmd(self.source_path, self.source_path)
                         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suite`
example test: `test_py_compile.PyCompileCLITestCase.test_with_files`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_writing_in_place rc, out, err = assert_python_ok(<str>, <str>, infile, infile) ^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_json/test_tool.py", line 137, in test_writing_in_place
    rc, out, err = assert_python_ok('-m', 'json.tool', infile, infile)
                   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpyt`
example test: `test_json.test_tool.TestTool.test_writing_in_place`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_zipfile_compiled compiled_name = py_compile.compile(script_name, doraise=True) ^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_runpy.py", line 722, in test_zipfile_compiled
    compiled_name = py_compile.compile(script_name, doraise=True)
                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/opt/elide/lib/resources/python/pyth`
example test: `test_runpy.RunPathTestCase.test_zipfile_compiled`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in testAppendChildNoQuadraticComplexity self.assertLess(end - start, <n>) AssertionError: <n> not less `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_minidom.py", line 200, in testAppendChildNoQuadraticComplexity
    self.assertLess(end - start, 4)
AssertionError: 4.9214131070039 not less than 4`
example test: `test_minidom.MinidomTest.testAppendChildNoQuadraticComplexity`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in testEncodings self.assertEqual(doc.toxml(<str>), AssertionError: b<str> != b<str>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_minidom.py", line 1190, in testEncodings
    self.assertEqual(doc.toxml('utf-16'),
AssertionError: b'\xf[195 chars]>\x00\xff\xfe<\x00f\x00o\x00o\x00\xff\xfe>\x00[47 chars]\x00' != b'\xf[195 chars]>\x00<\x00f\x00o\x00o\x00>`
example test: `test_minidom.MinidomTest.testEncodings`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in testExceptionCleanupState self.assertIsNone(obj) AssertionError: <test.test_exceptions.ExceptionTest`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_exceptions.py", line 878, in testExceptionCleanupState
    self.assertIsNone(obj)
AssertionError: <test.test_exceptions.ExceptionTests.testExceptionCleanupState.<locals>.MyObj object at 0x2b719e55> is not None`
example test: `test_exceptions.ExceptionTests.testExceptionCleanupState`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in testLeaks self.assertEqual(Foo.count, <n>) AssertionError: <n> != <n>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_scope.py", line 478, in testLeaks
    self.assertEqual(Foo.count, 0)
AssertionError: 100 != 0`
example test: `test_scope.ScopeTests.testLeaks`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in wrapper return function(*args, **kwargs) ^^^^^^^^^^^^^^^^^^^^^^^^^ File <str>, line <n>, in test_dec`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_gzip.py", line 997, in wrapper
    return function(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_gzip.py", line 1027, in test_decompress_infile_outfile
    rc, out, err = `
example test: `test_gzip.TestCommandLine.test_decompress_infile_outfile`

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

### 1 × `TypeError: meth_fastcall() got an unexpected keyword argument <str> During handling of the above exception, another exception occurred: Traceback (most recent c`

distinct messages:
- `TypeError: meth_fastcall() got an unexpected keyword argument 'k'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 361, in test_fastcall_error_kw
    self.assertRaisesRegex(
AssertionErr`
example test: `test_call.TestCallingConventions.test_fastcall_error_kw`

### 1 × `TypeError: meth_noargs() got an unexpected keyword argument <str> During handling of the above exception, another exception occurred: Traceback (most recent cal`

distinct messages:
- `TypeError: meth_noargs() got an unexpected keyword argument 'k'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 343, in test_noargs_error_kw
    self.assertRaisesRegex(
AssertionError: `
example test: `test_call.TestCallingConventions.test_noargs_error_kw`

### 1 × `TypeError: meth_noargs() takes <n> positional arguments but <n> was given During handling of the above exception, another exception occurred: Traceback (most re`

distinct messages:
- `TypeError: meth_noargs() takes 0 positional arguments but 1 was given

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 325, in test_noargs_error_arg
    self.assertRaisesRegex(
Assertion`
example test: `test_call.TestCallingConventions.test_noargs_error_arg`

### 1 × `TypeError: meth_o() missing <n> required positional argument: <str> During handling of the above exception, another exception occurred: Traceback (most recent c`

distinct messages:
- `TypeError: meth_o() missing 1 required positional argument: 'arg'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 291, in test_o_error_no_arg
    self.assertRaisesRegex(TypeError, msg, `
example test: `test_call.TestCallingConventions.test_o_error_no_arg`

### 1 × `TypeError: meth_varargs() got an unexpected keyword argument <str> During handling of the above exception, another exception occurred: Traceback (most recent ca`

distinct messages:
- `TypeError: meth_varargs() got an unexpected keyword argument 'k'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 267, in test_varargs_error_kw
    self.assertRaisesRegex(
AssertionError`
example test: `test_call.TestCallingConventions.test_varargs_error_kw`

### 1 × `TypeError: MethInstance.meth_fastcall() got an unexpected keyword argument <str> During handling of the above exception, another exception occurred: Traceback (`

distinct messages:
- `TypeError: MethInstance.meth_fastcall() got an unexpected keyword argument 'k'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 361, in test_fastcall_error_kw
    self.assertRaisesRegex(`
example test: `test_call.TestCallingConventionsInstance.test_fastcall_error_kw`

### 1 × `TypeError: MethInstance.meth_noargs() got an unexpected keyword argument <str> During handling of the above exception, another exception occurred: Traceback (mo`

distinct messages:
- `TypeError: MethInstance.meth_noargs() got an unexpected keyword argument 'k'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 343, in test_noargs_error_kw
    self.assertRaisesRegex(
Ass`
example test: `test_call.TestCallingConventionsInstance.test_noargs_error_kw`

### 1 × `TypeError: MethInstance.meth_o() missing <n> required positional argument: <str> During handling of the above exception, another exception occurred: Traceback (`

distinct messages:
- `TypeError: MethInstance.meth_o() missing 1 required positional argument: 'arg'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 291, in test_o_error_no_arg
    self.assertRaisesRegex(Typ`
example test: `test_call.TestCallingConventionsInstance.test_o_error_no_arg`

### 1 × `TypeError: MethInstance.meth_varargs() got an unexpected keyword argument <str> During handling of the above exception, another exception occurred: Traceback (m`

distinct messages:
- `TypeError: MethInstance.meth_varargs() got an unexpected keyword argument 'k'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 267, in test_varargs_error_kw
    self.assertRaisesRegex(
A`
example test: `test_call.TestCallingConventionsInstance.test_varargs_error_kw`

### 1 × `TypeError: MethStatic.meth_fastcall() got an unexpected keyword argument <str> During handling of the above exception, another exception occurred: Traceback (mo`

distinct messages:
- `TypeError: MethStatic.meth_fastcall() got an unexpected keyword argument 'k'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 361, in test_fastcall_error_kw
    self.assertRaisesRegex(
A`
example test: `test_call.TestCallingConventionsStatic.test_fastcall_error_kw`

### 1 × `TypeError: MethStatic.meth_noargs() got an unexpected keyword argument <str> During handling of the above exception, another exception occurred: Traceback (most`

distinct messages:
- `TypeError: MethStatic.meth_noargs() got an unexpected keyword argument 'k'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 343, in test_noargs_error_kw
    self.assertRaisesRegex(
Asser`
example test: `test_call.TestCallingConventionsStatic.test_noargs_error_kw`

### 1 × `TypeError: MethStatic.meth_o() missing <n> required positional argument: <str> During handling of the above exception, another exception occurred: Traceback (mo`

distinct messages:
- `TypeError: MethStatic.meth_o() missing 1 required positional argument: 'arg'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 291, in test_o_error_no_arg
    self.assertRaisesRegex(TypeE`
example test: `test_call.TestCallingConventionsStatic.test_o_error_no_arg`

### 1 × `TypeError: MethStatic.meth_varargs() got an unexpected keyword argument <str> During handling of the above exception, another exception occurred: Traceback (mos`

distinct messages:
- `TypeError: MethStatic.meth_varargs() got an unexpected keyword argument 'k'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 267, in test_varargs_error_kw
    self.assertRaisesRegex(
Ass`
example test: `test_call.TestCallingConventionsStatic.test_varargs_error_kw`

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
