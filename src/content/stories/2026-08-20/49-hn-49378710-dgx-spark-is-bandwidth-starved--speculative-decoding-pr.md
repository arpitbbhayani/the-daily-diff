---
title: DGX Spark is bandwidth-starved, speculative decoding provides a fix
source: hn
url: https://alephinitesimal.com/posts/bandwidth-ceiling.html
date: '2026-08-20'
tags:
- benchmarking
- catchup
- dgx-spark
- hn
- llama-cpp
- memory-bandwidth
- n-gram-speculation
- speculative-decoding
- unified-memory
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49378710'
comments: https://news.ycombinator.com/item?id=49378710
why_read: This text explains that DGX Spark's performance is bottlenecked by memory
  bandwidth, not compute, and demonstrates how speculative decoding can mitigate this.
  Readers will also learn about a critical benchmarking pitfall when evaluating llama.cpp's
  n-gram speculation.
authors:
- Alephinitesimal
---

Speculative decoding can revolutionize LLM inference speeds, especially on bandwidth-starved systems like unified-memory GPUs. This deep dive shows how it transforms token generation from 11.5 to 29.5 tok/s on a DGX Spark by cleverly utilizing idle compute to offset scarce memory bandwidth.

The key insight is that verifying drafted tokens costs only one forward pass, effectively making speculative decoding a perfect match for architectures where memory reads are the bottleneck, not raw FLOPS. It is not about making the model smarter, but about optimizing the hardware's inherent imbalance.

Crucially, the article also exposes a widespread pitfall in `llama.cpp` benchmarking. Its n-gram draft cache persists across requests within the same server process, leading to wildly inflated and misleading token per second metrics if you do not restart the process for each benchmark run.

This is a must-read for anyone optimizing LLM inference or setting up benchmarks.
