---
authors:
- michaelrbock
comments: https://news.ycombinator.com/item?id=49006300
date: '2026-07-22'
hn_id: '49006300'
image: /infographics/15-hn-49006300.jpg
interest_score: 8
section: ai
source: hn
tags:
- catchup
- hn
- kimi-k3
- llm-integration
- openrouter
- pdf-processing
- tax-calculation
- ty25
title: Add Kimi K3 support via OpenRouter for TY25 calculations
url: https://github.com/column-tax/tax-calc-bench/pull/93
why_read: This text details the technical integration of the moonshotai/kimi-k3 model
  into the TY25 tax calculation benchmark via OpenRouter. Readers will learn about
  specific implementation choices, configuration parameters, and initial performance
  results for this new model.
---

Can a Chinese LLM accurately file American tax returns? The TaxCalcBench benchmark is now testing Kimi K3, a Chinese AI, on this very complex, real-world task. This pull request provides the integration and initial results.

This evaluation involves sending raw PDF tax documents to the LLM and assessing its ability to reason and produce correct structured outputs. It is a powerful test of an LLM's comprehension, reasoning, and practical application capabilities beyond simple chat.

For senior engineers, this offers a compelling case study in applied AI. It demonstrates how to rigorously benchmark LLMs on high-stakes, domain-specific tasks and provides concrete performance metrics for a less-known model. The detailed results and methodology are invaluable.

Understanding how LLMs perform on such intricate, regulated processes helps inform decisions on where and how to deploy AI safely and effectively in critical business functions.