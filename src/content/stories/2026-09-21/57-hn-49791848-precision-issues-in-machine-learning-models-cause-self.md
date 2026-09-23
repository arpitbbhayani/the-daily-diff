---
title: Precision issues in machine learning models cause self-driving bugs
source: hn
url: https://blog.comma.ai/ml-bugs/
date: '2026-09-21'
tags:
- catchup
- deep-learning-inference
- floating-point-precision
- hn
- machine-learning-bugs
- mixed-precision
- rounding-errors
- self-driving
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49791848'
comments: https://news.ycombinator.com/item?id=49791848
why_read: This post offers a deep dive into real-world machine learning bugs that
  impacted a self-driving system. Readers will learn how issues like floating-point
  precision in model output layers can lead to critical failures and strategies for
  identifying such problems.
authors:
- LorenDB
---

Deploying ML models, especially for critical applications like self-driving, exposes fascinating, low-level bugs. Comma.ai shares an excellent breakdown of issues they encountered, highlighting why seemingly minor details in precision can have massive ripple effects.

One standout bug involved output layers for a Diffusion Transformer (DiT) running in BF16, leading to coarse speed predictions and magnified rounding errors in acceleration calculations. The fix was promoting the plan head and its inputs to FP32, a critical lesson for anyone dealing with mixed-precision inference where small errors compound.

Another case involved ConvNeXt FP16 issues, showing that even standard libraries need careful scrutiny when pushing hardware limits. This article is a masterclass in practical ML engineering and debugging, offering concrete examples of how to tackle performance and correctness issues in production AI systems.
