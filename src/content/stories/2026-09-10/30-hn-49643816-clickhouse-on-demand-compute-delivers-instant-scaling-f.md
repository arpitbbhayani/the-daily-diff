---
title: ClickHouse On-Demand Compute delivers instant scaling for intensive workloads
source: hn
url: https://clickhouse.com/blog/on-demand-compute
date: '2026-09-10'
tags:
- catchup
- clickhouse-cloud
- compute-storage-separation
- cost-based-optimizer
- distributed-query-execution
- hn
- on-demand-compute
section: databases
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49643816'
comments: https://news.ycombinator.com/item?id=49643816
why_read: This announcement introduces ClickHouse On-Demand Compute, a new feature
  for instantly scaling compute resources for intensive workloads in ClickHouse Cloud,
  powered by a new distributed query execution framework and cost-based optimizer.
authors:
- Melvyn Peignon
---

ClickHouse Cloud has unveiled "On-Demand Compute," a major architectural leap allowing instant execution of intensive queries on a shared compute pool, completely separate from your primary cluster. This is not just a feature; it is a fundamental shift in how analytical workloads can be managed. 

At its core, this offering leverages a new distributed query execution framework that supports multi-stage query execution across numerous nodes. Furthermore, it incorporates a brand-new cost-based optimizer, which intelligently evaluates diverse execution plans to identify the most efficient query path. 

For any engineer wrestling with balancing production workloads and ad-hoc analytics, this design for elastic compute and intelligent query optimization offers a powerful blueprint. You will gain insight into how to achieve true compute-storage separation and dynamic scaling in high-performance data systems.
