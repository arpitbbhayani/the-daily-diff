---
title: Vectorless reasoning-based indexing improves document retrieval accuracy
source: github
url: https://github.com/VectifyAI/PageIndex
date: '2026-10-01'
tags:
- catchup
- document-indexing
- github
- reasoning-based-rag
- tree-index
- vectorless-rag
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49918836'
comments: https://news.ycombinator.com/item?id=49918836
why_read: Learn how PageIndex replaces traditional vector embeddings and chunking
  with structured tree indexing for more accurate context-aware document reasoning.
authors:
- VectifyAI
image: /infographics/12-github-49918836.jpg
---

Standard vector retrieval often breaks down on dense hierarchical documents because arbitrary chunking destroys structural context. Splitting a 50-page financial report or technical specification into 500-token chunks strips away the relationship between sections, leading to poor reasoning and hallucinations.

PageIndex tackles this bottleneck by replacing vector embeddings and chunking with a tree-structured document index. Instead of matching text similarity in high-dimensional vector space, the system builds a hierarchical map of the document and allows the language model to navigate sections intentionally.

This architectural shift allows retrieval to function much more like human reading. The model evaluates document outlines, drills down into specific chapters, and aggregates facts across multiple subtrees without losing global context.

Vector similarity is useful for semantic search, but structural reasoning requires preserving document topology.
