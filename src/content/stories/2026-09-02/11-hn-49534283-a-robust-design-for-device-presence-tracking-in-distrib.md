---
title: A Robust Design for Device Presence Tracking in Distributed Systems
source: hn
url: https://zenodo.org/records/21717242
date: '2026-09-02'
tags:
- catchup
- distributed-systems
- hn
- offline-event
- presence-tracking
- redis-zset
- stateless-backends
section: systems
interest_score: 9
depth_score: 9
utility_score: 9
novelty_score: 8
hn_id: '49534283'
comments: https://news.ycombinator.com/item?id=49534283
why_read: This paper presents a robust design for connection-agnostic presence tracking
  in stateless distributed backends. Readers will learn how to implement a resilient
  system using Redis Sorted Sets that prevents missed offline events, unlike traditional
  TTL or pub/sub methods.
authors:
- Upmanyu, Siddhant Kumar
---

Building reliable presence tracking for distributed, stateless backends, especially with fluctuating IoT device connections, is notoriously hard. Common approaches like Redis TTL are imprecise, and pub/sub can be lossy upon failure, leading to permanently missed offline events.

This paper introduces an elegant, robust design using a sharded Redis sorted set (ZSET) that scores each device by its computed expiry deadline. The system employs throttled, batched writes and an independent process that pulls stale entries, ensuring an offline event is never missed due to runner failures.

The key is an asymmetric guarantee: an entry is only removed *after* an offline event attempt, providing a persistent artifact for retry on crashes. This innovative approach to state management makes your distributed presence system significantly more resilient.
