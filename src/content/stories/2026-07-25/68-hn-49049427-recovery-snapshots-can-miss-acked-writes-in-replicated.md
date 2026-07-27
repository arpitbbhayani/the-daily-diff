---
authors:
- polvi
comments: https://news.ycombinator.com/item?id=49049427
date: '2026-07-25'
depth_score: 8
hn_id: '49049427'
image: /infographics/68-hn-49049427.jpg
interest_score: 8
novelty_score: 7
section: systems
source: hn
tags:
- acked-writes
- catchup
- coordinator-recovery
- design-bug
- hn
- recovery-snapshots
- replicated-kv
- tla-plus
title: Recovery snapshots can miss acked writes in replicated KV store
url: https://tlc.proc.io/hub/623f9b12-a08b-4b6d-850a-29d58934eb61/Handoff
utility_score: 8
why_read: Readers will learn about a subtle distributed systems design bug where recovery
  snapshots can miss committed writes. It highlights the importance of formal verification
  in catching such race conditions.
---

Formal verification is often seen as academic, but here is a concrete example proving its immense practical value in distributed systems. Handoff, a TLA+ specification for a memory-only replicated KV on an eviction-prone substrate, shows exactly how subtle bugs can hide.

The designers assumed recovery snapshots would guarantee all acknowledged writes are held, but TLA+ found a 13-step counterexample. A write committed to two replicas could be missed by a recovering coordinator if one replica's snapshot happened before an in-flight replication, and the other holding replica was then evicted.

This scenario highlights a critical race condition: recovery snapshots racing in-flight replication. It means an acknowledged write could be alive in the system, but a recovering coordinator would not know about it.

This is a powerful demonstration of why TLA+ is invaluable for designing truly robust distributed systems, especially when dealing with complex failure modes like arbitrary evictions and recoveries. It proves that even seasoned engineers can overlook edge cases that formal methods will expose.