---
authors:
- marcobambini
comments: https://news.ycombinator.com/item?id=49112587
date: '2026-07-30'
depth_score: 8
hn_id: '49112587'
image: /infographics/89-github-49112587.jpg
interest_score: 8
novelty_score: 8
section: ai
source: github
tags:
- c-language
- catchup
- github
- llm-inference
- nvme-storage
- resource-constrained-ai
- weight-streaming
title: Streaming activated weights from NVMe enables large AI models on consumer devices
url: https://github.com/sqliteai/waste
utility_score: 7
why_read: This explains how the WASTE inference engine allows running colossal AI
  models, like the 2.78-trillion-parameter Kimi K3, on consumer hardware by streaming
  activated weights directly from NVMe, overcoming RAM limitations.
---

Imagine running a 2.78-trillion-parameter LLM on your consumer laptop with just 64GB of RAM. The WASTE engine does precisely that for Kimi K3, proving that massive models do not always need cloud-scale infrastructure.

The trick? Intelligent memory management. WASTE keeps the model trunk in memory but streams "experts" 

 activated weights 

 directly from NVMe, using remaining RAM as a bounded cache. It is a dependency-free C inference engine.

This is not a distilled or pruned model, but the full behemoth. It is a testament to clever system design and low-level optimization, enabling a 0.5 tokens/second inference rate. This technique opens doors for advanced local AI on everyday hardware.