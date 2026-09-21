package requires;

import java.io.File;
import java.lang.management.ManagementFactory;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.Callable;

/**
 * Portable {@code @requires} property definitions for the Bali jdk-jtreg lane.
 *
 * <p>Upstream's {@code test/jtreg-ext/requires/VMProps.java} answers through WhiteBox and HotSpot
 * diagnostic flags, neither of which a non-HotSpot runtime has. This class answers the same
 * property names from public APIs only, so the stock reference JDK and Bali evaluate one
 * definition. jtreg compiles it with the compile JDK and runs it once per run on the JDK under
 * test, before any test is selected.
 *
 * <p>Answers describe availability, not correctness: a collector or subsystem that a runtime does
 * not ship is {@code false} there, so tests requiring it are not run on that runtime and count as
 * Bali differences when the reference JDK runs them. The source of this file is part of the
 * reference-baseline fingerprint; changing it re-measures the stock JDK.
 */
public class VMProps implements Callable<Map<String, String>> {
  private static final String VM_NAME = System.getProperty("java.vm.name", "");
  // Native Image reports "Substrate VM"; every HotSpot build ("OpenJDK 64-Bit Server VM",
  // "Java HotSpot(TM) 64-Bit Server VM") is treated as HotSpot. Bali's boot layer lists the
  // image's own modules, so module presence is only meaningful on HotSpot.
  private static final boolean HOTSPOT = !VM_NAME.contains("Substrate");

  @Override
  public Map<String, String> call() {
    Map<String, String> map = new HashMap<>();
    map.put("vm.flavor", vmFlavor());
    map.put("vm.compMode", vmCompMode());
    map.put("vm.bits", System.getProperty("sun.arch.data.model", "64"));
    map.put("vm.flightRecorder", "false");
    map.put("vm.simpleArch", simpleArch());
    map.put("vm.debug", "false");
    map.put("vm.jvmci", "false");
    map.put("vm.jvmci.enabled", "false");
    map.put("vm.emulatedClient", "false");
    map.put("vm.hasSA", String.valueOf(HOTSPOT && hasModule("jdk.hotspot.agent")));
    map.put("vm.hasJFR", String.valueOf(HOTSPOT && hasModule("jdk.jfr")));
    map.put("vm.hasDTrace", "false");
    map.put("vm.jvmti", String.valueOf(HOTSPOT));
    map.put("vm.cpu.features", "");
    map.put("vm.pageSize", "4096");
    map.put("vm.rtm.cpu", "false");
    map.put("vm.rtm.compiler", "false");
    map.put("vm.cds", String.valueOf(HOTSPOT));
    map.put("vm.cds.custom.loaders", String.valueOf(HOTSPOT));
    map.put("vm.cds.supports.aot.class.linking", String.valueOf(HOTSPOT));
    map.put("vm.cds.supports.aot.code.caching", "false");
    map.put("vm.cds.write.archived.java.heap", String.valueOf(HOTSPOT));
    map.put("vm.continuations", "true");
    map.put("vm.graal.enabled", "false");
    map.put("jdk.hasLibgraal", "false");
    map.put("vm.libgraal.jit", "false");
    map.put("java.enablePreview", String.valueOf(Boolean.getBoolean("test.enable.preview") || hasVmOption("--enable-preview")));
    map.put("vm.compiler1.enabled", String.valueOf(HOTSPOT));
    map.put("vm.compiler2.enabled", String.valueOf(HOTSPOT));
    map.put("container.support", "false");
    map.put("systemd.support", "false");
    map.put("vm.musl", "false");
    map.put("release.implementor", implementor());
    map.put("jdk.containerized", "false");
    map.put("vm.flagless", String.valueOf(isFlagless()));
    map.put("jdk.foreign.linker", String.valueOf(foreignLinker()));
    map.put("jlink.runtime.linkable", "false");
    map.put("jlink.packagedModules", String.valueOf(Files.isDirectory(Paths.get(System.getProperty("java.home"), "jmods"))));
    map.put("jdk.static", "false");
    // Collector availability: HotSpot builds ship G1, Serial, Parallel and Z; Bali is Serial-only
    // (docs/DIVERGENCES.md D5). Shenandoah and Epsilon are treated as absent on both.
    map.put("vm.gc.G1", String.valueOf(HOTSPOT));
    map.put("vm.gc.Serial", "true");
    map.put("vm.gc.Parallel", String.valueOf(HOTSPOT));
    map.put("vm.gc.Shenandoah", "false");
    map.put("vm.gc.Epsilon", "false");
    map.put("vm.gc.Z", String.valueOf(HOTSPOT));
    map.put("vm.gc.ZGenerational", "false");
    map.put("vm.gc", vmGc());
    map.put("vm.opt.final.ClassUnloading", "true");
    map.put("vm.opt.final.ZGenerational", "false");
    return map;
  }

  private static boolean hasModule(String name) {
    return ModuleLayer.boot().findModule(name).isPresent();
  }

  private static List<String> vmOptions() {
    String opts = System.getProperty("test.vm.opts", "") + " " + System.getProperty("test.java.opts", "");
    return List.of(opts.trim().split("\\s+"));
  }

  private static boolean hasVmOption(String option) {
    return vmOptions().contains(option);
  }

  private static String vmFlavor() {
    if (VM_NAME.contains("Client")) return "client";
    if (VM_NAME.contains("Minimal")) return "minimal";
    if (VM_NAME.contains("Zero")) return "zero";
    return "server";
  }

  private static String vmCompMode() {
    if (hasVmOption("-Xint")) return "Xint";
    if (hasVmOption("-Xcomp")) return "Xcomp";
    return "Xmixed";
  }

  private static String simpleArch() {
    String arch = System.getProperty("os.arch", "");
    switch (arch) {
      case "amd64":
      case "x86_64":
        return "x64";
      case "i386":
      case "i586":
      case "i686":
        return "x86";
      default:
        return arch;
    }
  }

  private static String implementor() {
    Path release = Paths.get(System.getProperty("java.home"), "release");
    try {
      for (String line : Files.readAllLines(release)) {
        if (line.startsWith("IMPLEMENTOR=")) return line.substring("IMPLEMENTOR=".length()).replace("\"", "");
      }
    } catch (Exception ignored) {
      // Absent release file: no implementor claim.
    }
    return "";
  }

  private static boolean isFlagless() {
    for (String option : vmOptions()) {
      if (option.isEmpty()) continue;
      if (option.startsWith("-D") || option.startsWith("-ea") || option.startsWith("-esa") || option.startsWith("-da")) continue;
      if (option.startsWith("-Xmx") || option.startsWith("-Xms") || option.startsWith("-Xss") || option.startsWith("-Xmn")) continue;
      if (option.startsWith("-X") || option.startsWith("--")) return false;
    }
    return true;
  }

  private static boolean foreignLinker() {
    String os = System.getProperty("os.name", "").toLowerCase();
    String arch = simpleArch();
    return (os.contains("linux") || os.contains("mac") || os.contains("windows"))
        && (arch.equals("x64") || arch.equals("aarch64"));
  }

  private static String vmGc() {
    for (String option : vmOptions()) {
      if (option.startsWith("-XX:+Use") && option.endsWith("GC")) return option.substring("-XX:+Use".length(), option.length() - 2);
    }
    if (!HOTSPOT) return "Serial";
    for (var bean : ManagementFactory.getGarbageCollectorMXBeans()) {
      String n = bean.getName();
      if (n.startsWith("G1")) return "G1";
      if (n.startsWith("ZGC")) return "Z";
      if (n.startsWith("PS ")) return "Parallel";
      if (n.equals("Copy") || n.equals("MarkSweepCompact")) return "Serial";
      if (n.startsWith("Shenandoah")) return "Shenandoah";
    }
    return "";
  }
}
