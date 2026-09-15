---
title: One Lock to Rule All Prolonged Database Operations
source: hn
url: https://flakm.com/posts/sqlx_migration_wrapper_til/
date: '2026-09-13'
tags:
- advisory-locks
- catchup
- database-migration
- hn
- postgresql
- session-locks
- single-instance
section: databases
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49682339'
comments: https://news.ycombinator.com/item?id=49682339
why_read: This article explains how to leverage PostgreSQL advisory locks to ensure
  safe, single-instance execution of prolonged database operations like migrations.
  Readers will learn how to implement a robust solution for one-time, long-running
  tasks, avoiding common pitfalls of alternative approaches.
authors:
- flakm
---

Ever struggled with ensuring a critical database migration runs only once, even if it is long-running or prone to retries? PostgreSQL advisory locks offer a robust solution often overlooked.

This piece dives into using session-level exclusive advisory locks to guarantee single-instance execution for such tasks. It details how these differ from transaction-level locks and why they are ideal for operations that open and close many transactions over their lifetime.

You will also learn how client inactivity timeouts can affect these locks and how to observe their state using the `pg_locks` view and `bpftrace`. This is a powerful pattern for any senior engineer tasked with building resilient database operations.
