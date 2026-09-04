---
title: PostgreSQL 19's WAIT FOR LSN ensures read-your-own-writes consistency
source: hn
url: https://boringsql.com/posts/read-your-own-writes/
date: '2026-09-02'
tags:
- catchup
- data-consistency
- hn
- postgresql-19
- read-your-own-writes
- replica-lag
- stale-reads
section: databases
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49535478'
comments: https://news.ycombinator.com/item?id=49535478
why_read: This text explains the common problem of stale reads from database replica
  lag in modern, fast front-end applications. It introduces PostgreSQL 19's WAIT FOR
  LSN feature as a direct and efficient solution to ensure read-your-own-writes consistency.
authors:
- metrofun
---

Tired of users seeing stale data immediately after their own writes in your replica-heavy setup? The "read-your-own-writes" problem is a classic distributed systems challenge, often met with messy workarounds like Redis flags or forcing reads to the primary.

The good news is PostgreSQL 19 offers a game-changer: WAIT FOR LSN. This feature allows a replica to block until it has replayed a specific Log Sequence Number from the primary, ensuring data consistency for that session.

This means you can drop hacky timeouts and flags. Instead, after a write, your application can simply record the LSN and then direct subsequent reads to a replica, instructing it to WAIT FOR that LSN. It simplifies client-side routing logic and provides strong consistency guarantees without sacrificing read scalability.

Stop guessing about replication lag and start implementing real consistency.
