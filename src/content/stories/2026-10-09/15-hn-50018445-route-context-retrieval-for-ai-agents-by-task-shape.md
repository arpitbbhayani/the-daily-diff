---
title: Route context retrieval for AI agents by task shape
source: hn
url: https://manveerc.substack.com/p/context-retrieval-ai-agent
date: '2026-10-09'
tags:
- agentic-search
- catchup
- context-retrieval
- graphrag
- hn
- hybrid-search
- vector-rag
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '50018445'
comments: https://news.ycombinator.com/item?id=50018445
why_read: Learn why single-method context retrieval fails for complex agent workflows
  and how routing by task shape solves relational and temporal retrieval blind spots.
authors:
- Manveer Chawla
---

Relying on a single retrieval mechanism for AI agents is a guaranteed path to production failure. Vector indices fail when your agent needs point-in-time document versions, and they fail when answering which documents cited a modified page.

Recent evaluations on MultiHop-RAG demonstrate that complex GraphRAG architectures often fail to outperform token-matched standard retrieval baselines. Across Llama models, GraphRAG scored roughly 69 to 71 percent accuracy, matching basic RAG once token budgets were equalized. Graph indexing adds substantial operational latency without solving temporal correctness.

The real solution is building a query router that selects retrieval strategies based on task shape. Vector search handles fuzzy conceptual similarity, relational indices track document lineage and point-in-time timestamps, and live systems supply real-time state.

Stop searching for a magic retrieval algorithm and build routing logic that matches your query semantics.
