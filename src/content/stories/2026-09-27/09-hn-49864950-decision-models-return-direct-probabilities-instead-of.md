---
title: Decision models return direct probabilities instead of parsing text
source: hn
url: https://soniqo.audio/blog/gliner-decide-vs-jev
date: '2026-09-27'
tags:
- catchup
- deberta-v3-large
- decision-models
- gliner
- hn
- jev
- mlx-swift
- text-classification
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49864950'
comments: https://news.ycombinator.com/item?id=49864950
why_read: Understand how dedicated decision models replace fragile generative JSON
  parsing with direct label probabilities. You will learn the performance and architectural
  trade-offs between running local weights and calling hosted classification APIs.
authors:
- aufklarer
image: /infographics/09-hn-49864950.jpg
---

Using large language models for request routing and categorical classification is an expensive anti-pattern. Passing instructions and schemas to a generative decoder to extract a single JSON token wastes significant GPU cycles and introduces formatting hallucinations.

Decision models like GLiNER2.5-Decide and Jev tackle this problem by returning typed probability distributions across candidate labels in a single encoder forward pass. GLiNER2.5-Decide runs locally as a 340M-parameter DeBERTa-v3 encoder, evaluating candidate classes simultaneously without token-by-token generation.

Because the architecture scores all candidate labels against the input in one step, it eliminates JSON parsing logic and guarantees constrained outputs. In benchmarks, local encoder routing delivers lower latency, zero label drift, and deterministic classification confidence scores that generative models cannot match.

Stop paying generative token tax for deterministic routing decisions.
