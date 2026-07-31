---
authors:
- Jiabao Ji
- Yujian Liu
- Li An
- Rohit Jain
- Gungor Polatkan
- Siyu Zhu
- Shiyu Chang
comments: https://news.ycombinator.com/item?id=49097565
date: '2026-07-29'
depth_score: 8
hn_id: '49097565'
image: /infographics/49-hn-49097565.jpg
interest_score: 8
novelty_score: 8
section: ai
source: hn
tags:
- catchup
- hn
- latency-hiding
- llm-agents
- next-tool-call-prediction
- reinforcement-learning
- self-speculating-agent
- tool-call-speculation
title: Agents predict next tool calls by unifying agent and speculator models
url: https://arxiv.org/abs/2607.25816
utility_score: 8
why_read: This paper introduces a novel method to reduce latency in large language
  model agent tool calls. Readers will learn how a unified agent and speculator model
  can predict future tool calls, improving efficiency.
---

LLM agents often grind to a halt waiting for tool execution. This paper introduces a clever solution: a "self-speculating agent" that predicts and pre-executes its next tool call, effectively hiding latency.

The innovation here is unifying the agent and the speculator into a single model. Instead of separate draft models, the agent itself learns to predict its next action, using a joint agent-speculator reinforcement learning method.

This approach yields substantial improvements, boosting next tool-call Hit@1 from 44.1 to 61.2 for Qwen3-4B, without sacrificing overall task success. For anyone building or deploying AI agents, this offers a clear path to faster, more responsive systems.

Stop waiting, start speculating.