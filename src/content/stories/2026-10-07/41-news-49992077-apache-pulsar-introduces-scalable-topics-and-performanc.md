---
title: Apache Pulsar introduces scalable topics and performance upgrades
source: news
url: https://pulsar.apache.org/blog/2026/10/05/announcing-apache-pulsar-5-0/
date: '2026-10-07'
tags:
- apache-pulsar
- catchup
- news
- oxia
- scalable-topics
- zookeeper
section: systems
is_news: true
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49992077'
comments: https://news.ycombinator.com/item?id=49992077
why_read: Learn how Apache Pulsar 5.0 introduces auto-scaling topics and an independent
  upgrade path that improves existing workloads without breaking changes.
authors:
- olavgg
---

Managing partitioned topics in high-throughput streaming systems has always required frustrating capacity planning. If traffic spikes or hot keys emerge, operators must manually repartition, often breaking consumption order or stalling consumers while balancing partitions.

Apache Pulsar 5.0 addresses this persistent bottleneck with Scalable Topics, a native mechanism that dynamically expands and contracts with incoming throughput while strictly preserving per-key ordering. Unlike traditional static partitioning where sizing mistakes hurt latency, Scalable Topics adjust partition counts on demand without manual broker intervention.

In addition to elastic scaling, this release introduces Oxia as the new default metadata layer to replace ZooKeeper. Oxia decouples metadata storage from consensus limits, allowing clusters to scale beyond millions of individual topics without metadata bottlenecks. The upgrade is non-breaking, allowing existing v4 clients to run side by side with the new v5 client API.

Elastic topic scaling without sacrificing strict key ordering finally removes one of the biggest operational headaches in distributed stream processing.
