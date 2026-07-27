---
authors:
- Shubham
comments: https://news.ycombinator.com/item?id=49046319
date: '2026-07-25'
depth_score: 8
hn_id: '49046319'
image: /infographics/57-hn-49046319.jpg
interest_score: 8
novelty_score: 8
section: ai
source: hn
tags:
- catchup
- claude-opus
- false-memory
- hallucination
- hn
- large-language-models
- model-evaluation
title: LLMs confidently defend their most fluent false memories against correction
url: https://shubhamg.bearblog.dev/llms-defend-fluent-memory/
utility_score: 8
why_read: This post reveals how frontier LLMs, like Claude Opus, confidently invent
  and defend false memories, even when presented with correct information. Readers
  will learn about specific failure modes and the extent to which model improvements
  mitigate but do not eliminate this 'confident error' behavior.
---

Frontier LLMs can confidently assert false information, not just hallucinate, but actively defend what they "believe" to be true, even when presented with contradictory evidence. This preregistered study dives deep into this phenomenon of "fluent false memory."

The research shows models like Claude Opus 4.8 would override user corrections, invent details, and rewrite entire scenarios to fit their internal, flawed narrative. Even when offered a search tool, they sometimes chose to confidently answer from their "memory" instead.

While newer models like Opus 5 show significant improvement, the underlying behavior persists. For anyone building AI agents or critical LLM applications, understanding these deep-seated failure modes is paramount. It emphasizes the constant need for robust verification mechanisms, careful prompt engineering, and an awareness of how models prioritize their internal "fluent" responses.