---
title: MRUF reliably fuses multimodal sentiment data despite quality variations
source: arxiv
url: http://arxiv.org/abs/2607.10599v1
date: '2026-07-12'
tags:
- arxiv
- catchup
- cs.AI
- eess.SP
- inverse-variance-reweighting
- modality-fusion
- modality-routing
- multimodal-sentiment-analysis
- reliability-aware-fusion
- uncertainty-aware-calibration
arxiv_id: '2607.10599'
categories: cs.AI, eess.SP
why_read: This paper introduces MRUF, a novel method for multimodal sentiment analysis.
  It provides improved performance by addressing the challenge of varying modality
  quality through reliability-aware fusion and uncertainty-aware calibration.
authors:
- Haoran Ma
- Yinfeng Yu
- Liejun Wang
---

Multimodal AI systems face a fundamental challenge: what happens when one modality (for example, visual cues) is unreliable due to noise or occlusion? Conventional fusion methods often over-trust unreliable inputs, leading to poor performance.

This paper introduces MRUF, a reliability-aware fusion approach that brings "uncertainty-aware calibration" to multimodal sentiment analysis. It leverages multi-granularity routing to intelligently combine language, visual, and acoustic cues.

MRUF summarizes sentiment-relevant representations, performs subspace- and modality-level routing, and crucially, estimates utterance-level modality importance. It then predicts modality-wise uncertainty and refines fusion weights using inverse-variance reweighting.

This ensures that modalities with higher predicted uncertainty receive lower fusion weights, leading to consistent improvements over strong baselines on CMU-MOSI and CMU-MOSEI datasets. This work offers a powerful blueprint for building more resilient multimodal AI.
