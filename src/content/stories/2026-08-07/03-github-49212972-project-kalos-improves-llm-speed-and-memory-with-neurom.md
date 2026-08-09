---
title: Project Kalos improves LLM speed and memory with neuromorphic design
source: github
url: https://github.com/MongooseReborn/kalos-engine
date: '2026-08-07'
tags:
- associative-memory
- catchup
- cuda
- github
- llm-acceleration
- neuromorphic
- spiking-neural-network
- vram-optimization
section: ai
interest_score: 9
depth_score: 9
utility_score: 9
novelty_score: 9
hn_id: '49212972'
comments: https://news.ycombinator.com/item?id=49212972
why_read: This describes an innovative neuromorphic engine that drastically improves
  large language model performance. Readers will learn how decoupling memory and reflexes
  can lead to significant speed-ups and VRAM reduction in LLM inference.
authors:
- mongoosereborn
---

Imagine reducing LLM memory recall from milliseconds to microseconds while cutting VRAM usage by over 99 percent. Project Kalos, a C/CUDA neuromorphic engine, claims exactly that.

This project promises O(1) microsecond memory recall, replacing traditional linear text re-tokenization (which takes tens of milliseconds) with constant-time CUDA vector lookups. For 72-billion parameter models, this translates to a 7.25 times faster total response completion, drastically cutting latency from 23.71 seconds down to 3.27 seconds.

The core innovation lies in decoupling long-range dialogue memory and spiking neural reflexes from text tokenization, compressing 16.38 GB of KV-cache bloat to just 2.50 MB. This is a potential game-changer for LLM infrastructure, scalability, and the practical application of large models.

This system offers a glimpse into the future of ultra-efficient and high-performance LLM deployment.
