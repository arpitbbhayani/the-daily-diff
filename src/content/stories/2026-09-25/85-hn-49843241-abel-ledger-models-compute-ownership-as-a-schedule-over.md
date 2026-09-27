---
title: Abel ledger models compute ownership as a schedule over time
source: hn
url: https://sfcompute.com/news/abel-ledger
date: '2026-09-25'
tags:
- catchup
- compute-settlement
- distributed-ledger
- hn
- resource-ownership
- time-modeling
section: systems
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 8
hn_id: '49843241'
comments: https://news.ycombinator.com/item?id=49843241
why_read: This text introduces Abel, a ledger system for settling compute resources
  that explicitly models time of delivery. Readers will understand how traditional
  ledger guarantees are maintained while adapting for time-based resource ownership.
authors:
- samuelselleck
---

Accounting for compute resources, especially node-hours over time, presents unique system design challenges. This article details "Abel," a novel ledger system that adapts double-entry accounting to this complex domain.

Unlike financial ledgers, compute ownership needs to factor in delivery time. Abel models this by having accounts hold a "schedule" of nodes over time rather than just a numerical balance. Every unit is owned by exactly one account, and every movement is recorded and auditable.

This design ensures full auditability and atomic transactions, even when dealing with forward-sold compute blocks years in advance. It is a powerful example of applying robust financial principles to a crucial distributed systems problem.

If you work on resource allocation or scheduling systems, this provides a compelling blueprint for building transparent and reliable infrastructure.
