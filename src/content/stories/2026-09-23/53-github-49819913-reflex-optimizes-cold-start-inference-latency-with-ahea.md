---
title: Reflex optimizes cold-start inference latency with ahead-of-time compiled kernels
source: github
url: https://github.com/lateos-ai/reflex
date: '2026-09-23'
tags:
- catchup
- cold-start-latency
- cuda
- gguf
- github
- inference-engine
- rust
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49819913'
comments: https://news.ycombinator.com/item?id=49819913
why_read: Learn how ahead-of-time CUDA kernel compilation in Rust dramatically reduces
  LLM cold-start latency. It provides a practical architecture for building sub-second
  real-time agent decision loops.
authors:
- leochong
---

Traditional LLM inference engines optimize almost exclusively for sustained server throughput, often ignoring cold-start penalties. When running autonomous agent decision loops, launching a short-lived process or hitting an idle instance frequently incurs severe latency spikes from runtime initialization.

Reflex solves this by building an engine in Rust and CUDA specifically tailored for cold starts. By compiling every CUDA kernel ahead of time with nvcc and embedding them directly inside the binary, the runtime completely skips JIT compilation during startup.

This architecture achieves a median cold-start latency of roughly 483 milliseconds on a Tesla T4 running quantized models. For engineers building responsive System 1 agent decision loops, eliminating startup overhead unlocks much faster local execution.
