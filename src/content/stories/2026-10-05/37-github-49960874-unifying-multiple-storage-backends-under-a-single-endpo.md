---
title: Unifying multiple storage backends under a single endpoint
source: github
url: https://github.com/afreidah/s3-orchestrator
date: '2026-10-05'
tags:
- catchup
- envelope-encryption
- github
- object-storage
- read-failover
- s3
- storage-orchestration
section: systems
is_news: false
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49960874'
comments: https://news.ycombinator.com/item?id=49960874
why_read: Learn how to pool multiple S3-compatible storage providers behind a single
  unified interface with automatic replication and read failover. It helps you design
  resilient, multi-cloud object storage architectures while managing quotas and encryption.
authors:
- afreidah
---

Relying on a single object storage provider introduces cloud lock-in, hard rate limits, and egress cost traps. The s3-orchestrator project solves this by placing a unified S3-compatible gateway in front of heterogeneous backend providers.

The proxy handles multi-backend replication with configurable quorum, transparent read failover, zstd compression, and client-side envelope encryption. It also enforces fine-grained byte, request, and egress limits per backend to maximize free tiers and prevent accidental billing spikes.

For distributed systems engineers, this decouples application storage logic from underlying vendor infrastructure without requiring changes to existing S3 client SDKs.

Smart orchestration proxies make multi-cloud resilience practical without application rewrites.
