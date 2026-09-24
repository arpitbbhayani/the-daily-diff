---
authors:
- NatalieTrono
comments: https://news.ycombinator.com/item?id=49807198
date: '2026-09-22'
depth_score: 8
hn_id: '49807198'
image: /infographics/46-github-49807198.jpg
interest_score: 8
novelty_score: 8
section: ai
source: github
tags:
- agent-orchestration
- autonomous-loops
- catchup
- github
- hierarchical-agents
- llm-agents
- recursive-self-organization
title: Fractal agents use hierarchical loops for recursive self-organization
url: https://github.com/plasma-ai/fractal
utility_score: 9
why_read: This description introduces Fractal, a system for hierarchical, self-organizing
  AI agents. Readers will learn how these agent loops structure problems into a dynamic
  tree and maintain control with defined boundaries.
---

Building complex AI agents? The 'fractal' approach offers a compelling paradigm for hierarchical agent loops with recursive self-organization. This open-source tool lets agents dynamically decompose tasks.

Imagine an agent iterating towards a goal in its own Git worktree, then spawning child nodes for separable subtasks. The system grows a tree structure that adapts to the problem, rather than forcing a fixed plan.

Crucially, each loop is bounded by hard caps on iterations, depth, and cost. All operational metadata lands in a local SQLite database, offering real-time visibility through a terminal UI. This is a powerful blueprint for scalable, observable multi-agent systems.