---
title: Kimi K3 visualizes neural network forward pass execution at scale
source: hn
url: https://magik.net/llmcity/
date: '2026-08-17'
tags:
- 3d-visualization
- catchup
- forward-pass
- hn
- kimi-k3
- neural-networks
- runtime-caches
- tensor-visualization
section: ai
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 9
hn_id: '49333151'
comments: https://news.ycombinator.com/item?id=49333151
why_read: This text introduces Kimi K3, a 3D visualization tool for understanding
  the forward pass of a neural network. Readers will learn how the tool spatially
  represents tensors, experts, and runtime caches to provide insight into model execution
  at scale.
authors:
- devttyeu
---

This visualization of an LLM's internal architecture is genuinely mind-blowing. Imagine exploring a 3D city where every building block is a tensor weight in the Kimi K3 model. This is exactly what "LLM City" offers.

The project maps matrix axes to X and Y coordinates and execution depth to Z, allowing you to literally fly through the model's forward pass. You can see how runtime caches are laid out and how router choices determine expert activation. Each scalar value is a 2.5mm tile, giving an incredible sense of scale.

This is not just a pretty demo; it is a powerful new lens for understanding LLM behavior and potential bottlenecks. It helps you grasp the immense complexity and parallel processing within these models in a way that traditional metrics cannot. This visual model provides a new perspective that can inform debugging and optimization efforts significantly.

This tool offers a truly unique perspective on the inner workings of large language models.
