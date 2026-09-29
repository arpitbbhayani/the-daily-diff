---
title: Why serializable isolation makes exclusive locks best effort
source: hn
url: https://gaultier.github.io/blog/what_good_is_a_best_effort_exclusive_lock_anyway.html
date: '2026-09-28'
tags:
- catchup
- cockroachdb
- concurrency
- exclusive-locks
- hn
- select-for-update
- serializable-isolation
section: databases
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49884306'
comments: https://news.ycombinator.com/item?id=49884306
why_read: Understand why CockroachDB treats exclusive row locks as best-effort under
  serializable isolation and how this affects transactional correctness.
authors:
- Philippe Gaultier
---

In standard relational databases like PostgreSQL, running SELECT FOR UPDATE acquires a pessimistic lock that blocks concurrent transactions until the lock holder completes. If you migrate that same logic to CockroachDB under serializable isolation, you might be surprised to discover that SELECT FOR UPDATE behaves only as a best-effort hint.

CockroachDB relies on optimistic concurrency control and timestamp ordering rather than conventional lock queues under serializable isolation. When two transactions contend for the same row, the engine does not necessarily force transaction B to wait behind transaction A. Instead, CockroachDB detects serializability conflicts dynamically and aborts or restarts one of the transactions when an ordering violation occurs.

The best-effort lock serves primarily as an optimization to reduce transaction restarts by signaling write intent early, but correctness must come from the serializable conflict detection itself.

Understanding the difference between pessimistic lock blocking and optimistic transaction aborts is essential when designing multi-database transactional workflows.
