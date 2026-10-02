---
title: Regularizing the search loop prevents overfitting in self-improving harnesses
source: hn
url: https://regularized-rsi.com/
date: '2026-10-01'
tags:
- agent-harnesses
- benchmark-overfitting
- catchup
- hn
- leakage-critic
- recursive-self-improvement
- search-regularization
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49920456'
comments: https://news.ycombinator.com/item?id=49920456
why_read: This text explains why recursive self-improvement often overfits benchmark
  splits and introduces RRSI as a solution. Readers will learn concrete mechanisms
  like annealed edit budgets and leakage critics that enable genuine out-of-distribution
  gains.
authors:
- yarapavan
---

Most recursive self-improvement loops for AI agents fail because they overfit the exact benchmarks used during optimization. When evaluated on out-of-distribution tasks, previous evolutionary search methods saw their performance gains collapse entirely.

Regularized Recursive Self-Improvement (RRSI) solves this by constraining the search process rather than restricting the harness components. Instead of unbounded prompt and tool modifications, RRSI uses an annealed edit budget where early rounds explore bundled changes and late rounds isolate single attributable modifications.

To prevent spurious improvements, the framework introduces three strict guardrails: a leakage critic that screens candidates for dataset-specific logic before execution, a noise-adjusted score floor that requires gains to clear baseline variance, and a cost rule demanding that extra token consumption pays for itself in measured accuracy. In benchmarks, RRSI outperformed prior methods by up to 22.9 percent on unseen tasks.

Agent optimization works best when you regularize the evolutionary loop instead of hand-crafting prompts.
