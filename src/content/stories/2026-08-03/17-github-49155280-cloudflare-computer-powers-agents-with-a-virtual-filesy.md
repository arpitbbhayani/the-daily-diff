---
title: Cloudflare Computer powers agents with a virtual filesystem
source: github
url: https://github.com/cloudflare/computer
date: '2026-08-03'
tags:
- agents
- catchup
- containerization
- durable-objects
- github
- virtual-filesystem
section: systems
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 8
hn_id: '49155280'
comments: https://news.ycombinator.com/item?id=49155280
why_read: This text introduces Cloudflare Computer, a system leveraging Durable Objects
  and SQLite to provide agents with a virtual filesystem and various execution environments.
  Readers will learn how a serverless platform can enable sophisticated agent-based
  computing with isolated, persistent state and diverse backend options.
authors:
- Cloudflare
---

Cloudflare has introduced 'Cloudflare Computer,' a groundbreaking virtual filesystem designed to give AI agents persistent state and powerful execution capabilities. It leverages Durable Objects and SQLite as the authoritative state store, presenting a unique approach to agent environments.

This system projects its SQLite state into sandbox containers as a real FUSE mount, allowing agents to interact with a full Linux userland, real binaries, and real networks. It also supports different backends like a `bash` shell or JavaScript execution within Dynamic Workers.

This architecture provides a concrete example of how to engineer stateful, durable, and highly capable execution environments for AI agents, pushing the boundaries of what autonomous systems can achieve. It is a masterclass in distributed systems and applied AI design.
