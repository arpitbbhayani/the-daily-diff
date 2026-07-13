---
title: Modeling Symbolic Attribute Interactions Improves VLM Confidence
source: arxiv
url: http://arxiv.org/abs/2607.07395v1
date: '2026-07-08'
tags:
- arxiv
- calibration
- catchup
- confidence-estimation
- contrastive-learning
- cs.AI
- cs.CV
- cs.LG
- graph-attention-network
- symbolic-attribute-graph
- test-time-adaptation
- vision-language-models
arxiv_id: '2607.07395'
categories: cs.CV, cs.AI, cs.LG
why_read: Read this to learn about ARGTCA, a novel graph-based approach that significantly
  improves confidence estimation and calibration in vision-language models by modeling
  symbolic attribute interactions. It demonstrates substantial reductions in Expected
  Calibration Error over baseline methods.
authors:
- Tanay Sodha
- Aditya Sharma
- Ramya Hebbalaguppe
- Vinti Agarwal
- Pranav Murthy Yeluripaty
---

Vision-Language Models (VLMs) often struggle with overconfidence, leading to poor calibration during test-time adaptation. This can be a significant issue in deployment.

ARGTCA addresses this by recognizing that VLM prompt tuning often ignores the relational structure between class attributes. It explicitly models these relationships.

The method represents (class, attribute) pairs as nodes in a Symbolic Attribute Graph and uses a Graph Attention Network (GAT) to capture inter-attribute dependencies.

This graph-based approach reduces average Expected Calibration Error (ECE) by approximately 37% over baselines. This is a substantial improvement in reliability.

For engineers working with VLMs, especially in high-stakes applications, this research provides a principled way to achieve more reliable confidence estimates and build more trustworthy AI.

Making Vision-Language Models confidently correct.
