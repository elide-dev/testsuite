# Impact-ordered failures

## By root-cause signature

### 1 × `╭─ Script Error ──────────────────────────────────────────────────────────────╮ │ReferenceError: setTimeout is not defined │ │ │ │ In file <loc>: │ │ ╭─ │ │─ St`

distinct messages:
- `╭─ Script Error ──────────────────────────────────────────────────────────────╮
│ReferenceError: setTimeout is not defined                                    │
│                                                                             │
│ In file test/parallel/test-eventtarget-memoryleakwarning.j`
example test: `test/parallel/test-eventtarget-memoryleakwarning.js`

## By feature

| count | feature |
|---:|---|
| 1 | node:events |
