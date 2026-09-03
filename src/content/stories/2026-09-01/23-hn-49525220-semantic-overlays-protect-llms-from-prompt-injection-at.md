---
title: Semantic Overlays Protect LLMs from Prompt Injection Attacks
source: hn
url: https://semantic-overlays.vercel.app/
date: '2026-09-01'
tags:
- catchup
- hn
- llm-security
- no-execute-bit
- prompt-injection
- residual-stream
- semantic-overlays
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49525220'
comments: https://news.ycombinator.com/item?id=49525220
why_read: This post introduces Semantic Overlays, a novel method for protecting language
  models from prompt injection attacks. Readers will learn how these trained adapters
  prevent malicious instructions from executing within the model's residual stream,
  much like an NX bit for CPUs.
authors:
- joshua_s_penman
---

Prompt injection is a massive headache for LLM security, but what if you could mark parts of an input as "do not execute"? Semantic Overlays propose an "NX bit" for LLMs.

This clever technique uses small trained adapters to modify the residual stream itself, making specific token spans readable but preventing them from giving orders. It is a fundamental shift from mere input filtering, addressing the core problem where the model treats all text equally.

This offers a potentially robust defense against a major vulnerability, moving towards a future where LLM applications can safely process untrusted input without fear of manipulation. Engineers building agentic systems or public-facing LLM applications should pay close attention to this paradigm.
