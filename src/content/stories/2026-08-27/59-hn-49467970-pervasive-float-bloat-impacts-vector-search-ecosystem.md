---
authors:
- Matt Gross
- Max Irwin
comments: https://news.ycombinator.com/item?id=49467970
date: '2026-08-27'
depth_score: 8
hn_id: '49467970'
image: /infographics/59-hn-49467970.jpg
interest_score: 8
novelty_score: 7
section: databases
source: hn
tags:
- catchup
- data-precision
- float-bloat
- hn
- serialization
- storage-optimization
- vector-search
title: Pervasive Float Bloat impacts vector search ecosystem
url: https://bonsai.io/blog/float-bloat/
utility_score: 9
why_read: Read this to understand Float Bloat, a pervasive and costly issue in vector
  search where float32 vectors are incorrectly serialized as float64. You will learn
  the technical details of this wasted precision and its significant impact on disk
  storage and network bandwidth.
---

A silent killer of efficiency, "Float Bloat," is costing the vector search ecosystem an estimated 20 Petabytes of unnecessary storage globally. This pervasive issue arises when `float32` embeddings, returned by most models, are mistakenly cast and serialized as `float64`.

This conversion doubles storage and network costs without providing any additional accuracy. You are essentially paying to store and transmit noise, an easily avoidable infrastructure bottleneck.

If you work with vector embeddings or LLM infrastructure, immediately audit your serialization processes. This simple fix can lead to substantial resource savings and improved performance for your vector databases.