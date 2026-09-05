---
title: ArXiv Paper
source: arxiv
url: https://arxiv.org/abs/49552163
date: '2026-09-03'
tags:
- arxiv
- catchup
section: ai
interest_score: 8
depth_score: 9
utility_score: 8
novelty_score: 8
arxiv_id: '49552163'
categories: ''
why_read: This paper provides a rigorous framework and practical policies for online
  hyperparameter optimization at inference time, specifically useful for fine-tuning
  complex AI agent systems in production without representative validation data.
---

Optimizing AI agent hyperparameters in production is a unique challenge. You cannot always rely on static validation sets, especially when inference-time choices dictate outcomes in real-time.

This paper introduces Online Hyperparameter Optimization (OHPO), formalizing it as an infinitely many-armed bandit problem. It presents IMABO, a general framework combining bandit policies with proposal oracles to tackle this head-on.

Engineers working with live AI systems, particularly complex agentic setups where choices like prompting strategy or model selection impact live requests, will find this framework highly actionable for real-time optimization. It offers a principled approach to a common, difficult problem.
