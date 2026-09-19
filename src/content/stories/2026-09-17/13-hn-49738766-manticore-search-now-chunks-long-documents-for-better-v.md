---
authors:
- Dmitrii Kuzmenkov
comments: https://news.ycombinator.com/item?id=49738766
date: '2026-09-17'
depth_score: 8
hn_id: '49738766'
image: /infographics/13-hn-49738766.jpg
interest_score: 8
novelty_score: 8
section: databases
source: hn
tags:
- catchup
- chunking
- document-embeddings
- hn
- manticore-search
- vector-search
title: Manticore Search now chunks long documents for better vector search
url: https://manticoresearch.com/blog/auto-chunking/
utility_score: 9
why_read: This article demonstrates how Manticore Search's new chunking feature resolves
  issues with vector models and long documents. Readers will learn to implement automatic
  chunking for improved vector search relevance.
---

Working with RAG and vector search for long documents? You have probably hit the wall where your documents exceed the embedding model's token limit, silently truncating and losing crucial context. Manticore Search now has a powerful, elegant solution built right into the database.

This feature lets you define chunking strategies like 'sentence' or 'recursive' directly on your vector column during CREATE TABLE. Instead of building complex external ingest pipelines to split documents, embed chunks, and then re-combine results, Manticore handles it all.

This simplifies RAG architecture significantly, ensuring that even multi-thousand-word documents are properly embedded and searchable. It means your vector search results are much more relevant because no valuable information is silently discarded. This is a game-changer for production RAG systems.