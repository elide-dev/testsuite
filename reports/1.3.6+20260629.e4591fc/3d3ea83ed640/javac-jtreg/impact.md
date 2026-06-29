# Impact-ordered failures

## By root-cause signature

### 190 × `system error (exit code <n>)`

distinct messages:
- `system error (exit code 3)`
example test: `tools/javac/7129225/TestImportStar.java`

### 3 × `Compilation failed: Compilation failed`

distinct messages:
- `Compilation failed: Compilation failed`
example test: `tools/javac/completionDeps/DepsAndDocLint.java`

### 2 × `<str> timed out after <n> ms (elapsed time including timeout handling <n> ms)`

distinct messages:
- `'/work/.harness/work/javac-jtreg/jtreg-run-rxnl3v/wrapper-jdk/bin/java' timed out after 300000 ms (elapsed time including timeout handling 300207 ms)`
- `'/work/.harness/work/javac-jtreg/jtreg-run-rxnl3v/wrapper-jdk/bin/java' timed out after 300000 ms (elapsed time including timeout handling 300169 ms)`
example test: `tools/javac/file/zip/T6836682.java`

### 1 × `Execution failed: ʼmain' threw exception: java.lang.AssertionError: The compiler output should have one line only`

distinct messages:
- `Execution failed: ʼmain' threw exception: java.lang.AssertionError: The compiler output should have one line only`
example test: `tools/javac/newlines/NewLineTest.java`

### 1 × `Execution failed: ʼmain' threw exception: java.lang.Exception: <n> errors found`

distinct messages:
- `Execution failed: ʼmain' threw exception: java.lang.Exception: 2 errors found`
example test: `tools/javac/modules/AllDefaultTest.java`

### 1 × `Execution failed: ʼmain' threw exception: toolbox.Task$TaskError: Task javac failed: rc=<n>`

distinct messages:
- `Execution failed: ʼmain' threw exception: toolbox.Task$TaskError: Task javac failed: rc=2`
example test: `tools/javac/platform/PlatformProviderTest.java`
