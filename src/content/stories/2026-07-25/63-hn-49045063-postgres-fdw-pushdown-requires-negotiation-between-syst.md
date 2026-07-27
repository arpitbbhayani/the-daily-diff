---
authors:
- Kaushik Iska
- David Wheeler
- Philip Dubé
comments: https://news.ycombinator.com/item?id=49045063
date: '2026-07-25'
depth_score: 8
hn_id: '49045063'
image: /infographics/63-hn-49045063.jpg
interest_score: 8
novelty_score: 7
section: databases
source: hn
tags:
- catchup
- clickhouse
- foreign-data-wrapper
- hn
- postgres-fdw
- pushdown
title: Postgres FDW pushdown requires negotiation between systems
url: https://clickhouse.com/blog/postgres-fdw-pushdown-negotiation
utility_score: 8
why_read: Understand the complexities of data pushdown in Postgres Foreign Data Wrappers
  and why it involves a 'negotiation' between Postgres and remote services rather
  than simple data transfer.
---

Foreign Data Wrappers (FDWs) are powerful, but their performance hinges on one critical question: how much of a query can you push down to the remote service versus how many rows do you drag back? This is not a simple "send everything" answer.

The ClickHouse team details the intricate "negotiation" involved in pg_clickhouse FDW. They explain that some clauses can be pushed, some require rewriting, and sometimes it is better not to push down specific operations due to unforeseen complexities.

This deep dive reveals the engineering trade-offs when optimizing data transfer and computation across federated systems. It offers invaluable insights for anyone building or operating distributed data architectures.