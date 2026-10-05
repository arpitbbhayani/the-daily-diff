---
title: Page table memory consumption grows significantly with shared mappings
source: hn
url: https://frn.sh/pagetables/
date: '2026-10-04'
tags:
- cache-locality
- catchup
- hn
- memory-efficiency
- page-tables
- tlb
- zero-copy
section: systems
interest_score: 8
depth_score: 9
utility_score: 8
novelty_score: 7
hn_id: '49951390'
comments: https://news.ycombinator.com/item?id=49951390
why_read: Understand the architectural trade-offs between tree and hash page tables,
  focusing on TLB cache line fills and memory consumption in zero-copy workloads.
authors:
- "Fernando Sim\xF5es"
image: /infographics/05-hn-49951390.jpg
---

Page table efficiency in operating systems involves a fundamental tension between memory footprint and hardware TLB cache locality. While hashed page tables scatter neighboring entries across hash buckets, hierarchical tree-structured page tables keep adjacent virtual page translations contiguous. This allows a standard Intel CPU to populate eight TLB entries in a single cache line fetch.

While page tables typically consume only 1/512th of mapped memory, heavy zero-copy architectures and multi-process address spaces can quickly multiply this overhead. Understanding these page table mechanics helps when sizing memory limits and debugging mysterious memory spikes in high-throughput network drivers and shared-memory engines.

Hardware cache line behavior dictates memory data structure performance at the kernel boundary.
