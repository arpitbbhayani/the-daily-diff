---
authors:
- Michał Matłoka
comments: https://news.ycombinator.com/item?id=49650096
date: '2026-09-10'
depth_score: 9
hn_id: '49650096'
image: /infographics/04-hn-49650096.jpg
interest_score: 9
novelty_score: 8
section: systems
source: hn
tags:
- catchup
- cluster-topology
- data-replication
- datacenter-failover
- hn
- kafka-simulator
- kraft-quorum
- stretched-clusters
title: Kafka Simulator enhances support for stretched clusters and operational scenarios
url: https://monedula.dev/blog/kafka-simulator-v1-5-v1-6-stretched-clusters-storage-and-ops/
utility_score: 9
why_read: Read this to understand the new features in Kafka Simulator v1.5 and v1.6,
  particularly its support for stretched clusters across datacenters. You will learn
  the critical differences in failure handling between stretched and mirrored Kafka
  deployments.
---

Understanding Kafka's multi-datacenter deployments often hinges on the subtle but critical difference between mirrored pairs and stretched clusters. The latest Kafka Simulator updates (v1.5 & v1.6) provide invaluable insights into the latter.

In a stretched cluster, replication is synchronous, and the In-Sync Replica (ISR) itself spans the WAN. This means losing a datacenter is treated as a replication event, not a failover. Your ability to write depends entirely on `min.insync.replicas`.

The simulator now includes detailed scenarios like 3-DC and 2.5-DC stretched clusters, explaining how KRaft quorum is distributed across sites. For instance, in a 3-DC setup, losing one voter still leaves two to form a majority, ensuring the cluster continues making decisions.

This is fundamental knowledge for any senior engineer designing or operating resilient, geo-distributed Kafka systems. It moves beyond abstract concepts to concrete operational scenarios.