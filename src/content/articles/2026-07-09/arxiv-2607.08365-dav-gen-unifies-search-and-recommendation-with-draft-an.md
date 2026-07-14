---
title: DaV-Gen Unifies Search and Recommendation with Draft-and-Verify Mechanism
source: arxiv
url: http://arxiv.org/abs/2607.08365v1
date: '2026-07-09'
tags:
- arxiv
- catchup
- composite-loss
- cs.IR
- dav-gen
- draft-and-verify
- generative-models
- information-retrieval
- multi-stage-cascade-architectures
- search-recommendation
- speculative-decoding
arxiv_id: '2607.08365'
categories: cs.IR
why_read: This text introduces DaV-Gen, a novel "Draft-and-Verify" mechanism that
  unifies search and recommendation systems. Readers will learn how it overcomes the
  inconsistencies of multi-stage architectures and the performance bottlenecks of
  end-to-end generative models by combining efficient drafting with precise verification.
authors:
- Meng Zhao
- Chunmei Liu
- Qinyong Wang
---

Traditional search and recommendation systems use multi-stage cascade architectures, balancing effectiveness and efficiency. But optimization objectives often clash, amplifying early-stage errors.

DaV-Gen offers an end-to-end generative retrieval framework with a novel "Draft-and-Verify" mechanism. Inspired by speculative decoding, it redefines the generation task into two synergistic operations within a single model.

During training, the model is optimized for both efficient candidate drafting (using contrastive loss for embedding space) and fine-grained verification (with a fusion loss combining likelihood and vector similarity).

This unified architecture achieves both the speed of sparse drafting and the precision of advanced generative models, a powerful approach for LLM infrastructure.
