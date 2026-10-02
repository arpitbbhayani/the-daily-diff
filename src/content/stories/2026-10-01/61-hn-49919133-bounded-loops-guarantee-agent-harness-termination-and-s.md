---
title: Bounded loops guarantee agent harness termination and spend bounds
source: hn
url: https://arxiv.org/abs/2609.27871
date: '2026-10-01'
tags:
- agent-harnesses
- bounded-loops
- catchup
- hn
- repair-graphs
- spend-bounds
- termination-guarantees
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49919133'
comments: https://news.ycombinator.com/item?id=49919133
why_read: Read this paper to understand how bounded-loop harnesses formally guarantee
  termination, verified completion, and strict cost ceilings for autonomous agents.
authors:
- Varun Pratap Bhardwaj
- Garima Singh
- Arun Pratap Bhardwaj
---

Most AI agent harnesses rely on soft completion signals from LLM outputs, leading to infinite loops and unexpected token overspend when a downstream task fails.

Bounded Loops introduces a formal execution model that isolates the agent worker from an independent validation gate. By structuring agent execution as bounded-loop graphs with explicit repair relations, the harness guarantees termination in closed form, provided the repair budget is global rather than per node.

The framework also prevents state drift by requiring every terminal step to pass an append-only hash-chained ledger before marking a task complete. Spend ceilings are enforced per attempt rather than between attempts, stopping runaway inference calls.

Separating verification logic from worker output is essential for reliable autonomous workflows.
