---
title: Code expressiveness metrics reveal language friendliness for artificial intelligence
source: hn
url: https://kostya.github.io/LangArena/llm_friendliness.html
date: '2026-09-24'
tags:
- boilerplate-ratio
- catchup
- code-expressiveness
- conciseness
- hn
- language-porting
- llm-friendliness
section: engineering
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49828549'
comments: https://news.ycombinator.com/item?id=49828549
why_read: This article explores how boilerplate ratios and code conciseness impact
  working with different programming languages alongside AI. You will gain a mental
  model for distinguishing between raw brevity and genuine expressiveness in software
  development.
authors:
- delian66
---

Porting a standardized benchmark suite of 51 algorithms across 20 programming languages reveals clear empirical metrics on language expressiveness and boilerplate overhead.

By comparing raw source size against compressed gzip size across implementations, the author measured the exact redundancy inherent in each language's syntax. Languages like Crystal and Python required significantly fewer tokens and structural boilerplate, while systems languages like Zig required up to 176 percent more code to express identical algorithmic logic.

This delta has direct implications for engineering teams using LLMs for code generation. Verbose languages consume substantially more context window budget and introduce more surface area for hallucination during synthesis. Conversely, expressive languages with low boilerplate enable higher density reasoning within the same token footprint.

Evaluating language ergonomics through compression ratios and line count metrics gives backend teams quantitative data when selecting languages for automated pipelines and agent-assisted workflows.
