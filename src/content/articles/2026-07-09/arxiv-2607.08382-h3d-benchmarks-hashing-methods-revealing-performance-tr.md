---
title: H3D Benchmarks Hashing Methods Revealing Performance Trade-offs
source: arxiv
url: http://arxiv.org/abs/2607.08382v1
date: '2026-07-09'
tags:
- arxiv
- benchmarking
- bge-embeddings
- catchup
- cs.IR
- document-deduplication
- document-hashing
- flyhash
- fuzzyhash
- minhash
- performance-tradeoffs
- semantic-hashing
- simhash
- similarity-search
- unsupervised-hashing
- winnowing
arxiv_id: '2607.08382'
categories: cs.IR
why_read: Read this to understand H3D, a benchmark for evaluating unsupervised text
  hashing methods. It clarifies the performance trade-offs between lexical and semantic
  approaches for document deduplication and similarity search.
authors:
- Qianren Mao
- Jiaxun Lyu
- Junnan Liu
- Zhijun Chen
- Jingzheng Li
- Hanwen Hao
- Bo Li
---

Document hashing is critical for efficient similarity search and deduplication, especially with massive text corpora. But how do different unsupervised hashing methods stack up?

H3D is a new benchmark for fine-grained document deduplication, evaluating non-learning methods (like MinHash and SimHash) alongside semantic-sensitive approaches built from BGE embeddings.

The results highlight a consistent trade-off: lexical and structural fingerprints excel at near-duplicate matching, while semantic-sensitive representations better preserve similarity under content rewriting, albeit at a higher computational cost.

Understand these trade-offs to select the optimal text hashing strategy for your vector databases and applied AI systems.
