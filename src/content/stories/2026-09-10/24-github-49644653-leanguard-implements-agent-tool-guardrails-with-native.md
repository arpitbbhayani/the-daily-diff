---
title: LeanGuard implements agent tool guardrails with native Lean policies
source: github
url: https://github.com/DebarghaG/LeanGuard
date: '2026-09-10'
tags:
- agent-tool-guardrails
- catchup
- github
- lean-4
- leanguard
- python-host
- runtime-guardrails
- temporal-policies
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49644653'
comments: https://news.ycombinator.com/item?id=49644653
why_read: Read this to understand LeanGuard, a system for implementing runtime guardrails
  for agent tool use. You will learn how it uses native Lean 4 declarations for policies
  and a Python host for secure enforcement.
authors:
- DebarghaG
---

Building reliable AI agents requires more than just powerful LLMs; it needs robust safety mechanisms. This project introduces a novel approach using Lean 4 for formal verification of agent tool use policies.

Instead of vague heuristic checks, you can define precise temporal policies in Lean 4 that are rigorously evaluated at runtime. A Python host intercepts tool calls, obtains trusted observations, and only dispatches actions if the native Lean engine permits.

This pushes the boundary on agent safety, moving towards provably correct agent behavior. It is a significant step for anyone serious about deploying secure, production-grade AI agents.
