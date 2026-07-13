---
title: Data-efficient interpretable obstacle avoidance without sim-to-real transfer
source: arxiv
url: http://arxiv.org/abs/2607.07885v1
date: '2026-07-08'
tags:
- arxiv
- catchup
- cs.AI
- cs.CV
- cs.RO
- data-efficiency
- dynamic-obstacle-avoidance
- eess.IV
- feature-tracking
- monocular-depth-estimation
- sim-to-real-transfer-avoidance
- time-to-collision
- vision-based-robotics
arxiv_id: '2607.07885'
categories: cs.RO, cs.AI, cs.CV, eess.IV
why_read: Read this to understand a data-efficient and interpretable vision-based
  method for dynamic obstacle avoidance in autonomous robots. It details how the approach
  avoids sim-to-real transfer by leveraging pre-trained monocular depth estimation
  and keypoint tracking on real-world data.
authors:
- Erik Jagnandan
- Mulugeta Haile
- Gregory Barber
- Pratik Chaudhari
---

Autonomous robots navigating unstructured environments often struggle with dynamic obstacles, especially without vast training data or perfect simulations. This paper introduces a highly data-efficient and interpretable solution.

The method uses pretrained monocular depth estimation models and extends feature tracking to compute time-to-collision (TTC) for obstacles. It works entirely on real-world data, eliminating the complex sim-to-real transfer problem.

On the M3ED dataset, it correctly identifies evasive motion direction in 84% of true positive detections and finds critical TTC events for 20 out of 22 unique obstacles. Crucially, it achieves this without *any* model training, requiring only 74 seconds of data for hyperparameter tuning.

This is a significant win for practical, scalable robot deployments, showcasing how clever system design with existing AI models can solve hard problems with minimal data.
