---
title: MSC-OT Effectively Forecasts Multivariate Time Series with Multi-Scale Attention
source: arxiv
url: http://arxiv.org/abs/2607.10740v1
date: '2026-07-12'
tags:
- arxiv
- attention-mechanism
- catchup
- cs.AI
- cs.LG
- inverted-embedding
- msc-ot
- multi-scale-convolution
- multivariate-time-series-analysis
- optimal-transport
- time-series-forecasting
arxiv_id: '2607.10740'
categories: cs.LG, cs.AI
why_read: This paper introduces the MSC-OT architecture, a novel approach that enhances
  multivariate time series forecasting by combining multi-scale convolutions with
  optimal transport attention. You will learn how this model improves accuracy by
  capturing multi-granularity patterns and managing information flow.
authors:
- HaoChong Fu
- Jian Xu
---

Multivariate time series forecasting is notoriously challenging due to the need to capture multi-granularity patterns and effectively suppress noise. This paper introduces an ingenious approach called Multi-Scale Convolution with Optimal Transport Attention (MSC-OT).

MSC-OT optimizes the attention mechanism by integrating multi-scale convolutions with a Sinkhorn optimal transport method based on inverted embedding. This allows it to better capture cross-variate relationships and local structural patterns.

The architecture treats attention computation as an optimal transport problem, employing iterative matrix scaling to ensure a balanced flow of information across different variables. This is a nuanced way to prevent information bottlenecks.

An adaptive fusion strategy dynamically combines base attention, convolution-enhanced, and OT-regularized scores, further boosting performance. This modular design helps in isolating and improving specific aspects of the attention mechanism.

Experiments show MSC-OT significantly improves both short-term and long-term forecasting accuracy across diverse datasets. For anyone building predictive models on complex time series, this attention optimization technique is a must-see.
