---
title: UUID v7 enables 23x faster inserts in PostgreSQL 18
source: hn
url: https://andyatkinson.com/postgresql-18-uuidv7
date: '2026-08-26'
tags:
- b-tree-index
- catchup
- database-locks
- hn
- insert-performance
- page-splits
- postgresql
- primary-keys
- uuid-v7
section: databases
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49452825'
comments: https://news.ycombinator.com/item?id=49452825
why_read: Read this to understand how switching to UUID v7 can dramatically improve
  insert performance in PostgreSQL 18. You will learn about the underlying reasons
  for performance differences between UUID versions and strategies for managing schema
  changes.
authors:
- speckx
---

Migrating to UUID v7 for primary keys in PostgreSQL 18 can unlock serious performance gains, with one real-world example showing inserts becoming 23 times faster. This is not just a minor tweak, but a significant improvement driven by how these UUIDs interact with B-tree indexes. The key insight lies in locality. Unlike highly random UUID v4s or less optimal v1s that cause extensive B-tree page splits and increase I/O, UUID v7 is partially time-based, leading to more sequential insertions. This keeps new index entries clustered on fewer pages, reducing disk writes and CPU cycles. The article details practical migration steps, including managing exclusive locks on large tables with short timeouts and retries, which is a common challenge for senior engineers. Understanding this internal mechanism and its impact on disk I/O and CPU is crucial for any engineer working with high-volume database systems. This is a highly actionable optimization for improving your database's write performance.
