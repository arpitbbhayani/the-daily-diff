---
title: DeepJIT simplifies xPU kernel JIT compilation for C++ and Python
source: github
url: https://github.com/deepseek-ai/DeepJIT
date: '2026-09-10'
tags:
- ascend-npu
- c++-extension
- catchup
- cuda-gpu
- github
- jit-compilation
- kernel-caching
- python-extension
- xpu-kernels
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49641406'
comments: https://news.ycombinator.com/item?id=49641406
why_read: Readers will learn about DeepJIT, a lightweight library that simplifies
  JIT compilation for xPU kernels on NVIDIA CUDA GPUs and HUAWEI Ascend NPUs, enabling
  easier integration for C++ and Python extensions. It provides shared infrastructure
  for compiling, caching, and launching kernels.
authors:
- guyan364
- kurisu6912
- LyricZhao
---

Optimizing AI workloads on specialized hardware is a significant challenge. This new header-only C++20 library, DeepJIT, offers a unified, efficient JIT runtime for NVIDIA CUDA GPUs and Huawei Ascend NPUs.

It provides a shared interface to compile custom kernels at runtime, cache the resulting binaries, and manage device loading and launching. This abstraction allows developers to focus on the kernel logic rather than the complex, backend-specific JIT infrastructure.

The key is its smart caching mechanism: it reuses loaded kernels in memory and compiled artifacts on disk, with cache keys accounting for source, compiler versions, and dependencies. This greatly reduces compilation overhead and improves performance across different devices, even supporting shared caches on distributed file systems.

If you are building custom AI operators or optimizing LLM inference, DeepJIT provides production-ready blueprints for infrastructure bottlenecks.
