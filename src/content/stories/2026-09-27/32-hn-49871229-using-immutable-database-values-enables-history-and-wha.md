---
title: Using immutable database values enables history and what-if state
source: hn
url: https://vevdb.com/
date: '2026-09-27'
tags:
- audit-history
- catchup
- datalog
- embedded-database
- hn
- hypothetical-transactions
- immutable-database
section: databases
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49871229'
comments: https://news.ycombinator.com/item?id=49871229
why_read: Read this to understand how modeling a database as an immutable value simplifies
  speculative queries, temporal auditing, and graph traversals. You will learn how
  to design clean functional architectures where decision logic operates on pure snapshot
  data.
authors:
- DASD
---

Most application architectures struggle with audit logs and hypothetical planning because relational databases treat data as a mutable singleton. You either create custom history tables or duplicate records to run what-if simulations.

VevDB takes a different architectural approach by implementing an embedded database where the entire state is treated as an immutable value. When you propose changes, you obtain a new database snapshot without performing disk writes or mutating the original connection state. This lets your business logic run exploratory Datalog queries across hypothetical branches before committing any updates.

This pattern cleanly enables functional core and imperative shell architectures. Pure functions receive a lightweight, stable database value and emit deterministic decisions without performing ad-hoc I/O.
