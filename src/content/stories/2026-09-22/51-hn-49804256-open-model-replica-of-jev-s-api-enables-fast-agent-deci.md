---
title: Open Model Replica of Jev's API Enables Fast Agent Decisions
source: hn
url: https://blocks.ai/blog/jev-open-model-doom
date: '2026-09-22'
tags:
- agent-systems
- catchup
- hn
- language-models
- low-latency
- open-source
- zero-shot-classification
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49804256'
comments: https://news.ycombinator.com/item?id=49804256
why_read: This article explains how to build a low-latency, zero-shot classification
  system inspired by Jev's API using an open-source language model. Readers will learn
  how this approach enables fast, typed decisions for agent-based applications like
  game AI.
authors:
- stephenblum
---

Need AI agents to make lightning-fast decisions without generating lengthy text? This project shows how to replicate a "System One Model" API using the Gemma4 base model for zero-shot classification with incredibly low latency.

Instead of full generation, the method leverages next-token logits and softmax for highly efficient probability-based decisions. The team demonstrated its real-time capabilities by using it to play Doom, achieving decision times as low as 100-124 milliseconds per forward pass.

This is a game-changer for agent-to-agent communication and any applied AI scenario demanding quick, deterministic actions. It teaches a valuable lesson in optimizing LLMs for speed over verbosity.
