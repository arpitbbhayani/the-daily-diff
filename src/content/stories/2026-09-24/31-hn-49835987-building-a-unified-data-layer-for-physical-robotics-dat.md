---
title: Building a unified data layer for physical robotics data
source: hn
url: https://rerun.io/blog/data-layer-for-robot-learning
date: '2026-09-24'
tags:
- catchup
- hn
- mcap
- multimodal-data
- physical-ai
- pytorch-dataloader
- robot-learning
- ros-2
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49835987'
comments: https://news.ycombinator.com/item?id=49835987
why_read: Read this to understand how modern robotics infrastructure must evolve to
  handle multimodal, multi-rate physical data streams directly for model training.
authors:
- Nikolaus West
---

Training models for physical AI breaks conventional web data pipelines. Physical streams are fundamentally multimodal, asynchronous, and bound to spatial coordinates and specific robot embodiments, making traditional tabular or unstructured storage engines clumsy to iterate on.

Rerun 0.32 tackles this by formalizing an open-source unified data layer for robotics. Rather than requiring offline pipeline exports before running training loops, the update introduces low-level read and write APIs, structured chunk manipulation, and direct ROS 2 and MCAP message parsing.

Most notably, the catalog server directly indexes raw recording files on disk and exposes a PyTorch dataloader. This allows engineers to train models directly on disk-backed time-series recordings with zero export overhead.

Building purpose-built storage and indexing formats directly for multimodal streams eliminates the brittle extraction steps that slow down modern robotics engineering.
