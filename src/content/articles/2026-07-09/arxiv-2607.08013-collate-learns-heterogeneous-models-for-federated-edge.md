---
title: Collate Learns Heterogeneous Models for Federated Edge Latency
source: arxiv
url: http://arxiv.org/abs/2607.08013v1
date: '2026-07-09'
tags:
- arxiv
- catchup
- collate-framework
- cs.DC
- cs.LG
- device-heterogeneity
- dynamic-zeroizing-recovering
- edge-systems
- federated-learning
- heterogeneous-models
- latency-constraints
- proto-corrected-aggregation
arxiv_id: '2607.08013'
categories: cs.LG, cs.DC
why_read: This paper introduces Collate, a framework designed to tackle model inference
  latency and device heterogeneity in federated learning for edge systems. It details
  novel methods like dynamic zeroizing-recovering and proto-corrected aggregation
  that enable collaborative training of heterogeneous models with improved accuracy
  and efficiency.
authors:
- Shuo Huai
- Di Liu
- Hao Kong
- Xiangzhong Luo
- Weichen Liu
- Ravi Subramaniam
- Christian Makaya
- Qian Lin
---

Deploying Federated Learning in real-time edge systems faces a critical challenge: device heterogeneity and strict latency constraints during inference. Most FL optimizations ignore inference speed.

Collate is a novel training framework that collaboratively learns *heterogeneous* models. It uses a dynamic zeroizing-recovering method to adjust local model architectures to meet specific latency constraints while maintaining high accuracy.

A proto-corrected federated aggregation scheme then aggregates these diverse models. Experiments show Collate improves accuracy by 1.96% for extended models and 3.09% for shrunk models, with almost no extra training overhead.

Solve the heterogeneous latency problem in federated learning without sacrificing accuracy or training efficiency.
