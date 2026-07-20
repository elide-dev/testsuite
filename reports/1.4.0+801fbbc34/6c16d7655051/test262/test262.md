# test262 — `1.4.0+801fbbc34`

- Image digest: `6c16d765505117657d8e4748b5b8cd63395a6f93530ca88df069278d547a007f`
- Suite version: `de8e621cdba4f40cff3cf244e6cfb8cb48746b4a`
- Ran: 2026-07-05T19:09:32.080Z → 2026-07-05T19:09:37.069Z

## Summary

![Pass-rate chart](./pass-rate.svg)

**Pass rate: 558/780 (71.54%)**

| pass | fail | error | skip | regressions | new passes |
|---:|---:|---:|---:|---:|---:|
| 558 | 0 | 222 | 0 | 222 | 0 |

## ❌ Regressions (222)

- `test/built-ins/Atomics/notify/count-defaults-to-infinity-undefined.js default` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278573144-27-n1r1i2.byzi.js:562:3)

- `test/built-ins/Atomics/notify/count-defaults-to-infinity-missing.js strict mode` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278573141-27-fm4egn.unler.js:565:3)

- `test/built-ins/Atomics/notify/count-defaults-to-infinity-undefined.js strict mode` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278573146-27-1nww6m2.gad7.js:563:3)

- `test/built-ins/Atomics/notify/count-defaults-to-infinity-missing.js default` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278573137-27-1jhnulz.yx3h.js:564:3)

- `test/built-ins/Atomics/notify/negative-count.js strict mode` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278573231-27-400tc5.mfnns.js:554:1)

- `test/built-ins/Atomics/notify/negative-count.js default` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278573229-27-174mm82.g2b4.js:553:1)

- `test/built-ins/Atomics/notify/notify-all.js default` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278573392-27-1ydrxef.8iuz.js:556:3)

- `test/built-ins/Atomics/notify/notify-all.js strict mode` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278573395-27-3hhnha.3b7zv.js:557:3)

- `test/built-ins/Atomics/notify/notify-all-on-loc.js strict mode` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278573390-27-1yy2kr6.f8dxl.js:565:3)

- `test/built-ins/Atomics/notify/notify-in-order-one-time.js default` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278573397-27-1j2dkrz.mdw8.js:561:3)

- `test/built-ins/Atomics/notify/notify-all-on-loc.js default` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278573387-27-t51oqw.lda6.js:564:3)

- `test/built-ins/Atomics/notify/notify-in-order-one-time.js strict mode` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278573400-27-1oa2rzc.ax98g.js:562:3)

- `test/built-ins/Atomics/notify/notify-one.js default` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278573460-27-19w6tsf.k85zl.js:559:3)

- `test/built-ins/Atomics/notify/notify-nan.js strict mode` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278573457-27-wylkdz.p8r2r.js:554:1)

- `test/built-ins/Atomics/notify/notify-with-no-agents-waiting.js default` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278573475-27-1p8y227.hqbv.js:552:1)

- `test/built-ins/Atomics/notify/notify-with-no-agents-waiting.js strict mode` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278573478-27-1dhskmf.6qiv.js:553:1)

- `test/built-ins/Atomics/notify/notify-two.js default` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278573470-27-1wc3d8c.89vrf.js:559:3)

- `test/built-ins/Atomics/notify/notify-two.js strict mode` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278573473-27-q0rwn3.eksg.js:560:3)

- `test/built-ins/Atomics/notify/notify-nan.js default` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278573454-27-1vyff18.lu6a.js:553:1)

- `test/built-ins/Atomics/notify/notify-one.js strict mode` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278573462-27-1kkwkkx.k07u.js:560:3)

- `test/built-ins/Atomics/notify/notify-in-order.js default` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278573447-27-18hx3zz.ts0a.js:561:3)

- `test/built-ins/Atomics/notify/notify-renotify-noop.js strict mode` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278573468-27-ni0mv5.hpxoi.js:554:1)

- `test/built-ins/Atomics/notify/notify-renotify-noop.js default` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278573465-27-zckeg4.tvo2q.js:553:1)

- `test/built-ins/Atomics/notify/notify-in-order.js strict mode` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278573451-27-1fgnpmp.sssx.js:562:3)

- `test/built-ins/Atomics/notify/notify-zero.js default` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278573534-27-178306q.9smu.js:559:3)

- `test/built-ins/Atomics/notify/notify-zero.js strict mode` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278573537-27-18668ua.xncrh.js:560:3)

- `test/built-ins/Atomics/notify/notify-with-no-matching-agents-waiting.js strict mode` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278573529-27-a03u8z.360yo.js:554:1)

- `test/built-ins/Atomics/notify/notify-with-no-matching-agents-waiting.js default` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278573525-27-sovf2s.fv3v.js:553:1)

- `test/built-ins/Atomics/notify/undefined-index-defaults-to-zero.js default` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278573621-27-1uozcji.ho8q.js:569:3)

- `test/built-ins/Atomics/notify/undefined-index-defaults-to-zero.js strict mode` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278573624-27-fv9wlx.tq4p.js:570:3)

- `test/built-ins/Atomics/wait/cannot-suspend-throws.js default` — Expected a TypeError to be thrown but no exception was thrown at all
- `test/built-ins/Atomics/wait/cannot-suspend-throws.js strict mode` — Expected a TypeError to be thrown but no exception was thrown at all
- `test/built-ins/Atomics/wait/false-for-timeout-agent.js default` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278574295-27-fral3i.6wgos.js:559:1)

- `test/built-ins/Atomics/wait/false-for-timeout-agent.js strict mode` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278574297-27-3blkv0.k12kf.js:560:1)

- `test/built-ins/Atomics/wait/good-views.js strict mode` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278574307-27-9ghimj.32ctb.js:555:1)

- `test/built-ins/Atomics/wait/good-views.js default` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278574305-27-11olf6q.iwwt.js:554:1)

- `test/built-ins/Atomics/wait/nan-for-timeout.js default` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278574362-27-54pfv7.8ssgo.js:560:1)

- `test/built-ins/Atomics/wait/no-spurious-wakeup-no-operation.js default` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278574384-27-1fmw1hg.aek9.js:564:1)

- `test/built-ins/Atomics/wait/negative-timeout-agent.js default` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278574373-27-1ms6tsi.o4hc.js:552:1)

- `test/built-ins/Atomics/wait/negative-timeout-agent.js strict mode` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278574376-27-1b03ceo.qc7u.js:553:1)

- `test/built-ins/Atomics/wait/nan-for-timeout.js strict mode` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278574365-27-1wzvob3.7t0q.js:561:1)

- `test/built-ins/Atomics/wait/no-spurious-wakeup-on-add.js default` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278574391-27-1wmsnt4.wixg.js:557:1)

- `test/built-ins/Atomics/wait/no-spurious-wakeup-on-add.js strict mode` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278574395-27-168lbyc.n08rh.js:558:1)

- `test/built-ins/Atomics/wait/no-spurious-wakeup-no-operation.js strict mode` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278574388-27-13lb5xm.web3.js:565:1)

- `test/built-ins/Atomics/wait/no-spurious-wakeup-on-or.js strict mode` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278574460-27-x0aipo.jx2ve.js:558:1)

- `test/built-ins/Atomics/wait/no-spurious-wakeup-on-and.js default` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278574439-27-iiqc7w.qux3.js:557:1)

- `test/built-ins/Atomics/wait/no-spurious-wakeup-on-sub.js default` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278574467-27-1k3cbwb.v7htg.js:557:1)

- `test/built-ins/Atomics/wait/no-spurious-wakeup-on-sub.js strict mode` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278574470-27-1yiljcp.mm5wi.js:558:1)

- `test/built-ins/Atomics/wait/no-spurious-wakeup-on-compareExchange.js strict mode` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278574448-27-nk1417.ft9g.js:558:1)

- `test/built-ins/Atomics/wait/no-spurious-wakeup-on-exchange.js default` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278574451-27-khnbe9.cdiz9.js:557:1)

- `test/built-ins/Atomics/wait/no-spurious-wakeup-on-and.js strict mode` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278574443-27-a7lhq5.ksqs.js:558:1)

- `test/built-ins/Atomics/wait/no-spurious-wakeup-on-store.js default` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278574463-27-z9ndsm.hdgm9.js:557:1)

- `test/built-ins/Atomics/wait/no-spurious-wakeup-on-or.js default` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278574457-27-ioe9fq.tnf7h.js:557:1)

- `test/built-ins/Atomics/wait/no-spurious-wakeup-on-compareExchange.js default` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278574446-27-aabz47.rfl2s.js:557:1)

- `test/built-ins/Atomics/wait/no-spurious-wakeup-on-store.js strict mode` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278574465-27-1appyro.dz5z.js:558:1)

- `test/built-ins/Atomics/wait/no-spurious-wakeup-on-exchange.js strict mode` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278574453-27-1apvp0r.qy2k.js:558:1)

- `test/built-ins/Atomics/wait/no-spurious-wakeup-on-xor.js strict mode` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278574521-27-1otkgtv.4mfo.js:558:1)

- `test/built-ins/Atomics/wait/no-spurious-wakeup-on-xor.js default` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278574517-27-1g5x5w1.3xodi.js:557:1)

- `test/built-ins/Atomics/wait/null-for-timeout-agent.js strict mode` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278574608-27-dmdld1.vxzjd.js:560:1)

- `test/built-ins/Atomics/wait/object-for-timeout-agent.js default` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278574622-27-niak4.xv91f.js:559:1)

- `test/built-ins/Atomics/wait/poisoned-object-for-timeout-throws-agent.js default` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278574637-27-1etbzv2.vjzb.js:559:1)

- `test/built-ins/Atomics/wait/null-for-timeout-agent.js default` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278574602-27-rtz7bw.atal.js:559:1)

- `test/built-ins/Atomics/wait/object-for-timeout-agent.js strict mode` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278574625-27-ph4h12.5lqv.js:560:1)

- `test/built-ins/Atomics/wait/poisoned-object-for-timeout-throws-agent.js strict mode` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278574639-27-asz5g0.amdn.js:560:1)

- `test/built-ins/Atomics/wait/symbol-for-index-throws-agent.js default` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278574695-27-14pkvuo.hhof.js:572:1)

- `test/built-ins/Atomics/wait/symbol-for-index-throws-agent.js strict mode` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278574698-27-1q6cpzl.b7okh.js:573:1)

- `test/built-ins/Atomics/wait/symbol-for-timeout-throws-agent.js default` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278574706-27-gw55nr.caxvh.js:559:1)

- `test/built-ins/Atomics/wait/symbol-for-timeout-throws-agent.js strict mode` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278574708-27-bon7m4.lnb8.js:560:1)

- `test/built-ins/Atomics/wait/undefined-for-timeout.js strict mode` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278574781-27-1giq6j3.pgm3.js:564:1)

- `test/built-ins/Atomics/wait/undefined-index-defaults-to-zero.js default` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278574783-27-q39hj8.4b1rg.js:566:1)

- `test/built-ins/Atomics/wait/undefined-for-timeout.js default` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278574778-27-1qxi8tf.p5j1.js:563:1)

- `test/built-ins/Atomics/wait/symbol-for-value-throws-agent.js strict mode` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278574761-27-1vk0ugr.vqjn.js:564:1)

- `test/built-ins/Atomics/wait/symbol-for-value-throws-agent.js default` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278574757-27-1awiaf4.ighd.js:563:1)

- `test/built-ins/Atomics/wait/true-for-timeout-agent.js strict mode` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278574771-27-w5klcr.wgowb.js:560:1)

- `test/built-ins/Atomics/wait/true-for-timeout-agent.js default` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278574769-27-1mtdm1n.v8m4.js:559:1)

- `test/built-ins/Atomics/wait/undefined-index-defaults-to-zero.js strict mode` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278574785-27-10jhewy.wd1o.js:567:1)

- `test/built-ins/Atomics/wait/value-not-equal.js default` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278574848-27-rqf7nv.wracm.js:563:1)

- `test/built-ins/Atomics/wait/value-not-equal.js strict mode` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278574851-27-170hk3t.3wnx.js:564:1)

- `test/built-ins/Atomics/wait/waiterlist-block-indexedposition-wake.js default` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278574858-27-f4eoss.mdp84.js:566:1)

- `test/built-ins/Atomics/wait/wait-index-value-not-equal.js strict mode` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278574856-27-10d4klt.kjdll.js:561:1)

- `test/built-ins/Atomics/wait/wait-index-value-not-equal.js default` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278574853-27-ddylci.e3ynb.js:560:1)

- `test/built-ins/Atomics/wait/waiterlist-block-indexedposition-wake.js strict mode` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278574861-27-15tt8p3.mgvw.js:567:1)

- `test/built-ins/Atomics/waitAsync/false-for-timeout-agent.js default` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278574928-27-tfx8vk.tpis.js:587:1)

- `test/built-ins/Atomics/wait/waiterlist-order-of-operations-is-fifo.js default` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278574904-27-vqfi5h.8wk0k.js:566:3)

- `test/built-ins/Atomics/wait/waiterlist-order-of-operations-is-fifo.js strict mode` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278574908-27-u42nf5.6w35.js:567:3)

- `test/built-ins/Atomics/wait/was-woken-before-timeout.js strict mode` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278574914-27-hdo84s.vblo9.js:567:1)

- `test/built-ins/Atomics/wait/was-woken-before-timeout.js default` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278574911-27-jx51o3.5e3ci.js:566:1)

- `test/built-ins/Atomics/waitAsync/false-for-timeout-agent.js strict mode` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278574930-27-1n8foqz.5mxi.js:588:1)

- `test/built-ins/Atomics/waitAsync/good-views.js default` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278574978-27-fnghsu.klwiv.js:682:1)

- `test/built-ins/Atomics/waitAsync/nan-for-timeout-agent.js default` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278575004-27-rghh2o.xmy7.js:587:1)

- `test/built-ins/Atomics/waitAsync/good-views.js strict mode` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278574981-27-1p9lqmk.eyp3.js:683:1)

- `test/built-ins/Atomics/waitAsync/nan-for-timeout-agent.js strict mode` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278575006-27-pcjqfk.weehr.js:588:1)

- `test/built-ins/Atomics/waitAsync/no-spurious-wakeup-on-add.js strict mode` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278575076-27-1me4lwv.ku5h.js:600:1)

- `test/built-ins/Atomics/waitAsync/no-spurious-wakeup-no-operation.js default` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278575069-27-8j1ou5.1x0ra.js:600:1)

- `test/built-ins/Atomics/waitAsync/negative-timeout-agent.js strict mode` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278575061-27-17u6kgh.n1cbh.js:588:1)

- `test/built-ins/Atomics/waitAsync/no-spurious-wakeup-no-operation.js strict mode` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278575071-27-6izzdn.jpxbb.js:601:1)

- `test/built-ins/Atomics/waitAsync/no-spurious-wakeup-on-add.js default` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278575074-27-e2xdvc.19e8r.js:599:1)

- `test/built-ins/Atomics/waitAsync/no-spurious-wakeup-on-and.js default` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278575078-27-h6ylkr.gv78d.js:599:1)

- `test/built-ins/Atomics/waitAsync/negative-timeout-agent.js default` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278575058-27-frrtl7.xause.js:587:1)

- `test/built-ins/Atomics/waitAsync/no-spurious-wakeup-on-and.js strict mode` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278575081-27-1xfaip8.e3kz.js:600:1)

- `test/built-ins/Atomics/waitAsync/no-spurious-wakeup-on-store.js strict mode` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278575142-27-k9nfiy.qhmcc.js:600:1)

- `test/built-ins/Atomics/waitAsync/no-spurious-wakeup-on-xor.js strict mode` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278575154-27-vxzce8.i8isg.js:600:1)

- `test/built-ins/Atomics/waitAsync/no-spurious-wakeup-on-store.js default` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278575140-27-1jo2oi3.ensf.js:599:1)

- `test/built-ins/Atomics/waitAsync/no-spurious-wakeup-on-compareExchange.js default` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278575123-27-1q8qde8.57v7.js:599:1)

- `test/built-ins/Atomics/waitAsync/no-spurious-wakeup-on-exchange.js strict mode` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278575132-27-1co22c8.9vuo.js:600:1)

- `test/built-ins/Atomics/waitAsync/no-spurious-wakeup-on-sub.js default` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278575146-27-ihximf.1hqd.js:599:1)

- `test/built-ins/Atomics/waitAsync/no-spurious-wakeup-on-sub.js strict mode` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278575148-27-19eeudt.1z1m.js:600:1)

- `test/built-ins/Atomics/waitAsync/no-spurious-wakeup-on-xor.js default` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278575150-27-1udsvml.l6mt.js:599:1)

- `test/built-ins/Atomics/waitAsync/no-spurious-wakeup-on-exchange.js default` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278575130-27-izluiy.6n9d.js:599:1)

- `test/built-ins/Atomics/waitAsync/no-spurious-wakeup-on-or.js default` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278575135-27-18n69i0.vtgf.js:599:1)

- `test/built-ins/Atomics/waitAsync/no-spurious-wakeup-on-or.js strict mode` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278575137-27-clvfpi.vsnm.js:600:1)

- `test/built-ins/Atomics/waitAsync/no-spurious-wakeup-on-compareExchange.js strict mode` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278575127-27-1hgv54m.mxdn.js:600:1)

- `test/built-ins/Atomics/waitAsync/null-for-timeout-agent.js strict mode` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278575232-27-ivkt6f.eze2.js:590:1)

- `test/built-ins/Atomics/waitAsync/null-for-timeout-agent.js default` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278575229-27-1ubdrw7.kbfrk.js:589:1)

- `test/built-ins/Atomics/waitAsync/object-for-timeout-agent.js default` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278575283-27-8q4ptm.flzz3.js:592:1)

- `test/built-ins/Atomics/waitAsync/poisoned-object-for-timeout-throws-agent.js strict mode` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278575300-27-yk5dn9.qouz.js:591:1)

- `test/built-ins/Atomics/waitAsync/object-for-timeout-agent.js strict mode` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278575285-27-5j8efi.3fvfh.js:593:1)

- `test/built-ins/Atomics/waitAsync/poisoned-object-for-timeout-throws-agent.js default` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278575297-27-1wpjw6x.3l3di.js:590:1)

- `test/built-ins/Atomics/waitAsync/symbol-for-index-throws-agent.js default` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278575372-27-1k8e2he.cu6y.js:602:1)

- `test/built-ins/Atomics/waitAsync/symbol-for-index-throws-agent.js strict mode` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278575374-27-1w49aw5.woj9.js:603:1)

- `test/built-ins/Atomics/waitAsync/symbol-for-value-throws-agent.js strict mode` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278575436-27-1pqclhv.rozo.js:594:1)

- `test/built-ins/Atomics/waitAsync/symbol-for-timeout-throws-agent.js strict mode` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278575426-27-shog6f.vdfsj.js:590:1)

- `test/built-ins/Atomics/waitAsync/true-for-timeout-agent.js default` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278575443-27-hmfhbl.0zhgo.js:587:1)

- `test/built-ins/Atomics/waitAsync/symbol-for-value-throws-agent.js default` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278575434-27-1d7rcuo.sxrc.js:593:1)

- `test/built-ins/Atomics/waitAsync/symbol-for-timeout-throws-agent.js default` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278575424-27-1eo4uta.fi2b.js:589:1)

- `test/built-ins/Atomics/waitAsync/true-for-timeout-agent.js strict mode` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278575445-27-192shj6.iqbb.js:588:1)

- `test/built-ins/Atomics/waitAsync/undefined-index-defaults-to-zero-agent.js strict mode` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278575509-27-uih2qq.1sqm.js:599:1)

- `test/built-ins/Atomics/waitAsync/undefined-index-defaults-to-zero-agent.js default` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278575506-27-isn0io.314zj.js:598:1)

- `test/built-ins/Atomics/waitAsync/undefined-for-timeout-agent.js strict mode` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278575499-27-tjssni.h9phk.js:595:1)

- `test/built-ins/Atomics/waitAsync/undefined-for-timeout-agent.js default` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278575497-27-18o3f6z.21v6.js:594:1)

- `test/built-ins/Atomics/waitAsync/waiterlist-block-indexedposition-wake.js strict mode` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278575584-27-1uh2a2y.9h9cf.js:595:1)

- `test/built-ins/Atomics/waitAsync/was-woken-before-timeout.js default` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278575587-27-c66gvn.mj85.js:583:1)

- `test/built-ins/Atomics/waitAsync/waiterlist-block-indexedposition-wake.js default` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278575580-27-1gh11c6.lmjb.js:594:1)

- `test/built-ins/Atomics/waitAsync/value-not-equal-agent.js default` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278575567-27-1py49j8.xnny.js:594:1)

- `test/built-ins/Atomics/waitAsync/was-woken-before-timeout.js strict mode` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278575592-27-1cc96tx.wz0n.js:584:1)

- `test/built-ins/Atomics/waitAsync/value-not-equal-agent.js strict mode` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278575569-27-4smyrl.3ykas.js:595:1)

- `test/built-ins/Atomics/notify/bigint/notify-all-on-loc.js strict mode` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278576018-27-7q4068.cnpi4.js:569:3)

- `test/built-ins/Atomics/notify/bigint/notify-all-on-loc.js default` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278576015-27-1vlvdwr.gqx7.js:568:3)

- `test/built-ins/Atomics/wait/bigint/false-for-timeout-agent.js default` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278576163-27-te1595.uybmg.js:563:1)

- `test/built-ins/Atomics/wait/bigint/cannot-suspend-throws.js default` — Expected a TypeError to be thrown but no exception was thrown at all
- `test/built-ins/Atomics/wait/bigint/cannot-suspend-throws.js strict mode` — Expected a TypeError to be thrown but no exception was thrown at all
- `test/built-ins/Atomics/wait/bigint/false-for-timeout-agent.js strict mode` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278576166-27-1lnb4w4.lffz.js:564:1)

- `test/built-ins/Atomics/wait/bigint/negative-timeout-agent.js default` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278576225-27-joovn3.owsn.js:556:1)

- `test/built-ins/Atomics/wait/bigint/negative-timeout-agent.js strict mode` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278576227-27-1kdj7qi.rxv2.js:557:1)

- `test/built-ins/Atomics/wait/bigint/nan-for-timeout.js strict mode` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278576218-27-1lybwjd.gl9e.js:565:1)

- `test/built-ins/Atomics/wait/bigint/nan-for-timeout.js default` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278576215-27-1pw2flr.t3c4j.js:564:1)

- `test/built-ins/Atomics/wait/bigint/no-spurious-wakeup-no-operation.js strict mode` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278576237-27-16p2hji.q365.js:565:1)

- `test/built-ins/Atomics/wait/bigint/no-spurious-wakeup-no-operation.js default` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278576234-27-1i8rreg.y24m.js:564:1)

- `test/built-ins/Atomics/wait/bigint/no-spurious-wakeup-on-compareExchange.js strict mode` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278576295-27-7hculc.0osk9.js:558:1)

- `test/built-ins/Atomics/wait/bigint/no-spurious-wakeup-on-and.js strict mode` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278576290-27-15s9im.ug471.js:558:1)

- `test/built-ins/Atomics/wait/bigint/no-spurious-wakeup-on-add.js default` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278576280-27-ajcw73.saurp.js:557:1)

- `test/built-ins/Atomics/wait/bigint/no-spurious-wakeup-on-add.js strict mode` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278576283-27-h3uepw.h49o.js:558:1)

- `test/built-ins/Atomics/wait/bigint/no-spurious-wakeup-on-or.js default` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278576302-27-4ta2mo.6k12m.js:557:1)

- `test/built-ins/Atomics/wait/bigint/no-spurious-wakeup-on-exchange.js strict mode` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278576299-27-ltnv89.fz7z8.js:558:1)

- `test/built-ins/Atomics/wait/bigint/no-spurious-wakeup-on-compareExchange.js default` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278576292-27-vgb9v9.4pn8s.js:557:1)

- `test/built-ins/Atomics/wait/bigint/no-spurious-wakeup-on-and.js default` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278576287-27-d5fx4f.fskib.js:557:1)

- `test/built-ins/Atomics/wait/bigint/no-spurious-wakeup-on-exchange.js default` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278576297-27-fnfjc8.jbqps.js:557:1)

- `test/built-ins/Atomics/wait/bigint/no-spurious-wakeup-on-or.js strict mode` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278576304-27-18p33lq.tcyh.js:558:1)

- `test/built-ins/Atomics/wait/bigint/no-spurious-wakeup-on-store.js default` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278576306-27-1evqm8f.d5mm.js:557:1)

- `test/built-ins/Atomics/wait/bigint/no-spurious-wakeup-on-store.js strict mode` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278576309-27-1x6zzrz.6qkn.js:558:1)

- `test/built-ins/Atomics/wait/bigint/no-spurious-wakeup-on-sub.js strict mode` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278576355-27-6omln6.18n8h.js:558:1)

- `test/built-ins/Atomics/wait/bigint/no-spurious-wakeup-on-sub.js default` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278576351-27-teac7k.w73li.js:557:1)

- `test/built-ins/Atomics/wait/bigint/no-spurious-wakeup-on-xor.js strict mode` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278576360-27-f7gyrz.lvwgi.js:558:1)

- `test/built-ins/Atomics/wait/bigint/no-spurious-wakeup-on-xor.js default` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278576358-27-1b1xinl.viyb.js:557:1)

- `test/built-ins/Atomics/wait/bigint/was-woken-before-timeout.js default` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278576436-27-17k1abu.jcec.js:570:1)

- `test/built-ins/Atomics/wait/bigint/waiterlist-block-indexedposition-wake.js strict mode` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278576429-27-18zw6hl.bsa8.js:571:1)

- `test/built-ins/Atomics/wait/bigint/waiterlist-order-of-operations-is-fifo.js strict mode` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278576434-27-y1ttrp.5jr6e.js:570:3)

- `test/built-ins/Atomics/wait/bigint/waiterlist-order-of-operations-is-fifo.js default` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278576431-27-193fvt7.n8tq.js:569:3)

- `test/built-ins/Atomics/wait/bigint/value-not-equal.js strict mode` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278576424-27-1bpwwdk.sb4z.js:567:1)

- `test/built-ins/Atomics/wait/bigint/waiterlist-block-indexedposition-wake.js default` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278576426-27-1rt5ms2.7rpuh.js:570:1)

- `test/built-ins/Atomics/wait/bigint/value-not-equal.js default` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278576420-27-11co4ni.788m.js:566:1)

- `test/built-ins/Atomics/wait/bigint/was-woken-before-timeout.js strict mode` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278576438-27-2w1pll.blrd2.js:571:1)

- `test/built-ins/Atomics/waitAsync/bigint/false-for-timeout-agent.js strict mode` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278576448-27-1gpdri9.4ked.js:586:1)

- `test/built-ins/Atomics/waitAsync/bigint/false-for-timeout-agent.js default` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278576446-27-1wy9dc9.j2wn.js:585:1)

- `test/built-ins/Atomics/waitAsync/bigint/nan-for-timeout-agent.js default` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278576501-27-1uttlgk.z5o5.js:585:1)

- `test/built-ins/Atomics/waitAsync/bigint/good-views.js strict mode` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278576498-27-166lbho.pkxj.js:683:1)

- `test/built-ins/Atomics/waitAsync/bigint/good-views.js default` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278576496-27-6yyv4m.sw77p.js:682:1)

- `test/built-ins/Atomics/waitAsync/bigint/nan-for-timeout-agent.js strict mode` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278576503-27-ifvviu.cbnv.js:586:1)

- `test/built-ins/Atomics/waitAsync/bigint/negative-timeout-agent.js default` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278576512-27-w1wpc0.k0fka.js:585:1)

- `test/built-ins/Atomics/waitAsync/bigint/negative-timeout-agent.js strict mode` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278576515-27-tpfkci.oh91.js:586:1)

- `test/built-ins/Atomics/waitAsync/bigint/no-spurious-wakeup-on-and.js default` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278576573-27-kv3dl3.aykqd.js:594:1)

- `test/built-ins/Atomics/waitAsync/bigint/no-spurious-wakeup-on-and.js strict mode` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278576576-27-a514y6.baxsg.js:595:1)

- `test/built-ins/Atomics/waitAsync/bigint/no-spurious-wakeup-on-add.js strict mode` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278576571-27-k9wuds.y5ft.js:595:1)

- `test/built-ins/Atomics/waitAsync/bigint/no-spurious-wakeup-on-compareExchange.js default` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278576578-27-wibsqe.4r2a.js:594:1)

- `test/built-ins/Atomics/waitAsync/bigint/no-spurious-wakeup-on-or.js default` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278576588-27-ldkkva.4fq0o.js:594:1)

- `test/built-ins/Atomics/waitAsync/bigint/no-spurious-wakeup-on-or.js strict mode` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278576590-27-1kp435p.j4l2.js:595:1)

- `test/built-ins/Atomics/waitAsync/bigint/no-spurious-wakeup-on-exchange.js default` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278576583-27-1qbka5u.odxii.js:594:1)

- `test/built-ins/Atomics/waitAsync/bigint/no-spurious-wakeup-on-exchange.js strict mode` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278576585-27-z9jcyu.s5j8q.js:595:1)

- `test/built-ins/Atomics/waitAsync/bigint/no-spurious-wakeup-on-compareExchange.js strict mode` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278576581-27-cl9k3e.ik6kp.js:595:1)

- `test/built-ins/Atomics/waitAsync/bigint/no-spurious-wakeup-no-operation.js default` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278576562-27-hfv4in.v3fgb.js:595:1)

- `test/built-ins/Atomics/waitAsync/bigint/no-spurious-wakeup-no-operation.js strict mode` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278576565-27-v21i8t.2a24r.js:596:1)

- `test/built-ins/Atomics/waitAsync/bigint/no-spurious-wakeup-on-add.js default` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278576568-27-i1hf6p.drmvp.js:594:1)

- `test/built-ins/Atomics/waitAsync/bigint/no-spurious-wakeup-on-store.js default` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278576634-27-i8z1qa.71c.js:594:1)

- `test/built-ins/Atomics/waitAsync/bigint/no-spurious-wakeup-on-store.js strict mode` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278576637-27-1kefcem.opnt.js:595:1)

- `test/built-ins/Atomics/waitAsync/bigint/no-spurious-wakeup-on-sub.js strict mode` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278576642-27-892fs4.5swz.js:595:1)

- `test/built-ins/Atomics/waitAsync/bigint/no-spurious-wakeup-on-sub.js default` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278576640-27-sp36cc.ukrh.js:594:1)

- `test/built-ins/Atomics/waitAsync/bigint/no-spurious-wakeup-on-xor.js default` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278576645-27-1ug3eb0.c93xl.js:594:1)

- `test/built-ins/Atomics/waitAsync/bigint/no-spurious-wakeup-on-xor.js strict mode` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278576648-27-covb27.yd3gb.js:595:1)

- `test/built-ins/Atomics/waitAsync/bigint/null-for-timeout-agent.js strict mode` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278576718-27-474y54.usc83.js:588:1)

- `test/built-ins/Atomics/waitAsync/bigint/object-for-timeout-agent.js default` — java.lang.IllegalStateException: Creating threads is not allowed.
    at :program (f-1783278576725-27-5p0chw.h2icn.js:590:1)

- …and 22 more
