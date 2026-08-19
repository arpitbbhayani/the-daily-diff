---
title: Serving Qwen3.8-27B on a single RTX 3090
source: github
url: https://github.com/syv-ai/qwen38-27b-rtx3090
date: '2026-08-17'
tags:
- catchup
- context-length
- github
- high-throughput
- inference-optimization
- model-serving
- quantization
- qwen3.8-27b
- rtx-3090
- vllm
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49336792'
comments: https://news.ycombinator.com/item?id=49336792
why_read: This resource demonstrates how to efficiently serve a large language model
  like Qwen3.8-27B on a single consumer GPU (RTX 3090) using vLLM. Readers will learn
  about specific optimizations, performance benchmarks, and configurations for high-throughput
  and single-user scenarios.
authors:
- syv-ai
---

Achieving breakthrough LLM inference performance on consumer GPUs is often considered a dream, but this project makes it a reality. Imagine serving a 27B parameter model like Qwen3.8 at 1150 tokens per second in batch mode on a single RTX 3090.

This repository dives into the nitty-gritty: utilizing vLLM, int8 tensor-core GEMMs, fp16 DeltaNet state, and even calibrated int4 for the lm_head. It is not just about raw numbers; it is about combining advanced quantization, speculative decoding (MTP drafts), and clever KV cache management (split-KV verify attention) to push boundaries.

Engineers building LLM infrastructure will find immediately applicable techniques and reproducible benchmarks here. This is a masterclass in making large models efficient without requiring enterprise-grade hardware.
