---
title: Handoffs, not models, cause most multi-agent system failures
source: hn
url: https://sqlhammer.com/index.php/2026/05/28/build-t-shaped-agents-not-assembly-lines/
date: '2026-08-18'
tags:
- ai-failures
- catchup
- context-loss
- handoffs
- hn
- multi-agent-systems
- system-design
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49350284'
comments: https://news.ycombinator.com/item?id=49350284
why_read: This article explains why current multi-agent system designs often fail
  due to context loss during handoffs between specialized agents, rather than model
  quality. Readers will learn the critical role of work division in agentic systems
  and identify the primary failure surface.
authors:
- Derik Hammer
---

Most agent frameworks fail not because the underlying model is weak, but because the harness feeds it the wrong context at the wrong time. A team running production coding agents found that trimming tool output to the last 200 lines cut token usage by 40 percent and, surprisingly, improved task success rate.

The agent was not getting smarter with more context, it was getting distracted by it. This mirrors a lesson every senior engineer already knows from logging: more data does not mean better signal.

The fix here was not a bigger model, it was better context engineering.
