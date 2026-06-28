# Impact-ordered failures

## By root-cause signature

### 30 × `Traceback (most recent call last): File <str>, line <n>, in setUp os.mkdir(os_helper.TESTFN) PermissionError: [Errno <n>] Permission denied: <str>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_unicode_file_functions.py", line 67, in setUp
    os.mkdir(os_helper.TESTFN)
PermissionError: [Errno 13] Permission denied: '@test_39_tmpæ'`
example test: `test_unicode_file_functions.UnicodeFileTests.test_directory`

### 19 × `Traceback (most recent call last): File <str>, line <n>, in setUp with open(os_helper.TESTFN, <str>, encoding=<str>) as f: ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_configparser.py", line 1098, in setUp
    with open(os_helper.TESTFN, 'w', encoding="utf-8") as f:
         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
PermissionError: [Errno 13] Permission denied: '@test_132_tmpæ'`
example test: `test_configparser.MultilineValuesTestCase.test_basic`

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
PermissionError: [Errno 13] Permission denied: '@test_41_tmpæ'`
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
PermissionError: [Errno 13] Permission denied: '@test_41_tmpæ'`
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
PermissionError: [Errno 13] Permission denied: '@test_41_tmpæ'`
example test: `test_array.ByteTest.test_tofromfile`

### 13 × `Traceback (most recent call last): File <str>, line <n>, in test_weakref p = weakref.proxy(s) ^^^^^^^^^^^^^^^^ TypeError: cannot create weak reference to <str> `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_array.py", line 1098, in test_weakref
    p = weakref.proxy(s)
        ^^^^^^^^^^^^^^^^
TypeError: cannot create weak reference to 'array.array' object`
example test: `test_array.ByteTest.test_weakref`

### 12 × `Traceback (most recent call last): File <str>, line <n>, in setUp self.mktemp(<str>, <str>) File <str>, line <n>, in mktemp os.makedirs(base) File <str>, line <`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_glob.py", line 29, in setUp
    self.mktemp('a', 'D')
  File "/work/suites/cpython/Lib/test/test_glob.py", line 24, in mktemp
    os.makedirs(base)
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/os.py",`
example test: `test_glob.GlobTests.test_escape`

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

### 7 × `Traceback (most recent call last): File <str>, line <n>, in test_incremental_surrogatepass data = <str>.encode(self.encoding, <str>) ^^^^^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_codecs.py", line 439, in test_incremental_surrogatepass
    data = '\uD901'.encode(self.encoding, 'surrogatepass')
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
UnicodeEncodeError: 'raw_unicode_escape' codec c`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_codecs.py", line 439, in test_incremental_surrogatepass
    data = '\uD901'.encode(self.encoding, 'surrogatepass')
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
UnicodeEncodeError: 'utf_16_be' codec can't enco`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_codecs.py", line 439, in test_incremental_surrogatepass
    data = '\uD901'.encode(self.encoding, 'surrogatepass')
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
UnicodeEncodeError: 'utf_16_le' codec can't enco`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_codecs.py", line 439, in test_incremental_surrogatepass
    data = '\uD901'.encode(self.encoding, 'surrogatepass')
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
UnicodeEncodeError: 'utf_16' codec can't encode `
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_codecs.py", line 439, in test_incremental_surrogatepass
    data = '\uD901'.encode(self.encoding, 'surrogatepass')
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
UnicodeEncodeError: 'utf_32_be' codec can't enco`
example test: `test_codecs.RawUnicodeEscapeTest.test_incremental_surrogatepass`

### 6 × `Traceback (most recent call last): File <str>, line <n>, in test_attribute_name_interning self.assertIs(x_key, y_key) AssertionError: <str> is not <str>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/pickletester.py", line 3161, in test_attribute_name_interning
    self.assertIs(x_key, y_key)
AssertionError: 'bar' is not 'bar'`
example test: `test_pickle.CDumpPickle_LoadPickle.test_attribute_name_interning`

### 6 × `Traceback (most recent call last): File <str>, line <n>, in test_lone_surrogates self.assertEqual(<str>.encode(self.encoding, <str>), AssertionError: b<str> != `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_codecs.py", line 395, in test_lone_surrogates
    self.assertEqual("[\uDC80]".encode(self.encoding, "namereplace"),
AssertionError: b'\x00[\xff\xfd\x00]' != b'\x00[\x00\\\x00u\x00d\x00c\x008\x000\x00]'`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_codecs.py", line 395, in test_lone_surrogates
    self.assertEqual("[\uDC80]".encode(self.encoding, "namereplace"),
AssertionError: b'[\x00\xfd\xff]\x00' != b'[\x00\\\x00u\x00d\x00c\x008\x000\x00]\x00'`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_codecs.py", line 395, in test_lone_surrogates
    self.assertEqual("[\uDC80]".encode(self.encoding, "namereplace"),
AssertionError: b'\xff\xfe[\x00\xfd\xff]\x00' != b'\xff\xfe[\x00\\\x00u\x00d\x00c\x008\x000\x00]\x00'`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_codecs.py", line 395, in test_lone_surrogates
    self.assertEqual("[\uDC80]".encode(self.encoding, "namereplace"),
AssertionError: b'\x0[15 chars]x00\xff\xfd\x00\x00\x00]' != b'\x0[15 chars]x00\x00\\\x00\x00\x00u\x00\x00\`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_codecs.py", line 395, in test_lone_surrogates
    self.assertEqual("[\uDC80]".encode(self.encoding, "namereplace"),
AssertionError: b'[\x00\x00\x00\xfd\xff\x00\x00]\x00\x00\x00' != b'[\x00\x00\x00\\\x00\x00\x00u\x00\x00\x0`
example test: `test_codecs.UTF16BETest.test_lone_surrogates`

### 5 × `PermissionError(<n>, <str>)`

distinct messages:
- `PermissionError(13, 'Permission denied')`
example test: `test_http_cookiejar`

### 5 × `Traceback (most recent call last): File <str>, line <n>, in setUp os.mkdir(self.pkgname) PermissionError: [Errno <n>] Permission denied: <str>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_reprlib.py", line 639, in setUp
    os.mkdir(self.pkgname)
PermissionError: [Errno 13] Permission denied: 'areallylongpackageandmodulenametotestreprtruncation'`
example test: `test_reprlib.LongReprTest.test_class`

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

### 4 × `Traceback (most recent call last): File <str>, line <n>, in runTest raise self.failureException(self.format_failure(new.getvalue())) AssertionError: Failed doct`

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
  File "/work/suites/cpython/Lib/doctest.py", line 2256, in runTest
    raise self.failureException(self.format_failure(new.getvalue()))
AssertionError: Failed doctest test for test.test_unpack_ex.__test__.doctests
  File "/work/suites/cpython/Lib/test/test_unpack_`
- `Traceback (most recent call last):
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/doctest.py", line 2257, in runTest
    raise self.failureException(self.format_failure(new.getvalue()))
AssertionError: Failed doctest test for test.test_genexps.__test__.doctests
  File "/work/suit`
example test: `test_generators.__test__.coroutine`

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

### 4 × `Traceback (most recent call last): File <str>, line <n>, in testRemoveResult os.kill(pid, signal.SIGINT) OSError: [Errno <n>] Invalid argument: <str>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_unittest/test_break.py", line 207, in testRemoveResult
    os.kill(pid, signal.SIGINT)
OSError: [Errno 22] Invalid argument: "Feature not supported on 'java' POSIX backend: Sending arbitrary signals to child processes. Can`
example test: `test_unittest.test_break.TestBreak.testRemoveResult`

### 3 × `AttributeError(<str>)`

distinct messages:
- `AttributeError("module '_asyncio' has no attribute 'Future'")`
example test: `test_types`

### 3 × `Traceback (most recent call last): File <str>, line <n>, in decorator return func(*args) ^^^^^^^^^^^ File <str>, line <n>, in test_unpickle_module_race os.mkdir`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/support/threading_helper.py", line 66, in decorator
    return func(*args)
           ^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/pickletester.py", line 1581, in test_unpickle_module_race
    os.mkdir(TESTFN)
PermissionEr`
example test: `test_pickle.CUnpicklerTests.test_unpickle_module_race`

### 3 × `Traceback (most recent call last): File <str>, line <n>, in setUp with open(fname, <str>, encoding=<str>) as source: ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Permissi`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_linecache.py", line 323, in setUp
    with open(fname, 'w', encoding='utf-8') as source:
         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
PermissionError: [Errno 13] Permission denied: '@test_40_tmpæ.1'`
example test: `test_linecache.LineCacheInvalidationTests.test_checkcache_for_deleted_file`

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

### 3 × `Traceback (most recent call last): File <str>, line <n>, in test_randomized_hash run1 = self.get_hash(self.repr_, seed=<str>) ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_hash.py", line 193, in test_randomized_hash
    run1 = self.get_hash(self.repr_, seed='random')
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_hash.py", line 185, in get_hash`
example test: `test_hash.DatetimeDateTests.test_randomized_hash`

### 3 × `Traceback (most recent call last): File <str>, line <n>, in testInstallHandler os.kill(pid, signal.SIGINT) OSError: [Errno <n>] Invalid argument: <str>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_unittest/test_break.py", line 59, in testInstallHandler
    os.kill(pid, signal.SIGINT)
OSError: [Errno 22] Invalid argument: "Feature not supported on 'java' POSIX backend: Sending arbitrary signals to child processes. Ca`
example test: `test_unittest.test_break.TestBreak.testInstallHandler`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_capitalize_nonascii self.checkequal(<str>, File <str>, line <n>, in checkequal self.assertEqual`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/string_tests.py", line 1135, in test_capitalize_nonascii
    self.checkequal('\u019b\u1d00\u1d86\u0221\u1fb7',
  File "/work/suites/cpython/Lib/test/test_userstring.py", line 25, in checkequal
    self.assertEqual(
AssertionErr`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/string_tests.py", line 1135, in test_capitalize_nonascii
    self.checkequal('\u019b\u1d00\u1d86\u0221\u1fb7',
  File "/work/suites/cpython/Lib/test/string_tests.py", line 66, in checkequal
    self.assertEqual(
AssertionError:`
example test: `test_userstring.UserStringTest.test_capitalize_nonascii`

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

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_decode_errors self.assertEqual(decode(data, <str>), (<str>, len(data))) AssertionError: Tuples `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_codecs.py", line 2633, in test_decode_errors
    self.assertEqual(decode(data, "ignore"), ("[]", len(data)))
AssertionError: Tuples differ: ('[\\', 6) != ('[]', 6)

First differing element 0:
'[\\'
'[]'

- ('[\\', 6)
?    `
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_codecs.py", line 2541, in test_decode_errors
    self.assertEqual(decode(data, "ignore"), ("[]", len(data)))
AssertionError: Tuples differ: ('[x', 6) != ('[]', 6)

First differing element 0:
'[x'
'[]'

- ('[x', 6)
?    ^

`
example test: `test_codecs.RawUnicodeEscapeTest.test_decode_errors`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_decoder_state self.check_state_handling_decode(self.encoding, File <str>, line <n>, in check_st`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_codecs.py", line 708, in test_decoder_state
    self.check_state_handling_decode(self.encoding,
  File "/work/suites/cpython/Lib/test/test_codecs.py", line 99, in check_state_handling_decode
    self.assertEqual(u, part1+p`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_codecs.py", line 534, in test_decoder_state
    self.check_state_handling_decode(self.encoding,
  File "/work/suites/cpython/Lib/test/test_codecs.py", line 98, in check_state_handling_decode
    part2 = d.decode(s[i:], Tru`
example test: `test_codecs.UTF16Test.test_decoder_state`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_delitem self.check_version_changed(d, d.__delitem__, <str>) File <str>, line <n>, in check_vers`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_dict_version.py", line 134, in test_delitem
    self.check_version_changed(d, d.__delitem__, 'key')
  File "/work/suites/cpython/Lib/test/test_dict_version.py", line 26, in check_version_changed
    self.check_version_uniq`
example test: `test_dict_version.DictSubtypeVersionTests.test_delitem`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_dump_closed_file f = open(TESTFN, <str>) ^^^^^^^^^^^^^^^^^^ PermissionError: [Errno <n>] Permis`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/pickletester.py", line 4110, in test_dump_closed_file
    f = open(TESTFN, "wb")
        ^^^^^^^^^^^^^^^^^^
PermissionError: [Errno 13] Permission denied: '@test_136_tmpæ'`
example test: `test_pickle.CPickleTests.test_dump_closed_file`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_dump_text_file f = open(TESTFN, <str>) ^^^^^^^^^^^^^^^^^ PermissionError: [Errno <n>] Permissio`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/pickletester.py", line 4148, in test_dump_text_file
    f = open(TESTFN, "w")
        ^^^^^^^^^^^^^^^^^
PermissionError: [Errno 13] Permission denied: '@test_136_tmpæ'`
example test: `test_pickle.CPickleTests.test_dump_text_file`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_errors self.assertEqual(raw.decode(<str>, <str>), expected) AssertionError: <str> != <str> - � `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_codecs.py", line 819, in test_errors
    self.assertEqual(raw.decode('utf-16be', 'replace'), expected)
AssertionError: '�' != '�A'
- �
+ �A
?  +`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_codecs.py", line 775, in test_errors
    self.assertEqual(raw.decode('utf-16le', 'replace'), expected)
AssertionError: '�' != '�A'
- �
+ �A
?  +`
example test: `test_codecs.UTF16BETest.test_errors`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_exit_exception_chaining self.assertIsInstance(exc.__context__, KeyError) AssertionError: ZeroDi`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_contextlib.py", line 935, in test_exit_exception_chaining
    self.assertIsInstance(exc.__context__, KeyError)
AssertionError: ZeroDivisionError('division by zero') is not an instance of <class 'KeyError'>`
example test: `test_contextlib.TestExitStack.test_exit_exception_chaining`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_exit_exception_with_correct_context self.assertIs(exc.__context__.__context__, exc2) AssertionE`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_contextlib.py", line 1033, in test_exit_exception_with_correct_context
    self.assertIs(exc.__context__.__context__, exc2)
AssertionError: Exception(1) is not Exception(2)`
example test: `test_contextlib.TestExitStack.test_exit_exception_with_correct_context`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_find_etc_raise_correct_error_messages self.assertRaisesRegex(TypeError, r<str>, s.find, Asserti`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/string_tests.py", line 1508, in test_find_etc_raise_correct_error_messages
    self.assertRaisesRegex(TypeError, r'^find\(', s.find,
AssertionError: "^find\(" does not match "str.find() takes from 2 to 4 positional arguments bu`
example test: `test_userstring.UserStringTest.test_find_etc_raise_correct_error_messages`

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

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_load_closed_file f = open(TESTFN, <str>) ^^^^^^^^^^^^^^^^^^ PermissionError: [Errno <n>] Permis`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/pickletester.py", line 4118, in test_load_closed_file
    f = open(TESTFN, "wb")
        ^^^^^^^^^^^^^^^^^^
PermissionError: [Errno 13] Permission denied: '@test_136_tmpæ'`
example test: `test_pickle.CPickleTests.test_load_closed_file`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_load_global self.assertEqual(self.loads(b<str>), <n>) ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/pickletester.py", line 1188, in test_load_global
    self.assertEqual(self.loads(b'\x80\x04cm\xc3\xb6dule\ngl\xc3\xb6bal\n.'), 42)
                     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suite`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/pickletester.py", line 1188, in test_load_global
    self.assertEqual(self.loads(b'\x80\x04cm\xc3\xb6dule\ngl\xc3\xb6bal\n.'), 42)
                     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suite`
example test: `test_pickle.CUnpicklerTests.test_load_global`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_load_stack_global self.assertEqual(self.loads(b<str>), <n>) ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/pickletester.py", line 1204, in test_load_stack_global
    self.assertEqual(self.loads(b'\x80\x04\x8c\x07m\xc3\xb6dule\x8c\x07gl\xc3\xb6bal\x93.'), 42)
                     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/pickletester.py", line 1204, in test_load_stack_global
    self.assertEqual(self.loads(b'\x80\x04\x8c\x07m\xc3\xb6dule\x8c\x07gl\xc3\xb6bal\x93.'), 42)
                     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`
example test: `test_pickle.CUnpicklerTests.test_load_stack_global`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_lone_surrogates super().test_lone_surrogates() File <str>, line <n>, in test_lone_surrogates se`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_codecs.py", line 873, in test_lone_surrogates
    super().test_lone_surrogates()
  File "/work/suites/cpython/Lib/test/test_codecs.py", line 395, in test_lone_surrogates
    self.assertEqual("[\uDC80]".encode(self.encoding`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_codecs.py", line 873, in test_lone_surrogates
    super().test_lone_surrogates()
  File "/work/suites/cpython/Lib/test/test_codecs.py", line 395, in test_lone_surrogates
    self.assertEqual("[\uDC80]".encode(self.encoding`
example test: `test_codecs.UTF8SigTest.test_lone_surrogates`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_mod with self.assertRaisesRegex(TypeError, msg): AssertionError: <str> does not match <str>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_bytes.py", line 769, in test_mod
    with self.assertRaisesRegex(TypeError, msg):
AssertionError: "%d format: a real number is required, not complex" does not match "%i format: a real number is required, not complex"`
example test: `test_bytes.ByteArrayTest.test_mod`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_only_one_bom self.assertTrue(d == self.spamle or d == self.spambe) AssertionError: False is not`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_codecs.py", line 659, in test_only_one_bom
    self.assertTrue(d == self.spamle or d == self.spambe)
AssertionError: False is not true`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_codecs.py", line 475, in test_only_one_bom
    self.assertTrue(d == self.spamle or d == self.spambe)
AssertionError: False is not true`
example test: `test_codecs.UTF16Test.test_only_one_bom`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_partial self.check_partial( File <str>, line <n>, in check_partial self.assertEqual(result, par`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_codecs.py", line 2641, in test_partial
    self.check_partial(
  File "/work/suites/cpython/Lib/test/test_codecs.py", line 124, in check_partial
    self.assertEqual(result, partialresult)
AssertionError: '\x00\t\n\rÿ' != `
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_codecs.py", line 951, in test_partial
    self.check_partial(
  File "/work/suites/cpython/Lib/test/test_codecs.py", line 124, in check_partial
    self.assertEqual(result, partialresult)
AssertionError: 'a-' != 'a+'
- a-
`
example test: `test_codecs.RawUnicodeEscapeTest.test_partial`

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

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_raise_handle_all_raise_one_named try: NotImplementedError: try star`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_except_star.py", line 616, in test_raise_handle_all_raise_one_named
    try:
NotImplementedError: try star`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_except_star.py", line 769, in test_raise_handle_all_raise_one_named
    try:
NotImplementedError: try star`
example test: `test_except_star.TestExceptStarRaise.test_raise_handle_all_raise_one_named`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_raise_handle_all_raise_one_unnamed try: NotImplementedError: try star`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_except_star.py", line 635, in test_raise_handle_all_raise_one_unnamed
    try:
NotImplementedError: try star`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_except_star.py", line 793, in test_raise_handle_all_raise_one_unnamed
    try:
NotImplementedError: try star`
example test: `test_except_star.TestExceptStarRaise.test_raise_handle_all_raise_one_unnamed`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_raise_handle_all_raise_two_named try: NotImplementedError: try star`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_except_star.py", line 654, in test_raise_handle_all_raise_two_named
    try:
NotImplementedError: try star`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_except_star.py", line 818, in test_raise_handle_all_raise_two_named
    try:
NotImplementedError: try star`
example test: `test_except_star.TestExceptStarRaise.test_raise_handle_all_raise_two_named`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_raise_handle_all_raise_two_unnamed try: NotImplementedError: try star`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_except_star.py", line 681, in test_raise_handle_all_raise_two_unnamed
    try:
NotImplementedError: try star`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_except_star.py", line 853, in test_raise_handle_all_raise_two_unnamed
    try:
NotImplementedError: try star`
example test: `test_except_star.TestExceptStarRaise.test_raise_handle_all_raise_two_unnamed`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_raise_named try: NotImplementedError: try star`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_except_star.py", line 572, in test_raise_named
    try:
NotImplementedError: try star`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_except_star.py", line 710, in test_raise_named
    try:
NotImplementedError: try star`
example test: `test_except_star.TestExceptStarRaise.test_raise_named`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_raise_unnamed try: NotImplementedError: try star`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_except_star.py", line 594, in test_raise_unnamed
    try:
NotImplementedError: try star`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_except_star.py", line 739, in test_raise_unnamed
    try:
NotImplementedError: try star`
example test: `test_except_star.TestExceptStarRaise.test_raise_unnamed`

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

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_sample_with_counts sample(<str>, k=<n>, counts=[<n>, <n>, <n>]), ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_random.py", line 236, in test_sample_with_counts
    sample('abc', k=0, counts=[0, 0, 0]),
    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/random.py", line 424, i`
example test: `test_random.MersenneTwister_TestBasicOps.test_sample_with_counts`

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

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_surrogatepass_handler self.assertEqual(<str>.encode(self.encoding, <str>), AssertionError: b<st`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_codecs.py", line 889, in test_surrogatepass_handler
    self.assertEqual("[\uD800\uDC80]".encode(self.encoding, "surrogatepass"),
AssertionError: b'\xef\xbb\xbf[\xf0\x90\x82\x80]' != b'\xef\xbb\xbf[\xed\xa0\x80\xed\xb2\x80`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_codecs.py", line 889, in test_surrogatepass_handler
    self.assertEqual("[\uD800\uDC80]".encode(self.encoding, "surrogatepass"),
AssertionError: b'[\xf0\x90\x82\x80]' != b'[\xed\xa0\x80\xed\xb2\x80]'`
example test: `test_codecs.UTF8SigTest.test_surrogatepass_handler`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_update self.check_version_changed(d, d.update, key=<str>) File <str>, line <n>, in check_versio`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_dict_version.py", line 167, in test_update
    self.check_version_changed(d, d.update, key='new value')
  File "/work/suites/cpython/Lib/test/test_dict_version.py", line 26, in check_version_changed
    self.check_version_`
example test: `test_dict_version.DictSubtypeVersionTests.test_update`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in wrapper return ctx.run(func, *args, **kwargs) ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ File <str>, line <n>, i`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_context.py", line 23, in wrapper
    return ctx.run(func, *args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_context.py", line 313, in test_context_getset_4
    with self.`
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_context.py", line 23, in wrapper
    return ctx.run(func, *args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_context.py", line 177, in test_context_run_4
    self.assertEq`
example test: `test_context.ContextTest.test_context_getset_4`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in wrapper return func(*args, **kwargs) ^^^^^^^^^^^^^^^^^^^^^ File <str>, line <n>, in test_bad_getattr`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/support/__init__.py", line 1211, in wrapper
    return func(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/pickletester.py", line 2044, in test_bad_getattr
    s = self.dumps(x, proto)
 `
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/support/__init__.py", line 1211, in wrapper
    return func(*args, **kwargs)
           ^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/pickletester.py", line 2044, in test_bad_getattr
    s = self.dumps(x, proto)
 `
example test: `test_pickle.CPicklingErrorTests.test_bad_getattr`

### 1 × `CPython driver timed out after 60000ms while test_htmlparser.HTMLParserTestCase.test_eof_no_quadratic_complexity`

distinct messages:
- `CPython driver timed out after 60000ms while test_htmlparser.HTMLParserTestCase.test_eof_no_quadratic_complexity`
example test: `test_htmlparser.HTMLParserTestCase.test_eof_no_quadratic_complexity`

### 1 × `ImportError: Failed to import test module: test.test_email.test_email Traceback (most recent call last): File <str>, line <n>, in _find_test_path module = self.`

distinct messages:
- `ImportError: Failed to import test module: test.test_email.test_email
Traceback (most recent call last):
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/unittest/loader.py", line 396, in _find_test_path
    module = self._get_module_from_name(name)
             ^^^^^^^^^^^^^^^^^^^`
example test: `unittest.loader._FailedTest.test.test_email.test_email`

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

### 1 × `ImportError: Failed to import test module: test.test_inspect.test_inspect Traceback (most recent call last): File <str>, line <n>, in _find_test_path module = s`

distinct messages:
- `ImportError: Failed to import test module: test.test_inspect.test_inspect
Traceback (most recent call last):
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/unittest/loader.py", line 396, in _find_test_path
    module = self._get_module_from_name(name)
             ^^^^^^^^^^^^^^^`
example test: `unittest.loader._FailedTest.test.test_inspect.test_inspect`

### 1 × `ImportError: Failed to import test module: test.test_pydoc.test_pydoc Traceback (most recent call last): File <str>, line <n>, in _find_test_path module = self.`

distinct messages:
- `ImportError: Failed to import test module: test.test_pydoc.test_pydoc
Traceback (most recent call last):
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/unittest/loader.py", line 396, in _find_test_path
    module = self._get_module_from_name(name)
             ^^^^^^^^^^^^^^^^^^^`
example test: `unittest.loader._FailedTest.test.test_pydoc.test_pydoc`

### 1 × `ImportError: Failed to import test module: test.test_unittest.test_async_case Traceback (most recent call last): File <str>, line <n>, in _find_test_path module`

distinct messages:
- `ImportError: Failed to import test module: test.test_unittest.test_async_case
Traceback (most recent call last):
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/unittest/loader.py", line 396, in _find_test_path
    module = self._get_module_from_name(name)
             ^^^^^^^^^^^`
example test: `unittest.loader._FailedTest.test.test_unittest.test_async_case`

### 1 × `ImportError: Failed to import test module: test.test_unittest.test_discovery Traceback (most recent call last): File <str>, line <n>, in _find_test_path module `

distinct messages:
- `ImportError: Failed to import test module: test.test_unittest.test_discovery
Traceback (most recent call last):
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/unittest/loader.py", line 396, in _find_test_path
    module = self._get_module_from_name(name)
             ^^^^^^^^^^^^`
example test: `unittest.loader._FailedTest.test.test_unittest.test_discovery`

### 1 × `ImportError: Failed to import test module: test.test_unittest.test_program Traceback (most recent call last): File <str>, line <n>, in _find_test_path module = `

distinct messages:
- `ImportError: Failed to import test module: test.test_unittest.test_program
Traceback (most recent call last):
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/unittest/loader.py", line 396, in _find_test_path
    module = self._get_module_from_name(name)
             ^^^^^^^^^^^^^^`
example test: `unittest.loader._FailedTest.test.test_unittest.test_program`

### 1 × `ImportError: Failed to import test module: test.test_unittest.test_result Traceback (most recent call last): File <str>, line <n>, in _find_test_path module = s`

distinct messages:
- `ImportError: Failed to import test module: test.test_unittest.test_result
Traceback (most recent call last):
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/unittest/loader.py", line 396, in _find_test_path
    module = self._get_module_from_name(name)
             ^^^^^^^^^^^^^^^`
example test: `unittest.loader._FailedTest.test.test_unittest.test_result`

### 1 × `ImportError: Failed to import test module: test.test_unittest.testmock.testasync Traceback (most recent call last): File <str>, line <n>, in _find_test_path mod`

distinct messages:
- `ImportError: Failed to import test module: test.test_unittest.testmock.testasync
Traceback (most recent call last):
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/unittest/loader.py", line 396, in _find_test_path
    module = self._get_module_from_name(name)
             ^^^^^^^^`
example test: `unittest.loader._FailedTest.test.test_unittest.testmock.testasync`

### 1 × `ImportError: Failed to import test module: test.test_unittest.testmock.testcallable Traceback (most recent call last): File <str>, line <n>, in _find_test_path `

distinct messages:
- `ImportError: Failed to import test module: test.test_unittest.testmock.testcallable
Traceback (most recent call last):
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/unittest/loader.py", line 396, in _find_test_path
    module = self._get_module_from_name(name)
             ^^^^^`
example test: `unittest.loader._FailedTest.test.test_unittest.testmock.testcallable`

### 1 × `ImportError: Failed to import test module: test.test_unittest.testmock.testhelpers Traceback (most recent call last): File <str>, line <n>, in _find_test_path m`

distinct messages:
- `ImportError: Failed to import test module: test.test_unittest.testmock.testhelpers
Traceback (most recent call last):
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/unittest/loader.py", line 396, in _find_test_path
    module = self._get_module_from_name(name)
             ^^^^^^`
example test: `unittest.loader._FailedTest.test.test_unittest.testmock.testhelpers`

### 1 × `ImportError: Failed to import test module: test.test_unittest.testmock.testmagicmethods Traceback (most recent call last): File <str>, line <n>, in _find_test_p`

distinct messages:
- `ImportError: Failed to import test module: test.test_unittest.testmock.testmagicmethods
Traceback (most recent call last):
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/unittest/loader.py", line 396, in _find_test_path
    module = self._get_module_from_name(name)
             ^`
example test: `unittest.loader._FailedTest.test.test_unittest.testmock.testmagicmethods`

### 1 × `ImportError: Failed to import test module: test.test_unittest.testmock.testmock Traceback (most recent call last): File <str>, line <n>, in _find_test_path modu`

distinct messages:
- `ImportError: Failed to import test module: test.test_unittest.testmock.testmock
Traceback (most recent call last):
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/unittest/loader.py", line 396, in _find_test_path
    module = self._get_module_from_name(name)
             ^^^^^^^^^`
example test: `unittest.loader._FailedTest.test.test_unittest.testmock.testmock`

### 1 × `ImportError: Failed to import test module: test.test_unittest.testmock.testpatch Traceback (most recent call last): File <str>, line <n>, in _find_test_path mod`

distinct messages:
- `ImportError: Failed to import test module: test.test_unittest.testmock.testpatch
Traceback (most recent call last):
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/unittest/loader.py", line 396, in _find_test_path
    module = self._get_module_from_name(name)
             ^^^^^^^^`
example test: `unittest.loader._FailedTest.test.test_unittest.testmock.testpatch`

### 1 × `ImportError: Failed to import test module: test.test_unittest.testmock.testsealable Traceback (most recent call last): File <str>, line <n>, in _find_test_path `

distinct messages:
- `ImportError: Failed to import test module: test.test_unittest.testmock.testsealable
Traceback (most recent call last):
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/unittest/loader.py", line 396, in _find_test_path
    module = self._get_module_from_name(name)
             ^^^^^`
example test: `unittest.loader._FailedTest.test.test_unittest.testmock.testsealable`

### 1 × `ImportError: Failed to import test module: test.test_unittest.testmock.testsentinel Traceback (most recent call last): File <str>, line <n>, in _find_test_path `

distinct messages:
- `ImportError: Failed to import test module: test.test_unittest.testmock.testsentinel
Traceback (most recent call last):
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/unittest/loader.py", line 396, in _find_test_path
    module = self._get_module_from_name(name)
             ^^^^^`
example test: `unittest.loader._FailedTest.test.test_unittest.testmock.testsentinel`

### 1 × `ImportError: Failed to import test module: test.test_unittest.testmock.testwith Traceback (most recent call last): File <str>, line <n>, in _find_test_path modu`

distinct messages:
- `ImportError: Failed to import test module: test.test_unittest.testmock.testwith
Traceback (most recent call last):
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/unittest/loader.py", line 396, in _find_test_path
    module = self._get_module_from_name(name)
             ^^^^^^^^^`
example test: `unittest.loader._FailedTest.test.test_unittest.testmock.testwith`

### 1 × `ImportError: Failed to import test module: test.test_zipfile.test_core Traceback (most recent call last): File <str>, line <n>, in _find_test_path module = self`

distinct messages:
- `ImportError: Failed to import test module: test.test_zipfile.test_core
Traceback (most recent call last):
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/unittest/loader.py", line 396, in _find_test_path
    module = self._get_module_from_name(name)
             ^^^^^^^^^^^^^^^^^^`
example test: `unittest.loader._FailedTest.test.test_zipfile.test_core`

### 1 × `ModuleNotFoundError(<str>)`

distinct messages:
- `ModuleNotFoundError("No module named '_symtable'")`
example test: `test_symtable`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_5 self.assertEqual(fixdir(dir(t5)), AssertionError: Lists differ: [<str>, <str>, <str>, <str>t5`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_pkg.py", line 201, in test_5
    self.assertEqual(fixdir(dir(t5)),
AssertionError: Lists differ: ['__doc__', '__file__', '__loader__', '__name[61 chars]'t5'] != ['__cached__', '__doc__', '__file__', '__load[75 chars]'t5']
`
example test: `test_pkg.TestPkg.test_5`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_6 self.assertEqual(fixdir(dir(t6)), AssertionError: Lists differ: [<str>, <str>, <str>, <str>, `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_pkg.py", line 224, in test_6
    self.assertEqual(fixdir(dir(t6)),
AssertionError: Lists differ: ['__all__', '__doc__', '__file__', '__loader__', '__name[38 chars]c__'] != ['__all__', '__cached__', '__doc__', '__file__', '`
example test: `test_pkg.TestPkg.test_6`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_7 self.assertEqual(fixdir(dir(tas)), AssertionError: Lists differ: [<str>, <str>, <str>, <str>]`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_pkg.py", line 259, in test_7
    self.assertEqual(fixdir(dir(tas)),
AssertionError: Lists differ: ['__doc__', '__file__', '__loader__', '__name[38 chars]c__'] != ['__cached__', '__doc__', '__file__', '__load[52 chars]c__']`
example test: `test_pkg.TestPkg.test_7`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_address_list_with_list_separator_after_fold self._test(parser.get_address_list(to)[<n>], File <`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_email/test__header_value_parser.py", line 3112, in test_address_list_with_list_separator_after_fold
    self._test(parser.get_address_list(to)[0],
  File "/work/suites/cpython/Lib/test/test_email/test__header_value_parser.`
example test: `test_email.test__header_value_parser.TestFolding.test_address_list_with_list_separator_after_fold`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_annotations eq(<str>) File <str>, line <n>, in assertAnnotationEqual self.assertEqual(actual, e`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_future_stmt/test_future.py", line 255, in test_annotations
    eq("{i for i in (1, 2, 3)}")
  File "/work/suites/cpython/Lib/test/test_future_stmt/test_future.py", line 169, in assertAnnotationEqual
    self.assertEqual(ac`
example test: `test_future_stmt.test_future.AnnotationsFutureTestCase.test_annotations`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_arg_parsing for f in (self.module.bisect_left, self.module.bisect_right, ^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_bisect.py", line 380, in test_arg_parsing
    for f in (self.module.bisect_left, self.module.bisect_right,
              ^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: 'NoneType' object has no attribute 'bisect_left'`
example test: `test_bisect.TestErrorHandlingC.test_arg_parsing`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_array codecs.readbuffer_encode(array.array(<str>, b<str>)), ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_codecs.py", line 1068, in test_array
    codecs.readbuffer_encode(array.array("b", b"spam")),
    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
NotImplementedError: readbuffer_encode`
example test: `test_codecs.ReadBufferTest.test_array`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_array_is_sequence self.assertIsInstance(array.array(<str>), collections.abc.MutableSequence) As`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_array.py", line 35, in test_array_is_sequence
    self.assertIsInstance(array.array("B"), collections.abc.MutableSequence)
AssertionError: array('B') is not an instance of <class 'collections.abc.MutableSequence'>`
example test: `test_array.MiscTest.test_array_is_sequence`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_ascii self.assertTypedEqual(ascii(WithRepr(StrSubclass(<str>))), StrSubclass(<str>)) File <str>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_unicode.py", line 154, in test_ascii
    self.assertTypedEqual(ascii(WithRepr(StrSubclass('<abc>'))), StrSubclass('<abc>'))
  File "/work/suites/cpython/Lib/test/test_unicode.py", line 104, in assertTypedEqual
    self.ass`
example test: `test_unicode.UnicodeTest.test_ascii`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_bad_args self.assertRaises(TypeError, codecs.readbuffer_encode, <n>) File <str>, line <n>, in a`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_codecs.py", line 1077, in test_bad_args
    self.assertRaises(TypeError, codecs.readbuffer_encode, 42)
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/unittest/case.py", line 778, in assertRaises
    ret`
example test: `test_codecs.ReadBufferTest.test_bad_args`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_bad_decode_args decoder = codecs.getdecoder(encoding) ^^^^^^^^^^^^^^^^^^^^^^^^^^^ File <str>, l`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_codecs.py", line 2109, in test_bad_decode_args
    decoder = codecs.getdecoder(encoding)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/encodings/euc_jis_2004.p`
example test: `test_codecs.BasicUnicodeTest.test_bad_decode_args`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_bad_EG_construction__too_many_args with self.assertRaisesRegex(TypeError, MSG): AssertionError:`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_exception_group.py", line 25, in test_bad_EG_construction__too_many_args
    with self.assertRaisesRegex(TypeError, MSG):
AssertionError: "BaseExceptionGroup.__new__\(\) takes exactly 2 arguments" does not match "BaseExcep`
example test: `test_exception_group.BadConstructorArgs.test_bad_EG_construction__too_many_args`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_bad_encode_args encoder = codecs.getencoder(encoding) ^^^^^^^^^^^^^^^^^^^^^^^^^^^ File <str>, l`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_codecs.py", line 2116, in test_bad_encode_args
    encoder = codecs.getencoder(encoding)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/encodings/euc_jis_2004.p`
example test: `test_codecs.BasicUnicodeTest.test_bad_encode_args`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_badbom self.assertRaises(UnicodeError, f.read) AssertionError: UnicodeError not raised by read`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_codecs.py", line 668, in test_badbom
    self.assertRaises(UnicodeError, f.read)
AssertionError: UnicodeError not raised by read`
example test: `test_codecs.UTF16Test.test_badbom`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_badhandlerresults self.assertRaises( File <str>, line <n>, in assertRaises return context.handl`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_codeccallbacks.py", line 765, in test_badhandlerresults
    self.assertRaises(
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/unittest/case.py", line 778, in assertRaises
    return context.handle('asse`
example test: `test_codeccallbacks.CodecCallbackTest.test_badhandlerresults`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_basics (b, size) = codecs.getencoder(encoding)(s) ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ NotImplemented`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_codecs.py", line 1986, in test_basics
    (b, size) = codecs.getencoder(encoding)(s)
                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
NotImplementedError: latin1`
example test: `test_codecs.BasicUnicodeTest.test_basics`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_bmp_characters self.assertEqual(unicodedata.lookup(name), char) ^^^^^^^^^^^^^^^^^^^^^^^^ KeyErr`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_ucn.py", line 111, in test_bmp_characters
    self.assertEqual(unicodedata.lookup(name), char)
                     ^^^^^^^^^^^^^^^^^^^^^^^^
KeyError: "undefined character name 'ARABIC PEPET'"`
example test: `test_ucn.UnicodeNamesTest.test_bmp_characters`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_break_continue_in_except_star_block_valid def test_break_continue_in_except_star_block_valid(se`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_except_star.py", line 144, in test_break_continue_in_except_star_block_valid
    def test_break_continue_in_except_star_block_valid(self):
NotImplementedError: try star`
example test: `test_except_star.TestBreakContinueReturnInExceptStarBlock.test_break_continue_in_except_star_block_valid`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_break_in_except_star self.check_invalid( File <str>, line <n>, in check_invalid with self.asser`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_except_star.py", line 60, in test_break_in_except_star
    self.check_invalid(
  File "/work/suites/cpython/Lib/test/test_except_star.py", line 56, in check_invalid
    with self.assertRaisesRegex(SyntaxError, self.MSG):
A`
example test: `test_except_star.TestBreakContinueReturnInExceptStarBlock.test_break_in_except_star`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_broken_invalid_end_tag self._run_check(html, expected) File <str>, line <n>, in _run_check self`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_htmlparser.py", line 703, in test_broken_invalid_end_tag
    self._run_check(html, expected)
  File "/work/suites/cpython/Lib/test/test_htmlparser.py", line 124, in _run_check
    self.fail("received events did not match e`
example test: `test_htmlparser.HTMLParserTestCase.test_broken_invalid_end_tag`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_bug691291 with open(os_helper.TESTFN, <str>) as fp: ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ PermissionErro`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_codecs.py", line 720, in test_bug691291
    with open(os_helper.TESTFN, 'wb') as fp:
         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^
PermissionError: [Errno 13] Permission denied: '@test_34_tmpæ'`
example test: `test_codecs.UTF16Test.test_bug691291`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_cannot_subclass with self.assertRaisesRegex( AssertionError: TypeError not raised`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_typing.py", line 8391, in test_cannot_subclass
    with self.assertRaisesRegex(
AssertionError: TypeError not raised`
example test: `test_typing.RETests.test_cannot_subclass`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_checkcache with open(source_name, <str>, encoding=<str>) as source: ^^^^^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_linecache.py", line 167, in test_checkcache
    with open(source_name, 'w', encoding='utf-8') as source:
         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
PermissionError: [Errno 13] Permission denied: '@test_40_tmpæ.py'`
example test: `test_linecache.LineCacheTests.test_checkcache`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_classmethod self.assertRaises(TypeError, wrapper, <n>) AssertionError: TypeError not raised by `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_decorators.py", line 105, in test_classmethod
    self.assertRaises(TypeError, wrapper, 1)
AssertionError: TypeError not raised by func`
example test: `test_decorators.TestDecorators.test_classmethod`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_codec_lookup_failure with self.assertRaisesRegex(LookupError, msg): AssertionError: <str> does `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_codecs.py", line 3050, in test_codec_lookup_failure
    with self.assertRaisesRegex(LookupError, msg):
AssertionError: "^unknown encoding: exception_notes_test$" does not match "unknown encoding exception_notes_test"`
example test: `test_codecs.ExceptionNotesTest.test_codec_lookup_failure`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_comments self._run_check(html, expected) File <str>, line <n>, in _run_check self.fail(<str> + `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_htmlparser.py", line 539, in test_comments
    self._run_check(html, expected)
  File "/work/suites/cpython/Lib/test/test_htmlparser.py", line 124, in _run_check
    self.fail("received events did not match expected events`
example test: `test_htmlparser.HTMLParserTestCase.test_comments`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_compile self.assertTrue(found, <str> % AssertionError: None is not true : Matching failed on <s`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_strptime.py", line 173, in test_compile
    self.assertTrue(found, "Matching failed on '%s' using '%s' regex" %
AssertionError: None is not true : Matching failed on '%G' using '(?P<G>\d\d\d\d)' regex`
example test: `test_strptime.TimeRETests.test_compile`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_constant_tuples self.check_src_roundtrip(ast.Constant(value=(<n>,), kind=None), <str>) File <st`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_unparse.py", line 425, in test_constant_tuples
    self.check_src_roundtrip(ast.Constant(value=(1,), kind=None), "(1,)")
  File "/work/suites/cpython/Lib/test/test_unparse.py", line 150, in check_src_roundtrip
    code1, c`
example test: `test_unparse.UnparseTestCase.test_constant_tuples`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_context_new_1 with self.assertRaisesRegex(TypeError, <str>): AssertionError: <str> does not mat`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_context.py", line 78, in test_context_new_1
    with self.assertRaisesRegex(TypeError, 'any arguments'):
AssertionError: "any arguments" does not match "Context() takes 1 positional argument but 2 were given"`
example test: `test_context.ContextTest.test_context_new_1`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_context_new_unhashable_str_subclass with self.assertRaisesRegex(TypeError, <str>): AssertionErr`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_context.py", line 92, in test_context_new_unhashable_str_subclass
    with self.assertRaisesRegex(TypeError, 'unhashable type'):
AssertionError: TypeError not raised`
example test: `test_context.ContextTest.test_context_new_unhashable_str_subclass`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_continue_in_except_star_block_invalid self.check_invalid( File <str>, line <n>, in check_invali`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_except_star.py", line 92, in test_continue_in_except_star_block_invalid
    self.check_invalid(
  File "/work/suites/cpython/Lib/test/test_except_star.py", line 56, in check_invalid
    with self.assertRaisesRegex(SyntaxEr`
example test: `test_except_star.TestBreakContinueReturnInExceptStarBlock.test_continue_in_except_star_block_invalid`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_copy encodings.ascii.StreamReader, encodings.ascii.StreamWriter) ^^^^^^^^^^^^^^^ AttributeError`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_codecs.py", line 3435, in test_copy
    encodings.ascii.StreamReader, encodings.ascii.StreamWriter)
    ^^^^^^^^^^^^^^^
AttributeError: module 'encodings' has no attribute 'ascii'`
example test: `test_codecs.StreamRecoderTest.test_copy`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_custom_find_class self.assertEqual(loads(b<str>), (<str>, <str>)) AssertionError: <built-in fun`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/pickletester.py", line 1265, in test_custom_find_class
    self.assertEqual(loads(b'cmath\nlog\n.'), ('math', 'log'))
AssertionError: <built-in function log> != ('math', 'log')`
example test: `test_pickle.CUnpicklerTests.test_custom_find_class`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_custom_hex_error_is_noted self.assertEqual(msg, failure.exception.__notes__[<n>]) ^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_codecs.py", line 2917, in test_custom_hex_error_is_noted
    self.assertEqual(msg, failure.exception.__notes__[0])
                          ^^^^^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: 'binascii.Error' object has no attrib`
example test: `test_codecs.TransformCodecTest.test_custom_hex_error_is_noted`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_custom_zlib_error_is_noted self.assertEqual(msg, failure.exception.__notes__[<n>]) ^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_codecs.py", line 2909, in test_custom_zlib_error_is_noted
    self.assertEqual(msg, failure.exception.__notes__[0])
                          ^^^^^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: 'zlib.error' object has no attribute`
example test: `test_codecs.TransformCodecTest.test_custom_zlib_error_is_noted`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_cycle_through_dict for o in gc.get_objects(): ^^^^^^^^^^^^^^^^ AttributeError: module <str> has`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_descr.py", line 4894, in test_cycle_through_dict
    for o in gc.get_objects():
             ^^^^^^^^^^^^^^^^
AttributeError: module 'gc' has no attribute 'get_objects'`
example test: `test_descr.ClassPropertiesAndMethods.test_cycle_through_dict`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_debug_in_file with temp_cwd(): File <str>, line <n>, in __enter__ return next(self.gen) ^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_fstring.py", line 1862, in test_debug_in_file
    with temp_cwd():
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/contextlib.py", line 137, in __enter__
    return next(self.gen)
           ^^^^^^^^^^^^`
example test: `test_fstring.TestCase.test_debug_in_file`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_decode with open(os_helper.TESTFN, <str>) as fp: ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ PermissionError: `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_base64.py", line 785, in test_decode
    with open(os_helper.TESTFN, 'wb') as fp:
         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^
PermissionError: [Errno 13] Permission denied: '@test_39_tmpæ'`
example test: `test_base64.TestMain.test_decode`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_decode_unicode self.assertRaises(TypeError, decoder, <str>) File <str>, line <n>, in assertRais`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_codecs.py", line 2417, in test_decode_unicode
    self.assertRaises(TypeError, decoder, "xxx")
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/unittest/case.py", line 778, in assertRaises
    return cont`
example test: `test_codecs.TypesTest.test_decode_unicode`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_decode_warnings with self.assertWarnsRegex(DeprecationWarning, AssertionError: DeprecationWarni`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_codecs.py", line 2509, in test_decode_warnings
    with self.assertWarnsRegex(DeprecationWarning,
AssertionError: DeprecationWarning not triggered`
example test: `test_codecs.UnicodeEscapeTest.test_decode_warnings`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_decodehelper self.assertEqual(b<str>.decode(<str>, <str>), <str>) AssertionError: <str> != <str`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_codeccallbacks.py", line 954, in test_decodehelper
    self.assertEqual(b"\xff0".decode("ascii", "test.posreturn"), "<?>0")
AssertionError: '0' != '<?>0'
- 0
+ <?>0`
example test: `test_codeccallbacks.CodecCallbackTest.test_decodehelper`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_decoder_state self.check_state_handling_decode(encoding, u, u.encode(encoding)) ^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_codecs.py", line 2130, in test_decoder_state
    self.check_state_handling_decode(encoding, u, u.encode(encoding))
                                                  ^^^^^^^^^^^^^^^^^^
NotImplementedError: latin1`
example test: `test_codecs.BasicUnicodeTest.test_decoder_state`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_deep_split with self.assertRaises(RecursionError): AssertionError: RecursionError not raised`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_exception_group.py", line 442, in test_deep_split
    with self.assertRaises(RecursionError):
AssertionError: RecursionError not raised`
example test: `test_exception_group.DeepRecursionInSplitAndSubgroup.test_deep_split`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_deep_subgroup with self.assertRaises(RecursionError): AssertionError: RecursionError not raised`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_exception_group.py", line 447, in test_deep_subgroup
    with self.assertRaises(RecursionError):
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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_dict_clear self.assertNotIn(<str>, repr(od)) ^^^^^^^^ KeyError: <str>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_ordered_dict.py", line 640, in test_dict_clear
    self.assertNotIn('NULL', repr(od))
                             ^^^^^^^^
KeyError: 'spam'`
example test: `test_ordered_dict.CPythonOrderedDictSubclassTests.test_dict_clear`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_doctest_main_issue4197 rc, out, err = assert_python_ok(script_name) ^^^^^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_zipimport_support.py", line 199, in test_doctest_main_issue4197
    rc, out, err = assert_python_ok(script_name)
                   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/support/script_helper.`
example test: `test_zipimport_support.ZipSupportTests.test_doctest_main_issue4197`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_empty self.assertEqual(codecs.readbuffer_encode(<str>), (b<str>, <n>)) ^^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_codecs.py", line 1073, in test_empty
    self.assertEqual(codecs.readbuffer_encode(""), (b"", 0))
                     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^
NotImplementedError: readbuffer_encode`
example test: `test_codecs.ReadBufferTest.test_empty`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_empty_groups_removed self.doSplitTest( File <str>, line <n>, in doSplitTest self.doSplitTestNam`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_except_star.py", line 309, in test_empty_groups_removed
    self.doSplitTest(
  File "/work/suites/cpython/Lib/test/test_except_star.py", line 241, in doSplitTest
    self.doSplitTestNamed(exc, T, match_template, rest_temp`
example test: `test_except_star.TestExceptStarSplitSemantics.test_empty_groups_removed`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_encode_file with open(os_helper.TESTFN, <str>) as fp: ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ PermissionEr`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_base64.py", line 773, in test_encode_file
    with open(os_helper.TESTFN, 'wb') as fp:
         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^
PermissionError: [Errno 13] Permission denied: '@test_39_tmpæ'`
example test: `test_base64.TestMain.test_encode_file`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_encode_from_stdin with script_helper.spawn_python(<str>, <str>, <str>) as proc: ^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_base64.py", line 779, in test_encode_from_stdin
    with script_helper.spawn_python('-m', 'base64', '-e') as proc:
         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/support/scr`
example test: `test_base64.TestMain.test_encode_from_stdin`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_encoding self.assertEqual(ET.tostring(ET.XML(bxml(encoding))), b<str>) ^^^^^^^^^^^^^^^^^^^^^^ F`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_xml_etree.py", line 1096, in test_encoding
    self.assertEqual(ET.tostring(ET.XML(bxml(encoding))), b'<xml />')
                                 ^^^^^^^^^^^^^^^^^^^^^^
  File "/opt/elide/lib/resources/python/python-home/l`
example test: `test_xml_etree.ElementTreeTest.test_encoding`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_encoding self.assertEqual(serialize(elem, encoding=enc), AssertionError: b<str> != b<str>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_xml_etree.py", line 3927, in test_encoding
    self.assertEqual(serialize(elem, encoding=enc),
AssertionError: b'\xf[205 chars]n\x00\xff\xfe<\x00t\x00a\x00g\x00\xff\xfe>\x00[118 chars]\x00' != b'\xf[205 chars]n\x00<\x00t\x`
example test: `test_xml_etree.IOTest.test_encoding`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_ensure_ascii_default infile = self._create_infile(<str>) ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ File `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_json/test_tool.py", line 213, in test_ensure_ascii_default
    infile = self._create_infile('{"key":"💩"}')
             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_json/test_tool.py", line `
example test: `test_json.test_tool.TestTool.test_ensure_ascii_default`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_EOFS_with_file rc, out, err = script_helper.assert_python_failure(<str>, <str>, file_name) ^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_eof.py", line 52, in test_EOFS_with_file
    rc, out, err = script_helper.assert_python_failure('-X', 'utf8', file_name)
                   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/`
example test: `test_eof.EOFTestCase.test_EOFS_with_file`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_errors self.assertRaises(UnicodeDecodeError, codecs.utf_16_ex_decode, b<str>, <str>, <n>, True)`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_codecs.py", line 1058, in test_errors
    self.assertRaises(UnicodeDecodeError, codecs.utf_16_ex_decode, b"\xff", "strict", 0, True)
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/unittest/case.py", lin`
example test: `test_codecs.UTF16ExTest.test_errors`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_eval_str_invalid_octal_escape with self.assertWarns(SyntaxWarning): AssertionError: SyntaxWarni`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_string_literals.py", line 148, in test_eval_str_invalid_octal_escape
    with self.assertWarns(SyntaxWarning):
AssertionError: SyntaxWarning not triggered`
example test: `test_string_literals.TestLiterals.test_eval_str_invalid_octal_escape`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_except_star_EG_subclass try: NotImplementedError: try star`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_except_star.py", line 902, in test_except_star_EG_subclass
    try:
NotImplementedError: try star`
example test: `test_except_star.TestExceptStarExceptionGroupSubclass.test_except_star_EG_subclass`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_except_star_ExceptionGroup_is_runtime_error_single with self.assertRaises(TypeError): NotImplem`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_except_star.py", line 24, in test_except_star_ExceptionGroup_is_runtime_error_single
    with self.assertRaises(TypeError):
NotImplementedError: try star`
example test: `test_except_star.TestInvalidExceptStar.test_except_star_ExceptionGroup_is_runtime_error_single`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_except_star_ExceptionGroup_is_runtime_error_tuple with self.assertRaises(TypeError): NotImpleme`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_except_star.py", line 31, in test_except_star_ExceptionGroup_is_runtime_error_tuple
    with self.assertRaises(TypeError):
NotImplementedError: try star`
example test: `test_except_star.TestInvalidExceptStar.test_except_star_ExceptionGroup_is_runtime_error_tuple`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_except_star_invalid_exception_type with self.assertRaises(TypeError): NotImplementedError: try `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_except_star.py", line 38, in test_except_star_invalid_exception_type
    with self.assertRaises(TypeError):
NotImplementedError: try star`
example test: `test_except_star.TestInvalidExceptStar.test_except_star_invalid_exception_type`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_exception_group_except_star_Exception_not_wrapped self.doSplitTest( File <str>, line <n>, in do`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_except_star.py", line 352, in test_exception_group_except_star_Exception_not_wrapped
    self.doSplitTest(
  File "/work/suites/cpython/Lib/test/test_except_star.py", line 241, in doSplitTest
    self.doSplitTestNamed(exc,`
example test: `test_except_star.TestExceptStarSplitSemantics.test_exception_group_except_star_Exception_not_wrapped`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_exception_group_subclass_with_bad_split_func with self.assertRaisesRegex(TypeError, msg) as m: `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_except_star.py", line 973, in test_exception_group_subclass_with_bad_split_func
    with self.assertRaisesRegex(TypeError, msg) as m:
NotImplementedError: try star`
example test: `test_except_star.TestExceptStarExceptionGroupSubclass.test_exception_group_subclass_with_bad_split_func`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_exit_exception_traceback self.assertEqual( AssertionError: Lists differ: [(<str>__step_run_and_`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_contextlib.py", line 859, in test_exit_exception_traceback
    self.assertEqual(
AssertionError: Lists differ: [('te[203 chars] ('__step_run_and_handle_result', 'result = co[173 chars]xc')] != [('te[203 chars] ('__aexit__'`
example test: `test_contextlib_async.TestAsyncExitStack.test_exit_exception_traceback`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_failed_import_during_compiling result = script_helper.assert_python_failure(<str>, code) ^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_unicodedata.py", line 271, in test_failed_import_during_compiling
    result = script_helper.assert_python_failure("-c", code)
             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/t`
example test: `test_unicodedata.UnicodeMiscTest.test_failed_import_during_compiling`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_falsy_exception_group_subclass for e in [tes, ves, exc]: ^^^ UnboundLocalError: local variable `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_except_star.py", line 947, in test_falsy_exception_group_subclass
    for e in [tes, ves, exc]:
              ^^^
UnboundLocalError: local variable 'tes' referenced before assignment`
example test: `test_except_star.TestExceptStarExceptionGroupSubclass.test_falsy_exception_group_subclass`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_file_parse f = open(filename, <str>, encoding=<str>) ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Per`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_source_encoding.py", line 122, in test_file_parse
    f = open(filename, "w", encoding="cp1252")
        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
PermissionError: [Errno 13] Permission denied: '@test_138_tmpæ.py'`
example test: `test_source_encoding.MiscSourceEncodingTest.test_file_parse`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_file_parse_error_multiline with open(TESTFN, <str>) as fd: ^^^^^^^^^^^^^^^^^^ PermissionError: `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_source_encoding.py", line 153, in test_file_parse_error_multiline
    with open(TESTFN, "wb") as fd:
         ^^^^^^^^^^^^^^^^^^
PermissionError: [Errno 13] Permission denied: '@test_138_tmpæ'`
example test: `test_source_encoding.MiscSourceEncodingTest.test_file_parse_error_multiline`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_fileclosed os.remove(os_helper.TESTFN) FileNotFoundError: [Errno <n>] No such file or directory`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_bool.py", line 261, in test_fileclosed
    os.remove(os_helper.TESTFN)
FileNotFoundError: [Errno 2] No such file or directory: '@test_33_tmpæ'`
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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_find_class unpickler.find_class(<str>, <str>) TypeError: <str> object has no attribute <str>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/pickletester.py", line 1233, in test_find_class
    unpickler.find_class('builtins', 'str.upper')
TypeError: 'NoneType' object has no attribute 'str.upper'`
example test: `test_pickle.CUnpicklerTests.test_find_class`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_first_coding_line self.check_script_output(src, br<str>) File <str>, line <n>, in check_script_`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_source_encoding.py", line 185, in test_first_coding_line
    self.check_script_output(src, br"'\xc3\u20ac'")
  File "/work/suites/cpython/Lib/test/test_source_encoding.py", line 336, in check_script_output
    res = script`
example test: `test_source_encoding.FileSourceEncodingTest.test_first_coding_line`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_first_match_wins_named def test_first_match_wins_named(self): NotImplementedError: try star`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_except_star.py", line 398, in test_first_match_wins_named
    def test_first_match_wins_named(self):
NotImplementedError: try star`
example test: `test_except_star.TestExceptStarSplitSemantics.test_first_match_wins_named`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_first_match_wins_unnamed def test_first_match_wins_unnamed(self): NotImplementedError: try star`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_except_star.py", line 409, in test_first_match_wins_unnamed
    def test_first_match_wins_unnamed(self):
NotImplementedError: try star`
example test: `test_except_star.TestExceptStarSplitSemantics.test_first_match_wins_unnamed`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_free_after_iterating support.check_free_after_iterating(self, iter, self.OrderedDict) File <str`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_ordered_dict.py", line 684, in test_free_after_iterating
    support.check_free_after_iterating(self, iter, self.OrderedDict)
  File "/work/suites/cpython/Lib/test/support/__init__.py", line 1830, in check_free_after_itera`
example test: `test_ordered_dict.CPythonOrderedDictSubclassTests.test_free_after_iterating`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_free_after_iterating support.check_free_after_iterating(self, iter, self.type2test) File <str>,`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/seq_tests.py", line 430, in test_free_after_iterating
    support.check_free_after_iterating(self, iter, self.type2test)
  File "/work/suites/cpython/Lib/test/support/__init__.py", line 1830, in check_free_after_iterating
    t`
example test: `test_tuple.TupleTest.test_free_after_iterating`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_garbage_collect_test_after_run_TestSuite self.assert_garbage_collect_test_after_run(unittest.Te`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_unittest/test_suite.py", line 382, in test_garbage_collect_test_after_run_TestSuite
    self.assert_garbage_collect_test_after_run(unittest.TestSuite)
  File "/work/suites/cpython/Lib/test/test_unittest/test_suite.py", lin`
example test: `test_unittest.test_suite.Test_TestSuite.test_garbage_collect_test_after_run_TestSuite`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_gregorian_calculation result = _strptime._strptime_time(time.strftime(format_string, self.time_`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_strptime.py", line 677, in test_gregorian_calculation
    result = _strptime._strptime_time(time.strftime(format_string, self.time_tuple),
             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`
example test: `test_strptime.CalculationTests.test_gregorian_calculation`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_html_diff self.assertEqual(actual, fp.read()) AssertionError: <str> != <str>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_difflib.py", line 245, in test_html_diff
    self.assertEqual(actual, fp.read())
AssertionError: '\n<![315 chars]mily:Courier; border:medium;}\n        .diff_h[103422 chars]tml>' != '\n<![315 chars]mily: Menlo, Consolas, M`
example test: `test_difflib.TestSFpatches.test_html_diff`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_implicit_files_with_compiled_importlib assert importlib.import_module(<str>).val == <str> ^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_importlib/resources/test_files.py", line 185, in test_implicit_files_with_compiled_importlib
    assert importlib.import_module('frozenpkg').val == 'resources are the best'
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 `
example test: `test_importlib.resources.test_files.ImplicitContextFilesTests.test_implicit_files_with_compiled_importlib`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_incomplete ai(<str>) File <str>, line <n>, in assertIncomplete self.assertEqual(compile_command`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_codeop.py", line 98, in test_incomplete
    ai("(a **")
  File "/work/suites/cpython/Lib/test/test_codeop.py", line 21, in assertIncomplete
    self.assertEqual(compile_command(str, symbol=symbol), None)
                  `
example test: `test_codeop.CodeopTests.test_incomplete`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_incomplete_warning self.assertIncomplete(<str>) File <str>, line <n>, in assertIncomplete self.`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_codeop.py", line 303, in test_incomplete_warning
    self.assertIncomplete("'\\e' + (")
  File "/work/suites/cpython/Lib/test/test_codeop.py", line 21, in assertIncomplete
    self.assertEqual(compile_command(str, symbol=s`
example test: `test_codeop.CodeopTests.test_incomplete_warning`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_incremental_surrogatepass self.assertEqual(dec.decode(data[i:], True), <str>) AssertionError: <`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_codecs.py", line 443, in test_incremental_surrogatepass
    self.assertEqual(dec.decode(data[i:], True), '\uD901')
AssertionError: '2QE-' != '\ud901'
- 2QE-
+ �`
example test: `test_codecs.UTF7Test.test_incremental_surrogatepass`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_infinity_numbers self.assertAnnotationEqual(<str>, expected=inf) File <str>, line <n>, in asser`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_future_stmt/test_future.py", line 356, in test_infinity_numbers
    self.assertAnnotationEqual("1e1000", expected=inf)
  File "/work/suites/cpython/Lib/test/test_future_stmt/test_future.py", line 169, in assertAnnotationEq`
example test: `test_future_stmt.test_future.AnnotationsFutureTestCase.test_infinity_numbers`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_init_override self.check_note(CustomInit, <str>) File <str>, line <n>, in check_note with self.`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_codecs.py", line 3026, in test_init_override
    self.check_note(CustomInit, "")
  File "/work/suites/cpython/Lib/test/test_codecs.py", line 2994, in check_note
    with self.assertNoted("encoding", exc_type, msg):
  File `
example test: `test_codecs.ExceptionNotesTest.test_init_override`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_input self.write_testfile() File <str>, line <n>, in write_testfile fp = open(TESTFN, <str>, en`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_builtin.py", line 1495, in test_input
    self.write_testfile()
  File "/work/suites/cpython/Lib/test/test_builtin.py", line 1352, in write_testfile
    fp = open(TESTFN, 'w', encoding="utf-8")
         ^^^^^^^^^^^^^^^^^^^`
example test: `test_builtin.BuiltinTest.test_input`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_instance_attribute self.check_note(exc, <str>.format(msg)) File <str>, line <n>, in check_note `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_codecs.py", line 3038, in test_instance_attribute
    self.check_note(exc, "^{}$".format(msg))
  File "/work/suites/cpython/Lib/test/test_codecs.py", line 2994, in check_note
    with self.assertNoted("encoding", exc_type,`
example test: `test_codecs.ExceptionNotesTest.test_instance_attribute`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_invalid_character_in_charset self._test(<str>, File <str>, line <n>, in _test self.assertDefect`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_email/test__encoded_words.py", line 134, in test_invalid_character_in_charset
    self._test('=?utf-8\udce2\udc80\udc9d?q?foo=ACbar?=',
  File "/work/suites/cpython/Lib/test/test_email/test__encoded_words.py", line 69, in `
example test: `test_email.test__encoded_words.TestDecode.test_invalid_character_in_charset`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_invalid_delattr self.assertRaisesRegex(TE, msg, delattr, exc, <str>) AssertionError: <str> does`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_exceptions.py", line 671, in test_invalid_delattr
    self.assertRaisesRegex(TE, msg, delattr, exc, 'args')
AssertionError: "may not be deleted" does not match "can't delete BaseException.args"`
example test: `test_exceptions.ExceptionTests.test_invalid_delattr`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_invalid_escape_locations_with_offset self.assertEqual(exc.offset, <n>) AssertionError: <n> != <`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_string_literals.py", line 181, in test_invalid_escape_locations_with_offset
    self.assertEqual(exc.offset, 30)
AssertionError: 1 != 30`
example test: `test_string_literals.TestLiterals.test_invalid_escape_locations_with_offset`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_invalid_line_continuation_error_position self._check_error(r<str>, File <str>, line <n>, in _ch`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_syntax.py", line 2353, in test_invalid_line_continuation_error_position
    self._check_error(r"a = 3 \ 4",
  File "/work/suites/cpython/Lib/test/test_syntax.py", line 2045, in _check_error
    self.assertEqual(err.offset,`
example test: `test_syntax.SyntaxTestCase.test_invalid_line_continuation_error_position`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_invalid_modes codecs.open(os_helper.TESTFN, mode, encoding=self.encoding) FileNotFoundError: [E`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_codecs.py", line 729, in test_invalid_modes
    codecs.open(os_helper.TESTFN, mode, encoding=self.encoding)
FileNotFoundError: [Errno 2] No such file or directory: '@test_34_tmpæ'`
example test: `test_codecs.UTF16Test.test_invalid_modes`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_invalid_warning self.assertEqual(len(w), <n>) AssertionError: <n> != <n>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_codeop.py", line 310, in test_invalid_warning
    self.assertEqual(len(w), 1)
AssertionError: 0 != 1`
example test: `test_codeop.CodeopTests.test_invalid_warning`

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
PermissionError: [Errno 13] Permission denied: '@test_134_tmpæ'`
example test: `test_plistlib.TestPlistlib.test_io`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_issue41287 self.assertEqual(doc, <str>, AssertionError: <str> != <str> - This is a subclass of `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_property.py", line 338, in test_issue41287
    self.assertEqual(doc, "issue 41287 is fixed",
AssertionError: 'This is a subclass of property' != 'issue 41287 is fixed'
- This is a subclass of property
+ issue 41287 is fixe`
example test: `test_property.PropertySubclassTests.test_issue41287`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_iterparse with open(TESTFN, <str>) as f: ^^^^^^^^^^^^^^^^^^ PermissionError: [Errno <n>] Permis`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_xml_etree.py", line 653, in test_iterparse
    with open(TESTFN, "wb") as f:
         ^^^^^^^^^^^^^^^^^^
PermissionError: [Errno 13] Permission denied: '@test_159_tmpæ'`
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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_key_with_mutating_del self.assertRaises(ValueError, data.sort, key=SortKiller) AssertionError: `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_sort.py", line 218, in test_key_with_mutating_del
    self.assertRaises(ValueError, data.sort, key=SortKiller)
AssertionError: ValueError not raised by sort`
example test: `test_sort.TestDecorateSortUndecorate.test_key_with_mutating_del`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_len_only for f in (self.module.bisect_left, self.module.bisect_right, ^^^^^^^^^^^^^^^^^^^^^^^ A`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_bisect.py", line 364, in test_len_only
    for f in (self.module.bisect_left, self.module.bisect_right,
              ^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: 'NoneType' object has no attribute 'bisect_left'`
example test: `test_bisect.TestErrorHandlingC.test_len_only`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_line_continuation_EOF self.assertEqual(cm.exception.text, <str>) ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_eof.py", line 99, in test_line_continuation_EOF
    self.assertEqual(cm.exception.text, 'ä = 5\\\n')
    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: 'ä = 5\\' != 'ä = 5\\\n'
  ä = 5\
+`
example test: `test_eof.EOFTestCase.test_line_continuation_EOF`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_line_continuation_EOF_from_file_bpo2180 rc, out, err = script_helper.assert_python_failure(<str`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_eof.py", line 130, in test_line_continuation_EOF_from_file_bpo2180
    rc, out, err = script_helper.assert_python_failure('-X', 'utf8', file_name)
                   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`
example test: `test_eof.EOFTestCase.test_line_continuation_EOF_from_file_bpo2180`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_linebreak_7643 self.assertEqual(len(lines), <n>, AssertionError: <n> != <n> : \u001c should be `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_unicodedata.py", line 339, in test_linebreak_7643
    self.assertEqual(len(lines), 2,
AssertionError: 1 != 2 : \u001c should be a linebreak`
example test: `test_unicodedata.UnicodeMiscTest.test_linebreak_7643`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_loadTestsFromName__relative_invalid_testmethod self.assertIn( AssertionError: <str> not found i`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_unittest/test_loader.py", line 515, in test_loadTestsFromName__relative_invalid_testmethod
    self.assertIn(
AssertionError: "type object 'MyTestCase' has no attribute 'testfoo'" not found in 'Failed to access attribute:\`
example test: `test_unittest.test_loader.Test_TestLoader.test_loadTestsFromName__relative_invalid_testmethod`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_loadTestsFromNames__relative_invalid_testmethod self.assertIn( AssertionError: <str> not found `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_unittest/test_loader.py", line 953, in test_loadTestsFromNames__relative_invalid_testmethod
    self.assertIn(
AssertionError: "type object 'MyTestCase' has no attribute 'testfoo'" not found in 'Failed to access attribute:`
example test: `test_unittest.test_loader.Test_TestLoader.test_loadTestsFromNames__relative_invalid_testmethod`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_match__supertype self.doSplitTest( File <str>, line <n>, in doSplitTest self.doSplitTestNamed(e`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_except_star.py", line 366, in test_match__supertype
    self.doSplitTest(
  File "/work/suites/cpython/Lib/test/test_except_star.py", line 241, in doSplitTest
    self.doSplitTestNamed(exc, T, match_template, rest_template`
example test: `test_except_star.TestExceptStarSplitSemantics.test_match__supertype`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_match_single_type self.doSplitTest( File <str>, line <n>, in doSplitTest self.doSplitTestNamed(`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_except_star.py", line 254, in test_match_single_type
    self.doSplitTest(
  File "/work/suites/cpython/Lib/test/test_except_star.py", line 241, in doSplitTest
    self.doSplitTestNamed(exc, T, match_template, rest_templat`
example test: `test_except_star.TestExceptStarSplitSemantics.test_match_single_type`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_match_single_type_nested self.doSplitTest( File <str>, line <n>, in doSplitTest self.doSplitTes`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_except_star.py", line 270, in test_match_single_type_nested
    self.doSplitTest(
  File "/work/suites/cpython/Lib/test/test_except_star.py", line 241, in doSplitTest
    self.doSplitTestNamed(exc, T, match_template, rest_`
example test: `test_except_star.TestExceptStarSplitSemantics.test_match_single_type_nested`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_match_single_type_partial_match self.doSplitTest( File <str>, line <n>, in doSplitTest self.doS`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_except_star.py", line 261, in test_match_single_type_partial_match
    self.doSplitTest(
  File "/work/suites/cpython/Lib/test/test_except_star.py", line 241, in doSplitTest
    self.doSplitTestNamed(exc, T, match_template`
example test: `test_except_star.TestExceptStarSplitSemantics.test_match_single_type_partial_match`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_match_type_tuple_nested self.doSplitTest( File <str>, line <n>, in doSplitTest self.doSplitTest`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_except_star.py", line 291, in test_match_type_tuple_nested
    self.doSplitTest(
  File "/work/suites/cpython/Lib/test/test_except_star.py", line 241, in doSplitTest
    self.doSplitTestNamed(exc, T, match_template, rest_t`
example test: `test_except_star.TestExceptStarSplitSemantics.test_match_type_tuple_nested`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_method_checksum self.assertEqual(result, self.expectedchecksum) AssertionError: <str> != <str> `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_unicodedata.py", line 65, in test_method_checksum
    self.assertEqual(result, self.expectedchecksum)
AssertionError: '76a666077baf55387180309ef3d55423d266dfea' != 'e708c31c0d51f758adf475cb7201cf80917362be'
- 76a666077baf5`
example test: `test_unicodedata.UnicodeMethodsTest.test_method_checksum`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_method_descriptor_flag self.assertTrue(_testcapi.MethodDescriptorBase.__flags__ & Py_TPFLAGS_ME`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_call.py", line 630, in test_method_descriptor_flag
    self.assertTrue(_testcapi.MethodDescriptorBase.__flags__ & Py_TPFLAGS_METHOD_DESCRIPTOR)
                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: module '_te`
example test: `test_call.TestPEP590.test_method_descriptor_flag`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_multiple_args self.check_note(RuntimeError(<str>, <str>, <str>), msg_re) File <str>, line <n>, `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_codecs.py", line 3045, in test_multiple_args
    self.check_note(RuntimeError('a', 'b', 'c'), msg_re)
  File "/work/suites/cpython/Lib/test/test_codecs.py", line 2994, in check_note
    with self.assertNoted("encoding", ex`
example test: `test_codecs.ExceptionNotesTest.test_multiple_args`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_multiple_matches_named def test_multiple_matches_named(self): NotImplementedError: try star`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_except_star.py", line 372, in test_multiple_matches_named
    def test_multiple_matches_named(self):
NotImplementedError: try star`
example test: `test_except_star.TestExceptStarSplitSemantics.test_multiple_matches_named`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_multiple_matches_unnamed def test_multiple_matches_unnamed(self): NotImplementedError: try star`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_except_star.py", line 384, in test_multiple_matches_unnamed
    def test_multiple_matches_unnamed(self):
NotImplementedError: try star`
example test: `test_except_star.TestExceptStarSplitSemantics.test_multiple_matches_unnamed`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_naked_exception_matched_wrapped1 self.doSplitTest( File <str>, line <n>, in doSplitTest self.do`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_except_star.py", line 338, in test_naked_exception_matched_wrapped1
    self.doSplitTest(
  File "/work/suites/cpython/Lib/test/test_except_star.py", line 241, in doSplitTest
    self.doSplitTestNamed(exc, T, match_templat`
example test: `test_except_star.TestExceptStarSplitSemantics.test_naked_exception_matched_wrapped1`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_naked_exception_matched_wrapped2 self.doSplitTest( File <str>, line <n>, in doSplitTest self.do`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_except_star.py", line 345, in test_naked_exception_matched_wrapped2
    self.doSplitTest(
  File "/work/suites/cpython/Lib/test/test_except_star.py", line 241, in doSplitTest
    self.doSplitTestNamed(exc, T, match_templat`
example test: `test_except_star.TestExceptStarSplitSemantics.test_naked_exception_matched_wrapped2`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_name_inverse_lookup self.assertEqual(self.db.lookup(looked_name), char) ^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_unicodedata.py", line 105, in test_name_inverse_lookup
    self.assertEqual(self.db.lookup(looked_name), char)
                     ^^^^^^^^^^^^^^^^^^^^^^^^^^^
KeyError: "undefined character name 'ARABIC PEPET'"`
example test: `test_unicodedata.UnicodeFunctionsTest.test_name_inverse_lookup`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_negative_zero self.assertEqual(f<str>, <str>) ^^^^^^^^^ ValueError: Invalid conversion specific`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_format.py", line 556, in test_negative_zero
    self.assertEqual(f"{0.:z.1f}", "0.0")
                       ^^^^^^^^^
ValueError: Invalid conversion specification`
example test: `test_format.FormatTest.test_negative_zero`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_nested_except_stars def test_nested_except_stars(self): NotImplementedError: try star`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_except_star.py", line 421, in test_nested_except_stars
    def test_nested_except_stars(self):
NotImplementedError: try star`
example test: `test_except_star.TestExceptStarSplitSemantics.test_nested_except_stars`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_nested_in_loop for _ in range(<n>): NotImplementedError: try star`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_except_star.py", line 438, in test_nested_in_loop
    for _ in range(2):
NotImplementedError: try star`
example test: `test_except_star.TestExceptStarSplitSemantics.test_nested_in_loop`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_new_builtins_issue_43102 self.assertEqual(new_func.__globals__[<str>], {}) AssertionError: {<st`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_collections.py", line 702, in test_new_builtins_issue_43102
    self.assertEqual(new_func.__globals__['__builtins__'], {})
AssertionError: {'__name__': 'builtins', '__doc__': None, [5808 chars]or'>} != {}
Diff is 6319 char`
example test: `test_collections.TestNamedTuple.test_new_builtins_issue_43102`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_new_override self.check_note(CustomNew, <str>) File <str>, line <n>, in check_note with self.as`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_codecs.py", line 3032, in test_new_override
    self.check_note(CustomNew, "")
  File "/work/suites/cpython/Lib/test/test_codecs.py", line 2994, in check_note
    with self.assertNoted("encoding", exc_type, msg):
  File "/`
example test: `test_codecs.ExceptionNotesTest.test_new_override`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_no_ending_newline with open(os_helper.TESTFN, <str>, encoding=<str>) as fp: ^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_linecache.py", line 140, in test_no_ending_newline
    with open(os_helper.TESTFN, "w", encoding='utf-8') as fp:
         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
PermissionError: [Errno 13] Permission denied: '@test_`
example test: `test_linecache.LineCacheTests.test_no_ending_newline`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_no_ensure_ascii_flag infile = self._create_infile(<str>) ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ File `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_json/test_tool.py", line 202, in test_no_ensure_ascii_flag
    infile = self._create_infile('{"key":"💩"}')
             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_json/test_tool.py", line `
example test: `test_json.test_tool.TestTool.test_no_ensure_ascii_flag`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_no_exception_leak self.assertEqual(MyException.ninstance, <n>) AssertionError: <n> != <n>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_unittest/test_case.py", line 1998, in test_no_exception_leak
    self.assertEqual(MyException.ninstance, 0)
AssertionError: 1 != 0`
example test: `test_unittest.test_case.Test_TestCase.test_no_exception_leak`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_no_indent process = subprocess.run(args, input=input_, capture_output=True, text=True, check=Tr`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_json/test_tool.py", line 181, in test_no_indent
    process = subprocess.run(args, input=input_, capture_output=True, text=True, check=True)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`
example test: `test_json.test_tool.TestTool.test_no_indent`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_no_match_single_type self.doSplitTest( File <str>, line <n>, in doSplitTest self.doSplitTestNam`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_except_star.py", line 247, in test_no_match_single_type
    self.doSplitTest(
  File "/work/suites/cpython/Lib/test/test_except_star.py", line 241, in doSplitTest
    self.doSplitTestNamed(exc, T, match_template, rest_temp`
example test: `test_except_star.TestExceptStarSplitSemantics.test_no_match_single_type`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_no_type_check_foreign_functions with self.assertRaises(AttributeError): AssertionError: Attribu`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_typing.py", line 6011, in test_no_type_check_foreign_functions
    with self.assertRaises(AttributeError):
AssertionError: AttributeError not raised`
example test: `test_typing.ForwardRefTests.test_no_type_check_foreign_functions`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_nokeepref with woohoo(A(), b=A()): File <str>, line <n>, in __enter__ return next(self.gen) ^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_contextlib.py", line 350, in test_nokeepref
    with woohoo(A(), b=A()):
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/contextlib.py", line 137, in __enter__
    return next(self.gen)
           ^^^^^^`
example test: `test_contextlib.ContextManagerTestCase.test_nokeepref`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_non_str_arg self.check_note(RuntimeError(<n>), <str>) File <str>, line <n>, in check_note with `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_codecs.py", line 3041, in test_non_str_arg
    self.check_note(RuntimeError(1), "1")
  File "/work/suites/cpython/Lib/test/test_codecs.py", line 2994, in check_note
    with self.assertNoted("encoding", exc_type, msg):
  F`
example test: `test_codecs.ExceptionNotesTest.test_non_str_arg`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_nonbmp self.assertEqual(b<str>.decode(self.encoding), <str>) ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ U`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_codecs.py", line 1023, in test_nonbmp
    self.assertEqual(b'+2AHcoA'.decode(self.encoding), '\U000104A0')
                     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
UnicodeDecodeError: 'utf_7' codec can't decode byte 0x41 in p`
example test: `test_codecs.UTF7Test.test_nonbmp`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_operator_compare_digest self._test_compare_digest(operator_compare_digest) File <str>, line <n>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_hmac.py", line 561, in test_operator_compare_digest
    self._test_compare_digest(operator_compare_digest)
  File "/work/suites/cpython/Lib/test/test_hmac.py", line 647, in _test_compare_digest
    self.assertRaises(TypeEr`
example test: `test_hmac.CompareDigestTestCase.test_operator_compare_digest`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_optional_isinstance_type_error with self.assertRaises(TypeError): AssertionError: TypeError not`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_typing.py", line 1830, in test_optional_isinstance_type_error
    with self.assertRaises(TypeError):
AssertionError: TypeError not raised`
example test: `test_typing.UnionTests.test_optional_isinstance_type_error`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_pdb_issue4201 p = spawn_python(script_name) ^^^^^^^^^^^^^^^^^^^^^^^^^ File <str>, line <n>, in `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_zipimport_support.py", line 226, in test_pdb_issue4201
    p = spawn_python(script_name)
        ^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 188, in spawn_python
    if n`
example test: `test_zipimport_support.ZipSupportTests.test_pdb_issue4201`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_pickle encodings.ascii.StreamReader, encodings.ascii.StreamWriter) ^^^^^^^^^^^^^^^ AttributeErr`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_codecs.py", line 3446, in test_pickle
    encodings.ascii.StreamReader, encodings.ascii.StreamWriter)
    ^^^^^^^^^^^^^^^
AttributeError: module 'encodings' has no attribute 'ascii'`
example test: `test_codecs.StreamRecoderTest.test_pickle`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_pickle z = pickle.dumps(c, proto) ^^^^^^^^^^^^^^^^^^^^^^ File <str>, line <n>, in _reduce_ex st`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_typing.py", line 4802, in test_pickle
    z = pickle.dumps(c, proto)
        ^^^^^^^^^^^^^^^^^^^^^^
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/copyreg.py", line 71, in _reduce_ex
    state = base(se`
example test: `test_typing.GenericTests.test_pickle`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_plain_exception_not_matched self.doSplitTest( File <str>, line <n>, in doSplitTest self.doSplit`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_except_star.py", line 359, in test_plain_exception_not_matched
    self.doSplitTest(
  File "/work/suites/cpython/Lib/test/test_except_star.py", line 241, in doSplitTest
    self.doSplitTestNamed(exc, T, match_template, re`
example test: `test_except_star.TestExceptStarSplitSemantics.test_plain_exception_not_matched`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_printable_repr self.assertEqual(repr(<str>), <str>) # nonprintable ^^^^^^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_unicode.py", line 2463, in test_printable_repr
    self.assertEqual(repr('\U00014000'), "'\\U00014000'")     # nonprintable
    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: "'𔀀'" != "'\\U00014000'`
example test: `test_unicode.UnicodeTest.test_printable_repr`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_prints_usage_with_help_flag output = self.get_output(<str>) ^^^^^^^^^^^^^^^^^^^^^ File <str>, l`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_base64.py", line 791, in test_prints_usage_with_help_flag
    output = self.get_output('-h')
             ^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_base64.py", line 770, in get_output
    return scri`
example test: `test_base64.TestMain.test_prints_usage_with_help_flag`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_prints_usage_with_invalid_flag output = script_helper.assert_python_failure(<str>, <str>, <str>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_base64.py", line 796, in test_prints_usage_with_invalid_flag
    output = script_helper.assert_python_failure('-m', 'base64', '-x').err
             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/s`
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
  File "/work/suites/cpython/Lib/test/test_runpy.py", line 789, in assertSigInt
    proc = subprocess.run(cmd`
example test: `test_runpy.TestExit.test_pymain_run_command`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_pymain_run_command_run_module self.assertSigInt( File <str>, line <n>, in assertSigInt proc = s`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_runpy.py", line 823, in test_pymain_run_command_run_module
    self.assertSigInt(
  File "/work/suites/cpython/Lib/test/test_runpy.py", line 789, in assertSigInt
    proc = subprocess.run(cmd, *args, **kwargs, text=True, s`
example test: `test_runpy.TestExit.test_pymain_run_command_run_module`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_pymain_run_file self.assertSigInt([self.ham]) File <str>, line <n>, in assertSigInt proc = subp`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_runpy.py", line 794, in test_pymain_run_file
    self.assertSigInt([self.ham])
  File "/work/suites/cpython/Lib/test/test_runpy.py", line 789, in assertSigInt
    proc = subprocess.run(cmd, *args, **kwargs, text=True, stde`
example test: `test_runpy.TestExit.test_pymain_run_file`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_pymain_run_file_runpy_run_module self.assertSigInt([run_module], cwd=tmp) File <str>, line <n>,`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_runpy.py", line 807, in test_pymain_run_file_runpy_run_module
    self.assertSigInt([run_module], cwd=tmp)
  File "/work/suites/cpython/Lib/test/test_runpy.py", line 789, in assertSigInt
    proc = subprocess.run(cmd, *arg`
example test: `test_runpy.TestExit.test_pymain_run_file_runpy_run_module`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_pymain_run_file_runpy_run_module_as_main self.assertSigInt([run_module_as_main], cwd=tmp) File `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_runpy.py", line 820, in test_pymain_run_file_runpy_run_module_as_main
    self.assertSigInt([run_module_as_main], cwd=tmp)
  File "/work/suites/cpython/Lib/test/test_runpy.py", line 789, in assertSigInt
    proc = subproce`
example test: `test_runpy.TestExit.test_pymain_run_file_runpy_run_module_as_main`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_pymain_run_module self.assertSigInt([<str>, ham.stem], cwd=ham.parent) File <str>, line <n>, in`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_runpy.py", line 836, in test_pymain_run_module
    self.assertSigInt(["-m", ham.stem], cwd=ham.parent)
  File "/work/suites/cpython/Lib/test/test_runpy.py", line 789, in assertSigInt
    proc = subprocess.run(cmd, *args, *`
example test: `test_runpy.TestExit.test_pymain_run_module`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_pymain_run_stdin self.assertSigInt([], input=<str>, cwd=self.ham.parent) File <str>, line <n>, `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_runpy.py", line 832, in test_pymain_run_stdin
    self.assertSigInt([], input="import ham", cwd=self.ham.parent)
  File "/work/suites/cpython/Lib/test/test_runpy.py", line 789, in assertSigInt
    proc = subprocess.run(cmd`
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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_raise_by_type self.check_note(RuntimeError, <str>) File <str>, line <n>, in check_note with sel`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_codecs.py", line 3004, in test_raise_by_type
    self.check_note(RuntimeError, "")
  File "/work/suites/cpython/Lib/test/test_codecs.py", line 2994, in check_note
    with self.assertNoted("encoding", exc_type, msg):
  Fil`
example test: `test_codecs.ExceptionNotesTest.test_raise_by_type`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_raise_by_value self.check_note(RuntimeError(msg), msg) File <str>, line <n>, in check_note with`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_codecs.py", line 3008, in test_raise_by_value
    self.check_note(RuntimeError(msg), msg)
  File "/work/suites/cpython/Lib/test/test_codecs.py", line 2994, in check_note
    with self.assertNoted("encoding", exc_type, msg)`
example test: `test_codecs.ExceptionNotesTest.test_raise_by_value`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_raise_grandchild_subclass_exact_size self.check_note(MyRuntimeError(msg), msg, MyRuntimeError) `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_codecs.py", line 3014, in test_raise_grandchild_subclass_exact_size
    self.check_note(MyRuntimeError(msg), msg, MyRuntimeError)
  File "/work/suites/cpython/Lib/test/test_codecs.py", line 2994, in check_note
    with sel`
example test: `test_codecs.ExceptionNotesTest.test_raise_grandchild_subclass_exact_size`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_raise_subclass_with_weakref_support self.check_note(MyRuntimeError(msg), msg, MyRuntimeError) F`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_codecs.py", line 3020, in test_raise_subclass_with_weakref_support
    self.check_note(MyRuntimeError(msg), msg, MyRuntimeError)
  File "/work/suites/cpython/Lib/test/test_codecs.py", line 2994, in check_note
    with self`
example test: `test_codecs.ExceptionNotesTest.test_raise_subclass_with_weakref_support`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_range_constructor_error_messages with self.assertRaisesRegex( AssertionError: <str> does not ma`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_range.py", line 95, in test_range_constructor_error_messages
    with self.assertRaisesRegex(
AssertionError: "range expected at least 1 argument, got 0" does not match "range() missing 1 required positional argument: 'a'"`
example test: `test_range.RangeTest.test_range_constructor_error_messages`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_readline self.assertEqual( AssertionError: <str> != <str> - aaaaaaau2028xxx + aaaaaaa`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_codecs.py", line 196, in test_readline
    self.assertEqual(
AssertionError: 'aaaaaaau2028xxx\n' != 'aaaaaaa\u2028'
- aaaaaaau2028xxx
+ aaaaaaa`
example test: `test_codecs.RawUnicodeEscapeTest.test_readline`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_readline self.assertEqual(readalllines(s, True, <n>), sexpected) AssertionError: <str> != <str>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_codecs.py", line 176, in test_readline
    self.assertEqual(readalllines(s, True, 10), sexpected)
AssertionError: 'foo\n|bar\r\n|baz\r|spamICg-eg|gs' != 'foo\n|bar\r\n|baz\r|spam\u2028|eggs'
  foo
  |bar
  |baz- |spamICg`
example test: `test_codecs.UTF7Test.test_readline`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_reference_cycle script_helper.assert_python_ok(<str>, textwrap.dedent(r<str><str>/work/suites/c`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_structseq.py", line 214, in test_reference_cycle
    script_helper.assert_python_ok("-c", textwrap.dedent(r"""
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 166, in assert_python_ok
    return _asse`
example test: `test_structseq.StructSeqTest.test_reference_cycle`

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
AssertionError: 1599 != 1607`
example test: `test_bytes.BytesTest.test_repeat_id_preserving`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_reraise_all_named try: NotImplementedError: try star`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_except_star.py", line 449, in test_reraise_all_named
    try:
NotImplementedError: try star`
example test: `test_except_star.TestExceptStarReraise.test_reraise_all_named`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_reraise_all_unnamed try: NotImplementedError: try star`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_except_star.py", line 466, in test_reraise_all_unnamed
    try:
NotImplementedError: try star`
example test: `test_except_star.TestExceptStarReraise.test_reraise_all_unnamed`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_reraise_partial_handle_all_unnamed try: NotImplementedError: try star`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_except_star.py", line 499, in test_reraise_partial_handle_all_unnamed
    try:
NotImplementedError: try star`
example test: `test_except_star.TestExceptStarReraise.test_reraise_partial_handle_all_unnamed`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_reraise_partial_handle_some_named try: NotImplementedError: try star`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_except_star.py", line 514, in test_reraise_partial_handle_some_named
    try:
NotImplementedError: try star`
example test: `test_except_star.TestExceptStarReraise.test_reraise_partial_handle_some_named`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_reraise_partial_handle_some_unnamed try: NotImplementedError: try star`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_except_star.py", line 530, in test_reraise_partial_handle_some_unnamed
    try:
NotImplementedError: try star`
example test: `test_except_star.TestExceptStarReraise.test_reraise_partial_handle_some_unnamed`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_reraise_plain_exception_named try: NotImplementedError: try star`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_except_star.py", line 545, in test_reraise_plain_exception_named
    try:
NotImplementedError: try star`
example test: `test_except_star.TestExceptStarReraise.test_reraise_plain_exception_named`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_reraise_plain_exception_unnamed try: NotImplementedError: try star`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_except_star.py", line 557, in test_reraise_plain_exception_unnamed
    try:
NotImplementedError: try star`
example test: `test_except_star.TestExceptStarReraise.test_reraise_plain_exception_unnamed`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_reraise_some_handle_all_named try: NotImplementedError: try star`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_except_star.py", line 483, in test_reraise_some_handle_all_named
    try:
NotImplementedError: try star`
example test: `test_except_star.TestExceptStarReraise.test_reraise_some_handle_all_named`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_resize_forbidden self.assertRaises(BufferError, resize, <n>) AssertionError: BufferError not ra`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_bytes.py", line 1739, in test_resize_forbidden
    self.assertRaises(BufferError, resize, 11)
AssertionError: BufferError not raised by resize`
example test: `test_bytes.ByteArrayTest.test_resize_forbidden`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_return_in_except_star_block_invalid self.check_invalid( File <str>, line <n>, in check_invalid `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_except_star.py", line 124, in test_return_in_except_star_block_invalid
    self.check_invalid(
  File "/work/suites/cpython/Lib/test/test_except_star.py", line 56, in check_invalid
    with self.assertRaisesRegex(SyntaxErr`
example test: `test_except_star.TestBreakContinueReturnInExceptStarBlock.test_return_in_except_star_block_invalid`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_return_in_except_star_block_valid def test_return_in_except_star_block_valid(self): NotImplemen`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_except_star.py", line 161, in test_return_in_except_star_block_valid
    def test_return_in_except_star_block_valid(self):
NotImplementedError: try star`
example test: `test_except_star.TestBreakContinueReturnInExceptStarBlock.test_return_in_except_star_block_valid`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_safe_interpolation with self.assertRaises(TypeError): AssertionError: TypeError not raised`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_configparser.py", line 960, in test_safe_interpolation
    with self.assertRaises(TypeError):
AssertionError: TypeError not raised`
example test: `test_configparser.ConfigParserTestCaseLegacyInterpolation.test_safe_interpolation`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_script_compiled compiled_name = py_compile.compile(script_name, doraise=True) ^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_runpy.py", line 680, in test_script_compiled
    compiled_name = py_compile.compile(script_name, doraise=True)
                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/opt/elide/lib/resources/python/pytho`
example test: `test_runpy.RunPathTestCase.test_script_compiled`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_scriptdecode process = subprocess.Popen([sys.executable, <str>, <str>], ^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_quopri.py", line 204, in test_scriptdecode
    process = subprocess.Popen([sys.executable, "-mquopri", "-d"],
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/opt/elide/lib/resources/python/pytho`
example test: `test_quopri.QuopriTestCase.test_scriptdecode`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_scriptencode process = subprocess.Popen([sys.executable, <str>], ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_quopri.py", line 187, in test_scriptencode
    process = subprocess.Popen([sys.executable, "-mquopri"],
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/opt/elide/lib/resources/python/python-home/lib/p`
example test: `test_quopri.QuopriTestCase.test_scriptencode`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_seek reader = codecs.getreader(encoding)(io.BytesIO(s.encode(encoding))) ^^^^^^^^^^^^^^^^^^ Not`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_codecs.py", line 2100, in test_seek
    reader = codecs.getreader(encoding)(io.BytesIO(s.encode(encoding)))
                                                   ^^^^^^^^^^^^^^^^^^
NotImplementedError: latin1`
example test: `test_codecs.BasicUnicodeTest.test_seek`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_seek0 with codecs.open(os_helper.TESTFN, <str>, encoding=encoding) as f: ^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_codecs.py", line 2736, in test_seek0
    with codecs.open(os_helper.TESTFN, 'w+', encoding=encoding) as f:
         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
PermissionError: [Errno 13] Permission denied: '@te`
example test: `test_codecs.BomTest.test_seek0`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_set_audio_aif_with_quoted_printable_cte m.set_content(content, <str>, <str>, cte=<str>) File <s`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_email/test_contentmanager.py", line 623, in test_set_audio_aif_with_quoted_printable_cte
    m.set_content(content, 'audio', 'aif', cte='quoted-printable')
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12`
example test: `test_email.test_contentmanager.TestRawDataManager.test_set_audio_aif_with_quoted_printable_cte`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_setslice_negative_steps with self.assertRaises(ValueError): AssertionError: ValueError not rais`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_xml_etree.py", line 3868, in test_setslice_negative_steps
    with self.assertRaises(ValueError):
AssertionError: ValueError not raised`
example test: `test_xml_etree.ElementSlicingTest.test_setslice_negative_steps`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_setslice_steps with self.assertRaises(ValueError): AssertionError: ValueError not raised`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_xml_etree.py", line 3848, in test_setslice_steps
    with self.assertRaises(ValueError):
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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_singleton_groups_are_kept self.doSplitTest( File <str>, line <n>, in doSplitTest self.doSplitTe`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_except_star.py", line 324, in test_singleton_groups_are_kept
    self.doSplitTest(
  File "/work/suites/cpython/Lib/test/test_except_star.py", line 241, in doSplitTest
    self.doSplitTestNamed(exc, T, match_template, rest`
example test: `test_except_star.TestExceptStarSplitSemantics.test_singleton_groups_are_kept`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_specifier_z_error with self.assertRaisesRegex(ValueError, error_msg): AssertionError: <str> doe`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_format.py", line 608, in test_specifier_z_error
    with self.assertRaisesRegex(ValueError, error_msg):
AssertionError: "Invalid format specifier '.*z.*'" does not match "Invalid conversion specification"`
example test: `test_format.FormatTest.test_specifier_z_error`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_syntactical_future_repl p = spawn_python(<str>) ^^^^^^^^^^^^^^^^^^ File <str>, line <n>, in spa`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_future_stmt/test_future.py", line 116, in test_syntactical_future_repl
    p = spawn_python('-i')
        ^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/support/script_helper.py", line 188, in spawn_python
    if`
example test: `test_future_stmt.test_future.FutureTest.test_syntactical_future_repl`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_syntax_warning_infinite_recursion_in_file with temp_cwd(): File <str>, line <n>, in __enter__ r`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_fstring.py", line 1877, in test_syntax_warning_infinite_recursion_in_file
    with temp_cwd():
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/contextlib.py", line 137, in __enter__
    return next(self.`
example test: `test_fstring.TestCase.test_syntax_warning_infinite_recursion_in_file`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_sys_exception_restored self.assertExceptionIsLike(exc, ZeroDivisionError(<str>)) File <str>, li`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_except_star.py", line 1013, in test_sys_exception_restored
    self.assertExceptionIsLike(exc, ZeroDivisionError('division by zero'))
  File "/work/suites/cpython/Lib/test/support/testcase.py", line 79, in assertExceptionI`
example test: `test_except_star.TestExceptStarCleanup.test_sys_exception_restored`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_tab process = subprocess.run(args, input=input_, capture_output=True, text=True, check=True) ^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_json/test_tool.py", line 189, in test_tab
    process = subprocess.run(args, input=input_, capture_output=True, text=True, check=True)
              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`
example test: `test_json.test_tool.TestTool.test_tab`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_text_to_binary_denylists_text_transforms <str>.encode(<str>) TypeError: <str> encoder returned `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_codecs.py", line 2876, in test_text_to_binary_denylists_text_transforms
    "just an example message".encode("rot_13")
TypeError: 'rot_13' encoder returned 'str' instead of 'bytes'; use codecs.encode() to encode to arbitra`
example test: `test_codecs.TransformCodecTest.test_text_to_binary_denylists_text_transforms`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_third_coding_line self.check_script_output(src, br<str>) File <str>, line <n>, in check_script_`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_source_encoding.py", line 199, in test_third_coding_line
    self.check_script_output(src, br"'\xe4'")
  File "/work/suites/cpython/Lib/test/test_source_encoding.py", line 336, in check_script_output
    res = script_helpe`
example test: `test_source_encoding.FileSourceEncodingTest.test_third_coding_line`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_timezone strp_output = _strptime._strptime_time(<str>, <str>) ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_strptime.py", line 440, in test_timezone
    strp_output = _strptime._strptime_time("UTC", "%Z")
                  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/_strptime.py", line 647, in _strptim`
example test: `test_strptime.StrptimeTests.test_timezone`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_tokenizer_fstring_warning_in_first_line with open(TESTFN, <str>) as fd: ^^^^^^^^^^^^^^^^^ Permi`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_source_encoding.py", line 166, in test_tokenizer_fstring_warning_in_first_line
    with open(TESTFN, "w") as fd:
         ^^^^^^^^^^^^^^^^^
PermissionError: [Errno 13] Permission denied: '@test_138_tmpæ'`
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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_try_star def test_try_star(self): NotImplementedError: try star`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_grammar.py", line 1414, in test_try_star
    def test_try_star(self):
NotImplementedError: try star`
example test: `test_grammar.GrammarTests.test_try_star`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_unexpected_end_of_data self.assertCorrectUTF8Decoding(bytes.fromhex(seq), <str>, File <str>, li`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_unicode.py", line 2084, in test_unexpected_end_of_data
    self.assertCorrectUTF8Decoding(bytes.fromhex(seq), '\ufffd',
  File "/work/suites/cpython/Lib/test/test_unicode.py", line 2039, in assertCorrectUTF8Decoding
    se`
example test: `test_unicode.UnicodeTest.test_unexpected_end_of_data`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_unicode_escape self.assertEqual(codecs.unicode_escape_decode(r<str>), (<str>, <n>)) ^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_codecs.py", line 2422, in test_unicode_escape
    self.assertEqual(codecs.unicode_escape_decode(r"\u1234"), ("\u1234", 6))
                     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
TypeError: a bytes-like object is requ`
example test: `test_codecs.TypesTest.test_unicode_escape`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_unicode_in_error_message with self.assertRaisesRegex(ValueError, str_err): AssertionError: <str`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_format.py", line 546, in test_unicode_in_error_message
    with self.assertRaisesRegex(ValueError, str_err):
AssertionError: "Invalid\ format\ specifier\ '%ЫйЯЧ'\ for\ object\ of\ type\ 'str'" does not match "Invalid conve`
example test: `test_format.FormatTest.test_unicode_in_error_message`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_union_isinstance_type_error with self.assertRaises(TypeError): AssertionError: TypeError not ra`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_typing.py", line 1813, in test_union_isinstance_type_error
    with self.assertRaises(TypeError):
AssertionError: TypeError not raised`
example test: `test_typing.UnionTests.test_union_isinstance_type_error`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_valid self.assertEqual(getattr(T, <str>), <n>) ^^^^^^^^^^^^^^^^^^^^ AttributeError: <str> objec`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_unicode_identifiers.py", line 12, in test_valid
    self.assertEqual(getattr(T, "\u03bc"), 2)
                     ^^^^^^^^^^^^^^^^^^^^
AttributeError: 'T' object has no attribute 'μ'`
example test: `test_unicode_identifiers.PEP3131Test.test_valid`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_warning_notimplemented self.assertWarns(DeprecationWarning, bool, NotImplemented) AssertionErro`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_builtin.py", line 2111, in test_warning_notimplemented
    self.assertWarns(DeprecationWarning, bool, NotImplemented)
AssertionError: DeprecationWarning not triggered by bool`
example test: `test_builtin.BuiltinTest.test_warning_notimplemented`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_warnings p = subprocess.Popen([sys.executable, <str>, <str>], **opts) ^^^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_unittest/test_runner.py", line 1335, in test_warnings
    p = subprocess.Popen([sys.executable, '-E', '_test_warnings.py'], **opts)
        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/opt`
example test: `test_unittest.test_runner.Test_TextTestRunner.test_warnings`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_warnings with self.assertWarnsRegex(DeprecationWarning, AssertionError: DeprecationWarning not `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_codecs.py", line 1209, in test_warnings
    with self.assertWarnsRegex(DeprecationWarning,
AssertionError: DeprecationWarning not triggered`
example test: `test_codecs.EscapeDecodeTest.test_warnings`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_weakref p = weakref.proxy(d) ^^^^^^^^^^^^^^^^ TypeError: cannot create weak reference to <str> `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_deque.py", line 866, in test_weakref
    p = weakref.proxy(d)
        ^^^^^^^^^^^^^^^^
TypeError: cannot create weak reference to 'collections.deque' object`
example test: `test_deque.TestSubclass.test_weakref`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_weakref self.assertEqual(flag, True) AssertionError: False != True`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_xml_etree.py", line 2540, in test_weakref
    self.assertEqual(flag, True)
AssertionError: False != True`
example test: `test_xml_etree.BasicElementTest.test_weakref`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_weekday self.roundtrip(<str>, <n>) File <str>, line <n>, in roundtrip strp_output = _strptime._`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_strptime.py", line 371, in test_weekday
    self.roundtrip('%u', 6)
  File "/work/suites/cpython/Lib/test/test_strptime.py", line 304, in roundtrip
    strp_output = _strptime._strptime_time(strf_output, fmt)
             `
example test: `test_strptime.StrptimeTests.test_weekday`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_wrapped_descriptor_inside_classmethod self.assertEqual(Class.outer(), <str>) ^^^^^^^^^^^^^ Type`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_decorators.py", line 328, in test_wrapped_descriptor_inside_classmethod
    self.assertEqual(Class.outer(), 'eggs')
                     ^^^^^^^^^^^^^
TypeError: 'Wrapper' object is not callable`
example test: `test_decorators.TestDecorators.test_wrapped_descriptor_inside_classmethod`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_write encodings.utf_8.StreamReader, encodings.utf_8.StreamWriter) ^^^^^^^^^^^^^^^ AttributeErro`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_codecs.py", line 3400, in test_write
    encodings.utf_8.StreamReader, encodings.utf_8.StreamWriter)
    ^^^^^^^^^^^^^^^
AttributeError: module 'encodings' has no attribute 'utf_8'`
example test: `test_codecs.StreamRecoderTest.test_write`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_write_to_binary_file with open(TESTFN, <str>) as f: ^^^^^^^^^^^^^^^^^^ PermissionError: [Errno `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_xml_etree.py", line 4022, in test_write_to_binary_file
    with open(TESTFN, 'wb') as f:
         ^^^^^^^^^^^^^^^^^^
PermissionError: [Errno 13] Permission denied: '@test_159_tmpæ'`
example test: `test_xml_etree.IOTest.test_write_to_binary_file`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_write_to_binary_file_with_bom with open(TESTFN, <str>) as f: ^^^^^^^^^^^^^^^^^^ PermissionError`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_xml_etree.py", line 4049, in test_write_to_binary_file_with_bom
    with open(TESTFN, 'wb') as f:
         ^^^^^^^^^^^^^^^^^^
PermissionError: [Errno 13] Permission denied: '@test_159_tmpæ'`
example test: `test_xml_etree.IOTest.test_write_to_binary_file_with_bom`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_write_to_binary_file_with_encoding with open(TESTFN, <str>) as f: ^^^^^^^^^^^^^^^^^^ Permission`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_xml_etree.py", line 4031, in test_write_to_binary_file_with_encoding
    with open(TESTFN, 'wb') as f:
         ^^^^^^^^^^^^^^^^^^
PermissionError: [Errno 13] Permission denied: '@test_159_tmpæ'`
example test: `test_xml_etree.IOTest.test_write_to_binary_file_with_encoding`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_write_to_filename tree.write(TESTFN) File <str>, line <n>, in write with _get_writer(file_or_fi`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_xml_etree.py", line 3970, in test_write_to_filename
    tree.write(TESTFN)
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/xml/etree/ElementTree.py", line 717, in write
    with _get_writer(file_or_filen`
example test: `test_xml_etree.IOTest.test_write_to_filename`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_write_to_filename_as_unicode with open(TESTFN, <str>) as f: ^^^^^^^^^^^^^^^^^ PermissionError: `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_xml_etree.py", line 3989, in test_write_to_filename_as_unicode
    with open(TESTFN, 'w') as f:
         ^^^^^^^^^^^^^^^^^
PermissionError: [Errno 13] Permission denied: '@test_159_tmpæ'`
example test: `test_xml_etree.IOTest.test_write_to_filename_as_unicode`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_write_to_filename_with_encoding tree.write(TESTFN, encoding=<str>) File <str>, line <n>, in wri`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_xml_etree.py", line 3977, in test_write_to_filename_with_encoding
    tree.write(TESTFN, encoding='utf-8')
  File "/opt/elide/lib/resources/python/python-home/lib/python3.12/xml/etree/ElementTree.py", line 717, in write
  `
example test: `test_xml_etree.IOTest.test_write_to_filename_with_encoding`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_write_to_text_file with open(TESTFN, <str>, encoding=<str>) as f: ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_xml_etree.py", line 4001, in test_write_to_text_file
    with open(TESTFN, 'w', encoding='utf-8') as f:
         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
PermissionError: [Errno 13] Permission denied: '@test_159_tmpæ'`
example test: `test_xml_etree.IOTest.test_write_to_text_file`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_write_to_user_binary_writer_with_bom self.assertEqual(raw.getvalue(), AssertionError: b<str> !=`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_xml_etree.py", line 4133, in test_write_to_user_binary_writer_with_bom
    self.assertEqual(raw.getvalue(),
AssertionError: b"\xf[200 chars]\n\x00\xff\xfe<\x00s\x00i\x00t\x00e\x00\xff\xfe \x00/\x00>\x00" != b"\xf[200 chars`
example test: `test_xml_etree.IOTest.test_write_to_user_binary_writer_with_bom`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_writelines encodings.ascii.StreamReader, encodings.ascii.StreamWriter) ^^^^^^^^^^^^^^^ Attribut`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_codecs.py", line 3391, in test_writelines
    encodings.ascii.StreamReader, encodings.ascii.StreamWriter)
    ^^^^^^^^^^^^^^^
AttributeError: module 'encodings' has no attribute 'ascii'`
example test: `test_codecs.StreamRecoderTest.test_writelines`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_writing_in_place infile = self._create_infile() ^^^^^^^^^^^^^^^^^^^^^ File <str>, line <n>, in `

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_json/test_tool.py", line 136, in test_writing_in_place
    infile = self._create_infile()
             ^^^^^^^^^^^^^^^^^^^^^
  File "/work/suites/cpython/Lib/test/test_json/test_tool.py", line 97, in _create_infile
    wit`
example test: `test_json.test_tool.TestTool.test_writing_in_place`

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

### 1 × `Traceback (most recent call last): File <str>, line <n>, in testInstallHandler self.assertNotEqual(signal.getsignal(signal.SIGINT), default_handler) AssertionEr`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_unittest/test_break.py", line 55, in testInstallHandler
    self.assertNotEqual(signal.getsignal(signal.SIGINT), default_handler)
AssertionError: <Handlers.SIG_IGN: 1> == <Handlers.SIG_IGN: 1>`
example test: `test_unittest.test_break.TestBreakSignalIgnored.testInstallHandler`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in testLeaks self.assertEqual(Foo.count, <n>) AssertionError: <n> != <n>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_scope.py", line 478, in testLeaks
    self.assertEqual(Foo.count, 0)
AssertionError: 100 != 0`
example test: `test_scope.ScopeTests.testLeaks`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in testMainInstallsHandler self.assertNotEqual(signal.getsignal(signal.SIGINT), default_handler) Assert`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_unittest/test_break.py", line 269, in testMainInstallsHandler
    self.assertNotEqual(signal.getsignal(signal.SIGINT), default_handler)
AssertionError: <Handlers.SIG_IGN: 1> == <Handlers.SIG_IGN: 1>`
example test: `test_unittest.test_break.TestBreakSignalIgnored.testMainInstallsHandler`

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
PermissionError: [Errno 13] Permission denied: '@test_45_tmpæ'`
example test: `test_exceptions.ExceptionTests.testRaising`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in testRemoveHandlerAsDecorator self.assertNotEqual(signal.getsignal(signal.SIGINT), default_handler) A`

distinct messages:
- `Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_unittest/test_break.py", line 290, in testRemoveHandlerAsDecorator
    self.assertNotEqual(signal.getsignal(signal.SIGINT), default_handler)
AssertionError: <Handlers.SIG_IGN: 1> == <Handlers.SIG_IGN: 1>`
example test: `test_unittest.test_break.TestBreakSignalIgnored.testRemoveHandlerAsDecorator`

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
