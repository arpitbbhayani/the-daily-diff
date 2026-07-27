---
authors:
- Patrick Podest
- Marco Pichler
- Elias Bürger
- Levente Zólyomi
- Bernhard Voggenberger
- Wilhelm Berghammer
- Daniel Klotz
- Sebastian Böck
- Günter Klambauer
- Sepp Hochreiter
comments: https://news.ycombinator.com/item?id=49045921
date: '2026-07-25'
depth_score: 8
hn_id: '49045921'
image: /infographics/60-hn-49045921.jpg
interest_score: 8
novelty_score: 8
section: ai
source: hn
tags:
- catchup
- covariates
- foundation-models
- hn
- multivariate-data
- recurrent-neural-networks
- streaming-data
- time-series-forecasting
title: TiRex-2 extends time series forecasting to multivariate streaming data
url: https://arxiv.org/abs/2607.01204
utility_score: 7
why_read: This paper introduces TiRex-2, a novel recurrent xLSTM-based foundation
  model for multivariate and streaming time series forecasting. Readers will learn
  how it overcomes limitations of Transformer models by achieving constant per-patch
  cost and integrating future covariates while preserving causality.
---

Traditional Transformer-based time series models often struggle with quadratic complexity when handling long contexts and require full recomputation for streaming data. TiRex-2, a new recurrent xLSTM-based foundation model, elegantly sidesteps these issues. 

This model is engineered for multivariate forecasting with both past and future covariates, maintaining a constant per-patch cost even with continuous data streams. Its memory-centric, recurrent design and asymmetric grouped-attention variate mixer represent a significant leap forward. 

If you are building systems that demand scalable, real-time forecasting, understanding TiRex-2's architectural innovations could fundamentally change how you approach efficiency and causality in your designs. It offers state-of-the-art zero-shot performance, proving that architectural smarts can beat brute force.