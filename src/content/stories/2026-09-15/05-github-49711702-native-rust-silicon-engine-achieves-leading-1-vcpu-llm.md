---
authors:
- bmartin-systems
comments: https://news.ycombinator.com/item?id=49711702
date: '2026-09-15'
depth_score: 9
hn_id: '49711702'
image: /infographics/05-github-49711702.jpg
interest_score: 9
novelty_score: 9
section: ai
source: github
tags:
- benchmarking
- catchup
- continuous-batching
- cpu-optimization
- github
- llm-serving
- paged-memory
- rust-engine
- serving-arena
- tensorrt-llm
- throughput
- vllm
title: Native Rust Silicon Engine achieves leading 1-vCPU LLM serving throughput
url: https://github.com/bmartin-systems/cortex-serving-arena-preview
utility_score: 8
why_read: This benchmark showcases the performance of various LLM serving schedulers
  under strict 1-vCPU hardware isolation. Readers will learn about the significant
  throughput advantages of a Native Rust Silicon Engine compared to other popular
  solutions like vLLM and TensorRT-LLM.
---

Optimizing LLM serving can feel like a GPU-bound problem, but this Rust-based continuous batching scheduler shatters expectations by hitting an astonishing 191,617 tokens per second on just a single vCPU. This performance is a massive 20x improvement over vLLM's baseline on comparable hardware.

The key takeaway is that strategic software engineering, specifically efficient scheduling and memory allocation (paged memory), can unlock incredible efficiency even on commodity CPU hardware. It challenges the assumption that scaling LLM inference always requires more and more GPUs.

Engineers focused on LLM infrastructure will find immense value in understanding the continuous batching and native Rust silicon engine architecture detailed here. It offers a blueprint for drastically reducing inference costs and latency for many use cases.

This is a true game changer for efficient LLM serving.