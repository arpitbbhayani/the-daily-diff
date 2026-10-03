---
title: Nunchux achieves faster than playback video generation on AMD MI355X
source: hn
url: https://www.nunchux.ai/blog/video-generation-on-amd-mi355x
date: '2026-09-23'
tags:
- amd-mi355x
- catchup
- hn
- inference-optimization
- minimax-h3
- sglang
- vc-attention
- video-generation
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49818681'
comments: https://news.ycombinator.com/item?id=49818681
why_read: Read this to understand how the Nunchux inference stack achieves real-time
  MiniMax-H3 video generation on AMD MI355X hardware. You will examine latency benchmarks
  demonstrating up to a 26.7x speedup over SGLang across multi-GPU setups.
authors:
- Nunchux AI Team
image: /infographics/14-hn-49818681.jpg
---

Generating high-resolution video faster than real-time has long been an elusive latency milestone for diffusion transformers. By combining low-precision attention (VC-Attention) with custom inference kernel optimizations, the Nunchux engine achieved a 21.8x to 26.7x speedup over SGLang on AMD MI355X hardware.

On an eight-GPU node running MiniMax-H3, a 5-second video generates in 1.33 seconds, while a 15-second clip takes only 5.39 seconds. Even across four GPUs, generation latency remained strictly below video playback duration.

The benchmark covers the full inference pipeline including text encoding, DiT denoising steps, and VAE decoding. This demonstrates that non-NVIDIA accelerators can deliver compelling serving efficiency when the underlying kernel stack is tailored for low-precision attention patterns.

Hardware diversity in AI inference is finally becoming practical when paired with dedicated attention kernel engineering.
