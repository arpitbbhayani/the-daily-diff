---
title: FMR algorithm reduces misalignment in imitation learning
source: arxiv
url: http://arxiv.org/abs/2607.07859v1
date: '2026-07-08'
tags:
- alignment
- arxiv
- catchup
- cs.AI
- cs.HC
- cs.LG
- evaluative-feedback
- feedback-manipulation-regularization
- imitation-learning
- reinforcement-learning
arxiv_id: '2607.07859'
categories: cs.AI, cs.HC, cs.LG
why_read: This paper introduces Feedback Manipulation Regularization (FMR), an algorithm-agnostic
  method for improving alignment in reinforcement learning policies. Readers will
  learn how FMR effectively uses evaluative feedback to significantly reduce misalignment,
  even with limited or noisy data.
authors:
- Benjamin Poole
- Minwoo Lee
---

Aligning AI agents with human values in complex, sequential decision-making environments is a persistent challenge in AI. This paper presents Feedback Manipulation Regularization (FMR), an algorithm-agnostic approach that drastically improves agent alignment.

FMR leverages human evaluative feedback not just as an input, but as a direct corrective signal during offline training. This simple yet powerful idea achieved up to a 98% reduction in misalignment across various imitation learning algorithms on Safety Gymnasium environments.

What is more, the method remains robust even with limited or noisy demonstration data. This means building safer, more aligned AI agents could become significantly more practical.

Imagine developing agents that reliably adhere to human intent, even when data is scarce. This is a crucial step towards trustworthy AI.
