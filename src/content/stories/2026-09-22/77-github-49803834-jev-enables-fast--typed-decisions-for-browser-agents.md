---
title: Jev enables fast, typed decisions for browser agents
source: github
url: https://github.com/ZephyrDeng/ego-jev
date: '2026-09-22'
tags:
- agent-architecture
- browser-agent
- catchup
- dom-automation
- fast-interaction
- github
- system-one-ai
- typed-decision-loop
section: ai
interest_score: 8
depth_score: 7
utility_score: 8
novelty_score: 8
hn_id: '49803834'
comments: https://news.ycombinator.com/item?id=49803834
why_read: Read this to understand a novel, high-speed approach to browser agent automation
  called Jev. You will learn how it uses a type-safe "System One" inner loop for rapid,
  deterministic DOM interactions, bypassing the need for slow LLM turns in common
  scenarios.
authors:
- ZephyrDeng
---

Building fast browser agents? The `ego-jev` project offers a compelling alternative to full LLM turns for every DOM step, delivering typed decisions in approximately 0.4 seconds.

This is achieved through a "System One" inner loop that handles basic interactions by numbering elements and picking operations, only escalating complex tasks like text generation or screenshot analysis to a full LLM planner. This architectural split makes agents far more efficient.

The `jev-ultrafast` sibling project demonstrated a Zürich to London Google Flights booking in just 7.1 seconds. This approach provides a practical blueprint for developing high-performance, cost-effective AI agents that interact with web interfaces, a significant win for applied AI.
