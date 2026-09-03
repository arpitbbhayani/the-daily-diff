---
title: PostgreSQL replication slot and Debezium offset form one distributed checkpoint
source: hn
url: https://shiftmag.dev/how-to-survive-database-failover-debezium-and-postgresql-in-production-11676/
date: '2026-09-01'
tags:
- catchup
- database-failover
- debezium
- distributed-checkpoint
- hn
- kafka
- postgresql
- replication-slot
- transactional-outbox
- write-ahead-log
section: databases
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49520764'
comments: https://news.ycombinator.com/item?id=49520764
why_read: This post explains how to prevent event gaps when using Debezium with PostgreSQL
  during database failover. Readers will learn the importance of treating PostgreSQL
  replication slots and Debezium Kafka Connect offsets as a single distributed checkpoint
  for robust data streaming.
authors:
- Frane Jelavic
---

Operating Debezium with PostgreSQL in production reveals a subtle but critical failure mode: losing the Log Sequence Number (LSN) position during a Patroni-managed failover. This can lead to data gaps in your change data capture (CDC) pipeline.

The core issue is that Debezium's Kafka Connect offset and PostgreSQL's replication slot must be treated as parts of one distributed checkpoint. Simply creating a new slot post-failover might bypass events Debezium has not yet processed, breaking your at-least-once delivery guarantees.

This article dives into the WAL mechanics and specific Patroni behaviors that cause this, offering concrete strategies to ensure consistent data streaming. You will gain actionable insights for architecting resilient data pipelines.
