---
title: Multitable achieves higher throughput at physical load factors approaching
  one
source: hn
url: https://arxiv.org/abs/2609.39233
date: '2026-10-01'
tags:
- catchup
- hash-tables
- hashbrown
- hn
- load-factor
- memory-efficiency
- rust
- swisstable
section: systems
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 8
hn_id: '49925121'
comments: https://news.ycombinator.com/item?id=49925121
why_read: Read this to learn how MultiTable achieves superior throughput and memory
  efficiency over SwissTable designs at high physical load factors. You will understand
  the architectural trade-offs that eliminate lookup probe cliffs and allow growth
  without rehashing.
authors:
- Maksym Petkus
---

Modern hash table implementations like SwissTable rely on SIMD probing and rigid capacity doubling thresholds that trade substantial physical memory for throughput.

MultiTable introduces a hash table structure capable of operating at load factors up to 0.99 without suffering the severe probe length degradation typical of flat array addressing. Benchmark results indicate up to a two-fold throughput improvement over standard SwissTable implementations while utilizing significantly less heap space.

Because capacity can expand without full reallocation and rehashing passes, memory allocation spikes during growth phases are substantially mitigated.

High-density hash tables offer immediate performance dividends for memory-bound systems and database query execution engines.
