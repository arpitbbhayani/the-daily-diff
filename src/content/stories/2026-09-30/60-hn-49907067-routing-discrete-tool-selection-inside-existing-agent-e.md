---
title: Routing discrete tool selection inside existing agent execution harnesses
source: hn
url: https://protocol-lattice.github.io/harness-router/
date: '2026-09-30'
tags:
- agent-loop
- catchup
- hn
- mcp
- monte-carlo-tree-search
- openrouter
- tool-selection
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49907067'
comments: https://news.ycombinator.com/item?id=49907067
why_read: Learn how Harness Router isolates tool selection decisions within an autonomous
  agent loop using confidence scoring and simulated rollouts.
authors:
- raezil
---

Most AI agent harnesses burden the primary LLM planner with selecting among dozens of available tools on every single iteration. This increases latency, inflates token costs, and leads to tool hallucination when context windows grow crowded.

Harness Router decouples tool selection from the main planning harness. It intercepts the agent loop by evaluating the immediate goal, the latest observation, and the tool registry using a dedicated decision model. It provides deterministic caching for recurring patterns and supports Monte Carlo Tree Search (MCTS) across simulated execution paths before committing to an action.

Separating next-action classification from execution and validation simplifies the agent harness architecture. Instead of forcing a single model to act as thinker, router, and parser simultaneously, you create a modular, resilient pipeline with explicit fallback boundaries.
