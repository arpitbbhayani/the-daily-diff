---
title: Decision models make LLM judgment cheap for email classification
source: hn
url: https://builders.abnormal.ai/p/classifying-emails-with-jev-and-the
date: '2026-10-08'
tags:
- catchup
- decision-models
- email-classification
- hn
- jev
- openai-decisions-api
- zero-shot-classification
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '50007041'
comments: https://news.ycombinator.com/item?id=50007041
why_read: Read this to understand how decision models deliver low-cost LLM-level reasoning
  for high-volume email classification. You will learn how single forward-pass probability
  scoring can replace expensive token generation and manual feature engineering.
authors:
- Shrivu Shankar
---

Running generative language models across billions of requests per week usually destroys your infrastructure budget. Abnormal Security evaluated a different architecture for email classification: decision models that assess multiple questions in a single forward pass without generating output tokens.

Because these models output probabilities directly rather than decoding sequential tokens, the inference cost matches the raw cost of reading the prompt. This unlocks language model reasoning at a tiny fraction of the standard generative compute budget.

They benchmarked 40 different configurations, including OpenAI Decisions API, self-hosted open models, and frontier setups on nearly 2,000 synthetic production-grade edge cases. For engineers designing high-throughput detection pipelines, single-pass decision heads offer a practical way to replace complex hand-engineered feature pipelines with natural language specifications.

If your architecture suffers from generative latency and token billing overhead, zero-generation decision models might be the operational middle ground you need.
