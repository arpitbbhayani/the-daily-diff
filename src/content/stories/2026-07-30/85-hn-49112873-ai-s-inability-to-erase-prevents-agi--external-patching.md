---
authors:
- Taelin
comments: https://news.ycombinator.com/item?id=49112873
date: '2026-07-30'
depth_score: 7
hn_id: '49112873'
image: /infographics/85-hn-49112873.jpg
interest_score: 8
novelty_score: 8
section: ai
source: hn
tags:
- artificial-general-intelligence
- catchup
- code-generation
- continual-learning
- erasure
- hn
- refactoring
title: AI's inability to erase prevents AGI, external patching is a solution
url: https://twitter.com/i/status/2082827517338005700
utility_score: 8
why_read: Readers will learn why the inability to 'erase' is proposed as the fundamental
  limitation preventing current AI from achieving AGI. It also suggests a practical
  external method to temporarily patch this limitation for tasks like code refactoring.
---

Current LLMs struggle with sophisticated code refactoring not due to a lack of knowledge, but an inability to "erase" or actively forget previous, suboptimal solutions. This leads to a strong bias towards patching existing code rather than truly redesigning from first principles.

One developer observed LLMs like Fable persistently avoiding removing problematic code, no matter how aggressively prompted. The breakthrough insight: if an LLM cannot see the original code, it cannot retain its flaws.

This led to a simple, yet powerful, external scripting approach. Ask the LLM to describe a code section's purpose, then mechanically delete that code. Finally, prompt the LLM to regenerate the section without any prior context.

This "simulated erasure" technique offers a practical workaround for a deep architectural challenge in LLMs, potentially unlocking significant improvements in code quality and agentic behavior.