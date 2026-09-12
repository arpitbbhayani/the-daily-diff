---
title: Models are worse at reviewing their own code
source: hn
url: https://www.greptile.com/blog/model-inversion
date: '2026-09-10'
tags:
- bug-detection
- catchup
- hn
- llm-code-review
- model-performance
- self-review
section: ai
interest_score: 8
depth_score: 7
utility_score: 8
novelty_score: 8
hn_id: '49644676'
comments: https://news.ycombinator.com/item?id=49644676
why_read: This post explores whether AI models are effective at reviewing their own
  code and reveals they are less capable of finding bugs in code they authored compared
  to code written by other models. Readers will learn about this specific limitation
  in AI code review agents.
authors:
- Rodrigo Caridad
---

LLMs exhibit a surprising blind spot: they are demonstrably worse at reviewing their own code than code produced by other models. This finding comes from a detailed study by Greptile, an AI code review agent company.

The data reveals a significant drop in recall for high-severity bugs when an LLM attempts to self-correct. For example, Claude Opus 4.7 caught 60 percent of high-severity bugs in GPT-authored PRs but only 53.7 percent in its own. This is not a marginal difference.

This insight is crucial for designing robust AI-powered development workflows. Relying on a single agent for both code generation and review introduces a systemic weakness. Instead, consider multi-agent setups or ensure human-in-the-loop validation for critical code paths.

The key takeaway is that even advanced LLMs struggle with objectivity in self-assessment.
