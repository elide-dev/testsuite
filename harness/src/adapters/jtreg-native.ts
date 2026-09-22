/**
 * Build jtreg's native test support from the pinned corpus.
 *
 * Tests whose `@run` action carries the `/native` modifier call into a compiled C helper, and
 * jtreg refuses to run them at all without `-nativepath` ("Use -nativepath to specify the
 * location of native code"). The C sources ship inside the corpus; only the built artifacts are
 * missing, and upstream produces them with `make build-test-jdk-jtreg-native`.
 *
 * A full OpenJDK `configure` and build is not needed to get them: the makefile's own rules come
 * down to one compiler invocation per source, and everything it adds beyond that is the table
 * below. Each entry is transcribed from `make/test/JtregNativeJdk.gmk` at the pinned revision
 * and is meant to be diffed against it when the corpus pin moves.
 */
import { $ } from "bun";
import { createHash } from "node:crypto";
import { mkdir, readdir, rename, rm } from "node:fs/promises";
import { arch } from "node:os";
import { basename, dirname, join } from "node:path";

/**
 * Bump when this table, the layout, or the naming changes: it is part of the reference
 * fingerprint, because which tests the stock JDK passes depends on what was built here.
 */
export const NATIVE_BUILD = 1;

/** `BUILD_JDK_JTREG_EXCLUDE`, per target OS. Windows is not a target of this lane. */
const EXCLUDE = {
  darwin: ["exelauncher.c", "exerevokeall.c"],
  linux: [
    "exerevokeall.c",
    "libTestMainKeyWindow.m",
    "libTestDynamicStore.m",
    "exeJniInvocationTest.c",
    "exeLibraryCache.c",
  ],
} as const;

/** `BUILD_JDK_JTREG_LIBRARIES_LDFLAGS_* := -pthread`, plus libCreationTimeHelper's -ldl on Linux. */
const PTHREAD = new Set([
  "libNativeThread",
  "libAsyncStackWalk",
  "libAsyncInvokers",
  "libLinkerInvokerUnnamed",
  "libLinkerInvokerModule",
  "libLoaderLookupInvoker",
  "libExplicitAttach",
  "libImplicitAttach",
]);

/**
 * `..._JDK_LIBS_<name> := java.base:<lib>`. Linking against the reference JDK's own libraries is
 * what the build does with the JDK it was configured for; JNI is ABI-stable across both runtimes.
 */
const JDK_LIBS: Record<string, string> = {
  libstringPlatformChars: "java",
  libGetXSpace: "java",
  exeJliLaunchTest: "jli",
  exeJniInvocationTest: "jli",
  exeCallerAccessTest: "jvm",
  exeNullCallerTest: "jvm",
};

/** Remaining per-file flags, each with its makefile line. */
const EXTRA: Record<string, string[]> = {
  // BUILD_JDK_JTREG_LIBRARIES_LIBS_libTestMainKeyWindow := -framework Cocoa
  libTestMainKeyWindow: ["-framework", "Cocoa"],
  // BUILD_JDK_JTREG_LIBRARIES_LIBS_libTestDynamicStore := -framework Cocoa -framework SystemConfiguration
  libTestDynamicStore: ["-framework", "Cocoa", "-framework", "SystemConfiguration"],
  // BUILD_JDK_JTREG_EXECUTABLES_LIBS_exeNullCallerTest := $(LIBCXX)
  exeNullCallerTest: ["-lc++"],
  // BUILD_JDK_JTREG_LIBRARIES_CFLAGS_libFib := -g, never stripped
  libFib: ["-g"],
};
const LINUX_EXTRA: Record<string, string[]> = {
  // BUILD_JDK_JTREG_LIBRARIES_LDFLAGS_libCreationTimeHelper := -ldl
  libCreationTimeHelper: ["-ldl"],
  // BUILD_JDK_JTREG_EXECUTABLES_LIBS_exelauncher := -ldl
  exelauncher: ["-ldl"],
};

/**
 * Directories of the JDK's own sources that the build puts on the include path. `JDK_LIBS`
 * implies the linked library's headers, and exeJliLaunchTest names libjli's explicitly; those
 * headers reach hotspot's `jvm.h` and its platform `jvm_md.h` in turn. Relative to `src/`.
 */
export const HEADER_DIRS = (os: "darwin" | "linux") => [
  "java.base/share/native/libjava",
  "java.base/unix/native/libjava",
  `java.base/${os === "darwin" ? "macosx" : "linux"}/native/libjava`,
  "java.base/share/native/libjli",
  "java.base/unix/native/libjli",
  `java.base/${os === "darwin" ? "macosx" : "linux"}/native/libjli`,
  "java.base/share/native/include",
  "java.base/unix/native/include",
  "hotspot/share/include",
  "hotspot/os/posix/include",
];

export type NativeTarget = { os: "darwin" | "linux"; sharedExt: string; jniDir: string };

export function nativeTarget(platform = process.platform): NativeTarget {
  if (platform === "darwin") return { os: "darwin", sharedExt: "dylib", jniDir: "darwin" };
  return { os: "linux", sharedExt: "so", jniDir: "linux" };
}

/** Whether the makefile excludes this source on this OS. */
export const excluded = (file: string, os: "darwin" | "linux") =>
  (EXCLUDE[os] as readonly string[]).includes(basename(file));

/**
 * The compiler invocation for one source, and the artifact it produces.
 *
 * `SetupTestFilesCompilation` strips the `lib`/`exe` prefix to form the name, so `libFoo.c`
 * becomes the platform's `libFoo.<ext>` and `exeFoo.c` becomes a bare `Foo` — which is the name
 * tests pass to `System.loadLibrary` and `createNativeTestProcessBuilder`. Both land in one flat
 * directory, as the test image's `FLATTEN := true` produces.
 */
export function compileCommand(options: {
  source: string;
  outDir: string;
  javaHome: string;
  srcRoot: string;
  testLibNative: string;
  target: NativeTarget;
}): { output: string; argv: string[] } {
  const { source, outDir, javaHome, srcRoot, testLibNative, target } = options;
  const stem = basename(source).replace(/\.(c|cpp|m)$/, "");
  const library = stem.startsWith("lib");
  const output = join(outDir, library ? `${stem}.${target.sharedExt}` : stem.replace(/^exe/, ""));
  const argv = [
    process.env.CC ?? "cc",
    ...(library ? (target.os === "darwin" ? ["-dynamiclib"] : ["-shared", "-fPIC"]) : []),
    "-o",
    output,
    source,
    `-I${join(javaHome, "include")}`,
    `-I${join(javaHome, "include", target.jniDir)}`,
    // TEST_CFLAGS := -I$(TOPDIR)/test/lib/native
    `-I${testLibNative}`,
    `-I${dirname(source)}`,
    ...HEADER_DIRS(target.os).map((dir) => `-I${join(srcRoot, dir)}`),
    // The corpus is upstream's; its warnings are not this harness's to report on.
    "-w",
    ...(PTHREAD.has(stem) ? ["-pthread"] : []),
    ...(EXTRA[stem] ?? []),
    ...(target.os === "linux" ? (LINUX_EXTRA[stem] ?? []) : []),
  ];
  const lib = JDK_LIBS[stem];
  if (lib === "jvm") argv.push(`-L${join(javaHome, "lib", "server")}`, "-ljvm");
  else if (lib) argv.push(`-L${join(javaHome, "lib")}`, `-l${lib}`);
  return { output, argv };
}

/** Every native source in the corpus, in a stable order. */
export async function nativeSources(suite: string): Promise<string[]> {
  const found: string[] = [];
  for await (const relative of new Bun.Glob("**/{lib,exe}*.{c,cpp,m}").scan({ cwd: suite }))
    found.push(join(suite, relative));
  return found.sort();
}

/** Identifies a built tree: the corpus, the platform, the compiler, and this table. */
export async function nativeKey(sourceDigest: string, javaHome: string): Promise<string> {
  const cc = await $`${process.env.CC ?? "cc"} --version`.quiet().nothrow();
  return createHash("sha256")
    .update(
      JSON.stringify({
        source: sourceDigest,
        platform: `${process.platform}-${arch()}`,
        build: NATIVE_BUILD,
        compiler: `${cc.stdout}`.split("\n")[0] ?? "unknown",
        javaHome,
      }),
    )
    .digest("hex")
    .slice(0, 16);
}

export type NativeBuild = { path: string; built: number; excluded: number; cached: boolean };

/**
 * Compile the corpus's native test support into a cached directory and return it for
 * `-nativepath`. Cached on the corpus pin, platform, compiler and table version, so it is paid
 * once; a partially built tree is never published, because the directory is only moved into
 * place after every source has compiled.
 */
export async function buildNative(options: {
  suite: string;
  srcRoot: string;
  javaHome: string;
  cacheDir: string;
  sourceDigest: string;
  scratch: string;
}): Promise<NativeBuild> {
  const target = nativeTarget();
  const key = await nativeKey(options.sourceDigest, options.javaHome);
  const path = join(options.cacheDir, key);
  const sources = await nativeSources(options.suite);
  const wanted = sources.filter((source) => !excluded(source, target.os));
  if ((await readdir(path).catch(() => null))?.includes(".complete"))
    return { path, built: wanted.length, excluded: sources.length - wanted.length, cached: true };

  const staging = join(options.scratch, `native-${key}`);
  await rm(staging, { recursive: true, force: true });
  await mkdir(staging, { recursive: true });
  const testLibNative = join(options.suite, "../lib/native");
  const failures: string[] = [];
  // Independent compilations; the machine has more than one core and there are ~70 of them.
  await Promise.all(
    wanted.map(async (source) => {
      const { argv } = compileCommand({
        source,
        outDir: staging,
        javaHome: options.javaHome,
        srcRoot: options.srcRoot,
        testLibNative,
        target,
      });
      const result = await $`${argv}`.quiet().nothrow();
      if (result.exitCode !== 0)
        failures.push(`${source.slice(options.suite.length + 1)}: ${`${result.stderr}`.trim().split("\n")[0]}`);
    }),
  );
  if (failures.length)
    throw new Error(
      `Could not build jtreg native test support (${failures.length} of ${wanted.length} sources):\n  ${failures.slice(0, 5).join("\n  ")}`,
    );
  await Bun.write(join(staging, ".complete"), `${new Date().toISOString()}\n`);
  await mkdir(options.cacheDir, { recursive: true });
  await rm(path, { recursive: true, force: true });
  await rename(staging, path);
  return { path, built: wanted.length, excluded: sources.length - wanted.length, cached: false };
}
