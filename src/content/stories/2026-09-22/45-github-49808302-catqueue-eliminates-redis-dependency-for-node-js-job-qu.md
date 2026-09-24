---
title: CatQueue eliminates Redis dependency for Node.js job queuing using PostgreSQL
source: github
url: https://github.com/karanrajsurya/CatQueue
date: '2026-09-22'
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
novelty_score: 8
hn_id: '49808302'
comments: https://news.ycombinator.com/item?id=49808302
why_read: Readers should explore CatQueue to learn about a robust, PostgreSQL-native
  job queue for Node.js that removes the need for Redis, offering competitive performance
  and advanced features like idempotency and crash recovery.
authors:
- karanrajsurya
---

You do not always need Redis for job queuing. CatQueue demonstrates that you can build a robust, high-performance job queue entirely within PostgreSQL for Node.js applications, significantly reducing your infrastructure complexity.

This project goes deep, leveraging PostgreSQL's transactional capabilities and features like SELECT FOR UPDATE SKIP LOCKED for atomic job processing and crash recovery. It provides built-in idempotency keys and a detailed error log, addressing common distributed systems challenges.

For engineers already committed to PostgreSQL, this offers a compelling alternative to adding another dependency like Redis or external message brokers. It benchmarks favorably against popular solutions like BullMQ, proving that a single database approach can be both efficient and reliable. This could simplify your stack and improve developer productivity.

Simplify your distributed system architecture by maximizing your existing database.
