---
title: TornadoVM enables direct access to CUDA Graphs and Tensor Cores from JVM
source: hn
url: https://www.tornadovm.org/blogs/java-at-the-metal-cuda-graphs-tensor-cores-cublas-cudnn-cufft
date: '2026-08-13'
tags:
- catchup
- cuda-graphs
- gpu-programming
- heterogeneous-computing
- hn
- java
- jit-compilation
- taskgraph
- tensor-cores
- tornadovm
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49286338'
comments: https://news.ycombinator.com/item?id=49286338
why_read: This article explains how TornadoVM allows Java developers to leverage advanced
  CUDA features, such as CUDA Graphs and Tensor Cores, directly from the JVM. It enhances
  performance and expressiveness for GPU computing by moving beyond simple JIT-compiled
  kernels.
authors:
- pjmlp
---

Java has not traditionally been the go-to for low-level GPU programming, but TornadoVM is changing that. You can now leverage advanced CUDA features like CUDA Graphs, Tensor Cores, and highly optimized libraries such as cuBLAS/cuDNN/cuFFT directly from Java.

This moves beyond merely JIT-compiling Java loops to GPU kernels. It means achieving true "Java at the Metal" performance, unlocking the full potential of modern GPUs for demanding AI and scientific computing workloads without resorting to manual JNI or external tools.

By integrating these low-level CUDA primitives into the JVM, TornadoVM allows Java developers to build high-performance, heterogeneous applications with significantly reduced development complexity and substantial gains in throughput.
