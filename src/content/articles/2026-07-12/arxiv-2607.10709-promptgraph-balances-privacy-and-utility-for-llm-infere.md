---
title: PromptGraph Balances Privacy and Utility for LLM Inference
source: arxiv
url: http://arxiv.org/abs/2607.10709v1
date: '2026-07-12'
tags:
- arxiv
- catchup
- contextual-dependencies
- cs.AI
- cs.CR
- graph-guided-approach
- llm-privacy
- prompt-sanitization
- utility-preservation
arxiv_id: '2607.10709'
categories: cs.CR, cs.AI
why_read: This paper introduces PromptGraph, a novel graph-guided approach for privacy-preserving
  LLM inference. Readers will learn how it balances privacy and utility by explicitly
  modeling contextual dependencies.
authors:
- Chen Gu
- Hui Wan
- Donghui Hu
- Hui Wang
- Zhuoer Gu
---

Deploying Large Language Models in production introduces a critical privacy challenge: sensitive data can be inferred not just from explicit identifiers, but also from subtle contextual associations. This paper introduces PromptGraph, a smart solution.

PromptGraph transforms each prompt into an attributed graph. Nodes carry privacy scores for individual spans of text, while edges encode crucial contextual dependencies needed to preserve the prompt's utility.

This graph-guided approach allows systems to explicitly balance privacy gain against the loss of contextual information during sanitization. It goes beyond simple keyword filtering by understanding how different parts of a prompt interact.

The method sanitizes protected spans locally and restores placeholders only after consistency checks. This ensures that privacy is enhanced without degrading the LLM's ability to provide useful, contextually relevant responses.

If you are building or deploying LLM applications, understanding prompt sanitization that explicitly balances privacy and utility is non-negotiable for robust and responsible systems.
