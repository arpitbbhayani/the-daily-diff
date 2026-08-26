---
title: S3 Compatibility Is Not Performance for Write-Ahead Logs
source: hn
url: https://blog.trylle.com/wal-s3
date: '2026-08-24'
tags:
- benchmarking
- catchup
- hn
- latency
- object-storage
- performance
- s3
- write-ahead-logs
section: databases
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49416287'
comments: https://news.ycombinator.com/item?id=49416287
why_read: This article benchmarks various S3-compatible object storage providers,
  revealing that API compatibility does not equate to performance for Write-Ahead
  Log workloads. Readers will gain insight into the actual latency and cost differences
  across providers for such demanding use cases.
authors:
- Xlab
---

Running write-ahead logs (WALs) directly on object storage using S3's conditional writes sounds like a dream for durable, leaderless systems. However, a deep benchmark reveals a critical nuance: S3 compatibility does not equate to performance.

The study tested AWS S3, S3 Express One Zone, Tigris, and Cloudflare R2 with a pathological WAL workload of small, latency-bound, serialized conditional writes. While all passed correctness, the performance differences were significant.

This is a vital lesson for anyone designing distributed databases or scalable storage systems. The underlying performance characteristics for such specific, high-contention workloads are where "S3-compatible" providers truly diverge, and it is a factor that often gets overlooked until systems hit production bottlenecks.
