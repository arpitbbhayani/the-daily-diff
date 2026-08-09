---
authors:
- Tim Schipper
comments: https://news.ycombinator.com/item?id=49211443
date: '2026-08-07'
depth_score: 8
hn_id: '49211443'
image: /infographics/48-hn-49211443.jpg
interest_score: 8
novelty_score: 8
section: ai
source: hn
tags:
- catchup
- context-management
- context-window
- hn
- large-language-models
- model-degradation
title: AI model performance degrades significantly with increased context length
url: https://tim-schipper.nl/en/blog/claude-code-context-management
utility_score: 9
why_read: This article reveals how large language models degrade significantly with
  increasing context length, even with massive context windows. It highlights the
  importance of active context management to maintain performance.
---

LLM coding agents, even with massive context windows, experience significant performance degradation long before those windows are full. Research shows models can drop below 50 percent of their short-context baseline performance at just 32,000 tokens, a mere three percent into a one-million-token window.

This phenomenon, often called 'context rot', means simply feeding an agent more information does not make it smarter; it often makes it distracted and less reliable. The critical takeaway is that managing context is not just about avoiding token limits, but about curating high-signal information.

This article provides concrete strategies for when to '/clear' versus '/compact' context in tools like Claude, backed by findings from studies like Chroma's 'context-rot work' and SlopCodeBench. Implementing these context management tactics is essential for engineers building robust and efficient LLM-powered systems.