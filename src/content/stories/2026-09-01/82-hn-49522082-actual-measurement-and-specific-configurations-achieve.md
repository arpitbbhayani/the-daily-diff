---
title: Actual measurement and specific configurations achieve high availability at
  scale
source: hn
url: https://engineering.moniepoint.com/high-availability-in-production-what-running-at-scale-actually-requires
date: '2026-09-01'
tags:
- catchup
- health-checks
- high-availability
- hn
- mttd
- mttr
- production-systems
- scalability
section: systems
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49522082'
comments: https://news.ycombinator.com/item?id=49522082
why_read: Readers will learn the practical implications of high availability in production,
  understanding how to accurately measure system uptime and derive critical system
  configurations like connection pool sizes and circuit breaker thresholds.
authors:
- Adegoke Obasa
---

Achieving true high availability in production is more than just architecture diagrams. This article from Moniepoint breaks down what it *actually* takes to run at scale, focusing on the gritty details of MTTD and MTTR.

It exposes common pitfalls, like why default Spring Boot health checks can lie to you in production, and offers practical advice. You will learn how to derive critical system parameters such as connection pool sizes and circuit breaker thresholds directly from real throughput numbers.

This is not just theoretical; it is a battle-tested approach from a fintech serving millions. Understanding these real-world requirements will sharpen your system design and incident response strategies.
