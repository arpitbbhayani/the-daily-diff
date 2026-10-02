---
title: Optimizing Python garbage collection to drastically reduce pause times
source: hn
url: https://blog.python.org/2026/09/language-summit-2026-garbage-collection-generational-incremental-both/
date: '2026-10-01'
tags:
- catchup
- garbage-collection
- generational-gc
- hn
- incremental-gc
- pause-times
- reference-counting
section: engineering
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49919341'
comments: https://news.ycombinator.com/item?id=49919341
why_read: Learn how Python balances memory management overhead between reference counting
  and cycle collection, and understand the trade-offs between generational and incremental
  garbage collectors.
authors:
- Mark Shannon
---

Python spends roughly 11.7 percent of its total execution time inside garbage collection routines, making memory management a major bottleneck even when paired with a Just-In-Time compiler. While reference counting cleans up most dead objects instantly, cyclic garbage collection remains necessary to find unreachable reference cycles.

Python 3.14 initially introduced an incremental garbage collector to slash peak pause times on large heaps from three seconds down to tens of milliseconds. However, the implementation was reverted back to the Python 3.13 generational collector after production environments suffered significant memory pressure.

Incremental GC reduces latency by breaking collection work into small steps interleaved with program execution. The trade-off is higher tracking overhead and delayed reclamation of cyclic garbage, which dramatically inflates resident set size under high allocation throughput.

Optimizing runtime memory requires balancing maximum pause-time constraints against total memory footprint.
