---
authors:
- Rostyslav Myronenko
comments: https://news.ycombinator.com/item?id=49111039
date: '2026-07-30'
depth_score: 8
hn_id: '49111039'
image: /infographics/99-hn-49111039.jpg
interest_score: 8
novelty_score: 8
section: ai
source: hn
tags:
- catchup
- chroma
- document-churn
- hn
- pgvector
- qdrant
- rag-index
- retrieval-quality
- vector-index
title: RAG index degradation after 13 months of real document churn
url: https://ragproof.io/blog/rag-index-decay/
utility_score: 9
why_read: This post provides a reproducible, empirical study demonstrating severe
  RAG index degradation over 13 months of real document churn. Readers will learn
  about the practical challenges of maintaining retrieval quality in vector databases
  like pgvector, Qdrant, and Chroma.
---

Operating RAG systems in production? Your vector index is decaying faster than you think. A compelling study replayed 13 months of real document churn on vector databases like pgvector, Qdrant, and Chroma, revealing a staggering 90 percent failure rate against ground truth checks.

This is not just academic; it highlights a critical operational issue for applied AI. As data evolves, additions, edits, and especially deletions cause a profound "rot" in retrieval quality. The findings underscore the absolute necessity of robust index management, including continuous data hygiene and re-indexing strategies.

This research provides concrete data to inform your LLM infrastructure decisions, showing why "set it and forget it" for RAG is a recipe for disaster. Plan for decay, or your RAG system will lose its mind.