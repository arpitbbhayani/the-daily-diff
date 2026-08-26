---
title: WAL and S3 enable lighter Postgres for agent workloads
source: hn
url: https://neon.com/blog/wal-s3-lakebase-storage-for-the-era-of-agents
date: '2026-08-24'
tags:
- agent-workloads
- catchup
- hn
- object-storage
- postgres
- s3
- transaction-centric
- wal
section: databases
interest_score: 8
depth_score: 9
utility_score: 8
novelty_score: 8
hn_id: '49426388'
comments: https://news.ycombinator.com/item?id=49426388
why_read: This article explains how treating Postgres's Write-Ahead Log (WAL) as the
  source of truth, combined with S3 object storage, creates a lighter, more efficient
  database architecture. You will learn how this 'lakebase' approach shifts from a
  data-centric to a transaction-centric model, specifically benefiting modern agent-based
  workloads that require operations on historical data.
authors:
- Carlota Soto
---

Neon is fundamentally rethinking PostgreSQL storage by treating WAL as the ultimate source of truth on S3. This 'lakebase' approach shifts from a data-centric to a transaction-centric model, offering massive advantages, especially for emerging agent workloads.

Traditional OLTP databases are heavy, but by offloading state to S3 and deriving current state from the WAL timeline, Neon provides isolated copies for agents, point-in-time recovery, and cost-effective scaling. This dramatically reduces friction in deployments, copies, and restores.

This architectural paradigm challenges conventional wisdom and provides a blueprint for scalable, agent-friendly database infrastructure. It is a deep dive into how core database design can adapt to the demands of modern AI applications.
