# wpt-wintertc — `1.3.6+20260629.e4591fc`

- Image digest: `3d3ea83ed6403be11d119eb0234efa699809d81a801986659790996c18306a06`
- Suite version: `1eb456f600fedad07c8cd6439796fb81db54faff`
- Ran: 2026-06-29T19:54:29.725Z → 2026-06-29T19:54:35.081Z

## Summary

![Pass-rate chart](./pass-rate.svg)

**Pass rate: 835/2300 (36.30%)**

| pass | fail | error | skip | regressions | new passes |
|---:|---:|---:|---:|---:|---:|
| 835 | 1324 | 141 | 0 | 0 | 0 |

## Observed cases (2300)

- `encoding/api-basics.any.js :: Default encodings` — pass
- `encoding/api-basics.any.js :: Default inputs` — pass
- `encoding/api-basics.any.js :: Encode/decode round trip: utf-8` — pass
- `encoding/api-basics.any.js :: Decode sample: utf-16le` — pass
- `encoding/api-basics.any.js :: Decode sample: utf-16be` — pass
- `encoding/api-basics.any.js :: Decode sample: utf-16` — pass
- `encoding/api-surrogates-utf8.any.js :: Invalid surrogates encoded into UTF-8: Sanity check` — pass
- `encoding/api-surrogates-utf8.any.js :: Invalid surrogates encoded into UTF-8: Surrogate half (low)` — pass
- `encoding/api-surrogates-utf8.any.js :: Invalid surrogates encoded into UTF-8: Surrogate half (high)` — pass
- `encoding/api-surrogates-utf8.any.js :: Invalid surrogates encoded into UTF-8: Surrogate half (low), in a string` — pass
- `encoding/api-surrogates-utf8.any.js :: Invalid surrogates encoded into UTF-8: Surrogate half (high), in a string` — pass
- `encoding/api-surrogates-utf8.any.js :: Invalid surrogates encoded into UTF-8: Wrong order` — pass
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
- `encoding/encodeInto.any.js :: encodeInto() into ArrayBuffer with A and destination length 10, offset 0, filler random` — fail — createBuffer is not defined
- `encoding/encodeInto.any.js :: encodeInto() into SharedArrayBuffer with A and destination length 10, offset 0, filler random` — fail — createBuffer is not defined
- `encoding/encodeInto.any.js :: encodeInto() into ArrayBuffer with A and destination length 10, offset 4, filler random` — fail — createBuffer is not defined
- `encoding/encodeInto.any.js :: encodeInto() into SharedArrayBuffer with A and destination length 10, offset 4, filler random` — fail — createBuffer is not defined
- `encoding/encodeInto.any.js :: encodeInto() into ArrayBuffer with 𝌆 and destination length 4, offset 0, filler 0` — fail — createBuffer is not defined
- `encoding/encodeInto.any.js :: encodeInto() into SharedArrayBuffer with 𝌆 and destination length 4, offset 0, filler 0` — fail — createBuffer is not defined
- `encoding/encodeInto.any.js :: encodeInto() into ArrayBuffer with 𝌆 and destination length 4, offset 4, filler 0` — fail — createBuffer is not defined
- `encoding/encodeInto.any.js :: encodeInto() into SharedArrayBuffer with 𝌆 and destination length 4, offset 4, filler 0` — fail — createBuffer is not defined
- `encoding/encodeInto.any.js :: encodeInto() into ArrayBuffer with 𝌆 and destination length 4, offset 0, filler 128` — fail — createBuffer is not defined
- `encoding/encodeInto.any.js :: encodeInto() into SharedArrayBuffer with 𝌆 and destination length 4, offset 0, filler 128` — fail — createBuffer is not defined
- `encoding/encodeInto.any.js :: encodeInto() into ArrayBuffer with 𝌆 and destination length 4, offset 4, filler 128` — fail — createBuffer is not defined
- `encoding/encodeInto.any.js :: encodeInto() into SharedArrayBuffer with 𝌆 and destination length 4, offset 4, filler 128` — fail — createBuffer is not defined
- `encoding/encodeInto.any.js :: encodeInto() into ArrayBuffer with 𝌆 and destination length 4, offset 0, filler random` — fail — createBuffer is not defined
- `encoding/encodeInto.any.js :: encodeInto() into SharedArrayBuffer with 𝌆 and destination length 4, offset 0, filler random` — fail — createBuffer is not defined
- `encoding/encodeInto.any.js :: encodeInto() into ArrayBuffer with 𝌆 and destination length 4, offset 4, filler random` — fail — createBuffer is not defined
- `encoding/encodeInto.any.js :: encodeInto() into SharedArrayBuffer with 𝌆 and destination length 4, offset 4, filler random` — fail — createBuffer is not defined
- `encoding/encodeInto.any.js :: encodeInto() into ArrayBuffer with 𝌆A and destination length 3, offset 0, filler 0` — fail — createBuffer is not defined
- `encoding/encodeInto.any.js :: encodeInto() into SharedArrayBuffer with 𝌆A and destination length 3, offset 0, filler 0` — fail — createBuffer is not defined
- `encoding/encodeInto.any.js :: encodeInto() into ArrayBuffer with 𝌆A and destination length 3, offset 4, filler 0` — fail — createBuffer is not defined
- `encoding/encodeInto.any.js :: encodeInto() into SharedArrayBuffer with 𝌆A and destination length 3, offset 4, filler 0` — fail — createBuffer is not defined
- `encoding/encodeInto.any.js :: encodeInto() into ArrayBuffer with 𝌆A and destination length 3, offset 0, filler 128` — fail — createBuffer is not defined
- `encoding/encodeInto.any.js :: encodeInto() into SharedArrayBuffer with 𝌆A and destination length 3, offset 0, filler 128` — fail — createBuffer is not defined
- `encoding/encodeInto.any.js :: encodeInto() into ArrayBuffer with 𝌆A and destination length 3, offset 4, filler 128` — fail — createBuffer is not defined
- `encoding/encodeInto.any.js :: encodeInto() into SharedArrayBuffer with 𝌆A and destination length 3, offset 4, filler 128` — fail — createBuffer is not defined
- `encoding/encodeInto.any.js :: encodeInto() into ArrayBuffer with 𝌆A and destination length 3, offset 0, filler random` — fail — createBuffer is not defined
- `encoding/encodeInto.any.js :: encodeInto() into SharedArrayBuffer with 𝌆A and destination length 3, offset 0, filler random` — fail — createBuffer is not defined
- `encoding/encodeInto.any.js :: encodeInto() into ArrayBuffer with 𝌆A and destination length 3, offset 4, filler random` — fail — createBuffer is not defined
- `encoding/encodeInto.any.js :: encodeInto() into SharedArrayBuffer with 𝌆A and destination length 3, offset 4, filler random` — fail — createBuffer is not defined
- `encoding/encodeInto.any.js :: encodeInto() into ArrayBuffer with U+d834AU+df06A¥Hi and destination length 10, offset 0, filler 0` — fail — createBuffer is not defined
- `encoding/encodeInto.any.js :: encodeInto() into SharedArrayBuffer with U+d834AU+df06A¥Hi and destination length 10, offset 0, filler 0` — fail — createBuffer is not defined
- `encoding/encodeInto.any.js :: encodeInto() into ArrayBuffer with U+d834AU+df06A¥Hi and destination length 10, offset 4, filler 0` — fail — createBuffer is not defined
- `encoding/encodeInto.any.js :: encodeInto() into SharedArrayBuffer with U+d834AU+df06A¥Hi and destination length 10, offset 4, filler 0` — fail — createBuffer is not defined
- `encoding/encodeInto.any.js :: encodeInto() into ArrayBuffer with U+d834AU+df06A¥Hi and destination length 10, offset 0, filler 128` — fail — createBuffer is not defined
- `encoding/encodeInto.any.js :: encodeInto() into SharedArrayBuffer with U+d834AU+df06A¥Hi and destination length 10, offset 0, filler 128` — fail — createBuffer is not defined
- `encoding/encodeInto.any.js :: encodeInto() into ArrayBuffer with U+d834AU+df06A¥Hi and destination length 10, offset 4, filler 128` — fail — createBuffer is not defined
- `encoding/encodeInto.any.js :: encodeInto() into SharedArrayBuffer with U+d834AU+df06A¥Hi and destination length 10, offset 4, filler 128` — fail — createBuffer is not defined
- `encoding/encodeInto.any.js :: encodeInto() into ArrayBuffer with U+d834AU+df06A¥Hi and destination length 10, offset 0, filler random` — fail — createBuffer is not defined
- `encoding/encodeInto.any.js :: encodeInto() into SharedArrayBuffer with U+d834AU+df06A¥Hi and destination length 10, offset 0, filler random` — fail — createBuffer is not defined
- `encoding/encodeInto.any.js :: encodeInto() into ArrayBuffer with U+d834AU+df06A¥Hi and destination length 10, offset 4, filler random` — fail — createBuffer is not defined
- `encoding/encodeInto.any.js :: encodeInto() into SharedArrayBuffer with U+d834AU+df06A¥Hi and destination length 10, offset 4, filler random` — fail — createBuffer is not defined
- `encoding/encodeInto.any.js :: encodeInto() into ArrayBuffer with AU+df06 and destination length 4, offset 0, filler 0` — fail — createBuffer is not defined
- `encoding/encodeInto.any.js :: encodeInto() into SharedArrayBuffer with AU+df06 and destination length 4, offset 0, filler 0` — fail — createBuffer is not defined
- `encoding/encodeInto.any.js :: encodeInto() into ArrayBuffer with AU+df06 and destination length 4, offset 4, filler 0` — fail — createBuffer is not defined
- `encoding/encodeInto.any.js :: encodeInto() into SharedArrayBuffer with AU+df06 and destination length 4, offset 4, filler 0` — fail — createBuffer is not defined
- `encoding/encodeInto.any.js :: encodeInto() into ArrayBuffer with AU+df06 and destination length 4, offset 0, filler 128` — fail — createBuffer is not defined
- `encoding/encodeInto.any.js :: encodeInto() into SharedArrayBuffer with AU+df06 and destination length 4, offset 0, filler 128` — fail — createBuffer is not defined
- `encoding/encodeInto.any.js :: encodeInto() into ArrayBuffer with AU+df06 and destination length 4, offset 4, filler 128` — fail — createBuffer is not defined
- `encoding/encodeInto.any.js :: encodeInto() into SharedArrayBuffer with AU+df06 and destination length 4, offset 4, filler 128` — fail — createBuffer is not defined
- `encoding/encodeInto.any.js :: encodeInto() into ArrayBuffer with AU+df06 and destination length 4, offset 0, filler random` — fail — createBuffer is not defined
- `encoding/encodeInto.any.js :: encodeInto() into SharedArrayBuffer with AU+df06 and destination length 4, offset 0, filler random` — fail — createBuffer is not defined
- `encoding/encodeInto.any.js :: encodeInto() into ArrayBuffer with AU+df06 and destination length 4, offset 4, filler random` — fail — createBuffer is not defined
- `encoding/encodeInto.any.js :: encodeInto() into SharedArrayBuffer with AU+df06 and destination length 4, offset 4, filler random` — fail — createBuffer is not defined
- `encoding/encodeInto.any.js :: encodeInto() into ArrayBuffer with ¥¥ and destination length 4, offset 0, filler 0` — fail — createBuffer is not defined
- `encoding/encodeInto.any.js :: encodeInto() into SharedArrayBuffer with ¥¥ and destination length 4, offset 0, filler 0` — fail — createBuffer is not defined
- `encoding/encodeInto.any.js :: encodeInto() into ArrayBuffer with ¥¥ and destination length 4, offset 4, filler 0` — fail — createBuffer is not defined
- `encoding/encodeInto.any.js :: encodeInto() into SharedArrayBuffer with ¥¥ and destination length 4, offset 4, filler 0` — fail — createBuffer is not defined
- `encoding/encodeInto.any.js :: encodeInto() into ArrayBuffer with ¥¥ and destination length 4, offset 0, filler 128` — fail — createBuffer is not defined
- `encoding/encodeInto.any.js :: encodeInto() into SharedArrayBuffer with ¥¥ and destination length 4, offset 0, filler 128` — fail — createBuffer is not defined
- `encoding/encodeInto.any.js :: encodeInto() into ArrayBuffer with ¥¥ and destination length 4, offset 4, filler 128` — fail — createBuffer is not defined
- `encoding/encodeInto.any.js :: encodeInto() into SharedArrayBuffer with ¥¥ and destination length 4, offset 4, filler 128` — fail — createBuffer is not defined
- `encoding/encodeInto.any.js :: encodeInto() into ArrayBuffer with ¥¥ and destination length 4, offset 0, filler random` — fail — createBuffer is not defined
- `encoding/encodeInto.any.js :: encodeInto() into SharedArrayBuffer with ¥¥ and destination length 4, offset 0, filler random` — fail — createBuffer is not defined
- `encoding/encodeInto.any.js :: encodeInto() into ArrayBuffer with ¥¥ and destination length 4, offset 4, filler random` — fail — createBuffer is not defined
- `encoding/encodeInto.any.js :: encodeInto() into SharedArrayBuffer with ¥¥ and destination length 4, offset 4, filler random` — fail — createBuffer is not defined
- `encoding/encodeInto.any.js :: Invalid encodeInto() destination: DataView, backed by: ArrayBuffer` — fail — createBuffer is not defined
- `encoding/encodeInto.any.js :: Invalid encodeInto() destination: DataView, backed by: SharedArrayBuffer` — fail — createBuffer is not defined
- `encoding/encodeInto.any.js :: Invalid encodeInto() destination: Int8Array, backed by: ArrayBuffer` — fail — createBuffer is not defined
- `encoding/encodeInto.any.js :: Invalid encodeInto() destination: Int8Array, backed by: SharedArrayBuffer` — fail — createBuffer is not defined
- `encoding/encodeInto.any.js :: Invalid encodeInto() destination: Int16Array, backed by: ArrayBuffer` — fail — createBuffer is not defined
- `encoding/encodeInto.any.js :: Invalid encodeInto() destination: Int16Array, backed by: SharedArrayBuffer` — fail — createBuffer is not defined
- `encoding/encodeInto.any.js :: Invalid encodeInto() destination: Int32Array, backed by: ArrayBuffer` — fail — createBuffer is not defined
- `encoding/encodeInto.any.js :: Invalid encodeInto() destination: Int32Array, backed by: SharedArrayBuffer` — fail — createBuffer is not defined
- `encoding/encodeInto.any.js :: Invalid encodeInto() destination: Uint16Array, backed by: ArrayBuffer` — fail — createBuffer is not defined
- `encoding/encodeInto.any.js :: Invalid encodeInto() destination: Uint16Array, backed by: SharedArrayBuffer` — fail — createBuffer is not defined
- `encoding/encodeInto.any.js :: Invalid encodeInto() destination: Uint32Array, backed by: ArrayBuffer` — fail — createBuffer is not defined
- `encoding/encodeInto.any.js :: Invalid encodeInto() destination: Uint32Array, backed by: SharedArrayBuffer` — fail — createBuffer is not defined
- `encoding/encodeInto.any.js :: Invalid encodeInto() destination: Uint8ClampedArray, backed by: ArrayBuffer` — fail — createBuffer is not defined
- `encoding/encodeInto.any.js :: Invalid encodeInto() destination: Uint8ClampedArray, backed by: SharedArrayBuffer` — fail — createBuffer is not defined
- `encoding/encodeInto.any.js :: Invalid encodeInto() destination: BigInt64Array, backed by: ArrayBuffer` — fail — createBuffer is not defined
- `encoding/encodeInto.any.js :: Invalid encodeInto() destination: BigInt64Array, backed by: SharedArrayBuffer` — fail — createBuffer is not defined
- `encoding/encodeInto.any.js :: Invalid encodeInto() destination: BigUint64Array, backed by: ArrayBuffer` — fail — createBuffer is not defined
- `encoding/encodeInto.any.js :: Invalid encodeInto() destination: BigUint64Array, backed by: SharedArrayBuffer` — fail — createBuffer is not defined
- `encoding/encodeInto.any.js :: Invalid encodeInto() destination: Float16Array, backed by: ArrayBuffer` — fail — createBuffer is not defined
- `encoding/encodeInto.any.js :: Invalid encodeInto() destination: Float16Array, backed by: SharedArrayBuffer` — fail — createBuffer is not defined
- `encoding/encodeInto.any.js :: Invalid encodeInto() destination: Float32Array, backed by: ArrayBuffer` — fail — createBuffer is not defined
- `encoding/encodeInto.any.js :: Invalid encodeInto() destination: Float32Array, backed by: SharedArrayBuffer` — fail — createBuffer is not defined
- `encoding/encodeInto.any.js :: Invalid encodeInto() destination: Float64Array, backed by: ArrayBuffer` — fail — createBuffer is not defined
- `encoding/encodeInto.any.js :: Invalid encodeInto() destination: Float64Array, backed by: SharedArrayBuffer` — fail — createBuffer is not defined
- `encoding/encodeInto.any.js :: Invalid encodeInto() destination: ArrayBuffer` — fail — assert_throws_js: function "() => new TextEncoder().encodeInto("", createBuffer(arrayBufferOrSharedArrayBuffer, 10))" threw object "ReferenceError: createBuffer is not defined" ("ReferenceError") expected instance of function "function TypeError() { [native code] }" ("TypeError")
- `encoding/encodeInto.any.js :: Invalid encodeInto() destination: SharedArrayBuffer` — fail — assert_throws_js: function "() => new TextEncoder().encodeInto("", createBuffer(arrayBufferOrSharedArrayBuffer, 10))" threw object "ReferenceError: createBuffer is not defined" ("ReferenceError") expected instance of function "function TypeError() { [native code] }" ("TypeError")
- `encoding/encodeInto.any.js :: encodeInto() and a detached output buffer` — fail — value of type Direct is not yet supported by structured clone
- `encoding/legacy-mb-schinese/gb18030/gb18030-decoder.any.js :: <file>` — error — ╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: ranges is not defined                                        │
│                                                                             │
│ In file ../tmp/wpt-elide-5E9rEh/case.js:5328:21:                            │
│   (source excerpt suppressed)                                               │
│─ Stack Trace ───────────────────────────────────────────────────────────────│
│                                                                             │
│ ╭─ [js] :program                          case.js:5328:21-26                │
│ │                                                                           │
│ · elide run /tmp/wpt-elide-5E9rEh/case.js                                   │
│                                                                             │
│─ Advice ────────────────────────────────────────────────────────────────────│
│                                                                             │
│ An error occurred while executing your code.                                │
│                                                                             │
╰─────────────────────────────────────────────────────────────────────────────╯

- `encoding/api-replacement-encodings.any.js :: <file>` — error — ╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: encodings_table is not defined                               │
│                                                                             │
│ In file ../tmp/wpt-elide-B4wmNd/case.js:5242:1:                             │
│   (source excerpt suppressed)                                               │
│─ Stack Trace ───────────────────────────────────────────────────────────────│
│                                                                             │
│ ╭─ [js] :program                          case.js:5242:1-15                 │
│ │                                                                           │
│ · elide run /tmp/wpt-elide-B4wmNd/case.js                                   │
│                                                                             │
│─ Advice ────────────────────────────────────────────────────────────────────│
│                                                                             │
│ An error occurred while executing your code.                                │
│                                                                             │
╰─────────────────────────────────────────────────────────────────────────────╯

- `encoding/api-invalid-label.any.js :: <file>` — error — ╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: subsetTest is not defined                                    │
│                                                                             │
│ In file ../tmp/wpt-elide-LlbVAt/case.js:5264:3:                             │
│   (source excerpt suppressed)                                               │
│─ Stack Trace ───────────────────────────────────────────────────────────────│
│                                                                             │
│ ╭─ [js] :anonymous                        case.js:5264:3-12                 │
│ │                                                                           │
│ · elide run /tmp/wpt-elide-LlbVAt/case.js                                   │
│                                                                             │
│─ Advice ────────────────────────────────────────────────────────────────────│
│                                                                             │
│ An error occurred while executing your code.                                │
│                                                                             │
╰─────────────────────────────────────────────────────────────────────────────╯

- `encoding/idlharness.any.js :: <file>` — error — ╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: idl_test is not defined                                      │
│                                                                             │
│ In file ../tmp/wpt-elide-1pzVRF/case.js:5243:1:                             │
│   (source excerpt suppressed)                                               │
│─ Stack Trace ───────────────────────────────────────────────────────────────│
│                                                                             │
│ ╭─ [js] :program                          case.js:5243:1-8                  │
│ │                                                                           │
│ · elide run /tmp/wpt-elide-1pzVRF/case.js                                   │
│                                                                             │
│─ Advice ────────────────────────────────────────────────────────────────────│
│                                                                             │
│ An error occurred while executing your code.                                │
│                                                                             │
╰─────────────────────────────────────────────────────────────────────────────╯

- `encoding/replacement-encodings.any.js :: <file>` — error — ╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: encodings_table is not defined                               │
│                                                                             │
│ In file ../tmp/wpt-elide-BPk9ir/case.js:5244:1:                             │
│   (source excerpt suppressed)                                               │
│─ Stack Trace ───────────────────────────────────────────────────────────────│
│                                                                             │
│ ╭─ [js] :program                          case.js:5244:1-15                 │
│ │                                                                           │
│ · elide run /tmp/wpt-elide-BPk9ir/case.js                                   │
│                                                                             │
│─ Advice ────────────────────────────────────────────────────────────────────│
│                                                                             │
│ An error occurred while executing your code.                                │
│                                                                             │
╰─────────────────────────────────────────────────────────────────────────────╯

- `encoding/streams/backpressure.any.js :: write() should not complete until read relieves backpressure for TextDecoderStream` — fail — promise_test: Unhandled rejection with value: object "TypeError: (intermediate value)[streamClass.name] is not a constructor"
- `encoding/streams/backpressure.any.js :: additional writes should wait for backpressure to be relieved for class TextDecoderStream` — fail — promise_test: Unhandled rejection with value: object "TypeError: (intermediate value)[streamClass.name] is not a constructor"
- `encoding/streams/backpressure.any.js :: write() should not complete until read relieves backpressure for TextEncoderStream` — fail — promise_test: Unhandled rejection with value: object "TypeError: (intermediate value)[streamClass.name] is not a constructor"
- `encoding/streams/backpressure.any.js :: additional writes should wait for backpressure to be relieved for class TextEncoderStream` — fail — promise_test: Unhandled rejection with value: object "TypeError: (intermediate value)[streamClass.name] is not a constructor"
- `encoding/single-byte-decoder.window.js :: <file>` — error — ╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: encodings_table is not defined                               │
│                                                                             │
│ In file ../tmp/wpt-elide-4HOrQq/case.js:5245:27:                            │
│   (source excerpt suppressed)                                               │
│─ Stack Trace ───────────────────────────────────────────────────────────────│
│                                                                             │
│ ╭─ [js] :program                          case.js:5245:27-41                │
│ │                                                                           │
│ · elide run /tmp/wpt-elide-4HOrQq/case.js                                   │
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
- …and 2100 more
