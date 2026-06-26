#!/bin/bash

nohup env THREADS=32 /usr/bin/time ./bin/run --elide nightly --suite test262 --ratchet --log \
    > ratchet-run.log 2>&1 &
echo "$!" > ./runner.pid
echo "started PID $(cat runner.pid) — tail it with: tail -f ratchet-run.log"
tail -f ratchet-run.log

