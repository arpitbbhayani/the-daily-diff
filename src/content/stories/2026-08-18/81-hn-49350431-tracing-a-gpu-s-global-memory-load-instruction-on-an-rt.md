---
authors:
- corysama
comments: https://news.ycombinator.com/item?id=49350431
date: '2026-08-18'
depth_score: 9
hn_id: '49350431'
image: /infographics/81-hn-49350431.jpg
interest_score: 8
novelty_score: 8
section: systems
source: hn
tags:
- cache-line
- catchup
- dram
- global-load
- gpu-memory
- hn
- reverse-engineering
- rtx-4090
- sass-instruction
title: Tracing a GPU's global memory load instruction on an RTX 4090
url: https://blog.doubleword.ai/what-happens-when-a-gpu-reads-memory
utility_score: 8
why_read: This article provides a deep dive into the hardware path of a GPU global
  memory load instruction on an RTX 4090. Readers will gain a mechanistic understanding
  of how GPUs access memory and the components involved.
---

Ever wondered what really happens when a GPU reads memory? This article delivers an incredible, reverse-engineered deep dive, tracing a global load instruction (LDG.E) through the hardware of an RTX 4090.

It covers the entire journey: from SASS instruction, through L1/L2 caches, across the crossbar, and into the DRAM, detailing an activate and four column reads. This level of detail is usually undocumented by NVIDIA, making this analysis particularly valuable.

Understanding these low-level hardware interactions is critical for any senior engineer aiming to optimize performance for AI/ML workloads or high-performance computing. This is not just theoretical; it provides the mental model you need for true performance tuning.