---
authors:
- asenna
comments: https://news.ycombinator.com/item?id=49711486
date: '2026-09-15'
depth_score: 8
hn_id: '49711486'
image: /infographics/20-hn-49711486.jpg
interest_score: 8
novelty_score: 7
section: databases
source: hn
tags:
- catchup
- configuration-error
- database-performance
- debugging
- hn
- image-optimization
- memory-limits
- round-trips
title: Database query cost us four round-trips for six months
url: https://blog.simbastack.com/four-round-trips-six-months/
utility_score: 9
why_read: This article illustrates how a database configuration mistake led to significant
  performance overhead and misdiagnosis. It highlights the importance of thorough
  investigation in debugging complex system issues.
---

Imagine your database queries suddenly costing four times more network overhead for six months without realizing it. This postmortem details a stealthy performance killer: Prisma's `pgbouncer=true` setting when connected to Supabase's pgbouncer instance.

While pgbouncer is designed to optimize connections, enabling `pgbouncer=true` in Prisma forces a new connection from the pool for every single query, rather than reusing existing connections within a session. This happens because Prisma's internal logic, expecting transaction pooling, effectively bypasses the benefits of connection pooling on the pgbouncer side when used with session pooling.

The outcome? Four round-trips for every query: one for connection acquisition, one for the query, one for closing the transaction, and another for releasing the connection. This led to an 8-second availability check being slashed to 1.88 seconds after fixing the configuration. This is a critical lesson in understanding the interaction between ORMs and connection poolers at a deep protocol level.

Always scrutinize your connection pooling configurations, especially when layering tools.