---
title: Correctness in Distributed Systems is a Spectrum, Not Binary
source: hn
url: https://archetechmes.vercel.app/blog/correctness-as-spectrum
date: '2026-09-07'
tags:
- catchup
- causal-consistency
- consistency-models
- correctness
- distributed-systems
- eventual-consistency
- hn
- linearizability
- sequential-consistency
section: systems
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 6
hn_id: '49599255'
comments: https://news.ycombinator.com/item?id=49599255
why_read: This text explains that correctness in distributed systems is a spectrum,
  not a binary state. Readers will learn about various consistency models, from linearizability
  to eventual consistency, and how they define system behavior under different failure
  conditions.
authors:
- rzwsan
---

Forget thinking of correctness as a binary in distributed systems. This article eloquently argues it is a spectrum, breaking down the critical nuances between Linearizability, Sequential, Causal, and Eventual consistency.

Understanding these distinctions is not academic; it is fundamental to designing robust systems that handle network partitions, clock drifts, and node failures gracefully. For instance, Linearizability offers the strongest guarantees, making a distributed system behave like a single machine, crucial for consensus protocols like Raft.

This breakdown helps you reason about trade-offs: what consistency level is truly needed for a given component? Applying this framework informs your architectural choices, leading to more resilient and performant systems.
