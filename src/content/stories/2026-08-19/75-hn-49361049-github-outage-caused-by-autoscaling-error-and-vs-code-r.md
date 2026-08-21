---
title: GitHub outage caused by autoscaling error and VS Code retry storm
source: hn
url: https://www.theregister.com/saas/2026/08/19/github-blames-8-hour-outage-on-autoscaling-fail-and-vs-code-retry-storm/5289547
date: '2026-08-19'
tags:
- autoscaling-failure
- cascading-failure
- catchup
- github-outage
- hn
- load-balancing
- retry-logic
section: systems
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49361049'
comments: https://news.ycombinator.com/item?id=49361049
why_read: This article explains how GitHub's nearly eight-hour outage was caused by
  a confluence of autoscaling misconfiguration, load balancer saturation, and an amplified
  retry storm from VS Code. Readers will learn about the intricate technical details
  of system failures and the importance of robust retry strategies and comprehensive
  monitoring.
authors:
- Richard Speed
---

GitHub's recent 8-hour outage was a masterclass in cascading failures, offering critical lessons for anyone building scalable systems. The root cause involved saturated load balancers due to an Istio sidecar hitting concurrency limits, compounded by a misconfigured autoscaling policy that failed to monitor the sidecar itself.

Adding to the chaos, optimistic retry logic within GitHub's own services and a latent retry bug in VS Code amplified traffic by approximately 10x. This demonstrates how client-side behavior can fatally interact with backend issues, turning a bottleneck into a full-blown incident.

This post-mortem is a must-read for senior engineers, highlighting the non-obvious failure modes in distributed systems, the importance of holistic monitoring, and the danger of unchecked retry mechanisms. It teaches you to look beyond the obvious when designing for resilience.
