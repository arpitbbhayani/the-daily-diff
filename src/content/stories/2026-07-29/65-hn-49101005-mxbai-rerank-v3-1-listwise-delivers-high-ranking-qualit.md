---
authors:
- MB Mixedbread Team
comments: https://news.ycombinator.com/item?id=49101005
date: '2026-07-29'
depth_score: 7
hn_id: '49101005'
image: /infographics/65-hn-49101005.jpg
interest_score: 8
novelty_score: 8
section: ai
source: hn
tags:
- catchup
- hn
- inference-engine
- latency
- listwise-reranking
- ranking-quality
- reranking
title: mxbai-rerank-v3.1-listwise delivers high ranking quality with reduced latency
url: https://www.mixedbread.com/blog/mxbai-rerank-v3-1-listwise
utility_score: 9
why_read: Read this to understand how mxbai-rerank-v3.1-listwise achieves GPT-5.6-sol-level
  ranking quality at significantly lower latency. You will learn about its performance
  improvements over previous versions and leading LLMs for complex search tasks.
---

Reranking is a critical bottleneck in many RAG systems, often making or breaking the user experience. Mixedbread AI has just released mxbai-rerank-v3.1-listwise, a new model that achieves ranking quality comparable to large models like gpt-5.6-sol.

The real game changer? This reranker delivers its performance with a whopping 61 times lower latency compared to GPT-5.6, and is 25-54 percent faster than its previous version. This massive speedup stems from rewriting the underlying inference engine, allowing it to process entire candidate sets listwise, which improves reasoning, while still being extremely fast.

This is not just an incremental improvement; it is a practical leap forward for engineers building production-grade RAG applications, where optimizing both relevance and speed is paramount. Imagine delivering higher-quality results instantly without ballooning your inference costs. This model empowers you to achieve just that.