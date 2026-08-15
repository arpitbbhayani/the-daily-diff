---
title: PgBouncer is widely used with Postgres by managed providers
source: hn
url: https://brandur.org/fragments/postgres-without-pgbouncer
date: '2026-08-13'
tags:
- catchup
- connection-pooling
- hn
- managed-databases
- pgbouncer
- postgres
section: databases
interest_score: 8
depth_score: 7
utility_score: 9
novelty_score: 6
hn_id: '49292909'
comments: https://news.ycombinator.com/item?id=49292909
why_read: This article confirms the widespread and standard use of connection poolers
  like PgBouncer with Postgres. Readers will learn that almost all managed Postgres
  providers integrate a connection pooler, highlighting its importance for database
  management.
authors:
- Brandur
---

Do you run Postgres without PgBouncer? If so, you might be overlooking a critical piece of infrastructure for scalable database operations. PostgreSQL, by design, is not optimized for a large number of direct connections, leading to significant overhead.

A connection pooler like PgBouncer mitigates this by maintaining a set of persistent connections to the database, allowing client applications to share them. This dramatically reduces resource consumption on the database server, improving performance and stability under heavy load.

The article details how essential PgBouncer remains today, even a decade after the initial observations, surveying that almost all major managed Postgres providers now offer integrated or separate PgBouncer support. It highlights the continued relevance of this architectural decision.

This is a must-know for anyone designing or scaling systems with PostgreSQL.
