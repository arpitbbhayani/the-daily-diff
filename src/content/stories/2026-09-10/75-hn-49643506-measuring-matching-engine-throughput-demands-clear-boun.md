---
title: Measuring Matching Engine Throughput Demands Clear Boundaries
source: hn
url: https://www.ovasylenko.com/blog/matching-engine-performance-benchmarking
date: '2026-09-10'
tags:
- benchmarking
- catchup
- hn
- matching-engine
- measurement-boundaries
- throughput
section: systems
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49643506'
comments: https://news.ycombinator.com/item?id=49643506
why_read: This article explains why matching engine performance numbers can be misleading.
  It demonstrates how different measurement boundaries yield vastly different throughput
  figures for the same system, highlighting the need for clear definitions.
authors:
- _alphageek
---

A crypto exchange matching engine, benchmarked on the same machine on the same afternoon, yielded throughput numbers ranging from 130,000 operations per second to a mere 106 per second. This article exposes why such a massive disparity is not contradictory but rather a crucial lesson in system performance measurement.

The key insight is defining the boundary of "throughput." Are you measuring pure CPU-bound computation, or are you including durable state commits, broker-confirmed outbox delivery, and client round trips? Each layer of system interaction introduces orders of magnitude of overhead.

This is a critical reminder for any engineer designing or evaluating scalable systems. You cannot trust any benchmark number without understanding exactly what it encompasses. Benchmarking is not just about raw speed, it is about precisely defining the scope of work measured.

Always ask what is inside the stopwatch.
