---
authors:
- Christopher Winslett
comments: https://news.ycombinator.com/item?id=49111372
date: '2026-07-30'
depth_score: 8
hn_id: '49111372'
image: /infographics/95-hn-49111372.jpg
interest_score: 8
novelty_score: 7
section: databases
source: hn
tags:
- catchup
- hn
- hybrid-search
- pgvector
- postgres
- scalar-filters
- vector-similarity
title: Postgres hybrid search combining vector similarity and scalar filters
url: https://www.crunchydata.com/blog/hybrid-vector-search
utility_score: 9
why_read: This article explains what hybrid search is, highlights the challenges of
  combining vector similarity with scalar filters in Postgres using pgvector, and
  discusses the performance tradeoffs when executing such queries.
---

Building effective RAG or search systems often means more than just pure vector similarity. Most real-world queries involve combining vector search with scalar filters, a challenge known as hybrid search. The conventional approach of filtering then searching, or vice versa, often leads to significant performance penalties.

Crunchy Data delves into how Postgres, paired with pgvector, tackles this. They explain the complexities when a simple WHERE clause meets a vector ORDER BY, and why just intersecting B-tree indexes with vector indexes is not straightforward. The article details how Postgres's iterative index scans operate and the crucial tuning and tradeoffs involved to balance recall and performance.

You will gain highly actionable insights into query optimization for vector databases, directly applicable to production systems. It is a must-read for anyone building robust RAG solutions on Postgres.