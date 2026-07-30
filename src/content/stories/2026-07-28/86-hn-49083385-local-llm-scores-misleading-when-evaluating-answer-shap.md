---
authors:
- Mark Hall
comments: https://news.ycombinator.com/item?id=49083385
date: '2026-07-28'
depth_score: 8
hn_id: '49083385'
image: /infographics/86-hn-49083385.jpg
interest_score: 8
novelty_score: 7
section: ai
source: hn
tags:
- answer-shape
- answer-value
- benchmarking
- catchup
- hn
- local-llm
- model-evaluation
- scaffolding
title: Local LLM Scores Misleading When Evaluating Answer Shape Over Value
url: https://markbhall.dev/writing/my-local-llm-scored-6-of-6/
utility_score: 9
why_read: 'This article highlights a crucial mistake in LLM evaluation: focusing on
  answer format instead of actual correctness. Readers will understand why measuring
  ''answer shape'' can lead to false positives and learn about the real impact of
  scaffolding and model size on task completion versus reliability.'
---

You are building LLM-powered features and facing perplexing results? This engineer
shares a stark lesson: their local LLM scored a perfect 6/6, yet was wrong every single time. The culprit? An evaluator that only checked for the answer's format, not its actual value.

This highlights a common pitfall: mistaking a knowledge benchmark for a product benchmark. Getting past this required a shift to tool-backed task completion, which substantially improved success rates for models like Gemma 4 26B (from 5 to 56 completed cases).

However, even with better completion, reliability was not automatic. The underlying model still mattered greatly. The core takeaway is to meticulously design evaluation systems that measure true task success, not just superficial output. Otherwise, you are just flattering the instrument.