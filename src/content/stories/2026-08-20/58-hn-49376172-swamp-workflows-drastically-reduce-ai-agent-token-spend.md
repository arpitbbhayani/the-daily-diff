---
title: Swamp Workflows Drastically Reduce AI Agent Token Spend
source: hn
url: https://www.adamhjk.com/blog/a-practical-guide-to-reducing-token-spend/
date: '2026-08-20'
tags:
- agent-skills
- ai-agents
- catchup
- code-review
- cost-optimization
- hn
- swamp-workflow
- token-spend-reduction
section: ai
interest_score: 8
depth_score: 7
utility_score: 9
novelty_score: 8
hn_id: '49376172'
comments: https://news.ycombinator.com/item?id=49376172
why_read: This guide provides a practical method to dramatically cut AI agent token
  spend and improve runtime using a 'swamp workflow' approach. Readers will learn
  an effective strategy to optimize the cost and efficiency of complex AI agent workloads.
authors:
- Adam Jacob
---

Facing exorbitant LLM token costs and slow agent performance? The problem might not be your model, but your agent's workflow.

One team saw an 8x reduction in token usage and 2x faster runtimes for a complex code review agent by switching from 'skills' to a 'swamp workflow'. This involves giving the agent raw access to the data and tools rather than pre-defining every step with a rigid 'skill' abstraction.

The insight is that sometimes, less structure and more raw context (managed intelligently) can lead to dramatically better outcomes and lower operational costs. It challenges the common belief that more agent 'intelligence' always requires more token-heavy reasoning or complex orchestration. This approach lets the agent navigate the problem space more naturally, akin to giving a human access to a terminal rather than forcing them into a strict GUI.

Rethink how your agents use context to truly optimize.
