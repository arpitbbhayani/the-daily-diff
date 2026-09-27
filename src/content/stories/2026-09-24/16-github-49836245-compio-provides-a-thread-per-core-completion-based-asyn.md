---
title: Compio provides a thread-per-core completion-based async runtime for Rust
source: github
url: https://github.com/compio-rs/compio
date: '2026-09-24'
tags:
- async-rust
- asynchronous-io
- catchup
- github
- io-uring
- iocp
- thread-per-core
section: systems
interest_score: 8
depth_score: 9
utility_score: 8
novelty_score: 8
hn_id: '49836245'
comments: https://news.ycombinator.com/item?id=49836245
why_read: Read this to understand how completion-based IO models like io_uring and
  IOCP are integrated into a thread-per-core architecture in Rust for high-throughput
  I/O operations.
authors:
- bootlegbilly
---

Most standard asynchronous runtimes rely on a work-stealing multithreaded scheduler, which introduces lock contention, cache thrashing, and cross-thread communication overhead under heavy load.

Compio takes a different architectural approach by implementing a thread-per-core runtime designed around completion-based I/O primitives like Linux io_uring and Windows IOCP. Instead of poll-based readiness notifications, the kernel directly manages completions and writes buffers to user space without task migration across CPU cores.

By pinning execution threads to dedicated cores and eliminating shared queue locking, this design delivers predictable sub-millisecond latencies and higher throughput for disk and network intensive workloads.

Adopting thread-per-core async architectures is becoming the premier blueprint for pushing modern NVMe and 100GbE hardware to its physical limits.
