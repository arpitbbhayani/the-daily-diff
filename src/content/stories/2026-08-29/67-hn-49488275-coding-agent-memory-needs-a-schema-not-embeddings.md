---
title: Coding agent memory needs a schema not embeddings
source: hn
url: https://www.lorekit.io/blog/agent-memory-data-model
date: '2026-08-29'
tags:
- agent-memory
- catchup
- coding-agents
- determinism
- embeddings
- hn
- schema
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49488275'
comments: https://news.ycombinator.com/item?id=49488275
why_read: This article explains why vector databases and embeddings are unsuitable
  for coding agent memory. Readers will learn about a schema-based alternative that
  offers determinism, inspectability, and cost-efficiency for specific agent recall
  needs.
authors:
- mthines
---

Agent memory does not always need a vector database. For coding agents, especially, the prevailing wisdom of embedding text and querying by similarity can be the wrong tool.

This article makes a strong case for a deterministic, schema-based data model. Specific, recurring notes an agent needs 
- like API caveats or test setup requirements - are better served by a structured approach, allowing for inspectability, determinism, and lower cost compared to opaque, non-deterministic embedding searches.

It is a critical re-evaluation of agent architecture and offers a practical alternative to building more reliable and efficient AI systems.
