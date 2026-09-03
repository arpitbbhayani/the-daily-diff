---
title: Extensible MCP proxy creates zero trust for AI agents
source: github
url: https://github.com/SenteLabsAI/extensible-mcp
date: '2026-09-01'
tags:
- access-control
- ai-agents
- catchup
- extensible-mcp
- github
- llm-security
- proxy
- rego-policy
- tool-loading
- zero-trust
section: ai
interest_score: 9
depth_score: 8
utility_score: 9
novelty_score: 9
hn_id: '49520552'
comments: https://news.ycombinator.com/item?id=49520552
why_read: This repository introduces an architectural solution for securing AI agents
  against manipulation, demonstrating how to enforce deterministic policy and provide
  zero-trust execution. Readers will learn about a practical approach to building
  robust, verifiable agentic systems.
authors:
- banuakman
---

Securing AI agents is a paramount, yet often overlooked, challenge. The core problem is that an LLM can be "talked into anything" by its input, making traditional security models insufficient.

extensible-mcp tackles this head-on with a "Zero Trust for an Agentic World" proxy architecture. This proxy sits between the LLM and its tools, enforcing actions via a Rego policy pipeline that the model itself cannot access or manipulate. This is a game-changer for production AI.

It also dynamically loads tools and uses retrieval for selection, avoiding prompt-stuffing. This means the agent proposes actions, but the proxy, governed by immutable policy, makes the final commitment. This approach provides critical provable control and addresses a fundamental security vulnerability in agentic systems.
