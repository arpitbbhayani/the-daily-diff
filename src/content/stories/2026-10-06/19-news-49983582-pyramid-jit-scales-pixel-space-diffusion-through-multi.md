---
title: Pyramid-JiT scales pixel space diffusion through multi-resolution predictions
source: news
url: https://www.linum.ai/field-notes/pyramid-jit
date: '2026-10-06'
tags:
- catchup
- decoder-only
- diffusion-models
- image-generation
- news
- pixel-space
- pyramid-jit
section: ai
is_news: true
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 8
hn_id: '49983582'
comments: https://news.ycombinator.com/item?id=49983582
why_read: Learn how Pyramid-JiT improves image generation efficiency and training
  speed by predicting multi-resolution drafts along a decoder-only transformer trunk.
authors:
- Linum
---

Standard latent diffusion models rely heavily on variational autoencoders (VAEs) to compress pixels before feeding tokens to transformer backbones. While this reduces spatial dimensions, the VAE introduces an architectural bottleneck that limits parameter scaling and end-to-end efficiency.

Pyramid-JiT presents an alternative decoder-only pixel-space architecture that drops the VAE entirely. By predicting image outputs at multiple intermediate resolutions along the Diffusion Transformer (DiT) trunk, the model performs progressive refinement in native pixel space. This approach achieves target quality metrics on 11.3 times fewer training samples and cuts compute time by over fourfold.

Eliminating separate encoder stages simplifies the serving and training pipeline substantially. Direct pixel-space supervision keeps token representations unified throughout the network.

Architectural simplicity in model backbones consistently wins over multi-stage pipeline complexity.
