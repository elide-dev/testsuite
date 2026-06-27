import argparse
import importlib
import json
import sys
import time
import unittest


def emit(record):
    print(json.dumps(record, sort_keys=True), flush=True)


def normalize_unittest_id(value):
    value = str(value)
    return value[5:] if value.startswith("test.") else value


class JsonResult(unittest.TextTestResult):
    def _case_id(self, test):
        return normalize_unittest_id(test.id() if hasattr(test, "id") else str(test))

    def _module_id(self, test):
        return normalize_unittest_id(test.__class__.__module__)

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
    parser.add_argument("modules", nargs="+")
    args = parser.parse_args()
    sys.path.insert(0, args.cpython_root + "/Lib")

    ok = True
    for module_name in args.modules:
        started = time.monotonic()
        try:
            module = importlib.import_module("test." + module_name)
            suite = unittest.defaultTestLoader.loadTestsFromModule(module)
            result = unittest.TextTestRunner(stream=sys.stderr, resultclass=JsonResult, verbosity=0).run(suite)
            ok = ok and result.wasSuccessful()
        except unittest.SkipTest as exc:
            emit({"module": module_name, "case": module_name, "status": "skip", "message": str(exc), "durationMs": int((time.monotonic() - started) * 1000)})
        except BaseException as exc:
            ok = False
            emit({"module": module_name, "case": module_name, "status": "error", "message": repr(exc), "durationMs": int((time.monotonic() - started) * 1000)})
    return 0 if ok else 1


if __name__ == "__main__":
    raise SystemExit(main())
