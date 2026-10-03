---
title: Frontier models with grep match modern retrieval pipelines
source: hn
url: https://www.kapa.ai/blog/company-knowledge-bench
date: '2026-10-02'
tags:
- agentic-retrieval
- benchmarking
- catchup
- grep
- hn
- hybrid-search
- reranking
- retrieval-augmented-generation
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49933381'
comments: https://news.ycombinator.com/item?id=49933381
why_read: Read this to understand how different retrieval architectures perform against
  messy, real-world company data. You will learn the performance trade-offs between
  traditional RAG pipelines, modern hybrid search, and agentic grep workflows.
authors:
- Finn Bauer
image: /infographics/05-hn-49933381.jpg
---

Vector embeddings are not always the best solution for agent retrieval over internal documentation, wikis, and source code. When benchmarking retrieval pipelines on real enterprise data, traditional hybrid search with reranking achieved an accuracy score of 0.50, while query decomposition reached 0.56.

Running a frontier LLM equipped purely with grep tools achieved an accuracy score of 0.61. However, relying solely on agentic tool calling with grep came at a heavy performance cost, taking over five times longer per query than specialized retrieval pipelines.

Optimized retrieval engines that combine hybrid indexing with deep context selection deliver the highest accuracy (0.65) while keeping query latency under two seconds. Evaluating retrieval requires real production test suites rather than synthetic academic datasets.

Blindly throwing embeddings at unstructured enterprise data creates performance bottlenecks. Structured retrieval and precise query execution remain essential for production AI agents.
