---
title: WAL and S3 enable lighter Postgres by treating WAL as source of truth
source: hn
url: https://neon.com/blog/wal-s3-lakebase-storage-for-the-era-of-agents
date: '2026-08-25'
tags:
- agent-workloads
- catchup
- data-centric-model
- hn
- lakebase-storage
- object-storage
- postgres
- s3
- transaction-centric-model
- wal
section: databases
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49439091'
comments: https://news.ycombinator.com/item?id=49439091
why_read: This article explains how combining WAL and S3 for lakebase storage transforms
  Postgres from a heavy OLTP database into a lighter system. Readers will learn about
  shifting from a data-centric to a transaction-centric database model for agent-era
  workloads.
authors:
- Carlota Soto
---

Designing database storage for AI agents presents unique challenges. This deep dive into Neon's 'lakebase' architecture shows how treating Postgres WAL as the true source of truth, rather than data pages, unlocks significant benefits. It is a paradigm shift from traditional data-centric OLTP. 

By building on WAL and S3, this approach allows for operations like instant isolated copies and point-in-time recovery, which are critical for iterative agent development and testing. Imagine agents needing to experiment on a production snapshot and then revert or branch instantly.

This architecture does not just optimize storage; it fundamentally changes how databases can serve the dynamic, state-management needs of AI agents. It demonstrates how core database concepts can be re-imagined for new computational paradigms.
