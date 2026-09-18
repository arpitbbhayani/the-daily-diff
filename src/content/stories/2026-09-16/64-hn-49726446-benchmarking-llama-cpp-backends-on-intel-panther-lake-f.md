---
title: Benchmarking llama.cpp Backends on Intel Panther Lake for Large MoE Models
source: hn
url: https://grigio.org/benchmarking-llama-cpp-backends-on-intel-panther-lake-vulkan-vs-sycl-vs-openvino-vs-cpu/
date: '2026-09-16'
tags:
- benchmarking
- catchup
- cpu-inference
- hn
- intel-panther-lake
- llama.cpp
- mixture-of-experts
- openvino
- sycl
- unified-memory-architecture
- vulkan
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49726446'
comments: https://news.ycombinator.com/item?id=49726446
why_read: This analysis details a benchmark comparison of various llama.cpp backends
  on Intel Panther Lake integrated graphics. Readers will discover which backend offers
  the best inference performance for large Mixture-of-Experts models on this specific
  hardware.
authors:
- grigio
---

Optimizing LLM inference on integrated GPUs is a tricky beast, but new benchmarks show fascinating insights. A detailed comparison of llama.cpp backends (Vulkan, SYCL, OpenVINO, CPU) on Intel Panther Lake reveals which low-level stack performs best for a hefty 35B Mixture-of-Experts model.

The study dives into critical factors like Unified Memory Architecture (UMA) and how it dictates memory efficiency for large models on integrated hardware. It is not just about raw FLOPS; memory bandwidth and effective cache management become paramount when the GPU shares system RAM.

Understanding these backend trade-offs is essential for engineers deploying LLMs on edge devices or optimizing on-premise inference. The findings provide concrete guidance for selecting the right acceleration path, directly impacting real-world performance. You cannot afford to guess when every token counts.
