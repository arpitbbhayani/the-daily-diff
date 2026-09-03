---
title: Lakebase Postgres autoscales through separated compute and storage
source: hn
url: https://www.databricks.com/blog/autoscaling-lakebase-postgres
date: '2026-09-01'
tags:
- autoscaling
- catchup
- compute-layer
- decoupled-architecture
- hn
- postgresql
- storage-layer
- vm-resizing
section: databases
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49527033'
comments: https://news.ycombinator.com/item?id=49527033
why_read: This article details how Lakebase Postgres achieves autoscaling by decoupling
  compute from storage and utilizing in-place VM resizing. Readers will learn the
  core architectural requirements and the mechanisms enabling responsive capacity
  adjustments without stopping the database.
authors:
- shenli3514
---

Designing for autoscaling in stateful services like PostgreSQL is a significant challenge, but Neon's Lakebase Postgres provides a compelling solution. They achieve this by architecturally decoupling compute from storage.

This separation allows for seamless, in-place VM resizing of the compute layer without needing to move the durable state. The autoscaling algorithm intelligently monitors CPU, memory, and the database's working set to determine when to adjust capacity up or down.

This approach offers deep insights into building highly elastic, cloud-native database systems. It is not just about scaling, but about doing so responsively and without disrupting live workloads.
