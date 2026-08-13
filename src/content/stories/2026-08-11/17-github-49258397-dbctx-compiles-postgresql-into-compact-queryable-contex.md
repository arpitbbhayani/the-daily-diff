---
title: dbctx compiles PostgreSQL into compact queryable context
source: github
url: https://github.com/shrsv/dbctx
date: '2026-08-11'
tags:
- ai-agents
- catchup
- database-context
- full-text-search
- github
- postgresql
- schema-extraction
- text-to-sql
section: databases
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49258397'
comments: https://news.ycombinator.com/item?id=49258397
why_read: Learn how dbctx compiles PostgreSQL databases into a compact, queryable
  context index. This tool helps empower text-to-SQL systems and AI agents with relevant
  database schema information at query time.
authors:
- atomicnature
---

Giving LLMs access to databases for text-to-SQL is tricky. Simply dumping schema is not enough, and semantic understanding often requires huge context windows or expensive embeddings. But what if you could compile a PostgreSQL database into a compact, queryable context index?

Dbctx is a Go library and CLI tool that does exactly this. It extracts schema, relationships, field semantics, representative values, JSONB structure, and even builds a full-text search index. Crucially, it uses deterministic introspection and heuristics, not an LLM, for the core index, keeping it reliable and cost-effective.

This project offers a highly practical way to bridge databases and AI agents. It gives LLMs a truly queryable, rich understanding of your database structure, making your text-to-SQL systems far more robust without overwhelming your context window.

A clever approach to context engineering for database-backed AI.
