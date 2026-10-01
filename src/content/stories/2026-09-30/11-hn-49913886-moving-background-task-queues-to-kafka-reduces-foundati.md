---
title: Moving background task queues to Kafka reduces FoundationDB load
source: hn
url: https://www.tigrisdata.com/blog/quick-fdb-kafka/
date: '2026-09-30'
tags:
- catchup
- dual-write-problem
- foundationdb
- hn
- kafka
- message-queues
- task-scheduling
section: databases
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49913886'
comments: https://news.ycombinator.com/item?id=49913886
why_read: Read this to understand the practical performance trade-offs of implementing
  message queues inside a database versus adopting dedicated streaming brokers. You
  will learn how offloading task scheduling helps eliminate resource contention with
  user-facing workloads.
authors:
- bootlegbilly
image: /infographics/11-hn-49913886.jpg
---

Using a transactional database as a message queue solves the dual-write problem cleanly, but it comes with a hidden architectural cost at scale. Tigris initially ran their entire task queuing infrastructure inside FoundationDB using the QuiCK pattern, keeping transactions unified and ACID compliant across tenants and metadata.

Over time, scheduling operations created massive read and write contention that competed directly with live user requests. Every single task required multiple distinct writes across enqueue, claim, and lease phases, driving up storage engine pressure and forcing developers to maintain bespoke queue semantics.

To resolve this, the team split their queue workloads. High-volume, asynchronous background tasks such as garbage collection were migrated off FoundationDB and onto Kafka, keeping transactional state intact while removing contention from the primary database path.

Databases excel at transactional guarantees, but dedicated log-based streams remain the right tool for high-throughput background processing.
