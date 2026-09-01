---
authors:
- theanonymousone
comments: https://news.ycombinator.com/item?id=49502241
date: '2026-08-30'
depth_score: 8
hn_id: '49502241'
image: /infographics/17-hn-49502241.jpg
interest_score: 8
novelty_score: 7
section: ai
source: hn
tags:
- catchup
- decision-trees
- hn
- multi-output-regression
- multiclass-classification
- shared-tree-structure
- vector-leaf-model
- xgboost
title: XGBoost Vector-Leaf Model Improves Multi-Output Model Performance
url: https://xgboost.ai/2026/08/25/introducing-the-xgboost-vector-leaf-model
utility_score: 8
why_read: Read this to understand the XGBoost vector-leaf model, a new approach for
  multi-output problems that reduces loss, simplifies models, and improves efficiency.
  It explains when shared tree structures are beneficial and how to implement them.
---

XGBoost, a staple for many applied machine learning problems, just got a powerful upgrade in version 3.4.1 that fundamentally changes how multi-output tasks are handled. The new vector-leaf model moves away from building a separate scalar-leaf tree for each output, a common approach for problems like multiclass classification.

Instead, a single shared tree now holds a vector of predictions in its leaves. This design leads to demonstrably lower held-out loss and, crucially, produces far simpler models with fewer splits. For a problem with 32 classes, one vector boosting round adds just one shared tree, compared to 32 scalar trees.

This innovation is not just academic; it directly translates to more efficient models that are faster to train and predict from, all while being less susceptible to spurious features. If you are building with XGBoost for any multi-output scenario, this is a change you will want to understand deeply.