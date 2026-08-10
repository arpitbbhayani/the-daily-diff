---
title: Blockstor's reconciliation model improves scalability and recovery over LINSTOR
source: hn
url: https://cozystack.io/blog/2026/08/blockstor-linstor-compatible-storage-for-kubernetes/
date: '2026-08-08'
tags:
- blockstor
- catchup
- drbd
- go-programming
- hn
- kubernetes-storage
- linstor
- lvm
- reconciliation-pattern
- zfs
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49219348'
comments: https://news.ycombinator.com/item?id=49219348
why_read: Read this to understand Blockstor, a new Kubernetes block storage system,
  and its advantages over LINSTOR's architecture. You will learn how its reconciliation-based
  design improves scalability, data consistency, and automatic recovery.
authors:
- valyala
---

Rethinking Kubernetes storage with Blockstor: this project tackles a fundamental problem in distributed systems – how to manage state without introducing complexity. By ditching LINSTOR's request-based, polling model for a pure Kubernetes operator pattern, Blockstor significantly improves scalability and automatic recovery.

The key insight? Desired state lives entirely in CRDs, with reconcilers driving the cluster. This eliminates external databases, in-memory state loss on controller restarts, and node-side polling that can fall out of sync. It is a cleaner, more robust architecture for mission-critical block storage.

For senior engineers dealing with storage or building complex Kubernetes operators, this is a masterclass in applying core system design principles. You can use this for LVM and ZFS backends with DRBD replication, all while maintaining LINSTOR API compatibility.
