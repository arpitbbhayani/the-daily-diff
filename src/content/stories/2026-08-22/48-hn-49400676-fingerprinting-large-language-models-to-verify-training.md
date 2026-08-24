---
title: Fingerprinting large language models to verify training origin
source: hn
url: https://huggingface.co/blog/mayafree/model-dna
date: '2026-08-22'
tags:
- architecture
- catchup
- embeddings
- hn
- llm
- model-fingerprinting
- tokenizer
- training-verification
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49400676'
comments: https://news.ycombinator.com/item?id=49400676
why_read: This article presents a reproducible pipeline to fingerprint large language
  models, allowing verification of claims about their 'from-scratch' development versus
  derivation. Readers will learn the specific methods and their limitations for model
  origin verification.
authors:
- Proto_AGI
- mayafree
---

How do you really know if an LLM was trained from scratch or fine-tuned on an existing base model, especially when vendors are not explicit? This article provides a robust, reproducible pipeline to fingerprint LLMs using only public artifacts.

The method analyzes three axes: architecture from config.json, tokenizer vocabulary overlap, and embedding similarity using CKA. It dives into critical traps like rotational invariance that can mislead cosine similarity, explaining why a naive comparison is insufficient.

For anyone in LLM infrastructure or applied AI, understanding model provenance is crucial. This offers a practical, deep dive into objectively verifying claims, moving beyond marketing to verifiable technical analysis.
