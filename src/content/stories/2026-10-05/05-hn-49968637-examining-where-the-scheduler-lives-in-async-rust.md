---
title: Examining where the scheduler lives in async Rust
source: hn
url: https://herecomesthemoon.net/2026/10/async-rust-where-does-the-scheduler-live/
date: '2026-10-05'
tags:
- async-closures
- async-rust
- catchup
- concurrency
- function-coloring
- hn
- schedulers
section: systems
is_news: false
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 6
hn_id: '49968637'
comments: https://news.ycombinator.com/item?id=49968637
why_read: This article explores the foundational design trade-offs and common architectural
  complaints surrounding asynchronous programming in Rust.
authors:
- Mond_
image: /infographics/05-hn-49968637.jpg
---

Async Rust separates the definition of work from its execution mechanism, leaving developers with subtle questions about runtime scheduling. Because futures do nothing until polled, the scheduler must explicitly coordinate wakers, task queues, and reactor loops outside the language core.

Understanding where the scheduler lives exposes fundamental trade-offs between cooperative multitasking and work-stealing executors like Tokio. Subtle edge cases around task borrowing, cancellation safety, and destructor execution directly impact system throughput under high concurrency.

Mastering these executor mechanics allows engineers to design robust, non-blocking network services without hitting mysterious thread starvation or latency spikes.
