---
title: Encrypted LLM reasoning traces are vulnerable to cross-model decryption
source: hn
url: https://www.alphaxiv.org/abs/2608.09867
date: '2026-08-12'
tags:
- catchup
- data-extraction
- encryption-vulnerability
- hn
- jailbreaking
- large-language-models
- prompt-injection
- reasoning-traces
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 9
hn_id: '49279815'
comments: https://news.ycombinator.com/item?id=49279815
why_read: This text uncovers a significant architectural vulnerability in how leading
  LLM providers handle encrypted reasoning traces. Readers will learn how this flaw
  allows adversaries to extract proprietary model reasoning, private data, and execute
  invisible prompt injections, gaining insight into critical LLM security risks.
authors:
- buredoranna
---

Major LLM providers encrypt chain-of-thought reasoning and pass these blocks client-side, thinking it protects their IP. This paper reveals a critical flaw: these encrypted blocks are interchangeable across different sessions, users, and even models within a provider's ecosystem.

This architectural oversight allows attackers to inject an encrypted trace from a strong model into a weaker one, forcing the weaker model to decrypt and reveal the stronger model's internal reasoning. This bypasses anti-distillation, enables large-scale private data extraction (367 PII artifacts and 182 credentials recovered from public logs!), and facilitates invisible prompt injections.

The implication for applied AI and LLM infrastructure is enormous. It is not just a theoretical exploit; it is a live vulnerability impacting major vendors. This shows how crucial robust system design and cryptographic hygiene are when building sophisticated AI systems.
