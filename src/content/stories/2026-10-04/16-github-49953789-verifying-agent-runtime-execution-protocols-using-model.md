---
title: Verifying agent runtime execution protocols using model checking
source: github
url: https://github.com/untyped-ai/untyped
date: '2026-10-04'
tags:
- agent-harnesses
- catchup
- github
- idempotency
- model-checking
- runtime-verification
- tla-plus
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49953789'
comments: https://news.ycombinator.com/item?id=49953789
why_read: Learn how to verify autonomous agent execution protocols against critical
  safety and idempotency invariants under distributed retry conditions.
authors:
- damianabramov
---

Building reliable autonomous AI agent harnesses requires treating tool execution like an unreliable distributed systems protocol. When an agent runtime retries failed requests, tool calls can be silently dropped, executed multiple times, or run with lost acknowledgments.

Untyped addresses this vulnerability by formalizing agent interaction rules into TLA+ specifications and model-checking recorded runtime traces against them. Instead of trusting prompt engineering to prevent double charges or unauthorized actions, it mathematically verifies that a harness produces at most one side effect per step, requires human approval before destructive actions, and stays strictly within API token budgets.

By translating agent execution logs into state transition traces, engineers can detect subtle concurrency bugs and broken retry loops before deploying agents into production systems.

Model checking provides the formal guardrails that autonomous agent systems have been missing.
