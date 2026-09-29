---
title: Ingot enables structured agent memory using Postgres and Parquet
source: github
url: https://github.com/tjbroodryk/ingot
date: '2026-09-28'
tags:
- agent-memory
- catchup
- document-chunking
- github
- parquet
- postgres
- tool-results
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49878337'
comments: https://news.ycombinator.com/item?id=49878337
why_read: Read this to understand how Ingot structures agent memory and tool results
  across Postgres and Parquet files without requiring external model calls.
authors:
- tjbroodryk
---

Most AI agent harnesses suffer from a common architectural failure: stuffing raw tool outputs directly into the context window until token limits explode and latency degrades. Managing agent memory does not require a black-box vector database for every single interaction.

Ingot introduces an open-source approach that grounds agent state into PostgreSQL and Parquet files. Every tool output and ingested document is chunked along semantic boundaries (such as headings or CSV rows) and stored in structured tables. The agent queries memory using standard SQL or text search rather than relying on automatic, expensive LLM summarization passes.

Storing structured execution traces in standard columnar and relational formats gives engineers full observability and deterministic retrieval without model provider lock-in.

Treating agent context as structured relational storage is a pragmatic engineering pattern that keeps inference costs predictable and architectures manageable.
