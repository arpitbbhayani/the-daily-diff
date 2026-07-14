---
title: Unmaintained AI Code Propagates Bad Patterns
source: hn
url: https://unstack.io/write-code-like-a-human-will-maintain-it
date: '2026-07-10'
tags:
- best-practices
- catchup
- code-maintenance
- hn
- llm-code-generation
- software-quality
- technical-debt
score: 344
hn_id: '48859701'
comments: https://news.ycombinator.com/item?id=48859701
why_read: This article highlights how relying solely on LLMs for code generation without
  human maintenance can lead to propagating bad coding practices, as the AI learns
  from the existing, unoptimized patterns. It underscores the ongoing necessity of
  human intervention to uphold code quality and prevent the accumulation of technical
  debt.
authors:
- Scott Robinson
author: Scott Robinson
---

Are you letting AI write sloppy, unmaintainable code for you? The promise of LLMs is immense, but this article rings an alarm bell for engineering practices.

It is easy to let an AI generate the same long conditional in four different files. The model works, tests pass, and you are not the one updating it. This seems efficient in the short term, but it poisons your codebase.

Every shortcut you merge becomes a signal. The next time you ask the LLM for a similar piece of code, it will not start from first principles; it will learn from the copied code already in your repository. This creates a vicious cycle of poor quality.

We need to remember that code is still maintained by humans, and increasingly, by AIs that learn from human-written patterns. Prioritize maintainability and clean design, even when using AI. Your future self, and your future AI assistant, will thank you.
