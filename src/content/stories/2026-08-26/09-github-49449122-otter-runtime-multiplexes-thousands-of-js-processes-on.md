---
title: Otter Runtime Multiplexes Thousands of JS Processes on Few OS Threads
source: github
url: https://github.com/gi-dellav/otter
date: '2026-08-26'
tags:
- beam-model
- catchup
- concurrency
- github
- javascript-runtime
- message-passing
- os-threads
- process-isolation
- quickjs
section: systems
interest_score: 9
depth_score: 9
utility_score: 9
novelty_score: 9
hn_id: '49449122'
comments: https://news.ycombinator.com/item?id=49449122
why_read: Read this to understand how the experimental Otter runtime achieves high
  concurrency and fault isolation in JavaScript. It demonstrates a BEAM-like process
  model that multiplexes thousands of isolated JS processes onto a small pool of OS
  threads.
authors:
- gi-dellav
---

Building highly concurrent, fault-tolerant systems in JavaScript seems like a contradiction, but Otter, an experimental runtime written in Rust, shatters that assumption with a BEAM-inspired architecture. It multiplexes thousands of isolated JavaScript processes onto a small pool of OS worker threads.

Each JS process in Otter gets its own QuickJS runtime and mailbox, completely isolated from other processes, much like Erlang's BEAM. Communication happens strictly through message passing, preventing shared state issues and making applications inherently more robust.

The genius lies in its scheduler: processes only execute a small slice of work before being re-queued or parked, never blocking an OS thread while awaiting messages. This means one system thread can manage thousands of concurrent JavaScript "engines." If a process crashes, only that isolated part fails, not the entire application.

This is not just another JS runtime; it is a masterclass in applying robust distributed systems principles to a traditionally single-threaded language, offering a powerful blueprint for scalable backend services.
