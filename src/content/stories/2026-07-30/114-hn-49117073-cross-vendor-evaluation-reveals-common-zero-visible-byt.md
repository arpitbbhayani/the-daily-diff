---
authors:
- Rayan Pal
comments: https://news.ycombinator.com/item?id=49117073
date: '2026-07-30'
depth_score: 8
hn_id: '49117073'
image: /infographics/114-hn-49117073-cross-vendor-evaluation-reveals-common-zero-visible-byt.jpg
interest_score: 8
novelty_score: 8
section: ai
source: hn
tags:
- catchup
- cross-vendor-evaluation
- hn
- language-models
- model-output
- voids
- zero-visible-byte-executions
title: Cross-vendor evaluation reveals common zero-visible-byte language model executions
url: https://zenodo.org/records/21696066
utility_score: 7
why_read: This study identifies and quantifies 'Voids' – successful language model
  executions with zero visible output. Readers will learn about this common, cross-vendor
  phenomenon and its implications for understanding LLM behavior.
---

LLMs can return a 'successful' response with absolutely zero visible output bytes, a phenomenon termed "Semantic Voids." A new cross-vendor study found this happens in 37.09% of single-turn trials across GPT, Claude, Gemini, and Kimi models.

This is not an error or refusal; the provider reports success. The paper rigorously categorizes these voids, demonstrating that recognized output-budget termination does not explain all cases. It is a subtle, yet pervasive, failure mode.

For engineers building robust LLM applications, understanding these voids is critical. It impacts parsing logic, retry mechanisms, and the reliability of multi-step agentic workflows. Do not assume a successful response implies a non-empty one.