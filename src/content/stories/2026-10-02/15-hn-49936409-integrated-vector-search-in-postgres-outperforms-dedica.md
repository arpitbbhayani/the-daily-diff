---
title: Integrated vector search in Postgres outperforms dedicated external engines
source: hn
url: https://www.databricks.com/blog/lakebase-search-state-art-full-text-and-vector-search-postgres
date: '2026-10-02'
tags:
- binary-quantization
- bm25
- catchup
- hierarchical-ivf
- hn
- postgres
- rabitq
- vector-search
section: databases
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49936409'
comments: https://news.ycombinator.com/item?id=49936409
why_read: Read this to understand how Lakebase achieves low-latency vector and full-text
  search directly inside Postgres without separate ETL pipelines. You will learn the
  architectural trade-offs of decoupling storage and compute for AI retrieval workloads.
authors:
- moonikakiss
---

Running vector retrieval at scale inside Postgres has historically been constrained by shared compute and memory contention during intensive index traversals. Databricks introduced Lakebase Search, adding native vector and BM25 full-text indexing directly into the database engine while decoupling storage from compute.

Under the hood, the system uses hierarchical Inverted File (IVF) clustering combined with RaBitQ binary quantization. This allows queries to touch only relevant data partitions, achieving 97 percent recall on 100 million vectors with a P99 latency of 71 milliseconds, while keeping the compute footprint minimal.

By offloading vector index construction from the primary OLTP transaction pipeline and scaling compute to zero when idle, you eliminate the need to run dual-write ETL pipelines out to standalone vector engines.

Embedding efficient vector quantization directly into relational storage engines fundamentally simplifies retrieval architectures for production AI systems.
