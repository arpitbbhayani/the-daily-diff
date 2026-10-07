---
title: Why exclusive locks are only best-effort in CockroachDB
source: hn
url: https://gaultier.github.io/blog/what_good_is_a_best_effort_exclusive_lock_anyway.html
date: '2026-10-06'
tags:
- catchup
- cockroachdb
- concurrency
- hn
- select-for-update
- serializable-isolation
- sql
section: databases
is_news: false
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49976575'
comments: https://news.ycombinator.com/item?id=49976575
why_read: Learn why CockroachDB treats SELECT FOR UPDATE as best-effort under serializable
  isolation and how concurrency semantics diverge from PostgreSQL.
authors:
- Philippe Gaultier
---

In PostgreSQL and MySQL, running SELECT FOR UPDATE provides an immediate exclusive lock that blocks concurrent transactions. But if you port that exact query to CockroachDB under its default SERIALIZABLE isolation, the engine treats row locks as purely best-effort.

CockroachDB does not preserve strict ordering of concurrent accesses under SELECT FOR UPDATE in serializable mode. Transaction ordering can shift, meaning transaction B might not wait behind transaction A even if your application explicitly asked for a lock.

Why does a distributed SQL engine do this? CockroachDB relies on optimistic concurrency control mechanisms and write intents rather than pessimistic distributed locks to maintain serializable transaction ordering. The best-effort lock is primarily an optimization hint to minimize transaction restarts, not an absolute correctness primitive.

Engineers migrating from Postgres to CockroachDB must design for transaction retries rather than relying on exclusive read locks for mutual exclusion.
