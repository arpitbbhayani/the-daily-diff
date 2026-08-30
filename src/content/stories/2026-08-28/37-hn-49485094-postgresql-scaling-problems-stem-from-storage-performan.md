---
title: PostgreSQL scaling problems stem from storage performance not the database
source: hn
url: https://clickhouse.com/blog/posette-talk-recap-postgres-isnt-slow-your-storage-is
date: '2026-08-28'
tags:
- benchmarking
- catchup
- database-scaling
- hn
- nvme
- postgresql
- read-latency
- storage-performance
section: databases
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49485094'
comments: https://news.ycombinator.com/item?id=49485094
why_read: Understand how storage performance, not Postgres itself, often causes scaling
  issues like slow ingestion and unpredictable latency. The article details benchmark
  results comparing EBS and NVMe, offering insights into optimizing PostgreSQL production
  environments.
authors:
- Sai Srirampur
---

Postgres is not slow, your storage is. This statement might sound provocative, but a recent POSETTE talk recap offers compelling evidence.

Running a 3.3-billion-row PostgreSQL workload, researchers compared baseline gp3 EBS with local NVMe and found stark differences that explain common scaling symptoms. The article details how issues like slow ingestion, unpredictable P95 read latency, and autovacuum falling behind often stem from inadequate storage performance.

Moving to local NVMe, even with its operational complexities, unlocks significant gains, especially for write-heavy or highly concurrent workloads. It is a critical reminder for senior engineers designing scalable systems: blindly trusting managed database offerings to handle storage I/O often leads to hidden performance cliffs. Understanding the underlying storage characteristics and designing around them is paramount for high-performance PostgreSQL.
