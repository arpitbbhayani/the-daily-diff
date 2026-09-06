---
title: Quantifying tail latency's cost and capacity impact with Lorenz Curve
source: hn
url: https://brooker.co.za/blog/2026/07/29/lorenz-and-little.html
date: '2026-09-04'
tags:
- capacity-planning
- catchup
- cost-optimization
- hn
- latency-percentiles
- lorenz-curve
- tail-latency
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49564332'
comments: https://news.ycombinator.com/item?id=49564332
why_read: This post reveals how to quantify tail latency's impact on system cost and
  capacity. Readers will learn to use the empirical Lorenz Curve to understand each
  latency percentile's contribution to mean latency.
authors:
- Marc Brooker
---

Optimizing tail latency is crucial for customer experience, but how often do you quantify its direct impact on cost and capacity?

This article introduces the empirical Lorenz Curve, a powerful statistical tool to precisely measure how much different latency percentiles contribute to your mean latency. It is not just about observing p99 or p99.9; it is about understanding their weighted impact on your total operational expenditure and resource utilization.

Applying this method means you can intelligently target optimization efforts, ensuring that expensive tail latencies are not disproportionately driving up your infrastructure costs. This gives you a data-driven approach to system design and capacity planning.

Stop guessing about the financial burden of your slowest requests.
