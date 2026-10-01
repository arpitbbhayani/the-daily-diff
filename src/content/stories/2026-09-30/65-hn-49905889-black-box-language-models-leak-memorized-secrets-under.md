---
title: Black-box language models leak memorized secrets under output-only access
source: hn
url: https://arxiv.org/abs/2609.36941
date: '2026-09-30'
tags:
- api-security
- black-box-llms
- catchup
- hn
- knowledge-distillation
- memorization-leakage
- secret-extraction
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49905889'
comments: https://news.ycombinator.com/item?id=49905889
why_read: Learn how confidential credentials can be extracted from commercial language
  models using proxy-guided distillation and output-only access.
authors:
- Shiqian Zhao
- Siwei Jiang
- Xinfeng Li
- Runyi Hu
- Yandan Zheng
- Congyu Guo
- Tianwei Zhang
- Anh Tuan Luu
---

Commercial language models powering autonomous coding tools can inadvertently memorize credentials during training and leak them at inference time. Most security auditing methods assume white-box access to token probabilities or raw model weights, making them useless against closed API providers.

A new framework demonstrates that output-only black-box access is sufficient to reliably extract memorized API keys from commercial models. The attack distills secret-relevant behavior from target APIs into a local white-box proxy, then uses proxy-guided sampling, local token entropy, and provider-specific priors to reconstruct sensitive tokens.

In evaluations across deployed systems including OpenAI and Claude Code, this approach successfully recovered masked credentials. For engineering teams integrating agentic coding tools or fine-tuning models on internal codebases, simple output filters are no longer sufficient to guarantee that training secrets remain protected.

Auditing training corpora before model weights are baked remains your only reliable line of defense against credential extraction.
