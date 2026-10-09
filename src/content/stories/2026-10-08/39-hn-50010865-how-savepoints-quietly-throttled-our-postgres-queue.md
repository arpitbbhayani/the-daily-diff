---
title: How savepoints quietly throttled our Postgres queue
source: hn
url: https://incident.io/blog/how-savepoints-quietly-throttled-our-postgres-queue
date: '2026-10-08'
tags:
- catchup
- hn
- job-queues
- lwlock
- multixact
- savepoints
section: databases
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '50010865'
comments: https://news.ycombinator.com/item?id=50010865
why_read: Read this to understand how transaction savepoints can silently degrade
  Postgres-backed queues under high concurrency. You will learn how hidden lock contention
  occurs and how to engineer around it.
authors:
- Rory Malcolm
---

Using nested transactions or savepoints inside a high-throughput PostgreSQL queue can silently degrade system performance through lock contention. At fifteen million daily executions, an on-call ticker service running against Postgres hit an unexpected throughput ceiling caused by heavy contention on MultiXact locks.

Every time an application creates a savepoint, Postgres tracks subtransactions. When concurrent workers lock rows for update while subtransactions remain active, the engine upgrades standard tuple locks to MultiXact IDs stored in shared memory. This transition forces workers to acquire the LWLock MultiXact buffer lock, serializing operations across worker threads.

Replacing savepoints with explicit state handling and stripping unnecessary row-level locks eliminated the shared lock bottlenecks completely. Removing subtransactions also reduced write amplification and table bloat on hot queue tables.

Postgres makes an excellent transactional queue, but subtransactions will destroy your concurrency long before your hardware runs out of capacity.
