---
authors:
- masklinn
comments: https://news.ycombinator.com/item?id=49098417
date: '2026-07-29'
depth_score: 8
hn_id: '49098417'
image: /infographics/24-hn-49098417.jpg
interest_score: 8
novelty_score: 7
section: databases
source: hn
tags:
- catchup
- concurrency
- database-design
- hn
- mvcc
- postgresql
- vacuum
- write-amplification
title: MVCC downsides are inherent design choices, not defects
url: https://boringsql.com/posts/mvcc-bad-bad/
utility_score: 8
why_read: This text explains the fundamental design choices and trade-offs behind
  MVCC in PostgreSQL, contextualizing its perceived "badness" by comparing it to other
  database systems. Readers will learn that MVCC challenges are inherent to concurrent
  database design, not just a PostgreSQL flaw.
---

PostgreSQL's MVCC is often criticized, but this deep dive argues that all MVCC implementations come with their own set of unavoidable trade-offs. The "bad" aspects of Postgres like write amplification, table bloat, and the 32-bit transaction counter limit are not defects, but consequences of specific design choices.

The article systematically compares these choices with those in Oracle (undo logs), InnoDB, SQL Server, MongoDB (versions in cache), and even etcd (LSM-tree garbage collection). It highlights how each engine manages old row versions, version chain direction, index pointers, and cleanup mechanisms.

Understanding these fundamental architectural decisions is critical for any senior engineer working with databases. This piece will significantly enhance your ability to choose, troubleshoot, and optimize database systems by revealing the engineering compromises at their core.