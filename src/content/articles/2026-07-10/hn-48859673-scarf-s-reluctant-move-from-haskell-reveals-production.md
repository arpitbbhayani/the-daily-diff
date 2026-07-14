---
title: Scarf's Reluctant Move From Haskell Reveals Production Costs
source: hn
url: https://avi.press/posts/2026-07-10-after-7-years-in-production-scarf-has-reluctantly-moved-away-from-haskell.html
date: '2026-07-10'
tags:
- catchup
- compilation-time
- developer-experience
- ecosystem-friction
- haskell
- hn
- production-systems
- software-reliability
- type-system
score: 221
hn_id: '48859673'
comments: https://news.ycombinator.com/item?id=48859673
why_read: Read this to understand the practical challenges of running Haskell in a
  serious production environment, focusing on compilation time and ecosystem friction
  despite its reliability benefits.
authors:
- Avi Press
author: Avi Press
---

After seven years in production, Scarf made the difficult decision to move its backend away from Haskell, despite the language's strong guarantees around reliability and type safety. This transition reveals critical challenges faced by real-world engineering teams.

The core issues were not Haskell's theoretical elegance but rather practical friction points: prohibitively long compilation times and a complex ecosystem that hindered developer productivity. Efforts to optimize builds, caches, and CI became a constant battle.

This experience highlights that even with a robust type system, operational overheads can outweigh the benefits for high-velocity teams with strict SLAs. The cost of managing the environment became unsustainable.

For engineering leaders, this is a frank lesson in balancing language benefits with ecosystem maturity and developer experience.
