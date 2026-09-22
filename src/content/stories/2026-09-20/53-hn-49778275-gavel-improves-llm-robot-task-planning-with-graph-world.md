---
title: GAVEL Improves LLM Robot Task Planning with Graph World Models
source: hn
url: https://academy.dair.ai/papers/gavel-graph-world-models-for-verified-and-efficient-long-horizon-llm-task-planni-2609.19315
date: '2026-09-20'
tags:
- belief-reasoning
- catchup
- external-world-model
- graph-world-models
- hn
- llm-task-planning
- plan-repair
- plan-verification
- robot-planning
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49778275'
comments: https://news.ycombinator.com/item?id=49778275
why_read: This paper introduces GAVEL, a framework demonstrating how explicit graph
  world models can significantly improve LLM robot planning by enabling verification,
  repair, and better reasoning under partial observability. Readers will learn about
  a novel approach to overcome common LLM planning limitations and achieve higher
  task success rates.
authors:
- Ruiyang Wang
- Hao-Lun Hsu
- Swarajh Mehta
- Jiwoo Kim
- Zhihao Dou
- Miroslav Pajic
---

The challenge with long-horizon LLM planning is not always the LLM itself, but the constraints and unpredictability of real-world execution. GAVEL introduces a framework that elevates task success by placing a sophisticated "graph world model" outside the LLM.

This model explicitly encodes object relations, action preconditions, and probabilistic beliefs. It verifies and repairs plans before execution, catching violations and enabling proactive adjustments. For instance, single-task success rates jumped from 41.2 percent to 91.8 percent on BEHAVIOR-1K.

The key takeaway is powerful: most of the improvement comes from the harness, not just a bigger model. This is a crucial system design lesson for anyone building reliable AI agents in complex environments.
