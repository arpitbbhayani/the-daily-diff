---
title: PgDog outperforms RDS Proxy with better connection management and speed
source: hn
url: https://pgdog.dev/blog/pgdog-vs-rds-proxy
date: '2026-09-02'
tags:
- autoscaling
- catchup
- connection-pinning
- connection-pooling
- hn
- performance
- pgdog
- postgresql-proxy
- rds-proxy
- transaction-mode
section: databases
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49536397'
comments: https://news.ycombinator.com/item?id=49536397
why_read: Read this to understand the critical limitations of RDS Proxy's connection
  pinning and how PgDog provides a more efficient and predictable solution for PostgreSQL
  scaling.
authors:
- levkk
---

Do you manage PostgreSQL at scale? The choice of a connection pooler can make or break your application's performance and stability.

Many engineers default to cloud-managed services like AWS RDS Proxy, but a deeper dive reveals significant trade-offs. The issue of 'connection pinning' can severely limit the effectiveness of a proxy, forcing more database connections than intended and leading to resource exhaustion.

PgDog, an open-source alternative, directly addresses this by 'transplanting' session state, preventing pinning and allowing true transaction pooling. This enables predictable autoscaling behavior and can be twice as fast as RDS Proxy in some scenarios. Understanding these internal mechanics is crucial for building robust, scalable database systems.
