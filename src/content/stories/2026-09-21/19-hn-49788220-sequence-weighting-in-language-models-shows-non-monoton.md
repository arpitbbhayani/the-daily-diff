---
title: Sequence weighting in language models shows non-monotonic scaling behavior
source: hn
url: https://blog.janestreet.com/a-study-of-sequence-weighting-at-scale/
date: '2026-09-21'
tags:
- catchup
- data-mixing
- hn
- hyperparameters
- large-language-models
- scaling-laws
- sequence-weighting
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49788220'
comments: https://news.ycombinator.com/item?id=49788220
why_read: This study explores how sequence weighting impacts the learning behavior
  of large language models across different scales. Readers will learn about the non-monotonic
  relationship between data weight, model scale, and the type of patterns models learn.
authors:
- Alex Renda
- Nitya Mani
---

Jane Street's latest research into sequence weighting for large language models uncovers surprising non-monotonic scaling behavior, challenging conventional wisdom in LM training. It is a critical read for anyone optimizing model performance.

As models grow from small to medium scale, they transition from learning general patterns to focusing on data-specific patterns, becoming highly sensitive to data weights. This is an expected phase where specific data tuning really matters.

However, as models scale further to become truly large, they appear to regain the ability to learn all patterns, once again becoming less dependent on precise data weighting. This suggests a more robust, generalized learning capability emerges at extreme scales.

This complex, three-stage learning dynamic has profound implications for how we design training curricula and allocate computational resources for future LLMs. The optimal weighting strategy changes drastically with model size.
