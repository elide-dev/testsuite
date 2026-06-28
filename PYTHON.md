# Python Coverage Plan

This tracks Python runtime compliance coverage across multiple upstream suites.
CPython 3.12 is the first broad suite; additional Python compatibility suites
can be added here as separate sections as they land.

## CPython 3.12

The first priority is broad pure runtime and standard-library API coverage;
process, network, native-extension, platform, and very large stress tests stay
quarantined until the runtime surface is ready.

### Enabled

- [x] Smoke: `test_builtin`, `test_re`, `test_json`, `test_ast` - 4 modules
- [x] Pure language/object model: `test_bool`, `test_bytes`, `test_tuple`, `test_list`, `test_dict`, `test_set`, `test_slice`, `test_range`, `test_class`, `test_descr`, `test_super`, `test_metaclass`, `test_exceptions`, `test_generators`, `test_yield_from`, `test_fstring`, `test_patma`, `test_scope`, `test_call`, `test_compile`, `test_syntax` - 21 modules
- [x] Core algorithms/containers: `test_collections`, `test_deque`, `test_defaultdict`, `test_heapq`, `test_bisect`, `test_itertools`, `test_functools`, `test_operator`, `test_copy`, `test_copyreg`, `test_enum`, `test_weakref`, `test_weakset` - 13 modules
- [x] Numbers: `test_int`, `test_long`, `test_float`, `test_complex`, `test_math`, `test_cmath`, `test_decimal`, `test_fractions`, `test_statistics`, `test_random`, `test_array`, `test_struct` - 12 modules

Enabled total: 50 CPython test modules.

### Next Domains

- [ ] Text, Unicode, codecs: `test_string`, `test_textwrap`, `test_unicode`, `test_ucn`, `test_unicodedata`, `test_codecs`, `test_codeccallbacks`, `test_stringprep`, `test_base64`, `test_binascii`, `test_quopri`, `test_tokenize`
- [ ] Pure data formats: `test_csv`, `test_configparser`, `test_tomllib`, `test_plistlib`, `test_marshal`, `test_pickle`, `test_pickletools`, `test_html`, `test_htmlparser`, `test_email`, `test_xml_etree`, `test_xml_dom_minicompat`
- [ ] Import, compile, module system: `test_importlib`, `test_pkg`, `test_pkgutil`, `test_runpy`, `test_modulefinder`, `test_py_compile`, `test_compileall`, `test_zipimport`, `test_linecache`, `test_symtable`, `test_dis`
- [ ] Testing, introspection, debugging support: `test_unittest`, `test_doctest`, `test_traceback`, `test_pprint`, `test_reprlib`, `test_inspect`, `test_types`, `test_typing`, `test_abc`, `test_contextlib`, `test_contextlib_async`
- [ ] Filesystem-oriented pure stdlib, after temp-file behavior is settled: `test_pathlib`, `test_posixpath`, `test_ntpath`, `test_genericpath`, `test_fnmatch`, `test_glob`, `test_tempfile`, `test_filecmp`, `test_zipfile`, `test_tarfile`, `test_shutil`

### Quarantined For Now

- [ ] Process and multiprocessing: `test_subprocess`, `test_multiprocessing_*`, `test_fork1`, `test_wait3`, `test_wait4`, `test_popen`
- [ ] Asyncio subprocess/network-heavy coverage: `test_asyncio/test_subprocess.py`, socket/server/SSL asyncio cases
- [ ] Network and TLS: `test_socket`, `test_ssl`, `test_httplib`, `test_httpservers`, `test_urllib*`, `test_xmlrpc*`, mail/news/ftp/telnet suites
- [ ] Native/platform surfaces: `test_ctypes`, `test_capi`, `test_readline`, `test_curses`, `test_tkinter`, `test_dbm*`, platform-specific POSIX/Windows/macOS suites
- [ ] Stress/perf/crasher/leak suites: `test_bigmem`, `test_bigaddrspace`, `test_crashers`, `leakers`, `test_perf_profiler`, `test_longexp`

### Coverage Accounting

- Enabled against top-level CPython `Lib/test` modules/packages in the checkout:
  50 / 433 = 11.5%.

This is a module-count denominator, not a case-count denominator. CPython only
materializes reliable case counts after importing and running each module, and
some modules dynamically skip, generate, or expand tests based on platform,
optional extension modules, locale, filesystem, process, and network support.

## Future Python Suites

- [ ] PyPy compatibility tests or selected PyPy runtime regressions.
- [ ] Popular pure-Python package test suites for standard-library integration
  pressure, selected only when they are stable and deterministic.
- [ ] Packaging/import ecosystem tests, such as focused `pip`, `packaging`, or
  `importlib_metadata` slices, once process and filesystem behavior is ready.
