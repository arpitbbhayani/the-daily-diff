---
title: Doberman-Core blocks unsafe AI agent actions at runtime
source: github
url: https://github.com/fu351/Doberman-Core
date: '2026-08-17'
tags:
- ai-agents
- ai-guardrails
- authorization
- catchup
- github
- runtime-security
- tool-call-monitoring
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49336757'
comments: https://news.ycombinator.com/item?id=49336757
why_read: This text introduces Doberman-Core, a system that acts as a guard dog for
  AI agents. Readers will learn how it prevents unsafe or unintended actions by gating
  inputs, outputs, and tool calls at runtime.
authors:
- fu351
---

Deploying AI agents, especially coding agents, into production comes with significant risks: imagine an autonomous agent accidentally deleting a database or leaking API keys. Doberman addresses this head-on by acting as an AI watchdog, providing crucial runtime guardrails.

Unlike advisory systems, Doberman sits directly on the execution path, functioning as a transparent MCP proxy or host hook. It intercepts every single input, output, and tool call, turning each action into an explicit, auditable decision point before execution. This prevents unsafe or unintended operations in real-time.

This is an indispensable piece of infrastructure for any team building production-grade AI agents. It shifts security from an afterthought to an integral part of the agent's interaction loop, providing a robust defense against common agentic failures and vulnerabilities.
