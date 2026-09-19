---
title: Gorai Acknowledges Robots are Distributed Systems, Builds Them as Such
source: github
url: https://github.com/emergingrobotics/gorai
date: '2026-09-17'
tags:
- ai-agents
- catchup
- distributed-systems
- github
- nats-io
- robotics-framework
- service-discovery
section: systems
interest_score: 8
depth_score: 7
utility_score: 8
novelty_score: 8
hn_id: '49742642'
comments: https://news.ycombinator.com/item?id=49742642
why_read: This document introduces Gorai, a Go-based robotics framework built around
  NATS.io, and explains its core philosophy that robots are inherently distributed
  systems. Readers will learn how Gorai applies cloud system principles like service
  discovery and location transparency to robotics, enabling a more robust and flexible
  architecture for AI-era robots.
authors:
- Bluestein
---

Building reliable robotics systems feels like building a distributed cloud service, so why not treat them that way? Gorai, a new Go-based framework, is making this vision a reality.

It leverages NATS.io to turn every sensor and actuator into a discoverable service on a mesh. This means robust service discovery, location transparency, and built-in health checks – exactly the kind of battle-tested patterns you use for your microservices.

This approach radically simplifies complex robot architectures, especially when integrating AI agents. Instead of rigid wiring, you have a flexible, scalable system where agents interact with capabilities, not hardcoded connections. It is a powerful blueprint for the 'AI era' of robotics.
