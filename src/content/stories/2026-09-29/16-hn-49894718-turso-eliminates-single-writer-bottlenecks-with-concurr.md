---
title: Turso eliminates single-writer bottlenecks with concurrent writes
source: hn
url: https://turso.tech/blog/turso-0.8.0
date: '2026-09-29'
tags:
- catchup
- concurrent-writes
- hn
- sqlite
- transaction-latency
- turso
- write-throughput
section: databases
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49894718'
comments: https://news.ycombinator.com/item?id=49894718
why_read: Learn how Turso addresses SQLite's single-writer bottleneck using concurrent
  transactions to dramatically reduce tail latency and scale write throughput.
authors:
- Pekka Enberg
---

SQLite is celebrated for its blazingly fast read throughput, but its traditional single-writer locking model turns into a severe bottleneck under heavy concurrency. When multiple clients issue writes at the same time, transactions serialize and queue up, causing latency tails to spike dramatically.

Turso 0.8 tackles this constraint head-on by implementing BEGIN CONCURRENT on top of an asynchronous I/O architecture. Instead of blocking until previous write transactions fully commit, transactions can execute concurrently, validating conflict safety at commit time.

The benchmark numbers reflect a dramatic shift in behavior. Under a Poisson workload of 1,000 transactions per second across 32 concurrent connections, the 99.9th percentile latency dropped from 1.2 seconds down to 2.4 milliseconds, representing a 500-fold reduction in tail latency. At 64 connections, concurrent write throughput scaled to 9,500 transactions per second compared to 1,370 on standard SQLite.

Decoupling concurrency from database storage constraints enables SQLite engines to power serious transactional backends without hitting the classic single-writer ceiling.
