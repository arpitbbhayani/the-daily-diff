---
authors:
- Johnny Yu
- Siddarth Mamidanna
- Cyril Gorlla
comments: https://news.ycombinator.com/item?id=49113599
date: '2026-07-30'
depth_score: 8
hn_id: '49113599'
image: /infographics/30-hn-49113599.jpg
interest_score: 8
novelty_score: 8
section: ai
source: hn
tags:
- catchup
- censorship-transfer
- financial-reasoning
- hn
- model-distillation
- self-distillation
- teacher-models
title: Distilled models avoid teacher censorship while improving financial reasoning
url: https://www.ctgt.ai/research/distillation-censorship-transfer
utility_score: 8
why_read: This research reveals that distilled models can significantly improve financial
  reasoning abilities from censored teacher models without inheriting their censorship.
  Readers will learn that self-distillation can achieve comparable performance to
  using an advanced teacher model.
---

Distilling knowledge from large language models is a crucial technique for creating efficient and specialized AI, but a new finding presents a surprising advantage: censorship does not necessarily transfer from teacher to student. Researchers found that distilling a DeepSeek model into GPT-OSS improved financial reasoning without inheriting DeepSeek's censorship.

This is a huge win for applied AI. It means developers can leverage the powerful capabilities of certain teacher models, even those with problematic biases or censorship from their original training, to enhance custom smaller models without inheriting those undesirable traits.

The practical implications are substantial, allowing for more performant and domain-specific models at a much lower cost. It suggests a clear path for safely leveraging a broader range of open-source and proprietary models for distillation. This changes how we might approach model selection for knowledge transfer.