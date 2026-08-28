---
title: Agent harness evolution, not LLM, shapes coding agent quality
source: hn
url: https://arxiv.org/abs/2607.03691
date: '2026-08-26'
tags:
- agent-harness
- catchup
- coding-agents
- hn
- llm
- longitudinal-study
- software-quality
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49453846'
comments: https://news.ycombinator.com/item?id=49453846
why_read: This paper reveals that the rapid evolution of agent harnesses significantly
  impacts coding agent quality, often leading to regressions attributed incorrectly
  to the LLM. Readers will gain insight into the critical role of middleware in AI
  agent performance and the necessity of studying its development.
authors:
- Oussama Ben Sghaier
- Hao Li
- Bram Adams
- Ahmed E. Hassan
---

It is often assumed that if an AI agent system degrades, the underlying large language model (LLM) is to blame. New research reveals this is frequently a misattribution; the "agent harness" is the true culprit.

The agent harness is the middleware orchestrating prompts, tool execution, and context management around the LLM. A longitudinal study across five open-source coding agent harnesses found their extreme release velocities (over two releases per day) introduce significant quality regressions, independent of the LLM's performance.

This study shows that fixing your agent's performance means looking beyond the model and focusing on the systematic engineering of the surrounding context and tool orchestration. Do not just upgrade your LLM; upgrade your agent's infrastructure.
