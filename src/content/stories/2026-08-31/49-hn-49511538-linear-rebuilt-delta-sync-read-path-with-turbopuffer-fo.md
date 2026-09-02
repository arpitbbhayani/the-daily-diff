---
title: Linear rebuilt delta sync read path with Turbopuffer for performance
source: hn
url: https://linear.app/now/rebuilding-delta-sync-read-path
date: '2026-08-31'
tags:
- catchup
- delta-sync
- hn
- local-first-applications
- performance
- read-path
- sync-actions
- turbopuffer
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49511538'
comments: https://news.ycombinator.com/item?id=49511538
why_read: This article details how Linear optimized its delta sync read path using
  Turbopuffer to handle large, permission-aware data synchronization in local-first
  applications, ensuring fast and predictable performance.
authors:
- Peter Travers
---

Linear's approach to delta sync for their local-first application is a masterclass in scaling complex read paths. Imagine clients generating a million sync actions daily and needing to catch up on hundreds of thousands after just a few hours offline.

The core problem was a permission-aware set intersection over 20+ terabytes of application-level logs. They needed to filter these logs by user access and subscriptions, which became increasingly difficult to serve quickly and predictably.

They rebuilt this critical read path using turbopuffer, demonstrating how to maintain performance and predictability even as workspaces grow. This provides practical insights into handling massive data synchronization and filtering challenges in distributed, local-first environments.
