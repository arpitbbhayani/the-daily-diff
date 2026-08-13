---
title: Attestable Achieves Practical Zero-Knowledge Proofs for Large Language Models
source: hn
url: https://attestable.com/blog/proving-llms-scale
date: '2026-08-11'
tags:
- catchup
- hn
- large-language-models
- llm-inference
- model-security
- production-scale
- zero-knowledge-proofs
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 9
hn_id: '49262049'
comments: https://news.ycombinator.com/item?id=49262049
why_read: This article explains how Attestable has made zero-knowledge proofs practical
  for production-scale LLMs, moving beyond theoretical applications. Readers will
  learn about the challenges of proving AI claims and how ZKPs can ensure model integrity
  and verifiability.
authors:
- mildog8
---

Achieving verifiable, trustworthy AI at production scale has been a major hurdle, but Attestable's new zero-knowledge prover for LLM inference changes the game. They are reporting throughputs of 85 tokens per second on an H100, a massive leap past previous toy examples.

This is not just theoretical; we are talking about compact proof sizes (under 8 MiB) and sub-second verification times (157 to 648 ms). Imagine being able to mathematically prove that a specific LLM produced a particular output from a given input, without revealing the model's weights.

This capability is a critical step for building auditable, compliant AI systems, enabling new levels of trust in AI interactions. The ability to verify LLM execution efficiently will deeply impact how we design and deploy AI solutions in sensitive environments.
