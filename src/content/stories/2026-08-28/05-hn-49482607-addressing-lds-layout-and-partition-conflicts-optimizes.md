---
title: Addressing LDS Layout and Partition Conflicts Optimizes AMD MI450 GPU Performance
source: hn
url: https://rocm.blogs.amd.com/software-tools-optimization/mi450-lds-optimization/README.html
date: '2026-08-28'
tags:
- amd-mi450
- catchup
- gemm-kernels
- gpu-performance
- hn
- lds
- partition-conflicts
- transposed-loads
section: ai
interest_score: 9
depth_score: 9
utility_score: 9
novelty_score: 8
hn_id: '49482607'
comments: https://news.ycombinator.com/item?id=49482607
why_read: This article explains how to optimize LDS performance on AMD Instinct MI450
  GPUs. Readers will learn about transposed LDS loads and how to prevent partition
  conflicts for better GEMM kernel throughput.
authors:
- Ognjen Plavsic
- Nicola Zaghen
- Lixun Zhang
---

Achieving peak AI performance often means diving deep into hardware specifics. This article offers an incredibly detailed look at optimizing GEMM kernels on AMD Instinct MI450 GPUs, particularly focusing on Local Data Share (LDS) efficiency. 

You will learn how to leverage `ds_load_tr` for cooperative-transpose loads, ensuring vectorized memory access even when in-memory layouts do not perfectly align with WMMA expectations. Furthermore, it breaks down the critical issue of LDS partition conflicts and how to structure `ctaLayout` and `PartitionedSharedLayout` to eliminate serialization bottlenecks.

This is not theoretical; it is about tangible throughput gains. For anyone working on high-performance AI inference or training, especially with AMD hardware or building frameworks like Triton, these insights are immediately applicable to squeezing every last FLOP out of your hardware.
