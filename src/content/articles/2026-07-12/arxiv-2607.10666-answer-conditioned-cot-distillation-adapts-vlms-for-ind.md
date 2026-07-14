---
title: Answer-Conditioned CoT Distillation Adapts VLMs for Industrial Visual Inspection
source: arxiv
url: http://arxiv.org/abs/2607.10666v1
date: '2026-07-12'
tags:
- ai-visual-inspection
- arxiv
- catchup
- chain-of-thought-distillation
- cond-mat.mtrl-sci
- cs.AI
- cs.CV
- cs.LG
- low-data-learning
- manufacturing
- vlm-adaptation
arxiv_id: '2607.10666'
categories: cs.CV, cond-mat.mtrl-sci, cs.AI, cs.LG
why_read: This article introduces an answer-conditioned chain-of-thought distillation
  method for rapidly adapting small vision-language models to new industrial tasks.
  Learn how this approach achieves superior performance on visual inspection with
  minimal labeled data, even outperforming larger models like GPT-4.1.
authors:
- Shubham Rao
---

Deploying AI in manufacturing for visual inspection is tough; defect types change, and labeled datasets are scarce. How do you rapidly adapt models with minimal data?

This paper presents 'answer-conditioned Chain-of-Thought (CoT) distillation.' The magic happens by having a frontier VLM generate *justified visual explanations* for training images, critically, *conditioned on the correct label*.

This ensures all generated reasoning points towards the right conclusion. A smaller 3B-parameter VLM is then fine-tuned on these reasoning-augmented examples.

The results are remarkable: across various industrial classification tasks with only 18-30 labeled images, this method consistently outperforms direct fine-tuning. In one case, the fine-tuned 3B model even beat GPT-4.1 by 10 percentage points.

It is a smart way to transfer high-quality reasoning from large models to small, task-specific ones.
