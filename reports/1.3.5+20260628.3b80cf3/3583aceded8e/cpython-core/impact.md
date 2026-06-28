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

### 4 × `Traceback (most recent call last): File <str>, line <n>, in test_base64_strict_mode assertExcessData(b<str>, b<str>) File <str>, line <n>, in assertExcessData _`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_binascii.py", line 139, in test_base64_strict_mode
    assertExcessData(b'ab==a', b'i')
  File "/work/suites/cpython/Lib/test/test_binascii.py", line 124, in assertExcessData
    _assertRegexTemplate(r'(?i)Excess data', da`
example test: `test_binascii.ArrayBinASCIITest.test_base64_strict_mode`

### 4 × `Traceback (most recent call last): File <str>, line <n>, in test_base64errors assertInvalidLength(b<str> * <n>) File <str>, line <n>, in assertInvalidLength wit`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_binascii.py", line 199, in test_base64errors
    assertInvalidLength(b'a' * 5)
  File "/work/suites/cpython/Lib/test/test_binascii.py", line 192, in assertInvalidLength
    with self.assertRaisesRegex(binascii.Error, expec`
example test: `test_binascii.ArrayBinASCIITest.test_base64errors`

### 4 × `Traceback (most recent call last): File <str>, line <n>, in test_base64invalid b = binascii.a2b_base64(a) ^^^^^^^^^^^^^^^^^^^^^^ binascii.Error: IllegalArgument`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_binascii.py", line 105, in test_base64invalid
    b = binascii.a2b_base64(a)
        ^^^^^^^^^^^^^^^^^^^^^^
binascii.Error: IllegalArgumentException: Input byte array has wrong 4-byte ending unit

Java stack trace:
java.la`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_binascii.py", line 105, in test_base64invalid
    b = binascii.a2b_base64(a)
        ^^^^^^^^^^^^^^^^^^^^^^
binascii.Error: IllegalArgumentException: Input byte array has wrong 4-byte ending unit

Java stack trace:
java.la`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_binascii.py", line 105, in test_base64invalid
    b = binascii.a2b_base64(a)
        ^^^^^^^^^^^^^^^^^^^^^^
binascii.Error: IllegalArgumentException: Input byte array has wrong 4-byte ending unit

Java stack trace:
java.la`
example test: `test_binascii.ArrayBinASCIITest.test_base64invalid`

### 4 × `Traceback (most recent call last): File <str>, line <n>, in test_empty_string f = getattr(binascii, func) ^^^^^^^^^^^^^^^^^^^^^^^ AttributeError: module <str> h`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_binascii.py", line 399, in test_empty_string
    f = getattr(binascii, func)
        ^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: module 'binascii' has no attribute 'a2b_qp'`
example test: `test_binascii.ArrayBinASCIITest.test_empty_string`

### 4 × `Traceback (most recent call last): File <str>, line <n>, in test_empty_string_for_dir with open(<str>, <str>, encoding=<str>) as file: ^^^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_importlib/source/test_finder.py", line 129, in test_empty_string_for_dir
    with open('mod.py', 'w', encoding='utf-8') as file:
         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
PermissionError: [Errno 13] Permission denied:`
example test: `test_importlib.source.test_finder.Frozen_FinderTestsPEP420.test_empty_string_for_dir`

### 4 × `Traceback (most recent call last): File <str>, line <n>, in test_functions self.assertTrue(hasattr(getattr(binascii, name), <str>)) ^^^^^^^^^^^^^^^^^^^^^^^ Attr`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_binascii.py", line 38, in test_functions
    self.assertTrue(hasattr(getattr(binascii, name), '__call__'))
                            ^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: module 'binascii' has no attribute 'a2b_qp'`
example test: `test_binascii.ArrayBinASCIITest.test_functions`

### 4 × `Traceback (most recent call last): File <str>, line <n>, in test_hex_separator self.assertEqual(binascii.hexlify(self.type2test(s), <str>, <n>), expected8) ^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_binascii.py", line 285, in test_hex_separator
    self.assertEqual(binascii.hexlify(self.type2test(s), '.', 8), expected8)
                     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
NotImplementedError`
example test: `test_binascii.ArrayBinASCIITest.test_hex_separator`

### 4 × `Traceback (most recent call last): File <str>, line <n>, in test_module self.run_test(<str>, compile_={<str>}, File <str>, line <n>, in run_test py_compile.comp`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_importlib/source/test_finder.py", line 84, in test_module
    self.run_test('top_level', compile_={'top_level'},
  File "/work/suites/cpython/Lib/test/test_importlib/source/test_finder.py", line 64, in run_test
    py_comp`
example test: `test_importlib.source.test_finder.Frozen_FinderTestsPEP420.test_module`

### 4 × `Traceback (most recent call last): File <str>, line <n>, in test_package self.run_test(<str>, {<str>}, compile_={<str>}, File <str>, line <n>, in run_test py_co`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_importlib/source/test_finder.py", line 94, in test_package
    self.run_test('pkg', {'pkg.__init__'}, compile_={'pkg.__init__'},
  File "/work/suites/cpython/Lib/test/test_importlib/source/test_finder.py", line 64, in run_`
example test: `test_importlib.source.test_finder.Frozen_FinderTestsPEP420.test_package`

### 4 × `Traceback (most recent call last): File <str>, line <n>, in test_qp a2b_qp = binascii.a2b_qp ^^^^^^^^^^^^^^^ AttributeError: module <str> has no attribute <str>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_binascii.py", line 291, in test_qp
    a2b_qp = binascii.a2b_qp
             ^^^^^^^^^^^^^^^
AttributeError: module 'binascii' has no attribute 'a2b_qp'`
example test: `test_binascii.ArrayBinASCIITest.test_qp`

### 4 × `Traceback (most recent call last): File <str>, line <n>, in test_returned_value a2b = getattr(binascii, fa) ^^^^^^^^^^^^^^^^^^^^^ AttributeError: module <str> h`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_binascii.py", line 46, in test_returned_value
    a2b = getattr(binascii, fa)
          ^^^^^^^^^^^^^^^^^^^^^
AttributeError: module 'binascii' has no attribute 'a2b_qp'`
example test: `test_binascii.ArrayBinASCIITest.test_returned_value`

### 4 × `Traceback (most recent call last): File <str>, line <n>, in test_unicode_a2b a2b = getattr(binascii, fa) ^^^^^^^^^^^^^^^^^^^^^ AttributeError: module <str> has `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_binascii.py", line 420, in test_unicode_a2b
    a2b = getattr(binascii, fa)
          ^^^^^^^^^^^^^^^^^^^^^
AttributeError: module 'binascii' has no attribute 'a2b_qp'`
example test: `test_binascii.ArrayBinASCIITest.test_unicode_a2b`

### 4 × `Traceback (most recent call last): File <str>, line <n>, in test_unicode_b2a self.fail(<str>.format(func, err)) AssertionError: b2a_qp(<str>) raises AttributeEr`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_binascii.py", line 411, in test_unicode_b2a
    self.fail('{}("test") raises {!r}'.format(func, err))
AssertionError: b2a_qp("test") raises AttributeError("module 'binascii' has no attribute 'b2a_qp'")`
example test: `test_binascii.ArrayBinASCIITest.test_unicode_b2a`

### 4 × `Traceback (most recent call last): File <str>, line <n>, in test_uu a = binascii.b2a_uu(b, backtick=backtick) ^^^^^^^^^^^^^^^ AttributeError: module <str> has n`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_binascii.py", line 209, in test_uu
    a = binascii.b2a_uu(b, backtick=backtick)
        ^^^^^^^^^^^^^^^
AttributeError: module 'binascii' has no attribute 'b2a_uu'`
example test: `test_binascii.ArrayBinASCIITest.test_uu`

### 3 × `Traceback (most recent call last): File <str>, line <n>, in runTest raise self.failureException(self.format_failure(new.getvalue())) AssertionError: Failed doct`

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
- `Traceback (most recent call last):
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/doctest.py", line 2257, in runTest
    raise self.failureException(self.format_failure(new.getvalue()))
AssertionError: Failed doctest test for test.test_genexps.__test__.doctests
  File "/work/suit`
example test: `test_generators.__test__.coroutine`

### 3 × `Traceback (most recent call last): File <str>, line <n>, in test_check_encoding_errors proc = assert_python_failure(<str>, <str>, <str>, code) ^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_bytes.py", line 380, in test_check_encoding_errors
    proc = assert_python_failure('-X', 'dev', '-c', code)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/support/script_he`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_unicode.py", line 2698, in test_check_encoding_errors
    proc = assert_python_failure('-X', 'dev', '-c', code)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/support/script`
example test: `test_bytes.ByteArrayTest.test_check_encoding_errors`

### 2 × `AttributeError(<str>)`

distinct messages:
- `AttributeError("module '_asyncio' has no attribute 'Future'")`
example test: `test_int`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_clear self.check_version_changed(d, d.clear) File <str>, line <n>, in check_version_changed sel`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_dict_version.py", line 176, in test_clear
    self.check_version_changed(d, d.clear)
  File "/work/suites/cpython/Lib/test/test_dict_version.py", line 26, in check_version_changed
    self.check_version_unique(mydict)
  Fi`
example test: `test_dict_version.DictSubtypeVersionTests.test_clear`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_constructor empty2 = self.new_dict() ^^^^^^^^^^^^^^^ File <str>, line <n>, in new_dict self.che`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_dict_version.py", line 48, in test_constructor
    empty2 = self.new_dict()
             ^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_dict_version.py", line 42, in new_dict
    self.check_version_unique(d)
  `
example test: `test_dict_version.DictSubtypeVersionTests.test_constructor`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_copy self.check_version_unique(d2) File <str>, line <n>, in check_version_unique self.assertNot`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_dict_version.py", line 61, in test_copy
    self.check_version_unique(d2)
  File "/work/suites/cpython/Lib/test/test_dict_version.py", line 21, in check_version_unique
    self.assertNotIn(version, self.seen_versions)
Asse`
example test: `test_dict_version.DictSubtypeVersionTests.test_copy`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_delitem self.check_version_changed(d, d.__delitem__, <str>) File <str>, line <n>, in check_vers`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_dict_version.py", line 134, in test_delitem
    self.check_version_changed(d, d.__delitem__, 'key')
  File "/work/suites/cpython/Lib/test/test_dict_version.py", line 26, in check_version_changed
    self.check_version_uniq`
example test: `test_dict_version.DictSubtypeVersionTests.test_delitem`

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

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_pop self.check_version_changed(d, d.pop, <str>) File <str>, line <n>, in check_version_changed `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_dict_version.py", line 144, in test_pop
    self.check_version_changed(d, d.pop, 'key')
  File "/work/suites/cpython/Lib/test/test_dict_version.py", line 26, in check_version_changed
    self.check_version_unique(mydict)
 `
example test: `test_dict_version.DictSubtypeVersionTests.test_pop`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_popitem self.check_version_changed(d, d.popitem) File <str>, line <n>, in check_version_changed`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_dict_version.py", line 154, in test_popitem
    self.check_version_changed(d, d.popitem)
  File "/work/suites/cpython/Lib/test/test_dict_version.py", line 26, in check_version_changed
    self.check_version_unique(mydict)
`
example test: `test_dict_version.DictSubtypeVersionTests.test_popitem`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_reload_location_changed self.assertEqual(ns, expected) AssertionError: {<str>__doc__<str>__pack`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_importlib/test_api.py", line 251, in test_reload_location_changed
    self.assertEqual(ns, expected)
AssertionError: {'__n[14 chars], '__doc__': None, '__package__': '', '__file_[26 chars].py'} != {'__n[14 chars], '__packa`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_importlib/test_api.py", line 251, in test_reload_location_changed
    self.assertEqual(ns, expected)
AssertionError: {'__n[14 chars], '__doc__': None, '__package__': '', '__file_[26 chars].py'} != {'__n[14 chars], '__packa`
example test: `test_importlib.test_api.Frozen_ReloadTests.test_reload_location_changed`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_setdefault self.check_version_changed(d, d.setdefault, <str>, <str>) File <str>, line <n>, in c`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_dict_version.py", line 125, in test_setdefault
    self.check_version_changed(d, d.setdefault, 'key', 'value1')
  File "/work/suites/cpython/Lib/test/test_dict_version.py", line 26, in check_version_changed
    self.check_`
example test: `test_dict_version.DictSubtypeVersionTests.test_setdefault`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_setitem self.check_version_changed(d, d.__setitem__, <str>, <str>) File <str>, line <n>, in che`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_dict_version.py", line 67, in test_setitem
    self.check_version_changed(d, d.__setitem__, 'x', 'x')
  File "/work/suites/cpython/Lib/test/test_dict_version.py", line 26, in check_version_changed
    self.check_version_un`
example test: `test_dict_version.DictSubtypeVersionTests.test_setitem`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_setitem_equal self.check_version_changed(d, d.__setitem__, <str>, value1) File <str>, line <n>,`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_dict_version.py", line 104, in test_setitem_equal
    self.check_version_changed(d, d.__setitem__, 'key', value1)
  File "/work/suites/cpython/Lib/test/test_dict_version.py", line 26, in check_version_changed
    self.chec`
example test: `test_dict_version.DictSubtypeVersionTests.test_setitem_equal`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_setitem_same_value self.check_version_changed(d, d.__setitem__, <str>, value) File <str>, line `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_dict_version.py", line 79, in test_setitem_same_value
    self.check_version_changed(d, d.__setitem__, 'key', value)
  File "/work/suites/cpython/Lib/test/test_dict_version.py", line 26, in check_version_changed
    self.c`
example test: `test_dict_version.DictSubtypeVersionTests.test_setitem_same_value`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_update self.check_version_changed(d, d.update, key=<str>) File <str>, line <n>, in check_versio`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_dict_version.py", line 167, in test_update
    self.check_version_changed(d, d.update, key='new value')
  File "/work/suites/cpython/Lib/test/test_dict_version.py", line 26, in check_version_changed
    self.check_version_`
example test: `test_dict_version.DictSubtypeVersionTests.test_update`

### 1 × `ImportError: Failed to import test module: test.test_importlib.source.test_file_loader Traceback (most recent call last): File <str>, line <n>, in _find_test_pa`

distinct messages:
- `ImportError: Failed to import test module: test.test_importlib.source.test_file_loader
Traceback (most recent call last):
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/unittest/loader.py", line 396, in _find_test_path
    module = self._get_module_from_name(name)
             ^^`
example test: `unittest.loader._FailedTest.test.test_importlib.source.test_file_loader`

### 1 × `ImportError: Failed to import test module: test.test_importlib.test_abc Traceback (most recent call last): File <str>, line <n>, in _find_test_path module = sel`

distinct messages:
- `ImportError: Failed to import test module: test.test_importlib.test_abc
Traceback (most recent call last):
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/unittest/loader.py", line 396, in _find_test_path
    module = self._get_module_from_name(name)
             ^^^^^^^^^^^^^^^^^`
example test: `unittest.loader._FailedTest.test.test_importlib.test_abc`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in cleanup ast.AST._fields = old_value ^^^^^^^^^^^^^^^ TypeError: cannot set <str> attribute of immutab`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_ast/test_ast.py", line 74, in cleanup
    ast.AST._fields = old_value
    ^^^^^^^^^^^^^^^
TypeError: cannot set '_fields' attribute of immutable type 'ast.AST'`
example test: `test_ast.test_ast.AST_Tests.test_AST_fields_NULL_check`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test___builtins__ self.assertIs(self.b.__builtins__, builtins_dict) ^^^^^^^^^^^^^^^^^^^ AttributeErr`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_funcattrs.py", line 84, in test___builtins__
    self.assertIs(self.b.__builtins__, builtins_dict)
                  ^^^^^^^^^^^^^^^^^^^
AttributeError: 'function' object has no attribute '__builtins__'`
example test: `test_funcattrs.FunctionPropertiesTest.test___builtins__`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_20731 sub = subprocess.Popen([sys.executable, ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ File <str>, lin`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_source_encoding.py", line 69, in test_20731
    sub = subprocess.Popen([sys.executable,
          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/subprocess.py", line 10`
example test: `test_source_encoding.MiscSourceEncodingTest.test_20731`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_3114 self.assertIsNone(e) AssertionError: () is not None`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_exceptions.py", line 1100, in test_3114
    self.assertIsNone(e)
AssertionError: () is not None`
example test: `test_exceptions.ExceptionTests.test_3114`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_3611 self.assertEqual(ZeroDivisionError, cm.unraisable.exc_type) ^^^^^^^^^^^^^^^^^^^^^^ Attribu`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_raise.py", line 484, in test_3611
    self.assertEqual(ZeroDivisionError, cm.unraisable.exc_type)
                                        ^^^^^^^^^^^^^^^^^^^^^^
AttributeError: 'NoneType' object has no attribute 'exc_type'`
example test: `test_raise.TestContext.test_3611`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_arg_parsing for f in (self.module.bisect_left, self.module.bisect_right, ^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_bisect.py", line 380, in test_arg_parsing
    for f in (self.module.bisect_left, self.module.bisect_right,
              ^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: 'NoneType' object has no attribute 'bisect_left'`
example test: `test_bisect.TestErrorHandlingC.test_arg_parsing`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_ascii self.assertTypedEqual(ascii(WithRepr(StrSubclass(<str>))), StrSubclass(<str>)) File <str>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_unicode.py", line 154, in test_ascii
    self.assertTypedEqual(ascii(WithRepr(StrSubclass('<abc>'))), StrSubclass('<abc>'))
  File "/work/suites/cpython/Lib/test/test_unicode.py", line 104, in assertTypedEqual
    self.ass`
example test: `test_unicode.UnicodeTest.test_ascii`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_AST_fields_NULL_check del ast.AST._fields ^^^^^^^^^^^^^^^ TypeError: cannot set <str> attribute`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_ast/test_ast.py", line 77, in test_AST_fields_NULL_check
    del ast.AST._fields
        ^^^^^^^^^^^^^^^
TypeError: cannot set '_fields' attribute of immutable type 'ast.AST'`
example test: `test_ast.test_ast.AST_Tests.test_AST_fields_NULL_check`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_backcompatibility self.assertEqual(self.module.insort, self.module.insort_right) ^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_bisect.py", line 316, in test_backcompatibility
    self.assertEqual(self.module.insort, self.module.insort_right)
                     ^^^^^^^^^^^^^^^^^^
AttributeError: 'NoneType' object has no attribute 'insort'`
example test: `test_bisect.TestInsortC.test_backcompatibility`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_badhandlerresults self.assertRaises( File <str>, line <n>, in assertRaises return context.handl`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_codeccallbacks.py", line 765, in test_badhandlerresults
    self.assertRaises(
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/unittest/case.py", line 778, in assertRaises
    return context.handle('asse`
example test: `test_codeccallbacks.CodecCallbackTest.test_badhandlerresults`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_bug_40736 with self.assertRaisesRegex(TypeError, <str>): AssertionError: <str> does not match <`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_re.py", line 2405, in test_bug_40736
    with self.assertRaisesRegex(TypeError, "got 'int'"):
AssertionError: "got 'int'" does not match "object of type 'int' has no len()"`
example test: `test_re.ReTests.test_bug_40736`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_bytearray_join_with_misbehaving_iterator self.assertRaises(BufferError, array.join, iterator())`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_builtin.py", line 2086, in test_bytearray_join_with_misbehaving_iterator
    self.assertRaises(BufferError, array.join, iterator())
AssertionError: BufferError not raised by join`
example test: `test_builtin.BuiltinTest.test_bytearray_join_with_misbehaving_iterator`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_callbacks self.assertEqual( AssertionError: <str> != <str> -   +  [<<n>>][<<n>>][<<n>>]`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_codeccallbacks.py", line 251, in test_callbacks
    self.assertEqual(
AssertionError: '\x00\x7f' != '\x00[<129>]\x7f[<128>][<255>]'
-  
+  [<129>][<128>][<255>]`
example test: `test_codeccallbacks.CodecCallbackTest.test_callbacks`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_capitalize_nonascii self.checkequal(<str>, File <str>, line <n>, in checkequal self.assertEqual`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/string_tests.py", line 1135, in test_capitalize_nonascii
    self.checkequal('\u019b\u1d00\u1d86\u0221\u1fb7',
  File "/work/suites/cpython/Lib/test/string_tests.py", line 66, in checkequal
    self.assertEqual(
AssertionError:`
example test: `test_unicode.UnicodeTest.test_capitalize_nonascii`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_codecs_charmap self.assertEqual(str(s, encoding).encode(encoding), s) AssertionError: b<str>()*`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_unicode.py", line 2366, in test_codecs_charmap
    self.assertEqual(str(s, encoding).encode(encoding), s)
AssertionError: b'\x0[119 chars] !"#$\x15&\'()*+,-./0123456789:;<=>?@ABCDEFGHI[54 chars]\x7f' != b'\x0[119 chars] !"`
example test: `test_unicode.UnicodeTest.test_codecs_charmap`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_codecs_utf7 with self.assertRaisesRegex(UnicodeDecodeError, AssertionError: <str> does not matc`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_unicode.py", line 1829, in test_codecs_utf7
    with self.assertRaisesRegex(UnicodeDecodeError,
AssertionError: "ill-formed sequence" does not match "'utf_7' codec can't decode bytes in position 1-2: malformed input"`
example test: `test_unicode.UnicodeTest.test_codecs_utf7`

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
    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
SyntaxError: 'aw`
example test: `test_builtin.BuiltinTest.test_compile_top_level_await`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_compile_top_level_await_invalid_cases with self.assertRaises( AssertionError: SyntaxError not r`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_builtin.py", line 490, in test_compile_top_level_await_invalid_cases
    with self.assertRaises(
AssertionError: SyntaxError not raised : source=def f():  [x async for x in arange(10)]
 mode=single`
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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_crashing_decode_handler self.assertEqual( AssertionError: <str> != <str> - Ø  + ����Ø `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_codeccallbacks.py", line 1212, in test_crashing_decode_handler
    self.assertEqual(
AssertionError: 'Ø\x00' != '����Ø\x00'
- Ø 
+ ����Ø `
example test: `test_codeccallbacks.CodecCallbackTest.test_crashing_decode_handler`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_crcrcrlf out = self.check_script_output(src, br<str>) ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_source_encoding.py", line 243, in test_crcrcrlf
    out = self.check_script_output(src, br"'\n\n\n'")
          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_source_encoding.py", li`
example test: `test_source_encoding.FileSourceEncodingTest.test_crcrcrlf`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_crcrcrlf2 out = self.check_script_output(src, br<str>) ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_source_encoding.py", line 248, in test_crcrcrlf2
    out = self.check_script_output(src, br"'\n\n\n'")
          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_source_encoding.py", l`
example test: `test_source_encoding.FileSourceEncodingTest.test_crcrcrlf2`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_crcrlf out = self.check_script_output(src, br<str>) ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ F`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_source_encoding.py", line 239, in test_crcrlf
    out = self.check_script_output(src, br"'\n\n'")
          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_source_encoding.py", line 336`
example test: `test_source_encoding.FileSourceEncodingTest.test_crcrlf`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_crlf out = self.check_script_output(src, br<str>) ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ File `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_source_encoding.py", line 235, in test_crlf
    out = self.check_script_output(src, br"'\n'")
          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_source_encoding.py", line 336, in c`
example test: `test_source_encoding.FileSourceEncodingTest.test_crlf`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_cycle_through_dict for o in gc.get_objects(): ^^^^^^^^^^^^^^^^ AttributeError: module <str> has`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_descr.py", line 4894, in test_cycle_through_dict
    for o in gc.get_objects():
             ^^^^^^^^^^^^^^^^
AttributeError: module 'gc' has no attribute 'get_objects'`
example test: `test_descr.ClassPropertiesAndMethods.test_cycle_through_dict`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_decodehelper self.assertEqual(b<str>.decode(<str>, <str>), <str>) AssertionError: <str> != <str`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_codeccallbacks.py", line 954, in test_decodehelper
    self.assertEqual(b"\xff0".decode("ascii", "test.posreturn"), "<?>0")
AssertionError: '0' != '<?>0'
- 0
+ <?>0`
example test: `test_codeccallbacks.CodecCallbackTest.test_decodehelper`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_decoding_callbacks self.assertEqual(sin.decode(<str>, <str>), sout) AssertionError: <str> != <s`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_codeccallbacks.py", line 200, in test_decoding_callbacks
    self.assertEqual(sin.decode("utf-8", "test.relaxedutf8"), sout)
AssertionError: 'a\x00bcü' != 'a\x00b\x00cü\x00\x00'
- a bcü
+ a b cü  
?    +  ++`
example test: `test_codeccallbacks.CodecCallbackTest.test_decoding_callbacks`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_default_coding self.check_script_output(src, br<str>) File <str>, line <n>, in check_script_out`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_source_encoding.py", line 180, in test_default_coding
    self.check_script_output(src, br"'\xe4'")
  File "/work/suites/cpython/Lib/test/test_source_encoding.py", line 336, in check_script_output
    res = script_helper.a`
example test: `test_source_encoding.FileSourceEncodingTest.test_default_coding`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_double_coding_line self.check_script_output(src, br<str>) File <str>, line <n>, in check_script`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_source_encoding.py", line 206, in test_double_coding_line
    self.check_script_output(src, br"'\xc3\u20ac'")
  File "/work/suites/cpython/Lib/test/test_source_encoding.py", line 336, in check_script_output
    res = scrip`
example test: `test_source_encoding.FileSourceEncodingTest.test_double_coding_line`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_double_coding_same_line self.check_script_output(src, br<str>) File <str>, line <n>, in check_s`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_source_encoding.py", line 211, in test_double_coding_same_line
    self.check_script_output(src, br"'\xc3\u20ac'")
  File "/work/suites/cpython/Lib/test/test_source_encoding.py", line 336, in check_script_output
    res = `
example test: `test_source_encoding.FileSourceEncodingTest.test_double_coding_same_line`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_encode_nonascii_replacement res = input.encode(enc, <str>) ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_codeccallbacks.py", line 812, in test_encode_nonascii_replacement
    res = input.encode(enc, "test.replacing")
          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
LookupError: unknown error handler name 'test.replacing'`
example test: `test_codeccallbacks.CodecCallbackTest.test_encode_nonascii_replacement`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_encodehelper self.assertRaises(TypeError, <str>.encode, <str>, <str>) File <str>, line <n>, in `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_codeccallbacks.py", line 996, in test_encodehelper
    self.assertRaises(TypeError, "\xff".encode, "ascii", "test.badencodereturn1")
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/unittest/case.py", lin`
example test: `test_codeccallbacks.CodecCallbackTest.test_encodehelper`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_ensure_ascii_default infile = self._create_infile(<str>) ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ File `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_json/test_tool.py", line 213, in test_ensure_ascii_default
    infile = self._create_infile('{"key":"💩"}')
             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_json/test_tool.py", line `
example test: `test_json.test_tool.TestTool.test_ensure_ascii_default`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_exception_groups_feature_version with self.assertRaises(SyntaxError): AssertionError: SyntaxErr`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_ast/test_ast.py", line 845, in test_exception_groups_feature_version
    with self.assertRaises(SyntaxError):
AssertionError: SyntaxError not raised`
example test: `test_ast.test_ast.AST_Tests.test_exception_groups_feature_version`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_exec_builtins_mapping_import self.assertRaisesRegex(ImportError, <str>, exec, code, ns) Asserti`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_builtin.py", line 836, in test_exec_builtins_mapping_import
    self.assertRaisesRegex(ImportError, "__import__ not found", exec, code, ns)
AssertionError: "__import__ not found" does not match "No module named 'foo'"`
example test: `test_builtin.BuiltinTest.test_exec_builtins_mapping_import`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_file_parse f = open(filename, <str>, encoding=<str>) ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Per`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_source_encoding.py", line 122, in test_file_parse
    f = open(filename, "w", encoding="cp1252")
        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
PermissionError: [Errno 13] Permission denied: '@test_34_tmpæ.py'`
example test: `test_source_encoding.MiscSourceEncodingTest.test_file_parse`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_file_parse_error_multiline with open(TESTFN, <str>) as fd: ^^^^^^^^^^^^^^^^^^ PermissionError: `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_source_encoding.py", line 153, in test_file_parse_error_multiline
    with open(TESTFN, "wb") as fd:
         ^^^^^^^^^^^^^^^^^^
PermissionError: [Errno 13] Permission denied: '@test_34_tmpæ'`
example test: `test_source_encoding.MiscSourceEncodingTest.test_file_parse_error_multiline`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_fileclosed os.remove(os_helper.TESTFN) FileNotFoundError: [Errno <n>] No such file or directory`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_bool.py", line 261, in test_fileclosed
    os.remove(os_helper.TESTFN)
FileNotFoundError: [Errno 2] No such file or directory: '@test_32_tmpæ'`
example test: `test_bool.BoolTest.test_fileclosed`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_find_etc_raise_correct_error_messages self.assertRaisesRegex(TypeError, r<str>, s.find, Asserti`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/string_tests.py", line 1508, in test_find_etc_raise_correct_error_messages
    self.assertRaisesRegex(TypeError, r'^find\(', s.find,
AssertionError: "^find\(" does not match "str.find() takes from 2 to 4 positional arguments bu`
example test: `test_unicode.UnicodeTest.test_find_etc_raise_correct_error_messages`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_first_coding_line self.check_script_output(src, br<str>) File <str>, line <n>, in check_script_`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_source_encoding.py", line 185, in test_first_coding_line
    self.check_script_output(src, br"'\xc3\u20ac'")
  File "/work/suites/cpython/Lib/test/test_source_encoding.py", line 336, in check_script_output
    res = script`
example test: `test_source_encoding.FileSourceEncodingTest.test_first_coding_line`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_first_non_utf8_coding_line self.check_script_output(src, br<str>) File <str>, line <n>, in chec`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_source_encoding.py", line 216, in test_first_non_utf8_coding_line
    self.check_script_output(src, br"'\xc3\u20ac'")
  File "/work/suites/cpython/Lib/test/test_source_encoding.py", line 336, in check_script_output
    res`
example test: `test_source_encoding.FileSourceEncodingTest.test_first_non_utf8_coding_line`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_help_flag rc, out, err = assert_python_ok(<str>, <str>, <str>) ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_json/test_tool.py", line 151, in test_help_flag
    rc, out, err = assert_python_ok('-m', 'json.tool', '-h')
                   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/support/script`
example test: `test_json.test_tool.TestTool.test_help_flag`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_implicit_files_with_compiled_importlib assert importlib.import_module(<str>).val == <str> ^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_importlib/resources/test_files.py", line 185, in test_implicit_files_with_compiled_importlib
    assert importlib.import_module('frozenpkg').val == 'resources are the best'
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 `
example test: `test_importlib.resources.test_files.ImplicitContextFilesTests.test_implicit_files_with_compiled_importlib`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_input self.write_testfile() File <str>, line <n>, in write_testfile fp = open(TESTFN, <str>, en`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_builtin.py", line 1495, in test_input
    self.write_testfile()
  File "/work/suites/cpython/Lib/test/test_builtin.py", line 1352, in write_testfile
    fp = open(TESTFN, 'w', encoding="utf-8")
         ^^^^^^^^^^^^^^^^^^^`
example test: `test_builtin.BuiltinTest.test_input`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_invalid_start_byte self.assertCorrectUTF8Decoding(bytes([byte]), <str>, File <str>, line <n>, i`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_unicode.py", line 2058, in test_invalid_start_byte
    self.assertCorrectUTF8Decoding(bytes([byte]), '\ufffd',
  File "/work/suites/cpython/Lib/test/test_unicode.py", line 2039, in assertCorrectUTF8Decoding
    self.assert`
example test: `test_unicode.UnicodeTest.test_invalid_start_byte`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_invalid_utf8 check(byte) File <str>, line <n>, in check with open(fn, <str>) as fp: ^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_source_encoding.py", line 294, in test_invalid_utf8
    check(byte)
  File "/work/suites/cpython/Lib/test/test_source_encoding.py", line 273, in check
    with open(fn, 'wb') as fp:
         ^^^^^^^^^^^^^^
PermissionError:`
example test: `test_source_encoding.UTF8ValidatorTest.test_invalid_utf8`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_invisible_characters self._check_error(<str>, <str>) File <str>, line <n>, in _check_error self`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_syntax.py", line 2404, in test_invisible_characters
    self._check_error('print\x17("Hello")', "invalid non-printable character")
  File "/work/suites/cpython/Lib/test/test_syntax.py", line 2040, in _check_error
    self.`
example test: `test_syntax.SyntaxTestCase.test_invisible_characters`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_io with open(os_helper.TESTFN, <str>) as fp: ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ PermissionError: [Err`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_plistlib.py", line 448, in test_io
    with open(os_helper.TESTFN, 'wb') as fp:
         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^
PermissionError: [Errno 13] Permission denied: '@test_30_tmpæ'`
example test: `test_plistlib.TestPlistlib.test_io`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_len_only for f in (self.module.bisect_left, self.module.bisect_right, ^^^^^^^^^^^^^^^^^^^^^^^ A`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_bisect.py", line 364, in test_len_only
    for f in (self.module.bisect_left, self.module.bisect_right,
              ^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: 'NoneType' object has no attribute 'bisect_left'`
example test: `test_bisect.TestErrorHandlingC.test_len_only`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_longstrings uni.encode(enc, err) LookupError: unknown error handler name <str>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_codeccallbacks.py", line 300, in test_longstrings
    uni.encode(enc, err)
LookupError: unknown error handler name 'test.strict'`
example test: `test_codeccallbacks.CodecCallbackTest.test_longstrings`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_max with self.assertRaisesRegex( AssertionError: <str> does not match <str>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_builtin.py", line 1202, in test_max
    with self.assertRaisesRegex(
AssertionError: "max expected at least 1 argument, got 0" does not match "max() missing 1 required positional argument: 'a'"`
example test: `test_builtin.BuiltinTest.test_max`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_memory_error_in_subinterp rc, _, err = script_helper.assert_python_ok(<str>, code) ^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_exceptions.py", line 1826, in test_memory_error_in_subinterp
    rc, _, err = script_helper.assert_python_ok("-c", code)
                 ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/sup`
example test: `test_exceptions.ExceptionTests.test_memory_error_in_subinterp`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_min with self.assertRaisesRegex( AssertionError: <str> does not match <str>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_builtin.py", line 1265, in test_min
    with self.assertRaisesRegex(
AssertionError: "min expected at least 1 argument, got 0" does not match "min() missing 1 required positional argument: 'a'"`
example test: `test_builtin.BuiltinTest.test_min`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_nested try: NotImplementedError: try star`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_exception_variations.py", line 425, in test_nested
    try:
NotImplementedError: try star`
example test: `test_exception_variations.ExceptStarTestCases.test_nested`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_nested_else hit_inner_else = False NotImplementedError: try star`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_exception_variations.py", line 444, in test_nested_else
    hit_inner_else = False
NotImplementedError: try star`
example test: `test_exception_variations.ExceptStarTestCases.test_nested_else`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_nested_else_mixed1 self.assertTrue(hit_inner_else) AssertionError: False is not true`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_exception_variations.py", line 539, in test_nested_else_mixed1
    self.assertTrue(hit_inner_else)
AssertionError: False is not true`
example test: `test_exception_variations.ExceptStarTestCases.test_nested_else_mixed1`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_nested_else_mixed2 hit_inner_else = False NotImplementedError: try star`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_exception_variations.py", line 549, in test_nested_else_mixed2
    hit_inner_else = False
NotImplementedError: try star`
example test: `test_exception_variations.ExceptStarTestCases.test_nested_else_mixed2`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_nested_mixed1 self.assertTrue(hit_inner_except) AssertionError: False is not true`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_exception_variations.py", line 486, in test_nested_mixed1
    self.assertTrue(hit_inner_except)
AssertionError: False is not true`
example test: `test_exception_variations.ExceptStarTestCases.test_nested_mixed1`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_nested_mixed2 hit_inner_finally = False NotImplementedError: try star`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_exception_variations.py", line 495, in test_nested_mixed2
    hit_inner_finally = False
NotImplementedError: try star`
example test: `test_exception_variations.ExceptStarTestCases.test_nested_mixed2`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_open self.write_testfile() File <str>, line <n>, in write_testfile fp = open(TESTFN, <str>, enc`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_builtin.py", line 1363, in test_open
    self.write_testfile()
  File "/work/suites/cpython/Lib/test/test_builtin.py", line 1352, in write_testfile
    fp = open(TESTFN, 'w', encoding="utf-8")
         ^^^^^^^^^^^^^^^^^^^^`
example test: `test_builtin.BuiltinTest.test_open`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_open_default_encoding self.write_testfile() File <str>, line <n>, in write_testfile fp = open(T`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_builtin.py", line 1388, in test_open_default_encoding
    self.write_testfile()
  File "/work/suites/cpython/Lib/test/test_builtin.py", line 1352, in write_testfile
    fp = open(TESTFN, 'w', encoding="utf-8")
         ^^^`
example test: `test_builtin.BuiltinTest.test_open_default_encoding`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_possible_set_operations with self.assertWarnsRegex(FutureWarning, <str>) as w: AssertionError: `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_re.py", line 1216, in test_possible_set_operations
    with self.assertWarnsRegex(FutureWarning, 'Possible set difference') as w:
AssertionError: FutureWarning not triggered`
example test: `test_re.ReTests.test_possible_set_operations`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_printable_repr self.assertEqual(repr(<str>), <str>) # nonprintable ^^^^^^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_unicode.py", line 2463, in test_printable_repr
    self.assertEqual(repr('\U00014000'), "'\\U00014000'")     # nonprintable
    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: "'𔀀'" != "'\\U00014000'`
example test: `test_unicode.UnicodeTest.test_printable_repr`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_refcycle old_garbage = gc.garbage[:] ^^^^^^^^^^ AttributeError: module <str> has no attribute <`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_generators.py", line 72, in test_refcycle
    old_garbage = gc.garbage[:]
                  ^^^^^^^^^^
AttributeError: module 'gc' has no attribute 'garbage'`
example test: `test_generators.FinalizationTest.test_refcycle`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_reload_namespace_changed self.assertEqual(ns, expected) AssertionError: {<str>__doc__<str>__pac`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_importlib/test_api.py", line 335, in test_reload_namespace_changed
    self.assertEqual(ns, expected)
AssertionError: {'__n[14 chars], '__doc__': None, '__package__': 'spam', '__f[92 chars]None} != {'__n[14 chars], '__pack`
example test: `test_importlib.test_api.Frozen_ReloadTests.test_reload_namespace_changed`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_repeat_id_preserving self.assertEqual(id(a), id(a * <n>)) AssertionError: <n> != <n>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_bytes.py", line 1272, in test_repeat_id_preserving
    self.assertEqual(id(a), id(a * 1))
AssertionError: 1591 != 1599`
example test: `test_bytes.BytesTest.test_repeat_id_preserving`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_second_coding_line self.check_script_output(src, br<str>) File <str>, line <n>, in check_script`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_source_encoding.py", line 191, in test_second_coding_line
    self.check_script_output(src, br"'\xc3\u20ac'")
  File "/work/suites/cpython/Lib/test/test_source_encoding.py", line 336, in check_script_output
    res = scrip`
example test: `test_source_encoding.FileSourceEncodingTest.test_second_coding_line`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_second_non_utf8_coding_line self.check_script_output(src, br<str>) File <str>, line <n>, in che`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_source_encoding.py", line 222, in test_second_non_utf8_coding_line
    self.check_script_output(src, br"'\xc3\u20ac'")
  File "/work/suites/cpython/Lib/test/test_source_encoding.py", line 336, in check_script_output
    re`
example test: `test_source_encoding.FileSourceEncodingTest.test_second_non_utf8_coding_line`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_setdefault_atomic self.assertEqual(hashed1.eq_count + hashed2.eq_count, <n>) AssertionError: <n`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_dict.py", line 435, in test_setdefault_atomic
    self.assertEqual(hashed1.eq_count + hashed2.eq_count, 1)
AssertionError: 2 != 1`
example test: `test_dict.DictTest.test_setdefault_atomic`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_tab process = subprocess.run(args, input=input_, capture_output=True, text=True, check=True) ^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_json/test_tool.py", line 189, in test_tab
    process = subprocess.run(args, input=input_, capture_output=True, text=True, check=True)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`
example test: `test_json.test_tool.TestTool.test_tab`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_third_coding_line self.check_script_output(src, br<str>) File <str>, line <n>, in check_script_`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_source_encoding.py", line 199, in test_third_coding_line
    self.check_script_output(src, br"'\xe4'")
  File "/work/suites/cpython/Lib/test/test_source_encoding.py", line 336, in check_script_output
    res = script_helpe`
example test: `test_source_encoding.FileSourceEncodingTest.test_third_coding_line`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_tokenizer_fstring_warning_in_first_line with open(TESTFN, <str>) as fd: ^^^^^^^^^^^^^^^^^ Permi`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_source_encoding.py", line 166, in test_tokenizer_fstring_warning_in_first_line
    with open(TESTFN, "w") as fd:
         ^^^^^^^^^^^^^^^^^
PermissionError: [Errno 13] Permission denied: '@test_34_tmpæ'`
example test: `test_source_encoding.MiscSourceEncodingTest.test_tokenizer_fstring_warning_in_first_line`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_truncated_large_data check(self.build(b<str> + s.to_bytes(<n>, <str>))) File <str>, line <n>, i`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_plistlib.py", line 985, in test_truncated_large_data
    check(self.build(b'\x4f\x13' + s.to_bytes(8, 'big')))
  File "/work/suites/cpython/Lib/test/test_plistlib.py", line 972, in check
    with open(os_helper.TESTFN, 'wb`
example test: `test_plistlib.TestBinaryPlistlib.test_truncated_large_data`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_try_except hit_except = False NotImplementedError: try star`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_exception_variations.py", line 363, in test_try_except
    hit_except = False
NotImplementedError: try star`
example test: `test_exception_variations.ExceptStarTestCases.test_try_except`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_try_except_else hit_else = False NotImplementedError: try star`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_exception_variations.py", line 384, in test_try_except_else
    hit_else = False
NotImplementedError: try star`
example test: `test_exception_variations.ExceptStarTestCases.test_try_except_else`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_try_except_else_finally hit_finally = False NotImplementedError: try star`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_exception_variations.py", line 301, in test_try_except_else_finally
    hit_finally = False
NotImplementedError: try star`
example test: `test_exception_variations.ExceptStarTestCases.test_try_except_else_finally`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_try_except_else_finally_no_exception hit_finally = False NotImplementedError: try star`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_exception_variations.py", line 319, in test_try_except_else_finally_no_exception
    hit_finally = False
NotImplementedError: try star`
example test: `test_exception_variations.ExceptStarTestCases.test_try_except_else_finally_no_exception`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_try_except_else_no_exception hit_else = False NotImplementedError: try star`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_exception_variations.py", line 398, in test_try_except_else_no_exception
    hit_else = False
NotImplementedError: try star`
example test: `test_exception_variations.ExceptStarTestCases.test_try_except_else_no_exception`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_try_except_finally hit_finally = False NotImplementedError: try star`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_exception_variations.py", line 336, in test_try_except_finally
    hit_finally = False
NotImplementedError: try star`
example test: `test_exception_variations.ExceptStarTestCases.test_try_except_finally`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_try_except_finally_no_exception hit_finally = False NotImplementedError: try star`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_exception_variations.py", line 350, in test_try_except_finally_no_exception
    hit_finally = False
NotImplementedError: try star`
example test: `test_exception_variations.ExceptStarTestCases.test_try_except_finally_no_exception`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_try_except_no_exception hit_except = False NotImplementedError: try star`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_exception_variations.py", line 373, in test_try_except_no_exception
    hit_except = False
NotImplementedError: try star`
example test: `test_exception_variations.ExceptStarTestCases.test_try_except_no_exception`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_unexpected_end_of_data self.assertCorrectUTF8Decoding(bytes.fromhex(seq), <str>, File <str>, li`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_unicode.py", line 2084, in test_unexpected_end_of_data
    self.assertCorrectUTF8Decoding(bytes.fromhex(seq), '\ufffd',
  File "/work/suites/cpython/Lib/test/test_unicode.py", line 2039, in assertCorrectUTF8Decoding
    se`
example test: `test_unicode.UnicodeTest.test_unexpected_end_of_data`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_utf8_bom self.check_script_output(src, br<str>) File <str>, line <n>, in check_script_output re`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_source_encoding.py", line 226, in test_utf8_bom
    self.check_script_output(src, br"'\xe4'")
  File "/work/suites/cpython/Lib/test/test_source_encoding.py", line 336, in check_script_output
    res = script_helper.assert_`
example test: `test_source_encoding.FileSourceEncodingTest.test_utf8_bom`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_utf8_bom_and_utf8_coding_line self.check_script_output(src, br<str>) File <str>, line <n>, in c`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_source_encoding.py", line 231, in test_utf8_bom_and_utf8_coding_line
    self.check_script_output(src, br"'\xe4'")
  File "/work/suites/cpython/Lib/test/test_source_encoding.py", line 336, in check_script_output
    res = `
example test: `test_source_encoding.FileSourceEncodingTest.test_utf8_bom_and_utf8_coding_line`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_vsBuiltinSort f = self.module.insort_left ^^^^^^^^^^^^^^^^^^^^^^^ AttributeError: <str> object `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_bisect.py", line 309, in test_vsBuiltinSort
    f = self.module.insort_left
        ^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: 'NoneType' object has no attribute 'insort_left'`
example test: `test_bisect.TestInsortC.test_vsBuiltinSort`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_warning_notimplemented self.assertWarns(DeprecationWarning, bool, NotImplemented) AssertionErro`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_builtin.py", line 2111, in test_warning_notimplemented
    self.assertWarns(DeprecationWarning, bool, NotImplemented)
AssertionError: DeprecationWarning not triggered by bool`
example test: `test_builtin.BuiltinTest.test_warning_notimplemented`

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
PermissionError: [Errno 13] Permission denied: '@test_35_tmpæ'`
example test: `test_exceptions.ExceptionTests.testRaising`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in testTypeAttributeAccessErrorMessages with self.assertRaisesRegex(AttributeError, error_msg): Asserti`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_class.py", line 683, in testTypeAttributeAccessErrorMessages
    with self.assertRaisesRegex(AttributeError, error_msg):
AssertionError: "type object 'A' has no attribute 'x'" does not match "'A' object has no attribute 'x`
example test: `test_class.ClassTests.testTypeAttributeAccessErrorMessages`
