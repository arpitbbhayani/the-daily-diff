---
title: Celld brings self-hosted distributed Durable Objects to your VMs
source: hn
url: https://flaviocopes.com/celld/
date: '2026-08-08'
tags:
- catchup
- celld
- cloudflare-workers
- distributed-systems
- durable-objects
- hn
- self-hosting
section: systems
interest_score: 8
depth_score: 7
utility_score: 8
novelty_score: 8
hn_id: '49219346'
comments: https://news.ycombinator.com/item?id=49219346
why_read: This text introduces celld, an open-source implementation of Cloudflare
  Durable Objects that can be self-hosted. Readers will learn about its unique architecture
  for managing distributed state without complex consensus services.
authors:
- Ryan Dahl
---

Cloudflare Durable Objects are a game-changer for stateful applications, and now you can run them yourself with Celld. This open-source project reimagines the durable object paradigm for self-hosting, offering a powerful model for single-writer concurrency.

The architecture is brilliantly simple: each Durable Object gets its own SQLite database for local persistence. Replication and coordination between nodes happen via an S3-compatible bucket, entirely bypassing the need for a separate database cluster or complex consensus service.

This means you can achieve highly consistent, stateful services without the operational overhead. For senior engineers building microservices or exploring alternative distributed state management patterns, Celld offers a compelling and practical new approach.
