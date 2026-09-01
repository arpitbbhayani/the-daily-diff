---
authors:
- Sai Srirampur
comments: https://news.ycombinator.com/item?id=49494944
date: '2026-08-30'
depth_score: 8
hn_id: '49494944'
image: /infographics/20-hn-49494944.jpg
interest_score: 8
novelty_score: 7
section: databases
source: hn
tags:
- benchmarking
- catchup
- ebs
- hn
- nvme
- postgresql
- scaling-issues
- storage-performance
title: Postgres isn't slow, storage performance is the bottleneck
url: https://clickhouse.com/blog/posette-talk-recap-postgres-isnt-slow-your-storage-is
utility_score: 9
why_read: This recap explains how storage performance, not Postgres itself, often
  causes scaling issues. Readers will learn from a benchmark comparing gp3 EBS and
  local NVMe, and discover proposed architectures for running PostgreSQL on local
  NVMe in production.
---

PostgreSQL often gets blamed for slow performance, but the real bottleneck is frequently the underlying storage, especially at scale. A recent POSETTE talk highlighted how crucial storage choice is, presenting benchmarks comparing standard gp3 EBS to local NVMe.

The findings showed dramatic improvements in ingestion speed, consistent P95 read latency, and efficient autovacuum operations when Postgres runs on local NVMe. This shift moves past common scaling symptoms like checkpoints competing with workloads and logical replication lag.

The talk then outlined specific production architectures for deploying Postgres effectively on NVMe. This offers highly actionable patterns for any engineer tackling PostgreSQL performance issues in high-throughput environments.