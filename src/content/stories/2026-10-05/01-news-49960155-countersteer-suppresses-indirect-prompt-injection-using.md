---
title: CounterSteer suppresses indirect prompt injection using activation steering
source: news
url: https://arxiv.org/abs/2609.36570
date: '2026-10-05'
tags:
- activation-steering
- catchup
- indirect-prompt-injection
- inference-time-defense
- llm-agents
- news
- residual-stream
section: ai
is_news: true
interest_score: 9
depth_score: 9
utility_score: 8
novelty_score: 9
hn_id: '49960155'
comments: https://news.ycombinator.com/item?id=49960155
why_read: Learn how residual-stream activation steering can mechanistically neutralize
  indirect prompt injections at inference time without fine-tuning or secondary models.
  It demonstrates a robust defense mechanism that preserves benign utility while resisting
  adaptive attacks.
authors:
- Mark Russinovich
image: /infographics/01-news-49960155.jpg
---

Indirect prompt injection remains one of the hardest failure modes in agentic systems, because traditional guardrails often fail once untrusted tool outputs enter the context window. CounterSteer offers an inference-time mitigation by intervening directly inside the model activations.

Instead of retraining weights or adding auxiliary classifier models, this approach isolates a residual-stream direction from paired execution traces that distinguish instruction compliance from benign text processing. During inference prefill, the system subtracts this fitted direction across all token positions originating from untrusted tool spans.

Across five open-weight model lineages ranging from 8B to 106B parameters, this steering mechanism reduced attack success rates from as high as 100 percent down to between zero and 17 percent. On the AgentDojo benchmark, compromise rates dropped to single digits while preserving 93 to 100 percent of normal model utility.

Modifying internal model activations provides a clean, deterministic layer of defense that prompt-level filters cannot match.
