---
authors:
- levkk
comments: https://news.ycombinator.com/item?id=49346449
date: '2026-08-18'
depth_score: 8
hn_id: '49346449'
image: /infographics/50-hn-49346449.jpg
interest_score: 8
novelty_score: 7
section: databases
source: hn
tags:
- catchup
- connection-pinning
- connection-pooling
- hn
- pgdog
- postgresql-scaling
- rds-proxy
- transaction-mode
title: PgDog avoids connection pinning for better PostgreSQL scaling
url: https://pgdog.dev/blog/pgdog-vs-rds-proxy
utility_score: 8
why_read: This comparison details how PgDog provides superior PostgreSQL scaling by
  avoiding connection pinning, a critical issue with RDS Proxy that impairs transaction
  pooling and performance at scale. Readers will understand the technical limitations
  of RDS Proxy and PgDog's advantages in connection management.
---

Building scalable PostgreSQL applications often hits a bottleneck at connection management. This comparison between the open-source PgDog proxy and AWS RDS Proxy reveals critical differences in behavior and performance.

PgDog stands out by not pinning connections, offering predictable autoscaling, and boasting twice the speed of RDS Proxy. Connection pinning, where a proxy locks an application connection to a specific Postgres connection due to session-level statements like SET, can severely degrade pooling effectiveness and lead to database connection exhaustion.

You will learn how PgDog avoids this by transplanting session state, enabling true transaction pooling at scale. This deep dive is essential for any senior engineer designing robust, high-performance database architectures.

Choose your proxy wisely to prevent unforeseen scaling issues.