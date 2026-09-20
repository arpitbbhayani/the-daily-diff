---
title: LLM watermarking impacts AI agent behavior and safety through sampling drift
source: hn
url: https://www.lasso.security/blog/the-provenance-tax-understanding-the-impact-of-llm-watermarking-on-ai-agent-behavior
date: '2026-09-18'
tags:
- ai-agent-behavior
- ai-safety
- catchup
- hn
- llm-watermarking
- model-refusal
- sampling-drift
- tool-calling
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49749997'
comments: https://news.ycombinator.com/item?id=49749997
why_read: This text reveals how LLM watermarking can subtly alter AI agent behavior
  and safety due to sampling drift. Readers will learn about the empirical evidence
  of this impact on model refusal and tool calling, highlighting critical implications
  for AI safety.
authors:
- Andrea Siposova
---

LLM watermarking, designed for provenance and regulatory compliance, introduces a hidden cost: "sampling drift" that can alter AI agent behavior. This is not just a theoretical concern; it demonstrably impacts how agents refuse harmful requests and even which tools they decide to call.

The mechanism is subtle. Watermarking modifies the token generation process, leading to different sampled tokens. These seemingly minor changes can accumulate, fundamentally shifting an agent's internal state and decision-making logic. Imagine an agent failing to call a critical safety tool because of this drift.

This means engineers building AI agents must account for this "provenance tax." It is a new variable in ensuring robustness, especially against prompt injection, and highlights the non-obvious interactions within complex AI systems. Trust in your agents requires understanding these underlying behavioral changes.
