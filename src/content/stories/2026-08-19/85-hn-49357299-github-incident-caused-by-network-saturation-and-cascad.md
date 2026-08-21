---
title: GitHub Incident Caused by Network Saturation and Cascading Failures
source: hn
url: https://surfingcomplexity.blog/2026/08/18/tough-days-at-github-a-continuing-series/
date: '2026-08-19'
tags:
- catchup
- failure-cascade
- haproxy
- hn
- istio
- load-balancers
- network-saturation
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49357299'
comments: https://news.ycombinator.com/item?id=49357299
why_read: This analysis of a GitHub incident details how network saturation, component
  limits, and optimistic retries can lead to a cascading failure in distributed systems.
  Readers will learn about common failure modes and their propagation.
authors:
- Lorin Hochstein
---

GitHub's recent eight-hour outage offers critical lessons in distributed systems reliability. The incident's immediate cause was network saturation on load balancers, driven by a new traffic peak.

The failure cascaded from an Istio sidecar pod hitting concurrency limits due to a misconfigured policy, which then saturated HAProxy nodes by degrading the gateway authentication path. The problem was significantly worsened by optimistic retry logic, which overloaded internal load balancers further.

This serves as a potent reminder that in complex microservice architectures, a single point of saturation can quickly ripple through the system, especially when combined with aggressive retry mechanisms. Understanding these cascading failure modes is crucial for building robust, scalable systems.
