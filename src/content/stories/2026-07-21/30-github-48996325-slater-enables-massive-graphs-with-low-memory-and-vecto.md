---
authors:
- rickkjp
comments: https://news.ycombinator.com/item?id=48996325
date: '2026-07-21'
hn_id: '48996325'
image: /infographics/30-hn-48996325.jpg
interest_score: 8
section: databases
source: github
tags:
- bolt-protocol
- catchup
- durable-writes
- github
- graph-database
- low-memory
- vector-search
title: Slater enables massive graphs with low memory and vector search
url: https://github.com/Hikari-Systems/slater
why_read: This text introduces Slater, a novel graph database designed for massive
  datasets. It explains how Slater efficiently manages graphs with billions of edges
  using minimal RAM while offering features like vector search and durable writes.
---

Managing massive graphs often means sacrificing memory efficiency or requiring specialized hardware. Slater, a new low-memory graph database, challenges this trade-off by handling billions of edges with minimal RAM.

It can manage graphs with hundreds of millions of nodes and billions of edges using just hundreds of megabytes of RAM. This is achieved through clever disk-native optimizations, making it ideal for local replica use cases and read-heavy workloads.

Crucially, Slater also integrates disk-native vector search directly alongside the graph data, and it is compatible with existing Neo4j Bolt drivers. This combination of scale, efficiency, and modern search capabilities makes it a compelling option for demanding graph applications.