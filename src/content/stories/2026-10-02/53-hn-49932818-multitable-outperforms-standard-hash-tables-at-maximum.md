---
title: Multitable outperforms standard hash tables at maximum load factor
source: hn
url: https://arxiv.org/abs/2609.39233
date: '2026-10-02'
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
hn_id: '49932818'
comments: https://news.ycombinator.com/item?id=49932818
why_read: Read this to understand how the MultiTable design achieves higher lookup
  throughput and space efficiency than SwissTable while reaching physical load factors
  up to one without probe cliffs.
authors:
- Maksym Petkus
---

SwissTable and its standard Rust variant hashbrown have long set the standard for high-performance memory lookups, but they suffer from severe performance cliffs as physical load factors approach capacity limits.

A new architecture named MultiTable achieves up to a 0.9999 physical load factor while delivering more than double the throughput of hashbrown. Across 84 test configurations on native integer and byte keys, filtered MultiTable consistently outperformed SwissTable, delivering nearly triple the throughput on negative lookups.

Traditional open addressing tables force early resizing, often doubling allocated memory when reaching roughly 77 percent capacity. MultiTable eliminates the resize cliff by allowing bucket size and physical load factors to remain configurable parameters that support expansion without full rehashing.

For systems engineers optimizing memory footprints in high-throughput data pipelines, eliminating wasted capacity allocations while reducing lookup latency is a massive operational win.
