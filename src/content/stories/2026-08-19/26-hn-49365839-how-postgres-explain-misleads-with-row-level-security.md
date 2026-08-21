---
title: How Postgres EXPLAIN misleads with Row-Level Security
source: hn
url: https://engineering.myhoai.com/posts/debugging-postgres-performance-under-row-level-security/
date: '2026-08-19'
tags:
- catchup
- explain-plan
- hn
- performance-debugging
- postgres
- row-level-security
- security-context
section: databases
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49365839'
comments: https://news.ycombinator.com/item?id=49365839
why_read: This article reveals how a poorly written Row-Level Security policy can
  cripple Postgres performance. You will learn why standard EXPLAIN plans can be misleading
  in RLS contexts and the importance of debugging with the correct security permissions.
authors:
- Zhixuan Lai
---

Encountering mysterious Postgres CPU spikes? Row-Level Security (RLS) policies might be the silent culprit, and your usual debugging tools could be lying to you.

One team discovered an RLS policy was driving their production database to 80% CPU, yet `EXPLAIN` showed an efficient plan. The catch? `EXPLAIN` was run with a privileged role that bypassed RLS, masking the actual query execution cost for regular users.

This highlights a crucial debugging lesson: always ensure your `EXPLAIN` context mirrors the production workload's security and permissions. Understanding how RLS predicates translate into hidden `WHERE` clauses, and how roles with `BYPASSRLS` skew performance analysis, is essential. The fix ultimately dropped CPU from 80% to 16%.

Do not let your debugging tools mislead you; the context of your query execution matters more than you might think.
