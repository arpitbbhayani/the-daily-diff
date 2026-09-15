---
authors:
- eminsk
comments: https://news.ycombinator.com/item?id=49683344
date: '2026-09-13'
depth_score: 9
hn_id: '49683344'
image: /infographics/01-github-49683344.jpg
interest_score: 9
novelty_score: 9
section: ai
source: github
tags:
- agentjit
- ai-agents
- catchup
- deterministic-code
- github
- just-in-time-compiler
- latency-reduction
- llm-workflows
title: AgentJIT compiles multi-step LLM workflows into deterministic Python
url: https://github.com/eminsk/agentjit
utility_score: 9
why_read: This project demonstrates how Just-In-Time compilation can dramatically
  reduce latency and flakiness in multi-step AI agent workflows, making them deterministic
  and efficient.
---

Productionizing LLM agents often hits a wall with massive latency and flakiness, turning 30-second workflows into a bottleneck. Enter AgentJIT, a Just-In-Time compiler designed specifically for AI agent trajectories.

This project boasts the ability to compile multi-step LLM workflows into deterministic Python code executing in just 0.08 milliseconds with zero token cost. Imagine moving from stochastic, slow loops to near-instant, reliable agent execution.

AgentJIT supports various Python runtimes, including CPython with and without GIL, and PyPy, making it a versatile tool for any engineer looking to push their agent systems to production scale. This is not just an incremental improvement; it is a fundamental shift in how we approach agent performance.