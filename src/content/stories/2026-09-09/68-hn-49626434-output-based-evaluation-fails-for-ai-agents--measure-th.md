---
title: Output-Based Evaluation Fails for AI Agents, Measure the Path Instead
source: hn
url: https://infere.com/blog/agent-evaluation-passing-evals-isnt-enough/
date: '2026-09-09'
tags:
- ai-agent-evaluation
- catchup
- hn
- multi-step-reasoning
- tool-calling
- trace-based-evaluation
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49626434'
comments: https://news.ycombinator.com/item?id=49626434
why_read: This post explains why traditional output-based evaluation is insufficient
  for AI agents, revealing how it gives false confidence. Readers will learn the importance
  of trace-based evaluation and what metrics to measure for effective agent assessment.
authors:
- saturn5k
---

Relying solely on final output evaluation for AI agents is a dangerous pitfall. While an an agent might produce a "correct" answer, that single-turn success can mask deep-seated reasoning flaws or inefficient tool usage within its multi-step process.

Consider an agent that calls a search tool three times, hallucinates a SQL schema, and only recovers on its final retry. A traditional eval would mark this a pass. A trace-aware judge, however, reveals the costly and flawed journey.

Evaluating agents like workflows, with step-level scoring and span attribution, provides the diagnostic power necessary for robust agent development. You need to see the path, not just the destination for true insight.
