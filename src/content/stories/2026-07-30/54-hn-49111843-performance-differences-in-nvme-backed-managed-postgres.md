---
authors:
- Sai Srirampur
comments: https://news.ycombinator.com/item?id=49111843
date: '2026-07-30'
depth_score: 8
hn_id: '49111843'
image: /infographics/54-hn-49111843.jpg
interest_score: 8
novelty_score: 7
section: databases
source: hn
tags:
- benchmarking
- catchup
- clickhouse
- hn
- managed-services
- nvme
- performance-comparison
- pgbench
- planetscale
- postgresql
title: Performance Differences in NVMe-backed Managed Postgres Benchmarks
url: https://clickhouse.com/blog/benchmarking-nvme-managed-postgres-planetscale-vs-clickhouse
utility_score: 8
why_read: This post details the benchmark results for PlanetScale and ClickHouse NVMe-backed
  managed Postgres services, explaining the performance differences between them using
  the open-source PostgresBench tool.
---

Do you really know how your managed PostgreSQL is performing on NVMe? A new benchmark from ClickHouse reveals surprising performance differences between PlanetScale and ClickHouse Managed Postgres, even on identical NVMe hardware. The detailed analysis covers pgbench setups, quorum replication, and specific AWS instances. 

This is not just another benchmark; it is a reproducible, open-source tool called PostgresBench. It provides a blueprint for how to evaluate database services and understand the hidden architectural trade-offs that impact real-world transactional throughput. 

Dive in to see how database-level optimizations, beyond just fast storage, make a critical difference.