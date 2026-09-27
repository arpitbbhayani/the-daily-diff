---
title: Using fast decision models to supervise coding agents
source: github
url: https://github.com/thruwire/foreman
date: '2026-09-26'
tags:
- agent-supervision
- automated-verification
- catchup
- coding-agents
- github
- jev-model
- software-factory
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49860753'
comments: https://news.ycombinator.com/item?id=49860753
why_read: Read this to understand how Foreman uses a fast decision model to oversee,
  evaluate, and steer slower coding agents in automated software engineering workflows.
authors:
- thruwire
---

Autonomous coding agents frequently wander off track, waste tokens on endless loops, or declare victory before writing adequate tests. Adding more context to the worker agent often makes this worse rather than better.

Foreman addresses this by introducing an explicit supervisory architecture over worker models like Codex or OpenCode. Instead of relying on a single monolithic model to both execute code and evaluate its own work, Foreman decouples execution from oversight. A dedicated, fast decision model continuously samples the factory floor to evaluate concrete signals: requirements satisfaction, test coverage sufficiency, repository instruction drift, and worker health.

This separation of concerns mirrors classical distributed systems control loops. The worker focuses entirely on writing code against the task specification, while the supervisor independently computes whether the state transition is valid, whether human escalation is required, or whether the task is truly finished.

Decoupling execution from verification is rapidly becoming the standard design pattern for reliable agentic systems.
