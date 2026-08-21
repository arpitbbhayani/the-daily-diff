---
title: hRAG uses Postgres for efficient, grounded retrieval with receipts
source: hn
url: https://hrag.app/
date: '2026-08-19'
tags:
- bm25
- catchup
- evaluation
- hn
- hybrid-search
- postgres
- reranking
- retrieval-augmented-generation
- system-design
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49364594'
comments: https://news.ycombinator.com/item?id=49364594
why_read: This text provides practical insights into designing and evaluating a robust
  RAG system, detailing architectural choices like Postgres for search, hybrid fusion,
  and principles for honest measurement.
authors:
- victor_edka
---

Forget complex search clusters. HRAG demonstrates a powerful hybrid RAG architecture built entirely on PostgreSQL for just 

116/month on Hetzner. It combines BM25 lexical search using pg_textsearch with vector embeddings, achieving 88ms retrieval over 2 million chunks thanks to Block-Max WAND.

The real gem is the weighted fusion and cross-encoder reranker, improving benchmark scores while keeping costs low. This setup also features tenant isolation via row-level security and 100% correct refusal for info-not-found queries, proving that grounded answers are a feature, not a bug.

This is pragmatic, high-performance LLM infrastructure you can actually build.
