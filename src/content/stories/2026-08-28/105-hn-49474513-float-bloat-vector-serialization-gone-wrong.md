---
title: Float Bloat vector serialization gone wrong
source: hn
url: https://bonsai.io/blog/float-bloat/
date: '2026-08-28'
tags:
- catchup
- data-precision
- embedding-models
- float-bloat
- hn
- serialization
- vector-search
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49474513'
comments: https://news.ycombinator.com/item?id=49474513
why_read: This article explains 'Float Bloat,' a widespread issue in vector search
  where float32 embeddings are unnecessarily serialized as float64. Readers will learn
  how this practice doubles storage and network costs without improving accuracy.
authors:
- Matt Gross
- Max Irwin
---

Are you paying double for your vector embeddings without any benefit? A pervasive issue, "Float Bloat," is silently costing millions of implementations in the vector search ecosystem. Most embedding models output `float32` vectors, but clients commonly cast and serialize them to `float64` for storage and network transfer.

This mistaken widening of precision doubles your disk usage and network bandwidth costs. The extra digits add zero accuracy and merely store noise. Bonsai estimates this oversight is responsible for over 20 Petabytes of unnecessary storage overhead globally.

This is an incredibly actionable insight for anyone working with vector databases or applied AI. Check your serialization pipeline today. Ensuring your embeddings are stored and transmitted as `float32` can immediately yield substantial cost and performance savings, optimizing your LLM infrastructure.
