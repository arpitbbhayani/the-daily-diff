---
authors:
- pinglin
comments: https://news.ycombinator.com/item?id=49310834
date: '2026-08-15'
depth_score: 8
hn_id: '49310834'
image: /infographics/10-hn-49310834.jpg
interest_score: 8
novelty_score: 8
section: ai
source: hn
tags:
- agent-memory
- ai-agents
- catchup
- context-window
- file-based-memory
- hn
- structured-store
- temporal-graph
- trained-experience
- vector-index
title: Agent memory systems can be files, structured stores, or trained experience
url: https://www.pinglin.tw/blog/the-shapes-of-agent-memory
utility_score: 9
why_read: 'This text introduces three fundamental designs for AI agent memory systems:
  file-based, structured stores, and trained experience. Readers will learn the distinct
  characteristics and relative merits of each approach, helping them understand how
  agents retain information beyond a single conversation.'
---

Building robust AI agents often boils down to how they remember. Most agent frameworks struggle not with the LLM itself, but with poorly designed memory systems that fail to provide relevant context. This article breaks down a crucial component for successful agentic AI.

It dives deep into three primary memory architectures: file-based memory (like curated markdown), structured stores (combining vector indexes with temporal graphs), and even RL-trained experience banks. This is not just theoretical; it explores how these are implemented in practice and evaluates their effectiveness.

For engineers tackling real-world agent challenges, understanding these trade-offs is critical. You will learn why a structured, graph-based memory can be far more effective than a simple RAG over files, and how these systems are benchmarked. This insight moves beyond basic context windows to truly persistent, intelligent agent memory.

The future of agents depends on their ability to learn and retain information across sessions.