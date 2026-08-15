---
authors:
- Shailja Thakur
- Sungeun An
- Chad DeLuca
- Hima Patel
comments: https://news.ycombinator.com/item?id=49282632
date: '2026-08-13'
depth_score: 8
hn_id: '49282632'
image: /infographics/89-hn-49282632.jpg
interest_score: 8
novelty_score: 8
section: ai
source: hn
tags:
- benchmark-drift
- catchup
- hn
- llm-benchmarks
- model-fragility
- phrasing-sensitivity
- wording-effect
title: LLM benchmark scores drift with problem wording, especially for strong models
url: https://arxiv.org/abs/2608.11694
utility_score: 9
why_read: This paper introduces the 'wording effect' and 'two-way drift' in LLM benchmarks,
  demonstrating that minor rephrasing of problems routinely flips model answers. Readers
  will learn that stronger models are surprisingly more sensitive to wording and that
  fragility often lies in the rephrasing itself, challenging current evaluation methods.
---

LLM benchmarks are often a mirage. New research reveals a "wording effect" where simple rephrasing of a problem, while preserving its meaning, routinely flips an LLM's answer from correct to incorrect, or vice versa.

The most surprising finding? This sensitivity does not fade as models get better. In fact, strong models lose far more from rephrasing than they gain, meaning their high benchmark scores are often disproportionately dependent on the specific phrasing they were given.

This is a critical insight for anyone building with or evaluating LLMs. The fragility often belongs to the rephrasing itself, not solely the model's capabilities. It highlights the urgent need for more robust evaluation methodologies that account for linguistic, referential, pragmatic, and structural variations in prompts. Your prompt engineering matters more than ever.