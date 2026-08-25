---
authors:
- showhz
comments: https://news.ycombinator.com/item?id=49407493
date: '2026-08-23'
depth_score: 8
hn_id: '49407493'
image: /infographics/24-hn-49407493.jpg
interest_score: 8
novelty_score: 8
section: ai
source: hn
tags:
- ai-coding-agent
- catchup
- code-generation
- code-querying
- code-understanding
- data-flow-analysis
- hn
- resolved-map
- swe-bench
title: Benzi AI queries code by compiling a resolved map
url: https://benzi.fly.dev/about
utility_score: 9
why_read: This introduces Benzi, an AI coding agent that queries a compiled codebase
  map for deep understanding and generation, rather than just reading files. Readers
  will learn how this approach enables advanced code analysis and generation, validated
  by strong SWE-bench performance.
---

Most AI coding agents struggle not because of LLM limitations, but because they are fed raw code as context. Imagine an agent that never "reads" your codebase but "queries" it.

Benzi, a new AI agent, compiles your entire codebase into a resolved map of calls, data flow, and references. This allows it to navigate the code with precision, bypassing the noisy context window problem. The results are striking: 78.2% on SWE-bench Verified, resolving 391 of 500 real GitHub issues, with minimal token usage and impressive efficiency.

This is a paradigm shift for applied AI. It shows that context engineering, by providing structured, high-signal data, can dramatically improve agent performance, enabling deeper code understanding and more accurate changes. Forget endless scrolling; think compiler-driven insights.