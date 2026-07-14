---
title: Optimal Policy Learns When to Fine-Tune Models Under Budget
source: arxiv
url: http://arxiv.org/abs/2607.10694v1
date: '2026-07-12'
tags:
- actor-critic
- arxiv
- catchup
- compute-budget
- continual-fine-tuning
- cs.AI
- cs.LG
- dynamic-programming
- foundation-models
- markov-decision-process
- reinforcement-learning
- text-classification
arxiv_id: '2607.10694'
categories: cs.LG, cs.AI
why_read: This paper demonstrates an optimal policy for continually fine-tuning foundation
  models on resource-limited devices. Readers will understand how an RL-based actor-critic
  method can significantly improve model accuracy while reducing computational requirements.
authors:
- Thomas Tsouparopoulos
- Iordanis Koutsopoulos
---

Deploying and continually updating Foundation Models on resource-limited devices is a major challenge. When should you fine-tune, and when should you save compute?

This paper tackles that exact problem, formulating it as a constrained Markov Decision Process. It introduces an actor-critic reinforcement learning method to determine the optimal timing for fine-tuning.

The system considers the model's performance, computational budget, and data distribution relevance to make intelligent, online decisions. This is crucial for efficient edge deployment and continuous learning.

Experiments show impressive results: the method achieves 97% of full-parameter fine-tuning accuracy while requiring only 25% of the fine-tuning steps. That is a 4x reduction in compute for nearly identical performance.

Optimize your Foundation Model deployments, even with tight resource constraints.
