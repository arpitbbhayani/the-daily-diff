---
title: Returned Gradient Nullifies Decoys in Split-LLM Training, Causing Privacy Failure
source: hn
url: https://arxiv.org/abs/2609.04382
date: '2026-09-07'
tags:
- catchup
- decoys
- gradient-leakage
- hn
- privacy-failure
- side-channel-attack
- split-llm-training
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 9
hn_id: '49594815'
comments: https://news.ycombinator.com/item?id=49594815
why_read: Read this to understand a critical privacy vulnerability in split-LLM training
  systems. You will learn how returned gradients can bypass decoy mechanisms, leading
  to data leakage, and potential mitigation strategies.
authors:
- Georgios Politis
- Evangelos Pappas
---

A critical privacy vulnerability has been discovered in split-LLM training: the returned gradient itself can leak sensitive information, even when decoys are used to protect activations. This ArXiv paper details how an attacker can precisely identify real rows in a mixed dataset, nullifying common privacy defenses.

The issue stems from the fact that decoys often have zero gradients, creating an observable pattern that reveals actual data points. This leakage mechanism bypassed existing privacy evaluations, highlighting a subtle but profound flaw in how we design and test distributed AI systems.

Understanding this attack and its proposed mitigations

gradient clipping and noising

is essential for any engineer working on privacy-preserving LLM infrastructure. It redefines what "private" means in distributed training.
