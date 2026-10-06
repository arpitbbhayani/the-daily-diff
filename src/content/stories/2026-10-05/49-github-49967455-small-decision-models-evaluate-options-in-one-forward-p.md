---
title: Small decision models evaluate options in one forward pass
source: github
url: https://github.com/jiwidi/jiwo
date: '2026-10-05'
tags:
- catchup
- decision-models
- github
- low-latency-inference
- qwen
- single-forward-pass
section: ai
is_news: false
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49967455'
comments: https://news.ycombinator.com/item?id=49967455
why_read: Read this to understand how specialized small language models can evaluate
  structured decision options in a single forward pass for latency-critical tasks.
authors:
- jiwidi
---

Using autoregressive text generation for latency-critical agent decisions or routing often wastes hundreds of milliseconds generating tokens that must then be parsed. Jiwo approaches this differently by training small language models to evaluate typed questions and output option probabilities in a single forward pass.

On an H100 GPU, requests achieve a median latency of around 50 milliseconds. The 0.75B parameter variant tops the Decision Index benchmark for models under 1B parameters, significantly outperforming base foundation models on structured decision accuracy without generating freeform text.

For systems engineering teams building complex routing pipelines, fast classifiers, or agent decision trees, trading text generation for direct probability vectors avoids parse errors and sharply reduces inference costs.

Single-pass decision heads offer a practical way to keep agent decision latency inside strict SLA boundaries.
