---
title: AI-Generated Code Creates a Plague of Plausibility
source: hn
url: https://twitter.com/kcurtin/status/2098084206463062170
date: '2026-09-10'
tags:
- ai-code-generation
- catchup
- code-review
- earned-complexity
- hn
- plausibility
- software-complexity
- steering-ai
section: engineering
interest_score: 8
depth_score: 7
utility_score: 8
novelty_score: 8
hn_id: '49646454'
comments: https://news.ycombinator.com/item?id=49646454
why_read: This article explains how the 'plague of plausibility' in AI-generated code
  leads to superlinear complexity. Readers will learn strategies for steering AI models
  to prevent unearned complexity in software development.
authors:
- kcurtin
---

The rise of AI-assisted coding brings a hidden challenge: "plausible complexity." LLMs, without pain or real-world constraints, often generate code with extra features and abstractions that seem reasonable but collectively create unearned, superlinear complexity.

This makes code reviews a nightmare and future development harder. It is not about the model being weak, but its propensity to explore every plausible path, leading to bloated systems.

The key is proactive steering: define explicit scopes, eradicate plausible extras early, and tell the model when "enough is enough." This shifts the burden from untangling complexity in review to managing it at generation.

A crucial lesson for senior engineers: more code, even plausibly useful code, is not always better. Mastering this interaction with AI is essential for maintaining lean, effective systems.
