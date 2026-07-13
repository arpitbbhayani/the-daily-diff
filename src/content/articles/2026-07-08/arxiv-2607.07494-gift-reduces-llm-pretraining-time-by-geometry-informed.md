---
title: GIFT Reduces LLM Pretraining Time by Geometry-Informed Gradient Scaling
source: arxiv
url: http://arxiv.org/abs/2607.07494v1
date: '2026-07-08'
tags:
- anisotropic-gradients
- arxiv
- catchup
- cs.DC
- cs.LG
- geometry-informed-scaling
- gradient-communication
- gradient-quantization
- large-language-models
- llm-pretraining
- low-precision-communication
arxiv_id: '2607.07494'
categories: cs.DC, cs.LG
why_read: This article explains GIFT, a geometry-informed method that optimizes low-precision
  gradient communication in LLM pretraining. You will learn how transforming gradients
  into an isotropic space enhances faithfulness and reduces pretraining time.
authors:
- Jieying Wang
- Shuyuan Fan
- Mingkai Zheng
- Zhao Zhang
---

Gradient communication is a major bottleneck in scaling LLM pretraining, especially when using low-precision formats that can degrade performance due to anisotropic gradients.

This paper introduces GIFT, a geometry-informed gradient scaling method. It transforms gradients into a near-isotropic space before quantization, making low-precision representations significantly more faithful to their high-precision counterparts.

GIFT integrates seamlessly without changing the optimizer or training recipe. It reduced the end-to-end pretraining time of Llama-600M by 7.6% on 64 NVIDIA GH200 Superchips, while also improving downstream task preservation. This is a game-changer for large-scale distributed LLM training.
