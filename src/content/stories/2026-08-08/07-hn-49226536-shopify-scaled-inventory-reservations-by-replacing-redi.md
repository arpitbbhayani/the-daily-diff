---
title: Shopify scaled inventory reservations by replacing Redis with MySQL
source: hn
url: https://shopify.engineering/scaling-inventory-reservations
date: '2026-08-08'
tags:
- bottleneck-identification
- catchup
- database-scaling
- high-contention
- hn
- inventory-reservations
- mysql
- redis
- skip-locked
section: databases
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49226536'
comments: https://news.ycombinator.com/item?id=49226536
why_read: This post details how Shopify successfully migrated a high-contention inventory
  reservation system from Redis to MySQL. Readers will learn about specific MySQL
  features like SKIP LOCKED and the importance of correctly identifying performance
  bottlenecks at scale.
authors:
- adletbalzhanov
---

Scaling inventory reservations is a thorny problem for any e-commerce giant, and Shopify just open-sourced their solution: switching from Redis to MySQL for peak performance.

They did not just swap databases; they re-architected the solution. The core was using MySQL's `SKIP LOCKED` feature, moving from a single quantity column to a 'one row per unit' design, combined with smart composite primary keys and connection visibility. This design allowed them to hit their throughput targets during Black Friday 2025's record $5.1 million in sales per minute.

This is a masterclass in leveraging relational database capabilities for high-contention scenarios. You will gain actionable insights for optimizing your own database-backed reservation or locking systems.
