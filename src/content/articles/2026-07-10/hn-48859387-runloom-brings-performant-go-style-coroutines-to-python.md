---
title: Runloom brings performant Go-style coroutines to Python
source: hn
url: https://github.com/robertsdotpm/runloom
date: '2026-07-10'
tags:
- catchup
- gil-off
- goroutines
- hn
- netpoll
- performance-benchmarking
- python-concurrency
- stackful-coroutines
- work-stealing-scheduler
score: 47
hn_id: '48859387'
comments: https://news.ycombinator.com/item?id=48859387
why_read: Read this to understand how Runloom brings high-performance, Go-style stackful
  coroutines to Python 3.14t+, allowing millions of concurrent tasks with a work-stealing
  scheduler and no `async`/`await` overhead. It demonstrates a significant shift in
  Python's concurrency landscape, enabling Go-like performance for blocking I/O.
authors:
- robertsdotpm
author: robertsdotpm
---

Python's Global Interpreter Lock (GIL) has long been a bottleneck for true parallelism, but with Python 3.13t+ and its "free-threaded" mode, new possibilities emerge.

Runloom is capitalizing on this with a groundbreaking approach: bringing Go-style stackful coroutines to Python. This means writing blocking code and running millions of them across every core in one process.

It achieves this impressive feat through hand-rolled assembly for context switching, a C-based work-stealing scheduler, and `netpoll`. Crucially, it bypasses the `async/await` syntax.

Imagine the implications for high-throughput Python services, especially for I/O-bound workloads. This could fundamentally change how you design and scale your Python applications.

For senior engineers optimizing Python performance, Runloom offers a powerful new tool to unlock true concurrency and enhance developer productivity.
