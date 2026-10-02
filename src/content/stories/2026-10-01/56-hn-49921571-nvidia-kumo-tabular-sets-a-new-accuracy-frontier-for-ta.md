---
title: NVIDIA Kumo tabular sets a new accuracy frontier for tabular prediction
source: hn
url: https://huggingface.co/blog/nvidia/kumo-tabular
date: '2026-10-01'
tags:
- artificial-data-pretraining
- catchup
- foundation-models
- hn
- in-context-learning
- tabular-data
- tabular-prediction
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49921571'
comments: https://news.ycombinator.com/item?id=49921571
why_read: Learn how NVIDIA's open tabular foundation model achieves state-of-the-art
  predictive performance in a single forward pass without task-specific training or
  feature engineering.
authors:
- Jingang Qu
- Valter Hudovernik
- Martin Jurkovic
- Cedric Lorenz
- Akihiro Nitta
- Dmitry Gordeev
- Federico Lopez
- Ramona Bendias
- Gilberto Titericz Jr
- Aleksandar S. Sokolovski
- Isabel Hulseman
- Jure Leskovec
- Matthias Fey
---

For over two decades, gradient-boosted decision trees have dominated tabular machine learning, requiring custom feature engineering, hyperparameter tuning, and separate model maintenance for every dataset.

Nvidia has open-sourced Kumo Tabular, a foundation model architecture designed to challenge tree-based workflows. The model performs both classification and regression across tabular rows in a single forward pass, without requiring task-specific fine-tuning or manual feature engineering.

Pretrained entirely on synthetic data across three parameter sizes ranging from 28M to 215M, Kumo Tabular achieved first place across major tabular benchmarks including TabArena and TALENT. It runs through an open-source library under a permissive commercial license.

Treating relational tables as zero-shot inference targets represents a major step toward standardizing tabular intelligence pipelines.
