---
title: Engram architecture extends token embeddings for efficient DRAM/SSD offloading
source: hn
url: https://newsletter.semianalysis.com/p/engrams-embedding-entendre-codesign
date: '2026-09-18'
tags:
- catchup
- dram
- engram
- hbm
- hn
- model-architecture
- ssd-offloading
- token-embeddings
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 9
hn_id: '49756691'
comments: https://news.ycombinator.com/item?id=49756691
why_read: This text explains how the Engram model architecture optimizes memory use
  by offloading token embeddings to DRAM/SSD, thereby reducing HBM requirements for
  large models. Readers will learn about a novel approach to address memory constraints
  in high-performance computing.
authors:
- Bryan Shan
- Cam Quilici
- Alec Ibarra
---

The HBM capacity crunch for large language models is a major bottleneck. However, innovative model architectures are emerging to tackle this head-on. "Engram" is one such solution, revolutionizing how token embeddings are handled.

Engram extends standard embeddings with learned multi-token lookups, which drastically reduces the need for constant reconstruction through attention and feed-forward layers. This design inherently lowers HBM requirements, making models like DeepSeek V4.1-Flash more memory-efficient.

Critically, Engram is codesigned for parameter offloading. It allows embedding rows to be prefetched from host DRAM or even NVMe SSDs, freeing up valuable HBM for model weights and KV cache. This enables larger batches or more concurrent sessions on existing hardware. It is a game-changer for inference scalability.
