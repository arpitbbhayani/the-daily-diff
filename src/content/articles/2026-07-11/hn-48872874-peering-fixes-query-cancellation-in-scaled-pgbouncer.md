---
title: Peering fixes query cancellation in scaled PgBouncer
source: hn
url: https://clickhouse.com/blog/pgbouncer-clickhouse-managed-postgres
date: '2026-07-11'
tags:
- catchup
- connection-pooling
- distributed-systems
- hn
- peering
- pgbouncer
- postgres
- query-cancellation
- so-reuseport
score: 234
hn_id: '48872874'
comments: https://news.ycombinator.com/item?id=48872874
why_read: Learn how to scale single-threaded PgBouncer instances across multiple CPU
  cores using `so_reuseport`. Discover the 'peering' mechanism that correctly handles
  query cancellations in such a distributed setup.
authors:
- Kaushik Iska
author: Kaushik Iska
---

PgBouncer, while excellent, is inherently single-threaded, leaving many CPU cores idle on modern machines. ClickHouse Managed Postgres cracked this limitation, achieving a 4x throughput increase. Their solution involves running a fleet of PgBouncer processes, all binding the same port using `so_reuseport`. This allows the kernel to load-balance incoming connections across multiple processes. A critical challenge with this approach is handling query cancellations, which normally arrive on a new connection. ClickHouse addressed this by implementing inter-process peering, enabling cancel requests to be forwarded to the correct PgBouncer process. This smart architectural decision transforms a single-threaded bottleneck into a scalable, multi-core powerhouse. It is a fantastic lesson in optimizing core database infrastructure.
