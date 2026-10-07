---
title: Storage performance is the primary cause of PostgreSQL slowdowns
source: hn
url: https://clickhouse.com/blog/posette-talk-recap-postgres-isnt-slow-your-storage-is
date: '2026-10-06'
tags:
- catchup
- database-benchmarks
- ebs-gp3
- hn
- nvme
- postgresql
- storage-performance
section: databases
is_news: false
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49984087'
comments: https://news.ycombinator.com/item?id=49984087
why_read: Read this to understand how disk storage bottlenecks degrade PostgreSQL
  performance at scale and how local NVMe architecture resolves common latency issues.
authors:
- Sai Srirampur
---

Most scaling bottlenecks in large PostgreSQL deployments are not caused by the query planner or missing indexes. When workloads grow to billions of rows, storage throughput and latency variability become the primary bottleneck.

In a benchmark running a 3.3-billion-row workload, common symptoms like ingestion lag, slow autovacuum runs, checkpoint spikes, and P95 latency degradation mapped directly to underlying cloud volume limits. Baseline EBS gp3 volumes quickly hit IOPS and throughput caps, causing checkpoint syncs and replication streams to starve active read and write queries.

Moving workloads to local NVMe storage removes this friction by providing orders of magnitude lower latency and higher sequential throughput. The critical architectural challenge shifts to operational resilience: managing instance lifecycles, streaming WAL replication, and fast failovers across nodes.

Before spending weeks rewriting complex SQL queries or partitioning schemas, check the storage metrics. Your database engine might not be slow, but your disk subsystem is.
