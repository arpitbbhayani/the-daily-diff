---
title: SLORR Enables Efficient Neural Network Compression Via Simple Regularization
source: arxiv
url: http://arxiv.org/abs/2607.08754v1
date: '2026-07-09'
tags:
- arxiv
- catchup
- cs.AI
- cs.LG
- gpu-friendly-approximations
- low-rank-regularization
- model-architecture
- neural-network-compression
- slorr
- training-overhead
arxiv_id: '2607.08754'
categories: cs.LG, cs.AI
why_read: Read this to understand SLORR, a novel, simple, and efficient framework
  for low-rank regularization that significantly improves neural network compressibility
  during training. It demonstrates how to achieve this without complex architecture
  changes or high overheads.
authors:
- "David Gonz\xE1lez-Mart\xEDnez"
- Shiwei Liu
---

Compressing large neural networks without major accuracy hits or adding huge training overhead is a constant battle. SLORR offers a powerful new weapon.

This framework introduces a simple, stateless, and architecture-preserving method for in-training low-rank regularization. It directly regularizes weight matrices using GPU-friendly approximations, providing approximation guarantees.

SLORR-trained compressed LLMs preserve performance substantially better than unregularized models, all while adding less than 1% average training overhead for LLMs at 135M and 560M scales.

Achieve aggressive model compression and efficient LLM deployment without compromise.
