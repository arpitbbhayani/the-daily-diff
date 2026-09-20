---
title: Mini-Jev uses logits for typed decisions on frozen LLMs
source: github
url: https://github.com/r-ms/mini-jev
date: '2026-09-18'
tags:
- catchup
- frozen-model
- github
- llm-inference
- logit-scores
- mini-jev
- schema-classification
- typed-decision
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49748643'
comments: https://news.ycombinator.com/item?id=49748643
why_read: This project explores an alternative to grammar-constrained JSON generation
  for typed decisions in frozen LLMs. Readers will learn how using next-token logits
  to classify against a schema can provide an efficient method for closed-choice fields.
authors:
- phyrex
---

Are you tired of LLMs hallucinating JSON, or relying on complex grammar constraints for structured output? A new project, mini-Jev, presents a clever alternative that could change how you interact with models for typed decisions.

Instead of forcing the LLM to *generate* JSON token by token and then parsing it, mini-Jev proposes a technique for closed-choice fields: present options as a multiple-choice question and simply *read the next-token logits* for the option letters. No generation, just classification at the token level.

This method, tested on Qwen3-4B, promises significant gains in reliability and efficiency for structured tasks. It is a fundamental shift in how we might design interfaces for agents that need to make explicit, typed choices. Imagine the token savings and increased robustness for your LLM agents!
