---
title: Optimizing message bus filtering via indexing and tree splitting
source: hn
url: https://blog.janestreet.com/scaling-and-benchmarking-a-critical-message-bus/
date: '2026-10-08'
tags:
- catchup
- hn
- indexing
- message-bus
- ring-buffer
- stream-processing
- tree-splitting
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '50009066'
comments: https://news.ycombinator.com/item?id=50009066
why_read: Read this to understand how Jane Street improved message filtering throughput
  and reduced CPU consumption by 30 percent in their internal messaging framework.
authors:
- Nicholas Yang
image: /infographics/06-hn-50009066.jpg
---

Filtering high-throughput event streams at the subscriber boundary will quickly overwhelm message brokers if the recovery path relies on linear scans. At Jane Street, the internal messaging bus Aria processes multiple terabytes of data daily and relies on an in-memory ring buffer called the stream tip to help lagging clients catch up.

The bottleneck emerged during tip recovery. While Aria divides message streams into hierarchical topic trees, the server was scanning the entire raw stream of messages in the ring buffer and filtering them on the fly for each client subscription. When multiple clients reconnected and requested specific subtrees simultaneously, server CPU utilization spiked severely.

To resolve this contention, the engineering team overhauled the stream buffer using indexed tree-splitting. Instead of linearly inspecting every buffered event, the new architecture maintains topic-aware indices over the in-memory window, allowing consumers to jump directly to relevant subtrees.

This indexing optimization cut production CPU consumption by 30 percent while preserving the strict message ordering and delivery guarantees required across trading infrastructure.

Smart indexing belongs directly in your streaming recovery paths, not just in your persistent databases.
