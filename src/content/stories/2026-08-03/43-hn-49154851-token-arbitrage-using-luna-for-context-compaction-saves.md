---
title: Token arbitrage using Luna for context compaction saves 84%
source: hn
url: https://dirac.run/posts/token-arbitrage-sol-vs-luna
date: '2026-08-03'
tags:
- catchup
- context-compaction
- cost-savings
- hn
- large-language-models
- luna
- openai-models
- sol
- token-arbitrage
section: ai
interest_score: 8
depth_score: 7
utility_score: 9
novelty_score: 7
hn_id: '49154851'
comments: https://news.ycombinator.com/item?id=49154851
why_read: This post demonstrates how using specific OpenAI models like Luna for context
  compaction can drastically reduce operational costs in long agentic loops. Readers
  will learn a practical 'token arbitrage' strategy to optimize their LLM expenses.
authors:
- GodelNumbering
---

A crucial insight for optimizing LLM costs in agentic systems is recognizing that not all tasks require the most expensive models. This concept, dubbed "token arbitrage," reveals how to save up to 84 percent by strategically swapping models.

The core idea is to use premium models like Sol for high-value tasks such as coding, and then switch to more cost-effective models like Luna for tasks like context compaction or summarization. Compaction, while token-intensive, primarily requires reliable extraction and not necessarily advanced reasoning, making it ideal for a cheaper model.

This approach provides a direct, actionable strategy for senior engineers building LLM-powered applications. By understanding the distinct capabilities and pricing of various models, you can implement dynamic model switching within your agentic loops, leading to substantial reductions in your operational budget.
