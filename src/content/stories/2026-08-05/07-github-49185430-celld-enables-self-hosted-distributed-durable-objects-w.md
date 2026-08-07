---
authors:
- calvinfo
comments: https://news.ycombinator.com/item?id=49185430
date: '2026-08-05'
depth_score: 8
hn_id: '49185430'
image: /infographics/07-github-49185430.jpg
interest_score: 8
novelty_score: 8
section: systems
source: github
tags:
- catchup
- distributed-systems
- durable-objects
- github
- object-storage
- self-hosted
- sharding
- sqlite
title: celld enables self-hosted distributed Durable Objects without a control plane
url: https://github.com/denoland/celld
utility_score: 8
why_read: This text introduces celld, an open-source project providing self-hosted
  Durable Objects. Readers will learn about its unique distributed architecture that
  achieves sharding by design using SQLite and S3 without a dedicated control plane.
---

Building scalable, stateful applications without the headache of complex distributed consensus? Celld introduces a fascinating approach to self-hosting Durable Objects, drawing inspiration from Cloudflare's model.

Instead of traditional consensus protocols, Celld leverages an S3-compatible bucket for coordination. Each "Durable Object" is essentially its own SQLite database, sharded by design, and replicated to object storage. Ownership is managed via object-storage compare-and-swap, eliminating the need for a separate control plane or failure detector.

This architecture fundamentally rethinks how to achieve distributed state. It tackles common distributed system complexities by designing them out, reducing contention and blast radius failures. For anyone architecting scalable systems or exploring novel distributed patterns, Celld offers a genuinely fresh perspective.

Discover how to simplify your distributed state management.