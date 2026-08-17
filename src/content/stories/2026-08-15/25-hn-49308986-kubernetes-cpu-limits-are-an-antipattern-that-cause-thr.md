---
title: Kubernetes CPU limits are an antipattern that cause throttling
source: hn
url: https://home.robusta.dev/blog/stop-using-cpu-limits
date: '2026-08-15'
tags:
- antipatterns
- catchup
- cpu-throttling
- hn
- kubernetes-cpu-limits
- resource-management
section: systems
interest_score: 8
depth_score: 7
utility_score: 9
novelty_score: 7
hn_id: '49308986'
comments: https://news.ycombinator.com/item?id=49308986
why_read: This article explains why CPU limits on Kubernetes are detrimental and often
  lead to CPU throttling and resource starvation. It uses clear analogies to illustrate
  how limits prevent available resources from being used effectively.
authors:
- Natan Yellin
---

CPU limits in Kubernetes are often an anti-pattern, causing throttling and degraded application performance even when host CPU is available. Many engineers believe they are necessary, but they often do more harm than good.

The problem stems from how the Linux scheduler handles cgroups. When a pod hits its CPU limit, it is throttled, period. This means even if the node has ample CPU cycles free, your application can be starved if it momentarily bursts beyond its limit.

Instead, focus on well-tuned CPU requests to ensure fair scheduling and use node-level autoscaling. This approach allows your applications to burst when needed, utilizing available resources effectively, and preventing unnecessary throttling that hides real performance issues. It is a fundamental shift in how to think about resource management for resilient distributed systems.
