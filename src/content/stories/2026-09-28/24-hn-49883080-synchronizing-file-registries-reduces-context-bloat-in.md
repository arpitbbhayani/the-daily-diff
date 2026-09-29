---
title: Synchronizing file registries reduces context bloat in coding agents
source: hn
url: https://arxiv.org/abs/2607.22711
date: '2026-09-28'
tags:
- catchup
- codebase-synchronization
- context-optimization
- hn
- llm-coding-agents
- token-reduction
- trajectory-architecture
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49883080'
comments: https://news.ycombinator.com/item?id=49883080
why_read: Learn how decoupling file-read actions from trajectory history eliminates
  stale snapshots and significantly cuts token overhead in LLM coding agents.
authors:
- Mingwei Zheng
- David OBrien
- Siwei Cui
- Pardis Pashakhanloo
- Rajdeep Mukherjee
- Myeongsoo Kim
- Sachit Kuhar
---

Most coding agents suffer from a fundamental design flaw in their trajectory architecture. When an agent reads a file, traditional harnesses append that snapshot into the chronological log permanently. As the agent makes edits or external modifications occur, the early snapshots become stale, forcing the agent into redundant reads and wasted context.

CORVUS solves this by decoupling file read actions from observation history. Instead of appending entire file contents directly into the immutable reasoning log, it maintains a synchronized registry of active files and injects only the current state at each reasoning cycle.

Evaluating this architecture across standard coding benchmarks showed a 9 to 50 percent reduction in average input tokens per task, along with up to 37 percent fewer reasoning cycles. Shorter context windows directly prevent hallucinations and improve tool usage accuracy.

Managing LLM memory as a mutable state registry rather than an append-only log is a necessary shift for production agent design.
