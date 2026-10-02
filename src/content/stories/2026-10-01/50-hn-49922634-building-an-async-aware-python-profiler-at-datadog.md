---
title: Building an async-aware Python profiler at Datadog
source: hn
url: https://www.datadoghq.com/blog/engineering/async-python-profiler/
date: '2026-10-01'
tags:
- async-python
- catchup
- continuous-profiler
- hn
- observability
- profiling
- python
section: engineering
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49922634'
comments: https://news.ycombinator.com/item?id=49922634
why_read: Learn how Datadog engineered a specialized continuous profiler capable of
  accurately handling asynchronous Python applications.
authors:
- eatonphil
---

Profiling asynchronous Python applications is notoriously tricky because standard sampling profilers track wall-clock thread time rather than the lifecycle of individual coroutines. When multiple async tasks interleave across event loop iterations, naive call stacks blur together, making it nearly impossible to identify which specific coroutine blocked the loop.

Datadog solved this by hooking directly into Python runtime context variables and the asyncio task lifecycle. By tracking task creation, execution hops, and context switches at the C extension level, the profiler reconstructs accurate execution trees for concurrent coroutines without incurring prohibitive runtime overhead.

The result is precise attribution of latency spikes caused by synchronous I/O or CPU-bound loops running inside cooperative event loops. You get exact visibility into task wait times versus active execution time across distributed services.

Accurate async profiling requires instrumenting the runtime scheduler rather than relying on operating system thread metrics.
