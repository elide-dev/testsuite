# Impact-ordered failures

## By root-cause signature

### 76 × `Traceback (most recent call last): File <str>, line <n>, in setUp self.codec = codecs.lookup(self.encoding) ~~~~~~~~~~~~~^^^^^^^^^^^^^^^ LookupError: unknown en`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/multibytecodec_support.py", line 28, in setUp
    self.codec = codecs.lookup(self.encoding)
                 ~~~~~~~~~~~~~^^^^^^^^^^^^^^^
LookupError: unknown encoding euc_jisx0213`
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/multibytecodec_support.py", line 28, in setUp
    self.codec = codecs.lookup(self.encoding)
                 ~~~~~~~~~~~~~^^^^^^^^^^^^^^^
LookupError: unknown encoding euc_jis_2004`
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/multibytecodec_support.py", line 28, in setUp
    self.codec = codecs.lookup(self.encoding)
                 ~~~~~~~~~~~~~^^^^^^^^^^^^^^^
LookupError: unknown encoding iso2022_jp_2004`
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/multibytecodec_support.py", line 28, in setUp
    self.codec = codecs.lookup(self.encoding)
                 ~~~~~~~~~~~~~^^^^^^^^^^^^^^^
LookupError: unknown encoding iso2022_jp_3`
example test: `test_codecencodings_jp.Test_EUC_JISX0213.test_callback_None_index`

### 56 × `Traceback (most recent call last): File <str>, line <n>, in test_system_transitions self.assertEquivDatetimes(sdt, tzdt) ~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^ Fi`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/datetimetester.py", line 6416, in test_system_transitions
    self.assertEquivDatetimes(sdt, tzdt)
    ~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test`
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/datetimetester.py", line 6416, in test_system_transitions
    self.assertEquivDatetimes(sdt, tzdt)
    ~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test`
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/datetimetester.py", line 6416, in test_system_transitions
    self.assertEquivDatetimes(sdt, tzdt)
    ~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test`
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/datetimetester.py", line 6416, in test_system_transitions
    self.assertEquivDatetimes(sdt, tzdt)
    ~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test`
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/datetimetester.py", line 6416, in test_system_transitions
    self.assertEquivDatetimes(sdt, tzdt)
    ~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test`
example test: `datetimetester.ZoneInfoTest[Africa/Accra]_Fast.test_system_transitions`

### 54 × `Traceback (most recent call last): File <str>, line <n>, in setUp mp_context=self.get_context(), ~~~~~~~~~~~~~~~~^^ File <str>, line <n>, in get_context return `

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_concurrent_futures/util.py", line 52, in setUp
    mp_context=self.get_context(),
               ~~~~~~~~~~~~~~~~^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_concurrent_fu`
example test: `test_concurrent_futures.test_as_completed.ProcessPoolForkserverAsCompletedTest.test_correct_timeout_exception_msg`

### 54 × `Traceback (most recent call last): File <str>, line <n>, in setUp self.manager = self.get_context().Manager() ~~~~~~~~~~~~~~~~~~~~~~~~~~^^ File <str>, line <n>,`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_concurrent_futures/util.py", line 54, in setUp
    self.manager = self.get_context().Manager()
                   ~~~~~~~~~~~~~~~~~~~~~~~~~~^^
  File "/opt/elide/lib/resources/python/python-home/li`
example test: `test_concurrent_futures.test_as_completed.ProcessPoolForkAsCompletedTest.test_correct_timeout_exception_msg`

### 44 × `Traceback (most recent call last): File <str>, line <n>, in test self.run_test(func, jumpFrom, jumpTo, expected, ~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_sys_settrace.py", line 2083, in test
    self.run_test(func, jumpFrom, jumpTo, expected,
    ~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                  error=error, event=event, decorated=Tr`
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_sys_settrace.py", line 2083, in test
    self.run_test(func, jumpFrom, jumpTo, expected,
    ~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                  error=error, event=event, decorated=Tr`
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_sys_settrace.py", line 2083, in test
    self.run_test(func, jumpFrom, jumpTo, expected,
    ~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                  error=error, event=event, decorated=Tr`
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_sys_settrace.py", line 2083, in test
    self.run_test(func, jumpFrom, jumpTo, expected,
    ~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                  error=error, event=event, decorated=Tr`
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_sys_settrace.py", line 2083, in test
    self.run_test(func, jumpFrom, jumpTo, expected,
    ~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                  error=error, event=event, decorated=Tr`
example test: `test_sys_settrace.JumpTestCase.test_jump_across_with`

### 24 × `Traceback (most recent call last): File <str>, line <n>, in runTest raise self.failureException(self.format_failure(new.getvalue())) AssertionError: Failed doct`

distinct messages:
- `Traceback (most recent call last):
  File "/opt/elide/lib/resources/python/python-home/lib/python3.13/doctest.py", line 2331, in runTest
    raise self.failureException(self.format_failure(new.getvalue()))
AssertionError: Failed doctest test for test.test_extcall
  File "/work/.harness/work/cpython-`
- `Traceback (most recent call last):
  File "/opt/elide/lib/resources/python/python-home/lib/python3.13/doctest.py", line 2331, in runTest
    raise self.failureException(self.format_failure(new.getvalue()))
AssertionError: Failed doctest test for test.test_unpack_ex.__test__.doctests
  File "/work/.h`
- `Traceback (most recent call last):
  File "/opt/elide/lib/resources/python/python-home/lib/python3.13/doctest.py", line 2331, in runTest
    raise self.failureException(self.format_failure(new.getvalue()))
AssertionError: Failed doctest test for test.test_genexps.__test__.doctests
  File "/work/.har`
- `Traceback (most recent call last):
  File "/opt/elide/lib/resources/python/python-home/lib/python3.13/doctest.py", line 2331, in runTest
    raise self.failureException(self.format_failure(new.getvalue()))
AssertionError: Failed doctest test for test.test_doctest.test_doctest.test_CLI
  File "/work/`
- `Traceback (most recent call last):
  File "/opt/elide/lib/resources/python/python-home/lib/python3.13/doctest.py", line 2331, in runTest
    raise self.failureException(self.format_failure(new.getvalue()))
AssertionError: Failed doctest test for test.test_doctest.test_doctest.test_DocTestFinder.non_`
example test: `test_extcall`

### 21 × `ValueError: Can<str>t jump from <str> event."`

distinct messages:
- `ValueError: Can't jump from "line" event.

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_sys_settrace.py", line 2083, in test
    self.run_test(func, jumpFrom, jumpTo, expect`
- `ValueError: Can't jump from "line" event.

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_sys_settrace.py", line 2095, in test
    self.run_async_test(func, jumpFrom, jumpTo, `
- `ValueError: Can't jump from "line" event.

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_sys_settrace.py", line 2083, in test
    self.run_test(func, jumpFrom, jumpTo, expect`
- `ValueError: Can't jump from "line" event.

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_sys_settrace.py", line 2095, in test
    self.run_async_test(func, jumpFrom, jumpTo, `
- `ValueError: Can't jump from "line" event.

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_sys_settrace.py", line 2083, in test
    self.run_test(func, jumpFrom, jumpTo, expect`
example test: `test_sys_settrace.JumpTestCase.test_jump_with_null_on_stack_load_attr`

### 16 × `Traceback (most recent call last): File <str>, line <n>, in test_callback_long_index self.assertRaises(IndexError, self.encode, self.unmappedunicode, ~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/multibytecodec_support.py", line 136, in test_callback_long_index
    self.assertRaises(IndexError, self.encode, self.unmappedunicode,
    ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`
example test: `test_codecencodings_jp.Test_CP932.test_callback_long_index`

### 16 × `Traceback (most recent call last): File <str>, line <n>, in test_incrementalencoder_del_segfault with self.assertRaises(AttributeError): ~~~~~~~~~~~~~~~~~^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/multibytecodec_support.py", line 282, in test_incrementalencoder_del_segfault
    with self.assertRaises(AttributeError):
         ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^
AssertionError: AttributeError not ra`
example test: `test_codecencodings_jp.Test_CP932.test_incrementalencoder_del_segfault`

### 16 × `Traceback (most recent call last): File <str>, line <n>, in test_streamreader data = func(sizehint) TypeError: <str> not supported between instances of <str> an`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/multibytecodec_support.py", line 239, in test_streamreader
    data = func(sizehint)
TypeError: '>=' not supported between instances of 'NoneType' and 'int'`
example test: `test_codecencodings_jp.Test_CP932.test_streamreader`

### 14 × `Traceback (most recent call last): File <str>, line <n>, in test self.run_async_test(func, jumpFrom, jumpTo, expected, ~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_sys_settrace.py", line 2095, in test
    self.run_async_test(func, jumpFrom, jumpTo, expected,
    ~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                  error=error, event=event, `
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_sys_settrace.py", line 2095, in test
    self.run_async_test(func, jumpFrom, jumpTo, expected,
    ~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                  error=error, event=event, `
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_sys_settrace.py", line 2095, in test
    self.run_async_test(func, jumpFrom, jumpTo, expected,
    ~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                  error=error, event=event, `
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_sys_settrace.py", line 2095, in test
    self.run_async_test(func, jumpFrom, jumpTo, expected,
    ~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                  error=error, event=event, `
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_sys_settrace.py", line 2095, in test
    self.run_async_test(func, jumpFrom, jumpTo, expected,
    ~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                  error=error, event=event, `
example test: `test_sys_settrace.JumpTestCase.test_jump_across_async_with`

### 14 × `Traceback (most recent call last): File <str>, line <n>, in test_buffer self.assertRaises(BufferError, a.append, a[<n>]) ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_array.py", line 1115, in test_buffer
    self.assertRaises(BufferError, a.append, a[0])
    ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: BufferError not raised by append`
example test: `test_array.ByteTest.test_buffer`

### 14 × `Traceback (most recent call last): File <str>, line <n>, in test_clear with self.assertRaises(BufferError): ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^ AssertionError: Buffe`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_array.py", line 1038, in test_clear
    with self.assertRaises(BufferError):
         ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^
AssertionError: BufferError not raised`
example test: `test_array.ByteTest.test_clear`

### 14 × `Traceback (most recent call last): File <str>, line <n>, in test_reverse_iterator_picking d = pickle.dumps((itorig, orig), proto) File <str>, line <n>, in _redu`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_array.py", line 388, in test_reverse_iterator_picking
    d = pickle.dumps((itorig, orig), proto)
  File "/opt/elide/lib/resources/python/python-home/lib/python3.13/copyreg.py", line 70, in _reduce`
example test: `test_array.ByteTest.test_reverse_iterator_picking`

### 14 × `Traceback (most recent call last): File <str>, line <n>, in test_weakref p = weakref.proxy(s) TypeError: cannot create weak reference to <str> object`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_array.py", line 1143, in test_weakref
    p = weakref.proxy(s)
TypeError: cannot create weak reference to 'array.array' object`
example test: `test_array.ByteTest.test_weakref`

### 13 × `Traceback (most recent call last): File <str>, line <n>, in setUp self.old_garbage = gc.garbage[:] ^^^^^^^^^^ AttributeError: module <str> has no attribute <str`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_finalization.py", line 136, in setUp
    self.old_garbage = gc.garbage[:]
                       ^^^^^^^^^^
AttributeError: module 'gc' has no attribute 'garbage'`
example test: `test_finalization.CycleChainFinalizationTest.test_heterogenous_resurrect_one`

### 13 × `Traceback (most recent call last): File <str>, line <n>, in setUp tracemalloc.start(<n>) ~~~~~~~~~~~~~~~~~^^^ AttributeError: module <str> has no attribute <str`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_tracemalloc.py", line 118, in setUp
    tracemalloc.start(1)
    ~~~~~~~~~~~~~~~~~^^^
AttributeError: module 'tracemalloc' has no attribute 'start'`
example test: `test_tracemalloc.TestTracemallocEnabled.test_clear_traces`

### 11 × `Traceback (most recent call last): File <str>, line <n>, in wrapper return func_or_class(*args, **kwargs) File <str>, line <n>, in setUpClass super(func_or_clas`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/support/hashlib_helper.py", line 49, in wrapper
    return func_or_class(*args, **kwargs)
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/support/hashlib_helper.py", line 29, in setUpClas`
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/support/hashlib_helper.py", line 49, in wrapper
    return func_or_class(*args, **kwargs)
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/support/hashlib_helper.py", line 29, in setUpClas`
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/support/hashlib_helper.py", line 49, in wrapper
    return func_or_class(*args, **kwargs)
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/support/hashlib_helper.py", line 29, in setUpClas`
example test: `setUpClass (test.test_multiprocessing_fork.test_manager.WithManagerTestBarrier)`

### 10 × `Traceback (most recent call last): File <str>, line <n>, in test_strftime_special self.assertEqual(t.strftime(<str>), <str>) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/datetimetester.py", line 2881, in test_strftime_special
    self.assertEqual(t.strftime('\ud83d\udc0d'), '\ud83d\udc0d')
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: `
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/datetimetester.py", line 3683, in test_strftime_special
    self.assertEqual(t.strftime('\ud83d\udc0d'), '\ud83d\udc0d')
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: `
example test: `datetimetester.TestDateTime_Pure.test_strftime_special`

### 9 × `Traceback (most recent call last): File <str>, line <n>, in test_errorhandle self.assertEqual(result, expected, ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^ <str> ^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/multibytecodec_support.py", line 60, in test_errorhandle
    self.assertEqual(result, expected,
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^
                     '%a.decode(%r, %r)=%a != %a'
                 `
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/multibytecodec_support.py", line 60, in test_errorhandle
    self.assertEqual(result, expected,
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^
                     '%a.decode(%r, %r)=%a != %a'
                 `
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/multibytecodec_support.py", line 60, in test_errorhandle
    self.assertEqual(result, expected,
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^
                     '%a.decode(%r, %r)=%a != %a'
                 `
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/multibytecodec_support.py", line 60, in test_errorhandle
    self.assertEqual(result, expected,
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^
                     '%a.decode(%r, %r)=%a != %a'
                 `
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/multibytecodec_support.py", line 60, in test_errorhandle
    self.assertEqual(result, expected,
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^
                     '%a.decode(%r, %r)=%a != %a'
                 `
example test: `test_codecencodings_jp.Test_EUC_JP_COMPAT.test_errorhandle`

### 7 × `Traceback (most recent call last): File <str>, line <n>, in test_error_through_destructor self.assertEqual(cm.unraisable.exc_type, OSError) ^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_io.py", line 1300, in test_error_through_destructor
    self.assertEqual(cm.unraisable.exc_type, OSError)
                     ^^^^^^^^^^^^^^^^^^^^^^
AttributeError: 'NoneType' object has no attrib`
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_io.py", line 3157, in test_error_through_destructor
    self.assertEqual(cm.unraisable.exc_type, OSError)
                     ^^^^^^^^^^^^^^^^^^^^^^
AttributeError: 'NoneType' object has no attrib`
example test: `test_io.CBufferedReaderTest.test_error_through_destructor`

### 7 × `Traceback (most recent call last): File <str>, line <n>, in test_mapping_file self._test_mapping_file_plain() ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^^ File <str>, line <`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/multibytecodec_support.py", line 322, in test_mapping_file
    self._test_mapping_file_plain()
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/multibyt`
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/multibytecodec_support.py", line 322, in test_mapping_file
    self._test_mapping_file_plain()
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/multibyt`
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/multibytecodec_support.py", line 322, in test_mapping_file
    self._test_mapping_file_plain()
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/multibyt`
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/multibytecodec_support.py", line 322, in test_mapping_file
    self._test_mapping_file_plain()
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/multibyt`
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/multibytecodec_support.py", line 322, in test_mapping_file
    self._test_mapping_file_plain()
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/multibyt`
example test: `test_codecmaps_tw.TestCP950Map.test_mapping_file`

### 6 × `Traceback (most recent call last): File <str>, line <n>, in inner return func(*args, **kwds) File <str>, line <n>, in test_astimezone self.assertEqual(dt.astime`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/support/__init__.py", line 1087, in inner
    return func(*args, **kwds)
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/datetimetester.py", line 2962, in test_astimezone
    self.assertE`
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/support/__init__.py", line 1087, in inner
    return func(*args, **kwds)
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/datetimetester.py", line 2962, in test_astimezone
    self.assertE`
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/support/__init__.py", line 1087, in inner
    return func(*args, **kwds)
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/datetimetester.py", line 2962, in test_astimezone
    self.assertE`
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/support/__init__.py", line 1087, in inner
    return func(*args, **kwds)
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/datetimetester.py", line 2962, in test_astimezone
    self.assertE`
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/support/__init__.py", line 1087, in inner
    return func(*args, **kwds)
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/datetimetester.py", line 2962, in test_astimezone
    self.assertE`
example test: `datetimetester.TestDateTime_Pure.test_astimezone`

### 6 × `Traceback (most recent call last): File <str>, line <n>, in inner return func(*args, **kwds) File <str>, line <n>, in test_timestamp_naive self.assertEqual(t.ti`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/support/__init__.py", line 1087, in inner
    return func(*args, **kwds)
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/datetimetester.py", line 2496, in test_timestamp_naive
    self.as`
example test: `datetimetester.TestDateTime_Pure.test_timestamp_naive`

### 6 × `Traceback (most recent call last): File <str>, line <n>, in test_hash_use_after_free self.assertRaises(BufferError, hash, mv) ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_memoryview.py", line 358, in test_hash_use_after_free
    self.assertRaises(BufferError, hash, mv)
    ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: BufferError not raised by hash`
example test: `test_memoryview.ArrayMemorySliceSliceTest.test_hash_use_after_free`

### 6 × `Traceback (most recent call last): File <str>, line <n>, in test_hex_use_after_free self.assertRaises(BufferError, mv.hex, S(b<str>)) ~~~~~~~~~~~~~~~~~^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_memoryview.py", line 428, in test_hex_use_after_free
    self.assertRaises(BufferError, mv.hex, S(b':'))
    ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: BufferError not raised b`
example test: `test_memoryview.ArrayMemorySliceSliceTest.test_hex_use_after_free`

### 6 × `Traceback (most recent call last): File <str>, line <n>, in test_lone_surrogates self.assertEqual(<str>.encode(self.encoding, <str>), ~~~~~~~~~~~~~~~~^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_codecs.py", line 395, in test_lone_surrogates
    self.assertEqual("[\uDC80]".encode(self.encoding, "namereplace"),
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
           `
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_codecs.py", line 395, in test_lone_surrogates
    self.assertEqual("[\uDC80]".encode(self.encoding, "namereplace"),
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
           `
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_codecs.py", line 393, in test_lone_surrogates
    self.assertEqual("[\uDC80]".encode(self.encoding, "backslashreplace"),
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 `
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_codecs.py", line 395, in test_lone_surrogates
    self.assertEqual("[\uDC80]".encode(self.encoding, "namereplace"),
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
           `
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_codecs.py", line 395, in test_lone_surrogates
    self.assertEqual("[\uDC80]".encode(self.encoding, "namereplace"),
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
           `
example test: `test_codecs.UTF16BETest.test_lone_surrogates`

### 6 × `Traceback (most recent call last): File <str>, line <n>, in test_override_destructor self.assertEqual(record, [<n>, <n>, <n>]) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_io.py", line 1278, in test_override_destructor
    self.assertEqual(record, [1, 2, 3])
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^
AssertionError: Lists differ: [] != [1, 2, 3]

Second list contains 3 `
example test: `test_io.CBufferedReaderTest.test_override_destructor`

### 6 × `Traceback (most recent call last): File <str>, line <n>, in test_randomized_hash self.assertNotEqual(run1, run2) ~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^ AssertionError:`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_hash.py", line 195, in test_randomized_hash
    self.assertNotEqual(run1, run2)
    ~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^
AssertionError: 126145 == 126145`
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_hash.py", line 195, in test_randomized_hash
    self.assertNotEqual(run1, run2)
    ~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^
AssertionError: 1852382498353401353 == 1852382498353401353`
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_hash.py", line 195, in test_randomized_hash
    self.assertNotEqual(run1, run2)
    ~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^
AssertionError: -1604500253 == -1604500253`
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_hash.py", line 195, in test_randomized_hash
    self.assertNotEqual(run1, run2)
    ~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^
AssertionError: 1520705723458108147 == 1520705723458108147`
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_hash.py", line 195, in test_randomized_hash
    self.assertNotEqual(run1, run2)
    ~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^
AssertionError: 96354 == 96354`
example test: `test_hash.BytesHashRandomizationTests.test_randomized_hash`

### 6 × `Traceback (most recent call last): File <str>, line <n>, in test_readall self._test_reading( ~~~~~~~~~~~~~~~~~~^ data_to_write=b<str>, ^^^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_file_eintr.py", line 202, in test_readall
    self._test_reading(
    ~~~~~~~~~~~~~~~~~~^
            data_to_write=b'hello\nworld!',
            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
            read_an`
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_file_eintr.py", line 173, in test_readall
    self._test_reading(
    ~~~~~~~~~~~~~~~~~~^
            data_to_write=b'hello\nworld!',
            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
            read_an`
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_file_eintr.py", line 241, in test_readall
    self._test_reading(
    ~~~~~~~~~~~~~~~~~~^
            data_to_write=b'hello\nworld!',
            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
            read_an`
example test: `test_file_eintr.CTestBufferedIOSignalInterrupt.test_readall`

### 6 × `Traceback (most recent call last): File <str>, line <n>, in test_readline self._test_reading( ~~~~~~~~~~~~~~~~~~^ data_to_write=b<str>, ^^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_file_eintr.py", line 157, in test_readline
    self._test_reading(
    ~~~~~~~~~~~~~~~~~~^
            data_to_write=b'hello, world!',
            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
            read_a`
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_file_eintr.py", line 225, in test_readline
    self._test_reading(
    ~~~~~~~~~~~~~~~~~~^
            data_to_write=b'hello, world!',
            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
            read_a`
example test: `test_file_eintr.CTestBufferedIOSignalInterrupt.test_readline`

### 6 × `Traceback (most recent call last): File <str>, line <n>, in test_readlines self._test_reading( ~~~~~~~~~~~~~~~~~~^ data_to_write=b<str>, ^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_file_eintr.py", line 165, in test_readlines
    self._test_reading(
    ~~~~~~~~~~~~~~~~~~^
            data_to_write=b'hello\nworld!',
            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
            read_`
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_file_eintr.py", line 233, in test_readlines
    self._test_reading(
    ~~~~~~~~~~~~~~~~~~^
            data_to_write=b'hello\r\nworld!',
            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
            r`
example test: `test_file_eintr.CTestBufferedIOSignalInterrupt.test_readlines`

### 6 × `Traceback (most recent call last): File <str>, line <n>, in test_setitem_writable self.assertRaises(NotImplementedError, setitem, slices, b<str>) ~~~~~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_memoryview.py", line 122, in test_setitem_writable
    self.assertRaises(NotImplementedError, setitem, slices, b"a")
    ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/opt/e`
example test: `test_memoryview.ArrayMemorySliceSliceTest.test_setitem_writable`

### 6 × `TypeError: MethClass.meth_noargs() takes <n> positional argument but <n> were given During handling of the above exception, another exception occurred: Tracebac`

distinct messages:
- `TypeError: MethClass.meth_noargs() takes 1 positional argument but 2 were given

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_call.py", line 339, in test_noargs_error_arg
  `
- `TypeError: MethClass.meth_noargs() takes 1 positional argument but 3 were given

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_call.py", line 345, in test_noargs_error_arg2
 `
- `TypeError: MethClass.meth_noargs() takes 1 positional argument but 4 were given

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_call.py", line 351, in test_noargs_error_ext
  `
example test: `test_call.TestCallingConventionsClass.test_noargs_error_arg`

### 5 × `Traceback (most recent call last): File <str>, line <n>, in test_garbage_collection with warnings_helper.check_warnings((<str>, ResourceWarning)): ~~~~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_io.py", line 786, in test_garbage_collection
    with warnings_helper.check_warnings(('', ResourceWarning)):
         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^
  File "/opt/elide/lib/re`
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_io.py", line 1803, in test_garbage_collection
    with warnings_helper.check_warnings(('', ResourceWarning)):
         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^
  File "/opt/elide/lib/r`
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_io.py", line 2152, in test_garbage_collection
    with warnings_helper.check_warnings(('', ResourceWarning)):
         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^
  File "/opt/elide/lib/r`
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_io.py", line 4082, in test_garbage_collection
    with warnings_helper.check_warnings(('', ResourceWarning)):
         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^
  File "/opt/elide/lib/r`
example test: `test_io.CIOTest.test_garbage_collection`

### 4 × `binascii.Error: IllegalArgumentException: Input byte array has incorrect ending byte at <n> Java stack trace: java.lang.IllegalArgumentException: Input byte arr`

distinct messages:
- `binascii.Error: IllegalArgumentException: Input byte array has incorrect ending byte at 4

Java stack trace:
java.lang.IllegalArgumentException: Input byte array has incorrect ending byte at 4
	at java.base@25.0.4.1.1/java.util.Base64$Decoder.decode0(Base64.java:880)
	at java.base@25.0.4.1.1/java.ut`
- `binascii.Error: IllegalArgumentException: Input byte array has incorrect ending byte at 4

Java stack trace:
java.lang.IllegalArgumentException: Input byte array has incorrect ending byte at 4
	at java.base@25.0.4.1.1/java.util.Base64$Decoder.decode0(Base64.java:880)
	at java.base@25.0.4.1.1/java.ut`
- `binascii.Error: IllegalArgumentException: Input byte array has incorrect ending byte at 4

Java stack trace:
java.lang.IllegalArgumentException: Input byte array has incorrect ending byte at 4
	at java.base@25.0.4.1.1/java.util.Base64$Decoder.decode0(Base64.java:880)
	at java.base@25.0.4.1.1/java.ut`
- `binascii.Error: IllegalArgumentException: Input byte array has incorrect ending byte at 4

Java stack trace:
java.lang.IllegalArgumentException: Input byte array has incorrect ending byte at 4
	at java.base@25.0.4.1.1/java.util.Base64$Decoder.decode0(Base64.java:880)
	at java.base@25.0.4.1.1/java.ut`
example test: `test_binascii.ArrayBinASCIITest.test_base64_excess_data`

### 4 × `binascii.Error: Invalid base64-encoded string: number of data characters (<n>) cannot be <n> more than a multiple of <n> During handling of the above exception,`

distinct messages:
- `binascii.Error: Invalid base64-encoded string: number of data characters (1) cannot be 1 more than a multiple of 4

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_binascii.py"`
example test: `test_binascii.ArrayBinASCIITest.test_base64errors`

### 4 × `ModuleNotFoundError(<str>)`

distinct messages:
- `ModuleNotFoundError("No module named '_testinternalcapi'")`
- `ModuleNotFoundError("No module named '_symtable'")`
- `ModuleNotFoundError("No module named 'pyclbr'")`
example test: `test_compile`

### 4 × `Traceback (most recent call last): File <str>, line <n>, in run return self._loop.run_until_complete(task) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^ File <str>, line `

distinct messages:
- `Traceback (most recent call last):
  File "/opt/elide/lib/resources/python/python-home/lib/python3.13/asyncio/runners.py", line 119, in run
    return self._loop.run_until_complete(task)
           ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^
  File "/opt/elide/lib/resources/python/python-home/lib/python3.13`
- `Traceback (most recent call last):
  File "/opt/elide/lib/resources/python/python-home/lib/python3.13/asyncio/runners.py", line 119, in run
    return self._loop.run_until_complete(task)
           ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^
  File "/opt/elide/lib/resources/python/python-home/lib/python3.13`
- `Traceback (most recent call last):
  File "/opt/elide/lib/resources/python/python-home/lib/python3.13/asyncio/runners.py", line 119, in run
    return self._loop.run_until_complete(task)
           ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^
  File "/opt/elide/lib/resources/python/python-home/lib/python3.13`
- `Traceback (most recent call last):
  File "/opt/elide/lib/resources/python/python-home/lib/python3.13/asyncio/runners.py", line 119, in run
    return self._loop.run_until_complete(task)
           ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^
  File "/opt/elide/lib/resources/python/python-home/lib/python3.13`
example test: `test_inspect.test_inspect.TestGetAsyncGenState.test_closed_after_exhaustion`

### 4 × `Traceback (most recent call last): File <str>, line <n>, in setUp self.mgr = multiprocessing.Manager() ~~~~~~~~~~~~~~~~~~~~~~~^^ File <str>, line <n>, in Manage`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/_test_multiprocessing.py", line 5184, in setUp
    self.mgr = multiprocessing.Manager()
               ~~~~~~~~~~~~~~~~~~~~~~~^^
  File "/opt/elide/lib/resources/python/python-home/lib/python3.13/multip`
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/_test_multiprocessing.py", line 3406, in setUp
    self.mgr = multiprocessing.Manager()
               ~~~~~~~~~~~~~~~~~~~~~~~^^
  File "/opt/elide/lib/resources/python/python-home/lib/python3.13/multip`
example test: `test_multiprocessing_fork.test_misc.TestInitializers.test_manager_initializer`

### 4 × `Traceback (most recent call last): File <str>, line <n>, in test_13_genexp self.run_test(generator_example) ~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^ File <str>, line <n`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_sys_settrace.py", line 450, in test_13_genexp
    self.run_test(generator_example)
    ~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_sys_settr`
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_sys_settrace.py", line 450, in test_13_genexp
    self.run_test(generator_example)
    ~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_sys_settr`
example test: `test_sys_settrace.SkipLineEventsTraceTestCase.test_13_genexp`

### 4 × `Traceback (most recent call last): File <str>, line <n>, in test_20_async_for_loop self.compare_events(doit_async.__code__.co_firstlineno, ~~~~~~~~~~~~~~~~~~~^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_sys_settrace.py", line 641, in test_20_async_for_loop
    self.compare_events(doit_async.__code__.co_firstlineno,
    ~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                       `
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_sys_settrace.py", line 641, in test_20_async_for_loop
    self.compare_events(doit_async.__code__.co_firstlineno,
    ~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                       `
example test: `test_sys_settrace.SkipLineEventsTraceTestCase.test_20_async_for_loop`

### 4 × `Traceback (most recent call last): File <str>, line <n>, in test_async_for_backwards_jump_has_no_line self.compare_events(f.__code__.co_firstlineno, ~~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_sys_settrace.py", line 693, in test_async_for_backwards_jump_has_no_line
    self.compare_events(f.__code__.co_firstlineno,
    ~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^
                      `
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_sys_settrace.py", line 693, in test_async_for_backwards_jump_has_no_line
    self.compare_events(f.__code__.co_firstlineno,
    ~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^
                      `
example test: `test_sys_settrace.SkipLineEventsTraceTestCase.test_async_for_backwards_jump_has_no_line`

### 4 × `Traceback (most recent call last): File <str>, line <n>, in test_base64_strict_mode assertExcessPadding(b<str>, b<str>) ~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^ File`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_binascii.py", line 146, in test_base64_strict_mode
    assertExcessPadding(b'ab===', b'i')
    ~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/tes`
example test: `test_binascii.ArrayBinASCIITest.test_base64_strict_mode`

### 4 × `Traceback (most recent call last): File <str>, line <n>, in test_base64invalid b = binascii.a2b_base64(a) binascii.Error: IllegalArgumentException: Input byte a`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_binascii.py", line 112, in test_base64invalid
    b = binascii.a2b_base64(a)
binascii.Error: IllegalArgumentException: Input byte array has wrong 4-byte ending unit

Java stack trace:
java.lang.Ill`
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_binascii.py", line 112, in test_base64invalid
    b = binascii.a2b_base64(a)
binascii.Error: IllegalArgumentException: Input byte array has wrong 4-byte ending unit

Java stack trace:
java.lang.Ill`
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_binascii.py", line 112, in test_base64invalid
    b = binascii.a2b_base64(a)
binascii.Error: IllegalArgumentException: Input byte array has wrong 4-byte ending unit

Java stack trace:
java.lang.Ill`
example test: `test_binascii.ArrayBinASCIITest.test_base64invalid`

### 4 × `Traceback (most recent call last): File <str>, line <n>, in test_destructor self.assertEqual(b<str>, writer._write_stack[<n>]) ~~~~~~~~~~~~~~~~~~~^^^ IndexError`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_io.py", line 2017, in test_destructor
    self.assertEqual(b"abc", writer._write_stack[0])
                             ~~~~~~~~~~~~~~~~~~~^^^
IndexError: list index out of range`
example test: `test_io.CBufferedWriterTest.test_destructor`

### 4 × `Traceback (most recent call last): File <str>, line <n>, in test_empty_string f = getattr(binascii, func) AttributeError: module <str> has no attribute <str>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_binascii.py", line 453, in test_empty_string
    f = getattr(binascii, func)
AttributeError: module 'binascii' has no attribute 'a2b_qp'`
example test: `test_binascii.ArrayBinASCIITest.test_empty_string`

### 4 × `Traceback (most recent call last): File <str>, line <n>, in test_functions self.assertTrue(hasattr(getattr(binascii, name), <str>)) ~~~~~~~^^^^^^^^^^^^^^^^ Attr`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_binascii.py", line 47, in test_functions
    self.assertTrue(hasattr(getattr(binascii, name), '__call__'))
                            ~~~~~~~^^^^^^^^^^^^^^^^
AttributeError: module 'binascii' has `
example test: `test_binascii.ArrayBinASCIITest.test_functions`

### 4 × `Traceback (most recent call last): File <str>, line <n>, in test_hex_separator self.assertEqual(binascii.hexlify(self.type2test(s), <str>, <n>), expected8) ~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_binascii.py", line 324, in test_hex_separator
    self.assertEqual(binascii.hexlify(self.type2test(s), '.', 8), expected8)
                     ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^
NotImplem`
example test: `test_binascii.ArrayBinASCIITest.test_hex_separator`

### 4 × `Traceback (most recent call last): File <str>, line <n>, in test_incrementaldecoder self.assertEqual(ostream.getvalue(), self.tstring[<n>]) ~~~~~~~~~~~~~~~~^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/multibytecodec_support.py", line 208, in test_incrementaldecoder
    self.assertEqual(ostream.getvalue(), self.tstring[1])
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: b'\xe`
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/multibytecodec_support.py", line 208, in test_incrementaldecoder
    self.assertEqual(ostream.getvalue(), self.tstring[1])
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: b'Pyt`
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/multibytecodec_support.py", line 208, in test_incrementaldecoder
    self.assertEqual(ostream.getvalue(), self.tstring[1])
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: b"!] `
example test: `test_codecencodings_kr.Test_EUCKR.test_incrementaldecoder`

### 4 × `Traceback (most recent call last): File <str>, line <n>, in test_qp a2b_qp = binascii.a2b_qp ^^^^^^^^^^^^^^^ AttributeError: module <str> has no attribute <str>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_binascii.py", line 330, in test_qp
    a2b_qp = binascii.a2b_qp
             ^^^^^^^^^^^^^^^
AttributeError: module 'binascii' has no attribute 'a2b_qp'`
example test: `test_binascii.ArrayBinASCIITest.test_qp`

### 4 × `Traceback (most recent call last): File <str>, line <n>, in test_repr_safety_against_reentrant_mutation self.assertEqual(repr(g_partial),<str>) ~~~~~~~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_functools.py", line 459, in test_repr_safety_against_reentrant_mutation
    self.assertEqual(repr(g_partial),"functools.partial(Function(old_function), EvilObject, arg=None)")
    ~~~~~~~~~~~~~~~~^`
example test: `test_functools.TestPartialC.test_repr_safety_against_reentrant_mutation`

### 4 × `Traceback (most recent call last): File <str>, line <n>, in test_returned_value a2b = getattr(binascii, fa) AttributeError: module <str> has no attribute <str>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_binascii.py", line 55, in test_returned_value
    a2b = getattr(binascii, fa)
AttributeError: module 'binascii' has no attribute 'a2b_qp'`
example test: `test_binascii.ArrayBinASCIITest.test_returned_value`

### 4 × `Traceback (most recent call last): File <str>, line <n>, in test_unicode_a2b a2b = getattr(binascii, fa) AttributeError: module <str> has no attribute <str>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_binascii.py", line 477, in test_unicode_a2b
    a2b = getattr(binascii, fa)
AttributeError: module 'binascii' has no attribute 'a2b_qp'`
example test: `test_binascii.ArrayBinASCIITest.test_unicode_a2b`

### 4 × `Traceback (most recent call last): File <str>, line <n>, in test_unicode_b2a self.assertRaises(TypeError, getattr(binascii, func), <str>) ~~~~~~~^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_binascii.py", line 466, in test_unicode_b2a
    self.assertRaises(TypeError, getattr(binascii, func), "test")
                                 ~~~~~~~^^^^^^^^^^^^^^^^
AttributeError: module 'binasc`
example test: `test_binascii.ArrayBinASCIITest.test_unicode_b2a`

### 4 × `Traceback (most recent call last): File <str>, line <n>, in test_uu a = binascii.b2a_uu(b, backtick=backtick) ^^^^^^^^^^^^^^^ AttributeError: module <str> has n`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_binascii.py", line 229, in test_uu
    a = binascii.b2a_uu(b, backtick=backtick)
        ^^^^^^^^^^^^^^^
AttributeError: module 'binascii' has no attribute 'b2a_uu'`
example test: `test_binascii.ArrayBinASCIITest.test_uu`

### 4 × `Traceback (most recent call last): File <str>, line <n>, in wrapper return fxn(*args, **kwargs) File <str>, line <n>, in f self.assertEqual(sorted(os.listdir(se`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_py_compile.py", line 22, in wrapper
    return fxn(*args, **kwargs)
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_compileall.py", line 630, in f
    self.assertEqual(sorted(os`
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_py_compile.py", line 22, in wrapper
    return fxn(*args, **kwargs)
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_compileall.py", line 630, in f
    self.assertEqual(sorted(os`
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_py_compile.py", line 32, in wrapper
    return fxn(*args, **kwargs)
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_compileall.py", line 630, in f
    self.assertEqual(sorted(os`
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_py_compile.py", line 32, in wrapper
    return fxn(*args, **kwargs)
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_compileall.py", line 630, in f
    self.assertEqual(sorted(os`
example test: `test_compileall.CommandLineTestsNoSourceEpoch.test_pep3147_paths_doubleoptimize`

### 4 × `Traceback (most recent call last): File <str>, line <n>, in wrapper return fxn(*args, **kwargs) File <str>, line <n>, in test_strip_and_prepend self.assertIn( ~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_py_compile.py", line 22, in wrapper
    return fxn(*args, **kwargs)
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_compileall.py", line 888, in test_strip_and_prepend
    self.`
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_py_compile.py", line 32, in wrapper
    return fxn(*args, **kwargs)
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_compileall.py", line 888, in test_strip_and_prepend
    self.`
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_py_compile.py", line 32, in wrapper
    return fxn(*args, **kwargs)
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_compileall.py", line 417, in test_strip_and_prepend
    self.`
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_py_compile.py", line 22, in wrapper
    return fxn(*args, **kwargs)
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_compileall.py", line 417, in test_strip_and_prepend
    self.`
example test: `test_compileall.CommandLineTestsNoSourceEpoch.test_strip_and_prepend`

### 4 × `TypeError: MethClass.meth_o() got an unexpected keyword argument <str> During handling of the above exception, another exception occurred: Traceback (most recen`

distinct messages:
- `TypeError: MethClass.meth_o() got an unexpected keyword argument 'k'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_call.py", line 327, in test_o_error_arg_kw
    self.assert`
- `TypeError: MethClass.meth_o() got an unexpected keyword argument 'k'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_call.py", line 321, in test_o_error_kw
    self.assertRais`
example test: `test_call.TestCallingConventionsClass.test_o_error_arg_kw`

### 4 × `TypeError: MethClass.meth_o() takes <n> positional arguments but <n> were given During handling of the above exception, another exception occurred: Traceback (m`

distinct messages:
- `TypeError: MethClass.meth_o() takes 2 positional arguments but 4 were given

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_call.py", line 315, in test_o_error_ext
    self.as`
- `TypeError: MethClass.meth_o() takes 2 positional arguments but 3 were given

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_call.py", line 309, in test_o_error_two_args
    se`
example test: `test_call.TestCallingConventionsClass.test_o_error_ext`

### 4 × `ValueError: Can<str>t jump into an <str> block as there<str>t jump from <str> event."`

distinct messages:
- `ValueError: Can't jump from "line" event.

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_sys_settrace.py", line 2083, in test
    self.run_test(func, jumpFrom, jumpTo, expect`
example test: `test_sys_settrace.JumpTestCase.test_no_jump_into_bare_except_block`

### 3 × `AttributeError(<str>)`

distinct messages:
- `AttributeError("module 'os' has no attribute 'sched_getscheduler'")`
- `AttributeError("module 'sys' has no attribute 'monitoring'")`
- `AttributeError("module 'readline' has no attribute '_READLINE_VERSION'")`
example test: `test_posix`

### 3 × `Traceback (most recent call last): File <str>, line <n>, in foo yield <n> GeneratorExit During handling of the above exception, another exception occurred: Trac`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_asyncgen.py", line 1241, in foo
    yield 1
GeneratorExit

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/.harness/work/cpytho`
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_asyncgen.py", line 1266, in foo
    yield 1
GeneratorExit

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/.harness/work/cpytho`
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_asyncgen.py", line 1397, in foo
    yield 1
GeneratorExit

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/.harness/work/cpytho`
example test: `test_asyncgen.AsyncGenAsyncioTest.test_async_gen_asyncio_aclose_07`

### 3 × `Traceback (most recent call last): File <str>, line <n>, in inner with self._recreate_cm(): ~~~~~~~~~~~~~~~~~^^ File <str>, line <n>, in __enter__ return next(s`

distinct messages:
- `Traceback (most recent call last):
  File "/opt/elide/lib/resources/python/python-home/lib/python3.13/contextlib.py", line 84, in inner
    with self._recreate_cm():
         ~~~~~~~~~~~~~~~~~^^
  File "/opt/elide/lib/resources/python/python-home/lib/python3.13/contextlib.py", line 141, in __enter__`
example test: `test_gc.GCTogglingTests.test_bug1055820d`

### 3 × `Traceback (most recent call last): File <str>, line <n>, in test_attribute_name_interning self.assertIs(x_key, y_key) ~~~~~~~~~~~~~^^^^^^^^^^^^^^ AssertionError`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/pickletester.py", line 3253, in test_attribute_name_interning
    self.assertIs(x_key, y_key)
    ~~~~~~~~~~~~~^^^^^^^^^^^^^^
AssertionError: 'bar' is not 'bar'`
example test: `test_pickle.CDumpPickle_LoadPickle.test_attribute_name_interning`

### 3 × `Traceback (most recent call last): File <str>, line <n>, in test_check_encoding_errors self.assertEqual(proc.rc, <n>, proc) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^ `

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_bytes.py", line 381, in test_check_encoding_errors
    self.assertEqual(proc.rc, 10, proc)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^
AssertionError: 22 != 10 : _PythonRunResult(rc=22, out=b'', err=b'`
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_str.py", line 2666, in test_check_encoding_errors
    self.assertEqual(proc.rc, 10, proc)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^
AssertionError: 22 != 10 : _PythonRunResult(rc=22, out=b'', err=b''`
example test: `test_bytes.ByteArrayTest.test_check_encoding_errors`

### 3 × `Traceback (most recent call last): File <str>, line <n>, in test_class_creation_with_docstrings self.run_and_compare(func, ~~~~~~~~~~~~~~~~~~~~^^^^^^ [(<n>, <st`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_sys_settrace.py", line 1578, in test_class_creation_with_docstrings
    self.run_and_compare(func,
    ~~~~~~~~~~~~~~~~~~~~^^^^^^
        [(0, 'call'),
        ^^^^^^^^^^^^^
    ...<5 lines>...
   `
example test: `test_sys_settrace.TestLinesAfterTraceStarted.test_class_creation_with_docstrings`

### 3 × `Traceback (most recent call last): File <str>, line <n>, in test_errors self.assertEqualException(f, <str>) ~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^ File <st`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_inspect/test_inspect.py", line 2510, in test_errors
    self.assertEqualException(f, '1, c=3, a=2')
    ~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-`
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_inspect/test_inspect.py", line 2510, in test_errors
    self.assertEqualException(f, '1, c=3, a=2')
    ~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-`
example test: `test_inspect.test_inspect.TestGetcallargsFunctions.test_errors`

### 3 × `Traceback (most recent call last): File <str>, line <n>, in test_incrementalencoder self.assertEqual(ostream.getvalue(), self.tstring[<n>]) ~~~~~~~~~~~~~~~~^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/multibytecodec_support.py", line 191, in test_incrementalencoder
    self.assertEqual(ostream.getvalue(), self.tstring[0])
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: b'Pyt`
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/multibytecodec_support.py", line 191, in test_incrementalencoder
    self.assertEqual(ostream.getvalue(), self.tstring[0])
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: b"\x1`
example test: `test_codecencodings_iso2022.Test_ISO2022_JP.test_incrementalencoder`

### 3 × `Traceback (most recent call last): File <str>, line <n>, in test_matches_pathbase_api self.assertEqual(our_attr.__doc__, path_attr.__doc__) ~~~~~~~~~~~~~~~~^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_pathlib/test_pathlib.py", line 563, in test_matches_pathbase_api
    self.assertEqual(our_attr.__doc__, path_attr.__doc__)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: `
example test: `test_pathlib.test_pathlib.PathSubclassTest.test_matches_pathbase_api`

### 3 × `Traceback (most recent call last): File <str>, line <n>, in test_null_hash known_hash_of_obj = self.get_expected_hash(<n>, <n>) File <str>, line <n>, in get_exp`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_hash.py", line 268, in test_null_hash
    known_hash_of_obj = self.get_expected_hash(0, 3)
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_hash.py", line 264, in get_expected_ha`
example test: `test_hash.BytesHashRandomizationTests.test_null_hash`

### 3 × `Traceback (most recent call last): File <str>, line <n>, in test_streamwriter ostream.write(data) ~~~~~~~~~~~~~^^^^^^ UnicodeEncodeError: <str> codec can<str>\u`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/multibytecodec_support.py", line 269, in test_streamwriter
    ostream.write(data)
    ~~~~~~~~~~~~~^^^^^^
UnicodeEncodeError: 'shift_jisx0213' codec can't encode character '\u309a' in position 0: unmap`
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/multibytecodec_support.py", line 269, in test_streamwriter
    ostream.write(data)
    ~~~~~~~~~~~~~^^^^^^
UnicodeEncodeError: 'euc_kr' codec can't encode character '\uc4d4' in position 211: unmappable `
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/multibytecodec_support.py", line 269, in test_streamwriter
    ostream.write(data)
    ~~~~~~~~~~~~~^^^^^^
UnicodeEncodeError: 'big5hkscs' codec can't encode character '\u0304' in position 8: unmappable`
example test: `test_codecencodings_jp.Test_SJISX0213.test_streamwriter`

### 3 × `Traceback (most recent call last): File <str>, line <n>, in test_streamwriter self.assertEqual(ostream.getvalue(), self.tstring[<n>]) ~~~~~~~~~~~~~~~~^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/multibytecodec_support.py", line 271, in test_streamwriter
    self.assertEqual(ostream.getvalue(), self.tstring[0])
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: b'Python \x`
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/multibytecodec_support.py", line 271, in test_streamwriter
    self.assertEqual(ostream.getvalue(), self.tstring[0])
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: b"\x1[146 c`
example test: `test_codecencodings_iso2022.Test_ISO2022_JP.test_streamwriter`

### 3 × `Traceback (most recent call last): File <str>, line <n>, in test_strftime_with_bad_tzname_replace self.assertRaises(TypeError, t.strftime, <str>) ~~~~~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/datetimetester.py", line 2236, in test_strftime_with_bad_tzname_replace
    self.assertRaises(TypeError, t.strftime, '%Z')
    ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: TypeError no`
example test: `datetimetester.TestDateTime_Fast.test_strftime_with_bad_tzname_replace`

### 3 × `Traceback (most recent call last): File <str>, line <n>, in wrapper return ctx.run(func, *args, **kwargs) ~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^ File <str>, line <n>, i`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_context.py", line 23, in wrapper
    return ctx.run(func, *args, **kwargs)
           ~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_context.py",`
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_context.py", line 23, in wrapper
    return ctx.run(func, *args, **kwargs)
           ~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_context.py",`
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_context.py", line 23, in wrapper
    return ctx.run(func, *args, **kwargs)
           ~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_context.py",`
example test: `test_context.ContextTest.test_context_getset_4`

### 3 × `TypeError: MethInstance.meth_noargs() takes <n> positional argument but <n> were given During handling of the above exception, another exception occurred: Trace`

distinct messages:
- `TypeError: MethInstance.meth_noargs() takes 1 positional argument but 2 were given

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_call.py", line 339, in test_noargs_error_arg`
- `TypeError: MethInstance.meth_noargs() takes 1 positional argument but 3 were given

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_call.py", line 345, in test_noargs_error_arg`
- `TypeError: MethInstance.meth_noargs() takes 1 positional argument but 4 were given

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_call.py", line 351, in test_noargs_error_ext`
example test: `test_call.TestCallingConventionsInstance.test_noargs_error_arg`

### 3 × `TypeError: MethStatic.meth_noargs() takes <n> positional argument but <n> were given During handling of the above exception, another exception occurred: Traceba`

distinct messages:
- `TypeError: MethStatic.meth_noargs() takes 1 positional argument but 2 were given

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_call.py", line 339, in test_noargs_error_arg
 `
- `TypeError: MethStatic.meth_noargs() takes 1 positional argument but 3 were given

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_call.py", line 345, in test_noargs_error_arg2
`
- `TypeError: MethStatic.meth_noargs() takes 1 positional argument but 4 were given

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_call.py", line 351, in test_noargs_error_ext
 `
example test: `test_call.TestCallingConventionsStatic.test_noargs_error_arg`

### 2 × `CPython driver timed out`

distinct messages:
- `CPython driver timed out`
example test: `cpython-core::<runner>`

### 2 × `KeyboardInterrupt()`

distinct messages:
- `KeyboardInterrupt()`
example test: `test_unittest`

### 2 × `RuntimeError: This should be noted During handling of the above exception, another exception occurred: Traceback (most recent call last): File <str>, line <n>, `

distinct messages:
- `RuntimeError: This should be noted

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_codecs.py", line 3220, in test_instance_attribute
    self.check_note(exc, "^{}$".format(msg`
- `RuntimeError: This should be noted

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_codecs.py", line 3190, in test_raise_by_value
    self.check_note(RuntimeError(msg), msg)
  `
example test: `test_codecs.ExceptionNotesTest.test_instance_attribute`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in _test_bufsize_equal_one with support.SuppressCrashReport(): ~~~~~~~~~~~~~~~~~~~~~~~~~~~^^ File <str>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_subprocess.py", line 1497, in _test_bufsize_equal_one
    with support.SuppressCrashReport():
         ~~~~~~~~~~~~~~~~~~~~~~~~~~~^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/s`
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_subprocess.py", line 1497, in _test_bufsize_equal_one
    with support.SuppressCrashReport():
         ~~~~~~~~~~~~~~~~~~~~~~~~~~~^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/s`
example test: `test_subprocess.ProcessTestCase.test_bufsize_equal_one_binary_mode`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in feed self._parser.Parse(data, isFinal) ~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^ pyexpat.error: Byte <str> i`

distinct messages:
- `Traceback (most recent call last):
  File "/opt/elide/lib/resources/python/python-home/lib/python3.13/xml/sax/expatreader.py", line 211, in feed
    self._parser.Parse(data, isFinal)
    ~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^
pyexpat.error: Byte "194" is not a member of the (7-bit) ASCII character set.

`
- `Traceback (most recent call last):
  File "/opt/elide/lib/resources/python/python-home/lib/python3.13/xml/sax/expatreader.py", line 211, in feed
    self._parser.Parse(data, isFinal)
    ~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^
pyexpat.error: Byte "194" is not a member of the (7-bit) ASCII character set.

`
example test: `test_sax.ParseTest.test_parseString_text`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in feed self._parser.Parse(data, isFinal) ~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^ pyexpat.error: The markup i`

distinct messages:
- `Traceback (most recent call last):
  File "/opt/elide/lib/resources/python/python-home/lib/python3.13/xml/sax/expatreader.py", line 211, in feed
    self._parser.Parse(data, isFinal)
    ~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^
pyexpat.error: The markup in the document preceding the root element must be we`
- `Traceback (most recent call last):
  File "/opt/elide/lib/resources/python/python-home/lib/python3.13/xml/sax/expatreader.py", line 211, in feed
    self._parser.Parse(data, isFinal)
    ~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^
pyexpat.error: The markup in the document preceding the root element must be we`
example test: `test_sax.ParseTest.test_parseString_bytes`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in inner return func(*args, **kwds) File <str>, line <n>, in test_astimezone self.assertEqual(adt0.tzna`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/support/__init__.py", line 1087, in inner
    return func(*args, **kwds)
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/datetimetester.py", line 5967, in test_astimezone
    self.assertE`
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/support/__init__.py", line 1087, in inner
    return func(*args, **kwds)
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/datetimetester.py", line 5967, in test_astimezone
    self.assertE`
example test: `datetimetester.TestLocalTimeDisambiguation_Pure.test_astimezone`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in inner return func(*args, **kwds) File <str>, line <n>, in test_astimezone_default_eastern self.asser`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/support/__init__.py", line 1087, in inner
    return func(*args, **kwds)
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/datetimetester.py", line 5131, in test_astimezone_default_eastern
`
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/support/__init__.py", line 1087, in inner
    return func(*args, **kwds)
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/datetimetester.py", line 5131, in test_astimezone_default_eastern
`
example test: `datetimetester.TestDateTimeTZ_Pure.test_astimezone_default_eastern`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in inner return func(*args, **kwds) File <str>, line <n>, in test_fromtimestamp self.assertEqual(dt1.fo`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/support/__init__.py", line 1087, in inner
    return func(*args, **kwds)
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/datetimetester.py", line 5919, in test_fromtimestamp
    self.asse`
example test: `datetimetester.TestLocalTimeDisambiguation_Pure.test_fromtimestamp`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in inner return func(*args, **kwds) File <str>, line <n>, in test_timestamp self.assertEqual(dt0.timest`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/support/__init__.py", line 1087, in inner
    return func(*args, **kwds)
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/datetimetester.py", line 5946, in test_timestamp
    self.assertEq`
example test: `datetimetester.TestLocalTimeDisambiguation_Pure.test_timestamp`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in raise_queued_exception raise self.queue.get() File <str>, line <n>, in clientRun test_func() ~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_socket.py", line 434, in raise_queued_exception
    raise self.queue.get()
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_socket.py", line 471, in clientRun
    test_func()
   `
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_socket.py", line 434, in raise_queued_exception
    raise self.queue.get()
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_socket.py", line 471, in clientRun
    test_func()
   `
example test: `test_socket.BasicSocketPairTest.testDefaults`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in setUp super().setUp() ~~~~~~~~~~~~~^^ File <str>, line <n>, in setUp self.manager = self.get_context`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_concurrent_futures/test_init.py", line 71, in setUp
    super().setUp()
    ~~~~~~~~~~~~~^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_concurrent_futures/util.py", line 54,`
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_concurrent_futures/test_init.py", line 45, in setUp
    super().setUp()
    ~~~~~~~~~~~~~^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_concurrent_futures/util.py", line 54,`
example test: `test_concurrent_futures.test_init.ProcessPoolForkFailingInitializerTest.test_initializer`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in tearDown for obj in gc.garbage: ^^^^^^^^^^ AttributeError: module <str> has no attribute <str>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_gc.py", line 1198, in tearDown
    for obj in gc.garbage:
               ^^^^^^^^^^
AttributeError: module 'gc' has no attribute 'garbage'`
example test: `test_gc.GCCallbackTests.test_collect`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in tearDown os.rmdir(self.dir) ~~~~~~~~^^^^^^^^^^ OSError: [Errno <n>] Directory not empty: <str>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_tempfile.py", line 919, in tearDown
    os.rmdir(self.dir)
    ~~~~~~~~^^^^^^^^^^
OSError: [Errno 39] Directory not empty: '/tmp/tmpsrt3m3iw'`
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_tempfile.py", line 919, in tearDown
    os.rmdir(self.dir)
    ~~~~~~~~^^^^^^^^^^
OSError: [Errno 39] Directory not empty: '/tmp/tmp7nw0lpyx'`
example test: `test_tempfile.TestMktemp.test_basic`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_bidirectional self.assertEqual(self.db.bidirectional(<str>), <str>) ~~~~~~~~~~~~~~~~^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_unicodedata.py", line 300, in test_bidirectional
    self.assertEqual(self.db.bidirectional('\uFFFE'), '')
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: 'BN' != ''
- BN`
example test: `test_unicodedata.UnicodeFunctionsTest.test_bidirectional`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_BufferedIOBase_destructor self._check_base_destructor(self.BufferedIOBase) ~~~~~~~~~~~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_io.py", line 727, in test_BufferedIOBase_destructor
    self._check_base_destructor(self.BufferedIOBase)
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^
  File "/work/.harness/work/cpython-cor`
example test: `test_io.CIOTest.test_BufferedIOBase_destructor`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_build_limited self.check_build(<str>, limited=True) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_cppext/__init__.py", line 46, in test_build_limited
    self.check_build('_testcppext_limited', limited=True)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/.harness/work/c`
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_cext/__init__.py", line 45, in test_build_limited
    self.check_build('_test_limited_cext', limited=True)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/.harness/work/cpyth`
example test: `test_cppext.TestCPPExt.test_build_limited`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_cache_from_source_in_root_with_pycache_prefix self.assertEqual(self.util.cache_from_source(path`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_importlib/test_util.py", line 594, in test_cache_from_source_in_root_with_pycache_prefix
    self.assertEqual(self.util.cache_from_source(path), expect)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^`
example test: `test_importlib.test_util.Frozen_PEP3147Tests.test_cache_from_source_in_root_with_pycache_prefix`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_capitalize_nonascii self.checkequal(<str>, ~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ <s`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/string_tests.py", line 1189, in test_capitalize_nonascii
    self.checkequal('\u019b\u1d00\u1d86\u0221\u1fb7',
    ~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                    '\u019b\u1d00\u1d`
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/string_tests.py", line 1189, in test_capitalize_nonascii
    self.checkequal('\u019b\u1d00\u1d86\u0221\u1fb7',
    ~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                    '\u019b\u1d00\u1d`
example test: `test_userstring.UserStringTest.test_capitalize_nonascii`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_comma_separated_warnings self.assertEqual(stdout, ~~~~~~~~~~~~~~~~^^^^^^^^ b<str>) ^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_warnings/__init__.py", line 1421, in test_comma_separated_warnings
    self.assertEqual(stdout,
    ~~~~~~~~~~~~~~~~^^^^^^^^
        b"['ignore::DeprecationWarning', 'ignore::UnicodeWarning']")
   `
example test: `test_warnings.CEnvironmentVariableTests.test_comma_separated_warnings`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_custom_builder_only_end_ns self.assertEqual(builder, [ ~~~~~~~~~~~~~~~~^^^^^^^^^^^ (<str>, <str`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_xml_etree.py", line 672, in test_custom_builder_only_end_ns
    self.assertEqual(builder, [
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^
            ('end-ns', 'a'),
            ^^^^^^^^^^^^^^^^
            ('e`
example test: `test_xml_etree.ElementTreeTest.test_custom_builder_only_end_ns`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_dealloc_warn with self.assertWarns(ResourceWarning) as cm: ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_ssl.py", line 787, in test_dealloc_warn
    with self.assertWarns(ResourceWarning) as cm:
         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: ResourceWarning not triggered`
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_socket.py", line 1835, in test_dealloc_warn
    with self.assertWarns(ResourceWarning) as cm:
         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: ResourceWarning not triggered`
example test: `test_ssl.BasicSocketTests.test_dealloc_warn`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_decode_errors self.assertEqual(decode(data, <str>), (<str>, len(data))) ~~~~~~~~~~~~~~~~^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_codecs.py", line 2815, in test_decode_errors
    self.assertEqual(decode(data, "ignore"), ("[]", len(data)))
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: Tuples d`
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_codecs.py", line 2723, in test_decode_errors
    self.assertEqual(decode(data, "ignore"), ("[]", len(data)))
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: Tuples d`
example test: `test_codecs.RawUnicodeEscapeTest.test_decode_errors`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_decoder_state self.check_state_handling_decode(self.encoding, ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_codecs.py", line 708, in test_decoder_state
    self.check_state_handling_decode(self.encoding,
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^
                                     "spamspam", `
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_codecs.py", line 534, in test_decoder_state
    self.check_state_handling_decode(self.encoding,
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^
                                     "spamspam", `
example test: `test_codecs.UTF16Test.test_decoder_state`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_deepcopy_clear self.assertRaises(RuntimeError, copy.deepcopy, root) ~~~~~~~~~~~~~~~~~^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_xml_etree.py", line 3096, in test_deepcopy_clear
    self.assertRaises(RuntimeError, copy.deepcopy, root)
    ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: RuntimeError not r`
example test: `test_xml_etree.BadElementTest.test_deepcopy_clear`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_destructor self.assertEqual(record, [<n>, <n>, <n>]) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^ Assert`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_io.py", line 686, in test_destructor
    self.assertEqual(record, [1, 2, 3])
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^
AssertionError: Lists differ: [] != [1, 2, 3]

Second list contains 3 additional`
example test: `test_io.CIOTest.test_destructor`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_doctype self.assertEqual(parser.close(), ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^ (<str>, <str>, ^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_xml_etree.py", line 3896, in test_doctype
    self.assertEqual(parser.close(),
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^
        ('html', '-//W3C//DTD XHTML 1.0 Transitional//EN',
        ^^^^^^^^^^^^^^`
example test: `test_xml_etree.TreeBuilderTest.test_doctype`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_encoding check(<str>, <str>) ~~~~~^^^^^^^^^^^^^^^^^^^^^^ File <str>, line <n>, in check self.as`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_xml_etree.py", line 974, in test_encoding
    check("iso-8859-1", '\xbd')
    ~~~~~^^^^^^^^^^^^^^^^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_xml_etree.py", line 971`
example test: `test_xml_etree.ElementTreeTest.test_encoding`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_encoding self.assertEqual(serialize(elem, encoding=enc), ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_xml_etree.py", line 4216, in test_encoding
    self.assertEqual(serialize(elem, encoding=enc),
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
            ("<?xml version='1.0' encoding='%s'?>\`
example test: `test_xml_etree.IOTest.test_encoding`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_entity self.assertEqual(str(cm.exception), ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^ <str>) ^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_xml_etree.py", line 1064, in test_entity
    self.assertEqual(str(cm.exception),
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^
            'undefined entity: line 1, column 10')
            ^^^^^^^^^^^^^`
example test: `test_xml_etree.ElementTreeTest.test_entity`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_error_position self.assertEqual(self._get_error(<str>).position, (<n>, <n>)) ~~~~~~~~~~~~~~~~^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_xml_etree.py", line 4460, in test_error_position
    self.assertEqual(self._get_error('<tag>&foo;</tag>').position, (1, 5))
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`
example test: `test_xml_etree.ParseErrorTest.test_error_position`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_errors self.assertEqual(raw.decode(<str>, <str>), expected) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_codecs.py", line 819, in test_errors
    self.assertEqual(raw.decode('utf-16be', 'replace'), expected)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: '�' != '�A'
`
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_codecs.py", line 775, in test_errors
    self.assertEqual(raw.decode('utf-16le', 'replace'), expected)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: '�' != '�A'
`
example test: `test_codecs.UTF16BETest.test_errors`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_flush_reparse_deferral_disabled self.assert_event_tags(parser, []) # i.e. no elements started ~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_xml_etree.py", line 1842, in test_flush_reparse_deferral_disabled
    self.assert_event_tags(parser, [])  # i.e. no elements started
    ~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^
  File "/work/.harness/wo`
example test: `test_xml_etree.XMLPullParserTest.test_flush_reparse_deferral_disabled`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_flush_reparse_deferral_enabled self.assert_event_tags(parser, []) # i.e. no elements started ~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_xml_etree.py", line 1816, in test_flush_reparse_deferral_enabled
    self.assert_event_tags(parser, [])  # i.e. no elements started
    ~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^
  File "/work/.harness/wor`
example test: `test_xml_etree.XMLPullParserTest.test_flush_reparse_deferral_enabled`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_free_reference_yielded_future self.assertIsNone(wr()) ~~~~~~~~~~~~~~~~~^^^^^^ AssertionError: <`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_concurrent_futures/test_as_completed.py", line 88, in test_free_reference_yielded_future
    self.assertIsNone(wr())
    ~~~~~~~~~~~~~~~~~^^^^^^
AssertionError: <Future at 0x23eb state=finished ret`
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_concurrent_futures/test_as_completed.py", line 88, in test_free_reference_yielded_future
    self.assertIsNone(wr())
    ~~~~~~~~~~~~~~~~~^^^^^^
AssertionError: <Future at 0x245f state=finished ret`
example test: `test_concurrent_futures.test_as_completed.ProcessPoolSpawnAsCompletedTest.test_free_reference_yielded_future`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_get_inheritable_cloexec flags = fcntl.fcntl(fd, fcntl.F_GETFD) AttributeError: module <str> has`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_os.py", line 4628, in test_get_inheritable_cloexec
    flags = fcntl.fcntl(fd, fcntl.F_GETFD)
AttributeError: module 'fcntl' has no attribute 'fcntl'`
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_socket.py", line 6428, in test_get_inheritable_cloexec
    flags = fcntl.fcntl(fd, fcntl.F_GETFD)
AttributeError: module 'fcntl' has no attribute 'fcntl'`
example test: `test_os.FDInheritanceTests.test_get_inheritable_cloexec`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_getbuffer self.assertRaises(BufferError, memio.write, b<str> * <n>) ~~~~~~~~~~~~~~~~~^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_memoryio.py", line 458, in test_getbuffer
    self.assertRaises(BufferError, memio.write, b'x' * 100)
    ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: BufferError not rai`
example test: `test_memoryio.CBytesIOTest.test_getbuffer`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_getbuffer_empty self.assertRaises(BufferError, memio.write, b<str>) ~~~~~~~~~~~~~~~~~^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_memoryio.py", line 480, in test_getbuffer_empty
    self.assertRaises(BufferError, memio.write, b'x')
    ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: BufferError not raised by`
example test: `test_memoryio.CBytesIOTest.test_getbuffer_empty`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_highly_nested_subclass self.assertEqual(deleted, list(reversed(range(<n>)))) ~~~~~~~~~~~~~~~~^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_ordered_dict.py", line 519, in test_highly_nested_subclass
    self.assertEqual(deleted, list(reversed(range(100))))
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: Lists `
example test: `test_ordered_dict.CPythonBuiltinDictTests.test_highly_nested_subclass`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_imaplib_timeout_test self.assertEqual(client.sock.timeout, None) ^^^^^^^^^^^^^^^^^^^ AttributeE`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_imaplib.py", line 485, in test_imaplib_timeout_test
    self.assertEqual(client.sock.timeout, None)
                     ^^^^^^^^^^^^^^^^^^^
AttributeError: 'SSLSocket' object has no attribute 'tim`
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_imaplib.py", line 485, in test_imaplib_timeout_test
    self.assertEqual(client.sock.timeout, None)
                     ^^^^^^^^^^^^^^^^^^^
AttributeError: 'socket' object has no attribute 'timeou`
example test: `test_imaplib.NewIMAPSSLTests.test_imaplib_timeout_test`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_incrementalencoder self.assertEqual(output, self.expected) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_multibytecodec.py", line 388, in test_incrementalencoder
    self.assertEqual(output, self.expected)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: b'~{AD~{AD' != b'~{ADAD'`
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_multibytecodec.py", line 388, in test_incrementalencoder
    self.assertEqual(output, self.expected)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: b'\x1b$B@$\x1b(B\x1b$B@$\x1b(B' != b`
example test: `test_multibytecodec.TestHZStateful.test_incrementalencoder`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_incrementalencoder_final self.assertEqual(output, self.expected_reset) ~~~~~~~~~~~~~~~~^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_multibytecodec.py", line 398, in test_incrementalencoder_final
    self.assertEqual(output, self.expected_reset)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: b'~{AD~{AD' != b'~`
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_multibytecodec.py", line 398, in test_incrementalencoder_final
    self.assertEqual(output, self.expected_reset)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: b'\x1b$B@$\x1b(B\x`
example test: `test_multibytecodec.TestHZStateful.test_incrementalencoder_final`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_IOBase_destructor self._check_base_destructor(self.IOBase) ~~~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_io.py", line 721, in test_IOBase_destructor
    self._check_base_destructor(self.IOBase)
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/`
example test: `test_io.CIOTest.test_IOBase_destructor`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_lone_surrogates super().test_lone_surrogates() ~~~~~~~~~~~~~~~~~~~~~~~~~~~~^^ File <str>, line `

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_codecs.py", line 873, in test_lone_surrogates
    super().test_lone_surrogates()
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_codecs.py", l`
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_codecs.py", line 873, in test_lone_surrogates
    super().test_lone_surrogates()
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_codecs.py", l`
example test: `test_codecs.UTF8SigTest.test_lone_surrogates`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_long_coding_name self.check_script_output(src, br<str>) ~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_source_encoding.py", line 263, in test_long_coding_name
    self.check_script_output(src, br"'\xc3\xa4'")
    ~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^
  File "/work/.harness/work/cpython-core/`
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_source_encoding.py", line 263, in test_long_coding_name
    self.check_script_output(src, br"'\xc3\xa4'")
    ~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^
  File "/work/.harness/work/cpython-core/`
example test: `test_source_encoding.BytesSourceEncodingTest.test_long_coding_name`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_lookup_nonexistant self.assertRaises(KeyError, self.db.lookup, nonexistant) ~~~~~~~~~~~~~~~~~^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_unicodedata.py", line 198, in test_lookup_nonexistant
    self.assertRaises(KeyError, self.db.lookup, nonexistant)
    ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: KeyEr`
example test: `test_unicodedata.UnicodeFunctionsTest.test_lookup_nonexistant`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_malicious_relative_import __import__(f<str>, {<str>: <str>}, level=<n>) ~~~~~~~~~~^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_importlib/import_/test_relative_imports.py", line 239, in test_malicious_relative_import
    __import__(f"{loooong}.c", {"__package__": "a"}, level=1)
    ~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`
example test: `test_importlib.import_.test_relative_imports.Frozen_RelativeImports.test_malicious_relative_import`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_memory_leak_gh_140939 b % (_testcapi.PY_SSIZE_T_MAX, b<str>) ~~^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_bytes.py", line 788, in test_memory_leak_gh_140939
    b % (_testcapi.PY_SSIZE_T_MAX, b'abc')
    ~~^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
OverflowError: Python int too large to convert to size`
example test: `test_bytes.ByteArrayTest.test_memory_leak_gh_140939`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_mirrored self.assertEqual(self.db.mirrored(<str>), <n>) ~~~~~~~~~~~~~~~~^^^^^^^^^^ AttributeErr`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_unicodedata.py", line 348, in test_mirrored
    self.assertEqual(self.db.mirrored('\uFFFE'), 0)
                     ~~~~~~~~~~~~~~~~^^^^^^^^^^
AttributeError: module 'unicodedata' has no attribute`
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_unicodedata.py", line 348, in test_mirrored
    self.assertEqual(self.db.mirrored('\uFFFE'), 0)
                     ~~~~~~~~~~~~~~~~^^^^^^^^^^
AttributeError: 'UCD' object has no attribute 'mirror`
example test: `test_unicodedata.UnicodeFunctionsTest.test_mirrored`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_nonascii self.assertEqual(stdout, str([PYTHONWARNINGS]).encode()) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_warnings/__init__.py", line 1491, in test_nonascii
    self.assertEqual(stdout, str([PYTHONWARNINGS]).encode())
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: b'[]' !=`
example test: `test_warnings.CEnvironmentVariableTests.test_nonascii`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_numeric self.assertEqual(self.db.numeric(<str>,None), None) ~~~~~~~~~~~~~~~^^^^^^^^^^ Attribute`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_unicodedata.py", line 220, in test_numeric
    self.assertEqual(self.db.numeric('A',None), None)
                     ~~~~~~~~~~~~~~~^^^^^^^^^^
AttributeError: module 'unicodedata' has no attribute`
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_unicodedata.py", line 220, in test_numeric
    self.assertEqual(self.db.numeric('A',None), None)
                     ~~~~~~~~~~~~~~~^^^^^^^^^^
AttributeError: 'UCD' object has no attribute 'numeri`
example test: `test_unicodedata.UnicodeFunctionsTest.test_numeric`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_only_one_bom self.assertTrue(d == self.spamle or d == self.spambe) ~~~~~~~~~~~~~~~^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_codecs.py", line 659, in test_only_one_bom
    self.assertTrue(d == self.spamle or d == self.spambe)
    ~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: False is not true`
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_codecs.py", line 475, in test_only_one_bom
    self.assertTrue(d == self.spamle or d == self.spambe)
    ~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: False is not true`
example test: `test_codecs.UTF16Test.test_only_one_bom`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_parse_string self.assertEqual(e.attrib[<str>], <str>) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_xml_etree.py", line 4006, in test_parse_string
    self.assertEqual(e.attrib['value'], '$\xa3\u20ac\U0001017b')
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: '$Â£`
example test: `test_xml_etree.XMLParserTest.test_parse_string`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_partial self.check_partial( ~~~~~~~~~~~~~~~~~~^ <str>, ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ ...<`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_codecs.py", line 2823, in test_partial
    self.check_partial(
    ~~~~~~~~~~~~~~~~~~^
        "\x00\t\n\r\\\xff\uffff\U00010000",
        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    ...<23 lines>...
 `
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_codecs.py", line 951, in test_partial
    self.check_partial(
    ~~~~~~~~~~~~~~~~~~^
        'a+-b\x00c\x80d\u0100e\U00010000f',
        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    ...<33 lines>...
  `
example test: `test_codecs.RawUnicodeEscapeTest.test_partial`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_RawIOBase_destructor self._check_base_destructor(self.RawIOBase) ~~~~~~~~~~~~~~~~~~~~~~~~~~~^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_io.py", line 724, in test_RawIOBase_destructor
    self._check_base_destructor(self.RawIOBase)
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/`
example test: `test_io.CIOTest.test_RawIOBase_destructor`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_seek_character_device_file self.assertEqual(buf.tell(), <n>) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^ As`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_io.py", line 1775, in test_seek_character_device_file
    self.assertEqual(buf.tell(), 0)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^
AssertionError: -1 != 0`
example test: `test_io.CBufferedReaderTest.test_seek_character_device_file`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_select_interrupt_exc self.assertLess(time() - t, <n>) ~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^ Assertio`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_selectors.py", line 452, in test_select_interrupt_exc
    self.assertLess(time() - t, 5.0)
    ~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^
AssertionError: 30.024193232995458 not less than 5.0`
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_selectors.py", line 452, in test_select_interrupt_exc
    self.assertLess(time() - t, 5.0)
    ~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^
AssertionError: 30.045522264998 not less than 5.0`
example test: `test_selectors.DefaultSelectorTestCase.test_select_interrupt_exc`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_set_inheritable_cloexec self.assertEqual(fcntl.fcntl(fd, fcntl.F_GETFD) & fcntl.FD_CLOEXEC, ~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_os.py", line 4638, in test_set_inheritable_cloexec
    self.assertEqual(fcntl.fcntl(fd, fcntl.F_GETFD) & fcntl.FD_CLOEXEC,
                     ~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^
AttributeError: module`
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_socket.py", line 6439, in test_set_inheritable_cloexec
    self.assertEqual(fcntl.fcntl(fd, fcntl.F_GETFD) & fcntl.FD_CLOEXEC,
                     ~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^
AttributeError: mo`
example test: `test_os.FDInheritanceTests.test_set_inheritable_cloexec`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_setslice_negative_steps with self.assertRaises(ValueError): ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^ Asser`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_xml_etree.py", line 4157, in test_setslice_negative_steps
    with self.assertRaises(ValueError):
         ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^
AssertionError: ValueError not raised`
example test: `test_xml_etree.ElementSlicingTest.test_setslice_negative_steps`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_setslice_steps with self.assertRaises(ValueError): ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^ AssertionError`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_xml_etree.py", line 4137, in test_setslice_steps
    with self.assertRaises(ValueError):
         ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^
AssertionError: ValueError not raised`
example test: `test_xml_etree.ElementSlicingTest.test_setslice_steps`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_simpleops self.assertEqual(str(cm.exception), <str>) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_xml_etree.py", line 376, in test_simpleops
    self.assertEqual(str(cm.exception), 'list.remove(x): x not in list')
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Assertio`
example test: `test_xml_etree.ElementTreeTest.test_simpleops`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_single_warning self.assertEqual(stdout, b<str>) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_warnings/__init__.py", line 1414, in test_single_warning
    self.assertEqual(stdout, b"['ignore::DeprecationWarning']")
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionErr`
example test: `test_warnings.CEnvironmentVariableTests.test_single_warning`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_strcoll self.assertRaises(ValueError, locale.strcoll, <str>, <str>) ~~~~~~~~~~~~~~~~~^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_locale.py", line 330, in test_strcoll
    self.assertRaises(ValueError, locale.strcoll, 'a\0', 'a')
    ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: ValueError not rais`
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_locale.py", line 330, in test_strcoll
    self.assertRaises(ValueError, locale.strcoll, 'a\0', 'a')
    ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: ValueError not rais`
example test: `test_locale.TestCollation.test_strcoll`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_strxfrm self.assertRaises(ValueError, locale.strxfrm, <str>) ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_locale.py", line 336, in test_strxfrm
    self.assertRaises(ValueError, locale.strxfrm, 'a\0')
    ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: ValueError not raised by _str`
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_locale.py", line 336, in test_strxfrm
    self.assertRaises(ValueError, locale.strxfrm, 'a\0')
    ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: ValueError not raised by _str`
example test: `test_locale.TestCollation.test_strxfrm`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_subclass_doctype with self.assertWarnsRegex(RuntimeWarning, <str>): ~~~~~~~~~~~~~~~~~~~~~^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_xml_etree.py", line 3968, in test_subclass_doctype
    with self.assertWarnsRegex(RuntimeWarning, 'doctype'):
         ~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: RuntimeWarnin`
example test: `test_xml_etree.XMLParserTest.test_subclass_doctype`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_surrogatepass_handler self.assertEqual(<str>.encode(self.encoding, <str>), ~~~~~~~~~~~~~~~~^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_codecs.py", line 889, in test_surrogatepass_handler
    self.assertEqual("[\uD800\uDC80]".encode(self.encoding, "surrogatepass"),
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_codecs.py", line 889, in test_surrogatepass_handler
    self.assertEqual("[\uD800\uDC80]".encode(self.encoding, "surrogatepass"),
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`
example test: `test_codecs.UTF8SigTest.test_surrogatepass_handler`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_tell_character_device_file self.assertEqual(buf.tell(), <n>) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^ As`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_io.py", line 1762, in test_tell_character_device_file
    self.assertEqual(buf.tell(), 0)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^
AssertionError: -1 != 0`
example test: `test_io.CBufferedReaderTest.test_tell_character_device_file`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_TextIOBase_destructor self._check_base_destructor(self.TextIOBase) ~~~~~~~~~~~~~~~~~~~~~~~~~~~^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_io.py", line 730, in test_TextIOBase_destructor
    self._check_base_destructor(self.TextIOBase)
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-ro`
example test: `test_io.CIOTest.test_TextIOBase_destructor`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_update_type_wrapper self.assertEqual(wrapper.__annotations__, {}) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_functools.py", line 804, in test_update_type_wrapper
    self.assertEqual(wrapper.__annotations__, {})
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: <attribute '__annotations__'`
example test: `test_functools.TestUpdateWrapper.test_update_type_wrapper`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_write_concurrent_close self.assertRaises(ValueError, memio.write, B()) ~~~~~~~~~~~~~~~~~^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_memoryio.py", line 597, in test_write_concurrent_close
    self.assertRaises(ValueError, memio.write, B())
    ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/opt/elide/lib/resources/pytho`
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_memoryio.py", line 597, in test_write_concurrent_close
    self.assertRaises(ValueError, memio.write, B())
    ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/opt/elide/lib/resources/pytho`
example test: `test_memoryio.CBytesIOTest.test_write_concurrent_close`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_write_concurrent_export self.assertRaises(BufferError, memio.write, B()) ~~~~~~~~~~~~~~~~~^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_memoryio.py", line 620, in test_write_concurrent_export
    self.assertRaises(BufferError, memio.write, B())
    ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/opt/elide/lib/resources/py`
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_memoryio.py", line 620, in test_write_concurrent_export
    self.assertRaises(BufferError, memio.write, B())
    ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/opt/elide/lib/resources/py`
example test: `test_memoryio.CBytesIOTest.test_write_concurrent_export`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_write_to_binary_file_with_bom self.assertEqual(f.read(), ~~~~~~~~~~~~~~~~^^^^^^^^^^ <str><str><`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_xml_etree.py", line 4342, in test_write_to_binary_file_with_bom
    self.assertEqual(f.read(),
    ~~~~~~~~~~~~~~~~^^^^^^^^^^
            '''<?xml version='1.0' encoding='utf-16'?>\n'''
           `
example test: `test_xml_etree.IOTest.test_write_to_binary_file_with_bom`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_write_to_user_binary_writer_with_bom self.assertEqual(raw.getvalue(), ~~~~~~~~~~~~~~~~^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_xml_etree.py", line 4422, in test_write_to_user_binary_writer_with_bom
    self.assertEqual(raw.getvalue(),
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^
            '''<?xml version='1.0' encoding='utf-16'`
example test: `test_xml_etree.IOTest.test_write_to_user_binary_writer_with_bom`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_writelines_concurrent_close self.assertRaises(ValueError, memio.writelines, [B()]) ~~~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_memoryio.py", line 610, in test_writelines_concurrent_close
    self.assertRaises(ValueError, memio.writelines, [B()])
    ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/opt/elide/`
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_memoryio.py", line 610, in test_writelines_concurrent_close
    self.assertRaises(ValueError, memio.writelines, [B()])
    ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/opt/elide/`
example test: `test_memoryio.CBytesIOTest.test_writelines_concurrent_close`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_writelines_concurrent_export self.assertRaises(BufferError, memio.writelines, [B()]) ~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_memoryio.py", line 630, in test_writelines_concurrent_export
    self.assertRaises(BufferError, memio.writelines, [B()])
    ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/opt/eli`
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_memoryio.py", line 630, in test_writelines_concurrent_export
    self.assertRaises(BufferError, memio.writelines, [B()])
    ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/opt/eli`
example test: `test_memoryio.CBytesIOTest.test_writelines_concurrent_export`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_xmlgen_encoding self.assertEqual(result.getvalue(), ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^ self.xm`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_sax.py", line 541, in test_xmlgen_encoding
    self.assertEqual(result.getvalue(),
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^
        self.xml('<doc a="\u20ac">\u20ac</doc>', encoding=encoding))
     `
example test: `test_sax.BytesXmlgenTest.test_xmlgen_encoding`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in test_xmlgen_encoding_bytes self.assertEqual(result.getvalue(), ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^ s`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_sax.py", line 596, in test_xmlgen_encoding_bytes
    self.assertEqual(result.getvalue(),
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^
        self.xml('<doc a="\u20ac">\u20ac </doc>', encoding=encoding)`
example test: `test_sax.BytesXmlgenTest.test_xmlgen_encoding_bytes`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in wrapper return func(*args, **kwargs) File <str>, line <n>, in test_conflicting_envvar_and_command_li`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/support/__init__.py", line 2791, in wrapper
    return func(*args, **kwargs)
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_warnings/__init__.py", line 1440, in test_conflicting_env`
example test: `test_warnings.CEnvironmentVariableTests.test_conflicting_envvar_and_command_line`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in wrapper return func(*args, **kwargs) File <str>, line <n>, in test_envvar_and_command_line self.asse`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/support/__init__.py", line 2791, in wrapper
    return func(*args, **kwargs)
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_warnings/__init__.py", line 1430, in test_envvar_and_comm`
example test: `test_warnings.CEnvironmentVariableTests.test_envvar_and_command_line`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in wrapper return fxn(*args, **kwargs) File <str>, line <n>, in test_ddir_empty_multiple_workers return`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_py_compile.py", line 32, in wrapper
    return fxn(*args, **kwargs)
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_compileall.py", line 344, in test_ddir_empty_multiple_workers`
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_py_compile.py", line 22, in wrapper
    return fxn(*args, **kwargs)
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_compileall.py", line 344, in test_ddir_empty_multiple_workers`
example test: `test_compileall.CompileallTestsWithSourceEpoch.test_ddir_empty_multiple_workers`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in wrapper return fxn(*args, **kwargs) File <str>, line <n>, in test_ddir_empty_only_one_worker return `

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_py_compile.py", line 32, in wrapper
    return fxn(*args, **kwargs)
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_compileall.py", line 339, in test_ddir_empty_only_one_worker
`
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_py_compile.py", line 22, in wrapper
    return fxn(*args, **kwargs)
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_compileall.py", line 339, in test_ddir_empty_only_one_worker
`
example test: `test_compileall.CompileallTestsWithSourceEpoch.test_ddir_empty_only_one_worker`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in wrapper return fxn(*args, **kwargs) File <str>, line <n>, in test_ddir_multiple_workers return self.`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_py_compile.py", line 32, in wrapper
    return fxn(*args, **kwargs)
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_compileall.py", line 335, in test_ddir_multiple_workers
    r`
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_py_compile.py", line 22, in wrapper
    return fxn(*args, **kwargs)
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_compileall.py", line 335, in test_ddir_multiple_workers
    r`
example test: `test_compileall.CompileallTestsWithSourceEpoch.test_ddir_multiple_workers`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in wrapper return fxn(*args, **kwargs) File <str>, line <n>, in test_ddir_only_one_worker return self._`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_py_compile.py", line 32, in wrapper
    return fxn(*args, **kwargs)
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_compileall.py", line 330, in test_ddir_only_one_worker
    re`
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_py_compile.py", line 22, in wrapper
    return fxn(*args, **kwargs)
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_compileall.py", line 330, in test_ddir_only_one_worker
    re`
example test: `test_compileall.CompileallTestsWithSourceEpoch.test_ddir_only_one_worker`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in wrapper return fxn(*args, **kwargs) File <str>, line <n>, in test_import self.assertFalse(is_hardlin`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_py_compile.py", line 22, in wrapper
    return fxn(*args, **kwargs)
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_compileall.py", line 1140, in test_import
    self.assertFals`
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_py_compile.py", line 32, in wrapper
    return fxn(*args, **kwargs)
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_compileall.py", line 1140, in test_import
    self.assertFals`
example test: `test_compileall.HardlinkDedupTestsNoSourceEpoch.test_import`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in wrapper return fxn(*args, **kwargs) File <str>, line <n>, in test_no_args_compiles_path self.assertR`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_py_compile.py", line 22, in wrapper
    return fxn(*args, **kwargs)
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_compileall.py", line 583, in test_no_args_compiles_path
    s`
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_py_compile.py", line 32, in wrapper
    return fxn(*args, **kwargs)
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_compileall.py", line 583, in test_no_args_compiles_path
    s`
example test: `test_compileall.CommandLineTestsNoSourceEpoch.test_no_args_compiles_path`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in wrapper return fxn(*args, **kwargs) File <str>, line <n>, in test_no_args_respects_quiet_flag noisy `

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_py_compile.py", line 22, in wrapper
    return fxn(*args, **kwargs)
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_compileall.py", line 611, in test_no_args_respects_quiet_flag`
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_py_compile.py", line 32, in wrapper
    return fxn(*args, **kwargs)
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_compileall.py", line 611, in test_no_args_respects_quiet_flag`
example test: `test_compileall.CommandLineTestsNoSourceEpoch.test_no_args_respects_quiet_flag`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in wrapper return fxn(*args, **kwargs) File <str>, line <n>, in test_strip_only self.assertNotIn( ~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_py_compile.py", line 32, in wrapper
    return fxn(*args, **kwargs)
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_compileall.py", line 360, in test_strip_only
    self.assertN`
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_py_compile.py", line 22, in wrapper
    return fxn(*args, **kwargs)
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_compileall.py", line 360, in test_strip_only
    self.assertN`
example test: `test_compileall.CompileallTestsWithSourceEpoch.test_strip_only`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in wrapper return fxn(*args, **kwargs) File <str>, line <n>, in test_workers self.assertRunOK(self.dire`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_py_compile.py", line 22, in wrapper
    return fxn(*args, **kwargs)
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_compileall.py", line 864, in test_workers
    self.assertRunO`
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_py_compile.py", line 32, in wrapper
    return fxn(*args, **kwargs)
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_compileall.py", line 864, in test_workers
    self.assertRunO`
example test: `test_compileall.CommandLineTestsNoSourceEpoch.test_workers`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in wrapper return fxn(*args, **kwargs) File <str>, line <n>, in wrapper return func(*args, **kwargs) Fi`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_py_compile.py", line 22, in wrapper
    return fxn(*args, **kwargs)
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/support/__init__.py", line 2791, in wrapper
    return func(*args,`
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_py_compile.py", line 32, in wrapper
    return fxn(*args, **kwargs)
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/support/__init__.py", line 2791, in wrapper
    return func(*args,`
example test: `test_compileall.CommandLineTestsNoSourceEpoch.test_d_runtime_error`

### 2 × `Traceback (most recent call last): File <str>, line <n>, in wrapper return fxn(*args, **kwargs) File <str>, line <n>, in wrapper return fxn(*args, **kwargs) Fil`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_py_compile.py", line 22, in wrapper
    return fxn(*args, **kwargs)
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_py_compile.py", line 22, in wrapper
    return fxn(*args, **k`
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_py_compile.py", line 32, in wrapper
    return fxn(*args, **kwargs)
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_py_compile.py", line 22, in wrapper
    return fxn(*args, **k`
example test: `test_compileall.CommandLineTestsNoSourceEpoch.test_no_args_respects_force_flag`

### 2 × `TypeError: <str> object is not callable During handling of the above exception, another exception occurred: Traceback (most recent call last): File <str>, line `

distinct messages:
- `TypeError: 'NoneType' object is not callable

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_os.py", line 5366, in test_fspath_set_to_None
    with self.assertRaisesRegex(Type`
- `TypeError: 'NoneType' object is not callable

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_os.py", line 5374, in test_fspath_set_to_None
    with self.assertRaisesRegex(Type`
example test: `test_os.TestPEP519.test_fspath_set_to_None`

### 2 × `TypeError: first argument must be a type object, not int During handling of the above exception, another exception occurred: Traceback (most recent call last): `

distinct messages:
- `TypeError: first argument must be a type object, not int

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_super.py", line 411, in test_bad_first_arg
    with self.assertRaisesR`
- `TypeError: first argument must be a type object, not int

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_super.py", line 343, in test_super_argtype
    with self.assertRaisesR`
example test: `test_super.TestSuper.test_bad_first_arg`

### 2 × `TypeError: meth_noargs() takes <n> positional arguments but <n> were given During handling of the above exception, another exception occurred: Traceback (most r`

distinct messages:
- `TypeError: meth_noargs() takes 0 positional arguments but 2 were given

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_call.py", line 345, in test_noargs_error_arg2
    self.a`
- `TypeError: meth_noargs() takes 0 positional arguments but 3 were given

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_call.py", line 351, in test_noargs_error_ext
    self.as`
example test: `test_call.TestCallingConventions.test_noargs_error_arg2`

### 2 × `TypeError: meth_o() got an unexpected keyword argument <str> During handling of the above exception, another exception occurred: Traceback (most recent call las`

distinct messages:
- `TypeError: meth_o() got an unexpected keyword argument 'k'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_call.py", line 327, in test_o_error_arg_kw
    self.assertRaisesRege`
- `TypeError: meth_o() got an unexpected keyword argument 'k'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_call.py", line 321, in test_o_error_kw
    self.assertRaisesRegex(
 `
example test: `test_call.TestCallingConventions.test_o_error_arg_kw`

### 2 × `TypeError: meth_o() takes <n> positional argument but <n> were given During handling of the above exception, another exception occurred: Traceback (most recent `

distinct messages:
- `TypeError: meth_o() takes 1 positional argument but 3 were given

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_call.py", line 315, in test_o_error_ext
    self.assertRaisesR`
- `TypeError: meth_o() takes 1 positional argument but 2 were given

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_call.py", line 309, in test_o_error_two_args
    self.assertRa`
example test: `test_call.TestCallingConventions.test_o_error_ext`

### 2 × `TypeError: MethClass.meth_fastcall() got an unexpected keyword argument <str> During handling of the above exception, another exception occurred: Traceback (mos`

distinct messages:
- `TypeError: MethClass.meth_fastcall() got an unexpected keyword argument 'k'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_call.py", line 375, in test_fastcall_error_kw
    s`
example test: `test_call.TestCallingConventionsClass.test_fastcall_error_kw`

### 2 × `TypeError: MethClass.meth_noargs() got an unexpected keyword argument <str> During handling of the above exception, another exception occurred: Traceback (most `

distinct messages:
- `TypeError: MethClass.meth_noargs() got an unexpected keyword argument 'k'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_call.py", line 357, in test_noargs_error_kw
    self.`
example test: `test_call.TestCallingConventionsClass.test_noargs_error_kw`

### 2 × `TypeError: MethClass.meth_o() missing <n> required positional argument: <str> During handling of the above exception, another exception occurred: Traceback (mos`

distinct messages:
- `TypeError: MethClass.meth_o() missing 1 required positional argument: 'arg'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_call.py", line 305, in test_o_error_no_arg
    self`
example test: `test_call.TestCallingConventionsClass.test_o_error_no_arg`

### 2 × `TypeError: MethClass.meth_varargs() got an unexpected keyword argument <str> During handling of the above exception, another exception occurred: Traceback (most`

distinct messages:
- `TypeError: MethClass.meth_varargs() got an unexpected keyword argument 'k'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_call.py", line 281, in test_varargs_error_kw
    sel`
example test: `test_call.TestCallingConventionsClass.test_varargs_error_kw`

### 2 × `TypeError: MethInstance.meth_o() got an unexpected keyword argument <str> During handling of the above exception, another exception occurred: Traceback (most re`

distinct messages:
- `TypeError: MethInstance.meth_o() got an unexpected keyword argument 'k'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_call.py", line 327, in test_o_error_arg_kw
    self.ass`
- `TypeError: MethInstance.meth_o() got an unexpected keyword argument 'k'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_call.py", line 321, in test_o_error_kw
    self.assertR`
example test: `test_call.TestCallingConventionsInstance.test_o_error_arg_kw`

### 2 × `TypeError: MethInstance.meth_o() takes <n> positional arguments but <n> were given During handling of the above exception, another exception occurred: Traceback`

distinct messages:
- `TypeError: MethInstance.meth_o() takes 2 positional arguments but 4 were given

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_call.py", line 315, in test_o_error_ext
    self`
- `TypeError: MethInstance.meth_o() takes 2 positional arguments but 3 were given

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_call.py", line 309, in test_o_error_two_args
   `
example test: `test_call.TestCallingConventionsInstance.test_o_error_ext`

### 2 × `TypeError: MethStatic.meth_o() got an unexpected keyword argument <str> During handling of the above exception, another exception occurred: Traceback (most rece`

distinct messages:
- `TypeError: MethStatic.meth_o() got an unexpected keyword argument 'k'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_call.py", line 327, in test_o_error_arg_kw
    self.asser`
- `TypeError: MethStatic.meth_o() got an unexpected keyword argument 'k'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_call.py", line 321, in test_o_error_kw
    self.assertRai`
example test: `test_call.TestCallingConventionsStatic.test_o_error_arg_kw`

### 2 × `TypeError: MethStatic.meth_o() takes <n> positional arguments but <n> were given During handling of the above exception, another exception occurred: Traceback (`

distinct messages:
- `TypeError: MethStatic.meth_o() takes 2 positional arguments but 4 were given

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_call.py", line 315, in test_o_error_ext
    self.a`
- `TypeError: MethStatic.meth_o() takes 2 positional arguments but 3 were given

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_call.py", line 309, in test_o_error_two_args
    s`
example test: `test_call.TestCallingConventionsStatic.test_o_error_ext`

### 2 × `TypeError: str.find() takes from <n> to <n> positional arguments but <n> were given During handling of the above exception, another exception occurred: Tracebac`

distinct messages:
- `TypeError: str.find() takes from 2 to 4 positional arguments but 5 were given

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/string_tests.py", line 1561, in test_find_etc_raise_co`
example test: `test_userstring.UserStringTest.test_find_etc_raise_correct_error_messages`

### 2 × `TypeError(<str>)`

distinct messages:
- `TypeError("'NoneType' object is not callable")`
- `TypeError('exceptions must be classes or instances deriving from BaseException, not ForeignException')`
example test: `test_code`

### 2 × `ValueError: Can<str>line<str>t jump from <str> event."`

distinct messages:
- `ValueError: Can't jump from "exception" event.

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_sys_settrace.py", line 2083, in test
    self.run_test(func, jumpFrom, jumpTo, e`
- `ValueError: Can't jump from "return" event.

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_sys_settrace.py", line 2083, in test
    self.run_test(func, jumpFrom, jumpTo, expe`
example test: `test_sys_settrace.JumpTestCase.test_no_jump_from_exception_event`

### 2 × `ValueError: Invalid conversion specification During handling of the above exception, another exception occurred: Traceback (most recent call last): File <str>, `

distinct messages:
- `ValueError: Invalid conversion specification

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_format.py", line 610, in test_specifier_z_error
    with self.assertRaisesRegex(Va`
- `ValueError: Invalid conversion specification

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_format.py", line 548, in test_unicode_in_error_message
    with self.assertRaisesR`
example test: `test_format.FormatTest.test_specifier_z_error`

### 1 × `AttributeError: attribute tm_zone of time.struct_time object is not writable During handling of the above exception, another exception occurred: Traceback (most`

distinct messages:
- `AttributeError: attribute tm_zone of time.struct_time object is not writable

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_structseq.py", line 312, in test_copy_replace_with`
example test: `test_structseq.StructSeqTest.test_copy_replace_with_invisible_fields`

### 1 × `CPython driver exited with code <n> while test_ast.test_ast.ASTValidatorTests.test_stdlib_validates`

distinct messages:
- `CPython driver exited with code 1 while test_ast.test_ast.ASTValidatorTests.test_stdlib_validates`
example test: `test_ast.test_ast.ASTValidatorTests.test_stdlib_validates`

### 1 × `CPython driver exited with code <n> while test_codecencodings_cn.Test_HZ.test_callback_None_index`

distinct messages:
- `CPython driver exited with code 1 while test_codecencodings_cn.Test_HZ.test_callback_None_index`
example test: `test_codecencodings_cn.Test_HZ.test_callback_None_index`

### 1 × `CPython driver exited with code <n> while test_coroutines.AsyncBadSyntaxTest.test_badsyntax_1`

distinct messages:
- `CPython driver exited with code 1 while test_coroutines.AsyncBadSyntaxTest.test_badsyntax_1`
example test: `test_coroutines.AsyncBadSyntaxTest.test_badsyntax_1`

### 1 × `CPython driver exited with code <n> while test_cprofile.CProfileTest.test_calling_conventions`

distinct messages:
- `CPython driver exited with code 1 while test_cprofile.CProfileTest.test_calling_conventions`
example test: `test_cprofile.CProfileTest.test_calling_conventions`

### 1 × `CPython driver exited with code <n> while test_descr.ClassPropertiesAndMethods.test_classmethod_new`

distinct messages:
- `CPython driver exited with code 1 while test_descr.ClassPropertiesAndMethods.test_classmethod_new`
example test: `test_descr.ClassPropertiesAndMethods.test_classmethod_new`

### 1 × `CPython driver exited with code <n> while test_except_star.TestExceptStarExceptionGroupSubclass.test_exception_group_subclass_with_bad_split_func`

distinct messages:
- `CPython driver exited with code 1 while test_except_star.TestExceptStarExceptionGroupSubclass.test_exception_group_subclass_with_bad_split_func`
example test: `test_except_star.TestExceptStarExceptionGroupSubclass.test_exception_group_subclass_with_bad_split_func`

### 1 × `CPython driver exited with code <n> while test_exceptions.ExceptionTests.test_unicode_error_str_does_not_crash`

distinct messages:
- `CPython driver exited with code 1 while test_exceptions.ExceptionTests.test_unicode_error_str_does_not_crash`
example test: `test_exceptions.ExceptionTests.test_unicode_error_str_does_not_crash`

### 1 × `CPython driver exited with code <n> while test_frame.TestCAPI.test_frame_get_generator`

distinct messages:
- `CPython driver exited with code 255 while test_frame.TestCAPI.test_frame_get_generator`
example test: `test_frame.TestCAPI.test_frame_get_generator`

### 1 × `CPython driver exited with code <n> while test_generators.ModifyUnderlyingIterableTest.test_new_gen_from_gi_code`

distinct messages:
- `CPython driver exited with code 1 while test_generators.ModifyUnderlyingIterableTest.test_new_gen_from_gi_code`
example test: `test_generators.ModifyUnderlyingIterableTest.test_new_gen_from_gi_code`

### 1 × `CPython driver exited with code <n> while test_int.IntStrDigitLimitsTests.test_int_max_str_digits_is_per_interpreter`

distinct messages:
- `CPython driver exited with code 255 while test_int.IntStrDigitLimitsTests.test_int_max_str_digits_is_per_interpreter`
example test: `test_int.IntStrDigitLimitsTests.test_int_max_str_digits_is_per_interpreter`

### 1 × `CPython driver exited with code <n> while test_io.CTextIOWrapperTest.test_issue142594`

distinct messages:
- `CPython driver exited with code 1 while test_io.CTextIOWrapperTest.test_issue142594`
example test: `test_io.CTextIOWrapperTest.test_issue142594`

### 1 × `CPython driver exited with code <n> while test_long.LongTest.test___sizeof__`

distinct messages:
- `CPython driver exited with code 1 while test_long.LongTest.test___sizeof__`
example test: `test_long.LongTest.test___sizeof__`

### 1 × `CPython driver exited with code <n> while test_memoryview.OtherTest.test_use_released_memory`

distinct messages:
- `CPython driver exited with code 1 while test_memoryview.OtherTest.test_use_released_memory`
example test: `test_memoryview.OtherTest.test_use_released_memory`

### 1 × `CPython driver exited with code <n> while test_mmap.MmapTests.test_flush_return_value`

distinct messages:
- `CPython driver exited with code 1 while test_mmap.MmapTests.test_flush_return_value`
example test: `test_mmap.MmapTests.test_flush_return_value`

### 1 × `CPython driver exited with code <n> while test_multibytecodec.Test_MultibyteCodec.test_init_segfault`

distinct messages:
- `CPython driver exited with code 1 while test_multibytecodec.Test_MultibyteCodec.test_init_segfault`
example test: `test_multibytecodec.Test_MultibyteCodec.test_init_segfault`

### 1 × `CPython driver exited with code <n> while test_ordered_dict.CPythonOrderedDictSubclassTests.test_issue119004_change_size_by_delete_key_in_dict_eq`

distinct messages:
- `CPython driver exited with code 1 while test_ordered_dict.CPythonOrderedDictSubclassTests.test_issue119004_change_size_by_delete_key_in_dict_eq`
example test: `test_ordered_dict.CPythonOrderedDictSubclassTests.test_issue119004_change_size_by_delete_key_in_dict_eq`

### 1 × `CPython driver exited with code <n> while test_pyexpat.ExternalEntityParserCreateErrorTest.test_error_path_no_crash`

distinct messages:
- `CPython driver exited with code 255 while test_pyexpat.ExternalEntityParserCreateErrorTest.test_error_path_no_crash`
example test: `test_pyexpat.ExternalEntityParserCreateErrorTest.test_error_path_no_crash`

### 1 × `CPython driver exited with code <n> while test_resource.ResourceTest.test_args`

distinct messages:
- `CPython driver exited with code 1 while test_resource.ResourceTest.test_args`
example test: `test_resource.ResourceTest.test_args`

### 1 × `CPython driver exited with code <n> while test_ssl.BasicSocketTests.test_parse_cert_CVE_2013_4238`

distinct messages:
- `CPython driver exited with code 1 while test_ssl.BasicSocketTests.test_parse_cert_CVE_2013_4238`
example test: `test_ssl.BasicSocketTests.test_parse_cert_CVE_2013_4238`

### 1 × `CPython driver exited with code <n> while test_threading.SubinterpThreadingTests.test_threads_join`

distinct messages:
- `CPython driver exited with code 255 while test_threading.SubinterpThreadingTests.test_threads_join`
example test: `test_threading.SubinterpThreadingTests.test_threads_join`

### 1 × `CPython driver exited with code <n> while test_typing.GenericTests.test_multiple_inheritance___mro_entries___returns_non_type`

distinct messages:
- `CPython driver exited with code 1 while test_typing.GenericTests.test_multiple_inheritance___mro_entries___returns_non_type`
example test: `test_typing.GenericTests.test_multiple_inheritance___mro_entries___returns_non_type`

### 1 × `CPython driver timed out after 65000ms while test_cmd_line_script.CmdLineTest.test_repl_stderr_flush_separate_stderr`

distinct messages:
- `CPython driver timed out after 65000ms while test_cmd_line_script.CmdLineTest.test_repl_stderr_flush_separate_stderr`
example test: `test_cmd_line_script.CmdLineTest.test_repl_stderr_flush_separate_stderr`

### 1 × `CPython driver timed out after 65000ms while test_multiprocessing_fork.test_misc.TestWait.test_wait_socket_slow`

distinct messages:
- `CPython driver timed out after 65000ms while test_multiprocessing_fork.test_misc.TestWait.test_wait_socket_slow`
example test: `test_multiprocessing_fork.test_misc.TestWait.test_wait_socket_slow`

### 1 × `CPython driver timed out after 65000ms while test_multiprocessing_spawn.test_manager.WithManagerTestBarrier.test_abort`

distinct messages:
- `CPython driver timed out after 65000ms while test_multiprocessing_spawn.test_manager.WithManagerTestBarrier.test_abort`
example test: `test_multiprocessing_spawn.test_manager.WithManagerTestBarrier.test_abort`

### 1 × `CPython driver timed out after 65000ms while test_pickle.CPicklerTests.test_recursive_nested_names2`

distinct messages:
- `CPython driver timed out after 65000ms while test_pickle.CPicklerTests.test_recursive_nested_names2`
example test: `test_pickle.CPicklerTests.test_recursive_nested_names2`

### 1 × `CPython driver timed out after 65000ms while test_thread.ThreadRunningTests.test_join_then_self_join`

distinct messages:
- `CPython driver timed out after 65000ms while test_thread.ThreadRunningTests.test_join_then_self_join`
example test: `test_thread.ThreadRunningTests.test_join_then_self_join`

### 1 × `CPython driver timed out after 65000ms while test_weakref.MappingTestCase.test_threaded_weak_key_dict_deepcopy`

distinct messages:
- `CPython driver timed out after 65000ms while test_weakref.MappingTestCase.test_threaded_weak_key_dict_deepcopy`
example test: `test_weakref.MappingTestCase.test_threaded_weak_key_dict_deepcopy`

### 1 × `File <str>, line <n> [[(__x:=<n>) for _ in range(<n>)] for __x in range(<n>)] ^^^^^^ SyntaxError: assignment expression cannot rebind comprehension iteration va`

distinct messages:
- `File "<string>", line 3
    [[(__x:=2) for _ in range(2)] for __x in range(2)]
       ^^^^^^
SyntaxError: assignment expression cannot rebind comprehension iteration variable '%s'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/.`
example test: `test_named_expressions.NamedExpressionInvalidTest.test_named_expression_invalid_mangled_class_variables`

### 1 × `ImportError: Failed to import test module: test.test_capi.test_exceptions Traceback (most recent call last): File <str>, line <n>, in _find_test_path module = s`

distinct messages:
- `ImportError: Failed to import test module: test.test_capi.test_exceptions
Traceback (most recent call last):
  File "/opt/elide/lib/resources/python/python-home/lib/python3.13/unittest/loader.py", line 396, in _find_test_path
    module = self._get_module_from_name(name)
  File "/opt/elide/lib/resou`
example test: `unittest.loader._FailedTest.test.test_capi.test_exceptions`

### 1 × `ImportError: Failed to import test module: test.test_capi.test_misc Traceback (most recent call last): File <str>, line <n>, in _find_test_path module = self._g`

distinct messages:
- `ImportError: Failed to import test module: test.test_capi.test_misc
Traceback (most recent call last):
  File "/opt/elide/lib/resources/python/python-home/lib/python3.13/unittest/loader.py", line 396, in _find_test_path
    module = self._get_module_from_name(name)
  File "/opt/elide/lib/resources/p`
example test: `unittest.loader._FailedTest.test.test_capi.test_misc`

### 1 × `KeyError: <str> During handling of the above exception, another exception occurred: Traceback (most recent call last): File <str>, line <n>, in test_java_ver re`

distinct messages:
- `KeyError: 'host symbol java.lang.System is not defined or access has been denied'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_platform.py", line 357, in test_java_ver
    `
example test: `test_platform.PlatformTest.test_java_ver`

### 1 × `LookupError: unknown encoding exception_notes_test During handling of the above exception, another exception occurred: Traceback (most recent call last): File <`

distinct messages:
- `LookupError: unknown encoding exception_notes_test

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_codecs.py", line 3232, in test_codec_lookup_failure
    with self.assertRais`
example test: `test_codecs.ExceptionNotesTest.test_codec_lookup_failure`

### 1 × `ModuleNotFoundError: No module named <str> During handling of the above exception, another exception occurred: Traceback (most recent call last): File <str>, li`

distinct messages:
- `ModuleNotFoundError: No module named 'foo'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_builtin.py", line 886, in test_exec_builtins_mapping_import
    self.assertRaisesReg`
example test: `test_builtin.BuiltinTest.test_exec_builtins_mapping_import`

### 1 × `RuntimeError During handling of the above exception, another exception occurred: Traceback (most recent call last): File <str>, line <n>, in test_athrow_send_al`

distinct messages:
- `RuntimeError

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_asyncgen.py", line 2089, in test_athrow_send_already_running
    with self.assertRaisesRegex(RuntimeError,
       `
example test: `test_asyncgen.TestUnawaitedWarnings.test_athrow_send_already_running`

### 1 × `RuntimeError During handling of the above exception, another exception occurred: Traceback (most recent call last): File <str>, line <n>, in test_raise_by_type `

distinct messages:
- `RuntimeError

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_codecs.py", line 3186, in test_raise_by_type
    self.check_note(RuntimeError, "")
    ~~~~~~~~~~~~~~~^^^^^^^^^^^^`
example test: `test_codecs.ExceptionNotesTest.test_raise_by_type`

### 1 × `RuntimeError: (<str>, <str>, <str>) During handling of the above exception, another exception occurred: Traceback (most recent call last): File <str>, line <n>,`

distinct messages:
- `RuntimeError: ('a', 'b', 'c')

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_codecs.py", line 3227, in test_multiple_args
    self.check_note(RuntimeError('a', 'b', 'c'), msg`
example test: `test_codecs.ExceptionNotesTest.test_multiple_args`

### 1 × `RuntimeError: <n> During handling of the above exception, another exception occurred: Traceback (most recent call last): File <str>, line <n>, in test_non_str_a`

distinct messages:
- `RuntimeError: 1

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_codecs.py", line 3223, in test_non_str_arg
    self.check_note(RuntimeError(1), "1")
    ~~~~~~~~~~~~~~~^^^^^^^`
example test: `test_codecs.ExceptionNotesTest.test_non_str_arg`

### 1 × `test.test_codecs.ExceptionNotesTest.test_init_override.<locals>.CustomInit During handling of the above exception, another exception occurred: Traceback (most r`

distinct messages:
- `test.test_codecs.ExceptionNotesTest.test_init_override.<locals>.CustomInit

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_codecs.py", line 3208, in test_init_override
    sel`
example test: `test_codecs.ExceptionNotesTest.test_init_override`

### 1 × `test.test_codecs.ExceptionNotesTest.test_new_override.<locals>.CustomNew During handling of the above exception, another exception occurred: Traceback (most rec`

distinct messages:
- `test.test_codecs.ExceptionNotesTest.test_new_override.<locals>.CustomNew

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_codecs.py", line 3214, in test_new_override
    self.c`
example test: `test_codecs.ExceptionNotesTest.test_new_override`

### 1 × `test.test_codecs.ExceptionNotesTest.test_raise_grandchild_subclass_exact_size.<locals>.MyRuntimeError: This should be noted During handling of the above excepti`

distinct messages:
- `test.test_codecs.ExceptionNotesTest.test_raise_grandchild_subclass_exact_size.<locals>.MyRuntimeError: This should be noted

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_cod`
example test: `test_codecs.ExceptionNotesTest.test_raise_grandchild_subclass_exact_size`

### 1 × `test.test_codecs.ExceptionNotesTest.test_raise_subclass_with_weakref_support.<locals>.MyRuntimeError: This should be noted During handling of the above exceptio`

distinct messages:
- `test.test_codecs.ExceptionNotesTest.test_raise_subclass_with_weakref_support.<locals>.MyRuntimeError: This should be noted

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_code`
example test: `test_codecs.ExceptionNotesTest.test_raise_subclass_with_weakref_support`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in _check_error compile(code, filename, mode) ~~~~~~~^^^^^^^^^^^^^^^^^^^^^^ File <str>, line <n> a = ( `

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_syntax.py", line 2260, in _check_error
    compile(code, filename, mode)
    ~~~~~~~^^^^^^^^^^^^^^^^^^^^^^
  File "<testcase>", line 1
    a = ( 1, 2, 3
                ^
SyntaxError: invalid synta`
example test: `test_syntax.SyntaxTestCase.test_error_parenthesis`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in _check_error compile(code, filename, mode) ~~~~~~~^^^^^^^^^^^^^^^^^^^^^^ File <str>, line <n> a = <n`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_syntax.py", line 2260, in _check_error
    compile(code, filename, mode)
    ~~~~~~~^^^^^^^^^^^^^^^^^^^^^^
  File "<testcase>", line 1
    a = 3 \ 4
            ^
SyntaxError: unexpected character `
example test: `test_syntax.SyntaxTestCase.test_invalid_line_continuation_error_position`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in _check_error compile(code, filename, mode) ~~~~~~~^^^^^^^^^^^^^^^^^^^^^^ File <str>, line <n> call( `

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_syntax.py", line 2260, in _check_error
    compile(code, filename, mode)
    ~~~~~~~^^^^^^^^^^^^^^^^^^^^^^
  File "<testcase>", line 1
    call(
    ^^^^^
SyntaxError: keyword argument repeated: a
`
example test: `test_syntax.SyntaxTestCase.test_multiline_compiler_error_points_to_the_end`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in _check_error compile(code, filename, mode) ~~~~~~~^^^^^^^^^^^^^^^^^^^^^^ File <str>, line <n> print`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_syntax.py", line 2260, in _check_error
    compile(code, filename, mode)
    ~~~~~~~^^^^^^^^^^^^^^^^^^^^^^
  File "<testcase>", line 1
    print("Hello")
         ^
SyntaxError: invalid syntax

Du`
example test: `test_syntax.SyntaxTestCase.test_invisible_characters`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in _execvpe_mockup orig_execve = os.execve ^^^^^^^^^ AttributeError: module <str> has no attribute <str`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_os.py", line 2151, in _execvpe_mockup
    orig_execve = os.execve
                  ^^^^^^^^^
AttributeError: module 'os' has no attribute 'execve'

During handling of the above exception, another `
example test: `test_os.ExecTests.test_internal_execvpe_str`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in close_loop loop.close() ~~~~~~~~~~^^ File <str>, line <n>, in close self.remove_signal_handler(sig) `

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_asyncio/utils.py", line 552, in close_loop
    loop.close()
    ~~~~~~~~~~^^
  File "/opt/elide/lib/resources/python/python-home/lib/python3.13/asyncio/unix_events.py", line 74, in close
    self.r`
example test: `test_asyncio.test_events.SelectEventLoopTests.test_add_signal_handler`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in decorator return func(*args) File <str>, line <n>, in test_current_exceptions d = sys._current_excep`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/support/threading_helper.py", line 66, in decorator
    return func(*args)
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_sys.py", line 624, in test_current_exceptions
    d = sys._`
example test: `test_sys.SysModuleTest.test_current_exceptions`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in decorator return func(*args) File <str>, line <n>, in test_current_frames self.assertIn(main_id, d) `

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/support/threading_helper.py", line 66, in decorator
    return func(*args)
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_sys.py", line 561, in test_current_frames
    self.assertIn`
example test: `test_sys.SysModuleTest.test_current_frames`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in decorator return func(*args) File <str>, line <n>, in test_ssl_verified with self.assertRaisesRegex(`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/support/threading_helper.py", line 66, in decorator
    return func(*args)
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_imaplib.py", line 1001, in test_ssl_verified
    with self.`
example test: `test_imaplib.ThreadedNetworkedTestsSSL.test_ssl_verified`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in foo yield <n> GeneratorExit During handling of the above exception, another exception occurred: Runt`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_asyncgen.py", line 1218, in foo
    yield 1
GeneratorExit

During handling of the above exception, another exception occurred:

RuntimeError: await wasn't used with future

During handling of the a`
example test: `test_asyncgen.AsyncGenAsyncioTest.test_async_gen_asyncio_aclose_06`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in g <n>/<n> ~^~ ZeroDivisionError: division by zero During handling of the above exception, another ex`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_frame.py", line 130, in g
    1/0
    ~^~
ZeroDivisionError: division by zero

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/`
example test: `test_frame.ClearTest.test_clear_executing_generator`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in gen raise StopIteration StopIteration The above exception was the direct cause of the following exce`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_asyncgen.py", line 263, in gen
    raise StopIteration
StopIteration

The above exception was the direct cause of the following exception:

RuntimeError: generator raised StopIteration

During hand`
example test: `test_asyncgen.AsyncGenTest.test_async_gen_exception_06`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in inner return func(*args, **kwds) File <str>, line <n>, in inner return func(*args, **kwds) File <str`

distinct messages:
- `Traceback (most recent call last):
  File "/opt/elide/lib/resources/python/python-home/lib/python3.13/contextlib.py", line 85, in inner
    return func(*args, **kwds)
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/support/__init__.py", line 1087, in inner
    return func(*args, **kwd`
example test: `test_imaplib.TestImaplib.test_Time2Internaldate`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in inner return func(*args, **kwds) File <str>, line <n>, in test_compute_rollover_MIDNIGHT_local test(`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/support/__init__.py", line 1087, in inner
    return func(*args, **kwds)
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_logging.py", line 6792, in test_compute_rollover_MIDNIGHT_loc`
example test: `test_logging.TimedRotatingFileHandlerTest.test_compute_rollover_MIDNIGHT_local`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in inner return func(*args, **kwds) File <str>, line <n>, in test_compute_rollover_W6_local test(DT(<n>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/support/__init__.py", line 1087, in inner
    return func(*args, **kwds)
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_logging.py", line 6918, in test_compute_rollover_W6_local
   `
example test: `test_logging.TimedRotatingFileHandlerTest.test_compute_rollover_W6_local`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in inner return func(*args, **kwds) File <str>, line <n>, in test_TimeRE_recreation_timezone self.asser`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/support/__init__.py", line 1087, in inner
    return func(*args, **kwds)
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_strptime.py", line 878, in test_TimeRE_recreation_timezone
  `
example test: `test_strptime.CacheTests.test_TimeRE_recreation_timezone`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in inner return func(*args, **kwds) File <str>, line <n>, in test_variable_tzname self.assertEqual(t1.t`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/support/__init__.py", line 1087, in inner
    return func(*args, **kwds)
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_email/test_utils.py", line 152, in test_variable_tzname
    s`
example test: `test_email.test_utils.LocaltimeTests.test_variable_tzname`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in patched return func(*newargs, **newkeywargs) File <str>, line <n>, in test_create_connection_ipv6_sc`

distinct messages:
- `Traceback (most recent call last):
  File "/opt/elide/lib/resources/python/python-home/lib/python3.13/unittest/mock.py", line 1432, in patched
    return func(*newargs, **newkeywargs)
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_asyncio/test_base_events.py", line 1481, in test`
example test: `test_asyncio.test_base_events.BaseEventLoopWithSelectorTests.test_create_connection_ipv6_scope`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in patched return func(*newargs, **newkeywargs) File <str>, line <n>, in test_help_output_redirect self`

distinct messages:
- `Traceback (most recent call last):
  File "/opt/elide/lib/resources/python/python-home/lib/python3.13/unittest/mock.py", line 1432, in patched
    return func(*newargs, **newkeywargs)
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_pydoc/test_pydoc.py", line 723, in test_help_out`
example test: `test_pydoc.test_pydoc.PydocDocTest.test_help_output_redirect`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in patched return func(*newargs, **newkeywargs) File <str>, line <n>, in test_log_slow_callbacks self.a`

distinct messages:
- `Traceback (most recent call last):
  File "/opt/elide/lib/resources/python/python-home/lib/python3.13/unittest/mock.py", line 1432, in patched
    return func(*newargs, **newkeywargs)
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_asyncio/test_base_events.py", line 2066, in test`
example test: `test_asyncio.test_base_events.BaseEventLoopWithSelectorTests.test_log_slow_callbacks`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in setUp self.mp_context = self.get_context() ~~~~~~~~~~~~~~~~^^ File <str>, line <n>, in get_context r`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_concurrent_futures/test_init.py", line 61, in setUp
    self.mp_context = self.get_context()
                      ~~~~~~~~~~~~~~~~^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/`
example test: `test_concurrent_futures.test_init.ProcessPoolForkserverFailingInitializerTest.test_initializer`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in setUp super().setUp() ~~~~~~~~~~~~~^^ File <str>, line <n>, in setUp mp_context=self.get_context(), `

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_concurrent_futures/test_init.py", line 45, in setUp
    super().setUp()
    ~~~~~~~~~~~~~^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_concurrent_futures/util.py", line 52,`
example test: `test_concurrent_futures.test_init.ProcessPoolForkserverInitializerTest.test_initializer`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test self.assertTrue(in_table_a1(<str>)) ~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^ AssertionError: Fals`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_stringprep.py", line 10, in test
    self.assertTrue(in_table_a1("\u0221"))
    ~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: False is not true`
example test: `test_stringprep.StringprepTests.test`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test___builtins__ self.assertIs(self.b.__builtins__, builtins_dict) ^^^^^^^^^^^^^^^^^^^ AttributeErr`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_funcattrs.py", line 107, in test___builtins__
    self.assertIs(self.b.__builtins__, builtins_dict)
                  ^^^^^^^^^^^^^^^^^^^
AttributeError: 'function' object has no attribute '__built`
example test: `test_funcattrs.FunctionPropertiesTest.test___builtins__`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test___class___mro class A(metaclass=Meta): ...<<n> lines>... test_class = __class__ File <str>, lin`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_super.py", line 201, in test___class___mro
    class A(metaclass=Meta):
    ...<2 lines>...
            test_class = __class__
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_su`
example test: `test_super.TestSuper.test___class___mro`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test___classcell___missing with self.assertRaisesRegex(RuntimeError, expected_error): ~~~~~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_super.py", line 257, in test___classcell___missing
    with self.assertRaisesRegex(RuntimeError, expected_error):
         ~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: Runti`
example test: `test_super.TestSuper.test___classcell___missing`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test___classcell___wrong_cell with self.assertRaises(TypeError): ~~~~~~~~~~~~~~~~~^^^^^^^^^^^ Assert`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_super.py", line 285, in test___classcell___wrong_cell
    with self.assertRaises(TypeError):
         ~~~~~~~~~~~~~~~~~^^^^^^^^^^^
AssertionError: TypeError not raised`
example test: `test_super.TestSuper.test___classcell___wrong_cell`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test__decode_filter_properties filterspec = lzma._decode_filter_properties(f, b<str>) _lzma.LZMAErro`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_lzma.py", line 1561, in test__decode_filter_properties
    filterspec = lzma._decode_filter_properties(f, b"")
_lzma.LZMAError: Invalid or unsupported options`
example test: `test_lzma.MiscellaneousTestCase.test__decode_filter_properties`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test__thread_interrupt_main self.assertIn(b<str>, err) ~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_signal.py", line 1455, in test__thread_interrupt_main
    self.assertIn(b'OSError: Signal 2 ignored due to race condition', err)
    ~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`
example test: `test_signal.RaiseSignalTest.test__thread_interrupt_main`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_1000_bytes self.assertEqual(self.small_buffer_test(<n>), <n>) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_pyexpat.py", line 673, in test_1000_bytes
    self.assertEqual(self.small_buffer_test(1000), 1)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: 0 != 1`
example test: `test_pyexpat.ChardataBufferTest.test_1000_bytes`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_1025_bytes self.assertEqual(self.small_buffer_test(<n>), <n>) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_pyexpat.py", line 670, in test_1025_bytes
    self.assertEqual(self.small_buffer_test(1025), 2)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: 0 != 2`
example test: `test_pyexpat.ChardataBufferTest.test_1025_bytes`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_3611 self.assertEqual(ZeroDivisionError, cm.unraisable.exc_type) ^^^^^^^^^^^^^^^^^^^^^^ Attribu`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_raise.py", line 494, in test_3611
    self.assertEqual(ZeroDivisionError, cm.unraisable.exc_type)
                                        ^^^^^^^^^^^^^^^^^^^^^^
AttributeError: 'NoneType' object ha`
example test: `test_raise.TestContext.test_3611`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_absolute_circular_submodule self.assertIn( ~~~~~~~~~~~~~^ <str> ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_import/__init__.py", line 2163, in test_absolute_circular_submodule
    self.assertIn(
    ~~~~~~~~~~~~~^
        "cannot access submodule 'parent' of module "
        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`
example test: `test_import.CircularImportTests.test_absolute_circular_submodule`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_absolute_imports self._do_test(absolute_import_test) ~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^ File <`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_modulefinder.py", line 363, in test_absolute_imports
    self._do_test(absolute_import_test)
    ~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/t`
example test: `test_modulefinder.ModuleFinderTest.test_absolute_imports`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_access_parameter m.write_byte(b<str>) ~~~~~~~~~~~~^^^^^^ AttributeError: <str> object has no at`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_mmap.py", line 179, in test_access_parameter
    m.write_byte(b'd')
    ~~~~~~~~~~~~^^^^^^
AttributeError: 'mmap.mmap' object has no attribute 'write_byte'`
example test: `test_mmap.MmapTests.test_access_parameter`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_aclose with self.assertWarnsRegex(RuntimeWarning, msg): ~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_asyncgen.py", line 2029, in test_aclose
    with self.assertWarnsRegex(RuntimeWarning, msg):
         ~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^
AssertionError: RuntimeWarning not triggered`
example test: `test_asyncgen.TestUnawaitedWarnings.test_aclose`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_add_signal_handler self.assertRaises( ~~~~~~~~~~~~~~~~~^ RuntimeError, self.loop.add_signal_han`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_asyncio/test_events.py", line 472, in test_add_signal_handler
    self.assertRaises(
    ~~~~~~~~~~~~~~~~~^
        RuntimeError, self.loop.add_signal_handler, signal.SIGKILL,
        ^^^^^^^^^^^^^`
example test: `test_asyncio.test_events.SelectEventLoopTests.test_add_signal_handler`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_algorithms_available digest = hashlib.new(name, usedforsecurity=False) File <str>, line <n>, in`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_hashlib.py", line 224, in test_algorithms_available
    digest = hashlib.new(name, usedforsecurity=False)
  File "/opt/elide/lib/resources/python/python-home/lib/python3.13/hashlib.py", line 158, i`
example test: `test_hashlib.HashLibTestCase.test_algorithms_available`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_aliases with self.assertRaises(KeyError): ~~~~~~~~~~~~~~~~~^^^^^^^^^^ AssertionError: KeyError `

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_ucn.py", line 167, in test_aliases
    with self.assertRaises(KeyError):
         ~~~~~~~~~~~~~~~~~^^^^^^^^^^
AssertionError: KeyError not raised`
example test: `test_ucn.UnicodeNamesTest.test_aliases`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_all script_helper.run_test_script(script) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^ File <str>, lin`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_eintr.py", line 17, in test_all
    script_helper.run_test_script(script)
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/support/script_hel`
example test: `test_eintr.EINTRTests.test_all`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_all_locks self.assertEqual(<n>, len(self.bootstrap._module_locks), ~~~~~~~~~~~~~~~~^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_importlib/test_locks.py", line 145, in test_all_locks
    self.assertEqual(0, len(self.bootstrap._module_locks),
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                     self`
example test: `test_importlib.test_locks.Frozen_LifetimeTests.test_all_locks`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_annotations eq(<str>) ~~^^^^^^^^^^^^^^^^^^^^^^^^^^ File <str>, line <n>, in assertAnnotationEqu`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_future_stmt/test_future.py", line 338, in test_annotations
    eq("{i for i in (1, 2, 3)}")
    ~~^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_futu`
example test: `test_future_stmt.test_future.AnnotationsFutureTestCase.test_annotations`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_annotations_constant_fold codes = [(i.opname, i.argval) for i in dis.get_instructions(g)] ~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_positional_only_arg.py", line 443, in test_annotations_constant_fold
    codes = [(i.opname, i.argval) for i in dis.get_instructions(g)]
                                           ~~~~~~~~~~~~~~~~~`
example test: `test_positional_only_arg.PositionalOnlyTestCase.test_annotations_constant_fold`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_append_bom self.assertEqual(f.read(), <str>.encode(charset)) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_io.py", line 3504, in test_append_bom
    self.assertEqual(f.read(), 'aaaxxx'.encode(charset))
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: b'\xff\xfea\x00a\x00a\x00\xff`
example test: `test_io.CTextIOWrapperTest.test_append_bom`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_args_from_interpreter_flags self.check_options([<str>, <str>, <str>, <str>], ~~~~~~~~~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_support.py", line 571, in test_args_from_interpreter_flags
    self.check_options(['-I', '-E', '-s', '-P'],
    ~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^
                       'args_from_interp`
example test: `test_support.TestSupport.test_args_from_interpreter_flags`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_array codecs.readbuffer_encode(array.array(<str>, b<str>)), ~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_codecs.py", line 1068, in test_array
    codecs.readbuffer_encode(array.array("b", b"spam")),
    ~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^
NotImplementedError: readbuffer_encode`
example test: `test_codecs.ReadBufferTest.test_array`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_array self.run_worker(self._test_array, o) ~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^ File <str>, lin`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/_test_multiprocessing.py", line 6600, in test_array
    self.run_worker(self._test_array, o)
    ~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/_test`
example test: `test_multiprocessing_fork.test_misc.TestSyncManagerTypes.test_array`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_asctime asc = time.asctime((bigyear, <n>, <n>) + (<n>,) * <n>) OverflowError: year out of range`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_time.py", line 359, in test_asctime
    asc = time.asctime((bigyear, 6, 1) + (0,) * 6)
OverflowError: year out of range`
example test: `test_time.TimeTestCase.test_asctime`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_asend with self.assertWarnsRegex(RuntimeWarning, msg): ~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_asyncgen.py", line 2009, in test_asend
    with self.assertWarnsRegex(RuntimeWarning, msg):
         ~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^
AssertionError: RuntimeWarning not triggered`
example test: `test_asyncgen.TestUnawaitedWarnings.test_asend`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_asn1object self.assertRaises(ValueError, ssl._ASN1Object, <str>) ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_ssl.py", line 855, in test_asn1object
    self.assertRaises(ValueError, ssl._ASN1Object, 'serverAuth')
    ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/opt/elide/lib/resour`
example test: `test_ssl.BasicSocketTests.test_asn1object`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_assert_python_failure rc, out, err = script_helper.assert_python_failure(<str>, <str>) ~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_script_helper.py", line 19, in test_assert_python_failure
    rc, out, err = script_helper.assert_python_failure('-c', 'sys.exit(0)')
                   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^`
example test: `test_script_helper.TestScriptHelper.test_assert_python_failure`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_assert_python_ok_raises with self.assertRaises(AssertionError) as error_context: ^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_script_helper.py", line 24, in test_assert_python_ok_raises
    with self.assertRaises(AssertionError) as error_context:
         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: `
example test: `test_script_helper.TestScriptHelper.test_assert_python_ok_raises`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_assigned_attributes self.assertIs(getattr(wrapper, name), getattr(wrapped, name)) ~~~~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_reprlib.py", line 834, in test_assigned_attributes
    self.assertIs(getattr(wrapper, name), getattr(wrapped, name))
    ~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError`
example test: `test_reprlib.TestRecursiveRepr.test_assigned_attributes`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_async_gen_3_arg_deprecation_warning with self.assertWarns(DeprecationWarning): ~~~~~~~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_asyncgen.py", line 545, in test_async_gen_3_arg_deprecation_warning
    with self.assertWarns(DeprecationWarning):
         ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^
AssertionError: DeprecationWarning n`
example test: `test_asyncgen.AsyncGenTest.test_async_gen_3_arg_deprecation_warning`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_async_gen_api_01 self.assertEqual(g.__name__, <str>) ^^^^^^^^^^ AttributeError: <str> object ha`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_asyncgen.py", line 558, in test_async_gen_api_01
    self.assertEqual(g.__name__, 'gen')
                     ^^^^^^^^^^
AttributeError: 'async_generator' object has no attribute '__name__'. Did yo`
example test: `test_asyncgen.AsyncGenTest.test_async_gen_api_01`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_async_gen_asend_close_runtime_error with self.assertRaisesRegex(RuntimeError, <str>): ~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_asyncgen.py", line 592, in test_async_gen_asend_close_runtime_error
    with self.assertRaisesRegex(RuntimeError, "coroutine ignored GeneratorExit"):
         ~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^`
example test: `test_asyncgen.AsyncGenTest.test_async_gen_asend_close_runtime_error`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_async_gen_asend_throw_concurrent_with_send with self.assertRaisesRegex(RuntimeError, ~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_asyncgen.py", line 425, in test_async_gen_asend_throw_concurrent_with_send
    with self.assertRaisesRegex(RuntimeError,
         ~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^
            r'anext\(\): async`
example test: `test_asyncgen.AsyncGenTest.test_async_gen_asend_throw_concurrent_with_send`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_async_gen_asend_throw_concurrent_with_throw with self.assertRaisesRegex(RuntimeError, ~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_asyncgen.py", line 496, in test_async_gen_asend_throw_concurrent_with_throw
    with self.assertRaisesRegex(RuntimeError,
         ~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^
            r'anext\(\): asyn`
example test: `test_asyncgen.AsyncGenTest.test_async_gen_asend_throw_concurrent_with_throw`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_async_gen_asyncio_gc_aclose_09 self.assertEqual(DONE, <n>) ~~~~~~~~~~~~~~~~^^^^^^^^^ AssertionE`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_asyncgen.py", line 1314, in test_async_gen_asyncio_gc_aclose_09
    self.assertEqual(DONE, 1)
    ~~~~~~~~~~~~~~~~^^^^^^^^^
AssertionError: 0 != 1`
example test: `test_asyncgen.AsyncGenAsyncioTest.test_async_gen_asyncio_gc_aclose_09`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_async_gen_asyncio_shutdown_exception_02 message, = messages ^^^^^^^^ ValueError: not enough val`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_asyncgen.py", line 1800, in test_async_gen_asyncio_shutdown_exception_02
    message, = messages
    ^^^^^^^^
ValueError: not enough values to unpack (expected 1, got 0)`
example test: `test_asyncgen.AsyncGenAsyncioTest.test_async_gen_asyncio_shutdown_exception_02`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_async_gen_athrow_close_runtime_error with self.assertRaisesRegex(RuntimeError, <str>): ~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_asyncgen.py", line 619, in test_async_gen_athrow_close_runtime_error
    with self.assertRaisesRegex(RuntimeError, "coroutine ignored GeneratorExit"):
         ~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^`
example test: `test_asyncgen.AsyncGenTest.test_async_gen_athrow_close_runtime_error`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_async_gen_athrow_throw_concurrent_with_send with self.assertRaisesRegex(RuntimeError, ~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_asyncgen.py", line 458, in test_async_gen_athrow_throw_concurrent_with_send
    with self.assertRaisesRegex(RuntimeError,
         ~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^
            r'athrow\(\): asy`
example test: `test_asyncgen.AsyncGenTest.test_async_gen_athrow_throw_concurrent_with_send`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_async_gen_athrow_throw_concurrent_with_throw with self.assertRaisesRegex(RuntimeError, ~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_asyncgen.py", line 533, in test_async_gen_athrow_throw_concurrent_with_throw
    with self.assertRaisesRegex(RuntimeError,
         ~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^
            r'athrow\(\): as`
example test: `test_asyncgen.AsyncGenTest.test_async_gen_athrow_throw_concurrent_with_throw`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_async_gen_expression_02 res = self.loop.run_until_complete(run()) File <str>, line <n>, in run_`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_asyncgen.py", line 1835, in test_async_gen_expression_02
    res = self.loop.run_until_complete(run())
  File "/opt/elide/lib/resources/python/python-home/lib/python3.13/asyncio/base_events.py", li`
example test: `test_asyncgen.AsyncGenAsyncioTest.test_async_gen_expression_02`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_async_gen_throw_custom_same_aclose_coro_twice nxt.throw(MyException) ~~~~~~~~~^^^^^^^^^^^^^ Fil`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_asyncgen.py", line 1931, in test_async_gen_throw_custom_same_aclose_coro_twice
    nxt.throw(MyException)
    ~~~~~~~~~^^^^^^^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/t`
example test: `test_asyncgen.AsyncGenAsyncioTest.test_async_gen_throw_custom_same_aclose_coro_twice`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_async_gen_throw_custom_same_athrow_coro_twice nxt.throw(MyException) ~~~~~~~~~^^^^^^^^^^^^^ Fil`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_asyncgen.py", line 1951, in test_async_gen_throw_custom_same_athrow_coro_twice
    nxt.throw(MyException)
    ~~~~~~~~~^^^^^^^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/t`
example test: `test_asyncgen.AsyncGenAsyncioTest.test_async_gen_throw_custom_same_athrow_coro_twice`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_async_gen_throw_same_aclose_coro_twice nxt.throw(GeneratorExit) ~~~~~~~~~^^^^^^^^^^^^^^^ StopIt`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_asyncgen.py", line 1911, in test_async_gen_throw_same_aclose_coro_twice
    nxt.throw(GeneratorExit)
    ~~~~~~~~~^^^^^^^^^^^^^^^
StopIteration`
example test: `test_asyncgen.AsyncGenAsyncioTest.test_async_gen_throw_same_aclose_coro_twice`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_asyncgen_finalization_by_gc self.assertTrue(status[<str>]) ~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_asyncio/test_base_events.py", line 1035, in test_asyncgen_finalization_by_gc
    self.assertTrue(status['finalized'])
    ~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^
AssertionError: False is not true`
example test: `test_asyncio.test_base_events.BaseEventLoopTests.test_asyncgen_finalization_by_gc`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_asyncgen_finalization_by_gc_in_other_thread self.assertTrue(status[<str>]) ~~~~~~~~~~~~~~~^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_asyncio/test_base_events.py", line 1054, in test_asyncgen_finalization_by_gc_in_other_thread
    self.assertTrue(status['finalized'])
    ~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^
AssertionError: False `
example test: `test_asyncio.test_base_events.BaseEventLoopTests.test_asyncgen_finalization_by_gc_in_other_thread`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_asyncio_repl_is_ok self.assertEqual(exit_code, <n>, <str>.join(output)) ~~~~~~~~~~~~~~~~^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_repl.py", line 385, in test_asyncio_repl_is_ok
    self.assertEqual(exit_code, 0, "".join(output))
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: 1 != 0 : await asyncio.sleep(0`
example test: `test_repl.TestInteractiveInterpreter.test_asyncio_repl_is_ok`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_asyncio_repl_reaches_python_startup_script self.assertIn(<str>, output) ~~~~~~~~~~~~~^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_repl.py", line 337, in test_asyncio_repl_reaches_python_startup_script
    self.assertIn("pythonstartup done!", output)
    ~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: 'pythonstart`
example test: `test_repl.TestInteractiveInterpreter.test_asyncio_repl_reaches_python_startup_script`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_atexit rc, out, err = script_helper.assert_python_ok(<str>, prog) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_weakref.py", line 2240, in test_atexit
    rc, out, err = script_helper.assert_python_ok('-c', prog)
                   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^
  File "/work/.harness/work/cpytho`
example test: `test_weakref.FinalizeTestCase.test_atexit`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_atexit_after_shutdown self.assertTrue(err) ~~~~~~~~~~~~~~~^^^^^ AssertionError: b<str> is not t`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_threading.py", line 2284, in test_atexit_after_shutdown
    self.assertTrue(err)
    ~~~~~~~~~~~~~~~^^^^^
AssertionError: b'' is not true`
example test: `test_threading.AtexitTests.test_atexit_after_shutdown`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_atexit_instances self.assertEqual(res.out.decode().splitlines(), [<str>, <str>]) ~~~~~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_atexit.py", line 46, in test_atexit_instances
    self.assertEqual(res.out.decode().splitlines(), ["atexit2", "atexit1"])
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`
example test: `test_atexit.FunctionalTest.test_atexit_instances`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_atexit_output self.assertEqual(out.strip(), b<str>) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^ As`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_threading.py", line 2252, in test_atexit_output
    self.assertEqual(out.strip(), b'parrot')
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: b'' != b'parrot'`
example test: `test_threading.AtexitTests.test_atexit_output`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_athrow with self.assertWarnsRegex(RuntimeWarning, msg): ~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_asyncgen.py", line 2019, in test_athrow
    with self.assertWarnsRegex(RuntimeWarning, msg):
         ~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^
AssertionError: RuntimeWarning not triggered`
example test: `test_asyncgen.TestUnawaitedWarnings.test_athrow`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_attr_matches self.assertEqual(self.stdcompleter.attr_matches(<str>), expected) ~~~~~~~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_rlcompleter.py", line 78, in test_attr_matches
    self.assertEqual(self.stdcompleter.attr_matches('None.'), expected)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Assert`
example test: `test_rlcompleter.TestRlcompleter.test_attr_matches`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_attribute_same_name_as_global_var self.assertEqual(inspect.getclosurevars(f), expected) ~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_inspect/test_inspect.py", line 2274, in test_attribute_same_name_as_global_var
    self.assertEqual(inspect.getclosurevars(f), expected)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
As`
example test: `test_inspect.test_inspect.TestGetClosureVars.test_attribute_same_name_as_global_var`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_attributes self.assertTrue(sys.int_info.bits_per_digit % <n> == <n>) ~~~~~~~~~~~~~~~^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_sys.py", line 674, in test_attributes
    self.assertTrue(sys.int_info.bits_per_digit % 5 == 0)
    ~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: False is not true`
example test: `test_sys.SysModuleTest.test_attributes`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_bad_args self.assertRaises(TypeError, codecs.readbuffer_encode, <n>) ~~~~~~~~~~~~~~~~~^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_codecs.py", line 1077, in test_bad_args
    self.assertRaises(TypeError, codecs.readbuffer_encode, 42)
    ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/opt/elide/lib/resource`
example test: `test_codecs.ReadBufferTest.test_bad_args`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_bad_counter_during_dealloc self.assertEqual(cm.unraisable.exc_type, TypeError) ^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_cprofile.py", line 31, in test_bad_counter_during_dealloc
    self.assertEqual(cm.unraisable.exc_type, TypeError)
                     ^^^^^^^^^^^^^^^^^^^^^^
AttributeError: 'NoneType' object has n`
example test: `test_cprofile.CProfileTest.test_bad_counter_during_dealloc`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_bad_decode_args decoder = codecs.getdecoder(encoding) LookupError: unknown encoding euc_jis_200`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_codecs.py", line 2291, in test_bad_decode_args
    decoder = codecs.getdecoder(encoding)
LookupError: unknown encoding euc_jis_2004`
example test: `test_codecs.BasicUnicodeTest.test_bad_decode_args`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_bad_encode_args encoder = codecs.getencoder(encoding) LookupError: unknown encoding euc_jis_200`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_codecs.py", line 2298, in test_bad_encode_args
    encoder = codecs.getencoder(encoding)
LookupError: unknown encoding euc_jis_2004`
example test: `test_codecs.BasicUnicodeTest.test_bad_encode_args`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_bad_fd self.assertIsNone(os.device_encoding(<n>)) ~~~~~~~~~~~~~~~~~~^^^^^^^^ AttributeError: mo`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_os.py", line 3377, in test_bad_fd
    self.assertIsNone(os.device_encoding(123456))
                      ~~~~~~~~~~~~~~~~~~^^^^^^^^
AttributeError: module 'os' has no attribute 'device_encoding'`
example test: `test_os.DeviceEncodingTests.test_bad_fd`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_bad_indentation self.assertEqual(len(err), <n>) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^ AssertionError: <`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_traceback.py", line 200, in test_bad_indentation
    self.assertEqual(len(err), 4)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^
AssertionError: 3 != 4`
example test: `test_traceback.TracebackCases.test_bad_indentation`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_bad_length with self.assertRaises(OverflowError): ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^ AssertionErr`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_ctypes/test_arrays.py", line 233, in test_bad_length
    with self.assertRaises(OverflowError):
         ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^
AssertionError: OverflowError not raised`
example test: `test_ctypes.test_arrays.ArrayTestCase.test_bad_length`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_badbom self.assertRaises(UnicodeDecodeError, f.read) ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_codecs.py", line 668, in test_badbom
    self.assertRaises(UnicodeDecodeError, f.read)
    ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: UnicodeDecodeError not raised by read`
example test: `test_codecs.UTF16Test.test_badbom`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_barrier self.run_worker(self._test_barrier, o) ~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^ File <str`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/_test_multiprocessing.py", line 6505, in test_barrier
    self.run_worker(self._test_barrier, o)
    ~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test`
example test: `test_multiprocessing_fork.test_misc.TestSyncManagerTypes.test_barrier`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_barry_as_bdfl compile(code.format(<str>), <str>, <str>, ~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_flufl.py", line 9, in test_barry_as_bdfl
    compile(code.format('<>'), '<BDFL test>', 'exec',
    ~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
            __future__.CO_FUTURE_BARRY_AS_BDFL)
`
example test: `test_flufl.FLUFLTests.test_barry_as_bdfl`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_barry_as_bdfl_look_ma_with_no_compiler_flags compile(code.format(<str>), <str>, <str>) ~~~~~~~^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_flufl.py", line 41, in test_barry_as_bdfl_look_ma_with_no_compiler_flags
    compile(code.format('<>'), '<BDFL test>', 'exec')
    ~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "<BDFL te`
example test: `test_flufl.FLUFLTests.test_barry_as_bdfl_look_ma_with_no_compiler_flags`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_base_class_have_text_signature self.assertEqual(text_signature, <str>) ~~~~~~~~~~~~~~~~^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_inspect/test_inspect.py", line 6425, in test_base_class_have_text_signature
    self.assertEqual(text_signature, '(raw, buffer_size=DEFAULT_BUFFER_SIZE)')
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^`
example test: `test_inspect.test_inspect.TestSignatureDefinitions.test_base_class_have_text_signature`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_basic mv = memoryview(MyBuffer()) TypeError: memoryview: a bytes-like object is required, not <`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_buffer.py", line 4479, in test_basic
    mv = memoryview(MyBuffer())
TypeError: memoryview: a bytes-like object is required, not 'MyBuffer'`
example test: `test_buffer.TestPythonBufferProtocol.test_basic`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_basic_script self._check_script(script_name, script_name, script_name, ~~~~~~~~~~~~~~~~~~^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_cmd_line_script.py", line 226, in test_basic_script
    self._check_script(script_name, script_name, script_name,
    ~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                     `
example test: `test_cmd_line_script.CmdLineTest.test_basic_script`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_basic_script self._check_script(script_name) ~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^ File <str>, line <`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_multiprocessing_main_handling.py", line 173, in test_basic_script
    self._check_script(script_name)
    ~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/t`
example test: `test_multiprocessing_main_handling.SpawnCmdLineTest.test_basic_script`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_basic_script_no_suffix self._check_script(script_name) ~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^ File <st`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_multiprocessing_main_handling.py", line 179, in test_basic_script_no_suffix
    self._check_script(script_name)
    ~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-`
example test: `test_multiprocessing_main_handling.SpawnCmdLineTest.test_basic_script_no_suffix`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_basics (b, size) = codecs.getencoder(encoding)(s) ~~~~~~~~~~~~~~~~~~~~~~~~~~~^^^ NotImplemented`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_codecs.py", line 2168, in test_basics
    (b, size) = codecs.getencoder(encoding)(s)
                ~~~~~~~~~~~~~~~~~~~~~~~~~~~^^^
NotImplementedError: latin1`
example test: `test_codecs.BasicUnicodeTest.test_basics`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_binary_uuencode_payload msg.get_payload(decode=True), ~~~~~~~~~~~~~~~^^^^^^^^^^^^^ File <str>, `

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_email/test_email.py", line 800, in test_binary_uuencode_payload
    msg.get_payload(decode=True),
    ~~~~~~~~~~~~~~~^^^^^^^^^^^^^
  File "/opt/elide/lib/resources/python/python-home/lib/python3.13`
example test: `test_email.test_email.TestMessageAPI.test_binary_uuencode_payload`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_blake2b self.check_blake2(hashlib.blake2b, <n>, <n>, <n>, <n>, (<n><<<n>)-<n>) ~~~~~~~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_hashlib.py", line 829, in test_blake2b
    self.check_blake2(hashlib.blake2b, 16, 16, 64, 64, (1<<64)-1)
    ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/.harness/wor`
example test: `test_hashlib.HashLibTestCase.test_blake2b`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_blake2b_vectors self.check(<str>, msg, md, key=key) ~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Fil`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_hashlib.py", line 870, in test_blake2b_vectors
    self.check('blake2b', msg, md, key=key)
    ~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test`
example test: `test_hashlib.HashLibTestCase.test_blake2b_vectors`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_blake2s self.check_blake2(hashlib.blake2s, <n>, <n>, <n>, <n>, (<n><<<n>)-<n>) ~~~~~~~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_hashlib.py", line 874, in test_blake2s
    self.check_blake2(hashlib.blake2s, 8, 8, 32, 32, (1<<48)-1)
    ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/.harness/work/cp`
example test: `test_hashlib.HashLibTestCase.test_blake2s`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_blake2s_vectors self.check(<str>, msg, md, key=key) ~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Fil`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_hashlib.py", line 913, in test_blake2s_vectors
    self.check('blake2s', msg, md, key=key)
    ~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test`
example test: `test_hashlib.HashLibTestCase.test_blake2s_vectors`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_blocksize_name_blake2 self.check_blocksize_name(<str>, <n>, <n>) ~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_hashlib.py", line 588, in test_blocksize_name_blake2
    self.check_blocksize_name('blake2b', 128, 64)
    ~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^
  File "/work/.harness/work/cpython-core/cpy`
example test: `test_hashlib.HashLibTestCase.test_blocksize_name_blake2`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_boom garbagelen = len(gc.garbage) ^^^^^^^^^^ AttributeError: module <str> has no attribute <str`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_gc.py", line 521, in test_boom
    garbagelen = len(gc.garbage)
                     ^^^^^^^^^^
AttributeError: module 'gc' has no attribute 'garbage'`
example test: `test_gc.GCTests.test_boom`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_boom2 garbagelen = len(gc.garbage) ^^^^^^^^^^ AttributeError: module <str> has no attribute <st`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_gc.py", line 550, in test_boom2
    garbagelen = len(gc.garbage)
                     ^^^^^^^^^^
AttributeError: module 'gc' has no attribute 'garbage'`
example test: `test_gc.GCTests.test_boom2`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_bound_builtin_classmethod_o self.assertEqual(self._get_summary_line(dict.__class_getitem__), ~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_pydoc/test_pydoc.py", line 1609, in test_bound_builtin_classmethod_o
    self.assertEqual(self._get_summary_line(dict.__class_getitem__),
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`
example test: `test_pydoc.test_pydoc.TestDescriptions.test_bound_builtin_classmethod_o`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_bound_builtin_method_coexist_o self.assertEqual(self._get_summary_line(set().__contains__), ~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_pydoc/test_pydoc.py", line 1593, in test_bound_builtin_method_coexist_o
    self.assertEqual(self._get_summary_line(set().__contains__),
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`
example test: `test_pydoc.test_pydoc.TestDescriptions.test_bound_builtin_method_coexist_o`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_bound_builtin_method_o self.assertEqual(self._get_summary_line(set().add), ~~~~~~~~~~~~~~~~^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_pydoc/test_pydoc.py", line 1585, in test_bound_builtin_method_o
    self.assertEqual(self._get_summary_line(set().add),
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
        "add(object, `
example test: `test_pydoc.test_pydoc.TestDescriptions.test_bound_builtin_method_o`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_bounded_semaphore self.test_semaphore(sname=<str>) ~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/_test_multiprocessing.py", line 6487, in test_bounded_semaphore
    self.test_semaphore(sname="BoundedSemaphore")
    ~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/.harness/work/cpython-co`
example test: `test_multiprocessing_fork.test_misc.TestSyncManagerTypes.test_bounded_semaphore`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_bpo36504_signed_int_overflow with self.assertRaises(OverflowError): ~~~~~~~~~~~~~~~~~^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_ctypes/test_arrays.py", line 262, in test_bpo36504_signed_int_overflow
    with self.assertRaises(OverflowError):
         ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^
AssertionError: OverflowError not raised`
example test: `test_ctypes.test_arrays.ArrayTestCase.test_bpo36504_signed_int_overflow`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_broken_base64_payload self.assertEqual(msg.get_payload(decode=True), ~~~~~~~~~~~~~~~~^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_email/test_email.py", line 703, in test_broken_base64_payload
    self.assertEqual(msg.get_payload(decode=True),
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                     (b'\x03\x00\`
example test: `test_email.test_email.TestMessageAPI.test_broken_base64_payload`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_Buffer self.assertIsInstance(sample(b<str>), Buffer) ~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_collections.py", line 1962, in test_Buffer
    self.assertIsInstance(sample(b"x"), Buffer)
    ~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^
AssertionError: b'x' is not an instance of <class 'collect`
example test: `test_collections.TestCollectionABCs.test_Buffer`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_buffer_flags with memoryview._from_flags(mutable, inspect.BufferFlags.WRITABLE) as mv: ~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_buffer.py", line 4565, in test_buffer_flags
    with memoryview._from_flags(mutable, inspect.BufferFlags.WRITABLE) as mv:
         ~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Attr`
example test: `test_buffer.TestPythonBufferProtocol.test_buffer_flags`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_buffer_reference_loop m = memoryview(b<str>).__buffer__(<n>) AttributeError: <str> object has n`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_memoryview.py", line 731, in test_buffer_reference_loop
    m = memoryview(b'abc').__buffer__(0)
AttributeError: 'memoryview' object has no attribute '__buffer__'`
example test: `test_memoryview.OtherTest.test_buffer_reference_loop`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_buffering_enabled self.assertEqual(self.stuff, [<str>], ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^ <`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_pyexpat.py", line 501, in test_buffering_enabled
    self.assertEqual(self.stuff, ['123'],
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^
                     "buffered text not properly collapsed")
   `
example test: `test_pyexpat.BufferTextTest.test_buffering_enabled`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_bug1055820b self.assertEqual(len(ouch), <n>) # else the callbacks didn't run ~~~~~~~~~~~~~~~~^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_gc.py", line 669, in test_bug1055820b
    self.assertEqual(len(ouch), 2)  # else the callbacks didn't run
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^
AssertionError: 0 != 2`
example test: `test_gc.GCTests.test_bug1055820b`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_bug1055820c self.fail(<str>) ~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ AssertionErro`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_gc.py", line 1425, in test_bug1055820c
    self.fail("gc didn't happen after 10000 iterations")
    ~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: gc didn't happen after 10000`
example test: `test_gc.GCTogglingTests.test_bug1055820c`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_build self.check_build(<str>) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^ File <str>, line <n>, in check_bui`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_cext/__init__.py", line 34, in test_build
    self.check_build('_test_cext')
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_cext/__init__.py"`
example test: `test_cext.TestExt.test_build`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_build self.check_build(<str>) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^ File <str>, line <n>, in check_bu`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_cppext/__init__.py", line 29, in test_build
    self.check_build('_testcppext')
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_cppext/__init`
example test: `test_cppext.TestCPPExt.test_build`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_build_c11 self.check_build(<str>, std=<str>) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ File`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_cext/__init__.py", line 37, in test_build_c11
    self.check_build('_test_c11_cext', std='c11')
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-ro`
example test: `test_cext.TestExt.test_build_c11`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_build_c99 self.check_build(<str>, std=<str>) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ File`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_cext/__init__.py", line 41, in test_build_c99
    self.check_build('_test_c99_cext', std='c99')
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-ro`
example test: `test_cext.TestExt.test_build_c99`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_build_cpp03 self.check_build(<str>, std=<str>) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ F`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_cppext/__init__.py", line 32, in test_build_cpp03
    self.check_build('_testcpp03ext', std='c++03')
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/.harness/work/cpython-core/cpyt`
example test: `test_cppext.TestCPPExt.test_build_cpp03`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_build_cpp11 self.check_build(<str>, std=<str>) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ F`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_cppext/__init__.py", line 36, in test_build_cpp11
    self.check_build('_testcpp11ext', std='c++11')
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/.harness/work/cpython-core/cpyt`
example test: `test_cppext.TestCPPExt.test_build_cpp11`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_build_limited_c11 self.check_build(<str>, limited=True, std=<str>) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_cext/__init__.py", line 49, in test_build_limited_c11
    self.check_build('_test_limited_c11_cext', limited=True, std='c11')
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`
example test: `test_cext.TestExt.test_build_limited_c11`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_builtin_completion self.assertIn(b<str>, output) ~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^ AssertionErr`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_pdb.py", line 4204, in test_builtin_completion
    self.assertIn(b'special', output)
    ~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^
AssertionError: b'special' not found in bytearray(b"pri\tval\t + 'al')\r\n`
example test: `test_pdb.PdbTestReadline.test_builtin_completion`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_bytearray_release_buffer_read_flag obj.__buffer__(inspect.BufferFlags.READ) ~~~~~~~~~~~~~~^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_buffer.py", line 4446, in test_bytearray_release_buffer_read_flag
    obj.__buffer__(inspect.BufferFlags.READ)
    ~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: 'bytearray' object has no`
example test: `test_buffer.TestBufferProtocol.test_bytearray_release_buffer_read_flag`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_bytearray_repr self.assertEqual(f(bytearray(b<str>)), r<str><str><str>\<str>bytearray(b<str>)<s`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_bytes.py", line 2001, in test_bytearray_repr
    self.assertEqual(f(bytearray(b"'")), r'''bytearray(b"\'")''') # "\'"
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionErro`
example test: `test_bytes.AssortedBytesTest.test_bytearray_repr`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_bytearray_str self.test_bytearray_repr(str) ~~~~~~~~~~~~~~~~~~~~~~~~^^^^^ File <str>, line <n>,`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_bytes.py", line 2015, in test_bytearray_str
    self.test_bytearray_repr(str)
    ~~~~~~~~~~~~~~~~~~~~~~~~^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_bytes.py", line 2`
example test: `test_bytes.AssortedBytesTest.test_bytearray_str`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_c_buffer mv = buf.__buffer__(<n>) AttributeError: <str> object has no attribute <str>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_buffer.py", line 4600, in test_c_buffer
    mv = buf.__buffer__(0)
AttributeError: 'testBufType' object has no attribute '__buffer__'`
example test: `test_buffer.TestPythonBufferProtocol.test_c_buffer`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_c_buffer_invalid_flags self.assertRaises(SystemError, buf.__buffer__, PyBUF_READ) ^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_buffer.py", line 4616, in test_c_buffer_invalid_flags
    self.assertRaises(SystemError, buf.__buffer__, PyBUF_READ)
                                   ^^^^^^^^^^^^^^
AttributeError: 'testBufType' `
example test: `test_buffer.TestPythonBufferProtocol.test_c_buffer_invalid_flags`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_c_char_p self.assertEqual(refcnt + <n>, sys.getrefcount(s)) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_ctypes/test_internals.py", line 34, in test_c_char_p
    self.assertEqual(refcnt + 1, sys.getrefcount(s))
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: 11 != 12`
example test: `test_ctypes.test_internals.ObjectsTestCase.test_c_char_p`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_c_locale_surrogateescape self.check_locale_surrogateescape(<str>) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_sys.py", line 1079, in test_c_locale_surrogateescape
    self.check_locale_surrogateescape('C')
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/`
example test: `test_sys.SysModuleTest.test_c_locale_surrogateescape`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_cache_location self.assertFalse(hasattr(c_zoneinfo.ZoneInfo, <str>)) ~~~~~~~~~~~~~~~~^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_zoneinfo/test_zoneinfo.py", line 2110, in test_cache_location
    self.assertFalse(hasattr(c_zoneinfo.ZoneInfo, "_weak_cache"))
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Ass`
example test: `test_zoneinfo.test_zoneinfo.ExtensionBuiltTest.test_cache_location`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_call_builtins mv = ba.__buffer__(<n>) AttributeError: <str> object has no attribute <str>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_buffer.py", line 4590, in test_call_builtins
    mv = ba.__buffer__(0)
AttributeError: 'bytearray' object has no attribute '__buffer__'`
example test: `test_buffer.TestPythonBufferProtocol.test_call_builtins`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_call_kwargs self.assertEqual(rc, <n>) ~~~~~~~~~~~~~~~~^^^^^^^ AssertionError: <n> != <n>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_subprocess.py", line 306, in test_call_kwargs
    self.assertEqual(rc, 1)
    ~~~~~~~~~~~~~~~~^^^^^^^
AssertionError: 0 != 1`
example test: `test_subprocess.ProcessTestCase.test_call_kwargs`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_call_tracing self.assertRaises(TypeError, sys.call_tracing, type, <n>) ^^^^^^^^^^^^^^^^ Attribu`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_sys.py", line 459, in test_call_tracing
    self.assertRaises(TypeError, sys.call_tracing, type, 2)
                                 ^^^^^^^^^^^^^^^^
AttributeError: module 'sys' has no attribute '`
example test: `test_sys.SysModuleTest.test_call_tracing`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_callbacks self.assertEqual( ~~~~~~~~~~~~~~~~^ b<str>.decode(<str>, <str>), ^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_codeccallbacks.py", line 260, in test_callbacks
    self.assertEqual(
    ~~~~~~~~~~~~~~~~^
        b"\\u3042\\u3xxx".decode("unicode-escape", "test.handler1"),
        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^`
example test: `test_codeccallbacks.CodecCallbackTest.test_callbacks`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_cancel_later_without_dump_traceback_later output, exitcode = self.get_output(code) ~~~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_faulthandler.py", line 895, in test_cancel_later_without_dump_traceback_later
    output, exitcode = self.get_output(code)
                       ~~~~~~~~~~~~~~~^^^^^^
  File "/work/.harness/work/c`
example test: `test_faulthandler.FaultHandlerTests.test_cancel_later_without_dump_traceback_later`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_cant_inherit_from_iterator_slots with self.assertRaisesRegex( ~~~~~~~~~~~~~~~~~~~~~~^ TypeError`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_dataclasses/__init__.py", line 3347, in test_cant_inherit_from_iterator_slots
    with self.assertRaisesRegex(
         ~~~~~~~~~~~~~~~~~~~~~~^
       TypeError,
       ^^^^^^^^^^
        "^Slots o`
example test: `test_dataclasses.TestSlots.test_cant_inherit_from_iterator_slots`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_cantrace self.do_test(<str>) ~~~~~~~~~~~~^^^^^^^^^^^^^^^^^ File <str>, line <n>, in do_test sel`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_audit.py", line 78, in test_cantrace
    self.do_test("test_cantrace")
    ~~~~~~~~~~~~^^^^^^^^^^^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_audit.py", line 39, in d`
example test: `test_audit.AuditTest.test_cantrace`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_capsule_type self.assertIsInstance(_datetime.datetime_CAPI, types.CapsuleType) ^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_types.py", line 671, in test_capsule_type
    self.assertIsInstance(_datetime.datetime_CAPI, types.CapsuleType)
                          ^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: module '_datetime' `
example test: `test_types.TypesTests.test_capsule_type`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_carloverre_multi_inherit_invalid self.fail(<str>) ~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_descr.py", line 4457, in test_carloverre_multi_inherit_invalid
    self.fail("setattr through indirect base types should be rejected")
    ~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`
example test: `test_descr.ClassPropertiesAndMethods.test_carloverre_multi_inherit_invalid`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_case_blake2b_0 self.check(<str>, b<str>, ~~~~~~~~~~^^^^^^^^^^^^^^^^ <str>+ ^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_hashlib.py", line 838, in test_case_blake2b_0
    self.check('blake2b', b"",
    ~~~~~~~~~~^^^^^^^^^^^^^^^^
      "786a02f742015903c6c6fd852552d272912f4740e15847618a86e217f71f5419"+
      ^^^^^^^^^`
example test: `test_hashlib.HashLibTestCase.test_case_blake2b_0`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_case_blake2b_1 self.check(<str>, b<str>, ~~~~~~~~~~^^^^^^^^^^^^^^^^^^^ <str>+ ^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_hashlib.py", line 844, in test_case_blake2b_1
    self.check('blake2b', b"abc",
    ~~~~~~~~~~^^^^^^^^^^^^^^^^^^^
      "ba80a53f981c4d0d6a2797b69f12f6e94c212f14685ac4b74b12bb6fdbffa2d1"+
      ^^^`
example test: `test_hashlib.HashLibTestCase.test_case_blake2b_1`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_case_blake2b_all_parameters self.check(<str>, b<str>, ~~~~~~~~~~^^^^^^^^^^^^^^^^^^^ <str>, ^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_hashlib.py", line 852, in test_case_blake2b_all_parameters
    self.check('blake2b', b"foo",
    ~~~~~~~~~~^^^^^^^^^^^^^^^^^^^
      "920568b0c5873b2f0ab67bedb6cf1b2b",
      ^^^^^^^^^^^^^^^^^^^^^^`
example test: `test_hashlib.HashLibTestCase.test_case_blake2b_all_parameters`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_case_blake2s_0 self.check(<str>, b<str>, ~~~~~~~~~~^^^^^^^^^^^^^^^^ <str>) ^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_hashlib.py", line 883, in test_case_blake2s_0
    self.check('blake2s', b"",
    ~~~~~~~~~~^^^^^^^^^^^^^^^^
      "69217a3079908094e11121d042354a7c1f55b6482ca1a51e1b250dfd1ed0eef9")
      ^^^^^^^^^`
example test: `test_hashlib.HashLibTestCase.test_case_blake2s_0`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_case_blake2s_1 self.check(<str>, b<str>, ~~~~~~~~~~^^^^^^^^^^^^^^^^^^^ <str>) ^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_hashlib.py", line 888, in test_case_blake2s_1
    self.check('blake2s', b"abc",
    ~~~~~~~~~~^^^^^^^^^^^^^^^^^^^
      "508c5e8c327c14e2e1a72ba34eeb452f37458b209ed63a294d999b4c86675982")
      ^^^`
example test: `test_hashlib.HashLibTestCase.test_case_blake2s_1`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_case_blake2s_all_parameters self.check(<str>, b<str>, ~~~~~~~~~~^^^^^^^^^^^^^^^^^^^ <str>, ^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_hashlib.py", line 895, in test_case_blake2s_all_parameters
    self.check('blake2s', b"foo",
    ~~~~~~~~~~^^^^^^^^^^^^^^^^^^^
      "bf2a8f7fe3c555012a6f8046e646bc75",
      ^^^^^^^^^^^^^^^^^^^^^^`
example test: `test_hashlib.HashLibTestCase.test_case_blake2s_all_parameters`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_case_shake_128_0 self.check(<str>, b<str>, <str>, True) ~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_hashlib.py", line 961, in test_case_shake_128_0
    self.check('shake_128', b"", "7f9c", True)
    ~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/L`
example test: `test_hashlib.HashLibTestCase.test_case_shake_128_0`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_case_shake_256_0 self.check(<str>, b<str>, ~~~~~~~~~~^^^^^^^^^^^^^^^^^^ <str>, ^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_hashlib.py", line 968, in test_case_shake_256_0
    self.check('shake_256', b"",
    ~~~~~~~~~~^^^^^^^^^^^^^^^^^^
      "46b9dd2b0ba88d13233b3feb743eeb243fcd52ea62b81b82b50c27646ed5762f",
      ^^^`
example test: `test_hashlib.HashLibTestCase.test_case_shake_256_0`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_case_shake128_vector self.check(<str>, msg, md, True) ~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Fi`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_hashlib.py", line 965, in test_case_shake128_vector
    self.check('shake_128', msg, md, True)
    ~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/t`
example test: `test_hashlib.HashLibTestCase.test_case_shake128_vector`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_case_shake256_vector self.check(<str>, msg, md, True) ~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Fi`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_hashlib.py", line 975, in test_case_shake256_vector
    self.check('shake_256', msg, md, True)
    ~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/t`
example test: `test_hashlib.HashLibTestCase.test_case_shake256_vector`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_category self.assertEqual(self.db.category(<str>), <str> if self.old else <str>) ~~~~~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_unicodedata.py", line 282, in test_category
    self.assertEqual(self.db.category('\U0001012A'), 'Cn' if self.old else 'No')
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`
example test: `test_unicodedata.Unicode_3_2_0_FunctionsTest.test_category`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_change_size_1 parser.Parse(xml2, True) ~~~~~~~~~~~~^^^^^^^^^^^^ pyexpat.error: iso8859`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_pyexpat.py", line 767, in test_change_size_1
    parser.Parse(xml2, True)
    ~~~~~~~~~~~~^^^^^^^^^^^^
pyexpat.error: iso8859`
example test: `test_pyexpat.ChardataBufferTest.test_change_size_1`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_change_size_2 parser.Parse(xml2, True) ~~~~~~~~~~~~^^^^^^^^^^^^ pyexpat.error: iso8859`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_pyexpat.py", line 783, in test_change_size_2
    parser.Parse(xml2, True)
    ~~~~~~~~~~~~^^^^^^^^^^^^
pyexpat.error: iso8859`
example test: `test_pyexpat.ChardataBufferTest.test_change_size_2`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_chinese_codecs eq(h.encode(), <str><str><str>) ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_email/test_asian_codecs.py", line 84, in test_chinese_codecs
            eq(h.encode(), """\
            ~~^^^^^^^^^^^^^^^^^
    Chinese =?gb2312?b?1tDOxA==?= =?gbk?b?1tDOxA==?= =?gb18030?b?1tDOxA=`
example test: `test_email.test_asian_codecs.TestEmailAsianCodecs.test_chinese_codecs`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_choose_directory os.rmdir(dir) ~~~~~~~~^^^^^ OSError: [Errno <n>] Directory not empty: <str>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_tempfile.py", line 466, in test_choose_directory
    os.rmdir(dir)
    ~~~~~~~~^^^^^
OSError: [Errno 39] Directory not empty: '/tmp/tmpf7fpf300'`
example test: `test_tempfile.TestMkstempInner.test_choose_directory`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_chunkcoding self.assertEqual(u, utf8.decode(<str>)) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^ A`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/multibytecodec_support.py", line 46, in test_chunkcoding
    self.assertEqual(u, utf8.decode('utf-8'))
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: '☆첫가끝: 날아라 ㅤㅆㅠㅤㅤㅆㅠㅤ쓩~ ㅤㄴㅢㅇ큼! ㅤㄸㅡㅇ금없이 `
example test: `test_codecencodings_kr.Test_EUCKR.test_chunkcoding`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_chunkcoding u = self.decode(native)[<n>] ~~~~~~~~~~~^^^^^^^^ UnicodeDecodeError: <str> codec ca`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/multibytecodec_support.py", line 45, in test_chunkcoding
    u = self.decode(native)[0]
        ~~~~~~~~~~~^^^^^^^^
UnicodeDecodeError: 'big5hkscs' codec can't decode bytes in position 2-3: unmappable c`
example test: `test_codecencodings_hk.Test_Big5HKSCS.test_chunkcoding`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_class_cause_nonexception_result raise IndexError from ConstructMortal IndexError`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_raise.py", line 196, in test_class_cause_nonexception_result
    raise IndexError from ConstructMortal
IndexError`
example test: `test_raise.TestCause.test_class_cause_nonexception_result`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_classmethod self.assertEqual(self._get_summary_lines(X.__dict__[<str>]), ~~~~~~~~~~~~~~~~^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_pydoc/test_pydoc.py", line 1738, in test_classmethod
    self.assertEqual(self._get_summary_lines(X.__dict__['cm']),
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                `
example test: `test_pydoc.test_pydoc.TestDescriptions.test_classmethod`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_classmethod self.assertRaises(TypeError, wrapper, <n>) ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_decorators.py", line 105, in test_classmethod
    self.assertRaises(TypeError, wrapper, 1)
    ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: TypeError not raised by func`
example test: `test_decorators.TestDecorators.test_classmethod`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_cleanup self.assertEqual([<str>, <str>], out.decode().splitlines()) ~~~~~~~~~~~~~~~~^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_builtin.py", line 2576, in test_cleanup
    self.assertEqual(["before", "after"], out.decode().splitlines())
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: Lis`
example test: `test_builtin.ShutdownTest.test_cleanup`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_cleanup self.run_python(cmdargs) ~~~~~~~~~~~~~~~^^^^^^^^^ File <str>, line <n>, in run_python i`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_regrtest.py", line 2024, in test_cleanup
    self.run_python(cmdargs)
    ~~~~~~~~~~~~~~~^^^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_regrtest.py", line 840, in run`
example test: `test_regrtest.ArgsTestCase.test_cleanup`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_clear self.assertEqual(len(inner_frame.f_locals), <n>) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_traceback.py", line 3206, in test_clear
    self.assertEqual(len(inner_frame.f_locals), 0)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: 1 != 0`
example test: `test_traceback.MiscTracebackCases.test_clear`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_clear_executing with self.assertRaises(RuntimeError): ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^ Assertion`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_frame.py", line 119, in test_clear_executing
    with self.assertRaises(RuntimeError):
         ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^
AssertionError: RuntimeError not raised`
example test: `test_frame.ClearTest.test_clear_executing`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_clear_generator with self.assertRaisesRegex(RuntimeError, r<str>): ~~~~~~~~~~~~~~~~~~~~~~^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_frame.py", line 109, in test_clear_generator
    with self.assertRaisesRegex(RuntimeError, r'suspended frame'):
         ~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: Run`
example test: `test_frame.ClearTest.test_clear_generator`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_clear_locals self.assertEqual(outer.f_locals, {}) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^ Assertio`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_frame.py", line 209, in test_clear_locals
    self.assertEqual(outer.f_locals, {})
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^
AssertionError: {'inner': <function FrameAttrsTest.make_fr[60 chars]': 5}`
example test: `test_frame.FrameAttrsTest.test_clear_locals`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_clear_locals self.assertIs(None, wr()) ~~~~~~~~~~~~~^^^^^^^^^^^^ AssertionError: None is not <t`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_frame.py", line 59, in test_clear_locals
    self.assertIs(None, wr())
    ~~~~~~~~~~~~~^^^^^^^^^^^^
AssertionError: None is not <test.test_frame.ClearTest.test_clear_locals.<locals>.C object at 0x`
example test: `test_frame.ClearTest.test_clear_locals`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_clear_locals_after_f_locals_access inner() ~~~~~^^ File <str>, line <n>, in inner <n>/<n> ~^~ Z`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_frame.py", line 74, in test_clear_locals_after_f_locals_access
    inner()
    ~~~~~^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_frame.py", line 71, in inner
    1/0
    ~`
example test: `test_frame.ClearTest.test_clear_locals_after_f_locals_access`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_clinic_signature digest_name = constructor(b<str>).name ~~~~~~~~~~~^^^^^ _hashlib.UnsupportedDi`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_hashlib.py", line 258, in test_clinic_signature
    digest_name = constructor(b'').name
                  ~~~~~~~~~~~^^^^^
_hashlib.UnsupportedDigestmodError: NoSuchAlgorithmException: BLAKE2B-512 `
example test: `test_hashlib.HashLibTestCase.test_clinic_signature`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_clinic_signature_errors digest_name = constructor(b<str>).name ~~~~~~~~~~~^^^^^ _hashlib.Unsupp`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_hashlib.py", line 311, in test_clinic_signature_errors
    digest_name = constructor(b'').name
                  ~~~~~~~~~~~^^^^^
_hashlib.UnsupportedDigestmodError: NoSuchAlgorithmException: BLAKE`
example test: `test_hashlib.HashLibTestCase.test_clinic_signature_errors`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_close_clears_frame self.assertTrue(DetectDelete.deleted) ~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^ `

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_generators.py", line 276, in test_close_clears_frame
    self.assertTrue(DetectDelete.deleted)
    ~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^
AssertionError: False is not true`
example test: `test_generators.GeneratorTest.test_close_clears_frame`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_close_closed self.assertEqual(gen.close(), <n>) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^ AssertionError`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_generators.py", line 635, in test_close_closed
    self.assertEqual(gen.close(), 0)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^
AssertionError: None != 0`
example test: `test_generators.GeneratorCloseTest.test_close_closed`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_close_fds_after_preexec p = subprocess.Popen([sys.executable, fd_status], stdout=subprocess.PIP`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_subprocess.py", line 3394, in test_close_fds_after_preexec
    p = subprocess.Popen([sys.executable, fd_status],
                         stdout=subprocess.PIPE, close_fds=True,
                   `
example test: `test_subprocess.POSIXProcessTestCase.test_close_fds_after_preexec`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_close_fds_when_max_fd_is_lowered self.assertEqual(len(output_lines), <n>, ~~~~~~~~~~~~~~~~^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_subprocess.py", line 3170, in test_close_fds_when_max_fd_is_lowered
    self.assertEqual(len(output_lines), 2,
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^
                     msg="expected exactly `
example test: `test_subprocess.POSIXProcessTestCase.test_close_fds_when_max_fd_is_lowered`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_close_releases_frame_locals self.assertIsNone(f_wr()) ~~~~~~~~~~~~~~~~~^^^^^^^^ AssertionError:`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_generators.py", line 669, in test_close_releases_frame_locals
    self.assertIsNone(f_wr())
    ~~~~~~~~~~~~~~~~~^^^^^^^^
AssertionError: <test.test_generators.GeneratorCloseTest.test_close_release`
example test: `test_generators.GeneratorCloseTest.test_close_releases_frame_locals`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_close_return_value self.assertEqual(gen.close(), <n>) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^ Assertio`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_generators.py", line 590, in test_close_return_value
    self.assertEqual(gen.close(), 0)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^
AssertionError: None != 0`
example test: `test_generators.GeneratorCloseTest.test_close_return_value`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_close_stdin self.assertEqual(process.returncode, <n>) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^ A`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_repl.py", line 188, in test_close_stdin
    self.assertEqual(process.returncode, 0)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: 2 != 0`
example test: `test_repl.TestInteractiveInterpreter.test_close_stdin`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_closerange os.closerange(first, first + <n>) ~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^ AttributeError: mo`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_os.py", line 214, in test_closerange
    os.closerange(first, first + 2)
    ~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^
AttributeError: module 'os' has no attribute 'closerange'`
example test: `test_os.FileTests.test_closerange`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_codecs_charmap self.assertEqual(str(s, encoding).encode(encoding), s) ~~~~~~~~~~~~~~~~^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_str.py", line 2353, in test_codecs_charmap
    self.assertEqual(str(s, encoding).encode(encoding), s)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: b'\x0[119 chars] !"#`
example test: `test_str.StrTest.test_codecs_charmap`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_coding_default_utf8 self._do_test(coding_default_utf8_test) ~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_modulefinder.py", line 417, in test_coding_default_utf8
    self._do_test(coding_default_utf8_test)
    ~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root`
example test: `test_modulefinder.ModuleFinderTest.test_coding_default_utf8`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_coding_explicit_cp1252 self._do_test(coding_explicit_cp1252_test) ~~~~~~~~~~~~~^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_modulefinder.py", line 423, in test_coding_explicit_cp1252
    self._do_test(coding_explicit_cp1252_test)
    ~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/.harness/work/cpython-core/cpy`
example test: `test_modulefinder.ModuleFinderTest.test_coding_explicit_cp1252`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_coding_explicit_utf8 self._do_test(coding_explicit_utf8_test) ~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_modulefinder.py", line 420, in test_coding_explicit_utf8
    self._do_test(coding_explicit_utf8_test)
    ~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-r`
example test: `test_modulefinder.ModuleFinderTest.test_coding_explicit_utf8`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_collect self.preclean() ~~~~~~~~~~~~~^^ File <str>, line <n>, in preclean garbage, gc.garbage[:`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_gc.py", line 1229, in test_collect
    self.preclean()
    ~~~~~~~~~~~~~^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_gc.py", line 1211, in preclean
    garbage, gc.garbage`
example test: `test_gc.GCCallbackTests.test_collect`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_collect_generation self.preclean() ~~~~~~~~~~~~~^^ File <str>, line <n>, in preclean garbage, g`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_gc.py", line 1256, in test_collect_generation
    self.preclean()
    ~~~~~~~~~~~~~^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_gc.py", line 1211, in preclean
    garbage,`
example test: `test_gc.GCCallbackTests.test_collect_generation`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_colorized_traceback_is_the_default from _testcapi import exception_print ImportError: cannot im`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_traceback.py", line 4849, in test_colorized_traceback_is_the_default
    from _testcapi import exception_print
ImportError: cannot import name 'exception_print' from '_testcapi' (/opt/elide/lib/res`
example test: `test_traceback.TestColorizedTraceback.test_colorized_traceback_is_the_default`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_combining self.assertEqual(self.db.combining(<str>), <n> if self.old else <n>) ~~~~~~~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_unicodedata.py", line 371, in test_combining
    self.assertEqual(self.db.combining('\u0350'), 0 if self.old else 230)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Asse`
example test: `test_unicodedata.Unicode_3_2_0_FunctionsTest.test_combining`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_compile_top_level_await co = compile(source, <str>, mode, flags=ast.PyCF_ALLOW_TOP_LEVEL_AWAIT)`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_builtin.py", line 453, in test_compile_top_level_await
    co = compile(source,
                 '?',
                 mode,
                 flags=ast.PyCF_ALLOW_TOP_LEVEL_AWAIT)
  File "?", line `
example test: `test_builtin.BuiltinTest.test_compile_top_level_await`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_compile_top_level_await_invalid_cases with self.assertRaises( ~~~~~~~~~~~~~~~~~^ SyntaxError, m`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_builtin.py", line 498, in test_compile_top_level_await_invalid_cases
    with self.assertRaises(
         ~~~~~~~~~~~~~~~~~^
            SyntaxError, msg=f"source={source} mode={mode}"):
          `
example test: `test_builtin.BuiltinTest.test_compile_top_level_await_invalid_cases`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_condition self.run_worker(self._test_condition, o) ~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^ Fil`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/_test_multiprocessing.py", line 6496, in test_condition
    self.run_worker(self._test_condition, o)
    ~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/Li`
example test: `test_multiprocessing_fork.test_misc.TestSyncManagerTypes.test_condition`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_config_vars_depend_on_site_initialization self.assertNotEqual(site_config_vars, no_site_config_`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_sysconfig.py", line 620, in test_config_vars_depend_on_site_initialization
    self.assertNotEqual(site_config_vars, no_site_config_vars)
    ~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`
example test: `test_sysconfig.TestSysConfig.test_config_vars_depend_on_site_initialization`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_config_vars_recalculation_after_site_initialization self.assertNotEqual(config_vars[<str>], con`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_sysconfig.py", line 648, in test_config_vars_recalculation_after_site_initialization
    self.assertNotEqual(config_vars['before'], config_vars['after'])
    ~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^`
example test: `test_sysconfig.TestSysConfig.test_config_vars_recalculation_after_site_initialization`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_connection_resource_warning with self.assertWarns(ResourceWarning): ~~~~~~~~~~~~~~~~^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_sqlite3/test_dbapi.py", line 588, in test_connection_resource_warning
    with self.assertWarns(ResourceWarning):
         ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^
AssertionError: ResourceWarning not trig`
example test: `test_sqlite3.test_dbapi.ConnectionTests.test_connection_resource_warning`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_consistent_sys_path_for_direct_execution self.assertEqual(out_by_name[<n>], script_dir) ~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_cmd_line_script.py", line 734, in test_consistent_sys_path_for_direct_execution
    self.assertEqual(out_by_name[0], script_dir)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: 'Sy`
example test: `test_cmd_line_script.CmdLineTest.test_consistent_sys_path_for_direct_execution`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_consistent_sys_path_for_module_execution self.assertEqual(out_by_module[<n>], work_dir) ~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_cmd_line_script.py", line 769, in test_consistent_sys_path_for_module_execution
    self.assertEqual(out_by_module[0], work_dir)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: 'Re`
example test: `test_cmd_line_script.CmdLineTest.test_consistent_sys_path_for_module_execution`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_constant_tuples self.check_src_roundtrip(ast.Constant(value=(<n>,), kind=None), <str>) ~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_unparse.py", line 425, in test_constant_tuples
    self.check_src_roundtrip(ast.Constant(value=(1,), kind=None), "(1,)")
    ~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  `
example test: `test_unparse.UnparseTestCase.test_constant_tuples`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_constants ssl.OP_CIPHER_SERVER_PREFERENCE AttributeError: module <str> has no attribute <str>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_ssl.py", line 421, in test_constants
    ssl.OP_CIPHER_SERVER_PREFERENCE
AttributeError: module 'ssl' has no attribute 'OP_CIPHER_SERVER_PREFERENCE'`
example test: `test_ssl.BasicSocketTests.test_constants`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_Constructor self.assertRaises(TypeError, zlib._ZlibDecompressor, -<n>, b<str>, <n>) ~~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_zlib.py", line 951, in test_Constructor
    self.assertRaises(TypeError, zlib._ZlibDecompressor, -15, b"bytes", 5)
    ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Asserti`
example test: `test_zlib.ZlibDecompressorTest.test_Constructor`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_constructor t.__init__(b, encoding=<str>) ~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^ LookupError: unknown`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_io.py", line 2829, in test_constructor
    t.__init__(b, encoding='\udcfe')
    ~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^
LookupError: unknown encoding �`
example test: `test_io.CTextIOWrapperTest.test_constructor`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_constructor_with_duplicate_fields with self.assertRaisesRegex(TypeError, error_message): ~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_structseq.py", line 117, in test_constructor_with_duplicate_fields
    with self.assertRaisesRegex(TypeError, error_message):
         ~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionErro`
example test: `test_structseq.StructSeqTest.test_constructor_with_duplicate_fields`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_constructor_with_duplicate_unnamed_fields with self.assertRaisesRegex(TypeError, ~~~~~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_structseq.py", line 138, in test_constructor_with_duplicate_unnamed_fields
    with self.assertRaisesRegex(TypeError,
         ~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^
                                re.e`
example test: `test_structseq.StructSeqTest.test_constructor_with_duplicate_unnamed_fields`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_constructor_with_unknown_fields with self.assertRaisesRegex(TypeError, error_message): ~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_structseq.py", line 146, in test_constructor_with_unknown_fields
    with self.assertRaisesRegex(TypeError, error_message):
         ~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError:`
example test: `test_structseq.StructSeqTest.test_constructor_with_unknown_fields`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_context self.check_context(ctx) ~~~~~~~~~~~~~~~~~~^^^^^ File <str>, line <n>, in check_context `

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/_test_multiprocessing.py", line 5741, in test_context
    self.check_context(ctx)
    ~~~~~~~~~~~~~~~~~~^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/_test_multiprocessing.py", li`
example test: `test_multiprocessing_fork.test_misc.TestStartMethod.test_context`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_context_new_unhashable_str_subclass with self.assertRaisesRegex(TypeError, <str>): ~~~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_context.py", line 92, in test_context_new_unhashable_str_subclass
    with self.assertRaisesRegex(TypeError, 'unhashable type'):
         ~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Assert`
example test: `test_context.ContextTest.test_context_new_unhashable_str_subclass`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_copy encodings.ascii.StreamReader, encodings.ascii.StreamWriter) ^^^^^^^^^^^^^^^ AttributeError`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_codecs.py", line 3617, in test_copy
    encodings.ascii.StreamReader, encodings.ascii.StreamWriter)
    ^^^^^^^^^^^^^^^
AttributeError: module 'encodings' has no attribute 'ascii'`
example test: `test_codecs.StreamRecoderTest.test_copy`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_copy_replace_all_fields_visible t = os.times() AttributeError: module <str> has no attribute <s`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_structseq.py", line 274, in test_copy_replace_all_fields_visible
    t = os.times()
AttributeError: module 'os' has no attribute 'times'`
example test: `test_structseq.StructSeqTest.test_copy_replace_all_fields_visible`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_copy_weakvaluedict self._check_copy_weakdict(weakref.WeakValueDictionary) ~~~~~~~~~~~~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_copy.py", line 844, in test_copy_weakvaluedict
    self._check_copy_weakdict(weakref.WeakValueDictionary)
    ~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/.harness/work/cpyt`
example test: `test_copy.TestCopy.test_copy_weakvaluedict`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_coverage output = self.run_tests(<str>, test) File <str>, line <n>, in run_tests return self.ru`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_regrtest.py", line 1225, in test_coverage
    output = self.run_tests("--coverage", test)
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_regrtest.py", line 1000, in run_tests
 `
example test: `test_regrtest.ArgsTestCase.test_coverage`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_cpu_count self.assertEqual(self.res2int(res), (<n>, <n>)) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_cmd_line.py", line 1004, in test_cpu_count
    self.assertEqual(self.res2int(res), (4321, 4321))
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: Tuples differ: (32, 32) != (43`
example test: `test_cmd_line.CmdLineTest.test_cpu_count`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_create_at_shutdown_with_encoding self.assertEqual(<str>, out.decode().strip()) ~~~~~~~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_io.py", line 3801, in test_create_at_shutdown_with_encoding
    self.assertEqual("ok", out.decode().strip())
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: 'ok' != ''
- ok`
example test: `test_io.CTextIOWrapperTest.test_create_at_shutdown_with_encoding`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_create_at_shutdown_without_encoding self.assertEqual(<str>, out.decode().strip()) ~~~~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_io.py", line 3795, in test_create_at_shutdown_without_encoding
    self.assertEqual("ok", out.decode().strip())
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: 'ok' != ''
- ok`
example test: `test_io.CTextIOWrapperTest.test_create_at_shutdown_without_encoding`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_create_dynamic_null _imp.create_dynamic(Spec()) ~~~~~~~~~~~~~~~~~~~^^^^^^^^ FileNotFoundError: `

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_import/__init__.py", line 1274, in test_create_dynamic_null
    _imp.create_dynamic(Spec())
    ~~~~~~~~~~~~~~~~~~~^^^^^^^^
FileNotFoundError: [Errno 2] No such file or directory`
example test: `test_import.ImportTests.test_create_dynamic_null`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_create_server_ssl self.check_ssl_extra_info(client, peername=(host, port)) ~~~~~~~~~~~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_asyncio/test_events.py", line 1008, in test_create_server_ssl
    self.check_ssl_extra_info(client, peername=(host, port))
    ~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work`
example test: `test_asyncio.test_events.SelectEventLoopTests.test_create_server_ssl`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_create_server_ssl_match_failed with self.assertRaisesRegex(ssl.CertificateError, regex): ~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_asyncio/test_events.py", line 1138, in test_create_server_ssl_match_failed
    with self.assertRaisesRegex(ssl.CertificateError, regex):
         ~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`
example test: `test_asyncio.test_events.SelectEventLoopTests.test_create_server_ssl_match_failed`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_create_snapshot stack.enter_context(patch.object(tracemalloc, <str>, ~~~~~~~~~~~~~~~~~~~^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_tracemalloc.py", line 395, in test_create_snapshot
    stack.enter_context(patch.object(tracemalloc, 'get_traceback_limit',
    ~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`
example test: `test_tracemalloc.TestSnapshot.test_create_snapshot`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_create_ssl_connection self._test_create_ssl_connection(httpd, create_connection, ~~~~~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_asyncio/test_events.py", line 645, in test_create_ssl_connection
    self._test_create_ssl_connection(httpd, create_connection,
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^
      `
example test: `test_asyncio.test_events.SelectEventLoopTests.test_create_ssl_connection`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_create_ssl_unix_connection self._test_create_ssl_connection(httpd, create_connection, ~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_asyncio/test_events.py", line 661, in test_create_ssl_unix_connection
    self._test_create_ssl_connection(httpd, create_connection,
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^
 `
example test: `test_asyncio.test_events.SelectEventLoopTests.test_create_ssl_unix_connection`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_created self.assertEqual(self._asyncgenstate(), inspect.AGEN_CREATED) ~~~~~~~~~~~~~~~~~~~^^ Fil`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_inspect/test_inspect.py", line 3132, in test_created
    self.assertEqual(self._asyncgenstate(), inspect.AGEN_CREATED)
                     ~~~~~~~~~~~~~~~~~~~^^
  File "/work/.harness/work/cpython`
example test: `test_inspect.test_inspect.TestGetAsyncGenState.test_created`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_ctx_mgr_rollback_if_commit_failed proc.stdin.write(<str>) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^ BrokenPi`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_sqlite3/test_dbapi.py", line 2000, in test_ctx_mgr_rollback_if_commit_failed
    proc.stdin.write("no error")
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^
BrokenPipeError: [Errno 32] Broken pipe`
example test: `test_sqlite3.test_dbapi.MultiprocessTests.test_ctx_mgr_rollback_if_commit_failed`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_custom_hex_error_is_noted self.assertEqual(msg, failure.exception.__notes__[<n>]) ^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_codecs.py", line 3099, in test_custom_hex_error_is_noted
    self.assertEqual(msg, failure.exception.__notes__[0])
                          ^^^^^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: 'binascii.Er`
example test: `test_codecs.TransformCodecTest.test_custom_hex_error_is_noted`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_custom_zlib_error_is_noted self.assertEqual(msg, failure.exception.__notes__[<n>]) ^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_codecs.py", line 3091, in test_custom_zlib_error_is_noted
    self.assertEqual(msg, failure.exception.__notes__[0])
                          ^^^^^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: 'zlib.error`
example test: `test_codecs.TransformCodecTest.test_custom_zlib_error_is_noted`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_customreplace_encode self.assertEqual(self.encode(sin, ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^ <str>)`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/multibytecodec_support.py", line 107, in test_customreplace_encode
    self.assertEqual(self.encode(sin,
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^
                                "test.xmlcharnamereplace")[`
example test: `test_codecencodings_jp.Test_CP932.test_customreplace_encode`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_cycle_collection self.assertIsNone(wr()) ~~~~~~~~~~~~~~~~~^^^^^^ AssertionError: <test.test_thr`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_threading_local.py", line 197, in test_cycle_collection
    self.assertIsNone(wr())
    ~~~~~~~~~~~~~~~~~^^^^^^
AssertionError: <test.test_threading_local.BaseLocalTest.test_cycle_collection.<local`
example test: `test_threading_local.ThreadLocalTest.test_cycle_collection`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_dash_c_loader self.assertIn(expected, out) ~~~~~~~~~~~~~^^^^^^^^^^^^^^^ AssertionError: b<str> `

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_cmd_line_script.py", line 159, in test_dash_c_loader
    self.assertIn(expected, out)
    ~~~~~~~~~~~~~^^^^^^^^^^^^^^^
AssertionError: b"<class '_frozen_importlib.BuiltinImporter'>" not found in b'`
example test: `test_cmd_line_script.CmdLineTest.test_dash_c_loader`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_dash_m_main_traceback self.assertIn(b<str>, err) ~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^ AssertionErro`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_cmd_line_script.py", line 540, in test_dash_m_main_traceback
    self.assertIn(b'Traceback', err)
    ~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^
AssertionError: b'Traceback' not found in b'ImportError: Excep`
example test: `test_cmd_line_script.CmdLineTest.test_dash_m_main_traceback`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_dataclass_derived_generic_from_base self.assertEqual(C1.__slots__, ()) ~~~~~~~~~~~~~~~~^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_dataclasses/__init__.py", line 3643, in test_dataclass_derived_generic_from_base
    self.assertEqual(C1.__slots__, ())
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^
AssertionError: Tuples differ: ('__wea`
example test: `test_dataclasses.TestSlots.test_dataclass_derived_generic_from_base`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_dataclass_derived_weakref_slot @dataclass(slots=True, weakref_slot=True) ~~~~~~~~~^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_dataclasses/__init__.py", line 3611, in test_dataclass_derived_weakref_slot
    @dataclass(slots=True, weakref_slot=True)
     ~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/opt/elide/lib/resour`
example test: `test_dataclasses.TestSlots.test_dataclass_derived_weakref_slot`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_date_datetime_comparison self.assertTrue(x != y) ~~~~~~~~~~~~~~~^^^^^^^^ AssertionError: False `

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/datetimetester.py", line 5589, in test_date_datetime_comparison
    self.assertTrue(x != y)
    ~~~~~~~~~~~~~~~^^^^^^^^
AssertionError: False is not true`
example test: `datetimetester.Oddballs_Fast.test_date_datetime_comparison`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_decimal self.assertEqual(self.db.decimal(<str>, None), <n> if self.old else None) ~~~~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_unicodedata.py", line 260, in test_decimal
    self.assertEqual(self.db.decimal('\xb2', None), 2 if self.old else None)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`
example test: `test_unicodedata.Unicode_3_2_0_FunctionsTest.test_decimal`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_decimal_numeric_consistent self.assertEqual(dec, self.db.numeric(c)) ~~~~~~~~~~~~~~~^^^ Attribu`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_unicodedata.py", line 719, in test_decimal_numeric_consistent
    self.assertEqual(dec, self.db.numeric(c))
                          ~~~~~~~~~~~~~~~^^^
AttributeError: module 'unicodedata' has no `
example test: `test_unicodedata.UnicodeMiscTest.test_decimal_numeric_consistent`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_decode_unicode decoder = codecs.getincrementaldecoder(enc)() ~~~~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^ `

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_multibytecodec.py", line 271, in test_decode_unicode
    decoder = codecs.getincrementaldecoder(enc)()
              ~~~~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^
LookupError: unknown encoding euc_jisx0213`
example test: `test_multibytecodec.Test_IncrementalDecoder.test_decode_unicode`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_decode_unicode self.assertRaises(TypeError, codecs.getdecoder(enc), <str>) ~~~~~~~~~~~~~~~~~^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_multibytecodec.py", line 78, in test_decode_unicode
    self.assertRaises(TypeError, codecs.getdecoder(enc), "")
                                 ~~~~~~~~~~~~~~~~~^^^^^
LookupError: unknown encodin`
example test: `test_multibytecodec.Test_MultibyteCodec.test_decode_unicode`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_decode_unicode self.assertRaises(TypeError, decoder, <str>) ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_codecs.py", line 2599, in test_decode_unicode
    self.assertRaises(TypeError, decoder, "xxx")
    ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/opt/elide/lib/resources/python/python-home/l`
example test: `test_codecs.TypesTest.test_decode_unicode`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_decode_warnings with self.assertWarnsRegex(DeprecationWarning, ~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_codecs.py", line 2691, in test_decode_warnings
    with self.assertWarnsRegex(DeprecationWarning,
         ~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^
            r"invalid escape sequence '\\%c'" % `
example test: `test_codecs.UnicodeEscapeTest.test_decode_warnings`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_decodehelper self.assertEqual(b<str>.decode(<str>, <str>), <str>) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_codeccallbacks.py", line 978, in test_decodehelper
    self.assertEqual(b"\\uyyyy0".decode("raw-unicode-escape", "test.posreturn"), "<?>0")
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`
example test: `test_codeccallbacks.CodecCallbackTest.test_decodehelper`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_decoder_state self.check_state_handling_decode(encoding, u, u.encode(encoding)) ~~~~~~~~^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_codecs.py", line 2312, in test_decoder_state
    self.check_state_handling_decode(encoding, u, u.encode(encoding))
                                                  ~~~~~~~~^^^^^^^^^^
NotImplemente`
example test: `test_codecs.BasicUnicodeTest.test_decoder_state`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_decoding_error_at_the_end_of_the_line self.check_string(br<str>) ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^ `

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_cmd_line.py", line 1073, in test_decoding_error_at_the_end_of_the_line
    self.check_string(br"'\u1f'")
    ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/`
example test: `test_cmd_line.SyntaxErrorTests.test_decoding_error_at_the_end_of_the_line`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_decomposition self.assertEqual(self.db.decomposition(<str>), <str> if self.old else <str>) ~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_unicodedata.py", line 327, in test_decomposition
    self.assertEqual(self.db.decomposition('\u03f9'), '' if self.old else '<compat> 03A3')
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`
example test: `test_unicodedata.Unicode_3_2_0_FunctionsTest.test_decomposition`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_decompress_after_data_error self.assertFalse(bzd.needs_input) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_bz2.py", line 1045, in test_decompress_after_data_error
    self.assertFalse(bzd.needs_input)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^
AssertionError: True is not false`
example test: `test_bz2.BZ2DecompressorTest.test_decompress_after_data_error`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_decompress_good_input ddata = lzma.decompress( COMPRESSED_RAW_3, lzma.FORMAT_RAW, filters=FILTE`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_lzma.py", line 453, in test_decompress_good_input
    ddata = lzma.decompress(
            COMPRESSED_RAW_3, lzma.FORMAT_RAW, filters=FILTERS_RAW_3)
  File "/opt/elide/lib/resources/python/python-h`
example test: `test_lzma.CompressDecompressFunctionTestCase.test_decompress_good_input`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_decompress_infile_outfile_error self.assertEqual(b<str>, err.strip()) ~~~~~~~~~~~~~~~~^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_gzip.py", line 1051, in test_decompress_infile_outfile_error
    self.assertEqual(b"filename doesn't end in .gz: 'thisisatest.out'", err.strip())
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`
example test: `test_gzip.TestCommandLine.test_decompress_infile_outfile_error`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_decompressor_inputbuf_1 self.assertEqual(zlibd.decompress(self.DATA[:<n>], ~~~~~~~~~~~~~~~~^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_zlib.py", line 1044, in test_decompressor_inputbuf_1
    self.assertEqual(zlibd.decompress(self.DATA[:100],
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                                  `
example test: `test_zlib.ZlibDecompressorTest.test_decompressor_inputbuf_1`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_decompressor_inputbuf_2 self.assertEqual(zlibd.decompress(self.DATA[:<n>], ~~~~~~~~~~~~~~~~^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_zlib.py", line 1066, in test_decompressor_inputbuf_2
    self.assertEqual(zlibd.decompress(self.DATA[:200],
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                                  `
example test: `test_zlib.ZlibDecompressorTest.test_decompressor_inputbuf_2`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_decompressor_raw_3 lzd = LZMADecompressor(lzma.FORMAT_RAW, filters=FILTERS_RAW_3) _lzma.LZMAErr`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_lzma.py", line 125, in test_decompressor_raw_3
    lzd = LZMADecompressor(lzma.FORMAT_RAW, filters=FILTERS_RAW_3)
_lzma.LZMAError: Invalid or unsupported options`
example test: `test_lzma.CompressorDecompressorTestCase.test_decompressor_raw_3`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_deep_split with self.assertRaises(RecursionError): ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^ AssertionE`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_exception_group.py", line 540, in test_deep_split
    with self.assertRaises(RecursionError):
         ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^
AssertionError: RecursionError not raised`
example test: `test_exception_group.DeepRecursionInSplitAndSubgroup.test_deep_split`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_deep_subgroup with self.assertRaises(RecursionError): ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^ Asserti`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_exception_group.py", line 545, in test_deep_subgroup
    with self.assertRaises(RecursionError):
         ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^
AssertionError: RecursionError not raised`
example test: `test_exception_group.DeepRecursionInSplitAndSubgroup.test_deep_subgroup`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_deepcopy self.assertEqual(dup, orig) ~~~~~~~~~~~~~~~~^^^^^^^^^^^ AssertionError: <codecs.CodecI`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_codecs.py", line 1910, in test_deepcopy
    self.assertEqual(dup, orig)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^
AssertionError: <codecs.CodecInfo object for encoding utf-8 at 0x65b> != <codecs.CodecInfo ob`
example test: `test_codecs.CodecsModuleTest.test_deepcopy`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_deepcopy_weakvaluedict self.assertEqual(len(v), <n>) ~~~~~~~~~~~~~~~~^^^^^^^^^^^ AssertionError`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_copy.py", line 888, in test_deepcopy_weakvaluedict
    self.assertEqual(len(v), 1)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^
AssertionError: 2 != 1`
example test: `test_copy.TestCopy.test_deepcopy_weakvaluedict`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_deeply_nested_content_model with self.assertRaises(RecursionError): ~~~~~~~~~~~~~~~~~^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_pyexpat.py", line 816, in test_deeply_nested_content_model
    with self.assertRaises(RecursionError):
         ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^
AssertionError: RecursionError not raised`
example test: `test_pyexpat.ElementDeclHandlerTest.test_deeply_nested_content_model`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_deeply_nested_repr self.assertRaises(RecursionError, repr, d) ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_dictviews.py", line 284, in test_deeply_nested_repr
    self.assertRaises(RecursionError, repr, d)
    ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: RecursionError not raised by repr`
example test: `test_dictviews.DictSetTest.test_deeply_nested_repr`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_default_exc_handler_coro log.error.assert_called_with( ~~~~~~~~~~~~~~~~~~~~~~~~~~~~^ test_utils`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_asyncio/test_base_events.py", line 621, in test_default_exc_handler_coro
    log.error.assert_called_with(
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~^
        test_utils.MockPattern('.*exception was never re`
example test: `test_asyncio.test_base_events.BaseEventLoopTests.test_default_exc_handler_coro`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_default_update self.check_wrapper(wrapper, f) ~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^ File <str>, line <`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_functools.py", line 823, in test_default_update
    self.check_wrapper(wrapper, f)
    ~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_functools.p`
example test: `test_functools.TestWraps.test_default_update`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_defaults_on_class self.assertIs(T.__default__, int) ~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^ Assertion`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_type_params.py", line 1335, in test_defaults_on_class
    self.assertIs(T.__default__, int)
    ~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^
AssertionError: typing.NoDefault is not <class 'int'>`
example test: `test_type_params.DefaultsTest.test_defaults_on_class`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_defaults_on_func self.assertIs(T.__default__, int) ~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^ AssertionE`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_type_params.py", line 1324, in test_defaults_on_func
    self.assertIs(T.__default__, int)
    ~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^
AssertionError: typing.NoDefault is not <class 'int'>`
example test: `test_type_params.DefaultsTest.test_defaults_on_func`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_defaults_on_type_alias self.assertIs(T.__default__, int) ~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^ Asse`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_type_params.py", line 1345, in test_defaults_on_type_alias
    self.assertIs(T.__default__, int)
    ~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^
AssertionError: typing.NoDefault is not <class 'int'>`
example test: `test_type_params.DefaultsTest.test_defaults_on_type_alias`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_defaults_UTF8 with check_warnings((<str>, DeprecationWarning)): ~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_locale.py", line 563, in test_defaults_UTF8
    with check_warnings(('', DeprecationWarning)):
         ~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/opt/elide/lib/resources/python/python-home/`
example test: `test_locale.TestMiscellaneous.test_defaults_UTF8`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_defaults_with_pathlike self._check_output_of_default_create() ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_venv.py", line 136, in test_defaults_with_pathlike
    self._check_output_of_default_create()
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/te`
example test: `test_venv.BasicTest.test_defaults_with_pathlike`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_defaults_with_str_path self._check_output_of_default_create() ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_venv.py", line 128, in test_defaults_with_str_path
    self._check_output_of_default_create()
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/te`
example test: `test_venv.BasicTest.test_defaults_with_str_path`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_deferred_refcount_frozen assert_python_ok(<str>, source) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^ File <s`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_gc.py", line 1174, in test_deferred_refcount_frozen
    assert_python_ok("-c", source)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/support/scri`
example test: `test_gc.GCTests.test_deferred_refcount_frozen`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_del thresholds = gc.get_threshold() AttributeError: module <str> has no attribute <str>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_gc.py", line 345, in test_del
    thresholds = gc.get_threshold()
AttributeError: module 'gc' has no attribute 'get_threshold'`
example test: `test_gc.GCTests.test_del`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_del___main__ assert_python_ok(filename) ~~~~~~~~~~~~~~~~^^^^^^^^^^ File <str>, line <n>, in ass`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_cmd_line.py", line 608, in test_del___main__
    assert_python_ok(filename)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/support/script_helper.py", `
example test: `test_cmd_line.CmdLineTest.test_del___main__`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_del_by_finalizer self.assertFalse(os.path.exists(tmp_name), ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_tempfile.py", line 1147, in test_del_by_finalizer
    self.assertFalse(os.path.exists(tmp_name),
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^
                f"NamedTemporaryFile {tmp_name!r} "
 `
example test: `test_tempfile.TestNamedTemporaryFile.test_del_by_finalizer`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_del_newclass thresholds = gc.get_threshold() AttributeError: module <str> has no attribute <str`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_gc.py", line 360, in test_del_newclass
    thresholds = gc.get_threshold()
AttributeError: module 'gc' has no attribute 'get_threshold'`
example test: `test_gc.GCTests.test_del_newclass`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_del_on_shutdown self.assertFalse(os.path.exists(tmp_name), ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_tempfile.py", line 1917, in test_del_on_shutdown
    self.assertFalse(os.path.exists(tmp_name),
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^
                "TemporaryDirectory %s exists after cl`
example test: `test_tempfile.TestTemporaryDirectory.test_del_on_shutdown`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_del_on_shutdown_ignore_errors self.assertEqual(len(list(temp_path.glob(<str>))), ~~~~~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_tempfile.py", line 1947, in test_del_on_shutdown_ignore_errors
    self.assertEqual(len(list(temp_path.glob("*"))),
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                     int(sys`
example test: `test_tempfile.TestTemporaryDirectory.test_del_on_shutdown_ignore_errors`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_deleted_weak_cache with self.assertRaises(AttributeError): ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^ As`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_zoneinfo/test_zoneinfo.py", line 1636, in test_deleted_weak_cache
    with self.assertRaises(AttributeError):
         ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^
AssertionError: AttributeError not raised`
example test: `test_zoneinfo.test_zoneinfo.CZoneInfoCacheTest.test_deleted_weak_cache`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_deprecation ctypes.SetPointerType(lpcell, cell) ~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^ File <str>,`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_ctypes/test_incomplete.py", line 46, in test_deprecation
    ctypes.SetPointerType(lpcell, cell)
    ~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^
  File "/opt/elide/lib/resources/python/python-home/lib/pyth`
example test: `test_ctypes.test_incomplete.TestSetPointerType.test_deprecation`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_destructor self.assertEqual([b<str>], l) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^ AssertionError: Lists di`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_io.py", line 3124, in test_destructor
    self.assertEqual([b"abc"], l)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^
AssertionError: Lists differ: [b'abc'] != []

First list contains 1 additional elements.
Fi`
example test: `test_io.CTextIOWrapperTest.test_destructor`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_dict self.assertEqual(gc.collect(), <n>) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^ AssertionError: <n> `

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_gc.py", line 101, in test_dict
    self.assertEqual(gc.collect(), 1)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^
AssertionError: 0 != 1`
example test: `test_gc.GCTests.test_dict`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_dict self.run_worker(self._test_dict, o) ~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^ File <str>, line <`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/_test_multiprocessing.py", line 6573, in test_dict
    self.run_worker(self._test_dict, o)
    ~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/_test_mu`
example test: `test_multiprocessing_fork.test_misc.TestSyncManagerTypes.test_dict`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_dict_clear self.assertNotIn(<str>, repr(od)) ~~~~^^^^ KeyError: <str>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_ordered_dict.py", line 640, in test_dict_clear
    self.assertNotIn('NULL', repr(od))
                             ~~~~^^^^
KeyError: 'spam'`
example test: `test_ordered_dict.CPythonOrderedDictSubclassTests.test_dict_clear`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_digest_length_overflow h = cons(usedforsecurity=False) _hashlib.UnsupportedDigestmodError: NoSu`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_hashlib.py", line 370, in test_digest_length_overflow
    h = cons(usedforsecurity=False)
_hashlib.UnsupportedDigestmodError: NoSuchAlgorithmException: BLAKE2B-512 MessageDigest not available

Java`
example test: `test_hashlib.HashLibTestCase.test_digest_length_overflow`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_digit_numeric_consistent self.assertEqual(dec, self.db.numeric(c)) ~~~~~~~~~~~~~~~^^^ Attribute`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_unicodedata.py", line 731, in test_digit_numeric_consistent
    self.assertEqual(dec, self.db.numeric(c))
                          ~~~~~~~~~~~~~~~^^^
AttributeError: module 'unicodedata' has no at`
example test: `test_unicodedata.UnicodeMiscTest.test_digit_numeric_consistent`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_directory self._check_script(script_dir, script_name, script_dir, ~~~~~~~~~~~~~~~~~~^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_cmd_line_script.py", line 256, in test_directory
    self._check_script(script_dir, script_name, script_dir,
    ~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                       scrip`
example test: `test_cmd_line_script.CmdLineTest.test_directory`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_directory self._check_script(script_dir) ~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^ File <str>, line <n>, i`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_multiprocessing_main_handling.py", line 209, in test_directory
    self._check_script(script_dir)
    ~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/t`
example test: `test_multiprocessing_main_handling.SpawnCmdLineTest.test_directory`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_directory_compiled self._check_script(script_dir, pyc_file, script_dir, ~~~~~~~~~~~~~~~~~~^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_cmd_line_script.py", line 266, in test_directory_compiled
    self._check_script(script_dir, pyc_file, script_dir,
    ~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                       sc`
example test: `test_cmd_line_script.CmdLineTest.test_directory_compiled`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_directory_compiled self._check_script(script_dir) ~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^ File <str>, li`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_multiprocessing_main_handling.py", line 219, in test_directory_compiled
    self._check_script(script_dir)
    ~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/L`
example test: `test_multiprocessing_main_handling.SpawnCmdLineTest.test_directory_compiled`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_directory_error self._check_import_error(script_dir, msg) ~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_cmd_line_script.py", line 273, in test_directory_error
    self._check_import_error(script_dir, msg)
    ~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-r`
example test: `test_cmd_line_script.CmdLineTest.test_directory_error`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_disable stderr, exitcode = self.get_output(code) ~~~~~~~~~~~~~~~^^^^^^ File <str>, line <n>, in`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_faulthandler.py", line 362, in test_disable
    stderr, exitcode = self.get_output(code)
                       ~~~~~~~~~~~~~~~^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/`
example test: `test_faulthandler.FaultHandlerTests.test_disable`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_disabling_buffer self.assertEqual(self.n, <n>) ~~~~~~~~~~~~~~~~^^^^^^^^^^^ AssertionError: <n> `

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_pyexpat.py", line 724, in test_disabling_buffer
    self.assertEqual(self.n, 1)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^
AssertionError: 0 != 1`
example test: `test_pyexpat.ChardataBufferTest.test_disabling_buffer`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_disallow_instantiation support.check_disallow_instantiation(self, type(select.poll())) ~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_select.py", line 95, in test_disallow_instantiation
    support.check_disallow_instantiation(self, type(select.poll()))
                                                    ~~~~~~~~~~~^^
AttributeEr`
example test: `test_select.SelectTestCase.test_disallow_instantiation`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_displayhook_unencodable data = kill_python(p) File <str>, line <n>, in kill_python p.stdin.clos`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_cmd_line.py", line 446, in test_displayhook_unencodable
    data = kill_python(p)
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/support/script_helper.py", line 220, in kill_python
`
example test: `test_cmd_line.CmdLineTest.test_displayhook_unencodable`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_docstring_copy2 self.assertEqual(p2.__doc__, <str>) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^ Assert`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_property.py", line 464, in test_docstring_copy2
    self.assertEqual(p2.__doc__, "user")
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^
AssertionError: 'doc 2' != 'user'
- doc 2
+ user`
example test: `test_property.PropertySubclassTests.test_docstring_copy2`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_doctest output = self.run_tests(<str>, <str>, <str>, testname, exitcode=EXITCODE_BAD_TEST) File`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_regrtest.py", line 2136, in test_doctest
    output = self.run_tests("--fail-env-changed", "-v", "-j1", testname,
                            exitcode=EXITCODE_BAD_TEST)
  File "/work/.harness/work`
example test: `test_regrtest.ArgsTestCase.test_doctest`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_doctest_main_issue4197 rc, out, err = assert_python_ok(zip_name) ~~~~~~~~~~~~~~~~^^^^^^^^^^ Fil`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_zipimport_support.py", line 208, in test_doctest_main_issue4197
    rc, out, err = assert_python_ok(zip_name)
                   ~~~~~~~~~~~~~~~~^^^^^^^^^^
  File "/work/.harness/work/cpython-core/`
example test: `test_zipimport_support.ZipSupportTests.test_doctest_main_issue4197`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_dump_encoding self.assertEqual(xmlrpclib.loads(strg)[<n>][<n>], value) ~~~~~~~~~~~~~~~~^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_xmlrpc.py", line 195, in test_dump_encoding
    self.assertEqual(xmlrpclib.loads(strg)[0][0], value)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: {'keyâ\x82¬Â€': 'valueâ`
example test: `test_xmlrpc.XMLRPCTestCase.test_dump_encoding`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_dump_ext_modules stderr, exitcode = self.get_output(code) ~~~~~~~~~~~~~~~^^^^^^ File <str>, lin`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_faulthandler.py", line 378, in test_dump_ext_modules
    stderr, exitcode = self.get_output(code)
                       ~~~~~~~~~~~~~~~^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/`
example test: `test_faulthandler.FaultHandlerTests.test_dump_ext_modules`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_dump_traceback self.check_dump_traceback() ~~~~~~~~~~~~~~~~~~~~~~~~~^^ File <str>, line <n>, in`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_faulthandler.py", line 498, in test_dump_traceback
    self.check_dump_traceback()
    ~~~~~~~~~~~~~~~~~~~~~~~~~^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_faulthandler.p`
example test: `test_faulthandler.FaultHandlerTests.test_dump_traceback`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_dump_traceback_fd self.check_dump_traceback(fd=fp.fileno()) ~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_faulthandler.py", line 508, in test_dump_traceback_fd
    self.check_dump_traceback(fd=fp.fileno())
    ~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-ro`
example test: `test_faulthandler.FaultHandlerTests.test_dump_traceback_fd`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_dump_traceback_file self.check_dump_traceback(filename=filename) ~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_faulthandler.py", line 502, in test_dump_traceback_file
    self.check_dump_traceback(filename=filename)
    ~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^
  File "/work/.harness/work/cpython-core/cp`
example test: `test_faulthandler.FaultHandlerTests.test_dump_traceback_file`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_dump_traceback_later self.check_dump_traceback_later() ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^^ File <`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_faulthandler.py", line 665, in test_dump_traceback_later
    self.check_dump_traceback_later()
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/t`
example test: `test_faulthandler.FaultHandlerTests.test_dump_traceback_later`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_dump_traceback_later_cancel self.check_dump_traceback_later(cancel=True) ~~~~~~~~~~~~~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_faulthandler.py", line 671, in test_dump_traceback_later_cancel
    self.check_dump_traceback_later(cancel=True)
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^
  File "/work/.harness/work/cpython`
example test: `test_faulthandler.FaultHandlerTests.test_dump_traceback_later_cancel`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_dump_traceback_later_fd self.check_dump_traceback_later(fd=fp.fileno()) ~~~~~~~~~~~~~~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_faulthandler.py", line 681, in test_dump_traceback_later_fd
    self.check_dump_traceback_later(fd=fp.fileno())
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^
  File "/work/.harness/work/cpyth`
example test: `test_faulthandler.FaultHandlerTests.test_dump_traceback_later_fd`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_dump_traceback_later_file self.check_dump_traceback_later(filename=filename) ~~~~~~~~~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_faulthandler.py", line 675, in test_dump_traceback_later_file
    self.check_dump_traceback_later(filename=filename)
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^
  File "/work/.harness/wo`
example test: `test_faulthandler.FaultHandlerTests.test_dump_traceback_later_file`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_dump_traceback_later_repeat self.check_dump_traceback_later(repeat=True) ~~~~~~~~~~~~~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_faulthandler.py", line 668, in test_dump_traceback_later_repeat
    self.check_dump_traceback_later(repeat=True)
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^
  File "/work/.harness/work/cpython`
example test: `test_faulthandler.FaultHandlerTests.test_dump_traceback_later_repeat`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_dump_traceback_later_twice self.check_dump_traceback_later(loops=<n>) ~~~~~~~~~~~~~~~~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_faulthandler.py", line 685, in test_dump_traceback_later_twice
    self.check_dump_traceback_later(loops=2)
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^
  File "/work/.harness/work/cpython-core/cpy`
example test: `test_faulthandler.FaultHandlerTests.test_dump_traceback_later_twice`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_dump_traceback_threads self.check_dump_traceback_threads(None) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_faulthandler.py", line 596, in test_dump_traceback_threads
    self.check_dump_traceback_threads(None)
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^
  File "/work/.harness/work/cpython-core/cpython-r`
example test: `test_faulthandler.FaultHandlerTests.test_dump_traceback_threads`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_dump_traceback_threads_file self.check_dump_traceback_threads(filename) ~~~~~~~~~~~~~~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_faulthandler.py", line 600, in test_dump_traceback_threads_file
    self.check_dump_traceback_threads(filename)
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^
  File "/work/.harness/work/cpython-c`
example test: `test_faulthandler.FaultHandlerTests.test_dump_traceback_threads_file`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_dunder_get_signature self.assertEqual(list(sig.parameters), [<str>, <str>]) ~~~~~~~~~~~~~~~~^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_types.py", line 614, in test_dunder_get_signature
    self.assertEqual(list(sig.parameters), ["instance", "owner"])
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError:`
example test: `test_types.TypesTests.test_dunder_get_signature`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_DynamicClassAttribute self.assertEqual(expected_text, result) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_pydoc/test_pydoc.py", line 2245, in test_DynamicClassAttribute
    self.assertEqual(expected_text, result)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: "Help[132 chars]_\n |      dic`
example test: `test_pydoc.test_pydoc.PydocWithMetaClasses.test_DynamicClassAttribute`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_east_asian_width self.assertEqual(eaw(<str>), <str> if self.old else <str>) ~~~~~~~~~~~~~~~~^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_unicodedata.py", line 621, in test_east_asian_width
    self.assertEqual(eaw('\u0350'), 'N' if self.old else 'A')
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: 'A' !`
example test: `test_unicodedata.Unicode_3_2_0_FunctionsTest.test_east_asian_width`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_empty proc.start() ~~~~~~~~~~^^ File <str>, line <n>, in start self._popen = self._Popen(self) `

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/_test_multiprocessing.py", line 6305, in test_empty
    proc.start()
    ~~~~~~~~~~^^
  File "/opt/elide/lib/resources/python/python-home/lib/python3.13/multiprocessing/process.py", line 121, in start
 `
example test: `test_multiprocessing_fork.test_misc.TestSimpleQueue.test_empty`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_empty self.assertEqual(codecs.readbuffer_encode(<str>), (b<str>, <n>)) ~~~~~~~~~~~~~~~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_codecs.py", line 1073, in test_empty
    self.assertEqual(codecs.readbuffer_encode(""), (b"", 0))
                     ~~~~~~~~~~~~~~~~~~~~~~~~^^^^
NotImplementedError: readbuffer_encode`
example test: `test_codecs.ReadBufferTest.test_empty`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_empty_env self.assertEqual(child_env_names, []) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^ Assertion`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_subprocess.py", line 846, in test_empty_env
    self.assertEqual(child_env_names, [])
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^
AssertionError: Lists differ: ['PYTHONTZPATH', 'UNSAFE_PYO3_SKIP_VERS`
example test: `test_subprocess.ProcessTestCase.test_empty_env`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_enable_fd self.check_fatal_error(<str><str>/work/.harness/work/cpython-core/cpython-root/Lib/te`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_faulthandler.py", line 332, in test_enable_fd
    self.check_fatal_error("""
    ~~~~~~~~~~~~~~~~~~~~~~^^^^
        import faulthandler
        ^^^^^^^^^^^^^^^^^^^
    ...<5 lines>...
        'Segm`
example test: `test_faulthandler.FaultHandlerTests.test_enable_fd`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_enable_file self.check_fatal_error(<str><str>/work/.harness/work/cpython-core/cpython-root/Lib/`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_faulthandler.py", line 316, in test_enable_file
    self.check_fatal_error("""
    ~~~~~~~~~~~~~~~~~~~~~~^^^^
        import faulthandler
        ^^^^^^^^^^^^^^^^^^^
    ...<5 lines>...
        'Se`
example test: `test_faulthandler.FaultHandlerTests.test_enable_file`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_enable_single_thread self.check_fatal_error(<str><str>/work/.harness/work/cpython-core/cpython-`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_faulthandler.py", line 344, in test_enable_single_thread
    self.check_fatal_error("""
    ~~~~~~~~~~~~~~~~~~~~~~^^^^
        import faulthandler
        ^^^^^^^^^^^^^^^^^^^
    ...<4 lines>...
  `
example test: `test_faulthandler.FaultHandlerTests.test_enable_single_thread`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_encode self.assertEqual(self.text.encode(self.encoding), self.expected_reset) ~~~~~~~~~~~~~~~~^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_multibytecodec.py", line 381, in test_encode
    self.assertEqual(self.text.encode(self.encoding), self.expected_reset)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
As`
example test: `test_multibytecodec.TestHZStateful.test_encode`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_encoded_writes self.assertEqual(f.read(), data * <n>) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^ Asse`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_io.py", line 3368, in test_encoded_writes
    self.assertEqual(f.read(), data * 2)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^
AssertionError: '1234567890\ufeff1234567890' != '12345678901234567890'
- `
example test: `test_io.CTextIOWrapperTest.test_encoded_writes`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_encoding_errors_none self.assertIn(<str> ~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ <str>, mes`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_logging.py", line 5646, in test_encoding_errors_none
    self.assertIn("'ascii' codec can't encode "
    ~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                  "character '\\xd8' in position`
example test: `test_logging.BasicConfigTest.test_encoding_errors_none`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_encoding_warning self.assertEqual(len(lines), <n>, lines) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_subprocess.py", line 2021, in test_encoding_warning
    self.assertEqual(len(lines), 2, lines)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^
AssertionError: 0 != 2 : []`
example test: `test_subprocess.RunFuncTestCase.test_encoding_warning`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_env self.assertEqual(stdout, b<str>) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^ AssertionError: b<str>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_subprocess.py", line 802, in test_env
    self.assertEqual(stdout, b"orange")
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^
AssertionError: b'' != b'orange'`
example test: `test_subprocess.ProcessTestCase.test_env`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_env_changed output = self.run_tests(testname) File <str>, line <n>, in run_tests return self.ru`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_regrtest.py", line 1505, in test_env_changed
    output = self.run_tests(testname)
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_regrtest.py", line 1000, in run_tests
    retu`
example test: `test_regrtest.ArgsTestCase.test_env_changed`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_env_limit ok, stdout, stderr = assert_python_ok(<str>, code, PYTHONTRACEMALLOC=<str>) ~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_tracemalloc.py", line 941, in test_env_limit
    ok, stdout, stderr = assert_python_ok('-c', code, PYTHONTRACEMALLOC='10')
                         ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`
example test: `test_tracemalloc.TestCommandLine.test_env_limit`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_env_var self.assertEqual(out, <str>) ~~~~~~~~~~~~~~~~^^^^^^^^^^ AssertionError: <str> != <str> `

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_utf8_mode.py", line 72, in test_env_var
    self.assertEqual(out, '1')
    ~~~~~~~~~~~~~~~~^^^^^^^^^^
AssertionError: '0' != '1'
- 0
+ 1`
example test: `test_utf8_mode.UTF8ModeTests.test_env_var`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_env_var self.assertEqual(output.rstrip(), b<str>) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^ As`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_faulthandler.py", line 449, in test_env_var
    self.assertEqual(output.rstrip(), b"True")
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: b'False' != b'True'`
example test: `test_faulthandler.FaultHandlerTests.test_env_var`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_env_var_debug self.assertEqual(stdout.rstrip(), b<str>) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_asyncio/test_base_events.py", line 788, in test_env_var_debug
    self.assertEqual(stdout.rstrip(), b'True')
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: b'False' != b'True'`
example test: `test_asyncio.test_base_events.BaseEventLoopTests.test_env_var_debug`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_env_var_disabled ok, stdout, stderr = assert_python_ok(<str>, code, PYTHONTRACEMALLOC=<str>) ~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_tracemalloc.py", line 927, in test_env_var_disabled
    ok, stdout, stderr = assert_python_ok('-c', code, PYTHONTRACEMALLOC='0')
                         ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^`
example test: `test_tracemalloc.TestCommandLine.test_env_var_disabled`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_env_var_disabled_by_default ok, stdout, stderr = assert_python_ok(<str>, code) ~~~~~~~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_tracemalloc.py", line 911, in test_env_var_disabled_by_default
    ok, stdout, stderr = assert_python_ok('-c', code)
                         ~~~~~~~~~~~~~~~~^^^^^^^^^^^^
  File "/work/.harness/wor`
example test: `test_tracemalloc.TestCommandLine.test_env_var_disabled_by_default`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_env_var_enabled_at_startup ok, stdout, stderr = assert_python_ok(<str>, code, PYTHONTRACEMALLOC`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_tracemalloc.py", line 934, in test_env_var_enabled_at_startup
    ok, stdout, stderr = assert_python_ok('-c', code, PYTHONTRACEMALLOC='1')
                         ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^`
example test: `test_tracemalloc.TestCommandLine.test_env_var_enabled_at_startup`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_env_var_ignored_with_E ok, stdout, stderr = assert_python_ok(<str>, <str>, code, PYTHONTRACEMAL`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_tracemalloc.py", line 920, in test_env_var_ignored_with_E
    ok, stdout, stderr = assert_python_ok('-E', '-c', code, PYTHONTRACEMALLOC='1')
                         ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^`
example test: `test_tracemalloc.TestCommandLine.test_env_var_ignored_with_E`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_error self.assertIs(mmap.error, OSError) ^^^^^^^^^^ AttributeError: module <str> has no attribu`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_mmap.py", line 661, in test_error
    self.assertIs(mmap.error, OSError)
                  ^^^^^^^^^^
AttributeError: module 'mmap' has no attribute 'error'`
example test: `test_mmap.MmapTests.test_error`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_error_during_result_pickle_on_worker self._check_crash(PicklingError, _return_instance, ErrorAt`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_concurrent_futures/test_deadlock.py", line 183, in test_error_during_result_pickle_on_worker
    self._check_crash(PicklingError, _return_instance, ErrorAtPickle)
    ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^`
example test: `test_concurrent_futures.test_deadlock.ProcessPoolSpawnExecutorDeadlockTest.test_error_during_result_pickle_on_worker`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_error_from_string self.assertTrue(c.exception.args[<n>].startswith(expected), ~~~~~~~~~~~~~~~^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_source_encoding.py", line 165, in test_error_from_string
    self.assertTrue(c.exception.args[0].startswith(expected),
    ~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                `
example test: `test_source_encoding.MiscSourceEncodingTest.test_error_from_string`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_errorcallback_custom_ignore self.assertEqual(data.encode(enc, <str>), b<str>) ~~~~~~~~~~~^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_multibytecodec.py", line 58, in test_errorcallback_custom_ignore
    self.assertEqual(data.encode(enc, "test.ignore"), b'')
                     ~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^
LookupError: unknown`
example test: `test_multibytecodec.Test_MultibyteCodec.test_errorcallback_custom_ignore`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_errorcallback_longindex self.assertRaises(IndexError, dec, ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^ b`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_multibytecodec.py", line 50, in test_errorcallback_longindex
    self.assertRaises(IndexError, dec,
    ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^
                      b'apple\x92ham\x93spam', 'test.cjkte`
example test: `test_multibytecodec.Test_MultibyteCodec.test_errorcallback_longindex`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_errorhandle self.assertRaises(UnicodeError, func, source, scheme) ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/multibytecodec_support.py", line 71, in test_errorhandle
    self.assertRaises(UnicodeError, func, source, scheme)
    ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: UnicodeError `
example test: `test_codecencodings_kr.Test_EUCKR.test_errorhandle`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_errors self.assertRaises(UnicodeDecodeError, codecs.utf_16_ex_decode, b<str>, <str>, <n>, True)`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_codecs.py", line 1058, in test_errors
    self.assertRaises(UnicodeDecodeError, codecs.utf_16_ex_decode, b"\xff", "strict", 0, True)
    ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`
example test: `test_codecs.UTF16ExTest.test_errors`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_eval_builtins_mapping self.assertEqual(eval(code, ns), <n>) ~~~~^^^^^^^^^^ File <str>, line <n>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_builtin.py", line 877, in test_eval_builtins_mapping
    self.assertEqual(eval(code, ns), 1)
                     ~~~~^^^^^^^^^^
  File "test", line 1, in <module>
NameError: name 'superglobal' is `
example test: `test_builtin.BuiltinTest.test_eval_builtins_mapping`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_eval_builtins_mapping_reduce self.assertRaisesRegex(AttributeError, <str>, eval, code, ns) ~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_builtin.py", line 895, in test_eval_builtins_mapping_reduce
    self.assertRaisesRegex(AttributeError, "iter", eval, code, ns)
    ~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Ass`
example test: `test_builtin.BuiltinTest.test_eval_builtins_mapping_reduce`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_eval_str_invalid_escape self.assertEqual(len(w), <n>) ~~~~~~~~~~~~~~~~^^^^^^^^^^^ AssertionErro`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_string_literals.py", line 141, in test_eval_str_invalid_escape
    self.assertEqual(len(w), 1)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^
AssertionError: 0 != 1`
example test: `test_string_literals.TestLiterals.test_eval_str_invalid_escape`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_eval_str_invalid_octal_escape with self.assertWarns(SyntaxWarning): ~~~~~~~~~~~~~~~~^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_string_literals.py", line 148, in test_eval_str_invalid_octal_escape
    with self.assertWarns(SyntaxWarning):
         ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^
AssertionError: SyntaxWarning not triggered`
example test: `test_string_literals.TestLiterals.test_eval_str_invalid_octal_escape`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_event self.run_worker(self._test_event, o) ~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^ File <str>, lin`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/_test_multiprocessing.py", line 6454, in test_event
    self.run_worker(self._test_event, o)
    ~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/_test`
example test: `test_multiprocessing_fork.test_misc.TestSyncManagerTypes.test_event`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_evil_repr3 with self.assertRaises(IndexError): ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^ AssertionError: In`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_genericalias.py", line 281, in test_evil_repr3
    with self.assertRaises(IndexError):
         ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^
AssertionError: IndexError not raised`
example test: `test_genericalias.BaseTest.test_evil_repr3`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_excepthook self.assertSequenceEqual( ~~~~~~~~~~~~~~~~~~~~~~~~^ [(<str>, <str>, <str>)], events `

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_audit.py", line 88, in test_excepthook
    self.assertSequenceEqual(
    ~~~~~~~~~~~~~~~~~~~~~~~~^
        [("sys.excepthook", " ", "RuntimeError('fatal-error')")], events
        ^^^^^^^^^^^^^^^^^`
example test: `test_audit.AuditTest.test_excepthook`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_exception_group_wrapped_naked self.assertEqual(report, expected) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_traceback.py", line 2999, in test_exception_group_wrapped_naked
    self.assertEqual(report, expected)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^
AssertionError: '  + [323 chars]ne 2979, in exc\n  |   `
example test: `test_traceback.PyExcReportingTests.test_exception_group_wrapped_naked`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_exceptions_mutation self.assertEqual(repr(eg), <str>) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_exception_group.py", line 207, in test_exceptions_mutation
    self.assertEqual(repr(eg), "MyEG('test', [ValueError(1), TypeError(2)])")
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`
example test: `test_exception_group.StrAndReprTests.test_exceptions_mutation`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_exec_closure exec(three_freevars.__code__, ~~~~^^^^^^^^^^^^^^^^^^^^^^^^^ three_freevars.__globa`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_builtin.py", line 935, in test_exec_closure
    exec(three_freevars.__code__,
    ~~~~^^^^^^^^^^^^^^^^^^^^^^^^^
        three_freevars.__globals__,
        ^^^^^^^^^^^^^^^^^^^^^^^^^^^
        closu`
example test: `test_builtin.BuiltinTest.test_exec_closure`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_exec_globals self.assertRaisesRegex(NameError, <str>, ~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_builtin.py", line 805, in test_exec_globals
    self.assertRaisesRegex(NameError, "name 'print' is not defined",
    ~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
               `
example test: `test_builtin.BuiltinTest.test_exec_globals`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_exec_globals_dict_subclass exec(code, {<str>: customdict({<str>: <n>})}) ~~~~^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_builtin.py", line 868, in test_exec_globals_dict_subclass
    exec(code, {'__builtins__': customdict({'superglobal': 1})})
    ~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "t`
example test: `test_builtin.BuiltinTest.test_exec_globals_dict_subclass`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_exec_globals_error_on_get self.assertRaises(setonlyerror, exec, code, ~~~~~~~~~~~~~~~~~^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_builtin.py", line 859, in test_exec_globals_error_on_get
    self.assertRaises(setonlyerror, exec, code,
    ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^
                      {'__builtins__': seton`
example test: `test_builtin.BuiltinTest.test_exec_globals_error_on_get`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_exec_globals_frozen self.assertRaises(frozendict_error, ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^ exe`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_builtin.py", line 825, in test_exec_globals_frozen
    self.assertRaises(frozendict_error,
    ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^
                      exec, code, {'__builtins__': frozen_builtins`
example test: `test_builtin.BuiltinTest.test_exec_globals_frozen`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_executable_symlinks self.assertEqual(out.strip(), envpy.encode()) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_venv.py", line 501, in test_executable_symlinks
    self.assertEqual(out.strip(), envpy.encode())
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: b'/opt/elide/bin/elide' != b'/tmp`
example test: `test_venv.BasicTest.test_executable_symlinks`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_execute_zip2 output = subprocess.check_output([self.exe_zip, sys.executable]) File <str>, line `

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_zipfile/test_core.py", line 3436, in test_execute_zip2
    output = subprocess.check_output([self.exe_zip, sys.executable])
  File "/opt/elide/lib/resources/python/python-home/lib/python3.13/subpro`
example test: `test_zipfile.test_core.TestExecutablePrependedZip.test_execute_zip2`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_execute_zip64 output = subprocess.check_output([self.exe_zip64, sys.executable]) File <str>, li`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_zipfile/test_core.py", line 3444, in test_execute_zip64
    output = subprocess.check_output([self.exe_zip64, sys.executable])
  File "/opt/elide/lib/resources/python/python-home/lib/python3.13/sub`
example test: `test_zipfile.test_core.TestExecutablePrependedZip.test_execute_zip64`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_execve_env_concurrent_mutation_with_fspath_posix _, out, _ = assert_python_ok(<str>, code, **en`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_os.py", line 2294, in test_execve_env_concurrent_mutation_with_fspath_posix
    _, out, _ = assert_python_ok('-c', code, **env)
                ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^
  File "/work/.ha`
example test: `test_os.ExecTests.test_execve_env_concurrent_mutation_with_fspath_posix`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_execve_invalid_env os.execve(args[<n>], args, newenv) ~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^ Attribut`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_os.py", line 2244, in test_execve_invalid_env
    os.execve(args[0], args, newenv)
    ~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: module 'os' has no attribute 'execve'`
example test: `test_os.ExecTests.test_execve_invalid_env`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_execvpe_with_bad_arglist self.assertRaises(ValueError, os.execvpe, <str>, [], {}) ~~~~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_os.py", line 2180, in test_execvpe_with_bad_arglist
    self.assertRaises(ValueError, os.execvpe, 'notepad', [], {})
    ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/opt/el`
example test: `test_os.ExecTests.test_execvpe_with_bad_arglist`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_exit self.assertIn(rc, (-<n>, <n>, 0xffff_ffff)) ~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Ass`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_sys.py", line 224, in test_exit
    self.assertIn(rc, (-1, 0xff, 0xffff_ffff))
    ~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: 1 not found in (-1, 255, 4294967295)`
example test: `test_sys.SysModuleTest.test_exit`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_exit_during_func_exec_on_worker self._check_crash(SystemExit, _exit) ~~~~~~~~~~~~~~~~~^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_concurrent_futures/test_deadlock.py", line 164, in test_exit_during_func_exec_on_worker
    self._check_crash(SystemExit, _exit)
    ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^
  File "/work/.harness/work`
example test: `test_concurrent_futures.test_deadlock.ProcessPoolSpawnExecutorDeadlockTest.test_exit_during_func_exec_on_worker`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_exit_during_result_pickle_on_worker self._check_crash(SystemExit, _return_instance, ExitAtPickl`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_concurrent_futures/test_deadlock.py", line 178, in test_exit_during_result_pickle_on_worker
    self._check_crash(SystemExit, _return_instance, ExitAtPickle)
    ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^`
example test: `test_concurrent_futures.test_deadlock.ProcessPoolSpawnExecutorDeadlockTest.test_exit_during_result_pickle_on_worker`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_exit_exception_traceback self.assertEqual( ~~~~~~~~~~~~~~~~^ [(f.name, f.line) for f in ve_fram`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_contextlib.py", line 869, in test_exit_exception_traceback
    self.assertEqual(
    ~~~~~~~~~~~~~~~~^
        [(f.name, f.line) for f in ve_frames], expected)
        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`
example test: `test_contextlib_async.TestAsyncExitStack.test_exit_exception_traceback`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_exit_on_shutdown self.assertFalse(os.path.exists(tmp_name), ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_tempfile.py", line 1978, in test_exit_on_shutdown
    self.assertFalse(os.path.exists(tmp_name),
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^
                "TemporaryDirectory %s exists after c`
example test: `test_tempfile.TestTemporaryDirectory.test_exit_on_shutdown`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_expat_entityresolver_enabled self.assertEqual(result.getvalue(), start + ~~~~~~~~~~~~~~~~^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_sax.py", line 1038, in test_expat_entityresolver_enabled
    self.assertEqual(result.getvalue(), start +
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^
                     b"<doc><entity></entity`
example test: `test_sax.ExpatReaderTest.test_expat_entityresolver_enabled`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_expat_external_dtd_enabled with self.assertRaises(URLError): ~~~~~~~~~~~~~~~~~^^^^^^^^^^ Assert`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_sax.py", line 996, in test_expat_external_dtd_enabled
    with self.assertRaises(URLError):
         ~~~~~~~~~~~~~~~~~^^^^^^^^^^
AssertionError: URLError not raised`
example test: `test_sax.ExpatReaderTest.test_expat_external_dtd_enabled`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_expat_inpsource_character_stream self.assertEqual(result.getvalue(), xml_test_out) ~~~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_sax.py", line 1181, in test_expat_inpsource_character_stream
    self.assertEqual(result.getvalue(), xml_test_out)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: b'<?x[1536 c`
example test: `test_sax.ExpatReaderTest.test_expat_inpsource_character_stream`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_expat_text_file self.assertEqual(result.getvalue(), xml_test_out) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_sax.py", line 904, in test_expat_text_file
    self.assertEqual(result.getvalue(), xml_test_out)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: b'<?x[1536 chars]mplemented...`
example test: `test_sax.ExpatReaderTest.test_expat_text_file`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_expression_completion self.assertIn(b<str>, output) ~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^ Assertion`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_pdb.py", line 4186, in test_expression_completion
    self.assertIn(b'special', output)
    ~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^
AssertionError: b'special' not found in bytearray(b"val\t + 'al'\r\np v`
example test: `test_pdb.PdbTestReadline.test_expression_completion`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_extended_getslice self.assertEqual(m[start:stop:step], ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^ s[s`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_mmap.py", line 548, in test_extended_getslice
    self.assertEqual(m[start:stop:step],
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^
                     s[start:stop:step])
                     ^^^^^^^`
example test: `test_mmap.MmapTests.test_extended_getslice`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_extended_opargs self._do_test(extended_opargs_test) ~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^ File <s`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_modulefinder.py", line 414, in test_extended_opargs
    self._do_test(extended_opargs_test)
    ~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/te`
example test: `test_modulefinder.ModuleFinderTest.test_extended_opargs`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_extra_sha3 self.check_sha3(<str>, <n>, <n>, b<str>) ~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_hashlib.py", line 579, in test_extra_sha3
    self.check_sha3('sha3_224', 448, 1152, b'\x06')
    ~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-ro`
example test: `test_hashlib.HashLibTestCase.test_extra_sha3`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_factory_conflict_with_set_value self.assertEqual(test_dict[key], <n>) ~~~~~~~~~~~~~~~~^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_defaultdict.py", line 204, in test_factory_conflict_with_set_value
    self.assertEqual(test_dict[key], 2)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^
AssertionError: 1 != 2`
example test: `test_defaultdict.TestDefaultDict.test_factory_conflict_with_set_value`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_fail_help_cli olines[<n>] = olines[<n>].removeprefix(<str>) ~~~~~~^^^ IndexError: list index ou`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_pydoc/test_pydoc.py", line 684, in test_fail_help_cli
    olines[0] = olines[0].removeprefix('help> ')
                ~~~~~~^^^
IndexError: list index out of range`
example test: `test_pydoc.test_pydoc.PydocDocTest.test_fail_help_cli`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_failing_test output = self.run_tests(*tests, exitcode=EXITCODE_BAD_TEST) File <str>, line <n>, `

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_regrtest.py", line 1049, in test_failing_test
    output = self.run_tests(*tests, exitcode=EXITCODE_BAD_TEST)
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_regrtest.py", line `
example test: `test_regrtest.ArgsTestCase.test_failing_test`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_fatal_error self.check_fatal_error_func(False) ~~~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^ File <str>, l`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_faulthandler.py", line 283, in test_fatal_error
    self.check_fatal_error_func(False)
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_fau`
example test: `test_faulthandler.FaultHandlerTests.test_fatal_error`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_fatal_error_c_thread self.check_fatal_error(<str><str>/work/.harness/work/cpython-core/cpython-`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_faulthandler.py", line 210, in test_fatal_error_c_thread
    self.check_fatal_error("""
    ~~~~~~~~~~~~~~~~~~~~~~^^^^
        import faulthandler
        ^^^^^^^^^^^^^^^^^^^
    ...<6 lines>...
  `
example test: `test_faulthandler.FaultHandlerTests.test_fatal_error_c_thread`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_fatal_error_without_gil self.check_fatal_error_func(True) ~~~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^ Fil`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_faulthandler.py", line 286, in test_fatal_error_without_gil
    self.check_fatal_error_func(True)
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/tes`
example test: `test_faulthandler.FaultHandlerTests.test_fatal_error_without_gil`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_fcntl_bad_file fcntl.fcntl(-<n>, fcntl.F_SETFL, os.O_NONBLOCK) ~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_fcntl.py", line 111, in test_fcntl_bad_file
    fcntl.fcntl(-1, fcntl.F_SETFL, os.O_NONBLOCK)
    ~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: module 'fcntl' has no attribute 'fcnt`
example test: `test_fcntl.TestFcntl.test_fcntl_bad_file`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_fcntl_file_descriptor rv = fcntl.fcntl(self.f, fcntl.F_SETFL, os.O_NONBLOCK) AttributeError: mo`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_fcntl.py", line 100, in test_fcntl_file_descriptor
    rv = fcntl.fcntl(self.f, fcntl.F_SETFL, os.O_NONBLOCK)
AttributeError: module 'fcntl' has no attribute 'fcntl'`
example test: `test_fcntl.TestFcntl.test_fcntl_file_descriptor`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_fcntl_fileno rv = fcntl.fcntl(self.f.fileno(), fcntl.F_SETFL, os.O_NONBLOCK) AttributeError: mo`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_fcntl.py", line 88, in test_fcntl_fileno
    rv = fcntl.fcntl(self.f.fileno(), fcntl.F_SETFL, os.O_NONBLOCK)
AttributeError: module 'fcntl' has no attribute 'fcntl'`
example test: `test_fcntl.TestFcntl.test_fcntl_fileno`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_fd_finalization self.assertEqual(getfd(), old_fd) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^ AssertionEr`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_os.py", line 1706, in test_fd_finalization
    self.assertEqual(getfd(), old_fd)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^
AssertionError: 8 != 6`
example test: `test_os.BytesFwalkTests.test_fd_finalization`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_file_parse_error_multiline self.assertIn(b<str>, stderr) ~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_source_encoding.py", line 177, in test_file_parse_error_multiline
    self.assertIn(b"Non-UTF-8 code starting with '\\xb1'", stderr)
    ~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`
example test: `test_source_encoding.MiscSourceEncodingTest.test_file_parse_error_multiline`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_filename_in_syntaxerror self.assertIn(file_path.encode(<str>, <str>), stderr) ~~~~~~~~~~~~~^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_fstring.py", line 1514, in test_filename_in_syntaxerror
    self.assertIn(file_path.encode('ascii', 'backslashreplace'), stderr)
    ~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`
example test: `test_fstring.TestCase.test_filename_in_syntaxerror`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_finalization self.assertEqual(err.decode().rstrip(), ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^ <s`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_warnings/__init__.py", line 1568, in test_finalization
    self.assertEqual(err.decode().rstrip(),
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^
                     '<string>:7: UserWarning: test')
`
example test: `test_warnings.FinalizationTest.test_finalization`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_finalize script_helper.assert_python_ok(<str>, script) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_ctypes/test_refcounts.py", line 124, in test_finalize
    script_helper.assert_python_ok("-c", script)
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^
  File "/work/.harness/work/cpython-core/cpyt`
example test: `test_ctypes.test_refcounts.ModuleIsolationTest.test_finalize`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_find_function_first_executable_line self._assert_find_function(code, <str>, (<str>, <n>)) ~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_pdb.py", line 3222, in test_find_function_first_executable_line
    self._assert_find_function(code, 'bar', ('bar', 4))
    ~~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/.harnes`
example test: `test_pdb.PdbTestCase.test_find_function_first_executable_line`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_find_function_found self._assert_find_function( ~~~~~~~~~~~~~~~~~~~~~~~~~~^ <str><str>/work/.ha`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_pdb.py", line 3106, in test_find_function_found
            self._assert_find_function(
            ~~~~~~~~~~~~~~~~~~~~~~~~~~^
                """\
                ^^^^
    ...<10 lines>...
      `
example test: `test_pdb.PdbTestCase.test_find_function_found`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_find_function_found_with_bom self._assert_find_function( ~~~~~~~~~~~~~~~~~~~~~~~~~~^ codecs.BOM`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_pdb.py", line 3139, in test_find_function_found_with_bom
            self._assert_find_function(
            ~~~~~~~~~~~~~~~~~~~~~~~~~~^
                codecs.BOM_UTF8 + """\
                ^^^^^`
example test: `test_pdb.PdbTestCase.test_find_function_found_with_bom`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_find_function_found_with_encoding_cookie self._assert_find_function( ~~~~~~~~~~~~~~~~~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_pdb.py", line 3122, in test_find_function_found_with_encoding_cookie
            self._assert_find_function(
            ~~~~~~~~~~~~~~~~~~~~~~~~~~^
                """\
                ^^^^
    ..`
example test: `test_pdb.PdbTestCase.test_find_function_found_with_encoding_cookie`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_finds_expected_number_of_tests output = self.run_python(args) File <str>, line <n>, in run_pyth`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_regrtest.py", line 857, in test_finds_expected_number_of_tests
    output = self.run_python(args)
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_regrtest.py", line 840, in run_`
example test: `test_regrtest.CheckActualTests.test_finds_expected_number_of_tests`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_flags data = subprocess.check_output( [sys.executable, <str>, <str>, <str>, <str>, prog]) File `

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/_test_multiprocessing.py", line 5492, in test_flags
    data = subprocess.check_output(
        [sys.executable, '-E', '-S', '-O', '-c', prog])
  File "/opt/elide/lib/resources/python/python-home/lib/py`
example test: `test_multiprocessing_fork.test_misc.TestFlags.test_flags`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_flush_reparse_deferral_disabled self.assertEqual(result.getvalue(), start) # i.e. no elements s`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_sax.py", line 1254, in test_flush_reparse_deferral_disabled
    self.assertEqual(result.getvalue(), start)  # i.e. no elements started
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError:`
example test: `test_sax.ExpatReaderTest.test_flush_reparse_deferral_disabled`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_flush_reparse_deferral_enabled self.assertEqual(result.getvalue(), start) # i.e. no elements st`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_sax.py", line 1230, in test_flush_reparse_deferral_enabled
    self.assertEqual(result.getvalue(), start)  # i.e. no elements started
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: `
example test: `test_sax.ExpatReaderTest.test_flush_reparse_deferral_enabled`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_foreign_code self.assertEqual(mod.constant.co_filename, foreign_code.co_filename) ^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_import/__init__.py", line 1459, in test_foreign_code
    self.assertEqual(mod.constant.co_filename, foreign_code.co_filename)
                     ^^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: 'int' obj`
example test: `test_import.PycRewritingTests.test_foreign_code`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_forever output = self.run_tests(<str>, test, exitcode=EXITCODE_BAD_TEST) File <str>, line <n>, `

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_regrtest.py", line 1257, in test_forever
    output = self.run_tests('--forever', test, exitcode=EXITCODE_BAD_TEST)
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_regrtest.py",`
example test: `test_regrtest.ArgsTestCase.test_forever`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_fork pid, master_fd = pty.fork() ~~~~~~~~^^ File <str>, line <n>, in fork pid = os.fork() Attri`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_pty.py", line 199, in test_fork
    pid, master_fd = pty.fork()
                     ~~~~~~~~^^
  File "/opt/elide/lib/resources/python/python-home/lib/python3.13/pty.py", line 108, in fork
    pid`
example test: `test_pty.PtyTest.test_fork`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_forked_thread_not_started p.start() ~~~~~~~^^ File <str>, line <n>, in start self._popen = self`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/_test_multiprocessing.py", line 6805, in test_forked_thread_not_started
    p.start()
    ~~~~~~~^^
  File "/opt/elide/lib/resources/python/python-home/lib/python3.13/multiprocessing/process.py", line 1`
example test: `test_multiprocessing_fork.test_misc.MiscTestCase.test_forked_thread_not_started`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_forkserver self._test(ProcessPoolForkserverFailingInitializerTest) ~~~~~~~~~~^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_concurrent_futures/test_init.py", line 144, in test_forkserver
    self._test(ProcessPoolForkserverFailingInitializerTest)
    ~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/`
example test: `test_concurrent_futures.test_init.FailingInitializerResourcesTest.test_forkserver`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_frame_resurrect self.assertTrue(frame) ^^^^^ UnboundLocalError: local variable <str> referenced`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_generators.py", line 66, in test_frame_resurrect
    self.assertTrue(frame)
                    ^^^^^
UnboundLocalError: local variable 'frame' referenced before assignment`
example test: `test_generators.FinalizationTest.test_frame_resurrect`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_free_reference for obj in self.executor.map(make_dummy_object, range(<n>)): ...<<n> lines>... b`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_concurrent_futures/executor.py", line 142, in test_free_reference
    for obj in self.executor.map(make_dummy_object, range(10)):
    ...<6 lines>...
                break
  File "/opt/elide/lib/re`
example test: `test_concurrent_futures.test_process_pool.ProcessPoolSpawnProcessPoolExecutorTest.test_free_reference`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_freeze gc.freeze() ~~~~~~~~~^^ AttributeError: module <str> has no attribute <str>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_gc.py", line 831, in test_freeze
    gc.freeze()
    ~~~~~~~~~^^
AttributeError: module 'gc' has no attribute 'freeze'`
example test: `test_gc.GCTests.test_freeze`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_from_buffer self.assertRaises(BufferError, a.append, <n>) ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_ctypes/test_frombuffer.py", line 30, in test_from_buffer
    self.assertRaises(BufferError, a.append, 100)
    ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: BufferError not raised b`
example test: `test_ctypes.test_frombuffer.Test.test_from_buffer`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_from_format self.assertEqual(PyBytes_FromFormat(b<str>, c_int(<n>)), ~~~~~~~~~~~~~~~~^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_bytes.py", line 1164, in test_from_format
    self.assertEqual(PyBytes_FromFormat(b'c=%c', c_int(255)),
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                     b'c=\xff')`
example test: `test_bytes.BytesTest.test_from_format`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_fromfile output = self.run_tests(<str>, filename) File <str>, line <n>, in run_tests return sel`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_regrtest.py", line 1158, in test_fromfile
    output = self.run_tests('--fromfile', filename)
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_regrtest.py", line 1000, in run_tes`
example test: `test_regrtest.ArgsTestCase.test_fromfile`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_frozentable ft = FrozenTable.in_dll(pythonapi, f<str>) ValueError: /opt/elide/lib/resources/pyt`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_ctypes/test_values.py", line 68, in test_frozentable
    ft = FrozenTable.in_dll(pythonapi, f"_PyImport_Frozen{group}")
ValueError: /opt/elide/lib/resources/python/python-home/lib/graalpy25.4/libpy`
example test: `test_ctypes.test_values.PythonValuesTestCase.test_frozentable`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_fstring_without_formatting_bytecode self.assertEqual(get_code(f<str>), get_code(f<str>)) ~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_fstring.py", line 1780, in test_fstring_without_formatting_bytecode
    self.assertEqual(get_code(f"'{s}'"), get_code(f"f'{s}'"))
                     ~~~~~~~~^^^^^^^^^^
  File "/work/.harness/work`
example test: `test_fstring.TestCase.test_fstring_without_formatting_bytecode`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_function_checksum db.numeric(char, -<n>), ~~~~~~~~~~^^^^^^^^^^ AttributeError: <str> object has`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_unicodedata.py", line 105, in test_function_checksum
    db.numeric(char, -1),
    ~~~~~~~~~~^^^^^^^^^^
AttributeError: 'UCD' object has no attribute 'numeric'`
example test: `test_unicodedata.Unicode_3_2_0_FunctionsTest.test_function_checksum`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_function_tp_clear_leaves_consistent_state rc, stdout, stderr = assert_python_ok(<str>, code) ~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_gc.py", line 305, in test_function_tp_clear_leaves_consistent_state
    rc, stdout, stderr = assert_python_ok("-c", code)
                         ~~~~~~~~~~~~~~~~^^^^^^^^^^^^
  File "/work/.harnes`
example test: `test_gc.GCTests.test_function_tp_clear_leaves_consistent_state`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_function_type_defaults func = types.FunctionType( ex.__code__, {}, <str>, (<n>, <n>), None, {<s`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_types.py", line 2393, in test_function_type_defaults
    func = types.FunctionType(
        ex.__code__, {}, "func", (1, 2), None, {'c': 3},
    )
TypeError: function() takes from 3 to 6 positional`
example test: `test_types.FunctionTests.test_function_type_defaults`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_future_dotted_import exec(<str>) ~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ File <str>, line <n> from`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_future_stmt/test_future.py", line 188, in test_future_dotted_import
    exec("from .__future__ import spam")
    ~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "<string>", line 1
    from .__future__ `
example test: `test_future_stmt.test_future.FutureTest.test_future_dotted_import`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_g2 self.assertEqual(iso2022jp2.decode(<str>), uni) ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^ UnicodeDec`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_multibytecodec.py", line 359, in test_g2
    self.assertEqual(iso2022jp2.decode('iso2022-jp-2'), uni)
                     ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^
UnicodeDecodeError: 'iso2022-jp-2' codec`
example test: `test_multibytecodec.Test_ISO2022.test_g2`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_garbage_collection CBufferedReaderTest.test_garbage_collection(self) ~~~~~~~~~~~~~~~~~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_io.py", line 2647, in test_garbage_collection
    CBufferedReaderTest.test_garbage_collection(self)
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^
  File "/work/.harness/work/cpython-core/cp`
example test: `test_io.CBufferedRandomTest.test_garbage_collection`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_gc self.check_fatal_error(<str><str>/work/.harness/work/cpython-core/cpython-root/Lib/test/test`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_faulthandler.py", line 176, in test_gc
    self.check_fatal_error("""
    ~~~~~~~~~~~~~~~~~~~~~~^^^^
        import faulthandler
        ^^^^^^^^^^^^^^^^^^^
    ...<28 lines>...
        function='_`
example test: `test_faulthandler.FaultHandlerTests.test_gc`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_gc self.fail(stderr) ~~~~~~~~~^^^^^^^^ AssertionError: AttributeError: module <str> has no attr`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_audit.py", line 134, in test_gc
    self.fail(stderr)
    ~~~~~~~~~^^^^^^^^
AssertionError: AttributeError: module 'gc' has no attribute 'get_objects'
    at _run_module_code (native)
    at run_pa`
example test: `test_audit.AuditTest.test_gc`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_gc_main_module_at_shutdown self.assertEqual(out.strip(), b<str>) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_gc.py", line 769, in test_gc_main_module_at_shutdown
    self.assertEqual(out.strip(), b'__del__ called')
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: b'' != b'__del__ calle`
example test: `test_gc.GCTests.test_gc_main_module_at_shutdown`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_gc_ordinary_module_at_shutdown self.assertEqual(out.strip(), b<str>) ~~~~~~~~~~~~~~~~^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_gc.py", line 788, in test_gc_ordinary_module_at_shutdown
    self.assertEqual(out.strip(), b'__del__ called')
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: b'' != b'__del__ c`
example test: `test_gc.GCTests.test_gc_ordinary_module_at_shutdown`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_general script_helper.run_test_script(script) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^ File <str>,`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_atexit.py", line 13, in test_general
    script_helper.run_test_script(script)
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/support/scrip`
example test: `test_atexit.GeneralTest.test_general`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_get_all self.assertTrue(methods == [<str>, <str>] or ~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/_test_multiprocessing.py", line 5811, in test_get_all
    self.assertTrue(methods == ['fork', 'spawn'] or
    ~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                    methods == ['spawn', 'fo`
example test: `test_multiprocessing_fork.test_misc.TestStartMethod.test_get_all`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_get_decoded_uu_payload eq(msg.get_payload(decode=True), b<str>) ~~~~~~~~~~~~~~~^^^^^^^^^^^^^ Fi`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_email/test_email.py", line 268, in test_get_decoded_uu_payload
    eq(msg.get_payload(decode=True), b'hello world')
       ~~~~~~~~~~~~~~~^^^^^^^^^^^^^
  File "/opt/elide/lib/resources/python/pytho`
example test: `test_email.test_email.TestMessageAPI.test_get_decoded_uu_payload`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_get_makefile_filename self.assertTrue(os.path.isfile(makefile), makefile) ~~~~~~~~~~~~~~~^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_sysconfig.py", line 680, in test_get_makefile_filename
    self.assertTrue(os.path.isfile(makefile), makefile)
    ~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: False is not t`
example test: `test_sysconfig.MakefileTests.test_get_makefile_filename`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_get_objects any(l is element for element in gc.get_objects()) ~~~~~~~~~~~~~~^^ AttributeError: `

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_gc.py", line 841, in test_get_objects
    any(l is element for element in gc.get_objects())
                                    ~~~~~~~~~~~~~~^^
AttributeError: module 'gc' has no attribute 'get_ob`
example test: `test_gc.GCTests.test_get_objects`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_get_objects_arguments self.assertEqual(len(gc.get_objects()), ~~~~~~~~~~~~~~^^ AttributeError: `

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_gc.py", line 893, in test_get_objects_arguments
    self.assertEqual(len(gc.get_objects()),
                         ~~~~~~~~~~~~~~^^
AttributeError: module 'gc' has no attribute 'get_objects'`
example test: `test_gc.GCTests.test_get_objects_arguments`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_get_objects_generations any(l is element for element in gc.get_objects(generation=<n>)) ^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_gc.py", line 850, in test_get_objects_generations
    any(l is element for element in gc.get_objects(generation=0))
                                    ^^^^^^^^^^^^^^
AttributeError: module 'gc' ha`
example test: `test_gc.GCTests.test_get_objects_generations`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_get_recursion_depth script_helper.assert_python_ok(<str>, code) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_support.py", line 663, in test_get_recursion_depth
    script_helper.assert_python_ok("-c", code)
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-roo`
example test: `test_support.TestSupport.test_get_recursion_depth`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_get_referents self.assertEqual(got, alist) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^ AssertionError: Lists d`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_gc.py", line 564, in test_get_referents
    self.assertEqual(got, alist)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^
AssertionError: Lists differ: [] != [1, 3, 5]

Second list contains 3 additional elements.
`
example test: `test_gc.GCTests.test_get_referents`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_get_stats stats = gc.get_stats() AttributeError: module <str> has no attribute <str>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_gc.py", line 805, in test_get_stats
    stats = gc.get_stats()
AttributeError: module 'gc' has no attribute 'get_stats'`
example test: `test_gc.GCTests.test_get_stats`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_get_stats_profile self.assertIn(<str>, funcs_called) ~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^ Asser`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_pstats.py", line 143, in test_get_stats_profile
    self.assertIn('pass1', funcs_called)
    ~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: 'pass1' not found in set()`
example test: `test_pstats.StatsTestCase.test_get_stats_profile`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_getaddrinfo_int_port_overflow socket.getaddrinfo(None, ULONG_MAX + <n>, type=socket.SOCK_STREAM`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_socket.py", line 1741, in test_getaddrinfo_int_port_overflow
    socket.getaddrinfo(None, ULONG_MAX + 1, type=socket.SOCK_STREAM)
    ~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`
example test: `test_socket.GeneralModuleTests.test_getaddrinfo_int_port_overflow`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_getattr_suggestions_invalid_args self.assertIn(<str>, actual) ~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^ As`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_traceback.py", line 4208, in test_getattr_suggestions_invalid_args
    self.assertIn("blech", actual)
    ~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^
AssertionError: 'blech' not found in 'AttributeError: <excep`
example test: `test_traceback.PurePythonSuggestionFormattingTests.test_getattr_suggestions_invalid_args`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_getattr_suggestions_no_args self.assertIn(<str>, actual) ~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^ Asserti`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_traceback.py", line 4176, in test_getattr_suggestions_no_args
    self.assertIn("blech", actual)
    ~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^
AssertionError: 'blech' not found in 'AttributeError'`
example test: `test_traceback.PurePythonSuggestionFormattingTests.test_getattr_suggestions_no_args`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_getdoc self.assertEqual(inspect.getdoc(SlotUser.power), ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_inspect/test_inspect.py", line 667, in test_getdoc
    self.assertEqual(inspect.getdoc(SlotUser.power),
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                     'measured in kilowa`
example test: `test_inspect.test_inspect.TestRetrievingSourceCode.test_getdoc`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_getfullargspec_builtin_methods self.assertFullArgSpecEquals(_pickle.Pickler(io.BytesIO()).dump,`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_inspect/test_inspect.py", line 1367, in test_getfullargspec_builtin_methods
    self.assertFullArgSpecEquals(_pickle.Pickler(io.BytesIO()).dump, ['self', 'obj'])
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~^^^`
example test: `test_inspect.test_inspect.TestClassesAndFunctions.test_getfullargspec_builtin_methods`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_getrandbits_2G_bits x = self.gen.getrandbits(size) OverflowError: Python int too large to conve`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_random.py", line 828, in test_getrandbits_2G_bits
    x = self.gen.getrandbits(size)
OverflowError: Python int too large to convert to Java int`
example test: `test_random.MersenneTwister_TestBasicOps.test_getrandbits_2G_bits`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_getsource output = self.run_on_interactive_mode(textwrap.dedent(<str><str>The source is: <<<{in`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_inspect/test_inspect.py", line 6637, in test_getsource
    output = self.run_on_interactive_mode(textwrap.dedent("""\
    def f():
    ...<4 lines>...
    print(f"The source is: <<<{inspect.getsour`
example test: `test_inspect.test_inspect.TestRepl.test_getsource`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_getstate_returns_expected_value buffer_state_encoder = codecs.getincrementalencoder(<str>)() ~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_multibytecodec.py", line 164, in test_getstate_returns_expected_value
    buffer_state_encoder = codecs.getincrementalencoder('euc_jis_2004')()
                           ~~~~~~~~~~~~~~~~~~~~~~~~~~`
example test: `test_multibytecodec.Test_IncrementalEncoder.test_getstate_returns_expected_value`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_gh129093 self.assertEqual(f<str>, <str>) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^ AssertionErr`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_fstring.py", line 1785, in test_gh129093
    self.assertEqual(f'{1!=2=}', '1!=2=True')
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: '1True' != '1!=2=True'
- 1True
+ 1!=2=True
?  ++`
example test: `test_fstring.TestCase.test_gh129093`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_gh86298_loader_and_spec_loader_disagree self.check_module_globals_deprecated( ~~~~~~~~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_warnings/__init__.py", line 796, in test_gh86298_loader_and_spec_loader_disagree
    self.check_module_globals_deprecated(
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^
        {'__name__': 'bar', '__l`
example test: `test_warnings.CWarnTests.test_gh86298_loader_and_spec_loader_disagree`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_gh86298_loader_is_none_and_spec_is_none self.check_module_globals_error( ~~~~~~~~~~~~~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_warnings/__init__.py", line 769, in test_gh86298_loader_is_none_and_spec_is_none
    self.check_module_globals_error(
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^
        {'__name__': 'bar', '__loader__': `
example test: `test_warnings.CWarnTests.test_gh86298_loader_is_none_and_spec_is_none`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_gh86298_loader_is_none_and_spec_loader_is_none self.check_module_globals_error( ~~~~~~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_warnings/__init__.py", line 774, in test_gh86298_loader_is_none_and_spec_loader_is_none
    self.check_module_globals_error(
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^
        {'__name__': 'bar', '__load`
example test: `test_warnings.CWarnTests.test_gh86298_loader_is_none_and_spec_loader_is_none`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_gh86298_no_loader_and_no_spec_loader self.check_module_globals_error( ~~~~~~~~~~~~~~~~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_warnings/__init__.py", line 802, in test_gh86298_no_loader_and_no_spec_loader
    self.check_module_globals_error(
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^
        {'__name__': 'bar', '__spec__': types`
example test: `test_warnings.CWarnTests.test_gh86298_no_loader_and_no_spec_loader`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_gh86298_no_loader_and_spec_is_none self.check_module_globals_error( ~~~~~~~~~~~~~~~~~~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_warnings/__init__.py", line 764, in test_gh86298_no_loader_and_spec_is_none
    self.check_module_globals_error(
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^
        {'__name__': 'bar', '__spec__': None},
`
example test: `test_warnings.CWarnTests.test_gh86298_no_loader_and_spec_is_none`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_gh86298_no_spec self.check_module_globals_deprecated( ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^ {<s`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_warnings/__init__.py", line 780, in test_gh86298_no_spec
    self.check_module_globals_deprecated(
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^
        {'__name__': 'bar', '__loader__': object()},
   `
example test: `test_warnings.CWarnTests.test_gh86298_no_spec`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_gh86298_no_spec_loader self.check_module_globals_deprecated( ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_warnings/__init__.py", line 790, in test_gh86298_no_spec_loader
    self.check_module_globals_deprecated(
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^
        {'__name__': 'bar', '__loader__': object(`
example test: `test_warnings.CWarnTests.test_gh86298_no_spec_loader`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_gh86298_spec_is_none self.check_module_globals_deprecated( ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_warnings/__init__.py", line 785, in test_gh86298_spec_is_none
    self.check_module_globals_deprecated(
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^
        {'__name__': 'bar', '__loader__': object(),`
example test: `test_warnings.CWarnTests.test_gh86298_spec_is_none`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_gil m = cons(usedforsecurity=False) _hashlib.UnsupportedDigestmodError: NoSuchAlgorithmExceptio`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_hashlib.py", line 983, in test_gil
    m = cons(usedforsecurity=False)
_hashlib.UnsupportedDigestmodError: NoSuchAlgorithmException: BLAKE2B-512 MessageDigest not available

Java stack trace:
java.`
example test: `test_hashlib.HashLibTestCase.test_gil`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_gil_released self.check_fatal_error(<str><str>/work/.harness/work/cpython-core/cpython-root/Lib`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_faulthandler.py", line 305, in test_gil_released
    self.check_fatal_error("""
    ~~~~~~~~~~~~~~~~~~~~~~^^^^
        import faulthandler
        ^^^^^^^^^^^^^^^^^^^
    ...<3 lines>...
        3,`
example test: `test_faulthandler.FaultHandlerTests.test_gil_released`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_global_del_SystemExit rc, out, err = assert_python_ok(TESTFN) ~~~~~~~~~~~~~~~~^^^^^^^^ File <st`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_gc.py", line 801, in test_global_del_SystemExit
    rc, out, err = assert_python_ok(TESTFN)
                   ~~~~~~~~~~~~~~~~^^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/tes`
example test: `test_gc.GCTests.test_global_del_SystemExit`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_grouper_reentrant_eq_does_not_crash self.assertEqual(len(items), <n>) ~~~~~~~~~~~~~~~~^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_itertools.py", line 1051, in test_grouper_reentrant_eq_does_not_crash
    self.assertEqual(len(items), 1)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^
AssertionError: 4 != 1`
example test: `test_itertools.TestBasicOps.test_grouper_reentrant_eq_does_not_crash`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_handle_frame_object_in_creation thresholds = gc.get_threshold() AttributeError: module <str> ha`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_generators.py", line 200, in test_handle_frame_object_in_creation
    thresholds = gc.get_threshold()
AttributeError: module 'gc' has no attribute 'get_threshold'`
example test: `test_generators.GeneratorTest.test_handle_frame_object_in_creation`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_handler self.assertTrue(is_ok) ~~~~~~~~~~~~~~~^^^^^^^ AssertionError: False is not true`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_signal.py", line 1441, in test_handler
    self.assertTrue(is_ok)
    ~~~~~~~~~~~~~~~^^^^^^^
AssertionError: False is not true`
example test: `test_signal.RaiseSignalTest.test_handler`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_handlers self.assertIsNone(self.systemID) ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^ AssertionError: <str`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_sax.py", line 1493, in test_handlers
    self.assertIsNone(self.systemID)
    ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^
AssertionError: '' is not None`
example test: `test_sax.LexicalHandlerTest.test_handlers`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_handlers self.parser.parse(source) ~~~~~~~~~~~~~~~~~^^^^^^^^ File <str>, line <n>, in parse xml`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_sax.py", line 1554, in test_handlers
    self.parser.parse(source)
    ~~~~~~~~~~~~~~~~~^^^^^^^^
  File "/opt/elide/lib/resources/python/python-home/lib/python3.13/xml/sax/expatreader.py", line 105`
example test: `test_sax.CDATAHandlerTest.test_handlers`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_has_strftime_extensions self.assertTrue(support.has_strftime_extensions) ~~~~~~~~~~~~~~~^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_support.py", line 620, in test_has_strftime_extensions
    self.assertTrue(support.has_strftime_extensions)
    ~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: False is not true`
example test: `test_support.TestSupport.test_has_strftime_extensions`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_hash self.assertRaises(TypeError, hash, view) ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^ Assertio`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_types.py", line 1314, in test_hash
    self.assertRaises(TypeError, hash, view)
    ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: TypeError not raised by hash`
example test: `test_types.MappingProxyTests.test_hash`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_hash_array c = cons(a, usedforsecurity=False) _hashlib.UnsupportedDigestmodError: NoSuchAlgorit`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_hashlib.py", line 207, in test_hash_array
    c = cons(a, usedforsecurity=False)
_hashlib.UnsupportedDigestmodError: NoSuchAlgorithmException: BLAKE2B-512 MessageDigest not available

Java stack tr`
example test: `test_hashlib.HashLibTestCase.test_hash_array`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_hash_nan self.assertEqual(hash(value), object.__hash__(value)) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_float.py", line 612, in test_hash_nan
    self.assertEqual(hash(value), object.__hash__(value))
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: 0 != 2146959360`
example test: `test_float.GeneralFloatCases.test_hash_nan`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_hash_randomization self.verify_valid_flag(<str>) ~~~~~~~~~~~~~~~~~~~~~~^^^^^^ File <str>, line `

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_cmd_line.py", line 564, in test_hash_randomization
    self.verify_valid_flag('-R')
    ~~~~~~~~~~~~~~~~~~~~~~^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_cmd_line.py"`
example test: `test_cmd_line.CmdLineTest.test_hash_randomization`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_hex_use_after_free self.assertRaises(BufferError, ba.hex, S(b<str>)) ~~~~~~~~~~~~~~~~~^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_bytes.py", line 1971, in test_hex_use_after_free
    self.assertRaises(BufferError, ba.hex, S(b':'))
    ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: BufferError not raised by he`
example test: `test_bytes.ByteArrayTest.test_hex_use_after_free`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_hexdigest h = cons(usedforsecurity=False) _hashlib.UnsupportedDigestmodError: NoSuchAlgorithmEx`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_hashlib.py", line 358, in test_hexdigest
    h = cons(usedforsecurity=False)
_hashlib.UnsupportedDigestmodError: NoSuchAlgorithmException: BLAKE2B-512 MessageDigest not available

Java stack trace:`
example test: `test_hashlib.HashLibTestCase.test_hexdigest`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_html_doc self.assertEqual(text_lines, expected_lines) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_pydoc/test_pydoc.py", line 434, in test_html_doc
    self.assertEqual(text_lines, expected_lines)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: Lists differ: ['tes[390 chars]_', `
example test: `test_pydoc.test_pydoc.PydocDocTest.test_html_doc`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_html_doc_routines_in_module self.assertIn(<str>, lines) ~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_pydoc/test_pydoc.py", line 2071, in test_html_doc_routines_in_module
    self.assertIn(' get(key, default=None, /) method of builtins.dict instance', lines)
    ~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^`
example test: `test_pydoc.test_pydoc.PydocFodderTest.test_html_doc_routines_in_module`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_https_sni context.set_servername_callback(cb_sni) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^ File `

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_urllib2_localnet.py", line 583, in test_https_sni
    context.set_servername_callback(cb_sni)
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^
  File "/opt/elide/lib/resources/python/python-home/lib/pyt`
example test: `test_urllib2_localnet.TestUrlopen.test_https_sni`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_idle_process_reuse_multiple executor.submit(mul, <n>, <n>).result() ~~~~~~~~~~~~~~~~~~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_concurrent_futures/test_process_pool.py", line 135, in test_idle_process_reuse_multiple
    executor.submit(mul, 12, 7).result()
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^^
  File "/opt/elide/lib/reso`
example test: `test_concurrent_futures.test_process_pool.ProcessPoolSpawnProcessPoolExecutorTest.test_idle_process_reuse_multiple`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_idle_process_reuse_one executor.submit(mul, <n>, <n>).result() ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_concurrent_futures/test_process_pool.py", line 125, in test_idle_process_reuse_one
    executor.submit(mul, 21, 2).result()
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^^
  File "/opt/elide/lib/resources`
example test: `test_concurrent_futures.test_process_pool.ProcessPoolSpawnProcessPoolExecutorTest.test_idle_process_reuse_one`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_ignore p.start() ~~~~~~~^^ File <str>, line <n>, in start self._popen = self._Popen(self) ~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/_test_multiprocessing.py", line 5671, in test_ignore
    p.start()
    ~~~~~~~^^
  File "/opt/elide/lib/resources/python/python-home/lib/python3.13/multiprocessing/process.py", line 121, in start
    se`
example test: `test_multiprocessing_fork.test_misc.TestIgnoreEINTR.test_ignore`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_ignore_listener p.start() ~~~~~~~^^ File <str>, line <n>, in start self._popen = self._Popen(se`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/_test_multiprocessing.py", line 5704, in test_ignore_listener
    p.start()
    ~~~~~~~^^
  File "/opt/elide/lib/resources/python/python-home/lib/python3.13/multiprocessing/process.py", line 121, in sta`
example test: `test_multiprocessing_fork.test_misc.TestIgnoreEINTR.test_ignore_listener`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_ignore_PYTHONHASHSEED self.run_ignoring_vars(<str>, ~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_cmd_line.py", line 1040, in test_ignore_PYTHONHASHSEED
    self.run_ignoring_vars("sys.flags.hash_randomization == 1",
    ~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
              `
example test: `test_cmd_line.IgnoreEnvironmentTest.test_ignore_PYTHONHASHSEED`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_ignorefile output = self.run_tests(<str>, <str>, filename, testname) File <str>, line <n>, in r`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_regrtest.py", line 1448, in test_ignorefile
    output = self.run_tests("-v", "--ignorefile", filename, testname)
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_regrtest.py", l`
example test: `test_regrtest.ArgsTestCase.test_ignorefile`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_import_from_suggestions self.assertIn(suggestion, actual) ~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^ Ass`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_traceback.py", line 4336, in test_import_from_suggestions
    self.assertIn(suggestion, actual)
    ~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^
AssertionError: "'bluchin'?" not found in "ImportError: cannot `
example test: `test_traceback.PurePythonSuggestionFormattingTests.test_import_from_suggestions`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_import_from_suggestions_non_string self.assertIn(<str>, self.get_import_from_suggestion(modWith`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_traceback.py", line 4354, in test_import_from_suggestions_non_string
    self.assertIn("'bluch'", self.get_import_from_suggestion(modWithNonStringAttr, 'blech'))
    ~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^`
example test: `test_traceback.PurePythonSuggestionFormattingTests.test_import_from_suggestions_non_string`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_import_from_suggestions_underscored self.assertIn(<str>, self.get_import_from_suggestion(code, `

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_traceback.py", line 4340, in test_import_from_suggestions_underscored
    self.assertIn("'bluch'", self.get_import_from_suggestion(code, 'blach'))
    ~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`
example test: `test_traceback.PurePythonSuggestionFormattingTests.test_import_from_suggestions_underscored`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_incomplete ai(<str>) ~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ File <str>, line <n>, in assertInc`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_codeop.py", line 112, in test_incomplete
    ai("if 9==3:\n   pass\nelse:\n   pass")
    ~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_`
example test: `test_codeop.CodeopTests.test_incomplete`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_incomplete_example ctypes.SetPointerType(lpcell, cell) ~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^ File`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_ctypes/test_incomplete.py", line 21, in test_incomplete_example
    ctypes.SetPointerType(lpcell, cell)
    ~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^
  File "/opt/elide/lib/resources/python/python-home/l`
example test: `test_ctypes.test_incomplete.TestSetPointerType.test_incomplete_example`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_inconsistent_weak_cache_get with self.assertRaises(RuntimeError) as te: ^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_zoneinfo/test_zoneinfo.py", line 1623, in test_inconsistent_weak_cache_get
    with self.assertRaises(RuntimeError) as te:
         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: RuntimeErro`
example test: `test_zoneinfo.test_zoneinfo.CZoneInfoCacheTest.test_inconsistent_weak_cache_get`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_inconsistent_weak_cache_setdefault ZI(<str>) ~~^^^^^^^^^^^^^^^^^^^^^^^ File <str>, line <n>, in`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_zoneinfo/test_zoneinfo.py", line 1656, in test_inconsistent_weak_cache_setdefault
    ZI("America/Los_Angeles")
    ~~^^^^^^^^^^^^^^^^^^^^^^^
  File "/opt/elide/lib/resources/python/python-home/lib`
example test: `test_zoneinfo.test_zoneinfo.CZoneInfoCacheTest.test_inconsistent_weak_cache_setdefault`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_incremental_surrogatepass data = <str>.encode(self.encoding, <str>) UnicodeEncodeError: <str> c`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_codecs.py", line 439, in test_incremental_surrogatepass
    data = '\uD901'.encode(self.encoding, 'surrogatepass')
UnicodeEncodeError: 'raw-unicode-escape' codec can't encode character '\ud901' in `
example test: `test_codecs.RawUnicodeEscapeTest.test_incremental_surrogatepass`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_incremental_surrogatepass self.assertEqual(dec.decode(data[i:], True), <str>) ~~~~~~~~~~~~~~~~^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_codecs.py", line 443, in test_incremental_surrogatepass
    self.assertEqual(dec.decode(data[i:], True), '\uD901')
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: '2QE-' `
example test: `test_codecs.UTF7Test.test_incremental_surrogatepass`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_incrementaldecoder u = decoder.decode(data) UnicodeDecodeError: <str> codec can't decode bytes `

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/multibytecodec_support.py", line 205, in test_incrementaldecoder
    u = decoder.decode(data)
UnicodeDecodeError: 'big5hkscs' codec can't decode bytes in position 13-14: unmappable character`
example test: `test_codecencodings_hk.Test_Big5HKSCS.test_incrementaldecoder`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_incrementalencoder e = encoder.encode(data) UnicodeEncodeError: <str> codec can<str>\u0304' in `

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/multibytecodec_support.py", line 188, in test_incrementalencoder
    e = encoder.encode(data)
UnicodeEncodeError: 'big5hkscs' codec can't encode character '\u0304' in position 8: unmappable character`
example test: `test_codecencodings_hk.Test_Big5HKSCS.test_incrementalencoder`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_incrementalencoder e = encoder.encode(data) UnicodeEncodeError: <str> codec can<str>\u309a' in `

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/multibytecodec_support.py", line 188, in test_incrementalencoder
    e = encoder.encode(data)
UnicodeEncodeError: 'shift_jisx0213' codec can't encode character '\u309a' in position 0: unmappable charact`
example test: `test_codecencodings_jp.Test_SJISX0213.test_incrementalencoder`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_incrementalencoder e = encoder.encode(data) UnicodeEncodeError: <str> codec can<str>\uc4d4' in `

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/multibytecodec_support.py", line 188, in test_incrementalencoder
    e = encoder.encode(data)
UnicodeEncodeError: 'euc_kr' codec can't encode character '\uc4d4' in position 211: unmappable character`
example test: `test_codecencodings_kr.Test_EUCKR.test_incrementalencoder`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_indentation_error self.assertEqual(output.splitlines()[<n>:], [ ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_code_module.py", line 92, in test_indentation_error
    self.assertEqual(output.splitlines()[1:], [
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^
        '  File "<console>", line 1',
        ^^^`
example test: `test_code_module.TestInteractiveConsole.test_indentation_error`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_infinity_numbers self.assertAnnotationEqual(<str>, expected=inf) ~~~~~~~~~~~~~~~~~~~~~~~~~~^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_future_stmt/test_future.py", line 439, in test_infinity_numbers
    self.assertAnnotationEqual("1e1000", expected=inf)
    ~~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/.harness/`
example test: `test_future_stmt.test_future.AnnotationsFutureTestCase.test_infinity_numbers`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_inherit_but_return_something_else self.assertEqual(rb_call_count, <n>) ~~~~~~~~~~~~~~~~^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_buffer.py", line 4692, in test_inherit_but_return_something_else
    self.assertEqual(rb_call_count, 1)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^
AssertionError: 0 != 1`
example test: `test_buffer.TestPythonBufferProtocol.test_inherit_but_return_something_else`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_inheritance_releasebuffer self.assertEqual(rb_call_count, <n>) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_buffer.py", line 4663, in test_inheritance_releasebuffer
    self.assertEqual(rb_call_count, 1)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^
AssertionError: 0 != 1`
example test: `test_buffer.TestPythonBufferProtocol.test_inheritance_releasebuffer`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_initializer self.assertEqual(f.result(), <str>) ~~~~~~~~^^ File <str>, line <n>, in result retu`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_concurrent_futures/test_init.py", line 52, in test_initializer
    self.assertEqual(f.result(), 'initialized')
                     ~~~~~~~~^^
  File "/opt/elide/lib/resources/python/python-home/li`
example test: `test_concurrent_futures.test_init.ProcessPoolSpawnInitializerTest.test_initializer`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_initializer with self._assert_logged(<str>): ~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_concurrent_futures/test_init.py", line 74, in test_initializer
    with self._assert_logged('ValueError: error in initializer'):
         ~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  F`
example test: `test_concurrent_futures.test_init.ProcessPoolSpawnFailingInitializerTest.test_initializer`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_inst_method_calling self.assertEqual(self.tracer.results().calledfuncs, expected) ~~~~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_trace.py", line 314, in test_inst_method_calling
    self.assertEqual(self.tracer.results().calledfuncs, expected)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: `
example test: `test_trace.TestFuncs.test_inst_method_calling`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_instance self.assertNotEqual(gc.collect(), <n>) ~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^ AssertionE`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_gc.py", line 137, in test_instance
    self.assertNotEqual(gc.collect(), 0)
    ~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^
AssertionError: 0 == 0`
example test: `test_gc.GCTests.test_instance`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_int_max_str_digits assert_python_failure(<str>, <str>, <str>, code) ~~~~~~~~~~~~~~~~~~~~~^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_cmd_line.py", line 971, in test_int_max_str_digits
    assert_python_failure('-X', 'int_max_str_digits', '-c', code)
    ~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/`
example test: `test_cmd_line.CmdLineTest.test_int_max_str_digits`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_interactive_source_is_in_linecache self.assertEqual(p.returncode, <n>) ~~~~~~~~~~~~~~~~^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_repl.py", line 322, in test_interactive_source_is_in_linecache
    self.assertEqual(p.returncode, 0)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^
AssertionError: 2 != 0`
example test: `test_repl.TestInteractiveInterpreter.test_interactive_source_is_in_linecache`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_interactive_syntax_error_correct_line output = run_on_interactive_mode(dedent(<str><str><str>))`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_repl.py", line 392, in test_interactive_syntax_error_correct_line
    output = run_on_interactive_mode(dedent("""\
    def f():
        print(0)
        return yield 42
    """))
  File "/work/.har`
example test: `test_repl.TestInteractiveModeSyntaxErrors.test_interactive_syntax_error_correct_line`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_interactive_traceback_reporting self.assertEqual(p.returncode, <n>) ~~~~~~~~~~~~~~~~^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_repl.py", line 196, in test_interactive_traceback_reporting
    self.assertEqual(p.returncode, 0)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^
AssertionError: 2 != 0`
example test: `test_repl.TestInteractiveInterpreter.test_interactive_traceback_reporting`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_interactive_traceback_reporting_multiple_input self.assertEqual(p.returncode, <n>) ~~~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_repl.py", line 219, in test_interactive_traceback_reporting_multiple_input
    self.assertEqual(p.returncode, 0)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^
AssertionError: 2 != 0`
example test: `test_repl.TestInteractiveInterpreter.test_interactive_traceback_reporting_multiple_input`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_interpreter_shutdown rc, out, err = assert_python_ok(<str>, <str><str><str>.format(executor_typ`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_concurrent_futures/test_shutdown.py", line 32, in test_interpreter_shutdown
    rc, out, err = assert_python_ok('-c', """if 1:
                   ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^
        from concur`
example test: `test_concurrent_futures.test_shutdown.ProcessPoolSpawnProcessPoolShutdownTest.test_interpreter_shutdown`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_interprocess_signal assert_python_ok(script) ~~~~~~~~~~~~~~~~^^^^^^^^ File <str>, line <n>, in `

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_signal.py", line 137, in test_interprocess_signal
    assert_python_ok(script)
    ~~~~~~~~~~~~~~~~^^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/support/script_helper.py",`
example test: `test_signal.PosixTests.test_interprocess_signal`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_interrupt_main_invalid_signal self.assertRaises(ValueError, _thread.interrupt_main, -<n>) ~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_threading.py", line 2209, in test_interrupt_main_invalid_signal
    self.assertRaises(ValueError, _thread.interrupt_main, -1)
    ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Assertion`
example test: `test_threading.InterruptMainTests.test_interrupt_main_invalid_signal`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_interrupt_main_mainthread with self.assertRaises(KeyboardInterrupt): ~~~~~~~~~~~~~~~~~^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_threading.py", line 2197, in test_interrupt_main_mainthread
    with self.assertRaises(KeyboardInterrupt):
         ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^
AssertionError: KeyboardInterrupt not raised`
example test: `test_threading.InterruptMainTests.test_interrupt_main_mainthread`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_interrupt_main_subthread with self.assertRaises(KeyboardInterrupt): ~~~~~~~~~~~~~~~~~^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_threading.py", line 2189, in test_interrupt_main_subthread
    with self.assertRaises(KeyboardInterrupt):
         ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^
AssertionError: KeyboardInterrupt not raised`
example test: `test_threading.InterruptMainTests.test_interrupt_main_subthread`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_interrupt_main_with_signal_handler self.check_interrupt_main_with_signal_handler(signal.SIGINT)`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_threading.py", line 2201, in test_interrupt_main_with_signal_handler
    self.check_interrupt_main_with_signal_handler(signal.SIGINT)
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^`
example test: `test_threading.InterruptMainTests.test_interrupt_main_with_signal_handler`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_interrupted output = self.run_tests(test, exitcode=EXITCODE_INTERRUPTED) File <str>, line <n>, `

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_regrtest.py", line 1189, in test_interrupted
    output = self.run_tests(test, exitcode=EXITCODE_INTERRUPTED)
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_regrtest.py", line `
example test: `test_regrtest.ArgsTestCase.test_interrupted`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_intersection self.assertEqual(len(i), len(self.items2)) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_weakset.py", line 107, in test_intersection
    self.assertEqual(len(i), len(self.items2))
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: 3 != 2`
example test: `test_weakset.TestWeakSet.test_intersection`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_invalid___code___assignment with self.assertWarnsRegex(DeprecationWarning, <str>): ~~~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_funcattrs.py", line 89, in test_invalid___code___assignment
    with self.assertWarnsRegex(DeprecationWarning, 'code object of non-matching type'):
         ~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^`
example test: `test_funcattrs.FunctionPropertiesTest.test_invalid___code___assignment`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_invalid_cb_for_2bytes_seq self.assertCorrectUTF8Decoding(bytes.fromhex(seq), res, ~~~~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_str.py", line 2093, in test_invalid_cb_for_2bytes_seq
    self.assertCorrectUTF8Decoding(bytes.fromhex(seq), res,
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^
                       `
example test: `test_str.StrTest.test_invalid_cb_for_2bytes_seq`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_invalid_cb_for_3bytes_seq self.assertCorrectUTF8Decoding(bytes.fromhex(seq), res, ~~~~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_str.py", line 2151, in test_invalid_cb_for_3bytes_seq
    self.assertCorrectUTF8Decoding(bytes.fromhex(seq), res,
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^
                       `
example test: `test_str.StrTest.test_invalid_cb_for_3bytes_seq`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_invalid_cb_for_4bytes_seq self.assertCorrectUTF8Decoding(bytes.fromhex(seq), res, ~~~~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_str.py", line 2230, in test_invalid_cb_for_4bytes_seq
    self.assertCorrectUTF8Decoding(bytes.fromhex(seq), res,
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^
                       `
example test: `test_str.StrTest.test_invalid_cb_for_4bytes_seq`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_invalid_character_in_charset self._test(<str>, ~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_email/test__encoded_words.py", line 134, in test_invalid_character_in_charset
    self._test('=?utf-8\udce2\udc80\udc9d?q?foo=ACbar?=',
    ~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   `
example test: `test_email.test__encoded_words.TestDecode.test_invalid_character_in_charset`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_invalid_env self.assertEqual(stdout, b<str>) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^ Assertio`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_subprocess.py", line 906, in test_invalid_env
    self.assertEqual(stdout, b"orange=lemon")
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: b'' != b'orange=lemon'`
example test: `test_subprocess.ProcessTestCase.test_invalid_env`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_invalid_longs self.assertRaises(ValueError, marshal.loads, invalid_string) ~~~~~~~~~~~~~~~~~^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_marshal.py", line 429, in test_invalid_longs
    self.assertRaises(ValueError, marshal.loads, invalid_string)
    ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: ValueE`
example test: `test_marshal.BugsTestCase.test_invalid_longs`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_invalid_modes codecs.open(os_helper.TESTFN, mode, encoding=self.encoding) ~~~~~~~~~~~^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_codecs.py", line 729, in test_invalid_modes
    codecs.open(os_helper.TESTFN, mode, encoding=self.encoding)
    ~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
FileNotFoundError: [Errno`
example test: `test_codecs.UTF16Test.test_invalid_modes`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_invalid_start_byte self.assertCorrectUTF8Decoding(bytes([byte]), <str>, ~~~~~~~~~~~~~~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_str.py", line 2045, in test_invalid_start_byte
    self.assertCorrectUTF8Decoding(bytes([byte]), '\ufffd',
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^
                              `
example test: `test_str.StrTest.test_invalid_start_byte`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_invalid_utf8 check(byte) ~~~~~^^^^^^ File <str>, line <n>, in check rc, stdout, stderr = script`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_source_encoding.py", line 387, in test_invalid_utf8
    check(byte)
    ~~~~~^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_source_encoding.py", line 368, in check
    r`
example test: `test_source_encoding.UTF8ValidatorTest.test_invalid_utf8`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_invalid_warning self.assertEqual(len(w), <n>) ~~~~~~~~~~~~~~~~^^^^^^^^^^^ AssertionError: <n> !`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_codeop.py", line 310, in test_invalid_warning
    self.assertEqual(len(w), 1)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^
AssertionError: 0 != 1`
example test: `test_codeop.CodeopTests.test_invalid_warning`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_is_finalized self.assertFalse(gc.is_finalized(<n>)) ~~~~~~~~~~~~~~~^^^ AttributeError: module <`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_gc.py", line 635, in test_is_finalized
    self.assertFalse(gc.is_finalized(3))
                     ~~~~~~~~~~~~~~~^^^
AttributeError: module 'gc' has no attribute 'is_finalized'`
example test: `test_gc.GCTests.test_is_finalized`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_is_finalizing self.assertEqual(stdout.rstrip(), b<str>) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_sys.py", line 1195, in test_is_finalizing
    self.assertEqual(stdout.rstrip(), b'True')
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: b'' != b'True'`
example test: `test_sys.SysModuleTest.test_is_finalizing`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_isinstance_recursion_limit self.assertRaises(RecursionError, blowstack, isinstance, <str>, str)`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_isinstance.py", line 276, in test_isinstance_recursion_limit
    self.assertRaises(RecursionError, blowstack, isinstance, '', str)
    ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`
example test: `test_isinstance.TestIsInstanceIsSubclass.test_isinstance_recursion_limit`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_iso2022 self.assertEqual(decoder.decode(b<str>), <str>) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_multibytecodec.py", line 260, in test_iso2022
    self.assertEqual(decoder.decode(b'@$@'), '\u4e16')
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: '@$@' != '世'
- @$@
+ 世`
example test: `test_multibytecodec.Test_IncrementalDecoder.test_iso2022`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_iso2022_jp_g0 self.assertNotIn(b<str>, <str>.encode(<str>)) ~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_multibytecodec.py", line 362, in test_iso2022_jp_g0
    self.assertNotIn(b'\x0e', '\N{SOFT HYPHEN}'.encode('iso-2022-jp-2'))
                              ~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^
`
example test: `test_multibytecodec.Test_ISO2022.test_iso2022_jp_g0`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_isolatedmode self.verify_valid_flag(<str>) ~~~~~~~~~~~~~~~~~~~~~~^^^^^^ File <str>, line <n>, i`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_cmd_line.py", line 632, in test_isolatedmode
    self.verify_valid_flag('-I')
    ~~~~~~~~~~~~~~~~~~~~~~^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_cmd_line.py", line`
example test: `test_cmd_line.CmdLineTest.test_isolatedmode`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_issue_7959 live = [x for x in gc.get_objects() ~~~~~~~~~~~~~~^^ AttributeError: module <str> ha`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_ctypes/test_callbacks.py", line 132, in test_issue_7959
    live = [x for x in gc.get_objects()
                       ~~~~~~~~~~~~~~^^
AttributeError: module 'gc' has no attribute 'get_objects'`
example test: `test_ctypes.test_callbacks.Callbacks.test_issue_7959`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_issue105979 self.assertIn(<str>, ~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ str(cm.exc`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_import/__init__.py", line 849, in test_issue105979
    self.assertIn("Frozen object named 'x' is invalid",
    ~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                  str(cm.exception`
example test: `test_import.ImportTests.test_issue105979`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_issue119004_change_linked_list_by_clear self.check_runtime_error_issue119004(dict1, dict2) ~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_ordered_dict.py", line 842, in test_issue119004_change_linked_list_by_clear
    self.check_runtime_error_issue119004(dict1, dict2)
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^
  File "/wo`
example test: `test_ordered_dict.CPythonOrderedDictSubclassTests.test_issue119004_change_linked_list_by_clear`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_issue119004_change_linked_list_by_delete_key self.check_runtime_error_issue119004(dict1, dict2)`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_ordered_dict.py", line 856, in test_issue119004_change_linked_list_by_delete_key
    self.check_runtime_error_issue119004(dict1, dict2)
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^
  File`
example test: `test_ordered_dict.CPythonOrderedDictSubclassTests.test_issue119004_change_linked_list_by_delete_key`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_issue119004_change_size_by_clear self.check_runtime_error_issue119004(dict1, dict2) ~~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_ordered_dict.py", line 816, in test_issue119004_change_size_by_clear
    self.check_runtime_error_issue119004(dict1, dict2)
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^
  File "/work/.har`
example test: `test_ordered_dict.CPythonOrderedDictSubclassTests.test_issue119004_change_size_by_clear`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_issue119004_change_size_by_delete_key self.check_runtime_error_issue119004(dict1, dict2) ~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_ordered_dict.py", line 829, in test_issue119004_change_size_by_delete_key
    self.check_runtime_error_issue119004(dict1, dict2)
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^
  File "/work`
example test: `test_ordered_dict.CPythonOrderedDictSubclassTests.test_issue119004_change_size_by_delete_key`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_issue119506 self.assertEqual([b<str>, b<str>, b<str>*chunk_size], ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_io.py", line 4160, in test_issue119506
    self.assertEqual([b"abcdef", b"middle", b"g"*chunk_size],
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                     buf._write_st`
example test: `test_io.CTextIOWrapperTest.test_issue119506`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_issue20500_exit_with_exception_value self.assertEqual(text.rstrip(), <str>) ~~~~~~~~~~~~~~~~^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_cmd_line_script.py", line 605, in test_issue20500_exit_with_exception_value
    self.assertEqual(text.rstrip(), "some text")
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: '' != '`
example test: `test_cmd_line_script.CmdLineTest.test_issue20500_exit_with_exception_value`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_issue20602 self.assertIn(b<str>, out[<n>]) ~~~^^^ IndexError: list index out of range`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_sys.py", line 1209, in test_issue20602
    self.assertIn(b'sys.flags', out[0])
                                ~~~^^^
IndexError: list index out of range`
example test: `test_sys.SysModuleTest.test_issue20602`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_issue41287 self.assertEqual(doc, <str>, ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ <str>) ^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_property.py", line 370, in test_issue41287
    self.assertEqual(doc, "issue 41287 is fixed",
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                     "Subclasses of ʼpropertyʼ ignores`
example test: `test_property.PropertySubclassTests.test_issue41287`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_issue8202 rc, out, err = assert_python_ok(<str>, <str>, *example_args, __isolated=False) ~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_cmd_line_script.py", line 394, in test_issue8202
    rc, out, err = assert_python_ok('-m', 'test_pkg.script', *example_args, __isolated=False)
                   ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^`
example test: `test_cmd_line_script.CmdLineTest.test_issue8202`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_issue8202_dash_m_file_ignored rc, out, err = assert_python_ok(<str>, <str>, *example_args, ~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_cmd_line_script.py", line 426, in test_issue8202_dash_m_file_ignored
    rc, out, err = assert_python_ok('-m', 'other', *example_args,
                   ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^`
example test: `test_cmd_line_script.CmdLineTest.test_issue8202_dash_m_file_ignored`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_iter_function_concealing_reentrant_exhaustion with self.assertRaises(StopIteration): ~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_iter.py", line 375, in test_iter_function_concealing_reentrant_exhaustion
    with self.assertRaises(StopIteration):
         ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^
AssertionError: StopIteration not rais`
example test: `test_iter.TestCase.test_iter_function_concealing_reentrant_exhaustion`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_itimer_real signal.pause() ~~~~~~~~~~~~^^ AttributeError: module <str> has no attribute <str>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_signal.py", line 834, in test_itimer_real
    signal.pause()
    ~~~~~~~~~~~~^^
AttributeError: module 'signal' has no attribute 'pause'`
example test: `test_signal.ItimerTest.test_itimer_real`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_join_overflow self.assertRaises(OverflowError, <str>.join, seq) ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_str.py", line 572, in test_join_overflow
    self.assertRaises(OverflowError, ''.join, seq)
    ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/opt/elide/lib/resources/python/python-home/li`
example test: `test_str.StrTest.test_join_overflow`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_joinable_queue self.test_queue(<str>) ~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^ File <str>, line <n>, in`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/_test_multiprocessing.py", line 6536, in test_joinable_queue
    self.test_queue("JoinableQueue")
    ~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/_tes`
example test: `test_multiprocessing_fork.test_misc.TestSyncManagerTypes.test_joinable_queue`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_jump_between_except_blocks <n>/<n> ~^~ ZeroDivisionError: division by zero During handling of t`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_sys_settrace.py", line 2334, in test_jump_between_except_blocks
    1/0
    ~^~
ZeroDivisionError: division by zero

During handling of the above exception, another exception occurred:

Traceback (`
example test: `test_sys_settrace.JumpTestCase.test_jump_between_except_blocks`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_jump_between_except_blocks_2 <n>/<n> ~^~ ZeroDivisionError: division by zero During handling of`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_sys_settrace.py", line 2658, in test_jump_between_except_blocks_2
    1/0
    ~^~
ZeroDivisionError: division by zero

During handling of the above exception, another exception occurred:

Traceback`
example test: `test_sys_settrace.JumpTestCase.test_jump_between_except_blocks_2`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_jump_from_except_to_finally <n>/<n> ~^~ ZeroDivisionError: division by zero During handling of `

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_sys_settrace.py", line 2345, in test_jump_from_except_to_finally
    1/0
    ~^~
ZeroDivisionError: division by zero

During handling of the above exception, another exception occurred:

Traceback `
example test: `test_sys_settrace.JumpTestCase.test_jump_from_except_to_finally`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_jump_in_nested_finally_2 <n>/<n> ~^~ ZeroDivisionError: division by zero During handling of the`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_sys_settrace.py", line 2213, in test_jump_in_nested_finally_2
    1/0
    ~^~
ZeroDivisionError: division by zero

During handling of the above exception, another exception occurred:

Traceback (mo`
example test: `test_sys_settrace.JumpTestCase.test_jump_in_nested_finally_2`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_jump_in_nested_finally_3 <n>/<n> ~^~ ZeroDivisionError: division by zero During handling of the`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_sys_settrace.py", line 2224, in test_jump_in_nested_finally_3
    1/0
    ~^~
ZeroDivisionError: division by zero

During handling of the above exception, another exception occurred:

Traceback (mo`
example test: `test_sys_settrace.JumpTestCase.test_jump_in_nested_finally_3`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_jump_out_of_bare_except_block <n>/<n> ~^~ ZeroDivisionError: division by zero During handling o`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_sys_settrace.py", line 2735, in test_jump_out_of_bare_except_block
    1/0
    ~^~
ZeroDivisionError: division by zero

During handling of the above exception, another exception occurred:

Tracebac`
example test: `test_sys_settrace.JumpTestCase.test_jump_out_of_bare_except_block`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_jump_out_of_qualified_except_block <n>/<n> ~^~ ZeroDivisionError: division by zero During handl`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_sys_settrace.py", line 2745, in test_jump_out_of_qualified_except_block
    1/0
    ~^~
ZeroDivisionError: division by zero

During handling of the above exception, another exception occurred:

Tra`
example test: `test_sys_settrace.JumpTestCase.test_jump_out_of_qualified_except_block`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_jump_to_firstlineno exec(code, namespace) ~~~~^^^^^^^^^^^^^^^^^ File <str>, line <n>, in <modul`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_sys_settrace.py", line 2835, in test_jump_to_firstlineno
    exec(code, namespace)
    ~~~~^^^^^^^^^^^^^^^^^
  File "<fake module>", line 5, in <module>
  File "/work/.harness/work/cpython-core/cpy`
example test: `test_sys_settrace.JumpTestCase.test_jump_to_firstlineno`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_jump_within_except_block <n>/<n> ~^~ ZeroDivisionError: division by zero During handling of the`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_sys_settrace.py", line 2356, in test_jump_within_except_block
    1/0
    ~^~
ZeroDivisionError: division by zero

During handling of the above exception, another exception occurred:

Traceback (mo`
example test: `test_sys_settrace.JumpTestCase.test_jump_within_except_block`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_key_with_mutating_del self.assertRaises(ValueError, data.sort, key=SortKiller) ~~~~~~~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_sort.py", line 239, in test_key_with_mutating_del
    self.assertRaises(ValueError, data.sort, key=SortKiller)
    ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: ValueErro`
example test: `test_sort.TestDecorateSortUndecorate.test_key_with_mutating_del`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_keyboard_interrupt_exit_code self.assertIn(b<str>, process.stderr) ~~~~~~~~~~~~~^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_signal.py", line 175, in test_keyboard_interrupt_exit_code
    self.assertIn(b"KeyboardInterrupt", process.stderr)
    ~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: b'Keyboard`
example test: `test_signal.PosixTests.test_keyboard_interrupt_exit_code`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_KeyboardInterrupt_at_first_line_of_frame self.assertEqual(report, expected) ~~~~~~~~~~~~~~~~^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_traceback.py", line 3024, in test_KeyboardInterrupt_at_first_line_of_frame
    self.assertEqual(report, expected)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^
AssertionError: 'Trac[135 chars] def f():\n `
example test: `test_traceback.PyExcReportingTests.test_KeyboardInterrupt_at_first_line_of_frame`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_keywords_in_subclass u = subclass_with_init([<n>, <n>], newarg=<n>) TypeError: frozenset() got `

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_set.py", line 810, in test_keywords_in_subclass
    u = subclass_with_init([1, 2], newarg=3)
TypeError: frozenset() got an unexpected keyword argument 'newarg'`
example test: `test_set.TestFrozenSetSubclass.test_keywords_in_subclass`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_keywords_in_subclass u = subclass_with_init([<n>, <n>], newarg=<n>) TypeError: tuple() got an u`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_tuple.py", line 57, in test_keywords_in_subclass
    u = subclass_with_init([1, 2], newarg=3)
TypeError: tuple() got an unexpected keyword argument 'newarg'`
example test: `test_tuple.TupleTest.test_keywords_in_subclass`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_keywords_in_subclass u = subclass_with_init(<n>, newarg=<n>) TypeError: float() got an unexpect`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_float.py", line 268, in test_keywords_in_subclass
    u = subclass_with_init(2.5, newarg=3)
TypeError: float() got an unexpected keyword argument 'newarg'`
example test: `test_float.GeneralFloatCases.test_keywords_in_subclass`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_keywords_in_subclass u = subclass_with_new([<n>, <n>], newarg=<n>) TypeError: list() got an une`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_list.py", line 74, in test_keywords_in_subclass
    u = subclass_with_new([1, 2], newarg=3)
TypeError: list() got an unexpected keyword argument 'newarg'`
example test: `test_list.ListTest.test_keywords_in_subclass`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_korean_codecs eq(h.encode(), <str><str><str>) ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_email/test_asian_codecs.py", line 106, in test_korean_codecs
            eq(h.encode(), """\
            ~~^^^^^^^^^^^^^^^^^
    Korean =?euc-kr?b?x9Gxub7u?= =?ks_c_5601-1987?b?x9Gxub7uIMfRsbm+7g==`
example test: `test_email.test_asian_codecs.TestEmailAsianCodecs.test_korean_codecs`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_large_content_length self.assertEqual(res.read(), b<str> % (size, size) + self.linesep) ~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_httpservers.py", line 1021, in test_large_content_length
    self.assertEqual(res.read(), b'%d %d' % (size, size) + self.linesep)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`
example test: `test_httpservers.CGIHTTPServerTestCase.test_large_content_length`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_large_content_length_truncated res = self.request(<str>, <str>, b<str>, headers) File <str>, li`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_httpservers.py", line 1028, in test_large_content_length_truncated
    res = self.request('/cgi-bin/file1.py', 'POST', b'x', headers)
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/`
example test: `test_httpservers.CGIHTTPServerTestCase.test_large_content_length_truncated`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_large_filesize with self.assertRaises(OverflowError): ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^ Assertio`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_mmap.py", line 1207, in test_large_filesize
    with self.assertRaises(OverflowError):
         ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^
AssertionError: OverflowError not raised`
example test: `test_mmap.LargeMmapTests.test_large_filesize`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_large_function self.run_test(f, <n>, <n>, [<n>], warning=(RuntimeWarning, self.unbound_locals))`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_sys_settrace.py", line 2818, in test_large_function
    self.run_test(f, 2, 1007, [0], warning=(RuntimeWarning, self.unbound_locals))
    ~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`
example test: `test_sys_settrace.JumpTestCase.test_large_function`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_large_pool rc, out, err = script_helper.assert_python_ok(testfn) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/_test_multiprocessing.py", line 6786, in test_large_pool
    rc, out, err = script_helper.assert_python_ok(testfn)
                   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^
  File "/work/.harness/work/c`
example test: `test_multiprocessing_fork.test_misc.MiscTestCase.test_large_pool`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_large_update m1 = cons(usedforsecurity=False) _hashlib.UnsupportedDigestmodError: NoSuchAlgorit`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_hashlib.py", line 402, in test_large_update
    m1 = cons(usedforsecurity=False)
_hashlib.UnsupportedDigestmodError: NoSuchAlgorithmException: BLAKE2B-512 MessageDigest not available

Java stack tr`
example test: `test_hashlib.HashLibTestCase.test_large_update`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_large_year return super().test_large_year() ~~~~~~~~~~~~~~~~~~~~~~~^^ File <str>, line <n>, in `

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_time.py", line 702, in test_large_year
    return super().test_large_year()
           ~~~~~~~~~~~~~~~~~~~~~~~^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_time.py", line 7`
example test: `test_time.TestStrftime4dyear.test_large_year`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_late_resource_warning self.assertTrue(err.startswith(expected), ascii(err)) ~~~~~~~~~~~~~~~^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_warnings/__init__.py", line 1581, in test_late_resource_warning
    self.assertTrue(err.startswith(expected), ascii(err))
    ~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: F`
example test: `test_warnings.FinalizationTest.test_late_resource_warning`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_lazy_evaluation with self.assertRaises(NameError): ~~~~~~~~~~~~~~~~~^^^^^^^^^^^ AssertionError:`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_type_params.py", line 1374, in test_lazy_evaluation
    with self.assertRaises(NameError):
         ~~~~~~~~~~~~~~~~~^^^^^^^^^^^
AssertionError: NameError not raised`
example test: `test_type_params.DefaultsTest.test_lazy_evaluation`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_lc_numeric_localeconv if self.numeric_tester(<str>, formatting[lc], lc, loc): ~~~~~~~~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test__locale.py", line 176, in test_lc_numeric_localeconv
    if self.numeric_tester('localeconv', formatting[lc], lc, loc):
       ~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/wo`
example test: `test__locale._LocaleTests.test_lc_numeric_localeconv`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_leak_fast_process_del_killed with warnings_helper.check_warnings((<str>, ResourceWarning)): ~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_subprocess.py", line 3358, in test_leak_fast_process_del_killed
    with warnings_helper.check_warnings(('', ResourceWarning)):
         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^
  File`
example test: `test_subprocess.POSIXProcessTestCase.test_leak_fast_process_del_killed`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_leak_tmp_file output = self.run_tests(<str>, <str>, <str>, *testnames, exitcode=EXITCODE_ENV_CH`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_regrtest.py", line 2045, in test_leak_tmp_file
    output = self.run_tests("--fail-env-changed", "-v", "-j2", *testnames,
                            exitcode=EXITCODE_ENV_CHANGED)
  File "/work/.h`
example test: `test_regrtest.ArgsTestCase.test_leak_tmp_file`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_len_race self.addCleanup(gc.set_threshold, *gc.get_threshold()) ^^^^^^^^^^^^^^^^ AttributeError`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_weakset.py", line 428, in test_len_race
    self.addCleanup(gc.set_threshold, *gc.get_threshold())
                    ^^^^^^^^^^^^^^^^
AttributeError: module 'gc' has no attribute 'set_threshold'`
example test: `test_weakset.TestWeakSet.test_len_race`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_library self.assertTrue(library.startswith(f<str>)) ~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_sysconfig.py", line 474, in test_library
    self.assertTrue(library.startswith(f'libpython{major}.{minor}'))
                    ~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: 'No`
example test: `test_sysconfig.TestSysConfig.test_library`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_limit_int self.assertRaisesRegex(ValueError, msg, F, <str> + <str> * (maxdigits+<n>)) ~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_fractions.py", line 481, in test_limit_int
    self.assertRaisesRegex(ValueError, msg, F, '1.1e' + '0' * (maxdigits+1))
    ~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`
example test: `test_fractions.FractionTest.test_limit_int`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_line_continuation_EOF self.assertEqual(cm.exception.text, <str>) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_eof.py", line 100, in test_line_continuation_EOF
    self.assertEqual(cm.exception.text, 'ä = 5\\\n')
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: 'ä = 5\\' != 'ä = 5\\\n'
 `
example test: `test_eof.EOFTestCase.test_line_continuation_EOF`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_line_event_raises_before_opcode_event f() ~^^ File <str>, line <n>, in f def f(): pass File <st`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_sys_settrace.py", line 1950, in test_line_event_raises_before_opcode_event
    f()
    ~^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_sys_settrace.py", line 1946, in f
    `
example test: `test_sys_settrace.RaisingTraceFuncTestCase.test_line_event_raises_before_opcode_event`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_linebreak_7643 self.assertEqual(len(lines), <n>, ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^ r<str> % c) ^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_unicodedata.py", line 781, in test_linebreak_7643
    self.assertEqual(len(lines), 2,
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^
                     r"%a should be a linebreak" % c)
                     `
example test: `test_unicodedata.UnicodeMiscTest.test_linebreak_7643`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_linux_ext_suffix self.assertTrue(suffix.endswith(expected_suffixes), ~~~~~~~~~~~~~~~^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_sysconfig.py", line 582, in test_linux_ext_suffix
    self.assertTrue(suffix.endswith(expected_suffixes),
    ~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                    f'unexpected su`
example test: `test_sysconfig.TestSysConfig.test_linux_ext_suffix`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_list self.assertEqual(gc.collect(), <n>) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^ AssertionError: <n> `

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_gc.py", line 94, in test_list
    self.assertEqual(gc.collect(), 1)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^
AssertionError: 0 != 1`
example test: `test_gc.GCTests.test_list`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_list self.run_worker(self._test_list, o) ~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^ File <str>, line <`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/_test_multiprocessing.py", line 6554, in test_list
    self.run_worker(self._test_list, o)
    ~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/_test_mu`
example test: `test_multiprocessing_fork.test_misc.TestSyncManagerTypes.test_list`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_list_cases output = self.run_tests(<str>, testname) File <str>, line <n>, in run_tests return s`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_regrtest.py", line 1394, in test_list_cases
    output = self.run_tests('--list-cases', testname)
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_regrtest.py", line 1000, in run`
example test: `test_regrtest.ArgsTestCase.test_list_cases`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_list_command self.assertEqual(out, expected) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^ AssertionError: b<`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_tarfile.py", line 2902, in test_list_command
    self.assertEqual(out, expected)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^
AssertionError: b'ust[3000 chars]uts-\xc3\x84\xc3\x96\xc3\x9c\xc3\xa4\xc3\xb6\x[`
example test: `test_tarfile.CommandLineTest.test_list_command`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_list_command_verbose self.assertEqual(out, expected) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^ AssertionE`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_tarfile.py", line 2913, in test_list_command_verbose
    self.assertEqual(out, expected)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^
AssertionError: b'?rw[5980 chars]uts-\xc3\x84\xc3\x96\xc3\x9c\xc3\xa4\xc`
example test: `test_tarfile.CommandLineTest.test_list_command_verbose`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_list_index_modifing_operand with self.assertRaises(ValueError): ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^ A`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_list.py", line 274, in test_list_index_modifing_operand
    with self.assertRaises(ValueError):
         ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^
AssertionError: ValueError not raised`
example test: `test_list.ListTest.test_list_index_modifing_operand`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_list_tests output = self.run_tests(<str>, *tests) File <str>, line <n>, in run_tests return sel`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_regrtest.py", line 1374, in test_list_tests
    output = self.run_tests('--list-tests', *tests)
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_regrtest.py", line 1000, in run_t`
example test: `test_regrtest.ArgsTestCase.test_list_tests`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_literal_eval_str_int_limit with self.assertRaises(SyntaxError) as err_ctx: ^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_ast/test_ast.py", line 1609, in test_literal_eval_str_int_limit
    with self.assertRaises(SyntaxError) as err_ctx:
         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: SyntaxError no`
example test: `test_ast.test_ast.ASTHelpers_Test.test_literal_eval_str_int_limit`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_load_module_api self._do_test(absolute_import_test, modulefinder_class=CheckLoadModuleApi) ~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_modulefinder.py", line 435, in test_load_module_api
    self._do_test(absolute_import_test, modulefinder_class=CheckLoadModuleApi)
    ~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`
example test: `test_modulefinder.ModuleFinderTest.test_load_module_api`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_local_namespace self.assertIn(b<str>, output) ~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^ Assertion`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_pdb.py", line 4222, in test_local_namespace
    self.assertIn(b'I love Python', output)
    ~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: b'I love Python' not found in bytearray(b"orig\t.`
example test: `test_pdb.PdbTestReadline.test_local_namespace`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_locals_clear_locals self.assertEqual(outer.f_locals, {}) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^ A`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_frame.py", line 219, in test_locals_clear_locals
    self.assertEqual(outer.f_locals, {})
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^
AssertionError: {'inner': <function FrameAttrsTest.make_fr[61 char`
example test: `test_frame.FrameAttrsTest.test_locals_clear_locals`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_lock p.start() ~~~~~~~^^ File <str>, line <n>, in start self._popen = self._Popen(self) ~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/_test_multiprocessing.py", line 5573, in test_lock
    p.start()
    ~~~~~~~^^
  File "/opt/elide/lib/resources/python/python-home/lib/python3.13/multiprocessing/process.py", line 121, in start
    self`
example test: `test_multiprocessing_fork.test_misc.TestForkAwareThreadLock.test_lock`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_lock self.run_worker(self._test_lock, o) ~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^ File <str>, line <`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/_test_multiprocessing.py", line 6464, in test_lock
    self.run_worker(self._test_lock, o)
    ~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/_test_mu`
example test: `test_multiprocessing_fork.test_misc.TestSyncManagerTypes.test_lock`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_lockf_exclusive self.assertEqual(p.exitcode, <n>) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^ AssertionErro`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_fcntl.py", line 183, in test_lockf_exclusive
    self.assertEqual(p.exitcode, 0)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^
AssertionError: 1 != 0`
example test: `test_fcntl.TestFcntl.test_lockf_exclusive`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_lockf_share self.assertEqual(p.exitcode, <n>) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^ AssertionError: <`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_fcntl.py", line 196, in test_lockf_share
    self.assertEqual(p.exitcode, 0)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^
AssertionError: 1 != 0`
example test: `test_fcntl.TestFcntl.test_lockf_share`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_logging_at_shutdown self.assertIn(<str>, err) ~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Assert`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_logging.py", line 5179, in test_logging_at_shutdown
    self.assertIn("exception in __del__", err)
    ~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: 'exception in __del__' not found in`
example test: `test_logging.ModuleLevelMiscTest.test_logging_at_shutdown`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_logging_at_shutdown_open self.assertEqual(fp.read().rstrip(), <str>) ~~~~~~~~~~~~~~~~^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_logging.py", line 5211, in test_logging_at_shutdown_open
    self.assertEqual(fp.read().rstrip(), "ERROR:root:log in __del__")
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`
example test: `test_logging.ModuleLevelMiscTest.test_logging_at_shutdown_open`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_long_signatures self.assertEqual(doc, <str><str><str>\n | list of weak references to the object`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_pydoc/test_pydoc.py", line 1155, in test_long_signatures
            self.assertEqual(doc, '''Python Library Documentation: class A in module %s
            ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^`
example test: `test_pydoc.test_pydoc.PydocDocTest.test_long_signatures`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_loop_caller_importing self.assertEqual(self.tracer.results().callers, expected) ~~~~~~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_trace.py", line 354, in test_loop_caller_importing
    self.assertEqual(self.tracer.results().callers, expected)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: {(('/[`
example test: `test_trace.TestCallers.test_loop_caller_importing`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_magic_number self.assertEqual(EXPECTED_MAGIC_NUMBER, actual, msg) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_importlib/test_util.py", line 666, in test_magic_number
    self.assertEqual(EXPECTED_MAGIC_NUMBER, actual, msg)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: 3571 != 213`
example test: `test_importlib.test_util.MagicNumberTests.test_magic_number`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_mapping_file self._test_mapping_file_ucm() ~~~~~~~~~~~~~~~~~~~~~~~~~~~^^ File <str>, line <n>, `

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/multibytecodec_support.py", line 320, in test_mapping_file
    self._test_mapping_file_ucm()
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/multibytecod`
example test: `test_codecmaps_cn.TestGB18030Map.test_mapping_file`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_mapping_supplemental self._testpoint(*mapping) ~~~~~~~~~~~~~~~^^^^^^^^^^ File <str>, line <n>, `

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/multibytecodec_support.py", line 362, in test_mapping_supplemental
    self._testpoint(*mapping)
    ~~~~~~~~~~~~~~~^^^^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/multibytecod`
example test: `test_codecmaps_jp.TestCP932Map.test_mapping_supplemental`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_marshal self.do_test(<str>) ~~~~~~~~~~~~^^^^^^^^^^^^^^^^ File <str>, line <n>, in do_test self.`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_audit.py", line 64, in test_marshal
    self.do_test("test_marshal")
    ~~~~~~~~~~~~^^^^^^^^^^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_audit.py", line 39, in do_t`
example test: `test_audit.AuditTest.test_marshal`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_match_args self.assertEqual(time.struct_time.__match_args__, expected_args) ^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_structseq.py", line 262, in test_match_args
    self.assertEqual(time.struct_time.__match_args__, expected_args)
                     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: type object 'ti`
example test: `test_structseq.StructSeqTest.test_match_args`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_match_args_with_unnamed_fields self.assertEqual(os.stat_result.__match_args__, expected_args) ^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_structseq.py", line 268, in test_match_args_with_unnamed_fields
    self.assertEqual(os.stat_result.__match_args__, expected_args)
                     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AttributeError:`
example test: `test_structseq.StructSeqTest.test_match_args_with_unnamed_fields`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_matchfile output = self.run_tests(<str>, testname) File <str>, line <n>, in run_tests return se`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_regrtest.py", line 1472, in test_matchfile
    output = self.run_tests("-v", testname)
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_regrtest.py", line 1000, in run_tests
    `
example test: `test_regrtest.ArgsTestCase.test_matchfile`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_max_tasks_early_shutdown self.assertEqual(future.result(), mul(i, i)) ~~~~~~~~~~~~~^^ File <str`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_concurrent_futures/test_process_pool.py", line 191, in test_max_tasks_early_shutdown
    self.assertEqual(future.result(), mul(i, i))
                     ~~~~~~~~~~~~~^^
  File "/opt/elide/lib/res`
example test: `test_concurrent_futures.test_process_pool.ProcessPoolSpawnProcessPoolExecutorTest.test_max_tasks_early_shutdown`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_maybe self._do_test(maybe_test) ~~~~~~~~~~~~~^^^^^^^^^^^^ File <str>, line <n>, in _do_test sel`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_modulefinder.py", line 357, in test_maybe
    self._do_test(maybe_test)
    ~~~~~~~~~~~~~^^^^^^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_modulefinder.py", line 346,`
example test: `test_modulefinder.ModuleFinderTest.test_maybe`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_maybe_new self._do_test(maybe_test_new) ~~~~~~~~~~~~~^^^^^^^^^^^^^^^^ File <str>, line <n>, in `

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_modulefinder.py", line 360, in test_maybe_new
    self._do_test(maybe_test_new)
    ~~~~~~~~~~~~~^^^^^^^^^^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_modulefinder.py`
example test: `test_modulefinder.ModuleFinderTest.test_maybe_new`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_memoryview_assign self.assertRaises(ValueError, m2.__setitem__, <n>, lo-<n>) ~~~~~~~~~~~~~~~~~^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_buffer.py", line 3031, in test_memoryview_assign
    self.assertRaises(ValueError, m2.__setitem__, 0, lo-1)
    ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: ValueError not`
example test: `test_buffer.TestBufferProtocol.test_memoryview_assign`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_memoryview_cast_invalid self.assertRaises(NotImplementedError, m.__setitem__, <n>, <n>) ~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_buffer.py", line 2647, in test_memoryview_cast_invalid
    self.assertRaises(NotImplementedError, m.__setitem__, 0, 8)
    ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/opt/e`
example test: `test_buffer.TestBufferProtocol.test_memoryview_cast_invalid`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_memoryview_compare_multidim_c self.assertEqual(v, nd1) ~~~~~~~~~~~~~~~~^^^^^^^^ File <str>, lin`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_buffer.py", line 3480, in test_memoryview_compare_multidim_c
    self.assertEqual(v, nd1)
    ~~~~~~~~~~~~~~~~^^^^^^^^
  File "/opt/elide/lib/resources/python/python-home/lib/python3.13/unittest/ca`
example test: `test_buffer.TestBufferProtocol.test_memoryview_compare_multidim_c`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_memoryview_compare_multidim_fortran self.assertEqual(v, nd1) ~~~~~~~~~~~~~~~~^^^^^^^^ File <str`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_buffer.py", line 3546, in test_memoryview_compare_multidim_fortran
    self.assertEqual(v, nd1)
    ~~~~~~~~~~~~~~~~^^^^^^^^
  File "/opt/elide/lib/resources/python/python-home/lib/python3.13/unitt`
example test: `test_buffer.TestBufferProtocol.test_memoryview_compare_multidim_fortran`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_memoryview_compare_multidim_mixed self.assertEqual(v, nd1) ~~~~~~~~~~~~~~~~^^^^^^^^ File <str>,`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_buffer.py", line 3617, in test_memoryview_compare_multidim_mixed
    self.assertEqual(v, nd1)
    ~~~~~~~~~~~~~~~~^^^^^^^^
  File "/opt/elide/lib/resources/python/python-home/lib/python3.13/unittes`
example test: `test_buffer.TestBufferProtocol.test_memoryview_compare_multidim_mixed`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_memoryview_compare_multidim_suboffsets self.assertEqual(v, nd1) ~~~~~~~~~~~~~~~~^^^^^^^^ File <`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_buffer.py", line 3774, in test_memoryview_compare_multidim_suboffsets
    self.assertEqual(v, nd1)
    ~~~~~~~~~~~~~~~~^^^^^^^^
  File "/opt/elide/lib/resources/python/python-home/lib/python3.13/un`
example test: `test_buffer.TestBufferProtocol.test_memoryview_compare_multidim_suboffsets`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_memoryview_compare_multidim_zero_strides self.assertEqual(v, nd1) ~~~~~~~~~~~~~~~~^^^^^^^^ File`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_buffer.py", line 3738, in test_memoryview_compare_multidim_zero_strides
    self.assertEqual(v, nd1)
    ~~~~~~~~~~~~~~~~^^^^^^^^
  File "/opt/elide/lib/resources/python/python-home/lib/python3.13/`
example test: `test_buffer.TestBufferProtocol.test_memoryview_compare_multidim_zero_strides`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_memoryview_compare_ndim_one self.assertEqual(v, nd1) ~~~~~~~~~~~~~~~~^^^^^^^^ File <str>, line `

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_buffer.py", line 3328, in test_memoryview_compare_ndim_one
    self.assertEqual(v, nd1)
    ~~~~~~~~~~~~~~~~^^^^^^^^
  File "/opt/elide/lib/resources/python/python-home/lib/python3.13/unittest/case`
example test: `test_buffer.TestBufferProtocol.test_memoryview_compare_ndim_one`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_memoryview_compare_ndim_zero self.assertEqual(v, w) ~~~~~~~~~~~~~~~~^^^^^^ File <str>, line <n>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_buffer.py", line 3286, in test_memoryview_compare_ndim_zero
    self.assertEqual(v, w)
    ~~~~~~~~~~~~~~~~^^^^^^
  File "/opt/elide/lib/resources/python/python-home/lib/python3.13/unittest/case.py`
example test: `test_buffer.TestBufferProtocol.test_memoryview_compare_ndim_zero`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_memoryview_compare_not_equal self.assertEqual(a, x) ~~~~~~~~~~~~~~~~^^^^^^ File <str>, line <n>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_buffer.py", line 3883, in test_memoryview_compare_not_equal
    self.assertEqual(a, x)
    ~~~~~~~~~~~~~~~~^^^^^^
  File "/opt/elide/lib/resources/python/python-home/lib/python3.13/unittest/case.py`
example test: `test_buffer.TestBufferProtocol.test_memoryview_compare_not_equal`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_memoryview_compare_random_formats self.assertEqual(m, nd) ~~~~~~~~~~~~~~~~^^^^^^^ File <str>, l`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_buffer.py", line 3454, in test_memoryview_compare_random_formats
    self.assertEqual(m, nd)
    ~~~~~~~~~~~~~~~~^^^^^^^
  File "/opt/elide/lib/resources/python/python-home/lib/python3.13/unittest/`
example test: `test_buffer.TestBufferProtocol.test_memoryview_compare_random_formats`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_memoryview_compare_special_cases self.assertNotEqual(memoryview(nd), nd) ~~~~~~~~~~~~~~~~~~~^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_buffer.py", line 3221, in test_memoryview_compare_special_cases
    self.assertNotEqual(memoryview(nd), nd)
    ~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^
  File "/opt/elide/lib/resources/python/pytho`
example test: `test_buffer.TestBufferProtocol.test_memoryview_compare_special_cases`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_memoryview_compare_zero_strides self.assertEqual(v, nd1) ~~~~~~~~~~~~~~~~^^^^^^^^ File <str>, l`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_buffer.py", line 3426, in test_memoryview_compare_zero_strides
    self.assertEqual(v, nd1)
    ~~~~~~~~~~~~~~~~^^^^^^^^
  File "/opt/elide/lib/resources/python/python-home/lib/python3.13/unittest/`
example test: `test_buffer.TestBufferProtocol.test_memoryview_compare_zero_strides`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_memoryview_construction self.verify(m, obj=ex, ~~~~~~~~~~~^^^^^^^^^^^ itemsize=<n>, fmt=<str>, `

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_buffer.py", line 2391, in test_memoryview_construction
    self.verify(m, obj=ex,
    ~~~~~~~~~~~^^^^^^^^^^^
                itemsize=1, fmt='B', readonly=True,
                ^^^^^^^^^^^^^^^^^^^^`
example test: `test_buffer.TestBufferProtocol.test_memoryview_construction`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_memoryview_from_static_exporter self.verify(y, obj=x, ~~~~~~~~~~~^^^^^^^^^^ itemsize=<n>, fmt=f`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_buffer.py", line 4349, in test_memoryview_from_static_exporter
    self.verify(y, obj=x,
    ~~~~~~~~~~~^^^^^^^^^^
                itemsize=1, fmt=fmt, readonly=True,
                ^^^^^^^^^^^^^^`
example test: `test_buffer.TestBufferProtocol.test_memoryview_from_static_exporter`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_memoryview_get_contiguous self.assertRaises(TypeError, get_contiguous, {}, PyBUF_READ, <str>) ^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_buffer.py", line 3983, in test_memoryview_get_contiguous
    self.assertRaises(TypeError, get_contiguous, {}, PyBUF_READ, 'F')
                                 ^^^^^^^^^^^^^^
NameError: name 'get_c`
example test: `test_buffer.TestBufferProtocol.test_memoryview_get_contiguous`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_memoryview_hash self.assertRaises(ValueError, m.__hash__) ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_buffer.py", line 4172, in test_memoryview_hash
    self.assertRaises(ValueError, m.__hash__)
    ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: ValueError not raised by __hash__`
example test: `test_buffer.TestBufferProtocol.test_memoryview_hash`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_memoryview_release self.assertRaises(BufferError, m.release) ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_buffer.py", line 4192, in test_memoryview_release
    self.assertRaises(BufferError, m.release)
    ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: BufferError not raised by release`
example test: `test_buffer.TestBufferProtocol.test_memoryview_release`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_memoryview_slice self.assertRaises(NotImplementedError, m.__getitem__, ~~~~~~~~~~~~~~~~~^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_buffer.py", line 3088, in test_memoryview_slice
    self.assertRaises(NotImplementedError, m.__getitem__,
    ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                      (slice(0,2,`
example test: `test_buffer.TestBufferProtocol.test_memoryview_slice`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_memoryview_struct_module self.assertIsNot(struct_err, None) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^ `

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_buffer.py", line 2575, in test_memoryview_struct_module
    self.assertIsNot(struct_err, None)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^
AssertionError: unexpectedly identical: None`
example test: `test_buffer.TestBufferProtocol.test_memoryview_struct_module`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_memoryview_tobytes self.assertEqual(m, nd) ~~~~~~~~~~~~~~~~^^^^^^^ File <str>, line <n>, in ass`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_buffer.py", line 3956, in test_memoryview_tobytes
    self.assertEqual(m, nd)
    ~~~~~~~~~~~~~~~~^^^^^^^
  File "/opt/elide/lib/resources/python/python-home/lib/python3.13/unittest/case.py", line `
example test: `test_buffer.TestBufferProtocol.test_memoryview_tobytes`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_method self.assertNotEqual(gc.collect(), <n>) ~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^ AssertionErr`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_gc.py", line 172, in test_method
    self.assertNotEqual(gc.collect(), 0)
    ~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^
AssertionError: 0 == 0`
example test: `test_gc.GCTests.test_method`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_method_aliases self.assertEqual(doc, <str><str><str> % __name__) ^^^^^^^^^^^^^^^ AssertionError`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_pydoc/test_pydoc.py", line 1067, in test_method_aliases
            self.assertEqual(doc, '''\
            ~~~~~~~~~~~~~~~~^^^^^^^^^^
    Python Library Documentation: class B in module %s
    ^^^^`
example test: `test_pydoc.test_pydoc.PydocDocTest.test_method_aliases`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_method_checksum self.assertEqual(result, self.expectedchecksum) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_unicodedata.py", line 83, in test_method_checksum
    self.assertEqual(result, self.expectedchecksum)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: 'ce2d810a50f0fb92d8707c2c13`
example test: `test_unicodedata.UnicodeMethodsTest.test_method_checksum`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_mixed_case_module_names_are_lower_cased self.assertIn(<str>, doc_link) ~~~~~~~~~~~~~^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_pydoc/test_pydoc.py", line 465, in test_mixed_case_module_names_are_lower_cased
    self.assertIn('xml.etree.elementtree', doc_link)
    ~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/op`
example test: `test_pydoc.test_pydoc.PydocDocTest.test_mixed_case_module_names_are_lower_cased`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_mod_concurrent_mutation self.assertRaises(BufferError, fmt.__mod__, S()) ~~~~~~~~~~~~~~~~~^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_bytes.py", line 1362, in test_mod_concurrent_mutation
    self.assertRaises(BufferError, fmt.__mod__, S())
    ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: BufferError not raise`
example test: `test_bytes.ByteArrayTest.test_mod_concurrent_mutation`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_module_autotest self.run_tests(args) ~~~~~~~~~~~~~~^^^^^^ File <str>, line <n>, in run_tests ou`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_regrtest.py", line 931, in test_module_autotest
    self.run_tests(args)
    ~~~~~~~~~~~~~~^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_regrtest.py", line 905, in run_`
example test: `test_regrtest.ProgramsTestCase.test_module_autotest`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_module_finalization_at_shutdown rc, out, err = assert_python_ok(<str>, <str>) ~~~~~~~~~~~~~~~~^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_module/__init__.py", line 302, in test_module_finalization_at_shutdown
    rc, out, err = assert_python_ok("-c", "from test.test_module import final_a")
                   ~~~~~~~~~~~~~~~~^^^^^^^^^`
example test: `test_module.ModuleTests.test_module_finalization_at_shutdown`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_module_from_test_autotest self.run_tests(args) ~~~~~~~~~~~~~~^^^^^^ File <str>, line <n>, in ru`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_regrtest.py", line 938, in test_module_from_test_autotest
    self.run_tests(args)
    ~~~~~~~~~~~~~~^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_regrtest.py", line 90`
example test: `test_regrtest.ProgramsTestCase.test_module_from_test_autotest`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_module_in_package self._check_script([<str>, <str>], script_name, script_name, ~~~~~~~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_cmd_line_script.py", line 324, in test_module_in_package
    self._check_script(["-m", "test_pkg.script"], script_name, script_name,
    ~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`
example test: `test_cmd_line_script.CmdLineTest.test_module_in_package`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_module_in_package self._check_script(launch_name) ~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^ File <str>, l`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_multiprocessing_main_handling.py", line 245, in test_module_in_package
    self._check_script(launch_name)
    ~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/`
example test: `test_multiprocessing_main_handling.SpawnCmdLineTest.test_module_in_package`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_module_in_package_in_zipfile self._check_script([<str>, <str>], run_name, run_name, ~~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_cmd_line_script.py", line 332, in test_module_in_package_in_zipfile
    self._check_script(["-m", "test_pkg.script"], run_name, run_name,
    ~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`
example test: `test_cmd_line_script.CmdLineTest.test_module_in_package_in_zipfile`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_module_in_package_in_zipfile self._check_script(launch_name) ~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^ Fi`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_multiprocessing_main_handling.py", line 251, in test_module_in_package_in_zipfile
    self._check_script(launch_name)
    ~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^
  File "/work/.harness/work/cpython-core/cp`
example test: `test_multiprocessing_main_handling.SpawnCmdLineTest.test_module_in_package_in_zipfile`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_module_in_subpackage_in_zipfile self._check_script([<str>, <str>], run_name, run_name, ~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_cmd_line_script.py", line 339, in test_module_in_subpackage_in_zipfile
    self._check_script(["-m", "test_pkg.test_pkg.script"], run_name, run_name,
    ~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^`
example test: `test_cmd_line_script.CmdLineTest.test_module_in_subpackage_in_zipfile`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_module_in_subpackage_in_zipfile self._check_script(launch_name) ~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_multiprocessing_main_handling.py", line 257, in test_module_in_subpackage_in_zipfile
    self._check_script(launch_name)
    ~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^
  File "/work/.harness/work/cpython-core`
example test: `test_multiprocessing_main_handling.SpawnCmdLineTest.test_module_in_subpackage_in_zipfile`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_module_level_callable self.assertEqual(self._get_summary_line(os.stat), ~~~~~~~~~~~~~~~~^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_pydoc/test_pydoc.py", line 1555, in test_module_level_callable
    self.assertEqual(self._get_summary_line(os.stat),
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
        "stat(path, *, dir`
example test: `test_pydoc.test_pydoc.TestDescriptions.test_module_level_callable`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_module_regrtest self.run_tests(args) ~~~~~~~~~~~~~~^^^^^^ File <str>, line <n>, in run_tests ou`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_regrtest.py", line 925, in test_module_regrtest
    self.run_tests(args)
    ~~~~~~~~~~~~~~^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_regrtest.py", line 905, in run_`
example test: `test_regrtest.ProgramsTestCase.test_module_regrtest`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_module_test self.run_tests(args) ~~~~~~~~~~~~~~^^^^^^ File <str>, line <n>, in run_tests output`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_regrtest.py", line 919, in test_module_test
    self.run_tests(args)
    ~~~~~~~~~~~~~~^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_regrtest.py", line 905, in run_test`
example test: `test_regrtest.ProgramsTestCase.test_module_test`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_monkeypatch self.do_test(<str>) ~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^ File <str>, line <n>, in do_te`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_audit.py", line 72, in test_monkeypatch
    self.do_test("test_monkeypatch")
    ~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_audit.py", line`
example test: `test_audit.AuditTest.test_monkeypatch`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_multiline_completion self.assertIn(b<str>, output) ~~~~~~~~~~~~~^^^^^^^^^^^^^^^ AssertionError:`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_pdb.py", line 4239, in test_multiline_completion
    self.assertIn(b'42', output)
    ~~~~~~~~~~~~~^^^^^^^^^^^^^^^
AssertionError: b'42' not found in bytearray(b'def func():\r\n\tret\t 40 + 2\r\n\r`
example test: `test_pdb.PdbTestReadline.test_multiline_completion`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_multiple_inheritance_buffer_last self.assertEqual(mv.tobytes(), b<str>) ~~~~~~~~~~~~~~~~^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_buffer.py", line 4762, in test_multiple_inheritance_buffer_last
    self.assertEqual(mv.tobytes(), b"hello A")
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: b'hello' != b'hello A'`
example test: `test_buffer.TestPythonBufferProtocol.test_multiple_inheritance_buffer_last`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_multiprocessing_timeout output = self.run_tests(<str>, <str>, testname, exitcode=EXITCODE_BAD_T`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_regrtest.py", line 1890, in test_multiprocessing_timeout
    output = self.run_tests("-j2", "--timeout=1.0", testname,
                            exitcode=EXITCODE_BAD_TEST)
  File "/work/.harness`
example test: `test_regrtest.ArgsTestCase.test_multiprocessing_timeout`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_mutate_list_during_encode self.assertEqual(call_count, <n>) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^ Ass`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_json/test_speedups.py", line 143, in test_mutate_list_during_encode
    self.assertEqual(call_count, 3)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^
AssertionError: 10 != 3`
example test: `test_json.test_speedups.TestEncode.test_mutate_list_during_encode`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_mutating_decode_handler self.assertEqual(data.decode(encoding, <str>), <str>) ~~~~~~~~~~~~~~~~^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_codeccallbacks.py", line 1161, in test_mutating_decode_handler
    self.assertEqual(data.decode(encoding, "test.mutating"), "\u4242")
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`
example test: `test_codeccallbacks.CodecCallbackTest.test_mutating_decode_handler`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_mutating_decode_handler_unicode_escape check(br<str>, <str>, r<str>) ~~~~~^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_codeccallbacks.py", line 1184, in test_mutating_decode_handler_unicode_escape
    check(br'\x0n\z', '\u0404\n\\z', r"invalid escape sequence '\z'")
    ~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`
example test: `test_codeccallbacks.CodecCallbackTest.test_mutating_decode_handler_unicode_escape`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_name self.assertEqual(name(<str>, None), None if self.old else ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_unicodedata.py", line 135, in test_name
    self.assertEqual(name('\u0221', None), None if self.old else
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                     'LATIN`
example test: `test_unicodedata.Unicode_3_2_0_FunctionsTest.test_name`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_name_attribute h = cons(usedforsecurity=False) _hashlib.UnsupportedDigestmodError: NoSuchAlgori`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_hashlib.py", line 384, in test_name_attribute
    h = cons(usedforsecurity=False)
_hashlib.UnsupportedDigestmodError: NoSuchAlgorithmException: BLAKE2B-512 MessageDigest not available

Java stack t`
example test: `test_hashlib.HashLibTestCase.test_name_attribute`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_name_cleanup self.assertEqual(names - allowed, set([])) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/datetimetester.py", line 105, in test_name_cleanup
    self.assertEqual(names - allowed, set([]))
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: Items in the first set but not the second`
example test: `datetimetester.TestModule_Fast.test_name_cleanup`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_name_closed_socketio self.assertEqual(repr(fp), <str>) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_socket.py", line 1853, in test_name_closed_socketio
    self.assertEqual(repr(fp), "<_io.BufferedReader name=-1>")
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: '<B`
example test: `test_socket.GeneralModuleTests.test_name_closed_socketio`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_name_error_suggestions self.assertIn(suggestion, actual) ~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^ Asse`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_traceback.py", line 4430, in test_name_error_suggestions
    self.assertIn(suggestion, actual)
    ~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^
AssertionError: "'blucha'?" not found in "NameError: name 'bluch`
example test: `test_traceback.PurePythonSuggestionFormattingTests.test_name_error_suggestions`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_named_sequences_full self.assertEqual(unicodedata.lookup(seqname), codepoints) ~~~~~~~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_ucn.py", line 222, in test_named_sequences_full
    self.assertEqual(unicodedata.lookup(seqname), codepoints)
                     ~~~~~~~~~~~~~~~~~~^^^^^^^^^
KeyError: "undefined character name 'K`
example test: `test_ucn.UnicodeNamesTest.test_named_sequences_full`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_named_sequences_sample self.assertEqual(unicodedata.lookup(seqname), codepoints) ~~~~~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_ucn.py", line 194, in test_named_sequences_sample
    self.assertEqual(unicodedata.lookup(seqname), codepoints)
                     ~~~~~~~~~~~~~~~~~~^^^^^^^^^
KeyError: "undefined character name `
example test: `test_ucn.UnicodeNamesTest.test_named_sequences_sample`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_nameescape self.assertEqual(sin.encode(<str>, <str>), sout) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_codeccallbacks.py", line 172, in test_nameescape
    self.assertEqual(sin.encode("ascii", "namereplace"), sout)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: b'a???`
example test: `test_codeccallbacks.CodecCallbackTest.test_nameescape`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_namespace self.run_worker(self._test_namespace, o) ~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^ Fil`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/_test_multiprocessing.py", line 6612, in test_namespace
    self.run_worker(self._test_namespace, o)
    ~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/Li`
example test: `test_multiprocessing_fork.test_misc.TestSyncManagerTypes.test_namespace`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_ndarray_exceptions self.assertRaises(TypeError, c, [<n>], shape=[<n>], format={}) ~~~~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_buffer.py", line 1151, in test_ndarray_exceptions
    self.assertRaises(TypeError, c, [1], shape=[1], format={})
    ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/opt/elide/li`
example test: `test_buffer.TestBufferProtocol.test_ndarray_exceptions`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_ndarray_format_scalar self.verify(nd, obj=None, ~~~~~~~~~~~^^^^^^^^^^^^^^ itemsize=itemsize, fm`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_buffer.py", line 1317, in test_ndarray_format_scalar
    self.verify(nd, obj=None,
    ~~~~~~~~~~~^^^^^^^^^^^^^^
                itemsize=itemsize, fmt=fmt, readonly=True,
                ^^^^^^^^^`
example test: `test_buffer.TestBufferProtocol.test_ndarray_format_scalar`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_ndarray_format_shape self.verify(nd, obj=None, ~~~~~~~~~~~^^^^^^^^^^^^^^ itemsize=itemsize, fmt`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_buffer.py", line 1329, in test_ndarray_format_shape
    self.verify(nd, obj=None,
    ~~~~~~~~~~~^^^^^^^^^^^^^^
                itemsize=itemsize, fmt=fmt, readonly=True,
                ^^^^^^^^^^`
example test: `test_buffer.TestBufferProtocol.test_ndarray_format_shape`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_ndarray_format_strides self.verify(nd, obj=None, ~~~~~~~~~~~^^^^^^^^^^^^^^ itemsize=itemsize, f`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_buffer.py", line 1350, in test_ndarray_format_strides
    self.verify(nd, obj=None,
    ~~~~~~~~~~~^^^^^^^^^^^^^^
                itemsize=itemsize, fmt=fmt, readonly=True,
                ^^^^^^^^`
example test: `test_buffer.TestBufferProtocol.test_ndarray_format_strides`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_ndarray_get_pointer self.assertEqual(nd[i], get_pointer(nd, [i])) ^^^^^^^^^^^ NameError: name <`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_buffer.py", line 2074, in test_ndarray_get_pointer
    self.assertEqual(nd[i], get_pointer(nd, [i]))
                            ^^^^^^^^^^^
NameError: name 'get_pointer' is not defined`
example test: `test_buffer.TestBufferProtocol.test_ndarray_get_pointer`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_ndarray_getbuf self.verify_getbuf(ex1, ex1, req|bits) ~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^ Fi`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_buffer.py", line 1100, in test_ndarray_getbuf
    self.verify_getbuf(ex1, ex1, req|bits)
    ~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/te`
example test: `test_buffer.TestBufferProtocol.test_ndarray_getbuf`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_ndarray_multidim self.verify(nd, obj=None, ~~~~~~~~~~~^^^^^^^^^^^^^^ itemsize=itemsize, fmt=fmt`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_buffer.py", line 1379, in test_ndarray_multidim
    self.verify(nd, obj=None,
    ~~~~~~~~~~~^^^^^^^^^^^^^^
                itemsize=itemsize, fmt=fmt, readonly=True,
                ^^^^^^^^^^^^^^`
example test: `test_buffer.TestBufferProtocol.test_ndarray_multidim`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_ndarray_random mvlist = mv.tolist() IndexError: invalid buffer access`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_buffer.py", line 1903, in test_ndarray_random
    mvlist = mv.tolist()
IndexError: invalid buffer access`
example test: `test_buffer.TestBufferProtocol.test_ndarray_random`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_ndarray_random_slice_assign self.assertEqual(ml.tolist(), xllist) ~~~~~~~~~^^ IndexError: inval`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_buffer.py", line 1979, in test_ndarray_random_slice_assign
    self.assertEqual(ml.tolist(), xllist)
                     ~~~~~~~~~^^
IndexError: invalid buffer access`
example test: `test_buffer.TestBufferProtocol.test_ndarray_random_slice_assign`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_ndarray_slice_assign_single self.verify(mv, obj=ex, ~~~~~~~~~~~^^^^^^^^^^^^ itemsize=nd.itemsiz`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_buffer.py", line 1849, in test_ndarray_slice_assign_single
    self.verify(mv, obj=ex,
    ~~~~~~~~~~~^^^^^^^^^^^^
      itemsize=nd.itemsize, fmt=fmt, readonly=False,
      ^^^^^^^^^^^^^^^^^^^^^^^`
example test: `test_buffer.TestBufferProtocol.test_ndarray_slice_assign_single`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_ndarray_slice_invalid self.assertRaises(NotImplementedError, mv.__getitem__, ~~~~~~~~~~~~~~~~~^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_buffer.py", line 1657, in test_ndarray_slice_invalid
    self.assertRaises(NotImplementedError, mv.__getitem__,
    ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                      (sli`
example test: `test_buffer.TestBufferProtocol.test_ndarray_slice_invalid`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_negative return super().test_negative() ~~~~~~~~~~~~~~~~~~~~~^^ File <str>, line <n>, in test_n`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_time.py", line 706, in test_negative
    return super().test_negative()
           ~~~~~~~~~~~~~~~~~~~~~^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_time.py", line 735, in`
example test: `test_time.TestStrftime4dyear.test_negative`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_negative self.assertEqual(self.yearstr(-<n>), str(-<n>)) ~~~~~~~~~~~~^^^^^^^^^^^^^ File <str>, `

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_time.py", line 735, in test_negative
    self.assertEqual(self.yearstr(-1234567890), str(-1234567890))
                     ~~~~~~~~~~~~^^^^^^^^^^^^^
  File "/work/.harness/work/cpython-core/cpytho`
example test: `test_time.TestAsctime4dyear.test_negative`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_negative_zero self.assertEqual(f<str>, <str>) # multi-byte fill char ^^^^^^^^^^^^^^ ValueError:`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_format.py", line 606, in test_negative_zero
    self.assertEqual(f"{-0.:🖤>z6.1f}", "🖤🖤🖤0.0")  # multi-byte fill char
                       ^^^^^^^^^^^^^^
ValueError: Invalid conversion specifi`
example test: `test_format.FormatTest.test_negative_zero`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_nested_startmethod process.start() ~~~~~~~~~~~~~^^ File <str>, line <n>, in start self._popen =`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/_test_multiprocessing.py", line 5867, in test_nested_startmethod
    process.start()
    ~~~~~~~~~~~~~^^
  File "/opt/elide/lib/resources/python/python-home/lib/python3.13/multiprocessing/process.py", l`
example test: `test_multiprocessing_fork.test_misc.TestStartMethod.test_nested_startmethod`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_new_builtins_issue_43102 self.assertEqual(new_func.__globals__[<str>], {}) ~~~~~~~~~~~~~~~~^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_collections.py", line 701, in test_new_builtins_issue_43102
    self.assertEqual(new_func.__globals__['__builtins__'], {})
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionEr`
example test: `test_collections.TestNamedTuple.test_new_builtins_issue_43102`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_next_command_in_generator_for_loop with TracerRun(self) as tracer: ^^^^^^^^^^^^^^^^^^^^^^^^^ Fi`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_bdb.py", line 1154, in test_next_command_in_generator_for_loop
    with TracerRun(self) as tracer:
         ^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/`
example test: `test_bdb.IssuesTestCase.test_next_command_in_generator_for_loop`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_next_command_in_generator_with_subiterator with TracerRun(self) as tracer: ^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_bdb.py", line 1185, in test_next_command_in_generator_with_subiterator
    with TracerRun(self) as tracer:
         ^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/L`
example test: `test_bdb.IssuesTestCase.test_next_command_in_generator_with_subiterator`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_no_caret_with_no_debug_ranges_flag_python_traceback _, _, stderr = assert_python_ok( ~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_traceback.py", line 160, in test_no_caret_with_no_debug_ranges_flag_python_traceback
    _, _, stderr = assert_python_ok(
                   ~~~~~~~~~~~~~~~~^
        '-X', 'no_debug_ranges', TESTF`
example test: `test_traceback.TracebackCases.test_no_caret_with_no_debug_ranges_flag_python_traceback`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_no_jump_to_non_integers self.run_test(no_jump_to_non_integers, <n>, <str>, [True]) ~~~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_sys_settrace.py", line 2799, in test_no_jump_to_non_integers
    self.run_test(no_jump_to_non_integers, 2, "Spam", [True])
    ~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/wor`
example test: `test_sys_settrace.JumpTestCase.test_no_jump_to_non_integers`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_no_jump_without_trace_function no_jump_without_trace_function() ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_sys_settrace.py", line 2804, in test_no_jump_without_trace_function
    no_jump_without_trace_function()
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^^
  File "/work/.harness/work/cpython-core/cpython-root/L`
example test: `test_sys_settrace.JumpTestCase.test_no_jump_without_trace_function`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_no_leaking resource.setrlimit(resource.RLIMIT_NOFILE, (<n>, hard)) ~~~~~~~~~~~~~~~~~~^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_subprocess.py", line 1387, in test_no_leaking
    resource.setrlimit(resource.RLIMIT_NOFILE, (1024, hard))
    ~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: module 'resou`
example test: `test_subprocess.ProcessTestCase.test_no_leaking`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_no_mangling_in_nested_scopes ns = run_code(<str><str><str>) File <str>, line <n>, in run_code e`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_type_params.py", line 878, in test_no_mangling_in_nested_scopes
    ns = run_code("""
        from test.test_type_params import make_base
    ...<13 lines>...
            pass
    """)
  File "/wor`
example test: `test_type_params.TypeParamsManglingTest.test_no_mangling_in_nested_scopes`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_no_std_streams self._test_no_stdio([<str>, <str>, <str>]) ~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_cmd_line.py", line 560, in test_no_std_streams
    self._test_no_stdio(['stdin', 'stdout', 'stderr'])
    ~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/.harness/work/cpython-core`
example test: `test_cmd_line.CmdLineTest.test_no_std_streams`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_no_stderr self._test_no_stdio([<str>]) ~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^ File <str>, line <n>, in`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_cmd_line.py", line 557, in test_no_stderr
    self._test_no_stdio(['stderr'])
    ~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_cmd_line.py", l`
example test: `test_cmd_line.CmdLineTest.test_no_stderr`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_no_stdin self._test_no_stdio([<str>]) ~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^ File <str>, line <n>, in _`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_cmd_line.py", line 551, in test_no_stdin
    self._test_no_stdio(['stdin'])
    ~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_cmd_line.py", line`
example test: `test_cmd_line.CmdLineTest.test_no_stdin`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_no_stdout self._test_no_stdio([<str>]) ~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^ File <str>, line <n>, in`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_cmd_line.py", line 554, in test_no_stdout
    self._test_no_stdio(['stdout'])
    ~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_cmd_line.py", l`
example test: `test_cmd_line.CmdLineTest.test_no_stdout`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_no_test_ran_some_test_exist_some_not output = self.run_tests(testname, testname2, <str>, <str>,`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_regrtest.py", line 1831, in test_no_test_ran_some_test_exist_some_not
    output = self.run_tests(testname, testname2, "-m", "nosuchtest",
                            "-m", "test_other_bug", exitco`
example test: `test_regrtest.ArgsTestCase.test_no_test_ran_some_test_exist_some_not`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_no_tests_ran output = self.run_tests(testname, <str>, <str>, exitcode=EXITCODE_NO_TESTS_RAN) Fi`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_regrtest.py", line 1776, in test_no_tests_ran
    output = self.run_tests(testname, "-m", "nosuchtest",
                            exitcode=EXITCODE_NO_TESTS_RAN)
  File "/work/.harness/work/cpyth`
example test: `test_regrtest.ArgsTestCase.test_no_tests_ran`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_no_tests_ran_multiple_tests_nonexistent output = self.run_tests(testname, testname2, <str>, <st`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_regrtest.py", line 1807, in test_no_tests_ran_multiple_tests_nonexistent
    output = self.run_tests(testname, testname2, "-m", "nosuchtest",
                            exitcode=EXITCODE_NO_TESTS_`
example test: `test_regrtest.ArgsTestCase.test_no_tests_ran_multiple_tests_nonexistent`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_no_tests_ran_skip output = self.run_tests(testname) File <str>, line <n>, in run_tests return s`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_regrtest.py", line 1792, in test_no_tests_ran_skip
    output = self.run_tests(testname)
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_regrtest.py", line 1000, in run_tests
  `
example test: `test_regrtest.ArgsTestCase.test_no_tests_ran_skip`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_noforkbomb rc, out, err = test.support.script_helper.assert_python_ok(name, sm) ~~~~~~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/_test_multiprocessing.py", line 5544, in test_noforkbomb
    rc, out, err = test.support.script_helper.assert_python_ok(name, sm)
                   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^`
example test: `test_multiprocessing_fork.test_misc.TestNoForkBomb.test_noforkbomb`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_non_ascii rc, stdout, stderr = assert_python_ok(script_name) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^ File`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_cmd_line_script.py", line 582, in test_non_ascii
    rc, stdout, stderr = assert_python_ok(script_name)
                         ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^
  File "/work/.harness/work/cpython-co`
example test: `test_cmd_line_script.CmdLineTest.test_non_ascii`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_non_interactive_output_buffering self.assertEqual(proc.stdout, ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^ <s`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_cmd_line.py", line 368, in test_non_interactive_output_buffering
    self.assertEqual(proc.stdout,
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^
                     'False False False\n'
                     `
example test: `test_cmd_line.CmdLineTest.test_non_interactive_output_buffering`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_non_utf8_type_comment_with_ignore_cookie with self.assertRaises(UnicodeDecodeError): ~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_type_comments.py", line 398, in test_non_utf8_type_comment_with_ignore_cookie
    with self.assertRaises(UnicodeDecodeError):
         ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^
AssertionError: UnicodeD`
example test: `test_type_comments.TypeCommentTests.test_non_utf8_type_comment_with_ignore_cookie`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_nonascii output = self.run_tests(<str>, testname, env=env, isolated=False) File <str>, line <n>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_regrtest.py", line 2412, in test_nonascii
    output = self.run_tests('-v', testname, env=env, isolated=False)
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_regrtest.py", line`
example test: `test_regrtest.ArgsTestCase.test_nonascii`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_nonbmp self.assertEqual(b<str>.decode(self.encoding), <str>) ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^ U`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_codecs.py", line 1023, in test_nonbmp
    self.assertEqual(b'+2AHcoA'.decode(self.encoding), '\U000104A0')
                     ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^
UnicodeDecodeError: 'utf-7' codec ca`
example test: `test_codecs.UTF7Test.test_nonbmp`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_nondefault_after_default check_syntax_error(self, <str>, <str>) ~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_type_params.py", line 1363, in test_nondefault_after_default
    check_syntax_error(self, "def func[T=int, U](): pass", "non-default type parameter 'U' follows default type parameter")
    ~~~~~~~~`
example test: `test_type_params.DefaultsTest.test_nondefault_after_default`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_nonexisting_script self.assertIn(<str>, err) ~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^ Assertion`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_cmd_line_script.py", line 794, in test_nonexisting_script
    self.assertIn(": can't open file ", err)
    ~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: ": can't open file " not found in`
example test: `test_cmd_line_script.CmdLineTest.test_nonexisting_script`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_nonmodule_cases script_helper.run_test_script(script) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^ Fil`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_importlib/extension/test_loader.py", line 388, in test_nonmodule_cases
    script_helper.run_test_script(script)
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^
  File "/work/.harness/work/cpython-core/c`
example test: `test_importlib.extension.test_loader.NonModuleExtensionTests.test_nonmodule_cases`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_normalization check(<str>, <str> if self.old else ~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ [<s`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_unicodedata.py", line 488, in test_normalization
    check('\u327c', '\u327c' if self.old else
    ~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
          ['\u327c', '\u327c', '\ucc38\uace0', '\u110e\u`
example test: `test_unicodedata.Unicode_3_2_0_FunctionsTest.test_normalization`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_normalization_3_2_0 self.run_normalization_tests(testdata, unicodedata.ucd_3_2_0) ~~~~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_unicodedata.py", line 822, in test_normalization_3_2_0
    self.run_normalization_tests(testdata, unicodedata.ucd_3_2_0)
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/w`
example test: `test_unicodedata.NormalizationTest.test_normalization_3_2_0`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_not_ascii result = run_pydoc(<str>, PYTHONIOENCODING=<str>) File <str>, line <n>, in run_pydoc `

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_pydoc/test_pydoc.py", line 527, in test_not_ascii
    result = run_pydoc('test.test_pydoc.test_pydoc.nonascii', PYTHONIOENCODING='ascii')
  File "/work/.harness/work/cpython-core/cpython-root/Lib/t`
example test: `test_pydoc.test_pydoc.PydocDocTest.test_not_ascii`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_not_in_gc self.fail(stderr) ~~~~~~~~~^^^^^^^^ AssertionError: AttributeError: module <str> has `

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_audit.py", line 261, in test_not_in_gc
    self.fail(stderr)
    ~~~~~~~~~^^^^^^^^
AssertionError: AttributeError: module 'gc' has no attribute 'get_objects'
    at _run_module_code (native)
    at`
example test: `test_audit.AuditTest.test_not_in_gc`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_nul_in_first_coding_line self.check_script_error(src, br<str>) ~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_source_encoding.py", line 334, in test_nul_in_first_coding_line
    self.check_script_error(src, br"source code (string )?cannot contain null bytes")
    ~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^`
example test: `test_source_encoding.FileSourceEncodingTest.test_nul_in_first_coding_line`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_nul_in_second_coding_line self.check_script_error(src, br<str>) ~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_source_encoding.py", line 341, in test_nul_in_second_coding_line
    self.check_script_error(src, br"source code (string )?cannot contain null bytes")
    ~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^`
example test: `test_source_encoding.FileSourceEncodingTest.test_nul_in_second_coding_line`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_one_environment_variable self.assertEqual(p.returncode, <n>) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^ `

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_subprocess.py", line 865, in test_one_environment_variable
    self.assertEqual(p.returncode, 0)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^
AssertionError: 1 != 0

Stdout:
STDOUT: 
STDERR: TypeError: ca`
example test: `test_subprocess.ProcessTestCase.test_one_environment_variable`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_online_docs_link basedir = os.path.dirname(encodings.__file__) ^^^^^^^^^^^^^^^^^^ AttributeErro`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_pydoc/test_pydoc.py", line 484, in test_online_docs_link
    basedir = os.path.dirname(encodings.__file__)
                              ^^^^^^^^^^^^^^^^^^
AttributeError: module 'encodings' has no`
example test: `test_pydoc.test_pydoc.PydocDocTest.test_online_docs_link`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_open self.do_test(<str>, os_helper.TESTFN) ~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ File <st`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_audit.py", line 75, in test_open
    self.do_test("test_open", os_helper.TESTFN)
    ~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_`
example test: `test_audit.AuditTest.test_open`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_openssl_version self.assertGreaterEqual(n, <n>) ~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^ Assertio`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_ssl.py", line 616, in test_openssl_version
    self.assertGreaterEqual(n, 0x10101000)
    ~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^
AssertionError: 0 not greater than or equal to 269488128`
example test: `test_ssl.BasicSocketTests.test_openssl_version`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_operations_on_half_initialized_Struct S = struct.Struct.__new__(struct.Struct) TypeError: Struc`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_struct.py", line 837, in test_operations_on_half_initialized_Struct
    S = struct.Struct.__new__(struct.Struct)
TypeError: Struct() missing 1 required positional argument: 'b'`
example test: `test_struct.StructTest.test_operations_on_half_initialized_Struct`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_operator_compare_digest self._test_compare_digest(operator_compare_digest) ~~~~~~~~~~~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_hmac.py", line 571, in test_operator_compare_digest
    self._test_compare_digest(operator_compare_digest)
    ~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/.harness/work/cpython`
example test: `test_hmac.CompareDigestTestCase.test_operator_compare_digest`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_optim_level self.assertEqual(out, <str>) ~~~~~~~~~~~~~~~~^^^^^^^^^^ AssertionError: <str> != <s`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_utf8_mode.py", line 248, in test_optim_level
    self.assertEqual(out, '2')
    ~~~~~~~~~~~~~~~~^^^^^^^^^^
AssertionError: '1' != '2'
- 1
+ 2`
example test: `test_utf8_mode.UTF8ModeTests.test_optim_level`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_optimize self.verify_valid_flag(<str>) ~~~~~~~~~~~~~~~~~~~~~~^^^^^^ File <str>, line <n>, in ve`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_cmd_line.py", line 88, in test_optimize
    self.verify_valid_flag('-O')
    ~~~~~~~~~~~~~~~~~~~~~~^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_cmd_line.py", line 37, `
example test: `test_cmd_line.CmdLineTest.test_optimize`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_optimizeflag self.assertEqual(opt, sys.flags.optimize) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_ctypes/test_values.py", line 47, in test_optimizeflag
    self.assertEqual(opt, sys.flags.optimize)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: 0 != 1`
example test: `test_ctypes.test_values.PythonValuesTestCase.test_optimizeflag`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_orig_argv self.assertEqual(proc.stdout.rstrip().splitlines(), expected, ~~~~~~~~~~~~~~~~^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_sys.py", line 1302, in test_orig_argv
    self.assertEqual(proc.stdout.rstrip().splitlines(), expected,
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                     proc)
`
example test: `test_sys.SysModuleTest.test_orig_argv`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_out_of_range_signal_number_raises_error self.assertRaises(ValueError, signal.getsignal, <n>) ~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_signal.py", line 85, in test_out_of_range_signal_number_raises_error
    self.assertRaises(ValueError, signal.getsignal, 4242)
    ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionErr`
example test: `test_signal.PosixTests.test_out_of_range_signal_number_raises_error`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_output_htmlcalendar_encoding_default self.check_htmlcalendar_encoding(None, sys.getdefaultencod`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_calendar.py", line 420, in test_output_htmlcalendar_encoding_default
    self.check_htmlcalendar_encoding(None, sys.getdefaultencoding())
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^`
example test: `test_calendar.OutputTestCase.test_output_htmlcalendar_encoding_default`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_package self._check_script([<str>, <str>], script_name, ~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_cmd_line_script.py", line 349, in test_package
    self._check_script(["-m", "test_pkg"], script_name,
    ~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                       script_name, sc`
example test: `test_cmd_line_script.CmdLineTest.test_package`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_package self._check_script(launch_name) ~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^ File <str>, line <n>, i`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_multiprocessing_main_handling.py", line 267, in test_package
    self._check_script(launch_name)
    ~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/t`
example test: `test_multiprocessing_main_handling.SpawnCmdLineTest.test_package`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_package self._do_test(package_test) ~~~~~~~~~~~~~^^^^^^^^^^^^^^ File <str>, line <n>, in _do_te`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_modulefinder.py", line 354, in test_package
    self._do_test(package_test)
    ~~~~~~~~~~~~~^^^^^^^^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_modulefinder.py", lin`
example test: `test_modulefinder.ModuleFinderTest.test_package`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_package_compiled self._check_script([<str>, <str>], pyc_file, ~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_cmd_line_script.py", line 362, in test_package_compiled
    self._check_script(["-m", "test_pkg"], pyc_file,
    ~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                       pyc_file, sc`
example test: `test_cmd_line_script.CmdLineTest.test_package_compiled`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_package_compiled self._check_script(launch_name) ~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^ File <str>, li`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_multiprocessing_main_handling.py", line 280, in test_package_compiled
    self._check_script(launch_name)
    ~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/L`
example test: `test_multiprocessing_main_handling.SpawnCmdLineTest.test_package_compiled`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_parse_all_sans self.assertEqual(p[<str>], ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^ ( ^ ...<<n> lin`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_ssl.py", line 576, in test_parse_all_sans
    self.assertEqual(p['subjectAltName'],
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^
        (
        ^
    ...<14 lines>...
        )
        ^
    )
    `
example test: `test_ssl.BasicSocketTests.test_parse_all_sans`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_pass_by_value_finalizer self.assertEqual(finalizer_calls, [<str>]) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_ctypes/test_structures.py", line 486, in test_pass_by_value_finalizer
    self.assertEqual(finalizer_calls, ["called"])
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: Lists diffe`
example test: `test_ctypes.test_structures.StructureTestCase.test_pass_by_value_finalizer`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_pass_fds_redirected self.assertEqual(fds, {<n>, <n>, <n>} | frozenset(pass_fds), f<str>) ~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_subprocess.py", line 3270, in test_pass_fds_redirected
    self.assertEqual(fds, {0, 1, 2} | frozenset(pass_fds), f"output={output!a}")
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`
example test: `test_subprocess.POSIXProcessTestCase.test_pass_fds_redirected`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_paths_depend_on_site_initialization self.assertNotEqual(site_paths, no_site_paths) ~~~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_sysconfig.py", line 668, in test_paths_depend_on_site_initialization
    self.assertNotEqual(site_paths, no_site_paths)
    ~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: {'stdlib':`
example test: `test_sysconfig.TestSysConfig.test_paths_depend_on_site_initialization`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_pdb_issue4201 data = kill_python(p) File <str>, line <n>, in kill_python p.stdin.close() ~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_zipimport_support.py", line 235, in test_pdb_issue4201
    data = kill_python(p)
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/support/script_helper.py", line 220, in kill_python
 `
example test: `test_zipimport_support.ZipSupportTests.test_pdb_issue4201`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_pep_409_verbiage self.assertTrue(text[<n>].startswith(<str>)) ~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_cmd_line_script.py", line 556, in test_pep_409_verbiage
    self.assertTrue(text[0].startswith('Traceback'))
    ~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: False is not true`
example test: `test_cmd_line_script.CmdLineTest.test_pep_409_verbiage`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_pgo_exclude output = self.run_tests(<str>, <str>) File <str>, line <n>, in run_tests return sel`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_regrtest.py", line 2421, in test_pgo_exclude
    output = self.run_tests('--pgo', '--list-tests')
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_regrtest.py", line 1000, in run`
example test: `test_regrtest.ArgsTestCase.test_pgo_exclude`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_pickle encodings.ascii.StreamReader, encodings.ascii.StreamWriter) ^^^^^^^^^^^^^^^ AttributeErr`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_codecs.py", line 3628, in test_pickle
    encodings.ascii.StreamReader, encodings.ascii.StreamWriter)
    ^^^^^^^^^^^^^^^
AttributeError: module 'encodings' has no attribute 'ascii'`
example test: `test_codecs.StreamRecoderTest.test_pickle`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_pickler_instance_attribute old_persistent_id = pickler.persistent_id ^^^^^^^^^^^^^^^^^^^^^ Attr`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_pickle.py", line 262, in test_pickler_instance_attribute
    old_persistent_id = pickler.persistent_id
                        ^^^^^^^^^^^^^^^^^^^^^
AttributeError: persistent_id`
example test: `test_pickle.CIdPersPicklerTests.test_pickler_instance_attribute`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_pickler_super pickler.dump(<str>) ~~~~~~~~~~~~^^^^^^^ File <str>, line <n>, in persistent_id se`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_pickle.py", line 235, in test_pickler_super
    pickler.dump('abc')
    ~~~~~~~~~~~~^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_pickle.py", line 228, in persistent_i`
example test: `test_pickle.CIdPersPicklerTests.test_pickler_super`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_pickler_super_instance_attribute pickler.dump(<str>) ~~~~~~~~~~~~^^^^^^^ File <str>, line <n>, `

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_pickle.py", line 303, in test_pickler_super_instance_attribute
    pickler.dump('abc')
    ~~~~~~~~~~~~^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_pickle.py", line 2`
example test: `test_pickle.CIdPersPicklerTests.test_pickler_super_instance_attribute`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_pipe_cloexec self.assertFalse(result_fds & unwanted_fds, ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_subprocess.py", line 3006, in test_pipe_cloexec
    self.assertFalse(result_fds & unwanted_fds,
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^
                     "Expected no fds from %r to be o`
example test: `test_subprocess.POSIXProcessTestCase.test_pipe_cloexec`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_pointer_type_str_name del _pointer_type_cache[id(P)] ~~~~~~~~~~~~~~~~~~~^^^^^^^ KeyError: <n>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_ctypes/test_pointers.py", line 222, in test_pointer_type_str_name
    del _pointer_type_cache[id(P)]
        ~~~~~~~~~~~~~~~~~~~^^^^^^^
KeyError: 61643`
example test: `test_ctypes.test_pointers.PointersTestCase.test_pointer_type_str_name`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_pool self.run_worker(self._test_pool, o) ~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^ File <str>, line <`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/_test_multiprocessing.py", line 6515, in test_pool
    self.run_worker(self._test_pool, o)
    ~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/_test_mu`
example test: `test_multiprocessing_fork.test_misc.TestSyncManagerTypes.test_pool`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_posix_locale_surrogateescape self.check_locale_surrogateescape(<str>) ~~~~~~~~~~~~~~~~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_sys.py", line 1083, in test_posix_locale_surrogateescape
    self.check_locale_surrogateescape('POSIX')
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^
  File "/work/.harness/work/cpython-core/cpyth`
example test: `test_sys.SysModuleTest.test_posix_locale_surrogateescape`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_possible_set_operations with self.assertWarnsRegex(FutureWarning, <str>) as w: ^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_re.py", line 1280, in test_possible_set_operations
    with self.assertWarnsRegex(FutureWarning, 'Possible set difference') as w:
         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`
example test: `test_re.ReTests.test_possible_set_operations`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_post self.assertEqual(res.read(), b<str> + self.linesep) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_httpservers.py", line 1013, in test_post
    self.assertEqual(res.read(), b'1, python, 123456' + self.linesep)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: `
example test: `test_httpservers.CGIHTTPServerTestCase.test_post`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_preexec p = subprocess.Popen([sys.executable, <str>, <str> <str>], stdout=subprocess.PIPE, pree`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_subprocess.py", line 2419, in test_preexec
    p = subprocess.Popen([sys.executable, "-c",
                          'import sys,os;'
                          'sys.stdout.write(os.getenv("FRUIT"))`
example test: `test_subprocess.POSIXProcessTestCase.test_preexec`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_preexec_at_exit self.assertEqual(out.strip(), b<str>) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^ Asse`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_subprocess.py", line 3611, in test_preexec_at_exit
    self.assertEqual(out.strip(), b"OK")
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^
AssertionError: b'' != b'OK'`
example test: `test_subprocess.POSIXProcessTestCase.test_preexec_at_exit`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_preexec_errpipe_does_not_double_close_pipes self._TestExecuteChildPopen( ~~~~~~~~~~~~~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_subprocess.py", line 2477, in test_preexec_errpipe_does_not_double_close_pipes
    self._TestExecuteChildPopen(
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~^
                self, ZERO_RETURN_CMD,
             `
example test: `test_subprocess.POSIXProcessTestCase.test_preexec_errpipe_does_not_double_close_pipes`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_preexec_exception p = subprocess.Popen([sys.executable, <str>, <str>], preexec_fn=raise_it) Fil`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_subprocess.py", line 2431, in test_preexec_exception
    p = subprocess.Popen([sys.executable, "-c", ""],
                         preexec_fn=raise_it)
  File "/opt/elide/lib/resources/python/pytho`
example test: `test_subprocess.POSIXProcessTestCase.test_preexec_exception`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_preexec_gc_module_failure subprocess.call([sys.executable, <str>, <str>], ~~~~~~~~~~~~~~~^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_subprocess.py", line 2489, in test_preexec_gc_module_failure
    subprocess.call([sys.executable, '-c', ''],
    ~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                    preexec_fn=lambda: N`
example test: `test_subprocess.POSIXProcessTestCase.test_preexec_gc_module_failure`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_prefer_explicit_doc self.assertEqual(PropertySub(doc=<str>).__doc__, <str>) ~~~~~~~~~~~~~~~~^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_property.py", line 471, in test_prefer_explicit_doc
    self.assertEqual(PropertySub(doc="explicit doc").__doc__, "explicit doc")
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`
example test: `test_property.PropertySubclassTests.test_prefer_explicit_doc`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_print_traceback_at_exit self.assertEqual(stderr.splitlines(), expected) ~~~~~~~~~~~~~~~~^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_traceback.py", line 505, in test_print_traceback_at_exit
    self.assertEqual(stderr.splitlines(), expected)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: Lists differ: [] != `
example test: `test_traceback.TracebackCases.test_print_traceback_at_exit`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_printable_repr self.assertEqual(repr(<str>), <str>) # nonprintable ~~~~~~~~~~~~~~~~^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_str.py", line 2450, in test_printable_repr
    self.assertEqual(repr('\U00014000'), "'\\U00014000'")     # nonprintable
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: "'�`
example test: `test_str.StrTest.test_printable_repr`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_profile_after_trace_opcodes sys._getframe().f_trace_opcodes = True ^^^^^^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_sys_setprofile.py", line 476, in test_profile_after_trace_opcodes
    sys._getframe().f_trace_opcodes = True
    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: 'frame' object has no attribute 'f_t`
example test: `test_sys_setprofile.TestEdgeCases.test_profile_after_trace_opcodes`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_property_no_doc_on_getter self.assertEqual(PropertySub(NoDoc()).__doc__, None) ~~~~~~~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_property.py", line 498, in test_property_no_doc_on_getter
    self.assertEqual(PropertySub(NoDoc()).__doc__, None)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: 'This is `
example test: `test_property.PropertySubclassTests.test_property_no_doc_on_getter`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_property_with_slots_and_doc_slot_docstring_present self.assertEqual(<str>, p.__doc__) # new in `

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_property.py", line 353, in test_property_with_slots_and_doc_slot_docstring_present
    self.assertEqual("what's up", p.__doc__)  # new in 3.12: This gets set.
                                  ^^^^`
example test: `test_property.PropertySubclassTests.test_property_with_slots_and_doc_slot_docstring_present`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_property_with_slots_no_docstring p = slotted_prop(undocumented_getter) # New in <n>: no Attribu`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_property.py", line 323, in test_property_with_slots_no_docstring
    p = slotted_prop(undocumented_getter)  # New in 3.12: no AttributeError
AttributeError: 'slotted_prop' object has no attribute '`
example test: `test_property.PropertySubclassTests.test_property_with_slots_no_docstring`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_putenv_unsetenv self.assertEqual(proc.stdout.rstrip(), repr(value)) ~~~~~~~~~~~~~~~~^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_os.py", line 1143, in test_putenv_unsetenv
    self.assertEqual(proc.stdout.rstrip(), repr(value))
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: 'None' != "'testvalue'"
- `
example test: `test_os.EnvironTests.test_putenv_unsetenv`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_pymain_run_stdin self.assertSigInt([], input=<str>, cwd=self.ham.parent) ~~~~~~~~~~~~~~~~~^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_runpy.py", line 871, in test_pymain_run_stdin
    self.assertSigInt([], input="import ham", cwd=self.ham.parent)
    ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/.ha`
example test: `test_runpy.TestExit.test_pymain_run_stdin`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_pyobject self.assertEqual((after, o), (before, o)) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^ As`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_ctypes/test_callbacks.py", line 106, in test_pyobject
    self.assertEqual((after, o), (before, o))
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: Tuples differ: (14, ()) != (12, ())`
example test: `test_ctypes.test_callbacks.Callbacks.test_pyobject`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_python_command output = self.run_tests(<str>, python_cmd, <str>, *tests) File <str>, line <n>, `

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_regrtest.py", line 2200, in test_python_command
    output = self.run_tests("--python", python_cmd, "-j0", *tests)
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_regrtest.py", `
example test: `test_regrtest.ArgsTestCase.test_python_command`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_pythondevmode_env self.assertEqual(proc.stdout.rstrip(), <str>) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_cmd_line.py", line 899, in test_pythondevmode_env
    self.assertEqual(proc.stdout.rstrip(), 'True')
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: 'False' != 'True'
- False
+ T`
example test: `test_cmd_line.CmdLineTest.test_pythondevmode_env`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_pythonstartup_error_reporting self.assertIn(<str>, output) ~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_repl.py", line 266, in test_pythonstartup_error_reporting
    self.assertIn("from pythonstartup", output)
    ~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: 'from pythonstartup' not fo`
example test: `test_repl.TestInteractiveInterpreter.test_pythonstartup_error_reporting`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_query_with_continuous_slashes self.assertEqual( ~~~~~~~~~~~~~~~~^ (b<str> + self.linesep, ^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_httpservers.py", line 1080, in test_query_with_continuous_slashes
    self.assertEqual(
    ~~~~~~~~~~~~~~~~^
        (b'k=aa%2F%2Fbb&//q//p//=//a//b//' + self.linesep,
        ^^^^^^^^^^^^^^^^^^^^`
example test: `test_httpservers.CGIHTTPServerTestCase.test_query_with_continuous_slashes`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_query_with_multiple_question_mark self.assertEqual( ~~~~~~~~~~~~~~~~^ (b<str> + self.linesep, <`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_httpservers.py", line 1074, in test_query_with_multiple_question_mark
    self.assertEqual(
    ~~~~~~~~~~~~~~~~^
        (b'a=b?c=d' + self.linesep, 'text/html', HTTPStatus.OK),
        ^^^^^^^^^^`
example test: `test_httpservers.CGIHTTPServerTestCase.test_query_with_multiple_question_mark`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_queue self.run_worker(self._test_queue, o) ~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^ File <str>, lin`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/_test_multiprocessing.py", line 6531, in test_queue
    self.run_worker(self._test_queue, o)
    ~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/_test`
example test: `test_multiprocessing_fork.test_misc.TestSyncManagerTypes.test_queue`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_quiet_mode self.assertEqual(output[:<n>], <str>) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^ AssertionE`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_repl.py", line 455, in test_quiet_mode
    self.assertEqual(output[:3], ">>>")
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^
AssertionError: 'asy' != '>>>'
- asy
+ >>>`
example test: `test_repl.TestAsyncioREPL.test_quiet_mode`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_random output = self.run_tests(<str>, test, exitcode=EXITCODE_NO_TESTS_RAN) File <str>, line <n`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_regrtest.py", line 1093, in test_random
    output = self.run_tests('-r', test, exitcode=EXITCODE_NO_TESTS_RAN)
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_regrtest.py", lin`
example test: `test_regrtest.ArgsTestCase.test_random`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_random_seed self._check_random_seed(run_workers=False) ~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_regrtest.py", line 2178, in test_random_seed
    self._check_random_seed(run_workers=False)
    ~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/`
example test: `test_regrtest.ArgsTestCase.test_random_seed`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_random_seed_workers self._check_random_seed(run_workers=True) ~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_regrtest.py", line 2181, in test_random_seed_workers
    self._check_random_seed(run_workers=True)
    ~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-roo`
example test: `test_regrtest.ArgsTestCase.test_random_seed_workers`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_raw_fstring_format_spec self.assertEqual(rf<str>, <str>) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_fstring.py", line 1836, in test_raw_fstring_format_spec
    self.assertEqual(rf"{UnchangedFormat():\xFF}", '\\xFF')
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: 'ÿ' !`
example test: `test_fstring.TestCase.test_raw_fstring_format_spec`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_RawIOBase_read_bounds_checking with self.assertRaises(ValueError) as cm: ^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_io.py", line 881, in test_RawIOBase_read_bounds_checking
    with self.assertRaises(ValueError) as cm:
         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: ValueError not raised`
example test: `test_io.CIOTest.test_RawIOBase_read_bounds_checking`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_read with LZMAFile(BytesIO(COMPRESSED_RAW_3), ~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^ format=lzma.F`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_lzma.py", line 825, in test_read
    with LZMAFile(BytesIO(COMPRESSED_RAW_3),
         ~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^
                  format=lzma.FORMAT_RAW, filters=FILTERS_RAW_3) as f:
   `
example test: `test_lzma.FileTestCase.test_read`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_read_multistream with LZMAFile(BytesIO(COMPRESSED_RAW_3 * <n>), ~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_lzma.py", line 857, in test_read_multistream
    with LZMAFile(BytesIO(COMPRESSED_RAW_3 * 4),
         ~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                  format=lzma.FORMAT_RAW, filters=FILT`
example test: `test_lzma.FileTestCase.test_read_multistream`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_read_null self.check_fatal_error(<str><str>/work/.harness/work/cpython-core/cpython-root/Lib/te`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_faulthandler.py", line 144, in test_read_null
    self.check_fatal_error("""
    ~~~~~~~~~~~~~~~~~~~~~~^^^^
        import faulthandler
        ^^^^^^^^^^^^^^^^^^^
    ...<6 lines>...
            '`
example test: `test_faulthandler.FaultHandlerTests.test_read_null`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_read1_after_write self.assertEqual(f.read1(<n>), b<str>) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^ Ass`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_io.py", line 2605, in test_read1_after_write
    self.assertEqual(f.read1(1), b'b')
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^
AssertionError: b'a' != b'b'`
example test: `test_io.CBufferedRandomTest.test_read1_after_write`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_reader_reentrant_iterator with self.assertRaises(csv.Error): ~~~~~~~~~~~~~~~~~^^^^^^^^^^^ Asser`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_csv.py", line 578, in test_reader_reentrant_iterator
    with self.assertRaises(csv.Error):
         ~~~~~~~~~~~~~~~~~^^^^^^^^^^^
AssertionError: Error not raised`
example test: `test_csv.Test_Csv.test_reader_reentrant_iterator`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_readline self.assertEqual( ~~~~~~~~~~~~~~~~^ reader.readline(keepends=True), ^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_codecs.py", line 196, in test_readline
    self.assertEqual(
    ~~~~~~~~~~~~~~~~^
        reader.readline(keepends=True),
        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
        size*"a" + lineend,
      `
example test: `test_codecs.RawUnicodeEscapeTest.test_readline`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_readline self.assertEqual(readalllines(s, True, <n>), sexpected) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_codecs.py", line 176, in test_readline
    self.assertEqual(readalllines(s, True, 10), sexpected)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: 'foo\n|bar\r\n|baz\r|spa`
example test: `test_codecs.UTF7Test.test_readline`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_realpath_limit_attack elif <str> in os.pathconf_names: ^^^^^^^^^^^^^^^^^ AttributeError: module`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_tarfile.py", line 3921, in test_realpath_limit_attack
    elif 'PC_PATH_MAX' in os.pathconf_names:
                          ^^^^^^^^^^^^^^^^^
AttributeError: module 'os' has no attribute 'pathconf`
example test: `test_tarfile.TestExtractionFilters.test_realpath_limit_attack`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_recursion self.fail(<str>) ~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ AssertionError: Recursion`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_support.py", line 686, in test_recursion
    self.fail("RecursionError was not raised")
    ~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: RecursionError was not raised`
example test: `test_support.TestSupport.test_recursion`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_recursion_error_during_traceback rc, _, _ = assert_python_ok(TESTFN) ~~~~~~~~~~~~~~~~^^^^^^^^ F`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_traceback.py", line 192, in test_recursion_error_during_traceback
    rc, _, _ = assert_python_ok(TESTFN)
               ~~~~~~~~~~~~~~~~^^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-ro`
example test: `test_traceback.TracebackCases.test_recursion_error_during_traceback`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_recursion_limit data = marshal.dumps(head) ValueError: Maximum marshal stack depth`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_marshal.py", line 303, in test_recursion_limit
    data = marshal.dumps(head)
ValueError: Maximum marshal stack depth`
example test: `test_marshal.BugsTestCase.test_recursion_limit`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_recursive_repr self.assertEqual(repr(ns2), repr2) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^ AssertionE`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_types.py", line 1977, in test_recursive_repr
    self.assertEqual(repr(ns2), repr2)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^
AssertionError: 'namespace(spam=namespace(spam=namespace(...), x=1))' != '`
example test: `test_types.SimpleNamespaceTests.test_recursive_repr`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_recursive_repr self.assertRegex(repr(d), ~~~~^^^ RecursionError: maximum recursion depth exceed`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_defaultdict.py", line 136, in test_recursive_repr
    self.assertRegex(repr(d),
                     ~~~~^^^
RecursionError: maximum recursion depth exceeded while getting the repr of an object`
example test: `test_defaultdict.TestDefaultDict.test_recursive_repr`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_reduce_mutating_builtins_iter self.assertEqual(run_iter(<str>), (orig[<str>], (<str>,))) ~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_iter.py", line 300, in test_reduce_mutating_builtins_iter
    self.assertEqual(run_iter("xyz"), (orig["iter"], ("",)))
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: T`
example test: `test_iter.TestCase.test_reduce_mutating_builtins_iter`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_reentrancy self.assertEqual(sys.getprofile(), bar) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^ Asse`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_sys_setprofile.py", line 462, in test_reentrancy
    self.assertEqual(sys.getprofile(), bar)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: <function TestEdgeCases.test_reentrancy.<loc`
example test: `test_sys_setprofile.TestEdgeCases.test_reentrancy`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_reentrancy self.assertEqual(sys.gettrace(), bar) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^ Assertio`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_sys_settrace.py", line 3078, in test_reentrancy
    self.assertEqual(sys.gettrace(), bar)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^
AssertionError: <function TestEdgeCases.test_reentrancy.<locals>.`
example test: `test_sys_settrace.TestEdgeCases.test_reentrancy`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_refcycle old_garbage = gc.garbage[:] ^^^^^^^^^^ AttributeError: module <str> has no attribute <`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_generators.py", line 72, in test_refcycle
    old_garbage = gc.garbage[:]
                  ^^^^^^^^^^
AttributeError: module 'gc' has no attribute 'garbage'`
example test: `test_generators.FinalizationTest.test_refcycle`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_reference_cycle script_helper.assert_python_ok(<str>, textwrap.dedent(r<str><str><str>)) ^^^^^ `

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_structseq.py", line 353, in test_reference_cycle
    script_helper.assert_python_ok("-c", textwrap.dedent(r"""
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^
        import time
    `
example test: `test_structseq.StructSeqTest.test_reference_cycle`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_reference_loop_code self.assertRaises(ValueError, marshal.dumps, code, v) ~~~~~~~~~~~~~~~~~^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_marshal.py", line 358, in test_reference_loop_code
    self.assertRaises(ValueError, marshal.dumps, code, v)
    ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: ValueError not`
example test: `test_marshal.BugsTestCase.test_reference_loop_code`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_relative_imports self._do_test(relative_import_test) ~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^ File <`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_modulefinder.py", line 366, in test_relative_imports
    self._do_test(relative_import_test)
    ~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/t`
example test: `test_modulefinder.ModuleFinderTest.test_relative_imports`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_relative_imports_2 self._do_test(relative_import_test_2) ~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^ `

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_modulefinder.py", line 369, in test_relative_imports_2
    self._do_test(relative_import_test_2)
    ~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/`
example test: `test_modulefinder.ModuleFinderTest.test_relative_imports_2`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_relative_imports_3 self._do_test(relative_import_test_3) ~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^ `

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_modulefinder.py", line 372, in test_relative_imports_3
    self._do_test(relative_import_test_3)
    ~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/`
example test: `test_modulefinder.ModuleFinderTest.test_relative_imports_3`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_relativedir_bug46421 assert_python_ok(<str>, <str>, <str>) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_cmd_line.py", line 225, in test_relativedir_bug46421
    assert_python_ok('-m', 'unittest', "test/test_longexp.py")
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/.har`
example test: `test_cmd_line.CmdLineTest.test_relativedir_bug46421`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_release_buffer with memoryview(wr) as mv: ~~~~~~~~~~^^^^ TypeError: memoryview: a bytes-like ob`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_buffer.py", line 4519, in test_release_buffer
    with memoryview(wr) as mv:
         ~~~~~~~~~~^^^^
TypeError: memoryview: a bytes-like object is required, not 'WhatToRelease'`
example test: `test_buffer.TestPythonBufferProtocol.test_release_buffer`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_release_buffer_with_exception_set b.extend(A()) ~~~~~~~~^^^^^ TypeError: can't extend bytearray`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_buffer.py", line 4821, in test_release_buffer_with_exception_set
    b.extend(A())
    ~~~~~~~~^^^^^
TypeError: can't extend bytearray with A`
example test: `test_buffer.TestPythonBufferProtocol.test_release_buffer_with_exception_set`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_release_saves_reference smuggled_buffer.tobytes() ~~~~~~~~~~~~~~~~~~~~~~~^^ AttributeError: <st`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_buffer.py", line 4729, in test_release_saves_reference
    smuggled_buffer.tobytes()
    ~~~~~~~~~~~~~~~~~~~~~~~^^
AttributeError: 'NoneType' object has no attribute 'tobytes'`
example test: `test_buffer.TestPythonBufferProtocol.test_release_saves_reference`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_release_saves_reference_no_subclassing with memoryview(c) as mv: ~~~~~~~~~~^^^ TypeError: memor`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_buffer.py", line 4742, in test_release_saves_reference_no_subclassing
    with memoryview(c) as mv:
         ~~~~~~~~~~^^^
TypeError: memoryview: a bytes-like object is required, not 'C'`
example test: `test_buffer.TestPythonBufferProtocol.test_release_saves_reference_no_subclassing`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_repeat_id_preserving self.assertEqual(id(a), id(a * <n>)) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^ As`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_bytes.py", line 1290, in test_repeat_id_preserving
    self.assertEqual(id(a), id(a * 1))
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^
AssertionError: 1667 != 1675`
example test: `test_bytes.BytesTest.test_repeat_id_preserving`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_repeat_minmax_overflow self.assertRaises(OverflowError, re.compile, r<str> % <n>**<n>) ~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_re.py", line 2052, in test_repeat_minmax_overflow
    self.assertRaises(OverflowError, re.compile, r".{%d}" % 2**128)
    ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionEr`
example test: `test_re.ReTests.test_repeat_minmax_overflow`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_replace_paths self._do_test(maybe_test, debug=<n>, ~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^ replace_p`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_modulefinder.py", line 397, in test_replace_paths
    self._do_test(maybe_test, debug=2,
    ~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^
                  replace_paths=[(old_path, new_path)])
             `
example test: `test_modulefinder.ModuleFinderTest.test_replace_paths`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_repr self.assertEqual(repr(d), <str>) ~~~~^^^ RecursionError: maximum recursion depth exceeded`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/mapping_tests.py", line 614, in test_repr
    self.assertEqual(repr(d), '{1: {...}}')
                     ~~~~^^^
RecursionError: maximum recursion depth exceeded`
example test: `test_frame.FrameLocalsProxyMappingTests.test_repr`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_repr self.assertEqual(repr(ns1), <str>.format(name=name)) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_types.py", line 1924, in test_repr
    self.assertEqual(repr(ns1), "{name}(x=1, y=2, w=3)".format(name=name))
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionErr`
example test: `test_types.SimpleNamespaceTests.test_repr`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_repr self.assertEqual(repr(s), f<str>) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Asser`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_struct.py", line 834, in test_repr
    self.assertEqual(repr(s), f'Struct({s.format!r})')
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: '<_struct.Struct object at 0x372c5fb`
example test: `test_struct.StructTest.test_repr`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_repr_mutate self.assertEqual(repr(mylist), <str>) ~~~~^^^^^^^^ IndexError: index out of range`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_list.py", line 130, in test_repr_mutate
    self.assertEqual(repr(mylist), '[obj, obj, obj]')
                     ~~~~^^^^^^^^
IndexError: index out of range`
example test: `test_list.ListTest.test_repr_mutate`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_repr_raises with self.assertRaisesRegex( ~~~~~~~~~~~~~~~~~~~~~~^ TypeError, ^^^^^^^^^^ r<str> ^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_exception_group.py", line 256, in test_repr_raises
    with self.assertRaisesRegex(
         ~~~~~~~~~~~~~~~~~~~~~~^
        TypeError,
        ^^^^^^^^^^
        r"__repr__ returned non-string \(t`
example test: `test_exception_group.StrAndReprTests.test_repr_raises`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_repr_recursive_factory r = repr(dd) File <str>, line <n>, in __repr__ repr(dd) ~~~~^^^^ File <s`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_defaultdict.py", line 219, in test_repr_recursive_factory
    r = repr(dd)
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_defaultdict.py", line 214, in __repr__
    repr(dd)
  `
example test: `test_defaultdict.TestDefaultDict.test_repr_recursive_factory`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_rerun_async_setup_hook_failure output = self.run_tests(<str>, testname, exitcode=EXITCODE_BAD_T`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_regrtest.py", line 1737, in test_rerun_async_setup_hook_failure
    output = self.run_tests("--rerun", testname, exitcode=EXITCODE_BAD_TEST)
  File "/work/.harness/work/cpython-core/cpython-root/Li`
example test: `test_regrtest.ArgsTestCase.test_rerun_async_setup_hook_failure`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_rerun_async_teardown_hook_failure output = self.run_tests(<str>, testname, exitcode=EXITCODE_BA`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_regrtest.py", line 1758, in test_rerun_async_teardown_hook_failure
    output = self.run_tests("--rerun", testname, exitcode=EXITCODE_BAD_TEST)
  File "/work/.harness/work/cpython-core/cpython-root`
example test: `test_regrtest.ArgsTestCase.test_rerun_async_teardown_hook_failure`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_rerun_fail output = self.run_tests(<str>, testname, exitcode=EXITCODE_BAD_TEST) File <str>, lin`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_regrtest.py", line 1539, in test_rerun_fail
    output = self.run_tests("--rerun", testname, exitcode=EXITCODE_BAD_TEST)
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_regrtest`
example test: `test_regrtest.ArgsTestCase.test_rerun_fail`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_rerun_setup_class_hook_failure output = self.run_tests(<str>, testname, exitcode=EXITCODE_BAD_T`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_regrtest.py", line 1604, in test_rerun_setup_class_hook_failure
    output = self.run_tests("--rerun", testname, exitcode=EXITCODE_BAD_TEST)
  File "/work/.harness/work/cpython-core/cpython-root/Li`
example test: `test_regrtest.ArgsTestCase.test_rerun_setup_class_hook_failure`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_rerun_setup_hook_failure output = self.run_tests(<str>, testname, exitcode=EXITCODE_BAD_TEST) F`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_regrtest.py", line 1693, in test_rerun_setup_hook_failure
    output = self.run_tests("--rerun", testname, exitcode=EXITCODE_BAD_TEST)
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test`
example test: `test_regrtest.ArgsTestCase.test_rerun_setup_hook_failure`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_rerun_setup_module_hook_failure output = self.run_tests(<str>, testname, exitcode=EXITCODE_BAD_`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_regrtest.py", line 1649, in test_rerun_setup_module_hook_failure
    output = self.run_tests("--rerun", testname, exitcode=EXITCODE_BAD_TEST)
  File "/work/.harness/work/cpython-core/cpython-root/L`
example test: `test_regrtest.ArgsTestCase.test_rerun_setup_module_hook_failure`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_rerun_success output = self.run_tests(<str>, testname, exitcode=<n>) File <str>, line <n>, in r`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_regrtest.py", line 1570, in test_rerun_success
    output = self.run_tests("--rerun", testname, exitcode=0)
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_regrtest.py", line 10`
example test: `test_regrtest.ArgsTestCase.test_rerun_success`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_rerun_teardown_class_hook_failure output = self.run_tests(<str>, testname, exitcode=EXITCODE_BA`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_regrtest.py", line 1627, in test_rerun_teardown_class_hook_failure
    output = self.run_tests("--rerun", testname, exitcode=EXITCODE_BAD_TEST)
  File "/work/.harness/work/cpython-core/cpython-root`
example test: `test_regrtest.ArgsTestCase.test_rerun_teardown_class_hook_failure`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_rerun_teardown_hook_failure output = self.run_tests(<str>, testname, exitcode=EXITCODE_BAD_TEST`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_regrtest.py", line 1715, in test_rerun_teardown_hook_failure
    output = self.run_tests("--rerun", testname, exitcode=EXITCODE_BAD_TEST)
  File "/work/.harness/work/cpython-core/cpython-root/Lib/t`
example test: `test_regrtest.ArgsTestCase.test_rerun_teardown_hook_failure`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_rerun_teardown_module_hook_failure output = self.run_tests(<str>, testname, exitcode=EXITCODE_B`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_regrtest.py", line 1671, in test_rerun_teardown_module_hook_failure
    output = self.run_tests("--rerun", testname, exitcode=EXITCODE_BAD_TEST)
  File "/work/.harness/work/cpython-core/cpython-roo`
example test: `test_regrtest.ArgsTestCase.test_rerun_teardown_module_hook_failure`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_resize_forbidden self.assertRaises(BufferError, resize, <n>) ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_bytes.py", line 1776, in test_resize_forbidden
    self.assertRaises(BufferError, resize, 11)
    ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: BufferError not raised by resize`
example test: `test_bytes.ByteArrayTest.test_resize_forbidden`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_resource_tracker_reused p.start() ~~~~~~~^^ File <str>, line <n>, in start self._popen = self._`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/_test_multiprocessing.py", line 6025, in test_resource_tracker_reused
    p.start()
    ~~~~~~~^^
  File "/opt/elide/lib/resources/python/python-home/lib/python3.13/multiprocessing/process.py", line 121`
example test: `test_multiprocessing_fork.test_misc.TestResourceTracker.test_resource_tracker_reused`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_resource_tracker_sigint self.check_resource_tracker_death(signal.SIGINT, False) ~~~~~~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/_test_multiprocessing.py", line 5994, in test_resource_tracker_sigint
    self.check_resource_tracker_death(signal.SIGINT, False)
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^
  File "/wor`
example test: `test_multiprocessing_fork.test_misc.TestResourceTracker.test_resource_tracker_sigint`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_resource_tracker_sigkill self.check_resource_tracker_death(signal.SIGKILL, True) ~~~~~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/_test_multiprocessing.py", line 6004, in test_resource_tracker_sigkill
    self.check_resource_tracker_death(signal.SIGKILL, True)
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^
  File "/wo`
example test: `test_multiprocessing_fork.test_misc.TestResourceTracker.test_resource_tracker_sigkill`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_resource_tracker_sigterm self.check_resource_tracker_death(signal.SIGTERM, False) ~~~~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/_test_multiprocessing.py", line 5998, in test_resource_tracker_sigterm
    self.check_resource_tracker_death(signal.SIGTERM, False)
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^
  File "/`
example test: `test_multiprocessing_fork.test_misc.TestResourceTracker.test_resource_tracker_sigterm`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_resource_warning with self.assertWarns(ResourceWarning): ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^ Asse`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_os.py", line 5277, in test_resource_warning
    with self.assertWarns(ResourceWarning):
         ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^
AssertionError: ResourceWarning not triggered`
example test: `test_os.TestScandir.test_resource_warning`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_resources output = self.run_tests(<str>, <str>, *test_names) File <str>, line <n>, in run_tests`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_regrtest.py", line 1069, in test_resources
    output = self.run_tests('-u', 'all', *test_names)
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_regrtest.py", line 1000, in run_`
example test: `test_regrtest.ArgsTestCase.test_resources`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_restore_signals self.assertNotEqual(default_sig_ign_mask, restored_sig_ign_mask, ~~~~~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_subprocess.py", line 2172, in test_restore_signals
    self.assertNotEqual(default_sig_ign_mask, restored_sig_ign_mask,
    ~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
        `
example test: `test_subprocess.POSIXProcessTestCase.test_restore_signals`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_resurrection_does_not_block_cleanup_of_other_objects oldc, oldnc = getstats() ~~~~~~~~^^ File <`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_gc.py", line 996, in test_resurrection_does_not_block_cleanup_of_other_objects
    oldc, oldnc = getstats()
                  ~~~~~~~~^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/te`
example test: `test_gc.GCTests.test_resurrection_does_not_block_cleanup_of_other_objects`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_resurrection_is_transitive self.assertEqual(len(Lazarus.resurrected_instances), <n>) ~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_gc.py", line 963, in test_resurrection_is_transitive
    self.assertEqual(len(Lazarus.resurrected_instances), 1)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: 0 != 1`
example test: `test_gc.GCTests.test_resurrection_is_transitive`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_resurrection_only_happens_once_per_object self.assertEqual(Lazarus.resurrected, <n>) ~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_gc.py", line 925, in test_resurrection_only_happens_once_per_object
    self.assertEqual(Lazarus.resurrected, 1)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: 0 != 1`
example test: `test_gc.GCTests.test_resurrection_only_happens_once_per_object`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_return_command_in_generator_with_subiterator with TracerRun(self) as tracer: ^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_bdb.py", line 1216, in test_return_command_in_generator_with_subiterator
    with TracerRun(self) as tracer:
         ^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root`
example test: `test_bdb.IssuesTestCase.test_return_command_in_generator_with_subiterator`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_rlock self.run_worker(self._test_rlock, o) ~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^ File <str>, lin`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/_test_multiprocessing.py", line 6475, in test_rlock
    self.run_worker(self._test_rlock, o)
    ~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/_test`
example test: `test_multiprocessing_fork.test_misc.TestSyncManagerTypes.test_rlock`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_run_abort with support.SuppressCrashReport(): ~~~~~~~~~~~~~~~~~~~~~~~~~~~^^ File <str>, line <n`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_subprocess.py", line 2389, in test_run_abort
    with support.SuppressCrashReport():
         ~~~~~~~~~~~~~~~~~~~~~~~~~~~^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/support/__`
example test: `test_subprocess.POSIXProcessTestCase.test_run_abort`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_run_kwargs self.assertEqual(cp.returncode, <n>) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^ AssertionEr`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_subprocess.py", line 1915, in test_run_kwargs
    self.assertEqual(cp.returncode, 33)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^
AssertionError: 31 != 33`
example test: `test_subprocess.RunFuncTestCase.test_run_kwargs`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_run_module_bug1764407 self.assertTrue(data.find(b<str>) != -<n>) ~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_cmd_line.py", line 207, in test_run_module_bug1764407
    self.assertTrue(data.find(b'1 loop') != -1)
    ~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: False is not true`
example test: `test_cmd_line.CmdLineTest.test_run_module_bug1764407`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_run_until_complete_nesting with self.assertWarnsRegex( ~~~~~~~~~~~~~~~~~~~~~^ RuntimeWarning, ^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_asyncio/test_events.py", line 286, in test_run_until_complete_nesting
    with self.assertWarnsRegex(
         ~~~~~~~~~~~~~~~~~~~~~^
        RuntimeWarning,
        ^^^^^^^^^^^^^^^
        r"corou`
example test: `test_asyncio.test_events.SelectEventLoopTests.test_run_until_complete_nesting`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_runsource_show_syntax_error_location self.assertEqual(output.splitlines()[<n>:-<n>], expected_l`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_repl.py", line 304, in test_runsource_show_syntax_error_location
    self.assertEqual(output.splitlines()[4:-1], expected_lines)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Asse`
example test: `test_repl.TestInteractiveInterpreter.test_runsource_show_syntax_error_location`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_same_buffer_returned with memoryview(wr) as mv: ~~~~~~~~~~^^^^ TypeError: memoryview: a bytes-l`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_buffer.py", line 4544, in test_same_buffer_returned
    with memoryview(wr) as mv:
         ~~~~~~~~~~^^^^
TypeError: memoryview: a bytes-like object is required, not 'WhatToRelease'`
example test: `test_buffer.TestPythonBufferProtocol.test_same_buffer_returned`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_same_name_as_bad self._do_test(same_name_as_bad_test) ~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^ File`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_modulefinder.py", line 381, in test_same_name_as_bad
    self._do_test(same_name_as_bad_test)
    ~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test`
example test: `test_modulefinder.ModuleFinderTest.test_same_name_as_bad`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_saveall self.assertEqual(gc.garbage, []) ^^^^^^^^^^ AttributeError: module <str> has no attribu`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_gc.py", line 327, in test_saveall
    self.assertEqual(gc.garbage, [])
                     ^^^^^^^^^^
AttributeError: module 'gc' has no attribute 'garbage'`
example test: `test_gc.GCTests.test_saveall`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_script_autotest self.run_tests(args) ~~~~~~~~~~~~~~^^^^^^ File <str>, line <n>, in run_tests ou`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_regrtest.py", line 944, in test_script_autotest
    self.run_tests(args)
    ~~~~~~~~~~~~~~^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_regrtest.py", line 905, in run_`
example test: `test_regrtest.ProgramsTestCase.test_script_autotest`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_script_compiled self._check_script(pyc_file) ~~~~~~~~~~~~~~~~~~^^^^^^^^^^ File <str>, line <n>,`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_multiprocessing_main_handling.py", line 202, in test_script_compiled
    self._check_script(pyc_file)
    ~~~~~~~~~~~~~~~~~~^^^^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test`
example test: `test_multiprocessing_main_handling.SpawnCmdLineTest.test_script_compiled`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_script_maybe_not_shadowing_third_party self.assertRegex(stdout, expected_error) ~~~~~~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_import/__init__.py", line 1058, in test_script_maybe_not_shadowing_third_party
    self.assertRegex(stdout, expected_error)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: Regex didn't`
example test: `test_import.ImportTests.test_script_maybe_not_shadowing_third_party`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_script_regrtest self.run_tests(args) ~~~~~~~~~~~~~~^^^^^^ File <str>, line <n>, in run_tests ou`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_regrtest.py", line 913, in test_script_regrtest
    self.run_tests(args)
    ~~~~~~~~~~~~~~^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_regrtest.py", line 905, in run_`
example test: `test_regrtest.ProgramsTestCase.test_script_regrtest`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_script_shadowing_stdlib_edge_cases self.assertEqual(stdout.rstrip(), b<str>) ~~~~~~~~~~~~~~~~^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_import/__init__.py", line 1087, in test_script_shadowing_stdlib_edge_cases
    self.assertEqual(stdout.rstrip(), b"unhashable type: 'substr'")
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`
example test: `test_import.ImportTests.test_script_shadowing_stdlib_edge_cases`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_search_methods_reentrancy_raises_buffererror with self.assertRaises(BufferError): ~~~~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_bytes.py", line 1937, in test_search_methods_reentrancy_raises_buffererror
    with self.assertRaises(BufferError):
         ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^
AssertionError: BufferError not raised`
example test: `test_bytes.ByteArrayTest.test_search_methods_reentrancy_raises_buffererror`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_seek reader = codecs.getreader(encoding)(io.BytesIO(s.encode(encoding))) ~~~~~~~~^^^^^^^^^^ Not`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_codecs.py", line 2282, in test_seek
    reader = codecs.getreader(encoding)(io.BytesIO(s.encode(encoding)))
                                                   ~~~~~~~~^^^^^^^^^^
NotImplementedError`
example test: `test_codecs.BasicUnicodeTest.test_seek`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_seek0 self.assertEqual(f.read(), data * <n>) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^ AssertionErro`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_codecs.py", line 2922, in test_seek0
    self.assertEqual(f.read(), data * 2)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^
AssertionError: '1234567890\ufeff1234567890' != '12345678901234567890'
- 12345`
example test: `test_codecs.BomTest.test_seek0`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_semaphore self.run_worker(self._test_semaphore, o) ~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^ Fil`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/_test_multiprocessing.py", line 6483, in test_semaphore
    self.run_worker(self._test_semaphore, o)
    ~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/Li`
example test: `test_multiprocessing_fork.test_misc.TestSyncManagerTypes.test_semaphore`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_send_signal self.assertIn(b<str>, stderr) ~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Assertion`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_subprocess.py", line 2654, in test_send_signal
    self.assertIn(b'KeyboardInterrupt', stderr)
    ~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: b'KeyboardInterrupt' not found in b''`
example test: `test_subprocess.POSIXProcessTestCase.test_send_signal`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_set_audio_aif_with_quoted_printable_cte m.set_content(content, <str>, <str>, cte=<str>) ~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_email/test_contentmanager.py", line 623, in test_set_audio_aif_with_quoted_printable_cte
    m.set_content(content, 'audio', 'aif', cte='quoted-printable')
    ~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^`
example test: `test_email.test_contentmanager.TestRawDataManager.test_set_audio_aif_with_quoted_printable_cte`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_set_config self.assertEqual(proc.returncode, <n>, ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^ (proc.re`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_embed.py", line 1862, in test_set_config
    self.assertEqual(proc.returncode, 0,
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^
                     (proc.returncode, proc.stdout, proc.stderr))
        `
example test: `test_embed.SetConfigTests.test_set_config`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_set_get self.check_context(multiprocessing) ~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^ File <str>, lin`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/_test_multiprocessing.py", line 5800, in test_set_get
    self.check_context(multiprocessing)
    ~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/_test`
example test: `test_multiprocessing_fork.test_misc.TestStartMethod.test_set_get`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_Set_hash_matches_frozenset self.assertEqual(hash(fs), Set._hash(fs), msg=s) ~~~~~~~~~~~~~~~~^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_collections.py", line 1841, in test_Set_hash_matches_frozenset
    self.assertEqual(hash(fs), Set._hash(fs), msg=s)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: 133146708735`
example test: `test_collections.TestCollectionABCs.test_Set_hash_matches_frozenset`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_setdefault TestMappingProtocol.test_setdefault(self) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^ `

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/mapping_tests.py", line 652, in test_setdefault
    TestMappingProtocol.test_setdefault(self)
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test`
example test: `test_frame.FrameLocalsProxyMappingTests.test_setdefault`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_setdefault_atomic self.assertEqual(hashed1.eq_count + hashed2.eq_count, <n>) ~~~~~~~~~~~~~~~~^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_dict.py", line 494, in test_setdefault_atomic
    self.assertEqual(hashed1.eq_count + hashed2.eq_count, 1)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: 2 != 1`
example test: `test_dict.DictTest.test_setdefault_atomic`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_setitem_use_after_shrink_with_int_data self.assertRaises(IndexError, victim.__setitem__, <n>, I`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_array.py", line 1709, in test_setitem_use_after_shrink_with_int_data
    self.assertRaises(IndexError, victim.__setitem__, 1, Index())
    ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`
example test: `test_array.LargeArrayTest.test_setitem_use_after_shrink_with_int_data`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_setstate_validates_input self.assertRaises(TypeError, decoder.setstate, (<str>, <n>)) ~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_multibytecodec.py", line 305, in test_setstate_validates_input
    self.assertRaises(TypeError, decoder.setstate, ("invalid", 0))
    ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`
example test: `test_multibytecodec.Test_IncrementalDecoder.test_setstate_validates_input`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_setstate_validates_input_bytes self.assertRaises(UnicodeDecodeError, encoder.setstate, invalid_`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_multibytecodec.py", line 206, in test_setstate_validates_input_bytes
    self.assertRaises(UnicodeDecodeError, encoder.setstate, invalid_utf8)
    ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`
example test: `test_multibytecodec.Test_IncrementalEncoder.test_setstate_validates_input_bytes`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_setstate_validates_input_size self.assertRaises(UnicodeError, encoder.setstate, pending_size_ni`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_multibytecodec.py", line 197, in test_setstate_validates_input_size
    self.assertRaises(UnicodeError, encoder.setstate, pending_size_nine)
    ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`
example test: `test_multibytecodec.Test_IncrementalEncoder.test_setstate_validates_input_size`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_showrefcount self.assertEqual(out.rstrip(), b<str>) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_cmd_line.py", line 151, in test_showrefcount
    self.assertEqual(out.rstrip(), b"{'showrefcount': True}")
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: b'{}' != b"{`
example test: `test_cmd_line.CmdLineTest.test_showrefcount`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_shutdown self.assertEqual(res.out.decode().splitlines(), [<str>, <str>]) ~~~~~~~~~~~~~~~~^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_atexit.py", line 28, in test_shutdown
    self.assertEqual(res.out.decode().splitlines(), ["two", "one"])
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: Lists d`
example test: `test_atexit.FunctionalTest.test_shutdown`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_shutdown_gh_132969_case_1 result = self._run_test_issue_gh_132969(<n>) File <str>, line <n>, in`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_concurrent_futures/test_shutdown.py", line 381, in test_shutdown_gh_132969_case_1
    result = self._run_test_issue_gh_132969(2)
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_`
example test: `test_concurrent_futures.test_shutdown.ProcessPoolSpawnProcessPoolShutdownTest.test_shutdown_gh_132969_case_1`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_shutdown_gh_132969_case_2 result = self._run_test_issue_gh_132969(<n>) File <str>, line <n>, in`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_concurrent_futures/test_shutdown.py", line 388, in test_shutdown_gh_132969_case_2
    result = self._run_test_issue_gh_132969(4)
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_`
example test: `test_concurrent_futures.test_shutdown.ProcessPoolSpawnProcessPoolShutdownTest.test_shutdown_gh_132969_case_2`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_sigabrt self.check_fatal_error(<str><str>/work/.harness/work/cpython-core/cpython-root/Lib/test`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_faulthandler.py", line 222, in test_sigabrt
    self.check_fatal_error("""
    ~~~~~~~~~~~~~~~~~~~~~~^^^^
        import faulthandler
        ^^^^^^^^^^^^^^^^^^^
    ...<3 lines>...
        3,
    `
example test: `test_faulthandler.FaultHandlerTests.test_sigabrt`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_sigbus self.check_fatal_error(<str><str>/work/.harness/work/cpython-core/cpython-root/Lib/test/`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_faulthandler.py", line 245, in test_sigbus
    self.check_fatal_error("""
    ~~~~~~~~~~~~~~~~~~~~~~^^^^
        import faulthandler
        ^^^^^^^^^^^^^^^^^^^
    ...<5 lines>...
        5,
     `
example test: `test_faulthandler.FaultHandlerTests.test_sigbus`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_sigfpe self.check_fatal_error(<str><str>/work/.harness/work/cpython-core/cpython-root/Lib/test/`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_faulthandler.py", line 233, in test_sigfpe
    self.check_fatal_error("""
    ~~~~~~~~~~~~~~~~~~~~~~^^^^
        import faulthandler
        ^^^^^^^^^^^^^^^^^^^
    ...<3 lines>...
        3,
     `
example test: `test_faulthandler.FaultHandlerTests.test_sigfpe`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_sigill self.check_fatal_error(<str><str>/work/.harness/work/cpython-core/cpython-root/Lib/test/`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_faulthandler.py", line 259, in test_sigill
    self.check_fatal_error("""
    ~~~~~~~~~~~~~~~~~~~~~~^^^^
        import faulthandler
        ^^^^^^^^^^^^^^^^^^^
    ...<5 lines>...
        5,
     `
example test: `test_faulthandler.FaultHandlerTests.test_sigill`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_sigint with self.assertRaises(KeyboardInterrupt): ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^ Assertio`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_signal.py", line 1417, in test_sigint
    with self.assertRaises(KeyboardInterrupt):
         ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^
AssertionError: KeyboardInterrupt not raised`
example test: `test_signal.RaiseSignalTest.test_sigint`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_signal_handling_args self.assertEqual(caught, <n>) ~~~~~~~~~~~~~~~~^^^^^^^^^^^ AssertionError: `

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_asyncio/test_events.py", line 527, in test_signal_handling_args
    self.assertEqual(caught, 1)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^
AssertionError: 0 != 1`
example test: `test_asyncio.test_events.SelectEventLoopTests.test_signal_handling_args`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_signal_handling_while_selecting self.assertEqual(caught, <n>) ~~~~~~~~~~~~~~~~^^^^^^^^^^^ Asser`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_asyncio/test_events.py", line 507, in test_signal_handling_while_selecting
    self.assertEqual(caught, 1)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^
AssertionError: 0 != 1`
example test: `test_asyncio.test_events.SelectEventLoopTests.test_signal_handling_while_selecting`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_signature CustomRLock(<n>, b=<n>) ~~~~~~~~~~~^^^^^^^^ TypeError: RLock() got an unexpected keyw`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_threading.py", line 2122, in test_signature
    CustomRLock(1, b=2)
    ~~~~~~~~~~~^^^^^^^^
TypeError: RLock() got an unexpected keyword argument 'b'`
example test: `test_threading.CRLockTests.test_signature`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_sigsegv self.check_fatal_error(<str><str>/work/.harness/work/cpython-core/cpython-root/Lib/test`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_faulthandler.py", line 165, in test_sigsegv
    self.check_fatal_error("""
    ~~~~~~~~~~~~~~~~~~~~~~^^^^
        import faulthandler
        ^^^^^^^^^^^^^^^^^^^
    ...<3 lines>...
        3,
    `
example test: `test_faulthandler.FaultHandlerTests.test_sigsegv`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_single_surrogate_decode self.assertEqual(self.loads(<str>), <str>) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_json/test_unicode.py", line 82, in test_single_surrogate_decode
    self.assertEqual(self.loads('"\\uD83D"'), '\ud83d')
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: '' !=`
example test: `test_json.test_unicode.TestCUnicode.test_single_surrogate_decode`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_site_flag self.verify_valid_flag(<str>) ~~~~~~~~~~~~~~~~~~~~~~^^^^^^ File <str>, line <n>, in v`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_cmd_line.py", line 92, in test_site_flag
    self.verify_valid_flag('-S')
    ~~~~~~~~~~~~~~~~~~~~~~^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_cmd_line.py", line 37,`
example test: `test_cmd_line.CmdLineTest.test_site_flag`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_skip output = self.run_tests(*tests) File <str>, line <n>, in run_tests return self.run_python(`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_regrtest.py", line 1031, in test_skip
    output = self.run_tests(*tests)
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_regrtest.py", line 1000, in run_tests
    return self.r`
example test: `test_regrtest.ArgsTestCase.test_skip`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_slots_no_weakref with self.assertRaisesRegex(TypeError, ~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^ <str>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_dataclasses/__init__.py", line 3490, in test_slots_no_weakref
    with self.assertRaisesRegex(TypeError,
         ~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^
                                "cannot create we`
example test: `test_dataclasses.TestSlots.test_slots_no_weakref`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_slots_weakref self.assertIs(a.__weakref__, a_ref) ~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^ Assertion`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_dataclasses/__init__.py", line 3505, in test_slots_weakref
    self.assertIs(a.__weakref__, a_ref)
    ~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^
AssertionError: None is not <weakref at 78224535; to 'A' a`
example test: `test_dataclasses.TestSlots.test_slots_weakref`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_slowest output = self.run_tests(<str>, *tests) File <str>, line <n>, in run_tests return self.r`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_regrtest.py", line 1196, in test_slowest
    output = self.run_tests("--slowest", *tests)
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_regrtest.py", line 1000, in run_tests
 `
example test: `test_regrtest.ArgsTestCase.test_slowest`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_sparse_file_00 self._test_sparse_file(<str>) ~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^ File <str`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_tarfile.py", line 1296, in test_sparse_file_00
    self._test_sparse_file("gnu/sparse-0.0")
    ~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/te`
example test: `test_tarfile.GNUReadTest.test_sparse_file_00`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_sparse_file_01 self._test_sparse_file(<str>) ~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^ File <str`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_tarfile.py", line 1299, in test_sparse_file_01
    self._test_sparse_file("gnu/sparse-0.1")
    ~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/te`
example test: `test_tarfile.GNUReadTest.test_sparse_file_01`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_sparse_file_10 self._test_sparse_file(<str>) ~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^ File <str`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_tarfile.py", line 1302, in test_sparse_file_10
    self._test_sparse_file("gnu/sparse-1.0")
    ~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/te`
example test: `test_tarfile.GNUReadTest.test_sparse_file_10`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_sparse_file_old self._test_sparse_file(<str>) ~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^ File <str>, `

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_tarfile.py", line 1293, in test_sparse_file_old
    self._test_sparse_file("gnu/sparse")
    ~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test`
example test: `test_tarfile.GNUReadTest.test_sparse_file_old`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_spawn self._test(ProcessPoolSpawnFailingInitializerTest) ~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_concurrent_futures/test_init.py", line 140, in test_spawn
    self._test(ProcessPoolSpawnFailingInitializerTest)
    ~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/.harness/work/c`
example test: `test_concurrent_futures.test_init.FailingInitializerResourcesTest.test_spawn`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_spawn_doesnt_hang pid, fd = pty.fork() ~~~~~~~~^^ File <str>, line <n>, in fork pid = os.fork()`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_pty.py", line 301, in test_spawn_doesnt_hang
    pid, fd = pty.fork()
              ~~~~~~~~^^
  File "/opt/elide/lib/resources/python/python-home/lib/python3.13/pty.py", line 108, in fork
    pid `
example test: `test_pty.PtyTest.test_spawn_doesnt_hang`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_spawn_dont_set_context process.start() ~~~~~~~~~~~~~^^ File <str>, line <n>, in start self._pop`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/_test_multiprocessing.py", line 5758, in test_spawn_dont_set_context
    process.start()
    ~~~~~~~~~~~~~^^
  File "/opt/elide/lib/resources/python/python-home/lib/python3.13/multiprocessing/process.py`
example test: `test_multiprocessing_fork.test_misc.TestStartMethod.test_spawn_dont_set_context`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_special_chars_bash self.assertTrue(env_name.encode() in lines[<n>]) ~~~~~~~~~~~~~~~^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_venv.py", line 526, in test_special_chars_bash
    self.assertTrue(env_name.encode() in lines[0])
    ~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: False is not true

Stderr:
We su`
example test: `test_venv.BasicTest.test_special_chars_bash`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_srcdir self.assertTrue(os.path.isdir(srcdir), srcdir) ~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_sysconfig.py", line 533, in test_srcdir
    self.assertTrue(os.path.isdir(srcdir), srcdir)
    ~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: False is not true : /opt/elide/lib/reso`
example test: `test_sysconfig.TestSysConfig.test_srcdir`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_ssl_raises with self.assertRaisesRegex(ssl.CertificateError, regex): ~~~~~~~~~~~~~~~~~~~~~~^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_imaplib.py", line 584, in test_ssl_raises
    with self.assertRaisesRegex(ssl.CertificateError, regex):
         ~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: SSLCertVerificat`
example test: `test_imaplib.NewIMAPSSLTests.test_ssl_raises`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_stacklevel_import self.assertEqual(w[<n>].filename, __file__) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_warnings/__init__.py", line 585, in test_stacklevel_import
    self.assertEqual(w[0].filename, __file__)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: '<frozen _frozen_importlib_ext`
example test: `test_warnings.PyWarnTests.test_stacklevel_import`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_starred_typevartuple self.assertEqual(Ts.__default__, next(iter(ns[<str>]))) ~~~~~~~~~~~~~~~~^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_type_params.py", line 1360, in test_starred_typevartuple
    self.assertEqual(Ts.__default__, next(iter(ns["default"])))
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionErr`
example test: `test_type_params.DefaultsTest.test_starred_typevartuple`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_state_methods self.assertEqual(decoder.getstate(), (b<str>, <n>)) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_multibytecodec.py", line 300, in test_state_methods
    self.assertEqual(decoder.getstate(), (b'abc', 123456789))
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: Tuple`
example test: `test_multibytecodec.Test_IncrementalDecoder.test_state_methods`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_state_methods_with_buffer_state encoder = codecs.getincrementalencoder(<str>)() ~~~~~~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_multibytecodec.py", line 128, in test_state_methods_with_buffer_state
    encoder = codecs.getincrementalencoder('euc_jis_2004')()
              ~~~~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^
LookupE`
example test: `test_multibytecodec.Test_IncrementalEncoder.test_state_methods_with_buffer_state`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_state_methods_with_non_buffer_state self.assertEqual(encoder.encode(<str>), b<str>) ~~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_multibytecodec.py", line 148, in test_state_methods_with_non_buffer_state
    self.assertEqual(encoder.encode('\u3042'), b'\x1b\x24\x42\x24\x22')
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`
example test: `test_multibytecodec.Test_IncrementalEncoder.test_state_methods_with_non_buffer_state`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_stateful encoder = codecs.getincrementalencoder(<str>)() ~~~~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_multibytecodec.py", line 101, in test_stateful
    encoder = codecs.getincrementalencoder('jisx0213')()
              ~~~~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^
LookupError: unknown encoding jisx0213`
example test: `test_multibytecodec.Test_IncrementalEncoder.test_stateful`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_stateful_keep_buffer encoder = codecs.getincrementalencoder(<str>)() ~~~~~~~~~~~~~~~~~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_multibytecodec.py", line 115, in test_stateful_keep_buffer
    encoder = codecs.getincrementalencoder('jisx0213')()
              ~~~~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^
LookupError: unknown encod`
example test: `test_multibytecodec.Test_IncrementalEncoder.test_stateful_keep_buffer`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_stderr_None with self.check_stderr_none(): ~~~~~~~~~~~~~~~~~~~~~~^^ File <str>, line <n>, in __`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_faulthandler.py", line 806, in test_stderr_None
    with self.check_stderr_none():
         ~~~~~~~~~~~~~~~~~~~~~~^^
  File "/opt/elide/lib/resources/python/python-home/lib/python3.13/contextlib.py`
example test: `test_faulthandler.FaultHandlerTests.test_stderr_None`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_stdio self.assertEqual(out.splitlines(), ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^ [<str>, ^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_utf8_mode.py", line 141, in test_stdio
    self.assertEqual(out.splitlines(),
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^
                     ['stdin: iso8859-1/strict',
                     ^^^^^^^^^^`
example test: `test_utf8_mode.UTF8ModeTests.test_stdio`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_stdout_flush_at_shutdown rc, out, err = assert_python_failure(<str>, code) ~~~~~~~~~~~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_cmd_line.py", line 507, in test_stdout_flush_at_shutdown
    rc, out, err = assert_python_failure('-c', code)
                   ~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^
  File "/work/.harness/work/cpytho`
example test: `test_cmd_line.CmdLineTest.test_stdout_flush_at_shutdown`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_stepinstr with TracerRun(self) as tracer: ^^^^^^^^^^^^^^^^^^^^^^^^^ File <str>, line <n>, in __`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_bdb.py", line 623, in test_stepinstr
    with TracerRun(self) as tracer:
         ^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_bdb.py", line 462, in`
example test: `test_bdb.StateTestCase.test_stepinstr`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_stls_context with self.assertRaises(ssl.CertificateError): ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_poplib.py", line 417, in test_stls_context
    with self.assertRaises(ssl.CertificateError):
         ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^
AssertionError: SSLCertVerificationError not raised`
example test: `test_poplib.TestPOP3Class.test_stls_context`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_strcoll_with_diacritic self.assertLess(locale.strcoll(<str>, <str>), <n>) ~~~~~~~~~~~~~~~^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_locale.py", line 361, in test_strcoll_with_diacritic
    self.assertLess(locale.strcoll('à', 'b'), 0)
    ~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: 1 not less than 0

Stdout:
tes`
example test: `test_locale.TestEnUSCollation.test_strcoll_with_diacritic`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_strftime_invalid_format with SuppressCrashReport(): ~~~~~~~~~~~~~~~~~~~^^ File <str>, line <n>,`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_time.py", line 196, in test_strftime_invalid_format
    with SuppressCrashReport():
         ~~~~~~~~~~~~~~~~~~~^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/support/__init__.py`
example test: `test_time.TimeTestCase.test_strftime_invalid_format`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_strftime_special self.assertEqual(time.strftime(<str>, tt), <str>) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_time.py", line 221, in test_strftime_special
    self.assertEqual(time.strftime('\ud83d\udc0d', tt), '\ud83d\udc0d')
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Assertio`
example test: `test_time.TimeTestCase.test_strftime_special`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_strsignal self.assertIn(<str>, signal.strsignal(signal.SIGINT)) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_signal.py", line 129, in test_strsignal
    self.assertIn("Interrupt", signal.strsignal(signal.SIGINT))
                               ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^
AttributeError: module 'signal`
example test: `test_signal.PosixTests.test_strsignal`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_struct_cleans_up_at_runtime_shutdown self.assertIn(b<str>, stderr) ~~~~~~~~~~~~~^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_struct.py", line 733, in test_struct_cleans_up_at_runtime_shutdown
    self.assertIn(b"Exception ignored in:", stderr)
    ~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: b'Exceptio`
example test: `test_struct.StructTest.test_struct_cleans_up_at_runtime_shutdown`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_struct_subclass_instantiation my_struct = MyStruct() TypeError: Struct() missing <n> required p`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_struct.py", line 829, in test_struct_subclass_instantiation
    my_struct = MyStruct()
TypeError: Struct() missing 1 required positional argument: 'a'`
example test: `test_struct.StructTest.test_struct_subclass_instantiation`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_strxfrm_with_diacritic self.assertLess(locale.strxfrm(<str>), locale.strxfrm(<str>)) ~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_locale.py", line 372, in test_strxfrm_with_diacritic
    self.assertLess(locale.strxfrm('à'), locale.strxfrm('b'))
    ~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: 'à' `
example test: `test_locale.TestEnUSCollation.test_strxfrm_with_diacritic`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_subclass_recursion_limit self.assertRaises(RecursionError, blowstack, issubclass, str, str) ~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_isinstance.py", line 270, in test_subclass_recursion_limit
    self.assertRaises(RecursionError, blowstack, issubclass, str, str)
    ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`
example test: `test_isinstance.TestIsInstanceIsSubclass.test_subclass_recursion_limit`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_subclass_repr self.assertIn(TestSubclass.__name__, repr(f)) ~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_fileio.py", line 184, in test_subclass_repr
    self.assertIn(TestSubclass.__name__, repr(f))
    ~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: 'TestSubclass' not found in "<_io.Fil`
example test: `test_fileio.CAutoFileTests.test_subclass_repr`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_submit_keyword self.assertEqual(<n>, future.result()) ~~~~~~~~~~~~~^^ File <str>, line <n>, in `

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_concurrent_futures/executor.py", line 50, in test_submit_keyword
    self.assertEqual(16, future.result())
                         ~~~~~~~~~~~~~^^
  File "/opt/elide/lib/resources/python/python-ho`
example test: `test_concurrent_futures.test_process_pool.ProcessPoolSpawnProcessPoolExecutorTest.test_submit_keyword`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_success output = self.run_tests(*tests) File <str>, line <n>, in run_tests return self.run_pyth`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_regrtest.py", line 1018, in test_success
    output = self.run_tests(*tests)
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_regrtest.py", line 1000, in run_tests
    return sel`
example test: `test_regrtest.ArgsTestCase.test_success`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_surrogates_error_message subprocess.call( ~~~~~~~~~~~~~~~^ ZERO_RETURN_CMD, ^^^^^^^^^^^^^^^^ pr`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_subprocess.py", line 2918, in test_surrogates_error_message
    subprocess.call(
    ~~~~~~~~~~~~~~~^
        ZERO_RETURN_CMD,
        ^^^^^^^^^^^^^^^^
        preexec_fn=prepare)
        ^^^^^^^^^`
example test: `test_subprocess.POSIXProcessTestCase.test_surrogates_error_message`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_swallows_falsey_exceptions self.executor.submit(raiser, FalseyBoolException, msg).result() ~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_concurrent_futures/executor.py", line 158, in test_swallows_falsey_exceptions
    self.executor.submit(raiser, FalseyBoolException, msg).result()
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`
example test: `test_concurrent_futures.test_process_pool.ProcessPoolSpawnProcessPoolExecutorTest.test_swallows_falsey_exceptions`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_symbolic_groups_errors self.checkPatternError(b<str>, ~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_re.py", line 325, in test_symbolic_groups_errors
    self.checkPatternError(b'(?P<\xc2\xb5>x)',
    ~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^
                           r"bad character in group na`
example test: `test_re.ReTests.test_symbolic_groups_errors`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_symmetric_difference self.assertEqual(len(i), len(self.items) + len(self.items2)) ~~~~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_weakset.py", line 141, in test_symmetric_difference
    self.assertEqual(len(i), len(self.items) + len(self.items2))
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError:`
example test: `test_weakset.TestWeakSet.test_symmetric_difference`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_symtable_key_regression_default self.assertEqual(T.__default__, [T]) ~~~~~~~~~~~~~~~~^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_type_params.py", line 1400, in test_symtable_key_regression_default
    self.assertEqual(T.__default__, [T])
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^
AssertionError: typing.NoDefault != [T]`
example test: `test_type_params.DefaultsTest.test_symtable_key_regression_default`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_symtable_key_regression_name self.assertEqual(ns[<str>].__type_params__[<n>].__default__, <str>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_type_params.py", line 1412, in test_symtable_key_regression_name
    self.assertEqual(ns["X1"].__type_params__[0].__default__, "A")
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`
example test: `test_type_params.DefaultsTest.test_symtable_key_regression_name`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_symtable_module_has_signatures import symtable File <str>, line <n>, in <module> import _symtab`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_inspect/test_inspect.py", line 6328, in test_symtable_module_has_signatures
    import symtable
  File "/opt/elide/lib/resources/python/python-home/lib/python3.13/symtable.py", line 3, in <module>
`
example test: `test_inspect.test_inspect.TestSignatureDefinitions.test_symtable_module_has_signatures`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_synopsis_sourceless synopsis = pydoc.synopsis(filename) File <str>, line <n>, in synopsis mtime`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_pydoc/test_pydoc.py", line 990, in test_synopsis_sourceless
    synopsis = pydoc.synopsis(filename)
  File "/opt/elide/lib/resources/python/python-home/lib/python3.13/pydoc.py", line 411, in synops`
example test: `test_pydoc.test_pydoc.PydocDocTest.test_synopsis_sourceless`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_syntax_error self._do_test(syntax_error_test) ~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^ File <str>, line`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_modulefinder.py", line 378, in test_syntax_error
    self._do_test(syntax_error_test)
    ~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_module`
example test: `test_modulefinder.ModuleFinderTest.test_syntax_error`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_sys_argv_list status, direct_stdout, stderr = assert_python_ok(TESTFN) ~~~~~~~~~~~~~~~~^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_trace.py", line 531, in test_sys_argv_list
    status, direct_stdout, stderr = assert_python_ok(TESTFN)
                                    ~~~~~~~~~~~~~~~~^^^^^^^^
  File "/work/.harness/work/cpyt`
example test: `test_trace.TestCommandLine.test_sys_argv_list`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_sys_flags_not_set self.run_ignoring_vars( ~~~~~~~~~~~~~~~~~~~~~~^ expected_outcome, ^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_cmd_line.py", line 1050, in test_sys_flags_not_set
    self.run_ignoring_vars(
    ~~~~~~~~~~~~~~~~~~~~~~^
        expected_outcome,
        ^^^^^^^^^^^^^^^^^
    ...<4 lines>...
        PYTHONSAFE`
example test: `test_cmd_line.IgnoreEnvironmentTest.test_sys_flags_not_set`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_sys_getframe self.assertEqual(actual, expected) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^ AssertionErr`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_audit.py", line 189, in test_sys_getframe
    self.assertEqual(actual, expected)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^
AssertionError: Lists differ: [] != [('sys._getframe', 'test_sys_getframe')]
`
example test: `test_audit.AuditTest.test_sys_getframe`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_sys_monitoring_register_callback self.fail(stderr) ~~~~~~~~~^^^^^^^^ AssertionError: AttributeE`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_audit.py", line 287, in test_sys_monitoring_register_callback
    self.fail(stderr)
    ~~~~~~~~~^^^^^^^^
AssertionError: AttributeError: module 'sys' has no attribute 'monitoring'
    at _run_modu`
example test: `test_audit.AuditTest.test_sys_monitoring_register_callback`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_sys_xoptions self.assertEqual(output.rstrip(), b<str>) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_faulthandler.py", line 430, in test_sys_xoptions
    self.assertEqual(output.rstrip(), b"True")
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: b'False' != b'True'`
example test: `test_faulthandler.FaultHandlerTests.test_sys_xoptions`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_sysexcepthook_indentation_error self.assertEqual(traceback.format_exception(self.sysmod.last_ex`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_code_module.py", line 175, in test_sysexcepthook_indentation_error
    self.assertEqual(traceback.format_exception(self.sysmod.last_exc), [
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`
example test: `test_code_module.TestInteractiveConsole.test_sysexcepthook_indentation_error`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_terminate self.assertEqual(p.wait(), -signal.SIGTERM) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_subprocess.py", line 2667, in test_terminate
    self.assertEqual(p.wait(), -signal.SIGTERM)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: 143 != -15`
example test: `test_subprocess.POSIXProcessTestCase.test_terminate`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_text_doc self.assertEqual(expected_text, result) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^ Assert`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_pydoc/test_pydoc.py", line 450, in test_text_doc
    self.assertEqual(expected_text, result)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: "NAME[456 chars]    |      dictionary for in`
example test: `test_pydoc.test_pydoc.PydocDocTest.test_text_doc`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_text_doc_inherited_routines_in_class self.test_text_doc_routines_in_class(pydocfodder.D) ~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_pydoc/test_pydoc.py", line 2000, in test_text_doc_inherited_routines_in_class
    self.test_text_doc_routines_in_class(pydocfodder.D)
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^
  File `
example test: `test_pydoc.test_pydoc.PydocFodderTest.test_text_doc_inherited_routines_in_class`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_text_doc_routines_in_class self.assertIn(<str>, lines) ~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_pydoc/test_pydoc.py", line 1953, in test_text_doc_routines_in_class
    self.assertIn(' |  get(key, default=None, /) method of builtins.dict instance', lines)
    ~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^`
example test: `test_pydoc.test_pydoc.PydocFodderTest.test_text_doc_routines_in_class`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_text_doc_routines_in_module self.assertIn(<str>, lines) ~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_pydoc/test_pydoc.py", line 2025, in test_text_doc_routines_in_module
    self.assertIn('    get(key, default=None, /) method of builtins.dict instance', lines)
    ~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^`
example test: `test_pydoc.test_pydoc.PydocFodderTest.test_text_doc_routines_in_module`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_text_to_binary_denylists_text_transforms <str>.encode(<str>) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_codecs.py", line 3058, in test_text_to_binary_denylists_text_transforms
    "just an example message".encode("rot_13")
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^
TypeError: 'rot_13' encoder ret`
example test: `test_codecs.TransformCodecTest.test_text_to_binary_denylists_text_transforms`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_thread_info self.assertEqual(info.name, <str>) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^ Assertion`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_sys.py", line 758, in test_thread_info
    self.assertEqual(info.name, "pthread")
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^
AssertionError: None != 'pthread'`
example test: `test_sys.SysModuleTest.test_thread_info`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_threading self.assertEqual(actual, expected) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^ AssertionError:`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_audit.py", line 219, in test_threading
    self.assertEqual(actual, expected)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^
AssertionError: Lists differ: [('test.test_func', '()'), ('test.test_func', '()'`
example test: `test_audit.AuditTest.test_threading`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_threading_excepthook output = self.run_tests(<str>, <str>, testname, exitcode=EXITCODE_ENV_CHAN`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_regrtest.py", line 1956, in test_threading_excepthook
    output = self.run_tests("--fail-env-changed", "-v", testname,
                            exitcode=EXITCODE_ENV_CHANGED)
  File "/work/.har`
example test: `test_regrtest.ArgsTestCase.test_threading_excepthook`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_time self.assertEqual(actual, expected) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^ AssertionError: List`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_audit.py", line 276, in test_time
    self.assertEqual(actual, expected)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^
AssertionError: Lists differ: [] != [('time.sleep', '0'), ('time.sleep', '0.0625'), (`
example test: `test_audit.AuditTest.test_time`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_time_fail self.assertNotEqual(returncode, <n>) ~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^ AssertionErro`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_audit.py", line 281, in test_time_fail
    self.assertNotEqual(returncode, 0)
    ~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^
AssertionError: 0 == 0`
example test: `test_audit.AuditTest.test_time_fail`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_timeout self.assertEqual(parent.recv(), <n>) ~~~~~~~~~~~^^ File <str>, line <n>, in recv buf = `

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/_test_multiprocessing.py", line 5521, in test_timeout
    self.assertEqual(parent.recv(), 123)
                     ~~~~~~~~~~~^^
  File "/opt/elide/lib/resources/python/python-home/lib/python3.13/multi`
example test: `test_multiprocessing_fork.test_misc.TestTimeouts.test_timeout`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_times times = os.times() AttributeError: module <str> has no attribute <str>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_os.py", line 5392, in test_times
    times = os.times()
AttributeError: module 'os' has no attribute 'times'`
example test: `test_os.TimesTests.test_times`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_tls13_pha self.assertTrue(h._context.post_handshake_auth) ~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_httplib.py", line 2210, in test_tls13_pha
    self.assertTrue(h._context.post_handshake_auth)
    ~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: None is not true`
example test: `test_httplib.HTTPSTest.test_tls13_pha`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_tokenizer_error_with_stdin self.check_string(b<str>) ~~~~~~~~~~~~~~~~~^^^^^^^^^^^ File <str>, l`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_cmd_line.py", line 1070, in test_tokenizer_error_with_stdin
    self.check_string(b"(1+2+3")
    ~~~~~~~~~~~~~~~~~^^^^^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/support/`
example test: `test_cmd_line.SyntaxErrorTests.test_tokenizer_error_with_stdin`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_tokenizer_fstring_warning_in_first_line retcode, stdout, stderr = script_helper.assert_python_o`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_source_encoding.py", line 186, in test_tokenizer_fstring_warning_in_first_line
    retcode, stdout, stderr = script_helper.assert_python_ok(TESTFN)
                              ~~~~~~~~~~~~~~~~~~~`
example test: `test_source_encoding.MiscSourceEncodingTest.test_tokenizer_fstring_warning_in_first_line`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_toplevel_contextvars_async self.assertIn(expected, output, expected) ~~~~~~~~~~~~~^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_repl.py", line 449, in test_toplevel_contextvars_async
    self.assertIn(expected, output, expected)
    ~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: 'toplevel contextvar test: ok' not`
example test: `test_repl.TestAsyncioREPL.test_toplevel_contextvars_async`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_trace_unpack_long_sequence self.assertEqual(counts, {<str>: <n>, <str>: <n>, <str>: <n>}) ~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_sys_settrace.py", line 3038, in test_trace_unpack_long_sequence
    self.assertEqual(counts, {'call': 1, 'line': 301, 'return': 1})
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`
example test: `test_sys_settrace.TestExtendedArgs.test_trace_unpack_long_sequence`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_traceback self.assertIs(type(exc), RuntimeError) ~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^ Asserti`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_concurrent_futures/test_process_pool.py", line 74, in test_traceback
    self.assertIs(type(exc), RuntimeError)
    ~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: <class 'concurrent.futures`
example test: `test_concurrent_futures.test_process_pool.ProcessPoolSpawnProcessPoolExecutorTest.test_traceback`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_tracemalloc stderr = run(<str>, os_helper.TESTFN) File <str>, line <n>, in run res = assert_pyt`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_warnings/__init__.py", line 1231, in test_tracemalloc
    stderr = run('-Wd', os_helper.TESTFN)
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_warnings/__init__.py", line 1221,`
example test: `test_warnings.PyWarningsDisplayTests.test_tracemalloc`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_trashcan_threads self.assertEqual(len(C.inits), len(C.dels)) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_gc.py", line 507, in test_trashcan_threads
    self.assertEqual(len(C.inits), len(C.dels))
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: 9603352 != 0`
example test: `test_gc.GCTests.test_trashcan_threads`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_traverse_frozen_objects gc.freeze() ~~~~~~~~~^^ AttributeError: module <str> has no attribute <`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_gc.py", line 1143, in test_traverse_frozen_objects
    gc.freeze()
    ~~~~~~~~~^^
AttributeError: module 'gc' has no attribute 'freeze'`
example test: `test_gc.GCTests.test_traverse_frozen_objects`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_truncate trace, exitcode = self.get_output(code) ~~~~~~~~~~~~~~~^^^^^^ File <str>, line <n>, in`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_faulthandler.py", line 530, in test_truncate
    trace, exitcode = self.get_output(code)
                      ~~~~~~~~~~~~~~~^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/t`
example test: `test_faulthandler.FaultHandlerTests.test_truncate`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_tuple self.assertEqual(gc.collect(), <n>) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^ AssertionError: <n>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_gc.py", line 111, in test_tuple
    self.assertEqual(gc.collect(), 2)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^
AssertionError: 0 != 2`
example test: `test_gc.GCTests.test_tuple`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_tuple_subclass_as_bases self.assertEqual(type(typ.__bases__), TupleSubclass) ~~~~~~~~~~~~~~~~^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_types.py", line 1807, in test_tuple_subclass_as_bases
    self.assertEqual(type(typ.__bases__), TupleSubclass)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: <class 'tuple`
example test: `test_types.ClassCreationTests.test_tuple_subclass_as_bases`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_tzset self.assertNotEqual(time.gmtime(xmas2002), time.localtime(xmas2002)) ~~~~~~~~~~~~~~~~~~~^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_time.py", line 428, in test_tzset
    self.assertNotEqual(time.gmtime(xmas2002), time.localtime(xmas2002))
    ~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: t`
example test: `test_time.TimeTestCase.test_tzset`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_ucd_510 self.assertTrue(unicodedata.mirrored(<str>)) ~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^ AttributeEr`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_unicodedata.py", line 750, in test_ucd_510
    self.assertTrue(unicodedata.mirrored("\u0f3a"))
                    ~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^
AttributeError: module 'unicodedata' has no attribu`
example test: `test_unicodedata.UnicodeMiscTest.test_ucd_510`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_umask self.assertEqual(expected_mode, st_mode, ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^ msg=f<s`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_subprocess.py", line 2381, in test_umask
    self.assertEqual(expected_mode, st_mode,
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^
                     msg=f'{oct(expected_mode)} != {oct(st_mode)}'`
example test: `test_subprocess.POSIXProcessTestCase.test_umask`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_unbound_builtin_classmethod_noargs self.assertEqual(self._get_summary_line(datetime.datetime.__`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_pydoc/test_pydoc.py", line 1597, in test_unbound_builtin_classmethod_noargs
    self.assertEqual(self._get_summary_line(datetime.datetime.__dict__['utcnow']),
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^`
example test: `test_pydoc.test_pydoc.TestDescriptions.test_unbound_builtin_classmethod_noargs`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_unbound_builtin_classmethod_o self.assertEqual(self._get_summary_line(dict.__dict__[<str>]), ~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_pydoc/test_pydoc.py", line 1605, in test_unbound_builtin_classmethod_o
    self.assertEqual(self._get_summary_line(dict.__dict__['__class_getitem__']),
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^`
example test: `test_pydoc.test_pydoc.TestDescriptions.test_unbound_builtin_classmethod_o`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_unbound_builtin_method_coexist_o self.assertEqual(self._get_summary_line(set.__contains__), ~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_pydoc/test_pydoc.py", line 1589, in test_unbound_builtin_method_coexist_o
    self.assertEqual(self._get_summary_line(set.__contains__),
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`
example test: `test_pydoc.test_pydoc.TestDescriptions.test_unbound_builtin_method_coexist_o`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_unbound_builtin_method_o self.assertEqual(self._get_summary_line(set.add), ~~~~~~~~~~~~~~~~^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_pydoc/test_pydoc.py", line 1581, in test_unbound_builtin_method_o
    self.assertEqual(self._get_summary_line(set.add),
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
        "add(self, obje`
example test: `test_pydoc.test_pydoc.TestDescriptions.test_unbound_builtin_method_o`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_unchanged_size self.assertEqual(self.n, <n>) ~~~~~~~~~~~~~~~~^^^^^^^^^^^ AssertionError: <n> !=`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_pyexpat.py", line 699, in test_unchanged_size
    self.assertEqual(self.n, 1)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^
AssertionError: 0 != 1`
example test: `test_pyexpat.ChardataBufferTest.test_unchanged_size`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_undecodable_code raise AssertionError(<str> % (stdout, pattern)) AssertionError: b<str> doesn<s`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_cmd_line.py", line 289, in test_undecodable_code
    raise AssertionError("%a doesn't start with %a" % (stdout, pattern))
AssertionError: b"'\\ufffd' utf-8\n" doesn't start with b"'\\xff' "`
example test: `test_cmd_line.CmdLineTest.test_undecodable_code`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_undecodable_env self.assertEqual(stdout.decode(<str>), ascii(decoded_value)) ~~~~~~~~~~~~~~~~^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_subprocess.py", line 2948, in test_undecodable_env
    self.assertEqual(stdout.decode('ascii'), ascii(decoded_value))
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionErr`
example test: `test_subprocess.POSIXProcessTestCase.test_undecodable_env`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_unexpected_end_of_data self.assertCorrectUTF8Decoding(bytes.fromhex(seq), <str>, ~~~~~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_str.py", line 2071, in test_unexpected_end_of_data
    self.assertCorrectUTF8Decoding(bytes.fromhex(seq), '\ufffd',
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                `
example test: `test_str.StrTest.test_unexpected_end_of_data`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_unfinished_generator self.check_events(g, [(<n>, <str>, g_ident, None), ~~~~~~~~~~~~~~~~~^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_sys_setprofile.py", line 272, in test_unfinished_generator
    self.check_events(g, [(1, 'call', g_ident, None),
    ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                          (2, `
example test: `test_sys_setprofile.ProfileHookTestCase.test_unfinished_generator`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_unicode_error self.assertTrue(output.startswith(<str>), output) ~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_code_module.py", line 108, in test_unicode_error
    self.assertTrue(output.startswith('UnicodeEncodeError: '), output)
    ~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Assert`
example test: `test_code_module.TestInteractiveConsole.test_unicode_error`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_unicode_escape self.assertEqual(codecs.unicode_escape_decode(r<str>), (<str>, <n>)) ~~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_codecs.py", line 2604, in test_unicode_escape
    self.assertEqual(codecs.unicode_escape_decode(r"\u1234"), ("\u1234", 6))
                     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^
TypeError: a `
example test: `test_codecs.TypesTest.test_unicode_escape`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_unicode_guard_env self.assertIsNotNone(guard, f<str>) ~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_regrtest.py", line 2008, in test_unicode_guard_env
    self.assertIsNotNone(guard, f"{setup.UNICODE_GUARD_ENV} not set")
    ~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Assert`
example test: `test_regrtest.ArgsTestCase.test_unicode_guard_env`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_unicodedata_unload_reload script_helper.assert_python_ok(<str>, code) ~~~~~~~~~~~~~~~~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_unicodedata.py", line 709, in test_unicodedata_unload_reload
    script_helper.assert_python_ok("-c", code)
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^
  File "/work/.harness/work/cpython-core/c`
example test: `test_unicodedata.UnicodeMiscTest.test_unicodedata_unload_reload`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_unicodedecodeerror self.check_exceptionobjectargs( ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^ UnicodeDecod`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_codeccallbacks.py", line 362, in test_unicodedecodeerror
    self.check_exceptionobjectargs(
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^
        UnicodeDecodeError,
        ^^^^^^^^^^^^^^^^^^^
        ["as`
example test: `test_codeccallbacks.CodecCallbackTest.test_unicodedecodeerror`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_unicodeencodeerror self.check_exceptionobjectargs( ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^ UnicodeEncod`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_codeccallbacks.py", line 330, in test_unicodeencodeerror
    self.check_exceptionobjectargs(
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^
        UnicodeEncodeError,
        ^^^^^^^^^^^^^^^^^^^
        ["as`
example test: `test_codeccallbacks.CodecCallbackTest.test_unicodeencodeerror`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_unicodetranslateerror self.check_exceptionobjectargs( ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^ UnicodeTr`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_codeccallbacks.py", line 374, in test_unicodetranslateerror
    self.check_exceptionobjectargs(
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^
        UnicodeTranslateError,
        ^^^^^^^^^^^^^^^^^^^^^^
   `
example test: `test_codeccallbacks.CodecCallbackTest.test_unicodetranslateerror`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_uninamereplace self.assertEqual(sin.encode(<str>, <str>), sout) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_codeccallbacks.py", line 145, in test_uninamereplace
    self.assertEqual(sin.encode("ascii", "test.uninamereplace"), sout)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
As`
example test: `test_codeccallbacks.CodecCallbackTest.test_uninamereplace`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_union self.assertEqual(len(u), len(self.items) + len(self.items2)) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_weakset.py", line 87, in test_union
    self.assertEqual(len(u), len(self.items) + len(self.items2))
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: 6 != 5`
example test: `test_weakset.TestWeakSet.test_union`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_union_type self.assertIn(types.UnionType.__doc__.strip().splitlines()[<n>], doc) ~~~~~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_pydoc/test_pydoc.py", line 1460, in test_union_type
    self.assertIn(types.UnionType.__doc__.strip().splitlines()[0], doc)
                  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^^
AttributeError: 'NoneTy`
example test: `test_pydoc.test_pydoc.TestDescriptions.test_union_type`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_unload_tests output = self.run_python(args) File <str>, line <n>, in run_python if <str> in sys`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_regrtest.py", line 2220, in test_unload_tests
    output = self.run_python(args)
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_regrtest.py", line 840, in run_python
    if 'uo`
example test: `test_regrtest.ArgsTestCase.test_unload_tests`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_unpickler_instance_attribute old_persistent_load = unpickler.persistent_load ^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_pickle.py", line 279, in test_unpickler_instance_attribute
    old_persistent_load = unpickler.persistent_load
                          ^^^^^^^^^^^^^^^^^^^^^^^^^
AttributeError: persistent_load`
example test: `test_pickle.CIdPersPicklerTests.test_unpickler_instance_attribute`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_unpickler_super_instance_attribute self.assertEqual(unpickler.load(), <str>) ~~~~~~~~~~~~~~^^ F`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_pickle.py", line 325, in test_unpickler_super_instance_attribute
    self.assertEqual(unpickler.load(), 'abc')
                     ~~~~~~~~~~~~~~^^
  File "/work/.harness/work/cpython-core/cpython`
example test: `test_pickle.CIdPersPicklerTests.test_unpickler_super_instance_attribute`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_unraisable_exc output = self.run_tests(<str>, <str>, testname, exitcode=EXITCODE_ENV_CHANGED) F`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_regrtest.py", line 1923, in test_unraisable_exc
    output = self.run_tests("--fail-env-changed", "-v", testname,
                            exitcode=EXITCODE_ENV_CHANGED)
  File "/work/.harness/w`
example test: `test_regrtest.ArgsTestCase.test_unraisable_exc`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_unraisablehook self.assertEqual(events[<n>][<n>], <str>) ~~~~~~^^^ IndexError: list index out o`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_audit.py", line 98, in test_unraisablehook
    self.assertEqual(events[0][0], "sys.unraisablehook")
                     ~~~~~~^^^
IndexError: list index out of range`
example test: `test_audit.AuditTest.test_unraisablehook`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_urandom_failure assert_python_ok(<str>, code) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^ File <str>, line <n>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_os.py", line 2075, in test_urandom_failure
    assert_python_ok('-c', code)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/support/script_helper.py"`
example test: `test_os.URandomFDTests.test_urandom_failure`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_urandom_fd_closed rc, out, err = assert_python_ok(<str>, code) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^ Fi`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_os.py", line 2089, in test_urandom_fd_closed
    rc, out, err = assert_python_ok('-Sc', code)
                   ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/`
example test: `test_os.URandomFDTests.test_urandom_fd_closed`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_urandom_fd_reopened rc, out, err = assert_python_ok(<str>, code) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^ `

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_os.py", line 2122, in test_urandom_fd_reopened
    rc, out, err = assert_python_ok('-Sc', code)
                   ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-roo`
example test: `test_os.URandomFDTests.test_urandom_fd_reopened`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_usedforsecurity_false cons(usedforsecurity=False) ~~~~^^^^^^^^^^^^^^^^^^^^^^^ _hashlib.Unsuppor`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_hashlib.py", line 242, in test_usedforsecurity_false
    cons(usedforsecurity=False)
    ~~~~^^^^^^^^^^^^^^^^^^^^^^^
_hashlib.UnsupportedDigestmodError: NoSuchAlgorithmException: BLAKE2B-512 Messag`
example test: `test_hashlib.HashLibTestCase.test_usedforsecurity_false`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_usedforsecurity_true cons(usedforsecurity=True) ~~~~^^^^^^^^^^^^^^^^^^^^^^ _hashlib.Unsupported`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_hashlib.py", line 231, in test_usedforsecurity_true
    cons(usedforsecurity=True)
    ~~~~^^^^^^^^^^^^^^^^^^^^^^
_hashlib.UnsupportedDigestmodError: NoSuchAlgorithmException: BLAKE2B-512 MessageDi`
example test: `test_hashlib.HashLibTestCase.test_usedforsecurity_true`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_user_similar self.assertEqual(user_path, expected) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^ Assert`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_sysconfig.py", line 442, in test_user_similar
    self.assertEqual(user_path, expected)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^
AssertionError: '/home/node/.local/lib/python3.13' != '/opt/elide/l`
example test: `test_sysconfig.TestSysConfig.test_user_similar`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_utf8_non_utf8_comment_line_error self.check_script_error(src, ~~~~~~~~~~~~~~~~~~~~~~~^^^^^ br<s`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_source_encoding.py", line 308, in test_utf8_non_utf8_comment_line_error
    self.check_script_error(src,
    ~~~~~~~~~~~~~~~~~~~~~~~^^^^^
            br"'utf-8' codec can't decode byte|"
          `
example test: `test_source_encoding.FileSourceEncodingTest.test_utf8_non_utf8_comment_line_error`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_utime_nonexistent self.assertEqual(cm.exception.filename, filename) ~~~~~~~~~~~~~~~~^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_os.py", line 924, in test_utime_nonexistent
    self.assertEqual(cm.exception.filename, filename)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: None != 'nonexistent'`
example test: `test_os.UtimeTests.test_utime_nonexistent`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_valid self.assertEqual(getattr(T, <str>), <n>) ~~~~~~~^^^^^^^^^^^^^ AttributeError: type object`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_unicode_identifiers.py", line 12, in test_valid
    self.assertEqual(getattr(T, "\u03bc"), 2)
                     ~~~~~~~^^^^^^^^^^^^^
AttributeError: type object 'T' has no attribute 'μ'`
example test: `test_unicode_identifiers.PEP3131Test.test_valid`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_value self.run_worker(self._test_value, o) ~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^ File <str>, lin`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/_test_multiprocessing.py", line 6586, in test_value
    self.run_worker(self._test_value, o)
    ~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/_test`
example test: `test_multiprocessing_fork.test_misc.TestSyncManagerTypes.test_value`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_verbose rc, out, err = assert_python_ok(<str>) ~~~~~~~~~~~~~~~~^^^^^^ File <str>, line <n>, in `

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_cmd_line.py", line 106, in test_verbose
    rc, out, err = assert_python_ok('-v')
                   ~~~~~~~~~~~~~~~~^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/support/sc`
example test: `test_cmd_line.CmdLineTest.test_verbose`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_verbose3 output = self.run_tests(<str>, testname) File <str>, line <n>, in run_tests return sel`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_regrtest.py", line 2338, in test_verbose3
    output = self.run_tests("--verbose3", testname)
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_regrtest.py", line 1000, in run_tes`
example test: `test_regrtest.ArgsTestCase.test_verbose3`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_wait output = self.run_tests(<str>, test, input=<str>) File <str>, line <n>, in run_tests retur`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_regrtest.py", line 1234, in test_wait
    output = self.run_tests("--wait", test, input='key')
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_regrtest.py", line 1000, in run_te`
example test: `test_regrtest.ArgsTestCase.test_wait`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_wait self.assertEqual(messages, expected) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^ AssertionError: `

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/_test_multiprocessing.py", line 5314, in test_wait
    self.assertEqual(messages, expected)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^
AssertionError: Lists differ: [] != [(0, 35744), (0, 35746), (0, 3574`
example test: `test_multiprocessing_fork.test_misc.TestWait.test_wait`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_wait_integer self.assertTrue(sem.acquire(timeout=<n>)) ~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/_test_multiprocessing.py", line 5403, in test_wait_integer
    self.assertTrue(sem.acquire(timeout=20))
    ~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: False is not true`
example test: `test_multiprocessing_fork.test_misc.TestWait.test_wait_integer`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_wait_slow self.test_wait(True) ~~~~~~~~~~~~~~^^^^^^ File <str>, line <n>, in test_wait self.ass`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/_test_multiprocessing.py", line 5362, in test_wait_slow
    self.test_wait(True)
    ~~~~~~~~~~~~~~^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/_test_multiprocessing.py", line 5`
example test: `test_multiprocessing_fork.test_misc.TestWait.test_wait_slow`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_waitpid self.check_waitpid(code=<str>, exitcode=<n>) ~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_os.py", line 3423, in test_waitpid
    self.check_waitpid(code='pass', exitcode=0)
    ~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/tes`
example test: `test_os.PidTests.test_waitpid`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_waitstatus_to_exitcode self.check_waitpid(code, exitcode=exitcode) ~~~~~~~~~~~~~~~~~~^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_os.py", line 3428, in test_waitstatus_to_exitcode
    self.check_waitpid(code, exitcode=exitcode)
    ~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-ro`
example test: `test_os.PidTests.test_waitstatus_to_exitcode`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_waitstatus_to_exitcode_kill self.check_waitpid(code, exitcode=-signum, callback=kill_process) ~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_os.py", line 3463, in test_waitstatus_to_exitcode_kill
    self.check_waitpid(code, exitcode=-signum, callback=kill_process)
    ~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  `
example test: `test_os.PidTests.test_waitstatus_to_exitcode_kill`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_warning_notimplemented self.assertWarns(DeprecationWarning, bool, NotImplemented) ~~~~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_builtin.py", line 2187, in test_warning_notimplemented
    self.assertWarns(DeprecationWarning, bool, NotImplemented)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: `
example test: `test_builtin.BuiltinTest.test_warning_notimplemented`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_warnings with self.assertWarnsRegex(DeprecationWarning, ~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_codecs.py", line 1209, in test_warnings
    with self.assertWarnsRegex(DeprecationWarning,
         ~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^
            r"invalid escape sequence '\\%c'" % (i-32))`
example test: `test_codecs.EscapeDecodeTest.test_warnings`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_warnings_filter_precedence self.assertEqual(out, expected_filters) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_cmd_line.py", line 820, in test_warnings_filter_precedence
    self.assertEqual(out, expected_filters)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: 'once::UserWarning default::Deprec`
example test: `test_cmd_line.CmdLineTest.test_warnings_filter_precedence`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_wbits with self.assertRaisesRegex(zlib.error, <str>): ~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_zlib.py", line 821, in test_wbits
    with self.assertRaisesRegex(zlib.error, 'invalid window size'):
         ~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: error not ra`
example test: `test_zlib.CompressObjectTestCase.test_wbits`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_weak_destroy_and_mutate_while_iterating self.assertNotIn(u, s) ~~~~~~~~~~~~~~~~^^^^^^ Assertion`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_weakset.py", line 391, in test_weak_destroy_and_mutate_while_iterating
    self.assertNotIn(u, s)
    ~~~~~~~~~~~~~~~~^^^^^^
AssertionError: 'Z' unexpectedly found in {<weakref at 1048778800; to 'U`
example test: `test_weakset.TestWeakSet.test_weak_destroy_and_mutate_while_iterating`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_weak_destroy_while_iterating self.assertEqual(len(s), len(items)) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_weakset.py", line 367, in test_weak_destroy_while_iterating
    self.assertEqual(len(s), len(items))
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^
AssertionError: 3 != 2`
example test: `test_weakset.TestWeakSet.test_weak_destroy_while_iterating`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_weakref self.assertEqual(flag, True) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^ AssertionError: False != True`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_xml_etree.py", line 2700, in test_weakref
    self.assertEqual(flag, True)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^
AssertionError: False != True`
example test: `test_xml_etree_c.BasicElementTest.test_weakref`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_weakref_slot_normal_base_weakref_slot self.assertIs(a.__weakref__, a_ref) ~~~~~~~~~~~~~^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_dataclasses/__init__.py", line 3605, in test_weakref_slot_normal_base_weakref_slot
    self.assertIs(a.__weakref__, a_ref)
    ~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^
AssertionError: None is not <weakr`
example test: `test_dataclasses.TestSlots.test_weakref_slot_normal_base_weakref_slot`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_weakref_slot_subclass_no_weakref_slot self.assertIs(a.__weakref__, a_ref) ~~~~~~~~~~~~~^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_dataclasses/__init__.py", line 3589, in test_weakref_slot_subclass_no_weakref_slot
    self.assertIs(a.__weakref__, a_ref)
    ~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^
AssertionError: None is not <weakr`
example test: `test_dataclasses.TestSlots.test_weakref_slot_subclass_no_weakref_slot`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_weakref_slot_subclass_weakref_slot self.assertIs(a.__weakref__, a_ref) ~~~~~~~~~~~~~^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_dataclasses/__init__.py", line 3572, in test_weakref_slot_subclass_weakref_slot
    self.assertIs(a.__weakref__, a_ref)
    ~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^
AssertionError: None is not <weakref `
example test: `test_dataclasses.TestSlots.test_weakref_slot_subclass_weakref_slot`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_worker_decode_error output = self.run_tests(<str>, <str>, <str>, testname) File <str>, line <n>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_regrtest.py", line 2098, in test_worker_decode_error
    output = self.run_tests("--fail-env-changed", "-v", "-j1", testname)
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_reg`
example test: `test_regrtest.ArgsTestCase.test_worker_decode_error`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_worker_output_on_failure output = self.run_tests(<str>, testname, exitcode=EXITCODE_BAD_TEST, e`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_regrtest.py", line 2315, in test_worker_output_on_failure
    output = self.run_tests("-j1", testname,
                            exitcode=EXITCODE_BAD_TEST,
                            env=env)
 `
example test: `test_regrtest.ArgsTestCase.test_worker_output_on_failure`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_write encodings.utf_8.StreamReader, encodings.utf_8.StreamWriter) ^^^^^^^^^^^^^^^ AttributeErro`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_codecs.py", line 3582, in test_write
    encodings.utf_8.StreamReader, encodings.utf_8.StreamWriter)
    ^^^^^^^^^^^^^^^
AttributeError: module 'encodings' has no attribute 'utf_8'`
example test: `test_codecs.StreamRecoderTest.test_write`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_write_mutating_buffer n = memio.write(b) File <str>, line <n>, in write with memoryview(b) as v`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_memoryio.py", line 647, in test_write_mutating_buffer
    n = memio.write(b)
  File "/opt/elide/lib/resources/python/python-home/lib/python3.13/_pyio.py", line 950, in write
    with memoryview(b) `
example test: `test_memoryio.PyBytesIOTest.test_write_mutating_buffer`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_write_mutating_buffer n = memio.write(b) TypeError: a bytes-like object is required, not <str>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_memoryio.py", line 647, in test_write_mutating_buffer
    n = memio.write(b)
TypeError: a bytes-like object is required, not 'B'`
example test: `test_memoryio.CBytesIOTest.test_write_mutating_buffer`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_writelines encodings.ascii.StreamReader, encodings.ascii.StreamWriter) ^^^^^^^^^^^^^^^ Attribut`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_codecs.py", line 3573, in test_writelines
    encodings.ascii.StreamReader, encodings.ascii.StreamWriter)
    ^^^^^^^^^^^^^^^
AttributeError: module 'encodings' has no attribute 'ascii'`
example test: `test_codecs.StreamRecoderTest.test_writelines`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_xml output = self.run_tests(testname, <str>, filename, exitcode=EXITCODE_BAD_TEST) File <str>, `

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_regrtest.py", line 2364, in test_xml
    output = self.run_tests(testname, "--junit-xml", filename,
                            exitcode=EXITCODE_BAD_TEST)
  File "/work/.harness/work/cpython-core/`
example test: `test_regrtest.ArgsTestCase.test_xml`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_xoption self.assertEqual(out, <str>) ~~~~~~~~~~~~~~~~^^^^^^^^^^ AssertionError: <str> != <str> `

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_utf8_mode.py", line 52, in test_xoption
    self.assertEqual(out, '1')
    ~~~~~~~~~~~~~~~~^^^^^^^^^^
AssertionError: '0' != '1'
- 0
+ 1`
example test: `test_utf8_mode.UTF8ModeTests.test_xoption`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_xoptions self.assertEqual(opts, {<str>: True, <str>: <str>}) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_cmd_line.py", line 127, in test_xoptions
    self.assertEqual(opts, {'a': True, 'b': 'c,d=e'})
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: {} != {'a': True, 'b': 'c,d=e'}
`
example test: `test_cmd_line.CmdLineTest.test_xoptions`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_zipfile self._check_script(zip_name) ~~~~~~~~~~~~~~~~~~^^^^^^^^^^ File <str>, line <n>, in _che`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_multiprocessing_main_handling.py", line 227, in test_zipfile
    self._check_script(zip_name)
    ~~~~~~~~~~~~~~~~~~^^^^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_mu`
example test: `test_multiprocessing_main_handling.SpawnCmdLineTest.test_zipfile`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_zipfile_compiled self._check_script(zip_name) ~~~~~~~~~~~~~~~~~~^^^^^^^^^^ File <str>, line <n>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_multiprocessing_main_handling.py", line 236, in test_zipfile_compiled
    self._check_script(zip_name)
    ~~~~~~~~~~~~~~~~~~^^^^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/tes`
example test: `test_multiprocessing_main_handling.SpawnCmdLineTest.test_zipfile_compiled`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test_zombie_fast_process_del with warnings_helper.check_warnings((<str>, ResourceWarning)): ~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_subprocess.py", line 3333, in test_zombie_fast_process_del
    with warnings_helper.check_warnings(('', ResourceWarning)):
         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^
  File "/op`
example test: `test_subprocess.POSIXProcessTestCase.test_zombie_fast_process_del`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test1 self.assertEqual(self.stuff, ~~~~~~~~~~~~~~~~^^^^^^^^^^^^ [<str>, <str>, <str>, <str>, <str>, `

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_pyexpat.py", line 509, in test1
    self.assertEqual(self.stuff,
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^
                     ["<a>", "1", "<b>", "2", "\n", "3", "<c>", "4\n5"],
                     ^^^^^`
example test: `test_pyexpat.BufferTextTest.test1`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in test2 self.assertEqual(self.stuff, [<str>], ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^ <str>) ^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_pyexpat.py", line 515, in test2
    self.assertEqual(self.stuff, ["1<2> \n 3"],
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^
                     "buffered text not properly collapsed")
        `
example test: `test_pyexpat.BufferTextTest.test2`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in testCbrt self.assertRaises(TypeError, math.cbrt) ^^^^^^^^^ AttributeError: module <str> has no attri`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_math.py", line 390, in testCbrt
    self.assertRaises(TypeError, math.cbrt)
                                 ^^^^^^^^^
AttributeError: module 'math' has no attribute 'cbrt'`
example test: `test_math.MathTests.testCbrt`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in testCrucialConstants socket.SOCK_RAW AttributeError: module <str> has no attribute <str>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_socket.py", line 1045, in testCrucialConstants
    socket.SOCK_RAW
AttributeError: module 'socket' has no attribute 'SOCK_RAW'`
example test: `test_socket.GeneralModuleTests.testCrucialConstants`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in testDefaults self._check_defaults(self.serv) ~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^ File <str>, line <n>, i`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_socket.py", line 5082, in testDefaults
    self._check_defaults(self.serv)
    ~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_socket.py", line 5`
example test: `test_socket.BasicSocketPairTest.testDefaults`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in testEmptyPy self.doTest(None, files, TESTMOD) ~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^ File <str>, line <n>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_zipimport.py", line 255, in testEmptyPy
    self.doTest(None, files, TESTMOD)
    ~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_zipimport.py"`
example test: `test_zipimport.CompressedZipImportTestCase.testEmptyPy`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in testEncodings self.assertEqual(doc.toxml(<str>), ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^ <str> ^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_minidom.py", line 1260, in testEncodings
    self.assertEqual(doc.toxml('utf-16'),
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^
        '<?xml version="1.0" encoding="utf-16"?>'
        ^^^^^^^^^^^^^^`
example test: `test_minidom.MinidomTest.testEncodings`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in testEOFError self.assertRaises(EOFError, zlibd.decompress, b<str>) ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_zlib.py", line 981, in testEOFError
    self.assertRaises(EOFError, zlibd.decompress, b"anything")
    ~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: EOFError not raised`
example test: `test_zlib.ZlibDecompressorTest.testEOFError`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in testExp2 self.assertRaises(TypeError, math.exp2) ^^^^^^^^^ AttributeError: module <str> has no attri`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_math.py", line 520, in testExp2
    self.assertRaises(TypeError, math.exp2)
                                 ^^^^^^^^^
AttributeError: module 'math' has no attribute 'exp2'`
example test: `test_math.MathTests.testExp2`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in testFloat self.helper3(floatobj) ~~~~~~~~~~~~^^^^^^^^^^ File <str>, line <n>, in helper3 self.assert`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_marshal.py", line 619, in testFloat
    self.helper3(floatobj)
    ~~~~~~~~~~~~^^^^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_marshal.py", line 603, in helper3
    s`
example test: `test_marshal.InstancingTestCase.testFloat`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in testInt self.helper3(intobj, simple=True) ~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^ File <str>, line <n>, in`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_marshal.py", line 614, in testInt
    self.helper3(intobj, simple=True)
    ~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_marshal.py", line 6`
example test: `test_marshal.InstancingTestCase.testInt`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in testLargeTimeout msg = conn.recv(len(MSG)) OSError: [Errno <n>] Invalid argument`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_socket.py", line 5383, in testLargeTimeout
    msg = conn.recv(len(MSG))
OSError: [Errno 22] Invalid argument`
example test: `test_socket.NonBlockingTCPTests.testLargeTimeout`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in testLeaks self.assertEqual(Foo.count, <n>) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^ AssertionError: <n> != <n>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_scope.py", line 478, in testLeaks
    self.assertEqual(Foo.count, 0)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^
AssertionError: 100 != 0`
example test: `test_scope.ScopeTests.testLeaks`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in testMakefileCloseSocketDestroy self.assertEqual(refcount_before - <n>, refcount_after) ~~~~~~~~~~~~~`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_socket.py", line 5606, in testMakefileCloseSocketDestroy
    self.assertEqual(refcount_before - 1, refcount_after)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: 9 != 10`
example test: `test_socket.UnbufferedFileObjectClassTestCase.testMakefileCloseSocketDestroy`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in testNoIntern self.assertNotEqual(id(s), id(self.strobj)) ~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_marshal.py", line 713, in testNoIntern
    self.assertNotEqual(id(s), id(self.strobj))
    ~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: 4803 == 4803`
example test: `test_marshal.InterningTestCase.testNoIntern`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in testSendtoErrors self.assertIn(<str>, str(cm.exception)) ~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_socket.py", line 1033, in testSendtoErrors
    self.assertIn('(1 given)', str(cm.exception))
    ~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: '(1 given)' not found in "socket.sendt`
example test: `test_socket.GeneralModuleTests.testSendtoErrors`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in testSetBlocking self.assert_sock_timeout(self.serv, None) ~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^ `

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_socket.py", line 5231, in testSetBlocking
    self.assert_sock_timeout(self.serv, None)
    ~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/`
example test: `test_socket.NonBlockingTCPTests.testSetBlocking`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in testStr self.helper3(strobj) ~~~~~~~~~~~~^^^^^^^^ File <str>, line <n>, in helper3 self.assertGreate`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_marshal.py", line 624, in testStr
    self.helper3(strobj)
    ~~~~~~~~~~~~^^^^^^^^
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_marshal.py", line 603, in helper3
    self.as`
example test: `test_marshal.InstancingTestCase.testStr`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in testUnencodableAddr self.assertEqual(self.sock.getsockname(), path) ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_socket.py", line 6163, in testUnencodableAddr
    self.assertEqual(self.sock.getsockname(), path)
    ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
AssertionError: '/work/.harness/work/cpython-co`
example test: `test_socket.TestUnixDomain.testUnencodableAddr`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in wrapper return f(self, maxsize) File <str>, line <n>, in test_hash self.assertNotEqual(h1, hash(s)) `

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/support/__init__.py", line 1208, in wrapper
    return f(self, maxsize)
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_bigmem.py", line 572, in test_hash
    self.assertNotEqual(h1,`
example test: `test_bigmem.StrTest.test_hash`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in wrapper return f(self, maxsize) File <str>, line <n>, in test_lstrip self.assertTrue(stripped is s) `

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/support/__init__.py", line 1208, in wrapper
    return f(self, maxsize)
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_bigmem.py", line 273, in test_lstrip
    self.assertTrue(strip`
example test: `test_bigmem.BytesTest.test_lstrip`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in wrapper return f(self, maxsize) File <str>, line <n>, in test_rstrip self.assertTrue(stripped is s) `

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/support/__init__.py", line 1208, in wrapper
    return f(self, maxsize)
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_bigmem.py", line 345, in test_rstrip
    self.assertTrue(strip`
example test: `test_bigmem.BytesTest.test_rstrip`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in wrapper return f(self, maxsize) File <str>, line <n>, in test_slice_and_getitem self.assertRaises(In`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/support/__init__.py", line 1208, in wrapper
    return f(self, maxsize)
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_bigmem.py", line 530, in test_slice_and_getitem
    self.asser`
example test: `test_bigmem.StrTest.test_slice_and_getitem`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in wrapper return func_or_class(*args, **kwargs) File <str>, line <n>, in test_ressources_gced_in_worke`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/support/hashlib_helper.py", line 49, in wrapper
    return func_or_class(*args, **kwargs)
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_concurrent_futures/test_process_pool.py", li`
example test: `test_concurrent_futures.test_process_pool.ProcessPoolSpawnProcessPoolExecutorTest.test_ressources_gced_in_workers`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in wrapper return func(*args, **kwargs) File <str>, line <n>, in test_encoded_file do_test(<str>, <str>`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/support/__init__.py", line 2791, in wrapper
    return func(*args, **kwargs)
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_traceback.py", line 457, in test_encoded_file
    do_test`
example test: `test_traceback.TracebackCases.test_encoded_file`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in wrapper return func(*args, **kwargs) File <str>, line <n>, in test_EOFS_with_file self.assertEqual(e`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/support/__init__.py", line 2791, in wrapper
    return func(*args, **kwargs)
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_eof.py", line 55, in test_EOFS_with_file
    self.assertE`
example test: `test_eof.EOFTestCase.test_EOFS_with_file`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in wrapper return func(*args, **kwargs) File <str>, line <n>, in test_failed_import_during_compiling re`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/support/__init__.py", line 2791, in wrapper
    return func(*args, **kwargs)
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_unicodedata.py", line 690, in test_failed_import_during_c`
example test: `test_unicodedata.UnicodeMiscTest.test_failed_import_during_compiling`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in wrapper return func(*args, **kwargs) File <str>, line <n>, in test_ioencoding self.assertEqual(out, `

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/support/__init__.py", line 2791, in wrapper
    return func(*args, **kwargs)
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_sys.py", line 926, in test_ioencoding
    self.assertEqua`
example test: `test_sys.SysModuleTest.test_ioencoding`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in wrapper return func(*args, **kwargs) File <str>, line <n>, in test_line_continuation_EOF_from_file_b`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/support/__init__.py", line 2791, in wrapper
    return func(*args, **kwargs)
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_eof.py", line 134, in test_line_continuation_EOF_from_fil`
example test: `test_eof.EOFTestCase.test_line_continuation_EOF_from_file_bpo2180`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in wrapper return func(*args, **kwargs) File <str>, line <n>, in test_no_caret_with_no_debug_ranges_fla`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/support/__init__.py", line 2791, in wrapper
    return func(*args, **kwargs)
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_traceback.py", line 136, in test_no_caret_with_no_debug_r`
example test: `test_traceback.TracebackCases.test_no_caret_with_no_debug_ranges_flag`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in wrapper return func(*args, **kwargs) File <str>, line <n>, in test_sys_tracebacklimit check(<n>, tra`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/support/__init__.py", line 2791, in wrapper
    return func(*args, **kwargs)
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_sys.py", line 1266, in test_sys_tracebacklimit
    check(`
example test: `test_sys.SysModuleTest.test_sys_tracebacklimit`

### 1 × `Traceback (most recent call last): File <str>, line <n>, in wrapper return test(self, *args, **kwargs) File <str>, line <n>, in test_memoryview_compare_special_`

distinct messages:
- `Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/support/warnings_helper.py", line 57, in wrapper
    return test(self, *args, **kwargs)
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_buffer.py", line 3242, in test_memoryview_comp`
example test: `test_buffer.TestBufferProtocol.test_memoryview_compare_special_cases_deprecated_u_type_code`

### 1 × `TypeError: BaseExceptionGroup.__new__() missing <n> required positional argument: <str> During handling of the above exception, another exception occurred: Trac`

distinct messages:
- `TypeError: BaseExceptionGroup.__new__() missing 1 required positional argument: 'b'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_exception_group.py", line 25, in test_bad_E`
example test: `test_exception_group.BadConstructorArgs.test_bad_EG_construction__too_many_args`

### 1 × `TypeError: can<str>args<str>t delete BaseException.args"`

distinct messages:
- `TypeError: can't delete BaseException.args

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_exceptions.py", line 674, in test_invalid_delattr
    self.assertRaisesRegex(TE, msg`
example test: `test_exceptions.ExceptionTests.test_invalid_delattr`

### 1 × `TypeError: can<str>t send non-None value to a just-started generator"`

distinct messages:
- `TypeError: can't send non-None value to a just-started generator

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_asyncgen.py", line 345, in test_async_gen_exception_10
    wit`
example test: `test_asyncgen.AsyncGenTest.test_async_gen_exception_10`

### 1 × `TypeError: Context() takes <n> positional argument but <n> were given During handling of the above exception, another exception occurred: Traceback (most recent`

distinct messages:
- `TypeError: Context() takes 1 positional argument but 2 were given

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_context.py", line 78, in test_context_new_1
    with self.ass`
example test: `test_context.ContextTest.test_context_new_1`

### 1 × `TypeError: ContextVar() missing <n> required positional argument: <str> During handling of the above exception, another exception occurred: Traceback (most rece`

distinct messages:
- `TypeError: ContextVar() missing 1 required positional argument: 'name'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_context.py", line 29, in test_context_var_new_1
    with`
example test: `test_context.ContextTest.test_context_var_new_1`

### 1 × `TypeError: expected string or bytes-like object During handling of the above exception, another exception occurred: Traceback (most recent call last): File <str`

distinct messages:
- `TypeError: expected string or bytes-like object

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_re.py", line 2474, in test_bug_40736
    with self.assertRaisesRegex(TypeError,`
example test: `test_re.ReTests.test_bug_40736`

### 1 × `TypeError: function() takes from <n> to <n> positional arguments but <n> were given During handling of the above exception, another exception occurred: Tracebac`

distinct messages:
- `TypeError: function() takes from 3 to 6 positional arguments but 7 were given

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_types.py", line 2411, in test_function_type_wrong`
example test: `test_types.FunctionTests.test_function_type_wrong_defaults`

### 1 × `TypeError: keywords must be strings During handling of the above exception, another exception occurred: Traceback (most recent call last): File <str>, line <n>,`

distinct messages:
- `TypeError: keywords must be strings

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_ast/test_ast.py", line 3162, in test_non_str_kwarg
    with self.assertRaisesRegex(TypeErro`
example test: `test_ast.test_ast.ASTConstructorTests.test_non_str_kwarg`

### 1 × `TypeError: max() missing <n> required positional argument: <str> During handling of the above exception, another exception occurred: Traceback (most recent call`

distinct messages:
- `TypeError: max() missing 1 required positional argument: 'a'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_builtin.py", line 1278, in test_max
    with self.assertRaisesRege`
example test: `test_builtin.BuiltinTest.test_max`

### 1 × `TypeError: meth_fastcall() got an unexpected keyword argument <str> During handling of the above exception, another exception occurred: Traceback (most recent c`

distinct messages:
- `TypeError: meth_fastcall() got an unexpected keyword argument 'k'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_call.py", line 375, in test_fastcall_error_kw
    self.assert`
example test: `test_call.TestCallingConventions.test_fastcall_error_kw`

### 1 × `TypeError: meth_noargs() got an unexpected keyword argument <str> During handling of the above exception, another exception occurred: Traceback (most recent cal`

distinct messages:
- `TypeError: meth_noargs() got an unexpected keyword argument 'k'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_call.py", line 357, in test_noargs_error_kw
    self.assertRais`
example test: `test_call.TestCallingConventions.test_noargs_error_kw`

### 1 × `TypeError: meth_noargs() takes <n> positional arguments but <n> was given During handling of the above exception, another exception occurred: Traceback (most re`

distinct messages:
- `TypeError: meth_noargs() takes 0 positional arguments but 1 was given

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_call.py", line 339, in test_noargs_error_arg
    self.ass`
example test: `test_call.TestCallingConventions.test_noargs_error_arg`

### 1 × `TypeError: meth_o() missing <n> required positional argument: <str> During handling of the above exception, another exception occurred: Traceback (most recent c`

distinct messages:
- `TypeError: meth_o() missing 1 required positional argument: 'arg'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_call.py", line 305, in test_o_error_no_arg
    self.assertRai`
example test: `test_call.TestCallingConventions.test_o_error_no_arg`

### 1 × `TypeError: meth_varargs() got an unexpected keyword argument <str> During handling of the above exception, another exception occurred: Traceback (most recent ca`

distinct messages:
- `TypeError: meth_varargs() got an unexpected keyword argument 'k'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_call.py", line 281, in test_varargs_error_kw
    self.assertRa`
example test: `test_call.TestCallingConventions.test_varargs_error_kw`

### 1 × `TypeError: MethInstance.meth_fastcall() got an unexpected keyword argument <str> During handling of the above exception, another exception occurred: Traceback (`

distinct messages:
- `TypeError: MethInstance.meth_fastcall() got an unexpected keyword argument 'k'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_call.py", line 375, in test_fastcall_error_kw
  `
example test: `test_call.TestCallingConventionsInstance.test_fastcall_error_kw`

### 1 × `TypeError: MethInstance.meth_noargs() got an unexpected keyword argument <str> During handling of the above exception, another exception occurred: Traceback (mo`

distinct messages:
- `TypeError: MethInstance.meth_noargs() got an unexpected keyword argument 'k'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_call.py", line 357, in test_noargs_error_kw
    se`
example test: `test_call.TestCallingConventionsInstance.test_noargs_error_kw`

### 1 × `TypeError: MethInstance.meth_o() missing <n> required positional argument: <str> During handling of the above exception, another exception occurred: Traceback (`

distinct messages:
- `TypeError: MethInstance.meth_o() missing 1 required positional argument: 'arg'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_call.py", line 305, in test_o_error_no_arg
    s`
example test: `test_call.TestCallingConventionsInstance.test_o_error_no_arg`

### 1 × `TypeError: MethInstance.meth_varargs() got an unexpected keyword argument <str> During handling of the above exception, another exception occurred: Traceback (m`

distinct messages:
- `TypeError: MethInstance.meth_varargs() got an unexpected keyword argument 'k'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_call.py", line 281, in test_varargs_error_kw
    `
example test: `test_call.TestCallingConventionsInstance.test_varargs_error_kw`

### 1 × `TypeError: MethStatic.meth_fastcall() got an unexpected keyword argument <str> During handling of the above exception, another exception occurred: Traceback (mo`

distinct messages:
- `TypeError: MethStatic.meth_fastcall() got an unexpected keyword argument 'k'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_call.py", line 375, in test_fastcall_error_kw
    `
example test: `test_call.TestCallingConventionsStatic.test_fastcall_error_kw`

### 1 × `TypeError: MethStatic.meth_noargs() got an unexpected keyword argument <str> During handling of the above exception, another exception occurred: Traceback (most`

distinct messages:
- `TypeError: MethStatic.meth_noargs() got an unexpected keyword argument 'k'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_call.py", line 357, in test_noargs_error_kw
    self`
example test: `test_call.TestCallingConventionsStatic.test_noargs_error_kw`

### 1 × `TypeError: MethStatic.meth_o() missing <n> required positional argument: <str> During handling of the above exception, another exception occurred: Traceback (mo`

distinct messages:
- `TypeError: MethStatic.meth_o() missing 1 required positional argument: 'arg'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_call.py", line 305, in test_o_error_no_arg
    sel`
example test: `test_call.TestCallingConventionsStatic.test_o_error_no_arg`

### 1 × `TypeError: MethStatic.meth_varargs() got an unexpected keyword argument <str> During handling of the above exception, another exception occurred: Traceback (mos`

distinct messages:
- `TypeError: MethStatic.meth_varargs() got an unexpected keyword argument 'k'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_call.py", line 281, in test_varargs_error_kw
    se`
example test: `test_call.TestCallingConventionsStatic.test_varargs_error_kw`

### 1 × `TypeError: min() missing <n> required positional argument: <str> During handling of the above exception, another exception occurred: Traceback (most recent call`

distinct messages:
- `TypeError: min() missing 1 required positional argument: 'a'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_builtin.py", line 1341, in test_min
    with self.assertRaisesRege`
example test: `test_builtin.BuiltinTest.test_min`

### 1 × `TypeError: property.__set_name__() missing <n> required positional arguments: <str> and <str> During handling of the above exception, another exception occurred`

distinct messages:
- `TypeError: property.__set_name__() missing 2 required positional arguments: 'a' and 'b'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_property.py", line 261, in test_propert`
example test: `test_property.PropertyTests.test_property_set_name_incorrect_args`

### 1 × `TypeError: range() missing <n> required positional argument: <str> During handling of the above exception, another exception occurred: Traceback (most recent ca`

distinct messages:
- `TypeError: range() missing 1 required positional argument: 'a'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_range.py", line 95, in test_range_constructor_error_messages
   `
example test: `test_range.RangeTest.test_range_constructor_error_messages`

### 1 × `TypeError: str() takes from <n> to <n> positional arguments but <n> were given During handling of the above exception, another exception occurred: Traceback (mo`

distinct messages:
- `TypeError: str() takes from 1 to 4 positional arguments but 5 were given

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_str.py", line 2670, in test_str_invalid_call
    with `
example test: `test_str.StrTest.test_str_invalid_call`

### 1 × `TypeError: super() takes from <n> to <n> positional arguments but <n> were given During handling of the above exception, another exception occurred: Traceback (`

distinct messages:
- `TypeError: super() takes from 1 to 3 positional arguments but 4 were given

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_super.py", line 339, in test_super_argcount
    with`
example test: `test_super.TestSuper.test_super_argcount`

### 1 × `UnicodeDecodeError: <str> codec can<str>ill-formed sequence<str>utf-<n><str>t decode bytes in position <n>-<n>: malformed input"`

distinct messages:
- `UnicodeDecodeError: 'utf-7' codec can't decode bytes in position 1-2: malformed input

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_str.py", line 1816, in test_codecs_utf7
 `
example test: `test_str.StrTest.test_codecs_utf7`

### 1 × `ValueError: Can<str>t jump from the <str> trace event of a new frame<str>Can't jump from <str> event."`

distinct messages:
- `ValueError: Can't jump from "call" event.

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_sys_settrace.py", line 2083, in test
    self.run_test(func, jumpFrom, jumpTo, expect`
example test: `test_sys_settrace.JumpTestCase.test_no_jump_from_call`

### 1 × `ValueError: Can<str>t jump into the body of a for loop<str>Can't jump from <str> event."`

distinct messages:
- `ValueError: Can't jump from "line" event.

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/work/.harness/work/cpython-core/cpython-root/Lib/test/test_sys_settrace.py", line 2095, in test
    self.run_async_test(func, jumpFrom, jumpTo, `
example test: `test_sys_settrace.JumpTestCase.test_no_jump_backwards_into_async_for_block`
