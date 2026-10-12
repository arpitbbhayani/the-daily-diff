---
title: Query pushdown in Postgres foreign data wrappers requires negotiation
source: hn
url: https://clickhouse.com/blog/postgres-fdw-pushdown-negotiation
date: '2026-10-11'
tags:
- catchup
- clickhouse
- foreign-data-wrappers
- hn
- postgres-fdw
- query-pushdown
section: databases
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '50048857'
comments: https://news.ycombinator.com/item?id=50048857
why_read: Read this to understand the mechanistic trade-offs of query pushdown when
  bridging Postgres and ClickHouse. You will learn how foreign data wrappers balance
  remote query execution against raw row transfer.
authors:
- Kaushik Iska
- David Wheeler
- "Philip Dub\xE9"
---

Building a Postgres Foreign Data Wrapper to query an external analytics engine like ClickHouse sounds conceptually straightforward until query pushdown enters the picture. The core challenge is not establishing network connections, but deciding how much computation to delegate across the wire versus pulling raw rows back into the local engine.

When Postgres plans a query against an external foreign table, pushdown behaves like a delicate negotiation. Passing clauses such as WHERE, GROUP BY, or LIMIT directly to ClickHouse minimizes network transfer. However, semantic differences in functions, type coercion, and dialect subtleties mean that full pushdown can produce silent inconsistencies or invalid SQL.

The engineering team at ClickHouse found that successful pushdown requires three distinct strategies: direct delegation for native operations, on-the-fly SQL AST rewrites for partial mismatches, and intentional fallbacks to local execution when safe translation cannot be guaranteed.

Pushing work down is not an all-or-nothing switch; it is a fine-grained dialect translation problem.
