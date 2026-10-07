---
title: Combining dedicated and shared cores optimizes bursty container workloads
source: hn
url: https://www.uber.com/in/en/blog/hybrid-core-allocation/
date: '2026-10-06'
tags:
- catchup
- container-orchestration
- cpu-shares
- cpusets
- hn
- latency-optimization
- resource-allocation
section: systems
is_news: false
interest_score: 8
depth_score: 9
utility_score: 8
novelty_score: 7
hn_id: '49980965'
comments: https://news.ycombinator.com/item?id=49980965
why_read: Learn how combining dedicated cpusets with shared CPU allocations mitigates
  throttling and improves resource efficiency for bursty workloads.
authors:
- Alexandr Sudakov
- Ivan Shibitov
---

Pinning containers to dedicated CPU cores prevents throttling, but it burns infrastructure budget when bursty workloads sit idle. Uber tackled this trade-off in their Odin stateful container orchestration platform by migrating from pure dedicated cpusets to a hybrid allocation architecture.

In standard vertical CPU scaling, systems often rely on coarse one-minute utilization averages. This heuristic breaks down under bursty traffic, where sudden micro-spikes cause severe latency degradation before the autoscaler can react. Dedicating entire physical cores eliminated throttling, but host resource density dropped significantly.

Uber solved this by combining dedicated reserved cores via Linux cpusets with an over-allocated pool of shared cores managed by cpu.shares. Dedicated cores provide guaranteed baseline capacity for critical tasks, while the shared pool absorbs transient bursts without requiring dedicated capacity across the entire fleet.

To prevent noisy neighbor contention in the shared pool, the orchestrator calculates dynamic shares proportional to allocation size. This guarantees predictable latency ceilings while maintaining high host-level utilization across stateful workloads.

Smart infrastructure engineering is rarely about choosing between strict isolation and dynamic sharing; it is about designing hybrid models that capture the strengths of both.
