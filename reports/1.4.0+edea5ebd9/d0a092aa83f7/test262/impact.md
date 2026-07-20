# Impact-ordered failures

## By root-cause signature

### 2 × `en-US-u-nu-hanidec: display all time units in <n>-digit Expected SameValue(«false», «true») to be true`

distinct messages:
- `en-US-u-nu-hanidec: display all time units in 2-digit Expected SameValue(«false», «true») to be true`
example test: `test/intl402/DateTimeFormat/prototype/format/numbering-system.js default`

### 2 × `islamic-civil eras (Anno Hegirae,Anno Hegirae) should be unique Expected SameValue(«<n>», «<n>») to be true`

distinct messages:
- `islamic-civil eras (Anno Hegirae,Anno Hegirae) should be unique Expected SameValue(«1», «2») to be true`
example test: `test/intl402/DateTimeFormat/prototype/formatToParts/era.js default`

### 2 × `non-continental timezone Etc/GMT+<n> is not supported`

distinct messages:
- `non-continental timezone Etc/GMT+1 is not supported`
example test: `test/intl402/Intl/supportedValuesOf/timeZones-include-non-continental.js strict mode`

## By feature

| count | feature |
|---:|---|
| 2 | Intl-enumeration |
| 2 | Intl.Era-monthcode |
