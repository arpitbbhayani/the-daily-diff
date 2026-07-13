---
title: WAM-TTT framework steers robot models with unlabeled human videos
source: arxiv
url: http://arxiv.org/abs/2607.06988v1
date: '2026-07-08'
tags:
- adaptive-memory
- arxiv
- catchup
- cs.AI
- cs.RO
- human-video-guidance
- robot-foundation-models
- robot-steering
- test-time-training
- world-action-models
arxiv_id: '2607.06988'
categories: cs.RO, cs.AI
why_read: This text introduces WAM-TTT, a novel framework for efficiently steering
  robot foundation models. Readers will learn how it uses unlabeled human videos and
  adaptive memory to guide robots without fine-tuning, enhancing generalization.
authors:
- Yusen Feng
- Bingchen Han
- Jiangran Lyu
- Kai Liu
- Yixin Zheng
- Yuxuan Wan
- Weiheng Liu
- Sun Han
- Ruiqin Li
- Yulong Zhang
- Fangfu Liu
- Xuesong Shi
- Libin Liu
- Yizhou Wang
- Zhizheng Zhang
- He Wang
---

Adapting large robot foundation models to new tasks typically demands more robot demonstrations or costly fine-tuning. WAM-TTT offers a groundbreaking alternative: steer a frozen world-action model simply by watching human videos at test time. This framework incorporates raw human videos into a lightweight adaptive memory, enabling efficient, reusable steering without requiring additional robot actions or human annotations. Extensive experiments show WAM-TTT consistently outperforms baselines, preserving the foundation model's generalization ability. For engineers building intelligent agents, this presents a powerful paradigm for rapidly deploying and customizing robotic systems based on human intent.
