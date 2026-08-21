---
title: GitHub outage caused by autoscaling fail and VS Code retry storm
source: hn
url: https://www.theregister.com/saas/2026/08/19/github-blames-8-hour-outage-on-autoscaling-fail-and-vs-code-retry-storm/5289547
date: '2026-08-19'
tags:
- autoscaling-failure
- catchup
- github-outage
- hn
- load-balancing
- retry-logic
- vs-code
section: systems
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49367623'
comments: https://news.ycombinator.com/item?id=49367623
why_read: Readers will understand the complex, cascading failures that led to GitHub's
  nearly eight-hour outage, learning about the interplay of misconfigured autoscaling,
  load balancer issues, and a critical VS Code retry bug.
authors:
- Richard Speed
---

GitHub's 8-hour outage post-mortem reveals a critical lesson in distributed systems: your autoscaling strategy is only as good as what it monitors. The incident stemmed from load balancers buckling under an Istio sidecar concurrency limit, while the autoscaling policy was misconfigured to monitor only the host service.

This blind spot allowed a cascading failure to develop. Compounding the issue, a "latent retry bug" in VS Code amplified traffic to the Copilot Token Service by approximately 10x, turning a problem into an eight-hour nightmare. It is a stark reminder that client-side behavior heavily influences distributed system stability.

This real-world example demonstrates the importance of holistic monitoring, understanding inter-service dependencies, and designing robust retry mechanisms across your entire ecosystem, from backend services to client applications. You cannot scale what you do not observe.
