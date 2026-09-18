---
title: Training a 4B model yields 81% faster Postgres query plans
source: hn
url: https://rohanbansal.com/qorl
date: '2026-09-16'
tags:
- catchup
- hn
- join-ordering
- language-models
- postgres
- query-optimization
- reinforcement-learning
section: databases
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 9
hn_id: '49731285'
comments: https://news.ycombinator.com/item?id=49731285
why_read: This article explains how a 4B language model trained with reinforcement
  learning can generate significantly faster Postgres query plans, overcoming the
  inherent difficulties of traditional query optimizers.
authors:
- Rohan Bansal
---

A 4B LLM (Qwen) trained with reinforcement learning has achieved an astounding 81 percent faster query plans than native Postgres. This project used RL rollouts where Qwen proposed candidate strategies, which were then measured against Postgres's own default plan, with scalar rewards nudging the LLM towards faster execution.

Query optimization, especially join ordering, is known to be NP-hard, a challenge traditional optimizers often struggle with. This innovative approach harnesses the LLM's pattern recognition and generation capabilities, guided by real-world performance feedback, to overcome these limitations.

This demonstrates a powerful synergy between applied AI and database internals, opening new frontiers for optimizing complex database operations. The practical implications for large-scale data systems could be profound.
