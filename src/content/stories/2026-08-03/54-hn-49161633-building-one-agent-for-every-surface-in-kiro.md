---
title: Building one agent for every surface in Kiro
source: hn
url: https://kiro.dev/blog/one-agent/
date: '2026-08-03'
tags:
- agent-architecture
- agentic-development
- catchup
- developer-experience
- hn
- session-management
- unified-agent
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49161633'
comments: https://news.ycombinator.com/item?id=49161633
why_read: This post details how Kiro consolidated its agent architecture into a single
  harness to enable seamless, continuous development across various client surfaces.
  Readers will understand the technical challenges of disparate agents and the architectural
  approach to achieve a unified agentic development experience.
authors:
- t2f2
---

Building robust AI agents that work seamlessly across different environments is hard. Kiro faced this head-on, sharing how they unified disparate agent codebases into a single, powerful agent harness.

Their initial approach led to separate agents for IDE, CLI, and web, creating friction. The solution: a consolidated architecture managing the agent loop, tool execution, and session state. This allows a session to start on a laptop, continue in the cloud, and pick up on a phone.

This post offers concrete architectural decisions for building portable and persistent agent systems. If you are designing LLM infrastructure, understanding these challenges and Kiro's solutions will be incredibly valuable. It is a masterclass in evolving an agent architecture for true ubiquity.
