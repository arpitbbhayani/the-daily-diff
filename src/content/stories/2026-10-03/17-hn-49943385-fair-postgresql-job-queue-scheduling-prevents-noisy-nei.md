---
title: Fair PostgreSQL job queue scheduling prevents noisy neighbour delays
source: hn
url: https://now-next.nl/en/insights/postgresql-job-queue-per-tenant-noisy-neighbour/
date: '2026-10-03'
tags:
- catchup
- hn
- job-queues
- multi-tenancy
- noisy-neighbour-problem
- postgresql
- round-robin-scheduling
- skip-locked
section: databases
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49943385'
comments: https://news.ycombinator.com/item?id=49943385
why_read: Learn why standard FIFO queues in PostgreSQL create latency spikes for multi-tenant
  workloads and how to implement fair round-robin job scheduling.
authors:
- hnd9q09qk4
---

Building a Postgres job queue with FOR UPDATE SKIP LOCKED is standard practice, but it breaks under multi-tenant workloads. When a single large tenant enqueues thousands of background tasks, every other tenant gets starved behind them in a global FIFO ordering.

In realistic benchmarks with four workers, a tenant pushing one thousand twenty-millisecond jobs caused smaller tenants with five jobs to experience median wait times of 4.5 seconds. Shifting to a round-robin query per tenant collapsed those delays down to 0.10 to 0.15 seconds.

However, naive round-robin implementations introduce severe performance traps. When a database contains a heavily skewed backlog alongside idle tenants, scanning across tenants without proper indexing or query structuring can spike execution latency to ten seconds per job.

Achieving true fairness in PostgreSQL requires combining partial indexes on queued status with disciplined tenant partitioning in the claim query.

Simple FIFO queues will silently betray your latency guarantees the moment one tenant spikes.
