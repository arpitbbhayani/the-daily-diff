---
title: EterDB brings transaction-level undo to Postgres
source: hn
url: https://eterdb.com/
date: '2026-09-10'
tags:
- catchup
- database-recovery
- dependency-tracking
- hn
- postgres
- schema-recovery
- time-travel
- transactional-undo
section: databases
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49645654'
comments: https://news.ycombinator.com/item?id=49645654
why_read: This text introduces EterDB, a Postgres extension that offers transaction-level
  undo for database operations. It explains how to surgically reverse bad transactions,
  schema changes, and their dependencies, avoiding full database restores and downtime.
authors:
- fdeth
---

Is your team tired of full database restores to fix a single bad transaction? EterDB, a new PostgreSQL fork, introduces a groundbreaking transaction-level undo feature that fundamentally changes incident recovery.

This is not merely point-in-time recovery; EterDB allows you to surgically reverse specific UPDATEs, DELETEs, or even schema migrations. It tracks dependencies and identifies subsequent writes that relied on the problematic data, giving you the option to revert them too. Imagine recovering a dropped column with its values, without taking your entire database offline.

The ability to undo with such precision is a massive leap forward for data integrity and operational resilience. It is especially compelling for automated systems, including AI agents, which can now interact with databases with a higher degree of safety. You will drastically reduce recovery times and operational overhead for critical production systems.
