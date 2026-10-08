---
title: Expert paging lets constrained Apple Silicon run large MoE models
source: github
url: https://github.com/yavarb/moefit
date: '2026-10-07'
tags:
- apple-silicon
- catchup
- expert-paging
- github
- mixture-of-experts
- qwen
- unified-memory
section: ai
is_news: false
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49991780'
comments: https://news.ycombinator.com/item?id=49991780
why_read: Learn how moefit enables running massive mixture-of-experts models on memory-limited
  Apple Silicon by paging inactive experts from disk and caching hot weights.
authors:
- yavarb
---

Running a 125B parameter Mixture-of-Experts model typically requires well over 100 GB of RAM. When unified memory is constrained to 24 or 64 GB, conventional inference engines crash or fail to load the model entirely.

Moefit tackles this constraint on Apple Silicon by decoupling execution from full memory residence. It pins the shared attention and base layers in unified memory while dynamically paging sparsely activated experts directly from NVMe SSD storage as the router demands them.

Naively swapping experts during every token generation quickly destroys SSD throughput and creates massive tail latencies. Moefit solves this by introducing a routing-replay sidecar that tracks and pins recurring expert activations across agent loops, delivering an estimated 40 percent retention improvement and preventing disk thrashing.

Treating local model weights as tiered memory hierarchies rather than monolithic in-memory buffers will be critical for edge agent execution.
