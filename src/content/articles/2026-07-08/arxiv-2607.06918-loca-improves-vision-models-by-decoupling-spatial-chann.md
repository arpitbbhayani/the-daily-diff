---
title: LoCA Improves Vision Models by Decoupling Spatial-Channel Adaptation
source: arxiv
url: http://arxiv.org/abs/2607.06918v1
date: '2026-07-08'
tags:
- arxiv
- catchup
- convolutional-networks
- cs.AI
- cs.CV
- cs.LG
- loca
- lora
- parameter-efficient-fine-tuning
- spatial-channel-decoupling
- vision-foundation-models
arxiv_id: '2607.06918'
categories: cs.CV, cs.AI, cs.LG
why_read: This paper introduces LoCA, a novel Parameter-Efficient Fine-Tuning framework,
  which addresses LoRA's limitations for convolutional layers by decoupling spatial
  and channel adaptation. Readers will learn how this approach improves vision foundation
  model performance across diverse downstream tasks.
authors:
- Sojung An
- Junha Lee
- Sujeong You
- Nam Ik Cho
- Donghyun Kim
---

This paper addresses a key challenge in deploying Vision Foundation Models. Fine-tuning these powerful models is expensive and prone to catastrophic forgetting. LoRA helps, but struggles with the unique 4D structure of convolutional kernels. LoCA, however, introduces a clever approach. It disentangles channel and spatial adaptation within convolutions. This allows for more targeted, efficient fine-tuning, achieving strong performance while preserving spatial priors. For engineers working with large vision models, understanding such parameter-efficient techniques is vital for practical deployment and resource management.
