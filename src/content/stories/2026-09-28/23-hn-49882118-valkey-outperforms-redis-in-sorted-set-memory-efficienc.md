---
title: Valkey outperforms Redis in sorted set memory efficiency benchmarks
source: hn
url: https://www.gomomento.com/blog/50-million-sorted-sets-round-three-redis-and-valkey-compared/
date: '2026-09-28'
tags:
- benchmarking
- catchup
- hn
- insert-throughput
- memory-optimization
- redis
- sorted-sets
- valkey
section: databases
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49882118'
comments: https://news.ycombinator.com/item?id=49882118
why_read: Understand how recent optimizations in Valkey and Redis impact memory consumption
  and throughput for massive sorted set workloads. It provides concrete empirical
  benchmarks comparing multiple versions of both engines under identical conditions.
authors:
- Momento
---

Memory efficiency in in-memory key-value stores directly dictates infrastructure costs at scale. A recent benchmark pushing 50 million members into a single sorted set across multiple versions of Redis and Valkey reveals substantial architectural progress.

Legacy versions of both engines required 4.83 GB of memory (roughly 97 bytes per member) for a 50 million member sorted set. Recent optimizations have reduced this footprint significantly. Redis reduced usage down to 3.73 GB (75 bytes per member) with 632k inserts per second. Valkey pushed memory efficiency further down to 3.34 GB (67 bytes per member) while achieving 647k inserts per second.

For large-scale caching tiers and real-time leaderboards, a 30 percent drop in memory consumption per key translates directly into lower cluster sizing and hardware cost. Tracking memory allocator improvements across engine forks remains essential when managing high-density in-memory workloads.
