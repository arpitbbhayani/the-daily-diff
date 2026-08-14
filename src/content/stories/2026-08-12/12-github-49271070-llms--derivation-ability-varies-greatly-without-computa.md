---
title: LLMs' derivation ability varies greatly without computation tools
source: github
url: https://github.com/DmitriGoloubentsev/LLM-Tests
date: '2026-08-12'
tags:
- arithmetic-reasoning
- catchup
- github
- large-language-model
- llm-testing
- mathematical-derivation
- tool-use
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49271070'
comments: https://news.ycombinator.com/item?id=49271070
why_read: This text reveals how large language models struggle with complex mathematical
  derivations when stripped of external computation tools. It demonstrates a method
  for testing a model's true reasoning ability beyond simple tool-assisted answers.
authors:
- Dmitri Goloubentsev
---

Most assume modern LLMs are good at math because they give correct answers to complex equations. What if I told you that is mostly an illusion?

This project reveals that when you remove the external calculator, LLMs' arithmetic abilities plummet dramatically. It is not that they are bad at math, it is that they cannot derive it without external tools. The difference between tool-enabled and raw reasoning is stark.

This matters for agentic AI. If an agent's "reasoning" is just tool invocation, then its core understanding is weaker than we might assume. This work offers crucial insights into actual LLM intelligence and how to properly evaluate it.

This is a wake-up call for how we design and trust AI systems for complex tasks.
