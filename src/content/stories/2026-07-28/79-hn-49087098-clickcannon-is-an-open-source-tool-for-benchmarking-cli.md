---
authors:
- Spencer Torres
comments: https://news.ycombinator.com/item?id=49087098
date: '2026-07-28'
depth_score: 8
hn_id: '49087098'
image: /infographics/79-hn-49087098.jpg
interest_score: 8
novelty_score: 7
section: databases
source: hn
tags:
- benchmarking
- catchup
- clickcannon
- clickhouse
- data-replay
- hn
- observability-workloads
- user-simulation
- workload-performance
title: ClickCannon is an open-source tool for benchmarking ClickHouse performance
url: https://clickhouse.com/blog/building-clickcannon-a-tool-for-benchmark-clickhouse
utility_score: 9
why_read: This article introduces ClickCannon, an open-source tool for benchmarking
  ClickHouse performance. Readers will learn how it addresses challenges in sizing
  hardware for realistic observability workloads through data replay and user simulation.
---

Benchmarking distributed databases like ClickHouse is notoriously hard, especially when trying to simulate realistic observability workloads. This article breaks down the engineering behind ClickCannon, an open-source tool designed to tackle these challenges.

It delves into how to replay actual production data at controlled throughput, build concurrency architectures for high-throughput workload generation, and simulate authentic user query patterns. The insights gained from such rigorous testing are crucial for sizing recommendations and understanding database behavior under stress.

For any engineer dealing with database performance, system design, or large-scale data systems, this is a deep dive into practical, actionable techniques for robust performance validation.