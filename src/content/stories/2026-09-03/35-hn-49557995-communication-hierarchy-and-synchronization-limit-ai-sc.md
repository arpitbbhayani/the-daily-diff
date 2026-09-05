---
authors:
- Aarav Wattal
comments: https://news.ycombinator.com/item?id=49557995
date: '2026-09-03'
depth_score: 9
hn_id: '49557995'
image: /infographics/35-hn-49557995.jpg
interest_score: 8
novelty_score: 7
section: ai
source: hn
tags:
- ai-scaling
- catchup
- communication-hierarchy
- data-movement
- hn
- interconnect
- synchronization
title: Communication hierarchy and synchronization limit AI scaling
url: https://www.aaravwattal.com/blog/c2c-interconnect/
utility_score: 8
why_read: This article explains how the communication hierarchy and synchronization
  are fundamental bottlenecks in scaling large AI models. Readers will learn why simply
  adding more compute does not lead to proportional speedups.
---

As AI models scale to trillions of parameters, the bottleneck is no longer just compute, it is overwhelmingly communication. This detailed analysis breaks down the hierarchy of interconnects, from on-die to rack-to-rack, providing concrete data points.

You will see precisely how bandwidth decreases by orders of magnitude at each level. For example, moving from NVLink 5 between GPUs in a rack to InfiniBand XDR between different racks means a tenfold drop in effective speed. This disparity has profound architectural implications.

The article explains why, as you double compute, synchronization overhead can quickly dominate, negating expected speedups. Understanding this communication wall is essential for designing truly scalable AI infrastructure, both for training and inference.

Ignoring the network means your AI will never reach its full potential.