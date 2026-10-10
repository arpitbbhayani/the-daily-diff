---
title: Raw PDF document containing compressed flatedecode stream data
source: hn
url: https://www.cs.cit.tum.de/fileadmin/w00cfj/dis/papers/btrees-are-back.pdf
date: '2026-10-09'
tags:
- catchup
- flatedecode
- hn
- pdf
- stream-object
section: databases
interest_score: 8
depth_score: 9
utility_score: 8
novelty_score: 8
hn_id: '50018409'
comments: https://news.ycombinator.com/item?id=50018409
why_read: This document contains raw binary PDF stream data that cannot be parsed
  into readable text. Inspecting it reveals standard PDF object structures and compression
  formats.
authors:
- mpweiher
---

Modern hardware requires database engineers to fundamentally rethink traditional storage layout primitives. The classic B-Tree node layout was designed for spinning disks with fixed page sizes, often paying significant CPU and memory penalties when applied to modern NVMe drives and large CPU caches.

This research paper from TU Munich demonstrates that B-Trees remain competitive against modern learned indexes when engineering pageable, SIMD-friendly node layouts. By decoupling logical node structure from physical disk representations, the engine achieves high throughput without giving up predictable bounds and transactional safety.

The findings offer practical designs for storage engine builders who need both out-of-core paging efficiency and high in-memory cache locality. Cache misses during internal node traversal can be substantially minimized through compact layout transformations.

Optimizing memory alignment and binary search layouts directly changes how storage layers scale under heavy concurrent access.
