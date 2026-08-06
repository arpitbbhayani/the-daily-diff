---
title: Mixture-of-Kittens megakernel boosts MoE training speed
source: hn
url: https://twitter.com/cursor_ai/status/2084670806613737919
date: '2026-08-04'
tags:
- ai-research
- catchup
- gpu-training
- hn
- megakernel
- mixture-of-experts
- open-source
- performance-optimization
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49173524'
comments: https://news.ycombinator.com/item?id=49173524
why_read: This introduces a new open-source megakernel, Mixture-of-Kittens, which
  dramatically improves the speed and efficiency of Mixture-of-Experts model training,
  making advanced AI research more accessible.
authors:
- Cursor AI
---

Training Mixture-of-Experts (MoE) models just got a significant boost. Cursor AI open-sourced 'Mixture-of-Kittens' (MoK), a megakernel for NVL72s that fuses all MoE communication and computation into a single, fully deterministic kernel.

This optimization is not incremental; it delivers up to 2.37x faster performance compared to leading public baselines. In production, it has already increased end-to-end training throughput by 1.41x, directly impacting the efficiency of large-scale LLM training infrastructure.

This is a major step forward for applied AI, lowering the barrier for labs to train complex models more efficiently and pushing the boundaries of what is possible in LLM development.
