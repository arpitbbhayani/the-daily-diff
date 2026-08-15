---
title: The Harness Is The Bottleneck
source: hn
url: https://www.chrismdp.com/the-harness-is-the-bottleneck/
date: '2026-08-13'
tags:
- catchup
- cost-efficiency
- deepseek-v4-flash
- hn
- llm-orchestration
- model-evaluation
- software-factory
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49290930'
comments: https://news.ycombinator.com/item?id=49290930
why_read: This post demonstrates how a cheaper LLM, DeepSeek V4-Flash, can be highly
  effective when the workflow (harness) around it is optimized. Readers will learn
  about shifting the bottleneck from model cost to orchestration and practical model
  evaluation strategies.
authors:
- speckx
---

Stop chasing the perfect LLM; the real bottleneck is your agent's harness. A team running production coding agents found that optimizing task decomposition, context management, and using cheaper models like DeepSeek V4-Flash yielded significant gains.

This means focusing on how you feed the model, how you break down problems, and how you evaluate outcomes. They use GitHub issues for tasks and orchestrate with Opus, effectively turning each task into an A/B test for different models.

The takeaway is clear: do not just swap models. Instead, invest in robust orchestration, smarter prompt engineering, and structured evaluation. That is where you will find your biggest performance and cost improvements for agentic workflows.
