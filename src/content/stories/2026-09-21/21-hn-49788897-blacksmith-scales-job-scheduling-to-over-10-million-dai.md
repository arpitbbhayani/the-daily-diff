---
title: Blacksmith scales job scheduling to over 10 million daily jobs
source: hn
url: https://www.blacksmith.sh/blog/how-blacksmith-runs-10-million-jobs-per-day
date: '2026-09-21'
tags:
- catchup
- distributed-systems
- hn
- job-scheduling
- redis
- scaling
section: systems
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49788897'
comments: https://news.ycombinator.com/item?id=49788897
why_read: This post explains how Blacksmith engineered its job scheduling process
  for better utilization, fairness, and resilience to handle over 10 million daily
  jobs. Readers will learn about the evolution of their scheduling architecture, the
  problems encountered, and the solutions implemented, including the role of simulation.
authors:
- Andrew Werner
---

Scaling CI/CD to over 10 million jobs daily is not a trivial task, and Blacksmith shares their journey from a simple Redis-based polling system to a sophisticated, centralized scheduler. They unpack the intricate architectural evolution needed to handle such immense scale.

This article provides deep insights into improving fleet utilization, ensuring fairness across tenants, and building resilience against failures in a high-demand environment. You will see how they tackled common scheduling bottlenecks and adapted their approach to practical, real-world constraints.

Engineers building large-scale distributed systems will find this breakdown of architectural trade-offs and specific solutions invaluable.
