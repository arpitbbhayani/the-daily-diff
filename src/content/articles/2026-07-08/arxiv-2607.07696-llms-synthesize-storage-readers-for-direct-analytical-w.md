---
title: LLMs Synthesize Storage Readers for Direct Analytical Workloads
source: arxiv
url: http://arxiv.org/abs/2607.07696v1
date: '2026-07-08'
tags:
- analytical-workloads
- arxiv
- catchup
- code-synthesis
- cs.AI
- cs.DB
- data-lock-in
- database-storage
- large-language-models
- performance-improvement
arxiv_id: '2607.07696'
categories: cs.DB, cs.AI
why_read: This paper introduces Jailbreak, an LLM-assisted approach that bypasses
  database drivers by synthesizing direct storage readers. Readers will learn how
  this method dramatically improves performance for analytical workloads and helps
  break data lock-in across systems.
authors:
- Victor Giannakouris
- Immanuel Trummer
---

Analytical workloads are often bottlenecked by database drivers like JDBC/ODBC, forcing reads through layers not optimized for bulk columnar analytics. What if you could just bypass the database entirely?
Jailbreak, an LLM-assisted approach, does exactly this. It regenerates operator-specific table reading components by ingesting database file format documentation and source code.
This allows direct reading of storage files and materializing data into in-memory columnar buffers, compatible with DuckDB, Spark, and GPU frameworks. It delivers up to 27x speedups on TPC-H benchmarks.
This is a powerful demonstration of LLM-assisted code synthesis for breaking data lock-in and revolutionizing analytical data access. Truly agentic innovation for your database infrastructure.
