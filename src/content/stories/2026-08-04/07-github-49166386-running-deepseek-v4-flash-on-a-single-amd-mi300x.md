---
title: Running DeepSeek V4 Flash on a single AMD MI300X
source: github
url: https://github.com/ryanzhou/deepseek-v4-flash-mi300x
date: '2026-08-04'
tags:
- amd-mi300x
- catchup
- deepseek-v4-flash
- fp8-format
- github
- llm-deployment
- moe-routing
- performance-tuning
- vllm
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49166386'
comments: https://news.ycombinator.com/item?id=49166386
why_read: Read this to understand the practicalities and performance of deploying
  DeepSeek V4 Flash on AMD MI300X using vLLM. It details the necessary configurations,
  patches, and tuning for successful production deployment, along with performance
  benchmarks.
authors:
- ryanzhou
---

Deploying and optimizing large language models on non-NVIDIA hardware often presents unique challenges. This GitHub repository provides a production-ready blueprint for running DeepSeek V4 Flash on a single AMD MI300X GPU, detailing specific performance tuning.

It goes beyond generic instructions, offering Docker Compose stacks, pinned file overlays, and crucial patches. The project explicitly addresses critical adjustments needed for the MI300X, including fixes for FP8 format, MoE routing at high concurrency, causal speculative verification, and CPU-KV synchronization.

Engineers working on LLM inference infrastructure will find concrete performance metrics and tuning tables to achieve impressive throughput, such as 168.6 tok/s single-stream decode and 830 tok/s aggregate for 64 concurrent streams, validating a 256K context.

This is an invaluable resource for anyone looking to push the boundaries of LLM deployment efficiency on emerging hardware platforms.
