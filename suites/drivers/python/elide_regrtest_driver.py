import argparse
import fnmatch
import importlib
import importlib.util
import json
import os
import sys
import time


def sanitize_cpython_lib_from_sys_path(cpython_root):
    cpython_lib = os.path.realpath(os.path.abspath(os.path.join(cpython_root, "Lib")))
    cwd = os.getcwd()
    sys.path[:] = [
        path
        for path in sys.path
        if os.path.realpath(os.path.abspath(path or cwd)) != cpython_lib
    ]


def sanitize_cpython_lib_from_argv():
    for index, arg in enumerate(sys.argv):
        if arg == "--cpython-root" and index + 1 < len(sys.argv):
            sanitize_cpython_lib_from_sys_path(sys.argv[index + 1])
            return
        if arg.startswith("--cpython-root="):
            sanitize_cpython_lib_from_sys_path(arg.split("=", 1)[1])
            return


sanitize_cpython_lib_from_argv()

import unittest


class CpythonTestPackageFinder:
    def __init__(self, test_dir):
        self.test_dir = os.path.realpath(os.path.abspath(test_dir))

    def find_spec(self, fullname, path=None, target=None):
        if fullname == "test":
            init_file = os.path.join(self.test_dir, "__init__.py")
            if not os.path.isfile(init_file):
                return None
            return importlib.util.spec_from_file_location("test", init_file, submodule_search_locations=[self.test_dir])
        if not fullname.startswith("test."):
            return None

        parts = fullname.split(".")[1:]
        package_init = os.path.join(self.test_dir, *parts, "__init__.py")
        if os.path.isfile(package_init):
            return importlib.util.spec_from_file_location(
                fullname,
                package_init,
                submodule_search_locations=[os.path.dirname(package_init)],
            )

        module_file = os.path.join(self.test_dir, *parts) + ".py"
        if os.path.isfile(module_file):
            return importlib.util.spec_from_file_location(fullname, module_file)

        return None


def install_tracemalloc_compat():
    try:
        tracemalloc = importlib.import_module("tracemalloc")
    except ImportError:
        return
    if not hasattr(tracemalloc, "is_tracing"):
        tracemalloc.is_tracing = lambda: False


def emit(record):
    print(json.dumps(record, sort_keys=True), file=sys.__stdout__, flush=True)


def emit_progress(message):
    print("progress: " + message, file=sys.stderr, flush=True)


def normalize_unittest_id(value):
    value = str(value)
    return value[5:] if value.startswith("test.") else value


def case_id(test):
    return normalize_unittest_id(test.id() if hasattr(test, "id") else str(test))


def module_id(test):
    return normalize_unittest_id(test.__class__.__module__)


def should_skip(test, patterns):
    test_case_id = case_id(test)
    test_module_id = module_id(test)
    return any(
        fnmatch.fnmatchcase(test_case_id, pattern) or fnmatch.fnmatchcase(test_module_id, pattern)
        for pattern in patterns
    )


def filter_suite(suite, skip_patterns):
    filtered = unittest.TestSuite()
    skipped = 0
    for item in suite:
        if isinstance(item, unittest.TestSuite):
            child_suite, child_skipped = filter_suite(item, skip_patterns)
            skipped += child_skipped
            if child_suite.countTestCases() > 0:
                filtered.addTest(child_suite)
        elif should_skip(item, skip_patterns):
            emit({
                "module": module_id(item),
                "case": case_id(item),
                "status": "skip",
                "message": "driver-level skip",
            })
            skipped += 1
        else:
            filtered.addTest(item)
    return filtered, skipped


def install_cpython_test_package(cpython_root):
    sanitize_cpython_lib_from_sys_path(cpython_root)
    install_tracemalloc_compat()
    test_dir = os.path.realpath(os.path.abspath(os.path.join(cpython_root, "Lib", "test")))
    if not os.path.isdir(test_dir):
        raise FileNotFoundError("CPython test package not found: " + test_dir)

    sys.meta_path[:] = [
        finder
        for finder in sys.meta_path
        if not isinstance(finder, CpythonTestPackageFinder)
    ]
    sys.meta_path.insert(0, CpythonTestPackageFinder(test_dir))

    existing = sys.modules.get("test")
    if existing is not None and hasattr(existing, "__path__"):
        existing.__path__ = [test_dir]
        return

    init_file = os.path.join(test_dir, "__init__.py")
    spec = importlib.util.spec_from_file_location("test", init_file, submodule_search_locations=[test_dir])
    if spec is None or spec.loader is None:
        raise ImportError("Unable to load CPython test package from " + test_dir)
    module = importlib.util.module_from_spec(spec)
    sys.modules["test"] = module
    spec.loader.exec_module(module)


class JsonResult(unittest.TextTestResult):
    def _case_id(self, test):
        return case_id(test)

    def _module_id(self, test):
        return module_id(test)

    def _emit(self, test, status, message=None):
        record = {"module": self._module_id(test), "case": self._case_id(test), "status": status}
        if message is not None:
            record["message"] = message
        emit(record)

    def startTest(self, test):
        self._emit(test, "running")
        super().startTest(test)

    def addSuccess(self, test):
        super().addSuccess(test)
        self._emit(test, "pass")

    def addFailure(self, test, err):
        super().addFailure(test, err)
        self._emit(test, "fail", self._exc_info_to_string(err, test))

    def addError(self, test, err):
        super().addError(test, err)
        self._emit(test, "error", self._exc_info_to_string(err, test))

    def addSkip(self, test, reason):
        super().addSkip(test, reason)
        self._emit(test, "skip", reason)


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--cpython-root", required=True)
    parser.add_argument("--skip", action="append", default=[])
    parser.add_argument("--progress-stderr", action="store_true")
    parser.add_argument("modules", nargs="+")
    args = parser.parse_args()
    install_cpython_test_package(args.cpython_root)

    ok = True
    for module_name in args.modules:
        started = time.monotonic()
        try:
            if args.progress_stderr:
                emit_progress("importing " + module_name)
            module = importlib.import_module("test." + module_name)
            if args.progress_stderr:
                emit_progress("loading " + module_name)
            suite = unittest.defaultTestLoader.loadTestsFromModule(module)
            if args.progress_stderr:
                emit_progress("filtering " + module_name)
            suite, _ = filter_suite(suite, args.skip)
            if args.progress_stderr:
                emit_progress("running " + module_name)
            result = unittest.TextTestRunner(stream=sys.stderr, resultclass=JsonResult, verbosity=0, buffer=True).run(suite)
            if args.progress_stderr:
                emit_progress("done " + module_name)
            ok = ok and result.wasSuccessful()
        except unittest.SkipTest as exc:
            emit({"module": module_name, "case": module_name, "status": "skip", "message": str(exc), "durationMs": int((time.monotonic() - started) * 1000)})
        except BaseException as exc:
            ok = False
            emit({"module": module_name, "case": module_name, "status": "error", "message": repr(exc), "durationMs": int((time.monotonic() - started) * 1000)})
    return 0 if ok else 1


if __name__ == "__main__":
    raise SystemExit(main())
