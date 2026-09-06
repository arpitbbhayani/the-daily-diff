---
title: Paddock is a native Rust inference server for open models
source: github
url: https://github.com/truespar/paddock
date: '2026-09-04'
tags:
- catchup
- github
- inference-server
- kv-cache
- nvidia-gpus
- openai-api
- rust
section: ai
interest_score: 9
depth_score: 9
utility_score: 9
novelty_score: 8
hn_id: '49561513'
comments: https://news.ycombinator.com/item?id=49561513
why_read: This project describes Paddock, a native Rust inference server for open
  models on NVIDIA GPUs, offering high-performance inference with OpenAI and Anthropic
  API compatibility, and explains its architecture including custom scheduler and
  KV cache.
authors:
- truespar
---

Building efficient LLM inference infrastructure is a major challenge, but Paddock offers a compelling solution: a native Rust/C++ inference engine specifically for NVIDIA GPUs. This is not just a wrapper; it implements core components like the scheduler, paged KV cache, memory management, and CUDA kernels from scratch.

The project boasts compatibility with OpenAI and Anthropic APIs, making it highly practical for integration into existing systems. Crucially, it supports various quantization formats, including FP8, NVFP4, MXFP4, Q8, and Q4, which are vital for pushing the limits of performance and memory efficiency.

This level of native implementation allows for deep optimization, translating directly into lower latency and higher throughput for open models. It is an excellent resource for anyone looking to understand or build high-performance LLM serving infrastructure.
