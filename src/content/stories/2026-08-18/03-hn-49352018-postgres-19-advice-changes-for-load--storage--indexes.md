---
title: Postgres 19 Advice Changes for Load, Storage, Indexes
source: hn
url: https://www.crunchydata.com/blog/postgres-19-how-our-advice-has-changed-since-we-wrote-it
date: '2026-08-18'
tags:
- async-io
- brin-index
- catchup
- hn
- lz4-compression
- partitioning
- postgres-19
- sequential-scan
- skip-scan
- vacuum
section: databases
interest_score: 9
depth_score: 9
utility_score: 9
novelty_score: 7
hn_id: '49352018'
comments: https://news.ycombinator.com/item?id=49352018
why_read: This article revisits and updates past advice on Postgres data management,
  explaining how new features in Postgres 19 like async I/O and LZ4 compression change
  best practices for loading, storage, and indexing.
authors:
- Christopher Winslett
---

Postgres 19 brings significant under-the-hood changes that necessitate a re-evaluation of long-held best practices for data loading, storage, and indexing. This Crunchy Data post meticulously walks you through how features like async I/O and LZ4 compression fundamentally alter performance landscapes.

The introduction of async I/O in Postgres 18, for instance, dramatically speeds up sequential scans, bitmap heap scans, and vacuum operations. This can lead to nearly a 3x performance boost on latency-bound storage, profoundly impacting how you design and tune your database.

Furthermore, the default shift to LZ4 compression and improvements to BRIN indexes mean that old comparisons between index types and scan methods need revisiting. You will gain actionable insights on how to leverage these advancements for more efficient storage, faster queries, and smoother partitioning.

This is a must-read for any senior engineer managing Postgres databases in production environments.
