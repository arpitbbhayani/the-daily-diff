---
title: How Asana shards and scales its multi-tenant MySQL architecture
source: hn
url: https://asana.com/inside-asana/database-architecture-sharding-scaling
date: '2026-10-05'
tags:
- catchup
- database-sharding
- entity-attribute-value
- hn
- lunadb
- multi-tenancy
- mysql
- write-fanout
section: databases
is_news: false
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 6
hn_id: '49970260'
comments: https://news.ycombinator.com/item?id=49970260
why_read: Understand how Asana models petabyte-scale real-time data using an EAV schema
  and denormalized index tables across sharded MySQL instances.
authors:
- Spencer Yu
---

Scaling real-time reactivity at petabyte scale requires difficult architectural trade-offs between write amplification and query performance.

Asana stores customer data across hundreds of RDS MySQL instances using an Entity-Attribute-Value (EAV) model. To make data loading fast and cache invalidation tractable via their declarative query engine, they denormalize data into physical index tables. This design optimizes read performance and distributed cache synchronization, but it creates high write fanout where updating a single attribute cascades writes to multiple secondary indices.

To manage this complexity safely, customer data is sharded strictly by customer ID, ensuring a single tenant maps to one MySQL instance while packing multiple tenants into shared database clusters.

Optimizing for instant read consistency across real-time collaborative apps usually means accepting write fanout at the storage layer.
