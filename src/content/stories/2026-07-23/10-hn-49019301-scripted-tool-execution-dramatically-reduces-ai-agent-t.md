---
authors:
- tarasyarema
comments: https://news.ycombinator.com/item?id=49019301
date: '2026-07-23'
depth_score: 7
hn_id: '49019301'
image: /infographics/10-hn-49019301.jpg
interest_score: 8
novelty_score: 8
section: ai
source: hn
tags:
- ai-agents
- catchup
- code-mode
- hn
- sandbox
- script-execution
- token-reduction
- tool-calls
title: Scripted tool execution dramatically reduces AI agent token usage
url: https://www.agent-swarm.dev/blog/code-mode-token-savings
utility_score: 9
why_read: Learn how adopting a "Code Mode" approach, where AI agents execute a single
  script for many tool calls within a sandbox, can reduce token usage by over 98%.
  It provides a concrete production measurement using real-world data.
---

Implementing a "code mode" for AI agents can slash token costs by over 99%, as demonstrated by Agent Swarm. Instead of making 26 individual tool calls and passing all raw JSON payloads through the model's context, their system distills it to one script execution.

This approach runs a single generated script within a sandboxed subprocess. Only the final, summarized result reaches the agent, eliminating massive context bloat. Cloudflare and Anthropic have explored similar ideas, but Agent Swarm provides concrete production numbers, showing a task that once cost 150,000 tokens can now cost 2,000.

This is a game-changer for anyone building production AI agents, shifting the focus from simply calling tools to intelligently orchestrating complex operations within a constrained context. It is about working smarter, not just throwing more tokens at the problem.