---
authors:
- Carlota Soto
comments: https://news.ycombinator.com/item?id=49481942
date: '2026-08-28'
depth_score: 8
hn_id: '49481942'
image: /infographics/39-hn-49481942.jpg
interest_score: 8
novelty_score: 8
section: databases
source: hn
tags:
- agent-workloads
- catchup
- database-storage
- hn
- lakebase-storage
- postgres
- s3
- transaction-centric-model
- wal
title: Treating WAL as the source of truth optimizes Postgres with S3
url: https://neon.com/blog/wal-s3-lakebase-storage-for-the-era-of-agents
utility_score: 8
why_read: This post explains how treating the Write-Ahead Log as the source of truth,
  combined with S3 object storage, fundamentally changes how OLTP databases like Postgres
  operate. Readers will learn how this approach makes databases lighter and more efficient
  for agent-driven applications by shifting from a data-centric to a transaction-centric
  model.
---

The traditional view of databases as collections of current state is being challenged, especially by the demands of AI agent workloads. Neon's 'lakebase' architecture, combining Postgres's WAL with S3, flips this by treating the WAL as the sole source of truth.

This shift from a data-centric to a transaction-centric model has profound implications. Instead of moving massive data volumes for copies or restores, you operate on a timeline of changes, making operations like creating isolated copies for agents or point-in-time recovery incredibly efficient and less costly.

Imagine granting each AI agent a private, branched version of your production database for its specific tasks, then merging or discarding changes effortlessly. This is not just a theoretical concept; it is a practical blueprint for building scalable, history-aware data systems tailored for the 'era of agents'. Engineers grappling with database friction, especially around state management for complex AI systems, will find a lot to unpack here.