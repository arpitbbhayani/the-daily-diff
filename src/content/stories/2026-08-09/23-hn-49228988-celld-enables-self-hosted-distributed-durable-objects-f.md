---
authors:
- tosh
comments: https://news.ycombinator.com/item?id=49228988
date: '2026-08-09'
depth_score: 8
hn_id: '49228988'
image: /infographics/23-hn-49228988.jpg
interest_score: 8
novelty_score: 8
section: systems
source: hn
tags:
- catchup
- celld
- distributed-systems
- durable-objects
- failure-domain
- hn
- observability
- operational-control
- self-hosting
title: Celld enables self-hosted distributed Durable Objects for greater control
url: https://celld.dev/
utility_score: 7
why_read: Read this to understand how celld offers a self-hosted, distributed implementation
  of Durable Objects. You will learn how it improves operational control, defines
  explicit failure domains, and enhances system legibility compared to vendor-managed
  solutions.
---

Implementing distributed durable objects without the overhead of traditional consensus protocols, failure detectors, or membership services might sound impossible, but `celld` shows how it can be done.

This project leverages ubiquitous primitives like S3 buckets, SQLite, and LTX (a SQLite extension for transaction logs) to manage distributed state. Ownership is a simple, atomic write to S3, and state replication is continuous, shipping SQLite segments to the bucket.

This approach drastically simplifies the coordination layer, making the failure domain explicit and inspectable. If you need a robust, self-hosted distributed primitive and are tired of complex consensus algorithms, explore this unique design choice.