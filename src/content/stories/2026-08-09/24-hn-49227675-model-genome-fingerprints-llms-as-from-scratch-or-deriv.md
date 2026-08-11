---
title: Model Genome fingerprints LLMs as from-scratch or derived
source: hn
url: https://huggingface.co/blog/mayafree/model-dna
date: '2026-08-09'
tags:
- architecture-analysis
- catchup
- embedding-comparison
- foundation-models
- hn
- llm-verification
- model-fingerprinting
- tokenizer-overlap
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49227675'
comments: https://news.ycombinator.com/item?id=49227675
why_read: This article details a reproducible pipeline to fingerprint large language
  models, allowing verification of claims about their training origin (from-scratch
  vs. derived). Readers will learn the specific methods, including architecture, tokenizer,
  and weights analysis, and understand key challenges encountered.
authors:
- Proto_AGI
- mayafree
---

Verifying if an LLM was truly "from scratch" or derived from an existing base model is a crucial challenge for transparency in AI. This article presents a robust, reproducible pipeline to fingerprint models using only public artifacts. 

The methodology leverages architectural configurations (config.json), tokenizer vocabulary overlap, and embedding similarity using Canonical Correlation Analysis (CKA). It delves into specific pitfalls, like the inefficacy of row-wise embedding cosine due to rotational invariance, which is a key technical detail. 

This is not just academic; it is a practical tool for the LLM infrastructure community. Understanding these techniques empowers engineers to better evaluate model claims and contributes to a more transparent AI ecosystem.
