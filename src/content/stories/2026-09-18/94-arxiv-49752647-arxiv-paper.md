---
title: ArXiv Paper
source: arxiv
url: https://arxiv.org/abs/49752647
date: '2026-09-18'
tags:
- arxiv
- catchup
section: ai
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 8
arxiv_id: '49752647'
categories: ''
why_read: You will learn about a new and significant vulnerability in LLM-based security
  analysis, demonstrating how contextual manipulation can compromise AI reasoning
  and highlighting the critical need for provenance checks in AI-powered systems.
---

LLM-based malware analysis is a powerful concept, but new research reveals a critical vulnerability: the "semantic cover story" attack, or ALIBI. This attack manipulates LLM reasoning by injecting a plausible, yet false, benign narrative into a non-executed section of a malicious binary.

The results are stark. On Gemini 2.5 Pro, 30 out of 35 malicious PE samples were flipped to benign. GPT-5.5 Pro and Claude Opus 4.7 also saw significant severity downgrades. Even with verification-guided defense prompts, over 40 percent of malicious samples still bypassed detection.

This is a wake-up call for anyone building or deploying AI in security-critical roles. It highlights that LLMs can be tricked by coherent but false narratives, underscoring the necessity of provenance checks and separating verified facts from attacker-controlled claims in AI systems.

It is not just about raw model power; it is about robust context engineering and trust boundaries.
