---
title: Porting the original Doom game logic and renderer to SQL
source: hn
url: https://cedardb.com/blog/sqldoom/
date: '2026-09-23'
tags:
- bsp-trees
- catchup
- cedardb
- doom
- game-engines
- hn
- rendering
- sql
section: databases
interest_score: 8
depth_score: 9
utility_score: 7
novelty_score: 9
hn_id: '49818023'
comments: https://news.ycombinator.com/item?id=49818023
why_read: Learn how the original 1993 Doom game loop and renderer were implemented
  entirely within SQL queries running inside a database. It shows a creative exploration
  of database query execution capabilities for real-time graphics.
authors:
- Vaslo
image: /infographics/11-hn-49818023.jpg
---

Executing complex procedural game logic and 3D rendering inside a relational database sounds like a joke, but the implementation details offer a masterclass in SQL engine capabilities. CedarDB successfully ported the full 1993 Doom engine, including its binary space partitioning (BSP) tree renderer and game loop, entirely into SQL.

The database executes the game loop at 35 FPS while computing complete 320x200 pixel frame buffers at up to 60 Hz. Doom relies heavily on BSP trees to ensure efficient depth ordering for arbitrary wall angles, textures, and variable floor heights. Translating these tree traversals and rasterization passes into relational queries pushes query optimization and memory layout to the limit.

The only non-SQL component is a thin Python script handling keyboard input and displaying the returned bitmap over TCP.

Pushing relational engines into unconventional workloads demonstrates how modern vectorized execution and query optimization can eliminate traditional computing bottlenecks.
