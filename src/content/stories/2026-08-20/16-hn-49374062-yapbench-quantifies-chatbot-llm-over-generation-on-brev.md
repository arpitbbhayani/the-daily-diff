---
title: YapBench quantifies chatbot LLM over-generation on brevity-ideal prompts
source: hn
url: https://arxiv.org/abs/2601.00624
date: '2026-08-20'
tags:
- benchmark
- catchup
- chatbot-evaluation
- hn
- large-language-models
- over-generation
- yapbench
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49374062'
comments: https://news.ycombinator.com/item?id=49374062
why_read: This paper introduces YapBench, a benchmark for quantifying how much chatbot
  LLMs over-generate. Readers will understand the problem of LLM verbosity and learn
  about a new method to measure it systematically.
authors:
- Vadim Borisov
- "Michael Gr\xF6ger"
- Mina Mikhael
- Richard H. Schreiber
---

Chatbot LLMs often talk too much, costing more tokens and increasing cognitive load. The new YapBench benchmark tackles this head-on, introducing quantitative metrics to measure and compare "yap" in LLM responses across various models.

YapBench uses a character-based metric, YapScore, to pinpoint unnecessary length beyond a minimal-sufficient baseline. This goes beyond subjective feedback, providing concrete data on how much models over-generate for simple requests, from clarifications to one-line coding tasks.

For senior engineers optimizing LLM applications, YapBench offers immediate utility. You can use these insights to choose models that are more concise, improve user experience, and directly reduce inference costs. It is a critical tool for better prompt engineering and model selection.
