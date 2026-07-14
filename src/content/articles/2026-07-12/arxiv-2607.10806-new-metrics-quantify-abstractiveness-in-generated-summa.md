---
title: New Metrics Quantify Abstractiveness In Generated Summaries
source: arxiv
url: http://arxiv.org/abs/2607.10806v1
date: '2026-07-12'
tags:
- abstraction-ratio
- abstractive-summarization
- abstractiveness
- arxiv
- catchup
- cs.AI
- cs.CL
- extractive-summarization
- hallucination
- reference-abstraction
- summarization-metrics
- summary-abstraction
arxiv_id: '2607.10806'
categories: cs.CL, cs.AI
why_read: This introduces novel heuristic metrics (Reference Abstraction, Summary
  Abstraction, Abstraction Ratio) for quantifying abstractiveness in generated summaries.
  It demonstrates how these metrics provide a nuanced evaluation, distinguishing model
  types and identifying summaries prone to hallucination.
authors:
- Praveenkumar Katwe
- Rakesh Chandra Balabantaray
- Kali Prasad Vittala
---

Evaluating LLM-generated summaries goes beyond surface-level metrics like ROUGE, and new tools are emerging to assess true abstractiveness. This paper introduces Reference Abstraction (RA), Summary Abstraction (SA), and Abstraction Ratio (AR).

These metrics are principled heuristics that measure how much a summary deviates from simply copying the source text. They are dimensionally consistent, bounded, and show non-linear sensitivity to the extractive-abstractive boundary.

On datasets like XSUM, these metrics successfully differentiate extractive models (SA around 0.12-0.26) from abstractive models (SA around 0.96-1.77). Crucially, the Abstraction Ratio can identify summaries that might be hallucinating and need manual review.

If you work with text summarization or RAG systems, incorporating these refined metrics can significantly improve how you evaluate model quality and detect problematic outputs. It is about pushing beyond basic token overlap.

Measuring true abstractiveness reveals the quality of your summarization.
