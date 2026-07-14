---
title: Cheapest Coding Agent Tool Surface Varies by Task and Design
source: arxiv
url: http://arxiv.org/abs/2607.10569v1
date: '2026-07-12'
tags:
- agent-cost
- agent-design
- arxiv
- bash
- catchup
- code-execution
- coding-agents
- cs.AI
- cs.LG
- cs.SE
- swe-bench-mini
- task-regime
- tool-surfaces
arxiv_id: '2607.10569'
categories: cs.SE, cs.AI, cs.LG
why_read: This analysis provides critical insights into evaluating AI coding agents,
  showing how the optimal and cheapest tool surface depends on both the task type
  and agent design. Readers will learn that cache-adjusted cost, not pass rates, is
  the key performance metric.
authors:
- Hong Yang
- Qi Yu
- Travis Desell
---

Coding agents are powerful, but are we using their tools efficiently? A new study reveals a fascinating insight: restricting a coding agent to a single `execute_code` tool can often be cheaper or statistically tied with more "tool-rich" rivals.

This is not a universal rule, though. The optimal tool surface depends jointly on the task regime and the specific agent design. For instance, on SWE-bench, the `code_only` approach was significantly cheaper for Codex.

Critically, the cost signal lives in cache-adjusted cost, not just raw pass rates, which tend to remain invariant across tool surfaces for tested model sizes. This indicates that focusing on execution environment optimization can yield substantial savings without sacrificing accuracy.

Consider your agent's task and its underlying model; a simpler tool access model might just be your most cost-effective path.
