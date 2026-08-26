---
title: Renting 96 GB GPU boosts uncensored Qwen3.8 token speed
source: hn
url: https://aseemshrey.com/blog/running-qwen3-8-27b-uncensored/
date: '2026-08-24'
tags:
- catchup
- fp8
- gpu-rental
- hn
- llm-orchestration
- qwen3.8
- token-speed
- uncensored-llm
- vllm
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49415350'
comments: https://news.ycombinator.com/item?id=49415350
why_read: This article details an experiment achieving high token speeds for uncensored
  LLMs on rented GPUs, highlighting the benefits for autonomous agentic workflows.
  Readers will learn practical benchmarks and setup considerations for optimizing
  LLM inference with techniques like FP8 quantization and DFlash2.
authors:
- Aseem Shrey
---

You can triple your LLM inference speed and cut costs for AI agents. One engineer rented a 96 GB GPU and took Qwen3.8-27B from 44 to 125 tokens/second for under $1.50.

The secret sauce involved vLLM, FP8 quantization, and DFlash2, allowing a massive 262K context window. This setup enabled the model to act as an autonomous orchestrator across 518 agent calls, processing 60.8 million logical input tokens with zero 'moral negotiations' often seen with censored models.

This is a concrete blueprint for significantly optimizing LLM serving infrastructure and building highly efficient, self-hosted AI agents. These benchmarks and cost details are invaluable for production deployments.
