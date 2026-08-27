---
title: LatticeDB unifies graph, vector, and full-text search in one file
source: github
url: https://github.com/jeffhajewski/latticedb
date: '2026-08-25'
tags:
- catchup
- embedded-database
- full-text-search
- github
- graph-traversal
- knowledge-graph
- rag-applications
- single-file
- vector-search
section: databases
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49437049'
comments: https://news.ycombinator.com/item?id=49437049
why_read: This text introduces LatticeDB, an embedded single-file database that unifies
  graph traversal, vector similarity, and full-text search. Readers will learn about
  a zero-config solution for relationship-heavy AI/RAG applications on a single machine.
authors:
- Jeff Hajewski
---

Building AI applications, especially RAG and agentic systems, often involves managing diverse data: relationships, embeddings, and raw text. Most solutions force you to juggle multiple databases.

LatticeDB introduces a compelling alternative: an embedded, single-file knowledge graph database that combines native vector search and full-text search. Think of it as SQLite, but built specifically for semantic and connected data in AI applications.

This means you can traverse relationships, run vector similarity queries, and perform BM25 full-text searches all within one engine and one query layer, from a single, portable file. It simplifies local knowledge tools and agent memory significantly.

For relationship-heavy workloads on a single machine, this zero-config, embedded approach could be a game-changer for your LLM infrastructure.
