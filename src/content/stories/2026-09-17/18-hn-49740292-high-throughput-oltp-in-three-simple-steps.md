---
title: High-Throughput OLTP in Three Simple Steps
source: hn
url: https://tigerbeetle.com/blog/2026-09-17-performant-use-of-tigerbeetle/
date: '2026-09-17'
tags:
- autobatching
- catchup
- data-modeling
- double-entry-accounting
- hn
- oltp
- performance-optimization
- tigerbeetle
- time-based-identifiers
section: databases
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49740292'
comments: https://news.ycombinator.com/item?id=49740292
why_read: 'This text demonstrates how to achieve a 100x performance improvement when
  migrating OLTP workloads from general-purpose SQL to TigerBeetle. It details three
  specific techniques: choosing the right data model, utilizing autobatching, and
  using time-based identifiers.'
authors:
- maxi-k
---

Are you translating your OLTP workloads directly from SQL to specialized databases? You might be leaving 100x performance on the table. TigerBeetle, a transaction-processing database, shows how to achieve massive throughput gains by rethinking data models.

The key lies in embracing double-entry accounting primitives, utilizing autobatching, and employing time-based identifiers. Instead of mapping a bank's transactions one-to-one from SQL, model them as linked transfers to dramatically reduce contention on hot accounts, branches, or tellers.

This approach delivers not just speed but also integrity. It is a masterclass in optimizing for transaction density and a powerful lesson in database system design for anyone building high-scale financial or ledger-based services.
