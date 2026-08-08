---
title: CatQueue offers a Redis-free, PostgreSQL-native job queue for Node.js
source: github
url: https://github.com/karanrajsurya/CatQueue_npm_package
date: '2026-08-06'
tags:
- benchmarking
- catchup
- github
- idempotency
- job-queue
- node.js
- postgresql
- redis-free
section: databases
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49202586'
comments: https://news.ycombinator.com/item?id=49202586
why_read: This text introduces CatQueue, a PostgreSQL-native job queue, and explains
  why it's a compelling alternative to Redis-based solutions like BullMQ, especially
  for Node.js projects already using PostgreSQL. Readers will learn about its unique
  features and benefits.
authors:
- karanrajsurya
---

Building reliable job queues often means adding Redis to your stack. What if you could simplify that to just PostgreSQL and gain robust features like idempotency and atomic job locking right out of the box?

CatQueue, a new Node.js and TypeScript job queue, does exactly that. It ditches Redis by leveraging PostgreSQL's transactional guarantees, specifically SELECT FOR UPDATE SKIP LOCKED, for critical operations. This means built-in idempotency keys, per-attempt error logging directly in Postgres, and seamless crash recovery.

This is not just a basic queue; it demonstrates how powerful database primitives can be for foundational system components. If you are already running PostgreSQL, this approach simplifies your infrastructure and potentially boosts reliability, eliminating an entire dependency layer.

You can achieve strong guarantees and a streamlined architecture without adding a dedicated broker.
