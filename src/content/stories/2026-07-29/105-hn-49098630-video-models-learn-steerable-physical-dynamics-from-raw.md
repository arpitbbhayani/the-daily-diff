---
authors:
- Jay Hack
comments: https://news.ycombinator.com/item?id=49098630
date: '2026-07-29'
depth_score: 8
hn_id: '49098630'
image: /infographics/105-hn-49098630-video-models-learn-steerable-physical-dynamics-from-raw.jpg
interest_score: 8
novelty_score: 8
section: ai
source: hn
tags:
- catchup
- hn
- jacobian-lens
- physical-dynamics
- steerable-ai
- video-transformers
- world-models
title: Video models learn steerable physical dynamics from raw video
url: https://blocket-league.vercel.app/
utility_score: 7
why_read: This lab demonstrates how video transformers learn internal physical models
  purely from raw video and how these models can be manipulated to steer the transformer's
  output, allowing control over its 'hallucinations' in a game-like environment.
---

Ever wondered how video models internally "understand" physics? This new lab showcases a fascinating discovery: video transformers learn compact, interpretable internal models of physical dynamics purely from raw video input.

What is truly remarkable is that these learned latent states encode properties like position, velocity, and collisions in geometric representations. Even better, using a technique called the Jacobian lens, these representations can be directly "steered" in real-time. Imagine literally playing a video game by manipulating a model's internal activations to control its predicted output.

This work offers deep insights into model interpretability and control, moving beyond just understanding what a model predicts to understanding *how* it reasons about the world. For anyone working with applied AI, this changes the game for building more controllable and transparent systems.