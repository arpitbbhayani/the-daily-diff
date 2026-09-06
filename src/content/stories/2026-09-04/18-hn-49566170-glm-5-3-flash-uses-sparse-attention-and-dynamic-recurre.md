---
title: GLM-5.3-Flash uses sparse attention and dynamic recurrent KDA state
source: hn
url: https://idlemachines.co.uk/essays/glm-5-3-flash
date: '2026-09-04'
tags:
- catchup
- fast-weights
- glm-5.3-flash
- hn
- kimi-delta-attention
- model-memory
- recurrent-neural-networks
- sparse-attention
section: ai
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 8
hn_id: '49566170'
comments: https://news.ycombinator.com/item?id=49566170
why_read: This article explains the innovative memory architecture of GLM-5.3-Flash,
  detailing how it uses sparse attention and a recurrent KDA state for efficient context
  management. Readers will learn about the different types of memory and the concept
  of fast weights in large language models.
authors:
- smaddrellmander
---

The GLM-5.3-Flash model from Z.ai is challenging the omnipresence of vanilla attention by introducing a novel architectural twist: Kimi Delta Attention (KDA). Unlike standard attention that retains every token, KDA updates a fixed-size dynamic memory matrix, essentially compressing the context and forcing the model to extract relevant patterns.

This means GLM models possess three types of memory: fixed pretrained parameters, the growing KV cache, and a recurrent KDA state that dynamically changes based on input. This recurrent state is a powerful concept, allowing the model to adapt its internal representation in real-time.

For senior engineers optimizing LLM inference or building agentic systems, understanding these alternatives to token-heavy attention is critical. It offers a path to greater efficiency and potentially more sophisticated reasoning, moving beyond just increasing context window size. This is not just a tweak; it is a different way for models to "think" with their context.
