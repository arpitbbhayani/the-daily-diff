---
title: Stealing Reasoning Traces from Proprietary LLM APIs
source: hn
url: https://arxiv.org/abs/2608.09867
date: '2026-08-19'
tags:
- architectural-vulnerability
- catchup
- decryption-jailbreak
- hn
- llm-apis
- proprietary-models
- reasoning-traces
section: ai
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 8
hn_id: '49364397'
comments: https://news.ycombinator.com/item?id=49364397
why_read: This paper exposes a critical architectural vulnerability in proprietary
  LLM APIs that enables the stealing of concealed reasoning traces. Readers will learn
  about a scalable decryption jailbreak and its four distinct attack vectors, impacting
  intellectual property and private data security.
authors:
- Alexander Panfilov
- David Schmotz
- Ilia Shumailov
- Luca Beurer-Kellner
- Joachim Schaeffer
- Ameya Prabhu
- Jonas Geiping
- Maksym Andriushchenko
---

A new paper uncovers a surprising architectural vulnerability in how major LLM providers like Anthropic, OpenAI, and Google manage their reasoning traces. It turns out, encrypted step-by-step reasoning blocks are fully interchangeable across different models, sessions, and users.

This flaw enables a "decryption jailbreak," where injecting an encrypted trace from a powerful, protected model into a weaker model from the same provider forces the weaker model to output the trace in plaintext. This has profound implications for anti-distillation mechanisms and allows large-scale extraction of private data from publicly shared session logs.

The findings highlight that developers are often unaware of the content within these encrypted blocks, posing significant risks. This research reveals a critical blind spot in current LLM infrastructure security and intellectual property protection.

It is a must-read for anyone building or deploying AI applications with proprietary models.
