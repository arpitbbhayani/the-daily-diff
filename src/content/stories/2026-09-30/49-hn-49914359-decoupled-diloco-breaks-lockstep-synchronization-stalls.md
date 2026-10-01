---
title: Decoupled DiLoCo breaks lockstep synchronization stalls
source: hn
url: https://arxiv.org/abs/2604.21428
date: '2026-09-30'
tags:
- asynchronous-aggregation
- catchup
- chaos-engineering
- diloco
- distributed-pre-training
- fault-tolerance
- hn
- spmd
section: systems
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 8
hn_id: '49914359'
comments: https://news.ycombinator.com/item?id=49914359
why_read: Read this paper to learn how asynchronous parameter merging and quorum-based
  aggregation can replace brittle lock-step synchronization during large-scale model
  pre-training. You will gain a practical mental model for achieving zero global downtime
  and maintaining high training goodput across failure-prone accelerator clusters.
authors:
- Arthur Douillard
- Keith Rush
- Yani Donchev
- Zachary Charles
- Nova Fallen
- Ayush Dubey
- Ionel Gog
- Josef Dean
- Blake Woodworth
- Zachary Garrett
- Nate Keating
- Jenny Bishop
- Henry Prior
- Edouard Yvinec
- Arthur Szlam
- Marc'Aurelio Ranzato
- Jeff Dean
---

Synchronous distributed training at massive cluster scales is severely bottlenecked by the slowest accelerator. Standard Single Program Multiple Data frameworks force every node into lock-step synchronization, which turns transient hardware slowdowns, network jitter, and stragglers into expensive cluster-wide stalls.

Decoupled DiLoCo eliminates this rigid coupling by allowing independent learners to run local optimization steps completely asynchronously. Rather than waiting for full barrier synchronization across all accelerators, worker nodes send parameter updates to a central coordinator that aggregates weights using a minimum quorum and dynamic token weighting.

By introducing an adaptive grace window and fault-tolerant parameter merging, the system maintains steady training throughput with zero global downtime, even when individual accelerators experience fatal hardware failures or fall behind during execution.

Resilient asynchronous aggregation offers a practical path to scale foundation model pre-training across unreliable hardware fleets without sacrificing final model convergence.
