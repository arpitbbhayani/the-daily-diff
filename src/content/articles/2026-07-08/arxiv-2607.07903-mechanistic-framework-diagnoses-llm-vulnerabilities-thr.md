---
title: Mechanistic Framework Diagnoses LLM Vulnerabilities Through Internal Computation
  Graphs
source: arxiv
url: http://arxiv.org/abs/2607.07903v1
date: '2026-07-08'
tags:
- adversarial-prompts
- arxiv
- catchup
- causal-diagnosis
- computation-graphs
- cs.AI
- cs.CR
- internal-reasoning
- jailbreak-attacks
- large-language-models
- llm-vulnerabilities
- model-robustness
arxiv_id: '2607.07903'
categories: cs.CR, cs.AI
why_read: This paper presents a mechanistic framework for diagnosing large language
  model vulnerabilities using internal computation graphs. It explains how adversarial
  attacks systematically alter LLM internal reasoning, offering a pathway to causally
  diagnose and improve model robustness.
authors:
- Anupam Wagle
- Ifrat Ikhtear Uddin
- Chaowei Zhang
- Longwei Wang
---

LLMs are incredibly powerful, yet surprisingly vulnerable to jailbreak attacks. Understanding *why* they break has been largely limited to input-output observation. This paper changes that.

It introduces a mechanistic framework using paired internal computation graphs to visualize how adversarial prompts transform an LLM's internal reasoning. The approach reveals specific mechanisms, such as the suppression of safety-relevant components and the emergence of attack-specific features.

By performing causal interventions on identified vulnerability motifs, the authors move from descriptive attribution to true causal diagnosis. Experiments across multiple open-source LLMs show strong correlations between structural deviations and unsafe behaviors.

This is a critical advancement for anyone serious about building robust and secure LLM infrastructure. Truly understanding the 'how' behind jailbreaks is the first step towards reliably mitigating them.
