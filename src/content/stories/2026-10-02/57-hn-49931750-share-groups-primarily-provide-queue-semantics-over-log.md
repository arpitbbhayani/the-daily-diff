---
title: Share groups primarily provide queue semantics over logs
source: hn
url: https://jack-vanlightly.com/blog/2026/6/3/broker-visible-vs-client-local-parallelism
date: '2026-10-02'
tags:
- catchup
- consumer-groups
- hn
- kafka
- parallel-consumption
- queue-semantics
- share-groups
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49931750'
comments: https://news.ycombinator.com/item?id=49931750
why_read: Understand the true purpose of Kafka share groups and how they manage record-level
  acknowledgments rather than simply parallelizing work. This will help you choose
  the right architectural patterns when designing message consumption systems.
authors:
- Jack Vanlightly
---

Scaling message consumption across a distributed queue requires choosing where to pay the coordination tax: at the broker or inside the client. While Kafka Share Groups introduce broker-side record tracking to break free from partition count limits, that flexibility introduces hidden throughput bottlenecks.

When the broker tracks individual message states across consumers, it must maintain delivery locks, track acknowledgments, and manage retry state machines. Under skewed workloads, this state overhead can cause consumer starvation and unexpected lag accumulation.

In contrast, client-local parallelism preserves simple partition consumption at the broker while dispatching records to an internal thread pool. The client manages concurrency and out-of-order execution in local memory, keeping broker overhead minimal and network traffic sequential.

Parallelism is never free; you either coordinate records in broker state or handle ordering complexity inside client memory.
