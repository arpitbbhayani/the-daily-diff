---
title: High Bandwidth Flash could meet machine learning memory capacity demands
source: hn
url: https://chipsandcheese.com/p/hot-chips-2026-applying-high-bandwidth
date: '2026-08-24'
tags:
- catchup
- dma
- dram-capacity
- flash-memory
- hbm
- high-bandwidth-flash
- hn
- machine-learning-workloads
- ssds
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 9
hn_id: '49420592'
comments: https://news.ycombinator.com/item?id=49420592
why_read: This article introduces High Bandwidth Flash (HBF) as a potential solution
  for the insatiable DRAM capacity needs of machine learning workloads. Readers will
  learn how HBF works, its key differences from HBM and SSDs, and the software challenges
  and strategies required to integrate it.
authors:
- Chester Lam
---

High Bandwidth Flash (HBF) is poised to fundamentally reshape how we design systems for demanding machine learning workloads. Think of it as an SSD integrated directly onto the processor package, not a DRAM replacement, but a new tier in the memory hierarchy.

This shift means HBF offers capacities vastly exceeding HBM, but requires substantial software re-architecture. Projects like vLLM, for example, would need to adapt their data management strategies to leverage HBF's large, aligned access granularity, moving data via DMA rather than direct memory access.

Understanding HBF is crucial for anyone building next-generation LLM infrastructure. It introduces a complex interplay between hardware capabilities and software design, forcing engineers to reconsider memory access patterns and data movement strategies to unlock its potential. This is a game-changer for capacity-hungry AI models.
