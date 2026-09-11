---
title: Diskless Kafka moves durable storage from brokers to object stores
source: hn
url: https://softwaremill.com/diskless-kafka-object-storage-kip-1150-and-kafkas-future/
date: '2026-09-09'
tags:
- apache-kafka
- brokers
- catchup
- data-streaming
- diskless-kafka
- hn
- object-storage
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49623332'
comments: https://news.ycombinator.com/item?id=49623332
why_read: This article explains the concept of Diskless Kafka, detailing how it leverages
  object storage in the cloud to decouple brokers from data ownership while preserving
  Kafka's core functionality. Readers will learn the architectural differences from
  classic Kafka and the current development status.
authors:
- "Micha\u0142 Mat\u0142oka"
---

Kafka is undergoing a fundamental architectural shift, with KIP-1150 proposing to decouple its brokers from direct data ownership by leveraging object storage. This "diskless Kafka" concept means your brokers would no longer manage durable payload storage locally. 

This is a game-changer for scalability and operational cost. Imagine scaling compute and storage independently, simplifying broker elasticity, and potentially reducing recovery times. The design still preserves ordering and offset tracking, critical for Kafka's guarantees.

Understanding this evolution is crucial for anyone building or operating large-scale data streaming platforms. It is a smart move that tackles cloud-native challenges head-on, redefining how we think about Kafka deployments.
