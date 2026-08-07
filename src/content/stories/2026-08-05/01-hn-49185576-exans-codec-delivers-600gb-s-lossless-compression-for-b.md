---
authors:
- arnav__1
comments: https://news.ycombinator.com/item?id=49185576
date: '2026-08-05'
depth_score: 9
hn_id: '49185576'
image: /infographics/01-hn-49185576.jpg
interest_score: 9
novelty_score: 8
section: ai
source: hn
tags:
- bf16
- catchup
- decode-throughput
- exans
- gpu-codec
- hn
- kv-cache
- lossless-compression
title: ExANS codec delivers 600GB/s lossless compression for BF16 KV cache
url: https://www.theopenlake.com/blog/exans-lossless-gpu-compression-for-bf16-kv-cache
utility_score: 9
why_read: This article introduces ExANS, a novel GPU codec achieving high-throughput
  lossless compression for BF16 KV cache by exploiting exponent field properties.
  Readers will learn how ExANS enhances performance in high-performance inference
  engines by overcoming bandwidth limitations.
---

Optimizing LLM inference performance often hits I/O bottlenecks, especially with the KV cache. A new lossless GPU codec, ExANS, offers a compelling solution, achieving 622 GB/s decode throughput with 1.51x compression for BF16 KV caches on H100 GPUs. This is a game-changer for reducing Time To First Token (TTFT).

The magic lies in how ExANS targets the BF16 format: it isolates and aligns the often-repeating 8-bit exponent field, then applies a modified Asymmetric Numeral System (ANS) encoding. This exploits low-entropy characteristics within a seemingly high-entropy data type, making compression fast and effective.

For engineers building LLM infrastructure, this means KV blocks can arrive faster than physical wire rates, shifting the bottleneck. You are essentially getting more effective throughput beyond what the hardware physically provides. This is a crucial step towards truly scalable and efficient LLM deployments.