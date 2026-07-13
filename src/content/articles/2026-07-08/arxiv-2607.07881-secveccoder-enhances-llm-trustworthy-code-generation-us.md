---
title: SecVecCoder Enhances LLM Trustworthy Code Generation Using Task Vectors
source: arxiv
url: http://arxiv.org/abs/2607.07881v1
date: '2026-07-08'
tags:
- arxiv
- catchup
- code-generation
- cs.CR
- cs.LG
- cs.SE
- large-language-models
- secure-code-generation
- secveccoder
- task-vectors
- trustworthy-code
arxiv_id: '2607.07881'
categories: cs.SE, cs.CR, cs.LG
why_read: This paper introduces SecVecCoder, a novel method for improving LLM code
  generation by simultaneously ensuring functionality and security through task vectors.
  Readers will learn how this approach significantly enhances trustworthy code output
  while maintaining low decoding latency.
authors:
- Felix Wang
- Anudeep Das
- Mei Nagappan
- N. Asokan
---

Generating functional and secure code with LLMs is a persistent challenge. Traditional approaches often evaluate functionality and security separately or focus on post-generation vulnerability detection.

This paper introduces SecVecCoder, an innovative method using "task vectors" to align LLMs directly for generating trustworthy code. This means the model is tuned during generation to be both functional and secure.

Across six coding LLMs, SecVecCoder improved the rate of trustworthy code completions by 2.1-36.0 percentage points, with some unseen vulnerability types seeing up to a 39.1 percentage point increase.

Crucially, this method requires no method-specific decoding, achieving decoding latency within 0.6% of the base model. This represents a significant leap in efficient, secure code generation.

Integrate security and functionality at the source by optimizing your LLMs with task vectors.
