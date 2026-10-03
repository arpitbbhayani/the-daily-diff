---
title: Optimizing Python garbage collection pause times with incremental collection
source: hn
url: https://blog.python.org/2026/09/language-summit-2026-garbage-collection-generational-incremental-both/
date: '2026-10-02'
tags:
- catchup
- garbage-collection
- generational-gc
- hn
- incremental-gc
- pause-times
- python-runtime
- reference-counting
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 6
hn_id: '49935843'
comments: https://news.ycombinator.com/item?id=49935843
why_read: Understand the performance trade-offs between generational and incremental
  garbage collection in Python. Learn how optimizing cycle collection impacts runtime
  execution and latency.
authors:
- Mark Shannon
---

Python spends roughly 12 percent of its execution time in garbage collection, even though reference counting handles the vast majority of dead object deallocation. The cyclic garbage collector exists strictly as a fallback to detect isolated reference cycles, but its pause times can stretch to three seconds on large heaps.

The incremental garbage collector introduced in Python 3.14 succeeded in reducing peak pause times down to tens of milliseconds. However, it had to be reverted back to the generational collector due to severe memory pressure reported across production workloads.

Balancing pause latency against total resident set size remains one of the hardest trade-offs in runtime engine design. Understanding where your runtime spends its time between lookups, interpretation, and cycle detection is critical for profiling high-throughput backend services.
