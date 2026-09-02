---
title: Isaac 0.5 is an Embodied Foundation Model for Robotics
source: hn
url: https://twitter.com/perceptroninc/status/2092678357775442103
date: '2026-08-31'
tags:
- catchup
- embodied-ai
- foundation-model
- hn
- isaac-0.5
- mixture-of-experts
- multimodal-learning
- open-weight-model
- robot-control
- video-pretraining
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49513776'
comments: https://news.ycombinator.com/item?id=49513776
why_read: This announcement details Isaac 0.5, an open-weight embodied foundation
  model by Perceptron AI. It highlights how the model integrates multimodal video
  understanding, reasoning, and robot control into a single architecture, demonstrating
  advancements in efficient scaling and task elasticity.
authors:
- Perceptron AI
---

Perceptron AI just dropped Isaac 0.5, a 36B dynamic Mixture-of-Experts (MoE) embodied foundation model with open weights. This is a significant step forward for applied AI and robot control.

Isaac 0.5 integrates multimodal video understanding, complex embodied reasoning, and direct robot control into a single sparse backbone. What is particularly impressive is their scaling recipe, reducing teleoperation requirements from 5900 hours to just 28 hours for action-loss calibration by scaling video pretraining to 1 million hours.

This model can convert compound commands, such as "castling" in chess, into a series of detailed actions, demonstrating advanced reasoning. The focus on "elasticity" also means it is highly amenable to learning new skills rapidly.

For engineers working on agents, robotics, or complex interactive AI systems, an open-weight model with these capabilities offers immense practical potential. It pushes the boundary of what LLMs can do in the physical world.
