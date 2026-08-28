---
title: PolyWire is an intelligent gateway for all Postgres workloads
source: hn
url: https://polygres26.github.io/
date: '2026-08-26'
tags:
- catchup
- database-modernization
- distributed-cache
- hn
- polywire
- postgres-gateway
- protocol-translation
- sql-firewall
section: databases
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49454777'
comments: https://news.ycombinator.com/item?id=49454777
why_read: This text introduces PolyWire, an intelligent gateway that centralizes control
  for Postgres databases. Readers will learn how it enables seamless database modernization
  and consistent policy enforcement across diverse client protocols.
authors:
- kumarrajamani
---

PolyWire introduces an intelligent gateway for Postgres that fundamentally changes how you can interact with and scale your database. This is not just another proxy; it offers live semantic execution translation, enabling clients using Oracle, MySQL, SQL Server, MongoDB, or even gRPC protocols to connect directly to Postgres without driver changes.

Beyond protocol flexibility, PolyWire provides a comprehensive control plane: a SQL firewall, QoS admission, routing, connection pooling, sharding, and planned/unplanned failover. It also includes a distributed cache, ensuring that results cached via one protocol can be served to any other. The detailed eight-stage pipeline for request processing highlights the depth of its architectural design.

This gateway offers a blueprint for modernizing existing database systems and building highly scalable, secure, and observable Postgres infrastructure, effectively solving complex integration and performance challenges at the network edge.
