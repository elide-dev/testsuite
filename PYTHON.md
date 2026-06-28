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
- [x] Language leftovers: `test_augassign`, `test_baseexception`, `test_binop`, `test_compare`, `test_contains`, `test_decorators`, `test_dict_version`, `test_dictcomps`, `test_dynamic`, `test_dynamicclassattribute`, `test_enumerate`, `test_eof`, `test_except_star`, `test_exception_group`, `test_exception_hierarchy`, `test_exception_variations`, `test_extcall`, `test_flufl`, `test_format`, `test_funcattrs`, `test_future_stmt`, `test_generator_stop`, `test_genericalias`, `test_genericclass`, `test_genexps`, `test_global`, `test_grammar`, `test_index`, `test_int_literal`, `test_isinstance`, `test_iter`, `test_iterlen`, `test_keyword`, `test_keywordonlyarg`, `test_listcomps`, `test_named_expressions`, `test_numeric_tower`, `test_opcodes`, `test_positional_only_arg`, `test_pow`, `test_print`, `test_property`, `test_raise`, `test_richcmp`, `test_setcomps`, `test_sort`, `test_source_encoding`, `test_string_literals`, `test_subclassinit`, `test_type_aliases`, `test_type_annotations`, `test_type_comments`, `test_type_params`, `test_unary`, `test_unicode_identifiers`, `test_unpack`, `test_unpack_ex`, `test_with` - 58 modules
- [x] Text, Unicode, codecs: `test_string`, `test_textwrap`, `test_unicode`, `test_ucn`, `test_unicodedata`, `test_codecs`, `test_codeccallbacks`, `test_charmapcodec`, `test_multibytecodec`, `test_stringprep`, `test_base64`, `test_binascii`, `test_quopri`, `test_tokenize`, `test_utf8_mode`, `test_utf8source`, `test_univnewlines` - 17 modules
- [x] Pure data formats: `test_csv`, `test_configparser`, `test_tomllib`, `test_plistlib`, `test_marshal`, `test_pickle`, `test_picklebuffer`, `test_pickletools`, `test_html`, `test_htmlparser`, `test_email`, `test_xml_etree`, `test_xml_dom_minicompat`, `test_minidom`, `test_sax`, `test_pulldom`, `test_urlparse`, `test_netrc`, `test_mailcap`, `test_mimetypes`, `test_gettext` - 21 modules
- [x] Import, compile, introspection: `test_importlib`, `test_pkg`, `test_pkgutil`, `test_runpy`, `test_modulefinder`, `test_py_compile`, `test_compileall`, `test_zipimport`, `test_zipimport_support`, `test_linecache`, `test_symtable`, `test_dis`, `test_code`, `test_codeop`, `test_traceback`, `test_pprint`, `test_inspect`, `test_types`, `test_typing`, `test_abc`, `test_context`, `test_contextlib`, `test_contextlib_async`, `test_unittest`, `test_doctest`, `test_pyclbr`, `test_pydoc`, `test_site` - 28 modules
- [x] Low-risk stdlib utilities: `test_argparse`, `test_calendar`, `test_colorsys`, `test_difflib`, `test_fnmatch`, `test_getopt`, `test_graphlib`, `test_ipaddress`, `test_optparse`, `test_queue`, `test_reprlib`, `test_sched`, `test_secrets`, `test_shlex`, `test_userdict`, `test_userlist`, `test_userstring`, `test_uu`, `test_xdrlib` - 19 modules
- [x] Path strings and pure pathlib: `test_ntpath`, `test_pathlib` - 2 modules; concrete filesystem cases are skipped until sandboxed file I/O is enabled
- [x] Hashing and HMAC: `test_hash`, `test_hashlib`, `test_hmac` - 3 modules; subprocess, threaded, big-memory, and file-backed digest cases are skipped
- [x] Pure stdlib metadata/API: `test_abstract_numbers`, `test_dataclasses`, `test_dictviews`, `test_ordered_dict`, `test_module`, `test_structseq`, `test_errno`, `test_stat`, `test_warnings`, `test_strftime`, `test_strptime`, `test_unparse`, `test_tabnanny`, `test_http_cookies`, `test_http_cookiejar`, `test_robotparser` - 16 modules
- [x] Compression: `test_zlib`, `test_gzip`, `test_bz2`, `test_lzma` - 4 modules
- [x] Sandboxed file I/O and archives: `test_genericpath`, `test_posixpath`, `test_glob`, `test_tempfile`, `test_filecmp`, `test_fileinput`, `test_fileutils`, `test_unicode_file`, `test_unicode_file_functions`, `test_zipapp`, `test_zipfile` - 11 modules

Enabled total: 229 CPython test modules.

### Next Domains

- [ ] Light async, timing, and local threading: `test_asyncgen`, `test_coroutines`, `test_atexit`, `test_time`, `test_timeit`, `test_threading_local`
- [ ] Broader filesystem/archive behavior: remaining concrete `test_ntpath` and `test_pathlib` cases, `test_zipfile64`, `test_tarfile`, `test_shutil`

### Quarantined For Now

- [ ] Process and multiprocessing: `test_subprocess`, `test_multiprocessing_*`, `test_fork1`, `test_wait3`, `test_wait4`, `test_popen`
- [ ] Asyncio subprocess/network-heavy coverage: `test_asyncio/test_subprocess.py`, socket/server/SSL asyncio cases
- [ ] Network and TLS: `test_socket`, `test_ssl`, `test_httplib`, `test_httpservers`, `test_urllib*`, `test_xmlrpc*`, mail/news/ftp/telnet suites
- [ ] Native/platform surfaces: `test_ctypes`, `test_capi`, `test_readline`, `test_curses`, `test_tkinter`, `test_dbm*`, platform-specific POSIX/Windows/macOS suites
- [ ] Stress/perf/crasher/leak suites: `test_bigmem`, `test_bigaddrspace`, `test_crashers`, `leakers`, `test_perf_profiler`, `test_longexp`

### Coverage Accounting

- Enabled against top-level CPython `Lib/test` modules/packages in the checkout:
  229 / 438 = 52.3%.

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
