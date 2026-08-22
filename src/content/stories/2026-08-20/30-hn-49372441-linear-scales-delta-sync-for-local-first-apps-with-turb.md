---
title: Linear scales delta sync for local-first apps with turbopuffer
source: hn
url: https://linear.app/now/rebuilding-delta-sync-read-path
date: '2026-08-20'
tags:
- catchup
- delta-sync
- hn
- local-first-applications
- permission-aware-filtering
- read-path-optimization
- sync-actions
- turbopuffer
section: systems
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49372441'
comments: https://news.ycombinator.com/item?id=49372441
why_read: This article details how Linear addressed the challenge of scaling delta
  sync in a local-first application, explaining the architectural changes and the
  use of turbopuffer to handle massive, permission-aware data synchronization.
authors:
- Peter Travers
---

Linear's deep dive into rebuilding their delta sync read path is a masterclass in distributed system design, especially for local-first applications. Imagine clients needing to catch up on hundreds of thousands of changes daily, all filtered by user permissions, across 20+ terabytes of sync actions.

They cracked this with an application-level log and a clever use of turbopuffer for what became a massive, permission-aware set intersection. The problem of fast, predictable queries at this scale is universal, and their detailed solution for handling millions of daily sync actions offers genuinely actionable insights.

You will learn concrete architectural patterns for scaling data synchronization and query performance in high-throughput, eventually consistent environments. This is prime material for anyone building robust, scalable backend systems.
