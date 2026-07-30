---
authors:
- Steve Karam
comments: https://news.ycombinator.com/item?id=49087693
date: '2026-07-28'
depth_score: 9
hn_id: '49087693'
image: /infographics/03-hn-49087693.jpg
interest_score: 9
novelty_score: 8
section: systems
source: hn
tags:
- bottleneck-analysis
- catchup
- full-stack-ownership
- hn
- network-performance
- performance-optimization
- system-layers
title: Performance optimization involves uncovering bottlenecks across distinct system
  layers
url: https://oxide.computer/blog/performance-has-layers
utility_score: 9
why_read: This post explains why owning the full stack is crucial for deep performance
  optimization, revealing how each system layer presents distinct bottlenecks and
  opportunities for improvement.
---

Optimizing performance in complex systems is not a one-shot fix; it is a multi-layered challenge that requires a holistic approach. Oxide's experience building a full-stack infrastructure reveals that bottlenecks can emerge anywhere from the virtual NIC to the physical network fabric.

They discuss how factors like end-to-end IPv6 plumbing, jumbo frames, intelligent offloading to infrastructure, precise CPU placement for virtual NIC worker threads, and flow parallelism all play critical roles. Each optimization reveals the next layer of potential improvement.

This deep dive provides an invaluable perspective for engineers, emphasizing that true performance mastery comes from understanding and controlling every component. It is a masterclass in how owning the entire stack allows for unparalleled control over system performance.