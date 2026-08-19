---
authors:
- Alexander Gololobov
comments: https://news.ycombinator.com/item?id=49338478
date: '2026-08-17'
depth_score: 9
hn_id: '49338478'
image: /infographics/03-hn-49338478.jpg
interest_score: 9
novelty_score: 8
section: databases
source: hn
tags:
- aggregations
- catchup
- clickhouse-cloud
- data-repartitioning
- distributed-systems
- hn
- joins
- multi-stage-query-execution
- query-scaling
title: Multi-stage distributed execution scales ClickHouse queries by repartitioning
  data
url: https://clickhouse.com/blog/multi-stage-distributed-query-execution-clickhouse-cloud
utility_score: 9
why_read: Readers will learn how ClickHouse Cloud's new multi-stage distributed execution
  model scales complex queries by repartitioning intermediate data. This mechanism
  significantly improves performance for large joins and high-cardinality aggregations.
---

ClickHouse just unveiled its multi-stage distributed query execution in the cloud, a significant leap for handling massive analytical workloads. This new model moves beyond traditional sharding and parallel replicas by enabling dynamic repartitioning of intermediate data between execution stages.

The key innovation is breaking down complex queries, especially large joins and high-cardinality aggregations, into stages where data can be intelligently reshuffled. This approach directly addresses bottlenecks that previously limited scalability, leading to substantial performance gains.

Early TPC-H results are impressive, showing up to 3.4x speedups for join-heavy queries. Moreover, it maintains near-linear aggregation scaling, achieving 7.4x faster performance on 8 nodes compared to a single node. This means your most demanding analytics can now scale much more efficiently.

For senior engineers tackling PB-scale data, understanding these distributed execution models is crucial. It offers a fresh perspective on optimizing query performance in a shared-nothing, shared-storage hybrid environment, providing concrete architectural lessons. This is how you build truly scalable analytical systems.