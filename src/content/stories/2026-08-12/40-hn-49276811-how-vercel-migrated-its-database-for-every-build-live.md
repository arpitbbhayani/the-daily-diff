---
authors:
- Melkey Moksyakov
- Janos Szathmary
- Andrew Healey
comments: https://news.ycombinator.com/item?id=49276811
date: '2026-08-12'
depth_score: 8
hn_id: '49276811'
image: /infographics/40-hn-49276811.jpg
interest_score: 8
novelty_score: 7
section: databases
source: hn
tags:
- catchup
- database-migration
- durable-storage
- dynamodb
- ephemeral-cache
- hn
- live-migration
- redis
- vercel-builds
title: How Vercel Migrated Its Database for Every Build Live
url: https://vercel.com/blog/how-we-migrated-the-database-behind-every-vercel-build
utility_score: 9
why_read: Read this to understand the complexities and strategies involved in migrating
  a critical production database with zero downtime. It details how Vercel moved its
  build state from an ephemeral Redis to durable DynamoDB under continuous traffic.
---

Migrating a critical database under continuous, high-volume production traffic is a masterclass in system design. Vercel successfully moved the state behind every build, from Redis (an ephemeral cache) to DynamoDB for robust durability.

The core challenge was the inability to pause the world. This meant executing a phased, live migration with feature flags and immediate rollback capabilities, meticulously handling data integrity and consistency during the transition. It showcases the practical application of distributed systems principles to a real-world problem.

This article offers invaluable lessons on balancing performance with durability, making informed choices about data stores, and designing fault-tolerant migration strategies for mission-critical infrastructure. A must-read for anyone building scalable systems.