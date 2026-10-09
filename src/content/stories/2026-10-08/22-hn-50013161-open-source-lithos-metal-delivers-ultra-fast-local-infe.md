---
title: Open-source lithos-metal delivers ultra-fast local inference on Apple silicon
source: hn
url: https://twitter.com/JiaZhihao/status/2108249739414147259
date: '2026-10-08'
tags:
- apple-silicon
- catchup
- hn
- lithos-metal
- local-inference
- megakernels
- speculative-decoding
section: ai
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 8
hn_id: '50013161'
comments: https://news.ycombinator.com/item?id=50013161
why_read: Read this to understand how megakernels and speculative decoding enable
  high-throughput local LLM execution on consumer Apple Silicon. You will learn the
  mechanics behind running 27B models at peak speeds on laptop hardware.
authors:
- Zhihao Jia
---

Local inference engines for large language models regularly stall against memory bandwidth walls on consumer hardware. The newly open-sourced lithos-metal framework challenges that bottleneck by sustaining over 200 tokens per second for Qwen3.8-27B on Apple Silicon.

The engine pairs GPU megakernels with speculative decoding to bypass the sequential token generation loop. Fusing operations directly inside Metal shaders minimizes round trips between compute units and unified memory, which keeps execution units saturated during the decode phase.

Peak throughput under synthetic workloads is impressive, but long multi-turn agent loops introduce massive key-value cache pressure. Even unified memory architectures eventually hit thermal and bandwidth limits when managing deep reasoning trajectories and persistent context windows.

Speculative decoding combined with fused execution kernels is rapidly closing the performance gap between local workstations and dedicated cloud accelerators.
