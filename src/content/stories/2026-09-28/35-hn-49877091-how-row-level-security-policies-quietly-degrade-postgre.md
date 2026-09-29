---
title: How row-level security policies quietly degrade Postgres performance
source: hn
url: https://engineering.myhoai.com/posts/debugging-postgres-performance-under-row-level-security/
date: '2026-09-28'
tags:
- bypassrls
- catchup
- explain-plan
- hn
- postgres
- query-optimization
- row-level-security
section: databases
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 6
hn_id: '49877091'
comments: https://news.ycombinator.com/item?id=49877091
why_read: Understand how row-level security predicates can silently trigger severe
  database performance bottlenecks. You will learn why standard EXPLAIN queries miss
  these issues when debugging under privileged roles.
authors:
- Zhixuan Lai
---

Row-Level Security (RLS) in PostgreSQL is conceptually simple: the engine injects your security policy as an implicit WHERE clause on every table access. However, running standard EXPLAIN queries during an incident can easily send you down the wrong path.

When testing queries locally or in read-only shells, engineers often use privileged roles that possess BYPASSRLS or table ownership. Postgres silently skips RLS evaluation for these accounts. Your EXPLAIN plan will report optimal index scans and fast execution times, even while production queries are pegging CPU at 80 percent under identical workloads.

To diagnose true query performance under RLS, you must explicitly run EXPLAIN within the target tenant session or use SET ROLE to match application authorization. A missing subquery index or an unoptimized policy function can degrade full table scans on millions of rows without ever appearing in your standard administrative diagnostic traces.

Always verify execution plans under the exact non-privileged database role used by your application workers.
