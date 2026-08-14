---
title: Catastrophic Remembering Causes Unbounded Growth in Agentic Coding Prompts
source: hn
url: https://arxiv.org/abs/2608.11095
date: '2026-08-12'
tags:
- agentic-coding
- catastrophic-remembering
- catchup
- hn
- prompt-comments
- prompt-growth
section: ai
interest_score: 9
depth_score: 8
utility_score: 9
novelty_score: 9
hn_id: '49268790'
comments: https://news.ycombinator.com/item?id=49268790
why_read: This paper reveals why agentic coding prompts experience unbounded growth
  due to 'catastrophic remembering'. Readers will learn how prompt comments can prevent
  this growth and improve agentic instruction-following performance.
authors:
- Kushal Chakrabarti
---

Have you noticed your LLM agents' prompts getting longer and longer, never shrinking? This paper identifies a new problem called "catastrophic remembering," the inverse of catastrophic forgetting. Agentic coding prompts, like those for CLAUDE.md, grow without bound because deleting old instructions without their rationales is exponentially expensive.

The authors found prompts tripling in size over their lifetime, gaining nearly five instructions per commit. Older instructions are less likely to be deleted, creating a spiraling context window issue. More context does not always mean better performance; it often means more noise and higher token costs.

The simple, yet profound, solution proposed is "prompt comments." By encoding latent reasoning within comments, the study shows a 99.3 percent reduction in excess instructions and up to 23.1 percent improvement in real-world instruction following. This changes how we think about managing context for robust agent performance.
