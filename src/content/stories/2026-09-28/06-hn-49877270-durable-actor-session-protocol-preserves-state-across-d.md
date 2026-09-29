---
title: Durable actor session protocol preserves state across disconnections
source: hn
url: https://dasp-protocol.github.io/dasp/
date: '2026-09-28'
tags:
- catchup
- command-admission
- connection-recovery
- durable-actors
- hn
- session-protocol
- state-persistence
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49877270'
comments: https://news.ycombinator.com/item?id=49877270
why_read: Learn how the Durable Actor Session Protocol enables reliable command tracking,
  ordered history replay, and seamless reconnection for distributed actors.
authors:
- mikehostetler
image: /infographics/06-hn-49877270.jpg
---

Designing reliable stateful services often breaks down when network disconnects corrupt the relationship between client intent and server execution. The Durable Actor Session Protocol addresses this by decoupling command admission from final outcome persistence.

Under this model, the server commits command receipt into durable storage before returning an acknowledgment to the client. If a connection drops while the actor executes background tasks, returning clients resume their event stream from an explicit cursor offset rather than reissuing ambiguous mutations.

Adopting formal durable actor session semantics prevents duplicate writes and simplifies state synchronization across distributed clients.
