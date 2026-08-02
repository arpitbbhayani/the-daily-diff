---
authors:
- Alpin Dale
comments: https://news.ycombinator.com/item?id=49114146
date: '2026-07-30'
depth_score: 9
hn_id: '49114146'
image: /infographics/79-hn-49114146.jpg
interest_score: 8
novelty_score: 8
section: systems
source: hn
tags:
- architectural-change
- catchup
- compiler-generated-sass
- gpu-performance
- hn
- independent-thread-scheduling
- nvidia-gpus
- reconvergence-machinery
- warp-divergence
title: Warp divergence performance cost model stable across NVIDIA GPU generations
url: https://arxiv.org/abs/2607.23402
utility_score: 8
why_read: Readers will learn that the performance cost model for warp divergence on
  NVIDIA GPUs has remained stable across generations despite significant architectural
  changes. It details how compiler-emitted reconvergence machinery evolved from Pascal
  to Blackwell.
---

Thinking you know how warp divergence impacts your GPU code? This paper reveals a consistent performance cost model across NVIDIA GPUs from Pascal to Blackwell, but the underlying hardware architecture for reconvergence has dramatically changed.

Through cycle-accurate microbenchmarks and static analysis of compiler-generated SASS, it shows divergent paths serialize linearly, with execution efficiency falling as 32/k. Crucially, this programmer-visible cost predates Independent Thread Scheduling (ITS), challenging common assumptions.

Blackwell introduces significant shifts, including a two-tier convergence-barrier classification and explicit partial-mask warp synchronization. Understanding these low-level mechanisms is paramount for any senior engineer optimizing high-performance computing workloads or building LLM infrastructure, allowing for more precise performance tuning.