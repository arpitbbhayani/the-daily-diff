---
title: ArXiv Paper
source: arxiv
url: https://arxiv.org/abs/49487342
date: '2026-08-29'
tags:
- arxiv
- catchup
section: ai
interest_score: 9
depth_score: 9
utility_score: 9
novelty_score: 8
arxiv_id: '49487342'
categories: ''
why_read: You will learn about critical semantic integrity failures in RAG and LLM
  ingestion pipelines involving Office documents, understanding why LLMs might "see"
  different evidence than displayed and how this impacts applied AI reliability.
---

For any senior engineer building RAG or LLM ingestion pipelines, there is a silent killer lurking in your Office documents: 'evidence divergence.' This paper uncovers a critical flaw where LLMs and human users perceive different content from the *same* OOXML file.

Imagine feeding a Word or Excel document to your LLM, assuming it processes what you see on screen. This research demonstrates that due to subtle complexities in the OOXML specification, 'evidence forks' exist where extraction tools and LLMs yield a 'plural ground truth'. An LLM might hallucinate or fail tasks because it never saw the 'true' content, or conversely, act on data hidden from the user.

The study systematically identified 21 such divergence mechanisms and found that common LLM APIs returned the 'trap' fact in 48-76% of trials. This is not a theoretical edge case; it is a fundamental challenge to the reliability of applied AI. Understanding these divergences is crucial for building robust and trustworthy document-based AI systems.
