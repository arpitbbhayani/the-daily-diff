---
title: Encrypted Reasoning Traces in LLM APIs Have Cross-Session Vulnerability
source: hn
url: https://arxiv.org/abs/2608.09867
date: '2026-08-11'
tags:
- catchup
- data-extraction
- encryption-vulnerability
- hn
- intellectual-property
- llm-apis
- reasoning-traces
section: ai
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 8
hn_id: '49259799'
comments: https://news.ycombinator.com/item?id=49259799
why_read: This paper reveals a critical architectural flaw in how proprietary LLM
  APIs handle encrypted reasoning traces, allowing adversaries to extract intellectual
  property and private data. Readers will learn about a novel decryption jailbreak
  technique and its implications for LLM security and data privacy.
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

Proprietary LLMs hide their reasoning traces behind encryption, but a new attack method has found a critical vulnerability. It turns out these encrypted blocks are interchangeable across different models from the same provider.

By injecting an encrypted trace from a powerful LLM into a weaker, less guarded model, researchers forced the weaker model to decrypt and output the trace in plaintext. This technique bypasses anti-distillation mechanisms and allows extraction of both reasoning steps and private data from publicly shared session logs.

The implications are substantial for LLM providers and users. Over 300,000 reasoning blocks scraped from public repositories yielded hundreds of thousands of pieces of Personally Identifiable Information. This highlights that "black box" LLM APIs are not as secure as they appear, demanding a re-evaluation of how such sensitive data is handled and transmitted.

Architectural choices have deep security consequences for AI systems.
