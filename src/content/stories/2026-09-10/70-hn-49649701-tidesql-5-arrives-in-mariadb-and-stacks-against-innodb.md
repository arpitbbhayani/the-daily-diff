---
title: TideSQL 5 arrives in MariaDB and stacks against InnoDB
source: hn
url: https://tidesdb.com/articles/tidesql-5-arrives-in-mariadb/
date: '2026-09-10'
tags:
- benchmarking
- catchup
- database-replication
- full-text-search
- galera-clustering
- hn
- innodb
- log-structured-database
- mariadb
- mvcc
- storage-engine
- tidesql
- vector-search
section: databases
interest_score: 8
depth_score: 9
utility_score: 8
novelty_score: 7
hn_id: '49649701'
comments: https://news.ycombinator.com/item?id=49649701
why_read: Read this to understand the features and performance of TideSQL 5, a new
  log-structured storage engine for MariaDB, compared to InnoDB using sysbench benchmarks.
authors:
- Alex Gaetano Padula
---

A new player has entered the MariaDB storage engine arena, and it is called TideSQL 5. This is not just another minor update; it is a full-fledged, log-structured engine designed to challenge InnoDB.

TideSQL 5 introduces multi-version concurrency control (MVCC), highly tunable durability, and a write-optimized architecture that significantly pulls ahead on inserts, updates, and deletes. It also brings advanced indexing, including BM25 full-text and approximate nearest-neighbor vector search, seamlessly integrated into MariaDB's replication and Galera clustering.

For senior engineers evaluating database backends, this offers a compelling alternative, especially for workloads prioritizing write throughput and advanced data types. You now have a serious contender to explore beyond InnoDB, with concrete performance benchmarks to guide your decision.
