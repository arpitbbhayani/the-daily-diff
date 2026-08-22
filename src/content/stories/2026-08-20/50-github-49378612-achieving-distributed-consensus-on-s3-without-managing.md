---
title: Achieving Distributed Consensus on S3 Without Managing Quorums
source: github
url: https://github.com/io-s2c/s2c/blob/main/docs/design-doc.md
date: '2026-08-20'
tags:
- aws-s3
- catchup
- cp-system
- distributed-consensus
- fencing
- github
- quorum-less
- state-machine-replication
- strong-consistency
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49378612'
comments: https://news.ycombinator.com/item?id=49378612
why_read: This document introduces a novel state machine replication system built
  on AWS S3. Readers will learn how to achieve distributed consensus and strong consistency
  using S3's guarantees and a fencing-based model, eliminating traditional quorum
  management.
authors:
- mzazaipsc
---

Designing distributed consensus without managing quorums sounds like a fantasy, but a new approach leverages AWS S3's strong consistency for exactly this. This design document details S2C, a state machine replication system that uses S3's CAS-like semantics to achieve consensus.

This innovative model allows the system to maintain strong consistency and liveness with just a single available node and fully recover its state even if all nodes shut down. It redefines S3 from a mere object store into a foundational CP system for structured state.

It offers a genuinely novel alternative to traditional consensus protocols like Raft or Paxos, simplifying distributed system design in specific cloud environments. This read provides a practical blueprint for building robust, quorum-less distributed systems on existing cloud infrastructure.
