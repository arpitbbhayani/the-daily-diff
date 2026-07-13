---
title: Continuous-Query LMLM Outperforms Others with External Knowledge and Flexible
  Queries
source: arxiv
url: http://arxiv.org/abs/2607.07707v1
date: '2026-07-08'
tags:
- arxiv
- catchup
- continuous-query-lmlm
- cs.AI
- cs.CL
- cs.LG
- externalized-knowledge
- factual-precision
- knowledge-base
- limited-memory-language-models
- vector-queries
arxiv_id: '2607.07707'
categories: cs.CL, cs.AI, cs.LG
why_read: This paper introduces CO-LMLM, a novel language model architecture that
  externalizes factual knowledge using continuous queries. You will learn how it significantly
  improves perplexity and factual precision compared to prior LMLMs and vanilla LLMs.
authors:
- Yair Feldman
- Linxi Zhao
- Nathan Godey
- Dongyoung Go
- Yilun Hua
- Kilian Q. Weinberger
- Jennifer J. Sun
- Yoav Artzi
---

The quest to make LLMs more factual and controllable often leads to the challenge of managing their vast, internalized knowledge. What if models could externalize this factual knowledge to a continuous-query knowledge base and fetch it only when needed?

This paper introduces Co-LMLM, a Limited Memory Language Model that pairs continuous keys with textual knowledge values, a significant departure from prior reliance on relational KBs. This allows for flexible vector queries at minimal cost.

Co-LMLM achieved lower perplexity than models pretrained on 40x more data at 360M scale. It also demonstrated SimpleQA-verified performance comparable to GPT-4o-mini and higher than Claude Sonnet 4.5.

For software engineers working on RAG systems, LLM infrastructure, or applied AI, Co-LMLM offers a powerful paradigm shift. It provides advantages like direct knowledge control and improved factual precision, making LLMs more reliable and adaptable.
