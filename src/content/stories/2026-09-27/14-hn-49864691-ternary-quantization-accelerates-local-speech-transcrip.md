---
title: Ternary quantization accelerates local speech transcription on consumer hardware
source: hn
url: https://moondream.ai/blog/introducing-parakeet-redux-and-ultra
date: '2026-09-27'
tags:
- automatic-speech-recognition
- catchup
- cpu-inference
- hn
- memory-bandwidth
- parakeet
- ternary-quantization
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49864691'
comments: https://news.ycombinator.com/item?id=49864691
why_read: Learn how ternary quantization reduces memory bandwidth bottlenecks to enable
  fast, local speech-to-text inference on everyday hardware.
authors:
- Moondream
---

Running speech recognition locally on commodity hardware usually hits a severe bottleneck: memory bandwidth rather than pure computational throughput. Moondream tackled this issue by applying ternary quantization to NVIDIA Parakeet weights, restricting encoder weights to just negative one, zero, and positive one.

This aggressive quantization shrinks the overall model footprint from 1.2 GB down to 178 MB. Because memory traffic drops drastically, the custom Photon inference engine executes specialized kernels directly against the packed ternary format. On an Apple M2 CPU, the engine processes 38 seconds of audio per second, while scaling to 113 seconds of audio per second on an eight-core AMD EPYC processor.

Reducing memory transfer overhead turns out to be far more effective for inference latency than throwing higher precision compute at the workload. Hardware memory bus limits matter more than raw compute when deploying models to edge environments or low-cost instances.
