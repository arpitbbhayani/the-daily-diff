---
title: Scaling feature consistency between online inference and offline training
source: hn
url: https://www.uber.com/us/en/blog/taming-ml-firehose/
date: '2026-09-23'
tags:
- catchup
- feature-consistency
- feature-logging
- hn
- inference-pipelines
- recommendation-systems
- training-serving-skew
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49812803'
comments: https://news.ycombinator.com/item?id=49812803
why_read: Understand the architectural challenges of training-serving skew in large-scale
  machine learning systems. It demonstrates how unified feature logging prevents performance
  regressions and improves model reliability.
authors:
- Paarth Chothani
- Chirag Agrawal
- Amrith M
---

Training-serving skew is one of the most stubborn failure modes in production machine learning. Uber Eats runs massive real-time recommendation systems, where slight mismatches between online feature computation and offline training data can quietly degrade model accuracy and hurt revenue.

To solve this, Uber built a unified feature logging framework that turns production inference directly into the training ground truth. Instead of recomputing features asynchronously during batch training, the system logs the exact feature values evaluated by the online service at inference time.

This approach eliminates discrepancy caused by code drift, differing vocabularies, or timing differences in upstream event streams. The unified pipeline also dramatically cuts debugging overhead when model performance drops, providing an auditable record of feature inputs at millisecond granularity.

Building ML infrastructure around consistent feature logging proves that reliable data contracts matter just as much as model architectures.
