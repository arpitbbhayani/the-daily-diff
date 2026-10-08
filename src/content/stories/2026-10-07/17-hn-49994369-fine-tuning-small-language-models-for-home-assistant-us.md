---
title: Fine-tuning small language models for Home Assistant using GRPO
source: hn
url: https://www.neelabhbuilds.com/writing/training-a-small-model-to-run-a-house
date: '2026-10-07'
tags:
- catchup
- grpo
- hn
- home-assistant
- tool-calling
section: ai
is_news: false
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49994369'
comments: https://news.ycombinator.com/item?id=49994369
why_read: Learn how reinforcement learning via GRPO enables small open-weight language
  models to reliably handle complex smart home commands and tool use.
authors:
- Neelabh Kumar
---

Running complex agentic tool calls on local hardware usually falls flat because lightweight models struggle with edge cases. By applying Group Relative Policy Optimization (GRPO) directly to Qwen-1.7B, accuracy on Home Assistant benchmarks jumped from 75.0 percent to 89.8 percent across hundreds of simulated homes.

The benchmark evaluates multi-turn device orchestration across 403 rigorous tests. Passing requires the model to emit the exact tool call so the entire home state matches the expected outcome, handling ambiguous commands and multiple sensors with identical names.

Instead of relying on massive cloud models for edge tasks, targeted reinforcement learning allows tiny parameter models to master domain-specific action spaces. This drastically reduces inference latency while keeping smart home execution strictly private and deterministic.

Small, specialized models fine-tuned with policy optimization will replace generalist API calls for home edge automation.
