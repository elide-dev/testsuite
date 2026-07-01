# Impact-ordered failures

## By root-cause signature

### 40 × `system error (exit code <n>)`

distinct messages:
- `system error (exit code 3)`
example test: `tools/javac/7129225/TestImportStar.java`

### 3 × `Compilation failed: Compilation failed`

distinct messages:
- `Compilation failed: Compilation failed`
example test: `tools/javac/completionDeps/DepsAndDocLint.java`

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

### 1 × `Output does not match reference file: InvalidAnonymous.out, line <n>`

distinct messages:
- `Output does not match reference file: InvalidAnonymous.out, line 1`
example test: `tools/javac/6563143/InvalidAnonymous.java`

### 1 × `Output does not match reference file: RepeatingTargetNotAllowed.out, line <n>`

distinct messages:
- `Output does not match reference file: RepeatingTargetNotAllowed.out, line 1`
example test: `tools/javac/annotations/repeatingAnnotations/RepeatingTargetNotAllowed.java`

### 1 × `Output does not match reference file: StaticFields.out, line <n>`

distinct messages:
- `Output does not match reference file: StaticFields.out, line 1`
example test: `tools/javac/annotations/typeAnnotations/failures/StaticFields.java`

### 1 × `Output does not match reference file: T6734819a.out, line <n>`

distinct messages:
- `Output does not match reference file: T6734819a.out, line 1`
example test: `tools/javac/6734819/T6734819a.java`
