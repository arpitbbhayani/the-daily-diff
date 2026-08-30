---
title: WARP streams model weights to run large AI on consumer hardware
source: github
url: https://github.com/sqliteai/warp
date: '2026-08-28'
tags:
- catchup
- consumer-hardware
- github
- inference-engine
- large-language-models
- nvme
- weight-streaming
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49480081'
comments: https://news.ycombinator.com/item?id=49480081
why_read: Read this to understand how WARP enables running massive language models
  like Kimi K3 and GLM-5.3-Flash on consumer hardware. You will learn about its weight-streaming
  and caching approach for efficient memory use.
authors:
- marcobambini
---

Running massive frontier LLMs on consumer hardware has always hit a wall due to RAM limitations. The WARP project introduces a groundbreaking approach to bypass this, making trillion-parameter models accessible locally.

WARP, a C inference engine, uses "Weight-Aware Runtime and Paging" to stream activated model experts directly from NVMe disk, rather than keeping the entire model in memory. This clever design allows models like the 2.78-trillion-parameter Kimi K3 to run on a 64GB MacBook Pro, albeit at 0.6 tokens per second.

This is not just about raw speed, it is about unlocking new possibilities for local LLM development and experimentation without requiring massive GPU clusters. It is a testament to innovative system design solving hardware bottlenecks.
