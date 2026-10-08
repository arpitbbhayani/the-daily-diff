---
title: Rebalancer separates concerns to scale datacenter assignment problems
source: hn
url: https://engineering.fb.com/2026/09/21/open-source/rebalancer-generic-high-performance-library-assignment-problems/
date: '2026-10-07'
tags:
- assignment-problems
- catchup
- datacenter-infrastructure
- hn
- rebalancer
- resource-allocation
- separation-of-concerns
section: systems
is_news: false
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49990547'
comments: https://news.ycombinator.com/item?id=49990547
why_read: Learn how Meta decouples problem specification, memory storage, and solver
  logic to handle large-scale resource allocation across its infrastructure. It provides
  a clear architectural model for tackling complex assignment and scheduling challenges.
authors:
- Richard Barnes
- Neeraj Kumar
- Pol Mauri Ruiz
---

Resource allocation at hyperscale rarely fails due to the mathematical solver itself. It fails because of how assignment problems are represented, stored, and executed across massive state spaces.

Meta recently open-sourced Rebalancer, the assignment problem solver powering its datacenter infrastructure for almost a decade. Instead of tying optimization logic to domain-specific implementations, Rebalancer enforces a clean separation of concerns across problem specification, memory-efficient problem storage, execution engines, and debugging instrumentation.

This framework handles everything from rack placement across electrical failure domains to dynamic traffic routing across geographically distributed facilities. By decoupling in-memory state representations from the underlying solvers, infrastructure engineers can safely tweak objective functions and constraints without risking memory bloat or rewriting allocation code.

Separating memory layout from optimization semantics is a powerful blueprint for any distributed scheduling system.
