---
title: FrogNet transforms a network into a single computer with RAM
source: github
url: https://github.com/FawcettJohnW/FrogNet-Living-Network
date: '2026-09-02'
tags:
- catchup
- distributed-systems
- frognet
- github
- mesh-networking
- shared-memory
section: systems
interest_score: 9
depth_score: 9
utility_score: 8
novelty_score: 10
hn_id: '49537469'
comments: https://news.ycombinator.com/item?id=49537469
why_read: Readers will learn about FrogNet, a novel architecture that transforms a
  distributed network into a single computer by providing shared memory. This approach
  simplifies distributed programming by eliminating the need for explicit messaging
  and service discovery.
authors:
- John W. Fawcett
---

Forget message queues and RPC. What if your distributed system acted like a single computer with shared memory? FrogNet proposes exactly this: treating an entire network as one directly addressable memory space.

This radical shift aims to eliminate common distributed system complexities like routing, service discovery, and explicit message passing. Instead, programs simply read from and write to network-wide shared memory, abstracting away the underlying network fabric.

Imagine the simplification for certain distributed applications. This is not just an incremental improvement; it challenges foundational assumptions about inter-process communication in distributed environments.
