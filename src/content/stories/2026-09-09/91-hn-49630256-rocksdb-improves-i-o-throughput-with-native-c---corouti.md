---
title: RocksDB improves I/O throughput with native C++ coroutine reads
source: hn
url: https://rocksdb.org/blog/2026/08/24/native-coroutine-reads.html
date: '2026-09-09'
tags:
- asynchronous-io
- c++-coroutines
- catchup
- hn
- i/o-throughput
- point-lookups
- rocksdb
section: databases
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49630256'
comments: https://news.ycombinator.com/item?id=49630256
why_read: This explains how RocksDB 11.10.0 leverages native C++ coroutines for asynchronous
  reads. You will learn how this approach improves throughput for I/O-bound point
  lookups by efficiently managing storage queue depth without requiring one blocked
  application thread per read.
authors:
- andrewstetsenko
---

RocksDB just dropped experimental native C++ async/coroutine APIs for Get and MultiGet, and this is a game-changer for I/O-bound workloads. Instead of parking a thread for every outstanding read, RocksDB can now suspend requests, let its executor run other tasks, and resume when I/O completes.

This means significantly deeper storage queue depth with fewer application threads, cutting context-switching overhead. It will not make individual device reads faster, but it absolutely maximizes device utilization and overall throughput.

For anyone managing high-performance key-value stores, understanding this shift in how reads are managed internally is critical for optimizing your systems.
