---
authors:
- Carlota Soto
comments: https://news.ycombinator.com/item?id=49513867
date: '2026-08-31'
depth_score: 9
hn_id: '49513867'
image: /infographics/28-hn-49513867.jpg
interest_score: 8
novelty_score: 7
section: databases
source: hn
tags:
- autoscaling
- catchup
- compute-storage-separation
- database-scaling
- hn
- lakebase-architecture
- postgres
title: Neon's Lakebase Postgres autoscales compute independently from storage
url: https://neon.com/blog/autoscaling-lakebase-postgres
utility_score: 8
why_read: This article details how Neon's Lakebase Postgres achieves real-time autoscaling
  by decoupling compute from durable state. Readers will gain insight into the architectural
  requirements and technical implementation of this innovative database scaling approach.
---

Autoscaling a stateful database like PostgreSQL is a significant engineering challenge, but Neon's Lakebase architecture tackles it head-on by fundamentally decoupling compute and storage. This design allows their production databases to change compute size tens of thousands of times per month, sometimes as frequently as every 81 seconds.

The core innovation lies in making the compute layer stateless. Unlike traditional Postgres, which ties processes to local disks, Neon's compute nodes run Postgres, execute queries, and use local NVMe for caching, but own no durable state. All durability and history reside in a separate storage layer featuring WAL replication via safekeepers, page reconstruction by pageservers, and long-term object storage.

This separation means compute nodes can start, stop, move, or resize without relocating the underlying database state. It is a powerful pattern for building highly scalable and elastic distributed database systems. Dive in to understand the internals of this architectural marvel.