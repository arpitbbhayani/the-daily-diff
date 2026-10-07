---
title: Toks achieves massive tokenization speedups using assembly hot paths
source: news
url: https://actual.inc/company/blog/introducing-toks
date: '2026-10-06'
tags:
- assembly
- catchup
- hugging-face-tokenizers
- news
- performance-optimization
- tiktoken
- tokenization
section: ai
is_news: true
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49984975'
comments: https://news.ycombinator.com/item?id=49984975
why_read: Learn how toks leverages hand-optimized assembly hot paths to dramatically
  outperform conventional tokenizers across diverse workloads. It provides concrete
  benchmark comparisons demonstrating how low-level hardware alignment eliminates
  software bottlenecks in high-throughput token processing.
authors:
- Thomas Lynch
---

Tokenization is quietly becoming one of the most significant compute bottlenecks in large-scale machine learning pipelines. When systems process millions of tokens per second for training ingestion, retrieval systems, and inference serving, Python and generic C++ tokenizers waste precious CPU cycles on memory copies and inefficient branch prediction.

The creators of toks tackled this by implementing critical tokenizer loops directly in hand-crafted assembly. On single-core CPU benchmarks processing Llama 3 token streams, toks reaches 269.8 megabytes per second compared to 30.3 megabytes per second for tiktoken and 5.36 megabytes per second for standard Hugging Face implementations. When running multi-core parallel tokenization across eight cores, throughput climbs to 1.6 gigabytes per second.

This represents an architecture shift back toward hardware-level optimization for artificial intelligence infrastructure. By removing runtime overhead and structuring memory access around cache lines, low-level execution speeds up preprocessing pipelines by more than an order of magnitude.

Silicon limits matter again when data volumes reach quadrillions of tokens.
