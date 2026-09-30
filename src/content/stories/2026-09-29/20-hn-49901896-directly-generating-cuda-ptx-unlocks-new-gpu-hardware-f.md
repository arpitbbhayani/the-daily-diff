---
title: Directly generating CUDA-PTX unlocks new GPU hardware features faster
source: hn
url: https://zhang677.github.io/blog_md/ptxbench.html
date: '2026-09-29'
tags:
- catchup
- code-generation
- cuda-ptx
- gpu-architectures
- hn
- kernel-generation
- ptxbench
section: ai
interest_score: 8
depth_score: 9
utility_score: 8
novelty_score: 8
hn_id: '49901896'
comments: https://news.ycombinator.com/item?id=49901896
why_read: Read this to understand how LLMs generating low-level CUDA-PTX can access
  bleeding-edge GPU capabilities before compiler abstractions catch up. It explains
  the mechanics and benchmarking behind execution-grounded kernel repair across modern
  architectures.
authors:
- Genghan Zhang
---

High-level abstractions like Triton and CuTe provide portability, but direct CUDA-PTX generation offers the shortest path from new hardware features to optimized GPU kernels.

PTXBench evaluates how effectively frontier large language models can reason about architecture-specific PTX on modern NVIDIA H100 and B200 GPUs. The framework provides models with architectural knowledge packs and tests their ability to iteratively repair assembly code using compiler diagnostics and runtime execution feedback.

The findings reveal a stark divergence across workload types. Models like Claude Opus achieve 1.012x cuBLAS performance on dense matrix multiplication tasks through iterative repair. However, performance degrades substantially when models attempt to generate complex memory-bound kernels like attention mechanisms.

Direct PTX synthesis highlights execution-grounded feedback and strict runtime verification as the essential primitives for automated systems engineering.
