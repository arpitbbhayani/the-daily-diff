---
title: Automating container right-sizing for Netflix Stratum media processing
source: hn
url: https://netflixtechblog.com/netflix-stratum-media-processing-automated-container-right-sizing-ddf9aa68a801
date: '2026-09-27'
tags:
- catchup
- container-right-sizing
- hn
- media-processing
- resource-optimization
- stratum
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49865650'
comments: https://news.ycombinator.com/item?id=49865650
why_read: Learn how automated container right-sizing optimizes compute resource allocation
  in large-scale media processing workflows.
authors:
- violetta98
---

Over-provisioning container resources is the default safety blanket for high-throughput distributed architectures, but it creates massive infrastructure waste.

Netflix solved this inside their Stratum media processing pipeline by designing automated container right-sizing. Instead of relying on static developer configurations, the platform tracks actual memory and CPU utilization across continuous execution cycles, dynamically fitting resource allocations to real-world demands.

This architecture prevents out-of-memory crashes during sudden load spikes while shedding millions of dollars in idle container capacity across thousands of heterogenous compute jobs.

Automating your workload resource profiling is the fastest way to slash cloud spend without sacrificing pipeline reliability.
