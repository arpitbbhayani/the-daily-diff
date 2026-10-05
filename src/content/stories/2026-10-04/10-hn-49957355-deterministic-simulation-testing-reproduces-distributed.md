---
title: Deterministic simulation testing reproduces distributed bugs in celld
source: hn
url: https://celld.dev/blog/deterministic-simulation-testing/
date: '2026-10-04'
tags:
- bug-reproduction
- catchup
- celld
- deterministic-simulation-testing
- distributed-systems
- event-ordering
- hn
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49957355'
comments: https://news.ycombinator.com/item?id=49957355
why_read: Read this to understand how deterministic simulation testing can control
  event ordering to reliably catch, reproduce, and fix subtle concurrency bugs in
  distributed systems.
authors:
- Yusuke Tanaka
---

Reproducing edge cases in distributed systems is notoriously difficult because bugs often depend on a precise interleaving of delayed network packets, partial storage failures, and timer firings. Celld, a runtime designed for edge worker architectures, addresses this by implementing deterministic simulation testing (DST).

By decoupling the event selection logic from the actual event handlers, the simulator can run the exact production event handling code under a fully controlled schedule. The simulator deterministically controls asynchronous task execution, storage latencies, and clock ticks, enabling full reproducibility when a failure occurs.

Adopting deterministic simulation testing eliminates the guesswork from distributed failure modes by turning transient race conditions into deterministic regression tests.
