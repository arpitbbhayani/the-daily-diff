---
title: pgmigrate copies live PostgreSQL databases with logical changes
source: github
url: https://github.com/GetStream/pgmigrate
date: '2026-09-03'
tags:
- catchup
- data-replication
- database-migration
- github
- go-lang
- pgmigrate
- postgresql
section: databases
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49549603'
comments: https://news.ycombinator.com/item?id=49549603
why_read: This introduces pgmigrate, a tool for robust, restartable, and auditable
  live PostgreSQL database migrations. It explains how pgmigrate handles logical changes
  and continuous writes more effectively than traditional pg_dump and pg_restore.
authors:
- tbarbugli
---

Migrating a live PostgreSQL database without downtime is notoriously complex, often involving fragile `pg_dump | pg_restore` sequences and manual replication setup. Pgmigrate, a rewrite of pgcopydb in Go, offers a robust solution.

It handles the entire process: creating a replication slot, exporting a consistent snapshot, restoring the schema, and streaming data directly between source and target, all while applying logical changes in real time. Crucially, it is restartable and auditable, meaning a crash halfway through does not force a restart from scratch.

This tool is a game-changer for database engineers and SREs seeking to perform reliable, online PostgreSQL migrations with high confidence and minimal operational overhead.
