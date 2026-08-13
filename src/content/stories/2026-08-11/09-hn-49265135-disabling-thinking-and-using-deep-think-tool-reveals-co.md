---
title: Disabling thinking and using deep_think tool reveals CoT reasoning
source: hn
url: https://twitter.com/_can1357/status/2087228354399265125
date: '2026-08-11'
tags:
- ai-models
- api-vulnerability
- catchup
- chain-of-thought
- hn
- model-reasoning
- system-prompts
section: ai
interest_score: 8
depth_score: 7
utility_score: 8
novelty_score: 8
hn_id: '49265135'
comments: https://news.ycombinator.com/item?id=49265135
why_read: This text reveals a vulnerability in frontier AI model APIs that allows
  users to extract internal Chain-of-Thought reasoning by disabling the default 'thinking'
  process and using a 'deep_think' tool. Readers will learn about a method for uncovering
  the hidden reasoning of AI models.
authors:
- "Can B\xF6l\xFCk"
---

Did you know you might be able to 'leak' hidden Chain-of-Thought reasoning from frontier LLMs? A new finding shows that giving models a specific "deep_think" tool can force them to output their internal CoT format.

This works across OpenAI and Anthropic models, and the output reasoning even correlates 1:1 with billed 'thinking tokens'. This is more than a curiosity; it is a direct peek into how these models process information.

For engineers building AI agents, understanding this mechanism is invaluable. It offers a new avenue for debugging complex agentic behavior, refining prompt engineering strategies, and potentially building more transparent and controllable AI systems.
