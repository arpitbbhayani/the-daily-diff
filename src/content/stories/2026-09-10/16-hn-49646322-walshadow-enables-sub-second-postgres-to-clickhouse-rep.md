---
authors:
- Sai Srirampur
comments: https://news.ycombinator.com/item?id=49646322
date: '2026-09-10'
depth_score: 8
hn_id: '49646322'
image: /infographics/16-hn-49646322.jpg
interest_score: 8
novelty_score: 8
section: databases
source: hn
tags:
- catchup
- cdc
- clickhouse
- hn
- low-latency
- open-source
- physical-wal
- postgres-replication
- schema-evolution
- walshadow
title: WalShadow enables sub-second Postgres to ClickHouse replication using physical
  WAL
url: https://clickhouse.com/blog/introducing-walshadow
utility_score: 9
why_read: This introduces WalShadow, an open-source engine for sub-second PostgreSQL
  to ClickHouse replication. Readers will learn how it achieves low latency and high
  throughput by directly consuming physical WAL, bypassing traditional logical replication
  overhead.
---

Achieving sub-second analytical replication from Postgres to ClickHouse is now possible with WalShadow, an open-source engine leveraging Postgres's physical WAL. Unlike traditional CDC that relies on logical replication, WalShadow decodes the WAL stream outside Postgres, directly writing ClickHouse-native blocks.

This approach bypasses the operational overhead of logical replication slots, reducing resource consumption on the source database. Benchmarks show transactions becoming visible in ClickHouse in approximately 200ms, sustaining 289,000 rows per second, effectively keeping pace with a high-load Postgres instance.

WalShadow supports the full replication lifecycle, including initial load, continuous replication, schema evolution, and recovery, making it a robust solution for real-time analytics. This is a game-changer for engineers needing fresh analytical data with minimal impact on their production Postgres instances.

Real-time analytics just got a significant upgrade.