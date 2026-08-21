---
title: Peter Naur's Theory explains why LLMs cannot simplify code
source: hn
url: https://www.answer.ai/posts/2026-08-19-llms-code-simpler.html
date: '2026-08-19'
tags:
- catchup
- code-complexity
- hn
- llms
- programming-as-theory-building
- software-theory
section: engineering
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 8
hn_id: '49360447'
comments: https://news.ycombinator.com/item?id=49360447
why_read: This post introduces Peter Naur's 'Programming as Theory building' concept,
  explaining why Large Language Models cannot effectively simplify code by highlighting
  that true complexity resides in the developer's subjective mental model.
authors:
- tosh
---

Most engineers instinctively chase simpler code. Yet, a thought-provoking piece explains why large language models cannot truly simplify your code, not in the way that matters most.

The core argument, based on Peter Naur's "Programming as Theory building," is that true program complexity resides in the 'Theory' within the engineer's mind – the deep understanding of trade-offs, constraints, and how the program maps to the real world. Code and documentation are merely imperfect downstream artifacts of this internal theory.

LLMs, in their current form, tend to generate verbose code and inadvertently increase surface-level complexity. This obscures the underlying 'Theory' rather than simplifying it. You learn that efforts to constrain LLMs with metrics like Lines of Code often miss the point because they do not address the subjective, mental complexity Naur describes.

This insight can fundamentally change how you approach using LLMs for code generation, prompting, and even designing agentic systems, by shifting focus from mere code output to the deeper cognitive burden of understanding and maintenance. It is not about generating less code; it is about building clearer mental models.
