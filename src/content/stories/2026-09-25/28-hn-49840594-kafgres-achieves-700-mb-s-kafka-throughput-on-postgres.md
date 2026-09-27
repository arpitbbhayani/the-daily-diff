---
title: Kafgres achieves 700 MB/s Kafka throughput on Postgres
source: hn
url: https://rynr.dev/blog/700mbskafgres/
date: '2026-09-25'
tags:
- catchup
- database-extension
- hn
- kafgres
- kafka
- postgres
- profiling
- rust
- throughput
section: databases
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 9
hn_id: '49840594'
comments: https://news.ycombinator.com/item?id=49840594
why_read: This article demonstrates how a Postgres extension can achieve 700 MB/s
  Kafka throughput. Readers will learn about Kafgres's architecture and how it leverages
  Postgres while optimizing for performance.
authors:
- theanonymousone
---

Imagine achieving Kafka-level throughput of 700 MB/s and 600k events per second, not with a separate Kafka cluster, but *inside* Postgres itself. This is what Kafgres, a custom Postgres extension, has accomplished.

The trick? While it leverages Postgres's extension APIs, Kafgres largely operates independently. It bypasses much of Postgres's internal overhead for raw data by writing topic bytes directly to disk, using Postgres primarily for metadata and replication. This clever architecture drastically cuts down on redundant work.

This shows that deeply integrating and optimizing components, even in unconventional ways, can yield surprising performance gains. It challenges the assumption that you always need separate, large-scale systems for specialized tasks.
