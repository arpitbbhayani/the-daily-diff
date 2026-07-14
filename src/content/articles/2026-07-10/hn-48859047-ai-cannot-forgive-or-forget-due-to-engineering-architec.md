---
title: AI cannot forgive or forget due to engineering architecture
source: hn
url: https://tejassuds.com/blog/ai-cannot-forget
date: '2026-07-10'
tags:
- ai-memory
- catchup
- context-window
- forgetting
- forgiveness
- hn
- machine-unlearning
- right-to-be-forgotten
- weights
score: 21
hn_id: '48859047'
comments: https://news.ycombinator.com/item?id=48859047
why_read: This piece clarifies the engineering reasons why AI systems cannot truly
  forgive or forget, delving into the specific memory mechanisms like weights and
  context windows. It explains how AI's architectural design prevents these human-like
  capabilities and why 'the right to be forgotten' clashes with machine learning.
authors:
- Tejas Parthasarathi Sudarshan
author: Tejas Parthasarathi Sudarshan
---

AI's 'memory' is not what you think. It cannot truly forget, and this is an engineering problem, not just a philosophical one.

Modern AI systems retain past information across four distinct mechanisms: model weights, the context window, vector databases, and fine-tuning. Each has its own broken way of forgetting, or not forgetting at all.

For example, deleting data from your training set does not remove the gradient it left behind in the model weights. Machine unlearning remains an unsolved research problem at scale. The context window is an all-or-nothing affair; it is either eidetic or void.

This has profound implications for data privacy (the "right to be forgotten" clashes with machine learning's substrate) and our expectations of AI. Understanding these distinctions is crucial for anyone building or deploying AI systems.

The substrate has no delete, and that is a significant challenge.
