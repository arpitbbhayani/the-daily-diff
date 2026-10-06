---
title: Clef turns multimodal state into structured decisions directly
source: news
url: https://huggingface.co/Cloudflare/clef
date: '2026-10-05'
tags:
- catchup
- clef
- decision-modeling
- multimodal-models
- news
- schema-routing
- transformers
section: ai
is_news: true
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 8
hn_id: '49968012'
comments: https://news.ycombinator.com/item?id=49968012
why_read: Understand how Clef eliminates free-form text generation and parsing by
  using a joint schema head to score multimodal decisions in a single forward pass.
authors:
- Cloudflare
---

Most LLM structured output pipelines waste substantial compute generating autoregressive tokens only to parse them back into JSON. Cloudflare just open-sourced Clef, a 27B multimodal model that eliminates text generation entirely when making structured decisions.

Clef pairs a Qwen vision-language backbone with a specialized joint transformer head. Instead of generating tokens sequentially, the head reads the final hidden states, routes evidence from the input state to defined schema questions, and evaluates logit probabilities for all allowed options simultaneously in a single forward pass.

This completely sidesteps output parsing errors, hallucinated fields, and decoding latency for classification and routing workloads. If your architecture relies on models primarily for extraction, verification, or structured branching, running a single forward pass over a fixed schema is drastically more efficient than token-by-token generation.

Bypassing the autoregressive decode loop is one of the cleanest optimizations for latency-sensitive agent systems.
