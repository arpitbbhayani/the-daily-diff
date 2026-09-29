---
title: Announcing blob-stream as a low-cost stateless Kafka alternative
source: hn
url: https://blog.bitdrift.io/post/blob-stream-kafka-alternative
date: '2026-09-28'
tags:
- blob-stream
- catchup
- hn
- kafka
- stateless-brokers
- stream-processing
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49877947'
comments: https://news.ycombinator.com/item?id=49877947
why_read: Learn how blob-stream addresses Kafka operational complexity and cloud networking
  costs by introducing stateless brokers with zero local storage.
authors:
- Matt Klein
image: /infographics/07-hn-49877947.jpg
---

Kafka has long been the standard for durable, high volume streaming, but running stateful brokers across multiple availability zones comes with significant network transfer bills and complex partition rebalancing operations.

Blob-stream introduces a stateless alternative designed specifically to eliminate cross-availability zone network costs and local disk operational overhead. Instead of pinning partition logs to broker storage, brokers remain stateless and offload persistence directly to cheap object storage while preserving familiar partition and consumer group semantics.

Producers hash records to partitions and route them to designated brokers, which ensure durability before acknowledgment. Consumers handle partition assignment and offset commits in a pattern nearly identical to standard Kafka client libraries.

Replacing local broker disks with object storage trades latency predictability for massive cost reductions and operational simplicity at high throughput.
