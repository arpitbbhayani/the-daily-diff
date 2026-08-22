---
authors:
- RabbitMQ Team
comments: https://news.ycombinator.com/item?id=49376467
date: '2026-08-20'
depth_score: 8
hn_id: '49376467'
image: /infographics/56-hn-49376467.jpg
interest_score: 8
novelty_score: 8
section: databases
source: hn
tags:
- apache-kafka
- catchup
- durable-log
- event-streaming
- hn
- messaging
- partitioned-streams
- queue-semantics
- rabbitmq
- streams
title: RabbitMQ and Kafka capabilities now substantially overlap
url: https://www.rabbitmq.com/docs/compare/kafka
utility_score: 9
why_read: This text provides an updated comparison of RabbitMQ and Apache Kafka, explaining
  how their features have converged. Readers will learn why the traditional distinction
  between these systems is now outdated and how their capabilities substantially overlap.
---

The classic "RabbitMQ for messaging, Kafka for streaming" advice is officially outdated. Both systems have evolved significantly, blurring the lines that once clearly separated their ideal use cases.

RabbitMQ introduced a durable, replicated log (Streams) in 2021, featuring append-only storage, offset-based positioning, and high throughput. This is not just a queue masquerading as a log; it is a designed-from-the-ground-up log with robust mechanical sympathies.

Conversely, Kafka gained explicit queue semantics with KIP-932 "Queues for Kafka" and share groups in 2026. This means Kafka can now handle traditional queueing patterns, offering ordered, partition-parallel consumption.

Understanding these convergences is critical for modern system design. Do not rely on old assumptions; both platforms now offer a much broader set of capabilities for building resilient, scalable systems.