---
title: Replicating PostgreSQL physical WAL requires reimplementing internal database
  machinery
source: hn
url: https://thebuild.com/blog/the-shadow-knows/
date: '2026-09-24'
tags:
- catchup
- clickhouse
- historic-snapshots
- hn
- logical-decoding
- postgresql
- walshadow
- write-ahead-logging
section: databases
interest_score: 8
depth_score: 9
utility_score: 8
novelty_score: 8
hn_id: '49830580'
comments: https://news.ycombinator.com/item?id=49830580
why_read: Understand the deep architectural challenges and internal PostgreSQL machinery
  you inherit when bypassing logical decoding for physical replication.
authors:
- nightshade999
---

Replicating data out of PostgreSQL usually relies on logical decoding, but ClickHouse built WalShadow to consume the raw physical WAL stream directly. This bypasses the typical CPU and memory overhead on the primary, but it forces the consumer to reimplement complex Postgres internals.

Raw physical WAL records only specify a relfilenode, page, and offset. They contain no column names, data types, or transaction commit status. To interpret raw tuples, the consumer must maintain historical schema snapshots, effectively rebuilding Postgres snapshot management (snapbuild.c) and transaction reordering (reorderbuffer.c) from scratch.

This approach works for ClickHouse because analytical ingestion can tolerate batching and schema inference constraints, but it requires handling edge cases like in-flight catalog changes during multi-statement transactions.

Bypassing database abstraction layers yields raw throughput, but you inherit every single internal problem that the native engine originally solved for you.
