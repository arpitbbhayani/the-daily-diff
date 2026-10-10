---
title: TidesDB rethinks read trade-offs under demanding OLTP benchmarks
source: hn
url: https://tidesdb.com/articles/large-tpc-c-analysis-with-mysql-v26-7-0-on-innodb-and-tidesdb/
date: '2026-10-09'
tags:
- bloom-filter
- catchup
- hn
- innodb
- key-value-separation
- read-amplification
- tidesdb
- tpc-c
section: databases
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '50020700'
comments: https://news.ycombinator.com/item?id=50020700
why_read: Read this to understand how decoupling keys from values and using auxiliary
  B+tree metadata challenges traditional LSM read penalties. You will learn the mechanics
  behind optimizing log-structured engines for demanding OLTP benchmarks.
authors:
- Alex Gaetano Padula
---

Log-structured merge engines carry an old reputation: exceptional on write throughput, but chronically slow on mixed point reads and high-contention transactions. A detailed benchmark against InnoDB running 4,000 warehouses on TPC-C challenges that assumption directly.

The bottleneck in conventional LSM engines stems from read amplification and massive write stalls caused by compactions churning through entire payload values. When values exceed one kilobyte, moving both keys and values during merge operations wastes disk bandwidth and causes cache thrashing across levels.

TidesDB addresses this bottleneck by separating keys from values by default into dedicated value logs. Its SSTables utilize B-plus trees for key indexing alongside partitioned Bloom filters and metadata footers. Because values stay in an append-only log, background compactions rewrite lightweight keys instead of bulky records.

This structural separation reduces read amplification enough to keep transactional performance stable even as concurrency scales up to one thousand virtual users. It is a compelling demonstration that the classic LSM write-versus-read compromise is an artifact of specific implementation choices rather than an immutable law of database theory.

Key-value separation shifts the operational economics of LSM trees back into contention with traditional B-tree storage engines.
