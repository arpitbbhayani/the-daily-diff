---
title: QaDiT is a latent Diffusion Transformer for text-to-audio
source: hn
url: https://huggingface.co/QuarkML/QaDiT
date: '2026-08-10'
tags:
- audioldm
- catchup
- cfg
- ddim
- flan-t5
- hifi-gan
- hn
- latent-diffusion-transformer
- text-to-audio
- v-prediction
section: ai
interest_score: 8
depth_score: 7
utility_score: 8
novelty_score: 8
hn_id: '49247646'
comments: https://news.ycombinator.com/item?id=49247646
why_read: Read this to understand the mechanistic details of QaDiT, a text-to-audio
  latent Diffusion Transformer. It describes its architecture, training objective,
  and inference process.
authors:
- sidharthGN
---

Training large AI models often means massive compute bills, but one team just showed a new path. They trained QaDiT, a 160-million parameter text-to-audio Diffusion Transformer, for an astonishing $18. This is not a typo.

The technical details are impressive. QaDiT leverages FLAN-T5 for conditioning and a specific DiT denoising of AudioLDM KL-VAE latents, followed by VAE decode and HiFi-GAN vocoder. The model provides a clear pipeline for text-to-audio generation, indicating a smart use of existing components and efficient training strategies.

This demonstrates that groundbreaking AI work does not always require a supercomputer or a multi-million dollar budget. This is highly relevant for anyone looking to build or optimize applied AI systems.
