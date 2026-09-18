---
title: Swift-Qwen3.8-27B achieves faster reasoning with fewer thinking tokens
source: hn
url: https://huggingface.co/ukisai/Swift-Qwen3.8-27b
date: '2026-09-16'
tags:
- catchup
- fine-tuning
- hn
- llm-performance
- model-evaluation
- qwen3.8-27b
- reasoning-efficiency
- swift-qwen3.8-27b
- thinking-tokens
section: ai
interest_score: 8
depth_score: 7
utility_score: 8
novelty_score: 8
hn_id: '49727511'
comments: https://news.ycombinator.com/item?id=49727511
why_read: This document introduces Swift-Qwen3.8-27B, a derivative model that significantly
  reduces the number of 'thinking tokens' required for reasoning while maintaining
  near-identical performance. Readers will learn about a fine-tuning approach to improve
  LLM speed and efficiency.
authors:
- kisjovan
---

Optimizing LLM inference usually means trade-offs, but a new fine-tuning approach for Qwen3.8-27B shows a path to significant speed-ups without accuracy loss. By identifying and penalizing 'reasoning-marker tokens' that trigger overthinking, this model slashes 'thinking token' usage by 58.3 percent.

This translates to a remarkable 1.95x speed-up on tasks from general reasoning to agentic coding, while maintaining near-identical performance with less than 1 percent loss. It challenges the assumption that more internal monologue always means better outcomes.

This is not about a smaller model, but a smarter reasoning process, offering a direct path to lower operational costs and faster response times for your AI applications.
