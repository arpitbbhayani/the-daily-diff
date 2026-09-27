---
title: Coding agent costs vary wildly on identical real bug fixes
source: hn
url: https://www.ariwilson.com/writing/bakeoff-results/
date: '2026-09-24'
tags:
- benchmarking
- catchup
- coding-agents
- cost-efficiency
- deterministic-guardrails
- hn
- software-evals
section: ai
interest_score: 8
depth_score: 7
utility_score: 8
novelty_score: 8
hn_id: '49830166'
comments: https://news.ycombinator.com/item?id=49830166
why_read: Read this to understand how different coding agents and harnesses compare
  in cost and performance on real-world engineering tasks. It offers practical insights
  into building private evaluation suites and implementing guardrails to keep agentic
  code quality high.
authors:
- Ari Wilson
---

Evaluating coding agents on public benchmarks often produces misleading numbers due to training set contamination. A private evaluation across 277 recorded runs on unseen production repositories reveals that the cost to resolve identical bug fixes spans from 0.4 cents to over 2 dollars depending entirely on the harness and model pairing.

Running 10 distinct model-harness combinations across real-world application bugs demonstrated that raw model intelligence is only half the equation. The harness architecture, context management, and deterministic guard rails dictate both failure rates and token spend. Unconstrained agents frequently loop through speculative code edits, burning API tokens without making functional progress.

The most effective engineering pattern was not adding more elaborate natural language instructions, but enforcing deterministic boundaries. Integrating strict unit test validation, automated formatting checks in CI, and explicit architectural roadmaps kept code quality high while autonomous tools drafted changes.

When deploying coding agents into internal developer workflows, measure against hidden private test suites rather than generic benchmarks to understand actual economic cost and code reliability.
