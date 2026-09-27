---
title: Jev-Mem builds efficient agentic memory using System-One control
source: hn
url: https://academy.dair.ai/papers/jev-mem-system-one-controlled-agentic-memory-for-efficient-ai-agents-2609.23986
date: '2026-09-25'
tags:
- agentic-memory
- ai-agents
- catchup
- hn
- llm-efficiency
- memory-organization
- memory-retrieval
- system-one-system-two-cognition
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49850669'
comments: https://news.ycombinator.com/item?id=49850669
why_read: This paper introduces Jev-Mem, an agentic memory architecture that uses
  a System-One controller to enhance AI agent efficiency. Readers will understand
  how separating fast memory operations from slow LLM reasoning improves both speed
  and accuracy in long-horizon AI agents.
authors:
- Dongming Jiang
- Yi Li
- Bingzhe Li
---

Building AI agents often means battling slow, expensive memory operations driven by LLMs. Jev-Mem tackles this head-on with a System-One/System-Two cognitive architecture, pushing LLMs off the critical path for memory.

A lightweight System-One controller handles rapid memory organization and retrieval, only invoking the slower System-Two LLM for complex reasoning. This division of labor delivers substantial gains: 11% accuracy improvements and 36.7% faster query latency compared to current systems.

This is not just an academic curiosity; it is a blueprint for making long-horizon AI agents genuinely performant and cost-effective. Rethink your agent's memory architecture.
