---
title: Achieving deterministic outputs from frontier-scale language models with signed
  receipts
source: hn
url: https://zenodo.org/records/19882078
date: '2026-08-25'
tags:
- ai-verification
- catchup
- deterministic-inference
- hn
- language-models
- model-portability
- signed-receipts
section: ai
interest_score: 8
depth_score: 9
utility_score: 8
novelty_score: 8
hn_id: '49440102'
comments: https://news.ycombinator.com/item?id=49440102
why_read: This text describes a protocol for achieving byte-identical outputs from
  frontier-scale language model inference, bound to a portable, offline-verifiable
  signed receipt. Readers will learn how this system ensures output integrity, cross-platform
  compatibility, and provides a probabilistic verification mechanism for AI fabrication
  soundness.
authors:
- Aishwary Singh
---

Achieving truly deterministic LLM inference across diverse hardware like NVIDIA H100 and AMD MI300X is a monumental challenge, yet this protocol delivers byte-identical outputs for 72B models. This is not just a theoretical feat; it is crucial for building reliable, auditable AI systems in production environments.

The system binds each output to a portable, offline-verifiable signed receipt using a canonical CBOR schema and Ed25519 signatures. This means you can verify the provenance and integrity of an LLM's output independently, a huge step forward for trust in AI.

For senior engineers working on LLM infrastructure, this changes the game. It provides a blueprint for ensuring reproducibility and accountability, solving a significant hurdle in deploying frontier-scale models with confidence.
