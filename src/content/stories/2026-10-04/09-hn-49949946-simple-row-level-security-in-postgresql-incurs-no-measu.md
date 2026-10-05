---
title: Simple row-level security in PostgreSQL incurs no measurable overhead
source: hn
url: https://now-next.nl/en/insights/row-level-security-performance-postgresql/
date: '2026-10-04'
tags:
- catchup
- database-indexing
- hn
- multi-tenancy
- postgresql
- query-performance
- row-level-security
section: databases
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 6
hn_id: '49949946'
comments: https://news.ycombinator.com/item?id=49949946
why_read: Understand the exact performance mechanics of PostgreSQL row-level security
  policies and learn how specific design patterns can introduce unexpected latency.
authors:
- plaur782
---

Row-level security in PostgreSQL has a reputation for adding hidden latency to multi-tenant workloads, but empirical benchmarks show the story is more nuanced. When an RLS policy is a direct column match like checking a session variable against a tenant identifier, the runtime cost is effectively zero. The database optimizer folds the policy directly into the existing composite index scan.

The real performance penalties appear when policy complexity increases. Looking up tenant memberships in subqueries or invoking volatile functions inside policies causes severe regressions. In a test dataset of two million records across one thousand tenants, poorly structured policies caused simple lookups to balloon from 0.2 milliseconds to over 40 milliseconds for large tenant partitions.

Another subtle pitfall is how query planning interacts with session variables. Generic plans may fail to leverage partition pruning or selective index paths if the tenant context changes dynamically across executions.

If you rely on PostgreSQL RLS for multi-tenant isolation, keep policies strictly indexable and avoid dynamic subquery evaluation in your security barrier.
