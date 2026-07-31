---
authors:
- Marc Brooker
comments: https://news.ycombinator.com/item?id=49101672
date: '2026-07-29'
depth_score: 8
hn_id: '49101672'
image: /infographics/64-hn-49101672.jpg
interest_score: 8
novelty_score: 7
section: systems
source: hn
tags:
- catchup
- cost-optimization
- hn
- latency-percentiles
- lorenz-curve
- mean-latency
- tail-latency
title: Quantifying how tail latency contributes to mean system cost
url: https://brooker.co.za/blog/2026/07/29/lorenz-and-little.html
utility_score: 8
why_read: This post explains the importance of tail latency for cost and capacity
  optimization. Readers will learn how to use the empirical Lorenz Curve to quantify
  the contribution of specific latency percentiles to the overall mean latency.
---

Tail latency is a crucial metric, but do you know how much your p99 or p99.9 truly costs you? This article introduces the empirical Lorenz Curve as a powerful tool to quantify precisely how much each latency percentile contributes to your system's mean latency and, by extension, its operational costs.

The method helps you move beyond just observing high percentiles to understanding their actual financial footprint on your infrastructure. It is a game-changer for capacity planning, allowing you to prioritize optimization efforts based on tangible cost savings rather than just service level agreements.

Engineers often talk about tail latency in terms of user experience, but its impact on resource consumption is just as significant. Discover a practical approach to connect performance metrics directly to your budget.