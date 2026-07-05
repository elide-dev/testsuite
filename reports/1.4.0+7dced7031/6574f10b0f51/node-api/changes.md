# Changes — `1.4.0+ff263a815` → `1.4.0+7dced7031`

- From: `1.4.0+ff263a815` (`f35eaed61d0963346bde39f3f37cf41a7f51268a1e875dc3e5cdee7123d9ee3d`)
- To: `1.4.0+7dced7031` (`6574f10b0f51def2cc1ed2ae503ec83fc993f3d623700138a31e5eda5f53d9ab`)

| regressed | fixed | added | removed | still failing |
|---:|---:|---:|---:|---:|
| 1 | 105 | 0 | 0 | 1257 |

## ❌ Regressed (1)

- `test/parallel/test-timers-immediate-unref-nested-once.js`

## ✅ Fixed (105)

- `test/parallel/test-buffer-prototype-inspect.js`
- `test/parallel/test-console-not-call-toString.js`
- `test/parallel/test-event-emitter-add-listeners.js`
- `test/parallel/test-event-emitter-num-args.js`
- `test/parallel/test-eventtarget-custom-inspect-does-not-throw.js`
- `test/parallel/test-fs-chown-negative-one.js`
- `test/parallel/test-fs-cp-sync-dereference.js`
- `test/parallel/test-fs-empty-readStream.js`
- `test/parallel/test-fs-existssync-false.js`
- `test/parallel/test-fs-fchown-negative-one.js`
- `test/parallel/test-fs-lchown-negative-one.js`
- `test/parallel/test-fs-mkdir-rmdir.js`
- `test/parallel/test-fs-open-mode-mask.js`
- `test/parallel/test-fs-open-no-close.js`
- `test/parallel/test-fs-promises-file-handle-chmod.js`
- `test/parallel/test-fs-promises-file-handle-stat.js`
- `test/parallel/test-fs-promises-file-handle-truncate.js`
- `test/parallel/test-fs-promises-readfile-empty.js`
- `test/parallel/test-fs-promises-readfile-with-fd.js`
- `test/parallel/test-fs-promises-writefile-with-fd.js`
- `test/parallel/test-fs-read-stream-autoClose.js`
- `test/parallel/test-fs-read-stream-encoding.js`
- `test/parallel/test-fs-read-stream-pos.js`
- `test/parallel/test-fs-read-stream-resume.js`
- `test/parallel/test-fs-read-zero-length.js`
- `test/parallel/test-fs-readdir-ucs2.js`
- `test/parallel/test-fs-readfile-empty.js`
- `test/parallel/test-fs-readfile-fd.js`
- `test/parallel/test-fs-readfile-flags.js`
- `test/parallel/test-fs-readfile-unlink.js`
- `test/parallel/test-fs-readv-promises.js`
- `test/parallel/test-fs-rmSync-special-char.js`
- `test/parallel/test-fs-sir-writes-alot.js`
- `test/parallel/test-fs-symlink-buffer-path.js`
- `test/parallel/test-fs-symlink-dir-junction-relative.js`
- `test/parallel/test-fs-symlink-dir-junction.js`
- `test/parallel/test-fs-symlink-longpath.js`
- `test/parallel/test-fs-truncate-clear-file-zero.js`
- `test/parallel/test-fs-truncate-sync.js`
- `test/parallel/test-fs-watch-close-when-destroyed.js`
- `test/parallel/test-fs-watch-file-enoent-after-deletion.js`
- `test/parallel/test-fs-watch-recursive-add-file-to-existing-subfolder.js`
- `test/parallel/test-fs-watch-recursive-add-file.js`
- `test/parallel/test-fs-watch-recursive-delete.js`
- `test/parallel/test-fs-watch-recursive-sync-write.js`
- `test/parallel/test-fs-watch-recursive-update-file.js`
- `test/parallel/test-fs-watch-recursive-watch-file.js`
- `test/parallel/test-fs-watch-ref-unref.js`
- `test/parallel/test-fs-write-file.js`
- `test/parallel/test-fs-write-negativeoffset.js`
- `test/parallel/test-fs-write-no-fd.js`
- `test/parallel/test-fs-write-stream-encoding.js`
- `test/parallel/test-fs-writefile-with-fd.js`
- `test/parallel/test-fs-writestream-open-write.js`
- `test/parallel/test-next-tick-doesnt-hang.js`
- `test/parallel/test-next-tick-errors.js`
- `test/parallel/test-next-tick-fixed-queue-regression.js`
- `test/parallel/test-next-tick-intentional-starvation.js`
- `test/parallel/test-next-tick-ordering.js`
- `test/parallel/test-next-tick-ordering2.js`
- `test/parallel/test-path-glob.js`
- `test/parallel/test-path-isabsolute.js`
- `test/parallel/test-path-join.js`
- `test/parallel/test-path-makelong.js`
- `test/parallel/test-path-normalize.js`
- `test/parallel/test-path-relative.js`
- `test/parallel/test-path-zero-length-strings.js`
- `test/parallel/test-path.js`
- `test/parallel/test-process-constants-noatime.js`
- `test/parallel/test-process-default.js`
- `test/parallel/test-process-exit-from-before-exit.js`
- `test/parallel/test-process-next-tick.js`
- `test/parallel/test-process-prototype.js`
- `test/parallel/test-require-delete-array-iterator.js`
- `test/parallel/test-stream-await-drain-writers-in-synchronously-recursion-write.js`
- `test/parallel/test-stream-big-packet.js`
- `test/parallel/test-stream-destroy-event-order.js`
- `test/parallel/test-stream-duplex-writable-finished.js`
- `test/parallel/test-stream-objectmode-undefined.js`
- `test/parallel/test-stream-pipe-cleanup-pause.js`
- `test/parallel/test-stream-pipe-deadlock.js`
- `test/parallel/test-stream-pipeline-duplex.js`
- `test/parallel/test-stream-push-order.js`
- `test/parallel/test-stream-push-strings.js`
- `test/parallel/test-stream-readable-constructor-set-methods.js`
- `test/parallel/test-stream-readable-data.js`
- `test/parallel/test-stream-readable-flow-recursion.js`
- `test/parallel/test-stream-readable-pause-and-resume.js`
- `test/parallel/test-stream-readable-unpipe-resume.js`
- `test/parallel/test-stream-transform-objectmode-falsey-value.js`
- `test/parallel/test-stream-write-final.js`
- `test/parallel/test-stream2-compatibility.js`
- `test/parallel/test-stream2-pipe-error-once-listener.js`
- `test/parallel/test-stream2-unpipe-drain.js`
- `test/parallel/test-stream2-unpipe-leak.js`
- `test/parallel/test-timers-clear-timeout-interval-equivalent.js`
- `test/parallel/test-timers-clearImmediate.js`
- `test/parallel/test-timers-immediate-queue.js`
- `test/parallel/test-timers-interval-throw.js`
- `test/parallel/test-timers-process-tampering.js`
- `test/parallel/test-timers-same-timeout-wrong-list-deleted.js`
- `test/parallel/test-timers-timeout-with-non-integer.js`
- `test/parallel/test-timers-uncaught-exception.js`
- `test/parallel/test-timers-user-call.js`
- `test/parallel/test-timers-zero-timeout.js`
