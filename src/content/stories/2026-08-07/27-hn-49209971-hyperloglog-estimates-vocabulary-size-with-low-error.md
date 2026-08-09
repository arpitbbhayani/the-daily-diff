---
authors:
- Anon84
comments: https://news.ycombinator.com/item?id=49209971
date: '2026-08-07'
depth_score: 8
hn_id: '49209971'
image: /infographics/27-hn-49209971.jpg
interest_score: 8
novelty_score: 7
section: engineering
source: hn
tags:
- algorithm-performance
- catchup
- data-structures
- hashing
- hn
- hyperloglog
- memory-usage
- probabilistic-algorithms
- sorting
- time-complexity
- vocabulary-estimation
- word-lists
title: HyperLogLog estimates vocabulary size with low error
url: https://stochastic.blog/sorting-hashing-and-sketches-on-370-103-words/
utility_score: 8
why_read: This post empirically evaluates sorting, hashing, and probabilistic sketching
  algorithms on a large word dataset. Readers will learn how these fundamental mechanisms
  work, their performance trade-offs, and which ones are most effective for tasks
  like vocabulary size estimation.
---

Building efficient backend systems often comes down to understanding the fundamentals. This blog post dives deep into sorting, hashing, and probabilistic data structures like HyperLogLog, implementing them from scratch.

It is not just theoretical; the author benchmarks these against a real-world dataset of 370,103 words, detailing their time and memory costs. You will see firsthand why HyperLogLog can estimate vocabulary size with only 2.71 percent error using just 4,096 registers, offering crucial insights for optimizing resource usage.

This hands-on approach helps you understand which algorithms genuinely earn their complexity in production systems, directly informing your design choices.