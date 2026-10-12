---
title: Megakernels underperform optimized separate kernels during Mac inference
source: hn
url: https://abhishek.it/blog/how-megakernels-work-and-how-to-build-kernels-for-mac
date: '2026-10-11'
tags:
- catchup
- gpu-scheduling
- hn
- kernel-fusion
- llm-inference
- megakernels
- memory-bandwidth
section: ai
interest_score: 8
depth_score: 9
utility_score: 7
novelty_score: 8
hn_id: '50040453'
comments: https://news.ycombinator.com/item?id=50040453
why_read: Read this to understand why combining operations into a single megakernel
  fails to outperform separate kernels when memory bandwidth limits projection throughput
  on Apple silicon.
authors:
- Abhishek
---

Conventional GPU optimization wisdom suggests that combining multiple operations into a single fused megakernel always yields superior performance by eliminating dispatch boundaries and keeping temporary buffers in local registers. Detailed profiling on Apple Silicon hardware reveals that reality is significantly more complicated.

In an engineering experiment aiming to run a 27-billion-parameter model at 200 tokens per second on an M5 Max, an aggressively fused megakernel ended up 2.7 percent slower than pipelining optimized separate kernels. Even though the unified memory bus achieved 570 GB/s on raw streaming probes, feed-forward down-projections dropped to only 247 GB/s inside the fused kernel, whereas feed-forward gate and up projections reached 530 GB/s.

The bottleneck comes down to parallel work scheduling. Merging operations with wildly mismatched matrix geometries forces the GPU scheduler into compromises, preventing narrower projection shapes from fully saturating memory pipelines.

Eliminating kernel boundaries does not help if the fused schedule starves the memory bus.
