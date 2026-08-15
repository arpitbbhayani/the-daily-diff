---
title: Tracing a GPU Global Memory Load Through RTX 4090 Hardware
source: hn
url: https://blog.doubleword.ai/what-happens-when-a-gpu-reads-memory
date: '2026-08-13'
tags:
- catchup
- cuda
- global-load
- gpu-memory
- hardware-architecture
- hn
- reverse-engineering
- rtx-4090
- sass-instruction
section: systems
interest_score: 8
depth_score: 9
utility_score: 8
novelty_score: 8
hn_id: '49288033'
comments: https://news.ycombinator.com/item?id=49288033
why_read: This article meticulously traces the intricate path of a GPU global memory
  load instruction through the hardware of an RTX 4090. Readers will gain a deep,
  mechanistic understanding of low-level GPU memory access and the rationale behind
  reverse engineering for performance analysis.
authors:
- somnial
---

Ever wondered about the journey a global load instruction takes inside your GPU? This article meticulously reverse-engineers the process on an NVIDIA RTX 4090, going far beyond typical documentation.

It details the path from SASS instruction through cache lines, L2 slices, crossbar, and all the way to DRAM, including specific activation and column reads. This deep dive is achieved through careful timing experiments, revealing undocumented hardware behaviors.

Understanding these low-level memory access patterns is critical for any engineer optimizing GPU-bound AI workloads or high-performance computing applications. It provides actionable knowledge to debug bottlenecks and design more efficient kernels, making your applied AI faster.
