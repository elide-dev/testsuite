# Impact-ordered failures

## By root-cause signature

### 1 × `Error: write EPIPE`

distinct messages:
- `Error: write EPIPE`
example test: `test/parallel/test-http-keep-alive-pipeline-max-requests.js`

### 1 × `Node API test timed out`

distinct messages:
- `Node API test timed out`
example test: `test/parallel/test-zlib-params.js`

## By feature

| count | feature |
|---:|---|
| 1 | node:http |
| 1 | node:zlib |
