---
title: Minimizing query router overhead by decoding data lazily
source: hn
url: https://planetscale.com/blog/designing-neki-for-performance
date: '2026-10-02'
tags:
- catchup
- database-performance
- hn
- lazy-decoding
- query-routing
- sharded-postgres
- wire-protocol
section: databases
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49930307'
comments: https://news.ycombinator.com/item?id=49930307
why_read: Learn how designing database middleware to lazily decode wire protocols
  reduces latency and CPU overhead. It offers practical architectural insights into
  building high-throughput database proxies.
authors:
- Dirkjan Bussink
---

When building a database proxy or sharding router, the biggest tax you pay is deserialization. Adding a hop between the client and database server is necessary to route queries and aggregate responses, but fully parsing incoming wire protocol payloads into memory objects destroys throughput.

PlanetScale took a lazy, zero-overhead approach when designing Neki, their Postgres sharding layer. Rather than eagerly decoding PostgreSQL message payloads into structured row types upfront, the proxy walks wire messages without constructing intermediate rows or parsing unneeded columns.

If the routing logic only needs a single key or metadata column to make a forwarding decision, it extracts that value and leaves the remaining row data untouched as raw protocol bytes.

Avoiding unnecessary work at the wire level is the most effective way to eliminate proxy latency.
