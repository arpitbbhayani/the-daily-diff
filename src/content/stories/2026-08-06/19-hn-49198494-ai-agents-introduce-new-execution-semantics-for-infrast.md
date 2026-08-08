---
authors:
- guanlan
comments: https://news.ycombinator.com/item?id=49198494
date: '2026-08-06'
depth_score: 8
hn_id: '49198494'
image: /infographics/19-hn-49198494.jpg
interest_score: 8
novelty_score: 8
section: ai
source: hn
tags:
- agents
- catchup
- execution-semantics
- hn
- infrastructure-redesign
- probabilistic-execution
title: AI agents introduce new execution semantics for infrastructure
url: https://runta.com/blog/agents-arent-software/
utility_score: 8
why_read: This piece explains why AI agents are fundamentally different from traditional
  deterministic software. It highlights the new execution semantics agents introduce
  and argues for a necessary redesign of infrastructure to support them reliably.
---

AI agents are not just another piece of software; their probabilistic nature breaks fundamental assumptions about system reliability. If your infrastructure relies on deterministic code execution, you are headed for trouble when deploying agents.

Traditional software allows reliability to be designed at write-time. But when models make real-time decisions, parts of the execution path become probabilistic. This means you cannot simply bolt agents onto existing stacks. The entire execution layer needs a redesign to handle non-determinism, speculative work, and new recovery patterns.

This article, inspired by insights from Jeff Dean, explains why the deep impact of agents on infrastructure is a new execution semantic. It forces you to rethink latency, reliability, scale, and cost in an entirely new light.

Do not just add agents to your existing systems; rebuild for them.