---
authors:
- birdculture
comments: https://news.ycombinator.com/item?id=49596756
date: '2026-09-07'
depth_score: 9
hn_id: '49596756'
image: /infographics/06-hn-49596756.jpg
interest_score: 9
novelty_score: 8
section: databases
source: hn
tags:
- b-link-tree
- b-tree
- catchup
- concurrency
- hn
- innodb
- mariadb
- page-splits
- throughput-improvement
title: B-link-style concurrent page splits greatly improve MariaDB insert throughput
url: https://mariadb.org/from-a-chocolate-wrapper-to-concurrent-innodb-page-splits/
utility_score: 9
why_read: This article details how concurrent page splits, inspired by B-link trees,
  were implemented in MariaDB to overcome a fundamental limitation in InnoDB's insert
  path, leading to a significant 5.23x throughput improvement. It demonstrates a practical
  approach to scaling database B+Tree performance.
---

Scaling database writes in InnoDB can feel like an uphill battle, especially with B+Tree page splits causing synchronization bottlenecks. However, a recent experiment in MariaDB showcases a game-changing approach to concurrent page splits.

By adopting B-link-style concurrent page splits, engineers managed to move structural work outside the globally serialized path, allowing independent parts of the tree to progress concurrently. This is a sophisticated solution to a fundamental scaling challenge in storage engines.

The results are impressive: a prototype achieved a 5.23x throughput improvement for insert-heavy workloads compared to vanilla MariaDB. This deep dive into storage engine internals provides concrete architectural insights for anyone grappling with high-concurrency database systems.