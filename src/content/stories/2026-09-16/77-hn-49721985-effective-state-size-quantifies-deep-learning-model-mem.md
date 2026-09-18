---
authors:
- Rom N. Parnichkun
- Neehal Tumma
- Armin W. Thomas
- Alessandro Moro
- Qi An
- Taiji Suzuki
- Atsushi Yamashita
- Michael Poli
- Stefano Massaroli
comments: https://news.ycombinator.com/item?id=49721985
date: '2026-09-16'
depth_score: 8
hn_id: '49721985'
image: /infographics/77-hn-49721985.jpg
interest_score: 8
novelty_score: 8
section: ai
source: hn
tags:
- catchup
- deep-learning-models
- effective-state-size
- hn
- memory-utilization
- recall-performance
- sequence-models
- state-compression
title: Effective State-Size quantifies deep learning model memory utilization
url: https://www.liquid.ai/blog/how-effectively-does-a-model-use-its-memory
utility_score: 7
why_read: This paper introduces Effective State-Size (ESS), a novel metric to quantify
  memory utilization in deep learning models. Readers will learn how ESS influences
  key aspects such as state compression, initialization, and recall performance, offering
  insights into model design.
---

How effectively do your deep learning models really use their memory? This research introduces Effective State-Size (ESS), a novel metric that moves beyond mere cache size to quantify true memory utilization in sequence models like attention and SSMs.

ESS reveals critical insights: models with high ESS are tougher to distill, and its tracking can inform better initialization schemes and featurization for recall. Surprisingly, LLMs that modulate ESS more effectively tend to excel in recall-intensive tasks.

This work offers a fresh perspective, deriving from classic signal processing results. It is not just theoretical; understanding ESS can fundamentally shift how you approach model architecture, training, and memory optimization for applied AI systems.