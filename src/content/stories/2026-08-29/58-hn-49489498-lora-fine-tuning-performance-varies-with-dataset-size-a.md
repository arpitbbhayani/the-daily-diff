---
title: LoRA fine-tuning performance varies with dataset size and hyperparameters
source: hn
url: https://tinker-docs.thinkingmachines.ai/tinker/lora-primer/
date: '2026-08-29'
tags:
- batch-size
- catchup
- fine-tuning
- hn
- hyperparameters
- learning-rate
- lora
- model-capacity
- reinforcement-learning
- supervised-learning
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49489498'
comments: https://news.ycombinator.com/item?id=49489498
why_read: This primer explains LoRA's performance characteristics relative to full
  fine-tuning across various dataset sizes and architectures. Readers will learn about
  its unique learning rate requirements and how batch size affects its efficiency.
authors:
- tosh
---

LoRA is a cornerstone of efficient LLM fine-tuning, yet many engineers struggle with its nuanced performance characteristics and hyperparameter sensitivity. This primer offers a robust guide, differentiating LoRA's efficacy based on dataset size and task type.

Crucially, it reveals that LoRA performs comparably to full fine-tuning on small instruction-tuning datasets and even for reinforcement learning, where low capacity is often sufficient. However, for larger, more complex datasets, LoRA can underperform, a penalty not always mitigated by increasing rank. The learning rate is also surprisingly different, often requiring a 10x higher value than full fine-tuning.

Understanding these trade-offs and specific hyperparameter guidance is essential for anyone building scalable LLM infrastructure. This guide helps you decide when LoRA is your best bet and how to tune it effectively.
