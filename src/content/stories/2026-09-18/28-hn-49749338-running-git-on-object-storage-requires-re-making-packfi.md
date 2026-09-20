---
title: Running Git on Object Storage Requires Re-making Packfiles
source: hn
url: https://www.tigrisdata.com/blog/objgit-packfiles/
date: '2026-09-18'
tags:
- catchup
- columnar-store
- distributed-systems
- git
- hn
- object-storage
- packfiles
section: systems
interest_score: 8
depth_score: 9
utility_score: 8
novelty_score: 8
hn_id: '49749338'
comments: https://news.ycombinator.com/item?id=49749338
why_read: This post explains the challenges of running Git on object storage and introduces
  a novel packfile format, with a columnar store, that enables efficient Git server
  operation on object storage without client-side changes. Readers will learn about
  the author's performance analysis and solution for production-sized repositories.
authors:
- zbentley
---

Ever wondered what it takes to run Git on object storage at scale? It is far more than just pointing Git at a filesystem abstraction layer. One engineer embarked on this journey and ended up inventing a brand new packfile format.

The core challenge was Git's original packfile design, which became a performance bottleneck when layered on object storage. The solution involved developing a columnar, object-storage-native packfile format. This intricate redesign allowed for significant performance gains, making production-sized repositories viable without client-side changes.

This detailed engineering blog post offers a masterclass in optimizing distributed systems for specific storage paradigms. It is not just about Git; it is about understanding how to fundamentally adapt data structures and access patterns to unlock scalable performance on cloud-native infrastructure.
