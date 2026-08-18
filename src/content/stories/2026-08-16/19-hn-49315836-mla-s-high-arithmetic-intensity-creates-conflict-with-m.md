---
title: MLA's High Arithmetic Intensity Creates Conflict With MTP Decoding
source: hn
url: https://changyi.fun/posts/attention-arithmetic-intensity/
date: '2026-08-16'
tags:
- arithmetic-intensity
- attention-mechanisms
- catchup
- decoding
- gpu-performance
- hn
- mla
- mtp
- speculative-decoding
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49315836'
comments: https://news.ycombinator.com/item?id=49315836
why_read: This article clarifies why MLA and MTP conflict during model decoding, by
  explaining how MLA's arithmetic intensity makes it memory-bound. Readers will understand
  the performance implications of different attention mechanisms on GPUs.
authors:
- Changyi Yang
---

Optimizing LLM inference often comes down to understanding the hardware. This analysis of 'arithmetic intensity' for attention mechanisms like MHA, GQA, MQA, and MLA during single-token decoding reveals why certain choices dramatically affect GPU performance. You might think more data is always better, but it is not. 

The core insight? The arithmetic intensity (FLOPs per byte moved) varies significantly. MHA's AI is roughly 1, while MLA can be almost 2x that. This difference determines if your attention workload is memory-bound or compute-bound, a critical distinction for efficient GPU utilization. 

This becomes crucial when speculative decoding (MTP) enters the picture. An already compute-bound MLA attention can struggle when stacked with MTP, tipping the workload further into an inefficient compute bottleneck. Understanding these fundamental hardware-software interactions is key to designing performant LLM systems. It is not just about the model, but how it interacts with the silicon.
