---
title: Shunt plugin offloads I/O heavy work for significant token savings
source: github
url: https://github.com/sorantis/portal-ai-plugins/tree/add-shunt-claude/plugins/shunt
date: '2026-09-07'
tags:
- ai-workflow
- aika-modes
- catchup
- claude-plugin
- github
- io-offloading
- portal-cli
- token-optimization
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49598706'
comments: https://news.ycombinator.com/item?id=49598706
why_read: This text introduces the 'shunt' Claude Code plugin, demonstrating how to
  significantly reduce token usage and costs by offloading I/O-heavy tasks to specialized
  AiKA modes. Readers will learn about a practical approach to optimizing AI interactions
  and understand the architectural layers involved.
authors:
- Bluestein
---

A critical challenge in building LLM agents is managing token context and cost, especially with I/O-heavy operations. This Claude Code plugin presents an elegant solution: 'shunting' work to specialized modes.

The approach uses a three-layer system: hooks proactively block large file reads, redirecting them to a bulk-reader skill. Scripts then handle the actual invocation and cleanup, while skills inform Claude when and how to delegate. This is not just a theoretical concept; it delivers an astounding 82-94 percent token saving on tasks like large file reads.

This is a masterclass in context engineering for agents. It demonstrates that optimizing agent performance often comes down to smarter workflow delegation and explicit control over information flow, rather than just relying on larger models. This approach offers a tangible blueprint for any team building robust, cost-effective AI assistants.
