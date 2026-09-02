---
authors:
- ravitandon1990
comments: https://news.ycombinator.com/item?id=49506685
date: '2026-08-31'
depth_score: 8
hn_id: '49506685'
image: /infographics/38-github-49506685.jpg
interest_score: 8
novelty_score: 8
section: databases
source: github
tags:
- bm25
- catchup
- elasticsearch-alternative
- github
- nvme
- s3
- search-engine
- storage-disaggregation
- vector-search
title: Kosha a storage-disaggregated search engine replacing Elasticsearch and OpenSearch
url: https://github.com/decover-tech/kosha
utility_score: 8
why_read: Read this to understand the architecture and goals of Kosha, a novel storage-disaggregated
  search engine designed as an alternative to Elasticsearch and OpenSearch. It details
  how Kosha leverages S3 as the source of truth and local NVMe SSDs for transparent
  caching.
---

Building a search engine to replace Elasticsearch/OpenSearch is a massive undertaking, but Kosha is tackling it with a genuinely innovative approach: storage disaggregation. It treats S3 as the ultimate source of truth, with local NVMe SSDs acting as a transparent cache, making compute nodes entirely disposable.

This design significantly improves scalability and resilience for search and vector workloads. Imagine replacing traditional fixed clusters with a dynamic system where you can spin up or down compute nodes without worrying about data consistency or availability, as S3 handles durability.

The project already implements BM25 lexical search, kNN/ANN, and HNSW vector search in Rust. It offers practical insights into how you might design your next generation search infrastructure, especially if you are wrestling with scaling costs or complexity of existing solutions.