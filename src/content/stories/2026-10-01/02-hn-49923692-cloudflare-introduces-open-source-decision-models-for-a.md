---
title: Cloudflare introduces open source decision models for agent workflows
source: hn
url: https://blog.cloudflare.com/clef-decision-models/
date: '2026-10-01'
tags:
- agentic-workflows
- catchup
- decision-models
- hn
- reinforcement-learning
- structured-outputs
- workers-ai
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49923692'
comments: https://news.ycombinator.com/item?id=49923692
why_read: Learn how lightweight, open-source decision models provide fast and deterministic
  structured outputs for autonomous agent workflows without relying on heavyweight
  generative LLMs.
authors:
- jasondavies
image: /infographics/02-hn-49923692.jpg
---

Using large language models for simple control-flow decisions in agentic workflows is often wasteful and slow. Full LLMs are non-deterministic, have high inference latency, and produce unstructured text that requires fragile parsing layers just to route a single ticket or trigger an API escalation.

Cloudflare has open-sourced Clef and Clef-flash under the Apache 2.0 license to address this problem. These are specialized, open-weight decision models designed to produce fast, typed outputs with associated probabilities. Instead of generating arbitrary text, decision models map dynamic inputs directly to bounded decision categories across agent loops without needing retraining for every schema update.

Alongside the model weights, they released an RL fine-tuning platform that lets teams tailor these decision boundaries to custom domains. Offloading low-level orchestration decisions from heavy foundation models to lean, deterministic classification models reduces execution latency while making multi-agent state machines substantially more predictable.
