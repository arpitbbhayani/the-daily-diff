---
title: PostgreSQL 19 WAIT FOR enables read-your-writes consistency
source: hn
url: https://clickhouse.com/blog/postgresql-19-wait-for-read-your-writes
date: '2026-08-25'
tags:
- asynchronous-replication
- catchup
- hn
- postgresql-19
- read-your-writes-consistency
- stale-reads
- wait-for
- wal
section: databases
interest_score: 9
depth_score: 9
utility_score: 9
novelty_score: 8
hn_id: '49434364'
comments: https://news.ycombinator.com/item?id=49434364
why_read: This article introduces the new WAIT FOR command in PostgreSQL 19, explaining
  how it solves the stale read problem in asynchronous replication. Readers will learn
  how to achieve read-your-writes consistency without the performance overhead of
  synchronous replication.
authors:
- "G\xFCl\xE7in Y\u0131ld\u0131r\u0131m Jel\xEDnek"
---

PostgreSQL 19 is introducing a powerful new `WAIT FOR` SQL command that delivers true read-your-writes consistency on asynchronous replicas, a feature long desired by engineers.

Historically, achieving this meant synchronous replication, adding latency, or complex application-level workarounds. The new command allows a session to block until the WAL reaches a specific Log Sequence Number (LSN), guaranteeing that a write is visible before a subsequent read.

This is a significant win for distributed database design. You get the performance benefits of asynchronous replication without sacrificing immediate consistency for critical transactions. It is a smart trade-off built directly into the database engine.
