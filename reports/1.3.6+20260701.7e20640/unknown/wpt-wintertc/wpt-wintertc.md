# wpt-wintertc — `1.3.6+20260701.7e20640`

- Image digest: `unknown`
- Suite version: `1eb456f600fedad07c8cd6439796fb81db54faff`
- Ran: 2026-07-01T11:22:23.900Z → 2026-07-01T11:22:28.645Z

## Summary

![Pass-rate chart](./pass-rate.svg)

**Pass rate: 835/2300 (36.30%)**

| pass | fail | error | skip | regressions | new passes |
|---:|---:|---:|---:|---:|---:|
| 835 | 1324 | 141 | 0 | 0 | 0 |

## Observed cases (2300)

- `encoding/streams/decode-incomplete-input.any.js :: incomplete input with error mode "replacement" should end with a replacement character` — fail — promise_test: Unhandled rejection with value: object "ReferenceError: readableStreamFromArray is not defined"
- `encoding/streams/decode-incomplete-input.any.js :: incomplete input with error mode "fatal" should error the stream` — fail — promise_test: Unhandled rejection with value: object "ReferenceError: readableStreamFromArray is not defined"
- `encoding/replacement-encodings.any.js :: <file>` — error — ╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: encodings_table is not defined                               │
│                                                                             │
│ In file ../tmp/wpt-elide-2weIum/case.js:5244:1:                             │
│   (source excerpt suppressed)                                               │
│─ Stack Trace ───────────────────────────────────────────────────────────────│
│                                                                             │
│ ╭─ [js] :program                          case.js:5244:1-15                 │
│ │                                                                           │
│ · elide run /tmp/wpt-elide-2weIum/case.js                                   │
│                                                                             │
│─ Advice ────────────────────────────────────────────────────────────────────│
│                                                                             │
│ An error occurred while executing your code.                                │
│                                                                             │
╰─────────────────────────────────────────────────────────────────────────────╯

- `encoding/api-invalid-label.any.js :: <file>` — error — ╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: subsetTest is not defined                                    │
│                                                                             │
│ In file ../tmp/wpt-elide-4SvuWd/case.js:5264:3:                             │
│   (source excerpt suppressed)                                               │
│─ Stack Trace ───────────────────────────────────────────────────────────────│
│                                                                             │
│ ╭─ [js] :anonymous                        case.js:5264:3-12                 │
│ │                                                                           │
│ · elide run /tmp/wpt-elide-4SvuWd/case.js                                   │
│                                                                             │
│─ Advice ────────────────────────────────────────────────────────────────────│
│                                                                             │
│ An error occurred while executing your code.                                │
│                                                                             │
╰─────────────────────────────────────────────────────────────────────────────╯

- `encoding/single-byte-decoder.window.js :: <file>` — error — ╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: encodings_table is not defined                               │
│                                                                             │
│ In file ../tmp/wpt-elide-AhzqvU/case.js:5245:27:                            │
│   (source excerpt suppressed)                                               │
│─ Stack Trace ───────────────────────────────────────────────────────────────│
│                                                                             │
│ ╭─ [js] :program                          case.js:5245:27-41                │
│ │                                                                           │
│ · elide run /tmp/wpt-elide-AhzqvU/case.js                                   │
│                                                                             │
│─ Advice ────────────────────────────────────────────────────────────────────│
│                                                                             │
│ An error occurred while executing your code.                                │
│                                                                             │
╰─────────────────────────────────────────────────────────────────────────────╯

- `encoding/legacy-mb-schinese/gbk/gbk-decoder.any.js :: gbk pointer: 6432` — pass
- `encoding/legacy-mb-schinese/gbk/gbk-decoder.any.js :: gbk pointer: 7533` — fail — assert_equals: expected 7743 but got 59335
- `encoding/legacy-mb-schinese/gbk/gbk-decoder.any.js :: gbk pointer: 7536` — fail — assert_equals: expected 505 but got 59336
- `encoding/legacy-mb-schinese/gbk/gbk-decoder.any.js :: gbk pointer: 7672` — fail — assert_equals: expected 12350 but got 59367
- `encoding/legacy-mb-schinese/gbk/gbk-decoder.any.js :: gbk pointer: 7673` — fail — assert_equals: expected 12272 but got 59368
- `encoding/legacy-mb-schinese/gbk/gbk-decoder.any.js :: gbk pointer: 7674` — fail — assert_equals: expected 12273 but got 59369
- `encoding/legacy-mb-schinese/gbk/gbk-decoder.any.js :: gbk pointer: 7675` — fail — assert_equals: expected 12274 but got 59370
- `encoding/legacy-mb-schinese/gbk/gbk-decoder.any.js :: gbk pointer: 7676` — fail — assert_equals: expected 12275 but got 59371
- `encoding/legacy-mb-schinese/gbk/gbk-decoder.any.js :: gbk pointer: 7677` — fail — assert_equals: expected 12276 but got 59372
- `encoding/legacy-mb-schinese/gbk/gbk-decoder.any.js :: gbk pointer: 7678` — fail — assert_equals: expected 12277 but got 59373
- `encoding/legacy-mb-schinese/gbk/gbk-decoder.any.js :: gbk pointer: 7679` — fail — assert_equals: expected 12278 but got 59374
- `encoding/legacy-mb-schinese/gbk/gbk-decoder.any.js :: gbk pointer: 7680` — fail — assert_equals: expected 12279 but got 59375
- `encoding/legacy-mb-schinese/gbk/gbk-decoder.any.js :: gbk pointer: 7681` — fail — assert_equals: expected 12280 but got 59376
- `encoding/legacy-mb-schinese/gbk/gbk-decoder.any.js :: gbk pointer: 7682` — fail — assert_equals: expected 12281 but got 59377
- `encoding/legacy-mb-schinese/gbk/gbk-decoder.any.js :: gbk pointer: 7683` — fail — assert_equals: expected 12282 but got 59378
- `encoding/legacy-mb-schinese/gbk/gbk-decoder.any.js :: gbk pointer: 7684` — fail — assert_equals: expected 12283 but got 59379
- `encoding/legacy-mb-schinese/gbk/gbk-decoder.any.js :: gbk pointer: 23766` — fail — assert_equals: expected 11905 but got 59413
- `encoding/legacy-mb-schinese/gbk/gbk-decoder.any.js :: gbk pointer: 23770` — fail — assert_equals: expected 11908 but got 59417
- `encoding/legacy-mb-schinese/gbk/gbk-decoder.any.js :: gbk pointer: 23771` — fail — assert_equals: expected 13427 but got 59418
- `encoding/legacy-mb-schinese/gbk/gbk-decoder.any.js :: gbk pointer: 23772` — fail — assert_equals: expected 13383 but got 59419
- `encoding/legacy-mb-schinese/gbk/gbk-decoder.any.js :: gbk pointer: 23773` — fail — assert_equals: expected 11912 but got 59420
- `encoding/legacy-mb-schinese/gbk/gbk-decoder.any.js :: gbk pointer: 23774` — fail — assert_equals: expected 11915 but got 59421
- `encoding/legacy-mb-schinese/gbk/gbk-decoder.any.js :: gbk pointer: 23776` — fail — assert_equals: expected 13726 but got 59423
- `encoding/legacy-mb-schinese/gbk/gbk-decoder.any.js :: gbk pointer: 23777` — fail — assert_equals: expected 13850 but got 59424
- `encoding/legacy-mb-schinese/gbk/gbk-decoder.any.js :: gbk pointer: 23778` — fail — assert_equals: expected 13838 but got 59425
- `encoding/legacy-mb-schinese/gbk/gbk-decoder.any.js :: gbk pointer: 23779` — fail — assert_equals: expected 11916 but got 59426
- `encoding/legacy-mb-schinese/gbk/gbk-decoder.any.js :: gbk pointer: 23780` — fail — assert_equals: expected 11927 but got 59427
- `encoding/legacy-mb-schinese/gbk/gbk-decoder.any.js :: gbk pointer: 23781` — fail — assert_equals: expected 14702 but got 59428
- `encoding/legacy-mb-schinese/gbk/gbk-decoder.any.js :: gbk pointer: 23782` — fail — assert_equals: expected 14616 but got 59429
- `encoding/legacy-mb-schinese/gbk/gbk-decoder.any.js :: gbk pointer: 23784` — fail — assert_equals: expected 14799 but got 59431
- `encoding/legacy-mb-schinese/gbk/gbk-decoder.any.js :: gbk pointer: 23785` — fail — assert_equals: expected 14815 but got 59432
- `encoding/legacy-mb-schinese/gbk/gbk-decoder.any.js :: gbk pointer: 23786` — fail — assert_equals: expected 14963 but got 59433
- `encoding/legacy-mb-schinese/gbk/gbk-decoder.any.js :: gbk pointer: 23787` — fail — assert_equals: expected 14800 but got 59434
- `encoding/legacy-mb-schinese/gbk/gbk-decoder.any.js :: gbk pointer: 23790` — fail — assert_equals: expected 15182 but got 59437
- `encoding/legacy-mb-schinese/gbk/gbk-decoder.any.js :: gbk pointer: 23791` — fail — assert_equals: expected 15470 but got 59438
- `encoding/legacy-mb-schinese/gbk/gbk-decoder.any.js :: gbk pointer: 23792` — fail — assert_equals: expected 15584 but got 59439
- `encoding/legacy-mb-schinese/gbk/gbk-decoder.any.js :: gbk pointer: 23793` — fail — assert_equals: expected 11943 but got 59440
- `encoding/legacy-mb-schinese/gbk/gbk-decoder.any.js :: gbk pointer: 23796` — fail — assert_equals: expected 11946 but got 59443
- `encoding/legacy-mb-schinese/gbk/gbk-decoder.any.js :: gbk pointer: 23797` — fail — assert_equals: expected 16470 but got 59444
- `encoding/legacy-mb-schinese/gbk/gbk-decoder.any.js :: gbk pointer: 23798` — fail — assert_equals: expected 16735 but got 59445
- `encoding/legacy-mb-schinese/gbk/gbk-decoder.any.js :: gbk pointer: 23799` — fail — assert_equals: expected 11950 but got 59446
- `encoding/legacy-mb-schinese/gbk/gbk-decoder.any.js :: gbk pointer: 23800` — fail — assert_equals: expected 17207 but got 59447
- `encoding/legacy-mb-schinese/gbk/gbk-decoder.any.js :: gbk pointer: 23801` — fail — assert_equals: expected 11955 but got 59448
- `encoding/legacy-mb-schinese/gbk/gbk-decoder.any.js :: gbk pointer: 23802` — fail — assert_equals: expected 11958 but got 59449
- `encoding/legacy-mb-schinese/gbk/gbk-decoder.any.js :: gbk pointer: 23803` — fail — assert_equals: expected 11959 but got 59450
- `encoding/legacy-mb-schinese/gbk/gbk-decoder.any.js :: gbk pointer: 23805` — fail — assert_equals: expected 17329 but got 59452
- `encoding/legacy-mb-schinese/gbk/gbk-decoder.any.js :: gbk pointer: 23806` — fail — assert_equals: expected 17324 but got 59453
- `encoding/legacy-mb-schinese/gbk/gbk-decoder.any.js :: gbk pointer: 23807` — fail — assert_equals: expected 11963 but got 59454
- `encoding/legacy-mb-schinese/gbk/gbk-decoder.any.js :: gbk pointer: 23808` — fail — assert_equals: expected 17373 but got 59455
- `encoding/legacy-mb-schinese/gbk/gbk-decoder.any.js :: gbk pointer: 23809` — fail — assert_equals: expected 17622 but got 59456
- `encoding/legacy-mb-schinese/gbk/gbk-decoder.any.js :: gbk pointer: 23810` — fail — assert_equals: expected 18017 but got 59457
- `encoding/legacy-mb-schinese/gbk/gbk-decoder.any.js :: gbk pointer: 23811` — fail — assert_equals: expected 17996 but got 59458
- `encoding/legacy-mb-schinese/gbk/gbk-decoder.any.js :: gbk pointer: 23813` — fail — assert_equals: expected 18211 but got 59460
- `encoding/legacy-mb-schinese/gbk/gbk-decoder.any.js :: gbk pointer: 23814` — fail — assert_equals: expected 18217 but got 59461
- `encoding/legacy-mb-schinese/gbk/gbk-decoder.any.js :: gbk pointer: 23815` — fail — assert_equals: expected 18300 but got 59462
- `encoding/legacy-mb-schinese/gbk/gbk-decoder.any.js :: gbk pointer: 23816` — fail — assert_equals: expected 18317 but got 59463
- `encoding/legacy-mb-schinese/gbk/gbk-decoder.any.js :: gbk pointer: 23817` — fail — assert_equals: expected 11978 but got 59464
- `encoding/legacy-mb-schinese/gbk/gbk-decoder.any.js :: gbk pointer: 23818` — fail — assert_equals: expected 18759 but got 59465
- `encoding/legacy-mb-schinese/gbk/gbk-decoder.any.js :: gbk pointer: 23819` — fail — assert_equals: expected 18810 but got 59466
- `encoding/legacy-mb-schinese/gbk/gbk-decoder.any.js :: gbk pointer: 23820` — fail — assert_equals: expected 18813 but got 59467
- `encoding/legacy-mb-schinese/gbk/gbk-decoder.any.js :: gbk pointer: 23821` — fail — assert_equals: expected 18818 but got 59468
- `encoding/legacy-mb-schinese/gbk/gbk-decoder.any.js :: gbk pointer: 23822` — fail — assert_equals: expected 18819 but got 59469
- `encoding/legacy-mb-schinese/gbk/gbk-decoder.any.js :: gbk pointer: 23823` — fail — assert_equals: expected 18821 but got 59470
- `encoding/legacy-mb-schinese/gbk/gbk-decoder.any.js :: gbk pointer: 23824` — fail — assert_equals: expected 18822 but got 59471
- `encoding/legacy-mb-schinese/gbk/gbk-decoder.any.js :: gbk pointer: 23825` — fail — assert_equals: expected 18847 but got 59472
- `encoding/legacy-mb-schinese/gbk/gbk-decoder.any.js :: gbk pointer: 23826` — fail — assert_equals: expected 18843 but got 59473
- `encoding/legacy-mb-schinese/gbk/gbk-decoder.any.js :: gbk pointer: 23827` — fail — assert_equals: expected 18871 but got 59474
- `encoding/legacy-mb-schinese/gbk/gbk-decoder.any.js :: gbk pointer: 23828` — fail — assert_equals: expected 18870 but got 59475
- `encoding/legacy-mb-schinese/gbk/gbk-decoder.any.js :: gbk pointer: 23831` — fail — assert_equals: expected 19619 but got 59478
- `encoding/legacy-mb-schinese/gbk/gbk-decoder.any.js :: gbk pointer: 23832` — fail — assert_equals: expected 19615 but got 59479
- `encoding/legacy-mb-schinese/gbk/gbk-decoder.any.js :: gbk pointer: 23833` — fail — assert_equals: expected 19616 but got 59480
- `encoding/legacy-mb-schinese/gbk/gbk-decoder.any.js :: gbk pointer: 23834` — fail — assert_equals: expected 19617 but got 59481
- `encoding/legacy-mb-schinese/gbk/gbk-decoder.any.js :: gbk pointer: 23835` — fail — assert_equals: expected 19575 but got 59482
- `encoding/legacy-mb-schinese/gbk/gbk-decoder.any.js :: gbk pointer: 23836` — fail — assert_equals: expected 19618 but got 59483
- `encoding/legacy-mb-schinese/gbk/gbk-decoder.any.js :: gbk pointer: 23837` — fail — assert_equals: expected 19731 but got 59484
- `encoding/legacy-mb-schinese/gbk/gbk-decoder.any.js :: gbk pointer: 23838` — fail — assert_equals: expected 19732 but got 59485
- `encoding/legacy-mb-schinese/gbk/gbk-decoder.any.js :: gbk pointer: 23839` — fail — assert_equals: expected 19733 but got 59486
- `encoding/legacy-mb-schinese/gbk/gbk-decoder.any.js :: gbk pointer: 23840` — fail — assert_equals: expected 19734 but got 59487
- `encoding/legacy-mb-schinese/gbk/gbk-decoder.any.js :: gbk pointer: 23841` — fail — assert_equals: expected 19735 but got 59488
- `encoding/legacy-mb-schinese/gbk/gbk-decoder.any.js :: gbk pointer: 23842` — fail — assert_equals: expected 19736 but got 59489
- `encoding/legacy-mb-schinese/gbk/gbk-decoder.any.js :: gbk pointer: 23843` — fail — assert_equals: expected 19737 but got 59490
- `encoding/legacy-mb-schinese/gbk/gbk-decoder.any.js :: gbk pointer: 23844` — fail — assert_equals: expected 19886 but got 59491
- `encoding/api-replacement-encodings.any.js :: <file>` — error — ╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: encodings_table is not defined                               │
│                                                                             │
│ In file ../tmp/wpt-elide-zxO4t0/case.js:5242:1:                             │
│   (source excerpt suppressed)                                               │
│─ Stack Trace ───────────────────────────────────────────────────────────────│
│                                                                             │
│ ╭─ [js] :program                          case.js:5242:1-15                 │
│ │                                                                           │
│ · elide run /tmp/wpt-elide-zxO4t0/case.js                                   │
│                                                                             │
│─ Advice ────────────────────────────────────────────────────────────────────│
│                                                                             │
│ An error occurred while executing your code.                                │
│                                                                             │
╰─────────────────────────────────────────────────────────────────────────────╯

- `encoding/streams/decode-ignore-bom.any.js :: ignoreBOM should work for encoding utf-8, split at character 0` — fail — promise_test: Unhandled rejection with value: object "ReferenceError: readableStreamFromArray is not defined"
- `encoding/streams/decode-ignore-bom.any.js :: ignoreBOM should work for encoding utf-8, split at character 1` — fail — promise_test: Unhandled rejection with value: object "ReferenceError: readableStreamFromArray is not defined"
- `encoding/streams/decode-ignore-bom.any.js :: ignoreBOM should work for encoding utf-8, split at character 2` — fail — promise_test: Unhandled rejection with value: object "ReferenceError: readableStreamFromArray is not defined"
- `encoding/streams/decode-ignore-bom.any.js :: ignoreBOM should work for encoding utf-8, split at character 3` — fail — promise_test: Unhandled rejection with value: object "ReferenceError: readableStreamFromArray is not defined"
- `encoding/streams/decode-ignore-bom.any.js :: ignoreBOM should work for encoding utf-16le, split at character 0` — fail — promise_test: Unhandled rejection with value: object "ReferenceError: readableStreamFromArray is not defined"
- `encoding/streams/decode-ignore-bom.any.js :: ignoreBOM should work for encoding utf-16le, split at character 1` — fail — promise_test: Unhandled rejection with value: object "ReferenceError: readableStreamFromArray is not defined"
- `encoding/streams/decode-ignore-bom.any.js :: ignoreBOM should work for encoding utf-16le, split at character 2` — fail — promise_test: Unhandled rejection with value: object "ReferenceError: readableStreamFromArray is not defined"
- `encoding/streams/decode-ignore-bom.any.js :: ignoreBOM should work for encoding utf-16le, split at character 3` — fail — promise_test: Unhandled rejection with value: object "ReferenceError: readableStreamFromArray is not defined"
- `encoding/streams/decode-ignore-bom.any.js :: ignoreBOM should work for encoding utf-16be, split at character 0` — fail — promise_test: Unhandled rejection with value: object "ReferenceError: readableStreamFromArray is not defined"
- `encoding/streams/decode-ignore-bom.any.js :: ignoreBOM should work for encoding utf-16be, split at character 1` — fail — promise_test: Unhandled rejection with value: object "ReferenceError: readableStreamFromArray is not defined"
- `encoding/streams/decode-ignore-bom.any.js :: ignoreBOM should work for encoding utf-16be, split at character 2` — fail — promise_test: Unhandled rejection with value: object "ReferenceError: readableStreamFromArray is not defined"
- `encoding/streams/decode-ignore-bom.any.js :: ignoreBOM should work for encoding utf-16be, split at character 3` — fail — promise_test: Unhandled rejection with value: object "ReferenceError: readableStreamFromArray is not defined"
- `encoding/streams/decode-bad-chunks.any.js :: chunk of type undefined should error the stream` — fail — promise_test: Unhandled rejection with value: object "ReferenceError: TextDecoderStream is not defined"
- `encoding/streams/decode-bad-chunks.any.js :: chunk of type null should error the stream` — fail — promise_test: Unhandled rejection with value: object "ReferenceError: TextDecoderStream is not defined"
- `encoding/streams/decode-bad-chunks.any.js :: chunk of type numeric should error the stream` — fail — promise_test: Unhandled rejection with value: object "ReferenceError: TextDecoderStream is not defined"
- `encoding/streams/decode-bad-chunks.any.js :: chunk of type object, not BufferSource should error the stream` — fail — promise_test: Unhandled rejection with value: object "ReferenceError: TextDecoderStream is not defined"
- `encoding/streams/decode-bad-chunks.any.js :: chunk of type array should error the stream` — fail — promise_test: Unhandled rejection with value: object "ReferenceError: TextDecoderStream is not defined"
- `encoding/api-basics.any.js :: Default encodings` — pass
- `encoding/api-basics.any.js :: Default inputs` — pass
- `encoding/api-basics.any.js :: Encode/decode round trip: utf-8` — pass
- `encoding/api-basics.any.js :: Decode sample: utf-16le` — pass
- `encoding/api-basics.any.js :: Decode sample: utf-16be` — pass
- `encoding/api-basics.any.js :: Decode sample: utf-16` — pass
- `encoding/streams/decode-attributes.any.js :: encoding attribute should have correct value for 'unicode-1-1-utf-8'` — fail — TextDecoderStream is not defined
- `encoding/streams/decode-attributes.any.js :: encoding attribute should have correct value for 'iso-8859-2'` — fail — TextDecoderStream is not defined
- `encoding/streams/decode-attributes.any.js :: encoding attribute should have correct value for 'ascii'` — fail — TextDecoderStream is not defined
- `encoding/streams/decode-attributes.any.js :: encoding attribute should have correct value for 'utf-16'` — fail — TextDecoderStream is not defined
- `encoding/streams/decode-attributes.any.js :: setting fatal to 'false' should set the attribute to false` — fail — TextDecoderStream is not defined
- `encoding/streams/decode-attributes.any.js :: setting ignoreBOM to 'false' should set the attribute to false` — fail — TextDecoderStream is not defined
- `encoding/streams/decode-attributes.any.js :: setting fatal to '0' should set the attribute to false` — fail — TextDecoderStream is not defined
- `encoding/streams/decode-attributes.any.js :: setting ignoreBOM to '0' should set the attribute to false` — fail — TextDecoderStream is not defined
- `encoding/streams/decode-attributes.any.js :: setting fatal to '' should set the attribute to false` — fail — TextDecoderStream is not defined
- `encoding/streams/decode-attributes.any.js :: setting ignoreBOM to '' should set the attribute to false` — fail — TextDecoderStream is not defined
- `encoding/streams/decode-attributes.any.js :: setting fatal to 'undefined' should set the attribute to false` — fail — TextDecoderStream is not defined
- `encoding/streams/decode-attributes.any.js :: setting ignoreBOM to 'undefined' should set the attribute to false` — fail — TextDecoderStream is not defined
- `encoding/streams/decode-attributes.any.js :: setting fatal to 'null' should set the attribute to false` — fail — TextDecoderStream is not defined
- `encoding/streams/decode-attributes.any.js :: setting ignoreBOM to 'null' should set the attribute to false` — fail — TextDecoderStream is not defined
- `encoding/streams/decode-attributes.any.js :: setting fatal to 'true' should set the attribute to true` — fail — TextDecoderStream is not defined
- `encoding/streams/decode-attributes.any.js :: setting ignoreBOM to 'true' should set the attribute to true` — fail — TextDecoderStream is not defined
- `encoding/streams/decode-attributes.any.js :: setting fatal to '1' should set the attribute to true` — fail — TextDecoderStream is not defined
- `encoding/streams/decode-attributes.any.js :: setting ignoreBOM to '1' should set the attribute to true` — fail — TextDecoderStream is not defined
- `encoding/streams/decode-attributes.any.js :: setting fatal to '[object Object]' should set the attribute to true` — fail — TextDecoderStream is not defined
- `encoding/streams/decode-attributes.any.js :: setting ignoreBOM to '[object Object]' should set the attribute to true` — fail — TextDecoderStream is not defined
- `encoding/streams/decode-attributes.any.js :: setting fatal to '' should set the attribute to true` — fail — TextDecoderStream is not defined
- `encoding/streams/decode-attributes.any.js :: setting ignoreBOM to '' should set the attribute to true` — fail — TextDecoderStream is not defined
- `encoding/streams/decode-attributes.any.js :: setting fatal to 'yes' should set the attribute to true` — fail — TextDecoderStream is not defined
- `encoding/streams/decode-attributes.any.js :: setting ignoreBOM to 'yes' should set the attribute to true` — fail — TextDecoderStream is not defined
- `encoding/streams/decode-attributes.any.js :: constructing with an invalid encoding should throw` — fail — assert_throws_js: the constructor should throw function "() => new TextDecoderStream('')" threw object "ReferenceError: TextDecoderStream is not defined" ("ReferenceError") expected instance of function "function RangeError() { [native code] }" ("RangeError")
- `encoding/streams/decode-attributes.any.js :: constructing with a non-stringifiable encoding should throw` — fail — assert_throws_js: the constructor should throw function "() => new TextDecoderStream({
    toString() { return {}; }
  })" threw object "ReferenceError: TextDecoderStream is not defined" ("ReferenceError") expected instance of function "function TypeError() { [native code] }" ("TypeError")
- `encoding/streams/decode-attributes.any.js :: a throwing fatal member should cause the constructor to throw` — fail — assert_throws_js: the constructor should throw function "() => new TextDecoderStream('utf-8', {
                     get fatal() { throw new Error(); }
                   })" threw object "ReferenceError: TextDecoderStream is not defined" ("ReferenceError") expected instance of function "function Error() { [native code] }" ("Error")
- `encoding/streams/decode-attributes.any.js :: a throwing ignoreBOM member should cause the constructor to throw` — fail — assert_throws_js: the constructor should throw function "() => new TextDecoderStream('utf-8', {
                     get ignoreBOM() { throw new Error(); }
                   })" threw object "ReferenceError: TextDecoderStream is not defined" ("ReferenceError") expected instance of function "function Error() { [native code] }" ("Error")
- `encoding/legacy-mb-schinese/gb18030/gb18030-decoder.any.js :: <file>` — error — ╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: ranges is not defined                                        │
│                                                                             │
│ In file ../tmp/wpt-elide-gKNgXw/case.js:5328:21:                            │
│   (source excerpt suppressed)                                               │
│─ Stack Trace ───────────────────────────────────────────────────────────────│
│                                                                             │
│ ╭─ [js] :program                          case.js:5328:21-26                │
│ │                                                                           │
│ · elide run /tmp/wpt-elide-gKNgXw/case.js                                   │
│                                                                             │
│─ Advice ────────────────────────────────────────────────────────────────────│
│                                                                             │
│ An error occurred while executing your code.                                │
│                                                                             │
╰─────────────────────────────────────────────────────────────────────────────╯

- `encoding/iso-2022-jp-decoder.any.js :: iso-2022-jp decoder: Error ESC` — fail — assert_equals: expected "\ufffd$" but got "\ufffd"
- `encoding/iso-2022-jp-decoder.any.js :: iso-2022-jp decoder: Error ESC, character` — fail — assert_equals: expected "\ufffd$P" but got "\ufffd"
- `encoding/iso-2022-jp-decoder.any.js :: iso-2022-jp decoder: ASCII ESC, character` — pass
- `encoding/iso-2022-jp-decoder.any.js :: iso-2022-jp decoder: Double ASCII ESC, character` — fail — assert_equals: expected "\ufffdP" but got "P"
- `encoding/iso-2022-jp-decoder.any.js :: iso-2022-jp decoder: character, ASCII ESC, character` — pass
- `encoding/iso-2022-jp-decoder.any.js :: iso-2022-jp decoder: characters` — pass
- `encoding/iso-2022-jp-decoder.any.js :: iso-2022-jp decoder: SO / SI` — fail — assert_equals: expected "\r\ufffd\ufffd\x10" but got "\r\x10"
- `encoding/iso-2022-jp-decoder.any.js :: iso-2022-jp decoder: Roman ESC, characters` — pass
- `encoding/iso-2022-jp-decoder.any.js :: iso-2022-jp decoder: Roman ESC, SO / SI` — fail — assert_equals: expected "\r\ufffd\ufffd\x10" but got "\r\x10"
- `encoding/iso-2022-jp-decoder.any.js :: iso-2022-jp decoder: Roman ESC, error ESC, Katakana ESC` — fail — assert_equals: expected "\ufffdﾐ" but got "\ufffd(IP"
- `encoding/iso-2022-jp-decoder.any.js :: iso-2022-jp decoder: Katakana ESC, character` — pass
- `encoding/iso-2022-jp-decoder.any.js :: iso-2022-jp decoder: Katakana ESC, multibyte ESC, character` — fail — assert_equals: expected "\ufffd佩" but got "佩"
- `encoding/iso-2022-jp-decoder.any.js :: iso-2022-jp decoder: Katakana ESC, error ESC, character` — fail — assert_equals: expected "\ufffdﾐ" but got "\ufffd"
- `encoding/iso-2022-jp-decoder.any.js :: iso-2022-jp decoder: Katakana ESC, error ESC #2, character` — fail — assert_equals: expected "\ufffd､ﾐ" but got "\ufffd"
- `encoding/iso-2022-jp-decoder.any.js :: iso-2022-jp decoder: Katakana ESC, character, Katakana ESC, character` — pass
- `encoding/iso-2022-jp-decoder.any.js :: iso-2022-jp decoder: Katakana ESC, SO / SI` — fail — assert_equals: expected "\ufffd\ufffd\ufffd\ufffd" but got "ｍｐ"
- `encoding/iso-2022-jp-decoder.any.js :: iso-2022-jp decoder: Multibyte ESC, character` — pass
- `encoding/iso-2022-jp-decoder.any.js :: iso-2022-jp decoder: Multibyte ESC #2, character` — pass
- `encoding/iso-2022-jp-decoder.any.js :: iso-2022-jp decoder: Multibyte ESC, error ESC, character` — fail — assert_equals: expected "\ufffd佩" but got "\ufffd\ufffd"
- `encoding/iso-2022-jp-decoder.any.js :: iso-2022-jp decoder: Double multibyte ESC` — fail — assert_equals: expected "\ufffd" but got ""
- `encoding/iso-2022-jp-decoder.any.js :: iso-2022-jp decoder: Double multibyte ESC, character` — fail — assert_equals: expected "\ufffd佩" but got "佩"
- `encoding/iso-2022-jp-decoder.any.js :: iso-2022-jp decoder: Double multibyte ESC #2, character` — fail — assert_equals: expected "\ufffd佩" but got "佩"
- `encoding/iso-2022-jp-decoder.any.js :: iso-2022-jp decoder: Multibyte ESC, error ESC #2, character` — fail — assert_equals: expected "\ufffdば\ufffd" but got "\ufffd\ufffd"
- `encoding/iso-2022-jp-decoder.any.js :: iso-2022-jp decoder: Multibyte ESC, single byte, multibyte ESC, character` — fail — assert_equals: expected "\ufffd佩" but got "\ufffdだ佩"
- `encoding/iso-2022-jp-decoder.any.js :: iso-2022-jp decoder: Multibyte ESC, lead error byte` — fail — assert_equals: expected "\ufffd\ufffd" but got "\ufffd"
- `encoding/iso-2022-jp-decoder.any.js :: iso-2022-jp decoder: Multibyte ESC, trail error byte` — pass
- `encoding/iso-2022-jp-decoder.any.js :: iso-2022-jp decoder: character, error ESC` — pass
- `encoding/iso-2022-jp-decoder.any.js :: iso-2022-jp decoder: character, error ESC #2` — fail — assert_equals: expected "P\ufffd$" but got "P\ufffd"
- `encoding/iso-2022-jp-decoder.any.js :: iso-2022-jp decoder: character, error ESC #3` — fail — assert_equals: expected "P\ufffdP" but got "P\ufffd"
- `encoding/iso-2022-jp-decoder.any.js :: iso-2022-jp decoder: character, ASCII ESC` — pass
- `encoding/iso-2022-jp-decoder.any.js :: iso-2022-jp decoder: character, Roman ESC` — pass
- `encoding/iso-2022-jp-decoder.any.js :: iso-2022-jp decoder: character, Katakana ESC` — pass
- `encoding/iso-2022-jp-decoder.any.js :: iso-2022-jp decoder: character, Multibyte ESC` — pass
- `encoding/iso-2022-jp-decoder.any.js :: iso-2022-jp decoder: character, Multibyte ESC #2` — pass
- `encoding/api-surrogates-utf8.any.js :: Invalid surrogates encoded into UTF-8: Sanity check` — pass
- `encoding/api-surrogates-utf8.any.js :: Invalid surrogates encoded into UTF-8: Surrogate half (low)` — pass
- `encoding/api-surrogates-utf8.any.js :: Invalid surrogates encoded into UTF-8: Surrogate half (high)` — pass
- `encoding/api-surrogates-utf8.any.js :: Invalid surrogates encoded into UTF-8: Surrogate half (low), in a string` — pass
- `encoding/api-surrogates-utf8.any.js :: Invalid surrogates encoded into UTF-8: Surrogate half (high), in a string` — pass
- `encoding/api-surrogates-utf8.any.js :: Invalid surrogates encoded into UTF-8: Wrong order` — pass
- `encoding/encodeInto.any.js :: encodeInto() into ArrayBuffer with Hi and destination length 0, offset 0, filler 0` — fail — createBuffer is not defined
- `encoding/encodeInto.any.js :: encodeInto() into SharedArrayBuffer with Hi and destination length 0, offset 0, filler 0` — fail — createBuffer is not defined
- `encoding/encodeInto.any.js :: encodeInto() into ArrayBuffer with Hi and destination length 0, offset 4, filler 0` — fail — createBuffer is not defined
- `encoding/encodeInto.any.js :: encodeInto() into SharedArrayBuffer with Hi and destination length 0, offset 4, filler 0` — fail — createBuffer is not defined
- `encoding/encodeInto.any.js :: encodeInto() into ArrayBuffer with Hi and destination length 0, offset 0, filler 128` — fail — createBuffer is not defined
- `encoding/encodeInto.any.js :: encodeInto() into SharedArrayBuffer with Hi and destination length 0, offset 0, filler 128` — fail — createBuffer is not defined
- `encoding/encodeInto.any.js :: encodeInto() into ArrayBuffer with Hi and destination length 0, offset 4, filler 128` — fail — createBuffer is not defined
- `encoding/encodeInto.any.js :: encodeInto() into SharedArrayBuffer with Hi and destination length 0, offset 4, filler 128` — fail — createBuffer is not defined
- `encoding/encodeInto.any.js :: encodeInto() into ArrayBuffer with Hi and destination length 0, offset 0, filler random` — fail — createBuffer is not defined
- `encoding/encodeInto.any.js :: encodeInto() into SharedArrayBuffer with Hi and destination length 0, offset 0, filler random` — fail — createBuffer is not defined
- `encoding/encodeInto.any.js :: encodeInto() into ArrayBuffer with Hi and destination length 0, offset 4, filler random` — fail — createBuffer is not defined
- `encoding/encodeInto.any.js :: encodeInto() into SharedArrayBuffer with Hi and destination length 0, offset 4, filler random` — fail — createBuffer is not defined
- `encoding/encodeInto.any.js :: encodeInto() into ArrayBuffer with A and destination length 10, offset 0, filler 0` — fail — createBuffer is not defined
- `encoding/encodeInto.any.js :: encodeInto() into SharedArrayBuffer with A and destination length 10, offset 0, filler 0` — fail — createBuffer is not defined
- `encoding/encodeInto.any.js :: encodeInto() into ArrayBuffer with A and destination length 10, offset 4, filler 0` — fail — createBuffer is not defined
- `encoding/encodeInto.any.js :: encodeInto() into SharedArrayBuffer with A and destination length 10, offset 4, filler 0` — fail — createBuffer is not defined
- `encoding/encodeInto.any.js :: encodeInto() into ArrayBuffer with A and destination length 10, offset 0, filler 128` — fail — createBuffer is not defined
- `encoding/encodeInto.any.js :: encodeInto() into SharedArrayBuffer with A and destination length 10, offset 0, filler 128` — fail — createBuffer is not defined
- `encoding/encodeInto.any.js :: encodeInto() into ArrayBuffer with A and destination length 10, offset 4, filler 128` — fail — createBuffer is not defined
- `encoding/encodeInto.any.js :: encodeInto() into SharedArrayBuffer with A and destination length 10, offset 4, filler 128` — fail — createBuffer is not defined
- …and 2100 more
