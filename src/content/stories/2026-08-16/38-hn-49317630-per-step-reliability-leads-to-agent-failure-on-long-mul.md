---
title: Per-step reliability leads to agent failure on long multi-step tasks
source: hn
url: https://construct.computer/blog/agent-task-half-life/
date: '2026-08-16'
tags:
- ai-agents
- catchup
- half-life
- hazard-rate
- hn
- multi-step-tasks
- reliability
section: ai
interest_score: 8
depth_score: 7
utility_score: 8
novelty_score: 8
hn_id: '49317630'
comments: https://news.ycombinator.com/item?id=49317630
why_read: This post explains why AI agents frequently fail on long multi-step tasks.
  Readers will learn that a constant per-step failure rate, not increasing task difficulty,
  creates a 'half-life' effect leading to overall job unreliability.
authors:
- Ankush
---

Your AI agents are not getting smarter with more steps; they are just accumulating more chances to fail. A 95% per-step success rate sounds good, but for a ten-step task, that agent finishes only six times out of ten. This is not due to accumulating confusion, but a constant, flat hazard rate.

This 'half-life' concept means that agent performance across task lengths is explained by a constant rate of failure per unit of work, not increasing complexity. The practical takeaway is to manage multi-step tasks by acknowledging this decay constant rather than assuming linear reliability.

Understanding this allows engineers to design more resilient agentic workflows, anticipate failure points, and build more robust systems. It shifts the focus from chasing perfect models to engineering for inherent task-based reliability limits.
