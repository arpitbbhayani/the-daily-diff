---
title: Frontier LLMs encode facts but struggle with recall
source: hn
url: https://research.google/blog/empty-shelves-or-lost-keys-recall-is-the-bottleneck-for-parametric-factuality/
date: '2026-08-13'
tags:
- catchup
- encoding-failures
- hn
- knowledge-profiling
- llms
- parametric-factuality
- recall-failures
- wikiprofile
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49288011'
comments: https://news.ycombinator.com/item?id=49288011
why_read: This paper introduces a knowledge profiling framework to analyze factual
  errors in frontier LLMs. Readers will learn that current LLMs encode most facts
  but struggle with recall, offering new directions for improving their reliability.
authors:
- Nitay Calderon
- Gal Yona
---

Are LLMs forgetting facts, or did they never learn them to begin with? New research from Google indicates that many factual errors in frontier LLMs stem from recall failures, not encoding failures. The knowledge is stored, but the model cannot access it.

This is a critical distinction for anyone building LLM-powered applications. If the problem is recall, scaling model size or expanding training data might not be the most effective solution. Instead, focus should shift to post-training and inference-time methods that aid in knowledge retrieval.

This insight fundamentally changes how we diagnose and address LLM factuality issues, pushing engineers to reconsider their RAG, fine-tuning, and prompting strategies for more reliable AI systems.
