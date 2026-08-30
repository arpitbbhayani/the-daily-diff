---
title: Benchmarking vector indexes consistently with vector-bench methodology
source: hn
url: https://www.percona.com/blog/benchmarking-vector-indexes/
date: '2026-08-28'
tags:
- benchmarking
- catchup
- cosine-similarity
- distance-measures
- embeddings
- hn
- l2-distance
- vector-indexes
section: databases
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49475924'
comments: https://news.ycombinator.com/item?id=49475924
why_read: This post explains the rationale behind and methodology of vector-bench,
  a tool designed to provide consistent and verifiable benchmarks for vector indexes.
  Readers will learn how vector indexes are measured and the fundamental concepts
  of embeddings and distance metrics like L2 and Cosine Similarity.
authors:
- Evgeniy Patlan
---

Trying to make sense of vector database performance claims? It is a minefield. Almost every vendor publishes "benchmarks" with big numbers, yet the methodology is rarely transparent or reproducible. This makes comparing vector indexes incredibly difficult.

Percona built `vector-bench` to fix this. They advocate for a standardized approach: build engines from pinned versions, run them in identical containerized environments on the same hardware, with the same data and measurements. This cuts through the marketing hype.

The article dives into critical concepts like L2 distance and Cosine Similarity, explaining why getting the distance metric wrong renders your search results meaningless. It is a crucial read for anyone working with RAG or exploring vector databases.
