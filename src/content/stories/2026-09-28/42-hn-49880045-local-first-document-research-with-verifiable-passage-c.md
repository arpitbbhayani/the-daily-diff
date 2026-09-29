---
title: Local-first document research with verifiable passage citations
source: hn
url: https://knownote.pages.dev/
date: '2026-09-28'
tags:
- catchup
- citation-tracking
- document-retrieval
- hn
- local-first
- offline-embeddings
- text-splitting
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49880045'
comments: https://news.ycombinator.com/item?id=49880045
why_read: Read this to understand how KnowNote implements local-first document retrieval
  with traceable citations. You will learn why maintaining structural boundaries during
  text splitting is essential for accurate retrieval.
authors:
- mrsibe
---

Most RAG quality issues are created at the document chunking stage, long before queries hit the vector index. Splitting text arbitrarily across sentence or semantic boundaries permanently degrades retrieval quality, and no amount of vector similarity reranking can recover context destroyed during ingestion.

KnowNote addresses this by running a fully local-first retrieval pipeline that enforces strict document boundary preservation during ingestion. Every generated response maintains direct, fine-grained citation threads pointing back to the exact passage offsets within source files rather than whole-document approximations.

Designing RAG pipelines around deterministic source attribution and boundary-aware ingestion produces far more reliable systems than throwing larger models at poorly segmented embeddings.
