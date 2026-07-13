---
title: Multi-LLM Arena Validates Synthetic Labels for Attribute Extraction
source: arxiv
url: http://arxiv.org/abs/2607.07469v1
date: '2026-07-08'
tags:
- arxiv
- attribute-extraction
- catchup
- cs.AI
- cs.CL
- llm-fine-tuning
- majority-voting
- multi-llm-arena
- quality-control
- synthetic-labels
arxiv_id: '2607.07469'
categories: cs.CL, cs.AI
why_read: This paper describes SynthAVE, a framework for cost-effectively validating
  synthetic labels for LLM-based e-commerce attribute extraction. Readers will learn
  how a multi-LLM arena with majority voting can achieve human-level quality control
  at industrial scale.
authors:
- Andrea Scarinci
- Virginia Negri
- Brayan Impata
- Suleiman Khan
- Victor Martinez
- Marcello Federico
---

Fine-tuning Large Language Models for tasks like e-commerce attribute extraction demands millions of labeled data points across thousands of product types and languages. Human labeling at this scale is simply too costly.

SynthAVE tackles this by proposing a scalable synthetic labeling approach. The real innovation lies in its quality control: a multi-LLM arena framework for validation, moving beyond individual LLM judges.

This framework independently evaluates synthetic labels using 21 judge configurations across 7 model families and 3 prompts, with final labels determined by majority voting. The aggregate result is remarkably reliable.

This ensemble method achieves a Cohen's kappa of 0.92 with human experts, demonstrating 95.2% agreement. This shows diverse models, even with individual discrepancies, can collectively produce highly reliable predictions.

Scaling LLM deployments means finding smart, cost-effective ways to manage data quality, and synthetic validation offers a powerful path forward.
