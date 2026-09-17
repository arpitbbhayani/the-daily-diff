---
title: RelateAnything predicts open-vocabulary relations in real-time without object
  labels
source: github
url: https://github.com/Maelic/RelateAnything/
date: '2026-09-15'
tags:
- catchup
- deep-learning
- github
- github-project
- open-vocabulary
- real-time-inference
- relation-prediction
section: ai
interest_score: 8
depth_score: 7
utility_score: 8
novelty_score: 8
hn_id: '49713313'
comments: https://news.ycombinator.com/item?id=49713313
why_read: This describes RelateAnything, a novel deep learning model for real-time
  open-vocabulary relation prediction. Readers will learn about a system that efficiently
  infers relationships between objects from various inputs without requiring object
  labels.
authors:
- Maelic
---

RelateAnything introduces real-time open-vocabulary relation prediction from any visual input, a significant leap for applied AI. This model, with only 53 million parameters, achieves 20ms inference per frame on an A40 GPU without requiring object labels. This efficiency and flexibility are critical for deployment.

A key innovation is its ability to predict relationships given only a predicate vocabulary at inference time, removing the dependency on pre-defined object categories. It further enhances robustness by tracking boxes with a Kalman filter and holding relations with a second filter on calibrated log-odds, ensuring continuity even if endpoints are momentarily undetected.

This project showcases powerful, practical AI for computer vision, offering insights into building real-time perception systems for AI agents and advanced analytics without the overhead of explicit object labeling.
