# Impact-ordered failures

## By root-cause signature

### 25 × `system error (exit code <n>)`

distinct messages:
- `system error (exit code 3)`
example test: `tools/javac/MethodParameters/ClassReaderTest/ClassReaderTest.java`

### 2 × `<str> timed out after <n> ms (elapsed time including timeout handling <n> ms)`

distinct messages:
- `'/work/.harness/work/javac-jtreg/jtreg-run-lexxws/wrapper-jdk/bin/java' timed out after 120000 ms (elapsed time including timeout handling 120202 ms)`
- `'/work/.harness/work/javac-jtreg/jtreg-run-lexxws/wrapper-jdk/bin/java' timed out after 120000 ms (elapsed time including timeout handling 120153 ms)`
example test: `tools/javac/file/zip/T6836682.java`

### 2 × `Execution failed: ʼmain' threw exception: toolbox.Task$TaskError: Task javac failed: rc=<n>`

distinct messages:
- `Execution failed: ʼmain' threw exception: toolbox.Task$TaskError: Task javac failed: rc=1`
- `Execution failed: ʼmain' threw exception: toolbox.Task$TaskError: Task javac failed: rc=2`
example test: `tools/javac/ClassPathTest/ClassPathTest.java`

### 2 × `Test ignored: <n> emit correct byte code an attributes for type annotations`

distinct messages:
- `Test ignored: 8057687 emit correct byte code an attributes for type annotations`
example test: `tools/javac/annotations/typeAnnotations/referenceinfos/Lambda.java`

### 1 × `Can't find source file: /work/.harness/work/javac-jtreg/jtreg-run-lexxws/suite/test/langtools/../../make/langtools/src/classes/build/tools/symbolgenerator/Creat`

distinct messages:
- `Can't find source file: /work/.harness/work/javac-jtreg/jtreg-run-lexxws/suite/test/langtools/../../make/langtools/src/classes/build/tools/symbolgenerator/CreateSymbols.java`
example test: `tools/javac/platform/createsymbols/CreateSymbolsReproducibleTest.java`

### 1 × `Compilation failed: Compilation failed`

distinct messages:
- `Compilation failed: Compilation failed`
example test: `tools/javac/completionDeps/DepsAndDocLint.java`

### 1 × `Test ignored: <n> improve ordering of errors with type annotations`

distinct messages:
- `Test ignored: 8057683 improve ordering of errors with type annotations`
example test: `tools/javac/warnings/suppress/TypeAnnotations.java`

### 1 × `Test ignored: <n> ToolBox does not close opened files`

distinct messages:
- `Test ignored: 8055768 ToolBox does not close opened files`
example test: `tools/javac/Paths/AbsolutePathTest.java`
