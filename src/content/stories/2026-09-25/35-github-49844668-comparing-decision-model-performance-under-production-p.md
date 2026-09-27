---
title: Comparing decision model performance under production pressures
source: github
url: https://github.com/gazelle93/decision-models-under-pressure
date: '2026-09-25'
tags:
- accuracy
- candidate-list-size
- catchup
- decision-models
- distractor-difficulty
- github
- jev-model
- model-performance
- option-reordering
- production-pressure
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49844668'
comments: https://news.ycombinator.com/item?id=49844668
why_read: This text compares the performance of seven decision models under increasing
  complexity, revealing how factors like candidate list size and option reordering
  affect their accuracy. Readers will gain insight into model robustness and specific
  trade-offs when facing production pressures.
authors:
- lovegreenlife
---

Building reliable AI agents requires understanding how they break under pressure. This GitHub project offers crucial benchmarks for decision models, testing them against growing candidate lists, shuffled option orders, and increasingly plausible wrong answers.

What stands out is how different models react. Some like Jev performed well with growing lists and hard distractors, but changed answers significantly when option order was shuffled. Other open models, while less accurate overall, showed zero change due to reordering.

This is a practical lesson in how context engineering impacts LLM reasoning. Knowing these failure modes helps you design more robust prompts and systems, especially when developing agents that interact with dynamic or adversarial inputs. Do not just pick a model; understand its failure modes.
