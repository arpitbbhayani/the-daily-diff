---
title: Postgres 19 advice on data storage and indexing has changed
source: hn
url: https://www.crunchydata.com/blog/postgres-19-how-our-advice-has-changed-since-we-wrote-it
date: '2026-08-31'
tags:
- async-io
- brin-index
- catchup
- hn
- lz4-compression
- partitioning
- postgres-19
section: databases
interest_score: 9
depth_score: 9
utility_score: 9
novelty_score: 8
hn_id: '49511414'
comments: https://news.ycombinator.com/item?id=49511414
why_read: This post explains how advice for loading, storing, indexing, and partitioning
  data in Postgres has evolved up to version 19. Readers will learn about updated
  best practices and new features like async I/O and LZ4 compression.
authors:
- Christopher Winslett
---

Postgres 19 brings some impactful changes, and Crunchy Data has updated its long-standing advice to reflect them. You need to know how these changes affect your database architecture.

One significant improvement is async I/O, which substantially speeds up sequential scans, bitmap heap scans, and vacuum operations. On cold, latency-bound storage, some community benchmarks show up to 3x performance gains. This fundamentally shifts how you should think about I/O-bound workloads.

Also look out for LZ4 compression by default, richer BRIN index shapes, and the introduction of skip scan. These features can dramatically alter your storage footprint and query performance. Understanding these updates is crucial for optimizing your Postgres 19 deployments.
