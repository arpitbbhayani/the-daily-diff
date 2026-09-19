---
authors:
- bobvanluijt
comments: https://news.ycombinator.com/item?id=49743523
date: '2026-09-17'
depth_score: 8
hn_id: '49743523'
image: /infographics/26-hn-49743523.jpg
interest_score: 8
novelty_score: 7
section: databases
source: hn
tags:
- catchup
- fast-walsh-hadamard-transform
- hn
- memory-reduction
- rotational-quantization
- simd
- vector-search
- weaviate
title: 4-bit rotational quantization significantly reduces memory usage in Weaviate
url: https://weaviate.io/blog/4-bit-rotational-quantization
utility_score: 8
why_read: Read this to understand how Weaviate's 4-bit rotational quantization improves
  vector search performance and significantly reduces memory usage. You will learn
  about the underlying technical improvements like SIMD-accelerated Fast Walsh-Hadamard
  Transforms.
---

Optimizing vector database memory and speed just got a significant boost. Weaviate's new 4-bit Rotational Quantization (RQ) promises a massive 45 percent RAM reduction with less than a 1 percent drop in recall for vector search, a game-changer for large-scale LLM infrastructure.

This is not a simple tweak; it is a deep dive into sophisticated algorithms. The post details how RQ builds on Extended-RaBitQ, using structured fast rotations and simplified per-vector interval fitting to enhance encoding performance.

Crucially, it highlights the use of Fast Walsh-Hadamard Transforms (FWHT) with SIMD support, leading to dramatic speedups—for example, FWHT256 is 6.1 times faster on Intel Xeon. This is practical, impactful innovation for anyone building or operating vector databases.