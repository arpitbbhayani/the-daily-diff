---
title: EgoWAM Scales Robot Manipulation with DINO and 3D Flow
source: arxiv
url: http://arxiv.org/abs/2607.08436v1
date: '2026-07-08'
tags:
- 3d-motion-flow
- arxiv
- behavior-cloning
- catchup
- cs.AI
- cs.RO
- dino
- egocentric-human-data
- egowam
- human-to-robot-transfer
- robot-manipulation
- world-action-models
arxiv_id: '2607.08436'
categories: cs.RO, cs.AI
why_read: This paper introduces EgoWAM, a co-training framework that significantly
  improves human-to-robot transfer for robot manipulation. It reveals how predicting
  scene evolution with DINO or 3D motion flow targets overcomes limitations of behavior
  cloning, leading to better generalization.
authors:
- Baoyu Li
- Xinchen Yin
- Mengying Lin
- Yixin Zhang
- Danfei Xu
---

Scaling robot learning with human data is tough because human-specific factors get entangled with transferable skills. EgoWAM addresses this by using "World Action Models" to predict how a scene evolves, not just actions. They found that abstract representations like DINO and 3D motion flow drastically improve generalization, yielding up to 4x better out-of-distribution performance compared to pixel-based methods. This is a crucial step for building more adaptable and capable AI agents that can learn from real-world human demonstrations.
