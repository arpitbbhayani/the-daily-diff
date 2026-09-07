---
title: KV-cache manipulations enable interactive LLMs at inference time
source: hn
url: https://research.yandex.com/blog/the-kv-cache-as-an-agent-runtime
date: '2026-09-05'
tags:
- agent-runtime
- catchup
- concurrent-processing
- hn
- inference-time
- interactivity
- kv-cache
- llms
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49578969'
comments: https://news.ycombinator.com/item?id=49578969
why_read: This article explains how manipulating the KV cache at inference time can
  make large language models interactive. Readers will learn how this approach enables
  concurrent observation and action in LLMs without requiring additional training
  or model changes.
authors:
- puhsu
---

Leveraging the KV cache of large language models as a dynamic agent runtime is a fascinating and genuinely novel concept. Instead of merely being a memory optimization, this approach allows for concurrent observation, reasoning, and acting directly within the LLM's inference mechanics.

The Yandex team suggests this method enables interactivity without requiring additional model training. This is a significant systems-level insight for building more responsive and adaptable AI agents, especially for continuously evolving environments like games or robotics.

It fundamentally changes how we might think about LLM inference, moving beyond sequential tool calls to a shared-state runtime. For senior engineers tackling agentic AI, this offers a powerful mental model for designing next-generation interactive AI systems.
