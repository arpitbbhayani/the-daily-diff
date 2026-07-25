---
authors:
- AndrewLiu96
comments: https://news.ycombinator.com/item?id=49011806
date: '2026-07-22'
depth_score: 8
hn_id: '49011806'
image: /infographics/11-hn-49011806.jpg
interest_score: 8
novelty_score: 7
section: ai
source: hn
tags:
- cache-affinity
- catchup
- cost-control
- hn
- llm-router
- privacy
- security
- self-hosted
title: Millwright Offers Self-Hosted LLM Routing for Cost and Performance
url: https://github.com/Northwood-Systems/millwright
utility_score: 8
why_read: This describes Millwright, an open-source, self-hosted LLM router. Readers
  will learn how it enables policy, cache affinity, and spend control for AI applications
  by routing requests to various model providers.
---

Building reliable AI applications requires robust LLM infrastructure. Millwright, a new Rust-based, self-hosted LLM router, tackles critical aspects like cost efficiency, deterministic routing, and performance optimization for your AI stack.

It smartly routes OpenAI Chat Completions and Anthropic Messages to various providers, selecting the lowest-cost healthy route for defined 'cheap,' 'mid,' and 'frontier' models. Crucially, it preserves provider/model affinity for prompt-cache reuse, which slashes token usage and latency.

This tool is a game-changer for engineering teams serious about controlling spend and ensuring consistent LLM performance in production. It offers a practical blueprint for building resilient and cost-effective LLM backends.

Master your LLM interactions with strategic routing and caching.