---
title: Achieving zero downtime Postgres upgrades with Blue/Green deployment and automation
source: hn
url: https://www.moderntreasury.com/journal/upgrading-postgres-clusters-with-minimal-downtime
date: '2026-08-17'
tags:
- aurora-postgresql
- automated-cutover
- blue-green-deployment
- catchup
- hn
- logical-replication
- postgres-clusters
- zero-downtime
section: databases
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49332842'
comments: https://news.ycombinator.com/item?id=49332842
why_read: This article details a successful strategy for upgrading Amazon Aurora PostgreSQL
  clusters from version 14 to 17 with zero downtime. Readers will learn about using
  a custom Blue/Green deployment, logical replication, and full automation to achieve
  seamless database upgrades in production environments.
authors:
- Tony Li
---

Upgrading a production database, especially a major version, with zero downtime is one of the most challenging feats in distributed systems. Modern Treasury just shared their blueprint for taking Amazon Aurora PostgreSQL from 14 to 17 without users noticing a flicker.

They achieved this through a custom Blue/Green deployment, meticulously orchestrated with logical replication. The automation included handling critical constraints like existing PgBouncer connections and external replication to systems like ParadeDB, ensuring data consistency and continuous availability.

This is not a theoretical exercise; it is a battle-tested approach for critical infrastructure. You will learn the intricate dance between replication slots, automated cutovers, and managing application-level changes to ensure a seamless transition. A must-read for anyone dealing with production database operations.
