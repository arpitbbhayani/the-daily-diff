---
title: Three common shapes for modern agent memory systems
source: hn
url: https://www.pinglin.tw/blog/the-shapes-of-agent-memory/
date: '2026-08-18'
tags:
- agent-memory
- catchup
- context-window
- experience-memory
- file-memory
- hn
- structured-store-memory
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49349906'
comments: https://news.ycombinator.com/item?id=49349906
why_read: 'This text explains the three primary methods for designing AI agent memory
  systems that persist across sessions: using files, structured stores, or embedding
  memory into trained experience. It provides a basis for understanding their distinctions
  and applications.'
authors:
- sebg
---

The biggest bottleneck for complex AI agents is often not the LLM itself, but how it remembers. This article deeply explores three core 'shapes' of agent memory: simple file-based systems, sophisticated structured stores with vector embeddings and temporal graphs, and memory baked directly into model weights via 'trained experience'.

You will discover that while file-based memory is easy to implement, it struggles with complex retrieval. Structured stores, leveraging vector indexes and knowledge graphs, significantly improve recall and reasoning over time. Trained experience, where memory is integrated into the model's parameters, offers fascinating long-term learning capabilities but comes with its own set of challenges regarding update mechanisms.

The author also provides empirical comparisons, showing how each approach performs across different agentic benchmarks. This breakdown offers concrete architectural insights for anyone building multi-session, persistent AI agents.

Designing robust agent memory is paramount for true agentic intelligence.
