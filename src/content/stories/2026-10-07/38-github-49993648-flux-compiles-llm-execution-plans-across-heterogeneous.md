---
title: Flux compiles LLM execution plans across heterogeneous hardware
source: github
url: https://github.com/cyqlelabs/flux
date: '2026-10-07'
tags:
- catchup
- execution-planning
- github
- llama-cpp
- llm-inference
- model-compilation
- nvme-offloading
section: ai
is_news: false
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49993648'
comments: https://news.ycombinator.com/item?id=49993648
why_read: Understand how Flux benchmarks hardware to optimize LLM layer placement
  across GPU, CPU, and NVMe storage. Learn how treating placement planning as compilation
  maximizes local inference throughput.
authors:
- cyqlelabs
---

Running local LLMs across heterogeneous hardware often involves frustrating guesswork when choosing how many layers to offload to GPU versus CPU memory.

Flux frames local model inference as a compilation and execution planning problem. Instead of relying solely on heuristic cost models, Flux directly benchmarks your GPUs, CPU bandwidth, and NVMe throughput. It tests candidate splits of model layers and mixture-of-experts weights with real prompts, measures actual execution speeds, and compiles the fastest configuration into an immutable execution plan.

When a model exceeds available system RAM, the runtime streams remaining weights straight from an NVMe drive during forward passes, serving the output through an OpenAI-compatible API on top of a patched llama.cpp engine. By treating model serving like an optimizing compiler targeted to host hardware, you extract maximum tokens per second without manual tuning.

Empirical benchmarking beats theoretical cost modeling every time when optimizing inference workloads on non-uniform memory architectures.
