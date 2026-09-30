---
title: Replica-aware routing enables consistent state across ClickHouse replicas
source: hn
url: https://clickhouse.com/blog/replica-aware-routing-public-beta
date: '2026-09-29'
tags:
- catchup
- clickhouse
- hn
- load-balancing
- read-after-write-consistency
- replica-aware-routing
- temporary-tables
section: databases
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49900553'
comments: https://news.ycombinator.com/item?id=49900553
why_read: Understand how replica-aware routing maintains access to temporary tables
  and enables read-after-write consistency across multi-replica ClickHouse deployments.
authors:
- Amy Chen
- Jan Mensch
---

In distributed database architectures, load balancing queries across read replicas often breaks temporary tables and session state. Because ClickHouse stores temporary tables and named sessions exclusively on the node where they were initialized, subsequent queries routed to another replica fail with missing object errors.

ClickHouse solves this with replica-aware routing. By attaching a consistent tag via an HTTP header or TLS SNI value, client requests are deterministically pinned to the exact replica that holds their session state.

This simple routing mechanism eliminates session fragmentation and provides practical read-after-write consistency without adding distributed locking overhead.
