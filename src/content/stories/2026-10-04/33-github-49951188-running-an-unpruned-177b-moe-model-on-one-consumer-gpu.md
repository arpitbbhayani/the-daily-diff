---
title: Running an unpruned 177B MoE model on one consumer GPU
source: github
url: https://github.com/MohammadHaishemKhawaja/hashyy
date: '2026-10-04'
tags:
- catchup
- expert-streaming
- github
- gpu-offloading
- llama-cpp
- memory-optimization
- mixture-of-experts
section: ai
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 8
hn_id: '49951188'
comments: https://news.ycombinator.com/item?id=49951188
why_read: Learn how to run massive mixture-of-experts models efficiently on consumer
  hardware using expert streaming techniques. It details concrete, empirically validated
  I/O and residency methods for high-throughput local inference.
authors:
- Mohammad Haishem Khawaja
---

Running massive mixture-of-experts models on consumer hardware usually requires severe weight pruning or distributed clusters. A new implementation called hashyy demonstrates how to run an unpruned 177 billion parameter MoE model at over 11 tokens per second on a single desktop GPU with only 12 gigabytes of memory.

The engine achieves this throughput by treating expert layer offloading as a structured streaming pipeline rather than relying on standard unified memory paging. It assigns dedicated asynchronous file handles per worker thread, keeps hot experts pinned in page-locked host memory, and uses persisted routing heat maps to prefetch upcoming expert weights.

By overlapping asynchronous disk reads with active tensor core computation, the system eliminates most offload stalls while streaming over 76 gigabytes of model parameters.

Predictable memory tiering can unlock local model execution without sacrificing architectural fidelity.
