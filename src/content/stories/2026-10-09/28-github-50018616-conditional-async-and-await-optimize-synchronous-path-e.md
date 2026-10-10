---
title: Conditional async and await optimize synchronous path execution
source: github
url: https://github.com/metawrap-dev/TypeScript/blob/conditional-async-await/CONDITIONAL_ASYNC.md
date: '2026-10-09'
tags:
- buffered-writes
- catchup
- conditional-async-await
- github
- microtask-performance
- synchronous-execution
- typescript
section: engineering
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '50018616'
comments: https://news.ycombinator.com/item?id=50018616
why_read: Understand how proposed conditional async syntax eliminates Promise overhead
  when operations complete synchronously. It demonstrates practical micro-benchmarks
  and mechanics for optimizing layered I/O operations.
authors:
- DrMiaow
---

Every backend engineer has written a high-throughput buffered writer that rarely needs to pause for an I/O flush. In JavaScript and TypeScript runtimes, marking such a method as async forces every single invocation to allocate a Promise and resolve across the microtask queue, even when the buffer has plenty of capacity and the call completes immediately.

This TypeScript proposal introduces conditional async and await keywords to eliminate that overhead. By permitting functions to finish synchronously during typical execution paths, the runtime allocates a Promise only when an underlying buffer requires an actual flush. Benchmark results on high-volume layered writers show that this conditional execution achieves more than a four-fold latency reduction relative to standard asynchronous syntax.

Bypassing the microtask event loop on synchronous fast paths brings high-level runtime efficiency close to hand-rolled state machines without sacrificing ergonomic code structure.
