---
title: Unpartitioned large Postgres tables are a common source of outages
source: hn
url: https://planetscale.com/blog/dealing-with-large-tables-in-postgres
date: '2026-08-27'
tags:
- cascade-delete
- catchup
- database-outage
- hn
- large-tables
- partitioning
- postgresql
- replica-lag
- wal
section: databases
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49465816'
comments: https://news.ycombinator.com/item?id=49465816
why_read: This post explains how large, unpartitioned Postgres tables, particularly
  with cascade deletes, can lead to database outages. Readers will learn about the
  mechanisms causing these issues and potential solutions like partitioning.
authors:
- Simeon Griggs
---

Large tables in Postgres are not just slow; they can trigger cascading outages, as this PlanetScale blog post meticulously explains. A particularly insidious scenario involves cascade deletes on tables with foreign keys, leading to Write-Ahead Log (WAL) saturation and replica lag. This can quickly degrade into a full primary overload.

The article provides a clear example of how deleting a small number of rows from a parent table can translate to hundreds of thousands of deletions in a large child table. Each deletion generates WAL, exhausting network and CPU resources between primary and replicas. This forces all reads to the already busy primary, creating a bottleneck and a system-wide outage. 

Understanding these internal Postgres mechanisms is crucial for robust system design. The insights here, particularly around identifying and mitigating these specific failure modes using techniques like partitioning, are immediately actionable for any engineer managing high-scale Postgres deployments.
