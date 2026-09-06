---
authors:
- Subham Sekhar Sahoo
- Lingjie Chen
- Khiem Pham
- Jonathan Geuter
- Junlin Chen
- Chaitanya Dwivedi
- Varad Pimpalkhute
- Yash Akhauri
- Alexander Moreno
- Mikhail Yurochkin
- Zhenting Wang
- Mostafa Elhoushi
- Nolan Dey
- Shane Bergsma
- Joel Hestness
- Hongyi Wang
- John Thickstun
- Eric Xing
- Zhengzhong Liu
comments: https://news.ycombinator.com/item?id=49561124
date: '2026-09-04'
depth_score: 8
hn_id: '49561124'
image: /infographics/53-hn-49561124.jpg
interest_score: 8
novelty_score: 9
section: ai
source: hn
tags:
- catchup
- diffusion-augmented-llms
- discrete-diffusion
- hn
- lossless-speedups
- parallel-token-generation
- speculative-decoding
- uno-model
title: Diffusion augmentation enables lossless speedups in large language models
url: https://s-sahoo.com/uno/
utility_score: 7
why_read: This paper introduces Uno, a novel method for diffusion-augmented LLMs that
  achieves significant lossless speedups in inference. Readers will learn how this
  approach generates multiple tokens simultaneously, outperforming leading speculative
  decoding techniques without needing a draft model.
---

Achieving lossless speedups in LLM inference is the holy grail for many engineers, and the 'Uno' method is delivering on that promise. This new approach, using diffusion-augmented LLMs and \(\Psi\)-Spec samplers, is claiming up to 3x speedups over baseline autoregressive models.

The key innovation is training lightweight diffusion weights alongside standard AR weights, allowing for parallel token generation without compromising quality. This significantly outperforms leading speculative decoding methods like DFlash and Eagle3 across all evaluated batch sizes.

For anyone working on LLM infrastructure or applied AI, this represents a substantial leap forward. It offers a new paradigm for optimizing inference, potentially unlocking much faster and more cost-effective deployment of large language models in production.