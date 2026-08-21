---
title: PgDog avoids connection pinning for superior PostgreSQL scaling
source: hn
url: https://pgdog.dev/blog/pgdog-vs-rds-proxy
date: '2026-08-19'
tags:
- catchup
- connection-pinning
- connection-pooling
- hn
- pgdog
- postgresql-proxy
- rds-proxy
- transaction-pooling
section: databases
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49361598'
comments: https://news.ycombinator.com/item?id=49361598
why_read: This article compares PgDog and RDS Proxy, explaining how PgDog's approach
  to connection management offers better scalability for PostgreSQL applications by
  avoiding the pitfalls of connection pinning.
authors:
- levkk
---

Are you really getting the most out of your PostgreSQL connection pooler? Many engineers assume all proxies behave similarly, but the devil is in the details, especially when it comes to "connection pinning."

RDS Proxy, for instance, pins connections when session-level PostgreSQL primitives are used (like SET statements or temporary tables). This disables transaction pooling, forcing the proxy to open more backend connections and potentially exhaust your database.

PgDog offers an alternative: it transparently handles these session states, preventing pinning and maintaining efficient transaction pooling. The result? Predictable autoscaling and, as benchmarks suggest, up to 2x faster performance than RDS Proxy. This distinction is critical for maintaining high throughput and stability in production.
