---
title: Running DeepSeek V4 Flash locally is never cheaper than its API
source: hn
url: https://grigio.org/deepseek-v4-flash-0731-is-it-cheaper-to-run-it-at-home-or-pay-per-token/
date: '2026-08-07'
tags:
- api-pricing
- catchup
- deepseek-v4-flash
- hardware-requirements
- hn
- llm-cost-analysis
- local-inference
- quantization
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49207239'
comments: https://news.ycombinator.com/item?id=49207239
why_read: This analysis provides a clear cost comparison for running DeepSeek V4 Flash
  locally versus using its API. Readers will understand that local inference is not
  cost-effective for this model due to its low API pricing and high hardware demands.
authors:
- grigio
---

Thinking of self-hosting a large language model like DeepSeek V4 Flash to save on API costs? Think again. A rigorous analysis reveals that running this 284B-parameter Mixture-of-Experts model locally almost never beats DeepSeek's own API on pure token cost.

Despite only 13B parameters being active per token, the full 284B weights demand 128GB+ of unified memory, placing it far outside consumer GPU capabilities. The best home setups, even with Q4/Q8 quantization on 192GB machines, still spend 2.4x the API cost on electricity alone, before even factoring in hardware purchases.

This detailed breakdown demonstrates that hardware acquisition only makes sense for privacy, data sovereignty, offline use, or fine-tuning. For raw token generation, the API offers an unbeatable price point (around $0.13 per million blended tokens).
