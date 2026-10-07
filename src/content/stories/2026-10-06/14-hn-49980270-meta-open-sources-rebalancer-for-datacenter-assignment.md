---
title: Meta open sources rebalancer for datacenter assignment problems
source: hn
url: https://engineering.fb.com/2026/09/21/open-source/rebalancer-generic-high-performance-library-assignment-problems/
date: '2026-10-06'
tags:
- assignment-problems
- catchup
- datacenter-infrastructure
- hn
- rebalancer
- resource-allocation
section: systems
is_news: false
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49980270'
comments: https://news.ycombinator.com/item?id=49980270
why_read: Learn how Meta separates problem specification, storage, and solving to
  scale resource allocation across infrastructure layers. It provides practical insights
  into modeling complex bin-packing and routing constraints at hyperscale.
authors:
- Richard Barnes
- Neeraj Kumar
- Pol Mauri Ruiz
image: /infographics/14-hn-49980270.jpg
---

Datacenter placement problems are notoriously tricky to solve at scale because every tier presents conflicting constraints. Servers must spread across electrical fault domains to maximize availability, but packing efficiency demands tight co-location to reduce network latency.

Meta open-sourced Rebalancer, the generalized assignment solver that powers their infrastructure across hardware provisioning, service placement, and global traffic routing. The architecture explicitly decouples problem specification, in-memory constraint representations, solver algorithms, and telemetry.

Rather than forcing engineers to write custom integer linear programming routines or brute-force heuristics for every tier, the framework standardizes object-to-bin assignments with strict fault-domain awareness.

Designing modular assignment abstractions allows teams to treat hard scheduling problems as reusable infrastructure components rather than bespoke one-offs.
