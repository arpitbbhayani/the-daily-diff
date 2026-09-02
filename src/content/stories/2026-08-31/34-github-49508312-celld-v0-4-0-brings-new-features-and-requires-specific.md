---
title: celld v0.4.0 brings new features and requires specific upgrade steps
source: github
url: https://github.com/denoland/celld/releases/tag/v0.4.0
date: '2026-08-31'
tags:
- catchup
- celld
- durable-objects
- github
- local-development
- peer-tunnel-protocol
- queues
- r2-bindings
- workers-kv
- workflows
- zero-downtime-deployment
section: systems
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49508312'
comments: https://news.ycombinator.com/item?id=49508312
why_read: Read this to understand the new features introduced in celld v0.4.0, including
  support for Workers KV, Queues, Workflows, and R2 bindings. It also details the
  critical upgrade procedure and local development capabilities.
authors:
- tosh
---

Celld v0.4.0 just dropped, bringing major advancements for building robust distributed systems with Durable Objects. It introduces zero-downtime deployments, allowing nodes to adopt new code without restarting and migrating Durable Objects safely while retaining storage and WebSockets.

The release also adds initial support for Workers KV, Queues, Workflows, and R2 bindings, integrating critical primitives for scalable, stateful serverless applications. A new `celld dev` feature provides a local development environment that rebuilds automatically and uses a persistent local object store, eliminating the need for Docker or cloud buckets for rapid iteration.

These features make `celld` an incredibly powerful platform for developers tackling complex distributed state management and high-availability challenges, particularly relevant for AI infrastructure needing reliable object persistence and message passing.
