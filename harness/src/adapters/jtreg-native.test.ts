import { expect, test } from "bun:test";
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import {
  buildNative,
  compileCommand,
  excluded,
  HEADER_DIRS,
  nativeSources,
  nativeTarget,
} from "./jtreg-native";

const target = (os: "darwin" | "linux") => nativeTarget(os === "darwin" ? "darwin" : "linux");
const command = (source: string, os: "darwin" | "linux") =>
  compileCommand({
    source: `/corpus/${source}`,
    outDir: "/out",
    javaHome: "/jdk",
    srcRoot: "/src",
    testLibNative: "/corpus/../lib/native",
    target: target(os),
  });

test("artifact names match what tests look up, not the source file names", () => {
  // System.loadLibrary("LookupTest") resolves libLookupTest.<ext>; the prefix is re-added by
  // the platform, so the source's own `lib` prefix is what the name is built from.
  expect(command("java/foreign/libLookupTest.c", "darwin").output).toBe("/out/libLookupTest.dylib");
  expect(command("java/foreign/libLookupTest.c", "linux").output).toBe("/out/libLookupTest.so");
  // createNativeTestProcessBuilder("NullCallerTest") runs a bare executable: `exe` is stripped.
  expect(command("jni/nullCaller/exeNullCallerTest.c", "linux").output).toBe("/out/NullCallerTest");
  // Objective-C sources are libraries like any other.
  expect(command("java/awt/libTestMainKeyWindow.m", "darwin").output).toBe(
    "/out/libTestMainKeyWindow.dylib",
  );
});

test("the compiler invocation carries what the makefile adds for each source", () => {
  const foreign = command("java/foreign/libLookupTest.c", "linux").argv;
  expect(foreign).toContain("-shared");
  expect(foreign).toContain("-fPIC");
  expect(foreign).toContain("-I/jdk/include");
  expect(foreign).toContain("-I/jdk/include/linux");
  // TEST_CFLAGS, and the source's own directory for its private headers.
  expect(foreign).toContain("-I/corpus/../lib/native");
  expect(foreign).toContain("-I/corpus/java/foreign");
  // macOS builds a dylib, never a plain -shared object.
  expect(command("java/foreign/libLookupTest.c", "darwin").argv).toContain("-dynamiclib");

  // BUILD_JDK_JTREG_LIBRARIES_LDFLAGS_libAsyncStackWalk := -pthread
  expect(command("java/foreign/libAsyncStackWalk.c", "linux").argv).toContain("-pthread");
  expect(foreign).not.toContain("-pthread");
  // JDK_LIBS := java.base:libjava — and libjvm lives one directory deeper.
  expect(command("java/io/libGetXSpace.c", "linux").argv).toEqual(
    expect.arrayContaining(["-L/jdk/lib", "-ljava"]),
  );
  expect(command("jni/exeCallerAccessTest.c", "linux").argv).toEqual(
    expect.arrayContaining(["-L/jdk/lib/server", "-ljvm"]),
  );
  expect(command("jni/nullCaller/exeNullCallerTest.c", "linux").argv).toContain("-lc++");
  // Frameworks are macOS-only; the sources needing them are excluded elsewhere.
  expect(command("java/awt/libTestMainKeyWindow.m", "darwin").argv).toEqual(
    expect.arrayContaining(["-framework", "Cocoa"]),
  );
  // -ldl is a Linux line in the makefile, inside `ifeq ($(call isTargetOs, linux))`.
  expect(command("java/nio/libCreationTimeHelper.c", "linux").argv).toContain("-ldl");
  expect(command("java/nio/libCreationTimeHelper.c", "darwin").argv).not.toContain("-ldl");

  // The four internal header roots: JDK_LIBS implies libjava's and libjli's headers, which
  // reach hotspot's jvm.h and its platform jvm_md.h in turn.
  const includes = HEADER_DIRS("linux");
  expect(includes).toContain("java.base/share/native/libjava");
  expect(includes).toContain("java.base/share/native/libjli");
  expect(includes).toContain("hotspot/share/include");
  expect(includes).toContain("hotspot/os/posix/include");
  for (const dir of includes) expect(foreign).toContain(`-I/src/${dir}`);
});

test("platform exclusions follow the makefile, in both directions", () => {
  // BUILD_JDK_JTREG_EXCLUDE += exelauncher.c   (macosx)
  expect(excluded("tools/launcher/exelauncher.c", "darwin")).toBe(true);
  expect(excluded("tools/launcher/exelauncher.c", "linux")).toBe(false);
  // The Cocoa sources and three executables are excluded everywhere but macOS.
  for (const file of ["libTestMainKeyWindow.m", "libTestDynamicStore.m", "exeJniInvocationTest.c"]) {
    expect(excluded(`java/awt/${file}`, "linux")).toBe(true);
    expect(excluded(`java/awt/${file}`, "darwin")).toBe(false);
  }
  // exerevokeall.c is Windows-only, so it is excluded on both of this lane's targets.
  expect(excluded("java/io/exerevokeall.c", "darwin")).toBe(true);
  expect(excluded("java/io/exerevokeall.c", "linux")).toBe(true);
});

test("a source that will not compile fails the build instead of publishing a partial tree", async () => {
  const root = await mkdtemp(join(tmpdir(), "bali-native-"));
  try {
    const suite = join(root, "test/jdk");
    await Bun.write(join(suite, "ok/libFine.c"), "int fine(void) { return 0; }\n");
    await Bun.write(join(suite, "bad/libBroken.c"), "this is not C;\n");
    expect((await nativeSources(suite)).map((s) => s.slice(suite.length + 1))).toEqual([
      "bad/libBroken.c",
      "ok/libFine.c",
    ]);

    const build = buildNative({
      suite,
      srcRoot: join(root, "src"),
      javaHome: join(root, "jdk"),
      cacheDir: join(root, "cache"),
      sourceDigest: "fixture",
      scratch: root,
    });
    await expect(build).rejects.toThrow("libBroken.c");
    // Nothing was published: a half-built tree would silently unmeasure whatever is missing.
    expect(await Array.fromAsync(new Bun.Glob("**/*").scan({ cwd: join(root, "cache") })).catch(() => [])).toEqual([]);
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});
