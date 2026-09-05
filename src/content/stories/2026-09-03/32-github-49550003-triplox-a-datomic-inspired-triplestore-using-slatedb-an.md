---
title: Triplox a Datomic-inspired triplestore using SlateDB and object storage
source: github
url: https://github.com/fiV0/triplox
date: '2026-09-03'
tags:
- alpha-software
- catchup
- datomic
- github
- object-storage
- slatedb
- triplestore
section: databases
interest_score: 8
depth_score: 9
utility_score: 7
novelty_score: 8
hn_id: '49550003'
comments: https://news.ycombinator.com/item?id=49550003
why_read: This text introduces Triplox, an alpha-stage, Datomic-inspired triplestore
  built on SlateDB and object storage. Readers will learn about its core architecture
  and inspiration.
authors:
- fiv0
---

Triplox is shaking up distributed database design, drawing inspiration from Datomic but taking a bold, object-storage-centric approach. Think immutable data, Datalog queries, and cloud-native scalability.

This project uses SlateDB and aims to run primarily on S3 buckets, meaning it is designed from the ground up for modern cloud infrastructure. The core idea is to achieve resilient, horizontally scalable data storage and query capabilities without the traditional complexities.

Incremental queries are a key feature, which hints at powerful performance optimizations for complex analytical workloads. For engineers grappling with petabyte-scale data and needing robust temporal query features, understanding this architecture is crucial. Even as alpha software, the design choices are incredibly insightful.

This offers a fresh perspective on how to build the next generation of distributed data systems.
