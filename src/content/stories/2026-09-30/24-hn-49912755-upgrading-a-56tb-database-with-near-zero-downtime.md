---
title: Upgrading a 56TB database with near zero downtime
source: hn
url: https://trigger.dev/blog/upgrading-a-56tb-database
date: '2026-09-30'
tags:
- aurora-postgres
- catchup
- database-scaling
- durable-execution
- hn
- planetscale
- zero-downtime-migration
section: databases
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49912755'
comments: https://news.ycombinator.com/item?id=49912755
why_read: Learn how Trigger.dev migrated active control plane data to avoid extensive
  downtime during a 56TB database upgrade. It offers practical architectural insights
  for maintaining uptime across high-throughput production systems.
authors:
- handfuloflight
---

Rebooting a 56TB production database to apply major version upgrades usually forces hours of customer downtime. When Trigger.dev faced a mandatory Aurora Postgres upgrade on an active database ingesting 250GB per day, full application downtime was completely unacceptable.

Instead of migrating 56TB in bulk, the engineering team separated cold historical runs from hot control plane state. They migrated the 1.23TB of active metadata and incoming execution runs over to PlanetScale, leaving the massive cold run history behind on the existing Aurora cluster.

When Aurora finally rebooted, the application only experienced a 90-second disruption on queries fetching legacy runs. Active jobs and new runs continued to execute without interruption. Executing this transition required writing a custom C patch and resolving cutover failures, but it successfully decoupled storage size from upgrade downtime.

Architectural partitioning between hot state and immutable historical records remains one of the best defenses against operational maintenance bottlenecks at scale.
