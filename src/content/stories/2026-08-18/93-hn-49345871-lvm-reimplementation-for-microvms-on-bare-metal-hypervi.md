---
authors:
- Héja Péter
comments: https://news.ycombinator.com/item?id=49345871
date: '2026-08-18'
depth_score: 9
hn_id: '49345871'
image: /infographics/93-hn-49345871.jpg
interest_score: 8
novelty_score: 8
section: systems
source: hn
tags:
- bare-metal-hypervisors
- catchup
- device-mapper
- hn
- lvm
- microvms
- networked-storage
title: LVM reimplementation for microVMs on bare-metal hypervisors
url: https://depot.dev/blog/why-i-reimplemented-lvm
utility_score: 8
why_read: Readers will learn why a custom LVM solution was necessary for running microVMs
  on bare-metal hypervisors and the specific performance challenges involved in achieving
  sub-second launch times.
---

Reimplementing core infrastructure components like LVM might sound extreme, especially when the goal is "worse guarantees." Yet, for highly specific, high-performance use cases, it can be a brilliant architectural decision.

Depot faced this challenge when optimizing bare-metal hypervisors for sub-second microVM launches with networked storage. Standard LVM2 was too feature-rich and made too many assumptions for their workload, leading them to build a specialized, simplified version.

This article details the constraints and design choices behind their custom storage management system. It is a masterclass in understanding the precise trade-offs required to achieve extreme performance in distributed systems, sacrificing generic safety for workload-specific efficiency.