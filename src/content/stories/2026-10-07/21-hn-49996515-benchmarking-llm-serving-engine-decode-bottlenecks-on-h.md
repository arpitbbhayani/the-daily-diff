---
title: Benchmarking llm serving engine decode bottlenecks on h100
source: hn
url: https://zhebrak.io/posts/decode-decoded/
date: '2026-10-07'
tags:
- catchup
- cuda-graphs
- hn
- kernel-launch-overhead
- memory-bandwidth
- nsight-systems
- sglang
- tensorrt-llm
- vllm
section: ai
is_news: false
interest_score: 8
depth_score: 9
utility_score: 8
novelty_score: 7
hn_id: '49996515'
comments: https://news.ycombinator.com/item?id=49996515
why_read: Read this to understand the low-level hardware bottlenecks and kernel overheads
  across modern LLM serving engines on H100 GPUs. You will learn how batch size and
  model scale dictate whether decode execution is bound by memory bandwidth or launch
  latency.
authors:
- Alex Zhebrak
---

High GPU utilization during LLM decode steps is often deceptive. Profiling vLLM, SGLang, and TensorRT-LLM on an H100 with Nsight Systems reveals that even when the host CPU never bottlenecks the pipeline, the GPU frequently wastes cycles on kernel launch overhead rather than saturating high-bandwidth memory.

When serving smaller models like Qwen 0.6B to 7B under modest batch sizes, fixed kernel execution overhead cannot be amortized by memory bandwidth floors. CUDA graphs provide the single largest performance rescue by eliminating CPU launch overhead, yet inter-kernel launch latency within the GPU itself remains a measurable tax.

Interestingly, TensorRT-LLM underperformed rivals on smaller models primarily due to its custom attention kernel design, which introduced higher fixed overhead than standard cuBLAS execution paths. Meanwhile, scheduler overlap noticeably reduced step latency across batch configurations, proving that scheduling concurrency matters just as much as raw tensor math.

Saturating raw memory bandwidth requires optimizing engine launch graphs and scheduler overlaps long before tuning matrix kernels.
