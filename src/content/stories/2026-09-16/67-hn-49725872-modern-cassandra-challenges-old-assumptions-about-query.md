---
title: Modern Cassandra challenges old assumptions about querying and operation
source: hn
url: https://softwaremill.com/apache-cassandra-5-6-what-changed-since-3-11/
date: '2026-09-16'
tags:
- auto-repair
- cassandra
- catchup
- hn
- storage-attached-indexing
- transactional-cluster-metadata
- unified-compaction-strategy
- vector-search
section: databases
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49725872'
comments: https://news.ycombinator.com/item?id=49725872
why_read: This article explains how Apache Cassandra has evolved significantly since
  version 3.11, introducing features like storage-integrated indexing, vector search,
  and automated repair. Readers will learn how these changes challenge previous assumptions
  about designing queries and operating Cassandra clusters.
authors:
- "Micha\u0142 Mat\u0142oka"
---

If your last interaction with Apache Cassandra was around version 3.11, prepare to be surprised by its evolution. Modern Cassandra (versions 5.0 and upcoming 6.0) has fundamentally shifted many long-held assumptions about its design and operational patterns.

The database now boasts critical features like Storage-Attached Indexing (SAI), native vector search for similarity queries, a Unified Compaction Strategy (UCS), and built-in auto-repair capabilities. These additions significantly enhance Cassandra's flexibility and ease of operation, making it suitable for a broader range of workloads than ever before.

Upcoming work on Transactional Cluster Metadata in 6.0 further cements its place as a robust distributed database. This comprehensive overview is indispensable for senior engineers looking to leverage Cassandra's modern capabilities, informing system design, query optimization, and architectural decisions.
