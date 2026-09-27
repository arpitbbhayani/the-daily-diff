---
title: Enforcing implicit code assumptions automatically using invariant scoring
source: github
url: https://github.com/savarin/lean-agent
date: '2026-09-24'
tags:
- automated-refactoring
- catchup
- code-invariants
- github
- invariant-enforcement-score
- type-safety
section: engineering
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49829771'
comments: https://news.ycombinator.com/item?id=49829771
why_read: Learn how lean-agent automatically identifies unenforced assumptions in
  your code and refactors them with strong types and validations.
authors:
- savarin
---

Most runtime bugs stem from implicit invariants that the code silently assumes but never formally enforces. A common transfer function, for instance, often executes arithmetic directly without checking whether the account balances exist or if amounts are strictly positive.

Lean-agent bridges the gap between formal verification and everyday application code. It pairs the Lean theorem prover with Claude to scan your repository, calculate an Invariant Enforcement Score, and iteratively generate typed constraints until validation covers every edge case.

Because it runs your existing test suite at every single iteration, any change that breaks regressions is automatically discarded before producing a PR. This gives teams an automated way to introduce rigorous type-level invariants into critical paths without manually rewriting domain models.
