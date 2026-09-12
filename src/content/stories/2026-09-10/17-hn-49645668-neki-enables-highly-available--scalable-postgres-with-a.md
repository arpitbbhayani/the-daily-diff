---
title: Neki enables highly-available, scalable Postgres with advanced features
source: hn
url: https://planetscale.com/docs/neki
date: '2026-09-10'
tags:
- catchup
- cluster-management
- database-proxy
- high-availability
- hn
- neki
- planetscale
- postgres
- sharding
- zero-downtime
section: databases
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49645668'
comments: https://news.ycombinator.com/item?id=49645668
why_read: Read this to understand Neki, PlanetScale's solution for highly-available
  and scalable Postgres databases. You will learn about its key features, including
  sharding, zero-downtime operations, and sophisticated cluster management.
authors:
- jaredlt
---

Scaling Postgres beyond a single node is a well-known challenge, but PlanetScale's new Neki service offers a compelling solution for horizontal sharding. It is not just about distributing data; Neki tackles the entire operational complexity.

The core innovation lies in a sophisticated proxy router positioned between clients and Postgres nodes. This router transparently handles parsing, planning, and coordinating all Postgres traffic, allowing for true horizontal scaling while maintaining the familiar Postgres wire protocol.

Engineers should pay attention to how Neki provides crucial features like zero-downtime operations, online DDL, and robust replication workflows. This abstract all of these capabilities behind a single connection string, making complex distributed database management significantly simpler and more reliable for large-scale applications.

This represents a significant advancement in making highly-available, sharded Postgres clusters more accessible.
