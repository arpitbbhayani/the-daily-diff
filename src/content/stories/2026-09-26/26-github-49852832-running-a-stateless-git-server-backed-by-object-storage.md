---
title: Running a stateless git server backed by object storage
source: github
url: https://github.com/rgodha24/walgithub
date: '2026-09-26'
tags:
- catchup
- git-lfs
- git-server
- github
- object-storage
- smart-http
- stateless-architecture
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49852832'
comments: https://news.ycombinator.com/item?id=49852832
why_read: Learn how walgit serves scalable Git repositories directly from an object
  store without persistent local state or leader nodes.
authors:
- rgodha24
---

Traditional Git servers couple repository compute directly to local persistent block storage or heavyweight relational databases. Walgit takes a different architectural approach by implementing a completely stateless Git server that sits directly in front of object storage buckets like S3 or GCS.

Every instance running the single binary operates as a disposable cache. It natively serves Git smart HTTP protocol versions zero and two, supports bundle-uri clones as static files, and integrates Git LFS without maintaining any local disk state or requiring leader election.

By moving repository durability entirely to object storage, the system can scale to repositories that exceed the storage capacity of individual server instances. When instances restart or scale horizontally, they rebuild ephemeral caches on demand without risking metadata desynchronization.

Decoupling the Git protocol layer from persistent block storage turns source code hosting into truly elastic infrastructure.
