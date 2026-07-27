---
authors:
- Tanishq
comments: https://news.ycombinator.com/item?id=49050800
date: '2026-07-25'
depth_score: 8
hn_id: '49050800'
image: /infographics/35-hn-49050800.jpg
interest_score: 8
novelty_score: 8
section: ai
source: hn
tags:
- ai-agents
- caching
- catchup
- context-management
- hn
- inference-costs
- language-models
title: Stop Re-Buying AI Agent Context to Avoid Personality Tax
url: https://tanishq.xyz/engineering/agent-personality-tax
utility_score: 9
why_read: This article explains how to dramatically cut inference costs for AI agents
  by separating static 'personality' context from dynamic task context. Readers will
  learn how naive caching can backfire and discover more effective caching strategies.
---

Running always-on AI agents can quickly become expensive, not because of complex reasoning, but due to something called the 'personality tax': repeatedly re-sending static context with every prompt. One engineer cut their inference bill by 85% by tackling this head-on.

The key insight is distinguishing between static agent instructions and dynamic task context. Naive prefix caching often fails because even a minor, dynamic element (like a timestamp) invalidates the entire cache. The solution involves sophisticated prompt engineering with two cache breakpoints.

This approach helps separate stable tool definitions and personality traits from ephemeral task details. It is a highly practical and novel strategy for anyone looking to optimize LLM usage and reduce infrastructure costs for production AI agents.