---
title: Intrinsic Green's Learning Recovers Manifold Dimension for Classification
source: arxiv
url: http://arxiv.org/abs/2607.07034v1
date: '2026-07-08'
tags:
- arxiv
- catchup
- classification
- cs.AI
- cs.LG
- green's-kernel
- intrinsic-dimension-recovery
- intrinsic-greens-learning
- low-rank-tensors
- manifold-modeling
- pde-solution
arxiv_id: '2607.07034'
categories: cs.LG, cs.AI
why_read: This paper introduces a novel framework, Intrinsic Green's Learning (IGL),
  for modeling functions on manifolds. Readers will learn how IGL uses PDE solutions
  and a two-stage algorithm to efficiently learn manifold functions, automatically
  recovering the intrinsic dimension for tasks like classification.
authors:
- Alexandre Quemy
---

How do you perform supervised learning on data residing on complex, high-dimensional manifolds without losing efficiency? Intrinsic Green's Learning (IGL) offers an intriguing answer. This framework models target functions as solutions to linear PDEs, learning a source term and integrating it against a Green's kernel. The ingenious part is how it collapses high-dimensional integrals into low-cost, one-dimensional operations. IGL has shown promising results on synthetic data and MNIST, even automatically discovering the intrinsic dimension of the manifold. This is a powerful, novel approach for engineers tackling complex data geometries.
