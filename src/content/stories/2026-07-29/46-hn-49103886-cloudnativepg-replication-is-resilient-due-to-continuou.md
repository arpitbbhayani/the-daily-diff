---
authors:
- Nikolay Sivko
comments: https://news.ycombinator.com/item?id=49103886
date: '2026-07-29'
depth_score: 8
hn_id: '49103886'
image: /infographics/46-hn-49103886.jpg
interest_score: 8
novelty_score: 7
section: databases
source: hn
tags:
- catchup
- chaos-mesh
- cloudnativepg
- hn
- postgresql-replication
- wal-archiving
title: CloudNativePG replication is resilient due to continuous WAL archiving
url: https://coroot.com/blog/fencing-a-cnpg-replica/
utility_score: 8
why_read: Read this to understand why CloudNativePG replication is surprisingly resilient
  and how continuous WAL archiving plays a key role in maintaining standby health.
  You will learn about the underlying mechanisms that prevent a Postgres replica from
  falling behind.
---

Trying to intentionally break PostgreSQL replication in a CloudNativePG setup proved surprisingly difficult, revealing fascinating depths of its resilience. If you have ever tried to get a replica to fall behind a primary, you know it should be simple, but it was not.

The secret lies in CloudNativePG's continuous WAL archiving to object storage. Even when network connectivity between a primary and replica is severed, the replica often catches up almost instantly once reconnected. This is because the primary continues to compress and ship WAL segments to an S3 bucket, creating an independent, highly durable recovery path.

This mechanism ensures that replicas do not just rely on direct streaming but can also recover from a consistent, external log. This deep dive offers critical insights for anyone operating or designing systems with PostgreSQL, particularly in Kubernetes, on how robust recovery and high availability are truly achieved.