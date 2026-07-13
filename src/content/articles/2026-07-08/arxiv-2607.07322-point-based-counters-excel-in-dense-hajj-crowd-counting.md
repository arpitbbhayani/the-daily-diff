---
title: Point-Based Counters Excel in Dense Hajj Crowd Counting
source: arxiv
url: http://arxiv.org/abs/2607.07322v1
date: '2026-07-08'
tags:
- apgcc
- arxiv
- benchmark
- catchup
- crowd-counting
- cs.AI
- cs.CV
- dataset-hajjv2
- dense-crowds
- hajj-video
- mean-absolute-error
- model-assumptions
- occlusion
- sam3count
- yolo-world
- zero-shot-counting
arxiv_id: '2607.07322'
categories: cs.CV, cs.AI
why_read: This text explains why existing crowd counting models fail for Hajj footage
  due to violated assumptions and demonstrates that point-based counters perform more
  gracefully in critical, high-density scenarios than detection or segmentation methods.
  Readers will learn about a new benchmark dataset and gain insights into model suitability
  for challenging real-world conditions.
authors:
- Reem AlYabis
- Fares AlTuwaim
- AlJawharh AlOtaibi
- Mohamed Eltahir
---

Deploying AI for real-world scenarios like crowd management often means confronting conditions far from ideal. Existing crowd counting models falter when faced with steep camera angles, extensive occlusion, and thousands of people in a single frame.
HAJJv2-CrowdCount addresses this gap by providing a unique, per-second human-annotated benchmark for extremely dense Hajj video footage. It forces us to rethink which models truly perform when it matters most.
Surprisingly, while SAM3Count achieves the lowest overall Mean Absolute Error (70.4 MAE), its performance, along with YOLO-World's, degrades sharply (MAE > 300) in the densest frames. In contrast, the simpler point-based counter, APGCC, degrades far more gracefully (MAE 114.9) under peak density.
This inversion is critical for real-world deployment where accurate counts are most needed in the densest, most occluded scenes. It highlights that simpler, robust approaches can outperform complex models when assumptions are violated, offering a key insight for computer vision engineers.
