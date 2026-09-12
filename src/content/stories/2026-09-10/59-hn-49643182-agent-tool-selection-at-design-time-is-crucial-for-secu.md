---
title: Agent tool selection at design time is crucial for security
source: hn
url: https://www.promptone.ai/blog/agent-should-never-choose-its-own-tools/
date: '2026-09-10'
tags:
- ai-agent
- catchup
- compiled-workflow-agent
- design-time-security
- hn
- model-context-protocol
- runtime-reasoning-agent
- tool-selection
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49643182'
comments: https://news.ycombinator.com/item?id=49643182
why_read: This article explains why AI agents, particularly workflow agents, should
  have their tools chosen and validated at design time rather than runtime. It details
  the security and governance benefits, contrasting runtime-reasoning and compiled
  workflow architectures.
authors:
- chris_marino
---

The common approach of letting an AI agent dynamically select its tools at runtime is a significant hidden cost and security risk, especially for enterprise workflows. This post makes a compelling case for a "compiled workflow agent" architecture.

Instead of runtime reasoning, where the LLM decides which tool to call, this approach validates and fixes tool decisions at design time. This drastically cuts token usage, as tool definitions no longer need to be crammed into every context window, and dramatically reduces response variability, leading to more predictable and reliable agent behavior.

For any senior engineer building production AI agents, this is a fundamental architectural shift. Prioritizing design-time validation and explicit tool pathways ensures governance, enhances security, and ultimately leads to more robust and cost-efficient agent systems.
