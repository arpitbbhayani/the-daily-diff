---
title: Building state-of-the-art coding agents with limited resources
source: hn
url: https://timdettmers.com/2026/01/27/building-open-coding-agent-sera/
date: '2026-09-13'
tags:
- catchup
- coding-agents
- finetuning
- hn
- large-language-models
- private-codebase-integration
- resource-efficiency
- sera
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49681819'
comments: https://news.ycombinator.com/item?id=49681819
why_read: Read this to learn how a small team built a powerful coding agent, SERA,
  with limited resources, achieving state-of-the-art performance. It details the technical
  challenges and breakthroughs in efficiently finetuning large models for private
  codebases.
authors:
- Tim Dettmers
---

Building state-of-the-art coding agents does not always require industrial-scale compute or hundreds of GPUs. A team built SERA, an open coding agent, with just 32 GPUs, achieving impressive results that rival or even exceed the performance of much larger teacher models on private codebases.

They dive deep into the technical journey, sharing specific approaches to data generation that are often overlooked in academic papers. Their "soft-verified generation" technique, for example, directly addresses the common 'copy problem' in agents and allows for efficient fine-tuning of 32B models in just a few GPU days. This practical innovation is key.

This post offers a masterclass in optimizing resources and tackling real-world challenges in AI agent development. It provides concrete insights that can fundamentally change how you approach building capable agents, especially when faced with infrastructure constraints, focusing on smart data engineering over raw compute.
