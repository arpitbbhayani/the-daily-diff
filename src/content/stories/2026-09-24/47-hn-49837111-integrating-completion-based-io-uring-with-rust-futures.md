---
title: Integrating completion-based io-uring with Rust futures soundness guarantees
source: hn
url: https://without.boats/blog/io-uring/
date: '2026-09-24'
tags:
- async-io
- buffer-management
- cancellation
- catchup
- futures
- hn
- io-uring
- rust
section: systems
interest_score: 8
depth_score: 9
utility_score: 8
novelty_score: 7
hn_id: '49837111'
comments: https://news.ycombinator.com/item?id=49837111
why_read: Understand the mechanistic mismatch between completion-based IO like io-uring
  and Rust's implicit cancellation model for futures. You will gain clarity on the
  core challenges of buffer ownership and soundness in asynchronous systems.
authors:
- Bluestein
---

Readiness-based I/O models like epoll fit cleanly into async programming because the kernel simply alerts the runtime when a file descriptor is readable or writable. The runtime retains full ownership of memory buffers and can drop or cancel futures safely at any point.

Linux io_uring flips this paradigm completely by using a completion-based model. When a program submits an operation to the submission queue, the kernel takes control of the memory buffer until it posts an entry to the completion queue. If a runtime allows a future to be cancelled while the kernel is still performing asynchronous I/O, memory safety breaks immediately because the underlying buffer could be deallocated or reused while the kernel is writing into it.

Building sound high-performance abstractions requires rethinking ownership and buffer lifetimes rather than relying on conventional async cancellation patterns. Understanding this boundary between kernel ring buffers and user-space runtimes is essential for anyone designing low-latency backend systems.
