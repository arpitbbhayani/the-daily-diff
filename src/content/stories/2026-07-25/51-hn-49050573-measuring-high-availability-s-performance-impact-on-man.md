---
authors:
- Lionel Palacin
- Sai Srirampur
- Andrey Chudnovskiy
comments: https://news.ycombinator.com/item?id=49050573
date: '2026-07-25'
depth_score: 8
hn_id: '49050573'
image: /infographics/51-hn-49050573.jpg
interest_score: 8
novelty_score: 7
section: databases
source: hn
tags:
- catchup
- high-availability
- hn
- managed-postgres
- performance-benchmarking
- postgres-replication
title: Measuring High Availability's Performance Impact on Managed Postgres
url: https://clickhouse.com/blog/postgresbench-ha
utility_score: 8
why_read: This article details the performance cost of high availability in managed
  Postgres services, offering insights into how different architectural approaches
  impact performance.
---

Understanding the performance costs of high availability in managed PostgreSQL is crucial for system architects.

This deep dive compares shared-nothing services (like AWS RDS and ClickHouse) against shared-storage options (such as AWS Aurora and Neon), detailing how each impacts performance. It is not just about uptime; it is about throughput under various HA configurations. You will see tangible benchmark results.

This helps you make informed choices about your database infrastructure, ensuring you balance resilience with performance effectively.