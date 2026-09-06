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
comments: https://news.ycombinator.com/item?id=49565614
date: '2026-09-04'
depth_score: 8
hn_id: '49565614'
image: /infographics/46-github-49565614.jpg
interest_score: 8
novelty_score: 8
section: ai
source: github
tags:
- catchup
- discrete-diffusion
- github
- llms
- multi-token-prediction
- speculative-decoding
- uno
title: Uno unlocks lossless speedups in LLMs through discrete diffusion
url: https://github.com/ifm-ai/uno
utility_score: 8
why_read: This text introduces Uno, a diffusion-augmented LLM that uses two sets of
  weights and a novel sampler to achieve provably lossless multi-token prediction.
  Readers will learn how Uno offers higher throughput than speculative decoding without
  requiring a separate draft model.
---

Unlocking significant, provably lossless speedups in LLM inference just got a lot more interesting. A new approach, "Uno," leverages discrete diffusion to achieve multi-token prediction that outperforms traditional speculative decoding.

Instead of needing a separate, smaller draft model, Uno integrates two weight sets: auto-regressive (AR) for standard prediction and diffusion weights for parallel token generation. This novel architecture, combined with the 
-Spec sampler, delivers higher throughput across all batch sizes.

For senior engineers wrestling with LLM inference costs and latency, this is a game-changer. It offers a new paradigm for efficient, high-performance LLM deployment without compromising on output quality. This could fundamentally shift how you design and scale your AI applications.