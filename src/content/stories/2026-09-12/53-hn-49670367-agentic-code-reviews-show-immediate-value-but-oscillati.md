---
title: Agentic Code Reviews Show Immediate Value But Oscillating Quality
source: hn
url: https://blog.watson-labs.co.uk/6-learnings-from-12000-agentic-code-reviews/
date: '2026-09-12'
tags:
- agentic-code-review
- ai-agents
- automated-review
- catchup
- code-quality
- hn
- risk-tolerance
- software-factory
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49670367'
comments: https://news.ycombinator.com/item?id=49670367
why_read: This text provides data-driven insights into the performance and challenges
  of agentic code review systems. Readers will learn how AI-powered software factories
  perform in practice, including their efficiency, quality convergence, and common
  failure modes.
authors:
- ultral
---

Running AI agents in production for code reviews is no longer a futuristic dream; it is happening. One team shared fascinating metrics from 12,000 agentic code reviews, revealing concrete insights into their "software factory."

A surprising finding is that 65 percent of issues are merge-ready after just one agentic review round, but beyond round four, extra reviews introduce as much uncertainty as they try to fix. This highlights an oscillation rather than convergence in complex agentic loops. Also, the agent is far more likely to write code incorrectly than to plan incorrectly.

This data changes how you think about building autonomous development pipelines. It is not just about making agents write code, but about effectively managing their iterative refinement and understanding their specific failure modes.
