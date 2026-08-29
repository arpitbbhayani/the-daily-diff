---
title: Flakiness.io stores test facts efficiently using interval unions
source: hn
url: https://blog.flakiness.io/posts/2026/engine/
date: '2026-08-27'
tags:
- analytics-engine
- catchup
- hn
- interval-unions
- query-optimization
- test-data-storage
section: engineering
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49470861'
comments: https://news.ycombinator.com/item?id=49470861
why_read: This article explains how Flakiness.io achieves unusual efficiency in storing
  and processing test data. Readers will learn about using interval unions for compact
  indexing and transforming dashboard filtering into set algebra.
authors:
- Andrey Lushnikov
---

Efficiently storing and querying test results at scale is a common pain point. Flakiness.io's analytics engine tackles this with a clever approach: representing test runs as "interval unions" over numeric test IDs. This makes the query index remarkably compact.

Imagine filtering your test data not as individual records but as set algebra operations on these compressed intervals. This design choice dramatically reduces storage and speeds up analytics, allowing the system to run unusually efficiently even on modest hardware.

It is a prime example of how thoughtful data structures and purpose-built engine design can solve real-world infrastructure bottlenecks. This offers a blueprint for handling similar large-scale event or time-series data efficiently.
