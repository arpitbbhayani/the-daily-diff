---
title: ArXiv Paper
source: arxiv
url: https://arxiv.org/abs/49346370
date: '2026-08-18'
tags:
- arxiv
- catchup
section: ai
interest_score: 9
depth_score: 9
utility_score: 8
novelty_score: 9
arxiv_id: '49346370'
categories: ''
why_read: You will gain a deep understanding of a novel technique to verify the provenance
  of open-weight language models, crucial for trust and debugging in LLM infrastructure
  and applied AI.
---

How do you trust the lineage of an open-weight LLM that has been fine-tuned, pruned, or merged? "Training Leaves Traces" introduces "Centered Residual Signatures," a groundbreaking data-free, white-box method for verifying model ancestry.

This technique delves deep into the model's residual blocks, removing shared components and comparing checkpoint-specific structures. It achieves an AUROC of 1.0 on benchmarks like GPT-2, accurately distinguishing descendants from independent models.

Crucially, it is robust against function-preserving "laundering" attempts and runs 76 times faster than existing baselines. For anyone building or deploying with open-source LLMs, understanding this method is vital for ensuring provenance and trust in your AI infrastructure.
