---
title: Apache Kafka and Iggy Compared on Write Semantics and Replication
source: hn
url: https://softwaremill.com/apache-kafka-vs-apache-iggy-same-log-different-engine/
date: '2026-09-02'
tags:
- apache-iggy
- apache-kafka
- architecture
- catchup
- hn
- message-streaming
- replication
- write-semantics
section: databases
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49534919'
comments: https://news.ycombinator.com/item?id=49534919
why_read: This article provides a nuanced comparison of Apache Kafka and Iggy, explaining
  why their definition of a successful write and replication strategies fundamentally
  differentiate them. Readers will learn to look beyond simple performance benchmarks
  when evaluating streaming platforms.
authors:
- "Micha\u0142 Mat\u0142oka"
---

Choosing a messaging queue often boils down to understanding the deep architectural trade-offs, and a new contender, Apache Iggy (written in Rust with `io_uring`), is shaking things up against the established Apache Kafka. This comparison highlights crucial differences beyond surface-level features.

The article dives into what a "successful write" truly means across these platforms. Is it memory-buffered, page-cached, fsynced to disk, or replicated across machines? Kafka and Iggy diverge significantly here, influencing their consistency guarantees and performance characteristics under various failure scenarios.

For engineers designing high-throughput, fault-tolerant systems, understanding these core distinctions is critical. It is not just about Rust versus Java, but fundamentally different approaches to durability, latency, and operational complexity that will guide your infrastructure choices.
