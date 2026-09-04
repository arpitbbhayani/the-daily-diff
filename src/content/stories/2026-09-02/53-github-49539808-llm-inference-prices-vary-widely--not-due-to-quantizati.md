---
title: LLM Inference Prices Vary Widely, Not Due to Quantization
source: github
url: https://github.com/tokencanopy/price
date: '2026-09-02'
tags:
- catchup
- git-as-database
- github
- llm-inference
- price-disparity
- price-history
- quantization
section: ai
interest_score: 8
depth_score: 7
utility_score: 9
novelty_score: 8
hn_id: '49539808'
comments: https://news.ycombinator.com/item?id=49539808
why_read: This resource offers a public, historical record of LLM inference prices,
  highlighting significant cost differences for seemingly identical models across
  various platforms. It reveals that common assumptions about price variation, like
  quantization levels, do not always explain these disparities.
authors:
- tokencanopy
---

Choosing an LLM inference provider can feel like a black box when it comes to long-term costs. This "LLM Price Index" project on GitHub is a game-changer: it tracks the public price history for LLM inference across over 100 platforms, updated every six hours.

The project reveals fascinating, actionable insights. For instance, across open models, the median price spread between providers is 2.0x, with nearly half of models showing a >2x difference. More surprisingly, the common assumption that cheap endpoints are highly quantized often does not hold true; many cost-effective options run at full BF16 precision.

This repository effectively uses Git as a time-series database to provide transparency and historical data that no single provider offers. It is an invaluable tool for any engineer or team looking to optimize their LLM infrastructure spending and truly understand the economics of model deployment.
