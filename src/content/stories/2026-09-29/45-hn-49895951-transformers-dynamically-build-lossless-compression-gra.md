---
title: Transformers dynamically build lossless compression graphs on the fly
source: hn
url: https://openzl.org/blog/2026-09-24-compression-transformer/
date: '2026-09-29'
tags:
- catchup
- codecs
- compression-graphs
- hn
- lossless-compression
- neural-networks
- openzl
section: systems
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 8
hn_id: '49895951'
comments: https://news.ycombinator.com/item?id=49895951
why_read: Discover how neural networks can dynamically construct compression graphs
  in real time without manual tuning. You will learn how automatic codec selection
  optimizes throughput across heterogeneous data streams.
authors:
- stardomSerf
---

Graph-based data compression offers massive flexibility by chaining specialized codecs, but manually searching the combinatorial space of optimal codec graphs at ingestion time is computationally impractical.

OpenZL v0.3.0 introduces a Compression Transformer that constructs compression graphs on the fly for arbitrary data streams. Instead of relying on offline training with synthetic data samples that fail on heterogeneous network traffic, the neural model selects subsequent codecs dynamically without requiring decompression-side changes.

This architecture bridges the gap between static compression algorithms and adaptive pipelines, allowing backend data pipelines to capture high compression ratios without manual tuning.

Automating pipeline graph selection turns compression tuning into an adaptive online optimization problem.
