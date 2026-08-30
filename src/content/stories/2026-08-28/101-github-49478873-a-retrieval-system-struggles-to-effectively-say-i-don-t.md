---
title: A retrieval system struggles to effectively say I don't know
source: github
url: https://github.com/asanabrial/leteo/blob/main/docs/nothing-worth-tuning.md
date: '2026-08-28'
tags:
- bm25
- catchup
- coding-agents
- full-text-search
- github
- recall-precision-tradeoff
- relevance-floor
- retrieval-system-tuning
- rust
- sqlite
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49478873'
comments: https://news.ycombinator.com/item?id=49478873
why_read: This text reveals the challenges of tuning a retrieval system to balance
  recall and precision, showing how improving one can significantly degrade the other.
authors:
- asanabrial
---

A major challenge in RAG and agent systems is enabling them to admit when they do not know the answer. This practical exploration details a multi-stage full-text search strategy using SQLite's FTS5 with BM25-based thresholds to address this very issue for a coding agent's local memory.

The author shares empirical results, showing how a refined, multi-stage retrieval reduced empty results from a staggering 80.5 percent to just 7.2 percent. However, this came with a measured trade-off: a 67.9 percent "speaking rate" for out-of-scope questions. This candid analysis underscores that more context does not always equate to better signal, a lesson familiar from logging practices.

This deep dive provides actionable insights into balancing recall with precision, offering concrete BM25 tuning strategies and reminding us that better context engineering, not just bigger models, is often the key to more reliable agent behavior. It is a critical lesson for anyone building RAG-powered applications.
