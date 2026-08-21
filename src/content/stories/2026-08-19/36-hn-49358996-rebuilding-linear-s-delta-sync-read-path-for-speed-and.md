---
title: Rebuilding Linear's delta sync read path for speed and predictability
source: hn
url: https://linear.app/now/rebuilding-delta-sync-read-path
date: '2026-08-19'
tags:
- catchup
- delta-sync
- hn
- local-first-application
- permission-aware-filtering
- read-path
- sync-actions
- turbopuffer
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49358996'
comments: https://news.ycombinator.com/item?id=49358996
why_read: This article details how Linear rebuilt its delta sync read path to maintain
  speed and predictability for large local-first applications. Readers will learn
  about the challenges of scaling data synchronization and permission filtering, and
  how turbopuffer was used to solve these issues.
authors:
- Peter Travers
---

Scaling a local-first application like Linear, where clients maintain their own databases, presents unique challenges when it comes to delta synchronization. Rebuilding a read path for millions of sync actions daily, while ensuring permission-aware filtering, is a non-trivial system design problem.

Linear's solution is particularly insightful: they adopted Turbopuffer, a vector database, not for its typical semantic search, but to perform highly efficient, permission-aware set intersections on their application-level log. This is a creative re-imagining of a vector database's utility.

The article details how each change creates a sync action, forming an immutable log that clients replay. The core challenge was filtering this log by user access and subscriptions 

This is a compelling case study in system architecture, demonstrating how a deep understanding of bottlenecks and alternative data structures can lead to elegant, high-performance solutions for distributed synchronization.
