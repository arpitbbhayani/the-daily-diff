---
title: Selective Timestep Weighting and Advantage-Based Replay for Sample-Efficient
  Diffusion RLHF
source: arxiv
url: http://arxiv.org/abs/2607.07693v1
date: '2026-07-08'
tags:
- arxiv
- catchup
- cs.AI
- cs.CV
- cs.LG
arxiv_id: '2607.07693'
categories: cs.LG, cs.AI, cs.CV
why_read: You will learn two complementary strategies, selective timestep weighting
  and advantage-based replay, that can boost the sample efficiency of Diffusion RLHF
  by up to 6x. This is critical for engineers working with applied AI and LLM infrastructure,
  as it reduces the need for extensive human or reward model evaluations, making RLHF
  more practical in real-world settings.
authors:
- Eric Zhu
- Abhinav Shrivastava
- Soumik Mukhopadhyay
---

Reinforcement Learning from Human Feedback (RLHF) is powerful for aligning generative models, but for diffusion models, it is notoriously feedback-inefficient. This paper tackles that hurdle head-on with two clever strategies.

The core insight is that reward information in diffusion trajectories is unevenly distributed. Not all denoising timesteps or trajectories contribute equally to learning.

By introducing a per-timestep weighting scheme and an advantage-based replay mechanism, the authors dramatically improve sample efficiency. Their approach achieved up to a 6x improvement in sample efficiency over widely used baselines under identical settings.

For engineers working with applied AI, especially those deploying diffusion models or building LLM infrastructure, these methods mean you can achieve better model alignment with significantly less human or reward model feedback, accelerating development and reducing operational costs.
