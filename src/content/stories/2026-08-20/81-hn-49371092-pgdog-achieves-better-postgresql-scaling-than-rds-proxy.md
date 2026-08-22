---
title: PgDog achieves better PostgreSQL scaling than RDS Proxy
source: hn
url: https://pgdog.dev/blog/pgdog-vs-rds-proxy
date: '2026-08-20'
tags:
- catchup
- connection-pinning
- connection-pooling
- database-scaling
- hn
- pgdog
- postgresql
- rds-proxy
- transaction-mode
section: databases
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49371092'
comments: https://news.ycombinator.com/item?id=49371092
why_read: This text explains how PgDog addresses the limitations of RDS Proxy's connection
  pinning, providing a more effective and predictable solution for scaling PostgreSQL
  databases.
authors:
- levkk
---

Scaling PostgreSQL effectively often means navigating tricky connection management. Many engineers turn to proxies like RDS Proxy, but there is a hidden performance trap: connection pinning.

Connection pinning disables transaction pooling whenever your application uses session-level Postgres primitives, such as SET statements or temporary tables. This forces the proxy to open more backend connections, making pooling ineffective and potentially exhausting database resources. You lose the very benefit of the proxy.

PgDog, an open-source alternative, solves this by transplanting session state, eliminating pinning. This allows true transaction pooling, resulting in predictable autoscaling behavior and, according to recent benchmarks, performance twice as fast as RDS Proxy.

This is a significant win for high-traffic PostgreSQL applications.
