---
title: Dedicated liveness simulation reveals hidden distributed system livelocks
source: hn
url: https://tigerbeetle.com/blog/2023-07-06-simulation-testing-for-liveness/
date: '2026-09-24'
tags:
- asymmetric-partitions
- catchup
- fault-injection
- hn
- livelocks
- liveness
- safety
- simulation-testing
- vopr
section: systems
interest_score: 9
depth_score: 9
utility_score: 9
novelty_score: 8
hn_id: '49828454'
comments: https://news.ycombinator.com/item?id=49828454
why_read: Learn why standard uniform fault injection fails to detect subtle livelocks
  and how dedicated liveness testing catches persistent asymmetric partition bugs.
authors:
- Bluestein
image: /infographics/03-hn-49828454.jpg
---

Uniform fault injection works well for verifying safety invariants like strict serializability in distributed databases, but it often fails to detect subtle liveness bugs. In a randomized simulator, transient network partitions heal quickly, masking vicious livelock cycles that occur during view changes.

TigerBeetle addressed this in their deterministic simulation framework (the VOPR) by creating a dedicated liveness testing mode. The simulator deliberately constructs persistent asymmetric partitions where a single node can transmit but cannot receive packets.

Under this condition, a isolated node continuously broadcasts view change requests, forcing healthy peers into perpetual state transitions and halting transaction throughput indefinitely. Standard safety simulations missed this bug because random node restarts or network healing would break the cycle before the hang was observed.

Verifying distributed consensus requires testing not just whether the system avoids incorrect states, but whether it can reliably make forward progress under asymmetric partitions.
