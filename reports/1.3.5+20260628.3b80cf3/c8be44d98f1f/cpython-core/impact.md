# Impact-ordered failures

## By root-cause signature

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

### 13 × `Traceback (most recent call last): File <str>, line <n>, in test_filewrite f = open(os_helper.TESTFN, <str>) ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ PermissionError: [Errn`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_array.py", line 482, in test_filewrite
    f = open(os_helper.TESTFN, 'wb')
        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^
PermissionError: [Errno 13] Permission denied: '@test_39_tmpæ'`
example test: `test_array.ByteTest.test_filewrite`

### 13 × `Traceback (most recent call last): File <str>, line <n>, in test_free_after_iterating support.check_free_after_iterating(self, iter, array.array, File <str>, li`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_array.py", line 1156, in test_free_after_iterating
    support.check_free_after_iterating(self, iter, array.array,
  File "/work/suites/cpython/Lib/test/support/__init__.py", line 1830, in check_free_after_iterating
    te`
example test: `test_array.ByteTest.test_free_after_iterating`

### 13 × `Traceback (most recent call last): File <str>, line <n>, in test_fromfile_ioerror f = open(os_helper.TESTFN, <str>) ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ PermissionError`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_array.py", line 473, in test_fromfile_ioerror
    f = open(os_helper.TESTFN, 'wb')
        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^
PermissionError: [Errno 13] Permission denied: '@test_39_tmpæ'`
example test: `test_array.ByteTest.test_fromfile_ioerror`

### 13 × `Traceback (most recent call last): File <str>, line <n>, in test_reverse_iterator_picking d = pickle.dumps((itorig, orig), proto) ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_array.py", line 366, in test_reverse_iterator_picking
    d = pickle.dumps((itorig, orig), proto)
        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/copyreg.py", `
example test: `test_array.ByteTest.test_reverse_iterator_picking`

### 13 × `Traceback (most recent call last): File <str>, line <n>, in test_tofromfile f = open(os_helper.TESTFN, <str>) ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ PermissionError: [Err`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_array.py", line 451, in test_tofromfile
    f = open(os_helper.TESTFN, 'wb')
        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^
PermissionError: [Errno 13] Permission denied: '@test_39_tmpæ'`
example test: `test_array.ByteTest.test_tofromfile`

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

### 5 × `AttributeError(<str>)`

distinct messages:
- `AttributeError("module '_asyncio' has no attribute 'Future'")`
example test: `test_super`

### 5 × `Traceback (most recent call last): File <str>, line <n>, in test_fastcall_error_kw self.assertRaisesRegex( AssertionError: <str> does not match <str>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 361, in test_fastcall_error_kw
    self.assertRaisesRegex(
AssertionError: "meth_fastcall\(\) takes no keyword arguments" does not match "meth_fastcall() got an unexpected keyword argument 'k'"`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 361, in test_fastcall_error_kw
    self.assertRaisesRegex(
AssertionError: "meth_fastcall\(\) takes no keyword arguments" does not match "MethClass.meth_fastcall() got an unexpected keyword argument 'k'"`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 361, in test_fastcall_error_kw
    self.assertRaisesRegex(
AssertionError: "meth_fastcall\(\) takes no keyword arguments" does not match "MethInstance.meth_fastcall() got an unexpected keyword argument 'k'"`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 361, in test_fastcall_error_kw
    self.assertRaisesRegex(
AssertionError: "meth_fastcall\(\) takes no keyword arguments" does not match "MethStatic.meth_fastcall() got an unexpected keyword argument 'k'"`
example test: `test_call.TestCallingConventions.test_fastcall_error_kw`

### 5 × `Traceback (most recent call last): File <str>, line <n>, in test_noargs_error_arg self.assertRaisesRegex( AssertionError: <str> does not match <str>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 325, in test_noargs_error_arg
    self.assertRaisesRegex(
AssertionError: "meth_noargs\(\) takes no arguments \(1 given\)" does not match "meth_noargs() takes 0 positional arguments but 1 was given"`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 325, in test_noargs_error_arg
    self.assertRaisesRegex(
AssertionError: "meth_noargs\(\) takes no arguments \(1 given\)" does not match "MethClass.meth_noargs() takes 1 positional argument but 2 were given`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 325, in test_noargs_error_arg
    self.assertRaisesRegex(
AssertionError: "meth_noargs\(\) takes no arguments \(1 given\)" does not match "MethInstance.meth_noargs() takes 1 positional argument but 2 were gi`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 325, in test_noargs_error_arg
    self.assertRaisesRegex(
AssertionError: "meth_noargs\(\) takes no arguments \(1 given\)" does not match "MethStatic.meth_noargs() takes 1 positional argument but 2 were give`
example test: `test_call.TestCallingConventions.test_noargs_error_arg`

### 5 × `Traceback (most recent call last): File <str>, line <n>, in test_noargs_error_arg2 self.assertRaisesRegex( AssertionError: <str> does not match <str>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 331, in test_noargs_error_arg2
    self.assertRaisesRegex(
AssertionError: "meth_noargs\(\) takes no arguments \(2 given\)" does not match "meth_noargs() takes 0 positional arguments but 2 were given"`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 331, in test_noargs_error_arg2
    self.assertRaisesRegex(
AssertionError: "meth_noargs\(\) takes no arguments \(2 given\)" does not match "MethClass.meth_noargs() takes 1 positional argument but 3 were give`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 331, in test_noargs_error_arg2
    self.assertRaisesRegex(
AssertionError: "meth_noargs\(\) takes no arguments \(2 given\)" does not match "MethInstance.meth_noargs() takes 1 positional argument but 3 were g`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 331, in test_noargs_error_arg2
    self.assertRaisesRegex(
AssertionError: "meth_noargs\(\) takes no arguments \(2 given\)" does not match "MethStatic.meth_noargs() takes 1 positional argument but 3 were giv`
example test: `test_call.TestCallingConventions.test_noargs_error_arg2`

### 5 × `Traceback (most recent call last): File <str>, line <n>, in test_noargs_error_ext self.assertRaisesRegex( AssertionError: <str> does not match <str>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 337, in test_noargs_error_ext
    self.assertRaisesRegex(
AssertionError: "meth_noargs\(\) takes no arguments \(3 given\)" does not match "meth_noargs() takes 0 positional arguments but 3 were given"`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 337, in test_noargs_error_ext
    self.assertRaisesRegex(
AssertionError: "meth_noargs\(\) takes no arguments \(3 given\)" does not match "MethClass.meth_noargs() takes 1 positional argument but 4 were given`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 337, in test_noargs_error_ext
    self.assertRaisesRegex(
AssertionError: "meth_noargs\(\) takes no arguments \(3 given\)" does not match "MethInstance.meth_noargs() takes 1 positional argument but 4 were gi`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 337, in test_noargs_error_ext
    self.assertRaisesRegex(
AssertionError: "meth_noargs\(\) takes no arguments \(3 given\)" does not match "MethStatic.meth_noargs() takes 1 positional argument but 4 were give`
example test: `test_call.TestCallingConventions.test_noargs_error_ext`

### 5 × `Traceback (most recent call last): File <str>, line <n>, in test_noargs_error_kw self.assertRaisesRegex( AssertionError: <str> does not match <str>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 343, in test_noargs_error_kw
    self.assertRaisesRegex(
AssertionError: "meth_noargs\(\) takes no keyword arguments" does not match "meth_noargs() got an unexpected keyword argument 'k'"`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 343, in test_noargs_error_kw
    self.assertRaisesRegex(
AssertionError: "meth_noargs\(\) takes no keyword arguments" does not match "MethClass.meth_noargs() got an unexpected keyword argument 'k'"`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 343, in test_noargs_error_kw
    self.assertRaisesRegex(
AssertionError: "meth_noargs\(\) takes no keyword arguments" does not match "MethInstance.meth_noargs() got an unexpected keyword argument 'k'"`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 343, in test_noargs_error_kw
    self.assertRaisesRegex(
AssertionError: "meth_noargs\(\) takes no keyword arguments" does not match "MethStatic.meth_noargs() got an unexpected keyword argument 'k'"`
example test: `test_call.TestCallingConventions.test_noargs_error_kw`

### 5 × `Traceback (most recent call last): File <str>, line <n>, in test_o_error_arg_kw self.assertRaisesRegex( AssertionError: <str> does not match <str>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 313, in test_o_error_arg_kw
    self.assertRaisesRegex(
AssertionError: "meth_o\(\) takes no keyword arguments" does not match "meth_o() got an unexpected keyword argument 'k'"`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 313, in test_o_error_arg_kw
    self.assertRaisesRegex(
AssertionError: "meth_o\(\) takes no keyword arguments" does not match "MethClass.meth_o() got an unexpected keyword argument 'k'"`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 313, in test_o_error_arg_kw
    self.assertRaisesRegex(
AssertionError: "meth_o\(\) takes no keyword arguments" does not match "MethInstance.meth_o() got an unexpected keyword argument 'k'"`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 313, in test_o_error_arg_kw
    self.assertRaisesRegex(
AssertionError: "meth_o\(\) takes no keyword arguments" does not match "MethStatic.meth_o() got an unexpected keyword argument 'k'"`
example test: `test_call.TestCallingConventions.test_o_error_arg_kw`

### 5 × `Traceback (most recent call last): File <str>, line <n>, in test_o_error_ext self.assertRaisesRegex( AssertionError: <str> does not match <str>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 301, in test_o_error_ext
    self.assertRaisesRegex(
AssertionError: "meth_o\(\) takes exactly one argument \(3 given\)" does not match "meth_o() takes 1 positional argument but 3 were given"`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 301, in test_o_error_ext
    self.assertRaisesRegex(
AssertionError: "meth_o\(\) takes exactly one argument \(3 given\)" does not match "MethClass.meth_o() takes 2 positional arguments but 4 were given"`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 301, in test_o_error_ext
    self.assertRaisesRegex(
AssertionError: "meth_o\(\) takes exactly one argument \(3 given\)" does not match "MethInstance.meth_o() takes 2 positional arguments but 4 were given"`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 301, in test_o_error_ext
    self.assertRaisesRegex(
AssertionError: "meth_o\(\) takes exactly one argument \(3 given\)" does not match "MethStatic.meth_o() takes 2 positional arguments but 4 were given"`
example test: `test_call.TestCallingConventions.test_o_error_ext`

### 5 × `Traceback (most recent call last): File <str>, line <n>, in test_o_error_kw self.assertRaisesRegex( AssertionError: <str> does not match <str>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 307, in test_o_error_kw
    self.assertRaisesRegex(
AssertionError: "meth_o\(\) takes no keyword arguments" does not match "meth_o() got an unexpected keyword argument 'k'"`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 307, in test_o_error_kw
    self.assertRaisesRegex(
AssertionError: "meth_o\(\) takes no keyword arguments" does not match "MethClass.meth_o() got an unexpected keyword argument 'k'"`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 307, in test_o_error_kw
    self.assertRaisesRegex(
AssertionError: "meth_o\(\) takes no keyword arguments" does not match "MethInstance.meth_o() got an unexpected keyword argument 'k'"`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 307, in test_o_error_kw
    self.assertRaisesRegex(
AssertionError: "meth_o\(\) takes no keyword arguments" does not match "MethStatic.meth_o() got an unexpected keyword argument 'k'"`
example test: `test_call.TestCallingConventions.test_o_error_kw`

### 5 × `Traceback (most recent call last): File <str>, line <n>, in test_o_error_no_arg self.assertRaisesRegex(TypeError, msg, self.obj.meth_o) AssertionError: <str> do`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 291, in test_o_error_no_arg
    self.assertRaisesRegex(TypeError, msg, self.obj.meth_o)
AssertionError: "meth_o\(\) takes exactly one argument \(0 given\)" does not match "meth_o() missing 1 required positio`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 291, in test_o_error_no_arg
    self.assertRaisesRegex(TypeError, msg, self.obj.meth_o)
AssertionError: "meth_o\(\) takes exactly one argument \(0 given\)" does not match "MethClass.meth_o() missing 1 requir`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 291, in test_o_error_no_arg
    self.assertRaisesRegex(TypeError, msg, self.obj.meth_o)
AssertionError: "meth_o\(\) takes exactly one argument \(0 given\)" does not match "MethInstance.meth_o() missing 1 req`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 291, in test_o_error_no_arg
    self.assertRaisesRegex(TypeError, msg, self.obj.meth_o)
AssertionError: "meth_o\(\) takes exactly one argument \(0 given\)" does not match "MethStatic.meth_o() missing 1 requi`
example test: `test_call.TestCallingConventions.test_o_error_no_arg`

### 5 × `Traceback (most recent call last): File <str>, line <n>, in test_o_error_two_args self.assertRaisesRegex( AssertionError: <str> does not match <str>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 295, in test_o_error_two_args
    self.assertRaisesRegex(
AssertionError: "meth_o\(\) takes exactly one argument \(2 given\)" does not match "meth_o() takes 1 positional argument but 2 were given"`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 295, in test_o_error_two_args
    self.assertRaisesRegex(
AssertionError: "meth_o\(\) takes exactly one argument \(2 given\)" does not match "MethClass.meth_o() takes 2 positional arguments but 3 were given"`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 295, in test_o_error_two_args
    self.assertRaisesRegex(
AssertionError: "meth_o\(\) takes exactly one argument \(2 given\)" does not match "MethInstance.meth_o() takes 2 positional arguments but 3 were giv`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 295, in test_o_error_two_args
    self.assertRaisesRegex(
AssertionError: "meth_o\(\) takes exactly one argument \(2 given\)" does not match "MethStatic.meth_o() takes 2 positional arguments but 3 were given`
example test: `test_call.TestCallingConventions.test_o_error_two_args`

### 5 × `Traceback (most recent call last): File <str>, line <n>, in test_varargs_error_kw self.assertRaisesRegex( AssertionError: <str> does not match <str>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 267, in test_varargs_error_kw
    self.assertRaisesRegex(
AssertionError: "meth_varargs\(\) takes no keyword arguments" does not match "meth_varargs() got an unexpected keyword argument 'k'"`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 267, in test_varargs_error_kw
    self.assertRaisesRegex(
AssertionError: "meth_varargs\(\) takes no keyword arguments" does not match "MethClass.meth_varargs() got an unexpected keyword argument 'k'"`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 267, in test_varargs_error_kw
    self.assertRaisesRegex(
AssertionError: "meth_varargs\(\) takes no keyword arguments" does not match "MethInstance.meth_varargs() got an unexpected keyword argument 'k'"`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 267, in test_varargs_error_kw
    self.assertRaisesRegex(
AssertionError: "meth_varargs\(\) takes no keyword arguments" does not match "MethStatic.meth_varargs() got an unexpected keyword argument 'k'"`
example test: `test_call.TestCallingConventions.test_varargs_error_kw`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in runTest raise self.failureException(self.format_failure(new.getvalue())) AssertionError: Failed doct`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/doctest.py", line 2256, in runTest
    raise self.failureException(self.format_failure(new.getvalue()))
AssertionError: Failed doctest test for test.test_generators.__test__.coroutine
  File "/work/suites/cpython/Lib/test/test_gener`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/doctest.py", line 2256, in runTest
    raise self.failureException(self.format_failure(new.getvalue()))
AssertionError: Failed doctest test for test.test_generators.__test__.refleaks
  File "/work/suites/cpython/Lib/test/test_genera`
example test: `test_generators.__test__.coroutine`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_check_encoding_errors proc = assert_python_failure(<str>, <str>, <str>, code) ^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_bytes.py", line 380, in test_check_encoding_errors
    proc = assert_python_failure('-X', 'dev', '-c', code)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/support/script_he`
example test: `test_bytes.ByteArrayTest.test_check_encoding_errors`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_free_after_iterating support.check_free_after_iterating(self, iter, self.type2test) File <str>,`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/seq_tests.py", line 430, in test_free_after_iterating
    support.check_free_after_iterating(self, iter, self.type2test)
  File "/work/suites/cpython/Lib/test/support/__init__.py", line 1830, in check_free_after_iterating
    t`
example test: `test_tuple.TupleTest.test_free_after_iterating`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_free_after_iterating test.support.check_free_after_iterating(self, iter, self.type2test) File <`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_bytes.py", line 991, in test_free_after_iterating
    test.support.check_free_after_iterating(self, iter, self.type2test)
  File "/work/suites/cpython/Lib/test/support/__init__.py", line 1830, in check_free_after_iterating`
example test: `test_bytes.ByteArrayTest.test_free_after_iterating`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_mod with self.assertRaisesRegex(TypeError, msg): AssertionError: <str> does not match <str>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_bytes.py", line 769, in test_mod
    with self.assertRaisesRegex(TypeError, msg):
AssertionError: "%d format: a real number is required, not complex" does not match "%i format: a real number is required, not complex"`
example test: `test_bytes.ByteArrayTest.test_mod`

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
AssertionError: <function FinalizeTestCase.test_all_freed.<locals>.callback at 0x500efd62> is not None`
example test: `test_weakref.FinalizeTestCase.test_all_freed`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_backcompatibility self.assertEqual(self.module.insort, self.module.insort_right) ^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_bisect.py", line 316, in test_backcompatibility
    self.assertEqual(self.module.insort, self.module.insort_right)
                     ^^^^^^^^^^^^^^^^^^
AttributeError: 'NoneType' object has no attribute 'insort'`
example test: `test_bisect.TestInsortC.test_backcompatibility`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_broken_pipe_error proc = subprocess.Popen(cmd, ^^^^^^^^^^^^^^^^^^^^^ File <str>, line <n>, in _`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_json/test_tool.py", line 226, in test_broken_pipe_error
    proc = subprocess.Popen(cmd,
           ^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/subprocess.py", line 1026, in __init__
    self._execute_child(args`
example test: `test_json.test_tool.TestTool.test_broken_pipe_error`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_Buffer self.assertIsInstance(sample(b<str>), Buffer) AssertionError: b<str> is not an instance `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_collections.py", line 1965, in test_Buffer
    self.assertIsInstance(sample(b"x"), Buffer)
AssertionError: b'x' is not an instance of <class 'collections.abc.Buffer'>`
example test: `test_collections.TestCollectionABCs.test_Buffer`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_bug_40736 with self.assertRaisesRegex(TypeError, <str>): AssertionError: <str> does not match <`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_re.py", line 2405, in test_bug_40736
    with self.assertRaisesRegex(TypeError, "got 'int'"):
AssertionError: "got 'int'" does not match "object of type 'int' has no len()"`
example test: `test_re.ReTests.test_bug_40736`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_carloverre_multi_inherit_invalid self.fail(<str>) AssertionError: setattr through indirect base`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_descr.py", line 4436, in test_carloverre_multi_inherit_invalid
    self.fail("setattr through indirect base types should be rejected")
AssertionError: setattr through indirect base types should be rejected`
example test: `test_descr.ClassPropertiesAndMethods.test_carloverre_multi_inherit_invalid`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_cli_file_input res, _ = script_helper.run_python_until_end(<str>, <str>, filename) ^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_ast/test_ast.py", line 2794, in test_cli_file_input
    res, _ = script_helper.run_python_until_end("-m", "ast", filename)
             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython`
example test: `test_ast.test_ast.ASTMainTests.test_cli_file_input`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_cmp_err for f in (self.module.bisect_left, self.module.bisect_right, ^^^^^^^^^^^^^^^^^^^^^^^ At`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_bisect.py", line 375, in test_cmp_err
    for f in (self.module.bisect_left, self.module.bisect_right,
              ^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: 'NoneType' object has no attribute 'bisect_left'`
example test: `test_bisect.TestErrorHandlingC.test_cmp_err`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_colors bisect_left = self.module.bisect_left ^^^^^^^^^^^^^^^^^^^^^^^ AttributeError: <str> obje`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_bisect.py", line 405, in test_colors
    bisect_left = self.module.bisect_left
                  ^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: 'NoneType' object has no attribute 'bisect_left'`
example test: `test_bisect.TestDocExampleC.test_colors`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_compact process = subprocess.run(args, input=input_, capture_output=True, text=True, check=True`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_json/test_tool.py", line 197, in test_compact
    process = subprocess.run(args, input=input_, capture_output=True, text=True, check=True)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`
example test: `test_json.test_tool.TestTool.test_compact`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_correctly_rounded_true_division self.check_truediv(m*DBL_MIN_OVERFLOW + n, m) File <str>, line `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_long.py", line 857, in test_correctly_rounded_true_division
    self.check_truediv(m*DBL_MIN_OVERFLOW + n, m)
  File "/work/suites/cpython/Lib/test/test_long.py", line 822, in check_truediv
    self.assertEqual(expected, g`
example test: `test_long.LongTest.test_correctly_rounded_true_division`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_debug_in_file with temp_cwd(): File <str>, line <n>, in __enter__ return next(self.gen) ^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_fstring.py", line 1862, in test_debug_in_file
    with temp_cwd():
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/contextlib.py", line 137, in __enter__
    return next(self.gen)
           ^^^^^^^^^^^^`
example test: `test_fstring.TestCase.test_debug_in_file`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_ensure_ascii_default infile = self._create_infile(<str>) ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ File `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_json/test_tool.py", line 213, in test_ensure_ascii_default
    infile = self._create_infile('{"key":"💩"}')
             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_json/test_tool.py", line `
example test: `test_json.test_tool.TestTool.test_ensure_ascii_default`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_fileclosed os.remove(os_helper.TESTFN) FileNotFoundError: [Errno <n>] No such file or directory`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_bool.py", line 261, in test_fileclosed
    os.remove(os_helper.TESTFN)
FileNotFoundError: [Errno 2] No such file or directory: '@test_31_tmpæ'`
example test: `test_bool.BoolTest.test_fileclosed`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_filename_in_syntaxerror with temp_cwd() as cwd: File <str>, line <n>, in __enter__ return next(`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_fstring.py", line 1614, in test_filename_in_syntaxerror
    with temp_cwd() as cwd:
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/contextlib.py", line 137, in __enter__
    return next(self.gen)
      `
example test: `test_fstring.TestCase.test_filename_in_syntaxerror`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_finalize self.assertEqual(f(), None) AssertionError: <n> != None`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_weakref.py", line 2022, in test_finalize
    self.assertEqual(f(), None)
AssertionError: 199 != None`
example test: `test_weakref.FinalizeTestCase.test_finalize`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_frame_resurrect self.assertTrue(frame) ^^^^^ UnboundLocalError: local variable <str> referenced`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_generators.py", line 66, in test_frame_resurrect
    self.assertTrue(frame)
                    ^^^^^
UnboundLocalError: local variable 'frame' referenced before assignment`
example test: `test_generators.FinalizationTest.test_frame_resurrect`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_free_after_iterating support.check_free_after_iterating(self, iter, dict) File <str>, line <n>,`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_dict.py", line 1285, in test_free_after_iterating
    support.check_free_after_iterating(self, iter, dict)
  File "/work/suites/cpython/Lib/test/support/__init__.py", line 1830, in check_free_after_iterating
    test.asser`
example test: `test_dict.DictTest.test_free_after_iterating`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_from_format self.assertEqual(PyBytes_FromFormat(b<str>, c_int(<n>)), AssertionError: b<str> != `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_bytes.py", line 1146, in test_from_format
    self.assertEqual(PyBytes_FromFormat(b'c=%c', c_int(255)),
AssertionError: b'c=\xc3\xbf' != b'c=\xff'`
example test: `test_bytes.BytesTest.test_from_format`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_generator_del_cleanup_exc_state self._check_generator_cleanup_exc_state(do_del) File <str>, lin`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_exceptions.py", line 1065, in test_generator_del_cleanup_exc_state
    self._check_generator_cleanup_exc_state(do_del)
  File "/work/suites/cpython/Lib/test/test_exceptions.py", line 1047, in _check_generator_cleanup_exc_s`
example test: `test_exceptions.ExceptionTests.test_generator_del_cleanup_exc_state`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_generator_next_cleanup_exc_state self._check_generator_cleanup_exc_state(do_next) File <str>, l`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_exceptions.py", line 1075, in test_generator_next_cleanup_exc_state
    self._check_generator_cleanup_exc_state(do_next)
  File "/work/suites/cpython/Lib/test/test_exceptions.py", line 1047, in _check_generator_cleanup_exc`
example test: `test_exceptions.ExceptionTests.test_generator_next_cleanup_exc_state`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_generator_send_cleanup_exc_state self._check_generator_cleanup_exc_state(do_send) File <str>, l`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_exceptions.py", line 1085, in test_generator_send_cleanup_exc_state
    self._check_generator_cleanup_exc_state(do_send)
  File "/work/suites/cpython/Lib/test/test_exceptions.py", line 1047, in _check_generator_cleanup_exc`
example test: `test_exceptions.ExceptionTests.test_generator_send_cleanup_exc_state`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_generator_throw_cleanup_exc_state self._check_generator_cleanup_exc_state(do_throw) File <str>,`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_exceptions.py", line 1055, in test_generator_throw_cleanup_exc_state
    self._check_generator_cleanup_exc_state(do_throw)
  File "/work/suites/cpython/Lib/test/test_exceptions.py", line 1047, in _check_generator_cleanup_e`
example test: `test_exceptions.ExceptionTests.test_generator_throw_cleanup_exc_state`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_handle_frame_object_in_creation thresholds = gc.get_threshold() ^^^^^^^^^^^^^^^^^^ AttributeErr`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_generators.py", line 188, in test_handle_frame_object_in_creation
    thresholds = gc.get_threshold()
                 ^^^^^^^^^^^^^^^^^^
AttributeError: module 'gc' has no attribute 'get_threshold'`
example test: `test_generators.GeneratorTest.test_handle_frame_object_in_creation`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_hash_exact check_one_exact((), <n>, <n>) File <str>, line <n>, in check_one_exact self.fail(msg`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_tuple.py", line 115, in test_hash_exact
    check_one_exact((), 750394483, 5740354900026072187)
  File "/work/suites/cpython/Lib/test/test_tuple.py", line 113, in check_one_exact
    self.fail(msg)
AssertionError: FAIL has`
example test: `test_tuple.TupleTest.test_hash_exact`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_hash_nan self.assertEqual(hash(value), object.__hash__(value)) AssertionError: <n> != <n>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_float.py", line 610, in test_hash_nan
    self.assertEqual(hash(value), object.__hash__(value))
AssertionError: 0 != 2146959360`
example test: `test_float.GeneralFloatCases.test_hash_nan`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_intersection self.assertEqual(len(i), len(self.items2)) AssertionError: <n> != <n>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_weakset.py", line 107, in test_intersection
    self.assertEqual(len(i), len(self.items2))
AssertionError: 3 != 2`
example test: `test_weakset.TestWeakSet.test_intersection`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_invalid_delattr self.assertRaisesRegex(TE, msg, delattr, exc, <str>) AssertionError: <str> does`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_exceptions.py", line 671, in test_invalid_delattr
    self.assertRaisesRegex(TE, msg, delattr, exc, 'args')
AssertionError: "may not be deleted" does not match "can't delete BaseException.args"`
example test: `test_exceptions.ExceptionTests.test_invalid_delattr`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_invalid_line_continuation_error_position self._check_error(r<str>, File <str>, line <n>, in _ch`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_syntax.py", line 2353, in test_invalid_line_continuation_error_position
    self._check_error(r"a = 3 \ 4",
  File "/work/suites/cpython/Lib/test/test_syntax.py", line 2045, in _check_error
    self.assertEqual(err.offset,`
example test: `test_syntax.SyntaxTestCase.test_invalid_line_continuation_error_position`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_invisible_characters self._check_error(<str>, <str>) File <str>, line <n>, in _check_error self`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_syntax.py", line 2404, in test_invisible_characters
    self._check_error('print\x17("Hello")', "invalid non-printable character")
  File "/work/suites/cpython/Lib/test/test_syntax.py", line 2040, in _check_error
    self.`
example test: `test_syntax.SyntaxTestCase.test_invisible_characters`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_list_index_modifing_operand with self.assertRaises(ValueError): AssertionError: ValueError not `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_list.py", line 254, in test_list_index_modifing_operand
    with self.assertRaises(ValueError):
AssertionError: ValueError not raised`
example test: `test_list.ListTest.test_list_index_modifing_operand`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_memory_error_in_subinterp rc, _, err = script_helper.assert_python_ok(<str>, code) ^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_exceptions.py", line 1826, in test_memory_error_in_subinterp
    rc, _, err = script_helper.assert_python_ok("-c", code)
                 ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/sup`
example test: `test_exceptions.ExceptionTests.test_memory_error_in_subinterp`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_method_descriptor_flag self.assertTrue(_testcapi.MethodDescriptorBase.__flags__ & Py_TPFLAGS_ME`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 630, in test_method_descriptor_flag
    self.assertTrue(_testcapi.MethodDescriptorBase.__flags__ & Py_TPFLAGS_METHOD_DESCRIPTOR)
                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: module '_te`
example test: `test_call.TestPEP590.test_method_descriptor_flag`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_new_builtins_issue_43102 self.assertEqual(new_func.__globals__[<str>], {}) AssertionError: {<st`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_collections.py", line 702, in test_new_builtins_issue_43102
    self.assertEqual(new_func.__globals__['__builtins__'], {})
AssertionError: {'__name__': 'builtins', '__doc__': None, [5808 chars]or'>} != {}
Diff is 6319 char`
example test: `test_collections.TestNamedTuple.test_new_builtins_issue_43102`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_non_sequence for f in (self.module.bisect_left, self.module.bisect_right, ^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_bisect.py", line 359, in test_non_sequence
    for f in (self.module.bisect_left, self.module.bisect_right,
              ^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: 'NoneType' object has no attribute 'bisect_left'`
example test: `test_bisect.TestErrorHandlingC.test_non_sequence`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_oob_indexing_dictiter_iternextitem self.assertRaises(RuntimeError, iter_and_mutate) AssertionEr`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_dict.py", line 1396, in test_oob_indexing_dictiter_iternextitem
    self.assertRaises(RuntimeError, iter_and_mutate)
AssertionError: RuntimeError not raised by iter_and_mutate`
example test: `test_dict.DictTest.test_oob_indexing_dictiter_iternextitem`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_order self.assertFalse(f2.alive) AssertionError: True is not false`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_weakref.py", line 2080, in test_order
    self.assertFalse(f2.alive)
AssertionError: True is not false`
example test: `test_weakref.FinalizeTestCase.test_order`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_possible_set_operations with self.assertWarnsRegex(FutureWarning, <str>) as w: AssertionError: `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_re.py", line 1216, in test_possible_set_operations
    with self.assertWarnsRegex(FutureWarning, 'Possible set difference') as w:
AssertionError: FutureWarning not triggered`
example test: `test_re.ReTests.test_possible_set_operations`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_refcycle old_garbage = gc.garbage[:] ^^^^^^^^^^ AttributeError: module <str> has no attribute <`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_generators.py", line 72, in test_refcycle
    old_garbage = gc.garbage[:]
                  ^^^^^^^^^^
AttributeError: module 'gc' has no attribute 'garbage'`
example test: `test_generators.FinalizationTest.test_refcycle`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_repeat_id_preserving self.assertEqual(id(a), id(a * <n>)) AssertionError: <n> != <n>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_bytes.py", line 1272, in test_repeat_id_preserving
    self.assertEqual(id(a), id(a * 1))
AssertionError: 1591 != 1599`
example test: `test_bytes.BytesTest.test_repeat_id_preserving`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_repeat_minmax_overflow self.assertRaises(OverflowError, re.compile, r<str> % <n>**<n>) Assertio`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_re.py", line 1987, in test_repeat_minmax_overflow
    self.assertRaises(OverflowError, re.compile, r".{%d}" % 2**128)
AssertionError: OverflowError not raised by compile`
example test: `test_re.ReTests.test_repeat_minmax_overflow`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_resize_forbidden self.assertRaises(BufferError, resize, <n>) AssertionError: BufferError not ra`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_bytes.py", line 1739, in test_resize_forbidden
    self.assertRaises(BufferError, resize, 11)
AssertionError: BufferError not raised by resize`
example test: `test_bytes.ByteArrayTest.test_resize_forbidden`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_slots self.assertEqual(Counted.counter, <n>) AssertionError: <n> != <n>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_descr.py", line 1246, in test_slots
    self.assertEqual(Counted.counter, 0)
AssertionError: 3 != 0`
example test: `test_descr.ClassPropertiesAndMethods.test_slots`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_symmetric_difference self.assertEqual(len(i), len(self.items) + len(self.items2)) AssertionErro`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_weakset.py", line 141, in test_symmetric_difference
    self.assertEqual(len(i), len(self.items) + len(self.items2))
AssertionError: 6 != 5`
example test: `test_weakset.TestWeakSet.test_symmetric_difference`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_syntax_warning_infinite_recursion_in_file with temp_cwd(): File <str>, line <n>, in __enter__ r`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_fstring.py", line 1877, in test_syntax_warning_infinite_recursion_in_file
    with temp_cwd():
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/contextlib.py", line 137, in __enter__
    return next(self.`
example test: `test_fstring.TestCase.test_syntax_warning_infinite_recursion_in_file`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_tab process = subprocess.run(args, input=input_, capture_output=True, text=True, check=True) ^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_json/test_tool.py", line 189, in test_tab
    process = subprocess.run(args, input=input_, capture_output=True, text=True, check=True)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`
example test: `test_json.test_tool.TestTool.test_tab`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_union self.assertEqual(len(u), len(self.items) + len(self.items2)) AssertionError: <n> != <n>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_weakset.py", line 87, in test_union
    self.assertEqual(len(u), len(self.items) + len(self.items2))
AssertionError: 6 != 5`
example test: `test_weakset.TestWeakSet.test_union`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_vsBuiltinSort f = self.module.insort_right ^^^^^^^^^^^^^^^^^^^^^^^^ AttributeError: <str> objec`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_bisect.py", line 311, in test_vsBuiltinSort
    f = self.module.insort_right
        ^^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: 'NoneType' object has no attribute 'insort_right'`
example test: `test_bisect.TestInsortC.test_vsBuiltinSort`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_weak_destroy_and_mutate_while_iterating self.assertNotIn(u, s) AssertionError: <str> unexpected`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_weakset.py", line 391, in test_weak_destroy_and_mutate_while_iterating
    self.assertNotIn(u, s)
AssertionError: 'Z' unexpectedly found in {<weakref at 1081320323; to 'UserString' at 1660792887>, <weakref at 232249741; to`
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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_writing_in_place infile = self._create_infile() ^^^^^^^^^^^^^^^^^^^^^ File <str>, line <n>, in `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_json/test_tool.py", line 136, in test_writing_in_place
    infile = self._create_infile()
             ^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_json/test_tool.py", line 97, in _create_infile
    wit`
example test: `test_json.test_tool.TestTool.test_writing_in_place`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in testCbrt self.assertRaises(TypeError, math.cbrt) ^^^^^^^^^ AttributeError: module <str> has no attri`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_math.py", line 390, in testCbrt
    self.assertRaises(TypeError, math.cbrt)
                                 ^^^^^^^^^
AttributeError: module 'math' has no attribute 'cbrt'`
example test: `test_math.MathTests.testCbrt`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in testLeaks self.assertEqual(Foo.count, <n>) AssertionError: <n> != <n>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_scope.py", line 478, in testLeaks
    self.assertEqual(Foo.count, 0)
AssertionError: 100 != 0`
example test: `test_scope.ScopeTests.testLeaks`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in testObjectAttributeAccessErrorMessages with self.assertRaisesRegex(AttributeError, error_msg): Asser`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_class.py", line 698, in testObjectAttributeAccessErrorMessages
    with self.assertRaisesRegex(AttributeError, error_msg):
AssertionError: "'A' object has no attribute 'x'" does not match "A has no attribute 'x'"`
example test: `test_class.ClassTests.testObjectAttributeAccessErrorMessages`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in testRaising fp = open(TESTFN, <str>, encoding=<str>) ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ PermissionE`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_exceptions.py", line 65, in testRaising
    fp = open(TESTFN, 'w', encoding="utf-8")
         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
PermissionError: [Errno 13] Permission denied: '@test_43_tmpæ'`
example test: `test_exceptions.ExceptionTests.testRaising`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in testTypeAttributeAccessErrorMessages with self.assertRaisesRegex(AttributeError, error_msg): Asserti`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_class.py", line 683, in testTypeAttributeAccessErrorMessages
    with self.assertRaisesRegex(AttributeError, error_msg):
AssertionError: "type object 'A' has no attribute 'x'" does not match "'A' object has no attribute 'x`
example test: `test_class.ClassTests.testTypeAttributeAccessErrorMessages`
