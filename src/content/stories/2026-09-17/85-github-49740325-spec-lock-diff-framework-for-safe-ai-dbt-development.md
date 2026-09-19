---
title: Spec-Lock-Diff framework for safe AI dbt development
source: github
url: https://github.com/miloskimatheus/spec-lock-diff/
date: '2026-09-17'
tags:
- ai-agents
- catchup
- dbt-development
- github
- infrastructure-limits
- numeric-diffs
- risk-management
- sql-generation
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49740325'
comments: https://news.ycombinator.com/item?id=49740325
why_read: This framework outlines a method to mitigate risks in dbt development using
  AI agents. Readers will learn how 'spec-lock-diff' phases, involving structured
  specifications, infrastructure limits, and numeric diffs, can enhance safety and
  control.
authors:
- Miloski Matheus
---

Integrating AI agents into production coding workflows, especially for critical tasks like dbt transformations, introduces significant risks. The "Spec-Lock-Diff" framework offers a compelling solution to manage these challenges effectively.

This framework shifts the paradigm of agentic development. Instead of reviewing agent-generated code for errors, the focus moves to three phases: human-defined specifications, deterministic infrastructure-level locks on cost and behavior, and a review process centered on numeric differences between production and the agent's output.

The brilliance lies in trusting the human for "what" (the spec) and the infrastructure for "guardrails" (the lock), while the human reviews "impact" (the diff). This approach tackles the hallucination problem head-on, reducing reliance on direct code review of agent output, which can be inefficient and error-prone.

This is a powerful blueprint for any senior engineer looking to safely and effectively deploy AI agents for code generation in real-world environments.
