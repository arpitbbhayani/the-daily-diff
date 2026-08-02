---
authors:
- vishal-padia
comments: https://news.ycombinator.com/item?id=49113561
date: '2026-07-30'
depth_score: 8
hn_id: '49113561'
image: /infographics/122-hn-49113561-hand-written-kernels-win-when-libraries-are-too-general.jpg
interest_score: 8
novelty_score: 7
section: ai
source: hn
tags:
- catchup
- cublas
- gemv
- hand-kernel
- hn
- memory-bound
- performance-optimization
- profiling
- roofline
- triton
title: Hand-written kernels win when libraries are too general, lose when specialized
url: https://kyrieblunders.bearblog.dev/the-kernels-that-were-there/
utility_score: 8
why_read: This text demonstrates when to write custom kernels for performance gains,
  showing how they can beat general-purpose libraries but fail against highly specialized
  ones. Readers will learn about critical factors like problem specificity and performance
  rooflines.
---

When you are optimizing AI model inference on GPUs, a common question arises: can a custom kernel beat highly optimized libraries like cuBLAS? This analysis provides clear, data-driven answers by profiling a bf16 GEMV for Mamba2 decode and a four-stage SSD scan.

The findings are insightful: a hand-written GEMV achieved a 1.36x speedup over cuBLAS because the library was solving a more general problem. Conversely, a custom SSD scan lost by 2x to Triton, which was already highly specialized. Understanding memory rooflines and specific tensor core utilization is critical, as a high-level spec can be misleading.

This is not about blindly writing custom kernels, but understanding where the performance headroom truly exists, and when to trust the established highly optimized solutions. It teaches you to measure before you optimize, and to identify the specific architectural bottlenecks that unlock gains.