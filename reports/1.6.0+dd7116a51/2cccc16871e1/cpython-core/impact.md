# Impact-ordered failures

## By root-cause signature

### 6 × `TypeError: MethClass.meth_noargs() takes <n> positional argument but <n> were given During handling of the above exception, another exception occurred: Tracebac`

distinct messages:
- `TypeError: MethClass.meth_noargs() takes 1 positional argument but 2 were given

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 339, in test_noargs_error_arg
    self.assertRaisesRegex(`
- `TypeError: MethClass.meth_noargs() takes 1 positional argument but 3 were given

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 345, in test_noargs_error_arg2
    self.assertRaisesRegex`
- `TypeError: MethClass.meth_noargs() takes 1 positional argument but 4 were given

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 351, in test_noargs_error_ext
    self.assertRaisesRegex(`
example test: `test_call.TestCallingConventionsClass.test_noargs_error_arg`

### 4 × `Traceback (most recent call last): File <str>, line <n>, in test_free_after_iterating support.check_free_after_iterating(self, iter, self.thetype) ~~~~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_set.py", line 364, in test_free_after_iterating
    support.check_free_after_iterating(self, iter, self.thetype)
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/suppor`
example test: `test_set.TestFrozenSet.test_free_after_iterating`

### 4 × `TypeError: MethClass.meth_o() got an unexpected keyword argument <str> During handling of the above exception, another exception occurred: Traceback (most recen`

distinct messages:
- `TypeError: MethClass.meth_o() got an unexpected keyword argument 'k'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 327, in test_o_error_arg_kw
    self.assertRaisesRegex(
    ~~~~~~~~`
- `TypeError: MethClass.meth_o() got an unexpected keyword argument 'k'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 321, in test_o_error_kw
    self.assertRaisesRegex(
    ~~~~~~~~~~~~`
example test: `test_call.TestCallingConventionsClass.test_o_error_arg_kw`

### 4 × `TypeError: MethClass.meth_o() takes <n> positional arguments but <n> were given During handling of the above exception, another exception occurred: Traceback (m`

distinct messages:
- `TypeError: MethClass.meth_o() takes 2 positional arguments but 4 were given

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 315, in test_o_error_ext
    self.assertRaisesRegex(
    ~~~~`
- `TypeError: MethClass.meth_o() takes 2 positional arguments but 3 were given

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 309, in test_o_error_two_args
    self.assertRaisesRegex(
   `
example test: `test_call.TestCallingConventionsClass.test_o_error_ext`

### 3 × `TypeError: MethInstance.meth_noargs() takes <n> positional argument but <n> were given During handling of the above exception, another exception occurred: Trace`

distinct messages:
- `TypeError: MethInstance.meth_noargs() takes 1 positional argument but 2 were given

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 339, in test_noargs_error_arg
    self.assertRaisesReg`
- `TypeError: MethInstance.meth_noargs() takes 1 positional argument but 3 were given

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 345, in test_noargs_error_arg2
    self.assertRaisesRe`
- `TypeError: MethInstance.meth_noargs() takes 1 positional argument but 4 were given

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 351, in test_noargs_error_ext
    self.assertRaisesReg`
example test: `test_call.TestCallingConventionsInstance.test_noargs_error_arg`

### 3 × `TypeError: MethStatic.meth_noargs() takes <n> positional argument but <n> were given During handling of the above exception, another exception occurred: Traceba`

distinct messages:
- `TypeError: MethStatic.meth_noargs() takes 1 positional argument but 2 were given

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 339, in test_noargs_error_arg
    self.assertRaisesRegex`
- `TypeError: MethStatic.meth_noargs() takes 1 positional argument but 3 were given

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 345, in test_noargs_error_arg2
    self.assertRaisesRege`
- `TypeError: MethStatic.meth_noargs() takes 1 positional argument but 4 were given

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 351, in test_noargs_error_ext
    self.assertRaisesRegex`
example test: `test_call.TestCallingConventionsStatic.test_noargs_error_arg`

### 2 × `ModuleNotFoundError(<str>)`

distinct messages:
- `ModuleNotFoundError("No module named '_testinternalcapi'")`
example test: `test_compile`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_check_encoding_errors self.assertEqual(proc.rc, <n>, proc) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^ `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_bytes.py", line 381, in test_check_encoding_errors
    self.assertEqual(proc.rc, 10, proc)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^
AssertionError: 22 != 10 : _PythonRunResult(rc=22, out=b'', err=b'')`
example test: `test_bytes.ByteArrayTest.test_check_encoding_errors`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_free_after_iterating test.support.check_free_after_iterating(self, iter, self.type2test) ~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_bytes.py", line 1009, in test_free_after_iterating
    test.support.check_free_after_iterating(self, iter, self.type2test)
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpytho`
example test: `test_bytes.ByteArrayTest.test_free_after_iterating`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_highly_nested_subclass self.assertEqual(deleted, list(reversed(range(<n>)))) ~~~~~~~~~~~~~~~~^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_ordered_dict.py", line 519, in test_highly_nested_subclass
    self.assertEqual(deleted, list(reversed(range(100))))
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: Lists differ: [] != [99, 98, 97`
example test: `test_ordered_dict.CPythonBuiltinDictTests.test_highly_nested_subclass`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_memory_leak_gh_140939 b % (_testcapi.PY_SSIZE_T_MAX, b<str>) ~~^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_bytes.py", line 788, in test_memory_leak_gh_140939
    b % (_testcapi.PY_SSIZE_T_MAX, b'abc')
    ~~^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
OverflowError: Python int too large to convert to size`
example test: `test_bytes.ByteArrayTest.test_memory_leak_gh_140939`

### 2 × `TypeError: meth_noargs() takes <n> positional arguments but <n> were given During handling of the above exception, another exception occurred: Traceback (most r`

distinct messages:
- `TypeError: meth_noargs() takes 0 positional arguments but 2 were given

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 345, in test_noargs_error_arg2
    self.assertRaisesRegex(
    ~~~`
- `TypeError: meth_noargs() takes 0 positional arguments but 3 were given

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 351, in test_noargs_error_ext
    self.assertRaisesRegex(
    ~~~~`
example test: `test_call.TestCallingConventions.test_noargs_error_arg2`

### 2 × `TypeError: meth_o() got an unexpected keyword argument <str> During handling of the above exception, another exception occurred: Traceback (most recent call las`

distinct messages:
- `TypeError: meth_o() got an unexpected keyword argument 'k'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 327, in test_o_error_arg_kw
    self.assertRaisesRegex(
    ~~~~~~~~~~~~~~~~~~`
- `TypeError: meth_o() got an unexpected keyword argument 'k'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 321, in test_o_error_kw
    self.assertRaisesRegex(
    ~~~~~~~~~~~~~~~~~~~~~~`
example test: `test_call.TestCallingConventions.test_o_error_arg_kw`

### 2 × `TypeError: meth_o() takes <n> positional argument but <n> were given During handling of the above exception, another exception occurred: Traceback (most recent `

distinct messages:
- `TypeError: meth_o() takes 1 positional argument but 3 were given

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 315, in test_o_error_ext
    self.assertRaisesRegex(
    ~~~~~~~~~~~~~~~`
- `TypeError: meth_o() takes 1 positional argument but 2 were given

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 309, in test_o_error_two_args
    self.assertRaisesRegex(
    ~~~~~~~~~~`
example test: `test_call.TestCallingConventions.test_o_error_ext`

### 2 × `TypeError: MethClass.meth_fastcall() got an unexpected keyword argument <str> During handling of the above exception, another exception occurred: Traceback (mos`

distinct messages:
- `TypeError: MethClass.meth_fastcall() got an unexpected keyword argument 'k'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 375, in test_fastcall_error_kw
    self.assertRaisesRegex(
  `
example test: `test_call.TestCallingConventionsClass.test_fastcall_error_kw`

### 2 × `TypeError: MethClass.meth_noargs() got an unexpected keyword argument <str> During handling of the above exception, another exception occurred: Traceback (most `

distinct messages:
- `TypeError: MethClass.meth_noargs() got an unexpected keyword argument 'k'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 357, in test_noargs_error_kw
    self.assertRaisesRegex(
    ~~`
example test: `test_call.TestCallingConventionsClass.test_noargs_error_kw`

### 2 × `TypeError: MethClass.meth_o() missing <n> required positional argument: <str> During handling of the above exception, another exception occurred: Traceback (mos`

distinct messages:
- `TypeError: MethClass.meth_o() missing 1 required positional argument: 'arg'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 305, in test_o_error_no_arg
    self.assertRaisesRegex(TypeEr`
example test: `test_call.TestCallingConventionsClass.test_o_error_no_arg`

### 2 × `TypeError: MethClass.meth_varargs() got an unexpected keyword argument <str> During handling of the above exception, another exception occurred: Traceback (most`

distinct messages:
- `TypeError: MethClass.meth_varargs() got an unexpected keyword argument 'k'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 281, in test_varargs_error_kw
    self.assertRaisesRegex(
    `
example test: `test_call.TestCallingConventionsClass.test_varargs_error_kw`

### 2 × `TypeError: MethInstance.meth_o() got an unexpected keyword argument <str> During handling of the above exception, another exception occurred: Traceback (most re`

distinct messages:
- `TypeError: MethInstance.meth_o() got an unexpected keyword argument 'k'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 327, in test_o_error_arg_kw
    self.assertRaisesRegex(
    ~~~~~`
- `TypeError: MethInstance.meth_o() got an unexpected keyword argument 'k'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 321, in test_o_error_kw
    self.assertRaisesRegex(
    ~~~~~~~~~`
example test: `test_call.TestCallingConventionsInstance.test_o_error_arg_kw`

### 2 × `TypeError: MethInstance.meth_o() takes <n> positional arguments but <n> were given During handling of the above exception, another exception occurred: Traceback`

distinct messages:
- `TypeError: MethInstance.meth_o() takes 2 positional arguments but 4 were given

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 315, in test_o_error_ext
    self.assertRaisesRegex(
    ~`
- `TypeError: MethInstance.meth_o() takes 2 positional arguments but 3 were given

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 309, in test_o_error_two_args
    self.assertRaisesRegex(
`
example test: `test_call.TestCallingConventionsInstance.test_o_error_ext`

### 2 × `TypeError: MethStatic.meth_o() got an unexpected keyword argument <str> During handling of the above exception, another exception occurred: Traceback (most rece`

distinct messages:
- `TypeError: MethStatic.meth_o() got an unexpected keyword argument 'k'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 327, in test_o_error_arg_kw
    self.assertRaisesRegex(
    ~~~~~~~`
- `TypeError: MethStatic.meth_o() got an unexpected keyword argument 'k'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 321, in test_o_error_kw
    self.assertRaisesRegex(
    ~~~~~~~~~~~`
example test: `test_call.TestCallingConventionsStatic.test_o_error_arg_kw`

### 2 × `TypeError: MethStatic.meth_o() takes <n> positional arguments but <n> were given During handling of the above exception, another exception occurred: Traceback (`

distinct messages:
- `TypeError: MethStatic.meth_o() takes 2 positional arguments but 4 were given

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 315, in test_o_error_ext
    self.assertRaisesRegex(
    ~~~`
- `TypeError: MethStatic.meth_o() takes 2 positional arguments but 3 were given

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 309, in test_o_error_two_args
    self.assertRaisesRegex(
  `
example test: `test_call.TestCallingConventionsStatic.test_o_error_ext`

### 1 × `CPython driver timed out after 60000ms while test_json.test_recursion.TestPyRecursion.test_highly_nested_objects_encoding`

distinct messages:
- `CPython driver timed out after 60000ms while test_json.test_recursion.TestPyRecursion.test_highly_nested_objects_encoding`
example test: `test_json.test_recursion.TestPyRecursion.test_highly_nested_objects_encoding`

### 1 × `CPython driver timed out after 60000ms while test_pickle.CIdPersPicklerTests.test_unpickler_super`

distinct messages:
- `CPython driver timed out after 60000ms while test_pickle.CIdPersPicklerTests.test_unpickler_super`
example test: `test_pickle.CIdPersPicklerTests.test_unpickler_super`

### 1 × `ModuleNotFoundError: No module named <str> During handling of the above exception, another exception occurred: Traceback (most recent call last): File <str>, li`

distinct messages:
- `ModuleNotFoundError: No module named 'foo'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_builtin.py", line 886, in test_exec_builtins_mapping_import
    self.assertRaisesRegex(ImportError, "__import`
example test: `test_builtin.BuiltinTest.test_exec_builtins_mapping_import`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in _check_error compile(code, filename, mode) ~~~~~~~^^^^^^^^^^^^^^^^^^^^^^ File <str>, line <n> a = ( `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_syntax.py", line 2260, in _check_error
    compile(code, filename, mode)
    ~~~~~~~^^^^^^^^^^^^^^^^^^^^^^
  File "<testcase>", line 1
    a = ( 1, 2, 3
                ^
SyntaxError: invalid syntax. Perhaps you forgot a c`
example test: `test_syntax.SyntaxTestCase.test_error_parenthesis`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in _check_error compile(code, filename, mode) ~~~~~~~^^^^^^^^^^^^^^^^^^^^^^ File <str>, line <n> a = <n`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_syntax.py", line 2260, in _check_error
    compile(code, filename, mode)
    ~~~~~~~^^^^^^^^^^^^^^^^^^^^^^
  File "<testcase>", line 1
    a = 3 \ 4
            ^
SyntaxError: unexpected character after line continuation c`
example test: `test_syntax.SyntaxTestCase.test_invalid_line_continuation_error_position`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in _check_error compile(code, filename, mode) ~~~~~~~^^^^^^^^^^^^^^^^^^^^^^ File <str>, line <n> call( `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_syntax.py", line 2260, in _check_error
    compile(code, filename, mode)
    ~~~~~~~^^^^^^^^^^^^^^^^^^^^^^
  File "<testcase>", line 1
    call(
    ^^^^^
SyntaxError: keyword argument repeated: a

During handling of the a`
example test: `test_syntax.SyntaxTestCase.test_multiline_compiler_error_points_to_the_end`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in _check_error compile(code, filename, mode) ~~~~~~~^^^^^^^^^^^^^^^^^^^^^^ File <str>, line <n> print`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_syntax.py", line 2260, in _check_error
    compile(code, filename, mode)
    ~~~~~~~^^^^^^^^^^^^^^^^^^^^^^
  File "<testcase>", line 1
    print("Hello")
         ^
SyntaxError: invalid syntax

During handling of the abov`
example test: `test_syntax.SyntaxTestCase.test_invisible_characters`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in runTest raise self.failureException(self.format_failure(new.getvalue())) AssertionError: Failed doct`

distinct messages:
- `Traceback (most recent call last):
  File "/opt/elide/lib/resources/python/python-home/lib/python3.13/doctest.py", line 2331, in runTest
    raise self.failureException(self.format_failure(new.getvalue()))
AssertionError: Failed doctest test for test.test_unpack_ex.__test__.doctests
  File "/work/su`
example test: `test_unpack_ex.__test__.doctests`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test self.assertTrue(in_table_a1(<str>)) ~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^ AssertionError: Fals`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_stringprep.py", line 10, in test
    self.assertTrue(in_table_a1("\u0221"))
    ~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: False is not true`
example test: `test_stringprep.StringprepTests.test`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test___builtins__ self.assertIs(self.b.__builtins__, builtins_dict) ^^^^^^^^^^^^^^^^^^^ AttributeErr`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_funcattrs.py", line 107, in test___builtins__
    self.assertIs(self.b.__builtins__, builtins_dict)
                  ^^^^^^^^^^^^^^^^^^^
AttributeError: 'function' object has no attribute '__builtins__'`
example test: `test_funcattrs.FunctionPropertiesTest.test___builtins__`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_annotations eq(<str>) ~~^^^^^^^^^^^^^^^^^^^^^^^^^^ File <str>, line <n>, in assertAnnotationEqu`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_future_stmt/test_future.py", line 338, in test_annotations
    eq("{i for i in (1, 2, 3)}")
    ~~^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_future_stmt/test_future.py", line 252, in assertAnnota`
example test: `test_future_stmt.test_future.AnnotationsFutureTestCase.test_annotations`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_attribute_name_interning self.assertIs(x_key, y_key) ~~~~~~~~~~~~~^^^^^^^^^^^^^^ AssertionError`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/pickletester.py", line 3253, in test_attribute_name_interning
    self.assertIs(x_key, y_key)
    ~~~~~~~~~~~~~^^^^^^^^^^^^^^
AssertionError: 'bar' is not 'bar'`
example test: `test_pickle.CDumpPickle_LoadPickle.test_attribute_name_interning`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_bytearray_repr self.assertEqual(f(bytearray(b<str>)), r<str><str><str>\<str>bytearray(b<str>)<s`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_bytes.py", line 2001, in test_bytearray_repr
    self.assertEqual(f(bytearray(b"'")), r'''bytearray(b"\'")''') # "\'"
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: 'bytearray(b"\'")' != `
example test: `test_bytes.AssortedBytesTest.test_bytearray_repr`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_bytearray_str self.test_bytearray_repr(str) ~~~~~~~~~~~~~~~~~~~~~~~~^^^^^ File <str>, line <n>,`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_bytes.py", line 2015, in test_bytearray_str
    self.test_bytearray_repr(str)
    ~~~~~~~~~~~~~~~~~~~~~~~~^^^^^
  File "/work/suites/cpython/Lib/test/test_bytes.py", line 2001, in test_bytearray_repr
    self.assertEqual(f`
example test: `test_bytes.AssortedBytesTest.test_bytearray_str`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_carloverre_multi_inherit_invalid self.fail(<str>) ~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_descr.py", line 4457, in test_carloverre_multi_inherit_invalid
    self.fail("setattr through indirect base types should be rejected")
    ~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError:`
example test: `test_descr.ClassPropertiesAndMethods.test_carloverre_multi_inherit_invalid`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_close_clears_frame self.assertTrue(DetectDelete.deleted) ~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^ `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_generators.py", line 276, in test_close_clears_frame
    self.assertTrue(DetectDelete.deleted)
    ~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^
AssertionError: False is not true`
example test: `test_generators.GeneratorTest.test_close_clears_frame`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_close_closed self.assertEqual(gen.close(), <n>) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^ AssertionError`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_generators.py", line 635, in test_close_closed
    self.assertEqual(gen.close(), 0)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^
AssertionError: None != 0`
example test: `test_generators.GeneratorCloseTest.test_close_closed`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_close_releases_frame_locals self.assertIsNone(f_wr()) ~~~~~~~~~~~~~~~~~^^^^^^^^ AssertionError:`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_generators.py", line 669, in test_close_releases_frame_locals
    self.assertIsNone(f_wr())
    ~~~~~~~~~~~~~~~~~^^^^^^^^
AssertionError: <test.test_generators.GeneratorCloseTest.test_close_releases_frame_locals.<locals>.F`
example test: `test_generators.GeneratorCloseTest.test_close_releases_frame_locals`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_close_return_value self.assertEqual(gen.close(), <n>) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^ Assertio`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_generators.py", line 590, in test_close_return_value
    self.assertEqual(gen.close(), 0)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^
AssertionError: None != 0`
example test: `test_generators.GeneratorCloseTest.test_close_return_value`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_compile_top_level_await co = compile(source, <str>, mode, flags=ast.PyCF_ALLOW_TOP_LEVEL_AWAIT)`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_builtin.py", line 453, in test_compile_top_level_await
    co = compile(source,
                 '?',
                 mode,
                 flags=ast.PyCF_ALLOW_TOP_LEVEL_AWAIT)
  File "?", line 1
    a = await asyncio.s`
example test: `test_builtin.BuiltinTest.test_compile_top_level_await`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_compile_top_level_await_invalid_cases with self.assertRaises( ~~~~~~~~~~~~~~~~~^ SyntaxError, m`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_builtin.py", line 498, in test_compile_top_level_await_invalid_cases
    with self.assertRaises(
         ~~~~~~~~~~~~~~~~~^
            SyntaxError, msg=f"source={source} mode={mode}"):
            ^^^^^^^^^^^^^^^^^^^^^^^`
example test: `test_builtin.BuiltinTest.test_compile_top_level_await_invalid_cases`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_copy_weakkeydict self._check_copy_weakdict(weakref.WeakKeyDictionary) ~~~~~~~~~~~~~~~~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_copy.py", line 841, in test_copy_weakkeydict
    self._check_copy_weakdict(weakref.WeakKeyDictionary)
    ~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_copy.py", line 834, `
example test: `test_copy.TestCopy.test_copy_weakkeydict`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_copy_weakvaluedict self._check_copy_weakdict(weakref.WeakValueDictionary) ~~~~~~~~~~~~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_copy.py", line 844, in test_copy_weakvaluedict
    self._check_copy_weakdict(weakref.WeakValueDictionary)
    ~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_copy.py", line`
example test: `test_copy.TestCopy.test_copy_weakvaluedict`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_deepcopy_weakkeydict self.assertEqual(len(v), <n>) ~~~~~~~~~~~~~~~~^^^^^^^^^^^ AssertionError: `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_copy.py", line 864, in test_deepcopy_weakkeydict
    self.assertEqual(len(v), 1)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^
AssertionError: 2 != 1`
example test: `test_copy.TestCopy.test_deepcopy_weakkeydict`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_deepcopy_weakvaluedict self.assertEqual(len(v), <n>) ~~~~~~~~~~~~~~~~^^^^^^^^^^^ AssertionError`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_copy.py", line 888, in test_deepcopy_weakvaluedict
    self.assertEqual(len(v), 1)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^
AssertionError: 2 != 1`
example test: `test_copy.TestCopy.test_deepcopy_weakvaluedict`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_dict_clear self.assertNotIn(<str>, repr(od)) ~~~~^^^^ KeyError: <str>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_ordered_dict.py", line 640, in test_dict_clear
    self.assertNotIn('NULL', repr(od))
                             ~~~~^^^^
KeyError: 'spam'`
example test: `test_ordered_dict.CPythonOrderedDictSubclassTests.test_dict_clear`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_eval_builtins_mapping self.assertEqual(eval(code, ns), <n>) ~~~~^^^^^^^^^^ File <str>, line <n>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_builtin.py", line 877, in test_eval_builtins_mapping
    self.assertEqual(eval(code, ns), 1)
                     ~~~~^^^^^^^^^^
  File "test", line 1, in <module>
NameError: name 'superglobal' is not defined`
example test: `test_builtin.BuiltinTest.test_eval_builtins_mapping`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_eval_builtins_mapping_reduce self.assertRaisesRegex(AttributeError, <str>, eval, code, ns) ~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_builtin.py", line 895, in test_eval_builtins_mapping_reduce
    self.assertRaisesRegex(AttributeError, "iter", eval, code, ns)
    ~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: AttributeErr`
example test: `test_builtin.BuiltinTest.test_eval_builtins_mapping_reduce`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_exec_closure exec(three_freevars.__code__, ~~~~^^^^^^^^^^^^^^^^^^^^^^^^^ three_freevars.__globa`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_builtin.py", line 935, in test_exec_closure
    exec(three_freevars.__code__,
    ~~~~^^^^^^^^^^^^^^^^^^^^^^^^^
        three_freevars.__globals__,
        ^^^^^^^^^^^^^^^^^^^^^^^^^^^
        closure=three_freevars.__closu`
example test: `test_builtin.BuiltinTest.test_exec_closure`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_exec_globals self.assertRaisesRegex(NameError, <str>, ~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_builtin.py", line 805, in test_exec_globals
    self.assertRaisesRegex(NameError, "name 'print' is not defined",
    ~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                           exec, code, {`
example test: `test_builtin.BuiltinTest.test_exec_globals`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_exec_globals_dict_subclass exec(code, {<str>: customdict({<str>: <n>})}) ~~~~^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_builtin.py", line 868, in test_exec_globals_dict_subclass
    exec(code, {'__builtins__': customdict({'superglobal': 1})})
    ~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "test", line 1, in <module>`
example test: `test_builtin.BuiltinTest.test_exec_globals_dict_subclass`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_exec_globals_error_on_get self.assertRaises(setonlyerror, exec, code, ~~~~~~~~~~~~~~~~~^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_builtin.py", line 859, in test_exec_globals_error_on_get
    self.assertRaises(setonlyerror, exec, code,
    ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^
                      {'__builtins__': setonlydict({'superglobal': 1}`
example test: `test_builtin.BuiltinTest.test_exec_globals_error_on_get`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_exec_globals_frozen self.assertRaises(frozendict_error, ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^ exe`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_builtin.py", line 825, in test_exec_globals_frozen
    self.assertRaises(frozendict_error,
    ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^
                      exec, code, {'__builtins__': frozen_builtins})
                      `
example test: `test_builtin.BuiltinTest.test_exec_globals_frozen`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_frame_resurrect self.assertTrue(frame) ^^^^^ UnboundLocalError: local variable <str> referenced`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_generators.py", line 66, in test_frame_resurrect
    self.assertTrue(frame)
                    ^^^^^
UnboundLocalError: local variable 'frame' referenced before assignment`
example test: `test_generators.FinalizationTest.test_frame_resurrect`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_free_after_iterating support.check_free_after_iterating(self, iter, self.OrderedDict) ~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_ordered_dict.py", line 685, in test_free_after_iterating
    support.check_free_after_iterating(self, iter, self.OrderedDict)
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpytho`
example test: `test_ordered_dict.CPythonOrderedDictSubclassTests.test_free_after_iterating`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_from_format self.assertEqual(PyBytes_FromFormat(b<str>, c_int(<n>)), ~~~~~~~~~~~~~~~~^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_bytes.py", line 1164, in test_from_format
    self.assertEqual(PyBytes_FromFormat(b'c=%c', c_int(255)),
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                     b'c=\xff')
                     ^^^`
example test: `test_bytes.BytesTest.test_from_format`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_fstring_without_formatting_bytecode self.assertEqual(get_code(f<str>), get_code(f<str>)) ~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_fstring.py", line 1780, in test_fstring_without_formatting_bytecode
    self.assertEqual(get_code(f"'{s}'"), get_code(f"f'{s}'"))
                     ~~~~~~~~^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_fstring.p`
example test: `test_fstring.TestCase.test_fstring_without_formatting_bytecode`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_future_dotted_import exec(<str>) ~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ File <str>, line <n> from`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_future_stmt/test_future.py", line 188, in test_future_dotted_import
    exec("from .__future__ import spam")
    ~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "<string>", line 1
    from .__future__ import spam
    ^^^^^^^^^`
example test: `test_future_stmt.test_future.FutureTest.test_future_dotted_import`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_gh129093 self.assertEqual(f<str>, <str>) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^ AssertionErr`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_fstring.py", line 1785, in test_gh129093
    self.assertEqual(f'{1!=2=}', '1!=2=True')
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: '1True' != '1!=2=True'
- 1True
+ 1!=2=True
?  ++++`
example test: `test_fstring.TestCase.test_gh129093`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_handle_frame_object_in_creation thresholds = gc.get_threshold() AttributeError: module <str> ha`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_generators.py", line 200, in test_handle_frame_object_in_creation
    thresholds = gc.get_threshold()
AttributeError: module 'gc' has no attribute 'get_threshold'`
example test: `test_generators.GeneratorTest.test_handle_frame_object_in_creation`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_hex_use_after_free self.assertRaises(BufferError, ba.hex, S(b<str>)) ~~~~~~~~~~~~~~~~~^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_bytes.py", line 1971, in test_hex_use_after_free
    self.assertRaises(BufferError, ba.hex, S(b':'))
    ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: BufferError not raised by hex`
example test: `test_bytes.ByteArrayTest.test_hex_use_after_free`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_infinity_numbers self.assertAnnotationEqual(<str>, expected=inf) ~~~~~~~~~~~~~~~~~~~~~~~~~~^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_future_stmt/test_future.py", line 439, in test_infinity_numbers
    self.assertAnnotationEqual("1e1000", expected=inf)
    ~~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_futur`
example test: `test_future_stmt.test_future.AnnotationsFutureTestCase.test_infinity_numbers`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_input_no_stdout_fileno lines = self.run_child(child, b<str>) File <str>, line <n>, in run_child`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_builtin.py", line 2495, in test_input_no_stdout_fileno
    lines = self.run_child(child, b"quux\r")
  File "/work/suites/cpython/Lib/test/test_builtin.py", line 2335, in run_child
    old_sighup = signal.signal(signal.SIGH`
example test: `test_builtin.PtyTests.test_input_no_stdout_fileno`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_invalid___code___assignment with self.assertWarnsRegex(DeprecationWarning, <str>): ~~~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_funcattrs.py", line 89, in test_invalid___code___assignment
    with self.assertWarnsRegex(DeprecationWarning, 'code object of non-matching type'):
         ~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`
example test: `test_funcattrs.FunctionPropertiesTest.test_invalid___code___assignment`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_invalid_longs self.assertRaises(ValueError, marshal.loads, invalid_string) ~~~~~~~~~~~~~~~~~^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_marshal.py", line 429, in test_invalid_longs
    self.assertRaises(ValueError, marshal.loads, invalid_string)
    ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: ValueError not raised by loads`
example test: `test_marshal.BugsTestCase.test_invalid_longs`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_issue119004_change_linked_list_by_clear self.check_runtime_error_issue119004(dict1, dict2) ~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_ordered_dict.py", line 842, in test_issue119004_change_linked_list_by_clear
    self.check_runtime_error_issue119004(dict1, dict2)
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/tes`
example test: `test_ordered_dict.CPythonOrderedDictSubclassTests.test_issue119004_change_linked_list_by_clear`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_issue119004_change_linked_list_by_delete_key self.check_runtime_error_issue119004(dict1, dict2)`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_ordered_dict.py", line 856, in test_issue119004_change_linked_list_by_delete_key
    self.check_runtime_error_issue119004(dict1, dict2)
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^
  File "/work/suites/cpython/Li`
example test: `test_ordered_dict.CPythonOrderedDictSubclassTests.test_issue119004_change_linked_list_by_delete_key`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_issue119004_change_size_by_clear self.check_runtime_error_issue119004(dict1, dict2) ~~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_ordered_dict.py", line 816, in test_issue119004_change_size_by_clear
    self.check_runtime_error_issue119004(dict1, dict2)
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_`
example test: `test_ordered_dict.CPythonOrderedDictSubclassTests.test_issue119004_change_size_by_clear`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_issue119004_change_size_by_delete_key self.check_runtime_error_issue119004(dict1, dict2) ~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_ordered_dict.py", line 829, in test_issue119004_change_size_by_delete_key
    self.check_runtime_error_issue119004(dict1, dict2)
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/`
example test: `test_ordered_dict.CPythonOrderedDictSubclassTests.test_issue119004_change_size_by_delete_key`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_keywords_in_subclass u = subclass_with_init([<n>, <n>], newarg=<n>) TypeError: frozenset() got `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_set.py", line 810, in test_keywords_in_subclass
    u = subclass_with_init([1, 2], newarg=3)
TypeError: frozenset() got an unexpected keyword argument 'newarg'`
example test: `test_set.TestFrozenSetSubclass.test_keywords_in_subclass`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_keywords_in_subclass u = subclass_with_init([<n>, <n>], newarg=<n>) TypeError: tuple() got an u`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_tuple.py", line 57, in test_keywords_in_subclass
    u = subclass_with_init([1, 2], newarg=3)
TypeError: tuple() got an unexpected keyword argument 'newarg'`
example test: `test_tuple.TupleTest.test_keywords_in_subclass`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_keywords_in_subclass u = subclass_with_new([<n>, <n>], newarg=<n>) TypeError: list() got an une`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_list.py", line 74, in test_keywords_in_subclass
    u = subclass_with_new([1, 2], newarg=3)
TypeError: list() got an unexpected keyword argument 'newarg'`
example test: `test_list.ListTest.test_keywords_in_subclass`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_limit_int self.assertRaisesRegex(ValueError, msg, F, <str> + <str> * (maxdigits+<n>)) ~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_fractions.py", line 481, in test_limit_int
    self.assertRaisesRegex(ValueError, msg, F, '1.1e' + '0' * (maxdigits+1))
    ~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: ValueErro`
example test: `test_fractions.FractionTest.test_limit_int`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_list_index_modifing_operand with self.assertRaises(ValueError): ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^ A`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_list.py", line 274, in test_list_index_modifing_operand
    with self.assertRaises(ValueError):
         ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^
AssertionError: ValueError not raised`
example test: `test_list.ListTest.test_list_index_modifing_operand`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_literal_eval_str_int_limit with self.assertRaises(SyntaxError) as err_ctx: ^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_ast/test_ast.py", line 1609, in test_literal_eval_str_int_limit
    with self.assertRaises(SyntaxError) as err_ctx:
         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: SyntaxError not raised`
example test: `test_ast.test_ast.ASTHelpers_Test.test_literal_eval_str_int_limit`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_method_descriptor_flag self.assertTrue(_testcapi.MethodDescriptorBase.__flags__ & Py_TPFLAGS_ME`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 636, in test_method_descriptor_flag
    self.assertTrue(_testcapi.MethodDescriptorBase.__flags__ & Py_TPFLAGS_METHOD_DESCRIPTOR)
                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: module '_te`
example test: `test_call.TestPEP590.test_method_descriptor_flag`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_mod_concurrent_mutation self.assertRaises(BufferError, fmt.__mod__, S()) ~~~~~~~~~~~~~~~~~^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_bytes.py", line 1362, in test_mod_concurrent_mutation
    self.assertRaises(BufferError, fmt.__mod__, S())
    ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: BufferError not raised by __mod__`
example test: `test_bytes.ByteArrayTest.test_mod_concurrent_mutation`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_pickler_instance_attribute old_persistent_id = pickler.persistent_id ^^^^^^^^^^^^^^^^^^^^^ Attr`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_pickle.py", line 262, in test_pickler_instance_attribute
    old_persistent_id = pickler.persistent_id
                        ^^^^^^^^^^^^^^^^^^^^^
AttributeError: persistent_id`
example test: `test_pickle.CIdPersPicklerTests.test_pickler_instance_attribute`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_pickler_super pickler.dump(<str>) ~~~~~~~~~~~~^^^^^^^ File <str>, line <n>, in persistent_id se`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_pickle.py", line 235, in test_pickler_super
    pickler.dump('abc')
    ~~~~~~~~~~~~^^^^^^^
  File "/work/suites/cpython/Lib/test/test_pickle.py", line 228, in persistent_id
    self.assertIsNone(super().persistent_id(obj)`
example test: `test_pickle.CIdPersPicklerTests.test_pickler_super`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_pickler_super_instance_attribute pickler.dump(<str>) ~~~~~~~~~~~~^^^^^^^ File <str>, line <n>, `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_pickle.py", line 303, in test_pickler_super_instance_attribute
    pickler.dump('abc')
    ~~~~~~~~~~~~^^^^^^^
  File "/work/suites/cpython/Lib/test/test_pickle.py", line 290, in persistent_id
    raise AssertionError('sho`
example test: `test_pickle.CIdPersPicklerTests.test_pickler_super_instance_attribute`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_possible_set_operations with self.assertWarnsRegex(FutureWarning, <str>) as w: ^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_re.py", line 1280, in test_possible_set_operations
    with self.assertWarnsRegex(FutureWarning, 'Possible set difference') as w:
         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError`
example test: `test_re.ReTests.test_possible_set_operations`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_raw_fstring_format_spec self.assertEqual(rf<str>, <str>) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_fstring.py", line 1836, in test_raw_fstring_format_spec
    self.assertEqual(rf"{UnchangedFormat():\xFF}", '\\xFF')
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: 'ÿ' != '\\xFF'
- ÿ
+ \xFF`
example test: `test_fstring.TestCase.test_raw_fstring_format_spec`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_recursion_limit data = marshal.dumps(head) ValueError: Maximum marshal stack depth`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_marshal.py", line 303, in test_recursion_limit
    data = marshal.dumps(head)
ValueError: Maximum marshal stack depth`
example test: `test_marshal.BugsTestCase.test_recursion_limit`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_refcycle old_garbage = gc.garbage[:] ^^^^^^^^^^ AttributeError: module <str> has no attribute <`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_generators.py", line 72, in test_refcycle
    old_garbage = gc.garbage[:]
                  ^^^^^^^^^^
AttributeError: module 'gc' has no attribute 'garbage'`
example test: `test_generators.FinalizationTest.test_refcycle`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_reference_loop_code self.assertRaises(ValueError, marshal.dumps, code, v) ~~~~~~~~~~~~~~~~~^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_marshal.py", line 358, in test_reference_loop_code
    self.assertRaises(ValueError, marshal.dumps, code, v)
    ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: ValueError not raised by dumps`
example test: `test_marshal.BugsTestCase.test_reference_loop_code`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_regression_gh94675 p.start() ~~~~~~~^^ File <str>, line <n>, in start self._popen = self._Popen`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_re.py", line 2665, in test_regression_gh94675
    p.start()
    ~~~~~~~^^
  File "/opt/elide/lib/resources/python/python-home/lib/python3.13/multiprocessing/process.py", line 121, in start
    self._popen = self._Popen(sel`
example test: `test_re.ReTests.test_regression_gh94675`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_repeat_id_preserving self.assertEqual(id(a), id(a * <n>)) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^ As`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_bytes.py", line 1290, in test_repeat_id_preserving
    self.assertEqual(id(a), id(a * 1))
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^
AssertionError: 1675 != 1683`
example test: `test_bytes.BytesTest.test_repeat_id_preserving`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_repeat_minmax_overflow self.assertRaises(OverflowError, re.compile, r<str> % <n>**<n>) ~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_re.py", line 2052, in test_repeat_minmax_overflow
    self.assertRaises(OverflowError, re.compile, r".{%d}" % 2**128)
    ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: OverflowError not ra`
example test: `test_re.ReTests.test_repeat_minmax_overflow`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_repr_mutate self.assertEqual(repr(mylist), <str>) ~~~~^^^^^^^^ IndexError: index out of range`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_list.py", line 130, in test_repr_mutate
    self.assertEqual(repr(mylist), '[obj, obj, obj]')
                     ~~~~^^^^^^^^
IndexError: index out of range`
example test: `test_list.ListTest.test_repr_mutate`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_resize_forbidden self.assertRaises(BufferError, resize, <n>) ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_bytes.py", line 1776, in test_resize_forbidden
    self.assertRaises(BufferError, resize, 11)
    ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: BufferError not raised by resize`
example test: `test_bytes.ByteArrayTest.test_resize_forbidden`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_search_methods_reentrancy_raises_buffererror with self.assertRaises(BufferError): ~~~~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_bytes.py", line 1937, in test_search_methods_reentrancy_raises_buffererror
    with self.assertRaises(BufferError):
         ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^
AssertionError: BufferError not raised`
example test: `test_bytes.ByteArrayTest.test_search_methods_reentrancy_raises_buffererror`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_setdefault_atomic self.assertEqual(hashed1.eq_count + hashed2.eq_count, <n>) ~~~~~~~~~~~~~~~~^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_dict.py", line 494, in test_setdefault_atomic
    self.assertEqual(hashed1.eq_count + hashed2.eq_count, 1)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: 2 != 1`
example test: `test_dict.DictTest.test_setdefault_atomic`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_setvectorcall from _testcapi import function_setvectorcall ImportError: cannot import name <str`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 805, in test_setvectorcall
    from _testcapi import function_setvectorcall
ImportError: cannot import name 'function_setvectorcall' from '_testcapi' (/opt/elide/lib/resources/python/python-home/lib/graalpy2`
example test: `test_call.TestPEP590.test_setvectorcall`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_setvectorcall_load_attr_specialization_deopt from _testcapi import function_setvectorcall Impor`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 832, in test_setvectorcall_load_attr_specialization_deopt
    from _testcapi import function_setvectorcall
ImportError: cannot import name 'function_setvectorcall' from '_testcapi' (/opt/elide/lib/resources/`
example test: `test_call.TestPEP590.test_setvectorcall_load_attr_specialization_deopt`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_setvectorcall_load_attr_specialization_skip from _testcapi import function_setvectorcall Import`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 816, in test_setvectorcall_load_attr_specialization_skip
    from _testcapi import function_setvectorcall
ImportError: cannot import name 'function_setvectorcall' from '_testcapi' (/opt/elide/lib/resources/p`
example test: `test_call.TestPEP590.test_setvectorcall_load_attr_specialization_skip`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_symbolic_groups_errors self.checkPatternError(b<str>, ~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_re.py", line 325, in test_symbolic_groups_errors
    self.checkPatternError(b'(?P<\xc2\xb5>x)',
    ~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^
                           r"bad character in group name '\xc2\xb5'", 4)
      `
example test: `test_re.ReTests.test_symbolic_groups_errors`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_unpickler_instance_attribute old_persistent_load = unpickler.persistent_load ^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_pickle.py", line 279, in test_unpickler_instance_attribute
    old_persistent_load = unpickler.persistent_load
                          ^^^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: persistent_load`
example test: `test_pickle.CIdPersPicklerTests.test_unpickler_instance_attribute`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_vectorcall (_testcapi.MethodDescriptorBase(), (<n>,), {}, True), ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 744, in test_vectorcall
    (_testcapi.MethodDescriptorBase(), (0,), {}, True),
     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^^
AttributeError: module '_testcapi' has no attribute 'MethodDescriptorBase'`
example test: `test_call.TestPEP590.test_vectorcall`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_vectorcall_flag self.assertTrue(_testcapi.MethodDescriptorBase.__flags__ & Py_TPFLAGS_HAVE_VECT`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 646, in test_vectorcall_flag
    self.assertTrue(_testcapi.MethodDescriptorBase.__flags__ & Py_TPFLAGS_HAVE_VECTORCALL)
                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: module '_testcapi' h`
example test: `test_call.TestPEP590.test_vectorcall_flag`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_vectorcall_limited_incoming from _testcapi import pyobject_vectorcall ImportError: cannot impor`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 854, in test_vectorcall_limited_incoming
    from _testcapi import pyobject_vectorcall
ImportError: cannot import name 'pyobject_vectorcall' from '_testcapi' (/opt/elide/lib/resources/python/python-home/lib/`
example test: `test_call.TestPEP590.test_vectorcall_limited_incoming`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_vectorcall_override f = _testcapi.MethodDescriptorNopGet() AttributeError: module <str> has no `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 673, in test_vectorcall_override
    f = _testcapi.MethodDescriptorNopGet()
AttributeError: module '_testcapi' has no attribute 'MethodDescriptorNopGet'`
example test: `test_call.TestPEP590.test_vectorcall_override`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_vectorcall_override_on_mutable_class TestType = _testcapi.make_vectorcall_class() AttributeErro`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 678, in test_vectorcall_override_on_mutable_class
    TestType = _testcapi.make_vectorcall_class()
AttributeError: module '_testcapi' has no attribute 'make_vectorcall_class'`
example test: `test_call.TestPEP590.test_vectorcall_override_on_mutable_class`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_vectorcall_override_with_subclass SuperType = _testcapi.make_vectorcall_class() AttributeError:`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 688, in test_vectorcall_override_with_subclass
    SuperType = _testcapi.make_vectorcall_class()
AttributeError: module '_testcapi' has no attribute 'make_vectorcall_class'`
example test: `test_call.TestPEP590.test_vectorcall_override_with_subclass`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_warning_notimplemented self.assertWarns(DeprecationWarning, bool, NotImplemented) ~~~~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_builtin.py", line 2187, in test_warning_notimplemented
    self.assertWarns(DeprecationWarning, bool, NotImplemented)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: DeprecationWarning not tr`
example test: `test_builtin.BuiltinTest.test_warning_notimplemented`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in testEmptyPy self.doTest(None, files, TESTMOD) ~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^ File <str>, line <n>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_zipimport.py", line 255, in testEmptyPy
    self.doTest(None, files, TESTMOD)
    ~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_zipimport.py", line 161, in doTest
    self.doTestWithPreBuiltZ`
example test: `test_zipimport.CompressedZipImportTestCase.testEmptyPy`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in testFloat self.helper3(floatobj) ~~~~~~~~~~~~^^^^^^^^^^ File <str>, line <n>, in helper3 self.assert`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_marshal.py", line 619, in testFloat
    self.helper3(floatobj)
    ~~~~~~~~~~~~^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_marshal.py", line 603, in helper3
    self.assertGreater(n2, n0)
    ~~~~~~~~~~~~~~~~~~^^`
example test: `test_marshal.InstancingTestCase.testFloat`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in testInt self.helper3(intobj, simple=True) ~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^ File <str>, line <n>, in`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_marshal.py", line 614, in testInt
    self.helper3(intobj, simple=True)
    ~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_marshal.py", line 603, in helper3
    self.assertGreater(n2, n0)
    `
example test: `test_marshal.InstancingTestCase.testInt`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in testLeaks self.assertEqual(Foo.count, <n>) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^ AssertionError: <n> != <n>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_scope.py", line 478, in testLeaks
    self.assertEqual(Foo.count, 0)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^
AssertionError: 100 != 0`
example test: `test_scope.ScopeTests.testLeaks`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in testNoIntern self.assertNotEqual(id(s), id(self.strobj)) ~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_marshal.py", line 713, in testNoIntern
    self.assertNotEqual(id(s), id(self.strobj))
    ~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: 4827 == 4827`
example test: `test_marshal.InterningTestCase.testNoIntern`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in testStr self.helper3(strobj) ~~~~~~~~~~~~^^^^^^^^ File <str>, line <n>, in helper3 self.assertGreate`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_marshal.py", line 624, in testStr
    self.helper3(strobj)
    ~~~~~~~~~~~~^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_marshal.py", line 603, in helper3
    self.assertGreater(n2, n0)
    ~~~~~~~~~~~~~~~~~~^^^^^^^^`
example test: `test_marshal.InstancingTestCase.testStr`

### 1 × `TypeError: can<str>args<str>t delete BaseException.args"`

distinct messages:
- `TypeError: can't delete BaseException.args

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_exceptions.py", line 674, in test_invalid_delattr
    self.assertRaisesRegex(TE, msg, delattr, exc, 'args')
 `
example test: `test_exceptions.ExceptionTests.test_invalid_delattr`

### 1 × `TypeError: expected string or bytes-like object During handling of the above exception, another exception occurred: Traceback (most recent call last): File <str`

distinct messages:
- `TypeError: expected string or bytes-like object

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_re.py", line 2474, in test_bug_40736
    with self.assertRaisesRegex(TypeError, "got 'int'"):
         ~`
example test: `test_re.ReTests.test_bug_40736`

### 1 × `TypeError: keywords must be strings During handling of the above exception, another exception occurred: Traceback (most recent call last): File <str>, line <n>,`

distinct messages:
- `TypeError: keywords must be strings

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_ast/test_ast.py", line 3162, in test_non_str_kwarg
    with self.assertRaisesRegex(TypeError, "got multiple values f`
example test: `test_ast.test_ast.ASTConstructorTests.test_non_str_kwarg`

### 1 × `TypeError: max() missing <n> required positional argument: <str> During handling of the above exception, another exception occurred: Traceback (most recent call`

distinct messages:
- `TypeError: max() missing 1 required positional argument: 'a'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_builtin.py", line 1278, in test_max
    with self.assertRaisesRegex(
         ~~~~~~~~~~~~~`
example test: `test_builtin.BuiltinTest.test_max`

### 1 × `TypeError: meth_fastcall() got an unexpected keyword argument <str> During handling of the above exception, another exception occurred: Traceback (most recent c`

distinct messages:
- `TypeError: meth_fastcall() got an unexpected keyword argument 'k'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 375, in test_fastcall_error_kw
    self.assertRaisesRegex(
    ~~~~~~~~`
example test: `test_call.TestCallingConventions.test_fastcall_error_kw`

### 1 × `TypeError: meth_noargs() got an unexpected keyword argument <str> During handling of the above exception, another exception occurred: Traceback (most recent cal`

distinct messages:
- `TypeError: meth_noargs() got an unexpected keyword argument 'k'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 357, in test_noargs_error_kw
    self.assertRaisesRegex(
    ~~~~~~~~~~~~`
example test: `test_call.TestCallingConventions.test_noargs_error_kw`

### 1 × `TypeError: meth_noargs() takes <n> positional arguments but <n> was given During handling of the above exception, another exception occurred: Traceback (most re`

distinct messages:
- `TypeError: meth_noargs() takes 0 positional arguments but 1 was given

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 339, in test_noargs_error_arg
    self.assertRaisesRegex(
    ~~~~~`
example test: `test_call.TestCallingConventions.test_noargs_error_arg`

### 1 × `TypeError: meth_o() missing <n> required positional argument: <str> During handling of the above exception, another exception occurred: Traceback (most recent c`

distinct messages:
- `TypeError: meth_o() missing 1 required positional argument: 'arg'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 305, in test_o_error_no_arg
    self.assertRaisesRegex(TypeError, msg, `
example test: `test_call.TestCallingConventions.test_o_error_no_arg`

### 1 × `TypeError: meth_varargs() got an unexpected keyword argument <str> During handling of the above exception, another exception occurred: Traceback (most recent ca`

distinct messages:
- `TypeError: meth_varargs() got an unexpected keyword argument 'k'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 281, in test_varargs_error_kw
    self.assertRaisesRegex(
    ~~~~~~~~~~`
example test: `test_call.TestCallingConventions.test_varargs_error_kw`

### 1 × `TypeError: MethInstance.meth_fastcall() got an unexpected keyword argument <str> During handling of the above exception, another exception occurred: Traceback (`

distinct messages:
- `TypeError: MethInstance.meth_fastcall() got an unexpected keyword argument 'k'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 375, in test_fastcall_error_kw
    self.assertRaisesRegex(`
example test: `test_call.TestCallingConventionsInstance.test_fastcall_error_kw`

### 1 × `TypeError: MethInstance.meth_noargs() got an unexpected keyword argument <str> During handling of the above exception, another exception occurred: Traceback (mo`

distinct messages:
- `TypeError: MethInstance.meth_noargs() got an unexpected keyword argument 'k'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 357, in test_noargs_error_kw
    self.assertRaisesRegex(
   `
example test: `test_call.TestCallingConventionsInstance.test_noargs_error_kw`

### 1 × `TypeError: MethInstance.meth_o() missing <n> required positional argument: <str> During handling of the above exception, another exception occurred: Traceback (`

distinct messages:
- `TypeError: MethInstance.meth_o() missing 1 required positional argument: 'arg'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 305, in test_o_error_no_arg
    self.assertRaisesRegex(Typ`
example test: `test_call.TestCallingConventionsInstance.test_o_error_no_arg`

### 1 × `TypeError: MethInstance.meth_varargs() got an unexpected keyword argument <str> During handling of the above exception, another exception occurred: Traceback (m`

distinct messages:
- `TypeError: MethInstance.meth_varargs() got an unexpected keyword argument 'k'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 281, in test_varargs_error_kw
    self.assertRaisesRegex(
 `
example test: `test_call.TestCallingConventionsInstance.test_varargs_error_kw`

### 1 × `TypeError: MethStatic.meth_fastcall() got an unexpected keyword argument <str> During handling of the above exception, another exception occurred: Traceback (mo`

distinct messages:
- `TypeError: MethStatic.meth_fastcall() got an unexpected keyword argument 'k'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 375, in test_fastcall_error_kw
    self.assertRaisesRegex(
 `
example test: `test_call.TestCallingConventionsStatic.test_fastcall_error_kw`

### 1 × `TypeError: MethStatic.meth_noargs() got an unexpected keyword argument <str> During handling of the above exception, another exception occurred: Traceback (most`

distinct messages:
- `TypeError: MethStatic.meth_noargs() got an unexpected keyword argument 'k'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 357, in test_noargs_error_kw
    self.assertRaisesRegex(
    ~`
example test: `test_call.TestCallingConventionsStatic.test_noargs_error_kw`

### 1 × `TypeError: MethStatic.meth_o() missing <n> required positional argument: <str> During handling of the above exception, another exception occurred: Traceback (mo`

distinct messages:
- `TypeError: MethStatic.meth_o() missing 1 required positional argument: 'arg'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 305, in test_o_error_no_arg
    self.assertRaisesRegex(TypeE`
example test: `test_call.TestCallingConventionsStatic.test_o_error_no_arg`

### 1 × `TypeError: MethStatic.meth_varargs() got an unexpected keyword argument <str> During handling of the above exception, another exception occurred: Traceback (mos`

distinct messages:
- `TypeError: MethStatic.meth_varargs() got an unexpected keyword argument 'k'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 281, in test_varargs_error_kw
    self.assertRaisesRegex(
   `
example test: `test_call.TestCallingConventionsStatic.test_varargs_error_kw`

### 1 × `TypeError: min() missing <n> required positional argument: <str> During handling of the above exception, another exception occurred: Traceback (most recent call`

distinct messages:
- `TypeError: min() missing 1 required positional argument: 'a'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_builtin.py", line 1341, in test_min
    with self.assertRaisesRegex(
         ~~~~~~~~~~~~~`
example test: `test_builtin.BuiltinTest.test_min`

### 1 × `TypeError: range() missing <n> required positional argument: <str> During handling of the above exception, another exception occurred: Traceback (most recent ca`

distinct messages:
- `TypeError: range() missing 1 required positional argument: 'a'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_range.py", line 95, in test_range_constructor_error_messages
    with self.assertRaisesRe`
example test: `test_range.RangeTest.test_range_constructor_error_messages`
