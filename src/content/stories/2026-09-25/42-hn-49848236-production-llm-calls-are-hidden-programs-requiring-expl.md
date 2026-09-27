---
title: Production LLM calls are hidden programs requiring explicit decomposition
source: hn
url: https://seldon-ai.com/blog/better-primitives-than-text-generation
date: '2026-09-25'
tags:
- catchup
- entity-linking
- extraction-pipelines
- frontier-models
- hn
- latent-programs
- llm-calls
- named-entity-recognition
- program-decomposition
- relation-extraction
- schema-validation
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49848236'
comments: https://news.ycombinator.com/item?id=49848236
why_read: This article reveals that LLM generate calls often conceal multi-step programs
  rather than being atomic operations. Readers will gain insight into decomposing
  these calls into explicit, machine-interpretable operational chains for improved
  system design and debugging.
authors:
- nlpnerd
---

Relying solely on `generate()` for LLM applications is a critical mistake. Many 'text generation' tasks are actually latent programs comprised of distinct operations like classification, extraction, or linking.

By explicitly defining these primitives, you gain control over the failure modes and improve the reliability of your AI systems. Imagine an LLM application as a pipeline: named entity recognition, entity normalization, candidate generation, and then schema validation. Each step can be monitored and managed.

This shift in perspective, from a single `generate` call to a structured sequence of operations, is vital for senior engineers building production-grade AI, offering clearer debugging, better performance, and more robust output.
