---
authors:
- marcobambini
comments: https://news.ycombinator.com/item?id=49098395
date: '2026-07-29'
depth_score: 9
hn_id: '49098395'
image: /infographics/03-github-49098395.jpg
interest_score: 9
novelty_score: 8
section: ai
source: github
tags:
- catchup
- github
- inference-engine
- large-language-model
- nvme
- out-of-core
- weight-streaming
title: Run 2.78-trillion-parameter Kimi K3 model beyond available RAM
url: https://github.com/sqliteai/waste
utility_score: 9
why_read: This describes an embeddable C inference engine, WASTE, that enables running
  trillion-parameter language models on consumer hardware by streaming weights from
  NVMe storage. Readers will learn about novel out-of-core execution and expert caching
  techniques for large AI models.
---

Running multi-trillion-parameter LLMs locally on consumer hardware often feels like a distant dream, but the WASTE (Weight-Aware Streaming Tensor Engine) project is making it a reality. This dependency-free C inference engine enables the Kimi K3, a 2.78-trillion-parameter model, to operate on a 64GB MacBook Pro by intelligently streaming activated weights from NVMe.

The core innovation lies in keeping the model trunk in memory while dynamically streaming "experts" (model components) from disk, using the remaining RAM as a bounded cache. This bypasses the typical RAM constraints that prevent massive models from running locally, achieving a respectable 0.5 tokens per second on consumer-grade machines.

This project offers a deep dive into practical LLM infrastructure and system design, showcasing how innovative memory and I/O management can democratize access to powerful AI. It is an excellent example of applied system design solving real-world AI deployment challenges.