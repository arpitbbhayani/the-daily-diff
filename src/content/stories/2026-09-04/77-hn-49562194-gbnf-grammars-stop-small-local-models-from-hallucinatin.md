---
authors:
- Jan Paul Dahlke
comments: https://news.ycombinator.com/item?id=49562194
date: '2026-09-04'
depth_score: 8
hn_id: '49562194'
image: /infographics/77-hn-49562194.jpg
interest_score: 8
novelty_score: 7
section: ai
source: hn
tags:
- ai-agents
- catchup
- gbnf-grammars
- hn
- json-hallucination
- local-llms
- tool-calling
title: GBNF grammars stop small local models from hallucinating valid JSON
url: https://eris-system.dev/blog/gbnf-grammars
utility_score: 9
why_read: Read this to understand why small local language models struggle with structured
  JSON output. You will learn how GBNF grammars can be used to prevent JSON hallucination
  in tool-calling AI agents.
---

Building AI agents with smaller, local LLMs often hits a wall: models hallucinate invalid JSON when trying to call tools, breaking agent protocols. This is a common, infuriating problem that OpenAI's function calling usually handles on their end.

This article provides an incredibly practical, token-level solution using GBNF grammars. By compiling grammars per-session and narrowing them per-turn, you can force even 8B models to reliably emit schema-conformant JSON. This is crucial for local-first agent development.

The real takeaway here is that you do not always need a bigger model; sometimes, you need better control at the output layer. This approach ensures your agent's tool calls are robust and predictable, transforming unreliable behavior into actionable system design.