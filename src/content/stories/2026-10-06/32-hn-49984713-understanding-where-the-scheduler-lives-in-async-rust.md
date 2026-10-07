---
title: Understanding where the scheduler lives in async Rust
source: hn
url: https://herecomesthemoon.net/2026/10/async-rust-where-does-the-scheduler-live/
date: '2026-10-06'
tags:
- async-closures
- async-rust
- catchup
- function-coloring
- hn
- schedulers
- scoped-tasks
section: systems
is_news: false
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49984713'
comments: https://news.ycombinator.com/item?id=49984713
why_read: Learn about the core design trade-offs and runtime architecture of asynchronous
  Rust, including scheduler placement and common language constraints.
authors:
- slopinthebag
---

In async Rust, there is no built-in runtime baked into the standard library. Unlike Go or Erlang, which bundle an opinionated M:N scheduler directly inside the runtime binary, Rust futures are completely inert state machines until an external executor polls them.

This separation forces the scheduler to live entirely in userland crates such as Tokio or async-std. The executor owns the task queues, manages the epoll event loop, and coordinates worker thread pools. When a future returns Pending, the task registers a Waker callback that signals the reactor when an I/O event completes, re-queueing the task for execution.

Understanding this boundary is critical for writing high-performance backend systems. It explains why subtle bugs like blocking calls inside async tasks stall entire worker threads, and why scoped execution across thread boundaries remains a complex architectural challenge.

Explicit runtime design gives you unmatched control over execution, but it demands deep respect for the poll model.
