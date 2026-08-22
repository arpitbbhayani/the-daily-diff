---
title: S2C is a replicated state machine built atop S3
source: github
url: https://github.com/io-s2c/s2c/tree/main
date: '2026-08-20'
tags:
- catchup
- distributed-consensus
- github
- object-storage
- s3
- state-machine-replication
section: systems
interest_score: 9
depth_score: 9
utility_score: 8
novelty_score: 9
hn_id: '49378651'
comments: https://news.ycombinator.com/item?id=49378651
why_read: This describes S2C, a system for distributed consensus and state machine
  replication built on S3. Readers can learn about its core design and the use of
  S3 as a foundation for such a system.
authors:
- theanonymousone
---

Building distributed consensus on S3 sounds unconventional, and that is precisely what S2C 



— Shared Storage Consensus 



— is doing. Instead of traditional block storage or dedicated distributed file systems, S2C leverages S3's durability and global availability.

This approach presents fascinating challenges and opportunities in system design. How do you manage metadata, achieve strong consistency, and ensure performance when your fundamental storage layer is eventually consistent object storage? S2C promises insights into these trade-offs.

Engineers interested in resilient system architectures, especially those working with serverless or cost-optimized distributed databases, will find this project highly compelling. It offers a fresh perspective on how to leverage cloud primitives for foundational system reliability.
