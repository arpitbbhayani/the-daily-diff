---
title: How Hetzner Cloud engineered its open vswitch network stack
source: hn
url: https://www.hetzner.com/blog/the-hetzner-cloud-network-stack-history-and-technical-overview/
date: '2026-10-08'
tags:
- catchup
- cloud-networking
- hn
- host-based-networking
- network-virtualization
- open-vswitch
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 6
hn_id: '50006681'
comments: https://news.ycombinator.com/item?id=50006681
why_read: Read this to understand how Hetzner Cloud transitioned to a host-centric
  network architecture orchestrated through Open vSwitch. You will learn the mechanics
  behind their self-operated networking building blocks.
authors:
- eatonphil
---

Cloud providers often face an architectural dilemma: rely on expensive smart network fabrics, or move packet routing directly into the virtualization hosts. Hetzner chose the host-based approach, anchoring their cloud infrastructure on Open vSwitch.

By building custom orchestration on top of Open vSwitch flows, their VM hosts handle private networking and firewalls locally. This decouples individual host connectivity from centralized networking hardware and gives engineers complete ownership of packet processing paths.

Controlling the data plane at the host level keeps operational building blocks maintainable and predictable under heavy multi-tenant load.

True infrastructure scalability starts with owning your core data paths.
