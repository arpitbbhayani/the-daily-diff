---
title: Accelerating object storage reads with resilient NVMe caching
source: github
url: https://github.com/danthegoodman1/s3-accelerator
date: '2026-10-02'
tags:
- cache-admission-policy
- catchup
- consistent-hashing
- github
- hot-key-replication
- nvme-cache
- s3-compatible-storage
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49939980'
comments: https://news.ycombinator.com/item?id=49939980
why_read: Read this to understand how to design an ultra-low-latency NVMe cache for
  S3 that resists scan pollution and replicates hot keys dynamically. It provides
  practical architectural patterns for maintaining cache warmth during cluster resizing.
authors:
- danthegoodman1
---

Scaling S3 read throughput often hits a wall on both latency and API cost when large analytics or inference workloads repeatedly scan the same buckets. Pointing standard S3 SDKs at a dedicated caching layer can bypass these bottlenecks without modifying application code.

s3-accelerator implements a per-zone distributed NVMe cache in Rust that delivers sub-millisecond responses while keeping S3 as the ultimate source of truth. It tackles cache churn through two deliberate design choices: second-read admission and dynamic ring rebalancing. Large sequential scans do not evict the hot working set because a block is only admitted to NVMe storage on its second hit.

When nodes join or leave the cluster, consistent hashing reassigns keys, but the new owners stream partitions directly from the old owners before hitting S3. For sudden spikes on specific objects, gateways automatically spin up ephemeral read replicas across the cluster to eliminate single-node hotspots.

Smart admission policies and peer-to-peer warm rebalancing solve the classic thundering herd problem in distributed object caches.
