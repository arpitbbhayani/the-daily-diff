---
title: LLM comments are poor because they are for agentic workflows
source: hn
url: https://danilafe.com/blog/comments_not_for_you/
date: '2026-09-18'
tags:
- agentic-workflows
- catchup
- hn
- llm-comments
- reinforcement-learning
- software-benchmarks
section: ai
interest_score: 8
depth_score: 7
utility_score: 8
novelty_score: 8
hn_id: '49751659'
comments: https://news.ycombinator.com/item?id=49751659
why_read: This explains why LLM-generated comments are often unhelpful to humans,
  arguing that they are a byproduct of agentic training and outcome-based reinforcement
  learning, not intended for human understanding.
authors:
- kqr
---

LLM-generated code comments are often terrible, but not for the reasons you might think. This piece argues they are not actually for you, the human engineer.

Instead, these verbose, context-heavy comments are an internal artifact of how LLM agents reason and operate within their RL-driven workflows. They act as a form of scratchpad or internal monologue, crucial for the agent to maintain context and make decisions during complex tasks.

Understanding this shift - that comments serve the agent's internal state management - is critical for anyone building or using AI coding assistants. It suggests that simply asking for "better comments" might be misdirected; instead, focus should be on context engineering and potentially post-processing comment removal. This changes how you approach agent design for practical engineering tasks.
