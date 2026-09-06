---
title: Spacetime achieves high performance by scaling parallelizable OLTP workloads
source: hn
url: https://spacetimedb.com/blog/how-does-spacetime-scale
date: '2026-09-04'
tags:
- catchup
- contention
- hn
- horizontal-scaling
- oltp
- scalability
- vertical-scaling
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49560452'
comments: https://news.ycombinator.com/item?id=49560452
why_read: This post explores the complexities of system scalability, detailing the
  distinctions between horizontal and vertical scaling. It explains how Spacetime
  effectively handles OLTP workloads with high performance, even under contention.
authors:
- sbysb
---

The question 'Does it scale?' is deceptively simple, but the answer is always complex. This article breaks down scalability across compute, storage, and networking, offering a crucial distinction often missed in high-level discussions of system design.

It dives deep into the inherent challenges faced by general-purpose, horizontally scaling OLTP databases like CockroachDB and Spanner. While these are impressive feats of engineering, the article meticulously explains how their design for strong transactional consistency often incurs enormous overhead per transaction, leading to surprisingly poor performance when faced with high contention.

You will learn why some mission-critical workloads demand a different architectural approach to ensure both consistency and high performance under contention. The discussion contrasts these systems with Spacetime's design choices, providing invaluable insights for anyone building or evaluating distributed database architectures and aiming for truly scalable services.
