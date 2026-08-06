---
authors:
- Sangeeta Chowdhary
- Ryan Swann
- Sean Siddens
- Muhammad Osama
- Stephen Neuendorffer
- Alexandru Dutu
- Karthik Sangaiah
- Sandeepa Bhuyan
- Samuel Bayliss
- Ganesh Dasika
comments: https://news.ycombinator.com/item?id=49106924
date: '2026-07-30'
depth_score: 9
hn_id: '49106924'
image: /infographics/09-hn-49106924.jpg
interest_score: 9
novelty_score: 9
section: ai
source: hn
tags:
- cache-locality
- catchup
- chiplets
- gpu-programming-models
- hn
- llm-inference
- megakernels
- multi-die-gpus
- scheduling
- task-based-abstraction
title: Fleet improves multi-die GPU megakernel performance with hierarchical tasks
url: https://arxiv.org/abs/2604.15379
utility_score: 8
why_read: Read this to understand how Fleet addresses performance bottlenecks in multi-die
  GPUs by introducing a hierarchical task model. You will learn how this improves
  chiplet-level locality and cache utilization for memory-bound workloads like LLM
  inference.
---

Modern multi-die GPUs are powerful, but current programming models like CUDA and HIP often fail to fully leverage their hierarchical cache designs, leading to inefficient LLM inference. A new abstraction, "Fleet," aims to fix this.

Fleet introduces "Chiplet-tasks" that bind work and data directly to a chiplet, coordinating through its shared L2 cache. This hierarchical task model directly addresses redundant memory traffic and poor cache utilization.

The results are impressive: on AMD Instinct MI350 with Qwen3-8B, Fleet reduces decode latency by 1.3-1.5x compared to vLLM for smaller batch sizes. For larger batches, cooperative weight tiling boosts L2 hit rates from 12 percent to 54 percent (batch 32) and 39 percent to 61 percent (batch 64), showing substantial memory bandwidth savings.

This is not just an incremental tweak; it is a fundamental rethinking of how we program modern GPU architectures for high-performance AI.