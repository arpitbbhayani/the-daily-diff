---
title: Embedding geometry and Riemannian pooling improve sentence classification signal
source: arxiv
url: http://arxiv.org/abs/2607.07047v1
date: '2026-07-08'
tags:
- arxiv
- catchup
- cs.AI
- cs.CL
- frechet-mean
- geometric-aggregation
- language-model-embeddings
- riemannian-geometry
- riemannian-mean-pooling
- sentence-classification
- spd-manifold
arxiv_id: '2607.07047'
categories: cs.CL, cs.AI
why_read: This text introduces Riemannian Mean Pooling, showing how leveraging the
  geometric structure of language model embeddings can significantly improve sentence-level
  classification. You will learn that the benefits largely stem from geometric aggregation,
  rather than solely from learned manifold structures.
authors:
- Szczepan Konior
- Alexandre Quemy
- "Przemys\u0142aw Klocek"
- "Gr\xE9goire Cattan"
- "Bart\u0142omiej Sobieski"
---

Understanding the underlying geometry of LLM embeddings is crucial for interpretability and safety. This paper delves into Riemannian geometry to understand how classification signals manifest within these embedding spaces.

It introduces Riemannian Mean Pooling (RMP), a method that extracts per-token pullback metrics and aggregates them using the Fréchet mean on the symmetric positive definite manifold. RMP consistently outperforms traditional Euclidean mean pooling across challenging linguistic datasets.

Crucially, ablations reveal that even a randomly initialized encoder combined with Fréchet aggregation beats Euclidean pooling, localizing a significant portion of the gain to the geometric aggregation itself. This indicates that the choice of aggregation method, leveraging intrinsic geometric properties, can inherently improve representation quality.

This work sheds light on how a deeper mathematical understanding of embedding spaces can unlock more robust and interpretable language model behaviors.
