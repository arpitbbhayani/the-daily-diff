---
title: Disaggregating storage turns compute stateless for instant database scaling
source: hn
url: https://www.mongodb.com/company/blog/engineering/ground-beneath-database
date: '2026-10-08'
tags:
- catchup
- disaggregated-storage
- hn
- log-service
- page-service
- stateless-compute
- zero-copy-cloning
section: databases
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '50007048'
comments: https://news.ycombinator.com/item?id=50007048
why_read: Read this to understand how separating compute from storage fundamentally
  alters database replication, scaling, and recovery. You will learn the mechanics
  behind modern disaggregated architectures that coordinate consensus logging, page
  caching, and object storage.
authors:
- sparc24
---

Decoupling compute from storage fundamentally transforms database operations. MongoDB Atlas Infinite splits its architecture into ephemeral compute nodes and a shared three-tier storage engine: a consensus Log Service, a warm Page Service, and an underlying Object Index Service.

Because compute nodes hold no persistent state, scaling read replicas no longer requires disk copying. Database snapshots, clones, and point-in-time restores become constant-time log forks that execute with zero copy overhead regardless of dataset size.

Crucially, client encryption remains intact because pages are encrypted on compute nodes before transmission. You get horizontal elasticity without sacrificing data ownership or query protocol parity.
