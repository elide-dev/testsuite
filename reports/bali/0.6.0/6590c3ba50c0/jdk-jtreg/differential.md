# Bali OpenJDK compatibility

Suite: jdk-jtreg. 12755 test files inventoried (multiple variants count as one file).

| Outcome | Files |
|---|---:|
| Pass on both runtimes | 1432 |
| Reference passes; Bali does not | 30 |
| Reference issues | 5 |
| Unsupported by adapter | 11288 |

Completed inventory run; known failures remain visible.

This measures the pinned test/jdk inventory, not Java SE certification. Stock javac compiles both runtime selections.

## Areas

| Area | Inventory | Runnable | Pass on both |
|---|---:|---:|---:|
| build/AbsPathsInImage.java | 1 | 0 | 0 |
| build/releaseFile | 1 | 1 | 0 |
| build/translations | 1 | 0 | 0 |
| com/apple | 3 | 0 | 0 |
| com/sun | 639 | 68 | 68 |
| demo/jfc | 1 | 0 | 0 |
| java/awt | 2240 | 0 | 0 |
| java/beans | 349 | 0 | 0 |
| java/foreign | 106 | 0 | 0 |
| java/io | 434 | 234 | 232 |
| java/lang | 1102 | 247 | 237 |
| java/math | 54 | 34 | 34 |
| java/net | 668 | 137 | 135 |
| java/nio | 387 | 89 | 87 |
| java/rmi | 83 | 0 | 0 |
| java/security | 209 | 103 | 102 |
| java/sql | 2 | 0 | 0 |
| java/text | 189 | 44 | 43 |
| java/time | 15 | 0 | 0 |
| java/util | 910 | 245 | 242 |
| javax/accessibility | 44 | 0 | 0 |
| javax/crypto | 69 | 34 | 34 |
| javax/imageio | 209 | 0 | 0 |
| javax/management | 232 | 0 | 0 |
| javax/naming | 15 | 0 | 0 |
| javax/net | 196 | 32 | 30 |
| javax/print | 46 | 0 | 0 |
| javax/rmi | 2 | 0 | 0 |
| javax/script | 17 | 0 | 0 |
| javax/security | 63 | 26 | 26 |
| javax/smartcardio | 7 | 0 | 0 |
| javax/sound | 431 | 0 | 0 |
| javax/sql | 5 | 0 | 0 |
| javax/swing | 1320 | 0 | 0 |
| javax/transaction | 2 | 0 | 0 |
| javax/xml | 46 | 5 | 3 |
| jdk/classfile | 56 | 0 | 0 |
| jdk/dynalink | 10 | 1 | 0 |
| jdk/editpad | 1 | 0 | 0 |
| jdk/incubator | 79 | 0 | 0 |
| jdk/internal | 80 | 4 | 4 |
| jdk/jfr | 617 | 0 | 0 |
| jdk/lambda | 1 | 0 | 0 |
| jdk/management | 1 | 0 | 0 |
| jdk/modules | 12 | 0 | 0 |
| jdk/net | 9 | 0 | 0 |
| jdk/nio | 30 | 0 | 0 |
| jdk/security | 11 | 1 | 1 |
| jni/nullCaller | 1 | 0 | 0 |
| native_sanity/simplenativelauncher | 1 | 0 | 0 |
| native_sanity/simplenativelib | 1 | 0 | 0 |
| native_sanity/simplenativelib2 | 1 | 0 | 0 |
| sanity/client | 25 | 0 | 0 |
| security/infra | 9 | 0 | 0 |
| sun/awt | 32 | 0 | 0 |
| sun/invoke | 2 | 0 | 0 |
| sun/java2d | 109 | 0 | 0 |
| sun/jvmstat | 6 | 0 | 0 |
| sun/management | 32 | 0 | 0 |
| sun/misc | 7 | 0 | 0 |
| sun/net | 158 | 27 | 27 |
| sun/nio | 81 | 39 | 39 |
| sun/reflect | 1 | 0 | 0 |
| sun/rmi | 8 | 0 | 0 |
| sun/security | 855 | 86 | 80 |
| sun/text | 20 | 2 | 2 |
| sun/tools | 61 | 0 | 0 |
| sun/util | 31 | 4 | 3 |
| tools/jar | 29 | 0 | 0 |
| tools/jimage | 10 | 0 | 0 |
| tools/jlink | 79 | 2 | 2 |
| tools/jmod | 4 | 0 | 0 |
| tools/jpackage | 89 | 0 | 0 |
| tools/launcher | 62 | 2 | 1 |
| tools/sincechecker | 36 | 0 | 0 |

## Adapter gaps

| Reason | Files |
|---|---:|
| Unsupported inherited TEST.properties: java/awt/TEST.properties | 2240 |
| Unsupported inherited TEST.properties: javax/swing/TEST.properties | 1320 |
| Unsupported @library directive | 1309 |
| Unsupported @modules directive | 813 |
| Non-standalone main action or additional arguments | 718 |
| Unsupported inherited TEST.properties: jdk/jfr/TEST.properties | 617 |
| Unsupported inherited TEST.properties: javax/sound/TEST.properties | 431 |
| Unsupported inherited TEST.properties: java/beans/TEST.properties | 349 |
| Unsupported inherited TEST.properties: java/net/httpclient/TEST.properties | 263 |
| Unsupported @key directive | 241 |
| Unsupported inherited TEST.properties: javax/management/TEST.properties | 232 |
| Unsupported @requires directive | 230 |
| Unsupported inherited TEST.properties: javax/imageio/TEST.properties | 209 |
| Unsupported inherited TEST.properties: java/lang/invoke/TEST.properties | 197 |
| Unsupported inherited TEST.properties: com/sun/jdi/TEST.properties | 186 |
| Unsupported inherited TEST.properties: java/util/concurrent/TEST.properties | 127 |
| Unsupported @build directive | 117 |
| Unsupported inherited TEST.properties: sun/java2d/TEST.properties | 109 |
| Unsupported @compile directive | 103 |
| Unsupported inherited TEST.properties: com/sun/net/httpserver/TEST.properties | 95 |
| Unsupported inherited TEST.properties: sun/security/krb5/auto/TEST.properties | 89 |
| Unsupported inherited TEST.properties: tools/jpackage/TEST.properties | 89 |
| Unsupported inherited TEST.properties: java/rmi/TEST.properties | 83 |
| Unsupported inherited TEST.properties: java/util/logging/TEST.properties | 81 |
| Multiple test descriptions or variants | 77 |
| Unsupported inherited TEST.properties: java/lang/management/TEST.properties | 67 |
| Unsupported inherited TEST.properties: jdk/classfile/TEST.properties | 56 |
| Unsupported inherited TEST.properties: java/nio/channels/FileChannel/TEST.properties | 53 |
| Unsupported inherited TEST.properties: javax/print/TEST.properties | 46 |
| Unsupported inherited TEST.properties: javax/accessibility/TEST.properties | 44 |
| Named test variant | 39 |
| Unsupported inherited TEST.properties: tools/sincechecker/TEST.properties | 36 |
| Unsupported inherited TEST.properties: com/sun/management/TEST.properties | 32 |
| Unsupported inherited TEST.properties: sun/awt/TEST.properties | 32 |
| Unsupported inherited TEST.properties: sun/management/TEST.properties | 32 |
| Unsupported inherited TEST.properties: java/util/stream/TEST.properties | 31 |
| Unsupported inherited TEST.properties: javax/xml/jaxp/TEST.properties | 28 |
| Unsupported @clean directive | 27 |
| Unsupported inherited TEST.properties: javax/net/ssl/DTLS/TEST.properties | 27 |
| Unsupported inherited TEST.properties: com/sun/jndi/ldap/TEST.properties | 25 |
| Non-Java test action | 25 |
| Unsupported inherited TEST.properties: sanity/client/TEST.properties | 25 |
| Unsupported inherited TEST.properties: sun/tools/jstat/TEST.properties | 23 |
| Unsupported inherited TEST.properties: com/sun/java/swing/TEST.properties | 21 |
| No standalone main method | 18 |
| Unsupported inherited TEST.properties: com/sun/nio/sctp/TEST.properties | 17 |
| Unsupported inherited TEST.properties: com/sun/security/auth/TEST.properties | 17 |
| Unsupported inherited TEST.properties: javax/script/TEST.properties | 17 |
| Unsupported inherited TEST.properties: com/sun/security/sasl/TEST.properties | 15 |
| Unsupported inherited TEST.properties: javax/naming/TEST.properties | 15 |
| Unsupported inherited TEST.properties: javax/net/ssl/TLS/TEST.properties | 14 |
| Unsupported inherited TEST.properties: javax/net/ssl/TLSv11/TEST.properties | 14 |
| Unsupported inherited TEST.properties: javax/net/ssl/DTLSv10/TEST.properties | 13 |
| Unsupported inherited TEST.properties: java/time/test/TEST.properties | 12 |
| Unsupported inherited TEST.properties: java/util/prefs/TEST.properties | 12 |
| Unsupported @enablePreview directive | 11 |
| Unsupported inherited TEST.properties: javax/security/auth/kerberos/TEST.properties | 10 |
| Unsupported inherited TEST.properties: javax/net/ssl/TLSv1/TEST.properties | 9 |
| Unsupported inherited TEST.properties: jdk/internal/vm/Continuation/TEST.properties | 9 |
| Unsupported inherited TEST.properties: sun/rmi/TEST.properties | 8 |
| Unsupported inherited TEST.properties: sun/tools/jcmd/TEST.properties | 8 |
| Unsupported inherited TEST.properties: javax/smartcardio/TEST.properties | 7 |
| Unsupported inherited TEST.properties: sun/tools/jhsdb/TEST.properties | 7 |
| Unsupported inherited TEST.properties: sun/tools/jstatd/TEST.properties | 7 |
| Unsupported inherited TEST.properties: java/lang/ModuleTests/TEST.properties | 6 |
| Unsupported inherited TEST.properties: sun/jvmstat/TEST.properties | 6 |
| Unsupported inherited TEST.properties: java/util/jar/JarFile/mrjar/TEST.properties | 5 |
| Unsupported inherited TEST.properties: javax/net/ssl/Stapling/TEST.properties | 4 |
| Unsupported @ignore directive | 3 |
| Unsupported inherited TEST.properties: javax/sql/rowset/TEST.properties | 3 |
| Unsupported inherited TEST.properties: jdk/nio/zipfs/testng/TEST.properties | 3 |
| Unsupported inherited TEST.properties: sun/security/provider/certpath/OCSP/TEST.properties | 3 |
| Unsupported inherited TEST.properties: com/apple/laf/TEST.properties | 2 |
| Unsupported inherited TEST.properties: java/sql/TEST.properties | 2 |
| Unsupported inherited TEST.properties: javax/rmi/TEST.properties | 2 |
| Unsupported inherited TEST.properties: jdk/internal/jimage/TEST.properties | 2 |
| Unsupported inherited TEST.properties: sun/tools/jinfo/TEST.properties | 2 |
| Unsupported inherited TEST.properties: sun/tools/jstack/TEST.properties | 2 |
| Unsupported inherited TEST.properties: com/apple/eawt/TEST.properties | 1 |
| Unsupported inherited TEST.properties: demo/jfc/TEST.properties | 1 |
| Unsupported inherited TEST.properties: java/lang/constant/boottest/TEST.properties | 1 |
| Unsupported inherited TEST.properties: java/net/whitebox/TEST.properties | 1 |
| Unsupported inherited TEST.properties: java/time/tck/TEST.properties | 1 |
| Unsupported inherited TEST.properties: javax/sql/testng/TEST.properties | 1 |
| Unsupported inherited TEST.properties: jdk/lambda/TEST.properties | 1 |
| Unsupported inherited TEST.properties: sun/security/ssl/Stapling/TEST.properties | 1 |
| Unsupported inherited TEST.properties: sun/tools/jmap/TEST.properties | 1 |

## Executed tests needing attention

| File | Reference | Bali |
|---|---|---|
| build/releaseFile/CheckReleaseFile.java | pass | fail |
| java/io/Serializable/clearHandleTable/ClearHandleTable.java | pass | fail |
| java/io/Serializable/getSuidClinitError/GetSuidClinitError.java | pass | fail |
| java/lang/Class/IsAnnotationType.java | pass | fail |
| java/lang/ClassLoader/IsParallelCapable.java | pass | fail |
| java/lang/SecurityManager/CheckSecurityProvider.java | pass | fail |
| java/lang/StackWalker/DumpStackTest.java | pass | fail |
| java/lang/StackWalker/MultiThreadStackWalk.java | pass | fail |
| java/lang/StackWalker/VerifyStackTrace.java | pass | fail |
| java/lang/System/finalization/FinThreads.java | pass | timeout |
| java/lang/annotation/AnnotationToStringTest.java | pass | fail |
| java/lang/ref/Basic.java | pass | fail |
| java/lang/ref/FinalizeOverride.java | pass | timeout |
| java/net/CookieHandler/B6644726.java | fail | fail |
| java/net/Socket/asyncClose/Race.java | pass | timeout |
| java/nio/channels/DatagramChannel/StressNativeSignal.java | pass | timeout |
| java/nio/channels/unixdomain/SocketOptions.java | fail | fail |
| java/security/Provider/DefaultProviderList.java | pass | fail |
| java/text/Format/NumberFormat/MultipleNumberScriptTest.java | pass | fail |
| java/util/Collections/RotateHuge.java | pass | timeout |
| java/util/Locale/LSRDataTest.java | fail | fail |
| java/util/TimeZone/AssureTzdataVersion.java | pass | fail |
| javax/net/ssl/TLSCommon/ConcurrentClientAccessTest.java | pass | fail |
| javax/net/ssl/TLSCommon/TestSessionLocalPrincipal.java | pass | fail |
| javax/xml/crypto/dsig/GetInstanceTests.java | pass | fail |
| javax/xml/crypto/dsig/TransformService/NullParent.java | pass | fail |
| jdk/dynalink/BeanLinkerRecordsTest.java | pass | fail |
| sun/security/lib/cacerts/VerifyCACerts.java | fail | fail |
| sun/security/provider/SecureRandom/StrongSeedReader.java | pass | fail |
| sun/security/ssl/ClientHandshaker/RSAExport.java | pass | fail |
| sun/security/ssl/SSLContextImpl/DefaultDTLSEnabledProtocols.java | pass | fail |
| sun/security/ssl/SSLContextImpl/DefaultEnabledProtocols.java | pass | fail |
| sun/security/ssl/X509KeyManager/PreferredKey.java | fail | fail |
| sun/util/resources/TimeZone/Bug4848242.java | pass | fail |
| tools/launcher/InstanceMainTest.java | pass | fail |

results.json.gz keeps every file's paired outcome in its meta. Raw jtreg diagnostics remain in the run workspace or CI artifact.
