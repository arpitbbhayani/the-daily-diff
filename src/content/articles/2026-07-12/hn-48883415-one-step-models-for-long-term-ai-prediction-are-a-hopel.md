---
title: One-Step Models for Long-Term AI Prediction Are a Hopeless Trap
source: hn
url: http://incompleteideas.net/IncIdeas/OneStepTrap.html
date: '2026-07-12'
tags:
- ai-prediction
- catchup
- computational-complexity
- error-accumulation
- hn
- one-step-trap
- temporally-abstract-models
score: 53
hn_id: '48883415'
comments: https://news.ycombinator.com/item?id=48883415
why_read: This text explains why one-step models are insufficient for long-term AI
  prediction, detailing the pitfalls of error accumulation and computational complexity.
  Readers will learn to recognize the 'one-step trap' and understand the need for
  temporally abstract models.
authors:
- Rich Sutton
author: Rich Sutton
---

Rich Sutton's "The One-Step Trap" identifies a critical flaw in how many AI agents are designed: the reliance on iterated one-step predictions.This approach, while intuitive, leads to compounding errors over time, making long-term predictions highly inaccurate.Think about a stochastic world; iterating a one-step model results in an exponentially complex tree of possibilities, quickly becoming computationally infeasible.Sutton argues for developing temporally abstract models, using options and General Value Functions (GVFs), to address this.For engineers building AI agents, understanding this trap is paramount to developing robust, scalable, and genuinely intelligent systems.Do not let your agents get caught in the short-term view.
