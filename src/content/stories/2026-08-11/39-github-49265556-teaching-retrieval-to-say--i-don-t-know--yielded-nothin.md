---
title: Teaching retrieval to say 'I don't know' yielded nothing worth tuning
source: github
url: https://github.com/asanabrial/leteo/blob/main/docs/nothing-worth-tuning.md
date: '2026-08-11'
tags:
- bm25
- catchup
- coding-agents
- don't-know
- fts5
- full-text-search
- github
- relevance-floor
- retrieval-system
section: ai
interest_score: 8
depth_score: 7
utility_score: 9
novelty_score: 7
hn_id: '49265556'
comments: https://news.ycombinator.com/item?id=49265556
why_read: This post details an experiment with a retrieval system for coding agents,
  specifically exploring the challenge of teaching it to say 'I don't know'. It highlights
  how efforts to improve recall can still result in low precision, offering insights
  into the practical difficulties of tuning search relevance.
authors:
- asanabrial
---

A common pitfall in RAG systems is retrieval hallucination or overconfidence. This deep dive into an agent's memory tool reveals how difficult it is to teach a system to say 'I do not know'.

The author shares practical tuning efforts with FTS5 and BM25 in a multi-stage search, detailing how specific thresholds and ratios significantly impact performance. They observed that while a third search stage drastically reduced empty results, it also led to the system 'speaking' 67.9 percent of the time even when scope-limited to irrelevant projects.

This is a crucial read for anyone building RAG for agents. It provides concrete numbers and trade-offs for ensuring your retrieval mechanism is honest about its knowledge boundaries.
