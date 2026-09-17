---
authors:
- ShengATsao
comments: https://news.ycombinator.com/item?id=49720159
date: '2026-09-15'
depth_score: 8
hn_id: '49720159'
image: /infographics/53-hn-49720159.jpg
interest_score: 8
novelty_score: 6
section: systems
source: hn
tags:
- catchup
- disk-storage
- document-serialization
- hn
- memory-mapping
- runtime-state
title: Comparing serialization to disk with memory mapping for runtime state
url: https://news.ycombinator.com/item?id=49720159
utility_score: 8
why_read: This question explores the fundamental design choices between serializing
  data to disk and using memory mapping for managing application state, prompting
  consideration of their respective advantages and disadvantages.
---

The age-old question of how to persist data: do you serialize documents to disk, or memory-map your runtime state directly? This 'Ask HN' thread dives deep into the fundamental trade-offs.

Serialization gives you explicit control over data layout, versioning, and allows for robust atomic writes, critical for crash recovery. It is often simpler to reason about when dealing with schema evolution or multi-version concurrency control.

Memory-mapping, on the other hand, can offer performance benefits by letting the OS handle page caching and I/O. However, it introduces complexities around consistency, ensuring writes hit durable storage, and handling partial writes or crashes. The discussion explores these nuances, providing valuable insights for designing resilient data systems.