---
title: StackGres overcomes Citus single coordinator limits with query routers
source: hn
url: https://stackgres.io/blog/scaling-citus-beyond-one-coordinator-announcing-query-routers-stackgres/
date: '2026-10-09'
tags:
- catchup
- citus
- coordinator-bottleneck
- hn
- horizontal-scaling
- query-routers
- sharding
section: databases
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '50025629'
comments: https://news.ycombinator.com/item?id=50025629
why_read: Learn how StackGres uses dedicated query routers to eliminate the single-coordinator
  bottleneck in Citus without causing resource contention on worker nodes.
authors:
- "\xC1lvaro Hern\xE1ndez"
---

A single coordinator node has long been the primary bottleneck when scaling sharded PostgreSQL clusters with Citus. While worker nodes scale horizontally with ease, the single coordinator must handle every client connection, parse and plan statements, dispatch shards, and aggregate results.

Citus 11 attempted to address this limitation by allowing workers to act as coordinators. However, that design forces distributed query planning and raw data processing to fight for the exact same CPU and memory resources on worker nodes.

The introduction of dedicated Query Routers in StackGres decouples this architecture. Instead of burdening workers or hitting a coordinator ceiling, stateless query routing nodes sit in front of the cluster to plan and fan out queries across workers.

This separation of routing and storage turns coordinator capacity into an independently scalable tier. Backend teams running massive multi-tenant Postgres deployments can now scale throughput linearly without saturating their worker nodes.
