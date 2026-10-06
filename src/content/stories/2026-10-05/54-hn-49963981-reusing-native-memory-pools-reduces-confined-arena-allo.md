---
title: Reusing native memory pools reduces confined arena allocation overhead
source: hn
url: https://inside.java/2026/10/05/confined-pools/
date: '2026-10-05'
tags:
- arena-allocator
- catchup
- foreign-function-and-memory-api
- hn
- jdk-28
- native-memory-pools
section: engineering
is_news: false
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49963981'
comments: https://news.ycombinator.com/item?id=49963981
why_read: Learn how JDK 28 improves the performance of small native allocations in
  confined arenas by reusing native-memory pools without requiring source code changes.
authors:
- Per-Ake Minborg
---

Java native interop through the Foreign Function and Memory (FFM) API just received a significant performance upgrade. In JDK 28, Arena.ofConfined() serves small native allocations directly from reusable thread-confined memory pools, requiring zero application code changes.

Confined arenas are frequently used as temporary scratchpads around native C calls, such as allocating a small buffer for errno or passing pointer references. Profile data showed that over 99.99 percent of confined arena allocations consume fewer than 64 bytes. Previously, even a four-byte integer allocation triggered a full OS malloc call and registered cleanup actions, causing bookkeeping to dwarf the actual foreign function call execution time.

By retaining thread-local memory pools for confined lifecycles, JDK 28 recycles these small segments instantly upon arena closure. This removes allocator contention and system call overhead from latency-sensitive JVM services.

If your backend microservices handle high-throughput JNI or FFM foreign calls, this runtime optimization yields immediate latency reductions for free.
