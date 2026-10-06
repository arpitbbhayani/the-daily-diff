---
title: TidesDB launches as a plugin storage engine for MySQL
source: news
url: https://tidesdb.com/articles/tidesdb-now-available-for-mysql/
date: '2026-10-05'
tags:
- catchup
- database-plugins
- mysql
- news
- storage-engines
- tidesdb
section: databases
is_news: true
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49963568'
comments: https://news.ycombinator.com/item?id=49963568
why_read: Learn how TidesDB integrates as an external write-optimized storage engine
  plugin inside stock MySQL without requiring a fork.
authors:
- Alex Gaetano Padula
---

Running high-throughput write workloads on standard MySQL often means dealing with heavy I/O amplification and storage bloat inside InnoDB. While specialized forks exist, maintaining a completely customized database fork introduces severe operational complexity and upgrade friction.

TidesDB offers a different path: it integrates directly into upstream stock MySQL as a pluggable shared library (ha_tidesdb.so). Instead of altering core server code, individual tables can use the TidesDB engine side-by-side with InnoDB tables in the exact same instance. Table-level parameters pass through the native ENGINE_ATTRIBUTE JSON interface, validating options directly at the engine boundary.

By decoupling the underlying storage engine from MySQL forks, platform teams can optimize write-heavy append tables and event logs without sacrificing access to standard tooling, replication streams, or query parsers.

Pluggable storage engine architectures prove that you do not need a hard fork to completely change your write and storage economics.
