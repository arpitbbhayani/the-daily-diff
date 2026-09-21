---
title: Jev's architecture extracts probabilities from LLMs for reliable decisions
source: hn
url: https://archerhume.com/posts/jevs-architecture-unmasked/
date: '2026-09-19'
tags:
- catchup
- causal-transformer
- decision-probabilities
- hn
- jev-architecture
- llm-confidence
- sparse-moe
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49766351'
comments: https://news.ycombinator.com/item?id=49766351
why_read: This piece explains Jev's novel architecture for extracting reliable decision
  probabilities directly from LLM internal representations, contrasting it with common
  but flawed practices. Readers will learn how Jev's improves reliability and efficiency
  by avoiding text generation and its likely underlying components.
authors:
- tosh
---

Most LLM-powered applications today are fundamentally flawed when it comes to trust: they generate text like "90% confident," but this is merely a token sequence, not a verifiable probability. This pattern leads to unreliable systems for fraud screening, moderation, and risk assessment.

"Jev's Architecture Unmasked" proposes a radical departure: instead of generating tokens, it directly reads decision probabilities from the LLM's internal representations. Imagine bypassing the entire text generation step, obtaining accurate distributions in parallel, and dramatically improving both the reliability and computational efficiency of your AI system.

The article speculates on a causal transformer with sparse MoE, shared-state encoding, and isolated question branches – a deep dive into how to build robust, production-ready AI agents. This is not just an optimization; it is a fundamental shift in how we might design and trust applied LLM systems for critical decision-making.
