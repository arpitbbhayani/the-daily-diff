---
title: Initial USB4 and Thunderbolt Support for Apple M-series SoCs
source: hn
url: https://lkml.iu.edu/2608.3/12164.html
date: '2026-09-01'
tags:
- acio
- apple-silicon
- catchup
- device-tree
- hn
- linux-kernel
- thunderbolt
- usb4
section: systems
interest_score: 8
depth_score: 9
utility_score: 7
novelty_score: 7
hn_id: '49520108'
comments: https://news.ycombinator.com/item?id=49520108
why_read: Read this to understand the technical challenges and solutions involved
  in bringing USB4 and Thunderbolt support to Apple Silicon Macs. You will learn about
  the unusual ACIO block architecture and its driver requirements.
authors:
- Sven Peter
---

Ever wonder about the incredible complexity behind enabling USB4/Thunderbolt on new hardware like Apple M-series SoCs? This Linux kernel patch series unpacks it, revealing critical low-level system design.

You will explore the intricacies of the ACIO (Apple Converged I/O) block, a Cortex-M3 co-processor, and the DART IOMMU, all designed for robust I/O. The patches detail managing MMIO space access and adhering to extremely strict ordering requirements for power cycling and PHY configuration.

This is a masterclass in hardware-software co-design, showing how engineers tackle fundamental challenges in system integration. It highlights how seemingly simple I/O functionality requires deep understanding of processor-level interactions and custom silicon.
