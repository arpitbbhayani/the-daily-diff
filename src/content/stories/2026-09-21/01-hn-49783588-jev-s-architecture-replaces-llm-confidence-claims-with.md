---
authors:
- archerhume
comments: https://news.ycombinator.com/item?id=49783588
date: '2026-09-21'
depth_score: 9
hn_id: '49783588'
image: /infographics/01-hn-49783588.jpg
interest_score: 9
novelty_score: 9
section: ai
source: hn
tags:
- catchup
- causal-transformer
- decision-probabilities
- hn
- jev-architecture
- llm-reliability
title: Jev's architecture replaces LLM confidence claims with true decision probabilities
url: https://archerhume.com/posts/jevs-architecture-unmasked/
utility_score: 8
why_read: This text explains why relying on LLM-generated confidence claims is problematic
  and introduces Jev's architectural solution for extracting reliable decision probabilities
  directly from LLM internal representations. Readers will learn about a new approach
  to improving LLM decision-making accuracy and the speculated technical details behind
  it.
---

Most agent frameworks and LLM applications make a critical mistake: they treat generated text like a reliable probability. An LLM might say it is "90% confident," but that is just more tokens, not a true confidence score.

The Jev architecture, as speculatively unmasked, tackles this by reading decision probabilities directly from the model's internal representations, skipping text generation entirely. This means you are getting true, outcome-trained probabilities for fraud screening, moderation, and routing, rather than an unvalidated confidence claim.

This approach hints at using causal transformers, likely with sparse Mixture-of-Experts, and shared-state encoding. It is a paradigm shift for anyone building high-reliability AI systems and agents, offering a path to more robust and efficient LLM applications.