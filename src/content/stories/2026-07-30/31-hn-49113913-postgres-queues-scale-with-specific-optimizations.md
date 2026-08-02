---
authors:
- Qian Li
- Peter Kraft
comments: https://news.ycombinator.com/item?id=49113913
date: '2026-07-30'
depth_score: 8
hn_id: '49113913'
image: /infographics/31-hn-49113913.jpg
interest_score: 8
novelty_score: 7
section: databases
source: hn
tags:
- catchup
- contention
- database-optimization
- database-scaling
- hn
- postgres-queues
- skip-locked
title: Postgres queues scale with specific optimizations
url: https://www.dbos.dev/blog/making-postgres-queues-scale
utility_score: 9
why_read: This article demonstrates how to optimize Postgres-backed queues to achieve
  high throughput, countering the common belief that they do not scale. You will learn
  about specific techniques like using SKIP LOCKED to manage contention and scale
  workflow executions.
---

The conventional wisdom states that Postgres cannot scale for high-throughput queueing systems, often pushing engineers towards dedicated message brokers. This article absolutely debunks that myth, showcasing how to achieve an incredible 30,000 workflow executions per second with Postgres-backed queues.

The key lies in mastering FOR UPDATE SKIP LOCKED, a powerful Postgres primitive often overlooked for this use case. It prevents contention between thousands of concurrent workers, alongside other crucial optimizations for indexes and transaction management.

You will gain highly actionable insights into query optimization and system design patterns that dramatically enhance Postgres's capabilities as a robust and scalable queue. This is a must-read for anyone building high-performance systems and looking to simplify their infrastructure.