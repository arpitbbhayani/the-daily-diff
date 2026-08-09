---
title: OBASE improves memory tiering by reorganizing virtual memory address space
source: hn
url: https://www.usenix.org/conference/osdi26/presentation/banakar
date: '2026-08-07'
tags:
- address-space-engineering
- catchup
- hn
- hotness-fragmentation
- memory-tiering
- object-based-system
- virtual-memory
section: systems
interest_score: 8
depth_score: 9
utility_score: 8
novelty_score: 8
hn_id: '49206211'
comments: https://news.ycombinator.com/item?id=49206211
why_read: This paper introduces OBASE, a compiler-runtime system that solves hotness
  fragmentation in memory tiering. Readers will learn how object-based address-space
  engineering can significantly improve memory utilization and reduce footprint in
  datacenters.
authors:
- Vinay Banakar
- Suli Yang
- Kan Wu
- Andrea C. Arpaci-Dusseau
- Remzi H. Arpaci-Dusseau
- Kimberly Keeton
---

Memory overprovisioning in datacenters is a silent killer of efficiency, largely due to "hotness fragmentation" where hot and cold objects interleave within memory pages. A single hot object keeps an entire page in expensive DRAM, wasting up to 97 percent of active page bytes on cold data.

A new approach, OBASE, tackles this head-on with object-based address-space engineering. It dynamically reorganizes virtual memory, clustering hot objects into uniformly hot pages and cold objects into cold ones. This enables existing OS backends to tier memory far more effectively.

The results are impressive: 2-4x improved page utilization and up to 70 percent reduced memory footprint, all with just 2-5 percent overhead. This is a game-changer for anyone optimizing large-scale systems or working with memory-intensive workloads.
