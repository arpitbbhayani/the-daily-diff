---
title: Cache-to-Cache enables direct semantic communication between LLMs
source: hn
url: https://arxiv.org/abs/2510.03215
date: '2026-09-18'
tags:
- catchup
- hn
- inter-model-communication
- kv-cache
- large-language-models
- multi-llm-systems
- neural-networks
- semantic-communication
section: ai
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 8
hn_id: '49758615'
comments: https://news.ycombinator.com/item?id=49758615
why_read: This paper introduces Cache-to-Cache (C2C), a novel paradigm for direct
  semantic communication between large language models. It explains how C2C uses KV-cache
  semantics and neural networks to improve multi-LLM system performance over text
  communication.
authors:
- Tianyu Fu
- Zihan Min
- Hanling Zhang
- Jichao Yan
- Guohao Dai
- Wanli Ouyang
- Yu Wang
---

Forget text-only communication between your large language models. A new arXiv paper introduces "Cache-to-Cache" (C2C), a paradigm where LLMs communicate directly through their KV-caches. This is a fundamental shift from current multi-LLM designs.

The core idea is to project and fuse the source model's KV-cache with the target model's, allowing for direct semantic transfer without the overhead and information loss of intermediate text generation. This leverages the deep internal representations of models, which is a powerful concept.

Oracle experiments already show enriching KV-cache semantics improves response quality without increasing cache size. The C2C approach achieves 6.4-14.2% higher accuracy than individual models and outperforms text communication by 3.1-5.4%. This is a significant leap for multi-agent systems and LLM infrastructure efficiency.

This could reshape how we build cooperative AI.
