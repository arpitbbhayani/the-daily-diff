---
title: Language model data weighting shows non-monotonic scaling behavior
source: hn
url: https://blog.janestreet.com/a-study-of-sequence-weighting-at-scale/
date: '2026-09-15'
tags:
- catchup
- data-mixing
- hn
- hyperparameters
- language-models
- scaling-laws
- sequence-weighting
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49715711'
comments: https://news.ycombinator.com/item?id=49715711
why_read: This study explains how data weighting affects language model training across
  different scales, revealing a non-monotonic behavior in how models learn from weighted
  data. Readers will gain insight into the nuanced relationship between data emphasis
  and model capacity.
authors:
- Alex Renda
- Nitya Mani
---

Training large language models efficiently means understanding how they learn from data. New research from Jane Street reveals a surprising non-monotonic behavior in how sequence weighting impacts LLM learning across different scales, challenging common assumptions about data mix optimization.

Initially, smaller models learn general patterns irrespective of data weight. As they scale to medium sizes, they become highly sensitive, prioritizing data directly proportional to its assigned weight. However, at very large scales, this trend reverses, and models once again learn patterns independently of explicit data weights, seemingly capable of absorbing all information presented.

This implies that simply upweighting "high-quality" data is not a universally effective strategy across all model sizes. For senior engineers optimizing LLM training, this means you must adapt your data mixing and weighting strategies based on the specific scale of your model to avoid wasting computational resources and maximize learning efficiency.

Understanding these dynamic scaling laws is critical for effective LLM infrastructure design. It is not just about more data, but smarter data presentation.
