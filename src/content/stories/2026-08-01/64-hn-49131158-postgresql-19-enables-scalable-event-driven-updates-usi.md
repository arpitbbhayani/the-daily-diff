---
title: PostgreSQL 19 enables scalable event-driven updates using NOTIFY
source: hn
url: https://bytepith.com/article/postgresql-19-fixes-notify-redis-pipelines-scale
date: '2026-08-01'
tags:
- catchup
- data freshness
- event-driven
- hn
- notify
- polling
- postgresql
- real-time updates
- redis
section: databases
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49131158'
comments: https://news.ycombinator.com/item?id=49131158
why_read: This article explains why polling for database changes is inefficient and
  how PostgreSQL 19's improved NOTIFY mechanism, combined with Redis, enables scalable,
  low-latency event-driven index updates. It also covers the honest limits to consider
  when designing such systems.
authors:
- khanhnguyen8386
---

Polling your database for updates is a classic anti-pattern for real-time systems, but what is the right way to build an event-driven indexing pipeline? PostgreSQL 19 offers key improvements to its NOTIFY feature that make this pattern more robust.

This article deep dives into building a system where Postgres announces changes instantly, which are then picked up by Redis Streams. It details how this event-driven approach vastly improves freshness compared to periodic polling, and crucially, explains the 8KB payload ceiling you must design around for NOTIFY messages.

Understanding these internals lets you build highly responsive applications without constantly hitting your database. It is a practical guide to scalable data synchronization.
