---
title: X's For You feed uses a multi-stage recommendation pipeline
source: hn
url: https://thomasunise.com/x-algorithm
date: '2026-08-10'
tags:
- catchup
- configurable-objective
- for-you-feed
- hn
- pipeline
- ranking-models
- recommendation-system
- system-architecture
section: systems
interest_score: 8
depth_score: 9
utility_score: 8
novelty_score: 8
hn_id: '49244428'
comments: https://news.ycombinator.com/item?id=49244428
why_read: This analysis provides a detailed, mechanistic understanding of how X's
  'For You' feed is constructed, revealing it to be a complex multi-stage pipeline
  of different systems rather than a single algorithm. Readers will learn about the
  various components like retrievers, hydrators, rankers, and mixers, and how the
  ranking objective is externally configurable and personalized.
authors:
- Thomas Unise
---

Ever wondered how the X (Twitter) 'For You' feed actually works? This article, based on a deep analysis of the platform's algorithm, pulls back the curtain on its intricate architecture.

It is not a single algorithm but a complex, multi-stage pipeline involving candidate sources, feature hydration, multiple ranking models, filters, selectors, and mixers. This breakdown offers a rare glimpse into a real-world, large-scale applied AI system, implemented across Scala, Java, Python, Rust, and C++.

For any senior engineer interested in system design and distributed systems, this is a masterclass in building scalable, real-time recommendation engines. You will learn how such complex systems are orchestrated to deliver personalized content, offering invaluable insights for your own architectural challenges.
