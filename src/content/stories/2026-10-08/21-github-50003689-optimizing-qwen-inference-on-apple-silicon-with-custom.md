---
title: Optimizing Qwen inference on Apple Silicon with custom Metal kernels
source: github
url: https://github.com/fabiogreter/lily-qwen3.8-flash-next
date: '2026-10-08'
tags:
- apple-silicon
- catchup
- github
- llm-inference
- metal-engine
- quantization
- speculative-decoding
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '50003689'
comments: https://news.ycombinator.com/item?id=50003689
why_read: Read this to understand how hand-written Metal kernels, pipelined decode
  steps, and speculative decoding can drastically outperform standard LLM inference
  runtimes on Apple Silicon.
authors:
- Fabio Greter
---

Running large language model inference locally on Apple Silicon often hits severe memory bandwidth bottlenecks when relying on generic runtimes. A dedicated Metal inference engine built specifically for Qwen architectures demonstrates how tailoring low-level execution directly to silicon changes the performance equation.

By replacing general compute kernels with hand-written Metal routines and pipelined decode steps, this engine achieves prefill speeds up to 4.2 times faster and decode throughput up to 3.6 times faster than standard llama.cpp forks. The speedups become even more pronounced as context length grows.

The architecture combines speculative decoding using the internal draft head of the model with persistent conversation caching across process restarts. It also introduces a hybrid quantization strategy that retains eight-bit precision on core dense tensors while running the remainder at four bits.

This precision trade-off preserves stability across lengthy multi-turn agent execution without degrading throughput.

Dedicated, hardware-specific inference runtimes consistently outperform general-purpose abstractions for local model serving.
