---
title: Reasoning improves classification accuracy in Jev-style decision models
source: github
url: https://github.com/PostHog/jeeves
date: '2026-09-29'
tags:
- catchup
- cispo
- decision-models
- diffusion-drafter
- github
- jevbench
- sft
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49891290'
comments: https://news.ycombinator.com/item?id=49891290
why_read: Learn how adding explicit reasoning steps and diffusion drafting significantly
  improves the accuracy of calibrated Jev-like decision models.
authors:
- PostHog
image: /infographics/03-github-49891290.jpg
---

Most classification pipelines rely either on fast, uncalibrated embeddings or heavy frontier LLMs that are far too slow for low-latency decision systems. Jeeves demonstrates a compelling middle ground by integrating reasoning and diffusion drafting directly into a compact 9B model.

By allowing a Qwen-based classifier to generate intermediate reasoning tokens before outputting decisions, the system improves accuracy from 0.822 to 0.889 on unseen test distributions. To solve the resulting latency penalty, it uses a block diffusion drafter that reduces inference overhead while preserving accuracy across boolean, multi-choice, and rating requests.

The framework provides complete training code for SFT and CISPO, along with FP8 Hopper kernels that achieve sub-second execution when chain-of-thought length is constrained.

Applying test-time compute and speculative drafting to specialized backend classifiers offers a practical path toward high-precision automated decisions.
