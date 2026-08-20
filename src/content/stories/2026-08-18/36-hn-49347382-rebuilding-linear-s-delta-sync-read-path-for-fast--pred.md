---
title: Rebuilding Linear's delta sync read path for fast, predictable performance
source: hn
url: https://linear.app/now/rebuilding-delta-sync-read-path
date: '2026-08-18'
tags:
- catchup
- delta-sync
- hn
- local-first-applications
- permission-filtering
- read-path
- scalability
- sync-actions
- turbopuffer
section: systems
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49347382'
comments: https://news.ycombinator.com/item?id=49347382
why_read: This article details the challenges of scaling a delta sync read path for
  local-first applications and how Linear addressed them. Readers will learn about
  handling high-volume, permission-aware data synchronization using a new architecture
  with turbopuffer.
authors:
- Peter Travers
---

Scaling local-first applications presents unique challenges, especially when synchronizing millions of user actions across massive datasets. Linear's recent re-engineering of their delta sync read path offers a masterclass in tackling this.

They faced a daunting task: processing close to a million sync actions daily for large workspaces, filtering those results by user permissions, all while querying across 20+ terabytes of historical data. The naive approach would lead to unacceptable latency.

The solution involved reimagining their application-level log and developing a new read path with `turbopuffer`. This allowed them to turn a complex, permission-aware set intersection into a fast and predictable operation.

This deep dive reveals how to maintain responsiveness and data consistency in highly interactive, local-first environments, showcasing pragmatic architectural decisions under significant load.

It is a blueprint for designing truly scalable sync mechanisms in modern applications.
