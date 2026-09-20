---
authors:
- Jonathan Corbet
comments: https://news.ycombinator.com/item?id=49751610
date: '2026-09-18'
depth_score: 9
hn_id: '49751610'
image: /infographics/96-hn-49751610.jpg
interest_score: 8
novelty_score: 8
section: systems
source: hn
tags:
- catchup
- cpu-contention
- hn
- steal-governor
- steal-time
- virtual-machines
- virtualization
title: Steal governor helps virtual machines reduce CPU contention
url: https://lwn.net/Articles/1090381/
utility_score: 8
why_read: This article explains how CPU contention arises in virtualized environments
  and introduces the steal governor patch series as a solution for virtual machines
  to proactively moderate their CPU demands.
---

CPU contention in virtualized environments can devastate application performance, but a new Linux kernel patch series, the "steal governor," proposes an elegant solution that could change how we manage virtual machine resources.

The problem is clear: too many virtual CPUs on too few physical CPUs lead to performance loss, especially when a virtual CPU is preempted while holding critical locks. This creates a cascade of wasted CPU cycles as other threads spin waiting.

The "steal governor" allows virtual machines to intelligently observe physical CPU contention and *voluntarily* reduce their virtual CPU count. This proactive reduction mitigates lock contention and resource waste, leading to more stable and predictable performance for your critical applications.

This deep dive into kernel internals offers valuable insights for any senior engineer designing and operating scalable systems. It highlights how low-level OS mechanisms are critical for robust distributed environments.