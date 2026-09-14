---
title: Wide consumer fetches can paralyze a Kafka cluster
source: hn
url: https://alex.bularca.me/posts/anatomy-of-a-kafka-lock-convoy/
date: '2026-09-12'
tags:
- catchup
- consumer-fetch
- delayed-operation-purgatory
- hn
- kafka
- kafka-upgrade
- latency-metrics
- lock-convoy
- reentrant-lock
section: systems
interest_score: 9
depth_score: 9
utility_score: 9
novelty_score: 8
hn_id: '49671142'
comments: https://news.ycombinator.com/item?id=49671142
why_read: This article explains how wide Kafka consumer fetches can lead to a lock
  convoy, paralyzing a cluster and bypassing standard latency metrics, especially
  after a Kafka 2.7+ upgrade. Readers will learn about a specific performance pitfall
  in Kafka and its underlying mechanistic cause.
authors:
- Alex Bularca
---

A single Kafka consumer, fetching thousands of partitions, brought a 10-broker Kafka cluster to a standstill. This catastrophic performance degradation, triggered by a seemingly minor Kafka 2.7 upgrade, went completely unnoticed by broker latency metrics. 

The culprit was a hidden lock convoy within Kafka's DelayedOperationPurgatory. When a wide consumer fetch registered as a single DelayedFetch across all its partitions, every subsequent produce or fetch on any of those partitions would acquire the same ReentrantLock.

Critically, Kafka 2.7 changed this lock acquisition from a non-blocking attempt to a blocking call. This meant that 30 out of 36 request-handler threads could queue behind a single lock, saturating the request queue and causing network threads to stop reading sockets. The system's own metrics, unfortunately, did not account for time spent waiting in unread sockets.

You will learn about this specific and insidious Kafka bottleneck, the underlying mechanism that caused it, and why traditional monitoring tools failed to detect it. This deep dive into a real-world production incident provides invaluable lessons for debugging complex distributed systems.
