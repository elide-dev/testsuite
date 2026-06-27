import io
import sys
import unittest
from pathlib import Path


sys.path.insert(0, str(Path(__file__).resolve().parent))

import elide_regrtest_driver as driver


class FakeTest:
    def id(self):
        return "test.test_re.ReTests.test_basic_re_sub"


FakeTest.__module__ = "test.test_re"


class DriverNormalizationTests(unittest.TestCase):
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


if __name__ == "__main__":
    unittest.main()
