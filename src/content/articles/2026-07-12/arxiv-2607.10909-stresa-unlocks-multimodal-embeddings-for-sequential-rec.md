---
title: Stresa Unlocks Multimodal Embeddings for Sequential Recommendation
source: arxiv
url: http://arxiv.org/abs/2607.10909v1
date: '2026-07-12'
tags:
- arxiv
- catchup
- cs.IR
- domain-misalignment
- multimodal-embeddings
- sequential-recommendation
- side-adaptation
- stresa
arxiv_id: '2607.10909'
categories: cs.IR
why_read: This paper introduces Stresa, a novel side-adaptation framework designed
  to address domain misalignment issues when applying large pretrained multimodal
  embeddings to sequential recommendation tasks. Readers will learn how Stresa's stream-aware
  fusion and selective residual updates significantly improve performance over existing
  adaptation methods.
authors:
- Junchen Fu
- Kaiwen Zheng
- Ioannis Arapakis
- Wenhao Deng
- Xin Xin
- Joemon M. Jose
- Xuri Ge
---

Leveraging massive pre-trained multimodal embedding models like Qwen3-VL for sequential recommendation is promising but challenging due to domain misalignment and adaptation issues. Existing side adapters often degrade with depth, leading to dropped layers and lost information.

This paper proposes Stresa, a stream-aware side-adaptation framework designed to unlock the full potential of these large models. Stresa introduces Stream-aware Hidden-Adapter Fusion (SHAF) to preserve historical side memory and Residual Stream Adapter (ReSA) for selective residual updates across layers.

Stresa consistently outperforms standard side adapters and state-of-the-art baselines across multiple backbone models and public datasets. This is a critical development for efficiently deploying large AI models in applied AI settings and optimizing LLM infrastructure for domain-specific tasks.
