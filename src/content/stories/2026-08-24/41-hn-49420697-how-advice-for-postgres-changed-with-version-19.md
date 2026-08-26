---
authors:
- Christopher Winslett
comments: https://news.ycombinator.com/item?id=49420697
date: '2026-08-24'
depth_score: 8
hn_id: '49420697'
image: /infographics/41-hn-49420697.jpg
interest_score: 8
novelty_score: 7
section: databases
source: hn
tags:
- async-io
- catchup
- data-loading
- data-storage
- hn
- indexing
- lz4-compression
- partitioning
- postgres-19
title: How advice for Postgres changed with version 19
url: https://www.crunchydata.com/blog/postgres-19-how-our-advice-has-changed-since-we-wrote-it
utility_score: 9
why_read: Read this to understand how recommended practices for Postgres, particularly
  for data loading, storage, and indexing, have evolved up to version 19. You will
  learn about key improvements like async I/O and LZ4 compression.
---

Postgres 19 introduces significant changes that fundamentally alter best practices for database optimization. Crunchy Data's updated advice covers how features like asynchronous I/O and LZ4 compression impact data loading, storage, and indexing.

Specifically, async I/O can provide up to 3x performance gains on latency-bound storage for sequential scans and vacuum operations, which means you need to re-evaluate your indexing strategies. BRIN indexes are becoming more powerful, and `COPY` operations are more resilient than ever before.

This detailed breakdown provides direct, actionable insights for senior engineers running production Postgres. You will find that some advice from earlier versions is now obsolete, and new approaches can yield substantial performance benefits.