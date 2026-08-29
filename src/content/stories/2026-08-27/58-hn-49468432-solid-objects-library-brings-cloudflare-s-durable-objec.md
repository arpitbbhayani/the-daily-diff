---
title: Solid Objects library brings Cloudflare's durable objects model to any database
source: hn
url: https://lucascarlson.net/2026/08/24/introducing-open-source-durable-objects/
date: '2026-08-27'
tags:
- actor-model
- catchup
- concurrency
- database
- durable-objects
- hn
- solid-objects
- state-management
section: systems
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49468432'
comments: https://news.ycombinator.com/item?id=49468432
why_read: This article introduces Solid Objects, a library enabling the Cloudflare
  Durable Objects model for state management on existing databases. Readers will learn
  how to simplify complex concurrency and state problems using single-threaded, named
  objects without Cloudflare's edge network.
authors:
- Lucas Carlson
---

Cloudflare's Durable Objects model is a game-changer for state management, offering a powerful abstraction over distributed challenges. Now, this elegant pattern is available directly on your own SQL database!

The core idea is simple yet profound: a single-threaded object per identity, addressed by name, with durable state attached. This completely sidesteps the need for complex distributed locks, Redis caches, or custom queues when building applications that manage isolated states, like shopping carts, chat rooms, or individual agent runs.

Until now, this powerful model was largely confined to Cloudflare's edge network. The new open-source 'Solid Objects' library changes that, bringing this actor-like paradigm to your existing SQL databases with both Ruby and TypeScript implementations.

This is a huge win for system designers looking to simplify complex distributed state management. You can now leverage a proven pattern with familiar database tools, making your distributed applications more robust and easier to reason about.
