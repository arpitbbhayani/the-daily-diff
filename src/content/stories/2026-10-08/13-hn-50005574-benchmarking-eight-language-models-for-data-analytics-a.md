---
title: Benchmarking eight language models for data analytics agents
source: hn
url: https://blog.getcassis.com/new-llms-is-your-app-keeping-up/
date: '2026-10-08'
tags:
- analytics-agent
- catchup
- context-retrieval
- hn
- llm-benchmarking
- model-evaluation
- query-generation
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '50005574'
comments: https://news.ycombinator.com/item?id=50005574
why_read: Read this to understand how to design a repeatable benchmark for selecting
  language models in specialized analytics workflows. You will learn how context structure,
  reasoning effort, and query generation influence accuracy and cost.
authors:
- Matthieu Geoffray
---

When an analytics agent fails, the root cause is rarely just the raw model. It usually comes down to three bottlenecks: missing context, inability to navigate structured definitions, or pure query generation failure.

A benchmark testing eight production LLMs across 90 real-world database queries reveals how context harnesses shift performance. Rather than relying on generic provider metrics, running models against custom business logic highlights sharp divergences in query planning and token costs.

More reasoning tokens do not automatically produce better analytical answers. When context is clean and structured, lighter models frequently outpace bloated inference pipelines without inflating latency.

Evaluating agents requires testing against actual domain schemas rather than generic synthetic leaderboards.
