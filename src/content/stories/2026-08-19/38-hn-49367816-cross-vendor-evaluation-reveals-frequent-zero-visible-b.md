---
title: Cross-vendor evaluation reveals frequent zero-visible-byte LLM executions
source: hn
url: https://zenodo.org/records/21696066
date: '2026-08-19'
tags:
- catchup
- hn
- large-language-models
- llm-evaluation
- semantic-void
- zero-visible-byte-output
section: ai
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 8
hn_id: '49367816'
comments: https://news.ycombinator.com/item?id=49367816
why_read: This study quantifies the prevalence of 'Voids' (successful zero-visible-byte
  outputs) from various large language models. Readers will learn about this specific
  type of LLM execution and its significant frequency across providers.
authors:
- Rayan Pal
---

Imagine your LLM agent just... does nothing. Not an error, not a refusal, but a successful, zero-byte response. This new preprint reveals "Voids" 

successful LLM executions that return no visible output 

occur in a surprising 37% of trials across major models like OpenAI, Anthropic, Google, and Moonshot.

This phenomenon is not a bug, but an observed behavior that developers building robust AI applications and agents must account for. Understanding these distinct void subtypes (V0, V1, V2, VU) is crucial for designing resilient LLM-powered systems.

The study offers deep empirical insight, providing verifiable data and configurations. For senior engineers, it highlights a subtle but critical failure mode, changing how you might approach error handling and response parsing in your LLM infrastructure. It is not just about understanding what LLMs say, but also what they do not say.
