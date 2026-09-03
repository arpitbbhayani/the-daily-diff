---
authors:
- ekechinwokah
comments: https://news.ycombinator.com/item?id=49525760
date: '2026-09-01'
depth_score: 8
hn_id: '49525760'
image: /infographics/20-hn-49525760.jpg
interest_score: 8
novelty_score: 7
section: ai
source: hn
tags:
- catchup
- faiss
- hn
- infino
- latency
- quantization
- recall
- turbovec
- vector-search
title: Three quantized vector search approaches show varied latency at similar recall
url: https://infino.ai/blog/fixed-grid-quantization/
utility_score: 8
why_read: This article benchmarks three 4-bit quantization methods for vector search,
  revealing significant latency differences despite similar recall. Readers will learn
  about the trade-offs in performance and implementation details of FAISS, Turbovec,
  and Infino's SQ4.
---

Optimizing vector search is critical for LLM infrastructure. A recent benchmark pitted FAISS's product quantization against Turbovec and Infino's SQ4, all using 4-bit quantization on 100,000 OpenAI embeddings.

All three achieved similar recall (0.94-0.97), but latency varied wildly, from 1.5ms to 45ms. The key difference lies in how each method handles quantization, and this comparison dives into the build and write costs that contribute to these performance gaps.

This is not just about raw speed; it is about understanding the fundamental architectural choices that impact your real-world applied AI systems. If you are building or scaling vector search, this detailed look at quantization is a must-read for practical insights.