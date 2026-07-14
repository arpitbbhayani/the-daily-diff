---
title: Sliding-Window Mixing Condition Ensures Sublinear Regret in Dynamic Bandits
source: arxiv
url: http://arxiv.org/abs/2607.10571v1
date: '2026-07-12'
tags:
- arxiv
- catchup
- cs.AI
- cs.LG
- dynamic-graphs
- explore-then-commit-algorithms
- local-movement
- multi-armed-bandits
- sliding-window-mixing
- stat.ML
- sublinear-regret
arxiv_id: '2607.10571'
categories: cs.LG, cs.AI, stat.ML
why_read: This paper presents a framework for stochastic multi-armed bandits on dynamic
  graphs under local movement constraints, introducing a structural condition (sliding-window
  mixing) that enables stable exploration and navigation. Readers will learn about
  novel local explore-then-commit algorithms achieving sublinear expected regret in
  this complex setting.
authors:
- Sourav Chakraborty
- Amit Kiran Rege
- Claire Monteleoni
- Lijun Chen
---

Navigating dynamic environments with limited information is a core challenge for AI agents. Imagine an agent that can only move to its immediate neighbors on a constantly changing graph, trying to find the best "arm" or node.

Traditional bandit problems assume you can always jump to the best arm once identified. This research highlights that for local-movement agents on dynamic graphs, optimal arm identification is decoupled from exploitation. Reaching it is a separate, complex problem.

The paper introduces "local explore-then-commit" algorithms, showing how an agent can achieve sublinear regret even with these strict local movement constraints and evolving topologies. They identify a "sliding-window mixing" condition that ensures graph stability for both exploration and navigation.

This work offers fundamental insights for designing robust agents operating under severe locality and dynamism, pushing the boundaries of practical agentic exploration.
