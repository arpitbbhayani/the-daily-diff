---
authors:
- radimm
comments: https://news.ycombinator.com/item?id=49085050
date: '2026-07-28'
depth_score: 9
hn_id: '49085050'
image: /infographics/25-hn-49085050.jpg
interest_score: 8
novelty_score: 7
section: databases
source: hn
tags:
- catchup
- data-versioning
- database-design
- hn
- mvcc
- postgresql
- transaction-management
- write-amplification
title: PostgreSQL MVCC is flawed, yet other databases also make versioning tradeoffs
url: https://boringsql.com/posts/mvcc-bad-bad/
utility_score: 8
why_read: This article dissects the common criticisms of PostgreSQL's MVCC, explaining
  them as design choices rather than defects. Readers will learn how these issues
  arise and gain a comparative perspective on how other database systems manage data
  versioning.
---

PostgreSQL's MVCC often gets a bad rap for write amplification and bloat. But this article reveals a crucial insight: every database doing MVCC faces similar fundamental challenges, just with different trade-offs.

You will see how different systems like Oracle, InnoDB, SQL Server, MongoDB, and even LSM-trees manage old row versions, version chain directions, and garbage collection. This is not just a PostgreSQL problem; it is a universal problem in concurrency control.

Understanding these core design choices and their downstream effects on performance, storage, and operational overhead is critical for any senior engineer designing scalable systems. It frames MVCC not as a defect, but as a deliberate architectural choice with inherent costs that all systems must contend with.

It is about picking your poison wisely.