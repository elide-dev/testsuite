# Impact-ordered failures

## By root-cause signature

### 25 × `system error (exit code <n>)`

distinct messages:
- `system error (exit code 3)`
example test: `tools/javac/MethodParameters/ClassReaderTest/ClassReaderTest.java`

### 4 × `<str> timed out after <n> ms (elapsed time including timeout handling <n> ms)`

distinct messages:
- `'/work/.harness/work/javac-jtreg/jtreg-run-LTVMgT/wrapper-jdk/bin/java' timed out after 120000 ms (elapsed time including timeout handling 120295 ms)`
- `'/work/.harness/work/javac-jtreg/jtreg-run-LTVMgT/wrapper-jdk/bin/java' timed out after 120000 ms (elapsed time including timeout handling 120296 ms)`
- `'/work/.harness/work/javac-jtreg/jtreg-run-LTVMgT/wrapper-jdk/bin/java' timed out after 120000 ms (elapsed time including timeout handling 120360 ms)`
- `'/work/.harness/work/javac-jtreg/jtreg-run-LTVMgT/wrapper-jdk/bin/java' timed out after 120000 ms (elapsed time including timeout handling 120246 ms)`
example test: `tools/javac/cast/intersection/IntersectionTypeCastTest.java`

### 2 × `Execution failed: ʼmain' threw exception: toolbox.Task$TaskError: Task javac failed: rc=<n>`

distinct messages:
- `Execution failed: ʼmain' threw exception: toolbox.Task$TaskError: Task javac failed: rc=1`
- `Execution failed: ʼmain' threw exception: toolbox.Task$TaskError: Task javac failed: rc=2`
example test: `tools/javac/ClassPathTest/ClassPathTest.java`

### 1 × `Compilation failed: Compilation failed`

distinct messages:
- `Compilation failed: Compilation failed`
example test: `tools/javac/completionDeps/DepsAndDocLint.java`
