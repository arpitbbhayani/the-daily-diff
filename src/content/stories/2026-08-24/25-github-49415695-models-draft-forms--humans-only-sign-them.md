---
title: Models draft forms, humans only sign them
source: github
url: https://github.com/Jang-woo-AnnaSoft/execution-state-preflight/blob/main/who-fills-in-the-form.md
date: '2026-08-24'
tags:
- ai-models
- automation
- catchup
- form-filling
- github
- user-responsibility
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49415695'
comments: https://news.ycombinator.com/item?id=49415695
why_read: This article explains how AI models are changing form-filling by taking
  over the drafting, shifting human interaction to merely signing. Readers will learn
  about the implications of models deciding what to ask and fill.
authors:
- offaxis
---

LLM agents often fail not due to poor reasoning, but because they struggle with tool interaction. This analysis pinpoints three root causes: Value, Condition, and Intent failures.

The core issue is often that the model does not recognize when it lacks crucial information, leading it to fill in blanks incorrectly rather than asking for user input. This shifts the workflow: the model drafts, the human signs.

Understanding these specific failure modes is critical for building reliable agentic systems. Engineers can leverage this framework to design better prompts, robust tool APIs, and more intelligent interaction patterns to prevent agents from going off-rail.
