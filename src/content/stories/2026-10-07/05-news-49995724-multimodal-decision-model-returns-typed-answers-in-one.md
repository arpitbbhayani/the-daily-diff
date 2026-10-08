---
title: Multimodal decision model returns typed answers in one pass
source: news
url: https://huggingface.co/LiquidAI/d1-3B
date: '2026-10-07'
tags:
- catchup
- decision-models
- low-latency-inference
- multimodal-classification
- news
- vision-language-models
section: ai
is_news: true
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49995724'
comments: https://news.ycombinator.com/item?id=49995724
why_read: Learn how d1-3B executes calibrated multimodal classification and routing
  in a single forward pass without autoregressive token generation. This provides
  a blueprint for ultra-low latency agent guardrails and evaluation pipelines.
authors:
- Liquid AI
image: /infographics/05-news-49995724.jpg
---

Most AI agent routing pipelines waste huge amounts of latency on autoregressive text generation. Calling an LLM simply to decide a yes/no routing question or pick from three actions introduces hundreds of milliseconds of overhead for token decoding.

LiquidAI introduced d1-3B, a 3.1 billion parameter multimodal decision model that solves this structural bottleneck. Built on top of LFM2.5-VL-3B with a SigLIP2 vision encoder, the model executes classification, triage, and guardrail tasks in a single forward pass with zero output tokens.

In practical infrastructure terms, it delivers fully calibrated, typed decisions in approximately 8 milliseconds on an RTX 4090 and 30 milliseconds on Apple Silicon. It also outperforms larger models on decision benchmarks while consuming dramatically less compute.

Replacing generative LLM judges with dedicated single-pass decision networks is an obvious architectural win for low-latency agent workflows.
