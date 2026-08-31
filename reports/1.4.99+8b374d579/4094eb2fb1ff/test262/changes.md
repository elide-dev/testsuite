# Changes — `1.4.2+8bf2c6fb1` → `1.4.99+8b374d579`

- From: `1.4.2+8bf2c6fb1` (`dce38dd7dc4c0629f1243b903348ae90e1a4f5eb6f78df1e52b7521e6883605e`)
- To: `1.4.99+8b374d579` (`4094eb2fb1ff122e2707260d4bea151c43278a01e4d16e2ac400c66de8cdff77`)

| regressed | fixed | added | removed | still failing |
|---:|---:|---:|---:|---:|
| 52 | 0 | 0 | 0 | 48 |

## ❌ Regressed (52)

- `test/intl402/Collator/prototype/resolvedOptions/ignorePunctuation-default.js default`
- `test/intl402/Collator/prototype/resolvedOptions/ignorePunctuation-default.js strict mode`
- `test/intl402/DateTimeFormat/prototype/format/temporal-objects-no-time-clip-non-latin-numerals.js default`
- `test/intl402/DateTimeFormat/prototype/format/temporal-objects-no-time-clip-non-latin-numerals.js strict mode`
- `test/intl402/DateTimeFormat/prototype/resolvedOptions/hourCycle-default.js default`
- `test/intl402/DateTimeFormat/prototype/resolvedOptions/hourCycle-default.js strict mode`
- `test/intl402/Intl/supportedValuesOf/numberingSystems-accepted-by-DateTimeFormat.js default`
- `test/intl402/Intl/supportedValuesOf/numberingSystems-accepted-by-DateTimeFormat.js strict mode`
- `test/intl402/Intl/supportedValuesOf/numberingSystems-accepted-by-RelativeTimeFormat.js default`
- `test/intl402/Intl/supportedValuesOf/numberingSystems-accepted-by-RelativeTimeFormat.js strict mode`
- `test/intl402/NumberFormat/prototype/format/notation-compact-ja-JP.js default`
- `test/intl402/NumberFormat/prototype/format/notation-compact-ja-JP.js strict mode`
- `test/intl402/NumberFormat/prototype/format/notation-compact-ko-KR.js default`
- `test/intl402/NumberFormat/prototype/format/notation-compact-ko-KR.js strict mode`
- `test/intl402/NumberFormat/prototype/format/signDisplay-currency-ko-KR.js default`
- `test/intl402/NumberFormat/prototype/format/signDisplay-currency-ko-KR.js strict mode`
- `test/intl402/NumberFormat/prototype/format/signDisplay-negative-currency-ko-KR.js default`
- `test/intl402/NumberFormat/prototype/format/signDisplay-negative-currency-ko-KR.js strict mode`
- `test/intl402/NumberFormat/prototype/format/unit-ja-JP.js default`
- `test/intl402/NumberFormat/prototype/format/unit-ja-JP.js strict mode`
- `test/intl402/NumberFormat/prototype/format/unit-ko-KR.js default`
- `test/intl402/NumberFormat/prototype/format/unit-ko-KR.js strict mode`
- `test/intl402/NumberFormat/prototype/formatRange/pt-PT.js default`
- `test/intl402/NumberFormat/prototype/formatRange/pt-PT.js strict mode`
- `test/intl402/NumberFormat/prototype/formatToParts/notation-compact-ja-JP.js default`
- `test/intl402/NumberFormat/prototype/formatToParts/notation-compact-ja-JP.js strict mode`
- `test/intl402/NumberFormat/prototype/formatToParts/notation-compact-ko-KR.js default`
- `test/intl402/NumberFormat/prototype/formatToParts/notation-compact-ko-KR.js strict mode`
- `test/intl402/NumberFormat/prototype/formatToParts/signDisplay-currency-ko-KR.js default`
- `test/intl402/NumberFormat/prototype/formatToParts/signDisplay-currency-ko-KR.js strict mode`
- `test/intl402/NumberFormat/prototype/formatToParts/signDisplay-negative-currency-ko-KR.js default`
- `test/intl402/NumberFormat/prototype/formatToParts/signDisplay-negative-currency-ko-KR.js strict mode`
- `test/intl402/NumberFormat/prototype/formatToParts/unit-ja-JP.js default`
- `test/intl402/NumberFormat/prototype/formatToParts/unit-ja-JP.js strict mode`
- `test/intl402/NumberFormat/prototype/formatToParts/unit-ko-KR.js default`
- `test/intl402/NumberFormat/prototype/formatToParts/unit-ko-KR.js strict mode`
- `test/intl402/RelativeTimeFormat/prototype/format/pl-pl-style-long.js default`
- `test/intl402/RelativeTimeFormat/prototype/format/pl-pl-style-long.js strict mode`
- `test/intl402/RelativeTimeFormat/prototype/format/pl-pl-style-narrow.js default`
- `test/intl402/RelativeTimeFormat/prototype/format/pl-pl-style-narrow.js strict mode`
- `test/intl402/RelativeTimeFormat/prototype/format/pl-pl-style-short.js default`
- `test/intl402/RelativeTimeFormat/prototype/format/pl-pl-style-short.js strict mode`
- `test/intl402/RelativeTimeFormat/prototype/formatToParts/pl-pl-style-long.js default`
- `test/intl402/RelativeTimeFormat/prototype/formatToParts/pl-pl-style-long.js strict mode`
- `test/intl402/RelativeTimeFormat/prototype/formatToParts/pl-pl-style-narrow.js default`
- `test/intl402/RelativeTimeFormat/prototype/formatToParts/pl-pl-style-narrow.js strict mode`
- `test/intl402/RelativeTimeFormat/prototype/formatToParts/pl-pl-style-short.js default`
- `test/intl402/RelativeTimeFormat/prototype/formatToParts/pl-pl-style-short.js strict mode`
- `test/intl402/Segmenter/prototype/segment/containing/word-iswordlike.js default`
- `test/intl402/Segmenter/prototype/segment/containing/word-iswordlike.js strict mode`
- `test/intl402/Segmenter/prototype/segment/segment-word-iterable.js default`
- `test/intl402/Segmenter/prototype/segment/segment-word-iterable.js strict mode`
