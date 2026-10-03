---
title: Offloading database queues to Kafka reduces FoundationDB transaction load
source: hn
url: https://www.tigrisdata.com/blog/quick-fdb-kafka/
date: '2026-10-02'
tags:
- asynchronous-tasks
- catchup
- dual-write-problem
- foundationdb
- hn
- kafka
- message-queues
section: databases
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49936010'
comments: https://news.ycombinator.com/item?id=49936010
why_read: Read this to understand the concrete architectural trade-offs of using a
  database as a message queue versus a dedicated streaming broker. You will learn
  how task scheduling, scanning, and custom queuing logic create database contention
  at scale.
authors:
- ibobev
---

Using a transactional database as a task queue is tempting because it eliminates dual-write anomalies. Keeping task state alongside application data inside FoundationDB allowed Tigris to handle metadata and asynchronous operations with strict consistency, following Apple's QuiCK architecture.

However, transactional queues introduce hidden operational debt as traffic scales. Task scheduling requires frequent scans, leasing steps, and state updates that compete directly with user-facing queries for read and write capacity. Every queued job demands multiple database round trips just to enqueue, lease, and complete.

To resolve this bottleneck, Tigris offloaded decoupled, high-volume tasks such as garbage collection to Kafka. Retaining critical transactional workflows in the database while offloading background operations to a dedicated log keeps core storage latency low.

Choosing between database queues and message brokers is rarely binary, and separating workloads based on contention characteristics yields the best balance.
