---
title: vLLM parsers fail tool calls, returning HTTP 200
source: hn
url: https://ingot.tools/reports/parser-silent-failure
date: '2026-08-27'
tags:
- catchup
- gemma4-tool-parser
- hn
- large-language-models
- minimax-m3
- parser-failures
- reasoning-parsers
- tool-calls
- vllm
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49471659'
comments: https://news.ycombinator.com/item?id=49471659
why_read: This analysis details reproducible parser failures in vLLM for various LLMs,
  demonstrating how tool calls can be dropped or corrupted despite a successful HTTP
  status. Readers will learn about specific vulnerabilities in vLLM's parsing mechanisms
  and their impact on tool use.
authors:
- Ingot team
---

Working with LLM serving frameworks like vLLM? You need to know about these critical parser failures. This report uncovers four reproducible bugs where vLLM's parsers can garble or drop valid model output, yet still return a deceptive HTTP 200 status.

Imagine your agent or application thinks a tool call was successful, but the underlying JSON was corrupted or an array was empty, all while the raw model output was perfectly fine. This means your systems might be failing silently, acting on bad data without any explicit error.

This deep dive provides concrete examples across different models and parsers, highlighting the non-trivial challenges in building reliable LLM infrastructure. It is a must-read for any senior engineer looking to understand and prevent insidious failure modes in their applied AI systems.
