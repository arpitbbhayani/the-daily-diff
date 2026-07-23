---
authors:
- ilreb
comments: https://news.ycombinator.com/item?id=48974454
date: '2026-07-20'
hn_id: '48974454'
image: /infographics/05-hn-48974454.jpg
interest_score: 8
section: ai
source: hn
tags:
- auto-labeling
- catchup
- foundation-models
- hn
- policy-models
- pre-training
- real-robot-data
- robotics
- umi-data
title: Xiaomi-Robotics-1 scales robot policy models using embodiment-free pre-training
url: https://robotics.xiaomi.com/xiaomi-robotics-1.html
why_read: This text explains how Xiaomi-Robotics-1 overcomes data scarcity in robotics
  by combining large-scale embodiment-free pre-training with real-robot data. Readers
  will learn about a two-stage training paradigm for scaling robot policy models.
---

Xiaomi-Robotics-1 introduces a compelling strategy for scaling robot policy models, tackling the perennial problem of data scarcity in robotics. They employ a two-stage training paradigm: large-scale embodiment-free (UMI) pre-training, followed by targeted real-robot data post-training.

The key insight is breaking the data barrier by leveraging 100,000 hours of UMI trajectories across 1,700 diverse scenarios for pre-training, then fine-tuning with 7,200 hours of real-robot data. This allows the model to learn general representations before specializing for physical embodiments.

This approach offers valuable lessons for anyone working with AI agents in data-limited domains. It demonstrates how to creatively use diverse, readily available data for foundational learning, then precisely align the model with specific operational realities. It is a powerful blueprint for scalable agentic AI.