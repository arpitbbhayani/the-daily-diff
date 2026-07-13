---
title: CTA-Pipelining Reduces Latency by Leveraging Cooperative Thread Array Dependencies
source: arxiv
url: http://arxiv.org/abs/2607.07862v1
date: '2026-07-08'
tags:
- arxiv
- catchup
- cooperative-thread-array
- cs.DC
- cs.LG
- cta-pipelining
- large-language-models
- latency-optimization
- multi-gpu-systems
- shared-memory
- tensor-parallelism
arxiv_id: '2607.07862'
categories: cs.DC, cs.LG
why_read: This text introduces CTA-pipelining, a novel execution paradigm designed
  to reduce latency in multi-GPU systems for serving Large Language Models. It explains
  how CTA-pipelining leverages shared-memory dependencies to achieve significant latency
  reductions compared to existing methods.
authors:
- Tingkai Liu
- Muralidhar Andoorveedu
- Sanjoy Das
- Sanjay Patel
- Volodymyr Kindratenko
---

Serving Large Language Models under strict latency constraints requires rethinking GPU workload optimization. Current multi-GPU systems are often treated as mere high-speed networks, missing out on shared-memory potential.

This paper introduces CTA-Pipelining, a latency-oriented spatial scaling method specifically designed to exploit these tightly integrated multi-GPU systems.

By leveraging dependencies at the Cooperative Thread Array level, it enables concurrent execution of dependent kernels across GPUs. On a 2-layer GEMM, representing MLP operations, CTA-Pipelining reduced latency by up to 31.8% compared to micro-batching and 29.6% compared to Tensor Parallelism.

This execution paradigm provides a powerful way to push the latency boundary for real-time LLM serving and can even combine with Tensor Parallelism for further gains.
