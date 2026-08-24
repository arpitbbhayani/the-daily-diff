---
title: Safeguarding Postgres from its supporting processes resource contention
source: hn
url: https://clickhouse.com/blog/protect-postgres-from-supporting-processes
date: '2026-08-22'
tags:
- catchup
- cgroups
- database-reliability
- hn
- postgres
- resource-management
- systemd-memory-limits
section: databases
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49402916'
comments: https://news.ycombinator.com/item?id=49402916
why_read: This article explains how supporting processes can destabilize a Postgres
  database and details the methods ClickHouse uses to prevent these resource contention
  failures through explicit resource limits.
authors:
- Kaushik Iska
---

Ensuring database stability in a managed service often means more than just tuning Postgres itself; it involves carefully managing all supporting processes on the same machine. This article shows how crucial resource isolation is. 

ClickHouse reveals how they use cgroup v2 with systemd's MemoryHigh and MemoryMax properties to budget CPU and memory for services like PgBouncer, WAL-G, Prometheus, and exporters. This prevents a memory leak in a monitoring agent, for example, from starving Postgres. 

This level of fine-grained control over resource allocation is essential for robust, scalable database systems. It is a critical lesson in system design for maintaining high availability even under unexpected load or process misbehavior.
