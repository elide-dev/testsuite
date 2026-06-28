import io
import importlib
import sys
import tempfile
import unittest
from pathlib import Path


sys.path.insert(0, str(Path(__file__).resolve().parent))

import elide_regrtest_driver as driver


class FakeTest:
    def id(self):
        return "test.test_re.ReTests.test_basic_re_sub"


FakeTest.__module__ = "test.test_re"


class RealFakeReTest(unittest.TestCase):
    def test_basic_re_sub(self):
        pass

    def test_other(self):
        pass


RealFakeReTest.__module__ = "test.test_re"


class DriverNormalizationTests(unittest.TestCase):
    def test_install_cpython_test_package_does_not_add_cpython_lib_to_sys_path(self):
        with tempfile.TemporaryDirectory() as root:
            root_path = Path(root)
            test_dir = root_path / "Lib" / "test"
            test_dir.mkdir(parents=True)
            (test_dir / "__init__.py").write_text("ORIGIN = 'cpython-tests'\n")
            (test_dir / "test_sample.py").write_text("VALUE = 42\n")

            saved_path = list(sys.path)
            saved_modules = {
                name: sys.modules[name]
                for name in list(sys.modules)
                if name == "test" or name.startswith("test.")
            }
            for name in saved_modules:
                sys.modules.pop(name, None)

            try:
                driver.install_cpython_test_package(root)
                self.assertNotIn(str(root_path / "Lib"), sys.path)
                self.assertEqual(importlib.import_module("test").ORIGIN, "cpython-tests")
                self.assertEqual(importlib.import_module("test.test_sample").VALUE, 42)
            finally:
                sys.path[:] = saved_path
                for name in list(sys.modules):
                    if name == "test" or name.startswith("test."):
                        sys.modules.pop(name, None)
                sys.modules.update(saved_modules)

    def test_normalize_unittest_id_strips_test_package_prefix(self):
        self.assertEqual(driver.normalize_unittest_id("test.test_re"), "test_re")
        self.assertEqual(
            driver.normalize_unittest_id("test.test_re.ReTests.test_basic_re_sub"),
            "test_re.ReTests.test_basic_re_sub",
        )
        self.assertEqual(driver.normalize_unittest_id("test_re"), "test_re")

    def test_json_result_emits_normalized_module_and_case_ids(self):
        stream = io.StringIO()
        result = driver.JsonResult(stream=stream, descriptions=False, verbosity=0)
        records = []
        original_emit = driver.emit
        driver.emit = records.append
        try:
            result.addSuccess(FakeTest())
        finally:
            driver.emit = original_emit

        self.assertEqual(records, [{"module": "test_re", "case": "test_re.ReTests.test_basic_re_sub", "status": "pass"}])

    def test_json_result_emits_running_record_before_case_body(self):
        stream = io.StringIO()
        result = driver.JsonResult(stream=stream, descriptions=False, verbosity=0)
        records = []
        original_emit = driver.emit
        driver.emit = records.append
        try:
            result.startTest(FakeTest())
        finally:
            driver.emit = original_emit

        self.assertEqual(records, [{"module": "test_re", "case": "test_re.ReTests.test_basic_re_sub", "status": "running"}])

    def test_should_skip_matches_case_or_module_globs(self):
        test = RealFakeReTest("test_basic_re_sub")

        self.assertTrue(driver.should_skip(test, ["test_re.RealFakeReTest.test_basic_re_sub"]))
        self.assertTrue(driver.should_skip(test, ["test_re"]))
        self.assertFalse(driver.should_skip(test, ["test_json*"]))

    def test_filter_suite_emits_skip_and_excludes_matching_case(self):
        suite = unittest.TestSuite([
            RealFakeReTest("test_basic_re_sub"),
            RealFakeReTest("test_other"),
        ])
        records = []
        original_emit = driver.emit
        driver.emit = records.append
        try:
            filtered, skipped = driver.filter_suite(suite, ["test_re.RealFakeReTest.test_basic_re_sub"])
        finally:
            driver.emit = original_emit

        self.assertEqual(skipped, 1)
        self.assertEqual(filtered.countTestCases(), 1)
        self.assertEqual(records, [{
            "module": "test_re",
            "case": "test_re.RealFakeReTest.test_basic_re_sub",
            "status": "skip",
            "message": "driver-level skip",
        }])


if __name__ == "__main__":
    unittest.main()
