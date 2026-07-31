---
authors:
- Jaber
comments: https://news.ycombinator.com/item?id=49102291
date: '2026-07-29'
depth_score: 8
hn_id: '49102291'
image: /infographics/37-hn-49102291.jpg
interest_score: 8
novelty_score: 8
section: ai
source: hn
tags:
- catchup
- consumer-gpu
- gemv
- hn
- kimi-linearis
- local-serving
- model-optimization
- quantization
title: Kimi-Linearis 48B model now runs on single consumer GPU
url: https://twitter.com/Akashi203/status/2082555972380401852
utility_score: 9
why_read: This post describes how a large 48B language model, Kimi-Linearis, was optimized
  to run efficiently on a single consumer GPU. Readers will learn about the technical
  approach involving kernel re-writes and the benefits of local execution for privacy
  and cost.
---

Kimi-Linear, a 48B model that previously required datacenter hardware, can now run on a single 32GB consumer GPU, decoding at over 113 tokens per second. This is a significant leap for local AI agent development, democratizing access to powerful models.

The team achieved this by shrinking the model to 28.8 GB with INT4 quantization and rewriting critical W4A16 kernels from matrix-matrix products to real GEMVs, yielding a 3.18x performance boost. It seamlessly integrates with existing coding agents like Claude Code or Aider, providing a local, private, and cost-free alternative to API-based solutions.

Imagine running powerful coding agents entirely on your machine, without API keys, per-token bills, or rate limits. This dramatically lowers the barrier to entry for experimenting with and deploying large language models locally.