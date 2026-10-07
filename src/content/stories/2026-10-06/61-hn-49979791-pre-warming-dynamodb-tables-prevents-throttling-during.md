---
title: Pre-warming DynamoDB tables prevents throttling during high traffic launches
source: hn
url: https://awsfundamentals.com/blog/dynamodb-warm-throughput
date: '2026-10-06'
tags:
- catchup
- dynamodb
- hn
- on-demand-capacity
- throttling
- warm-throughput
- write-capacity-units
section: databases
is_news: false
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49979791'
comments: https://news.ycombinator.com/item?id=49979791
why_read: Understand the exact scaling latency and throttling limits of fresh on-demand
  DynamoDB tables under burst workloads. Learn how to configure warm throughput to
  handle high-volume write traffic without dropped requests.
authors:
- Dmitriy
---

A fresh on-demand Amazon DynamoDB table will cap out at approximately 4,000 write capacity units per second before throttling incoming traffic. If your service experiences an immediate surge past that baseline, on-demand autoscaling takes roughly 16 minutes of sustained throttling to partition and scale out.

Step testing up to 12,000 writes per second shows that fresh tables hit a hard ceiling at 4,000 requests per second while dropping subsequent writes. In contrast, configuring the WarmThroughput property directly on the table pre-allocates partitions, allowing the storage engine to absorb 12,000 writes per second instantly with zero throttled requests.

Transitioning from provisioned capacity down to on-demand also preserves existing table partitioning, but using WarmThroughput directly provides predictable capacity planning during major migrations, backfills, or high-concurrency production deployments.

Never assume on-demand cloud databases autoscale instantly without understanding initial partition boundaries and pre-warming mechanisms.
