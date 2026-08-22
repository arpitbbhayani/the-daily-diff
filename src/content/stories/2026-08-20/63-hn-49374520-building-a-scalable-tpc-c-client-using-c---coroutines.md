---
title: Building a Scalable TPC-C Client Using C++ Coroutines
source: hn
url: https://blog.ydb.tech/making-coroutines-routine-building-a-scalable-tpc-c-client-in-c-b14f55a09471
date: '2026-08-20'
tags:
- catchup
- coroutines
- cpp
- hn
- scalability
- tpc-c-client
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49374520'
comments: https://news.ycombinator.com/item?id=49374520
why_read: This text demonstrates how to implement a scalable TPC-C client. Readers
  will learn practical applications of C++ coroutines for performance.
authors:
- eivanov89
---

Building highly scalable clients, especially for database benchmarks like TPC-C, often requires pushing the boundaries of concurrency. This article dives into leveraging C++ coroutines to achieve exceptional performance.

The use of coroutines can drastically simplify asynchronous code, making it more readable and maintainable than traditional callback-based or thread-per-request models, all while maintaining excellent throughput. It is about writing synchronous-looking code that performs asynchronously.

You will gain concrete insights into applying modern C++ features for optimizing I/O bound workloads in distributed systems. This approach is not just theoretical; it delivers tangible performance improvements for high-volume database interactions.

Mastering coroutines makes building robust, scalable C++ services a routine task.
