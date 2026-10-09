---
title: How Neon systematically improved database reliability at scale
source: hn
url: https://neon.com/blog/how-we-systematically-improved-our-reliability
date: '2026-10-08'
tags:
- catchup
- cell-architecture
- control-plane
- database-reliability
- hn
- multi-cloud
- postgres
section: databases
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '50005171'
comments: https://news.ycombinator.com/item?id=50005171
why_read: Read this to understand how to manage operational failures across large-scale
  multi-cloud database fleets. You will learn how control plane design and cell-based
  deployments isolate faults and preserve reliability.
authors:
- Dmitrii Mokhnatkin
- Andrei Stolbovskii
---

Scaling a single relational database process is a well-understood problem. You restart the host, monitor disk usage, or inspect slow queries. But running millions of isolated PostgreSQL databases across AWS, Azure, and GCP transforms database administration into a massive distributed systems challenge.

Neon tackled this scale by adopting cell-based architectures, deploying up to 15 isolated cells per cloud region across more than 70 distinct environments. When managing fleet operations, the control plane is usually the silent point of failure. It handles provisioning, waking instances from cold storage, managing high-availability failovers, and orchestrating branch creation.

Partitioning the control plane into small, self-contained cells prevents localized network partitions or region-wide outages from causing global cascading failures. If an individual cell suffers memory pressure or API exhaustion, the blast radius stays locked to that isolated tenant cluster.

Building dependable infrastructure at scale requires treating database lifecycle events as distributed control loops rather than simple scripts.
