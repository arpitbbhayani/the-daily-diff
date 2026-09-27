---
title: BM25 outperforms vector indices during day-zero memory tool evaluations
source: hn
url: https://vshulcz.github.io/deja-vu/guide/day-zero.html
date: '2026-09-24'
tags:
- bm25
- catchup
- hn
- longmemeval
- mcp-server
- memory-tools
- token-cost
- vector-search
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49832717'
comments: https://news.ycombinator.com/item?id=49832717
why_read: This benchmark reveals the real day-zero token costs, indexing latency,
  and retrieval accuracy of popular AI memory tools on historical session data.
authors:
- vshulcz
---

Most AI agent memory architectures quietly waste substantial context before the user even types a single prompt.

Empirical benchmarks across coding sessions reveal that wired Model Context Protocol servers inject between 477 and 8,283 tokens of tool schema definitions into context every single turn. This tax applies whether the agent invokes the tool or not. Furthermore, heavy vector pipelines utilizing Hugging Face embeddings with rerankers spent over thirty minutes indexing local developer history, only to underperform simple BM25 keyword retrieval across all search depths.

Reusing structured local session history dropped total task execution from 126,000 tokens down to 53,000 tokens on identical real-world coding benchmarks. Blindly adding embeddings and extra MCP servers often degrades accuracy while inflating operational costs.

Context hygiene and classical search beats complex vector pipelines for local agent memory.
