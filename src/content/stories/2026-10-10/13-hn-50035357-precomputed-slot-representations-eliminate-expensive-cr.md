---
title: Precomputed slot representations eliminate expensive cross-encoder reranking
  passes
source: hn
url: https://breadbowl.ai/blog/breadbowl-embed/
date: '2026-10-10'
tags:
- bi-encoders
- catchup
- cross-encoders
- hn
- reranking
- retrieval-augmented-generation
- transformer-passes
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '50035357'
comments: https://news.ycombinator.com/item?id=50035357
why_read: Read this to understand the computational bottlenecks of standard two-stage
  retrieval and learn how precomputing multi-slot representations can eliminate expensive
  cross-encoder reranking.
authors:
- mxudev
---

Standard two-stage retrieval in RAG forces systems to read documents twice. First, a bi-encoder compresses entire passages into single dense vectors for candidate generation. Next, an expensive cross-encoder rereads every single candidate paired with the query to recover nuance like numbers and timestamps.

In agentic workflows where agents fire dozens of retrieval calls per task, that reranking pass dominates latency and compute budgets. Running full transformer passes across one hundred candidate documents repeatedly cripples response times.

BreadBowl-Embed proposes storing sixteen key-value cache slots per document instead of a single flattened vector. During query time, a slot encoder generates routing keys, loads the precomputed representation, and runs a sixteen-by-sixteen cross-attention operation without re-evaluating the raw text.

This approach eliminates the need to run transformer passes on candidate tokens during reranking. Systems achieve near cross-encoder precision while operating strictly on precomputed representations stored in the index.

Context retrieval should not demand recomputing the same token representations on every pass.
