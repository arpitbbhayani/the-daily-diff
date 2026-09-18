---
title: Legion Embeds AI Agents in Elixir Applications to Act
source: hn
url: https://legion.swmansion.com/
date: '2026-09-16'
tags:
- ai-agents
- authentication
- catchup
- code-generation
- elixir
- hn
- runtime
- sandboxing
- tool-calling
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49726662'
comments: https://news.ycombinator.com/item?id=49726662
why_read: Understand how to integrate capable AI agents directly into Elixir applications,
  enabling them to perform actions by writing code. Learn about Legion's key features,
  including sandboxing, tool calling, and production-ready safeguards.
authors:
- dimamik
---

Giving AI agents actual agency by letting them write and execute code inside your application sounds powerful, but also risky. Legion offers a compelling solution for Elixir developers.

This library enables agents to generate Lua (or Elixir) code to compose tools and perform tasks, all within a strictly sandboxed environment. Every execution is monitored with time, memory, and CPU limits, ensuring that the agent cannot break out of its designated boundaries.

The genius here is moving beyond simple tool calling to true code execution, while maintaining critical security and control. You define which functions it may touch, and it can reason over your code to achieve complex goals, all with auditable conversations and actions saved in your own database.
