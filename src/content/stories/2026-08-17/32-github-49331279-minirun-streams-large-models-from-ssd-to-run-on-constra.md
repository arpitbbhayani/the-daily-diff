---
title: Minirun streams large models from SSD to run on constrained devices
source: github
url: https://github.com/nanguoyu/minirun-app
date: '2026-08-17'
tags:
- catchup
- device-ai
- github
- large-models
- memory-streaming
- minirun
- mlx
- ssd-storage
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 9
hn_id: '49331279'
comments: https://news.ycombinator.com/item?id=49331279
why_read: This text introduces Minirun, an app that allows running extremely large
  AI models on devices with limited RAM, such as iPhones and Macs. Readers will learn
  how Minirun achieves this by streaming model weights directly from SSD, managing
  a fixed memory budget to enable local, free execution of powerful models like Kimi
  K3.
authors:
- 0xDongWang
---

Running huge AI models on your iPhone sounds like science fiction, but this project makes it reality by tackling the core constraint: memory. It streams individual model layers, or even just the 'experts' for sparse models, directly from an external NVMe SSD.

This is not a trick; it is clever system design. The app sets a fixed, small memory budget, then reads only what is needed for the current computation from the SSD into those buffers, passing them to MLX without copying, and then releases them. This means a 1.56 terabyte model can run on devices with only a few gigabytes of RAM.

This approach changes the game for edge AI. You are no longer bound by device RAM for model size, but by I/O bandwidth. It is a fantastic example of hardware-aware software architecture solving a seemingly impossible problem.
