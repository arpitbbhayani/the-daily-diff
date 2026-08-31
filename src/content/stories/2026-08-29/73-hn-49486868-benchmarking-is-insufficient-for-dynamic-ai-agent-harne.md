---
title: Benchmarking is insufficient for dynamic AI agent harness improvement
source: hn
url: https://www.roderick.dev/writing/2026-08-28-obsessing-harnesses/
date: '2026-08-29'
tags:
- agent-harnesses
- ai-agents
- benchmarking
- catchup
- dynamic-systems
- evaluation
- hn
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49486868'
comments: https://news.ycombinator.com/item?id=49486868
why_read: This text argues that traditional benchmarking is inadequate for evaluating
  improvements in dynamic AI agent harnesses. Readers will learn why measuring agent
  progress is complex when the system around the model can change itself.
authors:
- Tom Roderick
---

Most agent frameworks fail not because the underlying model is weak, but because the harness feeds it the wrong context at the wrong time. A team running production coding agents found that trimming tool output to the last 200 lines cut token usage by 40 percent and, surprisingly, improved task success rate.

The agent was not getting smarter with more context, it was getting distracted by it. This mirrors a lesson every senior engineer already knows from logging: more data does not mean better signal.

The fix here was not a bigger model, it was better context engineering.
