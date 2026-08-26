---
title: 1040Bench evaluates frontier agents for long-horizon tax preparation
source: hn
url: https://verona.so/blog/1040bench
date: '2026-08-24'
tags:
- 1040bench
- catchup
- frontier-agents
- hn
- model-evaluation
- tax-preparation
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49421649'
comments: https://news.ycombinator.com/item?id=49421649
why_read: This introduces 1040Bench, a benchmark evaluating frontier AI models on
  real-world, long-horizon tax preparation. Readers will learn about its methodology
  and current model performance on Form 1040 tasks.
authors:
- David Xu
- Tommy Colitsas
---

Evaluating AI agents on genuinely complex, long-horizon tasks like preparing a Form 1040 tax return is a game changer for applied AI. 1040Bench uses anonymized real-world tax binders, giving agents tools to search documents, consult IRS materials, execute Python, and use a notepad.

This is not a toy problem. It requires tracing and reconciling information across multiple documents (W-2s, 1099s, brokerage statements) and the ability to flag fields where evidence is insufficient. The current top model only achieves 68.6 percent accuracy, highlighting both the progress and the significant remaining challenges.

Understanding these benchmarks provides critical insights into the practical limitations and potential of deploying agentic systems in production environments. It shows where current frontier models stand and the work ahead to achieve true autonomy in complex, real-world workflows.
