---
title: MemDecay Leverages Semantic Prompt Structure for Effective KV-Cache Management
source: arxiv
url: http://arxiv.org/abs/2607.10582v1
date: '2026-07-12'
tags:
- arxiv
- catchup
- cs.AI
- cs.LG
- eviction-policy
- kv-cache
- llm-agents
- memdecay
- semantic-prompt-structure
arxiv_id: '2607.10582'
categories: cs.LG, cs.AI
why_read: This paper introduces MemDecay, a region-aware KV-cache eviction policy,
  demonstrating how leveraging semantic prompt structure effectively addresses memory
  bottlenecks in LLM agents. You will learn that different context regions have vastly
  different attention lifetimes, making region-specific management crucial for performance.
authors:
- Venkatesha Matam
- Keon Kim
---

The KV cache is a huge memory bottleneck for long-context LLM agents. Current eviction policies often treat all tokens the same, but that misses crucial semantic context.

Enter MemDecay, a game-changing, training-free, region-aware KV-cache eviction policy. It intelligently assigns tokens region-specific base priorities and decay rates, refreshing scores when tokens receive attention. This allows critical regions to be "pinned" in memory.

Experiments on Qwen2.5-1.5B and 3B models show dramatic results. System-token half-lives are an order of magnitude longer (148-189 decoding steps) compared to scratchpad tokens (14-16 steps). Pinning preserves system-region facts at full accuracy, while baseline methods retain less than half.

This work establishes semantic prompt structure as a robust signal for optimizing KV-cache management, leading to significant memory and efficiency gains for real-world LLM agent deployments.
