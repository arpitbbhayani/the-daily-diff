---
title: Distill LLM judgments into small, fast local text models
source: github
url: https://github.com/sshah03/shrewd
date: '2026-09-22'
tags:
- catchup
- data-privacy
- github
- inference-cost
- llm-distillation
- local-models
- prompt-optimization
- text-classification
section: ai
interest_score: 8
depth_score: 7
utility_score: 9
novelty_score: 7
hn_id: '49807276'
comments: https://news.ycombinator.com/item?id=49807276
why_read: This describes a method to create small, fast, and local text models by
  distilling judgments from large language models. Readers will learn a practical
  pipeline for efficient and private text classification, along with insights into
  prompt optimization.
authors:
- sshah03
---

Running large language models for every classification task becomes prohibitively expensive and slow, especially for repetitive operations. Shrewd offers a robust pipeline to distill LLM judgments into small, fast, local text models.

This allows you to leverage the power of LLM labels as a 'teacher' and then deploy an inference-optimized 'student' model that runs locally, solving critical issues around cost, latency, and even data privacy. Empirical findings reveal that careful prompt optimization can significantly improve the teacher's labels, but gains often vanish on held-out data unless properly managed.

This is a direct path to making LLM-powered classification practical and affordable in production.
