---
title: Standard Metrics Mask Behavioral Divergence in Quantized LLMs
source: arxiv
url: http://arxiv.org/abs/2607.08734v1
date: '2026-07-09'
tags:
- arxiv
- attention-weights
- behavioral-divergence
- catchup
- correctness-agreement
- cs.AI
- large-language-models
- post-training-quantization
arxiv_id: '2607.08734'
categories: cs.AI
why_read: This text reveals how standard performance metrics fail to capture behavioral
  changes in quantized large language models, proposing a new metric for better evaluation.
  You will learn about the hidden divergences and specific sensitivities within attention
  mechanisms caused by quantization.
authors:
- Baha Rababah
- Cuneyt Gurcan Akcora
- Carson K. Leung
---

Deploying quantized LLMs? Beware the "illusion of equivalency." Standard metrics like accuracy and perplexity often fail to capture critical behavioral changes.

Researchers found that behavioral divergence emerges under moderate quantization, even when overall task performance appears preserved. This means your model might be getting the right answers for different reasons, or making different kinds of mistakes.

The paper introduces "correctness agreement," a decision-level metric, to expose these hidden shifts. It also highlights that query and key projections are consistently more sensitive to quantization than value and output projections.

For robust LLM infrastructure, you must evaluate beyond conventional performance metrics to ensure model reliability.
