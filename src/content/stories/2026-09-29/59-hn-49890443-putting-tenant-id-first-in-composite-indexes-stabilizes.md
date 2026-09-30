---
title: Putting tenant id first in composite indexes stabilizes multi-tenant query
  performance
source: hn
url: https://now-next.nl/en/insights/multi-tenant-postgresql-indexes-tenant-id-first/
date: '2026-09-29'
tags:
- catchup
- composite-indexes
- database-indexing
- hn
- multi-tenancy
- postgresql
- query-performance
section: databases
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49890443'
comments: https://news.ycombinator.com/item?id=49890443
why_read: Learn why tenant distribution skew impacts query execution plans in multi-tenant
  databases. This benchmark demonstrates how placing tenant_id first in composite
  indexes prevents severe query degradation across different tenant sizes.
authors:
- hnrprtlpdb
---

In multi-tenant SaaS architectures, multi-tenant tables almost always suffer from heavy tenant skew. A naive composite index can silently degrade performance for either your smallest or largest customers.

Benchmarking two million rows across one thousand tenants revealed that indexing on (tenant_id, issued_on) fetched the fifty most recent records in 0.28 ms for a small tenant and 0.09 ms for the largest tenant. In contrast, an index on issued_on alone jumped to 26 ms for small tenants, while indexing tenant_id alone required 82 ms for the largest tenant due to broad page scans.

Placing tenant_id first guarantees that the query planner narrows the search boundary to a single tenant before traversing sorted order pages.
