---
title: Milvus 3.0 introduces lake-native vector search and powerful retrieval
source: hn
url: https://milvus.io/blog/announcing-milvus-3-lake-native-vector-search-and-a-more-powerful-retrieval-engine.md
date: '2026-08-04'
tags:
- catchup
- faceted-search
- hn
- lake-native
- milvus-3.0
- object-storage
- open-table-formats
- retrieval-engine
- vector-search
section: databases
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49169288'
comments: https://news.ycombinator.com/item?id=49169288
why_read: This announcement explains the architectural advancements in Milvus 3.0,
  focusing on its new lake-native vector search capabilities. Readers will learn how
  Milvus 3.0 integrates with object storage and open table formats, enabling more
  powerful server-side retrieval and processing features.
authors:
- Fendy Feng
- Li Liu
---

Milvus 3.0 is a game-changer for anyone building large-scale AI retrieval systems, especially those grappling with data lakes. The new "lake-native" architecture means you can now index vector data directly from object storage like S3 and open table formats such as Parquet and Iceberg.

This dramatically simplifies your data pipeline. You no longer need to maintain separate copies of data in a vector database; Milvus can search your lake-resident data directly. This reduces ETL complexity, storage costs, and keeps your data consistent across systems.

Furthermore, the enhanced retrieval engine allows for server-side sorting, aggregation, and faceted search. This moves complex post-processing logic out of your application code and into the database itself, making your RAG pipelines faster and more efficient. It is a significant step towards a true "Vector Lakebase."
