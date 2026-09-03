---
title: AI code generation tools vary seventy-fold in token use
source: hn
url: https://thenewstack.io/agent-harness-token-costs/
date: '2026-09-01'
tags:
- ai-code-assistants
- catchup
- hn
- model-performance
- token-usage
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49520778'
comments: https://news.ycombinator.com/item?id=49520778
why_read: Read this to understand how different AI code assistants, despite using
  identical underlying models, can exhibit a dramatic 70-fold difference in token
  consumption.
authors:
- sunilkumardash9
---

It is a common misconception that LLM performance and cost are solely dictated by the choice of the underlying model. Production data shows that the agent harness, or how the model is integrated, has a far greater impact than many realize.

A recent observation revealed that running an identical LLM through different agent frameworks resulted in an astonishing 70-fold difference in token usage. This is not a minor tweak; it represents a monumental divergence in operational cost and efficiency for the same core AI capability.

This insight underscores that engineering the surrounding infrastructure, specifically how context, tools, and prompts are managed, is paramount. Focusing solely on model-level optimizations while neglecting the harness design is a sure path to inefficient and expensive AI applications. The real leverage is often in the system around the model.
