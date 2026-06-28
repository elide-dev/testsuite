# cpython-core — `1.3.5+20260628.3b80cf3`

- Image digest: `3583aceded8e8e4cab8248f08f245aa6859ce893f81e9de5c52097863c70b4cb`
- Suite version: `7c999be49dee7f12703e4b2e07e990544fabd40e`
- Ran: 2026-06-28T03:20:46.837Z → 2026-06-28T03:22:08.350Z

## Summary

![Pass-rate chart](./pass-rate.svg)

**Pass rate: 10135/11523 (87.95%)**

| pass | fail | error | skip | regressions | new passes |
|---:|---:|---:|---:|---:|---:|
| 10135 | 347 | 440 | 601 | 0 | 0 |

## Observed cases (10922)

- `test_metaclass.__test__.doctests` — pass
- `test_class.ClassTests.testBadTypeReturned` — pass
- `test_class.ClassTests.testBinaryOps` — pass
- `test_class.ClassTests.testClassWithExtCall` — pass
- `test_tuple.TupleTest.test_addmul` — pass
- `test_tuple.TupleTest.test_bigrepeat` — pass
- `test_tuple.TupleTest.test_constructors` — pass
- `test_tuple.TupleTest.test_contains` — pass
- `test_tuple.TupleTest.test_contains_fake` — pass
- `test_tuple.TupleTest.test_contains_order` — pass
- `test_tuple.TupleTest.test_count` — pass
- `test_class.ClassTests.testConstructorErrorMessages` — pass
- `test_patma.TestCompiler.test_refleaks` — pass
- `test_patma.TestInheritance.test_late_registration_mapping` — pass
- `test_patma.TestInheritance.test_late_registration_sequence` — pass
- `test_patma.TestInheritance.test_multiple_inheritance_mapping` — pass
- `test_patma.TestInheritance.test_multiple_inheritance_sequence` — pass
- `test_patma.TestPatma.test_patma_000` — pass
- `test_patma.TestPatma.test_patma_001` — pass
- `test_patma.TestPatma.test_patma_002` — pass
- `test_patma.TestPatma.test_patma_003` — pass
- `test_patma.TestPatma.test_patma_004` — pass
- `test_patma.TestPatma.test_patma_005` — pass
- `test_patma.TestPatma.test_patma_006` — pass
- `test_patma.TestPatma.test_patma_007` — pass
- `test_patma.TestPatma.test_patma_008` — pass
- `test_patma.TestPatma.test_patma_009` — pass
- `test_patma.TestPatma.test_patma_010` — pass
- `test_patma.TestPatma.test_patma_011` — pass
- `test_patma.TestPatma.test_patma_012` — pass
- `test_patma.TestPatma.test_patma_013` — pass
- `test_patma.TestPatma.test_patma_014` — pass
- `test_patma.TestPatma.test_patma_015` — pass
- `test_patma.TestPatma.test_patma_016` — pass
- `test_patma.TestPatma.test_patma_017` — pass
- `test_patma.TestPatma.test_patma_018` — pass
- `test_patma.TestPatma.test_patma_019` — pass
- `test_patma.TestPatma.test_patma_020` — pass
- `test_patma.TestPatma.test_patma_021` — pass
- `test_patma.TestPatma.test_patma_022` — pass
- `test_patma.TestPatma.test_patma_023` — pass
- `test_patma.TestPatma.test_patma_024` — pass
- `test_patma.TestPatma.test_patma_025` — pass
- `test_patma.TestPatma.test_patma_026` — pass
- `test_patma.TestPatma.test_patma_027` — pass
- `test_patma.TestPatma.test_patma_028` — pass
- `test_patma.TestPatma.test_patma_029` — pass
- `test_patma.TestPatma.test_patma_030` — pass
- `test_patma.TestPatma.test_patma_031` — pass
- `test_patma.TestPatma.test_patma_032` — pass
- `test_patma.TestPatma.test_patma_033` — pass
- `test_patma.TestPatma.test_patma_034` — pass
- `test_patma.TestPatma.test_patma_035` — pass
- `test_patma.TestPatma.test_patma_036` — pass
- `test_patma.TestPatma.test_patma_037` — pass
- `test_patma.TestPatma.test_patma_038` — pass
- `test_patma.TestPatma.test_patma_039` — pass
- `test_patma.TestPatma.test_patma_040` — pass
- `test_patma.TestPatma.test_patma_041` — pass
- `test_patma.TestPatma.test_patma_042` — pass
- `test_patma.TestPatma.test_patma_043` — pass
- `test_patma.TestPatma.test_patma_044` — pass
- `test_patma.TestPatma.test_patma_045` — pass
- `test_patma.TestPatma.test_patma_046` — pass
- `test_patma.TestPatma.test_patma_047` — pass
- `test_patma.TestPatma.test_patma_048` — pass
- `test_patma.TestPatma.test_patma_049` — pass
- `test_patma.TestPatma.test_patma_050` — pass
- `test_patma.TestPatma.test_patma_051` — pass
- `test_patma.TestPatma.test_patma_052` — pass
- `test_patma.TestPatma.test_patma_053` — pass
- `test_patma.TestPatma.test_patma_054` — pass
- `test_patma.TestPatma.test_patma_055` — pass
- `test_patma.TestPatma.test_patma_056` — pass
- `test_patma.TestPatma.test_patma_057` — pass
- `test_patma.TestPatma.test_patma_058` — pass
- `test_patma.TestPatma.test_patma_059` — pass
- `test_patma.TestPatma.test_patma_060` — pass
- `test_patma.TestPatma.test_patma_061` — pass
- `test_patma.TestPatma.test_patma_062` — pass
- `test_patma.TestPatma.test_patma_063` — pass
- `test_patma.TestPatma.test_patma_064` — pass
- `test_patma.TestPatma.test_patma_065` — pass
- `test_patma.TestPatma.test_patma_066` — pass
- `test_patma.TestPatma.test_patma_067` — pass
- `test_patma.TestPatma.test_patma_068` — pass
- `test_patma.TestPatma.test_patma_069` — pass
- `test_patma.TestPatma.test_patma_070` — pass
- `test_patma.TestPatma.test_patma_071` — pass
- `test_patma.TestPatma.test_patma_072` — pass
- `test_patma.TestPatma.test_patma_073` — pass
- `test_patma.TestPatma.test_patma_074` — pass
- `test_patma.TestPatma.test_patma_075` — pass
- `test_patma.TestPatma.test_patma_076` — pass
- `test_patma.TestPatma.test_patma_077` — pass
- `test_patma.TestPatma.test_patma_078` — pass
- `test_patma.TestPatma.test_patma_079` — pass
- `test_patma.TestPatma.test_patma_080` — pass
- `test_patma.TestPatma.test_patma_081` — pass
- `test_patma.TestPatma.test_patma_082` — pass
- `test_patma.TestPatma.test_patma_083` — pass
- `test_patma.TestPatma.test_patma_084` — pass
- `test_patma.TestPatma.test_patma_085` — pass
- `test_patma.TestPatma.test_patma_086` — pass
- `test_patma.TestPatma.test_patma_087` — pass
- `test_patma.TestPatma.test_patma_088` — pass
- `test_patma.TestPatma.test_patma_089` — pass
- `test_patma.TestPatma.test_patma_090` — pass
- `test_patma.TestPatma.test_patma_091` — pass
- `test_patma.TestPatma.test_patma_092` — pass
- `test_patma.TestPatma.test_patma_093` — pass
- `test_patma.TestPatma.test_patma_094` — pass
- `test_patma.TestPatma.test_patma_095` — pass
- `test_patma.TestPatma.test_patma_096` — pass
- `test_patma.TestPatma.test_patma_097` — pass
- `test_patma.TestPatma.test_patma_098` — pass
- `test_patma.TestPatma.test_patma_099` — pass
- `test_patma.TestPatma.test_patma_100` — pass
- `test_patma.TestPatma.test_patma_101` — pass
- `test_patma.TestPatma.test_patma_102` — pass
- `test_patma.TestPatma.test_patma_103` — pass
- `test_patma.TestPatma.test_patma_104` — pass
- `test_patma.TestPatma.test_patma_105` — pass
- `test_patma.TestPatma.test_patma_106` — pass
- `test_patma.TestPatma.test_patma_107` — pass
- `test_patma.TestPatma.test_patma_108` — pass
- `test_patma.TestPatma.test_patma_109` — pass
- `test_patma.TestPatma.test_patma_110` — pass
- `test_patma.TestPatma.test_patma_111` — pass
- `test_patma.TestPatma.test_patma_112` — pass
- `test_patma.TestPatma.test_patma_113` — pass
- `test_patma.TestPatma.test_patma_114` — pass
- `test_patma.TestPatma.test_patma_115` — pass
- `test_patma.TestPatma.test_patma_116` — pass
- `test_patma.TestPatma.test_patma_117` — pass
- `test_patma.TestPatma.test_patma_118` — pass
- `test_patma.TestPatma.test_patma_119` — pass
- `test_patma.TestPatma.test_patma_120` — pass
- `test_patma.TestPatma.test_patma_121` — pass
- `test_patma.TestPatma.test_patma_122` — pass
- `test_patma.TestPatma.test_patma_123` — pass
- `test_patma.TestPatma.test_patma_124` — pass
- `test_patma.TestPatma.test_patma_125` — pass
- `test_patma.TestPatma.test_patma_126` — pass
- `test_patma.TestPatma.test_patma_127` — pass
- `test_patma.TestPatma.test_patma_128` — pass
- `test_patma.TestPatma.test_patma_129` — pass
- `test_patma.TestPatma.test_patma_130` — pass
- `test_patma.TestPatma.test_patma_131` — pass
- `test_patma.TestPatma.test_patma_132` — pass
- `test_patma.TestPatma.test_patma_133` — pass
- `test_class.ClassTests.testDel` — fail — Traceback (most recent call last):
  File "/work/suites/cpython/Lib/test/test_class.py", line 472, in testDel
    self.assertEqual(["crab people, crab people"], x)
AssertionError: Lists differ: ['crab people, crab people'] != []

First list contains 1 additional elements.
First extra element 0:
'crab people, crab people'

- ['crab people, crab people']
+ []

- `test_class.ClassTests.testForExceptionsRaisedInInstanceGetattr2` — pass
- `test_class.ClassTests.testGetSetAndDel` — pass
- `test_baseexception.ExceptionClassTests.test_builtins_new_style` — pass
- `test_baseexception.ExceptionClassTests.test_inheritance` — pass
- `test_baseexception.ExceptionClassTests.test_interface_multi_arg` — pass
- `test_baseexception.ExceptionClassTests.test_interface_no_arg` — pass
- `test_baseexception.ExceptionClassTests.test_interface_single_arg` — pass
- `test_patma.TestPatma.test_patma_134` — pass
- `test_patma.TestPatma.test_patma_135` — pass
- `test_patma.TestPatma.test_patma_136` — pass
- `test_patma.TestPatma.test_patma_137` — pass
- `test_patma.TestPatma.test_patma_138` — pass
- `test_patma.TestPatma.test_patma_139` — pass
- `test_patma.TestPatma.test_patma_140` — pass
- `test_patma.TestPatma.test_patma_141` — pass
- `test_patma.TestPatma.test_patma_142` — pass
- `test_patma.TestPatma.test_patma_143` — pass
- `test_patma.TestPatma.test_patma_144` — pass
- `test_patma.TestPatma.test_patma_145` — pass
- `test_patma.TestPatma.test_patma_146` — pass
- `test_patma.TestPatma.test_patma_147` — pass
- `test_patma.TestPatma.test_patma_148` — pass
- `test_patma.TestPatma.test_patma_149` — pass
- `test_patma.TestPatma.test_patma_150` — pass
- `test_patma.TestPatma.test_patma_151` — pass
- `test_patma.TestPatma.test_patma_152` — pass
- `test_patma.TestPatma.test_patma_153` — pass
- `test_patma.TestPatma.test_patma_154` — pass
- `test_patma.TestPatma.test_patma_155` — pass
- `test_patma.TestPatma.test_patma_156` — pass
- `test_patma.TestPatma.test_patma_157` — pass
- `test_patma.TestPatma.test_patma_158` — pass
- `test_patma.TestPatma.test_patma_159` — pass
- `test_patma.TestPatma.test_patma_160` — pass
- `test_patma.TestPatma.test_patma_161` — pass
- `test_patma.TestPatma.test_patma_162` — pass
- `test_patma.TestPatma.test_patma_163` — pass
- `test_patma.TestPatma.test_patma_164` — pass
- `test_patma.TestPatma.test_patma_165` — pass
- `test_patma.TestPatma.test_patma_166` — pass
- `test_patma.TestPatma.test_patma_167` — pass
- `test_patma.TestPatma.test_patma_168` — pass
- `test_patma.TestPatma.test_patma_169` — pass
- `test_patma.TestPatma.test_patma_170` — pass
- `test_patma.TestPatma.test_patma_171` — pass
- `test_patma.TestPatma.test_patma_172` — pass
- `test_patma.TestPatma.test_patma_173` — pass
- `test_patma.TestPatma.test_patma_174` — pass
- …and 10722 more
