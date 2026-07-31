---
authors:
- Doug
comments: https://news.ycombinator.com/item?id=49103613
date: '2026-07-29'
depth_score: 7
hn_id: '49103613'
image: /infographics/41-hn-49103613.jpg
interest_score: 8
novelty_score: 7
section: databases
source: hn
tags:
- brute-force
- catchup
- embeddings
- hn
- numpy
- performance
- vector-database
- vector-search
title: Just brute-force your embeddings for efficient vector search
url: https://softwaredoug.com/blog/2026/07/29/just-brute-force-embeddings
utility_score: 9
why_read: This article challenges the assumption that complex vector databases are
  always necessary for vector search. Readers will learn that for smaller datasets,
  a simple brute-force approach using NumPy can be highly performant and less complicated.
---

Stop overcomplicating vector search! For many applications, particularly those with up to a million documents and low query traffic, you do not need a complex vector database. A simple brute-force dot product can be surprisingly effective.

This article shares real-world numbers, demonstrating that basic NumPy operations on 384-dimensional embeddings can achieve hundreds of queries per second with sub-millisecond latency on a modern laptop. The perceived need for a dedicated vector database often leads to premature optimization and unnecessary system complexity.

Before you invest months in learning and operating a sophisticated vector database, consider if a straightforward in-memory approach will meet your needs. Sometimes, the simplest solution is indeed the best, delivering adequate performance without the heavy overhead.