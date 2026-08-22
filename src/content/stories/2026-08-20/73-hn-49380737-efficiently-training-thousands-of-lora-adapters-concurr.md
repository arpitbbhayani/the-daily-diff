---
title: Efficiently Training Thousands of LoRA Adapters Concurrently
source: hn
url: https://osmosis.ai/blogs/training-thousands-of-lora-adapters-at-once
date: '2026-08-20'
tags:
- catchup
- hn
- lora
- model sharing
- multi-adapter training
- rl
- vram optimization
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49380737'
comments: https://news.ycombinator.com/item?id=49380737
why_read: This explains how to train thousands of LoRA adapters concurrently and asynchronously,
  detailing a method that shares a single base model to optimize VRAM and scale RL
  experiments.
authors:
- jxmorris12
---

Scaling LoRA adapter training for large language models can quickly become a VRAM nightmare, especially when you need to fine-tune thousands of policies concurrently. Traditional approaches replicate the entire base model for each adapter, leading to substantial resource waste.

This article presents a breakthrough: an extension to Miles and Megatron-Bridge that allows thousands of LoRA adapters to be trained simultaneously and asynchronously. The core innovation involves loading multiple adapters as a single matrix, sharing the base model efficiently.

This architectural change slashed VRAM usage and enabled 1,536 LoRA adapter instances to run concurrently with step times under three minutes during stress tests on a Qwen3.6-35B-A3B model. It is a game-changer for anyone managing LLM fine-tuning pipelines or exploring large-scale reinforcement learning with LLMs.

Learn how to scale your LLM experiments without scaling your hardware exponentially.
