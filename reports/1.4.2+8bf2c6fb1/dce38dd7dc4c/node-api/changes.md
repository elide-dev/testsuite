# Changes — `1.4.1+20260716.b8b6531` → `1.4.2+8bf2c6fb1`

- From: `1.4.1+20260716.b8b6531` (`3d3ea83ed6403be11d119eb0234efa699809d81a801986659790996c18306a06`)
- To: `1.4.2+8bf2c6fb1` (`dce38dd7dc4c0629f1243b903348ae90e1a4f5eb6f78df1e52b7521e6883605e`)

| regressed | fixed | added | removed | still failing |
|---:|---:|---:|---:|---:|
| 10 | 62 | 0 | 0 | 846 |

## ❌ Regressed (10)

- `test/parallel/test-fs-watch-recursive-add-file-to-new-folder.js`
- `test/parallel/test-process-load-env-file.js`
- `test/parallel/test-stream2-set-encoding.js`
- `test/parallel/test-timers-nan-duration-warning.js`
- `test/parallel/test-timers-negative-duration-warning.js`
- `test/parallel/test-url-format-whatwg.js`
- `test/parallel/test-url-format.js`
- `test/parallel/test-url-parse-format.js`
- `test/parallel/test-worker-messaging-errors-handler.js`
- `test/parallel/test-worker-messaging-errors-timeout.js`

## ✅ Fixed (62)

- `test/parallel/test-buffer-constants.js`
- `test/parallel/test-buffer-no-negative-allocation.js`
- `test/parallel/test-fs-buffertype-writesync.js`
- `test/parallel/test-fs-close.js`
- `test/parallel/test-fs-read-stream-pos.js`
- `test/parallel/test-fs-readdir-recursive.js`
- `test/parallel/test-fs-readdir.js`
- `test/parallel/test-fs-readfile-eof.js`
- `test/parallel/test-fs-readfile-pipe-large.js`
- `test/parallel/test-fs-readfile-pipe.js`
- `test/parallel/test-fs-readfile-zero-byte-liar.js`
- `test/parallel/test-fs-readfilesync-pipe-large.js`
- `test/parallel/test-fs-ready-event-stream.js`
- `test/parallel/test-fs-realpath-native.js`
- `test/parallel/test-fs-realpath-pipe.js`
- `test/parallel/test-fs-stream-destroy-emit-error.js`
- `test/parallel/test-fs-syncwritestream.js`
- `test/parallel/test-fs-utimes-y2K38.js`
- `test/parallel/test-fs-watch-recursive-linux-parallel-remove.js`
- `test/parallel/test-fs-watch-recursive-prefix-sibling.js`
- `test/parallel/test-fs-watch.js`
- `test/parallel/test-fs-write-stream-patch-open.js`
- `test/parallel/test-module-version.js`
- `test/parallel/test-path-basename.js`
- `test/parallel/test-path-dirname.js`
- `test/parallel/test-path-extname.js`
- `test/parallel/test-process-argv-0.js`
- `test/parallel/test-process-external-stdio-close-spawn.js`
- `test/parallel/test-process-external-stdio-close.js`
- `test/parallel/test-process-raw-debug.js`
- `test/parallel/test-process-redirect-warnings.js`
- `test/parallel/test-process-remove-all-signal-listeners.js`
- `test/parallel/test-require-invalid-main-no-exports.js`
- `test/parallel/test-stream-pipeline-process.js`
- `test/parallel/test-timers-socket-timeout-removes-other-socket-unref-timer.js`
- `test/parallel/test-vm-api-handles-getter-errors.js`
- `test/parallel/test-vm-getters.js`
- `test/parallel/test-vm-global-identity.js`
- `test/parallel/test-vm-global-property-enumerator.js`
- `test/parallel/test-vm-global-property-interceptors.js`
- `test/parallel/test-vm-global-setter.js`
- `test/parallel/test-vm-indexed-properties.js`
- `test/parallel/test-vm-ownkeys.js`
- `test/parallel/test-vm-ownpropertynames.js`
- `test/parallel/test-vm-ownpropertysymbols.js`
- `test/parallel/test-vm-preserves-property.js`
- `test/parallel/test-vm-property-definer-interception.js`
- `test/parallel/test-vm-strict-assign.js`
- `test/parallel/test-vm-symbols.js`
- `test/parallel/test-vm-syntax-error-message.js`
- `test/parallel/test-vm-syntax-error-stderr.js`
- `test/parallel/test-worker-console-listeners.js`
- `test/parallel/test-worker-init-failure.js`
- `test/parallel/test-worker-nested-on-process-exit.js`
- `test/parallel/test-worker-process-argv.js`
- `test/parallel/test-worker-relative-path-double-dot.js`
- `test/parallel/test-worker-relative-path.js`
- `test/parallel/test-worker-terminate-source-map.js`
- `test/parallel/test-worker-vm-context-terminate.js`
- `test/parallel/test-worker-voluntarily-exit-followed-by-addition.js`
- `test/parallel/test-worker-voluntarily-exit-followed-by-throw.js`
- `test/parallel/test-worker.js`
